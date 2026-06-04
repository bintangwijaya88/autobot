import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { d as useRoute } from './server.mjs';
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
    useRoute();
    const data = ref(null);
    const user = computed(() => data.value || {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-3xl mx-auto w-full" }, _attrs))}><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/users",
        class: "text-gray-500 hover:text-gray-300 text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Users`);
          } else {
            return [
              createTextVNode("\u2190 Users")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-xl font-bold text-white">User Detail</h1></div><div class="rounded-2xl border border-white/8 p-6 space-y-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="grid grid-cols-2 gap-4"><div><p class="text-xs text-gray-500 mb-1">Name</p><p class="text-white">${ssrInterpolate(unref(user).name || "-")}</p></div><div><p class="text-xs text-gray-500 mb-1">Email</p><p class="text-white">${ssrInterpolate(unref(user).email)}</p></div><div><p class="text-xs text-gray-500 mb-1">Role</p><p class="text-white">${ssrInterpolate(unref(user).role)}</p></div><div><p class="text-xs text-gray-500 mb-1">Status</p><span class="${ssrRenderClass([unref(user).is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400", "text-xs px-2 py-0.5 rounded-full"])}">${ssrInterpolate(unref(user).is_active ? "Active" : "Inactive")}</span></div><div><p class="text-xs text-gray-500 mb-1">Email Verified</p><p class="${ssrRenderClass(unref(user).is_verified ? "text-green-400" : "text-gray-500")}">${ssrInterpolate(unref(user).is_verified ? "Yes" : "No")}</p></div><div><p class="text-xs text-gray-500 mb-1">Joined</p><p class="text-white text-sm">${ssrInterpolate(unref(user).created_at ? new Date(unref(user).created_at).toLocaleString("id") : "-")}</p></div></div>`);
      if (unref(user).access_key) {
        _push(`<div><p class="text-xs text-gray-500 mb-1">Access Key</p><p class="text-white font-mono text-xs break-all">${ssrInterpolate(unref(user).access_key)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-lJ72IKUA.mjs.map
