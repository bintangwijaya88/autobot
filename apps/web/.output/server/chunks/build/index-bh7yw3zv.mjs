import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { b as useSeoMeta } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Blog \u2014 Admin", robots: "noindex" });
    const posts = ref([]);
    const total = ref(0);
    const loading = ref(true);
    const deleting = ref(null);
    function fmtDate(d) {
      return new Date(d).toLocaleDateString("id", { day: "2-digit", month: "short", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-5xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><div><h1 class="text-xl font-bold text-white">Blog</h1><p class="text-xs text-gray-500 mt-0.5">${ssrInterpolate(unref(total))} artikel</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/blog/new",
        class: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all",
        style: { "background": "#6366f1" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="14" height="14" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"${_scopeId}></path></svg> Artikel Baru `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 20 20",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M10 4v12M4 10h12",
                  stroke: "currentColor",
                  "stroke-width": "1.8",
                  "stroke-linecap": "round"
                })
              ])),
              createTextVNode(" Artikel Baru ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(loading)) {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="rounded-xl border border-white/8 p-4 h-20 animate-pulse" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!unref(posts).length) {
        _push(`<div class="rounded-2xl border border-white/8 py-16 text-center" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><p class="text-gray-500 text-sm">Belum ada artikel. Buat artikel pertama Anda!</p></div>`);
      } else {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(unref(posts), (p) => {
          _push(`<div class="flex items-start gap-4 rounded-xl border border-white/8 p-4 hover:border-white/16 transition-all" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}">`);
          if (p.cover_image) {
            _push(`<img${ssrRenderAttr("src", p.cover_image)} class="w-16 h-16 object-cover rounded-lg shrink-0">`);
          } else {
            _push(`<div class="w-16 h-16 rounded-lg shrink-0 flex items-center justify-center" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)" })}"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="opacity-30"><path d="M4 4h12M4 8h12M4 12h7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div>`);
          }
          _push(`<div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-0.5"><span class="${ssrRenderClass([p.is_published ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400", "text-[11px] px-1.5 py-0.5 rounded-full"])}">${ssrInterpolate(p.is_published ? "Published" : "Draft")}</span>`);
          if (p.category) {
            _push(`<span class="text-[11px] px-1.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300">${ssrInterpolate(p.category)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="font-medium text-white truncate">${ssrInterpolate(p.title)}</p><p class="text-xs text-gray-500 truncate">${ssrInterpolate(p.excerpt)}</p><p class="text-[11px] text-gray-600 mt-0.5">${ssrInterpolate(p.author)} \xB7 ${ssrInterpolate(fmtDate(p.created_at))} \xB7 ${ssrInterpolate(p.read_time_minutes)} min read</p></div><div class="flex items-center gap-2 shrink-0">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/admin/blog/${p.id}`,
            class: "text-xs text-blue-400 hover:text-blue-300 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Edit`);
              } else {
                return [
                  createTextVNode("Edit")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button${ssrIncludeBooleanAttr(unref(deleting) === p.id) ? " disabled" : ""} class="text-xs text-red-500 hover:text-red-400 disabled:opacity-40 transition-colors">Hapus</button></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bh7yw3zv.mjs.map
