import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "resources",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Developer Resources \u2014 Autobot",
      description: "Dokumentasi, API reference, dan panduan integrasi Autobot."
    });
    const resources = [
      { icon: "\u{1F4D6}", title: "API Reference", desc: "REST API endpoints untuk integrasi chatbot, session, dan produk." },
      { icon: "\u{1F50C}", title: "WebSocket Guide", desc: "Protokol WebSocket untuk real-time chat dan streaming AI." },
      { icon: "\u{1F9E9}", title: "SDK & Libraries", desc: "SDK JavaScript, Python, dan Go untuk mempercepat integrasi." },
      { icon: "\u{1F4E6}", title: "Webhook Events", desc: "Event payload untuk outgoing webhook ke sistem Anda." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl font-bold tracking-tight mb-3" style="${ssrRenderStyle({ "color": "#F0F0F0", "letter-spacing": "-0.03em" })}">Developer Resources</h1><p class="text-base mb-12" style="${ssrRenderStyle({ "color": "#5A5A5A" })}">Dokumentasi, API reference, dan panduan integrasi.</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(resources, (item) => {
        _push(`<div class="rounded-2xl p-5 transition-all" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(255,255,255,0.07)" })}"><div class="text-2xl mb-3">${ssrInterpolate(item.icon)}</div><h3 class="font-semibold text-[15px] mb-1" style="${ssrRenderStyle({ "color": "#E0E0E0" })}">${ssrInterpolate(item.title)}</h3><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "#5A5A5A" })}">${ssrInterpolate(item.desc)}</p><div class="mt-4 text-[13px] font-medium" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.3)" })}">Segera hadir \u2192</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=resources-RorvrUqN.mjs.map
