import { defineComponent, ref, computed, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref(null);
    const entries = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const showForm = ref(false);
    const form = reactive({ category: "", question: "", answer: "", priority: 0 });
    const saving = ref(false);
    const deleting = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-5xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold text-white">Knowledge Base</h1><button class="px-4 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">${ssrInterpolate(unref(showForm) ? "Cancel" : "+ Add Entry")}</button></div>`);
      if (unref(showForm)) {
        _push(`<div class="rounded-2xl border border-white/8 p-5 mb-6 space-y-3" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><h2 class="text-sm font-medium text-white">New Knowledge Entry</h2><div class="grid grid-cols-2 gap-3"><div><label class="block text-xs text-gray-500 mb-1">Category *</label><input${ssrRenderAttr("value", unref(form).category)} class="admin-input w-full" placeholder="pricing / features / product"></div><div><label class="block text-xs text-gray-500 mb-1">Priority</label><input${ssrRenderAttr("value", unref(form).priority)} type="number" class="admin-input w-full" placeholder="0"></div></div><div><label class="block text-xs text-gray-500 mb-1">Question (optional)</label><input${ssrRenderAttr("value", unref(form).question)} class="admin-input w-full" placeholder="Berapa harga WaBlastApp?"></div><div><label class="block text-xs text-gray-500 mb-1">Answer *</label><textarea rows="4" class="admin-input w-full" placeholder="Jawaban lengkap...">${ssrInterpolate(unref(form).answer)}</textarea></div><div class="flex justify-end"><button${ssrIncludeBooleanAttr(unref(saving) || !unref(form).answer || !unref(form).category) ? " disabled" : ""} class="px-5 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 disabled:opacity-50 transition-colors">${ssrInterpolate(unref(saving) ? "Saving..." : "Add Entry")}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(entries), (e) => {
        _push(`<div class="rounded-xl border border-white/8 p-4 hover:border-white/15 transition-colors" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="flex items-start justify-between gap-3"><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1.5"><span class="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">${ssrInterpolate(e.category)}</span><span class="text-xs text-gray-600">priority: ${ssrInterpolate(e.priority)}</span></div>`);
        if (e.question) {
          _push(`<p class="text-sm text-gray-300 font-medium mb-1">Q: ${ssrInterpolate(e.question)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-sm text-gray-400 line-clamp-3">${ssrInterpolate(e.answer)}</p></div><button${ssrIncludeBooleanAttr(unref(deleting) === e.id) ? " disabled" : ""} class="text-xs text-red-400 hover:text-red-300 disabled:opacity-50 shrink-0">${ssrInterpolate(unref(deleting) === e.id ? "..." : "Remove")}</button></div></div>`);
      });
      _push(`<!--]-->`);
      if (!unref(entries).length) {
        _push(`<div class="text-center py-12 text-gray-600">No knowledge entries yet</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/knowledge/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dq5UcRRw.mjs.map
