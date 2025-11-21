import { app as je } from "../../scripts/app.js";
import { defineComponent as T, createElementBlock as n, openBlock as t, createCommentVNode as i, createElementVNode as o, renderSlot as K, createBlock as p, resolveDynamicComponent as Ye, normalizeClass as F, withCtx as a, toDisplayString as u, createVNode as c, createTextVNode as f, computed as A, Fragment as P, renderList as J, ref as E, onMounted as ue, withKeys as Me, withModifiers as Se, onUnmounted as ut, Teleport as ot, normalizeStyle as Ze, TransitionGroup as mt, createApp as at, h as st } from "vue";
const gt = { class: "panel-layout" }, ft = {
  key: 0,
  class: "panel-layout-header"
}, vt = {
  key: 1,
  class: "panel-layout-search"
}, ht = { class: "panel-layout-content" }, pt = {
  key: 2,
  class: "panel-layout-footer"
}, yt = /* @__PURE__ */ T({
  __name: "PanelLayout",
  setup(e) {
    return (l, s) => (t(), n("div", gt, [
      l.$slots.header ? (t(), n("div", ft, [
        K(l.$slots, "header", {}, void 0, !0)
      ])) : i("", !0),
      l.$slots.search ? (t(), n("div", vt, [
        K(l.$slots, "search", {}, void 0, !0)
      ])) : i("", !0),
      o("div", ht, [
        K(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), n("div", pt, [
        K(l.$slots, "footer", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), O = (e, l) => {
  const s = e.__vccOpts || e;
  for (const [r, d] of l)
    s[r] = d;
  return s;
}, be = /* @__PURE__ */ O(yt, [["__scopeId", "data-v-21565df9"]]), bt = {
  key: 0,
  class: "panel-title-prefix"
}, wt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, kt = /* @__PURE__ */ T({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, s) => (t(), p(Ye(`h${e.level}`), {
      class: F(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (t(), n("span", bt, u(e.prefix), 1)) : (t(), n("span", wt)),
        K(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _t = /* @__PURE__ */ O(kt, [["__scopeId", "data-v-c3875efc"]]), xt = ["title"], $t = ["width", "height"], Ct = /* @__PURE__ */ T({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), n("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (r) => l.$emit("click"))
    }, [
      (t(), n("svg", {
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
      ])], 8, $t))
    ], 8, xt));
  }
}), It = /* @__PURE__ */ O(Ct, [["__scopeId", "data-v-6fc7f16d"]]), St = { class: "header-left" }, Et = {
  key: 0,
  class: "header-actions"
}, zt = /* @__PURE__ */ T({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: F(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", St, [
        c(_t, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            f(u(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), p(It, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => l.$emit("info-click"))
        })) : i("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Et, [
        K(l.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), we = /* @__PURE__ */ O(zt, [["__scopeId", "data-v-55a62cd6"]]), Lt = {
  key: 0,
  class: "section-title-count"
}, Mt = {
  key: 1,
  class: "section-title-icon"
}, Nt = /* @__PURE__ */ T({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), p(Ye(`h${e.level}`), {
      class: F(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: a(() => [
        K(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", Lt, "(" + u(e.count) + ")", 1)) : i("", !0),
        e.clickable ? (t(), n("span", Mt, u(e.expanded ? "▼" : "▸"), 1)) : i("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), qe = /* @__PURE__ */ O(Nt, [["__scopeId", "data-v-559361eb"]]), Vt = { class: "status-grid" }, Dt = { class: "status-grid__column" }, Bt = { class: "status-grid__title" }, Tt = { class: "status-grid__column status-grid__column--right" }, Ot = { class: "status-grid__title" }, Ut = /* @__PURE__ */ T({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, s) => (t(), n("div", Vt, [
      o("div", Dt, [
        o("h4", Bt, u(e.leftTitle), 1),
        K(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Tt, [
        o("h4", Ot, u(e.rightTitle), 1),
        K(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Rt = /* @__PURE__ */ O(Ut, [["__scopeId", "data-v-fe556068"]]), Wt = {
  key: 0,
  class: "status-item__icon"
}, At = {
  key: 1,
  class: "status-item__count"
}, Pt = { class: "status-item__label" }, Ft = /* @__PURE__ */ T({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, s = A(() => `status-item--${l.variant}`);
    return (r, d) => (t(), n("div", {
      class: F(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), n("span", Wt, u(e.icon), 1)) : i("", !0),
      e.count !== void 0 ? (t(), n("span", At, u(e.count), 1)) : i("", !0),
      o("span", Pt, u(e.label), 1)
    ], 2));
  }
}), pe = /* @__PURE__ */ O(Ft, [["__scopeId", "data-v-6f929183"]]), Ht = { class: "issue-card__header" }, jt = { class: "issue-card__icon" }, Gt = { class: "issue-card__title" }, Kt = {
  key: 0,
  class: "issue-card__content"
}, qt = {
  key: 0,
  class: "issue-card__description"
}, Jt = {
  key: 1,
  class: "issue-card__items"
}, Yt = {
  key: 2,
  class: "issue-card__actions"
}, Zt = /* @__PURE__ */ T({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, s = A(() => `issue-card--${l.severity}`);
    return (r, d) => (t(), n("div", {
      class: F(["issue-card", s.value])
    }, [
      o("div", Ht, [
        o("span", jt, u(e.icon), 1),
        o("h4", Gt, u(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), n("div", Kt, [
        e.description ? (t(), n("p", qt, u(e.description), 1)) : i("", !0),
        K(r.$slots, "default", {}, void 0, !0)
      ])) : i("", !0),
      e.items && e.items.length ? (t(), n("div", Jt, [
        (t(!0), n(P, null, J(e.items, (C, y) => (t(), n("div", {
          key: y,
          class: "issue-card__item"
        }, [
          d[0] || (d[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, u(C), 1)
        ]))), 128))
      ])) : i("", !0),
      r.$slots.actions ? (t(), n("div", Yt, [
        K(r.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ O(Zt, [["__scopeId", "data-v-df6aa348"]]), Xt = ["type", "disabled"], Qt = {
  key: 0,
  class: "spinner"
}, eo = /* @__PURE__ */ T({
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
    return (l, s) => (t(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: F(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), n("span", Qt)) : i("", !0),
      e.loading ? i("", !0) : K(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Xt));
  }
}), U = /* @__PURE__ */ O(eo, [["__scopeId", "data-v-772abe47"]]), to = { class: "empty-state" }, oo = {
  key: 0,
  class: "empty-icon"
}, ao = { class: "empty-message" }, so = /* @__PURE__ */ T({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, s) => (t(), n("div", to, [
      e.icon ? (t(), n("div", oo, u(e.icon), 1)) : i("", !0),
      o("p", ao, u(e.message), 1),
      e.actionLabel ? (t(), p(U, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("action"))
      }, {
        default: a(() => [
          f(u(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : i("", !0)
    ]));
  }
}), Ce = /* @__PURE__ */ O(so, [["__scopeId", "data-v-4466284f"]]), no = { class: "branch-indicator" }, lo = { class: "branch-indicator__info" }, ro = { class: "branch-indicator__label" }, io = { class: "branch-indicator__name" }, co = {
  key: 0,
  class: "branch-indicator__remote"
}, uo = {
  key: 0,
  class: "branch-indicator__status"
}, mo = {
  key: 0,
  class: "branch-indicator__ahead"
}, go = {
  key: 1,
  class: "branch-indicator__behind"
}, fo = {
  key: 1,
  class: "branch-indicator__actions"
}, vo = /* @__PURE__ */ T({
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
    return (l, s) => (t(), n("div", no, [
      o("div", lo, [
        o("span", ro, u(e.label), 1),
        o("span", io, u(e.branchName), 1),
        e.remote ? (t(), n("span", co, "@" + u(e.remote), 1)) : i("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), n("div", uo, [
        e.commitsAhead ? (t(), n("span", mo, " ↑ " + u(e.commitsAhead) + " ahead ", 1)) : i("", !0),
        e.commitsBehind ? (t(), n("span", go, " ↓ " + u(e.commitsBehind) + " behind ", 1)) : i("", !0)
      ])) : i("", !0),
      l.$slots.actions ? (t(), n("div", fo, [
        K(l.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), ho = /* @__PURE__ */ O(vo, [["__scopeId", "data-v-cb8dd50e"]]), po = { style: { "margin-top": "var(--cg-space-1)" } }, yo = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, bo = /* @__PURE__ */ T({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const s = e, r = A(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), d = A(() => {
      const m = s.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), C = A(() => {
      const m = s.status.git_changes, x = s.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && x.new.length === 0 && x.modified.length === 0 && x.deleted.length === 0;
    }), y = A(() => s.status.missing_models_count > 0 || d.value || !s.status.comparison.is_synced), w = A(() => {
      const m = [];
      return s.status.workflows.new.length > 0 && m.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && m.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && m.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && m.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && m.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${m.length > 0 ? m.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (m, x) => (t(), p(be, null, {
      header: a(() => [
        c(we, { title: "STATUS" })
      ]),
      content: a(() => [
        c(qe, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [...x[7] || (x[7] = [
            f(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        c(Rt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (t(), p(pe, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : i("", !0),
            e.status.workflows.modified.length ? (t(), p(pe, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : i("", !0),
            e.status.workflows.deleted.length ? (t(), p(pe, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : i("", !0),
            c(pe, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (t(), p(pe, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : i("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), p(pe, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : i("", !0),
            C.value ? (t(), p(pe, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : i("", !0),
            d.value ? i("", !0) : (t(), p(pe, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", po, [
          c(ho, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              c(U, {
                variant: "secondary",
                size: "sm",
                onClick: x[0] || (x[0] = (N) => m.$emit("switch-branch"))
              }, {
                default: a(() => [...x[8] || (x[8] = [
                  f(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        y.value ? (t(), n("div", yo, [
          c(qe, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [...x[9] || (x[9] = [
              f(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), p(Ge, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: a(() => [
              c(U, {
                variant: "secondary",
                size: "sm",
                onClick: x[1] || (x[1] = (N) => m.$emit("view-workflows"))
              }, {
                default: a(() => [...x[10] || (x[10] = [
                  f(" View Details ", -1)
                ])]),
                _: 1
              }),
              c(U, {
                variant: "primary",
                size: "sm",
                onClick: x[2] || (x[2] = (N) => m.$emit("resolve-models"))
              }, {
                default: a(() => [...x[11] || (x[11] = [
                  f(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : i("", !0),
          d.value ? (t(), p(Ge, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: w.value
          }, {
            actions: a(() => [
              c(U, {
                variant: "secondary",
                size: "sm",
                onClick: x[3] || (x[3] = (N) => m.$emit("view-history"))
              }, {
                default: a(() => [...x[12] || (x[12] = [
                  f(" View Changes ", -1)
                ])]),
                _: 1
              }),
              c(U, {
                variant: "primary",
                size: "sm",
                onClick: x[4] || (x[4] = (N) => m.$emit("commit-changes"))
              }, {
                default: a(() => [...x[13] || (x[13] = [
                  f(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : i("", !0),
          e.status.comparison.is_synced ? i("", !0) : (t(), p(Ge, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: a(() => [
              c(U, {
                variant: "secondary",
                size: "sm",
                onClick: x[5] || (x[5] = (N) => m.$emit("view-debug"))
              }, {
                default: a(() => [...x[14] || (x[14] = [
                  f(" View Logs ", -1)
                ])]),
                _: 1
              }),
              c(U, {
                variant: "primary",
                size: "sm",
                onClick: x[6] || (x[6] = (N) => m.$emit("sync-environment"))
              }, {
                default: a(() => [...x[15] || (x[15] = [
                  f(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : i("", !0),
        !y.value && !d.value ? (t(), p(Ce, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : i("", !0)
      ]),
      _: 1
    }));
  }
}), wo = /* @__PURE__ */ O(bo, [["__scopeId", "data-v-2045da26"]]), ko = ["type", "value", "placeholder", "disabled"], _o = /* @__PURE__ */ T({
  __name: "TextInput",
  props: {
    modelValue: {},
    type: { default: "text" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    hasError: { type: Boolean, default: !1 },
    monospace: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "enter", "escape", "focus", "blur"],
  setup(e, { expose: l, emit: s }) {
    const r = e, d = s, C = E(null);
    function y(w) {
      const m = w.target.value;
      d("update:modelValue", m);
    }
    return ue(() => {
      r.autoFocus && C.value && C.value.focus();
    }), l({
      focus: () => {
        var w;
        return (w = C.value) == null ? void 0 : w.focus();
      },
      blur: () => {
        var w;
        return (w = C.value) == null ? void 0 : w.blur();
      }
    }), (w, m) => (t(), n("input", {
      ref_key: "inputRef",
      ref: C,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: F(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: y,
      onKeyup: [
        m[0] || (m[0] = Me((x) => w.$emit("enter"), ["enter"])),
        m[1] || (m[1] = Me((x) => w.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (x) => w.$emit("focus")),
      onBlur: m[3] || (m[3] = (x) => w.$emit("blur"))
    }, null, 42, ko));
  }
}), Ue = /* @__PURE__ */ O(_o, [["__scopeId", "data-v-0380d08f"]]), xo = { class: "branch-create-form" }, $o = { class: "form-actions" }, Co = /* @__PURE__ */ T({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const s = l, r = E(""), d = A(() => {
      const w = r.value.trim();
      return w.length > 0 && !w.startsWith("-") && !w.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(w);
    });
    function C() {
      d.value && (s("create", r.value.trim()), r.value = "");
    }
    function y() {
      r.value = "", s("cancel");
    }
    return (w, m) => (t(), n("div", xo, [
      c(Ue, {
        modelValue: r.value,
        "onUpdate:modelValue": m[0] || (m[0] = (x) => r.value = x),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: C,
        onEscape: y
      }, null, 8, ["modelValue"]),
      o("div", $o, [
        c(U, {
          variant: "primary",
          size: "sm",
          disabled: !d.value,
          onClick: C
        }, {
          default: a(() => [...m[1] || (m[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        c(U, {
          variant: "secondary",
          size: "sm",
          onClick: y
        }, {
          default: a(() => [...m[2] || (m[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Io = /* @__PURE__ */ O(Co, [["__scopeId", "data-v-7c500394"]]), So = { class: "branch-list-item__indicator" }, Eo = { class: "branch-list-item__name" }, zo = {
  key: 0,
  class: "branch-list-item__actions"
}, Lo = {
  key: 0,
  class: "branch-list-item__current-label"
}, Mo = /* @__PURE__ */ T({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: F(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      o("span", So, u(e.isCurrent ? "●" : "○"), 1),
      o("span", Eo, u(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (t(), n("div", zo, [
        K(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), n("span", Lo, " current ")) : i("", !0)
      ])) : i("", !0)
    ], 2));
  }
}), No = /* @__PURE__ */ O(Mo, [["__scopeId", "data-v-c6581a24"]]), Vo = {
  key: 2,
  class: "branch-list"
}, Do = /* @__PURE__ */ T({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const s = l, r = E(!1);
    function d(y) {
      s("create", y), C();
    }
    function C() {
      r.value = !1;
    }
    return (y, w) => (t(), p(be, null, {
      header: a(() => [
        c(we, { title: "BRANCHES" }, {
          actions: a(() => [
            c(U, {
              variant: "ghost",
              size: "sm",
              onClick: w[0] || (w[0] = (m) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...w[1] || (w[1] = [
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
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (t(), p(Io, {
          key: 0,
          onCreate: d,
          onCancel: C
        })) : i("", !0),
        e.branches.length === 0 ? (t(), p(Ce, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), n("div", Vo, [
          (t(!0), n(P, null, J(e.branches, (m) => (t(), p(No, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: a(() => [
              m.is_current ? i("", !0) : (t(), p(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (x) => y.$emit("switch", m.name)
              }, {
                default: a(() => [...w[2] || (w[2] = [
                  f(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current"]))), 128))
        ]))
      ]),
      _: 1
    }));
  }
}), Bo = /* @__PURE__ */ O(Do, [["__scopeId", "data-v-763d6ec4"]]), To = { class: "commit-list" }, Oo = /* @__PURE__ */ T({
  __name: "CommitList",
  setup(e) {
    return (l, s) => (t(), n("div", To, [
      K(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Uo = /* @__PURE__ */ O(Oo, [["__scopeId", "data-v-8c5ee761"]]), Ro = { class: "commit-hash" }, Wo = /* @__PURE__ */ T({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, s = A(() => l.hash.slice(0, l.length));
    return (r, d) => (t(), n("span", Ro, u(s.value), 1));
  }
}), Ao = /* @__PURE__ */ O(Wo, [["__scopeId", "data-v-7c333cc6"]]), Po = { class: "commit-message" }, Fo = { class: "commit-date" }, Ho = /* @__PURE__ */ T({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = l;
    function d() {
      s.clickable && r("click");
    }
    return (C, y) => (t(), n("div", {
      class: F(["commit-item", { clickable: e.clickable }]),
      onClick: d
    }, [
      c(Ao, { hash: e.hash }, null, 8, ["hash"]),
      o("span", Po, u(e.message), 1),
      o("span", Fo, u(e.relativeDate), 1),
      C.$slots.actions ? (t(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: y[0] || (y[0] = Se(() => {
        }, ["stop"]))
      }, [
        K(C.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), jo = /* @__PURE__ */ O(Ho, [["__scopeId", "data-v-dd7c621b"]]), Go = /* @__PURE__ */ T({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, s) => (t(), p(be, null, {
      header: a(() => [
        c(we, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (t(), p(Ce, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), p(Uo, { key: 1 }, {
          default: a(() => [
            (t(!0), n(P, null, J(e.commits, (r) => (t(), p(jo, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (d) => l.$emit("select", r)
            }, {
              actions: a(() => [
                c(U, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (d) => l.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
                    o("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                    ], -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["hash", "message", "relative-date", "onClick"]))), 128))
          ]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), Ko = /* @__PURE__ */ O(Go, [["__scopeId", "data-v-981c3c64"]]), tt = [
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
], qo = {
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
}, nt = [
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
], Jo = [
  ...nt,
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
], Te = [
  {
    name: "ComfyUI-Manager",
    installed: !0,
    registry_id: "comfyui-manager",
    repository: "https://github.com/ltdrdata/ComfyUI-Manager",
    version: "2.8.5",
    source: "registry",
    download_url: null,
    description: "ComfyUI extension for managing custom nodes",
    used_in_workflows: ["flux-dev-img2img.json", "sdxl-lightning.json", "flux-schnell.json"]
  },
  {
    name: "comfyui_flux",
    installed: !0,
    registry_id: "comfyui_flux",
    repository: "https://github.com/black-forest-labs/flux",
    version: "1.2.0",
    source: "registry",
    download_url: null,
    description: "FLUX.1 model support for ComfyUI",
    used_in_workflows: ["flux-dev-img2img.json", "flux-schnell.json"]
  },
  {
    name: "comfyui-controlnet-aux",
    installed: !0,
    registry_id: "comfyui-controlnet-aux",
    repository: "https://github.com/Fannovel16/comfyui_controlnet_aux",
    version: "1.0.3",
    source: "registry",
    download_url: null,
    description: "ControlNet auxiliary preprocessors",
    used_in_workflows: ["controlnet-pose.json"]
  },
  {
    name: "rgthree-comfy",
    installed: !1,
    registry_id: "rgthree-comfy",
    repository: "https://github.com/rgthree/rgthree-comfy",
    version: null,
    source: "registry",
    download_url: "https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip",
    description: "Power user nodes for ComfyUI workflows",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-image-saver",
    installed: !1,
    registry_id: "comfyui-image-saver",
    repository: "https://github.com/girish946/ComfyUI-Image-Saver",
    version: null,
    source: "registry",
    download_url: "https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip",
    description: "Advanced image saving options",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-impact-pack",
    installed: !0,
    registry_id: "comfyui-impact-pack",
    repository: "https://github.com/ltdrdata/ComfyUI-Impact-Pack",
    version: "4.12.1",
    source: "registry",
    download_url: null,
    description: "Custom nodes for ComfyUI impact pack",
    used_in_workflows: ["sd15-upscale.json"]
  },
  {
    name: "ComfyUI-KJNodes",
    installed: !0,
    registry_id: "comfyui-kjnodes",
    repository: "https://github.com/kijai/ComfyUI-KJNodes",
    version: "1.1.2",
    source: "registry",
    download_url: null,
    description: "KJ utility nodes collection",
    used_in_workflows: []
  },
  {
    name: "custom-dev-nodes",
    installed: !0,
    registry_id: void 0,
    repository: void 0,
    version: "0.1.0-dev",
    source: "development",
    download_url: null,
    description: "Local development nodes",
    used_in_workflows: []
  },
  {
    name: "comfyui-easy-use",
    installed: !1,
    registry_id: "comfyui-easy-use",
    repository: "https://github.com/yolain/ComfyUI-Easy-Use",
    version: null,
    source: "registry",
    download_url: "https://github.com/yolain/ComfyUI-Easy-Use/archive/refs/heads/main.zip",
    description: "Simplified workflow nodes",
    used_in_workflows: ["sd15-upscale.json"]
  }
], Yo = [
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
], Oe = [
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
], Q = {
  // Environment Management
  getEnvironments: async () => (await ee(300), [
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
    await ee(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, l, s) => {
    await ee(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${l}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await ee(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ee(400), tt),
  getWorkflowDetails: async (e) => (await ee(300), qo[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await ee(800), {
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
    await ee(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${l}, models=${s}`);
  },
  setModelImportance: async (e, l, s) => {
    await ee(200), console.log(`[MOCK] Setting ${l} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ee(350), nt),
  getWorkspaceModels: async () => (await ee(400), Jo),
  updateModelSource: async (e, l) => {
    await ee(300), console.log(`[MOCK] Updating source for ${e}: ${l}`);
  },
  deleteModel: async (e) => {
    await ee(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await ee(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Node Management
  getNodes: async () => {
    await ee(350);
    const e = Te.filter((s) => s.installed), l = Te.filter((s) => !s.installed);
    return {
      nodes: Te,
      total_count: Te.length,
      installed_count: e.length,
      missing_count: l.length
    };
  },
  installNode: async (e) => {
    await ee(2500), console.log(`[MOCK] Installing node: ${e}`);
  },
  updateNode: async (e) => {
    await ee(2e3), console.log(`[MOCK] Updating node: ${e}`);
  },
  uninstallNode: async (e) => {
    await ee(1e3), console.log(`[MOCK] Uninstalling node: ${e}`);
  },
  // Settings & Debug
  getConfig: async () => (await ee(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (e) => {
    await ee(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, l) => (await ee(250), (e ? Oe.filter((r) => r.level === e) : Oe).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await ee(300);
    const s = [...Oe, ...Oe.map((d) => ({
      ...d,
      context: { ...d.context, environment: "testing" }
    }))];
    return (e ? s.filter((d) => d.level === e) : s).slice(0, l || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await ee(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: tt.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await ee(300), Yo.slice(0, e)),
  getBranches: async () => (await ee(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function ee(e) {
  return new Promise((l) => setTimeout(l, e));
}
function he() {
  const e = E(!1), l = E(null);
  async function s(B, X) {
    var Be;
    if (!((Be = window.app) != null && Be.api))
      throw new Error("ComfyUI API not available");
    const le = await window.app.api.fetchApi(B, X);
    if (!le.ok) {
      const Ee = await le.json().catch(() => ({}));
      throw new Error(Ee.error || Ee.message || `Request failed: ${le.status}`);
    }
    return le.json();
  }
  async function r() {
    return Q.getStatus();
  }
  async function d(B, X = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: B, allow_issues: X })
    });
  }
  async function C(B = 10, X = 0) {
    {
      const le = await Q.getCommitHistory(B);
      return {
        commits: le,
        total: le.length,
        offset: X
      };
    }
  }
  async function y(B) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: B })
    });
  }
  async function w() {
    return Q.getBranches();
  }
  async function m(B) {
    return s(`/v2/comfygit/commit/${B}`);
  }
  async function x(B, X = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: B, force: X })
    });
  }
  async function N(B, X = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: B, start_point: X })
    });
  }
  async function k(B, X = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: B, force: X })
    });
  }
  async function R() {
    return Q.getEnvironments();
  }
  async function H(B) {
    return Q.switchEnvironment(B);
  }
  async function Z() {
    return null;
  }
  async function G(B, X, le) {
    return await Q.createEnvironment(B, X, le), { status: "success" };
  }
  async function M(B) {
    return await Q.deleteEnvironment(B), { status: "success" };
  }
  async function $() {
    return Q.getWorkflows();
  }
  async function L(B) {
    return Q.getWorkflowDetails(B);
  }
  async function Y(B) {
    return Q.resolveWorkflow(B);
  }
  async function S(B, X, le) {
    return await Q.installWorkflowDeps(B, X, le), { status: "success" };
  }
  async function _(B, X, le) {
    return Q.setModelImportance(B, X, le);
  }
  async function g() {
    return Q.getEnvironmentModels();
  }
  async function b() {
    return Q.getWorkspaceModels();
  }
  async function h(B, X) {
    return Q.updateModelSource(B, X);
  }
  async function I(B) {
    return Q.deleteModel(B);
  }
  async function z(B) {
    return await Q.downloadModel(B), { status: "success" };
  }
  async function ie() {
    return Q.getConfig();
  }
  async function W(B) {
    return Q.updateConfig(B);
  }
  async function V(B, X) {
    return Q.getEnvironmentLogs(B, X);
  }
  async function q(B, X) {
    return Q.getWorkspaceLogs(B, X);
  }
  async function ge() {
    return Q.getNodes();
  }
  async function ke(B) {
    return await Q.installNode(B), { status: "success" };
  }
  async function He(B) {
    return await Q.updateNode(B), { status: "success" };
  }
  async function De(B) {
    return await Q.uninstallNode(B), { status: "success" };
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: d,
    getHistory: C,
    exportEnv: y,
    // Git Operations
    getBranches: w,
    getCommitDetail: m,
    checkout: x,
    createBranch: N,
    switchBranch: k,
    // Environment Management
    getEnvironments: R,
    switchEnvironment: H,
    getSwitchProgress: Z,
    createEnvironment: G,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: $,
    getWorkflowDetails: L,
    resolveWorkflow: Y,
    installWorkflowDeps: S,
    setModelImportance: _,
    // Model Management
    getEnvironmentModels: g,
    getWorkspaceModels: b,
    updateModelSource: h,
    deleteModel: I,
    downloadModel: z,
    // Settings
    getConfig: ie,
    updateConfig: W,
    // Debug/Logs
    getEnvironmentLogs: V,
    getWorkspaceLogs: q,
    // Node Management
    getNodes: ge,
    installNode: ke,
    updateNode: He,
    uninstallNode: De
  };
}
const Zo = { class: "base-modal-header" }, Xo = {
  key: 0,
  class: "base-modal-title"
}, Qo = { class: "base-modal-body" }, ea = {
  key: 0,
  class: "base-modal-loading"
}, ta = {
  key: 1,
  class: "base-modal-error"
}, oa = {
  key: 0,
  class: "base-modal-footer"
}, aa = /* @__PURE__ */ T({
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
    const s = e, r = l;
    function d() {
      s.closeOnOverlayClick && r("close");
    }
    function C(y) {
      y.key === "Escape" && r("close");
    }
    return ue(() => {
      document.addEventListener("keydown", C), document.body.style.overflow = "hidden";
    }), ut(() => {
      document.removeEventListener("keydown", C), document.body.style.overflow = "";
    }), (y, w) => (t(), p(ot, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: d
      }, [
        o("div", {
          class: F(["base-modal-content", e.size]),
          onClick: w[1] || (w[1] = Se(() => {
          }, ["stop"]))
        }, [
          o("div", Zo, [
            K(y.$slots, "header", {}, () => [
              e.title ? (t(), n("h3", Xo, u(e.title), 1)) : i("", !0)
            ], !0),
            e.showCloseButton ? (t(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: w[0] || (w[0] = (m) => y.$emit("close"))
            }, [...w[2] || (w[2] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : i("", !0)
          ]),
          o("div", Qo, [
            e.loading ? (t(), n("div", ea, "Loading...")) : e.error ? (t(), n("div", ta, u(e.error), 1)) : K(y.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          y.$slots.footer ? (t(), n("div", oa, [
            K(y.$slots, "footer", {}, void 0, !0)
          ])) : i("", !0)
        ], 2)
      ])
    ]));
  }
}), Ae = /* @__PURE__ */ O(aa, [["__scopeId", "data-v-700d367b"]]), sa = ["type", "disabled"], na = {
  key: 0,
  class: "spinner"
}, la = /* @__PURE__ */ T({
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
    return (l, s) => (t(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: F(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), n("span", na)) : i("", !0),
      K(l.$slots, "default", {}, void 0, !0)
    ], 10, sa));
  }
}), re = /* @__PURE__ */ O(la, [["__scopeId", "data-v-f3452606"]]), ra = {
  key: 0,
  class: "base-title-count"
}, ia = /* @__PURE__ */ T({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, s) => (t(), p(Ye(`h${e.level}`), {
      class: F(["base-title", e.variant])
    }, {
      default: a(() => [
        K(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", ra, "(" + u(e.count) + ")", 1)) : i("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ye = /* @__PURE__ */ O(ia, [["__scopeId", "data-v-5a01561d"]]), ca = ["value", "disabled"], da = {
  key: 0,
  value: "",
  disabled: ""
}, ua = ["value"], ma = {
  key: 0,
  class: "base-select-error"
}, ga = /* @__PURE__ */ T({
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
    function l(r) {
      return typeof r == "string" ? r : r.value;
    }
    function s(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, d) => (t(), n("div", {
      class: F(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: F(["base-select", { error: !!e.error }]),
        onChange: d[0] || (d[0] = (C) => r.$emit("update:modelValue", C.target.value))
      }, [
        e.placeholder ? (t(), n("option", da, u(e.placeholder), 1)) : i("", !0),
        (t(!0), n(P, null, J(e.options, (C) => (t(), n("option", {
          key: l(C),
          value: l(C)
        }, u(s(C)), 9, ua))), 128))
      ], 42, ca),
      e.error ? (t(), n("span", ma, u(e.error), 1)) : i("", !0)
    ], 2));
  }
}), $e = /* @__PURE__ */ O(ga, [["__scopeId", "data-v-7436d745"]]), fa = { class: "detail-section" }, va = {
  key: 0,
  class: "empty-message"
}, ha = { class: "model-header" }, pa = { class: "model-name" }, ya = { class: "model-details" }, ba = { class: "model-row" }, wa = { class: "model-row" }, ka = {
  key: 0,
  class: "model-row"
}, _a = { class: "value" }, xa = {
  key: 1,
  class: "model-row"
}, $a = { class: "value" }, Ca = {
  key: 0,
  class: "model-actions"
}, Ia = { class: "detail-section" }, Sa = {
  key: 0,
  class: "empty-message"
}, Ea = { class: "node-name" }, za = {
  key: 0,
  class: "node-version"
}, La = /* @__PURE__ */ T({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const s = e, r = l, { getWorkflowDetails: d, setModelImportance: C } = he(), y = E(null), w = E(!1), m = E(null), x = E(!1), N = E({}), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function R() {
      w.value = !0, m.value = null;
      try {
        y.value = await d(s.workflowName);
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load workflow details";
      } finally {
        w.value = !1;
      }
    }
    function H(G, M) {
      N.value[G] = M, x.value = !0;
    }
    async function Z() {
      if (!x.value) {
        r("close");
        return;
      }
      w.value = !0, m.value = null;
      try {
        for (const [G, M] of Object.entries(N.value))
          await C(s.workflowName, G, M);
        r("close");
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to save changes";
      } finally {
        w.value = !1;
      }
    }
    return ue(R), (G, M) => (t(), p(Ae, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: w.value,
      error: m.value || void 0,
      onClose: M[2] || (M[2] = ($) => r("close"))
    }, {
      body: a(() => [
        y.value ? (t(), n(P, { key: 0 }, [
          o("section", fa, [
            c(ye, { variant: "section" }, {
              default: a(() => [
                f("MODELS USED (" + u(y.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            y.value.models.length === 0 ? (t(), n("div", va, " No models used in this workflow ")) : i("", !0),
            (t(!0), n(P, null, J(y.value.models, ($) => (t(), n("div", {
              key: $.hash,
              class: "model-card"
            }, [
              o("div", ha, [
                M[3] || (M[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", pa, u($.filename), 1)
              ]),
              o("div", ya, [
                o("div", ba, [
                  M[4] || (M[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: F(["value", $.status === "available" ? "success" : "error"])
                  }, u($.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", wa, [
                  M[5] || (M[5] = o("span", { class: "label" }, "Importance:", -1)),
                  c($e, {
                    "model-value": N.value[$.hash] || $.importance,
                    options: k,
                    "onUpdate:modelValue": (L) => H($.hash, L)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                $.node_type ? (t(), n("div", ka, [
                  M[6] || (M[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", _a, u($.node_type) + " (Node " + u($.node_id) + ")", 1)
                ])) : i("", !0),
                $.size_mb ? (t(), n("div", xa, [
                  M[7] || (M[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", $a, u($.size_mb) + " MB", 1)
                ])) : i("", !0)
              ]),
              $.status === "missing" ? (t(), n("div", Ca, [
                c(re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[0] || (M[0] = (L) => r("resolve"))
                }, {
                  default: a(() => [...M[8] || (M[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : i("", !0)
            ]))), 128))
          ]),
          M[9] || (M[9] = o("div", { class: "info-box" }, [
            o("div", { class: "info-title" }, "Importance options:"),
            o("ul", { class: "info-list" }, [
              o("li", null, [
                o("strong", null, "Required"),
                f(" — Must have for workflow to run")
              ]),
              o("li", null, [
                o("strong", null, "Flexible"),
                f(" — Workflow adapts if missing")
              ]),
              o("li", null, [
                o("strong", null, "Optional"),
                f(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          o("section", Ia, [
            c(ye, { variant: "section" }, {
              default: a(() => [
                f("NODES USED (" + u(y.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            y.value.nodes.length === 0 ? (t(), n("div", Sa, " No custom nodes used in this workflow ")) : i("", !0),
            (t(!0), n(P, null, J(y.value.nodes, ($) => (t(), n("div", {
              key: $.name,
              class: "node-item"
            }, [
              o("span", {
                class: F(["node-status", $.installed ? "installed" : "missing"])
              }, u($.installed ? "✓" : "✕"), 3),
              o("span", Ea, u($.name), 1),
              $.version ? (t(), n("span", za, "v" + u($.version), 1)) : i("", !0)
            ]))), 128))
          ])
        ], 64)) : i("", !0)
      ]),
      footer: a(() => [
        c(re, {
          variant: "secondary",
          onClick: M[1] || (M[1] = ($) => r("close"))
        }, {
          default: a(() => [...M[10] || (M[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        x.value ? (t(), p(re, {
          key: 0,
          variant: "primary",
          onClick: Z
        }, {
          default: a(() => [...M[11] || (M[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : i("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ma = /* @__PURE__ */ O(La, [["__scopeId", "data-v-6ce9a41c"]]), Na = {
  key: 0,
  class: "resolve-section"
}, Va = { class: "resolve-card success-card" }, Da = { class: "items-list" }, Ba = { class: "item-info" }, Ta = { class: "item-name" }, Oa = {
  key: 0,
  class: "item-meta"
}, Ua = { class: "match-type" }, Ra = { class: "source" }, Wa = {
  key: 1,
  class: "resolve-section"
}, Aa = { class: "resolve-card warning-card" }, Pa = { class: "items-list" }, Fa = { class: "item-info" }, Ha = { class: "item-name" }, ja = { class: "item-meta" }, Ga = { key: 0 }, Ka = { key: 1 }, qa = {
  key: 0,
  class: "item-warning"
}, Ja = {
  key: 0,
  class: "item-action"
}, Ya = ["onClick"], Za = {
  key: 2,
  class: "resolve-section"
}, Xa = { class: "info-text" }, Qa = { class: "actions-summary" }, es = { class: "summary-list" }, ts = { key: 0 }, os = { key: 1 }, as = { key: 2 }, ss = {
  key: 0,
  class: "estimated-size"
}, ns = /* @__PURE__ */ T({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const s = e, r = l, { resolveWorkflow: d, installWorkflowDeps: C } = he(), y = E(null), w = E(!1), m = E(!1), x = E(null), N = A(() => {
      var _;
      return y.value ? ((_ = y.value.download_results) == null ? void 0 : _.every((g) => g.can_download)) ?? !1 : !1;
    });
    async function k() {
      w.value = !0, x.value = null;
      try {
        y.value = await d(s.workflowName);
      } catch (_) {
        x.value = _ instanceof Error ? _.message : "Failed to analyze workflow";
      } finally {
        w.value = !1;
      }
    }
    function R(_) {
      return !_.possible_matches || _.possible_matches.length === 0 ? null : _.possible_matches.reduce(
        (g, b) => b.match_confidence > g.match_confidence ? b : g
      );
    }
    function H(_) {
      return _ >= 0.9 ? "high" : _ >= 0.7 ? "medium" : "low";
    }
    function Z(_) {
      const g = R(_);
      return g ? g.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function G(_) {
      var g, b;
      return (b = (g = y.value) == null ? void 0 : g.download_results) == null ? void 0 : b.find((h) => h.model === _);
    }
    function M(_) {
      const g = G(_);
      return (g == null ? void 0 : g.can_download) ?? !1;
    }
    function $(_) {
      const g = G(_);
      return (g == null ? void 0 : g.source_url) || null;
    }
    function L(_) {
      window.open(_, "_blank");
    }
    async function Y() {
      if (!(!y.value || m.value)) {
        m.value = !0, x.value = null;
        try {
          await C(
            s.workflowName,
            y.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (_) {
          x.value = _ instanceof Error ? _.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function S() {
      if (!(!y.value || m.value)) {
        m.value = !0, x.value = null;
        try {
          await C(
            s.workflowName,
            y.value.nodes_to_install,
            y.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (_) {
          x.value = _ instanceof Error ? _.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return ue(k), (_, g) => (t(), p(Ae, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: w.value,
      error: x.value || void 0,
      onClose: g[1] || (g[1] = (b) => r("close"))
    }, {
      body: a(() => [
        y.value ? (t(), n(P, { key: 0 }, [
          g[5] || (g[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          y.value.nodes_unresolved.length > 0 ? (t(), n("section", Na, [
            c(ye, { variant: "section" }, {
              default: a(() => [
                f("NODES (" + u(y.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Va, [
              g[2] || (g[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Da, [
                (t(!0), n(P, null, J(y.value.nodes_unresolved, (b) => {
                  var h;
                  return t(), n("div", {
                    key: b.node_type,
                    class: "item"
                  }, [
                    o("div", Ba, [
                      o("div", Ta, u(((h = R(b)) == null ? void 0 : h.package_id) || b.node_type), 1),
                      R(b) ? (t(), n("div", Oa, [
                        o("span", {
                          class: F(["confidence-badge", H(R(b).match_confidence)])
                        }, u(Math.round(R(b).match_confidence * 100)) + "% match ", 3),
                        o("span", Ua, u(R(b).match_type), 1),
                        o("span", Ra, "Source: " + u(Z(b)), 1)
                      ])) : i("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : i("", !0),
          y.value.models_unresolved.length > 0 ? (t(), n("section", Wa, [
            c(ye, { variant: "section" }, {
              default: a(() => [
                f("MODELS (" + u(y.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Aa, [
              g[3] || (g[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Pa, [
                (t(!0), n(P, null, J(y.value.models_unresolved, (b) => (t(), n("div", {
                  key: b.filename,
                  class: "item"
                }, [
                  o("div", Fa, [
                    o("div", Ha, u(b.filename), 1),
                    o("div", ja, [
                      b.expected_category ? (t(), n("span", Ga, "Type: " + u(b.expected_category), 1)) : i("", !0),
                      G(b.filename) ? (t(), n("span", Ka, " Size: ~" + u(G(b.filename).estimated_size_mb) + " MB ", 1)) : i("", !0)
                    ]),
                    M(b.filename) ? i("", !0) : (t(), n("div", qa, " No auto-download source configured "))
                  ]),
                  $(b.filename) ? (t(), n("div", Ja, [
                    o("button", {
                      class: "link-btn",
                      onClick: (h) => L($(b.filename))
                    }, " Open Source ↗ ", 8, Ya)
                  ])) : i("", !0)
                ]))), 128))
              ])
            ])
          ])) : i("", !0),
          y.value.nodes_resolved.length > 0 || y.value.models_resolved.length > 0 ? (t(), n("section", Za, [
            c(ye, { variant: "section" }, {
              default: a(() => [
                f(" ALREADY AVAILABLE (" + u(y.value.nodes_resolved.length + y.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", Xa, u(y.value.nodes_resolved.length) + " nodes and " + u(y.value.models_resolved.length) + " models are already installed ", 1)
          ])) : i("", !0),
          o("div", Qa, [
            g[4] || (g[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", es, [
              y.value.nodes_to_install.length ? (t(), n("li", ts, " Install " + u(y.value.nodes_to_install.length) + " nodes (~" + u(y.value.estimated_time_seconds) + "s) ", 1)) : i("", !0),
              y.value.nodes_to_install.length ? (t(), n("li", os, " Restart ComfyUI to load new nodes ")) : i("", !0),
              y.value.models_to_download.length ? (t(), n("li", as, " You'll still need to download " + u(y.value.models_to_download.length) + " model(s) manually ", 1)) : i("", !0)
            ]),
            y.value.estimated_size_mb ? (t(), n("div", ss, " Estimated download: " + u(y.value.estimated_size_mb) + " MB ", 1)) : i("", !0)
          ])
        ], 64)) : i("", !0)
      ]),
      footer: a(() => [
        c(re, {
          variant: "secondary",
          onClick: g[0] || (g[0] = (b) => r("close"))
        }, {
          default: a(() => [...g[6] || (g[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y.value && y.value.nodes_to_install.length && y.value.models_to_download.length ? (t(), p(re, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: Y
        }, {
          default: a(() => [...g[7] || (g[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : i("", !0),
        y.value && (y.value.nodes_to_install.length || y.value.models_to_download.length) ? (t(), p(re, {
          key: 1,
          variant: "primary",
          disabled: m.value || y.value.models_to_download.length > 0 && !N.value,
          loading: m.value,
          onClick: S
        }, {
          default: a(() => [...g[8] || (g[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : i("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ls = /* @__PURE__ */ O(ns, [["__scopeId", "data-v-d68efb14"]]), rs = { class: "search-input-wrapper" }, is = ["value", "placeholder"], cs = /* @__PURE__ */ T({
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
    const s = e, r = l, d = E(null);
    let C;
    function y(m) {
      const x = m.target.value;
      s.debounce > 0 ? (clearTimeout(C), C = window.setTimeout(() => {
        r("update:modelValue", x);
      }, s.debounce)) : r("update:modelValue", x);
    }
    function w() {
      var m;
      r("update:modelValue", ""), r("clear"), (m = d.value) == null || m.focus();
    }
    return ue(() => {
      s.autoFocus && d.value && d.value.focus();
    }), (m, x) => (t(), n("div", rs, [
      o("input", {
        ref_key: "inputRef",
        ref: d,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: y,
        onKeyup: Me(w, ["escape"])
      }, null, 40, is),
      e.clearable && e.modelValue ? (t(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: w,
        title: "Clear search"
      }, " ✕ ")) : i("", !0)
    ]));
  }
}), ds = /* @__PURE__ */ O(cs, [["__scopeId", "data-v-266f857a"]]), us = { class: "search-bar" }, ms = /* @__PURE__ */ T({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, s) => (t(), n("div", us, [
      c(ds, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Pe = /* @__PURE__ */ O(ms, [["__scopeId", "data-v-3d51bbfd"]]), gs = { class: "section-group" }, fs = {
  key: 0,
  class: "section-content"
}, vs = /* @__PURE__ */ T({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const s = e, r = l, d = E(s.initiallyExpanded);
    function C() {
      s.collapsible && (d.value = !d.value, r("toggle", d.value));
    }
    return (y, w) => (t(), n("section", gs, [
      c(qe, {
        count: e.count,
        clickable: e.collapsible,
        expanded: d.value,
        onClick: C
      }, {
        default: a(() => [
          f(u(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || d.value ? (t(), n("div", fs, [
        K(y.$slots, "default", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), se = /* @__PURE__ */ O(vs, [["__scopeId", "data-v-c48e33ed"]]), hs = { class: "item-header" }, ps = {
  key: 0,
  class: "item-icon"
}, ys = { class: "item-info" }, bs = {
  key: 0,
  class: "item-title"
}, ws = {
  key: 1,
  class: "item-subtitle"
}, ks = {
  key: 0,
  class: "item-details"
}, _s = {
  key: 1,
  class: "item-actions"
}, xs = /* @__PURE__ */ T({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = A(() => s.status ? `status-${s.status}` : "");
    return (d, C) => (t(), n("div", {
      class: F(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: C[0] || (C[0] = (y) => e.clickable && d.$emit("click"))
    }, [
      o("div", hs, [
        d.$slots.icon ? (t(), n("span", ps, [
          K(d.$slots, "icon", {}, void 0, !0)
        ])) : i("", !0),
        o("div", ys, [
          d.$slots.title ? (t(), n("div", bs, [
            K(d.$slots, "title", {}, void 0, !0)
          ])) : i("", !0),
          d.$slots.subtitle ? (t(), n("div", ws, [
            K(d.$slots, "subtitle", {}, void 0, !0)
          ])) : i("", !0)
        ])
      ]),
      d.$slots.details ? (t(), n("div", ks, [
        K(d.$slots, "details", {}, void 0, !0)
      ])) : i("", !0),
      d.$slots.actions ? (t(), n("div", _s, [
        K(d.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ O(xs, [["__scopeId", "data-v-cc435e0e"]]), $s = { class: "loading-state" }, Cs = { class: "loading-message" }, Is = /* @__PURE__ */ T({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, s) => (t(), n("div", $s, [
      s[0] || (s[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", Cs, u(e.message), 1)
    ]));
  }
}), Ne = /* @__PURE__ */ O(Is, [["__scopeId", "data-v-ad8436c9"]]), Ss = { class: "error-state" }, Es = { class: "error-message" }, zs = /* @__PURE__ */ T({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, s) => (t(), n("div", Ss, [
      s[2] || (s[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", Es, u(e.message), 1),
      e.retry ? (t(), p(U, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : i("", !0)
    ]));
  }
}), Ve = /* @__PURE__ */ O(zs, [["__scopeId", "data-v-5397be48"]]), Ls = /* @__PURE__ */ T({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const s = l, { getWorkflows: r } = he(), d = E([]), C = E(!1), y = E(null), w = E(""), m = E(!1), x = E(!1), N = E(!1), k = E(!1), R = E(null), H = A(
      () => d.value.filter((W) => W.status === "broken")
    ), Z = A(
      () => d.value.filter((W) => W.status === "new")
    ), G = A(
      () => d.value.filter((W) => W.status === "modified")
    ), M = A(
      () => d.value.filter((W) => W.status === "synced")
    ), $ = A(() => {
      if (!w.value.trim()) return d.value;
      const W = w.value.toLowerCase();
      return d.value.filter((V) => V.name.toLowerCase().includes(W));
    }), L = A(
      () => H.value.filter(
        (W) => !w.value.trim() || W.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), Y = A(
      () => Z.value.filter(
        (W) => !w.value.trim() || W.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), S = A(
      () => G.value.filter(
        (W) => !w.value.trim() || W.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), _ = A(
      () => M.value.filter(
        (W) => !w.value.trim() || W.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), g = A(
      () => x.value ? _.value : _.value.slice(0, 5)
    );
    async function b() {
      C.value = !0, y.value = null;
      try {
        d.value = await r();
      } catch (W) {
        y.value = W instanceof Error ? W.message : "Failed to load workflows";
      } finally {
        C.value = !1;
      }
    }
    function h(W) {
      R.value = W, N.value = !0;
    }
    function I(W) {
      R.value = W, k.value = !0;
    }
    function z() {
      alert("Bulk resolution not yet implemented");
    }
    function ie() {
      s("refresh");
    }
    return ue(b), (W, V) => (t(), n(P, null, [
      c(be, null, {
        header: a(() => [
          c(we, { title: "WORKFLOWS" }, {
            actions: a(() => [
              H.value.length > 0 ? (t(), p(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: a(() => [...V[7] || (V[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : i("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          c(Pe, {
            modelValue: w.value,
            "onUpdate:modelValue": V[0] || (V[0] = (q) => w.value = q),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          C.value ? (t(), p(Ne, {
            key: 0,
            message: "Loading workflows..."
          })) : y.value ? (t(), p(Ve, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (t(), n(P, { key: 2 }, [
            L.value.length ? (t(), p(se, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(L.value, (q) => (t(), p(de, {
                  key: q.name,
                  status: "broken"
                }, {
                  icon: a(() => [...V[8] || (V[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(u(q.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(" Missing: " + u(q.missing_nodes) + " nodes, " + u(q.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    c(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ge) => I(q.name)
                    }, {
                      default: a(() => [...V[9] || (V[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    c(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ge) => h(q.name)
                    }, {
                      default: a(() => [...V[10] || (V[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            Y.value.length ? (t(), p(se, {
              key: 1,
              title: "NEW",
              count: Y.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(Y.value, (q) => (t(), p(de, {
                  key: q.name,
                  status: "new"
                }, {
                  icon: a(() => [...V[11] || (V[11] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(u(q.name), 1)
                  ]),
                  subtitle: a(() => [...V[12] || (V[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ge) => h(q.name)
                    }, {
                      default: a(() => [...V[13] || (V[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            S.value.length ? (t(), p(se, {
              key: 2,
              title: "MODIFIED",
              count: S.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(S.value, (q) => (t(), p(de, {
                  key: q.name,
                  status: "modified"
                }, {
                  icon: a(() => [...V[14] || (V[14] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(u(q.name), 1)
                  ]),
                  subtitle: a(() => [...V[15] || (V[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ge) => h(q.name)
                    }, {
                      default: a(() => [...V[16] || (V[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            _.value.length ? (t(), p(se, {
              key: 3,
              title: "SYNCED",
              count: _.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: V[2] || (V[2] = (q) => m.value = q)
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(g.value, (q) => (t(), p(de, {
                  key: q.name,
                  status: "synced"
                }, {
                  icon: a(() => [...V[17] || (V[17] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(u(q.name), 1)
                  ]),
                  subtitle: a(() => [...V[18] || (V[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ge) => h(q.name)
                    }, {
                      default: a(() => [...V[19] || (V[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !x.value && _.value.length > 5 ? (t(), p(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: V[1] || (V[1] = (q) => x.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + u(_.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : i("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : i("", !0),
            $.value.length ? i("", !0) : (t(), p(Ce, {
              key: 4,
              icon: "📭",
              message: w.value ? `No workflows match '${w.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      N.value && R.value ? (t(), p(Ma, {
        key: 0,
        "workflow-name": R.value,
        onClose: V[3] || (V[3] = (q) => N.value = !1),
        onResolve: V[4] || (V[4] = (q) => I(R.value))
      }, null, 8, ["workflow-name"])) : i("", !0),
      k.value && R.value ? (t(), p(ls, {
        key: 1,
        "workflow-name": R.value,
        onClose: V[5] || (V[5] = (q) => k.value = !1),
        onInstall: ie,
        onRefresh: V[6] || (V[6] = (q) => s("refresh"))
      }, null, 8, ["workflow-name"])) : i("", !0)
    ], 64));
  }
}), Ms = /* @__PURE__ */ O(Ls, [["__scopeId", "data-v-2251d776"]]), Ns = /* @__PURE__ */ T({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (t(), n("span", {
      class: F(["detail-label"]),
      style: Ze({ minWidth: e.minWidth })
    }, [
      K(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Vs = /* @__PURE__ */ O(Ns, [["__scopeId", "data-v-75e9eeb8"]]), Ds = /* @__PURE__ */ T({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), n("span", {
      class: F(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      K(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Re = /* @__PURE__ */ O(Ds, [["__scopeId", "data-v-2f186e4c"]]), Bs = { class: "detail-row" }, Ts = /* @__PURE__ */ T({
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
    return (l, s) => (t(), n("div", Bs, [
      c(Vs, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          f(u(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), p(Re, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          f(u(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : K(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), te = /* @__PURE__ */ O(Ts, [["__scopeId", "data-v-ef15664a"]]), Os = /* @__PURE__ */ T({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: F(["summary-bar", e.variant])
    }, [
      K(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ O(Os, [["__scopeId", "data-v-ccb7816e"]]), Us = { class: "popover-header" }, Rs = { class: "popover-title" }, Ws = { class: "popover-content" }, As = {
  key: 0,
  class: "popover-actions"
}, Ps = /* @__PURE__ */ T({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, s) => (t(), p(ot, { to: "body" }, [
      e.show ? (t(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => l.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: Ze({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = Se(() => {
          }, ["stop"]))
        }, [
          o("div", Us, [
            o("h4", Rs, u(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          o("div", Ws, [
            K(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (t(), n("div", As, [
            K(l.$slots, "actions", {}, void 0, !0)
          ])) : i("", !0)
        ], 4)
      ])) : i("", !0)
    ]));
  }
}), Xe = /* @__PURE__ */ O(Ps, [["__scopeId", "data-v-057df510"]]), Fs = /* @__PURE__ */ T({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const s = l, { getEnvironmentModels: r, getStatus: d } = he(), C = E([]), y = E([]), w = E("production"), m = E(!1), x = E(null), N = E(""), k = E(!1);
    function R() {
      k.value = !1, s("navigate", "model-index");
    }
    const H = A(
      () => C.value.reduce((h, I) => h + (I.size_mb || I.size || 0), 0)
    ), Z = A(() => {
      if (!N.value.trim()) return C.value;
      const h = N.value.toLowerCase();
      return C.value.filter((I) => I.filename.toLowerCase().includes(h));
    }), G = A(() => {
      if (!N.value.trim()) return y.value;
      const h = N.value.toLowerCase();
      return y.value.filter((I) => I.filename.toLowerCase().includes(h));
    }), M = A(
      () => Z.value.filter((h) => h.type === "checkpoints" || h.category === "checkpoints")
    ), $ = A(
      () => Z.value.filter((h) => h.type === "loras" || h.category === "loras")
    ), L = A(
      () => Z.value.filter(
        (h) => h.type !== "checkpoints" && h.category !== "checkpoints" && h.type !== "loras" && h.category !== "loras"
      )
    );
    function Y(h) {
      return h ? h >= 1024 ? `${(h / 1024).toFixed(1)} GB` : `${h.toFixed(0)} MB` : "Unknown";
    }
    function S(h) {
      s("navigate", "model-index");
    }
    function _(h) {
      s("navigate", "model-index");
    }
    function g(h) {
      alert(`Download functionality not yet implemented for ${h}`);
    }
    async function b() {
      m.value = !0, x.value = null;
      try {
        const h = await r();
        C.value = h, y.value = [];
        const I = await d();
        w.value = I.environment || "production";
      } catch (h) {
        x.value = h instanceof Error ? h.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return ue(b), (h, I) => (t(), n(P, null, [
      c(be, null, {
        header: a(() => [
          c(we, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (z) => k.value = !0)
          })
        ]),
        search: a(() => [
          c(Pe, {
            modelValue: N.value,
            "onUpdate:modelValue": I[1] || (I[1] = (z) => N.value = z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (t(), p(Ne, {
            key: 0,
            message: "Loading environment models..."
          })) : x.value ? (t(), p(Ve, {
            key: 1,
            message: x.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (t(), n(P, { key: 2 }, [
            C.value.length ? (t(), p(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(C.value.length) + " models • " + u(Y(H.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : i("", !0),
            M.value.length ? (t(), p(se, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(M.value, (z) => (t(), p(de, {
                  key: z.sha256 || z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[3] || (I[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(Y(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => [
                    c(te, {
                      label: "Used by:",
                      value: (z.used_by || z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    c(te, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => S(z.sha256 || z.sha256_hash || z.hash || "")
                    }, {
                      default: a(() => [...I[4] || (I[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            $.value.length ? (t(), p(se, {
              key: 2,
              title: "LORAS",
              count: $.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J($.value, (z) => (t(), p(de, {
                  key: z.sha256 || z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[5] || (I[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(Y(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => [
                    c(te, {
                      label: "Used by:",
                      value: (z.used_by || z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    c(te, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => S(z.sha256 || z.sha256_hash || z.hash || "")
                    }, {
                      default: a(() => [...I[6] || (I[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            L.value.length ? (t(), p(se, {
              key: 3,
              title: "OTHER",
              count: L.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(L.value, (z) => (t(), p(de, {
                  key: z.sha256 || z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[7] || (I[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(Y(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => [
                    c(te, {
                      label: "Type:",
                      value: z.type
                    }, null, 8, ["value"]),
                    c(te, {
                      label: "Used by:",
                      value: (z.used_by || z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => S(z.sha256 || z.sha256_hash || z.hash || "")
                    }, {
                      default: a(() => [...I[8] || (I[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            G.value.length ? (t(), p(se, {
              key: 4,
              title: "MISSING",
              count: G.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(G.value, (z) => (t(), p(de, {
                  key: z.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...I[9] || (I[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(u(z.filename), 1)
                  ]),
                  subtitle: a(() => [...I[10] || (I[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var ie;
                    return [
                      c(te, {
                        label: "Required by:",
                        value: ((ie = z.workflow_names) == null ? void 0 : ie.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    c(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => g(z.filename)
                    }, {
                      default: a(() => [...I[11] || (I[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    c(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => _(z.filename)
                    }, {
                      default: a(() => [...I[12] || (I[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            !Z.value.length && !G.value.length ? (t(), p(Ce, {
              key: 5,
              icon: "📭",
              message: N.value ? `No models match '${N.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      c(Xe, {
        show: k.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (z) => k.value = !1)
      }, {
        content: a(() => [
          o("p", null, [
            I[13] || (I[13] = f(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + u(w.value) + '"', 1),
            I[14] || (I[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          c(U, {
            variant: "primary",
            onClick: R
          }, {
            default: a(() => [...I[15] || (I[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Hs = /* @__PURE__ */ O(Fs, [["__scopeId", "data-v-865641a4"]]), js = /* @__PURE__ */ T({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = he(), s = E([]), r = E(!1), d = E(null), C = E(""), y = E(!1), w = A(
      () => s.value.reduce((g, b) => g + (b.size_mb || b.size || 0), 0)
    ), m = A(() => {
      const g = /* @__PURE__ */ new Set();
      return s.value.forEach((b) => {
        b.used_in_environments && b.used_in_environments.length > 0 && b.used_in_environments.forEach((h) => g.add(h.env_name));
      }), g.size;
    }), x = A(() => {
      if (!C.value.trim()) return s.value;
      const g = C.value.toLowerCase();
      return s.value.filter((b) => {
        const h = b, I = b.sha256 || h.sha256_hash || "";
        return b.filename.toLowerCase().includes(g) || I.toLowerCase().includes(g);
      });
    }), N = A(
      () => x.value.filter((g) => g.type === "checkpoints")
    ), k = A(
      () => x.value.filter((g) => g.type === "loras")
    ), R = A(
      () => x.value.filter((g) => g.type !== "checkpoints" && g.type !== "loras")
    );
    function H(g) {
      return g ? g >= 1024 ? `${(g / 1024).toFixed(1)} GB` : `${g.toFixed(0)} MB` : "Unknown";
    }
    function Z(g) {
      const b = g, h = g.used_in_workflows || b.used_by || [];
      return !h || h.length === 0 ? "Not used" : `${h.length} workflow(s)`;
    }
    function G(g) {
      navigator.clipboard.writeText(g), alert("Hash copied to clipboard");
    }
    function M(g) {
      prompt("Enter model source URL:", g.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function $(g) {
      const b = g, h = g.used_in_workflows || b.used_by || [], I = h && h.length > 0 ? `

⚠ WARNING: This model is used by ${h.length} workflow(s):
${h.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${g.filename}?${I}

This will free ${H(b.size_mb || g.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function L() {
      alert("Scan for models not yet implemented");
    }
    function Y() {
      alert("Change directory not yet implemented");
    }
    function S() {
      alert("Download new model not yet implemented");
    }
    async function _() {
      r.value = !0, d.value = null;
      try {
        s.value = await l(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", N.value), console.log("Filtered loras:", k.value), console.log("Filtered other:", R.value);
      } catch (g) {
        d.value = g instanceof Error ? g.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ue(_), (g, b) => (t(), n(P, null, [
      c(be, null, {
        header: a(() => [
          c(we, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: b[0] || (b[0] = (h) => y.value = !0)
          }, {
            actions: a(() => [
              c(U, {
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: a(() => [...b[3] || (b[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              c(U, {
                variant: "primary",
                size: "sm",
                onClick: Y
              }, {
                default: a(() => [...b[4] || (b[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              c(U, {
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: a(() => [...b[5] || (b[5] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  f(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          c(Pe, {
            modelValue: C.value,
            "onUpdate:modelValue": b[1] || (b[1] = (h) => C.value = h),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (t(), p(Ne, {
            key: 0,
            message: "Loading workspace models..."
          })) : d.value ? (t(), p(Ve, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (t(), n(P, { key: 2 }, [
            s.value.length ? (t(), p(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(s.value.length) + " models • " + u(H(w.value)) + " • Used in " + u(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : i("", !0),
            N.value.length ? (t(), p(se, {
              key: 1,
              title: "CHECKPOINTS",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(N.value, (h) => (t(), p(de, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...b[6] || (b[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(h.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(H(h.size_mb || h.size)), 1)
                  ]),
                  details: a(() => {
                    var I, z;
                    return [
                      h.sha256 || h.sha256_hash ? (t(), p(te, {
                        key: 0,
                        label: "SHA256:",
                        value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : i("", !0),
                      c(te, {
                        label: "Used in:",
                        value: Z(h)
                      }, null, 8, ["value"]),
                      h.source_url || (I = h.sources) != null && I[0] ? (t(), p(te, {
                        key: 1,
                        label: "Source URL:",
                        value: h.source_url || ((z = h.sources) == null ? void 0 : z[0])
                      }, null, 8, ["value"])) : (t(), p(te, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...b[7] || (b[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => M(h)
                    }, {
                      default: a(() => [...b[8] || (b[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => G(h.sha256 || h.sha256_hash)
                    }, {
                      default: a(() => [...b[9] || (b[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    c(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (I) => $(h)
                    }, {
                      default: a(() => [...b[10] || (b[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            k.value.length ? (t(), p(se, {
              key: 2,
              title: "LORAS",
              count: k.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(k.value, (h) => (t(), p(de, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...b[11] || (b[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(h.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(H(h.size_mb || h.size)), 1)
                  ]),
                  details: a(() => {
                    var I, z;
                    return [
                      h.sha256 || h.sha256_hash ? (t(), p(te, {
                        key: 0,
                        label: "SHA256:",
                        value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : i("", !0),
                      c(te, {
                        label: "Used in:",
                        value: Z(h)
                      }, null, 8, ["value"]),
                      h.source_url || (I = h.sources) != null && I[0] ? (t(), p(te, {
                        key: 1,
                        label: "Source URL:",
                        value: h.source_url || ((z = h.sources) == null ? void 0 : z[0])
                      }, null, 8, ["value"])) : (t(), p(te, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...b[12] || (b[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => M(h)
                    }, {
                      default: a(() => [...b[13] || (b[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => G(h.sha256 || h.sha256_hash)
                    }, {
                      default: a(() => [...b[14] || (b[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    c(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (I) => $(h)
                    }, {
                      default: a(() => [...b[15] || (b[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            R.value.length ? (t(), p(se, {
              key: 3,
              title: "OTHER",
              count: R.value.length
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(R.value, (h) => (t(), p(de, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...b[16] || (b[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(h.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(H(h.size_mb || h.size)), 1)
                  ]),
                  details: a(() => [
                    c(te, {
                      label: "Type:",
                      value: h.type
                    }, null, 8, ["value"]),
                    h.sha256 || h.sha256_hash ? (t(), p(te, {
                      key: 0,
                      label: "SHA256:",
                      value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : i("", !0),
                    c(te, {
                      label: "Used in:",
                      value: Z(h)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    c(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => M(h)
                    }, {
                      default: a(() => [...b[17] || (b[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => G(h.sha256 || h.sha256_hash)
                    }, {
                      default: a(() => [...b[18] || (b[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    c(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (I) => $(h)
                    }, {
                      default: a(() => [...b[19] || (b[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            x.value.length ? i("", !0) : (t(), p(Ce, {
              key: 4,
              icon: "📭",
              message: C.value ? `No models match '${C.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      c(Xe, {
        show: y.value,
        title: "About Workspace Model Index",
        onClose: b[2] || (b[2] = (h) => y.value = !1)
      }, {
        content: a(() => [...b[20] || (b[20] = [
          o("p", null, [
            f(" Content-addressable model storage shared across "),
            o("strong", null, "all environments"),
            f(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Gs = /* @__PURE__ */ O(js, [["__scopeId", "data-v-5a24af01"]]), Ks = { key: 0 }, qs = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Js = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Ys = /* @__PURE__ */ T({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: l, installNode: s, updateNode: r, uninstallNode: d } = he(), C = E({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), y = E(!1), w = E(null), m = E(""), x = E(!1), N = A(() => {
      if (!m.value.trim()) return C.value.nodes;
      const S = m.value.toLowerCase();
      return C.value.nodes.filter(
        (_) => {
          var g, b;
          return _.name.toLowerCase().includes(S) || ((g = _.description) == null ? void 0 : g.toLowerCase().includes(S)) || ((b = _.repository) == null ? void 0 : b.toLowerCase().includes(S));
        }
      );
    }), k = A(
      () => N.value.filter((S) => S.installed)
    ), R = A(
      () => N.value.filter((S) => !S.installed)
    );
    function H(S) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[S] || S;
    }
    function Z(S) {
      return !S.used_in_workflows || S.used_in_workflows.length === 0 ? "Not used in any workflows" : S.used_in_workflows.length === 1 ? S.used_in_workflows[0] : `${S.used_in_workflows.length} workflows`;
    }
    function G(S) {
      window.open(S, "_blank");
    }
    async function M(S) {
      if (confirm(`Install node "${S}"?

This will download and install the node from its repository.`))
        try {
          y.value = !0;
          const _ = await s(S);
          _.status === "success" ? (alert(`Node "${S}" installed successfully!`), await Y()) : alert(`Failed to install node: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error installing node: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          y.value = !1;
        }
    }
    async function $(S) {
      if (confirm(`Check for updates for "${S}"?`))
        try {
          y.value = !0;
          const _ = await r(S);
          _.status === "success" ? (alert(`Node "${S}" is up to date or has been updated!`), await Y()) : alert(`Update check failed: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error checking for updates: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          y.value = !1;
        }
    }
    async function L(S) {
      if (confirm(`Uninstall node "${S}"?

This will remove the node from this environment.`))
        try {
          y.value = !0;
          const _ = await d(S);
          _.status === "success" ? (alert(`Node "${S}" uninstalled successfully!`), await Y()) : alert(`Failed to uninstall node: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error uninstalling node: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          y.value = !1;
        }
    }
    async function Y() {
      y.value = !0, w.value = null;
      try {
        C.value = await l();
      } catch (S) {
        w.value = S instanceof Error ? S.message : "Failed to load nodes";
      } finally {
        y.value = !1;
      }
    }
    return ue(Y), (S, _) => (t(), n(P, null, [
      c(be, null, {
        header: a(() => [
          c(we, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (g) => x.value = !0)
          })
        ]),
        search: a(() => [
          c(Pe, {
            modelValue: m.value,
            "onUpdate:modelValue": _[1] || (_[1] = (g) => m.value = g),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          y.value ? (t(), p(Ne, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : w.value ? (t(), p(Ve, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (t(), n(P, { key: 2 }, [
            C.value.total_count ? (t(), p(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(C.value.total_count) + " nodes • " + u(C.value.installed_count) + " installed • " + u(C.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : i("", !0),
            k.value.length ? (t(), p(se, {
              key: 1,
              title: "INSTALLED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(k.value, (g) => (t(), p(de, {
                  key: g.name,
                  status: "synced"
                }, {
                  icon: a(() => [..._[4] || (_[4] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(g.name), 1)
                  ]),
                  subtitle: a(() => [
                    g.version ? (t(), n("span", Ks, "v" + u(g.version), 1)) : (t(), n("span", qs, "version unknown")),
                    g.source ? (t(), n("span", Js, " • " + u(H(g.source)), 1)) : i("", !0)
                  ]),
                  details: a(() => [
                    g.description ? (t(), p(te, {
                      key: 0,
                      label: "Description:",
                      value: g.description
                    }, null, 8, ["value"])) : i("", !0),
                    g.repository ? (t(), p(te, {
                      key: 1,
                      label: "Repository:",
                      value: g.repository
                    }, null, 8, ["value"])) : i("", !0),
                    c(te, {
                      label: "Used by:",
                      value: Z(g)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    g.repository ? (t(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (b) => G(g.repository)
                    }, {
                      default: a(() => [..._[5] || (_[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    g.source === "registry" ? (t(), p(U, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (b) => $(g.name)
                    }, {
                      default: a(() => [..._[6] || (_[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    g.source !== "unknown" ? (t(), p(U, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (b) => L(g.name)
                    }, {
                      default: a(() => [..._[7] || (_[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            R.value.length ? (t(), p(se, {
              key: 2,
              title: "MISSING",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(P, null, J(R.value, (g) => (t(), p(de, {
                  key: g.name,
                  status: "missing"
                }, {
                  icon: a(() => [..._[8] || (_[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(u(g.name), 1)
                  ]),
                  subtitle: a(() => [..._[9] || (_[9] = [
                    o("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    g.description ? (t(), p(te, {
                      key: 0,
                      label: "Description:",
                      value: g.description
                    }, null, 8, ["value"])) : i("", !0),
                    g.repository ? (t(), p(te, {
                      key: 1,
                      label: "Repository:",
                      value: g.repository
                    }, null, 8, ["value"])) : i("", !0),
                    c(te, {
                      label: "Required by:",
                      value: Z(g)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    g.download_url ? (t(), p(U, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (b) => M(g.name)
                    }, {
                      default: a(() => [..._[10] || (_[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    g.repository ? (t(), p(U, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (b) => G(g.repository)
                    }, {
                      default: a(() => [..._[11] || (_[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            !k.value.length && !R.value.length ? (t(), p(Ce, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      c(Xe, {
        show: x.value,
        title: "About Git-Tracked Nodes",
        onClose: _[3] || (_[3] = (g) => x.value = !1)
      }, {
        content: a(() => [..._[12] || (_[12] = [
          o("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Installed:"),
            f(" Nodes currently available in this environment"),
            o("br"),
            o("strong", null, "Missing:"),
            f(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          c(U, {
            variant: "primary",
            onClick: _[2] || (_[2] = (g) => x.value = !1)
          }, {
            default: a(() => [..._[13] || (_[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zs = /* @__PURE__ */ O(Ys, [["__scopeId", "data-v-c480e2c1"]]), Xs = { class: "setting-info" }, Qs = { class: "setting-label" }, en = {
  key: 0,
  class: "required-marker"
}, tn = {
  key: 0,
  class: "setting-description"
}, on = { class: "setting-control" }, an = /* @__PURE__ */ T({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: F(["setting-row", { disabled: e.disabled }])
    }, [
      o("div", Xs, [
        o("div", Qs, [
          f(u(e.label) + " ", 1),
          e.required ? (t(), n("span", en, "*")) : i("", !0)
        ]),
        e.description ? (t(), n("div", tn, u(e.description), 1)) : i("", !0)
      ]),
      o("div", on, [
        K(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), oe = /* @__PURE__ */ O(an, [["__scopeId", "data-v-cb5d236c"]]), sn = { class: "toggle" }, nn = ["checked", "disabled"], ln = /* @__PURE__ */ T({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (l, s) => (t(), n("label", sn, [
      o("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, nn),
      s[1] || (s[1] = o("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), fe = /* @__PURE__ */ O(ln, [["__scopeId", "data-v-71c0f550"]]), rn = { class: "settings-section" }, cn = { class: "settings-section" }, dn = { class: "settings-section" }, un = { class: "settings-section" }, mn = { class: "settings-section" }, gn = { class: "settings-section" }, fn = /* @__PURE__ */ T({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const l = E(!1), s = E(null), r = E(null), d = E({
      git: {
        userName: "",
        userEmail: "",
        defaultBranch: "main",
        autoCommit: !1
      },
      paths: {
        workspaceRoot: "/path/to/workspace",
        environmentsDir: "environments",
        modelsDir: "models"
      },
      modelIndex: {
        autoIndex: !0,
        indexOnStartup: !0,
        scanInterval: 30,
        deepScan: !1
      },
      environment: {
        defaultComfyUIVersion: "latest",
        pythonVersion: "3.11",
        autoCreateVenv: !0,
        autoInstallDeps: !0
      },
      ui: {
        theme: "comfy",
        compactMode: !1,
        showFileExtensions: !0,
        confirmDestructive: !0
      },
      advanced: {
        debugMode: !1,
        maxHistoryItems: 50,
        cacheDuration: 300
      }
    }), C = E(null), y = A(() => C.value ? JSON.stringify(d.value) !== JSON.stringify(C.value) : !1), w = [
      { label: "15 minutes", value: 15 },
      { label: "30 minutes", value: 30 },
      { label: "1 hour", value: 60 },
      { label: "2 hours", value: 120 },
      { label: "Manual only", value: 0 }
    ], m = [
      { label: "Latest", value: "latest" },
      { label: "Stable", value: "stable" },
      { label: "v0.2.0", value: "v0.2.0" },
      { label: "v0.1.0", value: "v0.1.0" }
    ], x = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], N = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], k = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], R = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function H() {
      l.value = !0, s.value = null;
      try {
        await new Promise((M) => setTimeout(M, 500)), C.value = JSON.parse(JSON.stringify(d.value));
      } catch (M) {
        s.value = M instanceof Error ? M.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function Z() {
      r.value = null;
      try {
        await new Promise((M) => setTimeout(M, 300)), C.value = JSON.parse(JSON.stringify(d.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (M) {
        r.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to save settings"
        };
      }
    }
    function G() {
      C.value && (d.value = JSON.parse(JSON.stringify(C.value)), r.value = null);
    }
    return ue(H), (M, $) => (t(), p(be, null, {
      header: a(() => [
        c(we, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            c(U, {
              variant: "primary",
              size: "sm",
              disabled: !y.value,
              onClick: Z
            }, {
              default: a(() => [...$[19] || ($[19] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            y.value ? (t(), p(U, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: G
            }, {
              default: a(() => [...$[20] || ($[20] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : i("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        l.value ? (t(), p(Ne, {
          key: 0,
          message: "Loading workspace settings..."
        })) : s.value ? (t(), p(Ve, {
          key: 1,
          message: s.value,
          retry: !0,
          onRetry: H
        }, null, 8, ["message"])) : (t(), n(P, { key: 2 }, [
          c(se, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              o("div", rn, [
                c(oe, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    c(Ue, {
                      modelValue: d.value.git.userName,
                      "onUpdate:modelValue": $[0] || ($[0] = (L) => d.value.git.userName = L),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    c(Ue, {
                      modelValue: d.value.git.userEmail,
                      "onUpdate:modelValue": $[1] || ($[1] = (L) => d.value.git.userEmail = L),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    c(Ue, {
                      modelValue: d.value.git.defaultBranch,
                      "onUpdate:modelValue": $[2] || ($[2] = (L) => d.value.git.defaultBranch = L),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.git.autoCommit,
                      "onUpdate:modelValue": $[3] || ($[3] = (L) => d.value.git.autoCommit = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          c(se, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              o("div", cn, [
                c(oe, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    c(Re, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(u(d.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    c(Re, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(u(d.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    c(Re, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(u(d.value.paths.modelsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          c(se, { title: "MODEL INDEX" }, {
            default: a(() => [
              o("div", dn, [
                c(oe, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": $[4] || ($[4] = (L) => d.value.modelIndex.autoIndex = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !d.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": $[5] || ($[5] = (L) => d.value.modelIndex.indexOnStartup = L),
                      disabled: !d.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                c(oe, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !d.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    c($e, {
                      modelValue: d.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": $[6] || ($[6] = (L) => d.value.modelIndex.scanInterval = L),
                      options: w,
                      disabled: !d.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                c(oe, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.modelIndex.deepScan,
                      "onUpdate:modelValue": $[7] || ($[7] = (L) => d.value.modelIndex.deepScan = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          c(se, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              o("div", un, [
                c(oe, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    c($e, {
                      modelValue: d.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": $[8] || ($[8] = (L) => d.value.environment.defaultComfyUIVersion = L),
                      options: m,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    c($e, {
                      modelValue: d.value.environment.pythonVersion,
                      "onUpdate:modelValue": $[9] || ($[9] = (L) => d.value.environment.pythonVersion = L),
                      options: x,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": $[10] || ($[10] = (L) => d.value.environment.autoCreateVenv = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": $[11] || ($[11] = (L) => d.value.environment.autoInstallDeps = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          c(se, { title: "UI PREFERENCES" }, {
            default: a(() => [
              o("div", mn, [
                c(oe, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    c($e, {
                      modelValue: d.value.ui.theme,
                      "onUpdate:modelValue": $[12] || ($[12] = (L) => d.value.ui.theme = L),
                      options: N,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.ui.compactMode,
                      "onUpdate:modelValue": $[13] || ($[13] = (L) => d.value.ui.compactMode = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.ui.showFileExtensions,
                      "onUpdate:modelValue": $[14] || ($[14] = (L) => d.value.ui.showFileExtensions = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.ui.confirmDestructive,
                      "onUpdate:modelValue": $[15] || ($[15] = (L) => d.value.ui.confirmDestructive = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          c(se, { title: "ADVANCED" }, {
            default: a(() => [
              o("div", gn, [
                c(oe, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    c(fe, {
                      modelValue: d.value.advanced.debugMode,
                      "onUpdate:modelValue": $[16] || ($[16] = (L) => d.value.advanced.debugMode = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    c($e, {
                      modelValue: d.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": $[17] || ($[17] = (L) => d.value.advanced.maxHistoryItems = L),
                      options: k,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(oe, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    c($e, {
                      modelValue: d.value.advanced.cacheDuration,
                      "onUpdate:modelValue": $[18] || ($[18] = (L) => d.value.advanced.cacheDuration = L),
                      options: R,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          r.value ? (t(), p(Fe, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: a(() => [
              o("span", {
                style: Ze({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, u(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : i("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), vn = /* @__PURE__ */ O(fn, [["__scopeId", "data-v-74f65bd5"]]), hn = { class: "header-info" }, pn = { class: "commit-hash" }, yn = {
  key: 0,
  class: "commit-refs"
}, bn = { class: "commit-message" }, wn = { class: "commit-date" }, kn = {
  key: 0,
  class: "loading"
}, _n = {
  key: 1,
  class: "changes-section"
}, xn = { class: "stats-row" }, $n = { class: "stat" }, Cn = { class: "stat insertions" }, In = { class: "stat deletions" }, Sn = {
  key: 0,
  class: "change-group"
}, En = {
  key: 1,
  class: "change-group"
}, zn = {
  key: 0,
  class: "version"
}, Ln = {
  key: 2,
  class: "change-group"
}, Mn = { class: "change-item" }, Nn = /* @__PURE__ */ T({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: s } = he(), r = E(null), d = E(!0), C = A(() => {
      if (!r.value) return !1;
      const w = r.value.changes.workflows;
      return w.added.length > 0 || w.modified.length > 0 || w.deleted.length > 0;
    }), y = A(() => {
      if (!r.value) return !1;
      const w = r.value.changes.nodes;
      return w.added.length > 0 || w.removed.length > 0;
    });
    return ue(async () => {
      try {
        r.value = await s(l.commit.hash);
      } finally {
        d.value = !1;
      }
    }), (w, m) => (t(), p(Ae, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (x) => w.$emit("close"))
    }, {
      header: a(() => {
        var x, N, k, R;
        return [
          o("div", hn, [
            m[4] || (m[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", pn, u(((x = r.value) == null ? void 0 : x.short_hash) || e.commit.short_hash || ((N = e.commit.hash) == null ? void 0 : N.slice(0, 7))), 1),
            (R = (k = r.value) == null ? void 0 : k.refs) != null && R.length ? (t(), n("span", yn, [
              (t(!0), n(P, null, J(r.value.refs, (H) => (t(), n("span", {
                key: H,
                class: "ref-badge"
              }, u(H), 1))), 128))
            ])) : i("", !0)
          ]),
          c(re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (H) => w.$emit("close"))
          }, {
            default: a(() => [...m[5] || (m[5] = [
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
      body: a(() => {
        var x, N;
        return [
          o("div", bn, u(((x = r.value) == null ? void 0 : x.message) || e.commit.message), 1),
          o("div", wn, u(((N = r.value) == null ? void 0 : N.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          d.value ? (t(), n("div", kn, "Loading details...")) : r.value ? (t(), n("div", _n, [
            o("div", xn, [
              o("span", $n, u(r.value.stats.files_changed) + " files", 1),
              o("span", Cn, "+" + u(r.value.stats.insertions), 1),
              o("span", In, "-" + u(r.value.stats.deletions), 1)
            ]),
            C.value ? (t(), n("div", Sn, [
              c(ye, { variant: "section" }, {
                default: a(() => [...m[6] || (m[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(P, null, J(r.value.changes.workflows.added, (k) => (t(), n("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                m[7] || (m[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, u(k), 1)
              ]))), 128)),
              (t(!0), n(P, null, J(r.value.changes.workflows.modified, (k) => (t(), n("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, u(k), 1)
              ]))), 128)),
              (t(!0), n(P, null, J(r.value.changes.workflows.deleted, (k) => (t(), n("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, u(k), 1)
              ]))), 128))
            ])) : i("", !0),
            y.value ? (t(), n("div", En, [
              c(ye, { variant: "section" }, {
                default: a(() => [...m[10] || (m[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(P, null, J(r.value.changes.nodes.added, (k) => (t(), n("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, u(k.name), 1),
                k.version ? (t(), n("span", zn, "(" + u(k.version) + ")", 1)) : i("", !0)
              ]))), 128)),
              (t(!0), n(P, null, J(r.value.changes.nodes.removed, (k) => (t(), n("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, u(k.name), 1)
              ]))), 128))
            ])) : i("", !0),
            r.value.changes.models.resolved > 0 ? (t(), n("div", Ln, [
              c(ye, { variant: "section" }, {
                default: a(() => [...m[13] || (m[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", Mn, [
                m[14] || (m[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, u(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : i("", !0)
          ])) : i("", !0)
        ];
      }),
      footer: a(() => [
        c(re, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (x) => w.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...m[15] || (m[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        c(re, {
          variant: "primary",
          onClick: m[2] || (m[2] = (x) => w.$emit("checkout", e.commit))
        }, {
          default: a(() => [...m[16] || (m[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Vn = /* @__PURE__ */ O(Nn, [["__scopeId", "data-v-d256ff6d"]]), Dn = { class: "dialog-message" }, Bn = {
  key: 0,
  class: "dialog-details"
}, Tn = {
  key: 1,
  class: "dialog-warning"
}, On = /* @__PURE__ */ T({
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
    return (l, s) => (t(), p(Ae, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => l.$emit("cancel"))
    }, {
      body: a(() => [
        o("p", Dn, u(e.message), 1),
        e.details && e.details.length ? (t(), n("div", Bn, [
          (t(!0), n(P, null, J(e.details, (r, d) => (t(), n("div", {
            key: d,
            class: "detail-item"
          }, " • " + u(r), 1))), 128))
        ])) : i("", !0),
        e.warning ? (t(), n("p", Tn, [
          s[4] || (s[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + u(e.warning), 1)
        ])) : i("", !0)
      ]),
      footer: a(() => [
        c(re, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => l.$emit("cancel"))
        }, {
          default: a(() => [
            f(u(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), p(re, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => l.$emit("secondary"))
        }, {
          default: a(() => [
            f(u(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : i("", !0),
        c(re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => l.$emit("confirm"))
        }, {
          default: a(() => [
            f(u(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Un = /* @__PURE__ */ O(On, [["__scopeId", "data-v-3670b9f5"]]), Rn = { class: "comfygit-panel" }, Wn = { class: "panel-header" }, An = { class: "header-left" }, Pn = {
  key: 0,
  class: "header-info"
}, Fn = { class: "header-actions" }, Hn = { class: "env-switcher" }, jn = {
  key: 0,
  class: "header-info"
}, Gn = { class: "branch-name" }, Kn = { class: "panel-main" }, qn = { class: "sidebar" }, Jn = { class: "sidebar-section" }, Yn = { class: "sidebar-section" }, Zn = { class: "sidebar-section" }, Xn = { class: "content-area" }, Qn = {
  key: 0,
  class: "error-message"
}, el = {
  key: 1,
  class: "loading"
}, tl = {
  key: 6,
  class: "view-placeholder"
}, ol = {
  key: 7,
  class: "view-placeholder"
}, al = {
  key: 10,
  class: "view-placeholder"
}, sl = {
  key: 11,
  class: "view-placeholder"
}, nl = {
  key: 12,
  class: "view-placeholder"
}, ll = {
  key: 13,
  class: "view-placeholder"
}, rl = { class: "dialog-content env-selector-dialog" }, il = { class: "dialog-header" }, cl = { class: "dialog-body" }, dl = { class: "env-list" }, ul = { class: "env-info" }, ml = { class: "env-name-row" }, gl = { class: "env-indicator" }, fl = { class: "env-name" }, vl = {
  key: 0,
  class: "env-branch"
}, hl = {
  key: 1,
  class: "current-label"
}, pl = { class: "env-stats" }, yl = ["onClick"], bl = { class: "toast-container" }, wl = { class: "toast-icon" }, kl = { class: "toast-message" }, _l = /* @__PURE__ */ T({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const s = l, {
      getStatus: r,
      getHistory: d,
      exportEnv: C,
      getBranches: y,
      checkout: w,
      createBranch: m,
      switchBranch: x,
      getEnvironments: N
    } = he(), k = E(null), R = E([]), H = E([]), Z = E([]), G = A(() => Z.value.find((D) => D.is_current)), M = E(!1), $ = E(null), L = E(null), Y = E(!1), S = E("status"), _ = E("this-env");
    function g(D, v) {
      S.value = D, _.value = v;
    }
    function b(D) {
      const ae = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[D];
      ae && g(ae.view, ae.section);
    }
    function h() {
      g("branches", "this-env");
    }
    const I = E(null), z = E([]);
    let ie = 0;
    function W(D, v = "info", ae = 3e3) {
      const ne = ++ie;
      return z.value.push({ id: ne, message: D, type: v }), ae > 0 && setTimeout(() => {
        z.value = z.value.filter((_e) => _e.id !== ne);
      }, ae), ne;
    }
    function V(D) {
      z.value = z.value.filter((v) => v.id !== D);
    }
    function q(D) {
      switch (D) {
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
    const ge = A(() => {
      if (!k.value) return "neutral";
      const D = k.value.workflows, v = D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || k.value.has_changes;
      return k.value.comparison.is_synced ? v ? "warning" : "success" : "error";
    });
    A(() => k.value ? ge.value === "success" ? "All synced" : ge.value === "warning" ? "Uncommitted changes" : ge.value === "error" ? "Not synced" : "" : "");
    async function ke() {
      M.value = !0, $.value = null;
      try {
        const [D, v, ae, ne] = await Promise.all([
          r(),
          d(),
          y(),
          N()
        ]);
        k.value = D, R.value = v.commits, H.value = ae.branches, Z.value = ne, s("statusUpdate", D);
      } catch (D) {
        $.value = D instanceof Error ? D.message : "Failed to load status", k.value = null, R.value = [], H.value = [];
      } finally {
        M.value = !1;
      }
    }
    function He(D) {
      L.value = D;
    }
    async function De(D) {
      var ae;
      L.value = null;
      const v = k.value && (k.value.workflows.new.length > 0 || k.value.workflows.modified.length > 0 || k.value.workflows.deleted.length > 0 || k.value.has_changes);
      I.value = {
        title: v ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: v ? "You have uncommitted changes that will be lost." : `Checkout commit ${D.short_hash || ((ae = D.hash) == null ? void 0 : ae.slice(0, 7))}?`,
        details: v ? Ee() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: v ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: v,
        onConfirm: async () => {
          var j;
          I.value = null;
          const ne = W(`Checking out ${D.short_hash || ((j = D.hash) == null ? void 0 : j.slice(0, 7))}...`, "info", 0), _e = await w(D.hash, v);
          V(ne), _e.status === "success" ? W("Restarting ComfyUI...", "success") : W(_e.message || "Checkout failed", "error");
        }
      };
    }
    async function B(D) {
      const v = k.value && (k.value.workflows.new.length > 0 || k.value.workflows.modified.length > 0 || k.value.workflows.deleted.length > 0 || k.value.has_changes);
      I.value = {
        title: v ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: v ? "You have uncommitted changes." : `Switch to branch "${D}"?`,
        details: v ? Ee() : void 0,
        warning: v ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: v ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          I.value = null;
          const ae = W(`Switching to ${D}...`, "info", 0), ne = await x(D, v);
          V(ae), ne.status === "success" ? W("Restarting ComfyUI...", "success") : W(ne.message || "Branch switch failed", "error");
        }
      };
    }
    async function X(D) {
      const v = W(`Creating branch ${D}...`, "info", 0), ae = await m(D);
      V(v), ae.status === "success" ? (W(`Branch "${D}" created`, "success"), await ke()) : W(ae.message || "Failed to create branch", "error");
    }
    async function le(D) {
      L.value = null;
      const v = prompt("Enter branch name:");
      if (v) {
        const ae = W(`Creating branch ${v}...`, "info", 0), ne = await m(v, D.hash);
        V(ae), ne.status === "success" ? (W(`Branch "${v}" created from ${D.short_hash}`, "success"), await ke()) : W(ne.message || "Failed to create branch", "error");
      }
    }
    async function Be(D) {
      Y.value = !1, W("Environment switching not yet implemented", "warning");
    }
    function Ee() {
      if (!k.value) return [];
      const D = [], v = k.value.workflows;
      return v.new.length && D.push(`${v.new.length} new workflow(s)`), v.modified.length && D.push(`${v.modified.length} modified workflow(s)`), v.deleted.length && D.push(`${v.deleted.length} deleted workflow(s)`), D;
    }
    async function dt() {
      const D = W("Exporting environment...", "info", 0);
      try {
        const v = await C();
        V(D), v.status === "success" ? (W("Export complete", "success"), alert(`Export successful!

Saved to: ${v.path}

Models without sources: ${v.models_without_sources}`)) : (W("Export failed", "error"), alert(`Export failed: ${v.message}`));
      } catch (v) {
        V(D), W("Export error", "error"), alert(`Export error: ${v instanceof Error ? v.message : "Unknown error"}`);
      }
    }
    return ue(ke), (D, v) => {
      var ae, ne, _e;
      return t(), n("div", Rn, [
        o("div", Wn, [
          o("div", An, [
            v[20] || (v[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            k.value ? (t(), n("div", Pn)) : i("", !0)
          ]),
          o("div", Fn, [
            o("button", {
              class: F(["icon-btn", { spinning: M.value }]),
              onClick: ke,
              title: "Refresh"
            }, [...v[21] || (v[21] = [
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
              onClick: v[0] || (v[0] = (j) => s("close")),
              title: "Close"
            }, [...v[22] || (v[22] = [
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
        o("div", Hn, [
          v[24] || (v[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: v[1] || (v[1] = (j) => Y.value = !0)
          }, [
            k.value ? (t(), n("div", jn, [
              o("span", null, u(((ae = G.value) == null ? void 0 : ae.name) || ((ne = k.value) == null ? void 0 : ne.environment) || "Loading..."), 1),
              o("span", Gn, "(" + u(k.value.branch || "detached") + ")", 1)
            ])) : i("", !0),
            v[23] || (v[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", Kn, [
          o("div", qn, [
            o("div", Jn, [
              v[25] || (v[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "status" && _.value === "this-env" }]),
                onClick: v[2] || (v[2] = (j) => g("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "workflows" }]),
                onClick: v[3] || (v[3] = (j) => g("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "models-env" }]),
                onClick: v[4] || (v[4] = (j) => g("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "branches" }]),
                onClick: v[5] || (v[5] = (j) => g("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "history" }]),
                onClick: v[6] || (v[6] = (j) => g("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "nodes" }]),
                onClick: v[7] || (v[7] = (j) => g("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "debug-env" }]),
                onClick: v[8] || (v[8] = (j) => g("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            v[28] || (v[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", Yn, [
              v[26] || (v[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "environments" }]),
                onClick: v[9] || (v[9] = (j) => g("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "model-index" }]),
                onClick: v[10] || (v[10] = (j) => g("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "settings" }]),
                onClick: v[11] || (v[11] = (j) => g("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "debug-workspace" }]),
                onClick: v[12] || (v[12] = (j) => g("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            v[29] || (v[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", Zn, [
              v[27] || (v[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "export" }]),
                onClick: v[13] || (v[13] = (j) => g("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "import" }]),
                onClick: v[14] || (v[14] = (j) => g("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "remotes" }]),
                onClick: v[15] || (v[15] = (j) => g("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", Xn, [
            $.value ? (t(), n("div", Qn, u($.value), 1)) : !k.value && S.value === "status" ? (t(), n("div", el, " Loading status... ")) : (t(), n(P, { key: 2 }, [
              S.value === "status" ? (t(), p(wo, {
                key: 0,
                status: k.value,
                onSwitchBranch: h
              }, null, 8, ["status"])) : S.value === "workflows" ? (t(), p(Ms, {
                key: 1,
                onRefresh: ke
              })) : S.value === "models-env" ? (t(), p(Hs, {
                key: 2,
                onNavigate: b
              })) : S.value === "branches" ? (t(), p(Bo, {
                key: 3,
                branches: H.value,
                current: ((_e = k.value) == null ? void 0 : _e.branch) || null,
                onSwitch: B,
                onCreate: X
              }, null, 8, ["branches", "current"])) : S.value === "history" ? (t(), p(Ko, {
                key: 4,
                commits: R.value,
                onSelect: He,
                onCheckout: De
              }, null, 8, ["commits"])) : S.value === "nodes" ? (t(), p(Zs, { key: 5 })) : S.value === "debug-env" ? (t(), n("div", tl, [...v[30] || (v[30] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : S.value === "environments" ? (t(), n("div", ol, [...v[31] || (v[31] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : S.value === "model-index" ? (t(), p(Gs, { key: 8 })) : S.value === "settings" ? (t(), p(vn, { key: 9 })) : S.value === "debug-workspace" ? (t(), n("div", al, [...v[32] || (v[32] = [
                o("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                o("p", null, "Workspace logs view coming soon...", -1)
              ])])) : S.value === "export" ? (t(), n("div", sl, [
                v[34] || (v[34] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: dt
                }, [...v[33] || (v[33] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  f(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : S.value === "import" ? (t(), n("div", nl, [...v[35] || (v[35] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : S.value === "remotes" ? (t(), n("div", ll, [...v[36] || (v[36] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : i("", !0)
            ], 64))
          ])
        ]),
        L.value ? (t(), p(Vn, {
          key: 0,
          commit: L.value,
          onClose: v[16] || (v[16] = (j) => L.value = null),
          onCheckout: De,
          onCreateBranch: le
        }, null, 8, ["commit"])) : i("", !0),
        I.value ? (t(), p(Un, {
          key: 1,
          title: I.value.title,
          message: I.value.message,
          details: I.value.details,
          warning: I.value.warning,
          confirmLabel: I.value.confirmLabel,
          cancelLabel: I.value.cancelLabel,
          secondaryLabel: I.value.secondaryLabel,
          secondaryAction: I.value.secondaryAction,
          destructive: I.value.destructive,
          onConfirm: I.value.onConfirm,
          onCancel: v[17] || (v[17] = (j) => I.value = null),
          onSecondary: I.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : i("", !0),
        Y.value ? (t(), n("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: v[19] || (v[19] = Se((j) => Y.value = !1, ["self"]))
        }, [
          o("div", rl, [
            o("div", il, [
              v[38] || (v[38] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: v[18] || (v[18] = (j) => Y.value = !1)
              }, [...v[37] || (v[37] = [
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
            o("div", cl, [
              v[39] || (v[39] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", dl, [
                (t(!0), n(P, null, J(Z.value, (j) => (t(), n("div", {
                  key: j.name,
                  class: F(["env-item", { current: j.is_current }])
                }, [
                  o("div", ul, [
                    o("div", ml, [
                      o("span", gl, u(j.is_current ? "●" : "○"), 1),
                      o("span", fl, u(j.name), 1),
                      j.current_branch ? (t(), n("span", vl, "(" + u(j.current_branch) + ")", 1)) : i("", !0),
                      j.is_current ? (t(), n("span", hl, "CURRENT")) : i("", !0)
                    ]),
                    o("div", pl, u(j.workflow_count) + " workflows • " + u(j.node_count) + " nodes ", 1)
                  ]),
                  j.is_current ? i("", !0) : (t(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (er) => Be(j.name)
                  }, " SWITCH ", 8, yl))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : i("", !0),
        o("div", bl, [
          c(mt, { name: "toast" }, {
            default: a(() => [
              (t(!0), n(P, null, J(z.value, (j) => (t(), n("div", {
                key: j.id,
                class: F(["toast", j.type])
              }, [
                o("span", wl, u(q(j.type)), 1),
                o("span", kl, u(j.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), xl = /* @__PURE__ */ O(_l, [["__scopeId", "data-v-48eb58ed"]]), $l = { class: "base-textarea-wrapper" }, Cl = ["value", "rows", "placeholder", "disabled", "maxlength"], Il = {
  key: 0,
  class: "base-textarea-count"
}, Sl = /* @__PURE__ */ T({
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
    return (l, s) => (t(), n("div", $l, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = Me(Se((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Me(Se((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Cl),
      e.showCharCount && e.maxLength ? (t(), n("div", Il, u(e.modelValue.length) + " / " + u(e.maxLength), 1)) : i("", !0)
    ]));
  }
}), El = /* @__PURE__ */ O(Sl, [["__scopeId", "data-v-5516e6fc"]]), zl = { class: "commit-popover" }, Ll = { class: "popover-header" }, Ml = { class: "popover-body" }, Nl = {
  key: 0,
  class: "changes-summary"
}, Vl = {
  key: 0,
  class: "change-item"
}, Dl = {
  key: 1,
  class: "change-item"
}, Bl = {
  key: 2,
  class: "change-item"
}, Tl = {
  key: 3,
  class: "change-item"
}, Ol = {
  key: 4,
  class: "change-item"
}, Ul = {
  key: 1,
  class: "no-changes"
}, Rl = {
  key: 2,
  class: "loading"
}, Wl = { class: "message-section" }, Al = { class: "popover-footer" }, Pl = /* @__PURE__ */ T({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const s = e, r = l, { commit: d } = he(), C = E(""), y = E(!1), w = E(null), m = A(() => {
      if (!s.status) return !1;
      const N = s.status.workflows;
      return N.new.length > 0 || N.modified.length > 0 || N.deleted.length > 0 || s.status.has_changes;
    });
    async function x() {
      var N, k, R;
      if (!(!m.value || !C.value.trim() || y.value)) {
        y.value = !0, w.value = null;
        try {
          const H = await d(C.value.trim());
          H.status === "success" ? (w.value = {
            type: "success",
            message: `Committed: ${((N = H.summary) == null ? void 0 : N.new) || 0} new, ${((k = H.summary) == null ? void 0 : k.modified) || 0} modified, ${((R = H.summary) == null ? void 0 : R.deleted) || 0} deleted`
          }, C.value = "", setTimeout(() => r("committed"), 1e3)) : H.status === "no_changes" ? w.value = { type: "error", message: "No changes to commit" } : w.value = { type: "error", message: H.message || "Commit failed" };
        } catch (H) {
          w.value = { type: "error", message: H instanceof Error ? H.message : "Commit failed" };
        } finally {
          y.value = !1;
        }
      }
    }
    return (N, k) => (t(), n("div", zl, [
      o("div", Ll, [
        k[4] || (k[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: k[0] || (k[0] = (R) => r("close"))
        }, [...k[3] || (k[3] = [
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
      o("div", Ml, [
        e.status && m.value ? (t(), n("div", Nl, [
          e.status.workflows.new.length ? (t(), n("div", Vl, [
            k[5] || (k[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, u(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : i("", !0),
          e.status.workflows.modified.length ? (t(), n("div", Dl, [
            k[6] || (k[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, u(e.status.workflows.modified.length) + " modified", 1)
          ])) : i("", !0),
          e.status.workflows.deleted.length ? (t(), n("div", Bl, [
            k[7] || (k[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, u(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : i("", !0),
          e.status.git_changes.nodes_added.length ? (t(), n("div", Tl, [
            k[8] || (k[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, u(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : i("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), n("div", Ol, [
            k[9] || (k[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, u(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : i("", !0)
        ])) : e.status ? (t(), n("div", Ul, " No changes to commit ")) : (t(), n("div", Rl, " Loading... ")),
        o("div", Wl, [
          c(El, {
            modelValue: C.value,
            "onUpdate:modelValue": k[1] || (k[1] = (R) => C.value = R),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || y.value,
            rows: 3,
            onCtrlEnter: x
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        w.value ? (t(), n("div", {
          key: 3,
          class: F(["result", w.value.type])
        }, u(w.value.message), 3)) : i("", !0)
      ]),
      o("div", Al, [
        c(re, {
          variant: "secondary",
          onClick: k[2] || (k[2] = (R) => r("close"))
        }, {
          default: a(() => [...k[10] || (k[10] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c(re, {
          variant: "primary",
          disabled: !m.value || !C.value.trim() || y.value,
          loading: y.value,
          onClick: x
        }, {
          default: a(() => [
            f(u(y.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Fl = /* @__PURE__ */ O(Pl, [["__scopeId", "data-v-4f587977"]]), Hl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', jl = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Gl = {
  comfy: Hl,
  phosphor: jl
}, Qe = "comfy", lt = "comfygit-theme";
let xe = null, rt = Qe;
function Kl() {
  try {
    const e = localStorage.getItem(lt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Qe;
}
function it(e = Qe) {
  xe && xe.remove(), xe = document.createElement("style"), xe.id = "comfygit-theme-styles", xe.setAttribute("data-theme", e), xe.textContent = Gl[e], document.head.appendChild(xe), document.body.setAttribute("data-comfygit-theme", e), rt = e;
  try {
    localStorage.setItem(lt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function ql() {
  return rt;
}
function Jl(e) {
  it(e);
}
const et = document.createElement("link");
et.rel = "stylesheet";
et.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(et);
const Yl = Kl();
it(Yl);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Jl(e);
  },
  getTheme: () => {
    const e = ql();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let me = null, ce = null, Le = null;
const Ie = E(null);
async function Je() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && (Ie.value = await l.json());
  } catch {
  }
}
function Zl() {
  if (!Ie.value) return !1;
  const e = Ie.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Ie.value.has_changes;
}
function Xl() {
  me && me.remove(), me = document.createElement("div"), me.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", me.appendChild(e), me.addEventListener("click", (r) => {
    r.target === me && Ke();
  });
  const l = (r) => {
    r.key === "Escape" && (Ke(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), at({
    render: () => st(xl, {
      onClose: Ke,
      onStatusUpdate: (r) => {
        Ie.value = r, We();
      }
    })
  }).mount(e), document.body.appendChild(me);
}
function Ke() {
  me && (me.remove(), me = null);
}
function Ql(e) {
  ze(), ce = document.createElement("div"), ce.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  ce.style.position = "fixed", ce.style.top = `${l.bottom + 8}px`, ce.style.right = `${window.innerWidth - l.right}px`, ce.style.zIndex = "10001";
  const s = (d) => {
    ce && !ce.contains(d.target) && d.target !== e && (ze(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (d) => {
    d.key === "Escape" && (ze(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Le = at({
    render: () => st(Fl, {
      status: Ie.value,
      onClose: ze,
      onCommitted: () => {
        ze(), Je().then(We);
      }
    })
  }), Le.mount(ce), document.body.appendChild(ce);
}
function ze() {
  Le && (Le.unmount(), Le = null), ce && (ce.remove(), ce = null);
}
let ve = null;
function We() {
  if (!ve) return;
  const e = ve.querySelector(".commit-indicator");
  e && (e.style.display = Zl() ? "block" : "none");
}
const ct = document.createElement("style");
ct.textContent = `
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
document.head.appendChild(ct);
je.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = Xl, ve = document.createElement("button"), ve.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ve.innerHTML = 'Commit <span class="commit-indicator"></span>', ve.title = "Quick Commit", ve.onclick = () => Ql(ve), e.appendChild(l), e.appendChild(ve), (r = (s = je.menu) == null ? void 0 : s.settingsGroup) != null && r.element && (je.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Je(), We(), setInterval(async () => {
      await Je(), We();
    }, 3e4);
  }
});
