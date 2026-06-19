import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, resolveDynamicComponent, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, ArrowRight, Check } from 'lucide-vue-next';
import { o as getPlatformBySlug, p as platforms, u as useCases } from './marketing-Cc82Zqmw.mjs';
import { a as useLocale, g as useRoute, h as createError, b as useSeoMeta } from './server.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLocale();
    const route = useRoute();
    const platform = computed(() => getPlatformBySlug(String(route.params.slug)));
    const related = computed(() => platforms.filter((item) => {
      var _a;
      return item.slug !== ((_a = platform.value) == null ? void 0 : _a.slug);
    }).slice(0, 3));
    if (!platform.value) {
      throw createError({ statusCode: 404, statusMessage: "Platform not found" });
    }
    useSeoMeta({
      title: () => {
        var _a;
        return `${(_a = platform.value) == null ? void 0 : _a.name} \u2014 autobotws`;
      },
      description: () => {
        var _a;
        return ((_a = platform.value) == null ? void 0 : _a.desc) || "Detail produk autobotws.";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(platform)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/platforms",
          class: "inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-950"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(t)("marketing.platforms.back"))}`);
            } else {
              return [
                createVNode(unref(ArrowLeft), { class: "h-4 w-4" }),
                createTextVNode(" " + toDisplayString(unref(t)("marketing.platforms.back")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"><div><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(platform).group)}</p><h1 class="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">${ssrInterpolate(unref(platform).name)}</h1><p class="mt-4 text-xl font-semibold text-slate-600">${ssrInterpolate(unref(platform).tagline)}</p><p class="mt-5 text-base leading-8 text-slate-600">${ssrInterpolate(unref(platform).desc)}</p>`);
        if (unref(platform).targetUsers) {
          _push(`<p class="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"><span class="font-extrabold text-slate-950">${ssrInterpolate(unref(t)("marketing.platforms.bestFor"))}: </span>${ssrInterpolate(unref(platform).targetUsers)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(platform).url) {
          _push(`<a${ssrRenderAttr("href", unref(platform).url)} target="_blank" rel="noopener" class="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white">${ssrInterpolate(unref(t)("marketing.platforms.visit"))} ${ssrInterpolate(unref(platform).domain)} `);
          _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent));
          _push(`</a>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/contact",
            class: "mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("marketing.platforms.plan"))} `);
                _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("marketing.platforms.plan")) + " ", 1),
                  createVNode(unref(ArrowRight), { class: "h-4 w-4" })
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div><div class="rounded-lg border border-slate-200 bg-slate-50 p-4"><div class="rounded-lg border border-slate-200 bg-white p-6">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(platform).icon), { class: "h-10 w-10 text-blue-700" }, null), _parent);
        _push(`<p class="mt-5 text-sm font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.platforms.coreModules"))}</p><div class="mt-4 grid gap-3"><!--[-->`);
        ssrRenderList(unref(platform).features, (feature) => {
          _push(`<div class="flex items-center gap-3 rounded-lg bg-slate-50 p-3"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">`);
          _push(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent));
          _push(`</span><p class="text-sm font-bold text-slate-800">${ssrInterpolate(feature)}</p></div>`);
        });
        _push(`<!--]--></div></div></div></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-6 lg:grid-cols-3"><div class="rounded-lg border border-slate-200 bg-white p-6"><p class="text-sm font-extrabold text-slate-950">${ssrInterpolate(unref(t)("marketing.platforms.bestFor"))}</p><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(unref(t)("marketing.platforms.bestForDesc"))}</p></div><div class="rounded-lg border border-slate-200 bg-white p-6"><p class="text-sm font-extrabold text-slate-950">${ssrInterpolate(unref(t)("marketing.platforms.implementation"))}</p><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(unref(t)("marketing.platforms.implementationDesc"))}</p></div><div class="rounded-lg border border-slate-200 bg-white p-6"><p class="text-sm font-extrabold text-slate-950">${ssrInterpolate(unref(t)("marketing.platforms.connect"))}</p><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(unref(t)("marketing.platforms.connectDesc"))}</p></div></div></div></section><section class="border-y border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">${ssrInterpolate(unref(t)("marketing.platforms.related"))}</p><div class="mt-6 grid gap-4 md:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(useCases).slice(0, 3), (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.slug,
            to: "/solutions",
            class: "rounded-lg border border-slate-200 bg-slate-50 p-5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), { class: "h-6 w-6 text-slate-800" }, null), _parent2, _scopeId);
                _push2(`<h3 class="mt-4 font-extrabold text-slate-950"${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(item.desc)}</p>`);
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "h-6 w-6 text-slate-800" })),
                  createVNode("h3", { class: "mt-4 font-extrabold text-slate-950" }, toDisplayString(item.title), 1),
                  createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(item.desc), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-end justify-between gap-4"><div><p class="text-sm font-extrabold uppercase tracking-wider text-slate-400">${ssrInterpolate(unref(t)("marketing.platforms.more"))}</p><h2 class="mt-2 text-2xl font-extrabold text-slate-950">${ssrInterpolate(unref(t)("marketing.platforms.moreTitle"))}</h2></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/platforms",
          class: "text-sm font-bold text-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("marketing.platforms.allPlatforms"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("marketing.platforms.allPlatforms")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-6 grid gap-4 md:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(related), (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.slug,
            to: `/platforms/${item.slug}`,
            class: "rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), { class: "h-6 w-6 text-blue-700" }, null), _parent2, _scopeId);
                _push2(`<h3 class="mt-4 font-extrabold text-slate-950"${_scopeId}>${ssrInterpolate(item.name)}</h3><p class="mt-2 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(item.tagline)}</p>`);
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "h-6 w-6 text-blue-700" })),
                  createVNode("h3", { class: "mt-4 font-extrabold text-slate-950" }, toDisplayString(item.name), 1),
                  createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(item.tagline), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/platforms/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-uuvtLIln.mjs.map
