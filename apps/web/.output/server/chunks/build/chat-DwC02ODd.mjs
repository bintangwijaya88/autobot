import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';
import { ref } from 'vue';

const useChatStore = defineStore("chat", () => {
  const messages = ref([]);
  const isTyping = ref(false);
  const currentStreamId = ref(null);
  const suggestions = ref([
    { text: "Lihat semua produk", icon: "Package", category: "product" },
    { text: "Saya butuh chatbot WhatsApp", icon: "MessageCircle", category: "chatbot" },
    { text: "Mau blast promo ke banyak kontak", icon: "Send", category: "blast" },
    { text: "Butuh automasi proses bisnis", icon: "GitMerge", category: "automation" },
    { text: "Custom development", icon: "Code", category: "custom" },
    { text: "Tentang perusahaan", icon: "Building", category: "company" }
  ]);
  const sessionId = ref(null);
  const hasStarted = ref(false);
  const userName = ref(null);
  const accessKey = ref(null);
  const pendingSend = ref(null);
  const addMessage = (msg) => {
    messages.value.push({
      ...msg,
      id: nanoid(),
      timestamp: /* @__PURE__ */ new Date()
    });
    hasStarted.value = true;
  };
  const startStream = (messageId) => {
    isTyping.value = false;
    currentStreamId.value = messageId;
    messages.value.push({
      id: messageId,
      role: "assistant",
      content: "",
      isStreaming: true,
      timestamp: /* @__PURE__ */ new Date()
    });
  };
  const appendToken = (messageId, token) => {
    const msg = messages.value.find((m) => m.id === messageId);
    if (msg) msg.content += token;
  };
  const endStream = (messageId, richContent, newSuggestions) => {
    const msg = messages.value.find((m) => m.id === messageId);
    if (msg) {
      msg.isStreaming = false;
      if (richContent) msg.richContent = richContent;
    }
    currentStreamId.value = null;
    if (newSuggestions == null ? void 0 : newSuggestions.length) suggestions.value = newSuggestions;
  };
  const handleWSMessage = (msg) => {
    switch (msg.type) {
      case "session_init":
        if (msg.suggestions) suggestions.value = msg.suggestions;
        if (msg.content) {
          addMessage({ role: "assistant", content: msg.content, isTypingAnim: true });
        }
        break;
      case "message":
        isTyping.value = false;
        addMessage({
          role: msg.role || "assistant",
          content: msg.content || "",
          richContent: msg.rich_content,
          isTypingAnim: msg.role === "assistant" || !msg.role
        });
        if (msg.suggestions) suggestions.value = msg.suggestions;
        break;
      case "typing":
        isTyping.value = true;
        break;
      case "stream_start":
        if (msg.message_id) startStream(msg.message_id);
        break;
      case "stream_token":
        if (msg.message_id && msg.token) appendToken(msg.message_id, msg.token);
        break;
      case "stream_end":
        if (msg.message_id) endStream(msg.message_id, msg.rich_content, msg.suggestions);
        if (msg.content && msg.message_id) {
          const m = messages.value.find((x) => x.id === msg.message_id);
          if (m && !m.content) m.content = msg.content || "";
        }
        break;
      case "user_authenticated":
        if (msg.user_name) userName.value = msg.user_name;
        if (msg.access_key) accessKey.value = msg.access_key;
        break;
      case "error":
        isTyping.value = false;
        addMessage({ role: "assistant", content: msg.error || "Terjadi kesalahan." });
        break;
    }
  };
  const clearMessages = () => {
    messages.value = [];
    hasStarted.value = false;
    isTyping.value = false;
    currentStreamId.value = null;
  };
  const triggerSend = (text) => {
    pendingSend.value = text;
  };
  return {
    messages,
    isTyping,
    suggestions,
    sessionId,
    hasStarted,
    userName,
    accessKey,
    pendingSend,
    addMessage,
    startStream,
    appendToken,
    endStream,
    handleWSMessage,
    clearMessages,
    triggerSend
  };
});

export { useChatStore as u };
//# sourceMappingURL=chat-DwC02ODd.mjs.map
