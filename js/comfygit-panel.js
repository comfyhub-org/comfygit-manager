import { app as I } from "../../scripts/app.js";
import { defineComponent as P, computed as S, createElementBlock as o, openBlock as a, createElementVNode as t, createCommentVNode as f, toDisplayString as u, Fragment as z, renderList as F, ref as _, onMounted as K, normalizeClass as T, createVNode as U, createTextVNode as q, withDirectives as J, withKeys as B, withModifiers as V, vModelText as W, createApp as O, h as R } from "vue";
const Y = { class: "status-section" }, Q = { class: "status-grid" }, X = { class: "status-column" }, Z = {
  key: 0,
  class: "status-item"
}, tt = { class: "count new" }, et = {
  key: 1,
  class: "status-item"
}, st = { class: "count modified" }, nt = {
  key: 2,
  class: "status-item"
}, ot = { class: "count deleted" }, at = { class: "status-item synced-item" }, it = { class: "count synced" }, lt = { class: "status-column" }, dt = {
  key: 0,
  class: "status-item"
}, ct = { class: "count new" }, rt = {
  key: 1,
  class: "status-item"
}, ut = { class: "count deleted" }, mt = {
  key: 2,
  class: "status-item"
}, gt = {
  key: 3,
  class: "status-item ok"
}, pt = {
  key: 0,
  class: "warning-box"
}, ft = {
  key: 1,
  class: "warning-box error"
}, ht = /* @__PURE__ */ P({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(e) {
    const l = e, i = S(() => {
      const n = l.status.git_changes;
      return n.nodes_added.length > 0 || n.nodes_removed.length > 0 || n.workflow_changes || n.has_other_changes;
    });
    return (n, s) => (a(), o("div", Y, [
      t("div", Q, [
        t("div", X, [
          s[8] || (s[8] = t("h4", { class: "column-title" }, "Workflows", -1)),
          e.status.workflows.new.length ? (a(), o("div", Z, [
            s[0] || (s[0] = t("span", { class: "icon" }, "●", -1)),
            t("span", tt, u(e.status.workflows.new.length), 1),
            s[1] || (s[1] = t("span", { class: "label" }, "new", -1))
          ])) : f("", !0),
          e.status.workflows.modified.length ? (a(), o("div", et, [
            s[2] || (s[2] = t("span", { class: "icon" }, "●", -1)),
            t("span", st, u(e.status.workflows.modified.length), 1),
            s[3] || (s[3] = t("span", { class: "label" }, "modified", -1))
          ])) : f("", !0),
          e.status.workflows.deleted.length ? (a(), o("div", nt, [
            s[4] || (s[4] = t("span", { class: "icon" }, "●", -1)),
            t("span", ot, u(e.status.workflows.deleted.length), 1),
            s[5] || (s[5] = t("span", { class: "label" }, "deleted", -1))
          ])) : f("", !0),
          t("div", at, [
            s[6] || (s[6] = t("span", { class: "icon synced" }, "✓", -1)),
            t("span", it, u(e.status.workflows.synced.length), 1),
            s[7] || (s[7] = t("span", { class: "label" }, "synced", -1))
          ])
        ]),
        t("div", lt, [
          s[15] || (s[15] = t("h4", { class: "column-title" }, "Git Changes", -1)),
          e.status.git_changes.nodes_added.length ? (a(), o("div", dt, [
            s[9] || (s[9] = t("span", { class: "icon" }, "●", -1)),
            t("span", ct, u(e.status.git_changes.nodes_added.length), 1),
            s[10] || (s[10] = t("span", { class: "label" }, "node added", -1))
          ])) : f("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), o("div", rt, [
            s[11] || (s[11] = t("span", { class: "icon" }, "●", -1)),
            t("span", ut, u(e.status.git_changes.nodes_removed.length), 1),
            s[12] || (s[12] = t("span", { class: "label" }, "node removed", -1))
          ])) : f("", !0),
          e.status.git_changes.workflow_changes ? (a(), o("div", mt, [...s[13] || (s[13] = [
            t("span", { class: "icon" }, "●", -1),
            t("span", { class: "count modified" }, "●", -1),
            t("span", { class: "label" }, "workflows changed", -1)
          ])])) : f("", !0),
          i.value ? f("", !0) : (a(), o("div", gt, [...s[14] || (s[14] = [
            t("span", { class: "icon" }, "✓", -1),
            t("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      e.status.missing_models_count > 0 ? (a(), o("div", pt, [
        s[16] || (s[16] = t("span", { class: "warning-icon" }, "⚠", -1)),
        t("span", null, u(e.status.missing_models_count) + " missing model(s)", 1)
      ])) : f("", !0),
      e.status.comparison.is_synced ? f("", !0) : (a(), o("div", ft, [...s[17] || (s[17] = [
        t("span", { class: "warning-icon" }, "⚠", -1),
        t("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), G = (e, l) => {
  const i = e.__vccOpts || e;
  for (const [n, s] of l)
    i[n] = s;
  return i;
}, vt = /* @__PURE__ */ G(ht, [["__scopeId", "data-v-30ea4f72"]]), yt = { class: "history-section" }, wt = { class: "history-card" }, bt = {
  key: 0,
  class: "empty"
}, kt = {
  key: 1,
  class: "commit-list"
}, _t = { class: "commit-hash" }, Ct = { class: "commit-message" }, xt = { class: "commit-date" }, $t = /* @__PURE__ */ P({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  setup(e) {
    return (l, i) => (a(), o("div", yt, [
      i[0] || (i[0] = t("div", { class: "section-header" }, [
        t("h4", { class: "section-title" }, "Recent Commits")
      ], -1)),
      t("div", wt, [
        e.commits.length === 0 ? (a(), o("div", bt, " No commits yet ")) : (a(), o("div", kt, [
          (a(!0), o(z, null, F(e.commits, (n) => {
            var s;
            return a(), o("div", {
              key: n.hash,
              class: "commit-item"
            }, [
              t("span", _t, u(n.short_hash || ((s = n.hash) == null ? void 0 : s.slice(0, 7))), 1),
              t("span", Ct, u(n.message), 1),
              t("span", xt, u(n.date_relative || n.relative_date), 1)
            ]);
          }), 128))
        ]))
      ])
    ]));
  }
}), Et = /* @__PURE__ */ G($t, [["__scopeId", "data-v-8fb2bac4"]]);
function j() {
  const e = _(!1), l = _(null);
  async function i(r, g) {
    var p;
    if (!((p = window.app) != null && p.api))
      throw new Error("ComfyUI API not available");
    const v = await window.app.api.fetchApi(r, g);
    if (!v.ok) {
      const d = await v.json().catch(() => ({}));
      throw new Error(d.error || d.message || `Request failed: ${v.status}`);
    }
    return v.json();
  }
  async function n() {
    return i("/v2/comfygit/status");
  }
  async function s(r, g = !1) {
    return i("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: r, allow_issues: g })
    });
  }
  async function k(r = 10, g = 0) {
    return i(`/v2/comfygit/log?limit=${r}&offset=${g}`);
  }
  async function c(r) {
    return i("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: r })
    });
  }
  return {
    isLoading: e,
    error: l,
    getStatus: n,
    commit: s,
    getHistory: k,
    exportEnv: c
  };
}
const Lt = { class: "comfygit-panel" }, St = { class: "panel-header" }, Nt = { class: "header-left" }, Pt = {
  key: 0,
  class: "header-info"
}, Gt = { class: "env-name" }, It = { class: "branch-name" }, Ht = ["title"], Tt = {
  key: 1,
  class: "header-info loading-text"
}, At = { class: "header-actions" }, Mt = { class: "panel-content" }, Ut = {
  key: 0,
  class: "error-message"
}, Bt = {
  key: 1,
  class: "loading"
}, Vt = { class: "panel-footer" }, zt = ["disabled"], Ot = /* @__PURE__ */ P({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const i = l, { getStatus: n, getHistory: s, exportEnv: k } = j(), c = _(null), r = _([]), g = _(!1), v = _(null), p = S(() => {
      if (!c.value) return "neutral";
      const m = c.value.workflows, h = m.new.length > 0 || m.modified.length > 0 || m.deleted.length > 0 || c.value.has_changes;
      return c.value.comparison.is_synced ? h ? "warning" : "success" : "error";
    }), d = S(() => c.value ? p.value === "success" ? "All synced" : p.value === "warning" ? "Uncommitted changes" : p.value === "error" ? "Not synced" : "" : "");
    async function x() {
      g.value = !0, v.value = null;
      try {
        const [m, h] = await Promise.all([
          n(),
          s()
        ]);
        c.value = m, r.value = h.commits, i("statusUpdate", m);
      } catch (m) {
        v.value = m instanceof Error ? m.message : "Failed to load status", c.value = null, r.value = [];
      } finally {
        g.value = !1;
      }
    }
    async function w() {
      try {
        const m = await k();
        m.status === "success" ? alert(`Export successful!

Saved to: ${m.path}

Models without sources: ${m.models_without_sources}`) : alert(`Export failed: ${m.message}`);
      } catch (m) {
        alert(`Export error: ${m instanceof Error ? m.message : "Unknown error"}`);
      }
    }
    return K(x), (m, h) => (a(), o("div", Lt, [
      t("div", St, [
        t("div", Nt, [
          h[1] || (h[1] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
          c.value ? (a(), o("div", Pt, [
            t("span", Gt, u(c.value.environment), 1),
            t("span", It, "(" + u(c.value.branch || "detached") + ")", 1),
            t("span", {
              class: T(["status-dot", p.value]),
              title: d.value
            }, null, 10, Ht)
          ])) : (a(), o("div", Tt, "Loading..."))
        ]),
        t("div", At, [
          t("button", {
            class: T(["icon-btn", { spinning: g.value }]),
            onClick: x,
            title: "Refresh"
          }, [...h[2] || (h[2] = [
            t("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
            ], -1)
          ])], 2),
          t("button", {
            class: "icon-btn",
            onClick: h[0] || (h[0] = (de) => i("close")),
            title: "Close"
          }, [...h[3] || (h[3] = [
            t("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])])
        ])
      ]),
      t("div", Mt, [
        v.value ? (a(), o("div", Ut, u(v.value), 1)) : c.value ? (a(), o(z, { key: 2 }, [
          U(vt, { status: c.value }, null, 8, ["status"]),
          U(Et, { commits: r.value }, null, 8, ["commits"])
        ], 64)) : (a(), o("div", Bt, " Loading status... "))
      ]),
      t("div", Vt, [
        t("button", {
          class: "export-btn",
          onClick: w,
          disabled: !c.value
        }, [...h[4] || (h[4] = [
          t("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
            t("path", { d: "M14 14H2v-2h12v2z" })
          ], -1),
          q(" Export ", -1)
        ])], 8, zt)
      ])
    ]));
  }
}), Rt = /* @__PURE__ */ G(Ot, [["__scopeId", "data-v-471f9719"]]), jt = { class: "commit-popover" }, Dt = { class: "popover-content" }, Ft = {
  key: 0,
  class: "changes-summary"
}, Kt = {
  key: 0,
  class: "change-item"
}, qt = {
  key: 1,
  class: "change-item"
}, Jt = {
  key: 2,
  class: "change-item"
}, Wt = {
  key: 3,
  class: "change-item"
}, Yt = {
  key: 4,
  class: "change-item"
}, Qt = {
  key: 1,
  class: "no-changes"
}, Xt = {
  key: 2,
  class: "loading"
}, Zt = { class: "message-section" }, te = ["placeholder", "disabled", "onKeydown"], ee = { class: "popover-footer" }, se = ["disabled"], ne = /* @__PURE__ */ P({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const i = e, n = l, { commit: s } = j(), k = _(""), c = _(!1), r = _(null), g = S(() => {
      if (!i.status) return !1;
      const p = i.status.workflows;
      return p.new.length > 0 || p.modified.length > 0 || p.deleted.length > 0 || i.status.has_changes;
    });
    async function v() {
      var p, d, x;
      if (!(!g.value || !k.value.trim() || c.value)) {
        c.value = !0, r.value = null;
        try {
          const w = await s(k.value.trim());
          w.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((p = w.summary) == null ? void 0 : p.new) || 0} new, ${((d = w.summary) == null ? void 0 : d.modified) || 0} modified, ${((x = w.summary) == null ? void 0 : x.deleted) || 0} deleted`
          }, k.value = "", setTimeout(() => n("committed"), 1e3)) : w.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : r.value = { type: "error", message: w.message || "Commit failed" };
        } catch (w) {
          r.value = { type: "error", message: w instanceof Error ? w.message : "Commit failed" };
        } finally {
          c.value = !1;
        }
      }
    }
    return (p, d) => (a(), o("div", jt, [
      d[7] || (d[7] = t("div", { class: "popover-header" }, [
        t("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      t("div", Dt, [
        e.status && g.value ? (a(), o("div", Ft, [
          e.status.workflows.new.length ? (a(), o("div", Kt, [
            d[2] || (d[2] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, u(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : f("", !0),
          e.status.workflows.modified.length ? (a(), o("div", qt, [
            d[3] || (d[3] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, u(e.status.workflows.modified.length) + " modified", 1)
          ])) : f("", !0),
          e.status.workflows.deleted.length ? (a(), o("div", Jt, [
            d[4] || (d[4] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, u(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : f("", !0),
          e.status.git_changes.nodes_added.length ? (a(), o("div", Wt, [
            d[5] || (d[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, u(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : f("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), o("div", Yt, [
            d[6] || (d[6] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, u(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : f("", !0)
        ])) : e.status ? (a(), o("div", Qt, " No changes to commit ")) : (a(), o("div", Xt, " Loading... ")),
        t("div", Zt, [
          J(t("textarea", {
            "onUpdate:modelValue": d[0] || (d[0] = (x) => k.value = x),
            class: "commit-input",
            placeholder: g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || c.value,
            rows: "3",
            onKeydown: [
              B(V(v, ["ctrl"]), ["enter"]),
              B(V(v, ["meta"]), ["enter"])
            ]
          }, null, 40, te), [
            [W, k.value]
          ])
        ]),
        r.value ? (a(), o("div", {
          key: 3,
          class: T(["result", r.value.type])
        }, u(r.value.message), 3)) : f("", !0)
      ]),
      t("div", ee, [
        t("button", {
          class: "cancel-btn",
          onClick: d[1] || (d[1] = (x) => n("close"))
        }, "Cancel"),
        t("button", {
          class: "commit-btn",
          disabled: !g.value || !k.value.trim() || c.value,
          onClick: v
        }, u(c.value ? "Committing..." : "Commit"), 9, se)
      ])
    ]));
  }
}), oe = /* @__PURE__ */ G(ne, [["__scopeId", "data-v-bf211fb8"]]), M = document.createElement("link");
M.rel = "stylesheet";
M.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(M);
let b = null, y = null, L = null;
const $ = _(null);
async function A() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && ($.value = await l.json());
  } catch {
  }
}
function ae() {
  if (!$.value) return !1;
  const e = $.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || $.value.has_changes;
}
function ie() {
  b && b.remove(), b = document.createElement("div"), b.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", b.appendChild(e), b.addEventListener("click", (n) => {
    n.target === b && H();
  });
  const l = (n) => {
    n.key === "Escape" && (H(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), O({
    render: () => R(Rt, {
      onClose: H,
      onStatusUpdate: (n) => {
        $.value = n, N();
      }
    })
  }).mount(e), document.body.appendChild(b);
}
function H() {
  b && (b.remove(), b = null);
}
function le(e) {
  E(), y = document.createElement("div"), y.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  y.style.position = "fixed", y.style.top = `${l.bottom + 8}px`, y.style.right = `${window.innerWidth - l.right}px`, y.style.zIndex = "10001";
  const i = (s) => {
    y && !y.contains(s.target) && s.target !== e && (E(), document.removeEventListener("mousedown", i));
  };
  setTimeout(() => document.addEventListener("mousedown", i), 0);
  const n = (s) => {
    s.key === "Escape" && (E(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), L = O({
    render: () => R(oe, {
      status: $.value,
      onClose: E,
      onCommitted: () => {
        E(), A().then(N);
      }
    })
  }), L.mount(y), document.body.appendChild(y);
}
function E() {
  L && (L.unmount(), L = null), y && (y.remove(), y = null);
}
let C = null;
function N() {
  if (!C) return;
  const e = C.querySelector(".commit-indicator");
  e && (e.style.display = ae() ? "block" : "none");
}
const D = document.createElement("style");
D.textContent = `
  .comfygit-panel-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comfygit-panel-container {
    width: 580px;
    max-width: 90vw;
    max-height: 80vh;
    display: flex;
  }

  .comfygit-btn-group {
    display: flex;
    gap: 0;
    margin-right: 4px;
  }

  .comfygit-panel-btn {
    background: linear-gradient(180deg, #fb923c 0%, #ea580c 100%) !important;
    color: white !important;
    border: none !important;
    border-radius: 4px 0 0 4px !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .comfygit-panel-btn:hover {
    background: linear-gradient(180deg, #f97316 0%, #c2410c 100%) !important;
  }

  .comfygit-commit-btn {
    background: linear-gradient(180deg, #525252 0%, #3f3f3f 100%) !important;
    color: white !important;
    border: none !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
    position: relative;
  }

  .comfygit-commit-btn:hover {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
  }

  .commit-indicator {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 8px;
    height: 8px;
    background: #fbbf24;
    border-radius: 50%;
    display: none;
  }

  .comfygit-commit-popover-container {
    animation: popoverFadeIn 0.15s ease-out;
  }

  @keyframes popoverFadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(D);
I.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var i, n;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = ie, C = document.createElement("button"), C.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", C.innerHTML = 'Commit <span class="commit-indicator"></span>', C.title = "Quick Commit", C.onclick = () => le(C), e.appendChild(l), e.appendChild(C), (n = (i = I.menu) == null ? void 0 : i.settingsGroup) != null && n.element && (I.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await A(), N(), setInterval(async () => {
      await A(), N();
    }, 3e4);
  }
});
