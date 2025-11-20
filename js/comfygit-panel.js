import { app as z } from "../../scripts/app.js";
import { defineComponent as P, computed as T, createElementBlock as o, openBlock as n, createElementVNode as e, createCommentVNode as p, toDisplayString as l, ref as C, nextTick as ue, withDirectives as X, withKeys as V, vModelText as Z, Fragment as S, renderList as B, normalizeClass as G, withModifiers as O, onMounted as ee, createTextVNode as te, createBlock as Q, createVNode as F, createApp as se, h as ne } from "vue";
const me = { class: "status-section" }, he = { class: "status-grid" }, ve = { class: "status-column" }, ge = {
  key: 0,
  class: "status-item"
}, fe = { class: "count new" }, ye = {
  key: 1,
  class: "status-item"
}, pe = { class: "count modified" }, we = {
  key: 2,
  class: "status-item"
}, be = { class: "count deleted" }, ke = { class: "status-item synced-item" }, Ce = { class: "count synced" }, $e = { class: "status-column" }, _e = {
  key: 0,
  class: "status-item"
}, xe = { class: "count new" }, Le = {
  key: 1,
  class: "status-item"
}, Se = { class: "count deleted" }, Ee = {
  key: 2,
  class: "status-item"
}, Be = {
  key: 3,
  class: "status-item ok"
}, Ne = {
  key: 0,
  class: "warning-box"
}, Pe = {
  key: 1,
  class: "warning-box error"
}, Ae = /* @__PURE__ */ P({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(t) {
    const u = t, i = T(() => {
      const s = u.status.git_changes;
      return s.nodes_added.length > 0 || s.nodes_removed.length > 0 || s.workflow_changes || s.has_other_changes;
    });
    return (s, a) => (n(), o("div", me, [
      e("div", he, [
        e("div", ve, [
          a[8] || (a[8] = e("h4", { class: "column-title" }, "Workflows", -1)),
          t.status.workflows.new.length ? (n(), o("div", ge, [
            a[0] || (a[0] = e("span", { class: "icon" }, "●", -1)),
            e("span", fe, l(t.status.workflows.new.length), 1),
            a[1] || (a[1] = e("span", { class: "label" }, "new", -1))
          ])) : p("", !0),
          t.status.workflows.modified.length ? (n(), o("div", ye, [
            a[2] || (a[2] = e("span", { class: "icon" }, "●", -1)),
            e("span", pe, l(t.status.workflows.modified.length), 1),
            a[3] || (a[3] = e("span", { class: "label" }, "modified", -1))
          ])) : p("", !0),
          t.status.workflows.deleted.length ? (n(), o("div", we, [
            a[4] || (a[4] = e("span", { class: "icon" }, "●", -1)),
            e("span", be, l(t.status.workflows.deleted.length), 1),
            a[5] || (a[5] = e("span", { class: "label" }, "deleted", -1))
          ])) : p("", !0),
          e("div", ke, [
            a[6] || (a[6] = e("span", { class: "icon synced" }, "✓", -1)),
            e("span", Ce, l(t.status.workflows.synced.length), 1),
            a[7] || (a[7] = e("span", { class: "label" }, "synced", -1))
          ])
        ]),
        e("div", $e, [
          a[15] || (a[15] = e("h4", { class: "column-title" }, "Git Changes", -1)),
          t.status.git_changes.nodes_added.length ? (n(), o("div", _e, [
            a[9] || (a[9] = e("span", { class: "icon" }, "●", -1)),
            e("span", xe, l(t.status.git_changes.nodes_added.length), 1),
            a[10] || (a[10] = e("span", { class: "label" }, "node added", -1))
          ])) : p("", !0),
          t.status.git_changes.nodes_removed.length ? (n(), o("div", Le, [
            a[11] || (a[11] = e("span", { class: "icon" }, "●", -1)),
            e("span", Se, l(t.status.git_changes.nodes_removed.length), 1),
            a[12] || (a[12] = e("span", { class: "label" }, "node removed", -1))
          ])) : p("", !0),
          t.status.git_changes.workflow_changes ? (n(), o("div", Ee, [...a[13] || (a[13] = [
            e("span", { class: "icon" }, "●", -1),
            e("span", { class: "count modified" }, "●", -1),
            e("span", { class: "label" }, "workflows changed", -1)
          ])])) : p("", !0),
          i.value ? p("", !0) : (n(), o("div", Be, [...a[14] || (a[14] = [
            e("span", { class: "icon" }, "✓", -1),
            e("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      t.status.missing_models_count > 0 ? (n(), o("div", Ne, [
        a[16] || (a[16] = e("span", { class: "warning-icon" }, "⚠", -1)),
        e("span", null, l(t.status.missing_models_count) + " missing model(s)", 1)
      ])) : p("", !0),
      t.status.comparison.is_synced ? p("", !0) : (n(), o("div", Pe, [...a[17] || (a[17] = [
        e("span", { class: "warning-icon" }, "⚠", -1),
        e("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), A = (t, u) => {
  const i = t.__vccOpts || t;
  for (const [s, a] of u)
    i[s] = a;
  return i;
}, Ie = /* @__PURE__ */ A(Ae, [["__scopeId", "data-v-30ea4f72"]]), Te = { class: "branch-section" }, Me = { class: "section-header" }, De = { class: "branch-card" }, Ge = {
  key: 0,
  class: "create-branch-row"
}, Oe = ["disabled"], He = {
  key: 1,
  class: "empty"
}, Ue = {
  key: 2,
  class: "branch-list"
}, Ve = { class: "branch-indicator" }, je = { class: "branch-name" }, ze = ["onClick"], Fe = {
  key: 1,
  class: "current-label"
}, Re = /* @__PURE__ */ P({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: u }) {
    const i = u, s = C(!1), a = C(""), k = C(null);
    function $() {
      a.value.trim() && (i("create", a.value.trim()), v());
    }
    function v() {
      s.value = !1, a.value = "";
    }
    return ue(() => {
      s.value && k.value && k.value.focus();
    }), (c, w) => (n(), o("div", Te, [
      e("div", Me, [
        w[3] || (w[3] = e("h4", { class: "section-title" }, "Branches", -1)),
        e("button", {
          class: "add-btn",
          onClick: w[0] || (w[0] = (d) => s.value = !0),
          title: "New Branch"
        }, [...w[2] || (w[2] = [
          e("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", {
              d: "M8 2v12M2 8h12",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none"
            })
          ], -1)
        ])])
      ]),
      e("div", De, [
        s.value ? (n(), o("div", Ge, [
          X(e("input", {
            ref_key: "createInput",
            ref: k,
            "onUpdate:modelValue": w[1] || (w[1] = (d) => a.value = d),
            class: "branch-input",
            placeholder: "Branch name...",
            onKeyup: [
              V($, ["enter"]),
              V(v, ["escape"])
            ]
          }, null, 544), [
            [Z, a.value]
          ]),
          e("button", {
            class: "action-btn create",
            onClick: $,
            disabled: !a.value.trim()
          }, " Create ", 8, Oe),
          e("button", {
            class: "action-btn cancel",
            onClick: v
          }, " Cancel ")
        ])) : p("", !0),
        t.branches.length === 0 ? (n(), o("div", He, " No branches found ")) : (n(), o("div", Ue, [
          (n(!0), o(S, null, B(t.branches, (d) => (n(), o("div", {
            key: d.name,
            class: G(["branch-item", { current: d.is_current }])
          }, [
            e("span", Ve, l(d.is_current ? "●" : "○"), 1),
            e("span", je, l(d.name), 1),
            d.is_current ? (n(), o("span", Fe, "current")) : (n(), o("button", {
              key: 0,
              class: "switch-btn",
              onClick: (g) => c.$emit("switch", d.name)
            }, " Switch ", 8, ze))
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}), Je = /* @__PURE__ */ A(Re, [["__scopeId", "data-v-be3b0883"]]), Ke = { class: "history-section" }, We = { class: "history-card" }, Ye = {
  key: 0,
  class: "empty"
}, qe = {
  key: 1,
  class: "commit-list"
}, Qe = ["onClick"], Xe = { class: "commit-hash" }, Ze = { class: "commit-message" }, et = { class: "commit-date" }, tt = ["onClick"], st = /* @__PURE__ */ P({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, i) => (n(), o("div", Ke, [
      i[2] || (i[2] = e("div", { class: "section-header" }, [
        e("h4", { class: "section-title" }, "History")
      ], -1)),
      e("div", We, [
        t.commits.length === 0 ? (n(), o("div", Ye, " No commits yet ")) : (n(), o("div", qe, [
          (n(!0), o(S, null, B(t.commits, (s) => {
            var a;
            return n(), o("div", {
              key: s.hash,
              class: "commit-item",
              onClick: (k) => u.$emit("select", s)
            }, [
              e("span", Xe, l(s.short_hash || ((a = s.hash) == null ? void 0 : a.slice(0, 7))), 1),
              e("span", Ze, l(s.message), 1),
              e("span", et, l(s.date_relative || s.relative_date), 1),
              e("div", {
                class: "commit-actions",
                onClick: i[0] || (i[0] = O(() => {
                }, ["stop"]))
              }, [
                e("button", {
                  class: "action-btn",
                  onClick: (k) => u.$emit("checkout", s),
                  title: "Checkout this commit"
                }, [...i[1] || (i[1] = [
                  e("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                  ], -1)
                ])], 8, tt)
              ])
            ], 8, Qe);
          }), 128))
        ]))
      ])
    ]));
  }
}), nt = /* @__PURE__ */ A(st, [["__scopeId", "data-v-3bb44122"]]);
function K() {
  const t = C(!1), u = C(null);
  async function i(f, y) {
    var h;
    if (!((h = window.app) != null && h.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(f, y);
    if (!x.ok) {
      const b = await x.json().catch(() => ({}));
      throw new Error(b.error || b.message || `Request failed: ${x.status}`);
    }
    return x.json();
  }
  async function s() {
    return i("/v2/comfygit/status");
  }
  async function a(f, y = !1) {
    return i("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: f, allow_issues: y })
    });
  }
  async function k(f = 10, y = 0) {
    return i(`/v2/comfygit/log?limit=${f}&offset=${y}`);
  }
  async function $(f) {
    return i("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: f })
    });
  }
  async function v() {
    return i("/v2/comfygit/branches");
  }
  async function c(f) {
    return i(`/v2/comfygit/commit/${f}`);
  }
  async function w(f, y = !1) {
    return i("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: f, force: y })
    });
  }
  async function d(f, y = "HEAD") {
    return i("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: f, start_point: y })
    });
  }
  async function g(f, y = !1) {
    return i("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: f, force: y })
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: s,
    commit: a,
    getHistory: k,
    exportEnv: $,
    // Phase 2
    getBranches: v,
    getCommitDetail: c,
    checkout: w,
    createBranch: d,
    switchBranch: g
  };
}
const ot = { class: "modal-content" }, at = { class: "modal-header" }, it = { class: "commit-info" }, lt = { class: "commit-hash" }, ct = {
  key: 0,
  class: "commit-refs"
}, rt = { class: "modal-body" }, dt = { class: "commit-message" }, ut = { class: "commit-date" }, mt = {
  key: 0,
  class: "loading"
}, ht = {
  key: 1,
  class: "changes-section"
}, vt = { class: "stats-row" }, gt = { class: "stat" }, ft = { class: "stat insertions" }, yt = { class: "stat deletions" }, pt = {
  key: 0,
  class: "change-group"
}, wt = {
  key: 1,
  class: "change-group"
}, bt = {
  key: 0,
  class: "version"
}, kt = {
  key: 2,
  class: "change-group"
}, Ct = { class: "change-item" }, $t = { class: "modal-footer" }, _t = /* @__PURE__ */ P({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: i } = K(), s = C(null), a = C(!0), k = T(() => {
      if (!s.value) return !1;
      const v = s.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), $ = T(() => {
      if (!s.value) return !1;
      const v = s.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return ee(async () => {
      try {
        s.value = await i(u.commit.hash);
      } finally {
        a.value = !1;
      }
    }), (v, c) => {
      var w, d, g, f, y, x;
      return n(), o("div", {
        class: "modal-overlay",
        onClick: c[3] || (c[3] = O((h) => v.$emit("close"), ["self"]))
      }, [
        e("div", ot, [
          e("div", at, [
            e("div", it, [
              e("span", lt, l(((w = s.value) == null ? void 0 : w.short_hash) || t.commit.short_hash || ((d = t.commit.hash) == null ? void 0 : d.slice(0, 7))), 1),
              (f = (g = s.value) == null ? void 0 : g.refs) != null && f.length ? (n(), o("span", ct, [
                (n(!0), o(S, null, B(s.value.refs, (h) => (n(), o("span", {
                  key: h,
                  class: "ref-badge"
                }, l(h), 1))), 128))
              ])) : p("", !0)
            ]),
            e("button", {
              class: "close-btn",
              onClick: c[0] || (c[0] = (h) => v.$emit("close"))
            }, [...c[4] || (c[4] = [
              e("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          e("div", rt, [
            e("div", dt, l(((y = s.value) == null ? void 0 : y.message) || t.commit.message), 1),
            e("div", ut, l(((x = s.value) == null ? void 0 : x.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
            a.value ? (n(), o("div", mt, "Loading details...")) : s.value ? (n(), o("div", ht, [
              e("div", vt, [
                e("span", gt, l(s.value.stats.files_changed) + " files", 1),
                e("span", ft, "+" + l(s.value.stats.insertions), 1),
                e("span", yt, "-" + l(s.value.stats.deletions), 1)
              ]),
              k.value ? (n(), o("div", pt, [
                c[8] || (c[8] = e("h4", { class: "change-title" }, "Workflows", -1)),
                (n(!0), o(S, null, B(s.value.changes.workflows.added, (h) => (n(), o("div", {
                  key: "add-" + h,
                  class: "change-item added"
                }, [
                  c[5] || (c[5] = e("span", { class: "change-icon" }, "+", -1)),
                  e("span", null, l(h), 1)
                ]))), 128)),
                (n(!0), o(S, null, B(s.value.changes.workflows.modified, (h) => (n(), o("div", {
                  key: "mod-" + h,
                  class: "change-item modified"
                }, [
                  c[6] || (c[6] = e("span", { class: "change-icon" }, "~", -1)),
                  e("span", null, l(h), 1)
                ]))), 128)),
                (n(!0), o(S, null, B(s.value.changes.workflows.deleted, (h) => (n(), o("div", {
                  key: "del-" + h,
                  class: "change-item deleted"
                }, [
                  c[7] || (c[7] = e("span", { class: "change-icon" }, "-", -1)),
                  e("span", null, l(h), 1)
                ]))), 128))
              ])) : p("", !0),
              $.value ? (n(), o("div", wt, [
                c[11] || (c[11] = e("h4", { class: "change-title" }, "Nodes", -1)),
                (n(!0), o(S, null, B(s.value.changes.nodes.added, (h) => (n(), o("div", {
                  key: "add-" + h.name,
                  class: "change-item added"
                }, [
                  c[9] || (c[9] = e("span", { class: "change-icon" }, "+", -1)),
                  e("span", null, l(h.name), 1),
                  h.version ? (n(), o("span", bt, "(" + l(h.version) + ")", 1)) : p("", !0)
                ]))), 128)),
                (n(!0), o(S, null, B(s.value.changes.nodes.removed, (h) => (n(), o("div", {
                  key: "rem-" + h.name,
                  class: "change-item deleted"
                }, [
                  c[10] || (c[10] = e("span", { class: "change-icon" }, "-", -1)),
                  e("span", null, l(h.name), 1)
                ]))), 128))
              ])) : p("", !0),
              s.value.changes.models.resolved > 0 ? (n(), o("div", kt, [
                c[13] || (c[13] = e("h4", { class: "change-title" }, "Models", -1)),
                e("div", Ct, [
                  c[12] || (c[12] = e("span", { class: "change-icon" }, "●", -1)),
                  e("span", null, l(s.value.changes.models.resolved) + " model(s) resolved", 1)
                ])
              ])) : p("", !0)
            ])) : p("", !0)
          ]),
          e("div", $t, [
            e("button", {
              class: "action-btn secondary",
              onClick: c[1] || (c[1] = (h) => v.$emit("createBranch", t.commit))
            }, " Create Branch "),
            e("button", {
              class: "action-btn primary",
              onClick: c[2] || (c[2] = (h) => v.$emit("checkout", t.commit))
            }, " Checkout ")
          ])
        ])
      ]);
    };
  }
}), xt = /* @__PURE__ */ A(_t, [["__scopeId", "data-v-9768f067"]]), Lt = { class: "dialog-content" }, St = { class: "dialog-header" }, Et = { class: "dialog-title" }, Bt = { class: "dialog-body" }, Nt = { class: "dialog-message" }, Pt = {
  key: 0,
  class: "dialog-details"
}, At = {
  key: 1,
  class: "dialog-warning"
}, It = { class: "dialog-footer" }, Tt = /* @__PURE__ */ P({
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
  setup(t) {
    return (u, i) => (n(), o("div", {
      class: "dialog-overlay",
      onClick: i[3] || (i[3] = O((s) => u.$emit("cancel"), ["self"]))
    }, [
      e("div", Lt, [
        e("div", St, [
          e("h3", Et, l(t.title), 1)
        ]),
        e("div", Bt, [
          e("p", Nt, l(t.message), 1),
          t.details && t.details.length ? (n(), o("div", Pt, [
            (n(!0), o(S, null, B(t.details, (s, a) => (n(), o("div", {
              key: a,
              class: "detail-item"
            }, " • " + l(s), 1))), 128))
          ])) : p("", !0),
          t.warning ? (n(), o("p", At, [
            i[4] || (i[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
            te(" " + l(t.warning), 1)
          ])) : p("", !0)
        ]),
        e("div", It, [
          e("button", {
            class: "dialog-btn cancel",
            onClick: i[0] || (i[0] = (s) => u.$emit("cancel"))
          }, l(t.cancelLabel), 1),
          t.secondaryAction ? (n(), o("button", {
            key: 0,
            class: "dialog-btn secondary",
            onClick: i[1] || (i[1] = (s) => u.$emit("secondary"))
          }, l(t.secondaryLabel), 1)) : p("", !0),
          e("button", {
            class: G(["dialog-btn primary", { destructive: t.destructive }]),
            onClick: i[2] || (i[2] = (s) => u.$emit("confirm"))
          }, l(t.confirmLabel), 3)
        ])
      ])
    ]));
  }
}), Mt = /* @__PURE__ */ A(Tt, [["__scopeId", "data-v-d24c6c0b"]]), Dt = { class: "comfygit-panel" }, Gt = { class: "panel-header" }, Ot = { class: "header-left" }, Ht = {
  key: 0,
  class: "header-info"
}, Ut = { class: "env-name" }, Vt = { class: "branch-name" }, jt = ["title"], zt = {
  key: 1,
  class: "header-info loading-text"
}, Ft = { class: "header-actions" }, Rt = { class: "panel-content" }, Jt = {
  key: 0,
  class: "error-message"
}, Kt = {
  key: 1,
  class: "loading"
}, Wt = { class: "panel-footer" }, Yt = ["disabled"], qt = /* @__PURE__ */ P({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const i = u, {
      getStatus: s,
      getHistory: a,
      exportEnv: k,
      getBranches: $,
      checkout: v,
      createBranch: c,
      switchBranch: w
    } = K(), d = C(null), g = C([]), f = C([]), y = C(!1), x = C(null), h = C(null), b = C(null), H = T(() => {
      if (!d.value) return "neutral";
      const m = d.value.workflows, r = m.new.length > 0 || m.modified.length > 0 || m.deleted.length > 0 || d.value.has_changes;
      return d.value.comparison.is_synced ? r ? "warning" : "success" : "error";
    }), ae = T(() => d.value ? H.value === "success" ? "All synced" : H.value === "warning" ? "Uncommitted changes" : H.value === "error" ? "Not synced" : "" : "");
    async function U() {
      y.value = !0, x.value = null;
      try {
        const [m, r, N] = await Promise.all([
          s(),
          a(),
          $()
        ]);
        d.value = m, g.value = r.commits, f.value = N.branches, i("statusUpdate", m);
      } catch (m) {
        x.value = m instanceof Error ? m.message : "Failed to load status", d.value = null, g.value = [], f.value = [];
      } finally {
        y.value = !1;
      }
    }
    function ie(m) {
      h.value = m;
    }
    async function Y(m) {
      h.value = null;
      const r = await v(m.hash);
      r.status === "warning" && r.reason === "uncommitted_changes" ? b.value = {
        title: "Uncommitted Changes",
        message: "You have uncommitted changes that will be lost.",
        details: q(),
        warning: "Checking out will discard these changes.",
        confirmLabel: "Discard & Checkout",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          b.value = null, await v(m.hash, !0);
        }
      } : r.status === "success" || alert(r.message || "Checkout failed");
    }
    async function le(m) {
      const r = await w(m);
      r.status === "warning" ? r.reason === "uncommitted_changes" && (b.value = {
        title: "Uncommitted Changes",
        message: "You have uncommitted changes.",
        details: q(),
        warning: "Switch anyway? Changes will remain in current branch.",
        confirmLabel: "Switch Anyway",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          b.value = null, await w(m, !0);
        }
      }) : r.status;
    }
    async function ce(m) {
      const r = await c(m);
      r.status === "success" ? await U() : alert(r.message || "Failed to create branch");
    }
    async function re(m) {
      h.value = null;
      const r = prompt("Enter branch name:");
      if (r) {
        const N = await c(r, m.hash);
        N.status === "success" ? await U() : alert(N.message || "Failed to create branch");
      }
    }
    function q() {
      if (!d.value) return [];
      const m = [], r = d.value.workflows;
      return r.new.length && m.push(`${r.new.length} new workflow(s)`), r.modified.length && m.push(`${r.modified.length} modified workflow(s)`), r.deleted.length && m.push(`${r.deleted.length} deleted workflow(s)`), m;
    }
    async function de() {
      try {
        const m = await k();
        m.status === "success" ? alert(`Export successful!

Saved to: ${m.path}

Models without sources: ${m.models_without_sources}`) : alert(`Export failed: ${m.message}`);
      } catch (m) {
        alert(`Export error: ${m instanceof Error ? m.message : "Unknown error"}`);
      }
    }
    return ee(U), (m, r) => (n(), o("div", Dt, [
      e("div", Gt, [
        e("div", Ot, [
          r[3] || (r[3] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
          d.value ? (n(), o("div", Ht, [
            e("span", Ut, l(d.value.environment), 1),
            e("span", Vt, "(" + l(d.value.branch || "detached") + ")", 1),
            e("span", {
              class: G(["status-dot", H.value]),
              title: ae.value
            }, null, 10, jt)
          ])) : (n(), o("div", zt, "Loading..."))
        ]),
        e("div", Ft, [
          e("button", {
            class: G(["icon-btn", { spinning: y.value }]),
            onClick: U,
            title: "Refresh"
          }, [...r[4] || (r[4] = [
            e("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
            ], -1)
          ])], 2),
          e("button", {
            class: "icon-btn",
            onClick: r[0] || (r[0] = (N) => i("close")),
            title: "Close"
          }, [...r[5] || (r[5] = [
            e("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])])
        ])
      ]),
      e("div", Rt, [
        x.value ? (n(), o("div", Jt, l(x.value), 1)) : d.value ? (n(), o(S, { key: 2 }, [
          F(Ie, { status: d.value }, null, 8, ["status"]),
          F(Je, {
            branches: f.value,
            current: d.value.branch,
            onSwitch: le,
            onCreate: ce
          }, null, 8, ["branches", "current"]),
          F(nt, {
            commits: g.value,
            onSelect: ie,
            onCheckout: Y
          }, null, 8, ["commits"])
        ], 64)) : (n(), o("div", Kt, " Loading status... "))
      ]),
      e("div", Wt, [
        e("button", {
          class: "export-btn",
          onClick: de,
          disabled: !d.value
        }, [...r[6] || (r[6] = [
          e("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
            e("path", { d: "M14 14H2v-2h12v2z" })
          ], -1),
          te(" Export ", -1)
        ])], 8, Yt)
      ]),
      h.value ? (n(), Q(xt, {
        key: 0,
        commit: h.value,
        onClose: r[1] || (r[1] = (N) => h.value = null),
        onCheckout: Y,
        onCreateBranch: re
      }, null, 8, ["commit"])) : p("", !0),
      b.value ? (n(), Q(Mt, {
        key: 1,
        title: b.value.title,
        message: b.value.message,
        details: b.value.details,
        warning: b.value.warning,
        confirmLabel: b.value.confirmLabel,
        cancelLabel: b.value.cancelLabel,
        secondaryLabel: b.value.secondaryLabel,
        secondaryAction: b.value.secondaryAction,
        destructive: b.value.destructive,
        onConfirm: b.value.onConfirm,
        onCancel: r[2] || (r[2] = (N) => b.value = null),
        onSecondary: b.value.onSecondary
      }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : p("", !0)
    ]));
  }
}), Qt = /* @__PURE__ */ A(qt, [["__scopeId", "data-v-6bcacee6"]]), Xt = { class: "commit-popover" }, Zt = { class: "popover-content" }, es = {
  key: 0,
  class: "changes-summary"
}, ts = {
  key: 0,
  class: "change-item"
}, ss = {
  key: 1,
  class: "change-item"
}, ns = {
  key: 2,
  class: "change-item"
}, os = {
  key: 3,
  class: "change-item"
}, as = {
  key: 4,
  class: "change-item"
}, is = {
  key: 1,
  class: "no-changes"
}, ls = {
  key: 2,
  class: "loading"
}, cs = { class: "message-section" }, rs = ["placeholder", "disabled", "onKeydown"], ds = { class: "popover-footer" }, us = ["disabled"], ms = /* @__PURE__ */ P({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const i = t, s = u, { commit: a } = K(), k = C(""), $ = C(!1), v = C(null), c = T(() => {
      if (!i.status) return !1;
      const d = i.status.workflows;
      return d.new.length > 0 || d.modified.length > 0 || d.deleted.length > 0 || i.status.has_changes;
    });
    async function w() {
      var d, g, f;
      if (!(!c.value || !k.value.trim() || $.value)) {
        $.value = !0, v.value = null;
        try {
          const y = await a(k.value.trim());
          y.status === "success" ? (v.value = {
            type: "success",
            message: `Committed: ${((d = y.summary) == null ? void 0 : d.new) || 0} new, ${((g = y.summary) == null ? void 0 : g.modified) || 0} modified, ${((f = y.summary) == null ? void 0 : f.deleted) || 0} deleted`
          }, k.value = "", setTimeout(() => s("committed"), 1e3)) : y.status === "no_changes" ? v.value = { type: "error", message: "No changes to commit" } : v.value = { type: "error", message: y.message || "Commit failed" };
        } catch (y) {
          v.value = { type: "error", message: y instanceof Error ? y.message : "Commit failed" };
        } finally {
          $.value = !1;
        }
      }
    }
    return (d, g) => (n(), o("div", Xt, [
      g[7] || (g[7] = e("div", { class: "popover-header" }, [
        e("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      e("div", Zt, [
        t.status && c.value ? (n(), o("div", es, [
          t.status.workflows.new.length ? (n(), o("div", ts, [
            g[2] || (g[2] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : p("", !0),
          t.status.workflows.modified.length ? (n(), o("div", ss, [
            g[3] || (g[3] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : p("", !0),
          t.status.workflows.deleted.length ? (n(), o("div", ns, [
            g[4] || (g[4] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : p("", !0),
          t.status.git_changes.nodes_added.length ? (n(), o("div", os, [
            g[5] || (g[5] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : p("", !0),
          t.status.git_changes.nodes_removed.length ? (n(), o("div", as, [
            g[6] || (g[6] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : p("", !0)
        ])) : t.status ? (n(), o("div", is, " No changes to commit ")) : (n(), o("div", ls, " Loading... ")),
        e("div", cs, [
          X(e("textarea", {
            "onUpdate:modelValue": g[0] || (g[0] = (f) => k.value = f),
            class: "commit-input",
            placeholder: c.value ? "Describe your changes..." : "No changes",
            disabled: !c.value || $.value,
            rows: "3",
            onKeydown: [
              V(O(w, ["ctrl"]), ["enter"]),
              V(O(w, ["meta"]), ["enter"])
            ]
          }, null, 40, rs), [
            [Z, k.value]
          ])
        ]),
        v.value ? (n(), o("div", {
          key: 3,
          class: G(["result", v.value.type])
        }, l(v.value.message), 3)) : p("", !0)
      ]),
      e("div", ds, [
        e("button", {
          class: "cancel-btn",
          onClick: g[1] || (g[1] = (f) => s("close"))
        }, "Cancel"),
        e("button", {
          class: "commit-btn",
          disabled: !c.value || !k.value.trim() || $.value,
          onClick: w
        }, l($.value ? "Committing..." : "Commit"), 9, us)
      ])
    ]));
  }
}), hs = /* @__PURE__ */ A(ms, [["__scopeId", "data-v-bf211fb8"]]), W = document.createElement("link");
W.rel = "stylesheet";
W.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(W);
let L = null, _ = null, D = null;
const I = C(null);
async function J() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const u = await window.app.api.fetchApi("/v2/comfygit/status");
    u.ok && (I.value = await u.json());
  } catch {
  }
}
function vs() {
  if (!I.value) return !1;
  const t = I.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || I.value.has_changes;
}
function gs() {
  L && L.remove(), L = document.createElement("div"), L.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", L.appendChild(t), L.addEventListener("click", (s) => {
    s.target === L && R();
  });
  const u = (s) => {
    s.key === "Escape" && (R(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), se({
    render: () => ne(Qt, {
      onClose: R,
      onStatusUpdate: (s) => {
        I.value = s, j();
      }
    })
  }).mount(t), document.body.appendChild(L);
}
function R() {
  L && (L.remove(), L = null);
}
function fs(t) {
  M(), _ = document.createElement("div"), _.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  _.style.position = "fixed", _.style.top = `${u.bottom + 8}px`, _.style.right = `${window.innerWidth - u.right}px`, _.style.zIndex = "10001";
  const i = (a) => {
    _ && !_.contains(a.target) && a.target !== t && (M(), document.removeEventListener("mousedown", i));
  };
  setTimeout(() => document.addEventListener("mousedown", i), 0);
  const s = (a) => {
    a.key === "Escape" && (M(), document.removeEventListener("keydown", s));
  };
  document.addEventListener("keydown", s), D = se({
    render: () => ne(hs, {
      status: I.value,
      onClose: M,
      onCommitted: () => {
        M(), J().then(j);
      }
    })
  }), D.mount(_), document.body.appendChild(_);
}
function M() {
  D && (D.unmount(), D = null), _ && (_.remove(), _ = null);
}
let E = null;
function j() {
  if (!E) return;
  const t = E.querySelector(".commit-indicator");
  t && (t.style.display = vs() ? "block" : "none");
}
const oe = document.createElement("style");
oe.textContent = `
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
document.head.appendChild(oe);
z.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var i, s;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = gs, E = document.createElement("button"), E.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", E.innerHTML = 'Commit <span class="commit-indicator"></span>', E.title = "Quick Commit", E.onclick = () => fs(E), t.appendChild(u), t.appendChild(E), (s = (i = z.menu) == null ? void 0 : i.settingsGroup) != null && s.element && (z.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await J(), j(), setInterval(async () => {
      await J(), j();
    }, 3e4);
  }
});
