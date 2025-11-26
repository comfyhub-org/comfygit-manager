import { app as ot } from "../../scripts/app.js";
import { defineComponent as H, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as re, createBlock as S, resolveDynamicComponent as It, normalizeClass as ee, withCtx as a, toDisplayString as l, createVNode as f, createTextVNode as w, computed as D, Fragment as A, renderList as Q, normalizeStyle as Ze, ref as z, onMounted as be, watch as Et, Teleport as ze, withModifiers as ke, Transition as so, withKeys as Ge, onUnmounted as no, reactive as Vt, readonly as ao, unref as ce, withDirectives as lo, vModelText as io, resolveComponent as ro, createSlots as At, TransitionGroup as co, createApp as zt, h as Mt } from "vue";
const uo = { class: "panel-layout" }, mo = {
  key: 0,
  class: "panel-layout-header"
}, vo = {
  key: 1,
  class: "panel-layout-search"
}, fo = { class: "panel-layout-content" }, go = {
  key: 2,
  class: "panel-layout-footer"
}, ho = /* @__PURE__ */ H({
  __name: "PanelLayout",
  setup(t) {
    return (d, s) => (o(), n("div", uo, [
      d.$slots.header ? (o(), n("div", mo, [
        re(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), n("div", vo, [
        re(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", fo, [
        re(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", go, [
        re(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), K = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [i, g] of d)
    s[i] = g;
  return s;
}, xe = /* @__PURE__ */ K(ho, [["__scopeId", "data-v-21565df9"]]), po = {
  key: 0,
  class: "panel-title-prefix"
}, yo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, wo = /* @__PURE__ */ H({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, s) => (o(), S(It(`h${t.level}`), {
      class: ee(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", po, l(t.prefix), 1)) : (o(), n("span", yo)),
        re(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bo = /* @__PURE__ */ K(wo, [["__scopeId", "data-v-c3875efc"]]), ko = ["title"], _o = ["width", "height"], $o = /* @__PURE__ */ H({
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
      onClick: s[0] || (s[0] = (i) => d.$emit("click"))
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
      ])], 8, _o))
    ], 8, ko));
  }
}), Ft = /* @__PURE__ */ K($o, [["__scopeId", "data-v-6fc7f16d"]]), Co = { class: "header-left" }, xo = {
  key: 0,
  class: "header-actions"
}, So = /* @__PURE__ */ H({
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
      class: ee(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Co, [
        f(bo, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            w(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), S(Ft, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", xo, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Se = /* @__PURE__ */ K(So, [["__scopeId", "data-v-55a62cd6"]]), Io = {
  key: 0,
  class: "section-title-count"
}, Eo = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ H({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), S(It(`h${t.level}`), {
      class: ee(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Io, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", Eo, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ K(zo, [["__scopeId", "data-v-559361eb"]]), Mo = { class: "status-grid" }, Lo = { class: "status-grid__column" }, To = { class: "status-grid__title" }, Ro = { class: "status-grid__column status-grid__column--right" }, Do = { class: "status-grid__title" }, No = /* @__PURE__ */ H({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", Mo, [
      e("div", Lo, [
        e("h4", To, l(t.leftTitle), 1),
        re(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Ro, [
        e("h4", Do, l(t.rightTitle), 1),
        re(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Oo = /* @__PURE__ */ K(No, [["__scopeId", "data-v-fe556068"]]), Uo = {
  key: 0,
  class: "status-item__icon"
}, Bo = {
  key: 1,
  class: "status-item__count"
}, Po = { class: "status-item__label" }, Vo = /* @__PURE__ */ H({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, s = D(() => `status-item--${d.variant}`);
    return (i, g) => (o(), n("div", {
      class: ee(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", Uo, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Bo, l(t.count), 1)) : c("", !0),
      e("span", Po, l(t.label), 1)
    ], 2));
  }
}), Ae = /* @__PURE__ */ K(Vo, [["__scopeId", "data-v-6f929183"]]), Ao = { class: "issue-card__header" }, Fo = { class: "issue-card__icon" }, Wo = { class: "issue-card__title" }, Go = {
  key: 0,
  class: "issue-card__content"
}, jo = {
  key: 0,
  class: "issue-card__description"
}, Ho = {
  key: 1,
  class: "issue-card__items"
}, Ko = {
  key: 2,
  class: "issue-card__actions"
}, qo = /* @__PURE__ */ H({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, s = D(() => `issue-card--${d.severity}`);
    return (i, g) => (o(), n("div", {
      class: ee(["issue-card", s.value])
    }, [
      e("div", Ao, [
        e("span", Fo, l(t.icon), 1),
        e("h4", Wo, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", Go, [
        t.description ? (o(), n("p", jo, l(t.description), 1)) : c("", !0),
        re(i.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", Ho, [
        (o(!0), n(A, null, Q(t.items, (y, v) => (o(), n("div", {
          key: v,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      i.$slots.actions ? (o(), n("div", Ko, [
        re(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ K(qo, [["__scopeId", "data-v-df6aa348"]]), Jo = ["type", "disabled"], Yo = {
  key: 0,
  class: "spinner"
}, Xo = /* @__PURE__ */ H({
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
      class: ee(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", Yo)) : c("", !0),
      t.loading ? c("", !0) : re(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Jo));
  }
}), q = /* @__PURE__ */ K(Xo, [["__scopeId", "data-v-772abe47"]]), Qo = { class: "empty-state" }, Zo = {
  key: 0,
  class: "empty-icon"
}, es = { class: "empty-message" }, ts = /* @__PURE__ */ H({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, s) => (o(), n("div", Qo, [
      t.icon ? (o(), n("div", Zo, l(t.icon), 1)) : c("", !0),
      e("p", es, l(t.message), 1),
      t.actionLabel ? (o(), S(q, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("action"))
      }, {
        default: a(() => [
          w(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ K(ts, [["__scopeId", "data-v-4466284f"]]), os = { class: "branch-indicator" }, ss = { class: "branch-indicator__info" }, ns = { class: "branch-indicator__label" }, as = { class: "branch-indicator__name" }, ls = {
  key: 0,
  class: "branch-indicator__remote"
}, is = {
  key: 0,
  class: "branch-indicator__status"
}, rs = {
  key: 0,
  class: "branch-indicator__ahead"
}, ds = {
  key: 1,
  class: "branch-indicator__behind"
}, cs = {
  key: 1,
  class: "branch-indicator__actions"
}, us = /* @__PURE__ */ H({
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
    return (d, s) => (o(), n("div", os, [
      e("div", ss, [
        e("span", ns, l(t.label), 1),
        e("span", as, l(t.branchName), 1),
        t.remote ? (o(), n("span", ls, "@" + l(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", is, [
        t.commitsAhead ? (o(), n("span", rs, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), n("span", ds, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      d.$slots.actions ? (o(), n("div", cs, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ms = /* @__PURE__ */ K(us, [["__scopeId", "data-v-cb8dd50e"]]), vs = /* @__PURE__ */ H({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: ee(["detail-label"]),
      style: Ze({ minWidth: t.minWidth })
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ K(vs, [["__scopeId", "data-v-75e9eeb8"]]), fs = /* @__PURE__ */ H({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: ee(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ K(fs, [["__scopeId", "data-v-2f186e4c"]]), gs = { class: "detail-row" }, hs = /* @__PURE__ */ H({
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
    return (d, s) => (o(), n("div", gs, [
      f(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          w(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), S(St, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          w(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : re(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), me = /* @__PURE__ */ K(hs, [["__scopeId", "data-v-ef15664a"]]), ps = { class: "modal-header" }, ys = { class: "modal-body" }, ws = { class: "status-section" }, bs = {
  key: 0,
  class: "status-section"
}, ks = { class: "section-header-row" }, _s = {
  key: 0,
  class: "workflow-group"
}, $s = { class: "workflow-group-header" }, Cs = { class: "workflow-group-title" }, xs = { class: "workflow-list" }, Ss = { class: "workflow-name" }, Is = { class: "workflow-issue" }, Es = {
  key: 1,
  class: "workflow-group"
}, zs = { class: "workflow-group-header" }, Ms = { class: "workflow-group-title" }, Ls = { class: "workflow-list" }, Ts = { class: "workflow-name" }, Rs = { class: "workflow-issue" }, Ds = {
  key: 2,
  class: "workflow-group"
}, Ns = { class: "workflow-group-header" }, Os = { class: "workflow-group-title" }, Us = { class: "workflow-list" }, Bs = { class: "workflow-name" }, Ps = {
  key: 3,
  class: "workflow-group"
}, Vs = { class: "workflow-group-header" }, As = { class: "workflow-group-title" }, Fs = { class: "workflow-list" }, Ws = { class: "workflow-name" }, Gs = {
  key: 4,
  class: "workflow-group"
}, js = { class: "workflow-group-header" }, Hs = { class: "workflow-group-title" }, Ks = { class: "workflow-list" }, qs = { class: "workflow-name" }, Js = {
  key: 5,
  class: "workflow-group"
}, Ys = { class: "workflow-group-title" }, Xs = { class: "expand-icon" }, Qs = {
  key: 0,
  class: "workflow-list"
}, Zs = { class: "workflow-name" }, en = {
  key: 1,
  class: "status-section"
}, tn = {
  key: 0,
  class: "change-group"
}, on = { class: "change-group-header" }, sn = { class: "change-group-title" }, nn = { class: "change-list" }, an = { class: "node-name" }, ln = {
  key: 0,
  class: "dev-badge"
}, rn = {
  key: 1,
  class: "change-group"
}, dn = { class: "change-group-header" }, cn = { class: "change-group-title" }, un = { class: "change-list" }, mn = { class: "node-name" }, vn = {
  key: 0,
  class: "dev-badge"
}, fn = {
  key: 2,
  class: "change-group"
}, gn = { class: "change-list" }, hn = { class: "change-item" }, pn = { class: "node-name" }, yn = {
  key: 3,
  class: "change-group"
}, wn = {
  key: 2,
  class: "status-section"
}, bn = {
  key: 0,
  class: "drift-item"
}, kn = { class: "drift-list" }, _n = {
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
}, Nn = { class: "modal-actions" }, On = /* @__PURE__ */ H({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const d = t, s = z(!1);
    be(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (L, M) => {
      console.log("StatusDetailModal show prop changed from", M, "to", L);
    }, { immediate: !0 });
    const i = D(() => {
      var L, M, _;
      return ((_ = (M = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : _.filter(
        (I) => I.status === "broken" && I.sync_state === "synced"
      )) || [];
    }), g = D(() => {
      var L, M, _;
      return ((_ = (M = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : _.filter(
        (I) => I.status === "broken" && I.sync_state !== "synced"
      )) || [];
    }), y = D(() => {
      var L, M, _;
      return ((_ = (M = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : M.synced) == null ? void 0 : _.filter((I) => {
        var x, R, C;
        const k = (C = (R = (x = d.status) == null ? void 0 : x.workflows) == null ? void 0 : R.analyzed) == null ? void 0 : C.find((h) => h.name === I);
        return !k || k.status !== "broken";
      })) || [];
    }), v = D(() => {
      var L, M, _, I, k;
      return (L = d.status) != null && L.workflows ? (((M = d.status.workflows.new) == null ? void 0 : M.length) ?? 0) > 0 || (((_ = d.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((I = d.status.workflows.deleted) == null ? void 0 : I.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = D(() => {
      var M, _, I;
      const L = (M = d.status) == null ? void 0 : M.git_changes;
      return L ? (((_ = L.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((I = L.nodes_removed) == null ? void 0 : I.length) ?? 0) > 0 || L.workflow_changes || L.has_other_changes : !1;
    }), r = D(() => {
      var L, M, _, I, k, x;
      return !v.value && !m.value && ((M = (L = d.status) == null ? void 0 : L.comparison) == null ? void 0 : M.is_synced) && (((_ = d.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((x = (k = (I = d.status) == null ? void 0 : I.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), u = D(() => {
      var M, _;
      const L = (_ = (M = d.status) == null ? void 0 : M.git_changes) == null ? void 0 : _.workflow_changes;
      return L ? typeof L == "number" ? L : Object.keys(L).length : 0;
    });
    function b(L) {
      return typeof L == "string" ? L : L.name;
    }
    function p(L) {
      return typeof L == "object" && L.is_development === !0;
    }
    return (L, M) => {
      var _, I, k, x, R, C, h, $, E, Z, J, O, N, V, B, Y, P, j, X, ne, se, ve;
      return o(), S(ze, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[5] || (M[5] = (oe) => L.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: M[4] || (M[4] = ke(() => {
            }, ["stop"]))
          }, [
            e("div", ps, [
              M[6] || (M[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[0] || (M[0] = (oe) => L.$emit("close"))
              }, "✕")
            ]),
            e("div", ys, [
              e("div", ws, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[7] || (M[7] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(me, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (o(), n("div", bs, [
                e("div", ks, [
                  f(Ee, { level: "4" }, {
                    default: a(() => [...M[8] || (M[8] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: M[1] || (M[1] = (oe) => L.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (o(), n("div", _s, [
                  e("div", $s, [
                    M[9] || (M[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Cs, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", xs, [
                    (o(!0), n(A, null, Q(i.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ss, l(oe.name), 1),
                      e("span", Is, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), n("div", Es, [
                  e("div", zs, [
                    M[10] || (M[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ms, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", Ls, [
                    (o(!0), n(A, null, Q(g.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ts, l(oe.name), 1),
                      e("span", Rs, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (I = (_ = t.status.workflows) == null ? void 0 : _.new) != null && I.length ? (o(), n("div", Ds, [
                  e("div", Ns, [
                    M[11] || (M[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Os, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Us, [
                    (o(!0), n(A, null, Q(t.status.workflows.new, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Bs, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (x = (k = t.status.workflows) == null ? void 0 : k.modified) != null && x.length ? (o(), n("div", Ps, [
                  e("div", Vs, [
                    M[12] || (M[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", As, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), n(A, null, Q(t.status.workflows.modified, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Ws, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (R = t.status.workflows) == null ? void 0 : R.deleted) != null && C.length ? (o(), n("div", Gs, [
                  e("div", js, [
                    M[13] || (M[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Hs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ks, [
                    (o(!0), n(A, null, Q(t.status.workflows.deleted, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", qs, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), n("div", Js, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: M[2] || (M[2] = (oe) => s.value = !s.value)
                  }, [
                    M[14] || (M[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Ys, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Xs, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Qs, [
                    (o(!0), n(A, null, Q(y.value, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Zs, l(oe), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), n("div", en, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[15] || (M[15] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                ($ = (h = t.status.git_changes) == null ? void 0 : h.nodes_added) != null && $.length ? (o(), n("div", tn, [
                  e("div", on, [
                    M[16] || (M[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", sn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", nn, [
                    (o(!0), n(A, null, Q(t.status.git_changes.nodes_added, (oe) => (o(), n("div", {
                      key: b(oe),
                      class: "change-item"
                    }, [
                      e("span", an, l(b(oe)), 1),
                      p(oe) ? (o(), n("span", ln, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (Z = (E = t.status.git_changes) == null ? void 0 : E.nodes_removed) != null && Z.length ? (o(), n("div", rn, [
                  e("div", dn, [
                    M[17] || (M[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", cn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", un, [
                    (o(!0), n(A, null, Q(t.status.git_changes.nodes_removed, (oe) => (o(), n("div", {
                      key: b(oe),
                      class: "change-item"
                    }, [
                      e("span", mn, l(b(oe)), 1),
                      p(oe) ? (o(), n("span", vn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (J = t.status.git_changes) != null && J.workflow_changes ? (o(), n("div", fn, [
                  M[18] || (M[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", gn, [
                    e("div", hn, [
                      e("span", pn, l(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (O = t.status.git_changes) != null && O.has_other_changes ? (o(), n("div", yn, [...M[19] || (M[19] = [
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
              (N = t.status.comparison) != null && N.is_synced ? c("", !0) : (o(), n("div", wn, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[20] || (M[20] = [
                    w("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                M[21] || (M[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (B = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && B.length ? (o(), n("div", bn, [
                  f(me, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", kn, [
                    (o(!0), n(A, null, Q(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", _n, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (P = (Y = t.status.comparison) == null ? void 0 : Y.extra_nodes) != null && P.length ? (o(), n("div", $n, [
                  f(me, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Cn, [
                    (o(!0), n(A, null, Q(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", xn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (X = (j = t.status.comparison) == null ? void 0 : j.version_mismatches) != null && X.length ? (o(), n("div", Sn, [
                  f(me, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (ne = t.status.comparison) != null && ne.packages_in_sync ? c("", !0) : (o(), n("div", In, [
                  f(me, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ve = (se = t.status.comparison) == null ? void 0 : se.disabled_nodes) != null && ve.length ? (o(), n("div", En, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[22] || (M[22] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", zn, [
                  M[23] || (M[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Mn, [
                  (o(!0), n(A, null, Q(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (o(), n("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + l(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", Ln, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Tn, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[24] || (M[24] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Rn, [
                  M[25] || (M[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                M[26] || (M[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              r.value ? (o(), n("div", Dn, [...M[27] || (M[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Nn, [
              f(q, {
                variant: "secondary",
                onClick: M[3] || (M[3] = (oe) => L.$emit("close"))
              }, {
                default: a(() => [...M[28] || (M[28] = [
                  w(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Nt = /* @__PURE__ */ K(On, [["__scopeId", "data-v-cbde957e"]]), Un = { class: "health-section-header" }, Bn = { style: { "margin-top": "var(--cg-space-1)" } }, Pn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Vn = /* @__PURE__ */ H({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: d }) {
    const s = t, i = z(!1), g = z(!1);
    be(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function v() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function m() {
      i.value = !1, r("view-workflows");
    }
    const r = d, u = D(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), b = D(() => {
      const C = s.status.git_changes;
      return C.nodes_added.length > 0 || C.nodes_removed.length > 0 || C.workflow_changes || C.has_other_changes;
    }), p = D(() => u.value || b.value), L = D(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), M = D(() => s.status.git_changes.has_other_changes), _ = D(() => {
      var C;
      return ((C = s.status.workflows.analyzed) == null ? void 0 : C.filter(
        (h) => h.status === "broken" && h.sync_state === "synced"
      )) || [];
    }), I = D(() => {
      var C;
      return ((C = s.status.workflows.analyzed) == null ? void 0 : C.filter(
        (h) => h.status === "broken" && h.sync_state !== "synced"
      )) || [];
    }), k = D(() => _.value.length > 0 || I.value.length > 0), x = D(() => k.value || s.status.missing_models_count > 0 || p.value || !s.status.comparison.is_synced), R = D(() => {
      const C = [];
      return s.status.workflows.new.length > 0 && C.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && C.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && C.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && C.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && C.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${C.length > 0 ? C.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (C, h) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: h[0] || (h[0] = ($) => g.value = !0),
            onMouseleave: h[1] || (h[1] = ($) => g.value = !1)
          }, [
            e("div", Un, [
              f(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...h[11] || (h[11] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(so, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), S(q, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...h[12] || (h[12] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            f(Oo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), S(Ae, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), S(Ae, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), S(Ae, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                f(Ae, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), S(Ae, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), S(Ae, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), S(Ae, {
                  key: 2,
                  icon: "●",
                  count: L.value,
                  label: L.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                M.value ? (o(), S(Ae, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), S(Ae, {
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
            f(ms, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                f(q, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h[2] || (h[2] = ($) => C.$emit("switch-branch"))
                }, {
                  default: a(() => [...h[13] || (h[13] = [
                    w(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), S(Xe, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              f(q, {
                variant: "primary",
                size: "sm",
                onClick: h[3] || (h[3] = ($) => C.$emit("create-branch"))
              }, {
                default: a(() => [...h[14] || (h[14] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          x.value ? (o(), n("div", Pn, [
            f(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...h[15] || (h[15] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            _.value.length > 0 ? (o(), S(Xe, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} committed workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: _.value.map(($) => `${$.name} — ${$.issue_summary}`)
            }, {
              actions: a(() => [
                f(q, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[4] || (h[4] = ($) => C.$emit("view-workflows"))
                }, {
                  default: a(() => [...h[16] || (h[16] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            I.value.length > 0 ? (o(), S(Xe, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: I.value.map(($) => `${$.name} — ${$.issue_summary}`)
            }, {
              actions: a(() => [
                f(q, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[5] || (h[5] = ($) => C.$emit("view-workflows"))
                }, {
                  default: a(() => [...h[17] || (h[17] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), S(Xe, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                f(q, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[6] || (h[6] = ($) => C.$emit("view-workflows"))
                }, {
                  default: a(() => [...h[18] || (h[18] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            p.value ? (o(), S(Xe, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: R.value
            }, {
              actions: a(() => [
                f(q, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: a(() => [...h[19] || (h[19] = [
                    w(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                f(q, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[7] || (h[7] = ($) => C.$emit("commit-changes"))
                }, {
                  default: a(() => [...h[20] || (h[20] = [
                    w(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), S(Xe, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                f(q, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h[8] || (h[8] = ($) => C.$emit("view-debug"))
                }, {
                  default: a(() => [...h[21] || (h[21] = [
                    w(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                f(q, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[9] || (h[9] = ($) => C.$emit("sync-environment"))
                }, {
                  default: a(() => [...h[22] || (h[22] = [
                    w(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !x.value && !b.value ? (o(), S(Oe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      f(Nt, {
        show: i.value,
        status: t.status,
        onClose: h[10] || (h[10] = ($) => i.value = !1),
        onNavigateWorkflows: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), An = /* @__PURE__ */ K(Vn, [["__scopeId", "data-v-05737be6"]]), Fn = ["type", "value", "placeholder", "disabled"], Wn = /* @__PURE__ */ H({
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
    const i = t, g = s, y = z(null);
    function v(m) {
      const r = m.target.value;
      g("update:modelValue", r);
    }
    return be(() => {
      i.autoFocus && y.value && y.value.focus();
    }), d({
      focus: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.blur();
      }
    }), (m, r) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ee(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        r[0] || (r[0] = Ge((u) => m.$emit("enter"), ["enter"])),
        r[1] || (r[1] = Ge((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (u) => m.$emit("focus")),
      onBlur: r[3] || (r[3] = (u) => m.$emit("blur"))
    }, null, 42, Fn));
  }
}), ft = /* @__PURE__ */ K(Wn, [["__scopeId", "data-v-0380d08f"]]), Gn = { class: "branch-create-form" }, jn = { class: "form-actions" }, Hn = /* @__PURE__ */ H({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, i = z(""), g = D(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function y() {
      g.value && (s("create", i.value.trim()), i.value = "");
    }
    function v() {
      i.value = "", s("cancel");
    }
    return (m, r) => (o(), n("div", Gn, [
      f(ft, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => i.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", jn, [
        f(q, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: a(() => [...r[1] || (r[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(q, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: a(() => [...r[2] || (r[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Kn = /* @__PURE__ */ K(Hn, [["__scopeId", "data-v-7c500394"]]), qn = { class: "branch-list-item__indicator" }, Jn = { class: "branch-list-item__name" }, Yn = {
  key: 0,
  class: "branch-list-item__actions"
}, Xn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Qn = /* @__PURE__ */ H({
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
      class: ee(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, [
      e("span", qn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Jn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", Yn, [
        re(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Xn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ K(Qn, [["__scopeId", "data-v-c6581a24"]]), ea = {
  key: 2,
  class: "branch-list"
}, ta = /* @__PURE__ */ H({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, i = z(!1);
    function g(v) {
      s("create", v), y();
    }
    function y() {
      i.value = !1;
    }
    return (v, m) => (o(), S(xe, null, {
      header: a(() => [
        f(Se, { title: "BRANCHES" }, {
          actions: a(() => [
            f(q, {
              variant: "ghost",
              size: "sm",
              onClick: m[0] || (m[0] = (r) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...m[1] || (m[1] = [
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
        i.value ? (o(), S(Kn, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), S(Oe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", ea, [
          (o(!0), n(A, null, Q(t.branches, (r) => (o(), S(Zn, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: a(() => [
              r.is_current ? c("", !0) : (o(), S(q, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (u) => v.$emit("switch", r.name)
              }, {
                default: a(() => [...m[2] || (m[2] = [
                  w(" Switch ", -1)
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
}), oa = /* @__PURE__ */ K(ta, [["__scopeId", "data-v-763d6ec4"]]), sa = { class: "commit-list" }, na = /* @__PURE__ */ H({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", sa, [
      re(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), aa = /* @__PURE__ */ K(na, [["__scopeId", "data-v-8c5ee761"]]), la = { class: "commit-hash" }, ia = /* @__PURE__ */ H({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = D(() => d.hash.slice(0, d.length));
    return (i, g) => (o(), n("span", la, l(s.value), 1));
  }
}), Wt = /* @__PURE__ */ K(ia, [["__scopeId", "data-v-7c333cc6"]]), ra = { class: "commit-message" }, da = { class: "commit-date" }, ca = /* @__PURE__ */ H({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = d;
    function g() {
      s.clickable && i("click");
    }
    return (y, v) => (o(), n("div", {
      class: ee(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ra, l(t.message), 1),
      e("span", da, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = ke(() => {
        }, ["stop"]))
      }, [
        re(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ua = /* @__PURE__ */ K(ca, [["__scopeId", "data-v-dd7c621b"]]), ma = /* @__PURE__ */ H({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), S(xe, null, {
      header: a(() => [
        f(Se, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), S(Oe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), S(aa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(A, null, Q(t.commits, (i) => (o(), S(ua, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (g) => d.$emit("select", i)
            }, {
              actions: a(() => [
                f(q, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => d.$emit("checkout", i),
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
}), va = /* @__PURE__ */ K(ma, [["__scopeId", "data-v-981c3c64"]]), fp = [
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
], gp = {
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
], hp = [
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
function Ce() {
  const t = z(!1), d = z(null);
  async function s(G, le) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const ge = await window.app.api.fetchApi(G, le);
    if (!ge.ok) {
      const F = await ge.json().catch(() => ({}));
      throw new Error(F.error || F.message || `Request failed: ${ge.status}`);
    }
    return ge.json();
  }
  async function i(G = !1) {
    return s(G ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(G, le = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: G, allow_issues: le })
    });
  }
  async function y(G = 10, le = 0) {
    return s(`/v2/comfygit/log?limit=${G}&offset=${le}`);
  }
  async function v(G) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function m() {
    return s("/v2/comfygit/branches");
  }
  async function r(G) {
    return s(`/v2/comfygit/commit/${G}`);
  }
  async function u(G, le = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: G, force: le })
    });
  }
  async function b(G, le = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, start_point: le })
    });
  }
  async function p(G, le = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: G, force: le })
    });
  }
  async function L() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const G = await i();
        return [{
          name: G.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + G.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: G.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: G.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function M(G) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: G })
    });
  }
  async function _() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function I(G, le, ge) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, pytorch_backend: le, clone_from: ge })
    });
  }
  async function k(G) {
    return s(`/v2/workspace/environments/${G}`, {
      method: "DELETE"
    });
  }
  async function x(G = !1) {
    try {
      return s(G ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const le = await i(G), ge = [];
      return le.workflows.new.forEach(($e) => {
        ge.push({ name: $e, status: "new", missing_nodes: 0, missing_models: 0, path: $e });
      }), le.workflows.modified.forEach(($e) => {
        ge.push({ name: $e, status: "modified", missing_nodes: 0, missing_models: 0, path: $e });
      }), le.workflows.synced.forEach(($e) => {
        ge.push({ name: $e, status: "synced", missing_nodes: 0, missing_models: 0, path: $e });
      }), ge;
    }
  }
  async function R(G) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/details`);
  }
  async function C(G) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/resolve`, {
      method: "POST"
    });
  }
  async function h(G, le, ge) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: le, install_models: ge })
    });
  }
  async function $(G, le, ge) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: le, importance: ge })
    });
  }
  async function E() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Z() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function J(G) {
    return s(`/v2/workspace/models/details/${encodeURIComponent(G)}`);
  }
  async function O(G) {
    return s("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function N(G, le) {
    return s(`/v2/workspace/models/${G}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: le })
    });
  }
  async function V(G) {
    return s(`/v2/workspace/models/${G}`, {
      method: "DELETE"
    });
  }
  async function B(G) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function Y() {
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
  async function P(G) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function j(G, le) {
    try {
      const ge = new URLSearchParams();
      return G && ge.append("level", G), le && ge.append("lines", le.toString()), s(`/v2/comfygit/debug/logs?${ge}`);
    } catch {
      return [];
    }
  }
  async function X(G, le) {
    try {
      const ge = new URLSearchParams();
      return G && ge.append("level", G), le && ge.append("lines", le.toString()), s(`/v2/workspace/debug/logs?${ge}`);
    } catch {
      return [];
    }
  }
  async function ne() {
    try {
      return s("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0
      };
    }
  }
  async function se(G) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(G)}/install`, {
      method: "POST"
    });
  }
  async function ve(G) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(G)}/update`, {
      method: "POST"
    });
  }
  async function oe(G) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function Me() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function pe(G, le) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, url: le })
    });
  }
  async function et(G) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function fe(G, le, ge) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: le, push_url: ge })
    });
  }
  async function Le(G) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(G)}/fetch`, {
      method: "POST"
    });
  }
  async function lt(G) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(G)}/status`);
    } catch {
      return null;
    }
  }
  async function Je(G = "skip", le = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: G,
        remove_extra_nodes: le
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: i,
    commit: g,
    getHistory: y,
    exportEnv: v,
    // Git Operations
    getBranches: m,
    getCommitDetail: r,
    checkout: u,
    createBranch: b,
    switchBranch: p,
    // Environment Management
    getEnvironments: L,
    switchEnvironment: M,
    getSwitchProgress: _,
    createEnvironment: I,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: x,
    getWorkflowDetails: R,
    resolveWorkflow: C,
    installWorkflowDeps: h,
    setModelImportance: $,
    // Model Management
    getEnvironmentModels: E,
    getWorkspaceModels: Z,
    getModelDetails: J,
    openFileLocation: O,
    updateModelSource: N,
    deleteModel: V,
    downloadModel: B,
    // Settings
    getConfig: Y,
    updateConfig: P,
    // Debug/Logs
    getEnvironmentLogs: j,
    getWorkspaceLogs: X,
    // Node Management
    getNodes: ne,
    installNode: se,
    updateNode: ve,
    uninstallNode: oe,
    // Git Remotes
    getRemotes: Me,
    addRemote: pe,
    removeRemote: et,
    updateRemoteUrl: fe,
    fetchRemote: Le,
    getRemoteSyncStatus: lt,
    // Environment Sync
    syncEnvironmentManually: Je
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
}, ba = {
  key: 0,
  class: "base-modal-footer"
}, ka = /* @__PURE__ */ H({
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
    const s = t, i = d;
    function g() {
      s.closeOnOverlayClick && i("close");
    }
    function y(v) {
      v.key === "Escape" && i("close");
    }
    return be(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), no(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (v, m) => (o(), S(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ee(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", ga, [
            re(v.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", ha, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (r) => v.$emit("close"))
            }, [...m[2] || (m[2] = [
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
            t.loading ? (o(), n("div", ya, "Loading...")) : t.error ? (o(), n("div", wa, l(t.error), 1)) : re(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (o(), n("div", ba, [
            re(v.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), gt = /* @__PURE__ */ K(ka, [["__scopeId", "data-v-2125a0e6"]]), _a = ["type", "disabled"], $a = {
  key: 0,
  class: "spinner"
}, Ca = /* @__PURE__ */ H({
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
      class: ee(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", $a)) : c("", !0),
      re(d.$slots, "default", {}, void 0, !0)
    ], 10, _a));
  }
}), ie = /* @__PURE__ */ K(Ca, [["__scopeId", "data-v-f3452606"]]), xa = {
  key: 0,
  class: "base-title-count"
}, Sa = /* @__PURE__ */ H({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), S(It(`h${t.level}`), {
      class: ee(["base-title", t.variant])
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", xa, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ut = /* @__PURE__ */ K(Sa, [["__scopeId", "data-v-5a01561d"]]), Ia = ["value", "disabled"], Ea = {
  key: 0,
  value: "",
  disabled: ""
}, za = ["value"], Ma = {
  key: 0,
  class: "base-select-error"
}, La = /* @__PURE__ */ H({
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
    function d(i) {
      return typeof i == "string" ? i : i.value;
    }
    function s(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, g) => (o(), n("div", {
      class: ee(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ee(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (y) => i.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Ea, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(A, null, Q(t.options, (y) => (o(), n("option", {
          key: d(y),
          value: d(y)
        }, l(s(y)), 9, za))), 128))
      ], 42, Ia),
      t.error ? (o(), n("span", Ma, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ta = /* @__PURE__ */ K(La, [["__scopeId", "data-v-7436d745"]]), Ra = { class: "popover-header" }, Da = { class: "popover-title" }, Na = { class: "popover-content" }, Oa = {
  key: 0,
  class: "popover-actions"
}, Ua = /* @__PURE__ */ H({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), S(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Ze({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Ra, [
            e("h4", Da, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Na, [
            re(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Oa, [
            re(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), je = /* @__PURE__ */ K(Ua, [["__scopeId", "data-v-42815ace"]]), Ba = { class: "detail-section" }, Pa = {
  key: 0,
  class: "empty-message"
}, Va = { class: "model-header" }, Aa = { class: "model-name" }, Fa = { class: "model-details" }, Wa = { class: "model-row" }, Ga = { class: "model-row" }, ja = { class: "label" }, Ha = {
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
}, ol = /* @__PURE__ */ H({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: v } = Ce(), m = z(null), r = z(!1), u = z(null), b = z(!1), p = z({}), L = z({}), M = z(!1), _ = z(/* @__PURE__ */ new Set()), I = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(O) {
      switch (O) {
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
    function x(O) {
      switch (O) {
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
    function R(O) {
      if (!O.loaded_by || O.loaded_by.length === 0) return [];
      const N = O.hash || O.filename;
      return _.value.has(N) ? O.loaded_by : O.loaded_by.slice(0, 3);
    }
    function C(O) {
      return _.value.has(O);
    }
    function h(O) {
      _.value.has(O) ? _.value.delete(O) : _.value.add(O), _.value = new Set(_.value);
    }
    async function $() {
      r.value = !0, u.value = null;
      try {
        m.value = await g(s.workflowName);
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function E(O, N) {
      p.value[O] = N, b.value = !0;
    }
    async function Z() {
      if (!b.value) {
        i("close");
        return;
      }
      r.value = !0, u.value = null;
      try {
        for (const [O, N] of Object.entries(p.value))
          await y(s.workflowName, O, N);
        i("refresh"), i("close");
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    async function J(O) {
      L.value[O] = !0, u.value = null;
      try {
        await v(s.workflowName, !0, !1), await $();
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to install node";
      } finally {
        L.value[O] = !1;
      }
    }
    return be($), (O, N) => (o(), n(A, null, [
      f(gt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: u.value || void 0,
        onClose: N[5] || (N[5] = (V) => i("close"))
      }, {
        body: a(() => [
          m.value ? (o(), n(A, { key: 0 }, [
            e("section", Ba, [
              f(ut, { variant: "section" }, {
                default: a(() => [
                  w("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), n("div", Pa, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(A, null, Q(m.value.models, (V) => (o(), n("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", Va, [
                  N[7] || (N[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Aa, l(V.filename), 1)
                ]),
                e("div", Fa, [
                  e("div", Wa, [
                    N[8] || (N[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ee(["value", k(V.status)])
                    }, l(x(V.status)), 3)
                  ]),
                  e("div", Ga, [
                    e("span", ja, [
                      N[9] || (N[9] = w(" Importance: ", -1)),
                      f(Ft, {
                        size: 14,
                        title: "About importance levels",
                        onClick: N[0] || (N[0] = (B) => M.value = !0)
                      })
                    ]),
                    f(Ta, {
                      "model-value": p.value[V.filename] || V.importance,
                      options: I,
                      "onUpdate:modelValue": (B) => E(V.filename, B)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), n("div", Ha, [
                    N[10] || (N[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ka, [
                      (o(!0), n(A, null, Q(R(V), (B, Y) => (o(), n("div", {
                        key: `${B.node_id}-${Y}`,
                        class: "node-reference"
                      }, l(B.node_type) + " (Node #" + l(B.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (B) => h(V.hash || V.filename)
                      }, l(C(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, qa)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  V.size_mb ? (o(), n("div", Ja, [
                    N[11] || (N[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Ya, l(V.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                V.status !== "available" ? (o(), n("div", Xa, [
                  V.status === "downloadable" ? (o(), S(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: N[1] || (N[1] = (B) => i("resolve"))
                  }, {
                    default: a(() => [...N[12] || (N[12] = [
                      w(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), S(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[2] || (N[2] = (B) => i("resolve"))
                  }, {
                    default: a(() => [...N[13] || (N[13] = [
                      w(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), S(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[3] || (N[3] = (B) => i("resolve"))
                  }, {
                    default: a(() => [...N[14] || (N[14] = [
                      w(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Qa, [
              f(ut, { variant: "section" }, {
                default: a(() => [
                  w("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), n("div", Za, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(A, null, Q(m.value.nodes, (V) => (o(), n("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ee(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, l(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", el, l(V.name), 1),
                V.version ? (o(), n("span", tl, "v" + l(V.version), 1)) : c("", !0),
                V.status === "missing" ? (o(), S(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: L.value[V.name],
                  onClick: (B) => J(V.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...N[15] || (N[15] = [
                    w(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          f(ie, {
            variant: "secondary",
            onClick: N[4] || (N[4] = (V) => i("close"))
          }, {
            default: a(() => [...N[16] || (N[16] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), S(ie, {
            key: 0,
            variant: "primary",
            onClick: Z
          }, {
            default: a(() => [...N[17] || (N[17] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(je, {
        show: M.value,
        title: "Model Importance Levels",
        onClose: N[6] || (N[6] = (V) => M.value = !1)
      }, {
        content: a(() => [...N[18] || (N[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              w(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              w(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              w(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sl = /* @__PURE__ */ K(ol, [["__scopeId", "data-v-0b14d32e"]]), ue = Vt({
  items: [],
  status: "idle"
});
let Ve = null;
function Gt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return ue.items.find((d) => d.id === t);
}
async function tt() {
  if (ue.status === "downloading") return;
  const t = ue.items.find((d) => d.status === "queued");
  if (!t) {
    ue.status = "idle";
    return;
  }
  ue.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await nl(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ue.status = "idle", tt();
  }
}
async function nl(t) {
  return new Promise((d, s) => {
    Ve && (Ve.close(), Ve = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ve = g;
    let y = Date.now(), v = 0, m = !1;
    g.onmessage = (r) => {
      try {
        const u = JSON.parse(r.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), p = (b - y) / 1e3;
            if (p > 0.5) {
              const L = t.downloaded - v;
              if (t.speed = L / p, y = b, v = t.downloaded, t.speed > 0 && t.size > 0) {
                const M = t.size - t.downloaded;
                t.eta = M / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, g.close(), Ve = null, d();
            break;
          case "error":
            m = !0, g.close(), Ve = null, s(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Ve = null, m || s(new Error("Connection lost"));
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
      if (ue.items.some((g) => g.url === s.url && g.filename === s.filename))
        continue;
      const i = {
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
      ue.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function bt() {
  function t(k) {
    for (const x of k) {
      if (ue.items.some(
        (h) => h.url === x.url && h.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(h.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const C = {
        id: Gt(),
        workflow: x.workflow,
        filename: x.filename,
        url: x.url,
        targetPath: x.targetPath,
        size: x.size || 0,
        type: x.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ue.items.push(C);
    }
    ue.status === "idle" && tt();
  }
  async function d(k) {
    const x = _t(k);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), x.status = "failed", x.error = "Cancelled by user", ue.status = "idle", tt();
      } else if (x.status === "queued") {
        const R = ue.items.findIndex((C) => C.id === k);
        R >= 0 && ue.items.splice(R, 1);
      }
    }
  }
  function s(k) {
    const x = _t(k);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, ue.status === "idle" && tt());
  }
  function i(k) {
    const x = _t(k);
    !x || x.status !== "paused" || (x.status = "queued", ue.status === "idle" && tt());
  }
  function g() {
    const k = ue.items.filter((x) => x.status === "paused");
    for (const x of k)
      x.status = "queued";
    ue.status === "idle" && tt();
  }
  function y(k) {
    const x = ue.items.findIndex((R) => R.id === k);
    x >= 0 && ["completed", "failed", "paused"].includes(ue.items[x].status) && ue.items.splice(x, 1);
  }
  function v() {
    ue.items = ue.items.filter((k) => k.status !== "completed");
  }
  function m() {
    ue.items = ue.items.filter((k) => k.status !== "failed");
  }
  const r = D(
    () => ue.items.find((k) => k.status === "downloading")
  ), u = D(
    () => ue.items.filter((k) => k.status === "queued")
  ), b = D(
    () => ue.items.filter((k) => k.status === "completed")
  ), p = D(
    () => ue.items.filter((k) => k.status === "failed")
  ), L = D(
    () => ue.items.filter((k) => k.status === "paused")
  ), M = D(() => ue.items.length > 0), _ = D(
    () => ue.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), I = D(
    () => ue.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: ao(ue),
    // Computed
    currentDownload: r,
    queuedItems: u,
    completedItems: b,
    failedItems: p,
    pausedItems: L,
    hasItems: M,
    activeCount: _,
    hasPaused: I,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: i,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: v,
    clearFailed: m,
    loadPendingDownloads: al
  };
}
function ll() {
  const t = z(null), d = z(null), s = z([]), i = z([]), g = z(!1), y = z(null);
  async function v(k, x) {
    var C;
    if (!((C = window.app) != null && C.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(k, x);
    if (!R.ok) {
      const h = await R.json().catch(() => ({})), $ = h.error || h.message || `Request failed: ${R.status}`;
      throw new Error($);
    }
    return R.json();
  }
  async function m(k) {
    g.value = !0, y.value = null;
    try {
      let x;
      return yt() || (x = await v(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const R = x instanceof Error ? x.message : "Unknown error occurred";
      throw y.value = R, x;
    } finally {
      g.value = !1;
    }
  }
  async function r(k, x, R) {
    g.value = !0, y.value = null;
    try {
      let C;
      if (!yt()) {
        const h = Object.fromEntries(x), $ = Object.fromEntries(R);
        C = await v(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: h,
              model_choices: $
            })
          }
        );
      }
      return d.value = C, C;
    } catch (C) {
      const h = C instanceof Error ? C.message : "Unknown error occurred";
      throw y.value = h, C;
    } finally {
      g.value = !1;
    }
  }
  async function u(k, x = 10) {
    g.value = !0, y.value = null;
    try {
      let R;
      return yt() || (R = await v(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: x })
        }
      )), s.value = R.results, R.results;
    } catch (R) {
      const C = R instanceof Error ? R.message : "Unknown error occurred";
      throw y.value = C, R;
    } finally {
      g.value = !1;
    }
  }
  async function b(k, x = 10) {
    g.value = !0, y.value = null;
    try {
      let R;
      return yt() || (R = await v(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: x })
        }
      )), i.value = R.results, R.results;
    } catch (R) {
      const C = R instanceof Error ? R.message : "Unknown error occurred";
      throw y.value = C, R;
    } finally {
      g.value = !1;
    }
  }
  const p = Vt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function L() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.error = void 0;
  }
  async function M(k, x, R) {
    L(), p.phase = "resolving", y.value = null;
    const C = Object.fromEntries(x), h = Object.fromEntries(R);
    try {
      const $ = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: C,
          model_choices: h
        })
      });
      if (!$.ok)
        throw new Error(`Request failed: ${$.status}`);
      if (!$.body)
        throw new Error("No response body");
      const E = $.body.getReader(), Z = new TextDecoder();
      let J = "";
      for (; ; ) {
        const { done: O, value: N } = await E.read();
        if (O) break;
        J += Z.decode(N, { stream: !0 });
        const V = J.split(`

`);
        J = V.pop() || "";
        for (const B of V) {
          if (!B.trim()) continue;
          const Y = B.split(`
`);
          let P = "", j = "";
          for (const X of Y)
            X.startsWith("event: ") ? P = X.slice(7) : X.startsWith("data: ") && (j = X.slice(6));
          if (j)
            try {
              const X = JSON.parse(j);
              _(P, X);
            } catch (X) {
              console.warn("Failed to parse SSE event:", X);
            }
        }
      }
    } catch ($) {
      const E = $ instanceof Error ? $.message : "Unknown error occurred";
      throw y.value = E, p.error = E, p.phase = "error", $;
    }
  }
  function _(k, x) {
    switch (k) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = x.total;
        break;
      case "file_start":
        p.currentFile = x.filename, p.currentFileIndex = x.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = x.downloaded, p.bytesTotal = x.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: x.filename,
          success: x.success,
          error: x.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = x.nodes_to_install || [], x.download_results && (p.completedFiles = x.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = x.message, p.phase = "error", y.value = x.message;
        break;
    }
  }
  function I(k, x) {
    const { addToQueue: R } = bt(), C = x.filter((h) => h.url && h.target_path).map((h) => ({
      workflow: k,
      filename: h.filename,
      url: h.url,
      targetPath: h.target_path,
      size: h.size || 0,
      type: "model"
    }));
    return C.length > 0 && R(C), C.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
    modelSearchResults: i,
    isLoading: g,
    error: y,
    progress: p,
    // Methods
    analyzeWorkflow: m,
    applyResolution: r,
    applyResolutionWithProgress: M,
    searchNodes: u,
    searchModels: b,
    resetProgress: L,
    queueModelDownloads: I
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
}, fl = { class: "stepper-content" }, gl = /* @__PURE__ */ H({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: d }) {
    const s = t, i = d;
    function g(u) {
      var b;
      if ((b = s.stepStats) != null && b[u]) {
        const p = s.stepStats[u];
        return p.total > 0 && p.resolved === p.total;
      }
      return s.completedSteps.includes(u);
    }
    function y(u) {
      var b;
      if ((b = s.stepStats) != null && b[u]) {
        const p = s.stepStats[u];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function v(u) {
      return g(u) ? "state-complete" : y(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function r(u) {
      i("step-change", u);
    }
    return (u, b) => (o(), n("div", il, [
      e("div", rl, [
        (o(!0), n(A, null, Q(t.steps, (p, L) => (o(), n("div", {
          key: p.id,
          class: ee(["step", {
            active: t.currentStep === p.id,
            completed: g(p.id),
            "in-progress": y(p.id),
            disabled: m(p.id)
          }]),
          onClick: (M) => r(p.id)
        }, [
          e("div", {
            class: ee(["step-indicator", v(p.id)])
          }, [
            g(p.id) ? (o(), n("span", cl, "✓")) : (o(), n("span", ul, l(L + 1), 1))
          ], 2),
          e("div", ml, l(p.label), 1),
          L < t.steps.length - 1 ? (o(), n("div", vl)) : c("", !0)
        ], 10, dl))), 128))
      ]),
      e("div", fl, [
        re(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), hl = /* @__PURE__ */ K(gl, [["__scopeId", "data-v-2a7b3af8"]]), pl = /* @__PURE__ */ H({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = D(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${s.value}`), g = D(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, v) => (o(), n("span", {
      class: ee(["confidence-badge", i.value, t.size])
    }, l(g.value), 3));
  }
}), Lt = /* @__PURE__ */ K(pl, [["__scopeId", "data-v-17ec4b80"]]), yl = { class: "node-info" }, wl = { class: "node-info-text" }, bl = { class: "item-body" }, kl = {
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
}, Dl = { class: "action-buttons" }, Nl = /* @__PURE__ */ H({
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
    const s = t, i = d, g = D(() => !!s.choice);
    D(() => {
      var m;
      return (m = s.choice) == null ? void 0 : m.action;
    }), D(() => {
      var m;
      return (m = s.choice) == null ? void 0 : m.package_id;
    });
    const y = D(() => {
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
    function v(m) {
      i("option-selected", m);
    }
    return (m, r) => (o(), n("div", {
      class: ee(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", yl, [
        e("span", wl, [
          r[7] || (r[7] = w("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: ee(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", bl, [
        g.value ? (o(), n("div", kl, [
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (u) => i("clear-choice"))
          }, {
            default: a(() => [...r[8] || (r[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", _l, [
          r[12] || (r[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", $l, [
            (o(!0), n(A, null, Q(t.options, (u, b) => (o(), n("label", {
              key: u.package_id,
              class: ee(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (p) => v(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (p) => v(b)
              }, null, 40, xl),
              e("div", Sl, [
                e("div", Il, [
                  e("span", El, l(u.package_id), 1),
                  f(Lt, {
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
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: r[1] || (r[1] = (u) => i("search"))
            }, {
              default: a(() => [...r[9] || (r[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: r[2] || (r[2] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[10] || (r[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[3] || (r[3] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[11] || (r[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Rl, [
          r[16] || (r[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Dl, [
            f(ie, {
              variant: "primary",
              size: "sm",
              onClick: r[4] || (r[4] = (u) => i("search"))
            }, {
              default: a(() => [...r[13] || (r[13] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[5] || (r[5] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[14] || (r[14] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[6] || (r[6] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[15] || (r[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ol = /* @__PURE__ */ K(Nl, [["__scopeId", "data-v-e02629e7"]]), Ul = { class: "item-navigator" }, Bl = { class: "nav-item-info" }, Pl = ["title"], Vl = { class: "nav-controls" }, Al = { class: "nav-arrows" }, Fl = ["disabled"], Wl = ["disabled"], Gl = { class: "nav-position" }, jl = /* @__PURE__ */ H({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (i, g) => (o(), n("div", Ul, [
      e("div", Bl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Pl)
      ]),
      e("div", Vl, [
        e("div", Al, [
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
}), jt = /* @__PURE__ */ K(jl, [["__scopeId", "data-v-74af7920"]]), Hl = ["type", "value", "placeholder", "disabled"], Kl = {
  key: 0,
  class: "base-input-error"
}, ql = /* @__PURE__ */ H({
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
      class: ee(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ee(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ge((i) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ge((i) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Hl),
      t.error ? (o(), n("span", Kl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ K(ql, [["__scopeId", "data-v-9ba02cdc"]]), Jl = { class: "node-resolution-step" }, Yl = { class: "step-header" }, Xl = { class: "stat-badge" }, Ql = {
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
}, di = { class: "node-manual-entry-modal" }, ci = { class: "node-modal-body" }, ui = { class: "node-modal-actions" }, mi = /* @__PURE__ */ H({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, g = z(0), y = z(!1), v = z(!1), m = z(""), r = z(""), u = z([]), b = z(!1), p = D(() => s.nodes[g.value]), L = D(() => s.nodes.filter((V) => s.nodeChoices.has(V.node_type)).length), M = D(() => {
      var B;
      if (!p.value) return "not-found";
      const V = s.nodeChoices.get(p.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (B = p.value.options) != null && B.length ? "ambiguous" : "not-found";
    }), _ = D(() => {
      var B;
      if (!p.value) return;
      const V = s.nodeChoices.get(p.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return V.package_id ? `→ ${V.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (B = p.value.options) != null && B.length ? `${p.value.options.length} matches` : "Not Found";
    });
    function I(V) {
      V >= 0 && V < s.nodes.length && (g.value = V);
    }
    function k() {
      p.value && i("mark-optional", p.value.node_type);
    }
    function x() {
      p.value && i("skip", p.value.node_type);
    }
    function R(V) {
      p.value && i("option-selected", p.value.node_type, V);
    }
    function C() {
      p.value && i("clear-choice", p.value.node_type);
    }
    function h() {
      p.value && (m.value = p.value.node_type, y.value = !0);
    }
    function $() {
      r.value = "", v.value = !0;
    }
    function E() {
      y.value = !1, m.value = "", u.value = [];
    }
    function Z() {
      v.value = !1, r.value = "";
    }
    function J() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function O(V) {
      p.value && (i("manual-entry", p.value.node_type, V.package_id), E());
    }
    function N() {
      !p.value || !r.value.trim() || (i("manual-entry", p.value.node_type, r.value.trim()), Z());
    }
    return (V, B) => {
      var Y, P;
      return o(), n("div", Jl, [
        e("div", Yl, [
          B[4] || (B[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Xl, l(L.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        p.value ? (o(), S(jt, {
          key: 0,
          "item-name": p.value.node_type,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: B[0] || (B[0] = (j) => I(g.value - 1)),
          onNext: B[1] || (B[1] = (j) => I(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        p.value ? (o(), n("div", Ql, [
          f(Ol, {
            "node-type": p.value.node_type,
            "has-multiple-options": !!((Y = p.value.options) != null && Y.length),
            options: p.value.options,
            choice: (P = t.nodeChoices) == null ? void 0 : P.get(p.value.node_type),
            status: M.value,
            "status-label": _.value,
            onMarkOptional: k,
            onSkip: x,
            onManualEntry: $,
            onSearch: h,
            onOptionSelected: R,
            onClearChoice: C
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Zl, [...B[5] || (B[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), S(ze, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(E, ["self"])
          }, [
            e("div", ei, [
              e("div", { class: "node-modal-header" }, [
                B[6] || (B[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", ti, [
                f(qe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": B[2] || (B[2] = (j) => m.value = j),
                  placeholder: "Search by node type, package name...",
                  onInput: J
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), n("div", oi, [
                  (o(!0), n(A, null, Q(u.value, (j) => (o(), n("div", {
                    key: j.package_id,
                    class: "node-search-result-item",
                    onClick: (X) => O(j)
                  }, [
                    e("div", ni, [
                      e("code", ai, l(j.package_id), 1),
                      j.match_confidence ? (o(), S(Lt, {
                        key: 0,
                        confidence: j.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    j.description ? (o(), n("div", li, l(j.description), 1)) : c("", !0)
                  ], 8, si))), 128))
                ])) : m.value && !b.value ? (o(), n("div", ii, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), n("div", ri, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(ze, { to: "body" }, [
          v.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(Z, ["self"])
          }, [
            e("div", di, [
              e("div", { class: "node-modal-header" }, [
                B[7] || (B[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              e("div", ci, [
                f(qe, {
                  modelValue: r.value,
                  "onUpdate:modelValue": B[3] || (B[3] = (j) => r.value = j),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", ui, [
                  f(ie, {
                    variant: "secondary",
                    onClick: Z
                  }, {
                    default: a(() => [...B[8] || (B[8] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(ie, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: N
                  }, {
                    default: a(() => [...B[9] || (B[9] = [
                      w(" Add Package ", -1)
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
}), vi = /* @__PURE__ */ K(mi, [["__scopeId", "data-v-4fb196b1"]]), fi = { class: "node-info" }, gi = { class: "node-info-text" }, hi = { class: "item-body" }, pi = {
  key: 0,
  class: "resolved-state"
}, yi = {
  key: 1,
  class: "multiple-options"
}, wi = { class: "options-list" }, bi = ["onClick"], ki = ["name", "value", "checked", "onChange"], _i = { class: "option-content" }, $i = { class: "option-header" }, Ci = { class: "option-filename" }, xi = { class: "option-meta" }, Si = { class: "option-size" }, Ii = { class: "option-category" }, Ei = { class: "option-path" }, zi = { class: "action-buttons" }, Mi = {
  key: 2,
  class: "unresolved"
}, Li = { class: "action-buttons" }, Ti = /* @__PURE__ */ H({
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
    const s = t, i = d, g = D(() => !!s.choice);
    D(() => {
      var r;
      return (r = s.choice) == null ? void 0 : r.action;
    }), D(() => {
      var r, u;
      return ((u = (r = s.choice) == null ? void 0 : r.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const y = D(() => {
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
    function v(r) {
      i("option-selected", r);
    }
    function m(r) {
      if (!r) return "Unknown";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, u) => (o(), n("div", {
      class: ee(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", fi, [
        e("span", gi, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: ee(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", hi, [
        g.value ? (o(), n("div", pi, [
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => i("clear-choice"))
          }, {
            default: a(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", yi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", wi, [
            (o(!0), n(A, null, Q(t.options, (b, p) => (o(), n("label", {
              key: b.model.hash,
              class: ee(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (L) => v(p)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (L) => v(p)
              }, null, 40, ki),
              e("div", _i, [
                e("div", $i, [
                  e("span", Ci, l(b.model.filename), 1),
                  f(Lt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", xi, [
                  e("span", Si, l(m(b.model.size)), 1),
                  e("span", Ii, l(b.model.category), 1)
                ]),
                e("div", Ei, l(b.model.relative_path), 1)
              ])
            ], 10, bi))), 128))
          ]),
          e("div", zi, [
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => i("search"))
            }, {
              default: a(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
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
            f(ie, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => i("search"))
            }, {
              default: a(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[15] || (u[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ri = /* @__PURE__ */ K(Ti, [["__scopeId", "data-v-8a82fefa"]]), Di = { class: "model-resolution-step" }, Ni = { class: "step-header" }, Oi = { class: "step-info" }, Ui = { class: "step-title" }, Bi = { class: "step-description" }, Pi = { class: "stat-badge" }, Vi = {
  key: 1,
  class: "step-body"
}, Ai = {
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
}, er = { class: "model-download-url-modal" }, tr = { class: "model-modal-body" }, or = { class: "model-input-group" }, sr = { class: "model-input-group" }, nr = { class: "model-modal-actions" }, ar = /* @__PURE__ */ H({
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
    function i(ne) {
      var se;
      return ne && ((se = s[ne]) == null ? void 0 : se[0]) || null;
    }
    const g = t, y = d, v = z(0), m = z(!1), r = z(!1), u = z(""), b = z(""), p = z(""), L = z([]), M = z(!1), _ = D(() => g.models[v.value]), I = D(() => g.models.some((ne) => ne.is_download_intent)), k = D(() => g.models.filter(
      (ne) => g.modelChoices.has(ne.filename) || ne.is_download_intent
    ).length), x = D(() => {
      var se;
      if (!_.value) return "";
      const ne = i((se = _.value.reference) == null ? void 0 : se.node_type);
      return ne ? `${ne}/${_.value.filename}` : "";
    }), R = D(() => {
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
    }), C = D(() => {
      var se, ve;
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
      return _.value.is_download_intent ? "Pending Download" : (ve = _.value.options) != null && ve.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function h(ne) {
      ne >= 0 && ne < g.models.length && (v.value = ne);
    }
    function $() {
      _.value && y("mark-optional", _.value.filename);
    }
    function E() {
      _.value && y("skip", _.value.filename);
    }
    function Z(ne) {
      _.value && y("option-selected", _.value.filename, ne);
    }
    function J() {
      _.value && y("clear-choice", _.value.filename);
    }
    function O() {
      _.value && (u.value = _.value.filename, m.value = !0);
    }
    function N() {
      _.value && (b.value = _.value.download_source || "", p.value = _.value.target_path || x.value, r.value = !0);
    }
    function V() {
      m.value = !1, u.value = "", L.value = [];
    }
    function B() {
      r.value = !1, b.value = "", p.value = "";
    }
    function Y() {
      M.value = !0, setTimeout(() => {
        M.value = !1;
      }, 300);
    }
    function P(ne) {
      _.value && V();
    }
    function j() {
      !_.value || !b.value.trim() || (y("download-url", _.value.filename, b.value.trim(), p.value.trim() || void 0), B());
    }
    function X(ne) {
      if (!ne) return "Unknown";
      const se = ne / (1024 * 1024 * 1024);
      return se >= 1 ? `${se.toFixed(2)} GB` : `${(ne / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ne, se) => {
      var ve, oe, Me;
      return o(), n("div", Di, [
        e("div", Ni, [
          e("div", Oi, [
            e("h3", Ui, l(I.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Bi, l(I.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Pi, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), S(jt, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": v.value,
          "total-items": t.models.length,
          onPrev: se[0] || (se[0] = (pe) => h(v.value - 1)),
          onNext: se[1] || (se[1] = (pe) => h(v.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        _.value ? (o(), n("div", Vi, [
          f(Ri, {
            filename: _.value.filename,
            "node-type": ((ve = _.value.reference) == null ? void 0 : ve.node_type) || "Unknown",
            "has-multiple-options": !!((oe = _.value.options) != null && oe.length),
            options: _.value.options,
            choice: (Me = t.modelChoices) == null ? void 0 : Me.get(_.value.filename),
            status: R.value,
            "status-label": C.value,
            onMarkOptional: $,
            onSkip: E,
            onDownloadUrl: N,
            onSearch: O,
            onOptionSelected: Z,
            onClearChoice: J
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Ai, [...se[5] || (se[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), S(ze, { to: "body" }, [
          m.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(V, ["self"])
          }, [
            e("div", Fi, [
              e("div", { class: "model-modal-header" }, [
                se[6] || (se[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Wi, [
                f(qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (pe) => u.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                L.value.length > 0 ? (o(), n("div", Gi, [
                  (o(!0), n(A, null, Q(L.value, (pe) => (o(), n("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (et) => P()
                  }, [
                    e("div", Hi, [
                      e("code", Ki, l(pe.filename), 1)
                    ]),
                    e("div", qi, [
                      e("span", Ji, l(pe.category), 1),
                      e("span", Yi, l(X(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), n("div", Xi, l(pe.relative_path), 1)) : c("", !0)
                  ], 8, ji))), 128))
                ])) : u.value && !M.value ? (o(), n("div", Qi, ' No models found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                M.value ? (o(), n("div", Zi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(ze, { to: "body" }, [
          r.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(B, ["self"])
          }, [
            e("div", er, [
              e("div", { class: "model-modal-header" }, [
                se[7] || (se[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", tr, [
                e("div", or, [
                  se[8] || (se[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(qe, {
                    modelValue: b.value,
                    "onUpdate:modelValue": se[3] || (se[3] = (pe) => b.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", sr, [
                  se[9] || (se[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(qe, {
                    modelValue: p.value,
                    "onUpdate:modelValue": se[4] || (se[4] = (pe) => p.value = pe),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", nr, [
                  f(ie, {
                    variant: "secondary",
                    onClick: B
                  }, {
                    default: a(() => [...se[10] || (se[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(ie, {
                    variant: "primary",
                    disabled: !b.value.trim() || !p.value.trim(),
                    onClick: j
                  }, {
                    default: a(() => [...se[11] || (se[11] = [
                      w(" Queue Download ", -1)
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
}), lr = /* @__PURE__ */ K(ar, [["__scopeId", "data-v-c6acbada"]]), ir = { class: "applying-step" }, rr = {
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
}, fr = { class: "error-message" }, gr = /* @__PURE__ */ H({
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
}), hr = /* @__PURE__ */ K(gr, [["__scopeId", "data-v-b4d7e0eb"]]), pr = {
  key: 0,
  class: "loading-state"
}, yr = {
  key: 1,
  class: "wizard-content"
}, wr = {
  key: 0,
  class: "step-content"
}, br = { class: "analysis-summary" }, kr = { class: "analysis-header" }, _r = { class: "summary-description" }, $r = { class: "stats-grid" }, Cr = { class: "stat-card" }, xr = { class: "stat-items" }, Sr = { class: "stat-item success" }, Ir = { class: "stat-count" }, Er = {
  key: 0,
  class: "stat-item warning"
}, zr = { class: "stat-count" }, Mr = {
  key: 1,
  class: "stat-item error"
}, Lr = { class: "stat-count" }, Tr = { class: "stat-card" }, Rr = { class: "stat-items" }, Dr = { class: "stat-item success" }, Nr = { class: "stat-count" }, Or = {
  key: 0,
  class: "stat-item info"
}, Ur = { class: "stat-count" }, Br = {
  key: 1,
  class: "stat-item warning"
}, Pr = { class: "stat-count" }, Vr = {
  key: 2,
  class: "stat-item error"
}, Ar = { class: "stat-count" }, Fr = {
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
}, bd = {
  key: 2,
  class: "choice-badge optional"
}, kd = {
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
}, Sd = /* @__PURE__ */ H({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { analyzeWorkflow: g, applyResolution: y, queueModelDownloads: v, progress: m, resetProgress: r } = ll(), { loadPendingDownloads: u } = bt(), b = z(null), p = z(!1), L = z(!1), M = z(null), _ = z("analysis"), I = z([]), k = z(/* @__PURE__ */ new Map()), x = z(/* @__PURE__ */ new Map()), R = D(() => {
      const F = [
        { id: "analysis", label: "Analysis" }
      ];
      return h.value && F.push({ id: "nodes", label: "Nodes" }), ($.value || E.value) && F.push({ id: "models", label: "Models" }), F.push({ id: "review", label: "Review" }), _.value === "applying" && F.push({ id: "applying", label: "Applying" }), F;
    }), C = D(() => b.value ? b.value.stats.needs_user_input : !1), h = D(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), $ = D(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), E = D(() => b.value ? b.value.stats.download_intents > 0 : !1), Z = D(() => b.value ? b.value.models.resolved.filter((F) => F.match_type === "download_intent").map((F) => ({
      filename: F.reference.widget_value,
      reference: F.reference,
      is_download_intent: !0,
      resolved_model: F.model,
      download_source: F.download_source,
      target_path: F.target_path
    })) : []), J = D(() => {
      if (!b.value) return [];
      const F = b.value.nodes.unresolved.map((te) => ({
        node_type: te.reference.node_type,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), U = b.value.nodes.ambiguous.map((te) => ({
        node_type: te.reference.node_type,
        has_multiple_options: !0,
        options: te.options.map((he) => ({
          package_id: he.package.package_id,
          title: he.package.title,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          is_installed: he.is_installed
        }))
      }));
      return [...F, ...U];
    }), O = D(() => {
      if (!b.value) return [];
      const F = b.value.models.unresolved.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), U = b.value.models.ambiguous.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        has_multiple_options: !0,
        options: te.options.map((he) => ({
          model: he.model,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          has_download_source: he.has_download_source
        }))
      }));
      return [...F, ...U];
    }), N = D(() => {
      const F = O.value, U = Z.value.map((te) => ({
        filename: te.filename,
        reference: te.reference,
        is_download_intent: !0,
        resolved_model: te.resolved_model,
        download_source: te.download_source,
        target_path: te.target_path,
        options: void 0
      }));
      return [...F, ...U];
    }), V = D(() => {
      let F = 0;
      for (const U of k.value.values())
        U.action === "install" && F++;
      for (const U of x.value.values())
        U.action === "select" && F++;
      return F;
    }), B = D(() => {
      let F = 0;
      for (const U of x.value.values())
        U.action === "download" && F++;
      return F;
    }), Y = D(() => {
      let F = 0;
      for (const U of k.value.values())
        U.action === "optional" && F++;
      for (const U of x.value.values())
        U.action === "optional" && F++;
      return F;
    }), P = D(() => {
      let F = 0;
      for (const U of k.value.values())
        U.action === "skip" && F++;
      for (const U of x.value.values())
        U.action === "skip" && F++;
      for (const U of J.value)
        k.value.has(U.node_type) || F++;
      for (const U of O.value)
        x.value.has(U.filename) || F++;
      return F;
    }), j = D(() => {
      const F = {};
      if (F.analysis = { resolved: 1, total: 1 }, h.value) {
        const U = J.value.length, te = J.value.filter(
          (he) => k.value.has(he.node_type)
        ).length;
        F.nodes = { resolved: te, total: U };
      }
      if ($.value || E.value) {
        const U = N.value.length, te = N.value.filter(
          (he) => x.value.has(he.filename) || he.is_download_intent
        ).length;
        F.models = { resolved: te, total: U };
      }
      if (F.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const U = m.totalFiles || 1, te = m.completedFiles.length;
        F.applying = { resolved: te, total: U };
      }
      return F;
    });
    function X(F) {
      _.value = F;
    }
    function ne() {
      const F = R.value.findIndex((U) => U.id === _.value);
      F > 0 && (_.value = R.value[F - 1].id);
    }
    function se() {
      const F = R.value.findIndex((U) => U.id === _.value);
      F < R.value.length - 1 && (_.value = R.value[F + 1].id);
    }
    async function ve() {
      p.value = !0, M.value = null;
      try {
        b.value = await g(s.workflowName);
      } catch (F) {
        M.value = F instanceof Error ? F.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function oe() {
      I.value.includes("analysis") || I.value.push("analysis"), h.value ? _.value = "nodes" : $.value || E.value ? _.value = "models" : _.value = "review";
    }
    function Me(F) {
      k.value.set(F, { action: "optional" });
    }
    function pe(F) {
      k.value.set(F, { action: "skip" });
    }
    function et(F, U) {
      var he;
      const te = J.value.find((Te) => Te.node_type === F);
      (he = te == null ? void 0 : te.options) != null && he[U] && k.value.set(F, {
        action: "install",
        package_id: te.options[U].package_id
      });
    }
    function fe(F, U) {
      k.value.set(F, {
        action: "install",
        package_id: U
      });
    }
    function Le(F) {
      k.value.delete(F);
    }
    function lt(F) {
      x.value.set(F, { action: "optional" });
    }
    function Je(F) {
      x.value.set(F, { action: "skip" });
    }
    function G(F, U) {
      var he;
      const te = O.value.find((Te) => Te.filename === F);
      (he = te == null ? void 0 : te.options) != null && he[U] && x.value.set(F, {
        action: "select",
        selected_model: te.options[U].model
      });
    }
    function le(F, U, te) {
      x.value.set(F, {
        action: "download",
        url: U,
        target_path: te
      });
    }
    function ge(F) {
      x.value.delete(F);
    }
    async function $e() {
      L.value = !0, M.value = null, r(), m.phase = "resolving", _.value = "applying";
      try {
        const F = await y(s.workflowName, k.value, x.value);
        F.models_to_download && F.models_to_download.length > 0 && v(s.workflowName, F.models_to_download), m.nodesToInstall = F.nodes_to_install || [], m.phase = "complete", await u(), setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1e3);
      } catch (F) {
        M.value = F instanceof Error ? F.message : "Failed to apply resolution", m.error = M.value, m.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    return be(ve), (F, U) => (o(), S(gt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: p.value,
      error: M.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (te) => i("close"))
    }, {
      body: a(() => [
        p.value && !b.value ? (o(), n("div", pr, [...U[2] || (U[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (o(), n("div", yr, [
          f(hl, {
            steps: R.value,
            "current-step": _.value,
            "completed-steps": I.value,
            "step-stats": j.value,
            onStepChange: X
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), n("div", wr, [
            e("div", br, [
              e("div", kr, [
                U[3] || (U[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", _r, " Found " + l(b.value.stats.total_nodes) + " nodes and " + l(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", $r, [
                e("div", Cr, [
                  U[10] || (U[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", xr, [
                    e("div", Sr, [
                      U[4] || (U[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Ir, l(b.value.nodes.resolved.length), 1),
                      U[5] || (U[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.nodes.ambiguous.length > 0 ? (o(), n("div", Er, [
                      U[6] || (U[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", zr, l(b.value.nodes.ambiguous.length), 1),
                      U[7] || (U[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (o(), n("div", Mr, [
                      U[8] || (U[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Lr, l(b.value.nodes.unresolved.length), 1),
                      U[9] || (U[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Tr, [
                  U[19] || (U[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Rr, [
                    e("div", Dr, [
                      U[11] || (U[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Nr, l(b.value.models.resolved.length - b.value.stats.download_intents), 1),
                      U[12] || (U[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (o(), n("div", Or, [
                      U[13] || (U[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ur, l(b.value.stats.download_intents), 1),
                      U[14] || (U[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (o(), n("div", Br, [
                      U[15] || (U[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Pr, l(b.value.models.ambiguous.length), 1),
                      U[16] || (U[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (o(), n("div", Vr, [
                      U[17] || (U[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ar, l(b.value.models.unresolved.length), 1),
                      U[18] || (U[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              C.value ? (o(), n("div", Fr, [
                U[20] || (U[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wr, l(J.value.length + O.value.length) + " items need your input", 1)
              ])) : E.value ? (o(), n("div", Gr, [
                U[21] || (U[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", jr, l(b.value.stats.download_intents) + " model" + l(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", Hr, [...U[22] || (U[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          _.value === "nodes" ? (o(), S(vi, {
            key: 1,
            nodes: J.value,
            "node-choices": k.value,
            onMarkOptional: Me,
            onSkip: pe,
            onOptionSelected: et,
            onManualEntry: fe,
            onClearChoice: Le
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          _.value === "models" ? (o(), S(lr, {
            key: 2,
            models: N.value,
            "model-choices": x.value,
            onMarkOptional: lt,
            onSkip: Je,
            onOptionSelected: G,
            onDownloadUrl: le,
            onClearChoice: ge
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          _.value === "review" ? (o(), n("div", Kr, [
            e("div", qr, [
              U[27] || (U[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Jr, [
                e("div", Yr, [
                  e("span", Xr, l(V.value), 1),
                  U[23] || (U[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Qr, [
                  e("span", Zr, l(B.value), 1),
                  U[24] || (U[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ed, [
                  e("span", td, l(Y.value), 1),
                  U[25] || (U[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", od, [
                  e("span", sd, l(P.value), 1),
                  U[26] || (U[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              J.value.length > 0 ? (o(), n("div", nd, [
                e("h4", ad, "Node Packages (" + l(J.value.length) + ")", 1),
                e("div", ld, [
                  (o(!0), n(A, null, Q(J.value, (te) => {
                    var he, Te, Ue, Be;
                    return o(), n("div", {
                      key: te.node_type,
                      class: "review-item"
                    }, [
                      e("code", id, l(te.node_type), 1),
                      e("div", rd, [
                        k.value.has(te.node_type) ? (o(), n(A, { key: 0 }, [
                          ((he = k.value.get(te.node_type)) == null ? void 0 : he.action) === "install" ? (o(), n("span", dd, l((Te = k.value.get(te.node_type)) == null ? void 0 : Te.package_id), 1)) : ((Ue = k.value.get(te.node_type)) == null ? void 0 : Ue.action) === "optional" ? (o(), n("span", cd, " Optional ")) : ((Be = k.value.get(te.node_type)) == null ? void 0 : Be.action) === "skip" ? (o(), n("span", ud, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", md, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              N.value.length > 0 ? (o(), n("div", vd, [
                e("h4", fd, "Models (" + l(N.value.length) + ")", 1),
                e("div", gd, [
                  (o(!0), n(A, null, Q(N.value, (te) => {
                    var he, Te, Ue, Be, ht, Pe, pt;
                    return o(), n("div", {
                      key: te.filename,
                      class: "review-item"
                    }, [
                      e("code", hd, l(te.filename), 1),
                      e("div", pd, [
                        x.value.has(te.filename) ? (o(), n(A, { key: 0 }, [
                          ((he = x.value.get(te.filename)) == null ? void 0 : he.action) === "select" ? (o(), n("span", yd, l((Ue = (Te = x.value.get(te.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : Ue.filename), 1)) : ((Be = x.value.get(te.filename)) == null ? void 0 : Be.action) === "download" ? (o(), n("span", wd, " Download ")) : ((ht = x.value.get(te.filename)) == null ? void 0 : ht.action) === "optional" ? (o(), n("span", bd, " Optional ")) : ((Pe = x.value.get(te.filename)) == null ? void 0 : Pe.action) === "skip" ? (o(), n("span", kd, " Skip ")) : ((pt = x.value.get(te.filename)) == null ? void 0 : pt.action) === "cancel_download" ? (o(), n("span", _d, " Cancel Download ")) : c("", !0)
                        ], 64)) : te.is_download_intent ? (o(), n("span", $d, " Pending Download ")) : (o(), n("span", Cd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              J.value.length === 0 && N.value.length === 0 ? (o(), n("div", xd, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          _.value === "applying" ? (o(), S(hr, {
            key: 4,
            progress: ce(m)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), S(ie, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: ne
        }, {
          default: a(() => [...U[28] || (U[28] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        U[31] || (U[31] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || ce(m).phase === "complete" || ce(m).phase === "error" ? (o(), S(ie, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (te) => i("close"))
        }, {
          default: a(() => [
            w(l(ce(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "analysis" ? (o(), S(ie, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: oe
        }, {
          default: a(() => [
            w(l(C.value || E.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        _.value === "nodes" ? (o(), S(ie, {
          key: 3,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [
            w(l($.value || E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "models" ? (o(), S(ie, {
          key: 4,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [...U[29] || (U[29] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        _.value === "review" ? (o(), S(ie, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: $e
        }, {
          default: a(() => [...U[30] || (U[30] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Id = /* @__PURE__ */ K(Sd, [["__scopeId", "data-v-08beb8e3"]]), Ed = { class: "search-input-wrapper" }, zd = ["value", "placeholder"], Md = /* @__PURE__ */ H({
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
    const s = t, i = d, g = z(null);
    let y;
    function v(r) {
      const u = r.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        i("update:modelValue", u);
      }, s.debounce)) : i("update:modelValue", u);
    }
    function m() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = g.value) == null || r.focus();
    }
    return be(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (r, u) => (o(), n("div", Ed, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: Ge(m, ["escape"])
      }, null, 40, zd),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Ld = /* @__PURE__ */ K(Md, [["__scopeId", "data-v-266f857a"]]), Td = { class: "search-bar" }, Rd = /* @__PURE__ */ H({
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
      f(Ld, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => d.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), nt = /* @__PURE__ */ K(Rd, [["__scopeId", "data-v-3d51bbfd"]]), Dd = { class: "section-group" }, Nd = {
  key: 0,
  class: "section-content"
}, Od = /* @__PURE__ */ H({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, i = d, g = z(s.initiallyExpanded);
    function y() {
      s.collapsible && (g.value = !g.value, i("toggle", g.value));
    }
    return (v, m) => (o(), n("section", Dd, [
      f(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: a(() => [
          w(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), n("div", Nd, [
        re(v.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), we = /* @__PURE__ */ K(Od, [["__scopeId", "data-v-c48e33ed"]]), Ud = { class: "item-header" }, Bd = {
  key: 0,
  class: "item-icon"
}, Pd = { class: "item-info" }, Vd = {
  key: 0,
  class: "item-title"
}, Ad = {
  key: 1,
  class: "item-subtitle"
}, Fd = {
  key: 0,
  class: "item-details"
}, Wd = {
  key: 1,
  class: "item-actions"
}, Gd = /* @__PURE__ */ H({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = D(() => s.status ? `status-${s.status}` : "");
    return (g, y) => (o(), n("div", {
      class: ee(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: y[0] || (y[0] = (v) => t.clickable && g.$emit("click"))
    }, [
      e("div", Ud, [
        g.$slots.icon ? (o(), n("span", Bd, [
          re(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Pd, [
          g.$slots.title ? (o(), n("div", Vd, [
            re(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), n("div", Ad, [
            re(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), n("div", Fd, [
        re(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), n("div", Wd, [
        re(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), _e = /* @__PURE__ */ K(Gd, [["__scopeId", "data-v-cc435e0e"]]), jd = { class: "loading-state" }, Hd = { class: "loading-message" }, Kd = /* @__PURE__ */ H({
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
}), He = /* @__PURE__ */ K(Kd, [["__scopeId", "data-v-ad8436c9"]]), qd = { class: "error-state" }, Jd = { class: "error-message" }, Yd = /* @__PURE__ */ H({
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
      t.retry ? (o(), S(q, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ K(Yd, [["__scopeId", "data-v-5397be48"]]), Xd = /* @__PURE__ */ H({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const i = s, { getWorkflows: g } = Ce(), y = z([]), v = z(!1), m = z(null), r = z(""), u = z(!0), b = z(!1), p = z(!1), L = z(!1), M = z(null), _ = D(
      () => y.value.filter((P) => P.status === "broken")
    ), I = D(
      () => y.value.filter((P) => P.status === "new")
    ), k = D(
      () => y.value.filter((P) => P.status === "modified")
    ), x = D(
      () => y.value.filter((P) => P.status === "synced")
    ), R = D(() => {
      if (!r.value.trim()) return y.value;
      const P = r.value.toLowerCase();
      return y.value.filter((j) => j.name.toLowerCase().includes(P));
    }), C = D(
      () => _.value.filter(
        (P) => !r.value.trim() || P.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), h = D(
      () => I.value.filter(
        (P) => !r.value.trim() || P.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), $ = D(
      () => k.value.filter(
        (P) => !r.value.trim() || P.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), E = D(
      () => x.value.filter(
        (P) => !r.value.trim() || P.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), Z = D(
      () => b.value ? E.value : E.value.slice(0, 5)
    );
    async function J(P = !1) {
      v.value = !0, m.value = null;
      try {
        y.value = await g(P);
      } catch (j) {
        m.value = j instanceof Error ? j.message : "Failed to load workflows";
      } finally {
        v.value = !1;
      }
    }
    d({ loadWorkflows: J });
    function O(P) {
      M.value = P, p.value = !0;
    }
    function N(P) {
      M.value = P, L.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function B() {
      i("refresh");
    }
    function Y(P) {
      const j = [];
      return P.missing_nodes > 0 && j.push(`${P.missing_nodes} missing node${P.missing_nodes > 1 ? "s" : ""}`), P.missing_models > 0 && j.push(`${P.missing_models} missing model${P.missing_models > 1 ? "s" : ""}`), P.pending_downloads && P.pending_downloads > 0 && j.push(`${P.pending_downloads} pending download${P.pending_downloads > 1 ? "s" : ""}`), j.length > 0 ? j.join(", ") : "Has issues";
    }
    return be(J), (P, j) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), S(q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: a(() => [...j[8] || (j[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          f(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": j[0] || (j[0] = (X) => r.value = X),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), S(He, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), S(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            C.value.length ? (o(), S(we, {
              key: 0,
              title: "BROKEN",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(C.value, (X) => (o(), S(_e, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: a(() => [...j[9] || (j[9] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(X.name), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(Y(X)), 1)
                  ]),
                  actions: a(() => [
                    f(q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => N(X.name)
                    }, {
                      default: a(() => [...j[10] || (j[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => O(X.name)
                    }, {
                      default: a(() => [...j[11] || (j[11] = [
                        w(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            h.value.length ? (o(), S(we, {
              key: 1,
              title: "NEW",
              count: h.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(h.value, (X) => (o(), S(_e, {
                  key: X.name,
                  status: "new"
                }, {
                  icon: a(() => [...j[12] || (j[12] = [
                    w("●", -1)
                  ])]),
                  title: a(() => [
                    w(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...j[13] || (j[13] = [
                    w("New", -1)
                  ])]),
                  actions: a(() => [
                    f(q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => O(X.name)
                    }, {
                      default: a(() => [...j[14] || (j[14] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? (o(), S(we, {
              key: 2,
              title: "MODIFIED",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q($.value, (X) => (o(), S(_e, {
                  key: X.name,
                  status: "modified"
                }, {
                  icon: a(() => [...j[15] || (j[15] = [
                    w("⚡", -1)
                  ])]),
                  title: a(() => [
                    w(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...j[16] || (j[16] = [
                    w("Modified", -1)
                  ])]),
                  actions: a(() => [
                    f(q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => O(X.name)
                    }, {
                      default: a(() => [...j[17] || (j[17] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            E.value.length ? (o(), S(we, {
              key: 3,
              title: "SYNCED",
              count: E.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: j[2] || (j[2] = (X) => u.value = X)
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(Z.value, (X) => (o(), S(_e, {
                  key: X.name,
                  status: "synced"
                }, {
                  icon: a(() => [...j[18] || (j[18] = [
                    w("✓", -1)
                  ])]),
                  title: a(() => [
                    w(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...j[19] || (j[19] = [
                    w("Synced", -1)
                  ])]),
                  actions: a(() => [
                    f(q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => O(X.name)
                    }, {
                      default: a(() => [...j[20] || (j[20] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && E.value.length > 5 ? (o(), S(q, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: j[1] || (j[1] = (X) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    w(" View all " + l(E.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            R.value.length ? c("", !0) : (o(), S(Oe, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && M.value ? (o(), S(sl, {
        key: 0,
        "workflow-name": M.value,
        onClose: j[3] || (j[3] = (X) => p.value = !1),
        onResolve: j[4] || (j[4] = (X) => N(M.value)),
        onRefresh: j[5] || (j[5] = (X) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      L.value && M.value ? (o(), S(Id, {
        key: 1,
        "workflow-name": M.value,
        onClose: j[6] || (j[6] = (X) => L.value = !1),
        onInstall: B,
        onRefresh: j[7] || (j[7] = (X) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Qd = /* @__PURE__ */ K(Xd, [["__scopeId", "data-v-af6b1cd7"]]), Zd = /* @__PURE__ */ H({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["summary-bar", t.variant])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), at = /* @__PURE__ */ K(Zd, [["__scopeId", "data-v-ccb7816e"]]), ec = /* @__PURE__ */ H({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: i, getStatus: g } = Ce(), y = z([]), v = z([]), m = z("production"), r = z(!1), u = z(null), b = z(""), p = z(!1);
    function L() {
      p.value = !1, s("navigate", "model-index");
    }
    const M = D(
      () => y.value.reduce((J, O) => J + (O.size || 0), 0)
    ), _ = D(() => {
      if (!b.value.trim()) return y.value;
      const J = b.value.toLowerCase();
      return y.value.filter((O) => O.filename.toLowerCase().includes(J));
    }), I = D(() => {
      if (!b.value.trim()) return v.value;
      const J = b.value.toLowerCase();
      return v.value.filter((O) => O.filename.toLowerCase().includes(J));
    }), k = D(
      () => _.value.filter((J) => J.type === "checkpoints")
    ), x = D(
      () => _.value.filter((J) => J.type === "loras")
    ), R = D(
      () => _.value.filter((J) => J.type !== "checkpoints" && J.type !== "loras")
    );
    function C(J) {
      if (!J) return "Unknown";
      const O = J / (1024 * 1024);
      return O >= 1024 ? `${(O / 1024).toFixed(1)} GB` : `${O.toFixed(0)} MB`;
    }
    function h(J) {
      s("navigate", "model-index");
    }
    function $(J) {
      s("navigate", "model-index");
    }
    function E(J) {
      alert(`Download functionality not yet implemented for ${J}`);
    }
    async function Z() {
      r.value = !0, u.value = null;
      try {
        const J = await i();
        y.value = J, v.value = [];
        const O = await g();
        m.value = O.environment || "production";
      } catch (J) {
        u.value = J instanceof Error ? J.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return be(Z), (J, O) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (N) => p.value = !0)
          })
        ]),
        search: a(() => [
          f(nt, {
            modelValue: b.value,
            "onUpdate:modelValue": O[1] || (O[1] = (N) => b.value = N),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), S(He, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (o(), S(Ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            y.value.length ? (o(), S(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(y.value.length) + " models • " + l(C(M.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), S(we, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(k.value, (N) => (o(), S(_e, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[3] || (O[3] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(C(N.size)), 1)
                  ]),
                  details: a(() => [
                    f(me, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(me, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    f(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => h(N.hash)
                    }, {
                      default: a(() => [...O[4] || (O[4] = [
                        w(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (o(), S(we, {
              key: 2,
              title: "LORAS",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(x.value, (N) => (o(), S(_e, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[5] || (O[5] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(C(N.size)), 1)
                  ]),
                  details: a(() => [
                    f(me, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(me, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    f(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => h(N.hash)
                    }, {
                      default: a(() => [...O[6] || (O[6] = [
                        w(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            R.value.length ? (o(), S(we, {
              key: 3,
              title: "OTHER",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(R.value, (N) => (o(), S(_e, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[7] || (O[7] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(C(N.size)), 1)
                  ]),
                  details: a(() => [
                    f(me, {
                      label: "Type:",
                      value: N.type
                    }, null, 8, ["value"]),
                    f(me, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => h(N.hash)
                    }, {
                      default: a(() => [...O[8] || (O[8] = [
                        w(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            I.value.length ? (o(), S(we, {
              key: 4,
              title: "MISSING",
              count: I.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(I.value, (N) => (o(), S(_e, {
                  key: N.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...O[9] || (O[9] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [...O[10] || (O[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var V;
                    return [
                      f(me, {
                        label: "Required by:",
                        value: ((V = N.workflow_names) == null ? void 0 : V.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    f(q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => E(N.filename)
                    }, {
                      default: a(() => [...O[11] || (O[11] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => $(N.filename)
                    }, {
                      default: a(() => [...O[12] || (O[12] = [
                        w(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !_.value.length && !I.value.length ? (o(), S(Oe, {
              key: 5,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: p.value,
        title: "About Environment Models",
        onClose: O[2] || (O[2] = (N) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            O[13] || (O[13] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            O[14] || (O[14] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          f(q, {
            variant: "primary",
            onClick: L
          }, {
            default: a(() => [...O[15] || (O[15] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tc = /* @__PURE__ */ K(ec, [["__scopeId", "data-v-72675609"]]), oc = {
  key: 0,
  class: "model-details"
}, sc = { class: "detail-section" }, nc = { class: "detail-row" }, ac = { class: "detail-value mono" }, lc = { class: "detail-row" }, ic = { class: "detail-value mono" }, rc = { class: "detail-row" }, dc = { class: "detail-value mono" }, cc = { class: "detail-row" }, uc = { class: "detail-value" }, mc = { class: "detail-row" }, vc = { class: "detail-value" }, fc = { class: "detail-row" }, gc = { class: "detail-value" }, hc = { class: "detail-section" }, pc = { class: "section-header" }, yc = {
  key: 0,
  class: "locations-list"
}, wc = { class: "location-path mono" }, bc = {
  key: 0,
  class: "location-modified"
}, kc = ["onClick"], _c = {
  key: 1,
  class: "empty-state"
}, $c = { class: "detail-section" }, Cc = { class: "section-header" }, xc = {
  key: 0,
  class: "sources-list"
}, Sc = { class: "source-type" }, Ic = ["href"], Ec = {
  key: 1,
  class: "empty-state"
}, zc = { class: "add-source-form" }, Mc = ["disabled"], Lc = {
  key: 2,
  class: "source-error"
}, Tc = {
  key: 3,
  class: "source-success"
}, Rc = /* @__PURE__ */ H({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const s = t, { getModelDetails: i, updateModelSource: g, openFileLocation: y } = Ce(), v = z(null), m = z(!0), r = z(null), u = z(""), b = z(!1), p = z(null), L = z(null), M = z(null);
    let _ = null;
    function I($, E = "success", Z = 2e3) {
      _ && clearTimeout(_), M.value = { message: $, type: E }, _ = setTimeout(() => {
        M.value = null;
      }, Z);
    }
    function k($) {
      if (!$) return "Unknown";
      const E = 1024 * 1024 * 1024, Z = 1024 * 1024;
      return $ >= E ? `${($ / E).toFixed(1)} GB` : $ >= Z ? `${($ / Z).toFixed(0)} MB` : `${($ / 1024).toFixed(0)} KB`;
    }
    function x($) {
      navigator.clipboard.writeText($), I("Copied to clipboard!");
    }
    async function R($) {
      try {
        await y($), I("Opening file location...");
      } catch {
        I("Failed to open location", "error");
      }
    }
    async function C() {
      if (!(!u.value.trim() || !v.value)) {
        b.value = !0, p.value = null, L.value = null;
        try {
          await g(v.value.hash, u.value.trim()), L.value = "Source added successfully!", u.value = "", await h();
        } catch ($) {
          p.value = $ instanceof Error ? $.message : "Failed to add source";
        } finally {
          b.value = !1;
        }
      }
    }
    async function h() {
      m.value = !0, r.value = null;
      try {
        v.value = await i(s.identifier);
      } catch ($) {
        r.value = $ instanceof Error ? $.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return be(h), ($, E) => {
      var Z;
      return o(), n(A, null, [
        f(gt, {
          title: `Model Details: ${((Z = v.value) == null ? void 0 : Z.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: r.value,
          onClose: E[5] || (E[5] = (J) => $.$emit("close"))
        }, {
          body: a(() => {
            var J, O, N, V;
            return [
              v.value ? (o(), n("div", oc, [
                e("section", sc, [
                  e("div", nc, [
                    E[6] || (E[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ac, l(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (B) => x(v.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", lc, [
                    E[7] || (E[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", ic, l(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (B) => x(v.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", rc, [
                    E[8] || (E[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", dc, l(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (B) => x(v.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", cc, [
                    E[9] || (E[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", uc, l(k(v.value.size)), 1)
                  ]),
                  e("div", mc, [
                    E[10] || (E[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", vc, l(v.value.category), 1)
                  ]),
                  e("div", fc, [
                    E[11] || (E[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", gc, l(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", hc, [
                  e("h4", pc, "Locations (" + l(((J = v.value.locations) == null ? void 0 : J.length) || 0) + ")", 1),
                  (O = v.value.locations) != null && O.length ? (o(), n("div", yc, [
                    (o(!0), n(A, null, Q(v.value.locations, (B, Y) => (o(), n("div", {
                      key: Y,
                      class: "location-item"
                    }, [
                      e("span", wc, l(B.path), 1),
                      B.modified ? (o(), n("span", bc, "Modified: " + l(B.modified), 1)) : c("", !0),
                      B.path ? (o(), n("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => R(B.path)
                      }, " Open File Location ", 8, kc)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), n("div", _c, "No locations found"))
                ]),
                e("section", $c, [
                  e("h4", Cc, "Download Sources (" + l(((N = v.value.sources) == null ? void 0 : N.length) || 0) + ")", 1),
                  (V = v.value.sources) != null && V.length ? (o(), n("div", xc, [
                    (o(!0), n(A, null, Q(v.value.sources, (B, Y) => (o(), n("div", {
                      key: Y,
                      class: "source-item"
                    }, [
                      e("span", Sc, l(B.type) + ":", 1),
                      e("a", {
                        href: B.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(B.url), 9, Ic)
                    ]))), 128))
                  ])) : (o(), n("div", Ec, " No download sources configured ")),
                  e("div", zc, [
                    lo(e("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (B) => u.value = B),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [io, u.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !u.value.trim() || b.value,
                      onClick: C
                    }, l(b.value ? "Adding..." : "Add Source"), 9, Mc)
                  ]),
                  p.value ? (o(), n("p", Lc, l(p.value), 1)) : c("", !0),
                  L.value ? (o(), n("p", Tc, l(L.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: a(() => [
            e("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (J) => $.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), S(ze, { to: "body" }, [
          M.value ? (o(), n("div", {
            key: 0,
            class: ee(["toast", M.value.type])
          }, l(M.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Dc = /* @__PURE__ */ K(Rc, [["__scopeId", "data-v-698be6a2"]]), Nc = /* @__PURE__ */ H({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: d } = Ce(), s = z([]), i = z(!1), g = z(null), y = z(""), v = z(!1), m = z(null), r = D(
      () => s.value.reduce((R, C) => R + (C.size || 0), 0)
    ), u = D(() => {
      if (!y.value.trim()) return s.value;
      const R = y.value.toLowerCase();
      return s.value.filter((C) => {
        const h = C, $ = C.sha256 || h.sha256_hash || "";
        return C.filename.toLowerCase().includes(R) || $.toLowerCase().includes(R);
      });
    }), b = D(() => {
      const R = {};
      for (const h of u.value) {
        const $ = h.type || "other";
        R[$] || (R[$] = []), R[$].push(h);
      }
      const C = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings"];
      return Object.entries(R).sort(([h], [$]) => {
        const E = C.indexOf(h), Z = C.indexOf($);
        return E >= 0 && Z >= 0 ? E - Z : E >= 0 ? -1 : Z >= 0 ? 1 : h.localeCompare($);
      }).map(([h, $]) => ({ type: h, models: $ }));
    });
    function p(R) {
      if (!R) return "Unknown";
      const C = 1024 * 1024 * 1024, h = 1024 * 1024;
      return R >= C ? `${(R / C).toFixed(1)} GB` : R >= h ? `${(R / h).toFixed(0)} MB` : `${(R / 1024).toFixed(0)} KB`;
    }
    function L(R) {
      m.value = R.hash || R.filename;
    }
    function M(R) {
      confirm(
        `Delete ${R.filename}?

This will free ${p(R.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function _() {
      alert("Scan for models not yet implemented");
    }
    function I() {
      alert("Change directory not yet implemented");
    }
    function k() {
      alert("Download new model not yet implemented");
    }
    async function x() {
      i.value = !0, g.value = null;
      try {
        s.value = await d();
      } catch (R) {
        g.value = R instanceof Error ? R.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return be(x), (R, C) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: C[0] || (C[0] = (h) => v.value = !0)
          }, {
            actions: a(() => [
              f(q, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: a(() => [...C[4] || (C[4] = [
                  w(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              f(q, {
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: a(() => [...C[5] || (C[5] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(q, {
                variant: "primary",
                size: "sm",
                onClick: k
              }, {
                default: a(() => [...C[6] || (C[6] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  w(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          f(nt, {
            modelValue: y.value,
            "onUpdate:modelValue": C[1] || (C[1] = (h) => y.value = h),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), S(He, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), S(Ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            s.value.length ? (o(), S(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(s.value.length) + " models • " + l(p(r.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), n(A, null, Q(b.value, (h) => (o(), S(we, {
              key: h.type,
              title: h.type.toUpperCase(),
              count: h.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(h.models, ($) => (o(), S(_e, {
                  key: $.sha256 || $.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...C[7] || (C[7] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l($.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(p($.size)), 1)
                  ]),
                  details: a(() => [
                    f(me, {
                      label: "Hash:",
                      value: $.hash ? $.hash.substring(0, 16) + "..." : "N/A",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => L($)
                    }, {
                      default: a(() => [...C[8] || (C[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(q, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (E) => M($)
                    }, {
                      default: a(() => [...C[9] || (C[9] = [
                        w(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            u.value.length ? c("", !0) : (o(), S(Oe, {
              key: 1,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: v.value,
        title: "About Workspace Model Index",
        onClose: C[2] || (C[2] = (h) => v.value = !1)
      }, {
        content: a(() => [...C[10] || (C[10] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      m.value ? (o(), S(Dc, {
        key: 0,
        identifier: m.value,
        onClose: C[3] || (C[3] = (h) => m.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Oc = /* @__PURE__ */ K(Nc, [["__scopeId", "data-v-5f3b734c"]]), Uc = { key: 0 }, Bc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Pc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Vc = /* @__PURE__ */ H({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: d, installNode: s, updateNode: i, uninstallNode: g } = Ce(), y = z({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), v = z(!1), m = z(null), r = z(""), u = z(!1), b = D(() => {
      if (!r.value.trim()) return y.value.nodes;
      const h = r.value.toLowerCase();
      return y.value.nodes.filter(
        ($) => {
          var E, Z;
          return $.name.toLowerCase().includes(h) || ((E = $.description) == null ? void 0 : E.toLowerCase().includes(h)) || ((Z = $.repository) == null ? void 0 : Z.toLowerCase().includes(h));
        }
      );
    }), p = D(
      () => b.value.filter((h) => h.installed)
    ), L = D(
      () => b.value.filter((h) => !h.installed)
    );
    function M(h) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[h] || h;
    }
    function _(h) {
      return !h.used_in_workflows || h.used_in_workflows.length === 0 ? "Not used in any workflows" : h.used_in_workflows.length === 1 ? h.used_in_workflows[0] : `${h.used_in_workflows.length} workflows`;
    }
    function I(h) {
      window.open(h, "_blank");
    }
    async function k(h) {
      if (confirm(`Install node "${h}"?

This will download and install the node from its repository.`))
        try {
          v.value = !0;
          const $ = await s(h);
          $.status === "success" ? (alert(`Node "${h}" installed successfully!`), await C()) : alert(`Failed to install node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error installing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function x(h) {
      if (confirm(`Check for updates for "${h}"?`))
        try {
          v.value = !0;
          const $ = await i(h);
          $.status === "success" ? (alert(`Node "${h}" is up to date or has been updated!`), await C()) : alert(`Update check failed: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error checking for updates: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function R(h) {
      if (confirm(`Uninstall node "${h}"?

This will remove the node from this environment.`))
        try {
          v.value = !0;
          const $ = await g(h);
          $.status === "success" ? (alert(`Node "${h}" uninstalled successfully!`), await C()) : alert(`Failed to uninstall node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error uninstalling node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function C() {
      v.value = !0, m.value = null;
      try {
        y.value = await d();
      } catch (h) {
        m.value = h instanceof Error ? h.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return be(C), (h, $) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (E) => u.value = !0)
          })
        ]),
        search: a(() => [
          f(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": $[1] || ($[1] = (E) => r.value = E),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), S(He, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : m.value ? (o(), S(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            y.value.total_count ? (o(), S(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(y.value.total_count) + " nodes • " + l(y.value.installed_count) + " installed • " + l(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            p.value.length ? (o(), S(we, {
              key: 1,
              title: "INSTALLED",
              count: p.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(p.value, (E) => (o(), S(_e, {
                  key: E.name,
                  status: "synced"
                }, {
                  icon: a(() => [...$[4] || ($[4] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(E.name), 1)
                  ]),
                  subtitle: a(() => [
                    E.version ? (o(), n("span", Uc, "v" + l(E.version), 1)) : (o(), n("span", Bc, "version unknown")),
                    E.source ? (o(), n("span", Pc, " • " + l(M(E.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    E.description ? (o(), S(me, {
                      key: 0,
                      label: "Description:",
                      value: E.description
                    }, null, 8, ["value"])) : c("", !0),
                    E.repository ? (o(), S(me, {
                      key: 1,
                      label: "Repository:",
                      value: E.repository
                    }, null, 8, ["value"])) : c("", !0),
                    f(me, {
                      label: "Used by:",
                      value: _(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    E.repository ? (o(), S(q, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => I(E.repository)
                    }, {
                      default: a(() => [...$[5] || ($[5] = [
                        w(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    E.source === "registry" ? (o(), S(q, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => x(E.name)
                    }, {
                      default: a(() => [...$[6] || ($[6] = [
                        w(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    E.source !== "unknown" ? (o(), S(q, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (Z) => R(E.name)
                    }, {
                      default: a(() => [...$[7] || ($[7] = [
                        w(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            L.value.length ? (o(), S(we, {
              key: 2,
              title: "MISSING",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(L.value, (E) => (o(), S(_e, {
                  key: E.name,
                  status: "missing"
                }, {
                  icon: a(() => [...$[8] || ($[8] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(E.name), 1)
                  ]),
                  subtitle: a(() => [...$[9] || ($[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    E.description ? (o(), S(me, {
                      key: 0,
                      label: "Description:",
                      value: E.description
                    }, null, 8, ["value"])) : c("", !0),
                    E.repository ? (o(), S(me, {
                      key: 1,
                      label: "Repository:",
                      value: E.repository
                    }, null, 8, ["value"])) : c("", !0),
                    f(me, {
                      label: "Required by:",
                      value: _(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    E.download_url ? (o(), S(q, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => k(E.name)
                    }, {
                      default: a(() => [...$[10] || ($[10] = [
                        w(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    E.repository ? (o(), S(q, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => I(E.repository)
                    }, {
                      default: a(() => [...$[11] || ($[11] = [
                        w(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !p.value.length && !L.value.length ? (o(), S(Oe, {
              key: 3,
              icon: "📭",
              message: r.value ? `No nodes match '${r.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: u.value,
        title: "About Git-Tracked Nodes",
        onClose: $[3] || ($[3] = (E) => u.value = !1)
      }, {
        content: a(() => [...$[12] || ($[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            w(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            w(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          f(q, {
            variant: "primary",
            onClick: $[2] || ($[2] = (E) => u.value = !1)
          }, {
            default: a(() => [...$[13] || ($[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ac = /* @__PURE__ */ K(Vc, [["__scopeId", "data-v-c480e2c1"]]), Fc = { class: "remote-url-display" }, Wc = ["title"], Gc = ["title"], jc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Hc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Kc = /* @__PURE__ */ H({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = z(!1), i = D(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), v = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${v}`;
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
    return (y, v) => (o(), n("div", Fc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, Wc),
      e("button", {
        class: ee(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Hc, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", jc, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Gc)
    ]));
  }
}), Ot = /* @__PURE__ */ K(Kc, [["__scopeId", "data-v-7768a58d"]]), qc = { class: "remote-title" }, Jc = {
  key: 0,
  class: "default-badge"
}, Yc = {
  key: 1,
  class: "sync-badge"
}, Xc = {
  key: 0,
  class: "ahead"
}, Qc = {
  key: 1,
  class: "behind"
}, Zc = {
  key: 0,
  class: "tracking-info"
}, eu = /* @__PURE__ */ H({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, i = D(() => s.fetchingRemote === s.remote.name), g = D(() => s.remote.is_default), y = D(() => !!s.trackingBranch);
    function v(m) {
      const r = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), p = Math.floor(b / 6e4);
      if (p < 1) return "Just now";
      if (p < 60) return `${p}m ago`;
      const L = Math.floor(p / 60);
      if (L < 24) return `${L}h ago`;
      const M = Math.floor(L / 24);
      return M < 7 ? `${M}d ago` : r.toLocaleDateString();
    }
    return (m, r) => (o(), S(_e, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        w(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", qc, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), n("span", Jc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", Yc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", Xc, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", Qc, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", Zc, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var u;
        return [
          f(me, { label: "Fetch:" }, {
            default: a(() => [
              f(Ot, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), S(me, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              f(Ot, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (o(), S(me, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(v(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        f(q, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: r[0] || (r[0] = (u) => m.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...r[3] || (r[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(q, {
          variant: "secondary",
          size: "xs",
          onClick: r[1] || (r[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...r[4] || (r[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), S(q, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: r[2] || (r[2] = (u) => m.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...r[5] || (r[5] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), tu = /* @__PURE__ */ K(eu, [["__scopeId", "data-v-17362e45"]]), ou = ["for"], su = {
  key: 0,
  class: "base-form-field-required"
}, nu = { class: "base-form-field-input" }, au = {
  key: 1,
  class: "base-form-field-error"
}, lu = {
  key: 2,
  class: "base-form-field-hint"
}, iu = /* @__PURE__ */ H({
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
    const d = t, s = D(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, g) => (o(), n("div", {
      class: ee(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        w(l(t.label) + " ", 1),
        t.required ? (o(), n("span", su, "*")) : c("", !0)
      ], 8, ou)) : c("", !0),
      e("div", nu, [
        re(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", au, l(t.error), 1)) : t.hint ? (o(), n("span", lu, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ K(iu, [["__scopeId", "data-v-9a1cf296"]]), ru = { class: "remote-form" }, du = { class: "form-header" }, cu = { class: "form-body" }, uu = {
  key: 0,
  class: "form-error"
}, mu = { class: "form-actions" }, vu = /* @__PURE__ */ H({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, i = d, g = z({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = z(!1), v = z(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const m = D(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!m.value || y.value)) {
        v.value = null, y.value = !0;
        try {
          i("submit", g.value);
        } catch (u) {
          v.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (u, b) => (o(), n("div", ru, [
      e("div", du, [
        f(Ee, null, {
          default: a(() => [
            w(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", cu, [
        f($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            f(qe, {
              modelValue: g.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (p) => g.value.name = p),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            f(qe, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (p) => g.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            f(qe, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (p) => g.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (o(), n("div", uu, l(v.value), 1)) : c("", !0)
      ]),
      e("div", mu, [
        f(q, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: y.value,
          onClick: r
        }, {
          default: a(() => [
            w(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(q, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (p) => u.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), fu = /* @__PURE__ */ K(vu, [["__scopeId", "data-v-56021b18"]]), gu = { key: 0 }, hu = /* @__PURE__ */ H({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: v
    } = Ce(), m = z([]), r = z(null), u = z({}), b = z(!1), p = z(null), L = z(""), M = z(!1), _ = z(null), I = z(!1), k = z("add"), x = z({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), R = D(() => {
      if (!L.value.trim()) return m.value;
      const B = L.value.toLowerCase();
      return m.value.filter(
        (Y) => Y.name.toLowerCase().includes(B) || Y.fetch_url.toLowerCase().includes(B) || Y.push_url.toLowerCase().includes(B)
      );
    });
    function C(B) {
      var Y;
      return ((Y = r.value) == null ? void 0 : Y.remote) === B;
    }
    async function h() {
      b.value = !0, p.value = null;
      try {
        const B = await d();
        m.value = B.remotes, r.value = B.current_branch_tracking || null, await Promise.all(
          B.remotes.map(async (Y) => {
            const P = await v(Y.name);
            P && (u.value[Y.name] = P);
          })
        );
      } catch (B) {
        p.value = B instanceof Error ? B.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function $() {
      k.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, I.value = !0;
    }
    function E(B) {
      const Y = m.value.find((P) => P.name === B);
      Y && (k.value = "edit", x.value = {
        name: Y.name,
        fetchUrl: Y.fetch_url,
        pushUrl: Y.push_url
      }, I.value = !0);
    }
    async function Z(B) {
      try {
        k.value === "add" ? await s(B.name, B.fetchUrl) : await g(B.name, B.fetchUrl, B.pushUrl || void 0), I.value = !1, await h();
      } catch (Y) {
        p.value = Y instanceof Error ? Y.message : "Operation failed";
      }
    }
    function J() {
      I.value = !1, x.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function O(B) {
      _.value = B;
      try {
        await y(B);
        const Y = await v(B);
        Y && (u.value[B] = Y);
      } catch (Y) {
        p.value = Y instanceof Error ? Y.message : "Fetch failed";
      } finally {
        _.value = null;
      }
    }
    async function N(B) {
      if (confirm(`Remove remote "${B}"?`))
        try {
          await i(B), await h();
        } catch (Y) {
          p.value = Y instanceof Error ? Y.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return be(h), (B, Y) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (P) => M.value = !0)
          }, {
            actions: a(() => [
              I.value ? c("", !0) : (o(), S(q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: a(() => [...Y[3] || (Y[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          I.value ? c("", !0) : (o(), S(nt, {
            key: 0,
            modelValue: L.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (P) => L.value = P),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          b.value ? (o(), S(He, {
            key: 0,
            message: "Loading remotes..."
          })) : p.value ? (o(), S(Ke, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: h
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            I.value ? (o(), S(fu, {
              key: 0,
              mode: k.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: Z,
              onCancel: J
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !I.value ? (o(), S(at, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                r.value ? (o(), n("span", gu, " • Tracking: " + l(r.value.remote) + "/" + l(r.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            R.value.length && !I.value ? (o(), S(we, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, Q(R.value, (P) => {
                  var j;
                  return o(), S(tu, {
                    key: P.name,
                    remote: P,
                    "sync-status": u.value[P.name],
                    "tracking-branch": C(P.name) ? (j = r.value) == null ? void 0 : j.branch : void 0,
                    "fetching-remote": _.value,
                    onFetch: O,
                    onEdit: E,
                    onRemove: N
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !R.value.length && !I.value ? (o(), S(Oe, {
              key: 3,
              icon: "🌐",
              message: L.value ? `No remotes match '${L.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                f(q, {
                  variant: "primary",
                  onClick: $
                }, {
                  default: a(() => [...Y[4] || (Y[4] = [
                    w(" Add Your First Remote ", -1)
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
      f(je, {
        show: M.value,
        title: "About Git Remotes",
        onClose: Y[2] || (Y[2] = (P) => M.value = !1)
      }, {
        content: a(() => [...Y[5] || (Y[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          f(q, {
            variant: "link",
            onClick: V
          }, {
            default: a(() => [...Y[6] || (Y[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), pu = /* @__PURE__ */ K(hu, [["__scopeId", "data-v-a75719bb"]]), yu = { class: "setting-info" }, wu = { class: "setting-label" }, bu = {
  key: 0,
  class: "required-marker"
}, ku = {
  key: 0,
  class: "setting-description"
}, _u = { class: "setting-control" }, $u = /* @__PURE__ */ H({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", yu, [
        e("div", wu, [
          w(l(t.label) + " ", 1),
          t.required ? (o(), n("span", bu, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", ku, l(t.description), 1)) : c("", !0)
      ]),
      e("div", _u, [
        re(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), We = /* @__PURE__ */ K($u, [["__scopeId", "data-v-cb5d236c"]]), Cu = { class: "toggle" }, xu = ["checked", "disabled"], Su = /* @__PURE__ */ H({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", Cu, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, xu),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Qe = /* @__PURE__ */ K(Su, [["__scopeId", "data-v-71c0f550"]]), Iu = { class: "settings-section" }, Eu = { class: "path-setting" }, zu = { class: "path-value" }, Mu = { class: "path-setting" }, Lu = { class: "path-value" }, Tu = { class: "settings-section" }, Ru = { class: "settings-section" }, Du = { class: "settings-section" }, Nu = /* @__PURE__ */ H({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = Ce(), i = z(!1), g = z(null), y = z(null), v = z(null), m = z(null), r = z(""), u = z(""), b = z(!0), p = z(!0), L = z(!1), M = D(() => m.value ? r.value !== (m.value.civitai_api_key || "") : !1);
    async function _() {
      i.value = !0, g.value = null;
      try {
        v.value = await d(), m.value = { ...v.value }, r.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", b.value = v.value.auto_sync_models, p.value = v.value.confirm_destructive;
        const R = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        L.value = R === "true";
      } catch (R) {
        g.value = R instanceof Error ? R.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function I() {
      var R;
      y.value = null;
      try {
        const C = {};
        r.value !== (((R = m.value) == null ? void 0 : R.civitai_api_key) || "") && (C.civitai_api_key = r.value || null), await s(C), await _(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (C) {
        y.value = {
          type: "error",
          message: C instanceof Error ? C.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (r.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, p.value = m.value.confirm_destructive, y.value = null);
    }
    function x(R) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(R)), console.log("[ComfyGit] Auto-refresh setting saved:", R);
    }
    return be(_), (R, C) => (o(), S(xe, null, {
      header: a(() => [
        f(Se, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            f(q, {
              variant: "primary",
              size: "sm",
              disabled: !M.value,
              onClick: I
            }, {
              default: a(() => [...C[5] || (C[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            M.value ? (o(), S(q, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...C[6] || (C[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), S(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), S(Ke, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: _
        }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
          f(we, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var h, $;
              return [
                e("div", Iu, [
                  e("div", Eu, [
                    C[7] || (C[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    C[8] || (C[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", zu, l(((h = v.value) == null ? void 0 : h.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Mu, [
                    C[9] || (C[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    C[10] || (C[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Lu, l((($ = v.value) == null ? void 0 : $.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(we, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Tu, [
                f(We, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    f(ft, {
                      modelValue: r.value,
                      "onUpdate:modelValue": C[0] || (C[0] = (h) => r.value = h),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(We, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(ft, {
                      modelValue: u.value,
                      "onUpdate:modelValue": C[1] || (C[1] = (h) => u.value = h),
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
          f(we, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Ru, [
                f(We, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    f(Qe, {
                      modelValue: L.value,
                      "onUpdate:modelValue": [
                        C[2] || (C[2] = (h) => L.value = h),
                        x
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f(we, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Du, [
                f(We, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(Qe, {
                      modelValue: b.value,
                      "onUpdate:modelValue": C[3] || (C[3] = (h) => b.value = h),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(We, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(Qe, {
                      modelValue: p.value,
                      "onUpdate:modelValue": C[4] || (C[4] = (h) => p.value = h),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), S(at, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Ze({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Ou = /* @__PURE__ */ K(Nu, [["__scopeId", "data-v-7861bd35"]]), Uu = /* @__PURE__ */ H({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = Ce(), s = z([]), i = z(!1), g = z(null), y = z(!1), v = z(null), m = D(() => s.value.length === 0 ? [] : s.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function r() {
      i.value = !0, g.value = null;
      try {
        s.value = await d(void 0, 500);
      } catch (u) {
        g.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var u;
          (u = v.value) != null && u.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(r), (u, b) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (p) => y.value = !0)
          }, {
            actions: a(() => [
              f(q, {
                variant: "secondary",
                size: "sm",
                onClick: r,
                disabled: i.value
              }, {
                default: a(() => [
                  w(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          i.value ? (o(), S(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), S(Ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: r
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            s.value.length === 0 ? (o(), S(Oe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), n(A, null, Q(m.value, (p, L) => (o(), n("div", {
                key: L,
                class: ee(`log-line log-level-${p.level.toLowerCase()}`)
              }, l(p.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (p) => y.value = !1)
      }, {
        content: a(() => [...b[3] || (b[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            w(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            w(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            w(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            w(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          f(q, {
            variant: "primary",
            onClick: b[1] || (b[1] = (p) => y.value = !1)
          }, {
            default: a(() => [...b[4] || (b[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bu = /* @__PURE__ */ K(Uu, [["__scopeId", "data-v-39f6a756"]]), Pu = /* @__PURE__ */ H({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = Ce(), i = z([]), g = z(!1), y = z(null), v = z(!1), m = z("production"), r = z(null), u = D(() => i.value.length === 0 ? [] : i.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function b() {
      g.value = !0, y.value = null;
      try {
        i.value = await d(void 0, 500);
        try {
          const p = await s();
          m.value = p.environment || "production";
        } catch {
        }
      } catch (p) {
        y.value = p instanceof Error ? p.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var p;
          (p = r.value) != null && p.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(b), (p, L) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (M) => v.value = !0)
          }, {
            actions: a(() => [
              f(q, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: g.value
              }, {
                default: a(() => [
                  w(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), S(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), S(Ke, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            i.value.length === 0 ? (o(), S(Oe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (o(!0), n(A, null, Q(u.value, (M, _) => (o(), n("div", {
                key: _,
                class: ee(`log-line log-level-${M.level.toLowerCase()}`)
              }, l(M.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: v.value,
        title: "About Environment Logs",
        onClose: L[2] || (L[2] = (M) => v.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            L[3] || (L[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            L[4] || (L[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          L[5] || (L[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            w(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            w(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            w(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            w(" Detailed debugging information ")
          ], -1)),
          L[6] || (L[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          f(q, {
            variant: "primary",
            onClick: L[1] || (L[1] = (M) => v.value = !1)
          }, {
            default: a(() => [...L[7] || (L[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vu = /* @__PURE__ */ K(Pu, [["__scopeId", "data-v-4f1e6f72"]]), Au = { class: "env-title" }, Fu = {
  key: 0,
  class: "current-badge"
}, Wu = {
  key: 0,
  class: "branch-info"
}, Gu = /* @__PURE__ */ H({
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
    return (d, s) => (o(), S(_e, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        w(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", Au, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Fu, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Wu, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        f(me, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        f(me, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        f(me, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), S(me, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        re(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), ju = /* @__PURE__ */ K(Gu, [["__scopeId", "data-v-5238e57c"]]), Hu = {
  key: 0,
  class: "create-form"
}, Ku = { class: "create-form__header" }, qu = { class: "create-form__body" }, Ju = { class: "create-form__actions" }, Yu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Xu = /* @__PURE__ */ H({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: i } = Ce(), g = z([]), y = z(!1), v = z(null), m = z(""), r = z(!1), u = z(!1), b = z(""), p = D(
      () => g.value.find((C) => C.is_current)
    ), L = D(() => {
      if (!m.value.trim()) return g.value;
      const C = m.value.toLowerCase();
      return g.value.filter(
        (h) => {
          var $;
          return h.name.toLowerCase().includes(C) || (($ = h.current_branch) == null ? void 0 : $.toLowerCase().includes(C));
        }
      );
    });
    function M(C) {
      if (!C) return "";
      try {
        const h = new Date(C), E = (/* @__PURE__ */ new Date()).getTime() - h.getTime(), Z = Math.floor(E / 6e4), J = Math.floor(E / 36e5), O = Math.floor(E / 864e5);
        return Z < 1 ? "just now" : Z < 60 ? `${Z} ${Z === 1 ? "minute" : "minutes"} ago` : J < 24 ? `${J} ${J === 1 ? "hour" : "hours"} ago` : O < 30 ? `${O} ${O === 1 ? "day" : "days"} ago` : h.toLocaleDateString();
      } catch {
        return C;
      }
    }
    function _() {
      const C = b.value.trim();
      C && (s("create", C), b.value = "", u.value = !1);
    }
    function I() {
      b.value = "", u.value = !1;
    }
    function k(C) {
      s("viewDetails", C);
    }
    function x(C) {
      confirm(`Delete environment "${C}"?

This action cannot be undone.`) && s("delete", C);
    }
    async function R() {
      y.value = !0, v.value = null;
      try {
        g.value = await i();
      } catch (C) {
        v.value = C instanceof Error ? C.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return be(R), (C, h) => {
      const $ = ro("SectionGroup");
      return o(), n(A, null, [
        f(xe, null, {
          header: a(() => [
            f(Se, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: h[1] || (h[1] = (E) => r.value = !0)
            }, {
              actions: a(() => [
                f(q, {
                  variant: "ghost",
                  size: "sm",
                  onClick: h[0] || (h[0] = (E) => u.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...h[7] || (h[7] = [
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
                f(q, {
                  variant: "ghost",
                  size: "sm",
                  onClick: R,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...h[8] || (h[8] = [
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
            f(nt, {
              modelValue: m.value,
              "onUpdate:modelValue": h[2] || (h[2] = (E) => m.value = E),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), S(He, {
              key: 0,
              message: "Loading environments..."
            })) : v.value ? (o(), S(Ke, {
              key: 1,
              message: v.value,
              retry: !0,
              onRetry: R
            }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
              u.value ? (o(), n("div", Hu, [
                e("div", Ku, [
                  h[10] || (h[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  f(q, {
                    variant: "ghost",
                    size: "xs",
                    onClick: I
                  }, {
                    default: a(() => [...h[9] || (h[9] = [
                      w(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", qu, [
                  f(ft, {
                    modelValue: b.value,
                    "onUpdate:modelValue": h[3] || (h[3] = (E) => b.value = E),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ge(_, ["enter"]),
                      Ge(I, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Ju, [
                    f(q, {
                      variant: "primary",
                      size: "sm",
                      onClick: _,
                      disabled: !b.value.trim()
                    }, {
                      default: a(() => [...h[11] || (h[11] = [
                        w(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    f(q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: I
                    }, {
                      default: a(() => [...h[12] || (h[12] = [
                        w(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), S(at, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  w(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  p.value ? (o(), n(A, { key: 0 }, [
                    h[13] || (h[13] = w(" • Current: ", -1)),
                    e("strong", null, l(p.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              L.value.length ? (o(), S($, {
                key: 2,
                title: "ENVIRONMENTS",
                count: L.value.length
              }, {
                default: a(() => [
                  (o(!0), n(A, null, Q(L.value, (E) => (o(), S(ju, {
                    key: E.name,
                    "environment-name": E.name,
                    "is-current": E.is_current,
                    "current-branch": E.current_branch,
                    "workflow-count": E.workflow_count,
                    "node-count": E.node_count,
                    "model-count": E.model_count,
                    "last-used": M(E.last_used),
                    "show-last-used": !!E.last_used
                  }, {
                    actions: a(() => [
                      E.is_current ? c("", !0) : (o(), S(q, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Z) => C.$emit("switch", E.name)
                      }, {
                        default: a(() => [...h[14] || (h[14] = [
                          w(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      f(q, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (Z) => k(E.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...h[15] || (h[15] = [
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
                      !E.is_current && g.value.length > 1 ? (o(), S(q, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Z) => x(E.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", Yu, [...h[16] || (h[16] = [
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
              L.value.length ? c("", !0) : (o(), S(Oe, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, At({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    f(q, {
                      variant: "primary",
                      onClick: h[4] || (h[4] = (E) => u.value = !0)
                    }, {
                      default: a(() => [...h[17] || (h[17] = [
                        w(" Create Environment ", -1)
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
        f(je, {
          show: r.value,
          title: "About Environments",
          onClose: h[6] || (h[6] = (E) => r.value = !1)
        }, {
          content: a(() => [...h[18] || (h[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              w(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            f(q, {
              variant: "secondary",
              onClick: h[5] || (h[5] = (E) => r.value = !1)
            }, {
              default: a(() => [...h[19] || (h[19] = [
                w(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Qu = /* @__PURE__ */ K(Xu, [["__scopeId", "data-v-97d6527d"]]), Zu = { class: "file-path" }, em = { class: "file-path-text" }, tm = ["title"], om = /* @__PURE__ */ H({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = z(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), n("div", Zu, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", em, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, tm)) : c("", !0)
    ]));
  }
}), sm = /* @__PURE__ */ K(om, [["__scopeId", "data-v-f0982173"]]), nm = { class: "output-path-input" }, am = { class: "export-actions" }, lm = {
  key: 1,
  class: "export-warning"
}, im = /* @__PURE__ */ H({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = Ce(), s = z(""), i = z(!1), g = z(null), y = z(!1);
    async function v() {
      i.value = !0, g.value = null;
      try {
        const r = await d(s.value || void 0);
        g.value = r;
      } catch (r) {
        g.value = {
          status: "error",
          message: r instanceof Error ? r.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function m() {
      var r;
      if ((r = g.value) != null && r.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (r, u) => (o(), n(A, null, [
      f(xe, null, {
        header: a(() => [
          f(Se, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              f(q, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (b) => y.value = !0),
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
          f(we, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              f(_e, { status: "synced" }, {
                icon: a(() => [...u[6] || (u[6] = [
                  w("📦", -1)
                ])]),
                title: a(() => [...u[7] || (u[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...u[8] || (u[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  f(me, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(me, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(me, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(me, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(we, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              f(_e, { status: "synced" }, {
                icon: a(() => [...u[9] || (u[9] = [
                  w("📁", -1)
                ])]),
                title: a(() => [...u[10] || (u[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: a(() => [...u[11] || (u[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", nm, [
                    f(ft, {
                      modelValue: s.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (b) => s.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(we, { title: "EXPORT" }, {
            default: a(() => [
              e("div", am, [
                f(q, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: v
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
                    w(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), S(q, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: u[2] || (u[2] = (b) => s.value = "")
                }, {
                  default: a(() => [...u[13] || (u[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), S(we, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              f(_e, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, At({
                icon: a(() => [
                  w(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  w(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  w(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    f(me, { label: "Saved to:" }, {
                      default: a(() => [
                        f(sm, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), S(me, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), n("div", lm, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    f(q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: a(() => [...u[15] || (u[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(q, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => g.value = null)
                    }, {
                      default: a(() => [...u[16] || (u[16] = [
                        w(" Dismiss ", -1)
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
      f(je, {
        show: y.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (b) => y.value = !1)
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
            w(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), rm = /* @__PURE__ */ K(im, [["__scopeId", "data-v-1777a9d5"]]), dm = { class: "file-input-wrapper" }, cm = ["accept", "multiple", "disabled"], um = /* @__PURE__ */ H({
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
    const i = s, g = z(null);
    function y() {
      var m;
      (m = g.value) == null || m.click();
    }
    function v(m) {
      const r = m.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return d({
      triggerInput: y
    }), (m, r) => (o(), n("div", dm, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, cm),
      f(q, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          re(m.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), mm = /* @__PURE__ */ K(um, [["__scopeId", "data-v-cd192091"]]), vm = {
  key: 0,
  class: "drop-zone-empty"
}, fm = { class: "drop-zone-text" }, gm = { class: "drop-zone-primary" }, hm = { class: "drop-zone-secondary" }, pm = { class: "drop-zone-actions" }, ym = {
  key: 1,
  class: "drop-zone-file"
}, wm = { class: "file-info" }, bm = { class: "file-details" }, km = { class: "file-name" }, _m = { class: "file-size" }, $m = /* @__PURE__ */ H({
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
    const s = d, i = z(!1), g = z(null), y = z(0), v = D(() => g.value !== null), m = D(() => {
      var k;
      return ((k = g.value) == null ? void 0 : k.name) || "";
    }), r = D(() => {
      if (!g.value) return "";
      const k = g.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var x;
      y.value++, (x = k.dataTransfer) != null && x.types.includes("Files") && (i.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function p() {
      y.value--, y.value === 0 && (i.value = !1);
    }
    function L(k) {
      var R;
      y.value = 0, i.value = !1;
      const x = (R = k.dataTransfer) == null ? void 0 : R.files;
      x && x.length > 0 && _(x[0]);
    }
    function M(k) {
      k.length > 0 && _(k[0]);
    }
    function _(k) {
      g.value = k, s("fileSelected", k);
    }
    function I() {
      g.value = null, s("clear");
    }
    return (k, x) => (o(), n("div", {
      class: ee(["file-drop-zone", { "drop-active": i.value, "has-file": v.value }]),
      onDragenter: ke(u, ["prevent"]),
      onDragover: ke(b, ["prevent"]),
      onDragleave: ke(p, ["prevent"]),
      onDrop: ke(L, ["prevent"])
    }, [
      v.value ? (o(), n("div", ym, [
        e("div", wm, [
          x[1] || (x[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", bm, [
            e("div", km, l(m.value), 1),
            e("div", _m, l(r.value), 1)
          ])
        ]),
        f(q, {
          variant: "ghost",
          size: "xs",
          onClick: I,
          title: "Remove file"
        }, {
          default: a(() => [...x[2] || (x[2] = [
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
      ])) : (o(), n("div", vm, [
        x[0] || (x[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", fm, [
          e("p", gm, l(t.primaryText), 1),
          e("p", hm, l(t.secondaryText), 1)
        ]),
        e("div", pm, [
          f(mm, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: M
          }, {
            default: a(() => [
              w(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Cm = /* @__PURE__ */ K($m, [["__scopeId", "data-v-e00abbca"]]), xm = { class: "import-preview" }, Sm = { class: "preview-header" }, Im = {
  key: 0,
  class: "source-env"
}, Em = { class: "preview-content" }, zm = { class: "preview-section" }, Mm = { class: "section-header" }, Lm = { class: "section-info" }, Tm = { class: "section-count" }, Rm = {
  key: 0,
  class: "item-list"
}, Dm = { class: "item-name" }, Nm = {
  key: 0,
  class: "item-more"
}, Om = { class: "preview-section" }, Um = { class: "section-header" }, Bm = { class: "section-info" }, Pm = { class: "section-count" }, Vm = {
  key: 0,
  class: "item-list"
}, Am = { class: "item-details" }, Fm = { class: "item-name" }, Wm = { class: "item-meta" }, Gm = {
  key: 0,
  class: "item-more"
}, jm = { class: "preview-section" }, Hm = { class: "section-header" }, Km = { class: "section-info" }, qm = { class: "section-count" }, Jm = {
  key: 0,
  class: "item-list"
}, Ym = { class: "item-name" }, Xm = {
  key: 0,
  class: "item-more"
}, Qm = {
  key: 0,
  class: "preview-section"
}, Zm = { class: "git-info" }, ev = /* @__PURE__ */ H({
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
    const d = t, s = D(() => d.workflows.length), i = D(() => d.models.length), g = D(() => d.nodes.length);
    function y(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, m) => (o(), n("div", xm, [
      e("div", Sm, [
        f(Ee, null, {
          default: a(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Im, [
          m[1] || (m[1] = w(" From: ", -1)),
          f(St, null, {
            default: a(() => [
              w(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Em, [
        e("div", zm, [
          e("div", Mm, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Lm, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Tm, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Rm, [
            (o(!0), n(A, null, Q(t.workflows.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Dm, l(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Nm, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Om, [
          e("div", Um, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Bm, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Pm, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Vm, [
            (o(!0), n(A, null, Q(t.models.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Am, [
                e("span", Fm, l(r.filename), 1),
                e("span", Wm, l(y(r.size)) + " • " + l(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", Gm, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", jm, [
          e("div", Hm, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Km, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", qm, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", Jm, [
            (o(!0), n(A, null, Q(t.nodes.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ym, l(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", Xm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", Qm, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Zm, [
            t.gitBranch ? (o(), S(me, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                f(St, null, {
                  default: a(() => [
                    w(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), S(me, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                f(Wt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), tv = /* @__PURE__ */ K(ev, [["__scopeId", "data-v-182fe113"]]), ov = { class: "import-options" }, sv = { class: "options-container" }, nv = { class: "option-section" }, av = { class: "conflict-options" }, lv = ["value", "checked", "onChange"], iv = { class: "conflict-content" }, rv = { class: "conflict-label" }, dv = { class: "conflict-description" }, cv = { class: "option-section" }, uv = { class: "component-toggles" }, mv = /* @__PURE__ */ H({
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
    const s = d, i = [
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
    return (g, y) => (o(), n("div", ov, [
      f(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", sv, [
        e("div", nv, [
          f(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", av, [
            (o(), n(A, null, Q(i, (v) => e("label", {
              key: v.value,
              class: ee(["conflict-option", { active: t.conflictMode === v.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: t.conflictMode === v.value,
                onChange: (m) => s("update:conflictMode", v.value)
              }, null, 40, lv),
              e("div", iv, [
                e("span", rv, l(v.label), 1),
                e("span", dv, l(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", cv, [
          f(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", uv, [
            f(We, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                f(Qe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (v) => s("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(We, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                f(Qe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (v) => s("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(We, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                f(Qe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (v) => s("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(We, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                f(Qe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (v) => s("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), vv = /* @__PURE__ */ K(mv, [["__scopeId", "data-v-0ec212b0"]]), fv = {
  key: 0,
  class: "import-empty"
}, gv = { class: "import-help" }, hv = {
  key: 1,
  class: "import-configure"
}, pv = { class: "selected-file-bar" }, yv = { class: "file-bar-content" }, wv = { class: "file-bar-info" }, bv = { class: "file-bar-name" }, kv = { class: "file-bar-size" }, _v = { class: "import-actions" }, $v = {
  key: 2,
  class: "import-progress"
}, Cv = { class: "progress-content" }, xv = { class: "progress-info" }, Sv = { class: "progress-title" }, Iv = { class: "progress-detail" }, Ev = { class: "progress-bar" }, zv = { class: "progress-status" }, Mv = {
  key: 3,
  class: "import-complete"
}, Lv = { class: "complete-message" }, Tv = { class: "complete-title" }, Rv = { class: "complete-details" }, Dv = { class: "complete-actions" }, Nv = /* @__PURE__ */ H({
  __name: "ImportSection",
  setup(t) {
    const d = z(null), s = z(!1), i = z(!1), g = z(!1), y = z(""), v = z({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = z({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), r = z({
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
    }), u = D(() => v.value.includeWorkflows || v.value.includeModels || v.value.includeNodes || v.value.includeGitHistory);
    function b(I) {
      d.value = I;
    }
    function p() {
      d.value = null, i.value = !1, g.value = !1, y.value = "";
    }
    function L() {
      p(), s.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function M() {
      if (d.value) {
        s.value = !0, i.value = !1;
        try {
          const I = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${r.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${r.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${r.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of I)
            m.value = k, await new Promise((x) => setTimeout(x, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), g.value = !0, y.value = `Successfully imported ${r.value.workflows.length} workflows, ${r.value.models.length} models, and ${r.value.nodes.length} custom nodes.`;
        } catch (I) {
          g.value = !1, y.value = I instanceof Error ? I.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function _(I) {
      return I < 1024 ? `${I} B` : I < 1024 * 1024 ? `${(I / 1024).toFixed(1)} KB` : I < 1024 * 1024 * 1024 ? `${(I / (1024 * 1024)).toFixed(1)} MB` : `${(I / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (I, k) => (o(), S(xe, null, {
      header: a(() => [
        f(Se, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", fv, [
          f(Cm, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", gv, [
            f(Ee, null, {
              default: a(() => [...k[5] || (k[5] = [
                w("How to Import", -1)
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
        ])) : d.value && !s.value && !i.value ? (o(), n("div", hv, [
          e("div", pv, [
            e("div", yv, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", wv, [
                e("div", bv, l(d.value.name), 1),
                e("div", kv, l(_(d.value.size)), 1)
              ])
            ]),
            f(q, {
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: a(() => [...k[8] || (k[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(tv, {
            "source-environment": r.value.sourceEnvironment,
            workflows: r.value.workflows,
            models: r.value.models,
            nodes: r.value.nodes,
            "git-branch": r.value.gitBranch,
            "git-commit": r.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(vv, {
            "conflict-mode": v.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (x) => v.value.conflictMode = x),
            "include-workflows": v.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (x) => v.value.includeWorkflows = x),
            "include-models": v.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (x) => v.value.includeModels = x),
            "include-nodes": v.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (x) => v.value.includeNodes = x),
            "include-git-history": v.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (x) => v.value.includeGitHistory = x)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !v.value.includeModels && r.value.models.length > 0 ? (o(), S(Xe, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${r.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", _v, [
            f(q, {
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
                w(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f(q, {
              variant: "secondary",
              size: "md",
              onClick: p
            }, {
              default: a(() => [...k[10] || (k[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", $v, [
          e("div", Cv, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", xv, [
              e("div", Sv, l(m.value.message), 1),
              e("div", Iv, l(m.value.detail), 1)
            ])
          ]),
          e("div", Ev, [
            e("div", {
              class: "progress-bar-fill",
              style: Ze({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", zv, l(m.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Mv, [
          e("div", {
            class: ee(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", Lv, [
            e("div", Tv, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Rv, l(y.value), 1)
          ]),
          e("div", Dv, [
            f(q, {
              variant: "primary",
              size: "md",
              onClick: L
            }, {
              default: a(() => [...k[12] || (k[12] = [
                w(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Ov = /* @__PURE__ */ K(Nv, [["__scopeId", "data-v-18e18eb5"]]), Uv = { class: "header-info" }, Bv = { class: "commit-hash" }, Pv = {
  key: 0,
  class: "commit-refs"
}, Vv = { class: "commit-message" }, Av = { class: "commit-date" }, Fv = {
  key: 0,
  class: "loading"
}, Wv = {
  key: 1,
  class: "changes-section"
}, Gv = { class: "stats-row" }, jv = { class: "stat" }, Hv = { class: "stat insertions" }, Kv = { class: "stat deletions" }, qv = {
  key: 0,
  class: "change-group"
}, Jv = {
  key: 1,
  class: "change-group"
}, Yv = {
  key: 0,
  class: "version"
}, Xv = {
  key: 2,
  class: "change-group"
}, Qv = { class: "change-item" }, Zv = /* @__PURE__ */ H({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = Ce(), i = z(null), g = z(!0), y = D(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), v = D(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return be(async () => {
      try {
        i.value = await s(d.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (m, r) => (o(), S(gt, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (u) => m.$emit("close"))
    }, {
      header: a(() => {
        var u, b, p, L;
        return [
          e("div", Uv, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Bv, l(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (L = (p = i.value) == null ? void 0 : p.refs) != null && L.length ? (o(), n("span", Pv, [
              (o(!0), n(A, null, Q(i.value.refs, (M) => (o(), n("span", {
                key: M,
                class: "ref-badge"
              }, l(M), 1))), 128))
            ])) : c("", !0)
          ]),
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (M) => m.$emit("close"))
          }, {
            default: a(() => [...r[5] || (r[5] = [
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
        var u, b;
        return [
          e("div", Vv, l(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", Av, l(((b = i.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), n("div", Fv, "Loading details...")) : i.value ? (o(), n("div", Wv, [
            e("div", Gv, [
              e("span", jv, l(i.value.stats.files_changed) + " files", 1),
              e("span", Hv, "+" + l(i.value.stats.insertions), 1),
              e("span", Kv, "-" + l(i.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", qv, [
              f(ut, { variant: "section" }, {
                default: a(() => [...r[6] || (r[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(A, null, Q(i.value.changes.workflows.added, (p) => (o(), n("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(A, null, Q(i.value.changes.workflows.modified, (p) => (o(), n("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(A, null, Q(i.value.changes.workflows.deleted, (p) => (o(), n("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p), 1)
              ]))), 128))
            ])) : c("", !0),
            v.value ? (o(), n("div", Jv, [
              f(ut, { variant: "section" }, {
                default: a(() => [...r[10] || (r[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(A, null, Q(i.value.changes.nodes.added, (p) => (o(), n("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p.name), 1),
                p.version ? (o(), n("span", Yv, "(" + l(p.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(A, null, Q(i.value.changes.nodes.removed, (p) => (o(), n("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p.name), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", Xv, [
              f(ut, { variant: "section" }, {
                default: a(() => [...r[13] || (r[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Qv, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        f(ie, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...r[15] || (r[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(ie, {
          variant: "primary",
          onClick: r[2] || (r[2] = (u) => m.$emit("checkout", t.commit))
        }, {
          default: a(() => [...r[16] || (r[16] = [
            w(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ef = /* @__PURE__ */ K(Zv, [["__scopeId", "data-v-d256ff6d"]]), tf = { class: "dialog-message" }, of = {
  key: 0,
  class: "dialog-details"
}, sf = {
  key: 1,
  class: "dialog-warning"
}, nf = /* @__PURE__ */ H({
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
    return (d, s) => (o(), S(gt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", tf, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", of, [
          (o(!0), n(A, null, Q(t.details, (i, g) => (o(), n("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", sf, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        f(ie, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => d.$emit("cancel"))
        }, {
          default: a(() => [
            w(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), S(ie, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => d.$emit("secondary"))
        }, {
          default: a(() => [
            w(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        f(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
        }, {
          default: a(() => [
            w(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), af = /* @__PURE__ */ K(nf, [["__scopeId", "data-v-3670b9f5"]]), lf = { class: "base-textarea-wrapper" }, rf = ["value", "rows", "placeholder", "disabled", "maxlength"], df = {
  key: 0,
  class: "base-textarea-count"
}, cf = /* @__PURE__ */ H({
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
    return (d, s) => (o(), n("div", lf, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ge(ke((i) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ge(ke((i) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, rf),
      t.showCharCount && t.maxLength ? (o(), n("div", df, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ K(cf, [["__scopeId", "data-v-5516e6fc"]]), uf = ["checked", "disabled"], mf = { class: "base-checkbox-box" }, vf = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, ff = {
  key: 0,
  class: "base-checkbox-label"
}, gf = /* @__PURE__ */ H({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: ee(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked))
      }, null, 40, uf),
      e("span", mf, [
        t.modelValue ? (o(), n("svg", vf, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", ff, [
        re(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ K(gf, [["__scopeId", "data-v-bf17c831"]]), hf = { class: "popover-header" }, pf = { class: "popover-body" }, yf = {
  key: 0,
  class: "changes-summary"
}, wf = {
  key: 0,
  class: "change-item"
}, bf = {
  key: 1,
  class: "change-item"
}, kf = {
  key: 2,
  class: "change-item"
}, _f = {
  key: 3,
  class: "change-item"
}, $f = {
  key: 4,
  class: "change-item"
}, Cf = {
  key: 1,
  class: "no-changes"
}, xf = {
  key: 2,
  class: "loading"
}, Sf = {
  key: 3,
  class: "issues-warning"
}, If = { class: "warning-header" }, Ef = { class: "warning-title" }, zf = { class: "issues-list" }, Mf = { class: "message-section" }, Lf = { class: "popover-footer" }, Tf = {
  key: 1,
  class: "commit-popover"
}, Rf = { class: "popover-header" }, Df = { class: "popover-body" }, Nf = {
  key: 0,
  class: "changes-summary"
}, Of = {
  key: 0,
  class: "change-item"
}, Uf = {
  key: 1,
  class: "change-item"
}, Bf = {
  key: 2,
  class: "change-item"
}, Pf = {
  key: 3,
  class: "change-item"
}, Vf = {
  key: 4,
  class: "change-item"
}, Af = {
  key: 1,
  class: "no-changes"
}, Ff = {
  key: 2,
  class: "loading"
}, Wf = {
  key: 3,
  class: "issues-warning"
}, Gf = { class: "warning-header" }, jf = { class: "warning-title" }, Hf = { class: "issues-list" }, Kf = { class: "message-section" }, qf = { class: "popover-footer" }, Jf = /* @__PURE__ */ H({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, i = d, { commit: g } = Ce(), y = z(""), v = z(!1), m = z(!1), r = z(null), u = D(() => {
      if (!s.status) return !1;
      const _ = s.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || s.status.has_changes;
    }), b = D(() => {
      var _;
      return (_ = s.status) != null && _.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (I) => I.has_issues && (I.sync_state === "new" || I.sync_state === "modified")
      ) : [];
    }), p = D(() => b.value.length > 0), L = D(() => p.value && !m.value);
    async function M() {
      var _, I, k;
      if (!(p.value && !m.value) && !(!u.value || !y.value.trim() || v.value)) {
        v.value = !0, r.value = null;
        try {
          const x = await g(y.value.trim(), m.value);
          x.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((_ = x.summary) == null ? void 0 : _.new) || 0} new, ${((I = x.summary) == null ? void 0 : I.modified) || 0} modified, ${((k = x.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", m.value = !1, setTimeout(() => i("committed"), 1e3)) : x.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : x.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: x.message || "Commit failed" };
        } catch (x) {
          r.value = { type: "error", message: x instanceof Error ? x.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (_, I) => t.asModal ? (o(), S(ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: I[5] || (I[5] = (k) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: I[4] || (I[4] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", hf, [
            I[11] || (I[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: I[0] || (I[0] = (k) => i("close"))
            }, [...I[10] || (I[10] = [
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
          e("div", pf, [
            t.status && u.value ? (o(), n("div", yf, [
              t.status.workflows.new.length ? (o(), n("div", wf, [
                I[12] || (I[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", bf, [
                I[13] || (I[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", kf, [
                I[14] || (I[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", _f, [
                I[15] || (I[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", $f, [
                I[16] || (I[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", Cf, " No changes to commit ")) : (o(), n("div", xf, " Loading... ")),
            p.value ? (o(), n("div", Sf, [
              e("div", If, [
                I[17] || (I[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Ef, l(b.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", zf, [
                (o(!0), n(A, null, Q(b.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  w(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              f(Bt, {
                modelValue: m.value,
                "onUpdate:modelValue": I[1] || (I[1] = (k) => m.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...I[18] || (I[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Mf, [
              f(Ut, {
                modelValue: y.value,
                "onUpdate:modelValue": I[2] || (I[2] = (k) => y.value = k),
                placeholder: L.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || v.value || L.value,
                rows: 3,
                onCtrlEnter: M
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (o(), n("div", {
              key: 4,
              class: ee(["result", r.value.type])
            }, l(r.value.message), 3)) : c("", !0)
          ]),
          e("div", Lf, [
            f(ie, {
              variant: "secondary",
              onClick: I[3] || (I[3] = (k) => i("close"))
            }, {
              default: a(() => [...I[19] || (I[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !y.value.trim() || v.value || L.value,
              loading: v.value,
              onClick: M
            }, {
              default: a(() => [
                w(l(v.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Tf, [
      e("div", Rf, [
        I[21] || (I[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: I[6] || (I[6] = (k) => i("close"))
        }, [...I[20] || (I[20] = [
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
      e("div", Df, [
        t.status && u.value ? (o(), n("div", Nf, [
          t.status.workflows.new.length ? (o(), n("div", Of, [
            I[22] || (I[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Uf, [
            I[23] || (I[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", Bf, [
            I[24] || (I[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Pf, [
            I[25] || (I[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Vf, [
            I[26] || (I[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", Af, " No changes to commit ")) : (o(), n("div", Ff, " Loading... ")),
        p.value ? (o(), n("div", Wf, [
          e("div", Gf, [
            I[27] || (I[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", jf, l(b.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", Hf, [
            (o(!0), n(A, null, Q(b.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              w(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          f(Bt, {
            modelValue: m.value,
            "onUpdate:modelValue": I[7] || (I[7] = (k) => m.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...I[28] || (I[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", Kf, [
          f(Ut, {
            modelValue: y.value,
            "onUpdate:modelValue": I[8] || (I[8] = (k) => y.value = k),
            placeholder: L.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || v.value || L.value,
            rows: 3,
            onCtrlEnter: M
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (o(), n("div", {
          key: 4,
          class: ee(["result", r.value.type])
        }, l(r.value.message), 3)) : c("", !0)
      ]),
      e("div", qf, [
        f(ie, {
          variant: "secondary",
          onClick: I[9] || (I[9] = (k) => i("close"))
        }, {
          default: a(() => [...I[29] || (I[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(ie, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !y.value.trim() || v.value || L.value,
          loading: v.value,
          onClick: M
        }, {
          default: a(() => [
            w(l(v.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ht = /* @__PURE__ */ K(Jf, [["__scopeId", "data-v-38b45183"]]), Yf = { class: "modal-header" }, Xf = { class: "modal-body" }, Qf = { class: "switch-message" }, Zf = { class: "switch-details" }, eg = { class: "modal-actions" }, tg = /* @__PURE__ */ H({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), S(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Yf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Xf, [
            e("p", Qf, [
              s[6] || (s[6] = w(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = w(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = w("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Zf, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", eg, [
            f(q, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(q, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), og = /* @__PURE__ */ K(tg, [["__scopeId", "data-v-e9c5253e"]]), sg = { class: "progress-bar" }, ng = /* @__PURE__ */ H({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = D(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (i, g) => (o(), n("div", sg, [
      e("div", {
        class: ee(["progress-fill", t.variant]),
        style: Ze({ width: s.value })
      }, null, 6)
    ]));
  }
}), ag = /* @__PURE__ */ K(ng, [["__scopeId", "data-v-1beb0512"]]), lg = {
  key: 0,
  class: "modal-overlay"
}, ig = { class: "modal-content" }, rg = { class: "modal-body" }, dg = { class: "progress-info" }, cg = { class: "progress-percentage" }, ug = { class: "progress-state" }, mg = { class: "switch-steps" }, vg = { class: "step-icon" }, fg = { class: "step-label" }, gg = /* @__PURE__ */ H({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = D(() => {
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
    }), i = D(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), g = D(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = y.findIndex((m) => m.state === d.state);
      return y.map((m, r) => {
        let u = "pending", b = "○";
        return r < v ? (u = "completed", b = "✓") : r === v && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (y, v) => (o(), S(ze, { to: "body" }, [
      t.show ? (o(), n("div", lg, [
        e("div", ig, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", rg, [
            f(ag, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", dg, [
              e("div", cg, l(t.progress) + "%", 1),
              e("div", ug, l(s.value), 1)
            ]),
            e("div", mg, [
              (o(!0), n(A, null, Q(g.value, (m) => (o(), n("div", {
                key: m.state,
                class: ee(["switch-step", m.status])
              }, [
                e("span", vg, l(m.icon), 1),
                e("span", fg, l(m.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), hg = /* @__PURE__ */ K(gg, [["__scopeId", "data-v-768a5078"]]), pg = { class: "modal-header" }, yg = { class: "modal-body" }, wg = {
  key: 0,
  class: "node-section"
}, bg = { class: "node-list" }, kg = {
  key: 1,
  class: "node-section"
}, _g = { class: "node-list" }, $g = { class: "modal-actions" }, Cg = /* @__PURE__ */ H({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), S(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", pg, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", yg, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", wg, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", bg, [
                (o(!0), n(A, null, Q(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", kg, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", _g, [
                (o(!0), n(A, null, Q(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", $g, [
            f(q, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(q, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), xg = /* @__PURE__ */ K(Cg, [["__scopeId", "data-v-7cad7518"]]);
async function it(t, d = {}, s = 5e3) {
  const i = new AbortController(), g = setTimeout(() => i.abort(), s);
  try {
    const y = await fetch(t, {
      ...d,
      signal: i.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function Sg() {
  const t = z(null);
  async function d() {
    try {
      const v = await it(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (v.ok)
        return (await v.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const v = await it(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Health check failed");
      return await v.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const v = await it(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Failed to get status");
      return await v.json();
    } catch {
      return null;
    }
  }
  async function g() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await it(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await it(
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
    getStatus: i,
    restart: g,
    kill: y
  };
}
const Ig = { class: "comfygit-panel" }, Eg = { class: "panel-header" }, zg = { class: "header-left" }, Mg = {
  key: 0,
  class: "header-info"
}, Lg = { class: "header-actions" }, Tg = { class: "env-switcher" }, Rg = {
  key: 0,
  class: "header-info"
}, Dg = { class: "branch-name" }, Ng = { class: "panel-main" }, Og = { class: "sidebar" }, Ug = { class: "sidebar-section" }, Bg = { class: "sidebar-section" }, Pg = { class: "sidebar-section" }, Vg = { class: "content-area" }, Ag = {
  key: 0,
  class: "error-message"
}, Fg = {
  key: 1,
  class: "loading"
}, Wg = { class: "dialog-content env-selector-dialog" }, Gg = { class: "dialog-header" }, jg = { class: "dialog-body" }, Hg = { class: "env-list" }, Kg = { class: "env-info" }, qg = { class: "env-name-row" }, Jg = { class: "env-indicator" }, Yg = { class: "env-name" }, Xg = {
  key: 0,
  class: "env-branch"
}, Qg = {
  key: 1,
  class: "current-label"
}, Zg = { class: "env-stats" }, eh = ["onClick"], th = { class: "toast-container" }, oh = { class: "toast-icon" }, sh = { class: "toast-message" }, nh = /* @__PURE__ */ H({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: i,
      getHistory: g,
      getBranches: y,
      checkout: v,
      createBranch: m,
      switchBranch: r,
      getEnvironments: u,
      switchEnvironment: b,
      getSwitchProgress: p,
      syncEnvironmentManually: L
    } = Ce(), M = Sg(), _ = z(null), I = z([]), k = z([]), x = z([]), R = D(() => x.value.find((W) => W.is_current)), C = z(!1), h = z(null), $ = z(null), E = z(!1), Z = z(null), J = z(!1), O = z(!1), N = z(""), V = z({ state: "idle", progress: 0, message: "" });
    let B = null, Y = null;
    const P = z("status"), j = z("this-env");
    function X(W, T) {
      P.value = W, j.value = T;
    }
    function ne(W) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      de && X(de.view, de.section);
    }
    function se() {
      X("branches", "this-env");
    }
    const ve = z(null), oe = z(!1), Me = z(!1), pe = z([]);
    let et = 0;
    function fe(W, T = "info", de = 3e3) {
      const ye = ++et;
      return pe.value.push({ id: ye, message: W, type: T }), de > 0 && setTimeout(() => {
        pe.value = pe.value.filter((Re) => Re.id !== ye);
      }, de), ye;
    }
    function Le(W) {
      pe.value = pe.value.filter((T) => T.id !== W);
    }
    function lt(W) {
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
    const Je = D(() => {
      if (!_.value) return "neutral";
      const W = _.value.workflows, T = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? T ? "warning" : "success" : "error";
    });
    D(() => _.value ? Je.value === "success" ? "All synced" : Je.value === "warning" ? "Uncommitted changes" : Je.value === "error" ? "Not synced" : "" : "");
    async function G() {
      C.value = !0, h.value = null;
      try {
        const [W, T, de, ye] = await Promise.all([
          i(!0),
          g(),
          y(),
          u()
        ]);
        _.value = W, I.value = T.commits, k.value = de.branches, x.value = ye, s("statusUpdate", W), Z.value && await Z.value.loadWorkflows(!0);
      } catch (W) {
        h.value = W instanceof Error ? W.message : "Failed to load status", _.value = null, I.value = [], k.value = [];
      } finally {
        C.value = !1;
      }
    }
    function le(W) {
      $.value = W;
    }
    async function ge(W) {
      var de;
      $.value = null;
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      ve.value = {
        title: T ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: T ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((de = W.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: T ? Dt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: T,
        onConfirm: async () => {
          var De;
          ve.value = null, te();
          const ye = fe(`Checking out ${W.short_hash || ((De = W.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Re = await v(W.hash, T);
          Le(ye), Re.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Re.message || "Checkout failed", "error");
        }
      };
    }
    async function $e(W) {
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      ve.value = {
        title: T ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: T ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: T ? Dt() : void 0,
        warning: T ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ve.value = null, te();
          const de = fe(`Switching to ${W}...`, "info", 0), ye = await r(W, T);
          Le(de), ye.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function F(W) {
      const T = fe(`Creating branch ${W}...`, "info", 0), de = await m(W);
      Le(T), de.status === "success" ? (fe(`Branch "${W}" created`, "success"), await G()) : fe(de.message || "Failed to create branch", "error");
    }
    async function U(W) {
      $.value = null;
      const T = prompt("Enter branch name:");
      if (T) {
        const de = fe(`Creating branch ${T}...`, "info", 0), ye = await m(T, W.hash);
        Le(de), ye.status === "success" ? (fe(`Branch "${T}" created from ${W.short_hash}`, "success"), await G()) : fe(ye.message || "Failed to create branch", "error");
      }
    }
    function te() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function he(W) {
      E.value = !1, N.value = W, J.value = !0;
    }
    async function Te() {
      J.value = !1, O.value = !0, te(), V.value = {
        progress: 10,
        state: Ue(10),
        message: Be(10)
      };
      try {
        await b(N.value), ht(), pt();
      } catch (W) {
        Pe(), O.value = !1, fe(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), V.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ue(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function Be(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ue(W)] || "";
    }
    function ht() {
      if (Y) return;
      let W = 10;
      const T = 60, de = 5e3, ye = 100, Re = (T - W) / (de / ye);
      Y = window.setInterval(() => {
        if (W += Re, W >= T && (W = T, Pe()), V.value.progress < T) {
          const De = Math.floor(W);
          V.value = {
            progress: De,
            state: Ue(De),
            message: Be(De)
          };
        }
      }, ye);
    }
    function Pe() {
      Y && (clearInterval(Y), Y = null);
    }
    function pt() {
      B || (B = window.setInterval(async () => {
        try {
          let W = await M.getStatus();
          if ((!W || W.state === "idle") && (W = await p()), !W)
            return;
          const T = W.progress || 0;
          T >= 60 && Pe();
          const de = Math.max(T, V.value.progress), ye = W.state && W.state !== "idle" && W.state !== "unknown", Re = ye ? W.state : Ue(de), De = ye && W.message || Be(de);
          V.value = {
            state: Re,
            progress: de,
            message: De
          }, W.state === "complete" ? (Pe(), kt(), O.value = !1, fe(`✓ Switched to ${N.value}`, "success"), await G(), N.value = "") : W.state === "rolled_back" ? (Pe(), kt(), O.value = !1, fe("Switch failed, restored previous environment", "warning"), N.value = "") : W.state === "critical_failure" && (Pe(), kt(), O.value = !1, fe(`Critical error during switch: ${W.message}`, "error"), N.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function kt() {
      Pe(), B && (clearInterval(B), B = null);
    }
    function Xt() {
      J.value = !1, N.value = "";
    }
    async function Qt() {
      oe.value = !1, await G(), fe("✓ Changes committed", "success");
    }
    async function Zt() {
      Me.value = !1;
      const W = fe("Syncing environment...", "info", 0);
      try {
        const T = await L("skip", !0);
        if (Le(W), T.status === "success") {
          const de = [];
          T.nodes_installed.length && de.push(`${T.nodes_installed.length} installed`), T.nodes_removed.length && de.push(`${T.nodes_removed.length} removed`);
          const ye = de.length ? `: ${de.join(", ")}` : "";
          fe(`✓ Environment synced${ye}`, "success"), await G();
        } else {
          const de = T.errors.length ? T.errors.join("; ") : T.message;
          fe(`Sync failed: ${de}`, "error");
        }
      } catch (T) {
        Le(W), fe(`Sync error: ${T instanceof Error ? T.message : "Unknown error"}`, "error");
      }
    }
    async function eo(W) {
      const T = fe(`Creating environment "${W}"...`, "info", 0);
      Le(T), fe("Environment creation not yet implemented", "warning");
    }
    async function to(W) {
      const T = fe(`Deleting environment "${W}"...`, "info", 0);
      Le(T), fe("Environment deletion not yet implemented", "warning");
    }
    function oo(W) {
      fe(`Viewing details for "${W}"`, "info"), X("models-env", "this-env");
    }
    function Dt() {
      if (!_.value) return [];
      const W = [], T = _.value.workflows;
      return T.new.length && W.push(`${T.new.length} new workflow(s)`), T.modified.length && W.push(`${T.modified.length} modified workflow(s)`), T.deleted.length && W.push(`${T.deleted.length} deleted workflow(s)`), W;
    }
    return be(G), (W, T) => {
      var de, ye, Re, De;
      return o(), n("div", Ig, [
        e("div", Eg, [
          e("div", zg, [
            T[27] || (T[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), n("div", Mg)) : c("", !0)
          ]),
          e("div", Lg, [
            e("button", {
              class: ee(["icon-btn", { spinning: C.value }]),
              onClick: G,
              title: "Refresh"
            }, [...T[28] || (T[28] = [
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
              onClick: T[0] || (T[0] = (ae) => s("close")),
              title: "Close"
            }, [...T[29] || (T[29] = [
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
        e("div", Tg, [
          T[31] || (T[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: T[1] || (T[1] = (ae) => X("environments", "all-envs"))
          }, [
            _.value ? (o(), n("div", Rg, [
              e("span", null, l(((de = R.value) == null ? void 0 : de.name) || ((ye = _.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", Dg, "(" + l(_.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            T[30] || (T[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Ng, [
          e("div", Og, [
            e("div", Ug, [
              T[32] || (T[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "status" && j.value === "this-env" }]),
                onClick: T[2] || (T[2] = (ae) => X("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "workflows" }]),
                onClick: T[3] || (T[3] = (ae) => X("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "models-env" }]),
                onClick: T[4] || (T[4] = (ae) => X("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "branches" }]),
                onClick: T[5] || (T[5] = (ae) => X("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "history" }]),
                onClick: T[6] || (T[6] = (ae) => X("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "nodes" }]),
                onClick: T[7] || (T[7] = (ae) => X("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "debug-env" }]),
                onClick: T[8] || (T[8] = (ae) => X("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            T[35] || (T[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Bg, [
              T[33] || (T[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "environments" }]),
                onClick: T[9] || (T[9] = (ae) => X("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "model-index" }]),
                onClick: T[10] || (T[10] = (ae) => X("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "settings" }]),
                onClick: T[11] || (T[11] = (ae) => X("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "debug-workspace" }]),
                onClick: T[12] || (T[12] = (ae) => X("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            T[36] || (T[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Pg, [
              T[34] || (T[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "export" }]),
                onClick: T[13] || (T[13] = (ae) => X("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "import" }]),
                onClick: T[14] || (T[14] = (ae) => X("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: P.value === "remotes" }]),
                onClick: T[15] || (T[15] = (ae) => X("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Vg, [
            h.value ? (o(), n("div", Ag, l(h.value), 1)) : !_.value && P.value === "status" ? (o(), n("div", Fg, " Loading status... ")) : (o(), n(A, { key: 2 }, [
              P.value === "status" ? (o(), S(An, {
                key: 0,
                status: _.value,
                onSwitchBranch: se,
                onCommitChanges: T[16] || (T[16] = (ae) => oe.value = !0),
                onSyncEnvironment: T[17] || (T[17] = (ae) => Me.value = !0),
                onViewWorkflows: T[18] || (T[18] = (ae) => X("workflows", "this-env")),
                onViewHistory: T[19] || (T[19] = (ae) => X("history", "this-env")),
                onViewDebug: T[20] || (T[20] = (ae) => X("debug-env", "this-env"))
              }, null, 8, ["status"])) : P.value === "workflows" ? (o(), S(Qd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Z,
                onRefresh: G
              }, null, 512)) : P.value === "models-env" ? (o(), S(tc, {
                key: 2,
                onNavigate: ne
              })) : P.value === "branches" ? (o(), S(oa, {
                key: 3,
                branches: k.value,
                current: ((Re = _.value) == null ? void 0 : Re.branch) || null,
                onSwitch: $e,
                onCreate: F
              }, null, 8, ["branches", "current"])) : P.value === "history" ? (o(), S(va, {
                key: 4,
                commits: I.value,
                onSelect: le,
                onCheckout: ge
              }, null, 8, ["commits"])) : P.value === "nodes" ? (o(), S(Ac, { key: 5 })) : P.value === "debug-env" ? (o(), S(Vu, { key: 6 })) : P.value === "environments" ? (o(), S(Qu, {
                key: 7,
                onSwitch: he,
                onCreate: eo,
                onDelete: to,
                onViewDetails: oo
              })) : P.value === "model-index" ? (o(), S(Oc, { key: 8 })) : P.value === "settings" ? (o(), S(Ou, { key: 9 })) : P.value === "debug-workspace" ? (o(), S(Bu, { key: 10 })) : P.value === "export" ? (o(), S(rm, { key: 11 })) : P.value === "import" ? (o(), S(Ov, { key: 12 })) : P.value === "remotes" ? (o(), S(pu, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        $.value ? (o(), S(ef, {
          key: 0,
          commit: $.value,
          onClose: T[21] || (T[21] = (ae) => $.value = null),
          onCheckout: ge,
          onCreateBranch: U
        }, null, 8, ["commit"])) : c("", !0),
        ve.value ? (o(), S(af, {
          key: 1,
          title: ve.value.title,
          message: ve.value.message,
          details: ve.value.details,
          warning: ve.value.warning,
          confirmLabel: ve.value.confirmLabel,
          cancelLabel: ve.value.cancelLabel,
          secondaryLabel: ve.value.secondaryLabel,
          secondaryAction: ve.value.secondaryAction,
          destructive: ve.value.destructive,
          onConfirm: ve.value.onConfirm,
          onCancel: T[22] || (T[22] = (ae) => ve.value = null),
          onSecondary: ve.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        f(og, {
          show: J.value,
          "from-environment": ((De = R.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": N.value,
          onConfirm: Te,
          onClose: Xt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        oe.value && _.value ? (o(), S(Ht, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: T[23] || (T[23] = (ae) => oe.value = !1),
          onCommitted: Qt
        }, null, 8, ["status"])) : c("", !0),
        Me.value && _.value ? (o(), S(xg, {
          key: 3,
          show: Me.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: Zt,
          onClose: T[24] || (T[24] = (ae) => Me.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        f(hg, {
          show: O.value,
          state: V.value.state,
          progress: V.value.progress,
          message: V.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        E.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: T[26] || (T[26] = ke((ae) => E.value = !1, ["self"]))
        }, [
          e("div", Wg, [
            e("div", Gg, [
              T[38] || (T[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: T[25] || (T[25] = (ae) => E.value = !1)
              }, [...T[37] || (T[37] = [
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
            e("div", jg, [
              T[39] || (T[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Hg, [
                (o(!0), n(A, null, Q(x.value, (ae) => (o(), n("div", {
                  key: ae.name,
                  class: ee(["env-item", { current: ae.is_current }])
                }, [
                  e("div", Kg, [
                    e("div", qg, [
                      e("span", Jg, l(ae.is_current ? "●" : "○"), 1),
                      e("span", Yg, l(ae.name), 1),
                      ae.current_branch ? (o(), n("span", Xg, "(" + l(ae.current_branch) + ")", 1)) : c("", !0),
                      ae.is_current ? (o(), n("span", Qg, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Zg, l(ae.workflow_count) + " workflows • " + l(ae.node_count) + " nodes ", 1)
                  ]),
                  ae.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (up) => he(ae.name)
                  }, " SWITCH ", 8, eh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", th, [
          f(co, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(A, null, Q(pe.value, (ae) => (o(), n("div", {
                key: ae.id,
                class: ee(["toast", ae.type])
              }, [
                e("span", oh, l(lt(ae.type)), 1),
                e("span", sh, l(ae.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), ah = /* @__PURE__ */ K(nh, [["__scopeId", "data-v-734ed318"]]), lh = { class: "item-header" }, ih = { class: "item-info" }, rh = { class: "filename" }, dh = { class: "metadata" }, ch = { class: "size" }, uh = {
  key: 0,
  class: "type"
}, mh = { class: "item-actions" }, vh = {
  key: 0,
  class: "progress-section"
}, fh = { class: "progress-bar" }, gh = { class: "progress-stats" }, hh = { class: "downloaded" }, ph = { class: "speed" }, yh = {
  key: 0,
  class: "eta"
}, wh = {
  key: 1,
  class: "status-msg paused"
}, bh = {
  key: 2,
  class: "status-msg queued"
}, kh = {
  key: 3,
  class: "status-msg completed"
}, _h = {
  key: 4,
  class: "status-msg failed"
}, $h = {
  key: 0,
  class: "retries"
}, Ch = /* @__PURE__ */ H({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function i(v) {
      if (v === 0) return "?";
      const m = v / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(v / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(v) {
      return v === 0 ? "-" : `${(v / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(v) {
      if (v < 60) return `${Math.round(v)}s`;
      const m = Math.floor(v / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (v, m) => (o(), n("div", {
      class: ee(["download-item", `status-${t.item.status}`])
    }, [
      e("div", lh, [
        e("div", ih, [
          e("div", rh, l(t.item.filename), 1),
          e("div", dh, [
            e("span", ch, l(i(t.item.size)), 1),
            t.item.type ? (o(), n("span", uh, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", mh, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (r) => s("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (r) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (r) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (r) => s("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", vh, [
        e("div", fh, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", gh, [
          e("span", hh, l(i(t.item.downloaded)) + " / " + l(i(t.item.size)), 1),
          e("span", ph, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", yh, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", wh, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", bh, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", kh, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", _h, [
        w(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", $h, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ K(Ch, [["__scopeId", "data-v-2110df65"]]), xh = { class: "queue-title" }, Sh = { class: "count" }, Ih = { class: "queue-actions" }, Eh = { class: "action-label" }, zh = {
  key: 0,
  class: "overall-progress"
}, Mh = { class: "progress-bar" }, Lh = {
  key: 0,
  class: "current-mini"
}, Th = { class: "filename" }, Rh = { class: "speed" }, Dh = {
  key: 1,
  class: "queue-content"
}, Nh = {
  key: 0,
  class: "section"
}, Oh = {
  key: 1,
  class: "section"
}, Uh = { class: "section-header" }, Bh = { class: "section-label paused" }, Ph = { class: "items-list" }, Vh = {
  key: 2,
  class: "section"
}, Ah = { class: "section-header" }, Fh = { class: "section-label" }, Wh = { class: "items-list" }, Gh = {
  key: 3,
  class: "section"
}, jh = { class: "section-header" }, Hh = { class: "section-label" }, Kh = { class: "items-list" }, qh = {
  key: 4,
  class: "section"
}, Jh = { class: "section-header" }, Yh = { class: "section-label failed" }, Xh = { class: "items-list" }, Qh = /* @__PURE__ */ H({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: i,
      completedItems: g,
      failedItems: y,
      pausedItems: v,
      hasItems: m,
      activeCount: r,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: p,
      resumeAllPaused: L,
      removeItem: M,
      clearCompleted: _
    } = bt(), I = z(!1);
    let k = null;
    Et(
      () => ({
        active: r.value,
        failed: y.value.length,
        paused: v.value.length,
        completed: g.value.length
      }),
      (h, $) => {
        k && (clearTimeout(k), k = null);
        const E = h.active === 0 && h.failed === 0 && h.paused === 0 && h.completed > 0, Z = $ && ($.active > 0 || $.paused > 0);
        E && Z && (k = setTimeout(() => {
          _(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = D(() => {
      var E;
      if (d.items.length === 0) return 0;
      const h = g.value.length, $ = ((E = s.value) == null ? void 0 : E.progress) || 0;
      return Math.round((h + $ / 100) / d.items.length * 100);
    });
    function R(h) {
      u(h);
    }
    function C(h) {
      return h === 0 ? "" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (h, $) => (o(), S(ze, { to: "body" }, [
      ce(m) ? (o(), n("div", {
        key: 0,
        class: ee(["model-download-queue", { minimized: !I.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: $[0] || ($[0] = (E) => I.value = !I.value)
        }, [
          e("div", xh, [
            $[4] || ($[4] = e("span", { class: "icon" }, "↓", -1)),
            $[5] || ($[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Sh, "(" + l(ce(r)) + "/" + l(ce(d).items.length) + ")", 1)
          ]),
          e("div", Ih, [
            e("span", Eh, l(I.value ? "minimize" : "expand"), 1)
          ])
        ]),
        I.value ? (o(), n("div", Dh, [
          ce(s) ? (o(), n("div", Nh, [
            $[6] || ($[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(rt, {
              item: ce(s),
              onCancel: $[1] || ($[1] = (E) => R(ce(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ce(v).length > 0 ? (o(), n("div", Oh, [
            e("div", Uh, [
              e("span", Bh, "Paused (" + l(ce(v).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: $[2] || ($[2] = //@ts-ignore
                (...E) => ce(L) && ce(L)(...E))
              }, "Resume All")
            ]),
            e("div", Ph, [
              (o(!0), n(A, null, Q(ce(v), (E) => (o(), S(rt, {
                key: E.id,
                item: E,
                onResume: (Z) => ce(p)(E.id),
                onRemove: (Z) => ce(M)(E.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(i).length > 0 ? (o(), n("div", Vh, [
            e("div", Ah, [
              e("span", Fh, "Queued (" + l(ce(i).length) + ")", 1)
            ]),
            e("div", Wh, [
              (o(!0), n(A, null, Q(ce(i), (E) => (o(), S(rt, {
                key: E.id,
                item: E,
                onCancel: (Z) => R(E.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ce(g).length > 0 ? (o(), n("div", Gh, [
            e("div", jh, [
              e("span", Hh, "Completed (" + l(ce(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: $[3] || ($[3] = //@ts-ignore
                (...E) => ce(_) && ce(_)(...E))
              }, "Clear")
            ]),
            e("div", Kh, [
              (o(!0), n(A, null, Q(ce(g).slice(0, 3), (E) => (o(), S(rt, {
                key: E.id,
                item: E,
                onRemove: (Z) => ce(M)(E.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(y).length > 0 ? (o(), n("div", qh, [
            e("div", Jh, [
              e("span", Yh, "Failed (" + l(ce(y).length) + ")", 1)
            ]),
            e("div", Xh, [
              (o(!0), n(A, null, Q(ce(y), (E) => (o(), S(rt, {
                key: E.id,
                item: E,
                onRetry: (Z) => ce(b)(E.id),
                onRemove: (Z) => ce(M)(E.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", zh, [
          e("div", Mh, [
            e("div", {
              class: "progress-fill",
              style: Ze({ width: `${x.value}%` })
            }, null, 4)
          ]),
          ce(s) ? (o(), n("div", Lh, [
            e("span", Th, l(ce(s).filename), 1),
            e("span", Rh, l(C(ce(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), Zh = /* @__PURE__ */ K(Qh, [["__scopeId", "data-v-60751cfa"]]), ep = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', tp = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', op = {
  comfy: ep,
  phosphor: tp
}, Tt = "comfy", Kt = "comfygit-theme";
let Ye = null, qt = Tt;
function sp() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Jt(t = Tt) {
  Ye && Ye.remove(), Ye = document.createElement("style"), Ye.id = "comfygit-theme-styles", Ye.setAttribute("data-theme", t), Ye.textContent = op[t], document.head.appendChild(Ye), document.body.setAttribute("data-comfygit-theme", t), qt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function np() {
  return qt;
}
function ap(t) {
  Jt(t);
}
const Rt = document.createElement("link");
Rt.rel = "stylesheet";
Rt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rt);
const lp = sp();
Jt(lp);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), ap(t);
  },
  getTheme: () => {
    const t = np();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ne = null, Ie = null, mt = null, dt = null, Pt = null;
const st = z(null);
async function wt() {
  var t;
  if (!((t = ot) != null && t.api)) return null;
  try {
    const d = await ot.api.fetchApi("/v2/comfygit/status");
    d.ok && (st.value = await d.json());
  } catch {
  }
}
function ip() {
  if (!st.value) return !1;
  const t = st.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || st.value.has_changes;
}
function rp() {
  Ne && Ne.remove(), Ne = document.createElement("div"), Ne.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ne.appendChild(t), Ne.addEventListener("click", (i) => {
    i.target === Ne && Ct();
  });
  const d = (i) => {
    i.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), zt({
    render: () => Mt(ah, {
      onClose: Ct,
      onStatusUpdate: (i) => {
        st.value = i, vt();
      }
    })
  }).mount(t), document.body.appendChild(Ne);
}
function Ct() {
  Ne && (Ne.remove(), Ne = null);
}
function dp(t) {
  ct(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const s = (g) => {
    Ie && !Ie.contains(g.target) && g.target !== t && (ct(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (g) => {
    g.key === "Escape" && (ct(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), mt = zt({
    render: () => Mt(Ht, {
      status: st.value,
      onClose: ct,
      onCommitted: () => {
        ct(), wt().then(vt);
      }
    })
  }), mt.mount(Ie), document.body.appendChild(Ie);
}
function ct() {
  mt && (mt.unmount(), mt = null), Ie && (Ie.remove(), Ie = null);
}
function cp() {
  dt || (dt = document.createElement("div"), dt.className = "comfygit-download-queue-root", Pt = zt({
    render: () => Mt(Zh)
  }), Pt.mount(dt), document.body.appendChild(dt), console.log("[ComfyGit] Model download queue mounted"));
}
let Fe = null;
function vt() {
  if (!Fe) return;
  const t = Fe.querySelector(".commit-indicator");
  t && (t.style.display = ip() ? "block" : "none");
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
ot.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = rp, Fe = document.createElement("button"), Fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Fe.innerHTML = 'Commit <span class="commit-indicator"></span>', Fe.title = "Quick Commit", Fe.onclick = () => dp(Fe), t.appendChild(d), t.appendChild(Fe), (y = (g = ot.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (ot.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), cp();
    const { loadPendingDownloads: s } = bt();
    s(), await wt(), vt(), setInterval(async () => {
      await wt(), vt();
    }, 3e4);
    const i = ot.api;
    if (i) {
      let v = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, m = function() {
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
        const b = document.createElement("span");
        b.textContent = "Workflows updated - refresh required", u.appendChild(b);
        const p = document.createElement("button");
        p.textContent = "Refresh", p.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => v(), u.appendChild(p);
        const L = document.createElement("button");
        L.textContent = "×", L.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, L.onmouseover = () => L.style.opacity = "1", L.onmouseout = () => L.style.opacity = "0.6", L.onclick = () => u.remove(), u.appendChild(L), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: b, workflow_name: p } = u.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${p}`), await wt(), vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let r = !1;
      i.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !r && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), v()) : m()), r = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
