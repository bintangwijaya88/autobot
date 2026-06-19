import { _ as __nuxt_component_0 } from './nuxt-link-BosTbSaS.mjs';
import { defineComponent, ref, computed, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { Search, ArrowRight } from 'lucide-vue-next';
import { h as blogFallbackPosts } from './marketing-Cc82Zqmw.mjs';
import { b as useSeoMeta } from './server.mjs';
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
    useSeoMeta({
      title: "Blog \u2014 autobotws",
      description: "Artikel autobotws tentang AI agent, workflow automation, CRM, WhatsApp automation, dan sistem digital untuk bisnis."
    });
    const posts = ref(blogFallbackPosts);
    const query = ref("");
    const activeCategory = ref("all");
    const loading = ref(false);
    const categories = computed(() => ["all", ...Array.from(new Set(posts.value.map((post) => post.category).filter(Boolean)))]);
    const filteredPosts = computed(() => {
      const q = query.value.trim().toLowerCase();
      return posts.value.filter((post) => {
        const categoryMatch = activeCategory.value === "all" || post.category === activeCategory.value;
        const queryMatch = !q || [post.title, post.excerpt, post.category, ...post.tags || []].join(" ").toLowerCase().includes(q);
        return categoryMatch && queryMatch;
      });
    });
    function formatDate(date) {
      if (!date) return "Draft";
      return new Date(date).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="border-b border-slate-200 bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">Autobot Blog</p><div class="mt-3 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl"> Ideas for AI, automation, and digital operations. </h1><p class="text-lg leading-8 text-slate-600"> Practical notes for founders, operators, and teams who want to turn manual work into measurable digital workflows. </p></div></div></section><section class="bg-slate-50 py-8"><div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div class="relative max-w-md flex-1">`);
      _push(ssrRenderComponent(unref(Search), { class: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }, null, _parent));
      _push(`<input${ssrRenderAttr("value", unref(query))} type="search" placeholder="Search articles" class="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"></div><div class="flex gap-2 overflow-x-auto pb-1"><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<button class="${ssrRenderClass([unref(activeCategory) === category ? "bg-slate-950 text-white" : "border border-slate-300 bg-white text-slate-700", "rounded-lg px-4 py-2 text-sm font-bold"])}">${ssrInterpolate(category === "all" ? "All" : category)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 pb-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
      if (unref(loading)) {
        _push(`<p class="mb-4 text-sm text-slate-500">Loading latest articles...</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(filteredPosts), (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: post.slug,
          to: `/blog/${post.slug}`,
          class: "rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (post.cover_image) {
                _push2(`<div class="mb-5 overflow-hidden rounded-lg border border-slate-200"${_scopeId}><img${ssrRenderAttr("src", post.cover_image)}${ssrRenderAttr("alt", post.title)} class="aspect-[16/9] w-full object-cover"${_scopeId}></div>`);
              } else {
                _push2(`<div class="mb-5 flex aspect-[16/9] items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700"${_scopeId}><span class="text-sm font-extrabold uppercase tracking-wider"${_scopeId}>${ssrInterpolate(post.category)}</span></div>`);
              }
              _push2(`<div class="flex items-center gap-2 text-xs font-bold text-slate-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(formatDate(post.published_at))}</span><span${_scopeId}>\xB7</span><span${_scopeId}>${ssrInterpolate(post.read_time_minutes)} min read</span></div><h2 class="mt-3 text-xl font-extrabold text-slate-950"${_scopeId}>${ssrInterpolate(post.title)}</h2><p class="mt-3 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(post.excerpt)}</p><span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"${_scopeId}> Read article `);
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              return [
                post.cover_image ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-5 overflow-hidden rounded-lg border border-slate-200"
                }, [
                  createVNode("img", {
                    src: post.cover_image,
                    alt: post.title,
                    class: "aspect-[16/9] w-full object-cover"
                  }, null, 8, ["src", "alt"])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mb-5 flex aspect-[16/9] items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700"
                }, [
                  createVNode("span", { class: "text-sm font-extrabold uppercase tracking-wider" }, toDisplayString(post.category), 1)
                ])),
                createVNode("div", { class: "flex items-center gap-2 text-xs font-bold text-slate-500" }, [
                  createVNode("span", null, toDisplayString(formatDate(post.published_at)), 1),
                  createVNode("span", null, "\xB7"),
                  createVNode("span", null, toDisplayString(post.read_time_minutes) + " min read", 1)
                ]),
                createVNode("h2", { class: "mt-3 text-xl font-extrabold text-slate-950" }, toDisplayString(post.title), 1),
                createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(post.excerpt), 1),
                createVNode("span", { class: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700" }, [
                  createTextVNode(" Read article "),
                  createVNode(unref(ArrowRight), { class: "h-4 w-4" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (!unref(filteredPosts).length) {
        _push(`<div class="rounded-lg border border-slate-200 bg-white p-10 text-center"><p class="font-bold text-slate-950">No articles found.</p><p class="mt-2 text-sm text-slate-500">Try another keyword or category.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-h-vmWFnr.mjs.map
