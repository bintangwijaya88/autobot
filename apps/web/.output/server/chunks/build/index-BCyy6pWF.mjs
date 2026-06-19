import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderTeleport } from 'vue/server-renderer';
import { f as useRuntimeConfig } from './server.mjs';
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

const limit = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const statusFilter = ref("");
    const page = ref(0);
    const data = ref(null);
    const contacts = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const total = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.total) || 0;
    });
    function getHeaders() {
      return { Authorization: `Bearer ${localStorage.getItem("admin_token") || ""}` };
    }
    async function refresh() {
      data.value = await $fetch(
        `${config.public.apiBase}/api/admin/contacts?status=${statusFilter.value}&limit=${limit}&offset=${page.value * limit}`,
        { headers: getHeaders() }
      );
    }
    const editing = ref(null);
    const editStatus = ref("");
    const editNotes = ref("");
    const saving = ref(false);
    watch([statusFilter, page], refresh);
    const typeColor = {
      order: "bg-blue-500/20 text-blue-400",
      consultation: "bg-purple-500/20 text-purple-400",
      demo_request: "bg-yellow-500/20 text-yellow-400"
    };
    const statusColor = {
      new: "bg-green-500/20 text-green-400",
      in_progress: "bg-yellow-500/20 text-yellow-400",
      closed: "bg-gray-500/20 text-gray-400"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-6xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold text-white">Contact Submissions</h1><select class="admin-input text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(statusFilter)) ? ssrLooseContain(unref(statusFilter), "") : ssrLooseEqual(unref(statusFilter), "")) ? " selected" : ""}>All Status</option><option value="new"${ssrIncludeBooleanAttr(Array.isArray(unref(statusFilter)) ? ssrLooseContain(unref(statusFilter), "new") : ssrLooseEqual(unref(statusFilter), "new")) ? " selected" : ""}>New</option><option value="in_progress"${ssrIncludeBooleanAttr(Array.isArray(unref(statusFilter)) ? ssrLooseContain(unref(statusFilter), "in_progress") : ssrLooseEqual(unref(statusFilter), "in_progress")) ? " selected" : ""}>In Progress</option><option value="closed"${ssrIncludeBooleanAttr(Array.isArray(unref(statusFilter)) ? ssrLooseContain(unref(statusFilter), "closed") : ssrLooseEqual(unref(statusFilter), "closed")) ? " selected" : ""}>Closed</option></select></div><div class="rounded-2xl border border-white/8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><table class="w-full text-sm"><thead><tr class="border-b border-white/8 text-xs text-gray-500"><th class="px-5 py-3 text-left font-medium">Name</th><th class="px-5 py-3 text-left font-medium">Contact</th><th class="px-5 py-3 text-left font-medium">Type</th><th class="px-5 py-3 text-left font-medium">Status</th><th class="px-5 py-3 text-left font-medium">Date</th><th class="px-5 py-3 text-right font-medium">Actions</th></tr></thead><tbody class="divide-y divide-white/5"><!--[-->`);
      ssrRenderList(unref(contacts), (c) => {
        _push(`<tr class="hover:bg-white/3 transition-colors"><td class="px-5 py-3 text-white">${ssrInterpolate(c.name)}</td><td class="px-5 py-3 text-gray-400 text-xs"><div>${ssrInterpolate(c.email || "-")}</div><div>${ssrInterpolate(c.phone || "")}</div></td><td class="px-5 py-3"><span class="${ssrRenderClass([typeColor[c.type] || "bg-gray-500/20 text-gray-400", "text-xs px-2 py-0.5 rounded-full"])}">${ssrInterpolate(c.type)}</span></td><td class="px-5 py-3"><span class="${ssrRenderClass([statusColor[c.status] || "bg-gray-500/20 text-gray-400", "text-xs px-2 py-0.5 rounded-full"])}">${ssrInterpolate(c.status)}</span></td><td class="px-5 py-3 text-xs text-gray-500">${ssrInterpolate(new Date(c.created_at).toLocaleDateString("id"))}</td><td class="px-5 py-3 text-right"><button class="text-xs text-blue-400 hover:text-blue-300">Update</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!unref(contacts).length) {
        _push(`<tr><td colspan="6" class="px-5 py-10 text-center text-gray-600">No submissions yet</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table>`);
      if (unref(total) > limit) {
        _push(`<div class="px-5 py-3 border-t border-white/8 flex items-center justify-between text-xs text-gray-500"><span>${ssrInterpolate(unref(total))} total</span><div class="flex gap-2"><button${ssrIncludeBooleanAttr(unref(page) === 0) ? " disabled" : ""} class="px-3 py-1 rounded border border-white/10 disabled:opacity-30">Prev</button><button${ssrIncludeBooleanAttr((unref(page) + 1) * limit >= unref(total)) ? " disabled" : ""} class="px-3 py-1 rounded border border-white/10 disabled:opacity-30">Next</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(editing)) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.7)" })}"><div class="w-full max-w-md rounded-2xl border border-white/15 p-6" style="${ssrRenderStyle({ "background": "#1a1a1a" })}"><h2 class="text-white font-semibold mb-4">Update Contact: ${ssrInterpolate(unref(editing).name)}</h2><div class="space-y-3"><div><label class="block text-xs text-gray-500 mb-1.5">Status</label><select class="admin-input w-full"><option value="new"${ssrIncludeBooleanAttr(Array.isArray(unref(editStatus)) ? ssrLooseContain(unref(editStatus), "new") : ssrLooseEqual(unref(editStatus), "new")) ? " selected" : ""}>New</option><option value="in_progress"${ssrIncludeBooleanAttr(Array.isArray(unref(editStatus)) ? ssrLooseContain(unref(editStatus), "in_progress") : ssrLooseEqual(unref(editStatus), "in_progress")) ? " selected" : ""}>In Progress</option><option value="closed"${ssrIncludeBooleanAttr(Array.isArray(unref(editStatus)) ? ssrLooseContain(unref(editStatus), "closed") : ssrLooseEqual(unref(editStatus), "closed")) ? " selected" : ""}>Closed</option></select></div><div><label class="block text-xs text-gray-500 mb-1.5">Notes</label><textarea rows="3" class="admin-input w-full" placeholder="Internal notes...">${ssrInterpolate(unref(editNotes))}</textarea></div></div><div class="flex justify-end gap-3 mt-5"><button class="px-4 h-9 rounded-lg border border-white/15 text-gray-400 text-sm hover:text-white">Cancel</button><button${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-5 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 disabled:opacity-50">${ssrInterpolate(unref(saving) ? "Saving..." : "Save")}</button></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/contacts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BCyy6pWF.mjs.map
