import { app as Xe } from "../../scripts/app.js";
import { defineComponent as O, createElementBlock as n, openBlock as o, createCommentVNode as m, createElementVNode as t, renderSlot as Z, createBlock as y, resolveDynamicComponent as at, normalizeClass as K, withCtx as a, toDisplayString as d, createVNode as l, createTextVNode as f, computed as B, Fragment as G, renderList as X, ref as E, onMounted as ie, withKeys as be, withModifiers as pe, onUnmounted as kt, Teleport as rt, normalizeStyle as Ae, watch as _t, resolveComponent as $t, createSlots as ct, TransitionGroup as xt, createApp as dt, h as ut } from "vue";
const Ct = { class: "panel-layout" }, It = {
  key: 0,
  class: "panel-layout-header"
}, St = {
  key: 1,
  class: "panel-layout-search"
}, Et = { class: "panel-layout-content" }, Lt = {
  key: 2,
  class: "panel-layout-footer"
}, zt = /* @__PURE__ */ O({
  __name: "PanelLayout",
  setup(e) {
    return (c, s) => (o(), n("div", Ct, [
      c.$slots.header ? (o(), n("div", It, [
        Z(c.$slots, "header", {}, void 0, !0)
      ])) : m("", !0),
      c.$slots.search ? (o(), n("div", St, [
        Z(c.$slots, "search", {}, void 0, !0)
      ])) : m("", !0),
      t("div", Et, [
        Z(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), n("div", Lt, [
        Z(c.$slots, "footer", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), W = (e, c) => {
  const s = e.__vccOpts || e;
  for (const [r, i] of c)
    s[r] = i;
  return s;
}, ue = /* @__PURE__ */ W(zt, [["__scopeId", "data-v-21565df9"]]), Mt = {
  key: 0,
  class: "panel-title-prefix"
}, Nt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Rt = /* @__PURE__ */ O({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (c, s) => (o(), y(at(`h${e.level}`), {
      class: K(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (o(), n("span", Mt, d(e.prefix), 1)) : (o(), n("span", Nt)),
        Z(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ut = /* @__PURE__ */ W(Rt, [["__scopeId", "data-v-c3875efc"]]), Dt = ["title"], Bt = ["width", "height"], Vt = /* @__PURE__ */ O({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (c, s) => (o(), n("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (r) => c.$emit("click"))
    }, [
      (o(), n("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
        t("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        t("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, Bt))
    ], 8, Dt));
  }
}), Tt = /* @__PURE__ */ W(Vt, [["__scopeId", "data-v-6fc7f16d"]]), Ot = { class: "header-left" }, Wt = {
  key: 0,
  class: "header-actions"
}, Ft = /* @__PURE__ */ O({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: K(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Ot, [
        l(Ut, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            f(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), y(Tt, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => c.$emit("info-click"))
        })) : m("", !0)
      ]),
      c.$slots.actions ? (o(), n("div", Wt, [
        Z(c.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), me = /* @__PURE__ */ W(Ft, [["__scopeId", "data-v-55a62cd6"]]), At = {
  key: 0,
  class: "section-title-count"
}, Pt = {
  key: 1,
  class: "section-title-icon"
}, Gt = /* @__PURE__ */ O({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (c, s) => (o(), y(at(`h${e.level}`), {
      class: K(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && c.$emit("click"))
    }, {
      default: a(() => [
        Z(c.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", At, "(" + d(e.count) + ")", 1)) : m("", !0),
        e.clickable ? (o(), n("span", Pt, d(e.expanded ? "▼" : "▸"), 1)) : m("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Le = /* @__PURE__ */ W(Gt, [["__scopeId", "data-v-559361eb"]]), Ht = { class: "status-grid" }, Kt = { class: "status-grid__column" }, jt = { class: "status-grid__title" }, qt = { class: "status-grid__column status-grid__column--right" }, Yt = { class: "status-grid__title" }, Jt = /* @__PURE__ */ O({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (c, s) => (o(), n("div", Ht, [
      t("div", Kt, [
        t("h4", jt, d(e.leftTitle), 1),
        Z(c.$slots, "left", {}, void 0, !0)
      ]),
      t("div", qt, [
        t("h4", Yt, d(e.rightTitle), 1),
        Z(c.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Xt = /* @__PURE__ */ W(Jt, [["__scopeId", "data-v-fe556068"]]), Zt = {
  key: 0,
  class: "status-item__icon"
}, Qt = {
  key: 1,
  class: "status-item__count"
}, eo = { class: "status-item__label" }, to = /* @__PURE__ */ O({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const c = e, s = B(() => `status-item--${c.variant}`);
    return (r, i) => (o(), n("div", {
      class: K(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), n("span", Zt, d(e.icon), 1)) : m("", !0),
      e.count !== void 0 ? (o(), n("span", Qt, d(e.count), 1)) : m("", !0),
      t("span", eo, d(e.label), 1)
    ], 2));
  }
}), _e = /* @__PURE__ */ W(to, [["__scopeId", "data-v-6f929183"]]), oo = { class: "issue-card__header" }, ao = { class: "issue-card__icon" }, so = { class: "issue-card__title" }, no = {
  key: 0,
  class: "issue-card__content"
}, lo = {
  key: 0,
  class: "issue-card__description"
}, io = {
  key: 1,
  class: "issue-card__items"
}, ro = {
  key: 2,
  class: "issue-card__actions"
}, co = /* @__PURE__ */ O({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const c = e, s = B(() => `issue-card--${c.severity}`);
    return (r, i) => (o(), n("div", {
      class: K(["issue-card", s.value])
    }, [
      t("div", oo, [
        t("span", ao, d(e.icon), 1),
        t("h4", so, d(e.title), 1)
      ]),
      r.$slots.default || e.description ? (o(), n("div", no, [
        e.description ? (o(), n("p", lo, d(e.description), 1)) : m("", !0),
        Z(r.$slots, "default", {}, void 0, !0)
      ])) : m("", !0),
      e.items && e.items.length ? (o(), n("div", io, [
        (o(!0), n(G, null, X(e.items, (w, v) => (o(), n("div", {
          key: v,
          class: "issue-card__item"
        }, [
          i[0] || (i[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(w), 1)
        ]))), 128))
      ])) : m("", !0),
      r.$slots.actions ? (o(), n("div", ro, [
        Z(r.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), We = /* @__PURE__ */ W(co, [["__scopeId", "data-v-df6aa348"]]), uo = ["type", "disabled"], mo = {
  key: 0,
  class: "spinner"
}, vo = /* @__PURE__ */ O({
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
    return (c, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: K(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => c.$emit("click", r))
    }, [
      e.loading ? (o(), n("span", mo)) : m("", !0),
      e.loading ? m("", !0) : Z(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, uo));
  }
}), U = /* @__PURE__ */ W(vo, [["__scopeId", "data-v-772abe47"]]), fo = { class: "empty-state" }, go = {
  key: 0,
  class: "empty-icon"
}, ho = { class: "empty-message" }, po = /* @__PURE__ */ O({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (c, s) => (o(), n("div", fo, [
      e.icon ? (o(), n("div", go, d(e.icon), 1)) : m("", !0),
      t("p", ho, d(e.message), 1),
      e.actionLabel ? (o(), y(U, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => c.$emit("action"))
      }, {
        default: a(() => [
          f(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : m("", !0)
    ]));
  }
}), ge = /* @__PURE__ */ W(po, [["__scopeId", "data-v-4466284f"]]), yo = { class: "branch-indicator" }, bo = { class: "branch-indicator__info" }, wo = { class: "branch-indicator__label" }, ko = { class: "branch-indicator__name" }, _o = {
  key: 0,
  class: "branch-indicator__remote"
}, $o = {
  key: 0,
  class: "branch-indicator__status"
}, xo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Co = {
  key: 1,
  class: "branch-indicator__behind"
}, Io = {
  key: 1,
  class: "branch-indicator__actions"
}, So = /* @__PURE__ */ O({
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
    return (c, s) => (o(), n("div", yo, [
      t("div", bo, [
        t("span", wo, d(e.label), 1),
        t("span", ko, d(e.branchName), 1),
        e.remote ? (o(), n("span", _o, "@" + d(e.remote), 1)) : m("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (o(), n("div", $o, [
        e.commitsAhead ? (o(), n("span", xo, " ↑ " + d(e.commitsAhead) + " ahead ", 1)) : m("", !0),
        e.commitsBehind ? (o(), n("span", Co, " ↓ " + d(e.commitsBehind) + " behind ", 1)) : m("", !0)
      ])) : m("", !0),
      c.$slots.actions ? (o(), n("div", Io, [
        Z(c.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), Eo = /* @__PURE__ */ W(So, [["__scopeId", "data-v-cb8dd50e"]]), Lo = { style: { "margin-top": "var(--cg-space-1)" } }, zo = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, Mo = /* @__PURE__ */ O({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: c }) {
    const s = e, r = B(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), i = B(() => {
      const u = s.status.git_changes;
      return u.nodes_added.length > 0 || u.nodes_removed.length > 0 || u.workflow_changes || u.has_other_changes;
    }), w = B(() => {
      const u = s.status.git_changes, h = s.status.workflows;
      return (u.workflow_changes || u.has_other_changes) && h.new.length === 0 && h.modified.length === 0 && h.deleted.length === 0;
    }), v = B(() => s.status.missing_models_count > 0 || i.value || !s.status.comparison.is_synced), g = B(() => {
      const u = [];
      return s.status.workflows.new.length > 0 && u.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && u.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && u.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && u.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && u.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${u.length > 0 ? u.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (u, h) => (o(), y(ue, null, {
      header: a(() => [
        l(me, { title: "STATUS" })
      ]),
      content: a(() => [
        l(Le, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [...h[7] || (h[7] = [
            f(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        l(Xt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (o(), y(_e, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : m("", !0),
            e.status.workflows.modified.length ? (o(), y(_e, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : m("", !0),
            e.status.workflows.deleted.length ? (o(), y(_e, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : m("", !0),
            l(_e, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (o(), y(_e, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : m("", !0),
            e.status.git_changes.nodes_removed.length ? (o(), y(_e, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : m("", !0),
            w.value ? (o(), y(_e, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : m("", !0),
            i.value ? m("", !0) : (o(), y(_e, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        t("div", Lo, [
          l(Eo, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: h[0] || (h[0] = (S) => u.$emit("switch-branch"))
              }, {
                default: a(() => [...h[8] || (h[8] = [
                  f(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        v.value ? (o(), n("div", zo, [
          l(Le, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [...h[9] || (h[9] = [
              f(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (o(), y(We, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: a(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: h[1] || (h[1] = (S) => u.$emit("view-workflows"))
              }, {
                default: a(() => [...h[10] || (h[10] = [
                  f(" View Details ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: h[2] || (h[2] = (S) => u.$emit("resolve-models"))
              }, {
                default: a(() => [...h[11] || (h[11] = [
                  f(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : m("", !0),
          i.value ? (o(), y(We, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: g.value
          }, {
            actions: a(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: h[3] || (h[3] = (S) => u.$emit("view-history"))
              }, {
                default: a(() => [...h[12] || (h[12] = [
                  f(" View Changes ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: h[4] || (h[4] = (S) => u.$emit("commit-changes"))
              }, {
                default: a(() => [...h[13] || (h[13] = [
                  f(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : m("", !0),
          e.status.comparison.is_synced ? m("", !0) : (o(), y(We, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: a(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: h[5] || (h[5] = (S) => u.$emit("view-debug"))
              }, {
                default: a(() => [...h[14] || (h[14] = [
                  f(" View Logs ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: h[6] || (h[6] = (S) => u.$emit("sync-environment"))
              }, {
                default: a(() => [...h[15] || (h[15] = [
                  f(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : m("", !0),
        !v.value && !i.value ? (o(), y(ge, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : m("", !0)
      ]),
      _: 1
    }));
  }
}), No = /* @__PURE__ */ W(Mo, [["__scopeId", "data-v-2045da26"]]), Ro = ["type", "value", "placeholder", "disabled"], Uo = /* @__PURE__ */ O({
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
  setup(e, { expose: c, emit: s }) {
    const r = e, i = s, w = E(null);
    function v(g) {
      const u = g.target.value;
      i("update:modelValue", u);
    }
    return ie(() => {
      r.autoFocus && w.value && w.value.focus();
    }), c({
      focus: () => {
        var g;
        return (g = w.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = w.value) == null ? void 0 : g.blur();
      }
    }), (g, u) => (o(), n("input", {
      ref_key: "inputRef",
      ref: w,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: K(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: v,
      onKeyup: [
        u[0] || (u[0] = be((h) => g.$emit("enter"), ["enter"])),
        u[1] || (u[1] = be((h) => g.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (h) => g.$emit("focus")),
      onBlur: u[3] || (u[3] = (h) => g.$emit("blur"))
    }, null, 42, Ro));
  }
}), ze = /* @__PURE__ */ W(Uo, [["__scopeId", "data-v-0380d08f"]]), Do = { class: "branch-create-form" }, Bo = { class: "form-actions" }, Vo = /* @__PURE__ */ O({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: c }) {
    const s = c, r = E(""), i = B(() => {
      const g = r.value.trim();
      return g.length > 0 && !g.startsWith("-") && !g.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(g);
    });
    function w() {
      i.value && (s("create", r.value.trim()), r.value = "");
    }
    function v() {
      r.value = "", s("cancel");
    }
    return (g, u) => (o(), n("div", Do, [
      l(ze, {
        modelValue: r.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => r.value = h),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: w,
        onEscape: v
      }, null, 8, ["modelValue"]),
      t("div", Bo, [
        l(U, {
          variant: "primary",
          size: "sm",
          disabled: !i.value,
          onClick: w
        }, {
          default: a(() => [...u[1] || (u[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        l(U, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: a(() => [...u[2] || (u[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), To = /* @__PURE__ */ W(Vo, [["__scopeId", "data-v-7c500394"]]), Oo = { class: "branch-list-item__indicator" }, Wo = { class: "branch-list-item__name" }, Fo = {
  key: 0,
  class: "branch-list-item__actions"
}, Ao = {
  key: 0,
  class: "branch-list-item__current-label"
}, Po = /* @__PURE__ */ O({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: K(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && c.$emit("click"))
    }, [
      t("span", Oo, d(e.isCurrent ? "●" : "○"), 1),
      t("span", Wo, d(e.branchName), 1),
      c.$slots.actions || e.showCurrentLabel ? (o(), n("div", Fo, [
        Z(c.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (o(), n("span", Ao, " current ")) : m("", !0)
      ])) : m("", !0)
    ], 2));
  }
}), Go = /* @__PURE__ */ W(Po, [["__scopeId", "data-v-c6581a24"]]), Ho = {
  key: 2,
  class: "branch-list"
}, Ko = /* @__PURE__ */ O({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: c }) {
    const s = c, r = E(!1);
    function i(v) {
      s("create", v), w();
    }
    function w() {
      r.value = !1;
    }
    return (v, g) => (o(), y(ue, null, {
      header: a(() => [
        l(me, { title: "BRANCHES" }, {
          actions: a(() => [
            l(U, {
              variant: "ghost",
              size: "sm",
              onClick: g[0] || (g[0] = (u) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...g[1] || (g[1] = [
                t("svg", {
                  width: "14",
                  height: "14",
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
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (o(), y(To, {
          key: 0,
          onCreate: i,
          onCancel: w
        })) : m("", !0),
        e.branches.length === 0 ? (o(), y(ge, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Ho, [
          (o(!0), n(G, null, X(e.branches, (u) => (o(), y(Go, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: a(() => [
              u.is_current ? m("", !0) : (o(), y(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (h) => v.$emit("switch", u.name)
              }, {
                default: a(() => [...g[2] || (g[2] = [
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
}), jo = /* @__PURE__ */ W(Ko, [["__scopeId", "data-v-763d6ec4"]]), qo = { class: "commit-list" }, Yo = /* @__PURE__ */ O({
  __name: "CommitList",
  setup(e) {
    return (c, s) => (o(), n("div", qo, [
      Z(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Jo = /* @__PURE__ */ W(Yo, [["__scopeId", "data-v-8c5ee761"]]), Xo = { class: "commit-hash" }, Zo = /* @__PURE__ */ O({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const c = e, s = B(() => c.hash.slice(0, c.length));
    return (r, i) => (o(), n("span", Xo, d(s.value), 1));
  }
}), mt = /* @__PURE__ */ W(Zo, [["__scopeId", "data-v-7c333cc6"]]), Qo = { class: "commit-message" }, ea = { class: "commit-date" }, ta = /* @__PURE__ */ O({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: c }) {
    const s = e, r = c;
    function i() {
      s.clickable && r("click");
    }
    return (w, v) => (o(), n("div", {
      class: K(["commit-item", { clickable: e.clickable }]),
      onClick: i
    }, [
      l(mt, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Qo, d(e.message), 1),
      t("span", ea, d(e.relativeDate), 1),
      w.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = pe(() => {
        }, ["stop"]))
      }, [
        Z(w.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), oa = /* @__PURE__ */ W(ta, [["__scopeId", "data-v-dd7c621b"]]), aa = /* @__PURE__ */ O({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (c, s) => (o(), y(ue, null, {
      header: a(() => [
        l(me, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (o(), y(ge, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), y(Jo, { key: 1 }, {
          default: a(() => [
            (o(!0), n(G, null, X(e.commits, (r) => (o(), y(oa, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (i) => c.$emit("select", r)
            }, {
              actions: a(() => [
                l(U, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (i) => c.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
                    t("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
}), sa = /* @__PURE__ */ W(aa, [["__scopeId", "data-v-981c3c64"]]), lt = [
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
  ...Array(12).fill(null).map((e, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
], na = {
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
}, vt = [
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
], la = [
  ...vt,
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
], ia = [
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
], ee = {
  // Environment Management
  getEnvironments: async () => (await te(300), [
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
    await te(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, c, s) => {
    await te(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${c}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await te(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await te(400), lt),
  getWorkflowDetails: async (e) => (await te(300), na[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await te(800), {
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
  installWorkflowDeps: async (e, c, s) => {
    await te(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${c}, models=${s}`);
  },
  setModelImportance: async (e, c, s) => {
    await te(200), console.log(`[MOCK] Setting ${c} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await te(350), vt),
  getWorkspaceModels: async () => (await te(400), la),
  updateModelSource: async (e, c) => {
    await te(300), console.log(`[MOCK] Updating source for ${e}: ${c}`);
  },
  deleteModel: async (e) => {
    await te(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await te(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Node Management
  getNodes: async () => {
    await te(350);
    const e = Te.filter((s) => s.installed), c = Te.filter((s) => !s.installed);
    return {
      nodes: Te,
      total_count: Te.length,
      installed_count: e.length,
      missing_count: c.length
    };
  },
  installNode: async (e) => {
    await te(2500), console.log(`[MOCK] Installing node: ${e}`);
  },
  updateNode: async (e) => {
    await te(2e3), console.log(`[MOCK] Updating node: ${e}`);
  },
  uninstallNode: async (e) => {
    await te(1e3), console.log(`[MOCK] Uninstalling node: ${e}`);
  },
  // Settings & Debug
  getConfig: async () => (await te(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (e) => {
    await te(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, c) => (await te(250), (e ? Oe.filter((r) => r.level === e) : Oe).slice(0, c || 100)),
  getWorkspaceLogs: async (e, c) => {
    await te(300);
    const s = [...Oe, ...Oe.map((i) => ({
      ...i,
      context: { ...i.context, environment: "testing" }
    }))];
    return (e ? s.filter((i) => i.level === e) : s).slice(0, c || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await te(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: lt.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await te(300), ia.slice(0, e)),
  getBranches: async () => (await te(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await te(300), {
    remotes: [
      {
        name: "origin",
        fetch_url: "https://github.com/comfyhub/comfygit-demo.git",
        push_url: "https://github.com/comfyhub/comfygit-demo.git",
        is_default: !0
      },
      {
        name: "upstream",
        fetch_url: "https://github.com/comfyhub/comfygit.git",
        push_url: "https://github.com/comfyhub/comfygit.git",
        is_default: !1
      }
    ],
    current_branch_tracking: {
      remote: "origin",
      branch: "main"
    }
  }),
  addRemote: async (e, c) => {
    await te(400), console.log(`[MOCK] Adding remote: ${e} -> ${c}`);
  },
  removeRemote: async (e) => {
    await te(350), console.log(`[MOCK] Removing remote: ${e}`);
  },
  updateRemoteUrl: async (e, c, s) => {
    await te(400), console.log(`[MOCK] Updating remote ${e}: ${c}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (e) => {
    await te(1500), console.log(`[MOCK] Fetching from remote: ${e}`);
  },
  getRemoteSyncStatus: async (e) => (await te(300), {
    remote: e,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  })
};
function te(e) {
  return new Promise((c) => setTimeout(c, e));
}
function ve() {
  const e = E(!1), c = E(null);
  async function s(P, N) {
    var ae;
    if (!((ae = window.app) != null && ae.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(P, N);
    if (!I.ok) {
      const ne = await I.json().catch(() => ({}));
      throw new Error(ne.error || ne.message || `Request failed: ${I.status}`);
    }
    return I.json();
  }
  async function r() {
    return ee.getStatus();
  }
  async function i(P, N = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: P, allow_issues: N })
    });
  }
  async function w(P = 10, N = 0) {
    {
      const I = await ee.getCommitHistory(P);
      return {
        commits: I,
        total: I.length,
        offset: N
      };
    }
  }
  async function v(P) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: P })
    });
  }
  async function g() {
    return ee.getBranches();
  }
  async function u(P) {
    return s(`/v2/comfygit/commit/${P}`);
  }
  async function h(P, N = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: P, force: N })
    });
  }
  async function S(P, N = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: P, start_point: N })
    });
  }
  async function L(P, N = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: P, force: N })
    });
  }
  async function V() {
    return ee.getEnvironments();
  }
  async function H(P) {
    return ee.switchEnvironment(P);
  }
  async function q() {
    return null;
  }
  async function T(P, N, I) {
    return await ee.createEnvironment(P, N, I), { status: "success" };
  }
  async function x(P) {
    return await ee.deleteEnvironment(P), { status: "success" };
  }
  async function $() {
    return ee.getWorkflows();
  }
  async function D(P) {
    return ee.getWorkflowDetails(P);
  }
  async function R(P) {
    return ee.resolveWorkflow(P);
  }
  async function C(P, N, I) {
    return await ee.installWorkflowDeps(P, N, I), { status: "success" };
  }
  async function _(P, N, I) {
    return ee.setModelImportance(P, N, I);
  }
  async function b() {
    return ee.getEnvironmentModels();
  }
  async function k() {
    return ee.getWorkspaceModels();
  }
  async function p(P, N) {
    return ee.updateModelSource(P, N);
  }
  async function z(P) {
    return ee.deleteModel(P);
  }
  async function F(P) {
    return await ee.downloadModel(P), { status: "success" };
  }
  async function Q() {
    return ee.getConfig();
  }
  async function A(P) {
    return ee.updateConfig(P);
  }
  async function M(P, N) {
    return ee.getEnvironmentLogs(P, N);
  }
  async function j(P, N) {
    return ee.getWorkspaceLogs(P, N);
  }
  async function re() {
    return ee.getNodes();
  }
  async function Ge(P) {
    return await ee.installNode(P), { status: "success" };
  }
  async function Be(P) {
    return await ee.updateNode(P), { status: "success" };
  }
  async function He(P) {
    return await ee.uninstallNode(P), { status: "success" };
  }
  async function Ke() {
    return ee.getRemotes();
  }
  async function je(P, N) {
    return await ee.addRemote(P, N), { status: "success", remote_name: P };
  }
  async function Ve(P) {
    return await ee.removeRemote(P), { status: "success", remote_name: P };
  }
  async function qe(P, N, I) {
    return await ee.updateRemoteUrl(P, N, I), { status: "success", remote_name: P };
  }
  async function Ye(P) {
    return await ee.fetchRemote(P), { status: "success", remote_name: P };
  }
  async function Je(P) {
    return ee.getRemoteSyncStatus(P);
  }
  return {
    isLoading: e,
    error: c,
    getStatus: r,
    commit: i,
    getHistory: w,
    exportEnv: v,
    // Git Operations
    getBranches: g,
    getCommitDetail: u,
    checkout: h,
    createBranch: S,
    switchBranch: L,
    // Environment Management
    getEnvironments: V,
    switchEnvironment: H,
    getSwitchProgress: q,
    createEnvironment: T,
    deleteEnvironment: x,
    // Workflow Management
    getWorkflows: $,
    getWorkflowDetails: D,
    resolveWorkflow: R,
    installWorkflowDeps: C,
    setModelImportance: _,
    // Model Management
    getEnvironmentModels: b,
    getWorkspaceModels: k,
    updateModelSource: p,
    deleteModel: z,
    downloadModel: F,
    // Settings
    getConfig: Q,
    updateConfig: A,
    // Debug/Logs
    getEnvironmentLogs: M,
    getWorkspaceLogs: j,
    // Node Management
    getNodes: re,
    installNode: Ge,
    updateNode: Be,
    uninstallNode: He,
    // Git Remotes
    getRemotes: Ke,
    addRemote: je,
    removeRemote: Ve,
    updateRemoteUrl: qe,
    fetchRemote: Ye,
    getRemoteSyncStatus: Je
  };
}
const ra = { class: "base-modal-header" }, ca = {
  key: 0,
  class: "base-modal-title"
}, da = { class: "base-modal-body" }, ua = {
  key: 0,
  class: "base-modal-loading"
}, ma = {
  key: 1,
  class: "base-modal-error"
}, va = {
  key: 0,
  class: "base-modal-footer"
}, fa = /* @__PURE__ */ O({
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
  setup(e, { emit: c }) {
    const s = e, r = c;
    function i() {
      s.closeOnOverlayClick && r("close");
    }
    function w(v) {
      v.key === "Escape" && r("close");
    }
    return ie(() => {
      document.addEventListener("keydown", w), document.body.style.overflow = "hidden";
    }), kt(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = "";
    }), (v, g) => (o(), y(rt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: i
      }, [
        t("div", {
          class: K(["base-modal-content", e.size]),
          onClick: g[1] || (g[1] = pe(() => {
          }, ["stop"]))
        }, [
          t("div", ra, [
            Z(v.$slots, "header", {}, () => [
              e.title ? (o(), n("h3", ca, d(e.title), 1)) : m("", !0)
            ], !0),
            e.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: g[0] || (g[0] = (u) => v.$emit("close"))
            }, [...g[2] || (g[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : m("", !0)
          ]),
          t("div", da, [
            e.loading ? (o(), n("div", ua, "Loading...")) : e.error ? (o(), n("div", ma, d(e.error), 1)) : Z(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (o(), n("div", va, [
            Z(v.$slots, "footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 2)
      ])
    ]));
  }
}), Pe = /* @__PURE__ */ W(fa, [["__scopeId", "data-v-700d367b"]]), ga = ["type", "disabled"], ha = {
  key: 0,
  class: "spinner"
}, pa = /* @__PURE__ */ O({
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
    return (c, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: K(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => c.$emit("click", r))
    }, [
      e.loading ? (o(), n("span", ha)) : m("", !0),
      Z(c.$slots, "default", {}, void 0, !0)
    ], 10, ga));
  }
}), de = /* @__PURE__ */ W(pa, [["__scopeId", "data-v-f3452606"]]), ya = {
  key: 0,
  class: "base-title-count"
}, ba = /* @__PURE__ */ O({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (c, s) => (o(), y(at(`h${e.level}`), {
      class: K(["base-title", e.variant])
    }, {
      default: a(() => [
        Z(c.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", ya, "(" + d(e.count) + ")", 1)) : m("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $e = /* @__PURE__ */ W(ba, [["__scopeId", "data-v-5a01561d"]]), wa = ["value", "disabled"], ka = {
  key: 0,
  value: "",
  disabled: ""
}, _a = ["value"], $a = {
  key: 0,
  class: "base-select-error"
}, xa = /* @__PURE__ */ O({
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
    function c(r) {
      return typeof r == "string" ? r : r.value;
    }
    function s(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, i) => (o(), n("div", {
      class: K(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: K(["base-select", { error: !!e.error }]),
        onChange: i[0] || (i[0] = (w) => r.$emit("update:modelValue", w.target.value))
      }, [
        e.placeholder ? (o(), n("option", ka, d(e.placeholder), 1)) : m("", !0),
        (o(!0), n(G, null, X(e.options, (w) => (o(), n("option", {
          key: c(w),
          value: c(w)
        }, d(s(w)), 9, _a))), 128))
      ], 42, wa),
      e.error ? (o(), n("span", $a, d(e.error), 1)) : m("", !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ W(xa, [["__scopeId", "data-v-7436d745"]]), Ca = { class: "detail-section" }, Ia = {
  key: 0,
  class: "empty-message"
}, Sa = { class: "model-header" }, Ea = { class: "model-name" }, La = { class: "model-details" }, za = { class: "model-row" }, Ma = { class: "model-row" }, Na = {
  key: 0,
  class: "model-row"
}, Ra = { class: "value" }, Ua = {
  key: 1,
  class: "model-row"
}, Da = { class: "value" }, Ba = {
  key: 0,
  class: "model-actions"
}, Va = { class: "detail-section" }, Ta = {
  key: 0,
  class: "empty-message"
}, Oa = { class: "node-name" }, Wa = {
  key: 0,
  class: "node-version"
}, Fa = /* @__PURE__ */ O({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: c }) {
    const s = e, r = c, { getWorkflowDetails: i, setModelImportance: w } = ve(), v = E(null), g = E(!1), u = E(null), h = E(!1), S = E({}), L = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function V() {
      g.value = !0, u.value = null;
      try {
        v.value = await i(s.workflowName);
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        g.value = !1;
      }
    }
    function H(T, x) {
      S.value[T] = x, h.value = !0;
    }
    async function q() {
      if (!h.value) {
        r("close");
        return;
      }
      g.value = !0, u.value = null;
      try {
        for (const [T, x] of Object.entries(S.value))
          await w(s.workflowName, T, x);
        r("close");
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        g.value = !1;
      }
    }
    return ie(V), (T, x) => (o(), y(Pe, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: u.value || void 0,
      onClose: x[2] || (x[2] = ($) => r("close"))
    }, {
      body: a(() => [
        v.value ? (o(), n(G, { key: 0 }, [
          t("section", Ca, [
            l($e, { variant: "section" }, {
              default: a(() => [
                f("MODELS USED (" + d(v.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            v.value.models.length === 0 ? (o(), n("div", Ia, " No models used in this workflow ")) : m("", !0),
            (o(!0), n(G, null, X(v.value.models, ($) => (o(), n("div", {
              key: $.hash,
              class: "model-card"
            }, [
              t("div", Sa, [
                x[3] || (x[3] = t("span", { class: "model-icon" }, "📦", -1)),
                t("span", Ea, d($.filename), 1)
              ]),
              t("div", La, [
                t("div", za, [
                  x[4] || (x[4] = t("span", { class: "label" }, "Status:", -1)),
                  t("span", {
                    class: K(["value", $.status === "available" ? "success" : "error"])
                  }, d($.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                t("div", Ma, [
                  x[5] || (x[5] = t("span", { class: "label" }, "Importance:", -1)),
                  l(Ee, {
                    "model-value": S.value[$.hash] || $.importance,
                    options: L,
                    "onUpdate:modelValue": (D) => H($.hash, D)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                $.node_type ? (o(), n("div", Na, [
                  x[6] || (x[6] = t("span", { class: "label" }, "Used in:", -1)),
                  t("span", Ra, d($.node_type) + " (Node " + d($.node_id) + ")", 1)
                ])) : m("", !0),
                $.size_mb ? (o(), n("div", Ua, [
                  x[7] || (x[7] = t("span", { class: "label" }, "Size:", -1)),
                  t("span", Da, d($.size_mb) + " MB", 1)
                ])) : m("", !0)
              ]),
              $.status === "missing" ? (o(), n("div", Ba, [
                l(de, {
                  variant: "secondary",
                  size: "sm",
                  onClick: x[0] || (x[0] = (D) => r("resolve"))
                }, {
                  default: a(() => [...x[8] || (x[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : m("", !0)
            ]))), 128))
          ]),
          x[9] || (x[9] = t("div", { class: "info-box" }, [
            t("div", { class: "info-title" }, "Importance options:"),
            t("ul", { class: "info-list" }, [
              t("li", null, [
                t("strong", null, "Required"),
                f(" — Must have for workflow to run")
              ]),
              t("li", null, [
                t("strong", null, "Flexible"),
                f(" — Workflow adapts if missing")
              ]),
              t("li", null, [
                t("strong", null, "Optional"),
                f(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          t("section", Va, [
            l($e, { variant: "section" }, {
              default: a(() => [
                f("NODES USED (" + d(v.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            v.value.nodes.length === 0 ? (o(), n("div", Ta, " No custom nodes used in this workflow ")) : m("", !0),
            (o(!0), n(G, null, X(v.value.nodes, ($) => (o(), n("div", {
              key: $.name,
              class: "node-item"
            }, [
              t("span", {
                class: K(["node-status", $.installed ? "installed" : "missing"])
              }, d($.installed ? "✓" : "✕"), 3),
              t("span", Oa, d($.name), 1),
              $.version ? (o(), n("span", Wa, "v" + d($.version), 1)) : m("", !0)
            ]))), 128))
          ])
        ], 64)) : m("", !0)
      ]),
      footer: a(() => [
        l(de, {
          variant: "secondary",
          onClick: x[1] || (x[1] = ($) => r("close"))
        }, {
          default: a(() => [...x[10] || (x[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        h.value ? (o(), y(de, {
          key: 0,
          variant: "primary",
          onClick: q
        }, {
          default: a(() => [...x[11] || (x[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : m("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Aa = /* @__PURE__ */ W(Fa, [["__scopeId", "data-v-6ce9a41c"]]), Pa = {
  key: 0,
  class: "resolve-section"
}, Ga = { class: "resolve-card success-card" }, Ha = { class: "items-list" }, Ka = { class: "item-info" }, ja = { class: "item-name" }, qa = {
  key: 0,
  class: "item-meta"
}, Ya = { class: "match-type" }, Ja = { class: "source" }, Xa = {
  key: 1,
  class: "resolve-section"
}, Za = { class: "resolve-card warning-card" }, Qa = { class: "items-list" }, es = { class: "item-info" }, ts = { class: "item-name" }, os = { class: "item-meta" }, as = { key: 0 }, ss = { key: 1 }, ns = {
  key: 0,
  class: "item-warning"
}, ls = {
  key: 0,
  class: "item-action"
}, is = ["onClick"], rs = {
  key: 2,
  class: "resolve-section"
}, cs = { class: "info-text" }, ds = { class: "actions-summary" }, us = { class: "summary-list" }, ms = { key: 0 }, vs = { key: 1 }, fs = { key: 2 }, gs = {
  key: 0,
  class: "estimated-size"
}, hs = /* @__PURE__ */ O({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: c }) {
    const s = e, r = c, { resolveWorkflow: i, installWorkflowDeps: w } = ve(), v = E(null), g = E(!1), u = E(!1), h = E(null), S = B(() => {
      var _;
      return v.value ? ((_ = v.value.download_results) == null ? void 0 : _.every((b) => b.can_download)) ?? !1 : !1;
    });
    async function L() {
      g.value = !0, h.value = null;
      try {
        v.value = await i(s.workflowName);
      } catch (_) {
        h.value = _ instanceof Error ? _.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function V(_) {
      return !_.possible_matches || _.possible_matches.length === 0 ? null : _.possible_matches.reduce(
        (b, k) => k.match_confidence > b.match_confidence ? k : b
      );
    }
    function H(_) {
      return _ >= 0.9 ? "high" : _ >= 0.7 ? "medium" : "low";
    }
    function q(_) {
      const b = V(_);
      return b ? b.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function T(_) {
      var b, k;
      return (k = (b = v.value) == null ? void 0 : b.download_results) == null ? void 0 : k.find((p) => p.model === _);
    }
    function x(_) {
      const b = T(_);
      return (b == null ? void 0 : b.can_download) ?? !1;
    }
    function $(_) {
      const b = T(_);
      return (b == null ? void 0 : b.source_url) || null;
    }
    function D(_) {
      window.open(_, "_blank");
    }
    async function R() {
      if (!(!v.value || u.value)) {
        u.value = !0, h.value = null;
        try {
          await w(
            s.workflowName,
            v.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (_) {
          h.value = _ instanceof Error ? _.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    async function C() {
      if (!(!v.value || u.value)) {
        u.value = !0, h.value = null;
        try {
          await w(
            s.workflowName,
            v.value.nodes_to_install,
            v.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (_) {
          h.value = _ instanceof Error ? _.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return ie(L), (_, b) => (o(), y(Pe, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: h.value || void 0,
      onClose: b[1] || (b[1] = (k) => r("close"))
    }, {
      body: a(() => [
        v.value ? (o(), n(G, { key: 0 }, [
          b[5] || (b[5] = t("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          v.value.nodes_unresolved.length > 0 ? (o(), n("section", Pa, [
            l($e, { variant: "section" }, {
              default: a(() => [
                f("NODES (" + d(v.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", Ga, [
              b[2] || (b[2] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "✓"),
                t("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              t("div", Ha, [
                (o(!0), n(G, null, X(v.value.nodes_unresolved, (k) => {
                  var p;
                  return o(), n("div", {
                    key: k.node_type,
                    class: "item"
                  }, [
                    t("div", Ka, [
                      t("div", ja, d(((p = V(k)) == null ? void 0 : p.package_id) || k.node_type), 1),
                      V(k) ? (o(), n("div", qa, [
                        t("span", {
                          class: K(["confidence-badge", H(V(k).match_confidence)])
                        }, d(Math.round(V(k).match_confidence * 100)) + "% match ", 3),
                        t("span", Ya, d(V(k).match_type), 1),
                        t("span", Ja, "Source: " + d(q(k)), 1)
                      ])) : m("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : m("", !0),
          v.value.models_unresolved.length > 0 ? (o(), n("section", Xa, [
            l($e, { variant: "section" }, {
              default: a(() => [
                f("MODELS (" + d(v.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", Za, [
              b[3] || (b[3] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "⚠"),
                t("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              t("div", Qa, [
                (o(!0), n(G, null, X(v.value.models_unresolved, (k) => (o(), n("div", {
                  key: k.filename,
                  class: "item"
                }, [
                  t("div", es, [
                    t("div", ts, d(k.filename), 1),
                    t("div", os, [
                      k.expected_category ? (o(), n("span", as, "Type: " + d(k.expected_category), 1)) : m("", !0),
                      T(k.filename) ? (o(), n("span", ss, " Size: ~" + d(T(k.filename).estimated_size_mb) + " MB ", 1)) : m("", !0)
                    ]),
                    x(k.filename) ? m("", !0) : (o(), n("div", ns, " No auto-download source configured "))
                  ]),
                  $(k.filename) ? (o(), n("div", ls, [
                    t("button", {
                      class: "link-btn",
                      onClick: (p) => D($(k.filename))
                    }, " Open Source ↗ ", 8, is)
                  ])) : m("", !0)
                ]))), 128))
              ])
            ])
          ])) : m("", !0),
          v.value.nodes_resolved.length > 0 || v.value.models_resolved.length > 0 ? (o(), n("section", rs, [
            l($e, { variant: "section" }, {
              default: a(() => [
                f(" ALREADY AVAILABLE (" + d(v.value.nodes_resolved.length + v.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            t("div", cs, d(v.value.nodes_resolved.length) + " nodes and " + d(v.value.models_resolved.length) + " models are already installed ", 1)
          ])) : m("", !0),
          t("div", ds, [
            b[4] || (b[4] = t("div", { class: "summary-title" }, "This will:", -1)),
            t("ol", us, [
              v.value.nodes_to_install.length ? (o(), n("li", ms, " Install " + d(v.value.nodes_to_install.length) + " nodes (~" + d(v.value.estimated_time_seconds) + "s) ", 1)) : m("", !0),
              v.value.nodes_to_install.length ? (o(), n("li", vs, " Restart ComfyUI to load new nodes ")) : m("", !0),
              v.value.models_to_download.length ? (o(), n("li", fs, " You'll still need to download " + d(v.value.models_to_download.length) + " model(s) manually ", 1)) : m("", !0)
            ]),
            v.value.estimated_size_mb ? (o(), n("div", gs, " Estimated download: " + d(v.value.estimated_size_mb) + " MB ", 1)) : m("", !0)
          ])
        ], 64)) : m("", !0)
      ]),
      footer: a(() => [
        l(de, {
          variant: "secondary",
          onClick: b[0] || (b[0] = (k) => r("close"))
        }, {
          default: a(() => [...b[6] || (b[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v.value && v.value.nodes_to_install.length && v.value.models_to_download.length ? (o(), y(de, {
          key: 0,
          variant: "secondary",
          disabled: u.value,
          loading: u.value,
          onClick: R
        }, {
          default: a(() => [...b[7] || (b[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : m("", !0),
        v.value && (v.value.nodes_to_install.length || v.value.models_to_download.length) ? (o(), y(de, {
          key: 1,
          variant: "primary",
          disabled: u.value || v.value.models_to_download.length > 0 && !S.value,
          loading: u.value,
          onClick: C
        }, {
          default: a(() => [...b[8] || (b[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : m("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ps = /* @__PURE__ */ W(hs, [["__scopeId", "data-v-d68efb14"]]), ys = { class: "search-input-wrapper" }, bs = ["value", "placeholder"], ws = /* @__PURE__ */ O({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: c }) {
    const s = e, r = c, i = E(null);
    let w;
    function v(u) {
      const h = u.target.value;
      s.debounce > 0 ? (clearTimeout(w), w = window.setTimeout(() => {
        r("update:modelValue", h);
      }, s.debounce)) : r("update:modelValue", h);
    }
    function g() {
      var u;
      r("update:modelValue", ""), r("clear"), (u = i.value) == null || u.focus();
    }
    return ie(() => {
      s.autoFocus && i.value && i.value.focus();
    }), (u, h) => (o(), n("div", ys, [
      t("input", {
        ref_key: "inputRef",
        ref: i,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: be(g, ["escape"])
      }, null, 40, bs),
      e.clearable && e.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: g,
        title: "Clear search"
      }, " ✕ ")) : m("", !0)
    ]));
  }
}), ks = /* @__PURE__ */ W(ws, [["__scopeId", "data-v-266f857a"]]), _s = { class: "search-bar" }, $s = /* @__PURE__ */ O({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (c, s) => (o(), n("div", _s, [
      l(ks, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Re = /* @__PURE__ */ W($s, [["__scopeId", "data-v-3d51bbfd"]]), xs = { class: "section-group" }, Cs = {
  key: 0,
  class: "section-content"
}, Is = /* @__PURE__ */ O({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: c }) {
    const s = e, r = c, i = E(s.initiallyExpanded);
    function w() {
      s.collapsible && (i.value = !i.value, r("toggle", i.value));
    }
    return (v, g) => (o(), n("section", xs, [
      l(Le, {
        count: e.count,
        clickable: e.collapsible,
        expanded: i.value,
        onClick: w
      }, {
        default: a(() => [
          f(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || i.value ? (o(), n("div", Cs, [
        Z(v.$slots, "default", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), se = /* @__PURE__ */ W(Is, [["__scopeId", "data-v-c48e33ed"]]), Ss = { class: "item-header" }, Es = {
  key: 0,
  class: "item-icon"
}, Ls = { class: "item-info" }, zs = {
  key: 0,
  class: "item-title"
}, Ms = {
  key: 1,
  class: "item-subtitle"
}, Ns = {
  key: 0,
  class: "item-details"
}, Rs = {
  key: 1,
  class: "item-actions"
}, Us = /* @__PURE__ */ O({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: c }) {
    const s = e, r = B(() => s.status ? `status-${s.status}` : "");
    return (i, w) => (o(), n("div", {
      class: K(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: w[0] || (w[0] = (v) => e.clickable && i.$emit("click"))
    }, [
      t("div", Ss, [
        i.$slots.icon ? (o(), n("span", Es, [
          Z(i.$slots, "icon", {}, void 0, !0)
        ])) : m("", !0),
        t("div", Ls, [
          i.$slots.title ? (o(), n("div", zs, [
            Z(i.$slots, "title", {}, void 0, !0)
          ])) : m("", !0),
          i.$slots.subtitle ? (o(), n("div", Ms, [
            Z(i.$slots, "subtitle", {}, void 0, !0)
          ])) : m("", !0)
        ])
      ]),
      i.$slots.details ? (o(), n("div", Ns, [
        Z(i.$slots, "details", {}, void 0, !0)
      ])) : m("", !0),
      i.$slots.actions ? (o(), n("div", Rs, [
        Z(i.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), le = /* @__PURE__ */ W(Us, [["__scopeId", "data-v-cc435e0e"]]), Ds = { class: "loading-state" }, Bs = { class: "loading-message" }, Vs = /* @__PURE__ */ O({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (c, s) => (o(), n("div", Ds, [
      s[0] || (s[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", Bs, d(e.message), 1)
    ]));
  }
}), we = /* @__PURE__ */ W(Vs, [["__scopeId", "data-v-ad8436c9"]]), Ts = { class: "error-state" }, Os = { class: "error-message" }, Ws = /* @__PURE__ */ O({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (c, s) => (o(), n("div", Ts, [
      s[2] || (s[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", Os, d(e.message), 1),
      e.retry ? (o(), y(U, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => c.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : m("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ W(Ws, [["__scopeId", "data-v-5397be48"]]), Fs = /* @__PURE__ */ O({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: c }) {
    const s = c, { getWorkflows: r } = ve(), i = E([]), w = E(!1), v = E(null), g = E(""), u = E(!1), h = E(!1), S = E(!1), L = E(!1), V = E(null), H = B(
      () => i.value.filter((A) => A.status === "broken")
    ), q = B(
      () => i.value.filter((A) => A.status === "new")
    ), T = B(
      () => i.value.filter((A) => A.status === "modified")
    ), x = B(
      () => i.value.filter((A) => A.status === "synced")
    ), $ = B(() => {
      if (!g.value.trim()) return i.value;
      const A = g.value.toLowerCase();
      return i.value.filter((M) => M.name.toLowerCase().includes(A));
    }), D = B(
      () => H.value.filter(
        (A) => !g.value.trim() || A.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), R = B(
      () => q.value.filter(
        (A) => !g.value.trim() || A.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), C = B(
      () => T.value.filter(
        (A) => !g.value.trim() || A.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), _ = B(
      () => x.value.filter(
        (A) => !g.value.trim() || A.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), b = B(
      () => h.value ? _.value : _.value.slice(0, 5)
    );
    async function k() {
      w.value = !0, v.value = null;
      try {
        i.value = await r();
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to load workflows";
      } finally {
        w.value = !1;
      }
    }
    function p(A) {
      V.value = A, S.value = !0;
    }
    function z(A) {
      V.value = A, L.value = !0;
    }
    function F() {
      alert("Bulk resolution not yet implemented");
    }
    function Q() {
      s("refresh");
    }
    return ie(k), (A, M) => (o(), n(G, null, [
      l(ue, null, {
        header: a(() => [
          l(me, { title: "WORKFLOWS" }, {
            actions: a(() => [
              H.value.length > 0 ? (o(), y(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: a(() => [...M[7] || (M[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : m("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          l(Re, {
            modelValue: g.value,
            "onUpdate:modelValue": M[0] || (M[0] = (j) => g.value = j),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          w.value ? (o(), y(we, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), y(ke, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            D.value.length ? (o(), y(se, {
              key: 0,
              title: "BROKEN",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(D.value, (j) => (o(), y(le, {
                  key: j.name,
                  status: "broken"
                }, {
                  icon: a(() => [...M[8] || (M[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(d(j.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(" Missing: " + d(j.missing_nodes) + " nodes, " + d(j.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    l(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (re) => z(j.name)
                    }, {
                      default: a(() => [...M[9] || (M[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => p(j.name)
                    }, {
                      default: a(() => [...M[10] || (M[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            R.value.length ? (o(), y(se, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(R.value, (j) => (o(), y(le, {
                  key: j.name,
                  status: "new"
                }, {
                  icon: a(() => [...M[11] || (M[11] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(d(j.name), 1)
                  ]),
                  subtitle: a(() => [...M[12] || (M[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => p(j.name)
                    }, {
                      default: a(() => [...M[13] || (M[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            C.value.length ? (o(), y(se, {
              key: 2,
              title: "MODIFIED",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(C.value, (j) => (o(), y(le, {
                  key: j.name,
                  status: "modified"
                }, {
                  icon: a(() => [...M[14] || (M[14] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(d(j.name), 1)
                  ]),
                  subtitle: a(() => [...M[15] || (M[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => p(j.name)
                    }, {
                      default: a(() => [...M[16] || (M[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            _.value.length ? (o(), y(se, {
              key: 3,
              title: "SYNCED",
              count: _.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: M[2] || (M[2] = (j) => u.value = j)
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(b.value, (j) => (o(), y(le, {
                  key: j.name,
                  status: "synced"
                }, {
                  icon: a(() => [...M[17] || (M[17] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(d(j.name), 1)
                  ]),
                  subtitle: a(() => [...M[18] || (M[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => p(j.name)
                    }, {
                      default: a(() => [...M[19] || (M[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !h.value && _.value.length > 5 ? (o(), y(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: M[1] || (M[1] = (j) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + d(_.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : m("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : m("", !0),
            $.value.length ? m("", !0) : (o(), y(ge, {
              key: 4,
              icon: "📭",
              message: g.value ? `No workflows match '${g.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S.value && V.value ? (o(), y(Aa, {
        key: 0,
        "workflow-name": V.value,
        onClose: M[3] || (M[3] = (j) => S.value = !1),
        onResolve: M[4] || (M[4] = (j) => z(V.value))
      }, null, 8, ["workflow-name"])) : m("", !0),
      L.value && V.value ? (o(), y(ps, {
        key: 1,
        "workflow-name": V.value,
        onClose: M[5] || (M[5] = (j) => L.value = !1),
        onInstall: Q,
        onRefresh: M[6] || (M[6] = (j) => s("refresh"))
      }, null, 8, ["workflow-name"])) : m("", !0)
    ], 64));
  }
}), As = /* @__PURE__ */ W(Fs, [["__scopeId", "data-v-2251d776"]]), Ps = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (c, s) => (o(), n("span", {
      class: K(["detail-label"]),
      style: Ae({ minWidth: e.minWidth })
    }, [
      Z(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), tt = /* @__PURE__ */ W(Ps, [["__scopeId", "data-v-75e9eeb8"]]), Gs = /* @__PURE__ */ O({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (c, s) => (o(), n("span", {
      class: K(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Z(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Me = /* @__PURE__ */ W(Gs, [["__scopeId", "data-v-2f186e4c"]]), Hs = { class: "detail-row" }, Ks = /* @__PURE__ */ O({
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
    return (c, s) => (o(), n("div", Hs, [
      l(tt, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          f(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), y(Me, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          f(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Z(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), J = /* @__PURE__ */ W(Ks, [["__scopeId", "data-v-ef15664a"]]), js = /* @__PURE__ */ O({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: K(["summary-bar", e.variant])
    }, [
      Z(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ W(js, [["__scopeId", "data-v-ccb7816e"]]), qs = { class: "popover-header" }, Ys = { class: "popover-title" }, Js = { class: "popover-content" }, Xs = {
  key: 0,
  class: "popover-actions"
}, Zs = /* @__PURE__ */ O({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (c, s) => (o(), y(rt, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => c.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ae({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = pe(() => {
          }, ["stop"]))
        }, [
          t("div", qs, [
            t("h4", Ys, d(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          t("div", Js, [
            Z(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), n("div", Xs, [
            Z(c.$slots, "actions", {}, void 0, !0)
          ])) : m("", !0)
        ], 4)
      ])) : m("", !0)
    ]));
  }
}), Ce = /* @__PURE__ */ W(Zs, [["__scopeId", "data-v-057df510"]]), Qs = /* @__PURE__ */ O({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: c }) {
    const s = c, { getEnvironmentModels: r, getStatus: i } = ve(), w = E([]), v = E([]), g = E("production"), u = E(!1), h = E(null), S = E(""), L = E(!1);
    function V() {
      L.value = !1, s("navigate", "model-index");
    }
    const H = B(
      () => w.value.reduce((p, z) => p + (z.size_mb || z.size || 0), 0)
    ), q = B(() => {
      if (!S.value.trim()) return w.value;
      const p = S.value.toLowerCase();
      return w.value.filter((z) => z.filename.toLowerCase().includes(p));
    }), T = B(() => {
      if (!S.value.trim()) return v.value;
      const p = S.value.toLowerCase();
      return v.value.filter((z) => z.filename.toLowerCase().includes(p));
    }), x = B(
      () => q.value.filter((p) => p.type === "checkpoints" || p.category === "checkpoints")
    ), $ = B(
      () => q.value.filter((p) => p.type === "loras" || p.category === "loras")
    ), D = B(
      () => q.value.filter(
        (p) => p.type !== "checkpoints" && p.category !== "checkpoints" && p.type !== "loras" && p.category !== "loras"
      )
    );
    function R(p) {
      return p ? p >= 1024 ? `${(p / 1024).toFixed(1)} GB` : `${p.toFixed(0)} MB` : "Unknown";
    }
    function C(p) {
      s("navigate", "model-index");
    }
    function _(p) {
      s("navigate", "model-index");
    }
    function b(p) {
      alert(`Download functionality not yet implemented for ${p}`);
    }
    async function k() {
      u.value = !0, h.value = null;
      try {
        const p = await r();
        w.value = p, v.value = [];
        const z = await i();
        g.value = z.environment || "production";
      } catch (p) {
        h.value = p instanceof Error ? p.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return ie(k), (p, z) => (o(), n(G, null, [
      l(ue, null, {
        header: a(() => [
          l(me, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (F) => L.value = !0)
          })
        ]),
        search: a(() => [
          l(Re, {
            modelValue: S.value,
            "onUpdate:modelValue": z[1] || (z[1] = (F) => S.value = F),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), y(we, {
            key: 0,
            message: "Loading environment models..."
          })) : h.value ? (o(), y(ke, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            w.value.length ? (o(), y(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(w.value.length) + " models • " + d(R(H.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : m("", !0),
            x.value.length ? (o(), y(se, {
              key: 1,
              title: "CHECKPOINTS",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(x.value, (F) => (o(), y(le, {
                  key: F.sha256 || F.hash || F.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[3] || (z[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(F.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(R(F.size_mb || F.size)), 1)
                  ]),
                  details: a(() => [
                    l(J, {
                      label: "Used by:",
                      value: (F.used_by || F.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(J, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => C(F.sha256 || F.sha256_hash || F.hash || "")
                    }, {
                      default: a(() => [...z[4] || (z[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            $.value.length ? (o(), y(se, {
              key: 2,
              title: "LORAS",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X($.value, (F) => (o(), y(le, {
                  key: F.sha256 || F.hash || F.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[5] || (z[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(F.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(R(F.size_mb || F.size)), 1)
                  ]),
                  details: a(() => [
                    l(J, {
                      label: "Used by:",
                      value: (F.used_by || F.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(J, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => C(F.sha256 || F.sha256_hash || F.hash || "")
                    }, {
                      default: a(() => [...z[6] || (z[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            D.value.length ? (o(), y(se, {
              key: 3,
              title: "OTHER",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(D.value, (F) => (o(), y(le, {
                  key: F.sha256 || F.hash || F.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[7] || (z[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(F.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(R(F.size_mb || F.size)), 1)
                  ]),
                  details: a(() => [
                    l(J, {
                      label: "Type:",
                      value: F.type
                    }, null, 8, ["value"]),
                    l(J, {
                      label: "Used by:",
                      value: (F.used_by || F.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => C(F.sha256 || F.sha256_hash || F.hash || "")
                    }, {
                      default: a(() => [...z[8] || (z[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            T.value.length ? (o(), y(se, {
              key: 4,
              title: "MISSING",
              count: T.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(T.value, (F) => (o(), y(le, {
                  key: F.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...z[9] || (z[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(d(F.filename), 1)
                  ]),
                  subtitle: a(() => [...z[10] || (z[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var Q;
                    return [
                      l(J, {
                        label: "Required by:",
                        value: ((Q = F.workflow_names) == null ? void 0 : Q.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    l(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => b(F.filename)
                    }, {
                      default: a(() => [...z[11] || (z[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Q) => _(F.filename)
                    }, {
                      default: a(() => [...z[12] || (z[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !q.value.length && !T.value.length ? (o(), y(ge, {
              key: 5,
              icon: "📭",
              message: S.value ? `No models match '${S.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: L.value,
        title: "About Environment Models",
        onClose: z[2] || (z[2] = (F) => L.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            z[13] || (z[13] = f(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(g.value) + '"', 1),
            z[14] || (z[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          l(U, {
            variant: "primary",
            onClick: V
          }, {
            default: a(() => [...z[15] || (z[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), en = /* @__PURE__ */ W(Qs, [["__scopeId", "data-v-865641a4"]]), tn = /* @__PURE__ */ O({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: c } = ve(), s = E([]), r = E(!1), i = E(null), w = E(""), v = E(!1), g = B(
      () => s.value.reduce((b, k) => b + (k.size_mb || k.size || 0), 0)
    ), u = B(() => {
      const b = /* @__PURE__ */ new Set();
      return s.value.forEach((k) => {
        k.used_in_environments && k.used_in_environments.length > 0 && k.used_in_environments.forEach((p) => b.add(p.env_name));
      }), b.size;
    }), h = B(() => {
      if (!w.value.trim()) return s.value;
      const b = w.value.toLowerCase();
      return s.value.filter((k) => {
        const p = k, z = k.sha256 || p.sha256_hash || "";
        return k.filename.toLowerCase().includes(b) || z.toLowerCase().includes(b);
      });
    }), S = B(
      () => h.value.filter((b) => b.type === "checkpoints")
    ), L = B(
      () => h.value.filter((b) => b.type === "loras")
    ), V = B(
      () => h.value.filter((b) => b.type !== "checkpoints" && b.type !== "loras")
    );
    function H(b) {
      return b ? b >= 1024 ? `${(b / 1024).toFixed(1)} GB` : `${b.toFixed(0)} MB` : "Unknown";
    }
    function q(b) {
      const k = b, p = b.used_in_workflows || k.used_by || [];
      return !p || p.length === 0 ? "Not used" : `${p.length} workflow(s)`;
    }
    function T(b) {
      navigator.clipboard.writeText(b), alert("Hash copied to clipboard");
    }
    function x(b) {
      prompt("Enter model source URL:", b.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function $(b) {
      const k = b, p = b.used_in_workflows || k.used_by || [], z = p && p.length > 0 ? `

⚠ WARNING: This model is used by ${p.length} workflow(s):
${p.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${b.filename}?${z}

This will free ${H(k.size_mb || b.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function D() {
      alert("Scan for models not yet implemented");
    }
    function R() {
      alert("Change directory not yet implemented");
    }
    function C() {
      alert("Download new model not yet implemented");
    }
    async function _() {
      r.value = !0, i.value = null;
      try {
        s.value = await c(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", S.value), console.log("Filtered loras:", L.value), console.log("Filtered other:", V.value);
      } catch (b) {
        i.value = b instanceof Error ? b.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ie(_), (b, k) => (o(), n(G, null, [
      l(ue, null, {
        header: a(() => [
          l(me, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: k[0] || (k[0] = (p) => v.value = !0)
          }, {
            actions: a(() => [
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: a(() => [...k[3] || (k[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: a(() => [...k[4] || (k[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: a(() => [...k[5] || (k[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
          l(Re, {
            modelValue: w.value,
            "onUpdate:modelValue": k[1] || (k[1] = (p) => w.value = p),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), y(we, {
            key: 0,
            message: "Loading workspace models..."
          })) : i.value ? (o(), y(ke, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length ? (o(), y(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(s.value.length) + " models • " + d(H(g.value)) + " • Used in " + d(u.value) + " environments ", 1)
              ]),
              _: 1
            })) : m("", !0),
            S.value.length ? (o(), y(se, {
              key: 1,
              title: "CHECKPOINTS",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(S.value, (p) => (o(), y(le, {
                  key: p.sha256 || p.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[6] || (k[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(p.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(H(p.size_mb || p.size)), 1)
                  ]),
                  details: a(() => {
                    var z, F;
                    return [
                      p.sha256 || p.sha256_hash ? (o(), y(J, {
                        key: 0,
                        label: "SHA256:",
                        value: (p.sha256 || p.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : m("", !0),
                      l(J, {
                        label: "Used in:",
                        value: q(p)
                      }, null, 8, ["value"]),
                      p.source_url || (z = p.sources) != null && z[0] ? (o(), y(J, {
                        key: 1,
                        label: "Source URL:",
                        value: p.source_url || ((F = p.sources) == null ? void 0 : F[0])
                      }, null, 8, ["value"])) : (o(), y(J, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...k[7] || (k[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => x(p)
                    }, {
                      default: a(() => [...k[8] || (k[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p.sha256 || p.sha256_hash ? (o(), y(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => T(p.sha256 || p.sha256_hash)
                    }, {
                      default: a(() => [...k[9] || (k[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : m("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => $(p)
                    }, {
                      default: a(() => [...k[10] || (k[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            L.value.length ? (o(), y(se, {
              key: 2,
              title: "LORAS",
              count: L.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(L.value, (p) => (o(), y(le, {
                  key: p.sha256 || p.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[11] || (k[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(p.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(H(p.size_mb || p.size)), 1)
                  ]),
                  details: a(() => {
                    var z, F;
                    return [
                      p.sha256 || p.sha256_hash ? (o(), y(J, {
                        key: 0,
                        label: "SHA256:",
                        value: (p.sha256 || p.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : m("", !0),
                      l(J, {
                        label: "Used in:",
                        value: q(p)
                      }, null, 8, ["value"]),
                      p.source_url || (z = p.sources) != null && z[0] ? (o(), y(J, {
                        key: 1,
                        label: "Source URL:",
                        value: p.source_url || ((F = p.sources) == null ? void 0 : F[0])
                      }, null, 8, ["value"])) : (o(), y(J, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...k[12] || (k[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => x(p)
                    }, {
                      default: a(() => [...k[13] || (k[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p.sha256 || p.sha256_hash ? (o(), y(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => T(p.sha256 || p.sha256_hash)
                    }, {
                      default: a(() => [...k[14] || (k[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : m("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => $(p)
                    }, {
                      default: a(() => [...k[15] || (k[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            V.value.length ? (o(), y(se, {
              key: 3,
              title: "OTHER",
              count: V.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(V.value, (p) => (o(), y(le, {
                  key: p.sha256 || p.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[16] || (k[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(p.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(H(p.size_mb || p.size)), 1)
                  ]),
                  details: a(() => [
                    l(J, {
                      label: "Type:",
                      value: p.type
                    }, null, 8, ["value"]),
                    p.sha256 || p.sha256_hash ? (o(), y(J, {
                      key: 0,
                      label: "SHA256:",
                      value: (p.sha256 || p.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : m("", !0),
                    l(J, {
                      label: "Used in:",
                      value: q(p)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => x(p)
                    }, {
                      default: a(() => [...k[17] || (k[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p.sha256 || p.sha256_hash ? (o(), y(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => T(p.sha256 || p.sha256_hash)
                    }, {
                      default: a(() => [...k[18] || (k[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : m("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => $(p)
                    }, {
                      default: a(() => [...k[19] || (k[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            h.value.length ? m("", !0) : (o(), y(ge, {
              key: 4,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: v.value,
        title: "About Workspace Model Index",
        onClose: k[2] || (k[2] = (p) => v.value = !1)
      }, {
        content: a(() => [...k[20] || (k[20] = [
          t("p", null, [
            f(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            f(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), on = /* @__PURE__ */ W(tn, [["__scopeId", "data-v-5a24af01"]]), an = { key: 0 }, sn = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, nn = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, ln = /* @__PURE__ */ O({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: c, installNode: s, updateNode: r, uninstallNode: i } = ve(), w = E({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), v = E(!1), g = E(null), u = E(""), h = E(!1), S = B(() => {
      if (!u.value.trim()) return w.value.nodes;
      const C = u.value.toLowerCase();
      return w.value.nodes.filter(
        (_) => {
          var b, k;
          return _.name.toLowerCase().includes(C) || ((b = _.description) == null ? void 0 : b.toLowerCase().includes(C)) || ((k = _.repository) == null ? void 0 : k.toLowerCase().includes(C));
        }
      );
    }), L = B(
      () => S.value.filter((C) => C.installed)
    ), V = B(
      () => S.value.filter((C) => !C.installed)
    );
    function H(C) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[C] || C;
    }
    function q(C) {
      return !C.used_in_workflows || C.used_in_workflows.length === 0 ? "Not used in any workflows" : C.used_in_workflows.length === 1 ? C.used_in_workflows[0] : `${C.used_in_workflows.length} workflows`;
    }
    function T(C) {
      window.open(C, "_blank");
    }
    async function x(C) {
      if (confirm(`Install node "${C}"?

This will download and install the node from its repository.`))
        try {
          v.value = !0;
          const _ = await s(C);
          _.status === "success" ? (alert(`Node "${C}" installed successfully!`), await R()) : alert(`Failed to install node: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error installing node: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function $(C) {
      if (confirm(`Check for updates for "${C}"?`))
        try {
          v.value = !0;
          const _ = await r(C);
          _.status === "success" ? (alert(`Node "${C}" is up to date or has been updated!`), await R()) : alert(`Update check failed: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error checking for updates: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function D(C) {
      if (confirm(`Uninstall node "${C}"?

This will remove the node from this environment.`))
        try {
          v.value = !0;
          const _ = await i(C);
          _.status === "success" ? (alert(`Node "${C}" uninstalled successfully!`), await R()) : alert(`Failed to uninstall node: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error uninstalling node: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function R() {
      v.value = !0, g.value = null;
      try {
        w.value = await c();
      } catch (C) {
        g.value = C instanceof Error ? C.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return ie(R), (C, _) => (o(), n(G, null, [
      l(ue, null, {
        header: a(() => [
          l(me, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (b) => h.value = !0)
          })
        ]),
        search: a(() => [
          l(Re, {
            modelValue: u.value,
            "onUpdate:modelValue": _[1] || (_[1] = (b) => u.value = b),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), y(we, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : g.value ? (o(), y(ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            w.value.total_count ? (o(), y(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(w.value.total_count) + " nodes • " + d(w.value.installed_count) + " installed • " + d(w.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : m("", !0),
            L.value.length ? (o(), y(se, {
              key: 1,
              title: "INSTALLED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(L.value, (b) => (o(), y(le, {
                  key: b.name,
                  status: "synced"
                }, {
                  icon: a(() => [..._[4] || (_[4] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(b.name), 1)
                  ]),
                  subtitle: a(() => [
                    b.version ? (o(), n("span", an, "v" + d(b.version), 1)) : (o(), n("span", sn, "version unknown")),
                    b.source ? (o(), n("span", nn, " • " + d(H(b.source)), 1)) : m("", !0)
                  ]),
                  details: a(() => [
                    b.description ? (o(), y(J, {
                      key: 0,
                      label: "Description:",
                      value: b.description
                    }, null, 8, ["value"])) : m("", !0),
                    b.repository ? (o(), y(J, {
                      key: 1,
                      label: "Repository:",
                      value: b.repository
                    }, null, 8, ["value"])) : m("", !0),
                    l(J, {
                      label: "Used by:",
                      value: q(b)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    b.repository ? (o(), y(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => T(b.repository)
                    }, {
                      default: a(() => [..._[5] || (_[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : m("", !0),
                    b.source === "registry" ? (o(), y(U, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => $(b.name)
                    }, {
                      default: a(() => [..._[6] || (_[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : m("", !0),
                    b.source !== "unknown" ? (o(), y(U, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (k) => D(b.name)
                    }, {
                      default: a(() => [..._[7] || (_[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : m("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            V.value.length ? (o(), y(se, {
              key: 2,
              title: "MISSING",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(V.value, (b) => (o(), y(le, {
                  key: b.name,
                  status: "missing"
                }, {
                  icon: a(() => [..._[8] || (_[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(d(b.name), 1)
                  ]),
                  subtitle: a(() => [..._[9] || (_[9] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    b.description ? (o(), y(J, {
                      key: 0,
                      label: "Description:",
                      value: b.description
                    }, null, 8, ["value"])) : m("", !0),
                    b.repository ? (o(), y(J, {
                      key: 1,
                      label: "Repository:",
                      value: b.repository
                    }, null, 8, ["value"])) : m("", !0),
                    l(J, {
                      label: "Required by:",
                      value: q(b)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    b.download_url ? (o(), y(U, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (k) => x(b.name)
                    }, {
                      default: a(() => [..._[10] || (_[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : m("", !0),
                    b.repository ? (o(), y(U, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (k) => T(b.repository)
                    }, {
                      default: a(() => [..._[11] || (_[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : m("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !L.value.length && !V.value.length ? (o(), y(ge, {
              key: 3,
              icon: "📭",
              message: u.value ? `No nodes match '${u.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: h.value,
        title: "About Git-Tracked Nodes",
        onClose: _[3] || (_[3] = (b) => h.value = !1)
      }, {
        content: a(() => [..._[12] || (_[12] = [
          t("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            f(" Nodes currently available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            f(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          l(U, {
            variant: "primary",
            onClick: _[2] || (_[2] = (b) => h.value = !1)
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
}), rn = /* @__PURE__ */ W(ln, [["__scopeId", "data-v-c480e2c1"]]), cn = { class: "remote-url-display" }, dn = ["title"], un = ["title"], mn = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vn = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, fn = /* @__PURE__ */ O({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const c = e, s = E(!1), r = B(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const w = c.url.slice(0, Math.floor(c.maxLength * 0.6)), v = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${w}...${v}`;
    });
    async function i() {
      try {
        await navigator.clipboard.writeText(c.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy URL:", w);
      }
    }
    return (w, v) => (o(), n("div", cn, [
      t("span", {
        class: "url-text",
        title: e.url
      }, d(r.value), 9, dn),
      t("button", {
        class: K(["copy-btn", { copied: s.value }]),
        onClick: i,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", vn, [...v[1] || (v[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", mn, [...v[0] || (v[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, un)
    ]));
  }
}), it = /* @__PURE__ */ W(fn, [["__scopeId", "data-v-7768a58d"]]), gn = { class: "remote-title" }, hn = {
  key: 0,
  class: "default-badge"
}, pn = {
  key: 1,
  class: "sync-badge"
}, yn = {
  key: 0,
  class: "ahead"
}, bn = {
  key: 1,
  class: "behind"
}, wn = {
  key: 0,
  class: "tracking-info"
}, kn = /* @__PURE__ */ O({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: c }) {
    const s = e, r = B(() => s.fetchingRemote === s.remote.name), i = B(() => s.remote.is_default), w = B(() => !!s.trackingBranch);
    function v(g) {
      const u = new Date(g), S = (/* @__PURE__ */ new Date()).getTime() - u.getTime(), L = Math.floor(S / 6e4);
      if (L < 1) return "Just now";
      if (L < 60) return `${L}m ago`;
      const V = Math.floor(L / 60);
      if (V < 24) return `${V}h ago`;
      const H = Math.floor(V / 24);
      return H < 7 ? `${H}d ago` : u.toLocaleDateString();
    }
    return (g, u) => (o(), y(le, {
      status: i.value ? "synced" : void 0
    }, {
      icon: a(() => [
        f(d(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        t("div", gn, [
          t("span", null, d(e.remote.name), 1),
          i.value ? (o(), n("span", hn, "DEFAULT")) : m("", !0),
          e.syncStatus ? (o(), n("span", pn, [
            e.syncStatus.ahead > 0 ? (o(), n("span", yn, "↑" + d(e.syncStatus.ahead), 1)) : m("", !0),
            e.syncStatus.behind > 0 ? (o(), n("span", bn, "↓" + d(e.syncStatus.behind), 1)) : m("", !0)
          ])) : m("", !0)
        ])
      ]),
      subtitle: a(() => [
        w.value ? (o(), n("span", wn, " Tracking: " + d(e.trackingBranch), 1)) : m("", !0)
      ]),
      details: a(() => {
        var h;
        return [
          l(J, { label: "Fetch:" }, {
            default: a(() => [
              l(it, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (o(), y(J, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              l(it, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : m("", !0),
          (h = e.syncStatus) != null && h.last_fetch ? (o(), y(J, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              t("span", null, d(v(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : m("", !0)
        ];
      }),
      actions: a(() => [
        l(U, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: u[0] || (u[0] = (h) => g.$emit("fetch", e.remote.name))
        }, {
          default: a(() => [...u[3] || (u[3] = [
            f(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        l(U, {
          variant: "secondary",
          size: "xs",
          onClick: u[1] || (u[1] = (h) => g.$emit("edit", e.remote.name))
        }, {
          default: a(() => [...u[4] || (u[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? m("", !0) : (o(), y(U, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: u[2] || (u[2] = (h) => g.$emit("remove", e.remote.name))
        }, {
          default: a(() => [...u[5] || (u[5] = [
            f(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), _n = /* @__PURE__ */ W(kn, [["__scopeId", "data-v-17362e45"]]), $n = ["for"], xn = {
  key: 0,
  class: "base-form-field-required"
}, Cn = { class: "base-form-field-input" }, In = {
  key: 1,
  class: "base-form-field-error"
}, Sn = {
  key: 2,
  class: "base-form-field-hint"
}, En = /* @__PURE__ */ O({
  __name: "BaseFormField",
  props: {
    label: {},
    error: {},
    hint: {},
    required: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !0 },
    id: {}
  },
  setup(e) {
    const c = e, s = B(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, i) => (o(), n("div", {
      class: K(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        f(d(e.label) + " ", 1),
        e.required ? (o(), n("span", xn, "*")) : m("", !0)
      ], 8, $n)) : m("", !0),
      t("div", Cn, [
        Z(r.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (o(), n("span", In, d(e.error), 1)) : e.hint ? (o(), n("span", Sn, d(e.hint), 1)) : m("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ W(En, [["__scopeId", "data-v-9a1cf296"]]), Ln = ["type", "value", "placeholder", "disabled"], zn = {
  key: 0,
  class: "base-input-error"
}, Mn = /* @__PURE__ */ O({
  __name: "BaseInput",
  props: {
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {},
    fullWidth: { type: Boolean, default: !1 },
    type: { default: "text" }
  },
  emits: ["update:modelValue", "enter", "escape"],
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: K(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: K(["base-input", { error: !!e.error }]),
        onInput: s[0] || (s[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = be((r) => c.$emit("enter"), ["enter"])),
          s[2] || (s[2] = be((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ln),
      e.error ? (o(), n("span", zn, d(e.error), 1)) : m("", !0)
    ], 2));
  }
}), Qe = /* @__PURE__ */ W(Mn, [["__scopeId", "data-v-9ba02cdc"]]), Nn = { class: "remote-form" }, Rn = { class: "form-header" }, Un = { class: "form-body" }, Dn = {
  key: 0,
  class: "form-error"
}, Bn = { class: "form-actions" }, Vn = /* @__PURE__ */ O({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: c }) {
    const s = e, r = c, i = E({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), w = E(!1), v = E(null);
    _t(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      i.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const g = B(() => i.value.name.trim() !== "" && i.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!g.value || w.value)) {
        v.value = null, w.value = !0;
        try {
          r("submit", i.value);
        } catch (h) {
          v.value = h instanceof Error ? h.message : "Failed to submit form";
        } finally {
          w.value = !1;
        }
      }
    }
    return (h, S) => (o(), n("div", Nn, [
      t("div", Rn, [
        l(Le, null, {
          default: a(() => [
            f(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Un, [
        l(Ze, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            l(Qe, {
              modelValue: i.value.name,
              "onUpdate:modelValue": S[0] || (S[0] = (L) => i.value.name = L),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        l(Ze, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            l(Qe, {
              modelValue: i.value.fetchUrl,
              "onUpdate:modelValue": S[1] || (S[1] = (L) => i.value.fetchUrl = L),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(Ze, { label: "Push URL (optional)" }, {
          default: a(() => [
            l(Qe, {
              modelValue: i.value.pushUrl,
              "onUpdate:modelValue": S[2] || (S[2] = (L) => i.value.pushUrl = L),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (o(), n("div", Dn, d(v.value), 1)) : m("", !0)
      ]),
      t("div", Bn, [
        l(U, {
          variant: "primary",
          size: "md",
          disabled: !g.value,
          loading: w.value,
          onClick: u
        }, {
          default: a(() => [
            f(d(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        l(U, {
          variant: "ghost",
          size: "md",
          onClick: S[3] || (S[3] = (L) => h.$emit("cancel"))
        }, {
          default: a(() => [...S[4] || (S[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Tn = /* @__PURE__ */ W(Vn, [["__scopeId", "data-v-56021b18"]]), On = { key: 0 }, Wn = /* @__PURE__ */ O({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: c,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: i,
      fetchRemote: w,
      getRemoteSyncStatus: v
    } = ve(), g = E([]), u = E(null), h = E({}), S = E(!1), L = E(null), V = E(""), H = E(!1), q = E(null), T = E(!1), x = E("add"), $ = E({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = B(() => {
      if (!V.value.trim()) return g.value;
      const A = V.value.toLowerCase();
      return g.value.filter(
        (M) => M.name.toLowerCase().includes(A) || M.fetch_url.toLowerCase().includes(A) || M.push_url.toLowerCase().includes(A)
      );
    });
    function R(A) {
      var M;
      return ((M = u.value) == null ? void 0 : M.remote) === A;
    }
    async function C() {
      S.value = !0, L.value = null;
      try {
        const A = await c();
        g.value = A.remotes, u.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (M) => {
            const j = await v(M.name);
            j && (h.value[M.name] = j);
          })
        );
      } catch (A) {
        L.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function _() {
      x.value = "add", $.value = { name: "", fetchUrl: "", pushUrl: "" }, T.value = !0;
    }
    function b(A) {
      const M = g.value.find((j) => j.name === A);
      M && (x.value = "edit", $.value = {
        name: M.name,
        fetchUrl: M.fetch_url,
        pushUrl: M.push_url
      }, T.value = !0);
    }
    async function k(A) {
      try {
        x.value === "add" ? await s(A.name, A.fetchUrl) : await i(A.name, A.fetchUrl, A.pushUrl || void 0), T.value = !1, await C();
      } catch (M) {
        L.value = M instanceof Error ? M.message : "Operation failed";
      }
    }
    function p() {
      T.value = !1, $.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function z(A) {
      q.value = A;
      try {
        await w(A);
        const M = await v(A);
        M && (h.value[A] = M);
      } catch (M) {
        L.value = M instanceof Error ? M.message : "Fetch failed";
      } finally {
        q.value = null;
      }
    }
    async function F(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await r(A), await C();
        } catch (M) {
          L.value = M instanceof Error ? M.message : "Failed to remove remote";
        }
    }
    function Q() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ie(C), (A, M) => (o(), n(G, null, [
      l(ue, null, {
        header: a(() => [
          l(me, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (j) => H.value = !0)
          }, {
            actions: a(() => [
              T.value ? m("", !0) : (o(), y(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: a(() => [...M[3] || (M[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          T.value ? m("", !0) : (o(), y(Re, {
            key: 0,
            modelValue: V.value,
            "onUpdate:modelValue": M[1] || (M[1] = (j) => V.value = j),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          S.value ? (o(), y(we, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (o(), y(ke, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            T.value ? (o(), y(Tn, {
              key: 0,
              mode: x.value,
              "remote-name": $.value.name,
              "fetch-url": $.value.fetchUrl,
              "push-url": $.value.pushUrl,
              onSubmit: k,
              onCancel: p
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : m("", !0),
            g.value.length && !T.value ? (o(), y(xe, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(g.value.length) + " remote" + d(g.value.length !== 1 ? "s" : "") + " ", 1),
                u.value ? (o(), n("span", On, " • Tracking: " + d(u.value.remote) + "/" + d(u.value.branch), 1)) : m("", !0)
              ]),
              _: 1
            })) : m("", !0),
            D.value.length && !T.value ? (o(), y(se, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, X(D.value, (j) => {
                  var re;
                  return o(), y(_n, {
                    key: j.name,
                    remote: j,
                    "sync-status": h.value[j.name],
                    "tracking-branch": R(j.name) ? (re = u.value) == null ? void 0 : re.branch : void 0,
                    "fetching-remote": q.value,
                    onFetch: z,
                    onEdit: b,
                    onRemove: F
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !D.value.length && !T.value ? (o(), y(ge, {
              key: 3,
              icon: "🌐",
              message: V.value ? `No remotes match '${V.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                l(U, {
                  variant: "primary",
                  onClick: _
                }, {
                  default: a(() => [...M[4] || (M[4] = [
                    f(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: H.value,
        title: "About Git Remotes",
        onClose: M[2] || (M[2] = (j) => H.value = !1)
      }, {
        content: a(() => [...M[5] || (M[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            f(" The "),
            t("strong", null, '"origin"'),
            f(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          l(U, {
            variant: "link",
            onClick: Q
          }, {
            default: a(() => [...M[6] || (M[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Fn = /* @__PURE__ */ W(Wn, [["__scopeId", "data-v-a75719bb"]]), An = { class: "setting-info" }, Pn = { class: "setting-label" }, Gn = {
  key: 0,
  class: "required-marker"
}, Hn = {
  key: 0,
  class: "setting-description"
}, Kn = { class: "setting-control" }, jn = /* @__PURE__ */ O({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: K(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", An, [
        t("div", Pn, [
          f(d(e.label) + " ", 1),
          e.required ? (o(), n("span", Gn, "*")) : m("", !0)
        ]),
        e.description ? (o(), n("div", Hn, d(e.description), 1)) : m("", !0)
      ]),
      t("div", Kn, [
        Z(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), oe = /* @__PURE__ */ W(jn, [["__scopeId", "data-v-cb5d236c"]]), qn = { class: "toggle" }, Yn = ["checked", "disabled"], Jn = /* @__PURE__ */ O({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (c, s) => (o(), n("label", qn, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: s[0] || (s[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Yn),
      s[1] || (s[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ce = /* @__PURE__ */ W(Jn, [["__scopeId", "data-v-71c0f550"]]), Xn = { class: "settings-section" }, Zn = { class: "settings-section" }, Qn = { class: "settings-section" }, el = { class: "settings-section" }, tl = { class: "settings-section" }, ol = { class: "settings-section" }, al = /* @__PURE__ */ O({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const c = E(!1), s = E(null), r = E(null), i = E({
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
    }), w = E(null), v = B(() => w.value ? JSON.stringify(i.value) !== JSON.stringify(w.value) : !1), g = [
      { label: "15 minutes", value: 15 },
      { label: "30 minutes", value: 30 },
      { label: "1 hour", value: 60 },
      { label: "2 hours", value: 120 },
      { label: "Manual only", value: 0 }
    ], u = [
      { label: "Latest", value: "latest" },
      { label: "Stable", value: "stable" },
      { label: "v0.2.0", value: "v0.2.0" },
      { label: "v0.1.0", value: "v0.1.0" }
    ], h = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], S = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], L = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], V = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function H() {
      c.value = !0, s.value = null;
      try {
        await new Promise((x) => setTimeout(x, 500)), w.value = JSON.parse(JSON.stringify(i.value));
      } catch (x) {
        s.value = x instanceof Error ? x.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function q() {
      r.value = null;
      try {
        await new Promise((x) => setTimeout(x, 300)), w.value = JSON.parse(JSON.stringify(i.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (x) {
        r.value = {
          type: "error",
          message: x instanceof Error ? x.message : "Failed to save settings"
        };
      }
    }
    function T() {
      w.value && (i.value = JSON.parse(JSON.stringify(w.value)), r.value = null);
    }
    return ie(H), (x, $) => (o(), y(ue, null, {
      header: a(() => [
        l(me, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            l(U, {
              variant: "primary",
              size: "sm",
              disabled: !v.value,
              onClick: q
            }, {
              default: a(() => [...$[19] || ($[19] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            v.value ? (o(), y(U, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: T
            }, {
              default: a(() => [...$[20] || ($[20] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : m("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        c.value ? (o(), y(we, {
          key: 0,
          message: "Loading workspace settings..."
        })) : s.value ? (o(), y(ke, {
          key: 1,
          message: s.value,
          retry: !0,
          onRetry: H
        }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
          l(se, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              t("div", Xn, [
                l(oe, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(ze, {
                      modelValue: i.value.git.userName,
                      "onUpdate:modelValue": $[0] || ($[0] = (D) => i.value.git.userName = D),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(ze, {
                      modelValue: i.value.git.userEmail,
                      "onUpdate:modelValue": $[1] || ($[1] = (D) => i.value.git.userEmail = D),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    l(ze, {
                      modelValue: i.value.git.defaultBranch,
                      "onUpdate:modelValue": $[2] || ($[2] = (D) => i.value.git.defaultBranch = D),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.git.autoCommit,
                      "onUpdate:modelValue": $[3] || ($[3] = (D) => i.value.git.autoCommit = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(se, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              t("div", Zn, [
                l(oe, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    l(Me, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(d(i.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    l(Me, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(d(i.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    l(Me, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(d(i.value.paths.modelsDir), 1)
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
          l(se, { title: "MODEL INDEX" }, {
            default: a(() => [
              t("div", Qn, [
                l(oe, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": $[4] || ($[4] = (D) => i.value.modelIndex.autoIndex = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !i.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": $[5] || ($[5] = (D) => i.value.modelIndex.indexOnStartup = D),
                      disabled: !i.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(oe, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !i.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(Ee, {
                      modelValue: i.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": $[6] || ($[6] = (D) => i.value.modelIndex.scanInterval = D),
                      options: g,
                      disabled: !i.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(oe, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.modelIndex.deepScan,
                      "onUpdate:modelValue": $[7] || ($[7] = (D) => i.value.modelIndex.deepScan = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(se, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              t("div", el, [
                l(oe, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    l(Ee, {
                      modelValue: i.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": $[8] || ($[8] = (D) => i.value.environment.defaultComfyUIVersion = D),
                      options: u,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    l(Ee, {
                      modelValue: i.value.environment.pythonVersion,
                      "onUpdate:modelValue": $[9] || ($[9] = (D) => i.value.environment.pythonVersion = D),
                      options: h,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": $[10] || ($[10] = (D) => i.value.environment.autoCreateVenv = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": $[11] || ($[11] = (D) => i.value.environment.autoInstallDeps = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(se, { title: "UI PREFERENCES" }, {
            default: a(() => [
              t("div", tl, [
                l(oe, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    l(Ee, {
                      modelValue: i.value.ui.theme,
                      "onUpdate:modelValue": $[12] || ($[12] = (D) => i.value.ui.theme = D),
                      options: S,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.ui.compactMode,
                      "onUpdate:modelValue": $[13] || ($[13] = (D) => i.value.ui.compactMode = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.ui.showFileExtensions,
                      "onUpdate:modelValue": $[14] || ($[14] = (D) => i.value.ui.showFileExtensions = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.ui.confirmDestructive,
                      "onUpdate:modelValue": $[15] || ($[15] = (D) => i.value.ui.confirmDestructive = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(se, { title: "ADVANCED" }, {
            default: a(() => [
              t("div", ol, [
                l(oe, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    l(ce, {
                      modelValue: i.value.advanced.debugMode,
                      "onUpdate:modelValue": $[16] || ($[16] = (D) => i.value.advanced.debugMode = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    l(Ee, {
                      modelValue: i.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": $[17] || ($[17] = (D) => i.value.advanced.maxHistoryItems = D),
                      options: L,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    l(Ee, {
                      modelValue: i.value.advanced.cacheDuration,
                      "onUpdate:modelValue": $[18] || ($[18] = (D) => i.value.advanced.cacheDuration = D),
                      options: V,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          r.value ? (o(), y(xe, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: a(() => [
              t("span", {
                style: Ae({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, d(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : m("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), sl = /* @__PURE__ */ W(al, [["__scopeId", "data-v-74f65bd5"]]), nl = { class: "log-filter-bar" }, ll = { class: "log-filter-bar__options" }, il = ["onClick"], rl = /* @__PURE__ */ O({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: c }) {
    const s = e, r = c, i = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function w(g) {
      return s.activeLevels.includes(g);
    }
    function v(g) {
      r("toggle", g);
    }
    return (g, u) => (o(), n("div", nl, [
      u[1] || (u[1] = t("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      t("div", ll, [
        (o(), n(G, null, X(i, (h) => t("button", {
          key: h,
          class: K(["filter-option", { active: w(h) }]),
          onClick: (S) => v(h)
        }, d(h), 11, il)), 64)),
        t("button", {
          class: "filter-option filter-option--clear",
          onClick: u[0] || (u[0] = (h) => g.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), ft = /* @__PURE__ */ W(rl, [["__scopeId", "data-v-9052edf8"]]), cl = { class: "log-list" }, dl = /* @__PURE__ */ O({
  __name: "LogList",
  setup(e) {
    return (c, s) => (o(), n("div", cl, [
      Z(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), gt = /* @__PURE__ */ W(dl, [["__scopeId", "data-v-0061c330"]]), ul = { class: "log-level__icon" }, ml = { class: "log-level__text" }, vl = /* @__PURE__ */ O({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const c = e, s = B(() => `log-level--${c.level.toLowerCase()}`), r = B(() => {
      switch (c.level) {
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
    return (i, w) => (o(), n("span", {
      class: K(["log-level", s.value])
    }, [
      t("span", ul, d(r.value), 1),
      t("span", ml, d(e.level), 1)
    ], 2));
  }
}), fl = /* @__PURE__ */ W(vl, [["__scopeId", "data-v-8547c115"]]), gl = { class: "log-item__header" }, hl = { class: "log-item__timestamp" }, pl = {
  key: 0,
  class: "log-item__context"
}, yl = { class: "log-item__message" }, bl = /* @__PURE__ */ O({
  __name: "LogItem",
  props: {
    level: {},
    timestamp: {},
    message: {},
    context: {},
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: c }) {
    const s = e, r = B(() => `log-item--${s.level.toLowerCase()}`);
    return (i, w) => (o(), n("div", {
      class: K(["log-item", r.value, { clickable: e.clickable }]),
      onClick: w[0] || (w[0] = (v) => e.clickable && i.$emit("click"))
    }, [
      t("div", gl, [
        l(fl, { level: e.level }, null, 8, ["level"]),
        t("span", hl, d(e.timestamp), 1),
        e.context ? (o(), n("span", pl, d(e.context), 1)) : m("", !0)
      ]),
      t("div", yl, d(e.message), 1)
    ], 2));
  }
}), ht = /* @__PURE__ */ W(bl, [["__scopeId", "data-v-adb291b1"]]), wl = {
  key: 2,
  class: "load-more"
}, kl = /* @__PURE__ */ O({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: c } = ve(), s = E([]), r = E(!1), i = E(null), w = E(!1), v = E(["ERROR", "WARNING", "INFO", "DEBUG"]), g = E(100), u = B(() => s.value.filter((C) => C.level === "ERROR").length), h = B(() => s.value.filter((C) => C.level === "WARNING").length), S = B(() => s.value.filter((C) => C.level === "INFO").length), L = B(() => s.value.filter((C) => C.level === "DEBUG").length), V = B(() => s.value.filter((C) => v.value.includes(C.level))), H = B(() => V.value.slice(0, g.value)), q = B(() => V.value.length > g.value);
    function T(C) {
      const _ = v.value.indexOf(C);
      _ >= 0 ? v.value.splice(_, 1) : v.value.push(C);
    }
    function x() {
      v.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function $() {
      g.value += 100;
    }
    function D(C) {
      try {
        return new Date(C).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        });
      } catch {
        return C;
      }
    }
    async function R() {
      r.value = !0, i.value = null;
      try {
        s.value = await c(void 0, 500);
      } catch (C) {
        i.value = C instanceof Error ? C.message : "Failed to load workspace logs";
      } finally {
        r.value = !1;
      }
    }
    return ie(R), (C, _) => (o(), n(G, null, [
      l(ue, null, {
        header: a(() => [
          l(me, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (b) => w.value = !0)
          })
        ]),
        content: a(() => [
          r.value ? (o(), y(we, {
            key: 0,
            message: "Loading workspace logs..."
          })) : i.value ? (o(), y(ke, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length > 0 ? (o(), y(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(s.value.length) + " entries • " + d(u.value) + " errors • " + d(h.value) + " warnings • " + d(S.value) + " info • " + d(L.value) + " debug ", 1)
              ]),
              _: 1
            })) : m("", !0),
            l(ft, {
              "active-levels": v.value,
              onToggle: T,
              onClear: x
            }, null, 8, ["active-levels"]),
            V.value.length > 0 ? (o(), y(gt, { key: 1 }, {
              default: a(() => [
                (o(!0), n(G, null, X(H.value, (b, k) => (o(), y(ht, {
                  key: `${b.timestamp}-${k}`,
                  level: b.level,
                  timestamp: D(b.timestamp),
                  message: b.message,
                  context: b.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : m("", !0),
            q.value ? (o(), n("div", wl, [
              l(U, {
                variant: "secondary",
                onClick: $
              }, {
                default: a(() => [
                  f(" Load More (" + d(V.value.length - g.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : m("", !0),
            s.value.length > 0 && V.value.length === 0 ? (o(), y(ge, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : m("", !0),
            s.value.length === 0 ? (o(), y(ge, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: w.value,
        title: "About Workspace Logs",
        onClose: _[2] || (_[2] = (b) => w.value = !1)
      }, {
        content: a(() => [..._[3] || (_[3] = [
          t("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            f(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            f(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          l(U, {
            variant: "primary",
            onClick: _[1] || (_[1] = (b) => w.value = !1)
          }, {
            default: a(() => [..._[4] || (_[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _l = /* @__PURE__ */ W(kl, [["__scopeId", "data-v-55d656f1"]]), $l = {
  key: 2,
  class: "load-more"
}, xl = /* @__PURE__ */ O({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: c, getStatus: s } = ve(), r = E([]), i = E(!1), w = E(null), v = E(!1), g = E(["ERROR", "WARNING", "INFO", "DEBUG"]), u = E(50), h = E("production"), S = B(() => r.value.filter((k) => g.value.includes(k.level.toUpperCase()))), L = B(() => S.value.slice(0, u.value)), V = B(() => S.value.length > u.value), H = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "ERROR").length
    ), q = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "WARNING").length
    ), T = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "INFO").length
    ), x = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "DEBUG").length
    );
    function $(k) {
      const p = g.value.indexOf(k);
      p > -1 ? g.value.splice(p, 1) : g.value.push(k);
    }
    function D() {
      g.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function R() {
      u.value += 50;
    }
    function C(k) {
      return new Date(k).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    }
    function _(k) {
      if (!k) return;
      const p = Object.entries(k);
      if (p.length === 0) return;
      const [z, F] = p[0];
      return typeof F == "string" || typeof F == "number" ? `${z}: ${F}` : z;
    }
    async function b() {
      i.value = !0, w.value = null;
      try {
        r.value = await c(void 0, 200), r.value.sort((k, p) => new Date(p.timestamp).getTime() - new Date(k.timestamp).getTime());
        try {
          const k = await s();
          h.value = k.environment || "production";
        } catch {
        }
      } catch (k) {
        w.value = k instanceof Error ? k.message : "Failed to load environment logs";
      } finally {
        i.value = !1;
      }
    }
    return ie(b), (k, p) => (o(), n(G, null, [
      l(ue, null, {
        header: a(() => [
          l(me, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: p[0] || (p[0] = (z) => v.value = !0)
          })
        ]),
        content: a(() => [
          i.value ? (o(), y(we, {
            key: 0,
            message: "Loading environment logs..."
          })) : w.value ? (o(), y(ke, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            r.value.length > 0 ? (o(), y(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(r.value.length) + " entries • " + d(H.value) + " errors • " + d(q.value) + " warnings • " + d(T.value) + " info • " + d(x.value) + " debug ", 1)
              ]),
              _: 1
            })) : m("", !0),
            l(ft, {
              "active-levels": g.value,
              onToggle: $,
              onClear: D
            }, null, 8, ["active-levels"]),
            S.value.length > 0 ? (o(), y(gt, { key: 1 }, {
              default: a(() => [
                (o(!0), n(G, null, X(L.value, (z, F) => (o(), y(ht, {
                  key: `${z.timestamp}-${F}`,
                  level: z.level,
                  timestamp: C(z.timestamp),
                  message: z.message,
                  context: _(z.context)
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : m("", !0),
            V.value ? (o(), n("div", $l, [
              l(U, {
                variant: "secondary",
                onClick: R
              }, {
                default: a(() => [
                  f(" Load More (" + d(S.value.length - u.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : m("", !0),
            r.value.length > 0 && S.value.length === 0 ? (o(), y(ge, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : m("", !0),
            r.value.length === 0 ? (o(), y(ge, {
              key: 4,
              icon: "📝",
              message: "No environment logs available"
            })) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: v.value,
        title: "About Environment Logs",
        onClose: p[2] || (p[2] = (z) => v.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            p[3] || (p[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, d(h.value), 1),
            p[4] || (p[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          p[5] || (p[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            f(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            f(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1)),
          p[6] || (p[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          l(U, {
            variant: "primary",
            onClick: p[1] || (p[1] = (z) => v.value = !1)
          }, {
            default: a(() => [...p[7] || (p[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cl = /* @__PURE__ */ W(xl, [["__scopeId", "data-v-456b4c97"]]), Il = { class: "env-title" }, Sl = {
  key: 0,
  class: "current-badge"
}, El = {
  key: 0,
  class: "branch-info"
}, Ll = /* @__PURE__ */ O({
  __name: "EnvironmentListItem",
  props: {
    environmentName: {},
    isCurrent: { type: Boolean, default: !1 },
    currentBranch: { default: null },
    workflowCount: { default: 0 },
    nodeCount: { default: 0 },
    modelCount: { default: 0 },
    lastUsed: { default: void 0 },
    showCurrentLabel: { type: Boolean, default: !0 },
    showLastUsed: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (c, s) => (o(), y(le, {
      status: e.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        f(d(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        t("div", Il, [
          t("span", null, d(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), n("span", Sl, "CURRENT")) : m("", !0)
        ])
      ]),
      subtitle: a(() => [
        e.currentBranch ? (o(), n("span", El, [
          s[0] || (s[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + d(e.currentBranch), 1)
        ])) : m("", !0)
      ]),
      details: a(() => [
        l(J, {
          label: "Workflows:",
          value: String(e.workflowCount)
        }, null, 8, ["value"]),
        l(J, {
          label: "Nodes:",
          value: String(e.nodeCount)
        }, null, 8, ["value"]),
        l(J, {
          label: "Models:",
          value: String(e.modelCount)
        }, null, 8, ["value"]),
        e.lastUsed && e.showLastUsed ? (o(), y(J, {
          key: 0,
          label: "Last used:",
          value: e.lastUsed
        }, null, 8, ["value"])) : m("", !0)
      ]),
      actions: a(() => [
        Z(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), zl = /* @__PURE__ */ W(Ll, [["__scopeId", "data-v-5238e57c"]]), Ml = {
  key: 0,
  class: "create-form"
}, Nl = { class: "create-form__header" }, Rl = { class: "create-form__body" }, Ul = { class: "create-form__actions" }, Dl = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Bl = /* @__PURE__ */ O({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(e, { emit: c }) {
    const s = c, { getEnvironments: r } = ve(), i = E([]), w = E(!1), v = E(null), g = E(""), u = E(!1), h = E(!1), S = E(""), L = B(
      () => i.value.find((R) => R.is_current)
    ), V = B(() => {
      if (!g.value.trim()) return i.value;
      const R = g.value.toLowerCase();
      return i.value.filter(
        (C) => {
          var _;
          return C.name.toLowerCase().includes(R) || ((_ = C.current_branch) == null ? void 0 : _.toLowerCase().includes(R));
        }
      );
    });
    function H(R) {
      if (!R) return "";
      try {
        const C = new Date(R), b = (/* @__PURE__ */ new Date()).getTime() - C.getTime(), k = Math.floor(b / 6e4), p = Math.floor(b / 36e5), z = Math.floor(b / 864e5);
        return k < 1 ? "just now" : k < 60 ? `${k} ${k === 1 ? "minute" : "minutes"} ago` : p < 24 ? `${p} ${p === 1 ? "hour" : "hours"} ago` : z < 30 ? `${z} ${z === 1 ? "day" : "days"} ago` : C.toLocaleDateString();
      } catch {
        return R;
      }
    }
    function q() {
      const R = S.value.trim();
      R && (s("create", R), S.value = "", h.value = !1);
    }
    function T() {
      S.value = "", h.value = !1;
    }
    function x(R) {
      s("viewDetails", R);
    }
    function $(R) {
      confirm(`Delete environment "${R}"?

This action cannot be undone.`) && s("delete", R);
    }
    async function D() {
      w.value = !0, v.value = null;
      try {
        i.value = await r();
      } catch (R) {
        v.value = R instanceof Error ? R.message : "Failed to load environments";
      } finally {
        w.value = !1;
      }
    }
    return ie(D), (R, C) => {
      const _ = $t("SectionGroup");
      return o(), n(G, null, [
        l(ue, null, {
          header: a(() => [
            l(me, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: C[1] || (C[1] = (b) => u.value = !0)
            }, {
              actions: a(() => [
                l(U, {
                  variant: "ghost",
                  size: "sm",
                  onClick: C[0] || (C[0] = (b) => h.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...C[7] || (C[7] = [
                    t("svg", {
                      width: "14",
                      height: "14",
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
                  ])]),
                  _: 1
                }),
                l(U, {
                  variant: "ghost",
                  size: "sm",
                  onClick: D,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...C[8] || (C[8] = [
                    t("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            l(Re, {
              modelValue: g.value,
              "onUpdate:modelValue": C[2] || (C[2] = (b) => g.value = b),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            w.value ? (o(), y(we, {
              key: 0,
              message: "Loading environments..."
            })) : v.value ? (o(), y(ke, {
              key: 1,
              message: v.value,
              retry: !0,
              onRetry: D
            }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
              h.value ? (o(), n("div", Ml, [
                t("div", Nl, [
                  C[10] || (C[10] = t("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  l(U, {
                    variant: "ghost",
                    size: "xs",
                    onClick: T
                  }, {
                    default: a(() => [...C[9] || (C[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                t("div", Rl, [
                  l(ze, {
                    modelValue: S.value,
                    "onUpdate:modelValue": C[3] || (C[3] = (b) => S.value = b),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      be(q, ["enter"]),
                      be(T, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  t("div", Ul, [
                    l(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: q,
                      disabled: !S.value.trim()
                    }, {
                      default: a(() => [...C[11] || (C[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: T
                    }, {
                      default: a(() => [...C[12] || (C[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : m("", !0),
              i.value.length ? (o(), y(xe, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  f(" Total: " + d(i.value.length) + " " + d(i.value.length === 1 ? "environment" : "environments") + " ", 1),
                  L.value ? (o(), n(G, { key: 0 }, [
                    C[13] || (C[13] = f(" • Current: ", -1)),
                    t("strong", null, d(L.value.name), 1)
                  ], 64)) : m("", !0)
                ]),
                _: 1
              })) : m("", !0),
              V.value.length ? (o(), y(_, {
                key: 2,
                title: "ENVIRONMENTS",
                count: V.value.length
              }, {
                default: a(() => [
                  (o(!0), n(G, null, X(V.value, (b) => (o(), y(zl, {
                    key: b.name,
                    "environment-name": b.name,
                    "is-current": b.is_current,
                    "current-branch": b.current_branch,
                    "workflow-count": b.workflow_count,
                    "node-count": b.node_count,
                    "model-count": b.model_count,
                    "last-used": H(b.last_used),
                    "show-last-used": !!b.last_used
                  }, {
                    actions: a(() => [
                      b.is_current ? m("", !0) : (o(), y(U, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (k) => R.$emit("switch", b.name)
                      }, {
                        default: a(() => [...C[14] || (C[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      l(U, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (k) => x(b.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...C[15] || (C[15] = [
                          t("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            t("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            t("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !b.is_current && i.value.length > 1 ? (o(), y(U, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (k) => $(b.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", Dl, [...C[16] || (C[16] = [
                            t("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : m("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : m("", !0),
              V.value.length ? m("", !0) : (o(), y(ge, {
                key: 3,
                icon: "🌍",
                message: g.value ? `No environments match '${g.value}'` : "No environments found. Create one to get started!"
              }, ct({ _: 2 }, [
                g.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    l(U, {
                      variant: "primary",
                      onClick: C[4] || (C[4] = (b) => h.value = !0)
                    }, {
                      default: a(() => [...C[17] || (C[17] = [
                        f(" Create Environment ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "0"
                }
              ]), 1032, ["message"]))
            ], 64))
          ]),
          _: 1
        }),
        l(Ce, {
          show: u.value,
          title: "About Environments",
          onClose: C[6] || (C[6] = (b) => u.value = !1)
        }, {
          content: a(() => [...C[18] || (C[18] = [
            t("p", null, [
              t("strong", null, "Environments"),
              f(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
            ], -1),
            t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
              t("strong", null, "Use cases:")
            ], -1),
            t("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
              t("li", null, "Separate production and development workflows"),
              t("li", null, "Test different node configurations"),
              t("li", null, "Experiment with new models safely"),
              t("li", null, "Maintain multiple project versions")
            ], -1)
          ])]),
          actions: a(() => [
            l(U, {
              variant: "secondary",
              onClick: C[5] || (C[5] = (b) => u.value = !1)
            }, {
              default: a(() => [...C[19] || (C[19] = [
                f(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Vl = /* @__PURE__ */ W(Bl, [["__scopeId", "data-v-97d6527d"]]), Tl = { class: "file-path" }, Ol = { class: "file-path-text" }, Wl = ["title"], Fl = /* @__PURE__ */ O({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const c = e, s = E(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(c.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (i) {
        console.error("Failed to copy:", i);
      }
    }
    return (i, w) => (o(), n("div", Tl, [
      w[0] || (w[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", Ol, d(e.path), 1),
      e.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: r
      }, d(s.value ? "✓" : "📋"), 9, Wl)) : m("", !0)
    ]));
  }
}), Al = /* @__PURE__ */ W(Fl, [["__scopeId", "data-v-f0982173"]]), Pl = { class: "output-path-input" }, Gl = { class: "export-actions" }, Hl = {
  key: 1,
  class: "export-warning"
}, Kl = /* @__PURE__ */ O({
  __name: "ExportSection",
  setup(e) {
    const { exportEnv: c } = ve(), s = E(""), r = E(!1), i = E(null), w = E(!1);
    async function v() {
      r.value = !0, i.value = null;
      try {
        const u = await c(s.value || void 0);
        i.value = u;
      } catch (u) {
        i.value = {
          status: "error",
          message: u instanceof Error ? u.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function g() {
      var u;
      if ((u = i.value) != null && u.path)
        try {
          await navigator.clipboard.writeText(i.value.path);
        } catch (h) {
          console.error("Failed to copy path:", h);
        }
    }
    return (u, h) => (o(), n(G, null, [
      l(ue, null, {
        header: a(() => [
          l(me, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              l(U, {
                variant: "ghost",
                size: "sm",
                onClick: h[0] || (h[0] = (S) => w.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...h[5] || (h[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    t("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          l(se, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              l(le, { status: "synced" }, {
                icon: a(() => [...h[6] || (h[6] = [
                  f("📦", -1)
                ])]),
                title: a(() => [...h[7] || (h[7] = [
                  f("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...h[8] || (h[8] = [
                  f(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  l(J, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  l(J, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  l(J, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  l(J, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(se, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              l(le, { status: "synced" }, {
                icon: a(() => [...h[9] || (h[9] = [
                  f("📁", -1)
                ])]),
                title: a(() => [...h[10] || (h[10] = [
                  f("Output Destination", -1)
                ])]),
                subtitle: a(() => [...h[11] || (h[11] = [
                  f(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  t("div", Pl, [
                    l(ze, {
                      modelValue: s.value,
                      "onUpdate:modelValue": h[1] || (h[1] = (S) => s.value = S),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(se, { title: "EXPORT" }, {
            default: a(() => [
              t("div", Gl, [
                l(U, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: v
                }, {
                  default: a(() => [
                    h[12] || (h[12] = t("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      t("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    f(" " + d(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), y(U, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: h[2] || (h[2] = (S) => s.value = "")
                }, {
                  default: a(() => [...h[13] || (h[13] = [
                    f(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : m("", !0)
              ])
            ]),
            _: 1
          }),
          i.value ? (o(), y(se, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              l(le, {
                status: i.value.status === "success" ? "synced" : "broken"
              }, ct({
                icon: a(() => [
                  f(d(i.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  f(d(i.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  f(d(i.value.status === "success" ? "Your environment has been exported" : i.value.message), 1)
                ]),
                _: 2
              }, [
                i.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    l(J, { label: "Saved to:" }, {
                      default: a(() => [
                        l(Al, {
                          path: i.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    i.value.models_without_sources !== void 0 ? (o(), y(J, {
                      key: 0,
                      label: "Models without sources:",
                      value: i.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : m("", !0),
                    i.value.models_without_sources && i.value.models_without_sources > 0 ? (o(), n("div", Hl, [...h[14] || (h[14] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : m("", !0)
                  ]),
                  key: "0"
                } : void 0,
                i.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: g
                    }, {
                      default: a(() => [...h[15] || (h[15] = [
                        f(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    l(U, {
                      variant: "ghost",
                      size: "sm",
                      onClick: h[3] || (h[3] = (S) => i.value = null)
                    }, {
                      default: a(() => [...h[16] || (h[16] = [
                        f(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : m("", !0)
        ]),
        _: 1
      }),
      l(Ce, {
        show: w.value,
        title: "About Environment Export",
        onClose: h[4] || (h[4] = (S) => w.value = !1)
      }, {
        content: a(() => [...h[17] || (h[17] = [
          t("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          t("ul", null, [
            t("li", null, "Shared with collaborators"),
            t("li", null, "Backed up for safekeeping"),
            t("li", null, "Imported into other ComfyGit workspaces"),
            t("li", null, "Version controlled separately")
          ], -1),
          t("p", null, [
            t("strong", null, "Note:"),
            f(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jl = /* @__PURE__ */ W(Kl, [["__scopeId", "data-v-1777a9d5"]]), ql = { class: "file-input-wrapper" }, Yl = ["accept", "multiple", "disabled"], Jl = /* @__PURE__ */ O({
  __name: "FileInput",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    variant: { default: "primary" },
    size: { default: "sm" },
    label: { default: "Choose File" }
  },
  emits: ["change"],
  setup(e, { expose: c, emit: s }) {
    const r = s, i = E(null);
    function w() {
      var g;
      (g = i.value) == null || g.click();
    }
    function v(g) {
      const u = g.target;
      u.files && u.files.length > 0 && (r("change", u.files), u.value = "");
    }
    return c({
      triggerInput: w
    }), (g, u) => (o(), n("div", ql, [
      t("input", {
        ref_key: "fileInputRef",
        ref: i,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, Yl),
      l(U, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: w
      }, {
        default: a(() => [
          Z(g.$slots, "default", {}, () => [
            u[0] || (u[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            f(" " + d(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Xl = /* @__PURE__ */ W(Jl, [["__scopeId", "data-v-cd192091"]]), Zl = {
  key: 0,
  class: "drop-zone-empty"
}, Ql = { class: "drop-zone-text" }, ei = { class: "drop-zone-primary" }, ti = { class: "drop-zone-secondary" }, oi = { class: "drop-zone-actions" }, ai = {
  key: 1,
  class: "drop-zone-file"
}, si = { class: "file-info" }, ni = { class: "file-details" }, li = { class: "file-name" }, ii = { class: "file-size" }, ri = /* @__PURE__ */ O({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: c }) {
    const s = c, r = E(!1), i = E(null), w = E(0), v = B(() => i.value !== null), g = B(() => {
      var x;
      return ((x = i.value) == null ? void 0 : x.name) || "";
    }), u = B(() => {
      if (!i.value) return "";
      const x = i.value.size;
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function h(x) {
      var $;
      w.value++, ($ = x.dataTransfer) != null && $.types.includes("Files") && (r.value = !0);
    }
    function S(x) {
      x.dataTransfer && (x.dataTransfer.dropEffect = "copy");
    }
    function L() {
      w.value--, w.value === 0 && (r.value = !1);
    }
    function V(x) {
      var D;
      w.value = 0, r.value = !1;
      const $ = (D = x.dataTransfer) == null ? void 0 : D.files;
      $ && $.length > 0 && q($[0]);
    }
    function H(x) {
      x.length > 0 && q(x[0]);
    }
    function q(x) {
      i.value = x, s("fileSelected", x);
    }
    function T() {
      i.value = null, s("clear");
    }
    return (x, $) => (o(), n("div", {
      class: K(["file-drop-zone", { "drop-active": r.value, "has-file": v.value }]),
      onDragenter: pe(h, ["prevent"]),
      onDragover: pe(S, ["prevent"]),
      onDragleave: pe(L, ["prevent"]),
      onDrop: pe(V, ["prevent"])
    }, [
      v.value ? (o(), n("div", ai, [
        t("div", si, [
          $[1] || ($[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", ni, [
            t("div", li, d(g.value), 1),
            t("div", ii, d(u.value), 1)
          ])
        ]),
        l(U, {
          variant: "ghost",
          size: "xs",
          onClick: T,
          title: "Remove file"
        }, {
          default: a(() => [...$[2] || ($[2] = [
            t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (o(), n("div", Zl, [
        $[0] || ($[0] = t("div", { class: "drop-zone-icon" }, [
          t("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            t("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        t("div", Ql, [
          t("p", ei, d(e.primaryText), 1),
          t("p", ti, d(e.secondaryText), 1)
        ]),
        t("div", oi, [
          l(Xl, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "md",
            onChange: H
          }, {
            default: a(() => [
              f(d(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), ci = /* @__PURE__ */ W(ri, [["__scopeId", "data-v-e00abbca"]]), di = { class: "import-preview" }, ui = { class: "preview-header" }, mi = {
  key: 0,
  class: "source-env"
}, vi = { class: "preview-content" }, fi = { class: "preview-section" }, gi = { class: "section-header" }, hi = { class: "section-info" }, pi = { class: "section-count" }, yi = {
  key: 0,
  class: "item-list"
}, bi = { class: "item-name" }, wi = {
  key: 0,
  class: "item-more"
}, ki = { class: "preview-section" }, _i = { class: "section-header" }, $i = { class: "section-info" }, xi = { class: "section-count" }, Ci = {
  key: 0,
  class: "item-list"
}, Ii = { class: "item-details" }, Si = { class: "item-name" }, Ei = { class: "item-meta" }, Li = {
  key: 0,
  class: "item-more"
}, zi = { class: "preview-section" }, Mi = { class: "section-header" }, Ni = { class: "section-info" }, Ri = { class: "section-count" }, Ui = {
  key: 0,
  class: "item-list"
}, Di = { class: "item-name" }, Bi = {
  key: 0,
  class: "item-more"
}, Vi = {
  key: 0,
  class: "preview-section"
}, Ti = { class: "git-info" }, Oi = /* @__PURE__ */ O({
  __name: "ImportPreview",
  props: {
    sourceEnvironment: {},
    workflows: { default: () => [] },
    models: { default: () => [] },
    nodes: { default: () => [] },
    gitBranch: {},
    gitCommit: {},
    maxPreviewItems: { default: 5 }
  },
  setup(e) {
    const c = e, s = B(() => c.workflows.length), r = B(() => c.models.length), i = B(() => c.nodes.length);
    function w(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, g) => (o(), n("div", di, [
      t("div", ui, [
        l(Le, null, {
          default: a(() => [...g[0] || (g[0] = [
            f("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), n("span", mi, [
          g[1] || (g[1] = f(" From: ", -1)),
          l(Me, null, {
            default: a(() => [
              f(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : m("", !0)
      ]),
      t("div", vi, [
        t("div", fi, [
          t("div", gi, [
            g[3] || (g[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", hi, [
              g[2] || (g[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", pi, d(s.value) + " file" + d(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), n("div", yi, [
            (o(!0), n(G, null, X(e.workflows.slice(0, e.maxPreviewItems), (u) => (o(), n("div", {
              key: u,
              class: "preview-item"
            }, [
              g[4] || (g[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", bi, d(u), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), n("div", wi, " +" + d(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        t("div", ki, [
          t("div", _i, [
            g[6] || (g[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", $i, [
              g[5] || (g[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", xi, d(r.value) + " file" + d(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), n("div", Ci, [
            (o(!0), n(G, null, X(e.models.slice(0, e.maxPreviewItems), (u) => (o(), n("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              g[7] || (g[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Ii, [
                t("span", Si, d(u.filename), 1),
                t("span", Ei, d(w(u.size)) + " • " + d(u.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), n("div", Li, " +" + d(e.models.length - e.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        t("div", zi, [
          t("div", Mi, [
            g[9] || (g[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", Ni, [
              g[8] || (g[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", Ri, d(i.value) + " node" + d(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), n("div", Ui, [
            (o(!0), n(G, null, X(e.nodes.slice(0, e.maxPreviewItems), (u) => (o(), n("div", {
              key: u,
              class: "preview-item"
            }, [
              g[10] || (g[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Di, d(u), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), n("div", Bi, " +" + d(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), n("div", Vi, [
          g[11] || (g[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", Ti, [
            e.gitBranch ? (o(), y(J, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                l(Me, null, {
                  default: a(() => [
                    f(d(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : m("", !0),
            e.gitCommit ? (o(), y(J, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                l(mt, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : m("", !0)
          ])
        ])) : m("", !0)
      ])
    ]));
  }
}), Wi = /* @__PURE__ */ W(Oi, [["__scopeId", "data-v-182fe113"]]), Fi = { class: "import-options" }, Ai = { class: "options-container" }, Pi = { class: "option-section" }, Gi = { class: "conflict-options" }, Hi = ["value", "checked", "onChange"], Ki = { class: "conflict-content" }, ji = { class: "conflict-label" }, qi = { class: "conflict-description" }, Yi = { class: "option-section" }, Ji = { class: "component-toggles" }, Xi = /* @__PURE__ */ O({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(e, { emit: c }) {
    const s = c, r = [
      {
        value: "overwrite",
        label: "Overwrite Existing",
        description: "Replace existing workflows and models"
      },
      {
        value: "keep",
        label: "Keep Existing",
        description: "Skip files that already exist"
      },
      {
        value: "rename",
        label: "Rename New",
        description: "Add suffix to imported files"
      }
    ];
    return (i, w) => (o(), n("div", Fi, [
      l(Le, null, {
        default: a(() => [...w[4] || (w[4] = [
          f("Import Options", -1)
        ])]),
        _: 1
      }),
      t("div", Ai, [
        t("div", Pi, [
          l(tt, null, {
            default: a(() => [...w[5] || (w[5] = [
              f("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          t("div", Gi, [
            (o(), n(G, null, X(r, (v) => t("label", {
              key: v.value,
              class: K(["conflict-option", { active: e.conflictMode === v.value }])
            }, [
              t("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: e.conflictMode === v.value,
                onChange: (g) => s("update:conflictMode", v.value)
              }, null, 40, Hi),
              t("div", Ki, [
                t("span", ji, d(v.label), 1),
                t("span", qi, d(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", Yi, [
          l(tt, null, {
            default: a(() => [...w[6] || (w[6] = [
              f("Components to Import", -1)
            ])]),
            _: 1
          }),
          t("div", Ji, [
            l(oe, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                l(ce, {
                  "model-value": e.includeWorkflows,
                  "onUpdate:modelValue": w[0] || (w[0] = (v) => s("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(oe, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                l(ce, {
                  "model-value": e.includeModels,
                  "onUpdate:modelValue": w[1] || (w[1] = (v) => s("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(oe, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                l(ce, {
                  "model-value": e.includeNodes,
                  "onUpdate:modelValue": w[2] || (w[2] = (v) => s("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(oe, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                l(ce, {
                  "model-value": e.includeGitHistory,
                  "onUpdate:modelValue": w[3] || (w[3] = (v) => s("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Zi = /* @__PURE__ */ W(Xi, [["__scopeId", "data-v-0ec212b0"]]), Qi = {
  key: 0,
  class: "import-empty"
}, er = { class: "import-help" }, tr = {
  key: 1,
  class: "import-configure"
}, or = { class: "selected-file-bar" }, ar = { class: "file-bar-content" }, sr = { class: "file-bar-info" }, nr = { class: "file-bar-name" }, lr = { class: "file-bar-size" }, ir = { class: "import-actions" }, rr = {
  key: 2,
  class: "import-progress"
}, cr = { class: "progress-content" }, dr = { class: "progress-info" }, ur = { class: "progress-title" }, mr = { class: "progress-detail" }, vr = { class: "progress-bar" }, fr = { class: "progress-status" }, gr = {
  key: 3,
  class: "import-complete"
}, hr = { class: "complete-message" }, pr = { class: "complete-title" }, yr = { class: "complete-details" }, br = { class: "complete-actions" }, wr = /* @__PURE__ */ O({
  __name: "ImportSection",
  setup(e) {
    const c = E(null), s = E(!1), r = E(!1), i = E(!1), w = E(""), v = E({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), g = E({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), u = E({
      sourceEnvironment: "production-env",
      workflows: [
        "workflow-1.json",
        "workflow-2.json",
        "complex-workflow.json"
      ],
      models: [
        { filename: "sd_xl_base_1.0.safetensors", size: 6938025472, type: "Stable-diffusion" },
        { filename: "controlnet_canny.safetensors", size: 1445075712, type: "ControlNet" },
        { filename: "vae.safetensors", size: 334643200, type: "VAE" }
      ],
      nodes: [
        "comfyui-impact-pack",
        "comfyui-controlnet-aux",
        "comfyui-custom-scripts"
      ],
      gitBranch: "main",
      gitCommit: "a1b2c3d"
    }), h = B(() => v.value.includeWorkflows || v.value.includeModels || v.value.includeNodes || v.value.includeGitHistory);
    function S(T) {
      c.value = T;
    }
    function L() {
      c.value = null, r.value = !1, i.value = !1, w.value = "";
    }
    function V() {
      L(), s.value = !1, g.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function H() {
      if (c.value) {
        s.value = !0, r.value = !1;
        try {
          const T = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${u.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${u.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${u.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const x of T)
            g.value = x, await new Promise(($) => setTimeout($, 800));
          g.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((x) => setTimeout(x, 500)), i.value = !0, w.value = `Successfully imported ${u.value.workflows.length} workflows, ${u.value.models.length} models, and ${u.value.nodes.length} custom nodes.`;
        } catch (T) {
          i.value = !1, w.value = T instanceof Error ? T.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, r.value = !0;
        }
      }
    }
    function q(T) {
      return T < 1024 ? `${T} B` : T < 1024 * 1024 ? `${(T / 1024).toFixed(1)} KB` : T < 1024 * 1024 * 1024 ? `${(T / (1024 * 1024)).toFixed(1)} MB` : `${(T / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (T, x) => (o(), y(ue, null, {
      header: a(() => [
        l(me, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !c.value && !s.value ? (o(), n("div", Qi, [
          l(ci, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: S
          }),
          t("div", er, [
            l(Le, null, {
              default: a(() => [...x[5] || (x[5] = [
                f("How to Import", -1)
              ])]),
              _: 1
            }),
            x[6] || (x[6] = t("div", { class: "help-content" }, [
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "1"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Select Export File"),
                  t("div", { class: "help-description" }, " Choose a ComfyGit environment export file created with the EXPORT feature ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "2"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Review Preview"),
                  t("div", { class: "help-description" }, " Check what workflows, models, and nodes will be imported ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "3"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Configure Options"),
                  t("div", { class: "help-description" }, " Choose how to handle conflicts and which components to import ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "4"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Import"),
                  t("div", { class: "help-description" }, " Start the import process and wait for completion ")
                ])
              ])
            ], -1))
          ])
        ])) : c.value && !s.value && !r.value ? (o(), n("div", tr, [
          t("div", or, [
            t("div", ar, [
              x[7] || (x[7] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", sr, [
                t("div", nr, d(c.value.name), 1),
                t("div", lr, d(q(c.value.size)), 1)
              ])
            ]),
            l(U, {
              variant: "ghost",
              size: "sm",
              onClick: L
            }, {
              default: a(() => [...x[8] || (x[8] = [
                f(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          l(Wi, {
            "source-environment": u.value.sourceEnvironment,
            workflows: u.value.workflows,
            models: u.value.models,
            nodes: u.value.nodes,
            "git-branch": u.value.gitBranch,
            "git-commit": u.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          l(Zi, {
            "conflict-mode": v.value.conflictMode,
            "onUpdate:conflictMode": x[0] || (x[0] = ($) => v.value.conflictMode = $),
            "include-workflows": v.value.includeWorkflows,
            "onUpdate:includeWorkflows": x[1] || (x[1] = ($) => v.value.includeWorkflows = $),
            "include-models": v.value.includeModels,
            "onUpdate:includeModels": x[2] || (x[2] = ($) => v.value.includeModels = $),
            "include-nodes": v.value.includeNodes,
            "onUpdate:includeNodes": x[3] || (x[3] = ($) => v.value.includeNodes = $),
            "include-git-history": v.value.includeGitHistory,
            "onUpdate:includeGitHistory": x[4] || (x[4] = ($) => v.value.includeGitHistory = $)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !v.value.includeModels && u.value.models.length > 0 ? (o(), y(We, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${u.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : m("", !0),
          t("div", ir, [
            l(U, {
              variant: "primary",
              size: "md",
              disabled: !h.value,
              onClick: H
            }, {
              default: a(() => [...x[9] || (x[9] = [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  t("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                f(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            l(U, {
              variant: "secondary",
              size: "md",
              onClick: L
            }, {
              default: a(() => [...x[10] || (x[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", rr, [
          t("div", cr, [
            x[11] || (x[11] = t("div", { class: "progress-icon" }, [
              t("div", { class: "spinner" })
            ], -1)),
            t("div", dr, [
              t("div", ur, d(g.value.message), 1),
              t("div", mr, d(g.value.detail), 1)
            ])
          ]),
          t("div", vr, [
            t("div", {
              class: "progress-bar-fill",
              style: Ae({ width: `${g.value.percent}%` })
            }, null, 4)
          ]),
          t("div", fr, d(g.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), n("div", gr, [
          t("div", {
            class: K(["complete-icon", i.value ? "success" : "error"])
          }, d(i.value ? "✓" : "✕"), 3),
          t("div", hr, [
            t("div", pr, d(i.value ? "Import Successful" : "Import Failed"), 1),
            t("div", yr, d(w.value), 1)
          ]),
          t("div", br, [
            l(U, {
              variant: "primary",
              size: "md",
              onClick: V
            }, {
              default: a(() => [...x[12] || (x[12] = [
                f(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : m("", !0)
      ]),
      _: 1
    }));
  }
}), kr = /* @__PURE__ */ W(wr, [["__scopeId", "data-v-18e18eb5"]]), _r = { class: "header-info" }, $r = { class: "commit-hash" }, xr = {
  key: 0,
  class: "commit-refs"
}, Cr = { class: "commit-message" }, Ir = { class: "commit-date" }, Sr = {
  key: 0,
  class: "loading"
}, Er = {
  key: 1,
  class: "changes-section"
}, Lr = { class: "stats-row" }, zr = { class: "stat" }, Mr = { class: "stat insertions" }, Nr = { class: "stat deletions" }, Rr = {
  key: 0,
  class: "change-group"
}, Ur = {
  key: 1,
  class: "change-group"
}, Dr = {
  key: 0,
  class: "version"
}, Br = {
  key: 2,
  class: "change-group"
}, Vr = { class: "change-item" }, Tr = /* @__PURE__ */ O({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const c = e, { getCommitDetail: s } = ve(), r = E(null), i = E(!0), w = B(() => {
      if (!r.value) return !1;
      const g = r.value.changes.workflows;
      return g.added.length > 0 || g.modified.length > 0 || g.deleted.length > 0;
    }), v = B(() => {
      if (!r.value) return !1;
      const g = r.value.changes.nodes;
      return g.added.length > 0 || g.removed.length > 0;
    });
    return ie(async () => {
      try {
        r.value = await s(c.commit.hash);
      } finally {
        i.value = !1;
      }
    }), (g, u) => (o(), y(Pe, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (h) => g.$emit("close"))
    }, {
      header: a(() => {
        var h, S, L, V;
        return [
          t("div", _r, [
            u[4] || (u[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", $r, d(((h = r.value) == null ? void 0 : h.short_hash) || e.commit.short_hash || ((S = e.commit.hash) == null ? void 0 : S.slice(0, 7))), 1),
            (V = (L = r.value) == null ? void 0 : L.refs) != null && V.length ? (o(), n("span", xr, [
              (o(!0), n(G, null, X(r.value.refs, (H) => (o(), n("span", {
                key: H,
                class: "ref-badge"
              }, d(H), 1))), 128))
            ])) : m("", !0)
          ]),
          l(de, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (H) => g.$emit("close"))
          }, {
            default: a(() => [...u[5] || (u[5] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: a(() => {
        var h, S;
        return [
          t("div", Cr, d(((h = r.value) == null ? void 0 : h.message) || e.commit.message), 1),
          t("div", Ir, d(((S = r.value) == null ? void 0 : S.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          i.value ? (o(), n("div", Sr, "Loading details...")) : r.value ? (o(), n("div", Er, [
            t("div", Lr, [
              t("span", zr, d(r.value.stats.files_changed) + " files", 1),
              t("span", Mr, "+" + d(r.value.stats.insertions), 1),
              t("span", Nr, "-" + d(r.value.stats.deletions), 1)
            ]),
            w.value ? (o(), n("div", Rr, [
              l($e, { variant: "section" }, {
                default: a(() => [...u[6] || (u[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, X(r.value.changes.workflows.added, (L) => (o(), n("div", {
                key: "add-" + L,
                class: "change-item added"
              }, [
                u[7] || (u[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(L), 1)
              ]))), 128)),
              (o(!0), n(G, null, X(r.value.changes.workflows.modified, (L) => (o(), n("div", {
                key: "mod-" + L,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(L), 1)
              ]))), 128)),
              (o(!0), n(G, null, X(r.value.changes.workflows.deleted, (L) => (o(), n("div", {
                key: "del-" + L,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(L), 1)
              ]))), 128))
            ])) : m("", !0),
            v.value ? (o(), n("div", Ur, [
              l($e, { variant: "section" }, {
                default: a(() => [...u[10] || (u[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, X(r.value.changes.nodes.added, (L) => (o(), n("div", {
                key: "add-" + L.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(L.name), 1),
                L.version ? (o(), n("span", Dr, "(" + d(L.version) + ")", 1)) : m("", !0)
              ]))), 128)),
              (o(!0), n(G, null, X(r.value.changes.nodes.removed, (L) => (o(), n("div", {
                key: "rem-" + L.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(L.name), 1)
              ]))), 128))
            ])) : m("", !0),
            r.value.changes.models.resolved > 0 ? (o(), n("div", Br, [
              l($e, { variant: "section" }, {
                default: a(() => [...u[13] || (u[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", Vr, [
                u[14] || (u[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : m("", !0)
          ])) : m("", !0)
        ];
      }),
      footer: a(() => [
        l(de, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (h) => g.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...u[15] || (u[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        l(de, {
          variant: "primary",
          onClick: u[2] || (u[2] = (h) => g.$emit("checkout", e.commit))
        }, {
          default: a(() => [...u[16] || (u[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Or = /* @__PURE__ */ W(Tr, [["__scopeId", "data-v-d256ff6d"]]), Wr = { class: "dialog-message" }, Fr = {
  key: 0,
  class: "dialog-details"
}, Ar = {
  key: 1,
  class: "dialog-warning"
}, Pr = /* @__PURE__ */ O({
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
    return (c, s) => (o(), y(Pe, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => c.$emit("cancel"))
    }, {
      body: a(() => [
        t("p", Wr, d(e.message), 1),
        e.details && e.details.length ? (o(), n("div", Fr, [
          (o(!0), n(G, null, X(e.details, (r, i) => (o(), n("div", {
            key: i,
            class: "detail-item"
          }, " • " + d(r), 1))), 128))
        ])) : m("", !0),
        e.warning ? (o(), n("p", Ar, [
          s[4] || (s[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + d(e.warning), 1)
        ])) : m("", !0)
      ]),
      footer: a(() => [
        l(de, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => c.$emit("cancel"))
        }, {
          default: a(() => [
            f(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), y(de, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => c.$emit("secondary"))
        }, {
          default: a(() => [
            f(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : m("", !0),
        l(de, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => c.$emit("confirm"))
        }, {
          default: a(() => [
            f(d(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gr = /* @__PURE__ */ W(Pr, [["__scopeId", "data-v-3670b9f5"]]), Hr = { class: "comfygit-panel" }, Kr = { class: "panel-header" }, jr = { class: "header-left" }, qr = {
  key: 0,
  class: "header-info"
}, Yr = { class: "header-actions" }, Jr = { class: "env-switcher" }, Xr = {
  key: 0,
  class: "header-info"
}, Zr = { class: "branch-name" }, Qr = { class: "panel-main" }, ec = { class: "sidebar" }, tc = { class: "sidebar-section" }, oc = { class: "sidebar-section" }, ac = { class: "sidebar-section" }, sc = { class: "content-area" }, nc = {
  key: 0,
  class: "error-message"
}, lc = {
  key: 1,
  class: "loading"
}, ic = { class: "dialog-content env-selector-dialog" }, rc = { class: "dialog-header" }, cc = { class: "dialog-body" }, dc = { class: "env-list" }, uc = { class: "env-info" }, mc = { class: "env-name-row" }, vc = { class: "env-indicator" }, fc = { class: "env-name" }, gc = {
  key: 0,
  class: "env-branch"
}, hc = {
  key: 1,
  class: "current-label"
}, pc = { class: "env-stats" }, yc = ["onClick"], bc = { class: "toast-container" }, wc = { class: "toast-icon" }, kc = { class: "toast-message" }, _c = /* @__PURE__ */ O({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: c }) {
    const s = c, {
      getStatus: r,
      getHistory: i,
      getBranches: w,
      checkout: v,
      createBranch: g,
      switchBranch: u,
      getEnvironments: h
    } = ve(), S = E(null), L = E([]), V = E([]), H = E([]), q = B(() => H.value.find((N) => N.is_current)), T = E(!1), x = E(null), $ = E(null), D = E(!1), R = E("status"), C = E("this-env");
    function _(N, I) {
      R.value = N, C.value = I;
    }
    function b(N) {
      const ae = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[N];
      ae && _(ae.view, ae.section);
    }
    function k() {
      _("branches", "this-env");
    }
    const p = E(null), z = E([]);
    let F = 0;
    function Q(N, I = "info", ae = 3e3) {
      const ne = ++F;
      return z.value.push({ id: ne, message: N, type: I }), ae > 0 && setTimeout(() => {
        z.value = z.value.filter((Ie) => Ie.id !== ne);
      }, ae), ne;
    }
    function A(N) {
      z.value = z.value.filter((I) => I.id !== N);
    }
    function M(N) {
      switch (N) {
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
    const j = B(() => {
      if (!S.value) return "neutral";
      const N = S.value.workflows, I = N.new.length > 0 || N.modified.length > 0 || N.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? I ? "warning" : "success" : "error";
    });
    B(() => S.value ? j.value === "success" ? "All synced" : j.value === "warning" ? "Uncommitted changes" : j.value === "error" ? "Not synced" : "" : "");
    async function re() {
      T.value = !0, x.value = null;
      try {
        const [N, I, ae, ne] = await Promise.all([
          r(),
          i(),
          w(),
          h()
        ]);
        S.value = N, L.value = I.commits, V.value = ae.branches, H.value = ne, s("statusUpdate", N);
      } catch (N) {
        x.value = N instanceof Error ? N.message : "Failed to load status", S.value = null, L.value = [], V.value = [];
      } finally {
        T.value = !1;
      }
    }
    function Ge(N) {
      $.value = N;
    }
    async function Be(N) {
      var ae;
      $.value = null;
      const I = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      p.value = {
        title: I ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: I ? "You have uncommitted changes that will be lost." : `Checkout commit ${N.short_hash || ((ae = N.hash) == null ? void 0 : ae.slice(0, 7))}?`,
        details: I ? P() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: I,
        onConfirm: async () => {
          var Y;
          p.value = null;
          const ne = Q(`Checking out ${N.short_hash || ((Y = N.hash) == null ? void 0 : Y.slice(0, 7))}...`, "info", 0), Ie = await v(N.hash, I);
          A(ne), Ie.status === "success" ? Q("Restarting ComfyUI...", "success") : Q(Ie.message || "Checkout failed", "error");
        }
      };
    }
    async function He(N) {
      const I = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      p.value = {
        title: I ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: I ? "You have uncommitted changes." : `Switch to branch "${N}"?`,
        details: I ? P() : void 0,
        warning: I ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          p.value = null;
          const ae = Q(`Switching to ${N}...`, "info", 0), ne = await u(N, I);
          A(ae), ne.status === "success" ? Q("Restarting ComfyUI...", "success") : Q(ne.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ke(N) {
      const I = Q(`Creating branch ${N}...`, "info", 0), ae = await g(N);
      A(I), ae.status === "success" ? (Q(`Branch "${N}" created`, "success"), await re()) : Q(ae.message || "Failed to create branch", "error");
    }
    async function je(N) {
      $.value = null;
      const I = prompt("Enter branch name:");
      if (I) {
        const ae = Q(`Creating branch ${I}...`, "info", 0), ne = await g(I, N.hash);
        A(ae), ne.status === "success" ? (Q(`Branch "${I}" created from ${N.short_hash}`, "success"), await re()) : Q(ne.message || "Failed to create branch", "error");
      }
    }
    async function Ve(N) {
      D.value = !1, Q("Environment switching not yet implemented", "warning");
    }
    async function qe(N) {
      const I = Q(`Creating environment "${N}"...`, "info", 0);
      A(I), Q("Environment creation not yet implemented", "warning");
    }
    async function Ye(N) {
      const I = Q(`Deleting environment "${N}"...`, "info", 0);
      A(I), Q("Environment deletion not yet implemented", "warning");
    }
    function Je(N) {
      Q(`Viewing details for "${N}"`, "info"), _("models-env", "this-env");
    }
    function P() {
      if (!S.value) return [];
      const N = [], I = S.value.workflows;
      return I.new.length && N.push(`${I.new.length} new workflow(s)`), I.modified.length && N.push(`${I.modified.length} modified workflow(s)`), I.deleted.length && N.push(`${I.deleted.length} deleted workflow(s)`), N;
    }
    return ie(re), (N, I) => {
      var ae, ne, Ie;
      return o(), n("div", Hr, [
        t("div", Kr, [
          t("div", jr, [
            I[20] || (I[20] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (o(), n("div", qr)) : m("", !0)
          ]),
          t("div", Yr, [
            t("button", {
              class: K(["icon-btn", { spinning: T.value }]),
              onClick: re,
              title: "Refresh"
            }, [...I[21] || (I[21] = [
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
              onClick: I[0] || (I[0] = (Y) => s("close")),
              title: "Close"
            }, [...I[22] || (I[22] = [
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
        t("div", Jr, [
          I[24] || (I[24] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          t("button", {
            class: "env-switcher-btn",
            onClick: I[1] || (I[1] = (Y) => D.value = !0)
          }, [
            S.value ? (o(), n("div", Xr, [
              t("span", null, d(((ae = q.value) == null ? void 0 : ae.name) || ((ne = S.value) == null ? void 0 : ne.environment) || "Loading..."), 1),
              t("span", Zr, "(" + d(S.value.branch || "detached") + ")", 1)
            ])) : m("", !0),
            I[23] || (I[23] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", Qr, [
          t("div", ec, [
            t("div", tc, [
              I[25] || (I[25] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "status" && C.value === "this-env" }]),
                onClick: I[2] || (I[2] = (Y) => _("status", "this-env"))
              }, " STATUS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "workflows" }]),
                onClick: I[3] || (I[3] = (Y) => _("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "models-env" }]),
                onClick: I[4] || (I[4] = (Y) => _("models-env", "this-env"))
              }, " MODELS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "branches" }]),
                onClick: I[5] || (I[5] = (Y) => _("branches", "this-env"))
              }, " BRANCHES ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "history" }]),
                onClick: I[6] || (I[6] = (Y) => _("history", "this-env"))
              }, " HISTORY ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "nodes" }]),
                onClick: I[7] || (I[7] = (Y) => _("nodes", "this-env"))
              }, " NODES ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "debug-env" }]),
                onClick: I[8] || (I[8] = (Y) => _("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            I[28] || (I[28] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", oc, [
              I[26] || (I[26] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "environments" }]),
                onClick: I[9] || (I[9] = (Y) => _("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "model-index" }]),
                onClick: I[10] || (I[10] = (Y) => _("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "settings" }]),
                onClick: I[11] || (I[11] = (Y) => _("settings", "all-envs"))
              }, " SETTINGS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "debug-workspace" }]),
                onClick: I[12] || (I[12] = (Y) => _("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            I[29] || (I[29] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", ac, [
              I[27] || (I[27] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "export" }]),
                onClick: I[13] || (I[13] = (Y) => _("export", "sharing"))
              }, " EXPORT ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "import" }]),
                onClick: I[14] || (I[14] = (Y) => _("import", "sharing"))
              }, " IMPORT ", 2),
              t("button", {
                class: K(["sidebar-item", { active: R.value === "remotes" }]),
                onClick: I[15] || (I[15] = (Y) => _("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          t("div", sc, [
            x.value ? (o(), n("div", nc, d(x.value), 1)) : !S.value && R.value === "status" ? (o(), n("div", lc, " Loading status... ")) : (o(), n(G, { key: 2 }, [
              R.value === "status" ? (o(), y(No, {
                key: 0,
                status: S.value,
                onSwitchBranch: k
              }, null, 8, ["status"])) : R.value === "workflows" ? (o(), y(As, {
                key: 1,
                onRefresh: re
              })) : R.value === "models-env" ? (o(), y(en, {
                key: 2,
                onNavigate: b
              })) : R.value === "branches" ? (o(), y(jo, {
                key: 3,
                branches: V.value,
                current: ((Ie = S.value) == null ? void 0 : Ie.branch) || null,
                onSwitch: He,
                onCreate: Ke
              }, null, 8, ["branches", "current"])) : R.value === "history" ? (o(), y(sa, {
                key: 4,
                commits: L.value,
                onSelect: Ge,
                onCheckout: Be
              }, null, 8, ["commits"])) : R.value === "nodes" ? (o(), y(rn, { key: 5 })) : R.value === "debug-env" ? (o(), y(Cl, { key: 6 })) : R.value === "environments" ? (o(), y(Vl, {
                key: 7,
                onSwitch: Ve,
                onCreate: qe,
                onDelete: Ye,
                onViewDetails: Je
              })) : R.value === "model-index" ? (o(), y(on, { key: 8 })) : R.value === "settings" ? (o(), y(sl, { key: 9 })) : R.value === "debug-workspace" ? (o(), y(_l, { key: 10 })) : R.value === "export" ? (o(), y(jl, { key: 11 })) : R.value === "import" ? (o(), y(kr, { key: 12 })) : R.value === "remotes" ? (o(), y(Fn, { key: 13 })) : m("", !0)
            ], 64))
          ])
        ]),
        $.value ? (o(), y(Or, {
          key: 0,
          commit: $.value,
          onClose: I[16] || (I[16] = (Y) => $.value = null),
          onCheckout: Be,
          onCreateBranch: je
        }, null, 8, ["commit"])) : m("", !0),
        p.value ? (o(), y(Gr, {
          key: 1,
          title: p.value.title,
          message: p.value.message,
          details: p.value.details,
          warning: p.value.warning,
          confirmLabel: p.value.confirmLabel,
          cancelLabel: p.value.cancelLabel,
          secondaryLabel: p.value.secondaryLabel,
          secondaryAction: p.value.secondaryAction,
          destructive: p.value.destructive,
          onConfirm: p.value.onConfirm,
          onCancel: I[17] || (I[17] = (Y) => p.value = null),
          onSecondary: p.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : m("", !0),
        D.value ? (o(), n("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: I[19] || (I[19] = pe((Y) => D.value = !1, ["self"]))
        }, [
          t("div", ic, [
            t("div", rc, [
              I[31] || (I[31] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: I[18] || (I[18] = (Y) => D.value = !1)
              }, [...I[30] || (I[30] = [
                t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            t("div", cc, [
              I[32] || (I[32] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", dc, [
                (o(!0), n(G, null, X(H.value, (Y) => (o(), n("div", {
                  key: Y.name,
                  class: K(["env-item", { current: Y.is_current }])
                }, [
                  t("div", uc, [
                    t("div", mc, [
                      t("span", vc, d(Y.is_current ? "●" : "○"), 1),
                      t("span", fc, d(Y.name), 1),
                      Y.current_branch ? (o(), n("span", gc, "(" + d(Y.current_branch) + ")", 1)) : m("", !0),
                      Y.is_current ? (o(), n("span", hc, "CURRENT")) : m("", !0)
                    ]),
                    t("div", pc, d(Y.workflow_count) + " workflows • " + d(Y.node_count) + " nodes ", 1)
                  ]),
                  Y.is_current ? m("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ed) => Ve(Y.name)
                  }, " SWITCH ", 8, yc))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : m("", !0),
        t("div", bc, [
          l(xt, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(G, null, X(z.value, (Y) => (o(), n("div", {
                key: Y.id,
                class: K(["toast", Y.type])
              }, [
                t("span", wc, d(M(Y.type)), 1),
                t("span", kc, d(Y.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $c = /* @__PURE__ */ W(_c, [["__scopeId", "data-v-e9bc5f8e"]]), xc = { class: "base-textarea-wrapper" }, Cc = ["value", "rows", "placeholder", "disabled", "maxlength"], Ic = {
  key: 0,
  class: "base-textarea-count"
}, Sc = /* @__PURE__ */ O({
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
    return (c, s) => (o(), n("div", xc, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = be(pe((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = be(pe((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Cc),
      e.showCharCount && e.maxLength ? (o(), n("div", Ic, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : m("", !0)
    ]));
  }
}), Ec = /* @__PURE__ */ W(Sc, [["__scopeId", "data-v-5516e6fc"]]), Lc = { class: "commit-popover" }, zc = { class: "popover-header" }, Mc = { class: "popover-body" }, Nc = {
  key: 0,
  class: "changes-summary"
}, Rc = {
  key: 0,
  class: "change-item"
}, Uc = {
  key: 1,
  class: "change-item"
}, Dc = {
  key: 2,
  class: "change-item"
}, Bc = {
  key: 3,
  class: "change-item"
}, Vc = {
  key: 4,
  class: "change-item"
}, Tc = {
  key: 1,
  class: "no-changes"
}, Oc = {
  key: 2,
  class: "loading"
}, Wc = { class: "message-section" }, Fc = { class: "popover-footer" }, Ac = /* @__PURE__ */ O({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: c }) {
    const s = e, r = c, { commit: i } = ve(), w = E(""), v = E(!1), g = E(null), u = B(() => {
      if (!s.status) return !1;
      const S = s.status.workflows;
      return S.new.length > 0 || S.modified.length > 0 || S.deleted.length > 0 || s.status.has_changes;
    });
    async function h() {
      var S, L, V;
      if (!(!u.value || !w.value.trim() || v.value)) {
        v.value = !0, g.value = null;
        try {
          const H = await i(w.value.trim());
          H.status === "success" ? (g.value = {
            type: "success",
            message: `Committed: ${((S = H.summary) == null ? void 0 : S.new) || 0} new, ${((L = H.summary) == null ? void 0 : L.modified) || 0} modified, ${((V = H.summary) == null ? void 0 : V.deleted) || 0} deleted`
          }, w.value = "", setTimeout(() => r("committed"), 1e3)) : H.status === "no_changes" ? g.value = { type: "error", message: "No changes to commit" } : g.value = { type: "error", message: H.message || "Commit failed" };
        } catch (H) {
          g.value = { type: "error", message: H instanceof Error ? H.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (S, L) => (o(), n("div", Lc, [
      t("div", zc, [
        L[4] || (L[4] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: L[0] || (L[0] = (V) => r("close"))
        }, [...L[3] || (L[3] = [
          t("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      t("div", Mc, [
        e.status && u.value ? (o(), n("div", Nc, [
          e.status.workflows.new.length ? (o(), n("div", Rc, [
            L[5] || (L[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : m("", !0),
          e.status.workflows.modified.length ? (o(), n("div", Uc, [
            L[6] || (L[6] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : m("", !0),
          e.status.workflows.deleted.length ? (o(), n("div", Dc, [
            L[7] || (L[7] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : m("", !0),
          e.status.git_changes.nodes_added.length ? (o(), n("div", Bc, [
            L[8] || (L[8] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : m("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), n("div", Vc, [
            L[9] || (L[9] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : m("", !0)
        ])) : e.status ? (o(), n("div", Tc, " No changes to commit ")) : (o(), n("div", Oc, " Loading... ")),
        t("div", Wc, [
          l(Ec, {
            modelValue: w.value,
            "onUpdate:modelValue": L[1] || (L[1] = (V) => w.value = V),
            placeholder: u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || v.value,
            rows: 3,
            onCtrlEnter: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        g.value ? (o(), n("div", {
          key: 3,
          class: K(["result", g.value.type])
        }, d(g.value.message), 3)) : m("", !0)
      ]),
      t("div", Fc, [
        l(de, {
          variant: "secondary",
          onClick: L[2] || (L[2] = (V) => r("close"))
        }, {
          default: a(() => [...L[10] || (L[10] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        l(de, {
          variant: "primary",
          disabled: !u.value || !w.value.trim() || v.value,
          loading: v.value,
          onClick: h
        }, {
          default: a(() => [
            f(d(v.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Pc = /* @__PURE__ */ W(Ac, [["__scopeId", "data-v-4f587977"]]), Gc = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Hc = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Kc = {
  comfy: Gc,
  phosphor: Hc
}, st = "comfy", pt = "comfygit-theme";
let Se = null, yt = st;
function jc() {
  try {
    const e = localStorage.getItem(pt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return st;
}
function bt(e = st) {
  Se && Se.remove(), Se = document.createElement("style"), Se.id = "comfygit-theme-styles", Se.setAttribute("data-theme", e), Se.textContent = Kc[e], document.head.appendChild(Se), document.body.setAttribute("data-comfygit-theme", e), yt = e;
  try {
    localStorage.setItem(pt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function qc() {
  return yt;
}
function Yc(e) {
  bt(e);
}
const nt = document.createElement("link");
nt.rel = "stylesheet";
nt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(nt);
const Jc = jc();
bt(Jc);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Yc(e);
  },
  getTheme: () => {
    const e = qc();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let he = null, fe = null, De = null;
const Ne = E(null);
async function ot() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const c = await window.app.api.fetchApi("/v2/comfygit/status");
    c.ok && (Ne.value = await c.json());
  } catch {
  }
}
function Xc() {
  if (!Ne.value) return !1;
  const e = Ne.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Ne.value.has_changes;
}
function Zc() {
  he && he.remove(), he = document.createElement("div"), he.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", he.appendChild(e), he.addEventListener("click", (r) => {
    r.target === he && et();
  });
  const c = (r) => {
    r.key === "Escape" && (et(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), dt({
    render: () => ut($c, {
      onClose: et,
      onStatusUpdate: (r) => {
        Ne.value = r, Fe();
      }
    })
  }).mount(e), document.body.appendChild(he);
}
function et() {
  he && (he.remove(), he = null);
}
function Qc(e) {
  Ue(), fe = document.createElement("div"), fe.className = "comfygit-commit-popover-container";
  const c = e.getBoundingClientRect();
  fe.style.position = "fixed", fe.style.top = `${c.bottom + 8}px`, fe.style.right = `${window.innerWidth - c.right}px`, fe.style.zIndex = "10001";
  const s = (i) => {
    fe && !fe.contains(i.target) && i.target !== e && (Ue(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (i) => {
    i.key === "Escape" && (Ue(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), De = dt({
    render: () => ut(Pc, {
      status: Ne.value,
      onClose: Ue,
      onCommitted: () => {
        Ue(), ot().then(Fe);
      }
    })
  }), De.mount(fe), document.body.appendChild(fe);
}
function Ue() {
  De && (De.unmount(), De = null), fe && (fe.remove(), fe = null);
}
let ye = null;
function Fe() {
  if (!ye) return;
  const e = ye.querySelector(".commit-indicator");
  e && (e.style.display = Xc() ? "block" : "none");
}
const wt = document.createElement("style");
wt.textContent = `
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
document.head.appendChild(wt);
Xe.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Zc, ye = document.createElement("button"), ye.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ye.innerHTML = 'Commit <span class="commit-indicator"></span>', ye.title = "Quick Commit", ye.onclick = () => Qc(ye), e.appendChild(c), e.appendChild(ye), (r = (s = Xe.menu) == null ? void 0 : s.settingsGroup) != null && r.element && (Xe.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ot(), Fe(), setInterval(async () => {
      await ot(), Fe();
    }, 3e4);
  }
});
