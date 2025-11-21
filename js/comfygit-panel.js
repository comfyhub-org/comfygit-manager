import { app as st } from "../../scripts/app.js";
import { defineComponent as O, createElementBlock as n, openBlock as o, createCommentVNode as v, createElementVNode as t, renderSlot as X, createBlock as p, resolveDynamicComponent as dt, normalizeClass as K, withCtx as a, toDisplayString as d, createVNode as l, createTextVNode as f, computed as B, Fragment as P, renderList as Y, ref as I, onMounted as ue, withKeys as _e, withModifiers as we, onUnmounted as Rt, Teleport as Ze, normalizeStyle as He, watch as Ut, resolveComponent as Bt, createSlots as ht, TransitionGroup as Dt, createApp as pt, h as yt } from "vue";
const Vt = { class: "panel-layout" }, Tt = {
  key: 0,
  class: "panel-layout-header"
}, Ot = {
  key: 1,
  class: "panel-layout-search"
}, Wt = { class: "panel-layout-content" }, Ft = {
  key: 2,
  class: "panel-layout-footer"
}, At = /* @__PURE__ */ O({
  __name: "PanelLayout",
  setup(e) {
    return (i, s) => (o(), n("div", Vt, [
      i.$slots.header ? (o(), n("div", Tt, [
        X(i.$slots, "header", {}, void 0, !0)
      ])) : v("", !0),
      i.$slots.search ? (o(), n("div", Ot, [
        X(i.$slots, "search", {}, void 0, !0)
      ])) : v("", !0),
      t("div", Wt, [
        X(i.$slots, "content", {}, void 0, !0)
      ]),
      i.$slots.footer ? (o(), n("div", Ft, [
        X(i.$slots, "footer", {}, void 0, !0)
      ])) : v("", !0)
    ]));
  }
}), W = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [r, c] of i)
    s[r] = c;
  return s;
}, fe = /* @__PURE__ */ W(At, [["__scopeId", "data-v-21565df9"]]), Pt = {
  key: 0,
  class: "panel-title-prefix"
}, Gt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ht = /* @__PURE__ */ O({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (i, s) => (o(), p(dt(`h${e.level}`), {
      class: K(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (o(), n("span", Pt, d(e.prefix), 1)) : (o(), n("span", Gt)),
        X(i.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Kt = /* @__PURE__ */ W(Ht, [["__scopeId", "data-v-c3875efc"]]), jt = ["title"], qt = ["width", "height"], Yt = /* @__PURE__ */ O({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (i, s) => (o(), n("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (r) => i.$emit("click"))
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
      ])], 8, qt))
    ], 8, jt));
  }
}), Jt = /* @__PURE__ */ W(Yt, [["__scopeId", "data-v-6fc7f16d"]]), Xt = { class: "header-left" }, Zt = {
  key: 0,
  class: "header-actions"
}, Qt = /* @__PURE__ */ O({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (i, s) => (o(), n("div", {
      class: K(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Xt, [
        l(Kt, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            f(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), p(Jt, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => i.$emit("info-click"))
        })) : v("", !0)
      ]),
      i.$slots.actions ? (o(), n("div", Zt, [
        X(i.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ], 2));
  }
}), ge = /* @__PURE__ */ W(Qt, [["__scopeId", "data-v-55a62cd6"]]), eo = {
  key: 0,
  class: "section-title-count"
}, to = {
  key: 1,
  class: "section-title-icon"
}, oo = /* @__PURE__ */ O({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (i, s) => (o(), p(dt(`h${e.level}`), {
      class: K(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && i.$emit("click"))
    }, {
      default: a(() => [
        X(i.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", eo, "(" + d(e.count) + ")", 1)) : v("", !0),
        e.clickable ? (o(), n("span", to, d(e.expanded ? "▼" : "▸"), 1)) : v("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Be = /* @__PURE__ */ W(oo, [["__scopeId", "data-v-559361eb"]]), ao = { class: "status-grid" }, so = { class: "status-grid__column" }, no = { class: "status-grid__title" }, lo = { class: "status-grid__column status-grid__column--right" }, io = { class: "status-grid__title" }, ro = /* @__PURE__ */ O({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (i, s) => (o(), n("div", ao, [
      t("div", so, [
        t("h4", no, d(e.leftTitle), 1),
        X(i.$slots, "left", {}, void 0, !0)
      ]),
      t("div", lo, [
        t("h4", io, d(e.rightTitle), 1),
        X(i.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), co = /* @__PURE__ */ W(ro, [["__scopeId", "data-v-fe556068"]]), uo = {
  key: 0,
  class: "status-item__icon"
}, mo = {
  key: 1,
  class: "status-item__count"
}, vo = { class: "status-item__label" }, fo = /* @__PURE__ */ O({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const i = e, s = B(() => `status-item--${i.variant}`);
    return (r, c) => (o(), n("div", {
      class: K(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), n("span", uo, d(e.icon), 1)) : v("", !0),
      e.count !== void 0 ? (o(), n("span", mo, d(e.count), 1)) : v("", !0),
      t("span", vo, d(e.label), 1)
    ], 2));
  }
}), Ee = /* @__PURE__ */ W(fo, [["__scopeId", "data-v-6f929183"]]), go = { class: "issue-card__header" }, ho = { class: "issue-card__icon" }, po = { class: "issue-card__title" }, yo = {
  key: 0,
  class: "issue-card__content"
}, bo = {
  key: 0,
  class: "issue-card__description"
}, wo = {
  key: 1,
  class: "issue-card__items"
}, ko = {
  key: 2,
  class: "issue-card__actions"
}, _o = /* @__PURE__ */ O({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const i = e, s = B(() => `issue-card--${i.severity}`);
    return (r, c) => (o(), n("div", {
      class: K(["issue-card", s.value])
    }, [
      t("div", go, [
        t("span", ho, d(e.icon), 1),
        t("h4", po, d(e.title), 1)
      ]),
      r.$slots.default || e.description ? (o(), n("div", yo, [
        e.description ? (o(), n("p", bo, d(e.description), 1)) : v("", !0),
        X(r.$slots, "default", {}, void 0, !0)
      ])) : v("", !0),
      e.items && e.items.length ? (o(), n("div", wo, [
        (o(!0), n(P, null, Y(e.items, (b, m) => (o(), n("div", {
          key: m,
          class: "issue-card__item"
        }, [
          c[0] || (c[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(b), 1)
        ]))), 128))
      ])) : v("", !0),
      r.$slots.actions ? (o(), n("div", ko, [
        X(r.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ W(_o, [["__scopeId", "data-v-df6aa348"]]), $o = ["type", "disabled"], Co = {
  key: 0,
  class: "spinner"
}, xo = /* @__PURE__ */ O({
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
    return (i, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: K(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => i.$emit("click", r))
    }, [
      e.loading ? (o(), n("span", Co)) : v("", !0),
      e.loading ? v("", !0) : X(i.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, $o));
  }
}), U = /* @__PURE__ */ W(xo, [["__scopeId", "data-v-772abe47"]]), Io = { class: "empty-state" }, So = {
  key: 0,
  class: "empty-icon"
}, Eo = { class: "empty-message" }, Lo = /* @__PURE__ */ O({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (i, s) => (o(), n("div", Io, [
      e.icon ? (o(), n("div", So, d(e.icon), 1)) : v("", !0),
      t("p", Eo, d(e.message), 1),
      e.actionLabel ? (o(), p(U, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => i.$emit("action"))
      }, {
        default: a(() => [
          f(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : v("", !0)
    ]));
  }
}), ye = /* @__PURE__ */ W(Lo, [["__scopeId", "data-v-4466284f"]]), zo = { class: "branch-indicator" }, Mo = { class: "branch-indicator__info" }, No = { class: "branch-indicator__label" }, Ro = { class: "branch-indicator__name" }, Uo = {
  key: 0,
  class: "branch-indicator__remote"
}, Bo = {
  key: 0,
  class: "branch-indicator__status"
}, Do = {
  key: 0,
  class: "branch-indicator__ahead"
}, Vo = {
  key: 1,
  class: "branch-indicator__behind"
}, To = {
  key: 1,
  class: "branch-indicator__actions"
}, Oo = /* @__PURE__ */ O({
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
    return (i, s) => (o(), n("div", zo, [
      t("div", Mo, [
        t("span", No, d(e.label), 1),
        t("span", Ro, d(e.branchName), 1),
        e.remote ? (o(), n("span", Uo, "@" + d(e.remote), 1)) : v("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (o(), n("div", Bo, [
        e.commitsAhead ? (o(), n("span", Do, " ↑ " + d(e.commitsAhead) + " ahead ", 1)) : v("", !0),
        e.commitsBehind ? (o(), n("span", Vo, " ↓ " + d(e.commitsBehind) + " behind ", 1)) : v("", !0)
      ])) : v("", !0),
      i.$slots.actions ? (o(), n("div", To, [
        X(i.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ]));
  }
}), Wo = /* @__PURE__ */ W(Oo, [["__scopeId", "data-v-cb8dd50e"]]), Fo = { style: { "margin-top": "var(--cg-space-1)" } }, Ao = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, Po = /* @__PURE__ */ O({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: i }) {
    const s = e, r = B(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), c = B(() => {
      const u = s.status.git_changes;
      return u.nodes_added.length > 0 || u.nodes_removed.length > 0 || u.workflow_changes || u.has_other_changes;
    }), b = B(() => {
      const u = s.status.git_changes, h = s.status.workflows;
      return (u.workflow_changes || u.has_other_changes) && h.new.length === 0 && h.modified.length === 0 && h.deleted.length === 0;
    }), m = B(() => s.status.missing_models_count > 0 || c.value || !s.status.comparison.is_synced), g = B(() => {
      const u = [];
      return s.status.workflows.new.length > 0 && u.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && u.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && u.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && u.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && u.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${u.length > 0 ? u.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (u, h) => (o(), p(fe, null, {
      header: a(() => [
        l(ge, { title: "STATUS" })
      ]),
      content: a(() => [
        l(Be, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [...h[7] || (h[7] = [
            f(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        l(co, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (o(), p(Ee, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : v("", !0),
            e.status.workflows.modified.length ? (o(), p(Ee, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : v("", !0),
            e.status.workflows.deleted.length ? (o(), p(Ee, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : v("", !0),
            l(Ee, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (o(), p(Ee, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : v("", !0),
            e.status.git_changes.nodes_removed.length ? (o(), p(Ee, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : v("", !0),
            b.value ? (o(), p(Ee, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : v("", !0),
            c.value ? v("", !0) : (o(), p(Ee, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        t("div", Fo, [
          l(Wo, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: h[0] || (h[0] = (L) => u.$emit("switch-branch"))
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
        m.value ? (o(), n("div", Ao, [
          l(Be, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [...h[9] || (h[9] = [
              f(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (o(), p(Je, {
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
                onClick: h[1] || (h[1] = (L) => u.$emit("view-workflows"))
              }, {
                default: a(() => [...h[10] || (h[10] = [
                  f(" View Details ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: h[2] || (h[2] = (L) => u.$emit("resolve-models"))
              }, {
                default: a(() => [...h[11] || (h[11] = [
                  f(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : v("", !0),
          c.value ? (o(), p(Je, {
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
                onClick: h[3] || (h[3] = (L) => u.$emit("view-history"))
              }, {
                default: a(() => [...h[12] || (h[12] = [
                  f(" View Changes ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: h[4] || (h[4] = (L) => u.$emit("commit-changes"))
              }, {
                default: a(() => [...h[13] || (h[13] = [
                  f(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : v("", !0),
          e.status.comparison.is_synced ? v("", !0) : (o(), p(Je, {
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
                onClick: h[5] || (h[5] = (L) => u.$emit("view-debug"))
              }, {
                default: a(() => [...h[14] || (h[14] = [
                  f(" View Logs ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: h[6] || (h[6] = (L) => u.$emit("sync-environment"))
              }, {
                default: a(() => [...h[15] || (h[15] = [
                  f(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : v("", !0),
        !m.value && !c.value ? (o(), p(ye, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : v("", !0)
      ]),
      _: 1
    }));
  }
}), Go = /* @__PURE__ */ W(Po, [["__scopeId", "data-v-2045da26"]]), Ho = ["type", "value", "placeholder", "disabled"], Ko = /* @__PURE__ */ O({
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
  setup(e, { expose: i, emit: s }) {
    const r = e, c = s, b = I(null);
    function m(g) {
      const u = g.target.value;
      c("update:modelValue", u);
    }
    return ue(() => {
      r.autoFocus && b.value && b.value.focus();
    }), i({
      focus: () => {
        var g;
        return (g = b.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = b.value) == null ? void 0 : g.blur();
      }
    }), (g, u) => (o(), n("input", {
      ref_key: "inputRef",
      ref: b,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: K(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: m,
      onKeyup: [
        u[0] || (u[0] = _e((h) => g.$emit("enter"), ["enter"])),
        u[1] || (u[1] = _e((h) => g.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (h) => g.$emit("focus")),
      onBlur: u[3] || (u[3] = (h) => g.$emit("blur"))
    }, null, 42, Ho));
  }
}), De = /* @__PURE__ */ W(Ko, [["__scopeId", "data-v-0380d08f"]]), jo = { class: "branch-create-form" }, qo = { class: "form-actions" }, Yo = /* @__PURE__ */ O({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: i }) {
    const s = i, r = I(""), c = B(() => {
      const g = r.value.trim();
      return g.length > 0 && !g.startsWith("-") && !g.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(g);
    });
    function b() {
      c.value && (s("create", r.value.trim()), r.value = "");
    }
    function m() {
      r.value = "", s("cancel");
    }
    return (g, u) => (o(), n("div", jo, [
      l(De, {
        modelValue: r.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => r.value = h),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: b,
        onEscape: m
      }, null, 8, ["modelValue"]),
      t("div", qo, [
        l(U, {
          variant: "primary",
          size: "sm",
          disabled: !c.value,
          onClick: b
        }, {
          default: a(() => [...u[1] || (u[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        l(U, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: a(() => [...u[2] || (u[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Jo = /* @__PURE__ */ W(Yo, [["__scopeId", "data-v-7c500394"]]), Xo = { class: "branch-list-item__indicator" }, Zo = { class: "branch-list-item__name" }, Qo = {
  key: 0,
  class: "branch-list-item__actions"
}, ea = {
  key: 0,
  class: "branch-list-item__current-label"
}, ta = /* @__PURE__ */ O({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (i, s) => (o(), n("div", {
      class: K(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && i.$emit("click"))
    }, [
      t("span", Xo, d(e.isCurrent ? "●" : "○"), 1),
      t("span", Zo, d(e.branchName), 1),
      i.$slots.actions || e.showCurrentLabel ? (o(), n("div", Qo, [
        X(i.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (o(), n("span", ea, " current ")) : v("", !0)
      ])) : v("", !0)
    ], 2));
  }
}), oa = /* @__PURE__ */ W(ta, [["__scopeId", "data-v-c6581a24"]]), aa = {
  key: 2,
  class: "branch-list"
}, sa = /* @__PURE__ */ O({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: i }) {
    const s = i, r = I(!1);
    function c(m) {
      s("create", m), b();
    }
    function b() {
      r.value = !1;
    }
    return (m, g) => (o(), p(fe, null, {
      header: a(() => [
        l(ge, { title: "BRANCHES" }, {
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
        r.value ? (o(), p(Jo, {
          key: 0,
          onCreate: c,
          onCancel: b
        })) : v("", !0),
        e.branches.length === 0 ? (o(), p(ye, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", aa, [
          (o(!0), n(P, null, Y(e.branches, (u) => (o(), p(oa, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: a(() => [
              u.is_current ? v("", !0) : (o(), p(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (h) => m.$emit("switch", u.name)
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
}), na = /* @__PURE__ */ W(sa, [["__scopeId", "data-v-763d6ec4"]]), la = { class: "commit-list" }, ia = /* @__PURE__ */ O({
  __name: "CommitList",
  setup(e) {
    return (i, s) => (o(), n("div", la, [
      X(i.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ra = /* @__PURE__ */ W(ia, [["__scopeId", "data-v-8c5ee761"]]), ca = { class: "commit-hash" }, da = /* @__PURE__ */ O({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const i = e, s = B(() => i.hash.slice(0, i.length));
    return (r, c) => (o(), n("span", ca, d(s.value), 1));
  }
}), bt = /* @__PURE__ */ W(da, [["__scopeId", "data-v-7c333cc6"]]), ua = { class: "commit-message" }, ma = { class: "commit-date" }, va = /* @__PURE__ */ O({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: i }) {
    const s = e, r = i;
    function c() {
      s.clickable && r("click");
    }
    return (b, m) => (o(), n("div", {
      class: K(["commit-item", { clickable: e.clickable }]),
      onClick: c
    }, [
      l(bt, { hash: e.hash }, null, 8, ["hash"]),
      t("span", ua, d(e.message), 1),
      t("span", ma, d(e.relativeDate), 1),
      b.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = we(() => {
        }, ["stop"]))
      }, [
        X(b.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ], 2));
  }
}), fa = /* @__PURE__ */ W(va, [["__scopeId", "data-v-dd7c621b"]]), ga = /* @__PURE__ */ O({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (i, s) => (o(), p(fe, null, {
      header: a(() => [
        l(ge, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (o(), p(ye, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), p(ra, { key: 1 }, {
          default: a(() => [
            (o(!0), n(P, null, Y(e.commits, (r) => (o(), p(fa, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => i.$emit("select", r)
            }, {
              actions: a(() => [
                l(U, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => i.$emit("checkout", r),
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
}), ha = /* @__PURE__ */ W(ga, [["__scopeId", "data-v-981c3c64"]]), ft = [
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
  ...Array(12).fill(null).map((e, i) => ({
    name: `synced-workflow-${i + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + i,
    model_count: 1 + i % 3,
    sync_state: "synced"
  }))
], pa = {
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
}, wt = [
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
], ya = [
  ...wt,
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
], qe = [
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
], ba = [
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
], Ye = [
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
  createEnvironment: async (e, i, s) => {
    await ee(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${i}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await ee(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ee(400), ft),
  getWorkflowDetails: async (e) => (await ee(300), pa[e] || {
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
  installWorkflowDeps: async (e, i, s) => {
    await ee(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${i}, models=${s}`);
  },
  setModelImportance: async (e, i, s) => {
    await ee(200), console.log(`[MOCK] Setting ${i} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ee(350), wt),
  getWorkspaceModels: async () => (await ee(400), ya),
  updateModelSource: async (e, i) => {
    await ee(300), console.log(`[MOCK] Updating source for ${e}: ${i}`);
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
    const e = qe.filter((s) => s.installed), i = qe.filter((s) => !s.installed);
    return {
      nodes: qe,
      total_count: qe.length,
      installed_count: e.length,
      missing_count: i.length
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
  getEnvironmentLogs: async (e, i) => (await ee(250), (e ? Ye.filter((r) => r.level === e) : Ye).slice(0, i || 100)),
  getWorkspaceLogs: async (e, i) => {
    await ee(300);
    const s = [...Ye, ...Ye.map((c) => ({
      ...c,
      context: { ...c.context, environment: "testing" }
    }))];
    return (e ? s.filter((c) => c.level === e) : s).slice(0, i || 100);
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
      synced: ft.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await ee(300), ba.slice(0, e)),
  getBranches: async () => (await ee(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await ee(300), {
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
  addRemote: async (e, i) => {
    await ee(400), console.log(`[MOCK] Adding remote: ${e} -> ${i}`);
  },
  removeRemote: async (e) => {
    await ee(350), console.log(`[MOCK] Removing remote: ${e}`);
  },
  updateRemoteUrl: async (e, i, s) => {
    await ee(400), console.log(`[MOCK] Updating remote ${e}: ${i}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (e) => {
    await ee(1500), console.log(`[MOCK] Fetching from remote: ${e}`);
  },
  getRemoteSyncStatus: async (e) => (await ee(300), {
    remote: e,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  })
};
function ee(e) {
  return new Promise((i) => setTimeout(i, e));
}
function he() {
  const e = I(!1), i = I(null);
  async function s(A, te) {
    var Fe;
    if (!((Fe = window.app) != null && Fe.api))
      throw new Error("ComfyUI API not available");
    const re = await window.app.api.fetchApi(A, te);
    if (!re.ok) {
      const je = await re.json().catch(() => ({}));
      throw new Error(je.error || je.message || `Request failed: ${re.status}`);
    }
    return re.json();
  }
  async function r() {
    return Q.getStatus();
  }
  async function c(A, te = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: A, allow_issues: te })
    });
  }
  async function b(A = 10, te = 0) {
    {
      const re = await Q.getCommitHistory(A);
      return {
        commits: re,
        total: re.length,
        offset: te
      };
    }
  }
  async function m(A) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A })
    });
  }
  async function g() {
    return Q.getBranches();
  }
  async function u(A) {
    return s(`/v2/comfygit/commit/${A}`);
  }
  async function h(A, te = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: A, force: te })
    });
  }
  async function L(A, te = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, start_point: te })
    });
  }
  async function E(A, te = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: A, force: te })
    });
  }
  async function z() {
    return Q.getEnvironments();
  }
  async function G(A) {
    return Q.switchEnvironment(A);
  }
  async function q() {
    return null;
  }
  async function T(A, te, re) {
    return await Q.createEnvironment(A, te, re), { status: "success" };
  }
  async function C(A) {
    return await Q.deleteEnvironment(A), { status: "success" };
  }
  async function x() {
    return Q.getWorkflows();
  }
  async function D(A) {
    return Q.getWorkflowDetails(A);
  }
  async function H(A) {
    return Q.resolveWorkflow(A);
  }
  async function _(A, te, re) {
    return await Q.installWorkflowDeps(A, te, re), { status: "success" };
  }
  async function $(A, te, re) {
    return Q.setModelImportance(A, te, re);
  }
  async function y() {
    return Q.getEnvironmentModels();
  }
  async function k() {
    return Q.getWorkspaceModels();
  }
  async function w(A, te) {
    return Q.updateModelSource(A, te);
  }
  async function N(A) {
    return Q.deleteModel(A);
  }
  async function M(A) {
    return await Q.downloadModel(A), { status: "success" };
  }
  async function ce() {
    return Q.getConfig();
  }
  async function V(A) {
    return Q.updateConfig(A);
  }
  async function R(A, te) {
    return Q.getEnvironmentLogs(A, te);
  }
  async function j(A, te) {
    return Q.getWorkspaceLogs(A, te);
  }
  async function oe() {
    return Q.getNodes();
  }
  async function xe(A) {
    return await Q.installNode(A), { status: "success" };
  }
  async function et(A) {
    return await Q.updateNode(A), { status: "success" };
  }
  async function ne(A) {
    return await Q.uninstallNode(A), { status: "success" };
  }
  async function Ie() {
    return Q.getRemotes();
  }
  async function tt(A, te) {
    return await Q.addRemote(A, te), { status: "success", remote_name: A };
  }
  async function We(A) {
    return await Q.removeRemote(A), { status: "success", remote_name: A };
  }
  async function Se(A, te, re) {
    return await Q.updateRemoteUrl(A, te, re), { status: "success", remote_name: A };
  }
  async function ot(A) {
    return await Q.fetchRemote(A), { status: "success", remote_name: A };
  }
  async function Ke(A) {
    return Q.getRemoteSyncStatus(A);
  }
  return {
    isLoading: e,
    error: i,
    getStatus: r,
    commit: c,
    getHistory: b,
    exportEnv: m,
    // Git Operations
    getBranches: g,
    getCommitDetail: u,
    checkout: h,
    createBranch: L,
    switchBranch: E,
    // Environment Management
    getEnvironments: z,
    switchEnvironment: G,
    getSwitchProgress: q,
    createEnvironment: T,
    deleteEnvironment: C,
    // Workflow Management
    getWorkflows: x,
    getWorkflowDetails: D,
    resolveWorkflow: H,
    installWorkflowDeps: _,
    setModelImportance: $,
    // Model Management
    getEnvironmentModels: y,
    getWorkspaceModels: k,
    updateModelSource: w,
    deleteModel: N,
    downloadModel: M,
    // Settings
    getConfig: ce,
    updateConfig: V,
    // Debug/Logs
    getEnvironmentLogs: R,
    getWorkspaceLogs: j,
    // Node Management
    getNodes: oe,
    installNode: xe,
    updateNode: et,
    uninstallNode: ne,
    // Git Remotes
    getRemotes: Ie,
    addRemote: tt,
    removeRemote: We,
    updateRemoteUrl: Se,
    fetchRemote: ot,
    getRemoteSyncStatus: Ke
  };
}
const wa = { class: "base-modal-header" }, ka = {
  key: 0,
  class: "base-modal-title"
}, _a = { class: "base-modal-body" }, $a = {
  key: 0,
  class: "base-modal-loading"
}, Ca = {
  key: 1,
  class: "base-modal-error"
}, xa = {
  key: 0,
  class: "base-modal-footer"
}, Ia = /* @__PURE__ */ O({
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
  setup(e, { emit: i }) {
    const s = e, r = i;
    function c() {
      s.closeOnOverlayClick && r("close");
    }
    function b(m) {
      m.key === "Escape" && r("close");
    }
    return ue(() => {
      document.addEventListener("keydown", b), document.body.style.overflow = "hidden";
    }), Rt(() => {
      document.removeEventListener("keydown", b), document.body.style.overflow = "";
    }), (m, g) => (o(), p(Ze, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: c
      }, [
        t("div", {
          class: K(["base-modal-content", e.size]),
          onClick: g[1] || (g[1] = we(() => {
          }, ["stop"]))
        }, [
          t("div", wa, [
            X(m.$slots, "header", {}, () => [
              e.title ? (o(), n("h3", ka, d(e.title), 1)) : v("", !0)
            ], !0),
            e.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: g[0] || (g[0] = (u) => m.$emit("close"))
            }, [...g[2] || (g[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : v("", !0)
          ]),
          t("div", _a, [
            e.loading ? (o(), n("div", $a, "Loading...")) : e.error ? (o(), n("div", Ca, d(e.error), 1)) : X(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), n("div", xa, [
            X(m.$slots, "footer", {}, void 0, !0)
          ])) : v("", !0)
        ], 2)
      ])
    ]));
  }
}), Qe = /* @__PURE__ */ W(Ia, [["__scopeId", "data-v-700d367b"]]), Sa = ["type", "disabled"], Ea = {
  key: 0,
  class: "spinner"
}, La = /* @__PURE__ */ O({
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
    return (i, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: K(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => i.$emit("click", r))
    }, [
      e.loading ? (o(), n("span", Ea)) : v("", !0),
      X(i.$slots, "default", {}, void 0, !0)
    ], 10, Sa));
  }
}), ve = /* @__PURE__ */ W(La, [["__scopeId", "data-v-f3452606"]]), za = {
  key: 0,
  class: "base-title-count"
}, Ma = /* @__PURE__ */ O({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (i, s) => (o(), p(dt(`h${e.level}`), {
      class: K(["base-title", e.variant])
    }, {
      default: a(() => [
        X(i.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", za, "(" + d(e.count) + ")", 1)) : v("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Le = /* @__PURE__ */ W(Ma, [["__scopeId", "data-v-5a01561d"]]), Na = ["value", "disabled"], Ra = {
  key: 0,
  value: "",
  disabled: ""
}, Ua = ["value"], Ba = {
  key: 0,
  class: "base-select-error"
}, Da = /* @__PURE__ */ O({
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
    function i(r) {
      return typeof r == "string" ? r : r.value;
    }
    function s(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, c) => (o(), n("div", {
      class: K(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: K(["base-select", { error: !!e.error }]),
        onChange: c[0] || (c[0] = (b) => r.$emit("update:modelValue", b.target.value))
      }, [
        e.placeholder ? (o(), n("option", Ra, d(e.placeholder), 1)) : v("", !0),
        (o(!0), n(P, null, Y(e.options, (b) => (o(), n("option", {
          key: i(b),
          value: i(b)
        }, d(s(b)), 9, Ua))), 128))
      ], 42, Na),
      e.error ? (o(), n("span", Ba, d(e.error), 1)) : v("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ W(Da, [["__scopeId", "data-v-7436d745"]]), Va = { class: "detail-section" }, Ta = {
  key: 0,
  class: "empty-message"
}, Oa = { class: "model-header" }, Wa = { class: "model-name" }, Fa = { class: "model-details" }, Aa = { class: "model-row" }, Pa = { class: "model-row" }, Ga = {
  key: 0,
  class: "model-row"
}, Ha = { class: "value" }, Ka = {
  key: 1,
  class: "model-row"
}, ja = { class: "value" }, qa = {
  key: 0,
  class: "model-actions"
}, Ya = { class: "detail-section" }, Ja = {
  key: 0,
  class: "empty-message"
}, Xa = { class: "node-name" }, Za = {
  key: 0,
  class: "node-version"
}, Qa = /* @__PURE__ */ O({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: i }) {
    const s = e, r = i, { getWorkflowDetails: c, setModelImportance: b } = he(), m = I(null), g = I(!1), u = I(null), h = I(!1), L = I({}), E = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function z() {
      g.value = !0, u.value = null;
      try {
        m.value = await c(s.workflowName);
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        g.value = !1;
      }
    }
    function G(T, C) {
      L.value[T] = C, h.value = !0;
    }
    async function q() {
      if (!h.value) {
        r("close");
        return;
      }
      g.value = !0, u.value = null;
      try {
        for (const [T, C] of Object.entries(L.value))
          await b(s.workflowName, T, C);
        r("close");
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        g.value = !1;
      }
    }
    return ue(z), (T, C) => (o(), p(Qe, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: u.value || void 0,
      onClose: C[2] || (C[2] = (x) => r("close"))
    }, {
      body: a(() => [
        m.value ? (o(), n(P, { key: 0 }, [
          t("section", Va, [
            l(Le, { variant: "section" }, {
              default: a(() => [
                f("MODELS USED (" + d(m.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            m.value.models.length === 0 ? (o(), n("div", Ta, " No models used in this workflow ")) : v("", !0),
            (o(!0), n(P, null, Y(m.value.models, (x) => (o(), n("div", {
              key: x.hash,
              class: "model-card"
            }, [
              t("div", Oa, [
                C[3] || (C[3] = t("span", { class: "model-icon" }, "📦", -1)),
                t("span", Wa, d(x.filename), 1)
              ]),
              t("div", Fa, [
                t("div", Aa, [
                  C[4] || (C[4] = t("span", { class: "label" }, "Status:", -1)),
                  t("span", {
                    class: K(["value", x.status === "available" ? "success" : "error"])
                  }, d(x.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                t("div", Pa, [
                  C[5] || (C[5] = t("span", { class: "label" }, "Importance:", -1)),
                  l(Ue, {
                    "model-value": L.value[x.hash] || x.importance,
                    options: E,
                    "onUpdate:modelValue": (D) => G(x.hash, D)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                x.node_type ? (o(), n("div", Ga, [
                  C[6] || (C[6] = t("span", { class: "label" }, "Used in:", -1)),
                  t("span", Ha, d(x.node_type) + " (Node " + d(x.node_id) + ")", 1)
                ])) : v("", !0),
                x.size_mb ? (o(), n("div", Ka, [
                  C[7] || (C[7] = t("span", { class: "label" }, "Size:", -1)),
                  t("span", ja, d(x.size_mb) + " MB", 1)
                ])) : v("", !0)
              ]),
              x.status === "missing" ? (o(), n("div", qa, [
                l(ve, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C[0] || (C[0] = (D) => r("resolve"))
                }, {
                  default: a(() => [...C[8] || (C[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : v("", !0)
            ]))), 128))
          ]),
          C[9] || (C[9] = t("div", { class: "info-box" }, [
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
          t("section", Ya, [
            l(Le, { variant: "section" }, {
              default: a(() => [
                f("NODES USED (" + d(m.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            m.value.nodes.length === 0 ? (o(), n("div", Ja, " No custom nodes used in this workflow ")) : v("", !0),
            (o(!0), n(P, null, Y(m.value.nodes, (x) => (o(), n("div", {
              key: x.name,
              class: "node-item"
            }, [
              t("span", {
                class: K(["node-status", x.installed ? "installed" : "missing"])
              }, d(x.installed ? "✓" : "✕"), 3),
              t("span", Xa, d(x.name), 1),
              x.version ? (o(), n("span", Za, "v" + d(x.version), 1)) : v("", !0)
            ]))), 128))
          ])
        ], 64)) : v("", !0)
      ]),
      footer: a(() => [
        l(ve, {
          variant: "secondary",
          onClick: C[1] || (C[1] = (x) => r("close"))
        }, {
          default: a(() => [...C[10] || (C[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        h.value ? (o(), p(ve, {
          key: 0,
          variant: "primary",
          onClick: q
        }, {
          default: a(() => [...C[11] || (C[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : v("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), es = /* @__PURE__ */ W(Qa, [["__scopeId", "data-v-6ce9a41c"]]), ts = {
  key: 0,
  class: "resolve-section"
}, os = { class: "resolve-card success-card" }, as = { class: "items-list" }, ss = { class: "item-info" }, ns = { class: "item-name" }, ls = {
  key: 0,
  class: "item-meta"
}, is = { class: "match-type" }, rs = { class: "source" }, cs = {
  key: 1,
  class: "resolve-section"
}, ds = { class: "resolve-card warning-card" }, us = { class: "items-list" }, ms = { class: "item-info" }, vs = { class: "item-name" }, fs = { class: "item-meta" }, gs = { key: 0 }, hs = { key: 1 }, ps = {
  key: 0,
  class: "item-warning"
}, ys = {
  key: 0,
  class: "item-action"
}, bs = ["onClick"], ws = {
  key: 2,
  class: "resolve-section"
}, ks = { class: "info-text" }, _s = { class: "actions-summary" }, $s = { class: "summary-list" }, Cs = { key: 0 }, xs = { key: 1 }, Is = { key: 2 }, Ss = {
  key: 0,
  class: "estimated-size"
}, Es = /* @__PURE__ */ O({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: i }) {
    const s = e, r = i, { resolveWorkflow: c, installWorkflowDeps: b } = he(), m = I(null), g = I(!1), u = I(!1), h = I(null), L = B(() => {
      var $;
      return m.value ? (($ = m.value.download_results) == null ? void 0 : $.every((y) => y.can_download)) ?? !1 : !1;
    });
    async function E() {
      g.value = !0, h.value = null;
      try {
        m.value = await c(s.workflowName);
      } catch ($) {
        h.value = $ instanceof Error ? $.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function z($) {
      return !$.possible_matches || $.possible_matches.length === 0 ? null : $.possible_matches.reduce(
        (y, k) => k.match_confidence > y.match_confidence ? k : y
      );
    }
    function G($) {
      return $ >= 0.9 ? "high" : $ >= 0.7 ? "medium" : "low";
    }
    function q($) {
      const y = z($);
      return y ? y.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function T($) {
      var y, k;
      return (k = (y = m.value) == null ? void 0 : y.download_results) == null ? void 0 : k.find((w) => w.model === $);
    }
    function C($) {
      const y = T($);
      return (y == null ? void 0 : y.can_download) ?? !1;
    }
    function x($) {
      const y = T($);
      return (y == null ? void 0 : y.source_url) || null;
    }
    function D($) {
      window.open($, "_blank");
    }
    async function H() {
      if (!(!m.value || u.value)) {
        u.value = !0, h.value = null;
        try {
          await b(
            s.workflowName,
            m.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch ($) {
          h.value = $ instanceof Error ? $.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    async function _() {
      if (!(!m.value || u.value)) {
        u.value = !0, h.value = null;
        try {
          await b(
            s.workflowName,
            m.value.nodes_to_install,
            m.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch ($) {
          h.value = $ instanceof Error ? $.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return ue(E), ($, y) => (o(), p(Qe, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: h.value || void 0,
      onClose: y[1] || (y[1] = (k) => r("close"))
    }, {
      body: a(() => [
        m.value ? (o(), n(P, { key: 0 }, [
          y[5] || (y[5] = t("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          m.value.nodes_unresolved.length > 0 ? (o(), n("section", ts, [
            l(Le, { variant: "section" }, {
              default: a(() => [
                f("NODES (" + d(m.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", os, [
              y[2] || (y[2] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "✓"),
                t("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              t("div", as, [
                (o(!0), n(P, null, Y(m.value.nodes_unresolved, (k) => {
                  var w;
                  return o(), n("div", {
                    key: k.node_type,
                    class: "item"
                  }, [
                    t("div", ss, [
                      t("div", ns, d(((w = z(k)) == null ? void 0 : w.package_id) || k.node_type), 1),
                      z(k) ? (o(), n("div", ls, [
                        t("span", {
                          class: K(["confidence-badge", G(z(k).match_confidence)])
                        }, d(Math.round(z(k).match_confidence * 100)) + "% match ", 3),
                        t("span", is, d(z(k).match_type), 1),
                        t("span", rs, "Source: " + d(q(k)), 1)
                      ])) : v("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : v("", !0),
          m.value.models_unresolved.length > 0 ? (o(), n("section", cs, [
            l(Le, { variant: "section" }, {
              default: a(() => [
                f("MODELS (" + d(m.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", ds, [
              y[3] || (y[3] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "⚠"),
                t("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              t("div", us, [
                (o(!0), n(P, null, Y(m.value.models_unresolved, (k) => (o(), n("div", {
                  key: k.filename,
                  class: "item"
                }, [
                  t("div", ms, [
                    t("div", vs, d(k.filename), 1),
                    t("div", fs, [
                      k.expected_category ? (o(), n("span", gs, "Type: " + d(k.expected_category), 1)) : v("", !0),
                      T(k.filename) ? (o(), n("span", hs, " Size: ~" + d(T(k.filename).estimated_size_mb) + " MB ", 1)) : v("", !0)
                    ]),
                    C(k.filename) ? v("", !0) : (o(), n("div", ps, " No auto-download source configured "))
                  ]),
                  x(k.filename) ? (o(), n("div", ys, [
                    t("button", {
                      class: "link-btn",
                      onClick: (w) => D(x(k.filename))
                    }, " Open Source ↗ ", 8, bs)
                  ])) : v("", !0)
                ]))), 128))
              ])
            ])
          ])) : v("", !0),
          m.value.nodes_resolved.length > 0 || m.value.models_resolved.length > 0 ? (o(), n("section", ws, [
            l(Le, { variant: "section" }, {
              default: a(() => [
                f(" ALREADY AVAILABLE (" + d(m.value.nodes_resolved.length + m.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            t("div", ks, d(m.value.nodes_resolved.length) + " nodes and " + d(m.value.models_resolved.length) + " models are already installed ", 1)
          ])) : v("", !0),
          t("div", _s, [
            y[4] || (y[4] = t("div", { class: "summary-title" }, "This will:", -1)),
            t("ol", $s, [
              m.value.nodes_to_install.length ? (o(), n("li", Cs, " Install " + d(m.value.nodes_to_install.length) + " nodes (~" + d(m.value.estimated_time_seconds) + "s) ", 1)) : v("", !0),
              m.value.nodes_to_install.length ? (o(), n("li", xs, " Restart ComfyUI to load new nodes ")) : v("", !0),
              m.value.models_to_download.length ? (o(), n("li", Is, " You'll still need to download " + d(m.value.models_to_download.length) + " model(s) manually ", 1)) : v("", !0)
            ]),
            m.value.estimated_size_mb ? (o(), n("div", Ss, " Estimated download: " + d(m.value.estimated_size_mb) + " MB ", 1)) : v("", !0)
          ])
        ], 64)) : v("", !0)
      ]),
      footer: a(() => [
        l(ve, {
          variant: "secondary",
          onClick: y[0] || (y[0] = (k) => r("close"))
        }, {
          default: a(() => [...y[6] || (y[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m.value && m.value.nodes_to_install.length && m.value.models_to_download.length ? (o(), p(ve, {
          key: 0,
          variant: "secondary",
          disabled: u.value,
          loading: u.value,
          onClick: H
        }, {
          default: a(() => [...y[7] || (y[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : v("", !0),
        m.value && (m.value.nodes_to_install.length || m.value.models_to_download.length) ? (o(), p(ve, {
          key: 1,
          variant: "primary",
          disabled: u.value || m.value.models_to_download.length > 0 && !L.value,
          loading: u.value,
          onClick: _
        }, {
          default: a(() => [...y[8] || (y[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : v("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ls = /* @__PURE__ */ W(Es, [["__scopeId", "data-v-d68efb14"]]), zs = { class: "search-input-wrapper" }, Ms = ["value", "placeholder"], Ns = /* @__PURE__ */ O({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: i }) {
    const s = e, r = i, c = I(null);
    let b;
    function m(u) {
      const h = u.target.value;
      s.debounce > 0 ? (clearTimeout(b), b = window.setTimeout(() => {
        r("update:modelValue", h);
      }, s.debounce)) : r("update:modelValue", h);
    }
    function g() {
      var u;
      r("update:modelValue", ""), r("clear"), (u = c.value) == null || u.focus();
    }
    return ue(() => {
      s.autoFocus && c.value && c.value.focus();
    }), (u, h) => (o(), n("div", zs, [
      t("input", {
        ref_key: "inputRef",
        ref: c,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: _e(g, ["escape"])
      }, null, 40, Ms),
      e.clearable && e.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: g,
        title: "Clear search"
      }, " ✕ ")) : v("", !0)
    ]));
  }
}), Rs = /* @__PURE__ */ W(Ns, [["__scopeId", "data-v-266f857a"]]), Us = { class: "search-bar" }, Bs = /* @__PURE__ */ O({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (i, s) => (o(), n("div", Us, [
      l(Rs, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => i.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => i.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Oe = /* @__PURE__ */ W(Bs, [["__scopeId", "data-v-3d51bbfd"]]), Ds = { class: "section-group" }, Vs = {
  key: 0,
  class: "section-content"
}, Ts = /* @__PURE__ */ O({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: i }) {
    const s = e, r = i, c = I(s.initiallyExpanded);
    function b() {
      s.collapsible && (c.value = !c.value, r("toggle", c.value));
    }
    return (m, g) => (o(), n("section", Ds, [
      l(Be, {
        count: e.count,
        clickable: e.collapsible,
        expanded: c.value,
        onClick: b
      }, {
        default: a(() => [
          f(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || c.value ? (o(), n("div", Vs, [
        X(m.$slots, "default", {}, void 0, !0)
      ])) : v("", !0)
    ]));
  }
}), se = /* @__PURE__ */ W(Ts, [["__scopeId", "data-v-c48e33ed"]]), Os = { class: "item-header" }, Ws = {
  key: 0,
  class: "item-icon"
}, Fs = { class: "item-info" }, As = {
  key: 0,
  class: "item-title"
}, Ps = {
  key: 1,
  class: "item-subtitle"
}, Gs = {
  key: 0,
  class: "item-details"
}, Hs = {
  key: 1,
  class: "item-actions"
}, Ks = /* @__PURE__ */ O({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: i }) {
    const s = e, r = B(() => s.status ? `status-${s.status}` : "");
    return (c, b) => (o(), n("div", {
      class: K(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: b[0] || (b[0] = (m) => e.clickable && c.$emit("click"))
    }, [
      t("div", Os, [
        c.$slots.icon ? (o(), n("span", Ws, [
          X(c.$slots, "icon", {}, void 0, !0)
        ])) : v("", !0),
        t("div", Fs, [
          c.$slots.title ? (o(), n("div", As, [
            X(c.$slots, "title", {}, void 0, !0)
          ])) : v("", !0),
          c.$slots.subtitle ? (o(), n("div", Ps, [
            X(c.$slots, "subtitle", {}, void 0, !0)
          ])) : v("", !0)
        ])
      ]),
      c.$slots.details ? (o(), n("div", Gs, [
        X(c.$slots, "details", {}, void 0, !0)
      ])) : v("", !0),
      c.$slots.actions ? (o(), n("div", Hs, [
        X(c.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ], 2));
  }
}), ie = /* @__PURE__ */ W(Ks, [["__scopeId", "data-v-cc435e0e"]]), js = { class: "loading-state" }, qs = { class: "loading-message" }, Ys = /* @__PURE__ */ O({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (i, s) => (o(), n("div", js, [
      s[0] || (s[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", qs, d(e.message), 1)
    ]));
  }
}), $e = /* @__PURE__ */ W(Ys, [["__scopeId", "data-v-ad8436c9"]]), Js = { class: "error-state" }, Xs = { class: "error-message" }, Zs = /* @__PURE__ */ O({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (i, s) => (o(), n("div", Js, [
      s[2] || (s[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", Xs, d(e.message), 1),
      e.retry ? (o(), p(U, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => i.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : v("", !0)
    ]));
  }
}), Ce = /* @__PURE__ */ W(Zs, [["__scopeId", "data-v-5397be48"]]), Qs = /* @__PURE__ */ O({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: i }) {
    const s = i, { getWorkflows: r } = he(), c = I([]), b = I(!1), m = I(null), g = I(""), u = I(!1), h = I(!1), L = I(!1), E = I(!1), z = I(null), G = B(
      () => c.value.filter((V) => V.status === "broken")
    ), q = B(
      () => c.value.filter((V) => V.status === "new")
    ), T = B(
      () => c.value.filter((V) => V.status === "modified")
    ), C = B(
      () => c.value.filter((V) => V.status === "synced")
    ), x = B(() => {
      if (!g.value.trim()) return c.value;
      const V = g.value.toLowerCase();
      return c.value.filter((R) => R.name.toLowerCase().includes(V));
    }), D = B(
      () => G.value.filter(
        (V) => !g.value.trim() || V.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), H = B(
      () => q.value.filter(
        (V) => !g.value.trim() || V.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), _ = B(
      () => T.value.filter(
        (V) => !g.value.trim() || V.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), $ = B(
      () => C.value.filter(
        (V) => !g.value.trim() || V.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), y = B(
      () => h.value ? $.value : $.value.slice(0, 5)
    );
    async function k() {
      b.value = !0, m.value = null;
      try {
        c.value = await r();
      } catch (V) {
        m.value = V instanceof Error ? V.message : "Failed to load workflows";
      } finally {
        b.value = !1;
      }
    }
    function w(V) {
      z.value = V, L.value = !0;
    }
    function N(V) {
      z.value = V, E.value = !0;
    }
    function M() {
      alert("Bulk resolution not yet implemented");
    }
    function ce() {
      s("refresh");
    }
    return ue(k), (V, R) => (o(), n(P, null, [
      l(fe, null, {
        header: a(() => [
          l(ge, { title: "WORKFLOWS" }, {
            actions: a(() => [
              G.value.length > 0 ? (o(), p(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...R[7] || (R[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : v("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          l(Oe, {
            modelValue: g.value,
            "onUpdate:modelValue": R[0] || (R[0] = (j) => g.value = j),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          b.value ? (o(), p($e, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), p(Ce, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            D.value.length ? (o(), p(se, {
              key: 0,
              title: "BROKEN",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(D.value, (j) => (o(), p(ie, {
                  key: j.name,
                  status: "broken"
                }, {
                  icon: a(() => [...R[8] || (R[8] = [
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
                      onClick: (oe) => N(j.name)
                    }, {
                      default: a(() => [...R[9] || (R[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => w(j.name)
                    }, {
                      default: a(() => [...R[10] || (R[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            H.value.length ? (o(), p(se, {
              key: 1,
              title: "NEW",
              count: H.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(H.value, (j) => (o(), p(ie, {
                  key: j.name,
                  status: "new"
                }, {
                  icon: a(() => [...R[11] || (R[11] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(d(j.name), 1)
                  ]),
                  subtitle: a(() => [...R[12] || (R[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => w(j.name)
                    }, {
                      default: a(() => [...R[13] || (R[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            _.value.length ? (o(), p(se, {
              key: 2,
              title: "MODIFIED",
              count: _.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(_.value, (j) => (o(), p(ie, {
                  key: j.name,
                  status: "modified"
                }, {
                  icon: a(() => [...R[14] || (R[14] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(d(j.name), 1)
                  ]),
                  subtitle: a(() => [...R[15] || (R[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => w(j.name)
                    }, {
                      default: a(() => [...R[16] || (R[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            $.value.length ? (o(), p(se, {
              key: 3,
              title: "SYNCED",
              count: $.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: R[2] || (R[2] = (j) => u.value = j)
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(y.value, (j) => (o(), p(ie, {
                  key: j.name,
                  status: "synced"
                }, {
                  icon: a(() => [...R[17] || (R[17] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(d(j.name), 1)
                  ]),
                  subtitle: a(() => [...R[18] || (R[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => w(j.name)
                    }, {
                      default: a(() => [...R[19] || (R[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !h.value && $.value.length > 5 ? (o(), p(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: R[1] || (R[1] = (j) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + d($.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : v("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : v("", !0),
            x.value.length ? v("", !0) : (o(), p(ye, {
              key: 4,
              icon: "📭",
              message: g.value ? `No workflows match '${g.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      L.value && z.value ? (o(), p(es, {
        key: 0,
        "workflow-name": z.value,
        onClose: R[3] || (R[3] = (j) => L.value = !1),
        onResolve: R[4] || (R[4] = (j) => N(z.value))
      }, null, 8, ["workflow-name"])) : v("", !0),
      E.value && z.value ? (o(), p(Ls, {
        key: 1,
        "workflow-name": z.value,
        onClose: R[5] || (R[5] = (j) => E.value = !1),
        onInstall: ce,
        onRefresh: R[6] || (R[6] = (j) => s("refresh"))
      }, null, 8, ["workflow-name"])) : v("", !0)
    ], 64));
  }
}), en = /* @__PURE__ */ W(Qs, [["__scopeId", "data-v-2251d776"]]), tn = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (i, s) => (o(), n("span", {
      class: K(["detail-label"]),
      style: He({ minWidth: e.minWidth })
    }, [
      X(i.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), rt = /* @__PURE__ */ W(tn, [["__scopeId", "data-v-75e9eeb8"]]), on = /* @__PURE__ */ O({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (i, s) => (o(), n("span", {
      class: K(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      X(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ve = /* @__PURE__ */ W(on, [["__scopeId", "data-v-2f186e4c"]]), an = { class: "detail-row" }, sn = /* @__PURE__ */ O({
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
    return (i, s) => (o(), n("div", an, [
      l(rt, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          f(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), p(Ve, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          f(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : X(i.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), J = /* @__PURE__ */ W(sn, [["__scopeId", "data-v-ef15664a"]]), nn = /* @__PURE__ */ O({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (i, s) => (o(), n("div", {
      class: K(["summary-bar", e.variant])
    }, [
      X(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ze = /* @__PURE__ */ W(nn, [["__scopeId", "data-v-ccb7816e"]]), ln = { class: "popover-header" }, rn = { class: "popover-title" }, cn = { class: "popover-content" }, dn = {
  key: 0,
  class: "popover-actions"
}, un = /* @__PURE__ */ O({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (i, s) => (o(), p(Ze, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => i.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: He({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = we(() => {
          }, ["stop"]))
        }, [
          t("div", ln, [
            t("h4", rn, d(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => i.$emit("close"))
            }, "✕")
          ]),
          t("div", cn, [
            X(i.$slots, "content", {}, void 0, !0)
          ]),
          i.$slots.actions ? (o(), n("div", dn, [
            X(i.$slots, "actions", {}, void 0, !0)
          ])) : v("", !0)
        ], 4)
      ])) : v("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ W(un, [["__scopeId", "data-v-057df510"]]), mn = /* @__PURE__ */ O({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: i }) {
    const s = i, { getEnvironmentModels: r, getStatus: c } = he(), b = I([]), m = I([]), g = I("production"), u = I(!1), h = I(null), L = I(""), E = I(!1);
    function z() {
      E.value = !1, s("navigate", "model-index");
    }
    const G = B(
      () => b.value.reduce((w, N) => w + (N.size_mb || N.size || 0), 0)
    ), q = B(() => {
      if (!L.value.trim()) return b.value;
      const w = L.value.toLowerCase();
      return b.value.filter((N) => N.filename.toLowerCase().includes(w));
    }), T = B(() => {
      if (!L.value.trim()) return m.value;
      const w = L.value.toLowerCase();
      return m.value.filter((N) => N.filename.toLowerCase().includes(w));
    }), C = B(
      () => q.value.filter((w) => w.type === "checkpoints" || w.category === "checkpoints")
    ), x = B(
      () => q.value.filter((w) => w.type === "loras" || w.category === "loras")
    ), D = B(
      () => q.value.filter(
        (w) => w.type !== "checkpoints" && w.category !== "checkpoints" && w.type !== "loras" && w.category !== "loras"
      )
    );
    function H(w) {
      return w ? w >= 1024 ? `${(w / 1024).toFixed(1)} GB` : `${w.toFixed(0)} MB` : "Unknown";
    }
    function _(w) {
      s("navigate", "model-index");
    }
    function $(w) {
      s("navigate", "model-index");
    }
    function y(w) {
      alert(`Download functionality not yet implemented for ${w}`);
    }
    async function k() {
      u.value = !0, h.value = null;
      try {
        const w = await r();
        b.value = w, m.value = [];
        const N = await c();
        g.value = N.environment || "production";
      } catch (w) {
        h.value = w instanceof Error ? w.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return ue(k), (w, N) => (o(), n(P, null, [
      l(fe, null, {
        header: a(() => [
          l(ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (M) => E.value = !0)
          })
        ]),
        search: a(() => [
          l(Oe, {
            modelValue: L.value,
            "onUpdate:modelValue": N[1] || (N[1] = (M) => L.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), p($e, {
            key: 0,
            message: "Loading environment models..."
          })) : h.value ? (o(), p(Ce, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            b.value.length ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(b.value.length) + " models • " + d(H(G.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : v("", !0),
            C.value.length ? (o(), p(se, {
              key: 1,
              title: "CHECKPOINTS",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(C.value, (M) => (o(), p(ie, {
                  key: M.sha256 || M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[3] || (N[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(H(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => [
                    l(J, {
                      label: "Used by:",
                      value: (M.used_by || M.used_in_workflows || []).join(", ") || "Not used"
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
                      onClick: (ce) => _(M.sha256 || M.sha256_hash || M.hash || "")
                    }, {
                      default: a(() => [...N[4] || (N[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            x.value.length ? (o(), p(se, {
              key: 2,
              title: "LORAS",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(x.value, (M) => (o(), p(ie, {
                  key: M.sha256 || M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[5] || (N[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(H(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => [
                    l(J, {
                      label: "Used by:",
                      value: (M.used_by || M.used_in_workflows || []).join(", ") || "Not used"
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
                      onClick: (ce) => _(M.sha256 || M.sha256_hash || M.hash || "")
                    }, {
                      default: a(() => [...N[6] || (N[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            D.value.length ? (o(), p(se, {
              key: 3,
              title: "OTHER",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(D.value, (M) => (o(), p(ie, {
                  key: M.sha256 || M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[7] || (N[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(H(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => [
                    l(J, {
                      label: "Type:",
                      value: M.type
                    }, null, 8, ["value"]),
                    l(J, {
                      label: "Used by:",
                      value: (M.used_by || M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ce) => _(M.sha256 || M.sha256_hash || M.hash || "")
                    }, {
                      default: a(() => [...N[8] || (N[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            T.value.length ? (o(), p(se, {
              key: 4,
              title: "MISSING",
              count: T.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(T.value, (M) => (o(), p(ie, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...N[9] || (N[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(d(M.filename), 1)
                  ]),
                  subtitle: a(() => [...N[10] || (N[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var ce;
                    return [
                      l(J, {
                        label: "Required by:",
                        value: ((ce = M.workflow_names) == null ? void 0 : ce.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    l(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ce) => y(M.filename)
                    }, {
                      default: a(() => [...N[11] || (N[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => $(M.filename)
                    }, {
                      default: a(() => [...N[12] || (N[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            !q.value.length && !T.value.length ? (o(), p(ye, {
              key: 5,
              icon: "📭",
              message: L.value ? `No models match '${L.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Me, {
        show: E.value,
        title: "About Environment Models",
        onClose: N[2] || (N[2] = (M) => E.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            N[13] || (N[13] = f(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(g.value) + '"', 1),
            N[14] || (N[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          l(U, {
            variant: "primary",
            onClick: z
          }, {
            default: a(() => [...N[15] || (N[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), vn = /* @__PURE__ */ W(mn, [["__scopeId", "data-v-865641a4"]]), fn = /* @__PURE__ */ O({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: i } = he(), s = I([]), r = I(!1), c = I(null), b = I(""), m = I(!1), g = B(
      () => s.value.reduce((y, k) => y + (k.size_mb || k.size || 0), 0)
    ), u = B(() => {
      const y = /* @__PURE__ */ new Set();
      return s.value.forEach((k) => {
        k.used_in_environments && k.used_in_environments.length > 0 && k.used_in_environments.forEach((w) => y.add(w.env_name));
      }), y.size;
    }), h = B(() => {
      if (!b.value.trim()) return s.value;
      const y = b.value.toLowerCase();
      return s.value.filter((k) => {
        const w = k, N = k.sha256 || w.sha256_hash || "";
        return k.filename.toLowerCase().includes(y) || N.toLowerCase().includes(y);
      });
    }), L = B(
      () => h.value.filter((y) => y.type === "checkpoints")
    ), E = B(
      () => h.value.filter((y) => y.type === "loras")
    ), z = B(
      () => h.value.filter((y) => y.type !== "checkpoints" && y.type !== "loras")
    );
    function G(y) {
      return y ? y >= 1024 ? `${(y / 1024).toFixed(1)} GB` : `${y.toFixed(0)} MB` : "Unknown";
    }
    function q(y) {
      const k = y, w = y.used_in_workflows || k.used_by || [];
      return !w || w.length === 0 ? "Not used" : `${w.length} workflow(s)`;
    }
    function T(y) {
      navigator.clipboard.writeText(y), alert("Hash copied to clipboard");
    }
    function C(y) {
      prompt("Enter model source URL:", y.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function x(y) {
      const k = y, w = y.used_in_workflows || k.used_by || [], N = w && w.length > 0 ? `

⚠ WARNING: This model is used by ${w.length} workflow(s):
${w.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${y.filename}?${N}

This will free ${G(k.size_mb || y.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function D() {
      alert("Scan for models not yet implemented");
    }
    function H() {
      alert("Change directory not yet implemented");
    }
    function _() {
      alert("Download new model not yet implemented");
    }
    async function $() {
      r.value = !0, c.value = null;
      try {
        s.value = await i(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", L.value), console.log("Filtered loras:", E.value), console.log("Filtered other:", z.value);
      } catch (y) {
        c.value = y instanceof Error ? y.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ue($), (y, k) => (o(), n(P, null, [
      l(fe, null, {
        header: a(() => [
          l(ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: k[0] || (k[0] = (w) => m.value = !0)
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
                onClick: H
              }, {
                default: a(() => [...k[4] || (k[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: _
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
          l(Oe, {
            modelValue: b.value,
            "onUpdate:modelValue": k[1] || (k[1] = (w) => b.value = w),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), p($e, {
            key: 0,
            message: "Loading workspace models..."
          })) : c.value ? (o(), p(Ce, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            s.value.length ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(s.value.length) + " models • " + d(G(g.value)) + " • Used in " + d(u.value) + " environments ", 1)
              ]),
              _: 1
            })) : v("", !0),
            L.value.length ? (o(), p(se, {
              key: 1,
              title: "CHECKPOINTS",
              count: L.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(L.value, (w) => (o(), p(ie, {
                  key: w.sha256 || w.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[6] || (k[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(w.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(G(w.size_mb || w.size)), 1)
                  ]),
                  details: a(() => {
                    var N, M;
                    return [
                      w.sha256 || w.sha256_hash ? (o(), p(J, {
                        key: 0,
                        label: "SHA256:",
                        value: (w.sha256 || w.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : v("", !0),
                      l(J, {
                        label: "Used in:",
                        value: q(w)
                      }, null, 8, ["value"]),
                      w.source_url || (N = w.sources) != null && N[0] ? (o(), p(J, {
                        key: 1,
                        label: "Source URL:",
                        value: w.source_url || ((M = w.sources) == null ? void 0 : M[0])
                      }, null, 8, ["value"])) : (o(), p(J, {
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
                      onClick: (N) => C(w)
                    }, {
                      default: a(() => [...k[8] || (k[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w.sha256 || w.sha256_hash ? (o(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => T(w.sha256 || w.sha256_hash)
                    }, {
                      default: a(() => [...k[9] || (k[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => x(w)
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
            }, 8, ["count"])) : v("", !0),
            E.value.length ? (o(), p(se, {
              key: 2,
              title: "LORAS",
              count: E.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(E.value, (w) => (o(), p(ie, {
                  key: w.sha256 || w.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[11] || (k[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(w.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(G(w.size_mb || w.size)), 1)
                  ]),
                  details: a(() => {
                    var N, M;
                    return [
                      w.sha256 || w.sha256_hash ? (o(), p(J, {
                        key: 0,
                        label: "SHA256:",
                        value: (w.sha256 || w.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : v("", !0),
                      l(J, {
                        label: "Used in:",
                        value: q(w)
                      }, null, 8, ["value"]),
                      w.source_url || (N = w.sources) != null && N[0] ? (o(), p(J, {
                        key: 1,
                        label: "Source URL:",
                        value: w.source_url || ((M = w.sources) == null ? void 0 : M[0])
                      }, null, 8, ["value"])) : (o(), p(J, {
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
                      onClick: (N) => C(w)
                    }, {
                      default: a(() => [...k[13] || (k[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w.sha256 || w.sha256_hash ? (o(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => T(w.sha256 || w.sha256_hash)
                    }, {
                      default: a(() => [...k[14] || (k[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => x(w)
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
            }, 8, ["count"])) : v("", !0),
            z.value.length ? (o(), p(se, {
              key: 3,
              title: "OTHER",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(z.value, (w) => (o(), p(ie, {
                  key: w.sha256 || w.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[16] || (k[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(w.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(d(G(w.size_mb || w.size)), 1)
                  ]),
                  details: a(() => [
                    l(J, {
                      label: "Type:",
                      value: w.type
                    }, null, 8, ["value"]),
                    w.sha256 || w.sha256_hash ? (o(), p(J, {
                      key: 0,
                      label: "SHA256:",
                      value: (w.sha256 || w.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : v("", !0),
                    l(J, {
                      label: "Used in:",
                      value: q(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => C(w)
                    }, {
                      default: a(() => [...k[17] || (k[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w.sha256 || w.sha256_hash ? (o(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => T(w.sha256 || w.sha256_hash)
                    }, {
                      default: a(() => [...k[18] || (k[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => x(w)
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
            }, 8, ["count"])) : v("", !0),
            h.value.length ? v("", !0) : (o(), p(ye, {
              key: 4,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      l(Me, {
        show: m.value,
        title: "About Workspace Model Index",
        onClose: k[2] || (k[2] = (w) => m.value = !1)
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
}), gn = /* @__PURE__ */ W(fn, [["__scopeId", "data-v-5a24af01"]]), hn = { key: 0 }, pn = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, yn = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, bn = /* @__PURE__ */ O({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: i, installNode: s, updateNode: r, uninstallNode: c } = he(), b = I({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), m = I(!1), g = I(null), u = I(""), h = I(!1), L = B(() => {
      if (!u.value.trim()) return b.value.nodes;
      const _ = u.value.toLowerCase();
      return b.value.nodes.filter(
        ($) => {
          var y, k;
          return $.name.toLowerCase().includes(_) || ((y = $.description) == null ? void 0 : y.toLowerCase().includes(_)) || ((k = $.repository) == null ? void 0 : k.toLowerCase().includes(_));
        }
      );
    }), E = B(
      () => L.value.filter((_) => _.installed)
    ), z = B(
      () => L.value.filter((_) => !_.installed)
    );
    function G(_) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[_] || _;
    }
    function q(_) {
      return !_.used_in_workflows || _.used_in_workflows.length === 0 ? "Not used in any workflows" : _.used_in_workflows.length === 1 ? _.used_in_workflows[0] : `${_.used_in_workflows.length} workflows`;
    }
    function T(_) {
      window.open(_, "_blank");
    }
    async function C(_) {
      if (confirm(`Install node "${_}"?

This will download and install the node from its repository.`))
        try {
          m.value = !0;
          const $ = await s(_);
          $.status === "success" ? (alert(`Node "${_}" installed successfully!`), await H()) : alert(`Failed to install node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error installing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function x(_) {
      if (confirm(`Check for updates for "${_}"?`))
        try {
          m.value = !0;
          const $ = await r(_);
          $.status === "success" ? (alert(`Node "${_}" is up to date or has been updated!`), await H()) : alert(`Update check failed: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error checking for updates: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function D(_) {
      if (confirm(`Uninstall node "${_}"?

This will remove the node from this environment.`))
        try {
          m.value = !0;
          const $ = await c(_);
          $.status === "success" ? (alert(`Node "${_}" uninstalled successfully!`), await H()) : alert(`Failed to uninstall node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error uninstalling node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function H() {
      m.value = !0, g.value = null;
      try {
        b.value = await i();
      } catch (_) {
        g.value = _ instanceof Error ? _.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return ue(H), (_, $) => (o(), n(P, null, [
      l(fe, null, {
        header: a(() => [
          l(ge, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (y) => h.value = !0)
          })
        ]),
        search: a(() => [
          l(Oe, {
            modelValue: u.value,
            "onUpdate:modelValue": $[1] || ($[1] = (y) => u.value = y),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (o(), p($e, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : g.value ? (o(), p(Ce, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            b.value.total_count ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(b.value.total_count) + " nodes • " + d(b.value.installed_count) + " installed • " + d(b.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : v("", !0),
            E.value.length ? (o(), p(se, {
              key: 1,
              title: "INSTALLED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(E.value, (y) => (o(), p(ie, {
                  key: y.name,
                  status: "synced"
                }, {
                  icon: a(() => [...$[4] || ($[4] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(d(y.name), 1)
                  ]),
                  subtitle: a(() => [
                    y.version ? (o(), n("span", hn, "v" + d(y.version), 1)) : (o(), n("span", pn, "version unknown")),
                    y.source ? (o(), n("span", yn, " • " + d(G(y.source)), 1)) : v("", !0)
                  ]),
                  details: a(() => [
                    y.description ? (o(), p(J, {
                      key: 0,
                      label: "Description:",
                      value: y.description
                    }, null, 8, ["value"])) : v("", !0),
                    y.repository ? (o(), p(J, {
                      key: 1,
                      label: "Repository:",
                      value: y.repository
                    }, null, 8, ["value"])) : v("", !0),
                    l(J, {
                      label: "Used by:",
                      value: q(y)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    y.repository ? (o(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => T(y.repository)
                    }, {
                      default: a(() => [...$[5] || ($[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    y.source === "registry" ? (o(), p(U, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => x(y.name)
                    }, {
                      default: a(() => [...$[6] || ($[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    y.source !== "unknown" ? (o(), p(U, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (k) => D(y.name)
                    }, {
                      default: a(() => [...$[7] || ($[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            z.value.length ? (o(), p(se, {
              key: 2,
              title: "MISSING",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(z.value, (y) => (o(), p(ie, {
                  key: y.name,
                  status: "missing"
                }, {
                  icon: a(() => [...$[8] || ($[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(d(y.name), 1)
                  ]),
                  subtitle: a(() => [...$[9] || ($[9] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    y.description ? (o(), p(J, {
                      key: 0,
                      label: "Description:",
                      value: y.description
                    }, null, 8, ["value"])) : v("", !0),
                    y.repository ? (o(), p(J, {
                      key: 1,
                      label: "Repository:",
                      value: y.repository
                    }, null, 8, ["value"])) : v("", !0),
                    l(J, {
                      label: "Required by:",
                      value: q(y)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    y.download_url ? (o(), p(U, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (k) => C(y.name)
                    }, {
                      default: a(() => [...$[10] || ($[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    y.repository ? (o(), p(U, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (k) => T(y.repository)
                    }, {
                      default: a(() => [...$[11] || ($[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            !E.value.length && !z.value.length ? (o(), p(ye, {
              key: 3,
              icon: "📭",
              message: u.value ? `No nodes match '${u.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Me, {
        show: h.value,
        title: "About Git-Tracked Nodes",
        onClose: $[3] || ($[3] = (y) => h.value = !1)
      }, {
        content: a(() => [...$[12] || ($[12] = [
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
            onClick: $[2] || ($[2] = (y) => h.value = !1)
          }, {
            default: a(() => [...$[13] || ($[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), wn = /* @__PURE__ */ W(bn, [["__scopeId", "data-v-c480e2c1"]]), kn = { class: "remote-url-display" }, _n = ["title"], $n = ["title"], Cn = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, xn = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, In = /* @__PURE__ */ O({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const i = e, s = I(!1), r = B(() => {
      if (i.url.length <= i.maxLength)
        return i.url;
      const b = i.url.slice(0, Math.floor(i.maxLength * 0.6)), m = i.url.slice(-Math.floor(i.maxLength * 0.3));
      return `${b}...${m}`;
    });
    async function c() {
      try {
        await navigator.clipboard.writeText(i.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (b) {
        console.error("Failed to copy URL:", b);
      }
    }
    return (b, m) => (o(), n("div", kn, [
      t("span", {
        class: "url-text",
        title: e.url
      }, d(r.value), 9, _n),
      t("button", {
        class: K(["copy-btn", { copied: s.value }]),
        onClick: c,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", xn, [...m[1] || (m[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Cn, [...m[0] || (m[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, $n)
    ]));
  }
}), gt = /* @__PURE__ */ W(In, [["__scopeId", "data-v-7768a58d"]]), Sn = { class: "remote-title" }, En = {
  key: 0,
  class: "default-badge"
}, Ln = {
  key: 1,
  class: "sync-badge"
}, zn = {
  key: 0,
  class: "ahead"
}, Mn = {
  key: 1,
  class: "behind"
}, Nn = {
  key: 0,
  class: "tracking-info"
}, Rn = /* @__PURE__ */ O({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: i }) {
    const s = e, r = B(() => s.fetchingRemote === s.remote.name), c = B(() => s.remote.is_default), b = B(() => !!s.trackingBranch);
    function m(g) {
      const u = new Date(g), L = (/* @__PURE__ */ new Date()).getTime() - u.getTime(), E = Math.floor(L / 6e4);
      if (E < 1) return "Just now";
      if (E < 60) return `${E}m ago`;
      const z = Math.floor(E / 60);
      if (z < 24) return `${z}h ago`;
      const G = Math.floor(z / 24);
      return G < 7 ? `${G}d ago` : u.toLocaleDateString();
    }
    return (g, u) => (o(), p(ie, {
      status: c.value ? "synced" : void 0
    }, {
      icon: a(() => [
        f(d(c.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        t("div", Sn, [
          t("span", null, d(e.remote.name), 1),
          c.value ? (o(), n("span", En, "DEFAULT")) : v("", !0),
          e.syncStatus ? (o(), n("span", Ln, [
            e.syncStatus.ahead > 0 ? (o(), n("span", zn, "↑" + d(e.syncStatus.ahead), 1)) : v("", !0),
            e.syncStatus.behind > 0 ? (o(), n("span", Mn, "↓" + d(e.syncStatus.behind), 1)) : v("", !0)
          ])) : v("", !0)
        ])
      ]),
      subtitle: a(() => [
        b.value ? (o(), n("span", Nn, " Tracking: " + d(e.trackingBranch), 1)) : v("", !0)
      ]),
      details: a(() => {
        var h;
        return [
          l(J, { label: "Fetch:" }, {
            default: a(() => [
              l(gt, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (o(), p(J, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              l(gt, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : v("", !0),
          (h = e.syncStatus) != null && h.last_fetch ? (o(), p(J, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              t("span", null, d(m(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : v("", !0)
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
        c.value ? v("", !0) : (o(), p(U, {
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
}), Un = /* @__PURE__ */ W(Rn, [["__scopeId", "data-v-17362e45"]]), Bn = ["for"], Dn = {
  key: 0,
  class: "base-form-field-required"
}, Vn = { class: "base-form-field-input" }, Tn = {
  key: 1,
  class: "base-form-field-error"
}, On = {
  key: 2,
  class: "base-form-field-hint"
}, Wn = /* @__PURE__ */ O({
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
    const i = e, s = B(() => i.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, c) => (o(), n("div", {
      class: K(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        f(d(e.label) + " ", 1),
        e.required ? (o(), n("span", Dn, "*")) : v("", !0)
      ], 8, Bn)) : v("", !0),
      t("div", Vn, [
        X(r.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (o(), n("span", Tn, d(e.error), 1)) : e.hint ? (o(), n("span", On, d(e.hint), 1)) : v("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ W(Wn, [["__scopeId", "data-v-9a1cf296"]]), Fn = ["type", "value", "placeholder", "disabled"], An = {
  key: 0,
  class: "base-input-error"
}, Pn = /* @__PURE__ */ O({
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
    return (i, s) => (o(), n("div", {
      class: K(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: K(["base-input", { error: !!e.error }]),
        onInput: s[0] || (s[0] = (r) => i.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = _e((r) => i.$emit("enter"), ["enter"])),
          s[2] || (s[2] = _e((r) => i.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Fn),
      e.error ? (o(), n("span", An, d(e.error), 1)) : v("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ W(Pn, [["__scopeId", "data-v-9ba02cdc"]]), Gn = { class: "remote-form" }, Hn = { class: "form-header" }, Kn = { class: "form-body" }, jn = {
  key: 0,
  class: "form-error"
}, qn = { class: "form-actions" }, Yn = /* @__PURE__ */ O({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: i }) {
    const s = e, r = i, c = I({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), b = I(!1), m = I(null);
    Ut(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      c.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const g = B(() => c.value.name.trim() !== "" && c.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!g.value || b.value)) {
        m.value = null, b.value = !0;
        try {
          r("submit", c.value);
        } catch (h) {
          m.value = h instanceof Error ? h.message : "Failed to submit form";
        } finally {
          b.value = !1;
        }
      }
    }
    return (h, L) => (o(), n("div", Gn, [
      t("div", Hn, [
        l(Be, null, {
          default: a(() => [
            f(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Kn, [
        l(nt, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            l(lt, {
              modelValue: c.value.name,
              "onUpdate:modelValue": L[0] || (L[0] = (E) => c.value.name = E),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        l(nt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            l(lt, {
              modelValue: c.value.fetchUrl,
              "onUpdate:modelValue": L[1] || (L[1] = (E) => c.value.fetchUrl = E),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(nt, { label: "Push URL (optional)" }, {
          default: a(() => [
            l(lt, {
              modelValue: c.value.pushUrl,
              "onUpdate:modelValue": L[2] || (L[2] = (E) => c.value.pushUrl = E),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), n("div", jn, d(m.value), 1)) : v("", !0)
      ]),
      t("div", qn, [
        l(U, {
          variant: "primary",
          size: "md",
          disabled: !g.value,
          loading: b.value,
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
          onClick: L[3] || (L[3] = (E) => h.$emit("cancel"))
        }, {
          default: a(() => [...L[4] || (L[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Jn = /* @__PURE__ */ W(Yn, [["__scopeId", "data-v-56021b18"]]), Xn = { key: 0 }, Zn = /* @__PURE__ */ O({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: i,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: b,
      getRemoteSyncStatus: m
    } = he(), g = I([]), u = I(null), h = I({}), L = I(!1), E = I(null), z = I(""), G = I(!1), q = I(null), T = I(!1), C = I("add"), x = I({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = B(() => {
      if (!z.value.trim()) return g.value;
      const V = z.value.toLowerCase();
      return g.value.filter(
        (R) => R.name.toLowerCase().includes(V) || R.fetch_url.toLowerCase().includes(V) || R.push_url.toLowerCase().includes(V)
      );
    });
    function H(V) {
      var R;
      return ((R = u.value) == null ? void 0 : R.remote) === V;
    }
    async function _() {
      L.value = !0, E.value = null;
      try {
        const V = await i();
        g.value = V.remotes, u.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (R) => {
            const j = await m(R.name);
            j && (h.value[R.name] = j);
          })
        );
      } catch (V) {
        E.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        L.value = !1;
      }
    }
    function $() {
      C.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, T.value = !0;
    }
    function y(V) {
      const R = g.value.find((j) => j.name === V);
      R && (C.value = "edit", x.value = {
        name: R.name,
        fetchUrl: R.fetch_url,
        pushUrl: R.push_url
      }, T.value = !0);
    }
    async function k(V) {
      try {
        C.value === "add" ? await s(V.name, V.fetchUrl) : await c(V.name, V.fetchUrl, V.pushUrl || void 0), T.value = !1, await _();
      } catch (R) {
        E.value = R instanceof Error ? R.message : "Operation failed";
      }
    }
    function w() {
      T.value = !1, x.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function N(V) {
      q.value = V;
      try {
        await b(V);
        const R = await m(V);
        R && (h.value[V] = R);
      } catch (R) {
        E.value = R instanceof Error ? R.message : "Fetch failed";
      } finally {
        q.value = null;
      }
    }
    async function M(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await r(V), await _();
        } catch (R) {
          E.value = R instanceof Error ? R.message : "Failed to remove remote";
        }
    }
    function ce() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ue(_), (V, R) => (o(), n(P, null, [
      l(fe, null, {
        header: a(() => [
          l(ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (j) => G.value = !0)
          }, {
            actions: a(() => [
              T.value ? v("", !0) : (o(), p(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: a(() => [...R[3] || (R[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          T.value ? v("", !0) : (o(), p(Oe, {
            key: 0,
            modelValue: z.value,
            "onUpdate:modelValue": R[1] || (R[1] = (j) => z.value = j),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          L.value ? (o(), p($e, {
            key: 0,
            message: "Loading remotes..."
          })) : E.value ? (o(), p(Ce, {
            key: 1,
            message: E.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            T.value ? (o(), p(Jn, {
              key: 0,
              mode: C.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: k,
              onCancel: w
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : v("", !0),
            g.value.length && !T.value ? (o(), p(ze, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(g.value.length) + " remote" + d(g.value.length !== 1 ? "s" : "") + " ", 1),
                u.value ? (o(), n("span", Xn, " • Tracking: " + d(u.value.remote) + "/" + d(u.value.branch), 1)) : v("", !0)
              ]),
              _: 1
            })) : v("", !0),
            D.value.length && !T.value ? (o(), p(se, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, Y(D.value, (j) => {
                  var oe;
                  return o(), p(Un, {
                    key: j.name,
                    remote: j,
                    "sync-status": h.value[j.name],
                    "tracking-branch": H(j.name) ? (oe = u.value) == null ? void 0 : oe.branch : void 0,
                    "fetching-remote": q.value,
                    onFetch: N,
                    onEdit: y,
                    onRemove: M
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            !D.value.length && !T.value ? (o(), p(ye, {
              key: 3,
              icon: "🌐",
              message: z.value ? `No remotes match '${z.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                l(U, {
                  variant: "primary",
                  onClick: $
                }, {
                  default: a(() => [...R[4] || (R[4] = [
                    f(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Me, {
        show: G.value,
        title: "About Git Remotes",
        onClose: R[2] || (R[2] = (j) => G.value = !1)
      }, {
        content: a(() => [...R[5] || (R[5] = [
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
            onClick: ce
          }, {
            default: a(() => [...R[6] || (R[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qn = /* @__PURE__ */ W(Zn, [["__scopeId", "data-v-a75719bb"]]), el = { class: "setting-info" }, tl = { class: "setting-label" }, ol = {
  key: 0,
  class: "required-marker"
}, al = {
  key: 0,
  class: "setting-description"
}, sl = { class: "setting-control" }, nl = /* @__PURE__ */ O({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (i, s) => (o(), n("div", {
      class: K(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", el, [
        t("div", tl, [
          f(d(e.label) + " ", 1),
          e.required ? (o(), n("span", ol, "*")) : v("", !0)
        ]),
        e.description ? (o(), n("div", al, d(e.description), 1)) : v("", !0)
      ]),
      t("div", sl, [
        X(i.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ae = /* @__PURE__ */ W(nl, [["__scopeId", "data-v-cb5d236c"]]), ll = { class: "toggle" }, il = ["checked", "disabled"], rl = /* @__PURE__ */ O({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (i, s) => (o(), n("label", ll, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: s[0] || (s[0] = (r) => i.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, il),
      s[1] || (s[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), me = /* @__PURE__ */ W(rl, [["__scopeId", "data-v-71c0f550"]]), cl = { class: "settings-section" }, dl = { class: "settings-section" }, ul = { class: "settings-section" }, ml = { class: "settings-section" }, vl = { class: "settings-section" }, fl = { class: "settings-section" }, gl = /* @__PURE__ */ O({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const i = I(!1), s = I(null), r = I(null), c = I({
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
    }), b = I(null), m = B(() => b.value ? JSON.stringify(c.value) !== JSON.stringify(b.value) : !1), g = [
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
    ], L = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], E = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], z = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function G() {
      i.value = !0, s.value = null;
      try {
        await new Promise((C) => setTimeout(C, 500)), b.value = JSON.parse(JSON.stringify(c.value));
      } catch (C) {
        s.value = C instanceof Error ? C.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function q() {
      r.value = null;
      try {
        await new Promise((C) => setTimeout(C, 300)), b.value = JSON.parse(JSON.stringify(c.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (C) {
        r.value = {
          type: "error",
          message: C instanceof Error ? C.message : "Failed to save settings"
        };
      }
    }
    function T() {
      b.value && (c.value = JSON.parse(JSON.stringify(b.value)), r.value = null);
    }
    return ue(G), (C, x) => (o(), p(fe, null, {
      header: a(() => [
        l(ge, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            l(U, {
              variant: "primary",
              size: "sm",
              disabled: !m.value,
              onClick: q
            }, {
              default: a(() => [...x[19] || (x[19] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m.value ? (o(), p(U, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: T
            }, {
              default: a(() => [...x[20] || (x[20] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : v("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), p($e, {
          key: 0,
          message: "Loading workspace settings..."
        })) : s.value ? (o(), p(Ce, {
          key: 1,
          message: s.value,
          retry: !0,
          onRetry: G
        }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
          l(se, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              t("div", cl, [
                l(ae, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(De, {
                      modelValue: c.value.git.userName,
                      "onUpdate:modelValue": x[0] || (x[0] = (D) => c.value.git.userName = D),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(De, {
                      modelValue: c.value.git.userEmail,
                      "onUpdate:modelValue": x[1] || (x[1] = (D) => c.value.git.userEmail = D),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    l(De, {
                      modelValue: c.value.git.defaultBranch,
                      "onUpdate:modelValue": x[2] || (x[2] = (D) => c.value.git.defaultBranch = D),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.git.autoCommit,
                      "onUpdate:modelValue": x[3] || (x[3] = (D) => c.value.git.autoCommit = D)
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
              t("div", dl, [
                l(ae, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    l(Ve, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(d(c.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    l(Ve, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(d(c.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    l(Ve, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(d(c.value.paths.modelsDir), 1)
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
              t("div", ul, [
                l(ae, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": x[4] || (x[4] = (D) => c.value.modelIndex.autoIndex = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !c.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": x[5] || (x[5] = (D) => c.value.modelIndex.indexOnStartup = D),
                      disabled: !c.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(ae, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !c.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(Ue, {
                      modelValue: c.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": x[6] || (x[6] = (D) => c.value.modelIndex.scanInterval = D),
                      options: g,
                      disabled: !c.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(ae, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.modelIndex.deepScan,
                      "onUpdate:modelValue": x[7] || (x[7] = (D) => c.value.modelIndex.deepScan = D)
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
              t("div", ml, [
                l(ae, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    l(Ue, {
                      modelValue: c.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": x[8] || (x[8] = (D) => c.value.environment.defaultComfyUIVersion = D),
                      options: u,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    l(Ue, {
                      modelValue: c.value.environment.pythonVersion,
                      "onUpdate:modelValue": x[9] || (x[9] = (D) => c.value.environment.pythonVersion = D),
                      options: h,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": x[10] || (x[10] = (D) => c.value.environment.autoCreateVenv = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": x[11] || (x[11] = (D) => c.value.environment.autoInstallDeps = D)
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
              t("div", vl, [
                l(ae, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    l(Ue, {
                      modelValue: c.value.ui.theme,
                      "onUpdate:modelValue": x[12] || (x[12] = (D) => c.value.ui.theme = D),
                      options: L,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.ui.compactMode,
                      "onUpdate:modelValue": x[13] || (x[13] = (D) => c.value.ui.compactMode = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.ui.showFileExtensions,
                      "onUpdate:modelValue": x[14] || (x[14] = (D) => c.value.ui.showFileExtensions = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.ui.confirmDestructive,
                      "onUpdate:modelValue": x[15] || (x[15] = (D) => c.value.ui.confirmDestructive = D)
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
              t("div", fl, [
                l(ae, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    l(me, {
                      modelValue: c.value.advanced.debugMode,
                      "onUpdate:modelValue": x[16] || (x[16] = (D) => c.value.advanced.debugMode = D)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    l(Ue, {
                      modelValue: c.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": x[17] || (x[17] = (D) => c.value.advanced.maxHistoryItems = D),
                      options: E,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ae, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    l(Ue, {
                      modelValue: c.value.advanced.cacheDuration,
                      "onUpdate:modelValue": x[18] || (x[18] = (D) => c.value.advanced.cacheDuration = D),
                      options: z,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          r.value ? (o(), p(ze, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: a(() => [
              t("span", {
                style: He({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, d(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : v("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), hl = /* @__PURE__ */ W(gl, [["__scopeId", "data-v-74f65bd5"]]), pl = { class: "log-filter-bar" }, yl = { class: "log-filter-bar__options" }, bl = ["onClick"], wl = /* @__PURE__ */ O({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: i }) {
    const s = e, r = i, c = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function b(g) {
      return s.activeLevels.includes(g);
    }
    function m(g) {
      r("toggle", g);
    }
    return (g, u) => (o(), n("div", pl, [
      u[1] || (u[1] = t("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      t("div", yl, [
        (o(), n(P, null, Y(c, (h) => t("button", {
          key: h,
          class: K(["filter-option", { active: b(h) }]),
          onClick: (L) => m(h)
        }, d(h), 11, bl)), 64)),
        t("button", {
          class: "filter-option filter-option--clear",
          onClick: u[0] || (u[0] = (h) => g.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), kt = /* @__PURE__ */ W(wl, [["__scopeId", "data-v-9052edf8"]]), kl = { class: "log-list" }, _l = /* @__PURE__ */ O({
  __name: "LogList",
  setup(e) {
    return (i, s) => (o(), n("div", kl, [
      X(i.$slots, "default", {}, void 0, !0)
    ]));
  }
}), _t = /* @__PURE__ */ W(_l, [["__scopeId", "data-v-0061c330"]]), $l = { class: "log-level__icon" }, Cl = { class: "log-level__text" }, xl = /* @__PURE__ */ O({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const i = e, s = B(() => `log-level--${i.level.toLowerCase()}`), r = B(() => {
      switch (i.level) {
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
    return (c, b) => (o(), n("span", {
      class: K(["log-level", s.value])
    }, [
      t("span", $l, d(r.value), 1),
      t("span", Cl, d(e.level), 1)
    ], 2));
  }
}), Il = /* @__PURE__ */ W(xl, [["__scopeId", "data-v-8547c115"]]), Sl = { class: "log-item__header" }, El = { class: "log-item__timestamp" }, Ll = {
  key: 0,
  class: "log-item__context"
}, zl = { class: "log-item__message" }, Ml = /* @__PURE__ */ O({
  __name: "LogItem",
  props: {
    level: {},
    timestamp: {},
    message: {},
    context: {},
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: i }) {
    const s = e, r = B(() => `log-item--${s.level.toLowerCase()}`);
    return (c, b) => (o(), n("div", {
      class: K(["log-item", r.value, { clickable: e.clickable }]),
      onClick: b[0] || (b[0] = (m) => e.clickable && c.$emit("click"))
    }, [
      t("div", Sl, [
        l(Il, { level: e.level }, null, 8, ["level"]),
        t("span", El, d(e.timestamp), 1),
        e.context ? (o(), n("span", Ll, d(e.context), 1)) : v("", !0)
      ]),
      t("div", zl, d(e.message), 1)
    ], 2));
  }
}), $t = /* @__PURE__ */ W(Ml, [["__scopeId", "data-v-adb291b1"]]), Nl = {
  key: 2,
  class: "load-more"
}, Rl = /* @__PURE__ */ O({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: i } = he(), s = I([]), r = I(!1), c = I(null), b = I(!1), m = I(["ERROR", "WARNING", "INFO", "DEBUG"]), g = I(100), u = B(() => s.value.filter((_) => _.level === "ERROR").length), h = B(() => s.value.filter((_) => _.level === "WARNING").length), L = B(() => s.value.filter((_) => _.level === "INFO").length), E = B(() => s.value.filter((_) => _.level === "DEBUG").length), z = B(() => s.value.filter((_) => m.value.includes(_.level))), G = B(() => z.value.slice(0, g.value)), q = B(() => z.value.length > g.value);
    function T(_) {
      const $ = m.value.indexOf(_);
      $ >= 0 ? m.value.splice($, 1) : m.value.push(_);
    }
    function C() {
      m.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function x() {
      g.value += 100;
    }
    function D(_) {
      try {
        return new Date(_).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        });
      } catch {
        return _;
      }
    }
    async function H() {
      r.value = !0, c.value = null;
      try {
        s.value = await i(void 0, 500);
      } catch (_) {
        c.value = _ instanceof Error ? _.message : "Failed to load workspace logs";
      } finally {
        r.value = !1;
      }
    }
    return ue(H), (_, $) => (o(), n(P, null, [
      l(fe, null, {
        header: a(() => [
          l(ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (y) => b.value = !0)
          })
        ]),
        content: a(() => [
          r.value ? (o(), p($e, {
            key: 0,
            message: "Loading workspace logs..."
          })) : c.value ? (o(), p(Ce, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            s.value.length > 0 ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(s.value.length) + " entries • " + d(u.value) + " errors • " + d(h.value) + " warnings • " + d(L.value) + " info • " + d(E.value) + " debug ", 1)
              ]),
              _: 1
            })) : v("", !0),
            l(kt, {
              "active-levels": m.value,
              onToggle: T,
              onClear: C
            }, null, 8, ["active-levels"]),
            z.value.length > 0 ? (o(), p(_t, { key: 1 }, {
              default: a(() => [
                (o(!0), n(P, null, Y(G.value, (y, k) => (o(), p($t, {
                  key: `${y.timestamp}-${k}`,
                  level: y.level,
                  timestamp: D(y.timestamp),
                  message: y.message,
                  context: y.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : v("", !0),
            q.value ? (o(), n("div", Nl, [
              l(U, {
                variant: "secondary",
                onClick: x
              }, {
                default: a(() => [
                  f(" Load More (" + d(z.value.length - g.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : v("", !0),
            s.value.length > 0 && z.value.length === 0 ? (o(), p(ye, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : v("", !0),
            s.value.length === 0 ? (o(), p(ye, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Me, {
        show: b.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (y) => b.value = !1)
      }, {
        content: a(() => [...$[3] || ($[3] = [
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
            onClick: $[1] || ($[1] = (y) => b.value = !1)
          }, {
            default: a(() => [...$[4] || ($[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ul = /* @__PURE__ */ W(Rl, [["__scopeId", "data-v-55d656f1"]]), Bl = {
  key: 2,
  class: "load-more"
}, Dl = /* @__PURE__ */ O({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: i, getStatus: s } = he(), r = I([]), c = I(!1), b = I(null), m = I(!1), g = I(["ERROR", "WARNING", "INFO", "DEBUG"]), u = I(50), h = I("production"), L = B(() => r.value.filter((k) => g.value.includes(k.level.toUpperCase()))), E = B(() => L.value.slice(0, u.value)), z = B(() => L.value.length > u.value), G = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "ERROR").length
    ), q = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "WARNING").length
    ), T = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "INFO").length
    ), C = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "DEBUG").length
    );
    function x(k) {
      const w = g.value.indexOf(k);
      w > -1 ? g.value.splice(w, 1) : g.value.push(k);
    }
    function D() {
      g.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function H() {
      u.value += 50;
    }
    function _(k) {
      return new Date(k).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    }
    function $(k) {
      if (!k) return;
      const w = Object.entries(k);
      if (w.length === 0) return;
      const [N, M] = w[0];
      return typeof M == "string" || typeof M == "number" ? `${N}: ${M}` : N;
    }
    async function y() {
      c.value = !0, b.value = null;
      try {
        r.value = await i(void 0, 200), r.value.sort((k, w) => new Date(w.timestamp).getTime() - new Date(k.timestamp).getTime());
        try {
          const k = await s();
          h.value = k.environment || "production";
        } catch {
        }
      } catch (k) {
        b.value = k instanceof Error ? k.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    return ue(y), (k, w) => (o(), n(P, null, [
      l(fe, null, {
        header: a(() => [
          l(ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (N) => m.value = !0)
          })
        ]),
        content: a(() => [
          c.value ? (o(), p($e, {
            key: 0,
            message: "Loading environment logs..."
          })) : b.value ? (o(), p(Ce, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: y
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            r.value.length > 0 ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + d(r.value.length) + " entries • " + d(G.value) + " errors • " + d(q.value) + " warnings • " + d(T.value) + " info • " + d(C.value) + " debug ", 1)
              ]),
              _: 1
            })) : v("", !0),
            l(kt, {
              "active-levels": g.value,
              onToggle: x,
              onClear: D
            }, null, 8, ["active-levels"]),
            L.value.length > 0 ? (o(), p(_t, { key: 1 }, {
              default: a(() => [
                (o(!0), n(P, null, Y(E.value, (N, M) => (o(), p($t, {
                  key: `${N.timestamp}-${M}`,
                  level: N.level,
                  timestamp: _(N.timestamp),
                  message: N.message,
                  context: $(N.context)
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : v("", !0),
            z.value ? (o(), n("div", Bl, [
              l(U, {
                variant: "secondary",
                onClick: H
              }, {
                default: a(() => [
                  f(" Load More (" + d(L.value.length - u.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : v("", !0),
            r.value.length > 0 && L.value.length === 0 ? (o(), p(ye, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : v("", !0),
            r.value.length === 0 ? (o(), p(ye, {
              key: 4,
              icon: "📝",
              message: "No environment logs available"
            })) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Me, {
        show: m.value,
        title: "About Environment Logs",
        onClose: w[2] || (w[2] = (N) => m.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            w[3] || (w[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, d(h.value), 1),
            w[4] || (w[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          w[5] || (w[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          w[6] || (w[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          l(U, {
            variant: "primary",
            onClick: w[1] || (w[1] = (N) => m.value = !1)
          }, {
            default: a(() => [...w[7] || (w[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vl = /* @__PURE__ */ W(Dl, [["__scopeId", "data-v-456b4c97"]]), Tl = { class: "env-title" }, Ol = {
  key: 0,
  class: "current-badge"
}, Wl = {
  key: 0,
  class: "branch-info"
}, Fl = /* @__PURE__ */ O({
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
    return (i, s) => (o(), p(ie, {
      status: e.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        f(d(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        t("div", Tl, [
          t("span", null, d(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), n("span", Ol, "CURRENT")) : v("", !0)
        ])
      ]),
      subtitle: a(() => [
        e.currentBranch ? (o(), n("span", Wl, [
          s[0] || (s[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + d(e.currentBranch), 1)
        ])) : v("", !0)
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
        e.lastUsed && e.showLastUsed ? (o(), p(J, {
          key: 0,
          label: "Last used:",
          value: e.lastUsed
        }, null, 8, ["value"])) : v("", !0)
      ]),
      actions: a(() => [
        X(i.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Al = /* @__PURE__ */ W(Fl, [["__scopeId", "data-v-5238e57c"]]), Pl = {
  key: 0,
  class: "create-form"
}, Gl = { class: "create-form__header" }, Hl = { class: "create-form__body" }, Kl = { class: "create-form__actions" }, jl = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, ql = /* @__PURE__ */ O({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(e, { emit: i }) {
    const s = i, { getEnvironments: r } = he(), c = I([]), b = I(!1), m = I(null), g = I(""), u = I(!1), h = I(!1), L = I(""), E = B(
      () => c.value.find((H) => H.is_current)
    ), z = B(() => {
      if (!g.value.trim()) return c.value;
      const H = g.value.toLowerCase();
      return c.value.filter(
        (_) => {
          var $;
          return _.name.toLowerCase().includes(H) || (($ = _.current_branch) == null ? void 0 : $.toLowerCase().includes(H));
        }
      );
    });
    function G(H) {
      if (!H) return "";
      try {
        const _ = new Date(H), y = (/* @__PURE__ */ new Date()).getTime() - _.getTime(), k = Math.floor(y / 6e4), w = Math.floor(y / 36e5), N = Math.floor(y / 864e5);
        return k < 1 ? "just now" : k < 60 ? `${k} ${k === 1 ? "minute" : "minutes"} ago` : w < 24 ? `${w} ${w === 1 ? "hour" : "hours"} ago` : N < 30 ? `${N} ${N === 1 ? "day" : "days"} ago` : _.toLocaleDateString();
      } catch {
        return H;
      }
    }
    function q() {
      const H = L.value.trim();
      H && (s("create", H), L.value = "", h.value = !1);
    }
    function T() {
      L.value = "", h.value = !1;
    }
    function C(H) {
      s("viewDetails", H);
    }
    function x(H) {
      confirm(`Delete environment "${H}"?

This action cannot be undone.`) && s("delete", H);
    }
    async function D() {
      b.value = !0, m.value = null;
      try {
        c.value = await r();
      } catch (H) {
        m.value = H instanceof Error ? H.message : "Failed to load environments";
      } finally {
        b.value = !1;
      }
    }
    return ue(D), (H, _) => {
      const $ = Bt("SectionGroup");
      return o(), n(P, null, [
        l(fe, null, {
          header: a(() => [
            l(ge, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: _[1] || (_[1] = (y) => u.value = !0)
            }, {
              actions: a(() => [
                l(U, {
                  variant: "ghost",
                  size: "sm",
                  onClick: _[0] || (_[0] = (y) => h.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [..._[7] || (_[7] = [
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
                  default: a(() => [..._[8] || (_[8] = [
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
            l(Oe, {
              modelValue: g.value,
              "onUpdate:modelValue": _[2] || (_[2] = (y) => g.value = y),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            b.value ? (o(), p($e, {
              key: 0,
              message: "Loading environments..."
            })) : m.value ? (o(), p(Ce, {
              key: 1,
              message: m.value,
              retry: !0,
              onRetry: D
            }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
              h.value ? (o(), n("div", Pl, [
                t("div", Gl, [
                  _[10] || (_[10] = t("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  l(U, {
                    variant: "ghost",
                    size: "xs",
                    onClick: T
                  }, {
                    default: a(() => [..._[9] || (_[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                t("div", Hl, [
                  l(De, {
                    modelValue: L.value,
                    "onUpdate:modelValue": _[3] || (_[3] = (y) => L.value = y),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      _e(q, ["enter"]),
                      _e(T, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  t("div", Kl, [
                    l(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: q,
                      disabled: !L.value.trim()
                    }, {
                      default: a(() => [..._[11] || (_[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: T
                    }, {
                      default: a(() => [..._[12] || (_[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : v("", !0),
              c.value.length ? (o(), p(ze, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  f(" Total: " + d(c.value.length) + " " + d(c.value.length === 1 ? "environment" : "environments") + " ", 1),
                  E.value ? (o(), n(P, { key: 0 }, [
                    _[13] || (_[13] = f(" • Current: ", -1)),
                    t("strong", null, d(E.value.name), 1)
                  ], 64)) : v("", !0)
                ]),
                _: 1
              })) : v("", !0),
              z.value.length ? (o(), p($, {
                key: 2,
                title: "ENVIRONMENTS",
                count: z.value.length
              }, {
                default: a(() => [
                  (o(!0), n(P, null, Y(z.value, (y) => (o(), p(Al, {
                    key: y.name,
                    "environment-name": y.name,
                    "is-current": y.is_current,
                    "current-branch": y.current_branch,
                    "workflow-count": y.workflow_count,
                    "node-count": y.node_count,
                    "model-count": y.model_count,
                    "last-used": G(y.last_used),
                    "show-last-used": !!y.last_used
                  }, {
                    actions: a(() => [
                      y.is_current ? v("", !0) : (o(), p(U, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (k) => H.$emit("switch", y.name)
                      }, {
                        default: a(() => [..._[14] || (_[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      l(U, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (k) => C(y.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [..._[15] || (_[15] = [
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
                      !y.is_current && c.value.length > 1 ? (o(), p(U, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (k) => x(y.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", jl, [..._[16] || (_[16] = [
                            t("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : v("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : v("", !0),
              z.value.length ? v("", !0) : (o(), p(ye, {
                key: 3,
                icon: "🌍",
                message: g.value ? `No environments match '${g.value}'` : "No environments found. Create one to get started!"
              }, ht({ _: 2 }, [
                g.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    l(U, {
                      variant: "primary",
                      onClick: _[4] || (_[4] = (y) => h.value = !0)
                    }, {
                      default: a(() => [..._[17] || (_[17] = [
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
        l(Me, {
          show: u.value,
          title: "About Environments",
          onClose: _[6] || (_[6] = (y) => u.value = !1)
        }, {
          content: a(() => [..._[18] || (_[18] = [
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
              onClick: _[5] || (_[5] = (y) => u.value = !1)
            }, {
              default: a(() => [..._[19] || (_[19] = [
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
}), Yl = /* @__PURE__ */ W(ql, [["__scopeId", "data-v-97d6527d"]]), Jl = { class: "file-path" }, Xl = { class: "file-path-text" }, Zl = ["title"], Ql = /* @__PURE__ */ O({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const i = e, s = I(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(i.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (c) {
        console.error("Failed to copy:", c);
      }
    }
    return (c, b) => (o(), n("div", Jl, [
      b[0] || (b[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", Xl, d(e.path), 1),
      e.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: r
      }, d(s.value ? "✓" : "📋"), 9, Zl)) : v("", !0)
    ]));
  }
}), ei = /* @__PURE__ */ W(Ql, [["__scopeId", "data-v-f0982173"]]), ti = { class: "output-path-input" }, oi = { class: "export-actions" }, ai = {
  key: 1,
  class: "export-warning"
}, si = /* @__PURE__ */ O({
  __name: "ExportSection",
  setup(e) {
    const { exportEnv: i } = he(), s = I(""), r = I(!1), c = I(null), b = I(!1);
    async function m() {
      r.value = !0, c.value = null;
      try {
        const u = await i(s.value || void 0);
        c.value = u;
      } catch (u) {
        c.value = {
          status: "error",
          message: u instanceof Error ? u.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function g() {
      var u;
      if ((u = c.value) != null && u.path)
        try {
          await navigator.clipboard.writeText(c.value.path);
        } catch (h) {
          console.error("Failed to copy path:", h);
        }
    }
    return (u, h) => (o(), n(P, null, [
      l(fe, null, {
        header: a(() => [
          l(ge, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              l(U, {
                variant: "ghost",
                size: "sm",
                onClick: h[0] || (h[0] = (L) => b.value = !0),
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
              l(ie, { status: "synced" }, {
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
              l(ie, { status: "synced" }, {
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
                  t("div", ti, [
                    l(De, {
                      modelValue: s.value,
                      "onUpdate:modelValue": h[1] || (h[1] = (L) => s.value = L),
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
              t("div", oi, [
                l(U, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: m
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
                s.value ? (o(), p(U, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: h[2] || (h[2] = (L) => s.value = "")
                }, {
                  default: a(() => [...h[13] || (h[13] = [
                    f(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : v("", !0)
              ])
            ]),
            _: 1
          }),
          c.value ? (o(), p(se, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              l(ie, {
                status: c.value.status === "success" ? "synced" : "broken"
              }, ht({
                icon: a(() => [
                  f(d(c.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  f(d(c.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  f(d(c.value.status === "success" ? "Your environment has been exported" : c.value.message), 1)
                ]),
                _: 2
              }, [
                c.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    l(J, { label: "Saved to:" }, {
                      default: a(() => [
                        l(ei, {
                          path: c.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    c.value.models_without_sources !== void 0 ? (o(), p(J, {
                      key: 0,
                      label: "Models without sources:",
                      value: c.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : v("", !0),
                    c.value.models_without_sources && c.value.models_without_sources > 0 ? (o(), n("div", ai, [...h[14] || (h[14] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : v("", !0)
                  ]),
                  key: "0"
                } : void 0,
                c.value.status === "success" ? {
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
                      onClick: h[3] || (h[3] = (L) => c.value = null)
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
          })) : v("", !0)
        ]),
        _: 1
      }),
      l(Me, {
        show: b.value,
        title: "About Environment Export",
        onClose: h[4] || (h[4] = (L) => b.value = !1)
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
}), ni = /* @__PURE__ */ W(si, [["__scopeId", "data-v-1777a9d5"]]), li = { class: "file-input-wrapper" }, ii = ["accept", "multiple", "disabled"], ri = /* @__PURE__ */ O({
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
  setup(e, { expose: i, emit: s }) {
    const r = s, c = I(null);
    function b() {
      var g;
      (g = c.value) == null || g.click();
    }
    function m(g) {
      const u = g.target;
      u.files && u.files.length > 0 && (r("change", u.files), u.value = "");
    }
    return i({
      triggerInput: b
    }), (g, u) => (o(), n("div", li, [
      t("input", {
        ref_key: "fileInputRef",
        ref: c,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, ii),
      l(U, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: b
      }, {
        default: a(() => [
          X(g.$slots, "default", {}, () => [
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
}), ci = /* @__PURE__ */ W(ri, [["__scopeId", "data-v-cd192091"]]), di = {
  key: 0,
  class: "drop-zone-empty"
}, ui = { class: "drop-zone-text" }, mi = { class: "drop-zone-primary" }, vi = { class: "drop-zone-secondary" }, fi = { class: "drop-zone-actions" }, gi = {
  key: 1,
  class: "drop-zone-file"
}, hi = { class: "file-info" }, pi = { class: "file-details" }, yi = { class: "file-name" }, bi = { class: "file-size" }, wi = /* @__PURE__ */ O({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: i }) {
    const s = i, r = I(!1), c = I(null), b = I(0), m = B(() => c.value !== null), g = B(() => {
      var C;
      return ((C = c.value) == null ? void 0 : C.name) || "";
    }), u = B(() => {
      if (!c.value) return "";
      const C = c.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function h(C) {
      var x;
      b.value++, (x = C.dataTransfer) != null && x.types.includes("Files") && (r.value = !0);
    }
    function L(C) {
      C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function E() {
      b.value--, b.value === 0 && (r.value = !1);
    }
    function z(C) {
      var D;
      b.value = 0, r.value = !1;
      const x = (D = C.dataTransfer) == null ? void 0 : D.files;
      x && x.length > 0 && q(x[0]);
    }
    function G(C) {
      C.length > 0 && q(C[0]);
    }
    function q(C) {
      c.value = C, s("fileSelected", C);
    }
    function T() {
      c.value = null, s("clear");
    }
    return (C, x) => (o(), n("div", {
      class: K(["file-drop-zone", { "drop-active": r.value, "has-file": m.value }]),
      onDragenter: we(h, ["prevent"]),
      onDragover: we(L, ["prevent"]),
      onDragleave: we(E, ["prevent"]),
      onDrop: we(z, ["prevent"])
    }, [
      m.value ? (o(), n("div", gi, [
        t("div", hi, [
          x[1] || (x[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", pi, [
            t("div", yi, d(g.value), 1),
            t("div", bi, d(u.value), 1)
          ])
        ]),
        l(U, {
          variant: "ghost",
          size: "xs",
          onClick: T,
          title: "Remove file"
        }, {
          default: a(() => [...x[2] || (x[2] = [
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
      ])) : (o(), n("div", di, [
        x[0] || (x[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", ui, [
          t("p", mi, d(e.primaryText), 1),
          t("p", vi, d(e.secondaryText), 1)
        ]),
        t("div", fi, [
          l(ci, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "md",
            onChange: G
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
}), ki = /* @__PURE__ */ W(wi, [["__scopeId", "data-v-e00abbca"]]), _i = { class: "import-preview" }, $i = { class: "preview-header" }, Ci = {
  key: 0,
  class: "source-env"
}, xi = { class: "preview-content" }, Ii = { class: "preview-section" }, Si = { class: "section-header" }, Ei = { class: "section-info" }, Li = { class: "section-count" }, zi = {
  key: 0,
  class: "item-list"
}, Mi = { class: "item-name" }, Ni = {
  key: 0,
  class: "item-more"
}, Ri = { class: "preview-section" }, Ui = { class: "section-header" }, Bi = { class: "section-info" }, Di = { class: "section-count" }, Vi = {
  key: 0,
  class: "item-list"
}, Ti = { class: "item-details" }, Oi = { class: "item-name" }, Wi = { class: "item-meta" }, Fi = {
  key: 0,
  class: "item-more"
}, Ai = { class: "preview-section" }, Pi = { class: "section-header" }, Gi = { class: "section-info" }, Hi = { class: "section-count" }, Ki = {
  key: 0,
  class: "item-list"
}, ji = { class: "item-name" }, qi = {
  key: 0,
  class: "item-more"
}, Yi = {
  key: 0,
  class: "preview-section"
}, Ji = { class: "git-info" }, Xi = /* @__PURE__ */ O({
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
    const i = e, s = B(() => i.workflows.length), r = B(() => i.models.length), c = B(() => i.nodes.length);
    function b(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, g) => (o(), n("div", _i, [
      t("div", $i, [
        l(Be, null, {
          default: a(() => [...g[0] || (g[0] = [
            f("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), n("span", Ci, [
          g[1] || (g[1] = f(" From: ", -1)),
          l(Ve, null, {
            default: a(() => [
              f(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : v("", !0)
      ]),
      t("div", xi, [
        t("div", Ii, [
          t("div", Si, [
            g[3] || (g[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Ei, [
              g[2] || (g[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Li, d(s.value) + " file" + d(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), n("div", zi, [
            (o(!0), n(P, null, Y(e.workflows.slice(0, e.maxPreviewItems), (u) => (o(), n("div", {
              key: u,
              class: "preview-item"
            }, [
              g[4] || (g[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Mi, d(u), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), n("div", Ni, " +" + d(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : v("", !0)
          ])) : v("", !0)
        ]),
        t("div", Ri, [
          t("div", Ui, [
            g[6] || (g[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", Bi, [
              g[5] || (g[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Di, d(r.value) + " file" + d(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), n("div", Vi, [
            (o(!0), n(P, null, Y(e.models.slice(0, e.maxPreviewItems), (u) => (o(), n("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              g[7] || (g[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Ti, [
                t("span", Oi, d(u.filename), 1),
                t("span", Wi, d(b(u.size)) + " • " + d(u.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), n("div", Fi, " +" + d(e.models.length - e.maxPreviewItems) + " more ", 1)) : v("", !0)
          ])) : v("", !0)
        ]),
        t("div", Ai, [
          t("div", Pi, [
            g[9] || (g[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", Gi, [
              g[8] || (g[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", Hi, d(c.value) + " node" + d(c.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), n("div", Ki, [
            (o(!0), n(P, null, Y(e.nodes.slice(0, e.maxPreviewItems), (u) => (o(), n("div", {
              key: u,
              class: "preview-item"
            }, [
              g[10] || (g[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", ji, d(u), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), n("div", qi, " +" + d(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : v("", !0)
          ])) : v("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), n("div", Yi, [
          g[11] || (g[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", Ji, [
            e.gitBranch ? (o(), p(J, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                l(Ve, null, {
                  default: a(() => [
                    f(d(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : v("", !0),
            e.gitCommit ? (o(), p(J, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                l(bt, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : v("", !0)
          ])
        ])) : v("", !0)
      ])
    ]));
  }
}), Zi = /* @__PURE__ */ W(Xi, [["__scopeId", "data-v-182fe113"]]), Qi = { class: "import-options" }, er = { class: "options-container" }, tr = { class: "option-section" }, or = { class: "conflict-options" }, ar = ["value", "checked", "onChange"], sr = { class: "conflict-content" }, nr = { class: "conflict-label" }, lr = { class: "conflict-description" }, ir = { class: "option-section" }, rr = { class: "component-toggles" }, cr = /* @__PURE__ */ O({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(e, { emit: i }) {
    const s = i, r = [
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
    return (c, b) => (o(), n("div", Qi, [
      l(Be, null, {
        default: a(() => [...b[4] || (b[4] = [
          f("Import Options", -1)
        ])]),
        _: 1
      }),
      t("div", er, [
        t("div", tr, [
          l(rt, null, {
            default: a(() => [...b[5] || (b[5] = [
              f("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          t("div", or, [
            (o(), n(P, null, Y(r, (m) => t("label", {
              key: m.value,
              class: K(["conflict-option", { active: e.conflictMode === m.value }])
            }, [
              t("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: e.conflictMode === m.value,
                onChange: (g) => s("update:conflictMode", m.value)
              }, null, 40, ar),
              t("div", sr, [
                t("span", nr, d(m.label), 1),
                t("span", lr, d(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", ir, [
          l(rt, null, {
            default: a(() => [...b[6] || (b[6] = [
              f("Components to Import", -1)
            ])]),
            _: 1
          }),
          t("div", rr, [
            l(ae, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                l(me, {
                  "model-value": e.includeWorkflows,
                  "onUpdate:modelValue": b[0] || (b[0] = (m) => s("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ae, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                l(me, {
                  "model-value": e.includeModels,
                  "onUpdate:modelValue": b[1] || (b[1] = (m) => s("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ae, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                l(me, {
                  "model-value": e.includeNodes,
                  "onUpdate:modelValue": b[2] || (b[2] = (m) => s("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ae, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                l(me, {
                  "model-value": e.includeGitHistory,
                  "onUpdate:modelValue": b[3] || (b[3] = (m) => s("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), dr = /* @__PURE__ */ W(cr, [["__scopeId", "data-v-0ec212b0"]]), ur = {
  key: 0,
  class: "import-empty"
}, mr = { class: "import-help" }, vr = {
  key: 1,
  class: "import-configure"
}, fr = { class: "selected-file-bar" }, gr = { class: "file-bar-content" }, hr = { class: "file-bar-info" }, pr = { class: "file-bar-name" }, yr = { class: "file-bar-size" }, br = { class: "import-actions" }, wr = {
  key: 2,
  class: "import-progress"
}, kr = { class: "progress-content" }, _r = { class: "progress-info" }, $r = { class: "progress-title" }, Cr = { class: "progress-detail" }, xr = { class: "progress-bar" }, Ir = { class: "progress-status" }, Sr = {
  key: 3,
  class: "import-complete"
}, Er = { class: "complete-message" }, Lr = { class: "complete-title" }, zr = { class: "complete-details" }, Mr = { class: "complete-actions" }, Nr = /* @__PURE__ */ O({
  __name: "ImportSection",
  setup(e) {
    const i = I(null), s = I(!1), r = I(!1), c = I(!1), b = I(""), m = I({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), g = I({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), u = I({
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
    }), h = B(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function L(T) {
      i.value = T;
    }
    function E() {
      i.value = null, r.value = !1, c.value = !1, b.value = "";
    }
    function z() {
      E(), s.value = !1, g.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function G() {
      if (i.value) {
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
          for (const C of T)
            g.value = C, await new Promise((x) => setTimeout(x, 800));
          g.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((C) => setTimeout(C, 500)), c.value = !0, b.value = `Successfully imported ${u.value.workflows.length} workflows, ${u.value.models.length} models, and ${u.value.nodes.length} custom nodes.`;
        } catch (T) {
          c.value = !1, b.value = T instanceof Error ? T.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, r.value = !0;
        }
      }
    }
    function q(T) {
      return T < 1024 ? `${T} B` : T < 1024 * 1024 ? `${(T / 1024).toFixed(1)} KB` : T < 1024 * 1024 * 1024 ? `${(T / (1024 * 1024)).toFixed(1)} MB` : `${(T / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (T, C) => (o(), p(fe, null, {
      header: a(() => [
        l(ge, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !i.value && !s.value ? (o(), n("div", ur, [
          l(ki, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: L
          }),
          t("div", mr, [
            l(Be, null, {
              default: a(() => [...C[5] || (C[5] = [
                f("How to Import", -1)
              ])]),
              _: 1
            }),
            C[6] || (C[6] = t("div", { class: "help-content" }, [
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
        ])) : i.value && !s.value && !r.value ? (o(), n("div", vr, [
          t("div", fr, [
            t("div", gr, [
              C[7] || (C[7] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", hr, [
                t("div", pr, d(i.value.name), 1),
                t("div", yr, d(q(i.value.size)), 1)
              ])
            ]),
            l(U, {
              variant: "ghost",
              size: "sm",
              onClick: E
            }, {
              default: a(() => [...C[8] || (C[8] = [
                f(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          l(Zi, {
            "source-environment": u.value.sourceEnvironment,
            workflows: u.value.workflows,
            models: u.value.models,
            nodes: u.value.nodes,
            "git-branch": u.value.gitBranch,
            "git-commit": u.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          l(dr, {
            "conflict-mode": m.value.conflictMode,
            "onUpdate:conflictMode": C[0] || (C[0] = (x) => m.value.conflictMode = x),
            "include-workflows": m.value.includeWorkflows,
            "onUpdate:includeWorkflows": C[1] || (C[1] = (x) => m.value.includeWorkflows = x),
            "include-models": m.value.includeModels,
            "onUpdate:includeModels": C[2] || (C[2] = (x) => m.value.includeModels = x),
            "include-nodes": m.value.includeNodes,
            "onUpdate:includeNodes": C[3] || (C[3] = (x) => m.value.includeNodes = x),
            "include-git-history": m.value.includeGitHistory,
            "onUpdate:includeGitHistory": C[4] || (C[4] = (x) => m.value.includeGitHistory = x)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !m.value.includeModels && u.value.models.length > 0 ? (o(), p(Je, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${u.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : v("", !0),
          t("div", br, [
            l(U, {
              variant: "primary",
              size: "md",
              disabled: !h.value,
              onClick: G
            }, {
              default: a(() => [...C[9] || (C[9] = [
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
              onClick: E
            }, {
              default: a(() => [...C[10] || (C[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", wr, [
          t("div", kr, [
            C[11] || (C[11] = t("div", { class: "progress-icon" }, [
              t("div", { class: "spinner" })
            ], -1)),
            t("div", _r, [
              t("div", $r, d(g.value.message), 1),
              t("div", Cr, d(g.value.detail), 1)
            ])
          ]),
          t("div", xr, [
            t("div", {
              class: "progress-bar-fill",
              style: He({ width: `${g.value.percent}%` })
            }, null, 4)
          ]),
          t("div", Ir, d(g.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), n("div", Sr, [
          t("div", {
            class: K(["complete-icon", c.value ? "success" : "error"])
          }, d(c.value ? "✓" : "✕"), 3),
          t("div", Er, [
            t("div", Lr, d(c.value ? "Import Successful" : "Import Failed"), 1),
            t("div", zr, d(b.value), 1)
          ]),
          t("div", Mr, [
            l(U, {
              variant: "primary",
              size: "md",
              onClick: z
            }, {
              default: a(() => [...C[12] || (C[12] = [
                f(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : v("", !0)
      ]),
      _: 1
    }));
  }
}), Rr = /* @__PURE__ */ W(Nr, [["__scopeId", "data-v-18e18eb5"]]), Ur = { class: "header-info" }, Br = { class: "commit-hash" }, Dr = {
  key: 0,
  class: "commit-refs"
}, Vr = { class: "commit-message" }, Tr = { class: "commit-date" }, Or = {
  key: 0,
  class: "loading"
}, Wr = {
  key: 1,
  class: "changes-section"
}, Fr = { class: "stats-row" }, Ar = { class: "stat" }, Pr = { class: "stat insertions" }, Gr = { class: "stat deletions" }, Hr = {
  key: 0,
  class: "change-group"
}, Kr = {
  key: 1,
  class: "change-group"
}, jr = {
  key: 0,
  class: "version"
}, qr = {
  key: 2,
  class: "change-group"
}, Yr = { class: "change-item" }, Jr = /* @__PURE__ */ O({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const i = e, { getCommitDetail: s } = he(), r = I(null), c = I(!0), b = B(() => {
      if (!r.value) return !1;
      const g = r.value.changes.workflows;
      return g.added.length > 0 || g.modified.length > 0 || g.deleted.length > 0;
    }), m = B(() => {
      if (!r.value) return !1;
      const g = r.value.changes.nodes;
      return g.added.length > 0 || g.removed.length > 0;
    });
    return ue(async () => {
      try {
        r.value = await s(i.commit.hash);
      } finally {
        c.value = !1;
      }
    }), (g, u) => (o(), p(Qe, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (h) => g.$emit("close"))
    }, {
      header: a(() => {
        var h, L, E, z;
        return [
          t("div", Ur, [
            u[4] || (u[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", Br, d(((h = r.value) == null ? void 0 : h.short_hash) || e.commit.short_hash || ((L = e.commit.hash) == null ? void 0 : L.slice(0, 7))), 1),
            (z = (E = r.value) == null ? void 0 : E.refs) != null && z.length ? (o(), n("span", Dr, [
              (o(!0), n(P, null, Y(r.value.refs, (G) => (o(), n("span", {
                key: G,
                class: "ref-badge"
              }, d(G), 1))), 128))
            ])) : v("", !0)
          ]),
          l(ve, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (G) => g.$emit("close"))
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
        var h, L;
        return [
          t("div", Vr, d(((h = r.value) == null ? void 0 : h.message) || e.commit.message), 1),
          t("div", Tr, d(((L = r.value) == null ? void 0 : L.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          c.value ? (o(), n("div", Or, "Loading details...")) : r.value ? (o(), n("div", Wr, [
            t("div", Fr, [
              t("span", Ar, d(r.value.stats.files_changed) + " files", 1),
              t("span", Pr, "+" + d(r.value.stats.insertions), 1),
              t("span", Gr, "-" + d(r.value.stats.deletions), 1)
            ]),
            b.value ? (o(), n("div", Hr, [
              l(Le, { variant: "section" }, {
                default: a(() => [...u[6] || (u[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(P, null, Y(r.value.changes.workflows.added, (E) => (o(), n("div", {
                key: "add-" + E,
                class: "change-item added"
              }, [
                u[7] || (u[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(E), 1)
              ]))), 128)),
              (o(!0), n(P, null, Y(r.value.changes.workflows.modified, (E) => (o(), n("div", {
                key: "mod-" + E,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(E), 1)
              ]))), 128)),
              (o(!0), n(P, null, Y(r.value.changes.workflows.deleted, (E) => (o(), n("div", {
                key: "del-" + E,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(E), 1)
              ]))), 128))
            ])) : v("", !0),
            m.value ? (o(), n("div", Kr, [
              l(Le, { variant: "section" }, {
                default: a(() => [...u[10] || (u[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(P, null, Y(r.value.changes.nodes.added, (E) => (o(), n("div", {
                key: "add-" + E.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(E.name), 1),
                E.version ? (o(), n("span", jr, "(" + d(E.version) + ")", 1)) : v("", !0)
              ]))), 128)),
              (o(!0), n(P, null, Y(r.value.changes.nodes.removed, (E) => (o(), n("div", {
                key: "rem-" + E.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(E.name), 1)
              ]))), 128))
            ])) : v("", !0),
            r.value.changes.models.resolved > 0 ? (o(), n("div", qr, [
              l(Le, { variant: "section" }, {
                default: a(() => [...u[13] || (u[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", Yr, [
                u[14] || (u[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : v("", !0)
          ])) : v("", !0)
        ];
      }),
      footer: a(() => [
        l(ve, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (h) => g.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...u[15] || (u[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        l(ve, {
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
}), Xr = /* @__PURE__ */ W(Jr, [["__scopeId", "data-v-d256ff6d"]]), Zr = { class: "dialog-message" }, Qr = {
  key: 0,
  class: "dialog-details"
}, ec = {
  key: 1,
  class: "dialog-warning"
}, tc = /* @__PURE__ */ O({
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
    return (i, s) => (o(), p(Qe, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => i.$emit("cancel"))
    }, {
      body: a(() => [
        t("p", Zr, d(e.message), 1),
        e.details && e.details.length ? (o(), n("div", Qr, [
          (o(!0), n(P, null, Y(e.details, (r, c) => (o(), n("div", {
            key: c,
            class: "detail-item"
          }, " • " + d(r), 1))), 128))
        ])) : v("", !0),
        e.warning ? (o(), n("p", ec, [
          s[4] || (s[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + d(e.warning), 1)
        ])) : v("", !0)
      ]),
      footer: a(() => [
        l(ve, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => i.$emit("cancel"))
        }, {
          default: a(() => [
            f(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), p(ve, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => i.$emit("secondary"))
        }, {
          default: a(() => [
            f(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : v("", !0),
        l(ve, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => i.$emit("confirm"))
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
}), oc = /* @__PURE__ */ W(tc, [["__scopeId", "data-v-3670b9f5"]]), ac = { class: "modal-header" }, sc = { class: "modal-body" }, nc = { class: "switch-message" }, lc = { class: "switch-details" }, ic = { class: "modal-actions" }, rc = /* @__PURE__ */ O({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (i, s) => (o(), p(Ze, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => i.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = we(() => {
          }, ["stop"]))
        }, [
          t("div", ac, [
            s[5] || (s[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => i.$emit("close"))
            }, "✕")
          ]),
          t("div", sc, [
            t("p", nc, [
              s[6] || (s[6] = f(" Switch from ", -1)),
              t("strong", null, d(e.fromEnvironment), 1),
              s[7] || (s[7] = f(" to ", -1)),
              t("strong", null, d(e.toEnvironment), 1),
              s[8] || (s[8] = f("? ", -1))
            ]),
            s[9] || (s[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", lc, ' Your current work will be preserved. You can switch back to "' + d(e.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", ic, [
            l(U, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => i.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(U, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => i.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                f(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : v("", !0)
    ]));
  }
}), cc = /* @__PURE__ */ W(rc, [["__scopeId", "data-v-44181b99"]]), dc = { class: "progress-bar" }, uc = /* @__PURE__ */ O({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const i = e, s = B(() => `${Math.max(0, Math.min(100, i.progress))}%`);
    return (r, c) => (o(), n("div", dc, [
      t("div", {
        class: K(["progress-fill", e.variant]),
        style: He({ width: s.value })
      }, null, 6)
    ]));
  }
}), mc = /* @__PURE__ */ W(uc, [["__scopeId", "data-v-1beb0512"]]), vc = {
  key: 0,
  class: "modal-overlay"
}, fc = { class: "modal-content" }, gc = { class: "modal-body" }, hc = { class: "progress-info" }, pc = { class: "progress-percentage" }, yc = { class: "progress-state" }, bc = { class: "switch-steps" }, wc = { class: "step-icon" }, kc = { class: "step-label" }, _c = /* @__PURE__ */ O({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const i = e, s = B(() => {
      const b = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return i.message || b[i.state] || i.state;
    }), r = B(() => i.state === "complete" ? "success" : i.state === "critical_failure" || i.state === "rolled_back" ? "error" : "default"), c = B(() => {
      const b = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = b.findIndex((g) => g.state === i.state);
      return b.map((g, u) => {
        let h = "pending", L = "○";
        return u < m ? (h = "completed", L = "✓") : u === m && (h = "active", L = "⟳"), {
          ...g,
          status: h,
          icon: L
        };
      });
    });
    return (b, m) => (o(), p(Ze, { to: "body" }, [
      e.show ? (o(), n("div", vc, [
        t("div", fc, [
          m[1] || (m[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", gc, [
            l(mc, {
              progress: e.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            t("div", hc, [
              t("div", pc, d(e.progress) + "%", 1),
              t("div", yc, d(s.value), 1)
            ]),
            t("div", bc, [
              (o(!0), n(P, null, Y(c.value, (g) => (o(), n("div", {
                key: g.state,
                class: K(["switch-step", g.status])
              }, [
                t("span", wc, d(g.icon), 1),
                t("span", kc, d(g.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : v("", !0)
    ]));
  }
}), $c = /* @__PURE__ */ W(_c, [["__scopeId", "data-v-3b6c9fa8"]]), Cc = { class: "comfygit-panel" }, xc = { class: "panel-header" }, Ic = { class: "header-left" }, Sc = {
  key: 0,
  class: "header-info"
}, Ec = { class: "header-actions" }, Lc = { class: "env-switcher" }, zc = {
  key: 0,
  class: "header-info"
}, Mc = { class: "branch-name" }, Nc = { class: "panel-main" }, Rc = { class: "sidebar" }, Uc = { class: "sidebar-section" }, Bc = { class: "sidebar-section" }, Dc = { class: "sidebar-section" }, Vc = { class: "content-area" }, Tc = {
  key: 0,
  class: "error-message"
}, Oc = {
  key: 1,
  class: "loading"
}, Wc = { class: "dialog-content env-selector-dialog" }, Fc = { class: "dialog-header" }, Ac = { class: "dialog-body" }, Pc = { class: "env-list" }, Gc = { class: "env-info" }, Hc = { class: "env-name-row" }, Kc = { class: "env-indicator" }, jc = { class: "env-name" }, qc = {
  key: 0,
  class: "env-branch"
}, Yc = {
  key: 1,
  class: "current-label"
}, Jc = { class: "env-stats" }, Xc = ["onClick"], Zc = { class: "toast-container" }, Qc = { class: "toast-icon" }, ed = { class: "toast-message" }, td = /* @__PURE__ */ O({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: i }) {
    const s = i, {
      getStatus: r,
      getHistory: c,
      getBranches: b,
      checkout: m,
      createBranch: g,
      switchBranch: u,
      getEnvironments: h,
      switchEnvironment: L,
      getSwitchProgress: E
    } = he(), z = I(null), G = I([]), q = I([]), T = I([]), C = B(() => T.value.find((F) => F.is_current)), x = I(!1), D = I(null), H = I(null), _ = I(!1), $ = I(!1), y = I(!1), k = I(""), w = I({ state: "idle", progress: 0, message: "" });
    let N = null;
    const M = I("status"), ce = I("this-env");
    function V(F, S) {
      M.value = F, ce.value = S;
    }
    function R(F) {
      const le = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[F];
      le && V(le.view, le.section);
    }
    function j() {
      V("branches", "this-env");
    }
    const oe = I(null), xe = I([]);
    let et = 0;
    function ne(F, S = "info", le = 3e3) {
      const de = ++et;
      return xe.value.push({ id: de, message: F, type: S }), le > 0 && setTimeout(() => {
        xe.value = xe.value.filter((Ne) => Ne.id !== de);
      }, le), de;
    }
    function Ie(F) {
      xe.value = xe.value.filter((S) => S.id !== F);
    }
    function tt(F) {
      switch (F) {
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
    const We = B(() => {
      if (!z.value) return "neutral";
      const F = z.value.workflows, S = F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || z.value.has_changes;
      return z.value.comparison.is_synced ? S ? "warning" : "success" : "error";
    });
    B(() => z.value ? We.value === "success" ? "All synced" : We.value === "warning" ? "Uncommitted changes" : We.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      x.value = !0, D.value = null;
      try {
        const [F, S, le, de] = await Promise.all([
          r(),
          c(),
          b(),
          h()
        ]);
        z.value = F, G.value = S.commits, q.value = le.branches, T.value = de, s("statusUpdate", F);
      } catch (F) {
        D.value = F instanceof Error ? F.message : "Failed to load status", z.value = null, G.value = [], q.value = [];
      } finally {
        x.value = !1;
      }
    }
    function ot(F) {
      H.value = F;
    }
    async function Ke(F) {
      var le;
      H.value = null;
      const S = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      oe.value = {
        title: S ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: S ? "You have uncommitted changes that will be lost." : `Checkout commit ${F.short_hash || ((le = F.hash) == null ? void 0 : le.slice(0, 7))}?`,
        details: S ? vt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: S,
        onConfirm: async () => {
          var Ae;
          oe.value = null;
          const de = ne(`Checking out ${F.short_hash || ((Ae = F.hash) == null ? void 0 : Ae.slice(0, 7))}...`, "info", 0), Ne = await m(F.hash, S);
          Ie(de), Ne.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function A(F) {
      const S = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      oe.value = {
        title: S ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: S ? "You have uncommitted changes." : `Switch to branch "${F}"?`,
        details: S ? vt() : void 0,
        warning: S ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          oe.value = null;
          const le = ne(`Switching to ${F}...`, "info", 0), de = await u(F, S);
          Ie(le), de.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(de.message || "Branch switch failed", "error");
        }
      };
    }
    async function te(F) {
      const S = ne(`Creating branch ${F}...`, "info", 0), le = await g(F);
      Ie(S), le.status === "success" ? (ne(`Branch "${F}" created`, "success"), await Se()) : ne(le.message || "Failed to create branch", "error");
    }
    async function re(F) {
      H.value = null;
      const S = prompt("Enter branch name:");
      if (S) {
        const le = ne(`Creating branch ${S}...`, "info", 0), de = await g(S, F.hash);
        Ie(le), de.status === "success" ? (ne(`Branch "${S}" created from ${F.short_hash}`, "success"), await Se()) : ne(de.message || "Failed to create branch", "error");
      }
    }
    async function Fe(F) {
      _.value = !1, k.value = F, $.value = !0;
    }
    async function je() {
      $.value = !1, y.value = !0, w.value = { state: "preparing", progress: 10, message: "Initiating switch..." };
      try {
        await L(k.value), Et();
      } catch (F) {
        y.value = !1, ne(`Failed to initiate switch: ${F instanceof Error ? F.message : "Unknown error"}`, "error"), w.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Et() {
      N || (N = window.setInterval(async () => {
        try {
          const F = await E();
          if (!F)
            return;
          w.value = {
            state: F.state,
            progress: F.progress,
            message: F.message || ""
          }, F.state === "complete" ? (at(), y.value = !1, ne(`✓ Switched to ${k.value}`, "success"), await Se(), k.value = "") : F.state === "rolled_back" ? (at(), y.value = !1, ne("Switch failed, restored previous environment", "warning"), k.value = "") : F.state === "critical_failure" && (at(), y.value = !1, ne(`Critical error during switch: ${F.message}`, "error"), k.value = "");
        } catch (F) {
          console.error("Failed to poll switch progress:", F);
        }
      }, 1e3));
    }
    function at() {
      N && (clearInterval(N), N = null);
    }
    function Lt() {
      $.value = !1, k.value = "";
    }
    async function zt(F) {
      const S = ne(`Creating environment "${F}"...`, "info", 0);
      Ie(S), ne("Environment creation not yet implemented", "warning");
    }
    async function Mt(F) {
      const S = ne(`Deleting environment "${F}"...`, "info", 0);
      Ie(S), ne("Environment deletion not yet implemented", "warning");
    }
    function Nt(F) {
      ne(`Viewing details for "${F}"`, "info"), V("models-env", "this-env");
    }
    function vt() {
      if (!z.value) return [];
      const F = [], S = z.value.workflows;
      return S.new.length && F.push(`${S.new.length} new workflow(s)`), S.modified.length && F.push(`${S.modified.length} modified workflow(s)`), S.deleted.length && F.push(`${S.deleted.length} deleted workflow(s)`), F;
    }
    return ue(Se), (F, S) => {
      var le, de, Ne, Ae;
      return o(), n("div", Cc, [
        t("div", xc, [
          t("div", Ic, [
            S[20] || (S[20] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            z.value ? (o(), n("div", Sc)) : v("", !0)
          ]),
          t("div", Ec, [
            t("button", {
              class: K(["icon-btn", { spinning: x.value }]),
              onClick: Se,
              title: "Refresh"
            }, [...S[21] || (S[21] = [
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
              onClick: S[0] || (S[0] = (Z) => s("close")),
              title: "Close"
            }, [...S[22] || (S[22] = [
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
        t("div", Lc, [
          S[24] || (S[24] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          t("button", {
            class: "env-switcher-btn",
            onClick: S[1] || (S[1] = (Z) => V("environments", "all-envs"))
          }, [
            z.value ? (o(), n("div", zc, [
              t("span", null, d(((le = C.value) == null ? void 0 : le.name) || ((de = z.value) == null ? void 0 : de.environment) || "Loading..."), 1),
              t("span", Mc, "(" + d(z.value.branch || "detached") + ")", 1)
            ])) : v("", !0),
            S[23] || (S[23] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", Nc, [
          t("div", Rc, [
            t("div", Uc, [
              S[25] || (S[25] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "status" && ce.value === "this-env" }]),
                onClick: S[2] || (S[2] = (Z) => V("status", "this-env"))
              }, " STATUS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "workflows" }]),
                onClick: S[3] || (S[3] = (Z) => V("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "models-env" }]),
                onClick: S[4] || (S[4] = (Z) => V("models-env", "this-env"))
              }, " MODELS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "branches" }]),
                onClick: S[5] || (S[5] = (Z) => V("branches", "this-env"))
              }, " BRANCHES ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "history" }]),
                onClick: S[6] || (S[6] = (Z) => V("history", "this-env"))
              }, " HISTORY ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "nodes" }]),
                onClick: S[7] || (S[7] = (Z) => V("nodes", "this-env"))
              }, " NODES ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "debug-env" }]),
                onClick: S[8] || (S[8] = (Z) => V("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            S[28] || (S[28] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Bc, [
              S[26] || (S[26] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "environments" }]),
                onClick: S[9] || (S[9] = (Z) => V("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "model-index" }]),
                onClick: S[10] || (S[10] = (Z) => V("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "settings" }]),
                onClick: S[11] || (S[11] = (Z) => V("settings", "all-envs"))
              }, " SETTINGS ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "debug-workspace" }]),
                onClick: S[12] || (S[12] = (Z) => V("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            S[29] || (S[29] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Dc, [
              S[27] || (S[27] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "export" }]),
                onClick: S[13] || (S[13] = (Z) => V("export", "sharing"))
              }, " EXPORT ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "import" }]),
                onClick: S[14] || (S[14] = (Z) => V("import", "sharing"))
              }, " IMPORT ", 2),
              t("button", {
                class: K(["sidebar-item", { active: M.value === "remotes" }]),
                onClick: S[15] || (S[15] = (Z) => V("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          t("div", Vc, [
            D.value ? (o(), n("div", Tc, d(D.value), 1)) : !z.value && M.value === "status" ? (o(), n("div", Oc, " Loading status... ")) : (o(), n(P, { key: 2 }, [
              M.value === "status" ? (o(), p(Go, {
                key: 0,
                status: z.value,
                onSwitchBranch: j
              }, null, 8, ["status"])) : M.value === "workflows" ? (o(), p(en, {
                key: 1,
                onRefresh: Se
              })) : M.value === "models-env" ? (o(), p(vn, {
                key: 2,
                onNavigate: R
              })) : M.value === "branches" ? (o(), p(na, {
                key: 3,
                branches: q.value,
                current: ((Ne = z.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: A,
                onCreate: te
              }, null, 8, ["branches", "current"])) : M.value === "history" ? (o(), p(ha, {
                key: 4,
                commits: G.value,
                onSelect: ot,
                onCheckout: Ke
              }, null, 8, ["commits"])) : M.value === "nodes" ? (o(), p(wn, { key: 5 })) : M.value === "debug-env" ? (o(), p(Vl, { key: 6 })) : M.value === "environments" ? (o(), p(Yl, {
                key: 7,
                onSwitch: Fe,
                onCreate: zt,
                onDelete: Mt,
                onViewDetails: Nt
              })) : M.value === "model-index" ? (o(), p(gn, { key: 8 })) : M.value === "settings" ? (o(), p(hl, { key: 9 })) : M.value === "debug-workspace" ? (o(), p(Ul, { key: 10 })) : M.value === "export" ? (o(), p(ni, { key: 11 })) : M.value === "import" ? (o(), p(Rr, { key: 12 })) : M.value === "remotes" ? (o(), p(Qn, { key: 13 })) : v("", !0)
            ], 64))
          ])
        ]),
        H.value ? (o(), p(Xr, {
          key: 0,
          commit: H.value,
          onClose: S[16] || (S[16] = (Z) => H.value = null),
          onCheckout: Ke,
          onCreateBranch: re
        }, null, 8, ["commit"])) : v("", !0),
        oe.value ? (o(), p(oc, {
          key: 1,
          title: oe.value.title,
          message: oe.value.message,
          details: oe.value.details,
          warning: oe.value.warning,
          confirmLabel: oe.value.confirmLabel,
          cancelLabel: oe.value.cancelLabel,
          secondaryLabel: oe.value.secondaryLabel,
          secondaryAction: oe.value.secondaryAction,
          destructive: oe.value.destructive,
          onConfirm: oe.value.onConfirm,
          onCancel: S[17] || (S[17] = (Z) => oe.value = null),
          onSecondary: oe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : v("", !0),
        l(cc, {
          show: $.value,
          "from-environment": ((Ae = C.value) == null ? void 0 : Ae.name) || "unknown",
          "to-environment": k.value,
          onConfirm: je,
          onClose: Lt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        l($c, {
          show: y.value,
          state: w.value.state,
          progress: w.value.progress,
          message: w.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        _.value ? (o(), n("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: S[19] || (S[19] = we((Z) => _.value = !1, ["self"]))
        }, [
          t("div", Wc, [
            t("div", Fc, [
              S[31] || (S[31] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: S[18] || (S[18] = (Z) => _.value = !1)
              }, [...S[30] || (S[30] = [
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
            t("div", Ac, [
              S[32] || (S[32] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", Pc, [
                (o(!0), n(P, null, Y(T.value, (Z) => (o(), n("div", {
                  key: Z.name,
                  class: K(["env-item", { current: Z.is_current }])
                }, [
                  t("div", Gc, [
                    t("div", Hc, [
                      t("span", Kc, d(Z.is_current ? "●" : "○"), 1),
                      t("span", jc, d(Z.name), 1),
                      Z.current_branch ? (o(), n("span", qc, "(" + d(Z.current_branch) + ")", 1)) : v("", !0),
                      Z.is_current ? (o(), n("span", Yc, "CURRENT")) : v("", !0)
                    ]),
                    t("div", Jc, d(Z.workflow_count) + " workflows • " + d(Z.node_count) + " nodes ", 1)
                  ]),
                  Z.is_current ? v("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Rd) => Fe(Z.name)
                  }, " SWITCH ", 8, Xc))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : v("", !0),
        t("div", Zc, [
          l(Dt, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(P, null, Y(xe.value, (Z) => (o(), n("div", {
                key: Z.id,
                class: K(["toast", Z.type])
              }, [
                t("span", Qc, d(tt(Z.type)), 1),
                t("span", ed, d(Z.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), od = /* @__PURE__ */ W(td, [["__scopeId", "data-v-3193f57f"]]), ad = { class: "base-textarea-wrapper" }, sd = ["value", "rows", "placeholder", "disabled", "maxlength"], nd = {
  key: 0,
  class: "base-textarea-count"
}, ld = /* @__PURE__ */ O({
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
    return (i, s) => (o(), n("div", ad, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => i.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = _e(we((r) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = _e(we((r) => i.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, sd),
      e.showCharCount && e.maxLength ? (o(), n("div", nd, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : v("", !0)
    ]));
  }
}), id = /* @__PURE__ */ W(ld, [["__scopeId", "data-v-5516e6fc"]]), rd = { class: "commit-popover" }, cd = { class: "popover-header" }, dd = { class: "popover-body" }, ud = {
  key: 0,
  class: "changes-summary"
}, md = {
  key: 0,
  class: "change-item"
}, vd = {
  key: 1,
  class: "change-item"
}, fd = {
  key: 2,
  class: "change-item"
}, gd = {
  key: 3,
  class: "change-item"
}, hd = {
  key: 4,
  class: "change-item"
}, pd = {
  key: 1,
  class: "no-changes"
}, yd = {
  key: 2,
  class: "loading"
}, bd = { class: "message-section" }, wd = { class: "popover-footer" }, kd = /* @__PURE__ */ O({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: i }) {
    const s = e, r = i, { commit: c } = he(), b = I(""), m = I(!1), g = I(null), u = B(() => {
      if (!s.status) return !1;
      const L = s.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || s.status.has_changes;
    });
    async function h() {
      var L, E, z;
      if (!(!u.value || !b.value.trim() || m.value)) {
        m.value = !0, g.value = null;
        try {
          const G = await c(b.value.trim());
          G.status === "success" ? (g.value = {
            type: "success",
            message: `Committed: ${((L = G.summary) == null ? void 0 : L.new) || 0} new, ${((E = G.summary) == null ? void 0 : E.modified) || 0} modified, ${((z = G.summary) == null ? void 0 : z.deleted) || 0} deleted`
          }, b.value = "", setTimeout(() => r("committed"), 1e3)) : G.status === "no_changes" ? g.value = { type: "error", message: "No changes to commit" } : g.value = { type: "error", message: G.message || "Commit failed" };
        } catch (G) {
          g.value = { type: "error", message: G instanceof Error ? G.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (L, E) => (o(), n("div", rd, [
      t("div", cd, [
        E[4] || (E[4] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: E[0] || (E[0] = (z) => r("close"))
        }, [...E[3] || (E[3] = [
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
      t("div", dd, [
        e.status && u.value ? (o(), n("div", ud, [
          e.status.workflows.new.length ? (o(), n("div", md, [
            E[5] || (E[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : v("", !0),
          e.status.workflows.modified.length ? (o(), n("div", vd, [
            E[6] || (E[6] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : v("", !0),
          e.status.workflows.deleted.length ? (o(), n("div", fd, [
            E[7] || (E[7] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : v("", !0),
          e.status.git_changes.nodes_added.length ? (o(), n("div", gd, [
            E[8] || (E[8] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : v("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), n("div", hd, [
            E[9] || (E[9] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : v("", !0)
        ])) : e.status ? (o(), n("div", pd, " No changes to commit ")) : (o(), n("div", yd, " Loading... ")),
        t("div", bd, [
          l(id, {
            modelValue: b.value,
            "onUpdate:modelValue": E[1] || (E[1] = (z) => b.value = z),
            placeholder: u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || m.value,
            rows: 3,
            onCtrlEnter: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        g.value ? (o(), n("div", {
          key: 3,
          class: K(["result", g.value.type])
        }, d(g.value.message), 3)) : v("", !0)
      ]),
      t("div", wd, [
        l(ve, {
          variant: "secondary",
          onClick: E[2] || (E[2] = (z) => r("close"))
        }, {
          default: a(() => [...E[10] || (E[10] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        l(ve, {
          variant: "primary",
          disabled: !u.value || !b.value.trim() || m.value,
          loading: m.value,
          onClick: h
        }, {
          default: a(() => [
            f(d(m.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), _d = /* @__PURE__ */ W(kd, [["__scopeId", "data-v-4f587977"]]), $d = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Cd = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', xd = {
  comfy: $d,
  phosphor: Cd
}, ut = "comfy", Ct = "comfygit-theme";
let Re = null, xt = ut;
function Id() {
  try {
    const e = localStorage.getItem(Ct);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ut;
}
function It(e = ut) {
  Re && Re.remove(), Re = document.createElement("style"), Re.id = "comfygit-theme-styles", Re.setAttribute("data-theme", e), Re.textContent = xd[e], document.head.appendChild(Re), document.body.setAttribute("data-comfygit-theme", e), xt = e;
  try {
    localStorage.setItem(Ct, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function Sd() {
  return xt;
}
function Ed(e) {
  It(e);
}
const mt = document.createElement("link");
mt.rel = "stylesheet";
mt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(mt);
const Ld = Id();
It(Ld);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Ed(e);
  },
  getTheme: () => {
    const e = Sd();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let be = null, pe = null, Ge = null;
const Te = I(null);
async function ct() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const i = await window.app.api.fetchApi("/v2/comfygit/status");
    i.ok && (Te.value = await i.json());
  } catch {
  }
}
function zd() {
  if (!Te.value) return !1;
  const e = Te.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Te.value.has_changes;
}
function Md() {
  be && be.remove(), be = document.createElement("div"), be.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", be.appendChild(e), be.addEventListener("click", (r) => {
    r.target === be && it();
  });
  const i = (r) => {
    r.key === "Escape" && (it(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), pt({
    render: () => yt(od, {
      onClose: it,
      onStatusUpdate: (r) => {
        Te.value = r, Xe();
      }
    })
  }).mount(e), document.body.appendChild(be);
}
function it() {
  be && (be.remove(), be = null);
}
function Nd(e) {
  Pe(), pe = document.createElement("div"), pe.className = "comfygit-commit-popover-container";
  const i = e.getBoundingClientRect();
  pe.style.position = "fixed", pe.style.top = `${i.bottom + 8}px`, pe.style.right = `${window.innerWidth - i.right}px`, pe.style.zIndex = "10001";
  const s = (c) => {
    pe && !pe.contains(c.target) && c.target !== e && (Pe(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (c) => {
    c.key === "Escape" && (Pe(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ge = pt({
    render: () => yt(_d, {
      status: Te.value,
      onClose: Pe,
      onCommitted: () => {
        Pe(), ct().then(Xe);
      }
    })
  }), Ge.mount(pe), document.body.appendChild(pe);
}
function Pe() {
  Ge && (Ge.unmount(), Ge = null), pe && (pe.remove(), pe = null);
}
let ke = null;
function Xe() {
  if (!ke) return;
  const e = ke.querySelector(".commit-indicator");
  e && (e.style.display = zd() ? "block" : "none");
}
const St = document.createElement("style");
St.textContent = `
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
document.head.appendChild(St);
st.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const i = document.createElement("button");
    i.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", i.textContent = "ComfyGit", i.title = "ComfyGit Control Panel", i.onclick = Md, ke = document.createElement("button"), ke.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ke.innerHTML = 'Commit <span class="commit-indicator"></span>', ke.title = "Quick Commit", ke.onclick = () => Nd(ke), e.appendChild(i), e.appendChild(ke), (r = (s = st.menu) == null ? void 0 : s.settingsGroup) != null && r.element && (st.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ct(), Xe(), setInterval(async () => {
      await ct(), Xe();
    }, 3e4);
  }
});
