import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, reactive, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderTeleport, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-IWZl7zz2.mjs';
import { b as useChatStore, o as useSearchModal, j as useLocale, c as useRuntimeConfig } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SignInModal",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const config = useRuntimeConfig();
    useAuth();
    const googleLoading = ref(false);
    const submitLoading = ref(false);
    const error = ref("");
    ref(null);
    const mode = ref("login");
    const form = reactive({
      name: "",
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="fixed inset-0 z-50 flex items-start sm:items-center justify-center px-4 py-4 overflow-y-auto" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.7)", "backdrop-filter": "blur(8px)" })}"><div class="w-full max-w-[460px] rounded-[28px] relative flex flex-col items-center overflow-hidden shadow-2xl" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, #171717 0%, #121212 100%)", "border": "1px solid rgba(255,255,255,0.10)" })}"><button class="absolute top-3.5 right-3.5 w-7 h-7 flex items-center justify-center rounded-lg transition-colors" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.3)" })}"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path></svg></button><div class="flex flex-col items-center pt-10 pb-6 px-9 w-full"><div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.08)" })}"><img${ssrRenderAttr("src", _imports_0)} alt="Autobot" class="h-8 w-auto object-contain"></div><h2 class="text-[19px] font-bold text-white mb-1 tracking-tight">Masuk ke Autobot</h2><p class="text-[13px] text-center max-w-[320px] leading-relaxed" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.38)" })}"> Lanjutkan percakapan &amp; simpan riwayat chat kamu </p></div><div class="w-full h-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)" })}"></div><div class="px-9 pt-5 pb-3 w-full"><div class="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/8"><button class="${ssrRenderClass([unref(mode) === "login" ? "bg-white text-black shadow-sm" : "text-white/65 hover:text-white", "h-9 rounded-xl text-[13px] font-medium transition-all"])}">Login</button><button class="${ssrRenderClass([unref(mode) === "register" ? "bg-white text-black shadow-sm" : "text-white/65 hover:text-white", "h-9 rounded-xl text-[13px] font-medium transition-all"])}">Register</button></div></div><form class="px-9 pb-4 w-full flex flex-col gap-3"><div class="rounded-2xl border border-white/8 bg-white/5 p-5 space-y-3"><div class="space-y-1"><p class="text-[12px] font-semibold tracking-wider uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">${ssrInterpolate(unref(mode) === "login" ? "Email & Password" : "Data Akun")}</p><p class="text-[12px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.32)" })}">${ssrInterpolate(unref(mode) === "login" ? "Masukkan email yang terdaftar untuk masuk." : "Isi nama, email, dan password untuk membuat akun.")}</p></div>`);
        if (unref(mode) === "register") {
          _push2(`<input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Nama" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-[13px] text-white outline-none focus:border-white/25 placeholder:text-white/25 transition-colors">`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="Email" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-[13px] text-white outline-none focus:border-white/25 placeholder:text-white/25 transition-colors"><input${ssrRenderAttr("value", unref(form).password)} type="password" placeholder="Password" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-[13px] text-white outline-none focus:border-white/25 placeholder:text-white/25 transition-colors"><button type="submit"${ssrIncludeBooleanAttr(unref(submitLoading)) ? " disabled" : ""} class="group relative flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 px-4 text-[13px] font-semibold text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 100%)", "box-shadow": "inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 25px rgba(0,0,0,0.22)" })}"><span class="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 100%)" })}"></span>`);
        if (unref(submitLoading)) {
          _push2(`<svg class="relative z-10 h-4 w-4 animate-spin text-white/80" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity="0.2" stroke-width="2"></circle><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`);
        } else {
          _push2(`<svg class="relative z-10 h-4 w-4 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
        }
        _push2(`<span class="relative z-10">${ssrInterpolate(unref(submitLoading) ? "Memproses..." : unref(mode) === "register" ? "Buat Akun" : "Masuk")}</span></button></div></form><div class="w-full px-9 pb-2"><div class="h-px bg-white/10"></div></div><div class="px-9 py-4 w-full flex flex-col items-center gap-3"><p class="text-[12px] w-full text-center" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.34)" })}">${ssrInterpolate(unref(mode) === "login" ? "Atau lanjutkan dengan Google" : "Atau daftar menggunakan Google")}</p>`);
        if (unref(config).public.googleClientId) {
          _push2(`<div class="w-full overflow-hidden rounded-full" style="${ssrRenderStyle({ "height": "40px" })}"></div>`);
        } else {
          _push2(`<div class="w-full flex items-center justify-center gap-2.5 h-[40px] rounded-full text-[13px] font-medium cursor-not-allowed" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "color": "rgba(255,255,255,0.35)", "border": "1px solid rgba(255,255,255,0.09)" })}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg> Continue with Google </div>`);
        }
        if (unref(googleLoading)) {
          _push2(`<p class="text-xs" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.4)" })}"> Memproses... </p>`);
        } else {
          _push2(`<!---->`);
        }
        if (unref(error)) {
          _push2(`<p class="text-xs text-red-400 text-center">${ssrInterpolate(unref(error))}</p>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="pb-6 px-9 text-center"><p class="text-[11.5px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.22)" })}"> Dengan masuk, kamu setuju dengan <span class="underline cursor-pointer hover:text-white/40 transition-colors">Syarat &amp; Ketentuan</span> kami. </p></div></div></div>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SignInModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const chatStore = useChatStore();
    useAuth();
    useSearchModal();
    const { t, locale, locales } = useLocale();
    const chatHistory = ref([]);
    const langOpen = ref(false);
    const keyCopied = ref(false);
    const isAdmin = ref(false);
    const featureCategories = [
      {
        id: "autoreply",
        label: "Auto-Reply & Rule Engine",
        icon: "\u21A9\uFE0F",
        bgColor: "rgba(34,197,94,0.10)",
        borderColor: "rgba(34,197,94,0.22)",
        labelColor: "#86efac",
        features: [
          { label: "Exact & Contains Match", query: "Bagaimana fitur exact match dan contains match auto-reply di WaBlastApp?" },
          { label: "Regex Pattern", query: "Apakah WaBlast mendukung regex untuk aturan auto-reply?" },
          { label: "Override Per Kontak", query: "Bisakah saya set aturan reply berbeda untuk kontak tertentu?" },
          { label: "Default Fallback", query: "Bagaimana cara setup default fallback reply di WaBlastApp?" }
        ]
      },
      {
        id: "ai",
        label: "AI Multi-Provider",
        icon: "\u{1F916}",
        bgColor: "rgba(99,102,241,0.10)",
        borderColor: "rgba(99,102,241,0.22)",
        labelColor: "#a5b4fc",
        features: [
          { label: "OpenAI / Claude / Gemini", query: "AI provider apa saja yang didukung WaBlastApp?" },
          { label: "Knowledge Base (FAQ)", query: "Bagaimana cara upload knowledge base ke WaBlastApp?" },
          { label: "Custom AI Persona", query: "Bisakah buat persona AI yang berbeda per kontak di WaBlast?" },
          { label: "Estimasi Biaya AI", query: "Bagaimana cara pantau biaya penggunaan AI di WaBlastApp?" }
        ]
      },
      {
        id: "blast",
        label: "Broadcast & Blast",
        icon: "\u{1F4E3}",
        bgColor: "rgba(234,179,8,0.08)",
        borderColor: "rgba(234,179,8,0.20)",
        labelColor: "#fde047",
        features: [
          { label: "Blast Massal + Delay", query: "Bagaimana cara blast pesan ke ribuan kontak di WaBlastApp?" },
          { label: "Broadcast Terjadwal", query: "Bagaimana cara menjadwalkan broadcast di WaBlastApp?" },
          { label: "Template + Media", query: "Bagaimana cara membuat template pesan dengan media di WaBlast?" },
          { label: "Status Pengiriman", query: "Bagaimana cara melihat status pengiriman broadcast di WaBlast?" }
        ]
      },
      {
        id: "management",
        label: "Chat & Kontak",
        icon: "\u{1F465}",
        bgColor: "rgba(59,130,246,0.08)",
        borderColor: "rgba(59,130,246,0.20)",
        labelColor: "#93c5fd",
        features: [
          { label: "Multi-Device WA", query: "Berapa banyak nomor WhatsApp yang bisa dihubungkan?" },
          { label: "Import Kontak Excel", query: "Bagaimana cara import kontak dari Excel ke WaBlastApp?" },
          { label: "Operator Takeover", query: "Apa itu operator takeover di WaBlastApp?" },
          { label: "Jam Operasional", query: "Bagaimana cara mengatur jam operasional bot WaBlast?" }
        ]
      },
      {
        id: "modules",
        label: "20+ Modul Bisnis",
        icon: "\u{1F3E2}",
        bgColor: "rgba(168,85,247,0.08)",
        borderColor: "rgba(168,85,247,0.20)",
        labelColor: "#c4b5fd",
        features: [
          { label: "Klinik, Salon, Apotek", query: "Ceritakan paket modul bisnis kesehatan di WaBlastApp" },
          { label: "CRM, Sales, Marketing", query: "Ceritakan paket modul CRM dan Sales di WaBlastApp" },
          { label: "HR, Keuangan, Toko", query: "Ceritakan paket modul HR dan Keuangan di WaBlastApp" },
          { label: "F&B, Event, Travel", query: "Ceritakan paket modul F&B dan Event di WaBlastApp" }
        ]
      }
    ];
    const openCats = ref(/* @__PURE__ */ new Set(["ai"]));
    const currentLang = computed(() => {
      var _a;
      return (_a = locales.find((lang) => lang.code === locale.value)) != null ? _a : locales[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "flex flex-col h-full relative",
        style: { "width": "256px", "background": "#111111", "border-right": "1px solid rgba(255,255,255,0.06)" }
      }, _attrs))}><div class="px-2 pb-1 space-y-0.5 shrink-0"><button class="sidebar-item w-full font-medium" style="${ssrRenderStyle({ "color": "#F0F0F0" })}"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-80"><path d="M10 5.25v9.5M5.25 10h9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg> ${ssrInterpolate(unref(t)("sidebar.newChat"))}</button><button class="sidebar-item w-full"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"><path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> ${ssrInterpolate(unref(t)("sidebar.search"))} <span class="ml-auto text-[10px] font-semibold tracking-[0.18em]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.24)" })}"> \u2318K </span></button></div><div class="px-2 mt-2 space-y-0.5 shrink-0"><div class="px-2 mb-1"><span class="text-[11px] font-semibold tracking-widest uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">${ssrInterpolate(unref(t)("sidebar.explore"))}</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "sidebar-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><path d="M3.5 10a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM10 7v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg> ${ssrInterpolate(unref(t)("sidebar.features"))}`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 20 20",
                fill: "none",
                class: "shrink-0"
              }, [
                createVNode("path", {
                  d: "M3.5 10a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM10 7v3l2 2",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round"
                })
              ])),
              createTextVNode(" " + toDisplayString(unref(t)("sidebar.features")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "sidebar-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect></svg> ${ssrInterpolate(unref(t)("sidebar.products"))}`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 20 20",
                fill: "none",
                class: "shrink-0"
              }, [
                createVNode("rect", {
                  x: "3",
                  y: "3",
                  width: "6",
                  height: "6",
                  rx: "1.5",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }),
                createVNode("rect", {
                  x: "11",
                  y: "3",
                  width: "6",
                  height: "6",
                  rx: "1.5",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }),
                createVNode("rect", {
                  x: "3",
                  y: "11",
                  width: "6",
                  height: "6",
                  rx: "1.5",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }),
                createVNode("rect", {
                  x: "11",
                  y: "11",
                  width: "6",
                  height: "6",
                  rx: "1.5",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                })
              ])),
              createTextVNode(" " + toDisplayString(unref(t)("sidebar.products")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "sidebar-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></circle><path d="M10 9v5M10 7v.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"${_scopeId}></path></svg> ${ssrInterpolate(unref(t)("sidebar.about"))}`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 20 20",
                fill: "none",
                class: "shrink-0"
              }, [
                createVNode("circle", {
                  cx: "10",
                  cy: "10",
                  r: "7.5",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }),
                createVNode("path", {
                  d: "M10 9v5M10 7v.01",
                  stroke: "currentColor",
                  "stroke-width": "1.8",
                  "stroke-linecap": "round"
                })
              ])),
              createTextVNode(" " + toDisplayString(unref(t)("sidebar.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/order",
        class: "sidebar-item",
        style: { "color": "#a78bfa" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><rect x="3" y="4.5" width="14" height="13" rx="2" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><path d="M3 8.5h14M7 2.5v4M13 2.5v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg> ${ssrInterpolate(unref(t)("sidebar.consult"))}`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 20 20",
                fill: "none",
                class: "shrink-0"
              }, [
                createVNode("rect", {
                  x: "3",
                  y: "4.5",
                  width: "14",
                  height: "13",
                  rx: "2",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }),
                createVNode("path", {
                  d: "M3 8.5h14M7 2.5v4M13 2.5v4",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round"
                })
              ])),
              createTextVNode(" " + toDisplayString(unref(t)("sidebar.consult")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 overflow-y-auto px-2 mt-3 min-h-0 space-y-4 pb-2"><div><div class="px-2 mb-2"><span class="text-[11px] font-semibold tracking-widest uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">${ssrInterpolate(unref(t)("sidebar.features"))}</span></div><div class="space-y-1.5"><!--[-->`);
      ssrRenderList(featureCategories, (cat) => {
        _push(`<div class="rounded-xl overflow-hidden" style="${ssrRenderStyle(`border: 1px solid ${cat.borderColor};`)}"><button class="w-full flex items-center gap-2.5 px-3 py-2.5 transition-all" style="${ssrRenderStyle(`background: ${cat.bgColor};`)}"><span class="text-[15px] leading-none shrink-0">${ssrInterpolate(cat.icon)}</span><span class="flex-1 text-left text-[12.5px] font-semibold" style="${ssrRenderStyle(`color: ${cat.labelColor};`)}">${ssrInterpolate(cat.label)}</span><svg width="13" height="13" viewBox="0 0 20 20" fill="none" class="shrink-0 transition-transform duration-200" style="${ssrRenderStyle(`color: ${cat.labelColor}; opacity: 0.6; transform: rotate(${unref(openCats).has(cat.id) ? "180deg" : "0deg"})`)}"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
        if (unref(openCats).has(cat.id)) {
          _push(`<div class="px-2 pb-2 pt-1 space-y-0.5" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.2)" })}"><!--[-->`);
          ssrRenderList(cat.features, (feat) => {
            _push(`<button class="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-all group" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.50)" })}"><span class="text-[10px] leading-none shrink-0" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.20)" })}">\u25B8</span><span class="text-[12.5px] leading-snug">${ssrInterpolate(feat.label)}</span></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "flex items-center justify-center gap-1.5 mt-2 py-2 rounded-xl text-[12px] font-medium transition-all",
        style: { "color": "rgba(255,255,255,0.30)", "border": "1px solid rgba(255,255,255,0.06)" },
        onMouseover: (e) => {
          e.currentTarget.style.color = "rgba(255,255,255,0.65)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
        },
        onMouseleave: (e) => {
          e.currentTarget.style.color = "rgba(255,255,255,0.30)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("sidebar.allFeatures"))} <svg width="11" height="11" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("sidebar.allFeatures")) + " ", 1),
              (openBlock(), createBlock("svg", {
                width: "11",
                height: "11",
                viewBox: "0 0 20 20",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M5 10h10M11 6l4 4-4 4",
                  stroke: "currentColor",
                  "stroke-width": "1.8",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(chatHistory).length) {
        _push(`<div><div class="px-2 mb-1"><span class="text-[11px] font-semibold tracking-widest uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">${ssrInterpolate(unref(t)("sidebar.recent"))}</span></div><div class="space-y-0.5"><!--[-->`);
        ssrRenderList(unref(chatHistory).slice(0, 8), (h) => {
          _push(`<button class="sidebar-item w-full truncate"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-50"><path d="M3 10a7 7 0 1 0 14 0A7 7 0 0 0 3 10Zm7-3v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg><span class="truncate text-[13px]">${ssrInterpolate(h.preview)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="px-2 pb-3 mt-2 shrink-0" style="${ssrRenderStyle({ "border-top": "1px solid rgba(255,255,255,0.05)", "padding-top": "10px" })}"><button data-lang-menu class="sidebar-item w-full"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"></circle><path d="M10 2.5c0 0-3 3-3 7.5s3 7.5 3 7.5M10 2.5c0 0 3 3 3 7.5s-3 7.5-3 7.5M2.5 10h15" stroke="currentColor" stroke-width="1.5"></path></svg><span class="flex-1 truncate">${ssrInterpolate(unref(currentLang).label)}</span><svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-40"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
      if (unref(langOpen)) {
        _push(`<div data-lang-menu class="mt-1 rounded-xl overflow-hidden py-1" style="${ssrRenderStyle({ "background": "#1d1d1d", "border": "1px solid rgba(255,255,255,0.09)" })}"><!--[-->`);
        ssrRenderList(unref(locales), (lang) => {
          _push(`<button class="flex items-center gap-2.5 w-full px-3 py-2 text-[13px] transition-colors" style="${ssrRenderStyle(unref(currentLang).code === lang.code ? "color: #F0F0F0; background: rgba(255,255,255,0.06);" : "color: rgba(255,255,255,0.45);")}"><span class="text-base leading-none">${ssrInterpolate(lang.flag)}</span> ${ssrInterpolate(lang.label)} `);
          if (unref(currentLang).code === lang.code) {
            _push(`<svg width="13" height="13" viewBox="0 0 20 20" fill="none" class="ml-auto shrink-0"><path d="M4 10l4.5 4.5L16 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isAdmin)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/dashboard",
          class: "flex items-center gap-2.5 w-full px-3 py-2 rounded-xl text-[12.5px] font-medium transition-all mt-0.5",
          style: { "background": "rgba(99,102,241,0.12)", "border": "1px solid rgba(99,102,241,0.25)", "color": "#a5b4fc" },
          onMouseover: (e) => {
            e.currentTarget.style.background = "rgba(99,102,241,0.20)";
          },
          onMouseleave: (e) => {
            e.currentTarget.style.background = "rgba(99,102,241,0.12)";
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect></svg> ${ssrInterpolate(unref(t)("sidebar.adminPanel"))} <svg width="11" height="11" viewBox="0 0 20 20" fill="none" class="ml-auto shrink-0 opacity-60"${_scopeId}><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  class: "shrink-0"
                }, [
                  createVNode("rect", {
                    x: "2",
                    y: "2",
                    width: "7",
                    height: "7",
                    rx: "1.5",
                    stroke: "currentColor",
                    "stroke-width": "1.5"
                  }),
                  createVNode("rect", {
                    x: "11",
                    y: "2",
                    width: "7",
                    height: "7",
                    rx: "1.5",
                    stroke: "currentColor",
                    "stroke-width": "1.5"
                  }),
                  createVNode("rect", {
                    x: "2",
                    y: "11",
                    width: "7",
                    height: "7",
                    rx: "1.5",
                    stroke: "currentColor",
                    "stroke-width": "1.5"
                  }),
                  createVNode("rect", {
                    x: "11",
                    y: "11",
                    width: "7",
                    height: "7",
                    rx: "1.5",
                    stroke: "currentColor",
                    "stroke-width": "1.5"
                  })
                ])),
                createTextVNode(" " + toDisplayString(unref(t)("sidebar.adminPanel")) + " ", 1),
                (openBlock(), createBlock("svg", {
                  width: "11",
                  height: "11",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  class: "ml-auto shrink-0 opacity-60"
                }, [
                  createVNode("path", {
                    d: "M5 10h10M11 6l4 4-4 4",
                    stroke: "currentColor",
                    "stroke-width": "1.8",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(chatStore).userName) {
        _push(`<div class="mt-0.5 rounded-xl px-3 py-2.5 space-y-2" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.07)" })}"><div class="flex items-center gap-2.5"><div class="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.10)", "color": "#F0F0F0" })}">${ssrInterpolate(unref(chatStore).userName.charAt(0).toUpperCase())}</div><span class="text-[13px] font-medium truncate flex-1" style="${ssrRenderStyle({ "color": "#F0F0F0" })}">${ssrInterpolate(unref(chatStore).userName)}</span></div>`);
        if (unref(chatStore).accessKey) {
          _push(`<button class="flex items-center gap-2 w-full text-[11.5px] transition-opacity hover:opacity-70" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}"><svg width="13" height="13" viewBox="0 0 20 20" fill="none" class="shrink-0"><rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5"></rect><path d="M13 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2" stroke="currentColor" stroke-width="1.5"></path></svg> ${ssrInterpolate(unref(keyCopied) ? unref(t)("sidebar.copied") : unref(t)("sidebar.copyAccessKey"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<button class="sidebar-item mt-0.5 w-full"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"><path d="M12.5 3.5H15a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 15 17.5h-2.5M8.5 13.5l4-3.5-4-3.5M12.5 10H3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(unref(t)("common.signIn"))}</button>`);
      }
      _push(`</div></aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const userMenuOpen = ref(false);
    ref(null);
    const adminMenuOpen = ref(false);
    ref(null);
    const { showSignIn, currentUser, closeSignIn } = useAuth();
    const isAdmin = computed(
      () => {
        var _a;
        return ((_a = currentUser.value) == null ? void 0 : _a.role) === "admin" || false;
      }
    );
    const navItems = [
      { label: "Fitur", to: "/features" },
      { label: "Products", to: "/products" },
      { label: "Resources", to: "/resources" },
      { label: "Case Study", to: "/partners" },
      { label: "Konsultasi", to: "/order" }
    ];
    const adminMenuItems = [
      { to: "/admin/dashboard", label: "Dashboard", icon: `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>` },
      { to: "/admin/sessions", label: "Sessions", icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>` },
      { to: "/admin/users", label: "Users", icon: `<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>` },
      { to: "/admin/contacts", label: "Contacts", icon: `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7l8 5 8-5" stroke="currentColor" stroke-width="1.5"/></svg>` },
      { to: "/admin/products", label: "Products", icon: `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7h16M7 7v11" stroke="currentColor" stroke-width="1.5"/></svg>` },
      { to: "/admin/knowledge", label: "Knowledge Base", icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 0 1 6 6c0 2.5-1.5 4.6-3.5 5.5V15H7.5v-1.5C5.5 12.6 4 10.5 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" stroke-width="1.5"/><path d="M7.5 18h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>` },
      { to: "/admin/content", label: "Content", icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M4 4h12M4 8h12M4 12h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>` },
      { to: "/admin/email", label: "Email Templates", icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M3 4h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.5"/><path d="M2 5l8 7 8-7" stroke="currentColor" stroke-width="1.5"/></svg>` }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CommonSignInModal = _sfc_main$2;
      const _component_LayoutSidebar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col h-screen overflow-hidden",
        style: { "background": "#111111" }
      }, _attrs))}><header class="shrink-0 flex items-center justify-between px-5 h-[52px] z-40 relative" style="${ssrRenderStyle({ "background": "#111111", "border-bottom": "1px solid rgba(255,255,255,0.07)" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2.5 select-none shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Autobot" class="h-7 w-auto object-contain"${_scopeId}><span class="font-semibold text-[15px] tracking-tight hidden sm:block" style="${ssrRenderStyle({ "color": "#F0F0F0" })}"${_scopeId}>AutobotWs</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Autobot",
                class: "h-7 w-auto object-contain"
              }),
              createVNode("span", {
                class: "font-semibold text-[15px] tracking-tight hidden sm:block",
                style: { "color": "#F0F0F0" }
              }, "AutobotWs")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.label,
          to: item.to,
          class: "px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors duration-150 whitespace-nowrap",
          style: { "color": "rgba(255,255,255,0.45)" },
          "active-class": "!text-white",
          onMouseover: (e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)",
          onMouseleave: (e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center gap-2 shrink-0"><button class="hidden sm:flex items-center gap-1.5 px-4 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.5)", "border": "1px solid rgba(255,255,255,0.10)" })}"> Contact Sales </button>`);
      if (unref(isAdmin) && !unref(currentUser)) {
        _push(`<div class="relative"><button class="flex items-center gap-2 px-3.5 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.15)", "color": "#a5b4fc", "border": "1px solid rgba(99,102,241,0.30)" })}"><span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.3)" })}">A</span> Administrator <svg width="12" height="12" viewBox="0 0 20 20" fill="none" class="opacity-60"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
        if (unref(adminMenuOpen)) {
          _push(`<div class="absolute right-0 top-full mt-1.5 rounded-xl py-1.5 z-50" style="${ssrRenderStyle({ "background": "#1a1a1a", "border": "1px solid rgba(99,102,241,0.25)", "box-shadow": "0 8px 24px rgba(0,0,0,0.5)", "min-width": "180px" })}"><p class="px-3.5 py-1.5 text-[10px] font-semibold tracking-widest uppercase text-indigo-400/60 border-b border-white/6 mb-1">Admin Panel</p><!--[-->`);
          ssrRenderList(adminMenuItems, (m) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: m.to,
              to: m.to,
              class: "flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-gray-300 hover:text-white hover:bg-white/5 transition-colors",
              onClick: ($event) => adminMenuOpen.value = false
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a;
                if (_push2) {
                  _push2(`<span class="w-3.5 h-3.5 shrink-0 opacity-60"${_scopeId}>${(_a = m.icon) != null ? _a : ""}</span> ${ssrInterpolate(m.label)}`);
                } else {
                  return [
                    createVNode("span", {
                      class: "w-3.5 h-3.5 shrink-0 opacity-60",
                      innerHTML: m.icon
                    }, null, 8, ["innerHTML"]),
                    createTextVNode(" " + toDisplayString(m.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--><div class="border-t border-white/6 mt-1 pt-1"><button class="w-full flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-red-400 hover:bg-white/5 transition-colors"><svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0"><path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3M13 14l3-4-3-4M16 10H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Logout Admin </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (unref(currentUser)) {
        _push(`<div class="relative"><button class="flex items-center gap-2 px-3.5 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)", "color": "#F0F0F0", "border": "1px solid rgba(255,255,255,0.12)" })}"><span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">${ssrInterpolate(unref(currentUser).name.charAt(0).toUpperCase())}</span> ${ssrInterpolate(unref(currentUser).name.split(" ")[0])}</button>`);
        if (unref(userMenuOpen)) {
          _push(`<div class="absolute right-0 top-full mt-1.5 rounded-xl py-1.5 z-50" style="${ssrRenderStyle({ "background": "#1f1f1f", "border": "1px solid rgba(255,255,255,0.10)", "box-shadow": "0 8px 24px rgba(0,0,0,0.4)", "min-width": "180px" })}"><p class="px-3.5 py-1.5 text-xs text-gray-500 border-b border-white/8">${ssrInterpolate(unref(currentUser).email)}</p>`);
          if (unref(isAdmin)) {
            _push(`<!--[--><p class="px-3.5 pt-2 pb-1 text-[10px] font-semibold tracking-widest uppercase text-indigo-400/60">Admin Panel</p><!--[-->`);
            ssrRenderList(adminMenuItems, (m) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: m.to,
                to: m.to,
                class: "flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-gray-300 hover:text-white hover:bg-white/5 transition-colors",
                onClick: ($event) => userMenuOpen.value = false
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  var _a;
                  if (_push2) {
                    _push2(`<span class="w-3.5 h-3.5 shrink-0 opacity-60"${_scopeId}>${(_a = m.icon) != null ? _a : ""}</span> ${ssrInterpolate(m.label)}`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "w-3.5 h-3.5 shrink-0 opacity-60",
                        innerHTML: m.icon
                      }, null, 8, ["innerHTML"]),
                      createTextVNode(" " + toDisplayString(m.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--><div class="border-t border-white/6 mt-1 pt-1"></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="w-full text-left px-3.5 py-2 text-sm text-red-400 hover:bg-white/5 transition-colors"> Sign Out </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<button class="flex items-center gap-1.5 px-4 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150 active:scale-[0.97]" style="${ssrRenderStyle({ "background": "#F0F0F0", "color": "#111111" })}"> Sign In </button>`);
      }
      _push(`<button class="md:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-colors" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.5)" })}"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button></div>`);
      if (unref(showSignIn)) {
        _push(ssrRenderComponent(_component_CommonSignInModal, { onClose: unref(closeSignIn) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden shrink-0 px-4 py-3 space-y-1 z-30" style="${ssrRenderStyle({ "background": "#171717", "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.label,
            to: item.to,
            class: "flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-colors",
            style: { "color": "rgba(255,255,255,0.5)" },
            "active-class": "!text-white bg-white/5",
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "flex items-center px-3 py-2 rounded-lg text-[14px] font-medium",
          style: { "color": "rgba(255,255,255,0.5)" },
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact Sales `);
            } else {
              return [
                createTextVNode(" Contact Sales ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-1 min-h-0 overflow-hidden">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, { class: "hidden lg:flex flex-shrink-0" }, null, _parent));
      _push(`<div class="flex-1 flex flex-col min-w-0 min-h-0">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div class="shrink-0 flex items-center justify-center gap-4 px-4 h-7 text-[11px]" style="${ssrRenderStyle({ "border-top": "1px solid rgba(255,255,255,0.05)", "color": "rgba(255,255,255,0.2)" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "hover:text-white/40 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kebijakan Privasi`);
          } else {
            return [
              createTextVNode("Kebijakan Privasi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>\xB7</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms-of-service",
        class: "hover:text-white/40 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Syarat &amp; Ketentuan`);
          } else {
            return [
              createTextVNode("Syarat & Ketentuan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>\xB7</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/refund-policy",
        class: "hover:text-white/40 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kebijakan Refund`);
          } else {
            return [
              createTextVNode("Kebijakan Refund")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CjdF-ZHQ.mjs.map
