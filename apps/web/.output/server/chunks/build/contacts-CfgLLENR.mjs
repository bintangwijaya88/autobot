import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { j as useLocale, a as useSeoMeta } from './server.mjs';
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
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useLocale();
    useSeoMeta({ title: "My Contacts \u2014 Portal", robots: "noindex" });
    useAuth();
    const contacts = ref([]);
    const loading = ref(true);
    const typeLabel = {
      order: "Order",
      consultation_booking: "Konsultasi",
      demo_request: "Demo Request",
      contact: "Kontak",
      consultation_payment: "Pembayaran"
    };
    const typeColor = {
      order: "bg-purple-500/20 text-purple-300",
      consultation_booking: "bg-blue-500/20 text-blue-300",
      demo_request: "bg-yellow-500/20 text-yellow-300",
      contact: "bg-gray-500/20 text-gray-300",
      consultation_payment: "bg-green-500/20 text-green-300"
    };
    const statusColor = {
      new: "bg-indigo-500/20 text-indigo-300",
      in_progress: "bg-yellow-500/20 text-yellow-300",
      closed: "bg-gray-500/20 text-gray-400"
    };
    function fmtDate(d) {
      return new Date(d).toLocaleDateString(locale.value === "id" ? "id-ID" : "en-US", { day: "2-digit", month: "short", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-4xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold text-white">${ssrInterpolate(unref(t)("portal.contacts"))}</h1><span class="text-xs text-gray-500">${ssrInterpolate(unref(contacts).length)} ${ssrInterpolate(unref(locale) === "id" ? "pengiriman" : "submissions")}</span></div>`);
      if (unref(loading)) {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="rounded-xl border border-white/8 p-4 h-24 animate-pulse" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!unref(contacts).length) {
        _push(`<div class="rounded-2xl border border-white/8 py-16 text-center" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><svg width="36" height="36" viewBox="0 0 20 20" fill="none" class="mx-auto mb-3 opacity-20"><rect x="2" y="4" width="16" height="12" rx="2" stroke="white" stroke-width="1.2"></rect><path d="M2 7l8 5 8-5" stroke="white" stroke-width="1.2"></path></svg><p class="text-gray-500 text-sm">${ssrInterpolate(unref(locale) === "id" ? "Belum ada form yang disubmit" : "No forms submitted yet")}</p></div>`);
      } else {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(contacts), (ct) => {
          _push(`<div class="rounded-xl border border-white/8 p-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="flex items-start justify-between gap-3 mb-2"><div class="flex items-center gap-2 flex-wrap"><span class="${ssrRenderClass([typeColor[ct.type] || "bg-gray-500/20 text-gray-300", "text-[11px] px-2 py-0.5 rounded-full font-medium"])}">${ssrInterpolate(typeLabel[ct.type] || ct.type)}</span><span class="${ssrRenderClass([statusColor[ct.status] || "bg-gray-500/20 text-gray-400", "text-[11px] px-2 py-0.5 rounded-full"])}">${ssrInterpolate(ct.status)}</span></div><span class="text-xs text-gray-500 shrink-0">${ssrInterpolate(fmtDate(ct.created_at))}</span></div><div class="space-y-1">`);
          if (ct.company) {
            _push(`<p class="text-sm text-white font-medium">${ssrInterpolate(ct.company)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (ct.product_interest) {
            _push(`<p class="text-xs text-gray-400">${ssrInterpolate(unref(locale) === "id" ? "Produk" : "Product")}: ${ssrInterpolate(ct.product_interest)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (ct.message) {
            _push(`<p class="text-xs text-gray-500 line-clamp-2">${ssrInterpolate(ct.message)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacts-CfgLLENR.mjs.map
