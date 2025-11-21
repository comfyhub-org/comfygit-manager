import { app as Ie } from "../../scripts/app.js";
import { defineComponent as R, createElementBlock as a, openBlock as t, createCommentVNode as u, createElementVNode as o, renderSlot as K, createBlock as $, resolveDynamicComponent as Te, normalizeClass as A, withCtx as c, toDisplayString as i, createVNode as w, createTextVNode as b, computed as U, Fragment as V, renderList as j, ref as E, nextTick as lt, withDirectives as Ve, withKeys as _e, vModelText as Pe, withModifiers as be, onMounted as de, onUnmounted as rt, Teleport as He, normalizeStyle as Ge, TransitionGroup as it, createApp as Fe, h as Ke } from "vue";
const ct = { class: "panel-layout" }, dt = {
  key: 0,
  class: "panel-layout-header"
}, ut = {
  key: 1,
  class: "panel-layout-search"
}, mt = { class: "panel-layout-content" }, gt = {
  key: 2,
  class: "panel-layout-footer"
}, ht = /* @__PURE__ */ R({
  __name: "PanelLayout",
  setup(e) {
    return (r, s) => (t(), a("div", ct, [
      r.$slots.header ? (t(), a("div", dt, [
        K(r.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      r.$slots.search ? (t(), a("div", ut, [
        K(r.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      o("div", mt, [
        K(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (t(), a("div", gt, [
        K(r.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), W = (e, r) => {
  const s = e.__vccOpts || e;
  for (const [n, y] of r)
    s[n] = y;
  return s;
}, Oe = /* @__PURE__ */ W(ht, [["__scopeId", "data-v-21565df9"]]), ft = {
  key: 0,
  class: "panel-title-prefix"
}, vt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, pt = /* @__PURE__ */ R({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (r, s) => (t(), $(Te(`h${e.level}`), {
      class: A(["panel-title", e.variant])
    }, {
      default: c(() => [
        e.showPrefix ? (t(), a("span", ft, i(e.prefix), 1)) : (t(), a("span", vt)),
        K(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), yt = /* @__PURE__ */ W(pt, [["__scopeId", "data-v-c3875efc"]]), bt = ["title"], wt = ["width", "height"], kt = /* @__PURE__ */ R({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (r, s) => (t(), a("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (n) => r.$emit("click"))
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
      ])], 8, wt))
    ], 8, bt));
  }
}), _t = /* @__PURE__ */ W(kt, [["__scopeId", "data-v-6fc7f16d"]]), $t = { class: "header-left" }, xt = {
  key: 0,
  class: "header-actions"
}, Ct = /* @__PURE__ */ R({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (r, s) => (t(), a("div", {
      class: A(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", $t, [
        w(yt, { "show-prefix": e.showPrefix }, {
          default: c(() => [
            b(i(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), $(_t, {
          key: 0,
          onClick: s[0] || (s[0] = (n) => r.$emit("info-click"))
        })) : u("", !0)
      ]),
      r.$slots.actions ? (t(), a("div", xt, [
        K(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), De = /* @__PURE__ */ W(Ct, [["__scopeId", "data-v-55a62cd6"]]), St = {
  key: 0,
  class: "section-title-count"
}, Et = {
  key: 1,
  class: "section-title-icon"
}, It = /* @__PURE__ */ R({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (r, s) => (t(), $(Te(`h${e.level}`), {
      class: A(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (n) => e.clickable && r.$emit("click"))
    }, {
      default: c(() => [
        K(r.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), a("span", St, "(" + i(e.count) + ")", 1)) : u("", !0),
        e.clickable ? (t(), a("span", Et, i(e.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Me = /* @__PURE__ */ W(It, [["__scopeId", "data-v-559361eb"]]), zt = { class: "status-grid" }, Lt = { class: "status-grid__column" }, Mt = { class: "status-grid__title" }, Bt = { class: "status-grid__column status-grid__column--right" }, Tt = { class: "status-grid__title" }, Ot = /* @__PURE__ */ R({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (r, s) => (t(), a("div", zt, [
      o("div", Lt, [
        o("h4", Mt, i(e.leftTitle), 1),
        K(r.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Bt, [
        o("h4", Tt, i(e.rightTitle), 1),
        K(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Dt = /* @__PURE__ */ W(Ot, [["__scopeId", "data-v-fe556068"]]), Nt = {
  key: 0,
  class: "status-item__icon"
}, Rt = {
  key: 1,
  class: "status-item__count"
}, Wt = { class: "status-item__label" }, At = /* @__PURE__ */ R({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e, s = U(() => `status-item--${r.variant}`);
    return (n, y) => (t(), a("div", {
      class: A(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), a("span", Nt, i(e.icon), 1)) : u("", !0),
      e.count !== void 0 ? (t(), a("span", Rt, i(e.count), 1)) : u("", !0),
      o("span", Wt, i(e.label), 1)
    ], 2));
  }
}), ue = /* @__PURE__ */ W(At, [["__scopeId", "data-v-6f929183"]]), Ut = { class: "issue-card__header" }, Vt = { class: "issue-card__icon" }, Pt = { class: "issue-card__title" }, Ht = {
  key: 0,
  class: "issue-card__content"
}, Gt = {
  key: 0,
  class: "issue-card__description"
}, Ft = {
  key: 1,
  class: "issue-card__items"
}, Kt = {
  key: 2,
  class: "issue-card__actions"
}, jt = /* @__PURE__ */ R({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const r = e, s = U(() => `issue-card--${r.severity}`);
    return (n, y) => (t(), a("div", {
      class: A(["issue-card", s.value])
    }, [
      o("div", Ut, [
        o("span", Vt, i(e.icon), 1),
        o("h4", Pt, i(e.title), 1)
      ]),
      n.$slots.default || e.description ? (t(), a("div", Ht, [
        e.description ? (t(), a("p", Gt, i(e.description), 1)) : u("", !0),
        K(n.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      e.items && e.items.length ? (t(), a("div", Ft, [
        (t(!0), a(V, null, j(e.items, (x, f) => (t(), a("div", {
          key: f,
          class: "issue-card__item"
        }, [
          y[0] || (y[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, i(x), 1)
        ]))), 128))
      ])) : u("", !0),
      n.$slots.actions ? (t(), a("div", Kt, [
        K(n.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ze = /* @__PURE__ */ W(jt, [["__scopeId", "data-v-df6aa348"]]), qt = ["type", "disabled"], Yt = {
  key: 0,
  class: "spinner"
}, Zt = /* @__PURE__ */ R({
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
    return (r, s) => (t(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: A(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (n) => r.$emit("click", n))
    }, [
      e.loading ? (t(), a("span", Yt)) : u("", !0),
      e.loading ? u("", !0) : K(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, qt));
  }
}), q = /* @__PURE__ */ W(Zt, [["__scopeId", "data-v-772abe47"]]), Xt = { class: "empty-state" }, Jt = {
  key: 0,
  class: "empty-icon"
}, Qt = { class: "empty-message" }, eo = /* @__PURE__ */ R({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (r, s) => (t(), a("div", Xt, [
      e.icon ? (t(), a("div", Jt, i(e.icon), 1)) : u("", !0),
      o("p", Qt, i(e.message), 1),
      e.actionLabel ? (t(), $(q, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (n) => r.$emit("action"))
      }, {
        default: c(() => [
          b(i(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Ne = /* @__PURE__ */ W(eo, [["__scopeId", "data-v-4466284f"]]), to = { class: "branch-indicator" }, oo = { class: "branch-indicator__info" }, ao = { class: "branch-indicator__label" }, so = { class: "branch-indicator__name" }, no = {
  key: 0,
  class: "branch-indicator__remote"
}, lo = {
  key: 0,
  class: "branch-indicator__status"
}, ro = {
  key: 0,
  class: "branch-indicator__ahead"
}, io = {
  key: 1,
  class: "branch-indicator__behind"
}, co = {
  key: 1,
  class: "branch-indicator__actions"
}, uo = /* @__PURE__ */ R({
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
    return (r, s) => (t(), a("div", to, [
      o("div", oo, [
        o("span", ao, i(e.label), 1),
        o("span", so, i(e.branchName), 1),
        e.remote ? (t(), a("span", no, "@" + i(e.remote), 1)) : u("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), a("div", lo, [
        e.commitsAhead ? (t(), a("span", ro, " ↑ " + i(e.commitsAhead) + " ahead ", 1)) : u("", !0),
        e.commitsBehind ? (t(), a("span", io, " ↓ " + i(e.commitsBehind) + " behind ", 1)) : u("", !0)
      ])) : u("", !0),
      r.$slots.actions ? (t(), a("div", co, [
        K(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), mo = /* @__PURE__ */ W(uo, [["__scopeId", "data-v-cb8dd50e"]]), go = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, ho = { style: { "margin-top": "var(--cg-space-6)", "padding-top": "var(--cg-space-4)", "border-top": "1px solid var(--cg-color-border-subtle)" } }, fo = /* @__PURE__ */ R({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: r }) {
    const s = e, n = U(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), y = U(() => {
      const m = s.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), x = U(() => {
      const m = s.status.git_changes, p = s.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && p.new.length === 0 && p.modified.length === 0 && p.deleted.length === 0;
    }), f = U(() => s.status.missing_models_count > 0 || y.value || !s.status.comparison.is_synced), k = U(() => {
      const m = [];
      return s.status.workflows.new.length > 0 && m.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && m.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && m.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && m.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && m.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${m.length > 0 ? m.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (m, p) => (t(), $(Oe, null, {
      header: c(() => [
        w(De, {
          title: "STATUS",
          "show-prefix": !0
        })
      ]),
      content: c(() => [
        w(Me, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: c(() => [...p[7] || (p[7] = [
            b(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        w(Dt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: c(() => [
            e.status.workflows.new.length ? (t(), $(ue, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : u("", !0),
            e.status.workflows.modified.length ? (t(), $(ue, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : u("", !0),
            e.status.workflows.deleted.length ? (t(), $(ue, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : u("", !0),
            w(ue, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: n.value
            }, null, 8, ["count", "separator"])
          ]),
          right: c(() => [
            e.status.git_changes.nodes_added.length ? (t(), $(ue, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : u("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), $(ue, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : u("", !0),
            x.value ? (t(), $(ue, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : u("", !0),
            y.value ? u("", !0) : (t(), $(ue, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        f.value ? (t(), a("div", go, [
          w(Me, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: c(() => [...p[8] || (p[8] = [
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
            actions: c(() => [
              w(q, {
                variant: "secondary",
                size: "sm",
                onClick: p[0] || (p[0] = (S) => m.$emit("view-workflows"))
              }, {
                default: c(() => [...p[9] || (p[9] = [
                  b(" View Details ", -1)
                ])]),
                _: 1
              }),
              w(q, {
                variant: "primary",
                size: "sm",
                onClick: p[1] || (p[1] = (S) => m.$emit("resolve-models"))
              }, {
                default: c(() => [...p[10] || (p[10] = [
                  b(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : u("", !0),
          y.value ? (t(), $(ze, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: k.value
          }, {
            actions: c(() => [
              w(q, {
                variant: "secondary",
                size: "sm",
                onClick: p[2] || (p[2] = (S) => m.$emit("view-history"))
              }, {
                default: c(() => [...p[11] || (p[11] = [
                  b(" View Changes ", -1)
                ])]),
                _: 1
              }),
              w(q, {
                variant: "primary",
                size: "sm",
                onClick: p[3] || (p[3] = (S) => m.$emit("commit-changes"))
              }, {
                default: c(() => [...p[12] || (p[12] = [
                  b(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : u("", !0),
          e.status.comparison.is_synced ? u("", !0) : (t(), $(ze, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: c(() => [
              w(q, {
                variant: "secondary",
                size: "sm",
                onClick: p[4] || (p[4] = (S) => m.$emit("view-debug"))
              }, {
                default: c(() => [...p[13] || (p[13] = [
                  b(" View Logs ", -1)
                ])]),
                _: 1
              }),
              w(q, {
                variant: "primary",
                size: "sm",
                onClick: p[5] || (p[5] = (S) => m.$emit("sync-environment"))
              }, {
                default: c(() => [...p[14] || (p[14] = [
                  b(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : u("", !0),
        !f.value && !y.value ? (t(), $(Ne, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : u("", !0),
        o("div", ho, [
          w(mo, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: c(() => [
              w(q, {
                variant: "secondary",
                size: "sm",
                onClick: p[6] || (p[6] = (S) => m.$emit("switch-branch"))
              }, {
                default: c(() => [...p[15] || (p[15] = [
                  b(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ])
      ]),
      _: 1
    }));
  }
}), vo = /* @__PURE__ */ W(fo, [["__scopeId", "data-v-097c151b"]]), po = { class: "branch-section" }, yo = { class: "section-header" }, bo = {
  key: 0,
  class: "create-branch-row"
}, wo = ["disabled"], ko = {
  key: 1,
  class: "empty"
}, _o = {
  key: 2,
  class: "branch-list"
}, $o = { class: "branch-indicator" }, xo = { class: "branch-name" }, Co = ["onClick"], So = {
  key: 1,
  class: "current-label"
}, Eo = /* @__PURE__ */ R({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: r }) {
    const s = r, n = E(!1), y = E(""), x = E(null);
    function f() {
      y.value.trim() && (s("create", y.value.trim()), k());
    }
    function k() {
      n.value = !1, y.value = "";
    }
    return lt(() => {
      n.value && x.value && x.value.focus();
    }), (m, p) => (t(), a("div", po, [
      o("div", yo, [
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
      n.value ? (t(), a("div", bo, [
        Ve(o("input", {
          ref_key: "createInput",
          ref: x,
          "onUpdate:modelValue": p[1] || (p[1] = (S) => y.value = S),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            _e(f, ["enter"]),
            _e(k, ["escape"])
          ]
        }, null, 544), [
          [Pe, y.value]
        ]),
        o("button", {
          class: "action-btn create",
          onClick: f,
          disabled: !y.value.trim()
        }, " Create ", 8, wo),
        o("button", {
          class: "action-btn cancel",
          onClick: k
        }, " Cancel ")
      ])) : u("", !0),
      e.branches.length === 0 ? (t(), a("div", ko, " No branches found ")) : (t(), a("div", _o, [
        (t(!0), a(V, null, j(e.branches, (S) => (t(), a("div", {
          key: S.name,
          class: A(["branch-item", { current: S.is_current }])
        }, [
          o("span", $o, i(S.is_current ? "●" : "○"), 1),
          o("span", xo, i(S.name), 1),
          S.is_current ? (t(), a("span", So, "current")) : (t(), a("button", {
            key: 0,
            class: "switch-btn",
            onClick: (v) => m.$emit("switch", S.name)
          }, " Switch ", 8, Co))
        ], 2))), 128))
      ]))
    ]));
  }
}), Io = /* @__PURE__ */ W(Eo, [["__scopeId", "data-v-e2bd816d"]]), zo = { class: "history-section" }, Lo = {
  key: 0,
  class: "empty"
}, Mo = {
  key: 1,
  class: "commit-list"
}, Bo = ["onClick"], To = { class: "commit-hash" }, Oo = { class: "commit-message" }, Do = { class: "commit-date" }, No = ["onClick"], Ro = /* @__PURE__ */ R({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (r, s) => (t(), a("div", zo, [
      s[2] || (s[2] = o("h3", { class: "view-title" }, "HISTORY", -1)),
      e.commits.length === 0 ? (t(), a("div", Lo, " No commits yet ")) : (t(), a("div", Mo, [
        (t(!0), a(V, null, j(e.commits, (n) => {
          var y;
          return t(), a("div", {
            key: n.hash,
            class: "commit-item",
            onClick: (x) => r.$emit("select", n)
          }, [
            o("span", To, i(n.short_hash || ((y = n.hash) == null ? void 0 : y.slice(0, 7))), 1),
            o("span", Oo, i(n.message), 1),
            o("span", Do, i(n.date_relative || n.relative_date), 1),
            o("div", {
              class: "commit-actions",
              onClick: s[0] || (s[0] = be(() => {
              }, ["stop"]))
            }, [
              o("button", {
                class: "action-btn",
                onClick: (x) => r.$emit("checkout", n),
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
              ])], 8, No)
            ])
          ], 8, Bo);
        }), 128))
      ]))
    ]));
  }
}), Wo = /* @__PURE__ */ W(Ro, [["__scopeId", "data-v-97388106"]]), Ue = [
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
  ...Array(12).fill(null).map((e, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], Ao = {
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
], Uo = [
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
], Vo = [
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
  createEnvironment: async (e, r, s) => {
    await Q(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${r}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await Q(400), Ue),
  getWorkflowDetails: async (e) => (await Q(300), Ao[e] || {
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
  installWorkflowDeps: async (e, r, s) => {
    await Q(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${r}, models=${s}`);
  },
  setModelImportance: async (e, r, s) => {
    await Q(200), console.log(`[MOCK] Setting ${r} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await Q(350), je),
  getWorkspaceModels: async () => (await Q(400), Uo),
  updateModelSource: async (e, r) => {
    await Q(300), console.log(`[MOCK] Updating source for ${e}: ${r}`);
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
  getEnvironmentLogs: async (e, r) => (await Q(250), (e ? Ce.filter((n) => n.level === e) : Ce).slice(0, r || 100)),
  getWorkspaceLogs: async (e, r) => {
    await Q(300);
    const s = [...Ce, ...Ce.map((y) => ({
      ...y,
      context: { ...y.context, environment: "testing" }
    }))];
    return (e ? s.filter((y) => y.level === e) : s).slice(0, r || 100);
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
  getCommitHistory: async (e = 10) => (await Q(300), Vo.slice(0, e)),
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
  return new Promise((r) => setTimeout(r, e));
}
function ge() {
  const e = E(!1), r = E(null);
  async function s(L, Y) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const ae = await window.app.api.fetchApi(L, Y);
    if (!ae.ok) {
      const xe = await ae.json().catch(() => ({}));
      throw new Error(xe.error || xe.message || `Request failed: ${ae.status}`);
    }
    return ae.json();
  }
  async function n() {
    return J.getStatus();
  }
  async function y(L, Y = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: L, allow_issues: Y })
    });
  }
  async function x(L = 10, Y = 0) {
    {
      const ae = await J.getCommitHistory(L);
      return {
        commits: ae,
        total: ae.length,
        offset: Y
      };
    }
  }
  async function f(L) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: L })
    });
  }
  async function k() {
    return J.getBranches();
  }
  async function m(L) {
    return s(`/v2/comfygit/commit/${L}`);
  }
  async function p(L, Y = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: L, force: Y })
    });
  }
  async function S(L, Y = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: L, start_point: Y })
    });
  }
  async function v(L, Y = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: L, force: Y })
    });
  }
  async function D() {
    return J.getEnvironments();
  }
  async function P(L) {
    return J.switchEnvironment(L);
  }
  async function ee() {
    return null;
  }
  async function G(L, Y, ae) {
    return await J.createEnvironment(L, Y, ae), { status: "success" };
  }
  async function M(L) {
    return await J.deleteEnvironment(L), { status: "success" };
  }
  async function O() {
    return J.getWorkflows();
  }
  async function Z(L) {
    return J.getWorkflowDetails(L);
  }
  async function te(L) {
    return J.resolveWorkflow(L);
  }
  async function T(L, Y, ae) {
    return await J.installWorkflowDeps(L, Y, ae), { status: "success" };
  }
  async function B(L, Y, ae) {
    return J.setModelImportance(L, Y, ae);
  }
  async function h() {
    return J.getEnvironmentModels();
  }
  async function g() {
    return J.getWorkspaceModels();
  }
  async function l(L, Y) {
    return J.updateModelSource(L, Y);
  }
  async function _(L) {
    return J.deleteModel(L);
  }
  async function C(L) {
    return await J.downloadModel(L), { status: "success" };
  }
  async function I() {
    return J.getConfig();
  }
  async function H(L) {
    return J.updateConfig(L);
  }
  async function F(L, Y) {
    return J.getEnvironmentLogs(L, Y);
  }
  async function ie(L, Y) {
    return J.getWorkspaceLogs(L, Y);
  }
  return {
    isLoading: e,
    error: r,
    getStatus: n,
    commit: y,
    getHistory: x,
    exportEnv: f,
    // Git Operations
    getBranches: k,
    getCommitDetail: m,
    checkout: p,
    createBranch: S,
    switchBranch: v,
    // Environment Management
    getEnvironments: D,
    switchEnvironment: P,
    getSwitchProgress: ee,
    createEnvironment: G,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: O,
    getWorkflowDetails: Z,
    resolveWorkflow: te,
    installWorkflowDeps: T,
    setModelImportance: B,
    // Model Management
    getEnvironmentModels: h,
    getWorkspaceModels: g,
    updateModelSource: l,
    deleteModel: _,
    downloadModel: C,
    // Settings
    getConfig: I,
    updateConfig: H,
    // Debug/Logs
    getEnvironmentLogs: F,
    getWorkspaceLogs: ie
  };
}
const Po = { class: "base-modal-header" }, Ho = {
  key: 0,
  class: "base-modal-title"
}, Go = { class: "base-modal-body" }, Fo = {
  key: 0,
  class: "base-modal-loading"
}, Ko = {
  key: 1,
  class: "base-modal-error"
}, jo = {
  key: 0,
  class: "base-modal-footer"
}, qo = /* @__PURE__ */ R({
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
  setup(e, { emit: r }) {
    const s = e, n = r;
    function y() {
      s.closeOnOverlayClick && n("close");
    }
    function x(f) {
      f.key === "Escape" && n("close");
    }
    return de(() => {
      document.addEventListener("keydown", x), document.body.style.overflow = "hidden";
    }), rt(() => {
      document.removeEventListener("keydown", x), document.body.style.overflow = "";
    }), (f, k) => (t(), $(He, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: y
      }, [
        o("div", {
          class: A(["base-modal-content", e.size]),
          onClick: k[1] || (k[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", Po, [
            K(f.$slots, "header", {}, () => [
              e.title ? (t(), a("h3", Ho, i(e.title), 1)) : u("", !0)
            ], !0),
            e.showCloseButton ? (t(), a("button", {
              key: 0,
              class: "base-modal-close",
              onClick: k[0] || (k[0] = (m) => f.$emit("close"))
            }, [...k[2] || (k[2] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : u("", !0)
          ]),
          o("div", Go, [
            e.loading ? (t(), a("div", Fo, "Loading...")) : e.error ? (t(), a("div", Ko, i(e.error), 1)) : K(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (t(), a("div", jo, [
            K(f.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), Ee = /* @__PURE__ */ W(qo, [["__scopeId", "data-v-700d367b"]]), Yo = ["type", "disabled"], Zo = {
  key: 0,
  class: "spinner"
}, Xo = /* @__PURE__ */ R({
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
    return (r, s) => (t(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: A(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (n) => r.$emit("click", n))
    }, [
      e.loading ? (t(), a("span", Zo)) : u("", !0),
      K(r.$slots, "default", {}, void 0, !0)
    ], 10, Yo));
  }
}), ne = /* @__PURE__ */ W(Xo, [["__scopeId", "data-v-f3452606"]]), Jo = {
  key: 0,
  class: "base-title-count"
}, Qo = /* @__PURE__ */ R({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (r, s) => (t(), $(Te(`h${e.level}`), {
      class: A(["base-title", e.variant])
    }, {
      default: c(() => [
        K(r.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), a("span", Jo, "(" + i(e.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), me = /* @__PURE__ */ W(Qo, [["__scopeId", "data-v-5a01561d"]]), ea = ["value", "disabled"], ta = {
  key: 0,
  value: "",
  disabled: ""
}, oa = ["value"], aa = {
  key: 0,
  class: "base-select-error"
}, sa = /* @__PURE__ */ R({
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
    function r(n) {
      return typeof n == "string" ? n : n.value;
    }
    function s(n) {
      return typeof n == "string" ? n : n.label;
    }
    return (n, y) => (t(), a("div", {
      class: A(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: A(["base-select", { error: !!e.error }]),
        onChange: y[0] || (y[0] = (x) => n.$emit("update:modelValue", x.target.value))
      }, [
        e.placeholder ? (t(), a("option", ta, i(e.placeholder), 1)) : u("", !0),
        (t(!0), a(V, null, j(e.options, (x) => (t(), a("option", {
          key: r(x),
          value: r(x)
        }, i(s(x)), 9, oa))), 128))
      ], 42, ea),
      e.error ? (t(), a("span", aa, i(e.error), 1)) : u("", !0)
    ], 2));
  }
}), na = /* @__PURE__ */ W(sa, [["__scopeId", "data-v-7436d745"]]), la = { class: "detail-section" }, ra = {
  key: 0,
  class: "empty-message"
}, ia = { class: "model-header" }, ca = { class: "model-name" }, da = { class: "model-details" }, ua = { class: "model-row" }, ma = { class: "model-row" }, ga = {
  key: 0,
  class: "model-row"
}, ha = { class: "value" }, fa = {
  key: 1,
  class: "model-row"
}, va = { class: "value" }, pa = {
  key: 0,
  class: "model-actions"
}, ya = { class: "detail-section" }, ba = {
  key: 0,
  class: "empty-message"
}, wa = { class: "node-name" }, ka = {
  key: 0,
  class: "node-version"
}, _a = /* @__PURE__ */ R({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: r }) {
    const s = e, n = r, { getWorkflowDetails: y, setModelImportance: x } = ge(), f = E(null), k = E(!1), m = E(null), p = E(!1), S = E({}), v = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function D() {
      k.value = !0, m.value = null;
      try {
        f.value = await y(s.workflowName);
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load workflow details";
      } finally {
        k.value = !1;
      }
    }
    function P(G, M) {
      S.value[G] = M, p.value = !0;
    }
    async function ee() {
      if (!p.value) {
        n("close");
        return;
      }
      k.value = !0, m.value = null;
      try {
        for (const [G, M] of Object.entries(S.value))
          await x(s.workflowName, G, M);
        n("close");
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to save changes";
      } finally {
        k.value = !1;
      }
    }
    return de(D), (G, M) => (t(), $(Ee, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: k.value,
      error: m.value || void 0,
      onClose: M[2] || (M[2] = (O) => n("close"))
    }, {
      body: c(() => [
        f.value ? (t(), a(V, { key: 0 }, [
          o("section", la, [
            w(me, { variant: "section" }, {
              default: c(() => [
                b("MODELS USED (" + i(f.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.models.length === 0 ? (t(), a("div", ra, " No models used in this workflow ")) : u("", !0),
            (t(!0), a(V, null, j(f.value.models, (O) => (t(), a("div", {
              key: O.hash,
              class: "model-card"
            }, [
              o("div", ia, [
                M[3] || (M[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", ca, i(O.filename), 1)
              ]),
              o("div", da, [
                o("div", ua, [
                  M[4] || (M[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: A(["value", O.status === "available" ? "success" : "error"])
                  }, i(O.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", ma, [
                  M[5] || (M[5] = o("span", { class: "label" }, "Importance:", -1)),
                  w(na, {
                    "model-value": S.value[O.hash] || O.importance,
                    options: v,
                    "onUpdate:modelValue": (Z) => P(O.hash, Z)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                O.node_type ? (t(), a("div", ga, [
                  M[6] || (M[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", ha, i(O.node_type) + " (Node " + i(O.node_id) + ")", 1)
                ])) : u("", !0),
                O.size_mb ? (t(), a("div", fa, [
                  M[7] || (M[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", va, i(O.size_mb) + " MB", 1)
                ])) : u("", !0)
              ]),
              O.status === "missing" ? (t(), a("div", pa, [
                w(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[0] || (M[0] = (Z) => n("resolve"))
                }, {
                  default: c(() => [...M[8] || (M[8] = [
                    b(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : u("", !0)
            ]))), 128))
          ]),
          M[9] || (M[9] = o("div", { class: "info-box" }, [
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
          o("section", ya, [
            w(me, { variant: "section" }, {
              default: c(() => [
                b("NODES USED (" + i(f.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.nodes.length === 0 ? (t(), a("div", ba, " No custom nodes used in this workflow ")) : u("", !0),
            (t(!0), a(V, null, j(f.value.nodes, (O) => (t(), a("div", {
              key: O.name,
              class: "node-item"
            }, [
              o("span", {
                class: A(["node-status", O.installed ? "installed" : "missing"])
              }, i(O.installed ? "✓" : "✕"), 3),
              o("span", wa, i(O.name), 1),
              O.version ? (t(), a("span", ka, "v" + i(O.version), 1)) : u("", !0)
            ]))), 128))
          ])
        ], 64)) : u("", !0)
      ]),
      footer: c(() => [
        w(ne, {
          variant: "secondary",
          onClick: M[1] || (M[1] = (O) => n("close"))
        }, {
          default: c(() => [...M[10] || (M[10] = [
            b(" Close ", -1)
          ])]),
          _: 1
        }),
        p.value ? (t(), $(ne, {
          key: 0,
          variant: "primary",
          onClick: ee
        }, {
          default: c(() => [...M[11] || (M[11] = [
            b(" Save Changes ", -1)
          ])]),
          _: 1
        })) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), $a = /* @__PURE__ */ W(_a, [["__scopeId", "data-v-6ce9a41c"]]), xa = {
  key: 0,
  class: "resolve-section"
}, Ca = { class: "resolve-card success-card" }, Sa = { class: "items-list" }, Ea = { class: "item-info" }, Ia = { class: "item-name" }, za = {
  key: 0,
  class: "item-meta"
}, La = { class: "match-type" }, Ma = { class: "source" }, Ba = {
  key: 1,
  class: "resolve-section"
}, Ta = { class: "resolve-card warning-card" }, Oa = { class: "items-list" }, Da = { class: "item-info" }, Na = { class: "item-name" }, Ra = { class: "item-meta" }, Wa = { key: 0 }, Aa = { key: 1 }, Ua = {
  key: 0,
  class: "item-warning"
}, Va = {
  key: 0,
  class: "item-action"
}, Pa = ["onClick"], Ha = {
  key: 2,
  class: "resolve-section"
}, Ga = { class: "info-text" }, Fa = { class: "actions-summary" }, Ka = { class: "summary-list" }, ja = { key: 0 }, qa = { key: 1 }, Ya = { key: 2 }, Za = {
  key: 0,
  class: "estimated-size"
}, Xa = /* @__PURE__ */ R({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: r }) {
    const s = e, n = r, { resolveWorkflow: y, installWorkflowDeps: x } = ge(), f = E(null), k = E(!1), m = E(!1), p = E(null), S = U(() => {
      var B;
      return f.value ? ((B = f.value.download_results) == null ? void 0 : B.every((h) => h.can_download)) ?? !1 : !1;
    });
    async function v() {
      k.value = !0, p.value = null;
      try {
        f.value = await y(s.workflowName);
      } catch (B) {
        p.value = B instanceof Error ? B.message : "Failed to analyze workflow";
      } finally {
        k.value = !1;
      }
    }
    function D(B) {
      return !B.possible_matches || B.possible_matches.length === 0 ? null : B.possible_matches.reduce(
        (h, g) => g.match_confidence > h.match_confidence ? g : h
      );
    }
    function P(B) {
      return B >= 0.9 ? "high" : B >= 0.7 ? "medium" : "low";
    }
    function ee(B) {
      const h = D(B);
      return h ? h.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function G(B) {
      var h, g;
      return (g = (h = f.value) == null ? void 0 : h.download_results) == null ? void 0 : g.find((l) => l.model === B);
    }
    function M(B) {
      const h = G(B);
      return (h == null ? void 0 : h.can_download) ?? !1;
    }
    function O(B) {
      const h = G(B);
      return (h == null ? void 0 : h.source_url) || null;
    }
    function Z(B) {
      window.open(B, "_blank");
    }
    async function te() {
      if (!(!f.value || m.value)) {
        m.value = !0, p.value = null;
        try {
          await x(
            s.workflowName,
            f.value.nodes_to_install,
            []
          ), n("install"), n("refresh"), n("close");
        } catch (B) {
          p.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function T() {
      if (!(!f.value || m.value)) {
        m.value = !0, p.value = null;
        try {
          await x(
            s.workflowName,
            f.value.nodes_to_install,
            f.value.models_to_download
          ), n("install"), n("refresh"), n("close");
        } catch (B) {
          p.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return de(v), (B, h) => (t(), $(Ee, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: k.value,
      error: p.value || void 0,
      onClose: h[1] || (h[1] = (g) => n("close"))
    }, {
      body: c(() => [
        f.value ? (t(), a(V, { key: 0 }, [
          h[5] || (h[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          f.value.nodes_unresolved.length > 0 ? (t(), a("section", xa, [
            w(me, { variant: "section" }, {
              default: c(() => [
                b("NODES (" + i(f.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ca, [
              h[2] || (h[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Sa, [
                (t(!0), a(V, null, j(f.value.nodes_unresolved, (g) => {
                  var l;
                  return t(), a("div", {
                    key: g.node_type,
                    class: "item"
                  }, [
                    o("div", Ea, [
                      o("div", Ia, i(((l = D(g)) == null ? void 0 : l.package_id) || g.node_type), 1),
                      D(g) ? (t(), a("div", za, [
                        o("span", {
                          class: A(["confidence-badge", P(D(g).match_confidence)])
                        }, i(Math.round(D(g).match_confidence * 100)) + "% match ", 3),
                        o("span", La, i(D(g).match_type), 1),
                        o("span", Ma, "Source: " + i(ee(g)), 1)
                      ])) : u("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : u("", !0),
          f.value.models_unresolved.length > 0 ? (t(), a("section", Ba, [
            w(me, { variant: "section" }, {
              default: c(() => [
                b("MODELS (" + i(f.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ta, [
              h[3] || (h[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Oa, [
                (t(!0), a(V, null, j(f.value.models_unresolved, (g) => (t(), a("div", {
                  key: g.filename,
                  class: "item"
                }, [
                  o("div", Da, [
                    o("div", Na, i(g.filename), 1),
                    o("div", Ra, [
                      g.expected_category ? (t(), a("span", Wa, "Type: " + i(g.expected_category), 1)) : u("", !0),
                      G(g.filename) ? (t(), a("span", Aa, " Size: ~" + i(G(g.filename).estimated_size_mb) + " MB ", 1)) : u("", !0)
                    ]),
                    M(g.filename) ? u("", !0) : (t(), a("div", Ua, " No auto-download source configured "))
                  ]),
                  O(g.filename) ? (t(), a("div", Va, [
                    o("button", {
                      class: "link-btn",
                      onClick: (l) => Z(O(g.filename))
                    }, " Open Source ↗ ", 8, Pa)
                  ])) : u("", !0)
                ]))), 128))
              ])
            ])
          ])) : u("", !0),
          f.value.nodes_resolved.length > 0 || f.value.models_resolved.length > 0 ? (t(), a("section", Ha, [
            w(me, { variant: "section" }, {
              default: c(() => [
                b(" ALREADY AVAILABLE (" + i(f.value.nodes_resolved.length + f.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", Ga, i(f.value.nodes_resolved.length) + " nodes and " + i(f.value.models_resolved.length) + " models are already installed ", 1)
          ])) : u("", !0),
          o("div", Fa, [
            h[4] || (h[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", Ka, [
              f.value.nodes_to_install.length ? (t(), a("li", ja, " Install " + i(f.value.nodes_to_install.length) + " nodes (~" + i(f.value.estimated_time_seconds) + "s) ", 1)) : u("", !0),
              f.value.nodes_to_install.length ? (t(), a("li", qa, " Restart ComfyUI to load new nodes ")) : u("", !0),
              f.value.models_to_download.length ? (t(), a("li", Ya, " You'll still need to download " + i(f.value.models_to_download.length) + " model(s) manually ", 1)) : u("", !0)
            ]),
            f.value.estimated_size_mb ? (t(), a("div", Za, " Estimated download: " + i(f.value.estimated_size_mb) + " MB ", 1)) : u("", !0)
          ])
        ], 64)) : u("", !0)
      ]),
      footer: c(() => [
        w(ne, {
          variant: "secondary",
          onClick: h[0] || (h[0] = (g) => n("close"))
        }, {
          default: c(() => [...h[6] || (h[6] = [
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
          default: c(() => [...h[7] || (h[7] = [
            b(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0),
        f.value && (f.value.nodes_to_install.length || f.value.models_to_download.length) ? (t(), $(ne, {
          key: 1,
          variant: "primary",
          disabled: m.value || f.value.models_to_download.length > 0 && !S.value,
          loading: m.value,
          onClick: T
        }, {
          default: c(() => [...h[8] || (h[8] = [
            b(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ja = /* @__PURE__ */ W(Xa, [["__scopeId", "data-v-d68efb14"]]), Qa = { class: "workflows-section" }, es = { class: "section-header" }, ts = { class: "search-bar" }, os = {
  key: 0,
  class: "loading"
}, as = {
  key: 1,
  class: "error-message"
}, ss = {
  key: 2,
  class: "workflows-content"
}, ns = {
  key: 0,
  class: "workflow-group"
}, ls = { class: "group-title" }, rs = { class: "workflow-info" }, is = { class: "workflow-name" }, cs = { class: "workflow-status" }, ds = { class: "workflow-actions" }, us = ["onClick"], ms = ["onClick"], gs = {
  key: 1,
  class: "workflow-group"
}, hs = { class: "group-title" }, fs = { class: "workflow-info" }, vs = { class: "workflow-name" }, ps = { class: "workflow-actions" }, ys = ["onClick"], bs = {
  key: 2,
  class: "workflow-group"
}, ws = { class: "group-title" }, ks = { class: "workflow-info" }, _s = { class: "workflow-name" }, $s = { class: "workflow-actions" }, xs = ["onClick"], Cs = {
  key: 3,
  class: "workflow-group"
}, Ss = { class: "workflow-info" }, Es = { class: "workflow-name" }, Is = { class: "workflow-actions" }, zs = ["onClick"], Ls = {
  key: 4,
  class: "empty-state"
}, Ms = { key: 0 }, Bs = { key: 1 }, Ts = /* @__PURE__ */ R({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: r }) {
    const s = r, { getWorkflows: n } = ge(), y = E([]), x = E(!1), f = E(null), k = E(""), m = E(!1), p = E(!1), S = E(!1), v = E(!1), D = E(null), P = U(
      () => y.value.filter((I) => I.status === "broken")
    ), ee = U(
      () => y.value.filter((I) => I.status === "new")
    ), G = U(
      () => y.value.filter((I) => I.status === "modified")
    ), M = U(
      () => y.value.filter((I) => I.status === "synced")
    ), O = U(() => {
      if (!k.value.trim()) return y.value;
      const I = k.value.toLowerCase();
      return y.value.filter((H) => H.name.toLowerCase().includes(I));
    }), Z = U(
      () => P.value.filter(
        (I) => !k.value.trim() || I.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), te = U(
      () => ee.value.filter(
        (I) => !k.value.trim() || I.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), T = U(
      () => G.value.filter(
        (I) => !k.value.trim() || I.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), B = U(
      () => M.value.filter(
        (I) => !k.value.trim() || I.name.toLowerCase().includes(k.value.toLowerCase())
      )
    );
    async function h() {
      x.value = !0, f.value = null;
      try {
        y.value = await n();
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to load workflows";
      } finally {
        x.value = !1;
      }
    }
    function g(I) {
      D.value = I, S.value = !0;
    }
    function l(I) {
      D.value = I, v.value = !0;
    }
    function _() {
      alert("Bulk resolution not yet implemented");
    }
    function C() {
      s("refresh");
    }
    return de(h), (I, H) => (t(), a("div", Qa, [
      o("div", es, [
        H[7] || (H[7] = o("h3", { class: "view-title" }, "WORKFLOWS", -1)),
        P.value.length > 0 ? (t(), a("button", {
          key: 0,
          class: "resolve-all-btn",
          onClick: _
        }, " RESOLVE ALL ISSUES ")) : u("", !0)
      ]),
      o("div", ts, [
        Ve(o("input", {
          "onUpdate:modelValue": H[0] || (H[0] = (F) => k.value = F),
          type: "text",
          placeholder: "🔍 Search workflows...",
          class: "search-input"
        }, null, 512), [
          [Pe, k.value]
        ])
      ]),
      x.value ? (t(), a("div", os, "Loading workflows...")) : f.value ? (t(), a("div", as, i(f.value), 1)) : (t(), a("div", ss, [
        Z.value.length ? (t(), a("section", ns, [
          o("h4", ls, "BROKEN (" + i(Z.value.length) + ")", 1),
          (t(!0), a(V, null, j(Z.value, (F) => (t(), a("div", {
            key: F.name,
            class: "workflow-item broken"
          }, [
            o("div", rs, [
              o("div", is, "⚠ " + i(F.name), 1),
              o("div", cs, " Missing: " + i(F.missing_nodes) + " nodes, " + i(F.missing_models) + " models ", 1)
            ]),
            o("div", ds, [
              o("button", {
                class: "action-btn",
                onClick: (ie) => l(F.name)
              }, " Resolve ▸ ", 8, us),
              o("button", {
                class: "action-btn secondary",
                onClick: (ie) => g(F.name)
              }, " Details ▸ ", 8, ms)
            ])
          ]))), 128))
        ])) : u("", !0),
        te.value.length ? (t(), a("section", gs, [
          o("h4", hs, "NEW (" + i(te.value.length) + ")", 1),
          (t(!0), a(V, null, j(te.value, (F) => (t(), a("div", {
            key: F.name,
            class: "workflow-item new"
          }, [
            o("div", fs, [
              o("div", vs, "● " + i(F.name), 1),
              H[8] || (H[8] = o("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            o("div", ps, [
              o("button", {
                class: "action-btn secondary",
                onClick: (ie) => g(F.name)
              }, " Details ", 8, ys)
            ])
          ]))), 128))
        ])) : u("", !0),
        T.value.length ? (t(), a("section", bs, [
          o("h4", ws, "MODIFIED (" + i(T.value.length) + ")", 1),
          (t(!0), a(V, null, j(T.value, (F) => (t(), a("div", {
            key: F.name,
            class: "workflow-item modified"
          }, [
            o("div", ks, [
              o("div", _s, "⚡ " + i(F.name), 1),
              H[9] || (H[9] = o("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            o("div", $s, [
              o("button", {
                class: "action-btn secondary",
                onClick: (ie) => g(F.name)
              }, " Details ", 8, xs)
            ])
          ]))), 128))
        ])) : u("", !0),
        B.value.length ? (t(), a("section", Cs, [
          o("h4", {
            class: "group-title clickable",
            onClick: H[1] || (H[1] = (F) => m.value = !m.value)
          }, " SYNCED (" + i(B.value.length) + ") " + i(m.value ? "▼" : "▸"), 1),
          m.value ? (t(), a(V, { key: 0 }, [
            (t(!0), a(V, null, j(B.value.slice(0, p.value ? void 0 : 5), (F) => (t(), a("div", {
              key: F.name,
              class: "workflow-item synced"
            }, [
              o("div", Ss, [
                o("div", Es, i(F.name), 1),
                H[10] || (H[10] = o("div", { class: "workflow-status" }, "✓ Ready", -1))
              ]),
              o("div", Is, [
                o("button", {
                  class: "action-btn secondary",
                  onClick: (ie) => g(F.name)
                }, " Details ", 8, zs)
              ])
            ]))), 128)),
            !p.value && B.value.length > 5 ? (t(), a("button", {
              key: 0,
              class: "show-more-btn",
              onClick: H[2] || (H[2] = (F) => p.value = !0)
            }, " View all " + i(B.value.length) + " → ", 1)) : u("", !0)
          ], 64)) : u("", !0)
        ])) : u("", !0),
        O.value.length ? u("", !0) : (t(), a("div", Ls, [
          k.value ? (t(), a("p", Ms, 'No workflows match "' + i(k.value) + '"', 1)) : (t(), a("p", Bs, "No workflows found in this environment."))
        ]))
      ])),
      S.value && D.value ? (t(), $($a, {
        key: 3,
        "workflow-name": D.value,
        onClose: H[3] || (H[3] = (F) => S.value = !1),
        onResolve: H[4] || (H[4] = (F) => l(D.value))
      }, null, 8, ["workflow-name"])) : u("", !0),
      v.value && D.value ? (t(), $(Ja, {
        key: 4,
        "workflow-name": D.value,
        onClose: H[5] || (H[5] = (F) => v.value = !1),
        onInstall: C,
        onRefresh: H[6] || (H[6] = (F) => s("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ]));
  }
}), Os = /* @__PURE__ */ W(Ts, [["__scopeId", "data-v-abf8513b"]]), Ds = { class: "search-input-wrapper" }, Ns = ["value", "placeholder"], Rs = /* @__PURE__ */ R({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: r }) {
    const s = e, n = r, y = E(null);
    let x;
    function f(m) {
      const p = m.target.value;
      s.debounce > 0 ? (clearTimeout(x), x = window.setTimeout(() => {
        n("update:modelValue", p);
      }, s.debounce)) : n("update:modelValue", p);
    }
    function k() {
      var m;
      n("update:modelValue", ""), n("clear"), (m = y.value) == null || m.focus();
    }
    return de(() => {
      s.autoFocus && y.value && y.value.focus();
    }), (m, p) => (t(), a("div", Ds, [
      o("input", {
        ref_key: "inputRef",
        ref: y,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: _e(k, ["escape"])
      }, null, 40, Ns),
      e.clearable && e.modelValue ? (t(), a("button", {
        key: 0,
        class: "clear-button",
        onClick: k,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Ws = /* @__PURE__ */ W(Rs, [["__scopeId", "data-v-266f857a"]]), As = { class: "search-bar" }, Us = /* @__PURE__ */ R({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (r, s) => (t(), a("div", As, [
      w(Ws, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (n) => r.$emit("update:modelValue", n)),
        onClear: s[1] || (s[1] = (n) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), qe = /* @__PURE__ */ W(Us, [["__scopeId", "data-v-3d51bbfd"]]), Vs = { class: "section-group" }, Ps = {
  key: 0,
  class: "section-content"
}, Hs = /* @__PURE__ */ R({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: r }) {
    const s = e, n = r, y = E(s.initiallyExpanded);
    function x() {
      s.collapsible && (y.value = !y.value, n("toggle", y.value));
    }
    return (f, k) => (t(), a("section", Vs, [
      w(Me, {
        count: e.count,
        clickable: e.collapsible,
        expanded: y.value,
        onClick: x
      }, {
        default: c(() => [
          b(i(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || y.value ? (t(), a("div", Ps, [
        K(f.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ve = /* @__PURE__ */ W(Hs, [["__scopeId", "data-v-c48e33ed"]]), Gs = { class: "item-header" }, Fs = {
  key: 0,
  class: "item-icon"
}, Ks = { class: "item-info" }, js = {
  key: 0,
  class: "item-title"
}, qs = {
  key: 1,
  class: "item-subtitle"
}, Ys = {
  key: 0,
  class: "item-details"
}, Zs = {
  key: 1,
  class: "item-actions"
}, Xs = /* @__PURE__ */ R({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const s = e, n = U(() => s.status ? `status-${s.status}` : "");
    return (y, x) => (t(), a("div", {
      class: A(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: x[0] || (x[0] = (f) => e.clickable && y.$emit("click"))
    }, [
      o("div", Gs, [
        y.$slots.icon ? (t(), a("span", Fs, [
          K(y.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        o("div", Ks, [
          y.$slots.title ? (t(), a("div", js, [
            K(y.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          y.$slots.subtitle ? (t(), a("div", qs, [
            K(y.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      y.$slots.details ? (t(), a("div", Ys, [
        K(y.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      y.$slots.actions ? (t(), a("div", Zs, [
        K(y.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), pe = /* @__PURE__ */ W(Xs, [["__scopeId", "data-v-cc435e0e"]]), Js = /* @__PURE__ */ R({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (r, s) => (t(), a("span", {
      class: A(["detail-label"]),
      style: Ge({ minWidth: e.minWidth })
    }, [
      K(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Qs = /* @__PURE__ */ W(Js, [["__scopeId", "data-v-75e9eeb8"]]), en = /* @__PURE__ */ R({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (r, s) => (t(), a("span", {
      class: A(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      K(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), tn = /* @__PURE__ */ W(en, [["__scopeId", "data-v-2f186e4c"]]), on = { class: "detail-row" }, an = /* @__PURE__ */ R({
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
    return (r, s) => (t(), a("div", on, [
      w(Qs, { "min-width": e.labelMinWidth }, {
        default: c(() => [
          b(i(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), $(tn, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: c(() => [
          b(i(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : K(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), oe = /* @__PURE__ */ W(an, [["__scopeId", "data-v-ef15664a"]]), sn = /* @__PURE__ */ R({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (r, s) => (t(), a("div", {
      class: A(["summary-bar", e.variant])
    }, [
      K(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ W(sn, [["__scopeId", "data-v-ccb7816e"]]), nn = { class: "loading-state" }, ln = { class: "loading-message" }, rn = /* @__PURE__ */ R({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (r, s) => (t(), a("div", nn, [
      s[0] || (s[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", ln, i(e.message), 1)
    ]));
  }
}), Ze = /* @__PURE__ */ W(rn, [["__scopeId", "data-v-ad8436c9"]]), cn = { class: "error-state" }, dn = { class: "error-message" }, un = /* @__PURE__ */ R({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (r, s) => (t(), a("div", cn, [
      s[2] || (s[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", dn, i(e.message), 1),
      e.retry ? (t(), $(q, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (n) => r.$emit("retry"))
      }, {
        default: c(() => [...s[1] || (s[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), Xe = /* @__PURE__ */ W(un, [["__scopeId", "data-v-5397be48"]]), mn = { class: "popover-header" }, gn = { class: "popover-title" }, hn = { class: "popover-content" }, fn = {
  key: 0,
  class: "popover-actions"
}, vn = /* @__PURE__ */ R({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (r, s) => (t(), $(He, { to: "body" }, [
      e.show ? (t(), a("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (n) => r.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: Ge({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", mn, [
            o("h4", gn, i(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (n) => r.$emit("close"))
            }, "✕")
          ]),
          o("div", hn, [
            K(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (t(), a("div", fn, [
            K(r.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ W(vn, [["__scopeId", "data-v-057df510"]]), pn = /* @__PURE__ */ R({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: r }) {
    const s = r, { getEnvironmentModels: n, getStatus: y } = ge(), x = E([]), f = E([]), k = E("production"), m = E(!1), p = E(null), S = E(""), v = E(!1);
    function D() {
      v.value = !1, s("navigate", "model-index");
    }
    const P = U(
      () => x.value.reduce((l, _) => l + (_.size_mb || _.size || 0), 0)
    ), ee = U(() => {
      if (!S.value.trim()) return x.value;
      const l = S.value.toLowerCase();
      return x.value.filter((_) => _.filename.toLowerCase().includes(l));
    }), G = U(() => {
      if (!S.value.trim()) return f.value;
      const l = S.value.toLowerCase();
      return f.value.filter((_) => _.filename.toLowerCase().includes(l));
    }), M = U(
      () => ee.value.filter((l) => l.type === "checkpoints" || l.category === "checkpoints")
    ), O = U(
      () => ee.value.filter((l) => l.type === "loras" || l.category === "loras")
    ), Z = U(
      () => ee.value.filter(
        (l) => l.type !== "checkpoints" && l.category !== "checkpoints" && l.type !== "loras" && l.category !== "loras"
      )
    );
    function te(l) {
      return l ? l >= 1024 ? `${(l / 1024).toFixed(1)} GB` : `${l.toFixed(0)} MB` : "Unknown";
    }
    function T(l) {
      s("navigate", "model-index");
    }
    function B(l) {
      s("navigate", "model-index");
    }
    function h(l) {
      alert(`Download functionality not yet implemented for ${l}`);
    }
    async function g() {
      m.value = !0, p.value = null;
      try {
        const l = await n();
        x.value = l, f.value = [];
        const _ = await y();
        k.value = _.environment || "production";
      } catch (l) {
        p.value = l instanceof Error ? l.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return de(g), (l, _) => (t(), a(V, null, [
      w(Oe, null, {
        header: c(() => [
          w(De, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (C) => v.value = !0)
          })
        ]),
        search: c(() => [
          w(qe, {
            modelValue: S.value,
            "onUpdate:modelValue": _[1] || (_[1] = (C) => S.value = C),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: c(() => [
          m.value ? (t(), $(Ze, {
            key: 0,
            message: "Loading environment models..."
          })) : p.value ? (t(), $(Xe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: g
          }, null, 8, ["message"])) : (t(), a(V, { key: 2 }, [
            x.value.length ? (t(), $(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: c(() => [
                b(" Total: " + i(x.value.length) + " models • " + i(te(P.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            M.value.length ? (t(), $(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: c(() => [
                (t(!0), a(V, null, j(M.value, (C) => (t(), $(pe, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: c(() => [..._[3] || (_[3] = [
                    b("📦", -1)
                  ])]),
                  title: c(() => [
                    b(i(C.filename), 1)
                  ]),
                  subtitle: c(() => [
                    b(i(te(C.size_mb || C.size)), 1)
                  ]),
                  details: c(() => [
                    w(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: c(() => [
                    w(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => T(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: c(() => [..._[4] || (_[4] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            O.value.length ? (t(), $(ve, {
              key: 2,
              title: "LORAS",
              count: O.value.length
            }, {
              default: c(() => [
                (t(!0), a(V, null, j(O.value, (C) => (t(), $(pe, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: c(() => [..._[5] || (_[5] = [
                    b("📦", -1)
                  ])]),
                  title: c(() => [
                    b(i(C.filename), 1)
                  ]),
                  subtitle: c(() => [
                    b(i(te(C.size_mb || C.size)), 1)
                  ]),
                  details: c(() => [
                    w(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: c(() => [
                    w(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => T(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: c(() => [..._[6] || (_[6] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            Z.value.length ? (t(), $(ve, {
              key: 3,
              title: "OTHER",
              count: Z.value.length
            }, {
              default: c(() => [
                (t(!0), a(V, null, j(Z.value, (C) => (t(), $(pe, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: c(() => [..._[7] || (_[7] = [
                    b("📦", -1)
                  ])]),
                  title: c(() => [
                    b(i(C.filename), 1)
                  ]),
                  subtitle: c(() => [
                    b(i(te(C.size_mb || C.size)), 1)
                  ]),
                  details: c(() => [
                    w(oe, {
                      label: "Type:",
                      value: C.type
                    }, null, 8, ["value"]),
                    w(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: c(() => [
                    w(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => T(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: c(() => [..._[8] || (_[8] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            G.value.length ? (t(), $(ve, {
              key: 4,
              title: "MISSING",
              count: G.value.length
            }, {
              default: c(() => [
                (t(!0), a(V, null, j(G.value, (C) => (t(), $(pe, {
                  key: C.filename,
                  status: "broken"
                }, {
                  icon: c(() => [..._[9] || (_[9] = [
                    b("⚠", -1)
                  ])]),
                  title: c(() => [
                    b(i(C.filename), 1)
                  ]),
                  subtitle: c(() => [..._[10] || (_[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: c(() => {
                    var I;
                    return [
                      w(oe, {
                        label: "Required by:",
                        value: ((I = C.workflow_names) == null ? void 0 : I.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: c(() => [
                    w(q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (I) => h(C.filename)
                    }, {
                      default: c(() => [..._[11] || (_[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (I) => B(C.filename)
                    }, {
                      default: c(() => [..._[12] || (_[12] = [
                        b(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !ee.value.length && !G.value.length ? (t(), $(Ne, {
              key: 5,
              icon: "📭",
              message: S.value ? `No models match '${S.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(Je, {
        show: v.value,
        title: "About Environment Models",
        onClose: _[2] || (_[2] = (C) => v.value = !1)
      }, {
        content: c(() => [
          o("p", null, [
            _[13] || (_[13] = b(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + i(k.value) + '"', 1),
            _[14] || (_[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: c(() => [
          w(q, {
            variant: "primary",
            onClick: D
          }, {
            default: c(() => [..._[15] || (_[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), yn = /* @__PURE__ */ W(pn, [["__scopeId", "data-v-865641a4"]]), bn = /* @__PURE__ */ R({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: r } = ge(), s = E([]), n = E(!1), y = E(null), x = E(""), f = E(!1), k = U(
      () => s.value.reduce((h, g) => h + (g.size_mb || g.size || 0), 0)
    ), m = U(() => {
      const h = /* @__PURE__ */ new Set();
      return s.value.forEach((g) => {
        g.used_in_environments && g.used_in_environments.length > 0 && g.used_in_environments.forEach((l) => h.add(l.env_name));
      }), h.size;
    }), p = U(() => {
      if (!x.value.trim()) return s.value;
      const h = x.value.toLowerCase();
      return s.value.filter((g) => {
        const l = g, _ = g.sha256 || l.sha256_hash || "";
        return g.filename.toLowerCase().includes(h) || _.toLowerCase().includes(h);
      });
    }), S = U(
      () => p.value.filter((h) => h.type === "checkpoints")
    ), v = U(
      () => p.value.filter((h) => h.type === "loras")
    ), D = U(
      () => p.value.filter((h) => h.type !== "checkpoints" && h.type !== "loras")
    );
    function P(h) {
      return h ? h >= 1024 ? `${(h / 1024).toFixed(1)} GB` : `${h.toFixed(0)} MB` : "Unknown";
    }
    function ee(h) {
      const g = h, l = h.used_in_workflows || g.used_by || [];
      return !l || l.length === 0 ? "Not used" : `${l.length} workflow(s)`;
    }
    function G(h) {
      navigator.clipboard.writeText(h), alert("Hash copied to clipboard");
    }
    function M(h) {
      prompt("Enter model source URL:", h.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function O(h) {
      const g = h, l = h.used_in_workflows || g.used_by || [], _ = l && l.length > 0 ? `

⚠ WARNING: This model is used by ${l.length} workflow(s):
${l.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${h.filename}?${_}

This will free ${P(g.size_mb || h.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Z() {
      alert("Scan for models not yet implemented");
    }
    function te() {
      alert("Change directory not yet implemented");
    }
    function T() {
      alert("Download new model not yet implemented");
    }
    async function B() {
      n.value = !0, y.value = null;
      try {
        s.value = await r(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", S.value), console.log("Filtered loras:", v.value), console.log("Filtered other:", D.value);
      } catch (h) {
        y.value = h instanceof Error ? h.message : "Failed to load workspace models";
      } finally {
        n.value = !1;
      }
    }
    return de(B), (h, g) => (t(), a(V, null, [
      w(Oe, null, {
        header: c(() => [
          w(De, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: g[0] || (g[0] = (l) => f.value = !0)
          }, {
            actions: c(() => [
              w(q, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: c(() => [...g[3] || (g[3] = [
                  b(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              w(q, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: c(() => [...g[4] || (g[4] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(q, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: c(() => [...g[5] || (g[5] = [
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
        search: c(() => [
          w(qe, {
            modelValue: x.value,
            "onUpdate:modelValue": g[1] || (g[1] = (l) => x.value = l),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: c(() => [
          n.value ? (t(), $(Ze, {
            key: 0,
            message: "Loading workspace models..."
          })) : y.value ? (t(), $(Xe, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (t(), a(V, { key: 2 }, [
            s.value.length ? (t(), $(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: c(() => [
                b(" Total: " + i(s.value.length) + " models • " + i(P(k.value)) + " • Used in " + i(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : u("", !0),
            S.value.length ? (t(), $(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: S.value.length
            }, {
              default: c(() => [
                (t(!0), a(V, null, j(S.value, (l) => (t(), $(pe, {
                  key: l.sha256 || l.filename,
                  status: "synced"
                }, {
                  icon: c(() => [...g[6] || (g[6] = [
                    b("📦", -1)
                  ])]),
                  title: c(() => [
                    b(i(l.filename), 1)
                  ]),
                  subtitle: c(() => [
                    b(i(P(l.size_mb || l.size)), 1)
                  ]),
                  details: c(() => {
                    var _, C;
                    return [
                      l.sha256 || l.sha256_hash ? (t(), $(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (l.sha256 || l.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      w(oe, {
                        label: "Used in:",
                        value: ee(l)
                      }, null, 8, ["value"]),
                      l.source_url || (_ = l.sources) != null && _[0] ? (t(), $(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: l.source_url || ((C = l.sources) == null ? void 0 : C[0])
                      }, null, 8, ["value"])) : (t(), $(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: c(() => [...g[7] || (g[7] = [
                          b("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: c(() => [
                    w(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_) => M(l)
                    }, {
                      default: c(() => [...g[8] || (g[8] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l.sha256 || l.sha256_hash ? (t(), $(q, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (_) => G(l.sha256 || l.sha256_hash)
                    }, {
                      default: c(() => [...g[9] || (g[9] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    w(q, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (_) => O(l)
                    }, {
                      default: c(() => [...g[10] || (g[10] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            v.value.length ? (t(), $(ve, {
              key: 2,
              title: "LORAS",
              count: v.value.length
            }, {
              default: c(() => [
                (t(!0), a(V, null, j(v.value, (l) => (t(), $(pe, {
                  key: l.sha256 || l.filename,
                  status: "synced"
                }, {
                  icon: c(() => [...g[11] || (g[11] = [
                    b("📦", -1)
                  ])]),
                  title: c(() => [
                    b(i(l.filename), 1)
                  ]),
                  subtitle: c(() => [
                    b(i(P(l.size_mb || l.size)), 1)
                  ]),
                  details: c(() => {
                    var _, C;
                    return [
                      l.sha256 || l.sha256_hash ? (t(), $(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (l.sha256 || l.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      w(oe, {
                        label: "Used in:",
                        value: ee(l)
                      }, null, 8, ["value"]),
                      l.source_url || (_ = l.sources) != null && _[0] ? (t(), $(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: l.source_url || ((C = l.sources) == null ? void 0 : C[0])
                      }, null, 8, ["value"])) : (t(), $(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: c(() => [...g[12] || (g[12] = [
                          b("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: c(() => [
                    w(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_) => M(l)
                    }, {
                      default: c(() => [...g[13] || (g[13] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l.sha256 || l.sha256_hash ? (t(), $(q, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (_) => G(l.sha256 || l.sha256_hash)
                    }, {
                      default: c(() => [...g[14] || (g[14] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    w(q, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (_) => O(l)
                    }, {
                      default: c(() => [...g[15] || (g[15] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            D.value.length ? (t(), $(ve, {
              key: 3,
              title: "OTHER",
              count: D.value.length
            }, {
              default: c(() => [
                (t(!0), a(V, null, j(D.value, (l) => (t(), $(pe, {
                  key: l.sha256 || l.filename,
                  status: "synced"
                }, {
                  icon: c(() => [...g[16] || (g[16] = [
                    b("📦", -1)
                  ])]),
                  title: c(() => [
                    b(i(l.filename), 1)
                  ]),
                  subtitle: c(() => [
                    b(i(P(l.size_mb || l.size)), 1)
                  ]),
                  details: c(() => [
                    w(oe, {
                      label: "Type:",
                      value: l.type
                    }, null, 8, ["value"]),
                    l.sha256 || l.sha256_hash ? (t(), $(oe, {
                      key: 0,
                      label: "SHA256:",
                      value: (l.sha256 || l.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : u("", !0),
                    w(oe, {
                      label: "Used in:",
                      value: ee(l)
                    }, null, 8, ["value"])
                  ]),
                  actions: c(() => [
                    w(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_) => M(l)
                    }, {
                      default: c(() => [...g[17] || (g[17] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l.sha256 || l.sha256_hash ? (t(), $(q, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (_) => G(l.sha256 || l.sha256_hash)
                    }, {
                      default: c(() => [...g[18] || (g[18] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    w(q, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (_) => O(l)
                    }, {
                      default: c(() => [...g[19] || (g[19] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            p.value.length ? u("", !0) : (t(), $(Ne, {
              key: 4,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(Je, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: g[2] || (g[2] = (l) => f.value = !1)
      }, {
        content: c(() => [...g[20] || (g[20] = [
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
}), wn = /* @__PURE__ */ W(bn, [["__scopeId", "data-v-5a24af01"]]), kn = { class: "header-info" }, _n = { class: "commit-hash" }, $n = {
  key: 0,
  class: "commit-refs"
}, xn = { class: "commit-message" }, Cn = { class: "commit-date" }, Sn = {
  key: 0,
  class: "loading"
}, En = {
  key: 1,
  class: "changes-section"
}, In = { class: "stats-row" }, zn = { class: "stat" }, Ln = { class: "stat insertions" }, Mn = { class: "stat deletions" }, Bn = {
  key: 0,
  class: "change-group"
}, Tn = {
  key: 1,
  class: "change-group"
}, On = {
  key: 0,
  class: "version"
}, Dn = {
  key: 2,
  class: "change-group"
}, Nn = { class: "change-item" }, Rn = /* @__PURE__ */ R({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const r = e, { getCommitDetail: s } = ge(), n = E(null), y = E(!0), x = U(() => {
      if (!n.value) return !1;
      const k = n.value.changes.workflows;
      return k.added.length > 0 || k.modified.length > 0 || k.deleted.length > 0;
    }), f = U(() => {
      if (!n.value) return !1;
      const k = n.value.changes.nodes;
      return k.added.length > 0 || k.removed.length > 0;
    });
    return de(async () => {
      try {
        n.value = await s(r.commit.hash);
      } finally {
        y.value = !1;
      }
    }), (k, m) => (t(), $(Ee, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (p) => k.$emit("close"))
    }, {
      header: c(() => {
        var p, S, v, D;
        return [
          o("div", kn, [
            m[4] || (m[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", _n, i(((p = n.value) == null ? void 0 : p.short_hash) || e.commit.short_hash || ((S = e.commit.hash) == null ? void 0 : S.slice(0, 7))), 1),
            (D = (v = n.value) == null ? void 0 : v.refs) != null && D.length ? (t(), a("span", $n, [
              (t(!0), a(V, null, j(n.value.refs, (P) => (t(), a("span", {
                key: P,
                class: "ref-badge"
              }, i(P), 1))), 128))
            ])) : u("", !0)
          ]),
          w(ne, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (P) => k.$emit("close"))
          }, {
            default: c(() => [...m[5] || (m[5] = [
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
      body: c(() => {
        var p, S;
        return [
          o("div", xn, i(((p = n.value) == null ? void 0 : p.message) || e.commit.message), 1),
          o("div", Cn, i(((S = n.value) == null ? void 0 : S.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          y.value ? (t(), a("div", Sn, "Loading details...")) : n.value ? (t(), a("div", En, [
            o("div", In, [
              o("span", zn, i(n.value.stats.files_changed) + " files", 1),
              o("span", Ln, "+" + i(n.value.stats.insertions), 1),
              o("span", Mn, "-" + i(n.value.stats.deletions), 1)
            ]),
            x.value ? (t(), a("div", Bn, [
              w(me, { variant: "section" }, {
                default: c(() => [...m[6] || (m[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), a(V, null, j(n.value.changes.workflows.added, (v) => (t(), a("div", {
                key: "add-" + v,
                class: "change-item added"
              }, [
                m[7] || (m[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, i(v), 1)
              ]))), 128)),
              (t(!0), a(V, null, j(n.value.changes.workflows.modified, (v) => (t(), a("div", {
                key: "mod-" + v,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, i(v), 1)
              ]))), 128)),
              (t(!0), a(V, null, j(n.value.changes.workflows.deleted, (v) => (t(), a("div", {
                key: "del-" + v,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, i(v), 1)
              ]))), 128))
            ])) : u("", !0),
            f.value ? (t(), a("div", Tn, [
              w(me, { variant: "section" }, {
                default: c(() => [...m[10] || (m[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), a(V, null, j(n.value.changes.nodes.added, (v) => (t(), a("div", {
                key: "add-" + v.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, i(v.name), 1),
                v.version ? (t(), a("span", On, "(" + i(v.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (t(!0), a(V, null, j(n.value.changes.nodes.removed, (v) => (t(), a("div", {
                key: "rem-" + v.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, i(v.name), 1)
              ]))), 128))
            ])) : u("", !0),
            n.value.changes.models.resolved > 0 ? (t(), a("div", Dn, [
              w(me, { variant: "section" }, {
                default: c(() => [...m[13] || (m[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", Nn, [
                m[14] || (m[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, i(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: c(() => [
        w(ne, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (p) => k.$emit("createBranch", e.commit))
        }, {
          default: c(() => [...m[15] || (m[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(ne, {
          variant: "primary",
          onClick: m[2] || (m[2] = (p) => k.$emit("checkout", e.commit))
        }, {
          default: c(() => [...m[16] || (m[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Wn = /* @__PURE__ */ W(Rn, [["__scopeId", "data-v-d256ff6d"]]), An = { class: "dialog-message" }, Un = {
  key: 0,
  class: "dialog-details"
}, Vn = {
  key: 1,
  class: "dialog-warning"
}, Pn = /* @__PURE__ */ R({
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
    return (r, s) => (t(), $(Ee, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (n) => r.$emit("cancel"))
    }, {
      body: c(() => [
        o("p", An, i(e.message), 1),
        e.details && e.details.length ? (t(), a("div", Un, [
          (t(!0), a(V, null, j(e.details, (n, y) => (t(), a("div", {
            key: y,
            class: "detail-item"
          }, " • " + i(n), 1))), 128))
        ])) : u("", !0),
        e.warning ? (t(), a("p", Vn, [
          s[4] || (s[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + i(e.warning), 1)
        ])) : u("", !0)
      ]),
      footer: c(() => [
        w(ne, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (n) => r.$emit("cancel"))
        }, {
          default: c(() => [
            b(i(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), $(ne, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (n) => r.$emit("secondary"))
        }, {
          default: c(() => [
            b(i(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        w(ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (n) => r.$emit("confirm"))
        }, {
          default: c(() => [
            b(i(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hn = /* @__PURE__ */ W(Pn, [["__scopeId", "data-v-3670b9f5"]]), Gn = { class: "comfygit-panel" }, Fn = { class: "panel-header" }, Kn = { class: "header-left" }, jn = {
  key: 0,
  class: "header-info"
}, qn = { class: "header-actions" }, Yn = { class: "env-switcher" }, Zn = {
  key: 0,
  class: "header-info"
}, Xn = { class: "branch-name" }, Jn = { class: "panel-main" }, Qn = { class: "sidebar" }, el = { class: "sidebar-section" }, tl = { class: "sidebar-section" }, ol = { class: "sidebar-section" }, al = { class: "content-area" }, sl = {
  key: 0,
  class: "error-message"
}, nl = {
  key: 1,
  class: "loading"
}, ll = {
  key: 5,
  class: "view-placeholder"
}, rl = {
  key: 6,
  class: "view-placeholder"
}, il = {
  key: 7,
  class: "view-placeholder"
}, cl = {
  key: 9,
  class: "view-placeholder"
}, dl = {
  key: 10,
  class: "view-placeholder"
}, ul = {
  key: 11,
  class: "view-placeholder"
}, ml = {
  key: 12,
  class: "view-placeholder"
}, gl = {
  key: 13,
  class: "view-placeholder"
}, hl = { class: "dialog-content env-selector-dialog" }, fl = { class: "dialog-header" }, vl = { class: "dialog-body" }, pl = { class: "env-list" }, yl = { class: "env-info" }, bl = { class: "env-name-row" }, wl = { class: "env-indicator" }, kl = { class: "env-name" }, _l = {
  key: 0,
  class: "env-branch"
}, $l = {
  key: 1,
  class: "current-label"
}, xl = { class: "env-stats" }, Cl = ["onClick"], Sl = { class: "toast-container" }, El = { class: "toast-icon" }, Il = { class: "toast-message" }, zl = /* @__PURE__ */ R({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: r }) {
    const s = r, {
      getStatus: n,
      getHistory: y,
      exportEnv: x,
      getBranches: f,
      checkout: k,
      createBranch: m,
      switchBranch: p,
      getEnvironments: S
    } = ge(), v = E(null), D = E([]), P = E([]), ee = E([]), G = U(() => ee.value.find((z) => z.is_current)), M = E(!1), O = E(null), Z = E(null), te = E(!1), T = E("status"), B = E("this-env");
    function h(z, d) {
      T.value = z, B.value = d;
    }
    function g(z) {
      const X = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[z];
      X && h(X.view, X.section);
    }
    const l = E(null), _ = E([]);
    let C = 0;
    function I(z, d = "info", X = 3e3) {
      const se = ++C;
      return _.value.push({ id: se, message: z, type: d }), X > 0 && setTimeout(() => {
        _.value = _.value.filter((he) => he.id !== se);
      }, X), se;
    }
    function H(z) {
      _.value = _.value.filter((d) => d.id !== z);
    }
    function F(z) {
      switch (z) {
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
    const ie = U(() => {
      if (!v.value) return "neutral";
      const z = v.value.workflows, d = z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || v.value.has_changes;
      return v.value.comparison.is_synced ? d ? "warning" : "success" : "error";
    });
    U(() => v.value ? ie.value === "success" ? "All synced" : ie.value === "warning" ? "Uncommitted changes" : ie.value === "error" ? "Not synced" : "" : "");
    async function L() {
      M.value = !0, O.value = null;
      try {
        const [z, d, X, se] = await Promise.all([
          n(),
          y(),
          f(),
          S()
        ]);
        v.value = z, D.value = d.commits, P.value = X.branches, ee.value = se, s("statusUpdate", z);
      } catch (z) {
        O.value = z instanceof Error ? z.message : "Failed to load status", v.value = null, D.value = [], P.value = [];
      } finally {
        M.value = !1;
      }
    }
    function Y(z) {
      Z.value = z;
    }
    async function ae(z) {
      var X;
      Z.value = null;
      const d = v.value && (v.value.workflows.new.length > 0 || v.value.workflows.modified.length > 0 || v.value.workflows.deleted.length > 0 || v.value.has_changes);
      l.value = {
        title: d ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: d ? "You have uncommitted changes that will be lost." : `Checkout commit ${z.short_hash || ((X = z.hash) == null ? void 0 : X.slice(0, 7))}?`,
        details: d ? Ae() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: d ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: d,
        onConfirm: async () => {
          var N;
          l.value = null;
          const se = I(`Checking out ${z.short_hash || ((N = z.hash) == null ? void 0 : N.slice(0, 7))}...`, "info", 0), he = await k(z.hash, d);
          H(se), he.status === "success" ? I("Restarting ComfyUI...", "success") : I(he.message || "Checkout failed", "error");
        }
      };
    }
    async function $e(z) {
      const d = v.value && (v.value.workflows.new.length > 0 || v.value.workflows.modified.length > 0 || v.value.workflows.deleted.length > 0 || v.value.has_changes);
      l.value = {
        title: d ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: d ? "You have uncommitted changes." : `Switch to branch "${z}"?`,
        details: d ? Ae() : void 0,
        warning: d ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: d ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          l.value = null;
          const X = I(`Switching to ${z}...`, "info", 0), se = await p(z, d);
          H(X), se.status === "success" ? I("Restarting ComfyUI...", "success") : I(se.message || "Branch switch failed", "error");
        }
      };
    }
    async function xe(z) {
      const d = I(`Creating branch ${z}...`, "info", 0), X = await m(z);
      H(d), X.status === "success" ? (I(`Branch "${z}" created`, "success"), await L()) : I(X.message || "Failed to create branch", "error");
    }
    async function at(z) {
      Z.value = null;
      const d = prompt("Enter branch name:");
      if (d) {
        const X = I(`Creating branch ${d}...`, "info", 0), se = await m(d, z.hash);
        H(X), se.status === "success" ? (I(`Branch "${d}" created from ${z.short_hash}`, "success"), await L()) : I(se.message || "Failed to create branch", "error");
      }
    }
    async function st(z) {
      te.value = !1, I("Environment switching not yet implemented", "warning");
    }
    function Ae() {
      if (!v.value) return [];
      const z = [], d = v.value.workflows;
      return d.new.length && z.push(`${d.new.length} new workflow(s)`), d.modified.length && z.push(`${d.modified.length} modified workflow(s)`), d.deleted.length && z.push(`${d.deleted.length} deleted workflow(s)`), z;
    }
    async function nt() {
      const z = I("Exporting environment...", "info", 0);
      try {
        const d = await x();
        H(z), d.status === "success" ? (I("Export complete", "success"), alert(`Export successful!

Saved to: ${d.path}

Models without sources: ${d.models_without_sources}`)) : (I("Export failed", "error"), alert(`Export failed: ${d.message}`));
      } catch (d) {
        H(z), I("Export error", "error"), alert(`Export error: ${d instanceof Error ? d.message : "Unknown error"}`);
      }
    }
    return de(L), (z, d) => {
      var X, se, he;
      return t(), a("div", Gn, [
        o("div", Fn, [
          o("div", Kn, [
            d[20] || (d[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            v.value ? (t(), a("div", jn)) : u("", !0)
          ]),
          o("div", qn, [
            o("button", {
              class: A(["icon-btn", { spinning: M.value }]),
              onClick: L,
              title: "Refresh"
            }, [...d[21] || (d[21] = [
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
              onClick: d[0] || (d[0] = (N) => s("close")),
              title: "Close"
            }, [...d[22] || (d[22] = [
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
        o("div", Yn, [
          d[24] || (d[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: d[1] || (d[1] = (N) => te.value = !0)
          }, [
            v.value ? (t(), a("div", Zn, [
              o("span", null, i(((X = G.value) == null ? void 0 : X.name) || ((se = v.value) == null ? void 0 : se.environment) || "Loading..."), 1),
              o("span", Xn, "(" + i(v.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            d[23] || (d[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", Jn, [
          o("div", Qn, [
            o("div", el, [
              d[25] || (d[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "status" && B.value === "this-env" }]),
                onClick: d[2] || (d[2] = (N) => h("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "workflows" }]),
                onClick: d[3] || (d[3] = (N) => h("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "models-env" }]),
                onClick: d[4] || (d[4] = (N) => h("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "branches" }]),
                onClick: d[5] || (d[5] = (N) => h("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "history" }]),
                onClick: d[6] || (d[6] = (N) => h("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "nodes" }]),
                onClick: d[7] || (d[7] = (N) => h("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "debug-env" }]),
                onClick: d[8] || (d[8] = (N) => h("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            d[28] || (d[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", tl, [
              d[26] || (d[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "environments" }]),
                onClick: d[9] || (d[9] = (N) => h("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "model-index" }]),
                onClick: d[10] || (d[10] = (N) => h("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "settings" }]),
                onClick: d[11] || (d[11] = (N) => h("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "debug-workspace" }]),
                onClick: d[12] || (d[12] = (N) => h("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            d[29] || (d[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", ol, [
              d[27] || (d[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "export" }]),
                onClick: d[13] || (d[13] = (N) => h("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "import" }]),
                onClick: d[14] || (d[14] = (N) => h("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: A(["sidebar-item", { active: T.value === "remotes" }]),
                onClick: d[15] || (d[15] = (N) => h("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", al, [
            O.value ? (t(), a("div", sl, i(O.value), 1)) : !v.value && T.value === "status" ? (t(), a("div", nl, " Loading status... ")) : (t(), a(V, { key: 2 }, [
              T.value === "status" ? (t(), $(vo, {
                key: 0,
                status: v.value
              }, null, 8, ["status"])) : T.value === "workflows" ? (t(), $(Os, {
                key: 1,
                onRefresh: L
              })) : T.value === "models-env" ? (t(), $(yn, {
                key: 2,
                onNavigate: g
              })) : T.value === "branches" ? (t(), $(Io, {
                key: 3,
                branches: P.value,
                current: ((he = v.value) == null ? void 0 : he.branch) || null,
                onSwitch: $e,
                onCreate: xe
              }, null, 8, ["branches", "current"])) : T.value === "history" ? (t(), $(Wo, {
                key: 4,
                commits: D.value,
                onSelect: Y,
                onCheckout: ae
              }, null, 8, ["commits"])) : T.value === "nodes" ? (t(), a("div", ll, [...d[30] || (d[30] = [
                o("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                o("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : T.value === "debug-env" ? (t(), a("div", rl, [...d[31] || (d[31] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : T.value === "environments" ? (t(), a("div", il, [...d[32] || (d[32] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : T.value === "model-index" ? (t(), $(wn, { key: 8 })) : T.value === "settings" ? (t(), a("div", cl, [...d[33] || (d[33] = [
                o("h3", { class: "view-title" }, "SETTINGS", -1),
                o("p", null, "Settings UI coming soon...", -1)
              ])])) : T.value === "debug-workspace" ? (t(), a("div", dl, [...d[34] || (d[34] = [
                o("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                o("p", null, "Workspace logs view coming soon...", -1)
              ])])) : T.value === "export" ? (t(), a("div", ul, [
                d[36] || (d[36] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: nt
                }, [...d[35] || (d[35] = [
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
              ])) : T.value === "import" ? (t(), a("div", ml, [...d[37] || (d[37] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : T.value === "remotes" ? (t(), a("div", gl, [...d[38] || (d[38] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : u("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (t(), $(Wn, {
          key: 0,
          commit: Z.value,
          onClose: d[16] || (d[16] = (N) => Z.value = null),
          onCheckout: ae,
          onCreateBranch: at
        }, null, 8, ["commit"])) : u("", !0),
        l.value ? (t(), $(Hn, {
          key: 1,
          title: l.value.title,
          message: l.value.message,
          details: l.value.details,
          warning: l.value.warning,
          confirmLabel: l.value.confirmLabel,
          cancelLabel: l.value.cancelLabel,
          secondaryLabel: l.value.secondaryLabel,
          secondaryAction: l.value.secondaryAction,
          destructive: l.value.destructive,
          onConfirm: l.value.onConfirm,
          onCancel: d[17] || (d[17] = (N) => l.value = null),
          onSecondary: l.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        te.value ? (t(), a("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: d[19] || (d[19] = be((N) => te.value = !1, ["self"]))
        }, [
          o("div", hl, [
            o("div", fl, [
              d[40] || (d[40] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: d[18] || (d[18] = (N) => te.value = !1)
              }, [...d[39] || (d[39] = [
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
            o("div", vl, [
              d[41] || (d[41] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", pl, [
                (t(!0), a(V, null, j(ee.value, (N) => (t(), a("div", {
                  key: N.name,
                  class: A(["env-item", { current: N.is_current }])
                }, [
                  o("div", yl, [
                    o("div", bl, [
                      o("span", wl, i(N.is_current ? "●" : "○"), 1),
                      o("span", kl, i(N.name), 1),
                      N.current_branch ? (t(), a("span", _l, "(" + i(N.current_branch) + ")", 1)) : u("", !0),
                      N.is_current ? (t(), a("span", $l, "CURRENT")) : u("", !0)
                    ]),
                    o("div", xl, i(N.workflow_count) + " workflows • " + i(N.node_count) + " nodes ", 1)
                  ]),
                  N.is_current ? u("", !0) : (t(), a("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (rr) => st(N.name)
                  }, " SWITCH ", 8, Cl))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        o("div", Sl, [
          w(it, { name: "toast" }, {
            default: c(() => [
              (t(!0), a(V, null, j(_.value, (N) => (t(), a("div", {
                key: N.id,
                class: A(["toast", N.type])
              }, [
                o("span", El, i(F(N.type)), 1),
                o("span", Il, i(N.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Ll = /* @__PURE__ */ W(zl, [["__scopeId", "data-v-315c8db1"]]), Ml = { class: "base-textarea-wrapper" }, Bl = ["value", "rows", "placeholder", "disabled", "maxlength"], Tl = {
  key: 0,
  class: "base-textarea-count"
}, Ol = /* @__PURE__ */ R({
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
    return (r, s) => (t(), a("div", Ml, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (n) => r.$emit("update:modelValue", n.target.value)),
        onKeydown: [
          s[1] || (s[1] = _e(be((n) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = _e(be((n) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Bl),
      e.showCharCount && e.maxLength ? (t(), a("div", Tl, i(e.modelValue.length) + " / " + i(e.maxLength), 1)) : u("", !0)
    ]));
  }
}), Dl = /* @__PURE__ */ W(Ol, [["__scopeId", "data-v-5516e6fc"]]), Nl = { class: "commit-popover" }, Rl = { class: "popover-header" }, Wl = { class: "popover-body" }, Al = {
  key: 0,
  class: "changes-summary"
}, Ul = {
  key: 0,
  class: "change-item"
}, Vl = {
  key: 1,
  class: "change-item"
}, Pl = {
  key: 2,
  class: "change-item"
}, Hl = {
  key: 3,
  class: "change-item"
}, Gl = {
  key: 4,
  class: "change-item"
}, Fl = {
  key: 1,
  class: "no-changes"
}, Kl = {
  key: 2,
  class: "loading"
}, jl = { class: "message-section" }, ql = { class: "popover-footer" }, Yl = /* @__PURE__ */ R({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: r }) {
    const s = e, n = r, { commit: y } = ge(), x = E(""), f = E(!1), k = E(null), m = U(() => {
      if (!s.status) return !1;
      const S = s.status.workflows;
      return S.new.length > 0 || S.modified.length > 0 || S.deleted.length > 0 || s.status.has_changes;
    });
    async function p() {
      var S, v, D;
      if (!(!m.value || !x.value.trim() || f.value)) {
        f.value = !0, k.value = null;
        try {
          const P = await y(x.value.trim());
          P.status === "success" ? (k.value = {
            type: "success",
            message: `Committed: ${((S = P.summary) == null ? void 0 : S.new) || 0} new, ${((v = P.summary) == null ? void 0 : v.modified) || 0} modified, ${((D = P.summary) == null ? void 0 : D.deleted) || 0} deleted`
          }, x.value = "", setTimeout(() => n("committed"), 1e3)) : P.status === "no_changes" ? k.value = { type: "error", message: "No changes to commit" } : k.value = { type: "error", message: P.message || "Commit failed" };
        } catch (P) {
          k.value = { type: "error", message: P instanceof Error ? P.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (S, v) => (t(), a("div", Nl, [
      o("div", Rl, [
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
      o("div", Wl, [
        e.status && m.value ? (t(), a("div", Al, [
          e.status.workflows.new.length ? (t(), a("div", Ul, [
            v[5] || (v[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, i(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          e.status.workflows.modified.length ? (t(), a("div", Vl, [
            v[6] || (v[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, i(e.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          e.status.workflows.deleted.length ? (t(), a("div", Pl, [
            v[7] || (v[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, i(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          e.status.git_changes.nodes_added.length ? (t(), a("div", Hl, [
            v[8] || (v[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, i(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), a("div", Gl, [
            v[9] || (v[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, i(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : e.status ? (t(), a("div", Fl, " No changes to commit ")) : (t(), a("div", Kl, " Loading... ")),
        o("div", jl, [
          w(Dl, {
            modelValue: x.value,
            "onUpdate:modelValue": v[1] || (v[1] = (D) => x.value = D),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || f.value,
            rows: 3,
            onCtrlEnter: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        k.value ? (t(), a("div", {
          key: 3,
          class: A(["result", k.value.type])
        }, i(k.value.message), 3)) : u("", !0)
      ]),
      o("div", ql, [
        w(ne, {
          variant: "secondary",
          onClick: v[2] || (v[2] = (D) => n("close"))
        }, {
          default: c(() => [...v[10] || (v[10] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(ne, {
          variant: "primary",
          disabled: !m.value || !x.value.trim() || f.value,
          loading: f.value,
          onClick: p
        }, {
          default: c(() => [
            b(i(f.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Zl = /* @__PURE__ */ W(Yl, [["__scopeId", "data-v-4f587977"]]), Xl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Jl = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Ql = {
  comfy: Xl,
  phosphor: Jl
}, Re = "comfy", Qe = "comfygit-theme";
let fe = null, et = Re;
function er() {
  try {
    const e = localStorage.getItem(Qe);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Re;
}
function tt(e = Re) {
  fe && fe.remove(), fe = document.createElement("style"), fe.id = "comfygit-theme-styles", fe.setAttribute("data-theme", e), fe.textContent = Ql[e], document.head.appendChild(fe), document.body.setAttribute("data-comfygit-theme", e), et = e;
  try {
    localStorage.setItem(Qe, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function tr() {
  return et;
}
function or(e) {
  tt(e);
}
const We = document.createElement("link");
We.rel = "stylesheet";
We.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(We);
const ar = er();
tt(ar);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), or(e);
  },
  getTheme: () => {
    const e = tr();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let re = null, le = null, ke = null;
const ye = E(null);
async function Be() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (ye.value = await r.json());
  } catch {
  }
}
function sr() {
  if (!ye.value) return !1;
  const e = ye.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ye.value.has_changes;
}
function nr() {
  re && re.remove(), re = document.createElement("div"), re.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", re.appendChild(e), re.addEventListener("click", (n) => {
    n.target === re && Le();
  });
  const r = (n) => {
    n.key === "Escape" && (Le(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Fe({
    render: () => Ke(Ll, {
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
function lr(e) {
  we(), le = document.createElement("div"), le.className = "comfygit-commit-popover-container";
  const r = e.getBoundingClientRect();
  le.style.position = "fixed", le.style.top = `${r.bottom + 8}px`, le.style.right = `${window.innerWidth - r.right}px`, le.style.zIndex = "10001";
  const s = (y) => {
    le && !le.contains(y.target) && y.target !== e && (we(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const n = (y) => {
    y.key === "Escape" && (we(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ke = Fe({
    render: () => Ke(Zl, {
      status: ye.value,
      onClose: we,
      onCommitted: () => {
        we(), Be().then(Se);
      }
    })
  }), ke.mount(le), document.body.appendChild(le);
}
function we() {
  ke && (ke.unmount(), ke = null), le && (le.remove(), le = null);
}
let ce = null;
function Se() {
  if (!ce) return;
  const e = ce.querySelector(".commit-indicator");
  e && (e.style.display = sr() ? "block" : "none");
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
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = nr, ce = document.createElement("button"), ce.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ce.innerHTML = 'Commit <span class="commit-indicator"></span>', ce.title = "Quick Commit", ce.onclick = () => lr(ce), e.appendChild(r), e.appendChild(ce), (n = (s = Ie.menu) == null ? void 0 : s.settingsGroup) != null && n.element && (Ie.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Be(), Se(), setInterval(async () => {
      await Be(), Se();
    }, 3e4);
  }
});
