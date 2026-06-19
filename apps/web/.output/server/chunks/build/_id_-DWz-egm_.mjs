import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrLooseEqual } from 'vue/server-renderer';
import { g as useRoute, b as useSeoMeta } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isNew = route.params.id === "new";
    useSeoMeta({ title: isNew ? "Artikel Baru \u2014 Admin" : "Edit Artikel \u2014 Admin", robots: "noindex" });
    const loading = ref(!isNew);
    const saving = ref(false);
    const saved = ref(false);
    const error = ref("");
    const form = reactive({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      cover_image: "",
      author: "Autobot Team",
      category: "general",
      tags: "",
      is_published: false,
      read_time_minutes: 5,
      sort_order: 0
    });
    const categories = ["general", "tutorial", "update", "tips", "case-study", "announcement"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-4xl mx-auto w-full" }, _attrs))}><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/blog",
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
      _push(`<h1 class="text-xl font-bold text-white">${ssrInterpolate(isNew ? "Artikel Baru" : "Edit Artikel")}</h1><div class="ml-auto flex items-center gap-2">`);
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
      _push(`<label class="flex items-center gap-2 cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_published) ? ssrLooseContain(unref(form).is_published, null) : unref(form).is_published) ? " checked" : ""} class="w-4 h-4 rounded accent-indigo-500"><span class="text-sm text-gray-400">Publish</span></label><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-50 transition-all" style="${ssrRenderStyle({ "background": "#6366f1" })}">${ssrInterpolate(unref(saving) ? "Menyimpan..." : isNew ? "Buat Artikel" : "Simpan")}</button></div></div>`);
      if (unref(loading)) {
        _push(`<div class="h-64 flex items-center justify-center"><div class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div></div>`);
      } else {
        _push(`<div class="space-y-5"><div><label class="block text-xs text-gray-500 mb-1.5">Judul Artikel *</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="Judul artikel..." class="w-full h-11 rounded-xl px-4 text-white text-base font-medium outline-none transition-colors" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div><label class="block text-xs text-gray-500 mb-1.5">Slug (URL)</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" placeholder="url-artikel" class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div><div><label class="block text-xs text-gray-500 mb-1.5">Kategori</label><select class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="${ssrRenderStyle({ "background": "rgba(30,30,40,1)", "border": "1px solid rgba(255,255,255,0.10)" })}"><!--[-->`);
        ssrRenderList(categories, (c) => {
          _push(`<option${ssrRenderAttr("value", c)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, c) : ssrLooseEqual(unref(form).category, c)) ? " selected" : ""}>${ssrInterpolate(c)}</option>`);
        });
        _push(`<!--]--></select></div><div><label class="block text-xs text-gray-500 mb-1.5">Author</label><input${ssrRenderAttr("value", unref(form).author)} type="text" placeholder="Autobot Team" class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="block text-xs text-gray-500 mb-1.5">Cover Image URL</label><input${ssrRenderAttr("value", unref(form).cover_image)} type="text" placeholder="https://..." class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}">`);
        if (unref(form).cover_image) {
          _push(`<img${ssrRenderAttr("src", unref(form).cover_image)} class="mt-2 h-24 object-cover rounded-lg">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid grid-cols-2 gap-3"><div><label class="block text-xs text-gray-500 mb-1.5">Waktu Baca (menit)</label><input${ssrRenderAttr("value", unref(form).read_time_minutes)} type="number" min="1" class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div><div><label class="block text-xs text-gray-500 mb-1.5">Sort Order</label><input${ssrRenderAttr("value", unref(form).sort_order)} type="number" class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div></div></div><div><label class="block text-xs text-gray-500 mb-1.5">Excerpt (ringkasan)</label><textarea rows="2" placeholder="Ringkasan singkat artikel..." class="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none resize-none" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}">${ssrInterpolate(unref(form).excerpt)}</textarea></div><div><label class="block text-xs text-gray-500 mb-1.5">Konten (Markdown)</label><textarea rows="20" placeholder="Tulis artikel dalam format Markdown...

## Heading

Paragraf teks..." class="w-full rounded-xl px-4 py-3 text-sm text-white outline-none resize-y font-mono leading-relaxed" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)", "min-height": "400px" })}">${ssrInterpolate(unref(form).content)}</textarea></div><div><label class="block text-xs text-gray-500 mb-1.5">Tags (JSON array, misal: [&quot;chatbot&quot;,&quot;whatsapp&quot;])</label><input${ssrRenderAttr("value", unref(form).tags)} type="text" placeholder="[&quot;chatbot&quot;,&quot;whatsapp&quot;]" class="w-full h-10 rounded-xl px-3 text-sm text-white outline-none font-mono" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.10)" })}"></div><div class="flex justify-end pt-2"><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-6 py-2.5 rounded-xl text-sm font-medium text-white disabled:opacity-50" style="${ssrRenderStyle({ "background": "#6366f1" })}">${ssrInterpolate(unref(saving) ? "Menyimpan..." : isNew ? "Buat Artikel" : "Simpan Perubahan")}</button></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DWz-egm_.mjs.map
