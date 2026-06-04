import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, reactive, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { d as useRoute } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isNew = route.params.id === "new";
    const form = reactive({
      id: "",
      slug: "",
      name: "",
      tagline: "",
      description: "",
      category: "",
      delivery_model: "web",
      demo_url: "",
      status: "active",
      sort_order: 0,
      features: "[]",
      pricing: "{}",
      tech_stack: "[]"
    });
    const saving = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-3xl mx-auto w-full" }, _attrs))}><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products",
        class: "text-gray-500 hover:text-gray-300 text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Products`);
          } else {
            return [
              createTextVNode("\u2190 Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-xl font-bold text-white">${ssrInterpolate(isNew ? "New Product" : "Edit Product")}</h1></div>`);
      if (unref(error)) {
        _push(`<div class="mb-4 px-4 py-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-sm">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label class="block text-xs text-gray-500 mb-1.5">Name *</label><input${ssrRenderAttr("value", unref(form).name)} class="admin-input w-full" placeholder="WaBlastApp" required></div><div><label class="block text-xs text-gray-500 mb-1.5">Slug *</label><input${ssrRenderAttr("value", unref(form).slug)} class="admin-input w-full" placeholder="wablastapp" required></div></div><div><label class="block text-xs text-gray-500 mb-1.5">Tagline</label><input${ssrRenderAttr("value", unref(form).tagline)} class="admin-input w-full" placeholder="Platform blast WhatsApp terbaik"></div><div><label class="block text-xs text-gray-500 mb-1.5">Description</label><textarea rows="3" class="admin-input w-full" placeholder="Deskripsi lengkap produk...">${ssrInterpolate(unref(form).description)}</textarea></div><div class="grid grid-cols-3 gap-4"><div><label class="block text-xs text-gray-500 mb-1.5">Category</label><input${ssrRenderAttr("value", unref(form).category)} class="admin-input w-full" placeholder="chatbot"></div><div><label class="block text-xs text-gray-500 mb-1.5">Delivery Model</label><input${ssrRenderAttr("value", unref(form).delivery_model)} class="admin-input w-full" placeholder="web / desktop / api"></div><div><label class="block text-xs text-gray-500 mb-1.5">Status</label><select class="admin-input w-full"><option value="active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "active") : ssrLooseEqual(unref(form).status, "active")) ? " selected" : ""}>Active</option><option value="draft"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "draft") : ssrLooseEqual(unref(form).status, "draft")) ? " selected" : ""}>Draft</option><option value="archived"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "archived") : ssrLooseEqual(unref(form).status, "archived")) ? " selected" : ""}>Archived</option></select></div></div><div class="grid grid-cols-2 gap-4"><div><label class="block text-xs text-gray-500 mb-1.5">Demo URL</label><input${ssrRenderAttr("value", unref(form).demo_url)} class="admin-input w-full" placeholder="https://demo.autobot.co.id"></div><div><label class="block text-xs text-gray-500 mb-1.5">Sort Order</label><input${ssrRenderAttr("value", unref(form).sort_order)} type="number" class="admin-input w-full" placeholder="0"></div></div><div><label class="block text-xs text-gray-500 mb-1.5">Features (JSON array)</label><textarea rows="5" class="admin-input w-full font-mono text-xs" placeholder="[&quot;Feature 1&quot;, &quot;Feature 2&quot;]">${ssrInterpolate(unref(form).features)}</textarea></div><div><label class="block text-xs text-gray-500 mb-1.5">Pricing (JSON)</label><textarea rows="4" class="admin-input w-full font-mono text-xs" placeholder="{&quot;starter&quot;: 99000}">${ssrInterpolate(unref(form).pricing)}</textarea></div><div><label class="block text-xs text-gray-500 mb-1.5">Tech Stack (JSON array)</label><textarea rows="3" class="admin-input w-full font-mono text-xs" placeholder="[&quot;Go&quot;, &quot;Vue 3&quot;]">${ssrInterpolate(unref(form).tech_stack)}</textarea></div><div class="flex justify-end gap-3 pt-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products",
        class: "px-4 h-9 rounded-lg border border-white/15 text-gray-400 text-sm flex items-center hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-5 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 disabled:opacity-50 transition-colors">${ssrInterpolate(unref(saving) ? "Saving..." : "Save Product")}</button></div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-AEFC8GaL.mjs.map
