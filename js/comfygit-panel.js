import { app as Me } from "../../scripts/app.js";
import { defineComponent as D, createElementBlock as s, openBlock as t, createCommentVNode as c, createElementVNode as o, renderSlot as G, createBlock as y, resolveDynamicComponent as Oe, normalizeClass as A, withCtx as n, toDisplayString as d, createVNode as _, createTextVNode as g, computed as P, Fragment as H, renderList as Y, ref as S, onMounted as ue, withKeys as Se, withModifiers as be, onUnmounted as nt, Teleport as Fe, normalizeStyle as Ge, TransitionGroup as lt, createApp as Ke, h as je } from "vue";
const rt = { class: "panel-layout" }, it = {
  key: 0,
  class: "panel-layout-header"
}, ct = {
  key: 1,
  class: "panel-layout-search"
}, dt = { class: "panel-layout-content" }, ut = {
  key: 2,
  class: "panel-layout-footer"
}, mt = /* @__PURE__ */ D({
  __name: "PanelLayout",
  setup(e) {
    return (l, a) => (t(), s("div", rt, [
      l.$slots.header ? (t(), s("div", it, [
        G(l.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      l.$slots.search ? (t(), s("div", ct, [
        G(l.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      o("div", dt, [
        G(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), s("div", ut, [
        G(l.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), N = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, w] of l)
    a[r] = w;
  return a;
}, we = /* @__PURE__ */ N(mt, [["__scopeId", "data-v-21565df9"]]), gt = {
  key: 0,
  class: "panel-title-prefix"
}, ht = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ft = /* @__PURE__ */ D({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, a) => (t(), y(Oe(`h${e.level}`), {
      class: A(["panel-title", e.variant])
    }, {
      default: n(() => [
        e.showPrefix ? (t(), s("span", gt, d(e.prefix), 1)) : (t(), s("span", ht)),
        G(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vt = /* @__PURE__ */ N(ft, [["__scopeId", "data-v-c3875efc"]]), pt = ["title"], yt = ["width", "height"], bt = /* @__PURE__ */ D({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (l, a) => (t(), s("button", {
      class: "info-button",
      title: e.title,
      onClick: a[0] || (a[0] = (r) => l.$emit("click"))
    }, [
      (t(), s("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...a[1] || (a[1] = [
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
      ])], 8, yt))
    ], 8, pt));
  }
}), wt = /* @__PURE__ */ N(bt, [["__scopeId", "data-v-6fc7f16d"]]), kt = { class: "header-left" }, _t = {
  key: 0,
  class: "header-actions"
}, $t = /* @__PURE__ */ D({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (l, a) => (t(), s("div", {
      class: A(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", kt, [
        _(vt, { "show-prefix": e.showPrefix }, {
          default: n(() => [
            g(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), y(wt, {
          key: 0,
          onClick: a[0] || (a[0] = (r) => l.$emit("info-click"))
        })) : c("", !0)
      ]),
      l.$slots.actions ? (t(), s("div", _t, [
        G(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ N($t, [["__scopeId", "data-v-55a62cd6"]]), xt = {
  key: 0,
  class: "section-title-count"
}, Ct = {
  key: 1,
  class: "section-title-icon"
}, St = /* @__PURE__ */ D({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, a) => (t(), y(Oe(`h${e.level}`), {
      class: A(["section-title", { clickable: e.clickable }]),
      onClick: a[0] || (a[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: n(() => [
        G(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), s("span", xt, "(" + d(e.count) + ")", 1)) : c("", !0),
        e.clickable ? (t(), s("span", Ct, d(e.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), De = /* @__PURE__ */ N(St, [["__scopeId", "data-v-559361eb"]]), It = { class: "status-grid" }, Et = { class: "status-grid__column" }, zt = { class: "status-grid__title" }, Lt = { class: "status-grid__column status-grid__column--right" }, Mt = { class: "status-grid__title" }, Bt = /* @__PURE__ */ D({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, a) => (t(), s("div", It, [
      o("div", Et, [
        o("h4", zt, d(e.leftTitle), 1),
        G(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Lt, [
        o("h4", Mt, d(e.rightTitle), 1),
        G(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ N(Bt, [["__scopeId", "data-v-fe556068"]]), Dt = {
  key: 0,
  class: "status-item__icon"
}, Nt = {
  key: 1,
  class: "status-item__count"
}, Ot = { class: "status-item__label" }, Rt = /* @__PURE__ */ D({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, a = P(() => `status-item--${l.variant}`);
    return (r, w) => (t(), s("div", {
      class: A(["status-item", a.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), s("span", Dt, d(e.icon), 1)) : c("", !0),
      e.count !== void 0 ? (t(), s("span", Nt, d(e.count), 1)) : c("", !0),
      o("span", Ot, d(e.label), 1)
    ], 2));
  }
}), ge = /* @__PURE__ */ N(Rt, [["__scopeId", "data-v-6f929183"]]), Wt = { class: "issue-card__header" }, Vt = { class: "issue-card__icon" }, At = { class: "issue-card__title" }, Ut = {
  key: 0,
  class: "issue-card__content"
}, Pt = {
  key: 0,
  class: "issue-card__description"
}, Ht = {
  key: 1,
  class: "issue-card__items"
}, Ft = {
  key: 2,
  class: "issue-card__actions"
}, Gt = /* @__PURE__ */ D({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, a = P(() => `issue-card--${l.severity}`);
    return (r, w) => (t(), s("div", {
      class: A(["issue-card", a.value])
    }, [
      o("div", Wt, [
        o("span", Vt, d(e.icon), 1),
        o("h4", At, d(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), s("div", Ut, [
        e.description ? (t(), s("p", Pt, d(e.description), 1)) : c("", !0),
        G(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      e.items && e.items.length ? (t(), s("div", Ht, [
        (t(!0), s(H, null, Y(e.items, (x, h) => (t(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          w[0] || (w[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, d(x), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (t(), s("div", Ft, [
        G(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ N(Gt, [["__scopeId", "data-v-df6aa348"]]), Kt = ["type", "disabled"], jt = {
  key: 0,
  class: "spinner"
}, qt = /* @__PURE__ */ D({
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
    return (l, a) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: A(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: a[0] || (a[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), s("span", jt)) : c("", !0),
      e.loading ? c("", !0) : G(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Kt));
  }
}), U = /* @__PURE__ */ N(qt, [["__scopeId", "data-v-772abe47"]]), Yt = { class: "empty-state" }, Zt = {
  key: 0,
  class: "empty-icon"
}, Xt = { class: "empty-message" }, Jt = /* @__PURE__ */ D({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, a) => (t(), s("div", Yt, [
      e.icon ? (t(), s("div", Zt, d(e.icon), 1)) : c("", !0),
      o("p", Xt, d(e.message), 1),
      e.actionLabel ? (t(), y(U, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (r) => l.$emit("action"))
      }, {
        default: n(() => [
          g(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), _e = /* @__PURE__ */ N(Jt, [["__scopeId", "data-v-4466284f"]]), Qt = { class: "branch-indicator" }, eo = { class: "branch-indicator__info" }, to = { class: "branch-indicator__label" }, oo = { class: "branch-indicator__name" }, ao = {
  key: 0,
  class: "branch-indicator__remote"
}, so = {
  key: 0,
  class: "branch-indicator__status"
}, no = {
  key: 0,
  class: "branch-indicator__ahead"
}, lo = {
  key: 1,
  class: "branch-indicator__behind"
}, ro = {
  key: 1,
  class: "branch-indicator__actions"
}, io = /* @__PURE__ */ D({
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
    return (l, a) => (t(), s("div", Qt, [
      o("div", eo, [
        o("span", to, d(e.label), 1),
        o("span", oo, d(e.branchName), 1),
        e.remote ? (t(), s("span", ao, "@" + d(e.remote), 1)) : c("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), s("div", so, [
        e.commitsAhead ? (t(), s("span", no, " ↑ " + d(e.commitsAhead) + " ahead ", 1)) : c("", !0),
        e.commitsBehind ? (t(), s("span", lo, " ↓ " + d(e.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      l.$slots.actions ? (t(), s("div", ro, [
        G(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), co = /* @__PURE__ */ N(io, [["__scopeId", "data-v-cb8dd50e"]]), uo = { style: { "margin-top": "var(--cg-space-1)" } }, mo = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, go = /* @__PURE__ */ D({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const a = e, r = P(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), w = P(() => {
      const u = a.status.git_changes;
      return u.nodes_added.length > 0 || u.nodes_removed.length > 0 || u.workflow_changes || u.has_other_changes;
    }), x = P(() => {
      const u = a.status.git_changes, k = a.status.workflows;
      return (u.workflow_changes || u.has_other_changes) && k.new.length === 0 && k.modified.length === 0 && k.deleted.length === 0;
    }), h = P(() => a.status.missing_models_count > 0 || w.value || !a.status.comparison.is_synced), p = P(() => {
      const u = [];
      return a.status.workflows.new.length > 0 && u.push(`${a.status.workflows.new.length} new workflow${a.status.workflows.new.length === 1 ? "" : "s"}`), a.status.workflows.modified.length > 0 && u.push(`${a.status.workflows.modified.length} modified workflow${a.status.workflows.modified.length === 1 ? "" : "s"}`), a.status.workflows.deleted.length > 0 && u.push(`${a.status.workflows.deleted.length} deleted workflow${a.status.workflows.deleted.length === 1 ? "" : "s"}`), a.status.git_changes.nodes_added.length > 0 && u.push(`${a.status.git_changes.nodes_added.length} node${a.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), a.status.git_changes.nodes_removed.length > 0 && u.push(`${a.status.git_changes.nodes_removed.length} node${a.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${u.length > 0 ? u.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (u, k) => (t(), y(we, null, {
      header: n(() => [
        _(ke, { title: "STATUS" })
      ]),
      content: n(() => [
        _(De, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: n(() => [...k[7] || (k[7] = [
            g(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        _(Tt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: n(() => [
            e.status.workflows.new.length ? (t(), y(ge, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : c("", !0),
            e.status.workflows.modified.length ? (t(), y(ge, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : c("", !0),
            e.status.workflows.deleted.length ? (t(), y(ge, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : c("", !0),
            _(ge, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: n(() => [
            e.status.git_changes.nodes_added.length ? (t(), y(ge, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : c("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), y(ge, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : c("", !0),
            x.value ? (t(), y(ge, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : c("", !0),
            w.value ? c("", !0) : (t(), y(ge, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", uo, [
          _(co, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: n(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: k[0] || (k[0] = (L) => u.$emit("switch-branch"))
              }, {
                default: n(() => [...k[8] || (k[8] = [
                  g(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        h.value ? (t(), s("div", mo, [
          _(De, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: n(() => [...k[9] || (k[9] = [
              g(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), y(Be, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: n(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: k[1] || (k[1] = (L) => u.$emit("view-workflows"))
              }, {
                default: n(() => [...k[10] || (k[10] = [
                  g(" View Details ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: k[2] || (k[2] = (L) => u.$emit("resolve-models"))
              }, {
                default: n(() => [...k[11] || (k[11] = [
                  g(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : c("", !0),
          w.value ? (t(), y(Be, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: p.value
          }, {
            actions: n(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: k[3] || (k[3] = (L) => u.$emit("view-history"))
              }, {
                default: n(() => [...k[12] || (k[12] = [
                  g(" View Changes ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: k[4] || (k[4] = (L) => u.$emit("commit-changes"))
              }, {
                default: n(() => [...k[13] || (k[13] = [
                  g(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : c("", !0),
          e.status.comparison.is_synced ? c("", !0) : (t(), y(Be, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: n(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: k[5] || (k[5] = (L) => u.$emit("view-debug"))
              }, {
                default: n(() => [...k[14] || (k[14] = [
                  g(" View Logs ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: k[6] || (k[6] = (L) => u.$emit("sync-environment"))
              }, {
                default: n(() => [...k[15] || (k[15] = [
                  g(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : c("", !0),
        !h.value && !w.value ? (t(), y(_e, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : c("", !0)
      ]),
      _: 1
    }));
  }
}), ho = /* @__PURE__ */ N(go, [["__scopeId", "data-v-2045da26"]]), fo = ["type", "value", "placeholder", "disabled"], vo = /* @__PURE__ */ D({
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
  setup(e, { expose: l, emit: a }) {
    const r = e, w = a, x = S(null);
    function h(p) {
      const u = p.target.value;
      w("update:modelValue", u);
    }
    return ue(() => {
      r.autoFocus && x.value && x.value.focus();
    }), l({
      focus: () => {
        var p;
        return (p = x.value) == null ? void 0 : p.focus();
      },
      blur: () => {
        var p;
        return (p = x.value) == null ? void 0 : p.blur();
      }
    }), (p, u) => (t(), s("input", {
      ref_key: "inputRef",
      ref: x,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: A(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: h,
      onKeyup: [
        u[0] || (u[0] = Se((k) => p.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Se((k) => p.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (k) => p.$emit("focus")),
      onBlur: u[3] || (u[3] = (k) => p.$emit("blur"))
    }, null, 42, fo));
  }
}), po = /* @__PURE__ */ N(vo, [["__scopeId", "data-v-0380d08f"]]), yo = { class: "branch-create-form" }, bo = { class: "form-actions" }, wo = /* @__PURE__ */ D({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const a = l, r = S(""), w = P(() => {
      const p = r.value.trim();
      return p.length > 0 && !p.startsWith("-") && !p.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(p);
    });
    function x() {
      w.value && (a("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", a("cancel");
    }
    return (p, u) => (t(), s("div", yo, [
      _(po, {
        modelValue: r.value,
        "onUpdate:modelValue": u[0] || (u[0] = (k) => r.value = k),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: x,
        onEscape: h
      }, null, 8, ["modelValue"]),
      o("div", bo, [
        _(U, {
          variant: "primary",
          size: "sm",
          disabled: !w.value,
          onClick: x
        }, {
          default: n(() => [...u[1] || (u[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        _(U, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: n(() => [...u[2] || (u[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ko = /* @__PURE__ */ N(wo, [["__scopeId", "data-v-7c500394"]]), _o = { class: "branch-list-item__indicator" }, $o = { class: "branch-list-item__name" }, xo = {
  key: 0,
  class: "branch-list-item__actions"
}, Co = {
  key: 0,
  class: "branch-list-item__current-label"
}, So = /* @__PURE__ */ D({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (l, a) => (t(), s("div", {
      class: A(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: a[0] || (a[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      o("span", _o, d(e.isCurrent ? "●" : "○"), 1),
      o("span", $o, d(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (t(), s("div", xo, [
        G(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), s("span", Co, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Io = /* @__PURE__ */ N(So, [["__scopeId", "data-v-c6581a24"]]), Eo = {
  key: 2,
  class: "branch-list"
}, zo = /* @__PURE__ */ D({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const a = l, r = S(!1);
    function w(h) {
      a("create", h), x();
    }
    function x() {
      r.value = !1;
    }
    return (h, p) => (t(), y(we, null, {
      header: n(() => [
        _(ke, { title: "BRANCHES" }, {
          actions: n(() => [
            _(U, {
              variant: "ghost",
              size: "sm",
              onClick: p[0] || (p[0] = (u) => r.value = !0),
              title: "Create new branch"
            }, {
              default: n(() => [...p[1] || (p[1] = [
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
      content: n(() => [
        r.value ? (t(), y(ko, {
          key: 0,
          onCreate: w,
          onCancel: x
        })) : c("", !0),
        e.branches.length === 0 ? (t(), y(_e, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), s("div", Eo, [
          (t(!0), s(H, null, Y(e.branches, (u) => (t(), y(Io, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: n(() => [
              u.is_current ? c("", !0) : (t(), y(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (k) => h.$emit("switch", u.name)
              }, {
                default: n(() => [...p[2] || (p[2] = [
                  g(" Switch ", -1)
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
}), Lo = /* @__PURE__ */ N(zo, [["__scopeId", "data-v-763d6ec4"]]), Mo = { class: "commit-list" }, Bo = /* @__PURE__ */ D({
  __name: "CommitList",
  setup(e) {
    return (l, a) => (t(), s("div", Mo, [
      G(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), To = /* @__PURE__ */ N(Bo, [["__scopeId", "data-v-8c5ee761"]]), Do = { class: "commit-hash" }, No = /* @__PURE__ */ D({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, a = P(() => l.hash.slice(0, l.length));
    return (r, w) => (t(), s("span", Do, d(a.value), 1));
  }
}), Oo = /* @__PURE__ */ N(No, [["__scopeId", "data-v-7c333cc6"]]), Ro = { class: "commit-message" }, Wo = { class: "commit-date" }, Vo = /* @__PURE__ */ D({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function w() {
      a.clickable && r("click");
    }
    return (x, h) => (t(), s("div", {
      class: A(["commit-item", { clickable: e.clickable }]),
      onClick: w
    }, [
      _(Oo, { hash: e.hash }, null, 8, ["hash"]),
      o("span", Ro, d(e.message), 1),
      o("span", Wo, d(e.relativeDate), 1),
      x.$slots.actions ? (t(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = be(() => {
        }, ["stop"]))
      }, [
        G(x.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ N(Vo, [["__scopeId", "data-v-dd7c621b"]]), Uo = /* @__PURE__ */ D({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, a) => (t(), y(we, null, {
      header: n(() => [
        _(ke, { title: "HISTORY" })
      ]),
      content: n(() => [
        e.commits.length === 0 ? (t(), y(_e, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), y(To, { key: 1 }, {
          default: n(() => [
            (t(!0), s(H, null, Y(e.commits, (r) => (t(), y(Ao, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (w) => l.$emit("select", r)
            }, {
              actions: n(() => [
                _(U, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (w) => l.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: n(() => [...a[0] || (a[0] = [
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
}), Po = /* @__PURE__ */ N(Uo, [["__scopeId", "data-v-981c3c64"]]), He = [
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
}, qe = [
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
], Fo = [
  ...qe,
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
], Ee = [
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
  createEnvironment: async (e, l, a) => {
    await Q(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${l}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await Q(400), He),
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
  installWorkflowDeps: async (e, l, a) => {
    await Q(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${l}, models=${a}`);
  },
  setModelImportance: async (e, l, a) => {
    await Q(200), console.log(`[MOCK] Setting ${l} importance to ${a} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await Q(350), qe),
  getWorkspaceModels: async () => (await Q(400), Fo),
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
  getEnvironmentLogs: async (e, l) => (await Q(250), (e ? Ee.filter((r) => r.level === e) : Ee).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await Q(300);
    const a = [...Ee, ...Ee.map((w) => ({
      ...w,
      context: { ...w.context, environment: "testing" }
    }))];
    return (e ? a.filter((w) => w.level === e) : a).slice(0, l || 100);
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
      synced: He.filter((e) => e.status === "synced").map((e) => e.name),
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
  const e = S(!1), l = S(null);
  async function a(E, q) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(E, q);
    if (!se.ok) {
      const Ie = await se.json().catch(() => ({}));
      throw new Error(Ie.error || Ie.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function r() {
    return J.getStatus();
  }
  async function w(E, q = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: E, allow_issues: q })
    });
  }
  async function x(E = 10, q = 0) {
    {
      const se = await J.getCommitHistory(E);
      return {
        commits: se,
        total: se.length,
        offset: q
      };
    }
  }
  async function h(E) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: E })
    });
  }
  async function p() {
    return J.getBranches();
  }
  async function u(E) {
    return a(`/v2/comfygit/commit/${E}`);
  }
  async function k(E, q = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: E, force: q })
    });
  }
  async function L(E, q = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: E, start_point: q })
    });
  }
  async function b(E, q = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: E, force: q })
    });
  }
  async function W() {
    return J.getEnvironments();
  }
  async function F(E) {
    return J.switchEnvironment(E);
  }
  async function ee() {
    return null;
  }
  async function j(E, q, se) {
    return await J.createEnvironment(E, q, se), { status: "success" };
  }
  async function M(E) {
    return await J.deleteEnvironment(E), { status: "success" };
  }
  async function R() {
    return J.getWorkflows();
  }
  async function Z(E) {
    return J.getWorkflowDetails(E);
  }
  async function te(E) {
    return J.resolveWorkflow(E);
  }
  async function O(E, q, se) {
    return await J.installWorkflowDeps(E, q, se), { status: "success" };
  }
  async function B(E, q, se) {
    return J.setModelImportance(E, q, se);
  }
  async function f() {
    return J.getEnvironmentModels();
  }
  async function v() {
    return J.getWorkspaceModels();
  }
  async function m(E, q) {
    return J.updateModelSource(E, q);
  }
  async function $(E) {
    return J.deleteModel(E);
  }
  async function C(E) {
    return await J.downloadModel(E), { status: "success" };
  }
  async function le() {
    return J.getConfig();
  }
  async function T(E) {
    return J.updateConfig(E);
  }
  async function I(E, q) {
    return J.getEnvironmentLogs(E, q);
  }
  async function K(E, q) {
    return J.getWorkspaceLogs(E, q);
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: w,
    getHistory: x,
    exportEnv: h,
    // Git Operations
    getBranches: p,
    getCommitDetail: u,
    checkout: k,
    createBranch: L,
    switchBranch: b,
    // Environment Management
    getEnvironments: W,
    switchEnvironment: F,
    getSwitchProgress: ee,
    createEnvironment: j,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: R,
    getWorkflowDetails: Z,
    resolveWorkflow: te,
    installWorkflowDeps: O,
    setModelImportance: B,
    // Model Management
    getEnvironmentModels: f,
    getWorkspaceModels: v,
    updateModelSource: m,
    deleteModel: $,
    downloadModel: C,
    // Settings
    getConfig: le,
    updateConfig: T,
    // Debug/Logs
    getEnvironmentLogs: I,
    getWorkspaceLogs: K
  };
}
const Ko = { class: "base-modal-header" }, jo = {
  key: 0,
  class: "base-modal-title"
}, qo = { class: "base-modal-body" }, Yo = {
  key: 0,
  class: "base-modal-loading"
}, Zo = {
  key: 1,
  class: "base-modal-error"
}, Xo = {
  key: 0,
  class: "base-modal-footer"
}, Jo = /* @__PURE__ */ D({
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
    const a = e, r = l;
    function w() {
      a.closeOnOverlayClick && r("close");
    }
    function x(h) {
      h.key === "Escape" && r("close");
    }
    return ue(() => {
      document.addEventListener("keydown", x), document.body.style.overflow = "hidden";
    }), nt(() => {
      document.removeEventListener("keydown", x), document.body.style.overflow = "";
    }), (h, p) => (t(), y(Fe, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: w
      }, [
        o("div", {
          class: A(["base-modal-content", e.size]),
          onClick: p[1] || (p[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", Ko, [
            G(h.$slots, "header", {}, () => [
              e.title ? (t(), s("h3", jo, d(e.title), 1)) : c("", !0)
            ], !0),
            e.showCloseButton ? (t(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: p[0] || (p[0] = (u) => h.$emit("close"))
            }, [...p[2] || (p[2] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : c("", !0)
          ]),
          o("div", qo, [
            e.loading ? (t(), s("div", Yo, "Loading...")) : e.error ? (t(), s("div", Zo, d(e.error), 1)) : G(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (t(), s("div", Xo, [
            G(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), Le = /* @__PURE__ */ N(Jo, [["__scopeId", "data-v-700d367b"]]), Qo = ["type", "disabled"], ea = {
  key: 0,
  class: "spinner"
}, ta = /* @__PURE__ */ D({
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
    return (l, a) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: A(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: a[0] || (a[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), s("span", ea)) : c("", !0),
      G(l.$slots, "default", {}, void 0, !0)
    ], 10, Qo));
  }
}), ne = /* @__PURE__ */ N(ta, [["__scopeId", "data-v-f3452606"]]), oa = {
  key: 0,
  class: "base-title-count"
}, aa = /* @__PURE__ */ D({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, a) => (t(), y(Oe(`h${e.level}`), {
      class: A(["base-title", e.variant])
    }, {
      default: n(() => [
        G(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), s("span", oa, "(" + d(e.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), he = /* @__PURE__ */ N(aa, [["__scopeId", "data-v-5a01561d"]]), sa = ["value", "disabled"], na = {
  key: 0,
  value: "",
  disabled: ""
}, la = ["value"], ra = {
  key: 0,
  class: "base-select-error"
}, ia = /* @__PURE__ */ D({
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
    function a(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, w) => (t(), s("div", {
      class: A(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: A(["base-select", { error: !!e.error }]),
        onChange: w[0] || (w[0] = (x) => r.$emit("update:modelValue", x.target.value))
      }, [
        e.placeholder ? (t(), s("option", na, d(e.placeholder), 1)) : c("", !0),
        (t(!0), s(H, null, Y(e.options, (x) => (t(), s("option", {
          key: l(x),
          value: l(x)
        }, d(a(x)), 9, la))), 128))
      ], 42, sa),
      e.error ? (t(), s("span", ra, d(e.error), 1)) : c("", !0)
    ], 2));
  }
}), ca = /* @__PURE__ */ N(ia, [["__scopeId", "data-v-7436d745"]]), da = { class: "detail-section" }, ua = {
  key: 0,
  class: "empty-message"
}, ma = { class: "model-header" }, ga = { class: "model-name" }, ha = { class: "model-details" }, fa = { class: "model-row" }, va = { class: "model-row" }, pa = {
  key: 0,
  class: "model-row"
}, ya = { class: "value" }, ba = {
  key: 1,
  class: "model-row"
}, wa = { class: "value" }, ka = {
  key: 0,
  class: "model-actions"
}, _a = { class: "detail-section" }, $a = {
  key: 0,
  class: "empty-message"
}, xa = { class: "node-name" }, Ca = {
  key: 0,
  class: "node-version"
}, Sa = /* @__PURE__ */ D({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const a = e, r = l, { getWorkflowDetails: w, setModelImportance: x } = fe(), h = S(null), p = S(!1), u = S(null), k = S(!1), L = S({}), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function W() {
      p.value = !0, u.value = null;
      try {
        h.value = await w(a.workflowName);
      } catch (j) {
        u.value = j instanceof Error ? j.message : "Failed to load workflow details";
      } finally {
        p.value = !1;
      }
    }
    function F(j, M) {
      L.value[j] = M, k.value = !0;
    }
    async function ee() {
      if (!k.value) {
        r("close");
        return;
      }
      p.value = !0, u.value = null;
      try {
        for (const [j, M] of Object.entries(L.value))
          await x(a.workflowName, j, M);
        r("close");
      } catch (j) {
        u.value = j instanceof Error ? j.message : "Failed to save changes";
      } finally {
        p.value = !1;
      }
    }
    return ue(W), (j, M) => (t(), y(Le, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: u.value || void 0,
      onClose: M[2] || (M[2] = (R) => r("close"))
    }, {
      body: n(() => [
        h.value ? (t(), s(H, { key: 0 }, [
          o("section", da, [
            _(he, { variant: "section" }, {
              default: n(() => [
                g("MODELS USED (" + d(h.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.models.length === 0 ? (t(), s("div", ua, " No models used in this workflow ")) : c("", !0),
            (t(!0), s(H, null, Y(h.value.models, (R) => (t(), s("div", {
              key: R.hash,
              class: "model-card"
            }, [
              o("div", ma, [
                M[3] || (M[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", ga, d(R.filename), 1)
              ]),
              o("div", ha, [
                o("div", fa, [
                  M[4] || (M[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: A(["value", R.status === "available" ? "success" : "error"])
                  }, d(R.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", va, [
                  M[5] || (M[5] = o("span", { class: "label" }, "Importance:", -1)),
                  _(ca, {
                    "model-value": L.value[R.hash] || R.importance,
                    options: b,
                    "onUpdate:modelValue": (Z) => F(R.hash, Z)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                R.node_type ? (t(), s("div", pa, [
                  M[6] || (M[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", ya, d(R.node_type) + " (Node " + d(R.node_id) + ")", 1)
                ])) : c("", !0),
                R.size_mb ? (t(), s("div", ba, [
                  M[7] || (M[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", wa, d(R.size_mb) + " MB", 1)
                ])) : c("", !0)
              ]),
              R.status === "missing" ? (t(), s("div", ka, [
                _(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[0] || (M[0] = (Z) => r("resolve"))
                }, {
                  default: n(() => [...M[8] || (M[8] = [
                    g(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : c("", !0)
            ]))), 128))
          ]),
          M[9] || (M[9] = o("div", { class: "info-box" }, [
            o("div", { class: "info-title" }, "Importance options:"),
            o("ul", { class: "info-list" }, [
              o("li", null, [
                o("strong", null, "Required"),
                g(" — Must have for workflow to run")
              ]),
              o("li", null, [
                o("strong", null, "Flexible"),
                g(" — Workflow adapts if missing")
              ]),
              o("li", null, [
                o("strong", null, "Optional"),
                g(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          o("section", _a, [
            _(he, { variant: "section" }, {
              default: n(() => [
                g("NODES USED (" + d(h.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.nodes.length === 0 ? (t(), s("div", $a, " No custom nodes used in this workflow ")) : c("", !0),
            (t(!0), s(H, null, Y(h.value.nodes, (R) => (t(), s("div", {
              key: R.name,
              class: "node-item"
            }, [
              o("span", {
                class: A(["node-status", R.installed ? "installed" : "missing"])
              }, d(R.installed ? "✓" : "✕"), 3),
              o("span", xa, d(R.name), 1),
              R.version ? (t(), s("span", Ca, "v" + d(R.version), 1)) : c("", !0)
            ]))), 128))
          ])
        ], 64)) : c("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: M[1] || (M[1] = (R) => r("close"))
        }, {
          default: n(() => [...M[10] || (M[10] = [
            g(" Close ", -1)
          ])]),
          _: 1
        }),
        k.value ? (t(), y(ne, {
          key: 0,
          variant: "primary",
          onClick: ee
        }, {
          default: n(() => [...M[11] || (M[11] = [
            g(" Save Changes ", -1)
          ])]),
          _: 1
        })) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ia = /* @__PURE__ */ N(Sa, [["__scopeId", "data-v-6ce9a41c"]]), Ea = {
  key: 0,
  class: "resolve-section"
}, za = { class: "resolve-card success-card" }, La = { class: "items-list" }, Ma = { class: "item-info" }, Ba = { class: "item-name" }, Ta = {
  key: 0,
  class: "item-meta"
}, Da = { class: "match-type" }, Na = { class: "source" }, Oa = {
  key: 1,
  class: "resolve-section"
}, Ra = { class: "resolve-card warning-card" }, Wa = { class: "items-list" }, Va = { class: "item-info" }, Aa = { class: "item-name" }, Ua = { class: "item-meta" }, Pa = { key: 0 }, Ha = { key: 1 }, Fa = {
  key: 0,
  class: "item-warning"
}, Ga = {
  key: 0,
  class: "item-action"
}, Ka = ["onClick"], ja = {
  key: 2,
  class: "resolve-section"
}, qa = { class: "info-text" }, Ya = { class: "actions-summary" }, Za = { class: "summary-list" }, Xa = { key: 0 }, Ja = { key: 1 }, Qa = { key: 2 }, es = {
  key: 0,
  class: "estimated-size"
}, ts = /* @__PURE__ */ D({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const a = e, r = l, { resolveWorkflow: w, installWorkflowDeps: x } = fe(), h = S(null), p = S(!1), u = S(!1), k = S(null), L = P(() => {
      var B;
      return h.value ? ((B = h.value.download_results) == null ? void 0 : B.every((f) => f.can_download)) ?? !1 : !1;
    });
    async function b() {
      p.value = !0, k.value = null;
      try {
        h.value = await w(a.workflowName);
      } catch (B) {
        k.value = B instanceof Error ? B.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function W(B) {
      return !B.possible_matches || B.possible_matches.length === 0 ? null : B.possible_matches.reduce(
        (f, v) => v.match_confidence > f.match_confidence ? v : f
      );
    }
    function F(B) {
      return B >= 0.9 ? "high" : B >= 0.7 ? "medium" : "low";
    }
    function ee(B) {
      const f = W(B);
      return f ? f.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function j(B) {
      var f, v;
      return (v = (f = h.value) == null ? void 0 : f.download_results) == null ? void 0 : v.find((m) => m.model === B);
    }
    function M(B) {
      const f = j(B);
      return (f == null ? void 0 : f.can_download) ?? !1;
    }
    function R(B) {
      const f = j(B);
      return (f == null ? void 0 : f.source_url) || null;
    }
    function Z(B) {
      window.open(B, "_blank");
    }
    async function te() {
      if (!(!h.value || u.value)) {
        u.value = !0, k.value = null;
        try {
          await x(
            a.workflowName,
            h.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (B) {
          k.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    async function O() {
      if (!(!h.value || u.value)) {
        u.value = !0, k.value = null;
        try {
          await x(
            a.workflowName,
            h.value.nodes_to_install,
            h.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (B) {
          k.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return ue(b), (B, f) => (t(), y(Le, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: k.value || void 0,
      onClose: f[1] || (f[1] = (v) => r("close"))
    }, {
      body: n(() => [
        h.value ? (t(), s(H, { key: 0 }, [
          f[5] || (f[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          h.value.nodes_unresolved.length > 0 ? (t(), s("section", Ea, [
            _(he, { variant: "section" }, {
              default: n(() => [
                g("NODES (" + d(h.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", za, [
              f[2] || (f[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", La, [
                (t(!0), s(H, null, Y(h.value.nodes_unresolved, (v) => {
                  var m;
                  return t(), s("div", {
                    key: v.node_type,
                    class: "item"
                  }, [
                    o("div", Ma, [
                      o("div", Ba, d(((m = W(v)) == null ? void 0 : m.package_id) || v.node_type), 1),
                      W(v) ? (t(), s("div", Ta, [
                        o("span", {
                          class: A(["confidence-badge", F(W(v).match_confidence)])
                        }, d(Math.round(W(v).match_confidence * 100)) + "% match ", 3),
                        o("span", Da, d(W(v).match_type), 1),
                        o("span", Na, "Source: " + d(ee(v)), 1)
                      ])) : c("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : c("", !0),
          h.value.models_unresolved.length > 0 ? (t(), s("section", Oa, [
            _(he, { variant: "section" }, {
              default: n(() => [
                g("MODELS (" + d(h.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ra, [
              f[3] || (f[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Wa, [
                (t(!0), s(H, null, Y(h.value.models_unresolved, (v) => (t(), s("div", {
                  key: v.filename,
                  class: "item"
                }, [
                  o("div", Va, [
                    o("div", Aa, d(v.filename), 1),
                    o("div", Ua, [
                      v.expected_category ? (t(), s("span", Pa, "Type: " + d(v.expected_category), 1)) : c("", !0),
                      j(v.filename) ? (t(), s("span", Ha, " Size: ~" + d(j(v.filename).estimated_size_mb) + " MB ", 1)) : c("", !0)
                    ]),
                    M(v.filename) ? c("", !0) : (t(), s("div", Fa, " No auto-download source configured "))
                  ]),
                  R(v.filename) ? (t(), s("div", Ga, [
                    o("button", {
                      class: "link-btn",
                      onClick: (m) => Z(R(v.filename))
                    }, " Open Source ↗ ", 8, Ka)
                  ])) : c("", !0)
                ]))), 128))
              ])
            ])
          ])) : c("", !0),
          h.value.nodes_resolved.length > 0 || h.value.models_resolved.length > 0 ? (t(), s("section", ja, [
            _(he, { variant: "section" }, {
              default: n(() => [
                g(" ALREADY AVAILABLE (" + d(h.value.nodes_resolved.length + h.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", qa, d(h.value.nodes_resolved.length) + " nodes and " + d(h.value.models_resolved.length) + " models are already installed ", 1)
          ])) : c("", !0),
          o("div", Ya, [
            f[4] || (f[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", Za, [
              h.value.nodes_to_install.length ? (t(), s("li", Xa, " Install " + d(h.value.nodes_to_install.length) + " nodes (~" + d(h.value.estimated_time_seconds) + "s) ", 1)) : c("", !0),
              h.value.nodes_to_install.length ? (t(), s("li", Ja, " Restart ComfyUI to load new nodes ")) : c("", !0),
              h.value.models_to_download.length ? (t(), s("li", Qa, " You'll still need to download " + d(h.value.models_to_download.length) + " model(s) manually ", 1)) : c("", !0)
            ]),
            h.value.estimated_size_mb ? (t(), s("div", es, " Estimated download: " + d(h.value.estimated_size_mb) + " MB ", 1)) : c("", !0)
          ])
        ], 64)) : c("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: f[0] || (f[0] = (v) => r("close"))
        }, {
          default: n(() => [...f[6] || (f[6] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h.value && h.value.nodes_to_install.length && h.value.models_to_download.length ? (t(), y(ne, {
          key: 0,
          variant: "secondary",
          disabled: u.value,
          loading: u.value,
          onClick: te
        }, {
          default: n(() => [...f[7] || (f[7] = [
            g(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0),
        h.value && (h.value.nodes_to_install.length || h.value.models_to_download.length) ? (t(), y(ne, {
          key: 1,
          variant: "primary",
          disabled: u.value || h.value.models_to_download.length > 0 && !L.value,
          loading: u.value,
          onClick: O
        }, {
          default: n(() => [...f[8] || (f[8] = [
            g(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), os = /* @__PURE__ */ N(ts, [["__scopeId", "data-v-d68efb14"]]), as = { class: "search-input-wrapper" }, ss = ["value", "placeholder"], ns = /* @__PURE__ */ D({
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
    const a = e, r = l, w = S(null);
    let x;
    function h(u) {
      const k = u.target.value;
      a.debounce > 0 ? (clearTimeout(x), x = window.setTimeout(() => {
        r("update:modelValue", k);
      }, a.debounce)) : r("update:modelValue", k);
    }
    function p() {
      var u;
      r("update:modelValue", ""), r("clear"), (u = w.value) == null || u.focus();
    }
    return ue(() => {
      a.autoFocus && w.value && w.value.focus();
    }), (u, k) => (t(), s("div", as, [
      o("input", {
        ref_key: "inputRef",
        ref: w,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Se(p, ["escape"])
      }, null, 40, ss),
      e.clearable && e.modelValue ? (t(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: p,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), ls = /* @__PURE__ */ N(ns, [["__scopeId", "data-v-266f857a"]]), rs = { class: "search-bar" }, is = /* @__PURE__ */ D({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, a) => (t(), s("div", rs, [
      _(ls, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: a[1] || (a[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Re = /* @__PURE__ */ N(is, [["__scopeId", "data-v-3d51bbfd"]]), cs = { class: "section-group" }, ds = {
  key: 0,
  class: "section-content"
}, us = /* @__PURE__ */ D({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, w = S(a.initiallyExpanded);
    function x() {
      a.collapsible && (w.value = !w.value, r("toggle", w.value));
    }
    return (h, p) => (t(), s("section", cs, [
      _(De, {
        count: e.count,
        clickable: e.collapsible,
        expanded: w.value,
        onClick: x
      }, {
        default: n(() => [
          g(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || w.value ? (t(), s("div", ds, [
        G(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ce = /* @__PURE__ */ N(us, [["__scopeId", "data-v-c48e33ed"]]), ms = { class: "item-header" }, gs = {
  key: 0,
  class: "item-icon"
}, hs = { class: "item-info" }, fs = {
  key: 0,
  class: "item-title"
}, vs = {
  key: 1,
  class: "item-subtitle"
}, ps = {
  key: 0,
  class: "item-details"
}, ys = {
  key: 1,
  class: "item-actions"
}, bs = /* @__PURE__ */ D({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = e, r = P(() => a.status ? `status-${a.status}` : "");
    return (w, x) => (t(), s("div", {
      class: A(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: x[0] || (x[0] = (h) => e.clickable && w.$emit("click"))
    }, [
      o("div", ms, [
        w.$slots.icon ? (t(), s("span", gs, [
          G(w.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        o("div", hs, [
          w.$slots.title ? (t(), s("div", fs, [
            G(w.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          w.$slots.subtitle ? (t(), s("div", vs, [
            G(w.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      w.$slots.details ? (t(), s("div", ps, [
        G(w.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      w.$slots.actions ? (t(), s("div", ys, [
        G(w.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ N(bs, [["__scopeId", "data-v-cc435e0e"]]), ws = { class: "loading-state" }, ks = { class: "loading-message" }, _s = /* @__PURE__ */ D({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, a) => (t(), s("div", ws, [
      a[0] || (a[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", ks, d(e.message), 1)
    ]));
  }
}), We = /* @__PURE__ */ N(_s, [["__scopeId", "data-v-ad8436c9"]]), $s = { class: "error-state" }, xs = { class: "error-message" }, Cs = /* @__PURE__ */ D({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, a) => (t(), s("div", $s, [
      a[2] || (a[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", xs, d(e.message), 1),
      e.retry ? (t(), y(U, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (r) => l.$emit("retry"))
      }, {
        default: n(() => [...a[1] || (a[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ve = /* @__PURE__ */ N(Cs, [["__scopeId", "data-v-5397be48"]]), Ss = /* @__PURE__ */ D({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const a = l, { getWorkflows: r } = fe(), w = S([]), x = S(!1), h = S(null), p = S(""), u = S(!1), k = S(!1), L = S(!1), b = S(!1), W = S(null), F = P(
      () => w.value.filter((T) => T.status === "broken")
    ), ee = P(
      () => w.value.filter((T) => T.status === "new")
    ), j = P(
      () => w.value.filter((T) => T.status === "modified")
    ), M = P(
      () => w.value.filter((T) => T.status === "synced")
    ), R = P(() => {
      if (!p.value.trim()) return w.value;
      const T = p.value.toLowerCase();
      return w.value.filter((I) => I.name.toLowerCase().includes(T));
    }), Z = P(
      () => F.value.filter(
        (T) => !p.value.trim() || T.name.toLowerCase().includes(p.value.toLowerCase())
      )
    ), te = P(
      () => ee.value.filter(
        (T) => !p.value.trim() || T.name.toLowerCase().includes(p.value.toLowerCase())
      )
    ), O = P(
      () => j.value.filter(
        (T) => !p.value.trim() || T.name.toLowerCase().includes(p.value.toLowerCase())
      )
    ), B = P(
      () => M.value.filter(
        (T) => !p.value.trim() || T.name.toLowerCase().includes(p.value.toLowerCase())
      )
    ), f = P(
      () => k.value ? B.value : B.value.slice(0, 5)
    );
    async function v() {
      x.value = !0, h.value = null;
      try {
        w.value = await r();
      } catch (T) {
        h.value = T instanceof Error ? T.message : "Failed to load workflows";
      } finally {
        x.value = !1;
      }
    }
    function m(T) {
      W.value = T, L.value = !0;
    }
    function $(T) {
      W.value = T, b.value = !0;
    }
    function C() {
      alert("Bulk resolution not yet implemented");
    }
    function le() {
      a("refresh");
    }
    return ue(v), (T, I) => (t(), s(H, null, [
      _(we, null, {
        header: n(() => [
          _(ke, { title: "WORKFLOWS" }, {
            actions: n(() => [
              F.value.length > 0 ? (t(), y(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: n(() => [...I[7] || (I[7] = [
                  g(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          _(Re, {
            modelValue: p.value,
            "onUpdate:modelValue": I[0] || (I[0] = (K) => p.value = K),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          x.value ? (t(), y(We, {
            key: 0,
            message: "Loading workflows..."
          })) : h.value ? (t(), y(Ve, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: v
          }, null, 8, ["message"])) : (t(), s(H, { key: 2 }, [
            Z.value.length ? (t(), y(ce, {
              key: 0,
              title: "BROKEN",
              count: Z.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(Z.value, (K) => (t(), y(de, {
                  key: K.name,
                  status: "broken"
                }, {
                  icon: n(() => [...I[8] || (I[8] = [
                    g("⚠", -1)
                  ])]),
                  title: n(() => [
                    g(d(K.name), 1)
                  ]),
                  subtitle: n(() => [
                    g(" Missing: " + d(K.missing_nodes) + " nodes, " + d(K.missing_models) + " models ", 1)
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => $(K.name)
                    }, {
                      default: n(() => [...I[9] || (I[9] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => m(K.name)
                    }, {
                      default: n(() => [...I[10] || (I[10] = [
                        g(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            te.value.length ? (t(), y(ce, {
              key: 1,
              title: "NEW",
              count: te.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(te.value, (K) => (t(), y(de, {
                  key: K.name,
                  status: "new"
                }, {
                  icon: n(() => [...I[11] || (I[11] = [
                    g("●", -1)
                  ])]),
                  title: n(() => [
                    g(d(K.name), 1)
                  ]),
                  subtitle: n(() => [...I[12] || (I[12] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => m(K.name)
                    }, {
                      default: n(() => [...I[13] || (I[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            O.value.length ? (t(), y(ce, {
              key: 2,
              title: "MODIFIED",
              count: O.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(O.value, (K) => (t(), y(de, {
                  key: K.name,
                  status: "modified"
                }, {
                  icon: n(() => [...I[14] || (I[14] = [
                    g("⚡", -1)
                  ])]),
                  title: n(() => [
                    g(d(K.name), 1)
                  ]),
                  subtitle: n(() => [...I[15] || (I[15] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => m(K.name)
                    }, {
                      default: n(() => [...I[16] || (I[16] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            B.value.length ? (t(), y(ce, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: I[2] || (I[2] = (K) => u.value = K)
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(f.value, (K) => (t(), y(de, {
                  key: K.name,
                  status: "synced"
                }, {
                  icon: n(() => [...I[17] || (I[17] = [
                    g("✓", -1)
                  ])]),
                  title: n(() => [
                    g(d(K.name), 1)
                  ]),
                  subtitle: n(() => [...I[18] || (I[18] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => m(K.name)
                    }, {
                      default: n(() => [...I[19] || (I[19] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !k.value && B.value.length > 5 ? (t(), y(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: I[1] || (I[1] = (K) => k.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: n(() => [
                    g(" View all " + d(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            R.value.length ? c("", !0) : (t(), y(_e, {
              key: 4,
              icon: "📭",
              message: p.value ? `No workflows match '${p.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      L.value && W.value ? (t(), y(Ia, {
        key: 0,
        "workflow-name": W.value,
        onClose: I[3] || (I[3] = (K) => L.value = !1),
        onResolve: I[4] || (I[4] = (K) => $(W.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      b.value && W.value ? (t(), y(os, {
        key: 1,
        "workflow-name": W.value,
        onClose: I[5] || (I[5] = (K) => b.value = !1),
        onInstall: le,
        onRefresh: I[6] || (I[6] = (K) => a("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Is = /* @__PURE__ */ N(Ss, [["__scopeId", "data-v-2251d776"]]), Es = /* @__PURE__ */ D({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, a) => (t(), s("span", {
      class: A(["detail-label"]),
      style: Ge({ minWidth: e.minWidth })
    }, [
      G(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), zs = /* @__PURE__ */ N(Es, [["__scopeId", "data-v-75e9eeb8"]]), Ls = /* @__PURE__ */ D({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, a) => (t(), s("span", {
      class: A(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      G(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ms = /* @__PURE__ */ N(Ls, [["__scopeId", "data-v-2f186e4c"]]), Bs = { class: "detail-row" }, Ts = /* @__PURE__ */ D({
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
    return (l, a) => (t(), s("div", Bs, [
      _(zs, { "min-width": e.labelMinWidth }, {
        default: n(() => [
          g(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), y(Ms, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: n(() => [
          g(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : G(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), oe = /* @__PURE__ */ N(Ts, [["__scopeId", "data-v-ef15664a"]]), Ds = /* @__PURE__ */ D({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, a) => (t(), s("div", {
      class: A(["summary-bar", e.variant])
    }, [
      G(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ N(Ds, [["__scopeId", "data-v-ccb7816e"]]), Ns = { class: "popover-header" }, Os = { class: "popover-title" }, Rs = { class: "popover-content" }, Ws = {
  key: 0,
  class: "popover-actions"
}, Vs = /* @__PURE__ */ D({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, a) => (t(), y(Fe, { to: "body" }, [
      e.show ? (t(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (r) => l.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: Ge({ maxWidth: e.maxWidth }),
          onClick: a[1] || (a[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", Ns, [
            o("h4", Os, d(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          o("div", Rs, [
            G(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (t(), s("div", Ws, [
            G(l.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Ze = /* @__PURE__ */ N(Vs, [["__scopeId", "data-v-057df510"]]), As = /* @__PURE__ */ D({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const a = l, { getEnvironmentModels: r, getStatus: w } = fe(), x = S([]), h = S([]), p = S("production"), u = S(!1), k = S(null), L = S(""), b = S(!1);
    function W() {
      b.value = !1, a("navigate", "model-index");
    }
    const F = P(
      () => x.value.reduce((m, $) => m + ($.size_mb || $.size || 0), 0)
    ), ee = P(() => {
      if (!L.value.trim()) return x.value;
      const m = L.value.toLowerCase();
      return x.value.filter(($) => $.filename.toLowerCase().includes(m));
    }), j = P(() => {
      if (!L.value.trim()) return h.value;
      const m = L.value.toLowerCase();
      return h.value.filter(($) => $.filename.toLowerCase().includes(m));
    }), M = P(
      () => ee.value.filter((m) => m.type === "checkpoints" || m.category === "checkpoints")
    ), R = P(
      () => ee.value.filter((m) => m.type === "loras" || m.category === "loras")
    ), Z = P(
      () => ee.value.filter(
        (m) => m.type !== "checkpoints" && m.category !== "checkpoints" && m.type !== "loras" && m.category !== "loras"
      )
    );
    function te(m) {
      return m ? m >= 1024 ? `${(m / 1024).toFixed(1)} GB` : `${m.toFixed(0)} MB` : "Unknown";
    }
    function O(m) {
      a("navigate", "model-index");
    }
    function B(m) {
      a("navigate", "model-index");
    }
    function f(m) {
      alert(`Download functionality not yet implemented for ${m}`);
    }
    async function v() {
      u.value = !0, k.value = null;
      try {
        const m = await r();
        x.value = m, h.value = [];
        const $ = await w();
        p.value = $.environment || "production";
      } catch (m) {
        k.value = m instanceof Error ? m.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return ue(v), (m, $) => (t(), s(H, null, [
      _(we, null, {
        header: n(() => [
          _(ke, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => b.value = !0)
          })
        ]),
        search: n(() => [
          _(Re, {
            modelValue: L.value,
            "onUpdate:modelValue": $[1] || ($[1] = (C) => L.value = C),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          u.value ? (t(), y(We, {
            key: 0,
            message: "Loading environment models..."
          })) : k.value ? (t(), y(Ve, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: v
          }, null, 8, ["message"])) : (t(), s(H, { key: 2 }, [
            x.value.length ? (t(), y(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                g(" Total: " + d(x.value.length) + " models • " + d(te(F.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            M.value.length ? (t(), y(ce, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(M.value, (C) => (t(), y(de, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...$[3] || ($[3] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(d(C.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(d(te(C.size_mb || C.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => O(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: n(() => [...$[4] || ($[4] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            R.value.length ? (t(), y(ce, {
              key: 2,
              title: "LORAS",
              count: R.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(R.value, (C) => (t(), y(de, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...$[5] || ($[5] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(d(C.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(d(te(C.size_mb || C.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => O(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: n(() => [...$[6] || ($[6] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            Z.value.length ? (t(), y(ce, {
              key: 3,
              title: "OTHER",
              count: Z.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(Z.value, (C) => (t(), y(de, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...$[7] || ($[7] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(d(C.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(d(te(C.size_mb || C.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Type:",
                      value: C.type
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => O(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: n(() => [...$[8] || ($[8] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            j.value.length ? (t(), y(ce, {
              key: 4,
              title: "MISSING",
              count: j.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(j.value, (C) => (t(), y(de, {
                  key: C.filename,
                  status: "broken"
                }, {
                  icon: n(() => [...$[9] || ($[9] = [
                    g("⚠", -1)
                  ])]),
                  title: n(() => [
                    g(d(C.filename), 1)
                  ]),
                  subtitle: n(() => [...$[10] || ($[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: n(() => {
                    var le;
                    return [
                      _(oe, {
                        label: "Required by:",
                        value: ((le = C.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: n(() => [
                    _(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => f(C.filename)
                    }, {
                      default: n(() => [...$[11] || ($[11] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => B(C.filename)
                    }, {
                      default: n(() => [...$[12] || ($[12] = [
                        g(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !ee.value.length && !j.value.length ? (t(), y(_e, {
              key: 5,
              icon: "📭",
              message: L.value ? `No models match '${L.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Ze, {
        show: b.value,
        title: "About Environment Models",
        onClose: $[2] || ($[2] = (C) => b.value = !1)
      }, {
        content: n(() => [
          o("p", null, [
            $[13] || ($[13] = g(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + d(p.value) + '"', 1),
            $[14] || ($[14] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: n(() => [
          _(U, {
            variant: "primary",
            onClick: W
          }, {
            default: n(() => [...$[15] || ($[15] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Us = /* @__PURE__ */ N(As, [["__scopeId", "data-v-865641a4"]]), Ps = /* @__PURE__ */ D({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = fe(), a = S([]), r = S(!1), w = S(null), x = S(""), h = S(!1), p = P(
      () => a.value.reduce((f, v) => f + (v.size_mb || v.size || 0), 0)
    ), u = P(() => {
      const f = /* @__PURE__ */ new Set();
      return a.value.forEach((v) => {
        v.used_in_environments && v.used_in_environments.length > 0 && v.used_in_environments.forEach((m) => f.add(m.env_name));
      }), f.size;
    }), k = P(() => {
      if (!x.value.trim()) return a.value;
      const f = x.value.toLowerCase();
      return a.value.filter((v) => {
        const m = v, $ = v.sha256 || m.sha256_hash || "";
        return v.filename.toLowerCase().includes(f) || $.toLowerCase().includes(f);
      });
    }), L = P(
      () => k.value.filter((f) => f.type === "checkpoints")
    ), b = P(
      () => k.value.filter((f) => f.type === "loras")
    ), W = P(
      () => k.value.filter((f) => f.type !== "checkpoints" && f.type !== "loras")
    );
    function F(f) {
      return f ? f >= 1024 ? `${(f / 1024).toFixed(1)} GB` : `${f.toFixed(0)} MB` : "Unknown";
    }
    function ee(f) {
      const v = f, m = f.used_in_workflows || v.used_by || [];
      return !m || m.length === 0 ? "Not used" : `${m.length} workflow(s)`;
    }
    function j(f) {
      navigator.clipboard.writeText(f), alert("Hash copied to clipboard");
    }
    function M(f) {
      prompt("Enter model source URL:", f.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function R(f) {
      const v = f, m = f.used_in_workflows || v.used_by || [], $ = m && m.length > 0 ? `

⚠ WARNING: This model is used by ${m.length} workflow(s):
${m.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${f.filename}?${$}

This will free ${F(v.size_mb || f.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Z() {
      alert("Scan for models not yet implemented");
    }
    function te() {
      alert("Change directory not yet implemented");
    }
    function O() {
      alert("Download new model not yet implemented");
    }
    async function B() {
      r.value = !0, w.value = null;
      try {
        a.value = await l(), console.log("Loaded models:", a.value), console.log("Filtered checkpoints:", L.value), console.log("Filtered loras:", b.value), console.log("Filtered other:", W.value);
      } catch (f) {
        w.value = f instanceof Error ? f.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ue(B), (f, v) => (t(), s(H, null, [
      _(we, null, {
        header: n(() => [
          _(ke, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: v[0] || (v[0] = (m) => h.value = !0)
          }, {
            actions: n(() => [
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: n(() => [...v[3] || (v[3] = [
                  g(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: n(() => [...v[4] || (v[4] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: n(() => [...v[5] || (v[5] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          _(Re, {
            modelValue: x.value,
            "onUpdate:modelValue": v[1] || (v[1] = (m) => x.value = m),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          r.value ? (t(), y(We, {
            key: 0,
            message: "Loading workspace models..."
          })) : w.value ? (t(), y(Ve, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (t(), s(H, { key: 2 }, [
            a.value.length ? (t(), y(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                g(" Total: " + d(a.value.length) + " models • " + d(F(p.value)) + " • Used in " + d(u.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            L.value.length ? (t(), y(ce, {
              key: 1,
              title: "CHECKPOINTS",
              count: L.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(L.value, (m) => (t(), y(de, {
                  key: m.sha256 || m.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...v[6] || (v[6] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(d(m.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(d(F(m.size_mb || m.size)), 1)
                  ]),
                  details: n(() => {
                    var $, C;
                    return [
                      m.sha256 || m.sha256_hash ? (t(), y(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (m.sha256 || m.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      _(oe, {
                        label: "Used in:",
                        value: ee(m)
                      }, null, 8, ["value"]),
                      m.source_url || ($ = m.sources) != null && $[0] ? (t(), y(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: m.source_url || ((C = m.sources) == null ? void 0 : C[0])
                      }, null, 8, ["value"])) : (t(), y(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...v[7] || (v[7] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => M(m)
                    }, {
                      default: n(() => [...v[8] || (v[8] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m.sha256 || m.sha256_hash ? (t(), y(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => j(m.sha256 || m.sha256_hash)
                    }, {
                      default: n(() => [...v[9] || (v[9] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: ($) => R(m)
                    }, {
                      default: n(() => [...v[10] || (v[10] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            b.value.length ? (t(), y(ce, {
              key: 2,
              title: "LORAS",
              count: b.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(b.value, (m) => (t(), y(de, {
                  key: m.sha256 || m.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...v[11] || (v[11] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(d(m.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(d(F(m.size_mb || m.size)), 1)
                  ]),
                  details: n(() => {
                    var $, C;
                    return [
                      m.sha256 || m.sha256_hash ? (t(), y(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (m.sha256 || m.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      _(oe, {
                        label: "Used in:",
                        value: ee(m)
                      }, null, 8, ["value"]),
                      m.source_url || ($ = m.sources) != null && $[0] ? (t(), y(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: m.source_url || ((C = m.sources) == null ? void 0 : C[0])
                      }, null, 8, ["value"])) : (t(), y(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...v[12] || (v[12] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => M(m)
                    }, {
                      default: n(() => [...v[13] || (v[13] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m.sha256 || m.sha256_hash ? (t(), y(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => j(m.sha256 || m.sha256_hash)
                    }, {
                      default: n(() => [...v[14] || (v[14] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: ($) => R(m)
                    }, {
                      default: n(() => [...v[15] || (v[15] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            W.value.length ? (t(), y(ce, {
              key: 3,
              title: "OTHER",
              count: W.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(W.value, (m) => (t(), y(de, {
                  key: m.sha256 || m.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...v[16] || (v[16] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(d(m.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(d(F(m.size_mb || m.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Type:",
                      value: m.type
                    }, null, 8, ["value"]),
                    m.sha256 || m.sha256_hash ? (t(), y(oe, {
                      key: 0,
                      label: "SHA256:",
                      value: (m.sha256 || m.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    _(oe, {
                      label: "Used in:",
                      value: ee(m)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => M(m)
                    }, {
                      default: n(() => [...v[17] || (v[17] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m.sha256 || m.sha256_hash ? (t(), y(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => j(m.sha256 || m.sha256_hash)
                    }, {
                      default: n(() => [...v[18] || (v[18] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: ($) => R(m)
                    }, {
                      default: n(() => [...v[19] || (v[19] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            k.value.length ? c("", !0) : (t(), y(_e, {
              key: 4,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _(Ze, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: v[2] || (v[2] = (m) => h.value = !1)
      }, {
        content: n(() => [...v[20] || (v[20] = [
          o("p", null, [
            g(" Content-addressable model storage shared across "),
            o("strong", null, "all environments"),
            g(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Hs = /* @__PURE__ */ N(Ps, [["__scopeId", "data-v-5a24af01"]]), Fs = { class: "header-info" }, Gs = { class: "commit-hash" }, Ks = {
  key: 0,
  class: "commit-refs"
}, js = { class: "commit-message" }, qs = { class: "commit-date" }, Ys = {
  key: 0,
  class: "loading"
}, Zs = {
  key: 1,
  class: "changes-section"
}, Xs = { class: "stats-row" }, Js = { class: "stat" }, Qs = { class: "stat insertions" }, en = { class: "stat deletions" }, tn = {
  key: 0,
  class: "change-group"
}, on = {
  key: 1,
  class: "change-group"
}, an = {
  key: 0,
  class: "version"
}, sn = {
  key: 2,
  class: "change-group"
}, nn = { class: "change-item" }, ln = /* @__PURE__ */ D({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: a } = fe(), r = S(null), w = S(!0), x = P(() => {
      if (!r.value) return !1;
      const p = r.value.changes.workflows;
      return p.added.length > 0 || p.modified.length > 0 || p.deleted.length > 0;
    }), h = P(() => {
      if (!r.value) return !1;
      const p = r.value.changes.nodes;
      return p.added.length > 0 || p.removed.length > 0;
    });
    return ue(async () => {
      try {
        r.value = await a(l.commit.hash);
      } finally {
        w.value = !1;
      }
    }), (p, u) => (t(), y(Le, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (k) => p.$emit("close"))
    }, {
      header: n(() => {
        var k, L, b, W;
        return [
          o("div", Fs, [
            u[4] || (u[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", Gs, d(((k = r.value) == null ? void 0 : k.short_hash) || e.commit.short_hash || ((L = e.commit.hash) == null ? void 0 : L.slice(0, 7))), 1),
            (W = (b = r.value) == null ? void 0 : b.refs) != null && W.length ? (t(), s("span", Ks, [
              (t(!0), s(H, null, Y(r.value.refs, (F) => (t(), s("span", {
                key: F,
                class: "ref-badge"
              }, d(F), 1))), 128))
            ])) : c("", !0)
          ]),
          _(ne, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (F) => p.$emit("close"))
          }, {
            default: n(() => [...u[5] || (u[5] = [
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
      body: n(() => {
        var k, L;
        return [
          o("div", js, d(((k = r.value) == null ? void 0 : k.message) || e.commit.message), 1),
          o("div", qs, d(((L = r.value) == null ? void 0 : L.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          w.value ? (t(), s("div", Ys, "Loading details...")) : r.value ? (t(), s("div", Zs, [
            o("div", Xs, [
              o("span", Js, d(r.value.stats.files_changed) + " files", 1),
              o("span", Qs, "+" + d(r.value.stats.insertions), 1),
              o("span", en, "-" + d(r.value.stats.deletions), 1)
            ]),
            x.value ? (t(), s("div", tn, [
              _(he, { variant: "section" }, {
                default: n(() => [...u[6] || (u[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(H, null, Y(r.value.changes.workflows.added, (b) => (t(), s("div", {
                key: "add-" + b,
                class: "change-item added"
              }, [
                u[7] || (u[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, d(b), 1)
              ]))), 128)),
              (t(!0), s(H, null, Y(r.value.changes.workflows.modified, (b) => (t(), s("div", {
                key: "mod-" + b,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, d(b), 1)
              ]))), 128)),
              (t(!0), s(H, null, Y(r.value.changes.workflows.deleted, (b) => (t(), s("div", {
                key: "del-" + b,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, d(b), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (t(), s("div", on, [
              _(he, { variant: "section" }, {
                default: n(() => [...u[10] || (u[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(H, null, Y(r.value.changes.nodes.added, (b) => (t(), s("div", {
                key: "add-" + b.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, d(b.name), 1),
                b.version ? (t(), s("span", an, "(" + d(b.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (t(!0), s(H, null, Y(r.value.changes.nodes.removed, (b) => (t(), s("div", {
                key: "rem-" + b.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, d(b.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (t(), s("div", sn, [
              _(he, { variant: "section" }, {
                default: n(() => [...u[13] || (u[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", nn, [
                u[14] || (u[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, d(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (k) => p.$emit("createBranch", e.commit))
        }, {
          default: n(() => [...u[15] || (u[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        _(ne, {
          variant: "primary",
          onClick: u[2] || (u[2] = (k) => p.$emit("checkout", e.commit))
        }, {
          default: n(() => [...u[16] || (u[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), rn = /* @__PURE__ */ N(ln, [["__scopeId", "data-v-d256ff6d"]]), cn = { class: "dialog-message" }, dn = {
  key: 0,
  class: "dialog-details"
}, un = {
  key: 1,
  class: "dialog-warning"
}, mn = /* @__PURE__ */ D({
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
    return (l, a) => (t(), y(Le, {
      title: e.title,
      size: "sm",
      onClose: a[3] || (a[3] = (r) => l.$emit("cancel"))
    }, {
      body: n(() => [
        o("p", cn, d(e.message), 1),
        e.details && e.details.length ? (t(), s("div", dn, [
          (t(!0), s(H, null, Y(e.details, (r, w) => (t(), s("div", {
            key: w,
            class: "detail-item"
          }, " • " + d(r), 1))), 128))
        ])) : c("", !0),
        e.warning ? (t(), s("p", un, [
          a[4] || (a[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + d(e.warning), 1)
        ])) : c("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (r) => l.$emit("cancel"))
        }, {
          default: n(() => [
            g(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), y(ne, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (r) => l.$emit("secondary"))
        }, {
          default: n(() => [
            g(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        _(ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (r) => l.$emit("confirm"))
        }, {
          default: n(() => [
            g(d(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gn = /* @__PURE__ */ N(mn, [["__scopeId", "data-v-3670b9f5"]]), hn = { class: "comfygit-panel" }, fn = { class: "panel-header" }, vn = { class: "header-left" }, pn = {
  key: 0,
  class: "header-info"
}, yn = { class: "header-actions" }, bn = { class: "env-switcher" }, wn = {
  key: 0,
  class: "header-info"
}, kn = { class: "branch-name" }, _n = { class: "panel-main" }, $n = { class: "sidebar" }, xn = { class: "sidebar-section" }, Cn = { class: "sidebar-section" }, Sn = { class: "sidebar-section" }, In = { class: "content-area" }, En = {
  key: 0,
  class: "error-message"
}, zn = {
  key: 1,
  class: "loading"
}, Ln = {
  key: 5,
  class: "view-placeholder"
}, Mn = {
  key: 6,
  class: "view-placeholder"
}, Bn = {
  key: 7,
  class: "view-placeholder"
}, Tn = {
  key: 9,
  class: "view-placeholder"
}, Dn = {
  key: 10,
  class: "view-placeholder"
}, Nn = {
  key: 11,
  class: "view-placeholder"
}, On = {
  key: 12,
  class: "view-placeholder"
}, Rn = {
  key: 13,
  class: "view-placeholder"
}, Wn = { class: "dialog-content env-selector-dialog" }, Vn = { class: "dialog-header" }, An = { class: "dialog-body" }, Un = { class: "env-list" }, Pn = { class: "env-info" }, Hn = { class: "env-name-row" }, Fn = { class: "env-indicator" }, Gn = { class: "env-name" }, Kn = {
  key: 0,
  class: "env-branch"
}, jn = {
  key: 1,
  class: "current-label"
}, qn = { class: "env-stats" }, Yn = ["onClick"], Zn = { class: "toast-container" }, Xn = { class: "toast-icon" }, Jn = { class: "toast-message" }, Qn = /* @__PURE__ */ D({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const a = l, {
      getStatus: r,
      getHistory: w,
      exportEnv: x,
      getBranches: h,
      checkout: p,
      createBranch: u,
      switchBranch: k,
      getEnvironments: L
    } = fe(), b = S(null), W = S([]), F = S([]), ee = S([]), j = P(() => ee.value.find((z) => z.is_current)), M = S(!1), R = S(null), Z = S(null), te = S(!1), O = S("status"), B = S("this-env");
    function f(z, i) {
      O.value = z, B.value = i;
    }
    function v(z) {
      const X = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[z];
      X && f(X.view, X.section);
    }
    function m() {
      f("branches", "this-env");
    }
    const $ = S(null), C = S([]);
    let le = 0;
    function T(z, i = "info", X = 3e3) {
      const ae = ++le;
      return C.value.push({ id: ae, message: z, type: i }), X > 0 && setTimeout(() => {
        C.value = C.value.filter((ve) => ve.id !== ae);
      }, X), ae;
    }
    function I(z) {
      C.value = C.value.filter((i) => i.id !== z);
    }
    function K(z) {
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
    const E = P(() => {
      if (!b.value) return "neutral";
      const z = b.value.workflows, i = z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || b.value.has_changes;
      return b.value.comparison.is_synced ? i ? "warning" : "success" : "error";
    });
    P(() => b.value ? E.value === "success" ? "All synced" : E.value === "warning" ? "Uncommitted changes" : E.value === "error" ? "Not synced" : "" : "");
    async function q() {
      M.value = !0, R.value = null;
      try {
        const [z, i, X, ae] = await Promise.all([
          r(),
          w(),
          h(),
          L()
        ]);
        b.value = z, W.value = i.commits, F.value = X.branches, ee.value = ae, a("statusUpdate", z);
      } catch (z) {
        R.value = z instanceof Error ? z.message : "Failed to load status", b.value = null, W.value = [], F.value = [];
      } finally {
        M.value = !1;
      }
    }
    function se(z) {
      Z.value = z;
    }
    async function $e(z) {
      var X;
      Z.value = null;
      const i = b.value && (b.value.workflows.new.length > 0 || b.value.workflows.modified.length > 0 || b.value.workflows.deleted.length > 0 || b.value.has_changes);
      $.value = {
        title: i ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: i ? "You have uncommitted changes that will be lost." : `Checkout commit ${z.short_hash || ((X = z.hash) == null ? void 0 : X.slice(0, 7))}?`,
        details: i ? Pe() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: i ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: i,
        onConfirm: async () => {
          var V;
          $.value = null;
          const ae = T(`Checking out ${z.short_hash || ((V = z.hash) == null ? void 0 : V.slice(0, 7))}...`, "info", 0), ve = await p(z.hash, i);
          I(ae), ve.status === "success" ? T("Restarting ComfyUI...", "success") : T(ve.message || "Checkout failed", "error");
        }
      };
    }
    async function Ie(z) {
      const i = b.value && (b.value.workflows.new.length > 0 || b.value.workflows.modified.length > 0 || b.value.workflows.deleted.length > 0 || b.value.has_changes);
      $.value = {
        title: i ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: i ? "You have uncommitted changes." : `Switch to branch "${z}"?`,
        details: i ? Pe() : void 0,
        warning: i ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: i ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          $.value = null;
          const X = T(`Switching to ${z}...`, "info", 0), ae = await k(z, i);
          I(X), ae.status === "success" ? T("Restarting ComfyUI...", "success") : T(ae.message || "Branch switch failed", "error");
        }
      };
    }
    async function tt(z) {
      const i = T(`Creating branch ${z}...`, "info", 0), X = await u(z);
      I(i), X.status === "success" ? (T(`Branch "${z}" created`, "success"), await q()) : T(X.message || "Failed to create branch", "error");
    }
    async function ot(z) {
      Z.value = null;
      const i = prompt("Enter branch name:");
      if (i) {
        const X = T(`Creating branch ${i}...`, "info", 0), ae = await u(i, z.hash);
        I(X), ae.status === "success" ? (T(`Branch "${i}" created from ${z.short_hash}`, "success"), await q()) : T(ae.message || "Failed to create branch", "error");
      }
    }
    async function at(z) {
      te.value = !1, T("Environment switching not yet implemented", "warning");
    }
    function Pe() {
      if (!b.value) return [];
      const z = [], i = b.value.workflows;
      return i.new.length && z.push(`${i.new.length} new workflow(s)`), i.modified.length && z.push(`${i.modified.length} modified workflow(s)`), i.deleted.length && z.push(`${i.deleted.length} deleted workflow(s)`), z;
    }
    async function st() {
      const z = T("Exporting environment...", "info", 0);
      try {
        const i = await x();
        I(z), i.status === "success" ? (T("Export complete", "success"), alert(`Export successful!

Saved to: ${i.path}

Models without sources: ${i.models_without_sources}`)) : (T("Export failed", "error"), alert(`Export failed: ${i.message}`));
      } catch (i) {
        I(z), T("Export error", "error"), alert(`Export error: ${i instanceof Error ? i.message : "Unknown error"}`);
      }
    }
    return ue(q), (z, i) => {
      var X, ae, ve;
      return t(), s("div", hn, [
        o("div", fn, [
          o("div", vn, [
            i[20] || (i[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            b.value ? (t(), s("div", pn)) : c("", !0)
          ]),
          o("div", yn, [
            o("button", {
              class: A(["icon-btn", { spinning: M.value }]),
              onClick: q,
              title: "Refresh"
            }, [...i[21] || (i[21] = [
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
              onClick: i[0] || (i[0] = (V) => a("close")),
              title: "Close"
            }, [...i[22] || (i[22] = [
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
        o("div", bn, [
          i[24] || (i[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: i[1] || (i[1] = (V) => te.value = !0)
          }, [
            b.value ? (t(), s("div", wn, [
              o("span", null, d(((X = j.value) == null ? void 0 : X.name) || ((ae = b.value) == null ? void 0 : ae.environment) || "Loading..."), 1),
              o("span", kn, "(" + d(b.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            i[23] || (i[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", _n, [
          o("div", $n, [
            o("div", xn, [
              i[25] || (i[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "status" && B.value === "this-env" }]),
                onClick: i[2] || (i[2] = (V) => f("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "workflows" }]),
                onClick: i[3] || (i[3] = (V) => f("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "models-env" }]),
                onClick: i[4] || (i[4] = (V) => f("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "branches" }]),
                onClick: i[5] || (i[5] = (V) => f("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "history" }]),
                onClick: i[6] || (i[6] = (V) => f("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "nodes" }]),
                onClick: i[7] || (i[7] = (V) => f("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "debug-env" }]),
                onClick: i[8] || (i[8] = (V) => f("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            i[28] || (i[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", Cn, [
              i[26] || (i[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "environments" }]),
                onClick: i[9] || (i[9] = (V) => f("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "model-index" }]),
                onClick: i[10] || (i[10] = (V) => f("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "settings" }]),
                onClick: i[11] || (i[11] = (V) => f("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "debug-workspace" }]),
                onClick: i[12] || (i[12] = (V) => f("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            i[29] || (i[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", Sn, [
              i[27] || (i[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "export" }]),
                onClick: i[13] || (i[13] = (V) => f("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "import" }]),
                onClick: i[14] || (i[14] = (V) => f("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: A(["sidebar-item", { active: O.value === "remotes" }]),
                onClick: i[15] || (i[15] = (V) => f("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", In, [
            R.value ? (t(), s("div", En, d(R.value), 1)) : !b.value && O.value === "status" ? (t(), s("div", zn, " Loading status... ")) : (t(), s(H, { key: 2 }, [
              O.value === "status" ? (t(), y(ho, {
                key: 0,
                status: b.value,
                onSwitchBranch: m
              }, null, 8, ["status"])) : O.value === "workflows" ? (t(), y(Is, {
                key: 1,
                onRefresh: q
              })) : O.value === "models-env" ? (t(), y(Us, {
                key: 2,
                onNavigate: v
              })) : O.value === "branches" ? (t(), y(Lo, {
                key: 3,
                branches: F.value,
                current: ((ve = b.value) == null ? void 0 : ve.branch) || null,
                onSwitch: Ie,
                onCreate: tt
              }, null, 8, ["branches", "current"])) : O.value === "history" ? (t(), y(Po, {
                key: 4,
                commits: W.value,
                onSelect: se,
                onCheckout: $e
              }, null, 8, ["commits"])) : O.value === "nodes" ? (t(), s("div", Ln, [...i[30] || (i[30] = [
                o("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                o("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : O.value === "debug-env" ? (t(), s("div", Mn, [...i[31] || (i[31] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : O.value === "environments" ? (t(), s("div", Bn, [...i[32] || (i[32] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : O.value === "model-index" ? (t(), y(Hs, { key: 8 })) : O.value === "settings" ? (t(), s("div", Tn, [...i[33] || (i[33] = [
                o("h3", { class: "view-title" }, "SETTINGS", -1),
                o("p", null, "Settings UI coming soon...", -1)
              ])])) : O.value === "debug-workspace" ? (t(), s("div", Dn, [...i[34] || (i[34] = [
                o("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                o("p", null, "Workspace logs view coming soon...", -1)
              ])])) : O.value === "export" ? (t(), s("div", Nn, [
                i[36] || (i[36] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: st
                }, [...i[35] || (i[35] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : O.value === "import" ? (t(), s("div", On, [...i[37] || (i[37] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : O.value === "remotes" ? (t(), s("div", Rn, [...i[38] || (i[38] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : c("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (t(), y(rn, {
          key: 0,
          commit: Z.value,
          onClose: i[16] || (i[16] = (V) => Z.value = null),
          onCheckout: $e,
          onCreateBranch: ot
        }, null, 8, ["commit"])) : c("", !0),
        $.value ? (t(), y(gn, {
          key: 1,
          title: $.value.title,
          message: $.value.message,
          details: $.value.details,
          warning: $.value.warning,
          confirmLabel: $.value.confirmLabel,
          cancelLabel: $.value.cancelLabel,
          secondaryLabel: $.value.secondaryLabel,
          secondaryAction: $.value.secondaryAction,
          destructive: $.value.destructive,
          onConfirm: $.value.onConfirm,
          onCancel: i[17] || (i[17] = (V) => $.value = null),
          onSecondary: $.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        te.value ? (t(), s("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: i[19] || (i[19] = be((V) => te.value = !1, ["self"]))
        }, [
          o("div", Wn, [
            o("div", Vn, [
              i[40] || (i[40] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: i[18] || (i[18] = (V) => te.value = !1)
              }, [...i[39] || (i[39] = [
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
            o("div", An, [
              i[41] || (i[41] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", Un, [
                (t(!0), s(H, null, Y(ee.value, (V) => (t(), s("div", {
                  key: V.name,
                  class: A(["env-item", { current: V.is_current }])
                }, [
                  o("div", Pn, [
                    o("div", Hn, [
                      o("span", Fn, d(V.is_current ? "●" : "○"), 1),
                      o("span", Gn, d(V.name), 1),
                      V.current_branch ? (t(), s("span", Kn, "(" + d(V.current_branch) + ")", 1)) : c("", !0),
                      V.is_current ? (t(), s("span", jn, "CURRENT")) : c("", !0)
                    ]),
                    o("div", qn, d(V.workflow_count) + " workflows • " + d(V.node_count) + " nodes ", 1)
                  ]),
                  V.is_current ? c("", !0) : (t(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ml) => at(V.name)
                  }, " SWITCH ", 8, Yn))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        o("div", Zn, [
          _(lt, { name: "toast" }, {
            default: n(() => [
              (t(!0), s(H, null, Y(C.value, (V) => (t(), s("div", {
                key: V.id,
                class: A(["toast", V.type])
              }, [
                o("span", Xn, d(K(V.type)), 1),
                o("span", Jn, d(V.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), el = /* @__PURE__ */ N(Qn, [["__scopeId", "data-v-6671b632"]]), tl = { class: "base-textarea-wrapper" }, ol = ["value", "rows", "placeholder", "disabled", "maxlength"], al = {
  key: 0,
  class: "base-textarea-count"
}, sl = /* @__PURE__ */ D({
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
    return (l, a) => (t(), s("div", tl, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          a[1] || (a[1] = Se(be((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = Se(be((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, ol),
      e.showCharCount && e.maxLength ? (t(), s("div", al, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : c("", !0)
    ]));
  }
}), nl = /* @__PURE__ */ N(sl, [["__scopeId", "data-v-5516e6fc"]]), ll = { class: "commit-popover" }, rl = { class: "popover-header" }, il = { class: "popover-body" }, cl = {
  key: 0,
  class: "changes-summary"
}, dl = {
  key: 0,
  class: "change-item"
}, ul = {
  key: 1,
  class: "change-item"
}, ml = {
  key: 2,
  class: "change-item"
}, gl = {
  key: 3,
  class: "change-item"
}, hl = {
  key: 4,
  class: "change-item"
}, fl = {
  key: 1,
  class: "no-changes"
}, vl = {
  key: 2,
  class: "loading"
}, pl = { class: "message-section" }, yl = { class: "popover-footer" }, bl = /* @__PURE__ */ D({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const a = e, r = l, { commit: w } = fe(), x = S(""), h = S(!1), p = S(null), u = P(() => {
      if (!a.status) return !1;
      const L = a.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || a.status.has_changes;
    });
    async function k() {
      var L, b, W;
      if (!(!u.value || !x.value.trim() || h.value)) {
        h.value = !0, p.value = null;
        try {
          const F = await w(x.value.trim());
          F.status === "success" ? (p.value = {
            type: "success",
            message: `Committed: ${((L = F.summary) == null ? void 0 : L.new) || 0} new, ${((b = F.summary) == null ? void 0 : b.modified) || 0} modified, ${((W = F.summary) == null ? void 0 : W.deleted) || 0} deleted`
          }, x.value = "", setTimeout(() => r("committed"), 1e3)) : F.status === "no_changes" ? p.value = { type: "error", message: "No changes to commit" } : p.value = { type: "error", message: F.message || "Commit failed" };
        } catch (F) {
          p.value = { type: "error", message: F instanceof Error ? F.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (L, b) => (t(), s("div", ll, [
      o("div", rl, [
        b[4] || (b[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: b[0] || (b[0] = (W) => r("close"))
        }, [...b[3] || (b[3] = [
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
      o("div", il, [
        e.status && u.value ? (t(), s("div", cl, [
          e.status.workflows.new.length ? (t(), s("div", dl, [
            b[5] || (b[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          e.status.workflows.modified.length ? (t(), s("div", ul, [
            b[6] || (b[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          e.status.workflows.deleted.length ? (t(), s("div", ml, [
            b[7] || (b[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          e.status.git_changes.nodes_added.length ? (t(), s("div", gl, [
            b[8] || (b[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), s("div", hl, [
            b[9] || (b[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : e.status ? (t(), s("div", fl, " No changes to commit ")) : (t(), s("div", vl, " Loading... ")),
        o("div", pl, [
          _(nl, {
            modelValue: x.value,
            "onUpdate:modelValue": b[1] || (b[1] = (W) => x.value = W),
            placeholder: u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || h.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        p.value ? (t(), s("div", {
          key: 3,
          class: A(["result", p.value.type])
        }, d(p.value.message), 3)) : c("", !0)
      ]),
      o("div", yl, [
        _(ne, {
          variant: "secondary",
          onClick: b[2] || (b[2] = (W) => r("close"))
        }, {
          default: n(() => [...b[10] || (b[10] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _(ne, {
          variant: "primary",
          disabled: !u.value || !x.value.trim() || h.value,
          loading: h.value,
          onClick: k
        }, {
          default: n(() => [
            g(d(h.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), wl = /* @__PURE__ */ N(bl, [["__scopeId", "data-v-4f587977"]]), kl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', _l = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', $l = {
  comfy: kl,
  phosphor: _l
}, Ae = "comfy", Xe = "comfygit-theme";
let pe = null, Je = Ae;
function xl() {
  try {
    const e = localStorage.getItem(Xe);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ae;
}
function Qe(e = Ae) {
  pe && pe.remove(), pe = document.createElement("style"), pe.id = "comfygit-theme-styles", pe.setAttribute("data-theme", e), pe.textContent = $l[e], document.head.appendChild(pe), document.body.setAttribute("data-comfygit-theme", e), Je = e;
  try {
    localStorage.setItem(Xe, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function Cl() {
  return Je;
}
function Sl(e) {
  Qe(e);
}
const Ue = document.createElement("link");
Ue.rel = "stylesheet";
Ue.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ue);
const Il = xl();
Qe(Il);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Sl(e);
  },
  getTheme: () => {
    const e = Cl();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ie = null, re = null, Ce = null;
const ye = S(null);
async function Ne() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && (ye.value = await l.json());
  } catch {
  }
}
function El() {
  if (!ye.value) return !1;
  const e = ye.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ye.value.has_changes;
}
function zl() {
  ie && ie.remove(), ie = document.createElement("div"), ie.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", ie.appendChild(e), ie.addEventListener("click", (r) => {
    r.target === ie && Te();
  });
  const l = (r) => {
    r.key === "Escape" && (Te(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), Ke({
    render: () => je(el, {
      onClose: Te,
      onStatusUpdate: (r) => {
        ye.value = r, ze();
      }
    })
  }).mount(e), document.body.appendChild(ie);
}
function Te() {
  ie && (ie.remove(), ie = null);
}
function Ll(e) {
  xe(), re = document.createElement("div"), re.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  re.style.position = "fixed", re.style.top = `${l.bottom + 8}px`, re.style.right = `${window.innerWidth - l.right}px`, re.style.zIndex = "10001";
  const a = (w) => {
    re && !re.contains(w.target) && w.target !== e && (xe(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const r = (w) => {
    w.key === "Escape" && (xe(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ce = Ke({
    render: () => je(wl, {
      status: ye.value,
      onClose: xe,
      onCommitted: () => {
        xe(), Ne().then(ze);
      }
    })
  }), Ce.mount(re), document.body.appendChild(re);
}
function xe() {
  Ce && (Ce.unmount(), Ce = null), re && (re.remove(), re = null);
}
let me = null;
function ze() {
  if (!me) return;
  const e = me.querySelector(".commit-indicator");
  e && (e.style.display = El() ? "block" : "none");
}
const et = document.createElement("style");
et.textContent = `
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
document.head.appendChild(et);
Me.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var a, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = zl, me = document.createElement("button"), me.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", me.innerHTML = 'Commit <span class="commit-indicator"></span>', me.title = "Quick Commit", me.onclick = () => Ll(me), e.appendChild(l), e.appendChild(me), (r = (a = Me.menu) == null ? void 0 : a.settingsGroup) != null && r.element && (Me.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Ne(), ze(), setInterval(async () => {
      await Ne(), ze();
    }, 3e4);
  }
});
