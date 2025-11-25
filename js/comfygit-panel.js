import { app as tt } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as ie, createBlock as _, resolveDynamicComponent as St, normalizeClass as ee, withCtx as a, toDisplayString as l, createVNode as v, createTextVNode as g, computed as U, Fragment as W, renderList as Z, normalizeStyle as Ye, ref as S, onMounted as we, watch as Bt, Teleport as ze, withModifiers as pe, Transition as oo, withKeys as Ae, onUnmounted as so, reactive as Pt, readonly as no, unref as de, resolveComponent as ao, createSlots as Vt, TransitionGroup as lo, createApp as It, h as Et } from "vue";
const io = { class: "panel-layout" }, ro = {
  key: 0,
  class: "panel-layout-header"
}, co = {
  key: 1,
  class: "panel-layout-search"
}, uo = { class: "panel-layout-content" }, mo = {
  key: 2,
  class: "panel-layout-footer"
}, vo = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (d, s) => (o(), n("div", io, [
      d.$slots.header ? (o(), n("div", ro, [
        ie(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), n("div", co, [
        ie(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", uo, [
        ie(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", mo, [
        ie(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), J = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [i, f] of d)
    s[i] = f;
  return s;
}, $e = /* @__PURE__ */ J(vo, [["__scopeId", "data-v-21565df9"]]), fo = {
  key: 0,
  class: "panel-title-prefix"
}, go = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ho = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, s) => (o(), _(St(`h${t.level}`), {
      class: ee(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", fo, l(t.prefix), 1)) : (o(), n("span", go)),
        ie(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), po = /* @__PURE__ */ J(ho, [["__scopeId", "data-v-c3875efc"]]), yo = ["title"], wo = ["width", "height"], bo = /* @__PURE__ */ q({
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
      ])], 8, wo))
    ], 8, yo));
  }
}), At = /* @__PURE__ */ J(bo, [["__scopeId", "data-v-6fc7f16d"]]), ko = { class: "header-left" }, _o = {
  key: 0,
  class: "header-actions"
}, $o = /* @__PURE__ */ q({
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
      e("div", ko, [
        v(po, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            g(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), _(At, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", _o, [
        ie(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ J($o, [["__scopeId", "data-v-55a62cd6"]]), Co = {
  key: 0,
  class: "section-title-count"
}, xo = {
  key: 1,
  class: "section-title-icon"
}, So = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), _(St(`h${t.level}`), {
      class: ee(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        ie(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Co, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", xo, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ie = /* @__PURE__ */ J(So, [["__scopeId", "data-v-559361eb"]]), Io = { class: "status-grid" }, Eo = { class: "status-grid__column" }, zo = { class: "status-grid__title" }, Mo = { class: "status-grid__column status-grid__column--right" }, Lo = { class: "status-grid__title" }, To = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", Io, [
      e("div", Eo, [
        e("h4", zo, l(t.leftTitle), 1),
        ie(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Mo, [
        e("h4", Lo, l(t.rightTitle), 1),
        ie(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Ro = /* @__PURE__ */ J(To, [["__scopeId", "data-v-fe556068"]]), No = {
  key: 0,
  class: "status-item__icon"
}, Do = {
  key: 1,
  class: "status-item__count"
}, Uo = { class: "status-item__label" }, Oo = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, s = U(() => `status-item--${d.variant}`);
    return (i, f) => (o(), n("div", {
      class: ee(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", No, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Do, l(t.count), 1)) : c("", !0),
      e("span", Uo, l(t.label), 1)
    ], 2));
  }
}), Be = /* @__PURE__ */ J(Oo, [["__scopeId", "data-v-6f929183"]]), Bo = { class: "issue-card__header" }, Po = { class: "issue-card__icon" }, Vo = { class: "issue-card__title" }, Ao = {
  key: 0,
  class: "issue-card__content"
}, Fo = {
  key: 0,
  class: "issue-card__description"
}, Wo = {
  key: 1,
  class: "issue-card__items"
}, Go = {
  key: 2,
  class: "issue-card__actions"
}, jo = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, s = U(() => `issue-card--${d.severity}`);
    return (i, f) => (o(), n("div", {
      class: ee(["issue-card", s.value])
    }, [
      e("div", Bo, [
        e("span", Po, l(t.icon), 1),
        e("h4", Vo, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", Ao, [
        t.description ? (o(), n("p", Fo, l(t.description), 1)) : c("", !0),
        ie(i.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", Wo, [
        (o(!0), n(W, null, Z(t.items, (w, h) => (o(), n("div", {
          key: h,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(w), 1)
        ]))), 128))
      ])) : c("", !0),
      i.$slots.actions ? (o(), n("div", Go, [
        ie(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ J(jo, [["__scopeId", "data-v-df6aa348"]]), Ho = ["type", "disabled"], Ko = {
  key: 0,
  class: "spinner"
}, qo = /* @__PURE__ */ q({
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
      t.loading ? (o(), n("span", Ko)) : c("", !0),
      t.loading ? c("", !0) : ie(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ho));
  }
}), j = /* @__PURE__ */ J(qo, [["__scopeId", "data-v-772abe47"]]), Jo = { class: "empty-state" }, Xo = {
  key: 0,
  class: "empty-icon"
}, Yo = { class: "empty-message" }, Qo = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, s) => (o(), n("div", Jo, [
      t.icon ? (o(), n("div", Xo, l(t.icon), 1)) : c("", !0),
      e("p", Yo, l(t.message), 1),
      t.actionLabel ? (o(), _(j, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("action"))
      }, {
        default: a(() => [
          g(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ne = /* @__PURE__ */ J(Qo, [["__scopeId", "data-v-4466284f"]]), Zo = { class: "branch-indicator" }, es = { class: "branch-indicator__info" }, ts = { class: "branch-indicator__label" }, os = { class: "branch-indicator__name" }, ss = {
  key: 0,
  class: "branch-indicator__remote"
}, ns = {
  key: 0,
  class: "branch-indicator__status"
}, as = {
  key: 0,
  class: "branch-indicator__ahead"
}, ls = {
  key: 1,
  class: "branch-indicator__behind"
}, is = {
  key: 1,
  class: "branch-indicator__actions"
}, rs = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", Zo, [
      e("div", es, [
        e("span", ts, l(t.label), 1),
        e("span", os, l(t.branchName), 1),
        t.remote ? (o(), n("span", ss, "@" + l(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", ns, [
        t.commitsAhead ? (o(), n("span", as, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), n("span", ls, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      d.$slots.actions ? (o(), n("div", is, [
        ie(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ds = /* @__PURE__ */ J(rs, [["__scopeId", "data-v-cb8dd50e"]]), cs = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: ee(["detail-label"]),
      style: Ye({ minWidth: t.minWidth })
    }, [
      ie(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Ct = /* @__PURE__ */ J(cs, [["__scopeId", "data-v-75e9eeb8"]]), us = /* @__PURE__ */ q({
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
      ie(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), xt = /* @__PURE__ */ J(us, [["__scopeId", "data-v-2f186e4c"]]), ms = { class: "detail-row" }, vs = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", ms, [
      v(Ct, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          g(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), _(xt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          g(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ie(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ne = /* @__PURE__ */ J(vs, [["__scopeId", "data-v-ef15664a"]]), fs = { class: "modal-header" }, gs = { class: "modal-body" }, hs = { class: "status-section" }, ps = {
  key: 0,
  class: "status-section"
}, ys = { class: "section-header-row" }, ws = {
  key: 0,
  class: "workflow-group"
}, bs = { class: "workflow-group-header" }, ks = { class: "workflow-group-title" }, _s = { class: "workflow-list" }, $s = { class: "workflow-name" }, Cs = { class: "workflow-issue" }, xs = {
  key: 1,
  class: "workflow-group"
}, Ss = { class: "workflow-group-header" }, Is = { class: "workflow-group-title" }, Es = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ms = { class: "workflow-issue" }, Ls = {
  key: 2,
  class: "workflow-group"
}, Ts = { class: "workflow-group-header" }, Rs = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Ds = { class: "workflow-name" }, Us = {
  key: 3,
  class: "workflow-group"
}, Os = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Ps = { class: "workflow-list" }, Vs = { class: "workflow-name" }, As = {
  key: 4,
  class: "workflow-group"
}, Fs = { class: "workflow-group-header" }, Ws = { class: "workflow-group-title" }, Gs = { class: "workflow-list" }, js = { class: "workflow-name" }, Hs = {
  key: 5,
  class: "workflow-group"
}, Ks = { class: "workflow-group-title" }, qs = { class: "expand-icon" }, Js = {
  key: 0,
  class: "workflow-list"
}, Xs = { class: "workflow-name" }, Ys = {
  key: 1,
  class: "status-section"
}, Qs = {
  key: 0,
  class: "change-group"
}, Zs = { class: "change-group-header" }, en = { class: "change-group-title" }, tn = { class: "change-list" }, on = { class: "node-name" }, sn = {
  key: 0,
  class: "dev-badge"
}, nn = {
  key: 1,
  class: "change-group"
}, an = { class: "change-group-header" }, ln = { class: "change-group-title" }, rn = { class: "change-list" }, dn = { class: "node-name" }, cn = {
  key: 0,
  class: "dev-badge"
}, un = {
  key: 2,
  class: "change-group"
}, mn = { class: "change-list" }, vn = { class: "change-item" }, fn = { class: "node-name" }, gn = {
  key: 3,
  class: "change-group"
}, hn = {
  key: 2,
  class: "status-section"
}, pn = {
  key: 0,
  class: "drift-item"
}, yn = { class: "drift-list" }, wn = {
  key: 0,
  class: "drift-list-more"
}, bn = {
  key: 1,
  class: "drift-item"
}, kn = { class: "drift-list" }, _n = {
  key: 0,
  class: "drift-list-more"
}, $n = {
  key: 2,
  class: "drift-item"
}, Cn = {
  key: 3,
  class: "drift-item"
}, xn = {
  key: 3,
  class: "status-section"
}, Sn = { class: "info-box" }, In = { class: "drift-list" }, En = {
  key: 0,
  class: "drift-list-more"
}, zn = {
  key: 4,
  class: "status-section"
}, Mn = { class: "warning-box" }, Ln = {
  key: 5,
  class: "empty-state-inline"
}, Tn = { class: "modal-actions" }, Rn = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const d = t, s = S(!1);
    we(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Bt(() => d.show, ($, I) => {
      console.log("StatusDetailModal show prop changed from", I, "to", $);
    }, { immediate: !0 });
    const i = U(() => {
      var $, I, z;
      return ((z = (I = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : z.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), f = U(() => {
      var $, I, z;
      return ((z = (I = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : z.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), w = U(() => {
      var $, I, z;
      return ((z = (I = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : I.synced) == null ? void 0 : z.filter((x) => {
        var C, A, M;
        const k = (M = (A = (C = d.status) == null ? void 0 : C.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : M.find((y) => y.name === x);
        return !k || k.status !== "broken";
      })) || [];
    }), h = U(() => {
      var $, I, z, x, k;
      return ($ = d.status) != null && $.workflows ? (((I = d.status.workflows.new) == null ? void 0 : I.length) ?? 0) > 0 || (((z = d.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((x = d.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), u = U(() => {
      var I, z, x;
      const $ = (I = d.status) == null ? void 0 : I.git_changes;
      return $ ? (((z = $.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((x = $.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || $.workflow_changes || $.has_other_changes : !1;
    }), r = U(() => {
      var $, I, z, x, k, C;
      return !h.value && !u.value && ((I = ($ = d.status) == null ? void 0 : $.comparison) == null ? void 0 : I.is_synced) && (((z = d.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((C = (k = (x = d.status) == null ? void 0 : x.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), m = U(() => {
      var I, z;
      const $ = (z = (I = d.status) == null ? void 0 : I.git_changes) == null ? void 0 : z.workflow_changes;
      return $ ? typeof $ == "number" ? $ : Object.keys($).length : 0;
    });
    function b($) {
      return typeof $ == "string" ? $ : $.name;
    }
    function p($) {
      return typeof $ == "object" && $.is_development === !0;
    }
    return ($, I) => {
      var z, x, k, C, A, M, y, E, R, P, L, N, O, K, G, D, X, V, oe, be, fe, ke;
      return o(), _(ze, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[5] || (I[5] = (Q) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[4] || (I[4] = pe(() => {
            }, ["stop"]))
          }, [
            e("div", fs, [
              I[6] || (I[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (Q) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", gs, [
              e("div", hs, [
                v(Ie, { level: "4" }, {
                  default: a(() => [...I[7] || (I[7] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                v(ne, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), n("div", ps, [
                e("div", ys, [
                  v(Ie, { level: "4" }, {
                    default: a(() => [...I[8] || (I[8] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[1] || (I[1] = (Q) => $.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (o(), n("div", ws, [
                  e("div", bs, [
                    I[9] || (I[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ks, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", _s, [
                    (o(!0), n(W, null, Z(i.value, (Q) => (o(), n("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", $s, l(Q.name), 1),
                      e("span", Cs, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), n("div", xs, [
                  e("div", Ss, [
                    I[10] || (I[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Is, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", Es, [
                    (o(!0), n(W, null, Z(f.value, (Q) => (o(), n("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", zs, l(Q.name), 1),
                      e("span", Ms, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (x = (z = t.status.workflows) == null ? void 0 : z.new) != null && x.length ? (o(), n("div", Ls, [
                  e("div", Ts, [
                    I[11] || (I[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rs, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), n(W, null, Z(t.status.workflows.new, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (k = t.status.workflows) == null ? void 0 : k.modified) != null && C.length ? (o(), n("div", Us, [
                  e("div", Os, [
                    I[12] || (I[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Bs, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ps, [
                    (o(!0), n(W, null, Z(t.status.workflows.modified, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (M = (A = t.status.workflows) == null ? void 0 : A.deleted) != null && M.length ? (o(), n("div", As, [
                  e("div", Fs, [
                    I[13] || (I[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ws, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Gs, [
                    (o(!0), n(W, null, Z(t.status.workflows.deleted, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", js, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                w.value.length ? (o(), n("div", Hs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: I[2] || (I[2] = (Q) => s.value = !s.value)
                  }, [
                    I[14] || (I[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Ks, "SYNCED (" + l(w.value.length) + ")", 1),
                    e("span", qs, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Js, [
                    (o(!0), n(W, null, Z(w.value, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, l(Q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              u.value ? (o(), n("div", Ys, [
                v(Ie, { level: "4" }, {
                  default: a(() => [...I[15] || (I[15] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (E = (y = t.status.git_changes) == null ? void 0 : y.nodes_added) != null && E.length ? (o(), n("div", Qs, [
                  e("div", Zs, [
                    I[16] || (I[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", en, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", tn, [
                    (o(!0), n(W, null, Z(t.status.git_changes.nodes_added, (Q) => (o(), n("div", {
                      key: b(Q),
                      class: "change-item"
                    }, [
                      e("span", on, l(b(Q)), 1),
                      p(Q) ? (o(), n("span", sn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (P = (R = t.status.git_changes) == null ? void 0 : R.nodes_removed) != null && P.length ? (o(), n("div", nn, [
                  e("div", an, [
                    I[17] || (I[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ln, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", rn, [
                    (o(!0), n(W, null, Z(t.status.git_changes.nodes_removed, (Q) => (o(), n("div", {
                      key: b(Q),
                      class: "change-item"
                    }, [
                      e("span", dn, l(b(Q)), 1),
                      p(Q) ? (o(), n("span", cn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (L = t.status.git_changes) != null && L.workflow_changes ? (o(), n("div", un, [
                  I[18] || (I[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", mn, [
                    e("div", vn, [
                      e("span", fn, l(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (N = t.status.git_changes) != null && N.has_other_changes ? (o(), n("div", gn, [...I[19] || (I[19] = [
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
              (O = t.status.comparison) != null && O.is_synced ? c("", !0) : (o(), n("div", hn, [
                v(Ie, { level: "4" }, {
                  default: a(() => [...I[20] || (I[20] = [
                    g("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                I[21] || (I[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (G = (K = t.status.comparison) == null ? void 0 : K.missing_nodes) != null && G.length ? (o(), n("div", pn, [
                  v(ne, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", yn, [
                    (o(!0), n(W, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (o(), n("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", wn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (X = (D = t.status.comparison) == null ? void 0 : D.extra_nodes) != null && X.length ? (o(), n("div", bn, [
                  v(ne, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", kn, [
                    (o(!0), n(W, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (o(), n("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", _n, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (oe = (V = t.status.comparison) == null ? void 0 : V.version_mismatches) != null && oe.length ? (o(), n("div", $n, [
                  v(ne, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (be = t.status.comparison) != null && be.packages_in_sync ? c("", !0) : (o(), n("div", Cn, [
                  v(ne, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ke = (fe = t.status.comparison) == null ? void 0 : fe.disabled_nodes) != null && ke.length ? (o(), n("div", xn, [
                v(Ie, { level: "4" }, {
                  default: a(() => [...I[22] || (I[22] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Sn, [
                  I[23] || (I[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", In, [
                  (o(!0), n(W, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (o(), n("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + l(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", En, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", zn, [
                v(Ie, { level: "4" }, {
                  default: a(() => [...I[24] || (I[24] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Mn, [
                  I[25] || (I[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                I[26] || (I[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              r.value ? (o(), n("div", Ln, [...I[27] || (I[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Tn, [
              v(j, {
                variant: "secondary",
                onClick: I[3] || (I[3] = (Q) => $.$emit("close"))
              }, {
                default: a(() => [...I[28] || (I[28] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Rt = /* @__PURE__ */ J(Rn, [["__scopeId", "data-v-cbde957e"]]), Nn = { class: "health-section-header" }, Dn = { style: { "margin-top": "var(--cg-space-1)" } }, Un = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, On = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: d }) {
    const s = t, i = S(!1), f = S(!1);
    we(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Rt);
    });
    function w() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function h() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function u() {
      i.value = !1, r("view-workflows");
    }
    const r = d, m = U(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), b = U(() => {
      const M = s.status.git_changes;
      return M.nodes_added.length > 0 || M.nodes_removed.length > 0 || M.workflow_changes || M.has_other_changes;
    }), p = U(() => m.value || b.value), $ = U(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), I = U(() => s.status.git_changes.has_other_changes), z = U(() => {
      var M;
      return ((M = s.status.workflows.analyzed) == null ? void 0 : M.filter(
        (y) => y.status === "broken" && y.sync_state === "synced"
      )) || [];
    }), x = U(() => {
      var M;
      return ((M = s.status.workflows.analyzed) == null ? void 0 : M.filter(
        (y) => y.status === "broken" && y.sync_state !== "synced"
      )) || [];
    }), k = U(() => z.value.length > 0 || x.value.length > 0), C = U(() => k.value || s.status.missing_models_count > 0 || p.value || !s.status.comparison.is_synced), A = U(() => {
      const M = [];
      return s.status.workflows.new.length > 0 && M.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && M.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && M.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && M.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && M.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${M.length > 0 ? M.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (M, y) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: y[0] || (y[0] = (E) => f.value = !0),
            onMouseleave: y[1] || (y[1] = (E) => f.value = !1)
          }, [
            e("div", Nn, [
              v(Ie, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...y[11] || (y[11] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              v(oo, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), _(j, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: w
                  }, {
                    default: a(() => [...y[12] || (y[12] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            v(Ro, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), _(Be, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), _(Be, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), _(Be, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                v(Be, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), _(Be, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), _(Be, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), _(Be, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                I.value ? (o(), _(Be, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), _(Be, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", Dn, [
            v(ds, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                v(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y[2] || (y[2] = (E) => M.$emit("switch-branch"))
                }, {
                  default: a(() => [...y[13] || (y[13] = [
                    g(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), _(Je, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              v(j, {
                variant: "primary",
                size: "sm",
                onClick: y[3] || (y[3] = (E) => M.$emit("create-branch"))
              }, {
                default: a(() => [...y[14] || (y[14] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          C.value ? (o(), n("div", Un, [
            v(Ie, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...y[15] || (y[15] = [
                g(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            z.value.length > 0 ? (o(), _(Je, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${z.value.length} committed workflow${z.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: z.value.map((E) => `${E.name} — ${E.issue_summary}`)
            }, {
              actions: a(() => [
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: y[4] || (y[4] = (E) => M.$emit("view-workflows"))
                }, {
                  default: a(() => [...y[16] || (y[16] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            x.value.length > 0 ? (o(), _(Je, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: x.value.map((E) => `${E.name} — ${E.issue_summary}`)
            }, {
              actions: a(() => [
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: y[5] || (y[5] = (E) => M.$emit("view-workflows"))
                }, {
                  default: a(() => [...y[17] || (y[17] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), _(Je, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: y[6] || (y[6] = (E) => M.$emit("view-workflows"))
                }, {
                  default: a(() => [...y[18] || (y[18] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            p.value ? (o(), _(Je, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: A.value
            }, {
              actions: a(() => [
                v(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h
                }, {
                  default: a(() => [...y[19] || (y[19] = [
                    g(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: y[7] || (y[7] = (E) => M.$emit("commit-changes"))
                }, {
                  default: a(() => [...y[20] || (y[20] = [
                    g(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), _(Je, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                v(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y[8] || (y[8] = (E) => M.$emit("view-debug"))
                }, {
                  default: a(() => [...y[21] || (y[21] = [
                    g(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: y[9] || (y[9] = (E) => M.$emit("sync-environment"))
                }, {
                  default: a(() => [...y[22] || (y[22] = [
                    g(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !C.value && !b.value ? (o(), _(Ne, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      v(Rt, {
        show: i.value,
        status: t.status,
        onClose: y[10] || (y[10] = (E) => i.value = !1),
        onNavigateWorkflows: u
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Bn = /* @__PURE__ */ J(On, [["__scopeId", "data-v-05737be6"]]), Pn = ["type", "value", "placeholder", "disabled"], Vn = /* @__PURE__ */ q({
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
    const i = t, f = s, w = S(null);
    function h(u) {
      const r = u.target.value;
      f("update:modelValue", r);
    }
    return we(() => {
      i.autoFocus && w.value && w.value.focus();
    }), d({
      focus: () => {
        var u;
        return (u = w.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = w.value) == null ? void 0 : u.blur();
      }
    }), (u, r) => (o(), n("input", {
      ref_key: "inputRef",
      ref: w,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ee(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        r[0] || (r[0] = Ae((m) => u.$emit("enter"), ["enter"])),
        r[1] || (r[1] = Ae((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (m) => u.$emit("focus")),
      onBlur: r[3] || (r[3] = (m) => u.$emit("blur"))
    }, null, 42, Pn));
  }
}), ft = /* @__PURE__ */ J(Vn, [["__scopeId", "data-v-0380d08f"]]), An = { class: "branch-create-form" }, Fn = { class: "form-actions" }, Wn = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, i = S(""), f = U(() => {
      const u = i.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function w() {
      f.value && (s("create", i.value.trim()), i.value = "");
    }
    function h() {
      i.value = "", s("cancel");
    }
    return (u, r) => (o(), n("div", An, [
      v(ft, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (m) => i.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: w,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Fn, [
        v(j, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: w
        }, {
          default: a(() => [...r[1] || (r[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        v(j, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: a(() => [...r[2] || (r[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Gn = /* @__PURE__ */ J(Wn, [["__scopeId", "data-v-7c500394"]]), jn = { class: "branch-list-item__indicator" }, Hn = { class: "branch-list-item__name" }, Kn = {
  key: 0,
  class: "branch-list-item__actions"
}, qn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Jn = /* @__PURE__ */ q({
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
      e("span", jn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Hn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", Kn, [
        ie(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", qn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xn = /* @__PURE__ */ J(Jn, [["__scopeId", "data-v-c6581a24"]]), Yn = {
  key: 2,
  class: "branch-list"
}, Qn = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, i = S(!1);
    function f(h) {
      s("create", h), w();
    }
    function w() {
      i.value = !1;
    }
    return (h, u) => (o(), _($e, null, {
      header: a(() => [
        v(Ce, { title: "BRANCHES" }, {
          actions: a(() => [
            v(j, {
              variant: "ghost",
              size: "sm",
              onClick: u[0] || (u[0] = (r) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...u[1] || (u[1] = [
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
        i.value ? (o(), _(Gn, {
          key: 0,
          onCreate: f,
          onCancel: w
        })) : c("", !0),
        t.branches.length === 0 ? (o(), _(Ne, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Yn, [
          (o(!0), n(W, null, Z(t.branches, (r) => (o(), _(Xn, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: a(() => [
              r.is_current ? c("", !0) : (o(), _(j, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (m) => h.$emit("switch", r.name)
              }, {
                default: a(() => [...u[2] || (u[2] = [
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
}), Zn = /* @__PURE__ */ J(Qn, [["__scopeId", "data-v-763d6ec4"]]), ea = { class: "commit-list" }, ta = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", ea, [
      ie(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), oa = /* @__PURE__ */ J(ta, [["__scopeId", "data-v-8c5ee761"]]), sa = { class: "commit-hash" }, na = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = U(() => d.hash.slice(0, d.length));
    return (i, f) => (o(), n("span", sa, l(s.value), 1));
  }
}), Ft = /* @__PURE__ */ J(na, [["__scopeId", "data-v-7c333cc6"]]), aa = { class: "commit-message" }, la = { class: "commit-date" }, ia = /* @__PURE__ */ q({
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
    function f() {
      s.clickable && i("click");
    }
    return (w, h) => (o(), n("div", {
      class: ee(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      v(Ft, { hash: t.hash }, null, 8, ["hash"]),
      e("span", aa, l(t.message), 1),
      e("span", la, l(t.relativeDate), 1),
      w.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = pe(() => {
        }, ["stop"]))
      }, [
        ie(w.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ra = /* @__PURE__ */ J(ia, [["__scopeId", "data-v-dd7c621b"]]), da = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), _($e, null, {
      header: a(() => [
        v(Ce, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), _(Ne, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), _(oa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(W, null, Z(t.commits, (i) => (o(), _(ra, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => d.$emit("select", i)
            }, {
              actions: a(() => [
                v(j, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => d.$emit("checkout", i),
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
}), ca = /* @__PURE__ */ J(da, [["__scopeId", "data-v-981c3c64"]]), Mh = [
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
], Lh = {
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
}, ua = [
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
], Th = [
  ...ua,
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
function ht() {
  return !1;
}
function xe() {
  const t = S(!1), d = S(null);
  async function s(Y, se) {
    var He;
    if (!((He = window.app) != null && He.api))
      throw new Error("ComfyUI API not available");
    const ue = await window.app.api.fetchApi(Y, se);
    if (!ue.ok) {
      const Qe = await ue.json().catch(() => ({}));
      throw new Error(Qe.error || Qe.message || `Request failed: ${ue.status}`);
    }
    return ue.json();
  }
  async function i() {
    return s("/v2/comfygit/status");
  }
  async function f(Y, se = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: se })
    });
  }
  async function w(Y = 10, se = 0) {
    return s(`/v2/comfygit/log?limit=${Y}&offset=${se}`);
  }
  async function h(Y) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function u() {
    return s("/v2/comfygit/branches");
  }
  async function r(Y) {
    return s(`/v2/comfygit/commit/${Y}`);
  }
  async function m(Y, se = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: se })
    });
  }
  async function b(Y, se = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: se })
    });
  }
  async function p(Y, se = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: se })
    });
  }
  async function $() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Y = await i();
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
  async function I(Y) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: Y })
    });
  }
  async function z() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function x(Y, se, ue) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, pytorch_backend: se, clone_from: ue })
    });
  }
  async function k(Y) {
    return s(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function C() {
    try {
      return s("/v2/comfygit/workflows");
    } catch {
      const Y = await i(), se = [];
      return Y.workflows.new.forEach((ue) => {
        se.push({ name: ue, status: "new", missing_nodes: 0, missing_models: 0, path: ue });
      }), Y.workflows.modified.forEach((ue) => {
        se.push({ name: ue, status: "modified", missing_nodes: 0, missing_models: 0, path: ue });
      }), Y.workflows.synced.forEach((ue) => {
        se.push({ name: ue, status: "synced", missing_nodes: 0, missing_models: 0, path: ue });
      }), se;
    }
  }
  async function A(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/details`);
  }
  async function M(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function y(Y, se, ue) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: se, install_models: ue })
    });
  }
  async function E(Y, se, ue) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: se, importance: ue })
    });
  }
  async function R() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function P() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function L(Y, se) {
    return s(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: se })
    });
  }
  async function N(Y) {
    return s(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function O(Y) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function K() {
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
  async function G(Y) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function D(Y, se) {
    try {
      const ue = new URLSearchParams();
      return Y && ue.append("level", Y), se && ue.append("lines", se.toString()), s(`/v2/comfygit/debug/logs?${ue}`);
    } catch {
      return [];
    }
  }
  async function X(Y, se) {
    try {
      const ue = new URLSearchParams();
      return Y && ue.append("level", Y), se && ue.append("lines", se.toString()), s(`/v2/workspace/debug/logs?${ue}`);
    } catch {
      return [];
    }
  }
  async function V() {
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
  async function oe(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function be(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function fe(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function ke() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Q(Y, se) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: se })
    });
  }
  async function Me(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function at(Y, se, ue) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: se, push_url: ue })
    });
  }
  async function me(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST"
    });
  }
  async function Ee(Y) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function lt(Y = "skip", se = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: se
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: i,
    commit: f,
    getHistory: w,
    exportEnv: h,
    // Git Operations
    getBranches: u,
    getCommitDetail: r,
    checkout: m,
    createBranch: b,
    switchBranch: p,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: I,
    getSwitchProgress: z,
    createEnvironment: x,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: C,
    getWorkflowDetails: A,
    resolveWorkflow: M,
    installWorkflowDeps: y,
    setModelImportance: E,
    // Model Management
    getEnvironmentModels: R,
    getWorkspaceModels: P,
    updateModelSource: L,
    deleteModel: N,
    downloadModel: O,
    // Settings
    getConfig: K,
    updateConfig: G,
    // Debug/Logs
    getEnvironmentLogs: D,
    getWorkspaceLogs: X,
    // Node Management
    getNodes: V,
    installNode: oe,
    updateNode: be,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: ke,
    addRemote: Q,
    removeRemote: Me,
    updateRemoteUrl: at,
    fetchRemote: me,
    getRemoteSyncStatus: Ee,
    // Environment Sync
    syncEnvironmentManually: lt
  };
}
const ma = { class: "base-modal-header" }, va = {
  key: 0,
  class: "base-modal-title"
}, fa = { class: "base-modal-body" }, ga = {
  key: 0,
  class: "base-modal-loading"
}, ha = {
  key: 1,
  class: "base-modal-error"
}, pa = {
  key: 0,
  class: "base-modal-footer"
}, ya = /* @__PURE__ */ q({
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
    function f() {
      s.closeOnOverlayClick && i("close");
    }
    function w(h) {
      h.key === "Escape" && i("close");
    }
    return we(() => {
      document.addEventListener("keydown", w), document.body.style.overflow = "hidden";
    }), so(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = "";
    }), (h, u) => (o(), _(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: ee(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: u[1] || (u[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", ma, [
            ie(h.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", va, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (r) => h.$emit("close"))
            }, [...u[2] || (u[2] = [
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
          e("div", fa, [
            t.loading ? (o(), n("div", ga, "Loading...")) : t.error ? (o(), n("div", ha, l(t.error), 1)) : ie(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), n("div", pa, [
            ie(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), yt = /* @__PURE__ */ J(ya, [["__scopeId", "data-v-2125a0e6"]]), wa = ["type", "disabled"], ba = {
  key: 0,
  class: "spinner"
}, ka = /* @__PURE__ */ q({
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
      t.loading ? (o(), n("span", ba)) : c("", !0),
      ie(d.$slots, "default", {}, void 0, !0)
    ], 10, wa));
  }
}), le = /* @__PURE__ */ J(ka, [["__scopeId", "data-v-f3452606"]]), _a = {
  key: 0,
  class: "base-title-count"
}, $a = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), _(St(`h${t.level}`), {
      class: ee(["base-title", t.variant])
    }, {
      default: a(() => [
        ie(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", _a, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ut = /* @__PURE__ */ J($a, [["__scopeId", "data-v-5a01561d"]]), Ca = ["value", "disabled"], xa = {
  key: 0,
  value: "",
  disabled: ""
}, Sa = ["value"], Ia = {
  key: 0,
  class: "base-select-error"
}, Ea = /* @__PURE__ */ q({
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
    return (i, f) => (o(), n("div", {
      class: ee(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ee(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (w) => i.$emit("update:modelValue", w.target.value))
      }, [
        t.placeholder ? (o(), n("option", xa, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(W, null, Z(t.options, (w) => (o(), n("option", {
          key: d(w),
          value: d(w)
        }, l(s(w)), 9, Sa))), 128))
      ], 42, Ca),
      t.error ? (o(), n("span", Ia, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), za = /* @__PURE__ */ J(Ea, [["__scopeId", "data-v-7436d745"]]), Ma = { class: "popover-header" }, La = { class: "popover-title" }, Ta = { class: "popover-content" }, Ra = {
  key: 0,
  class: "popover-actions"
}, Na = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Ye({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Ma, [
            e("h4", La, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Ta, [
            ie(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Ra, [
            ie(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ J(Na, [["__scopeId", "data-v-42815ace"]]), Da = { class: "detail-section" }, Ua = {
  key: 0,
  class: "empty-message"
}, Oa = { class: "model-header" }, Ba = { class: "model-name" }, Pa = { class: "model-details" }, Va = { class: "model-row" }, Aa = { class: "model-row" }, Fa = { class: "label" }, Wa = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ga = { class: "node-list" }, ja = ["onClick"], Ha = {
  key: 1,
  class: "model-row"
}, Ka = { class: "value" }, qa = {
  key: 0,
  class: "model-actions"
}, Ja = { class: "detail-section" }, Xa = {
  key: 0,
  class: "empty-message"
}, Ya = { class: "node-name" }, Qa = {
  key: 0,
  class: "node-version"
}, Za = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: d }) {
    const s = t, i = d, { getWorkflowDetails: f, setModelImportance: w, installWorkflowDeps: h } = xe(), u = S(null), r = S(!1), m = S(null), b = S(!1), p = S({}), $ = S({}), I = S(!1), z = S(/* @__PURE__ */ new Set()), x = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(N) {
      switch (N) {
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
    function C(N) {
      switch (N) {
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
    function A(N) {
      if (!N.loaded_by || N.loaded_by.length === 0) return [];
      const O = N.hash || N.filename;
      return z.value.has(O) ? N.loaded_by : N.loaded_by.slice(0, 3);
    }
    function M(N) {
      return z.value.has(N);
    }
    function y(N) {
      z.value.has(N) ? z.value.delete(N) : z.value.add(N), z.value = new Set(z.value);
    }
    async function E() {
      r.value = !0, m.value = null;
      try {
        u.value = await f(s.workflowName);
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function R(N, O) {
      p.value[N] = O, b.value = !0;
    }
    async function P() {
      if (!b.value) {
        i("close");
        return;
      }
      r.value = !0, m.value = null;
      try {
        for (const [N, O] of Object.entries(p.value))
          await w(s.workflowName, N, O);
        i("close");
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    async function L(N) {
      $.value[N] = !0, m.value = null;
      try {
        await h(s.workflowName, !0, !1), await E();
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to install node";
      } finally {
        $.value[N] = !1;
      }
    }
    return we(E), (N, O) => (o(), n(W, null, [
      v(yt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: m.value || void 0,
        onClose: O[5] || (O[5] = (K) => i("close"))
      }, {
        body: a(() => [
          u.value ? (o(), n(W, { key: 0 }, [
            e("section", Da, [
              v(ut, { variant: "section" }, {
                default: a(() => [
                  g("MODELS USED (" + l(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (o(), n("div", Ua, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(W, null, Z(u.value.models, (K) => (o(), n("div", {
                key: K.hash,
                class: "model-card"
              }, [
                e("div", Oa, [
                  O[7] || (O[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ba, l(K.filename), 1)
                ]),
                e("div", Pa, [
                  e("div", Va, [
                    O[8] || (O[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ee(["value", k(K.status)])
                    }, l(C(K.status)), 3)
                  ]),
                  e("div", Aa, [
                    e("span", Fa, [
                      O[9] || (O[9] = g(" Importance: ", -1)),
                      v(At, {
                        size: 14,
                        title: "About importance levels",
                        onClick: O[0] || (O[0] = (G) => I.value = !0)
                      })
                    ]),
                    v(za, {
                      "model-value": p.value[K.hash] || K.importance,
                      options: x,
                      "onUpdate:modelValue": (G) => R(K.hash, G)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  K.loaded_by && K.loaded_by.length > 0 ? (o(), n("div", Wa, [
                    O[10] || (O[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ga, [
                      (o(!0), n(W, null, Z(A(K), (G, D) => (o(), n("div", {
                        key: `${G.node_id}-${D}`,
                        class: "node-reference"
                      }, l(G.node_type) + " (Node #" + l(G.node_id) + ") ", 1))), 128)),
                      K.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (G) => y(K.hash || K.filename)
                      }, l(M(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, ja)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  K.size_mb ? (o(), n("div", Ha, [
                    O[11] || (O[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Ka, l(K.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                K.status !== "available" ? (o(), n("div", qa, [
                  K.status === "downloadable" ? (o(), _(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: O[1] || (O[1] = (G) => i("resolve"))
                  }, {
                    default: a(() => [...O[12] || (O[12] = [
                      g(" Download ", -1)
                    ])]),
                    _: 1
                  })) : K.status === "path_mismatch" ? (o(), _(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: O[2] || (O[2] = (G) => i("resolve"))
                  }, {
                    default: a(() => [...O[13] || (O[13] = [
                      g(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), _(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: O[3] || (O[3] = (G) => i("resolve"))
                  }, {
                    default: a(() => [...O[14] || (O[14] = [
                      g(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Ja, [
              v(ut, { variant: "section" }, {
                default: a(() => [
                  g("NODES USED (" + l(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (o(), n("div", Xa, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(W, null, Z(u.value.nodes, (K) => (o(), n("div", {
                key: K.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ee(["node-status", K.status === "installed" ? "installed" : "missing"])
                }, l(K.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ya, l(K.name), 1),
                K.version ? (o(), n("span", Qa, "v" + l(K.version), 1)) : c("", !0),
                K.status === "missing" ? (o(), _(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: $.value[K.name],
                  onClick: (G) => L(K.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...O[15] || (O[15] = [
                    g(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          v(le, {
            variant: "secondary",
            onClick: O[4] || (O[4] = (K) => i("close"))
          }, {
            default: a(() => [...O[16] || (O[16] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), _(le, {
            key: 0,
            variant: "primary",
            onClick: P
          }, {
            default: a(() => [...O[17] || (O[17] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      v(Fe, {
        show: I.value,
        title: "Model Importance Levels",
        onClose: O[6] || (O[6] = (K) => I.value = !1)
      }, {
        content: a(() => [...O[18] || (O[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              g(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              g(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              g(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), el = /* @__PURE__ */ J(Za, [["__scopeId", "data-v-1325d542"]]), ce = Pt({
  items: [],
  status: "idle"
});
let Oe = null;
function Wt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function kt(t) {
  return ce.items.find((d) => d.id === t);
}
async function et() {
  if (ce.status === "downloading") return;
  const t = ce.items.find((d) => d.status === "queued");
  if (!t) {
    ce.status = "idle";
    return;
  }
  ce.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await tl(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ce.status = "idle", et();
  }
}
async function tl(t) {
  return new Promise((d, s) => {
    Oe && (Oe.close(), Oe = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Oe = f;
    let w = Date.now(), h = 0;
    f.onmessage = (u) => {
      try {
        const r = JSON.parse(u.data);
        switch (r.type) {
          case "progress":
            t.downloaded = r.downloaded || 0, t.size = r.total || t.size;
            const m = Date.now(), b = (m - w) / 1e3;
            if (b > 0.5) {
              const p = t.downloaded - h;
              if (t.speed = p / b, w = m, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            f.close(), Oe = null, d();
            break;
          case "error":
            f.close(), Oe = null, s(new Error(r.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Oe = null, s(new Error("Connection lost"));
    };
  });
}
async function ol() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const s of d.pending_downloads) {
      if (ce.items.some((f) => f.url === s.url && f.filename === s.filename))
        continue;
      const i = {
        id: Wt(),
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
      ce.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function wt() {
  function t(k) {
    for (const C of k) {
      const A = {
        id: Wt(),
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
      ce.items.push(A);
    }
    ce.status === "idle" && et();
  }
  async function d(k) {
    const C = kt(k);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Oe && (Oe.close(), Oe = null), C.status = "failed", C.error = "Cancelled by user", ce.status = "idle", et();
      } else if (C.status === "queued") {
        const A = ce.items.findIndex((M) => M.id === k);
        A >= 0 && ce.items.splice(A, 1);
      }
    }
  }
  function s(k) {
    const C = kt(k);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, ce.status === "idle" && et());
  }
  function i(k) {
    const C = kt(k);
    !C || C.status !== "paused" || (C.status = "queued", ce.status === "idle" && et());
  }
  function f() {
    const k = ce.items.filter((C) => C.status === "paused");
    for (const C of k)
      C.status = "queued";
    ce.status === "idle" && et();
  }
  function w(k) {
    const C = ce.items.findIndex((A) => A.id === k);
    C >= 0 && (ce.items[C].status === "completed" || ce.items[C].status === "failed") && ce.items.splice(C, 1);
  }
  function h() {
    ce.items = ce.items.filter((k) => k.status !== "completed");
  }
  function u() {
    ce.items = ce.items.filter((k) => k.status !== "failed");
  }
  const r = U(
    () => ce.items.find((k) => k.status === "downloading")
  ), m = U(
    () => ce.items.filter((k) => k.status === "queued")
  ), b = U(
    () => ce.items.filter((k) => k.status === "completed")
  ), p = U(
    () => ce.items.filter((k) => k.status === "failed")
  ), $ = U(
    () => ce.items.filter((k) => k.status === "paused")
  ), I = U(() => ce.items.length > 0), z = U(
    () => ce.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), x = U(
    () => ce.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: no(ce),
    // Computed
    currentDownload: r,
    queuedItems: m,
    completedItems: b,
    failedItems: p,
    pausedItems: $,
    hasItems: I,
    activeCount: z,
    hasPaused: x,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: w,
    clearCompleted: h,
    clearFailed: u,
    loadPendingDownloads: ol
  };
}
function sl() {
  const t = S(null), d = S(null), s = S([]), i = S([]), f = S(!1), w = S(null);
  async function h(k, C) {
    var M;
    if (!((M = window.app) != null && M.api))
      throw new Error("ComfyUI API not available");
    const A = await window.app.api.fetchApi(k, C);
    if (!A.ok) {
      const y = await A.json().catch(() => ({})), E = y.error || y.message || `Request failed: ${A.status}`;
      throw new Error(E);
    }
    return A.json();
  }
  async function u(k) {
    f.value = !0, w.value = null;
    try {
      let C;
      return ht() || (C = await h(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = C, C;
    } catch (C) {
      const A = C instanceof Error ? C.message : "Unknown error occurred";
      throw w.value = A, C;
    } finally {
      f.value = !1;
    }
  }
  async function r(k, C, A) {
    f.value = !0, w.value = null;
    try {
      let M;
      if (!ht()) {
        const y = Object.fromEntries(C), E = Object.fromEntries(A);
        M = await h(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: y,
              model_choices: E
            })
          }
        );
      }
      return d.value = M, M;
    } catch (M) {
      const y = M instanceof Error ? M.message : "Unknown error occurred";
      throw w.value = y, M;
    } finally {
      f.value = !1;
    }
  }
  async function m(k, C = 10) {
    f.value = !0, w.value = null;
    try {
      let A;
      return ht() || (A = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: C })
        }
      )), s.value = A.results, A.results;
    } catch (A) {
      const M = A instanceof Error ? A.message : "Unknown error occurred";
      throw w.value = M, A;
    } finally {
      f.value = !1;
    }
  }
  async function b(k, C = 10) {
    f.value = !0, w.value = null;
    try {
      let A;
      return ht() || (A = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: C })
        }
      )), i.value = A.results, A.results;
    } catch (A) {
      const M = A instanceof Error ? A.message : "Unknown error occurred";
      throw w.value = M, A;
    } finally {
      f.value = !1;
    }
  }
  const p = Pt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function $() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.error = void 0;
  }
  async function I(k, C, A) {
    $(), p.phase = "resolving", w.value = null;
    const M = Object.fromEntries(C), y = Object.fromEntries(A);
    try {
      const E = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: M,
          model_choices: y
        })
      });
      if (!E.ok)
        throw new Error(`Request failed: ${E.status}`);
      if (!E.body)
        throw new Error("No response body");
      const R = E.body.getReader(), P = new TextDecoder();
      let L = "";
      for (; ; ) {
        const { done: N, value: O } = await R.read();
        if (N) break;
        L += P.decode(O, { stream: !0 });
        const K = L.split(`

`);
        L = K.pop() || "";
        for (const G of K) {
          if (!G.trim()) continue;
          const D = G.split(`
`);
          let X = "", V = "";
          for (const oe of D)
            oe.startsWith("event: ") ? X = oe.slice(7) : oe.startsWith("data: ") && (V = oe.slice(6));
          if (V)
            try {
              const oe = JSON.parse(V);
              z(X, oe);
            } catch (oe) {
              console.warn("Failed to parse SSE event:", oe);
            }
        }
      }
    } catch (E) {
      const R = E instanceof Error ? E.message : "Unknown error occurred";
      throw w.value = R, p.error = R, p.phase = "error", E;
    }
  }
  function z(k, C) {
    switch (k) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = C.total;
        break;
      case "file_start":
        p.currentFile = C.filename, p.currentFileIndex = C.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = C.downloaded, p.bytesTotal = C.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: C.filename,
          success: C.success,
          error: C.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = C.nodes_to_install || [], C.download_results && (p.completedFiles = C.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = C.message, p.phase = "error", w.value = C.message;
        break;
    }
  }
  function x(k, C) {
    const { addToQueue: A } = wt(), M = C.filter((y) => y.url && y.target_path).map((y) => ({
      workflow: k,
      filename: y.filename,
      url: y.url,
      targetPath: y.target_path,
      size: y.size || 0,
      type: "model"
    }));
    return M.length > 0 && A(M), M.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
    modelSearchResults: i,
    isLoading: f,
    error: w,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: r,
    applyResolutionWithProgress: I,
    searchNodes: m,
    searchModels: b,
    resetProgress: $,
    queueModelDownloads: x
  };
}
const nl = { class: "resolution-stepper" }, al = { class: "stepper-header" }, ll = ["onClick"], il = {
  key: 0,
  class: "step-icon"
}, rl = {
  key: 1,
  class: "step-number"
}, dl = { class: "step-label" }, cl = {
  key: 0,
  class: "step-connector"
}, ul = { class: "stepper-content" }, ml = /* @__PURE__ */ q({
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
    function f(m) {
      var b;
      if ((b = s.stepStats) != null && b[m]) {
        const p = s.stepStats[m];
        return p.total > 0 && p.resolved === p.total;
      }
      return s.completedSteps.includes(m);
    }
    function w(m) {
      var b;
      if ((b = s.stepStats) != null && b[m]) {
        const p = s.stepStats[m];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function h(m) {
      return f(m) ? "state-complete" : w(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function r(m) {
      i("step-change", m);
    }
    return (m, b) => (o(), n("div", nl, [
      e("div", al, [
        (o(!0), n(W, null, Z(t.steps, (p, $) => (o(), n("div", {
          key: p.id,
          class: ee(["step", {
            active: t.currentStep === p.id,
            completed: f(p.id),
            "in-progress": w(p.id),
            disabled: u(p.id)
          }]),
          onClick: (I) => r(p.id)
        }, [
          e("div", {
            class: ee(["step-indicator", h(p.id)])
          }, [
            f(p.id) ? (o(), n("span", il, "✓")) : (o(), n("span", rl, l($ + 1), 1))
          ], 2),
          e("div", dl, l(p.label), 1),
          $ < t.steps.length - 1 ? (o(), n("div", cl)) : c("", !0)
        ], 10, ll))), 128))
      ]),
      e("div", ul, [
        ie(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), vl = /* @__PURE__ */ J(ml, [["__scopeId", "data-v-2a7b3af8"]]), fl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = U(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), i = U(() => `confidence-${s.value}`), f = U(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (w, h) => (o(), n("span", {
      class: ee(["confidence-badge", i.value, t.size])
    }, l(f.value), 3));
  }
}), zt = /* @__PURE__ */ J(fl, [["__scopeId", "data-v-17ec4b80"]]), gl = { class: "node-info" }, hl = { class: "node-info-text" }, pl = { class: "item-body" }, yl = {
  key: 0,
  class: "resolved-state"
}, wl = {
  key: 1,
  class: "multiple-options"
}, bl = { class: "options-list" }, kl = ["onClick"], _l = ["name", "value", "checked", "onChange"], $l = { class: "option-content" }, Cl = { class: "option-header" }, xl = { class: "option-package-id" }, Sl = {
  key: 0,
  class: "option-title"
}, Il = { class: "option-meta" }, El = {
  key: 0,
  class: "installed-badge"
}, zl = { class: "action-buttons" }, Ml = {
  key: 2,
  class: "unresolved"
}, Ll = { class: "action-buttons" }, Tl = /* @__PURE__ */ q({
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
    const s = t, i = d, f = U(() => !!s.choice);
    U(() => {
      var u;
      return (u = s.choice) == null ? void 0 : u.action;
    }), U(() => {
      var u;
      return (u = s.choice) == null ? void 0 : u.package_id;
    });
    const w = U(() => {
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
    function h(u) {
      i("option-selected", u);
    }
    return (u, r) => (o(), n("div", {
      class: ee(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", gl, [
        e("span", hl, [
          r[7] || (r[7] = g("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: ee(["status-badge", w.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", pl, [
        f.value ? (o(), n("div", yl, [
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (m) => i("clear-choice"))
          }, {
            default: a(() => [...r[8] || (r[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", wl, [
          r[12] || (r[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", bl, [
            (o(!0), n(W, null, Z(t.options, (m, b) => (o(), n("label", {
              key: m.package_id,
              class: ee(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (p) => h(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (p) => h(b)
              }, null, 40, _l),
              e("div", $l, [
                e("div", Cl, [
                  e("span", xl, l(m.package_id), 1),
                  v(zt, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (o(), n("div", Sl, l(m.title), 1)) : c("", !0),
                e("div", Il, [
                  m.is_installed ? (o(), n("span", El, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, kl))), 128))
          ]),
          e("div", zl, [
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: r[1] || (r[1] = (m) => i("search"))
            }, {
              default: a(() => [...r[9] || (r[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: r[2] || (r[2] = (m) => i("manual-entry"))
            }, {
              default: a(() => [...r[10] || (r[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: r[3] || (r[3] = (m) => i("mark-optional"))
            }, {
              default: a(() => [...r[11] || (r[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ml, [
          r[16] || (r[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Ll, [
            v(le, {
              variant: "primary",
              size: "sm",
              onClick: r[4] || (r[4] = (m) => i("search"))
            }, {
              default: a(() => [...r[13] || (r[13] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: r[5] || (r[5] = (m) => i("manual-entry"))
            }, {
              default: a(() => [...r[14] || (r[14] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: r[6] || (r[6] = (m) => i("mark-optional"))
            }, {
              default: a(() => [...r[15] || (r[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Rl = /* @__PURE__ */ J(Tl, [["__scopeId", "data-v-e02629e7"]]), Nl = { class: "item-navigator" }, Dl = { class: "nav-item-info" }, Ul = ["title"], Ol = { class: "nav-controls" }, Bl = { class: "nav-arrows" }, Pl = ["disabled"], Vl = ["disabled"], Al = { class: "nav-position" }, Fl = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (i, f) => (o(), n("div", Nl, [
      e("div", Dl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Ul)
      ]),
      e("div", Ol, [
        e("div", Bl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (w) => s("prev")),
            title: "Previous item"
          }, " ← ", 8, Pl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (w) => s("next")),
            title: "Next item"
          }, " → ", 8, Vl)
        ]),
        e("span", Al, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), Gt = /* @__PURE__ */ J(Fl, [["__scopeId", "data-v-74af7920"]]), Wl = ["type", "value", "placeholder", "disabled"], Gl = {
  key: 0,
  class: "base-input-error"
}, jl = /* @__PURE__ */ q({
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
          s[1] || (s[1] = Ae((i) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ae((i) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Wl),
      t.error ? (o(), n("span", Gl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), je = /* @__PURE__ */ J(jl, [["__scopeId", "data-v-9ba02cdc"]]), Hl = { class: "node-resolution-step" }, Kl = { class: "step-header" }, ql = { class: "stat-badge" }, Jl = {
  key: 1,
  class: "step-body"
}, Xl = {
  key: 2,
  class: "empty-state"
}, Yl = { class: "node-search-modal" }, Ql = { class: "node-modal-body" }, Zl = {
  key: 0,
  class: "node-search-results"
}, ei = ["onClick"], ti = { class: "node-result-header" }, oi = { class: "node-result-package-id" }, si = {
  key: 0,
  class: "node-result-description"
}, ni = {
  key: 1,
  class: "node-no-results"
}, ai = {
  key: 2,
  class: "node-searching"
}, li = { class: "node-manual-entry-modal" }, ii = { class: "node-modal-body" }, ri = { class: "node-modal-actions" }, di = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = S(0), w = S(!1), h = S(!1), u = S(""), r = S(""), m = S([]), b = S(!1), p = U(() => s.nodes[f.value]), $ = U(() => s.nodes.filter((K) => s.nodeChoices.has(K.node_type)).length), I = U(() => {
      var G;
      if (!p.value) return "not-found";
      const K = s.nodeChoices.get(p.value.node_type);
      if (K)
        switch (K.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (G = p.value.options) != null && G.length ? "ambiguous" : "not-found";
    }), z = U(() => {
      var G;
      if (!p.value) return;
      const K = s.nodeChoices.get(p.value.node_type);
      if (K)
        switch (K.action) {
          case "install":
            return K.package_id ? `→ ${K.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (G = p.value.options) != null && G.length ? `${p.value.options.length} matches` : "Not Found";
    });
    function x(K) {
      K >= 0 && K < s.nodes.length && (f.value = K);
    }
    function k() {
      p.value && i("mark-optional", p.value.node_type);
    }
    function C() {
      p.value && i("skip", p.value.node_type);
    }
    function A(K) {
      p.value && i("option-selected", p.value.node_type, K);
    }
    function M() {
      p.value && i("clear-choice", p.value.node_type);
    }
    function y() {
      p.value && (u.value = p.value.node_type, w.value = !0);
    }
    function E() {
      r.value = "", h.value = !0;
    }
    function R() {
      w.value = !1, u.value = "", m.value = [];
    }
    function P() {
      h.value = !1, r.value = "";
    }
    function L() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function N(K) {
      p.value && (i("manual-entry", p.value.node_type, K.package_id), R());
    }
    function O() {
      !p.value || !r.value.trim() || (i("manual-entry", p.value.node_type, r.value.trim()), P());
    }
    return (K, G) => {
      var D, X;
      return o(), n("div", Hl, [
        e("div", Kl, [
          G[4] || (G[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", ql, l($.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        p.value ? (o(), _(Gt, {
          key: 0,
          "item-name": p.value.node_type,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: G[0] || (G[0] = (V) => x(f.value - 1)),
          onNext: G[1] || (G[1] = (V) => x(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        p.value ? (o(), n("div", Jl, [
          v(Rl, {
            "node-type": p.value.node_type,
            "has-multiple-options": !!((D = p.value.options) != null && D.length),
            options: p.value.options,
            choice: (X = t.nodeChoices) == null ? void 0 : X.get(p.value.node_type),
            status: I.value,
            "status-label": z.value,
            onMarkOptional: k,
            onSkip: C,
            onManualEntry: E,
            onSearch: y,
            onOptionSelected: A,
            onClearChoice: M
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Xl, [...G[5] || (G[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), _(ze, { to: "body" }, [
          w.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(R, ["self"])
          }, [
            e("div", Yl, [
              e("div", { class: "node-modal-header" }, [
                G[6] || (G[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", Ql, [
                v(je, {
                  modelValue: u.value,
                  "onUpdate:modelValue": G[2] || (G[2] = (V) => u.value = V),
                  placeholder: "Search by node type, package name...",
                  onInput: L
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), n("div", Zl, [
                  (o(!0), n(W, null, Z(m.value, (V) => (o(), n("div", {
                    key: V.package_id,
                    class: "node-search-result-item",
                    onClick: (oe) => N(V)
                  }, [
                    e("div", ti, [
                      e("code", oi, l(V.package_id), 1),
                      V.match_confidence ? (o(), _(zt, {
                        key: 0,
                        confidence: V.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    V.description ? (o(), n("div", si, l(V.description), 1)) : c("", !0)
                  ], 8, ei))), 128))
                ])) : u.value && !b.value ? (o(), n("div", ni, ' No packages found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), n("div", ai, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), _(ze, { to: "body" }, [
          h.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(P, ["self"])
          }, [
            e("div", li, [
              e("div", { class: "node-modal-header" }, [
                G[7] || (G[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", ii, [
                v(je, {
                  modelValue: r.value,
                  "onUpdate:modelValue": G[3] || (G[3] = (V) => r.value = V),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", ri, [
                  v(le, {
                    variant: "secondary",
                    onClick: P
                  }, {
                    default: a(() => [...G[8] || (G[8] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(le, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: O
                  }, {
                    default: a(() => [...G[9] || (G[9] = [
                      g(" Add Package ", -1)
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
}), ci = /* @__PURE__ */ J(di, [["__scopeId", "data-v-4fb196b1"]]), ui = { class: "node-info" }, mi = { class: "node-info-text" }, vi = { class: "item-body" }, fi = {
  key: 0,
  class: "resolved-state"
}, gi = {
  key: 1,
  class: "multiple-options"
}, hi = { class: "options-list" }, pi = ["onClick"], yi = ["name", "value", "checked", "onChange"], wi = { class: "option-content" }, bi = { class: "option-header" }, ki = { class: "option-filename" }, _i = { class: "option-meta" }, $i = { class: "option-size" }, Ci = { class: "option-category" }, xi = { class: "option-path" }, Si = { class: "action-buttons" }, Ii = {
  key: 2,
  class: "unresolved"
}, Ei = { class: "action-buttons" }, zi = /* @__PURE__ */ q({
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
    const s = t, i = d, f = U(() => !!s.choice);
    U(() => {
      var r;
      return (r = s.choice) == null ? void 0 : r.action;
    }), U(() => {
      var r, m;
      return ((m = (r = s.choice) == null ? void 0 : r.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const w = U(() => {
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
    function h(r) {
      i("option-selected", r);
    }
    function u(r) {
      if (!r) return "Unknown";
      const m = r / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, m) => (o(), n("div", {
      class: ee(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", ui, [
        e("span", mi, [
          m[7] || (m[7] = g("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: ee(["status-badge", w.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", vi, [
        f.value ? (o(), n("div", fi, [
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (b) => i("clear-choice"))
          }, {
            default: a(() => [...m[8] || (m[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", gi, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", hi, [
            (o(!0), n(W, null, Z(t.options, (b, p) => (o(), n("label", {
              key: b.model.hash,
              class: ee(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: ($) => h(p)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: ($) => h(p)
              }, null, 40, yi),
              e("div", wi, [
                e("div", bi, [
                  e("span", ki, l(b.model.filename), 1),
                  v(zt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", _i, [
                  e("span", $i, l(u(b.model.size)), 1),
                  e("span", Ci, l(b.model.category), 1)
                ]),
                e("div", xi, l(b.model.relative_path), 1)
              ])
            ], 10, pi))), 128))
          ]),
          e("div", Si, [
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (b) => i("search"))
            }, {
              default: a(() => [...m[9] || (m[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (b) => i("download-url"))
            }, {
              default: a(() => [...m[10] || (m[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...m[11] || (m[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ii, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ei, [
            v(le, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (b) => i("search"))
            }, {
              default: a(() => [...m[13] || (m[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (b) => i("download-url"))
            }, {
              default: a(() => [...m[14] || (m[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...m[15] || (m[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Mi = /* @__PURE__ */ J(zi, [["__scopeId", "data-v-8a82fefa"]]), Li = { class: "model-resolution-step" }, Ti = { class: "step-header" }, Ri = { class: "step-info" }, Ni = { class: "step-title" }, Di = { class: "step-description" }, Ui = { class: "stat-badge" }, Oi = {
  key: 1,
  class: "step-body"
}, Bi = {
  key: 2,
  class: "empty-state"
}, Pi = { class: "model-search-modal" }, Vi = { class: "model-modal-body" }, Ai = {
  key: 0,
  class: "model-search-results"
}, Fi = ["onClick"], Wi = { class: "model-result-header" }, Gi = { class: "model-result-filename" }, ji = { class: "model-result-meta" }, Hi = { class: "model-result-category" }, Ki = { class: "model-result-size" }, qi = {
  key: 0,
  class: "model-result-path"
}, Ji = {
  key: 1,
  class: "model-no-results"
}, Xi = {
  key: 2,
  class: "model-searching"
}, Yi = { class: "model-download-url-modal" }, Qi = { class: "model-modal-body" }, Zi = { class: "model-modal-actions" }, er = /* @__PURE__ */ q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = S(0), w = S(!1), h = S(!1), u = S(""), r = S(""), m = S(""), b = S([]), p = S(!1), $ = U(() => s.models[f.value]), I = U(() => s.models.some((V) => V.is_download_intent)), z = U(() => s.models.filter(
      (V) => s.modelChoices.has(V.filename) || V.is_download_intent
    ).length), x = U(() => $.value ? `checkpoints/${$.value.filename}` : "checkpoints/"), k = U(() => {
      var oe;
      if (!$.value) return "not-found";
      const V = s.modelChoices.get($.value.filename);
      if (V)
        switch (V.action) {
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
      return $.value.is_download_intent ? "download" : (oe = $.value.options) != null && oe.length ? "ambiguous" : "not-found";
    }), C = U(() => {
      var oe, be;
      if (!$.value) return;
      const V = s.modelChoices.get($.value.filename);
      if (V)
        switch (V.action) {
          case "select":
            return (oe = V.selected_model) != null && oe.filename ? `→ ${V.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return $.value.is_download_intent ? "Pending Download" : (be = $.value.options) != null && be.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function A(V) {
      V >= 0 && V < s.models.length && (f.value = V);
    }
    function M() {
      $.value && i("mark-optional", $.value.filename);
    }
    function y() {
      $.value && i("skip", $.value.filename);
    }
    function E(V) {
      $.value && i("option-selected", $.value.filename, V);
    }
    function R() {
      $.value && i("clear-choice", $.value.filename);
    }
    function P() {
      $.value && (u.value = $.value.filename, w.value = !0);
    }
    function L() {
      r.value = "", m.value = x.value, h.value = !0;
    }
    function N() {
      w.value = !1, u.value = "", b.value = [];
    }
    function O() {
      h.value = !1, r.value = "", m.value = "";
    }
    function K() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function G(V) {
      $.value && N();
    }
    function D() {
      !$.value || !r.value.trim() || (i("download-url", $.value.filename, r.value.trim(), m.value.trim() || void 0), O());
    }
    function X(V) {
      if (!V) return "Unknown";
      const oe = V / (1024 * 1024 * 1024);
      return oe >= 1 ? `${oe.toFixed(2)} GB` : `${(V / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (V, oe) => {
      var be, fe, ke;
      return o(), n("div", Li, [
        e("div", Ti, [
          e("div", Ri, [
            e("h3", Ni, l(I.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Di, l(I.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Ui, l(z.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        $.value ? (o(), _(Gt, {
          key: 0,
          "item-name": $.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: oe[0] || (oe[0] = (Q) => A(f.value - 1)),
          onNext: oe[1] || (oe[1] = (Q) => A(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        $.value ? (o(), n("div", Oi, [
          v(Mi, {
            filename: $.value.filename,
            "node-type": ((be = $.value.reference) == null ? void 0 : be.node_type) || "Unknown",
            "has-multiple-options": !!((fe = $.value.options) != null && fe.length),
            options: $.value.options,
            choice: (ke = t.modelChoices) == null ? void 0 : ke.get($.value.filename),
            status: k.value,
            "status-label": C.value,
            onMarkOptional: M,
            onSkip: y,
            onDownloadUrl: L,
            onSearch: P,
            onOptionSelected: E,
            onClearChoice: R
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Bi, [...oe[5] || (oe[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), _(ze, { to: "body" }, [
          w.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(N, ["self"])
          }, [
            e("div", Pi, [
              e("div", { class: "model-modal-header" }, [
                oe[6] || (oe[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Vi, [
                v(je, {
                  modelValue: u.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (Q) => u.value = Q),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (o(), n("div", Ai, [
                  (o(!0), n(W, null, Z(b.value, (Q) => (o(), n("div", {
                    key: Q.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => G()
                  }, [
                    e("div", Wi, [
                      e("code", Gi, l(Q.filename), 1)
                    ]),
                    e("div", ji, [
                      e("span", Hi, l(Q.category), 1),
                      e("span", Ki, l(X(Q.size)), 1)
                    ]),
                    Q.relative_path ? (o(), n("div", qi, l(Q.relative_path), 1)) : c("", !0)
                  ], 8, Fi))), 128))
                ])) : u.value && !p.value ? (o(), n("div", Ji, ' No models found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                p.value ? (o(), n("div", Xi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), _(ze, { to: "body" }, [
          h.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(O, ["self"])
          }, [
            e("div", Yi, [
              e("div", { class: "model-modal-header" }, [
                oe[7] || (oe[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", Qi, [
                v(je, {
                  modelValue: r.value,
                  "onUpdate:modelValue": oe[3] || (oe[3] = (Q) => r.value = Q),
                  label: "Download URL",
                  placeholder: "https://civitai.com/api/download/..."
                }, null, 8, ["modelValue"]),
                v(je, {
                  modelValue: m.value,
                  "onUpdate:modelValue": oe[4] || (oe[4] = (Q) => m.value = Q),
                  label: "Target Path (relative to models folder)",
                  placeholder: x.value
                }, null, 8, ["modelValue", "placeholder"]),
                e("div", Zi, [
                  v(le, {
                    variant: "secondary",
                    onClick: O
                  }, {
                    default: a(() => [...oe[8] || (oe[8] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(le, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: D
                  }, {
                    default: a(() => [...oe[9] || (oe[9] = [
                      g(" Queue Download ", -1)
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
}), tr = /* @__PURE__ */ J(er, [["__scopeId", "data-v-9d55280c"]]), or = { class: "applying-step" }, sr = {
  key: 0,
  class: "phase-content"
}, nr = {
  key: 1,
  class: "phase-content"
}, ar = { class: "completion-summary" }, lr = {
  key: 0,
  class: "summary-item info"
}, ir = { class: "summary-text" }, rr = {
  key: 2,
  class: "phase-content error"
}, dr = { class: "error-message" }, cr = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", or, [
      t.progress.phase === "resolving" ? (o(), n("div", sr, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", nr, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", ar, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", lr, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", ir, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : c("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", rr, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", dr, l(t.progress.error), 1)
      ])) : c("", !0)
    ]));
  }
}), ur = /* @__PURE__ */ J(cr, [["__scopeId", "data-v-b4d7e0eb"]]), mr = {
  key: 0,
  class: "loading-state"
}, vr = {
  key: 1,
  class: "wizard-content"
}, fr = {
  key: 0,
  class: "step-content"
}, gr = { class: "analysis-summary" }, hr = { class: "analysis-header" }, pr = { class: "summary-description" }, yr = { class: "stats-grid" }, wr = { class: "stat-card" }, br = { class: "stat-items" }, kr = { class: "stat-item success" }, _r = { class: "stat-count" }, $r = {
  key: 0,
  class: "stat-item warning"
}, Cr = { class: "stat-count" }, xr = {
  key: 1,
  class: "stat-item error"
}, Sr = { class: "stat-count" }, Ir = { class: "stat-card" }, Er = { class: "stat-items" }, zr = { class: "stat-item success" }, Mr = { class: "stat-count" }, Lr = {
  key: 0,
  class: "stat-item info"
}, Tr = { class: "stat-count" }, Rr = {
  key: 1,
  class: "stat-item warning"
}, Nr = { class: "stat-count" }, Dr = {
  key: 2,
  class: "stat-item error"
}, Ur = { class: "stat-count" }, Or = {
  key: 0,
  class: "status-message warning"
}, Br = { class: "status-text" }, Pr = {
  key: 1,
  class: "status-message info"
}, Vr = { class: "status-text" }, Ar = {
  key: 2,
  class: "status-message success"
}, Fr = {
  key: 3,
  class: "step-content"
}, Wr = { class: "review-summary" }, Gr = { class: "review-stats" }, jr = { class: "review-stat" }, Hr = { class: "stat-value" }, Kr = { class: "review-stat" }, qr = { class: "stat-value" }, Jr = { class: "review-stat" }, Xr = { class: "stat-value" }, Yr = { class: "review-stat" }, Qr = { class: "stat-value" }, Zr = {
  key: 0,
  class: "review-section"
}, ed = { class: "section-title" }, td = { class: "review-items" }, od = { class: "item-name" }, sd = { class: "item-choice" }, nd = {
  key: 0,
  class: "choice-badge install"
}, ad = {
  key: 1,
  class: "choice-badge optional"
}, ld = {
  key: 2,
  class: "choice-badge skip"
}, id = {
  key: 1,
  class: "choice-badge pending"
}, rd = {
  key: 1,
  class: "review-section"
}, dd = { class: "section-title" }, cd = { class: "review-items" }, ud = { class: "item-name" }, md = { class: "item-choice" }, vd = {
  key: 0,
  class: "choice-badge install"
}, fd = {
  key: 1,
  class: "choice-badge download"
}, gd = {
  key: 2,
  class: "choice-badge optional"
}, hd = {
  key: 3,
  class: "choice-badge skip"
}, pd = {
  key: 4,
  class: "choice-badge skip"
}, yd = {
  key: 1,
  class: "choice-badge download"
}, wd = {
  key: 2,
  class: "choice-badge pending"
}, bd = {
  key: 2,
  class: "no-choices"
}, kd = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { analyzeWorkflow: f, applyResolution: w, queueModelDownloads: h, progress: u, resetProgress: r } = sl(), { loadPendingDownloads: m } = wt(), b = S(null), p = S(!1), $ = S(!1), I = S(null), z = S("analysis"), x = S([]), k = S(/* @__PURE__ */ new Map()), C = S(/* @__PURE__ */ new Map()), A = U(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return y.value && H.push({ id: "nodes", label: "Nodes" }), (E.value || R.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), z.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), M = U(() => b.value ? b.value.stats.needs_user_input : !1), y = U(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), E = U(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), R = U(() => b.value ? b.value.stats.download_intents > 0 : !1), P = U(() => b.value ? b.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model
    })) : []), L = U(() => {
      if (!b.value) return [];
      const H = b.value.nodes.unresolved.map((te) => ({
        node_type: te.reference.node_type,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.nodes.ambiguous.map((te) => ({
        node_type: te.reference.node_type,
        has_multiple_options: !0,
        options: te.options.map((ve) => ({
          package_id: ve.package.package_id,
          title: ve.package.title,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          is_installed: ve.is_installed
        }))
      }));
      return [...H, ...B];
    }), N = U(() => {
      if (!b.value) return [];
      const H = b.value.models.unresolved.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.models.ambiguous.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        has_multiple_options: !0,
        options: te.options.map((ve) => ({
          model: ve.model,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          has_download_source: ve.has_download_source
        }))
      }));
      return [...H, ...B];
    }), O = U(() => {
      const H = N.value, B = P.value.map((te) => ({
        filename: te.filename,
        reference: te.reference,
        is_download_intent: !0,
        resolved_model: te.resolved_model,
        options: void 0
      }));
      return [...H, ...B];
    }), K = U(() => {
      let H = 0;
      for (const B of k.value.values())
        B.action === "install" && H++;
      for (const B of C.value.values())
        B.action === "select" && H++;
      return H;
    }), G = U(() => {
      let H = 0;
      for (const B of C.value.values())
        B.action === "download" && H++;
      return H;
    }), D = U(() => {
      let H = 0;
      for (const B of k.value.values())
        B.action === "optional" && H++;
      for (const B of C.value.values())
        B.action === "optional" && H++;
      return H;
    }), X = U(() => {
      let H = 0;
      for (const B of k.value.values())
        B.action === "skip" && H++;
      for (const B of C.value.values())
        B.action === "skip" && H++;
      for (const B of L.value)
        k.value.has(B.node_type) || H++;
      for (const B of N.value)
        C.value.has(B.filename) || H++;
      return H;
    }), V = U(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, y.value) {
        const B = L.value.length, te = L.value.filter(
          (ve) => k.value.has(ve.node_type)
        ).length;
        H.nodes = { resolved: te, total: B };
      }
      if (E.value || R.value) {
        const B = O.value.length, te = O.value.filter(
          (ve) => C.value.has(ve.filename) || ve.is_download_intent
        ).length;
        H.models = { resolved: te, total: B };
      }
      if (H.review = { resolved: 1, total: 1 }, z.value === "applying") {
        const B = u.totalFiles || 1, te = u.completedFiles.length;
        H.applying = { resolved: te, total: B };
      }
      return H;
    });
    function oe(H) {
      z.value = H;
    }
    function be() {
      const H = A.value.findIndex((B) => B.id === z.value);
      H > 0 && (z.value = A.value[H - 1].id);
    }
    function fe() {
      const H = A.value.findIndex((B) => B.id === z.value);
      H < A.value.length - 1 && (z.value = A.value[H + 1].id);
    }
    async function ke() {
      p.value = !0, I.value = null;
      try {
        b.value = await f(s.workflowName);
      } catch (H) {
        I.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function Q() {
      x.value.includes("analysis") || x.value.push("analysis"), y.value ? z.value = "nodes" : E.value || R.value ? z.value = "models" : z.value = "review";
    }
    function Me(H) {
      k.value.set(H, { action: "optional" });
    }
    function at(H) {
      k.value.set(H, { action: "skip" });
    }
    function me(H, B) {
      var ve;
      const te = L.value.find((_e) => _e.node_type === H);
      (ve = te == null ? void 0 : te.options) != null && ve[B] && k.value.set(H, {
        action: "install",
        package_id: te.options[B].package_id
      });
    }
    function Ee(H, B) {
      k.value.set(H, {
        action: "install",
        package_id: B
      });
    }
    function lt(H) {
      k.value.delete(H);
    }
    function Y(H) {
      C.value.set(H, { action: "optional" });
    }
    function se(H) {
      C.value.set(H, { action: "skip" });
    }
    function ue(H, B) {
      var ve;
      const te = N.value.find((_e) => _e.filename === H);
      (ve = te == null ? void 0 : te.options) != null && ve[B] && C.value.set(H, {
        action: "select",
        selected_model: te.options[B].model
      });
    }
    function He(H, B, te) {
      C.value.set(H, {
        action: "download",
        url: B,
        target_path: te
      });
    }
    function Qe(H) {
      C.value.delete(H);
    }
    async function bt() {
      $.value = !0, I.value = null, r(), u.phase = "resolving", z.value = "applying";
      try {
        const H = await w(s.workflowName, k.value, C.value);
        H.models_to_download && H.models_to_download.length > 0 && h(s.workflowName, H.models_to_download), u.nodesToInstall = H.nodes_to_install || [], u.phase = "complete", await m(), setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1e3);
      } catch (H) {
        I.value = H instanceof Error ? H.message : "Failed to apply resolution", u.error = I.value, u.phase = "error";
      } finally {
        $.value = !1;
      }
    }
    return we(ke), (H, B) => (o(), _(yt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: p.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (te) => i("close"))
    }, {
      body: a(() => [
        p.value && !b.value ? (o(), n("div", mr, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (o(), n("div", vr, [
          v(vl, {
            steps: A.value,
            "current-step": z.value,
            "completed-steps": x.value,
            "step-stats": V.value,
            onStepChange: oe
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          z.value === "analysis" ? (o(), n("div", fr, [
            e("div", gr, [
              e("div", hr, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", pr, " Found " + l(b.value.stats.total_nodes) + " nodes and " + l(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", yr, [
                e("div", wr, [
                  B[10] || (B[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", br, [
                    e("div", kr, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _r, l(b.value.nodes.resolved.length), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.nodes.ambiguous.length > 0 ? (o(), n("div", $r, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Cr, l(b.value.nodes.ambiguous.length), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (o(), n("div", xr, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Sr, l(b.value.nodes.unresolved.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Ir, [
                  B[19] || (B[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Er, [
                    e("div", zr, [
                      B[11] || (B[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Mr, l(b.value.models.resolved.length - b.value.stats.download_intents), 1),
                      B[12] || (B[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (o(), n("div", Lr, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Tr, l(b.value.stats.download_intents), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (o(), n("div", Rr, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Nr, l(b.value.models.ambiguous.length), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (o(), n("div", Dr, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ur, l(b.value.models.unresolved.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              M.value ? (o(), n("div", Or, [
                B[20] || (B[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Br, l(L.value.length + N.value.length) + " items need your input", 1)
              ])) : R.value ? (o(), n("div", Pr, [
                B[21] || (B[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Vr, l(b.value.stats.download_intents) + " model" + l(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", Ar, [...B[22] || (B[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          z.value === "nodes" ? (o(), _(ci, {
            key: 1,
            nodes: L.value,
            "node-choices": k.value,
            onMarkOptional: Me,
            onSkip: at,
            onOptionSelected: me,
            onManualEntry: Ee,
            onClearChoice: lt
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          z.value === "models" ? (o(), _(tr, {
            key: 2,
            models: O.value,
            "model-choices": C.value,
            onMarkOptional: Y,
            onSkip: se,
            onOptionSelected: ue,
            onDownloadUrl: He,
            onClearChoice: Qe
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          z.value === "review" ? (o(), n("div", Fr, [
            e("div", Wr, [
              B[27] || (B[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Gr, [
                e("div", jr, [
                  e("span", Hr, l(K.value), 1),
                  B[23] || (B[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Kr, [
                  e("span", qr, l(G.value), 1),
                  B[24] || (B[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Jr, [
                  e("span", Xr, l(D.value), 1),
                  B[25] || (B[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Yr, [
                  e("span", Qr, l(X.value), 1),
                  B[26] || (B[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              L.value.length > 0 ? (o(), n("div", Zr, [
                e("h4", ed, "Node Packages (" + l(L.value.length) + ")", 1),
                e("div", td, [
                  (o(!0), n(W, null, Z(L.value, (te) => {
                    var ve, _e, De, Ke;
                    return o(), n("div", {
                      key: te.node_type,
                      class: "review-item"
                    }, [
                      e("code", od, l(te.node_type), 1),
                      e("div", sd, [
                        k.value.has(te.node_type) ? (o(), n(W, { key: 0 }, [
                          ((ve = k.value.get(te.node_type)) == null ? void 0 : ve.action) === "install" ? (o(), n("span", nd, l((_e = k.value.get(te.node_type)) == null ? void 0 : _e.package_id), 1)) : ((De = k.value.get(te.node_type)) == null ? void 0 : De.action) === "optional" ? (o(), n("span", ad, " Optional ")) : ((Ke = k.value.get(te.node_type)) == null ? void 0 : Ke.action) === "skip" ? (o(), n("span", ld, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", id, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              O.value.length > 0 ? (o(), n("div", rd, [
                e("h4", dd, "Models (" + l(O.value.length) + ")", 1),
                e("div", cd, [
                  (o(!0), n(W, null, Z(O.value, (te) => {
                    var ve, _e, De, Ke, Ue, gt, Ze;
                    return o(), n("div", {
                      key: te.filename,
                      class: "review-item"
                    }, [
                      e("code", ud, l(te.filename), 1),
                      e("div", md, [
                        C.value.has(te.filename) ? (o(), n(W, { key: 0 }, [
                          ((ve = C.value.get(te.filename)) == null ? void 0 : ve.action) === "select" ? (o(), n("span", vd, l((De = (_e = C.value.get(te.filename)) == null ? void 0 : _e.selected_model) == null ? void 0 : De.filename), 1)) : ((Ke = C.value.get(te.filename)) == null ? void 0 : Ke.action) === "download" ? (o(), n("span", fd, " Download ")) : ((Ue = C.value.get(te.filename)) == null ? void 0 : Ue.action) === "optional" ? (o(), n("span", gd, " Optional ")) : ((gt = C.value.get(te.filename)) == null ? void 0 : gt.action) === "skip" ? (o(), n("span", hd, " Skip ")) : ((Ze = C.value.get(te.filename)) == null ? void 0 : Ze.action) === "cancel_download" ? (o(), n("span", pd, " Cancel Download ")) : c("", !0)
                        ], 64)) : te.is_download_intent ? (o(), n("span", yd, " Pending Download ")) : (o(), n("span", wd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              L.value.length === 0 && O.value.length === 0 ? (o(), n("div", bd, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          z.value === "applying" ? (o(), _(ur, {
            key: 4,
            progress: de(u)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        z.value !== "analysis" && z.value !== "applying" ? (o(), _(le, {
          key: 0,
          variant: "secondary",
          disabled: $.value,
          onClick: be
        }, {
          default: a(() => [...B[28] || (B[28] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        B[31] || (B[31] = e("div", { class: "footer-spacer" }, null, -1)),
        z.value !== "applying" || de(u).phase === "complete" || de(u).phase === "error" ? (o(), _(le, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (te) => i("close"))
        }, {
          default: a(() => [
            g(l(de(u).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        z.value === "analysis" ? (o(), _(le, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: Q
        }, {
          default: a(() => [
            g(l(M.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        z.value === "nodes" ? (o(), _(le, {
          key: 3,
          variant: "primary",
          onClick: fe
        }, {
          default: a(() => [
            g(l(E.value || R.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        z.value === "models" ? (o(), _(le, {
          key: 4,
          variant: "primary",
          onClick: fe
        }, {
          default: a(() => [...B[29] || (B[29] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        z.value === "review" ? (o(), _(le, {
          key: 5,
          variant: "primary",
          disabled: $.value,
          loading: $.value,
          onClick: bt
        }, {
          default: a(() => [...B[30] || (B[30] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), _d = /* @__PURE__ */ J(kd, [["__scopeId", "data-v-93adce8c"]]), $d = { class: "search-input-wrapper" }, Cd = ["value", "placeholder"], xd = /* @__PURE__ */ q({
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
    const s = t, i = d, f = S(null);
    let w;
    function h(r) {
      const m = r.target.value;
      s.debounce > 0 ? (clearTimeout(w), w = window.setTimeout(() => {
        i("update:modelValue", m);
      }, s.debounce)) : i("update:modelValue", m);
    }
    function u() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = f.value) == null || r.focus();
    }
    return we(() => {
      s.autoFocus && f.value && f.value.focus();
    }), (r, m) => (o(), n("div", $d, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ae(u, ["escape"])
      }, null, 40, Cd),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Sd = /* @__PURE__ */ J(xd, [["__scopeId", "data-v-266f857a"]]), Id = { class: "search-bar" }, Ed = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, s) => (o(), n("div", Id, [
      v(Sd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => d.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), st = /* @__PURE__ */ J(Ed, [["__scopeId", "data-v-3d51bbfd"]]), zd = { class: "section-group" }, Md = {
  key: 0,
  class: "section-content"
}, Ld = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = S(s.initiallyExpanded);
    function w() {
      s.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (h, u) => (o(), n("section", zd, [
      v(Ie, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: w
      }, {
        default: a(() => [
          g(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (o(), n("div", Md, [
        ie(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), he = /* @__PURE__ */ J(Ld, [["__scopeId", "data-v-c48e33ed"]]), Td = { class: "item-header" }, Rd = {
  key: 0,
  class: "item-icon"
}, Nd = { class: "item-info" }, Dd = {
  key: 0,
  class: "item-title"
}, Ud = {
  key: 1,
  class: "item-subtitle"
}, Od = {
  key: 0,
  class: "item-details"
}, Bd = {
  key: 1,
  class: "item-actions"
}, Pd = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = U(() => s.status ? `status-${s.status}` : "");
    return (f, w) => (o(), n("div", {
      class: ee(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: w[0] || (w[0] = (h) => t.clickable && f.$emit("click"))
    }, [
      e("div", Td, [
        f.$slots.icon ? (o(), n("span", Rd, [
          ie(f.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Nd, [
          f.$slots.title ? (o(), n("div", Dd, [
            ie(f.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          f.$slots.subtitle ? (o(), n("div", Ud, [
            ie(f.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      f.$slots.details ? (o(), n("div", Od, [
        ie(f.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      f.$slots.actions ? (o(), n("div", Bd, [
        ie(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ye = /* @__PURE__ */ J(Pd, [["__scopeId", "data-v-cc435e0e"]]), Vd = { class: "loading-state" }, Ad = { class: "loading-message" }, Fd = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", Vd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Ad, l(t.message), 1)
    ]));
  }
}), We = /* @__PURE__ */ J(Fd, [["__scopeId", "data-v-ad8436c9"]]), Wd = { class: "error-state" }, Gd = { class: "error-message" }, jd = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, s) => (o(), n("div", Wd, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Gd, l(t.message), 1),
      t.retry ? (o(), _(j, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ J(jd, [["__scopeId", "data-v-5397be48"]]), Hd = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: d }) {
    const s = d, { getWorkflows: i } = xe(), f = S([]), w = S(!1), h = S(null), u = S(""), r = S(!0), m = S(!1), b = S(!1), p = S(!1), $ = S(null), I = U(
      () => f.value.filter((D) => D.status === "broken")
    ), z = U(
      () => f.value.filter((D) => D.status === "new")
    ), x = U(
      () => f.value.filter((D) => D.status === "modified")
    ), k = U(
      () => f.value.filter((D) => D.status === "synced")
    ), C = U(() => {
      if (!u.value.trim()) return f.value;
      const D = u.value.toLowerCase();
      return f.value.filter((X) => X.name.toLowerCase().includes(D));
    }), A = U(
      () => I.value.filter(
        (D) => !u.value.trim() || D.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), M = U(
      () => z.value.filter(
        (D) => !u.value.trim() || D.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), y = U(
      () => x.value.filter(
        (D) => !u.value.trim() || D.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), E = U(
      () => k.value.filter(
        (D) => !u.value.trim() || D.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), R = U(
      () => m.value ? E.value : E.value.slice(0, 5)
    );
    async function P() {
      w.value = !0, h.value = null;
      try {
        f.value = await i();
      } catch (D) {
        h.value = D instanceof Error ? D.message : "Failed to load workflows";
      } finally {
        w.value = !1;
      }
    }
    function L(D) {
      $.value = D, b.value = !0;
    }
    function N(D) {
      $.value = D, p.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      s("refresh");
    }
    function G(D) {
      const X = [];
      return D.missing_nodes > 0 && X.push(`${D.missing_nodes} missing node${D.missing_nodes > 1 ? "s" : ""}`), D.missing_models > 0 && X.push(`${D.missing_models} missing model${D.missing_models > 1 ? "s" : ""}`), D.pending_downloads && D.pending_downloads > 0 && X.push(`${D.pending_downloads} pending download${D.pending_downloads > 1 ? "s" : ""}`), X.length > 0 ? X.join(", ") : "Has issues";
    }
    return we(P), (D, X) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, { title: "WORKFLOWS" }, {
            actions: a(() => [
              I.value.length > 0 ? (o(), _(j, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: a(() => [...X[7] || (X[7] = [
                  g(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          v(st, {
            modelValue: u.value,
            "onUpdate:modelValue": X[0] || (X[0] = (V) => u.value = V),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          w.value ? (o(), _(We, {
            key: 0,
            message: "Loading workflows..."
          })) : h.value ? (o(), _(Ge, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            A.value.length ? (o(), _(he, {
              key: 0,
              title: "BROKEN",
              count: A.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(A.value, (V) => (o(), _(ye, {
                  key: V.name,
                  status: "broken"
                }, {
                  icon: a(() => [...X[8] || (X[8] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(V.name), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(G(V)), 1)
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => N(V.name)
                    }, {
                      default: a(() => [...X[9] || (X[9] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => L(V.name)
                    }, {
                      default: a(() => [...X[10] || (X[10] = [
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
            M.value.length ? (o(), _(he, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(M.value, (V) => (o(), _(ye, {
                  key: V.name,
                  status: "new"
                }, {
                  icon: a(() => [...X[11] || (X[11] = [
                    g("●", -1)
                  ])]),
                  title: a(() => [
                    g(l(V.name), 1)
                  ]),
                  subtitle: a(() => [...X[12] || (X[12] = [
                    g("New", -1)
                  ])]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => L(V.name)
                    }, {
                      default: a(() => [...X[13] || (X[13] = [
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
            y.value.length ? (o(), _(he, {
              key: 2,
              title: "MODIFIED",
              count: y.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(y.value, (V) => (o(), _(ye, {
                  key: V.name,
                  status: "modified"
                }, {
                  icon: a(() => [...X[14] || (X[14] = [
                    g("⚡", -1)
                  ])]),
                  title: a(() => [
                    g(l(V.name), 1)
                  ]),
                  subtitle: a(() => [...X[15] || (X[15] = [
                    g("Modified", -1)
                  ])]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => L(V.name)
                    }, {
                      default: a(() => [...X[16] || (X[16] = [
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
            E.value.length ? (o(), _(he, {
              key: 3,
              title: "SYNCED",
              count: E.value.length,
              collapsible: !0,
              "initially-expanded": r.value,
              onToggle: X[2] || (X[2] = (V) => r.value = V)
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(R.value, (V) => (o(), _(ye, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: a(() => [...X[17] || (X[17] = [
                    g("✓", -1)
                  ])]),
                  title: a(() => [
                    g(l(V.name), 1)
                  ]),
                  subtitle: a(() => [...X[18] || (X[18] = [
                    g("Synced", -1)
                  ])]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => L(V.name)
                    }, {
                      default: a(() => [...X[19] || (X[19] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !m.value && E.value.length > 5 ? (o(), _(j, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: X[1] || (X[1] = (V) => m.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    g(" View all " + l(E.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            C.value.length ? c("", !0) : (o(), _(Ne, {
              key: 4,
              icon: "📭",
              message: u.value ? `No workflows match '${u.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b.value && $.value ? (o(), _(el, {
        key: 0,
        "workflow-name": $.value,
        onClose: X[3] || (X[3] = (V) => b.value = !1),
        onResolve: X[4] || (X[4] = (V) => N($.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      p.value && $.value ? (o(), _(_d, {
        key: 1,
        "workflow-name": $.value,
        onClose: X[5] || (X[5] = (V) => p.value = !1),
        onInstall: K,
        onRefresh: X[6] || (X[6] = (V) => s("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Kd = /* @__PURE__ */ J(Hd, [["__scopeId", "data-v-2a3b6212"]]), qd = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["summary-bar", t.variant])
    }, [
      ie(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ J(qd, [["__scopeId", "data-v-ccb7816e"]]), Jd = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: i, getStatus: f } = xe(), w = S([]), h = S([]), u = S("production"), r = S(!1), m = S(null), b = S(""), p = S(!1);
    function $() {
      p.value = !1, s("navigate", "model-index");
    }
    const I = U(
      () => w.value.reduce((L, N) => L + (N.size || 0), 0)
    ), z = U(() => {
      if (!b.value.trim()) return w.value;
      const L = b.value.toLowerCase();
      return w.value.filter((N) => N.filename.toLowerCase().includes(L));
    }), x = U(() => {
      if (!b.value.trim()) return h.value;
      const L = b.value.toLowerCase();
      return h.value.filter((N) => N.filename.toLowerCase().includes(L));
    }), k = U(
      () => z.value.filter((L) => L.type === "checkpoints")
    ), C = U(
      () => z.value.filter((L) => L.type === "loras")
    ), A = U(
      () => z.value.filter((L) => L.type !== "checkpoints" && L.type !== "loras")
    );
    function M(L) {
      if (!L) return "Unknown";
      const N = L / (1024 * 1024);
      return N >= 1024 ? `${(N / 1024).toFixed(1)} GB` : `${N.toFixed(0)} MB`;
    }
    function y(L) {
      s("navigate", "model-index");
    }
    function E(L) {
      s("navigate", "model-index");
    }
    function R(L) {
      alert(`Download functionality not yet implemented for ${L}`);
    }
    async function P() {
      r.value = !0, m.value = null;
      try {
        const L = await i();
        w.value = L, h.value = [];
        const N = await f();
        u.value = N.environment || "production";
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return we(P), (L, N) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (O) => p.value = !0)
          })
        ]),
        search: a(() => [
          v(st, {
            modelValue: b.value,
            "onUpdate:modelValue": N[1] || (N[1] = (O) => b.value = O),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), _(We, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (o(), _(Ge, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            w.value.length ? (o(), _(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(w.value.length) + " models • " + l(M(I.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), _(he, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(k.value, (O) => (o(), _(ye, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[3] || (N[3] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(M(O.size)), 1)
                  ]),
                  details: a(() => [
                    v(ne, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    v(ne, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => y(O.hash)
                    }, {
                      default: a(() => [...N[4] || (N[4] = [
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
            C.value.length ? (o(), _(he, {
              key: 2,
              title: "LORAS",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(C.value, (O) => (o(), _(ye, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[5] || (N[5] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(M(O.size)), 1)
                  ]),
                  details: a(() => [
                    v(ne, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    v(ne, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => y(O.hash)
                    }, {
                      default: a(() => [...N[6] || (N[6] = [
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
            A.value.length ? (o(), _(he, {
              key: 3,
              title: "OTHER",
              count: A.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(A.value, (O) => (o(), _(ye, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[7] || (N[7] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(M(O.size)), 1)
                  ]),
                  details: a(() => [
                    v(ne, {
                      label: "Type:",
                      value: O.type
                    }, null, 8, ["value"]),
                    v(ne, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => y(O.hash)
                    }, {
                      default: a(() => [...N[8] || (N[8] = [
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
            x.value.length ? (o(), _(he, {
              key: 4,
              title: "MISSING",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(x.value, (O) => (o(), _(ye, {
                  key: O.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...N[9] || (N[9] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(O.filename), 1)
                  ]),
                  subtitle: a(() => [...N[10] || (N[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var K;
                    return [
                      v(ne, {
                        label: "Required by:",
                        value: ((K = O.workflow_names) == null ? void 0 : K.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    v(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => R(O.filename)
                    }, {
                      default: a(() => [...N[11] || (N[11] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => E(O.filename)
                    }, {
                      default: a(() => [...N[12] || (N[12] = [
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
            !z.value.length && !x.value.length ? (o(), _(Ne, {
              key: 5,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      v(Fe, {
        show: p.value,
        title: "About Environment Models",
        onClose: N[2] || (N[2] = (O) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            N[13] || (N[13] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(u.value) + '"', 1),
            N[14] || (N[14] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          v(j, {
            variant: "primary",
            onClick: $
          }, {
            default: a(() => [...N[15] || (N[15] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Xd = /* @__PURE__ */ J(Jd, [["__scopeId", "data-v-72675609"]]), Yd = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: d } = xe(), s = S([]), i = S(!1), f = S(null), w = S(""), h = S(!1), u = U(
      () => s.value.reduce((R, P) => R + (P.size_mb || P.size || 0), 0)
    ), r = U(() => {
      const R = /* @__PURE__ */ new Set();
      return s.value.forEach((P) => {
        P.used_in_environments && P.used_in_environments.length > 0 && P.used_in_environments.forEach((L) => R.add(L.env_name));
      }), R.size;
    }), m = U(() => {
      if (!w.value.trim()) return s.value;
      const R = w.value.toLowerCase();
      return s.value.filter((P) => {
        const L = P, N = P.sha256 || L.sha256_hash || "";
        return P.filename.toLowerCase().includes(R) || N.toLowerCase().includes(R);
      });
    }), b = U(
      () => m.value.filter((R) => R.type === "checkpoints")
    ), p = U(
      () => m.value.filter((R) => R.type === "loras")
    ), $ = U(
      () => m.value.filter((R) => R.type !== "checkpoints" && R.type !== "loras")
    );
    function I(R) {
      return R ? R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB` : "Unknown";
    }
    function z(R) {
      const P = R, L = R.used_in_workflows || P.used_by || [];
      return !L || L.length === 0 ? "Not used" : `${L.length} workflow(s)`;
    }
    function x(R) {
      navigator.clipboard.writeText(R), alert("Hash copied to clipboard");
    }
    function k(R) {
      prompt("Enter model source URL:", R.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function C(R) {
      const P = R, L = R.used_in_workflows || P.used_by || [], N = L && L.length > 0 ? `

⚠ WARNING: This model is used by ${L.length} workflow(s):
${L.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${R.filename}?${N}

This will free ${I(P.size_mb || R.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function A() {
      alert("Scan for models not yet implemented");
    }
    function M() {
      alert("Change directory not yet implemented");
    }
    function y() {
      alert("Download new model not yet implemented");
    }
    async function E() {
      i.value = !0, f.value = null;
      try {
        s.value = await d(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", b.value), console.log("Filtered loras:", p.value), console.log("Filtered other:", $.value);
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return we(E), (R, P) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: P[0] || (P[0] = (L) => h.value = !0)
          }, {
            actions: a(() => [
              v(j, {
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: a(() => [...P[3] || (P[3] = [
                  g(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              v(j, {
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...P[4] || (P[4] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              v(j, {
                variant: "primary",
                size: "sm",
                onClick: y
              }, {
                default: a(() => [...P[5] || (P[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          v(st, {
            modelValue: w.value,
            "onUpdate:modelValue": P[1] || (P[1] = (L) => w.value = L),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), _(We, {
            key: 0,
            message: "Loading workspace models..."
          })) : f.value ? (o(), _(Ge, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length ? (o(), _(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(s.value.length) + " models • " + l(I(u.value)) + " • Used in " + l(r.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            b.value.length ? (o(), _(he, {
              key: 1,
              title: "CHECKPOINTS",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(b.value, (L) => (o(), _(ye, {
                  key: L.sha256 || L.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...P[6] || (P[6] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(L.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(L.size_mb || L.size)), 1)
                  ]),
                  details: a(() => {
                    var N, O;
                    return [
                      L.sha256 || L.sha256_hash ? (o(), _(ne, {
                        key: 0,
                        label: "SHA256:",
                        value: (L.sha256 || L.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      v(ne, {
                        label: "Used in:",
                        value: z(L)
                      }, null, 8, ["value"]),
                      L.source_url || (N = L.sources) != null && N[0] ? (o(), _(ne, {
                        key: 1,
                        label: "Source URL:",
                        value: L.source_url || ((O = L.sources) == null ? void 0 : O[0])
                      }, null, 8, ["value"])) : (o(), _(ne, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...P[7] || (P[7] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => k(L)
                    }, {
                      default: a(() => [...P[8] || (P[8] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    L.sha256 || L.sha256_hash ? (o(), _(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => x(L.sha256 || L.sha256_hash)
                    }, {
                      default: a(() => [...P[9] || (P[9] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => C(L)
                    }, {
                      default: a(() => [...P[10] || (P[10] = [
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
            p.value.length ? (o(), _(he, {
              key: 2,
              title: "LORAS",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(p.value, (L) => (o(), _(ye, {
                  key: L.sha256 || L.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...P[11] || (P[11] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(L.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(L.size_mb || L.size)), 1)
                  ]),
                  details: a(() => {
                    var N, O;
                    return [
                      L.sha256 || L.sha256_hash ? (o(), _(ne, {
                        key: 0,
                        label: "SHA256:",
                        value: (L.sha256 || L.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      v(ne, {
                        label: "Used in:",
                        value: z(L)
                      }, null, 8, ["value"]),
                      L.source_url || (N = L.sources) != null && N[0] ? (o(), _(ne, {
                        key: 1,
                        label: "Source URL:",
                        value: L.source_url || ((O = L.sources) == null ? void 0 : O[0])
                      }, null, 8, ["value"])) : (o(), _(ne, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...P[12] || (P[12] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => k(L)
                    }, {
                      default: a(() => [...P[13] || (P[13] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    L.sha256 || L.sha256_hash ? (o(), _(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => x(L.sha256 || L.sha256_hash)
                    }, {
                      default: a(() => [...P[14] || (P[14] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => C(L)
                    }, {
                      default: a(() => [...P[15] || (P[15] = [
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
            $.value.length ? (o(), _(he, {
              key: 3,
              title: "OTHER",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z($.value, (L) => (o(), _(ye, {
                  key: L.sha256 || L.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...P[16] || (P[16] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(L.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(L.size_mb || L.size)), 1)
                  ]),
                  details: a(() => [
                    v(ne, {
                      label: "Type:",
                      value: L.type
                    }, null, 8, ["value"]),
                    L.sha256 || L.sha256_hash ? (o(), _(ne, {
                      key: 0,
                      label: "SHA256:",
                      value: (L.sha256 || L.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    v(ne, {
                      label: "Used in:",
                      value: z(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => k(L)
                    }, {
                      default: a(() => [...P[17] || (P[17] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    L.sha256 || L.sha256_hash ? (o(), _(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => x(L.sha256 || L.sha256_hash)
                    }, {
                      default: a(() => [...P[18] || (P[18] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => C(L)
                    }, {
                      default: a(() => [...P[19] || (P[19] = [
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
            m.value.length ? c("", !0) : (o(), _(Ne, {
              key: 4,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      v(Fe, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: P[2] || (P[2] = (L) => h.value = !1)
      }, {
        content: a(() => [...P[20] || (P[20] = [
          e("p", null, [
            g(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            g(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qd = /* @__PURE__ */ J(Yd, [["__scopeId", "data-v-5a24af01"]]), Zd = { key: 0 }, ec = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, tc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, oc = /* @__PURE__ */ q({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: d, installNode: s, updateNode: i, uninstallNode: f } = xe(), w = S({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), h = S(!1), u = S(null), r = S(""), m = S(!1), b = U(() => {
      if (!r.value.trim()) return w.value.nodes;
      const y = r.value.toLowerCase();
      return w.value.nodes.filter(
        (E) => {
          var R, P;
          return E.name.toLowerCase().includes(y) || ((R = E.description) == null ? void 0 : R.toLowerCase().includes(y)) || ((P = E.repository) == null ? void 0 : P.toLowerCase().includes(y));
        }
      );
    }), p = U(
      () => b.value.filter((y) => y.installed)
    ), $ = U(
      () => b.value.filter((y) => !y.installed)
    );
    function I(y) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[y] || y;
    }
    function z(y) {
      return !y.used_in_workflows || y.used_in_workflows.length === 0 ? "Not used in any workflows" : y.used_in_workflows.length === 1 ? y.used_in_workflows[0] : `${y.used_in_workflows.length} workflows`;
    }
    function x(y) {
      window.open(y, "_blank");
    }
    async function k(y) {
      if (confirm(`Install node "${y}"?

This will download and install the node from its repository.`))
        try {
          h.value = !0;
          const E = await s(y);
          E.status === "success" ? (alert(`Node "${y}" installed successfully!`), await M()) : alert(`Failed to install node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error installing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function C(y) {
      if (confirm(`Check for updates for "${y}"?`))
        try {
          h.value = !0;
          const E = await i(y);
          E.status === "success" ? (alert(`Node "${y}" is up to date or has been updated!`), await M()) : alert(`Update check failed: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error checking for updates: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function A(y) {
      if (confirm(`Uninstall node "${y}"?

This will remove the node from this environment.`))
        try {
          h.value = !0;
          const E = await f(y);
          E.status === "success" ? (alert(`Node "${y}" uninstalled successfully!`), await M()) : alert(`Failed to uninstall node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error uninstalling node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function M() {
      h.value = !0, u.value = null;
      try {
        w.value = await d();
      } catch (y) {
        u.value = y instanceof Error ? y.message : "Failed to load nodes";
      } finally {
        h.value = !1;
      }
    }
    return we(M), (y, E) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (R) => m.value = !0)
          })
        ]),
        search: a(() => [
          v(st, {
            modelValue: r.value,
            "onUpdate:modelValue": E[1] || (E[1] = (R) => r.value = R),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), _(We, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : u.value ? (o(), _(Ge, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            w.value.total_count ? (o(), _(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(w.value.total_count) + " nodes • " + l(w.value.installed_count) + " installed • " + l(w.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            p.value.length ? (o(), _(he, {
              key: 1,
              title: "INSTALLED",
              count: p.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(p.value, (R) => (o(), _(ye, {
                  key: R.name,
                  status: "synced"
                }, {
                  icon: a(() => [...E[4] || (E[4] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(R.name), 1)
                  ]),
                  subtitle: a(() => [
                    R.version ? (o(), n("span", Zd, "v" + l(R.version), 1)) : (o(), n("span", ec, "version unknown")),
                    R.source ? (o(), n("span", tc, " • " + l(I(R.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    R.description ? (o(), _(ne, {
                      key: 0,
                      label: "Description:",
                      value: R.description
                    }, null, 8, ["value"])) : c("", !0),
                    R.repository ? (o(), _(ne, {
                      key: 1,
                      label: "Repository:",
                      value: R.repository
                    }, null, 8, ["value"])) : c("", !0),
                    v(ne, {
                      label: "Used by:",
                      value: z(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    R.repository ? (o(), _(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => x(R.repository)
                    }, {
                      default: a(() => [...E[5] || (E[5] = [
                        g(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    R.source === "registry" ? (o(), _(j, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => C(R.name)
                    }, {
                      default: a(() => [...E[6] || (E[6] = [
                        g(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    R.source !== "unknown" ? (o(), _(j, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (P) => A(R.name)
                    }, {
                      default: a(() => [...E[7] || (E[7] = [
                        g(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? (o(), _(he, {
              key: 2,
              title: "MISSING",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z($.value, (R) => (o(), _(ye, {
                  key: R.name,
                  status: "missing"
                }, {
                  icon: a(() => [...E[8] || (E[8] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(R.name), 1)
                  ]),
                  subtitle: a(() => [...E[9] || (E[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    R.description ? (o(), _(ne, {
                      key: 0,
                      label: "Description:",
                      value: R.description
                    }, null, 8, ["value"])) : c("", !0),
                    R.repository ? (o(), _(ne, {
                      key: 1,
                      label: "Repository:",
                      value: R.repository
                    }, null, 8, ["value"])) : c("", !0),
                    v(ne, {
                      label: "Required by:",
                      value: z(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    R.download_url ? (o(), _(j, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => k(R.name)
                    }, {
                      default: a(() => [...E[10] || (E[10] = [
                        g(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    R.repository ? (o(), _(j, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => x(R.repository)
                    }, {
                      default: a(() => [...E[11] || (E[11] = [
                        g(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !p.value.length && !$.value.length ? (o(), _(Ne, {
              key: 3,
              icon: "📭",
              message: r.value ? `No nodes match '${r.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      v(Fe, {
        show: m.value,
        title: "About Git-Tracked Nodes",
        onClose: E[3] || (E[3] = (R) => m.value = !1)
      }, {
        content: a(() => [...E[12] || (E[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            g(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            g(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          v(j, {
            variant: "primary",
            onClick: E[2] || (E[2] = (R) => m.value = !1)
          }, {
            default: a(() => [...E[13] || (E[13] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sc = /* @__PURE__ */ J(oc, [["__scopeId", "data-v-c480e2c1"]]), nc = { class: "remote-url-display" }, ac = ["title"], lc = ["title"], ic = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, rc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, dc = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = S(!1), i = U(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const w = d.url.slice(0, Math.floor(d.maxLength * 0.6)), h = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${w}...${h}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(d.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy URL:", w);
      }
    }
    return (w, h) => (o(), n("div", nc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, ac),
      e("button", {
        class: ee(["copy-btn", { copied: s.value }]),
        onClick: f,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", rc, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", ic, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, lc)
    ]));
  }
}), Nt = /* @__PURE__ */ J(dc, [["__scopeId", "data-v-7768a58d"]]), cc = { class: "remote-title" }, uc = {
  key: 0,
  class: "default-badge"
}, mc = {
  key: 1,
  class: "sync-badge"
}, vc = {
  key: 0,
  class: "ahead"
}, fc = {
  key: 1,
  class: "behind"
}, gc = {
  key: 0,
  class: "tracking-info"
}, hc = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, i = U(() => s.fetchingRemote === s.remote.name), f = U(() => s.remote.is_default), w = U(() => !!s.trackingBranch);
    function h(u) {
      const r = new Date(u), b = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), p = Math.floor(b / 6e4);
      if (p < 1) return "Just now";
      if (p < 60) return `${p}m ago`;
      const $ = Math.floor(p / 60);
      if ($ < 24) return `${$}h ago`;
      const I = Math.floor($ / 24);
      return I < 7 ? `${I}d ago` : r.toLocaleDateString();
    }
    return (u, r) => (o(), _(ye, {
      status: f.value ? "synced" : void 0
    }, {
      icon: a(() => [
        g(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", cc, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), n("span", uc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", mc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", vc, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", fc, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        w.value ? (o(), n("span", gc, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var m;
        return [
          v(ne, { label: "Fetch:" }, {
            default: a(() => [
              v(Nt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), _(ne, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              v(Nt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (m = t.syncStatus) != null && m.last_fetch ? (o(), _(ne, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        v(j, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: r[0] || (r[0] = (m) => u.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...r[3] || (r[3] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        v(j, {
          variant: "secondary",
          size: "xs",
          onClick: r[1] || (r[1] = (m) => u.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...r[4] || (r[4] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? c("", !0) : (o(), _(j, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: r[2] || (r[2] = (m) => u.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...r[5] || (r[5] = [
            g(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), pc = /* @__PURE__ */ J(hc, [["__scopeId", "data-v-17362e45"]]), yc = ["for"], wc = {
  key: 0,
  class: "base-form-field-required"
}, bc = { class: "base-form-field-input" }, kc = {
  key: 1,
  class: "base-form-field-error"
}, _c = {
  key: 2,
  class: "base-form-field-hint"
}, $c = /* @__PURE__ */ q({
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
    const d = t, s = U(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, f) => (o(), n("div", {
      class: ee(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        g(l(t.label) + " ", 1),
        t.required ? (o(), n("span", wc, "*")) : c("", !0)
      ], 8, yc)) : c("", !0),
      e("div", bc, [
        ie(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", kc, l(t.error), 1)) : t.hint ? (o(), n("span", _c, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ J($c, [["__scopeId", "data-v-9a1cf296"]]), Cc = { class: "remote-form" }, xc = { class: "form-header" }, Sc = { class: "form-body" }, Ic = {
  key: 0,
  class: "form-error"
}, Ec = { class: "form-actions" }, zc = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = S({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), w = S(!1), h = S(null);
    Bt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      f.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const u = U(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!u.value || w.value)) {
        h.value = null, w.value = !0;
        try {
          i("submit", f.value);
        } catch (m) {
          h.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          w.value = !1;
        }
      }
    }
    return (m, b) => (o(), n("div", Cc, [
      e("div", xc, [
        v(Ie, null, {
          default: a(() => [
            g(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Sc, [
        v(_t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            v(je, {
              modelValue: f.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (p) => f.value.name = p),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        v(_t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            v(je, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (p) => f.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v(_t, { label: "Push URL (optional)" }, {
          default: a(() => [
            v(je, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (p) => f.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), n("div", Ic, l(h.value), 1)) : c("", !0)
      ]),
      e("div", Ec, [
        v(j, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: w.value,
          onClick: r
        }, {
          default: a(() => [
            g(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        v(j, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (p) => m.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Mc = /* @__PURE__ */ J(zc, [["__scopeId", "data-v-56021b18"]]), Lc = { key: 0 }, Tc = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: f,
      fetchRemote: w,
      getRemoteSyncStatus: h
    } = xe(), u = S([]), r = S(null), m = S({}), b = S(!1), p = S(null), $ = S(""), I = S(!1), z = S(null), x = S(!1), k = S("add"), C = S({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), A = U(() => {
      if (!$.value.trim()) return u.value;
      const G = $.value.toLowerCase();
      return u.value.filter(
        (D) => D.name.toLowerCase().includes(G) || D.fetch_url.toLowerCase().includes(G) || D.push_url.toLowerCase().includes(G)
      );
    });
    function M(G) {
      var D;
      return ((D = r.value) == null ? void 0 : D.remote) === G;
    }
    async function y() {
      b.value = !0, p.value = null;
      try {
        const G = await d();
        u.value = G.remotes, r.value = G.current_branch_tracking || null, await Promise.all(
          G.remotes.map(async (D) => {
            const X = await h(D.name);
            X && (m.value[D.name] = X);
          })
        );
      } catch (G) {
        p.value = G instanceof Error ? G.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function E() {
      k.value = "add", C.value = { name: "", fetchUrl: "", pushUrl: "" }, x.value = !0;
    }
    function R(G) {
      const D = u.value.find((X) => X.name === G);
      D && (k.value = "edit", C.value = {
        name: D.name,
        fetchUrl: D.fetch_url,
        pushUrl: D.push_url
      }, x.value = !0);
    }
    async function P(G) {
      try {
        k.value === "add" ? await s(G.name, G.fetchUrl) : await f(G.name, G.fetchUrl, G.pushUrl || void 0), x.value = !1, await y();
      } catch (D) {
        p.value = D instanceof Error ? D.message : "Operation failed";
      }
    }
    function L() {
      x.value = !1, C.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function N(G) {
      z.value = G;
      try {
        await w(G);
        const D = await h(G);
        D && (m.value[G] = D);
      } catch (D) {
        p.value = D instanceof Error ? D.message : "Fetch failed";
      } finally {
        z.value = null;
      }
    }
    async function O(G) {
      if (confirm(`Remove remote "${G}"?`))
        try {
          await i(G), await y();
        } catch (D) {
          p.value = D instanceof Error ? D.message : "Failed to remove remote";
        }
    }
    function K() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return we(y), (G, D) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (X) => I.value = !0)
          }, {
            actions: a(() => [
              x.value ? c("", !0) : (o(), _(j, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: E
              }, {
                default: a(() => [...D[3] || (D[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          x.value ? c("", !0) : (o(), _(st, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": D[1] || (D[1] = (X) => $.value = X),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          b.value ? (o(), _(We, {
            key: 0,
            message: "Loading remotes..."
          })) : p.value ? (o(), _(Ge, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: y
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            x.value ? (o(), _(Mc, {
              key: 0,
              mode: k.value,
              "remote-name": C.value.name,
              "fetch-url": C.value.fetchUrl,
              "push-url": C.value.pushUrl,
              onSubmit: P,
              onCancel: L
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            u.value.length && !x.value ? (o(), _(nt, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(u.value.length) + " remote" + l(u.value.length !== 1 ? "s" : "") + " ", 1),
                r.value ? (o(), n("span", Lc, " • Tracking: " + l(r.value.remote) + "/" + l(r.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            A.value.length && !x.value ? (o(), _(he, {
              key: 2,
              title: "REMOTES",
              count: A.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(A.value, (X) => {
                  var V;
                  return o(), _(pc, {
                    key: X.name,
                    remote: X,
                    "sync-status": m.value[X.name],
                    "tracking-branch": M(X.name) ? (V = r.value) == null ? void 0 : V.branch : void 0,
                    "fetching-remote": z.value,
                    onFetch: N,
                    onEdit: R,
                    onRemove: O
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !A.value.length && !x.value ? (o(), _(Ne, {
              key: 3,
              icon: "🌐",
              message: $.value ? `No remotes match '${$.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                v(j, {
                  variant: "primary",
                  onClick: E
                }, {
                  default: a(() => [...D[4] || (D[4] = [
                    g(" Add Your First Remote ", -1)
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
      v(Fe, {
        show: I.value,
        title: "About Git Remotes",
        onClose: D[2] || (D[2] = (X) => I.value = !1)
      }, {
        content: a(() => [...D[5] || (D[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          v(j, {
            variant: "link",
            onClick: K
          }, {
            default: a(() => [...D[6] || (D[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Rc = /* @__PURE__ */ J(Tc, [["__scopeId", "data-v-a75719bb"]]), Nc = { class: "setting-info" }, Dc = { class: "setting-label" }, Uc = {
  key: 0,
  class: "required-marker"
}, Oc = {
  key: 0,
  class: "setting-description"
}, Bc = { class: "setting-control" }, Pc = /* @__PURE__ */ q({
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
      e("div", Nc, [
        e("div", Dc, [
          g(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Uc, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", Oc, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Bc, [
        ie(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ J(Pc, [["__scopeId", "data-v-cb5d236c"]]), Vc = { class: "toggle" }, Ac = ["checked", "disabled"], Fc = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", Vc, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Ac),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Xe = /* @__PURE__ */ J(Fc, [["__scopeId", "data-v-71c0f550"]]), Wc = { class: "settings-section" }, Gc = { class: "path-setting" }, jc = { class: "path-value" }, Hc = { class: "path-setting" }, Kc = { class: "path-value" }, qc = { class: "settings-section" }, Jc = { class: "settings-section" }, Xc = { class: "settings-section" }, Yc = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = xe(), i = S(!1), f = S(null), w = S(null), h = S(null), u = S(null), r = S(""), m = S(""), b = S(!0), p = S(!0), $ = S(!1), I = U(() => u.value ? r.value !== (u.value.civitai_api_key || "") : !1);
    async function z() {
      i.value = !0, f.value = null;
      try {
        h.value = await d(), u.value = { ...h.value }, r.value = h.value.civitai_api_key || "", m.value = h.value.huggingface_token || "", b.value = h.value.auto_sync_models, p.value = h.value.confirm_destructive;
        const A = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        $.value = A === "true";
      } catch (A) {
        f.value = A instanceof Error ? A.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function x() {
      var A;
      w.value = null;
      try {
        const M = {};
        r.value !== (((A = u.value) == null ? void 0 : A.civitai_api_key) || "") && (M.civitai_api_key = r.value || null), await s(M), await z(), w.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          w.value = null;
        }, 3e3);
      } catch (M) {
        w.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to save settings"
        };
      }
    }
    function k() {
      u.value && (r.value = u.value.civitai_api_key || "", m.value = u.value.huggingface_token || "", b.value = u.value.auto_sync_models, p.value = u.value.confirm_destructive, w.value = null);
    }
    function C(A) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(A)), console.log("[ComfyGit] Auto-refresh setting saved:", A);
    }
    return we(z), (A, M) => (o(), _($e, null, {
      header: a(() => [
        v(Ce, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            v(j, {
              variant: "primary",
              size: "sm",
              disabled: !I.value,
              onClick: x
            }, {
              default: a(() => [...M[5] || (M[5] = [
                g(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            I.value ? (o(), _(j, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...M[6] || (M[6] = [
                g(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), _(We, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (o(), _(Ge, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
          v(he, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var y, E;
              return [
                e("div", Wc, [
                  e("div", Gc, [
                    M[7] || (M[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    M[8] || (M[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", jc, l(((y = h.value) == null ? void 0 : y.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Hc, [
                    M[9] || (M[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    M[10] || (M[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Kc, l(((E = h.value) == null ? void 0 : E.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          v(he, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", qc, [
                v(Ve, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    v(ft, {
                      modelValue: r.value,
                      "onUpdate:modelValue": M[0] || (M[0] = (y) => r.value = y),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(Ve, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(ft, {
                      modelValue: m.value,
                      "onUpdate:modelValue": M[1] || (M[1] = (y) => m.value = y),
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
          v(he, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Jc, [
                v(Ve, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: $.value,
                      "onUpdate:modelValue": [
                        M[2] || (M[2] = (y) => $.value = y),
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
          v(he, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Xc, [
                v(Ve, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: b.value,
                      "onUpdate:modelValue": M[3] || (M[3] = (y) => b.value = y),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(Ve, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: p.value,
                      "onUpdate:modelValue": M[4] || (M[4] = (y) => p.value = y),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          w.value ? (o(), _(nt, {
            key: 0,
            variant: (w.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Ye({ color: w.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(w.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Qc = /* @__PURE__ */ J(Yc, [["__scopeId", "data-v-7861bd35"]]), Zc = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = xe(), s = S([]), i = S(!1), f = S(null), w = S(!1), h = S(null), u = U(() => s.value.length === 0 ? [] : s.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function r() {
      i.value = !0, f.value = null;
      try {
        s.value = await d(void 0, 500);
      } catch (m) {
        f.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var m;
          (m = h.value) != null && m.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return we(r), (m, b) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (p) => w.value = !0)
          }, {
            actions: a(() => [
              v(j, {
                variant: "secondary",
                size: "sm",
                onClick: r,
                disabled: i.value
              }, {
                default: a(() => [
                  g(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          i.value ? (o(), _(We, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (o(), _(Ge, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: r
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length === 0 ? (o(), _(Ne, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), n(W, null, Z(u.value, (p, $) => (o(), n("div", {
                key: $,
                class: ee(`log-line log-level-${p.level.toLowerCase()}`)
              }, l(p.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(Fe, {
        show: w.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (p) => w.value = !1)
      }, {
        content: a(() => [...b[3] || (b[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          v(j, {
            variant: "primary",
            onClick: b[1] || (b[1] = (p) => w.value = !1)
          }, {
            default: a(() => [...b[4] || (b[4] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), eu = /* @__PURE__ */ J(Zc, [["__scopeId", "data-v-39f6a756"]]), tu = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = xe(), i = S([]), f = S(!1), w = S(null), h = S(!1), u = S("production"), r = S(null), m = U(() => i.value.length === 0 ? [] : i.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function b() {
      f.value = !0, w.value = null;
      try {
        i.value = await d(void 0, 500);
        try {
          const p = await s();
          u.value = p.environment || "production";
        } catch {
        }
      } catch (p) {
        w.value = p instanceof Error ? p.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var p;
          (p = r.value) != null && p.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return we(b), (p, $) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (I) => h.value = !0)
          }, {
            actions: a(() => [
              v(j, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: f.value
              }, {
                default: a(() => [
                  g(l(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          f.value ? (o(), _(We, {
            key: 0,
            message: "Loading environment logs..."
          })) : w.value ? (o(), _(Ge, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            i.value.length === 0 ? (o(), _(Ne, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (o(!0), n(W, null, Z(m.value, (I, z) => (o(), n("div", {
                key: z,
                class: ee(`log-line log-level-${I.level.toLowerCase()}`)
              }, l(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(Fe, {
        show: h.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (I) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            $[3] || ($[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(u.value), 1),
            $[4] || ($[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1)),
          $[6] || ($[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          v(j, {
            variant: "primary",
            onClick: $[1] || ($[1] = (I) => h.value = !1)
          }, {
            default: a(() => [...$[7] || ($[7] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ou = /* @__PURE__ */ J(tu, [["__scopeId", "data-v-4f1e6f72"]]), su = { class: "env-title" }, nu = {
  key: 0,
  class: "current-badge"
}, au = {
  key: 0,
  class: "branch-info"
}, lu = /* @__PURE__ */ q({
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
    return (d, s) => (o(), _(ye, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        g(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", su, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", nu, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", au, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        v(ne, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        v(ne, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        v(ne, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), _(ne, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        ie(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), iu = /* @__PURE__ */ J(lu, [["__scopeId", "data-v-5238e57c"]]), ru = {
  key: 0,
  class: "create-form"
}, du = { class: "create-form__header" }, cu = { class: "create-form__body" }, uu = { class: "create-form__actions" }, mu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, vu = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: i } = xe(), f = S([]), w = S(!1), h = S(null), u = S(""), r = S(!1), m = S(!1), b = S(""), p = U(
      () => f.value.find((M) => M.is_current)
    ), $ = U(() => {
      if (!u.value.trim()) return f.value;
      const M = u.value.toLowerCase();
      return f.value.filter(
        (y) => {
          var E;
          return y.name.toLowerCase().includes(M) || ((E = y.current_branch) == null ? void 0 : E.toLowerCase().includes(M));
        }
      );
    });
    function I(M) {
      if (!M) return "";
      try {
        const y = new Date(M), R = (/* @__PURE__ */ new Date()).getTime() - y.getTime(), P = Math.floor(R / 6e4), L = Math.floor(R / 36e5), N = Math.floor(R / 864e5);
        return P < 1 ? "just now" : P < 60 ? `${P} ${P === 1 ? "minute" : "minutes"} ago` : L < 24 ? `${L} ${L === 1 ? "hour" : "hours"} ago` : N < 30 ? `${N} ${N === 1 ? "day" : "days"} ago` : y.toLocaleDateString();
      } catch {
        return M;
      }
    }
    function z() {
      const M = b.value.trim();
      M && (s("create", M), b.value = "", m.value = !1);
    }
    function x() {
      b.value = "", m.value = !1;
    }
    function k(M) {
      s("viewDetails", M);
    }
    function C(M) {
      confirm(`Delete environment "${M}"?

This action cannot be undone.`) && s("delete", M);
    }
    async function A() {
      w.value = !0, h.value = null;
      try {
        f.value = await i();
      } catch (M) {
        h.value = M instanceof Error ? M.message : "Failed to load environments";
      } finally {
        w.value = !1;
      }
    }
    return we(A), (M, y) => {
      const E = ao("SectionGroup");
      return o(), n(W, null, [
        v($e, null, {
          header: a(() => [
            v(Ce, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: y[1] || (y[1] = (R) => r.value = !0)
            }, {
              actions: a(() => [
                v(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: y[0] || (y[0] = (R) => m.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...y[7] || (y[7] = [
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
                v(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: A,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...y[8] || (y[8] = [
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
            v(st, {
              modelValue: u.value,
              "onUpdate:modelValue": y[2] || (y[2] = (R) => u.value = R),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            w.value ? (o(), _(We, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), _(Ge, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: A
            }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
              m.value ? (o(), n("div", ru, [
                e("div", du, [
                  y[10] || (y[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  v(j, {
                    variant: "ghost",
                    size: "xs",
                    onClick: x
                  }, {
                    default: a(() => [...y[9] || (y[9] = [
                      g(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", cu, [
                  v(ft, {
                    modelValue: b.value,
                    "onUpdate:modelValue": y[3] || (y[3] = (R) => b.value = R),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ae(z, ["enter"]),
                      Ae(x, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", uu, [
                    v(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: z,
                      disabled: !b.value.trim()
                    }, {
                      default: a(() => [...y[11] || (y[11] = [
                        g(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: x
                    }, {
                      default: a(() => [...y[12] || (y[12] = [
                        g(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              f.value.length ? (o(), _(nt, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  g(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  p.value ? (o(), n(W, { key: 0 }, [
                    y[13] || (y[13] = g(" • Current: ", -1)),
                    e("strong", null, l(p.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              $.value.length ? (o(), _(E, {
                key: 2,
                title: "ENVIRONMENTS",
                count: $.value.length
              }, {
                default: a(() => [
                  (o(!0), n(W, null, Z($.value, (R) => (o(), _(iu, {
                    key: R.name,
                    "environment-name": R.name,
                    "is-current": R.is_current,
                    "current-branch": R.current_branch,
                    "workflow-count": R.workflow_count,
                    "node-count": R.node_count,
                    "model-count": R.model_count,
                    "last-used": I(R.last_used),
                    "show-last-used": !!R.last_used
                  }, {
                    actions: a(() => [
                      R.is_current ? c("", !0) : (o(), _(j, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (P) => M.$emit("switch", R.name)
                      }, {
                        default: a(() => [...y[14] || (y[14] = [
                          g(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      v(j, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (P) => k(R.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...y[15] || (y[15] = [
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
                      !R.is_current && f.value.length > 1 ? (o(), _(j, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (P) => C(R.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", mu, [...y[16] || (y[16] = [
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
              $.value.length ? c("", !0) : (o(), _(Ne, {
                key: 3,
                icon: "🌍",
                message: u.value ? `No environments match '${u.value}'` : "No environments found. Create one to get started!"
              }, Vt({ _: 2 }, [
                u.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    v(j, {
                      variant: "primary",
                      onClick: y[4] || (y[4] = (R) => m.value = !0)
                    }, {
                      default: a(() => [...y[17] || (y[17] = [
                        g(" Create Environment ", -1)
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
        v(Fe, {
          show: r.value,
          title: "About Environments",
          onClose: y[6] || (y[6] = (R) => r.value = !1)
        }, {
          content: a(() => [...y[18] || (y[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              g(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            v(j, {
              variant: "secondary",
              onClick: y[5] || (y[5] = (R) => r.value = !1)
            }, {
              default: a(() => [...y[19] || (y[19] = [
                g(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), fu = /* @__PURE__ */ J(vu, [["__scopeId", "data-v-97d6527d"]]), gu = { class: "file-path" }, hu = { class: "file-path-text" }, pu = ["title"], yu = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = S(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, w) => (o(), n("div", gu, [
      w[0] || (w[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", hu, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, pu)) : c("", !0)
    ]));
  }
}), wu = /* @__PURE__ */ J(yu, [["__scopeId", "data-v-f0982173"]]), bu = { class: "output-path-input" }, ku = { class: "export-actions" }, _u = {
  key: 1,
  class: "export-warning"
}, $u = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = xe(), s = S(""), i = S(!1), f = S(null), w = S(!1);
    async function h() {
      i.value = !0, f.value = null;
      try {
        const r = await d(s.value || void 0);
        f.value = r;
      } catch (r) {
        f.value = {
          status: "error",
          message: r instanceof Error ? r.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function u() {
      var r;
      if ((r = f.value) != null && r.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (r, m) => (o(), n(W, null, [
      v($e, null, {
        header: a(() => [
          v(Ce, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              v(j, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = (b) => w.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...m[5] || (m[5] = [
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
          v(he, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              v(ye, { status: "synced" }, {
                icon: a(() => [...m[6] || (m[6] = [
                  g("📦", -1)
                ])]),
                title: a(() => [...m[7] || (m[7] = [
                  g("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...m[8] || (m[8] = [
                  g(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  v(ne, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  v(ne, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  v(ne, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  v(ne, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(he, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              v(ye, { status: "synced" }, {
                icon: a(() => [...m[9] || (m[9] = [
                  g("📁", -1)
                ])]),
                title: a(() => [...m[10] || (m[10] = [
                  g("Output Destination", -1)
                ])]),
                subtitle: a(() => [...m[11] || (m[11] = [
                  g(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", bu, [
                    v(ft, {
                      modelValue: s.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (b) => s.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(he, { title: "EXPORT" }, {
            default: a(() => [
              e("div", ku, [
                v(j, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: h
                }, {
                  default: a(() => [
                    m[12] || (m[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    g(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), _(j, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: m[2] || (m[2] = (b) => s.value = "")
                }, {
                  default: a(() => [...m[13] || (m[13] = [
                    g(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), _(he, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              v(ye, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: a(() => [
                  g(l(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  g(l(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  g(l(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    v(ne, { label: "Saved to:" }, {
                      default: a(() => [
                        v(wu, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), _(ne, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), n("div", _u, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: u
                    }, {
                      default: a(() => [...m[15] || (m[15] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    v(j, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = (b) => f.value = null)
                    }, {
                      default: a(() => [...m[16] || (m[16] = [
                        g(" Dismiss ", -1)
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
      v(Fe, {
        show: w.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = (b) => w.value = !1)
      }, {
        content: a(() => [...m[17] || (m[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            g(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cu = /* @__PURE__ */ J($u, [["__scopeId", "data-v-1777a9d5"]]), xu = { class: "file-input-wrapper" }, Su = ["accept", "multiple", "disabled"], Iu = /* @__PURE__ */ q({
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
    const i = s, f = S(null);
    function w() {
      var u;
      (u = f.value) == null || u.click();
    }
    function h(u) {
      const r = u.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return d({
      triggerInput: w
    }), (u, r) => (o(), n("div", xu, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Su),
      v(j, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: w
      }, {
        default: a(() => [
          ie(u.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            g(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Eu = /* @__PURE__ */ J(Iu, [["__scopeId", "data-v-cd192091"]]), zu = {
  key: 0,
  class: "drop-zone-empty"
}, Mu = { class: "drop-zone-text" }, Lu = { class: "drop-zone-primary" }, Tu = { class: "drop-zone-secondary" }, Ru = { class: "drop-zone-actions" }, Nu = {
  key: 1,
  class: "drop-zone-file"
}, Du = { class: "file-info" }, Uu = { class: "file-details" }, Ou = { class: "file-name" }, Bu = { class: "file-size" }, Pu = /* @__PURE__ */ q({
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
    const s = d, i = S(!1), f = S(null), w = S(0), h = U(() => f.value !== null), u = U(() => {
      var k;
      return ((k = f.value) == null ? void 0 : k.name) || "";
    }), r = U(() => {
      if (!f.value) return "";
      const k = f.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(k) {
      var C;
      w.value++, (C = k.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function p() {
      w.value--, w.value === 0 && (i.value = !1);
    }
    function $(k) {
      var A;
      w.value = 0, i.value = !1;
      const C = (A = k.dataTransfer) == null ? void 0 : A.files;
      C && C.length > 0 && z(C[0]);
    }
    function I(k) {
      k.length > 0 && z(k[0]);
    }
    function z(k) {
      f.value = k, s("fileSelected", k);
    }
    function x() {
      f.value = null, s("clear");
    }
    return (k, C) => (o(), n("div", {
      class: ee(["file-drop-zone", { "drop-active": i.value, "has-file": h.value }]),
      onDragenter: pe(m, ["prevent"]),
      onDragover: pe(b, ["prevent"]),
      onDragleave: pe(p, ["prevent"]),
      onDrop: pe($, ["prevent"])
    }, [
      h.value ? (o(), n("div", Nu, [
        e("div", Du, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Uu, [
            e("div", Ou, l(u.value), 1),
            e("div", Bu, l(r.value), 1)
          ])
        ]),
        v(j, {
          variant: "ghost",
          size: "xs",
          onClick: x,
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
      ])) : (o(), n("div", zu, [
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
        e("div", Mu, [
          e("p", Lu, l(t.primaryText), 1),
          e("p", Tu, l(t.secondaryText), 1)
        ]),
        e("div", Ru, [
          v(Eu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: I
          }, {
            default: a(() => [
              g(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Vu = /* @__PURE__ */ J(Pu, [["__scopeId", "data-v-e00abbca"]]), Au = { class: "import-preview" }, Fu = { class: "preview-header" }, Wu = {
  key: 0,
  class: "source-env"
}, Gu = { class: "preview-content" }, ju = { class: "preview-section" }, Hu = { class: "section-header" }, Ku = { class: "section-info" }, qu = { class: "section-count" }, Ju = {
  key: 0,
  class: "item-list"
}, Xu = { class: "item-name" }, Yu = {
  key: 0,
  class: "item-more"
}, Qu = { class: "preview-section" }, Zu = { class: "section-header" }, em = { class: "section-info" }, tm = { class: "section-count" }, om = {
  key: 0,
  class: "item-list"
}, sm = { class: "item-details" }, nm = { class: "item-name" }, am = { class: "item-meta" }, lm = {
  key: 0,
  class: "item-more"
}, im = { class: "preview-section" }, rm = { class: "section-header" }, dm = { class: "section-info" }, cm = { class: "section-count" }, um = {
  key: 0,
  class: "item-list"
}, mm = { class: "item-name" }, vm = {
  key: 0,
  class: "item-more"
}, fm = {
  key: 0,
  class: "preview-section"
}, gm = { class: "git-info" }, hm = /* @__PURE__ */ q({
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
    const d = t, s = U(() => d.workflows.length), i = U(() => d.models.length), f = U(() => d.nodes.length);
    function w(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, u) => (o(), n("div", Au, [
      e("div", Fu, [
        v(Ie, null, {
          default: a(() => [...u[0] || (u[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Wu, [
          u[1] || (u[1] = g(" From: ", -1)),
          v(xt, null, {
            default: a(() => [
              g(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Gu, [
        e("div", ju, [
          e("div", Hu, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Ku, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", qu, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Ju, [
            (o(!0), n(W, null, Z(t.workflows.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Xu, l(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Yu, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Qu, [
          e("div", Zu, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", em, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", tm, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", om, [
            (o(!0), n(W, null, Z(t.models.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", sm, [
                e("span", nm, l(r.filename), 1),
                e("span", am, l(w(r.size)) + " • " + l(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", lm, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", im, [
          e("div", rm, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", dm, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", cm, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", um, [
            (o(!0), n(W, null, Z(t.nodes.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", mm, l(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", vm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", fm, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", gm, [
            t.gitBranch ? (o(), _(ne, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                v(xt, null, {
                  default: a(() => [
                    g(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), _(ne, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                v(Ft, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), pm = /* @__PURE__ */ J(hm, [["__scopeId", "data-v-182fe113"]]), ym = { class: "import-options" }, wm = { class: "options-container" }, bm = { class: "option-section" }, km = { class: "conflict-options" }, _m = ["value", "checked", "onChange"], $m = { class: "conflict-content" }, Cm = { class: "conflict-label" }, xm = { class: "conflict-description" }, Sm = { class: "option-section" }, Im = { class: "component-toggles" }, Em = /* @__PURE__ */ q({
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
    return (f, w) => (o(), n("div", ym, [
      v(Ie, null, {
        default: a(() => [...w[4] || (w[4] = [
          g("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", wm, [
        e("div", bm, [
          v(Ct, null, {
            default: a(() => [...w[5] || (w[5] = [
              g("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", km, [
            (o(), n(W, null, Z(i, (h) => e("label", {
              key: h.value,
              class: ee(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (u) => s("update:conflictMode", h.value)
              }, null, 40, _m),
              e("div", $m, [
                e("span", Cm, l(h.label), 1),
                e("span", xm, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Sm, [
          v(Ct, null, {
            default: a(() => [...w[6] || (w[6] = [
              g("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Im, [
            v(Ve, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": w[0] || (w[0] = (h) => s("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Ve, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": w[1] || (w[1] = (h) => s("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Ve, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": w[2] || (w[2] = (h) => s("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Ve, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": w[3] || (w[3] = (h) => s("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), zm = /* @__PURE__ */ J(Em, [["__scopeId", "data-v-0ec212b0"]]), Mm = {
  key: 0,
  class: "import-empty"
}, Lm = { class: "import-help" }, Tm = {
  key: 1,
  class: "import-configure"
}, Rm = { class: "selected-file-bar" }, Nm = { class: "file-bar-content" }, Dm = { class: "file-bar-info" }, Um = { class: "file-bar-name" }, Om = { class: "file-bar-size" }, Bm = { class: "import-actions" }, Pm = {
  key: 2,
  class: "import-progress"
}, Vm = { class: "progress-content" }, Am = { class: "progress-info" }, Fm = { class: "progress-title" }, Wm = { class: "progress-detail" }, Gm = { class: "progress-bar" }, jm = { class: "progress-status" }, Hm = {
  key: 3,
  class: "import-complete"
}, Km = { class: "complete-message" }, qm = { class: "complete-title" }, Jm = { class: "complete-details" }, Xm = { class: "complete-actions" }, Ym = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const d = S(null), s = S(!1), i = S(!1), f = S(!1), w = S(""), h = S({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), u = S({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), r = S({
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
    }), m = U(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function b(x) {
      d.value = x;
    }
    function p() {
      d.value = null, i.value = !1, f.value = !1, w.value = "";
    }
    function $() {
      p(), s.value = !1, u.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function I() {
      if (d.value) {
        s.value = !0, i.value = !1;
        try {
          const x = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${r.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${r.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${r.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of x)
            u.value = k, await new Promise((C) => setTimeout(C, 800));
          u.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), f.value = !0, w.value = `Successfully imported ${r.value.workflows.length} workflows, ${r.value.models.length} models, and ${r.value.nodes.length} custom nodes.`;
        } catch (x) {
          f.value = !1, w.value = x instanceof Error ? x.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function z(x) {
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (x, k) => (o(), _($e, null, {
      header: a(() => [
        v(Ce, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", Mm, [
          v(Vu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Lm, [
            v(Ie, null, {
              default: a(() => [...k[5] || (k[5] = [
                g("How to Import", -1)
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
        ])) : d.value && !s.value && !i.value ? (o(), n("div", Tm, [
          e("div", Rm, [
            e("div", Nm, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Dm, [
                e("div", Um, l(d.value.name), 1),
                e("div", Om, l(z(d.value.size)), 1)
              ])
            ]),
            v(j, {
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: a(() => [...k[8] || (k[8] = [
                g(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          v(pm, {
            "source-environment": r.value.sourceEnvironment,
            workflows: r.value.workflows,
            models: r.value.models,
            nodes: r.value.nodes,
            "git-branch": r.value.gitBranch,
            "git-commit": r.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          v(zm, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (C) => h.value.conflictMode = C),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (C) => h.value.includeWorkflows = C),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (C) => h.value.includeModels = C),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (C) => h.value.includeNodes = C),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (C) => h.value.includeGitHistory = C)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && r.value.models.length > 0 ? (o(), _(Je, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${r.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Bm, [
            v(j, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
              onClick: I
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
                g(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            v(j, {
              variant: "secondary",
              size: "md",
              onClick: p
            }, {
              default: a(() => [...k[10] || (k[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Pm, [
          e("div", Vm, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Am, [
              e("div", Fm, l(u.value.message), 1),
              e("div", Wm, l(u.value.detail), 1)
            ])
          ]),
          e("div", Gm, [
            e("div", {
              class: "progress-bar-fill",
              style: Ye({ width: `${u.value.percent}%` })
            }, null, 4)
          ]),
          e("div", jm, l(u.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Hm, [
          e("div", {
            class: ee(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", Km, [
            e("div", qm, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Jm, l(w.value), 1)
          ]),
          e("div", Xm, [
            v(j, {
              variant: "primary",
              size: "md",
              onClick: $
            }, {
              default: a(() => [...k[12] || (k[12] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Qm = /* @__PURE__ */ J(Ym, [["__scopeId", "data-v-18e18eb5"]]), Zm = { class: "header-info" }, ev = { class: "commit-hash" }, tv = {
  key: 0,
  class: "commit-refs"
}, ov = { class: "commit-message" }, sv = { class: "commit-date" }, nv = {
  key: 0,
  class: "loading"
}, av = {
  key: 1,
  class: "changes-section"
}, lv = { class: "stats-row" }, iv = { class: "stat" }, rv = { class: "stat insertions" }, dv = { class: "stat deletions" }, cv = {
  key: 0,
  class: "change-group"
}, uv = {
  key: 1,
  class: "change-group"
}, mv = {
  key: 0,
  class: "version"
}, vv = {
  key: 2,
  class: "change-group"
}, fv = { class: "change-item" }, gv = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = xe(), i = S(null), f = S(!0), w = U(() => {
      if (!i.value) return !1;
      const u = i.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), h = U(() => {
      if (!i.value) return !1;
      const u = i.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return we(async () => {
      try {
        i.value = await s(d.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (u, r) => (o(), _(yt, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (m) => u.$emit("close"))
    }, {
      header: a(() => {
        var m, b, p, $;
        return [
          e("div", Zm, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", ev, l(((m = i.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            ($ = (p = i.value) == null ? void 0 : p.refs) != null && $.length ? (o(), n("span", tv, [
              (o(!0), n(W, null, Z(i.value.refs, (I) => (o(), n("span", {
                key: I,
                class: "ref-badge"
              }, l(I), 1))), 128))
            ])) : c("", !0)
          ]),
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (I) => u.$emit("close"))
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
        var m, b;
        return [
          e("div", ov, l(((m = i.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", sv, l(((b = i.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), n("div", nv, "Loading details...")) : i.value ? (o(), n("div", av, [
            e("div", lv, [
              e("span", iv, l(i.value.stats.files_changed) + " files", 1),
              e("span", rv, "+" + l(i.value.stats.insertions), 1),
              e("span", dv, "-" + l(i.value.stats.deletions), 1)
            ]),
            w.value ? (o(), n("div", cv, [
              v(ut, { variant: "section" }, {
                default: a(() => [...r[6] || (r[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, Z(i.value.changes.workflows.added, (p) => (o(), n("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(W, null, Z(i.value.changes.workflows.modified, (p) => (o(), n("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(W, null, Z(i.value.changes.workflows.deleted, (p) => (o(), n("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), n("div", uv, [
              v(ut, { variant: "section" }, {
                default: a(() => [...r[10] || (r[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, Z(i.value.changes.nodes.added, (p) => (o(), n("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p.name), 1),
                p.version ? (o(), n("span", mv, "(" + l(p.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(W, null, Z(i.value.changes.nodes.removed, (p) => (o(), n("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p.name), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", vv, [
              v(ut, { variant: "section" }, {
                default: a(() => [...r[13] || (r[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", fv, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        v(le, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (m) => u.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...r[15] || (r[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        v(le, {
          variant: "primary",
          onClick: r[2] || (r[2] = (m) => u.$emit("checkout", t.commit))
        }, {
          default: a(() => [...r[16] || (r[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), hv = /* @__PURE__ */ J(gv, [["__scopeId", "data-v-d256ff6d"]]), pv = { class: "dialog-message" }, yv = {
  key: 0,
  class: "dialog-details"
}, wv = {
  key: 1,
  class: "dialog-warning"
}, bv = /* @__PURE__ */ q({
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
    return (d, s) => (o(), _(yt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", pv, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", yv, [
          (o(!0), n(W, null, Z(t.details, (i, f) => (o(), n("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", wv, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        v(le, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => d.$emit("cancel"))
        }, {
          default: a(() => [
            g(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), _(le, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => d.$emit("secondary"))
        }, {
          default: a(() => [
            g(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        v(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
        }, {
          default: a(() => [
            g(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), kv = /* @__PURE__ */ J(bv, [["__scopeId", "data-v-3670b9f5"]]), _v = { class: "base-textarea-wrapper" }, $v = ["value", "rows", "placeholder", "disabled", "maxlength"], Cv = {
  key: 0,
  class: "base-textarea-count"
}, xv = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", _v, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ae(pe((i) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ae(pe((i) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, $v),
      t.showCharCount && t.maxLength ? (o(), n("div", Cv, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Dt = /* @__PURE__ */ J(xv, [["__scopeId", "data-v-5516e6fc"]]), Sv = ["checked", "disabled"], Iv = { class: "base-checkbox-box" }, Ev = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, zv = {
  key: 0,
  class: "base-checkbox-label"
}, Mv = /* @__PURE__ */ q({
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
      }, null, 40, Sv),
      e("span", Iv, [
        t.modelValue ? (o(), n("svg", Ev, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", zv, [
        ie(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ J(Mv, [["__scopeId", "data-v-bf17c831"]]), Lv = { class: "popover-header" }, Tv = { class: "popover-body" }, Rv = {
  key: 0,
  class: "changes-summary"
}, Nv = {
  key: 0,
  class: "change-item"
}, Dv = {
  key: 1,
  class: "change-item"
}, Uv = {
  key: 2,
  class: "change-item"
}, Ov = {
  key: 3,
  class: "change-item"
}, Bv = {
  key: 4,
  class: "change-item"
}, Pv = {
  key: 1,
  class: "no-changes"
}, Vv = {
  key: 2,
  class: "loading"
}, Av = {
  key: 3,
  class: "issues-warning"
}, Fv = { class: "warning-header" }, Wv = { class: "warning-title" }, Gv = { class: "issues-list" }, jv = { class: "message-section" }, Hv = { class: "popover-footer" }, Kv = {
  key: 1,
  class: "commit-popover"
}, qv = { class: "popover-header" }, Jv = { class: "popover-body" }, Xv = {
  key: 0,
  class: "changes-summary"
}, Yv = {
  key: 0,
  class: "change-item"
}, Qv = {
  key: 1,
  class: "change-item"
}, Zv = {
  key: 2,
  class: "change-item"
}, ef = {
  key: 3,
  class: "change-item"
}, tf = {
  key: 4,
  class: "change-item"
}, of = {
  key: 1,
  class: "no-changes"
}, sf = {
  key: 2,
  class: "loading"
}, nf = {
  key: 3,
  class: "issues-warning"
}, af = { class: "warning-header" }, lf = { class: "warning-title" }, rf = { class: "issues-list" }, df = { class: "message-section" }, cf = { class: "popover-footer" }, uf = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, i = d, { commit: f } = xe(), w = S(""), h = S(!1), u = S(!1), r = S(null), m = U(() => {
      if (!s.status) return !1;
      const z = s.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || s.status.has_changes;
    }), b = U(() => {
      var z;
      return (z = s.status) != null && z.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), p = U(() => b.value.length > 0), $ = U(() => p.value && !u.value);
    async function I() {
      var z, x, k;
      if (!(p.value && !u.value) && !(!m.value || !w.value.trim() || h.value)) {
        h.value = !0, r.value = null;
        try {
          const C = await f(w.value.trim(), u.value);
          C.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((z = C.summary) == null ? void 0 : z.new) || 0} new, ${((x = C.summary) == null ? void 0 : x.modified) || 0} modified, ${((k = C.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, w.value = "", u.value = !1, setTimeout(() => i("committed"), 1e3)) : C.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : C.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: C.message || "Commit failed" };
        } catch (C) {
          r.value = { type: "error", message: C instanceof Error ? C.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (z, x) => t.asModal ? (o(), _(ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (k) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Lv, [
            x[11] || (x[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (k) => i("close"))
            }, [...x[10] || (x[10] = [
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
          e("div", Tv, [
            t.status && m.value ? (o(), n("div", Rv, [
              t.status.workflows.new.length ? (o(), n("div", Nv, [
                x[12] || (x[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", Dv, [
                x[13] || (x[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Uv, [
                x[14] || (x[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Ov, [
                x[15] || (x[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Bv, [
                x[16] || (x[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", Pv, " No changes to commit ")) : (o(), n("div", Vv, " Loading... ")),
            p.value ? (o(), n("div", Av, [
              e("div", Fv, [
                x[17] || (x[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Wv, l(b.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Gv, [
                (o(!0), n(W, null, Z(b.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  g(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              v(Ut, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (k) => u.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...x[18] || (x[18] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", jv, [
              v(Dt, {
                modelValue: w.value,
                "onUpdate:modelValue": x[2] || (x[2] = (k) => w.value = k),
                placeholder: $.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || h.value || $.value,
                rows: 3,
                onCtrlEnter: I
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (o(), n("div", {
              key: 4,
              class: ee(["result", r.value.type])
            }, l(r.value.message), 3)) : c("", !0)
          ]),
          e("div", Hv, [
            v(le, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (k) => i("close"))
            }, {
              default: a(() => [...x[19] || (x[19] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: u.value ? "danger" : "primary",
              disabled: !m.value || !w.value.trim() || h.value || $.value,
              loading: h.value,
              onClick: I
            }, {
              default: a(() => [
                g(l(h.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Kv, [
      e("div", qv, [
        x[21] || (x[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (k) => i("close"))
        }, [...x[20] || (x[20] = [
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
      e("div", Jv, [
        t.status && m.value ? (o(), n("div", Xv, [
          t.status.workflows.new.length ? (o(), n("div", Yv, [
            x[22] || (x[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Qv, [
            x[23] || (x[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", Zv, [
            x[24] || (x[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", ef, [
            x[25] || (x[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", tf, [
            x[26] || (x[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", of, " No changes to commit ")) : (o(), n("div", sf, " Loading... ")),
        p.value ? (o(), n("div", nf, [
          e("div", af, [
            x[27] || (x[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", lf, l(b.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", rf, [
            (o(!0), n(W, null, Z(b.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              g(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          v(Ut, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = (k) => u.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...x[28] || (x[28] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", df, [
          v(Dt, {
            modelValue: w.value,
            "onUpdate:modelValue": x[8] || (x[8] = (k) => w.value = k),
            placeholder: $.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value || $.value,
            rows: 3,
            onCtrlEnter: I
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (o(), n("div", {
          key: 4,
          class: ee(["result", r.value.type])
        }, l(r.value.message), 3)) : c("", !0)
      ]),
      e("div", cf, [
        v(le, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (k) => i("close"))
        }, {
          default: a(() => [...x[29] || (x[29] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v(le, {
          variant: u.value ? "danger" : "primary",
          disabled: !m.value || !w.value.trim() || h.value || $.value,
          loading: h.value,
          onClick: I
        }, {
          default: a(() => [
            g(l(h.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), jt = /* @__PURE__ */ J(uf, [["__scopeId", "data-v-38b45183"]]), mf = { class: "modal-header" }, vf = { class: "modal-body" }, ff = { class: "switch-message" }, gf = { class: "switch-details" }, hf = { class: "modal-actions" }, pf = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", mf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", vf, [
            e("p", ff, [
              s[6] || (s[6] = g(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = g(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = g("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", gf, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", hf, [
            v(j, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(j, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                g(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), yf = /* @__PURE__ */ J(pf, [["__scopeId", "data-v-e9c5253e"]]), wf = { class: "progress-bar" }, bf = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = U(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (i, f) => (o(), n("div", wf, [
      e("div", {
        class: ee(["progress-fill", t.variant]),
        style: Ye({ width: s.value })
      }, null, 6)
    ]));
  }
}), kf = /* @__PURE__ */ J(bf, [["__scopeId", "data-v-1beb0512"]]), _f = {
  key: 0,
  class: "modal-overlay"
}, $f = { class: "modal-content" }, Cf = { class: "modal-body" }, xf = { class: "progress-info" }, Sf = { class: "progress-percentage" }, If = { class: "progress-state" }, Ef = { class: "switch-steps" }, zf = { class: "step-icon" }, Mf = { class: "step-label" }, Lf = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = U(() => {
      const w = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return d.message || w[d.state] || d.state;
    }), i = U(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), f = U(() => {
      const w = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = w.findIndex((u) => u.state === d.state);
      return w.map((u, r) => {
        let m = "pending", b = "○";
        return r < h ? (m = "completed", b = "✓") : r === h && (m = "active", b = "⟳"), {
          ...u,
          status: m,
          icon: b
        };
      });
    });
    return (w, h) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), n("div", _f, [
        e("div", $f, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Cf, [
            v(kf, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", xf, [
              e("div", Sf, l(t.progress) + "%", 1),
              e("div", If, l(s.value), 1)
            ]),
            e("div", Ef, [
              (o(!0), n(W, null, Z(f.value, (u) => (o(), n("div", {
                key: u.state,
                class: ee(["switch-step", u.status])
              }, [
                e("span", zf, l(u.icon), 1),
                e("span", Mf, l(u.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Tf = /* @__PURE__ */ J(Lf, [["__scopeId", "data-v-768a5078"]]), Rf = { class: "modal-header" }, Nf = { class: "modal-body" }, Df = {
  key: 0,
  class: "node-section"
}, Uf = { class: "node-list" }, Of = {
  key: 1,
  class: "node-section"
}, Bf = { class: "node-list" }, Pf = { class: "modal-actions" }, Vf = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Rf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Nf, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Df, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Uf, [
                (o(!0), n(W, null, Z(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", Of, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Bf, [
                (o(!0), n(W, null, Z(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
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
          e("div", Pf, [
            v(j, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(j, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                g(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Af = /* @__PURE__ */ J(Vf, [["__scopeId", "data-v-7cad7518"]]);
async function it(t, d = {}, s = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), s);
  try {
    const w = await fetch(t, {
      ...d,
      signal: i.signal
    });
    return clearTimeout(f), w;
  } catch (w) {
    throw clearTimeout(f), w.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : w;
  }
}
function Ff() {
  const t = S(null);
  async function d() {
    try {
      const h = await it(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (h.ok)
        return (await h.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await it(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await it(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Failed to get status");
      return await h.json();
    } catch {
      return null;
    }
  }
  async function f() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await it(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function w() {
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
    restart: f,
    kill: w
  };
}
const Wf = { class: "comfygit-panel" }, Gf = { class: "panel-header" }, jf = { class: "header-left" }, Hf = {
  key: 0,
  class: "header-info"
}, Kf = { class: "header-actions" }, qf = { class: "env-switcher" }, Jf = {
  key: 0,
  class: "header-info"
}, Xf = { class: "branch-name" }, Yf = { class: "panel-main" }, Qf = { class: "sidebar" }, Zf = { class: "sidebar-section" }, eg = { class: "sidebar-section" }, tg = { class: "sidebar-section" }, og = { class: "content-area" }, sg = {
  key: 0,
  class: "error-message"
}, ng = {
  key: 1,
  class: "loading"
}, ag = { class: "dialog-content env-selector-dialog" }, lg = { class: "dialog-header" }, ig = { class: "dialog-body" }, rg = { class: "env-list" }, dg = { class: "env-info" }, cg = { class: "env-name-row" }, ug = { class: "env-indicator" }, mg = { class: "env-name" }, vg = {
  key: 0,
  class: "env-branch"
}, fg = {
  key: 1,
  class: "current-label"
}, gg = { class: "env-stats" }, hg = ["onClick"], pg = { class: "toast-container" }, yg = { class: "toast-icon" }, wg = { class: "toast-message" }, bg = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: i,
      getHistory: f,
      getBranches: w,
      checkout: h,
      createBranch: u,
      switchBranch: r,
      getEnvironments: m,
      switchEnvironment: b,
      getSwitchProgress: p,
      syncEnvironmentManually: $
    } = xe(), I = Ff(), z = S(null), x = S([]), k = S([]), C = S([]), A = U(() => C.value.find((F) => F.is_current)), M = S(!1), y = S(null), E = S(null), R = S(!1), P = S(!1), L = S(!1), N = S(""), O = S({ state: "idle", progress: 0, message: "" });
    let K = null, G = null;
    const D = S("status"), X = S("this-env");
    function V(F, T) {
      D.value = F, X.value = T;
    }
    function oe(F) {
      const re = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[F];
      re && V(re.view, re.section);
    }
    function be() {
      V("branches", "this-env");
    }
    const fe = S(null), ke = S(!1), Q = S(!1), Me = S([]);
    let at = 0;
    function me(F, T = "info", re = 3e3) {
      const ge = ++at;
      return Me.value.push({ id: ge, message: F, type: T }), re > 0 && setTimeout(() => {
        Me.value = Me.value.filter((Le) => Le.id !== ge);
      }, re), ge;
    }
    function Ee(F) {
      Me.value = Me.value.filter((T) => T.id !== F);
    }
    function lt(F) {
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
    const Y = U(() => {
      if (!z.value) return "neutral";
      const F = z.value.workflows, T = F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || z.value.has_changes;
      return z.value.comparison.is_synced ? T ? "warning" : "success" : "error";
    });
    U(() => z.value ? Y.value === "success" ? "All synced" : Y.value === "warning" ? "Uncommitted changes" : Y.value === "error" ? "Not synced" : "" : "");
    async function se() {
      M.value = !0, y.value = null;
      try {
        const [F, T, re, ge] = await Promise.all([
          i(),
          f(),
          w(),
          m()
        ]);
        z.value = F, x.value = T.commits, k.value = re.branches, C.value = ge, s("statusUpdate", F);
      } catch (F) {
        y.value = F instanceof Error ? F.message : "Failed to load status", z.value = null, x.value = [], k.value = [];
      } finally {
        M.value = !1;
      }
    }
    function ue(F) {
      E.value = F;
    }
    async function He(F) {
      var re;
      E.value = null;
      const T = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      fe.value = {
        title: T ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: T ? "You have uncommitted changes that will be lost." : `Checkout commit ${F.short_hash || ((re = F.hash) == null ? void 0 : re.slice(0, 7))}?`,
        details: T ? Tt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: T,
        onConfirm: async () => {
          var Te;
          fe.value = null, B();
          const ge = me(`Checking out ${F.short_hash || ((Te = F.hash) == null ? void 0 : Te.slice(0, 7))}...`, "info", 0), Le = await h(F.hash, T);
          Ee(ge), Le.status === "success" ? me("Restarting ComfyUI...", "success") : me(Le.message || "Checkout failed", "error");
        }
      };
    }
    async function Qe(F) {
      const T = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      fe.value = {
        title: T ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: T ? "You have uncommitted changes." : `Switch to branch "${F}"?`,
        details: T ? Tt() : void 0,
        warning: T ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, B();
          const re = me(`Switching to ${F}...`, "info", 0), ge = await r(F, T);
          Ee(re), ge.status === "success" ? me("Restarting ComfyUI...", "success") : me(ge.message || "Branch switch failed", "error");
        }
      };
    }
    async function bt(F) {
      const T = me(`Creating branch ${F}...`, "info", 0), re = await u(F);
      Ee(T), re.status === "success" ? (me(`Branch "${F}" created`, "success"), await se()) : me(re.message || "Failed to create branch", "error");
    }
    async function H(F) {
      E.value = null;
      const T = prompt("Enter branch name:");
      if (T) {
        const re = me(`Creating branch ${T}...`, "info", 0), ge = await u(T, F.hash);
        Ee(re), ge.status === "success" ? (me(`Branch "${T}" created from ${F.short_hash}`, "success"), await se()) : me(ge.message || "Failed to create branch", "error");
      }
    }
    function B() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function te(F) {
      R.value = !1, N.value = F, P.value = !0;
    }
    async function ve() {
      P.value = !1, L.value = !0, B(), O.value = {
        progress: 10,
        state: _e(10),
        message: De(10)
      };
      try {
        await b(N.value), Ke(), gt();
      } catch (F) {
        Ue(), L.value = !1, me(`Failed to initiate switch: ${F instanceof Error ? F.message : "Unknown error"}`, "error"), O.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function _e(F) {
      return F >= 100 ? "complete" : F >= 80 ? "validating" : F >= 60 ? "starting" : F >= 30 ? "syncing" : "preparing";
    }
    function De(F) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[_e(F)] || "";
    }
    function Ke() {
      if (G) return;
      let F = 10;
      const T = 60, re = 5e3, ge = 100, Le = (T - F) / (re / ge);
      G = window.setInterval(() => {
        if (F += Le, F >= T && (F = T, Ue()), O.value.progress < T) {
          const Te = Math.floor(F);
          O.value = {
            progress: Te,
            state: _e(Te),
            message: De(Te)
          };
        }
      }, ge);
    }
    function Ue() {
      G && (clearInterval(G), G = null);
    }
    function gt() {
      K || (K = window.setInterval(async () => {
        try {
          let F = await I.getStatus();
          if ((!F || F.state === "idle") && (F = await p()), !F)
            return;
          const T = F.progress || 0;
          T >= 60 && Ue();
          const re = Math.max(T, O.value.progress), ge = F.state && F.state !== "idle" && F.state !== "unknown", Le = ge ? F.state : _e(re), Te = ge && F.message || De(re);
          O.value = {
            state: Le,
            progress: re,
            message: Te
          }, F.state === "complete" ? (Ue(), Ze(), L.value = !1, me(`✓ Switched to ${N.value}`, "success"), await se(), N.value = "") : F.state === "rolled_back" ? (Ue(), Ze(), L.value = !1, me("Switch failed, restored previous environment", "warning"), N.value = "") : F.state === "critical_failure" && (Ue(), Ze(), L.value = !1, me(`Critical error during switch: ${F.message}`, "error"), N.value = "");
        } catch (F) {
          console.error("Failed to poll switch progress:", F);
        }
      }, 1e3));
    }
    function Ze() {
      Ue(), K && (clearInterval(K), K = null);
    }
    function Xt() {
      P.value = !1, N.value = "";
    }
    async function Yt() {
      ke.value = !1, await se(), me("✓ Changes committed", "success");
    }
    async function Qt() {
      Q.value = !1;
      const F = me("Syncing environment...", "info", 0);
      try {
        const T = await $("skip", !0);
        if (Ee(F), T.status === "success") {
          const re = [];
          T.nodes_installed.length && re.push(`${T.nodes_installed.length} installed`), T.nodes_removed.length && re.push(`${T.nodes_removed.length} removed`);
          const ge = re.length ? `: ${re.join(", ")}` : "";
          me(`✓ Environment synced${ge}`, "success"), await se();
        } else {
          const re = T.errors.length ? T.errors.join("; ") : T.message;
          me(`Sync failed: ${re}`, "error");
        }
      } catch (T) {
        Ee(F), me(`Sync error: ${T instanceof Error ? T.message : "Unknown error"}`, "error");
      }
    }
    async function Zt(F) {
      const T = me(`Creating environment "${F}"...`, "info", 0);
      Ee(T), me("Environment creation not yet implemented", "warning");
    }
    async function eo(F) {
      const T = me(`Deleting environment "${F}"...`, "info", 0);
      Ee(T), me("Environment deletion not yet implemented", "warning");
    }
    function to(F) {
      me(`Viewing details for "${F}"`, "info"), V("models-env", "this-env");
    }
    function Tt() {
      if (!z.value) return [];
      const F = [], T = z.value.workflows;
      return T.new.length && F.push(`${T.new.length} new workflow(s)`), T.modified.length && F.push(`${T.modified.length} modified workflow(s)`), T.deleted.length && F.push(`${T.deleted.length} deleted workflow(s)`), F;
    }
    return we(se), (F, T) => {
      var re, ge, Le, Te;
      return o(), n("div", Wf, [
        e("div", Gf, [
          e("div", jf, [
            T[27] || (T[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            z.value ? (o(), n("div", Hf)) : c("", !0)
          ]),
          e("div", Kf, [
            e("button", {
              class: ee(["icon-btn", { spinning: M.value }]),
              onClick: se,
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
        e("div", qf, [
          T[31] || (T[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: T[1] || (T[1] = (ae) => V("environments", "all-envs"))
          }, [
            z.value ? (o(), n("div", Jf, [
              e("span", null, l(((re = A.value) == null ? void 0 : re.name) || ((ge = z.value) == null ? void 0 : ge.environment) || "Loading..."), 1),
              e("span", Xf, "(" + l(z.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            T[30] || (T[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Yf, [
          e("div", Qf, [
            e("div", Zf, [
              T[32] || (T[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "status" && X.value === "this-env" }]),
                onClick: T[2] || (T[2] = (ae) => V("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "workflows" }]),
                onClick: T[3] || (T[3] = (ae) => V("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "models-env" }]),
                onClick: T[4] || (T[4] = (ae) => V("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "branches" }]),
                onClick: T[5] || (T[5] = (ae) => V("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "history" }]),
                onClick: T[6] || (T[6] = (ae) => V("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "nodes" }]),
                onClick: T[7] || (T[7] = (ae) => V("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "debug-env" }]),
                onClick: T[8] || (T[8] = (ae) => V("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            T[35] || (T[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", eg, [
              T[33] || (T[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "environments" }]),
                onClick: T[9] || (T[9] = (ae) => V("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "model-index" }]),
                onClick: T[10] || (T[10] = (ae) => V("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "settings" }]),
                onClick: T[11] || (T[11] = (ae) => V("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "debug-workspace" }]),
                onClick: T[12] || (T[12] = (ae) => V("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            T[36] || (T[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", tg, [
              T[34] || (T[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "export" }]),
                onClick: T[13] || (T[13] = (ae) => V("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "import" }]),
                onClick: T[14] || (T[14] = (ae) => V("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: D.value === "remotes" }]),
                onClick: T[15] || (T[15] = (ae) => V("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", og, [
            y.value ? (o(), n("div", sg, l(y.value), 1)) : !z.value && D.value === "status" ? (o(), n("div", ng, " Loading status... ")) : (o(), n(W, { key: 2 }, [
              D.value === "status" ? (o(), _(Bn, {
                key: 0,
                status: z.value,
                onSwitchBranch: be,
                onCommitChanges: T[16] || (T[16] = (ae) => ke.value = !0),
                onSyncEnvironment: T[17] || (T[17] = (ae) => Q.value = !0),
                onViewWorkflows: T[18] || (T[18] = (ae) => V("workflows", "this-env")),
                onViewHistory: T[19] || (T[19] = (ae) => V("history", "this-env")),
                onViewDebug: T[20] || (T[20] = (ae) => V("debug-env", "this-env"))
              }, null, 8, ["status"])) : D.value === "workflows" ? (o(), _(Kd, {
                key: 1,
                onRefresh: se
              })) : D.value === "models-env" ? (o(), _(Xd, {
                key: 2,
                onNavigate: oe
              })) : D.value === "branches" ? (o(), _(Zn, {
                key: 3,
                branches: k.value,
                current: ((Le = z.value) == null ? void 0 : Le.branch) || null,
                onSwitch: Qe,
                onCreate: bt
              }, null, 8, ["branches", "current"])) : D.value === "history" ? (o(), _(ca, {
                key: 4,
                commits: x.value,
                onSelect: ue,
                onCheckout: He
              }, null, 8, ["commits"])) : D.value === "nodes" ? (o(), _(sc, { key: 5 })) : D.value === "debug-env" ? (o(), _(ou, { key: 6 })) : D.value === "environments" ? (o(), _(fu, {
                key: 7,
                onSwitch: te,
                onCreate: Zt,
                onDelete: eo,
                onViewDetails: to
              })) : D.value === "model-index" ? (o(), _(Qd, { key: 8 })) : D.value === "settings" ? (o(), _(Qc, { key: 9 })) : D.value === "debug-workspace" ? (o(), _(eu, { key: 10 })) : D.value === "export" ? (o(), _(Cu, { key: 11 })) : D.value === "import" ? (o(), _(Qm, { key: 12 })) : D.value === "remotes" ? (o(), _(Rc, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        E.value ? (o(), _(hv, {
          key: 0,
          commit: E.value,
          onClose: T[21] || (T[21] = (ae) => E.value = null),
          onCheckout: He,
          onCreateBranch: H
        }, null, 8, ["commit"])) : c("", !0),
        fe.value ? (o(), _(kv, {
          key: 1,
          title: fe.value.title,
          message: fe.value.message,
          details: fe.value.details,
          warning: fe.value.warning,
          confirmLabel: fe.value.confirmLabel,
          cancelLabel: fe.value.cancelLabel,
          secondaryLabel: fe.value.secondaryLabel,
          secondaryAction: fe.value.secondaryAction,
          destructive: fe.value.destructive,
          onConfirm: fe.value.onConfirm,
          onCancel: T[22] || (T[22] = (ae) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        v(yf, {
          show: P.value,
          "from-environment": ((Te = A.value) == null ? void 0 : Te.name) || "unknown",
          "to-environment": N.value,
          onConfirm: ve,
          onClose: Xt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ke.value && z.value ? (o(), _(jt, {
          key: 2,
          status: z.value,
          "as-modal": !0,
          onClose: T[23] || (T[23] = (ae) => ke.value = !1),
          onCommitted: Yt
        }, null, 8, ["status"])) : c("", !0),
        Q.value && z.value ? (o(), _(Af, {
          key: 3,
          show: Q.value,
          "mismatch-details": {
            missing_nodes: z.value.comparison.missing_nodes,
            extra_nodes: z.value.comparison.extra_nodes
          },
          onConfirm: Qt,
          onClose: T[24] || (T[24] = (ae) => Q.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        v(Tf, {
          show: L.value,
          state: O.value.state,
          progress: O.value.progress,
          message: O.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        R.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: T[26] || (T[26] = pe((ae) => R.value = !1, ["self"]))
        }, [
          e("div", ag, [
            e("div", lg, [
              T[38] || (T[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: T[25] || (T[25] = (ae) => R.value = !1)
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
            e("div", ig, [
              T[39] || (T[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", rg, [
                (o(!0), n(W, null, Z(C.value, (ae) => (o(), n("div", {
                  key: ae.name,
                  class: ee(["env-item", { current: ae.is_current }])
                }, [
                  e("div", dg, [
                    e("div", cg, [
                      e("span", ug, l(ae.is_current ? "●" : "○"), 1),
                      e("span", mg, l(ae.name), 1),
                      ae.current_branch ? (o(), n("span", vg, "(" + l(ae.current_branch) + ")", 1)) : c("", !0),
                      ae.is_current ? (o(), n("span", fg, "CURRENT")) : c("", !0)
                    ]),
                    e("div", gg, l(ae.workflow_count) + " workflows • " + l(ae.node_count) + " nodes ", 1)
                  ]),
                  ae.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ih) => te(ae.name)
                  }, " SWITCH ", 8, hg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", pg, [
          v(lo, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(W, null, Z(Me.value, (ae) => (o(), n("div", {
                key: ae.id,
                class: ee(["toast", ae.type])
              }, [
                e("span", yg, l(lt(ae.type)), 1),
                e("span", wg, l(ae.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), kg = /* @__PURE__ */ J(bg, [["__scopeId", "data-v-d9e68767"]]), _g = { class: "item-header" }, $g = { class: "item-info" }, Cg = { class: "filename" }, xg = { class: "metadata" }, Sg = { class: "size" }, Ig = {
  key: 0,
  class: "type"
}, Eg = { class: "item-actions" }, zg = {
  key: 0,
  class: "progress-section"
}, Mg = { class: "progress-bar" }, Lg = { class: "progress-stats" }, Tg = { class: "downloaded" }, Rg = { class: "speed" }, Ng = {
  key: 0,
  class: "eta"
}, Dg = {
  key: 1,
  class: "status-msg paused"
}, Ug = {
  key: 2,
  class: "status-msg queued"
}, Og = {
  key: 3,
  class: "status-msg completed"
}, Bg = {
  key: 4,
  class: "status-msg failed"
}, Pg = {
  key: 0,
  class: "retries"
}, Vg = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function i(h) {
      if (h === 0) return "?";
      const u = h / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function w(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const u = Math.floor(h / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (h, u) => (o(), n("div", {
      class: ee(["download-item", `status-${t.item.status}`])
    }, [
      e("div", _g, [
        e("div", $g, [
          e("div", Cg, l(t.item.filename), 1),
          e("div", xg, [
            e("span", Sg, l(i(t.item.size)), 1),
            t.item.type ? (o(), n("span", Ig, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Eg, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (r) => s("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (r) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (r) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (r) => s("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", zg, [
        e("div", Mg, [
          e("div", {
            class: "progress-fill",
            style: Ye({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Lg, [
          e("span", Tg, l(i(t.item.downloaded)) + " / " + l(i(t.item.size)), 1),
          e("span", Rg, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", Ng, l(w(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", Dg, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", Ug, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", Og, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", Bg, [
        g(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", Pg, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ J(Vg, [["__scopeId", "data-v-2110df65"]]), Ag = { class: "queue-title" }, Fg = { class: "count" }, Wg = { class: "queue-actions" }, Gg = { class: "action-label" }, jg = {
  key: 0,
  class: "overall-progress"
}, Hg = { class: "progress-bar" }, Kg = {
  key: 0,
  class: "current-mini"
}, qg = { class: "filename" }, Jg = { class: "speed" }, Xg = {
  key: 1,
  class: "queue-content"
}, Yg = {
  key: 0,
  class: "section"
}, Qg = {
  key: 1,
  class: "section"
}, Zg = { class: "section-header" }, eh = { class: "section-label paused" }, th = { class: "items-list" }, oh = {
  key: 2,
  class: "section"
}, sh = { class: "section-header" }, nh = { class: "section-label" }, ah = { class: "items-list" }, lh = {
  key: 3,
  class: "section"
}, ih = { class: "section-header" }, rh = { class: "section-label" }, dh = { class: "items-list" }, ch = {
  key: 4,
  class: "section"
}, uh = { class: "section-header" }, mh = { class: "section-label failed" }, vh = { class: "items-list" }, fh = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: i,
      completedItems: f,
      failedItems: w,
      pausedItems: h,
      hasItems: u,
      activeCount: r,
      cancelDownload: m,
      retryDownload: b,
      resumeDownload: p,
      resumeAllPaused: $,
      removeItem: I,
      clearCompleted: z
    } = wt(), x = S(!1), k = U(() => {
      var E;
      if (d.items.length === 0) return 0;
      const M = f.value.length, y = ((E = s.value) == null ? void 0 : E.progress) || 0;
      return Math.round((M + y / 100) / d.items.length * 100);
    });
    function C(M) {
      m(M);
    }
    function A(M) {
      return M === 0 ? "" : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, y) => (o(), _(ze, { to: "body" }, [
      de(u) ? (o(), n("div", {
        key: 0,
        class: ee(["model-download-queue", { minimized: !x.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: y[0] || (y[0] = (E) => x.value = !x.value)
        }, [
          e("div", Ag, [
            y[4] || (y[4] = e("span", { class: "icon" }, "↓", -1)),
            y[5] || (y[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Fg, "(" + l(de(r)) + "/" + l(de(d).items.length) + ")", 1)
          ]),
          e("div", Wg, [
            e("span", Gg, l(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (o(), n("div", Xg, [
          de(s) ? (o(), n("div", Yg, [
            y[6] || (y[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            v(rt, {
              item: de(s),
              onCancel: y[1] || (y[1] = (E) => C(de(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          de(h).length > 0 ? (o(), n("div", Qg, [
            e("div", Zg, [
              e("span", eh, "Paused (" + l(de(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: y[2] || (y[2] = //@ts-ignore
                (...E) => de($) && de($)(...E))
              }, "Resume All")
            ]),
            e("div", th, [
              (o(!0), n(W, null, Z(de(h), (E) => (o(), _(rt, {
                key: E.id,
                item: E,
                onResume: (R) => de(p)(E.id),
                onRemove: (R) => de(I)(E.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          de(i).length > 0 ? (o(), n("div", oh, [
            e("div", sh, [
              e("span", nh, "Queued (" + l(de(i).length) + ")", 1)
            ]),
            e("div", ah, [
              (o(!0), n(W, null, Z(de(i), (E) => (o(), _(rt, {
                key: E.id,
                item: E,
                onCancel: (R) => C(E.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          de(f).length > 0 ? (o(), n("div", lh, [
            e("div", ih, [
              e("span", rh, "Completed (" + l(de(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: y[3] || (y[3] = //@ts-ignore
                (...E) => de(z) && de(z)(...E))
              }, "Clear")
            ]),
            e("div", dh, [
              (o(!0), n(W, null, Z(de(f).slice(0, 3), (E) => (o(), _(rt, {
                key: E.id,
                item: E,
                onRemove: (R) => de(I)(E.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          de(w).length > 0 ? (o(), n("div", ch, [
            e("div", uh, [
              e("span", mh, "Failed (" + l(de(w).length) + ")", 1)
            ]),
            e("div", vh, [
              (o(!0), n(W, null, Z(de(w), (E) => (o(), _(rt, {
                key: E.id,
                item: E,
                onRetry: (R) => de(b)(E.id),
                onRemove: (R) => de(I)(E.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", jg, [
          e("div", Hg, [
            e("div", {
              class: "progress-fill",
              style: Ye({ width: `${k.value}%` })
            }, null, 4)
          ]),
          de(s) ? (o(), n("div", Kg, [
            e("span", qg, l(de(s).filename), 1),
            e("span", Jg, l(A(de(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), gh = /* @__PURE__ */ J(fh, [["__scopeId", "data-v-152a0c0c"]]), hh = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', ph = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', yh = {
  comfy: hh,
  phosphor: ph
}, Mt = "comfy", Ht = "comfygit-theme";
let qe = null, Kt = Mt;
function wh() {
  try {
    const t = localStorage.getItem(Ht);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Mt;
}
function qt(t = Mt) {
  qe && qe.remove(), qe = document.createElement("style"), qe.id = "comfygit-theme-styles", qe.setAttribute("data-theme", t), qe.textContent = yh[t], document.head.appendChild(qe), document.body.setAttribute("data-comfygit-theme", t), Kt = t;
  try {
    localStorage.setItem(Ht, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function bh() {
  return Kt;
}
function kh(t) {
  qt(t);
}
const Lt = document.createElement("link");
Lt.rel = "stylesheet";
Lt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Lt);
const _h = wh();
qt(_h);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), kh(t);
  },
  getTheme: () => {
    const t = bh();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Re = null, Se = null, mt = null, dt = null, Ot = null;
const ot = S(null);
async function pt() {
  var t;
  if (!((t = tt) != null && t.api)) return null;
  try {
    const d = await tt.api.fetchApi("/v2/comfygit/status");
    d.ok && (ot.value = await d.json());
  } catch {
  }
}
function $h() {
  if (!ot.value) return !1;
  const t = ot.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || ot.value.has_changes;
}
function Ch() {
  Re && Re.remove(), Re = document.createElement("div"), Re.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Re.appendChild(t), Re.addEventListener("click", (i) => {
    i.target === Re && $t();
  });
  const d = (i) => {
    i.key === "Escape" && ($t(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), It({
    render: () => Et(kg, {
      onClose: $t,
      onStatusUpdate: (i) => {
        ot.value = i, vt();
      }
    })
  }).mount(t), document.body.appendChild(Re);
}
function $t() {
  Re && (Re.remove(), Re = null);
}
function xh(t) {
  ct(), Se = document.createElement("div"), Se.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Se.style.position = "fixed", Se.style.top = `${d.bottom + 8}px`, Se.style.right = `${window.innerWidth - d.right}px`, Se.style.zIndex = "10001";
  const s = (f) => {
    Se && !Se.contains(f.target) && f.target !== t && (ct(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (f) => {
    f.key === "Escape" && (ct(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), mt = It({
    render: () => Et(jt, {
      status: ot.value,
      onClose: ct,
      onCommitted: () => {
        ct(), pt().then(vt);
      }
    })
  }), mt.mount(Se), document.body.appendChild(Se);
}
function ct() {
  mt && (mt.unmount(), mt = null), Se && (Se.remove(), Se = null);
}
function Sh() {
  dt || (dt = document.createElement("div"), dt.className = "comfygit-download-queue-root", Ot = It({
    render: () => Et(gh)
  }), Ot.mount(dt), document.body.appendChild(dt), console.log("[ComfyGit] Model download queue mounted"));
}
let Pe = null;
function vt() {
  if (!Pe) return;
  const t = Pe.querySelector(".commit-indicator");
  t && (t.style.display = $h() ? "block" : "none");
}
const Jt = document.createElement("style");
Jt.textContent = `
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
document.head.appendChild(Jt);
tt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, w;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Ch, Pe = document.createElement("button"), Pe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Pe.innerHTML = 'Commit <span class="commit-indicator"></span>', Pe.title = "Quick Commit", Pe.onclick = () => xh(Pe), t.appendChild(d), t.appendChild(Pe), (w = (f = tt.menu) == null ? void 0 : f.settingsGroup) != null && w.element && (tt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Sh();
    const { loadPendingDownloads: s } = wt();
    s(), await pt(), vt(), setInterval(async () => {
      await pt(), vt();
    }, 3e4);
    const i = tt.api;
    if (i) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((m) => {
          (m.startsWith("workflow:") || m.startsWith("Comfy.OpenWorkflowsPaths:") || m.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(m);
        }), window.location.reload();
      }, u = function() {
        const m = document.createElement("div");
        m.style.cssText = `
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
        b.textContent = "Workflows updated - refresh required", m.appendChild(b);
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
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => h(), m.appendChild(p);
        const $ = document.createElement("button");
        $.textContent = "×", $.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, $.onmouseover = () => $.style.opacity = "1", $.onmouseout = () => $.style.opacity = "0.6", $.onclick = () => m.remove(), m.appendChild($), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: b, workflow_name: p } = m.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${p}`), await pt(), vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let r = !1;
      i.addEventListener("status", async (m) => {
        const b = m.detail != null;
        b && !r && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : u()), r = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
