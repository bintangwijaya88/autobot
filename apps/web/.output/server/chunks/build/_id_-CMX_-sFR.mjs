import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { g as useRoute } from './server.mjs';
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
    const pending = ref(true);
    const session = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.session;
    });
    const messages = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.messages) || [];
    });
    function roleLabel(role) {
      return role === "assistant" ? "Bot" : "User";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen",
        style: { "background": "var(--bg-primary)" }
      }, _attrs))}><nav class="border-b px-6 py-4 flex items-center gap-4" style="${ssrRenderStyle({ "border-color": "var(--border-color)" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/sessions",
        class: "text-gray-400 hover:text-white text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Sessions`);
          } else {
            return [
              createTextVNode("\u2190 Sessions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-white font-medium">Session Detail</span></nav>`);
      if (!unref(pending) && unref(session)) {
        _push(`<div class="max-w-4xl mx-auto px-6 py-8"><div class="rounded-2xl border border-white/8 p-5 mb-6 grid grid-cols-2 gap-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div><p class="text-xs text-gray-500 mb-0.5">Visitor</p><p class="text-white text-sm font-medium">${ssrInterpolate(unref(session).visitor_name || "Anonymous")}</p><p class="text-gray-500 text-xs">${ssrInterpolate(unref(session).visitor_email || "\u2014")}</p></div><div><p class="text-xs text-gray-500 mb-0.5">Source / Status</p><p class="text-white text-sm">${ssrInterpolate(unref(session).source)} \xB7 <span class="${ssrRenderClass(unref(session).status === "active" ? "text-green-400" : "text-gray-400")}">${ssrInterpolate(unref(session).status)}</span></p><p class="text-gray-500 text-xs">${ssrInterpolate(new Date(unref(session).created_at).toLocaleString("id"))}</p></div></div><div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(messages), (msg) => {
          _push(`<div class="rounded-xl border border-white/6 p-4" style="${ssrRenderStyle(msg.role === "assistant" ? "background: rgba(255,255,255,0.02)" : "background: rgba(99,102,241,0.08)")}"><div class="flex items-center gap-2 mb-1.5"><span class="${ssrRenderClass([msg.role === "assistant" ? "text-blue-400" : "text-indigo-300", "text-xs font-medium"])}">${ssrInterpolate(roleLabel(msg.role))}</span><span class="text-gray-600 text-xs">${ssrInterpolate(new Date(msg.created_at).toLocaleTimeString("id"))}</span></div><p class="text-gray-300 text-sm whitespace-pre-wrap">${ssrInterpolate(msg.content)}</p></div>`);
        });
        _push(`<!--]-->`);
        if (!unref(messages).length) {
          _push(`<p class="text-center text-gray-600 py-8">Belum ada pesan</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else if (unref(pending)) {
        _push(`<div class="flex items-center justify-center py-24"><div class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/sessions/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CMX_-sFR.mjs.map
