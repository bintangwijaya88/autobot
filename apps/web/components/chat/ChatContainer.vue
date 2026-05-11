<template>
  <div class="flex flex-col h-full relative overflow-hidden">

    <!-- Ambient glow (welcome state only) -->
    <Transition name="glow-fade">
      <div v-if="!chatStore.hasStarted" class="absolute inset-0 pointer-events-none z-0">
        <!-- Main centered glow -->
        <div class="absolute inset-0" style="background: radial-gradient(ellipse 90% 70% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 65%);" />
        <!-- Soft top bloom -->
        <div class="absolute inset-0" style="background: radial-gradient(ellipse 60% 40% at 50% 20%, rgba(99,102,241,0.05) 0%, transparent 60%);" />
        <!-- Soft bottom bloom -->
        <div class="absolute inset-0" style="background: radial-gradient(ellipse 60% 35% at 50% 85%, rgba(59,130,246,0.04) 0%, transparent 55%);" />
      </div>
    </Transition>

    <!-- Welcome → Messages transition -->
    <Transition name="chat-enter" mode="out-in">

      <!-- WELCOME: centered -->
      <div
        v-if="!chatStore.hasStarted"
        key="welcome"
        class="flex-1 flex flex-col items-center justify-center relative z-10"
      >
        <ChatWelcome @send="$emit('send', $event)" />
      </div>

      <!-- MESSAGES: anchored to bottom -->
      <div
        v-else
        key="messages"
        class="flex-1 flex flex-col min-h-0 relative z-10"
      >
        <div
          ref="messagesRef"
          class="flex-1 overflow-y-auto px-4 py-6 space-y-5"
        >
          <ChatBubble
            v-for="msg in chatStore.messages"
            :key="msg.id"
            :message="msg"
            @action="$emit('action', $event)"
            @scroll="scrollToBottom"
          />
          <ChatTyping v-if="chatStore.isTyping" />
          <div ref="bottomRef" class="h-1" />
        </div>

        <!-- Follow-up suggestions -->
        <div
          v-if="chatStore.suggestions.length && !chatStore.isTyping"
          class="px-4 pb-2 shrink-0"
        >
          <ChatSuggestions :suggestions="chatStore.suggestions" @send="$emit('send', $event)" />
        </div>
      </div>

    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from '~/stores/chat'

defineEmits<{
  send: [text: string]
  action: [payload: any]
}>()

const chatStore = useChatStore()
const bottomRef = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
  bottomRef.value?.scrollIntoView({ behavior: 'smooth' })
}

watch(() => chatStore.messages.length, () => {
  nextTick(scrollToBottom)
})
watch(() => chatStore.isTyping, (v) => {
  if (v) nextTick(scrollToBottom)
})
</script>

<style scoped>
/* Welcome screen exits upward, messages enter from below */
.chat-enter-enter-active {
  animation: slideUpIn 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.chat-enter-leave-active {
  animation: slideUpOut 0.22s ease-in both;
}

@keyframes slideUpIn {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideUpOut {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-16px); }
}

/* Glow fade */
.glow-fade-leave-active {
  transition: opacity 0.4s ease;
}
.glow-fade-leave-to { opacity: 0; }
</style>
