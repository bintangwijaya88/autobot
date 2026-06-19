import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const page = ref(0);
    const data = ref(null);
    const sessions = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const total = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.total) || 0;
    });
    async function refresh() {
      const token = localStorage.getItem("admin_token") || "";
      data.value = await $fetch(`${config.public.apiBase}/api/admin/sessions?limit=20&offset=${page.value * 20}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    watch(page, refresh);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen",
        style: { "background": "var(--bg-primary)" }
      }, _attrs))}><nav class="border-b px-6 py-4 flex items-center gap-4" style="${ssrRenderStyle({ "border-color": "var(--border-color)" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/dashboard",
        class: "text-gray-400 hover:text-white text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Dashboard`);
          } else {
            return [
              createTextVNode("\u2190 Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-white font-medium">Chat Sessions</span></nav><div class="max-w-6xl mx-auto px-6 py-8"><div class="flex items-center justify-between mb-6"><h1 class="text-2xl font-bold text-white">Sessions <span class="text-gray-500 font-normal text-lg">(${ssrInterpolate(unref(total))})</span></h1><button class="text-sm text-gray-400 hover:text-white">\u21BB Refresh</button></div><div class="rounded-2xl border border-white/10 overflow-hidden"><table class="w-full text-sm"><thead><tr class="border-b" style="${ssrRenderStyle({ "border-color": "var(--border-color)" })}"><th class="text-left px-4 py-3 text-gray-500 font-medium">Visitor</th><th class="text-left px-4 py-3 text-gray-500 font-medium">Source</th><th class="text-left px-4 py-3 text-gray-500 font-medium">Status</th><th class="text-left px-4 py-3 text-gray-500 font-medium">Created</th><th class="px-4 py-3"></th></tr></thead><tbody class="divide-y" style="${ssrRenderStyle({ "border-color": "var(--border-color)" })}"><!--[-->`);
      ssrRenderList(unref(sessions), (s) => {
        var _a;
        _push(`<tr class="hover:bg-white/3 transition-colors"><td class="px-4 py-3"><p class="text-white">${ssrInterpolate(s.visitor_name || "Anonymous")}</p><p class="text-gray-600 text-xs">${ssrInterpolate(s.visitor_email || ((_a = s.visitor_id) == null ? void 0 : _a.slice(0, 12)) + "...")}</p></td><td class="px-4 py-3 text-gray-400">${ssrInterpolate(s.source)}</td><td class="px-4 py-3"><span class="${ssrRenderClass([s.status === "active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400", "text-xs px-2 py-0.5 rounded-full"])}">${ssrInterpolate(s.status)}</span></td><td class="px-4 py-3 text-gray-500 text-xs">${ssrInterpolate(new Date(s.created_at).toLocaleString("id"))}</td><td class="px-4 py-3 text-right">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/sessions/${s.id}`,
          class: "text-blue-400 hover:text-blue-300 text-xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Detail \u2192`);
            } else {
              return [
                createTextVNode("Detail \u2192")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]-->`);
      if (!unref(sessions).length) {
        _push(`<tr><td colspan="5" class="px-4 py-8 text-center text-gray-600">Belum ada sessions</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/sessions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C0l7TWyu.mjs.map
