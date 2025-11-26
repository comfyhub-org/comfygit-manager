import { app as st } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as de, createBlock as b, resolveDynamicComponent as It, normalizeClass as te, withCtx as a, toDisplayString as l, createVNode as m, createTextVNode as f, computed as N, Fragment as F, renderList as Z, normalizeStyle as tt, ref as L, onMounted as be, watch as Et, Teleport as Le, withModifiers as ke, Transition as no, withKeys as Ge, onUnmounted as ao, reactive as At, readonly as lo, unref as me, resolveComponent as io, createSlots as Vt, TransitionGroup as ro, createApp as zt, h as Mt } from "vue";
const co = { class: "panel-layout" }, uo = {
  key: 0,
  class: "panel-layout-header"
}, mo = {
  key: 1,
  class: "panel-layout-search"
}, vo = { class: "panel-layout-content" }, fo = {
  key: 2,
  class: "panel-layout-footer"
}, go = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (d, s) => (o(), n("div", co, [
      d.$slots.header ? (o(), n("div", uo, [
        de(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), n("div", mo, [
        de(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", vo, [
        de(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", fo, [
        de(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), J = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [r, g] of d)
    s[r] = g;
  return s;
}, Ce = /* @__PURE__ */ J(go, [["__scopeId", "data-v-21565df9"]]), ho = {
  key: 0,
  class: "panel-title-prefix"
}, po = {
  key: 1,
  class: "panel-title-prefix-theme"
}, yo = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, s) => (o(), b(It(`h${t.level}`), {
      class: te(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", ho, l(t.prefix), 1)) : (o(), n("span", po)),
        de(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wo = /* @__PURE__ */ J(yo, [["__scopeId", "data-v-c3875efc"]]), ko = ["title"], bo = ["width", "height"], _o = /* @__PURE__ */ q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (r) => d.$emit("click"))
    }, [
      (o(), n("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
        e("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        e("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, bo))
    ], 8, ko));
  }
}), Ft = /* @__PURE__ */ J(_o, [["__scopeId", "data-v-6fc7f16d"]]), $o = { class: "header-left" }, Co = {
  key: 0,
  class: "header-actions"
}, xo = /* @__PURE__ */ q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: te(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", $o, [
        m(wo, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            f(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), b(Ft, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", Co, [
        de(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ J(xo, [["__scopeId", "data-v-55a62cd6"]]), So = {
  key: 0,
  class: "section-title-count"
}, Io = {
  key: 1,
  class: "section-title-icon"
}, Eo = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), b(It(`h${t.level}`), {
      class: te(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (r) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        de(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", So, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", Io, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ J(Eo, [["__scopeId", "data-v-559361eb"]]), zo = { class: "status-grid" }, Mo = { class: "status-grid__column" }, Lo = { class: "status-grid__title" }, To = { class: "status-grid__column status-grid__column--right" }, Ro = { class: "status-grid__title" }, Do = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", zo, [
      e("div", Mo, [
        e("h4", Lo, l(t.leftTitle), 1),
        de(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", To, [
        e("h4", Ro, l(t.rightTitle), 1),
        de(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), No = /* @__PURE__ */ J(Do, [["__scopeId", "data-v-fe556068"]]), Uo = {
  key: 0,
  class: "status-item__icon"
}, Oo = {
  key: 1,
  class: "status-item__count"
}, Bo = { class: "status-item__label" }, Po = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, s = N(() => `status-item--${d.variant}`);
    return (r, g) => (o(), n("div", {
      class: te(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", Uo, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Oo, l(t.count), 1)) : c("", !0),
      e("span", Bo, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ J(Po, [["__scopeId", "data-v-6f929183"]]), Ao = { class: "issue-card__header" }, Vo = { class: "issue-card__icon" }, Fo = { class: "issue-card__title" }, Wo = {
  key: 0,
  class: "issue-card__content"
}, Go = {
  key: 0,
  class: "issue-card__description"
}, jo = {
  key: 1,
  class: "issue-card__items"
}, Ho = {
  key: 2,
  class: "issue-card__actions"
}, Ko = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, s = N(() => `issue-card--${d.severity}`);
    return (r, g) => (o(), n("div", {
      class: te(["issue-card", s.value])
    }, [
      e("div", Ao, [
        e("span", Vo, l(t.icon), 1),
        e("h4", Fo, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), n("div", Wo, [
        t.description ? (o(), n("p", Go, l(t.description), 1)) : c("", !0),
        de(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", jo, [
        (o(!0), n(F, null, Z(t.items, (y, p) => (o(), n("div", {
          key: p,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), n("div", Ho, [
        de(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ J(Ko, [["__scopeId", "data-v-df6aa348"]]), qo = ["type", "disabled"], Jo = {
  key: 0,
  class: "spinner"
}, Yo = /* @__PURE__ */ q({
  __name: "ActionButton",
  props: {
    variant: { default: "primary" },
    size: { default: "sm" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: te(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), n("span", Jo)) : c("", !0),
      t.loading ? c("", !0) : de(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, qo));
  }
}), G = /* @__PURE__ */ J(Yo, [["__scopeId", "data-v-772abe47"]]), Xo = { class: "empty-state" }, Qo = {
  key: 0,
  class: "empty-icon"
}, Zo = { class: "empty-message" }, es = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, s) => (o(), n("div", Xo, [
      t.icon ? (o(), n("div", Qo, l(t.icon), 1)) : c("", !0),
      e("p", Zo, l(t.message), 1),
      t.actionLabel ? (o(), b(G, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => d.$emit("action"))
      }, {
        default: a(() => [
          f(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ J(es, [["__scopeId", "data-v-4466284f"]]), ts = { class: "branch-indicator" }, os = { class: "branch-indicator__info" }, ss = { class: "branch-indicator__label" }, ns = { class: "branch-indicator__name" }, as = {
  key: 0,
  class: "branch-indicator__remote"
}, ls = {
  key: 0,
  class: "branch-indicator__status"
}, is = {
  key: 0,
  class: "branch-indicator__ahead"
}, rs = {
  key: 1,
  class: "branch-indicator__behind"
}, ds = {
  key: 1,
  class: "branch-indicator__actions"
}, cs = /* @__PURE__ */ q({
  __name: "BranchIndicator",
  props: {
    label: { default: "Current Branch" },
    branchName: {},
    remote: {},
    commitsAhead: {},
    commitsBehind: {},
    showStatus: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", ts, [
      e("div", os, [
        e("span", ss, l(t.label), 1),
        e("span", ns, l(t.branchName), 1),
        t.remote ? (o(), n("span", as, "@" + l(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", ls, [
        t.commitsAhead ? (o(), n("span", is, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), n("span", rs, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      d.$slots.actions ? (o(), n("div", ds, [
        de(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), us = /* @__PURE__ */ J(cs, [["__scopeId", "data-v-cb8dd50e"]]), ms = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: te(["detail-label"]),
      style: tt({ minWidth: t.minWidth })
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ J(ms, [["__scopeId", "data-v-75e9eeb8"]]), vs = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: te(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ J(vs, [["__scopeId", "data-v-2f186e4c"]]), fs = { class: "detail-row" }, gs = /* @__PURE__ */ q({
  __name: "DetailRow",
  props: {
    label: {},
    value: {},
    mono: { type: Boolean, default: !1 },
    valueVariant: { default: "default" },
    truncate: { type: Boolean, default: !1 },
    labelMinWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", fs, [
      m(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          f(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), b(St, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          f(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : de(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ie = /* @__PURE__ */ J(gs, [["__scopeId", "data-v-ef15664a"]]), hs = { class: "modal-header" }, ps = { class: "modal-body" }, ys = { class: "status-section" }, ws = {
  key: 0,
  class: "status-section"
}, ks = { class: "section-header-row" }, bs = {
  key: 0,
  class: "workflow-group"
}, _s = { class: "workflow-group-header" }, $s = { class: "workflow-group-title" }, Cs = { class: "workflow-list" }, xs = { class: "workflow-name" }, Ss = { class: "workflow-issue" }, Is = {
  key: 1,
  class: "workflow-group"
}, Es = { class: "workflow-group-header" }, zs = { class: "workflow-group-title" }, Ms = { class: "workflow-list" }, Ls = { class: "workflow-name" }, Ts = { class: "workflow-issue" }, Rs = {
  key: 2,
  class: "workflow-group"
}, Ds = { class: "workflow-group-header" }, Ns = { class: "workflow-group-title" }, Us = { class: "workflow-list" }, Os = { class: "workflow-name" }, Bs = {
  key: 3,
  class: "workflow-group"
}, Ps = { class: "workflow-group-header" }, As = { class: "workflow-group-title" }, Vs = { class: "workflow-list" }, Fs = { class: "workflow-name" }, Ws = {
  key: 4,
  class: "workflow-group"
}, Gs = { class: "workflow-group-header" }, js = { class: "workflow-group-title" }, Hs = { class: "workflow-list" }, Ks = { class: "workflow-name" }, qs = {
  key: 5,
  class: "workflow-group"
}, Js = { class: "workflow-group-title" }, Ys = { class: "expand-icon" }, Xs = {
  key: 0,
  class: "workflow-list"
}, Qs = { class: "workflow-name" }, Zs = {
  key: 1,
  class: "status-section"
}, en = {
  key: 0,
  class: "change-group"
}, tn = { class: "change-group-header" }, on = { class: "change-group-title" }, sn = { class: "change-list" }, nn = { class: "node-name" }, an = {
  key: 0,
  class: "dev-badge"
}, ln = {
  key: 1,
  class: "change-group"
}, rn = { class: "change-group-header" }, dn = { class: "change-group-title" }, cn = { class: "change-list" }, un = { class: "node-name" }, mn = {
  key: 0,
  class: "dev-badge"
}, vn = {
  key: 2,
  class: "change-group"
}, fn = { class: "change-list" }, gn = { class: "change-item" }, hn = { class: "node-name" }, pn = {
  key: 3,
  class: "change-group"
}, yn = {
  key: 2,
  class: "status-section"
}, wn = { class: "section-header-row" }, kn = {
  key: 0,
  class: "drift-item"
}, bn = { class: "drift-list" }, _n = {
  key: 0,
  class: "drift-list-more"
}, $n = {
  key: 1,
  class: "drift-item"
}, Cn = { class: "drift-list" }, xn = {
  key: 0,
  class: "drift-list-more"
}, Sn = {
  key: 2,
  class: "drift-item"
}, In = {
  key: 3,
  class: "drift-item"
}, En = {
  key: 3,
  class: "status-section"
}, zn = { class: "info-box" }, Mn = { class: "drift-list" }, Ln = {
  key: 0,
  class: "drift-list-more"
}, Tn = {
  key: 4,
  class: "status-section"
}, Rn = { class: "warning-box" }, Dn = {
  key: 5,
  class: "empty-state-inline"
}, Nn = { class: "modal-actions" }, Un = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const d = t, s = L(!1);
    be(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (T, M) => {
      console.log("StatusDetailModal show prop changed from", M, "to", T);
    }, { immediate: !0 });
    const r = N(() => {
      var T, M, _;
      return ((_ = (M = (T = d.status) == null ? void 0 : T.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : _.filter(
        (E) => E.status === "broken" && E.sync_state === "synced"
      )) || [];
    }), g = N(() => {
      var T, M, _;
      return ((_ = (M = (T = d.status) == null ? void 0 : T.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : _.filter(
        (E) => E.status === "broken" && E.sync_state !== "synced"
      )) || [];
    }), y = N(() => {
      var T, M, _;
      return ((_ = (M = (T = d.status) == null ? void 0 : T.workflows) == null ? void 0 : M.synced) == null ? void 0 : _.filter((E) => {
        var C, P, O;
        const k = (O = (P = (C = d.status) == null ? void 0 : C.workflows) == null ? void 0 : P.analyzed) == null ? void 0 : O.find((D) => D.name === E);
        return !k || k.status !== "broken";
      })) || [];
    }), p = N(() => {
      var T, M, _, E, k;
      return (T = d.status) != null && T.workflows ? (((M = d.status.workflows.new) == null ? void 0 : M.length) ?? 0) > 0 || (((_ = d.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((E = d.status.workflows.deleted) == null ? void 0 : E.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), v = N(() => {
      var M, _, E;
      const T = (M = d.status) == null ? void 0 : M.git_changes;
      return T ? (((_ = T.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((E = T.nodes_removed) == null ? void 0 : E.length) ?? 0) > 0 || T.workflow_changes || T.has_other_changes : !1;
    }), i = N(() => {
      var T, M, _, E, k, C;
      return !p.value && !v.value && ((M = (T = d.status) == null ? void 0 : T.comparison) == null ? void 0 : M.is_synced) && (((_ = d.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((C = (k = (E = d.status) == null ? void 0 : E.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), u = N(() => {
      var M, _;
      const T = (_ = (M = d.status) == null ? void 0 : M.git_changes) == null ? void 0 : _.workflow_changes;
      return T ? typeof T == "number" ? T : Object.keys(T).length : 0;
    });
    function w(T) {
      return typeof T == "string" ? T : T.name;
    }
    function h(T) {
      return typeof T == "object" && T.is_development === !0;
    }
    return (T, M) => {
      var _, E, k, C, P, O, D, K, I, x, z, S, $, U, A, ee, V, H, X, ne, se, _e;
      return o(), b(Le, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[6] || (M[6] = (Q) => T.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: M[5] || (M[5] = ke(() => {
            }, ["stop"]))
          }, [
            e("div", hs, [
              M[7] || (M[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[0] || (M[0] = (Q) => T.$emit("close"))
              }, "✕")
            ]),
            e("div", ps, [
              e("div", ys, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...M[8] || (M[8] = [
                    f("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                m(ie, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              p.value ? (o(), n("div", ws, [
                e("div", ks, [
                  m(Ee, { level: "4" }, {
                    default: a(() => [...M[9] || (M[9] = [
                      f("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: M[1] || (M[1] = (Q) => T.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), n("div", bs, [
                  e("div", _s, [
                    M[10] || (M[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", $s, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", Cs, [
                    (o(!0), n(F, null, Z(r.value, (Q) => (o(), n("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", xs, l(Q.name), 1),
                      e("span", Ss, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), n("div", Is, [
                  e("div", Es, [
                    M[11] || (M[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", zs, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), n(F, null, Z(g.value, (Q) => (o(), n("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ls, l(Q.name), 1),
                      e("span", Ts, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (E = (_ = t.status.workflows) == null ? void 0 : _.new) != null && E.length ? (o(), n("div", Rs, [
                  e("div", Ds, [
                    M[12] || (M[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ns, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Us, [
                    (o(!0), n(F, null, Z(t.status.workflows.new, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Os, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (k = t.status.workflows) == null ? void 0 : k.modified) != null && C.length ? (o(), n("div", Bs, [
                  e("div", Ps, [
                    M[13] || (M[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", As, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Vs, [
                    (o(!0), n(F, null, Z(t.status.workflows.modified, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Fs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (O = (P = t.status.workflows) == null ? void 0 : P.deleted) != null && O.length ? (o(), n("div", Ws, [
                  e("div", Gs, [
                    M[14] || (M[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", js, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), n(F, null, Z(t.status.workflows.deleted, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ks, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), n("div", qs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: M[2] || (M[2] = (Q) => s.value = !s.value)
                  }, [
                    M[15] || (M[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Js, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Ys, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Xs, [
                    (o(!0), n(F, null, Z(y.value, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Qs, l(Q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              v.value ? (o(), n("div", Zs, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...M[16] || (M[16] = [
                    f("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (D = t.status.git_changes) == null ? void 0 : D.nodes_added) != null && K.length ? (o(), n("div", en, [
                  e("div", tn, [
                    M[17] || (M[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", on, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", sn, [
                    (o(!0), n(F, null, Z(t.status.git_changes.nodes_added, (Q) => (o(), n("div", {
                      key: w(Q),
                      class: "change-item"
                    }, [
                      e("span", nn, l(w(Q)), 1),
                      h(Q) ? (o(), n("span", an, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (x = (I = t.status.git_changes) == null ? void 0 : I.nodes_removed) != null && x.length ? (o(), n("div", ln, [
                  e("div", rn, [
                    M[18] || (M[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", dn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", cn, [
                    (o(!0), n(F, null, Z(t.status.git_changes.nodes_removed, (Q) => (o(), n("div", {
                      key: w(Q),
                      class: "change-item"
                    }, [
                      e("span", un, l(w(Q)), 1),
                      h(Q) ? (o(), n("span", mn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (z = t.status.git_changes) != null && z.workflow_changes ? (o(), n("div", vn, [
                  M[19] || (M[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", fn, [
                    e("div", gn, [
                      e("span", hn, l(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (S = t.status.git_changes) != null && S.has_other_changes ? (o(), n("div", pn, [...M[20] || (M[20] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : c("", !0)
              ])) : c("", !0),
              ($ = t.status.comparison) != null && $.is_synced ? c("", !0) : (o(), n("div", yn, [
                e("div", wn, [
                  m(Ee, { level: "4" }, {
                    default: a(() => [...M[21] || (M[21] = [
                      f("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: M[3] || (M[3] = (Q) => T.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                M[22] || (M[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (A = (U = t.status.comparison) == null ? void 0 : U.missing_nodes) != null && A.length ? (o(), n("div", kn, [
                  m(ie, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", bn, [
                    (o(!0), n(F, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (o(), n("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", _n, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (V = (ee = t.status.comparison) == null ? void 0 : ee.extra_nodes) != null && V.length ? (o(), n("div", $n, [
                  m(ie, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Cn, [
                    (o(!0), n(F, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (o(), n("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", xn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (X = (H = t.status.comparison) == null ? void 0 : H.version_mismatches) != null && X.length ? (o(), n("div", Sn, [
                  m(ie, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (ne = t.status.comparison) != null && ne.packages_in_sync ? c("", !0) : (o(), n("div", In, [
                  m(ie, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (_e = (se = t.status.comparison) == null ? void 0 : se.disabled_nodes) != null && _e.length ? (o(), n("div", En, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...M[23] || (M[23] = [
                    f("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", zn, [
                  M[24] || (M[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Mn, [
                  (o(!0), n(F, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (o(), n("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + l(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", Ln, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Tn, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...M[25] || (M[25] = [
                    f("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Rn, [
                  M[26] || (M[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                M[27] || (M[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              i.value ? (o(), n("div", Dn, [...M[28] || (M[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Nn, [
              m(G, {
                variant: "secondary",
                onClick: M[4] || (M[4] = (Q) => T.$emit("close"))
              }, {
                default: a(() => [...M[29] || (M[29] = [
                  f(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Nt = /* @__PURE__ */ J(Un, [["__scopeId", "data-v-c67eed17"]]), On = { class: "health-section-header" }, Bn = { style: { "margin-top": "var(--cg-space-1)" } }, Pn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, An = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch", "view-nodes"],
  setup(t, { emit: d }) {
    const s = t, r = L(!1), g = L(!1);
    be(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function p() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function v() {
      r.value = !1, u("view-workflows");
    }
    function i() {
      r.value = !1, u("view-nodes");
    }
    const u = d, w = N(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), h = N(() => {
      const I = s.status.git_changes;
      return I.nodes_added.length > 0 || I.nodes_removed.length > 0 || I.workflow_changes || I.has_other_changes;
    }), T = N(() => w.value || h.value), M = N(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), _ = N(() => s.status.git_changes.has_other_changes), E = N(() => {
      var I;
      return ((I = s.status.workflows.analyzed) == null ? void 0 : I.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), k = N(() => {
      var I;
      return ((I = s.status.workflows.analyzed) == null ? void 0 : I.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), C = N(() => E.value.length > 0 || k.value.length > 0), P = N(() => C.value || s.status.missing_models_count > 0 || T.value || !s.status.comparison.is_synced), O = N(() => {
      const I = [];
      return s.status.workflows.new.length > 0 && I.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && I.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && I.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && I.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && I.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${I.length > 0 ? I.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    }), D = N(() => {
      var z, S;
      const I = [], x = s.status.comparison;
      return (z = x.missing_nodes) != null && z.length && I.push(`${x.missing_nodes.length} missing node${x.missing_nodes.length === 1 ? "" : "s"}`), (S = x.extra_nodes) != null && S.length && I.push(`${x.extra_nodes.length} untracked node${x.extra_nodes.length === 1 ? "" : "s"}`), I.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${I.join(" and ")}.`;
    }), K = N(() => {
      var z, S;
      const I = [], x = s.status.comparison;
      return (z = x.extra_nodes) != null && z.length && (x.extra_nodes.slice(0, 3).forEach(($) => {
        I.push(`Untracked: ${$}`);
      }), x.extra_nodes.length > 3 && I.push(`...and ${x.extra_nodes.length - 3} more untracked`)), (S = x.missing_nodes) != null && S.length && (x.missing_nodes.slice(0, 3).forEach(($) => {
        I.push(`Missing: ${$}`);
      }), x.missing_nodes.length > 3 && I.push(`...and ${x.missing_nodes.length - 3} more missing`)), I;
    });
    return (I, x) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: x[0] || (x[0] = (z) => g.value = !0),
            onMouseleave: x[1] || (x[1] = (z) => g.value = !1)
          }, [
            e("div", On, [
              m(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...x[10] || (x[10] = [
                  f(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              m(no, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), b(G, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...x[11] || (x[11] = [
                      f(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            m(No, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), b(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), b(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), b(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                m(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: w.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), b(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), b(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), b(Ve, {
                  key: 2,
                  icon: "●",
                  count: M.value,
                  label: M.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                _.value ? (o(), b(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                h.value ? c("", !0) : (o(), b(Ve, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", Bn, [
            m(us, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                m(G, {
                  variant: "secondary",
                  size: "sm",
                  onClick: x[2] || (x[2] = (z) => I.$emit("switch-branch"))
                }, {
                  default: a(() => [...x[12] || (x[12] = [
                    f(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), b(Ze, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: x[3] || (x[3] = (z) => I.$emit("create-branch"))
              }, {
                default: a(() => [...x[13] || (x[13] = [
                  f(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          P.value ? (o(), n("div", Pn, [
            m(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...x[14] || (x[14] = [
                f(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            E.value.length > 0 ? (o(), b(Ze, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${E.value.length} committed workflow${E.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: E.value.map((z) => `${z.name} — ${z.issue_summary}`)
            }, {
              actions: a(() => [
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[4] || (x[4] = (z) => I.$emit("view-workflows"))
                }, {
                  default: a(() => [...x[15] || (x[15] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            k.value.length > 0 ? (o(), b(Ze, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: k.value.map((z) => `${z.name} — ${z.issue_summary}`)
            }, {
              actions: a(() => [
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[5] || (x[5] = (z) => I.$emit("view-workflows"))
                }, {
                  default: a(() => [...x[16] || (x[16] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !C.value ? (o(), b(Ze, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[6] || (x[6] = (z) => I.$emit("view-workflows"))
                }, {
                  default: a(() => [...x[17] || (x[17] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            T.value ? (o(), b(Ze, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: O.value
            }, {
              actions: a(() => [
                m(G, {
                  variant: "secondary",
                  size: "sm",
                  onClick: p
                }, {
                  default: a(() => [...x[18] || (x[18] = [
                    f(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[7] || (x[7] = (z) => I.$emit("commit-changes"))
                }, {
                  default: a(() => [...x[19] || (x[19] = [
                    f(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), b(Ze, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: D.value,
              items: K.value
            }, {
              actions: a(() => [
                m(G, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: a(() => [...x[20] || (x[20] = [
                    f(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[8] || (x[8] = (z) => I.$emit("view-nodes"))
                }, {
                  default: a(() => [...x[21] || (x[21] = [
                    f(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !P.value && !h.value ? (o(), b(Oe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      m(Nt, {
        show: r.value,
        status: t.status,
        onClose: x[9] || (x[9] = (z) => r.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: i
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Vn = /* @__PURE__ */ J(An, [["__scopeId", "data-v-d1cf48a7"]]), Fn = ["type", "value", "placeholder", "disabled"], Wn = /* @__PURE__ */ q({
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
  setup(t, { expose: d, emit: s }) {
    const r = t, g = s, y = L(null);
    function p(v) {
      const i = v.target.value;
      g("update:modelValue", i);
    }
    return be(() => {
      r.autoFocus && y.value && y.value.focus();
    }), d({
      focus: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.blur();
      }
    }), (v, i) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: te(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: p,
      onKeyup: [
        i[0] || (i[0] = Ge((u) => v.$emit("enter"), ["enter"])),
        i[1] || (i[1] = Ge((u) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (u) => v.$emit("focus")),
      onBlur: i[3] || (i[3] = (u) => v.$emit("blur"))
    }, null, 42, Fn));
  }
}), gt = /* @__PURE__ */ J(Wn, [["__scopeId", "data-v-0380d08f"]]), Gn = { class: "branch-create-form" }, jn = { class: "form-actions" }, Hn = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, r = L(""), g = N(() => {
      const v = r.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function y() {
      g.value && (s("create", r.value.trim()), r.value = "");
    }
    function p() {
      r.value = "", s("cancel");
    }
    return (v, i) => (o(), n("div", Gn, [
      m(gt, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: p
      }, null, 8, ["modelValue"]),
      e("div", jn, [
        m(G, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: a(() => [...i[1] || (i[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        m(G, {
          variant: "secondary",
          size: "sm",
          onClick: p
        }, {
          default: a(() => [...i[2] || (i[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Kn = /* @__PURE__ */ J(Hn, [["__scopeId", "data-v-7c500394"]]), qn = { class: "branch-list-item__indicator" }, Jn = { class: "branch-list-item__name" }, Yn = {
  key: 0,
  class: "branch-list-item__actions"
}, Xn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Qn = /* @__PURE__ */ q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: te(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (r) => t.clickable && d.$emit("click"))
    }, [
      e("span", qn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Jn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", Yn, [
        de(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Xn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ J(Qn, [["__scopeId", "data-v-c6581a24"]]), ea = {
  key: 2,
  class: "branch-list"
}, ta = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, r = L(!1);
    function g(p) {
      s("create", p), y();
    }
    function y() {
      r.value = !1;
    }
    return (p, v) => (o(), b(Ce, null, {
      header: a(() => [
        m(xe, { title: "BRANCHES" }, {
          actions: a(() => [
            m(G, {
              variant: "ghost",
              size: "sm",
              onClick: v[0] || (v[0] = (i) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...v[1] || (v[1] = [
                e("svg", {
                  width: "14",
                  height: "14",
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
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (o(), b(Kn, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), b(Oe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", ea, [
          (o(!0), n(F, null, Z(t.branches, (i) => (o(), b(Zn, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: a(() => [
              i.is_current ? c("", !0) : (o(), b(G, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (u) => p.$emit("switch", i.name)
              }, {
                default: a(() => [...v[2] || (v[2] = [
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
}), oa = /* @__PURE__ */ J(ta, [["__scopeId", "data-v-763d6ec4"]]), sa = { class: "commit-list" }, na = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", sa, [
      de(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), aa = /* @__PURE__ */ J(na, [["__scopeId", "data-v-8c5ee761"]]), la = { class: "commit-hash" }, ia = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = N(() => d.hash.slice(0, d.length));
    return (r, g) => (o(), n("span", la, l(s.value), 1));
  }
}), Wt = /* @__PURE__ */ J(ia, [["__scopeId", "data-v-7c333cc6"]]), ra = { class: "commit-message" }, da = { class: "commit-date" }, ca = /* @__PURE__ */ q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, r = d;
    function g() {
      s.clickable && r("click");
    }
    return (y, p) => (o(), n("div", {
      class: te(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      m(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ra, l(t.message), 1),
      e("span", da, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = ke(() => {
        }, ["stop"]))
      }, [
        de(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ua = /* @__PURE__ */ J(ca, [["__scopeId", "data-v-dd7c621b"]]), ma = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), b(Ce, null, {
      header: a(() => [
        m(xe, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), b(Oe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), b(aa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(F, null, Z(t.commits, (r) => (o(), b(ua, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => d.$emit("select", r)
            }, {
              actions: a(() => [
                m(G, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => d.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
                    e("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
}), va = /* @__PURE__ */ J(ma, [["__scopeId", "data-v-981c3c64"]]), Qh = [
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
  ...Array(12).fill(null).map((t, d) => ({
    name: `synced-workflow-${d + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + d,
    model_count: 1 + d % 3,
    sync_state: "synced"
  }))
], Zh = {
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
}, fa = [
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
], ep = [
  ...fa,
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
];
function yt() {
  return !1;
}
function Se() {
  const t = L(!1), d = L(null);
  async function s(Y, ae) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const ue = await window.app.api.fetchApi(Y, ae);
    if (!ue.ok) {
      const Je = await ue.json().catch(() => ({}));
      throw new Error(Je.error || Je.message || `Request failed: ${ue.status}`);
    }
    return ue.json();
  }
  async function r(Y = !1) {
    return s(Y ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(Y, ae = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: ae })
    });
  }
  async function y(Y = 10, ae = 0) {
    return s(`/v2/comfygit/log?limit=${Y}&offset=${ae}`);
  }
  async function p(Y) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function v() {
    return s("/v2/comfygit/branches");
  }
  async function i(Y) {
    return s(`/v2/comfygit/commit/${Y}`);
  }
  async function u(Y, ae = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: ae })
    });
  }
  async function w(Y, ae = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: ae })
    });
  }
  async function h(Y, ae = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: ae })
    });
  }
  async function T() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Y = await r();
        return [{
          name: Y.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + Y.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: Y.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: Y.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function M(Y) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: Y })
    });
  }
  async function _() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(Y, ae, ue) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, pytorch_backend: ae, clone_from: ue })
    });
  }
  async function k(Y) {
    return s(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function C(Y = !1) {
    try {
      return s(Y ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ae = await r(Y), ue = [];
      return ae.workflows.new.forEach(($e) => {
        ue.push({ name: $e, status: "new", missing_nodes: 0, missing_models: 0, path: $e });
      }), ae.workflows.modified.forEach(($e) => {
        ue.push({ name: $e, status: "modified", missing_nodes: 0, missing_models: 0, path: $e });
      }), ae.workflows.synced.forEach(($e) => {
        ue.push({ name: $e, status: "synced", missing_nodes: 0, missing_models: 0, path: $e });
      }), ue;
    }
  }
  async function P(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/details`);
  }
  async function O(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function D(Y, ae, ue) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ae, install_models: ue })
    });
  }
  async function K(Y, ae, ue) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ae, importance: ue })
    });
  }
  async function I() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function x() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function z(Y, ae) {
    return s(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ae })
    });
  }
  async function S(Y) {
    return s(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function $(Y) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function U() {
    try {
      return s("/v2/comfygit/config");
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0
      };
    }
  }
  async function A(Y) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function ee(Y, ae) {
    try {
      const ue = new URLSearchParams();
      return Y && ue.append("level", Y), ae && ue.append("lines", ae.toString()), s(`/v2/comfygit/debug/logs?${ue}`);
    } catch {
      return [];
    }
  }
  async function V(Y, ae) {
    try {
      const ue = new URLSearchParams();
      return Y && ue.append("level", Y), ae && ue.append("lines", ae.toString()), s(`/v2/workspace/debug/logs?${ue}`);
    } catch {
      return [];
    }
  }
  async function H() {
    try {
      return s("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0,
        untracked_count: 0
      };
    }
  }
  async function X(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/track-dev`, {
      method: "POST"
    });
  }
  async function ne(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function se(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function _e(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function Q() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Te(Y, ae) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: ae })
    });
  }
  async function he(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function Re(Y, ae, ue) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ae, push_url: ue })
    });
  }
  async function it(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST"
    });
  }
  async function ge(Y) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function ze(Y = "skip", ae = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: ae
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: r,
    commit: g,
    getHistory: y,
    exportEnv: p,
    // Git Operations
    getBranches: v,
    getCommitDetail: i,
    checkout: u,
    createBranch: w,
    switchBranch: h,
    // Environment Management
    getEnvironments: T,
    switchEnvironment: M,
    getSwitchProgress: _,
    createEnvironment: E,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: C,
    getWorkflowDetails: P,
    resolveWorkflow: O,
    installWorkflowDeps: D,
    setModelImportance: K,
    // Model Management
    getEnvironmentModels: I,
    getWorkspaceModels: x,
    updateModelSource: z,
    deleteModel: S,
    downloadModel: $,
    // Settings
    getConfig: U,
    updateConfig: A,
    // Debug/Logs
    getEnvironmentLogs: ee,
    getWorkspaceLogs: V,
    // Node Management
    getNodes: H,
    trackNodeAsDev: X,
    installNode: ne,
    updateNode: se,
    uninstallNode: _e,
    // Git Remotes
    getRemotes: Q,
    addRemote: Te,
    removeRemote: he,
    updateRemoteUrl: Re,
    fetchRemote: it,
    getRemoteSyncStatus: ge,
    // Environment Sync
    syncEnvironmentManually: ze
  };
}
const ga = { class: "base-modal-header" }, ha = {
  key: 0,
  class: "base-modal-title"
}, pa = { class: "base-modal-body" }, ya = {
  key: 0,
  class: "base-modal-loading"
}, wa = {
  key: 1,
  class: "base-modal-error"
}, ka = {
  key: 0,
  class: "base-modal-footer"
}, ba = /* @__PURE__ */ q({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {},
    fixedHeight: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const s = t, r = d;
    function g() {
      s.closeOnOverlayClick && r("close");
    }
    function y(p) {
      p.key === "Escape" && r("close");
    }
    return be(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), ao(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (p, v) => (o(), b(Le, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: te(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", ga, [
            de(p.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", ha, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (i) => p.$emit("close"))
            }, [...v[2] || (v[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : c("", !0)
          ]),
          e("div", pa, [
            t.loading ? (o(), n("div", ya, "Loading...")) : t.error ? (o(), n("div", wa, l(t.error), 1)) : de(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (o(), n("div", ka, [
            de(p.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), ht = /* @__PURE__ */ J(ba, [["__scopeId", "data-v-2125a0e6"]]), _a = ["type", "disabled"], $a = {
  key: 0,
  class: "spinner"
}, Ca = /* @__PURE__ */ q({
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
  setup(t) {
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: te(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), n("span", $a)) : c("", !0),
      de(d.$slots, "default", {}, void 0, !0)
    ], 10, _a));
  }
}), re = /* @__PURE__ */ J(Ca, [["__scopeId", "data-v-f3452606"]]), xa = {
  key: 0,
  class: "base-title-count"
}, Sa = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), b(It(`h${t.level}`), {
      class: te(["base-title", t.variant])
    }, {
      default: a(() => [
        de(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", xa, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), mt = /* @__PURE__ */ J(Sa, [["__scopeId", "data-v-5a01561d"]]), Ia = ["value", "disabled"], Ea = {
  key: 0,
  value: "",
  disabled: ""
}, za = ["value"], Ma = {
  key: 0,
  class: "base-select-error"
}, La = /* @__PURE__ */ q({
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
  setup(t) {
    function d(r) {
      return typeof r == "string" ? r : r.value;
    }
    function s(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, g) => (o(), n("div", {
      class: te(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: te(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Ea, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(F, null, Z(t.options, (y) => (o(), n("option", {
          key: d(y),
          value: d(y)
        }, l(s(y)), 9, za))), 128))
      ], 42, Ia),
      t.error ? (o(), n("span", Ma, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ta = /* @__PURE__ */ J(La, [["__scopeId", "data-v-7436d745"]]), Ra = { class: "popover-header" }, Da = { class: "popover-title" }, Na = { class: "popover-content" }, Ua = {
  key: 0,
  class: "popover-actions"
}, Oa = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), b(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: tt({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Ra, [
            e("h4", Da, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Na, [
            de(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Ua, [
            de(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), je = /* @__PURE__ */ J(Oa, [["__scopeId", "data-v-42815ace"]]), Ba = { class: "detail-section" }, Pa = {
  key: 0,
  class: "empty-message"
}, Aa = { class: "model-header" }, Va = { class: "model-name" }, Fa = { class: "model-details" }, Wa = { class: "model-row" }, Ga = { class: "model-row" }, ja = { class: "label" }, Ha = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ka = { class: "node-list" }, qa = ["onClick"], Ja = {
  key: 1,
  class: "model-row"
}, Ya = { class: "value" }, Xa = {
  key: 0,
  class: "model-actions"
}, Qa = { class: "detail-section" }, Za = {
  key: 0,
  class: "empty-message"
}, el = { class: "node-name" }, tl = {
  key: 0,
  class: "node-version"
}, ol = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const s = t, r = d, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: p } = Se(), v = L(null), i = L(!1), u = L(null), w = L(!1), h = L({}), T = L({}), M = L(!1), _ = L(/* @__PURE__ */ new Set()), E = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(S) {
      switch (S) {
        case "available":
          return "success";
        case "path_mismatch":
          return "warning";
        case "downloadable":
          return "info";
        case "missing":
        default:
          return "error";
      }
    }
    function C(S) {
      switch (S) {
        case "available":
          return "✓ Available";
        case "path_mismatch":
          return "⚠ Path Mismatch";
        case "downloadable":
          return "⬇ Downloadable";
        case "missing":
        default:
          return "✗ Missing";
      }
    }
    function P(S) {
      if (!S.loaded_by || S.loaded_by.length === 0) return [];
      const $ = S.hash || S.filename;
      return _.value.has($) ? S.loaded_by : S.loaded_by.slice(0, 3);
    }
    function O(S) {
      return _.value.has(S);
    }
    function D(S) {
      _.value.has(S) ? _.value.delete(S) : _.value.add(S), _.value = new Set(_.value);
    }
    async function K() {
      i.value = !0, u.value = null;
      try {
        v.value = await g(s.workflowName);
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function I(S, $) {
      h.value[S] = $, w.value = !0;
    }
    async function x() {
      if (!w.value) {
        r("close");
        return;
      }
      i.value = !0, u.value = null;
      try {
        for (const [S, $] of Object.entries(h.value))
          await y(s.workflowName, S, $);
        r("refresh"), r("close");
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function z(S) {
      T.value[S] = !0, u.value = null;
      try {
        await p(s.workflowName, !0, !1), await K();
      } catch ($) {
        u.value = $ instanceof Error ? $.message : "Failed to install node";
      } finally {
        T.value[S] = !1;
      }
    }
    return be(K), (S, $) => (o(), n(F, null, [
      m(ht, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: u.value || void 0,
        onClose: $[5] || ($[5] = (U) => r("close"))
      }, {
        body: a(() => [
          v.value ? (o(), n(F, { key: 0 }, [
            e("section", Ba, [
              m(mt, { variant: "section" }, {
                default: a(() => [
                  f("MODELS USED (" + l(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (o(), n("div", Pa, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(F, null, Z(v.value.models, (U) => (o(), n("div", {
                key: U.hash || U.filename,
                class: "model-card"
              }, [
                e("div", Aa, [
                  $[7] || ($[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Va, l(U.filename), 1)
                ]),
                e("div", Fa, [
                  e("div", Wa, [
                    $[8] || ($[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: te(["value", k(U.status)])
                    }, l(C(U.status)), 3)
                  ]),
                  e("div", Ga, [
                    e("span", ja, [
                      $[9] || ($[9] = f(" Importance: ", -1)),
                      m(Ft, {
                        size: 14,
                        title: "About importance levels",
                        onClick: $[0] || ($[0] = (A) => M.value = !0)
                      })
                    ]),
                    m(Ta, {
                      "model-value": h.value[U.filename] || U.importance,
                      options: E,
                      "onUpdate:modelValue": (A) => I(U.filename, A)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  U.loaded_by && U.loaded_by.length > 0 ? (o(), n("div", Ha, [
                    $[10] || ($[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ka, [
                      (o(!0), n(F, null, Z(P(U), (A, ee) => (o(), n("div", {
                        key: `${A.node_id}-${ee}`,
                        class: "node-reference"
                      }, l(A.node_type) + " (Node #" + l(A.node_id) + ") ", 1))), 128)),
                      U.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (A) => D(U.hash || U.filename)
                      }, l(O(U.hash || U.filename) ? "▼ Show less" : `▶ View all (${U.loaded_by.length})`), 9, qa)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  U.size_mb ? (o(), n("div", Ja, [
                    $[11] || ($[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Ya, l(U.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                U.status !== "available" ? (o(), n("div", Xa, [
                  U.status === "downloadable" ? (o(), b(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: $[1] || ($[1] = (A) => r("resolve"))
                  }, {
                    default: a(() => [...$[12] || ($[12] = [
                      f(" Download ", -1)
                    ])]),
                    _: 1
                  })) : U.status === "path_mismatch" ? (o(), b(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: $[2] || ($[2] = (A) => r("resolve"))
                  }, {
                    default: a(() => [...$[13] || ($[13] = [
                      f(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), b(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: $[3] || ($[3] = (A) => r("resolve"))
                  }, {
                    default: a(() => [...$[14] || ($[14] = [
                      f(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Qa, [
              m(mt, { variant: "section" }, {
                default: a(() => [
                  f("NODES USED (" + l(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (o(), n("div", Za, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(F, null, Z(v.value.nodes, (U) => (o(), n("div", {
                key: U.name,
                class: "node-item"
              }, [
                e("span", {
                  class: te(["node-status", U.status === "installed" ? "installed" : "missing"])
                }, l(U.status === "installed" ? "✓" : "✕"), 3),
                e("span", el, l(U.name), 1),
                U.version ? (o(), n("span", tl, "v" + l(U.version), 1)) : c("", !0),
                U.status === "missing" ? (o(), b(re, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: T.value[U.name],
                  onClick: (A) => z(U.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...$[15] || ($[15] = [
                    f(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          m(re, {
            variant: "secondary",
            onClick: $[4] || ($[4] = (U) => r("close"))
          }, {
            default: a(() => [...$[16] || ($[16] = [
              f(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (o(), b(re, {
            key: 0,
            variant: "primary",
            onClick: x
          }, {
            default: a(() => [...$[17] || ($[17] = [
              f(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      m(je, {
        show: M.value,
        title: "Model Importance Levels",
        onClose: $[6] || ($[6] = (U) => M.value = !1)
      }, {
        content: a(() => [...$[18] || ($[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              f(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              f(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              f(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sl = /* @__PURE__ */ J(ol, [["__scopeId", "data-v-0b14d32e"]]), ve = At({
  items: [],
  status: "idle"
});
let Ae = null;
function Gt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return ve.items.find((d) => d.id === t);
}
async function ot() {
  if (ve.status === "downloading") return;
  const t = ve.items.find((d) => d.status === "queued");
  if (!t) {
    ve.status = "idle";
    return;
  }
  ve.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await nl(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ve.status = "idle", ot();
  }
}
async function nl(t) {
  return new Promise((d, s) => {
    Ae && (Ae.close(), Ae = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ae = g;
    let y = Date.now(), p = 0, v = !1;
    g.onmessage = (i) => {
      try {
        const u = JSON.parse(i.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const w = Date.now(), h = (w - y) / 1e3;
            if (h > 0.5) {
              const T = t.downloaded - p;
              if (t.speed = T / h, y = w, p = t.downloaded, t.speed > 0 && t.size > 0) {
                const M = t.size - t.downloaded;
                t.eta = M / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, g.close(), Ae = null, d();
            break;
          case "error":
            v = !0, g.close(), Ae = null, s(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Ae = null, v || s(new Error("Connection lost"));
    };
  });
}
async function al() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const s of d.pending_downloads) {
      if (ve.items.some((g) => g.url === s.url && g.filename === s.filename))
        continue;
      const r = {
        id: Gt(),
        workflow: s.workflow,
        filename: s.filename,
        url: s.url,
        targetPath: s.target_path,
        size: s.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ve.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function kt() {
  function t(k) {
    for (const C of k) {
      if (ve.items.some(
        (D) => D.url === C.url && D.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(D.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const O = {
        id: Gt(),
        workflow: C.workflow,
        filename: C.filename,
        url: C.url,
        targetPath: C.targetPath,
        size: C.size || 0,
        type: C.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ve.items.push(O);
    }
    ve.status === "idle" && ot();
  }
  async function d(k) {
    const C = _t(k);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ae && (Ae.close(), Ae = null), C.status = "failed", C.error = "Cancelled by user", ve.status = "idle", ot();
      } else if (C.status === "queued") {
        const P = ve.items.findIndex((O) => O.id === k);
        P >= 0 && ve.items.splice(P, 1);
      }
    }
  }
  function s(k) {
    const C = _t(k);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, ve.status === "idle" && ot());
  }
  function r(k) {
    const C = _t(k);
    !C || C.status !== "paused" || (C.status = "queued", ve.status === "idle" && ot());
  }
  function g() {
    const k = ve.items.filter((C) => C.status === "paused");
    for (const C of k)
      C.status = "queued";
    ve.status === "idle" && ot();
  }
  function y(k) {
    const C = ve.items.findIndex((P) => P.id === k);
    C >= 0 && ["completed", "failed", "paused"].includes(ve.items[C].status) && ve.items.splice(C, 1);
  }
  function p() {
    ve.items = ve.items.filter((k) => k.status !== "completed");
  }
  function v() {
    ve.items = ve.items.filter((k) => k.status !== "failed");
  }
  const i = N(
    () => ve.items.find((k) => k.status === "downloading")
  ), u = N(
    () => ve.items.filter((k) => k.status === "queued")
  ), w = N(
    () => ve.items.filter((k) => k.status === "completed")
  ), h = N(
    () => ve.items.filter((k) => k.status === "failed")
  ), T = N(
    () => ve.items.filter((k) => k.status === "paused")
  ), M = N(() => ve.items.length > 0), _ = N(
    () => ve.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), E = N(
    () => ve.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: lo(ve),
    // Computed
    currentDownload: i,
    queuedItems: u,
    completedItems: w,
    failedItems: h,
    pausedItems: T,
    hasItems: M,
    activeCount: _,
    hasPaused: E,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: p,
    clearFailed: v,
    loadPendingDownloads: al
  };
}
function ll() {
  const t = L(null), d = L(null), s = L([]), r = L([]), g = L(!1), y = L(null);
  async function p(k, C) {
    var O;
    if (!((O = window.app) != null && O.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(k, C);
    if (!P.ok) {
      const D = await P.json().catch(() => ({})), K = D.error || D.message || `Request failed: ${P.status}`;
      throw new Error(K);
    }
    return P.json();
  }
  async function v(k) {
    g.value = !0, y.value = null;
    try {
      let C;
      return yt() || (C = await p(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = C, C;
    } catch (C) {
      const P = C instanceof Error ? C.message : "Unknown error occurred";
      throw y.value = P, C;
    } finally {
      g.value = !1;
    }
  }
  async function i(k, C, P) {
    g.value = !0, y.value = null;
    try {
      let O;
      if (!yt()) {
        const D = Object.fromEntries(C), K = Object.fromEntries(P);
        O = await p(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: D,
              model_choices: K
            })
          }
        );
      }
      return d.value = O, O;
    } catch (O) {
      const D = O instanceof Error ? O.message : "Unknown error occurred";
      throw y.value = D, O;
    } finally {
      g.value = !1;
    }
  }
  async function u(k, C = 10) {
    g.value = !0, y.value = null;
    try {
      let P;
      return yt() || (P = await p(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: C })
        }
      )), s.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = O, P;
    } finally {
      g.value = !1;
    }
  }
  async function w(k, C = 10) {
    g.value = !0, y.value = null;
    try {
      let P;
      return yt() || (P = await p(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: C })
        }
      )), r.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = O, P;
    } finally {
      g.value = !1;
    }
  }
  const h = At({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function T() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.error = void 0;
  }
  async function M(k, C, P) {
    T(), h.phase = "resolving", y.value = null;
    const O = Object.fromEntries(C), D = Object.fromEntries(P);
    try {
      const K = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: O,
          model_choices: D
        })
      });
      if (!K.ok)
        throw new Error(`Request failed: ${K.status}`);
      if (!K.body)
        throw new Error("No response body");
      const I = K.body.getReader(), x = new TextDecoder();
      let z = "";
      for (; ; ) {
        const { done: S, value: $ } = await I.read();
        if (S) break;
        z += x.decode($, { stream: !0 });
        const U = z.split(`

`);
        z = U.pop() || "";
        for (const A of U) {
          if (!A.trim()) continue;
          const ee = A.split(`
`);
          let V = "", H = "";
          for (const X of ee)
            X.startsWith("event: ") ? V = X.slice(7) : X.startsWith("data: ") && (H = X.slice(6));
          if (H)
            try {
              const X = JSON.parse(H);
              _(V, X);
            } catch (X) {
              console.warn("Failed to parse SSE event:", X);
            }
        }
      }
    } catch (K) {
      const I = K instanceof Error ? K.message : "Unknown error occurred";
      throw y.value = I, h.error = I, h.phase = "error", K;
    }
  }
  function _(k, C) {
    switch (k) {
      case "batch_start":
        h.phase = "downloading", h.totalFiles = C.total;
        break;
      case "file_start":
        h.currentFile = C.filename, h.currentFileIndex = C.index, h.bytesDownloaded = 0, h.bytesTotal = void 0;
        break;
      case "file_progress":
        h.bytesDownloaded = C.downloaded, h.bytesTotal = C.total;
        break;
      case "file_complete":
        h.completedFiles.push({
          filename: C.filename,
          success: C.success,
          error: C.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        h.nodesToInstall = C.nodes_to_install || [], C.download_results && (h.completedFiles = C.download_results), h.phase = "complete";
        break;
      case "error":
        h.error = C.message, h.phase = "error", y.value = C.message;
        break;
    }
  }
  function E(k, C) {
    const { addToQueue: P } = kt(), O = C.filter((D) => D.url && D.target_path).map((D) => ({
      workflow: k,
      filename: D.filename,
      url: D.url,
      targetPath: D.target_path,
      size: D.size || 0,
      type: "model"
    }));
    return O.length > 0 && P(O), O.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
    modelSearchResults: r,
    isLoading: g,
    error: y,
    progress: h,
    // Methods
    analyzeWorkflow: v,
    applyResolution: i,
    applyResolutionWithProgress: M,
    searchNodes: u,
    searchModels: w,
    resetProgress: T,
    queueModelDownloads: E
  };
}
const il = { class: "resolution-stepper" }, rl = { class: "stepper-header" }, dl = ["onClick"], cl = {
  key: 0,
  class: "step-icon"
}, ul = {
  key: 1,
  class: "step-number"
}, ml = { class: "step-label" }, vl = {
  key: 0,
  class: "step-connector"
}, fl = { class: "stepper-content" }, gl = /* @__PURE__ */ q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: d }) {
    const s = t, r = d;
    function g(u) {
      var w;
      if ((w = s.stepStats) != null && w[u]) {
        const h = s.stepStats[u];
        return h.total > 0 && h.resolved === h.total;
      }
      return s.completedSteps.includes(u);
    }
    function y(u) {
      var w;
      if ((w = s.stepStats) != null && w[u]) {
        const h = s.stepStats[u];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function p(u) {
      return g(u) ? "state-complete" : y(u) ? "state-partial" : "state-pending";
    }
    function v(u) {
      return !1;
    }
    function i(u) {
      r("step-change", u);
    }
    return (u, w) => (o(), n("div", il, [
      e("div", rl, [
        (o(!0), n(F, null, Z(t.steps, (h, T) => (o(), n("div", {
          key: h.id,
          class: te(["step", {
            active: t.currentStep === h.id,
            completed: g(h.id),
            "in-progress": y(h.id),
            disabled: v(h.id)
          }]),
          onClick: (M) => i(h.id)
        }, [
          e("div", {
            class: te(["step-indicator", p(h.id)])
          }, [
            g(h.id) ? (o(), n("span", cl, "✓")) : (o(), n("span", ul, l(T + 1), 1))
          ], 2),
          e("div", ml, l(h.label), 1),
          T < t.steps.length - 1 ? (o(), n("div", vl)) : c("", !0)
        ], 10, dl))), 128))
      ]),
      e("div", fl, [
        de(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), hl = /* @__PURE__ */ J(gl, [["__scopeId", "data-v-2a7b3af8"]]), pl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = N(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), r = N(() => `confidence-${s.value}`), g = N(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, p) => (o(), n("span", {
      class: te(["confidence-badge", r.value, t.size])
    }, l(g.value), 3));
  }
}), Lt = /* @__PURE__ */ J(pl, [["__scopeId", "data-v-17ec4b80"]]), yl = { class: "node-info" }, wl = { class: "node-info-text" }, kl = { class: "item-body" }, bl = {
  key: 0,
  class: "resolved-state"
}, _l = {
  key: 1,
  class: "multiple-options"
}, $l = { class: "options-list" }, Cl = ["onClick"], xl = ["name", "value", "checked", "onChange"], Sl = { class: "option-content" }, Il = { class: "option-header" }, El = { class: "option-package-id" }, zl = {
  key: 0,
  class: "option-title"
}, Ml = { class: "option-meta" }, Ll = {
  key: 0,
  class: "installed-badge"
}, Tl = { class: "action-buttons" }, Rl = {
  key: 2,
  class: "unresolved"
}, Dl = { class: "action-buttons" }, Nl = /* @__PURE__ */ q({
  __name: "NodeResolutionItem",
  props: {
    nodeType: {},
    packageId: {},
    confidence: {},
    matchType: {},
    description: {},
    repository: {},
    source: {},
    isInstalled: { type: Boolean },
    isOptional: { type: Boolean },
    isSelected: { type: Boolean },
    hasMultipleOptions: { type: Boolean },
    options: {},
    selectedOptionIndex: {},
    choice: {},
    status: {},
    statusLabel: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, r = d, g = N(() => !!s.choice);
    N(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.action;
    }), N(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.package_id;
    });
    const y = N(() => {
      switch (s.status) {
        case "not-found":
          return "unresolved";
        case "ambiguous":
          return "ambiguous";
        case "install":
          return "resolved";
        case "optional":
          return "optional";
        case "skip":
          return "skip";
        default:
          return "unresolved";
      }
    });
    function p(v) {
      r("option-selected", v);
    }
    return (v, i) => (o(), n("div", {
      class: te(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", yl, [
        e("span", wl, [
          i[7] || (i[7] = f("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: te(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", kl, [
        g.value ? (o(), n("div", bl, [
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (u) => r("clear-choice"))
          }, {
            default: a(() => [...i[8] || (i[8] = [
              f(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", _l, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", $l, [
            (o(!0), n(F, null, Z(t.options, (u, w) => (o(), n("label", {
              key: u.package_id,
              class: te(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (h) => p(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (h) => p(w)
              }, null, 40, xl),
              e("div", Sl, [
                e("div", Il, [
                  e("span", El, l(u.package_id), 1),
                  m(Lt, {
                    confidence: u.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                u.title && u.title !== u.package_id ? (o(), n("div", zl, l(u.title), 1)) : c("", !0),
                e("div", Ml, [
                  u.is_installed ? (o(), n("span", Ll, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Cl))), 128))
          ]),
          e("div", Tl, [
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (u) => r("search"))
            }, {
              default: a(() => [...i[9] || (i[9] = [
                f(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (u) => r("manual-entry"))
            }, {
              default: a(() => [...i[10] || (i[10] = [
                f(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (u) => r("mark-optional"))
            }, {
              default: a(() => [...i[11] || (i[11] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Rl, [
          i[16] || (i[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Dl, [
            m(re, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (u) => r("search"))
            }, {
              default: a(() => [...i[13] || (i[13] = [
                f(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (u) => r("manual-entry"))
            }, {
              default: a(() => [...i[14] || (i[14] = [
                f(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (u) => r("mark-optional"))
            }, {
              default: a(() => [...i[15] || (i[15] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ul = /* @__PURE__ */ J(Nl, [["__scopeId", "data-v-e02629e7"]]), Ol = { class: "item-navigator" }, Bl = { class: "nav-item-info" }, Pl = ["title"], Al = { class: "nav-controls" }, Vl = { class: "nav-arrows" }, Fl = ["disabled"], Wl = ["disabled"], Gl = { class: "nav-position" }, jl = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (r, g) => (o(), n("div", Ol, [
      e("div", Bl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Pl)
      ]),
      e("div", Al, [
        e("div", Vl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (y) => s("prev")),
            title: "Previous item"
          }, " ← ", 8, Fl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (y) => s("next")),
            title: "Next item"
          }, " → ", 8, Wl)
        ]),
        e("span", Gl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), jt = /* @__PURE__ */ J(jl, [["__scopeId", "data-v-74af7920"]]), Hl = ["type", "value", "placeholder", "disabled"], Kl = {
  key: 0,
  class: "base-input-error"
}, ql = /* @__PURE__ */ q({
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
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: te(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: te(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ge((r) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ge((r) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Hl),
      t.error ? (o(), n("span", Kl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ J(ql, [["__scopeId", "data-v-9ba02cdc"]]), Jl = { class: "node-resolution-step" }, Yl = { class: "step-header" }, Xl = { class: "stat-badge" }, Ql = {
  key: 1,
  class: "step-body"
}, Zl = {
  key: 2,
  class: "empty-state"
}, ei = { class: "node-search-modal" }, ti = { class: "node-modal-body" }, oi = {
  key: 0,
  class: "node-search-results"
}, si = ["onClick"], ni = { class: "node-result-header" }, ai = { class: "node-result-package-id" }, li = {
  key: 0,
  class: "node-result-description"
}, ii = {
  key: 1,
  class: "node-no-results"
}, ri = {
  key: 2,
  class: "node-searching"
}, di = { class: "node-manual-entry-modal" }, ci = { class: "node-modal-body" }, ui = { class: "node-modal-actions" }, mi = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, r = d, g = L(0), y = L(!1), p = L(!1), v = L(""), i = L(""), u = L([]), w = L(!1), h = N(() => s.nodes[g.value]), T = N(() => s.nodes.filter((U) => s.nodeChoices.has(U.node_type)).length), M = N(() => {
      var A;
      if (!h.value) return "not-found";
      const U = s.nodeChoices.get(h.value.node_type);
      if (U)
        switch (U.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (A = h.value.options) != null && A.length ? "ambiguous" : "not-found";
    }), _ = N(() => {
      var A;
      if (!h.value) return;
      const U = s.nodeChoices.get(h.value.node_type);
      if (U)
        switch (U.action) {
          case "install":
            return U.package_id ? `→ ${U.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (A = h.value.options) != null && A.length ? `${h.value.options.length} matches` : "Not Found";
    });
    function E(U) {
      U >= 0 && U < s.nodes.length && (g.value = U);
    }
    function k() {
      h.value && r("mark-optional", h.value.node_type);
    }
    function C() {
      h.value && r("skip", h.value.node_type);
    }
    function P(U) {
      h.value && r("option-selected", h.value.node_type, U);
    }
    function O() {
      h.value && r("clear-choice", h.value.node_type);
    }
    function D() {
      h.value && (v.value = h.value.node_type, y.value = !0);
    }
    function K() {
      i.value = "", p.value = !0;
    }
    function I() {
      y.value = !1, v.value = "", u.value = [];
    }
    function x() {
      p.value = !1, i.value = "";
    }
    function z() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function S(U) {
      h.value && (r("manual-entry", h.value.node_type, U.package_id), I());
    }
    function $() {
      !h.value || !i.value.trim() || (r("manual-entry", h.value.node_type, i.value.trim()), x());
    }
    return (U, A) => {
      var ee, V;
      return o(), n("div", Jl, [
        e("div", Yl, [
          A[4] || (A[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Xl, l(T.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        h.value ? (o(), b(jt, {
          key: 0,
          "item-name": h.value.node_type,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: A[0] || (A[0] = (H) => E(g.value - 1)),
          onNext: A[1] || (A[1] = (H) => E(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        h.value ? (o(), n("div", Ql, [
          m(Ul, {
            "node-type": h.value.node_type,
            "has-multiple-options": !!((ee = h.value.options) != null && ee.length),
            options: h.value.options,
            choice: (V = t.nodeChoices) == null ? void 0 : V.get(h.value.node_type),
            status: M.value,
            "status-label": _.value,
            onMarkOptional: k,
            onSkip: C,
            onManualEntry: K,
            onSearch: D,
            onOptionSelected: P,
            onClearChoice: O
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Zl, [...A[5] || (A[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), b(Le, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(I, ["self"])
          }, [
            e("div", ei, [
              e("div", { class: "node-modal-header" }, [
                A[6] || (A[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", ti, [
                m(qe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (H) => v.value = H),
                  placeholder: "Search by node type, package name...",
                  onInput: z
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), n("div", oi, [
                  (o(!0), n(F, null, Z(u.value, (H) => (o(), n("div", {
                    key: H.package_id,
                    class: "node-search-result-item",
                    onClick: (X) => S(H)
                  }, [
                    e("div", ni, [
                      e("code", ai, l(H.package_id), 1),
                      H.match_confidence ? (o(), b(Lt, {
                        key: 0,
                        confidence: H.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    H.description ? (o(), n("div", li, l(H.description), 1)) : c("", !0)
                  ], 8, si))), 128))
                ])) : v.value && !w.value ? (o(), n("div", ii, ' No packages found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                w.value ? (o(), n("div", ri, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), b(Le, { to: "body" }, [
          p.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(x, ["self"])
          }, [
            e("div", di, [
              e("div", { class: "node-modal-header" }, [
                A[7] || (A[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: x
                }, "✕")
              ]),
              e("div", ci, [
                m(qe, {
                  modelValue: i.value,
                  "onUpdate:modelValue": A[3] || (A[3] = (H) => i.value = H),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", ui, [
                  m(re, {
                    variant: "secondary",
                    onClick: x
                  }, {
                    default: a(() => [...A[8] || (A[8] = [
                      f("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(re, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: $
                  }, {
                    default: a(() => [...A[9] || (A[9] = [
                      f(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : c("", !0)
        ]))
      ]);
    };
  }
}), vi = /* @__PURE__ */ J(mi, [["__scopeId", "data-v-4fb196b1"]]), fi = { class: "node-info" }, gi = { class: "node-info-text" }, hi = { class: "item-body" }, pi = {
  key: 0,
  class: "resolved-state"
}, yi = {
  key: 1,
  class: "multiple-options"
}, wi = { class: "options-list" }, ki = ["onClick"], bi = ["name", "value", "checked", "onChange"], _i = { class: "option-content" }, $i = { class: "option-header" }, Ci = { class: "option-filename" }, xi = { class: "option-meta" }, Si = { class: "option-size" }, Ii = { class: "option-category" }, Ei = { class: "option-path" }, zi = { class: "action-buttons" }, Mi = {
  key: 2,
  class: "unresolved"
}, Li = { class: "action-buttons" }, Ti = /* @__PURE__ */ q({
  __name: "ModelResolutionItem",
  props: {
    filename: {},
    nodeType: {},
    category: {},
    size: {},
    hash: {},
    confidence: {},
    matchType: {},
    isOptional: { type: Boolean },
    hasMultipleOptions: { type: Boolean },
    options: {},
    selectedOptionIndex: {},
    choice: {},
    status: {},
    statusLabel: {}
  },
  emits: ["mark-optional", "skip", "download-url", "search", "option-selected", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, r = d, g = N(() => !!s.choice);
    N(() => {
      var i;
      return (i = s.choice) == null ? void 0 : i.action;
    }), N(() => {
      var i, u;
      return ((u = (i = s.choice) == null ? void 0 : i.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const y = N(() => {
      switch (s.status) {
        case "not-found":
          return "unresolved";
        case "ambiguous":
          return "ambiguous";
        case "download":
        case "select":
          return "resolved";
        case "optional":
          return "optional";
        case "skip":
          return "skip";
        default:
          return "unresolved";
      }
    });
    function p(i) {
      r("option-selected", i);
    }
    function v(i) {
      if (!i) return "Unknown";
      const u = i / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, u) => (o(), n("div", {
      class: te(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", fi, [
        e("span", gi, [
          u[7] || (u[7] = f("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: te(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", hi, [
        g.value ? (o(), n("div", pi, [
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (w) => r("clear-choice"))
          }, {
            default: a(() => [...u[8] || (u[8] = [
              f(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", yi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", wi, [
            (o(!0), n(F, null, Z(t.options, (w, h) => (o(), n("label", {
              key: w.model.hash,
              class: te(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (T) => p(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (T) => p(h)
              }, null, 40, bi),
              e("div", _i, [
                e("div", $i, [
                  e("span", Ci, l(w.model.filename), 1),
                  m(Lt, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", xi, [
                  e("span", Si, l(v(w.model.size)), 1),
                  e("span", Ii, l(w.model.category), 1)
                ]),
                e("div", Ei, l(w.model.relative_path), 1)
              ])
            ], 10, ki))), 128))
          ]),
          e("div", zi, [
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (w) => r("search"))
            }, {
              default: a(() => [...u[9] || (u[9] = [
                f(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (w) => r("download-url"))
            }, {
              default: a(() => [...u[10] || (u[10] = [
                f(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (w) => r("mark-optional"))
            }, {
              default: a(() => [...u[11] || (u[11] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Mi, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Li, [
            m(re, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (w) => r("search"))
            }, {
              default: a(() => [...u[13] || (u[13] = [
                f(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (w) => r("download-url"))
            }, {
              default: a(() => [...u[14] || (u[14] = [
                f(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (w) => r("mark-optional"))
            }, {
              default: a(() => [...u[15] || (u[15] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ri = /* @__PURE__ */ J(Ti, [["__scopeId", "data-v-8a82fefa"]]), Di = { class: "model-resolution-step" }, Ni = { class: "step-header" }, Ui = { class: "step-info" }, Oi = { class: "step-title" }, Bi = { class: "step-description" }, Pi = { class: "stat-badge" }, Ai = {
  key: 1,
  class: "step-body"
}, Vi = {
  key: 2,
  class: "empty-state"
}, Fi = { class: "model-search-modal" }, Wi = { class: "model-modal-body" }, Gi = {
  key: 0,
  class: "model-search-results"
}, ji = ["onClick"], Hi = { class: "model-result-header" }, Ki = { class: "model-result-filename" }, qi = { class: "model-result-meta" }, Ji = { class: "model-result-category" }, Yi = { class: "model-result-size" }, Xi = {
  key: 0,
  class: "model-result-path"
}, Qi = {
  key: 1,
  class: "model-no-results"
}, Zi = {
  key: 2,
  class: "model-searching"
}, er = { class: "model-download-url-modal" }, tr = { class: "model-modal-body" }, or = { class: "model-input-group" }, sr = { class: "model-input-group" }, nr = { class: "model-modal-actions" }, ar = /* @__PURE__ */ q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: d }) {
    const s = {
      CheckpointLoaderSimple: ["checkpoints"],
      CheckpointLoader: ["checkpoints"],
      unCLIPCheckpointLoader: ["checkpoints"],
      ImageOnlyCheckpointLoader: ["checkpoints"],
      VAELoader: ["vae"],
      LoraLoader: ["loras"],
      LoraLoaderModelOnly: ["loras"],
      CLIPLoader: ["clip"],
      DualCLIPLoader: ["clip"],
      TripleCLIPLoader: ["clip"],
      QuadrupleCLIPLoader: ["clip"],
      UNETLoader: ["diffusion_models"],
      CLIPVisionLoader: ["clip_vision"],
      ControlNetLoader: ["controlnet"],
      DiffControlNetLoader: ["controlnet"],
      StyleModelLoader: ["style_models"],
      UpscaleModelLoader: ["upscale_models"],
      GLIGENLoader: ["gligen"],
      HypernetworkLoader: ["hypernetworks"],
      PhotoMakerLoader: ["photomaker"],
      DiffusersLoader: ["diffusers"]
    };
    function r(ne) {
      var se;
      return ne && ((se = s[ne]) == null ? void 0 : se[0]) || null;
    }
    const g = t, y = d, p = L(0), v = L(!1), i = L(!1), u = L(""), w = L(""), h = L(""), T = L([]), M = L(!1), _ = N(() => g.models[p.value]), E = N(() => g.models.some((ne) => ne.is_download_intent)), k = N(() => g.models.filter(
      (ne) => g.modelChoices.has(ne.filename) || ne.is_download_intent
    ).length), C = N(() => {
      var se;
      if (!_.value) return "";
      const ne = r((se = _.value.reference) == null ? void 0 : se.node_type);
      return ne ? `${ne}/${_.value.filename}` : "";
    }), P = N(() => {
      var se;
      if (!_.value) return "not-found";
      const ne = g.modelChoices.get(_.value.filename);
      if (ne)
        switch (ne.action) {
          case "select":
            return "select";
          case "download":
            return "download";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
          case "cancel_download":
            return "skip";
        }
      return _.value.is_download_intent ? "download" : (se = _.value.options) != null && se.length ? "ambiguous" : "not-found";
    }), O = N(() => {
      var se, _e;
      if (!_.value) return;
      const ne = g.modelChoices.get(_.value.filename);
      if (ne)
        switch (ne.action) {
          case "select":
            return (se = ne.selected_model) != null && se.filename ? `→ ${ne.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (_e = _.value.options) != null && _e.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function D(ne) {
      ne >= 0 && ne < g.models.length && (p.value = ne);
    }
    function K() {
      _.value && y("mark-optional", _.value.filename);
    }
    function I() {
      _.value && y("skip", _.value.filename);
    }
    function x(ne) {
      _.value && y("option-selected", _.value.filename, ne);
    }
    function z() {
      _.value && y("clear-choice", _.value.filename);
    }
    function S() {
      _.value && (u.value = _.value.filename, v.value = !0);
    }
    function $() {
      _.value && (w.value = _.value.download_source || "", h.value = _.value.target_path || C.value, i.value = !0);
    }
    function U() {
      v.value = !1, u.value = "", T.value = [];
    }
    function A() {
      i.value = !1, w.value = "", h.value = "";
    }
    function ee() {
      M.value = !0, setTimeout(() => {
        M.value = !1;
      }, 300);
    }
    function V(ne) {
      _.value && U();
    }
    function H() {
      !_.value || !w.value.trim() || (y("download-url", _.value.filename, w.value.trim(), h.value.trim() || void 0), A());
    }
    function X(ne) {
      if (!ne) return "Unknown";
      const se = ne / (1024 * 1024 * 1024);
      return se >= 1 ? `${se.toFixed(2)} GB` : `${(ne / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ne, se) => {
      var _e, Q, Te;
      return o(), n("div", Di, [
        e("div", Ni, [
          e("div", Ui, [
            e("h3", Oi, l(E.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Bi, l(E.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Pi, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), b(jt, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": p.value,
          "total-items": t.models.length,
          onPrev: se[0] || (se[0] = (he) => D(p.value - 1)),
          onNext: se[1] || (se[1] = (he) => D(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        _.value ? (o(), n("div", Ai, [
          m(Ri, {
            filename: _.value.filename,
            "node-type": ((_e = _.value.reference) == null ? void 0 : _e.node_type) || "Unknown",
            "has-multiple-options": !!((Q = _.value.options) != null && Q.length),
            options: _.value.options,
            choice: (Te = t.modelChoices) == null ? void 0 : Te.get(_.value.filename),
            status: P.value,
            "status-label": O.value,
            onMarkOptional: K,
            onSkip: I,
            onDownloadUrl: $,
            onSearch: S,
            onOptionSelected: x,
            onClearChoice: z
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Vi, [...se[5] || (se[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), b(Le, { to: "body" }, [
          v.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(U, ["self"])
          }, [
            e("div", Fi, [
              e("div", { class: "model-modal-header" }, [
                se[6] || (se[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", Wi, [
                m(qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (he) => u.value = he),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                T.value.length > 0 ? (o(), n("div", Gi, [
                  (o(!0), n(F, null, Z(T.value, (he) => (o(), n("div", {
                    key: he.hash,
                    class: "model-search-result-item",
                    onClick: (Re) => V()
                  }, [
                    e("div", Hi, [
                      e("code", Ki, l(he.filename), 1)
                    ]),
                    e("div", qi, [
                      e("span", Ji, l(he.category), 1),
                      e("span", Yi, l(X(he.size)), 1)
                    ]),
                    he.relative_path ? (o(), n("div", Xi, l(he.relative_path), 1)) : c("", !0)
                  ], 8, ji))), 128))
                ])) : u.value && !M.value ? (o(), n("div", Qi, ' No models found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                M.value ? (o(), n("div", Zi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), b(Le, { to: "body" }, [
          i.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(A, ["self"])
          }, [
            e("div", er, [
              e("div", { class: "model-modal-header" }, [
                se[7] || (se[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", tr, [
                e("div", or, [
                  se[8] || (se[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  m(qe, {
                    modelValue: w.value,
                    "onUpdate:modelValue": se[3] || (se[3] = (he) => w.value = he),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", sr, [
                  se[9] || (se[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  m(qe, {
                    modelValue: h.value,
                    "onUpdate:modelValue": se[4] || (se[4] = (he) => h.value = he),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", nr, [
                  m(re, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: a(() => [...se[10] || (se[10] = [
                      f("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(re, {
                    variant: "primary",
                    disabled: !w.value.trim() || !h.value.trim(),
                    onClick: H
                  }, {
                    default: a(() => [...se[11] || (se[11] = [
                      f(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : c("", !0)
        ]))
      ]);
    };
  }
}), lr = /* @__PURE__ */ J(ar, [["__scopeId", "data-v-c6acbada"]]), ir = { class: "applying-step" }, rr = {
  key: 0,
  class: "phase-content"
}, dr = {
  key: 1,
  class: "phase-content"
}, cr = { class: "completion-summary" }, ur = {
  key: 0,
  class: "summary-item info"
}, mr = { class: "summary-text" }, vr = {
  key: 2,
  class: "phase-content error"
}, fr = { class: "error-message" }, gr = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", ir, [
      t.progress.phase === "resolving" ? (o(), n("div", rr, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", dr, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", cr, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", ur, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", mr, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : c("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", vr, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", fr, l(t.progress.error), 1)
      ])) : c("", !0)
    ]));
  }
}), hr = /* @__PURE__ */ J(gr, [["__scopeId", "data-v-b4d7e0eb"]]), pr = {
  key: 0,
  class: "loading-state"
}, yr = {
  key: 1,
  class: "wizard-content"
}, wr = {
  key: 0,
  class: "step-content"
}, kr = { class: "analysis-summary" }, br = { class: "analysis-header" }, _r = { class: "summary-description" }, $r = { class: "stats-grid" }, Cr = { class: "stat-card" }, xr = { class: "stat-items" }, Sr = { class: "stat-item success" }, Ir = { class: "stat-count" }, Er = {
  key: 0,
  class: "stat-item warning"
}, zr = { class: "stat-count" }, Mr = {
  key: 1,
  class: "stat-item error"
}, Lr = { class: "stat-count" }, Tr = { class: "stat-card" }, Rr = { class: "stat-items" }, Dr = { class: "stat-item success" }, Nr = { class: "stat-count" }, Ur = {
  key: 0,
  class: "stat-item info"
}, Or = { class: "stat-count" }, Br = {
  key: 1,
  class: "stat-item warning"
}, Pr = { class: "stat-count" }, Ar = {
  key: 2,
  class: "stat-item error"
}, Vr = { class: "stat-count" }, Fr = {
  key: 0,
  class: "status-message warning"
}, Wr = { class: "status-text" }, Gr = {
  key: 1,
  class: "status-message info"
}, jr = { class: "status-text" }, Hr = {
  key: 2,
  class: "status-message success"
}, Kr = {
  key: 3,
  class: "step-content"
}, qr = { class: "review-summary" }, Jr = { class: "review-stats" }, Yr = { class: "review-stat" }, Xr = { class: "stat-value" }, Qr = { class: "review-stat" }, Zr = { class: "stat-value" }, ed = { class: "review-stat" }, td = { class: "stat-value" }, od = { class: "review-stat" }, sd = { class: "stat-value" }, nd = {
  key: 0,
  class: "review-section"
}, ad = { class: "section-title" }, ld = { class: "review-items" }, id = { class: "item-name" }, rd = { class: "item-choice" }, dd = {
  key: 0,
  class: "choice-badge install"
}, cd = {
  key: 1,
  class: "choice-badge optional"
}, ud = {
  key: 2,
  class: "choice-badge skip"
}, md = {
  key: 1,
  class: "choice-badge pending"
}, vd = {
  key: 1,
  class: "review-section"
}, fd = { class: "section-title" }, gd = { class: "review-items" }, hd = { class: "item-name" }, pd = { class: "item-choice" }, yd = {
  key: 0,
  class: "choice-badge install"
}, wd = {
  key: 1,
  class: "choice-badge download"
}, kd = {
  key: 2,
  class: "choice-badge optional"
}, bd = {
  key: 3,
  class: "choice-badge skip"
}, _d = {
  key: 4,
  class: "choice-badge skip"
}, $d = {
  key: 1,
  class: "choice-badge download"
}, Cd = {
  key: 2,
  class: "choice-badge pending"
}, xd = {
  key: 2,
  class: "no-choices"
}, Sd = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, r = d, { analyzeWorkflow: g, applyResolution: y, queueModelDownloads: p, progress: v, resetProgress: i } = ll(), { loadPendingDownloads: u } = kt(), w = L(null), h = L(!1), T = L(!1), M = L(null), _ = L("analysis"), E = L([]), k = L(/* @__PURE__ */ new Map()), C = L(/* @__PURE__ */ new Map()), P = N(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return D.value && j.push({ id: "nodes", label: "Nodes" }), (K.value || I.value) && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), _.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), O = N(() => w.value ? w.value.stats.needs_user_input : !1), D = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), K = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), I = N(() => w.value ? w.value.stats.download_intents > 0 : !1), x = N(() => w.value ? w.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), z = N(() => {
      if (!w.value) return [];
      const j = w.value.nodes.unresolved.map((oe) => ({
        node_type: oe.reference.node_type,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), B = w.value.nodes.ambiguous.map((oe) => ({
        node_type: oe.reference.node_type,
        has_multiple_options: !0,
        options: oe.options.map((fe) => ({
          package_id: fe.package.package_id,
          title: fe.package.title,
          match_confidence: fe.match_confidence,
          match_type: fe.match_type,
          is_installed: fe.is_installed
        }))
      }));
      return [...j, ...B];
    }), S = N(() => {
      if (!w.value) return [];
      const j = w.value.models.unresolved.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), B = w.value.models.ambiguous.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        has_multiple_options: !0,
        options: oe.options.map((fe) => ({
          model: fe.model,
          match_confidence: fe.match_confidence,
          match_type: fe.match_type,
          has_download_source: fe.has_download_source
        }))
      }));
      return [...j, ...B];
    }), $ = N(() => {
      const j = S.value, B = x.value.map((oe) => ({
        filename: oe.filename,
        reference: oe.reference,
        is_download_intent: !0,
        resolved_model: oe.resolved_model,
        download_source: oe.download_source,
        target_path: oe.target_path,
        options: void 0
      }));
      return [...j, ...B];
    }), U = N(() => {
      let j = 0;
      for (const B of k.value.values())
        B.action === "install" && j++;
      for (const B of C.value.values())
        B.action === "select" && j++;
      return j;
    }), A = N(() => {
      let j = 0;
      for (const B of C.value.values())
        B.action === "download" && j++;
      return j;
    }), ee = N(() => {
      let j = 0;
      for (const B of k.value.values())
        B.action === "optional" && j++;
      for (const B of C.value.values())
        B.action === "optional" && j++;
      return j;
    }), V = N(() => {
      let j = 0;
      for (const B of k.value.values())
        B.action === "skip" && j++;
      for (const B of C.value.values())
        B.action === "skip" && j++;
      for (const B of z.value)
        k.value.has(B.node_type) || j++;
      for (const B of S.value)
        C.value.has(B.filename) || j++;
      return j;
    }), H = N(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, D.value) {
        const B = z.value.length, oe = z.value.filter(
          (fe) => k.value.has(fe.node_type)
        ).length;
        j.nodes = { resolved: oe, total: B };
      }
      if (K.value || I.value) {
        const B = $.value.length, oe = $.value.filter(
          (fe) => C.value.has(fe.filename) || fe.is_download_intent
        ).length;
        j.models = { resolved: oe, total: B };
      }
      if (j.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const B = v.totalFiles || 1, oe = v.completedFiles.length;
        j.applying = { resolved: oe, total: B };
      }
      return j;
    });
    function X(j) {
      _.value = j;
    }
    function ne() {
      const j = P.value.findIndex((B) => B.id === _.value);
      j > 0 && (_.value = P.value[j - 1].id);
    }
    function se() {
      const j = P.value.findIndex((B) => B.id === _.value);
      j < P.value.length - 1 && (_.value = P.value[j + 1].id);
    }
    async function _e() {
      h.value = !0, M.value = null;
      try {
        w.value = await g(s.workflowName);
      } catch (j) {
        M.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        h.value = !1;
      }
    }
    function Q() {
      E.value.includes("analysis") || E.value.push("analysis"), D.value ? _.value = "nodes" : K.value || I.value ? _.value = "models" : _.value = "review";
    }
    function Te(j) {
      k.value.set(j, { action: "optional" });
    }
    function he(j) {
      k.value.set(j, { action: "skip" });
    }
    function Re(j, B) {
      var fe;
      const oe = z.value.find((Me) => Me.node_type === j);
      (fe = oe == null ? void 0 : oe.options) != null && fe[B] && k.value.set(j, {
        action: "install",
        package_id: oe.options[B].package_id
      });
    }
    function it(j, B) {
      k.value.set(j, {
        action: "install",
        package_id: B
      });
    }
    function ge(j) {
      k.value.delete(j);
    }
    function ze(j) {
      C.value.set(j, { action: "optional" });
    }
    function Y(j) {
      C.value.set(j, { action: "skip" });
    }
    function ae(j, B) {
      var fe;
      const oe = S.value.find((Me) => Me.filename === j);
      (fe = oe == null ? void 0 : oe.options) != null && fe[B] && C.value.set(j, {
        action: "select",
        selected_model: oe.options[B].model
      });
    }
    function ue(j, B, oe) {
      C.value.set(j, {
        action: "download",
        url: B,
        target_path: oe
      });
    }
    function $e(j) {
      C.value.delete(j);
    }
    async function Je() {
      T.value = !0, M.value = null, i(), v.phase = "resolving", _.value = "applying";
      try {
        const j = await y(s.workflowName, k.value, C.value);
        j.models_to_download && j.models_to_download.length > 0 && p(s.workflowName, j.models_to_download), v.nodesToInstall = j.nodes_to_install || [], v.phase = "complete", await u(), setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (j) {
        M.value = j instanceof Error ? j.message : "Failed to apply resolution", v.error = M.value, v.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    return be(_e), (j, B) => (o(), b(ht, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: h.value,
      error: M.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (oe) => r("close"))
    }, {
      body: a(() => [
        h.value && !w.value ? (o(), n("div", pr, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (o(), n("div", yr, [
          m(hl, {
            steps: P.value,
            "current-step": _.value,
            "completed-steps": E.value,
            "step-stats": H.value,
            onStepChange: X
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), n("div", wr, [
            e("div", kr, [
              e("div", br, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", _r, " Found " + l(w.value.stats.total_nodes) + " nodes and " + l(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", $r, [
                e("div", Cr, [
                  B[10] || (B[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", xr, [
                    e("div", Sr, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Ir, l(w.value.nodes.resolved.length), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.nodes.ambiguous.length > 0 ? (o(), n("div", Er, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", zr, l(w.value.nodes.ambiguous.length), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    w.value.nodes.unresolved.length > 0 ? (o(), n("div", Mr, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Lr, l(w.value.nodes.unresolved.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Tr, [
                  B[19] || (B[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Rr, [
                    e("div", Dr, [
                      B[11] || (B[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Nr, l(w.value.models.resolved.length - w.value.stats.download_intents), 1),
                      B[12] || (B[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (o(), n("div", Ur, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Or, l(w.value.stats.download_intents), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    w.value.models.ambiguous.length > 0 ? (o(), n("div", Br, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Pr, l(w.value.models.ambiguous.length), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    w.value.models.unresolved.length > 0 ? (o(), n("div", Ar, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Vr, l(w.value.models.unresolved.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              O.value ? (o(), n("div", Fr, [
                B[20] || (B[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wr, l(z.value.length + S.value.length) + " items need your input", 1)
              ])) : I.value ? (o(), n("div", Gr, [
                B[21] || (B[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", jr, l(w.value.stats.download_intents) + " model" + l(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", Hr, [...B[22] || (B[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          _.value === "nodes" ? (o(), b(vi, {
            key: 1,
            nodes: z.value,
            "node-choices": k.value,
            onMarkOptional: Te,
            onSkip: he,
            onOptionSelected: Re,
            onManualEntry: it,
            onClearChoice: ge
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          _.value === "models" ? (o(), b(lr, {
            key: 2,
            models: $.value,
            "model-choices": C.value,
            onMarkOptional: ze,
            onSkip: Y,
            onOptionSelected: ae,
            onDownloadUrl: ue,
            onClearChoice: $e
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          _.value === "review" ? (o(), n("div", Kr, [
            e("div", qr, [
              B[27] || (B[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Jr, [
                e("div", Yr, [
                  e("span", Xr, l(U.value), 1),
                  B[23] || (B[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Qr, [
                  e("span", Zr, l(A.value), 1),
                  B[24] || (B[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ed, [
                  e("span", td, l(ee.value), 1),
                  B[25] || (B[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", od, [
                  e("span", sd, l(V.value), 1),
                  B[26] || (B[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              z.value.length > 0 ? (o(), n("div", nd, [
                e("h4", ad, "Node Packages (" + l(z.value.length) + ")", 1),
                e("div", ld, [
                  (o(!0), n(F, null, Z(z.value, (oe) => {
                    var fe, Me, Ye, Be;
                    return o(), n("div", {
                      key: oe.node_type,
                      class: "review-item"
                    }, [
                      e("code", id, l(oe.node_type), 1),
                      e("div", rd, [
                        k.value.has(oe.node_type) ? (o(), n(F, { key: 0 }, [
                          ((fe = k.value.get(oe.node_type)) == null ? void 0 : fe.action) === "install" ? (o(), n("span", dd, l((Me = k.value.get(oe.node_type)) == null ? void 0 : Me.package_id), 1)) : ((Ye = k.value.get(oe.node_type)) == null ? void 0 : Ye.action) === "optional" ? (o(), n("span", cd, " Optional ")) : ((Be = k.value.get(oe.node_type)) == null ? void 0 : Be.action) === "skip" ? (o(), n("span", ud, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", md, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              $.value.length > 0 ? (o(), n("div", vd, [
                e("h4", fd, "Models (" + l($.value.length) + ")", 1),
                e("div", gd, [
                  (o(!0), n(F, null, Z($.value, (oe) => {
                    var fe, Me, Ye, Be, Xe, pt, Pe;
                    return o(), n("div", {
                      key: oe.filename,
                      class: "review-item"
                    }, [
                      e("code", hd, l(oe.filename), 1),
                      e("div", pd, [
                        C.value.has(oe.filename) ? (o(), n(F, { key: 0 }, [
                          ((fe = C.value.get(oe.filename)) == null ? void 0 : fe.action) === "select" ? (o(), n("span", yd, l((Ye = (Me = C.value.get(oe.filename)) == null ? void 0 : Me.selected_model) == null ? void 0 : Ye.filename), 1)) : ((Be = C.value.get(oe.filename)) == null ? void 0 : Be.action) === "download" ? (o(), n("span", wd, " Download ")) : ((Xe = C.value.get(oe.filename)) == null ? void 0 : Xe.action) === "optional" ? (o(), n("span", kd, " Optional ")) : ((pt = C.value.get(oe.filename)) == null ? void 0 : pt.action) === "skip" ? (o(), n("span", bd, " Skip ")) : ((Pe = C.value.get(oe.filename)) == null ? void 0 : Pe.action) === "cancel_download" ? (o(), n("span", _d, " Cancel Download ")) : c("", !0)
                        ], 64)) : oe.is_download_intent ? (o(), n("span", $d, " Pending Download ")) : (o(), n("span", Cd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              z.value.length === 0 && $.value.length === 0 ? (o(), n("div", xd, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          _.value === "applying" ? (o(), b(hr, {
            key: 4,
            progress: me(v)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), b(re, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: ne
        }, {
          default: a(() => [...B[28] || (B[28] = [
            f(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        B[31] || (B[31] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || me(v).phase === "complete" || me(v).phase === "error" ? (o(), b(re, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (oe) => r("close"))
        }, {
          default: a(() => [
            f(l(me(v).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "analysis" ? (o(), b(re, {
          key: 2,
          variant: "primary",
          disabled: h.value,
          onClick: Q
        }, {
          default: a(() => [
            f(l(O.value || I.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        _.value === "nodes" ? (o(), b(re, {
          key: 3,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [
            f(l(K.value || I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "models" ? (o(), b(re, {
          key: 4,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [...B[29] || (B[29] = [
            f(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        _.value === "review" ? (o(), b(re, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: Je
        }, {
          default: a(() => [...B[30] || (B[30] = [
            f(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Id = /* @__PURE__ */ J(Sd, [["__scopeId", "data-v-08beb8e3"]]), Ed = { class: "search-input-wrapper" }, zd = ["value", "placeholder"], Md = /* @__PURE__ */ q({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: d }) {
    const s = t, r = d, g = L(null);
    let y;
    function p(i) {
      const u = i.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", u);
      }, s.debounce)) : r("update:modelValue", u);
    }
    function v() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = g.value) == null || i.focus();
    }
    return be(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (i, u) => (o(), n("div", Ed, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: Ge(v, ["escape"])
      }, null, 40, zd),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Ld = /* @__PURE__ */ J(Md, [["__scopeId", "data-v-266f857a"]]), Td = { class: "search-bar" }, Rd = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, s) => (o(), n("div", Td, [
      m(Ld, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => d.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), at = /* @__PURE__ */ J(Rd, [["__scopeId", "data-v-3d51bbfd"]]), Dd = { class: "section-group" }, Nd = {
  key: 0,
  class: "section-content"
}, Ud = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, r = d, g = L(s.initiallyExpanded);
    function y() {
      s.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (p, v) => (o(), n("section", Dd, [
      m(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: a(() => [
          f(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), n("div", Nd, [
        de(p.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ye = /* @__PURE__ */ J(Ud, [["__scopeId", "data-v-c48e33ed"]]), Od = { class: "item-header" }, Bd = {
  key: 0,
  class: "item-icon"
}, Pd = { class: "item-info" }, Ad = {
  key: 0,
  class: "item-title"
}, Vd = {
  key: 1,
  class: "item-subtitle"
}, Fd = {
  key: 0,
  class: "item-details"
}, Wd = {
  key: 1,
  class: "item-actions"
}, Gd = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, r = N(() => s.status ? `status-${s.status}` : "");
    return (g, y) => (o(), n("div", {
      class: te(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (p) => t.clickable && g.$emit("click"))
    }, [
      e("div", Od, [
        g.$slots.icon ? (o(), n("span", Bd, [
          de(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Pd, [
          g.$slots.title ? (o(), n("div", Ad, [
            de(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), n("div", Vd, [
            de(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), n("div", Fd, [
        de(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), n("div", Wd, [
        de(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), we = /* @__PURE__ */ J(Gd, [["__scopeId", "data-v-cc435e0e"]]), jd = { class: "loading-state" }, Hd = { class: "loading-message" }, Kd = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", jd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Hd, l(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ J(Kd, [["__scopeId", "data-v-ad8436c9"]]), qd = { class: "error-state" }, Jd = { class: "error-message" }, Yd = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, s) => (o(), n("div", qd, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Jd, l(t.message), 1),
      t.retry ? (o(), b(G, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ J(Yd, [["__scopeId", "data-v-5397be48"]]), Xd = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const r = s, { getWorkflows: g } = Se(), y = L([]), p = L(!1), v = L(null), i = L(""), u = L(!0), w = L(!1), h = L(!1), T = L(!1), M = L(null), _ = N(
      () => y.value.filter((V) => V.status === "broken")
    ), E = N(
      () => y.value.filter((V) => V.status === "new")
    ), k = N(
      () => y.value.filter((V) => V.status === "modified")
    ), C = N(
      () => y.value.filter((V) => V.status === "synced")
    ), P = N(() => {
      if (!i.value.trim()) return y.value;
      const V = i.value.toLowerCase();
      return y.value.filter((H) => H.name.toLowerCase().includes(V));
    }), O = N(
      () => _.value.filter(
        (V) => !i.value.trim() || V.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), D = N(
      () => E.value.filter(
        (V) => !i.value.trim() || V.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), K = N(
      () => k.value.filter(
        (V) => !i.value.trim() || V.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), I = N(
      () => C.value.filter(
        (V) => !i.value.trim() || V.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), x = N(
      () => w.value ? I.value : I.value.slice(0, 5)
    );
    async function z(V = !1) {
      p.value = !0, v.value = null;
      try {
        y.value = await g(V);
      } catch (H) {
        v.value = H instanceof Error ? H.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    d({ loadWorkflows: z });
    function S(V) {
      M.value = V, h.value = !0;
    }
    function $(V) {
      M.value = V, T.value = !0;
    }
    function U() {
      alert("Bulk resolution not yet implemented");
    }
    function A() {
      r("refresh");
    }
    function ee(V) {
      const H = [];
      return V.missing_nodes > 0 && H.push(`${V.missing_nodes} missing node${V.missing_nodes > 1 ? "s" : ""}`), V.missing_models > 0 && H.push(`${V.missing_models} missing model${V.missing_models > 1 ? "s" : ""}`), V.pending_downloads && V.pending_downloads > 0 && H.push(`${V.pending_downloads} pending download${V.pending_downloads > 1 ? "s" : ""}`), H.length > 0 ? H.join(", ") : "Has issues";
    }
    return be(z), (V, H) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), b(G, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...H[8] || (H[8] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          m(at, {
            modelValue: i.value,
            "onUpdate:modelValue": H[0] || (H[0] = (X) => i.value = X),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          p.value ? (o(), b(He, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), b(Ke, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            O.value.length ? (o(), b(ye, {
              key: 0,
              title: "BROKEN",
              count: O.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(O.value, (X) => (o(), b(we, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: a(() => [...H[9] || (H[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(l(X.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(ee(X)), 1)
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => $(X.name)
                    }, {
                      default: a(() => [...H[10] || (H[10] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(X.name)
                    }, {
                      default: a(() => [...H[11] || (H[11] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            D.value.length ? (o(), b(ye, {
              key: 1,
              title: "NEW",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(D.value, (X) => (o(), b(we, {
                  key: X.name,
                  status: "new"
                }, {
                  icon: a(() => [...H[12] || (H[12] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...H[13] || (H[13] = [
                    f("New", -1)
                  ])]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(X.name)
                    }, {
                      default: a(() => [...H[14] || (H[14] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            K.value.length ? (o(), b(ye, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(K.value, (X) => (o(), b(we, {
                  key: X.name,
                  status: "modified"
                }, {
                  icon: a(() => [...H[15] || (H[15] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...H[16] || (H[16] = [
                    f("Modified", -1)
                  ])]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(X.name)
                    }, {
                      default: a(() => [...H[17] || (H[17] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            I.value.length ? (o(), b(ye, {
              key: 3,
              title: "SYNCED",
              count: I.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: H[2] || (H[2] = (X) => u.value = X)
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(x.value, (X) => (o(), b(we, {
                  key: X.name,
                  status: "synced"
                }, {
                  icon: a(() => [...H[18] || (H[18] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...H[19] || (H[19] = [
                    f("Synced", -1)
                  ])]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(X.name)
                    }, {
                      default: a(() => [...H[20] || (H[20] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !w.value && I.value.length > 5 ? (o(), b(G, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: H[1] || (H[1] = (X) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + l(I.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            P.value.length ? c("", !0) : (o(), b(Oe, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && M.value ? (o(), b(sl, {
        key: 0,
        "workflow-name": M.value,
        onClose: H[3] || (H[3] = (X) => h.value = !1),
        onResolve: H[4] || (H[4] = (X) => $(M.value)),
        onRefresh: H[5] || (H[5] = (X) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      T.value && M.value ? (o(), b(Id, {
        key: 1,
        "workflow-name": M.value,
        onClose: H[6] || (H[6] = (X) => T.value = !1),
        onInstall: A,
        onRefresh: H[7] || (H[7] = (X) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Qd = /* @__PURE__ */ J(Xd, [["__scopeId", "data-v-af6b1cd7"]]), Zd = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: te(["summary-bar", t.variant])
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ J(Zd, [["__scopeId", "data-v-ccb7816e"]]), ec = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: r, getStatus: g } = Se(), y = L([]), p = L([]), v = L("production"), i = L(!1), u = L(null), w = L(""), h = L(!1);
    function T() {
      h.value = !1, s("navigate", "model-index");
    }
    const M = N(
      () => y.value.reduce((z, S) => z + (S.size || 0), 0)
    ), _ = N(() => {
      if (!w.value.trim()) return y.value;
      const z = w.value.toLowerCase();
      return y.value.filter((S) => S.filename.toLowerCase().includes(z));
    }), E = N(() => {
      if (!w.value.trim()) return p.value;
      const z = w.value.toLowerCase();
      return p.value.filter((S) => S.filename.toLowerCase().includes(z));
    }), k = N(
      () => _.value.filter((z) => z.type === "checkpoints")
    ), C = N(
      () => _.value.filter((z) => z.type === "loras")
    ), P = N(
      () => _.value.filter((z) => z.type !== "checkpoints" && z.type !== "loras")
    );
    function O(z) {
      if (!z) return "Unknown";
      const S = z / (1024 * 1024);
      return S >= 1024 ? `${(S / 1024).toFixed(1)} GB` : `${S.toFixed(0)} MB`;
    }
    function D(z) {
      s("navigate", "model-index");
    }
    function K(z) {
      s("navigate", "model-index");
    }
    function I(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function x() {
      i.value = !0, u.value = null;
      try {
        const z = await r();
        y.value = z, p.value = [];
        const S = await g();
        v.value = S.environment || "production";
      } catch (z) {
        u.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return be(x), (z, S) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = ($) => h.value = !0)
          })
        ]),
        search: a(() => [
          m(at, {
            modelValue: w.value,
            "onUpdate:modelValue": S[1] || (S[1] = ($) => w.value = $),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), b(He, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (o(), b(Ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            y.value.length ? (o(), b(lt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + l(y.value.length) + " models • " + l(O(M.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), b(ye, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(k.value, ($) => (o(), b(we, {
                  key: $.hash || $.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[3] || (S[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l($.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(O($.size)), 1)
                  ]),
                  details: a(() => [
                    m(ie, {
                      label: "Used by:",
                      value: ($.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(ie, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => D($.hash)
                    }, {
                      default: a(() => [...S[4] || (S[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            C.value.length ? (o(), b(ye, {
              key: 2,
              title: "LORAS",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(C.value, ($) => (o(), b(we, {
                  key: $.hash || $.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[5] || (S[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l($.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(O($.size)), 1)
                  ]),
                  details: a(() => [
                    m(ie, {
                      label: "Used by:",
                      value: ($.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(ie, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => D($.hash)
                    }, {
                      default: a(() => [...S[6] || (S[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            P.value.length ? (o(), b(ye, {
              key: 3,
              title: "OTHER",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(P.value, ($) => (o(), b(we, {
                  key: $.hash || $.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[7] || (S[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l($.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(O($.size)), 1)
                  ]),
                  details: a(() => [
                    m(ie, {
                      label: "Type:",
                      value: $.type
                    }, null, 8, ["value"]),
                    m(ie, {
                      label: "Used by:",
                      value: ($.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => D($.hash)
                    }, {
                      default: a(() => [...S[8] || (S[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            E.value.length ? (o(), b(ye, {
              key: 4,
              title: "MISSING",
              count: E.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(E.value, ($) => (o(), b(we, {
                  key: $.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...S[9] || (S[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(l($.filename), 1)
                  ]),
                  subtitle: a(() => [...S[10] || (S[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var U;
                    return [
                      m(ie, {
                        label: "Required by:",
                        value: ((U = $.workflow_names) == null ? void 0 : U.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => I($.filename)
                    }, {
                      default: a(() => [...S[11] || (S[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => K($.filename)
                    }, {
                      default: a(() => [...S[12] || (S[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !_.value.length && !E.value.length ? (o(), b(Oe, {
              key: 5,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: h.value,
        title: "About Environment Models",
        onClose: S[2] || (S[2] = ($) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            S[13] || (S[13] = f(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(v.value) + '"', 1),
            S[14] || (S[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          m(G, {
            variant: "primary",
            onClick: T
          }, {
            default: a(() => [...S[15] || (S[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tc = /* @__PURE__ */ J(ec, [["__scopeId", "data-v-72675609"]]), oc = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: d } = Se(), s = L([]), r = L(!1), g = L(null), y = L(""), p = L(!1), v = N(
      () => s.value.reduce((I, x) => I + (x.size_mb || x.size || 0), 0)
    ), i = N(() => {
      const I = /* @__PURE__ */ new Set();
      return s.value.forEach((x) => {
        x.used_in_environments && x.used_in_environments.length > 0 && x.used_in_environments.forEach((z) => I.add(z.env_name));
      }), I.size;
    }), u = N(() => {
      if (!y.value.trim()) return s.value;
      const I = y.value.toLowerCase();
      return s.value.filter((x) => {
        const z = x, S = x.sha256 || z.sha256_hash || "";
        return x.filename.toLowerCase().includes(I) || S.toLowerCase().includes(I);
      });
    }), w = N(
      () => u.value.filter((I) => I.type === "checkpoints")
    ), h = N(
      () => u.value.filter((I) => I.type === "loras")
    ), T = N(
      () => u.value.filter((I) => I.type !== "checkpoints" && I.type !== "loras")
    );
    function M(I) {
      return I ? I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB` : "Unknown";
    }
    function _(I) {
      const x = I, z = I.used_in_workflows || x.used_by || [];
      return !z || z.length === 0 ? "Not used" : `${z.length} workflow(s)`;
    }
    function E(I) {
      navigator.clipboard.writeText(I), alert("Hash copied to clipboard");
    }
    function k(I) {
      prompt("Enter model source URL:", I.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function C(I) {
      const x = I, z = I.used_in_workflows || x.used_by || [], S = z && z.length > 0 ? `

⚠ WARNING: This model is used by ${z.length} workflow(s):
${z.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${I.filename}?${S}

This will free ${M(x.size_mb || I.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function P() {
      alert("Scan for models not yet implemented");
    }
    function O() {
      alert("Change directory not yet implemented");
    }
    function D() {
      alert("Download new model not yet implemented");
    }
    async function K() {
      r.value = !0, g.value = null;
      try {
        s.value = await d(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", w.value), console.log("Filtered loras:", h.value), console.log("Filtered other:", T.value);
      } catch (I) {
        g.value = I instanceof Error ? I.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return be(K), (I, x) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: x[0] || (x[0] = (z) => p.value = !0)
          }, {
            actions: a(() => [
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: a(() => [...x[3] || (x[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: a(() => [...x[4] || (x[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: a(() => [...x[5] || (x[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
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
          m(at, {
            modelValue: y.value,
            "onUpdate:modelValue": x[1] || (x[1] = (z) => y.value = z),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), b(He, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), b(Ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            s.value.length ? (o(), b(lt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + l(s.value.length) + " models • " + l(M(v.value)) + " • Used in " + l(i.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            w.value.length ? (o(), b(ye, {
              key: 1,
              title: "CHECKPOINTS",
              count: w.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(w.value, (z) => (o(), b(we, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[6] || (x[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(M(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => {
                    var S, $;
                    return [
                      z.sha256 || z.sha256_hash ? (o(), b(ie, {
                        key: 0,
                        label: "SHA256:",
                        value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      m(ie, {
                        label: "Used in:",
                        value: _(z)
                      }, null, 8, ["value"]),
                      z.source_url || (S = z.sources) != null && S[0] ? (o(), b(ie, {
                        key: 1,
                        label: "Source URL:",
                        value: z.source_url || (($ = z.sources) == null ? void 0 : $[0])
                      }, null, 8, ["value"])) : (o(), b(ie, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...x[7] || (x[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => k(z)
                    }, {
                      default: a(() => [...x[8] || (x[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), b(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => E(z.sha256 || z.sha256_hash)
                    }, {
                      default: a(() => [...x[9] || (x[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (S) => C(z)
                    }, {
                      default: a(() => [...x[10] || (x[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            h.value.length ? (o(), b(ye, {
              key: 2,
              title: "LORAS",
              count: h.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(h.value, (z) => (o(), b(we, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[11] || (x[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(M(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => {
                    var S, $;
                    return [
                      z.sha256 || z.sha256_hash ? (o(), b(ie, {
                        key: 0,
                        label: "SHA256:",
                        value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      m(ie, {
                        label: "Used in:",
                        value: _(z)
                      }, null, 8, ["value"]),
                      z.source_url || (S = z.sources) != null && S[0] ? (o(), b(ie, {
                        key: 1,
                        label: "Source URL:",
                        value: z.source_url || (($ = z.sources) == null ? void 0 : $[0])
                      }, null, 8, ["value"])) : (o(), b(ie, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...x[12] || (x[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => k(z)
                    }, {
                      default: a(() => [...x[13] || (x[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), b(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => E(z.sha256 || z.sha256_hash)
                    }, {
                      default: a(() => [...x[14] || (x[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (S) => C(z)
                    }, {
                      default: a(() => [...x[15] || (x[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            T.value.length ? (o(), b(ye, {
              key: 3,
              title: "OTHER",
              count: T.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(T.value, (z) => (o(), b(we, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[16] || (x[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(M(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => [
                    m(ie, {
                      label: "Type:",
                      value: z.type
                    }, null, 8, ["value"]),
                    z.sha256 || z.sha256_hash ? (o(), b(ie, {
                      key: 0,
                      label: "SHA256:",
                      value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    m(ie, {
                      label: "Used in:",
                      value: _(z)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => k(z)
                    }, {
                      default: a(() => [...x[17] || (x[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), b(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => E(z.sha256 || z.sha256_hash)
                    }, {
                      default: a(() => [...x[18] || (x[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (S) => C(z)
                    }, {
                      default: a(() => [...x[19] || (x[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            u.value.length ? c("", !0) : (o(), b(Oe, {
              key: 4,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: x[2] || (x[2] = (z) => p.value = !1)
      }, {
        content: a(() => [...x[20] || (x[20] = [
          e("p", null, [
            f(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            f(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sc = /* @__PURE__ */ J(oc, [["__scopeId", "data-v-5a24af01"]]), nc = { class: "node-details" }, ac = { class: "status-row" }, lc = {
  key: 0,
  class: "detail-row"
}, ic = { class: "value" }, rc = { class: "detail-row" }, dc = { class: "value" }, cc = {
  key: 1,
  class: "detail-row"
}, uc = { class: "value mono" }, mc = {
  key: 2,
  class: "detail-row"
}, vc = ["href"], fc = {
  key: 3,
  class: "detail-row"
}, gc = { class: "value mono small" }, hc = { class: "detail-row" }, pc = {
  key: 0,
  class: "value"
}, yc = {
  key: 1,
  class: "workflow-list"
}, wc = /* @__PURE__ */ q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const s = t, r = d, g = N(() => s.node.installed ? s.node.tracked ? s.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), y = N(() => s.node.installed ? s.node.tracked ? s.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), p = N(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[s.node.source] || s.node.source);
    return (v, i) => (o(), b(ht, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: i[1] || (i[1] = (u) => r("close"))
    }, {
      body: a(() => [
        e("div", nc, [
          e("div", ac, [
            i[2] || (i[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", g.value])
            }, l(y.value), 3)
          ]),
          t.node.version ? (o(), n("div", lc, [
            i[3] || (i[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", ic, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : c("", !0),
          e("div", rc, [
            i[4] || (i[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", dc, l(p.value), 1)
          ]),
          t.node.registry_id ? (o(), n("div", cc, [
            i[5] || (i[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", uc, l(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), n("div", mc, [
            i[7] || (i[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              f(l(t.node.repository) + " ", 1),
              i[6] || (i[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, vc)
          ])) : c("", !0),
          t.node.download_url ? (o(), n("div", fc, [
            i[8] || (i[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", gc, l(t.node.download_url), 1)
          ])) : c("", !0),
          i[10] || (i[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", hc, [
            i[9] || (i[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), n("span", pc, " Not used in any workflows ")) : (o(), n("div", yc, [
              (o(!0), n(F, null, Z(t.node.used_in_workflows, (u) => (o(), n("span", {
                key: u,
                class: "workflow-tag"
              }, l(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: a(() => [
        m(re, {
          variant: "secondary",
          onClick: i[0] || (i[0] = (u) => r("close"))
        }, {
          default: a(() => [...i[11] || (i[11] = [
            f(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), kc = /* @__PURE__ */ J(wc, [["__scopeId", "data-v-b342f626"]]), bc = { key: 0 }, _c = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, $c = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Cc = /* @__PURE__ */ q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: d }) {
    const s = d, { getNodes: r, trackNodeAsDev: g, installNode: y, uninstallNode: p } = Se(), v = L({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), i = L(!1), u = L(null), w = L(""), h = L(!1), T = L(null), M = N(() => {
      if (!w.value.trim()) return v.value.nodes;
      const S = w.value.toLowerCase();
      return v.value.nodes.filter(
        ($) => {
          var U, A;
          return $.name.toLowerCase().includes(S) || ((U = $.description) == null ? void 0 : U.toLowerCase().includes(S)) || ((A = $.repository) == null ? void 0 : A.toLowerCase().includes(S));
        }
      );
    }), _ = N(
      () => M.value.filter((S) => S.installed && S.tracked)
    ), E = N(
      () => M.value.filter((S) => !S.installed && S.tracked)
    ), k = N(
      () => M.value.filter((S) => S.installed && !S.tracked)
    );
    function C(S) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[S] || S;
    }
    function P(S) {
      return !S.used_in_workflows || S.used_in_workflows.length === 0 ? "Not used in any workflows" : S.used_in_workflows.length === 1 ? S.used_in_workflows[0] : `${S.used_in_workflows.length} workflows`;
    }
    function O(S) {
      T.value = S;
    }
    function D() {
      s("open-node-manager");
    }
    async function K(S) {
      if (confirm(`Track "${S}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          i.value = !0;
          const $ = await g(S);
          $.status === "success" ? (alert(`Node "${S}" is now tracked as development!`), await z()) : alert(`Failed to track node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error tracking node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function I(S) {
      if (confirm(`Remove untracked node "${S}"?

This will delete the node directory from custom_nodes/.`))
        try {
          i.value = !0;
          const $ = await p(S);
          $.status === "success" ? (alert(`Node "${S}" removed!`), await z()) : alert(`Failed to remove node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error removing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function x(S) {
      if (confirm(`Install node "${S}"?

This will download and install the node.`))
        try {
          i.value = !0;
          const $ = await y(S);
          $.status === "success" ? (alert(`Node "${S}" installed successfully!`), await z()) : alert(`Failed to install node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error installing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function z() {
      i.value = !0, u.value = null;
      try {
        v.value = await r();
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to load nodes";
      } finally {
        i.value = !1;
      }
    }
    return be(z), (S, $) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (U) => h.value = !0)
          }, {
            actions: a(() => [
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: a(() => [...$[5] || ($[5] = [
                  f(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          m(at, {
            modelValue: w.value,
            "onUpdate:modelValue": $[1] || ($[1] = (U) => w.value = U),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), b(He, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (o(), b(Ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            v.value.total_count ? (o(), b(lt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(l(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (o(), n(F, { key: 0 }, [
                  f(" • " + l(v.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                v.value.untracked_count ? (o(), n(F, { key: 1 }, [
                  f(" • " + l(v.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), b(ye, {
              key: 1,
              title: "UNTRACKED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(k.value, (U) => (o(), b(we, {
                  key: U.name,
                  status: "warning"
                }, {
                  icon: a(() => [...$[6] || ($[6] = [
                    f("?", -1)
                  ])]),
                  title: a(() => [
                    f(l(U.name), 1)
                  ]),
                  subtitle: a(() => [...$[7] || ($[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: a(() => [
                    m(ie, {
                      label: "Used by:",
                      value: P(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => O(U)
                    }, {
                      default: a(() => [...$[8] || ($[8] = [
                        f(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => K(U.name)
                    }, {
                      default: a(() => [...$[9] || ($[9] = [
                        f(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => I(U.name)
                    }, {
                      default: a(() => [...$[10] || ($[10] = [
                        f(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            _.value.length ? (o(), b(ye, {
              key: 2,
              title: "INSTALLED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(_.value, (U) => (o(), b(we, {
                  key: U.name,
                  status: "synced"
                }, {
                  icon: a(() => [
                    f(l(U.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: a(() => [
                    f(l(U.name), 1)
                  ]),
                  subtitle: a(() => [
                    U.version ? (o(), n("span", bc, l(U.source === "development" ? "" : "v") + l(U.version), 1)) : (o(), n("span", _c, "version unknown")),
                    e("span", $c, " • " + l(C(U.source)), 1)
                  ]),
                  details: a(() => [
                    m(ie, {
                      label: "Used by:",
                      value: P(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => O(U)
                    }, {
                      default: a(() => [...$[11] || ($[11] = [
                        f(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: D
                    }, {
                      default: a(() => [...$[12] || ($[12] = [
                        f(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            E.value.length ? (o(), b(ye, {
              key: 3,
              title: "MISSING",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(E.value, (U) => (o(), b(we, {
                  key: U.name,
                  status: "missing"
                }, {
                  icon: a(() => [...$[13] || ($[13] = [
                    f("!", -1)
                  ])]),
                  title: a(() => [
                    f(l(U.name), 1)
                  ]),
                  subtitle: a(() => [...$[14] || ($[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: a(() => [
                    m(ie, {
                      label: "Required by:",
                      value: P(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => O(U)
                    }, {
                      default: a(() => [...$[15] || ($[15] = [
                        f(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => x(U.name)
                    }, {
                      default: a(() => [...$[16] || ($[16] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !_.value.length && !E.value.length && !k.value.length ? (o(), b(Oe, {
              key: 4,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: $[3] || ($[3] = (U) => h.value = !1)
      }, {
        content: a(() => [...$[17] || ($[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            f(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            f(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            f(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: a(() => [
          m(G, {
            variant: "primary",
            onClick: $[2] || ($[2] = (U) => h.value = !1)
          }, {
            default: a(() => [...$[18] || ($[18] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      T.value ? (o(), b(kc, {
        key: 0,
        node: T.value,
        onClose: $[4] || ($[4] = (U) => T.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), xc = /* @__PURE__ */ J(Cc, [["__scopeId", "data-v-4ac1465a"]]), Sc = { class: "remote-url-display" }, Ic = ["title"], Ec = ["title"], zc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Mc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Lc = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = L(!1), r = N(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), p = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${p}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(d.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, p) => (o(), n("div", Sc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, Ic),
      e("button", {
        class: te(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Mc, [...p[1] || (p[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", zc, [...p[0] || (p[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Ec)
    ]));
  }
}), Ut = /* @__PURE__ */ J(Lc, [["__scopeId", "data-v-7768a58d"]]), Tc = { class: "remote-title" }, Rc = {
  key: 0,
  class: "default-badge"
}, Dc = {
  key: 1,
  class: "sync-badge"
}, Nc = {
  key: 0,
  class: "ahead"
}, Uc = {
  key: 1,
  class: "behind"
}, Oc = {
  key: 0,
  class: "tracking-info"
}, Bc = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, r = N(() => s.fetchingRemote === s.remote.name), g = N(() => s.remote.is_default), y = N(() => !!s.trackingBranch);
    function p(v) {
      const i = new Date(v), w = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), h = Math.floor(w / 6e4);
      if (h < 1) return "Just now";
      if (h < 60) return `${h}m ago`;
      const T = Math.floor(h / 60);
      if (T < 24) return `${T}h ago`;
      const M = Math.floor(T / 24);
      return M < 7 ? `${M}d ago` : i.toLocaleDateString();
    }
    return (v, i) => (o(), b(we, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        f(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", Tc, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), n("span", Rc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", Dc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", Nc, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", Uc, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", Oc, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var u;
        return [
          m(ie, { label: "Fetch:" }, {
            default: a(() => [
              m(Ut, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), b(ie, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              m(Ut, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (o(), b(ie, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(p(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        m(G, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: i[0] || (i[0] = (u) => v.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...i[3] || (i[3] = [
            f(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        m(G, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (u) => v.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...i[4] || (i[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), b(G, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: i[2] || (i[2] = (u) => v.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...i[5] || (i[5] = [
            f(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Pc = /* @__PURE__ */ J(Bc, [["__scopeId", "data-v-17362e45"]]), Ac = ["for"], Vc = {
  key: 0,
  class: "base-form-field-required"
}, Fc = { class: "base-form-field-input" }, Wc = {
  key: 1,
  class: "base-form-field-error"
}, Gc = {
  key: 2,
  class: "base-form-field-hint"
}, jc = /* @__PURE__ */ q({
  __name: "BaseFormField",
  props: {
    label: {},
    error: {},
    hint: {},
    required: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !0 },
    id: {}
  },
  setup(t) {
    const d = t, s = N(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, g) => (o(), n("div", {
      class: te(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        f(l(t.label) + " ", 1),
        t.required ? (o(), n("span", Vc, "*")) : c("", !0)
      ], 8, Ac)) : c("", !0),
      e("div", Fc, [
        de(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", Wc, l(t.error), 1)) : t.hint ? (o(), n("span", Gc, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ J(jc, [["__scopeId", "data-v-9a1cf296"]]), Hc = { class: "remote-form" }, Kc = { class: "form-header" }, qc = { class: "form-body" }, Jc = {
  key: 0,
  class: "form-error"
}, Yc = { class: "form-actions" }, Xc = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, r = d, g = L({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = L(!1), p = L(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const v = N(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!v.value || y.value)) {
        p.value = null, y.value = !0;
        try {
          r("submit", g.value);
        } catch (u) {
          p.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (u, w) => (o(), n("div", Hc, [
      e("div", Kc, [
        m(Ee, null, {
          default: a(() => [
            f(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", qc, [
        m($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            m(qe, {
              modelValue: g.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (h) => g.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        m($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            m(qe, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (h) => g.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            m(qe, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (h) => g.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p.value ? (o(), n("div", Jc, l(p.value), 1)) : c("", !0)
      ]),
      e("div", Yc, [
        m(G, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: y.value,
          onClick: i
        }, {
          default: a(() => [
            f(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        m(G, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (h) => u.$emit("cancel"))
        }, {
          default: a(() => [...w[4] || (w[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Qc = /* @__PURE__ */ J(Xc, [["__scopeId", "data-v-56021b18"]]), Zc = { key: 0 }, eu = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: p
    } = Se(), v = L([]), i = L(null), u = L({}), w = L(!1), h = L(null), T = L(""), M = L(!1), _ = L(null), E = L(!1), k = L("add"), C = L({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), P = N(() => {
      if (!T.value.trim()) return v.value;
      const A = T.value.toLowerCase();
      return v.value.filter(
        (ee) => ee.name.toLowerCase().includes(A) || ee.fetch_url.toLowerCase().includes(A) || ee.push_url.toLowerCase().includes(A)
      );
    });
    function O(A) {
      var ee;
      return ((ee = i.value) == null ? void 0 : ee.remote) === A;
    }
    async function D() {
      w.value = !0, h.value = null;
      try {
        const A = await d();
        v.value = A.remotes, i.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (ee) => {
            const V = await p(ee.name);
            V && (u.value[ee.name] = V);
          })
        );
      } catch (A) {
        h.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        w.value = !1;
      }
    }
    function K() {
      k.value = "add", C.value = { name: "", fetchUrl: "", pushUrl: "" }, E.value = !0;
    }
    function I(A) {
      const ee = v.value.find((V) => V.name === A);
      ee && (k.value = "edit", C.value = {
        name: ee.name,
        fetchUrl: ee.fetch_url,
        pushUrl: ee.push_url
      }, E.value = !0);
    }
    async function x(A) {
      try {
        k.value === "add" ? await s(A.name, A.fetchUrl) : await g(A.name, A.fetchUrl, A.pushUrl || void 0), E.value = !1, await D();
      } catch (ee) {
        h.value = ee instanceof Error ? ee.message : "Operation failed";
      }
    }
    function z() {
      E.value = !1, C.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function S(A) {
      _.value = A;
      try {
        await y(A);
        const ee = await p(A);
        ee && (u.value[A] = ee);
      } catch (ee) {
        h.value = ee instanceof Error ? ee.message : "Fetch failed";
      } finally {
        _.value = null;
      }
    }
    async function $(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await r(A), await D();
        } catch (ee) {
          h.value = ee instanceof Error ? ee.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return be(D), (A, ee) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (V) => M.value = !0)
          }, {
            actions: a(() => [
              E.value ? c("", !0) : (o(), b(G, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: K
              }, {
                default: a(() => [...ee[3] || (ee[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          E.value ? c("", !0) : (o(), b(at, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (V) => T.value = V),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          w.value ? (o(), b(He, {
            key: 0,
            message: "Loading remotes..."
          })) : h.value ? (o(), b(Ke, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            E.value ? (o(), b(Qc, {
              key: 0,
              mode: k.value,
              "remote-name": C.value.name,
              "fetch-url": C.value.fetchUrl,
              "push-url": C.value.pushUrl,
              onSubmit: x,
              onCancel: z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            v.value.length && !E.value ? (o(), b(lt, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + l(v.value.length) + " remote" + l(v.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), n("span", Zc, " • Tracking: " + l(i.value.remote) + "/" + l(i.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            P.value.length && !E.value ? (o(), b(ye, {
              key: 2,
              title: "REMOTES",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(P.value, (V) => {
                  var H;
                  return o(), b(Pc, {
                    key: V.name,
                    remote: V,
                    "sync-status": u.value[V.name],
                    "tracking-branch": O(V.name) ? (H = i.value) == null ? void 0 : H.branch : void 0,
                    "fetching-remote": _.value,
                    onFetch: S,
                    onEdit: I,
                    onRemove: $
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !P.value.length && !E.value ? (o(), b(Oe, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                m(G, {
                  variant: "primary",
                  onClick: K
                }, {
                  default: a(() => [...ee[4] || (ee[4] = [
                    f(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: M.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (V) => M.value = !1)
      }, {
        content: a(() => [...ee[5] || (ee[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            f(" The "),
            e("strong", null, '"origin"'),
            f(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          m(G, {
            variant: "link",
            onClick: U
          }, {
            default: a(() => [...ee[6] || (ee[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tu = /* @__PURE__ */ J(eu, [["__scopeId", "data-v-a75719bb"]]), ou = { class: "setting-info" }, su = { class: "setting-label" }, nu = {
  key: 0,
  class: "required-marker"
}, au = {
  key: 0,
  class: "setting-description"
}, lu = { class: "setting-control" }, iu = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: te(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", ou, [
        e("div", su, [
          f(l(t.label) + " ", 1),
          t.required ? (o(), n("span", nu, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", au, l(t.description), 1)) : c("", !0)
      ]),
      e("div", lu, [
        de(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), We = /* @__PURE__ */ J(iu, [["__scopeId", "data-v-cb5d236c"]]), ru = { class: "toggle" }, du = ["checked", "disabled"], cu = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", ru, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, du),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), et = /* @__PURE__ */ J(cu, [["__scopeId", "data-v-71c0f550"]]), uu = { class: "settings-section" }, mu = { class: "path-setting" }, vu = { class: "path-value" }, fu = { class: "path-setting" }, gu = { class: "path-value" }, hu = { class: "settings-section" }, pu = { class: "settings-section" }, yu = { class: "settings-section" }, wu = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = Se(), r = L(!1), g = L(null), y = L(null), p = L(null), v = L(null), i = L(""), u = L(""), w = L(!0), h = L(!0), T = L(!1), M = N(() => v.value ? i.value !== (v.value.civitai_api_key || "") : !1);
    async function _() {
      r.value = !0, g.value = null;
      try {
        p.value = await d(), v.value = { ...p.value }, i.value = p.value.civitai_api_key || "", u.value = p.value.huggingface_token || "", w.value = p.value.auto_sync_models, h.value = p.value.confirm_destructive;
        const P = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = P === "true";
      } catch (P) {
        g.value = P instanceof Error ? P.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function E() {
      var P;
      y.value = null;
      try {
        const O = {};
        i.value !== (((P = v.value) == null ? void 0 : P.civitai_api_key) || "") && (O.civitai_api_key = i.value || null), await s(O), await _(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (O) {
        y.value = {
          type: "error",
          message: O instanceof Error ? O.message : "Failed to save settings"
        };
      }
    }
    function k() {
      v.value && (i.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", w.value = v.value.auto_sync_models, h.value = v.value.confirm_destructive, y.value = null);
    }
    function C(P) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(P)), console.log("[ComfyGit] Auto-refresh setting saved:", P);
    }
    return be(_), (P, O) => (o(), b(Ce, null, {
      header: a(() => [
        m(xe, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            m(G, {
              variant: "primary",
              size: "sm",
              disabled: !M.value,
              onClick: E
            }, {
              default: a(() => [...O[5] || (O[5] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            M.value ? (o(), b(G, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...O[6] || (O[6] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (o(), b(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), b(Ke, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: _
        }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
          m(ye, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var D, K;
              return [
                e("div", uu, [
                  e("div", mu, [
                    O[7] || (O[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    O[8] || (O[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", vu, l(((D = p.value) == null ? void 0 : D.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", fu, [
                    O[9] || (O[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    O[10] || (O[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", gu, l(((K = p.value) == null ? void 0 : K.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          m(ye, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", hu, [
                m(We, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    m(gt, {
                      modelValue: i.value,
                      "onUpdate:modelValue": O[0] || (O[0] = (D) => i.value = D),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(We, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(gt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": O[1] || (O[1] = (D) => u.value = D),
                      type: "password",
                      placeholder: "Not yet supported",
                      disabled: "",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          m(ye, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", pu, [
                m(We, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    m(et, {
                      modelValue: T.value,
                      "onUpdate:modelValue": [
                        O[2] || (O[2] = (D) => T.value = D),
                        C
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          m(ye, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", yu, [
                m(We, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(et, {
                      modelValue: w.value,
                      "onUpdate:modelValue": O[3] || (O[3] = (D) => w.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(We, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(et, {
                      modelValue: h.value,
                      "onUpdate:modelValue": O[4] || (O[4] = (D) => h.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), b(lt, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: tt({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), ku = /* @__PURE__ */ J(wu, [["__scopeId", "data-v-7861bd35"]]), bu = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = Se(), s = L([]), r = L(!1), g = L(null), y = L(!1), p = L(null), v = N(() => s.value.length === 0 ? [] : s.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function i() {
      r.value = !0, g.value = null;
      try {
        s.value = await d(void 0, 500);
      } catch (u) {
        g.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var u;
          (u = p.value) != null && u.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(i), (u, w) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (h) => y.value = !0)
          }, {
            actions: a(() => [
              m(G, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                disabled: r.value
              }, {
                default: a(() => [
                  f(l(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          r.value ? (o(), b(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), b(Ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            s.value.length === 0 ? (o(), b(Oe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (o(!0), n(F, null, Z(v.value, (h, T) => (o(), n("div", {
                key: T,
                class: te(`log-line log-level-${h.level.toLowerCase()}`)
              }, l(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: w[2] || (w[2] = (h) => y.value = !1)
      }, {
        content: a(() => [...w[3] || (w[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            f(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            f(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          m(G, {
            variant: "primary",
            onClick: w[1] || (w[1] = (h) => y.value = !1)
          }, {
            default: a(() => [...w[4] || (w[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _u = /* @__PURE__ */ J(bu, [["__scopeId", "data-v-39f6a756"]]), $u = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = Se(), r = L([]), g = L(!1), y = L(null), p = L(!1), v = L("production"), i = L(null), u = N(() => r.value.length === 0 ? [] : r.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function w() {
      g.value = !0, y.value = null;
      try {
        r.value = await d(void 0, 500);
        try {
          const h = await s();
          v.value = h.environment || "production";
        } catch {
        }
      } catch (h) {
        y.value = h instanceof Error ? h.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var h;
          (h = i.value) != null && h.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(w), (h, T) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (M) => p.value = !0)
          }, {
            actions: a(() => [
              m(G, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: g.value
              }, {
                default: a(() => [
                  f(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), b(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), b(Ke, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            r.value.length === 0 ? (o(), b(Oe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), n(F, null, Z(u.value, (M, _) => (o(), n("div", {
                key: _,
                class: te(`log-line log-level-${M.level.toLowerCase()}`)
              }, l(M.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: p.value,
        title: "About Environment Logs",
        onClose: T[2] || (T[2] = (M) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            T[3] || (T[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(v.value), 1),
            T[4] || (T[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          T[5] || (T[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            f(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            f(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1)),
          T[6] || (T[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          m(G, {
            variant: "primary",
            onClick: T[1] || (T[1] = (M) => p.value = !1)
          }, {
            default: a(() => [...T[7] || (T[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cu = /* @__PURE__ */ J($u, [["__scopeId", "data-v-4f1e6f72"]]), xu = { class: "env-title" }, Su = {
  key: 0,
  class: "current-badge"
}, Iu = {
  key: 0,
  class: "branch-info"
}, Eu = /* @__PURE__ */ q({
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
  setup(t) {
    return (d, s) => (o(), b(we, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        f(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", xu, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Su, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Iu, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        m(ie, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        m(ie, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        m(ie, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), b(ie, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        de(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), zu = /* @__PURE__ */ J(Eu, [["__scopeId", "data-v-5238e57c"]]), Mu = {
  key: 0,
  class: "create-form"
}, Lu = { class: "create-form__header" }, Tu = { class: "create-form__body" }, Ru = { class: "create-form__actions" }, Du = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Nu = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: r } = Se(), g = L([]), y = L(!1), p = L(null), v = L(""), i = L(!1), u = L(!1), w = L(""), h = N(
      () => g.value.find((O) => O.is_current)
    ), T = N(() => {
      if (!v.value.trim()) return g.value;
      const O = v.value.toLowerCase();
      return g.value.filter(
        (D) => {
          var K;
          return D.name.toLowerCase().includes(O) || ((K = D.current_branch) == null ? void 0 : K.toLowerCase().includes(O));
        }
      );
    });
    function M(O) {
      if (!O) return "";
      try {
        const D = new Date(O), I = (/* @__PURE__ */ new Date()).getTime() - D.getTime(), x = Math.floor(I / 6e4), z = Math.floor(I / 36e5), S = Math.floor(I / 864e5);
        return x < 1 ? "just now" : x < 60 ? `${x} ${x === 1 ? "minute" : "minutes"} ago` : z < 24 ? `${z} ${z === 1 ? "hour" : "hours"} ago` : S < 30 ? `${S} ${S === 1 ? "day" : "days"} ago` : D.toLocaleDateString();
      } catch {
        return O;
      }
    }
    function _() {
      const O = w.value.trim();
      O && (s("create", O), w.value = "", u.value = !1);
    }
    function E() {
      w.value = "", u.value = !1;
    }
    function k(O) {
      s("viewDetails", O);
    }
    function C(O) {
      confirm(`Delete environment "${O}"?

This action cannot be undone.`) && s("delete", O);
    }
    async function P() {
      y.value = !0, p.value = null;
      try {
        g.value = await r();
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return be(P), (O, D) => {
      const K = io("SectionGroup");
      return o(), n(F, null, [
        m(Ce, null, {
          header: a(() => [
            m(xe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: D[1] || (D[1] = (I) => i.value = !0)
            }, {
              actions: a(() => [
                m(G, {
                  variant: "ghost",
                  size: "sm",
                  onClick: D[0] || (D[0] = (I) => u.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...D[7] || (D[7] = [
                    e("svg", {
                      width: "14",
                      height: "14",
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
                  ])]),
                  _: 1
                }),
                m(G, {
                  variant: "ghost",
                  size: "sm",
                  onClick: P,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...D[8] || (D[8] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            m(at, {
              modelValue: v.value,
              "onUpdate:modelValue": D[2] || (D[2] = (I) => v.value = I),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), b(He, {
              key: 0,
              message: "Loading environments..."
            })) : p.value ? (o(), b(Ke, {
              key: 1,
              message: p.value,
              retry: !0,
              onRetry: P
            }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
              u.value ? (o(), n("div", Mu, [
                e("div", Lu, [
                  D[10] || (D[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  m(G, {
                    variant: "ghost",
                    size: "xs",
                    onClick: E
                  }, {
                    default: a(() => [...D[9] || (D[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Tu, [
                  m(gt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": D[3] || (D[3] = (I) => w.value = I),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ge(_, ["enter"]),
                      Ge(E, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Ru, [
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: _,
                      disabled: !w.value.trim()
                    }, {
                      default: a(() => [...D[11] || (D[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: E
                    }, {
                      default: a(() => [...D[12] || (D[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), b(lt, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  f(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  h.value ? (o(), n(F, { key: 0 }, [
                    D[13] || (D[13] = f(" • Current: ", -1)),
                    e("strong", null, l(h.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              T.value.length ? (o(), b(K, {
                key: 2,
                title: "ENVIRONMENTS",
                count: T.value.length
              }, {
                default: a(() => [
                  (o(!0), n(F, null, Z(T.value, (I) => (o(), b(zu, {
                    key: I.name,
                    "environment-name": I.name,
                    "is-current": I.is_current,
                    "current-branch": I.current_branch,
                    "workflow-count": I.workflow_count,
                    "node-count": I.node_count,
                    "model-count": I.model_count,
                    "last-used": M(I.last_used),
                    "show-last-used": !!I.last_used
                  }, {
                    actions: a(() => [
                      I.is_current ? c("", !0) : (o(), b(G, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (x) => O.$emit("switch", I.name)
                      }, {
                        default: a(() => [...D[14] || (D[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      m(G, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (x) => k(I.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...D[15] || (D[15] = [
                          e("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            e("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            e("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !I.is_current && g.value.length > 1 ? (o(), b(G, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (x) => C(I.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", Du, [...D[16] || (D[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : c("", !0),
              T.value.length ? c("", !0) : (o(), b(Oe, {
                key: 3,
                icon: "🌍",
                message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
              }, Vt({ _: 2 }, [
                v.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    m(G, {
                      variant: "primary",
                      onClick: D[4] || (D[4] = (I) => u.value = !0)
                    }, {
                      default: a(() => [...D[17] || (D[17] = [
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
        m(je, {
          show: i.value,
          title: "About Environments",
          onClose: D[6] || (D[6] = (I) => i.value = !1)
        }, {
          content: a(() => [...D[18] || (D[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              f(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
            ], -1),
            e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
              e("strong", null, "Use cases:")
            ], -1),
            e("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
              e("li", null, "Separate production and development workflows"),
              e("li", null, "Test different node configurations"),
              e("li", null, "Experiment with new models safely"),
              e("li", null, "Maintain multiple project versions")
            ], -1)
          ])]),
          actions: a(() => [
            m(G, {
              variant: "secondary",
              onClick: D[5] || (D[5] = (I) => i.value = !1)
            }, {
              default: a(() => [...D[19] || (D[19] = [
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
}), Uu = /* @__PURE__ */ J(Nu, [["__scopeId", "data-v-97d6527d"]]), Ou = { class: "file-path" }, Bu = { class: "file-path-text" }, Pu = ["title"], Au = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = L(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), n("div", Ou, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Bu, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(s.value ? "✓" : "📋"), 9, Pu)) : c("", !0)
    ]));
  }
}), Vu = /* @__PURE__ */ J(Au, [["__scopeId", "data-v-f0982173"]]), Fu = { class: "output-path-input" }, Wu = { class: "export-actions" }, Gu = {
  key: 1,
  class: "export-warning"
}, ju = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = Se(), s = L(""), r = L(!1), g = L(null), y = L(!1);
    async function p() {
      r.value = !0, g.value = null;
      try {
        const i = await d(s.value || void 0);
        g.value = i;
      } catch (i) {
        g.value = {
          status: "error",
          message: i instanceof Error ? i.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function v() {
      var i;
      if ((i = g.value) != null && i.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (i, u) => (o(), n(F, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              m(G, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (w) => y.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...u[5] || (u[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    e("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          m(ye, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              m(we, { status: "synced" }, {
                icon: a(() => [...u[6] || (u[6] = [
                  f("📦", -1)
                ])]),
                title: a(() => [...u[7] || (u[7] = [
                  f("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...u[8] || (u[8] = [
                  f(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  m(ie, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  m(ie, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  m(ie, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  m(ie, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(ye, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              m(we, { status: "synced" }, {
                icon: a(() => [...u[9] || (u[9] = [
                  f("📁", -1)
                ])]),
                title: a(() => [...u[10] || (u[10] = [
                  f("Output Destination", -1)
                ])]),
                subtitle: a(() => [...u[11] || (u[11] = [
                  f(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", Fu, [
                    m(gt, {
                      modelValue: s.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (w) => s.value = w),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(ye, { title: "EXPORT" }, {
            default: a(() => [
              e("div", Wu, [
                m(G, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: p
                }, {
                  default: a(() => [
                    u[12] || (u[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    f(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), b(G, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: u[2] || (u[2] = (w) => s.value = "")
                }, {
                  default: a(() => [...u[13] || (u[13] = [
                    f(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), b(ye, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              m(we, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: a(() => [
                  f(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  f(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  f(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    m(ie, { label: "Saved to:" }, {
                      default: a(() => [
                        m(Vu, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), b(ie, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), n("div", Gu, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: v
                    }, {
                      default: a(() => [...u[15] || (u[15] = [
                        f(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    m(G, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (w) => g.value = null)
                    }, {
                      default: a(() => [...u[16] || (u[16] = [
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
          })) : c("", !0)
        ]),
        _: 1
      }),
      m(je, {
        show: y.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (w) => y.value = !1)
      }, {
        content: a(() => [...u[17] || (u[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            f(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Hu = /* @__PURE__ */ J(ju, [["__scopeId", "data-v-1777a9d5"]]), Ku = { class: "file-input-wrapper" }, qu = ["accept", "multiple", "disabled"], Ju = /* @__PURE__ */ q({
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
  setup(t, { expose: d, emit: s }) {
    const r = s, g = L(null);
    function y() {
      var v;
      (v = g.value) == null || v.click();
    }
    function p(v) {
      const i = v.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return d({
      triggerInput: y
    }), (v, i) => (o(), n("div", Ku, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: p
      }, null, 40, qu),
      m(G, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          de(v.$slots, "default", {}, () => [
            i[0] || (i[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            f(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Yu = /* @__PURE__ */ J(Ju, [["__scopeId", "data-v-cd192091"]]), Xu = {
  key: 0,
  class: "drop-zone-empty"
}, Qu = { class: "drop-zone-text" }, Zu = { class: "drop-zone-primary" }, em = { class: "drop-zone-secondary" }, tm = { class: "drop-zone-actions" }, om = {
  key: 1,
  class: "drop-zone-file"
}, sm = { class: "file-info" }, nm = { class: "file-details" }, am = { class: "file-name" }, lm = { class: "file-size" }, im = /* @__PURE__ */ q({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: d }) {
    const s = d, r = L(!1), g = L(null), y = L(0), p = N(() => g.value !== null), v = N(() => {
      var k;
      return ((k = g.value) == null ? void 0 : k.name) || "";
    }), i = N(() => {
      if (!g.value) return "";
      const k = g.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var C;
      y.value++, (C = k.dataTransfer) != null && C.types.includes("Files") && (r.value = !0);
    }
    function w(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function h() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function T(k) {
      var P;
      y.value = 0, r.value = !1;
      const C = (P = k.dataTransfer) == null ? void 0 : P.files;
      C && C.length > 0 && _(C[0]);
    }
    function M(k) {
      k.length > 0 && _(k[0]);
    }
    function _(k) {
      g.value = k, s("fileSelected", k);
    }
    function E() {
      g.value = null, s("clear");
    }
    return (k, C) => (o(), n("div", {
      class: te(["file-drop-zone", { "drop-active": r.value, "has-file": p.value }]),
      onDragenter: ke(u, ["prevent"]),
      onDragover: ke(w, ["prevent"]),
      onDragleave: ke(h, ["prevent"]),
      onDrop: ke(T, ["prevent"])
    }, [
      p.value ? (o(), n("div", om, [
        e("div", sm, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", nm, [
            e("div", am, l(v.value), 1),
            e("div", lm, l(i.value), 1)
          ])
        ]),
        m(G, {
          variant: "ghost",
          size: "xs",
          onClick: E,
          title: "Remove file"
        }, {
          default: a(() => [...C[2] || (C[2] = [
            e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (o(), n("div", Xu, [
        C[0] || (C[0] = e("div", { class: "drop-zone-icon" }, [
          e("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            e("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        e("div", Qu, [
          e("p", Zu, l(t.primaryText), 1),
          e("p", em, l(t.secondaryText), 1)
        ]),
        e("div", tm, [
          m(Yu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: M
          }, {
            default: a(() => [
              f(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), rm = /* @__PURE__ */ J(im, [["__scopeId", "data-v-e00abbca"]]), dm = { class: "import-preview" }, cm = { class: "preview-header" }, um = {
  key: 0,
  class: "source-env"
}, mm = { class: "preview-content" }, vm = { class: "preview-section" }, fm = { class: "section-header" }, gm = { class: "section-info" }, hm = { class: "section-count" }, pm = {
  key: 0,
  class: "item-list"
}, ym = { class: "item-name" }, wm = {
  key: 0,
  class: "item-more"
}, km = { class: "preview-section" }, bm = { class: "section-header" }, _m = { class: "section-info" }, $m = { class: "section-count" }, Cm = {
  key: 0,
  class: "item-list"
}, xm = { class: "item-details" }, Sm = { class: "item-name" }, Im = { class: "item-meta" }, Em = {
  key: 0,
  class: "item-more"
}, zm = { class: "preview-section" }, Mm = { class: "section-header" }, Lm = { class: "section-info" }, Tm = { class: "section-count" }, Rm = {
  key: 0,
  class: "item-list"
}, Dm = { class: "item-name" }, Nm = {
  key: 0,
  class: "item-more"
}, Um = {
  key: 0,
  class: "preview-section"
}, Om = { class: "git-info" }, Bm = /* @__PURE__ */ q({
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
  setup(t) {
    const d = t, s = N(() => d.workflows.length), r = N(() => d.models.length), g = N(() => d.nodes.length);
    function y(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, v) => (o(), n("div", dm, [
      e("div", cm, [
        m(Ee, null, {
          default: a(() => [...v[0] || (v[0] = [
            f("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", um, [
          v[1] || (v[1] = f(" From: ", -1)),
          m(St, null, {
            default: a(() => [
              f(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", mm, [
        e("div", vm, [
          e("div", fm, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", gm, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", hm, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", pm, [
            (o(!0), n(F, null, Z(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ym, l(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", wm, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", km, [
          e("div", bm, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", _m, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", $m, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Cm, [
            (o(!0), n(F, null, Z(t.models.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", xm, [
                e("span", Sm, l(i.filename), 1),
                e("span", Im, l(y(i.size)) + " • " + l(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", Em, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", zm, [
          e("div", Mm, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Lm, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Tm, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", Rm, [
            (o(!0), n(F, null, Z(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Dm, l(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", Nm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", Um, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Om, [
            t.gitBranch ? (o(), b(ie, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                m(St, null, {
                  default: a(() => [
                    f(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), b(ie, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                m(Wt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Pm = /* @__PURE__ */ J(Bm, [["__scopeId", "data-v-182fe113"]]), Am = { class: "import-options" }, Vm = { class: "options-container" }, Fm = { class: "option-section" }, Wm = { class: "conflict-options" }, Gm = ["value", "checked", "onChange"], jm = { class: "conflict-content" }, Hm = { class: "conflict-label" }, Km = { class: "conflict-description" }, qm = { class: "option-section" }, Jm = { class: "component-toggles" }, Ym = /* @__PURE__ */ q({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: d }) {
    const s = d, r = [
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
    return (g, y) => (o(), n("div", Am, [
      m(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          f("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Vm, [
        e("div", Fm, [
          m(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              f("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Wm, [
            (o(), n(F, null, Z(r, (p) => e("label", {
              key: p.value,
              class: te(["conflict-option", { active: t.conflictMode === p.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: p.value,
                checked: t.conflictMode === p.value,
                onChange: (v) => s("update:conflictMode", p.value)
              }, null, 40, Gm),
              e("div", jm, [
                e("span", Hm, l(p.label), 1),
                e("span", Km, l(p.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", qm, [
          m(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              f("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Jm, [
            m(We, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                m(et, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (p) => s("update:includeWorkflows", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                m(et, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (p) => s("update:includeModels", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                m(et, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (p) => s("update:includeNodes", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                m(et, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (p) => s("update:includeGitHistory", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Xm = /* @__PURE__ */ J(Ym, [["__scopeId", "data-v-0ec212b0"]]), Qm = {
  key: 0,
  class: "import-empty"
}, Zm = { class: "import-help" }, ev = {
  key: 1,
  class: "import-configure"
}, tv = { class: "selected-file-bar" }, ov = { class: "file-bar-content" }, sv = { class: "file-bar-info" }, nv = { class: "file-bar-name" }, av = { class: "file-bar-size" }, lv = { class: "import-actions" }, iv = {
  key: 2,
  class: "import-progress"
}, rv = { class: "progress-content" }, dv = { class: "progress-info" }, cv = { class: "progress-title" }, uv = { class: "progress-detail" }, mv = { class: "progress-bar" }, vv = { class: "progress-status" }, fv = {
  key: 3,
  class: "import-complete"
}, gv = { class: "complete-message" }, hv = { class: "complete-title" }, pv = { class: "complete-details" }, yv = { class: "complete-actions" }, wv = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const d = L(null), s = L(!1), r = L(!1), g = L(!1), y = L(""), p = L({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), v = L({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), i = L({
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
    }), u = N(() => p.value.includeWorkflows || p.value.includeModels || p.value.includeNodes || p.value.includeGitHistory);
    function w(E) {
      d.value = E;
    }
    function h() {
      d.value = null, r.value = !1, g.value = !1, y.value = "";
    }
    function T() {
      h(), s.value = !1, v.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function M() {
      if (d.value) {
        s.value = !0, r.value = !1;
        try {
          const E = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${i.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${i.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${i.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of E)
            v.value = k, await new Promise((C) => setTimeout(C, 800));
          v.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), g.value = !0, y.value = `Successfully imported ${i.value.workflows.length} workflows, ${i.value.models.length} models, and ${i.value.nodes.length} custom nodes.`;
        } catch (E) {
          g.value = !1, y.value = E instanceof Error ? E.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, r.value = !0;
        }
      }
    }
    function _(E) {
      return E < 1024 ? `${E} B` : E < 1024 * 1024 ? `${(E / 1024).toFixed(1)} KB` : E < 1024 * 1024 * 1024 ? `${(E / (1024 * 1024)).toFixed(1)} MB` : `${(E / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (E, k) => (o(), b(Ce, null, {
      header: a(() => [
        m(xe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", Qm, [
          m(rm, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: w
          }),
          e("div", Zm, [
            m(Ee, null, {
              default: a(() => [...k[5] || (k[5] = [
                f("How to Import", -1)
              ])]),
              _: 1
            }),
            k[6] || (k[6] = e("div", { class: "help-content" }, [
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "1"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Select Export File"),
                  e("div", { class: "help-description" }, " Choose a ComfyGit environment export file created with the EXPORT feature ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "2"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Review Preview"),
                  e("div", { class: "help-description" }, " Check what workflows, models, and nodes will be imported ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "3"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Configure Options"),
                  e("div", { class: "help-description" }, " Choose how to handle conflicts and which components to import ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "4"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Import"),
                  e("div", { class: "help-description" }, " Start the import process and wait for completion ")
                ])
              ])
            ], -1))
          ])
        ])) : d.value && !s.value && !r.value ? (o(), n("div", ev, [
          e("div", tv, [
            e("div", ov, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", sv, [
                e("div", nv, l(d.value.name), 1),
                e("div", av, l(_(d.value.size)), 1)
              ])
            ]),
            m(G, {
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: a(() => [...k[8] || (k[8] = [
                f(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          m(Pm, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          m(Xm, {
            "conflict-mode": p.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (C) => p.value.conflictMode = C),
            "include-workflows": p.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (C) => p.value.includeWorkflows = C),
            "include-models": p.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (C) => p.value.includeModels = C),
            "include-nodes": p.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (C) => p.value.includeNodes = C),
            "include-git-history": p.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (C) => p.value.includeGitHistory = C)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !p.value.includeModels && i.value.models.length > 0 ? (o(), b(Ze, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", lv, [
            m(G, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: M
            }, {
              default: a(() => [...k[9] || (k[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                f(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m(G, {
              variant: "secondary",
              size: "md",
              onClick: h
            }, {
              default: a(() => [...k[10] || (k[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", iv, [
          e("div", rv, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", dv, [
              e("div", cv, l(v.value.message), 1),
              e("div", uv, l(v.value.detail), 1)
            ])
          ]),
          e("div", mv, [
            e("div", {
              class: "progress-bar-fill",
              style: tt({ width: `${v.value.percent}%` })
            }, null, 4)
          ]),
          e("div", vv, l(v.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), n("div", fv, [
          e("div", {
            class: te(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", gv, [
            e("div", hv, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", pv, l(y.value), 1)
          ]),
          e("div", yv, [
            m(G, {
              variant: "primary",
              size: "md",
              onClick: T
            }, {
              default: a(() => [...k[12] || (k[12] = [
                f(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), kv = /* @__PURE__ */ J(wv, [["__scopeId", "data-v-18e18eb5"]]), bv = { class: "header-info" }, _v = { class: "commit-hash" }, $v = {
  key: 0,
  class: "commit-refs"
}, Cv = { class: "commit-message" }, xv = { class: "commit-date" }, Sv = {
  key: 0,
  class: "loading"
}, Iv = {
  key: 1,
  class: "changes-section"
}, Ev = { class: "stats-row" }, zv = { class: "stat" }, Mv = { class: "stat insertions" }, Lv = { class: "stat deletions" }, Tv = {
  key: 0,
  class: "change-group"
}, Rv = {
  key: 1,
  class: "change-group"
}, Dv = {
  key: 0,
  class: "version"
}, Nv = {
  key: 2,
  class: "change-group"
}, Uv = { class: "change-item" }, Ov = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = Se(), r = L(null), g = L(!0), y = N(() => {
      if (!r.value) return !1;
      const v = r.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), p = N(() => {
      if (!r.value) return !1;
      const v = r.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return be(async () => {
      try {
        r.value = await s(d.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (v, i) => (o(), b(ht, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (u) => v.$emit("close"))
    }, {
      header: a(() => {
        var u, w, h, T;
        return [
          e("div", bv, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", _v, l(((u = r.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (T = (h = r.value) == null ? void 0 : h.refs) != null && T.length ? (o(), n("span", $v, [
              (o(!0), n(F, null, Z(r.value.refs, (M) => (o(), n("span", {
                key: M,
                class: "ref-badge"
              }, l(M), 1))), 128))
            ])) : c("", !0)
          ]),
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (M) => v.$emit("close"))
          }, {
            default: a(() => [...i[5] || (i[5] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: a(() => {
        var u, w;
        return [
          e("div", Cv, l(((u = r.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", xv, l(((w = r.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), n("div", Sv, "Loading details...")) : r.value ? (o(), n("div", Iv, [
            e("div", Ev, [
              e("span", zv, l(r.value.stats.files_changed) + " files", 1),
              e("span", Mv, "+" + l(r.value.stats.insertions), 1),
              e("span", Lv, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", Tv, [
              m(mt, { variant: "section" }, {
                default: a(() => [...i[6] || (i[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(F, null, Z(r.value.changes.workflows.added, (h) => (o(), n("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(h), 1)
              ]))), 128)),
              (o(!0), n(F, null, Z(r.value.changes.workflows.modified, (h) => (o(), n("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(h), 1)
              ]))), 128)),
              (o(!0), n(F, null, Z(r.value.changes.workflows.deleted, (h) => (o(), n("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(h), 1)
              ]))), 128))
            ])) : c("", !0),
            p.value ? (o(), n("div", Rv, [
              m(mt, { variant: "section" }, {
                default: a(() => [...i[10] || (i[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(F, null, Z(r.value.changes.nodes.added, (h) => (o(), n("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(h.name), 1),
                h.version ? (o(), n("span", Dv, "(" + l(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(F, null, Z(r.value.changes.nodes.removed, (h) => (o(), n("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), n("div", Nv, [
              m(mt, { variant: "section" }, {
                default: a(() => [...i[13] || (i[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Uv, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        m(re, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (u) => v.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...i[15] || (i[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        m(re, {
          variant: "primary",
          onClick: i[2] || (i[2] = (u) => v.$emit("checkout", t.commit))
        }, {
          default: a(() => [...i[16] || (i[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Bv = /* @__PURE__ */ J(Ov, [["__scopeId", "data-v-d256ff6d"]]), Pv = { class: "dialog-message" }, Av = {
  key: 0,
  class: "dialog-details"
}, Vv = {
  key: 1,
  class: "dialog-warning"
}, Fv = /* @__PURE__ */ q({
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
    return (d, s) => (o(), b(ht, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", Pv, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", Av, [
          (o(!0), n(F, null, Z(t.details, (r, g) => (o(), n("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", Vv, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        m(re, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => d.$emit("cancel"))
        }, {
          default: a(() => [
            f(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), b(re, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => d.$emit("secondary"))
        }, {
          default: a(() => [
            f(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        m(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
        }, {
          default: a(() => [
            f(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Wv = /* @__PURE__ */ J(Fv, [["__scopeId", "data-v-3670b9f5"]]), Gv = { class: "base-textarea-wrapper" }, jv = ["value", "rows", "placeholder", "disabled", "maxlength"], Hv = {
  key: 0,
  class: "base-textarea-count"
}, Kv = /* @__PURE__ */ q({
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
  setup(t) {
    return (d, s) => (o(), n("div", Gv, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ge(ke((r) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ge(ke((r) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, jv),
      t.showCharCount && t.maxLength ? (o(), n("div", Hv, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ot = /* @__PURE__ */ J(Kv, [["__scopeId", "data-v-5516e6fc"]]), qv = ["checked", "disabled"], Jv = { class: "base-checkbox-box" }, Yv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Xv = {
  key: 0,
  class: "base-checkbox-label"
}, Qv = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: te(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.checked))
      }, null, 40, qv),
      e("span", Jv, [
        t.modelValue ? (o(), n("svg", Yv, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", Xv, [
        de(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ J(Qv, [["__scopeId", "data-v-bf17c831"]]), Zv = { class: "popover-header" }, ef = { class: "popover-body" }, tf = {
  key: 0,
  class: "changes-summary"
}, of = {
  key: 0,
  class: "change-item"
}, sf = {
  key: 1,
  class: "change-item"
}, nf = {
  key: 2,
  class: "change-item"
}, af = {
  key: 3,
  class: "change-item"
}, lf = {
  key: 4,
  class: "change-item"
}, rf = {
  key: 1,
  class: "no-changes"
}, df = {
  key: 2,
  class: "loading"
}, cf = {
  key: 3,
  class: "issues-warning"
}, uf = { class: "warning-header" }, mf = { class: "warning-title" }, vf = { class: "issues-list" }, ff = { class: "message-section" }, gf = { class: "popover-footer" }, hf = {
  key: 1,
  class: "commit-popover"
}, pf = { class: "popover-header" }, yf = { class: "popover-body" }, wf = {
  key: 0,
  class: "changes-summary"
}, kf = {
  key: 0,
  class: "change-item"
}, bf = {
  key: 1,
  class: "change-item"
}, _f = {
  key: 2,
  class: "change-item"
}, $f = {
  key: 3,
  class: "change-item"
}, Cf = {
  key: 4,
  class: "change-item"
}, xf = {
  key: 1,
  class: "no-changes"
}, Sf = {
  key: 2,
  class: "loading"
}, If = {
  key: 3,
  class: "issues-warning"
}, Ef = { class: "warning-header" }, zf = { class: "warning-title" }, Mf = { class: "issues-list" }, Lf = { class: "message-section" }, Tf = { class: "popover-footer" }, Rf = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, r = d, { commit: g } = Se(), y = L(""), p = L(!1), v = L(!1), i = L(null), u = N(() => {
      if (!s.status) return !1;
      const _ = s.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || s.status.has_changes;
    }), w = N(() => {
      var _;
      return (_ = s.status) != null && _.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (E) => E.has_issues && (E.sync_state === "new" || E.sync_state === "modified")
      ) : [];
    }), h = N(() => w.value.length > 0), T = N(() => h.value && !v.value);
    async function M() {
      var _, E, k;
      if (!(h.value && !v.value) && !(!u.value || !y.value.trim() || p.value)) {
        p.value = !0, i.value = null;
        try {
          const C = await g(y.value.trim(), v.value);
          C.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((_ = C.summary) == null ? void 0 : _.new) || 0} new, ${((E = C.summary) == null ? void 0 : E.modified) || 0} modified, ${((k = C.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", v.value = !1, setTimeout(() => r("committed"), 1e3)) : C.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : C.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: C.message || "Commit failed" };
        } catch (C) {
          i.value = { type: "error", message: C instanceof Error ? C.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (_, E) => t.asModal ? (o(), b(Le, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: E[5] || (E[5] = (k) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: E[4] || (E[4] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Zv, [
            E[11] || (E[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: E[0] || (E[0] = (k) => r("close"))
            }, [...E[10] || (E[10] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          e("div", ef, [
            t.status && u.value ? (o(), n("div", tf, [
              t.status.workflows.new.length ? (o(), n("div", of, [
                E[12] || (E[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", sf, [
                E[13] || (E[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", nf, [
                E[14] || (E[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", af, [
                E[15] || (E[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", lf, [
                E[16] || (E[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", rf, " No changes to commit ")) : (o(), n("div", df, " Loading... ")),
            h.value ? (o(), n("div", cf, [
              e("div", uf, [
                E[17] || (E[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", mf, l(w.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", vf, [
                (o(!0), n(F, null, Z(w.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  f(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              m(Bt, {
                modelValue: v.value,
                "onUpdate:modelValue": E[1] || (E[1] = (k) => v.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...E[18] || (E[18] = [
                  f(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", ff, [
              m(Ot, {
                modelValue: y.value,
                "onUpdate:modelValue": E[2] || (E[2] = (k) => y.value = k),
                placeholder: T.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || p.value || T.value,
                rows: 3,
                onCtrlEnter: M
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), n("div", {
              key: 4,
              class: te(["result", i.value.type])
            }, l(i.value.message), 3)) : c("", !0)
          ]),
          e("div", gf, [
            m(re, {
              variant: "secondary",
              onClick: E[3] || (E[3] = (k) => r("close"))
            }, {
              default: a(() => [...E[19] || (E[19] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: v.value ? "danger" : "primary",
              disabled: !u.value || !y.value.trim() || p.value || T.value,
              loading: p.value,
              onClick: M
            }, {
              default: a(() => [
                f(l(p.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", hf, [
      e("div", pf, [
        E[21] || (E[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: E[6] || (E[6] = (k) => r("close"))
        }, [...E[20] || (E[20] = [
          e("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      e("div", yf, [
        t.status && u.value ? (o(), n("div", wf, [
          t.status.workflows.new.length ? (o(), n("div", kf, [
            E[22] || (E[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", bf, [
            E[23] || (E[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", _f, [
            E[24] || (E[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", $f, [
            E[25] || (E[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Cf, [
            E[26] || (E[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", xf, " No changes to commit ")) : (o(), n("div", Sf, " Loading... ")),
        h.value ? (o(), n("div", If, [
          e("div", Ef, [
            E[27] || (E[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", zf, l(w.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", Mf, [
            (o(!0), n(F, null, Z(w.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              f(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          m(Bt, {
            modelValue: v.value,
            "onUpdate:modelValue": E[7] || (E[7] = (k) => v.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...E[28] || (E[28] = [
              f(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", Lf, [
          m(Ot, {
            modelValue: y.value,
            "onUpdate:modelValue": E[8] || (E[8] = (k) => y.value = k),
            placeholder: T.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || p.value || T.value,
            rows: 3,
            onCtrlEnter: M
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), n("div", {
          key: 4,
          class: te(["result", i.value.type])
        }, l(i.value.message), 3)) : c("", !0)
      ]),
      e("div", Tf, [
        m(re, {
          variant: "secondary",
          onClick: E[9] || (E[9] = (k) => r("close"))
        }, {
          default: a(() => [...E[29] || (E[29] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m(re, {
          variant: v.value ? "danger" : "primary",
          disabled: !u.value || !y.value.trim() || p.value || T.value,
          loading: p.value,
          onClick: M
        }, {
          default: a(() => [
            f(l(p.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ht = /* @__PURE__ */ J(Rf, [["__scopeId", "data-v-38b45183"]]), Df = { class: "modal-header" }, Nf = { class: "modal-body" }, Uf = { class: "switch-message" }, Of = { class: "switch-details" }, Bf = { class: "modal-actions" }, Pf = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), b(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Df, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Nf, [
            e("p", Uf, [
              s[6] || (s[6] = f(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = f(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = f("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Of, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Bf, [
            m(G, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(G, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                f(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Af = /* @__PURE__ */ J(Pf, [["__scopeId", "data-v-e9c5253e"]]), Vf = { class: "progress-bar" }, Ff = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = N(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (r, g) => (o(), n("div", Vf, [
      e("div", {
        class: te(["progress-fill", t.variant]),
        style: tt({ width: s.value })
      }, null, 6)
    ]));
  }
}), Wf = /* @__PURE__ */ J(Ff, [["__scopeId", "data-v-1beb0512"]]), Gf = {
  key: 0,
  class: "modal-overlay"
}, jf = { class: "modal-content" }, Hf = { class: "modal-body" }, Kf = { class: "progress-info" }, qf = { class: "progress-percentage" }, Jf = { class: "progress-state" }, Yf = { class: "switch-steps" }, Xf = { class: "step-icon" }, Qf = { class: "step-label" }, Zf = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = N(() => {
      const y = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return d.message || y[d.state] || d.state;
    }), r = N(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), g = N(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], p = y.findIndex((v) => v.state === d.state);
      return y.map((v, i) => {
        let u = "pending", w = "○";
        return i < p ? (u = "completed", w = "✓") : i === p && (u = "active", w = "⟳"), {
          ...v,
          status: u,
          icon: w
        };
      });
    });
    return (y, p) => (o(), b(Le, { to: "body" }, [
      t.show ? (o(), n("div", Gf, [
        e("div", jf, [
          p[1] || (p[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Hf, [
            m(Wf, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Kf, [
              e("div", qf, l(t.progress) + "%", 1),
              e("div", Jf, l(s.value), 1)
            ]),
            e("div", Yf, [
              (o(!0), n(F, null, Z(g.value, (v) => (o(), n("div", {
                key: v.state,
                class: te(["switch-step", v.status])
              }, [
                e("span", Xf, l(v.icon), 1),
                e("span", Qf, l(v.label), 1)
              ], 2))), 128))
            ]),
            p[0] || (p[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), eg = /* @__PURE__ */ J(Zf, [["__scopeId", "data-v-768a5078"]]), tg = { class: "modal-header" }, og = { class: "modal-body" }, sg = {
  key: 0,
  class: "node-section"
}, ng = { class: "node-list" }, ag = {
  key: 1,
  class: "node-section"
}, lg = { class: "node-list" }, ig = { class: "modal-actions" }, rg = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), b(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", tg, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", og, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", sg, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", ng, [
                (o(!0), n(F, null, Z(t.mismatchDetails.missing_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", ag, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", lg, [
                (o(!0), n(F, null, Z(t.mismatchDetails.extra_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", ig, [
            m(G, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(G, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                f(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), dg = /* @__PURE__ */ J(rg, [["__scopeId", "data-v-7cad7518"]]);
async function rt(t, d = {}, s = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), s);
  try {
    const y = await fetch(t, {
      ...d,
      signal: r.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function cg() {
  const t = L(null);
  async function d() {
    try {
      const p = await rt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (p.ok)
        return (await p.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const p = await rt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Health check failed");
      return await p.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const p = await rt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Failed to get status");
      return await p.json();
    } catch {
      return null;
    }
  }
  async function g() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await rt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await rt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: d,
    checkHealth: s,
    getStatus: r,
    restart: g,
    kill: y
  };
}
const ug = { class: "comfygit-panel" }, mg = { class: "panel-header" }, vg = { class: "header-left" }, fg = {
  key: 0,
  class: "header-info"
}, gg = { class: "header-actions" }, hg = { class: "env-switcher" }, pg = {
  key: 0,
  class: "header-info"
}, yg = { class: "branch-name" }, wg = { class: "panel-main" }, kg = { class: "sidebar" }, bg = { class: "sidebar-section" }, _g = { class: "sidebar-section" }, $g = { class: "sidebar-section" }, Cg = { class: "content-area" }, xg = {
  key: 0,
  class: "error-message"
}, Sg = {
  key: 1,
  class: "loading"
}, Ig = { class: "dialog-content env-selector-dialog" }, Eg = { class: "dialog-header" }, zg = { class: "dialog-body" }, Mg = { class: "env-list" }, Lg = { class: "env-info" }, Tg = { class: "env-name-row" }, Rg = { class: "env-indicator" }, Dg = { class: "env-name" }, Ng = {
  key: 0,
  class: "env-branch"
}, Ug = {
  key: 1,
  class: "current-label"
}, Og = { class: "env-stats" }, Bg = ["onClick"], Pg = { class: "toast-container" }, Ag = { class: "toast-icon" }, Vg = { class: "toast-message" }, Fg = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: r,
      getHistory: g,
      getBranches: y,
      checkout: p,
      createBranch: v,
      switchBranch: i,
      getEnvironments: u,
      switchEnvironment: w,
      getSwitchProgress: h,
      syncEnvironmentManually: T
    } = Se(), M = cg(), _ = L(null), E = L([]), k = L([]), C = L([]), P = N(() => C.value.find((W) => W.is_current)), O = L(!1), D = L(null), K = L(null), I = L(!1), x = L(null), z = L(!1), S = L(!1), $ = L(""), U = L({ state: "idle", progress: 0, message: "" });
    let A = null, ee = null;
    const V = L("status"), H = L("this-env");
    function X(W, R) {
      V.value = W, H.value = R;
    }
    function ne(W) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      ce && X(ce.view, ce.section);
    }
    function se() {
      X("branches", "this-env");
    }
    function _e() {
      s("close"), setTimeout(() => {
        var R;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const ce of W)
          if (((R = ce.textContent) == null ? void 0 : R.trim()) === "Manager") {
            ce.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Q = L(null), Te = L(!1), he = L(!1), Re = L([]);
    let it = 0;
    function ge(W, R = "info", ce = 3e3) {
      const pe = ++it;
      return Re.value.push({ id: pe, message: W, type: R }), ce > 0 && setTimeout(() => {
        Re.value = Re.value.filter((De) => De.id !== pe);
      }, ce), pe;
    }
    function ze(W) {
      Re.value = Re.value.filter((R) => R.id !== W);
    }
    function Y(W) {
      switch (W) {
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
    const ae = N(() => {
      if (!_.value) return "neutral";
      const W = _.value.workflows, R = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    N(() => _.value ? ae.value === "success" ? "All synced" : ae.value === "warning" ? "Uncommitted changes" : ae.value === "error" ? "Not synced" : "" : "");
    async function ue() {
      O.value = !0, D.value = null;
      try {
        const [W, R, ce, pe] = await Promise.all([
          r(!0),
          g(),
          y(),
          u()
        ]);
        _.value = W, E.value = R.commits, k.value = ce.branches, C.value = pe, s("statusUpdate", W), x.value && await x.value.loadWorkflows(!0);
      } catch (W) {
        D.value = W instanceof Error ? W.message : "Failed to load status", _.value = null, E.value = [], k.value = [];
      } finally {
        O.value = !1;
      }
    }
    function $e(W) {
      K.value = W;
    }
    async function Je(W) {
      var ce;
      K.value = null;
      const R = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      Q.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((ce = W.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: R ? Dt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var Ne;
          Q.value = null, fe();
          const pe = ge(`Checking out ${W.short_hash || ((Ne = W.hash) == null ? void 0 : Ne.slice(0, 7))}...`, "info", 0), De = await p(W.hash, R);
          ze(pe), De.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(De.message || "Checkout failed", "error");
        }
      };
    }
    async function j(W) {
      const R = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      Q.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: R ? Dt() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Q.value = null, fe();
          const ce = ge(`Switching to ${W}...`, "info", 0), pe = await i(W, R);
          ze(ce), pe.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(pe.message || "Branch switch failed", "error");
        }
      };
    }
    async function B(W) {
      const R = ge(`Creating branch ${W}...`, "info", 0), ce = await v(W);
      ze(R), ce.status === "success" ? (ge(`Branch "${W}" created`, "success"), await ue()) : ge(ce.message || "Failed to create branch", "error");
    }
    async function oe(W) {
      K.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const ce = ge(`Creating branch ${R}...`, "info", 0), pe = await v(R, W.hash);
        ze(ce), pe.status === "success" ? (ge(`Branch "${R}" created from ${W.short_hash}`, "success"), await ue()) : ge(pe.message || "Failed to create branch", "error");
      }
    }
    function fe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Me(W) {
      I.value = !1, $.value = W, z.value = !0;
    }
    async function Ye() {
      z.value = !1, S.value = !0, fe(), U.value = {
        progress: 10,
        state: Be(10),
        message: Xe(10)
      };
      try {
        await w($.value), pt(), Xt();
      } catch (W) {
        Pe(), S.value = !1, ge(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), U.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Be(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function Xe(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Be(W)] || "";
    }
    function pt() {
      if (ee) return;
      let W = 10;
      const R = 60, ce = 5e3, pe = 100, De = (R - W) / (ce / pe);
      ee = window.setInterval(() => {
        if (W += De, W >= R && (W = R, Pe()), U.value.progress < R) {
          const Ne = Math.floor(W);
          U.value = {
            progress: Ne,
            state: Be(Ne),
            message: Xe(Ne)
          };
        }
      }, pe);
    }
    function Pe() {
      ee && (clearInterval(ee), ee = null);
    }
    function Xt() {
      A || (A = window.setInterval(async () => {
        try {
          let W = await M.getStatus();
          if ((!W || W.state === "idle") && (W = await h()), !W)
            return;
          const R = W.progress || 0;
          R >= 60 && Pe();
          const ce = Math.max(R, U.value.progress), pe = W.state && W.state !== "idle" && W.state !== "unknown", De = pe ? W.state : Be(ce), Ne = pe && W.message || Xe(ce);
          U.value = {
            state: De,
            progress: ce,
            message: Ne
          }, W.state === "complete" ? (Pe(), bt(), S.value = !1, ge(`✓ Switched to ${$.value}`, "success"), await ue(), $.value = "") : W.state === "rolled_back" ? (Pe(), bt(), S.value = !1, ge("Switch failed, restored previous environment", "warning"), $.value = "") : W.state === "critical_failure" && (Pe(), bt(), S.value = !1, ge(`Critical error during switch: ${W.message}`, "error"), $.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function bt() {
      Pe(), A && (clearInterval(A), A = null);
    }
    function Qt() {
      z.value = !1, $.value = "";
    }
    async function Zt() {
      Te.value = !1, await ue(), ge("✓ Changes committed", "success");
    }
    async function eo() {
      he.value = !1;
      const W = ge("Syncing environment...", "info", 0);
      try {
        const R = await T("skip", !0);
        if (ze(W), R.status === "success") {
          const ce = [];
          R.nodes_installed.length && ce.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && ce.push(`${R.nodes_removed.length} removed`);
          const pe = ce.length ? `: ${ce.join(", ")}` : "";
          ge(`✓ Environment synced${pe}`, "success"), await ue();
        } else {
          const ce = R.errors.length ? R.errors.join("; ") : R.message;
          ge(`Sync failed: ${ce}`, "error");
        }
      } catch (R) {
        ze(W), ge(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function to(W) {
      const R = ge(`Creating environment "${W}"...`, "info", 0);
      ze(R), ge("Environment creation not yet implemented", "warning");
    }
    async function oo(W) {
      const R = ge(`Deleting environment "${W}"...`, "info", 0);
      ze(R), ge("Environment deletion not yet implemented", "warning");
    }
    function so(W) {
      ge(`Viewing details for "${W}"`, "info"), X("models-env", "this-env");
    }
    function Dt() {
      if (!_.value) return [];
      const W = [], R = _.value.workflows;
      return R.new.length && W.push(`${R.new.length} new workflow(s)`), R.modified.length && W.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && W.push(`${R.deleted.length} deleted workflow(s)`), W;
    }
    return be(ue), (W, R) => {
      var ce, pe, De, Ne;
      return o(), n("div", ug, [
        e("div", mg, [
          e("div", vg, [
            R[27] || (R[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), n("div", fg)) : c("", !0)
          ]),
          e("div", gg, [
            e("button", {
              class: te(["icon-btn", { spinning: O.value }]),
              onClick: ue,
              title: "Refresh"
            }, [...R[28] || (R[28] = [
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
              onClick: R[0] || (R[0] = (le) => s("close")),
              title: "Close"
            }, [...R[29] || (R[29] = [
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
        e("div", hg, [
          R[31] || (R[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[1] || (R[1] = (le) => X("environments", "all-envs"))
          }, [
            _.value ? (o(), n("div", pg, [
              e("span", null, l(((ce = P.value) == null ? void 0 : ce.name) || ((pe = _.value) == null ? void 0 : pe.environment) || "Loading..."), 1),
              e("span", yg, "(" + l(_.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            R[30] || (R[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", wg, [
          e("div", kg, [
            e("div", bg, [
              R[32] || (R[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "status" && H.value === "this-env" }]),
                onClick: R[2] || (R[2] = (le) => X("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "workflows" }]),
                onClick: R[3] || (R[3] = (le) => X("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "models-env" }]),
                onClick: R[4] || (R[4] = (le) => X("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "branches" }]),
                onClick: R[5] || (R[5] = (le) => X("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "history" }]),
                onClick: R[6] || (R[6] = (le) => X("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "nodes" }]),
                onClick: R[7] || (R[7] = (le) => X("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "debug-env" }]),
                onClick: R[8] || (R[8] = (le) => X("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            R[35] || (R[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", _g, [
              R[33] || (R[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "environments" }]),
                onClick: R[9] || (R[9] = (le) => X("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "model-index" }]),
                onClick: R[10] || (R[10] = (le) => X("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "settings" }]),
                onClick: R[11] || (R[11] = (le) => X("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "debug-workspace" }]),
                onClick: R[12] || (R[12] = (le) => X("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            R[36] || (R[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", $g, [
              R[34] || (R[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "export" }]),
                onClick: R[13] || (R[13] = (le) => X("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "import" }]),
                onClick: R[14] || (R[14] = (le) => X("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "remotes" }]),
                onClick: R[15] || (R[15] = (le) => X("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Cg, [
            D.value ? (o(), n("div", xg, l(D.value), 1)) : !_.value && V.value === "status" ? (o(), n("div", Sg, " Loading status... ")) : (o(), n(F, { key: 2 }, [
              V.value === "status" ? (o(), b(Vn, {
                key: 0,
                status: _.value,
                onSwitchBranch: se,
                onCommitChanges: R[16] || (R[16] = (le) => Te.value = !0),
                onSyncEnvironment: R[17] || (R[17] = (le) => he.value = !0),
                onViewWorkflows: R[18] || (R[18] = (le) => X("workflows", "this-env")),
                onViewHistory: R[19] || (R[19] = (le) => X("history", "this-env")),
                onViewDebug: R[20] || (R[20] = (le) => X("debug-env", "this-env"))
              }, null, 8, ["status"])) : V.value === "workflows" ? (o(), b(Qd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: x,
                onRefresh: ue
              }, null, 512)) : V.value === "models-env" ? (o(), b(tc, {
                key: 2,
                onNavigate: ne
              })) : V.value === "branches" ? (o(), b(oa, {
                key: 3,
                branches: k.value,
                current: ((De = _.value) == null ? void 0 : De.branch) || null,
                onSwitch: j,
                onCreate: B
              }, null, 8, ["branches", "current"])) : V.value === "history" ? (o(), b(va, {
                key: 4,
                commits: E.value,
                onSelect: $e,
                onCheckout: Je
              }, null, 8, ["commits"])) : V.value === "nodes" ? (o(), b(xc, {
                key: 5,
                onOpenNodeManager: _e
              })) : V.value === "debug-env" ? (o(), b(Cu, { key: 6 })) : V.value === "environments" ? (o(), b(Uu, {
                key: 7,
                onSwitch: Me,
                onCreate: to,
                onDelete: oo,
                onViewDetails: so
              })) : V.value === "model-index" ? (o(), b(sc, { key: 8 })) : V.value === "settings" ? (o(), b(ku, { key: 9 })) : V.value === "debug-workspace" ? (o(), b(_u, { key: 10 })) : V.value === "export" ? (o(), b(Hu, { key: 11 })) : V.value === "import" ? (o(), b(kv, { key: 12 })) : V.value === "remotes" ? (o(), b(tu, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        K.value ? (o(), b(Bv, {
          key: 0,
          commit: K.value,
          onClose: R[21] || (R[21] = (le) => K.value = null),
          onCheckout: Je,
          onCreateBranch: oe
        }, null, 8, ["commit"])) : c("", !0),
        Q.value ? (o(), b(Wv, {
          key: 1,
          title: Q.value.title,
          message: Q.value.message,
          details: Q.value.details,
          warning: Q.value.warning,
          confirmLabel: Q.value.confirmLabel,
          cancelLabel: Q.value.cancelLabel,
          secondaryLabel: Q.value.secondaryLabel,
          secondaryAction: Q.value.secondaryAction,
          destructive: Q.value.destructive,
          onConfirm: Q.value.onConfirm,
          onCancel: R[22] || (R[22] = (le) => Q.value = null),
          onSecondary: Q.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        m(Af, {
          show: z.value,
          "from-environment": ((Ne = P.value) == null ? void 0 : Ne.name) || "unknown",
          "to-environment": $.value,
          onConfirm: Ye,
          onClose: Qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Te.value && _.value ? (o(), b(Ht, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: R[23] || (R[23] = (le) => Te.value = !1),
          onCommitted: Zt
        }, null, 8, ["status"])) : c("", !0),
        he.value && _.value ? (o(), b(dg, {
          key: 3,
          show: he.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: eo,
          onClose: R[24] || (R[24] = (le) => he.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        m(eg, {
          show: S.value,
          state: U.value.state,
          progress: U.value.progress,
          message: U.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        I.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[26] || (R[26] = ke((le) => I.value = !1, ["self"]))
        }, [
          e("div", Ig, [
            e("div", Eg, [
              R[38] || (R[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[25] || (R[25] = (le) => I.value = !1)
              }, [...R[37] || (R[37] = [
                e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            e("div", zg, [
              R[39] || (R[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Mg, [
                (o(!0), n(F, null, Z(C.value, (le) => (o(), n("div", {
                  key: le.name,
                  class: te(["env-item", { current: le.is_current }])
                }, [
                  e("div", Lg, [
                    e("div", Tg, [
                      e("span", Rg, l(le.is_current ? "●" : "○"), 1),
                      e("span", Dg, l(le.name), 1),
                      le.current_branch ? (o(), n("span", Ng, "(" + l(le.current_branch) + ")", 1)) : c("", !0),
                      le.is_current ? (o(), n("span", Ug, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Og, l(le.workflow_count) + " workflows • " + l(le.node_count) + " nodes ", 1)
                  ]),
                  le.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Jh) => Me(le.name)
                  }, " SWITCH ", 8, Bg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", Pg, [
          m(ro, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(F, null, Z(Re.value, (le) => (o(), n("div", {
                key: le.id,
                class: te(["toast", le.type])
              }, [
                e("span", Ag, l(Y(le.type)), 1),
                e("span", Vg, l(le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Wg = /* @__PURE__ */ J(Fg, [["__scopeId", "data-v-09d3b423"]]), Gg = { class: "item-header" }, jg = { class: "item-info" }, Hg = { class: "filename" }, Kg = { class: "metadata" }, qg = { class: "size" }, Jg = {
  key: 0,
  class: "type"
}, Yg = { class: "item-actions" }, Xg = {
  key: 0,
  class: "progress-section"
}, Qg = { class: "progress-bar" }, Zg = { class: "progress-stats" }, eh = { class: "downloaded" }, th = { class: "speed" }, oh = {
  key: 0,
  class: "eta"
}, sh = {
  key: 1,
  class: "status-msg paused"
}, nh = {
  key: 2,
  class: "status-msg queued"
}, ah = {
  key: 3,
  class: "status-msg completed"
}, lh = {
  key: 4,
  class: "status-msg failed"
}, ih = {
  key: 0,
  class: "retries"
}, rh = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function r(p) {
      if (p === 0) return "?";
      const v = p / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(p / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(p) {
      return p === 0 ? "-" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(p) {
      if (p < 60) return `${Math.round(p)}s`;
      const v = Math.floor(p / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (p, v) => (o(), n("div", {
      class: te(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Gg, [
        e("div", jg, [
          e("div", Hg, l(t.item.filename), 1),
          e("div", Kg, [
            e("span", qg, l(r(t.item.size)), 1),
            t.item.type ? (o(), n("span", Jg, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Yg, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (i) => s("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (i) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (i) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (i) => s("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", Xg, [
        e("div", Qg, [
          e("div", {
            class: "progress-fill",
            style: tt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Zg, [
          e("span", eh, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", th, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", oh, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", sh, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", nh, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", ah, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", lh, [
        f(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", ih, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), dt = /* @__PURE__ */ J(rh, [["__scopeId", "data-v-2110df65"]]), dh = { class: "queue-title" }, ch = { class: "count" }, uh = { class: "queue-actions" }, mh = { class: "action-label" }, vh = {
  key: 0,
  class: "overall-progress"
}, fh = { class: "progress-bar" }, gh = {
  key: 0,
  class: "current-mini"
}, hh = { class: "filename" }, ph = { class: "speed" }, yh = {
  key: 1,
  class: "queue-content"
}, wh = {
  key: 0,
  class: "section"
}, kh = {
  key: 1,
  class: "section"
}, bh = { class: "section-header" }, _h = { class: "section-label paused" }, $h = { class: "items-list" }, Ch = {
  key: 2,
  class: "section"
}, xh = { class: "section-header" }, Sh = { class: "section-label" }, Ih = { class: "items-list" }, Eh = {
  key: 3,
  class: "section"
}, zh = { class: "section-header" }, Mh = { class: "section-label" }, Lh = { class: "items-list" }, Th = {
  key: 4,
  class: "section"
}, Rh = { class: "section-header" }, Dh = { class: "section-label failed" }, Nh = { class: "items-list" }, Uh = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: r,
      completedItems: g,
      failedItems: y,
      pausedItems: p,
      hasItems: v,
      activeCount: i,
      cancelDownload: u,
      retryDownload: w,
      resumeDownload: h,
      resumeAllPaused: T,
      removeItem: M,
      clearCompleted: _
    } = kt(), E = L(!1);
    let k = null;
    Et(
      () => ({
        active: i.value,
        failed: y.value.length,
        paused: p.value.length,
        completed: g.value.length
      }),
      (D, K) => {
        k && (clearTimeout(k), k = null);
        const I = D.active === 0 && D.failed === 0 && D.paused === 0 && D.completed > 0, x = K && (K.active > 0 || K.paused > 0);
        I && x && (k = setTimeout(() => {
          _(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = N(() => {
      var I;
      if (d.items.length === 0) return 0;
      const D = g.value.length, K = ((I = s.value) == null ? void 0 : I.progress) || 0;
      return Math.round((D + K / 100) / d.items.length * 100);
    });
    function P(D) {
      u(D);
    }
    function O(D) {
      return D === 0 ? "" : `${(D / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (D, K) => (o(), b(Le, { to: "body" }, [
      me(v) ? (o(), n("div", {
        key: 0,
        class: te(["model-download-queue", { minimized: !E.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (I) => E.value = !E.value)
        }, [
          e("div", dh, [
            K[4] || (K[4] = e("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", ch, "(" + l(me(i)) + "/" + l(me(d).items.length) + ")", 1)
          ]),
          e("div", uh, [
            e("span", mh, l(E.value ? "minimize" : "expand"), 1)
          ])
        ]),
        E.value ? (o(), n("div", yh, [
          me(s) ? (o(), n("div", wh, [
            K[6] || (K[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            m(dt, {
              item: me(s),
              onCancel: K[1] || (K[1] = (I) => P(me(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          me(p).length > 0 ? (o(), n("div", kh, [
            e("div", bh, [
              e("span", _h, "Paused (" + l(me(p).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...I) => me(T) && me(T)(...I))
              }, "Resume All")
            ]),
            e("div", $h, [
              (o(!0), n(F, null, Z(me(p), (I) => (o(), b(dt, {
                key: I.id,
                item: I,
                onResume: (x) => me(h)(I.id),
                onRemove: (x) => me(M)(I.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(r).length > 0 ? (o(), n("div", Ch, [
            e("div", xh, [
              e("span", Sh, "Queued (" + l(me(r).length) + ")", 1)
            ]),
            e("div", Ih, [
              (o(!0), n(F, null, Z(me(r), (I) => (o(), b(dt, {
                key: I.id,
                item: I,
                onCancel: (x) => P(I.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          me(g).length > 0 ? (o(), n("div", Eh, [
            e("div", zh, [
              e("span", Mh, "Completed (" + l(me(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...I) => me(_) && me(_)(...I))
              }, "Clear")
            ]),
            e("div", Lh, [
              (o(!0), n(F, null, Z(me(g).slice(0, 3), (I) => (o(), b(dt, {
                key: I.id,
                item: I,
                onRemove: (x) => me(M)(I.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(y).length > 0 ? (o(), n("div", Th, [
            e("div", Rh, [
              e("span", Dh, "Failed (" + l(me(y).length) + ")", 1)
            ]),
            e("div", Nh, [
              (o(!0), n(F, null, Z(me(y), (I) => (o(), b(dt, {
                key: I.id,
                item: I,
                onRetry: (x) => me(w)(I.id),
                onRemove: (x) => me(M)(I.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", vh, [
          e("div", fh, [
            e("div", {
              class: "progress-fill",
              style: tt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          me(s) ? (o(), n("div", gh, [
            e("span", hh, l(me(s).filename), 1),
            e("span", ph, l(O(me(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), Oh = /* @__PURE__ */ J(Uh, [["__scopeId", "data-v-60751cfa"]]), Bh = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Ph = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Ah = {
  comfy: Bh,
  phosphor: Ph
}, Tt = "comfy", Kt = "comfygit-theme";
let Qe = null, qt = Tt;
function Vh() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Jt(t = Tt) {
  Qe && Qe.remove(), Qe = document.createElement("style"), Qe.id = "comfygit-theme-styles", Qe.setAttribute("data-theme", t), Qe.textContent = Ah[t], document.head.appendChild(Qe), document.body.setAttribute("data-comfygit-theme", t), qt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Fh() {
  return qt;
}
function Wh(t) {
  Jt(t);
}
const Rt = document.createElement("link");
Rt.rel = "stylesheet";
Rt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rt);
const Gh = Vh();
Jt(Gh);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Wh(t);
  },
  getTheme: () => {
    const t = Fh();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ue = null, Ie = null, vt = null, ct = null, Pt = null;
const nt = L(null);
async function wt() {
  var t;
  if (!((t = st) != null && t.api)) return null;
  try {
    const d = await st.api.fetchApi("/v2/comfygit/status");
    d.ok && (nt.value = await d.json());
  } catch {
  }
}
function jh() {
  if (!nt.value) return !1;
  const t = nt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || nt.value.has_changes;
}
function Hh() {
  Ue && Ue.remove(), Ue = document.createElement("div"), Ue.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ue.appendChild(t), Ue.addEventListener("click", (r) => {
    r.target === Ue && Ct();
  });
  const d = (r) => {
    r.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), zt({
    render: () => Mt(Wg, {
      onClose: Ct,
      onStatusUpdate: (r) => {
        nt.value = r, ft();
      }
    })
  }).mount(t), document.body.appendChild(Ue);
}
function Ct() {
  Ue && (Ue.remove(), Ue = null);
}
function Kh(t) {
  ut(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const s = (g) => {
    Ie && !Ie.contains(g.target) && g.target !== t && (ut(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (g) => {
    g.key === "Escape" && (ut(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), vt = zt({
    render: () => Mt(Ht, {
      status: nt.value,
      onClose: ut,
      onCommitted: () => {
        ut(), wt().then(ft);
      }
    })
  }), vt.mount(Ie), document.body.appendChild(Ie);
}
function ut() {
  vt && (vt.unmount(), vt = null), Ie && (Ie.remove(), Ie = null);
}
function qh() {
  ct || (ct = document.createElement("div"), ct.className = "comfygit-download-queue-root", Pt = zt({
    render: () => Mt(Oh)
  }), Pt.mount(ct), document.body.appendChild(ct), console.log("[ComfyGit] Model download queue mounted"));
}
let Fe = null;
function ft() {
  if (!Fe) return;
  const t = Fe.querySelector(".commit-indicator");
  t && (t.style.display = jh() ? "block" : "none");
}
const Yt = document.createElement("style");
Yt.textContent = `
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
    order: -1;
  }

  .comfygit-panel-btn,
  .comfygit-commit-btn {
    height: 32px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
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
document.head.appendChild(Yt);
st.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Hh, Fe = document.createElement("button"), Fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Fe.innerHTML = 'Commit <span class="commit-indicator"></span>', Fe.title = "Quick Commit", Fe.onclick = () => Kh(Fe), t.appendChild(d), t.appendChild(Fe), (y = (g = st.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (st.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), qh();
    const { loadPendingDownloads: s } = kt();
    s(), await wt(), ft(), setInterval(async () => {
      await wt(), ft();
    }, 3e4);
    const r = st.api;
    if (r) {
      let p = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, v = function() {
        const u = document.createElement("div");
        u.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 16px 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 10000;
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: sans-serif;
          font-size: 14px;
          color: var(--fg-color);
        `;
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", u.appendChild(w);
        const h = document.createElement("button");
        h.textContent = "Refresh", h.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => p(), u.appendChild(h);
        const T = document.createElement("button");
        T.textContent = "×", T.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => u.remove(), u.appendChild(T), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: w, workflow_name: h } = u.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${h}`), await wt(), ft();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (u) => {
        const w = u.detail != null;
        w && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), p()) : v()), i = w;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
