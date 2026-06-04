import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, withAsyncContext, computed, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta, f as useFetch, c as useRuntimeConfig } from './server.mjs';
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
      title: "Klien & Mitra \u2014 Autobot",
      description: "Klien dan mitra Autobot Wijaya Solution \u2014 dari klinik, SMKS, hingga perusahaan impor.",
      ogTitle: "Klien & Mitra \u2014 Autobot",
      ogDescription: "Perusahaan-perusahaan yang sudah mempercayakan solusi bot dan automasi kepada Autobot Wijaya Solution.",
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
    computed(() => partners.value.filter((p) => p.is_featured));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl font-bold text-white mb-2">Klien &amp; Mitra</h1><p class="text-gray-400 mb-10">Kami bangga melayani berbagai industri di Indonesia.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"><!--[-->`);
      ssrRenderList(unref(partners), (partner) => {
        _push(`<div class="rounded-2xl border border-white/10 bg-white/3 p-5"><h3 class="text-white font-semibold">${ssrInterpolate(partner.name)}</h3>`);
        if (partner.partnership_type) {
          _push(`<p class="text-xs text-blue-400 mt-0.5 capitalize">${ssrInterpolate(partner.partnership_type)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (partner.description) {
          _push(`<p class="text-gray-400 text-sm mt-2">${ssrInterpolate(partner.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (partner.testimonial) {
          _push(`<blockquote class="mt-3 pl-3 border-l-2 border-white/20 text-gray-400 text-sm italic"> &quot;${ssrInterpolate(partner.testimonial)}&quot; </blockquote>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Jadi Mitra Kami `);
          } else {
            return [
              createTextVNode(" Jadi Mitra Kami ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=partners-DM7IiOOm.mjs.map
