import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { marked } from 'marked';
import { l as getBlogFallbackBySlug, h as blogFallbackPosts } from './marketing-Cc82Zqmw.mjs';
import { g as useRoute, h as createError, b as useSeoMeta } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
    const route = useRoute();
    const fallback = getBlogFallbackBySlug(String(route.params.slug));
    if (!fallback) {
      throw createError({ statusCode: 404, statusMessage: "Article not found" });
    }
    const post = ref(fallback);
    const related = computed(() => blogFallbackPosts.filter((item) => item.slug !== post.value.slug).slice(0, 2));
    const rendered = computed(() => marked.parse(post.value.content || ""));
    useSeoMeta({
      title: () => `${post.value.title} \u2014 Autobot Blog`,
      description: () => post.value.excerpt
    });
    function formatDate(date) {
      if (!date) return "Draft";
      return new Date(date).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(_attrs)} data-v-286acdc0><section class="border-b border-slate-200 bg-white py-14" data-v-286acdc0><div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" data-v-286acdc0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` Back to blog `);
          } else {
            return [
              createVNode(unref(ArrowLeft), { class: "h-4 w-4" }),
              createTextVNode(" Back to blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-8" data-v-286acdc0><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700" data-v-286acdc0>${ssrInterpolate(unref(post).category)}</p><h1 class="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl" data-v-286acdc0>${ssrInterpolate(unref(post).title)}</h1><p class="mt-5 text-lg leading-8 text-slate-600" data-v-286acdc0>${ssrInterpolate(unref(post).excerpt)}</p><div class="mt-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500" data-v-286acdc0><span data-v-286acdc0>${ssrInterpolate(unref(post).author)}</span><span data-v-286acdc0>\xB7</span><span data-v-286acdc0>${ssrInterpolate(formatDate(unref(post).published_at))}</span><span data-v-286acdc0>\xB7</span><span data-v-286acdc0>${ssrInterpolate(unref(post).read_time_minutes)} min read</span></div></div></div></section><section class="bg-slate-50 py-12" data-v-286acdc0><div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" data-v-286acdc0>`);
      if (unref(post).cover_image) {
        _push(`<div class="mb-8 overflow-hidden rounded-lg border border-slate-200 bg-white" data-v-286acdc0><img${ssrRenderAttr("src", unref(post).cover_image)}${ssrRenderAttr("alt", unref(post).title)} class="aspect-[16/9] w-full object-cover" data-v-286acdc0></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="blog-content rounded-lg border border-slate-200 bg-white p-6 text-slate-700 shadow-sm sm:p-8" data-v-286acdc0>${(_a = unref(rendered)) != null ? _a : ""}</div></div></section><section class="border-t border-slate-200 bg-white py-14" data-v-286acdc0><div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" data-v-286acdc0><div class="flex items-center justify-between gap-4" data-v-286acdc0><h2 class="text-2xl font-extrabold text-slate-950" data-v-286acdc0>Related articles</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-sm font-bold text-blue-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All articles`);
          } else {
            return [
              createTextVNode("All articles")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 grid gap-4 sm:grid-cols-2" data-v-286acdc0><!--[-->`);
      ssrRenderList(unref(related), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.slug,
          to: `/blog/${item.slug}`,
          class: "rounded-lg border border-slate-200 bg-slate-50 p-5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-xs font-extrabold uppercase tracking-wider text-blue-700" data-v-286acdc0${_scopeId}>${ssrInterpolate(item.category)}</p><h3 class="mt-2 font-extrabold text-slate-950" data-v-286acdc0${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600" data-v-286acdc0${_scopeId}>${ssrInterpolate(item.excerpt)}</p><span class="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700" data-v-286acdc0${_scopeId}> Read `);
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              return [
                createVNode("p", { class: "text-xs font-extrabold uppercase tracking-wider text-blue-700" }, toDisplayString(item.category), 1),
                createVNode("h3", { class: "mt-2 font-extrabold text-slate-950" }, toDisplayString(item.title), 1),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(item.excerpt), 1),
                createVNode("span", { class: "mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700" }, [
                  createTextVNode(" Read "),
                  createVNode(unref(ArrowRight), { class: "h-4 w-4" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-286acdc0"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-CruKAR-l.mjs.map
