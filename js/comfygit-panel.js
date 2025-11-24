import { app as Ae } from "../../scripts/app.js";
import { defineComponent as H, createElementBlock as n, openBlock as o, createCommentVNode as r, createElementVNode as e, renderSlot as te, createBlock as p, resolveDynamicComponent as ut, normalizeClass as Y, withCtx as a, toDisplayString as l, createVNode as d, createTextVNode as v, computed as P, Fragment as W, renderList as q, normalizeStyle as Je, ref as _, onMounted as ue, watch as bt, Teleport as Ue, withModifiers as ve, Transition as Wt, withKeys as Ee, onUnmounted as Ft, resolveComponent as Gt, createSlots as kt, TransitionGroup as Ht, createApp as $t, h as _t } from "vue";
const jt = { class: "panel-layout" }, Kt = {
  key: 0,
  class: "panel-layout-header"
}, qt = {
  key: 1,
  class: "panel-layout-search"
}, Yt = { class: "panel-layout-content" }, Jt = {
  key: 2,
  class: "panel-layout-footer"
}, Xt = /* @__PURE__ */ H({
  __name: "PanelLayout",
  setup(t) {
    return (c, s) => (o(), n("div", jt, [
      c.$slots.header ? (o(), n("div", Kt, [
        te(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (o(), n("div", qt, [
        te(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Yt, [
        te(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), n("div", Jt, [
        te(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), j = (t, c) => {
  const s = t.__vccOpts || t;
  for (const [i, g] of c)
    s[i] = g;
  return s;
}, fe = /* @__PURE__ */ j(Xt, [["__scopeId", "data-v-21565df9"]]), Qt = {
  key: 0,
  class: "panel-title-prefix"
}, Zt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, eo = /* @__PURE__ */ H({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, s) => (o(), p(ut(`h${t.level}`), {
      class: Y(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", Qt, l(t.prefix), 1)) : (o(), n("span", Zt)),
        te(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), to = /* @__PURE__ */ j(eo, [["__scopeId", "data-v-c3875efc"]]), oo = ["title"], so = ["width", "height"], ao = /* @__PURE__ */ H({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (i) => c.$emit("click"))
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
      ])], 8, so))
    ], 8, oo));
  }
}), Ct = /* @__PURE__ */ j(ao, [["__scopeId", "data-v-6fc7f16d"]]), no = { class: "header-left" }, lo = {
  key: 0,
  class: "header-actions"
}, io = /* @__PURE__ */ H({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Y(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", no, [
        d(to, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            v(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), p(Ct, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (o(), n("div", lo, [
        te(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ge = /* @__PURE__ */ j(io, [["__scopeId", "data-v-55a62cd6"]]), ro = {
  key: 0,
  class: "section-title-count"
}, co = {
  key: 1,
  class: "section-title-icon"
}, uo = /* @__PURE__ */ H({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), p(ut(`h${t.level}`), {
      class: Y(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: a(() => [
        te(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", ro, "(" + l(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (o(), n("span", co, l(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pe = /* @__PURE__ */ j(uo, [["__scopeId", "data-v-559361eb"]]), mo = { class: "status-grid" }, vo = { class: "status-grid__column" }, fo = { class: "status-grid__title" }, go = { class: "status-grid__column status-grid__column--right" }, ho = { class: "status-grid__title" }, po = /* @__PURE__ */ H({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, s) => (o(), n("div", mo, [
      e("div", vo, [
        e("h4", fo, l(t.leftTitle), 1),
        te(c.$slots, "left", {}, void 0, !0)
      ]),
      e("div", go, [
        e("h4", ho, l(t.rightTitle), 1),
        te(c.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), yo = /* @__PURE__ */ j(po, [["__scopeId", "data-v-fe556068"]]), wo = {
  key: 0,
  class: "status-item__icon"
}, bo = {
  key: 1,
  class: "status-item__count"
}, ko = { class: "status-item__label" }, $o = /* @__PURE__ */ H({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, s = P(() => `status-item--${c.variant}`);
    return (i, g) => (o(), n("div", {
      class: Y(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", wo, l(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (o(), n("span", bo, l(t.count), 1)) : r("", !0),
      e("span", ko, l(t.label), 1)
    ], 2));
  }
}), Ce = /* @__PURE__ */ j($o, [["__scopeId", "data-v-6f929183"]]), _o = { class: "issue-card__header" }, Co = { class: "issue-card__icon" }, xo = { class: "issue-card__title" }, So = {
  key: 0,
  class: "issue-card__content"
}, Eo = {
  key: 0,
  class: "issue-card__description"
}, Io = {
  key: 1,
  class: "issue-card__items"
}, zo = {
  key: 2,
  class: "issue-card__actions"
}, Lo = /* @__PURE__ */ H({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, s = P(() => `issue-card--${c.severity}`);
    return (i, g) => (o(), n("div", {
      class: Y(["issue-card", s.value])
    }, [
      e("div", _o, [
        e("span", Co, l(t.icon), 1),
        e("h4", xo, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", So, [
        t.description ? (o(), n("p", Eo, l(t.description), 1)) : r("", !0),
        te(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (o(), n("div", Io, [
        (o(!0), n(W, null, q(t.items, (h, m) => (o(), n("div", {
          key: m,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(h), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (o(), n("div", zo, [
        te(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ j(Lo, [["__scopeId", "data-v-df6aa348"]]), Mo = ["type", "disabled"], No = {
  key: 0,
  class: "spinner"
}, To = /* @__PURE__ */ H({
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
    return (c, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Y(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", No)) : r("", !0),
      t.loading ? r("", !0) : te(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Mo));
  }
}), A = /* @__PURE__ */ j(To, [["__scopeId", "data-v-772abe47"]]), Ro = { class: "empty-state" }, Bo = {
  key: 0,
  class: "empty-icon"
}, Do = { class: "empty-message" }, Uo = /* @__PURE__ */ H({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, s) => (o(), n("div", Ro, [
      t.icon ? (o(), n("div", Bo, l(t.icon), 1)) : r("", !0),
      e("p", Do, l(t.message), 1),
      t.actionLabel ? (o(), p(A, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => c.$emit("action"))
      }, {
        default: a(() => [
          v(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ j(Uo, [["__scopeId", "data-v-4466284f"]]), Vo = { class: "branch-indicator" }, Oo = { class: "branch-indicator__info" }, Ao = { class: "branch-indicator__label" }, Po = { class: "branch-indicator__name" }, Wo = {
  key: 0,
  class: "branch-indicator__remote"
}, Fo = {
  key: 0,
  class: "branch-indicator__status"
}, Go = {
  key: 0,
  class: "branch-indicator__ahead"
}, Ho = {
  key: 1,
  class: "branch-indicator__behind"
}, jo = {
  key: 1,
  class: "branch-indicator__actions"
}, Ko = /* @__PURE__ */ H({
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
    return (c, s) => (o(), n("div", Vo, [
      e("div", Oo, [
        e("span", Ao, l(t.label), 1),
        e("span", Po, l(t.branchName), 1),
        t.remote ? (o(), n("span", Wo, "@" + l(t.remote), 1)) : r("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", Fo, [
        t.commitsAhead ? (o(), n("span", Go, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : r("", !0),
        t.commitsBehind ? (o(), n("span", Ho, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : r("", !0)
      ])) : r("", !0),
      c.$slots.actions ? (o(), n("div", jo, [
        te(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), qo = /* @__PURE__ */ j(Ko, [["__scopeId", "data-v-cb8dd50e"]]), Yo = /* @__PURE__ */ H({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, s) => (o(), n("span", {
      class: Y(["detail-label"]),
      style: Je({ minWidth: t.minWidth })
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ct = /* @__PURE__ */ j(Yo, [["__scopeId", "data-v-75e9eeb8"]]), Jo = /* @__PURE__ */ H({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, s) => (o(), n("span", {
      class: Y(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), dt = /* @__PURE__ */ j(Jo, [["__scopeId", "data-v-2f186e4c"]]), Xo = { class: "detail-row" }, Qo = /* @__PURE__ */ H({
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
    return (c, s) => (o(), n("div", Xo, [
      d(ct, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          v(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), p(dt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          v(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : te(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Z = /* @__PURE__ */ j(Qo, [["__scopeId", "data-v-ef15664a"]]), Zo = { class: "modal-header" }, es = { class: "modal-body" }, ts = { class: "status-section" }, os = {
  key: 0,
  class: "status-section"
}, ss = {
  key: 0,
  class: "workflow-group"
}, as = { class: "workflow-group-header" }, ns = { class: "workflow-group-title" }, ls = { class: "workflow-list" }, is = { class: "workflow-name" }, rs = { class: "workflow-issue" }, cs = {
  key: 1,
  class: "workflow-group"
}, ds = { class: "workflow-group-header" }, us = { class: "workflow-group-title" }, ms = { class: "workflow-list" }, vs = { class: "workflow-name" }, fs = { class: "workflow-issue" }, gs = {
  key: 2,
  class: "workflow-group"
}, hs = { class: "workflow-group-header" }, ps = { class: "workflow-group-title" }, ys = { class: "workflow-list" }, ws = { class: "workflow-name" }, bs = {
  key: 3,
  class: "workflow-group"
}, ks = { class: "workflow-group-header" }, $s = { class: "workflow-group-title" }, _s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = {
  key: 4,
  class: "workflow-group"
}, Ss = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, Is = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ls = {
  key: 5,
  class: "workflow-group"
}, Ms = { class: "workflow-group-title" }, Ns = { class: "expand-icon" }, Ts = {
  key: 0,
  class: "workflow-list"
}, Rs = { class: "workflow-name" }, Bs = {
  key: 1,
  class: "status-section"
}, Ds = {
  key: 0,
  class: "change-group"
}, Us = { class: "change-group-header" }, Vs = { class: "change-group-title" }, Os = { class: "change-list" }, As = { class: "node-name" }, Ps = {
  key: 0,
  class: "dev-badge"
}, Ws = {
  key: 1,
  class: "change-group"
}, Fs = { class: "change-group-header" }, Gs = { class: "change-group-title" }, Hs = { class: "change-list" }, js = { class: "node-name" }, Ks = {
  key: 0,
  class: "dev-badge"
}, qs = {
  key: 2,
  class: "change-group"
}, Ys = { class: "change-list" }, Js = { class: "change-item" }, Xs = { class: "node-name" }, Qs = {
  key: 3,
  class: "change-group"
}, Zs = {
  key: 2,
  class: "status-section"
}, ea = {
  key: 0,
  class: "drift-item"
}, ta = { class: "drift-list" }, oa = {
  key: 0,
  class: "drift-list-more"
}, sa = {
  key: 1,
  class: "drift-item"
}, aa = { class: "drift-list" }, na = {
  key: 0,
  class: "drift-list-more"
}, la = {
  key: 2,
  class: "drift-item"
}, ia = {
  key: 3,
  class: "drift-item"
}, ra = {
  key: 3,
  class: "status-section"
}, ca = { class: "info-box" }, da = { class: "drift-list" }, ua = {
  key: 0,
  class: "drift-list-more"
}, ma = {
  key: 4,
  class: "status-section"
}, va = { class: "warning-box" }, fa = {
  key: 5,
  class: "empty-state-inline"
}, ga = { class: "modal-actions" }, ha = /* @__PURE__ */ H({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, s = _(!1);
    ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), bt(() => c.show, (C, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", C);
    }, { immediate: !0 });
    const i = P(() => {
      var C, $, R;
      return ((R = ($ = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), g = P(() => {
      var C, $, R;
      return ((R = ($ = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), h = P(() => {
      var C, $, R;
      return ((R = ($ = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : $.synced) == null ? void 0 : R.filter((b) => {
        var B, U, V;
        const I = (V = (U = (B = c.status) == null ? void 0 : B.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : V.find((E) => E.name === b);
        return !I || I.status !== "broken";
      })) || [];
    }), m = P(() => {
      var C, $, R, b, I;
      return (C = c.status) != null && C.workflows ? ((($ = c.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((R = c.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((b = c.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((I = c.status.workflows.synced) == null ? void 0 : I.length) ?? 0) > 0 : !1;
    }), f = P(() => {
      var $, R, b;
      const C = ($ = c.status) == null ? void 0 : $.git_changes;
      return C ? (((R = C.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((b = C.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || C.workflow_changes || C.has_other_changes : !1;
    }), u = P(() => {
      var C, $, R, b, I, B;
      return !m.value && !f.value && (($ = (C = c.status) == null ? void 0 : C.comparison) == null ? void 0 : $.is_synced) && (((R = c.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((B = (I = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : I.disabled_nodes) == null ? void 0 : B.length) ?? 0) === 0;
    }), y = P(() => {
      var $, R;
      const C = (R = ($ = c.status) == null ? void 0 : $.git_changes) == null ? void 0 : R.workflow_changes;
      return C ? typeof C == "number" ? C : Object.keys(C).length : 0;
    });
    function M(C) {
      return typeof C == "string" ? C : C.name;
    }
    function S(C) {
      return typeof C == "object" && C.is_development === !0;
    }
    return (C, $) => {
      var R, b, I, B, U, V, E, N, w, z, x, T, D, K, F, L, J, se, Ve, Oe, ie, _e;
      return o(), p(Ue, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[4] || ($[4] = (X) => C.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[3] || ($[3] = ve(() => {
            }, ["stop"]))
          }, [
            e("div", Zo, [
              $[5] || ($[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (X) => C.$emit("close"))
              }, "✕")
            ]),
            e("div", es, [
              e("div", ts, [
                d(pe, { level: "4" }, {
                  default: a(() => [...$[6] || ($[6] = [
                    v("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                d(Z, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              m.value ? (o(), n("div", os, [
                d(pe, { level: "4" }, {
                  default: a(() => [...$[7] || ($[7] = [
                    v("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                i.value.length ? (o(), n("div", ss, [
                  e("div", as, [
                    $[8] || ($[8] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ns, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", ls, [
                    (o(!0), n(W, null, q(i.value, (X) => (o(), n("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", is, l(X.name), 1),
                      e("span", rs, l(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                g.value.length ? (o(), n("div", cs, [
                  e("div", ds, [
                    $[9] || ($[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", us, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", ms, [
                    (o(!0), n(W, null, q(g.value, (X) => (o(), n("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", vs, l(X.name), 1),
                      e("span", fs, l(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (b = (R = t.status.workflows) == null ? void 0 : R.new) != null && b.length ? (o(), n("div", gs, [
                  e("div", hs, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", ps, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", ys, [
                    (o(!0), n(W, null, q(t.status.workflows.new, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", ws, l(X), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (B = (I = t.status.workflows) == null ? void 0 : I.modified) != null && B.length ? (o(), n("div", bs, [
                  e("div", ks, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", $s, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", _s, [
                    (o(!0), n(W, null, q(t.status.workflows.modified, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(X), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (V = (U = t.status.workflows) == null ? void 0 : U.deleted) != null && V.length ? (o(), n("div", xs, [
                  e("div", Ss, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Es, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Is, [
                    (o(!0), n(W, null, q(t.status.workflows.deleted, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", zs, l(X), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                h.value.length ? (o(), n("div", Ls, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[1] || ($[1] = (X) => s.value = !s.value)
                  }, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Ms, "SYNCED (" + l(h.value.length) + ")", 1),
                    e("span", Ns, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Ts, [
                    (o(!0), n(W, null, q(h.value, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Rs, l(X), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              f.value ? (o(), n("div", Bs, [
                d(pe, { level: "4" }, {
                  default: a(() => [...$[14] || ($[14] = [
                    v("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (E = t.status.git_changes) == null ? void 0 : E.nodes_added) != null && N.length ? (o(), n("div", Ds, [
                  e("div", Us, [
                    $[15] || ($[15] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Vs, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Os, [
                    (o(!0), n(W, null, q(t.status.git_changes.nodes_added, (X) => (o(), n("div", {
                      key: M(X),
                      class: "change-item"
                    }, [
                      e("span", As, l(M(X)), 1),
                      S(X) ? (o(), n("span", Ps, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (z = (w = t.status.git_changes) == null ? void 0 : w.nodes_removed) != null && z.length ? (o(), n("div", Ws, [
                  e("div", Fs, [
                    $[16] || ($[16] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Gs, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), n(W, null, q(t.status.git_changes.nodes_removed, (X) => (o(), n("div", {
                      key: M(X),
                      class: "change-item"
                    }, [
                      e("span", js, l(M(X)), 1),
                      S(X) ? (o(), n("span", Ks, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = t.status.git_changes) != null && x.workflow_changes ? (o(), n("div", qs, [
                  $[17] || ($[17] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Ys, [
                    e("div", Js, [
                      e("span", Xs, l(y.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (o(), n("div", Qs, [...$[18] || ($[18] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : r("", !0)
              ])) : r("", !0),
              (D = t.status.comparison) != null && D.is_synced ? r("", !0) : (o(), n("div", Zs, [
                d(pe, { level: "4" }, {
                  default: a(() => [...$[19] || ($[19] = [
                    v("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                $[20] || ($[20] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (F = (K = t.status.comparison) == null ? void 0 : K.missing_nodes) != null && F.length ? (o(), n("div", ea, [
                  d(Z, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ta, [
                    (o(!0), n(W, null, q(t.status.comparison.missing_nodes.slice(0, 10), (X) => (o(), n("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + l(X), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", oa, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (J = (L = t.status.comparison) == null ? void 0 : L.extra_nodes) != null && J.length ? (o(), n("div", sa, [
                  d(Z, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", aa, [
                    (o(!0), n(W, null, q(t.status.comparison.extra_nodes.slice(0, 10), (X) => (o(), n("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + l(X), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", na, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (Ve = (se = t.status.comparison) == null ? void 0 : se.version_mismatches) != null && Ve.length ? (o(), n("div", la, [
                  d(Z, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : r("", !0),
                (Oe = t.status.comparison) != null && Oe.packages_in_sync ? r("", !0) : (o(), n("div", ia, [
                  d(Z, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (_e = (ie = t.status.comparison) == null ? void 0 : ie.disabled_nodes) != null && _e.length ? (o(), n("div", ra, [
                d(pe, { level: "4" }, {
                  default: a(() => [...$[21] || ($[21] = [
                    v("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ca, [
                  $[22] || ($[22] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", da, [
                  (o(!0), n(W, null, q(t.status.comparison.disabled_nodes.slice(0, 10), (X) => (o(), n("div", {
                    key: X,
                    class: "drift-list-item"
                  }, " • " + l(X), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", ua, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", ma, [
                d(pe, { level: "4" }, {
                  default: a(() => [...$[23] || ($[23] = [
                    v("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", va, [
                  $[24] || ($[24] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[25] || ($[25] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              u.value ? (o(), n("div", fa, [...$[26] || ($[26] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", ga, [
              d(A, {
                variant: "secondary",
                onClick: $[2] || ($[2] = (X) => C.$emit("close"))
              }, {
                default: a(() => [...$[27] || ($[27] = [
                  v(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), ht = /* @__PURE__ */ j(ha, [["__scopeId", "data-v-c2264f66"]]), pa = { class: "health-section-header" }, ya = { style: { "margin-top": "var(--cg-space-1)" } }, wa = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, ba = /* @__PURE__ */ H({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: c }) {
    const s = t, i = _(!1), g = _(!1);
    ue(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", ht);
    });
    function h() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function m() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    const f = P(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), u = P(() => {
      const B = s.status.git_changes;
      return B.nodes_added.length > 0 || B.nodes_removed.length > 0 || B.workflow_changes || B.has_other_changes;
    }), y = P(() => f.value || u.value), M = P(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), S = P(() => s.status.git_changes.has_other_changes), C = P(() => {
      var B;
      return ((B = s.status.workflows.analyzed) == null ? void 0 : B.filter(
        (U) => U.status === "broken" && U.sync_state === "synced"
      )) || [];
    }), $ = P(() => {
      var B;
      return ((B = s.status.workflows.analyzed) == null ? void 0 : B.filter(
        (U) => U.status === "broken" && U.sync_state !== "synced"
      )) || [];
    }), R = P(() => C.value.length > 0 || $.value.length > 0), b = P(() => R.value || s.status.missing_models_count > 0 || y.value || !s.status.comparison.is_synced), I = P(() => {
      const B = [];
      return s.status.workflows.new.length > 0 && B.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && B.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && B.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && B.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && B.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${B.length > 0 ? B.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (B, U) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: U[0] || (U[0] = (V) => g.value = !0),
            onMouseleave: U[1] || (U[1] = (V) => g.value = !1)
          }, [
            e("div", pa, [
              d(pe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...U[11] || (U[11] = [
                  v(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              d(Wt, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), p(A, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: h
                  }, {
                    default: a(() => [...U[12] || (U[12] = [
                      v(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            d(yo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), p(Ce, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (o(), p(Ce, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (o(), p(Ce, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                d(Ce, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: f.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), p(Ce, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), p(Ce, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (o(), p(Ce, {
                  key: 2,
                  icon: "●",
                  count: M.value,
                  label: M.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                S.value ? (o(), p(Ce, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                u.value ? r("", !0) : (o(), p(Ce, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", ya, [
            d(qo, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                d(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: U[2] || (U[2] = (V) => B.$emit("switch-branch"))
                }, {
                  default: a(() => [...U[13] || (U[13] = [
                    v(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), p(Be, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: U[3] || (U[3] = (V) => B.$emit("create-branch"))
              }, {
                default: a(() => [...U[14] || (U[14] = [
                  v(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          b.value ? (o(), n("div", wa, [
            d(pe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...U[15] || (U[15] = [
                v(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            C.value.length > 0 ? (o(), p(Be, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${C.value.length} committed workflow${C.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: C.value.map((V) => `${V.name} — ${V.issue_summary}`)
            }, {
              actions: a(() => [
                d(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[4] || (U[4] = (V) => B.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[16] || (U[16] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : r("", !0),
            $.value.length > 0 ? (o(), p(Be, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${$.value.length} workflow${$.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: $.value.map((V) => `${V.name} — ${V.issue_summary}`)
            }, {
              actions: a(() => [
                d(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[5] || (U[5] = (V) => B.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[17] || (U[17] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : r("", !0),
            t.status.missing_models_count > 0 && !R.value ? (o(), p(Be, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                d(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[6] || (U[6] = (V) => B.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[18] || (U[18] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : r("", !0),
            y.value ? (o(), p(Be, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: I.value
            }, {
              actions: a(() => [
                d(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: m
                }, {
                  default: a(() => [...U[19] || (U[19] = [
                    v(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                d(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[7] || (U[7] = (V) => B.$emit("commit-changes"))
                }, {
                  default: a(() => [...U[20] || (U[20] = [
                    v(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : r("", !0),
            t.status.comparison.is_synced ? r("", !0) : (o(), p(Be, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                d(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: U[8] || (U[8] = (V) => B.$emit("view-debug"))
                }, {
                  default: a(() => [...U[21] || (U[21] = [
                    v(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                d(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[9] || (U[9] = (V) => B.$emit("sync-environment"))
                }, {
                  default: a(() => [...U[22] || (U[22] = [
                    v(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : r("", !0),
          !b.value && !u.value ? (o(), p(ke, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : r("", !0)
        ]),
        _: 1
      }),
      d(ht, {
        show: i.value,
        status: t.status,
        onClose: U[10] || (U[10] = (V) => i.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ka = /* @__PURE__ */ j(ba, [["__scopeId", "data-v-aabebf39"]]), $a = ["type", "value", "placeholder", "disabled"], _a = /* @__PURE__ */ H({
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
  setup(t, { expose: c, emit: s }) {
    const i = t, g = s, h = _(null);
    function m(f) {
      const u = f.target.value;
      g("update:modelValue", u);
    }
    return ue(() => {
      i.autoFocus && h.value && h.value.focus();
    }), c({
      focus: () => {
        var f;
        return (f = h.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = h.value) == null ? void 0 : f.blur();
      }
    }), (f, u) => (o(), n("input", {
      ref_key: "inputRef",
      ref: h,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: Y(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        u[0] || (u[0] = Ee((y) => f.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Ee((y) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (y) => f.$emit("focus")),
      onBlur: u[3] || (u[3] = (y) => f.$emit("blur"))
    }, null, 42, $a));
  }
}), Ye = /* @__PURE__ */ j(_a, [["__scopeId", "data-v-0380d08f"]]), Ca = { class: "branch-create-form" }, xa = { class: "form-actions" }, Sa = /* @__PURE__ */ H({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const s = c, i = _(""), g = P(() => {
      const f = i.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function h() {
      g.value && (s("create", i.value.trim()), i.value = "");
    }
    function m() {
      i.value = "", s("cancel");
    }
    return (f, u) => (o(), n("div", Ca, [
      d(Ye, {
        modelValue: i.value,
        "onUpdate:modelValue": u[0] || (u[0] = (y) => i.value = y),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: h,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", xa, [
        d(A, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: h
        }, {
          default: a(() => [...u[1] || (u[1] = [
            v(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        d(A, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: a(() => [...u[2] || (u[2] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ea = /* @__PURE__ */ j(Sa, [["__scopeId", "data-v-7c500394"]]), Ia = { class: "branch-list-item__indicator" }, za = { class: "branch-list-item__name" }, La = {
  key: 0,
  class: "branch-list-item__actions"
}, Ma = {
  key: 0,
  class: "branch-list-item__current-label"
}, Na = /* @__PURE__ */ H({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Y(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Ia, l(t.isCurrent ? "●" : "○"), 1),
      e("span", za, l(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), n("div", La, [
        te(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Ma, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ta = /* @__PURE__ */ j(Na, [["__scopeId", "data-v-c6581a24"]]), Ra = {
  key: 2,
  class: "branch-list"
}, Ba = /* @__PURE__ */ H({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const s = c, i = _(!1);
    function g(m) {
      s("create", m), h();
    }
    function h() {
      i.value = !1;
    }
    return (m, f) => (o(), p(fe, null, {
      header: a(() => [
        d(ge, { title: "BRANCHES" }, {
          actions: a(() => [
            d(A, {
              variant: "ghost",
              size: "sm",
              onClick: f[0] || (f[0] = (u) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...f[1] || (f[1] = [
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
        i.value ? (o(), p(Ea, {
          key: 0,
          onCreate: g,
          onCancel: h
        })) : r("", !0),
        t.branches.length === 0 ? (o(), p(ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Ra, [
          (o(!0), n(W, null, q(t.branches, (u) => (o(), p(Ta, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: a(() => [
              u.is_current ? r("", !0) : (o(), p(A, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (y) => m.$emit("switch", u.name)
              }, {
                default: a(() => [...f[2] || (f[2] = [
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
}), Da = /* @__PURE__ */ j(Ba, [["__scopeId", "data-v-763d6ec4"]]), Ua = { class: "commit-list" }, Va = /* @__PURE__ */ H({
  __name: "CommitList",
  setup(t) {
    return (c, s) => (o(), n("div", Ua, [
      te(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Oa = /* @__PURE__ */ j(Va, [["__scopeId", "data-v-8c5ee761"]]), Aa = { class: "commit-hash" }, Pa = /* @__PURE__ */ H({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, s = P(() => c.hash.slice(0, c.length));
    return (i, g) => (o(), n("span", Aa, l(s.value), 1));
  }
}), xt = /* @__PURE__ */ j(Pa, [["__scopeId", "data-v-7c333cc6"]]), Wa = { class: "commit-message" }, Fa = { class: "commit-date" }, Ga = /* @__PURE__ */ H({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, i = c;
    function g() {
      s.clickable && i("click");
    }
    return (h, m) => (o(), n("div", {
      class: Y(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      d(xt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Wa, l(t.message), 1),
      e("span", Fa, l(t.relativeDate), 1),
      h.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = ve(() => {
        }, ["stop"]))
      }, [
        te(h.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ha = /* @__PURE__ */ j(Ga, [["__scopeId", "data-v-dd7c621b"]]), ja = /* @__PURE__ */ H({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, s) => (o(), p(fe, null, {
      header: a(() => [
        d(ge, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), p(ke, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), p(Oa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(W, null, q(t.commits, (i) => (o(), p(Ha, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (g) => c.$emit("select", i)
            }, {
              actions: a(() => [
                d(A, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => c.$emit("checkout", i),
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
}), Ka = /* @__PURE__ */ j(ja, [["__scopeId", "data-v-981c3c64"]]);
[
  // SYNCED workflows (12) - All good
  ...Array(12).fill(null).map((t, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
];
const qa = [
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
];
[
  ...qa,
  (Date.now() / 1e3 - 86400 * 60, Math.floor(Date.now() / 1e3)),
  (Date.now() / 1e3 - 86400 * 45, Math.floor(Date.now() / 1e3))
];
function me() {
  const t = _(!1), c = _(null);
  async function s(G, Q) {
    var Ge;
    if (!((Ge = window.app) != null && Ge.api))
      throw new Error("ComfyUI API not available");
    const ae = await window.app.api.fetchApi(G, Q);
    if (!ae.ok) {
      const Xe = await ae.json().catch(() => ({}));
      throw new Error(Xe.error || Xe.message || `Request failed: ${ae.status}`);
    }
    return ae.json();
  }
  async function i() {
    return s("/v2/comfygit/status");
  }
  async function g(G, Q = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: G, allow_issues: Q })
    });
  }
  async function h(G = 10, Q = 0) {
    return s(`/v2/comfygit/log?limit=${G}&offset=${Q}`);
  }
  async function m(G) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function f() {
    return s("/v2/comfygit/branches");
  }
  async function u(G) {
    return s(`/v2/comfygit/commit/${G}`);
  }
  async function y(G, Q = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: G, force: Q })
    });
  }
  async function M(G, Q = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, start_point: Q })
    });
  }
  async function S(G, Q = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: G, force: Q })
    });
  }
  async function C() {
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
  async function $(G) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: G })
    });
  }
  async function R() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function b(G, Q, ae) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, pytorch_backend: Q, clone_from: ae })
    });
  }
  async function I(G) {
    return s(`/v2/workspace/environments/${G}`, {
      method: "DELETE"
    });
  }
  async function B() {
    try {
      return s("/v2/comfygit/workflows");
    } catch {
      const G = await i(), Q = [];
      return G.workflows.new.forEach((ae) => {
        Q.push({ name: ae, status: "new", missing_nodes: 0, missing_models: 0, path: ae });
      }), G.workflows.modified.forEach((ae) => {
        Q.push({ name: ae, status: "modified", missing_nodes: 0, missing_models: 0, path: ae });
      }), G.workflows.synced.forEach((ae) => {
        Q.push({ name: ae, status: "synced", missing_nodes: 0, missing_models: 0, path: ae });
      }), Q;
    }
  }
  async function U(G) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/details`);
  }
  async function V(G) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/resolve`, {
      method: "POST"
    });
  }
  async function E(G, Q, ae) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Q, install_models: ae })
    });
  }
  async function N(G, Q, ae) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Q, importance: ae })
    });
  }
  async function w() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function z() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function x(G, Q) {
    return s(`/v2/workspace/models/${G}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Q })
    });
  }
  async function T(G) {
    return s(`/v2/workspace/models/${G}`, {
      method: "DELETE"
    });
  }
  async function D(G) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
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
  async function F(G) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function L(G, Q) {
    try {
      const ae = new URLSearchParams();
      return G && ae.append("level", G), Q && ae.append("lines", Q.toString()), s(`/v2/comfygit/debug/logs?${ae}`);
    } catch {
      return [];
    }
  }
  async function J(G, Q) {
    try {
      const ae = new URLSearchParams();
      return G && ae.append("level", G), Q && ae.append("lines", Q.toString()), s(`/v2/workspace/debug/logs?${ae}`);
    } catch {
      return [];
    }
  }
  async function se() {
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
  async function Ve(G) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(G)}/install`, {
      method: "POST"
    });
  }
  async function Oe(G) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(G)}/update`, {
      method: "POST"
    });
  }
  async function ie(G) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function _e() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function X(G, Q) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, url: Q })
    });
  }
  async function Me(G) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function ot(G, Q, ae) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Q, push_url: ae })
    });
  }
  async function ne(G) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(G)}/fetch`, {
      method: "POST"
    });
  }
  async function $e(G) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(G)}/status`);
    } catch {
      return null;
    }
  }
  async function st(G = "skip", Q = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: G,
        remove_extra_nodes: Q
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: g,
    getHistory: h,
    exportEnv: m,
    // Git Operations
    getBranches: f,
    getCommitDetail: u,
    checkout: y,
    createBranch: M,
    switchBranch: S,
    // Environment Management
    getEnvironments: C,
    switchEnvironment: $,
    getSwitchProgress: R,
    createEnvironment: b,
    deleteEnvironment: I,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: U,
    resolveWorkflow: V,
    installWorkflowDeps: E,
    setModelImportance: N,
    // Model Management
    getEnvironmentModels: w,
    getWorkspaceModels: z,
    updateModelSource: x,
    deleteModel: T,
    downloadModel: D,
    // Settings
    getConfig: K,
    updateConfig: F,
    // Debug/Logs
    getEnvironmentLogs: L,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: se,
    installNode: Ve,
    updateNode: Oe,
    uninstallNode: ie,
    // Git Remotes
    getRemotes: _e,
    addRemote: X,
    removeRemote: Me,
    updateRemoteUrl: ot,
    fetchRemote: ne,
    getRemoteSyncStatus: $e,
    // Environment Sync
    syncEnvironmentManually: st
  };
}
const Ya = { class: "base-modal-header" }, Ja = {
  key: 0,
  class: "base-modal-title"
}, Xa = { class: "base-modal-body" }, Qa = {
  key: 0,
  class: "base-modal-loading"
}, Za = {
  key: 1,
  class: "base-modal-error"
}, en = {
  key: 0,
  class: "base-modal-footer"
}, tn = /* @__PURE__ */ H({
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
  setup(t, { emit: c }) {
    const s = t, i = c;
    function g() {
      s.closeOnOverlayClick && i("close");
    }
    function h(m) {
      m.key === "Escape" && i("close");
    }
    return ue(() => {
      document.addEventListener("keydown", h), document.body.style.overflow = "hidden";
    }), Ft(() => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), (m, f) => (o(), p(Ue, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: Y(["base-modal-content", t.size]),
          onClick: f[1] || (f[1] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Ya, [
            te(m.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", Ja, l(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (u) => m.$emit("close"))
            }, [...f[2] || (f[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : r("", !0)
          ]),
          e("div", Xa, [
            t.loading ? (o(), n("div", Qa, "Loading...")) : t.error ? (o(), n("div", Za, l(t.error), 1)) : te(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), n("div", en, [
            te(m.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ j(tn, [["__scopeId", "data-v-700d367b"]]), on = ["type", "disabled"], sn = {
  key: 0,
  class: "spinner"
}, an = /* @__PURE__ */ H({
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
    return (c, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Y(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", sn)) : r("", !0),
      te(c.$slots, "default", {}, void 0, !0)
    ], 10, on));
  }
}), ce = /* @__PURE__ */ j(an, [["__scopeId", "data-v-f3452606"]]), nn = {
  key: 0,
  class: "base-title-count"
}, ln = /* @__PURE__ */ H({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, s) => (o(), p(ut(`h${t.level}`), {
      class: Y(["base-title", t.variant])
    }, {
      default: a(() => [
        te(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", nn, "(" + l(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ne = /* @__PURE__ */ j(ln, [["__scopeId", "data-v-5a01561d"]]), rn = ["value", "disabled"], cn = {
  key: 0,
  value: "",
  disabled: ""
}, dn = ["value"], un = {
  key: 0,
  class: "base-select-error"
}, mn = /* @__PURE__ */ H({
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
    function c(i) {
      return typeof i == "string" ? i : i.value;
    }
    function s(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, g) => (o(), n("div", {
      class: Y(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: Y(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (h) => i.$emit("update:modelValue", h.target.value))
      }, [
        t.placeholder ? (o(), n("option", cn, l(t.placeholder), 1)) : r("", !0),
        (o(!0), n(W, null, q(t.options, (h) => (o(), n("option", {
          key: c(h),
          value: c(h)
        }, l(s(h)), 9, dn))), 128))
      ], 42, rn),
      t.error ? (o(), n("span", un, l(t.error), 1)) : r("", !0)
    ], 2));
  }
}), vn = /* @__PURE__ */ j(mn, [["__scopeId", "data-v-7436d745"]]), fn = { class: "popover-header" }, gn = { class: "popover-title" }, hn = { class: "popover-content" }, pn = {
  key: 0,
  class: "popover-actions"
}, yn = /* @__PURE__ */ H({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, s) => (o(), p(Ue, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Je({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", fn, [
            e("h4", gn, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", hn, [
            te(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), n("div", pn, [
            te(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), Ie = /* @__PURE__ */ j(yn, [["__scopeId", "data-v-42815ace"]]), wn = { class: "detail-section" }, bn = {
  key: 0,
  class: "empty-message"
}, kn = { class: "model-header" }, $n = { class: "model-name" }, _n = { class: "model-details" }, Cn = { class: "model-row" }, xn = { class: "model-row" }, Sn = { class: "label" }, En = {
  key: 0,
  class: "model-row model-row-nodes"
}, In = { class: "node-list" }, zn = ["onClick"], Ln = {
  key: 1,
  class: "model-row"
}, Mn = { class: "value" }, Nn = {
  key: 0,
  class: "model-actions"
}, Tn = { class: "detail-section" }, Rn = {
  key: 0,
  class: "empty-message"
}, Bn = { class: "node-name" }, Dn = {
  key: 0,
  class: "node-version"
}, Un = /* @__PURE__ */ H({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: c }) {
    const s = t, i = c, { getWorkflowDetails: g, setModelImportance: h, installWorkflowDeps: m } = me(), f = _(null), u = _(!1), y = _(null), M = _(!1), S = _({}), C = _({}), $ = _(!1), R = _(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function I(T) {
      switch (T) {
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
    function B(T) {
      switch (T) {
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
    function U(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const D = T.hash || T.filename;
      return R.value.has(D) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function V(T) {
      return R.value.has(T);
    }
    function E(T) {
      R.value.has(T) ? R.value.delete(T) : R.value.add(T), R.value = new Set(R.value);
    }
    async function N() {
      u.value = !0, y.value = null;
      try {
        f.value = await g(s.workflowName);
      } catch (T) {
        y.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        u.value = !1;
      }
    }
    function w(T, D) {
      S.value[T] = D, M.value = !0;
    }
    async function z() {
      if (!M.value) {
        i("close");
        return;
      }
      u.value = !0, y.value = null;
      try {
        for (const [T, D] of Object.entries(S.value))
          await h(s.workflowName, T, D);
        i("close");
      } catch (T) {
        y.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        u.value = !1;
      }
    }
    async function x(T) {
      C.value[T] = !0, y.value = null;
      try {
        await m(s.workflowName, !0, !1), await N();
      } catch (D) {
        y.value = D instanceof Error ? D.message : "Failed to install node";
      } finally {
        C.value[T] = !1;
      }
    }
    return ue(N), (T, D) => (o(), n(W, null, [
      d(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: u.value,
        error: y.value || void 0,
        onClose: D[5] || (D[5] = (K) => i("close"))
      }, {
        body: a(() => [
          f.value ? (o(), n(W, { key: 0 }, [
            e("section", wn, [
              d(Ne, { variant: "section" }, {
                default: a(() => [
                  v("MODELS USED (" + l(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (o(), n("div", bn, " No models used in this workflow ")) : r("", !0),
              (o(!0), n(W, null, q(f.value.models, (K) => (o(), n("div", {
                key: K.hash,
                class: "model-card"
              }, [
                e("div", kn, [
                  D[7] || (D[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", $n, l(K.filename), 1)
                ]),
                e("div", _n, [
                  e("div", Cn, [
                    D[8] || (D[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: Y(["value", I(K.status)])
                    }, l(B(K.status)), 3)
                  ]),
                  e("div", xn, [
                    e("span", Sn, [
                      D[9] || (D[9] = v(" Importance: ", -1)),
                      d(Ct, {
                        size: 14,
                        title: "About importance levels",
                        onClick: D[0] || (D[0] = (F) => $.value = !0)
                      })
                    ]),
                    d(vn, {
                      "model-value": S.value[K.hash] || K.importance,
                      options: b,
                      "onUpdate:modelValue": (F) => w(K.hash, F)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  K.loaded_by && K.loaded_by.length > 0 ? (o(), n("div", En, [
                    D[10] || (D[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", In, [
                      (o(!0), n(W, null, q(U(K), (F, L) => (o(), n("div", {
                        key: `${F.node_id}-${L}`,
                        class: "node-reference"
                      }, l(F.node_type) + " (Node #" + l(F.node_id) + ") ", 1))), 128)),
                      K.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (F) => E(K.hash || K.filename)
                      }, l(V(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, zn)) : r("", !0)
                    ])
                  ])) : r("", !0),
                  K.size_mb ? (o(), n("div", Ln, [
                    D[11] || (D[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Mn, l(K.size_mb) + " MB", 1)
                  ])) : r("", !0)
                ]),
                K.status !== "available" ? (o(), n("div", Nn, [
                  K.status === "downloadable" ? (o(), p(ce, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: D[1] || (D[1] = (F) => i("resolve"))
                  }, {
                    default: a(() => [...D[12] || (D[12] = [
                      v(" Download ", -1)
                    ])]),
                    _: 1
                  })) : K.status === "path_mismatch" ? (o(), p(ce, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: D[2] || (D[2] = (F) => i("resolve"))
                  }, {
                    default: a(() => [...D[13] || (D[13] = [
                      v(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), p(ce, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: D[3] || (D[3] = (F) => i("resolve"))
                  }, {
                    default: a(() => [...D[14] || (D[14] = [
                      v(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : r("", !0)
              ]))), 128))
            ]),
            e("section", Tn, [
              d(Ne, { variant: "section" }, {
                default: a(() => [
                  v("NODES USED (" + l(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (o(), n("div", Rn, " No custom nodes used in this workflow ")) : r("", !0),
              (o(!0), n(W, null, q(f.value.nodes, (K) => (o(), n("div", {
                key: K.name,
                class: "node-item"
              }, [
                e("span", {
                  class: Y(["node-status", K.status === "installed" ? "installed" : "missing"])
                }, l(K.status === "installed" ? "✓" : "✕"), 3),
                e("span", Bn, l(K.name), 1),
                K.version ? (o(), n("span", Dn, "v" + l(K.version), 1)) : r("", !0),
                K.status === "missing" ? (o(), p(ce, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: C.value[K.name],
                  onClick: (F) => x(K.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...D[15] || (D[15] = [
                    v(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: a(() => [
          d(ce, {
            variant: "secondary",
            onClick: D[4] || (D[4] = (K) => i("close"))
          }, {
            default: a(() => [...D[16] || (D[16] = [
              v(" Close ", -1)
            ])]),
            _: 1
          }),
          M.value ? (o(), p(ce, {
            key: 0,
            variant: "primary",
            onClick: z
          }, {
            default: a(() => [...D[17] || (D[17] = [
              v(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      d(Ie, {
        show: $.value,
        title: "Model Importance Levels",
        onClose: D[6] || (D[6] = (K) => $.value = !1)
      }, {
        content: a(() => [...D[18] || (D[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              v(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              v(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              v(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vn = /* @__PURE__ */ j(Un, [["__scopeId", "data-v-1325d542"]]), On = {
  key: 0,
  class: "resolve-section"
}, An = { class: "resolve-card success-card" }, Pn = { class: "items-list" }, Wn = { class: "item-info" }, Fn = { class: "item-name" }, Gn = {
  key: 0,
  class: "item-meta"
}, Hn = { class: "match-type" }, jn = { class: "source" }, Kn = {
  key: 1,
  class: "resolve-section"
}, qn = { class: "resolve-card warning-card" }, Yn = { class: "items-list" }, Jn = { class: "item-info" }, Xn = { class: "item-name" }, Qn = { class: "item-meta" }, Zn = { key: 0 }, el = { key: 1 }, tl = {
  key: 0,
  class: "item-warning"
}, ol = {
  key: 0,
  class: "item-action"
}, sl = ["onClick"], al = {
  key: 2,
  class: "resolve-section"
}, nl = { class: "info-text" }, ll = { class: "actions-summary" }, il = { class: "summary-list" }, rl = { key: 0 }, cl = { key: 1 }, dl = { key: 2 }, ul = {
  key: 0,
  class: "estimated-size"
}, ml = /* @__PURE__ */ H({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: c }) {
    const s = t, i = c, { resolveWorkflow: g, installWorkflowDeps: h } = me(), m = _(null), f = _(!1), u = _(!1), y = _(null), M = P(() => {
      var N;
      return m.value ? ((N = m.value.download_results) == null ? void 0 : N.every((w) => w.can_download)) ?? !1 : !1;
    });
    async function S() {
      f.value = !0, y.value = null;
      try {
        m.value = await g(s.workflowName);
      } catch (N) {
        y.value = N instanceof Error ? N.message : "Failed to analyze workflow";
      } finally {
        f.value = !1;
      }
    }
    function C(N) {
      return !N.possible_matches || N.possible_matches.length === 0 ? null : N.possible_matches.reduce(
        (w, z) => z.match_confidence > w.match_confidence ? z : w
      );
    }
    function $(N) {
      return N >= 0.9 ? "high" : N >= 0.7 ? "medium" : "low";
    }
    function R(N) {
      const w = C(N);
      return w ? w.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function b(N) {
      var w, z;
      return (z = (w = m.value) == null ? void 0 : w.download_results) == null ? void 0 : z.find((x) => x.model === N);
    }
    function I(N) {
      const w = b(N);
      return (w == null ? void 0 : w.can_download) ?? !1;
    }
    function B(N) {
      const w = b(N);
      return (w == null ? void 0 : w.source_url) || null;
    }
    function U(N) {
      window.open(N, "_blank");
    }
    async function V() {
      if (!(!m.value || u.value)) {
        u.value = !0, y.value = null;
        try {
          await h(
            s.workflowName,
            m.value.nodes_to_install,
            []
          ), i("install"), i("refresh"), i("close");
        } catch (N) {
          y.value = N instanceof Error ? N.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    async function E() {
      if (!(!m.value || u.value)) {
        u.value = !0, y.value = null;
        try {
          await h(
            s.workflowName,
            m.value.nodes_to_install,
            m.value.models_to_download
          ), i("install"), i("refresh"), i("close");
        } catch (N) {
          y.value = N instanceof Error ? N.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return ue(S), (N, w) => (o(), p(tt, {
      title: `RESOLVE DEPENDENCIES: ${t.workflowName}`,
      size: "lg",
      loading: f.value,
      error: y.value || void 0,
      onClose: w[1] || (w[1] = (z) => i("close"))
    }, {
      body: a(() => [
        m.value ? (o(), n(W, { key: 0 }, [
          w[5] || (w[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          m.value.nodes_unresolved.length > 0 ? (o(), n("section", On, [
            d(Ne, { variant: "section" }, {
              default: a(() => [
                v("NODES (" + l(m.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", An, [
              w[2] || (w[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", Pn, [
                (o(!0), n(W, null, q(m.value.nodes_unresolved, (z) => {
                  var x;
                  return o(), n("div", {
                    key: z.node_type,
                    class: "item"
                  }, [
                    e("div", Wn, [
                      e("div", Fn, l(((x = C(z)) == null ? void 0 : x.package_id) || z.node_type), 1),
                      C(z) ? (o(), n("div", Gn, [
                        e("span", {
                          class: Y(["confidence-badge", $(C(z).match_confidence)])
                        }, l(Math.round(C(z).match_confidence * 100)) + "% match ", 3),
                        e("span", Hn, l(C(z).match_type), 1),
                        e("span", jn, "Source: " + l(R(z)), 1)
                      ])) : r("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : r("", !0),
          m.value.models_unresolved.length > 0 ? (o(), n("section", Kn, [
            d(Ne, { variant: "section" }, {
              default: a(() => [
                v("MODELS (" + l(m.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", qn, [
              w[3] || (w[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Yn, [
                (o(!0), n(W, null, q(m.value.models_unresolved, (z) => (o(), n("div", {
                  key: z.filename,
                  class: "item"
                }, [
                  e("div", Jn, [
                    e("div", Xn, l(z.filename), 1),
                    e("div", Qn, [
                      z.expected_category ? (o(), n("span", Zn, "Type: " + l(z.expected_category), 1)) : r("", !0),
                      b(z.filename) ? (o(), n("span", el, " Size: ~" + l(b(z.filename).estimated_size_mb) + " MB ", 1)) : r("", !0)
                    ]),
                    I(z.filename) ? r("", !0) : (o(), n("div", tl, " No auto-download source configured "))
                  ]),
                  B(z.filename) ? (o(), n("div", ol, [
                    e("button", {
                      class: "link-btn",
                      onClick: (x) => U(B(z.filename))
                    }, " Open Source ↗ ", 8, sl)
                  ])) : r("", !0)
                ]))), 128))
              ])
            ])
          ])) : r("", !0),
          m.value.nodes_resolved.length > 0 || m.value.models_resolved.length > 0 ? (o(), n("section", al, [
            d(Ne, { variant: "section" }, {
              default: a(() => [
                v(" ALREADY AVAILABLE (" + l(m.value.nodes_resolved.length + m.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", nl, l(m.value.nodes_resolved.length) + " nodes and " + l(m.value.models_resolved.length) + " models are already installed ", 1)
          ])) : r("", !0),
          e("div", ll, [
            w[4] || (w[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", il, [
              m.value.nodes_to_install.length ? (o(), n("li", rl, " Install " + l(m.value.nodes_to_install.length) + " nodes (~" + l(m.value.estimated_time_seconds) + "s) ", 1)) : r("", !0),
              m.value.nodes_to_install.length ? (o(), n("li", cl, " Restart ComfyUI to load new nodes ")) : r("", !0),
              m.value.models_to_download.length ? (o(), n("li", dl, " You'll still need to download " + l(m.value.models_to_download.length) + " model(s) manually ", 1)) : r("", !0)
            ]),
            m.value.estimated_size_mb ? (o(), n("div", ul, " Estimated download: " + l(m.value.estimated_size_mb) + " MB ", 1)) : r("", !0)
          ])
        ], 64)) : r("", !0)
      ]),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: w[0] || (w[0] = (z) => i("close"))
        }, {
          default: a(() => [...w[6] || (w[6] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m.value && m.value.nodes_to_install.length && m.value.models_to_download.length ? (o(), p(ce, {
          key: 0,
          variant: "secondary",
          disabled: u.value,
          loading: u.value,
          onClick: V
        }, {
          default: a(() => [...w[7] || (w[7] = [
            v(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0),
        m.value && (m.value.nodes_to_install.length || m.value.models_to_download.length) ? (o(), p(ce, {
          key: 1,
          variant: "primary",
          disabled: u.value || m.value.models_to_download.length > 0 && !M.value,
          loading: u.value,
          onClick: E
        }, {
          default: a(() => [...w[8] || (w[8] = [
            v(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), vl = /* @__PURE__ */ j(ml, [["__scopeId", "data-v-d68efb14"]]), fl = { class: "search-input-wrapper" }, gl = ["value", "placeholder"], hl = /* @__PURE__ */ H({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: c }) {
    const s = t, i = c, g = _(null);
    let h;
    function m(u) {
      const y = u.target.value;
      s.debounce > 0 ? (clearTimeout(h), h = window.setTimeout(() => {
        i("update:modelValue", y);
      }, s.debounce)) : i("update:modelValue", y);
    }
    function f() {
      var u;
      i("update:modelValue", ""), i("clear"), (u = g.value) == null || u.focus();
    }
    return ue(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (u, y) => (o(), n("div", fl, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: Ee(f, ["escape"])
      }, null, 40, gl),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), pl = /* @__PURE__ */ j(hl, [["__scopeId", "data-v-266f857a"]]), yl = { class: "search-bar" }, wl = /* @__PURE__ */ H({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, s) => (o(), n("div", yl, [
      d(pl, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), We = /* @__PURE__ */ j(wl, [["__scopeId", "data-v-3d51bbfd"]]), bl = { class: "section-group" }, kl = {
  key: 0,
  class: "section-content"
}, $l = /* @__PURE__ */ H({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const s = t, i = c, g = _(s.initiallyExpanded);
    function h() {
      s.collapsible && (g.value = !g.value, i("toggle", g.value));
    }
    return (m, f) => (o(), n("section", bl, [
      d(pe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: h
      }, {
        default: a(() => [
          v(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), n("div", kl, [
        te(m.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), re = /* @__PURE__ */ j($l, [["__scopeId", "data-v-c48e33ed"]]), _l = { class: "item-header" }, Cl = {
  key: 0,
  class: "item-icon"
}, xl = { class: "item-info" }, Sl = {
  key: 0,
  class: "item-title"
}, El = {
  key: 1,
  class: "item-subtitle"
}, Il = {
  key: 0,
  class: "item-details"
}, zl = {
  key: 1,
  class: "item-actions"
}, Ll = /* @__PURE__ */ H({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, i = P(() => s.status ? `status-${s.status}` : "");
    return (g, h) => (o(), n("div", {
      class: Y(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: h[0] || (h[0] = (m) => t.clickable && g.$emit("click"))
    }, [
      e("div", _l, [
        g.$slots.icon ? (o(), n("span", Cl, [
          te(g.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", xl, [
          g.$slots.title ? (o(), n("div", Sl, [
            te(g.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          g.$slots.subtitle ? (o(), n("div", El, [
            te(g.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      g.$slots.details ? (o(), n("div", Il, [
        te(g.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      g.$slots.actions ? (o(), n("div", zl, [
        te(g.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ j(Ll, [["__scopeId", "data-v-cc435e0e"]]), Ml = { class: "loading-state" }, Nl = { class: "loading-message" }, Tl = /* @__PURE__ */ H({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, s) => (o(), n("div", Ml, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Nl, l(t.message), 1)
    ]));
  }
}), ze = /* @__PURE__ */ j(Tl, [["__scopeId", "data-v-ad8436c9"]]), Rl = { class: "error-state" }, Bl = { class: "error-message" }, Dl = /* @__PURE__ */ H({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, s) => (o(), n("div", Rl, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Bl, l(t.message), 1),
      t.retry ? (o(), p(A, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => c.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          v(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ j(Dl, [["__scopeId", "data-v-5397be48"]]), Ul = /* @__PURE__ */ H({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const s = c, { getWorkflows: i } = me(), g = _([]), h = _(!1), m = _(null), f = _(""), u = _(!0), y = _(!1), M = _(!1), S = _(!1), C = _(null), $ = P(
      () => g.value.filter((F) => F.status === "broken")
    ), R = P(
      () => g.value.filter((F) => F.status === "new")
    ), b = P(
      () => g.value.filter((F) => F.status === "modified")
    ), I = P(
      () => g.value.filter((F) => F.status === "synced")
    ), B = P(() => {
      if (!f.value.trim()) return g.value;
      const F = f.value.toLowerCase();
      return g.value.filter((L) => L.name.toLowerCase().includes(F));
    }), U = P(
      () => $.value.filter(
        (F) => !f.value.trim() || F.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), V = P(
      () => R.value.filter(
        (F) => !f.value.trim() || F.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), E = P(
      () => b.value.filter(
        (F) => !f.value.trim() || F.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), N = P(
      () => I.value.filter(
        (F) => !f.value.trim() || F.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), w = P(
      () => y.value ? N.value : N.value.slice(0, 5)
    );
    async function z() {
      h.value = !0, m.value = null;
      try {
        g.value = await i();
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    function x(F) {
      C.value = F, M.value = !0;
    }
    function T(F) {
      C.value = F, S.value = !0;
    }
    function D() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      s("refresh");
    }
    return ue(z), (F, L) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "WORKFLOWS" }, {
            actions: a(() => [
              $.value.length > 0 ? (o(), p(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: a(() => [...L[7] || (L[7] = [
                  v(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(We, {
            modelValue: f.value,
            "onUpdate:modelValue": L[0] || (L[0] = (J) => f.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), p(ze, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), p(Le, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            U.value.length ? (o(), p(re, {
              key: 0,
              title: "BROKEN",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(U.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: a(() => [...L[8] || (L[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(l(J.name), 1)
                  ]),
                  subtitle: a(() => [
                    v(" Missing: " + l(J.missing_nodes) + " nodes, " + l(J.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => T(J.name)
                    }, {
                      default: a(() => [...L[9] || (L[9] = [
                        v(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => x(J.name)
                    }, {
                      default: a(() => [...L[10] || (L[10] = [
                        v(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            V.value.length ? (o(), p(re, {
              key: 1,
              title: "NEW",
              count: V.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(V.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: a(() => [...L[11] || (L[11] = [
                    v("●", -1)
                  ])]),
                  title: a(() => [
                    v(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...L[12] || (L[12] = [
                    v("New", -1)
                  ])]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => x(J.name)
                    }, {
                      default: a(() => [...L[13] || (L[13] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            E.value.length ? (o(), p(re, {
              key: 2,
              title: "MODIFIED",
              count: E.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(E.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: a(() => [...L[14] || (L[14] = [
                    v("⚡", -1)
                  ])]),
                  title: a(() => [
                    v(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...L[15] || (L[15] = [
                    v("Modified", -1)
                  ])]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => x(J.name)
                    }, {
                      default: a(() => [...L[16] || (L[16] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            N.value.length ? (o(), p(re, {
              key: 3,
              title: "SYNCED",
              count: N.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: L[2] || (L[2] = (J) => u.value = J)
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(w.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: a(() => [...L[17] || (L[17] = [
                    v("✓", -1)
                  ])]),
                  title: a(() => [
                    v(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...L[18] || (L[18] = [
                    v("Synced", -1)
                  ])]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => x(J.name)
                    }, {
                      default: a(() => [...L[19] || (L[19] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !y.value && N.value.length > 5 ? (o(), p(A, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (J) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    v(" View all " + l(N.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            B.value.length ? r("", !0) : (o(), p(ke, {
              key: 4,
              icon: "📭",
              message: f.value ? `No workflows match '${f.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      M.value && C.value ? (o(), p(Vn, {
        key: 0,
        "workflow-name": C.value,
        onClose: L[3] || (L[3] = (J) => M.value = !1),
        onResolve: L[4] || (L[4] = (J) => T(C.value))
      }, null, 8, ["workflow-name"])) : r("", !0),
      S.value && C.value ? (o(), p(vl, {
        key: 1,
        "workflow-name": C.value,
        onClose: L[5] || (L[5] = (J) => S.value = !1),
        onInstall: K,
        onRefresh: L[6] || (L[6] = (J) => s("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Vl = /* @__PURE__ */ j(Ul, [["__scopeId", "data-v-ee63730e"]]), Ol = /* @__PURE__ */ H({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Y(["summary-bar", t.variant])
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ j(Ol, [["__scopeId", "data-v-ccb7816e"]]), Al = /* @__PURE__ */ H({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironmentModels: i, getStatus: g } = me(), h = _([]), m = _([]), f = _("production"), u = _(!1), y = _(null), M = _(""), S = _(!1);
    function C() {
      S.value = !1, s("navigate", "model-index");
    }
    const $ = P(
      () => h.value.reduce((x, T) => x + (T.size || 0), 0)
    ), R = P(() => {
      if (!M.value.trim()) return h.value;
      const x = M.value.toLowerCase();
      return h.value.filter((T) => T.filename.toLowerCase().includes(x));
    }), b = P(() => {
      if (!M.value.trim()) return m.value;
      const x = M.value.toLowerCase();
      return m.value.filter((T) => T.filename.toLowerCase().includes(x));
    }), I = P(
      () => R.value.filter((x) => x.type === "checkpoints")
    ), B = P(
      () => R.value.filter((x) => x.type === "loras")
    ), U = P(
      () => R.value.filter((x) => x.type !== "checkpoints" && x.type !== "loras")
    );
    function V(x) {
      if (!x) return "Unknown";
      const T = x / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function E(x) {
      s("navigate", "model-index");
    }
    function N(x) {
      s("navigate", "model-index");
    }
    function w(x) {
      alert(`Download functionality not yet implemented for ${x}`);
    }
    async function z() {
      u.value = !0, y.value = null;
      try {
        const x = await i();
        h.value = x, m.value = [];
        const T = await g();
        f.value = T.environment || "production";
      } catch (x) {
        y.value = x instanceof Error ? x.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return ue(z), (x, T) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (D) => S.value = !0)
          })
        ]),
        search: a(() => [
          d(We, {
            modelValue: M.value,
            "onUpdate:modelValue": T[1] || (T[1] = (D) => M.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), p(ze, {
            key: 0,
            message: "Loading environment models..."
          })) : y.value ? (o(), p(Le, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            h.value.length ? (o(), p(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + l(h.value.length) + " models • " + l(V($.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            I.value.length ? (o(), p(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: I.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(I.value, (D) => (o(), p(de, {
                  key: D.hash || D.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...T[3] || (T[3] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(D.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l(V(D.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Used by:",
                      value: (D.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(Z, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => E(D.hash)
                    }, {
                      default: a(() => [...T[4] || (T[4] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            B.value.length ? (o(), p(re, {
              key: 2,
              title: "LORAS",
              count: B.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(B.value, (D) => (o(), p(de, {
                  key: D.hash || D.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...T[5] || (T[5] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(D.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l(V(D.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Used by:",
                      value: (D.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(Z, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => E(D.hash)
                    }, {
                      default: a(() => [...T[6] || (T[6] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            U.value.length ? (o(), p(re, {
              key: 3,
              title: "OTHER",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(U.value, (D) => (o(), p(de, {
                  key: D.hash || D.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...T[7] || (T[7] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(D.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l(V(D.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Type:",
                      value: D.type
                    }, null, 8, ["value"]),
                    d(Z, {
                      label: "Used by:",
                      value: (D.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => E(D.hash)
                    }, {
                      default: a(() => [...T[8] || (T[8] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            b.value.length ? (o(), p(re, {
              key: 4,
              title: "MISSING",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(b.value, (D) => (o(), p(de, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...T[9] || (T[9] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(l(D.filename), 1)
                  ]),
                  subtitle: a(() => [...T[10] || (T[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var K;
                    return [
                      d(Z, {
                        label: "Required by:",
                        value: ((K = D.workflow_names) == null ? void 0 : K.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    d(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => w(D.filename)
                    }, {
                      default: a(() => [...T[11] || (T[11] = [
                        v(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => N(D.filename)
                    }, {
                      default: a(() => [...T[12] || (T[12] = [
                        v(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !R.value.length && !b.value.length ? (o(), p(ke, {
              key: 5,
              icon: "📭",
              message: M.value ? `No models match '${M.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ie, {
        show: S.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (D) => S.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            T[13] || (T[13] = v(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(f.value) + '"', 1),
            T[14] || (T[14] = v(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          d(A, {
            variant: "primary",
            onClick: C
          }, {
            default: a(() => [...T[15] || (T[15] = [
              v(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pl = /* @__PURE__ */ j(Al, [["__scopeId", "data-v-72675609"]]), Wl = /* @__PURE__ */ H({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: c } = me(), s = _([]), i = _(!1), g = _(null), h = _(""), m = _(!1), f = P(
      () => s.value.reduce((w, z) => w + (z.size_mb || z.size || 0), 0)
    ), u = P(() => {
      const w = /* @__PURE__ */ new Set();
      return s.value.forEach((z) => {
        z.used_in_environments && z.used_in_environments.length > 0 && z.used_in_environments.forEach((x) => w.add(x.env_name));
      }), w.size;
    }), y = P(() => {
      if (!h.value.trim()) return s.value;
      const w = h.value.toLowerCase();
      return s.value.filter((z) => {
        const x = z, T = z.sha256 || x.sha256_hash || "";
        return z.filename.toLowerCase().includes(w) || T.toLowerCase().includes(w);
      });
    }), M = P(
      () => y.value.filter((w) => w.type === "checkpoints")
    ), S = P(
      () => y.value.filter((w) => w.type === "loras")
    ), C = P(
      () => y.value.filter((w) => w.type !== "checkpoints" && w.type !== "loras")
    );
    function $(w) {
      return w ? w >= 1024 ? `${(w / 1024).toFixed(1)} GB` : `${w.toFixed(0)} MB` : "Unknown";
    }
    function R(w) {
      const z = w, x = w.used_in_workflows || z.used_by || [];
      return !x || x.length === 0 ? "Not used" : `${x.length} workflow(s)`;
    }
    function b(w) {
      navigator.clipboard.writeText(w), alert("Hash copied to clipboard");
    }
    function I(w) {
      prompt("Enter model source URL:", w.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function B(w) {
      const z = w, x = w.used_in_workflows || z.used_by || [], T = x && x.length > 0 ? `

⚠ WARNING: This model is used by ${x.length} workflow(s):
${x.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${w.filename}?${T}

This will free ${$(z.size_mb || w.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function U() {
      alert("Scan for models not yet implemented");
    }
    function V() {
      alert("Change directory not yet implemented");
    }
    function E() {
      alert("Download new model not yet implemented");
    }
    async function N() {
      i.value = !0, g.value = null;
      try {
        s.value = await c(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", M.value), console.log("Filtered loras:", S.value), console.log("Filtered other:", C.value);
      } catch (w) {
        g.value = w instanceof Error ? w.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return ue(N), (w, z) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: z[0] || (z[0] = (x) => m.value = !0)
          }, {
            actions: a(() => [
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...z[3] || (z[3] = [
                  v(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: a(() => [...z[4] || (z[4] = [
                  v(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: E
              }, {
                default: a(() => [...z[5] || (z[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
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
          d(We, {
            modelValue: h.value,
            "onUpdate:modelValue": z[1] || (z[1] = (x) => h.value = x),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), p(ze, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), p(Le, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length ? (o(), p(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + l(s.value.length) + " models • " + l($(f.value)) + " • Used in " + l(u.value) + " environments ", 1)
              ]),
              _: 1
            })) : r("", !0),
            M.value.length ? (o(), p(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(M.value, (x) => (o(), p(de, {
                  key: x.sha256 || x.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[6] || (z[6] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(x.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l($(x.size_mb || x.size)), 1)
                  ]),
                  details: a(() => {
                    var T, D;
                    return [
                      x.sha256 || x.sha256_hash ? (o(), p(Z, {
                        key: 0,
                        label: "SHA256:",
                        value: (x.sha256 || x.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : r("", !0),
                      d(Z, {
                        label: "Used in:",
                        value: R(x)
                      }, null, 8, ["value"]),
                      x.source_url || (T = x.sources) != null && T[0] ? (o(), p(Z, {
                        key: 1,
                        label: "Source URL:",
                        value: x.source_url || ((D = x.sources) == null ? void 0 : D[0])
                      }, null, 8, ["value"])) : (o(), p(Z, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...z[7] || (z[7] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => I(x)
                    }, {
                      default: a(() => [...z[8] || (z[8] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x.sha256 || x.sha256_hash ? (o(), p(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => b(x.sha256 || x.sha256_hash)
                    }, {
                      default: a(() => [...z[9] || (z[9] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => B(x)
                    }, {
                      default: a(() => [...z[10] || (z[10] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            S.value.length ? (o(), p(re, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(S.value, (x) => (o(), p(de, {
                  key: x.sha256 || x.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[11] || (z[11] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(x.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l($(x.size_mb || x.size)), 1)
                  ]),
                  details: a(() => {
                    var T, D;
                    return [
                      x.sha256 || x.sha256_hash ? (o(), p(Z, {
                        key: 0,
                        label: "SHA256:",
                        value: (x.sha256 || x.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : r("", !0),
                      d(Z, {
                        label: "Used in:",
                        value: R(x)
                      }, null, 8, ["value"]),
                      x.source_url || (T = x.sources) != null && T[0] ? (o(), p(Z, {
                        key: 1,
                        label: "Source URL:",
                        value: x.source_url || ((D = x.sources) == null ? void 0 : D[0])
                      }, null, 8, ["value"])) : (o(), p(Z, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...z[12] || (z[12] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => I(x)
                    }, {
                      default: a(() => [...z[13] || (z[13] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x.sha256 || x.sha256_hash ? (o(), p(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => b(x.sha256 || x.sha256_hash)
                    }, {
                      default: a(() => [...z[14] || (z[14] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => B(x)
                    }, {
                      default: a(() => [...z[15] || (z[15] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            C.value.length ? (o(), p(re, {
              key: 3,
              title: "OTHER",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(C.value, (x) => (o(), p(de, {
                  key: x.sha256 || x.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[16] || (z[16] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(x.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l($(x.size_mb || x.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Type:",
                      value: x.type
                    }, null, 8, ["value"]),
                    x.sha256 || x.sha256_hash ? (o(), p(Z, {
                      key: 0,
                      label: "SHA256:",
                      value: (x.sha256 || x.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : r("", !0),
                    d(Z, {
                      label: "Used in:",
                      value: R(x)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => I(x)
                    }, {
                      default: a(() => [...z[17] || (z[17] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x.sha256 || x.sha256_hash ? (o(), p(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => b(x.sha256 || x.sha256_hash)
                    }, {
                      default: a(() => [...z[18] || (z[18] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => B(x)
                    }, {
                      default: a(() => [...z[19] || (z[19] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            y.value.length ? r("", !0) : (o(), p(ke, {
              key: 4,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d(Ie, {
        show: m.value,
        title: "About Workspace Model Index",
        onClose: z[2] || (z[2] = (x) => m.value = !1)
      }, {
        content: a(() => [...z[20] || (z[20] = [
          e("p", null, [
            v(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            v(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Fl = /* @__PURE__ */ j(Wl, [["__scopeId", "data-v-5a24af01"]]), Gl = { key: 0 }, Hl = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, jl = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Kl = /* @__PURE__ */ H({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: c, installNode: s, updateNode: i, uninstallNode: g } = me(), h = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), m = _(!1), f = _(null), u = _(""), y = _(!1), M = P(() => {
      if (!u.value.trim()) return h.value.nodes;
      const E = u.value.toLowerCase();
      return h.value.nodes.filter(
        (N) => {
          var w, z;
          return N.name.toLowerCase().includes(E) || ((w = N.description) == null ? void 0 : w.toLowerCase().includes(E)) || ((z = N.repository) == null ? void 0 : z.toLowerCase().includes(E));
        }
      );
    }), S = P(
      () => M.value.filter((E) => E.installed)
    ), C = P(
      () => M.value.filter((E) => !E.installed)
    );
    function $(E) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[E] || E;
    }
    function R(E) {
      return !E.used_in_workflows || E.used_in_workflows.length === 0 ? "Not used in any workflows" : E.used_in_workflows.length === 1 ? E.used_in_workflows[0] : `${E.used_in_workflows.length} workflows`;
    }
    function b(E) {
      window.open(E, "_blank");
    }
    async function I(E) {
      if (confirm(`Install node "${E}"?

This will download and install the node from its repository.`))
        try {
          m.value = !0;
          const N = await s(E);
          N.status === "success" ? (alert(`Node "${E}" installed successfully!`), await V()) : alert(`Failed to install node: ${N.message || "Unknown error"}`);
        } catch (N) {
          alert(`Error installing node: ${N instanceof Error ? N.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function B(E) {
      if (confirm(`Check for updates for "${E}"?`))
        try {
          m.value = !0;
          const N = await i(E);
          N.status === "success" ? (alert(`Node "${E}" is up to date or has been updated!`), await V()) : alert(`Update check failed: ${N.message || "Unknown error"}`);
        } catch (N) {
          alert(`Error checking for updates: ${N instanceof Error ? N.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function U(E) {
      if (confirm(`Uninstall node "${E}"?

This will remove the node from this environment.`))
        try {
          m.value = !0;
          const N = await g(E);
          N.status === "success" ? (alert(`Node "${E}" uninstalled successfully!`), await V()) : alert(`Failed to uninstall node: ${N.message || "Unknown error"}`);
        } catch (N) {
          alert(`Error uninstalling node: ${N instanceof Error ? N.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function V() {
      m.value = !0, f.value = null;
      try {
        h.value = await c();
      } catch (E) {
        f.value = E instanceof Error ? E.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return ue(V), (E, N) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (w) => y.value = !0)
          })
        ]),
        search: a(() => [
          d(We, {
            modelValue: u.value,
            "onUpdate:modelValue": N[1] || (N[1] = (w) => u.value = w),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (o(), p(ze, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : f.value ? (o(), p(Le, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            h.value.total_count ? (o(), p(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + l(h.value.total_count) + " nodes • " + l(h.value.installed_count) + " installed • " + l(h.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : r("", !0),
            S.value.length ? (o(), p(re, {
              key: 1,
              title: "INSTALLED",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(S.value, (w) => (o(), p(de, {
                  key: w.name,
                  status: "synced"
                }, {
                  icon: a(() => [...N[4] || (N[4] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(w.name), 1)
                  ]),
                  subtitle: a(() => [
                    w.version ? (o(), n("span", Gl, "v" + l(w.version), 1)) : (o(), n("span", Hl, "version unknown")),
                    w.source ? (o(), n("span", jl, " • " + l($(w.source)), 1)) : r("", !0)
                  ]),
                  details: a(() => [
                    w.description ? (o(), p(Z, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : r("", !0),
                    w.repository ? (o(), p(Z, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : r("", !0),
                    d(Z, {
                      label: "Used by:",
                      value: R(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.repository ? (o(), p(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => b(w.repository)
                    }, {
                      default: a(() => [...N[5] || (N[5] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.source === "registry" ? (o(), p(A, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => B(w.name)
                    }, {
                      default: a(() => [...N[6] || (N[6] = [
                        v(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.source !== "unknown" ? (o(), p(A, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => U(w.name)
                    }, {
                      default: a(() => [...N[7] || (N[7] = [
                        v(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            C.value.length ? (o(), p(re, {
              key: 2,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(C.value, (w) => (o(), p(de, {
                  key: w.name,
                  status: "missing"
                }, {
                  icon: a(() => [...N[8] || (N[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(l(w.name), 1)
                  ]),
                  subtitle: a(() => [...N[9] || (N[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    w.description ? (o(), p(Z, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : r("", !0),
                    w.repository ? (o(), p(Z, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : r("", !0),
                    d(Z, {
                      label: "Required by:",
                      value: R(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.download_url ? (o(), p(A, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => I(w.name)
                    }, {
                      default: a(() => [...N[10] || (N[10] = [
                        v(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.repository ? (o(), p(A, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => b(w.repository)
                    }, {
                      default: a(() => [...N[11] || (N[11] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !S.value.length && !C.value.length ? (o(), p(ke, {
              key: 3,
              icon: "📭",
              message: u.value ? `No nodes match '${u.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ie, {
        show: y.value,
        title: "About Git-Tracked Nodes",
        onClose: N[3] || (N[3] = (w) => y.value = !1)
      }, {
        content: a(() => [...N[12] || (N[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            v(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            v(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          d(A, {
            variant: "primary",
            onClick: N[2] || (N[2] = (w) => y.value = !1)
          }, {
            default: a(() => [...N[13] || (N[13] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ql = /* @__PURE__ */ j(Kl, [["__scopeId", "data-v-c480e2c1"]]), Yl = { class: "remote-url-display" }, Jl = ["title"], Xl = ["title"], Ql = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Zl = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ei = /* @__PURE__ */ H({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, s = _(!1), i = P(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const h = c.url.slice(0, Math.floor(c.maxLength * 0.6)), m = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${h}...${m}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(c.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy URL:", h);
      }
    }
    return (h, m) => (o(), n("div", Yl, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, Jl),
      e("button", {
        class: Y(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Zl, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Ql, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Xl)
    ]));
  }
}), pt = /* @__PURE__ */ j(ei, [["__scopeId", "data-v-7768a58d"]]), ti = { class: "remote-title" }, oi = {
  key: 0,
  class: "default-badge"
}, si = {
  key: 1,
  class: "sync-badge"
}, ai = {
  key: 0,
  class: "ahead"
}, ni = {
  key: 1,
  class: "behind"
}, li = {
  key: 0,
  class: "tracking-info"
}, ii = /* @__PURE__ */ H({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const s = t, i = P(() => s.fetchingRemote === s.remote.name), g = P(() => s.remote.is_default), h = P(() => !!s.trackingBranch);
    function m(f) {
      const u = new Date(f), M = (/* @__PURE__ */ new Date()).getTime() - u.getTime(), S = Math.floor(M / 6e4);
      if (S < 1) return "Just now";
      if (S < 60) return `${S}m ago`;
      const C = Math.floor(S / 60);
      if (C < 24) return `${C}h ago`;
      const $ = Math.floor(C / 24);
      return $ < 7 ? `${$}d ago` : u.toLocaleDateString();
    }
    return (f, u) => (o(), p(de, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        v(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", ti, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), n("span", oi, "DEFAULT")) : r("", !0),
          t.syncStatus ? (o(), n("span", si, [
            t.syncStatus.ahead > 0 ? (o(), n("span", ai, "↑" + l(t.syncStatus.ahead), 1)) : r("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", ni, "↓" + l(t.syncStatus.behind), 1)) : r("", !0)
          ])) : r("", !0)
        ])
      ]),
      subtitle: a(() => [
        h.value ? (o(), n("span", li, " Tracking: " + l(t.trackingBranch), 1)) : r("", !0)
      ]),
      details: a(() => {
        var y;
        return [
          d(Z, { label: "Fetch:" }, {
            default: a(() => [
              d(pt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), p(Z, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              d(pt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : r("", !0),
          (y = t.syncStatus) != null && y.last_fetch ? (o(), p(Z, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(m(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : r("", !0)
        ];
      }),
      actions: a(() => [
        d(A, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: u[0] || (u[0] = (y) => f.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...u[3] || (u[3] = [
            v(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        d(A, {
          variant: "secondary",
          size: "xs",
          onClick: u[1] || (u[1] = (y) => f.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...u[4] || (u[4] = [
            v(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? r("", !0) : (o(), p(A, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: u[2] || (u[2] = (y) => f.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...u[5] || (u[5] = [
            v(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), ri = /* @__PURE__ */ j(ii, [["__scopeId", "data-v-17362e45"]]), ci = ["for"], di = {
  key: 0,
  class: "base-form-field-required"
}, ui = { class: "base-form-field-input" }, mi = {
  key: 1,
  class: "base-form-field-error"
}, vi = {
  key: 2,
  class: "base-form-field-hint"
}, fi = /* @__PURE__ */ H({
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
    const c = t, s = P(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, g) => (o(), n("div", {
      class: Y(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        v(l(t.label) + " ", 1),
        t.required ? (o(), n("span", di, "*")) : r("", !0)
      ], 8, ci)) : r("", !0),
      e("div", ui, [
        te(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", mi, l(t.error), 1)) : t.hint ? (o(), n("span", vi, l(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ j(fi, [["__scopeId", "data-v-9a1cf296"]]), gi = ["type", "value", "placeholder", "disabled"], hi = {
  key: 0,
  class: "base-input-error"
}, pi = /* @__PURE__ */ H({
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
    return (c, s) => (o(), n("div", {
      class: Y(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: Y(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ee((i) => c.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ee((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, gi),
      t.error ? (o(), n("span", hi, l(t.error), 1)) : r("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ j(pi, [["__scopeId", "data-v-9ba02cdc"]]), yi = { class: "remote-form" }, wi = { class: "form-header" }, bi = { class: "form-body" }, ki = {
  key: 0,
  class: "form-error"
}, $i = { class: "form-actions" }, _i = /* @__PURE__ */ H({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const s = t, i = c, g = _({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), h = _(!1), m = _(null);
    bt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const f = P(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!f.value || h.value)) {
        m.value = null, h.value = !0;
        try {
          i("submit", g.value);
        } catch (y) {
          m.value = y instanceof Error ? y.message : "Failed to submit form";
        } finally {
          h.value = !1;
        }
      }
    }
    return (y, M) => (o(), n("div", yi, [
      e("div", wi, [
        d(pe, null, {
          default: a(() => [
            v(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", bi, [
        d(lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            d(it, {
              modelValue: g.value.name,
              "onUpdate:modelValue": M[0] || (M[0] = (S) => g.value.name = S),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        d(lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            d(it, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": M[1] || (M[1] = (S) => g.value.fetchUrl = S),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        d(lt, { label: "Push URL (optional)" }, {
          default: a(() => [
            d(it, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": M[2] || (M[2] = (S) => g.value.pushUrl = S),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), n("div", ki, l(m.value), 1)) : r("", !0)
      ]),
      e("div", $i, [
        d(A, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: h.value,
          onClick: u
        }, {
          default: a(() => [
            v(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        d(A, {
          variant: "ghost",
          size: "md",
          onClick: M[3] || (M[3] = (S) => y.$emit("cancel"))
        }, {
          default: a(() => [...M[4] || (M[4] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ci = /* @__PURE__ */ j(_i, [["__scopeId", "data-v-56021b18"]]), xi = { key: 0 }, Si = /* @__PURE__ */ H({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: g,
      fetchRemote: h,
      getRemoteSyncStatus: m
    } = me(), f = _([]), u = _(null), y = _({}), M = _(!1), S = _(null), C = _(""), $ = _(!1), R = _(null), b = _(!1), I = _("add"), B = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = P(() => {
      if (!C.value.trim()) return f.value;
      const F = C.value.toLowerCase();
      return f.value.filter(
        (L) => L.name.toLowerCase().includes(F) || L.fetch_url.toLowerCase().includes(F) || L.push_url.toLowerCase().includes(F)
      );
    });
    function V(F) {
      var L;
      return ((L = u.value) == null ? void 0 : L.remote) === F;
    }
    async function E() {
      M.value = !0, S.value = null;
      try {
        const F = await c();
        f.value = F.remotes, u.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (L) => {
            const J = await m(L.name);
            J && (y.value[L.name] = J);
          })
        );
      } catch (F) {
        S.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        M.value = !1;
      }
    }
    function N() {
      I.value = "add", B.value = { name: "", fetchUrl: "", pushUrl: "" }, b.value = !0;
    }
    function w(F) {
      const L = f.value.find((J) => J.name === F);
      L && (I.value = "edit", B.value = {
        name: L.name,
        fetchUrl: L.fetch_url,
        pushUrl: L.push_url
      }, b.value = !0);
    }
    async function z(F) {
      try {
        I.value === "add" ? await s(F.name, F.fetchUrl) : await g(F.name, F.fetchUrl, F.pushUrl || void 0), b.value = !1, await E();
      } catch (L) {
        S.value = L instanceof Error ? L.message : "Operation failed";
      }
    }
    function x() {
      b.value = !1, B.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function T(F) {
      R.value = F;
      try {
        await h(F);
        const L = await m(F);
        L && (y.value[F] = L);
      } catch (L) {
        S.value = L instanceof Error ? L.message : "Fetch failed";
      } finally {
        R.value = null;
      }
    }
    async function D(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await i(F), await E();
        } catch (L) {
          S.value = L instanceof Error ? L.message : "Failed to remove remote";
        }
    }
    function K() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ue(E), (F, L) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (J) => $.value = !0)
          }, {
            actions: a(() => [
              b.value ? r("", !0) : (o(), p(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: a(() => [...L[3] || (L[3] = [
                  v(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          b.value ? r("", !0) : (o(), p(We, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": L[1] || (L[1] = (J) => C.value = J),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          M.value ? (o(), p(ze, {
            key: 0,
            message: "Loading remotes..."
          })) : S.value ? (o(), p(Le, {
            key: 1,
            message: S.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            b.value ? (o(), p(Ci, {
              key: 0,
              mode: I.value,
              "remote-name": B.value.name,
              "fetch-url": B.value.fetchUrl,
              "push-url": B.value.pushUrl,
              onSubmit: z,
              onCancel: x
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            f.value.length && !b.value ? (o(), p(Fe, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + l(f.value.length) + " remote" + l(f.value.length !== 1 ? "s" : "") + " ", 1),
                u.value ? (o(), n("span", xi, " • Tracking: " + l(u.value.remote) + "/" + l(u.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            U.value.length && !b.value ? (o(), p(re, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(U.value, (J) => {
                  var se;
                  return o(), p(ri, {
                    key: J.name,
                    remote: J,
                    "sync-status": y.value[J.name],
                    "tracking-branch": V(J.name) ? (se = u.value) == null ? void 0 : se.branch : void 0,
                    "fetching-remote": R.value,
                    onFetch: T,
                    onEdit: w,
                    onRemove: D
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !U.value.length && !b.value ? (o(), p(ke, {
              key: 3,
              icon: "🌐",
              message: C.value ? `No remotes match '${C.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                d(A, {
                  variant: "primary",
                  onClick: N
                }, {
                  default: a(() => [...L[4] || (L[4] = [
                    v(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ie, {
        show: $.value,
        title: "About Git Remotes",
        onClose: L[2] || (L[2] = (J) => $.value = !1)
      }, {
        content: a(() => [...L[5] || (L[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            v(" The "),
            e("strong", null, '"origin"'),
            v(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          d(A, {
            variant: "link",
            onClick: K
          }, {
            default: a(() => [...L[6] || (L[6] = [
              v(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ei = /* @__PURE__ */ j(Si, [["__scopeId", "data-v-a75719bb"]]), Ii = { class: "setting-info" }, zi = { class: "setting-label" }, Li = {
  key: 0,
  class: "required-marker"
}, Mi = {
  key: 0,
  class: "setting-description"
}, Ni = { class: "setting-control" }, Ti = /* @__PURE__ */ H({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Y(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Ii, [
        e("div", zi, [
          v(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Li, "*")) : r("", !0)
        ]),
        t.description ? (o(), n("div", Mi, l(t.description), 1)) : r("", !0)
      ]),
      e("div", Ni, [
        te(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Se = /* @__PURE__ */ j(Ti, [["__scopeId", "data-v-cb5d236c"]]), Ri = { class: "toggle" }, Bi = ["checked", "disabled"], Di = /* @__PURE__ */ H({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, s) => (o(), n("label", Ri, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Bi),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), De = /* @__PURE__ */ j(Di, [["__scopeId", "data-v-71c0f550"]]), Ui = { class: "settings-section" }, Vi = { class: "path-setting" }, Oi = { class: "path-value" }, Ai = { class: "path-setting" }, Pi = { class: "path-value" }, Wi = { class: "settings-section" }, Fi = { class: "settings-section" }, Gi = { class: "settings-section" }, Hi = /* @__PURE__ */ H({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: s } = me(), i = _(!1), g = _(null), h = _(null), m = _(null), f = _(null), u = _(""), y = _(""), M = _(!0), S = _(!0), C = _(!1), $ = P(() => f.value ? u.value !== (f.value.civitai_api_key || "") : !1);
    async function R() {
      i.value = !0, g.value = null;
      try {
        m.value = await c(), f.value = { ...m.value }, u.value = m.value.civitai_api_key || "", y.value = m.value.huggingface_token || "", M.value = m.value.auto_sync_models, S.value = m.value.confirm_destructive;
        const U = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        C.value = U === "true";
      } catch (U) {
        g.value = U instanceof Error ? U.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function b() {
      var U;
      h.value = null;
      try {
        const V = {};
        u.value !== (((U = f.value) == null ? void 0 : U.civitai_api_key) || "") && (V.civitai_api_key = u.value || null), await s(V), await R(), h.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          h.value = null;
        }, 3e3);
      } catch (V) {
        h.value = {
          type: "error",
          message: V instanceof Error ? V.message : "Failed to save settings"
        };
      }
    }
    function I() {
      f.value && (u.value = f.value.civitai_api_key || "", y.value = f.value.huggingface_token || "", M.value = f.value.auto_sync_models, S.value = f.value.confirm_destructive, h.value = null);
    }
    function B(U) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(U)), console.log("[ComfyGit] Auto-refresh setting saved:", U);
    }
    return ue(R), (U, V) => (o(), p(fe, null, {
      header: a(() => [
        d(ge, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            d(A, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: b
            }, {
              default: a(() => [...V[5] || (V[5] = [
                v(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (o(), p(A, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: I
            }, {
              default: a(() => [...V[6] || (V[6] = [
                v(" Reset ", -1)
              ])]),
              _: 1
            })) : r("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), p(ze, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), p(Le, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: R
        }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
          d(re, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var E, N;
              return [
                e("div", Ui, [
                  e("div", Vi, [
                    V[7] || (V[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    V[8] || (V[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Oi, l(((E = m.value) == null ? void 0 : E.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Ai, [
                    V[9] || (V[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    V[10] || (V[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Pi, l(((N = m.value) == null ? void 0 : N.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          d(re, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Wi, [
                d(Se, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    d(Ye, {
                      modelValue: u.value,
                      "onUpdate:modelValue": V[0] || (V[0] = (E) => u.value = E),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Se, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Ye, {
                      modelValue: y.value,
                      "onUpdate:modelValue": V[1] || (V[1] = (E) => y.value = E),
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
          d(re, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Fi, [
                d(Se, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    d(De, {
                      modelValue: C.value,
                      "onUpdate:modelValue": [
                        V[2] || (V[2] = (E) => C.value = E),
                        B
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          d(re, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Gi, [
                d(Se, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(De, {
                      modelValue: M.value,
                      "onUpdate:modelValue": V[3] || (V[3] = (E) => M.value = E),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Se, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(De, {
                      modelValue: S.value,
                      "onUpdate:modelValue": V[4] || (V[4] = (E) => S.value = E),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), p(Fe, {
            key: 0,
            variant: (h.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Je({ color: h.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(h.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : r("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), ji = /* @__PURE__ */ j(Hi, [["__scopeId", "data-v-7861bd35"]]), Ki = /* @__PURE__ */ H({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = me(), s = _([]), i = _(!1), g = _(null), h = _(!1), m = _(null), f = P(() => s.value.length === 0 ? [] : s.value.map((y) => ({
      text: `${y.timestamp} - ${y.name} - ${y.level} - ${y.func}:${y.line} - ${y.message}`,
      level: y.level
    })));
    async function u() {
      i.value = !0, g.value = null;
      try {
        s.value = await c(void 0, 500);
      } catch (y) {
        g.value = y instanceof Error ? y.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var y;
          (y = m.value) != null && y.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ue(u), (y, M) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (S) => h.value = !0)
          }, {
            actions: a(() => [
              d(A, {
                variant: "secondary",
                size: "sm",
                onClick: u,
                disabled: i.value
              }, {
                default: a(() => [
                  v(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          i.value ? (o(), p(ze, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), p(Le, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length === 0 ? (o(), p(ke, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (o(!0), n(W, null, q(f.value, (S, C) => (o(), n("div", {
                key: C,
                class: Y(`log-line log-level-${S.level.toLowerCase()}`)
              }, l(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(Ie, {
        show: h.value,
        title: "About Workspace Logs",
        onClose: M[2] || (M[2] = (S) => h.value = !1)
      }, {
        content: a(() => [...M[3] || (M[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            v(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            v(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          d(A, {
            variant: "primary",
            onClick: M[1] || (M[1] = (S) => h.value = !1)
          }, {
            default: a(() => [...M[4] || (M[4] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), qi = /* @__PURE__ */ j(Ki, [["__scopeId", "data-v-39f6a756"]]), Yi = /* @__PURE__ */ H({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: s } = me(), i = _([]), g = _(!1), h = _(null), m = _(!1), f = _("production"), u = _(null), y = P(() => i.value.length === 0 ? [] : i.value.map((S) => ({
      text: `${S.timestamp} - ${S.name} - ${S.level} - ${S.func}:${S.line} - ${S.message}`,
      level: S.level
    })));
    async function M() {
      g.value = !0, h.value = null;
      try {
        i.value = await c(void 0, 500);
        try {
          const S = await s();
          f.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        h.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var S;
          (S = u.value) != null && S.parentElement && (u.value.parentElement.scrollTop = u.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ue(M), (S, C) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = ($) => m.value = !0)
          }, {
            actions: a(() => [
              d(A, {
                variant: "secondary",
                size: "sm",
                onClick: M,
                disabled: g.value
              }, {
                default: a(() => [
                  v(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), p(ze, {
            key: 0,
            message: "Loading environment logs..."
          })) : h.value ? (o(), p(Le, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            i.value.length === 0 ? (o(), p(ke, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: u,
              class: "log-output"
            }, [
              (o(!0), n(W, null, q(y.value, ($, R) => (o(), n("div", {
                key: R,
                class: Y(`log-line log-level-${$.level.toLowerCase()}`)
              }, l($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(Ie, {
        show: m.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = ($) => m.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            C[3] || (C[3] = v(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(f.value), 1),
            C[4] || (C[4] = v(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            v(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            v(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1)),
          C[6] || (C[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          d(A, {
            variant: "primary",
            onClick: C[1] || (C[1] = ($) => m.value = !1)
          }, {
            default: a(() => [...C[7] || (C[7] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ji = /* @__PURE__ */ j(Yi, [["__scopeId", "data-v-4f1e6f72"]]), Xi = { class: "env-title" }, Qi = {
  key: 0,
  class: "current-badge"
}, Zi = {
  key: 0,
  class: "branch-info"
}, er = /* @__PURE__ */ H({
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
    return (c, s) => (o(), p(de, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        v(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", Xi, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Qi, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Zi, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          v(" " + l(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      details: a(() => [
        d(Z, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        d(Z, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        d(Z, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), p(Z, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : r("", !0)
      ]),
      actions: a(() => [
        te(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), tr = /* @__PURE__ */ j(er, [["__scopeId", "data-v-5238e57c"]]), or = {
  key: 0,
  class: "create-form"
}, sr = { class: "create-form__header" }, ar = { class: "create-form__body" }, nr = { class: "create-form__actions" }, lr = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, ir = /* @__PURE__ */ H({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironments: i } = me(), g = _([]), h = _(!1), m = _(null), f = _(""), u = _(!1), y = _(!1), M = _(""), S = P(
      () => g.value.find((V) => V.is_current)
    ), C = P(() => {
      if (!f.value.trim()) return g.value;
      const V = f.value.toLowerCase();
      return g.value.filter(
        (E) => {
          var N;
          return E.name.toLowerCase().includes(V) || ((N = E.current_branch) == null ? void 0 : N.toLowerCase().includes(V));
        }
      );
    });
    function $(V) {
      if (!V) return "";
      try {
        const E = new Date(V), w = (/* @__PURE__ */ new Date()).getTime() - E.getTime(), z = Math.floor(w / 6e4), x = Math.floor(w / 36e5), T = Math.floor(w / 864e5);
        return z < 1 ? "just now" : z < 60 ? `${z} ${z === 1 ? "minute" : "minutes"} ago` : x < 24 ? `${x} ${x === 1 ? "hour" : "hours"} ago` : T < 30 ? `${T} ${T === 1 ? "day" : "days"} ago` : E.toLocaleDateString();
      } catch {
        return V;
      }
    }
    function R() {
      const V = M.value.trim();
      V && (s("create", V), M.value = "", y.value = !1);
    }
    function b() {
      M.value = "", y.value = !1;
    }
    function I(V) {
      s("viewDetails", V);
    }
    function B(V) {
      confirm(`Delete environment "${V}"?

This action cannot be undone.`) && s("delete", V);
    }
    async function U() {
      h.value = !0, m.value = null;
      try {
        g.value = await i();
      } catch (V) {
        m.value = V instanceof Error ? V.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return ue(U), (V, E) => {
      const N = Gt("SectionGroup");
      return o(), n(W, null, [
        d(fe, null, {
          header: a(() => [
            d(ge, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: E[1] || (E[1] = (w) => u.value = !0)
            }, {
              actions: a(() => [
                d(A, {
                  variant: "ghost",
                  size: "sm",
                  onClick: E[0] || (E[0] = (w) => y.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...E[7] || (E[7] = [
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
                d(A, {
                  variant: "ghost",
                  size: "sm",
                  onClick: U,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...E[8] || (E[8] = [
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
            d(We, {
              modelValue: f.value,
              "onUpdate:modelValue": E[2] || (E[2] = (w) => f.value = w),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            h.value ? (o(), p(ze, {
              key: 0,
              message: "Loading environments..."
            })) : m.value ? (o(), p(Le, {
              key: 1,
              message: m.value,
              retry: !0,
              onRetry: U
            }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
              y.value ? (o(), n("div", or, [
                e("div", sr, [
                  E[10] || (E[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  d(A, {
                    variant: "ghost",
                    size: "xs",
                    onClick: b
                  }, {
                    default: a(() => [...E[9] || (E[9] = [
                      v(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", ar, [
                  d(Ye, {
                    modelValue: M.value,
                    "onUpdate:modelValue": E[3] || (E[3] = (w) => M.value = w),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ee(R, ["enter"]),
                      Ee(b, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", nr, [
                    d(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: R,
                      disabled: !M.value.trim()
                    }, {
                      default: a(() => [...E[11] || (E[11] = [
                        v(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: b
                    }, {
                      default: a(() => [...E[12] || (E[12] = [
                        v(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : r("", !0),
              g.value.length ? (o(), p(Fe, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  v(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  S.value ? (o(), n(W, { key: 0 }, [
                    E[13] || (E[13] = v(" • Current: ", -1)),
                    e("strong", null, l(S.value.name), 1)
                  ], 64)) : r("", !0)
                ]),
                _: 1
              })) : r("", !0),
              C.value.length ? (o(), p(N, {
                key: 2,
                title: "ENVIRONMENTS",
                count: C.value.length
              }, {
                default: a(() => [
                  (o(!0), n(W, null, q(C.value, (w) => (o(), p(tr, {
                    key: w.name,
                    "environment-name": w.name,
                    "is-current": w.is_current,
                    "current-branch": w.current_branch,
                    "workflow-count": w.workflow_count,
                    "node-count": w.node_count,
                    "model-count": w.model_count,
                    "last-used": $(w.last_used),
                    "show-last-used": !!w.last_used
                  }, {
                    actions: a(() => [
                      w.is_current ? r("", !0) : (o(), p(A, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (z) => V.$emit("switch", w.name)
                      }, {
                        default: a(() => [...E[14] || (E[14] = [
                          v(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      d(A, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (z) => I(w.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...E[15] || (E[15] = [
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
                      !w.is_current && g.value.length > 1 ? (o(), p(A, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (z) => B(w.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", lr, [...E[16] || (E[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : r("", !0),
              C.value.length ? r("", !0) : (o(), p(ke, {
                key: 3,
                icon: "🌍",
                message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
              }, kt({ _: 2 }, [
                f.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    d(A, {
                      variant: "primary",
                      onClick: E[4] || (E[4] = (w) => y.value = !0)
                    }, {
                      default: a(() => [...E[17] || (E[17] = [
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
        d(Ie, {
          show: u.value,
          title: "About Environments",
          onClose: E[6] || (E[6] = (w) => u.value = !1)
        }, {
          content: a(() => [...E[18] || (E[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              v(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            d(A, {
              variant: "secondary",
              onClick: E[5] || (E[5] = (w) => u.value = !1)
            }, {
              default: a(() => [...E[19] || (E[19] = [
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
}), rr = /* @__PURE__ */ j(ir, [["__scopeId", "data-v-97d6527d"]]), cr = { class: "file-path" }, dr = { class: "file-path-text" }, ur = ["title"], mr = /* @__PURE__ */ H({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, s = _(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, h) => (o(), n("div", cr, [
      h[0] || (h[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", dr, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, ur)) : r("", !0)
    ]));
  }
}), vr = /* @__PURE__ */ j(mr, [["__scopeId", "data-v-f0982173"]]), fr = { class: "output-path-input" }, gr = { class: "export-actions" }, hr = {
  key: 1,
  class: "export-warning"
}, pr = /* @__PURE__ */ H({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = me(), s = _(""), i = _(!1), g = _(null), h = _(!1);
    async function m() {
      i.value = !0, g.value = null;
      try {
        const u = await c(s.value || void 0);
        g.value = u;
      } catch (u) {
        g.value = {
          status: "error",
          message: u instanceof Error ? u.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function f() {
      var u;
      if ((u = g.value) != null && u.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (y) {
          console.error("Failed to copy path:", y);
        }
    }
    return (u, y) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              d(A, {
                variant: "ghost",
                size: "sm",
                onClick: y[0] || (y[0] = (M) => h.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...y[5] || (y[5] = [
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
          d(re, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              d(de, { status: "synced" }, {
                icon: a(() => [...y[6] || (y[6] = [
                  v("📦", -1)
                ])]),
                title: a(() => [...y[7] || (y[7] = [
                  v("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...y[8] || (y[8] = [
                  v(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  d(Z, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  d(Z, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  d(Z, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  d(Z, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(re, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              d(de, { status: "synced" }, {
                icon: a(() => [...y[9] || (y[9] = [
                  v("📁", -1)
                ])]),
                title: a(() => [...y[10] || (y[10] = [
                  v("Output Destination", -1)
                ])]),
                subtitle: a(() => [...y[11] || (y[11] = [
                  v(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", fr, [
                    d(Ye, {
                      modelValue: s.value,
                      "onUpdate:modelValue": y[1] || (y[1] = (M) => s.value = M),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(re, { title: "EXPORT" }, {
            default: a(() => [
              e("div", gr, [
                d(A, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: m
                }, {
                  default: a(() => [
                    y[12] || (y[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    v(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), p(A, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: y[2] || (y[2] = (M) => s.value = "")
                }, {
                  default: a(() => [...y[13] || (y[13] = [
                    v(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), p(re, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              d(de, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, kt({
                icon: a(() => [
                  v(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  v(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  v(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    d(Z, { label: "Saved to:" }, {
                      default: a(() => [
                        d(vr, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), p(Z, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), n("div", hr, [...y[14] || (y[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: f
                    }, {
                      default: a(() => [...y[15] || (y[15] = [
                        v(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    d(A, {
                      variant: "ghost",
                      size: "sm",
                      onClick: y[3] || (y[3] = (M) => g.value = null)
                    }, {
                      default: a(() => [...y[16] || (y[16] = [
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
          })) : r("", !0)
        ]),
        _: 1
      }),
      d(Ie, {
        show: h.value,
        title: "About Environment Export",
        onClose: y[4] || (y[4] = (M) => h.value = !1)
      }, {
        content: a(() => [...y[17] || (y[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            v(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), yr = /* @__PURE__ */ j(pr, [["__scopeId", "data-v-1777a9d5"]]), wr = { class: "file-input-wrapper" }, br = ["accept", "multiple", "disabled"], kr = /* @__PURE__ */ H({
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
  setup(t, { expose: c, emit: s }) {
    const i = s, g = _(null);
    function h() {
      var f;
      (f = g.value) == null || f.click();
    }
    function m(f) {
      const u = f.target;
      u.files && u.files.length > 0 && (i("change", u.files), u.value = "");
    }
    return c({
      triggerInput: h
    }), (f, u) => (o(), n("div", wr, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, br),
      d(A, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: h
      }, {
        default: a(() => [
          te(f.$slots, "default", {}, () => [
            u[0] || (u[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            v(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), $r = /* @__PURE__ */ j(kr, [["__scopeId", "data-v-cd192091"]]), _r = {
  key: 0,
  class: "drop-zone-empty"
}, Cr = { class: "drop-zone-text" }, xr = { class: "drop-zone-primary" }, Sr = { class: "drop-zone-secondary" }, Er = { class: "drop-zone-actions" }, Ir = {
  key: 1,
  class: "drop-zone-file"
}, zr = { class: "file-info" }, Lr = { class: "file-details" }, Mr = { class: "file-name" }, Nr = { class: "file-size" }, Tr = /* @__PURE__ */ H({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: c }) {
    const s = c, i = _(!1), g = _(null), h = _(0), m = P(() => g.value !== null), f = P(() => {
      var I;
      return ((I = g.value) == null ? void 0 : I.name) || "";
    }), u = P(() => {
      if (!g.value) return "";
      const I = g.value.size;
      return I < 1024 ? `${I} B` : I < 1024 * 1024 ? `${(I / 1024).toFixed(1)} KB` : I < 1024 * 1024 * 1024 ? `${(I / (1024 * 1024)).toFixed(1)} MB` : `${(I / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function y(I) {
      var B;
      h.value++, (B = I.dataTransfer) != null && B.types.includes("Files") && (i.value = !0);
    }
    function M(I) {
      I.dataTransfer && (I.dataTransfer.dropEffect = "copy");
    }
    function S() {
      h.value--, h.value === 0 && (i.value = !1);
    }
    function C(I) {
      var U;
      h.value = 0, i.value = !1;
      const B = (U = I.dataTransfer) == null ? void 0 : U.files;
      B && B.length > 0 && R(B[0]);
    }
    function $(I) {
      I.length > 0 && R(I[0]);
    }
    function R(I) {
      g.value = I, s("fileSelected", I);
    }
    function b() {
      g.value = null, s("clear");
    }
    return (I, B) => (o(), n("div", {
      class: Y(["file-drop-zone", { "drop-active": i.value, "has-file": m.value }]),
      onDragenter: ve(y, ["prevent"]),
      onDragover: ve(M, ["prevent"]),
      onDragleave: ve(S, ["prevent"]),
      onDrop: ve(C, ["prevent"])
    }, [
      m.value ? (o(), n("div", Ir, [
        e("div", zr, [
          B[1] || (B[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Lr, [
            e("div", Mr, l(f.value), 1),
            e("div", Nr, l(u.value), 1)
          ])
        ]),
        d(A, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: a(() => [...B[2] || (B[2] = [
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
      ])) : (o(), n("div", _r, [
        B[0] || (B[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Cr, [
          e("p", xr, l(t.primaryText), 1),
          e("p", Sr, l(t.secondaryText), 1)
        ]),
        e("div", Er, [
          d($r, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
          }, {
            default: a(() => [
              v(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Rr = /* @__PURE__ */ j(Tr, [["__scopeId", "data-v-e00abbca"]]), Br = { class: "import-preview" }, Dr = { class: "preview-header" }, Ur = {
  key: 0,
  class: "source-env"
}, Vr = { class: "preview-content" }, Or = { class: "preview-section" }, Ar = { class: "section-header" }, Pr = { class: "section-info" }, Wr = { class: "section-count" }, Fr = {
  key: 0,
  class: "item-list"
}, Gr = { class: "item-name" }, Hr = {
  key: 0,
  class: "item-more"
}, jr = { class: "preview-section" }, Kr = { class: "section-header" }, qr = { class: "section-info" }, Yr = { class: "section-count" }, Jr = {
  key: 0,
  class: "item-list"
}, Xr = { class: "item-details" }, Qr = { class: "item-name" }, Zr = { class: "item-meta" }, ec = {
  key: 0,
  class: "item-more"
}, tc = { class: "preview-section" }, oc = { class: "section-header" }, sc = { class: "section-info" }, ac = { class: "section-count" }, nc = {
  key: 0,
  class: "item-list"
}, lc = { class: "item-name" }, ic = {
  key: 0,
  class: "item-more"
}, rc = {
  key: 0,
  class: "preview-section"
}, cc = { class: "git-info" }, dc = /* @__PURE__ */ H({
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
    const c = t, s = P(() => c.workflows.length), i = P(() => c.models.length), g = P(() => c.nodes.length);
    function h(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, f) => (o(), n("div", Br, [
      e("div", Dr, [
        d(pe, null, {
          default: a(() => [...f[0] || (f[0] = [
            v("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Ur, [
          f[1] || (f[1] = v(" From: ", -1)),
          d(dt, null, {
            default: a(() => [
              v(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", Vr, [
        e("div", Or, [
          e("div", Ar, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Pr, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Wr, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Fr, [
            (o(!0), n(W, null, q(t.workflows.slice(0, t.maxPreviewItems), (u) => (o(), n("div", {
              key: u,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Gr, l(u), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Hr, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", jr, [
          e("div", Kr, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", qr, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Yr, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Jr, [
            (o(!0), n(W, null, q(t.models.slice(0, t.maxPreviewItems), (u) => (o(), n("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Xr, [
                e("span", Qr, l(u.filename), 1),
                e("span", Zr, l(h(u.size)) + " • " + l(u.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", ec, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", tc, [
          e("div", oc, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", sc, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", ac, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", nc, [
            (o(!0), n(W, null, q(t.nodes.slice(0, t.maxPreviewItems), (u) => (o(), n("div", {
              key: u,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", lc, l(u), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", ic, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", rc, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", cc, [
            t.gitBranch ? (o(), p(Z, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                d(dt, null, {
                  default: a(() => [
                    v(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (o(), p(Z, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                d(xt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), uc = /* @__PURE__ */ j(dc, [["__scopeId", "data-v-182fe113"]]), mc = { class: "import-options" }, vc = { class: "options-container" }, fc = { class: "option-section" }, gc = { class: "conflict-options" }, hc = ["value", "checked", "onChange"], pc = { class: "conflict-content" }, yc = { class: "conflict-label" }, wc = { class: "conflict-description" }, bc = { class: "option-section" }, kc = { class: "component-toggles" }, $c = /* @__PURE__ */ H({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: c }) {
    const s = c, i = [
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
    return (g, h) => (o(), n("div", mc, [
      d(pe, null, {
        default: a(() => [...h[4] || (h[4] = [
          v("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", vc, [
        e("div", fc, [
          d(ct, null, {
            default: a(() => [...h[5] || (h[5] = [
              v("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", gc, [
            (o(), n(W, null, q(i, (m) => e("label", {
              key: m.value,
              class: Y(["conflict-option", { active: t.conflictMode === m.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: t.conflictMode === m.value,
                onChange: (f) => s("update:conflictMode", m.value)
              }, null, 40, hc),
              e("div", pc, [
                e("span", yc, l(m.label), 1),
                e("span", wc, l(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", bc, [
          d(ct, null, {
            default: a(() => [...h[6] || (h[6] = [
              v("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", kc, [
            d(Se, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                d(De, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": h[0] || (h[0] = (m) => s("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Se, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                d(De, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": h[1] || (h[1] = (m) => s("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Se, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                d(De, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": h[2] || (h[2] = (m) => s("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Se, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                d(De, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": h[3] || (h[3] = (m) => s("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), _c = /* @__PURE__ */ j($c, [["__scopeId", "data-v-0ec212b0"]]), Cc = {
  key: 0,
  class: "import-empty"
}, xc = { class: "import-help" }, Sc = {
  key: 1,
  class: "import-configure"
}, Ec = { class: "selected-file-bar" }, Ic = { class: "file-bar-content" }, zc = { class: "file-bar-info" }, Lc = { class: "file-bar-name" }, Mc = { class: "file-bar-size" }, Nc = { class: "import-actions" }, Tc = {
  key: 2,
  class: "import-progress"
}, Rc = { class: "progress-content" }, Bc = { class: "progress-info" }, Dc = { class: "progress-title" }, Uc = { class: "progress-detail" }, Vc = { class: "progress-bar" }, Oc = { class: "progress-status" }, Ac = {
  key: 3,
  class: "import-complete"
}, Pc = { class: "complete-message" }, Wc = { class: "complete-title" }, Fc = { class: "complete-details" }, Gc = { class: "complete-actions" }, Hc = /* @__PURE__ */ H({
  __name: "ImportSection",
  setup(t) {
    const c = _(null), s = _(!1), i = _(!1), g = _(!1), h = _(""), m = _({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), f = _({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), u = _({
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
    }), y = P(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function M(b) {
      c.value = b;
    }
    function S() {
      c.value = null, i.value = !1, g.value = !1, h.value = "";
    }
    function C() {
      S(), s.value = !1, f.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (c.value) {
        s.value = !0, i.value = !1;
        try {
          const b = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${u.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${u.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${u.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const I of b)
            f.value = I, await new Promise((B) => setTimeout(B, 800));
          f.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((I) => setTimeout(I, 500)), g.value = !0, h.value = `Successfully imported ${u.value.workflows.length} workflows, ${u.value.models.length} models, and ${u.value.nodes.length} custom nodes.`;
        } catch (b) {
          g.value = !1, h.value = b instanceof Error ? b.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function R(b) {
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (b, I) => (o(), p(fe, null, {
      header: a(() => [
        d(ge, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !c.value && !s.value ? (o(), n("div", Cc, [
          d(Rr, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: M
          }),
          e("div", xc, [
            d(pe, null, {
              default: a(() => [...I[5] || (I[5] = [
                v("How to Import", -1)
              ])]),
              _: 1
            }),
            I[6] || (I[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !s.value && !i.value ? (o(), n("div", Sc, [
          e("div", Ec, [
            e("div", Ic, [
              I[7] || (I[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", zc, [
                e("div", Lc, l(c.value.name), 1),
                e("div", Mc, l(R(c.value.size)), 1)
              ])
            ]),
            d(A, {
              variant: "ghost",
              size: "sm",
              onClick: S
            }, {
              default: a(() => [...I[8] || (I[8] = [
                v(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          d(uc, {
            "source-environment": u.value.sourceEnvironment,
            workflows: u.value.workflows,
            models: u.value.models,
            nodes: u.value.nodes,
            "git-branch": u.value.gitBranch,
            "git-commit": u.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          d(_c, {
            "conflict-mode": m.value.conflictMode,
            "onUpdate:conflictMode": I[0] || (I[0] = (B) => m.value.conflictMode = B),
            "include-workflows": m.value.includeWorkflows,
            "onUpdate:includeWorkflows": I[1] || (I[1] = (B) => m.value.includeWorkflows = B),
            "include-models": m.value.includeModels,
            "onUpdate:includeModels": I[2] || (I[2] = (B) => m.value.includeModels = B),
            "include-nodes": m.value.includeNodes,
            "onUpdate:includeNodes": I[3] || (I[3] = (B) => m.value.includeNodes = B),
            "include-git-history": m.value.includeGitHistory,
            "onUpdate:includeGitHistory": I[4] || (I[4] = (B) => m.value.includeGitHistory = B)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !m.value.includeModels && u.value.models.length > 0 ? (o(), p(Be, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${u.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", Nc, [
            d(A, {
              variant: "primary",
              size: "md",
              disabled: !y.value,
              onClick: $
            }, {
              default: a(() => [...I[9] || (I[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                v(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            d(A, {
              variant: "secondary",
              size: "md",
              onClick: S
            }, {
              default: a(() => [...I[10] || (I[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Tc, [
          e("div", Rc, [
            I[11] || (I[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Bc, [
              e("div", Dc, l(f.value.message), 1),
              e("div", Uc, l(f.value.detail), 1)
            ])
          ]),
          e("div", Vc, [
            e("div", {
              class: "progress-bar-fill",
              style: Je({ width: `${f.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Oc, l(f.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Ac, [
          e("div", {
            class: Y(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", Pc, [
            e("div", Wc, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Fc, l(h.value), 1)
          ]),
          e("div", Gc, [
            d(A, {
              variant: "primary",
              size: "md",
              onClick: C
            }, {
              default: a(() => [...I[12] || (I[12] = [
                v(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]),
      _: 1
    }));
  }
}), jc = /* @__PURE__ */ j(Hc, [["__scopeId", "data-v-18e18eb5"]]), Kc = { class: "header-info" }, qc = { class: "commit-hash" }, Yc = {
  key: 0,
  class: "commit-refs"
}, Jc = { class: "commit-message" }, Xc = { class: "commit-date" }, Qc = {
  key: 0,
  class: "loading"
}, Zc = {
  key: 1,
  class: "changes-section"
}, ed = { class: "stats-row" }, td = { class: "stat" }, od = { class: "stat insertions" }, sd = { class: "stat deletions" }, ad = {
  key: 0,
  class: "change-group"
}, nd = {
  key: 1,
  class: "change-group"
}, ld = {
  key: 0,
  class: "version"
}, id = {
  key: 2,
  class: "change-group"
}, rd = { class: "change-item" }, cd = /* @__PURE__ */ H({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: s } = me(), i = _(null), g = _(!0), h = P(() => {
      if (!i.value) return !1;
      const f = i.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), m = P(() => {
      if (!i.value) return !1;
      const f = i.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return ue(async () => {
      try {
        i.value = await s(c.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (f, u) => (o(), p(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (y) => f.$emit("close"))
    }, {
      header: a(() => {
        var y, M, S, C;
        return [
          e("div", Kc, [
            u[4] || (u[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", qc, l(((y = i.value) == null ? void 0 : y.short_hash) || t.commit.short_hash || ((M = t.commit.hash) == null ? void 0 : M.slice(0, 7))), 1),
            (C = (S = i.value) == null ? void 0 : S.refs) != null && C.length ? (o(), n("span", Yc, [
              (o(!0), n(W, null, q(i.value.refs, ($) => (o(), n("span", {
                key: $,
                class: "ref-badge"
              }, l($), 1))), 128))
            ])) : r("", !0)
          ]),
          d(ce, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = ($) => f.$emit("close"))
          }, {
            default: a(() => [...u[5] || (u[5] = [
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
        var y, M;
        return [
          e("div", Jc, l(((y = i.value) == null ? void 0 : y.message) || t.commit.message), 1),
          e("div", Xc, l(((M = i.value) == null ? void 0 : M.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), n("div", Qc, "Loading details...")) : i.value ? (o(), n("div", Zc, [
            e("div", ed, [
              e("span", td, l(i.value.stats.files_changed) + " files", 1),
              e("span", od, "+" + l(i.value.stats.insertions), 1),
              e("span", sd, "-" + l(i.value.stats.deletions), 1)
            ]),
            h.value ? (o(), n("div", ad, [
              d(Ne, { variant: "section" }, {
                default: a(() => [...u[6] || (u[6] = [
                  v("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, q(i.value.changes.workflows.added, (S) => (o(), n("div", {
                key: "add-" + S,
                class: "change-item added"
              }, [
                u[7] || (u[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(S), 1)
              ]))), 128)),
              (o(!0), n(W, null, q(i.value.changes.workflows.modified, (S) => (o(), n("div", {
                key: "mod-" + S,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(S), 1)
              ]))), 128)),
              (o(!0), n(W, null, q(i.value.changes.workflows.deleted, (S) => (o(), n("div", {
                key: "del-" + S,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(S), 1)
              ]))), 128))
            ])) : r("", !0),
            m.value ? (o(), n("div", nd, [
              d(Ne, { variant: "section" }, {
                default: a(() => [...u[10] || (u[10] = [
                  v("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, q(i.value.changes.nodes.added, (S) => (o(), n("div", {
                key: "add-" + S.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(S.name), 1),
                S.version ? (o(), n("span", ld, "(" + l(S.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (o(!0), n(W, null, q(i.value.changes.nodes.removed, (S) => (o(), n("div", {
                key: "rem-" + S.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(S.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", id, [
              d(Ne, { variant: "section" }, {
                default: a(() => [...u[13] || (u[13] = [
                  v("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", rd, [
                u[14] || (u[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (y) => f.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...u[15] || (u[15] = [
            v(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        d(ce, {
          variant: "primary",
          onClick: u[2] || (u[2] = (y) => f.$emit("checkout", t.commit))
        }, {
          default: a(() => [...u[16] || (u[16] = [
            v(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), dd = /* @__PURE__ */ j(cd, [["__scopeId", "data-v-d256ff6d"]]), ud = { class: "dialog-message" }, md = {
  key: 0,
  class: "dialog-details"
}, vd = {
  key: 1,
  class: "dialog-warning"
}, fd = /* @__PURE__ */ H({
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
    return (c, s) => (o(), p(tt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => c.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", ud, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", md, [
          (o(!0), n(W, null, q(t.details, (i, g) => (o(), n("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (o(), n("p", vd, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          v(" " + l(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => c.$emit("cancel"))
        }, {
          default: a(() => [
            v(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), p(ce, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => c.$emit("secondary"))
        }, {
          default: a(() => [
            v(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        d(ce, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
        }, {
          default: a(() => [
            v(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gd = /* @__PURE__ */ j(fd, [["__scopeId", "data-v-3670b9f5"]]), hd = { class: "base-textarea-wrapper" }, pd = ["value", "rows", "placeholder", "disabled", "maxlength"], yd = {
  key: 0,
  class: "base-textarea-count"
}, wd = /* @__PURE__ */ H({
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
    return (c, s) => (o(), n("div", hd, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ee(ve((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ee(ve((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, pd),
      t.showCharCount && t.maxLength ? (o(), n("div", yd, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ j(wd, [["__scopeId", "data-v-5516e6fc"]]), bd = ["checked", "disabled"], kd = { class: "base-checkbox-box" }, $d = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, _d = {
  key: 0,
  class: "base-checkbox-label"
}, Cd = /* @__PURE__ */ H({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, s) => (o(), n("label", {
      class: Y(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, bd),
      e("span", kd, [
        t.modelValue ? (o(), n("svg", $d, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (o(), n("span", _d, [
        te(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ j(Cd, [["__scopeId", "data-v-bf17c831"]]), xd = { class: "popover-header" }, Sd = { class: "popover-body" }, Ed = {
  key: 0,
  class: "changes-summary"
}, Id = {
  key: 0,
  class: "change-item"
}, zd = {
  key: 1,
  class: "change-item"
}, Ld = {
  key: 2,
  class: "change-item"
}, Md = {
  key: 3,
  class: "change-item"
}, Nd = {
  key: 4,
  class: "change-item"
}, Td = {
  key: 1,
  class: "no-changes"
}, Rd = {
  key: 2,
  class: "loading"
}, Bd = {
  key: 3,
  class: "issues-warning"
}, Dd = { class: "warning-header" }, Ud = { class: "warning-title" }, Vd = { class: "issues-list" }, Od = { class: "message-section" }, Ad = { class: "popover-footer" }, Pd = {
  key: 1,
  class: "commit-popover"
}, Wd = { class: "popover-header" }, Fd = { class: "popover-body" }, Gd = {
  key: 0,
  class: "changes-summary"
}, Hd = {
  key: 0,
  class: "change-item"
}, jd = {
  key: 1,
  class: "change-item"
}, Kd = {
  key: 2,
  class: "change-item"
}, qd = {
  key: 3,
  class: "change-item"
}, Yd = {
  key: 4,
  class: "change-item"
}, Jd = {
  key: 1,
  class: "no-changes"
}, Xd = {
  key: 2,
  class: "loading"
}, Qd = {
  key: 3,
  class: "issues-warning"
}, Zd = { class: "warning-header" }, eu = { class: "warning-title" }, tu = { class: "issues-list" }, ou = { class: "message-section" }, su = { class: "popover-footer" }, au = /* @__PURE__ */ H({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const s = t, i = c, { commit: g } = me(), h = _(""), m = _(!1), f = _(!1), u = _(null), y = P(() => {
      if (!s.status) return !1;
      const R = s.status.workflows;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || s.status.has_changes;
    }), M = P(() => {
      var R;
      return (R = s.status) != null && R.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), S = P(() => M.value.length > 0), C = P(() => S.value && !f.value);
    async function $() {
      var R, b, I;
      if (!(S.value && !f.value) && !(!y.value || !h.value.trim() || m.value)) {
        m.value = !0, u.value = null;
        try {
          const B = await g(h.value.trim(), f.value);
          B.status === "success" ? (u.value = {
            type: "success",
            message: `Committed: ${((R = B.summary) == null ? void 0 : R.new) || 0} new, ${((b = B.summary) == null ? void 0 : b.modified) || 0} modified, ${((I = B.summary) == null ? void 0 : I.deleted) || 0} deleted`
          }, h.value = "", f.value = !1, setTimeout(() => i("committed"), 1e3)) : B.status === "no_changes" ? u.value = { type: "error", message: "No changes to commit" } : B.status === "blocked" ? u.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : u.value = { type: "error", message: B.message || "Commit failed" };
        } catch (B) {
          u.value = { type: "error", message: B instanceof Error ? B.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (R, b) => t.asModal ? (o(), p(Ue, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (I) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", xd, [
            b[11] || (b[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (I) => i("close"))
            }, [...b[10] || (b[10] = [
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
          e("div", Sd, [
            t.status && y.value ? (o(), n("div", Ed, [
              t.status.workflows.new.length ? (o(), n("div", Id, [
                b[12] || (b[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (o(), n("div", zd, [
                b[13] || (b[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Ld, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Md, [
                b[15] || (b[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Nd, [
                b[16] || (b[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0)
            ])) : t.status ? (o(), n("div", Td, " No changes to commit ")) : (o(), n("div", Rd, " Loading... ")),
            S.value ? (o(), n("div", Bd, [
              e("div", Dd, [
                b[17] || (b[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Ud, l(M.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Vd, [
                (o(!0), n(W, null, q(M.value, (I) => (o(), n("div", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(I.name), 1),
                  v(": " + l(I.issue_summary), 1)
                ]))), 128))
              ]),
              d(wt, {
                modelValue: f.value,
                "onUpdate:modelValue": b[1] || (b[1] = (I) => f.value = I),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...b[18] || (b[18] = [
                  v(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", Od, [
              d(yt, {
                modelValue: h.value,
                "onUpdate:modelValue": b[2] || (b[2] = (I) => h.value = I),
                placeholder: C.value ? "Enable 'Allow issues' to commit" : y.value ? "Describe your changes..." : "No changes",
                disabled: !y.value || m.value || C.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            u.value ? (o(), n("div", {
              key: 4,
              class: Y(["result", u.value.type])
            }, l(u.value.message), 3)) : r("", !0)
          ]),
          e("div", Ad, [
            d(ce, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (I) => i("close"))
            }, {
              default: a(() => [...b[19] || (b[19] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(ce, {
              variant: f.value ? "danger" : "primary",
              disabled: !y.value || !h.value.trim() || m.value || C.value,
              loading: m.value,
              onClick: $
            }, {
              default: a(() => [
                v(l(m.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Pd, [
      e("div", Wd, [
        b[21] || (b[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (I) => i("close"))
        }, [...b[20] || (b[20] = [
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
      e("div", Fd, [
        t.status && y.value ? (o(), n("div", Gd, [
          t.status.workflows.new.length ? (o(), n("div", Hd, [
            b[22] || (b[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (o(), n("div", jd, [
            b[23] || (b[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", Kd, [
            b[24] || (b[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", qd, [
            b[25] || (b[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Yd, [
            b[26] || (b[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0)
        ])) : t.status ? (o(), n("div", Jd, " No changes to commit ")) : (o(), n("div", Xd, " Loading... ")),
        S.value ? (o(), n("div", Qd, [
          e("div", Zd, [
            b[27] || (b[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", eu, l(M.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", tu, [
            (o(!0), n(W, null, q(M.value, (I) => (o(), n("div", {
              key: I.name,
              class: "issue-item"
            }, [
              e("strong", null, l(I.name), 1),
              v(": " + l(I.issue_summary), 1)
            ]))), 128))
          ]),
          d(wt, {
            modelValue: f.value,
            "onUpdate:modelValue": b[7] || (b[7] = (I) => f.value = I),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...b[28] || (b[28] = [
              v(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", ou, [
          d(yt, {
            modelValue: h.value,
            "onUpdate:modelValue": b[8] || (b[8] = (I) => h.value = I),
            placeholder: C.value ? "Enable 'Allow issues' to commit" : y.value ? "Describe your changes..." : "No changes",
            disabled: !y.value || m.value || C.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        u.value ? (o(), n("div", {
          key: 4,
          class: Y(["result", u.value.type])
        }, l(u.value.message), 3)) : r("", !0)
      ]),
      e("div", su, [
        d(ce, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (I) => i("close"))
        }, {
          default: a(() => [...b[29] || (b[29] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        d(ce, {
          variant: f.value ? "danger" : "primary",
          disabled: !y.value || !h.value.trim() || m.value || C.value,
          loading: m.value,
          onClick: $
        }, {
          default: a(() => [
            v(l(m.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), St = /* @__PURE__ */ j(au, [["__scopeId", "data-v-38b45183"]]), nu = { class: "modal-header" }, lu = { class: "modal-body" }, iu = { class: "switch-message" }, ru = { class: "switch-details" }, cu = { class: "modal-actions" }, du = /* @__PURE__ */ H({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), p(Ue, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", nu, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", lu, [
            e("p", iu, [
              s[6] || (s[6] = v(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = v(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = v("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", ru, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", cu, [
            d(A, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(A, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                v(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), uu = /* @__PURE__ */ j(du, [["__scopeId", "data-v-e9c5253e"]]), mu = { class: "progress-bar" }, vu = /* @__PURE__ */ H({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, s = P(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, g) => (o(), n("div", mu, [
      e("div", {
        class: Y(["progress-fill", t.variant]),
        style: Je({ width: s.value })
      }, null, 6)
    ]));
  }
}), fu = /* @__PURE__ */ j(vu, [["__scopeId", "data-v-1beb0512"]]), gu = {
  key: 0,
  class: "modal-overlay"
}, hu = { class: "modal-content" }, pu = { class: "modal-body" }, yu = { class: "progress-info" }, wu = { class: "progress-percentage" }, bu = { class: "progress-state" }, ku = { class: "switch-steps" }, $u = { class: "step-icon" }, _u = { class: "step-label" }, Cu = /* @__PURE__ */ H({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, s = P(() => {
      const h = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || h[c.state] || c.state;
    }), i = P(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), g = P(() => {
      const h = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = h.findIndex((f) => f.state === c.state);
      return h.map((f, u) => {
        let y = "pending", M = "○";
        return u < m ? (y = "completed", M = "✓") : u === m && (y = "active", M = "⟳"), {
          ...f,
          status: y,
          icon: M
        };
      });
    });
    return (h, m) => (o(), p(Ue, { to: "body" }, [
      t.show ? (o(), n("div", gu, [
        e("div", hu, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", pu, [
            d(fu, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", yu, [
              e("div", wu, l(t.progress) + "%", 1),
              e("div", bu, l(s.value), 1)
            ]),
            e("div", ku, [
              (o(!0), n(W, null, q(g.value, (f) => (o(), n("div", {
                key: f.state,
                class: Y(["switch-step", f.status])
              }, [
                e("span", $u, l(f.icon), 1),
                e("span", _u, l(f.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), xu = /* @__PURE__ */ j(Cu, [["__scopeId", "data-v-768a5078"]]), Su = { class: "modal-header" }, Eu = { class: "modal-body" }, Iu = {
  key: 0,
  class: "node-section"
}, zu = { class: "node-list" }, Lu = {
  key: 1,
  class: "node-section"
}, Mu = { class: "node-list" }, Nu = { class: "modal-actions" }, Tu = /* @__PURE__ */ H({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), p(Ue, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Su, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Eu, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Iu, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", zu, [
                (o(!0), n(W, null, q(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", Lu, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Mu, [
                (o(!0), n(W, null, q(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + l(i), 1))), 128))
              ])
            ])) : r("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Nu, [
            d(A, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(A, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                v(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Ru = /* @__PURE__ */ j(Tu, [["__scopeId", "data-v-7cad7518"]]);
async function He(t, c = {}, s = 5e3) {
  const i = new AbortController(), g = setTimeout(() => i.abort(), s);
  try {
    const h = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(g), h;
  } catch (h) {
    throw clearTimeout(g), h.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : h;
  }
}
function Bu() {
  const t = _(null);
  async function c() {
    try {
      const m = await He(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (m.ok)
        return (await m.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await He(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await He(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Failed to get status");
      return await m.json();
    } catch {
      return null;
    }
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await He(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function h() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await He(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: c,
    checkHealth: s,
    getStatus: i,
    restart: g,
    kill: h
  };
}
const Du = { class: "comfygit-panel" }, Uu = { class: "panel-header" }, Vu = { class: "header-left" }, Ou = {
  key: 0,
  class: "header-info"
}, Au = { class: "header-actions" }, Pu = { class: "env-switcher" }, Wu = {
  key: 0,
  class: "header-info"
}, Fu = { class: "branch-name" }, Gu = { class: "panel-main" }, Hu = { class: "sidebar" }, ju = { class: "sidebar-section" }, Ku = { class: "sidebar-section" }, qu = { class: "sidebar-section" }, Yu = { class: "content-area" }, Ju = {
  key: 0,
  class: "error-message"
}, Xu = {
  key: 1,
  class: "loading"
}, Qu = { class: "dialog-content env-selector-dialog" }, Zu = { class: "dialog-header" }, em = { class: "dialog-body" }, tm = { class: "env-list" }, om = { class: "env-info" }, sm = { class: "env-name-row" }, am = { class: "env-indicator" }, nm = { class: "env-name" }, lm = {
  key: 0,
  class: "env-branch"
}, im = {
  key: 1,
  class: "current-label"
}, rm = { class: "env-stats" }, cm = ["onClick"], dm = { class: "toast-container" }, um = { class: "toast-icon" }, mm = { class: "toast-message" }, vm = /* @__PURE__ */ H({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const s = c, {
      getStatus: i,
      getHistory: g,
      getBranches: h,
      checkout: m,
      createBranch: f,
      switchBranch: u,
      getEnvironments: y,
      switchEnvironment: M,
      getSwitchProgress: S,
      syncEnvironmentManually: C
    } = me(), $ = Bu(), R = _(null), b = _([]), I = _([]), B = _([]), U = P(() => B.value.find((O) => O.is_current)), V = _(!1), E = _(null), N = _(null), w = _(!1), z = _(!1), x = _(!1), T = _(""), D = _({ state: "idle", progress: 0, message: "" });
    let K = null, F = null;
    const L = _("status"), J = _("this-env");
    function se(O, k) {
      L.value = O, J.value = k;
    }
    function Ve(O) {
      const oe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[O];
      oe && se(oe.view, oe.section);
    }
    function Oe() {
      se("branches", "this-env");
    }
    const ie = _(null), _e = _(!1), X = _(!1), Me = _([]);
    let ot = 0;
    function ne(O, k = "info", oe = 3e3) {
      const le = ++ot;
      return Me.value.push({ id: le, message: O, type: k }), oe > 0 && setTimeout(() => {
        Me.value = Me.value.filter((ye) => ye.id !== le);
      }, oe), le;
    }
    function $e(O) {
      Me.value = Me.value.filter((k) => k.id !== O);
    }
    function st(O) {
      switch (O) {
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
    const G = P(() => {
      if (!R.value) return "neutral";
      const O = R.value.workflows, k = O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || R.value.has_changes;
      return R.value.comparison.is_synced ? k ? "warning" : "success" : "error";
    });
    P(() => R.value ? G.value === "success" ? "All synced" : G.value === "warning" ? "Uncommitted changes" : G.value === "error" ? "Not synced" : "" : "");
    async function Q() {
      V.value = !0, E.value = null;
      try {
        const [O, k, oe, le] = await Promise.all([
          i(),
          g(),
          h(),
          y()
        ]);
        R.value = O, b.value = k.commits, I.value = oe.branches, B.value = le, s("statusUpdate", O);
      } catch (O) {
        E.value = O instanceof Error ? O.message : "Failed to load status", R.value = null, b.value = [], I.value = [];
      } finally {
        V.value = !1;
      }
    }
    function ae(O) {
      N.value = O;
    }
    async function Ge(O) {
      var oe;
      N.value = null;
      const k = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      ie.value = {
        title: k ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: k ? "You have uncommitted changes that will be lost." : `Checkout commit ${O.short_hash || ((oe = O.hash) == null ? void 0 : oe.slice(0, 7))}?`,
        details: k ? gt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: k ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: k,
        onConfirm: async () => {
          var we;
          ie.value = null, at();
          const le = ne(`Checking out ${O.short_hash || ((we = O.hash) == null ? void 0 : we.slice(0, 7))}...`, "info", 0), ye = await m(O.hash, k);
          $e(le), ye.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(ye.message || "Checkout failed", "error");
        }
      };
    }
    async function Xe(O) {
      const k = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      ie.value = {
        title: k ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: k ? "You have uncommitted changes." : `Switch to branch "${O}"?`,
        details: k ? gt() : void 0,
        warning: k ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: k ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, at();
          const oe = ne(`Switching to ${O}...`, "info", 0), le = await u(O, k);
          $e(oe), le.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(le.message || "Branch switch failed", "error");
        }
      };
    }
    async function Mt(O) {
      const k = ne(`Creating branch ${O}...`, "info", 0), oe = await f(O);
      $e(k), oe.status === "success" ? (ne(`Branch "${O}" created`, "success"), await Q()) : ne(oe.message || "Failed to create branch", "error");
    }
    async function Nt(O) {
      N.value = null;
      const k = prompt("Enter branch name:");
      if (k) {
        const oe = ne(`Creating branch ${k}...`, "info", 0), le = await f(k, O.hash);
        $e(oe), le.status === "success" ? (ne(`Branch "${k}" created from ${O.short_hash}`, "success"), await Q()) : ne(le.message || "Failed to create branch", "error");
      }
    }
    function at() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ft(O) {
      w.value = !1, T.value = O, z.value = !0;
    }
    async function Tt() {
      z.value = !1, x.value = !0, at(), D.value = {
        progress: 10,
        state: Qe(10),
        message: Ze(10)
      };
      try {
        await M(T.value), Rt(), Bt();
      } catch (O) {
        Te(), x.value = !1, ne(`Failed to initiate switch: ${O instanceof Error ? O.message : "Unknown error"}`, "error"), D.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Qe(O) {
      return O >= 100 ? "complete" : O >= 80 ? "validating" : O >= 60 ? "starting" : O >= 30 ? "syncing" : "preparing";
    }
    function Ze(O) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Qe(O)] || "";
    }
    function Rt() {
      if (F) return;
      let O = 10;
      const k = 60, oe = 5e3, le = 100, ye = (k - O) / (oe / le);
      F = window.setInterval(() => {
        if (O += ye, O >= k && (O = k, Te()), D.value.progress < k) {
          const we = Math.floor(O);
          D.value = {
            progress: we,
            state: Qe(we),
            message: Ze(we)
          };
        }
      }, le);
    }
    function Te() {
      F && (clearInterval(F), F = null);
    }
    function Bt() {
      K || (K = window.setInterval(async () => {
        try {
          let O = await $.getStatus();
          if ((!O || O.state === "idle") && (O = await S()), !O)
            return;
          const k = O.progress || 0;
          k >= 60 && Te();
          const oe = Math.max(k, D.value.progress), le = O.state && O.state !== "idle" && O.state !== "unknown", ye = le ? O.state : Qe(oe), we = le && O.message || Ze(oe);
          D.value = {
            state: ye,
            progress: oe,
            message: we
          }, O.state === "complete" ? (Te(), nt(), x.value = !1, ne(`✓ Switched to ${T.value}`, "success"), await Q(), T.value = "") : O.state === "rolled_back" ? (Te(), nt(), x.value = !1, ne("Switch failed, restored previous environment", "warning"), T.value = "") : O.state === "critical_failure" && (Te(), nt(), x.value = !1, ne(`Critical error during switch: ${O.message}`, "error"), T.value = "");
        } catch (O) {
          console.error("Failed to poll switch progress:", O);
        }
      }, 1e3));
    }
    function nt() {
      Te(), K && (clearInterval(K), K = null);
    }
    function Dt() {
      z.value = !1, T.value = "";
    }
    async function Ut() {
      _e.value = !1, await Q(), ne("✓ Changes committed", "success");
    }
    async function Vt() {
      X.value = !1;
      const O = ne("Syncing environment...", "info", 0);
      try {
        const k = await C("skip", !0);
        if ($e(O), k.status === "success") {
          const oe = [];
          k.nodes_installed.length && oe.push(`${k.nodes_installed.length} installed`), k.nodes_removed.length && oe.push(`${k.nodes_removed.length} removed`);
          const le = oe.length ? `: ${oe.join(", ")}` : "";
          ne(`✓ Environment synced${le}`, "success"), await Q();
        } else {
          const oe = k.errors.length ? k.errors.join("; ") : k.message;
          ne(`Sync failed: ${oe}`, "error");
        }
      } catch (k) {
        $e(O), ne(`Sync error: ${k instanceof Error ? k.message : "Unknown error"}`, "error");
      }
    }
    async function Ot(O) {
      const k = ne(`Creating environment "${O}"...`, "info", 0);
      $e(k), ne("Environment creation not yet implemented", "warning");
    }
    async function At(O) {
      const k = ne(`Deleting environment "${O}"...`, "info", 0);
      $e(k), ne("Environment deletion not yet implemented", "warning");
    }
    function Pt(O) {
      ne(`Viewing details for "${O}"`, "info"), se("models-env", "this-env");
    }
    function gt() {
      if (!R.value) return [];
      const O = [], k = R.value.workflows;
      return k.new.length && O.push(`${k.new.length} new workflow(s)`), k.modified.length && O.push(`${k.modified.length} modified workflow(s)`), k.deleted.length && O.push(`${k.deleted.length} deleted workflow(s)`), O;
    }
    return ue(Q), (O, k) => {
      var oe, le, ye, we;
      return o(), n("div", Du, [
        e("div", Uu, [
          e("div", Vu, [
            k[27] || (k[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            R.value ? (o(), n("div", Ou)) : r("", !0)
          ]),
          e("div", Au, [
            e("button", {
              class: Y(["icon-btn", { spinning: V.value }]),
              onClick: Q,
              title: "Refresh"
            }, [...k[28] || (k[28] = [
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
              onClick: k[0] || (k[0] = (ee) => s("close")),
              title: "Close"
            }, [...k[29] || (k[29] = [
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
        e("div", Pu, [
          k[31] || (k[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: k[1] || (k[1] = (ee) => se("environments", "all-envs"))
          }, [
            R.value ? (o(), n("div", Wu, [
              e("span", null, l(((oe = U.value) == null ? void 0 : oe.name) || ((le = R.value) == null ? void 0 : le.environment) || "Loading..."), 1),
              e("span", Fu, "(" + l(R.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            k[30] || (k[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Gu, [
          e("div", Hu, [
            e("div", ju, [
              k[32] || (k[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "status" && J.value === "this-env" }]),
                onClick: k[2] || (k[2] = (ee) => se("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "workflows" }]),
                onClick: k[3] || (k[3] = (ee) => se("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "models-env" }]),
                onClick: k[4] || (k[4] = (ee) => se("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "branches" }]),
                onClick: k[5] || (k[5] = (ee) => se("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "history" }]),
                onClick: k[6] || (k[6] = (ee) => se("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "nodes" }]),
                onClick: k[7] || (k[7] = (ee) => se("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "debug-env" }]),
                onClick: k[8] || (k[8] = (ee) => se("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            k[35] || (k[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Ku, [
              k[33] || (k[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "environments" }]),
                onClick: k[9] || (k[9] = (ee) => se("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "model-index" }]),
                onClick: k[10] || (k[10] = (ee) => se("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "settings" }]),
                onClick: k[11] || (k[11] = (ee) => se("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "debug-workspace" }]),
                onClick: k[12] || (k[12] = (ee) => se("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            k[36] || (k[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", qu, [
              k[34] || (k[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "export" }]),
                onClick: k[13] || (k[13] = (ee) => se("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "import" }]),
                onClick: k[14] || (k[14] = (ee) => se("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: L.value === "remotes" }]),
                onClick: k[15] || (k[15] = (ee) => se("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Yu, [
            E.value ? (o(), n("div", Ju, l(E.value), 1)) : !R.value && L.value === "status" ? (o(), n("div", Xu, " Loading status... ")) : (o(), n(W, { key: 2 }, [
              L.value === "status" ? (o(), p(ka, {
                key: 0,
                status: R.value,
                onSwitchBranch: Oe,
                onCommitChanges: k[16] || (k[16] = (ee) => _e.value = !0),
                onSyncEnvironment: k[17] || (k[17] = (ee) => X.value = !0),
                onViewWorkflows: k[18] || (k[18] = (ee) => se("workflows", "this-env")),
                onViewHistory: k[19] || (k[19] = (ee) => se("history", "this-env")),
                onViewDebug: k[20] || (k[20] = (ee) => se("debug-env", "this-env"))
              }, null, 8, ["status"])) : L.value === "workflows" ? (o(), p(Vl, {
                key: 1,
                onRefresh: Q
              })) : L.value === "models-env" ? (o(), p(Pl, {
                key: 2,
                onNavigate: Ve
              })) : L.value === "branches" ? (o(), p(Da, {
                key: 3,
                branches: I.value,
                current: ((ye = R.value) == null ? void 0 : ye.branch) || null,
                onSwitch: Xe,
                onCreate: Mt
              }, null, 8, ["branches", "current"])) : L.value === "history" ? (o(), p(Ka, {
                key: 4,
                commits: b.value,
                onSelect: ae,
                onCheckout: Ge
              }, null, 8, ["commits"])) : L.value === "nodes" ? (o(), p(ql, { key: 5 })) : L.value === "debug-env" ? (o(), p(Ji, { key: 6 })) : L.value === "environments" ? (o(), p(rr, {
                key: 7,
                onSwitch: ft,
                onCreate: Ot,
                onDelete: At,
                onViewDetails: Pt
              })) : L.value === "model-index" ? (o(), p(Fl, { key: 8 })) : L.value === "settings" ? (o(), p(ji, { key: 9 })) : L.value === "debug-workspace" ? (o(), p(qi, { key: 10 })) : L.value === "export" ? (o(), p(yr, { key: 11 })) : L.value === "import" ? (o(), p(jc, { key: 12 })) : L.value === "remotes" ? (o(), p(Ei, { key: 13 })) : r("", !0)
            ], 64))
          ])
        ]),
        N.value ? (o(), p(dd, {
          key: 0,
          commit: N.value,
          onClose: k[21] || (k[21] = (ee) => N.value = null),
          onCheckout: Ge,
          onCreateBranch: Nt
        }, null, 8, ["commit"])) : r("", !0),
        ie.value ? (o(), p(gd, {
          key: 1,
          title: ie.value.title,
          message: ie.value.message,
          details: ie.value.details,
          warning: ie.value.warning,
          confirmLabel: ie.value.confirmLabel,
          cancelLabel: ie.value.cancelLabel,
          secondaryLabel: ie.value.secondaryLabel,
          secondaryAction: ie.value.secondaryAction,
          destructive: ie.value.destructive,
          onConfirm: ie.value.onConfirm,
          onCancel: k[22] || (k[22] = (ee) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        d(uu, {
          show: z.value,
          "from-environment": ((we = U.value) == null ? void 0 : we.name) || "unknown",
          "to-environment": T.value,
          onConfirm: Tt,
          onClose: Dt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        _e.value && R.value ? (o(), p(St, {
          key: 2,
          status: R.value,
          "as-modal": !0,
          onClose: k[23] || (k[23] = (ee) => _e.value = !1),
          onCommitted: Ut
        }, null, 8, ["status"])) : r("", !0),
        X.value && R.value ? (o(), p(Ru, {
          key: 3,
          show: X.value,
          "mismatch-details": {
            missing_nodes: R.value.comparison.missing_nodes,
            extra_nodes: R.value.comparison.extra_nodes
          },
          onConfirm: Vt,
          onClose: k[24] || (k[24] = (ee) => X.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        d(xu, {
          show: x.value,
          state: D.value.state,
          progress: D.value.progress,
          message: D.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        w.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: k[26] || (k[26] = ve((ee) => w.value = !1, ["self"]))
        }, [
          e("div", Qu, [
            e("div", Zu, [
              k[38] || (k[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: k[25] || (k[25] = (ee) => w.value = !1)
              }, [...k[37] || (k[37] = [
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
            e("div", em, [
              k[39] || (k[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", tm, [
                (o(!0), n(W, null, q(B.value, (ee) => (o(), n("div", {
                  key: ee.name,
                  class: Y(["env-item", { current: ee.is_current }])
                }, [
                  e("div", om, [
                    e("div", sm, [
                      e("span", am, l(ee.is_current ? "●" : "○"), 1),
                      e("span", nm, l(ee.name), 1),
                      ee.current_branch ? (o(), n("span", lm, "(" + l(ee.current_branch) + ")", 1)) : r("", !0),
                      ee.is_current ? (o(), n("span", im, "CURRENT")) : r("", !0)
                    ]),
                    e("div", rm, l(ee.workflow_count) + " workflows • " + l(ee.node_count) + " nodes ", 1)
                  ]),
                  ee.is_current ? r("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (xm) => ft(ee.name)
                  }, " SWITCH ", 8, cm))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        e("div", dm, [
          d(Ht, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(W, null, q(Me.value, (ee) => (o(), n("div", {
                key: ee.id,
                class: Y(["toast", ee.type])
              }, [
                e("span", um, l(st(ee.type)), 1),
                e("span", mm, l(ee.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), fm = /* @__PURE__ */ j(vm, [["__scopeId", "data-v-d9e68767"]]), gm = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', hm = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', pm = {
  comfy: gm,
  phosphor: hm
}, mt = "comfy", Et = "comfygit-theme";
let Re = null, It = mt;
function ym() {
  try {
    const t = localStorage.getItem(Et);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return mt;
}
function zt(t = mt) {
  Re && Re.remove(), Re = document.createElement("style"), Re.id = "comfygit-theme-styles", Re.setAttribute("data-theme", t), Re.textContent = pm[t], document.head.appendChild(Re), document.body.setAttribute("data-comfygit-theme", t), It = t;
  try {
    localStorage.setItem(Et, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function wm() {
  return It;
}
function bm(t) {
  zt(t);
}
const vt = document.createElement("link");
vt.rel = "stylesheet";
vt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(vt);
const km = ym();
zt(km);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), bm(t);
  },
  getTheme: () => {
    const t = wm();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let be = null, he = null, Ke = null;
const Pe = _(null);
async function et() {
  var t;
  if (!((t = Ae) != null && t.api)) return null;
  try {
    const c = await Ae.api.fetchApi("/v2/comfygit/status");
    c.ok && (Pe.value = await c.json());
  } catch {
  }
}
function $m() {
  if (!Pe.value) return !1;
  const t = Pe.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Pe.value.has_changes;
}
function _m() {
  be && be.remove(), be = document.createElement("div"), be.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", be.appendChild(t), be.addEventListener("click", (i) => {
    i.target === be && rt();
  });
  const c = (i) => {
    i.key === "Escape" && (rt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), $t({
    render: () => _t(fm, {
      onClose: rt,
      onStatusUpdate: (i) => {
        Pe.value = i, qe();
      }
    })
  }).mount(t), document.body.appendChild(be);
}
function rt() {
  be && (be.remove(), be = null);
}
function Cm(t) {
  je(), he = document.createElement("div"), he.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  he.style.position = "fixed", he.style.top = `${c.bottom + 8}px`, he.style.right = `${window.innerWidth - c.right}px`, he.style.zIndex = "10001";
  const s = (g) => {
    he && !he.contains(g.target) && g.target !== t && (je(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (g) => {
    g.key === "Escape" && (je(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Ke = $t({
    render: () => _t(St, {
      status: Pe.value,
      onClose: je,
      onCommitted: () => {
        je(), et().then(qe);
      }
    })
  }), Ke.mount(he), document.body.appendChild(he);
}
function je() {
  Ke && (Ke.unmount(), Ke = null), he && (he.remove(), he = null);
}
let xe = null;
function qe() {
  if (!xe) return;
  const t = xe.querySelector(".commit-indicator");
  t && (t.style.display = $m() ? "block" : "none");
}
const Lt = document.createElement("style");
Lt.textContent = `
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
document.head.appendChild(Lt);
Ae.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var i, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = _m, xe = document.createElement("button"), xe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", xe.innerHTML = 'Commit <span class="commit-indicator"></span>', xe.title = "Quick Commit", xe.onclick = () => Cm(xe), t.appendChild(c), t.appendChild(xe), (g = (i = Ae.menu) == null ? void 0 : i.settingsGroup) != null && g.element && (Ae.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await et(), qe(), setInterval(async () => {
      await et(), qe();
    }, 3e4);
    const s = Ae.api;
    if (s) {
      let h = function() {
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
        const y = document.createElement("span");
        y.textContent = "Workflows updated - refresh required", u.appendChild(y);
        const M = document.createElement("button");
        M.textContent = "Refresh", M.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, M.onmouseover = () => M.style.background = "var(--comfy-input-bg)", M.onmouseout = () => M.style.background = "var(--comfy-menu-bg)", M.onclick = () => h(), u.appendChild(M);
        const S = document.createElement("button");
        S.textContent = "×", S.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, S.onmouseover = () => S.style.opacity = "1", S.onmouseout = () => S.style.opacity = "0.6", S.onclick = () => u.remove(), u.appendChild(S), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      s.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: y, workflow_name: M } = u.detail;
        console.log(`[ComfyGit] Workflow ${y}: ${M}`), await et(), qe();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      s.addEventListener("status", async (u) => {
        const y = u.detail != null;
        y && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : m()), f = y;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
