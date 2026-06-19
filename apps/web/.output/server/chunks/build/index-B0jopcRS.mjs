import { defineComponent, ref, reactive, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderTeleport, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { b as useSeoMeta, f as useRuntimeConfig } from './server.mjs';
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
    useSeoMeta({ title: "Meetings \u2014 Admin", robots: "noindex" });
    const config = useRuntimeConfig();
    const meetings = ref([]);
    const stats = ref({ total: 0, paid: 0, pending: 0, confirmed: 0, revenue_idr: 0 });
    const total = ref(0);
    const page = ref(1);
    const filter = ref("");
    const loading = ref(true);
    const editModal = ref(null);
    const editForm = reactive({ status: "", payment_status: "" });
    const resendLoading = ref(null);
    function headers() {
      return { Authorization: `Bearer ${localStorage.getItem("admin_token") || ""}` };
    }
    async function fetchAll() {
      var _a, _b;
      loading.value = true;
      const [m, s] = await Promise.all([
        $fetch(`${config.public.apiBase}/api/admin/meetings?page=${page.value}${filter.value ? "&status=" + filter.value : ""}`, { headers: headers() }).catch(() => ({ meetings: [], total: 0 })),
        $fetch(`${config.public.apiBase}/api/admin/meetings/stats`, { headers: headers() }).catch(() => ({}))
      ]);
      meetings.value = (_a = m.meetings) != null ? _a : [];
      total.value = (_b = m.total) != null ? _b : 0;
      stats.value = s;
      loading.value = false;
    }
    watch([page, filter], fetchAll);
    function fmtRp(n) {
      return "Rp " + n.toLocaleString("id");
    }
    const statusColor = {
      pending: "bg-yellow-500/20 text-yellow-400",
      confirmed: "bg-green-500/20 text-green-400",
      cancelled: "bg-red-500/20 text-red-400",
      done: "bg-blue-500/20 text-blue-400"
    };
    const payColor = {
      unpaid: "bg-gray-500/20 text-gray-400",
      paid: "bg-green-500/20 text-green-400",
      expired: "bg-red-500/20 text-red-400"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-6xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold text-white">Meetings</h1></div><div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6"><div class="rounded-xl border border-white/8 p-4" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><p class="text-xs text-gray-500 mb-1">Total</p><p class="text-2xl font-bold text-white">${ssrInterpolate(unref(stats).total)}</p></div><div class="rounded-xl border border-white/8 p-4" style="${ssrRenderStyle({ "background": "rgba(234,179,8,0.06)", "border-color": "rgba(234,179,8,0.18)" })}"><p class="text-xs text-gray-500 mb-1">Pending</p><p class="text-2xl font-bold text-yellow-400">${ssrInterpolate(unref(stats).pending)}</p></div><div class="rounded-xl border border-white/8 p-4" style="${ssrRenderStyle({ "background": "rgba(52,211,153,0.06)", "border-color": "rgba(52,211,153,0.18)" })}"><p class="text-xs text-gray-500 mb-1">Confirmed</p><p class="text-2xl font-bold text-green-400">${ssrInterpolate(unref(stats).confirmed)}</p></div><div class="rounded-xl border border-white/8 p-4" style="${ssrRenderStyle({ "background": "rgba(52,211,153,0.06)", "border-color": "rgba(52,211,153,0.18)" })}"><p class="text-xs text-gray-500 mb-1">Lunas</p><p class="text-2xl font-bold text-green-400">${ssrInterpolate(unref(stats).paid)}</p></div><div class="rounded-xl border border-white/8 p-4" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.07)", "border-color": "rgba(99,102,241,0.20)" })}"><p class="text-xs text-gray-500 mb-1">Revenue</p><p class="text-lg font-bold" style="${ssrRenderStyle({ "color": "#a5b4fc" })}">${ssrInterpolate(fmtRp(unref(stats).revenue_idr || 0))}</p></div></div><div class="flex items-center gap-2 mb-4"><!--[-->`);
      ssrRenderList(["", "pending", "confirmed", "done", "cancelled"], (s) => {
        _push(`<button class="${ssrRenderClass([unref(filter) === s ? "bg-white text-black border-white" : "text-gray-400 border-white/10 hover:border-white/25", "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border"])}">${ssrInterpolate(s === "" ? "Semua" : s.charAt(0).toUpperCase() + s.slice(1))}</button>`);
      });
      _push(`<!--]--></div><div class="rounded-2xl border border-white/8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}">`);
      if (unref(loading)) {
        _push(`<div class="p-8 text-center text-gray-500 text-sm">Memuat...</div>`);
      } else if (!unref(meetings).length) {
        _push(`<div class="p-12 text-center text-gray-500 text-sm">Belum ada meeting</div>`);
      } else {
        _push(`<div><table class="w-full text-sm"><thead><tr class="border-b border-white/8" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Nama / Email</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Topik</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Jadwal</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Bayar</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Aksi</th></tr></thead><tbody class="divide-y divide-white/5"><!--[-->`);
        ssrRenderList(unref(meetings), (m) => {
          _push(`<tr class="hover:bg-white/2 transition-colors"><td class="px-4 py-3"><p class="font-medium text-white">${ssrInterpolate(m.name)}</p><p class="text-xs text-gray-500">${ssrInterpolate(m.email)}</p>`);
          if (m.company) {
            _push(`<p class="text-xs text-gray-600">${ssrInterpolate(m.company)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="px-4 py-3 text-gray-300 max-w-[200px]"><p class="truncate text-xs">${ssrInterpolate(m.topic || "\u2014")}</p></td><td class="px-4 py-3 text-xs text-gray-400"><p>${ssrInterpolate(m.preferred_date || "\u2014")}</p><p>${ssrInterpolate(m.preferred_time || "")}</p></td><td class="px-4 py-3"><span class="${ssrRenderClass([statusColor[m.status] || "bg-gray-500/20 text-gray-400", "text-[11px] px-2 py-0.5 rounded-full font-medium"])}">${ssrInterpolate(m.status)}</span></td><td class="px-4 py-3"><span class="${ssrRenderClass([payColor[m.payment_status] || "bg-gray-500/20 text-gray-400", "text-[11px] px-2 py-0.5 rounded-full"])}">${ssrInterpolate(m.payment_status)}</span><p class="text-[10px] text-gray-600 mt-0.5">${ssrInterpolate(fmtRp(m.amount))}</p></td><td class="px-4 py-3"><div class="flex items-center gap-2"><button class="text-xs text-blue-400 hover:text-blue-300 transition-colors">Edit</button>`);
          if (m.payment_url) {
            _push(`<a${ssrRenderAttr("href", m.payment_url)} target="_blank" class="text-xs text-green-400 hover:text-green-300 transition-colors">Invoice</a>`);
          } else {
            _push(`<!---->`);
          }
          if (m.payment_status !== "paid") {
            _push(`<button${ssrIncludeBooleanAttr(unref(resendLoading) === m.id) ? " disabled" : ""} class="text-xs text-indigo-400 hover:text-indigo-300 disabled:opacity-50 transition-colors">${ssrInterpolate(unref(resendLoading) === m.id ? "..." : "Resend")}</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
        if (unref(total) > 20) {
          _push(`<div class="px-4 py-3 border-t border-white/8 flex items-center justify-between"><span class="text-xs text-gray-500">${ssrInterpolate(unref(total))} total</span><div class="flex gap-2"><button${ssrIncludeBooleanAttr(unref(page) <= 1) ? " disabled" : ""} class="px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white border border-white/8 disabled:opacity-30">\u2190 Prev</button><button${ssrIncludeBooleanAttr(unref(page) >= Math.ceil(unref(total) / 20)) ? " disabled" : ""} class="px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white border border-white/8 disabled:opacity-30">Next \u2192</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(editModal)) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center px-4" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.7)" })}"><div class="w-full max-w-[420px] rounded-2xl p-6" style="${ssrRenderStyle({ "background": "#1a1a1a", "border": "1px solid rgba(255,255,255,0.10)" })}"><h3 class="text-base font-semibold text-white mb-4">Edit Meeting \u2014 ${ssrInterpolate(unref(editModal).name)}</h3><div class="space-y-3"><div><label class="block text-xs text-gray-500 mb-1">Status Meeting</label><select class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none"><option value="pending"${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).status) ? ssrLooseContain(unref(editForm).status, "pending") : ssrLooseEqual(unref(editForm).status, "pending")) ? " selected" : ""}>pending</option><option value="confirmed"${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).status) ? ssrLooseContain(unref(editForm).status, "confirmed") : ssrLooseEqual(unref(editForm).status, "confirmed")) ? " selected" : ""}>confirmed</option><option value="done"${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).status) ? ssrLooseContain(unref(editForm).status, "done") : ssrLooseEqual(unref(editForm).status, "done")) ? " selected" : ""}>done</option><option value="cancelled"${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).status) ? ssrLooseContain(unref(editForm).status, "cancelled") : ssrLooseEqual(unref(editForm).status, "cancelled")) ? " selected" : ""}>cancelled</option></select></div><div><label class="block text-xs text-gray-500 mb-1">Status Pembayaran</label><select class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none"><option value="unpaid"${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).payment_status) ? ssrLooseContain(unref(editForm).payment_status, "unpaid") : ssrLooseEqual(unref(editForm).payment_status, "unpaid")) ? " selected" : ""}>unpaid</option><option value="paid"${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).payment_status) ? ssrLooseContain(unref(editForm).payment_status, "paid") : ssrLooseEqual(unref(editForm).payment_status, "paid")) ? " selected" : ""}>paid</option><option value="expired"${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).payment_status) ? ssrLooseContain(unref(editForm).payment_status, "expired") : ssrLooseEqual(unref(editForm).payment_status, "expired")) ? " selected" : ""}>expired</option></select></div></div><div class="flex justify-end gap-2 mt-5"><button class="px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-white border border-white/10">Batal</button><button class="px-4 py-2 rounded-xl text-sm font-medium text-white" style="${ssrRenderStyle({ "background": "#6366f1" })}">Simpan</button></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/meetings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B0jopcRS.mjs.map
