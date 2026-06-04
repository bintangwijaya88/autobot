import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { j as useLocale, a as useSeoMeta, d as useRoute } from './server.mjs';
import { u as useAuth } from './useAuth-DEGSgRVW.mjs';
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
    const { locale } = useLocale();
    useSeoMeta({ title: "Chat Detail \u2014 Portal", robots: "noindex" });
    useRoute();
    useAuth();
    const messages = ref([]);
    const session = ref(null);
    const loading = ref(true);
    const error = ref("");
    function fmtTime(d) {
      return new Date(d).toLocaleTimeString(locale.value === "id" ? "id-ID" : "en-US", { hour: "2-digit", minute: "2-digit" });
    }
    function fmtDate(d) {
      return new Date(d).toLocaleDateString(locale.value === "id" ? "id-ID" : "en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-3xl mx-auto w-full" }, _attrs))}><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portal/chats",
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
      _push(`<div><h1 class="text-base font-bold text-white">${ssrInterpolate(unref(locale) === "id" ? "Detail Chat" : "Chat Detail")}</h1>`);
      if (unref(session)) {
        _push(`<p class="text-xs text-gray-500">${ssrInterpolate(fmtDate(unref(session).created_at))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(loading)) {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="rounded-xl p-4 h-16 animate-pulse" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)" })}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(error)) {
        _push(`<div class="rounded-xl border border-red-500/20 p-6 text-center text-red-400 text-sm">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(messages), (msg) => {
          _push(`<div class="${ssrRenderClass([msg.role === "user" ? "justify-end" : "justify-start", "flex"])}"><div class="${ssrRenderClass([msg.role === "user" ? "rounded-br-sm text-white" : "rounded-bl-sm text-gray-100", "max-w-[78%] rounded-2xl px-4 py-3 text-sm"])}" style="${ssrRenderStyle(msg.role === "user" ? "background: rgba(99,102,241,0.25); border: 1px solid rgba(99,102,241,0.30);" : "background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09);")}"><p class="leading-relaxed whitespace-pre-wrap">${ssrInterpolate(msg.content)}</p><p class="text-[10px] mt-1.5 opacity-40">${ssrInterpolate(fmtTime(msg.created_at))}</p></div></div>`);
        });
        _push(`<!--]-->`);
        if (!unref(messages).length) {
          _push(`<div class="text-center py-10 text-gray-500 text-sm">${ssrInterpolate(unref(locale) === "id" ? "Tidak ada pesan dalam sesi ini" : "No messages in this session")}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/chats/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CK_7wUvO.mjs.map
