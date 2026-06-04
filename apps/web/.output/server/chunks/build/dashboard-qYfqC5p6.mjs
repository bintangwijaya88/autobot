import { _ as __nuxt_component_0 } from './nuxt-link-D5BEjpNN.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
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

const chartW = 440;
const chartH = 100;
const barChartH = 120;
const barChartW = 440;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Dashboard \u2014 Autobot Admin", robots: "noindex" });
    const stats = ref({});
    const recentSessions = ref([]);
    const sessionsTrend = ref([]);
    const topIntents = ref([]);
    const aiUsage = ref(null);
    const loading = ref(true);
    const lastRefreshed = ref(null);
    function fmtTokens(n) {
      if (n >= 1e6) return (n / 1e6).toFixed(2) + "M";
      if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
      return n.toString();
    }
    function fmtCost(usd) {
      if (usd < 0.01) return "< $0.01";
      return "$" + usd.toFixed(4);
    }
    const chartPad = { top: 10, right: 10, bottom: 20, left: 28 };
    const linePoints = computed(() => {
      const data = sessionsTrend.value;
      if (!data.length) return "";
      const counts = data.map((d) => d.count);
      const maxVal = Math.max(...counts, 1);
      const innerW = chartW - chartPad.left - chartPad.right;
      const innerH = chartH - chartPad.top - chartPad.bottom;
      return data.map((d, i) => {
        const x = chartPad.left + i / Math.max(data.length - 1, 1) * innerW;
        const y = chartPad.top + innerH - d.count / maxVal * innerH;
        return `${x},${y}`;
      }).join(" ");
    });
    const areaPoints = computed(() => {
      if (!linePoints.value) return "";
      sessionsTrend.value;
      const innerW = chartW - chartPad.left - chartPad.right;
      const bottomY = chartH - chartPad.bottom;
      const firstX = chartPad.left;
      const lastX = chartPad.left + innerW;
      return `${firstX},${bottomY} ${linePoints.value} ${lastX},${bottomY}`;
    });
    const xLabels = computed(() => {
      const data = sessionsTrend.value;
      if (!data.length) return [];
      const innerW = chartW - chartPad.left - chartPad.right;
      const step = Math.ceil(data.length / 5);
      return data.filter((_, i) => i % step === 0 || i === data.length - 1).map((d, idx, arr) => {
        const origIdx = data.indexOf(d);
        const x = chartPad.left + origIdx / Math.max(data.length - 1, 1) * innerW;
        const label = d.date.slice(5);
        return { x, label };
      });
    });
    const yMax = computed(() => {
      if (!sessionsTrend.value.length) return 0;
      return Math.max(...sessionsTrend.value.map((d) => d.count));
    });
    const barPad = { top: 10, right: 10, bottom: 20, left: 28 };
    const barData = computed(() => topIntents.value.slice(0, 6));
    computed(() => {
      const data = barData.value;
      if (!data.length) return [];
      const maxVal = Math.max(...data.map((d) => d.count), 1);
      const innerW = barChartW - barPad.left - barPad.right;
      const innerH = barChartH - barPad.top - barPad.bottom;
      const barW = innerW / data.length * 0.6;
      const gap = innerW / data.length;
      return data.map((d, i) => {
        const barH = d.count / maxVal * innerH;
        const x = barPad.left + i * gap + (gap - barW) / 2;
        const y = barPad.top + innerH - barH;
        return { x, y, w: barW, h: barH, label: d.intent, count: d.count };
      });
    });
    const quickLinks = [
      {
        to: "/admin/products",
        label: "Products",
        icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7h16M7 7v11" stroke="currentColor" stroke-width="1.5"/></svg>`
      },
      {
        to: "/admin/contacts",
        label: "Contacts",
        icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7l8 5 8-7" stroke="currentColor" stroke-width="1.5"/></svg>`
      },
      {
        to: "/admin/knowledge",
        label: "Knowledge Base",
        icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 0 1 6 6c0 2.5-1.5 4.6-3.5 5.5V15H7.5v-1.5C5.5 12.6 4 10.5 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" stroke-width="1.5"/><path d="M7.5 18h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
      },
      {
        to: "/admin/sessions",
        label: "Sessions",
        icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-6xl mx-auto w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold text-white">Dashboard</h1><div class="flex items-center gap-3">`);
      if (unref(lastRefreshed)) {
        _push(`<span class="text-xs text-gray-600"> Diperbarui ${ssrInterpolate(unref(lastRefreshed).toLocaleTimeString("id"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20"><span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> LIVE </div><button class="text-xs text-gray-500 hover:text-white transition-colors px-3 py-1 rounded-lg border border-white/8 hover:border-white/20"> \u21BB Refresh </button></div></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="rounded-2xl border border-white/8 p-5 h-20 animate-pulse" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!--[--><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><p class="text-gray-500 text-xs mb-1.5">Total Sessions</p><p class="text-2xl font-bold text-white">${ssrInterpolate(((_a = unref(stats).total_sessions) != null ? _a : 0).toLocaleString())}</p></div><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><p class="text-gray-500 text-xs mb-1.5">Total Messages</p><p class="text-2xl font-bold text-white">${ssrInterpolate(((_b = unref(stats).total_messages) != null ? _b : 0).toLocaleString())}</p></div><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><p class="text-gray-500 text-xs mb-1.5">Total Users</p><p class="text-2xl font-bold text-blue-400">${ssrInterpolate(((_c = unref(stats).total_users) != null ? _c : 0).toLocaleString())}</p></div><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.03)" })}"><p class="text-gray-500 text-xs mb-1.5">Contact Forms</p><p class="text-2xl font-bold text-green-400">${ssrInterpolate(((_d = unref(stats).total_contacts) != null ? _d : 0).toLocaleString())}</p></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="flex items-center justify-between mb-4"><h2 class="text-sm font-medium text-white">Sessions (7 hari terakhir)</h2><span class="text-xs text-gray-600">Total: ${ssrInterpolate(unref(sessionsTrend).reduce((a, b) => a + b.count, 0))}</span></div>`);
        if (!unref(sessionsTrend).length) {
          _push(`<div class="h-28 flex items-center justify-center text-gray-600 text-sm"> Belum ada data </div>`);
        } else {
          _push(`<svg${ssrRenderAttr("viewBox", `0 0 ${chartW} ${chartH}`)} class="w-full" preserveAspectRatio="none"><line${ssrRenderAttr("x1", chartPad.left)}${ssrRenderAttr("y1", chartPad.top)}${ssrRenderAttr("x2", chartPad.left)}${ssrRenderAttr("y2", chartH - chartPad.bottom)} stroke="rgba(255,255,255,0.06)" stroke-width="1"></line><line${ssrRenderAttr("x1", chartPad.left)}${ssrRenderAttr("y1", chartH - chartPad.bottom)}${ssrRenderAttr("x2", chartW - chartPad.right)}${ssrRenderAttr("y2", chartH - chartPad.bottom)} stroke="rgba(255,255,255,0.06)" stroke-width="1"></line><polygon${ssrRenderAttr("points", unref(areaPoints))} fill="rgba(96,165,250,0.12)"></polygon><polyline${ssrRenderAttr("points", unref(linePoints))} fill="none" stroke="#60a5fa" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></polyline><!--[-->`);
          ssrRenderList(unref(sessionsTrend), (d, i) => {
            _push(`<circle${ssrRenderAttr("cx", chartPad.left + i / Math.max(unref(sessionsTrend).length - 1, 1) * (chartW - chartPad.left - chartPad.right))}${ssrRenderAttr("cy", chartPad.top + (chartH - chartPad.top - chartPad.bottom) - d.count / Math.max(unref(yMax), 1) * (chartH - chartPad.top - chartPad.bottom))} r="3" fill="#60a5fa" stroke="#111" stroke-width="1.5"></circle>`);
          });
          _push(`<!--]--><!--[-->`);
          ssrRenderList(unref(xLabels), (lbl) => {
            _push(`<text${ssrRenderAttr("x", lbl.x)}${ssrRenderAttr("y", chartH - 4)} text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="10">${ssrInterpolate(lbl.label)}</text>`);
          });
          _push(`<!--]--><text${ssrRenderAttr("x", chartPad.left - 4)}${ssrRenderAttr("y", chartPad.top + 4)} text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="10">${ssrInterpolate(unref(yMax))}</text></svg>`);
        }
        _push(`</div><div class="rounded-2xl border border-white/8 p-5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="flex items-center justify-between mb-4"><h2 class="text-sm font-medium text-white">Top Intents</h2><span class="text-xs text-gray-600">${ssrInterpolate(unref(topIntents).length)} intents</span></div>`);
        if (!unref(topIntents).length) {
          _push(`<div class="h-28 flex items-center justify-center text-gray-600 text-sm"> Belum ada data </div>`);
        } else {
          _push(`<div class="space-y-2"><!--[-->`);
          ssrRenderList(unref(topIntents).slice(0, 6), (item, i) => {
            _push(`<div class="flex items-center gap-3"><span class="text-xs text-gray-500 w-32 truncate">${ssrInterpolate(item.intent)}</span><div class="flex-1 h-2 rounded-full overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)" })}"><div class="h-2 rounded-full transition-all duration-500" style="${ssrRenderStyle({
              width: `${item.count / unref(topIntents)[0].count * 100}%`,
              background: ["#60a5fa", "#a78bfa", "#34d399", "#fb923c", "#f472b6", "#facc15"][i % 6]
            })}"></div></div><span class="text-xs text-gray-400 w-8 text-right">${ssrInterpolate(item.count)}</span></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div></div><div class="rounded-2xl border border-white/8 mb-8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="px-5 py-4 border-b border-white/8 flex items-center justify-between"><div class="flex items-center gap-2"><span class="text-sm font-medium text-white">AI Token Usage</span><span class="text-xs px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-400">since last restart</span></div>`);
        if (unref(aiUsage)) {
          _push(`<span class="text-xs text-gray-500"> Total cost: <span class="text-yellow-400 font-medium">${ssrInterpolate(fmtCost(unref(aiUsage).total_cost_usd))}</span></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (!unref(aiUsage) || unref(aiUsage).claude.total_tokens === 0 && unref(aiUsage).openai.total_tokens === 0) {
          _push(`<div class="px-5 py-8 text-center text-gray-600 text-sm"> Belum ada pemakaian AI token </div>`);
        } else {
          _push(`<div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-5"><div class="${ssrRenderClass([unref(aiUsage).claude.total_tokens > 0 ? "border-purple-500/20 bg-purple-500/5" : "border-white/6 bg-white/1", "rounded-xl border p-4 space-y-3"])}"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style="${ssrRenderStyle({ "background": "rgba(168,85,247,0.2)", "color": "#c084fc" })}">C</div><span class="text-sm font-medium text-white">Claude (Anthropic)</span></div><span class="${ssrRenderClass([unref(aiUsage).claude.cost_usd > 0 ? "text-yellow-400" : "text-gray-600", "text-xs font-semibold"])}">${ssrInterpolate(fmtCost(unref(aiUsage).claude.cost_usd))}</span></div><div class="grid grid-cols-3 gap-3 text-center"><div><p class="text-lg font-bold text-purple-300">${ssrInterpolate(fmtTokens(unref(aiUsage).claude.input_tokens))}</p><p class="text-[10px] text-gray-500 mt-0.5">Input tokens</p></div><div><p class="text-lg font-bold text-purple-300">${ssrInterpolate(fmtTokens(unref(aiUsage).claude.output_tokens))}</p><p class="text-[10px] text-gray-500 mt-0.5">Output tokens</p></div><div><p class="text-lg font-bold text-white">${ssrInterpolate(fmtTokens(unref(aiUsage).claude.total_tokens))}</p><p class="text-[10px] text-gray-500 mt-0.5">Total</p></div></div>`);
          if (unref(aiUsage).claude.total_tokens > 0) {
            _push(`<div><div class="h-1.5 rounded-full overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)" })}"><div class="h-1.5 rounded-full" style="${ssrRenderStyle([{ "background": "linear-gradient(90deg, #a855f7, #7c3aed)" }, { width: `${unref(aiUsage).claude.input_tokens / unref(aiUsage).claude.total_tokens * 100}%` }])}"></div></div><div class="flex justify-between text-[10px] text-gray-600 mt-1"><span>Input ${ssrInterpolate((unref(aiUsage).claude.input_tokens / unref(aiUsage).claude.total_tokens * 100).toFixed(0))}%</span><span>Output ${ssrInterpolate((unref(aiUsage).claude.output_tokens / unref(aiUsage).claude.total_tokens * 100).toFixed(0))}%</span></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="text-[10px] text-gray-600">Pricing: $3/1M input \xB7 $15/1M output</p></div><div class="${ssrRenderClass([unref(aiUsage).openai.total_tokens > 0 ? "border-green-500/20 bg-green-500/5" : "border-white/6 bg-white/1", "rounded-xl border p-4 space-y-3"])}"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style="${ssrRenderStyle({ "background": "rgba(74,222,128,0.15)", "color": "#4ade80" })}">G</div><span class="text-sm font-medium text-white">GPT (OpenAI)</span></div><span class="${ssrRenderClass([unref(aiUsage).openai.cost_usd > 0 ? "text-yellow-400" : "text-gray-600", "text-xs font-semibold"])}">${ssrInterpolate(fmtCost(unref(aiUsage).openai.cost_usd))}</span></div><div class="grid grid-cols-3 gap-3 text-center"><div><p class="text-lg font-bold text-green-300">${ssrInterpolate(fmtTokens(unref(aiUsage).openai.input_tokens))}</p><p class="text-[10px] text-gray-500 mt-0.5">Input tokens</p></div><div><p class="text-lg font-bold text-green-300">${ssrInterpolate(fmtTokens(unref(aiUsage).openai.output_tokens))}</p><p class="text-[10px] text-gray-500 mt-0.5">Output tokens</p></div><div><p class="text-lg font-bold text-white">${ssrInterpolate(fmtTokens(unref(aiUsage).openai.total_tokens))}</p><p class="text-[10px] text-gray-500 mt-0.5">Total</p></div></div>`);
          if (unref(aiUsage).openai.total_tokens > 0) {
            _push(`<div><div class="h-1.5 rounded-full overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)" })}"><div class="h-1.5 rounded-full" style="${ssrRenderStyle([{ "background": "linear-gradient(90deg, #4ade80, #16a34a)" }, { width: `${unref(aiUsage).openai.input_tokens / unref(aiUsage).openai.total_tokens * 100}%` }])}"></div></div><div class="flex justify-between text-[10px] text-gray-600 mt-1"><span>Input ${ssrInterpolate((unref(aiUsage).openai.input_tokens / unref(aiUsage).openai.total_tokens * 100).toFixed(0))}%</span><span>Output ${ssrInterpolate((unref(aiUsage).openai.output_tokens / unref(aiUsage).openai.total_tokens * 100).toFixed(0))}%</span></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="text-[10px] text-gray-600">Pricing: $5/1M input \xB7 $15/1M output</p></div></div>`);
        }
        if (unref(aiUsage) && unref(aiUsage).total_errors > 0) {
          _push(`<div class="px-5 py-2.5 border-t border-white/5 flex items-center gap-2 text-xs text-red-400"><svg width="12" height="12" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"></circle><path d="M10 6v4M10 13v.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg> ${ssrInterpolate(unref(aiUsage).total_errors)} AI request error(s) since last restart </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"><!--[-->`);
        ssrRenderList(quickLinks, (l) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: l.to,
            to: l.to,
            class: "flex items-center gap-3 rounded-xl border border-white/8 px-4 py-3 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-colors",
            style: { "background": "rgba(255,255,255,0.02)" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2;
              if (_push2) {
                _push2(`<span class="w-4 h-4 shrink-0 opacity-70"${_scopeId}>${(_a2 = l.icon) != null ? _a2 : ""}</span> ${ssrInterpolate(l.label)}`);
              } else {
                return [
                  createVNode("span", {
                    class: "w-4 h-4 shrink-0 opacity-70",
                    innerHTML: l.icon
                  }, null, 8, ["innerHTML"]),
                  createTextVNode(" " + toDisplayString(l.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><div class="rounded-2xl border border-white/8 overflow-hidden" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.02)" })}"><div class="px-5 py-4 border-b border-white/8 flex items-center justify-between"><h2 class="text-white text-sm font-medium">Sessions Terbaru</h2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/sessions",
          class: "text-xs text-blue-400 hover:text-blue-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Lihat semua \u2192`);
            } else {
              return [
                createTextVNode("Lihat semua \u2192")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (unref(recentSessions).length) {
          _push(`<div class="divide-y divide-white/5"><!--[-->`);
          ssrRenderList(unref(recentSessions), (s) => {
            var _a2;
            _push(`<div class="px-5 py-3 flex items-center justify-between hover:bg-white/3 transition-colors"><div><p class="text-sm text-white">${ssrInterpolate(s.visitor_name || ((_a2 = s.visitor_id) == null ? void 0 : _a2.slice(0, 8)) + "...")}</p><p class="text-xs text-gray-500">${ssrInterpolate(s.source)} \xB7 ${ssrInterpolate(new Date(s.created_at).toLocaleString("id"))}</p></div><div class="flex items-center gap-3"><span class="${ssrRenderClass([s.status === "active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400", "text-xs px-2 py-0.5 rounded-full"])}">${ssrInterpolate(s.status)}</span>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/admin/sessions/${s.id}`,
              class: "text-xs text-blue-400 hover:text-blue-300"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Detail`);
                } else {
                  return [
                    createTextVNode("Detail")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="px-5 py-10 text-center text-gray-600 text-sm">Belum ada sessions</div>`);
        }
        _push(`</div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-qYfqC5p6.mjs.map
