import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
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
    const data = ref(null);
    const products = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const deleting = ref(null);
    const statusColor = {
      active: "bg-green-500/20 text-green-400",
      archived: "bg-gray-500/20 text-gray-400",
      draft: "bg-yellow-500/20 text-yellow-400"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-6xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold text-white">Products</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products/new",
        class: "px-4 h-9 rounded-lg bg-white text-black text-sm font-medium flex items-center gap-1.5 hover:bg-gray-200 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + New Product `);
          } else {
            return [
              createTextVNode(" + New Product ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="rounded-2xl border border-white/8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><table class="w-full text-sm"><thead><tr class="border-b border-white/8 text-xs text-gray-500"><th class="px-5 py-3 text-left font-medium">Name</th><th class="px-5 py-3 text-left font-medium">Slug</th><th class="px-5 py-3 text-left font-medium">Category</th><th class="px-5 py-3 text-left font-medium">Status</th><th class="px-5 py-3 text-right font-medium">Actions</th></tr></thead><tbody class="divide-y divide-white/5"><!--[-->`);
      ssrRenderList(unref(products), (p) => {
        _push(`<tr class="hover:bg-white/3 transition-colors"><td class="px-5 py-3 text-white font-medium">${ssrInterpolate(p.name)}</td><td class="px-5 py-3 text-gray-400 font-mono text-xs">${ssrInterpolate(p.slug)}</td><td class="px-5 py-3 text-gray-400">${ssrInterpolate(p.category)}</td><td class="px-5 py-3"><span class="${ssrRenderClass([statusColor[p.status] || "bg-gray-500/20 text-gray-400", "text-xs px-2 py-0.5 rounded-full"])}">${ssrInterpolate(p.status)}</span></td><td class="px-5 py-3 text-right"><div class="flex items-center justify-end gap-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/products/${p.id}`,
          class: "text-xs text-blue-400 hover:text-blue-300"
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
        _push(`<button${ssrIncludeBooleanAttr(unref(deleting) === p.id) ? " disabled" : ""} class="text-xs text-red-400 hover:text-red-300 disabled:opacity-50">${ssrInterpolate(unref(deleting) === p.id ? "..." : "Archive")}</button></div></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!unref(products).length) {
        _push(`<tr><td colspan="5" class="px-5 py-10 text-center text-gray-600">No products yet</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BSPJlFBs.mjs.map
