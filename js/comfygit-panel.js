import { app as We } from "../../scripts/app.js";
import { defineComponent as T, createElementBlock as n, openBlock as t, createCommentVNode as i, createElementVNode as o, renderSlot as G, createBlock as v, resolveDynamicComponent as He, normalizeClass as F, withCtx as a, toDisplayString as c, createVNode as _, createTextVNode as f, computed as V, Fragment as A, renderList as q, ref as E, onMounted as ue, withKeys as Ee, withModifiers as xe, onUnmounted as lt, Teleport as Ze, normalizeStyle as Je, TransitionGroup as rt, createApp as Xe, h as Qe } from "vue";
const it = { class: "panel-layout" }, ct = {
  key: 0,
  class: "panel-layout-header"
}, dt = {
  key: 1,
  class: "panel-layout-search"
}, ut = { class: "panel-layout-content" }, mt = {
  key: 2,
  class: "panel-layout-footer"
}, gt = /* @__PURE__ */ T({
  __name: "PanelLayout",
  setup(e) {
    return (l, s) => (t(), n("div", it, [
      l.$slots.header ? (t(), n("div", ct, [
        G(l.$slots, "header", {}, void 0, !0)
      ])) : i("", !0),
      l.$slots.search ? (t(), n("div", dt, [
        G(l.$slots, "search", {}, void 0, !0)
      ])) : i("", !0),
      o("div", ut, [
        G(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), n("div", mt, [
        G(l.$slots, "footer", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), D = (e, l) => {
  const s = e.__vccOpts || e;
  for (const [r, $] of l)
    s[r] = $;
  return s;
}, we = /* @__PURE__ */ D(gt, [["__scopeId", "data-v-21565df9"]]), ft = {
  key: 0,
  class: "panel-title-prefix"
}, ht = {
  key: 1,
  class: "panel-title-prefix-theme"
}, vt = /* @__PURE__ */ T({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, s) => (t(), v(He(`h${e.level}`), {
      class: F(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (t(), n("span", ft, c(e.prefix), 1)) : (t(), n("span", ht)),
        G(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pt = /* @__PURE__ */ D(vt, [["__scopeId", "data-v-c3875efc"]]), yt = ["title"], bt = ["width", "height"], wt = /* @__PURE__ */ T({
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
      ])], 8, bt))
    ], 8, yt));
  }
}), kt = /* @__PURE__ */ D(wt, [["__scopeId", "data-v-6fc7f16d"]]), _t = { class: "header-left" }, $t = {
  key: 0,
  class: "header-actions"
}, xt = /* @__PURE__ */ T({
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
      o("div", _t, [
        _(pt, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            f(c(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), v(kt, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => l.$emit("info-click"))
        })) : i("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", $t, [
        G(l.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ D(xt, [["__scopeId", "data-v-55a62cd6"]]), Ct = {
  key: 0,
  class: "section-title-count"
}, St = {
  key: 1,
  class: "section-title-icon"
}, It = /* @__PURE__ */ T({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), v(He(`h${e.level}`), {
      class: F(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: a(() => [
        G(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", Ct, "(" + c(e.count) + ")", 1)) : i("", !0),
        e.clickable ? (t(), n("span", St, c(e.expanded ? "▼" : "▸"), 1)) : i("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Pe = /* @__PURE__ */ D(It, [["__scopeId", "data-v-559361eb"]]), Et = { class: "status-grid" }, zt = { class: "status-grid__column" }, Lt = { class: "status-grid__title" }, Mt = { class: "status-grid__column status-grid__column--right" }, Nt = { class: "status-grid__title" }, Bt = /* @__PURE__ */ T({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, s) => (t(), n("div", Et, [
      o("div", zt, [
        o("h4", Lt, c(e.leftTitle), 1),
        G(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Mt, [
        o("h4", Nt, c(e.rightTitle), 1),
        G(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ D(Bt, [["__scopeId", "data-v-fe556068"]]), Dt = {
  key: 0,
  class: "status-item__icon"
}, Ot = {
  key: 1,
  class: "status-item__count"
}, Ut = { class: "status-item__label" }, Rt = /* @__PURE__ */ T({
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
    return (r, $) => (t(), n("div", {
      class: F(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), n("span", Dt, c(e.icon), 1)) : i("", !0),
      e.count !== void 0 ? (t(), n("span", Ot, c(e.count), 1)) : i("", !0),
      o("span", Ut, c(e.label), 1)
    ], 2));
  }
}), he = /* @__PURE__ */ D(Rt, [["__scopeId", "data-v-6f929183"]]), Wt = { class: "issue-card__header" }, Vt = { class: "issue-card__icon" }, At = { class: "issue-card__title" }, Pt = {
  key: 0,
  class: "issue-card__content"
}, Ft = {
  key: 0,
  class: "issue-card__description"
}, Ht = {
  key: 1,
  class: "issue-card__items"
}, jt = {
  key: 2,
  class: "issue-card__actions"
}, Gt = /* @__PURE__ */ T({
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
    return (r, $) => (t(), n("div", {
      class: F(["issue-card", s.value])
    }, [
      o("div", Wt, [
        o("span", Vt, c(e.icon), 1),
        o("h4", At, c(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), n("div", Pt, [
        e.description ? (t(), n("p", Ft, c(e.description), 1)) : i("", !0),
        G(r.$slots, "default", {}, void 0, !0)
      ])) : i("", !0),
      e.items && e.items.length ? (t(), n("div", Ht, [
        (t(!0), n(A, null, q(e.items, (C, h) => (t(), n("div", {
          key: h,
          class: "issue-card__item"
        }, [
          $[0] || ($[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, c(C), 1)
        ]))), 128))
      ])) : i("", !0),
      r.$slots.actions ? (t(), n("div", jt, [
        G(r.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), Ve = /* @__PURE__ */ D(Gt, [["__scopeId", "data-v-df6aa348"]]), Kt = ["type", "disabled"], qt = {
  key: 0,
  class: "spinner"
}, Yt = /* @__PURE__ */ T({
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
      e.loading ? (t(), n("span", qt)) : i("", !0),
      e.loading ? i("", !0) : G(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Kt));
  }
}), U = /* @__PURE__ */ D(Yt, [["__scopeId", "data-v-772abe47"]]), Zt = { class: "empty-state" }, Jt = {
  key: 0,
  class: "empty-icon"
}, Xt = { class: "empty-message" }, Qt = /* @__PURE__ */ T({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, s) => (t(), n("div", Zt, [
      e.icon ? (t(), n("div", Jt, c(e.icon), 1)) : i("", !0),
      o("p", Xt, c(e.message), 1),
      e.actionLabel ? (t(), v(U, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("action"))
      }, {
        default: a(() => [
          f(c(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : i("", !0)
    ]));
  }
}), _e = /* @__PURE__ */ D(Qt, [["__scopeId", "data-v-4466284f"]]), eo = { class: "branch-indicator" }, to = { class: "branch-indicator__info" }, oo = { class: "branch-indicator__label" }, ao = { class: "branch-indicator__name" }, so = {
  key: 0,
  class: "branch-indicator__remote"
}, no = {
  key: 0,
  class: "branch-indicator__status"
}, lo = {
  key: 0,
  class: "branch-indicator__ahead"
}, ro = {
  key: 1,
  class: "branch-indicator__behind"
}, io = {
  key: 1,
  class: "branch-indicator__actions"
}, co = /* @__PURE__ */ T({
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
    return (l, s) => (t(), n("div", eo, [
      o("div", to, [
        o("span", oo, c(e.label), 1),
        o("span", ao, c(e.branchName), 1),
        e.remote ? (t(), n("span", so, "@" + c(e.remote), 1)) : i("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), n("div", no, [
        e.commitsAhead ? (t(), n("span", lo, " ↑ " + c(e.commitsAhead) + " ahead ", 1)) : i("", !0),
        e.commitsBehind ? (t(), n("span", ro, " ↓ " + c(e.commitsBehind) + " behind ", 1)) : i("", !0)
      ])) : i("", !0),
      l.$slots.actions ? (t(), n("div", io, [
        G(l.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), uo = /* @__PURE__ */ D(co, [["__scopeId", "data-v-cb8dd50e"]]), mo = { style: { "margin-top": "var(--cg-space-1)" } }, go = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, fo = /* @__PURE__ */ T({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const s = e, r = V(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), $ = V(() => {
      const d = s.status.git_changes;
      return d.nodes_added.length > 0 || d.nodes_removed.length > 0 || d.workflow_changes || d.has_other_changes;
    }), C = V(() => {
      const d = s.status.git_changes, k = s.status.workflows;
      return (d.workflow_changes || d.has_other_changes) && k.new.length === 0 && k.modified.length === 0 && k.deleted.length === 0;
    }), h = V(() => s.status.missing_models_count > 0 || $.value || !s.status.comparison.is_synced), y = V(() => {
      const d = [];
      return s.status.workflows.new.length > 0 && d.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && d.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && d.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && d.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && d.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${d.length > 0 ? d.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (d, k) => (t(), v(we, null, {
      header: a(() => [
        _(ke, { title: "STATUS" })
      ]),
      content: a(() => [
        _(Pe, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [...k[7] || (k[7] = [
            f(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        _(Tt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (t(), v(he, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : i("", !0),
            e.status.workflows.modified.length ? (t(), v(he, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : i("", !0),
            e.status.workflows.deleted.length ? (t(), v(he, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : i("", !0),
            _(he, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (t(), v(he, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : i("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), v(he, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : i("", !0),
            C.value ? (t(), v(he, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : i("", !0),
            $.value ? i("", !0) : (t(), v(he, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", mo, [
          _(uo, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: k[0] || (k[0] = (z) => d.$emit("switch-branch"))
              }, {
                default: a(() => [...k[8] || (k[8] = [
                  f(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        h.value ? (t(), n("div", go, [
          _(Pe, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [...k[9] || (k[9] = [
              f(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), v(Ve, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: a(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: k[1] || (k[1] = (z) => d.$emit("view-workflows"))
              }, {
                default: a(() => [...k[10] || (k[10] = [
                  f(" View Details ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: k[2] || (k[2] = (z) => d.$emit("resolve-models"))
              }, {
                default: a(() => [...k[11] || (k[11] = [
                  f(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : i("", !0),
          $.value ? (t(), v(Ve, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: y.value
          }, {
            actions: a(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: k[3] || (k[3] = (z) => d.$emit("view-history"))
              }, {
                default: a(() => [...k[12] || (k[12] = [
                  f(" View Changes ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: k[4] || (k[4] = (z) => d.$emit("commit-changes"))
              }, {
                default: a(() => [...k[13] || (k[13] = [
                  f(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : i("", !0),
          e.status.comparison.is_synced ? i("", !0) : (t(), v(Ve, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: a(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: k[5] || (k[5] = (z) => d.$emit("view-debug"))
              }, {
                default: a(() => [...k[14] || (k[14] = [
                  f(" View Logs ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: k[6] || (k[6] = (z) => d.$emit("sync-environment"))
              }, {
                default: a(() => [...k[15] || (k[15] = [
                  f(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : i("", !0),
        !h.value && !$.value ? (t(), v(_e, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : i("", !0)
      ]),
      _: 1
    }));
  }
}), ho = /* @__PURE__ */ D(fo, [["__scopeId", "data-v-2045da26"]]), vo = ["type", "value", "placeholder", "disabled"], po = /* @__PURE__ */ T({
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
    const r = e, $ = s, C = E(null);
    function h(y) {
      const d = y.target.value;
      $("update:modelValue", d);
    }
    return ue(() => {
      r.autoFocus && C.value && C.value.focus();
    }), l({
      focus: () => {
        var y;
        return (y = C.value) == null ? void 0 : y.focus();
      },
      blur: () => {
        var y;
        return (y = C.value) == null ? void 0 : y.blur();
      }
    }), (y, d) => (t(), n("input", {
      ref_key: "inputRef",
      ref: C,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: F(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: h,
      onKeyup: [
        d[0] || (d[0] = Ee((k) => y.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ee((k) => y.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (k) => y.$emit("focus")),
      onBlur: d[3] || (d[3] = (k) => y.$emit("blur"))
    }, null, 42, vo));
  }
}), yo = /* @__PURE__ */ D(po, [["__scopeId", "data-v-0380d08f"]]), bo = { class: "branch-create-form" }, wo = { class: "form-actions" }, ko = /* @__PURE__ */ T({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const s = l, r = E(""), $ = V(() => {
      const y = r.value.trim();
      return y.length > 0 && !y.startsWith("-") && !y.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(y);
    });
    function C() {
      $.value && (s("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", s("cancel");
    }
    return (y, d) => (t(), n("div", bo, [
      _(yo, {
        modelValue: r.value,
        "onUpdate:modelValue": d[0] || (d[0] = (k) => r.value = k),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: C,
        onEscape: h
      }, null, 8, ["modelValue"]),
      o("div", wo, [
        _(U, {
          variant: "primary",
          size: "sm",
          disabled: !$.value,
          onClick: C
        }, {
          default: a(() => [...d[1] || (d[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        _(U, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: a(() => [...d[2] || (d[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _o = /* @__PURE__ */ D(ko, [["__scopeId", "data-v-7c500394"]]), $o = { class: "branch-list-item__indicator" }, xo = { class: "branch-list-item__name" }, Co = {
  key: 0,
  class: "branch-list-item__actions"
}, So = {
  key: 0,
  class: "branch-list-item__current-label"
}, Io = /* @__PURE__ */ T({
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
      o("span", $o, c(e.isCurrent ? "●" : "○"), 1),
      o("span", xo, c(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (t(), n("div", Co, [
        G(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), n("span", So, " current ")) : i("", !0)
      ])) : i("", !0)
    ], 2));
  }
}), Eo = /* @__PURE__ */ D(Io, [["__scopeId", "data-v-c6581a24"]]), zo = {
  key: 2,
  class: "branch-list"
}, Lo = /* @__PURE__ */ T({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const s = l, r = E(!1);
    function $(h) {
      s("create", h), C();
    }
    function C() {
      r.value = !1;
    }
    return (h, y) => (t(), v(we, null, {
      header: a(() => [
        _(ke, { title: "BRANCHES" }, {
          actions: a(() => [
            _(U, {
              variant: "ghost",
              size: "sm",
              onClick: y[0] || (y[0] = (d) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...y[1] || (y[1] = [
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
        r.value ? (t(), v(_o, {
          key: 0,
          onCreate: $,
          onCancel: C
        })) : i("", !0),
        e.branches.length === 0 ? (t(), v(_e, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), n("div", zo, [
          (t(!0), n(A, null, q(e.branches, (d) => (t(), v(Eo, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: a(() => [
              d.is_current ? i("", !0) : (t(), v(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (k) => h.$emit("switch", d.name)
              }, {
                default: a(() => [...y[2] || (y[2] = [
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
}), Mo = /* @__PURE__ */ D(Lo, [["__scopeId", "data-v-763d6ec4"]]), No = { class: "commit-list" }, Bo = /* @__PURE__ */ T({
  __name: "CommitList",
  setup(e) {
    return (l, s) => (t(), n("div", No, [
      G(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), To = /* @__PURE__ */ D(Bo, [["__scopeId", "data-v-8c5ee761"]]), Do = { class: "commit-hash" }, Oo = /* @__PURE__ */ T({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, s = V(() => l.hash.slice(0, l.length));
    return (r, $) => (t(), n("span", Do, c(s.value), 1));
  }
}), Uo = /* @__PURE__ */ D(Oo, [["__scopeId", "data-v-7c333cc6"]]), Ro = { class: "commit-message" }, Wo = { class: "commit-date" }, Vo = /* @__PURE__ */ T({
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
    function $() {
      s.clickable && r("click");
    }
    return (C, h) => (t(), n("div", {
      class: F(["commit-item", { clickable: e.clickable }]),
      onClick: $
    }, [
      _(Uo, { hash: e.hash }, null, 8, ["hash"]),
      o("span", Ro, c(e.message), 1),
      o("span", Wo, c(e.relativeDate), 1),
      C.$slots.actions ? (t(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = xe(() => {
        }, ["stop"]))
      }, [
        G(C.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ D(Vo, [["__scopeId", "data-v-dd7c621b"]]), Po = /* @__PURE__ */ T({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, s) => (t(), v(we, null, {
      header: a(() => [
        _(ke, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (t(), v(_e, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), v(To, { key: 1 }, {
          default: a(() => [
            (t(!0), n(A, null, q(e.commits, (r) => (t(), v(Ao, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: ($) => l.$emit("select", r)
            }, {
              actions: a(() => [
                _(U, {
                  variant: "ghost",
                  size: "xs",
                  onClick: ($) => l.$emit("checkout", r),
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
}), Fo = /* @__PURE__ */ D(Po, [["__scopeId", "data-v-981c3c64"]]), Ye = [
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
], Ho = {
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
}, et = [
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
], jo = [
  ...et,
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
], Me = [
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
], Go = [
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
], Ne = [
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
], X = {
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
  getWorkflows: async () => (await Q(400), Ye),
  getWorkflowDetails: async (e) => (await Q(300), Ho[e] || {
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
  getEnvironmentModels: async () => (await Q(350), et),
  getWorkspaceModels: async () => (await Q(400), jo),
  updateModelSource: async (e, l) => {
    await Q(300), console.log(`[MOCK] Updating source for ${e}: ${l}`);
  },
  deleteModel: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await Q(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Node Management
  getNodes: async () => {
    await Q(350);
    const e = Me.filter((s) => s.installed), l = Me.filter((s) => !s.installed);
    return {
      nodes: Me,
      total_count: Me.length,
      installed_count: e.length,
      missing_count: l.length
    };
  },
  installNode: async (e) => {
    await Q(2500), console.log(`[MOCK] Installing node: ${e}`);
  },
  updateNode: async (e) => {
    await Q(2e3), console.log(`[MOCK] Updating node: ${e}`);
  },
  uninstallNode: async (e) => {
    await Q(1e3), console.log(`[MOCK] Uninstalling node: ${e}`);
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
  getEnvironmentLogs: async (e, l) => (await Q(250), (e ? Ne.filter((r) => r.level === e) : Ne).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await Q(300);
    const s = [...Ne, ...Ne.map(($) => ({
      ...$,
      context: { ...$.context, environment: "testing" }
    }))];
    return (e ? s.filter(($) => $.level === e) : s).slice(0, l || 100);
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
      synced: Ye.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await Q(300), Go.slice(0, e)),
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
function fe() {
  const e = E(!1), l = E(null);
  async function s(N, J) {
    var Le;
    if (!((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(N, J);
    if (!se.ok) {
      const Ce = await se.json().catch(() => ({}));
      throw new Error(Ce.error || Ce.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function r() {
    return X.getStatus();
  }
  async function $(N, J = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: N, allow_issues: J })
    });
  }
  async function C(N = 10, J = 0) {
    {
      const se = await X.getCommitHistory(N);
      return {
        commits: se,
        total: se.length,
        offset: J
      };
    }
  }
  async function h(N) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: N })
    });
  }
  async function y() {
    return X.getBranches();
  }
  async function d(N) {
    return s(`/v2/comfygit/commit/${N}`);
  }
  async function k(N, J = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: N, force: J })
    });
  }
  async function z(N, J = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: N, start_point: J })
    });
  }
  async function w(N, J = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: N, force: J })
    });
  }
  async function R() {
    return X.getEnvironments();
  }
  async function H(N) {
    return X.switchEnvironment(N);
  }
  async function te() {
    return null;
  }
  async function j(N, J, se) {
    return await X.createEnvironment(N, J, se), { status: "success" };
  }
  async function B(N) {
    return await X.deleteEnvironment(N), { status: "success" };
  }
  async function W() {
    return X.getWorkflows();
  }
  async function Z(N) {
    return X.getWorkflowDetails(N);
  }
  async function Y(N) {
    return X.resolveWorkflow(N);
  }
  async function S(N, J, se) {
    return await X.installWorkflowDeps(N, J, se), { status: "success" };
  }
  async function b(N, J, se) {
    return X.setModelImportance(N, J, se);
  }
  async function u() {
    return X.getEnvironmentModels();
  }
  async function p() {
    return X.getWorkspaceModels();
  }
  async function g(N, J) {
    return X.updateModelSource(N, J);
  }
  async function x(N) {
    return X.deleteModel(N);
  }
  async function I(N) {
    return await X.downloadModel(N), { status: "success" };
  }
  async function le() {
    return X.getConfig();
  }
  async function O(N) {
    return X.updateConfig(N);
  }
  async function L(N, J) {
    return X.getEnvironmentLogs(N, J);
  }
  async function K(N, J) {
    return X.getWorkspaceLogs(N, J);
  }
  async function me() {
    return X.getNodes();
  }
  async function pe(N) {
    return await X.installNode(N), { status: "success" };
  }
  async function Re(N) {
    return await X.updateNode(N), { status: "success" };
  }
  async function ze(N) {
    return await X.uninstallNode(N), { status: "success" };
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: $,
    getHistory: C,
    exportEnv: h,
    // Git Operations
    getBranches: y,
    getCommitDetail: d,
    checkout: k,
    createBranch: z,
    switchBranch: w,
    // Environment Management
    getEnvironments: R,
    switchEnvironment: H,
    getSwitchProgress: te,
    createEnvironment: j,
    deleteEnvironment: B,
    // Workflow Management
    getWorkflows: W,
    getWorkflowDetails: Z,
    resolveWorkflow: Y,
    installWorkflowDeps: S,
    setModelImportance: b,
    // Model Management
    getEnvironmentModels: u,
    getWorkspaceModels: p,
    updateModelSource: g,
    deleteModel: x,
    downloadModel: I,
    // Settings
    getConfig: le,
    updateConfig: O,
    // Debug/Logs
    getEnvironmentLogs: L,
    getWorkspaceLogs: K,
    // Node Management
    getNodes: me,
    installNode: pe,
    updateNode: Re,
    uninstallNode: ze
  };
}
const Ko = { class: "base-modal-header" }, qo = {
  key: 0,
  class: "base-modal-title"
}, Yo = { class: "base-modal-body" }, Zo = {
  key: 0,
  class: "base-modal-loading"
}, Jo = {
  key: 1,
  class: "base-modal-error"
}, Xo = {
  key: 0,
  class: "base-modal-footer"
}, Qo = /* @__PURE__ */ T({
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
    function $() {
      s.closeOnOverlayClick && r("close");
    }
    function C(h) {
      h.key === "Escape" && r("close");
    }
    return ue(() => {
      document.addEventListener("keydown", C), document.body.style.overflow = "hidden";
    }), lt(() => {
      document.removeEventListener("keydown", C), document.body.style.overflow = "";
    }), (h, y) => (t(), v(Ze, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: $
      }, [
        o("div", {
          class: F(["base-modal-content", e.size]),
          onClick: y[1] || (y[1] = xe(() => {
          }, ["stop"]))
        }, [
          o("div", Ko, [
            G(h.$slots, "header", {}, () => [
              e.title ? (t(), n("h3", qo, c(e.title), 1)) : i("", !0)
            ], !0),
            e.showCloseButton ? (t(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: y[0] || (y[0] = (d) => h.$emit("close"))
            }, [...y[2] || (y[2] = [
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
          o("div", Yo, [
            e.loading ? (t(), n("div", Zo, "Loading...")) : e.error ? (t(), n("div", Jo, c(e.error), 1)) : G(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (t(), n("div", Xo, [
            G(h.$slots, "footer", {}, void 0, !0)
          ])) : i("", !0)
        ], 2)
      ])
    ]));
  }
}), Te = /* @__PURE__ */ D(Qo, [["__scopeId", "data-v-700d367b"]]), ea = ["type", "disabled"], ta = {
  key: 0,
  class: "spinner"
}, oa = /* @__PURE__ */ T({
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
      e.loading ? (t(), n("span", ta)) : i("", !0),
      G(l.$slots, "default", {}, void 0, !0)
    ], 10, ea));
  }
}), ne = /* @__PURE__ */ D(oa, [["__scopeId", "data-v-f3452606"]]), aa = {
  key: 0,
  class: "base-title-count"
}, sa = /* @__PURE__ */ T({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, s) => (t(), v(He(`h${e.level}`), {
      class: F(["base-title", e.variant])
    }, {
      default: a(() => [
        G(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", aa, "(" + c(e.count) + ")", 1)) : i("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ve = /* @__PURE__ */ D(sa, [["__scopeId", "data-v-5a01561d"]]), na = ["value", "disabled"], la = {
  key: 0,
  value: "",
  disabled: ""
}, ra = ["value"], ia = {
  key: 0,
  class: "base-select-error"
}, ca = /* @__PURE__ */ T({
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
    return (r, $) => (t(), n("div", {
      class: F(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: F(["base-select", { error: !!e.error }]),
        onChange: $[0] || ($[0] = (C) => r.$emit("update:modelValue", C.target.value))
      }, [
        e.placeholder ? (t(), n("option", la, c(e.placeholder), 1)) : i("", !0),
        (t(!0), n(A, null, q(e.options, (C) => (t(), n("option", {
          key: l(C),
          value: l(C)
        }, c(s(C)), 9, ra))), 128))
      ], 42, na),
      e.error ? (t(), n("span", ia, c(e.error), 1)) : i("", !0)
    ], 2));
  }
}), da = /* @__PURE__ */ D(ca, [["__scopeId", "data-v-7436d745"]]), ua = { class: "detail-section" }, ma = {
  key: 0,
  class: "empty-message"
}, ga = { class: "model-header" }, fa = { class: "model-name" }, ha = { class: "model-details" }, va = { class: "model-row" }, pa = { class: "model-row" }, ya = {
  key: 0,
  class: "model-row"
}, ba = { class: "value" }, wa = {
  key: 1,
  class: "model-row"
}, ka = { class: "value" }, _a = {
  key: 0,
  class: "model-actions"
}, $a = { class: "detail-section" }, xa = {
  key: 0,
  class: "empty-message"
}, Ca = { class: "node-name" }, Sa = {
  key: 0,
  class: "node-version"
}, Ia = /* @__PURE__ */ T({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const s = e, r = l, { getWorkflowDetails: $, setModelImportance: C } = fe(), h = E(null), y = E(!1), d = E(null), k = E(!1), z = E({}), w = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function R() {
      y.value = !0, d.value = null;
      try {
        h.value = await $(s.workflowName);
      } catch (j) {
        d.value = j instanceof Error ? j.message : "Failed to load workflow details";
      } finally {
        y.value = !1;
      }
    }
    function H(j, B) {
      z.value[j] = B, k.value = !0;
    }
    async function te() {
      if (!k.value) {
        r("close");
        return;
      }
      y.value = !0, d.value = null;
      try {
        for (const [j, B] of Object.entries(z.value))
          await C(s.workflowName, j, B);
        r("close");
      } catch (j) {
        d.value = j instanceof Error ? j.message : "Failed to save changes";
      } finally {
        y.value = !1;
      }
    }
    return ue(R), (j, B) => (t(), v(Te, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: y.value,
      error: d.value || void 0,
      onClose: B[2] || (B[2] = (W) => r("close"))
    }, {
      body: a(() => [
        h.value ? (t(), n(A, { key: 0 }, [
          o("section", ua, [
            _(ve, { variant: "section" }, {
              default: a(() => [
                f("MODELS USED (" + c(h.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.models.length === 0 ? (t(), n("div", ma, " No models used in this workflow ")) : i("", !0),
            (t(!0), n(A, null, q(h.value.models, (W) => (t(), n("div", {
              key: W.hash,
              class: "model-card"
            }, [
              o("div", ga, [
                B[3] || (B[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", fa, c(W.filename), 1)
              ]),
              o("div", ha, [
                o("div", va, [
                  B[4] || (B[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: F(["value", W.status === "available" ? "success" : "error"])
                  }, c(W.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", pa, [
                  B[5] || (B[5] = o("span", { class: "label" }, "Importance:", -1)),
                  _(da, {
                    "model-value": z.value[W.hash] || W.importance,
                    options: w,
                    "onUpdate:modelValue": (Z) => H(W.hash, Z)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                W.node_type ? (t(), n("div", ya, [
                  B[6] || (B[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", ba, c(W.node_type) + " (Node " + c(W.node_id) + ")", 1)
                ])) : i("", !0),
                W.size_mb ? (t(), n("div", wa, [
                  B[7] || (B[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", ka, c(W.size_mb) + " MB", 1)
                ])) : i("", !0)
              ]),
              W.status === "missing" ? (t(), n("div", _a, [
                _(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: B[0] || (B[0] = (Z) => r("resolve"))
                }, {
                  default: a(() => [...B[8] || (B[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : i("", !0)
            ]))), 128))
          ]),
          B[9] || (B[9] = o("div", { class: "info-box" }, [
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
          o("section", $a, [
            _(ve, { variant: "section" }, {
              default: a(() => [
                f("NODES USED (" + c(h.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.nodes.length === 0 ? (t(), n("div", xa, " No custom nodes used in this workflow ")) : i("", !0),
            (t(!0), n(A, null, q(h.value.nodes, (W) => (t(), n("div", {
              key: W.name,
              class: "node-item"
            }, [
              o("span", {
                class: F(["node-status", W.installed ? "installed" : "missing"])
              }, c(W.installed ? "✓" : "✕"), 3),
              o("span", Ca, c(W.name), 1),
              W.version ? (t(), n("span", Sa, "v" + c(W.version), 1)) : i("", !0)
            ]))), 128))
          ])
        ], 64)) : i("", !0)
      ]),
      footer: a(() => [
        _(ne, {
          variant: "secondary",
          onClick: B[1] || (B[1] = (W) => r("close"))
        }, {
          default: a(() => [...B[10] || (B[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        k.value ? (t(), v(ne, {
          key: 0,
          variant: "primary",
          onClick: te
        }, {
          default: a(() => [...B[11] || (B[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : i("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ea = /* @__PURE__ */ D(Ia, [["__scopeId", "data-v-6ce9a41c"]]), za = {
  key: 0,
  class: "resolve-section"
}, La = { class: "resolve-card success-card" }, Ma = { class: "items-list" }, Na = { class: "item-info" }, Ba = { class: "item-name" }, Ta = {
  key: 0,
  class: "item-meta"
}, Da = { class: "match-type" }, Oa = { class: "source" }, Ua = {
  key: 1,
  class: "resolve-section"
}, Ra = { class: "resolve-card warning-card" }, Wa = { class: "items-list" }, Va = { class: "item-info" }, Aa = { class: "item-name" }, Pa = { class: "item-meta" }, Fa = { key: 0 }, Ha = { key: 1 }, ja = {
  key: 0,
  class: "item-warning"
}, Ga = {
  key: 0,
  class: "item-action"
}, Ka = ["onClick"], qa = {
  key: 2,
  class: "resolve-section"
}, Ya = { class: "info-text" }, Za = { class: "actions-summary" }, Ja = { class: "summary-list" }, Xa = { key: 0 }, Qa = { key: 1 }, es = { key: 2 }, ts = {
  key: 0,
  class: "estimated-size"
}, os = /* @__PURE__ */ T({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const s = e, r = l, { resolveWorkflow: $, installWorkflowDeps: C } = fe(), h = E(null), y = E(!1), d = E(!1), k = E(null), z = V(() => {
      var b;
      return h.value ? ((b = h.value.download_results) == null ? void 0 : b.every((u) => u.can_download)) ?? !1 : !1;
    });
    async function w() {
      y.value = !0, k.value = null;
      try {
        h.value = await $(s.workflowName);
      } catch (b) {
        k.value = b instanceof Error ? b.message : "Failed to analyze workflow";
      } finally {
        y.value = !1;
      }
    }
    function R(b) {
      return !b.possible_matches || b.possible_matches.length === 0 ? null : b.possible_matches.reduce(
        (u, p) => p.match_confidence > u.match_confidence ? p : u
      );
    }
    function H(b) {
      return b >= 0.9 ? "high" : b >= 0.7 ? "medium" : "low";
    }
    function te(b) {
      const u = R(b);
      return u ? u.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function j(b) {
      var u, p;
      return (p = (u = h.value) == null ? void 0 : u.download_results) == null ? void 0 : p.find((g) => g.model === b);
    }
    function B(b) {
      const u = j(b);
      return (u == null ? void 0 : u.can_download) ?? !1;
    }
    function W(b) {
      const u = j(b);
      return (u == null ? void 0 : u.source_url) || null;
    }
    function Z(b) {
      window.open(b, "_blank");
    }
    async function Y() {
      if (!(!h.value || d.value)) {
        d.value = !0, k.value = null;
        try {
          await C(
            s.workflowName,
            h.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (b) {
          k.value = b instanceof Error ? b.message : "Installation failed";
        } finally {
          d.value = !1;
        }
      }
    }
    async function S() {
      if (!(!h.value || d.value)) {
        d.value = !0, k.value = null;
        try {
          await C(
            s.workflowName,
            h.value.nodes_to_install,
            h.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (b) {
          k.value = b instanceof Error ? b.message : "Installation failed";
        } finally {
          d.value = !1;
        }
      }
    }
    return ue(w), (b, u) => (t(), v(Te, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: y.value,
      error: k.value || void 0,
      onClose: u[1] || (u[1] = (p) => r("close"))
    }, {
      body: a(() => [
        h.value ? (t(), n(A, { key: 0 }, [
          u[5] || (u[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          h.value.nodes_unresolved.length > 0 ? (t(), n("section", za, [
            _(ve, { variant: "section" }, {
              default: a(() => [
                f("NODES (" + c(h.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", La, [
              u[2] || (u[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Ma, [
                (t(!0), n(A, null, q(h.value.nodes_unresolved, (p) => {
                  var g;
                  return t(), n("div", {
                    key: p.node_type,
                    class: "item"
                  }, [
                    o("div", Na, [
                      o("div", Ba, c(((g = R(p)) == null ? void 0 : g.package_id) || p.node_type), 1),
                      R(p) ? (t(), n("div", Ta, [
                        o("span", {
                          class: F(["confidence-badge", H(R(p).match_confidence)])
                        }, c(Math.round(R(p).match_confidence * 100)) + "% match ", 3),
                        o("span", Da, c(R(p).match_type), 1),
                        o("span", Oa, "Source: " + c(te(p)), 1)
                      ])) : i("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : i("", !0),
          h.value.models_unresolved.length > 0 ? (t(), n("section", Ua, [
            _(ve, { variant: "section" }, {
              default: a(() => [
                f("MODELS (" + c(h.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ra, [
              u[3] || (u[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Wa, [
                (t(!0), n(A, null, q(h.value.models_unresolved, (p) => (t(), n("div", {
                  key: p.filename,
                  class: "item"
                }, [
                  o("div", Va, [
                    o("div", Aa, c(p.filename), 1),
                    o("div", Pa, [
                      p.expected_category ? (t(), n("span", Fa, "Type: " + c(p.expected_category), 1)) : i("", !0),
                      j(p.filename) ? (t(), n("span", Ha, " Size: ~" + c(j(p.filename).estimated_size_mb) + " MB ", 1)) : i("", !0)
                    ]),
                    B(p.filename) ? i("", !0) : (t(), n("div", ja, " No auto-download source configured "))
                  ]),
                  W(p.filename) ? (t(), n("div", Ga, [
                    o("button", {
                      class: "link-btn",
                      onClick: (g) => Z(W(p.filename))
                    }, " Open Source ↗ ", 8, Ka)
                  ])) : i("", !0)
                ]))), 128))
              ])
            ])
          ])) : i("", !0),
          h.value.nodes_resolved.length > 0 || h.value.models_resolved.length > 0 ? (t(), n("section", qa, [
            _(ve, { variant: "section" }, {
              default: a(() => [
                f(" ALREADY AVAILABLE (" + c(h.value.nodes_resolved.length + h.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", Ya, c(h.value.nodes_resolved.length) + " nodes and " + c(h.value.models_resolved.length) + " models are already installed ", 1)
          ])) : i("", !0),
          o("div", Za, [
            u[4] || (u[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", Ja, [
              h.value.nodes_to_install.length ? (t(), n("li", Xa, " Install " + c(h.value.nodes_to_install.length) + " nodes (~" + c(h.value.estimated_time_seconds) + "s) ", 1)) : i("", !0),
              h.value.nodes_to_install.length ? (t(), n("li", Qa, " Restart ComfyUI to load new nodes ")) : i("", !0),
              h.value.models_to_download.length ? (t(), n("li", es, " You'll still need to download " + c(h.value.models_to_download.length) + " model(s) manually ", 1)) : i("", !0)
            ]),
            h.value.estimated_size_mb ? (t(), n("div", ts, " Estimated download: " + c(h.value.estimated_size_mb) + " MB ", 1)) : i("", !0)
          ])
        ], 64)) : i("", !0)
      ]),
      footer: a(() => [
        _(ne, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (p) => r("close"))
        }, {
          default: a(() => [...u[6] || (u[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h.value && h.value.nodes_to_install.length && h.value.models_to_download.length ? (t(), v(ne, {
          key: 0,
          variant: "secondary",
          disabled: d.value,
          loading: d.value,
          onClick: Y
        }, {
          default: a(() => [...u[7] || (u[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : i("", !0),
        h.value && (h.value.nodes_to_install.length || h.value.models_to_download.length) ? (t(), v(ne, {
          key: 1,
          variant: "primary",
          disabled: d.value || h.value.models_to_download.length > 0 && !z.value,
          loading: d.value,
          onClick: S
        }, {
          default: a(() => [...u[8] || (u[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : i("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), as = /* @__PURE__ */ D(os, [["__scopeId", "data-v-d68efb14"]]), ss = { class: "search-input-wrapper" }, ns = ["value", "placeholder"], ls = /* @__PURE__ */ T({
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
    const s = e, r = l, $ = E(null);
    let C;
    function h(d) {
      const k = d.target.value;
      s.debounce > 0 ? (clearTimeout(C), C = window.setTimeout(() => {
        r("update:modelValue", k);
      }, s.debounce)) : r("update:modelValue", k);
    }
    function y() {
      var d;
      r("update:modelValue", ""), r("clear"), (d = $.value) == null || d.focus();
    }
    return ue(() => {
      s.autoFocus && $.value && $.value.focus();
    }), (d, k) => (t(), n("div", ss, [
      o("input", {
        ref_key: "inputRef",
        ref: $,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ee(y, ["escape"])
      }, null, 40, ns),
      e.clearable && e.modelValue ? (t(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: y,
        title: "Clear search"
      }, " ✕ ")) : i("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ D(ls, [["__scopeId", "data-v-266f857a"]]), is = { class: "search-bar" }, cs = /* @__PURE__ */ T({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, s) => (t(), n("div", is, [
      _(rs, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), De = /* @__PURE__ */ D(cs, [["__scopeId", "data-v-3d51bbfd"]]), ds = { class: "section-group" }, us = {
  key: 0,
  class: "section-content"
}, ms = /* @__PURE__ */ T({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const s = e, r = l, $ = E(s.initiallyExpanded);
    function C() {
      s.collapsible && ($.value = !$.value, r("toggle", $.value));
    }
    return (h, y) => (t(), n("section", ds, [
      _(Pe, {
        count: e.count,
        clickable: e.collapsible,
        expanded: $.value,
        onClick: C
      }, {
        default: a(() => [
          f(c(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || $.value ? (t(), n("div", us, [
        G(h.$slots, "default", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), ie = /* @__PURE__ */ D(ms, [["__scopeId", "data-v-c48e33ed"]]), gs = { class: "item-header" }, fs = {
  key: 0,
  class: "item-icon"
}, hs = { class: "item-info" }, vs = {
  key: 0,
  class: "item-title"
}, ps = {
  key: 1,
  class: "item-subtitle"
}, ys = {
  key: 0,
  class: "item-details"
}, bs = {
  key: 1,
  class: "item-actions"
}, ws = /* @__PURE__ */ T({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = V(() => s.status ? `status-${s.status}` : "");
    return ($, C) => (t(), n("div", {
      class: F(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: C[0] || (C[0] = (h) => e.clickable && $.$emit("click"))
    }, [
      o("div", gs, [
        $.$slots.icon ? (t(), n("span", fs, [
          G($.$slots, "icon", {}, void 0, !0)
        ])) : i("", !0),
        o("div", hs, [
          $.$slots.title ? (t(), n("div", vs, [
            G($.$slots, "title", {}, void 0, !0)
          ])) : i("", !0),
          $.$slots.subtitle ? (t(), n("div", ps, [
            G($.$slots, "subtitle", {}, void 0, !0)
          ])) : i("", !0)
        ])
      ]),
      $.$slots.details ? (t(), n("div", ys, [
        G($.$slots, "details", {}, void 0, !0)
      ])) : i("", !0),
      $.$slots.actions ? (t(), n("div", bs, [
        G($.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), ce = /* @__PURE__ */ D(ws, [["__scopeId", "data-v-cc435e0e"]]), ks = { class: "loading-state" }, _s = { class: "loading-message" }, $s = /* @__PURE__ */ T({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, s) => (t(), n("div", ks, [
      s[0] || (s[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", _s, c(e.message), 1)
    ]));
  }
}), Oe = /* @__PURE__ */ D($s, [["__scopeId", "data-v-ad8436c9"]]), xs = { class: "error-state" }, Cs = { class: "error-message" }, Ss = /* @__PURE__ */ T({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, s) => (t(), n("div", xs, [
      s[2] || (s[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", Cs, c(e.message), 1),
      e.retry ? (t(), v(U, {
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
}), Ue = /* @__PURE__ */ D(Ss, [["__scopeId", "data-v-5397be48"]]), Is = /* @__PURE__ */ T({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const s = l, { getWorkflows: r } = fe(), $ = E([]), C = E(!1), h = E(null), y = E(""), d = E(!1), k = E(!1), z = E(!1), w = E(!1), R = E(null), H = V(
      () => $.value.filter((O) => O.status === "broken")
    ), te = V(
      () => $.value.filter((O) => O.status === "new")
    ), j = V(
      () => $.value.filter((O) => O.status === "modified")
    ), B = V(
      () => $.value.filter((O) => O.status === "synced")
    ), W = V(() => {
      if (!y.value.trim()) return $.value;
      const O = y.value.toLowerCase();
      return $.value.filter((L) => L.name.toLowerCase().includes(O));
    }), Z = V(
      () => H.value.filter(
        (O) => !y.value.trim() || O.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), Y = V(
      () => te.value.filter(
        (O) => !y.value.trim() || O.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), S = V(
      () => j.value.filter(
        (O) => !y.value.trim() || O.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), b = V(
      () => B.value.filter(
        (O) => !y.value.trim() || O.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), u = V(
      () => k.value ? b.value : b.value.slice(0, 5)
    );
    async function p() {
      C.value = !0, h.value = null;
      try {
        $.value = await r();
      } catch (O) {
        h.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        C.value = !1;
      }
    }
    function g(O) {
      R.value = O, z.value = !0;
    }
    function x(O) {
      R.value = O, w.value = !0;
    }
    function I() {
      alert("Bulk resolution not yet implemented");
    }
    function le() {
      s("refresh");
    }
    return ue(p), (O, L) => (t(), n(A, null, [
      _(we, null, {
        header: a(() => [
          _(ke, { title: "WORKFLOWS" }, {
            actions: a(() => [
              H.value.length > 0 ? (t(), v(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: a(() => [...L[7] || (L[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : i("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          _(De, {
            modelValue: y.value,
            "onUpdate:modelValue": L[0] || (L[0] = (K) => y.value = K),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          C.value ? (t(), v(Oe, {
            key: 0,
            message: "Loading workflows..."
          })) : h.value ? (t(), v(Ue, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            Z.value.length ? (t(), v(ie, {
              key: 0,
              title: "BROKEN",
              count: Z.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(Z.value, (K) => (t(), v(ce, {
                  key: K.name,
                  status: "broken"
                }, {
                  icon: a(() => [...L[8] || (L[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(K.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(" Missing: " + c(K.missing_nodes) + " nodes, " + c(K.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    _(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (me) => x(K.name)
                    }, {
                      default: a(() => [...L[9] || (L[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => g(K.name)
                    }, {
                      default: a(() => [...L[10] || (L[10] = [
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
            Y.value.length ? (t(), v(ie, {
              key: 1,
              title: "NEW",
              count: Y.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(Y.value, (K) => (t(), v(ce, {
                  key: K.name,
                  status: "new"
                }, {
                  icon: a(() => [...L[11] || (L[11] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(c(K.name), 1)
                  ]),
                  subtitle: a(() => [...L[12] || (L[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => g(K.name)
                    }, {
                      default: a(() => [...L[13] || (L[13] = [
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
            S.value.length ? (t(), v(ie, {
              key: 2,
              title: "MODIFIED",
              count: S.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(S.value, (K) => (t(), v(ce, {
                  key: K.name,
                  status: "modified"
                }, {
                  icon: a(() => [...L[14] || (L[14] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(c(K.name), 1)
                  ]),
                  subtitle: a(() => [...L[15] || (L[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => g(K.name)
                    }, {
                      default: a(() => [...L[16] || (L[16] = [
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
            b.value.length ? (t(), v(ie, {
              key: 3,
              title: "SYNCED",
              count: b.value.length,
              collapsible: !0,
              "initially-expanded": d.value,
              onToggle: L[2] || (L[2] = (K) => d.value = K)
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(u.value, (K) => (t(), v(ce, {
                  key: K.name,
                  status: "synced"
                }, {
                  icon: a(() => [...L[17] || (L[17] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(c(K.name), 1)
                  ]),
                  subtitle: a(() => [...L[18] || (L[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => g(K.name)
                    }, {
                      default: a(() => [...L[19] || (L[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !k.value && b.value.length > 5 ? (t(), v(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (K) => k.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + c(b.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : i("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : i("", !0),
            W.value.length ? i("", !0) : (t(), v(_e, {
              key: 4,
              icon: "📭",
              message: y.value ? `No workflows match '${y.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      z.value && R.value ? (t(), v(Ea, {
        key: 0,
        "workflow-name": R.value,
        onClose: L[3] || (L[3] = (K) => z.value = !1),
        onResolve: L[4] || (L[4] = (K) => x(R.value))
      }, null, 8, ["workflow-name"])) : i("", !0),
      w.value && R.value ? (t(), v(as, {
        key: 1,
        "workflow-name": R.value,
        onClose: L[5] || (L[5] = (K) => w.value = !1),
        onInstall: le,
        onRefresh: L[6] || (L[6] = (K) => s("refresh"))
      }, null, 8, ["workflow-name"])) : i("", !0)
    ], 64));
  }
}), Es = /* @__PURE__ */ D(Is, [["__scopeId", "data-v-2251d776"]]), zs = /* @__PURE__ */ T({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (t(), n("span", {
      class: F(["detail-label"]),
      style: Je({ minWidth: e.minWidth })
    }, [
      G(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Ls = /* @__PURE__ */ D(zs, [["__scopeId", "data-v-75e9eeb8"]]), Ms = /* @__PURE__ */ T({
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
      G(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ns = /* @__PURE__ */ D(Ms, [["__scopeId", "data-v-2f186e4c"]]), Bs = { class: "detail-row" }, Ts = /* @__PURE__ */ T({
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
      _(Ls, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          f(c(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), v(Ns, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          f(c(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : G(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ee = /* @__PURE__ */ D(Ts, [["__scopeId", "data-v-ef15664a"]]), Ds = /* @__PURE__ */ T({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: F(["summary-bar", e.variant])
    }, [
      G(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), je = /* @__PURE__ */ D(Ds, [["__scopeId", "data-v-ccb7816e"]]), Os = { class: "popover-header" }, Us = { class: "popover-title" }, Rs = { class: "popover-content" }, Ws = {
  key: 0,
  class: "popover-actions"
}, Vs = /* @__PURE__ */ T({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, s) => (t(), v(Ze, { to: "body" }, [
      e.show ? (t(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => l.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: Je({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = xe(() => {
          }, ["stop"]))
        }, [
          o("div", Os, [
            o("h4", Us, c(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          o("div", Rs, [
            G(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (t(), n("div", Ws, [
            G(l.$slots, "actions", {}, void 0, !0)
          ])) : i("", !0)
        ], 4)
      ])) : i("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ D(Vs, [["__scopeId", "data-v-057df510"]]), As = /* @__PURE__ */ T({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const s = l, { getEnvironmentModels: r, getStatus: $ } = fe(), C = E([]), h = E([]), y = E("production"), d = E(!1), k = E(null), z = E(""), w = E(!1);
    function R() {
      w.value = !1, s("navigate", "model-index");
    }
    const H = V(
      () => C.value.reduce((g, x) => g + (x.size_mb || x.size || 0), 0)
    ), te = V(() => {
      if (!z.value.trim()) return C.value;
      const g = z.value.toLowerCase();
      return C.value.filter((x) => x.filename.toLowerCase().includes(g));
    }), j = V(() => {
      if (!z.value.trim()) return h.value;
      const g = z.value.toLowerCase();
      return h.value.filter((x) => x.filename.toLowerCase().includes(g));
    }), B = V(
      () => te.value.filter((g) => g.type === "checkpoints" || g.category === "checkpoints")
    ), W = V(
      () => te.value.filter((g) => g.type === "loras" || g.category === "loras")
    ), Z = V(
      () => te.value.filter(
        (g) => g.type !== "checkpoints" && g.category !== "checkpoints" && g.type !== "loras" && g.category !== "loras"
      )
    );
    function Y(g) {
      return g ? g >= 1024 ? `${(g / 1024).toFixed(1)} GB` : `${g.toFixed(0)} MB` : "Unknown";
    }
    function S(g) {
      s("navigate", "model-index");
    }
    function b(g) {
      s("navigate", "model-index");
    }
    function u(g) {
      alert(`Download functionality not yet implemented for ${g}`);
    }
    async function p() {
      d.value = !0, k.value = null;
      try {
        const g = await r();
        C.value = g, h.value = [];
        const x = await $();
        y.value = x.environment || "production";
      } catch (g) {
        k.value = g instanceof Error ? g.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return ue(p), (g, x) => (t(), n(A, null, [
      _(we, null, {
        header: a(() => [
          _(ke, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (I) => w.value = !0)
          })
        ]),
        search: a(() => [
          _(De, {
            modelValue: z.value,
            "onUpdate:modelValue": x[1] || (x[1] = (I) => z.value = I),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          d.value ? (t(), v(Oe, {
            key: 0,
            message: "Loading environment models..."
          })) : k.value ? (t(), v(Ue, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            C.value.length ? (t(), v(je, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(C.value.length) + " models • " + c(Y(H.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : i("", !0),
            B.value.length ? (t(), v(ie, {
              key: 1,
              title: "CHECKPOINTS",
              count: B.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(B.value, (I) => (t(), v(ce, {
                  key: I.sha256 || I.hash || I.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[3] || (x[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(I.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(Y(I.size_mb || I.size)), 1)
                  ]),
                  details: a(() => [
                    _(ee, {
                      label: "Used by:",
                      value: (I.used_by || I.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => S(I.sha256 || I.sha256_hash || I.hash || "")
                    }, {
                      default: a(() => [...x[4] || (x[4] = [
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
            W.value.length ? (t(), v(ie, {
              key: 2,
              title: "LORAS",
              count: W.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(W.value, (I) => (t(), v(ce, {
                  key: I.sha256 || I.hash || I.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[5] || (x[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(I.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(Y(I.size_mb || I.size)), 1)
                  ]),
                  details: a(() => [
                    _(ee, {
                      label: "Used by:",
                      value: (I.used_by || I.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => S(I.sha256 || I.sha256_hash || I.hash || "")
                    }, {
                      default: a(() => [...x[6] || (x[6] = [
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
            Z.value.length ? (t(), v(ie, {
              key: 3,
              title: "OTHER",
              count: Z.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(Z.value, (I) => (t(), v(ce, {
                  key: I.sha256 || I.hash || I.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[7] || (x[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(I.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(Y(I.size_mb || I.size)), 1)
                  ]),
                  details: a(() => [
                    _(ee, {
                      label: "Type:",
                      value: I.type
                    }, null, 8, ["value"]),
                    _(ee, {
                      label: "Used by:",
                      value: (I.used_by || I.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => S(I.sha256 || I.sha256_hash || I.hash || "")
                    }, {
                      default: a(() => [...x[8] || (x[8] = [
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
            j.value.length ? (t(), v(ie, {
              key: 4,
              title: "MISSING",
              count: j.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(j.value, (I) => (t(), v(ce, {
                  key: I.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...x[9] || (x[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(I.filename), 1)
                  ]),
                  subtitle: a(() => [...x[10] || (x[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var le;
                    return [
                      _(ee, {
                        label: "Required by:",
                        value: ((le = I.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    _(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => u(I.filename)
                    }, {
                      default: a(() => [...x[11] || (x[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => b(I.filename)
                    }, {
                      default: a(() => [...x[12] || (x[12] = [
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
            !te.value.length && !j.value.length ? (t(), v(_e, {
              key: 5,
              icon: "📭",
              message: z.value ? `No models match '${z.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Ge, {
        show: w.value,
        title: "About Environment Models",
        onClose: x[2] || (x[2] = (I) => w.value = !1)
      }, {
        content: a(() => [
          o("p", null, [
            x[13] || (x[13] = f(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + c(y.value) + '"', 1),
            x[14] || (x[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          _(U, {
            variant: "primary",
            onClick: R
          }, {
            default: a(() => [...x[15] || (x[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ps = /* @__PURE__ */ D(As, [["__scopeId", "data-v-865641a4"]]), Fs = /* @__PURE__ */ T({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = fe(), s = E([]), r = E(!1), $ = E(null), C = E(""), h = E(!1), y = V(
      () => s.value.reduce((u, p) => u + (p.size_mb || p.size || 0), 0)
    ), d = V(() => {
      const u = /* @__PURE__ */ new Set();
      return s.value.forEach((p) => {
        p.used_in_environments && p.used_in_environments.length > 0 && p.used_in_environments.forEach((g) => u.add(g.env_name));
      }), u.size;
    }), k = V(() => {
      if (!C.value.trim()) return s.value;
      const u = C.value.toLowerCase();
      return s.value.filter((p) => {
        const g = p, x = p.sha256 || g.sha256_hash || "";
        return p.filename.toLowerCase().includes(u) || x.toLowerCase().includes(u);
      });
    }), z = V(
      () => k.value.filter((u) => u.type === "checkpoints")
    ), w = V(
      () => k.value.filter((u) => u.type === "loras")
    ), R = V(
      () => k.value.filter((u) => u.type !== "checkpoints" && u.type !== "loras")
    );
    function H(u) {
      return u ? u >= 1024 ? `${(u / 1024).toFixed(1)} GB` : `${u.toFixed(0)} MB` : "Unknown";
    }
    function te(u) {
      const p = u, g = u.used_in_workflows || p.used_by || [];
      return !g || g.length === 0 ? "Not used" : `${g.length} workflow(s)`;
    }
    function j(u) {
      navigator.clipboard.writeText(u), alert("Hash copied to clipboard");
    }
    function B(u) {
      prompt("Enter model source URL:", u.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function W(u) {
      const p = u, g = u.used_in_workflows || p.used_by || [], x = g && g.length > 0 ? `

⚠ WARNING: This model is used by ${g.length} workflow(s):
${g.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${u.filename}?${x}

This will free ${H(p.size_mb || u.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Z() {
      alert("Scan for models not yet implemented");
    }
    function Y() {
      alert("Change directory not yet implemented");
    }
    function S() {
      alert("Download new model not yet implemented");
    }
    async function b() {
      r.value = !0, $.value = null;
      try {
        s.value = await l(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", z.value), console.log("Filtered loras:", w.value), console.log("Filtered other:", R.value);
      } catch (u) {
        $.value = u instanceof Error ? u.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ue(b), (u, p) => (t(), n(A, null, [
      _(we, null, {
        header: a(() => [
          _(ke, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: p[0] || (p[0] = (g) => h.value = !0)
          }, {
            actions: a(() => [
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: a(() => [...p[3] || (p[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: Y
              }, {
                default: a(() => [...p[4] || (p[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: a(() => [...p[5] || (p[5] = [
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
          _(De, {
            modelValue: C.value,
            "onUpdate:modelValue": p[1] || (p[1] = (g) => C.value = g),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (t(), v(Oe, {
            key: 0,
            message: "Loading workspace models..."
          })) : $.value ? (t(), v(Ue, {
            key: 1,
            message: $.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            s.value.length ? (t(), v(je, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(s.value.length) + " models • " + c(H(y.value)) + " • Used in " + c(d.value) + " environments ", 1)
              ]),
              _: 1
            })) : i("", !0),
            z.value.length ? (t(), v(ie, {
              key: 1,
              title: "CHECKPOINTS",
              count: z.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(z.value, (g) => (t(), v(ce, {
                  key: g.sha256 || g.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...p[6] || (p[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(g.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(H(g.size_mb || g.size)), 1)
                  ]),
                  details: a(() => {
                    var x, I;
                    return [
                      g.sha256 || g.sha256_hash ? (t(), v(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (g.sha256 || g.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : i("", !0),
                      _(ee, {
                        label: "Used in:",
                        value: te(g)
                      }, null, 8, ["value"]),
                      g.source_url || (x = g.sources) != null && x[0] ? (t(), v(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: g.source_url || ((I = g.sources) == null ? void 0 : I[0])
                      }, null, 8, ["value"])) : (t(), v(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...p[7] || (p[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => B(g)
                    }, {
                      default: a(() => [...p[8] || (p[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g.sha256 || g.sha256_hash ? (t(), v(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => j(g.sha256 || g.sha256_hash)
                    }, {
                      default: a(() => [...p[9] || (p[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (x) => W(g)
                    }, {
                      default: a(() => [...p[10] || (p[10] = [
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
            w.value.length ? (t(), v(ie, {
              key: 2,
              title: "LORAS",
              count: w.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(w.value, (g) => (t(), v(ce, {
                  key: g.sha256 || g.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...p[11] || (p[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(g.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(H(g.size_mb || g.size)), 1)
                  ]),
                  details: a(() => {
                    var x, I;
                    return [
                      g.sha256 || g.sha256_hash ? (t(), v(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (g.sha256 || g.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : i("", !0),
                      _(ee, {
                        label: "Used in:",
                        value: te(g)
                      }, null, 8, ["value"]),
                      g.source_url || (x = g.sources) != null && x[0] ? (t(), v(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: g.source_url || ((I = g.sources) == null ? void 0 : I[0])
                      }, null, 8, ["value"])) : (t(), v(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...p[12] || (p[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => B(g)
                    }, {
                      default: a(() => [...p[13] || (p[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g.sha256 || g.sha256_hash ? (t(), v(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => j(g.sha256 || g.sha256_hash)
                    }, {
                      default: a(() => [...p[14] || (p[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (x) => W(g)
                    }, {
                      default: a(() => [...p[15] || (p[15] = [
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
            R.value.length ? (t(), v(ie, {
              key: 3,
              title: "OTHER",
              count: R.value.length
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(R.value, (g) => (t(), v(ce, {
                  key: g.sha256 || g.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...p[16] || (p[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(g.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(H(g.size_mb || g.size)), 1)
                  ]),
                  details: a(() => [
                    _(ee, {
                      label: "Type:",
                      value: g.type
                    }, null, 8, ["value"]),
                    g.sha256 || g.sha256_hash ? (t(), v(ee, {
                      key: 0,
                      label: "SHA256:",
                      value: (g.sha256 || g.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : i("", !0),
                    _(ee, {
                      label: "Used in:",
                      value: te(g)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => B(g)
                    }, {
                      default: a(() => [...p[17] || (p[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g.sha256 || g.sha256_hash ? (t(), v(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => j(g.sha256 || g.sha256_hash)
                    }, {
                      default: a(() => [...p[18] || (p[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (x) => W(g)
                    }, {
                      default: a(() => [...p[19] || (p[19] = [
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
            k.value.length ? i("", !0) : (t(), v(_e, {
              key: 4,
              icon: "📭",
              message: C.value ? `No models match '${C.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _(Ge, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: p[2] || (p[2] = (g) => h.value = !1)
      }, {
        content: a(() => [...p[20] || (p[20] = [
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
}), Hs = /* @__PURE__ */ D(Fs, [["__scopeId", "data-v-5a24af01"]]), js = { key: 0 }, Gs = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Ks = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, qs = /* @__PURE__ */ T({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: l, installNode: s, updateNode: r, uninstallNode: $ } = fe(), C = E({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), h = E(!1), y = E(null), d = E(""), k = E(!1), z = V(() => {
      if (!d.value.trim()) return C.value.nodes;
      const S = d.value.toLowerCase();
      return C.value.nodes.filter(
        (b) => {
          var u, p;
          return b.name.toLowerCase().includes(S) || ((u = b.description) == null ? void 0 : u.toLowerCase().includes(S)) || ((p = b.repository) == null ? void 0 : p.toLowerCase().includes(S));
        }
      );
    }), w = V(
      () => z.value.filter((S) => S.installed)
    ), R = V(
      () => z.value.filter((S) => !S.installed)
    );
    function H(S) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[S] || S;
    }
    function te(S) {
      return !S.used_in_workflows || S.used_in_workflows.length === 0 ? "Not used in any workflows" : S.used_in_workflows.length === 1 ? S.used_in_workflows[0] : `${S.used_in_workflows.length} workflows`;
    }
    function j(S) {
      window.open(S, "_blank");
    }
    async function B(S) {
      if (confirm(`Install node "${S}"?

This will download and install the node from its repository.`))
        try {
          h.value = !0;
          const b = await s(S);
          b.status === "success" ? (alert(`Node "${S}" installed successfully!`), await Y()) : alert(`Failed to install node: ${b.message || "Unknown error"}`);
        } catch (b) {
          alert(`Error installing node: ${b instanceof Error ? b.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function W(S) {
      if (confirm(`Check for updates for "${S}"?`))
        try {
          h.value = !0;
          const b = await r(S);
          b.status === "success" ? (alert(`Node "${S}" is up to date or has been updated!`), await Y()) : alert(`Update check failed: ${b.message || "Unknown error"}`);
        } catch (b) {
          alert(`Error checking for updates: ${b instanceof Error ? b.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function Z(S) {
      if (confirm(`Uninstall node "${S}"?

This will remove the node from this environment.`))
        try {
          h.value = !0;
          const b = await $(S);
          b.status === "success" ? (alert(`Node "${S}" uninstalled successfully!`), await Y()) : alert(`Failed to uninstall node: ${b.message || "Unknown error"}`);
        } catch (b) {
          alert(`Error uninstalling node: ${b instanceof Error ? b.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function Y() {
      h.value = !0, y.value = null;
      try {
        C.value = await l();
      } catch (S) {
        y.value = S instanceof Error ? S.message : "Failed to load nodes";
      } finally {
        h.value = !1;
      }
    }
    return ue(Y), (S, b) => (t(), n(A, null, [
      _(we, null, {
        header: a(() => [
          _(ke, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (u) => k.value = !0)
          })
        ]),
        search: a(() => [
          _(De, {
            modelValue: d.value,
            "onUpdate:modelValue": b[1] || (b[1] = (u) => d.value = u),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (t(), v(Oe, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : y.value ? (t(), v(Ue, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (t(), n(A, { key: 2 }, [
            C.value.total_count ? (t(), v(je, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(C.value.total_count) + " nodes • " + c(C.value.installed_count) + " installed • " + c(C.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : i("", !0),
            w.value.length ? (t(), v(ie, {
              key: 1,
              title: "INSTALLED",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(w.value, (u) => (t(), v(ce, {
                  key: u.name,
                  status: "synced"
                }, {
                  icon: a(() => [...b[4] || (b[4] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(u.name), 1)
                  ]),
                  subtitle: a(() => [
                    u.version ? (t(), n("span", js, "v" + c(u.version), 1)) : (t(), n("span", Gs, "version unknown")),
                    u.source ? (t(), n("span", Ks, " • " + c(H(u.source)), 1)) : i("", !0)
                  ]),
                  details: a(() => [
                    u.description ? (t(), v(ee, {
                      key: 0,
                      label: "Description:",
                      value: u.description
                    }, null, 8, ["value"])) : i("", !0),
                    u.repository ? (t(), v(ee, {
                      key: 1,
                      label: "Repository:",
                      value: u.repository
                    }, null, 8, ["value"])) : i("", !0),
                    _(ee, {
                      label: "Used by:",
                      value: te(u)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    u.repository ? (t(), v(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (p) => j(u.repository)
                    }, {
                      default: a(() => [...b[5] || (b[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    u.source === "registry" ? (t(), v(U, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (p) => W(u.name)
                    }, {
                      default: a(() => [...b[6] || (b[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    u.source !== "unknown" ? (t(), v(U, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (p) => Z(u.name)
                    }, {
                      default: a(() => [...b[7] || (b[7] = [
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
            R.value.length ? (t(), v(ie, {
              key: 2,
              title: "MISSING",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(A, null, q(R.value, (u) => (t(), v(ce, {
                  key: u.name,
                  status: "missing"
                }, {
                  icon: a(() => [...b[8] || (b[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(u.name), 1)
                  ]),
                  subtitle: a(() => [...b[9] || (b[9] = [
                    o("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    u.description ? (t(), v(ee, {
                      key: 0,
                      label: "Description:",
                      value: u.description
                    }, null, 8, ["value"])) : i("", !0),
                    u.repository ? (t(), v(ee, {
                      key: 1,
                      label: "Repository:",
                      value: u.repository
                    }, null, 8, ["value"])) : i("", !0),
                    _(ee, {
                      label: "Required by:",
                      value: te(u)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    u.download_url ? (t(), v(U, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (p) => B(u.name)
                    }, {
                      default: a(() => [...b[10] || (b[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    u.repository ? (t(), v(U, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (p) => j(u.repository)
                    }, {
                      default: a(() => [...b[11] || (b[11] = [
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
            !w.value.length && !R.value.length ? (t(), v(_e, {
              key: 3,
              icon: "📭",
              message: d.value ? `No nodes match '${d.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Ge, {
        show: k.value,
        title: "About Git-Tracked Nodes",
        onClose: b[3] || (b[3] = (u) => k.value = !1)
      }, {
        content: a(() => [...b[12] || (b[12] = [
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
          _(U, {
            variant: "primary",
            onClick: b[2] || (b[2] = (u) => k.value = !1)
          }, {
            default: a(() => [...b[13] || (b[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ys = /* @__PURE__ */ D(qs, [["__scopeId", "data-v-c480e2c1"]]), Zs = { class: "header-info" }, Js = { class: "commit-hash" }, Xs = {
  key: 0,
  class: "commit-refs"
}, Qs = { class: "commit-message" }, en = { class: "commit-date" }, tn = {
  key: 0,
  class: "loading"
}, on = {
  key: 1,
  class: "changes-section"
}, an = { class: "stats-row" }, sn = { class: "stat" }, nn = { class: "stat insertions" }, ln = { class: "stat deletions" }, rn = {
  key: 0,
  class: "change-group"
}, cn = {
  key: 1,
  class: "change-group"
}, dn = {
  key: 0,
  class: "version"
}, un = {
  key: 2,
  class: "change-group"
}, mn = { class: "change-item" }, gn = /* @__PURE__ */ T({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: s } = fe(), r = E(null), $ = E(!0), C = V(() => {
      if (!r.value) return !1;
      const y = r.value.changes.workflows;
      return y.added.length > 0 || y.modified.length > 0 || y.deleted.length > 0;
    }), h = V(() => {
      if (!r.value) return !1;
      const y = r.value.changes.nodes;
      return y.added.length > 0 || y.removed.length > 0;
    });
    return ue(async () => {
      try {
        r.value = await s(l.commit.hash);
      } finally {
        $.value = !1;
      }
    }), (y, d) => (t(), v(Te, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (k) => y.$emit("close"))
    }, {
      header: a(() => {
        var k, z, w, R;
        return [
          o("div", Zs, [
            d[4] || (d[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", Js, c(((k = r.value) == null ? void 0 : k.short_hash) || e.commit.short_hash || ((z = e.commit.hash) == null ? void 0 : z.slice(0, 7))), 1),
            (R = (w = r.value) == null ? void 0 : w.refs) != null && R.length ? (t(), n("span", Xs, [
              (t(!0), n(A, null, q(r.value.refs, (H) => (t(), n("span", {
                key: H,
                class: "ref-badge"
              }, c(H), 1))), 128))
            ])) : i("", !0)
          ]),
          _(ne, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (H) => y.$emit("close"))
          }, {
            default: a(() => [...d[5] || (d[5] = [
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
        var k, z;
        return [
          o("div", Qs, c(((k = r.value) == null ? void 0 : k.message) || e.commit.message), 1),
          o("div", en, c(((z = r.value) == null ? void 0 : z.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          $.value ? (t(), n("div", tn, "Loading details...")) : r.value ? (t(), n("div", on, [
            o("div", an, [
              o("span", sn, c(r.value.stats.files_changed) + " files", 1),
              o("span", nn, "+" + c(r.value.stats.insertions), 1),
              o("span", ln, "-" + c(r.value.stats.deletions), 1)
            ]),
            C.value ? (t(), n("div", rn, [
              _(ve, { variant: "section" }, {
                default: a(() => [...d[6] || (d[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(A, null, q(r.value.changes.workflows.added, (w) => (t(), n("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                d[7] || (d[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(w), 1)
              ]))), 128)),
              (t(!0), n(A, null, q(r.value.changes.workflows.modified, (w) => (t(), n("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, c(w), 1)
              ]))), 128)),
              (t(!0), n(A, null, q(r.value.changes.workflows.deleted, (w) => (t(), n("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(w), 1)
              ]))), 128))
            ])) : i("", !0),
            h.value ? (t(), n("div", cn, [
              _(ve, { variant: "section" }, {
                default: a(() => [...d[10] || (d[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(A, null, q(r.value.changes.nodes.added, (w) => (t(), n("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(w.name), 1),
                w.version ? (t(), n("span", dn, "(" + c(w.version) + ")", 1)) : i("", !0)
              ]))), 128)),
              (t(!0), n(A, null, q(r.value.changes.nodes.removed, (w) => (t(), n("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(w.name), 1)
              ]))), 128))
            ])) : i("", !0),
            r.value.changes.models.resolved > 0 ? (t(), n("div", un, [
              _(ve, { variant: "section" }, {
                default: a(() => [...d[13] || (d[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", mn, [
                d[14] || (d[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, c(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : i("", !0)
          ])) : i("", !0)
        ];
      }),
      footer: a(() => [
        _(ne, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (k) => y.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...d[15] || (d[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        _(ne, {
          variant: "primary",
          onClick: d[2] || (d[2] = (k) => y.$emit("checkout", e.commit))
        }, {
          default: a(() => [...d[16] || (d[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), fn = /* @__PURE__ */ D(gn, [["__scopeId", "data-v-d256ff6d"]]), hn = { class: "dialog-message" }, vn = {
  key: 0,
  class: "dialog-details"
}, pn = {
  key: 1,
  class: "dialog-warning"
}, yn = /* @__PURE__ */ T({
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
    return (l, s) => (t(), v(Te, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => l.$emit("cancel"))
    }, {
      body: a(() => [
        o("p", hn, c(e.message), 1),
        e.details && e.details.length ? (t(), n("div", vn, [
          (t(!0), n(A, null, q(e.details, (r, $) => (t(), n("div", {
            key: $,
            class: "detail-item"
          }, " • " + c(r), 1))), 128))
        ])) : i("", !0),
        e.warning ? (t(), n("p", pn, [
          s[4] || (s[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + c(e.warning), 1)
        ])) : i("", !0)
      ]),
      footer: a(() => [
        _(ne, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => l.$emit("cancel"))
        }, {
          default: a(() => [
            f(c(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), v(ne, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => l.$emit("secondary"))
        }, {
          default: a(() => [
            f(c(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : i("", !0),
        _(ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => l.$emit("confirm"))
        }, {
          default: a(() => [
            f(c(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), bn = /* @__PURE__ */ D(yn, [["__scopeId", "data-v-3670b9f5"]]), wn = { class: "comfygit-panel" }, kn = { class: "panel-header" }, _n = { class: "header-left" }, $n = {
  key: 0,
  class: "header-info"
}, xn = { class: "header-actions" }, Cn = { class: "env-switcher" }, Sn = {
  key: 0,
  class: "header-info"
}, In = { class: "branch-name" }, En = { class: "panel-main" }, zn = { class: "sidebar" }, Ln = { class: "sidebar-section" }, Mn = { class: "sidebar-section" }, Nn = { class: "sidebar-section" }, Bn = { class: "content-area" }, Tn = {
  key: 0,
  class: "error-message"
}, Dn = {
  key: 1,
  class: "loading"
}, On = {
  key: 6,
  class: "view-placeholder"
}, Un = {
  key: 7,
  class: "view-placeholder"
}, Rn = {
  key: 9,
  class: "view-placeholder"
}, Wn = {
  key: 10,
  class: "view-placeholder"
}, Vn = {
  key: 11,
  class: "view-placeholder"
}, An = {
  key: 12,
  class: "view-placeholder"
}, Pn = {
  key: 13,
  class: "view-placeholder"
}, Fn = { class: "dialog-content env-selector-dialog" }, Hn = { class: "dialog-header" }, jn = { class: "dialog-body" }, Gn = { class: "env-list" }, Kn = { class: "env-info" }, qn = { class: "env-name-row" }, Yn = { class: "env-indicator" }, Zn = { class: "env-name" }, Jn = {
  key: 0,
  class: "env-branch"
}, Xn = {
  key: 1,
  class: "current-label"
}, Qn = { class: "env-stats" }, el = ["onClick"], tl = { class: "toast-container" }, ol = { class: "toast-icon" }, al = { class: "toast-message" }, sl = /* @__PURE__ */ T({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const s = l, {
      getStatus: r,
      getHistory: $,
      exportEnv: C,
      getBranches: h,
      checkout: y,
      createBranch: d,
      switchBranch: k,
      getEnvironments: z
    } = fe(), w = E(null), R = E([]), H = E([]), te = E([]), j = V(() => te.value.find((M) => M.is_current)), B = E(!1), W = E(null), Z = E(null), Y = E(!1), S = E("status"), b = E("this-env");
    function u(M, m) {
      S.value = M, b.value = m;
    }
    function p(M) {
      const oe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[M];
      oe && u(oe.view, oe.section);
    }
    function g() {
      u("branches", "this-env");
    }
    const x = E(null), I = E([]);
    let le = 0;
    function O(M, m = "info", oe = 3e3) {
      const ae = ++le;
      return I.value.push({ id: ae, message: M, type: m }), oe > 0 && setTimeout(() => {
        I.value = I.value.filter((ye) => ye.id !== ae);
      }, oe), ae;
    }
    function L(M) {
      I.value = I.value.filter((m) => m.id !== M);
    }
    function K(M) {
      switch (M) {
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
    const me = V(() => {
      if (!w.value) return "neutral";
      const M = w.value.workflows, m = M.new.length > 0 || M.modified.length > 0 || M.deleted.length > 0 || w.value.has_changes;
      return w.value.comparison.is_synced ? m ? "warning" : "success" : "error";
    });
    V(() => w.value ? me.value === "success" ? "All synced" : me.value === "warning" ? "Uncommitted changes" : me.value === "error" ? "Not synced" : "" : "");
    async function pe() {
      B.value = !0, W.value = null;
      try {
        const [M, m, oe, ae] = await Promise.all([
          r(),
          $(),
          h(),
          z()
        ]);
        w.value = M, R.value = m.commits, H.value = oe.branches, te.value = ae, s("statusUpdate", M);
      } catch (M) {
        W.value = M instanceof Error ? M.message : "Failed to load status", w.value = null, R.value = [], H.value = [];
      } finally {
        B.value = !1;
      }
    }
    function Re(M) {
      Z.value = M;
    }
    async function ze(M) {
      var oe;
      Z.value = null;
      const m = w.value && (w.value.workflows.new.length > 0 || w.value.workflows.modified.length > 0 || w.value.workflows.deleted.length > 0 || w.value.has_changes);
      x.value = {
        title: m ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: m ? "You have uncommitted changes that will be lost." : `Checkout commit ${M.short_hash || ((oe = M.hash) == null ? void 0 : oe.slice(0, 7))}?`,
        details: m ? Ce() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: m ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: m,
        onConfirm: async () => {
          var P;
          x.value = null;
          const ae = O(`Checking out ${M.short_hash || ((P = M.hash) == null ? void 0 : P.slice(0, 7))}...`, "info", 0), ye = await y(M.hash, m);
          L(ae), ye.status === "success" ? O("Restarting ComfyUI...", "success") : O(ye.message || "Checkout failed", "error");
        }
      };
    }
    async function N(M) {
      const m = w.value && (w.value.workflows.new.length > 0 || w.value.workflows.modified.length > 0 || w.value.workflows.deleted.length > 0 || w.value.has_changes);
      x.value = {
        title: m ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: m ? "You have uncommitted changes." : `Switch to branch "${M}"?`,
        details: m ? Ce() : void 0,
        warning: m ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: m ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          x.value = null;
          const oe = O(`Switching to ${M}...`, "info", 0), ae = await k(M, m);
          L(oe), ae.status === "success" ? O("Restarting ComfyUI...", "success") : O(ae.message || "Branch switch failed", "error");
        }
      };
    }
    async function J(M) {
      const m = O(`Creating branch ${M}...`, "info", 0), oe = await d(M);
      L(m), oe.status === "success" ? (O(`Branch "${M}" created`, "success"), await pe()) : O(oe.message || "Failed to create branch", "error");
    }
    async function se(M) {
      Z.value = null;
      const m = prompt("Enter branch name:");
      if (m) {
        const oe = O(`Creating branch ${m}...`, "info", 0), ae = await d(m, M.hash);
        L(oe), ae.status === "success" ? (O(`Branch "${m}" created from ${M.short_hash}`, "success"), await pe()) : O(ae.message || "Failed to create branch", "error");
      }
    }
    async function Le(M) {
      Y.value = !1, O("Environment switching not yet implemented", "warning");
    }
    function Ce() {
      if (!w.value) return [];
      const M = [], m = w.value.workflows;
      return m.new.length && M.push(`${m.new.length} new workflow(s)`), m.modified.length && M.push(`${m.modified.length} modified workflow(s)`), m.deleted.length && M.push(`${m.deleted.length} deleted workflow(s)`), M;
    }
    async function nt() {
      const M = O("Exporting environment...", "info", 0);
      try {
        const m = await C();
        L(M), m.status === "success" ? (O("Export complete", "success"), alert(`Export successful!

Saved to: ${m.path}

Models without sources: ${m.models_without_sources}`)) : (O("Export failed", "error"), alert(`Export failed: ${m.message}`));
      } catch (m) {
        L(M), O("Export error", "error"), alert(`Export error: ${m instanceof Error ? m.message : "Unknown error"}`);
      }
    }
    return ue(pe), (M, m) => {
      var oe, ae, ye;
      return t(), n("div", wn, [
        o("div", kn, [
          o("div", _n, [
            m[20] || (m[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            w.value ? (t(), n("div", $n)) : i("", !0)
          ]),
          o("div", xn, [
            o("button", {
              class: F(["icon-btn", { spinning: B.value }]),
              onClick: pe,
              title: "Refresh"
            }, [...m[21] || (m[21] = [
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
              onClick: m[0] || (m[0] = (P) => s("close")),
              title: "Close"
            }, [...m[22] || (m[22] = [
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
        o("div", Cn, [
          m[24] || (m[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: m[1] || (m[1] = (P) => Y.value = !0)
          }, [
            w.value ? (t(), n("div", Sn, [
              o("span", null, c(((oe = j.value) == null ? void 0 : oe.name) || ((ae = w.value) == null ? void 0 : ae.environment) || "Loading..."), 1),
              o("span", In, "(" + c(w.value.branch || "detached") + ")", 1)
            ])) : i("", !0),
            m[23] || (m[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", En, [
          o("div", zn, [
            o("div", Ln, [
              m[25] || (m[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "status" && b.value === "this-env" }]),
                onClick: m[2] || (m[2] = (P) => u("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "workflows" }]),
                onClick: m[3] || (m[3] = (P) => u("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "models-env" }]),
                onClick: m[4] || (m[4] = (P) => u("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "branches" }]),
                onClick: m[5] || (m[5] = (P) => u("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "history" }]),
                onClick: m[6] || (m[6] = (P) => u("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "nodes" }]),
                onClick: m[7] || (m[7] = (P) => u("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "debug-env" }]),
                onClick: m[8] || (m[8] = (P) => u("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            m[28] || (m[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", Mn, [
              m[26] || (m[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "environments" }]),
                onClick: m[9] || (m[9] = (P) => u("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "model-index" }]),
                onClick: m[10] || (m[10] = (P) => u("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "settings" }]),
                onClick: m[11] || (m[11] = (P) => u("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "debug-workspace" }]),
                onClick: m[12] || (m[12] = (P) => u("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            m[29] || (m[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", Nn, [
              m[27] || (m[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "export" }]),
                onClick: m[13] || (m[13] = (P) => u("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "import" }]),
                onClick: m[14] || (m[14] = (P) => u("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: F(["sidebar-item", { active: S.value === "remotes" }]),
                onClick: m[15] || (m[15] = (P) => u("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", Bn, [
            W.value ? (t(), n("div", Tn, c(W.value), 1)) : !w.value && S.value === "status" ? (t(), n("div", Dn, " Loading status... ")) : (t(), n(A, { key: 2 }, [
              S.value === "status" ? (t(), v(ho, {
                key: 0,
                status: w.value,
                onSwitchBranch: g
              }, null, 8, ["status"])) : S.value === "workflows" ? (t(), v(Es, {
                key: 1,
                onRefresh: pe
              })) : S.value === "models-env" ? (t(), v(Ps, {
                key: 2,
                onNavigate: p
              })) : S.value === "branches" ? (t(), v(Mo, {
                key: 3,
                branches: H.value,
                current: ((ye = w.value) == null ? void 0 : ye.branch) || null,
                onSwitch: N,
                onCreate: J
              }, null, 8, ["branches", "current"])) : S.value === "history" ? (t(), v(Fo, {
                key: 4,
                commits: R.value,
                onSelect: Re,
                onCheckout: ze
              }, null, 8, ["commits"])) : S.value === "nodes" ? (t(), v(Ys, { key: 5 })) : S.value === "debug-env" ? (t(), n("div", On, [...m[30] || (m[30] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : S.value === "environments" ? (t(), n("div", Un, [...m[31] || (m[31] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : S.value === "model-index" ? (t(), v(Hs, { key: 8 })) : S.value === "settings" ? (t(), n("div", Rn, [...m[32] || (m[32] = [
                o("h3", { class: "view-title" }, "SETTINGS", -1),
                o("p", null, "Settings UI coming soon...", -1)
              ])])) : S.value === "debug-workspace" ? (t(), n("div", Wn, [...m[33] || (m[33] = [
                o("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                o("p", null, "Workspace logs view coming soon...", -1)
              ])])) : S.value === "export" ? (t(), n("div", Vn, [
                m[35] || (m[35] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: nt
                }, [...m[34] || (m[34] = [
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
              ])) : S.value === "import" ? (t(), n("div", An, [...m[36] || (m[36] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : S.value === "remotes" ? (t(), n("div", Pn, [...m[37] || (m[37] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : i("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (t(), v(fn, {
          key: 0,
          commit: Z.value,
          onClose: m[16] || (m[16] = (P) => Z.value = null),
          onCheckout: ze,
          onCreateBranch: se
        }, null, 8, ["commit"])) : i("", !0),
        x.value ? (t(), v(bn, {
          key: 1,
          title: x.value.title,
          message: x.value.message,
          details: x.value.details,
          warning: x.value.warning,
          confirmLabel: x.value.confirmLabel,
          cancelLabel: x.value.cancelLabel,
          secondaryLabel: x.value.secondaryLabel,
          secondaryAction: x.value.secondaryAction,
          destructive: x.value.destructive,
          onConfirm: x.value.onConfirm,
          onCancel: m[17] || (m[17] = (P) => x.value = null),
          onSecondary: x.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : i("", !0),
        Y.value ? (t(), n("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: m[19] || (m[19] = xe((P) => Y.value = !1, ["self"]))
        }, [
          o("div", Fn, [
            o("div", Hn, [
              m[39] || (m[39] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: m[18] || (m[18] = (P) => Y.value = !1)
              }, [...m[38] || (m[38] = [
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
            o("div", jn, [
              m[40] || (m[40] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", Gn, [
                (t(!0), n(A, null, q(te.value, (P) => (t(), n("div", {
                  key: P.name,
                  class: F(["env-item", { current: P.is_current }])
                }, [
                  o("div", Kn, [
                    o("div", qn, [
                      o("span", Yn, c(P.is_current ? "●" : "○"), 1),
                      o("span", Zn, c(P.name), 1),
                      P.current_branch ? (t(), n("span", Jn, "(" + c(P.current_branch) + ")", 1)) : i("", !0),
                      P.is_current ? (t(), n("span", Xn, "CURRENT")) : i("", !0)
                    ]),
                    o("div", Qn, c(P.workflow_count) + " workflows • " + c(P.node_count) + " nodes ", 1)
                  ]),
                  P.is_current ? i("", !0) : (t(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ol) => Le(P.name)
                  }, " SWITCH ", 8, el))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : i("", !0),
        o("div", tl, [
          _(rt, { name: "toast" }, {
            default: a(() => [
              (t(!0), n(A, null, q(I.value, (P) => (t(), n("div", {
                key: P.id,
                class: F(["toast", P.type])
              }, [
                o("span", ol, c(K(P.type)), 1),
                o("span", al, c(P.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), nl = /* @__PURE__ */ D(sl, [["__scopeId", "data-v-d13cd839"]]), ll = { class: "base-textarea-wrapper" }, rl = ["value", "rows", "placeholder", "disabled", "maxlength"], il = {
  key: 0,
  class: "base-textarea-count"
}, cl = /* @__PURE__ */ T({
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
    return (l, s) => (t(), n("div", ll, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ee(xe((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ee(xe((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, rl),
      e.showCharCount && e.maxLength ? (t(), n("div", il, c(e.modelValue.length) + " / " + c(e.maxLength), 1)) : i("", !0)
    ]));
  }
}), dl = /* @__PURE__ */ D(cl, [["__scopeId", "data-v-5516e6fc"]]), ul = { class: "commit-popover" }, ml = { class: "popover-header" }, gl = { class: "popover-body" }, fl = {
  key: 0,
  class: "changes-summary"
}, hl = {
  key: 0,
  class: "change-item"
}, vl = {
  key: 1,
  class: "change-item"
}, pl = {
  key: 2,
  class: "change-item"
}, yl = {
  key: 3,
  class: "change-item"
}, bl = {
  key: 4,
  class: "change-item"
}, wl = {
  key: 1,
  class: "no-changes"
}, kl = {
  key: 2,
  class: "loading"
}, _l = { class: "message-section" }, $l = { class: "popover-footer" }, xl = /* @__PURE__ */ T({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const s = e, r = l, { commit: $ } = fe(), C = E(""), h = E(!1), y = E(null), d = V(() => {
      if (!s.status) return !1;
      const z = s.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || s.status.has_changes;
    });
    async function k() {
      var z, w, R;
      if (!(!d.value || !C.value.trim() || h.value)) {
        h.value = !0, y.value = null;
        try {
          const H = await $(C.value.trim());
          H.status === "success" ? (y.value = {
            type: "success",
            message: `Committed: ${((z = H.summary) == null ? void 0 : z.new) || 0} new, ${((w = H.summary) == null ? void 0 : w.modified) || 0} modified, ${((R = H.summary) == null ? void 0 : R.deleted) || 0} deleted`
          }, C.value = "", setTimeout(() => r("committed"), 1e3)) : H.status === "no_changes" ? y.value = { type: "error", message: "No changes to commit" } : y.value = { type: "error", message: H.message || "Commit failed" };
        } catch (H) {
          y.value = { type: "error", message: H instanceof Error ? H.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (z, w) => (t(), n("div", ul, [
      o("div", ml, [
        w[4] || (w[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: w[0] || (w[0] = (R) => r("close"))
        }, [...w[3] || (w[3] = [
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
      o("div", gl, [
        e.status && d.value ? (t(), n("div", fl, [
          e.status.workflows.new.length ? (t(), n("div", hl, [
            w[5] || (w[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : i("", !0),
          e.status.workflows.modified.length ? (t(), n("div", vl, [
            w[6] || (w[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, c(e.status.workflows.modified.length) + " modified", 1)
          ])) : i("", !0),
          e.status.workflows.deleted.length ? (t(), n("div", pl, [
            w[7] || (w[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : i("", !0),
          e.status.git_changes.nodes_added.length ? (t(), n("div", yl, [
            w[8] || (w[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : i("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), n("div", bl, [
            w[9] || (w[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : i("", !0)
        ])) : e.status ? (t(), n("div", wl, " No changes to commit ")) : (t(), n("div", kl, " Loading... ")),
        o("div", _l, [
          _(dl, {
            modelValue: C.value,
            "onUpdate:modelValue": w[1] || (w[1] = (R) => C.value = R),
            placeholder: d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || h.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        y.value ? (t(), n("div", {
          key: 3,
          class: F(["result", y.value.type])
        }, c(y.value.message), 3)) : i("", !0)
      ]),
      o("div", $l, [
        _(ne, {
          variant: "secondary",
          onClick: w[2] || (w[2] = (R) => r("close"))
        }, {
          default: a(() => [...w[10] || (w[10] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _(ne, {
          variant: "primary",
          disabled: !d.value || !C.value.trim() || h.value,
          loading: h.value,
          onClick: k
        }, {
          default: a(() => [
            f(c(h.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Cl = /* @__PURE__ */ D(xl, [["__scopeId", "data-v-4f587977"]]), Sl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Il = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', El = {
  comfy: Sl,
  phosphor: Il
}, Ke = "comfy", tt = "comfygit-theme";
let be = null, ot = Ke;
function zl() {
  try {
    const e = localStorage.getItem(tt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ke;
}
function at(e = Ke) {
  be && be.remove(), be = document.createElement("style"), be.id = "comfygit-theme-styles", be.setAttribute("data-theme", e), be.textContent = El[e], document.head.appendChild(be), document.body.setAttribute("data-comfygit-theme", e), ot = e;
  try {
    localStorage.setItem(tt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function Ll() {
  return ot;
}
function Ml(e) {
  at(e);
}
const qe = document.createElement("link");
qe.rel = "stylesheet";
qe.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(qe);
const Nl = zl();
at(Nl);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Ml(e);
  },
  getTheme: () => {
    const e = Ll();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let de = null, re = null, Ie = null;
const $e = E(null);
async function Fe() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && ($e.value = await l.json());
  } catch {
  }
}
function Bl() {
  if (!$e.value) return !1;
  const e = $e.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || $e.value.has_changes;
}
function Tl() {
  de && de.remove(), de = document.createElement("div"), de.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", de.appendChild(e), de.addEventListener("click", (r) => {
    r.target === de && Ae();
  });
  const l = (r) => {
    r.key === "Escape" && (Ae(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), Xe({
    render: () => Qe(nl, {
      onClose: Ae,
      onStatusUpdate: (r) => {
        $e.value = r, Be();
      }
    })
  }).mount(e), document.body.appendChild(de);
}
function Ae() {
  de && (de.remove(), de = null);
}
function Dl(e) {
  Se(), re = document.createElement("div"), re.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  re.style.position = "fixed", re.style.top = `${l.bottom + 8}px`, re.style.right = `${window.innerWidth - l.right}px`, re.style.zIndex = "10001";
  const s = ($) => {
    re && !re.contains($.target) && $.target !== e && (Se(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = ($) => {
    $.key === "Escape" && (Se(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ie = Xe({
    render: () => Qe(Cl, {
      status: $e.value,
      onClose: Se,
      onCommitted: () => {
        Se(), Fe().then(Be);
      }
    })
  }), Ie.mount(re), document.body.appendChild(re);
}
function Se() {
  Ie && (Ie.unmount(), Ie = null), re && (re.remove(), re = null);
}
let ge = null;
function Be() {
  if (!ge) return;
  const e = ge.querySelector(".commit-indicator");
  e && (e.style.display = Bl() ? "block" : "none");
}
const st = document.createElement("style");
st.textContent = `
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
document.head.appendChild(st);
We.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = Tl, ge = document.createElement("button"), ge.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ge.innerHTML = 'Commit <span class="commit-indicator"></span>', ge.title = "Quick Commit", ge.onclick = () => Dl(ge), e.appendChild(l), e.appendChild(ge), (r = (s = We.menu) == null ? void 0 : s.settingsGroup) != null && r.element && (We.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Fe(), Be(), setInterval(async () => {
      await Fe(), Be();
    }, 3e4);
  }
});
