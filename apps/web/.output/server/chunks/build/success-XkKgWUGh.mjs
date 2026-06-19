import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { b as useSeoMeta, g as useRoute, e as useFetch, f as useRuntimeConfig } from './server.mjs';
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
  __name: "success",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Pembayaran Berhasil \u2014 Autobot",
      description: "Halaman konfirmasi pembayaran sesi konsultasi Autobot melalui Xendit."
    });
    const route = useRoute();
    const config = useRuntimeConfig();
    const meetingId = computed(() => String(route.query.id || ""));
    const statusUrl = computed(
      () => meetingId.value ? `${config.public.apiBase}/api/meetings/${meetingId.value}/status` : ""
    );
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      statusUrl,
      {
        server: false,
        lazy: true,
        immediate: false
      },
      "$Qght6Vxzs2"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const meeting = computed(() => data.value || null);
    const paymentStatus = computed(() => {
      var _a;
      return String(((_a = meeting.value) == null ? void 0 : _a.payment_status) || "").toLowerCase();
    });
    const isPaid = computed(() => paymentStatus.value === "paid" || paymentStatus.value === "settled");
    const isExpired = computed(() => paymentStatus.value === "expired");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto" }, _attrs))}>`);
      if (!unref(meetingId)) {
        _push(`<div class="rounded-2xl border border-white/10 bg-white/3 p-8 text-center"><h1 class="text-2xl font-bold text-white mb-2">Invoice tidak ditemukan</h1><p class="text-gray-400 mb-6">ID pembayaran tidak tersedia di URL.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/order",
          class: "inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold",
          style: { "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Kembali ke Order `);
            } else {
              return [
                createTextVNode(" Kembali ke Order ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="rounded-3xl border border-white/10 bg-white/3 p-8 sm:p-10"><div class="flex items-center gap-3 mb-6"><div class="w-12 h-12 rounded-2xl flex items-center justify-center" style="${ssrRenderStyle(unref(isPaid) ? "background: rgba(34,197,94,0.14);" : "background: rgba(124,58,237,0.14);")}">`);
        if (unref(isPaid)) {
          _push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
        } else {
          _push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"></path><path d="M12 22v-6"></path><path d="M4.93 4.93l4.24 4.24"></path><path d="M14.83 14.83l4.24 4.24"></path><path d="M2 12h6"></path><path d="M16 12h6"></path><path d="M4.93 19.07l4.24-4.24"></path><path d="M14.83 9.17l4.24-4.24"></path></svg>`);
        }
        _push(`</div><div><p class="${ssrRenderClass([unref(isPaid) ? "text-green-400" : "text-purple-300", "text-xs font-semibold uppercase tracking-[0.22em]"])}">${ssrInterpolate(unref(isPaid) ? "Pembayaran Berhasil" : "Menunggu Verifikasi")}</p><h1 class="text-3xl font-bold text-white">${ssrInterpolate(((_a = unref(meeting)) == null ? void 0 : _a.name) || "Autobot Consultation")}</h1></div></div><p class="text-gray-400 leading-relaxed mb-6">`);
        if (unref(isPaid)) {
          _push(`<span> Pembayaran Anda sudah tercatat. Tim kami akan meninjau detail booking dan menghubungi Anda maksimal 1x24 jam pada hari kerja. </span>`);
        } else if (unref(isExpired)) {
          _push(`<span> Invoice pembayaran sudah kedaluwarsa. Silakan buka ulang halaman pembayaran untuk membuat invoice baru. </span>`);
        } else {
          _push(`<span> Pembayaran belum sepenuhnya terkonfirmasi. Halaman ini akan memeriksa status transaksi secara berkala. </span>`);
        }
        _push(`</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"><div class="rounded-2xl p-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(255,255,255,0.08)" })}"><div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">ID Booking</div><div class="text-sm text-white font-medium break-all">${ssrInterpolate(unref(meetingId))}</div></div><div class="rounded-2xl p-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(255,255,255,0.08)" })}"><div class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Status</div><div class="text-sm text-white font-medium uppercase">${ssrInterpolate(((_b = unref(meeting)) == null ? void 0 : _b.payment_status) || (unref(pending) ? "loading" : "unknown"))}</div></div></div>`);
        if (unref(error)) {
          _push(`<p class="mb-5 rounded-xl px-4 py-3 text-sm text-red-300" style="${ssrRenderStyle({ "background": "rgba(239,68,68,0.08)", "border": "1px solid rgba(239,68,68,0.18)" })}"> Gagal memuat status pembayaran. </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-wrap gap-3">`);
        if ((_c = unref(meeting)) == null ? void 0 : _c.payment_url) {
          _push(`<a${ssrRenderAttr("href", unref(meeting).payment_url)} class="inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c3aed, #2563eb)", "color": "white" })}"> Buka Ulang Invoice </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/order",
          class: "inline-flex px-5 py-2.5 rounded-xl text-sm font-medium",
          style: { "background": "rgba(255,255,255,0.06)", "color": "#F0F0F0", "border": "1px solid rgba(255,255,255,0.10)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Kembali ke Order `);
            } else {
              return [
                createTextVNode(" Kembali ke Order ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a href="https://wa.me/6282164867681" target="_blank" rel="noopener" class="inline-flex px-5 py-2.5 rounded-xl text-sm font-medium" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.12)", "color": "#86efac", "border": "1px solid rgba(34,197,94,0.22)" })}"> Hubungi WhatsApp </a></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/meeting/success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=success-XkKgWUGh.mjs.map
