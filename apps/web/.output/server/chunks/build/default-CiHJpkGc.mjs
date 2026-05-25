import { _ as __nuxt_component_0 } from './nuxt-link-DTwh5LNx.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock, toRef, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderTeleport } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-IWZl7zz2.mjs';
import { f as useNuxtApp, b as useRuntimeConfig } from './server.mjs';
import { u as useChatStore } from './chat-DwC02ODd.mjs';
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

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useAuth() {
  const showSignIn = useState("signInModalOpen", () => false);
  const currentUser = useState("currentUser", () => null);
  function openSignIn() {
    showSignIn.value = true;
  }
  function closeSignIn() {
    showSignIn.value = false;
  }
  function setUser(user) {
    currentUser.value = user;
    showSignIn.value = false;
  }
  function signOut() {
    currentUser.value = null;
  }
  function loadFromStorage() {
    return;
  }
  return { showSignIn, currentUser, openSignIn, closeSignIn, setUser, signOut, loadFromStorage };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SignInModal",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const config = useRuntimeConfig();
    useAuth();
    const googleLoading = ref(false);
    const error = ref("");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center px-4" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.7)", "backdrop-filter": "blur(8px)" })}"><div class="w-full max-w-[340px] rounded-2xl relative flex flex-col items-center" style="${ssrRenderStyle({ "background": "#161616", "border": "1px solid rgba(255,255,255,0.09)" })}"><button class="absolute top-3.5 right-3.5 w-7 h-7 flex items-center justify-center rounded-lg transition-colors" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.3)" })}"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path></svg></button><div class="flex flex-col items-center pt-9 pb-7 px-8 w-full"><img${ssrRenderAttr("src", _imports_0)} alt="Autobot" class="h-10 w-auto object-contain mb-4"><h2 class="text-[18px] font-bold text-white mb-1">Masuk ke Autobot</h2><p class="text-[13px] text-center" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.38)" })}"> Lanjutkan percakapan &amp; simpan riwayat chat kamu </p></div><div class="w-full h-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)" })}"></div><div class="px-8 py-7 w-full flex flex-col items-center gap-4">`);
        if (unref(config).public.googleClientId) {
          _push2(`<div class="w-full overflow-hidden rounded-full" style="${ssrRenderStyle({ "height": "46px" })}"></div>`);
        } else {
          _push2(`<div class="w-full flex items-center justify-center gap-3 h-[46px] rounded-full text-sm font-medium cursor-not-allowed" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "color": "rgba(255,255,255,0.35)", "border": "1px solid rgba(255,255,255,0.09)" })}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg> Continue with Google </div>`);
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
        _push2(`</div><div class="pb-6 px-8 text-center"><p class="text-[11.5px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.22)" })}"> Dengan masuk, kamu setuju dengan <span class="underline cursor-pointer hover:text-white/40 transition-colors">Syarat &amp; Ketentuan</span> kami. </p></div></div></div>`);
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
    const chatHistory = ref([]);
    const langOpen = ref(false);
    const keyCopied = ref(false);
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
    const languages = [
      { code: "id", label: "Bahasa Indonesia", flag: "\u{1F1EE}\u{1F1E9}" },
      { code: "en", label: "English", flag: "\u{1F1FA}\u{1F1F8}" }
    ];
    const currentLang = ref(languages[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "flex flex-col h-full relative",
        style: { "width": "256px", "background": "#111111", "border-right": "1px solid rgba(255,255,255,0.06)" }
      }, _attrs))}><div class="px-2 pb-1 space-y-0.5 shrink-0"><button class="sidebar-item w-full font-medium" style="${ssrRenderStyle({ "color": "#F0F0F0" })}"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-80"><path d="M10 5.25v9.5M5.25 10h9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg> New Chat </button><button class="sidebar-item w-full"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"><path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Search </button></div><div class="px-2 mt-2 space-y-0.5 shrink-0"><div class="px-2 mb-1"><span class="text-[11px] font-semibold tracking-widest uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">Explore</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "sidebar-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><path d="M3.5 10a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM10 7v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg> Fitur `);
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
              createTextVNode(" Fitur ")
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
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect></svg> Produk `);
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
              createTextVNode(" Produk ")
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
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"${_scopeId}></circle><path d="M10 9v5M10 7v.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"${_scopeId}></path></svg> Tentang `);
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
              createTextVNode(" Tentang ")
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
            _push2(`<svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"${_scopeId}><rect x="3" y="4.5" width="14" height="13" rx="2" stroke="currentColor" stroke-width="1.5"${_scopeId}></rect><path d="M3 8.5h14M7 2.5v4M13 2.5v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg> Konsultasi `);
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
              createTextVNode(" Konsultasi ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 overflow-y-auto px-2 mt-3 min-h-0 space-y-4 pb-2"><div><div class="px-2 mb-2"><span class="text-[11px] font-semibold tracking-widest uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">Fitur</span></div><div class="space-y-1.5"><!--[-->`);
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
            _push2(` Lihat semua fitur <svg width="11" height="11" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Lihat semua fitur "),
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
        _push(`<div><div class="px-2 mb-1"><span class="text-[11px] font-semibold tracking-widest uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">Recent</span></div><div class="space-y-0.5"><!--[-->`);
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
        ssrRenderList(languages, (lang) => {
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
      if (unref(chatStore).userName) {
        _push(`<div class="mt-0.5 rounded-xl px-3 py-2.5 space-y-2" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.07)" })}"><div class="flex items-center gap-2.5"><div class="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.10)", "color": "#F0F0F0" })}">${ssrInterpolate(unref(chatStore).userName.charAt(0).toUpperCase())}</div><span class="text-[13px] font-medium truncate flex-1" style="${ssrRenderStyle({ "color": "#F0F0F0" })}">${ssrInterpolate(unref(chatStore).userName)}</span></div>`);
        if (unref(chatStore).accessKey) {
          _push(`<button class="flex items-center gap-2 w-full text-[11.5px] transition-opacity hover:opacity-70" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}"><svg width="13" height="13" viewBox="0 0 20 20" fill="none" class="shrink-0"><rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5"></rect><path d="M13 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2" stroke="currentColor" stroke-width="1.5"></path></svg> ${ssrInterpolate(unref(keyCopied) ? "\u2713 Tersalin" : "Salin access key")}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<button class="sidebar-item mt-0.5 w-full"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0"><path d="M12.5 3.5H15a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 15 17.5h-2.5M8.5 13.5l4-3.5-4-3.5M12.5 10H3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Sign in </button>`);
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
    const { showSignIn, currentUser, closeSignIn } = useAuth();
    const navItems = [
      { label: "Fitur", to: "/features" },
      { label: "Products", to: "/products" },
      { label: "Resources", to: "/resources" },
      { label: "Case Study", to: "/partners" },
      { label: "Konsultasi", to: "/order" }
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
      if (unref(currentUser)) {
        _push(`<div class="relative"><button class="flex items-center gap-2 px-3.5 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)", "color": "#F0F0F0", "border": "1px solid rgba(255,255,255,0.12)" })}"><span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">${ssrInterpolate(unref(currentUser).name.charAt(0).toUpperCase())}</span> ${ssrInterpolate(unref(currentUser).name.split(" ")[0])}</button>`);
        if (unref(userMenuOpen)) {
          _push(`<div class="absolute right-0 top-full mt-1.5 rounded-xl py-1 min-w-[140px] z-50" style="${ssrRenderStyle({ "background": "#1f1f1f", "border": "1px solid rgba(255,255,255,0.10)", "box-shadow": "0 8px 24px rgba(0,0,0,0.4)" })}"><p class="px-3.5 py-2 text-xs text-gray-500 border-b border-white/8">${ssrInterpolate(unref(currentUser).email)}</p><button class="w-full text-left px-3.5 py-2 text-sm text-red-400 hover:bg-white/5 transition-colors"> Sign Out </button></div>`);
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
//# sourceMappingURL=default-CiHJpkGc.mjs.map
