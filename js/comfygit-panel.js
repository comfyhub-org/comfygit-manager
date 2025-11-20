import { app as x } from "../../scripts/app.js";
import { defineComponent as b, createElementBlock as l, openBlock as c, createElementVNode as t, toDisplayString as v, createCommentVNode as E, ref as g, computed as A, withDirectives as H, withKeys as I, vModelText as O, normalizeClass as N, Fragment as P, renderList as j, onMounted as R, createVNode as C, createApp as T, h as k } from "vue";
const U = { class: "status-section" }, V = { class: "status-grid" }, z = { class: "status-column" }, B = { class: "status-item" }, D = { class: "count new" }, M = { class: "status-item" }, F = { class: "count modified" }, J = { class: "status-item" }, K = { class: "count deleted" }, q = { class: "status-item" }, Q = { class: "count synced" }, W = { class: "status-column" }, X = {
  key: 0,
  class: "status-item warn"
}, Y = {
  key: 1,
  class: "status-item ok"
}, Z = {
  key: 2,
  class: "status-item warn"
}, tt = {
  key: 3,
  class: "status-item warn"
}, et = /* @__PURE__ */ b({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(s) {
    return (r, e) => (c(), l("div", U, [
      e[8] || (e[8] = t("h3", { class: "section-title" }, "Status", -1)),
      t("div", V, [
        t("div", z, [
          t("div", B, [
            t("span", D, v(s.status.workflows.new.length), 1),
            e[0] || (e[0] = t("span", null, "new", -1))
          ]),
          t("div", M, [
            t("span", F, v(s.status.workflows.modified.length), 1),
            e[1] || (e[1] = t("span", null, "modified", -1))
          ]),
          t("div", J, [
            t("span", K, v(s.status.workflows.deleted.length), 1),
            e[2] || (e[2] = t("span", null, "deleted", -1))
          ]),
          t("div", q, [
            t("span", Q, v(s.status.workflows.synced.length), 1),
            e[3] || (e[3] = t("span", null, "synced", -1))
          ])
        ]),
        t("div", W, [
          s.status.has_changes ? (c(), l("div", X, [...e[4] || (e[4] = [
            t("span", { class: "icon" }, "⚠", -1),
            t("span", null, "Uncommitted changes", -1)
          ])])) : (c(), l("div", Y, [...e[5] || (e[5] = [
            t("span", { class: "icon" }, "✓", -1),
            t("span", null, "All committed", -1)
          ])])),
          s.status.missing_models_count > 0 ? (c(), l("div", Z, [
            e[6] || (e[6] = t("span", { class: "icon" }, "⚠", -1)),
            t("span", null, v(s.status.missing_models_count) + " missing model(s)", 1)
          ])) : E("", !0),
          s.status.comparison.is_synced ? E("", !0) : (c(), l("div", tt, [...e[7] || (e[7] = [
            t("span", { class: "icon" }, "⚠", -1),
            t("span", null, "Not synced", -1)
          ])]))
        ])
      ])
    ]));
  }
}), w = (s, r) => {
  const e = s.__vccOpts || s;
  for (const [a, i] of r)
    e[a] = i;
  return e;
}, st = /* @__PURE__ */ w(et, [["__scopeId", "data-v-30464bdd"]]);
function L() {
  const s = g(!1), r = g(null);
  async function e(n, u) {
    var o;
    if (!((o = window.app) != null && o.api))
      throw new Error("ComfyUI API not available");
    const h = await window.app.api.fetchApi(n, u);
    if (!h.ok) {
      const d = await h.json().catch(() => ({}));
      throw new Error(d.error || d.message || `Request failed: ${h.status}`);
    }
    return h.json();
  }
  async function a() {
    return e("/v2/comfygit/status");
  }
  async function i(n, u = !1) {
    return e("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: n, allow_issues: u })
    });
  }
  async function m(n = 10, u = 0) {
    return e(`/v2/comfygit/log?limit=${n}&offset=${u}`);
  }
  async function p(n) {
    return e("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: n })
    });
  }
  return {
    isLoading: s,
    error: r,
    getStatus: a,
    commit: i,
    getHistory: m,
    exportEnv: p
  };
}
const ot = { class: "commit-section" }, nt = { class: "commit-card" }, at = ["placeholder", "disabled"], it = ["disabled"], lt = /* @__PURE__ */ b({
  __name: "CommitSection",
  props: {
    status: {}
  },
  emits: ["committed"],
  setup(s, { emit: r }) {
    const e = s, a = r, { commit: i } = L(), m = g(""), p = g(!1), n = g(null), u = A(() => {
      const o = e.status.workflows;
      return o.new.length > 0 || o.modified.length > 0 || o.deleted.length > 0 || e.status.has_changes;
    });
    async function h() {
      var o, d, _;
      if (!(!u.value || !m.value.trim() || p.value)) {
        p.value = !0, n.value = null;
        try {
          const y = await i(m.value.trim());
          y.status === "success" ? (n.value = {
            type: "success",
            message: `Committed: ${((o = y.summary) == null ? void 0 : o.new) || 0} new, ${((d = y.summary) == null ? void 0 : d.modified) || 0} modified, ${((_ = y.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, m.value = "", a("committed")) : y.status === "no_changes" ? n.value = { type: "error", message: "No changes to commit" } : n.value = { type: "error", message: y.message || "Commit failed" };
        } catch (y) {
          n.value = { type: "error", message: y instanceof Error ? y.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (o, d) => (c(), l("div", ot, [
      d[1] || (d[1] = t("h3", { class: "section-title" }, "Commit", -1)),
      t("div", nt, [
        H(t("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (_) => m.value = _),
          type: "text",
          class: "commit-input",
          placeholder: u.value ? "Enter commit message..." : "No changes to commit",
          disabled: !u.value || p.value,
          onKeyup: I(h, ["enter"])
        }, null, 40, at), [
          [O, m.value]
        ]),
        t("button", {
          class: "commit-btn",
          disabled: !u.value || !m.value.trim() || p.value,
          onClick: h
        }, v(p.value ? "Committing..." : "Commit"), 9, it),
        n.value ? (c(), l("div", {
          key: 0,
          class: N(["result", n.value.type])
        }, v(n.value.message), 3)) : E("", !0)
      ])
    ]));
  }
}), ct = /* @__PURE__ */ w(lt, [["__scopeId", "data-v-f1eb73d8"]]), rt = { class: "history-section" }, dt = { class: "history-card" }, ut = {
  key: 0,
  class: "empty"
}, mt = {
  key: 1,
  class: "commit-list"
}, pt = { class: "commit-hash" }, vt = { class: "commit-message" }, ft = { class: "commit-date" }, ht = /* @__PURE__ */ b({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  setup(s) {
    return (r, e) => (c(), l("div", rt, [
      e[0] || (e[0] = t("h3", { class: "section-title" }, "History", -1)),
      t("div", dt, [
        s.commits.length === 0 ? (c(), l("div", ut, " No commits yet ")) : (c(), l("div", mt, [
          (c(!0), l(P, null, j(s.commits, (a) => {
            var i;
            return c(), l("div", {
              key: a.hash,
              class: "commit-item"
            }, [
              t("span", pt, v(a.short_hash || ((i = a.hash) == null ? void 0 : i.slice(0, 7))), 1),
              t("span", vt, v(a.message), 1),
              t("span", ft, v(a.date_relative || a.relative_date), 1)
            ]);
          }), 128))
        ]))
      ])
    ]));
  }
}), yt = /* @__PURE__ */ w(ht, [["__scopeId", "data-v-c8dfb066"]]), gt = { class: "comfygit-panel" }, _t = { class: "panel-header" }, bt = { class: "panel-subtitle" }, wt = { class: "panel-content" }, xt = {
  key: 0,
  class: "error-message"
}, Ct = {
  key: 1,
  class: "loading"
}, kt = { class: "panel-footer" }, $t = ["disabled"], Et = /* @__PURE__ */ b({
  __name: "ComfyGitPanel",
  setup(s) {
    const { getStatus: r, getHistory: e, exportEnv: a } = L(), i = g(null), m = g([]), p = g(!1), n = g(null);
    async function u() {
      p.value = !0, n.value = null;
      try {
        const [o, d] = await Promise.all([
          r(),
          e()
        ]);
        i.value = o, m.value = d.commits;
      } catch (o) {
        n.value = o instanceof Error ? o.message : "Failed to load status", i.value = null, m.value = [];
      } finally {
        p.value = !1;
      }
    }
    async function h() {
      try {
        const o = await a();
        o.status === "success" ? alert(`Export successful!

Saved to: ${o.path}

Models without sources: ${o.models_without_sources}`) : alert(`Export failed: ${o.message}`);
      } catch (o) {
        alert(`Export error: ${o instanceof Error ? o.message : "Unknown error"}`);
      }
    }
    return R(u), (o, d) => (c(), l("div", gt, [
      t("div", _t, [
        t("div", null, [
          d[0] || (d[0] = t("h2", { class: "panel-title" }, "ComfyGit Control Panel", -1)),
          t("div", bt, v(i.value ? `${i.value.environment} (${i.value.branch || "detached"})` : "Loading..."), 1)
        ]),
        t("button", {
          class: N(["refresh-btn", { spinning: p.value }]),
          onClick: u,
          title: "Refresh"
        }, " ↻ ", 2)
      ]),
      t("div", wt, [
        n.value ? (c(), l("div", xt, v(n.value), 1)) : i.value ? (c(), l(P, { key: 2 }, [
          C(st, { status: i.value }, null, 8, ["status"]),
          C(ct, {
            status: i.value,
            onCommitted: u
          }, null, 8, ["status"]),
          C(yt, { commits: m.value }, null, 8, ["commits"])
        ], 64)) : (c(), l("div", Ct, " Loading status... "))
      ]),
      t("div", kt, [
        t("button", {
          class: "export-btn",
          onClick: h,
          disabled: !i.value
        }, " Export Environment ", 8, $t)
      ])
    ]));
  }
}), St = /* @__PURE__ */ w(Et, [["__scopeId", "data-v-9e127705"]]), S = document.createElement("link");
S.rel = "stylesheet";
S.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(S);
let f = null;
function Nt() {
  f && f.remove(), f = document.createElement("div"), f.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", f.appendChild(s), f.addEventListener("click", (a) => {
    a.target === f && $();
  });
  const r = (a) => {
    a.key === "Escape" && ($(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), T({
    render: () => k("div", { class: "comfygit-panel-wrapper" }, [
      k(St),
      k("button", {
        class: "panel-close-btn",
        onClick: $
      }, "×")
    ])
  }).mount(s), document.body.appendChild(f);
}
function $() {
  f && (f.remove(), f = null);
}
const G = document.createElement("style");
G.textContent = `
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
    width: 600px;
    max-width: 90vw;
    max-height: 80vh;
    display: flex;
  }

  .comfygit-panel-wrapper {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    background: var(--comfy-menu-bg, #353535);
    border: 1px solid var(--border-color, #4a4a4a);
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
  }

  .panel-close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    color: var(--input-text, #ddd);
    font-size: 24px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    line-height: 1;
  }

  .panel-close-btn:hover {
    background: var(--comfy-input-bg, #222);
  }

  .comfygit-toolbar-btn {
    background: #3b82f6 !important;
    color: white !important;
    border: none !important;
  }

  .comfygit-toolbar-btn:hover {
    background: #2563eb !important;
  }
`;
document.head.appendChild(G);
x.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var r, e;
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-toolbar-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = () => {
      Nt();
    }, (e = (r = x.menu) == null ? void 0 : r.settingsGroup) != null && e.element && (x.menu.settingsGroup.element.before(s), console.log("[ComfyGit] Control Panel button added to toolbar"));
  }
});
