import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderTeleport } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref(null);
    const templates = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const previewHTML = ref("");
    const previewTitle = ref("");
    const showPreview = ref(false);
    const sending = ref(null);
    const sendResult = ref(null);
    const activeForm = ref(null);
    const testTo = ref("");
    const editedVars = ref({});
    const typeColors = {
      verification: "bg-blue-500/15 text-blue-400 border-blue-500/25",
      welcome: "bg-green-500/15 text-green-400 border-green-500/25",
      order_confirm: "bg-purple-500/15 text-purple-400 border-purple-500/25",
      consultation: "bg-orange-500/15 text-orange-400 border-orange-500/25",
      follow_up: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
      proposal: "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
      newsletter: "bg-pink-500/15 text-pink-400 border-pink-500/25"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-5xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><div><h1 class="text-xl font-bold text-white">Email Templates</h1><p class="text-xs text-gray-600 mt-0.5">${ssrInterpolate(unref(templates).length)} template tersedia</p></div></div>`);
      if (unref(sendResult)) {
        _push(`<div class="${ssrRenderClass([unref(sendResult).ok ? "bg-green-500/10 border-green-500/25 text-green-400" : "bg-red-500/10 border-red-500/25 text-red-400", "mb-4 px-4 py-3 rounded-xl border text-sm"])}">${ssrInterpolate(unref(sendResult).ok ? "\u2705" : "\u274C")} ${ssrInterpolate(unref(sendResult).message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(templates), (tmpl) => {
        _push(`<div class="rounded-2xl border border-white/8 overflow-hidden transition-colors" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="px-5 py-4 flex items-start gap-4"><div class="flex-1 min-w-0"><div class="flex items-center gap-2.5 mb-1.5 flex-wrap"><span class="font-medium text-white text-sm">${ssrInterpolate(tmpl.name)}</span><span class="${ssrRenderClass([typeColors[tmpl.id] || "bg-gray-500/15 text-gray-400 border-gray-500/25", "text-[11px] px-2 py-0.5 rounded-full border"])}">${ssrInterpolate(tmpl.id)}</span></div><p class="text-xs text-gray-500">${ssrInterpolate(tmpl.description)}</p><p class="text-[11px] text-gray-700 mt-1 font-mono truncate">Subject: ${ssrInterpolate(tmpl.subject)}</p></div><div class="flex items-center gap-2 shrink-0"><button class="px-3 h-8 rounded-lg border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/25 transition-colors"> Preview </button><button class="px-3 h-8 rounded-lg bg-white/8 border border-white/10 text-xs text-gray-300 hover:text-white hover:bg-white/12 transition-colors">${ssrInterpolate(unref(activeForm) === tmpl.id ? "Cancel" : "Send Test")}</button></div></div>`);
        if (unref(activeForm) === tmpl.id) {
          _push(`<div class="border-t border-white/8 px-5 py-4 bg-white/2"><div class="grid grid-cols-2 gap-3 mb-3"><div class="col-span-2"><label class="block text-xs text-gray-500 mb-1.5">Send To (blank = SMTP_TEST_TO)</label><input${ssrRenderAttr("value", unref(testTo))} type="email" class="admin-input w-full" placeholder="test@example.com"></div><!--[-->`);
          ssrRenderList(unref(editedVars), (val, key) => {
            _push(`<div><label class="block text-xs text-gray-500 mb-1.5">${ssrInterpolate(key)}</label><input${ssrRenderAttr("value", unref(editedVars)[key])} class="admin-input w-full"${ssrRenderAttr("placeholder", String(val))}></div>`);
          });
          _push(`<!--]--></div><div class="flex justify-end"><button${ssrIncludeBooleanAttr(unref(sending) === tmpl.id) ? " disabled" : ""} class="px-4 h-8 rounded-lg bg-white text-black text-xs font-medium hover:bg-gray-200 disabled:opacity-50 transition-colors">${ssrInterpolate(unref(sending) === tmpl.id ? "Sending..." : "Send Email")}</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="px-5 py-2.5 border-t border-white/5 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(tmpl.sample_vars, (val, key) => {
          _push(`<span class="text-[11px] px-2 py-0.5 rounded-full bg-white/4 border border-white/8 text-gray-500"><span class="text-gray-600">${ssrInterpolate(key)}:</span> ${ssrInterpolate(String(val).slice(0, 24))}${ssrInterpolate(String(val).length > 24 ? "\u2026" : "")}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(showPreview)) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.85)" })}"><div class="w-full max-w-2xl flex flex-col rounded-2xl border border-white/15 overflow-hidden" style="${ssrRenderStyle({ "background": "#1a1a1a", "max-height": "90vh" })}"><div class="flex items-center justify-between px-5 py-3 border-b border-white/8 shrink-0"><p class="text-white text-sm font-medium">${ssrInterpolate(unref(previewTitle))}</p><button class="text-gray-500 hover:text-white text-sm px-3 py-1 rounded-lg hover:bg-white/5">Close</button></div><div class="flex-1 overflow-auto"><iframe${ssrRenderAttr("srcdoc", unref(previewHTML))} class="w-full border-0" style="${ssrRenderStyle({ "height": "600px", "background": "#0e0e0e" })}" title="Email Preview"></iframe></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BXhsfqSx.mjs.map
