import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { f as useRuntimeConfig } from './server.mjs';
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

const limit = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const search = ref("");
    const page = ref(0);
    const data = ref(null);
    const users = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const total = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.total) || 0;
    });
    function getHeaders() {
      return { Authorization: `Bearer ${localStorage.getItem("admin_token") || ""}` };
    }
    async function refresh() {
      data.value = await $fetch(
        `${config.public.apiBase}/api/admin/users?search=${search.value}&limit=${limit}&offset=${page.value * limit}`,
        { headers: getHeaders() }
      );
    }
    watch(search, () => {
      page.value = 0;
      refresh();
    });
    watch(page, refresh);
    const toggling = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-6xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold text-white">Users</h1><input${ssrRenderAttr("value", unref(search))} type="search" placeholder="Search by email or name..." class="admin-input w-64"></div><div class="rounded-2xl border border-white/8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><table class="w-full text-sm"><thead><tr class="border-b border-white/8 text-xs text-gray-500"><th class="px-5 py-3 text-left font-medium">Name</th><th class="px-5 py-3 text-left font-medium">Email</th><th class="px-5 py-3 text-left font-medium">Role</th><th class="px-5 py-3 text-left font-medium">Verified</th><th class="px-5 py-3 text-left font-medium">Status</th><th class="px-5 py-3 text-left font-medium">Joined</th><th class="px-5 py-3 text-right font-medium">Actions</th></tr></thead><tbody class="divide-y divide-white/5"><!--[-->`);
      ssrRenderList(unref(users), (u) => {
        _push(`<tr class="hover:bg-white/3 transition-colors"><td class="px-5 py-3 text-white">${ssrInterpolate(u.name || "-")}</td><td class="px-5 py-3 text-gray-400 text-xs">${ssrInterpolate(u.email)}</td><td class="px-5 py-3 text-gray-500 text-xs">${ssrInterpolate(u.role)}</td><td class="px-5 py-3"><span class="${ssrRenderClass([u.is_verified ? "text-green-400" : "text-gray-600", "text-xs"])}">${ssrInterpolate(u.is_verified ? "\u2713 Yes" : "No")}</span></td><td class="px-5 py-3"><span class="${ssrRenderClass([u.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400", "text-xs px-2 py-0.5 rounded-full"])}">${ssrInterpolate(u.is_active ? "Active" : "Inactive")}</span></td><td class="px-5 py-3 text-xs text-gray-500">${ssrInterpolate(new Date(u.created_at).toLocaleDateString("id"))}</td><td class="px-5 py-3 text-right"><div class="flex items-center justify-end gap-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/users/${u.id}`,
          class: "text-xs text-blue-400 hover:text-blue-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Detail`);
            } else {
              return [
                createTextVNode("Detail")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button${ssrIncludeBooleanAttr(unref(toggling) === u.id) ? " disabled" : ""} class="${ssrRenderClass([u.is_active ? "text-red-400 hover:text-red-300" : "text-green-400 hover:text-green-300", "text-xs disabled:opacity-50"])}">${ssrInterpolate(unref(toggling) === u.id ? "..." : u.is_active ? "Deactivate" : "Activate")}</button></div></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!unref(users).length) {
        _push(`<tr><td colspan="7" class="px-5 py-10 text-center text-gray-600">No users found</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table>`);
      if (unref(total) > limit) {
        _push(`<div class="px-5 py-3 border-t border-white/8 flex items-center justify-between text-xs text-gray-500"><span>${ssrInterpolate(unref(total))} total</span><div class="flex gap-2"><button${ssrIncludeBooleanAttr(unref(page) === 0) ? " disabled" : ""} class="px-3 py-1 rounded border border-white/10 hover:border-white/25 disabled:opacity-30">Prev</button><button${ssrIncludeBooleanAttr((unref(page) + 1) * limit >= unref(total)) ? " disabled" : ""} class="px-3 py-1 rounded border border-white/10 hover:border-white/25 disabled:opacity-30">Next</button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dl7BvlqR.mjs.map
