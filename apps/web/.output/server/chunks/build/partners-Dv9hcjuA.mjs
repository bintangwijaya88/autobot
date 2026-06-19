import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, withAsyncContext, computed, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowRight } from 'lucide-vue-next';
import { b as useSeoMeta, e as useFetch, f as useRuntimeConfig } from './server.mjs';
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
  __name: "partners",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Mitra & Studi Kasus \u2014 autobotws",
      description: "Klien dan mitra autobotws \u2014 dari klinik, pendidikan, hingga perusahaan jasa yang mempercayakan solusi software dan otomasi bisnis.",
      ogTitle: "Mitra & Studi Kasus \u2014 autobotws",
      ogDescription: "Perusahaan dan organisasi yang telah menggunakan solusi software dan otomasi dari autobotws.",
      ogUrl: "https://autobot.co.id/partners"
    });
    const config = useRuntimeConfig();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/api/partners`,
      "$uN5UXDMNPt"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const partners = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">Mitra &amp; Studi Kasus</p><h1 class="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Klien dan mitra kami</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600"> autobotws bangga mendukung berbagai industri di Indonesia melalui solusi software, otomasi WhatsApp, dan sistem digital yang disesuaikan dengan kebutuhan operasional. </p></div></section><section class="bg-slate-50 py-16"><div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8"><!--[-->`);
      ssrRenderList(unref(partners), (partner) => {
        _push(`<article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><h2 class="text-xl font-extrabold text-slate-950">${ssrInterpolate(partner.name)}</h2>`);
        if (partner.partnership_type) {
          _push(`<p class="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-700">${ssrInterpolate(partner.partnership_type)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (partner.description) {
          _push(`<p class="mt-3 text-sm leading-6 text-slate-600">${ssrInterpolate(partner.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (partner.testimonial) {
          _push(`<blockquote class="mt-4 border-l-2 border-emerald-200 pl-4 text-sm italic leading-6 text-slate-500"> &quot;${ssrInterpolate(partner.testimonial)}&quot; </blockquote>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      });
      _push(`<!--]-->`);
      if (!unref(partners).length) {
        _push(`<div class="md:col-span-2 rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center"><p class="text-sm font-semibold text-slate-500">Data mitra akan ditampilkan di sini setelah tersedia.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="border-t border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="rounded-lg bg-slate-950 p-8 text-white sm:p-10"><h2 class="text-3xl font-extrabold">Ingin menjadi mitra atau klien berikutnya?</h2><p class="mt-3 max-w-2xl text-sm leading-6 text-slate-300"> Diskusikan kebutuhan otomasi, software, atau integrasi sistem dengan tim kami. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hubungi Kami `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Hubungi Kami "),
              createVNode(unref(ArrowRight), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=partners-Dv9hcjuA.mjs.map
