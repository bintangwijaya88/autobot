import type { WSMessage, SuggestedPrompt } from '~/types'

export const useWebSocket = () => {
  const config = useRuntimeConfig()
  let socket: WebSocket | null = null
  const isConnected = ref(false)
  const sessionId = ref<string | null>(null)
  const reconnectTimer = ref<NodeJS.Timeout | null>(null)
  const messageHandlers = ref<Array<(msg: WSMessage) => void>>([])
  let reconnectAttempts = 0
  let shouldReconnect = true

  const connect = (sid?: string) => {
    shouldReconnect = true
    if (socket?.readyState === WebSocket.OPEN) return

    const wsUrl = sid
      ? `${config.public.wsUrl}?session_id=${sid}`
      : config.public.wsUrl

    socket = new WebSocket(wsUrl)

    socket.onopen = () => {
      isConnected.value = true
      reconnectAttempts = 0
      if (reconnectTimer.value) {
        clearTimeout(reconnectTimer.value)
        reconnectTimer.value = null
      }
    }

    socket.onmessage = (event: MessageEvent) => {
      try {
        const msg: WSMessage = JSON.parse(event.data)
        messageHandlers.value.forEach(handler => handler(msg))
      } catch (e) {
        console.error('WS parse error:', e)
      }
    }

    socket.onclose = () => {
      isConnected.value = false
      socket = null
      if (!shouldReconnect) return
      // Exponential backoff reconnect
      const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
      reconnectAttempts++
      reconnectTimer.value = setTimeout(() => {
        if (sessionId.value) connect(sessionId.value)
      }, delay)
    }

    socket.onerror = () => {
      socket?.close()
    }
  }

  const sendMessage = (content: string) => {
    if (!socket || !isConnected.value || !sessionId.value) return
    socket.send(JSON.stringify({
      type: 'message',
      session_id: sessionId.value,
      content,
    }))
  }

  const sendRegister = (name: string, email: string) => {
    if (!socket || !isConnected.value || !sessionId.value) return
    socket.send(JSON.stringify({
      type: 'register',
      session_id: sessionId.value,
      data: { name, email },
    }))
  }

  const submitForm = (formType: string, data: Record<string, string>) => {
    if (!socket || !isConnected.value || !sessionId.value) return
    socket.send(JSON.stringify({
      type: 'form_submit',
      session_id: sessionId.value,
      form_type: formType,
      data,
    }))
  }

  const onMessage = (handler: (msg: WSMessage) => void) => {
    messageHandlers.value.push(handler)
    return () => {
      messageHandlers.value = messageHandlers.value.filter(h => h !== handler)
    }
  }

  const disconnect = () => {
    shouldReconnect = false
    if (reconnectTimer.value) clearTimeout(reconnectTimer.value)
    socket?.close()
    socket = null
    isConnected.value = false
  }

  return { connect, sendMessage, sendRegister, submitForm, onMessage, disconnect, isConnected, sessionId }
}
