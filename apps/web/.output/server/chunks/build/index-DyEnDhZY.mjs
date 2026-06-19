import { defineComponent, ref, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderTeleport, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
    useSeoMeta({ title: "Integrations \u2014 Admin", robots: "noindex" });
    const integrations = ref([]);
    const total = ref(0);
    const loading = ref(true);
    const editModal = ref(null);
    const isNew = ref(false);
    const saving = ref(false);
    const deleting = ref(null);
    const form = reactive({
      id: "",
      name: "",
      slug: "",
      description: "",
      logo_url: "",
      category: "general",
      status: "coming_soon",
      is_featured: false,
      sort_order: 0,
      docs_url: "",
      knowledge_base: "",
      created_at: ""
    });
    const statusColor = {
      active: "bg-green-500/20 text-green-400",
      coming_soon: "bg-yellow-500/20 text-yellow-400",
      deprecated: "bg-red-500/20 text-red-400"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-5xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><div><h1 class="text-xl font-bold text-white">Integrations</h1><p class="text-xs text-gray-500 mt-0.5">${ssrInterpolate(unref(total))} integrasi</p></div><button class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white" style="${ssrRenderStyle({ "background": "#6366f1" })}"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg> Tambah Integrasi </button></div>`);
      if (unref(loading)) {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="rounded-xl border border-white/8 p-4 h-16 animate-pulse" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!unref(integrations).length) {
        _push(`<div class="rounded-2xl border border-white/8 py-16 text-center" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><p class="text-gray-500 text-sm">Belum ada integrasi</p></div>`);
      } else {
        _push(`<div class="rounded-2xl border border-white/8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><table class="w-full text-sm"><thead><tr class="border-b border-white/8" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Integrasi</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Kategori</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Featured</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Aksi</th></tr></thead><tbody class="divide-y divide-white/5"><!--[-->`);
        ssrRenderList(unref(integrations), (i) => {
          _push(`<tr class="hover:bg-white/2 transition-colors"><td class="px-4 py-3"><div class="flex items-center gap-3">`);
          if (i.logo_url) {
            _push(`<img${ssrRenderAttr("src", i.logo_url)} class="w-8 h-8 rounded-lg object-contain" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.08)" })}">`);
          } else {
            _push(`<div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.08)", "color": "rgba(255,255,255,0.5)" })}">${ssrInterpolate(i.name.charAt(0))}</div>`);
          }
          _push(`<div><p class="font-medium text-white">${ssrInterpolate(i.name)}</p><p class="text-xs text-gray-500">${ssrInterpolate(i.slug)}</p></div></div></td><td class="px-4 py-3 text-xs text-gray-400">${ssrInterpolate(i.category)}</td><td class="px-4 py-3"><span class="${ssrRenderClass([statusColor[i.status] || "bg-gray-500/20 text-gray-400", "text-[11px] px-2 py-0.5 rounded-full font-medium"])}">${ssrInterpolate(i.status === "coming_soon" ? "Segera Hadir" : i.status === "active" ? "Aktif" : i.status)}</span></td><td class="px-4 py-3 text-xs">`);
          if (i.is_featured) {
            _push(`<span class="text-yellow-400">\u2605 Featured</span>`);
          } else {
            _push(`<span class="text-gray-600">\u2014</span>`);
          }
          _push(`</td><td class="px-4 py-3"><div class="flex items-center gap-2"><button class="text-xs text-blue-400 hover:text-blue-300">Edit</button><button${ssrIncludeBooleanAttr(unref(deleting) === i.id) ? " disabled" : ""} class="text-xs text-red-500 hover:text-red-400 disabled:opacity-40">Hapus</button></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(editModal)) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto py-8" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.75)" })}"><div class="w-full max-w-[560px] rounded-2xl p-6" style="${ssrRenderStyle({ "background": "#1a1a1a", "border": "1px solid rgba(255,255,255,0.10)" })}"><h3 class="text-base font-semibold text-white mb-5">${ssrInterpolate(unref(isNew) ? "Tambah Integrasi" : "Edit Integrasi")}</h3><div class="space-y-4"><div class="grid grid-cols-2 gap-3"><div><label class="block text-xs text-gray-500 mb-1">Nama *</label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" placeholder="WhatsApp"></div><div><label class="block text-xs text-gray-500 mb-1">Slug</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none font-mono" placeholder="whatsapp"></div></div><div><label class="block text-xs text-gray-500 mb-1">Logo URL</label><input${ssrRenderAttr("value", unref(form).logo_url)} type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" placeholder="https://..."></div><div><label class="block text-xs text-gray-500 mb-1">Deskripsi</label><textarea rows="3" class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none resize-none" placeholder="Deskripsi singkat integrasi...">${ssrInterpolate(unref(form).description)}</textarea></div><div class="grid grid-cols-2 gap-3"><div><label class="block text-xs text-gray-500 mb-1">Kategori</label><input${ssrRenderAttr("value", unref(form).category)} type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" placeholder="crm, payment, ai..."></div><div><label class="block text-xs text-gray-500 mb-1">Status</label><select class="w-full h-10 rounded-xl border border-white/10 px-3 text-sm text-white outline-none" style="${ssrRenderStyle({ "background": "rgba(30,30,40,1)" })}"><option value="active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "active") : ssrLooseEqual(unref(form).status, "active")) ? " selected" : ""}>Aktif</option><option value="coming_soon"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "coming_soon") : ssrLooseEqual(unref(form).status, "coming_soon")) ? " selected" : ""}>Segera Hadir</option><option value="deprecated"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "deprecated") : ssrLooseEqual(unref(form).status, "deprecated")) ? " selected" : ""}>Deprecated</option></select></div></div><div class="grid grid-cols-2 gap-3"><div><label class="block text-xs text-gray-500 mb-1">Sort Order</label><input${ssrRenderAttr("value", unref(form).sort_order)} type="number" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none"></div><div class="flex items-end pb-1"><label class="flex items-center gap-2 cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_featured) ? ssrLooseContain(unref(form).is_featured, null) : unref(form).is_featured) ? " checked" : ""} type="checkbox" class="w-4 h-4 rounded accent-yellow-400"><span class="text-sm text-gray-400">Featured</span></label></div></div><div><label class="block text-xs text-gray-500 mb-1">Docs URL</label><input${ssrRenderAttr("value", unref(form).docs_url)} type="text" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none" placeholder="https://docs.example.com"></div><div><label class="block text-xs text-gray-500 mb-1">Knowledge Base (untuk chatbot AI)</label><textarea rows="4" class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none resize-none" placeholder="Informasi tentang integrasi ini yang akan digunakan chatbot...">${ssrInterpolate(unref(form).knowledge_base)}</textarea></div></div><div class="flex justify-end gap-2 mt-5"><button class="px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-white border border-white/10">Batal</button><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-50" style="${ssrRenderStyle({ "background": "#6366f1" })}">${ssrInterpolate(unref(saving) ? "Menyimpan..." : "Simpan")}</button></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/integrations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DyEnDhZY.mjs.map
