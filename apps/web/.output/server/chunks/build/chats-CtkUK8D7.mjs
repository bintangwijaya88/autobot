import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { j as useLocale, a as useSeoMeta, c as useRuntimeConfig } from './server.mjs';
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
  __name: "chats",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useLocale();
    useSeoMeta({ title: "My Chats \u2014 Portal", robots: "noindex" });
    const config = useRuntimeConfig();
    const { currentUser } = useAuth();
    const sessions = ref([]);
    const total = ref(0);
    const page = ref(1);
    const loading = ref(true);
    function headers() {
      var _a;
      return { "X-Access-Key": ((_a = currentUser.value) == null ? void 0 : _a.access_key) || "" };
    }
    async function fetchSessions() {
      loading.value = true;
      try {
        const res = await $fetch(
          `${config.public.apiBase}/api/portal/sessions?page=${page.value}`,
          { headers: headers() }
        );
        sessions.value = res.sessions;
        total.value = res.total;
      } catch {
      }
      loading.value = false;
    }
    watch(page, fetchSessions);
    function statusColor(s) {
      return s === "active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400";
    }
    function fmtDate(d) {
      return new Date(d).toLocaleString(locale.value === "id" ? "id-ID" : "en-US", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-4xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold text-white">${ssrInterpolate(unref(t)("portal.chats"))}</h1><span class="text-xs text-gray-500">${ssrInterpolate(unref(total))} ${ssrInterpolate(unref(locale) === "id" ? "sesi total" : "total sessions")}</span></div>`);
      if (unref(loading)) {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<div class="rounded-xl border border-white/8 p-4 h-20 animate-pulse" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!unref(sessions).length) {
        _push(`<div class="rounded-2xl border border-white/8 py-16 text-center" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><svg width="36" height="36" viewBox="0 0 20 20" fill="none" class="mx-auto mb-3 opacity-20"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="white" stroke-width="1.2"></path></svg><p class="text-gray-500 text-sm">${ssrInterpolate(unref(locale) === "id" ? "Belum ada sesi chat" : "No chat sessions yet")}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "mt-3 inline-block text-indigo-400 text-sm hover:text-indigo-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(locale) === "id" ? "Mulai chat" : "Start chatting")} \u2192`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(locale) === "id" ? "Mulai chat" : "Start chatting") + " \u2192", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(unref(sessions), (s) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: s.id,
            to: `/portal/chats/${s.id}`,
            class: "flex items-start gap-4 rounded-xl border border-white/8 p-4 hover:border-white/16 hover:bg-white/3 transition-all cursor-pointer",
            style: { "background": "rgba(255,255,255,0.02)" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.15)" })}"${_scopeId}><svg width="16" height="16" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="#a5b4fc" stroke-width="1.5"${_scopeId}></path></svg></div><div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center gap-2 mb-0.5"${_scopeId}><span class="text-sm font-medium text-white truncate"${_scopeId}>${ssrInterpolate(s.first_message || (unref(locale) === "id" ? "Sesi chat" : "Chat session"))}</span><span class="${ssrRenderClass([statusColor(s.status), "text-[11px] px-1.5 py-0.5 rounded-full shrink-0"])}"${_scopeId}>${ssrInterpolate(s.status)}</span></div><p class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(fmtDate(s.created_at))} \xB7 ${ssrInterpolate(s.message_count)} pesan</p></div><svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0 mt-1 opacity-30"${_scopeId}><path d="M7 5l6 5-6 5" stroke="white" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg>`);
              } else {
                return [
                  createVNode("div", {
                    class: "w-9 h-9 rounded-xl shrink-0 flex items-center justify-center",
                    style: { "background": "rgba(99,102,241,0.15)" }
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z",
                        stroke: "#a5b4fc",
                        "stroke-width": "1.5"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "flex-1 min-w-0" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-0.5" }, [
                      createVNode("span", { class: "text-sm font-medium text-white truncate" }, toDisplayString(s.first_message || (unref(locale) === "id" ? "Sesi chat" : "Chat session")), 1),
                      createVNode("span", {
                        class: ["text-[11px] px-1.5 py-0.5 rounded-full shrink-0", statusColor(s.status)]
                      }, toDisplayString(s.status), 3)
                    ]),
                    createVNode("p", { class: "text-xs text-gray-500" }, toDisplayString(fmtDate(s.created_at)) + " \xB7 " + toDisplayString(s.message_count) + " pesan", 1)
                  ]),
                  (openBlock(), createBlock("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    class: "shrink-0 mt-1 opacity-30"
                  }, [
                    createVNode("path", {
                      d: "M7 5l6 5-6 5",
                      stroke: "white",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      if (unref(total) > 20) {
        _push(`<div class="flex items-center justify-center gap-3 mt-6"><button${ssrIncludeBooleanAttr(unref(page) <= 1) ? " disabled" : ""} class="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-white/8 hover:border-white/20 disabled:opacity-30 transition-colors"> \u2190 ${ssrInterpolate(unref(locale) === "id" ? "Sebelumnya" : "Prev")}</button><span class="text-xs text-gray-500">${ssrInterpolate(unref(locale) === "id" ? "Hal" : "Page")} ${ssrInterpolate(unref(page))} / ${ssrInterpolate(Math.ceil(unref(total) / 20))}</span><button${ssrIncludeBooleanAttr(unref(page) >= Math.ceil(unref(total) / 20)) ? " disabled" : ""} class="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-white/8 hover:border-white/20 disabled:opacity-30 transition-colors">${ssrInterpolate(unref(locale) === "id" ? "Selanjutnya" : "Next")} \u2192 </button></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/chats.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chats-CtkUK8D7.mjs.map
