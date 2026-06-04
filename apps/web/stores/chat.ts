import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import type { ChatMessage, SuggestedPrompt, RichContent, WSMessage } from '~/types'

export const useChatStore = defineStore('chat', () => {
  const messages = ref<ChatMessage[]>([])
  const isTyping = ref(false)
  const currentStreamId = ref<string | null>(null)
  const suggestions = ref<SuggestedPrompt[]>([
    { text: 'Lihat semua produk', icon: 'Package', category: 'product' },
    { text: 'Saya butuh chatbot WhatsApp', icon: 'MessageCircle', category: 'chatbot' },
    { text: 'Mau blast promo ke banyak kontak', icon: 'Send', category: 'blast' },
    { text: 'Butuh automasi proses bisnis', icon: 'GitMerge', category: 'automation' },
    { text: 'Custom development', icon: 'Code', category: 'custom' },
    { text: 'Tentang perusahaan', icon: 'Building', category: 'company' },
  ])
  const sessionId = ref<string | null>(null)
  const hasStarted = ref(false)
  const userName = ref<string | null>(null)
  const accessKey = ref<string | null>(null)
  const pendingSend = ref<string | null>(null)

  const addMessage = (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    messages.value.push({
      ...msg,
      id: nanoid(),
      timestamp: new Date(),
    })
    hasStarted.value = true
  }

  const startStream = (messageId: string) => {
    isTyping.value = false
    currentStreamId.value = messageId
    messages.value.push({
      id: messageId,
      role: 'assistant',
      content: '',
      isStreaming: true,
      timestamp: new Date(),
    })
  }

  const appendToken = (messageId: string, token: string) => {
    const msg = messages.value.find(m => m.id === messageId)
    if (msg) msg.content += token
  }

  const endStream = (messageId: string, richContent?: RichContent, newSuggestions?: SuggestedPrompt[]) => {
    const msg = messages.value.find(m => m.id === messageId)
    if (msg) {
      msg.isStreaming = false
      if (richContent) msg.richContent = richContent
    }
    currentStreamId.value = null
    if (newSuggestions?.length) suggestions.value = newSuggestions
  }

  const handleWSMessage = (msg: WSMessage) => {
    switch (msg.type) {
      case 'session_init':
        if (msg.suggestions) suggestions.value = msg.suggestions
        if (msg.content && messages.value.length === 0) {
          addMessage({ role: 'assistant', content: msg.content, isTypingAnim: true })
        }
        break

      case 'message':
        isTyping.value = false
        addMessage({
          role: (msg.role as 'user' | 'assistant') || 'assistant',
          content: msg.content || '',
          richContent: msg.rich_content,
          isTypingAnim: msg.role === 'assistant' || !msg.role,
        })
        if (msg.suggestions) suggestions.value = msg.suggestions
        break

      case 'typing':
        isTyping.value = true
        break

      case 'stream_start':
        if (msg.message_id) startStream(msg.message_id)
        break

      case 'stream_token':
        if (msg.message_id && msg.token) appendToken(msg.message_id, msg.token)
        break

      case 'stream_end':
        if (msg.message_id) endStream(msg.message_id, msg.rich_content, msg.suggestions)
        if (msg.content && msg.message_id) {
          const m = messages.value.find(x => x.id === msg.message_id)
          if (m && !m.content) m.content = msg.content || ''
        }
        break

      case 'user_authenticated':
        if (msg.user_name) userName.value = msg.user_name
        if (msg.access_key) accessKey.value = msg.access_key
        break

      case 'error':
        isTyping.value = false
        addMessage({ role: 'assistant', content: msg.error || 'Terjadi kesalahan.' })
        break
    }
  }

  const clearMessages = () => {
    messages.value = []
    hasStarted.value = false
    isTyping.value = false
    currentStreamId.value = null
  }

  const triggerSend = (text: string) => { pendingSend.value = text }

  return {
    messages, isTyping, suggestions, sessionId, hasStarted, userName, accessKey, pendingSend,
    addMessage, startStream, appendToken, endStream, handleWSMessage, clearMessages, triggerSend,
  }
})
