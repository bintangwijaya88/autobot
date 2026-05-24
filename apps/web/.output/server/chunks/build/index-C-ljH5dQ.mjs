import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderTeleport, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref(null);
    const pages = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const editing = ref(null);
    const editTitle = ref("");
    const editContent = ref("");
    const editPublished = ref(true);
    const saving = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-5xl mx-auto w-full" }, _attrs))}><h1 class="text-xl font-bold text-white mb-6">Content / Pages</h1><div class="rounded-2xl border border-white/8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><table class="w-full text-sm"><thead><tr class="border-b border-white/8 text-xs text-gray-500"><th class="px-5 py-3 text-left font-medium">Slug</th><th class="px-5 py-3 text-left font-medium">Title</th><th class="px-5 py-3 text-left font-medium">Published</th><th class="px-5 py-3 text-left font-medium">Updated</th><th class="px-5 py-3 text-right font-medium">Actions</th></tr></thead><tbody class="divide-y divide-white/5"><!--[-->`);
      ssrRenderList(unref(pages), (p) => {
        _push(`<tr class="hover:bg-white/3 transition-colors"><td class="px-5 py-3 text-gray-400 font-mono text-xs">${ssrInterpolate(p.slug)}</td><td class="px-5 py-3 text-white">${ssrInterpolate(p.title)}</td><td class="px-5 py-3"><span class="${ssrRenderClass([p.is_published ? "text-green-400" : "text-gray-500", "text-xs"])}">${ssrInterpolate(p.is_published ? "Published" : "Draft")}</span></td><td class="px-5 py-3 text-xs text-gray-500">${ssrInterpolate(new Date(p.updated_at).toLocaleDateString("id"))}</td><td class="px-5 py-3 text-right"><button class="text-xs text-blue-400 hover:text-blue-300">Edit</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!unref(pages).length) {
        _push(`<tr><td colspan="5" class="px-5 py-10 text-center text-gray-600">No pages found</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(editing)) {
          _push2(`<div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.7)" })}"><div class="w-full max-w-2xl rounded-2xl border border-white/15 p-6" style="${ssrRenderStyle({ "background": "#1a1a1a", "max-height": "90vh", "overflow-y": "auto" })}"><div class="flex items-center justify-between mb-4"><h2 class="text-white font-semibold">Edit: ${ssrInterpolate(unref(editing).slug)}</h2><label class="flex items-center gap-2 text-sm text-gray-400 cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(editPublished)) ? ssrLooseContain(unref(editPublished), null) : unref(editPublished)) ? " checked" : ""} class="rounded"> Published </label></div>`);
          if (unref(error)) {
            _push2(`<div class="mb-3 px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-xs">${ssrInterpolate(unref(error))}</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="space-y-3"><div><label class="block text-xs text-gray-500 mb-1.5">Title</label><input${ssrRenderAttr("value", unref(editTitle))} class="admin-input w-full" placeholder="Page title"></div><div><label class="block text-xs text-gray-500 mb-1.5">Content (Markdown)</label><textarea rows="16" class="admin-input w-full font-mono text-xs" placeholder="# Heading
Content here...">${ssrInterpolate(unref(editContent))}</textarea></div></div><div class="flex justify-end gap-3 mt-5"><button class="px-4 h-9 rounded-lg border border-white/15 text-gray-400 text-sm hover:text-white">Cancel</button><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-5 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 disabled:opacity-50">${ssrInterpolate(unref(saving) ? "Saving..." : "Save Page")}</button></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/content/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C-ljH5dQ.mjs.map
