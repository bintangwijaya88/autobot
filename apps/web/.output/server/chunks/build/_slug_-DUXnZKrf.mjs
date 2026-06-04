import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { d as useRoute, a as useSeoMeta } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'nanoid';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isNew = route.params.slug === "new";
    useSeoMeta({ title: isNew ? "Halaman Baru \u2014 Admin" : "Edit Halaman \u2014 Admin", robots: "noindex" });
    const loading = ref(!isNew);
    const saving = ref(false);
    const saved = ref(false);
    const error = ref("");
    const form = reactive({
      slug: "",
      title: "",
      content: "",
      is_published: true,
      sort_order: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-4xl mx-auto w-full" }, _attrs))}><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/content",
        class: "text-gray-500 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M12 5l-6 5 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 20 20",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M12 5l-6 5 6 5",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-xl font-bold text-white">${ssrInterpolate(isNew ? "Halaman Baru" : "Edit Halaman")}</h1><div class="ml-auto flex items-center gap-3">`);
      if (unref(saved)) {
        _push(`<span class="text-xs text-green-400">\u2713 Tersimpan</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<span class="text-xs text-red-400">${ssrInterpolate(unref(error))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="flex items-center gap-2 cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_published) ? ssrLooseContain(unref(form).is_published, null) : unref(form).is_published) ? " checked" : ""} class="w-4 h-4 accent-indigo-500"><span class="text-sm text-gray-400">Published</span></label><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-50" style="${ssrRenderStyle({ "background": "#6366f1" })}">${ssrInterpolate(unref(saving) ? "Menyimpan..." : isNew ? "Buat Halaman" : "Simpan")}</button></div></div>`);
      if (unref(loading)) {
        _push(`<div class="h-48 flex items-center justify-center"><div class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div></div>`);
      } else {
        _push(`<div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="md:col-span-2"><label class="block text-xs text-gray-500 mb-1.5">Judul *</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="Judul halaman..." class="w-full h-11 rounded-xl px-4 text-white font-medium outline-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div><div><label class="block text-xs text-gray-500 mb-1.5">Slug (URL) *</label><input${ssrRenderAttr("value", unref(form).slug)} type="text"${ssrIncludeBooleanAttr(!isNew) ? " disabled" : ""} placeholder="url-halaman" class="w-full h-11 rounded-xl px-4 text-white font-mono text-sm outline-none disabled:opacity-50" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div></div><div><label class="block text-xs text-gray-500 mb-1.5">Sort Order</label><input${ssrRenderAttr("value", unref(form).sort_order)} type="number" class="w-32 h-10 rounded-xl px-3 text-sm text-white outline-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div><div><label class="block text-xs text-gray-500 mb-1.5">Konten (Markdown)</label><textarea rows="24" placeholder="# Heading

Konten halaman dalam format Markdown..." class="w-full rounded-xl px-4 py-3 text-sm text-white outline-none resize-y font-mono leading-relaxed" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)", "min-height": "500px" })}">${ssrInterpolate(unref(form).content)}</textarea></div><div class="flex justify-end pt-2"><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-6 py-2.5 rounded-xl text-sm font-medium text-white disabled:opacity-50" style="${ssrRenderStyle({ "background": "#6366f1" })}">${ssrInterpolate(unref(saving) ? "Menyimpan..." : isNew ? "Buat Halaman" : "Simpan Perubahan")}</button></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/content/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DUXnZKrf.mjs.map
