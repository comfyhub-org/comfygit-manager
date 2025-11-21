import { app as Ie } from "../../scripts/app.js";
import { defineComponent as R, createElementBlock as a, openBlock as t, createCommentVNode as d, createElementVNode as o, renderSlot as K, createBlock as $, resolveDynamicComponent as Te, normalizeClass as U, withCtx as i, toDisplayString as r, createVNode as k, createTextVNode as b, computed as V, Fragment as P, renderList as q, ref as E, nextTick as rt, withDirectives as Ve, withKeys as $e, vModelText as Pe, withModifiers as be, onMounted as ce, onUnmounted as it, Teleport as He, normalizeStyle as Ge, TransitionGroup as ct, createApp as Fe, h as Ke } from "vue";
const dt = { class: "panel-layout" }, ut = {
  key: 0,
  class: "panel-layout-header"
}, mt = {
  key: 1,
  class: "panel-layout-search"
}, gt = { class: "panel-layout-content" }, ht = {
  key: 2,
  class: "panel-layout-footer"
}, ft = /* @__PURE__ */ R({
  __name: "PanelLayout",
  setup(e) {
    return (l, s) => (t(), a("div", dt, [
      l.$slots.header ? (t(), a("div", ut, [
        K(l.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      l.$slots.search ? (t(), a("div", mt, [
        K(l.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      o("div", gt, [
        K(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), a("div", ht, [
        K(l.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), W = (e, l) => {
  const s = e.__vccOpts || e;
  for (const [n, y] of l)
    s[n] = y;
  return s;
}, Oe = /* @__PURE__ */ W(ft, [["__scopeId", "data-v-21565df9"]]), vt = {
  key: 0,
  class: "panel-title-prefix"
}, pt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, yt = /* @__PURE__ */ R({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, s) => (t(), $(Te(`h${e.level}`), {
      class: U(["panel-title", e.variant])
    }, {
      default: i(() => [
        e.showPrefix ? (t(), a("span", vt, r(e.prefix), 1)) : (t(), a("span", pt)),
        K(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bt = /* @__PURE__ */ W(yt, [["__scopeId", "data-v-c3875efc"]]), wt = ["title"], kt = ["width", "height"], _t = /* @__PURE__ */ R({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), a("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (n) => l.$emit("click"))
    }, [
      (t(), a("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
        o("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        o("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, kt))
    ], 8, wt));
  }
}), $t = /* @__PURE__ */ W(_t, [["__scopeId", "data-v-6fc7f16d"]]), xt = { class: "header-left" }, Ct = {
  key: 0,
  class: "header-actions"
}, St = /* @__PURE__ */ R({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (l, s) => (t(), a("div", {
      class: U(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", xt, [
        k(bt, { "show-prefix": e.showPrefix }, {
          default: i(() => [
            b(r(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), $($t, {
          key: 0,
          onClick: s[0] || (s[0] = (n) => l.$emit("info-click"))
        })) : d("", !0)
      ]),
      l.$slots.actions ? (t(), a("div", Ct, [
        K(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), De = /* @__PURE__ */ W(St, [["__scopeId", "data-v-55a62cd6"]]), Et = {
  key: 0,
  class: "section-title-count"
}, It = {
  key: 1,
  class: "section-title-icon"
}, zt = /* @__PURE__ */ R({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), $(Te(`h${e.level}`), {
      class: U(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (n) => e.clickable && l.$emit("click"))
    }, {
      default: i(() => [
        K(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), a("span", Et, "(" + r(e.count) + ")", 1)) : d("", !0),
        e.clickable ? (t(), a("span", It, r(e.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Me = /* @__PURE__ */ W(zt, [["__scopeId", "data-v-559361eb"]]), Lt = { class: "status-grid" }, Mt = { class: "status-grid__column" }, Bt = { class: "status-grid__title" }, Tt = { class: "status-grid__column status-grid__column--right" }, Ot = { class: "status-grid__title" }, Dt = /* @__PURE__ */ R({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, s) => (t(), a("div", Lt, [
      o("div", Mt, [
        o("h4", Bt, r(e.leftTitle), 1),
        K(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Tt, [
        o("h4", Ot, r(e.rightTitle), 1),
        K(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Nt = /* @__PURE__ */ W(Dt, [["__scopeId", "data-v-fe556068"]]), Rt = {
  key: 0,
  class: "status-item__icon"
}, Wt = {
  key: 1,
  class: "status-item__count"
}, At = { class: "status-item__label" }, Ut = /* @__PURE__ */ R({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, s = V(() => `status-item--${l.variant}`);
    return (n, y) => (t(), a("div", {
      class: U(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), a("span", Rt, r(e.icon), 1)) : d("", !0),
      e.count !== void 0 ? (t(), a("span", Wt, r(e.count), 1)) : d("", !0),
      o("span", At, r(e.label), 1)
    ], 2));
  }
}), ue = /* @__PURE__ */ W(Ut, [["__scopeId", "data-v-6f929183"]]), Vt = { class: "issue-card__header" }, Pt = { class: "issue-card__icon" }, Ht = { class: "issue-card__title" }, Gt = {
  key: 0,
  class: "issue-card__content"
}, Ft = {
  key: 0,
  class: "issue-card__description"
}, Kt = {
  key: 1,
  class: "issue-card__items"
}, jt = {
  key: 2,
  class: "issue-card__actions"
}, qt = /* @__PURE__ */ R({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, s = V(() => `issue-card--${l.severity}`);
    return (n, y) => (t(), a("div", {
      class: U(["issue-card", s.value])
    }, [
      o("div", Vt, [
        o("span", Pt, r(e.icon), 1),
        o("h4", Ht, r(e.title), 1)
      ]),
      n.$slots.default || e.description ? (t(), a("div", Gt, [
        e.description ? (t(), a("p", Ft, r(e.description), 1)) : d("", !0),
        K(n.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      e.items && e.items.length ? (t(), a("div", Kt, [
        (t(!0), a(P, null, q(e.items, (C, f) => (t(), a("div", {
          key: f,
          class: "issue-card__item"
        }, [
          y[0] || (y[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, r(C), 1)
        ]))), 128))
      ])) : d("", !0),
      n.$slots.actions ? (t(), a("div", jt, [
        K(n.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ze = /* @__PURE__ */ W(qt, [["__scopeId", "data-v-df6aa348"]]), Yt = ["type", "disabled"], Zt = {
  key: 0,
  class: "spinner"
}, Xt = /* @__PURE__ */ R({
  __name: "ActionButton",
  props: {
    variant: { default: "primary" },
    size: { default: "sm" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: U(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (n) => l.$emit("click", n))
    }, [
      e.loading ? (t(), a("span", Zt)) : d("", !0),
      e.loading ? d("", !0) : K(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Yt));
  }
}), Y = /* @__PURE__ */ W(Xt, [["__scopeId", "data-v-772abe47"]]), Jt = { class: "empty-state" }, Qt = {
  key: 0,
  class: "empty-icon"
}, eo = { class: "empty-message" }, to = /* @__PURE__ */ R({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, s) => (t(), a("div", Jt, [
      e.icon ? (t(), a("div", Qt, r(e.icon), 1)) : d("", !0),
      o("p", eo, r(e.message), 1),
      e.actionLabel ? (t(), $(Y, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (n) => l.$emit("action"))
      }, {
        default: i(() => [
          b(r(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Ne = /* @__PURE__ */ W(to, [["__scopeId", "data-v-4466284f"]]), oo = { class: "branch-indicator" }, ao = { class: "branch-indicator__info" }, so = { class: "branch-indicator__label" }, no = { class: "branch-indicator__name" }, lo = {
  key: 0,
  class: "branch-indicator__remote"
}, ro = {
  key: 0,
  class: "branch-indicator__status"
}, io = {
  key: 0,
  class: "branch-indicator__ahead"
}, co = {
  key: 1,
  class: "branch-indicator__behind"
}, uo = {
  key: 1,
  class: "branch-indicator__actions"
}, mo = /* @__PURE__ */ R({
  __name: "BranchIndicator",
  props: {
    label: { default: "Current Branch" },
    branchName: {},
    remote: {},
    commitsAhead: {},
    commitsBehind: {},
    showStatus: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), a("div", oo, [
      o("div", ao, [
        o("span", so, r(e.label), 1),
        o("span", no, r(e.branchName), 1),
        e.remote ? (t(), a("span", lo, "@" + r(e.remote), 1)) : d("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), a("div", ro, [
        e.commitsAhead ? (t(), a("span", io, " ↑ " + r(e.commitsAhead) + " ahead ", 1)) : d("", !0),
        e.commitsBehind ? (t(), a("span", co, " ↓ " + r(e.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      l.$slots.actions ? (t(), a("div", uo, [
        K(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), go = /* @__PURE__ */ W(mo, [["__scopeId", "data-v-cb8dd50e"]]), ho = { style: { "margin-top": "var(--cg-space-1)" } }, fo = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, vo = /* @__PURE__ */ R({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const s = e, n = V(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), y = V(() => {
      const m = s.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), C = V(() => {
      const m = s.status.git_changes, p = s.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && p.new.length === 0 && p.modified.length === 0 && p.deleted.length === 0;
    }), f = V(() => s.status.missing_models_count > 0 || y.value || !s.status.comparison.is_synced), _ = V(() => {
      const m = [];
      return s.status.workflows.new.length > 0 && m.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && m.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && m.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && m.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && m.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${m.length > 0 ? m.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (m, p) => (t(), $(Oe, null, {
      header: i(() => [
        k(De, {
          title: "STATUS",
          "show-prefix": !0
        })
      ]),
      content: i(() => [
        k(Me, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: i(() => [...p[7] || (p[7] = [
            b(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        k(Nt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: i(() => [
            e.status.workflows.new.length ? (t(), $(ue, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.modified.length ? (t(), $(ue, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.deleted.length ? (t(), $(ue, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : d("", !0),
            k(ue, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: n.value
            }, null, 8, ["count", "separator"])
          ]),
          right: i(() => [
            e.status.git_changes.nodes_added.length ? (t(), $(ue, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : d("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), $(ue, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : d("", !0),
            C.value ? (t(), $(ue, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : d("", !0),
            y.value ? d("", !0) : (t(), $(ue, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", ho, [
          k(go, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: i(() => [
              k(Y, {
                variant: "secondary",
                size: "sm",
                onClick: p[0] || (p[0] = (S) => m.$emit("switch-branch"))
              }, {
                default: i(() => [...p[8] || (p[8] = [
                  b(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        f.value ? (t(), a("div", fo, [
          k(Me, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: i(() => [...p[9] || (p[9] = [
              b(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), $(ze, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: i(() => [
              k(Y, {
                variant: "secondary",
                size: "sm",
                onClick: p[1] || (p[1] = (S) => m.$emit("view-workflows"))
              }, {
                default: i(() => [...p[10] || (p[10] = [
                  b(" View Details ", -1)
                ])]),
                _: 1
              }),
              k(Y, {
                variant: "primary",
                size: "sm",
                onClick: p[2] || (p[2] = (S) => m.$emit("resolve-models"))
              }, {
                default: i(() => [...p[11] || (p[11] = [
                  b(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : d("", !0),
          y.value ? (t(), $(ze, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: _.value
          }, {
            actions: i(() => [
              k(Y, {
                variant: "secondary",
                size: "sm",
                onClick: p[3] || (p[3] = (S) => m.$emit("view-history"))
              }, {
                default: i(() => [...p[12] || (p[12] = [
                  b(" View Changes ", -1)
                ])]),
                _: 1
              }),
              k(Y, {
                variant: "primary",
                size: "sm",
                onClick: p[4] || (p[4] = (S) => m.$emit("commit-changes"))
              }, {
                default: i(() => [...p[13] || (p[13] = [
                  b(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : d("", !0),
          e.status.comparison.is_synced ? d("", !0) : (t(), $(ze, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: i(() => [
              k(Y, {
                variant: "secondary",
                size: "sm",
                onClick: p[5] || (p[5] = (S) => m.$emit("view-debug"))
              }, {
                default: i(() => [...p[14] || (p[14] = [
                  b(" View Logs ", -1)
                ])]),
                _: 1
              }),
              k(Y, {
                variant: "primary",
                size: "sm",
                onClick: p[6] || (p[6] = (S) => m.$emit("sync-environment"))
              }, {
                default: i(() => [...p[15] || (p[15] = [
                  b(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : d("", !0),
        !f.value && !y.value ? (t(), $(Ne, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : d("", !0)
      ]),
      _: 1
    }));
  }
}), po = /* @__PURE__ */ W(vo, [["__scopeId", "data-v-5edb903c"]]), yo = { class: "branch-section" }, bo = { class: "section-header" }, wo = {
  key: 0,
  class: "create-branch-row"
}, ko = ["disabled"], _o = {
  key: 1,
  class: "empty"
}, $o = {
  key: 2,
  class: "branch-list"
}, xo = { class: "branch-indicator" }, Co = { class: "branch-name" }, So = ["onClick"], Eo = {
  key: 1,
  class: "current-label"
}, Io = /* @__PURE__ */ R({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const s = l, n = E(!1), y = E(""), C = E(null);
    function f() {
      y.value.trim() && (s("create", y.value.trim()), _());
    }
    function _() {
      n.value = !1, y.value = "";
    }
    return rt(() => {
      n.value && C.value && C.value.focus();
    }), (m, p) => (t(), a("div", yo, [
      o("div", bo, [
        p[3] || (p[3] = o("h3", { class: "view-title" }, "BRANCHES", -1)),
        o("button", {
          class: "add-btn",
          onClick: p[0] || (p[0] = (S) => n.value = !0),
          title: "New Branch"
        }, [...p[2] || (p[2] = [
          o("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            o("path", {
              d: "M8 2v12M2 8h12",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none"
            })
          ], -1)
        ])])
      ]),
      n.value ? (t(), a("div", wo, [
        Ve(o("input", {
          ref_key: "createInput",
          ref: C,
          "onUpdate:modelValue": p[1] || (p[1] = (S) => y.value = S),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            $e(f, ["enter"]),
            $e(_, ["escape"])
          ]
        }, null, 544), [
          [Pe, y.value]
        ]),
        o("button", {
          class: "action-btn create",
          onClick: f,
          disabled: !y.value.trim()
        }, " Create ", 8, ko),
        o("button", {
          class: "action-btn cancel",
          onClick: _
        }, " Cancel ")
      ])) : d("", !0),
      e.branches.length === 0 ? (t(), a("div", _o, " No branches found ")) : (t(), a("div", $o, [
        (t(!0), a(P, null, q(e.branches, (S) => (t(), a("div", {
          key: S.name,
          class: U(["branch-item", { current: S.is_current }])
        }, [
          o("span", xo, r(S.is_current ? "●" : "○"), 1),
          o("span", Co, r(S.name), 1),
          S.is_current ? (t(), a("span", Eo, "current")) : (t(), a("button", {
            key: 0,
            class: "switch-btn",
            onClick: (v) => m.$emit("switch", S.name)
          }, " Switch ", 8, So))
        ], 2))), 128))
      ]))
    ]));
  }
}), zo = /* @__PURE__ */ W(Io, [["__scopeId", "data-v-e2bd816d"]]), Lo = { class: "history-section" }, Mo = {
  key: 0,
  class: "empty"
}, Bo = {
  key: 1,
  class: "commit-list"
}, To = ["onClick"], Oo = { class: "commit-hash" }, Do = { class: "commit-message" }, No = { class: "commit-date" }, Ro = ["onClick"], Wo = /* @__PURE__ */ R({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, s) => (t(), a("div", Lo, [
      s[2] || (s[2] = o("h3", { class: "view-title" }, "HISTORY", -1)),
      e.commits.length === 0 ? (t(), a("div", Mo, " No commits yet ")) : (t(), a("div", Bo, [
        (t(!0), a(P, null, q(e.commits, (n) => {
          var y;
          return t(), a("div", {
            key: n.hash,
            class: "commit-item",
            onClick: (C) => l.$emit("select", n)
          }, [
            o("span", Oo, r(n.short_hash || ((y = n.hash) == null ? void 0 : y.slice(0, 7))), 1),
            o("span", Do, r(n.message), 1),
            o("span", No, r(n.date_relative || n.relative_date), 1),
            o("div", {
              class: "commit-actions",
              onClick: s[0] || (s[0] = be(() => {
              }, ["stop"]))
            }, [
              o("button", {
                class: "action-btn",
                onClick: (C) => l.$emit("checkout", n),
                title: "Checkout this commit"
              }, [...s[1] || (s[1] = [
                o("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                ], -1)
              ])], 8, Ro)
            ])
          ], 8, To);
        }), 128))
      ]))
    ]));
  }
}), Ao = /* @__PURE__ */ W(Wo, [["__scopeId", "data-v-97388106"]]), Ue = [
  // BROKEN workflows (3) - Missing dependencies
  {
    name: "flux-dev-img2img.json",
    status: "broken",
    missing_nodes: 2,
    missing_models: 1,
    node_count: 12,
    model_count: 3,
    sync_state: "synced"
    // Git status vs dependency status
  },
  {
    name: "sdxl-lightning.json",
    status: "broken",
    missing_nodes: 1,
    missing_models: 2,
    node_count: 8,
    model_count: 2,
    sync_state: "synced"
  },
  {
    name: "sd15-upscale.json",
    status: "broken",
    missing_nodes: 3,
    missing_models: 0,
    node_count: 15,
    model_count: 4,
    sync_state: "modified"
    // Modified AND broken
  },
  // NEW workflows (2) - Untracked
  {
    name: "img2img-basic.json",
    status: "new",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 6,
    model_count: 1,
    sync_state: "new"
  },
  {
    name: "controlnet-pose.json",
    status: "new",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 10,
    model_count: 2,
    sync_state: "new"
  },
  // MODIFIED workflows (1) - Changed since last commit
  {
    name: "flux-schnell.json",
    status: "modified",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 9,
    model_count: 2,
    sync_state: "modified"
  },
  // SYNCED workflows (12) - All good
  ...Array(12).fill(null).map((e, l) => ({
    name: `synced-workflow-${l + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + l,
    model_count: 1 + l % 3,
    sync_state: "synced"
  }))
], Uo = {
  "flux-dev-img2img.json": {
    name: "flux-dev-img2img.json",
    status: "broken",
    // Nodes based on NodeInfo structure (lines 1833-1858)
    nodes: [
      {
        name: "comfyui_flux",
        installed: !0,
        registry_id: "comfyui_flux",
        repository: "https://github.com/black-forest-labs/flux",
        version: "1.2.0",
        source: "registry",
        download_url: null
      },
      {
        name: "rgthree-comfy",
        installed: !1,
        registry_id: "rgthree-comfy",
        repository: "https://github.com/rgthree/rgthree-comfy",
        version: null,
        // Not installed
        source: "registry",
        download_url: "https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip"
      },
      {
        name: "comfyui-image-saver",
        installed: !1,
        registry_id: "comfyui-image-saver",
        repository: "https://github.com/girish946/ComfyUI-Image-Saver",
        version: null,
        source: "registry",
        download_url: "https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip"
      }
    ],
    // Models based on ResolvedModel structure (lines 1805-1827)
    models: [
      {
        filename: "flux1-dev-fp8.safetensors",
        hash: "a11e2e7b",
        // CRC32 hash (Core Library uses CRC32)
        sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab",
        blake3_hash: null,
        status: "available",
        importance: "required",
        size_mb: 11725,
        file_size: 12298780672,
        // bytes
        node_type: "Load Checkpoint",
        node_id: "4",
        relative_path: "checkpoints/flux1-dev-fp8.safetensors",
        category: "checkpoints",
        mtime: Date.now() / 1e3 - 86400 * 7,
        // 7 days ago
        metadata: {
          model_type: "checkpoint",
          base_model: "FLUX.1-dev",
          format: "fp8"
        }
      },
      {
        filename: "flux_vae.safetensors",
        hash: "d21a4f89",
        // CRC32
        sha256_hash: "d21a4f89d0c1e2f3456789abcdef01234567890abcdef1234567890abcdef012",
        blake3_hash: null,
        status: "missing",
        importance: "required",
        size_mb: 335,
        file_size: 351272960,
        // bytes
        node_type: "VAELoader",
        node_id: "10",
        relative_path: "vae/flux_vae.safetensors",
        category: "vae",
        mtime: null,
        // Not present
        metadata: {}
      },
      {
        filename: "clip_l.safetensors",
        hash: "3e9f12a7",
        // CRC32
        sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1",
        blake3_hash: null,
        status: "available",
        importance: "flexible",
        size_mb: 246,
        file_size: 257949696,
        // bytes
        node_type: "DualCLIPLoader",
        node_id: "11",
        relative_path: "clip/clip_l.safetensors",
        category: "clip",
        mtime: Date.now() / 1e3 - 86400 * 14,
        // 14 days ago
        metadata: {
          model_type: "clip",
          clip_type: "clip_l"
        }
      }
    ]
  }
}, je = [
  {
    filename: "flux1-dev-fp8.safetensors",
    hash: "a11e2e7b",
    // CRC32 hash (8 chars)
    sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab",
    blake3_hash: null,
    type: "checkpoints",
    category: "checkpoints",
    size_mb: 11725,
    file_size: 12298780672,
    // bytes
    relative_path: "checkpoints/flux1-dev-fp8.safetensors",
    mtime: Date.now() / 1e3 - 86400 * 7,
    // 7 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    // Unix timestamp
    base_directory: "/workspace/models",
    used_by: ["flux-dev-img2img.json", "flux-schnell.json"],
    sources: ["https://civitai.com/api/download/models/flux1-dev"],
    metadata: {
      model_type: "checkpoint",
      base_model: "FLUX.1-dev",
      format: "fp8"
    }
  },
  {
    filename: "sd_xl_base_1.0.safetensors",
    hash: "b22f3f8c",
    // CRC32
    sha256_hash: "b22f3f8c90d1e2f3456789abcdef01234567890abcdef1234567890abcdef012",
    blake3_hash: null,
    type: "checkpoints",
    category: "checkpoints",
    size_mb: 6938,
    file_size: 7275159552,
    // bytes
    relative_path: "checkpoints/sd_xl_base_1.0.safetensors",
    mtime: Date.now() / 1e3 - 86400 * 30,
    // 30 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    base_directory: "/workspace/models",
    used_by: ["sdxl-lightning.json"],
    sources: ["https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors"],
    metadata: {
      model_type: "checkpoint",
      base_model: "SDXL",
      version: "1.0"
    }
  },
  {
    filename: "clip_l.safetensors",
    hash: "3e9f12a7",
    // CRC32
    sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1",
    blake3_hash: null,
    type: "clip",
    category: "clip",
    size_mb: 246,
    file_size: 257949696,
    // bytes
    relative_path: "clip/clip_l.safetensors",
    mtime: Date.now() / 1e3 - 86400 * 14,
    // 14 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    base_directory: "/workspace/models",
    used_by: ["flux-dev-img2img.json", "flux-schnell.json"],
    sources: [],
    // No source URL configured
    metadata: {
      model_type: "clip",
      clip_type: "clip_l"
    }
  }
], Vo = [
  ...je,
  {
    filename: "v1-5-pruned.ckpt",
    hash: "c33g4g9d",
    // CRC32
    sha256_hash: "c33g4g9d91e2f3456789abcdef01234567890abcdef1234567890abcdef01234",
    blake3_hash: null,
    type: "checkpoints",
    category: "checkpoints",
    size_mb: 4265,
    file_size: 4472033280,
    // bytes
    relative_path: "checkpoints/v1-5-pruned.ckpt",
    mtime: Date.now() / 1e3 - 86400 * 60,
    // 60 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    base_directory: "/workspace/models",
    used_by: [],
    // Unused model
    sources: ["https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned.ckpt"],
    metadata: {
      model_type: "checkpoint",
      base_model: "SD1.5",
      version: "1.5"
    }
  },
  {
    filename: "controlnet_openpose.safetensors",
    hash: "d44h5h0e",
    // CRC32
    sha256_hash: "d44h5h0e02f3456789abcdef01234567890abcdef1234567890abcdef01234567",
    blake3_hash: null,
    type: "controlnet",
    category: "controlnet",
    size_mb: 1450,
    file_size: 1520435200,
    // bytes
    relative_path: "controlnet/controlnet_openpose.safetensors",
    mtime: Date.now() / 1e3 - 86400 * 45,
    // 45 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    base_directory: "/workspace/models",
    used_by: [],
    // Unused model
    sources: ["https://huggingface.co/lllyasviel/ControlNet/resolve/main/models/control_openpose-fp16.safetensors"],
    metadata: {
      model_type: "controlnet",
      controlnet_type: "openpose"
    }
  }
], Po = [
  {
    hash: "e719c9c",
    message: "refactor: Improve UI consistency and fix display issues",
    author: "Alex Katz",
    date: "2024-01-15T10:30:00Z",
    date_relative: "5 days ago"
  },
  {
    hash: "781a023",
    message: "refactor: Remove multi-theme system, commit to Phosphor Terminal aesthetic",
    author: "Alex Katz",
    date: "2024-01-14T15:20:00Z",
    date_relative: "6 days ago"
  },
  {
    hash: "19f7898",
    message: "Merge branch 'design/phosphor' into feature/comfygit-ui",
    author: "Alex Katz",
    date: "2024-01-13T09:15:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "426fe3c",
    message: "Merge branch 'feature/comfygit-ui' into main",
    author: "Alex Katz",
    date: "2024-01-12T14:45:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "8c21deb",
    message: "Add initial agpl 3 license",
    author: "Alex Katz",
    date: "2024-01-10T11:00:00Z",
    date_relative: "2 weeks ago"
  }
], Ce = [
  {
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: "info",
    message: "Environment synced successfully",
    context: { duration_ms: 2340 }
  },
  {
    timestamp: new Date(Date.now() - 6e4).toISOString(),
    level: "warning",
    message: "Model not found in index: flux_vae.safetensors",
    context: { workflow: "flux-dev-img2img.json" }
  },
  {
    timestamp: new Date(Date.now() - 12e4).toISOString(),
    level: "error",
    message: "Failed to install node: rgthree-comfy",
    context: { error: "Connection timeout" }
  },
  {
    timestamp: new Date(Date.now() - 18e4).toISOString(),
    level: "debug",
    message: "Resolving workflow dependencies",
    context: { workflow: "sdxl-lightning.json", node_count: 8 }
  }
], J = {
  // Environment Management
  getEnvironments: async () => (await Q(300), [
    {
      name: "production",
      is_current: !0,
      path: "~/comfygit/environments/production",
      workflow_count: 18,
      node_count: 45,
      model_count: 3,
      current_branch: "main",
      created_at: "2024-01-01T00:00:00Z",
      last_used: (/* @__PURE__ */ new Date()).toISOString(),
      last_commit: "e719c9c",
      last_commit_date: "2024-01-15T10:30:00Z"
    },
    {
      name: "testing",
      is_current: !1,
      path: "~/comfygit/environments/testing",
      workflow_count: 12,
      node_count: 32,
      model_count: 2,
      current_branch: "develop",
      created_at: "2024-01-05T00:00:00Z",
      last_used: new Date(Date.now() - 864e5 * 2).toISOString(),
      // 2 days ago
      last_commit: "426fe3c",
      last_commit_date: "2024-01-12T14:45:00Z"
    },
    {
      name: "experimental",
      is_current: !1,
      path: "~/comfygit/environments/experimental",
      workflow_count: 5,
      node_count: 18,
      model_count: 1,
      current_branch: "feature/new-nodes",
      created_at: "2024-01-10T00:00:00Z",
      last_used: new Date(Date.now() - 864e5).toISOString(),
      // 1 day ago
      last_commit: "781a023",
      last_commit_date: "2024-01-14T15:20:00Z"
    }
  ]),
  switchEnvironment: async (e) => {
    await Q(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, l, s) => {
    await Q(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${l}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await Q(400), Ue),
  getWorkflowDetails: async (e) => (await Q(300), Uo[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await Q(800), {
    workflow_name: e,
    // Nodes resolved with confidence scores
    nodes_resolved: [
      {
        node_type: "ComfyUI-Flux",
        match_type: "exact",
        package_id: "comfyui_flux",
        match_confidence: 1,
        is_optional: !1,
        rank: 5,
        // Registry popularity
        versions: ["1.2.0", "1.1.0", "1.0.0"]
      }
    ],
    // Nodes that need installation
    nodes_unresolved: [
      {
        node_type: "RgthreeNodeSet",
        possible_matches: [
          {
            package_id: "rgthree-comfy",
            match_type: "fuzzy",
            match_confidence: 0.85,
            rank: 12
          }
        ]
      },
      {
        node_type: "ImageSaver",
        possible_matches: [
          {
            package_id: "comfyui-image-saver",
            match_type: "type_only",
            match_confidence: 0.7,
            rank: 45
          }
        ]
      }
    ],
    nodes_ambiguous: [],
    // Multiple equally-matched candidates
    // Models resolved
    models_resolved: [
      {
        workflow: e,
        filename: "flux1-dev-fp8.safetensors",
        resolved_model: {
          hash: "a11e2e7b",
          sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      },
      {
        workflow: e,
        filename: "clip_l.safetensors",
        resolved_model: {
          hash: "3e9f12a7",
          sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      }
    ],
    // Models that need downloading
    models_unresolved: [
      {
        workflow: e,
        filename: "flux_vae.safetensors",
        node_type: "VAELoader",
        node_id: "10",
        expected_category: "vae"
      }
    ],
    models_ambiguous: [],
    // Multiple models match same name
    // Download intents (models queued for download)
    download_results: [
      {
        model: "flux_vae.safetensors",
        status: "pending",
        source_url: null,
        // No source configured
        can_download: !1,
        estimated_size_mb: 335
      }
    ],
    // Summary fields
    has_issues: !0,
    // Has unresolved nodes and models
    has_download_intents: !0,
    summary: "Missing: 2 nodes, 1 model",
    // Installation plan preview
    nodes_to_install: ["rgthree-comfy", "comfyui-image-saver"],
    models_to_download: ["flux_vae.safetensors"],
    estimated_size_mb: 335,
    estimated_time_seconds: 120
  }),
  installWorkflowDeps: async (e, l, s) => {
    await Q(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${l}, models=${s}`);
  },
  setModelImportance: async (e, l, s) => {
    await Q(200), console.log(`[MOCK] Setting ${l} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await Q(350), je),
  getWorkspaceModels: async () => (await Q(400), Vo),
  updateModelSource: async (e, l) => {
    await Q(300), console.log(`[MOCK] Updating source for ${e}: ${l}`);
  },
  deleteModel: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await Q(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Settings & Debug
  getConfig: async () => (await Q(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (e) => {
    await Q(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, l) => (await Q(250), (e ? Ce.filter((n) => n.level === e) : Ce).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await Q(300);
    const s = [...Ce, ...Ce.map((y) => ({
      ...y,
      context: { ...y.context, environment: "testing" }
    }))];
    return (e ? s.filter((y) => y.level === e) : s).slice(0, l || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await Q(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: Ue.filter((e) => e.status === "synced").map((e) => e.name),
      total: 18
    },
    git_changes: {
      nodes_added: [],
      nodes_removed: [],
      workflow_changes: !1,
      has_other_changes: !1
    },
    comparison: {
      is_synced: !1,
      missing_nodes: ["rgthree-comfy", "comfyui-image-saver"],
      extra_nodes: []
    },
    missing_models_count: 1
  }),
  getCommitHistory: async (e = 10) => (await Q(300), Po.slice(0, e)),
  getBranches: async () => (await Q(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function Q(e) {
  return new Promise((l) => setTimeout(l, e));
}
function ge() {
  const e = E(!1), l = E(null);
  async function s(M, j) {
    var we;
    if (!((we = window.app) != null && we.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(M, j);
    if (!se.ok) {
      const xe = await se.json().catch(() => ({}));
      throw new Error(xe.error || xe.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function n() {
    return J.getStatus();
  }
  async function y(M, j = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: M, allow_issues: j })
    });
  }
  async function C(M = 10, j = 0) {
    {
      const se = await J.getCommitHistory(M);
      return {
        commits: se,
        total: se.length,
        offset: j
      };
    }
  }
  async function f(M) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: M })
    });
  }
  async function _() {
    return J.getBranches();
  }
  async function m(M) {
    return s(`/v2/comfygit/commit/${M}`);
  }
  async function p(M, j = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: M, force: j })
    });
  }
  async function S(M, j = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: M, start_point: j })
    });
  }
  async function v(M, j = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: M, force: j })
    });
  }
  async function D() {
    return J.getEnvironments();
  }
  async function G(M) {
    return J.switchEnvironment(M);
  }
  async function ee() {
    return null;
  }
  async function F(M, j, se) {
    return await J.createEnvironment(M, j, se), { status: "success" };
  }
  async function z(M) {
    return await J.deleteEnvironment(M), { status: "success" };
  }
  async function O() {
    return J.getWorkflows();
  }
  async function Z(M) {
    return J.getWorkflowDetails(M);
  }
  async function te(M) {
    return J.resolveWorkflow(M);
  }
  async function B(M, j, se) {
    return await J.installWorkflowDeps(M, j, se), { status: "success" };
  }
  async function L(M, j, se) {
    return J.setModelImportance(M, j, se);
  }
  async function h() {
    return J.getEnvironmentModels();
  }
  async function g() {
    return J.getWorkspaceModels();
  }
  async function u(M, j) {
    return J.updateModelSource(M, j);
  }
  async function w(M) {
    return J.deleteModel(M);
  }
  async function x(M) {
    return await J.downloadModel(M), { status: "success" };
  }
  async function A() {
    return J.getConfig();
  }
  async function T(M) {
    return J.updateConfig(M);
  }
  async function H(M, j) {
    return J.getEnvironmentLogs(M, j);
  }
  async function de(M, j) {
    return J.getWorkspaceLogs(M, j);
  }
  return {
    isLoading: e,
    error: l,
    getStatus: n,
    commit: y,
    getHistory: C,
    exportEnv: f,
    // Git Operations
    getBranches: _,
    getCommitDetail: m,
    checkout: p,
    createBranch: S,
    switchBranch: v,
    // Environment Management
    getEnvironments: D,
    switchEnvironment: G,
    getSwitchProgress: ee,
    createEnvironment: F,
    deleteEnvironment: z,
    // Workflow Management
    getWorkflows: O,
    getWorkflowDetails: Z,
    resolveWorkflow: te,
    installWorkflowDeps: B,
    setModelImportance: L,
    // Model Management
    getEnvironmentModels: h,
    getWorkspaceModels: g,
    updateModelSource: u,
    deleteModel: w,
    downloadModel: x,
    // Settings
    getConfig: A,
    updateConfig: T,
    // Debug/Logs
    getEnvironmentLogs: H,
    getWorkspaceLogs: de
  };
}
const Ho = { class: "base-modal-header" }, Go = {
  key: 0,
  class: "base-modal-title"
}, Fo = { class: "base-modal-body" }, Ko = {
  key: 0,
  class: "base-modal-loading"
}, jo = {
  key: 1,
  class: "base-modal-error"
}, qo = {
  key: 0,
  class: "base-modal-footer"
}, Yo = /* @__PURE__ */ R({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const s = e, n = l;
    function y() {
      s.closeOnOverlayClick && n("close");
    }
    function C(f) {
      f.key === "Escape" && n("close");
    }
    return ce(() => {
      document.addEventListener("keydown", C), document.body.style.overflow = "hidden";
    }), it(() => {
      document.removeEventListener("keydown", C), document.body.style.overflow = "";
    }), (f, _) => (t(), $(He, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: y
      }, [
        o("div", {
          class: U(["base-modal-content", e.size]),
          onClick: _[1] || (_[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", Ho, [
            K(f.$slots, "header", {}, () => [
              e.title ? (t(), a("h3", Go, r(e.title), 1)) : d("", !0)
            ], !0),
            e.showCloseButton ? (t(), a("button", {
              key: 0,
              class: "base-modal-close",
              onClick: _[0] || (_[0] = (m) => f.$emit("close"))
            }, [..._[2] || (_[2] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : d("", !0)
          ]),
          o("div", Fo, [
            e.loading ? (t(), a("div", Ko, "Loading...")) : e.error ? (t(), a("div", jo, r(e.error), 1)) : K(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (t(), a("div", qo, [
            K(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ee = /* @__PURE__ */ W(Yo, [["__scopeId", "data-v-700d367b"]]), Zo = ["type", "disabled"], Xo = {
  key: 0,
  class: "spinner"
}, Jo = /* @__PURE__ */ R({
  __name: "BaseButton",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: U(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (n) => l.$emit("click", n))
    }, [
      e.loading ? (t(), a("span", Xo)) : d("", !0),
      K(l.$slots, "default", {}, void 0, !0)
    ], 10, Zo));
  }
}), ne = /* @__PURE__ */ W(Jo, [["__scopeId", "data-v-f3452606"]]), Qo = {
  key: 0,
  class: "base-title-count"
}, ea = /* @__PURE__ */ R({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, s) => (t(), $(Te(`h${e.level}`), {
      class: U(["base-title", e.variant])
    }, {
      default: i(() => [
        K(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), a("span", Qo, "(" + r(e.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), me = /* @__PURE__ */ W(ea, [["__scopeId", "data-v-5a01561d"]]), ta = ["value", "disabled"], oa = {
  key: 0,
  value: "",
  disabled: ""
}, aa = ["value"], sa = {
  key: 0,
  class: "base-select-error"
}, na = /* @__PURE__ */ R({
  __name: "BaseSelect",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {},
    fullWidth: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    function l(n) {
      return typeof n == "string" ? n : n.value;
    }
    function s(n) {
      return typeof n == "string" ? n : n.label;
    }
    return (n, y) => (t(), a("div", {
      class: U(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: U(["base-select", { error: !!e.error }]),
        onChange: y[0] || (y[0] = (C) => n.$emit("update:modelValue", C.target.value))
      }, [
        e.placeholder ? (t(), a("option", oa, r(e.placeholder), 1)) : d("", !0),
        (t(!0), a(P, null, q(e.options, (C) => (t(), a("option", {
          key: l(C),
          value: l(C)
        }, r(s(C)), 9, aa))), 128))
      ], 42, ta),
      e.error ? (t(), a("span", sa, r(e.error), 1)) : d("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ W(na, [["__scopeId", "data-v-7436d745"]]), ra = { class: "detail-section" }, ia = {
  key: 0,
  class: "empty-message"
}, ca = { class: "model-header" }, da = { class: "model-name" }, ua = { class: "model-details" }, ma = { class: "model-row" }, ga = { class: "model-row" }, ha = {
  key: 0,
  class: "model-row"
}, fa = { class: "value" }, va = {
  key: 1,
  class: "model-row"
}, pa = { class: "value" }, ya = {
  key: 0,
  class: "model-actions"
}, ba = { class: "detail-section" }, wa = {
  key: 0,
  class: "empty-message"
}, ka = { class: "node-name" }, _a = {
  key: 0,
  class: "node-version"
}, $a = /* @__PURE__ */ R({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const s = e, n = l, { getWorkflowDetails: y, setModelImportance: C } = ge(), f = E(null), _ = E(!1), m = E(null), p = E(!1), S = E({}), v = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function D() {
      _.value = !0, m.value = null;
      try {
        f.value = await y(s.workflowName);
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to load workflow details";
      } finally {
        _.value = !1;
      }
    }
    function G(F, z) {
      S.value[F] = z, p.value = !0;
    }
    async function ee() {
      if (!p.value) {
        n("close");
        return;
      }
      _.value = !0, m.value = null;
      try {
        for (const [F, z] of Object.entries(S.value))
          await C(s.workflowName, F, z);
        n("close");
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to save changes";
      } finally {
        _.value = !1;
      }
    }
    return ce(D), (F, z) => (t(), $(Ee, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: _.value,
      error: m.value || void 0,
      onClose: z[2] || (z[2] = (O) => n("close"))
    }, {
      body: i(() => [
        f.value ? (t(), a(P, { key: 0 }, [
          o("section", ra, [
            k(me, { variant: "section" }, {
              default: i(() => [
                b("MODELS USED (" + r(f.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.models.length === 0 ? (t(), a("div", ia, " No models used in this workflow ")) : d("", !0),
            (t(!0), a(P, null, q(f.value.models, (O) => (t(), a("div", {
              key: O.hash,
              class: "model-card"
            }, [
              o("div", ca, [
                z[3] || (z[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", da, r(O.filename), 1)
              ]),
              o("div", ua, [
                o("div", ma, [
                  z[4] || (z[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: U(["value", O.status === "available" ? "success" : "error"])
                  }, r(O.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", ga, [
                  z[5] || (z[5] = o("span", { class: "label" }, "Importance:", -1)),
                  k(la, {
                    "model-value": S.value[O.hash] || O.importance,
                    options: v,
                    "onUpdate:modelValue": (Z) => G(O.hash, Z)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                O.node_type ? (t(), a("div", ha, [
                  z[6] || (z[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", fa, r(O.node_type) + " (Node " + r(O.node_id) + ")", 1)
                ])) : d("", !0),
                O.size_mb ? (t(), a("div", va, [
                  z[7] || (z[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", pa, r(O.size_mb) + " MB", 1)
                ])) : d("", !0)
              ]),
              O.status === "missing" ? (t(), a("div", ya, [
                k(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[0] || (z[0] = (Z) => n("resolve"))
                }, {
                  default: i(() => [...z[8] || (z[8] = [
                    b(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : d("", !0)
            ]))), 128))
          ]),
          z[9] || (z[9] = o("div", { class: "info-box" }, [
            o("div", { class: "info-title" }, "Importance options:"),
            o("ul", { class: "info-list" }, [
              o("li", null, [
                o("strong", null, "Required"),
                b(" — Must have for workflow to run")
              ]),
              o("li", null, [
                o("strong", null, "Flexible"),
                b(" — Workflow adapts if missing")
              ]),
              o("li", null, [
                o("strong", null, "Optional"),
                b(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          o("section", ba, [
            k(me, { variant: "section" }, {
              default: i(() => [
                b("NODES USED (" + r(f.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.nodes.length === 0 ? (t(), a("div", wa, " No custom nodes used in this workflow ")) : d("", !0),
            (t(!0), a(P, null, q(f.value.nodes, (O) => (t(), a("div", {
              key: O.name,
              class: "node-item"
            }, [
              o("span", {
                class: U(["node-status", O.installed ? "installed" : "missing"])
              }, r(O.installed ? "✓" : "✕"), 3),
              o("span", ka, r(O.name), 1),
              O.version ? (t(), a("span", _a, "v" + r(O.version), 1)) : d("", !0)
            ]))), 128))
          ])
        ], 64)) : d("", !0)
      ]),
      footer: i(() => [
        k(ne, {
          variant: "secondary",
          onClick: z[1] || (z[1] = (O) => n("close"))
        }, {
          default: i(() => [...z[10] || (z[10] = [
            b(" Close ", -1)
          ])]),
          _: 1
        }),
        p.value ? (t(), $(ne, {
          key: 0,
          variant: "primary",
          onClick: ee
        }, {
          default: i(() => [...z[11] || (z[11] = [
            b(" Save Changes ", -1)
          ])]),
          _: 1
        })) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), xa = /* @__PURE__ */ W($a, [["__scopeId", "data-v-6ce9a41c"]]), Ca = {
  key: 0,
  class: "resolve-section"
}, Sa = { class: "resolve-card success-card" }, Ea = { class: "items-list" }, Ia = { class: "item-info" }, za = { class: "item-name" }, La = {
  key: 0,
  class: "item-meta"
}, Ma = { class: "match-type" }, Ba = { class: "source" }, Ta = {
  key: 1,
  class: "resolve-section"
}, Oa = { class: "resolve-card warning-card" }, Da = { class: "items-list" }, Na = { class: "item-info" }, Ra = { class: "item-name" }, Wa = { class: "item-meta" }, Aa = { key: 0 }, Ua = { key: 1 }, Va = {
  key: 0,
  class: "item-warning"
}, Pa = {
  key: 0,
  class: "item-action"
}, Ha = ["onClick"], Ga = {
  key: 2,
  class: "resolve-section"
}, Fa = { class: "info-text" }, Ka = { class: "actions-summary" }, ja = { class: "summary-list" }, qa = { key: 0 }, Ya = { key: 1 }, Za = { key: 2 }, Xa = {
  key: 0,
  class: "estimated-size"
}, Ja = /* @__PURE__ */ R({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const s = e, n = l, { resolveWorkflow: y, installWorkflowDeps: C } = ge(), f = E(null), _ = E(!1), m = E(!1), p = E(null), S = V(() => {
      var L;
      return f.value ? ((L = f.value.download_results) == null ? void 0 : L.every((h) => h.can_download)) ?? !1 : !1;
    });
    async function v() {
      _.value = !0, p.value = null;
      try {
        f.value = await y(s.workflowName);
      } catch (L) {
        p.value = L instanceof Error ? L.message : "Failed to analyze workflow";
      } finally {
        _.value = !1;
      }
    }
    function D(L) {
      return !L.possible_matches || L.possible_matches.length === 0 ? null : L.possible_matches.reduce(
        (h, g) => g.match_confidence > h.match_confidence ? g : h
      );
    }
    function G(L) {
      return L >= 0.9 ? "high" : L >= 0.7 ? "medium" : "low";
    }
    function ee(L) {
      const h = D(L);
      return h ? h.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function F(L) {
      var h, g;
      return (g = (h = f.value) == null ? void 0 : h.download_results) == null ? void 0 : g.find((u) => u.model === L);
    }
    function z(L) {
      const h = F(L);
      return (h == null ? void 0 : h.can_download) ?? !1;
    }
    function O(L) {
      const h = F(L);
      return (h == null ? void 0 : h.source_url) || null;
    }
    function Z(L) {
      window.open(L, "_blank");
    }
    async function te() {
      if (!(!f.value || m.value)) {
        m.value = !0, p.value = null;
        try {
          await C(
            s.workflowName,
            f.value.nodes_to_install,
            []
          ), n("install"), n("refresh"), n("close");
        } catch (L) {
          p.value = L instanceof Error ? L.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function B() {
      if (!(!f.value || m.value)) {
        m.value = !0, p.value = null;
        try {
          await C(
            s.workflowName,
            f.value.nodes_to_install,
            f.value.models_to_download
          ), n("install"), n("refresh"), n("close");
        } catch (L) {
          p.value = L instanceof Error ? L.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return ce(v), (L, h) => (t(), $(Ee, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: _.value,
      error: p.value || void 0,
      onClose: h[1] || (h[1] = (g) => n("close"))
    }, {
      body: i(() => [
        f.value ? (t(), a(P, { key: 0 }, [
          h[5] || (h[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          f.value.nodes_unresolved.length > 0 ? (t(), a("section", Ca, [
            k(me, { variant: "section" }, {
              default: i(() => [
                b("NODES (" + r(f.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Sa, [
              h[2] || (h[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Ea, [
                (t(!0), a(P, null, q(f.value.nodes_unresolved, (g) => {
                  var u;
                  return t(), a("div", {
                    key: g.node_type,
                    class: "item"
                  }, [
                    o("div", Ia, [
                      o("div", za, r(((u = D(g)) == null ? void 0 : u.package_id) || g.node_type), 1),
                      D(g) ? (t(), a("div", La, [
                        o("span", {
                          class: U(["confidence-badge", G(D(g).match_confidence)])
                        }, r(Math.round(D(g).match_confidence * 100)) + "% match ", 3),
                        o("span", Ma, r(D(g).match_type), 1),
                        o("span", Ba, "Source: " + r(ee(g)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          f.value.models_unresolved.length > 0 ? (t(), a("section", Ta, [
            k(me, { variant: "section" }, {
              default: i(() => [
                b("MODELS (" + r(f.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Oa, [
              h[3] || (h[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Da, [
                (t(!0), a(P, null, q(f.value.models_unresolved, (g) => (t(), a("div", {
                  key: g.filename,
                  class: "item"
                }, [
                  o("div", Na, [
                    o("div", Ra, r(g.filename), 1),
                    o("div", Wa, [
                      g.expected_category ? (t(), a("span", Aa, "Type: " + r(g.expected_category), 1)) : d("", !0),
                      F(g.filename) ? (t(), a("span", Ua, " Size: ~" + r(F(g.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    z(g.filename) ? d("", !0) : (t(), a("div", Va, " No auto-download source configured "))
                  ]),
                  O(g.filename) ? (t(), a("div", Pa, [
                    o("button", {
                      class: "link-btn",
                      onClick: (u) => Z(O(g.filename))
                    }, " Open Source ↗ ", 8, Ha)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          f.value.nodes_resolved.length > 0 || f.value.models_resolved.length > 0 ? (t(), a("section", Ga, [
            k(me, { variant: "section" }, {
              default: i(() => [
                b(" ALREADY AVAILABLE (" + r(f.value.nodes_resolved.length + f.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", Fa, r(f.value.nodes_resolved.length) + " nodes and " + r(f.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          o("div", Ka, [
            h[4] || (h[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", ja, [
              f.value.nodes_to_install.length ? (t(), a("li", qa, " Install " + r(f.value.nodes_to_install.length) + " nodes (~" + r(f.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              f.value.nodes_to_install.length ? (t(), a("li", Ya, " Restart ComfyUI to load new nodes ")) : d("", !0),
              f.value.models_to_download.length ? (t(), a("li", Za, " You'll still need to download " + r(f.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            f.value.estimated_size_mb ? (t(), a("div", Xa, " Estimated download: " + r(f.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: i(() => [
        k(ne, {
          variant: "secondary",
          onClick: h[0] || (h[0] = (g) => n("close"))
        }, {
          default: i(() => [...h[6] || (h[6] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f.value && f.value.nodes_to_install.length && f.value.models_to_download.length ? (t(), $(ne, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: te
        }, {
          default: i(() => [...h[7] || (h[7] = [
            b(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        f.value && (f.value.nodes_to_install.length || f.value.models_to_download.length) ? (t(), $(ne, {
          key: 1,
          variant: "primary",
          disabled: m.value || f.value.models_to_download.length > 0 && !S.value,
          loading: m.value,
          onClick: B
        }, {
          default: i(() => [...h[8] || (h[8] = [
            b(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Qa = /* @__PURE__ */ W(Ja, [["__scopeId", "data-v-d68efb14"]]), es = { class: "workflows-section" }, ts = { class: "section-header" }, os = { class: "search-bar" }, as = {
  key: 0,
  class: "loading"
}, ss = {
  key: 1,
  class: "error-message"
}, ns = {
  key: 2,
  class: "workflows-content"
}, ls = {
  key: 0,
  class: "workflow-group"
}, rs = { class: "group-title" }, is = { class: "workflow-info" }, cs = { class: "workflow-name" }, ds = { class: "workflow-status" }, us = { class: "workflow-actions" }, ms = ["onClick"], gs = ["onClick"], hs = {
  key: 1,
  class: "workflow-group"
}, fs = { class: "group-title" }, vs = { class: "workflow-info" }, ps = { class: "workflow-name" }, ys = { class: "workflow-actions" }, bs = ["onClick"], ws = {
  key: 2,
  class: "workflow-group"
}, ks = { class: "group-title" }, _s = { class: "workflow-info" }, $s = { class: "workflow-name" }, xs = { class: "workflow-actions" }, Cs = ["onClick"], Ss = {
  key: 3,
  class: "workflow-group"
}, Es = { class: "workflow-info" }, Is = { class: "workflow-name" }, zs = { class: "workflow-actions" }, Ls = ["onClick"], Ms = {
  key: 4,
  class: "empty-state"
}, Bs = { key: 0 }, Ts = { key: 1 }, Os = /* @__PURE__ */ R({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const s = l, { getWorkflows: n } = ge(), y = E([]), C = E(!1), f = E(null), _ = E(""), m = E(!1), p = E(!1), S = E(!1), v = E(!1), D = E(null), G = V(
      () => y.value.filter((A) => A.status === "broken")
    ), ee = V(
      () => y.value.filter((A) => A.status === "new")
    ), F = V(
      () => y.value.filter((A) => A.status === "modified")
    ), z = V(
      () => y.value.filter((A) => A.status === "synced")
    ), O = V(() => {
      if (!_.value.trim()) return y.value;
      const A = _.value.toLowerCase();
      return y.value.filter((T) => T.name.toLowerCase().includes(A));
    }), Z = V(
      () => G.value.filter(
        (A) => !_.value.trim() || A.name.toLowerCase().includes(_.value.toLowerCase())
      )
    ), te = V(
      () => ee.value.filter(
        (A) => !_.value.trim() || A.name.toLowerCase().includes(_.value.toLowerCase())
      )
    ), B = V(
      () => F.value.filter(
        (A) => !_.value.trim() || A.name.toLowerCase().includes(_.value.toLowerCase())
      )
    ), L = V(
      () => z.value.filter(
        (A) => !_.value.trim() || A.name.toLowerCase().includes(_.value.toLowerCase())
      )
    );
    async function h() {
      C.value = !0, f.value = null;
      try {
        y.value = await n();
      } catch (A) {
        f.value = A instanceof Error ? A.message : "Failed to load workflows";
      } finally {
        C.value = !1;
      }
    }
    function g(A) {
      D.value = A, S.value = !0;
    }
    function u(A) {
      D.value = A, v.value = !0;
    }
    function w() {
      alert("Bulk resolution not yet implemented");
    }
    function x() {
      s("refresh");
    }
    return ce(h), (A, T) => (t(), a("div", es, [
      o("div", ts, [
        T[7] || (T[7] = o("h3", { class: "view-title" }, "WORKFLOWS", -1)),
        G.value.length > 0 ? (t(), a("button", {
          key: 0,
          class: "resolve-all-btn",
          onClick: w
        }, " RESOLVE ALL ISSUES ")) : d("", !0)
      ]),
      o("div", os, [
        Ve(o("input", {
          "onUpdate:modelValue": T[0] || (T[0] = (H) => _.value = H),
          type: "text",
          placeholder: "🔍 Search workflows...",
          class: "search-input"
        }, null, 512), [
          [Pe, _.value]
        ])
      ]),
      C.value ? (t(), a("div", as, "Loading workflows...")) : f.value ? (t(), a("div", ss, r(f.value), 1)) : (t(), a("div", ns, [
        Z.value.length ? (t(), a("section", ls, [
          o("h4", rs, "BROKEN (" + r(Z.value.length) + ")", 1),
          (t(!0), a(P, null, q(Z.value, (H) => (t(), a("div", {
            key: H.name,
            class: "workflow-item broken"
          }, [
            o("div", is, [
              o("div", cs, "⚠ " + r(H.name), 1),
              o("div", ds, " Missing: " + r(H.missing_nodes) + " nodes, " + r(H.missing_models) + " models ", 1)
            ]),
            o("div", us, [
              o("button", {
                class: "action-btn",
                onClick: (de) => u(H.name)
              }, " Resolve ▸ ", 8, ms),
              o("button", {
                class: "action-btn secondary",
                onClick: (de) => g(H.name)
              }, " Details ▸ ", 8, gs)
            ])
          ]))), 128))
        ])) : d("", !0),
        te.value.length ? (t(), a("section", hs, [
          o("h4", fs, "NEW (" + r(te.value.length) + ")", 1),
          (t(!0), a(P, null, q(te.value, (H) => (t(), a("div", {
            key: H.name,
            class: "workflow-item new"
          }, [
            o("div", vs, [
              o("div", ps, "● " + r(H.name), 1),
              T[8] || (T[8] = o("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            o("div", ys, [
              o("button", {
                class: "action-btn secondary",
                onClick: (de) => g(H.name)
              }, " Details ", 8, bs)
            ])
          ]))), 128))
        ])) : d("", !0),
        B.value.length ? (t(), a("section", ws, [
          o("h4", ks, "MODIFIED (" + r(B.value.length) + ")", 1),
          (t(!0), a(P, null, q(B.value, (H) => (t(), a("div", {
            key: H.name,
            class: "workflow-item modified"
          }, [
            o("div", _s, [
              o("div", $s, "⚡ " + r(H.name), 1),
              T[9] || (T[9] = o("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            o("div", xs, [
              o("button", {
                class: "action-btn secondary",
                onClick: (de) => g(H.name)
              }, " Details ", 8, Cs)
            ])
          ]))), 128))
        ])) : d("", !0),
        L.value.length ? (t(), a("section", Ss, [
          o("h4", {
            class: "group-title clickable",
            onClick: T[1] || (T[1] = (H) => m.value = !m.value)
          }, " SYNCED (" + r(L.value.length) + ") " + r(m.value ? "▼" : "▸"), 1),
          m.value ? (t(), a(P, { key: 0 }, [
            (t(!0), a(P, null, q(L.value.slice(0, p.value ? void 0 : 5), (H) => (t(), a("div", {
              key: H.name,
              class: "workflow-item synced"
            }, [
              o("div", Es, [
                o("div", Is, r(H.name), 1),
                T[10] || (T[10] = o("div", { class: "workflow-status" }, "✓ Ready", -1))
              ]),
              o("div", zs, [
                o("button", {
                  class: "action-btn secondary",
                  onClick: (de) => g(H.name)
                }, " Details ", 8, Ls)
              ])
            ]))), 128)),
            !p.value && L.value.length > 5 ? (t(), a("button", {
              key: 0,
              class: "show-more-btn",
              onClick: T[2] || (T[2] = (H) => p.value = !0)
            }, " View all " + r(L.value.length) + " → ", 1)) : d("", !0)
          ], 64)) : d("", !0)
        ])) : d("", !0),
        O.value.length ? d("", !0) : (t(), a("div", Ms, [
          _.value ? (t(), a("p", Bs, 'No workflows match "' + r(_.value) + '"', 1)) : (t(), a("p", Ts, "No workflows found in this environment."))
        ]))
      ])),
      S.value && D.value ? (t(), $(xa, {
        key: 3,
        "workflow-name": D.value,
        onClose: T[3] || (T[3] = (H) => S.value = !1),
        onResolve: T[4] || (T[4] = (H) => u(D.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      v.value && D.value ? (t(), $(Qa, {
        key: 4,
        "workflow-name": D.value,
        onClose: T[5] || (T[5] = (H) => v.value = !1),
        onInstall: x,
        onRefresh: T[6] || (T[6] = (H) => s("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ]));
  }
}), Ds = /* @__PURE__ */ W(Os, [["__scopeId", "data-v-abf8513b"]]), Ns = { class: "search-input-wrapper" }, Rs = ["value", "placeholder"], Ws = /* @__PURE__ */ R({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: l }) {
    const s = e, n = l, y = E(null);
    let C;
    function f(m) {
      const p = m.target.value;
      s.debounce > 0 ? (clearTimeout(C), C = window.setTimeout(() => {
        n("update:modelValue", p);
      }, s.debounce)) : n("update:modelValue", p);
    }
    function _() {
      var m;
      n("update:modelValue", ""), n("clear"), (m = y.value) == null || m.focus();
    }
    return ce(() => {
      s.autoFocus && y.value && y.value.focus();
    }), (m, p) => (t(), a("div", Ns, [
      o("input", {
        ref_key: "inputRef",
        ref: y,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: $e(_, ["escape"])
      }, null, 40, Rs),
      e.clearable && e.modelValue ? (t(), a("button", {
        key: 0,
        class: "clear-button",
        onClick: _,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), As = /* @__PURE__ */ W(Ws, [["__scopeId", "data-v-266f857a"]]), Us = { class: "search-bar" }, Vs = /* @__PURE__ */ R({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, s) => (t(), a("div", Us, [
      k(As, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (n) => l.$emit("update:modelValue", n)),
        onClear: s[1] || (s[1] = (n) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), qe = /* @__PURE__ */ W(Vs, [["__scopeId", "data-v-3d51bbfd"]]), Ps = { class: "section-group" }, Hs = {
  key: 0,
  class: "section-content"
}, Gs = /* @__PURE__ */ R({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const s = e, n = l, y = E(s.initiallyExpanded);
    function C() {
      s.collapsible && (y.value = !y.value, n("toggle", y.value));
    }
    return (f, _) => (t(), a("section", Ps, [
      k(Me, {
        count: e.count,
        clickable: e.collapsible,
        expanded: y.value,
        onClick: C
      }, {
        default: i(() => [
          b(r(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || y.value ? (t(), a("div", Hs, [
        K(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ve = /* @__PURE__ */ W(Gs, [["__scopeId", "data-v-c48e33ed"]]), Fs = { class: "item-header" }, Ks = {
  key: 0,
  class: "item-icon"
}, js = { class: "item-info" }, qs = {
  key: 0,
  class: "item-title"
}, Ys = {
  key: 1,
  class: "item-subtitle"
}, Zs = {
  key: 0,
  class: "item-details"
}, Xs = {
  key: 1,
  class: "item-actions"
}, Js = /* @__PURE__ */ R({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, n = V(() => s.status ? `status-${s.status}` : "");
    return (y, C) => (t(), a("div", {
      class: U(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: C[0] || (C[0] = (f) => e.clickable && y.$emit("click"))
    }, [
      o("div", Fs, [
        y.$slots.icon ? (t(), a("span", Ks, [
          K(y.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        o("div", js, [
          y.$slots.title ? (t(), a("div", qs, [
            K(y.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          y.$slots.subtitle ? (t(), a("div", Ys, [
            K(y.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      y.$slots.details ? (t(), a("div", Zs, [
        K(y.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      y.$slots.actions ? (t(), a("div", Xs, [
        K(y.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), pe = /* @__PURE__ */ W(Js, [["__scopeId", "data-v-cc435e0e"]]), Qs = /* @__PURE__ */ R({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (t(), a("span", {
      class: U(["detail-label"]),
      style: Ge({ minWidth: e.minWidth })
    }, [
      K(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), en = /* @__PURE__ */ W(Qs, [["__scopeId", "data-v-75e9eeb8"]]), tn = /* @__PURE__ */ R({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), a("span", {
      class: U(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      K(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), on = /* @__PURE__ */ W(tn, [["__scopeId", "data-v-2f186e4c"]]), an = { class: "detail-row" }, sn = /* @__PURE__ */ R({
  __name: "DetailRow",
  props: {
    label: {},
    value: {},
    mono: { type: Boolean, default: !1 },
    valueVariant: { default: "default" },
    truncate: { type: Boolean, default: !1 },
    labelMinWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (t(), a("div", an, [
      k(en, { "min-width": e.labelMinWidth }, {
        default: i(() => [
          b(r(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), $(on, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: i(() => [
          b(r(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : K(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), oe = /* @__PURE__ */ W(sn, [["__scopeId", "data-v-ef15664a"]]), nn = /* @__PURE__ */ R({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, s) => (t(), a("div", {
      class: U(["summary-bar", e.variant])
    }, [
      K(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ W(nn, [["__scopeId", "data-v-ccb7816e"]]), ln = { class: "loading-state" }, rn = { class: "loading-message" }, cn = /* @__PURE__ */ R({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, s) => (t(), a("div", ln, [
      s[0] || (s[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", rn, r(e.message), 1)
    ]));
  }
}), Ze = /* @__PURE__ */ W(cn, [["__scopeId", "data-v-ad8436c9"]]), dn = { class: "error-state" }, un = { class: "error-message" }, mn = /* @__PURE__ */ R({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, s) => (t(), a("div", dn, [
      s[2] || (s[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", un, r(e.message), 1),
      e.retry ? (t(), $(Y, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (n) => l.$emit("retry"))
      }, {
        default: i(() => [...s[1] || (s[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Xe = /* @__PURE__ */ W(mn, [["__scopeId", "data-v-5397be48"]]), gn = { class: "popover-header" }, hn = { class: "popover-title" }, fn = { class: "popover-content" }, vn = {
  key: 0,
  class: "popover-actions"
}, pn = /* @__PURE__ */ R({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, s) => (t(), $(He, { to: "body" }, [
      e.show ? (t(), a("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (n) => l.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: Ge({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", gn, [
            o("h4", hn, r(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (n) => l.$emit("close"))
            }, "✕")
          ]),
          o("div", fn, [
            K(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (t(), a("div", vn, [
            K(l.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ W(pn, [["__scopeId", "data-v-057df510"]]), yn = /* @__PURE__ */ R({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const s = l, { getEnvironmentModels: n, getStatus: y } = ge(), C = E([]), f = E([]), _ = E("production"), m = E(!1), p = E(null), S = E(""), v = E(!1);
    function D() {
      v.value = !1, s("navigate", "model-index");
    }
    const G = V(
      () => C.value.reduce((u, w) => u + (w.size_mb || w.size || 0), 0)
    ), ee = V(() => {
      if (!S.value.trim()) return C.value;
      const u = S.value.toLowerCase();
      return C.value.filter((w) => w.filename.toLowerCase().includes(u));
    }), F = V(() => {
      if (!S.value.trim()) return f.value;
      const u = S.value.toLowerCase();
      return f.value.filter((w) => w.filename.toLowerCase().includes(u));
    }), z = V(
      () => ee.value.filter((u) => u.type === "checkpoints" || u.category === "checkpoints")
    ), O = V(
      () => ee.value.filter((u) => u.type === "loras" || u.category === "loras")
    ), Z = V(
      () => ee.value.filter(
        (u) => u.type !== "checkpoints" && u.category !== "checkpoints" && u.type !== "loras" && u.category !== "loras"
      )
    );
    function te(u) {
      return u ? u >= 1024 ? `${(u / 1024).toFixed(1)} GB` : `${u.toFixed(0)} MB` : "Unknown";
    }
    function B(u) {
      s("navigate", "model-index");
    }
    function L(u) {
      s("navigate", "model-index");
    }
    function h(u) {
      alert(`Download functionality not yet implemented for ${u}`);
    }
    async function g() {
      m.value = !0, p.value = null;
      try {
        const u = await n();
        C.value = u, f.value = [];
        const w = await y();
        _.value = w.environment || "production";
      } catch (u) {
        p.value = u instanceof Error ? u.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return ce(g), (u, w) => (t(), a(P, null, [
      k(Oe, null, {
        header: i(() => [
          k(De, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (x) => v.value = !0)
          })
        ]),
        search: i(() => [
          k(qe, {
            modelValue: S.value,
            "onUpdate:modelValue": w[1] || (w[1] = (x) => S.value = x),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (t(), $(Ze, {
            key: 0,
            message: "Loading environment models..."
          })) : p.value ? (t(), $(Xe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: g
          }, null, 8, ["message"])) : (t(), a(P, { key: 2 }, [
            C.value.length ? (t(), $(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                b(" Total: " + r(C.value.length) + " models • " + r(te(G.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            z.value.length ? (t(), $(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: z.value.length
            }, {
              default: i(() => [
                (t(!0), a(P, null, q(z.value, (x) => (t(), $(pe, {
                  key: x.sha256 || x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...w[3] || (w[3] = [
                    b("📦", -1)
                  ])]),
                  title: i(() => [
                    b(r(x.filename), 1)
                  ]),
                  subtitle: i(() => [
                    b(r(te(x.size_mb || x.size)), 1)
                  ]),
                  details: i(() => [
                    k(oe, {
                      label: "Used by:",
                      value: (x.used_by || x.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: i(() => [
                    k(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => B(x.sha256 || x.sha256_hash || x.hash || "")
                    }, {
                      default: i(() => [...w[4] || (w[4] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            O.value.length ? (t(), $(ve, {
              key: 2,
              title: "LORAS",
              count: O.value.length
            }, {
              default: i(() => [
                (t(!0), a(P, null, q(O.value, (x) => (t(), $(pe, {
                  key: x.sha256 || x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...w[5] || (w[5] = [
                    b("📦", -1)
                  ])]),
                  title: i(() => [
                    b(r(x.filename), 1)
                  ]),
                  subtitle: i(() => [
                    b(r(te(x.size_mb || x.size)), 1)
                  ]),
                  details: i(() => [
                    k(oe, {
                      label: "Used by:",
                      value: (x.used_by || x.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: i(() => [
                    k(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => B(x.sha256 || x.sha256_hash || x.hash || "")
                    }, {
                      default: i(() => [...w[6] || (w[6] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            Z.value.length ? (t(), $(ve, {
              key: 3,
              title: "OTHER",
              count: Z.value.length
            }, {
              default: i(() => [
                (t(!0), a(P, null, q(Z.value, (x) => (t(), $(pe, {
                  key: x.sha256 || x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...w[7] || (w[7] = [
                    b("📦", -1)
                  ])]),
                  title: i(() => [
                    b(r(x.filename), 1)
                  ]),
                  subtitle: i(() => [
                    b(r(te(x.size_mb || x.size)), 1)
                  ]),
                  details: i(() => [
                    k(oe, {
                      label: "Type:",
                      value: x.type
                    }, null, 8, ["value"]),
                    k(oe, {
                      label: "Used by:",
                      value: (x.used_by || x.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    k(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => B(x.sha256 || x.sha256_hash || x.hash || "")
                    }, {
                      default: i(() => [...w[8] || (w[8] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            F.value.length ? (t(), $(ve, {
              key: 4,
              title: "MISSING",
              count: F.value.length
            }, {
              default: i(() => [
                (t(!0), a(P, null, q(F.value, (x) => (t(), $(pe, {
                  key: x.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...w[9] || (w[9] = [
                    b("⚠", -1)
                  ])]),
                  title: i(() => [
                    b(r(x.filename), 1)
                  ]),
                  subtitle: i(() => [...w[10] || (w[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var A;
                    return [
                      k(oe, {
                        label: "Required by:",
                        value: ((A = x.workflow_names) == null ? void 0 : A.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    k(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => h(x.filename)
                    }, {
                      default: i(() => [...w[11] || (w[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => L(x.filename)
                    }, {
                      default: i(() => [...w[12] || (w[12] = [
                        b(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !ee.value.length && !F.value.length ? (t(), $(Ne, {
              key: 5,
              icon: "📭",
              message: S.value ? `No models match '${S.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(Je, {
        show: v.value,
        title: "About Environment Models",
        onClose: w[2] || (w[2] = (x) => v.value = !1)
      }, {
        content: i(() => [
          o("p", null, [
            w[13] || (w[13] = b(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + r(_.value) + '"', 1),
            w[14] || (w[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          k(Y, {
            variant: "primary",
            onClick: D
          }, {
            default: i(() => [...w[15] || (w[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bn = /* @__PURE__ */ W(yn, [["__scopeId", "data-v-865641a4"]]), wn = /* @__PURE__ */ R({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = ge(), s = E([]), n = E(!1), y = E(null), C = E(""), f = E(!1), _ = V(
      () => s.value.reduce((h, g) => h + (g.size_mb || g.size || 0), 0)
    ), m = V(() => {
      const h = /* @__PURE__ */ new Set();
      return s.value.forEach((g) => {
        g.used_in_environments && g.used_in_environments.length > 0 && g.used_in_environments.forEach((u) => h.add(u.env_name));
      }), h.size;
    }), p = V(() => {
      if (!C.value.trim()) return s.value;
      const h = C.value.toLowerCase();
      return s.value.filter((g) => {
        const u = g, w = g.sha256 || u.sha256_hash || "";
        return g.filename.toLowerCase().includes(h) || w.toLowerCase().includes(h);
      });
    }), S = V(
      () => p.value.filter((h) => h.type === "checkpoints")
    ), v = V(
      () => p.value.filter((h) => h.type === "loras")
    ), D = V(
      () => p.value.filter((h) => h.type !== "checkpoints" && h.type !== "loras")
    );
    function G(h) {
      return h ? h >= 1024 ? `${(h / 1024).toFixed(1)} GB` : `${h.toFixed(0)} MB` : "Unknown";
    }
    function ee(h) {
      const g = h, u = h.used_in_workflows || g.used_by || [];
      return !u || u.length === 0 ? "Not used" : `${u.length} workflow(s)`;
    }
    function F(h) {
      navigator.clipboard.writeText(h), alert("Hash copied to clipboard");
    }
    function z(h) {
      prompt("Enter model source URL:", h.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function O(h) {
      const g = h, u = h.used_in_workflows || g.used_by || [], w = u && u.length > 0 ? `

⚠ WARNING: This model is used by ${u.length} workflow(s):
${u.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${h.filename}?${w}

This will free ${G(g.size_mb || h.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Z() {
      alert("Scan for models not yet implemented");
    }
    function te() {
      alert("Change directory not yet implemented");
    }
    function B() {
      alert("Download new model not yet implemented");
    }
    async function L() {
      n.value = !0, y.value = null;
      try {
        s.value = await l(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", S.value), console.log("Filtered loras:", v.value), console.log("Filtered other:", D.value);
      } catch (h) {
        y.value = h instanceof Error ? h.message : "Failed to load workspace models";
      } finally {
        n.value = !1;
      }
    }
    return ce(L), (h, g) => (t(), a(P, null, [
      k(Oe, null, {
        header: i(() => [
          k(De, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: g[0] || (g[0] = (u) => f.value = !0)
          }, {
            actions: i(() => [
              k(Y, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: i(() => [...g[3] || (g[3] = [
                  b(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              k(Y, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: i(() => [...g[4] || (g[4] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(Y, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: i(() => [...g[5] || (g[5] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  b(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          k(qe, {
            modelValue: C.value,
            "onUpdate:modelValue": g[1] || (g[1] = (u) => C.value = u),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          n.value ? (t(), $(Ze, {
            key: 0,
            message: "Loading workspace models..."
          })) : y.value ? (t(), $(Xe, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (t(), a(P, { key: 2 }, [
            s.value.length ? (t(), $(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                b(" Total: " + r(s.value.length) + " models • " + r(G(_.value)) + " • Used in " + r(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            S.value.length ? (t(), $(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: S.value.length
            }, {
              default: i(() => [
                (t(!0), a(P, null, q(S.value, (u) => (t(), $(pe, {
                  key: u.sha256 || u.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...g[6] || (g[6] = [
                    b("📦", -1)
                  ])]),
                  title: i(() => [
                    b(r(u.filename), 1)
                  ]),
                  subtitle: i(() => [
                    b(r(G(u.size_mb || u.size)), 1)
                  ]),
                  details: i(() => {
                    var w, x;
                    return [
                      u.sha256 || u.sha256_hash ? (t(), $(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (u.sha256 || u.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      k(oe, {
                        label: "Used in:",
                        value: ee(u)
                      }, null, 8, ["value"]),
                      u.source_url || (w = u.sources) != null && w[0] ? (t(), $(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: u.source_url || ((x = u.sources) == null ? void 0 : x[0])
                      }, null, 8, ["value"])) : (t(), $(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: i(() => [...g[7] || (g[7] = [
                          b("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: i(() => [
                    k(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => z(u)
                    }, {
                      default: i(() => [...g[8] || (g[8] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    u.sha256 || u.sha256_hash ? (t(), $(Y, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => F(u.sha256 || u.sha256_hash)
                    }, {
                      default: i(() => [...g[9] || (g[9] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    k(Y, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => O(u)
                    }, {
                      default: i(() => [...g[10] || (g[10] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            v.value.length ? (t(), $(ve, {
              key: 2,
              title: "LORAS",
              count: v.value.length
            }, {
              default: i(() => [
                (t(!0), a(P, null, q(v.value, (u) => (t(), $(pe, {
                  key: u.sha256 || u.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...g[11] || (g[11] = [
                    b("📦", -1)
                  ])]),
                  title: i(() => [
                    b(r(u.filename), 1)
                  ]),
                  subtitle: i(() => [
                    b(r(G(u.size_mb || u.size)), 1)
                  ]),
                  details: i(() => {
                    var w, x;
                    return [
                      u.sha256 || u.sha256_hash ? (t(), $(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (u.sha256 || u.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      k(oe, {
                        label: "Used in:",
                        value: ee(u)
                      }, null, 8, ["value"]),
                      u.source_url || (w = u.sources) != null && w[0] ? (t(), $(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: u.source_url || ((x = u.sources) == null ? void 0 : x[0])
                      }, null, 8, ["value"])) : (t(), $(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: i(() => [...g[12] || (g[12] = [
                          b("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: i(() => [
                    k(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => z(u)
                    }, {
                      default: i(() => [...g[13] || (g[13] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    u.sha256 || u.sha256_hash ? (t(), $(Y, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => F(u.sha256 || u.sha256_hash)
                    }, {
                      default: i(() => [...g[14] || (g[14] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    k(Y, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => O(u)
                    }, {
                      default: i(() => [...g[15] || (g[15] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            D.value.length ? (t(), $(ve, {
              key: 3,
              title: "OTHER",
              count: D.value.length
            }, {
              default: i(() => [
                (t(!0), a(P, null, q(D.value, (u) => (t(), $(pe, {
                  key: u.sha256 || u.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...g[16] || (g[16] = [
                    b("📦", -1)
                  ])]),
                  title: i(() => [
                    b(r(u.filename), 1)
                  ]),
                  subtitle: i(() => [
                    b(r(G(u.size_mb || u.size)), 1)
                  ]),
                  details: i(() => [
                    k(oe, {
                      label: "Type:",
                      value: u.type
                    }, null, 8, ["value"]),
                    u.sha256 || u.sha256_hash ? (t(), $(oe, {
                      key: 0,
                      label: "SHA256:",
                      value: (u.sha256 || u.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    k(oe, {
                      label: "Used in:",
                      value: ee(u)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    k(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => z(u)
                    }, {
                      default: i(() => [...g[17] || (g[17] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    u.sha256 || u.sha256_hash ? (t(), $(Y, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => F(u.sha256 || u.sha256_hash)
                    }, {
                      default: i(() => [...g[18] || (g[18] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    k(Y, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => O(u)
                    }, {
                      default: i(() => [...g[19] || (g[19] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            p.value.length ? d("", !0) : (t(), $(Ne, {
              key: 4,
              icon: "📭",
              message: C.value ? `No models match '${C.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(Je, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: g[2] || (g[2] = (u) => f.value = !1)
      }, {
        content: i(() => [...g[20] || (g[20] = [
          o("p", null, [
            b(" Content-addressable model storage shared across "),
            o("strong", null, "all environments"),
            b(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kn = /* @__PURE__ */ W(wn, [["__scopeId", "data-v-5a24af01"]]), _n = { class: "header-info" }, $n = { class: "commit-hash" }, xn = {
  key: 0,
  class: "commit-refs"
}, Cn = { class: "commit-message" }, Sn = { class: "commit-date" }, En = {
  key: 0,
  class: "loading"
}, In = {
  key: 1,
  class: "changes-section"
}, zn = { class: "stats-row" }, Ln = { class: "stat" }, Mn = { class: "stat insertions" }, Bn = { class: "stat deletions" }, Tn = {
  key: 0,
  class: "change-group"
}, On = {
  key: 1,
  class: "change-group"
}, Dn = {
  key: 0,
  class: "version"
}, Nn = {
  key: 2,
  class: "change-group"
}, Rn = { class: "change-item" }, Wn = /* @__PURE__ */ R({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: s } = ge(), n = E(null), y = E(!0), C = V(() => {
      if (!n.value) return !1;
      const _ = n.value.changes.workflows;
      return _.added.length > 0 || _.modified.length > 0 || _.deleted.length > 0;
    }), f = V(() => {
      if (!n.value) return !1;
      const _ = n.value.changes.nodes;
      return _.added.length > 0 || _.removed.length > 0;
    });
    return ce(async () => {
      try {
        n.value = await s(l.commit.hash);
      } finally {
        y.value = !1;
      }
    }), (_, m) => (t(), $(Ee, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (p) => _.$emit("close"))
    }, {
      header: i(() => {
        var p, S, v, D;
        return [
          o("div", _n, [
            m[4] || (m[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", $n, r(((p = n.value) == null ? void 0 : p.short_hash) || e.commit.short_hash || ((S = e.commit.hash) == null ? void 0 : S.slice(0, 7))), 1),
            (D = (v = n.value) == null ? void 0 : v.refs) != null && D.length ? (t(), a("span", xn, [
              (t(!0), a(P, null, q(n.value.refs, (G) => (t(), a("span", {
                key: G,
                class: "ref-badge"
              }, r(G), 1))), 128))
            ])) : d("", !0)
          ]),
          k(ne, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (G) => _.$emit("close"))
          }, {
            default: i(() => [...m[5] || (m[5] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: i(() => {
        var p, S;
        return [
          o("div", Cn, r(((p = n.value) == null ? void 0 : p.message) || e.commit.message), 1),
          o("div", Sn, r(((S = n.value) == null ? void 0 : S.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          y.value ? (t(), a("div", En, "Loading details...")) : n.value ? (t(), a("div", In, [
            o("div", zn, [
              o("span", Ln, r(n.value.stats.files_changed) + " files", 1),
              o("span", Mn, "+" + r(n.value.stats.insertions), 1),
              o("span", Bn, "-" + r(n.value.stats.deletions), 1)
            ]),
            C.value ? (t(), a("div", Tn, [
              k(me, { variant: "section" }, {
                default: i(() => [...m[6] || (m[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), a(P, null, q(n.value.changes.workflows.added, (v) => (t(), a("div", {
                key: "add-" + v,
                class: "change-item added"
              }, [
                m[7] || (m[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, r(v), 1)
              ]))), 128)),
              (t(!0), a(P, null, q(n.value.changes.workflows.modified, (v) => (t(), a("div", {
                key: "mod-" + v,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, r(v), 1)
              ]))), 128)),
              (t(!0), a(P, null, q(n.value.changes.workflows.deleted, (v) => (t(), a("div", {
                key: "del-" + v,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, r(v), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (t(), a("div", On, [
              k(me, { variant: "section" }, {
                default: i(() => [...m[10] || (m[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), a(P, null, q(n.value.changes.nodes.added, (v) => (t(), a("div", {
                key: "add-" + v.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, r(v.name), 1),
                v.version ? (t(), a("span", Dn, "(" + r(v.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (t(!0), a(P, null, q(n.value.changes.nodes.removed, (v) => (t(), a("div", {
                key: "rem-" + v.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, r(v.name), 1)
              ]))), 128))
            ])) : d("", !0),
            n.value.changes.models.resolved > 0 ? (t(), a("div", Nn, [
              k(me, { variant: "section" }, {
                default: i(() => [...m[13] || (m[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", Rn, [
                m[14] || (m[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, r(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: i(() => [
        k(ne, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (p) => _.$emit("createBranch", e.commit))
        }, {
          default: i(() => [...m[15] || (m[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(ne, {
          variant: "primary",
          onClick: m[2] || (m[2] = (p) => _.$emit("checkout", e.commit))
        }, {
          default: i(() => [...m[16] || (m[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), An = /* @__PURE__ */ W(Wn, [["__scopeId", "data-v-d256ff6d"]]), Un = { class: "dialog-message" }, Vn = {
  key: 0,
  class: "dialog-details"
}, Pn = {
  key: 1,
  class: "dialog-warning"
}, Hn = /* @__PURE__ */ R({
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
  setup(e) {
    return (l, s) => (t(), $(Ee, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (n) => l.$emit("cancel"))
    }, {
      body: i(() => [
        o("p", Un, r(e.message), 1),
        e.details && e.details.length ? (t(), a("div", Vn, [
          (t(!0), a(P, null, q(e.details, (n, y) => (t(), a("div", {
            key: y,
            class: "detail-item"
          }, " • " + r(n), 1))), 128))
        ])) : d("", !0),
        e.warning ? (t(), a("p", Pn, [
          s[4] || (s[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + r(e.warning), 1)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        k(ne, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (n) => l.$emit("cancel"))
        }, {
          default: i(() => [
            b(r(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), $(ne, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (n) => l.$emit("secondary"))
        }, {
          default: i(() => [
            b(r(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (n) => l.$emit("confirm"))
        }, {
          default: i(() => [
            b(r(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gn = /* @__PURE__ */ W(Hn, [["__scopeId", "data-v-3670b9f5"]]), Fn = { class: "comfygit-panel" }, Kn = { class: "panel-header" }, jn = { class: "header-left" }, qn = {
  key: 0,
  class: "header-info"
}, Yn = { class: "header-actions" }, Zn = { class: "env-switcher" }, Xn = {
  key: 0,
  class: "header-info"
}, Jn = { class: "branch-name" }, Qn = { class: "panel-main" }, el = { class: "sidebar" }, tl = { class: "sidebar-section" }, ol = { class: "sidebar-section" }, al = { class: "sidebar-section" }, sl = { class: "content-area" }, nl = {
  key: 0,
  class: "error-message"
}, ll = {
  key: 1,
  class: "loading"
}, rl = {
  key: 5,
  class: "view-placeholder"
}, il = {
  key: 6,
  class: "view-placeholder"
}, cl = {
  key: 7,
  class: "view-placeholder"
}, dl = {
  key: 9,
  class: "view-placeholder"
}, ul = {
  key: 10,
  class: "view-placeholder"
}, ml = {
  key: 11,
  class: "view-placeholder"
}, gl = {
  key: 12,
  class: "view-placeholder"
}, hl = {
  key: 13,
  class: "view-placeholder"
}, fl = { class: "dialog-content env-selector-dialog" }, vl = { class: "dialog-header" }, pl = { class: "dialog-body" }, yl = { class: "env-list" }, bl = { class: "env-info" }, wl = { class: "env-name-row" }, kl = { class: "env-indicator" }, _l = { class: "env-name" }, $l = {
  key: 0,
  class: "env-branch"
}, xl = {
  key: 1,
  class: "current-label"
}, Cl = { class: "env-stats" }, Sl = ["onClick"], El = { class: "toast-container" }, Il = { class: "toast-icon" }, zl = { class: "toast-message" }, Ll = /* @__PURE__ */ R({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const s = l, {
      getStatus: n,
      getHistory: y,
      exportEnv: C,
      getBranches: f,
      checkout: _,
      createBranch: m,
      switchBranch: p,
      getEnvironments: S
    } = ge(), v = E(null), D = E([]), G = E([]), ee = E([]), F = V(() => ee.value.find((I) => I.is_current)), z = E(!1), O = E(null), Z = E(null), te = E(!1), B = E("status"), L = E("this-env");
    function h(I, c) {
      B.value = I, L.value = c;
    }
    function g(I) {
      const X = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[I];
      X && h(X.view, X.section);
    }
    function u() {
      h("branches", "this-env");
    }
    const w = E(null), x = E([]);
    let A = 0;
    function T(I, c = "info", X = 3e3) {
      const ae = ++A;
      return x.value.push({ id: ae, message: I, type: c }), X > 0 && setTimeout(() => {
        x.value = x.value.filter((he) => he.id !== ae);
      }, X), ae;
    }
    function H(I) {
      x.value = x.value.filter((c) => c.id !== I);
    }
    function de(I) {
      switch (I) {
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
    const M = V(() => {
      if (!v.value) return "neutral";
      const I = v.value.workflows, c = I.new.length > 0 || I.modified.length > 0 || I.deleted.length > 0 || v.value.has_changes;
      return v.value.comparison.is_synced ? c ? "warning" : "success" : "error";
    });
    V(() => v.value ? M.value === "success" ? "All synced" : M.value === "warning" ? "Uncommitted changes" : M.value === "error" ? "Not synced" : "" : "");
    async function j() {
      z.value = !0, O.value = null;
      try {
        const [I, c, X, ae] = await Promise.all([
          n(),
          y(),
          f(),
          S()
        ]);
        v.value = I, D.value = c.commits, G.value = X.branches, ee.value = ae, s("statusUpdate", I);
      } catch (I) {
        O.value = I instanceof Error ? I.message : "Failed to load status", v.value = null, D.value = [], G.value = [];
      } finally {
        z.value = !1;
      }
    }
    function se(I) {
      Z.value = I;
    }
    async function we(I) {
      var X;
      Z.value = null;
      const c = v.value && (v.value.workflows.new.length > 0 || v.value.workflows.modified.length > 0 || v.value.workflows.deleted.length > 0 || v.value.has_changes);
      w.value = {
        title: c ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: c ? "You have uncommitted changes that will be lost." : `Checkout commit ${I.short_hash || ((X = I.hash) == null ? void 0 : X.slice(0, 7))}?`,
        details: c ? Ae() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: c ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: c,
        onConfirm: async () => {
          var N;
          w.value = null;
          const ae = T(`Checking out ${I.short_hash || ((N = I.hash) == null ? void 0 : N.slice(0, 7))}...`, "info", 0), he = await _(I.hash, c);
          H(ae), he.status === "success" ? T("Restarting ComfyUI...", "success") : T(he.message || "Checkout failed", "error");
        }
      };
    }
    async function xe(I) {
      const c = v.value && (v.value.workflows.new.length > 0 || v.value.workflows.modified.length > 0 || v.value.workflows.deleted.length > 0 || v.value.has_changes);
      w.value = {
        title: c ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: c ? "You have uncommitted changes." : `Switch to branch "${I}"?`,
        details: c ? Ae() : void 0,
        warning: c ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: c ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          w.value = null;
          const X = T(`Switching to ${I}...`, "info", 0), ae = await p(I, c);
          H(X), ae.status === "success" ? T("Restarting ComfyUI...", "success") : T(ae.message || "Branch switch failed", "error");
        }
      };
    }
    async function at(I) {
      const c = T(`Creating branch ${I}...`, "info", 0), X = await m(I);
      H(c), X.status === "success" ? (T(`Branch "${I}" created`, "success"), await j()) : T(X.message || "Failed to create branch", "error");
    }
    async function st(I) {
      Z.value = null;
      const c = prompt("Enter branch name:");
      if (c) {
        const X = T(`Creating branch ${c}...`, "info", 0), ae = await m(c, I.hash);
        H(X), ae.status === "success" ? (T(`Branch "${c}" created from ${I.short_hash}`, "success"), await j()) : T(ae.message || "Failed to create branch", "error");
      }
    }
    async function nt(I) {
      te.value = !1, T("Environment switching not yet implemented", "warning");
    }
    function Ae() {
      if (!v.value) return [];
      const I = [], c = v.value.workflows;
      return c.new.length && I.push(`${c.new.length} new workflow(s)`), c.modified.length && I.push(`${c.modified.length} modified workflow(s)`), c.deleted.length && I.push(`${c.deleted.length} deleted workflow(s)`), I;
    }
    async function lt() {
      const I = T("Exporting environment...", "info", 0);
      try {
        const c = await C();
        H(I), c.status === "success" ? (T("Export complete", "success"), alert(`Export successful!

Saved to: ${c.path}

Models without sources: ${c.models_without_sources}`)) : (T("Export failed", "error"), alert(`Export failed: ${c.message}`));
      } catch (c) {
        H(I), T("Export error", "error"), alert(`Export error: ${c instanceof Error ? c.message : "Unknown error"}`);
      }
    }
    return ce(j), (I, c) => {
      var X, ae, he;
      return t(), a("div", Fn, [
        o("div", Kn, [
          o("div", jn, [
            c[20] || (c[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            v.value ? (t(), a("div", qn)) : d("", !0)
          ]),
          o("div", Yn, [
            o("button", {
              class: U(["icon-btn", { spinning: z.value }]),
              onClick: j,
              title: "Refresh"
            }, [...c[21] || (c[21] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            o("button", {
              class: "icon-btn",
              onClick: c[0] || (c[0] = (N) => s("close")),
              title: "Close"
            }, [...c[22] || (c[22] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        o("div", Zn, [
          c[24] || (c[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: c[1] || (c[1] = (N) => te.value = !0)
          }, [
            v.value ? (t(), a("div", Xn, [
              o("span", null, r(((X = F.value) == null ? void 0 : X.name) || ((ae = v.value) == null ? void 0 : ae.environment) || "Loading..."), 1),
              o("span", Jn, "(" + r(v.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            c[23] || (c[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", Qn, [
          o("div", el, [
            o("div", tl, [
              c[25] || (c[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "status" && L.value === "this-env" }]),
                onClick: c[2] || (c[2] = (N) => h("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "workflows" }]),
                onClick: c[3] || (c[3] = (N) => h("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "models-env" }]),
                onClick: c[4] || (c[4] = (N) => h("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "branches" }]),
                onClick: c[5] || (c[5] = (N) => h("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "history" }]),
                onClick: c[6] || (c[6] = (N) => h("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "nodes" }]),
                onClick: c[7] || (c[7] = (N) => h("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "debug-env" }]),
                onClick: c[8] || (c[8] = (N) => h("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            c[28] || (c[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", ol, [
              c[26] || (c[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "environments" }]),
                onClick: c[9] || (c[9] = (N) => h("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "model-index" }]),
                onClick: c[10] || (c[10] = (N) => h("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "settings" }]),
                onClick: c[11] || (c[11] = (N) => h("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "debug-workspace" }]),
                onClick: c[12] || (c[12] = (N) => h("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            c[29] || (c[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", al, [
              c[27] || (c[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "export" }]),
                onClick: c[13] || (c[13] = (N) => h("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "import" }]),
                onClick: c[14] || (c[14] = (N) => h("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: U(["sidebar-item", { active: B.value === "remotes" }]),
                onClick: c[15] || (c[15] = (N) => h("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", sl, [
            O.value ? (t(), a("div", nl, r(O.value), 1)) : !v.value && B.value === "status" ? (t(), a("div", ll, " Loading status... ")) : (t(), a(P, { key: 2 }, [
              B.value === "status" ? (t(), $(po, {
                key: 0,
                status: v.value,
                onSwitchBranch: u
              }, null, 8, ["status"])) : B.value === "workflows" ? (t(), $(Ds, {
                key: 1,
                onRefresh: j
              })) : B.value === "models-env" ? (t(), $(bn, {
                key: 2,
                onNavigate: g
              })) : B.value === "branches" ? (t(), $(zo, {
                key: 3,
                branches: G.value,
                current: ((he = v.value) == null ? void 0 : he.branch) || null,
                onSwitch: xe,
                onCreate: at
              }, null, 8, ["branches", "current"])) : B.value === "history" ? (t(), $(Ao, {
                key: 4,
                commits: D.value,
                onSelect: se,
                onCheckout: we
              }, null, 8, ["commits"])) : B.value === "nodes" ? (t(), a("div", rl, [...c[30] || (c[30] = [
                o("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                o("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : B.value === "debug-env" ? (t(), a("div", il, [...c[31] || (c[31] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : B.value === "environments" ? (t(), a("div", cl, [...c[32] || (c[32] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : B.value === "model-index" ? (t(), $(kn, { key: 8 })) : B.value === "settings" ? (t(), a("div", dl, [...c[33] || (c[33] = [
                o("h3", { class: "view-title" }, "SETTINGS", -1),
                o("p", null, "Settings UI coming soon...", -1)
              ])])) : B.value === "debug-workspace" ? (t(), a("div", ul, [...c[34] || (c[34] = [
                o("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                o("p", null, "Workspace logs view coming soon...", -1)
              ])])) : B.value === "export" ? (t(), a("div", ml, [
                c[36] || (c[36] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: lt
                }, [...c[35] || (c[35] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  b(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : B.value === "import" ? (t(), a("div", gl, [...c[37] || (c[37] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : B.value === "remotes" ? (t(), a("div", hl, [...c[38] || (c[38] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : d("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (t(), $(An, {
          key: 0,
          commit: Z.value,
          onClose: c[16] || (c[16] = (N) => Z.value = null),
          onCheckout: we,
          onCreateBranch: st
        }, null, 8, ["commit"])) : d("", !0),
        w.value ? (t(), $(Gn, {
          key: 1,
          title: w.value.title,
          message: w.value.message,
          details: w.value.details,
          warning: w.value.warning,
          confirmLabel: w.value.confirmLabel,
          cancelLabel: w.value.cancelLabel,
          secondaryLabel: w.value.secondaryLabel,
          secondaryAction: w.value.secondaryAction,
          destructive: w.value.destructive,
          onConfirm: w.value.onConfirm,
          onCancel: c[17] || (c[17] = (N) => w.value = null),
          onSecondary: w.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        te.value ? (t(), a("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: c[19] || (c[19] = be((N) => te.value = !1, ["self"]))
        }, [
          o("div", fl, [
            o("div", vl, [
              c[40] || (c[40] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: c[18] || (c[18] = (N) => te.value = !1)
              }, [...c[39] || (c[39] = [
                o("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            o("div", pl, [
              c[41] || (c[41] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", yl, [
                (t(!0), a(P, null, q(ee.value, (N) => (t(), a("div", {
                  key: N.name,
                  class: U(["env-item", { current: N.is_current }])
                }, [
                  o("div", bl, [
                    o("div", wl, [
                      o("span", kl, r(N.is_current ? "●" : "○"), 1),
                      o("span", _l, r(N.name), 1),
                      N.current_branch ? (t(), a("span", $l, "(" + r(N.current_branch) + ")", 1)) : d("", !0),
                      N.is_current ? (t(), a("span", xl, "CURRENT")) : d("", !0)
                    ]),
                    o("div", Cl, r(N.workflow_count) + " workflows • " + r(N.node_count) + " nodes ", 1)
                  ]),
                  N.is_current ? d("", !0) : (t(), a("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ir) => nt(N.name)
                  }, " SWITCH ", 8, Sl))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        o("div", El, [
          k(ct, { name: "toast" }, {
            default: i(() => [
              (t(!0), a(P, null, q(x.value, (N) => (t(), a("div", {
                key: N.id,
                class: U(["toast", N.type])
              }, [
                o("span", Il, r(de(N.type)), 1),
                o("span", zl, r(N.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Ml = /* @__PURE__ */ W(Ll, [["__scopeId", "data-v-6671b632"]]), Bl = { class: "base-textarea-wrapper" }, Tl = ["value", "rows", "placeholder", "disabled", "maxlength"], Ol = {
  key: 0,
  class: "base-textarea-count"
}, Dl = /* @__PURE__ */ R({
  __name: "BaseTextarea",
  props: {
    modelValue: {},
    rows: { default: 3 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    maxLength: {},
    showCharCount: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "ctrlEnter"],
  setup(e) {
    return (l, s) => (t(), a("div", Bl, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (n) => l.$emit("update:modelValue", n.target.value)),
        onKeydown: [
          s[1] || (s[1] = $e(be((n) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = $e(be((n) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Tl),
      e.showCharCount && e.maxLength ? (t(), a("div", Ol, r(e.modelValue.length) + " / " + r(e.maxLength), 1)) : d("", !0)
    ]));
  }
}), Nl = /* @__PURE__ */ W(Dl, [["__scopeId", "data-v-5516e6fc"]]), Rl = { class: "commit-popover" }, Wl = { class: "popover-header" }, Al = { class: "popover-body" }, Ul = {
  key: 0,
  class: "changes-summary"
}, Vl = {
  key: 0,
  class: "change-item"
}, Pl = {
  key: 1,
  class: "change-item"
}, Hl = {
  key: 2,
  class: "change-item"
}, Gl = {
  key: 3,
  class: "change-item"
}, Fl = {
  key: 4,
  class: "change-item"
}, Kl = {
  key: 1,
  class: "no-changes"
}, jl = {
  key: 2,
  class: "loading"
}, ql = { class: "message-section" }, Yl = { class: "popover-footer" }, Zl = /* @__PURE__ */ R({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const s = e, n = l, { commit: y } = ge(), C = E(""), f = E(!1), _ = E(null), m = V(() => {
      if (!s.status) return !1;
      const S = s.status.workflows;
      return S.new.length > 0 || S.modified.length > 0 || S.deleted.length > 0 || s.status.has_changes;
    });
    async function p() {
      var S, v, D;
      if (!(!m.value || !C.value.trim() || f.value)) {
        f.value = !0, _.value = null;
        try {
          const G = await y(C.value.trim());
          G.status === "success" ? (_.value = {
            type: "success",
            message: `Committed: ${((S = G.summary) == null ? void 0 : S.new) || 0} new, ${((v = G.summary) == null ? void 0 : v.modified) || 0} modified, ${((D = G.summary) == null ? void 0 : D.deleted) || 0} deleted`
          }, C.value = "", setTimeout(() => n("committed"), 1e3)) : G.status === "no_changes" ? _.value = { type: "error", message: "No changes to commit" } : _.value = { type: "error", message: G.message || "Commit failed" };
        } catch (G) {
          _.value = { type: "error", message: G instanceof Error ? G.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (S, v) => (t(), a("div", Rl, [
      o("div", Wl, [
        v[4] || (v[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: v[0] || (v[0] = (D) => n("close"))
        }, [...v[3] || (v[3] = [
          o("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      o("div", Al, [
        e.status && m.value ? (t(), a("div", Ul, [
          e.status.workflows.new.length ? (t(), a("div", Vl, [
            v[5] || (v[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, r(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          e.status.workflows.modified.length ? (t(), a("div", Pl, [
            v[6] || (v[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, r(e.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          e.status.workflows.deleted.length ? (t(), a("div", Hl, [
            v[7] || (v[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, r(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_added.length ? (t(), a("div", Gl, [
            v[8] || (v[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, r(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), a("div", Fl, [
            v[9] || (v[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, r(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : e.status ? (t(), a("div", Kl, " No changes to commit ")) : (t(), a("div", jl, " Loading... ")),
        o("div", ql, [
          k(Nl, {
            modelValue: C.value,
            "onUpdate:modelValue": v[1] || (v[1] = (D) => C.value = D),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || f.value,
            rows: 3,
            onCtrlEnter: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        _.value ? (t(), a("div", {
          key: 3,
          class: U(["result", _.value.type])
        }, r(_.value.message), 3)) : d("", !0)
      ]),
      o("div", Yl, [
        k(ne, {
          variant: "secondary",
          onClick: v[2] || (v[2] = (D) => n("close"))
        }, {
          default: i(() => [...v[10] || (v[10] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ne, {
          variant: "primary",
          disabled: !m.value || !C.value.trim() || f.value,
          loading: f.value,
          onClick: p
        }, {
          default: i(() => [
            b(r(f.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Xl = /* @__PURE__ */ W(Zl, [["__scopeId", "data-v-4f587977"]]), Jl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Ql = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', er = {
  comfy: Jl,
  phosphor: Ql
}, Re = "comfy", Qe = "comfygit-theme";
let fe = null, et = Re;
function tr() {
  try {
    const e = localStorage.getItem(Qe);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Re;
}
function tt(e = Re) {
  fe && fe.remove(), fe = document.createElement("style"), fe.id = "comfygit-theme-styles", fe.setAttribute("data-theme", e), fe.textContent = er[e], document.head.appendChild(fe), document.body.setAttribute("data-comfygit-theme", e), et = e;
  try {
    localStorage.setItem(Qe, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function or() {
  return et;
}
function ar(e) {
  tt(e);
}
const We = document.createElement("link");
We.rel = "stylesheet";
We.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(We);
const sr = tr();
tt(sr);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), ar(e);
  },
  getTheme: () => {
    const e = or();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let re = null, le = null, _e = null;
const ye = E(null);
async function Be() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && (ye.value = await l.json());
  } catch {
  }
}
function nr() {
  if (!ye.value) return !1;
  const e = ye.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ye.value.has_changes;
}
function lr() {
  re && re.remove(), re = document.createElement("div"), re.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", re.appendChild(e), re.addEventListener("click", (n) => {
    n.target === re && Le();
  });
  const l = (n) => {
    n.key === "Escape" && (Le(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), Fe({
    render: () => Ke(Ml, {
      onClose: Le,
      onStatusUpdate: (n) => {
        ye.value = n, Se();
      }
    })
  }).mount(e), document.body.appendChild(re);
}
function Le() {
  re && (re.remove(), re = null);
}
function rr(e) {
  ke(), le = document.createElement("div"), le.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  le.style.position = "fixed", le.style.top = `${l.bottom + 8}px`, le.style.right = `${window.innerWidth - l.right}px`, le.style.zIndex = "10001";
  const s = (y) => {
    le && !le.contains(y.target) && y.target !== e && (ke(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const n = (y) => {
    y.key === "Escape" && (ke(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), _e = Fe({
    render: () => Ke(Xl, {
      status: ye.value,
      onClose: ke,
      onCommitted: () => {
        ke(), Be().then(Se);
      }
    })
  }), _e.mount(le), document.body.appendChild(le);
}
function ke() {
  _e && (_e.unmount(), _e = null), le && (le.remove(), le = null);
}
let ie = null;
function Se() {
  if (!ie) return;
  const e = ie.querySelector(".commit-indicator");
  e && (e.style.display = nr() ? "block" : "none");
}
const ot = document.createElement("style");
ot.textContent = `
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
    background: linear-gradient(180deg, var(--cg-btn-gradient-start, #fb923c) 0%, var(--cg-btn-gradient-end, #ea580c) 100%) !important;
    color: white !important;
    border: none !important;
    border-radius: 4px 0 0 4px !important;
    box-shadow: var(--cg-btn-shadow-inset, inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15)) !important;
  }

  .comfygit-panel-btn:hover {
    background: linear-gradient(180deg, var(--cg-btn-gradient-start, #fb923c) 0%, var(--cg-btn-gradient-end, #ea580c) 100%) !important;
    filter: brightness(1.1);
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
document.head.appendChild(ot);
Ie.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, n;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = lr, ie = document.createElement("button"), ie.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ie.innerHTML = 'Commit <span class="commit-indicator"></span>', ie.title = "Quick Commit", ie.onclick = () => rr(ie), e.appendChild(l), e.appendChild(ie), (n = (s = Ie.menu) == null ? void 0 : s.settingsGroup) != null && n.element && (Ie.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Be(), Se(), setInterval(async () => {
      await Be(), Se();
    }, 3e4);
  }
});
