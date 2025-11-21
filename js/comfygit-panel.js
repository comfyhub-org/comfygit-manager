import { app as je } from "../../scripts/app.js";
import { defineComponent as D, createElementBlock as n, openBlock as t, createCommentVNode as d, createElementVNode as o, renderSlot as K, createBlock as p, resolveDynamicComponent as Ze, normalizeClass as F, withCtx as a, toDisplayString as c, createVNode as i, createTextVNode as v, computed as B, Fragment as A, renderList as q, ref as E, onMounted as ue, withKeys as De, withModifiers as Se, onUnmounted as ut, Teleport as ot, normalizeStyle as Xe, TransitionGroup as mt, createApp as at, h as st } from "vue";
const gt = { class: "panel-layout" }, vt = {
  key: 0,
  class: "panel-layout-header"
}, ft = {
  key: 1,
  class: "panel-layout-search"
}, ht = { class: "panel-layout-content" }, pt = {
  key: 2,
  class: "panel-layout-footer"
}, yt = /* @__PURE__ */ D({
  __name: "PanelLayout",
  setup(e) {
    return (l, s) => (t(), n("div", gt, [
      l.$slots.header ? (t(), n("div", vt, [
        K(l.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      l.$slots.search ? (t(), n("div", ft, [
        K(l.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      o("div", ht, [
        K(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), n("div", pt, [
        K(l.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), V = (e, l) => {
  const s = e.__vccOpts || e;
  for (const [r, u] of l)
    s[r] = u;
  return s;
}, ye = /* @__PURE__ */ V(yt, [["__scopeId", "data-v-21565df9"]]), bt = {
  key: 0,
  class: "panel-title-prefix"
}, wt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, kt = /* @__PURE__ */ D({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, s) => (t(), p(Ze(`h${e.level}`), {
      class: F(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (t(), n("span", bt, c(e.prefix), 1)) : (t(), n("span", wt)),
        K(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _t = /* @__PURE__ */ V(kt, [["__scopeId", "data-v-c3875efc"]]), xt = ["title"], $t = ["width", "height"], Ct = /* @__PURE__ */ D({
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
}), It = /* @__PURE__ */ V(Ct, [["__scopeId", "data-v-6fc7f16d"]]), St = { class: "header-left" }, Et = {
  key: 0,
  class: "header-actions"
}, Lt = /* @__PURE__ */ D({
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
        i(_t, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            v(c(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), p(It, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => l.$emit("info-click"))
        })) : d("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Et, [
        K(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), be = /* @__PURE__ */ V(Lt, [["__scopeId", "data-v-55a62cd6"]]), zt = {
  key: 0,
  class: "section-title-count"
}, Nt = {
  key: 1,
  class: "section-title-icon"
}, Mt = /* @__PURE__ */ D({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), p(Ze(`h${e.level}`), {
      class: F(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: a(() => [
        K(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", zt, "(" + c(e.count) + ")", 1)) : d("", !0),
        e.clickable ? (t(), n("span", Nt, c(e.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Je = /* @__PURE__ */ V(Mt, [["__scopeId", "data-v-559361eb"]]), Dt = { class: "status-grid" }, Vt = { class: "status-grid__column" }, Bt = { class: "status-grid__title" }, Ot = { class: "status-grid__column status-grid__column--right" }, Ut = { class: "status-grid__title" }, Tt = /* @__PURE__ */ D({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, s) => (t(), n("div", Dt, [
      o("div", Vt, [
        o("h4", Bt, c(e.leftTitle), 1),
        K(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Ot, [
        o("h4", Ut, c(e.rightTitle), 1),
        K(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Rt = /* @__PURE__ */ V(Tt, [["__scopeId", "data-v-fe556068"]]), Wt = {
  key: 0,
  class: "status-item__icon"
}, At = {
  key: 1,
  class: "status-item__count"
}, Pt = { class: "status-item__label" }, Ft = /* @__PURE__ */ D({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, s = B(() => `status-item--${l.variant}`);
    return (r, u) => (t(), n("div", {
      class: F(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), n("span", Wt, c(e.icon), 1)) : d("", !0),
      e.count !== void 0 ? (t(), n("span", At, c(e.count), 1)) : d("", !0),
      o("span", Pt, c(e.label), 1)
    ], 2));
  }
}), we = /* @__PURE__ */ V(Ft, [["__scopeId", "data-v-6f929183"]]), Gt = { class: "issue-card__header" }, Ht = { class: "issue-card__icon" }, jt = { class: "issue-card__title" }, Kt = {
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
}, Zt = /* @__PURE__ */ D({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, s = B(() => `issue-card--${l.severity}`);
    return (r, u) => (t(), n("div", {
      class: F(["issue-card", s.value])
    }, [
      o("div", Gt, [
        o("span", Ht, c(e.icon), 1),
        o("h4", jt, c(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), n("div", Kt, [
        e.description ? (t(), n("p", qt, c(e.description), 1)) : d("", !0),
        K(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      e.items && e.items.length ? (t(), n("div", Jt, [
        (t(!0), n(A, null, q(e.items, (C, f) => (t(), n("div", {
          key: f,
          class: "issue-card__item"
        }, [
          u[0] || (u[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, c(C), 1)
        ]))), 128))
      ])) : d("", !0),
      r.$slots.actions ? (t(), n("div", Yt, [
        K(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ V(Zt, [["__scopeId", "data-v-df6aa348"]]), Xt = ["type", "disabled"], Qt = {
  key: 0,
  class: "spinner"
}, eo = /* @__PURE__ */ D({
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
      e.loading ? (t(), n("span", Qt)) : d("", !0),
      e.loading ? d("", !0) : K(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Xt));
  }
}), W = /* @__PURE__ */ V(eo, [["__scopeId", "data-v-772abe47"]]), to = { class: "empty-state" }, oo = {
  key: 0,
  class: "empty-icon"
}, ao = { class: "empty-message" }, so = /* @__PURE__ */ D({
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
      e.icon ? (t(), n("div", oo, c(e.icon), 1)) : d("", !0),
      o("p", ao, c(e.message), 1),
      e.actionLabel ? (t(), p(W, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("action"))
      }, {
        default: a(() => [
          v(c(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), pe = /* @__PURE__ */ V(so, [["__scopeId", "data-v-4466284f"]]), no = { class: "branch-indicator" }, lo = { class: "branch-indicator__info" }, ro = { class: "branch-indicator__label" }, io = { class: "branch-indicator__name" }, co = {
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
}, vo = {
  key: 1,
  class: "branch-indicator__actions"
}, fo = /* @__PURE__ */ D({
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
        o("span", ro, c(e.label), 1),
        o("span", io, c(e.branchName), 1),
        e.remote ? (t(), n("span", co, "@" + c(e.remote), 1)) : d("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), n("div", uo, [
        e.commitsAhead ? (t(), n("span", mo, " ↑ " + c(e.commitsAhead) + " ahead ", 1)) : d("", !0),
        e.commitsBehind ? (t(), n("span", go, " ↓ " + c(e.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      l.$slots.actions ? (t(), n("div", vo, [
        K(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ho = /* @__PURE__ */ V(fo, [["__scopeId", "data-v-cb8dd50e"]]), po = { style: { "margin-top": "var(--cg-space-1)" } }, yo = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, bo = /* @__PURE__ */ D({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const s = e, r = B(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), u = B(() => {
      const m = s.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), C = B(() => {
      const m = s.status.git_changes, _ = s.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && _.new.length === 0 && _.modified.length === 0 && _.deleted.length === 0;
    }), f = B(() => s.status.missing_models_count > 0 || u.value || !s.status.comparison.is_synced), w = B(() => {
      const m = [];
      return s.status.workflows.new.length > 0 && m.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && m.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && m.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && m.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && m.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${m.length > 0 ? m.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (m, _) => (t(), p(ye, null, {
      header: a(() => [
        i(be, { title: "STATUS" })
      ]),
      content: a(() => [
        i(Je, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [..._[7] || (_[7] = [
            v(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        i(Rt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (t(), p(we, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.modified.length ? (t(), p(we, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.deleted.length ? (t(), p(we, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : d("", !0),
            i(we, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (t(), p(we, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : d("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), p(we, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : d("", !0),
            C.value ? (t(), p(we, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : d("", !0),
            u.value ? d("", !0) : (t(), p(we, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", po, [
          i(ho, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              i(W, {
                variant: "secondary",
                size: "sm",
                onClick: _[0] || (_[0] = (M) => m.$emit("switch-branch"))
              }, {
                default: a(() => [..._[8] || (_[8] = [
                  v(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        f.value ? (t(), n("div", yo, [
          i(Je, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [..._[9] || (_[9] = [
              v(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), p(Ke, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: a(() => [
              i(W, {
                variant: "secondary",
                size: "sm",
                onClick: _[1] || (_[1] = (M) => m.$emit("view-workflows"))
              }, {
                default: a(() => [..._[10] || (_[10] = [
                  v(" View Details ", -1)
                ])]),
                _: 1
              }),
              i(W, {
                variant: "primary",
                size: "sm",
                onClick: _[2] || (_[2] = (M) => m.$emit("resolve-models"))
              }, {
                default: a(() => [..._[11] || (_[11] = [
                  v(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : d("", !0),
          u.value ? (t(), p(Ke, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: w.value
          }, {
            actions: a(() => [
              i(W, {
                variant: "secondary",
                size: "sm",
                onClick: _[3] || (_[3] = (M) => m.$emit("view-history"))
              }, {
                default: a(() => [..._[12] || (_[12] = [
                  v(" View Changes ", -1)
                ])]),
                _: 1
              }),
              i(W, {
                variant: "primary",
                size: "sm",
                onClick: _[4] || (_[4] = (M) => m.$emit("commit-changes"))
              }, {
                default: a(() => [..._[13] || (_[13] = [
                  v(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : d("", !0),
          e.status.comparison.is_synced ? d("", !0) : (t(), p(Ke, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: a(() => [
              i(W, {
                variant: "secondary",
                size: "sm",
                onClick: _[5] || (_[5] = (M) => m.$emit("view-debug"))
              }, {
                default: a(() => [..._[14] || (_[14] = [
                  v(" View Logs ", -1)
                ])]),
                _: 1
              }),
              i(W, {
                variant: "primary",
                size: "sm",
                onClick: _[6] || (_[6] = (M) => m.$emit("sync-environment"))
              }, {
                default: a(() => [..._[15] || (_[15] = [
                  v(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : d("", !0),
        !f.value && !u.value ? (t(), p(pe, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : d("", !0)
      ]),
      _: 1
    }));
  }
}), wo = /* @__PURE__ */ V(bo, [["__scopeId", "data-v-2045da26"]]), ko = ["type", "value", "placeholder", "disabled"], _o = /* @__PURE__ */ D({
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
    const r = e, u = s, C = E(null);
    function f(w) {
      const m = w.target.value;
      u("update:modelValue", m);
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
      onInput: f,
      onKeyup: [
        m[0] || (m[0] = De((_) => w.$emit("enter"), ["enter"])),
        m[1] || (m[1] = De((_) => w.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (_) => w.$emit("focus")),
      onBlur: m[3] || (m[3] = (_) => w.$emit("blur"))
    }, null, 42, ko));
  }
}), Re = /* @__PURE__ */ V(_o, [["__scopeId", "data-v-0380d08f"]]), xo = { class: "branch-create-form" }, $o = { class: "form-actions" }, Co = /* @__PURE__ */ D({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const s = l, r = E(""), u = B(() => {
      const w = r.value.trim();
      return w.length > 0 && !w.startsWith("-") && !w.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(w);
    });
    function C() {
      u.value && (s("create", r.value.trim()), r.value = "");
    }
    function f() {
      r.value = "", s("cancel");
    }
    return (w, m) => (t(), n("div", xo, [
      i(Re, {
        modelValue: r.value,
        "onUpdate:modelValue": m[0] || (m[0] = (_) => r.value = _),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: C,
        onEscape: f
      }, null, 8, ["modelValue"]),
      o("div", $o, [
        i(W, {
          variant: "primary",
          size: "sm",
          disabled: !u.value,
          onClick: C
        }, {
          default: a(() => [...m[1] || (m[1] = [
            v(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        i(W, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: a(() => [...m[2] || (m[2] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Io = /* @__PURE__ */ V(Co, [["__scopeId", "data-v-7c500394"]]), So = { class: "branch-list-item__indicator" }, Eo = { class: "branch-list-item__name" }, Lo = {
  key: 0,
  class: "branch-list-item__actions"
}, zo = {
  key: 0,
  class: "branch-list-item__current-label"
}, No = /* @__PURE__ */ D({
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
      o("span", So, c(e.isCurrent ? "●" : "○"), 1),
      o("span", Eo, c(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (t(), n("div", Lo, [
        K(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), n("span", zo, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ V(No, [["__scopeId", "data-v-c6581a24"]]), Do = {
  key: 2,
  class: "branch-list"
}, Vo = /* @__PURE__ */ D({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const s = l, r = E(!1);
    function u(f) {
      s("create", f), C();
    }
    function C() {
      r.value = !1;
    }
    return (f, w) => (t(), p(ye, null, {
      header: a(() => [
        i(be, { title: "BRANCHES" }, {
          actions: a(() => [
            i(W, {
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
          onCreate: u,
          onCancel: C
        })) : d("", !0),
        e.branches.length === 0 ? (t(), p(pe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), n("div", Do, [
          (t(!0), n(A, null, q(e.branches, (m) => (t(), p(Mo, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: a(() => [
              m.is_current ? d("", !0) : (t(), p(W, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (_) => f.$emit("switch", m.name)
              }, {
                default: a(() => [...w[2] || (w[2] = [
                  v(" Switch ", -1)
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
}), Bo = /* @__PURE__ */ V(Vo, [["__scopeId", "data-v-763d6ec4"]]), Oo = { class: "commit-list" }, Uo = /* @__PURE__ */ D({
  __name: "CommitList",
  setup(e) {
    return (l, s) => (t(), n("div", Oo, [
      K(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), To = /* @__PURE__ */ V(Uo, [["__scopeId", "data-v-8c5ee761"]]), Ro = { class: "commit-hash" }, Wo = /* @__PURE__ */ D({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, s = B(() => l.hash.slice(0, l.length));
    return (r, u) => (t(), n("span", Ro, c(s.value), 1));
  }
}), Ao = /* @__PURE__ */ V(Wo, [["__scopeId", "data-v-7c333cc6"]]), Po = { class: "commit-message" }, Fo = { class: "commit-date" }, Go = /* @__PURE__ */ D({
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
    function u() {
      s.clickable && r("click");
    }
    return (C, f) => (t(), n("div", {
      class: F(["commit-item", { clickable: e.clickable }]),
      onClick: u
    }, [
      i(Ao, { hash: e.hash }, null, 8, ["hash"]),
      o("span", Po, c(e.message), 1),
      o("span", Fo, c(e.relativeDate), 1),
      C.$slots.actions ? (t(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = Se(() => {
        }, ["stop"]))
      }, [
        K(C.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ho = /* @__PURE__ */ V(Go, [["__scopeId", "data-v-dd7c621b"]]), jo = /* @__PURE__ */ D({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, s) => (t(), p(ye, null, {
      header: a(() => [
        i(be, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (t(), p(pe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), p(To, { key: 1 }, {
          default: a(() => [
            (t(!0), n(A, null, q(e.commits, (r) => (t(), p(Ho, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => l.$emit("select", r)
            }, {
              actions: a(() => [
                i(W, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => l.$emit("checkout", r),
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
}), Ko = /* @__PURE__ */ V(jo, [["__scopeId", "data-v-981c3c64"]]), tt = [
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
], Ue = [
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
], Te = [
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
    const e = Ue.filter((s) => s.installed), l = Ue.filter((s) => !s.installed);
    return {
      nodes: Ue,
      total_count: Ue.length,
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
  getEnvironmentLogs: async (e, l) => (await ee(250), (e ? Te.filter((r) => r.level === e) : Te).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await ee(300);
    const s = [...Te, ...Te.map((u) => ({
      ...u,
      context: { ...u.context, environment: "testing" }
    }))];
    return (e ? s.filter((u) => u.level === e) : s).slice(0, l || 100);
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
function fe() {
  const e = E(!1), l = E(null);
  async function s(R, X) {
    var Oe;
    if (!((Oe = window.app) != null && Oe.api))
      throw new Error("ComfyUI API not available");
    const le = await window.app.api.fetchApi(R, X);
    if (!le.ok) {
      const ze = await le.json().catch(() => ({}));
      throw new Error(ze.error || ze.message || `Request failed: ${le.status}`);
    }
    return le.json();
  }
  async function r() {
    return Q.getStatus();
  }
  async function u(R, X = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: R, allow_issues: X })
    });
  }
  async function C(R = 10, X = 0) {
    {
      const le = await Q.getCommitHistory(R);
      return {
        commits: le,
        total: le.length,
        offset: X
      };
    }
  }
  async function f(R) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: R })
    });
  }
  async function w() {
    return Q.getBranches();
  }
  async function m(R) {
    return s(`/v2/comfygit/commit/${R}`);
  }
  async function _(R, X = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: R, force: X })
    });
  }
  async function M(R, X = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: R, start_point: X })
    });
  }
  async function x(R, X = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: R, force: X })
    });
  }
  async function O() {
    return Q.getEnvironments();
  }
  async function G(R) {
    return Q.switchEnvironment(R);
  }
  async function Z() {
    return null;
  }
  async function j(R, X, le) {
    return await Q.createEnvironment(R, X, le), { status: "success" };
  }
  async function N(R) {
    return await Q.deleteEnvironment(R), { status: "success" };
  }
  async function I() {
    return Q.getWorkflows();
  }
  async function L(R) {
    return Q.getWorkflowDetails(R);
  }
  async function Y(R) {
    return Q.resolveWorkflow(R);
  }
  async function $(R, X, le) {
    return await Q.installWorkflowDeps(R, X, le), { status: "success" };
  }
  async function b(R, X, le) {
    return Q.setModelImportance(R, X, le);
  }
  async function g() {
    return Q.getEnvironmentModels();
  }
  async function k() {
    return Q.getWorkspaceModels();
  }
  async function y(R, X) {
    return Q.updateModelSource(R, X);
  }
  async function S(R) {
    return Q.deleteModel(R);
  }
  async function z(R) {
    return await Q.downloadModel(R), { status: "success" };
  }
  async function ie() {
    return Q.getConfig();
  }
  async function P(R) {
    return Q.updateConfig(R);
  }
  async function U(R, X) {
    return Q.getEnvironmentLogs(R, X);
  }
  async function J(R, X) {
    return Q.getWorkspaceLogs(R, X);
  }
  async function ge() {
    return Q.getNodes();
  }
  async function _e(R) {
    return await Q.installNode(R), { status: "success" };
  }
  async function He(R) {
    return await Q.updateNode(R), { status: "success" };
  }
  async function Be(R) {
    return await Q.uninstallNode(R), { status: "success" };
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: u,
    getHistory: C,
    exportEnv: f,
    // Git Operations
    getBranches: w,
    getCommitDetail: m,
    checkout: _,
    createBranch: M,
    switchBranch: x,
    // Environment Management
    getEnvironments: O,
    switchEnvironment: G,
    getSwitchProgress: Z,
    createEnvironment: j,
    deleteEnvironment: N,
    // Workflow Management
    getWorkflows: I,
    getWorkflowDetails: L,
    resolveWorkflow: Y,
    installWorkflowDeps: $,
    setModelImportance: b,
    // Model Management
    getEnvironmentModels: g,
    getWorkspaceModels: k,
    updateModelSource: y,
    deleteModel: S,
    downloadModel: z,
    // Settings
    getConfig: ie,
    updateConfig: P,
    // Debug/Logs
    getEnvironmentLogs: U,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: ge,
    installNode: _e,
    updateNode: He,
    uninstallNode: Be
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
}, aa = /* @__PURE__ */ D({
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
    function u() {
      s.closeOnOverlayClick && r("close");
    }
    function C(f) {
      f.key === "Escape" && r("close");
    }
    return ue(() => {
      document.addEventListener("keydown", C), document.body.style.overflow = "hidden";
    }), ut(() => {
      document.removeEventListener("keydown", C), document.body.style.overflow = "";
    }), (f, w) => (t(), p(ot, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: u
      }, [
        o("div", {
          class: F(["base-modal-content", e.size]),
          onClick: w[1] || (w[1] = Se(() => {
          }, ["stop"]))
        }, [
          o("div", Zo, [
            K(f.$slots, "header", {}, () => [
              e.title ? (t(), n("h3", Xo, c(e.title), 1)) : d("", !0)
            ], !0),
            e.showCloseButton ? (t(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: w[0] || (w[0] = (m) => f.$emit("close"))
            }, [...w[2] || (w[2] = [
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
          o("div", Qo, [
            e.loading ? (t(), n("div", ea, "Loading...")) : e.error ? (t(), n("div", ta, c(e.error), 1)) : K(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (t(), n("div", oa, [
            K(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Pe = /* @__PURE__ */ V(aa, [["__scopeId", "data-v-700d367b"]]), sa = ["type", "disabled"], na = {
  key: 0,
  class: "spinner"
}, la = /* @__PURE__ */ D({
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
      e.loading ? (t(), n("span", na)) : d("", !0),
      K(l.$slots, "default", {}, void 0, !0)
    ], 10, sa));
  }
}), re = /* @__PURE__ */ V(la, [["__scopeId", "data-v-f3452606"]]), ra = {
  key: 0,
  class: "base-title-count"
}, ia = /* @__PURE__ */ D({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, s) => (t(), p(Ze(`h${e.level}`), {
      class: F(["base-title", e.variant])
    }, {
      default: a(() => [
        K(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", ra, "(" + c(e.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ke = /* @__PURE__ */ V(ia, [["__scopeId", "data-v-5a01561d"]]), ca = ["value", "disabled"], da = {
  key: 0,
  value: "",
  disabled: ""
}, ua = ["value"], ma = {
  key: 0,
  class: "base-select-error"
}, ga = /* @__PURE__ */ D({
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
    return (r, u) => (t(), n("div", {
      class: F(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: F(["base-select", { error: !!e.error }]),
        onChange: u[0] || (u[0] = (C) => r.$emit("update:modelValue", C.target.value))
      }, [
        e.placeholder ? (t(), n("option", da, c(e.placeholder), 1)) : d("", !0),
        (t(!0), n(A, null, q(e.options, (C) => (t(), n("option", {
          key: l(C),
          value: l(C)
        }, c(s(C)), 9, ua))), 128))
      ], 42, ca),
      e.error ? (t(), n("span", ma, c(e.error), 1)) : d("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ V(ga, [["__scopeId", "data-v-7436d745"]]), va = { class: "detail-section" }, fa = {
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
}, Ea = { class: "node-name" }, La = {
  key: 0,
  class: "node-version"
}, za = /* @__PURE__ */ D({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const s = e, r = l, { getWorkflowDetails: u, setModelImportance: C } = fe(), f = E(null), w = E(!1), m = E(null), _ = E(!1), M = E({}), x = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function O() {
      w.value = !0, m.value = null;
      try {
        f.value = await u(s.workflowName);
      } catch (j) {
        m.value = j instanceof Error ? j.message : "Failed to load workflow details";
      } finally {
        w.value = !1;
      }
    }
    function G(j, N) {
      M.value[j] = N, _.value = !0;
    }
    async function Z() {
      if (!_.value) {
        r("close");
        return;
      }
      w.value = !0, m.value = null;
      try {
        for (const [j, N] of Object.entries(M.value))
          await C(s.workflowName, j, N);
        r("close");
      } catch (j) {
        m.value = j instanceof Error ? j.message : "Failed to save changes";
      } finally {
        w.value = !1;
      }
    }
    return ue(O), (j, N) => (t(), p(Pe, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: w.value,
      error: m.value || void 0,
      onClose: N[2] || (N[2] = (I) => r("close"))
    }, {
      body: a(() => [
        f.value ? (t(), n(A, { key: 0 }, [
          o("section", va, [
            i(ke, { variant: "section" }, {
              default: a(() => [
                v("MODELS USED (" + c(f.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.models.length === 0 ? (t(), n("div", fa, " No models used in this workflow ")) : d("", !0),
            (t(!0), n(A, null, q(f.value.models, (I) => (t(), n("div", {
              key: I.hash,
              class: "model-card"
            }, [
              o("div", ha, [
                N[3] || (N[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", pa, c(I.filename), 1)
              ]),
              o("div", ya, [
                o("div", ba, [
                  N[4] || (N[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: F(["value", I.status === "available" ? "success" : "error"])
                  }, c(I.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", wa, [
                  N[5] || (N[5] = o("span", { class: "label" }, "Importance:", -1)),
                  i(Ce, {
                    "model-value": M.value[I.hash] || I.importance,
                    options: x,
                    "onUpdate:modelValue": (L) => G(I.hash, L)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                I.node_type ? (t(), n("div", ka, [
                  N[6] || (N[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", _a, c(I.node_type) + " (Node " + c(I.node_id) + ")", 1)
                ])) : d("", !0),
                I.size_mb ? (t(), n("div", xa, [
                  N[7] || (N[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", $a, c(I.size_mb) + " MB", 1)
                ])) : d("", !0)
              ]),
              I.status === "missing" ? (t(), n("div", Ca, [
                i(re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: N[0] || (N[0] = (L) => r("resolve"))
                }, {
                  default: a(() => [...N[8] || (N[8] = [
                    v(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : d("", !0)
            ]))), 128))
          ]),
          N[9] || (N[9] = o("div", { class: "info-box" }, [
            o("div", { class: "info-title" }, "Importance options:"),
            o("ul", { class: "info-list" }, [
              o("li", null, [
                o("strong", null, "Required"),
                v(" — Must have for workflow to run")
              ]),
              o("li", null, [
                o("strong", null, "Flexible"),
                v(" — Workflow adapts if missing")
              ]),
              o("li", null, [
                o("strong", null, "Optional"),
                v(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          o("section", Ia, [
            i(ke, { variant: "section" }, {
              default: a(() => [
                v("NODES USED (" + c(f.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.nodes.length === 0 ? (t(), n("div", Sa, " No custom nodes used in this workflow ")) : d("", !0),
            (t(!0), n(A, null, q(f.value.nodes, (I) => (t(), n("div", {
              key: I.name,
              class: "node-item"
            }, [
              o("span", {
                class: F(["node-status", I.installed ? "installed" : "missing"])
              }, c(I.installed ? "✓" : "✕"), 3),
              o("span", Ea, c(I.name), 1),
              I.version ? (t(), n("span", La, "v" + c(I.version), 1)) : d("", !0)
            ]))), 128))
          ])
        ], 64)) : d("", !0)
      ]),
      footer: a(() => [
        i(re, {
          variant: "secondary",
          onClick: N[1] || (N[1] = (I) => r("close"))
        }, {
          default: a(() => [...N[10] || (N[10] = [
            v(" Close ", -1)
          ])]),
          _: 1
        }),
        _.value ? (t(), p(re, {
          key: 0,
          variant: "primary",
          onClick: Z
        }, {
          default: a(() => [...N[11] || (N[11] = [
            v(" Save Changes ", -1)
          ])]),
          _: 1
        })) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Na = /* @__PURE__ */ V(za, [["__scopeId", "data-v-6ce9a41c"]]), Ma = {
  key: 0,
  class: "resolve-section"
}, Da = { class: "resolve-card success-card" }, Va = { class: "items-list" }, Ba = { class: "item-info" }, Oa = { class: "item-name" }, Ua = {
  key: 0,
  class: "item-meta"
}, Ta = { class: "match-type" }, Ra = { class: "source" }, Wa = {
  key: 1,
  class: "resolve-section"
}, Aa = { class: "resolve-card warning-card" }, Pa = { class: "items-list" }, Fa = { class: "item-info" }, Ga = { class: "item-name" }, Ha = { class: "item-meta" }, ja = { key: 0 }, Ka = { key: 1 }, qa = {
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
}, ns = /* @__PURE__ */ D({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const s = e, r = l, { resolveWorkflow: u, installWorkflowDeps: C } = fe(), f = E(null), w = E(!1), m = E(!1), _ = E(null), M = B(() => {
      var b;
      return f.value ? ((b = f.value.download_results) == null ? void 0 : b.every((g) => g.can_download)) ?? !1 : !1;
    });
    async function x() {
      w.value = !0, _.value = null;
      try {
        f.value = await u(s.workflowName);
      } catch (b) {
        _.value = b instanceof Error ? b.message : "Failed to analyze workflow";
      } finally {
        w.value = !1;
      }
    }
    function O(b) {
      return !b.possible_matches || b.possible_matches.length === 0 ? null : b.possible_matches.reduce(
        (g, k) => k.match_confidence > g.match_confidence ? k : g
      );
    }
    function G(b) {
      return b >= 0.9 ? "high" : b >= 0.7 ? "medium" : "low";
    }
    function Z(b) {
      const g = O(b);
      return g ? g.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function j(b) {
      var g, k;
      return (k = (g = f.value) == null ? void 0 : g.download_results) == null ? void 0 : k.find((y) => y.model === b);
    }
    function N(b) {
      const g = j(b);
      return (g == null ? void 0 : g.can_download) ?? !1;
    }
    function I(b) {
      const g = j(b);
      return (g == null ? void 0 : g.source_url) || null;
    }
    function L(b) {
      window.open(b, "_blank");
    }
    async function Y() {
      if (!(!f.value || m.value)) {
        m.value = !0, _.value = null;
        try {
          await C(
            s.workflowName,
            f.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (b) {
          _.value = b instanceof Error ? b.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function $() {
      if (!(!f.value || m.value)) {
        m.value = !0, _.value = null;
        try {
          await C(
            s.workflowName,
            f.value.nodes_to_install,
            f.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (b) {
          _.value = b instanceof Error ? b.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return ue(x), (b, g) => (t(), p(Pe, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: w.value,
      error: _.value || void 0,
      onClose: g[1] || (g[1] = (k) => r("close"))
    }, {
      body: a(() => [
        f.value ? (t(), n(A, { key: 0 }, [
          g[5] || (g[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          f.value.nodes_unresolved.length > 0 ? (t(), n("section", Ma, [
            i(ke, { variant: "section" }, {
              default: a(() => [
                v("NODES (" + c(f.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Da, [
              g[2] || (g[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Va, [
                (t(!0), n(A, null, q(f.value.nodes_unresolved, (k) => {
                  var y;
                  return t(), n("div", {
                    key: k.node_type,
                    class: "item"
                  }, [
                    o("div", Ba, [
                      o("div", Oa, c(((y = O(k)) == null ? void 0 : y.package_id) || k.node_type), 1),
                      O(k) ? (t(), n("div", Ua, [
                        o("span", {
                          class: F(["confidence-badge", G(O(k).match_confidence)])
                        }, c(Math.round(O(k).match_confidence * 100)) + "% match ", 3),
                        o("span", Ta, c(O(k).match_type), 1),
                        o("span", Ra, "Source: " + c(Z(k)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          f.value.models_unresolved.length > 0 ? (t(), n("section", Wa, [
            i(ke, { variant: "section" }, {
              default: a(() => [
                v("MODELS (" + c(f.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Aa, [
              g[3] || (g[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Pa, [
                (t(!0), n(A, null, q(f.value.models_unresolved, (k) => (t(), n("div", {
                  key: k.filename,
                  class: "item"
                }, [
                  o("div", Fa, [
                    o("div", Ga, c(k.filename), 1),
                    o("div", Ha, [
                      k.expected_category ? (t(), n("span", ja, "Type: " + c(k.expected_category), 1)) : d("", !0),
                      j(k.filename) ? (t(), n("span", Ka, " Size: ~" + c(j(k.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    N(k.filename) ? d("", !0) : (t(), n("div", qa, " No auto-download source configured "))
                  ]),
                  I(k.filename) ? (t(), n("div", Ja, [
                    o("button", {
                      class: "link-btn",
                      onClick: (y) => L(I(k.filename))
                    }, " Open Source ↗ ", 8, Ya)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          f.value.nodes_resolved.length > 0 || f.value.models_resolved.length > 0 ? (t(), n("section", Za, [
            i(ke, { variant: "section" }, {
              default: a(() => [
                v(" ALREADY AVAILABLE (" + c(f.value.nodes_resolved.length + f.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", Xa, c(f.value.nodes_resolved.length) + " nodes and " + c(f.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          o("div", Qa, [
            g[4] || (g[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", es, [
              f.value.nodes_to_install.length ? (t(), n("li", ts, " Install " + c(f.value.nodes_to_install.length) + " nodes (~" + c(f.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              f.value.nodes_to_install.length ? (t(), n("li", os, " Restart ComfyUI to load new nodes ")) : d("", !0),
              f.value.models_to_download.length ? (t(), n("li", as, " You'll still need to download " + c(f.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            f.value.estimated_size_mb ? (t(), n("div", ss, " Estimated download: " + c(f.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: a(() => [
        i(re, {
          variant: "secondary",
          onClick: g[0] || (g[0] = (k) => r("close"))
        }, {
          default: a(() => [...g[6] || (g[6] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f.value && f.value.nodes_to_install.length && f.value.models_to_download.length ? (t(), p(re, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: Y
        }, {
          default: a(() => [...g[7] || (g[7] = [
            v(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        f.value && (f.value.nodes_to_install.length || f.value.models_to_download.length) ? (t(), p(re, {
          key: 1,
          variant: "primary",
          disabled: m.value || f.value.models_to_download.length > 0 && !M.value,
          loading: m.value,
          onClick: $
        }, {
          default: a(() => [...g[8] || (g[8] = [
            v(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ls = /* @__PURE__ */ V(ns, [["__scopeId", "data-v-d68efb14"]]), rs = { class: "search-input-wrapper" }, is = ["value", "placeholder"], cs = /* @__PURE__ */ D({
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
    const s = e, r = l, u = E(null);
    let C;
    function f(m) {
      const _ = m.target.value;
      s.debounce > 0 ? (clearTimeout(C), C = window.setTimeout(() => {
        r("update:modelValue", _);
      }, s.debounce)) : r("update:modelValue", _);
    }
    function w() {
      var m;
      r("update:modelValue", ""), r("clear"), (m = u.value) == null || m.focus();
    }
    return ue(() => {
      s.autoFocus && u.value && u.value.focus();
    }), (m, _) => (t(), n("div", rs, [
      o("input", {
        ref_key: "inputRef",
        ref: u,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: De(w, ["escape"])
      }, null, 40, is),
      e.clearable && e.modelValue ? (t(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: w,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), ds = /* @__PURE__ */ V(cs, [["__scopeId", "data-v-266f857a"]]), us = { class: "search-bar" }, ms = /* @__PURE__ */ D({
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
      i(ds, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Fe = /* @__PURE__ */ V(ms, [["__scopeId", "data-v-3d51bbfd"]]), gs = { class: "section-group" }, vs = {
  key: 0,
  class: "section-content"
}, fs = /* @__PURE__ */ D({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const s = e, r = l, u = E(s.initiallyExpanded);
    function C() {
      s.collapsible && (u.value = !u.value, r("toggle", u.value));
    }
    return (f, w) => (t(), n("section", gs, [
      i(Je, {
        count: e.count,
        clickable: e.collapsible,
        expanded: u.value,
        onClick: C
      }, {
        default: a(() => [
          v(c(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || u.value ? (t(), n("div", vs, [
        K(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), se = /* @__PURE__ */ V(fs, [["__scopeId", "data-v-c48e33ed"]]), hs = { class: "item-header" }, ps = {
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
}, xs = /* @__PURE__ */ D({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = B(() => s.status ? `status-${s.status}` : "");
    return (u, C) => (t(), n("div", {
      class: F(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: C[0] || (C[0] = (f) => e.clickable && u.$emit("click"))
    }, [
      o("div", hs, [
        u.$slots.icon ? (t(), n("span", ps, [
          K(u.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        o("div", ys, [
          u.$slots.title ? (t(), n("div", bs, [
            K(u.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          u.$slots.subtitle ? (t(), n("div", ws, [
            K(u.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      u.$slots.details ? (t(), n("div", ks, [
        K(u.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      u.$slots.actions ? (t(), n("div", _s, [
        K(u.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ V(xs, [["__scopeId", "data-v-cc435e0e"]]), $s = { class: "loading-state" }, Cs = { class: "loading-message" }, Is = /* @__PURE__ */ D({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, s) => (t(), n("div", $s, [
      s[0] || (s[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", Cs, c(e.message), 1)
    ]));
  }
}), Ee = /* @__PURE__ */ V(Is, [["__scopeId", "data-v-ad8436c9"]]), Ss = { class: "error-state" }, Es = { class: "error-message" }, Ls = /* @__PURE__ */ D({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, s) => (t(), n("div", Ss, [
      s[2] || (s[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", Es, c(e.message), 1),
      e.retry ? (t(), p(W, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          v(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ V(Ls, [["__scopeId", "data-v-5397be48"]]), zs = /* @__PURE__ */ D({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const s = l, { getWorkflows: r } = fe(), u = E([]), C = E(!1), f = E(null), w = E(""), m = E(!1), _ = E(!1), M = E(!1), x = E(!1), O = E(null), G = B(
      () => u.value.filter((P) => P.status === "broken")
    ), Z = B(
      () => u.value.filter((P) => P.status === "new")
    ), j = B(
      () => u.value.filter((P) => P.status === "modified")
    ), N = B(
      () => u.value.filter((P) => P.status === "synced")
    ), I = B(() => {
      if (!w.value.trim()) return u.value;
      const P = w.value.toLowerCase();
      return u.value.filter((U) => U.name.toLowerCase().includes(P));
    }), L = B(
      () => G.value.filter(
        (P) => !w.value.trim() || P.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), Y = B(
      () => Z.value.filter(
        (P) => !w.value.trim() || P.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), $ = B(
      () => j.value.filter(
        (P) => !w.value.trim() || P.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), b = B(
      () => N.value.filter(
        (P) => !w.value.trim() || P.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), g = B(
      () => _.value ? b.value : b.value.slice(0, 5)
    );
    async function k() {
      C.value = !0, f.value = null;
      try {
        u.value = await r();
      } catch (P) {
        f.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        C.value = !1;
      }
    }
    function y(P) {
      O.value = P, M.value = !0;
    }
    function S(P) {
      O.value = P, x.value = !0;
    }
    function z() {
      alert("Bulk resolution not yet implemented");
    }
    function ie() {
      s("refresh");
    }
    return ue(k), (P, U) => (t(), n(A, null, [
      i(ye, null, {
        header: a(() => [
          i(be, { title: "WORKFLOWS" }, {
            actions: a(() => [
              G.value.length > 0 ? (t(), p(W, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: a(() => [...U[7] || (U[7] = [
                  v(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          i(Fe, {
            modelValue: w.value,
            "onUpdate:modelValue": U[0] || (U[0] = (J) => w.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          C.value ? (t(), p(Ee, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (t(), p(Le, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            L.value.length ? (t(), p(se, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(L.value, (J) => (t(), p(de, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: a(() => [...U[8] || (U[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(c(J.name), 1)
                  ]),
                  subtitle: a(() => [
                    v(" Missing: " + c(J.missing_nodes) + " nodes, " + c(J.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    i(W, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ge) => S(J.name)
                    }, {
                      default: a(() => [...U[9] || (U[9] = [
                        v(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    i(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ge) => y(J.name)
                    }, {
                      default: a(() => [...U[10] || (U[10] = [
                        v(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            Y.value.length ? (t(), p(se, {
              key: 1,
              title: "NEW",
              count: Y.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(Y.value, (J) => (t(), p(de, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: a(() => [...U[11] || (U[11] = [
                    v("●", -1)
                  ])]),
                  title: a(() => [
                    v(c(J.name), 1)
                  ]),
                  subtitle: a(() => [...U[12] || (U[12] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ge) => y(J.name)
                    }, {
                      default: a(() => [...U[13] || (U[13] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (t(), p(se, {
              key: 2,
              title: "MODIFIED",
              count: $.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q($.value, (J) => (t(), p(de, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: a(() => [...U[14] || (U[14] = [
                    v("⚡", -1)
                  ])]),
                  title: a(() => [
                    v(c(J.name), 1)
                  ]),
                  subtitle: a(() => [...U[15] || (U[15] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ge) => y(J.name)
                    }, {
                      default: a(() => [...U[16] || (U[16] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? (t(), p(se, {
              key: 3,
              title: "SYNCED",
              count: b.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: U[2] || (U[2] = (J) => m.value = J)
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(g.value, (J) => (t(), p(de, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: a(() => [...U[17] || (U[17] = [
                    v("✓", -1)
                  ])]),
                  title: a(() => [
                    v(c(J.name), 1)
                  ]),
                  subtitle: a(() => [...U[18] || (U[18] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ge) => y(J.name)
                    }, {
                      default: a(() => [...U[19] || (U[19] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !_.value && b.value.length > 5 ? (t(), p(W, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (J) => _.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    v(" View all " + c(b.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            I.value.length ? d("", !0) : (t(), p(pe, {
              key: 4,
              icon: "📭",
              message: w.value ? `No workflows match '${w.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      M.value && O.value ? (t(), p(Na, {
        key: 0,
        "workflow-name": O.value,
        onClose: U[3] || (U[3] = (J) => M.value = !1),
        onResolve: U[4] || (U[4] = (J) => S(O.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      x.value && O.value ? (t(), p(ls, {
        key: 1,
        "workflow-name": O.value,
        onClose: U[5] || (U[5] = (J) => x.value = !1),
        onInstall: ie,
        onRefresh: U[6] || (U[6] = (J) => s("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Ns = /* @__PURE__ */ V(zs, [["__scopeId", "data-v-2251d776"]]), Ms = /* @__PURE__ */ D({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (t(), n("span", {
      class: F(["detail-label"]),
      style: Xe({ minWidth: e.minWidth })
    }, [
      K(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Ds = /* @__PURE__ */ V(Ms, [["__scopeId", "data-v-75e9eeb8"]]), Vs = /* @__PURE__ */ D({
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
}), We = /* @__PURE__ */ V(Vs, [["__scopeId", "data-v-2f186e4c"]]), Bs = { class: "detail-row" }, Os = /* @__PURE__ */ D({
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
      i(Ds, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          v(c(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), p(We, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          v(c(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : K(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), te = /* @__PURE__ */ V(Os, [["__scopeId", "data-v-ef15664a"]]), Us = /* @__PURE__ */ D({
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
}), Ve = /* @__PURE__ */ V(Us, [["__scopeId", "data-v-ccb7816e"]]), Ts = { class: "popover-header" }, Rs = { class: "popover-title" }, Ws = { class: "popover-content" }, As = {
  key: 0,
  class: "popover-actions"
}, Ps = /* @__PURE__ */ D({
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
          style: Xe({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = Se(() => {
          }, ["stop"]))
        }, [
          o("div", Ts, [
            o("h4", Rs, c(e.title), 1),
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
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ V(Ps, [["__scopeId", "data-v-057df510"]]), Fs = /* @__PURE__ */ D({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const s = l, { getEnvironmentModels: r, getStatus: u } = fe(), C = E([]), f = E([]), w = E("production"), m = E(!1), _ = E(null), M = E(""), x = E(!1);
    function O() {
      x.value = !1, s("navigate", "model-index");
    }
    const G = B(
      () => C.value.reduce((y, S) => y + (S.size_mb || S.size || 0), 0)
    ), Z = B(() => {
      if (!M.value.trim()) return C.value;
      const y = M.value.toLowerCase();
      return C.value.filter((S) => S.filename.toLowerCase().includes(y));
    }), j = B(() => {
      if (!M.value.trim()) return f.value;
      const y = M.value.toLowerCase();
      return f.value.filter((S) => S.filename.toLowerCase().includes(y));
    }), N = B(
      () => Z.value.filter((y) => y.type === "checkpoints" || y.category === "checkpoints")
    ), I = B(
      () => Z.value.filter((y) => y.type === "loras" || y.category === "loras")
    ), L = B(
      () => Z.value.filter(
        (y) => y.type !== "checkpoints" && y.category !== "checkpoints" && y.type !== "loras" && y.category !== "loras"
      )
    );
    function Y(y) {
      return y ? y >= 1024 ? `${(y / 1024).toFixed(1)} GB` : `${y.toFixed(0)} MB` : "Unknown";
    }
    function $(y) {
      s("navigate", "model-index");
    }
    function b(y) {
      s("navigate", "model-index");
    }
    function g(y) {
      alert(`Download functionality not yet implemented for ${y}`);
    }
    async function k() {
      m.value = !0, _.value = null;
      try {
        const y = await r();
        C.value = y, f.value = [];
        const S = await u();
        w.value = S.environment || "production";
      } catch (y) {
        _.value = y instanceof Error ? y.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return ue(k), (y, S) => (t(), n(A, null, [
      i(ye, null, {
        header: a(() => [
          i(be, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (z) => x.value = !0)
          })
        ]),
        search: a(() => [
          i(Fe, {
            modelValue: M.value,
            "onUpdate:modelValue": S[1] || (S[1] = (z) => M.value = z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (t(), p(Ee, {
            key: 0,
            message: "Loading environment models..."
          })) : _.value ? (t(), p(Le, {
            key: 1,
            message: _.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            C.value.length ? (t(), p(Ve, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + c(C.value.length) + " models • " + c(Y(G.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            N.value.length ? (t(), p(se, {
              key: 1,
              title: "CHECKPOINTS",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(N.value, (z) => (t(), p(de, {
                  key: z.sha256 || z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[3] || (S[3] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(c(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(c(Y(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => [
                    i(te, {
                      label: "Used by:",
                      value: (z.used_by || z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    i(te, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => $(z.sha256 || z.sha256_hash || z.hash || "")
                    }, {
                      default: a(() => [...S[4] || (S[4] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            I.value.length ? (t(), p(se, {
              key: 2,
              title: "LORAS",
              count: I.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(I.value, (z) => (t(), p(de, {
                  key: z.sha256 || z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[5] || (S[5] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(c(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(c(Y(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => [
                    i(te, {
                      label: "Used by:",
                      value: (z.used_by || z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    i(te, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => $(z.sha256 || z.sha256_hash || z.hash || "")
                    }, {
                      default: a(() => [...S[6] || (S[6] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            L.value.length ? (t(), p(se, {
              key: 3,
              title: "OTHER",
              count: L.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(L.value, (z) => (t(), p(de, {
                  key: z.sha256 || z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[7] || (S[7] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(c(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(c(Y(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => [
                    i(te, {
                      label: "Type:",
                      value: z.type
                    }, null, 8, ["value"]),
                    i(te, {
                      label: "Used by:",
                      value: (z.used_by || z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => $(z.sha256 || z.sha256_hash || z.hash || "")
                    }, {
                      default: a(() => [...S[8] || (S[8] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            j.value.length ? (t(), p(se, {
              key: 4,
              title: "MISSING",
              count: j.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(j.value, (z) => (t(), p(de, {
                  key: z.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...S[9] || (S[9] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(c(z.filename), 1)
                  ]),
                  subtitle: a(() => [...S[10] || (S[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var ie;
                    return [
                      i(te, {
                        label: "Required by:",
                        value: ((ie = z.workflow_names) == null ? void 0 : ie.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    i(W, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => g(z.filename)
                    }, {
                      default: a(() => [...S[11] || (S[11] = [
                        v(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    i(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => b(z.filename)
                    }, {
                      default: a(() => [...S[12] || (S[12] = [
                        v(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !Z.value.length && !j.value.length ? (t(), p(pe, {
              key: 5,
              icon: "📭",
              message: M.value ? `No models match '${M.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Ge, {
        show: x.value,
        title: "About Environment Models",
        onClose: S[2] || (S[2] = (z) => x.value = !1)
      }, {
        content: a(() => [
          o("p", null, [
            S[13] || (S[13] = v(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + c(w.value) + '"', 1),
            S[14] || (S[14] = v(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          i(W, {
            variant: "primary",
            onClick: O
          }, {
            default: a(() => [...S[15] || (S[15] = [
              v(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Gs = /* @__PURE__ */ V(Fs, [["__scopeId", "data-v-865641a4"]]), Hs = /* @__PURE__ */ D({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = fe(), s = E([]), r = E(!1), u = E(null), C = E(""), f = E(!1), w = B(
      () => s.value.reduce((g, k) => g + (k.size_mb || k.size || 0), 0)
    ), m = B(() => {
      const g = /* @__PURE__ */ new Set();
      return s.value.forEach((k) => {
        k.used_in_environments && k.used_in_environments.length > 0 && k.used_in_environments.forEach((y) => g.add(y.env_name));
      }), g.size;
    }), _ = B(() => {
      if (!C.value.trim()) return s.value;
      const g = C.value.toLowerCase();
      return s.value.filter((k) => {
        const y = k, S = k.sha256 || y.sha256_hash || "";
        return k.filename.toLowerCase().includes(g) || S.toLowerCase().includes(g);
      });
    }), M = B(
      () => _.value.filter((g) => g.type === "checkpoints")
    ), x = B(
      () => _.value.filter((g) => g.type === "loras")
    ), O = B(
      () => _.value.filter((g) => g.type !== "checkpoints" && g.type !== "loras")
    );
    function G(g) {
      return g ? g >= 1024 ? `${(g / 1024).toFixed(1)} GB` : `${g.toFixed(0)} MB` : "Unknown";
    }
    function Z(g) {
      const k = g, y = g.used_in_workflows || k.used_by || [];
      return !y || y.length === 0 ? "Not used" : `${y.length} workflow(s)`;
    }
    function j(g) {
      navigator.clipboard.writeText(g), alert("Hash copied to clipboard");
    }
    function N(g) {
      prompt("Enter model source URL:", g.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function I(g) {
      const k = g, y = g.used_in_workflows || k.used_by || [], S = y && y.length > 0 ? `

⚠ WARNING: This model is used by ${y.length} workflow(s):
${y.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${g.filename}?${S}

This will free ${G(k.size_mb || g.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function L() {
      alert("Scan for models not yet implemented");
    }
    function Y() {
      alert("Change directory not yet implemented");
    }
    function $() {
      alert("Download new model not yet implemented");
    }
    async function b() {
      r.value = !0, u.value = null;
      try {
        s.value = await l(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", M.value), console.log("Filtered loras:", x.value), console.log("Filtered other:", O.value);
      } catch (g) {
        u.value = g instanceof Error ? g.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ue(b), (g, k) => (t(), n(A, null, [
      i(ye, null, {
        header: a(() => [
          i(be, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: k[0] || (k[0] = (y) => f.value = !0)
          }, {
            actions: a(() => [
              i(W, {
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: a(() => [...k[3] || (k[3] = [
                  v(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              i(W, {
                variant: "primary",
                size: "sm",
                onClick: Y
              }, {
                default: a(() => [...k[4] || (k[4] = [
                  v(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              i(W, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: a(() => [...k[5] || (k[5] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  v(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          i(Fe, {
            modelValue: C.value,
            "onUpdate:modelValue": k[1] || (k[1] = (y) => C.value = y),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (t(), p(Ee, {
            key: 0,
            message: "Loading workspace models..."
          })) : u.value ? (t(), p(Le, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            s.value.length ? (t(), p(Ve, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + c(s.value.length) + " models • " + c(G(w.value)) + " • Used in " + c(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length ? (t(), p(se, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(M.value, (y) => (t(), p(de, {
                  key: y.sha256 || y.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[6] || (k[6] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(c(y.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(c(G(y.size_mb || y.size)), 1)
                  ]),
                  details: a(() => {
                    var S, z;
                    return [
                      y.sha256 || y.sha256_hash ? (t(), p(te, {
                        key: 0,
                        label: "SHA256:",
                        value: (y.sha256 || y.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      i(te, {
                        label: "Used in:",
                        value: Z(y)
                      }, null, 8, ["value"]),
                      y.source_url || (S = y.sources) != null && S[0] ? (t(), p(te, {
                        key: 1,
                        label: "Source URL:",
                        value: y.source_url || ((z = y.sources) == null ? void 0 : z[0])
                      }, null, 8, ["value"])) : (t(), p(te, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...k[7] || (k[7] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => N(y)
                    }, {
                      default: a(() => [...k[8] || (k[8] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y.sha256 || y.sha256_hash ? (t(), p(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => j(y.sha256 || y.sha256_hash)
                    }, {
                      default: a(() => [...k[9] || (k[9] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    i(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (S) => I(y)
                    }, {
                      default: a(() => [...k[10] || (k[10] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            x.value.length ? (t(), p(se, {
              key: 2,
              title: "LORAS",
              count: x.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(x.value, (y) => (t(), p(de, {
                  key: y.sha256 || y.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[11] || (k[11] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(c(y.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(c(G(y.size_mb || y.size)), 1)
                  ]),
                  details: a(() => {
                    var S, z;
                    return [
                      y.sha256 || y.sha256_hash ? (t(), p(te, {
                        key: 0,
                        label: "SHA256:",
                        value: (y.sha256 || y.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      i(te, {
                        label: "Used in:",
                        value: Z(y)
                      }, null, 8, ["value"]),
                      y.source_url || (S = y.sources) != null && S[0] ? (t(), p(te, {
                        key: 1,
                        label: "Source URL:",
                        value: y.source_url || ((z = y.sources) == null ? void 0 : z[0])
                      }, null, 8, ["value"])) : (t(), p(te, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...k[12] || (k[12] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => N(y)
                    }, {
                      default: a(() => [...k[13] || (k[13] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y.sha256 || y.sha256_hash ? (t(), p(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => j(y.sha256 || y.sha256_hash)
                    }, {
                      default: a(() => [...k[14] || (k[14] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    i(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (S) => I(y)
                    }, {
                      default: a(() => [...k[15] || (k[15] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            O.value.length ? (t(), p(se, {
              key: 3,
              title: "OTHER",
              count: O.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(O.value, (y) => (t(), p(de, {
                  key: y.sha256 || y.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[16] || (k[16] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(c(y.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(c(G(y.size_mb || y.size)), 1)
                  ]),
                  details: a(() => [
                    i(te, {
                      label: "Type:",
                      value: y.type
                    }, null, 8, ["value"]),
                    y.sha256 || y.sha256_hash ? (t(), p(te, {
                      key: 0,
                      label: "SHA256:",
                      value: (y.sha256 || y.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    i(te, {
                      label: "Used in:",
                      value: Z(y)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    i(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => N(y)
                    }, {
                      default: a(() => [...k[17] || (k[17] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y.sha256 || y.sha256_hash ? (t(), p(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => j(y.sha256 || y.sha256_hash)
                    }, {
                      default: a(() => [...k[18] || (k[18] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    i(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (S) => I(y)
                    }, {
                      default: a(() => [...k[19] || (k[19] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? d("", !0) : (t(), p(pe, {
              key: 4,
              icon: "📭",
              message: C.value ? `No models match '${C.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      i(Ge, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: k[2] || (k[2] = (y) => f.value = !1)
      }, {
        content: a(() => [...k[20] || (k[20] = [
          o("p", null, [
            v(" Content-addressable model storage shared across "),
            o("strong", null, "all environments"),
            v(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), js = /* @__PURE__ */ V(Hs, [["__scopeId", "data-v-5a24af01"]]), Ks = { key: 0 }, qs = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Js = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Ys = /* @__PURE__ */ D({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: l, installNode: s, updateNode: r, uninstallNode: u } = fe(), C = E({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), f = E(!1), w = E(null), m = E(""), _ = E(!1), M = B(() => {
      if (!m.value.trim()) return C.value.nodes;
      const $ = m.value.toLowerCase();
      return C.value.nodes.filter(
        (b) => {
          var g, k;
          return b.name.toLowerCase().includes($) || ((g = b.description) == null ? void 0 : g.toLowerCase().includes($)) || ((k = b.repository) == null ? void 0 : k.toLowerCase().includes($));
        }
      );
    }), x = B(
      () => M.value.filter(($) => $.installed)
    ), O = B(
      () => M.value.filter(($) => !$.installed)
    );
    function G($) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[$] || $;
    }
    function Z($) {
      return !$.used_in_workflows || $.used_in_workflows.length === 0 ? "Not used in any workflows" : $.used_in_workflows.length === 1 ? $.used_in_workflows[0] : `${$.used_in_workflows.length} workflows`;
    }
    function j($) {
      window.open($, "_blank");
    }
    async function N($) {
      if (confirm(`Install node "${$}"?

This will download and install the node from its repository.`))
        try {
          f.value = !0;
          const b = await s($);
          b.status === "success" ? (alert(`Node "${$}" installed successfully!`), await Y()) : alert(`Failed to install node: ${b.message || "Unknown error"}`);
        } catch (b) {
          alert(`Error installing node: ${b instanceof Error ? b.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
    }
    async function I($) {
      if (confirm(`Check for updates for "${$}"?`))
        try {
          f.value = !0;
          const b = await r($);
          b.status === "success" ? (alert(`Node "${$}" is up to date or has been updated!`), await Y()) : alert(`Update check failed: ${b.message || "Unknown error"}`);
        } catch (b) {
          alert(`Error checking for updates: ${b instanceof Error ? b.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
    }
    async function L($) {
      if (confirm(`Uninstall node "${$}"?

This will remove the node from this environment.`))
        try {
          f.value = !0;
          const b = await u($);
          b.status === "success" ? (alert(`Node "${$}" uninstalled successfully!`), await Y()) : alert(`Failed to uninstall node: ${b.message || "Unknown error"}`);
        } catch (b) {
          alert(`Error uninstalling node: ${b instanceof Error ? b.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
    }
    async function Y() {
      f.value = !0, w.value = null;
      try {
        C.value = await l();
      } catch ($) {
        w.value = $ instanceof Error ? $.message : "Failed to load nodes";
      } finally {
        f.value = !1;
      }
    }
    return ue(Y), ($, b) => (t(), n(A, null, [
      i(ye, null, {
        header: a(() => [
          i(be, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (g) => _.value = !0)
          })
        ]),
        search: a(() => [
          i(Fe, {
            modelValue: m.value,
            "onUpdate:modelValue": b[1] || (b[1] = (g) => m.value = g),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          f.value ? (t(), p(Ee, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : w.value ? (t(), p(Le, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            C.value.total_count ? (t(), p(Ve, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + c(C.value.total_count) + " nodes • " + c(C.value.installed_count) + " installed • " + c(C.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            x.value.length ? (t(), p(se, {
              key: 1,
              title: "INSTALLED",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(x.value, (g) => (t(), p(de, {
                  key: g.name,
                  status: "synced"
                }, {
                  icon: a(() => [...b[4] || (b[4] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(c(g.name), 1)
                  ]),
                  subtitle: a(() => [
                    g.version ? (t(), n("span", Ks, "v" + c(g.version), 1)) : (t(), n("span", qs, "version unknown")),
                    g.source ? (t(), n("span", Js, " • " + c(G(g.source)), 1)) : d("", !0)
                  ]),
                  details: a(() => [
                    g.description ? (t(), p(te, {
                      key: 0,
                      label: "Description:",
                      value: g.description
                    }, null, 8, ["value"])) : d("", !0),
                    g.repository ? (t(), p(te, {
                      key: 1,
                      label: "Repository:",
                      value: g.repository
                    }, null, 8, ["value"])) : d("", !0),
                    i(te, {
                      label: "Used by:",
                      value: Z(g)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    g.repository ? (t(), p(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => j(g.repository)
                    }, {
                      default: a(() => [...b[5] || (b[5] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    g.source === "registry" ? (t(), p(W, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => I(g.name)
                    }, {
                      default: a(() => [...b[6] || (b[6] = [
                        v(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    g.source !== "unknown" ? (t(), p(W, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (k) => L(g.name)
                    }, {
                      default: a(() => [...b[7] || (b[7] = [
                        v(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            O.value.length ? (t(), p(se, {
              key: 2,
              title: "MISSING",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(O.value, (g) => (t(), p(de, {
                  key: g.name,
                  status: "missing"
                }, {
                  icon: a(() => [...b[8] || (b[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(c(g.name), 1)
                  ]),
                  subtitle: a(() => [...b[9] || (b[9] = [
                    o("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    g.description ? (t(), p(te, {
                      key: 0,
                      label: "Description:",
                      value: g.description
                    }, null, 8, ["value"])) : d("", !0),
                    g.repository ? (t(), p(te, {
                      key: 1,
                      label: "Repository:",
                      value: g.repository
                    }, null, 8, ["value"])) : d("", !0),
                    i(te, {
                      label: "Required by:",
                      value: Z(g)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    g.download_url ? (t(), p(W, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (k) => N(g.name)
                    }, {
                      default: a(() => [...b[10] || (b[10] = [
                        v(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    g.repository ? (t(), p(W, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (k) => j(g.repository)
                    }, {
                      default: a(() => [...b[11] || (b[11] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !x.value.length && !O.value.length ? (t(), p(pe, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Ge, {
        show: _.value,
        title: "About Git-Tracked Nodes",
        onClose: b[3] || (b[3] = (g) => _.value = !1)
      }, {
        content: a(() => [...b[12] || (b[12] = [
          o("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Installed:"),
            v(" Nodes currently available in this environment"),
            o("br"),
            o("strong", null, "Missing:"),
            v(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          i(W, {
            variant: "primary",
            onClick: b[2] || (b[2] = (g) => _.value = !1)
          }, {
            default: a(() => [...b[13] || (b[13] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zs = /* @__PURE__ */ V(Ys, [["__scopeId", "data-v-c480e2c1"]]), Xs = { class: "setting-info" }, Qs = { class: "setting-label" }, en = {
  key: 0,
  class: "required-marker"
}, tn = {
  key: 0,
  class: "setting-description"
}, on = { class: "setting-control" }, an = /* @__PURE__ */ D({
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
          v(c(e.label) + " ", 1),
          e.required ? (t(), n("span", en, "*")) : d("", !0)
        ]),
        e.description ? (t(), n("div", tn, c(e.description), 1)) : d("", !0)
      ]),
      o("div", on, [
        K(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), oe = /* @__PURE__ */ V(an, [["__scopeId", "data-v-cb5d236c"]]), sn = { class: "toggle" }, nn = ["checked", "disabled"], ln = /* @__PURE__ */ D({
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
}), ve = /* @__PURE__ */ V(ln, [["__scopeId", "data-v-71c0f550"]]), rn = { class: "settings-section" }, cn = { class: "settings-section" }, dn = { class: "settings-section" }, un = { class: "settings-section" }, mn = { class: "settings-section" }, gn = { class: "settings-section" }, vn = /* @__PURE__ */ D({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const l = E(!1), s = E(null), r = E(null), u = E({
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
    }), C = E(null), f = B(() => C.value ? JSON.stringify(u.value) !== JSON.stringify(C.value) : !1), w = [
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
    ], _ = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], M = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], x = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], O = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function G() {
      l.value = !0, s.value = null;
      try {
        await new Promise((N) => setTimeout(N, 500)), C.value = JSON.parse(JSON.stringify(u.value));
      } catch (N) {
        s.value = N instanceof Error ? N.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function Z() {
      r.value = null;
      try {
        await new Promise((N) => setTimeout(N, 300)), C.value = JSON.parse(JSON.stringify(u.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (N) {
        r.value = {
          type: "error",
          message: N instanceof Error ? N.message : "Failed to save settings"
        };
      }
    }
    function j() {
      C.value && (u.value = JSON.parse(JSON.stringify(C.value)), r.value = null);
    }
    return ue(G), (N, I) => (t(), p(ye, null, {
      header: a(() => [
        i(be, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            i(W, {
              variant: "primary",
              size: "sm",
              disabled: !f.value,
              onClick: Z
            }, {
              default: a(() => [...I[19] || (I[19] = [
                v(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f.value ? (t(), p(W, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: j
            }, {
              default: a(() => [...I[20] || (I[20] = [
                v(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        l.value ? (t(), p(Ee, {
          key: 0,
          message: "Loading workspace settings..."
        })) : s.value ? (t(), p(Le, {
          key: 1,
          message: s.value,
          retry: !0,
          onRetry: G
        }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
          i(se, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              o("div", rn, [
                i(oe, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    i(Re, {
                      modelValue: u.value.git.userName,
                      "onUpdate:modelValue": I[0] || (I[0] = (L) => u.value.git.userName = L),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    i(Re, {
                      modelValue: u.value.git.userEmail,
                      "onUpdate:modelValue": I[1] || (I[1] = (L) => u.value.git.userEmail = L),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    i(Re, {
                      modelValue: u.value.git.defaultBranch,
                      "onUpdate:modelValue": I[2] || (I[2] = (L) => u.value.git.defaultBranch = L),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.git.autoCommit,
                      "onUpdate:modelValue": I[3] || (I[3] = (L) => u.value.git.autoCommit = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(se, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              o("div", cn, [
                i(oe, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    i(We, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        v(c(u.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    i(We, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        v(c(u.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    i(We, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        v(c(u.value.paths.modelsDir), 1)
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
          i(se, { title: "MODEL INDEX" }, {
            default: a(() => [
              o("div", dn, [
                i(oe, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": I[4] || (I[4] = (L) => u.value.modelIndex.autoIndex = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": I[5] || (I[5] = (L) => u.value.modelIndex.indexOnStartup = L),
                      disabled: !u.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                i(oe, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    i(Ce, {
                      modelValue: u.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": I[6] || (I[6] = (L) => u.value.modelIndex.scanInterval = L),
                      options: w,
                      disabled: !u.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                i(oe, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.modelIndex.deepScan,
                      "onUpdate:modelValue": I[7] || (I[7] = (L) => u.value.modelIndex.deepScan = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(se, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              o("div", un, [
                i(oe, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    i(Ce, {
                      modelValue: u.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": I[8] || (I[8] = (L) => u.value.environment.defaultComfyUIVersion = L),
                      options: m,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    i(Ce, {
                      modelValue: u.value.environment.pythonVersion,
                      "onUpdate:modelValue": I[9] || (I[9] = (L) => u.value.environment.pythonVersion = L),
                      options: _,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": I[10] || (I[10] = (L) => u.value.environment.autoCreateVenv = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": I[11] || (I[11] = (L) => u.value.environment.autoInstallDeps = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(se, { title: "UI PREFERENCES" }, {
            default: a(() => [
              o("div", mn, [
                i(oe, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    i(Ce, {
                      modelValue: u.value.ui.theme,
                      "onUpdate:modelValue": I[12] || (I[12] = (L) => u.value.ui.theme = L),
                      options: M,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.ui.compactMode,
                      "onUpdate:modelValue": I[13] || (I[13] = (L) => u.value.ui.compactMode = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.ui.showFileExtensions,
                      "onUpdate:modelValue": I[14] || (I[14] = (L) => u.value.ui.showFileExtensions = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.ui.confirmDestructive,
                      "onUpdate:modelValue": I[15] || (I[15] = (L) => u.value.ui.confirmDestructive = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(se, { title: "ADVANCED" }, {
            default: a(() => [
              o("div", gn, [
                i(oe, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    i(ve, {
                      modelValue: u.value.advanced.debugMode,
                      "onUpdate:modelValue": I[16] || (I[16] = (L) => u.value.advanced.debugMode = L)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    i(Ce, {
                      modelValue: u.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": I[17] || (I[17] = (L) => u.value.advanced.maxHistoryItems = L),
                      options: x,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    i(Ce, {
                      modelValue: u.value.advanced.cacheDuration,
                      "onUpdate:modelValue": I[18] || (I[18] = (L) => u.value.advanced.cacheDuration = L),
                      options: O,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          r.value ? (t(), p(Ve, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: a(() => [
              o("span", {
                style: Xe({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, c(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), fn = /* @__PURE__ */ V(vn, [["__scopeId", "data-v-74f65bd5"]]), hn = { class: "log-filter-bar" }, pn = { class: "log-filter-bar__options" }, yn = ["onClick"], bn = /* @__PURE__ */ D({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: l }) {
    const s = e, r = l, u = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function C(w) {
      return s.activeLevels.includes(w);
    }
    function f(w) {
      r("toggle", w);
    }
    return (w, m) => (t(), n("div", hn, [
      m[1] || (m[1] = o("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      o("div", pn, [
        (t(), n(A, null, q(u, (_) => o("button", {
          key: _,
          class: F(["filter-option", { active: C(_) }]),
          onClick: (M) => f(_)
        }, c(_), 11, yn)), 64)),
        o("button", {
          class: "filter-option filter-option--clear",
          onClick: m[0] || (m[0] = (_) => w.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), wn = /* @__PURE__ */ V(bn, [["__scopeId", "data-v-9052edf8"]]), kn = { class: "log-list" }, _n = /* @__PURE__ */ D({
  __name: "LogList",
  setup(e) {
    return (l, s) => (t(), n("div", kn, [
      K(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), xn = /* @__PURE__ */ V(_n, [["__scopeId", "data-v-0061c330"]]), $n = { class: "log-level__icon" }, Cn = { class: "log-level__text" }, In = /* @__PURE__ */ D({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const l = e, s = B(() => `log-level--${l.level.toLowerCase()}`), r = B(() => {
      switch (l.level) {
        case "ERROR":
          return "✕";
        case "WARNING":
          return "!";
        case "INFO":
          return "→";
        case "DEBUG":
          return "·";
        default:
          return "·";
      }
    });
    return (u, C) => (t(), n("span", {
      class: F(["log-level", s.value])
    }, [
      o("span", $n, c(r.value), 1),
      o("span", Cn, c(e.level), 1)
    ], 2));
  }
}), Sn = /* @__PURE__ */ V(In, [["__scopeId", "data-v-8547c115"]]), En = { class: "log-item__header" }, Ln = { class: "log-item__timestamp" }, zn = {
  key: 0,
  class: "log-item__context"
}, Nn = { class: "log-item__message" }, Mn = /* @__PURE__ */ D({
  __name: "LogItem",
  props: {
    level: {},
    timestamp: {},
    message: {},
    context: {},
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = B(() => `log-item--${s.level.toLowerCase()}`);
    return (u, C) => (t(), n("div", {
      class: F(["log-item", r.value, { clickable: e.clickable }]),
      onClick: C[0] || (C[0] = (f) => e.clickable && u.$emit("click"))
    }, [
      o("div", En, [
        i(Sn, { level: e.level }, null, 8, ["level"]),
        o("span", Ln, c(e.timestamp), 1),
        e.context ? (t(), n("span", zn, c(e.context), 1)) : d("", !0)
      ]),
      o("div", Nn, c(e.message), 1)
    ], 2));
  }
}), Dn = /* @__PURE__ */ V(Mn, [["__scopeId", "data-v-adb291b1"]]), Vn = {
  key: 2,
  class: "load-more"
}, Bn = /* @__PURE__ */ D({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: l } = fe(), s = E([]), r = E(!1), u = E(null), C = E(!1), f = E(["ERROR", "WARNING", "INFO", "DEBUG"]), w = E(100), m = B(() => s.value.filter(($) => $.level === "ERROR").length), _ = B(() => s.value.filter(($) => $.level === "WARNING").length), M = B(() => s.value.filter(($) => $.level === "INFO").length), x = B(() => s.value.filter(($) => $.level === "DEBUG").length), O = B(() => s.value.filter(($) => f.value.includes($.level))), G = B(() => O.value.slice(0, w.value)), Z = B(() => O.value.length > w.value);
    function j($) {
      const b = f.value.indexOf($);
      b >= 0 ? f.value.splice(b, 1) : f.value.push($);
    }
    function N() {
      f.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function I() {
      w.value += 100;
    }
    function L($) {
      try {
        return new Date($).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        });
      } catch {
        return $;
      }
    }
    async function Y() {
      r.value = !0, u.value = null;
      try {
        s.value = await l(void 0, 500);
      } catch ($) {
        u.value = $ instanceof Error ? $.message : "Failed to load workspace logs";
      } finally {
        r.value = !1;
      }
    }
    return ue(Y), ($, b) => (t(), n(A, null, [
      i(ye, null, {
        header: a(() => [
          i(be, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (g) => C.value = !0)
          })
        ]),
        content: a(() => [
          r.value ? (t(), p(Ee, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (t(), p(Le, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            s.value.length > 0 ? (t(), p(Ve, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + c(s.value.length) + " entries • " + c(m.value) + " errors • " + c(_.value) + " warnings • " + c(M.value) + " info • " + c(x.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            i(wn, {
              "active-levels": f.value,
              onToggle: j,
              onClear: N
            }, null, 8, ["active-levels"]),
            O.value.length > 0 ? (t(), p(xn, { key: 1 }, {
              default: a(() => [
                (t(!0), n(A, null, q(G.value, (g, k) => (t(), p(Dn, {
                  key: `${g.timestamp}-${k}`,
                  level: g.level,
                  timestamp: L(g.timestamp),
                  message: g.message,
                  context: g.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            Z.value ? (t(), n("div", Vn, [
              i(W, {
                variant: "secondary",
                onClick: I
              }, {
                default: a(() => [
                  v(" Load More (" + c(O.value.length - w.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            s.value.length > 0 && O.value.length === 0 ? (t(), p(pe, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            s.value.length === 0 ? (t(), p(pe, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Ge, {
        show: C.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (g) => C.value = !1)
      }, {
        content: a(() => [...b[3] || (b[3] = [
          o("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Log Levels:"),
            o("br"),
            o("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            o("br"),
            o("strong", null, "WARNING:"),
            v(" Potential issues or deprecated features"),
            o("br"),
            o("strong", null, "INFO:"),
            v(" General operational information"),
            o("br"),
            o("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          i(W, {
            variant: "primary",
            onClick: b[1] || (b[1] = (g) => C.value = !1)
          }, {
            default: a(() => [...b[4] || (b[4] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), On = /* @__PURE__ */ V(Bn, [["__scopeId", "data-v-55d656f1"]]), Un = { class: "header-info" }, Tn = { class: "commit-hash" }, Rn = {
  key: 0,
  class: "commit-refs"
}, Wn = { class: "commit-message" }, An = { class: "commit-date" }, Pn = {
  key: 0,
  class: "loading"
}, Fn = {
  key: 1,
  class: "changes-section"
}, Gn = { class: "stats-row" }, Hn = { class: "stat" }, jn = { class: "stat insertions" }, Kn = { class: "stat deletions" }, qn = {
  key: 0,
  class: "change-group"
}, Jn = {
  key: 1,
  class: "change-group"
}, Yn = {
  key: 0,
  class: "version"
}, Zn = {
  key: 2,
  class: "change-group"
}, Xn = { class: "change-item" }, Qn = /* @__PURE__ */ D({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: s } = fe(), r = E(null), u = E(!0), C = B(() => {
      if (!r.value) return !1;
      const w = r.value.changes.workflows;
      return w.added.length > 0 || w.modified.length > 0 || w.deleted.length > 0;
    }), f = B(() => {
      if (!r.value) return !1;
      const w = r.value.changes.nodes;
      return w.added.length > 0 || w.removed.length > 0;
    });
    return ue(async () => {
      try {
        r.value = await s(l.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (w, m) => (t(), p(Pe, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (_) => w.$emit("close"))
    }, {
      header: a(() => {
        var _, M, x, O;
        return [
          o("div", Un, [
            m[4] || (m[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", Tn, c(((_ = r.value) == null ? void 0 : _.short_hash) || e.commit.short_hash || ((M = e.commit.hash) == null ? void 0 : M.slice(0, 7))), 1),
            (O = (x = r.value) == null ? void 0 : x.refs) != null && O.length ? (t(), n("span", Rn, [
              (t(!0), n(A, null, q(r.value.refs, (G) => (t(), n("span", {
                key: G,
                class: "ref-badge"
              }, c(G), 1))), 128))
            ])) : d("", !0)
          ]),
          i(re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (G) => w.$emit("close"))
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
        var _, M;
        return [
          o("div", Wn, c(((_ = r.value) == null ? void 0 : _.message) || e.commit.message), 1),
          o("div", An, c(((M = r.value) == null ? void 0 : M.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          u.value ? (t(), n("div", Pn, "Loading details...")) : r.value ? (t(), n("div", Fn, [
            o("div", Gn, [
              o("span", Hn, c(r.value.stats.files_changed) + " files", 1),
              o("span", jn, "+" + c(r.value.stats.insertions), 1),
              o("span", Kn, "-" + c(r.value.stats.deletions), 1)
            ]),
            C.value ? (t(), n("div", qn, [
              i(ke, { variant: "section" }, {
                default: a(() => [...m[6] || (m[6] = [
                  v("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(A, null, q(r.value.changes.workflows.added, (x) => (t(), n("div", {
                key: "add-" + x,
                class: "change-item added"
              }, [
                m[7] || (m[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(x), 1)
              ]))), 128)),
              (t(!0), n(A, null, q(r.value.changes.workflows.modified, (x) => (t(), n("div", {
                key: "mod-" + x,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, c(x), 1)
              ]))), 128)),
              (t(!0), n(A, null, q(r.value.changes.workflows.deleted, (x) => (t(), n("div", {
                key: "del-" + x,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(x), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (t(), n("div", Jn, [
              i(ke, { variant: "section" }, {
                default: a(() => [...m[10] || (m[10] = [
                  v("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(A, null, q(r.value.changes.nodes.added, (x) => (t(), n("div", {
                key: "add-" + x.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(x.name), 1),
                x.version ? (t(), n("span", Yn, "(" + c(x.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (t(!0), n(A, null, q(r.value.changes.nodes.removed, (x) => (t(), n("div", {
                key: "rem-" + x.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(x.name), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.changes.models.resolved > 0 ? (t(), n("div", Zn, [
              i(ke, { variant: "section" }, {
                default: a(() => [...m[13] || (m[13] = [
                  v("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", Xn, [
                m[14] || (m[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, c(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: a(() => [
        i(re, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (_) => w.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...m[15] || (m[15] = [
            v(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        i(re, {
          variant: "primary",
          onClick: m[2] || (m[2] = (_) => w.$emit("checkout", e.commit))
        }, {
          default: a(() => [...m[16] || (m[16] = [
            v(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), el = /* @__PURE__ */ V(Qn, [["__scopeId", "data-v-d256ff6d"]]), tl = { class: "dialog-message" }, ol = {
  key: 0,
  class: "dialog-details"
}, al = {
  key: 1,
  class: "dialog-warning"
}, sl = /* @__PURE__ */ D({
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
    return (l, s) => (t(), p(Pe, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => l.$emit("cancel"))
    }, {
      body: a(() => [
        o("p", tl, c(e.message), 1),
        e.details && e.details.length ? (t(), n("div", ol, [
          (t(!0), n(A, null, q(e.details, (r, u) => (t(), n("div", {
            key: u,
            class: "detail-item"
          }, " • " + c(r), 1))), 128))
        ])) : d("", !0),
        e.warning ? (t(), n("p", al, [
          s[4] || (s[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          v(" " + c(e.warning), 1)
        ])) : d("", !0)
      ]),
      footer: a(() => [
        i(re, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => l.$emit("cancel"))
        }, {
          default: a(() => [
            v(c(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), p(re, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => l.$emit("secondary"))
        }, {
          default: a(() => [
            v(c(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        i(re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => l.$emit("confirm"))
        }, {
          default: a(() => [
            v(c(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), nl = /* @__PURE__ */ V(sl, [["__scopeId", "data-v-3670b9f5"]]), ll = { class: "comfygit-panel" }, rl = { class: "panel-header" }, il = { class: "header-left" }, cl = {
  key: 0,
  class: "header-info"
}, dl = { class: "header-actions" }, ul = { class: "env-switcher" }, ml = {
  key: 0,
  class: "header-info"
}, gl = { class: "branch-name" }, vl = { class: "panel-main" }, fl = { class: "sidebar" }, hl = { class: "sidebar-section" }, pl = { class: "sidebar-section" }, yl = { class: "sidebar-section" }, bl = { class: "content-area" }, wl = {
  key: 0,
  class: "error-message"
}, kl = {
  key: 1,
  class: "loading"
}, _l = {
  key: 6,
  class: "view-placeholder"
}, xl = {
  key: 7,
  class: "view-placeholder"
}, $l = {
  key: 11,
  class: "view-placeholder"
}, Cl = {
  key: 12,
  class: "view-placeholder"
}, Il = {
  key: 13,
  class: "view-placeholder"
}, Sl = { class: "dialog-content env-selector-dialog" }, El = { class: "dialog-header" }, Ll = { class: "dialog-body" }, zl = { class: "env-list" }, Nl = { class: "env-info" }, Ml = { class: "env-name-row" }, Dl = { class: "env-indicator" }, Vl = { class: "env-name" }, Bl = {
  key: 0,
  class: "env-branch"
}, Ol = {
  key: 1,
  class: "current-label"
}, Ul = { class: "env-stats" }, Tl = ["onClick"], Rl = { class: "toast-container" }, Wl = { class: "toast-icon" }, Al = { class: "toast-message" }, Pl = /* @__PURE__ */ D({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const s = l, {
      getStatus: r,
      getHistory: u,
      exportEnv: C,
      getBranches: f,
      checkout: w,
      createBranch: m,
      switchBranch: _,
      getEnvironments: M
    } = fe(), x = E(null), O = E([]), G = E([]), Z = E([]), j = B(() => Z.value.find((T) => T.is_current)), N = E(!1), I = E(null), L = E(null), Y = E(!1), $ = E("status"), b = E("this-env");
    function g(T, h) {
      $.value = T, b.value = h;
    }
    function k(T) {
      const ae = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[T];
      ae && g(ae.view, ae.section);
    }
    function y() {
      g("branches", "this-env");
    }
    const S = E(null), z = E([]);
    let ie = 0;
    function P(T, h = "info", ae = 3e3) {
      const ne = ++ie;
      return z.value.push({ id: ne, message: T, type: h }), ae > 0 && setTimeout(() => {
        z.value = z.value.filter((xe) => xe.id !== ne);
      }, ae), ne;
    }
    function U(T) {
      z.value = z.value.filter((h) => h.id !== T);
    }
    function J(T) {
      switch (T) {
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
    const ge = B(() => {
      if (!x.value) return "neutral";
      const T = x.value.workflows, h = T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? h ? "warning" : "success" : "error";
    });
    B(() => x.value ? ge.value === "success" ? "All synced" : ge.value === "warning" ? "Uncommitted changes" : ge.value === "error" ? "Not synced" : "" : "");
    async function _e() {
      N.value = !0, I.value = null;
      try {
        const [T, h, ae, ne] = await Promise.all([
          r(),
          u(),
          f(),
          M()
        ]);
        x.value = T, O.value = h.commits, G.value = ae.branches, Z.value = ne, s("statusUpdate", T);
      } catch (T) {
        I.value = T instanceof Error ? T.message : "Failed to load status", x.value = null, O.value = [], G.value = [];
      } finally {
        N.value = !1;
      }
    }
    function He(T) {
      L.value = T;
    }
    async function Be(T) {
      var ae;
      L.value = null;
      const h = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      S.value = {
        title: h ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: h ? "You have uncommitted changes that will be lost." : `Checkout commit ${T.short_hash || ((ae = T.hash) == null ? void 0 : ae.slice(0, 7))}?`,
        details: h ? ze() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: h ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: h,
        onConfirm: async () => {
          var H;
          S.value = null;
          const ne = P(`Checking out ${T.short_hash || ((H = T.hash) == null ? void 0 : H.slice(0, 7))}...`, "info", 0), xe = await w(T.hash, h);
          U(ne), xe.status === "success" ? P("Restarting ComfyUI...", "success") : P(xe.message || "Checkout failed", "error");
        }
      };
    }
    async function R(T) {
      const h = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      S.value = {
        title: h ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: h ? "You have uncommitted changes." : `Switch to branch "${T}"?`,
        details: h ? ze() : void 0,
        warning: h ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: h ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          S.value = null;
          const ae = P(`Switching to ${T}...`, "info", 0), ne = await _(T, h);
          U(ae), ne.status === "success" ? P("Restarting ComfyUI...", "success") : P(ne.message || "Branch switch failed", "error");
        }
      };
    }
    async function X(T) {
      const h = P(`Creating branch ${T}...`, "info", 0), ae = await m(T);
      U(h), ae.status === "success" ? (P(`Branch "${T}" created`, "success"), await _e()) : P(ae.message || "Failed to create branch", "error");
    }
    async function le(T) {
      L.value = null;
      const h = prompt("Enter branch name:");
      if (h) {
        const ae = P(`Creating branch ${h}...`, "info", 0), ne = await m(h, T.hash);
        U(ae), ne.status === "success" ? (P(`Branch "${h}" created from ${T.short_hash}`, "success"), await _e()) : P(ne.message || "Failed to create branch", "error");
      }
    }
    async function Oe(T) {
      Y.value = !1, P("Environment switching not yet implemented", "warning");
    }
    function ze() {
      if (!x.value) return [];
      const T = [], h = x.value.workflows;
      return h.new.length && T.push(`${h.new.length} new workflow(s)`), h.modified.length && T.push(`${h.modified.length} modified workflow(s)`), h.deleted.length && T.push(`${h.deleted.length} deleted workflow(s)`), T;
    }
    async function dt() {
      const T = P("Exporting environment...", "info", 0);
      try {
        const h = await C();
        U(T), h.status === "success" ? (P("Export complete", "success"), alert(`Export successful!

Saved to: ${h.path}

Models without sources: ${h.models_without_sources}`)) : (P("Export failed", "error"), alert(`Export failed: ${h.message}`));
      } catch (h) {
        U(T), P("Export error", "error"), alert(`Export error: ${h instanceof Error ? h.message : "Unknown error"}`);
      }
    }
    return ue(_e), (T, h) => {
      var ae, ne, xe;
      return t(), n("div", ll, [
        o("div", rl, [
          o("div", il, [
            h[20] || (h[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (t(), n("div", cl)) : d("", !0)
          ]),
          o("div", dl, [
            o("button", {
              class: F(["icon-btn", { spinning: N.value }]),
              onClick: _e,
              title: "Refresh"
            }, [...h[21] || (h[21] = [
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
              onClick: h[0] || (h[0] = (H) => s("close")),
              title: "Close"
            }, [...h[22] || (h[22] = [
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
        o("div", ul, [
          h[24] || (h[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: h[1] || (h[1] = (H) => Y.value = !0)
          }, [
            x.value ? (t(), n("div", ml, [
              o("span", null, c(((ae = j.value) == null ? void 0 : ae.name) || ((ne = x.value) == null ? void 0 : ne.environment) || "Loading..."), 1),
              o("span", gl, "(" + c(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            h[23] || (h[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", vl, [
          o("div", fl, [
            o("div", hl, [
              h[25] || (h[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "status" && b.value === "this-env" }]),
                onClick: h[2] || (h[2] = (H) => g("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "workflows" }]),
                onClick: h[3] || (h[3] = (H) => g("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "models-env" }]),
                onClick: h[4] || (h[4] = (H) => g("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "branches" }]),
                onClick: h[5] || (h[5] = (H) => g("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "history" }]),
                onClick: h[6] || (h[6] = (H) => g("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "nodes" }]),
                onClick: h[7] || (h[7] = (H) => g("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "debug-env" }]),
                onClick: h[8] || (h[8] = (H) => g("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            h[28] || (h[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", pl, [
              h[26] || (h[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "environments" }]),
                onClick: h[9] || (h[9] = (H) => g("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "model-index" }]),
                onClick: h[10] || (h[10] = (H) => g("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "settings" }]),
                onClick: h[11] || (h[11] = (H) => g("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "debug-workspace" }]),
                onClick: h[12] || (h[12] = (H) => g("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            h[29] || (h[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", yl, [
              h[27] || (h[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "export" }]),
                onClick: h[13] || (h[13] = (H) => g("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "import" }]),
                onClick: h[14] || (h[14] = (H) => g("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: F(["sidebar-item", { active: $.value === "remotes" }]),
                onClick: h[15] || (h[15] = (H) => g("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", bl, [
            I.value ? (t(), n("div", wl, c(I.value), 1)) : !x.value && $.value === "status" ? (t(), n("div", kl, " Loading status... ")) : (t(), n(A, { key: 2 }, [
              $.value === "status" ? (t(), p(wo, {
                key: 0,
                status: x.value,
                onSwitchBranch: y
              }, null, 8, ["status"])) : $.value === "workflows" ? (t(), p(Ns, {
                key: 1,
                onRefresh: _e
              })) : $.value === "models-env" ? (t(), p(Gs, {
                key: 2,
                onNavigate: k
              })) : $.value === "branches" ? (t(), p(Bo, {
                key: 3,
                branches: G.value,
                current: ((xe = x.value) == null ? void 0 : xe.branch) || null,
                onSwitch: R,
                onCreate: X
              }, null, 8, ["branches", "current"])) : $.value === "history" ? (t(), p(Ko, {
                key: 4,
                commits: O.value,
                onSelect: He,
                onCheckout: Be
              }, null, 8, ["commits"])) : $.value === "nodes" ? (t(), p(Zs, { key: 5 })) : $.value === "debug-env" ? (t(), n("div", _l, [...h[30] || (h[30] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : $.value === "environments" ? (t(), n("div", xl, [...h[31] || (h[31] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : $.value === "model-index" ? (t(), p(js, { key: 8 })) : $.value === "settings" ? (t(), p(fn, { key: 9 })) : $.value === "debug-workspace" ? (t(), p(On, { key: 10 })) : $.value === "export" ? (t(), n("div", $l, [
                h[33] || (h[33] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: dt
                }, [...h[32] || (h[32] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  v(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : $.value === "import" ? (t(), n("div", Cl, [...h[34] || (h[34] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : $.value === "remotes" ? (t(), n("div", Il, [...h[35] || (h[35] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : d("", !0)
            ], 64))
          ])
        ]),
        L.value ? (t(), p(el, {
          key: 0,
          commit: L.value,
          onClose: h[16] || (h[16] = (H) => L.value = null),
          onCheckout: Be,
          onCreateBranch: le
        }, null, 8, ["commit"])) : d("", !0),
        S.value ? (t(), p(nl, {
          key: 1,
          title: S.value.title,
          message: S.value.message,
          details: S.value.details,
          warning: S.value.warning,
          confirmLabel: S.value.confirmLabel,
          cancelLabel: S.value.cancelLabel,
          secondaryLabel: S.value.secondaryLabel,
          secondaryAction: S.value.secondaryAction,
          destructive: S.value.destructive,
          onConfirm: S.value.onConfirm,
          onCancel: h[17] || (h[17] = (H) => S.value = null),
          onSecondary: S.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        Y.value ? (t(), n("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: h[19] || (h[19] = Se((H) => Y.value = !1, ["self"]))
        }, [
          o("div", Sl, [
            o("div", El, [
              h[37] || (h[37] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: h[18] || (h[18] = (H) => Y.value = !1)
              }, [...h[36] || (h[36] = [
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
            o("div", Ll, [
              h[38] || (h[38] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", zl, [
                (t(!0), n(A, null, q(Z.value, (H) => (t(), n("div", {
                  key: H.name,
                  class: F(["env-item", { current: H.is_current }])
                }, [
                  o("div", Nl, [
                    o("div", Ml, [
                      o("span", Dl, c(H.is_current ? "●" : "○"), 1),
                      o("span", Vl, c(H.name), 1),
                      H.current_branch ? (t(), n("span", Bl, "(" + c(H.current_branch) + ")", 1)) : d("", !0),
                      H.is_current ? (t(), n("span", Ol, "CURRENT")) : d("", !0)
                    ]),
                    o("div", Ul, c(H.workflow_count) + " workflows • " + c(H.node_count) + " nodes ", 1)
                  ]),
                  H.is_current ? d("", !0) : (t(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (wr) => Oe(H.name)
                  }, " SWITCH ", 8, Tl))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        o("div", Rl, [
          i(mt, { name: "toast" }, {
            default: a(() => [
              (t(!0), n(A, null, q(z.value, (H) => (t(), n("div", {
                key: H.id,
                class: F(["toast", H.type])
              }, [
                o("span", Wl, c(J(H.type)), 1),
                o("span", Al, c(H.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Fl = /* @__PURE__ */ V(Pl, [["__scopeId", "data-v-4c7fdd1a"]]), Gl = { class: "base-textarea-wrapper" }, Hl = ["value", "rows", "placeholder", "disabled", "maxlength"], jl = {
  key: 0,
  class: "base-textarea-count"
}, Kl = /* @__PURE__ */ D({
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
    return (l, s) => (t(), n("div", Gl, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = De(Se((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = De(Se((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Hl),
      e.showCharCount && e.maxLength ? (t(), n("div", jl, c(e.modelValue.length) + " / " + c(e.maxLength), 1)) : d("", !0)
    ]));
  }
}), ql = /* @__PURE__ */ V(Kl, [["__scopeId", "data-v-5516e6fc"]]), Jl = { class: "commit-popover" }, Yl = { class: "popover-header" }, Zl = { class: "popover-body" }, Xl = {
  key: 0,
  class: "changes-summary"
}, Ql = {
  key: 0,
  class: "change-item"
}, er = {
  key: 1,
  class: "change-item"
}, tr = {
  key: 2,
  class: "change-item"
}, or = {
  key: 3,
  class: "change-item"
}, ar = {
  key: 4,
  class: "change-item"
}, sr = {
  key: 1,
  class: "no-changes"
}, nr = {
  key: 2,
  class: "loading"
}, lr = { class: "message-section" }, rr = { class: "popover-footer" }, ir = /* @__PURE__ */ D({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const s = e, r = l, { commit: u } = fe(), C = E(""), f = E(!1), w = E(null), m = B(() => {
      if (!s.status) return !1;
      const M = s.status.workflows;
      return M.new.length > 0 || M.modified.length > 0 || M.deleted.length > 0 || s.status.has_changes;
    });
    async function _() {
      var M, x, O;
      if (!(!m.value || !C.value.trim() || f.value)) {
        f.value = !0, w.value = null;
        try {
          const G = await u(C.value.trim());
          G.status === "success" ? (w.value = {
            type: "success",
            message: `Committed: ${((M = G.summary) == null ? void 0 : M.new) || 0} new, ${((x = G.summary) == null ? void 0 : x.modified) || 0} modified, ${((O = G.summary) == null ? void 0 : O.deleted) || 0} deleted`
          }, C.value = "", setTimeout(() => r("committed"), 1e3)) : G.status === "no_changes" ? w.value = { type: "error", message: "No changes to commit" } : w.value = { type: "error", message: G.message || "Commit failed" };
        } catch (G) {
          w.value = { type: "error", message: G instanceof Error ? G.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (M, x) => (t(), n("div", Jl, [
      o("div", Yl, [
        x[4] || (x[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: x[0] || (x[0] = (O) => r("close"))
        }, [...x[3] || (x[3] = [
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
      o("div", Zl, [
        e.status && m.value ? (t(), n("div", Xl, [
          e.status.workflows.new.length ? (t(), n("div", Ql, [
            x[5] || (x[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          e.status.workflows.modified.length ? (t(), n("div", er, [
            x[6] || (x[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, c(e.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          e.status.workflows.deleted.length ? (t(), n("div", tr, [
            x[7] || (x[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_added.length ? (t(), n("div", or, [
            x[8] || (x[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), n("div", ar, [
            x[9] || (x[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : e.status ? (t(), n("div", sr, " No changes to commit ")) : (t(), n("div", nr, " Loading... ")),
        o("div", lr, [
          i(ql, {
            modelValue: C.value,
            "onUpdate:modelValue": x[1] || (x[1] = (O) => C.value = O),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || f.value,
            rows: 3,
            onCtrlEnter: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        w.value ? (t(), n("div", {
          key: 3,
          class: F(["result", w.value.type])
        }, c(w.value.message), 3)) : d("", !0)
      ]),
      o("div", rr, [
        i(re, {
          variant: "secondary",
          onClick: x[2] || (x[2] = (O) => r("close"))
        }, {
          default: a(() => [...x[10] || (x[10] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        i(re, {
          variant: "primary",
          disabled: !m.value || !C.value.trim() || f.value,
          loading: f.value,
          onClick: _
        }, {
          default: a(() => [
            v(c(f.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), cr = /* @__PURE__ */ V(ir, [["__scopeId", "data-v-4f587977"]]), dr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}', ur = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', mr = {
  comfy: dr,
  phosphor: ur
}, Qe = "comfy", lt = "comfygit-theme";
let $e = null, rt = Qe;
function gr() {
  try {
    const e = localStorage.getItem(lt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Qe;
}
function it(e = Qe) {
  $e && $e.remove(), $e = document.createElement("style"), $e.id = "comfygit-theme-styles", $e.setAttribute("data-theme", e), $e.textContent = mr[e], document.head.appendChild($e), document.body.setAttribute("data-comfygit-theme", e), rt = e;
  try {
    localStorage.setItem(lt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function vr() {
  return rt;
}
function fr(e) {
  it(e);
}
const et = document.createElement("link");
et.rel = "stylesheet";
et.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(et);
const hr = gr();
it(hr);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), fr(e);
  },
  getTheme: () => {
    const e = vr();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let me = null, ce = null, Me = null;
const Ie = E(null);
async function Ye() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && (Ie.value = await l.json());
  } catch {
  }
}
function pr() {
  if (!Ie.value) return !1;
  const e = Ie.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Ie.value.has_changes;
}
function yr() {
  me && me.remove(), me = document.createElement("div"), me.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", me.appendChild(e), me.addEventListener("click", (r) => {
    r.target === me && qe();
  });
  const l = (r) => {
    r.key === "Escape" && (qe(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), at({
    render: () => st(Fl, {
      onClose: qe,
      onStatusUpdate: (r) => {
        Ie.value = r, Ae();
      }
    })
  }).mount(e), document.body.appendChild(me);
}
function qe() {
  me && (me.remove(), me = null);
}
function br(e) {
  Ne(), ce = document.createElement("div"), ce.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  ce.style.position = "fixed", ce.style.top = `${l.bottom + 8}px`, ce.style.right = `${window.innerWidth - l.right}px`, ce.style.zIndex = "10001";
  const s = (u) => {
    ce && !ce.contains(u.target) && u.target !== e && (Ne(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (u) => {
    u.key === "Escape" && (Ne(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Me = at({
    render: () => st(cr, {
      status: Ie.value,
      onClose: Ne,
      onCommitted: () => {
        Ne(), Ye().then(Ae);
      }
    })
  }), Me.mount(ce), document.body.appendChild(ce);
}
function Ne() {
  Me && (Me.unmount(), Me = null), ce && (ce.remove(), ce = null);
}
let he = null;
function Ae() {
  if (!he) return;
  const e = he.querySelector(".commit-indicator");
  e && (e.style.display = pr() ? "block" : "none");
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
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = yr, he = document.createElement("button"), he.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", he.innerHTML = 'Commit <span class="commit-indicator"></span>', he.title = "Quick Commit", he.onclick = () => br(he), e.appendChild(l), e.appendChild(he), (r = (s = je.menu) == null ? void 0 : s.settingsGroup) != null && r.element && (je.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Ye(), Ae(), setInterval(async () => {
      await Ye(), Ae();
    }, 3e4);
  }
});
