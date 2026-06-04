import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
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
    useSeoMeta({ title: "Content \u2014 Admin", robots: "noindex" });
    const pages = ref([]);
    const loading = ref(true);
    const deleting = ref(null);
    function fmtDate(d) {
      return new Date(d).toLocaleDateString("id", { day: "2-digit", month: "short", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-5xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><div><h1 class="text-xl font-bold text-white">Content / Pages</h1><p class="text-xs text-gray-500 mt-0.5">${ssrInterpolate(unref(pages).length)} halaman</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/content/new",
        class: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white",
        style: { "background": "#6366f1" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="14" height="14" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"${_scopeId}></path></svg> Halaman Baru `);
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
              createTextVNode(" Halaman Baru ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(loading)) {
        _push(`<div class="rounded-2xl border border-white/8 p-8 text-center text-gray-500 animate-pulse" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}">Memuat...</div>`);
      } else {
        _push(`<div class="rounded-2xl border border-white/8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><table class="w-full text-sm"><thead><tr class="border-b border-white/8" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Slug</th><th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Judul</th><th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Status</th><th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Update</th><th class="px-5 py-3 text-right text-xs font-medium text-gray-500">Aksi</th></tr></thead><tbody class="divide-y divide-white/5"><!--[-->`);
        ssrRenderList(unref(pages), (p) => {
          _push(`<tr class="hover:bg-white/2 transition-colors"><td class="px-5 py-3 font-mono text-xs text-gray-400">${ssrInterpolate(p.slug)}</td><td class="px-5 py-3 text-white font-medium">${ssrInterpolate(p.title)}</td><td class="px-5 py-3"><span class="${ssrRenderClass([p.is_published ? "text-green-400" : "text-gray-500", "text-xs"])}">${ssrInterpolate(p.is_published ? "Published" : "Draft")}</span></td><td class="px-5 py-3 text-xs text-gray-500">${ssrInterpolate(fmtDate(p.updated_at))}</td><td class="px-5 py-3 text-right"><div class="flex items-center justify-end gap-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/admin/content/${p.slug}`,
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
          _push(`<button${ssrIncludeBooleanAttr(unref(deleting) === p.slug) ? " disabled" : ""} class="text-xs text-red-500 hover:text-red-400 disabled:opacity-40 transition-colors">Hapus</button></div></td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(pages).length) {
          _push(`<tr><td colspan="5" class="px-5 py-12 text-center text-gray-600 text-sm">Belum ada halaman</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div>`);
      }
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
//# sourceMappingURL=index-CsAXWdNW.mjs.map
