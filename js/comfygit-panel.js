import { app as Ye } from "../../scripts/app.js";
import { defineComponent as O, createElementBlock as s, openBlock as t, createCommentVNode as d, createElementVNode as a, renderSlot as J, createBlock as h, resolveDynamicComponent as tt, normalizeClass as j, withCtx as o, toDisplayString as u, createVNode as l, createTextVNode as v, computed as T, Fragment as P, renderList as X, ref as I, onMounted as re, withKeys as ye, withModifiers as ze, onUnmounted as bt, Teleport as rt, normalizeStyle as ot, watch as wt, resolveComponent as kt, createSlots as it, TransitionGroup as _t, createApp as ct, h as dt } from "vue";
const $t = { class: "panel-layout" }, Ct = {
  key: 0,
  class: "panel-layout-header"
}, xt = {
  key: 1,
  class: "panel-layout-search"
}, It = { class: "panel-layout-content" }, St = {
  key: 2,
  class: "panel-layout-footer"
}, Et = /* @__PURE__ */ O({
  __name: "PanelLayout",
  setup(e) {
    return (c, n) => (t(), s("div", $t, [
      c.$slots.header ? (t(), s("div", Ct, [
        J(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (t(), s("div", xt, [
        J(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      a("div", It, [
        J(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (t(), s("div", St, [
        J(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), A = (e, c) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of c)
    n[r] = i;
  return n;
}, ve = /* @__PURE__ */ A(Et, [["__scopeId", "data-v-21565df9"]]), Lt = {
  key: 0,
  class: "panel-title-prefix"
}, zt = {
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
    return (c, n) => (t(), h(tt(`h${e.level}`), {
      class: j(["panel-title", e.variant])
    }, {
      default: o(() => [
        e.showPrefix ? (t(), s("span", Lt, u(e.prefix), 1)) : (t(), s("span", zt)),
        J(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nt = /* @__PURE__ */ A(Rt, [["__scopeId", "data-v-c3875efc"]]), Mt = ["title"], Ut = ["width", "height"], Dt = /* @__PURE__ */ O({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (c, n) => (t(), s("button", {
      class: "info-button",
      title: e.title,
      onClick: n[0] || (n[0] = (r) => c.$emit("click"))
    }, [
      (t(), s("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...n[1] || (n[1] = [
        a("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        a("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, Ut))
    ], 8, Mt));
  }
}), Vt = /* @__PURE__ */ A(Dt, [["__scopeId", "data-v-6fc7f16d"]]), Tt = { class: "header-left" }, Bt = {
  key: 0,
  class: "header-actions"
}, Ot = /* @__PURE__ */ O({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (c, n) => (t(), s("div", {
      class: j(["panel-header", { stacked: e.stacked }])
    }, [
      a("div", Tt, [
        l(Nt, { "show-prefix": e.showPrefix }, {
          default: o(() => [
            v(u(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), h(Vt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (t(), s("div", Bt, [
        J(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), fe = /* @__PURE__ */ A(Ot, [["__scopeId", "data-v-55a62cd6"]]), At = {
  key: 0,
  class: "section-title-count"
}, Wt = {
  key: 1,
  class: "section-title-icon"
}, Ft = /* @__PURE__ */ O({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (c, n) => (t(), h(tt(`h${e.level}`), {
      class: j(["section-title", { clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (r) => e.clickable && c.$emit("click"))
    }, {
      default: o(() => [
        J(c.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), s("span", At, "(" + u(e.count) + ")", 1)) : d("", !0),
        e.clickable ? (t(), s("span", Wt, u(e.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Oe = /* @__PURE__ */ A(Ft, [["__scopeId", "data-v-559361eb"]]), Pt = { class: "status-grid" }, Gt = { class: "status-grid__column" }, Ht = { class: "status-grid__title" }, Kt = { class: "status-grid__column status-grid__column--right" }, jt = { class: "status-grid__title" }, qt = /* @__PURE__ */ O({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (c, n) => (t(), s("div", Pt, [
      a("div", Gt, [
        a("h4", Ht, u(e.leftTitle), 1),
        J(c.$slots, "left", {}, void 0, !0)
      ]),
      a("div", Kt, [
        a("h4", jt, u(e.rightTitle), 1),
        J(c.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Yt = /* @__PURE__ */ A(qt, [["__scopeId", "data-v-fe556068"]]), Jt = {
  key: 0,
  class: "status-item__icon"
}, Xt = {
  key: 1,
  class: "status-item__count"
}, Zt = { class: "status-item__label" }, Qt = /* @__PURE__ */ O({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const c = e, n = T(() => `status-item--${c.variant}`);
    return (r, i) => (t(), s("div", {
      class: j(["status-item", n.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), s("span", Jt, u(e.icon), 1)) : d("", !0),
      e.count !== void 0 ? (t(), s("span", Xt, u(e.count), 1)) : d("", !0),
      a("span", Zt, u(e.label), 1)
    ], 2));
  }
}), ke = /* @__PURE__ */ A(Qt, [["__scopeId", "data-v-6f929183"]]), eo = { class: "issue-card__header" }, to = { class: "issue-card__icon" }, oo = { class: "issue-card__title" }, ao = {
  key: 0,
  class: "issue-card__content"
}, no = {
  key: 0,
  class: "issue-card__description"
}, so = {
  key: 1,
  class: "issue-card__items"
}, lo = {
  key: 2,
  class: "issue-card__actions"
}, ro = /* @__PURE__ */ O({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const c = e, n = T(() => `issue-card--${c.severity}`);
    return (r, i) => (t(), s("div", {
      class: j(["issue-card", n.value])
    }, [
      a("div", eo, [
        a("span", to, u(e.icon), 1),
        a("h4", oo, u(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), s("div", ao, [
        e.description ? (t(), s("p", no, u(e.description), 1)) : d("", !0),
        J(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      e.items && e.items.length ? (t(), s("div", so, [
        (t(!0), s(P, null, X(e.items, (_, y) => (t(), s("div", {
          key: y,
          class: "issue-card__item"
        }, [
          i[0] || (i[0] = a("span", { class: "issue-card__bullet" }, "•", -1)),
          a("span", null, u(_), 1)
        ]))), 128))
      ])) : d("", !0),
      r.$slots.actions ? (t(), s("div", lo, [
        J(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ A(ro, [["__scopeId", "data-v-df6aa348"]]), io = ["type", "disabled"], co = {
  key: 0,
  class: "spinner"
}, uo = /* @__PURE__ */ O({
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
    return (c, n) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: j(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      e.loading ? (t(), s("span", co)) : d("", !0),
      e.loading ? d("", !0) : J(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, io));
  }
}), U = /* @__PURE__ */ A(uo, [["__scopeId", "data-v-772abe47"]]), mo = { class: "empty-state" }, vo = {
  key: 0,
  class: "empty-icon"
}, fo = { class: "empty-message" }, go = /* @__PURE__ */ O({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (c, n) => (t(), s("div", mo, [
      e.icon ? (t(), s("div", vo, u(e.icon), 1)) : d("", !0),
      a("p", fo, u(e.message), 1),
      e.actionLabel ? (t(), h(U, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: o(() => [
          v(u(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), me = /* @__PURE__ */ A(go, [["__scopeId", "data-v-4466284f"]]), ho = { class: "branch-indicator" }, po = { class: "branch-indicator__info" }, yo = { class: "branch-indicator__label" }, bo = { class: "branch-indicator__name" }, wo = {
  key: 0,
  class: "branch-indicator__remote"
}, ko = {
  key: 0,
  class: "branch-indicator__status"
}, _o = {
  key: 0,
  class: "branch-indicator__ahead"
}, $o = {
  key: 1,
  class: "branch-indicator__behind"
}, Co = {
  key: 1,
  class: "branch-indicator__actions"
}, xo = /* @__PURE__ */ O({
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
    return (c, n) => (t(), s("div", ho, [
      a("div", po, [
        a("span", yo, u(e.label), 1),
        a("span", bo, u(e.branchName), 1),
        e.remote ? (t(), s("span", wo, "@" + u(e.remote), 1)) : d("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), s("div", ko, [
        e.commitsAhead ? (t(), s("span", _o, " ↑ " + u(e.commitsAhead) + " ahead ", 1)) : d("", !0),
        e.commitsBehind ? (t(), s("span", $o, " ↓ " + u(e.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      c.$slots.actions ? (t(), s("div", Co, [
        J(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Io = /* @__PURE__ */ A(xo, [["__scopeId", "data-v-cb8dd50e"]]), So = { style: { "margin-top": "var(--cg-space-1)" } }, Eo = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, Lo = /* @__PURE__ */ O({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: c }) {
    const n = e, r = T(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), i = T(() => {
      const m = n.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), _ = T(() => {
      const m = n.status.git_changes, g = n.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && g.new.length === 0 && g.modified.length === 0 && g.deleted.length === 0;
    }), y = T(() => n.status.missing_models_count > 0 || i.value || !n.status.comparison.is_synced), b = T(() => {
      const m = [];
      return n.status.workflows.new.length > 0 && m.push(`${n.status.workflows.new.length} new workflow${n.status.workflows.new.length === 1 ? "" : "s"}`), n.status.workflows.modified.length > 0 && m.push(`${n.status.workflows.modified.length} modified workflow${n.status.workflows.modified.length === 1 ? "" : "s"}`), n.status.workflows.deleted.length > 0 && m.push(`${n.status.workflows.deleted.length} deleted workflow${n.status.workflows.deleted.length === 1 ? "" : "s"}`), n.status.git_changes.nodes_added.length > 0 && m.push(`${n.status.git_changes.nodes_added.length} node${n.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), n.status.git_changes.nodes_removed.length > 0 && m.push(`${n.status.git_changes.nodes_removed.length} node${n.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${m.length > 0 ? m.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (m, g) => (t(), h(ve, null, {
      header: o(() => [
        l(fe, { title: "STATUS" })
      ]),
      content: o(() => [
        l(Oe, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: o(() => [...g[7] || (g[7] = [
            v(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        l(Yt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: o(() => [
            e.status.workflows.new.length ? (t(), h(ke, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.modified.length ? (t(), h(ke, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.deleted.length ? (t(), h(ke, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : d("", !0),
            l(ke, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: o(() => [
            e.status.git_changes.nodes_added.length ? (t(), h(ke, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : d("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), h(ke, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : d("", !0),
            _.value ? (t(), h(ke, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : d("", !0),
            i.value ? d("", !0) : (t(), h(ke, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        a("div", So, [
          l(Io, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: o(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: g[0] || (g[0] = (x) => m.$emit("switch-branch"))
              }, {
                default: o(() => [...g[8] || (g[8] = [
                  v(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        y.value ? (t(), s("div", Eo, [
          l(Oe, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: o(() => [...g[9] || (g[9] = [
              v(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), h(Je, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: o(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: g[1] || (g[1] = (x) => m.$emit("view-workflows"))
              }, {
                default: o(() => [...g[10] || (g[10] = [
                  v(" View Details ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: g[2] || (g[2] = (x) => m.$emit("resolve-models"))
              }, {
                default: o(() => [...g[11] || (g[11] = [
                  v(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : d("", !0),
          i.value ? (t(), h(Je, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: b.value
          }, {
            actions: o(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: g[3] || (g[3] = (x) => m.$emit("view-history"))
              }, {
                default: o(() => [...g[12] || (g[12] = [
                  v(" View Changes ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: g[4] || (g[4] = (x) => m.$emit("commit-changes"))
              }, {
                default: o(() => [...g[13] || (g[13] = [
                  v(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : d("", !0),
          e.status.comparison.is_synced ? d("", !0) : (t(), h(Je, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: o(() => [
              l(U, {
                variant: "secondary",
                size: "sm",
                onClick: g[5] || (g[5] = (x) => m.$emit("view-debug"))
              }, {
                default: o(() => [...g[14] || (g[14] = [
                  v(" View Logs ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: g[6] || (g[6] = (x) => m.$emit("sync-environment"))
              }, {
                default: o(() => [...g[15] || (g[15] = [
                  v(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : d("", !0),
        !y.value && !i.value ? (t(), h(me, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : d("", !0)
      ]),
      _: 1
    }));
  }
}), zo = /* @__PURE__ */ A(Lo, [["__scopeId", "data-v-2045da26"]]), Ro = ["type", "value", "placeholder", "disabled"], No = /* @__PURE__ */ O({
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
  setup(e, { expose: c, emit: n }) {
    const r = e, i = n, _ = I(null);
    function y(b) {
      const m = b.target.value;
      i("update:modelValue", m);
    }
    return re(() => {
      r.autoFocus && _.value && _.value.focus();
    }), c({
      focus: () => {
        var b;
        return (b = _.value) == null ? void 0 : b.focus();
      },
      blur: () => {
        var b;
        return (b = _.value) == null ? void 0 : b.blur();
      }
    }), (b, m) => (t(), s("input", {
      ref_key: "inputRef",
      ref: _,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: j(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: y,
      onKeyup: [
        m[0] || (m[0] = ye((g) => b.$emit("enter"), ["enter"])),
        m[1] || (m[1] = ye((g) => b.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (g) => b.$emit("focus")),
      onBlur: m[3] || (m[3] = (g) => b.$emit("blur"))
    }, null, 42, Ro));
  }
}), Ee = /* @__PURE__ */ A(No, [["__scopeId", "data-v-0380d08f"]]), Mo = { class: "branch-create-form" }, Uo = { class: "form-actions" }, Do = /* @__PURE__ */ O({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: c }) {
    const n = c, r = I(""), i = T(() => {
      const b = r.value.trim();
      return b.length > 0 && !b.startsWith("-") && !b.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(b);
    });
    function _() {
      i.value && (n("create", r.value.trim()), r.value = "");
    }
    function y() {
      r.value = "", n("cancel");
    }
    return (b, m) => (t(), s("div", Mo, [
      l(Ee, {
        modelValue: r.value,
        "onUpdate:modelValue": m[0] || (m[0] = (g) => r.value = g),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: _,
        onEscape: y
      }, null, 8, ["modelValue"]),
      a("div", Uo, [
        l(U, {
          variant: "primary",
          size: "sm",
          disabled: !i.value,
          onClick: _
        }, {
          default: o(() => [...m[1] || (m[1] = [
            v(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        l(U, {
          variant: "secondary",
          size: "sm",
          onClick: y
        }, {
          default: o(() => [...m[2] || (m[2] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Vo = /* @__PURE__ */ A(Do, [["__scopeId", "data-v-7c500394"]]), To = { class: "branch-list-item__indicator" }, Bo = { class: "branch-list-item__name" }, Oo = {
  key: 0,
  class: "branch-list-item__actions"
}, Ao = {
  key: 0,
  class: "branch-list-item__current-label"
}, Wo = /* @__PURE__ */ O({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (c, n) => (t(), s("div", {
      class: j(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (r) => e.clickable && c.$emit("click"))
    }, [
      a("span", To, u(e.isCurrent ? "●" : "○"), 1),
      a("span", Bo, u(e.branchName), 1),
      c.$slots.actions || e.showCurrentLabel ? (t(), s("div", Oo, [
        J(c.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), s("span", Ao, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Fo = /* @__PURE__ */ A(Wo, [["__scopeId", "data-v-c6581a24"]]), Po = {
  key: 2,
  class: "branch-list"
}, Go = /* @__PURE__ */ O({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: c }) {
    const n = c, r = I(!1);
    function i(y) {
      n("create", y), _();
    }
    function _() {
      r.value = !1;
    }
    return (y, b) => (t(), h(ve, null, {
      header: o(() => [
        l(fe, { title: "BRANCHES" }, {
          actions: o(() => [
            l(U, {
              variant: "ghost",
              size: "sm",
              onClick: b[0] || (b[0] = (m) => r.value = !0),
              title: "Create new branch"
            }, {
              default: o(() => [...b[1] || (b[1] = [
                a("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  a("path", {
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
      content: o(() => [
        r.value ? (t(), h(Vo, {
          key: 0,
          onCreate: i,
          onCancel: _
        })) : d("", !0),
        e.branches.length === 0 ? (t(), h(me, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), s("div", Po, [
          (t(!0), s(P, null, X(e.branches, (m) => (t(), h(Fo, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: o(() => [
              m.is_current ? d("", !0) : (t(), h(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (g) => y.$emit("switch", m.name)
              }, {
                default: o(() => [...b[2] || (b[2] = [
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
}), Ho = /* @__PURE__ */ A(Go, [["__scopeId", "data-v-763d6ec4"]]), Ko = { class: "commit-list" }, jo = /* @__PURE__ */ O({
  __name: "CommitList",
  setup(e) {
    return (c, n) => (t(), s("div", Ko, [
      J(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), qo = /* @__PURE__ */ A(jo, [["__scopeId", "data-v-8c5ee761"]]), Yo = { class: "commit-hash" }, Jo = /* @__PURE__ */ O({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const c = e, n = T(() => c.hash.slice(0, c.length));
    return (r, i) => (t(), s("span", Yo, u(n.value), 1));
  }
}), Xo = /* @__PURE__ */ A(Jo, [["__scopeId", "data-v-7c333cc6"]]), Zo = { class: "commit-message" }, Qo = { class: "commit-date" }, ea = /* @__PURE__ */ O({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: c }) {
    const n = e, r = c;
    function i() {
      n.clickable && r("click");
    }
    return (_, y) => (t(), s("div", {
      class: j(["commit-item", { clickable: e.clickable }]),
      onClick: i
    }, [
      l(Xo, { hash: e.hash }, null, 8, ["hash"]),
      a("span", Zo, u(e.message), 1),
      a("span", Qo, u(e.relativeDate), 1),
      _.$slots.actions ? (t(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: y[0] || (y[0] = ze(() => {
        }, ["stop"]))
      }, [
        J(_.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ta = /* @__PURE__ */ A(ea, [["__scopeId", "data-v-dd7c621b"]]), oa = /* @__PURE__ */ O({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (c, n) => (t(), h(ve, null, {
      header: o(() => [
        l(fe, { title: "HISTORY" })
      ]),
      content: o(() => [
        e.commits.length === 0 ? (t(), h(me, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), h(qo, { key: 1 }, {
          default: o(() => [
            (t(!0), s(P, null, X(e.commits, (r) => (t(), h(ta, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (i) => c.$emit("select", r)
            }, {
              actions: o(() => [
                l(U, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (i) => c.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: o(() => [...n[0] || (n[0] = [
                    a("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      a("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
}), aa = /* @__PURE__ */ A(oa, [["__scopeId", "data-v-981c3c64"]]), st = [
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
}, ut = [
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
], sa = [
  ...ut,
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
], Ve = [
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
], la = [
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
  createEnvironment: async (e, c, n) => {
    await te(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${c}`, n ? `cloned from ${n}` : "");
  },
  deleteEnvironment: async (e) => {
    await te(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await te(400), st),
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
  installWorkflowDeps: async (e, c, n) => {
    await te(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${c}, models=${n}`);
  },
  setModelImportance: async (e, c, n) => {
    await te(200), console.log(`[MOCK] Setting ${c} importance to ${n} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await te(350), ut),
  getWorkspaceModels: async () => (await te(400), sa),
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
    const e = Ve.filter((n) => n.installed), c = Ve.filter((n) => !n.installed);
    return {
      nodes: Ve,
      total_count: Ve.length,
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
  getEnvironmentLogs: async (e, c) => (await te(250), (e ? Te.filter((r) => r.level === e) : Te).slice(0, c || 100)),
  getWorkspaceLogs: async (e, c) => {
    await te(300);
    const n = [...Te, ...Te.map((i) => ({
      ...i,
      context: { ...i.context, environment: "testing" }
    }))];
    return (e ? n.filter((i) => i.level === e) : n).slice(0, c || 100);
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
      synced: st.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await te(300), la.slice(0, e)),
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
  updateRemoteUrl: async (e, c, n) => {
    await te(400), console.log(`[MOCK] Updating remote ${e}: ${c}${n ? ` (push: ${n})` : ""}`);
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
function de() {
  const e = I(!1), c = I(null);
  async function n(F, R) {
    var oe;
    if (!((oe = window.app) != null && oe.api))
      throw new Error("ComfyUI API not available");
    const $ = await window.app.api.fetchApi(F, R);
    if (!$.ok) {
      const se = await $.json().catch(() => ({}));
      throw new Error(se.error || se.message || `Request failed: ${$.status}`);
    }
    return $.json();
  }
  async function r() {
    return ee.getStatus();
  }
  async function i(F, R = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: F, allow_issues: R })
    });
  }
  async function _(F = 10, R = 0) {
    {
      const $ = await ee.getCommitHistory(F);
      return {
        commits: $,
        total: $.length,
        offset: R
      };
    }
  }
  async function y(F) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: F })
    });
  }
  async function b() {
    return ee.getBranches();
  }
  async function m(F) {
    return n(`/v2/comfygit/commit/${F}`);
  }
  async function g(F, R = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: F, force: R })
    });
  }
  async function x(F, R = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: F, start_point: R })
    });
  }
  async function S(F, R = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: F, force: R })
    });
  }
  async function V() {
    return ee.getEnvironments();
  }
  async function H(F) {
    return ee.switchEnvironment(F);
  }
  async function Z() {
    return null;
  }
  async function G(F, R, $) {
    return await ee.createEnvironment(F, R, $), { status: "success" };
  }
  async function D(F) {
    return await ee.deleteEnvironment(F), { status: "success" };
  }
  async function E() {
    return ee.getWorkflows();
  }
  async function M(F) {
    return ee.getWorkflowDetails(F);
  }
  async function N(F) {
    return ee.resolveWorkflow(F);
  }
  async function C(F, R, $) {
    return await ee.installWorkflowDeps(F, R, $), { status: "success" };
  }
  async function k(F, R, $) {
    return ee.setModelImportance(F, R, $);
  }
  async function p() {
    return ee.getEnvironmentModels();
  }
  async function w() {
    return ee.getWorkspaceModels();
  }
  async function f(F, R) {
    return ee.updateModelSource(F, R);
  }
  async function L(F) {
    return ee.deleteModel(F);
  }
  async function B(F) {
    return await ee.downloadModel(F), { status: "success" };
  }
  async function Q() {
    return ee.getConfig();
  }
  async function W(F) {
    return ee.updateConfig(F);
  }
  async function z(F, R) {
    return ee.getEnvironmentLogs(F, R);
  }
  async function K(F, R) {
    return ee.getWorkspaceLogs(F, R);
  }
  async function ie() {
    return ee.getNodes();
  }
  async function Fe(F) {
    return await ee.installNode(F), { status: "success" };
  }
  async function Ue(F) {
    return await ee.updateNode(F), { status: "success" };
  }
  async function Pe(F) {
    return await ee.uninstallNode(F), { status: "success" };
  }
  async function Ge() {
    return ee.getRemotes();
  }
  async function He(F, R) {
    return await ee.addRemote(F, R), { status: "success", remote_name: F };
  }
  async function De(F) {
    return await ee.removeRemote(F), { status: "success", remote_name: F };
  }
  async function Ke(F, R, $) {
    return await ee.updateRemoteUrl(F, R, $), { status: "success", remote_name: F };
  }
  async function je(F) {
    return await ee.fetchRemote(F), { status: "success", remote_name: F };
  }
  async function qe(F) {
    return ee.getRemoteSyncStatus(F);
  }
  return {
    isLoading: e,
    error: c,
    getStatus: r,
    commit: i,
    getHistory: _,
    exportEnv: y,
    // Git Operations
    getBranches: b,
    getCommitDetail: m,
    checkout: g,
    createBranch: x,
    switchBranch: S,
    // Environment Management
    getEnvironments: V,
    switchEnvironment: H,
    getSwitchProgress: Z,
    createEnvironment: G,
    deleteEnvironment: D,
    // Workflow Management
    getWorkflows: E,
    getWorkflowDetails: M,
    resolveWorkflow: N,
    installWorkflowDeps: C,
    setModelImportance: k,
    // Model Management
    getEnvironmentModels: p,
    getWorkspaceModels: w,
    updateModelSource: f,
    deleteModel: L,
    downloadModel: B,
    // Settings
    getConfig: Q,
    updateConfig: W,
    // Debug/Logs
    getEnvironmentLogs: z,
    getWorkspaceLogs: K,
    // Node Management
    getNodes: ie,
    installNode: Fe,
    updateNode: Ue,
    uninstallNode: Pe,
    // Git Remotes
    getRemotes: Ge,
    addRemote: He,
    removeRemote: De,
    updateRemoteUrl: Ke,
    fetchRemote: je,
    getRemoteSyncStatus: qe
  };
}
const ra = { class: "base-modal-header" }, ia = {
  key: 0,
  class: "base-modal-title"
}, ca = { class: "base-modal-body" }, da = {
  key: 0,
  class: "base-modal-loading"
}, ua = {
  key: 1,
  class: "base-modal-error"
}, ma = {
  key: 0,
  class: "base-modal-footer"
}, va = /* @__PURE__ */ O({
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
    const n = e, r = c;
    function i() {
      n.closeOnOverlayClick && r("close");
    }
    function _(y) {
      y.key === "Escape" && r("close");
    }
    return re(() => {
      document.addEventListener("keydown", _), document.body.style.overflow = "hidden";
    }), bt(() => {
      document.removeEventListener("keydown", _), document.body.style.overflow = "";
    }), (y, b) => (t(), h(rt, { to: "body" }, [
      a("div", {
        class: "base-modal-overlay",
        onClick: i
      }, [
        a("div", {
          class: j(["base-modal-content", e.size]),
          onClick: b[1] || (b[1] = ze(() => {
          }, ["stop"]))
        }, [
          a("div", ra, [
            J(y.$slots, "header", {}, () => [
              e.title ? (t(), s("h3", ia, u(e.title), 1)) : d("", !0)
            ], !0),
            e.showCloseButton ? (t(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: b[0] || (b[0] = (m) => y.$emit("close"))
            }, [...b[2] || (b[2] = [
              a("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                a("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : d("", !0)
          ]),
          a("div", ca, [
            e.loading ? (t(), s("div", da, "Loading...")) : e.error ? (t(), s("div", ua, u(e.error), 1)) : J(y.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          y.$slots.footer ? (t(), s("div", ma, [
            J(y.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), We = /* @__PURE__ */ A(va, [["__scopeId", "data-v-700d367b"]]), fa = ["type", "disabled"], ga = {
  key: 0,
  class: "spinner"
}, ha = /* @__PURE__ */ O({
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
    return (c, n) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: j(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      e.loading ? (t(), s("span", ga)) : d("", !0),
      J(c.$slots, "default", {}, void 0, !0)
    ], 10, fa));
  }
}), ce = /* @__PURE__ */ A(ha, [["__scopeId", "data-v-f3452606"]]), pa = {
  key: 0,
  class: "base-title-count"
}, ya = /* @__PURE__ */ O({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (c, n) => (t(), h(tt(`h${e.level}`), {
      class: j(["base-title", e.variant])
    }, {
      default: o(() => [
        J(c.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), s("span", pa, "(" + u(e.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _e = /* @__PURE__ */ A(ya, [["__scopeId", "data-v-5a01561d"]]), ba = ["value", "disabled"], wa = {
  key: 0,
  value: "",
  disabled: ""
}, ka = ["value"], _a = {
  key: 0,
  class: "base-select-error"
}, $a = /* @__PURE__ */ O({
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
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, i) => (t(), s("div", {
      class: j(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      a("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: j(["base-select", { error: !!e.error }]),
        onChange: i[0] || (i[0] = (_) => r.$emit("update:modelValue", _.target.value))
      }, [
        e.placeholder ? (t(), s("option", wa, u(e.placeholder), 1)) : d("", !0),
        (t(!0), s(P, null, X(e.options, (_) => (t(), s("option", {
          key: c(_),
          value: c(_)
        }, u(n(_)), 9, ka))), 128))
      ], 42, ba),
      e.error ? (t(), s("span", _a, u(e.error), 1)) : d("", !0)
    ], 2));
  }
}), Se = /* @__PURE__ */ A($a, [["__scopeId", "data-v-7436d745"]]), Ca = { class: "detail-section" }, xa = {
  key: 0,
  class: "empty-message"
}, Ia = { class: "model-header" }, Sa = { class: "model-name" }, Ea = { class: "model-details" }, La = { class: "model-row" }, za = { class: "model-row" }, Ra = {
  key: 0,
  class: "model-row"
}, Na = { class: "value" }, Ma = {
  key: 1,
  class: "model-row"
}, Ua = { class: "value" }, Da = {
  key: 0,
  class: "model-actions"
}, Va = { class: "detail-section" }, Ta = {
  key: 0,
  class: "empty-message"
}, Ba = { class: "node-name" }, Oa = {
  key: 0,
  class: "node-version"
}, Aa = /* @__PURE__ */ O({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: c }) {
    const n = e, r = c, { getWorkflowDetails: i, setModelImportance: _ } = de(), y = I(null), b = I(!1), m = I(null), g = I(!1), x = I({}), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function V() {
      b.value = !0, m.value = null;
      try {
        y.value = await i(n.workflowName);
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load workflow details";
      } finally {
        b.value = !1;
      }
    }
    function H(G, D) {
      x.value[G] = D, g.value = !0;
    }
    async function Z() {
      if (!g.value) {
        r("close");
        return;
      }
      b.value = !0, m.value = null;
      try {
        for (const [G, D] of Object.entries(x.value))
          await _(n.workflowName, G, D);
        r("close");
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to save changes";
      } finally {
        b.value = !1;
      }
    }
    return re(V), (G, D) => (t(), h(We, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: m.value || void 0,
      onClose: D[2] || (D[2] = (E) => r("close"))
    }, {
      body: o(() => [
        y.value ? (t(), s(P, { key: 0 }, [
          a("section", Ca, [
            l(_e, { variant: "section" }, {
              default: o(() => [
                v("MODELS USED (" + u(y.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            y.value.models.length === 0 ? (t(), s("div", xa, " No models used in this workflow ")) : d("", !0),
            (t(!0), s(P, null, X(y.value.models, (E) => (t(), s("div", {
              key: E.hash,
              class: "model-card"
            }, [
              a("div", Ia, [
                D[3] || (D[3] = a("span", { class: "model-icon" }, "📦", -1)),
                a("span", Sa, u(E.filename), 1)
              ]),
              a("div", Ea, [
                a("div", La, [
                  D[4] || (D[4] = a("span", { class: "label" }, "Status:", -1)),
                  a("span", {
                    class: j(["value", E.status === "available" ? "success" : "error"])
                  }, u(E.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                a("div", za, [
                  D[5] || (D[5] = a("span", { class: "label" }, "Importance:", -1)),
                  l(Se, {
                    "model-value": x.value[E.hash] || E.importance,
                    options: S,
                    "onUpdate:modelValue": (M) => H(E.hash, M)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                E.node_type ? (t(), s("div", Ra, [
                  D[6] || (D[6] = a("span", { class: "label" }, "Used in:", -1)),
                  a("span", Na, u(E.node_type) + " (Node " + u(E.node_id) + ")", 1)
                ])) : d("", !0),
                E.size_mb ? (t(), s("div", Ma, [
                  D[7] || (D[7] = a("span", { class: "label" }, "Size:", -1)),
                  a("span", Ua, u(E.size_mb) + " MB", 1)
                ])) : d("", !0)
              ]),
              E.status === "missing" ? (t(), s("div", Da, [
                l(ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: D[0] || (D[0] = (M) => r("resolve"))
                }, {
                  default: o(() => [...D[8] || (D[8] = [
                    v(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : d("", !0)
            ]))), 128))
          ]),
          D[9] || (D[9] = a("div", { class: "info-box" }, [
            a("div", { class: "info-title" }, "Importance options:"),
            a("ul", { class: "info-list" }, [
              a("li", null, [
                a("strong", null, "Required"),
                v(" — Must have for workflow to run")
              ]),
              a("li", null, [
                a("strong", null, "Flexible"),
                v(" — Workflow adapts if missing")
              ]),
              a("li", null, [
                a("strong", null, "Optional"),
                v(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          a("section", Va, [
            l(_e, { variant: "section" }, {
              default: o(() => [
                v("NODES USED (" + u(y.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            y.value.nodes.length === 0 ? (t(), s("div", Ta, " No custom nodes used in this workflow ")) : d("", !0),
            (t(!0), s(P, null, X(y.value.nodes, (E) => (t(), s("div", {
              key: E.name,
              class: "node-item"
            }, [
              a("span", {
                class: j(["node-status", E.installed ? "installed" : "missing"])
              }, u(E.installed ? "✓" : "✕"), 3),
              a("span", Ba, u(E.name), 1),
              E.version ? (t(), s("span", Oa, "v" + u(E.version), 1)) : d("", !0)
            ]))), 128))
          ])
        ], 64)) : d("", !0)
      ]),
      footer: o(() => [
        l(ce, {
          variant: "secondary",
          onClick: D[1] || (D[1] = (E) => r("close"))
        }, {
          default: o(() => [...D[10] || (D[10] = [
            v(" Close ", -1)
          ])]),
          _: 1
        }),
        g.value ? (t(), h(ce, {
          key: 0,
          variant: "primary",
          onClick: Z
        }, {
          default: o(() => [...D[11] || (D[11] = [
            v(" Save Changes ", -1)
          ])]),
          _: 1
        })) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Wa = /* @__PURE__ */ A(Aa, [["__scopeId", "data-v-6ce9a41c"]]), Fa = {
  key: 0,
  class: "resolve-section"
}, Pa = { class: "resolve-card success-card" }, Ga = { class: "items-list" }, Ha = { class: "item-info" }, Ka = { class: "item-name" }, ja = {
  key: 0,
  class: "item-meta"
}, qa = { class: "match-type" }, Ya = { class: "source" }, Ja = {
  key: 1,
  class: "resolve-section"
}, Xa = { class: "resolve-card warning-card" }, Za = { class: "items-list" }, Qa = { class: "item-info" }, en = { class: "item-name" }, tn = { class: "item-meta" }, on = { key: 0 }, an = { key: 1 }, nn = {
  key: 0,
  class: "item-warning"
}, sn = {
  key: 0,
  class: "item-action"
}, ln = ["onClick"], rn = {
  key: 2,
  class: "resolve-section"
}, cn = { class: "info-text" }, dn = { class: "actions-summary" }, un = { class: "summary-list" }, mn = { key: 0 }, vn = { key: 1 }, fn = { key: 2 }, gn = {
  key: 0,
  class: "estimated-size"
}, hn = /* @__PURE__ */ O({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: c }) {
    const n = e, r = c, { resolveWorkflow: i, installWorkflowDeps: _ } = de(), y = I(null), b = I(!1), m = I(!1), g = I(null), x = T(() => {
      var k;
      return y.value ? ((k = y.value.download_results) == null ? void 0 : k.every((p) => p.can_download)) ?? !1 : !1;
    });
    async function S() {
      b.value = !0, g.value = null;
      try {
        y.value = await i(n.workflowName);
      } catch (k) {
        g.value = k instanceof Error ? k.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function V(k) {
      return !k.possible_matches || k.possible_matches.length === 0 ? null : k.possible_matches.reduce(
        (p, w) => w.match_confidence > p.match_confidence ? w : p
      );
    }
    function H(k) {
      return k >= 0.9 ? "high" : k >= 0.7 ? "medium" : "low";
    }
    function Z(k) {
      const p = V(k);
      return p ? p.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function G(k) {
      var p, w;
      return (w = (p = y.value) == null ? void 0 : p.download_results) == null ? void 0 : w.find((f) => f.model === k);
    }
    function D(k) {
      const p = G(k);
      return (p == null ? void 0 : p.can_download) ?? !1;
    }
    function E(k) {
      const p = G(k);
      return (p == null ? void 0 : p.source_url) || null;
    }
    function M(k) {
      window.open(k, "_blank");
    }
    async function N() {
      if (!(!y.value || m.value)) {
        m.value = !0, g.value = null;
        try {
          await _(
            n.workflowName,
            y.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (k) {
          g.value = k instanceof Error ? k.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function C() {
      if (!(!y.value || m.value)) {
        m.value = !0, g.value = null;
        try {
          await _(
            n.workflowName,
            y.value.nodes_to_install,
            y.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (k) {
          g.value = k instanceof Error ? k.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return re(S), (k, p) => (t(), h(We, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: g.value || void 0,
      onClose: p[1] || (p[1] = (w) => r("close"))
    }, {
      body: o(() => [
        y.value ? (t(), s(P, { key: 0 }, [
          p[5] || (p[5] = a("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          y.value.nodes_unresolved.length > 0 ? (t(), s("section", Fa, [
            l(_e, { variant: "section" }, {
              default: o(() => [
                v("NODES (" + u(y.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            a("div", Pa, [
              p[2] || (p[2] = a("div", { class: "card-header" }, [
                a("span", { class: "status-icon" }, "✓"),
                a("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              a("div", Ga, [
                (t(!0), s(P, null, X(y.value.nodes_unresolved, (w) => {
                  var f;
                  return t(), s("div", {
                    key: w.node_type,
                    class: "item"
                  }, [
                    a("div", Ha, [
                      a("div", Ka, u(((f = V(w)) == null ? void 0 : f.package_id) || w.node_type), 1),
                      V(w) ? (t(), s("div", ja, [
                        a("span", {
                          class: j(["confidence-badge", H(V(w).match_confidence)])
                        }, u(Math.round(V(w).match_confidence * 100)) + "% match ", 3),
                        a("span", qa, u(V(w).match_type), 1),
                        a("span", Ya, "Source: " + u(Z(w)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          y.value.models_unresolved.length > 0 ? (t(), s("section", Ja, [
            l(_e, { variant: "section" }, {
              default: o(() => [
                v("MODELS (" + u(y.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            a("div", Xa, [
              p[3] || (p[3] = a("div", { class: "card-header" }, [
                a("span", { class: "status-icon" }, "⚠"),
                a("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              a("div", Za, [
                (t(!0), s(P, null, X(y.value.models_unresolved, (w) => (t(), s("div", {
                  key: w.filename,
                  class: "item"
                }, [
                  a("div", Qa, [
                    a("div", en, u(w.filename), 1),
                    a("div", tn, [
                      w.expected_category ? (t(), s("span", on, "Type: " + u(w.expected_category), 1)) : d("", !0),
                      G(w.filename) ? (t(), s("span", an, " Size: ~" + u(G(w.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    D(w.filename) ? d("", !0) : (t(), s("div", nn, " No auto-download source configured "))
                  ]),
                  E(w.filename) ? (t(), s("div", sn, [
                    a("button", {
                      class: "link-btn",
                      onClick: (f) => M(E(w.filename))
                    }, " Open Source ↗ ", 8, ln)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          y.value.nodes_resolved.length > 0 || y.value.models_resolved.length > 0 ? (t(), s("section", rn, [
            l(_e, { variant: "section" }, {
              default: o(() => [
                v(" ALREADY AVAILABLE (" + u(y.value.nodes_resolved.length + y.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            a("div", cn, u(y.value.nodes_resolved.length) + " nodes and " + u(y.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          a("div", dn, [
            p[4] || (p[4] = a("div", { class: "summary-title" }, "This will:", -1)),
            a("ol", un, [
              y.value.nodes_to_install.length ? (t(), s("li", mn, " Install " + u(y.value.nodes_to_install.length) + " nodes (~" + u(y.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              y.value.nodes_to_install.length ? (t(), s("li", vn, " Restart ComfyUI to load new nodes ")) : d("", !0),
              y.value.models_to_download.length ? (t(), s("li", fn, " You'll still need to download " + u(y.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            y.value.estimated_size_mb ? (t(), s("div", gn, " Estimated download: " + u(y.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: o(() => [
        l(ce, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => r("close"))
        }, {
          default: o(() => [...p[6] || (p[6] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y.value && y.value.nodes_to_install.length && y.value.models_to_download.length ? (t(), h(ce, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: N
        }, {
          default: o(() => [...p[7] || (p[7] = [
            v(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        y.value && (y.value.nodes_to_install.length || y.value.models_to_download.length) ? (t(), h(ce, {
          key: 1,
          variant: "primary",
          disabled: m.value || y.value.models_to_download.length > 0 && !x.value,
          loading: m.value,
          onClick: C
        }, {
          default: o(() => [...p[8] || (p[8] = [
            v(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), pn = /* @__PURE__ */ A(hn, [["__scopeId", "data-v-d68efb14"]]), yn = { class: "search-input-wrapper" }, bn = ["value", "placeholder"], wn = /* @__PURE__ */ O({
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
    const n = e, r = c, i = I(null);
    let _;
    function y(m) {
      const g = m.target.value;
      n.debounce > 0 ? (clearTimeout(_), _ = window.setTimeout(() => {
        r("update:modelValue", g);
      }, n.debounce)) : r("update:modelValue", g);
    }
    function b() {
      var m;
      r("update:modelValue", ""), r("clear"), (m = i.value) == null || m.focus();
    }
    return re(() => {
      n.autoFocus && i.value && i.value.focus();
    }), (m, g) => (t(), s("div", yn, [
      a("input", {
        ref_key: "inputRef",
        ref: i,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: y,
        onKeyup: ye(b, ["escape"])
      }, null, 40, bn),
      e.clearable && e.modelValue ? (t(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: b,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), kn = /* @__PURE__ */ A(wn, [["__scopeId", "data-v-266f857a"]]), _n = { class: "search-bar" }, $n = /* @__PURE__ */ O({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (c, n) => (t(), s("div", _n, [
      l(kn, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Re = /* @__PURE__ */ A($n, [["__scopeId", "data-v-3d51bbfd"]]), Cn = { class: "section-group" }, xn = {
  key: 0,
  class: "section-content"
}, In = /* @__PURE__ */ O({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: c }) {
    const n = e, r = c, i = I(n.initiallyExpanded);
    function _() {
      n.collapsible && (i.value = !i.value, r("toggle", i.value));
    }
    return (y, b) => (t(), s("section", Cn, [
      l(Oe, {
        count: e.count,
        clickable: e.collapsible,
        expanded: i.value,
        onClick: _
      }, {
        default: o(() => [
          v(u(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || i.value ? (t(), s("div", xn, [
        J(y.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ae = /* @__PURE__ */ A(In, [["__scopeId", "data-v-c48e33ed"]]), Sn = { class: "item-header" }, En = {
  key: 0,
  class: "item-icon"
}, Ln = { class: "item-info" }, zn = {
  key: 0,
  class: "item-title"
}, Rn = {
  key: 1,
  class: "item-subtitle"
}, Nn = {
  key: 0,
  class: "item-details"
}, Mn = {
  key: 1,
  class: "item-actions"
}, Un = /* @__PURE__ */ O({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: c }) {
    const n = e, r = T(() => n.status ? `status-${n.status}` : "");
    return (i, _) => (t(), s("div", {
      class: j(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: _[0] || (_[0] = (y) => e.clickable && i.$emit("click"))
    }, [
      a("div", Sn, [
        i.$slots.icon ? (t(), s("span", En, [
          J(i.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        a("div", Ln, [
          i.$slots.title ? (t(), s("div", zn, [
            J(i.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          i.$slots.subtitle ? (t(), s("div", Rn, [
            J(i.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      i.$slots.details ? (t(), s("div", Nn, [
        J(i.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      i.$slots.actions ? (t(), s("div", Mn, [
        J(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), le = /* @__PURE__ */ A(Un, [["__scopeId", "data-v-cc435e0e"]]), Dn = { class: "loading-state" }, Vn = { class: "loading-message" }, Tn = /* @__PURE__ */ O({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (c, n) => (t(), s("div", Dn, [
      n[0] || (n[0] = a("div", { class: "spinner" }, null, -1)),
      a("p", Vn, u(e.message), 1)
    ]));
  }
}), be = /* @__PURE__ */ A(Tn, [["__scopeId", "data-v-ad8436c9"]]), Bn = { class: "error-state" }, On = { class: "error-message" }, An = /* @__PURE__ */ O({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (c, n) => (t(), s("div", Bn, [
      n[2] || (n[2] = a("span", { class: "error-icon" }, "⚠", -1)),
      a("p", On, u(e.message), 1),
      e.retry ? (t(), h(U, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("retry"))
      }, {
        default: o(() => [...n[1] || (n[1] = [
          v(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), we = /* @__PURE__ */ A(An, [["__scopeId", "data-v-5397be48"]]), Wn = /* @__PURE__ */ O({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: c }) {
    const n = c, { getWorkflows: r } = de(), i = I([]), _ = I(!1), y = I(null), b = I(""), m = I(!1), g = I(!1), x = I(!1), S = I(!1), V = I(null), H = T(
      () => i.value.filter((W) => W.status === "broken")
    ), Z = T(
      () => i.value.filter((W) => W.status === "new")
    ), G = T(
      () => i.value.filter((W) => W.status === "modified")
    ), D = T(
      () => i.value.filter((W) => W.status === "synced")
    ), E = T(() => {
      if (!b.value.trim()) return i.value;
      const W = b.value.toLowerCase();
      return i.value.filter((z) => z.name.toLowerCase().includes(W));
    }), M = T(
      () => H.value.filter(
        (W) => !b.value.trim() || W.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), N = T(
      () => Z.value.filter(
        (W) => !b.value.trim() || W.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), C = T(
      () => G.value.filter(
        (W) => !b.value.trim() || W.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), k = T(
      () => D.value.filter(
        (W) => !b.value.trim() || W.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), p = T(
      () => g.value ? k.value : k.value.slice(0, 5)
    );
    async function w() {
      _.value = !0, y.value = null;
      try {
        i.value = await r();
      } catch (W) {
        y.value = W instanceof Error ? W.message : "Failed to load workflows";
      } finally {
        _.value = !1;
      }
    }
    function f(W) {
      V.value = W, x.value = !0;
    }
    function L(W) {
      V.value = W, S.value = !0;
    }
    function B() {
      alert("Bulk resolution not yet implemented");
    }
    function Q() {
      n("refresh");
    }
    return re(w), (W, z) => (t(), s(P, null, [
      l(ve, null, {
        header: o(() => [
          l(fe, { title: "WORKFLOWS" }, {
            actions: o(() => [
              H.value.length > 0 ? (t(), h(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: o(() => [...z[7] || (z[7] = [
                  v(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: o(() => [
          l(Re, {
            modelValue: b.value,
            "onUpdate:modelValue": z[0] || (z[0] = (K) => b.value = K),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: o(() => [
          _.value ? (t(), h(be, {
            key: 0,
            message: "Loading workflows..."
          })) : y.value ? (t(), h(we, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
            M.value.length ? (t(), h(ae, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(M.value, (K) => (t(), h(le, {
                  key: K.name,
                  status: "broken"
                }, {
                  icon: o(() => [...z[8] || (z[8] = [
                    v("⚠", -1)
                  ])]),
                  title: o(() => [
                    v(u(K.name), 1)
                  ]),
                  subtitle: o(() => [
                    v(" Missing: " + u(K.missing_nodes) + " nodes, " + u(K.missing_models) + " models ", 1)
                  ]),
                  actions: o(() => [
                    l(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => L(K.name)
                    }, {
                      default: o(() => [...z[9] || (z[9] = [
                        v(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => f(K.name)
                    }, {
                      default: o(() => [...z[10] || (z[10] = [
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
            N.value.length ? (t(), h(ae, {
              key: 1,
              title: "NEW",
              count: N.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(N.value, (K) => (t(), h(le, {
                  key: K.name,
                  status: "new"
                }, {
                  icon: o(() => [...z[11] || (z[11] = [
                    v("●", -1)
                  ])]),
                  title: o(() => [
                    v(u(K.name), 1)
                  ]),
                  subtitle: o(() => [...z[12] || (z[12] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => f(K.name)
                    }, {
                      default: o(() => [...z[13] || (z[13] = [
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
            C.value.length ? (t(), h(ae, {
              key: 2,
              title: "MODIFIED",
              count: C.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(C.value, (K) => (t(), h(le, {
                  key: K.name,
                  status: "modified"
                }, {
                  icon: o(() => [...z[14] || (z[14] = [
                    v("⚡", -1)
                  ])]),
                  title: o(() => [
                    v(u(K.name), 1)
                  ]),
                  subtitle: o(() => [...z[15] || (z[15] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => f(K.name)
                    }, {
                      default: o(() => [...z[16] || (z[16] = [
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
            k.value.length ? (t(), h(ae, {
              key: 3,
              title: "SYNCED",
              count: k.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: z[2] || (z[2] = (K) => m.value = K)
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(p.value, (K) => (t(), h(le, {
                  key: K.name,
                  status: "synced"
                }, {
                  icon: o(() => [...z[17] || (z[17] = [
                    v("✓", -1)
                  ])]),
                  title: o(() => [
                    v(u(K.name), 1)
                  ]),
                  subtitle: o(() => [...z[18] || (z[18] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => f(K.name)
                    }, {
                      default: o(() => [...z[19] || (z[19] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !g.value && k.value.length > 5 ? (t(), h(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (K) => g.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: o(() => [
                    v(" View all " + u(k.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            E.value.length ? d("", !0) : (t(), h(me, {
              key: 4,
              icon: "📭",
              message: b.value ? `No workflows match '${b.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      x.value && V.value ? (t(), h(Wa, {
        key: 0,
        "workflow-name": V.value,
        onClose: z[3] || (z[3] = (K) => x.value = !1),
        onResolve: z[4] || (z[4] = (K) => L(V.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      S.value && V.value ? (t(), h(pn, {
        key: 1,
        "workflow-name": V.value,
        onClose: z[5] || (z[5] = (K) => S.value = !1),
        onInstall: Q,
        onRefresh: z[6] || (z[6] = (K) => n("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Fn = /* @__PURE__ */ A(Wn, [["__scopeId", "data-v-2251d776"]]), Pn = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (c, n) => (t(), s("span", {
      class: j(["detail-label"]),
      style: ot({ minWidth: e.minWidth })
    }, [
      J(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Gn = /* @__PURE__ */ A(Pn, [["__scopeId", "data-v-75e9eeb8"]]), Hn = /* @__PURE__ */ O({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (c, n) => (t(), s("span", {
      class: j(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      J(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ A(Hn, [["__scopeId", "data-v-2f186e4c"]]), Kn = { class: "detail-row" }, jn = /* @__PURE__ */ O({
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
    return (c, n) => (t(), s("div", Kn, [
      l(Gn, { "min-width": e.labelMinWidth }, {
        default: o(() => [
          v(u(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), h(Be, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: o(() => [
          v(u(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : J(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Y = /* @__PURE__ */ A(jn, [["__scopeId", "data-v-ef15664a"]]), qn = /* @__PURE__ */ O({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (c, n) => (t(), s("div", {
      class: j(["summary-bar", e.variant])
    }, [
      J(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $e = /* @__PURE__ */ A(qn, [["__scopeId", "data-v-ccb7816e"]]), Yn = { class: "popover-header" }, Jn = { class: "popover-title" }, Xn = { class: "popover-content" }, Zn = {
  key: 0,
  class: "popover-actions"
}, Qn = /* @__PURE__ */ O({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (c, n) => (t(), h(rt, { to: "body" }, [
      e.show ? (t(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => c.$emit("close"))
      }, [
        a("div", {
          class: "popover",
          style: ot({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = ze(() => {
          }, ["stop"]))
        }, [
          a("div", Yn, [
            a("h4", Jn, u(e.title), 1),
            a("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          a("div", Xn, [
            J(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (t(), s("div", Zn, [
            J(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Ce = /* @__PURE__ */ A(Qn, [["__scopeId", "data-v-057df510"]]), es = /* @__PURE__ */ O({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: i } = de(), _ = I([]), y = I([]), b = I("production"), m = I(!1), g = I(null), x = I(""), S = I(!1);
    function V() {
      S.value = !1, n("navigate", "model-index");
    }
    const H = T(
      () => _.value.reduce((f, L) => f + (L.size_mb || L.size || 0), 0)
    ), Z = T(() => {
      if (!x.value.trim()) return _.value;
      const f = x.value.toLowerCase();
      return _.value.filter((L) => L.filename.toLowerCase().includes(f));
    }), G = T(() => {
      if (!x.value.trim()) return y.value;
      const f = x.value.toLowerCase();
      return y.value.filter((L) => L.filename.toLowerCase().includes(f));
    }), D = T(
      () => Z.value.filter((f) => f.type === "checkpoints" || f.category === "checkpoints")
    ), E = T(
      () => Z.value.filter((f) => f.type === "loras" || f.category === "loras")
    ), M = T(
      () => Z.value.filter(
        (f) => f.type !== "checkpoints" && f.category !== "checkpoints" && f.type !== "loras" && f.category !== "loras"
      )
    );
    function N(f) {
      return f ? f >= 1024 ? `${(f / 1024).toFixed(1)} GB` : `${f.toFixed(0)} MB` : "Unknown";
    }
    function C(f) {
      n("navigate", "model-index");
    }
    function k(f) {
      n("navigate", "model-index");
    }
    function p(f) {
      alert(`Download functionality not yet implemented for ${f}`);
    }
    async function w() {
      m.value = !0, g.value = null;
      try {
        const f = await r();
        _.value = f, y.value = [];
        const L = await i();
        b.value = L.environment || "production";
      } catch (f) {
        g.value = f instanceof Error ? f.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return re(w), (f, L) => (t(), s(P, null, [
      l(ve, null, {
        header: o(() => [
          l(fe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (B) => S.value = !0)
          })
        ]),
        search: o(() => [
          l(Re, {
            modelValue: x.value,
            "onUpdate:modelValue": L[1] || (L[1] = (B) => x.value = B),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: o(() => [
          m.value ? (t(), h(be, {
            key: 0,
            message: "Loading environment models..."
          })) : g.value ? (t(), h(we, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
            _.value.length ? (t(), h($e, {
              key: 0,
              variant: "compact"
            }, {
              default: o(() => [
                v(" Total: " + u(_.value.length) + " models • " + u(N(H.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            D.value.length ? (t(), h(ae, {
              key: 1,
              title: "CHECKPOINTS",
              count: D.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(D.value, (B) => (t(), h(le, {
                  key: B.sha256 || B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: o(() => [...L[3] || (L[3] = [
                    v("📦", -1)
                  ])]),
                  title: o(() => [
                    v(u(B.filename), 1)
                  ]),
                  subtitle: o(() => [
                    v(u(N(B.size_mb || B.size)), 1)
                  ]),
                  details: o(() => [
                    l(Y, {
                      label: "Used by:",
                      value: (B.used_by || B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Y, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => C(B.sha256 || B.sha256_hash || B.hash || "")
                    }, {
                      default: o(() => [...L[4] || (L[4] = [
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
            E.value.length ? (t(), h(ae, {
              key: 2,
              title: "LORAS",
              count: E.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(E.value, (B) => (t(), h(le, {
                  key: B.sha256 || B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: o(() => [...L[5] || (L[5] = [
                    v("📦", -1)
                  ])]),
                  title: o(() => [
                    v(u(B.filename), 1)
                  ]),
                  subtitle: o(() => [
                    v(u(N(B.size_mb || B.size)), 1)
                  ]),
                  details: o(() => [
                    l(Y, {
                      label: "Used by:",
                      value: (B.used_by || B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Y, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => C(B.sha256 || B.sha256_hash || B.hash || "")
                    }, {
                      default: o(() => [...L[6] || (L[6] = [
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
            M.value.length ? (t(), h(ae, {
              key: 3,
              title: "OTHER",
              count: M.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(M.value, (B) => (t(), h(le, {
                  key: B.sha256 || B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: o(() => [...L[7] || (L[7] = [
                    v("📦", -1)
                  ])]),
                  title: o(() => [
                    v(u(B.filename), 1)
                  ]),
                  subtitle: o(() => [
                    v(u(N(B.size_mb || B.size)), 1)
                  ]),
                  details: o(() => [
                    l(Y, {
                      label: "Type:",
                      value: B.type
                    }, null, 8, ["value"]),
                    l(Y, {
                      label: "Used by:",
                      value: (B.used_by || B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => C(B.sha256 || B.sha256_hash || B.hash || "")
                    }, {
                      default: o(() => [...L[8] || (L[8] = [
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
            G.value.length ? (t(), h(ae, {
              key: 4,
              title: "MISSING",
              count: G.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(G.value, (B) => (t(), h(le, {
                  key: B.filename,
                  status: "broken"
                }, {
                  icon: o(() => [...L[9] || (L[9] = [
                    v("⚠", -1)
                  ])]),
                  title: o(() => [
                    v(u(B.filename), 1)
                  ]),
                  subtitle: o(() => [...L[10] || (L[10] = [
                    a("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: o(() => {
                    var Q;
                    return [
                      l(Y, {
                        label: "Required by:",
                        value: ((Q = B.workflow_names) == null ? void 0 : Q.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: o(() => [
                    l(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => p(B.filename)
                    }, {
                      default: o(() => [...L[11] || (L[11] = [
                        v(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Q) => k(B.filename)
                    }, {
                      default: o(() => [...L[12] || (L[12] = [
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
            !Z.value.length && !G.value.length ? (t(), h(me, {
              key: 5,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: S.value,
        title: "About Environment Models",
        onClose: L[2] || (L[2] = (B) => S.value = !1)
      }, {
        content: o(() => [
          a("p", null, [
            L[13] || (L[13] = v(" These are models currently used by workflows in ", -1)),
            a("strong", null, '"' + u(b.value) + '"', 1),
            L[14] || (L[14] = v(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: o(() => [
          l(U, {
            variant: "primary",
            onClick: V
          }, {
            default: o(() => [...L[15] || (L[15] = [
              v(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ts = /* @__PURE__ */ A(es, [["__scopeId", "data-v-865641a4"]]), os = /* @__PURE__ */ O({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: c } = de(), n = I([]), r = I(!1), i = I(null), _ = I(""), y = I(!1), b = T(
      () => n.value.reduce((p, w) => p + (w.size_mb || w.size || 0), 0)
    ), m = T(() => {
      const p = /* @__PURE__ */ new Set();
      return n.value.forEach((w) => {
        w.used_in_environments && w.used_in_environments.length > 0 && w.used_in_environments.forEach((f) => p.add(f.env_name));
      }), p.size;
    }), g = T(() => {
      if (!_.value.trim()) return n.value;
      const p = _.value.toLowerCase();
      return n.value.filter((w) => {
        const f = w, L = w.sha256 || f.sha256_hash || "";
        return w.filename.toLowerCase().includes(p) || L.toLowerCase().includes(p);
      });
    }), x = T(
      () => g.value.filter((p) => p.type === "checkpoints")
    ), S = T(
      () => g.value.filter((p) => p.type === "loras")
    ), V = T(
      () => g.value.filter((p) => p.type !== "checkpoints" && p.type !== "loras")
    );
    function H(p) {
      return p ? p >= 1024 ? `${(p / 1024).toFixed(1)} GB` : `${p.toFixed(0)} MB` : "Unknown";
    }
    function Z(p) {
      const w = p, f = p.used_in_workflows || w.used_by || [];
      return !f || f.length === 0 ? "Not used" : `${f.length} workflow(s)`;
    }
    function G(p) {
      navigator.clipboard.writeText(p), alert("Hash copied to clipboard");
    }
    function D(p) {
      prompt("Enter model source URL:", p.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function E(p) {
      const w = p, f = p.used_in_workflows || w.used_by || [], L = f && f.length > 0 ? `

⚠ WARNING: This model is used by ${f.length} workflow(s):
${f.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${p.filename}?${L}

This will free ${H(w.size_mb || p.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function M() {
      alert("Scan for models not yet implemented");
    }
    function N() {
      alert("Change directory not yet implemented");
    }
    function C() {
      alert("Download new model not yet implemented");
    }
    async function k() {
      r.value = !0, i.value = null;
      try {
        n.value = await c(), console.log("Loaded models:", n.value), console.log("Filtered checkpoints:", x.value), console.log("Filtered loras:", S.value), console.log("Filtered other:", V.value);
      } catch (p) {
        i.value = p instanceof Error ? p.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return re(k), (p, w) => (t(), s(P, null, [
      l(ve, null, {
        header: o(() => [
          l(fe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: w[0] || (w[0] = (f) => y.value = !0)
          }, {
            actions: o(() => [
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: o(() => [...w[3] || (w[3] = [
                  v(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: o(() => [...w[4] || (w[4] = [
                  v(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              l(U, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: o(() => [...w[5] || (w[5] = [
                  a("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    a("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    a("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  v(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: o(() => [
          l(Re, {
            modelValue: _.value,
            "onUpdate:modelValue": w[1] || (w[1] = (f) => _.value = f),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: o(() => [
          r.value ? (t(), h(be, {
            key: 0,
            message: "Loading workspace models..."
          })) : i.value ? (t(), h(we, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
            n.value.length ? (t(), h($e, {
              key: 0,
              variant: "compact"
            }, {
              default: o(() => [
                v(" Total: " + u(n.value.length) + " models • " + u(H(b.value)) + " • Used in " + u(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            x.value.length ? (t(), h(ae, {
              key: 1,
              title: "CHECKPOINTS",
              count: x.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(x.value, (f) => (t(), h(le, {
                  key: f.sha256 || f.filename,
                  status: "synced"
                }, {
                  icon: o(() => [...w[6] || (w[6] = [
                    v("📦", -1)
                  ])]),
                  title: o(() => [
                    v(u(f.filename), 1)
                  ]),
                  subtitle: o(() => [
                    v(u(H(f.size_mb || f.size)), 1)
                  ]),
                  details: o(() => {
                    var L, B;
                    return [
                      f.sha256 || f.sha256_hash ? (t(), h(Y, {
                        key: 0,
                        label: "SHA256:",
                        value: (f.sha256 || f.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      l(Y, {
                        label: "Used in:",
                        value: Z(f)
                      }, null, 8, ["value"]),
                      f.source_url || (L = f.sources) != null && L[0] ? (t(), h(Y, {
                        key: 1,
                        label: "Source URL:",
                        value: f.source_url || ((B = f.sources) == null ? void 0 : B[0])
                      }, null, 8, ["value"])) : (t(), h(Y, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: o(() => [...w[7] || (w[7] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => D(f)
                    }, {
                      default: o(() => [...w[8] || (w[8] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f.sha256 || f.sha256_hash ? (t(), h(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => G(f.sha256 || f.sha256_hash)
                    }, {
                      default: o(() => [...w[9] || (w[9] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => E(f)
                    }, {
                      default: o(() => [...w[10] || (w[10] = [
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
            S.value.length ? (t(), h(ae, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(S.value, (f) => (t(), h(le, {
                  key: f.sha256 || f.filename,
                  status: "synced"
                }, {
                  icon: o(() => [...w[11] || (w[11] = [
                    v("📦", -1)
                  ])]),
                  title: o(() => [
                    v(u(f.filename), 1)
                  ]),
                  subtitle: o(() => [
                    v(u(H(f.size_mb || f.size)), 1)
                  ]),
                  details: o(() => {
                    var L, B;
                    return [
                      f.sha256 || f.sha256_hash ? (t(), h(Y, {
                        key: 0,
                        label: "SHA256:",
                        value: (f.sha256 || f.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      l(Y, {
                        label: "Used in:",
                        value: Z(f)
                      }, null, 8, ["value"]),
                      f.source_url || (L = f.sources) != null && L[0] ? (t(), h(Y, {
                        key: 1,
                        label: "Source URL:",
                        value: f.source_url || ((B = f.sources) == null ? void 0 : B[0])
                      }, null, 8, ["value"])) : (t(), h(Y, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: o(() => [...w[12] || (w[12] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => D(f)
                    }, {
                      default: o(() => [...w[13] || (w[13] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f.sha256 || f.sha256_hash ? (t(), h(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => G(f.sha256 || f.sha256_hash)
                    }, {
                      default: o(() => [...w[14] || (w[14] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => E(f)
                    }, {
                      default: o(() => [...w[15] || (w[15] = [
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
            V.value.length ? (t(), h(ae, {
              key: 3,
              title: "OTHER",
              count: V.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(V.value, (f) => (t(), h(le, {
                  key: f.sha256 || f.filename,
                  status: "synced"
                }, {
                  icon: o(() => [...w[16] || (w[16] = [
                    v("📦", -1)
                  ])]),
                  title: o(() => [
                    v(u(f.filename), 1)
                  ]),
                  subtitle: o(() => [
                    v(u(H(f.size_mb || f.size)), 1)
                  ]),
                  details: o(() => [
                    l(Y, {
                      label: "Type:",
                      value: f.type
                    }, null, 8, ["value"]),
                    f.sha256 || f.sha256_hash ? (t(), h(Y, {
                      key: 0,
                      label: "SHA256:",
                      value: (f.sha256 || f.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    l(Y, {
                      label: "Used in:",
                      value: Z(f)
                    }, null, 8, ["value"])
                  ]),
                  actions: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => D(f)
                    }, {
                      default: o(() => [...w[17] || (w[17] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f.sha256 || f.sha256_hash ? (t(), h(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => G(f.sha256 || f.sha256_hash)
                    }, {
                      default: o(() => [...w[18] || (w[18] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => E(f)
                    }, {
                      default: o(() => [...w[19] || (w[19] = [
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
            g.value.length ? d("", !0) : (t(), h(me, {
              key: 4,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: y.value,
        title: "About Workspace Model Index",
        onClose: w[2] || (w[2] = (f) => y.value = !1)
      }, {
        content: o(() => [...w[20] || (w[20] = [
          a("p", null, [
            v(" Content-addressable model storage shared across "),
            a("strong", null, "all environments"),
            v(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), as = /* @__PURE__ */ A(os, [["__scopeId", "data-v-5a24af01"]]), ns = { key: 0 }, ss = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, ls = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, rs = /* @__PURE__ */ O({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: c, installNode: n, updateNode: r, uninstallNode: i } = de(), _ = I({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), y = I(!1), b = I(null), m = I(""), g = I(!1), x = T(() => {
      if (!m.value.trim()) return _.value.nodes;
      const C = m.value.toLowerCase();
      return _.value.nodes.filter(
        (k) => {
          var p, w;
          return k.name.toLowerCase().includes(C) || ((p = k.description) == null ? void 0 : p.toLowerCase().includes(C)) || ((w = k.repository) == null ? void 0 : w.toLowerCase().includes(C));
        }
      );
    }), S = T(
      () => x.value.filter((C) => C.installed)
    ), V = T(
      () => x.value.filter((C) => !C.installed)
    );
    function H(C) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[C] || C;
    }
    function Z(C) {
      return !C.used_in_workflows || C.used_in_workflows.length === 0 ? "Not used in any workflows" : C.used_in_workflows.length === 1 ? C.used_in_workflows[0] : `${C.used_in_workflows.length} workflows`;
    }
    function G(C) {
      window.open(C, "_blank");
    }
    async function D(C) {
      if (confirm(`Install node "${C}"?

This will download and install the node from its repository.`))
        try {
          y.value = !0;
          const k = await n(C);
          k.status === "success" ? (alert(`Node "${C}" installed successfully!`), await N()) : alert(`Failed to install node: ${k.message || "Unknown error"}`);
        } catch (k) {
          alert(`Error installing node: ${k instanceof Error ? k.message : "Unknown error"}`);
        } finally {
          y.value = !1;
        }
    }
    async function E(C) {
      if (confirm(`Check for updates for "${C}"?`))
        try {
          y.value = !0;
          const k = await r(C);
          k.status === "success" ? (alert(`Node "${C}" is up to date or has been updated!`), await N()) : alert(`Update check failed: ${k.message || "Unknown error"}`);
        } catch (k) {
          alert(`Error checking for updates: ${k instanceof Error ? k.message : "Unknown error"}`);
        } finally {
          y.value = !1;
        }
    }
    async function M(C) {
      if (confirm(`Uninstall node "${C}"?

This will remove the node from this environment.`))
        try {
          y.value = !0;
          const k = await i(C);
          k.status === "success" ? (alert(`Node "${C}" uninstalled successfully!`), await N()) : alert(`Failed to uninstall node: ${k.message || "Unknown error"}`);
        } catch (k) {
          alert(`Error uninstalling node: ${k instanceof Error ? k.message : "Unknown error"}`);
        } finally {
          y.value = !1;
        }
    }
    async function N() {
      y.value = !0, b.value = null;
      try {
        _.value = await c();
      } catch (C) {
        b.value = C instanceof Error ? C.message : "Failed to load nodes";
      } finally {
        y.value = !1;
      }
    }
    return re(N), (C, k) => (t(), s(P, null, [
      l(ve, null, {
        header: o(() => [
          l(fe, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (p) => g.value = !0)
          })
        ]),
        search: o(() => [
          l(Re, {
            modelValue: m.value,
            "onUpdate:modelValue": k[1] || (k[1] = (p) => m.value = p),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: o(() => [
          y.value ? (t(), h(be, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : b.value ? (t(), h(we, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
            _.value.total_count ? (t(), h($e, {
              key: 0,
              variant: "compact"
            }, {
              default: o(() => [
                v(" Total: " + u(_.value.total_count) + " nodes • " + u(_.value.installed_count) + " installed • " + u(_.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            S.value.length ? (t(), h(ae, {
              key: 1,
              title: "INSTALLED",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(S.value, (p) => (t(), h(le, {
                  key: p.name,
                  status: "synced"
                }, {
                  icon: o(() => [...k[4] || (k[4] = [
                    v("📦", -1)
                  ])]),
                  title: o(() => [
                    v(u(p.name), 1)
                  ]),
                  subtitle: o(() => [
                    p.version ? (t(), s("span", ns, "v" + u(p.version), 1)) : (t(), s("span", ss, "version unknown")),
                    p.source ? (t(), s("span", ls, " • " + u(H(p.source)), 1)) : d("", !0)
                  ]),
                  details: o(() => [
                    p.description ? (t(), h(Y, {
                      key: 0,
                      label: "Description:",
                      value: p.description
                    }, null, 8, ["value"])) : d("", !0),
                    p.repository ? (t(), h(Y, {
                      key: 1,
                      label: "Repository:",
                      value: p.repository
                    }, null, 8, ["value"])) : d("", !0),
                    l(Y, {
                      label: "Used by:",
                      value: Z(p)
                    }, null, 8, ["value"])
                  ]),
                  actions: o(() => [
                    p.repository ? (t(), h(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => G(p.repository)
                    }, {
                      default: o(() => [...k[5] || (k[5] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    p.source === "registry" ? (t(), h(U, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => E(p.name)
                    }, {
                      default: o(() => [...k[6] || (k[6] = [
                        v(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    p.source !== "unknown" ? (t(), h(U, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => M(p.name)
                    }, {
                      default: o(() => [...k[7] || (k[7] = [
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
            V.value.length ? (t(), h(ae, {
              key: 2,
              title: "MISSING",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(V.value, (p) => (t(), h(le, {
                  key: p.name,
                  status: "missing"
                }, {
                  icon: o(() => [...k[8] || (k[8] = [
                    v("⚠", -1)
                  ])]),
                  title: o(() => [
                    v(u(p.name), 1)
                  ]),
                  subtitle: o(() => [...k[9] || (k[9] = [
                    a("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: o(() => [
                    p.description ? (t(), h(Y, {
                      key: 0,
                      label: "Description:",
                      value: p.description
                    }, null, 8, ["value"])) : d("", !0),
                    p.repository ? (t(), h(Y, {
                      key: 1,
                      label: "Repository:",
                      value: p.repository
                    }, null, 8, ["value"])) : d("", !0),
                    l(Y, {
                      label: "Required by:",
                      value: Z(p)
                    }, null, 8, ["value"])
                  ]),
                  actions: o(() => [
                    p.download_url ? (t(), h(U, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (w) => D(p.name)
                    }, {
                      default: o(() => [...k[10] || (k[10] = [
                        v(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    p.repository ? (t(), h(U, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (w) => G(p.repository)
                    }, {
                      default: o(() => [...k[11] || (k[11] = [
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
            !S.value.length && !V.value.length ? (t(), h(me, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: g.value,
        title: "About Git-Tracked Nodes",
        onClose: k[3] || (k[3] = (p) => g.value = !1)
      }, {
        content: o(() => [...k[12] || (k[12] = [
          a("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          a("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            a("strong", null, "Installed:"),
            v(" Nodes currently available in this environment"),
            a("br"),
            a("strong", null, "Missing:"),
            v(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: o(() => [
          l(U, {
            variant: "primary",
            onClick: k[2] || (k[2] = (p) => g.value = !1)
          }, {
            default: o(() => [...k[13] || (k[13] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), is = /* @__PURE__ */ A(rs, [["__scopeId", "data-v-c480e2c1"]]), cs = { class: "remote-url-display" }, ds = ["title"], us = ["title"], ms = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vs = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, fs = /* @__PURE__ */ O({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const c = e, n = I(!1), r = T(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const _ = c.url.slice(0, Math.floor(c.maxLength * 0.6)), y = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${_}...${y}`;
    });
    async function i() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (_) {
        console.error("Failed to copy URL:", _);
      }
    }
    return (_, y) => (t(), s("div", cs, [
      a("span", {
        class: "url-text",
        title: e.url
      }, u(r.value), 9, ds),
      a("button", {
        class: j(["copy-btn", { copied: n.value }]),
        onClick: i,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (t(), s("svg", vs, [...y[1] || (y[1] = [
          a("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (t(), s("svg", ms, [...y[0] || (y[0] = [
          a("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          a("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, us)
    ]));
  }
}), lt = /* @__PURE__ */ A(fs, [["__scopeId", "data-v-7768a58d"]]), gs = { class: "remote-title" }, hs = {
  key: 0,
  class: "default-badge"
}, ps = {
  key: 1,
  class: "sync-badge"
}, ys = {
  key: 0,
  class: "ahead"
}, bs = {
  key: 1,
  class: "behind"
}, ws = {
  key: 0,
  class: "tracking-info"
}, ks = /* @__PURE__ */ O({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: c }) {
    const n = e, r = T(() => n.fetchingRemote === n.remote.name), i = T(() => n.remote.is_default), _ = T(() => !!n.trackingBranch);
    function y(b) {
      const m = new Date(b), x = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), S = Math.floor(x / 6e4);
      if (S < 1) return "Just now";
      if (S < 60) return `${S}m ago`;
      const V = Math.floor(S / 60);
      if (V < 24) return `${V}h ago`;
      const H = Math.floor(V / 24);
      return H < 7 ? `${H}d ago` : m.toLocaleDateString();
    }
    return (b, m) => (t(), h(le, {
      status: i.value ? "synced" : void 0
    }, {
      icon: o(() => [
        v(u(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: o(() => [
        a("div", gs, [
          a("span", null, u(e.remote.name), 1),
          i.value ? (t(), s("span", hs, "DEFAULT")) : d("", !0),
          e.syncStatus ? (t(), s("span", ps, [
            e.syncStatus.ahead > 0 ? (t(), s("span", ys, "↑" + u(e.syncStatus.ahead), 1)) : d("", !0),
            e.syncStatus.behind > 0 ? (t(), s("span", bs, "↓" + u(e.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: o(() => [
        _.value ? (t(), s("span", ws, " Tracking: " + u(e.trackingBranch), 1)) : d("", !0)
      ]),
      details: o(() => {
        var g;
        return [
          l(Y, { label: "Fetch:" }, {
            default: o(() => [
              l(lt, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (t(), h(Y, {
            key: 0,
            label: "Push:"
          }, {
            default: o(() => [
              l(lt, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (g = e.syncStatus) != null && g.last_fetch ? (t(), h(Y, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: o(() => [
              a("span", null, u(y(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: o(() => [
        l(U, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: m[0] || (m[0] = (g) => b.$emit("fetch", e.remote.name))
        }, {
          default: o(() => [...m[3] || (m[3] = [
            v(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        l(U, {
          variant: "secondary",
          size: "xs",
          onClick: m[1] || (m[1] = (g) => b.$emit("edit", e.remote.name))
        }, {
          default: o(() => [...m[4] || (m[4] = [
            v(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (t(), h(U, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[2] || (m[2] = (g) => b.$emit("remove", e.remote.name))
        }, {
          default: o(() => [...m[5] || (m[5] = [
            v(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), _s = /* @__PURE__ */ A(ks, [["__scopeId", "data-v-17362e45"]]), $s = ["for"], Cs = {
  key: 0,
  class: "base-form-field-required"
}, xs = { class: "base-form-field-input" }, Is = {
  key: 1,
  class: "base-form-field-error"
}, Ss = {
  key: 2,
  class: "base-form-field-hint"
}, Es = /* @__PURE__ */ O({
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
    const c = e, n = T(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, i) => (t(), s("div", {
      class: j(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (t(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        v(u(e.label) + " ", 1),
        e.required ? (t(), s("span", Cs, "*")) : d("", !0)
      ], 8, $s)) : d("", !0),
      a("div", xs, [
        J(r.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (t(), s("span", Is, u(e.error), 1)) : e.hint ? (t(), s("span", Ss, u(e.hint), 1)) : d("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ A(Es, [["__scopeId", "data-v-9a1cf296"]]), Ls = ["type", "value", "placeholder", "disabled"], zs = {
  key: 0,
  class: "base-input-error"
}, Rs = /* @__PURE__ */ O({
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
    return (c, n) => (t(), s("div", {
      class: j(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      a("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: j(["base-input", { error: !!e.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = ye((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ye((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ls),
      e.error ? (t(), s("span", zs, u(e.error), 1)) : d("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ A(Rs, [["__scopeId", "data-v-9ba02cdc"]]), Ns = { class: "remote-form" }, Ms = { class: "form-header" }, Us = { class: "form-body" }, Ds = {
  key: 0,
  class: "form-error"
}, Vs = { class: "form-actions" }, Ts = /* @__PURE__ */ O({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: c }) {
    const n = e, r = c, i = I({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), _ = I(!1), y = I(null);
    wt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      i.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const b = T(() => i.value.name.trim() !== "" && i.value.fetchUrl.trim() !== "");
    async function m() {
      if (!(!b.value || _.value)) {
        y.value = null, _.value = !0;
        try {
          r("submit", i.value);
        } catch (g) {
          y.value = g instanceof Error ? g.message : "Failed to submit form";
        } finally {
          _.value = !1;
        }
      }
    }
    return (g, x) => (t(), s("div", Ns, [
      a("div", Ms, [
        l(Oe, null, {
          default: o(() => [
            v(u(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      a("div", Us, [
        l(Xe, {
          label: "Remote Name",
          required: ""
        }, {
          default: o(() => [
            l(Ze, {
              modelValue: i.value.name,
              "onUpdate:modelValue": x[0] || (x[0] = (S) => i.value.name = S),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        l(Xe, {
          label: "Fetch URL",
          required: ""
        }, {
          default: o(() => [
            l(Ze, {
              modelValue: i.value.fetchUrl,
              "onUpdate:modelValue": x[1] || (x[1] = (S) => i.value.fetchUrl = S),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(Xe, { label: "Push URL (optional)" }, {
          default: o(() => [
            l(Ze, {
              modelValue: i.value.pushUrl,
              "onUpdate:modelValue": x[2] || (x[2] = (S) => i.value.pushUrl = S),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        y.value ? (t(), s("div", Ds, u(y.value), 1)) : d("", !0)
      ]),
      a("div", Vs, [
        l(U, {
          variant: "primary",
          size: "md",
          disabled: !b.value,
          loading: _.value,
          onClick: m
        }, {
          default: o(() => [
            v(u(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        l(U, {
          variant: "ghost",
          size: "md",
          onClick: x[3] || (x[3] = (S) => g.$emit("cancel"))
        }, {
          default: o(() => [...x[4] || (x[4] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Bs = /* @__PURE__ */ A(Ts, [["__scopeId", "data-v-56021b18"]]), Os = { key: 0 }, As = /* @__PURE__ */ O({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: c,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: i,
      fetchRemote: _,
      getRemoteSyncStatus: y
    } = de(), b = I([]), m = I(null), g = I({}), x = I(!1), S = I(null), V = I(""), H = I(!1), Z = I(null), G = I(!1), D = I("add"), E = I({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = T(() => {
      if (!V.value.trim()) return b.value;
      const W = V.value.toLowerCase();
      return b.value.filter(
        (z) => z.name.toLowerCase().includes(W) || z.fetch_url.toLowerCase().includes(W) || z.push_url.toLowerCase().includes(W)
      );
    });
    function N(W) {
      var z;
      return ((z = m.value) == null ? void 0 : z.remote) === W;
    }
    async function C() {
      x.value = !0, S.value = null;
      try {
        const W = await c();
        b.value = W.remotes, m.value = W.current_branch_tracking || null, await Promise.all(
          W.remotes.map(async (z) => {
            const K = await y(z.name);
            K && (g.value[z.name] = K);
          })
        );
      } catch (W) {
        S.value = W instanceof Error ? W.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function k() {
      D.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, G.value = !0;
    }
    function p(W) {
      const z = b.value.find((K) => K.name === W);
      z && (D.value = "edit", E.value = {
        name: z.name,
        fetchUrl: z.fetch_url,
        pushUrl: z.push_url
      }, G.value = !0);
    }
    async function w(W) {
      try {
        D.value === "add" ? await n(W.name, W.fetchUrl) : await i(W.name, W.fetchUrl, W.pushUrl || void 0), G.value = !1, await C();
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Operation failed";
      }
    }
    function f() {
      G.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function L(W) {
      Z.value = W;
      try {
        await _(W);
        const z = await y(W);
        z && (g.value[W] = z);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Fetch failed";
      } finally {
        Z.value = null;
      }
    }
    async function B(W) {
      if (confirm(`Remove remote "${W}"?`))
        try {
          await r(W), await C();
        } catch (z) {
          S.value = z instanceof Error ? z.message : "Failed to remove remote";
        }
    }
    function Q() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return re(C), (W, z) => (t(), s(P, null, [
      l(ve, null, {
        header: o(() => [
          l(fe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (K) => H.value = !0)
          }, {
            actions: o(() => [
              G.value ? d("", !0) : (t(), h(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: k
              }, {
                default: o(() => [...z[3] || (z[3] = [
                  v(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: o(() => [
          G.value ? d("", !0) : (t(), h(Re, {
            key: 0,
            modelValue: V.value,
            "onUpdate:modelValue": z[1] || (z[1] = (K) => V.value = K),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: o(() => [
          x.value ? (t(), h(be, {
            key: 0,
            message: "Loading remotes..."
          })) : S.value ? (t(), h(we, {
            key: 1,
            message: S.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
            G.value ? (t(), h(Bs, {
              key: 0,
              mode: D.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: w,
              onCancel: f
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            b.value.length && !G.value ? (t(), h($e, {
              key: 1,
              variant: "compact"
            }, {
              default: o(() => [
                v(" Total: " + u(b.value.length) + " remote" + u(b.value.length !== 1 ? "s" : "") + " ", 1),
                m.value ? (t(), s("span", Os, " • Tracking: " + u(m.value.remote) + "/" + u(m.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length && !G.value ? (t(), h(ae, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: o(() => [
                (t(!0), s(P, null, X(M.value, (K) => {
                  var ie;
                  return t(), h(_s, {
                    key: K.name,
                    remote: K,
                    "sync-status": g.value[K.name],
                    "tracking-branch": N(K.name) ? (ie = m.value) == null ? void 0 : ie.branch : void 0,
                    "fetching-remote": Z.value,
                    onFetch: L,
                    onEdit: p,
                    onRemove: B
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !M.value.length && !G.value ? (t(), h(me, {
              key: 3,
              icon: "🌐",
              message: V.value ? `No remotes match '${V.value}'` : "No remotes configured."
            }, {
              actions: o(() => [
                l(U, {
                  variant: "primary",
                  onClick: k
                }, {
                  default: o(() => [...z[4] || (z[4] = [
                    v(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: H.value,
        title: "About Git Remotes",
        onClose: z[2] || (z[2] = (K) => H.value = !1)
      }, {
        content: o(() => [...z[5] || (z[5] = [
          a("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          a("p", null, [
            v(" The "),
            a("strong", null, '"origin"'),
            v(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: o(() => [
          l(U, {
            variant: "link",
            onClick: Q
          }, {
            default: o(() => [...z[6] || (z[6] = [
              v(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ws = /* @__PURE__ */ A(As, [["__scopeId", "data-v-a75719bb"]]), Fs = { class: "setting-info" }, Ps = { class: "setting-label" }, Gs = {
  key: 0,
  class: "required-marker"
}, Hs = {
  key: 0,
  class: "setting-description"
}, Ks = { class: "setting-control" }, js = /* @__PURE__ */ O({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (c, n) => (t(), s("div", {
      class: j(["setting-row", { disabled: e.disabled }])
    }, [
      a("div", Fs, [
        a("div", Ps, [
          v(u(e.label) + " ", 1),
          e.required ? (t(), s("span", Gs, "*")) : d("", !0)
        ]),
        e.description ? (t(), s("div", Hs, u(e.description), 1)) : d("", !0)
      ]),
      a("div", Ks, [
        J(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ne = /* @__PURE__ */ A(js, [["__scopeId", "data-v-cb5d236c"]]), qs = { class: "toggle" }, Ys = ["checked", "disabled"], Js = /* @__PURE__ */ O({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (c, n) => (t(), s("label", qs, [
      a("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Ys),
      n[1] || (n[1] = a("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), he = /* @__PURE__ */ A(Js, [["__scopeId", "data-v-71c0f550"]]), Xs = { class: "settings-section" }, Zs = { class: "settings-section" }, Qs = { class: "settings-section" }, el = { class: "settings-section" }, tl = { class: "settings-section" }, ol = { class: "settings-section" }, al = /* @__PURE__ */ O({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const c = I(!1), n = I(null), r = I(null), i = I({
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
    }), _ = I(null), y = T(() => _.value ? JSON.stringify(i.value) !== JSON.stringify(_.value) : !1), b = [
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
    ], g = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], x = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], S = [
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
      c.value = !0, n.value = null;
      try {
        await new Promise((D) => setTimeout(D, 500)), _.value = JSON.parse(JSON.stringify(i.value));
      } catch (D) {
        n.value = D instanceof Error ? D.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function Z() {
      r.value = null;
      try {
        await new Promise((D) => setTimeout(D, 300)), _.value = JSON.parse(JSON.stringify(i.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (D) {
        r.value = {
          type: "error",
          message: D instanceof Error ? D.message : "Failed to save settings"
        };
      }
    }
    function G() {
      _.value && (i.value = JSON.parse(JSON.stringify(_.value)), r.value = null);
    }
    return re(H), (D, E) => (t(), h(ve, null, {
      header: o(() => [
        l(fe, { title: "WORKSPACE SETTINGS" }, {
          actions: o(() => [
            l(U, {
              variant: "primary",
              size: "sm",
              disabled: !y.value,
              onClick: Z
            }, {
              default: o(() => [...E[19] || (E[19] = [
                v(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            y.value ? (t(), h(U, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: G
            }, {
              default: o(() => [...E[20] || (E[20] = [
                v(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: o(() => [
        c.value ? (t(), h(be, {
          key: 0,
          message: "Loading workspace settings..."
        })) : n.value ? (t(), h(we, {
          key: 1,
          message: n.value,
          retry: !0,
          onRetry: H
        }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
          l(ae, { title: "GIT CONFIGURATION" }, {
            default: o(() => [
              a("div", Xs, [
                l(ne, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: o(() => [
                    l(Ee, {
                      modelValue: i.value.git.userName,
                      "onUpdate:modelValue": E[0] || (E[0] = (M) => i.value.git.userName = M),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: o(() => [
                    l(Ee, {
                      modelValue: i.value.git.userEmail,
                      "onUpdate:modelValue": E[1] || (E[1] = (M) => i.value.git.userEmail = M),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: o(() => [
                    l(Ee, {
                      modelValue: i.value.git.defaultBranch,
                      "onUpdate:modelValue": E[2] || (E[2] = (M) => i.value.git.defaultBranch = M),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.git.autoCommit,
                      "onUpdate:modelValue": E[3] || (E[3] = (M) => i.value.git.autoCommit = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ae, { title: "WORKSPACE PATHS" }, {
            default: o(() => [
              a("div", Zs, [
                l(ne, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: o(() => [
                    l(Be, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: o(() => [
                        v(u(i.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: o(() => [
                    l(Be, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: o(() => [
                        v(u(i.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: o(() => [
                    l(Be, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: o(() => [
                        v(u(i.value.paths.modelsDir), 1)
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
          l(ae, { title: "MODEL INDEX" }, {
            default: o(() => [
              a("div", Qs, [
                l(ne, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": E[4] || (E[4] = (M) => i.value.modelIndex.autoIndex = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !i.value.modelIndex.autoIndex
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": E[5] || (E[5] = (M) => i.value.modelIndex.indexOnStartup = M),
                      disabled: !i.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(ne, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !i.value.modelIndex.autoIndex
                }, {
                  default: o(() => [
                    l(Se, {
                      modelValue: i.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": E[6] || (E[6] = (M) => i.value.modelIndex.scanInterval = M),
                      options: b,
                      disabled: !i.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(ne, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.modelIndex.deepScan,
                      "onUpdate:modelValue": E[7] || (E[7] = (M) => i.value.modelIndex.deepScan = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ae, { title: "ENVIRONMENT DEFAULTS" }, {
            default: o(() => [
              a("div", el, [
                l(ne, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: o(() => [
                    l(Se, {
                      modelValue: i.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": E[8] || (E[8] = (M) => i.value.environment.defaultComfyUIVersion = M),
                      options: m,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: o(() => [
                    l(Se, {
                      modelValue: i.value.environment.pythonVersion,
                      "onUpdate:modelValue": E[9] || (E[9] = (M) => i.value.environment.pythonVersion = M),
                      options: g,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": E[10] || (E[10] = (M) => i.value.environment.autoCreateVenv = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": E[11] || (E[11] = (M) => i.value.environment.autoInstallDeps = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ae, { title: "UI PREFERENCES" }, {
            default: o(() => [
              a("div", tl, [
                l(ne, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: o(() => [
                    l(Se, {
                      modelValue: i.value.ui.theme,
                      "onUpdate:modelValue": E[12] || (E[12] = (M) => i.value.ui.theme = M),
                      options: x,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.ui.compactMode,
                      "onUpdate:modelValue": E[13] || (E[13] = (M) => i.value.ui.compactMode = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.ui.showFileExtensions,
                      "onUpdate:modelValue": E[14] || (E[14] = (M) => i.value.ui.showFileExtensions = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.ui.confirmDestructive,
                      "onUpdate:modelValue": E[15] || (E[15] = (M) => i.value.ui.confirmDestructive = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ae, { title: "ADVANCED" }, {
            default: o(() => [
              a("div", ol, [
                l(ne, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: o(() => [
                    l(he, {
                      modelValue: i.value.advanced.debugMode,
                      "onUpdate:modelValue": E[16] || (E[16] = (M) => i.value.advanced.debugMode = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: o(() => [
                    l(Se, {
                      modelValue: i.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": E[17] || (E[17] = (M) => i.value.advanced.maxHistoryItems = M),
                      options: S,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: o(() => [
                    l(Se, {
                      modelValue: i.value.advanced.cacheDuration,
                      "onUpdate:modelValue": E[18] || (E[18] = (M) => i.value.advanced.cacheDuration = M),
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
          r.value ? (t(), h($e, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: o(() => [
              a("span", {
                style: ot({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, u(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), nl = /* @__PURE__ */ A(al, [["__scopeId", "data-v-74f65bd5"]]), sl = { class: "log-filter-bar" }, ll = { class: "log-filter-bar__options" }, rl = ["onClick"], il = /* @__PURE__ */ O({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: c }) {
    const n = e, r = c, i = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function _(b) {
      return n.activeLevels.includes(b);
    }
    function y(b) {
      r("toggle", b);
    }
    return (b, m) => (t(), s("div", sl, [
      m[1] || (m[1] = a("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      a("div", ll, [
        (t(), s(P, null, X(i, (g) => a("button", {
          key: g,
          class: j(["filter-option", { active: _(g) }]),
          onClick: (x) => y(g)
        }, u(g), 11, rl)), 64)),
        a("button", {
          class: "filter-option filter-option--clear",
          onClick: m[0] || (m[0] = (g) => b.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), mt = /* @__PURE__ */ A(il, [["__scopeId", "data-v-9052edf8"]]), cl = { class: "log-list" }, dl = /* @__PURE__ */ O({
  __name: "LogList",
  setup(e) {
    return (c, n) => (t(), s("div", cl, [
      J(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), vt = /* @__PURE__ */ A(dl, [["__scopeId", "data-v-0061c330"]]), ul = { class: "log-level__icon" }, ml = { class: "log-level__text" }, vl = /* @__PURE__ */ O({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const c = e, n = T(() => `log-level--${c.level.toLowerCase()}`), r = T(() => {
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
    return (i, _) => (t(), s("span", {
      class: j(["log-level", n.value])
    }, [
      a("span", ul, u(r.value), 1),
      a("span", ml, u(e.level), 1)
    ], 2));
  }
}), fl = /* @__PURE__ */ A(vl, [["__scopeId", "data-v-8547c115"]]), gl = { class: "log-item__header" }, hl = { class: "log-item__timestamp" }, pl = {
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
    const n = e, r = T(() => `log-item--${n.level.toLowerCase()}`);
    return (i, _) => (t(), s("div", {
      class: j(["log-item", r.value, { clickable: e.clickable }]),
      onClick: _[0] || (_[0] = (y) => e.clickable && i.$emit("click"))
    }, [
      a("div", gl, [
        l(fl, { level: e.level }, null, 8, ["level"]),
        a("span", hl, u(e.timestamp), 1),
        e.context ? (t(), s("span", pl, u(e.context), 1)) : d("", !0)
      ]),
      a("div", yl, u(e.message), 1)
    ], 2));
  }
}), ft = /* @__PURE__ */ A(bl, [["__scopeId", "data-v-adb291b1"]]), wl = {
  key: 2,
  class: "load-more"
}, kl = /* @__PURE__ */ O({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: c } = de(), n = I([]), r = I(!1), i = I(null), _ = I(!1), y = I(["ERROR", "WARNING", "INFO", "DEBUG"]), b = I(100), m = T(() => n.value.filter((C) => C.level === "ERROR").length), g = T(() => n.value.filter((C) => C.level === "WARNING").length), x = T(() => n.value.filter((C) => C.level === "INFO").length), S = T(() => n.value.filter((C) => C.level === "DEBUG").length), V = T(() => n.value.filter((C) => y.value.includes(C.level))), H = T(() => V.value.slice(0, b.value)), Z = T(() => V.value.length > b.value);
    function G(C) {
      const k = y.value.indexOf(C);
      k >= 0 ? y.value.splice(k, 1) : y.value.push(C);
    }
    function D() {
      y.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function E() {
      b.value += 100;
    }
    function M(C) {
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
    async function N() {
      r.value = !0, i.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (C) {
        i.value = C instanceof Error ? C.message : "Failed to load workspace logs";
      } finally {
        r.value = !1;
      }
    }
    return re(N), (C, k) => (t(), s(P, null, [
      l(ve, null, {
        header: o(() => [
          l(fe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (p) => _.value = !0)
          })
        ]),
        content: o(() => [
          r.value ? (t(), h(be, {
            key: 0,
            message: "Loading workspace logs..."
          })) : i.value ? (t(), h(we, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
            n.value.length > 0 ? (t(), h($e, {
              key: 0,
              variant: "compact"
            }, {
              default: o(() => [
                v(" Total: " + u(n.value.length) + " entries • " + u(m.value) + " errors • " + u(g.value) + " warnings • " + u(x.value) + " info • " + u(S.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            l(mt, {
              "active-levels": y.value,
              onToggle: G,
              onClear: D
            }, null, 8, ["active-levels"]),
            V.value.length > 0 ? (t(), h(vt, { key: 1 }, {
              default: o(() => [
                (t(!0), s(P, null, X(H.value, (p, w) => (t(), h(ft, {
                  key: `${p.timestamp}-${w}`,
                  level: p.level,
                  timestamp: M(p.timestamp),
                  message: p.message,
                  context: p.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            Z.value ? (t(), s("div", wl, [
              l(U, {
                variant: "secondary",
                onClick: E
              }, {
                default: o(() => [
                  v(" Load More (" + u(V.value.length - b.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            n.value.length > 0 && V.value.length === 0 ? (t(), h(me, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            n.value.length === 0 ? (t(), h(me, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: _.value,
        title: "About Workspace Logs",
        onClose: k[2] || (k[2] = (p) => _.value = !1)
      }, {
        content: o(() => [...k[3] || (k[3] = [
          a("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          a("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            a("strong", null, "Log Levels:"),
            a("br"),
            a("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            a("br"),
            a("strong", null, "WARNING:"),
            v(" Potential issues or deprecated features"),
            a("br"),
            a("strong", null, "INFO:"),
            v(" General operational information"),
            a("br"),
            a("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1),
          a("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: o(() => [
          l(U, {
            variant: "primary",
            onClick: k[1] || (k[1] = (p) => _.value = !1)
          }, {
            default: o(() => [...k[4] || (k[4] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _l = /* @__PURE__ */ A(kl, [["__scopeId", "data-v-55d656f1"]]), $l = {
  key: 2,
  class: "load-more"
}, Cl = /* @__PURE__ */ O({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: c, getStatus: n } = de(), r = I([]), i = I(!1), _ = I(null), y = I(!1), b = I(["ERROR", "WARNING", "INFO", "DEBUG"]), m = I(50), g = I("production"), x = T(() => r.value.filter((w) => b.value.includes(w.level.toUpperCase()))), S = T(() => x.value.slice(0, m.value)), V = T(() => x.value.length > m.value), H = T(
      () => r.value.filter((w) => w.level.toUpperCase() === "ERROR").length
    ), Z = T(
      () => r.value.filter((w) => w.level.toUpperCase() === "WARNING").length
    ), G = T(
      () => r.value.filter((w) => w.level.toUpperCase() === "INFO").length
    ), D = T(
      () => r.value.filter((w) => w.level.toUpperCase() === "DEBUG").length
    );
    function E(w) {
      const f = b.value.indexOf(w);
      f > -1 ? b.value.splice(f, 1) : b.value.push(w);
    }
    function M() {
      b.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function N() {
      m.value += 50;
    }
    function C(w) {
      return new Date(w).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    }
    function k(w) {
      if (!w) return;
      const f = Object.entries(w);
      if (f.length === 0) return;
      const [L, B] = f[0];
      return typeof B == "string" || typeof B == "number" ? `${L}: ${B}` : L;
    }
    async function p() {
      i.value = !0, _.value = null;
      try {
        r.value = await c(void 0, 200), r.value.sort((w, f) => new Date(f.timestamp).getTime() - new Date(w.timestamp).getTime());
        try {
          const w = await n();
          g.value = w.environment || "production";
        } catch {
        }
      } catch (w) {
        _.value = w instanceof Error ? w.message : "Failed to load environment logs";
      } finally {
        i.value = !1;
      }
    }
    return re(p), (w, f) => (t(), s(P, null, [
      l(ve, null, {
        header: o(() => [
          l(fe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (L) => y.value = !0)
          })
        ]),
        content: o(() => [
          i.value ? (t(), h(be, {
            key: 0,
            message: "Loading environment logs..."
          })) : _.value ? (t(), h(we, {
            key: 1,
            message: _.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
            r.value.length > 0 ? (t(), h($e, {
              key: 0,
              variant: "compact"
            }, {
              default: o(() => [
                v(" Total: " + u(r.value.length) + " entries • " + u(H.value) + " errors • " + u(Z.value) + " warnings • " + u(G.value) + " info • " + u(D.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            l(mt, {
              "active-levels": b.value,
              onToggle: E,
              onClear: M
            }, null, 8, ["active-levels"]),
            x.value.length > 0 ? (t(), h(vt, { key: 1 }, {
              default: o(() => [
                (t(!0), s(P, null, X(S.value, (L, B) => (t(), h(ft, {
                  key: `${L.timestamp}-${B}`,
                  level: L.level,
                  timestamp: C(L.timestamp),
                  message: L.message,
                  context: k(L.context)
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            V.value ? (t(), s("div", $l, [
              l(U, {
                variant: "secondary",
                onClick: N
              }, {
                default: o(() => [
                  v(" Load More (" + u(x.value.length - m.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            r.value.length > 0 && x.value.length === 0 ? (t(), h(me, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            r.value.length === 0 ? (t(), h(me, {
              key: 4,
              icon: "📝",
              message: "No environment logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ce, {
        show: y.value,
        title: "About Environment Logs",
        onClose: f[2] || (f[2] = (L) => y.value = !1)
      }, {
        content: o(() => [
          a("p", null, [
            f[3] || (f[3] = v(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            a("strong", null, u(g.value), 1),
            f[4] || (f[4] = v(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          f[5] || (f[5] = a("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            a("strong", null, "Log Levels:"),
            a("br"),
            a("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            a("br"),
            a("strong", null, "WARNING:"),
            v(" Potential issues or important notices"),
            a("br"),
            a("strong", null, "INFO:"),
            v(" General operational information"),
            a("br"),
            a("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1)),
          f[6] || (f[6] = a("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: o(() => [
          l(U, {
            variant: "primary",
            onClick: f[1] || (f[1] = (L) => y.value = !1)
          }, {
            default: o(() => [...f[7] || (f[7] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), xl = /* @__PURE__ */ A(Cl, [["__scopeId", "data-v-456b4c97"]]), Il = { class: "env-title" }, Sl = {
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
    return (c, n) => (t(), h(le, {
      status: e.isCurrent ? "synced" : void 0
    }, {
      icon: o(() => [
        v(u(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: o(() => [
        a("div", Il, [
          a("span", null, u(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (t(), s("span", Sl, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: o(() => [
        e.currentBranch ? (t(), s("span", El, [
          n[0] || (n[0] = a("span", { class: "branch-icon" }, "⎇", -1)),
          v(" " + u(e.currentBranch), 1)
        ])) : d("", !0)
      ]),
      details: o(() => [
        l(Y, {
          label: "Workflows:",
          value: String(e.workflowCount)
        }, null, 8, ["value"]),
        l(Y, {
          label: "Nodes:",
          value: String(e.nodeCount)
        }, null, 8, ["value"]),
        l(Y, {
          label: "Models:",
          value: String(e.modelCount)
        }, null, 8, ["value"]),
        e.lastUsed && e.showLastUsed ? (t(), h(Y, {
          key: 0,
          label: "Last used:",
          value: e.lastUsed
        }, null, 8, ["value"])) : d("", !0)
      ]),
      actions: o(() => [
        J(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), zl = /* @__PURE__ */ A(Ll, [["__scopeId", "data-v-5238e57c"]]), Rl = {
  key: 0,
  class: "create-form"
}, Nl = { class: "create-form__header" }, Ml = { class: "create-form__body" }, Ul = { class: "create-form__actions" }, Dl = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Vl = /* @__PURE__ */ O({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(e, { emit: c }) {
    const n = c, { getEnvironments: r } = de(), i = I([]), _ = I(!1), y = I(null), b = I(""), m = I(!1), g = I(!1), x = I(""), S = T(
      () => i.value.find((N) => N.is_current)
    ), V = T(() => {
      if (!b.value.trim()) return i.value;
      const N = b.value.toLowerCase();
      return i.value.filter(
        (C) => {
          var k;
          return C.name.toLowerCase().includes(N) || ((k = C.current_branch) == null ? void 0 : k.toLowerCase().includes(N));
        }
      );
    });
    function H(N) {
      if (!N) return "";
      try {
        const C = new Date(N), p = (/* @__PURE__ */ new Date()).getTime() - C.getTime(), w = Math.floor(p / 6e4), f = Math.floor(p / 36e5), L = Math.floor(p / 864e5);
        return w < 1 ? "just now" : w < 60 ? `${w} ${w === 1 ? "minute" : "minutes"} ago` : f < 24 ? `${f} ${f === 1 ? "hour" : "hours"} ago` : L < 30 ? `${L} ${L === 1 ? "day" : "days"} ago` : C.toLocaleDateString();
      } catch {
        return N;
      }
    }
    function Z() {
      const N = x.value.trim();
      N && (n("create", N), x.value = "", g.value = !1);
    }
    function G() {
      x.value = "", g.value = !1;
    }
    function D(N) {
      n("viewDetails", N);
    }
    function E(N) {
      confirm(`Delete environment "${N}"?

This action cannot be undone.`) && n("delete", N);
    }
    async function M() {
      _.value = !0, y.value = null;
      try {
        i.value = await r();
      } catch (N) {
        y.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        _.value = !1;
      }
    }
    return re(M), (N, C) => {
      const k = kt("SectionGroup");
      return t(), s(P, null, [
        l(ve, null, {
          header: o(() => [
            l(fe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: C[1] || (C[1] = (p) => m.value = !0)
            }, {
              actions: o(() => [
                l(U, {
                  variant: "ghost",
                  size: "sm",
                  onClick: C[0] || (C[0] = (p) => g.value = !0),
                  title: "Create new environment"
                }, {
                  default: o(() => [...C[7] || (C[7] = [
                    a("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      a("path", {
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
                  onClick: M,
                  title: "Refresh environments"
                }, {
                  default: o(() => [...C[8] || (C[8] = [
                    a("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      a("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: o(() => [
            l(Re, {
              modelValue: b.value,
              "onUpdate:modelValue": C[2] || (C[2] = (p) => b.value = p),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: o(() => [
            _.value ? (t(), h(be, {
              key: 0,
              message: "Loading environments..."
            })) : y.value ? (t(), h(we, {
              key: 1,
              message: y.value,
              retry: !0,
              onRetry: M
            }, null, 8, ["message"])) : (t(), s(P, { key: 2 }, [
              g.value ? (t(), s("div", Rl, [
                a("div", Nl, [
                  C[10] || (C[10] = a("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  l(U, {
                    variant: "ghost",
                    size: "xs",
                    onClick: G
                  }, {
                    default: o(() => [...C[9] || (C[9] = [
                      v(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                a("div", Ml, [
                  l(Ee, {
                    modelValue: x.value,
                    "onUpdate:modelValue": C[3] || (C[3] = (p) => x.value = p),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      ye(Z, ["enter"]),
                      ye(G, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  a("div", Ul, [
                    l(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: Z,
                      disabled: !x.value.trim()
                    }, {
                      default: o(() => [...C[11] || (C[11] = [
                        v(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: G
                    }, {
                      default: o(() => [...C[12] || (C[12] = [
                        v(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : d("", !0),
              i.value.length ? (t(), h($e, {
                key: 1,
                variant: "compact"
              }, {
                default: o(() => [
                  v(" Total: " + u(i.value.length) + " " + u(i.value.length === 1 ? "environment" : "environments") + " ", 1),
                  S.value ? (t(), s(P, { key: 0 }, [
                    C[13] || (C[13] = v(" • Current: ", -1)),
                    a("strong", null, u(S.value.name), 1)
                  ], 64)) : d("", !0)
                ]),
                _: 1
              })) : d("", !0),
              V.value.length ? (t(), h(k, {
                key: 2,
                title: "ENVIRONMENTS",
                count: V.value.length
              }, {
                default: o(() => [
                  (t(!0), s(P, null, X(V.value, (p) => (t(), h(zl, {
                    key: p.name,
                    "environment-name": p.name,
                    "is-current": p.is_current,
                    "current-branch": p.current_branch,
                    "workflow-count": p.workflow_count,
                    "node-count": p.node_count,
                    "model-count": p.model_count,
                    "last-used": H(p.last_used),
                    "show-last-used": !!p.last_used
                  }, {
                    actions: o(() => [
                      p.is_current ? d("", !0) : (t(), h(U, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (w) => N.$emit("switch", p.name)
                      }, {
                        default: o(() => [...C[14] || (C[14] = [
                          v(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      l(U, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (w) => D(p.name),
                        title: "View environment details"
                      }, {
                        default: o(() => [...C[15] || (C[15] = [
                          a("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            a("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            a("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !p.is_current && i.value.length > 1 ? (t(), h(U, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (w) => E(p.name),
                        title: "Delete environment"
                      }, {
                        default: o(() => [
                          (t(), s("svg", Dl, [...C[16] || (C[16] = [
                            a("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : d("", !0),
              V.value.length ? d("", !0) : (t(), h(me, {
                key: 3,
                icon: "🌍",
                message: b.value ? `No environments match '${b.value}'` : "No environments found. Create one to get started!"
              }, it({ _: 2 }, [
                b.value ? void 0 : {
                  name: "actions",
                  fn: o(() => [
                    l(U, {
                      variant: "primary",
                      onClick: C[4] || (C[4] = (p) => g.value = !0)
                    }, {
                      default: o(() => [...C[17] || (C[17] = [
                        v(" Create Environment ", -1)
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
          show: m.value,
          title: "About Environments",
          onClose: C[6] || (C[6] = (p) => m.value = !1)
        }, {
          content: o(() => [...C[18] || (C[18] = [
            a("p", null, [
              a("strong", null, "Environments"),
              v(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
            ], -1),
            a("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
              a("strong", null, "Use cases:")
            ], -1),
            a("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
              a("li", null, "Separate production and development workflows"),
              a("li", null, "Test different node configurations"),
              a("li", null, "Experiment with new models safely"),
              a("li", null, "Maintain multiple project versions")
            ], -1)
          ])]),
          actions: o(() => [
            l(U, {
              variant: "secondary",
              onClick: C[5] || (C[5] = (p) => m.value = !1)
            }, {
              default: o(() => [...C[19] || (C[19] = [
                v(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Tl = /* @__PURE__ */ A(Vl, [["__scopeId", "data-v-97d6527d"]]), Bl = { class: "file-path" }, Ol = { class: "file-path-text" }, Al = ["title"], Wl = /* @__PURE__ */ O({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const c = e, n = I(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (i) {
        console.error("Failed to copy:", i);
      }
    }
    return (i, _) => (t(), s("div", Bl, [
      _[0] || (_[0] = a("span", { class: "file-path-icon" }, "📄", -1)),
      a("code", Ol, u(e.path), 1),
      e.copyable ? (t(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, u(n.value ? "✓" : "📋"), 9, Al)) : d("", !0)
    ]));
  }
}), Fl = /* @__PURE__ */ A(Wl, [["__scopeId", "data-v-f0982173"]]), Pl = { class: "output-path-input" }, Gl = { class: "export-actions" }, Hl = {
  key: 1,
  class: "export-warning"
}, Kl = /* @__PURE__ */ O({
  __name: "ExportSection",
  setup(e) {
    const { exportEnv: c } = de(), n = I(""), r = I(!1), i = I(null), _ = I(!1);
    async function y() {
      r.value = !0, i.value = null;
      try {
        const m = await c(n.value || void 0);
        i.value = m;
      } catch (m) {
        i.value = {
          status: "error",
          message: m instanceof Error ? m.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function b() {
      var m;
      if ((m = i.value) != null && m.path)
        try {
          await navigator.clipboard.writeText(i.value.path);
        } catch (g) {
          console.error("Failed to copy path:", g);
        }
    }
    return (m, g) => (t(), s(P, null, [
      l(ve, null, {
        header: o(() => [
          l(fe, { title: "EXPORT ENVIRONMENT" }, {
            actions: o(() => [
              l(U, {
                variant: "ghost",
                size: "sm",
                onClick: g[0] || (g[0] = (x) => _.value = !0),
                title: "About exporting"
              }, {
                default: o(() => [...g[5] || (g[5] = [
                  a("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    a("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    a("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        content: o(() => [
          l(ae, { title: "WHAT WILL BE EXPORTED" }, {
            default: o(() => [
              l(le, { status: "synced" }, {
                icon: o(() => [...g[6] || (g[6] = [
                  v("📦", -1)
                ])]),
                title: o(() => [...g[7] || (g[7] = [
                  v("Environment Snapshot", -1)
                ])]),
                subtitle: o(() => [...g[8] || (g[8] = [
                  v(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: o(() => [
                  l(Y, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  l(Y, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  l(Y, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  l(Y, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(ae, { title: "EXPORT OPTIONS" }, {
            default: o(() => [
              l(le, { status: "synced" }, {
                icon: o(() => [...g[9] || (g[9] = [
                  v("📁", -1)
                ])]),
                title: o(() => [...g[10] || (g[10] = [
                  v("Output Destination", -1)
                ])]),
                subtitle: o(() => [...g[11] || (g[11] = [
                  v(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: o(() => [
                  a("div", Pl, [
                    l(Ee, {
                      modelValue: n.value,
                      "onUpdate:modelValue": g[1] || (g[1] = (x) => n.value = x),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(ae, { title: "EXPORT" }, {
            default: o(() => [
              a("div", Gl, [
                l(U, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: y
                }, {
                  default: o(() => [
                    g[12] || (g[12] = a("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      a("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      a("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    v(" " + u(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (t(), h(U, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: g[2] || (g[2] = (x) => n.value = "")
                }, {
                  default: o(() => [...g[13] || (g[13] = [
                    v(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          i.value ? (t(), h(ae, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: o(() => [
              l(le, {
                status: i.value.status === "success" ? "synced" : "broken"
              }, it({
                icon: o(() => [
                  v(u(i.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: o(() => [
                  v(u(i.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: o(() => [
                  v(u(i.value.status === "success" ? "Your environment has been exported" : i.value.message), 1)
                ]),
                _: 2
              }, [
                i.value.status === "success" ? {
                  name: "details",
                  fn: o(() => [
                    l(Y, { label: "Saved to:" }, {
                      default: o(() => [
                        l(Fl, {
                          path: i.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    i.value.models_without_sources !== void 0 ? (t(), h(Y, {
                      key: 0,
                      label: "Models without sources:",
                      value: i.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    i.value.models_without_sources && i.value.models_without_sources > 0 ? (t(), s("div", Hl, [...g[14] || (g[14] = [
                      a("span", { class: "warning-icon" }, "!", -1),
                      a("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                i.value.status === "success" ? {
                  name: "actions",
                  fn: o(() => [
                    l(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: b
                    }, {
                      default: o(() => [...g[15] || (g[15] = [
                        v(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    l(U, {
                      variant: "ghost",
                      size: "sm",
                      onClick: g[3] || (g[3] = (x) => i.value = null)
                    }, {
                      default: o(() => [...g[16] || (g[16] = [
                        v(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }),
      l(Ce, {
        show: _.value,
        title: "About Environment Export",
        onClose: g[4] || (g[4] = (x) => _.value = !1)
      }, {
        content: o(() => [...g[17] || (g[17] = [
          a("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          a("ul", null, [
            a("li", null, "Shared with collaborators"),
            a("li", null, "Backed up for safekeeping"),
            a("li", null, "Imported into other ComfyGit workspaces"),
            a("li", null, "Version controlled separately")
          ], -1),
          a("p", null, [
            a("strong", null, "Note:"),
            v(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jl = /* @__PURE__ */ A(Kl, [["__scopeId", "data-v-1777a9d5"]]), ql = { class: "header-info" }, Yl = { class: "commit-hash" }, Jl = {
  key: 0,
  class: "commit-refs"
}, Xl = { class: "commit-message" }, Zl = { class: "commit-date" }, Ql = {
  key: 0,
  class: "loading"
}, er = {
  key: 1,
  class: "changes-section"
}, tr = { class: "stats-row" }, or = { class: "stat" }, ar = { class: "stat insertions" }, nr = { class: "stat deletions" }, sr = {
  key: 0,
  class: "change-group"
}, lr = {
  key: 1,
  class: "change-group"
}, rr = {
  key: 0,
  class: "version"
}, ir = {
  key: 2,
  class: "change-group"
}, cr = { class: "change-item" }, dr = /* @__PURE__ */ O({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const c = e, { getCommitDetail: n } = de(), r = I(null), i = I(!0), _ = T(() => {
      if (!r.value) return !1;
      const b = r.value.changes.workflows;
      return b.added.length > 0 || b.modified.length > 0 || b.deleted.length > 0;
    }), y = T(() => {
      if (!r.value) return !1;
      const b = r.value.changes.nodes;
      return b.added.length > 0 || b.removed.length > 0;
    });
    return re(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        i.value = !1;
      }
    }), (b, m) => (t(), h(We, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (g) => b.$emit("close"))
    }, {
      header: o(() => {
        var g, x, S, V;
        return [
          a("div", ql, [
            m[4] || (m[4] = a("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            a("span", Yl, u(((g = r.value) == null ? void 0 : g.short_hash) || e.commit.short_hash || ((x = e.commit.hash) == null ? void 0 : x.slice(0, 7))), 1),
            (V = (S = r.value) == null ? void 0 : S.refs) != null && V.length ? (t(), s("span", Jl, [
              (t(!0), s(P, null, X(r.value.refs, (H) => (t(), s("span", {
                key: H,
                class: "ref-badge"
              }, u(H), 1))), 128))
            ])) : d("", !0)
          ]),
          l(ce, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (H) => b.$emit("close"))
          }, {
            default: o(() => [...m[5] || (m[5] = [
              a("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                a("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: o(() => {
        var g, x;
        return [
          a("div", Xl, u(((g = r.value) == null ? void 0 : g.message) || e.commit.message), 1),
          a("div", Zl, u(((x = r.value) == null ? void 0 : x.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          i.value ? (t(), s("div", Ql, "Loading details...")) : r.value ? (t(), s("div", er, [
            a("div", tr, [
              a("span", or, u(r.value.stats.files_changed) + " files", 1),
              a("span", ar, "+" + u(r.value.stats.insertions), 1),
              a("span", nr, "-" + u(r.value.stats.deletions), 1)
            ]),
            _.value ? (t(), s("div", sr, [
              l(_e, { variant: "section" }, {
                default: o(() => [...m[6] || (m[6] = [
                  v("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(P, null, X(r.value.changes.workflows.added, (S) => (t(), s("div", {
                key: "add-" + S,
                class: "change-item added"
              }, [
                m[7] || (m[7] = a("span", { class: "change-icon" }, "+", -1)),
                a("span", null, u(S), 1)
              ]))), 128)),
              (t(!0), s(P, null, X(r.value.changes.workflows.modified, (S) => (t(), s("div", {
                key: "mod-" + S,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = a("span", { class: "change-icon" }, "~", -1)),
                a("span", null, u(S), 1)
              ]))), 128)),
              (t(!0), s(P, null, X(r.value.changes.workflows.deleted, (S) => (t(), s("div", {
                key: "del-" + S,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = a("span", { class: "change-icon" }, "-", -1)),
                a("span", null, u(S), 1)
              ]))), 128))
            ])) : d("", !0),
            y.value ? (t(), s("div", lr, [
              l(_e, { variant: "section" }, {
                default: o(() => [...m[10] || (m[10] = [
                  v("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(P, null, X(r.value.changes.nodes.added, (S) => (t(), s("div", {
                key: "add-" + S.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = a("span", { class: "change-icon" }, "+", -1)),
                a("span", null, u(S.name), 1),
                S.version ? (t(), s("span", rr, "(" + u(S.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (t(!0), s(P, null, X(r.value.changes.nodes.removed, (S) => (t(), s("div", {
                key: "rem-" + S.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = a("span", { class: "change-icon" }, "-", -1)),
                a("span", null, u(S.name), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.changes.models.resolved > 0 ? (t(), s("div", ir, [
              l(_e, { variant: "section" }, {
                default: o(() => [...m[13] || (m[13] = [
                  v("MODELS", -1)
                ])]),
                _: 1
              }),
              a("div", cr, [
                m[14] || (m[14] = a("span", { class: "change-icon" }, "●", -1)),
                a("span", null, u(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: o(() => [
        l(ce, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (g) => b.$emit("createBranch", e.commit))
        }, {
          default: o(() => [...m[15] || (m[15] = [
            v(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        l(ce, {
          variant: "primary",
          onClick: m[2] || (m[2] = (g) => b.$emit("checkout", e.commit))
        }, {
          default: o(() => [...m[16] || (m[16] = [
            v(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ur = /* @__PURE__ */ A(dr, [["__scopeId", "data-v-d256ff6d"]]), mr = { class: "dialog-message" }, vr = {
  key: 0,
  class: "dialog-details"
}, fr = {
  key: 1,
  class: "dialog-warning"
}, gr = /* @__PURE__ */ O({
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
    return (c, n) => (t(), h(We, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: o(() => [
        a("p", mr, u(e.message), 1),
        e.details && e.details.length ? (t(), s("div", vr, [
          (t(!0), s(P, null, X(e.details, (r, i) => (t(), s("div", {
            key: i,
            class: "detail-item"
          }, " • " + u(r), 1))), 128))
        ])) : d("", !0),
        e.warning ? (t(), s("p", fr, [
          n[4] || (n[4] = a("span", { class: "warning-icon" }, "⚠", -1)),
          v(" " + u(e.warning), 1)
        ])) : d("", !0)
      ]),
      footer: o(() => [
        l(ce, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: o(() => [
            v(u(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), h(ce, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: o(() => [
            v(u(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        l(ce, {
          variant: e.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
        }, {
          default: o(() => [
            v(u(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), hr = /* @__PURE__ */ A(gr, [["__scopeId", "data-v-3670b9f5"]]), pr = { class: "comfygit-panel" }, yr = { class: "panel-header" }, br = { class: "header-left" }, wr = {
  key: 0,
  class: "header-info"
}, kr = { class: "header-actions" }, _r = { class: "env-switcher" }, $r = {
  key: 0,
  class: "header-info"
}, Cr = { class: "branch-name" }, xr = { class: "panel-main" }, Ir = { class: "sidebar" }, Sr = { class: "sidebar-section" }, Er = { class: "sidebar-section" }, Lr = { class: "sidebar-section" }, zr = { class: "content-area" }, Rr = {
  key: 0,
  class: "error-message"
}, Nr = {
  key: 1,
  class: "loading"
}, Mr = {
  key: 12,
  class: "view-placeholder"
}, Ur = { class: "dialog-content env-selector-dialog" }, Dr = { class: "dialog-header" }, Vr = { class: "dialog-body" }, Tr = { class: "env-list" }, Br = { class: "env-info" }, Or = { class: "env-name-row" }, Ar = { class: "env-indicator" }, Wr = { class: "env-name" }, Fr = {
  key: 0,
  class: "env-branch"
}, Pr = {
  key: 1,
  class: "current-label"
}, Gr = { class: "env-stats" }, Hr = ["onClick"], Kr = { class: "toast-container" }, jr = { class: "toast-icon" }, qr = { class: "toast-message" }, Yr = /* @__PURE__ */ O({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: i,
      getBranches: _,
      checkout: y,
      createBranch: b,
      switchBranch: m,
      getEnvironments: g
    } = de(), x = I(null), S = I([]), V = I([]), H = I([]), Z = T(() => H.value.find((R) => R.is_current)), G = I(!1), D = I(null), E = I(null), M = I(!1), N = I("status"), C = I("this-env");
    function k(R, $) {
      N.value = R, C.value = $;
    }
    function p(R) {
      const oe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[R];
      oe && k(oe.view, oe.section);
    }
    function w() {
      k("branches", "this-env");
    }
    const f = I(null), L = I([]);
    let B = 0;
    function Q(R, $ = "info", oe = 3e3) {
      const se = ++B;
      return L.value.push({ id: se, message: R, type: $ }), oe > 0 && setTimeout(() => {
        L.value = L.value.filter((xe) => xe.id !== se);
      }, oe), se;
    }
    function W(R) {
      L.value = L.value.filter(($) => $.id !== R);
    }
    function z(R) {
      switch (R) {
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
    const K = T(() => {
      if (!x.value) return "neutral";
      const R = x.value.workflows, $ = R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? $ ? "warning" : "success" : "error";
    });
    T(() => x.value ? K.value === "success" ? "All synced" : K.value === "warning" ? "Uncommitted changes" : K.value === "error" ? "Not synced" : "" : "");
    async function ie() {
      G.value = !0, D.value = null;
      try {
        const [R, $, oe, se] = await Promise.all([
          r(),
          i(),
          _(),
          g()
        ]);
        x.value = R, S.value = $.commits, V.value = oe.branches, H.value = se, n("statusUpdate", R);
      } catch (R) {
        D.value = R instanceof Error ? R.message : "Failed to load status", x.value = null, S.value = [], V.value = [];
      } finally {
        G.value = !1;
      }
    }
    function Fe(R) {
      E.value = R;
    }
    async function Ue(R) {
      var oe;
      E.value = null;
      const $ = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      f.value = {
        title: $ ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: $ ? "You have uncommitted changes that will be lost." : `Checkout commit ${R.short_hash || ((oe = R.hash) == null ? void 0 : oe.slice(0, 7))}?`,
        details: $ ? F() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: $ ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: $,
        onConfirm: async () => {
          var q;
          f.value = null;
          const se = Q(`Checking out ${R.short_hash || ((q = R.hash) == null ? void 0 : q.slice(0, 7))}...`, "info", 0), xe = await y(R.hash, $);
          W(se), xe.status === "success" ? Q("Restarting ComfyUI...", "success") : Q(xe.message || "Checkout failed", "error");
        }
      };
    }
    async function Pe(R) {
      const $ = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      f.value = {
        title: $ ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: $ ? "You have uncommitted changes." : `Switch to branch "${R}"?`,
        details: $ ? F() : void 0,
        warning: $ ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: $ ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          f.value = null;
          const oe = Q(`Switching to ${R}...`, "info", 0), se = await m(R, $);
          W(oe), se.status === "success" ? Q("Restarting ComfyUI...", "success") : Q(se.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ge(R) {
      const $ = Q(`Creating branch ${R}...`, "info", 0), oe = await b(R);
      W($), oe.status === "success" ? (Q(`Branch "${R}" created`, "success"), await ie()) : Q(oe.message || "Failed to create branch", "error");
    }
    async function He(R) {
      E.value = null;
      const $ = prompt("Enter branch name:");
      if ($) {
        const oe = Q(`Creating branch ${$}...`, "info", 0), se = await b($, R.hash);
        W(oe), se.status === "success" ? (Q(`Branch "${$}" created from ${R.short_hash}`, "success"), await ie()) : Q(se.message || "Failed to create branch", "error");
      }
    }
    async function De(R) {
      M.value = !1, Q("Environment switching not yet implemented", "warning");
    }
    async function Ke(R) {
      const $ = Q(`Creating environment "${R}"...`, "info", 0);
      W($), Q("Environment creation not yet implemented", "warning");
    }
    async function je(R) {
      const $ = Q(`Deleting environment "${R}"...`, "info", 0);
      W($), Q("Environment deletion not yet implemented", "warning");
    }
    function qe(R) {
      Q(`Viewing details for "${R}"`, "info"), k("models-env", "this-env");
    }
    function F() {
      if (!x.value) return [];
      const R = [], $ = x.value.workflows;
      return $.new.length && R.push(`${$.new.length} new workflow(s)`), $.modified.length && R.push(`${$.modified.length} modified workflow(s)`), $.deleted.length && R.push(`${$.deleted.length} deleted workflow(s)`), R;
    }
    return re(ie), (R, $) => {
      var oe, se, xe;
      return t(), s("div", pr, [
        a("div", yr, [
          a("div", br, [
            $[20] || ($[20] = a("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (t(), s("div", wr)) : d("", !0)
          ]),
          a("div", kr, [
            a("button", {
              class: j(["icon-btn", { spinning: G.value }]),
              onClick: ie,
              title: "Refresh"
            }, [...$[21] || ($[21] = [
              a("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                a("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            a("button", {
              class: "icon-btn",
              onClick: $[0] || ($[0] = (q) => n("close")),
              title: "Close"
            }, [...$[22] || ($[22] = [
              a("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                a("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        a("div", _r, [
          $[24] || ($[24] = a("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          a("button", {
            class: "env-switcher-btn",
            onClick: $[1] || ($[1] = (q) => M.value = !0)
          }, [
            x.value ? (t(), s("div", $r, [
              a("span", null, u(((oe = Z.value) == null ? void 0 : oe.name) || ((se = x.value) == null ? void 0 : se.environment) || "Loading..."), 1),
              a("span", Cr, "(" + u(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            $[23] || ($[23] = a("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        a("div", xr, [
          a("div", Ir, [
            a("div", Sr, [
              $[25] || ($[25] = a("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "status" && C.value === "this-env" }]),
                onClick: $[2] || ($[2] = (q) => k("status", "this-env"))
              }, " STATUS ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "workflows" }]),
                onClick: $[3] || ($[3] = (q) => k("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "models-env" }]),
                onClick: $[4] || ($[4] = (q) => k("models-env", "this-env"))
              }, " MODELS ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "branches" }]),
                onClick: $[5] || ($[5] = (q) => k("branches", "this-env"))
              }, " BRANCHES ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "history" }]),
                onClick: $[6] || ($[6] = (q) => k("history", "this-env"))
              }, " HISTORY ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "nodes" }]),
                onClick: $[7] || ($[7] = (q) => k("nodes", "this-env"))
              }, " NODES ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "debug-env" }]),
                onClick: $[8] || ($[8] = (q) => k("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            $[28] || ($[28] = a("div", { class: "sidebar-divider" }, null, -1)),
            a("div", Er, [
              $[26] || ($[26] = a("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "environments" }]),
                onClick: $[9] || ($[9] = (q) => k("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "model-index" }]),
                onClick: $[10] || ($[10] = (q) => k("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "settings" }]),
                onClick: $[11] || ($[11] = (q) => k("settings", "all-envs"))
              }, " SETTINGS ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "debug-workspace" }]),
                onClick: $[12] || ($[12] = (q) => k("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            $[29] || ($[29] = a("div", { class: "sidebar-divider" }, null, -1)),
            a("div", Lr, [
              $[27] || ($[27] = a("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "export" }]),
                onClick: $[13] || ($[13] = (q) => k("export", "sharing"))
              }, " EXPORT ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "import" }]),
                onClick: $[14] || ($[14] = (q) => k("import", "sharing"))
              }, " IMPORT ", 2),
              a("button", {
                class: j(["sidebar-item", { active: N.value === "remotes" }]),
                onClick: $[15] || ($[15] = (q) => k("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          a("div", zr, [
            D.value ? (t(), s("div", Rr, u(D.value), 1)) : !x.value && N.value === "status" ? (t(), s("div", Nr, " Loading status... ")) : (t(), s(P, { key: 2 }, [
              N.value === "status" ? (t(), h(zo, {
                key: 0,
                status: x.value,
                onSwitchBranch: w
              }, null, 8, ["status"])) : N.value === "workflows" ? (t(), h(Fn, {
                key: 1,
                onRefresh: ie
              })) : N.value === "models-env" ? (t(), h(ts, {
                key: 2,
                onNavigate: p
              })) : N.value === "branches" ? (t(), h(Ho, {
                key: 3,
                branches: V.value,
                current: ((xe = x.value) == null ? void 0 : xe.branch) || null,
                onSwitch: Pe,
                onCreate: Ge
              }, null, 8, ["branches", "current"])) : N.value === "history" ? (t(), h(aa, {
                key: 4,
                commits: S.value,
                onSelect: Fe,
                onCheckout: Ue
              }, null, 8, ["commits"])) : N.value === "nodes" ? (t(), h(is, { key: 5 })) : N.value === "debug-env" ? (t(), h(xl, { key: 6 })) : N.value === "environments" ? (t(), h(Tl, {
                key: 7,
                onSwitch: De,
                onCreate: Ke,
                onDelete: je,
                onViewDetails: qe
              })) : N.value === "model-index" ? (t(), h(as, { key: 8 })) : N.value === "settings" ? (t(), h(nl, { key: 9 })) : N.value === "debug-workspace" ? (t(), h(_l, { key: 10 })) : N.value === "export" ? (t(), h(jl, { key: 11 })) : N.value === "import" ? (t(), s("div", Mr, [...$[30] || ($[30] = [
                a("h3", { class: "view-title" }, "IMPORT", -1),
                a("p", null, "Import UI coming soon...", -1)
              ])])) : N.value === "remotes" ? (t(), h(Ws, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        E.value ? (t(), h(ur, {
          key: 0,
          commit: E.value,
          onClose: $[16] || ($[16] = (q) => E.value = null),
          onCheckout: Ue,
          onCreateBranch: He
        }, null, 8, ["commit"])) : d("", !0),
        f.value ? (t(), h(hr, {
          key: 1,
          title: f.value.title,
          message: f.value.message,
          details: f.value.details,
          warning: f.value.warning,
          confirmLabel: f.value.confirmLabel,
          cancelLabel: f.value.cancelLabel,
          secondaryLabel: f.value.secondaryLabel,
          secondaryAction: f.value.secondaryAction,
          destructive: f.value.destructive,
          onConfirm: f.value.onConfirm,
          onCancel: $[17] || ($[17] = (q) => f.value = null),
          onSecondary: f.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        M.value ? (t(), s("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: $[19] || ($[19] = ze((q) => M.value = !1, ["self"]))
        }, [
          a("div", Ur, [
            a("div", Dr, [
              $[32] || ($[32] = a("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              a("button", {
                class: "icon-btn",
                onClick: $[18] || ($[18] = (q) => M.value = !1)
              }, [...$[31] || ($[31] = [
                a("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  a("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            a("div", Vr, [
              $[33] || ($[33] = a("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              a("div", Tr, [
                (t(!0), s(P, null, X(H.value, (q) => (t(), s("div", {
                  key: q.name,
                  class: j(["env-item", { current: q.is_current }])
                }, [
                  a("div", Br, [
                    a("div", Or, [
                      a("span", Ar, u(q.is_current ? "●" : "○"), 1),
                      a("span", Wr, u(q.name), 1),
                      q.current_branch ? (t(), s("span", Fr, "(" + u(q.current_branch) + ")", 1)) : d("", !0),
                      q.is_current ? (t(), s("span", Pr, "CURRENT")) : d("", !0)
                    ]),
                    a("div", Gr, u(q.workflow_count) + " workflows • " + u(q.node_count) + " nodes ", 1)
                  ]),
                  q.is_current ? d("", !0) : (t(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Si) => De(q.name)
                  }, " SWITCH ", 8, Hr))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        a("div", Kr, [
          l(_t, { name: "toast" }, {
            default: o(() => [
              (t(!0), s(P, null, X(L.value, (q) => (t(), s("div", {
                key: q.id,
                class: j(["toast", q.type])
              }, [
                a("span", jr, u(z(q.type)), 1),
                a("span", qr, u(q.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Jr = /* @__PURE__ */ A(Yr, [["__scopeId", "data-v-e53f985a"]]), Xr = { class: "base-textarea-wrapper" }, Zr = ["value", "rows", "placeholder", "disabled", "maxlength"], Qr = {
  key: 0,
  class: "base-textarea-count"
}, ei = /* @__PURE__ */ O({
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
    return (c, n) => (t(), s("div", Xr, [
      a("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = ye(ze((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ye(ze((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Zr),
      e.showCharCount && e.maxLength ? (t(), s("div", Qr, u(e.modelValue.length) + " / " + u(e.maxLength), 1)) : d("", !0)
    ]));
  }
}), ti = /* @__PURE__ */ A(ei, [["__scopeId", "data-v-5516e6fc"]]), oi = { class: "commit-popover" }, ai = { class: "popover-header" }, ni = { class: "popover-body" }, si = {
  key: 0,
  class: "changes-summary"
}, li = {
  key: 0,
  class: "change-item"
}, ri = {
  key: 1,
  class: "change-item"
}, ii = {
  key: 2,
  class: "change-item"
}, ci = {
  key: 3,
  class: "change-item"
}, di = {
  key: 4,
  class: "change-item"
}, ui = {
  key: 1,
  class: "no-changes"
}, mi = {
  key: 2,
  class: "loading"
}, vi = { class: "message-section" }, fi = { class: "popover-footer" }, gi = /* @__PURE__ */ O({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: c }) {
    const n = e, r = c, { commit: i } = de(), _ = I(""), y = I(!1), b = I(null), m = T(() => {
      if (!n.status) return !1;
      const x = n.status.workflows;
      return x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || n.status.has_changes;
    });
    async function g() {
      var x, S, V;
      if (!(!m.value || !_.value.trim() || y.value)) {
        y.value = !0, b.value = null;
        try {
          const H = await i(_.value.trim());
          H.status === "success" ? (b.value = {
            type: "success",
            message: `Committed: ${((x = H.summary) == null ? void 0 : x.new) || 0} new, ${((S = H.summary) == null ? void 0 : S.modified) || 0} modified, ${((V = H.summary) == null ? void 0 : V.deleted) || 0} deleted`
          }, _.value = "", setTimeout(() => r("committed"), 1e3)) : H.status === "no_changes" ? b.value = { type: "error", message: "No changes to commit" } : b.value = { type: "error", message: H.message || "Commit failed" };
        } catch (H) {
          b.value = { type: "error", message: H instanceof Error ? H.message : "Commit failed" };
        } finally {
          y.value = !1;
        }
      }
    }
    return (x, S) => (t(), s("div", oi, [
      a("div", ai, [
        S[4] || (S[4] = a("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        a("button", {
          class: "close-btn",
          onClick: S[0] || (S[0] = (V) => r("close"))
        }, [...S[3] || (S[3] = [
          a("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            a("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      a("div", ni, [
        e.status && m.value ? (t(), s("div", si, [
          e.status.workflows.new.length ? (t(), s("div", li, [
            S[5] || (S[5] = a("span", { class: "change-icon new" }, "+", -1)),
            a("span", null, u(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          e.status.workflows.modified.length ? (t(), s("div", ri, [
            S[6] || (S[6] = a("span", { class: "change-icon modified" }, "~", -1)),
            a("span", null, u(e.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          e.status.workflows.deleted.length ? (t(), s("div", ii, [
            S[7] || (S[7] = a("span", { class: "change-icon deleted" }, "-", -1)),
            a("span", null, u(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_added.length ? (t(), s("div", ci, [
            S[8] || (S[8] = a("span", { class: "change-icon new" }, "+", -1)),
            a("span", null, u(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), s("div", di, [
            S[9] || (S[9] = a("span", { class: "change-icon deleted" }, "-", -1)),
            a("span", null, u(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : e.status ? (t(), s("div", ui, " No changes to commit ")) : (t(), s("div", mi, " Loading... ")),
        a("div", vi, [
          l(ti, {
            modelValue: _.value,
            "onUpdate:modelValue": S[1] || (S[1] = (V) => _.value = V),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || y.value,
            rows: 3,
            onCtrlEnter: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        b.value ? (t(), s("div", {
          key: 3,
          class: j(["result", b.value.type])
        }, u(b.value.message), 3)) : d("", !0)
      ]),
      a("div", fi, [
        l(ce, {
          variant: "secondary",
          onClick: S[2] || (S[2] = (V) => r("close"))
        }, {
          default: o(() => [...S[10] || (S[10] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        l(ce, {
          variant: "primary",
          disabled: !m.value || !_.value.trim() || y.value,
          loading: y.value,
          onClick: g
        }, {
          default: o(() => [
            v(u(y.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), hi = /* @__PURE__ */ A(gi, [["__scopeId", "data-v-4f587977"]]), pi = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}<<<<<<< HEAD [data-comfygit-theme="comfy"] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}', yi = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', bi = {
  comfy: pi,
  phosphor: yi
}, at = "comfy", gt = "comfygit-theme";
let Ie = null, ht = at;
function wi() {
  try {
    const e = localStorage.getItem(gt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return at;
}
function pt(e = at) {
  Ie && Ie.remove(), Ie = document.createElement("style"), Ie.id = "comfygit-theme-styles", Ie.setAttribute("data-theme", e), Ie.textContent = bi[e], document.head.appendChild(Ie), document.body.setAttribute("data-comfygit-theme", e), ht = e;
  try {
    localStorage.setItem(gt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function ki() {
  return ht;
}
function _i(e) {
  pt(e);
}
const nt = document.createElement("link");
nt.rel = "stylesheet";
nt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(nt);
const $i = wi();
pt($i);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), _i(e);
  },
  getTheme: () => {
    const e = ki();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ge = null, ue = null, Me = null;
const Le = I(null);
async function et() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const c = await window.app.api.fetchApi("/v2/comfygit/status");
    c.ok && (Le.value = await c.json());
  } catch {
  }
}
function Ci() {
  if (!Le.value) return !1;
  const e = Le.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Le.value.has_changes;
}
function xi() {
  ge && ge.remove(), ge = document.createElement("div"), ge.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", ge.appendChild(e), ge.addEventListener("click", (r) => {
    r.target === ge && Qe();
  });
  const c = (r) => {
    r.key === "Escape" && (Qe(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), ct({
    render: () => dt(Jr, {
      onClose: Qe,
      onStatusUpdate: (r) => {
        Le.value = r, Ae();
      }
    })
  }).mount(e), document.body.appendChild(ge);
}
function Qe() {
  ge && (ge.remove(), ge = null);
}
function Ii(e) {
  Ne(), ue = document.createElement("div"), ue.className = "comfygit-commit-popover-container";
  const c = e.getBoundingClientRect();
  ue.style.position = "fixed", ue.style.top = `${c.bottom + 8}px`, ue.style.right = `${window.innerWidth - c.right}px`, ue.style.zIndex = "10001";
  const n = (i) => {
    ue && !ue.contains(i.target) && i.target !== e && (Ne(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (i) => {
    i.key === "Escape" && (Ne(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Me = ct({
    render: () => dt(hi, {
      status: Le.value,
      onClose: Ne,
      onCommitted: () => {
        Ne(), et().then(Ae);
      }
    })
  }), Me.mount(ue), document.body.appendChild(ue);
}
function Ne() {
  Me && (Me.unmount(), Me = null), ue && (ue.remove(), ue = null);
}
let pe = null;
function Ae() {
  if (!pe) return;
  const e = pe.querySelector(".commit-indicator");
  e && (e.style.display = Ci() ? "block" : "none");
}
const yt = document.createElement("style");
yt.textContent = `
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
document.head.appendChild(yt);
Ye.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var n, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = xi, pe = document.createElement("button"), pe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", pe.innerHTML = 'Commit <span class="commit-indicator"></span>', pe.title = "Quick Commit", pe.onclick = () => Ii(pe), e.appendChild(c), e.appendChild(pe), (r = (n = Ye.menu) == null ? void 0 : n.settingsGroup) != null && r.element && (Ye.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await et(), Ae(), setInterval(async () => {
      await et(), Ae();
    }, 3e4);
  }
});
