import { app as q } from "../../scripts/app.js";
import { defineComponent as N, computed as R, createElementBlock as c, openBlock as r, createElementVNode as t, createCommentVNode as b, toDisplayString as g, ref as k, nextTick as _t, withDirectives as it, withKeys as W, vModelText as lt, Fragment as I, renderList as T, normalizeClass as O, withModifiers as j, onMounted as gt, createTextVNode as dt, createBlock as nt, createVNode as K, TransitionGroup as St, withCtx as Lt, createApp as mt, h as ft } from "vue";
const Bt = { class: "status-section" }, It = { class: "status-grid" }, Tt = { class: "status-column" }, Et = {
  key: 0,
  class: "status-item"
}, Mt = { class: "count new" }, Pt = {
  key: 1,
  class: "status-item"
}, Nt = { class: "count modified" }, At = {
  key: 2,
  class: "status-item"
}, Dt = { class: "count deleted" }, Ut = { class: "status-item synced-item" }, Gt = { class: "count synced" }, Ot = { class: "status-column" }, Ht = {
  key: 0,
  class: "status-item"
}, Rt = { class: "count new" }, Vt = {
  key: 1,
  class: "status-item"
}, Yt = { class: "count deleted" }, jt = {
  key: 2,
  class: "status-item"
}, Ft = {
  key: 3,
  class: "status-item ok"
}, Jt = {
  key: 0,
  class: "warning-box"
}, Kt = {
  key: 1,
  class: "warning-box error"
}, Wt = /* @__PURE__ */ N({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(o) {
    const d = o, n = R(() => {
      const e = d.status.git_changes;
      return e.nodes_added.length > 0 || e.nodes_removed.length > 0 || e.workflow_changes || e.has_other_changes;
    });
    return (e, a) => (r(), c("div", Bt, [
      a[18] || (a[18] = t("h3", { class: "section-title" }, "Status", -1)),
      t("div", It, [
        t("div", Tt, [
          a[8] || (a[8] = t("h4", { class: "column-title" }, "Workflows", -1)),
          o.status.workflows.new.length ? (r(), c("div", Et, [
            a[0] || (a[0] = t("span", { class: "icon" }, "●", -1)),
            t("span", Mt, g(o.status.workflows.new.length), 1),
            a[1] || (a[1] = t("span", { class: "label" }, "new", -1))
          ])) : b("", !0),
          o.status.workflows.modified.length ? (r(), c("div", Pt, [
            a[2] || (a[2] = t("span", { class: "icon" }, "●", -1)),
            t("span", Nt, g(o.status.workflows.modified.length), 1),
            a[3] || (a[3] = t("span", { class: "label" }, "modified", -1))
          ])) : b("", !0),
          o.status.workflows.deleted.length ? (r(), c("div", At, [
            a[4] || (a[4] = t("span", { class: "icon" }, "●", -1)),
            t("span", Dt, g(o.status.workflows.deleted.length), 1),
            a[5] || (a[5] = t("span", { class: "label" }, "deleted", -1))
          ])) : b("", !0),
          t("div", Ut, [
            a[6] || (a[6] = t("span", { class: "icon synced" }, "✓", -1)),
            t("span", Gt, g(o.status.workflows.synced.length), 1),
            a[7] || (a[7] = t("span", { class: "label" }, "synced", -1))
          ])
        ]),
        t("div", Ot, [
          a[15] || (a[15] = t("h4", { class: "column-title" }, "Git Changes", -1)),
          o.status.git_changes.nodes_added.length ? (r(), c("div", Ht, [
            a[9] || (a[9] = t("span", { class: "icon" }, "●", -1)),
            t("span", Rt, g(o.status.git_changes.nodes_added.length), 1),
            a[10] || (a[10] = t("span", { class: "label" }, "node added", -1))
          ])) : b("", !0),
          o.status.git_changes.nodes_removed.length ? (r(), c("div", Vt, [
            a[11] || (a[11] = t("span", { class: "icon" }, "●", -1)),
            t("span", Yt, g(o.status.git_changes.nodes_removed.length), 1),
            a[12] || (a[12] = t("span", { class: "label" }, "node removed", -1))
          ])) : b("", !0),
          o.status.git_changes.workflow_changes ? (r(), c("div", jt, [...a[13] || (a[13] = [
            t("span", { class: "icon" }, "●", -1),
            t("span", { class: "count modified" }, "●", -1),
            t("span", { class: "label" }, "workflows changed", -1)
          ])])) : b("", !0),
          n.value ? b("", !0) : (r(), c("div", Ft, [...a[14] || (a[14] = [
            t("span", { class: "icon" }, "✓", -1),
            t("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      o.status.missing_models_count > 0 ? (r(), c("div", Jt, [
        a[16] || (a[16] = t("span", { class: "warning-icon" }, "⚠", -1)),
        t("span", null, g(o.status.missing_models_count) + " missing model(s)", 1)
      ])) : b("", !0),
      o.status.comparison.is_synced ? b("", !0) : (r(), c("div", Kt, [...a[17] || (a[17] = [
        t("span", { class: "warning-icon" }, "⚠", -1),
        t("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), A = (o, d) => {
  const n = o.__vccOpts || o;
  for (const [e, a] of d)
    n[e] = a;
  return n;
}, Xt = /* @__PURE__ */ A(Wt, [["__scopeId", "data-v-459dabfd"]]), qt = { class: "branch-section" }, Qt = { class: "section-header" }, Zt = { class: "branch-card" }, to = {
  key: 0,
  class: "create-branch-row"
}, oo = ["disabled"], eo = {
  key: 1,
  class: "empty"
}, ao = {
  key: 2,
  class: "branch-list"
}, ro = { class: "branch-indicator" }, co = { class: "branch-name" }, so = ["onClick"], no = {
  key: 1,
  class: "current-label"
}, io = /* @__PURE__ */ N({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(o, { emit: d }) {
    const n = d, e = k(!1), a = k(""), x = k(null);
    function $() {
      a.value.trim() && (n("create", a.value.trim()), p());
    }
    function p() {
      e.value = !1, a.value = "";
    }
    return _t(() => {
      e.value && x.value && x.value.focus();
    }), (m, w) => (r(), c("div", qt, [
      t("div", Qt, [
        w[3] || (w[3] = t("h4", { class: "section-title" }, "Branches", -1)),
        t("button", {
          class: "add-btn",
          onClick: w[0] || (w[0] = (v) => e.value = !0),
          title: "New Branch"
        }, [...w[2] || (w[2] = [
          t("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", {
              d: "M8 2v12M2 8h12",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none"
            })
          ], -1)
        ])])
      ]),
      t("div", Zt, [
        e.value ? (r(), c("div", to, [
          it(t("input", {
            ref_key: "createInput",
            ref: x,
            "onUpdate:modelValue": w[1] || (w[1] = (v) => a.value = v),
            class: "branch-input",
            placeholder: "Branch name...",
            onKeyup: [
              W($, ["enter"]),
              W(p, ["escape"])
            ]
          }, null, 544), [
            [lt, a.value]
          ]),
          t("button", {
            class: "action-btn create",
            onClick: $,
            disabled: !a.value.trim()
          }, " Create ", 8, oo),
          t("button", {
            class: "action-btn cancel",
            onClick: p
          }, " Cancel ")
        ])) : b("", !0),
        o.branches.length === 0 ? (r(), c("div", eo, " No branches found ")) : (r(), c("div", ao, [
          (r(!0), c(I, null, T(o.branches, (v) => (r(), c("div", {
            key: v.name,
            class: O(["branch-item", { current: v.is_current }])
          }, [
            t("span", ro, g(v.is_current ? "●" : "○"), 1),
            t("span", co, g(v.name), 1),
            v.is_current ? (r(), c("span", no, "current")) : (r(), c("button", {
              key: 0,
              class: "switch-btn",
              onClick: (i) => m.$emit("switch", v.name)
            }, " Switch ", 8, so))
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}), lo = /* @__PURE__ */ A(io, [["__scopeId", "data-v-be3b0883"]]), go = { class: "history-section" }, mo = { class: "history-card" }, fo = {
  key: 0,
  class: "empty"
}, po = {
  key: 1,
  class: "commit-list"
}, ho = ["onClick"], uo = { class: "commit-hash" }, bo = { class: "commit-message" }, vo = { class: "commit-date" }, yo = ["onClick"], xo = /* @__PURE__ */ N({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(o) {
    return (d, n) => (r(), c("div", go, [
      n[2] || (n[2] = t("div", { class: "section-header" }, [
        t("h4", { class: "section-title" }, "History")
      ], -1)),
      t("div", mo, [
        o.commits.length === 0 ? (r(), c("div", fo, " No commits yet ")) : (r(), c("div", po, [
          (r(!0), c(I, null, T(o.commits, (e) => {
            var a;
            return r(), c("div", {
              key: e.hash,
              class: "commit-item",
              onClick: (x) => d.$emit("select", e)
            }, [
              t("span", uo, g(e.short_hash || ((a = e.hash) == null ? void 0 : a.slice(0, 7))), 1),
              t("span", bo, g(e.message), 1),
              t("span", vo, g(e.date_relative || e.relative_date), 1),
              t("div", {
                class: "commit-actions",
                onClick: n[0] || (n[0] = j(() => {
                }, ["stop"]))
              }, [
                t("button", {
                  class: "action-btn",
                  onClick: (x) => d.$emit("checkout", e),
                  title: "Checkout this commit"
                }, [...n[1] || (n[1] = [
                  t("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                  ], -1)
                ])], 8, yo)
              ])
            ], 8, ho);
          }), 128))
        ]))
      ])
    ]));
  }
}), wo = /* @__PURE__ */ A(xo, [["__scopeId", "data-v-3bb44122"]]);
function ot() {
  const o = k(!1), d = k(null);
  async function n(h, u) {
    var f;
    if (!((f = window.app) != null && f.api))
      throw new Error("ComfyUI API not available");
    const L = await window.app.api.fetchApi(h, u);
    if (!L.ok) {
      const E = await L.json().catch(() => ({}));
      throw new Error(E.error || E.message || `Request failed: ${L.status}`);
    }
    return L.json();
  }
  async function e() {
    return n("/v2/comfygit/status");
  }
  async function a(h, u = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: h, allow_issues: u })
    });
  }
  async function x(h = 10, u = 0) {
    return n(`/v2/comfygit/log?limit=${h}&offset=${u}`);
  }
  async function $(h) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: h })
    });
  }
  async function p() {
    return n("/v2/comfygit/branches");
  }
  async function m(h) {
    return n(`/v2/comfygit/commit/${h}`);
  }
  async function w(h, u = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: h, force: u })
    });
  }
  async function v(h, u = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: h, start_point: u })
    });
  }
  async function i(h, u = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: h, force: u })
    });
  }
  return {
    isLoading: o,
    error: d,
    getStatus: e,
    commit: a,
    getHistory: x,
    exportEnv: $,
    // Phase 2
    getBranches: p,
    getCommitDetail: m,
    checkout: w,
    createBranch: v,
    switchBranch: i
  };
}
const ko = { class: "modal-content" }, Co = { class: "modal-header" }, zo = { class: "commit-info" }, $o = { class: "commit-hash" }, _o = {
  key: 0,
  class: "commit-refs"
}, So = { class: "modal-body" }, Lo = { class: "commit-message" }, Bo = { class: "commit-date" }, Io = {
  key: 0,
  class: "loading"
}, To = {
  key: 1,
  class: "changes-section"
}, Eo = { class: "stats-row" }, Mo = { class: "stat" }, Po = { class: "stat insertions" }, No = { class: "stat deletions" }, Ao = {
  key: 0,
  class: "change-group"
}, Do = {
  key: 1,
  class: "change-group"
}, Uo = {
  key: 0,
  class: "version"
}, Go = {
  key: 2,
  class: "change-group"
}, Oo = { class: "change-item" }, Ho = { class: "modal-footer" }, Ro = /* @__PURE__ */ N({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(o) {
    const d = o, { getCommitDetail: n } = ot(), e = k(null), a = k(!0), x = R(() => {
      if (!e.value) return !1;
      const p = e.value.changes.workflows;
      return p.added.length > 0 || p.modified.length > 0 || p.deleted.length > 0;
    }), $ = R(() => {
      if (!e.value) return !1;
      const p = e.value.changes.nodes;
      return p.added.length > 0 || p.removed.length > 0;
    });
    return gt(async () => {
      try {
        e.value = await n(d.commit.hash);
      } finally {
        a.value = !1;
      }
    }), (p, m) => {
      var w, v, i, h, u, L;
      return r(), c("div", {
        class: "modal-overlay",
        onClick: m[3] || (m[3] = j((f) => p.$emit("close"), ["self"]))
      }, [
        t("div", ko, [
          t("div", Co, [
            t("div", zo, [
              t("span", $o, g(((w = e.value) == null ? void 0 : w.short_hash) || o.commit.short_hash || ((v = o.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
              (h = (i = e.value) == null ? void 0 : i.refs) != null && h.length ? (r(), c("span", _o, [
                (r(!0), c(I, null, T(e.value.refs, (f) => (r(), c("span", {
                  key: f,
                  class: "ref-badge"
                }, g(f), 1))), 128))
              ])) : b("", !0)
            ]),
            t("button", {
              class: "close-btn",
              onClick: m[0] || (m[0] = (f) => p.$emit("close"))
            }, [...m[4] || (m[4] = [
              t("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          t("div", So, [
            t("div", Lo, g(((u = e.value) == null ? void 0 : u.message) || o.commit.message), 1),
            t("div", Bo, g(((L = e.value) == null ? void 0 : L.date_relative) || o.commit.date_relative || o.commit.relative_date), 1),
            a.value ? (r(), c("div", Io, "Loading details...")) : e.value ? (r(), c("div", To, [
              t("div", Eo, [
                t("span", Mo, g(e.value.stats.files_changed) + " files", 1),
                t("span", Po, "+" + g(e.value.stats.insertions), 1),
                t("span", No, "-" + g(e.value.stats.deletions), 1)
              ]),
              x.value ? (r(), c("div", Ao, [
                m[8] || (m[8] = t("h4", { class: "change-title" }, "Workflows", -1)),
                (r(!0), c(I, null, T(e.value.changes.workflows.added, (f) => (r(), c("div", {
                  key: "add-" + f,
                  class: "change-item added"
                }, [
                  m[5] || (m[5] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, g(f), 1)
                ]))), 128)),
                (r(!0), c(I, null, T(e.value.changes.workflows.modified, (f) => (r(), c("div", {
                  key: "mod-" + f,
                  class: "change-item modified"
                }, [
                  m[6] || (m[6] = t("span", { class: "change-icon" }, "~", -1)),
                  t("span", null, g(f), 1)
                ]))), 128)),
                (r(!0), c(I, null, T(e.value.changes.workflows.deleted, (f) => (r(), c("div", {
                  key: "del-" + f,
                  class: "change-item deleted"
                }, [
                  m[7] || (m[7] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, g(f), 1)
                ]))), 128))
              ])) : b("", !0),
              $.value ? (r(), c("div", Do, [
                m[11] || (m[11] = t("h4", { class: "change-title" }, "Nodes", -1)),
                (r(!0), c(I, null, T(e.value.changes.nodes.added, (f) => (r(), c("div", {
                  key: "add-" + f.name,
                  class: "change-item added"
                }, [
                  m[9] || (m[9] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, g(f.name), 1),
                  f.version ? (r(), c("span", Uo, "(" + g(f.version) + ")", 1)) : b("", !0)
                ]))), 128)),
                (r(!0), c(I, null, T(e.value.changes.nodes.removed, (f) => (r(), c("div", {
                  key: "rem-" + f.name,
                  class: "change-item deleted"
                }, [
                  m[10] || (m[10] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, g(f.name), 1)
                ]))), 128))
              ])) : b("", !0),
              e.value.changes.models.resolved > 0 ? (r(), c("div", Go, [
                m[13] || (m[13] = t("h4", { class: "change-title" }, "Models", -1)),
                t("div", Oo, [
                  m[12] || (m[12] = t("span", { class: "change-icon" }, "●", -1)),
                  t("span", null, g(e.value.changes.models.resolved) + " model(s) resolved", 1)
                ])
              ])) : b("", !0)
            ])) : b("", !0)
          ]),
          t("div", Ho, [
            t("button", {
              class: "action-btn secondary",
              onClick: m[1] || (m[1] = (f) => p.$emit("createBranch", o.commit))
            }, " Create Branch "),
            t("button", {
              class: "action-btn primary",
              onClick: m[2] || (m[2] = (f) => p.$emit("checkout", o.commit))
            }, " Checkout ")
          ])
        ])
      ]);
    };
  }
}), Vo = /* @__PURE__ */ A(Ro, [["__scopeId", "data-v-9768f067"]]), Yo = { class: "dialog-content" }, jo = { class: "dialog-header" }, Fo = { class: "dialog-title" }, Jo = { class: "dialog-body" }, Ko = { class: "dialog-message" }, Wo = {
  key: 0,
  class: "dialog-details"
}, Xo = {
  key: 1,
  class: "dialog-warning"
}, qo = { class: "dialog-footer" }, Qo = /* @__PURE__ */ N({
  __name: "ConfirmDialog",
  props: {
    title: {},
    message: {},
    details: {},
    warning: {},
    confirmLabel: { default: "Confirm" },
    cancelLabel: { default: "Cancel" },
    secondaryLabel: { default: "Alternative" },
    secondaryAction: { type: Boolean, default: !1 },
    destructive: { type: Boolean, default: !1 }
  },
  emits: ["confirm", "cancel", "secondary"],
  setup(o) {
    return (d, n) => (r(), c("div", {
      class: "dialog-overlay",
      onClick: n[3] || (n[3] = j((e) => d.$emit("cancel"), ["self"]))
    }, [
      t("div", Yo, [
        t("div", jo, [
          t("h3", Fo, g(o.title), 1)
        ]),
        t("div", Jo, [
          t("p", Ko, g(o.message), 1),
          o.details && o.details.length ? (r(), c("div", Wo, [
            (r(!0), c(I, null, T(o.details, (e, a) => (r(), c("div", {
              key: a,
              class: "detail-item"
            }, " • " + g(e), 1))), 128))
          ])) : b("", !0),
          o.warning ? (r(), c("p", Xo, [
            n[4] || (n[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
            dt(" " + g(o.warning), 1)
          ])) : b("", !0)
        ]),
        t("div", qo, [
          t("button", {
            class: "dialog-btn cancel",
            onClick: n[0] || (n[0] = (e) => d.$emit("cancel"))
          }, g(o.cancelLabel), 1),
          o.secondaryAction ? (r(), c("button", {
            key: 0,
            class: "dialog-btn secondary",
            onClick: n[1] || (n[1] = (e) => d.$emit("secondary"))
          }, g(o.secondaryLabel), 1)) : b("", !0),
          t("button", {
            class: O(["dialog-btn primary", { destructive: o.destructive }]),
            onClick: n[2] || (n[2] = (e) => d.$emit("confirm"))
          }, g(o.confirmLabel), 3)
        ])
      ])
    ]));
  }
}), Zo = /* @__PURE__ */ A(Qo, [["__scopeId", "data-v-d24c6c0b"]]), te = "[data-comfygit-theme=default] .comfygit-panel{font-family:var(--cg-font-body)}[data-comfygit-theme=default] .panel-title{color:var(--cg-color-accent)}", oe = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 12px;--cg-font-size-sm: 14px;--cg-font-size-base: 17px;--cg-font-size-lg: 20px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 28px;--cg-panel-width: 754px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:cursor-blink 1s step-end infinite}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}', ee = '@import"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";[data-comfygit-theme=swiss]{--cg-font-display: "Playfair Display", Georgia, serif;--cg-font-body: "DM Sans", system-ui, sans-serif;--cg-font-mono: "JetBrains Mono", ui-monospace, monospace;--cg-font-size-xs: 10px;--cg-font-size-sm: 12px;--cg-font-size-base: 14px;--cg-font-size-lg: 18px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 32px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-line-height-tight: 1.1;--cg-line-height-normal: 1.6;--cg-line-height-relaxed: 1.8;--cg-letter-spacing-tight: -.03em;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .15em;--cg-color-bg-primary: #fafafa;--cg-color-bg-secondary: #ffffff;--cg-color-bg-tertiary: #f0f0f0;--cg-color-bg-hover: #e8e8e8;--cg-color-bg-overlay: rgba(0, 0, 0, .6);--cg-color-text-primary: #0a0a0a;--cg-color-text-secondary: #404040;--cg-color-text-muted: #808080;--cg-color-text-inverse: #ffffff;--cg-color-border: #0a0a0a;--cg-color-border-subtle: #e0e0e0;--cg-color-border-strong: #0a0a0a;--cg-color-accent: #dc2626;--cg-color-accent-hover: #b91c1c;--cg-color-accent-muted: rgba(220, 38, 38, .1);--cg-color-success: #16a34a;--cg-color-success-muted: rgba(22, 163, 74, .1);--cg-color-warning: #d97706;--cg-color-warning-muted: rgba(217, 119, 6, .08);--cg-color-error: #dc2626;--cg-color-error-muted: rgba(220, 38, 38, .08);--cg-color-info: #0a0a0a;--cg-color-info-muted: rgba(10, 10, 10, .05);--cg-space-1: 4px;--cg-space-2: 8px;--cg-space-3: 16px;--cg-space-4: 24px;--cg-space-5: 32px;--cg-space-6: 40px;--cg-space-8: 56px;--cg-space-10: 72px;--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 2px;--cg-radius-lg: 2px;--cg-radius-xl: 2px;--cg-radius-2xl: 2px;--cg-radius-full: 2px;--cg-shadow-sm: none;--cg-shadow-md: 0 1px 0 rgba(0, 0, 0, .05);--cg-shadow-lg: 0 4px 24px rgba(0, 0, 0, .08);--cg-shadow-xl: 0 8px 48px rgba(0, 0, 0, .12);--cg-btn-gradient-start: #0a0a0a;--cg-btn-gradient-end: #0a0a0a;--cg-btn-shadow-inset: none}[data-comfygit-theme=swiss] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body)}[data-comfygit-theme=swiss] .panel-header{background:var(--cg-color-bg-secondary);border-bottom:2px solid var(--cg-color-border);padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=swiss] .header-left{flex-direction:column;align-items:flex-start;gap:var(--cg-space-1)}[data-comfygit-theme=swiss] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xl);font-weight:700;color:var(--cg-color-text-primary);letter-spacing:var(--cg-letter-spacing-tight);line-height:var(--cg-line-height-tight)}[data-comfygit-theme=swiss] .header-info{font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .env-name{font-weight:var(--cg-font-weight-semibold);color:var(--cg-color-text-secondary)}[data-comfygit-theme=swiss] .branch-name{color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .status-dot{width:6px;height:6px;border-radius:0}[data-comfygit-theme=swiss] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=swiss] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=swiss] .status-dot.error{background:var(--cg-color-accent)}[data-comfygit-theme=swiss] .icon-btn{color:var(--cg-color-text-primary);border-radius:0;transition:all var(--cg-transition-fast)}[data-comfygit-theme=swiss] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=swiss] .panel-content{padding:var(--cg-space-5)}[data-comfygit-theme=swiss] .status-section{margin-bottom:var(--cg-space-5)}[data-comfygit-theme=swiss] .status-grid{background:var(--cg-color-bg-secondary);border:1px solid var(--cg-color-border-subtle);border-radius:0}[data-comfygit-theme=swiss] .status-column{padding:var(--cg-space-4)}[data-comfygit-theme=swiss] .status-column:first-child{border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .column-title{font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted);margin-bottom:var(--cg-space-3);padding-bottom:var(--cg-space-2);border-bottom:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .status-item{font-size:var(--cg-font-size-sm);padding:var(--cg-space-1) 0}[data-comfygit-theme=swiss] .status-item .icon{display:none}[data-comfygit-theme=swiss] .count{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:700;min-width:24px}[data-comfygit-theme=swiss] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=swiss] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=swiss] .count.deleted{color:var(--cg-color-accent)}[data-comfygit-theme=swiss] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .label{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=swiss] .synced-item{border-top:1px solid var(--cg-color-border-subtle);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=swiss] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=swiss] .warning-box{background:var(--cg-color-warning-muted);border:none;border-left:3px solid var(--cg-color-warning);color:var(--cg-color-text-primary);font-size:var(--cg-font-size-sm);padding:var(--cg-space-3)}[data-comfygit-theme=swiss] .warning-box.error{background:var(--cg-color-error-muted);border-left-color:var(--cg-color-accent)}[data-comfygit-theme=swiss] .warning-icon{display:none}[data-comfygit-theme=swiss] .history-section{border-top:2px solid var(--cg-color-border);padding-top:var(--cg-space-4);margin-top:var(--cg-space-4)}[data-comfygit-theme=swiss] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:600;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=swiss] .commit-item{background:transparent;border:none;border-bottom:1px solid var(--cg-color-border-subtle);padding:var(--cg-space-3) 0;display:grid;grid-template-columns:60px 1fr auto;gap:var(--cg-space-3);align-items:baseline}[data-comfygit-theme=swiss] .commit-item:last-child{border-bottom:none}[data-comfygit-theme=swiss] .commit-item:hover{background:var(--cg-color-bg-hover);margin:0 calc(-1 * var(--cg-space-3));padding-left:var(--cg-space-3);padding-right:var(--cg-space-3)}[data-comfygit-theme=swiss] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);color:var(--cg-color-accent);font-weight:500}[data-comfygit-theme=swiss] .commit-message{font-size:var(--cg-font-size-sm);color:var(--cg-color-text-primary);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=swiss] .commit-date{font-size:var(--cg-font-size-xs);color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=swiss] .panel-footer{border-top:2px solid var(--cg-color-border);background:var(--cg-color-bg-secondary);padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=swiss] .export-btn{background:var(--cg-color-text-primary);color:var(--cg-color-text-inverse);border:none;text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3) var(--cg-space-4);transition:all var(--cg-transition-fast)}[data-comfygit-theme=swiss] .export-btn:hover:not(:disabled){background:var(--cg-color-accent);transform:translateY(-1px)}[data-comfygit-theme=swiss] .commit-popover{background:var(--cg-color-bg-secondary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=swiss] .commit-input{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-body);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=swiss] .commit-input:focus{border-color:var(--cg-color-border);outline:none}[data-comfygit-theme=swiss] .comfygit-panel-btn{background:var(--cg-color-text-primary)!important;color:var(--cg-color-text-inverse)!important;border:none!important;border-radius:0!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-body);font-size:10px;font-weight:600;box-shadow:none!important}[data-comfygit-theme=swiss] .comfygit-panel-btn:hover{background:var(--cg-color-accent)!important}[data-comfygit-theme=swiss] .comfygit-commit-btn{background:var(--cg-color-bg-secondary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border)!important;border-radius:0!important;font-family:var(--cg-font-body);font-size:10px;text-transform:uppercase;letter-spacing:.1em}[data-comfygit-theme=swiss] .comfygit-commit-btn:hover{background:var(--cg-color-bg-hover)!important}[data-comfygit-theme=swiss] .commit-indicator{background:var(--cg-color-accent);width:6px;height:6px;border-radius:0}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar{width:4px}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-track{background:transparent}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .comfygit-panel ::selection,[data-comfygit-theme=swiss] .toast ::selection,[data-comfygit-theme=swiss] .dialog-content ::selection,[data-comfygit-theme=swiss] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-inverse)}', ae = '@import"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap";[data-comfygit-theme=soft]{--cg-font-display: "Outfit", system-ui, sans-serif;--cg-font-body: "Nunito", system-ui, sans-serif;--cg-font-mono: "SF Mono", ui-monospace, monospace;--cg-font-size-xs: 11px;--cg-font-size-sm: 13px;--cg-font-size-base: 15px;--cg-font-size-lg: 18px;--cg-font-size-xl: 22px;--cg-font-size-2xl: 28px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-line-height-tight: 1.3;--cg-line-height-normal: 1.6;--cg-line-height-relaxed: 1.8;--cg-letter-spacing-tight: -.01em;--cg-letter-spacing-normal: .01em;--cg-letter-spacing-wide: .04em;--cg-color-bg-primary: rgba(30, 27, 38, .95);--cg-color-bg-secondary: rgba(40, 36, 50, .8);--cg-color-bg-tertiary: rgba(50, 45, 62, .6);--cg-color-bg-hover: rgba(80, 70, 100, .4);--cg-color-bg-overlay: rgba(20, 18, 28, .75);--cg-color-text-primary: #f0eef5;--cg-color-text-secondary: #c4bfd4;--cg-color-text-muted: #8a8299;--cg-color-text-inverse: #1e1b26;--cg-color-border: rgba(255, 255, 255, .08);--cg-color-border-subtle: rgba(255, 255, 255, .04);--cg-color-border-strong: rgba(255, 255, 255, .15);--cg-color-accent: #a78bfa;--cg-color-accent-hover: #c4b5fd;--cg-color-accent-muted: rgba(167, 139, 250, .2);--cg-color-success: #86efac;--cg-color-success-muted: rgba(134, 239, 172, .15);--cg-color-warning: #fcd34d;--cg-color-warning-muted: rgba(252, 211, 77, .12);--cg-color-error: #fca5a5;--cg-color-error-muted: rgba(252, 165, 165, .12);--cg-color-info: #93c5fd;--cg-color-info-muted: rgba(147, 197, 253, .15);--cg-space-1: 4px;--cg-space-2: 8px;--cg-space-3: 14px;--cg-space-4: 20px;--cg-space-5: 28px;--cg-space-6: 36px;--cg-space-8: 48px;--cg-radius-none: 0;--cg-radius-sm: 6px;--cg-radius-md: 10px;--cg-radius-lg: 16px;--cg-radius-xl: 24px;--cg-radius-2xl: 32px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 2px 8px rgba(0, 0, 0, .15);--cg-shadow-md: 0 4px 16px rgba(0, 0, 0, .2), 0 0 40px rgba(167, 139, 250, .05);--cg-shadow-lg: 0 8px 32px rgba(0, 0, 0, .25), 0 0 60px rgba(167, 139, 250, .08);--cg-shadow-xl: 0 16px 48px rgba(0, 0, 0, .3), 0 0 80px rgba(167, 139, 250, .1);--cg-blur-sm: 8px;--cg-blur-md: 16px;--cg-blur-lg: 24px;--cg-btn-gradient-start: #a78bfa;--cg-btn-gradient-end: #8b5cf6;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .25)}[data-comfygit-theme=soft] .comfygit-panel{background:linear-gradient(135deg,#3c325066,#1e1b26f2),var(--cg-color-bg-primary);backdrop-filter:blur(var(--cg-blur-lg));-webkit-backdrop-filter:blur(var(--cg-blur-lg));border:1px solid var(--cg-color-border-strong);border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body);overflow:hidden}[data-comfygit-theme=soft] .comfygit-panel:before{content:"";position:absolute;top:-50%;right:-50%;width:100%;height:100%;background:radial-gradient(circle at center,rgba(167,139,250,.15) 0%,transparent 50%);pointer-events:none;animation:soft-glow 8s ease-in-out infinite alternate}@keyframes soft-glow{0%{transform:translate(0) scale(1);opacity:.5}to{transform:translate(-10%,10%) scale(1.2);opacity:.8}}[data-comfygit-theme=soft] .panel-header{background:#ffffff08;border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-4) var(--cg-space-5);position:relative}[data-comfygit-theme=soft] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:600;color:var(--cg-color-text-primary);background:linear-gradient(90deg,var(--cg-color-text-primary),var(--cg-color-accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}[data-comfygit-theme=soft] .header-info{font-size:var(--cg-font-size-xs)}[data-comfygit-theme=soft] .env-name{color:var(--cg-color-text-secondary);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=soft] .branch-name{color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .status-dot{width:10px;height:10px;border-radius:var(--cg-radius-full);box-shadow:0 0 8px currentColor}[data-comfygit-theme=soft] .status-dot.success{background:var(--cg-color-success);box-shadow:0 0 12px var(--cg-color-success)}[data-comfygit-theme=soft] .status-dot.warning{background:var(--cg-color-warning);box-shadow:0 0 12px var(--cg-color-warning)}[data-comfygit-theme=soft] .status-dot.error{background:var(--cg-color-error);box-shadow:0 0 12px var(--cg-color-error)}[data-comfygit-theme=soft] .icon-btn{color:var(--cg-color-text-secondary);border-radius:var(--cg-radius-md);transition:all var(--cg-transition-normal)}[data-comfygit-theme=soft] .icon-btn:hover{background:var(--cg-color-bg-hover);color:var(--cg-color-text-primary);transform:scale(1.05)}[data-comfygit-theme=soft] .panel-content{padding:var(--cg-space-5);position:relative}[data-comfygit-theme=soft] .status-section{margin-bottom:var(--cg-space-5)}[data-comfygit-theme=soft] .status-grid{background:#ffffff08;-webkit-backdrop-filter:blur(var(--cg-blur-sm));backdrop-filter:blur(var(--cg-blur-sm));border:1px solid var(--cg-color-border);border-radius:var(--cg-radius-lg);overflow:hidden}[data-comfygit-theme=soft] .status-column{padding:var(--cg-space-4)}[data-comfygit-theme=soft] .status-column:first-child{border-right:1px solid var(--cg-color-border)}[data-comfygit-theme=soft] .column-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=soft] .status-item{font-size:var(--cg-font-size-sm);padding:var(--cg-space-1) 0}[data-comfygit-theme=soft] .status-item .icon{font-size:6px;opacity:.6}[data-comfygit-theme=soft] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=soft] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=soft] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=soft] .count.deleted{color:var(--cg-color-error)}[data-comfygit-theme=soft] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .synced-item{border-top:1px solid var(--cg-color-border);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=soft] .status-item.ok,[data-comfygit-theme=soft] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=soft] .warning-box{background:var(--cg-color-warning-muted);border:1px solid rgba(252,211,77,.3);border-radius:var(--cg-radius-md);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm);padding:var(--cg-space-3)}[data-comfygit-theme=soft] .warning-box.error{background:var(--cg-color-error-muted);border-color:#fca5a54d;color:var(--cg-color-error)}[data-comfygit-theme=soft] .history-section{margin-top:var(--cg-space-4)}[data-comfygit-theme=soft] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-semibold);color:var(--cg-color-text-secondary);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=soft] .commit-item{background:#ffffff05;border:1px solid var(--cg-color-border-subtle);border-radius:var(--cg-radius-md);padding:var(--cg-space-3);margin-bottom:var(--cg-space-2);transition:all var(--cg-transition-normal)}[data-comfygit-theme=soft] .commit-item:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border);transform:translateY(-2px);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=soft] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);color:var(--cg-color-accent);font-weight:500}[data-comfygit-theme=soft] .commit-message{font-size:var(--cg-font-size-sm);color:var(--cg-color-text-primary)}[data-comfygit-theme=soft] .commit-date{font-size:var(--cg-font-size-xs);color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .panel-footer{border-top:1px solid var(--cg-color-border);background:#ffffff05;padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=soft] .export-btn{background:linear-gradient(135deg,var(--cg-btn-gradient-start),var(--cg-btn-gradient-end));color:var(--cg-color-text-inverse);border:none;border-radius:var(--cg-radius-md);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3) var(--cg-space-4);transition:all var(--cg-transition-normal);box-shadow:0 4px 12px #a78bfa4d}[data-comfygit-theme=soft] .export-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 20px #a78bfa66}[data-comfygit-theme=soft] .commit-popover{background:#1e1b26f2;-webkit-backdrop-filter:blur(var(--cg-blur-lg));backdrop-filter:blur(var(--cg-blur-lg));border:1px solid var(--cg-color-border-strong);border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=soft] .commit-input{background:#ffffff0d;border:1px solid var(--cg-color-border);border-radius:var(--cg-radius-md);color:var(--cg-color-text-primary);font-family:var(--cg-font-body)}[data-comfygit-theme=soft] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted);outline:none}[data-comfygit-theme=soft] .comfygit-panel-btn{background:linear-gradient(135deg,var(--cg-btn-gradient-start),var(--cg-btn-gradient-end))!important;color:var(--cg-color-text-inverse)!important;border:none!important;border-radius:8px 0 0 8px!important;font-family:var(--cg-font-display);font-size:11px;font-weight:600;box-shadow:0 4px 12px #a78bfa4d!important}[data-comfygit-theme=soft] .comfygit-panel-btn:hover{box-shadow:0 6px 20px #a78bfa80!important;transform:translateY(-1px)}[data-comfygit-theme=soft] .comfygit-commit-btn{background:#ffffff0d!important;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border)!important;border-radius:0 8px 8px 0!important;font-family:var(--cg-font-display)}[data-comfygit-theme=soft] .comfygit-commit-btn:hover{background:#ffffff1a!important;border-color:var(--cg-color-accent)!important}[data-comfygit-theme=soft] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar{width:6px}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-track{background:transparent}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-strong);border-radius:var(--cg-radius-full)}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=soft] .comfygit-panel ::selection,[data-comfygit-theme=soft] .toast ::selection,[data-comfygit-theme=soft] .dialog-content ::selection,[data-comfygit-theme=soft] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-inverse)}', re = '@import"https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Archivo+Black&family=Work+Sans:wght@400;500;600;700;800&display=swap";[data-comfygit-theme=brutal]{--cg-font-display: "Archivo Black", Impact, sans-serif;--cg-font-body: "Work Sans", system-ui, sans-serif;--cg-font-mono: "Space Mono", ui-monospace, monospace;--cg-font-size-xs: 10px;--cg-font-size-sm: 12px;--cg-font-size-base: 14px;--cg-font-size-lg: 16px;--cg-font-size-xl: 20px;--cg-font-size-2xl: 28px;--cg-font-weight-normal: 500;--cg-font-weight-medium: 600;--cg-font-weight-semibold: 700;--cg-font-weight-bold: 800;--cg-line-height-tight: 1.1;--cg-line-height-normal: 1.4;--cg-line-height-relaxed: 1.6;--cg-letter-spacing-tight: -.02em;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .05em;--cg-color-bg-primary: #fffdf7;--cg-color-bg-secondary: #ffffff;--cg-color-bg-tertiary: #f5f3ed;--cg-color-bg-hover: #fef3c7;--cg-color-bg-overlay: rgba(0, 0, 0, .7);--cg-color-text-primary: #0f0f0f;--cg-color-text-secondary: #1f1f1f;--cg-color-text-muted: #525252;--cg-color-text-inverse: #ffffff;--cg-color-border: #0f0f0f;--cg-color-border-subtle: #0f0f0f;--cg-color-border-strong: #0f0f0f;--cg-color-accent: #facc15;--cg-color-accent-hover: #fde047;--cg-color-accent-muted: rgba(250, 204, 21, .3);--cg-color-success: #22c55e;--cg-color-success-muted: rgba(34, 197, 94, .2);--cg-color-warning: #f97316;--cg-color-warning-muted: rgba(249, 115, 22, .15);--cg-color-error: #ef4444;--cg-color-error-muted: rgba(239, 68, 68, .15);--cg-color-info: #3b82f6;--cg-color-info-muted: rgba(59, 130, 246, .15);--cg-space-1: 6px;--cg-space-2: 10px;--cg-space-3: 14px;--cg-space-4: 20px;--cg-space-5: 28px;--cg-space-6: 36px;--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 3px 3px 0 var(--cg-color-border);--cg-shadow-md: 4px 4px 0 var(--cg-color-border);--cg-shadow-lg: 6px 6px 0 var(--cg-color-border);--cg-shadow-xl: 8px 8px 0 var(--cg-color-border);--cg-btn-gradient-start: #facc15;--cg-btn-gradient-end: #facc15;--cg-btn-shadow-inset: none}[data-comfygit-theme=brutal] .comfygit-panel{background:var(--cg-color-bg-primary);border:4px solid var(--cg-color-border);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body)}[data-comfygit-theme=brutal] .comfygit-panel:before,[data-comfygit-theme=brutal] .comfygit-panel:after{content:"";position:absolute;width:12px;height:12px;background:var(--cg-color-accent);border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .comfygit-panel:before{top:-4px;left:-4px}[data-comfygit-theme=brutal] .comfygit-panel:after{bottom:-4px;right:-4px}[data-comfygit-theme=brutal] .panel-header{background:var(--cg-color-accent);border-bottom:4px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=brutal] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xl);color:var(--cg-color-text-primary);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-tight)}[data-comfygit-theme=brutal] .header-info{font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=brutal] .env-name{color:var(--cg-color-text-primary);text-transform:uppercase}[data-comfygit-theme=brutal] .branch-name{color:var(--cg-color-text-secondary);font-family:var(--cg-font-mono)}[data-comfygit-theme=brutal] .status-dot{width:10px;height:10px;border-radius:0;border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=brutal] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=brutal] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=brutal] .icon-btn{color:var(--cg-color-text-primary);border:2px solid transparent;background:var(--cg-color-bg-secondary);transition:all .1s ease}[data-comfygit-theme=brutal] .icon-btn:hover{background:var(--cg-color-bg-secondary);border-color:var(--cg-color-border);box-shadow:2px 2px 0 var(--cg-color-border);transform:translate(-2px,-2px)}[data-comfygit-theme=brutal] .panel-content{padding:var(--cg-space-4);background:var(--cg-color-bg-primary)}[data-comfygit-theme=brutal] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=brutal] .status-grid{background:var(--cg-color-bg-secondary);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=brutal] .status-column{padding:var(--cg-space-3)}[data-comfygit-theme=brutal] .status-column:first-child{border-right:3px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .column-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xs);text-transform:uppercase;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3);padding-bottom:var(--cg-space-2);border-bottom:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .status-item{font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-medium);padding:var(--cg-space-1) 0}[data-comfygit-theme=brutal] .status-item .icon{width:8px;height:8px;border:1px solid currentColor;background:currentColor;font-size:0;display:inline-block}[data-comfygit-theme=brutal] .count{font-family:var(--cg-font-mono);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-lg);min-width:28px}[data-comfygit-theme=brutal] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=brutal] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=brutal] .count.deleted{color:var(--cg-color-error)}[data-comfygit-theme=brutal] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=brutal] .label{text-transform:uppercase;font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=brutal] .synced-item{border-top:2px dashed var(--cg-color-border);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=brutal] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=brutal] .warning-box{background:var(--cg-color-warning);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-sm);color:var(--cg-color-text-primary);font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3);text-transform:uppercase}[data-comfygit-theme=brutal] .warning-box.error{background:var(--cg-color-error);color:var(--cg-color-text-inverse)}[data-comfygit-theme=brutal] .warning-icon{font-weight:700}[data-comfygit-theme=brutal] .history-section{margin-top:var(--cg-space-4);border-top:3px solid var(--cg-color-border);padding-top:var(--cg-space-4)}[data-comfygit-theme=brutal] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-base);text-transform:uppercase;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=brutal] .commit-item{background:var(--cg-color-bg-secondary);border:2px solid var(--cg-color-border);padding:var(--cg-space-3);margin-bottom:var(--cg-space-2);transition:all .1s ease}[data-comfygit-theme=brutal] .commit-item:hover{background:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);transform:translate(-2px,-2px)}[data-comfygit-theme=brutal] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-bold);color:var(--cg-color-info);text-transform:uppercase}[data-comfygit-theme=brutal] .commit-message{font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-medium);color:var(--cg-color-text-primary)}[data-comfygit-theme=brutal] .commit-date{font-size:var(--cg-font-size-xs);font-family:var(--cg-font-mono);color:var(--cg-color-text-muted);text-transform:uppercase}[data-comfygit-theme=brutal] .panel-footer{border-top:4px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=brutal] .export-btn{background:var(--cg-color-bg-secondary);color:var(--cg-color-text-primary);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-sm);text-transform:uppercase;font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-xs);padding:var(--cg-space-3) var(--cg-space-4);transition:all .1s ease}[data-comfygit-theme=brutal] .export-btn:hover:not(:disabled){background:var(--cg-color-accent);transform:translate(-3px,-3px);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=brutal] .export-btn:active:not(:disabled){transform:translate(0);box-shadow:none}[data-comfygit-theme=brutal] .commit-popover{background:var(--cg-color-bg-primary);border:4px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=brutal] .commit-input{background:var(--cg-color-bg-secondary);border:3px solid var(--cg-color-border);color:var(--cg-color-text-primary);font-family:var(--cg-font-body);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=brutal] .commit-input:focus{background:var(--cg-color-accent-muted);outline:none}[data-comfygit-theme=brutal] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-text-primary)!important;border:3px solid var(--cg-color-border)!important;border-radius:0!important;text-transform:uppercase;font-family:var(--cg-font-display);font-size:10px;box-shadow:3px 3px 0 var(--cg-color-border)!important;transition:all .1s ease!important}[data-comfygit-theme=brutal] .comfygit-panel-btn:hover{transform:translate(-2px,-2px)!important;box-shadow:5px 5px 0 var(--cg-color-border)!important}[data-comfygit-theme=brutal] .comfygit-panel-btn:active{transform:translate(0)!important;box-shadow:none!important}[data-comfygit-theme=brutal] .comfygit-commit-btn{background:var(--cg-color-bg-secondary)!important;color:var(--cg-color-text-primary)!important;border:3px solid var(--cg-color-border)!important;border-left:none!important;border-radius:0!important;font-family:var(--cg-font-body);font-weight:700;text-transform:uppercase;font-size:10px}[data-comfygit-theme=brutal] .comfygit-commit-btn:hover{background:var(--cg-color-bg-hover)!important}[data-comfygit-theme=brutal] .commit-indicator{background:var(--cg-color-error);border:2px solid var(--cg-color-border);border-radius:0}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar{width:12px}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary);border-left:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-accent);border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent-hover)}[data-comfygit-theme=brutal] .comfygit-panel ::selection,[data-comfygit-theme=brutal] .toast ::selection,[data-comfygit-theme=brutal] .dialog-content ::selection,[data-comfygit-theme=brutal] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-primary)}[data-comfygit-theme=brutal] .loading{background:repeating-conic-gradient(var(--cg-color-bg-tertiary) 0% 25%,var(--cg-color-bg-secondary) 0% 50%) 50% / 16px 16px;color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);text-transform:uppercase}', Z = {
  default: te,
  phosphor: oe,
  swiss: ee,
  soft: ae,
  brutal: re
};
let pt = "default", P = null;
function ce() {
  const d = new URLSearchParams(window.location.search).get("comfygit-theme");
  if (d && d in Z)
    return d;
  const n = localStorage.getItem("comfygit-theme");
  return n && n in Z ? n : "default";
}
function et(o) {
  pt = o, localStorage.setItem("comfygit-theme", o), P && P.remove(), P = document.createElement("style"), P.id = "comfygit-theme-styles", P.setAttribute("data-theme", o), P.textContent = Z[o], document.head.appendChild(P), document.body.setAttribute("data-comfygit-theme", o), console.log(`[ComfyGit] Applied theme: ${o}`);
}
function ht() {
  return [
    {
      id: "default",
      name: "Default",
      description: "Standard dark UI with orange accent"
    },
    {
      id: "phosphor",
      name: "Phosphor Terminal",
      description: "CRT monitor aesthetic with green phosphor glow"
    },
    {
      id: "swiss",
      name: "Swiss Editorial",
      description: "Clean typography with editorial elegance"
    },
    {
      id: "soft",
      name: "Soft Machine",
      description: "Organic gradients and glass morphism"
    },
    {
      id: "brutal",
      name: "Neo-Brutal",
      description: "Bold chunky borders with primary colors"
    }
  ];
}
function ut() {
  return pt;
}
const se = { class: "comfygit-panel" }, ne = { class: "panel-header" }, ie = { class: "header-left" }, le = {
  key: 0,
  class: "header-info"
}, ge = { class: "env-name" }, de = { class: "branch-name" }, me = ["title"], fe = {
  key: 1,
  class: "header-info loading-text"
}, pe = { class: "header-actions" }, he = { class: "panel-content" }, ue = {
  key: 0,
  class: "error-message"
}, be = {
  key: 1,
  class: "loading"
}, ve = { class: "panel-footer" }, ye = ["disabled"], xe = { class: "toast-container" }, we = { class: "toast-icon" }, ke = { class: "toast-message" }, Ce = /* @__PURE__ */ N({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(o, { emit: d }) {
    function n() {
      const l = ht(), y = (l.findIndex((G) => G.id === ut()) + 1) % l.length, _ = l[y].id;
      et(_);
    }
    const e = d, {
      getStatus: a,
      getHistory: x,
      exportEnv: $,
      getBranches: p,
      checkout: m,
      createBranch: w,
      switchBranch: v
    } = ot(), i = k(null), h = k([]), u = k([]), L = k(!1), f = k(null), E = k(null), C = k(null), D = k([]);
    let vt = 0;
    function z(l, s = "info", y = 3e3) {
      const _ = ++vt;
      return D.value.push({ id: _, message: l, type: s }), y > 0 && setTimeout(() => {
        D.value = D.value.filter((G) => G.id !== _);
      }, y), _;
    }
    function U(l) {
      D.value = D.value.filter((s) => s.id !== l);
    }
    function yt(l) {
      switch (l) {
        case "success":
          return "✓";
        case "warning":
          return "!";
        case "error":
          return "✕";
        default:
          return "→";
      }
    }
    const F = R(() => {
      if (!i.value) return "neutral";
      const l = i.value.workflows, s = l.new.length > 0 || l.modified.length > 0 || l.deleted.length > 0 || i.value.has_changes;
      return i.value.comparison.is_synced ? s ? "warning" : "success" : "error";
    }), xt = R(() => i.value ? F.value === "success" ? "All synced" : F.value === "warning" ? "Uncommitted changes" : F.value === "error" ? "Not synced" : "" : "");
    async function J() {
      L.value = !0, f.value = null;
      try {
        const [l, s, y] = await Promise.all([
          a(),
          x(),
          p()
        ]);
        i.value = l, h.value = s.commits, u.value = y.branches, e("statusUpdate", l);
      } catch (l) {
        f.value = l instanceof Error ? l.message : "Failed to load status", i.value = null, h.value = [], u.value = [];
      } finally {
        L.value = !1;
      }
    }
    function wt(l) {
      E.value = l;
    }
    async function rt(l) {
      var y;
      E.value = null;
      const s = i.value && (i.value.workflows.new.length > 0 || i.value.workflows.modified.length > 0 || i.value.workflows.deleted.length > 0 || i.value.has_changes);
      C.value = {
        title: s ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: s ? "You have uncommitted changes that will be lost." : `Checkout commit ${l.short_hash || ((y = l.hash) == null ? void 0 : y.slice(0, 7))}?`,
        details: s ? ct() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: s ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: s,
        onConfirm: async () => {
          var st;
          C.value = null;
          const _ = z(`Checking out ${l.short_hash || ((st = l.hash) == null ? void 0 : st.slice(0, 7))}...`, "info", 0), G = await m(l.hash, s);
          U(_), G.status === "success" ? z("Restarting ComfyUI...", "success") : z(G.message || "Checkout failed", "error");
        }
      };
    }
    async function kt(l) {
      const s = i.value && (i.value.workflows.new.length > 0 || i.value.workflows.modified.length > 0 || i.value.workflows.deleted.length > 0 || i.value.has_changes);
      C.value = {
        title: s ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: s ? "You have uncommitted changes." : `Switch to branch "${l}"?`,
        details: s ? ct() : void 0,
        warning: s ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: s ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          C.value = null;
          const y = z(`Switching to ${l}...`, "info", 0), _ = await v(l, s);
          U(y), _.status === "success" ? z("Restarting ComfyUI...", "success") : _.status === "warning" && _.reason === "uncommitted_changes" ? z("Switch cancelled due to uncommitted changes", "warning") : z(_.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ct(l) {
      const s = z(`Creating branch ${l}...`, "info", 0), y = await w(l);
      U(s), y.status === "success" ? (z(`Branch "${l}" created`, "success"), await J()) : z(y.message || "Failed to create branch", "error");
    }
    async function zt(l) {
      E.value = null;
      const s = prompt("Enter branch name:");
      if (s) {
        const y = z(`Creating branch ${s}...`, "info", 0), _ = await w(s, l.hash);
        U(y), _.status === "success" ? (z(`Branch "${s}" created from ${l.short_hash}`, "success"), await J()) : z(_.message || "Failed to create branch", "error");
      }
    }
    function ct() {
      if (!i.value) return [];
      const l = [], s = i.value.workflows;
      return s.new.length && l.push(`${s.new.length} new workflow(s)`), s.modified.length && l.push(`${s.modified.length} modified workflow(s)`), s.deleted.length && l.push(`${s.deleted.length} deleted workflow(s)`), l;
    }
    async function $t() {
      const l = z("Exporting environment...", "info", 0);
      try {
        const s = await $();
        U(l), s.status === "success" ? (z("Export complete", "success"), alert(`Export successful!

Saved to: ${s.path}

Models without sources: ${s.models_without_sources}`)) : (z("Export failed", "error"), alert(`Export failed: ${s.message}`));
      } catch (s) {
        U(l), z("Export error", "error"), alert(`Export error: ${s instanceof Error ? s.message : "Unknown error"}`);
      }
    }
    return gt(J), (l, s) => (r(), c("div", se, [
      t("div", ne, [
        t("div", ie, [
          s[3] || (s[3] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
          i.value ? (r(), c("div", le, [
            t("span", ge, g(i.value.environment), 1),
            t("span", de, "(" + g(i.value.branch || "detached") + ")", 1),
            t("span", {
              class: O(["status-dot", F.value]),
              title: xt.value
            }, null, 10, me)
          ])) : (r(), c("div", fe, "Loading..."))
        ]),
        t("div", pe, [
          t("button", {
            class: O(["icon-btn", { spinning: L.value }]),
            onClick: J,
            title: "Refresh"
          }, [...s[4] || (s[4] = [
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
            onClick: n,
            title: "Switch theme (Ctrl+Shift+T)"
          }, [...s[5] || (s[5] = [
            t("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 1a7 7 0 0 0 0 14A7 7 0 0 0 8 1zm0 12.5V2.5a5.5 5.5 0 0 1 0 11z" })
            ], -1)
          ])]),
          t("button", {
            class: "icon-btn",
            onClick: s[0] || (s[0] = (y) => e("close")),
            title: "Close"
          }, [...s[6] || (s[6] = [
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
      t("div", he, [
        f.value ? (r(), c("div", ue, g(f.value), 1)) : i.value ? (r(), c(I, { key: 2 }, [
          K(Xt, { status: i.value }, null, 8, ["status"]),
          K(lo, {
            branches: u.value,
            current: i.value.branch,
            onSwitch: kt,
            onCreate: Ct
          }, null, 8, ["branches", "current"]),
          K(wo, {
            commits: h.value,
            onSelect: wt,
            onCheckout: rt
          }, null, 8, ["commits"])
        ], 64)) : (r(), c("div", be, " Loading status... "))
      ]),
      t("div", ve, [
        t("button", {
          class: "export-btn",
          onClick: $t,
          disabled: !i.value
        }, [...s[7] || (s[7] = [
          t("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
            t("path", { d: "M14 14H2v-2h12v2z" })
          ], -1),
          dt(" Export ", -1)
        ])], 8, ye)
      ]),
      E.value ? (r(), nt(Vo, {
        key: 0,
        commit: E.value,
        onClose: s[1] || (s[1] = (y) => E.value = null),
        onCheckout: rt,
        onCreateBranch: zt
      }, null, 8, ["commit"])) : b("", !0),
      C.value ? (r(), nt(Zo, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        details: C.value.details,
        warning: C.value.warning,
        confirmLabel: C.value.confirmLabel,
        cancelLabel: C.value.cancelLabel,
        secondaryLabel: C.value.secondaryLabel,
        secondaryAction: C.value.secondaryAction,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: s[2] || (s[2] = (y) => C.value = null),
        onSecondary: C.value.onSecondary
      }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : b("", !0),
      t("div", xe, [
        K(St, { name: "toast" }, {
          default: Lt(() => [
            (r(!0), c(I, null, T(D.value, (y) => (r(), c("div", {
              key: y.id,
              class: O(["toast", y.type])
            }, [
              t("span", we, g(yt(y.type)), 1),
              t("span", ke, g(y.message), 1)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), ze = /* @__PURE__ */ A(Ce, [["__scopeId", "data-v-f2e28cc0"]]), $e = { class: "commit-popover" }, _e = { class: "popover-content" }, Se = {
  key: 0,
  class: "changes-summary"
}, Le = {
  key: 0,
  class: "change-item"
}, Be = {
  key: 1,
  class: "change-item"
}, Ie = {
  key: 2,
  class: "change-item"
}, Te = {
  key: 3,
  class: "change-item"
}, Ee = {
  key: 4,
  class: "change-item"
}, Me = {
  key: 1,
  class: "no-changes"
}, Pe = {
  key: 2,
  class: "loading"
}, Ne = { class: "message-section" }, Ae = ["placeholder", "disabled", "onKeydown"], De = { class: "popover-footer" }, Ue = ["disabled"], Ge = /* @__PURE__ */ N({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(o, { emit: d }) {
    const n = o, e = d, { commit: a } = ot(), x = k(""), $ = k(!1), p = k(null), m = R(() => {
      if (!n.status) return !1;
      const v = n.status.workflows;
      return v.new.length > 0 || v.modified.length > 0 || v.deleted.length > 0 || n.status.has_changes;
    });
    async function w() {
      var v, i, h;
      if (!(!m.value || !x.value.trim() || $.value)) {
        $.value = !0, p.value = null;
        try {
          const u = await a(x.value.trim());
          u.status === "success" ? (p.value = {
            type: "success",
            message: `Committed: ${((v = u.summary) == null ? void 0 : v.new) || 0} new, ${((i = u.summary) == null ? void 0 : i.modified) || 0} modified, ${((h = u.summary) == null ? void 0 : h.deleted) || 0} deleted`
          }, x.value = "", setTimeout(() => e("committed"), 1e3)) : u.status === "no_changes" ? p.value = { type: "error", message: "No changes to commit" } : p.value = { type: "error", message: u.message || "Commit failed" };
        } catch (u) {
          p.value = { type: "error", message: u instanceof Error ? u.message : "Commit failed" };
        } finally {
          $.value = !1;
        }
      }
    }
    return (v, i) => (r(), c("div", $e, [
      i[7] || (i[7] = t("div", { class: "popover-header" }, [
        t("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      t("div", _e, [
        o.status && m.value ? (r(), c("div", Se, [
          o.status.workflows.new.length ? (r(), c("div", Le, [
            i[2] || (i[2] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, g(o.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : b("", !0),
          o.status.workflows.modified.length ? (r(), c("div", Be, [
            i[3] || (i[3] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, g(o.status.workflows.modified.length) + " modified", 1)
          ])) : b("", !0),
          o.status.workflows.deleted.length ? (r(), c("div", Ie, [
            i[4] || (i[4] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, g(o.status.workflows.deleted.length) + " deleted", 1)
          ])) : b("", !0),
          o.status.git_changes.nodes_added.length ? (r(), c("div", Te, [
            i[5] || (i[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, g(o.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : b("", !0),
          o.status.git_changes.nodes_removed.length ? (r(), c("div", Ee, [
            i[6] || (i[6] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, g(o.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : b("", !0)
        ])) : o.status ? (r(), c("div", Me, " No changes to commit ")) : (r(), c("div", Pe, " Loading... ")),
        t("div", Ne, [
          it(t("textarea", {
            "onUpdate:modelValue": i[0] || (i[0] = (h) => x.value = h),
            class: "commit-input",
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || $.value,
            rows: "3",
            onKeydown: [
              W(j(w, ["ctrl"]), ["enter"]),
              W(j(w, ["meta"]), ["enter"])
            ]
          }, null, 40, Ae), [
            [lt, x.value]
          ])
        ]),
        p.value ? (r(), c("div", {
          key: 3,
          class: O(["result", p.value.type])
        }, g(p.value.message), 3)) : b("", !0)
      ]),
      t("div", De, [
        t("button", {
          class: "cancel-btn",
          onClick: i[1] || (i[1] = (h) => e("close"))
        }, "Cancel"),
        t("button", {
          class: "commit-btn",
          disabled: !m.value || !x.value.trim() || $.value,
          onClick: w
        }, g($.value ? "Committing..." : "Commit"), 9, Ue)
      ])
    ]));
  }
}), Oe = /* @__PURE__ */ A(Ge, [["__scopeId", "data-v-bf211fb8"]]), at = document.createElement("link");
at.rel = "stylesheet";
at.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(at);
const He = ce();
et(He);
let B = null, S = null, Y = null;
const H = k(null);
async function tt() {
  var o;
  if (!((o = window.app) != null && o.api)) return null;
  try {
    const d = await window.app.api.fetchApi("/v2/comfygit/status");
    d.ok && (H.value = await d.json());
  } catch {
  }
}
function Re() {
  if (!H.value) return !1;
  const o = H.value.workflows;
  return o.new.length > 0 || o.modified.length > 0 || o.deleted.length > 0 || H.value.has_changes;
}
function Ve() {
  B && B.remove(), B = document.createElement("div"), B.className = "comfygit-panel-overlay";
  const o = document.createElement("div");
  o.className = "comfygit-panel-container", B.appendChild(o), B.addEventListener("click", (e) => {
    e.target === B && Q();
  });
  const d = (e) => {
    e.key === "Escape" && (Q(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), mt({
    render: () => ft(ze, {
      onClose: Q,
      onStatusUpdate: (e) => {
        H.value = e, X();
      }
    })
  }).mount(o), document.body.appendChild(B);
}
function Q() {
  B && (B.remove(), B = null);
}
function Ye(o) {
  V(), S = document.createElement("div"), S.className = "comfygit-commit-popover-container";
  const d = o.getBoundingClientRect();
  S.style.position = "fixed", S.style.top = `${d.bottom + 8}px`, S.style.right = `${window.innerWidth - d.right}px`, S.style.zIndex = "10001";
  const n = (a) => {
    S && !S.contains(a.target) && a.target !== o && (V(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const e = (a) => {
    a.key === "Escape" && (V(), document.removeEventListener("keydown", e));
  };
  document.addEventListener("keydown", e), Y = mt({
    render: () => ft(Oe, {
      status: H.value,
      onClose: V,
      onCommitted: () => {
        V(), tt().then(X);
      }
    })
  }), Y.mount(S), document.body.appendChild(S);
}
function V() {
  Y && (Y.unmount(), Y = null), S && (S.remove(), S = null);
}
let M = null;
function X() {
  if (!M) return;
  const o = M.querySelector(".commit-indicator");
  o && (o.style.display = Re() ? "block" : "none");
}
function je() {
  const o = ht(), n = (o.findIndex((x) => x.id === ut()) + 1) % o.length, e = o[n].id;
  et(e);
  const a = document.createElement("div");
  a.className = "comfygit-theme-notification", a.innerHTML = `
    <strong>Theme:</strong> ${o[n].name}
    <div class="theme-desc">${o[n].description}</div>
  `, document.body.appendChild(a), setTimeout(() => a.remove(), 2e3);
}
document.addEventListener("keydown", (o) => {
  o.ctrlKey && o.shiftKey && o.key === "T" && (o.preventDefault(), je());
});
const bt = document.createElement("style");
bt.textContent = `
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
    width: var(--cg-panel-width, 580px);
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

  .comfygit-theme-notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 13px;
    z-index: 10002;
    animation: notificationSlide 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .comfygit-theme-notification .theme-desc {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 4px;
  }

  @keyframes notificationSlide {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
document.head.appendChild(bt);
q.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var n, e;
    const o = document.createElement("div");
    o.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Ve, M = document.createElement("button"), M.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", M.innerHTML = 'Commit <span class="commit-indicator"></span>', M.title = "Quick Commit", M.onclick = () => Ye(M), o.appendChild(d), o.appendChild(M), (e = (n = q.menu) == null ? void 0 : n.settingsGroup) != null && e.element && (q.menu.settingsGroup.element.before(o), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await tt(), X(), setInterval(async () => {
      await tt(), X();
    }, 3e4);
  }
});
