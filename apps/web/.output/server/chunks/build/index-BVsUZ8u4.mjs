import { defineComponent, watch, mergeProps, unref, ref, computed, h, nextTick, withCtx, createVNode, createTextVNode, toDisplayString, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderVNode, ssrLooseContain, ssrLooseEqual, ssrRenderDynamicModel } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Marked } from 'marked';
import { a as useSeoMeta, c as useRoute, d as useRouter, b as useRuntimeConfig } from './server.mjs';
import { defineStore } from 'pinia';
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
import 'vue-router';
import 'nanoid';

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "ChatWelcome",
  __ssrInlineRender: true,
  emits: ["send"],
  setup(__props, { emit: __emit }) {
    const input = ref("");
    const inputFocused = ref(false);
    ref(null);
    const suggestions = [
      { text: "Lihat portofolio kami", icon: "\u{1F5C2}", accent: true },
      { text: "Buatkan proposal layanan untuk saya", icon: "\u{1F4C4}", accent: true },
      { text: "Buatkan flowchart alur proses order", icon: "\u25CE", accent: true },
      { text: "Buatkan presentasi WaBlastApp", icon: "\u{1F3AF}", accent: true },
      { text: "Buatkan laporan excel penjualan", icon: "\u{1F4CA}", accent: false },
      { text: "Saya butuh chatbot WhatsApp", icon: "\u{1F4AC}", accent: false },
      { text: "Mau blast promo ke banyak kontak", icon: "\u{1F4E3}", accent: false },
      { text: "Automasi proses bisnis saya", icon: "\u26A1", accent: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-center justify-center px-4 py-10 relative" }, _attrs))} data-v-39d3e5de><div class="relative z-10 mb-6 animate-fade-in text-center" data-v-39d3e5de><div class="relative inline-block mb-5 animate-float" data-v-39d3e5de><div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)", "border": "1px solid rgba(255,255,255,0.12)", "box-shadow": "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset" })}" data-v-39d3e5de><svg width="26" height="26" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#F0F0F0" })}" data-v-39d3e5de><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor" data-v-39d3e5de></path></svg></div><div class="absolute inset-0 rounded-2xl blur-xl opacity-20 -z-10" style="${ssrRenderStyle({ "background": "radial-gradient(circle, rgba(59,130,246,0.7), transparent)" })}" data-v-39d3e5de></div></div><h1 class="text-[1.85rem] font-bold mb-2" style="${ssrRenderStyle({ "color": "#F0F0F0", "letter-spacing": "-0.03em", "line-height": "1.2" })}" data-v-39d3e5de> Tell Autobot what you need. </h1><p class="text-[15px]" style="${ssrRenderStyle({ "color": "#464646" })}" data-v-39d3e5de>Consider it done.</p></div><div class="relative z-10 w-full max-w-xl mb-5 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.06s" })}" data-v-39d3e5de><div class="${ssrRenderClass([unref(inputFocused) ? "ring-1 ring-white/18" : "", "flex items-end gap-2 transition-all duration-150"])}" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.09)", "border-radius": "16px", "padding": "10px 10px 10px 16px", "backdrop-filter": "blur(8px)" })}" data-v-39d3e5de><textarea rows="1" class="flex-1 bg-transparent resize-none outline-none text-sm leading-relaxed max-h-32" style="${ssrRenderStyle({ "color": "#F0F0F0", "caret-color": "#F0F0F0" })}" placeholder="Tanya apa saja tentang Autobot..." data-v-39d3e5de>${ssrInterpolate(unref(input))}</textarea><button${ssrIncludeBooleanAttr(!unref(input).trim()) ? " disabled" : ""} class="${ssrRenderClass([unref(input).trim() ? "hover:scale-105 active:scale-95" : "cursor-not-allowed", "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-150"])}" style="${ssrRenderStyle(unref(input).trim() ? "background: #F0F0F0; color: #111;" : "background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.2);")}" data-v-39d3e5de><svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-v-39d3e5de><path d="M5 10h10M11 6l4 4-4 4" data-v-39d3e5de></path></svg></button></div><p class="text-center mt-2 text-[11px] select-none" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.16)" })}" data-v-39d3e5de> Enter untuk kirim \xA0\xB7\xA0 Shift+Enter baris baru </p></div><div class="relative z-10 w-full max-w-xl grid grid-cols-2 gap-2 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-39d3e5de><!--[-->`);
      ssrRenderList(suggestions, (s) => {
        _push(`<button class="${ssrRenderClass([s.accent ? "suggestion-card--accent" : "", "suggestion-card group"])}" data-v-39d3e5de><div class="flex items-start gap-2.5" data-v-39d3e5de><span class="text-base mt-0.5 shrink-0 leading-none" data-v-39d3e5de>${ssrInterpolate(s.icon)}</span><span class="text-[13px] font-medium leading-snug" style="${ssrRenderStyle(s.accent ? "color: #a5b4fc;" : "color: #6A6A6A;")}" data-v-39d3e5de>${ssrInterpolate(s.text)}</span></div></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/ChatWelcome.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-39d3e5de"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  emits: ["action"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-white/10 bg-white/5 p-5 max-w-sm animate-scale-in" }, _attrs))}><div class="mb-4"><div class="flex items-center gap-2 mb-1"><span class="text-xs px-2 py-0.5 rounded-full border border-white/20 text-gray-400 capitalize">${ssrInterpolate(__props.data.category)}</span>`);
      if (__props.data.delivery) {
        _push(`<span class="text-xs px-2 py-0.5 rounded-full border border-blue-500/30 text-blue-400">${ssrInterpolate(__props.data.delivery === "desktop" ? "\u{1F5A5} Desktop App" : __props.data.delivery === "web" ? "\u{1F310} Web App" : "\u26A1 Hybrid")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="text-white font-semibold text-lg">${ssrInterpolate(__props.data.name)}</h3><p class="text-gray-400 text-sm mt-1">${ssrInterpolate(__props.data.tagline)}</p></div><ul class="space-y-1.5 mb-5"><!--[-->`);
      ssrRenderList((__props.data.features || []).slice(0, 4), (f) => {
        _push(`<li class="flex items-center gap-2 text-sm text-gray-300"><span class="text-green-400 flex-shrink-0">\u2713</span> ${ssrInterpolate(f)}</li>`);
      });
      _push(`<!--]--></ul><div class="flex gap-2">`);
      if (__props.data.cta) {
        _push(`<button class="flex-1 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors">${ssrInterpolate(__props.data.cta.label)}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="px-4 py-2.5 rounded-xl border border-white/15 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors"> Detail </button></div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/ProductCard.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "ProductCarousel",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  emits: ["action"],
  setup(__props) {
    const getCategoryEmoji = (cat) => {
      const map = {
        chatbot: "\u{1F916}",
        blast: "\u{1F4E2}",
        workflow: "\u2699\uFE0F",
        integration: "\u{1F517}",
        ai_agent: "\u{1F9E0}",
        scheduled: "\u23F0"
      };
      return map[cat] || "\u{1F4E6}";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl animate-scale-in" }, _attrs))} data-v-7d4f0838>`);
      if (__props.data.title) {
        _push(`<p class="text-sm text-gray-400 mb-3" data-v-7d4f0838>${ssrInterpolate(__props.data.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-hide" data-v-7d4f0838><!--[-->`);
      ssrRenderList(__props.data.items, (item) => {
        _push(`<div class="flex-shrink-0 w-52 rounded-2xl border border-white/10 bg-white/5 p-4 cursor-pointer hover:border-white/25 hover:bg-white/8 transition-all snap-start group" data-v-7d4f0838>`);
        if (item.image) {
          _push(`<div class="w-full h-28 rounded-xl bg-white/10 mb-3 overflow-hidden" data-v-7d4f0838><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="w-full h-full object-cover" data-v-7d4f0838></div>`);
        } else {
          _push(`<div class="w-full h-28 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3 flex items-center justify-center text-3xl" data-v-7d4f0838>${ssrInterpolate(getCategoryEmoji(item.category))}</div>`);
        }
        _push(`<h4 class="text-white font-medium text-sm group-hover:text-blue-300 transition-colors" data-v-7d4f0838>${ssrInterpolate(item.name)}</h4><p class="text-gray-500 text-xs mt-1 line-clamp-2" data-v-7d4f0838>${ssrInterpolate(item.tagline)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/ProductCarousel.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const RichProductCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-7d4f0838"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "PricingTable",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  emits: ["action"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl animate-scale-in" }, _attrs))} data-v-e8b57a24>`);
      if (__props.data.product) {
        _push(`<p class="text-sm text-gray-400 mb-3" data-v-e8b57a24>Harga ${ssrInterpolate(__props.data.product)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" data-v-e8b57a24><!--[-->`);
      ssrRenderList(__props.data.tiers, (tier) => {
        _push(`<div class="${ssrRenderClass([tier.highlighted ? "border-blue-500/50 bg-blue-500/10" : "border-white/10 bg-white/5", "flex-shrink-0 w-52 rounded-2xl border p-4 transition-all"])}" data-v-e8b57a24>`);
        if (tier.highlighted) {
          _push(`<div class="text-xs text-blue-400 font-medium mb-2" data-v-e8b57a24>\u2B50 Populer</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h4 class="text-white font-semibold" data-v-e8b57a24>${ssrInterpolate(tier.name)}</h4><div class="mt-2 mb-3" data-v-e8b57a24><span class="text-2xl font-bold text-white" data-v-e8b57a24>${ssrInterpolate(tier.price)}</span><span class="text-gray-500 text-sm ml-1" data-v-e8b57a24>/ ${ssrInterpolate(tier.period)}</span></div><ul class="space-y-1.5 mb-4" data-v-e8b57a24><!--[-->`);
        ssrRenderList(tier.features, (f) => {
          _push(`<li class="flex items-start gap-1.5 text-xs text-gray-400" data-v-e8b57a24><span class="text-green-400 mt-0.5" data-v-e8b57a24>\u2713</span> ${ssrInterpolate(f)}</li>`);
        });
        _push(`<!--]--></ul><button class="${ssrRenderClass([tier.highlighted ? "bg-blue-500 text-white hover:bg-blue-400" : "border border-white/15 text-gray-400 hover:text-white hover:border-white/30", "w-full py-2 rounded-xl text-xs font-medium transition-colors"])}" data-v-e8b57a24> Pilih ${ssrInterpolate(tier.name)}</button></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/PricingTable.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const RichPricingTable = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-e8b57a24"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "InChatForm",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const formData = ref({});
    const submitted = ref(false);
    const submitting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-white/10 bg-white/5 p-5 max-w-sm animate-scale-in" }, _attrs))}><h3 class="text-white font-semibold mb-1">${ssrInterpolate(__props.data.title)}</h3>`);
      if (__props.data.description) {
        _push(`<p class="text-gray-400 text-sm mb-4">${ssrInterpolate(__props.data.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(submitted)) {
        _push(`<form class="space-y-3"><!--[-->`);
        ssrRenderList(__props.data.fields, (field) => {
          _push(`<div><label class="block text-xs text-gray-400 mb-1">${ssrInterpolate(field.label)} `);
          if (field.required) {
            _push(`<span class="text-red-400">*</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</label>`);
          if (field.type === "textarea") {
            _push(`<textarea${ssrRenderAttr("placeholder", field.placeholder)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} rows="3" class="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-white/25 resize-none">${ssrInterpolate(unref(formData)[field.name])}</textarea>`);
          } else if (field.type === "select") {
            _push(`<select${ssrIncludeBooleanAttr(field.required) ? " required" : ""} class="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-white/25"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(formData)[field.name]) ? ssrLooseContain(unref(formData)[field.name], "") : ssrLooseEqual(unref(formData)[field.name], "")) ? " selected" : ""}>Pilih...</option><!--[-->`);
            ssrRenderList(field.options, (opt) => {
              _push(`<option${ssrRenderAttr("value", opt)}${ssrIncludeBooleanAttr(Array.isArray(unref(formData)[field.name]) ? ssrLooseContain(unref(formData)[field.name], opt) : ssrLooseEqual(unref(formData)[field.name], opt)) ? " selected" : ""}>${ssrInterpolate(opt)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else {
            _push(`<input${ssrRenderDynamicModel(field.type, unref(formData)[field.name], null)}${ssrRenderAttr("type", field.type)}${ssrRenderAttr("placeholder", field.placeholder)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} class="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-white/25">`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><button type="submit"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""} class="w-full py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors disabled:opacity-50">${ssrInterpolate(unref(submitting) ? "Mengirim..." : __props.data.submit_label)}</button></form>`);
      } else {
        _push(`<div class="text-center py-4"><div class="text-3xl mb-2">\u2705</div><p class="text-white font-medium text-sm">Data terkirim!</p><p class="text-gray-400 text-xs mt-1">Kami akan segera menghubungi Anda.</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/InChatForm.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "PartnerGrid",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-white/10 bg-white/5 p-4 max-w-lg animate-scale-in" }, _attrs))}><h4 class="text-white font-medium text-sm mb-3">Klien &amp; Mitra Kami</h4><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(__props.data.partners, (partner) => {
        _push(`<div class="p-3 rounded-xl border border-white/10 bg-white/3"><p class="text-white text-sm font-medium">${ssrInterpolate(partner.name)}</p>`);
        if (partner.description) {
          _push(`<p class="text-gray-500 text-xs mt-0.5">${ssrInterpolate(partner.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/PartnerGrid.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ComparisonTable",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-white/10 bg-white/5 p-4 max-w-lg animate-scale-in overflow-x-auto" }, _attrs))}>`);
      if (__props.data.title) {
        _push(`<h4 class="text-white font-medium text-sm mb-3">${ssrInterpolate(__props.data.title)}</h4>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<table class="w-full text-sm"><thead><tr><!--[-->`);
      ssrRenderList(__props.data.columns, (col) => {
        _push(`<th class="text-left text-gray-400 font-medium pb-2 pr-4">${ssrInterpolate(col)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.data.rows, (row, i) => {
        _push(`<tr class="border-t border-white/5"><!--[-->`);
        ssrRenderList(row, (cell, j) => {
          _push(`<td class="py-2 pr-4 text-gray-300">${ssrInterpolate(cell)}</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/ComparisonTable.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "AccountOffer",
  __ssrInlineRender: true,
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const name = ref("");
    const email = ref("");
    const nameFocused = ref(false);
    const emailFocused = ref(false);
    const submitted = ref(false);
    ref(null);
    const emailTrimmed = computed(() => email.value.trim());
    const emailBlurred = ref(false);
    const submitAttempted = ref(false);
    const isValidEmail = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
    const emailError = computed(() => {
      if (!emailBlurred.value && !submitAttempted.value) return "";
      if (!emailTrimmed.value) return "Email wajib diisi";
      return isValidEmail(emailTrimmed.value) ? "" : "Format email tidak valid";
    });
    const canSubmit = computed(
      () => name.value.trim().length >= 2 && isValidEmail(emailTrimmed.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "rounded-2xl overflow-hidden mt-1 w-full max-w-sm",
        style: { "border": "1px solid rgba(255,255,255,0.10)", "box-shadow": "0 8px 32px rgba(0,0,0,0.4)" }
      }, _attrs))}><div class="px-5 pt-5 pb-4" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.12) 100%)", "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(59,130,246,0.25)", "border": "1px solid rgba(59,130,246,0.35)" })}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#93c5fd" })}"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><p class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">Buat Akun Gratis</p><p class="text-xs mt-0.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">Simpan riwayat &amp; lanjutkan sesi kapan saja</p></div></div></div>`);
      if (!unref(submitted)) {
        _push(`<div class="px-5 py-4 space-y-3" style="${ssrRenderStyle({ "background": "rgba(17,17,17,0.85)" })}"><div class="space-y-1.5"><label class="text-xs font-medium" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.50)" })}">Nama</label><input${ssrRenderAttr("value", unref(name))} type="text" placeholder="Nama kamu" maxlength="60" class="w-full text-sm px-3.5 py-2.5 rounded-xl outline-none transition-all" style="${ssrRenderStyle(unref(nameFocused) ? "background: rgba(255,255,255,0.08); border: 1px solid rgba(96,165,250,0.55); color: #F0F0F0; box-shadow: 0 0 0 3px rgba(59,130,246,0.12);" : "background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); color: #F0F0F0;")}"></div><div class="space-y-1.5"><label class="text-xs font-medium" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.50)" })}">Email</label><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="email@kamu.com" class="w-full text-sm px-3.5 py-2.5 rounded-xl outline-none transition-all" style="${ssrRenderStyle(unref(emailFocused) ? "background: rgba(255,255,255,0.08); border: 1px solid rgba(96,165,250,0.55); color: #F0F0F0; box-shadow: 0 0 0 3px rgba(59,130,246,0.12);" : "background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); color: #F0F0F0;")}">`);
        if (unref(emailError)) {
          _push(`<p class="text-xs" style="${ssrRenderStyle({ "color": "#f87171" })}">${ssrInterpolate(unref(emailError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button${ssrIncludeBooleanAttr(!unref(canSubmit)) ? " disabled" : ""} class="w-full py-2.5 rounded-xl text-sm font-semibold transition-all mt-1" style="${ssrRenderStyle(unref(canSubmit) ? "background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; cursor: pointer; box-shadow: 0 4px 14px rgba(59,130,246,0.35);" : "background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.25); cursor: not-allowed;")}"> Buat Akun &amp; Kirim Kode Verifikasi </button><div class="pt-1 space-y-1.5"><p class="text-center text-xs" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.22)" })}"> Kode 6 digit akan dikirim ke email kamu </p><button class="w-full text-xs text-center py-1 transition-opacity hover:opacity-70" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}"> Lewati, lanjut sebagai tamu \u2192 </button></div></div>`);
      } else {
        _push(`<div class="px-5 py-6 text-center" style="${ssrRenderStyle({ "background": "rgba(17,17,17,0.85)" })}"><div class="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.15)", "border": "1px solid rgba(34,197,94,0.3)" })}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#4ade80" })}"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-sm font-medium" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">Mengirim kode ke ${ssrInterpolate(unref(email))}</p><p class="text-xs mt-1" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">Cek inbox atau folder spam kamu</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/AccountOffer.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ConsultationOffer",
  __ssrInlineRender: true,
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const terms = [
      "Fee mengurangi tagihan proyek selanjutnya",
      "Refund 50% jika dibatalkan sebelum sesi",
      "Dijadwalkan dalam 1\u20132 hari kerja via WhatsApp"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "rounded-2xl overflow-hidden mt-1 w-full max-w-sm",
        style: { "border": "1px solid rgba(255,255,255,0.10)", "box-shadow": "0 8px 32px rgba(0,0,0,0.4)" }
      }, _attrs))}><div class="px-5 pt-5 pb-4" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(168,85,247,0.18) 0%, rgba(59,130,246,0.12) 100%)", "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(168,85,247,0.25)", "border": "1px solid rgba(168,85,247,0.35)" })}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#c4b5fd" })}"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><p class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">Konsultasi dengan Tim Ahli</p><p class="text-xs mt-0.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">1-on-1 session bersama specialist kami</p></div></div></div><div class="px-5 py-4 space-y-3" style="${ssrRenderStyle({ "background": "rgba(17,17,17,0.85)" })}"><div class="flex items-center justify-between py-2 px-3 rounded-xl" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.04)", "border": "1px solid rgba(255,255,255,0.07)" })}"><span class="text-xs" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">Commitment Fee</span><span class="text-base font-bold" style="${ssrRenderStyle({ "color": "#f0f0f0" })}">Rp 50.000</span></div><div class="space-y-2"><!--[-->`);
      ssrRenderList(terms, (t, i) => {
        _push(`<div class="flex items-start gap-2.5"><div class="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.15)", "border": "1px solid rgba(34,197,94,0.3)" })}"><svg width="8" height="8" viewBox="0 0 12 12" fill="none" style="${ssrRenderStyle({ "color": "#4ade80" })}"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-xs leading-relaxed" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.55)" })}">${ssrInterpolate(t)}</p></div>`);
      });
      _push(`<!--]--></div><button class="w-full py-2.5 rounded-xl text-sm font-semibold transition-all mt-1" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #a855f7, #6366f1)", "color": "white", "cursor": "pointer", "box-shadow": "0 4px 14px rgba(168,85,247,0.35)" })}"> Setuju &amp; Bayar Sekarang \u2192 </button><button class="w-full text-xs text-center py-1 transition-opacity hover:opacity-70" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}"> Tanya dulu sebelum bayar </button></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/ConsultationOffer.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "PaymentQR",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const imgError = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "rounded-2xl overflow-hidden mt-1 w-full max-w-sm",
        style: { "border": "1px solid rgba(255,255,255,0.10)", "box-shadow": "0 8px 32px rgba(0,0,0,0.4)" }
      }, _attrs))}><div class="px-5 pt-5 pb-4" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(59,130,246,0.10) 100%)", "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><div class="flex items-center justify-between"><div><p class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">Bayar via GoPay</p><p class="text-xs mt-0.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.45)" })}">Order: ${ssrInterpolate(__props.data.order_id)}</p></div><div class="text-right"><p class="text-xs" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.40)" })}">Total</p><p class="text-base font-bold" style="${ssrRenderStyle({ "color": "#4ade80" })}">Rp 50.000</p></div></div></div><div class="px-5 py-5 flex flex-col items-center gap-4" style="${ssrRenderStyle({ "background": "rgba(17,17,17,0.85)" })}"><div class="p-3 rounded-2xl" style="${ssrRenderStyle({ "background": "white" })}">`);
      if (__props.data.qr_url) {
        _push(`<img${ssrRenderAttr("src", __props.data.qr_url)} alt="GoPay QR Code" class="w-44 h-44 object-contain">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(imgError) || !__props.data.qr_url) {
        _push(`<div class="w-44 h-44 flex items-center justify-center" style="${ssrRenderStyle({ "color": "#666" })}"><p class="text-xs text-center">QR tidak tersedia.<br>Gunakan deeplink.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-xs text-center" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.40)" })}"> Scan dengan aplikasi <strong style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.65)" })}">GoPay</strong> atau <strong style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.65)" })}">Gojek</strong></p>`);
      if (__props.data.deeplink_url) {
        _push(`<a${ssrRenderAttr("href", __props.data.deeplink_url)} target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-opacity hover:opacity-80" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.15)", "border": "1px solid rgba(34,197,94,0.25)", "color": "#4ade80" })}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> Buka di Aplikasi GoPay </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-[11px] text-center" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.20)" })}"> Konfirmasi pembayaran otomatis dikirim ke chat ini </p></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rich/PaymentQR.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const useArtifactStore = defineStore("artifact", () => {
  const artifact = ref(null);
  const isOpen = computed(() => !!artifact.value);
  const open = (a) => {
    artifact.value = a;
  };
  const close = () => {
    artifact.value = null;
  };
  return { artifact, isOpen, open, close };
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ChatBubble",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  emits: ["action", "scroll"],
  setup(__props, { emit: __emit }) {
    const md = new Marked({ breaks: true, gfm: true });
    const renderMd = (text) => md.parse(text);
    const props = __props;
    useArtifactStore();
    const ARTIFACT_TYPES = /* @__PURE__ */ new Set(["document", "selection_list", "mermaid", "excel", "ppt", "html"]);
    const ARTIFACT_LABELS = {
      document: "Dokumen",
      mermaid: "Diagram",
      excel: "Spreadsheet",
      ppt: "Presentasi",
      html: "HTML Preview",
      selection_list: "Daftar Referensi"
    };
    const artifactTypeLabel = (type) => ARTIFACT_LABELS[type] || "Artifact";
    const isArtifact = computed(() => !!props.message.richContent && ARTIFACT_TYPES.has(props.message.richContent.type));
    const displayContent = ref("");
    const animating = ref(false);
    const cursorVisible = ref(true);
    const richComponentMap = {
      product_card: _sfc_main$j,
      carousel: RichProductCarousel,
      pricing_table: RichPricingTable,
      form: _sfc_main$g,
      partner_grid: _sfc_main$f,
      comparison_table: _sfc_main$e,
      account_offer: _sfc_main$d,
      consultation_offer: _sfc_main$c,
      payment_qr: _sfc_main$b
    };
    const getRichComponent = (type) => {
      var _a;
      return (_a = richComponentMap[type]) != null ? _a : "div";
    };
    const formatTime = (date) => {
      return new Intl.DateTimeFormat("id", { hour: "2-digit", minute: "2-digit" }).format(date);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["animate-slide-up flex gap-3", __props.message.role === "user" ? "justify-end" : "justify-start"]
      }, _attrs))}>`);
      if (__props.message.role === "assistant") {
        _push(`<div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)", "border": "1px solid rgba(255,255,255,0.10)" })}"><svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="${ssrRenderStyle({ "color": "#9A9A9A" })}"><path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm.5 11.5h-1v-5h1v5zm0-6.5h-1V5.5h1V7z" fill="currentColor"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([__props.message.role === "user" ? "items-end flex flex-col" : "", "max-w-[78%] space-y-2"])}">`);
      if (__props.message.content && !unref(isArtifact)) {
        _push(`<div class="${ssrRenderClass([[
          __props.message.role === "user" ? "rounded-[18px] rounded-tr-[6px]" : "rounded-[18px] rounded-tl-[6px]",
          __props.message.role === "assistant" ? "chat-md" : ""
        ], "px-4 py-3 text-sm leading-relaxed"])}" style="${ssrRenderStyle(__props.message.role === "user" ? "background: rgba(255,255,255,0.08); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.08); white-space: pre-wrap;" : "color: #D4D4D4;")}">`);
        if (__props.message.isStreaming) {
          _push(`<span>${(_a = renderMd(__props.message.content)) != null ? _a : ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.message.isStreaming) {
          _push(`<span class="inline-block w-0.5 h-[14px] ml-0.5 align-middle animate-pulse rounded-sm" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.5)" })}"></span>`);
        } else if (unref(animating)) {
          _push(`<!--[--><span>${(_b = renderMd(unref(displayContent))) != null ? _b : ""}</span><span class="inline-block w-0.5 h-[14px] ml-0.5 align-middle rounded-sm" style="${ssrRenderStyle([{ "background": "rgba(255,255,255,0.45)" }, { opacity: unref(cursorVisible) ? 1 : 0, transition: "opacity 0.15s" }])}"></span><!--]-->`);
        } else if (__props.message.role === "assistant") {
          _push(`<span>${(_c = renderMd(__props.message.content)) != null ? _c : ""}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(__props.message.content)}</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isArtifact) && __props.message.richContent) {
        _push(`<button class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left transition-all w-full" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.10)", "border": "1px solid rgba(99,102,241,0.20)" })}"><div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.20)", "border": "1px solid rgba(99,102,241,0.3)" })}">`);
        if (__props.message.richContent.type === "document") {
          _push(`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#a5b4fc" })}"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"></path><path d="M14 2v6h6M16 13H8M16 17H8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>`);
        } else {
          _push(`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#a5b4fc" })}"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`);
        }
        _push(`</div><div class="flex-1 min-w-0"><p class="text-[13px] font-medium" style="${ssrRenderStyle({ "color": "#c4b5fd" })}">${ssrInterpolate(((_d = __props.message.richContent.data) == null ? void 0 : _d.title) || artifactTypeLabel(__props.message.richContent.type))}</p><p class="text-[11px]" style="${ssrRenderStyle({ "color": "rgba(165,180,252,0.55)" })}"> Klik untuk buka di panel \u2192 </p></div></button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.message.richContent && !unref(animating) && !unref(isArtifact)) {
        _push(`<div class="animate-scale-in w-full">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getRichComponent(__props.message.richContent.type)), {
          data: __props.message.richContent.data,
          onAction: ($event) => _ctx.$emit("action", $event)
        }, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([__props.message.role === "user" ? "text-right" : "text-left", "text-[11px] px-1 select-none"])}" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.20)" })}">${ssrInterpolate(formatTime(__props.message.timestamp))}</div></div>`);
      if (__props.message.role === "user") {
        _push(`<div class="w-7 shrink-0"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/ChatBubble.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-3 animate-slide-up" }, _attrs))}><div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)", "border": "1px solid rgba(255,255,255,0.10)" })}"><svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="${ssrRenderStyle({ "color": "#9A9A9A" })}"><path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm.5 11.5h-1v-5h1v5zm0-6.5h-1V5.5h1V7z" fill="currentColor"></path></svg></div><div class="flex gap-1.5 items-center h-9 px-1"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/ChatTyping.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ChatSuggestions",
  __ssrInlineRender: true,
  props: {
    suggestions: {}
  },
  emits: ["send"],
  setup(__props) {
    const emojiMap = {
      account: "\u{1F511}",
      guest: "\u{1F464}",
      product: "\u{1F4E6}",
      chatbot: "\u{1F4AC}",
      blast: "\u{1F4E4}",
      automation: "\u2699\uFE0F",
      custom: "\u{1F4BB}",
      company: "\u{1F3E2}",
      order: "\u{1F6D2}",
      demo: "\u25B6\uFE0F",
      consultation: "\u{1F4DE}",
      pricing: "\u{1F3F7}\uFE0F",
      support: "\u{1F6E0}\uFE0F",
      portfolio: "\u{1F5C2}",
      document: "\u{1F4C4}",
      default: "\u2726"
    };
    const styleMap = {
      account: "background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.25);",
      guest: "background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);",
      order: "background: rgba(34,197,94,0.10); border: 1px solid rgba(34,197,94,0.22);",
      demo: "background: rgba(168,85,247,0.10); border: 1px solid rgba(168,85,247,0.22);",
      portfolio: "background: rgba(99,102,241,0.10); border: 1px solid rgba(99,102,241,0.22);",
      document: "background: rgba(99,102,241,0.10); border: 1px solid rgba(99,102,241,0.22);",
      default: "background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);"
    };
    const getEmoji = (cat) => {
      var _a;
      return (_a = emojiMap[cat]) != null ? _a : emojiMap.default;
    };
    const getStyle = (cat) => {
      var _a;
      return (_a = styleMap[cat]) != null ? _a : styleMap.default;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2 overflow-x-auto pb-1 scrollbar-hide" }, _attrs))} data-v-1b88c7aa><!--[-->`);
      ssrRenderList(__props.suggestions, (s, i) => {
        _push(`<button style="${ssrRenderStyle(getStyle(s.category))}" class="${ssrRenderClass([{ "animate-slide-up": true }, "flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all text-left group"])}"${ssrRenderAttr("data-delay", i * 40)} data-v-1b88c7aa><span class="text-base leading-none" data-v-1b88c7aa>${ssrInterpolate(getEmoji(s.category))}</span><span class="text-[12.5px] font-medium whitespace-nowrap" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.70)" })}" data-v-1b88c7aa>${ssrInterpolate(s.text)}</span></button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/ChatSuggestions.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-1b88c7aa"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ChatContainer",
  __ssrInlineRender: true,
  emits: ["send", "action"],
  setup(__props) {
    const chatStore = useChatStore();
    const bottomRef = ref(null);
    const scrollToBottom = () => {
      var _a;
      (_a = bottomRef.value) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    watch(() => chatStore.messages.length, () => {
      nextTick(scrollToBottom);
    });
    watch(() => chatStore.isTyping, (v) => {
      if (v) nextTick(scrollToBottom);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChatWelcome = __nuxt_component_0$1;
      const _component_ChatBubble = _sfc_main$a;
      const _component_ChatTyping = __nuxt_component_2;
      const _component_ChatSuggestions = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full relative overflow-hidden" }, _attrs))} data-v-43f2fb28>`);
      if (!unref(chatStore).hasStarted) {
        _push(`<div class="absolute inset-0 pointer-events-none z-0" data-v-43f2fb28><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 65%)" })}" data-v-43f2fb28></div><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(99,102,241,0.05) 0%, transparent 60%)" })}" data-v-43f2fb28></div><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "radial-gradient(ellipse 60% 35% at 50% 85%, rgba(59,130,246,0.04) 0%, transparent 55%)" })}" data-v-43f2fb28></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(chatStore).hasStarted) {
        _push(`<div class="flex-1 flex flex-col items-center justify-center relative z-10" data-v-43f2fb28>`);
        _push(ssrRenderComponent(_component_ChatWelcome, {
          onSend: ($event) => _ctx.$emit("send", $event)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex-1 flex flex-col min-h-0 relative z-10" data-v-43f2fb28><div class="flex-1 overflow-y-auto px-4 py-6 space-y-5" data-v-43f2fb28><!--[-->`);
        ssrRenderList(unref(chatStore).messages, (msg) => {
          _push(ssrRenderComponent(_component_ChatBubble, {
            key: msg.id,
            message: msg,
            onAction: ($event) => _ctx.$emit("action", $event),
            onScroll: scrollToBottom
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (unref(chatStore).isTyping) {
          _push(ssrRenderComponent(_component_ChatTyping, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="h-1" data-v-43f2fb28></div></div>`);
        if (unref(chatStore).suggestions.length && !unref(chatStore).isTyping) {
          _push(`<div class="px-4 pb-2 shrink-0" data-v-43f2fb28>`);
          _push(ssrRenderComponent(_component_ChatSuggestions, {
            suggestions: unref(chatStore).suggestions,
            onSend: ($event) => _ctx.$emit("send", $event)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/ChatContainer.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-43f2fb28"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChatInput",
  __ssrInlineRender: true,
  props: {
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["send"],
  setup(__props, { emit: __emit }) {
    const input = ref("");
    const isFocused = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 pb-5 pt-2" }, _attrs))} data-v-0f311383><div class="${ssrRenderClass([unref(isFocused) ? "ring-1 ring-white/20" : "", "flex items-end gap-2 transition-all duration-150"])}" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.09)", "border-radius": "16px", "padding": "10px 10px 10px 16px", "backdrop-filter": "blur(8px)" })}" data-v-0f311383><textarea class="flex-1 bg-transparent resize-none outline-none text-sm leading-relaxed max-h-32 chat-input" style="${ssrRenderStyle({ "color": "#F0F0F0", "caret-color": "#F0F0F0" })}"${ssrRenderAttr("placeholder", __props.placeholder || "Tanya apa saja tentang Autobot...")}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} rows="1" data-v-0f311383>${ssrInterpolate(unref(input))}</textarea><button${ssrIncludeBooleanAttr(!unref(input).trim() || __props.disabled) ? " disabled" : ""} class="${ssrRenderClass([unref(input).trim() && !__props.disabled ? "text-[#111111] hover:scale-105 active:scale-95" : "cursor-not-allowed", "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-150"])}" style="${ssrRenderStyle(unref(input).trim() && !__props.disabled ? "background: #F0F0F0;" : "background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.2);")}" data-v-0f311383><svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-v-0f311383><path d="M5 10h10M11 6l4 4-4 4" data-v-0f311383></path></svg></button></div><p class="text-center mt-2 text-[11px] select-none" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.18)" })}" data-v-0f311383> Enter untuk kirim \xA0\xB7\xA0 Shift+Enter baris baru </p></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/ChatInput.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0f311383"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ArtifactMermaid",
  __ssrInlineRender: true,
  setup(__props) {
    const artifactStore = useArtifactStore();
    const artifact = computed(() => artifactStore.artifact);
    ref(null);
    const error = ref(false);
    const showCode = ref(false);
    const codeCopied = ref(false);
    function downloadSVG() {
      return;
    }
    async function copyCode() {
      await (void 0).clipboard.writeText(artifact.value.code);
      codeCopied.value = true;
      setTimeout(() => {
        codeCopied.value = false;
      }, 1800);
    }
    const ArtifactPanelHeader = defineComponent({
      props: { title: String, typeLabel: String, icon: String },
      emits: ["close"],
      setup(props, { slots, emit }) {
        return () => {
          var _a;
          return h("div", {
            class: "shrink-0 flex items-center gap-2.5 px-4 h-[52px]",
            style: "border-bottom: 1px solid rgba(255,255,255,0.07);"
          }, [
            h(
              "div",
              { class: "w-7 h-7 rounded-lg flex items-center justify-center shrink-0", style: "background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.2);" },
              h(
                "svg",
                { width: 13, height: 13, viewBox: "0 0 24 24", fill: "none", style: "color: #a5b4fc;" },
                h("path", { d: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM17.5 14l4.5 7h-9l4.5-7z", stroke: "currentColor", "stroke-width": 1.8, "stroke-linejoin": "round" })
              )
            ),
            h("div", { class: "flex-1 min-w-0" }, [
              h("p", { class: "text-[13px] font-medium truncate", style: "color: #e2e8f0;" }, props.title),
              h("p", { class: "text-[11px]", style: "color: rgba(255,255,255,0.30);" }, props.typeLabel)
            ]),
            (_a = slots.default) == null ? void 0 : _a.call(slots),
            h(
              "button",
              { onClick: () => emit("close"), class: "w-7 h-7 flex items-center justify-center rounded-lg transition-all shrink-0", style: "color: rgba(255,255,255,0.30);" },
              h(
                "svg",
                { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none" },
                h("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round" })
              )
            )
          ]);
        };
      }
    });
    const DownloadIcon = () => h(
      "svg",
      { width: 11, height: 11, viewBox: "0 0 24 24", fill: "none" },
      h("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" })
    );
    const CopyIcon = () => h("svg", { width: 11, height: 11, viewBox: "0 0 24 24", fill: "none" }, [
      h("rect", { x: 9, y: 9, width: 13, height: 13, rx: 2, stroke: "currentColor", "stroke-width": 2 }),
      h("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1", stroke: "currentColor", "stroke-width": 2 })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(ArtifactPanelHeader), {
        title: unref(artifact).title,
        "type-label": "Diagram",
        icon: "diagram",
        onClose: ($event) => unref(artifactStore).close()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="artifact-btn"${_scopeId}>`);
            _push2(ssrRenderComponent(DownloadIcon, null, null, _parent2, _scopeId));
            _push2(` SVG </button><button class="artifact-btn"${_scopeId}>`);
            _push2(ssrRenderComponent(CopyIcon, null, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(codeCopied) ? "Copied!" : "Code")}</button>`);
          } else {
            return [
              createVNode("button", {
                onClick: downloadSVG,
                class: "artifact-btn"
              }, [
                createVNode(DownloadIcon),
                createTextVNode(" SVG ")
              ]),
              createVNode("button", {
                onClick: copyCode,
                class: "artifact-btn"
              }, [
                createVNode(CopyIcon),
                createTextVNode(" " + toDisplayString(unref(codeCopied) ? "Copied!" : "Code"), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 overflow-auto flex items-center justify-center p-6">`);
      if (unref(error)) {
        _push(`<div class="text-red-400 text-sm text-center px-8"><p class="font-medium mb-2">Diagram render error</p><pre class="text-xs text-left bg-white/5 rounded-lg p-3 overflow-auto">${ssrInterpolate(unref(artifact).code)}</pre></div>`);
      } else {
        _push(`<div class="max-w-full [&amp;&gt;svg]:max-w-full [&amp;&gt;svg]:h-auto"></div>`);
      }
      _push(`</div><div class="shrink-0 border-t border-white/8 px-5 py-3"><button class="text-xs text-gray-500 hover:text-gray-300 transition-colors">${ssrInterpolate(unref(showCode) ? "Hide" : "Show")} Mermaid code \u2195 </button>`);
      if (unref(showCode)) {
        _push(`<pre class="mt-2 text-xs text-gray-400 bg-white/4 rounded-lg p-3 overflow-auto font-mono">${ssrInterpolate(unref(artifact).code)}</pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artifact/ArtifactMermaid.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ArtifactExcel",
  __ssrInlineRender: true,
  setup(__props) {
    const artifactStore = useArtifactStore();
    const artifact = computed(() => artifactStore.artifact);
    const headers = computed(() => artifact.value.headers || []);
    const rows = computed(() => artifact.value.rows || []);
    const downloading = ref(false);
    const copied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full" }, _attrs))}><div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]" style="${ssrRenderStyle({ "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(34,197,94,0.12)", "border": "1px solid rgba(34,197,94,0.2)" })}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#4ade80" })}"><path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18" stroke="currentColor" stroke-width="1.8"></path></svg></div><div class="flex-1 min-w-0"><p class="text-[13px] font-medium truncate" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">${ssrInterpolate(unref(artifact).title)}</p><p class="text-[11px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}">Spreadsheet \xB7 ${ssrInterpolate(unref(rows).length)} baris</p></div><button${ssrIncludeBooleanAttr(unref(downloading)) ? " disabled" : ""} class="artifact-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(unref(downloading) ? "..." : ".xlsx")}</button><button class="artifact-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"></path></svg> ${ssrInterpolate(unref(copied) ? "Copied!" : "CSV")}</button><button class="w-7 h-7 flex items-center justify-center rounded-lg shrink-0" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button></div><div class="flex-1 overflow-auto p-4">`);
      if (unref(headers).length) {
        _push(`<table class="w-full text-sm border-collapse"><thead><tr><!--[-->`);
        ssrRenderList(unref(headers), (h2) => {
          _push(`<th class="px-3 py-2 text-left text-xs font-semibold border-b border-white/10" style="${ssrRenderStyle({ "color": "#4ade80", "background": "rgba(34,197,94,0.05)" })}">${ssrInterpolate(h2)}</th>`);
        });
        _push(`<!--]--></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(rows), (row, ri) => {
          _push(`<tr class="border-b border-white/5 hover:bg-white/3 transition-colors"><!--[-->`);
          ssrRenderList(row, (cell, ci) => {
            _push(`<td class="px-3 py-2 text-xs" style="${ssrRenderStyle({ "color": "#d4d4d4" })}">${ssrInterpolate(cell)}</td>`);
          });
          _push(`<!--]--></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<div class="text-center text-gray-600 py-8 text-sm">No table data found in response</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artifact/ArtifactExcel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ArtifactPpt",
  __ssrInlineRender: true,
  setup(__props) {
    const artifactStore = useArtifactStore();
    const artifact = computed(() => artifactStore.artifact);
    const slides = computed(() => artifact.value.slides || []);
    const activeSlide = ref(0);
    const downloading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full" }, _attrs))}><div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]" style="${ssrRenderStyle({ "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(251,146,60,0.12)", "border": "1px solid rgba(251,146,60,0.2)" })}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#fb923c" })}"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8"></rect><path d="M8 20h8M12 18v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></div><div class="flex-1 min-w-0"><p class="text-[13px] font-medium truncate" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">${ssrInterpolate(unref(artifact).title)}</p><p class="text-[11px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}">Presentasi \xB7 ${ssrInterpolate(unref(slides).length)} slide</p></div><button${ssrIncludeBooleanAttr(unref(downloading)) ? " disabled" : ""} class="artifact-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(unref(downloading) ? "..." : ".pptx")}</button><button class="w-7 h-7 flex items-center justify-center rounded-lg shrink-0" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button></div><div class="flex-1 overflow-y-auto p-4 space-y-3"><!--[-->`);
      ssrRenderList(unref(slides), (slide, i) => {
        var _a;
        _push(`<div style="${ssrRenderStyle({ "background": "rgba(251,146,60,0.04)" })}" class="${ssrRenderClass([unref(activeSlide) === i ? "border-orange-500/40" : "", "rounded-xl border border-white/8 p-5 transition-colors hover:border-white/18"])}"><div class="flex items-start gap-3"><span class="text-xs font-bold text-orange-500/60 shrink-0 mt-0.5">${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><div class="flex-1 min-w-0"><p class="text-sm font-semibold text-white mb-2">${ssrInterpolate(slide.title)}</p>`);
        if ((_a = slide.bullets) == null ? void 0 : _a.length) {
          _push(`<ul class="space-y-1"><!--[-->`);
          ssrRenderList(slide.bullets, (b, bi) => {
            _push(`<li class="text-xs text-gray-400 flex gap-2"><span class="text-orange-500/50 shrink-0">\u2022</span> ${ssrInterpolate(b)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]-->`);
      if (!unref(slides).length) {
        _push(`<div class="text-center text-gray-600 py-8 text-sm">No slides generated</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artifact/ArtifactPpt.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ArtifactHtml",
  __ssrInlineRender: true,
  setup(__props) {
    const artifactStore = useArtifactStore();
    const artifact = computed(() => artifactStore.artifact);
    const mode = ref("preview");
    const copied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full" }, _attrs))}><div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]" style="${ssrRenderStyle({ "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(168,85,247,0.12)", "border": "1px solid rgba(168,85,247,0.2)" })}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#c084fc" })}"><path d="M10 2l-6 6 6 6M14 2l6 6-6 6M8 21l8-18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="flex-1 min-w-0"><p class="text-[13px] font-medium truncate" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">${ssrInterpolate(unref(artifact).title)}</p><p class="text-[11px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}">HTML Preview</p></div><div class="flex items-center gap-1.5"><button class="artifact-btn">${ssrInterpolate(unref(mode) === "preview" ? "</> Code" : "\u2B1A Preview")}</button><button class="artifact-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"></path></svg> ${ssrInterpolate(unref(copied) ? "Copied!" : "Copy")}</button></div><button class="w-7 h-7 flex items-center justify-center rounded-lg shrink-0" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button></div><div class="flex-1 overflow-hidden">`);
      if (unref(mode) === "preview") {
        _push(`<iframe${ssrRenderAttr("srcdoc", unref(artifact).html)} sandbox="allow-scripts" class="w-full h-full border-0 bg-white" title="HTML Preview"></iframe>`);
      } else {
        _push(`<div class="h-full overflow-auto p-4"><pre class="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">${ssrInterpolate(unref(artifact).html)}</pre></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artifact/ArtifactHtml.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArtifactPanel",
  __ssrInlineRender: true,
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const artifactStore = useArtifactStore();
    const artifact = computed(() => artifactStore.artifact);
    const md = new Marked({ breaks: true, gfm: true });
    const renderMd = (text) => md.parse(text);
    const copied = ref(false);
    const exportingDocx = ref(false);
    const CloseBtn = defineComponent({
      setup() {
        return () => h("button", {
          onClick: () => artifactStore.close(),
          class: "w-7 h-7 flex items-center justify-center rounded-lg transition-all shrink-0",
          style: "color: rgba(255,255,255,0.30);"
        }, h(
          "svg",
          { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none" },
          h("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round" })
        ));
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col h-full",
        style: { "background": "#161616", "border-left": "1px solid rgba(255,255,255,0.07)" }
      }, _attrs))}>`);
      if (unref(artifact).type === "mermaid") {
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      } else if (unref(artifact).type === "excel") {
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      } else if (unref(artifact).type === "ppt") {
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      } else if (unref(artifact).type === "html") {
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      } else if (unref(artifact).type === "document") {
        _push(`<!--[--><div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]" style="${ssrRenderStyle({ "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.15)", "border": "1px solid rgba(99,102,241,0.2)" })}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#a5b4fc" })}"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"></path><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></div><div class="flex-1 min-w-0"><p class="text-[13px] font-medium truncate" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">${ssrInterpolate(unref(artifact).title)}</p><p class="text-[11px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}">Dokumen</p></div><button class="artifact-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"></path></svg> ${ssrInterpolate(unref(copied) ? "Copied!" : "Copy")}</button><button class="artifact-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> .md </button><button${ssrIncludeBooleanAttr(unref(exportingDocx)) ? " disabled" : ""} class="artifact-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(unref(exportingDocx) ? "..." : ".docx")}</button>`);
        _push(ssrRenderComponent(unref(CloseBtn), null, null, _parent));
        _push(`</div><article class="flex-1 overflow-y-auto px-7 py-6 chat-md text-sm leading-[1.75]" style="${ssrRenderStyle({ "color": "#d4d4d4" })}">${(_a = renderMd(unref(artifact).content)) != null ? _a : ""}</article><!--]-->`);
      } else if (unref(artifact).type === "selection_list") {
        _push(`<!--[--><div class="shrink-0 flex items-center gap-2.5 px-4 h-[52px]" style="${ssrRenderStyle({ "border-bottom": "1px solid rgba(255,255,255,0.07)" })}"><div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.15)", "border": "1px solid rgba(99,102,241,0.2)" })}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="${ssrRenderStyle({ "color": "#a5b4fc" })}"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></div><div class="flex-1 min-w-0"><p class="text-[13px] font-medium truncate" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">${ssrInterpolate(unref(artifact).title)}</p><p class="text-[11px]" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}">Pilih referensi</p></div>`);
        _push(ssrRenderComponent(unref(CloseBtn), null, null, _parent));
        _push(`</div><div class="flex-1 overflow-y-auto p-4 space-y-2">`);
        if (unref(artifact).subtitle) {
          _push(`<p class="text-xs px-1 pb-1" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.30)" })}">${ssrInterpolate(unref(artifact).subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(artifact).items, (item) => {
          _push(`<button class="w-full text-left px-4 py-3 rounded-xl transition-all" style="${ssrRenderStyle({ "border": "1px solid rgba(255,255,255,0.07)", "background": "rgba(255,255,255,0.02)" })}"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><p class="text-sm font-medium" style="${ssrRenderStyle({ "color": "#e2e8f0" })}">${ssrInterpolate(item.label)}</p>`);
          if (item.description) {
            _push(`<p class="text-xs mt-0.5 truncate" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.40)" })}">${ssrInterpolate(item.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (item.tag) {
            _push(`<span class="text-[11px] px-2 py-0.5 rounded-full shrink-0 font-medium" style="${ssrRenderStyle({ "background": "rgba(99,102,241,0.15)", "border": "1px solid rgba(99,102,241,0.2)", "color": "#a5b4fc" })}">${ssrInterpolate(item.tag)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></button>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/artifact/ArtifactPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useWebSocket = () => {
  const config = useRuntimeConfig();
  let socket = null;
  const isConnected = ref(false);
  const sessionId = ref(null);
  const reconnectTimer = ref(null);
  const messageHandlers = ref([]);
  let reconnectAttempts = 0;
  const connect = (sid) => {
    if ((socket == null ? void 0 : socket.readyState) === WebSocket.OPEN) return;
    const wsUrl = sid ? `${config.public.wsUrl}?session_id=${sid}` : config.public.wsUrl;
    socket = new WebSocket(wsUrl);
    socket.onopen = () => {
      isConnected.value = true;
      reconnectAttempts = 0;
      if (reconnectTimer.value) {
        clearTimeout(reconnectTimer.value);
        reconnectTimer.value = null;
      }
    };
    socket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        messageHandlers.value.forEach((handler) => handler(msg));
      } catch (e) {
        console.error("WS parse error:", e);
      }
    };
    socket.onclose = () => {
      isConnected.value = false;
      socket = null;
      const delay = Math.min(1e3 * Math.pow(2, reconnectAttempts), 3e4);
      reconnectAttempts++;
      reconnectTimer.value = setTimeout(() => {
        if (sessionId.value) connect(sessionId.value);
      }, delay);
    };
    socket.onerror = () => {
      socket == null ? void 0 : socket.close();
    };
  };
  const sendMessage = (content) => {
    if (!socket || !isConnected.value || !sessionId.value) return;
    socket.send(JSON.stringify({
      type: "message",
      session_id: sessionId.value,
      content
    }));
  };
  const sendRegister = (name, email) => {
    if (!socket || !isConnected.value || !sessionId.value) return;
    socket.send(JSON.stringify({
      type: "register",
      session_id: sessionId.value,
      data: { name, email }
    }));
  };
  const submitForm = (formType, data) => {
    if (!socket || !isConnected.value || !sessionId.value) return;
    socket.send(JSON.stringify({
      type: "form_submit",
      session_id: sessionId.value,
      form_type: formType,
      data
    }));
  };
  const onMessage = (handler) => {
    messageHandlers.value.push(handler);
    return () => {
      messageHandlers.value = messageHandlers.value.filter((h2) => h2 !== handler);
    };
  };
  const disconnect = () => {
    if (reconnectTimer.value) clearTimeout(reconnectTimer.value);
    socket == null ? void 0 : socket.close();
    socket = null;
    isConnected.value = false;
  };
  return { connect, sendMessage, sendRegister, submitForm, onMessage, disconnect, isConnected, sessionId };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Autobot \u2014 WhatsApp Chatbot & Automasi Bisnis Indonesia",
      description: "Chat langsung dengan Autobot AI. Tanya tentang WaBlastApp, chatbot WhatsApp, blast massal, dan solusi automasi bisnis terbaik di Indonesia.",
      ogTitle: "Autobot \u2014 WhatsApp Chatbot & Automasi Bisnis",
      ogDescription: "Platform chatbot WhatsApp, blast massal, dan AI automation untuk bisnis Indonesia. Coba gratis sekarang.",
      ogImage: "https://autobot.co.id/logo.png",
      ogUrl: "https://autobot.co.id",
      twitterCard: "summary",
      twitterImage: "https://autobot.co.id/logo.png"
    });
    const chatStore = useChatStore();
    const artifactStore = useArtifactStore();
    const ws = useWebSocket();
    useRoute();
    useRouter();
    watch(() => chatStore.pendingSend, (text) => {
      if (text) {
        chatStore.pendingSend = null;
        handleSend(text);
      }
    });
    const handleSend = (text) => {
      if (!text.trim()) return;
      chatStore.addMessage({ role: "user", content: text });
      chatStore.isTyping = true;
      ws.sendMessage(text);
    };
    const handleAction = (payload) => {
      switch (payload.type) {
        case "open_artifact":
          artifactStore.open(payload.artifact);
          break;
        case "register_form":
          chatStore.addMessage({ role: "user", content: payload.email });
          chatStore.isTyping = true;
          ws.sendRegister(payload.name, payload.email);
          break;
        case "show_form":
          chatStore.addMessage({
            role: "user",
            content: `Saya ingin ${payload.form_type === "order" ? "order" : payload.form_type === "demo_request" ? "request demo" : "konsultasi"}`
          });
          ws.sendMessage(`show_form:${payload.form_type}`);
          break;
        case "chat_message":
          handleSend(payload.text);
          break;
        case "form_submit":
          ws.submitForm(payload.form_type, payload.data);
          break;
        case "show_product":
          handleSend(`Ceritakan lebih detail tentang ${payload.slug}`);
          break;
        case "show_portfolio":
          handleSend(`Ceritakan lebih detail tentang proyek ${payload.label}`);
          break;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChatContainer = __nuxt_component_0;
      const _component_ChatInput = __nuxt_component_1;
      const _component_ArtifactPanel = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex h-full",
        style: { "background": "#111111" }
      }, _attrs))} data-v-8857880b><div class="flex flex-col min-h-0 transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" style="${ssrRenderStyle(unref(artifactStore).isOpen ? "width: 44%; min-width: 280px;" : "width: 100%;")}" data-v-8857880b><div class="flex-1 overflow-hidden min-h-0" data-v-8857880b>`);
      _push(ssrRenderComponent(_component_ChatContainer, {
        onSend: handleSend,
        onAction: handleAction
      }, null, _parent));
      _push(`</div>`);
      if (unref(chatStore).hasStarted) {
        _push(ssrRenderComponent(_component_ChatInput, {
          disabled: unref(chatStore).isTyping,
          onSend: handleSend
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(artifactStore).isOpen) {
        _push(ssrRenderComponent(_component_ArtifactPanel, {
          class: "flex-1 min-w-0",
          style: { "min-width": "320px" },
          onAction: handleAction
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8857880b"]]);

export { index as default };
//# sourceMappingURL=index-BVsUZ8u4.mjs.map
