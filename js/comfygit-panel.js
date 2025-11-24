import { app as De } from "../../scripts/app.js";
import { defineComponent as H, createElementBlock as n, openBlock as o, createCommentVNode as r, createElementVNode as e, renderSlot as te, createBlock as y, resolveDynamicComponent as ut, normalizeClass as Y, withCtx as a, toDisplayString as l, createVNode as d, createTextVNode as v, computed as W, Fragment as P, renderList as q, normalizeStyle as Je, ref as x, onMounted as ue, watch as bt, Teleport as Ue, withModifiers as ve, Transition as At, withKeys as Se, onUnmounted as Ft, resolveComponent as Gt, createSlots as kt, TransitionGroup as Ht, createApp as $t, h as _t } from "vue";
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
    return (c, s) => (o(), y(ut(`h${t.level}`), {
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
        t.showInfo ? (o(), y(Ct, {
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
    return (c, s) => (o(), y(ut(`h${t.level}`), {
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
    const c = t, s = W(() => `status-item--${c.variant}`);
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
    const c = t, s = W(() => `issue-card--${c.severity}`);
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
        (o(!0), n(P, null, q(t.items, (h, u) => (o(), n("div", {
          key: u,
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
}), Re = /* @__PURE__ */ j(Lo, [["__scopeId", "data-v-df6aa348"]]), Mo = ["type", "disabled"], No = {
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
}), V = /* @__PURE__ */ j(To, [["__scopeId", "data-v-772abe47"]]), Bo = { class: "empty-state" }, Ro = {
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
    return (c, s) => (o(), n("div", Bo, [
      t.icon ? (o(), n("div", Ro, l(t.icon), 1)) : r("", !0),
      e("p", Do, l(t.message), 1),
      t.actionLabel ? (o(), y(V, {
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
}), ke = /* @__PURE__ */ j(Uo, [["__scopeId", "data-v-4466284f"]]), Oo = { class: "branch-indicator" }, Vo = { class: "branch-indicator__info" }, Wo = { class: "branch-indicator__label" }, Po = { class: "branch-indicator__name" }, Ao = {
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
    return (c, s) => (o(), n("div", Oo, [
      e("div", Vo, [
        e("span", Wo, l(t.label), 1),
        e("span", Po, l(t.branchName), 1),
        t.remote ? (o(), n("span", Ao, "@" + l(t.remote), 1)) : r("", !0)
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
      t.value ? (o(), y(dt, {
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
}, Bs = { class: "workflow-name" }, Rs = {
  key: 1,
  class: "status-section"
}, Ds = {
  key: 0,
  class: "change-group"
}, Us = { class: "change-group-header" }, Os = { class: "change-group-title" }, Vs = { class: "change-list" }, Ws = { class: "node-name" }, Ps = {
  key: 0,
  class: "dev-badge"
}, As = {
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
    const c = t, s = x(!1);
    ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), bt(() => c.show, (_, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", _);
    }, { immediate: !0 });
    const i = W(() => {
      var _, $, R;
      return ((R = ($ = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), g = W(() => {
      var _, $, R;
      return ((R = ($ = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), h = W(() => {
      var _, $, R;
      return ((R = ($ = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : $.synced) == null ? void 0 : R.filter((b) => {
        var S, U, F;
        const E = (F = (U = (S = c.status) == null ? void 0 : S.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : F.find((B) => B.name === b);
        return !E || E.status !== "broken";
      })) || [];
    }), u = W(() => {
      var _, $, R, b, E;
      return (_ = c.status) != null && _.workflows ? ((($ = c.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((R = c.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((b = c.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((E = c.status.workflows.synced) == null ? void 0 : E.length) ?? 0) > 0 : !1;
    }), f = W(() => {
      var $, R, b;
      const _ = ($ = c.status) == null ? void 0 : $.git_changes;
      return _ ? (((R = _.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((b = _.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), m = W(() => {
      var _, $, R, b, E, S;
      return !u.value && !f.value && (($ = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : $.is_synced) && (((R = c.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((S = (E = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : E.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), p = W(() => {
      var $, R;
      const _ = (R = ($ = c.status) == null ? void 0 : $.git_changes) == null ? void 0 : R.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function z(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function I(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, $) => {
      var R, b, E, S, U, F, B, N, w, L, C, T, D, K, A, M, J, se, Oe, Ve, ie, _e;
      return o(), y(Ue, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[4] || ($[4] = (X) => _.$emit("close"))
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
                onClick: $[0] || ($[0] = (X) => _.$emit("close"))
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
              u.value ? (o(), n("div", os, [
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
                    (o(!0), n(P, null, q(i.value, (X) => (o(), n("div", {
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
                    (o(!0), n(P, null, q(g.value, (X) => (o(), n("div", {
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
                    (o(!0), n(P, null, q(t.status.workflows.new, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", ws, l(X), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = (E = t.status.workflows) == null ? void 0 : E.modified) != null && S.length ? (o(), n("div", bs, [
                  e("div", ks, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", $s, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", _s, [
                    (o(!0), n(P, null, q(t.status.workflows.modified, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(X), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (F = (U = t.status.workflows) == null ? void 0 : U.deleted) != null && F.length ? (o(), n("div", xs, [
                  e("div", Ss, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Es, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Is, [
                    (o(!0), n(P, null, q(t.status.workflows.deleted, (X) => (o(), n("div", {
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
                    (o(!0), n(P, null, q(h.value, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Bs, l(X), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              f.value ? (o(), n("div", Rs, [
                d(pe, { level: "4" }, {
                  default: a(() => [...$[14] || ($[14] = [
                    v("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (B = t.status.git_changes) == null ? void 0 : B.nodes_added) != null && N.length ? (o(), n("div", Ds, [
                  e("div", Us, [
                    $[15] || ($[15] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Os, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Vs, [
                    (o(!0), n(P, null, q(t.status.git_changes.nodes_added, (X) => (o(), n("div", {
                      key: z(X),
                      class: "change-item"
                    }, [
                      e("span", Ws, l(z(X)), 1),
                      I(X) ? (o(), n("span", Ps, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (L = (w = t.status.git_changes) == null ? void 0 : w.nodes_removed) != null && L.length ? (o(), n("div", As, [
                  e("div", Fs, [
                    $[16] || ($[16] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Gs, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), n(P, null, q(t.status.git_changes.nodes_removed, (X) => (o(), n("div", {
                      key: z(X),
                      class: "change-item"
                    }, [
                      e("span", js, l(z(X)), 1),
                      I(X) ? (o(), n("span", Ks, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = t.status.git_changes) != null && C.workflow_changes ? (o(), n("div", qs, [
                  $[17] || ($[17] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Ys, [
                    e("div", Js, [
                      e("span", Xs, l(p.value) + " workflow file(s) modified", 1)
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
                (A = (K = t.status.comparison) == null ? void 0 : K.missing_nodes) != null && A.length ? (o(), n("div", ea, [
                  d(Z, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ta, [
                    (o(!0), n(P, null, q(t.status.comparison.missing_nodes.slice(0, 10), (X) => (o(), n("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + l(X), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", oa, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (J = (M = t.status.comparison) == null ? void 0 : M.extra_nodes) != null && J.length ? (o(), n("div", sa, [
                  d(Z, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", aa, [
                    (o(!0), n(P, null, q(t.status.comparison.extra_nodes.slice(0, 10), (X) => (o(), n("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + l(X), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", na, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (Oe = (se = t.status.comparison) == null ? void 0 : se.version_mismatches) != null && Oe.length ? (o(), n("div", la, [
                  d(Z, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : r("", !0),
                (Ve = t.status.comparison) != null && Ve.packages_in_sync ? r("", !0) : (o(), n("div", ia, [
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
                  (o(!0), n(P, null, q(t.status.comparison.disabled_nodes.slice(0, 10), (X) => (o(), n("div", {
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
              m.value ? (o(), n("div", fa, [...$[26] || ($[26] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", ga, [
              d(V, {
                variant: "secondary",
                onClick: $[2] || ($[2] = (X) => _.$emit("close"))
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
    const s = t, i = x(!1), g = x(!1);
    ue(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", ht);
    });
    function h() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function u() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    const f = W(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), m = W(() => {
      const S = s.status.git_changes;
      return S.nodes_added.length > 0 || S.nodes_removed.length > 0 || S.workflow_changes || S.has_other_changes;
    }), p = W(() => f.value || m.value), z = W(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), I = W(() => s.status.git_changes.has_other_changes), _ = W(() => {
      var S;
      return ((S = s.status.workflows.analyzed) == null ? void 0 : S.filter(
        (U) => U.status === "broken" && U.sync_state === "synced"
      )) || [];
    }), $ = W(() => {
      var S;
      return ((S = s.status.workflows.analyzed) == null ? void 0 : S.filter(
        (U) => U.status === "broken" && U.sync_state !== "synced"
      )) || [];
    }), R = W(() => _.value.length > 0 || $.value.length > 0), b = W(() => R.value || s.status.missing_models_count > 0 || p.value || !s.status.comparison.is_synced), E = W(() => {
      const S = [];
      return s.status.workflows.new.length > 0 && S.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && S.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && S.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && S.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && S.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${S.length > 0 ? S.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (S, U) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: U[0] || (U[0] = (F) => g.value = !0),
            onMouseleave: U[1] || (U[1] = (F) => g.value = !1)
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
              d(At, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), y(V, {
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
                t.status.workflows.new.length ? (o(), y(Ce, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (o(), y(Ce, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (o(), y(Ce, {
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
                t.status.git_changes.nodes_added.length ? (o(), y(Ce, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), y(Ce, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (o(), y(Ce, {
                  key: 2,
                  icon: "●",
                  count: z.value,
                  label: z.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                I.value ? (o(), y(Ce, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                m.value ? r("", !0) : (o(), y(Ce, {
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
                d(V, {
                  variant: "secondary",
                  size: "sm",
                  onClick: U[2] || (U[2] = (F) => S.$emit("switch-branch"))
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
          t.status.is_detached_head ? (o(), y(Re, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              d(V, {
                variant: "primary",
                size: "sm",
                onClick: U[3] || (U[3] = (F) => S.$emit("create-branch"))
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
            _.value.length > 0 ? (o(), y(Re, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} committed workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: _.value.map((F) => `${F.name} — ${F.issue_summary}`)
            }, {
              actions: a(() => [
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[4] || (U[4] = (F) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[16] || (U[16] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : r("", !0),
            $.value.length > 0 ? (o(), y(Re, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${$.value.length} workflow${$.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: $.value.map((F) => `${F.name} — ${F.issue_summary}`)
            }, {
              actions: a(() => [
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[5] || (U[5] = (F) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[17] || (U[17] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : r("", !0),
            t.status.missing_models_count > 0 && !R.value ? (o(), y(Re, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[6] || (U[6] = (F) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[18] || (U[18] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : r("", !0),
            p.value ? (o(), y(Re, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: E.value
            }, {
              actions: a(() => [
                d(V, {
                  variant: "secondary",
                  size: "sm",
                  onClick: u
                }, {
                  default: a(() => [...U[19] || (U[19] = [
                    v(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[7] || (U[7] = (F) => S.$emit("commit-changes"))
                }, {
                  default: a(() => [...U[20] || (U[20] = [
                    v(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : r("", !0),
            t.status.comparison.is_synced ? r("", !0) : (o(), y(Re, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                d(V, {
                  variant: "secondary",
                  size: "sm",
                  onClick: U[8] || (U[8] = (F) => S.$emit("view-debug"))
                }, {
                  default: a(() => [...U[21] || (U[21] = [
                    v(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[9] || (U[9] = (F) => S.$emit("sync-environment"))
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
          !b.value && !m.value ? (o(), y(ke, {
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
        onClose: U[10] || (U[10] = (F) => i.value = !1)
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
    const i = t, g = s, h = x(null);
    function u(f) {
      const m = f.target.value;
      g("update:modelValue", m);
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
    }), (f, m) => (o(), n("input", {
      ref_key: "inputRef",
      ref: h,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: Y(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        m[0] || (m[0] = Se((p) => f.$emit("enter"), ["enter"])),
        m[1] || (m[1] = Se((p) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (p) => f.$emit("focus")),
      onBlur: m[3] || (m[3] = (p) => f.$emit("blur"))
    }, null, 42, $a));
  }
}), Ye = /* @__PURE__ */ j(_a, [["__scopeId", "data-v-0380d08f"]]), Ca = { class: "branch-create-form" }, xa = { class: "form-actions" }, Sa = /* @__PURE__ */ H({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const s = c, i = x(""), g = W(() => {
      const f = i.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function h() {
      g.value && (s("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", s("cancel");
    }
    return (f, m) => (o(), n("div", Ca, [
      d(Ye, {
        modelValue: i.value,
        "onUpdate:modelValue": m[0] || (m[0] = (p) => i.value = p),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: h,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", xa, [
        d(V, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: h
        }, {
          default: a(() => [...m[1] || (m[1] = [
            v(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        d(V, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: a(() => [...m[2] || (m[2] = [
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
}), Ta = /* @__PURE__ */ j(Na, [["__scopeId", "data-v-c6581a24"]]), Ba = {
  key: 2,
  class: "branch-list"
}, Ra = /* @__PURE__ */ H({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const s = c, i = x(!1);
    function g(u) {
      s("create", u), h();
    }
    function h() {
      i.value = !1;
    }
    return (u, f) => (o(), y(fe, null, {
      header: a(() => [
        d(ge, { title: "BRANCHES" }, {
          actions: a(() => [
            d(V, {
              variant: "ghost",
              size: "sm",
              onClick: f[0] || (f[0] = (m) => i.value = !0),
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
        i.value ? (o(), y(Ea, {
          key: 0,
          onCreate: g,
          onCancel: h
        })) : r("", !0),
        t.branches.length === 0 ? (o(), y(ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Ba, [
          (o(!0), n(P, null, q(t.branches, (m) => (o(), y(Ta, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: a(() => [
              m.is_current ? r("", !0) : (o(), y(V, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (p) => u.$emit("switch", m.name)
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
}), Da = /* @__PURE__ */ j(Ra, [["__scopeId", "data-v-763d6ec4"]]), Ua = { class: "commit-list" }, Oa = /* @__PURE__ */ H({
  __name: "CommitList",
  setup(t) {
    return (c, s) => (o(), n("div", Ua, [
      te(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Va = /* @__PURE__ */ j(Oa, [["__scopeId", "data-v-8c5ee761"]]), Wa = { class: "commit-hash" }, Pa = /* @__PURE__ */ H({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, s = W(() => c.hash.slice(0, c.length));
    return (i, g) => (o(), n("span", Wa, l(s.value), 1));
  }
}), xt = /* @__PURE__ */ j(Pa, [["__scopeId", "data-v-7c333cc6"]]), Aa = { class: "commit-message" }, Fa = { class: "commit-date" }, Ga = /* @__PURE__ */ H({
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
    return (h, u) => (o(), n("div", {
      class: Y(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      d(xt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Aa, l(t.message), 1),
      e("span", Fa, l(t.relativeDate), 1),
      h.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = ve(() => {
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
    return (c, s) => (o(), y(fe, null, {
      header: a(() => [
        d(ge, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), y(ke, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), y(Va, { key: 1 }, {
          default: a(() => [
            (o(!0), n(P, null, q(t.commits, (i) => (o(), y(Ha, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (g) => c.$emit("select", i)
            }, {
              actions: a(() => [
                d(V, {
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
  const t = x(!1), c = x(null);
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
  async function u(G) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function f() {
    return s("/v2/comfygit/branches");
  }
  async function m(G) {
    return s(`/v2/comfygit/commit/${G}`);
  }
  async function p(G, Q = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: G, force: Q })
    });
  }
  async function z(G, Q = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, start_point: Q })
    });
  }
  async function I(G, Q = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: G, force: Q })
    });
  }
  async function _() {
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
  async function E(G) {
    return s(`/v2/workspace/environments/${G}`, {
      method: "DELETE"
    });
  }
  async function S() {
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
  async function F(G) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(G)}/resolve`, {
      method: "POST"
    });
  }
  async function B(G, Q, ae) {
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
  async function L() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function C(G, Q) {
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
  async function A(G) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function M(G, Q) {
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
  async function Oe(G) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(G)}/install`, {
      method: "POST"
    });
  }
  async function Ve(G) {
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
  async function Le(G) {
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
    exportEnv: u,
    // Git Operations
    getBranches: f,
    getCommitDetail: m,
    checkout: p,
    createBranch: z,
    switchBranch: I,
    // Environment Management
    getEnvironments: _,
    switchEnvironment: $,
    getSwitchProgress: R,
    createEnvironment: b,
    deleteEnvironment: E,
    // Workflow Management
    getWorkflows: S,
    getWorkflowDetails: U,
    resolveWorkflow: F,
    installWorkflowDeps: B,
    setModelImportance: N,
    // Model Management
    getEnvironmentModels: w,
    getWorkspaceModels: L,
    updateModelSource: C,
    deleteModel: T,
    downloadModel: D,
    // Settings
    getConfig: K,
    updateConfig: A,
    // Debug/Logs
    getEnvironmentLogs: M,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: se,
    installNode: Oe,
    updateNode: Ve,
    uninstallNode: ie,
    // Git Remotes
    getRemotes: _e,
    addRemote: X,
    removeRemote: Le,
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
    function h(u) {
      u.key === "Escape" && i("close");
    }
    return ue(() => {
      document.addEventListener("keydown", h), document.body.style.overflow = "hidden";
    }), Ft(() => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), (u, f) => (o(), y(Ue, { to: "body" }, [
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
            te(u.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", Ja, l(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (m) => u.$emit("close"))
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
            t.loading ? (o(), n("div", Qa, "Loading...")) : t.error ? (o(), n("div", Za, l(t.error), 1)) : te(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (o(), n("div", en, [
            te(u.$slots, "footer", {}, void 0, !0)
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
    return (c, s) => (o(), y(ut(`h${t.level}`), {
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
        (o(!0), n(P, null, q(t.options, (h) => (o(), n("option", {
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
    return (c, s) => (o(), y(Ue, { to: "body" }, [
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
}), Ee = /* @__PURE__ */ j(yn, [["__scopeId", "data-v-42815ace"]]), wn = { class: "detail-section" }, bn = {
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
}, Tn = { class: "detail-section" }, Bn = {
  key: 0,
  class: "empty-message"
}, Rn = { class: "node-name" }, Dn = {
  key: 0,
  class: "node-version"
}, Un = /* @__PURE__ */ H({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: c }) {
    const s = t, i = c, { getWorkflowDetails: g, setModelImportance: h, installWorkflowDeps: u } = me(), f = x(null), m = x(!1), p = x(null), z = x(!1), I = x({}), _ = x({}), $ = x(!1), R = x(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function E(T) {
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
    function S(T) {
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
    function F(T) {
      return R.value.has(T);
    }
    function B(T) {
      R.value.has(T) ? R.value.delete(T) : R.value.add(T), R.value = new Set(R.value);
    }
    async function N() {
      m.value = !0, p.value = null;
      try {
        f.value = await g(s.workflowName);
      } catch (T) {
        p.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        m.value = !1;
      }
    }
    function w(T, D) {
      I.value[T] = D, z.value = !0;
    }
    async function L() {
      if (!z.value) {
        i("close");
        return;
      }
      m.value = !0, p.value = null;
      try {
        for (const [T, D] of Object.entries(I.value))
          await h(s.workflowName, T, D);
        i("close");
      } catch (T) {
        p.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        m.value = !1;
      }
    }
    async function C(T) {
      _.value[T] = !0, p.value = null;
      try {
        await u(s.workflowName, !0, !1), await N();
      } catch (D) {
        p.value = D instanceof Error ? D.message : "Failed to install node";
      } finally {
        _.value[T] = !1;
      }
    }
    return ue(N), (T, D) => (o(), n(P, null, [
      d(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: m.value,
        error: p.value || void 0,
        onClose: D[5] || (D[5] = (K) => i("close"))
      }, {
        body: a(() => [
          f.value ? (o(), n(P, { key: 0 }, [
            e("section", wn, [
              d(Ne, { variant: "section" }, {
                default: a(() => [
                  v("MODELS USED (" + l(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (o(), n("div", bn, " No models used in this workflow ")) : r("", !0),
              (o(!0), n(P, null, q(f.value.models, (K) => (o(), n("div", {
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
                      class: Y(["value", E(K.status)])
                    }, l(S(K.status)), 3)
                  ]),
                  e("div", xn, [
                    e("span", Sn, [
                      D[9] || (D[9] = v(" Importance: ", -1)),
                      d(Ct, {
                        size: 14,
                        title: "About importance levels",
                        onClick: D[0] || (D[0] = (A) => $.value = !0)
                      })
                    ]),
                    d(vn, {
                      "model-value": I.value[K.hash] || K.importance,
                      options: b,
                      "onUpdate:modelValue": (A) => w(K.hash, A)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  K.loaded_by && K.loaded_by.length > 0 ? (o(), n("div", En, [
                    D[10] || (D[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", In, [
                      (o(!0), n(P, null, q(U(K), (A, M) => (o(), n("div", {
                        key: `${A.node_id}-${M}`,
                        class: "node-reference"
                      }, l(A.node_type) + " (Node #" + l(A.node_id) + ") ", 1))), 128)),
                      K.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (A) => B(K.hash || K.filename)
                      }, l(F(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, zn)) : r("", !0)
                    ])
                  ])) : r("", !0),
                  K.size_mb ? (o(), n("div", Ln, [
                    D[11] || (D[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Mn, l(K.size_mb) + " MB", 1)
                  ])) : r("", !0)
                ]),
                K.status !== "available" ? (o(), n("div", Nn, [
                  K.status === "downloadable" ? (o(), y(ce, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: D[1] || (D[1] = (A) => i("resolve"))
                  }, {
                    default: a(() => [...D[12] || (D[12] = [
                      v(" Download ", -1)
                    ])]),
                    _: 1
                  })) : K.status === "path_mismatch" ? (o(), y(ce, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: D[2] || (D[2] = (A) => i("resolve"))
                  }, {
                    default: a(() => [...D[13] || (D[13] = [
                      v(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), y(ce, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: D[3] || (D[3] = (A) => i("resolve"))
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
              f.value.nodes.length === 0 ? (o(), n("div", Bn, " No custom nodes used in this workflow ")) : r("", !0),
              (o(!0), n(P, null, q(f.value.nodes, (K) => (o(), n("div", {
                key: K.name,
                class: "node-item"
              }, [
                e("span", {
                  class: Y(["node-status", K.status === "installed" ? "installed" : "missing"])
                }, l(K.status === "installed" ? "✓" : "✕"), 3),
                e("span", Rn, l(K.name), 1),
                K.version ? (o(), n("span", Dn, "v" + l(K.version), 1)) : r("", !0),
                K.status === "missing" ? (o(), y(ce, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: _.value[K.name],
                  onClick: (A) => C(K.name),
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
          z.value ? (o(), y(ce, {
            key: 0,
            variant: "primary",
            onClick: L
          }, {
            default: a(() => [...D[17] || (D[17] = [
              v(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      d(Ee, {
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
}), On = /* @__PURE__ */ j(Un, [["__scopeId", "data-v-1325d542"]]), Vn = {
  key: 0,
  class: "resolve-section"
}, Wn = { class: "resolve-card success-card" }, Pn = { class: "items-list" }, An = { class: "item-info" }, Fn = { class: "item-name" }, Gn = {
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
    const s = t, i = c, { resolveWorkflow: g, installWorkflowDeps: h } = me(), u = x(null), f = x(!1), m = x(!1), p = x(null), z = W(() => {
      var N;
      return u.value ? ((N = u.value.download_results) == null ? void 0 : N.every((w) => w.can_download)) ?? !1 : !1;
    });
    async function I() {
      f.value = !0, p.value = null;
      try {
        u.value = await g(s.workflowName);
      } catch (N) {
        p.value = N instanceof Error ? N.message : "Failed to analyze workflow";
      } finally {
        f.value = !1;
      }
    }
    function _(N) {
      return !N.possible_matches || N.possible_matches.length === 0 ? null : N.possible_matches.reduce(
        (w, L) => L.match_confidence > w.match_confidence ? L : w
      );
    }
    function $(N) {
      return N >= 0.9 ? "high" : N >= 0.7 ? "medium" : "low";
    }
    function R(N) {
      const w = _(N);
      return w ? w.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function b(N) {
      var w, L;
      return (L = (w = u.value) == null ? void 0 : w.download_results) == null ? void 0 : L.find((C) => C.model === N);
    }
    function E(N) {
      const w = b(N);
      return (w == null ? void 0 : w.can_download) ?? !1;
    }
    function S(N) {
      const w = b(N);
      return (w == null ? void 0 : w.source_url) || null;
    }
    function U(N) {
      window.open(N, "_blank");
    }
    async function F() {
      if (!(!u.value || m.value)) {
        m.value = !0, p.value = null;
        try {
          await h(
            s.workflowName,
            u.value.nodes_to_install,
            []
          ), i("install"), i("refresh"), i("close");
        } catch (N) {
          p.value = N instanceof Error ? N.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function B() {
      if (!(!u.value || m.value)) {
        m.value = !0, p.value = null;
        try {
          await h(
            s.workflowName,
            u.value.nodes_to_install,
            u.value.models_to_download
          ), i("install"), i("refresh"), i("close");
        } catch (N) {
          p.value = N instanceof Error ? N.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return ue(I), (N, w) => (o(), y(tt, {
      title: `RESOLVE DEPENDENCIES: ${t.workflowName}`,
      size: "lg",
      loading: f.value,
      error: p.value || void 0,
      onClose: w[1] || (w[1] = (L) => i("close"))
    }, {
      body: a(() => [
        u.value ? (o(), n(P, { key: 0 }, [
          w[5] || (w[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          u.value.nodes_unresolved.length > 0 ? (o(), n("section", Vn, [
            d(Ne, { variant: "section" }, {
              default: a(() => [
                v("NODES (" + l(u.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Wn, [
              w[2] || (w[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", Pn, [
                (o(!0), n(P, null, q(u.value.nodes_unresolved, (L) => {
                  var C;
                  return o(), n("div", {
                    key: L.node_type,
                    class: "item"
                  }, [
                    e("div", An, [
                      e("div", Fn, l(((C = _(L)) == null ? void 0 : C.package_id) || L.node_type), 1),
                      _(L) ? (o(), n("div", Gn, [
                        e("span", {
                          class: Y(["confidence-badge", $(_(L).match_confidence)])
                        }, l(Math.round(_(L).match_confidence * 100)) + "% match ", 3),
                        e("span", Hn, l(_(L).match_type), 1),
                        e("span", jn, "Source: " + l(R(L)), 1)
                      ])) : r("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : r("", !0),
          u.value.models_unresolved.length > 0 ? (o(), n("section", Kn, [
            d(Ne, { variant: "section" }, {
              default: a(() => [
                v("MODELS (" + l(u.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", qn, [
              w[3] || (w[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Yn, [
                (o(!0), n(P, null, q(u.value.models_unresolved, (L) => (o(), n("div", {
                  key: L.filename,
                  class: "item"
                }, [
                  e("div", Jn, [
                    e("div", Xn, l(L.filename), 1),
                    e("div", Qn, [
                      L.expected_category ? (o(), n("span", Zn, "Type: " + l(L.expected_category), 1)) : r("", !0),
                      b(L.filename) ? (o(), n("span", el, " Size: ~" + l(b(L.filename).estimated_size_mb) + " MB ", 1)) : r("", !0)
                    ]),
                    E(L.filename) ? r("", !0) : (o(), n("div", tl, " No auto-download source configured "))
                  ]),
                  S(L.filename) ? (o(), n("div", ol, [
                    e("button", {
                      class: "link-btn",
                      onClick: (C) => U(S(L.filename))
                    }, " Open Source ↗ ", 8, sl)
                  ])) : r("", !0)
                ]))), 128))
              ])
            ])
          ])) : r("", !0),
          u.value.nodes_resolved.length > 0 || u.value.models_resolved.length > 0 ? (o(), n("section", al, [
            d(Ne, { variant: "section" }, {
              default: a(() => [
                v(" ALREADY AVAILABLE (" + l(u.value.nodes_resolved.length + u.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", nl, l(u.value.nodes_resolved.length) + " nodes and " + l(u.value.models_resolved.length) + " models are already installed ", 1)
          ])) : r("", !0),
          e("div", ll, [
            w[4] || (w[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", il, [
              u.value.nodes_to_install.length ? (o(), n("li", rl, " Install " + l(u.value.nodes_to_install.length) + " nodes (~" + l(u.value.estimated_time_seconds) + "s) ", 1)) : r("", !0),
              u.value.nodes_to_install.length ? (o(), n("li", cl, " Restart ComfyUI to load new nodes ")) : r("", !0),
              u.value.models_to_download.length ? (o(), n("li", dl, " You'll still need to download " + l(u.value.models_to_download.length) + " model(s) manually ", 1)) : r("", !0)
            ]),
            u.value.estimated_size_mb ? (o(), n("div", ul, " Estimated download: " + l(u.value.estimated_size_mb) + " MB ", 1)) : r("", !0)
          ])
        ], 64)) : r("", !0)
      ]),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: w[0] || (w[0] = (L) => i("close"))
        }, {
          default: a(() => [...w[6] || (w[6] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u.value && u.value.nodes_to_install.length && u.value.models_to_download.length ? (o(), y(ce, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: F
        }, {
          default: a(() => [...w[7] || (w[7] = [
            v(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0),
        u.value && (u.value.nodes_to_install.length || u.value.models_to_download.length) ? (o(), y(ce, {
          key: 1,
          variant: "primary",
          disabled: m.value || u.value.models_to_download.length > 0 && !z.value,
          loading: m.value,
          onClick: B
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
    const s = t, i = c, g = x(null);
    let h;
    function u(m) {
      const p = m.target.value;
      s.debounce > 0 ? (clearTimeout(h), h = window.setTimeout(() => {
        i("update:modelValue", p);
      }, s.debounce)) : i("update:modelValue", p);
    }
    function f() {
      var m;
      i("update:modelValue", ""), i("clear"), (m = g.value) == null || m.focus();
    }
    return ue(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (m, p) => (o(), n("div", fl, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: Se(f, ["escape"])
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
}), Ae = /* @__PURE__ */ j(wl, [["__scopeId", "data-v-3d51bbfd"]]), bl = { class: "section-group" }, kl = {
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
    const s = t, i = c, g = x(s.initiallyExpanded);
    function h() {
      s.collapsible && (g.value = !g.value, i("toggle", g.value));
    }
    return (u, f) => (o(), n("section", bl, [
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
        te(u.$slots, "default", {}, void 0, !0)
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
    const s = t, i = W(() => s.status ? `status-${s.status}` : "");
    return (g, h) => (o(), n("div", {
      class: Y(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: h[0] || (h[0] = (u) => t.clickable && g.$emit("click"))
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
}), Ie = /* @__PURE__ */ j(Tl, [["__scopeId", "data-v-ad8436c9"]]), Bl = { class: "error-state" }, Rl = { class: "error-message" }, Dl = /* @__PURE__ */ H({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, s) => (o(), n("div", Bl, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Rl, l(t.message), 1),
      t.retry ? (o(), y(V, {
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
}), ze = /* @__PURE__ */ j(Dl, [["__scopeId", "data-v-5397be48"]]), Ul = /* @__PURE__ */ H({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const s = c, { getWorkflows: i } = me(), g = x([]), h = x(!1), u = x(null), f = x(""), m = x(!0), p = x(!1), z = x(!1), I = x(!1), _ = x(null), $ = W(
      () => g.value.filter((A) => A.status === "broken")
    ), R = W(
      () => g.value.filter((A) => A.status === "new")
    ), b = W(
      () => g.value.filter((A) => A.status === "modified")
    ), E = W(
      () => g.value.filter((A) => A.status === "synced")
    ), S = W(() => {
      if (!f.value.trim()) return g.value;
      const A = f.value.toLowerCase();
      return g.value.filter((M) => M.name.toLowerCase().includes(A));
    }), U = W(
      () => $.value.filter(
        (A) => !f.value.trim() || A.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), F = W(
      () => R.value.filter(
        (A) => !f.value.trim() || A.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), B = W(
      () => b.value.filter(
        (A) => !f.value.trim() || A.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), N = W(
      () => E.value.filter(
        (A) => !f.value.trim() || A.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), w = W(
      () => p.value ? N.value : N.value.slice(0, 5)
    );
    async function L() {
      h.value = !0, u.value = null;
      try {
        g.value = await i();
      } catch (A) {
        u.value = A instanceof Error ? A.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    function C(A) {
      _.value = A, z.value = !0;
    }
    function T(A) {
      _.value = A, I.value = !0;
    }
    function D() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      s("refresh");
    }
    return ue(L), (A, M) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "WORKFLOWS" }, {
            actions: a(() => [
              $.value.length > 0 ? (o(), y(V, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: a(() => [...M[7] || (M[7] = [
                  v(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Ae, {
            modelValue: f.value,
            "onUpdate:modelValue": M[0] || (M[0] = (J) => f.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), y(Ie, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), y(ze, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            U.value.length ? (o(), y(re, {
              key: 0,
              title: "BROKEN",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(U.value, (J) => (o(), y(de, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: a(() => [...M[8] || (M[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(l(J.name), 1)
                  ]),
                  subtitle: a(() => [
                    v(" Missing: " + l(J.missing_nodes) + " nodes, " + l(J.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    d(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => T(J.name)
                    }, {
                      default: a(() => [...M[9] || (M[9] = [
                        v(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => C(J.name)
                    }, {
                      default: a(() => [...M[10] || (M[10] = [
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
            F.value.length ? (o(), y(re, {
              key: 1,
              title: "NEW",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(F.value, (J) => (o(), y(de, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: a(() => [...M[11] || (M[11] = [
                    v("●", -1)
                  ])]),
                  title: a(() => [
                    v(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...M[12] || (M[12] = [
                    v("New", -1)
                  ])]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => C(J.name)
                    }, {
                      default: a(() => [...M[13] || (M[13] = [
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
            B.value.length ? (o(), y(re, {
              key: 2,
              title: "MODIFIED",
              count: B.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(B.value, (J) => (o(), y(de, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: a(() => [...M[14] || (M[14] = [
                    v("⚡", -1)
                  ])]),
                  title: a(() => [
                    v(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...M[15] || (M[15] = [
                    v("Modified", -1)
                  ])]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => C(J.name)
                    }, {
                      default: a(() => [...M[16] || (M[16] = [
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
            N.value.length ? (o(), y(re, {
              key: 3,
              title: "SYNCED",
              count: N.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: M[2] || (M[2] = (J) => m.value = J)
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(w.value, (J) => (o(), y(de, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: a(() => [...M[17] || (M[17] = [
                    v("✓", -1)
                  ])]),
                  title: a(() => [
                    v(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...M[18] || (M[18] = [
                    v("Synced", -1)
                  ])]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => C(J.name)
                    }, {
                      default: a(() => [...M[19] || (M[19] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !p.value && N.value.length > 5 ? (o(), y(V, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: M[1] || (M[1] = (J) => p.value = !0),
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
            S.value.length ? r("", !0) : (o(), y(ke, {
              key: 4,
              icon: "📭",
              message: f.value ? `No workflows match '${f.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      z.value && _.value ? (o(), y(On, {
        key: 0,
        "workflow-name": _.value,
        onClose: M[3] || (M[3] = (J) => z.value = !1),
        onResolve: M[4] || (M[4] = (J) => T(_.value))
      }, null, 8, ["workflow-name"])) : r("", !0),
      I.value && _.value ? (o(), y(vl, {
        key: 1,
        "workflow-name": _.value,
        onClose: M[5] || (M[5] = (J) => I.value = !1),
        onInstall: K,
        onRefresh: M[6] || (M[6] = (J) => s("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Ol = /* @__PURE__ */ j(Ul, [["__scopeId", "data-v-ee63730e"]]), Vl = /* @__PURE__ */ H({
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
}), Fe = /* @__PURE__ */ j(Vl, [["__scopeId", "data-v-ccb7816e"]]), Wl = /* @__PURE__ */ H({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironmentModels: i, getStatus: g } = me(), h = x([]), u = x([]), f = x("production"), m = x(!1), p = x(null), z = x(""), I = x(!1);
    function _() {
      I.value = !1, s("navigate", "model-index");
    }
    const $ = W(
      () => h.value.reduce((C, T) => C + (T.size || 0), 0)
    ), R = W(() => {
      if (!z.value.trim()) return h.value;
      const C = z.value.toLowerCase();
      return h.value.filter((T) => T.filename.toLowerCase().includes(C));
    }), b = W(() => {
      if (!z.value.trim()) return u.value;
      const C = z.value.toLowerCase();
      return u.value.filter((T) => T.filename.toLowerCase().includes(C));
    }), E = W(
      () => R.value.filter((C) => C.type === "checkpoints")
    ), S = W(
      () => R.value.filter((C) => C.type === "loras")
    ), U = W(
      () => R.value.filter((C) => C.type !== "checkpoints" && C.type !== "loras")
    );
    function F(C) {
      if (!C) return "Unknown";
      const T = C / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function B(C) {
      s("navigate", "model-index");
    }
    function N(C) {
      s("navigate", "model-index");
    }
    function w(C) {
      alert(`Download functionality not yet implemented for ${C}`);
    }
    async function L() {
      m.value = !0, p.value = null;
      try {
        const C = await i();
        h.value = C, u.value = [];
        const T = await g();
        f.value = T.environment || "production";
      } catch (C) {
        p.value = C instanceof Error ? C.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return ue(L), (C, T) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (D) => I.value = !0)
          })
        ]),
        search: a(() => [
          d(Ae, {
            modelValue: z.value,
            "onUpdate:modelValue": T[1] || (T[1] = (D) => z.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (o(), y(Ie, {
            key: 0,
            message: "Loading environment models..."
          })) : p.value ? (o(), y(ze, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            h.value.length ? (o(), y(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + l(h.value.length) + " models • " + l(F($.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            E.value.length ? (o(), y(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: E.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(E.value, (D) => (o(), y(de, {
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
                    v(l(F(D.size)), 1)
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
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(D.hash)
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
            S.value.length ? (o(), y(re, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(S.value, (D) => (o(), y(de, {
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
                    v(l(F(D.size)), 1)
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
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(D.hash)
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
            U.value.length ? (o(), y(re, {
              key: 3,
              title: "OTHER",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(U.value, (D) => (o(), y(de, {
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
                    v(l(F(D.size)), 1)
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
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(D.hash)
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
            b.value.length ? (o(), y(re, {
              key: 4,
              title: "MISSING",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(b.value, (D) => (o(), y(de, {
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
                    d(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => w(D.filename)
                    }, {
                      default: a(() => [...T[11] || (T[11] = [
                        v(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(V, {
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
            !R.value.length && !b.value.length ? (o(), y(ke, {
              key: 5,
              icon: "📭",
              message: z.value ? `No models match '${z.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: I.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (D) => I.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            T[13] || (T[13] = v(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(f.value) + '"', 1),
            T[14] || (T[14] = v(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          d(V, {
            variant: "primary",
            onClick: _
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
}), Pl = /* @__PURE__ */ j(Wl, [["__scopeId", "data-v-72675609"]]), Al = /* @__PURE__ */ H({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: c } = me(), s = x([]), i = x(!1), g = x(null), h = x(""), u = x(!1), f = W(
      () => s.value.reduce((w, L) => w + (L.size_mb || L.size || 0), 0)
    ), m = W(() => {
      const w = /* @__PURE__ */ new Set();
      return s.value.forEach((L) => {
        L.used_in_environments && L.used_in_environments.length > 0 && L.used_in_environments.forEach((C) => w.add(C.env_name));
      }), w.size;
    }), p = W(() => {
      if (!h.value.trim()) return s.value;
      const w = h.value.toLowerCase();
      return s.value.filter((L) => {
        const C = L, T = L.sha256 || C.sha256_hash || "";
        return L.filename.toLowerCase().includes(w) || T.toLowerCase().includes(w);
      });
    }), z = W(
      () => p.value.filter((w) => w.type === "checkpoints")
    ), I = W(
      () => p.value.filter((w) => w.type === "loras")
    ), _ = W(
      () => p.value.filter((w) => w.type !== "checkpoints" && w.type !== "loras")
    );
    function $(w) {
      return w ? w >= 1024 ? `${(w / 1024).toFixed(1)} GB` : `${w.toFixed(0)} MB` : "Unknown";
    }
    function R(w) {
      const L = w, C = w.used_in_workflows || L.used_by || [];
      return !C || C.length === 0 ? "Not used" : `${C.length} workflow(s)`;
    }
    function b(w) {
      navigator.clipboard.writeText(w), alert("Hash copied to clipboard");
    }
    function E(w) {
      prompt("Enter model source URL:", w.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function S(w) {
      const L = w, C = w.used_in_workflows || L.used_by || [], T = C && C.length > 0 ? `

⚠ WARNING: This model is used by ${C.length} workflow(s):
${C.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${w.filename}?${T}

This will free ${$(L.size_mb || w.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function U() {
      alert("Scan for models not yet implemented");
    }
    function F() {
      alert("Change directory not yet implemented");
    }
    function B() {
      alert("Download new model not yet implemented");
    }
    async function N() {
      i.value = !0, g.value = null;
      try {
        s.value = await c(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", z.value), console.log("Filtered loras:", I.value), console.log("Filtered other:", _.value);
      } catch (w) {
        g.value = w instanceof Error ? w.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return ue(N), (w, L) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: L[0] || (L[0] = (C) => u.value = !0)
          }, {
            actions: a(() => [
              d(V, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...L[3] || (L[3] = [
                  v(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              d(V, {
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: a(() => [...L[4] || (L[4] = [
                  v(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              d(V, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: a(() => [...L[5] || (L[5] = [
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
          d(Ae, {
            modelValue: h.value,
            "onUpdate:modelValue": L[1] || (L[1] = (C) => h.value = C),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), y(Ie, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), y(ze, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            s.value.length ? (o(), y(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + l(s.value.length) + " models • " + l($(f.value)) + " • Used in " + l(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : r("", !0),
            z.value.length ? (o(), y(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(z.value, (C) => (o(), y(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...L[6] || (L[6] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l($(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => {
                    var T, D;
                    return [
                      C.sha256 || C.sha256_hash ? (o(), y(Z, {
                        key: 0,
                        label: "SHA256:",
                        value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : r("", !0),
                      d(Z, {
                        label: "Used in:",
                        value: R(C)
                      }, null, 8, ["value"]),
                      C.source_url || (T = C.sources) != null && T[0] ? (o(), y(Z, {
                        key: 1,
                        label: "Source URL:",
                        value: C.source_url || ((D = C.sources) == null ? void 0 : D[0])
                      }, null, 8, ["value"])) : (o(), y(Z, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...L[7] || (L[7] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => E(C)
                    }, {
                      default: a(() => [...L[8] || (L[8] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), y(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => b(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...L[9] || (L[9] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => S(C)
                    }, {
                      default: a(() => [...L[10] || (L[10] = [
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
            I.value.length ? (o(), y(re, {
              key: 2,
              title: "LORAS",
              count: I.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(I.value, (C) => (o(), y(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...L[11] || (L[11] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l($(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => {
                    var T, D;
                    return [
                      C.sha256 || C.sha256_hash ? (o(), y(Z, {
                        key: 0,
                        label: "SHA256:",
                        value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : r("", !0),
                      d(Z, {
                        label: "Used in:",
                        value: R(C)
                      }, null, 8, ["value"]),
                      C.source_url || (T = C.sources) != null && T[0] ? (o(), y(Z, {
                        key: 1,
                        label: "Source URL:",
                        value: C.source_url || ((D = C.sources) == null ? void 0 : D[0])
                      }, null, 8, ["value"])) : (o(), y(Z, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...L[12] || (L[12] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => E(C)
                    }, {
                      default: a(() => [...L[13] || (L[13] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), y(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => b(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...L[14] || (L[14] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => S(C)
                    }, {
                      default: a(() => [...L[15] || (L[15] = [
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
            _.value.length ? (o(), y(re, {
              key: 3,
              title: "OTHER",
              count: _.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(_.value, (C) => (o(), y(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...L[16] || (L[16] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(l(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(l($(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Type:",
                      value: C.type
                    }, null, 8, ["value"]),
                    C.sha256 || C.sha256_hash ? (o(), y(Z, {
                      key: 0,
                      label: "SHA256:",
                      value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : r("", !0),
                    d(Z, {
                      label: "Used in:",
                      value: R(C)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => E(C)
                    }, {
                      default: a(() => [...L[17] || (L[17] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), y(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => b(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...L[18] || (L[18] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => S(C)
                    }, {
                      default: a(() => [...L[19] || (L[19] = [
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
            p.value.length ? r("", !0) : (o(), y(ke, {
              key: 4,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: u.value,
        title: "About Workspace Model Index",
        onClose: L[2] || (L[2] = (C) => u.value = !1)
      }, {
        content: a(() => [...L[20] || (L[20] = [
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
}), Fl = /* @__PURE__ */ j(Al, [["__scopeId", "data-v-5a24af01"]]), Gl = { key: 0 }, Hl = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, jl = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Kl = /* @__PURE__ */ H({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: c, installNode: s, updateNode: i, uninstallNode: g } = me(), h = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), u = x(!1), f = x(null), m = x(""), p = x(!1), z = W(() => {
      if (!m.value.trim()) return h.value.nodes;
      const B = m.value.toLowerCase();
      return h.value.nodes.filter(
        (N) => {
          var w, L;
          return N.name.toLowerCase().includes(B) || ((w = N.description) == null ? void 0 : w.toLowerCase().includes(B)) || ((L = N.repository) == null ? void 0 : L.toLowerCase().includes(B));
        }
      );
    }), I = W(
      () => z.value.filter((B) => B.installed)
    ), _ = W(
      () => z.value.filter((B) => !B.installed)
    );
    function $(B) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[B] || B;
    }
    function R(B) {
      return !B.used_in_workflows || B.used_in_workflows.length === 0 ? "Not used in any workflows" : B.used_in_workflows.length === 1 ? B.used_in_workflows[0] : `${B.used_in_workflows.length} workflows`;
    }
    function b(B) {
      window.open(B, "_blank");
    }
    async function E(B) {
      if (confirm(`Install node "${B}"?

This will download and install the node from its repository.`))
        try {
          u.value = !0;
          const N = await s(B);
          N.status === "success" ? (alert(`Node "${B}" installed successfully!`), await F()) : alert(`Failed to install node: ${N.message || "Unknown error"}`);
        } catch (N) {
          alert(`Error installing node: ${N instanceof Error ? N.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function S(B) {
      if (confirm(`Check for updates for "${B}"?`))
        try {
          u.value = !0;
          const N = await i(B);
          N.status === "success" ? (alert(`Node "${B}" is up to date or has been updated!`), await F()) : alert(`Update check failed: ${N.message || "Unknown error"}`);
        } catch (N) {
          alert(`Error checking for updates: ${N instanceof Error ? N.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function U(B) {
      if (confirm(`Uninstall node "${B}"?

This will remove the node from this environment.`))
        try {
          u.value = !0;
          const N = await g(B);
          N.status === "success" ? (alert(`Node "${B}" uninstalled successfully!`), await F()) : alert(`Failed to uninstall node: ${N.message || "Unknown error"}`);
        } catch (N) {
          alert(`Error uninstalling node: ${N instanceof Error ? N.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function F() {
      u.value = !0, f.value = null;
      try {
        h.value = await c();
      } catch (B) {
        f.value = B instanceof Error ? B.message : "Failed to load nodes";
      } finally {
        u.value = !1;
      }
    }
    return ue(F), (B, N) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (w) => p.value = !0)
          })
        ]),
        search: a(() => [
          d(Ae, {
            modelValue: m.value,
            "onUpdate:modelValue": N[1] || (N[1] = (w) => m.value = w),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), y(Ie, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : f.value ? (o(), y(ze, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            h.value.total_count ? (o(), y(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + l(h.value.total_count) + " nodes • " + l(h.value.installed_count) + " installed • " + l(h.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : r("", !0),
            I.value.length ? (o(), y(re, {
              key: 1,
              title: "INSTALLED",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(I.value, (w) => (o(), y(de, {
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
                    w.description ? (o(), y(Z, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : r("", !0),
                    w.repository ? (o(), y(Z, {
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
                    w.repository ? (o(), y(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => b(w.repository)
                    }, {
                      default: a(() => [...N[5] || (N[5] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.source === "registry" ? (o(), y(V, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => S(w.name)
                    }, {
                      default: a(() => [...N[6] || (N[6] = [
                        v(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.source !== "unknown" ? (o(), y(V, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => U(w.name)
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
            _.value.length ? (o(), y(re, {
              key: 2,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(_.value, (w) => (o(), y(de, {
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
                    w.description ? (o(), y(Z, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : r("", !0),
                    w.repository ? (o(), y(Z, {
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
                    w.download_url ? (o(), y(V, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (L) => E(w.name)
                    }, {
                      default: a(() => [...N[10] || (N[10] = [
                        v(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.repository ? (o(), y(V, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => b(w.repository)
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
            !I.value.length && !_.value.length ? (o(), y(ke, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: p.value,
        title: "About Git-Tracked Nodes",
        onClose: N[3] || (N[3] = (w) => p.value = !1)
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
          d(V, {
            variant: "primary",
            onClick: N[2] || (N[2] = (w) => p.value = !1)
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
    const c = t, s = x(!1), i = W(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const h = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${h}...${u}`;
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
    return (h, u) => (o(), n("div", Yl, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, Jl),
      e("button", {
        class: Y(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Zl, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Ql, [...u[0] || (u[0] = [
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
    const s = t, i = W(() => s.fetchingRemote === s.remote.name), g = W(() => s.remote.is_default), h = W(() => !!s.trackingBranch);
    function u(f) {
      const m = new Date(f), z = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), I = Math.floor(z / 6e4);
      if (I < 1) return "Just now";
      if (I < 60) return `${I}m ago`;
      const _ = Math.floor(I / 60);
      if (_ < 24) return `${_}h ago`;
      const $ = Math.floor(_ / 24);
      return $ < 7 ? `${$}d ago` : m.toLocaleDateString();
    }
    return (f, m) => (o(), y(de, {
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
        var p;
        return [
          d(Z, { label: "Fetch:" }, {
            default: a(() => [
              d(pt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), y(Z, {
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
          (p = t.syncStatus) != null && p.last_fetch ? (o(), y(Z, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(u(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : r("", !0)
        ];
      }),
      actions: a(() => [
        d(V, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: m[0] || (m[0] = (p) => f.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...m[3] || (m[3] = [
            v(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        d(V, {
          variant: "secondary",
          size: "xs",
          onClick: m[1] || (m[1] = (p) => f.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...m[4] || (m[4] = [
            v(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? r("", !0) : (o(), y(V, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[2] || (m[2] = (p) => f.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...m[5] || (m[5] = [
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
    const c = t, s = W(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
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
          s[1] || (s[1] = Se((i) => c.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Se((i) => c.$emit("escape"), ["escape"]))
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
    const s = t, i = c, g = x({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), h = x(!1), u = x(null);
    bt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const f = W(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function m() {
      if (!(!f.value || h.value)) {
        u.value = null, h.value = !0;
        try {
          i("submit", g.value);
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to submit form";
        } finally {
          h.value = !1;
        }
      }
    }
    return (p, z) => (o(), n("div", yi, [
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
              "onUpdate:modelValue": z[0] || (z[0] = (I) => g.value.name = I),
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
              "onUpdate:modelValue": z[1] || (z[1] = (I) => g.value.fetchUrl = I),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        d(lt, { label: "Push URL (optional)" }, {
          default: a(() => [
            d(it, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": z[2] || (z[2] = (I) => g.value.pushUrl = I),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (o(), n("div", ki, l(u.value), 1)) : r("", !0)
      ]),
      e("div", $i, [
        d(V, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: h.value,
          onClick: m
        }, {
          default: a(() => [
            v(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        d(V, {
          variant: "ghost",
          size: "md",
          onClick: z[3] || (z[3] = (I) => p.$emit("cancel"))
        }, {
          default: a(() => [...z[4] || (z[4] = [
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
      getRemoteSyncStatus: u
    } = me(), f = x([]), m = x(null), p = x({}), z = x(!1), I = x(null), _ = x(""), $ = x(!1), R = x(null), b = x(!1), E = x("add"), S = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = W(() => {
      if (!_.value.trim()) return f.value;
      const A = _.value.toLowerCase();
      return f.value.filter(
        (M) => M.name.toLowerCase().includes(A) || M.fetch_url.toLowerCase().includes(A) || M.push_url.toLowerCase().includes(A)
      );
    });
    function F(A) {
      var M;
      return ((M = m.value) == null ? void 0 : M.remote) === A;
    }
    async function B() {
      z.value = !0, I.value = null;
      try {
        const A = await c();
        f.value = A.remotes, m.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (M) => {
            const J = await u(M.name);
            J && (p.value[M.name] = J);
          })
        );
      } catch (A) {
        I.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        z.value = !1;
      }
    }
    function N() {
      E.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, b.value = !0;
    }
    function w(A) {
      const M = f.value.find((J) => J.name === A);
      M && (E.value = "edit", S.value = {
        name: M.name,
        fetchUrl: M.fetch_url,
        pushUrl: M.push_url
      }, b.value = !0);
    }
    async function L(A) {
      try {
        E.value === "add" ? await s(A.name, A.fetchUrl) : await g(A.name, A.fetchUrl, A.pushUrl || void 0), b.value = !1, await B();
      } catch (M) {
        I.value = M instanceof Error ? M.message : "Operation failed";
      }
    }
    function C() {
      b.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function T(A) {
      R.value = A;
      try {
        await h(A);
        const M = await u(A);
        M && (p.value[A] = M);
      } catch (M) {
        I.value = M instanceof Error ? M.message : "Fetch failed";
      } finally {
        R.value = null;
      }
    }
    async function D(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await i(A), await B();
        } catch (M) {
          I.value = M instanceof Error ? M.message : "Failed to remove remote";
        }
    }
    function K() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ue(B), (A, M) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (J) => $.value = !0)
          }, {
            actions: a(() => [
              b.value ? r("", !0) : (o(), y(V, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: a(() => [...M[3] || (M[3] = [
                  v(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          b.value ? r("", !0) : (o(), y(Ae, {
            key: 0,
            modelValue: _.value,
            "onUpdate:modelValue": M[1] || (M[1] = (J) => _.value = J),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          z.value ? (o(), y(Ie, {
            key: 0,
            message: "Loading remotes..."
          })) : I.value ? (o(), y(ze, {
            key: 1,
            message: I.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            b.value ? (o(), y(Ci, {
              key: 0,
              mode: E.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: L,
              onCancel: C
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            f.value.length && !b.value ? (o(), y(Fe, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + l(f.value.length) + " remote" + l(f.value.length !== 1 ? "s" : "") + " ", 1),
                m.value ? (o(), n("span", xi, " • Tracking: " + l(m.value.remote) + "/" + l(m.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            U.value.length && !b.value ? (o(), y(re, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, q(U.value, (J) => {
                  var se;
                  return o(), y(ri, {
                    key: J.name,
                    remote: J,
                    "sync-status": p.value[J.name],
                    "tracking-branch": F(J.name) ? (se = m.value) == null ? void 0 : se.branch : void 0,
                    "fetching-remote": R.value,
                    onFetch: T,
                    onEdit: w,
                    onRemove: D
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !U.value.length && !b.value ? (o(), y(ke, {
              key: 3,
              icon: "🌐",
              message: _.value ? `No remotes match '${_.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                d(V, {
                  variant: "primary",
                  onClick: N
                }, {
                  default: a(() => [...M[4] || (M[4] = [
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
      d(Ee, {
        show: $.value,
        title: "About Git Remotes",
        onClose: M[2] || (M[2] = (J) => $.value = !1)
      }, {
        content: a(() => [...M[5] || (M[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            v(" The "),
            e("strong", null, '"origin"'),
            v(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          d(V, {
            variant: "link",
            onClick: K
          }, {
            default: a(() => [...M[6] || (M[6] = [
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
}), Me = /* @__PURE__ */ j(Ti, [["__scopeId", "data-v-cb5d236c"]]), Bi = { class: "toggle" }, Ri = ["checked", "disabled"], Di = /* @__PURE__ */ H({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, s) => (o(), n("label", Bi, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Ri),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), We = /* @__PURE__ */ j(Di, [["__scopeId", "data-v-71c0f550"]]), Ui = { class: "settings-section" }, Oi = { class: "path-setting" }, Vi = { class: "path-value" }, Wi = { class: "path-setting" }, Pi = { class: "path-value" }, Ai = { class: "settings-section" }, Fi = { class: "settings-section" }, Gi = /* @__PURE__ */ H({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: s } = me(), i = x(!1), g = x(null), h = x(null), u = x(null), f = x(null), m = x(""), p = x(""), z = x(!0), I = x(!0), _ = W(() => f.value ? m.value !== (f.value.civitai_api_key || "") : !1);
    async function $() {
      i.value = !0, g.value = null;
      try {
        u.value = await c(), f.value = { ...u.value }, m.value = u.value.civitai_api_key || "", p.value = u.value.huggingface_token || "", z.value = u.value.auto_sync_models, I.value = u.value.confirm_destructive;
      } catch (E) {
        g.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function R() {
      var E;
      h.value = null;
      try {
        const S = {};
        m.value !== (((E = f.value) == null ? void 0 : E.civitai_api_key) || "") && (S.civitai_api_key = m.value || null), await s(S), await $(), h.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          h.value = null;
        }, 3e3);
      } catch (S) {
        h.value = {
          type: "error",
          message: S instanceof Error ? S.message : "Failed to save settings"
        };
      }
    }
    function b() {
      f.value && (m.value = f.value.civitai_api_key || "", p.value = f.value.huggingface_token || "", z.value = f.value.auto_sync_models, I.value = f.value.confirm_destructive, h.value = null);
    }
    return ue($), (E, S) => (o(), y(fe, null, {
      header: a(() => [
        d(ge, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            d(V, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: R
            }, {
              default: a(() => [...S[4] || (S[4] = [
                v(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (o(), y(V, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: a(() => [...S[5] || (S[5] = [
                v(" Reset ", -1)
              ])]),
              _: 1
            })) : r("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), y(Ie, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), y(ze, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: $
        }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
          d(re, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var U, F;
              return [
                e("div", Ui, [
                  e("div", Oi, [
                    S[6] || (S[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    S[7] || (S[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Vi, l(((U = u.value) == null ? void 0 : U.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Wi, [
                    S[8] || (S[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    S[9] || (S[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Pi, l(((F = u.value) == null ? void 0 : F.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          d(re, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Ai, [
                d(Me, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    d(Ye, {
                      modelValue: m.value,
                      "onUpdate:modelValue": S[0] || (S[0] = (U) => m.value = U),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Me, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Ye, {
                      modelValue: p.value,
                      "onUpdate:modelValue": S[1] || (S[1] = (U) => p.value = U),
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
          d(re, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Fi, [
                d(Me, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(We, {
                      modelValue: z.value,
                      "onUpdate:modelValue": S[2] || (S[2] = (U) => z.value = U),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Me, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(We, {
                      modelValue: I.value,
                      "onUpdate:modelValue": S[3] || (S[3] = (U) => I.value = U),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), y(Fe, {
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
}), Hi = /* @__PURE__ */ j(Gi, [["__scopeId", "data-v-8b092643"]]), ji = /* @__PURE__ */ H({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = me(), s = x([]), i = x(!1), g = x(null), h = x(!1), u = x(null), f = W(() => s.value.length === 0 ? [] : s.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function m() {
      i.value = !0, g.value = null;
      try {
        s.value = await c(void 0, 500);
      } catch (p) {
        g.value = p instanceof Error ? p.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var p;
          (p = u.value) != null && p.parentElement && (u.value.parentElement.scrollTop = u.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ue(m), (p, z) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (I) => h.value = !0)
          }, {
            actions: a(() => [
              d(V, {
                variant: "secondary",
                size: "sm",
                onClick: m,
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
          i.value ? (o(), y(Ie, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), y(ze, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: m
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            s.value.length === 0 ? (o(), y(ke, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: u,
              class: "log-output"
            }, [
              (o(!0), n(P, null, q(f.value, (I, _) => (o(), n("div", {
                key: _,
                class: Y(`log-line log-level-${I.level.toLowerCase()}`)
              }, l(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: h.value,
        title: "About Workspace Logs",
        onClose: z[2] || (z[2] = (I) => h.value = !1)
      }, {
        content: a(() => [...z[3] || (z[3] = [
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
          d(V, {
            variant: "primary",
            onClick: z[1] || (z[1] = (I) => h.value = !1)
          }, {
            default: a(() => [...z[4] || (z[4] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ki = /* @__PURE__ */ j(ji, [["__scopeId", "data-v-39f6a756"]]), qi = /* @__PURE__ */ H({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: s } = me(), i = x([]), g = x(!1), h = x(null), u = x(!1), f = x("production"), m = x(null), p = W(() => i.value.length === 0 ? [] : i.value.map((I) => ({
      text: `${I.timestamp} - ${I.name} - ${I.level} - ${I.func}:${I.line} - ${I.message}`,
      level: I.level
    })));
    async function z() {
      g.value = !0, h.value = null;
      try {
        i.value = await c(void 0, 500);
        try {
          const I = await s();
          f.value = I.environment || "production";
        } catch {
        }
      } catch (I) {
        h.value = I instanceof Error ? I.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var I;
          (I = m.value) != null && I.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ue(z), (I, _) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = ($) => u.value = !0)
          }, {
            actions: a(() => [
              d(V, {
                variant: "secondary",
                size: "sm",
                onClick: z,
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
          g.value ? (o(), y(Ie, {
            key: 0,
            message: "Loading environment logs..."
          })) : h.value ? (o(), y(ze, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            i.value.length === 0 ? (o(), y(ke, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (o(!0), n(P, null, q(p.value, ($, R) => (o(), n("div", {
                key: R,
                class: Y(`log-line log-level-${$.level.toLowerCase()}`)
              }, l($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: u.value,
        title: "About Environment Logs",
        onClose: _[2] || (_[2] = ($) => u.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            _[3] || (_[3] = v(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(f.value), 1),
            _[4] || (_[4] = v(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          _[5] || (_[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          _[6] || (_[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          d(V, {
            variant: "primary",
            onClick: _[1] || (_[1] = ($) => u.value = !1)
          }, {
            default: a(() => [..._[7] || (_[7] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yi = /* @__PURE__ */ j(qi, [["__scopeId", "data-v-4f1e6f72"]]), Ji = { class: "env-title" }, Xi = {
  key: 0,
  class: "current-badge"
}, Qi = {
  key: 0,
  class: "branch-info"
}, Zi = /* @__PURE__ */ H({
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
    return (c, s) => (o(), y(de, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        v(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", Ji, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Xi, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Qi, [
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
        t.lastUsed && t.showLastUsed ? (o(), y(Z, {
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
}), er = /* @__PURE__ */ j(Zi, [["__scopeId", "data-v-5238e57c"]]), tr = {
  key: 0,
  class: "create-form"
}, or = { class: "create-form__header" }, sr = { class: "create-form__body" }, ar = { class: "create-form__actions" }, nr = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, lr = /* @__PURE__ */ H({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironments: i } = me(), g = x([]), h = x(!1), u = x(null), f = x(""), m = x(!1), p = x(!1), z = x(""), I = W(
      () => g.value.find((F) => F.is_current)
    ), _ = W(() => {
      if (!f.value.trim()) return g.value;
      const F = f.value.toLowerCase();
      return g.value.filter(
        (B) => {
          var N;
          return B.name.toLowerCase().includes(F) || ((N = B.current_branch) == null ? void 0 : N.toLowerCase().includes(F));
        }
      );
    });
    function $(F) {
      if (!F) return "";
      try {
        const B = new Date(F), w = (/* @__PURE__ */ new Date()).getTime() - B.getTime(), L = Math.floor(w / 6e4), C = Math.floor(w / 36e5), T = Math.floor(w / 864e5);
        return L < 1 ? "just now" : L < 60 ? `${L} ${L === 1 ? "minute" : "minutes"} ago` : C < 24 ? `${C} ${C === 1 ? "hour" : "hours"} ago` : T < 30 ? `${T} ${T === 1 ? "day" : "days"} ago` : B.toLocaleDateString();
      } catch {
        return F;
      }
    }
    function R() {
      const F = z.value.trim();
      F && (s("create", F), z.value = "", p.value = !1);
    }
    function b() {
      z.value = "", p.value = !1;
    }
    function E(F) {
      s("viewDetails", F);
    }
    function S(F) {
      confirm(`Delete environment "${F}"?

This action cannot be undone.`) && s("delete", F);
    }
    async function U() {
      h.value = !0, u.value = null;
      try {
        g.value = await i();
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return ue(U), (F, B) => {
      const N = Gt("SectionGroup");
      return o(), n(P, null, [
        d(fe, null, {
          header: a(() => [
            d(ge, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: B[1] || (B[1] = (w) => m.value = !0)
            }, {
              actions: a(() => [
                d(V, {
                  variant: "ghost",
                  size: "sm",
                  onClick: B[0] || (B[0] = (w) => p.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...B[7] || (B[7] = [
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
                d(V, {
                  variant: "ghost",
                  size: "sm",
                  onClick: U,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...B[8] || (B[8] = [
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
            d(Ae, {
              modelValue: f.value,
              "onUpdate:modelValue": B[2] || (B[2] = (w) => f.value = w),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            h.value ? (o(), y(Ie, {
              key: 0,
              message: "Loading environments..."
            })) : u.value ? (o(), y(ze, {
              key: 1,
              message: u.value,
              retry: !0,
              onRetry: U
            }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
              p.value ? (o(), n("div", tr, [
                e("div", or, [
                  B[10] || (B[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  d(V, {
                    variant: "ghost",
                    size: "xs",
                    onClick: b
                  }, {
                    default: a(() => [...B[9] || (B[9] = [
                      v(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", sr, [
                  d(Ye, {
                    modelValue: z.value,
                    "onUpdate:modelValue": B[3] || (B[3] = (w) => z.value = w),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Se(R, ["enter"]),
                      Se(b, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", ar, [
                    d(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: R,
                      disabled: !z.value.trim()
                    }, {
                      default: a(() => [...B[11] || (B[11] = [
                        v(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: b
                    }, {
                      default: a(() => [...B[12] || (B[12] = [
                        v(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : r("", !0),
              g.value.length ? (o(), y(Fe, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  v(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  I.value ? (o(), n(P, { key: 0 }, [
                    B[13] || (B[13] = v(" • Current: ", -1)),
                    e("strong", null, l(I.value.name), 1)
                  ], 64)) : r("", !0)
                ]),
                _: 1
              })) : r("", !0),
              _.value.length ? (o(), y(N, {
                key: 2,
                title: "ENVIRONMENTS",
                count: _.value.length
              }, {
                default: a(() => [
                  (o(!0), n(P, null, q(_.value, (w) => (o(), y(er, {
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
                      w.is_current ? r("", !0) : (o(), y(V, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (L) => F.$emit("switch", w.name)
                      }, {
                        default: a(() => [...B[14] || (B[14] = [
                          v(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      d(V, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (L) => E(w.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...B[15] || (B[15] = [
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
                      !w.is_current && g.value.length > 1 ? (o(), y(V, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (L) => S(w.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", nr, [...B[16] || (B[16] = [
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
              _.value.length ? r("", !0) : (o(), y(ke, {
                key: 3,
                icon: "🌍",
                message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
              }, kt({ _: 2 }, [
                f.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    d(V, {
                      variant: "primary",
                      onClick: B[4] || (B[4] = (w) => p.value = !0)
                    }, {
                      default: a(() => [...B[17] || (B[17] = [
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
        d(Ee, {
          show: m.value,
          title: "About Environments",
          onClose: B[6] || (B[6] = (w) => m.value = !1)
        }, {
          content: a(() => [...B[18] || (B[18] = [
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
            d(V, {
              variant: "secondary",
              onClick: B[5] || (B[5] = (w) => m.value = !1)
            }, {
              default: a(() => [...B[19] || (B[19] = [
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
}), ir = /* @__PURE__ */ j(lr, [["__scopeId", "data-v-97d6527d"]]), rr = { class: "file-path" }, cr = { class: "file-path-text" }, dr = ["title"], ur = /* @__PURE__ */ H({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, s = x(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, h) => (o(), n("div", rr, [
      h[0] || (h[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", cr, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, dr)) : r("", !0)
    ]));
  }
}), mr = /* @__PURE__ */ j(ur, [["__scopeId", "data-v-f0982173"]]), vr = { class: "output-path-input" }, fr = { class: "export-actions" }, gr = {
  key: 1,
  class: "export-warning"
}, hr = /* @__PURE__ */ H({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = me(), s = x(""), i = x(!1), g = x(null), h = x(!1);
    async function u() {
      i.value = !0, g.value = null;
      try {
        const m = await c(s.value || void 0);
        g.value = m;
      } catch (m) {
        g.value = {
          status: "error",
          message: m instanceof Error ? m.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function f() {
      var m;
      if ((m = g.value) != null && m.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (p) {
          console.error("Failed to copy path:", p);
        }
    }
    return (m, p) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              d(V, {
                variant: "ghost",
                size: "sm",
                onClick: p[0] || (p[0] = (z) => h.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...p[5] || (p[5] = [
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
                icon: a(() => [...p[6] || (p[6] = [
                  v("📦", -1)
                ])]),
                title: a(() => [...p[7] || (p[7] = [
                  v("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...p[8] || (p[8] = [
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
                icon: a(() => [...p[9] || (p[9] = [
                  v("📁", -1)
                ])]),
                title: a(() => [...p[10] || (p[10] = [
                  v("Output Destination", -1)
                ])]),
                subtitle: a(() => [...p[11] || (p[11] = [
                  v(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", vr, [
                    d(Ye, {
                      modelValue: s.value,
                      "onUpdate:modelValue": p[1] || (p[1] = (z) => s.value = z),
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
              e("div", fr, [
                d(V, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: u
                }, {
                  default: a(() => [
                    p[12] || (p[12] = e("svg", {
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
                s.value ? (o(), y(V, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: p[2] || (p[2] = (z) => s.value = "")
                }, {
                  default: a(() => [...p[13] || (p[13] = [
                    v(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), y(re, {
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
                        d(mr, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), y(Z, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), n("div", gr, [...p[14] || (p[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: f
                    }, {
                      default: a(() => [...p[15] || (p[15] = [
                        v(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    d(V, {
                      variant: "ghost",
                      size: "sm",
                      onClick: p[3] || (p[3] = (z) => g.value = null)
                    }, {
                      default: a(() => [...p[16] || (p[16] = [
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
      d(Ee, {
        show: h.value,
        title: "About Environment Export",
        onClose: p[4] || (p[4] = (z) => h.value = !1)
      }, {
        content: a(() => [...p[17] || (p[17] = [
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
}), pr = /* @__PURE__ */ j(hr, [["__scopeId", "data-v-1777a9d5"]]), yr = { class: "file-input-wrapper" }, wr = ["accept", "multiple", "disabled"], br = /* @__PURE__ */ H({
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
    const i = s, g = x(null);
    function h() {
      var f;
      (f = g.value) == null || f.click();
    }
    function u(f) {
      const m = f.target;
      m.files && m.files.length > 0 && (i("change", m.files), m.value = "");
    }
    return c({
      triggerInput: h
    }), (f, m) => (o(), n("div", yr, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, wr),
      d(V, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: h
      }, {
        default: a(() => [
          te(f.$slots, "default", {}, () => [
            m[0] || (m[0] = e("svg", {
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
}), kr = /* @__PURE__ */ j(br, [["__scopeId", "data-v-cd192091"]]), $r = {
  key: 0,
  class: "drop-zone-empty"
}, _r = { class: "drop-zone-text" }, Cr = { class: "drop-zone-primary" }, xr = { class: "drop-zone-secondary" }, Sr = { class: "drop-zone-actions" }, Er = {
  key: 1,
  class: "drop-zone-file"
}, Ir = { class: "file-info" }, zr = { class: "file-details" }, Lr = { class: "file-name" }, Mr = { class: "file-size" }, Nr = /* @__PURE__ */ H({
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
    const s = c, i = x(!1), g = x(null), h = x(0), u = W(() => g.value !== null), f = W(() => {
      var E;
      return ((E = g.value) == null ? void 0 : E.name) || "";
    }), m = W(() => {
      if (!g.value) return "";
      const E = g.value.size;
      return E < 1024 ? `${E} B` : E < 1024 * 1024 ? `${(E / 1024).toFixed(1)} KB` : E < 1024 * 1024 * 1024 ? `${(E / (1024 * 1024)).toFixed(1)} MB` : `${(E / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function p(E) {
      var S;
      h.value++, (S = E.dataTransfer) != null && S.types.includes("Files") && (i.value = !0);
    }
    function z(E) {
      E.dataTransfer && (E.dataTransfer.dropEffect = "copy");
    }
    function I() {
      h.value--, h.value === 0 && (i.value = !1);
    }
    function _(E) {
      var U;
      h.value = 0, i.value = !1;
      const S = (U = E.dataTransfer) == null ? void 0 : U.files;
      S && S.length > 0 && R(S[0]);
    }
    function $(E) {
      E.length > 0 && R(E[0]);
    }
    function R(E) {
      g.value = E, s("fileSelected", E);
    }
    function b() {
      g.value = null, s("clear");
    }
    return (E, S) => (o(), n("div", {
      class: Y(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: ve(p, ["prevent"]),
      onDragover: ve(z, ["prevent"]),
      onDragleave: ve(I, ["prevent"]),
      onDrop: ve(_, ["prevent"])
    }, [
      u.value ? (o(), n("div", Er, [
        e("div", Ir, [
          S[1] || (S[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", zr, [
            e("div", Lr, l(f.value), 1),
            e("div", Mr, l(m.value), 1)
          ])
        ]),
        d(V, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: a(() => [...S[2] || (S[2] = [
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
      ])) : (o(), n("div", $r, [
        S[0] || (S[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", _r, [
          e("p", Cr, l(t.primaryText), 1),
          e("p", xr, l(t.secondaryText), 1)
        ]),
        e("div", Sr, [
          d(kr, {
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
}), Tr = /* @__PURE__ */ j(Nr, [["__scopeId", "data-v-e00abbca"]]), Br = { class: "import-preview" }, Rr = { class: "preview-header" }, Dr = {
  key: 0,
  class: "source-env"
}, Ur = { class: "preview-content" }, Or = { class: "preview-section" }, Vr = { class: "section-header" }, Wr = { class: "section-info" }, Pr = { class: "section-count" }, Ar = {
  key: 0,
  class: "item-list"
}, Fr = { class: "item-name" }, Gr = {
  key: 0,
  class: "item-more"
}, Hr = { class: "preview-section" }, jr = { class: "section-header" }, Kr = { class: "section-info" }, qr = { class: "section-count" }, Yr = {
  key: 0,
  class: "item-list"
}, Jr = { class: "item-details" }, Xr = { class: "item-name" }, Qr = { class: "item-meta" }, Zr = {
  key: 0,
  class: "item-more"
}, ec = { class: "preview-section" }, tc = { class: "section-header" }, oc = { class: "section-info" }, sc = { class: "section-count" }, ac = {
  key: 0,
  class: "item-list"
}, nc = { class: "item-name" }, lc = {
  key: 0,
  class: "item-more"
}, ic = {
  key: 0,
  class: "preview-section"
}, rc = { class: "git-info" }, cc = /* @__PURE__ */ H({
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
    const c = t, s = W(() => c.workflows.length), i = W(() => c.models.length), g = W(() => c.nodes.length);
    function h(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, f) => (o(), n("div", Br, [
      e("div", Rr, [
        d(pe, null, {
          default: a(() => [...f[0] || (f[0] = [
            v("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Dr, [
          f[1] || (f[1] = v(" From: ", -1)),
          d(dt, null, {
            default: a(() => [
              v(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", Ur, [
        e("div", Or, [
          e("div", Vr, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Wr, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Pr, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Ar, [
            (o(!0), n(P, null, q(t.workflows.slice(0, t.maxPreviewItems), (m) => (o(), n("div", {
              key: m,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Fr, l(m), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Gr, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Hr, [
          e("div", jr, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Kr, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", qr, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Yr, [
            (o(!0), n(P, null, q(t.models.slice(0, t.maxPreviewItems), (m) => (o(), n("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Jr, [
                e("span", Xr, l(m.filename), 1),
                e("span", Qr, l(h(m.size)) + " • " + l(m.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", Zr, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", ec, [
          e("div", tc, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", oc, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", sc, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", ac, [
            (o(!0), n(P, null, q(t.nodes.slice(0, t.maxPreviewItems), (m) => (o(), n("div", {
              key: m,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", nc, l(m), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", lc, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", ic, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", rc, [
            t.gitBranch ? (o(), y(Z, {
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
            t.gitCommit ? (o(), y(Z, {
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
}), dc = /* @__PURE__ */ j(cc, [["__scopeId", "data-v-182fe113"]]), uc = { class: "import-options" }, mc = { class: "options-container" }, vc = { class: "option-section" }, fc = { class: "conflict-options" }, gc = ["value", "checked", "onChange"], hc = { class: "conflict-content" }, pc = { class: "conflict-label" }, yc = { class: "conflict-description" }, wc = { class: "option-section" }, bc = { class: "component-toggles" }, kc = /* @__PURE__ */ H({
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
    return (g, h) => (o(), n("div", uc, [
      d(pe, null, {
        default: a(() => [...h[4] || (h[4] = [
          v("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", mc, [
        e("div", vc, [
          d(ct, null, {
            default: a(() => [...h[5] || (h[5] = [
              v("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", fc, [
            (o(), n(P, null, q(i, (u) => e("label", {
              key: u.value,
              class: Y(["conflict-option", { active: t.conflictMode === u.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: u.value,
                checked: t.conflictMode === u.value,
                onChange: (f) => s("update:conflictMode", u.value)
              }, null, 40, gc),
              e("div", hc, [
                e("span", pc, l(u.label), 1),
                e("span", yc, l(u.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", wc, [
          d(ct, null, {
            default: a(() => [...h[6] || (h[6] = [
              v("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", bc, [
            d(Me, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                d(We, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": h[0] || (h[0] = (u) => s("update:includeWorkflows", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Me, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                d(We, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": h[1] || (h[1] = (u) => s("update:includeModels", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Me, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                d(We, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": h[2] || (h[2] = (u) => s("update:includeNodes", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Me, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                d(We, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": h[3] || (h[3] = (u) => s("update:includeGitHistory", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), $c = /* @__PURE__ */ j(kc, [["__scopeId", "data-v-0ec212b0"]]), _c = {
  key: 0,
  class: "import-empty"
}, Cc = { class: "import-help" }, xc = {
  key: 1,
  class: "import-configure"
}, Sc = { class: "selected-file-bar" }, Ec = { class: "file-bar-content" }, Ic = { class: "file-bar-info" }, zc = { class: "file-bar-name" }, Lc = { class: "file-bar-size" }, Mc = { class: "import-actions" }, Nc = {
  key: 2,
  class: "import-progress"
}, Tc = { class: "progress-content" }, Bc = { class: "progress-info" }, Rc = { class: "progress-title" }, Dc = { class: "progress-detail" }, Uc = { class: "progress-bar" }, Oc = { class: "progress-status" }, Vc = {
  key: 3,
  class: "import-complete"
}, Wc = { class: "complete-message" }, Pc = { class: "complete-title" }, Ac = { class: "complete-details" }, Fc = { class: "complete-actions" }, Gc = /* @__PURE__ */ H({
  __name: "ImportSection",
  setup(t) {
    const c = x(null), s = x(!1), i = x(!1), g = x(!1), h = x(""), u = x({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), f = x({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), m = x({
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
    }), p = W(() => u.value.includeWorkflows || u.value.includeModels || u.value.includeNodes || u.value.includeGitHistory);
    function z(b) {
      c.value = b;
    }
    function I() {
      c.value = null, i.value = !1, g.value = !1, h.value = "";
    }
    function _() {
      I(), s.value = !1, f.value = {
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
            { message: "Importing workflows...", detail: `Processing ${m.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${m.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${m.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const E of b)
            f.value = E, await new Promise((S) => setTimeout(S, 800));
          f.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((E) => setTimeout(E, 500)), g.value = !0, h.value = `Successfully imported ${m.value.workflows.length} workflows, ${m.value.models.length} models, and ${m.value.nodes.length} custom nodes.`;
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
    return (b, E) => (o(), y(fe, null, {
      header: a(() => [
        d(ge, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !c.value && !s.value ? (o(), n("div", _c, [
          d(Tr, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: z
          }),
          e("div", Cc, [
            d(pe, null, {
              default: a(() => [...E[5] || (E[5] = [
                v("How to Import", -1)
              ])]),
              _: 1
            }),
            E[6] || (E[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !s.value && !i.value ? (o(), n("div", xc, [
          e("div", Sc, [
            e("div", Ec, [
              E[7] || (E[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Ic, [
                e("div", zc, l(c.value.name), 1),
                e("div", Lc, l(R(c.value.size)), 1)
              ])
            ]),
            d(V, {
              variant: "ghost",
              size: "sm",
              onClick: I
            }, {
              default: a(() => [...E[8] || (E[8] = [
                v(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          d(dc, {
            "source-environment": m.value.sourceEnvironment,
            workflows: m.value.workflows,
            models: m.value.models,
            nodes: m.value.nodes,
            "git-branch": m.value.gitBranch,
            "git-commit": m.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          d($c, {
            "conflict-mode": u.value.conflictMode,
            "onUpdate:conflictMode": E[0] || (E[0] = (S) => u.value.conflictMode = S),
            "include-workflows": u.value.includeWorkflows,
            "onUpdate:includeWorkflows": E[1] || (E[1] = (S) => u.value.includeWorkflows = S),
            "include-models": u.value.includeModels,
            "onUpdate:includeModels": E[2] || (E[2] = (S) => u.value.includeModels = S),
            "include-nodes": u.value.includeNodes,
            "onUpdate:includeNodes": E[3] || (E[3] = (S) => u.value.includeNodes = S),
            "include-git-history": u.value.includeGitHistory,
            "onUpdate:includeGitHistory": E[4] || (E[4] = (S) => u.value.includeGitHistory = S)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !u.value.includeModels && m.value.models.length > 0 ? (o(), y(Re, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${m.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", Mc, [
            d(V, {
              variant: "primary",
              size: "md",
              disabled: !p.value,
              onClick: $
            }, {
              default: a(() => [...E[9] || (E[9] = [
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
            d(V, {
              variant: "secondary",
              size: "md",
              onClick: I
            }, {
              default: a(() => [...E[10] || (E[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Nc, [
          e("div", Tc, [
            E[11] || (E[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Bc, [
              e("div", Rc, l(f.value.message), 1),
              e("div", Dc, l(f.value.detail), 1)
            ])
          ]),
          e("div", Uc, [
            e("div", {
              class: "progress-bar-fill",
              style: Je({ width: `${f.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Oc, l(f.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Vc, [
          e("div", {
            class: Y(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", Wc, [
            e("div", Pc, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Ac, l(h.value), 1)
          ]),
          e("div", Fc, [
            d(V, {
              variant: "primary",
              size: "md",
              onClick: _
            }, {
              default: a(() => [...E[12] || (E[12] = [
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
}), Hc = /* @__PURE__ */ j(Gc, [["__scopeId", "data-v-18e18eb5"]]), jc = { class: "header-info" }, Kc = { class: "commit-hash" }, qc = {
  key: 0,
  class: "commit-refs"
}, Yc = { class: "commit-message" }, Jc = { class: "commit-date" }, Xc = {
  key: 0,
  class: "loading"
}, Qc = {
  key: 1,
  class: "changes-section"
}, Zc = { class: "stats-row" }, ed = { class: "stat" }, td = { class: "stat insertions" }, od = { class: "stat deletions" }, sd = {
  key: 0,
  class: "change-group"
}, ad = {
  key: 1,
  class: "change-group"
}, nd = {
  key: 0,
  class: "version"
}, ld = {
  key: 2,
  class: "change-group"
}, id = { class: "change-item" }, rd = /* @__PURE__ */ H({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: s } = me(), i = x(null), g = x(!0), h = W(() => {
      if (!i.value) return !1;
      const f = i.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), u = W(() => {
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
    }), (f, m) => (o(), y(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (p) => f.$emit("close"))
    }, {
      header: a(() => {
        var p, z, I, _;
        return [
          e("div", jc, [
            m[4] || (m[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Kc, l(((p = i.value) == null ? void 0 : p.short_hash) || t.commit.short_hash || ((z = t.commit.hash) == null ? void 0 : z.slice(0, 7))), 1),
            (_ = (I = i.value) == null ? void 0 : I.refs) != null && _.length ? (o(), n("span", qc, [
              (o(!0), n(P, null, q(i.value.refs, ($) => (o(), n("span", {
                key: $,
                class: "ref-badge"
              }, l($), 1))), 128))
            ])) : r("", !0)
          ]),
          d(ce, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = ($) => f.$emit("close"))
          }, {
            default: a(() => [...m[5] || (m[5] = [
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
        var p, z;
        return [
          e("div", Yc, l(((p = i.value) == null ? void 0 : p.message) || t.commit.message), 1),
          e("div", Jc, l(((z = i.value) == null ? void 0 : z.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), n("div", Xc, "Loading details...")) : i.value ? (o(), n("div", Qc, [
            e("div", Zc, [
              e("span", ed, l(i.value.stats.files_changed) + " files", 1),
              e("span", td, "+" + l(i.value.stats.insertions), 1),
              e("span", od, "-" + l(i.value.stats.deletions), 1)
            ]),
            h.value ? (o(), n("div", sd, [
              d(Ne, { variant: "section" }, {
                default: a(() => [...m[6] || (m[6] = [
                  v("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(P, null, q(i.value.changes.workflows.added, (I) => (o(), n("div", {
                key: "add-" + I,
                class: "change-item added"
              }, [
                m[7] || (m[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(I), 1)
              ]))), 128)),
              (o(!0), n(P, null, q(i.value.changes.workflows.modified, (I) => (o(), n("div", {
                key: "mod-" + I,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(I), 1)
              ]))), 128)),
              (o(!0), n(P, null, q(i.value.changes.workflows.deleted, (I) => (o(), n("div", {
                key: "del-" + I,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(I), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (o(), n("div", ad, [
              d(Ne, { variant: "section" }, {
                default: a(() => [...m[10] || (m[10] = [
                  v("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(P, null, q(i.value.changes.nodes.added, (I) => (o(), n("div", {
                key: "add-" + I.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(I.name), 1),
                I.version ? (o(), n("span", nd, "(" + l(I.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (o(!0), n(P, null, q(i.value.changes.nodes.removed, (I) => (o(), n("div", {
                key: "rem-" + I.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(I.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", ld, [
              d(Ne, { variant: "section" }, {
                default: a(() => [...m[13] || (m[13] = [
                  v("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", id, [
                m[14] || (m[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (p) => f.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...m[15] || (m[15] = [
            v(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        d(ce, {
          variant: "primary",
          onClick: m[2] || (m[2] = (p) => f.$emit("checkout", t.commit))
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
}), cd = /* @__PURE__ */ j(rd, [["__scopeId", "data-v-d256ff6d"]]), dd = { class: "dialog-message" }, ud = {
  key: 0,
  class: "dialog-details"
}, md = {
  key: 1,
  class: "dialog-warning"
}, vd = /* @__PURE__ */ H({
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
    return (c, s) => (o(), y(tt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => c.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", dd, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", ud, [
          (o(!0), n(P, null, q(t.details, (i, g) => (o(), n("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (o(), n("p", md, [
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
        t.secondaryAction ? (o(), y(ce, {
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
}), fd = /* @__PURE__ */ j(vd, [["__scopeId", "data-v-3670b9f5"]]), gd = { class: "base-textarea-wrapper" }, hd = ["value", "rows", "placeholder", "disabled", "maxlength"], pd = {
  key: 0,
  class: "base-textarea-count"
}, yd = /* @__PURE__ */ H({
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
    return (c, s) => (o(), n("div", gd, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Se(ve((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Se(ve((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, hd),
      t.showCharCount && t.maxLength ? (o(), n("div", pd, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ j(yd, [["__scopeId", "data-v-5516e6fc"]]), wd = ["checked", "disabled"], bd = { class: "base-checkbox-box" }, kd = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, $d = {
  key: 0,
  class: "base-checkbox-label"
}, _d = /* @__PURE__ */ H({
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
      }, null, 40, wd),
      e("span", bd, [
        t.modelValue ? (o(), n("svg", kd, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (o(), n("span", $d, [
        te(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ j(_d, [["__scopeId", "data-v-bf17c831"]]), Cd = { class: "popover-header" }, xd = { class: "popover-body" }, Sd = {
  key: 0,
  class: "changes-summary"
}, Ed = {
  key: 0,
  class: "change-item"
}, Id = {
  key: 1,
  class: "change-item"
}, zd = {
  key: 2,
  class: "change-item"
}, Ld = {
  key: 3,
  class: "change-item"
}, Md = {
  key: 4,
  class: "change-item"
}, Nd = {
  key: 1,
  class: "no-changes"
}, Td = {
  key: 2,
  class: "loading"
}, Bd = {
  key: 3,
  class: "issues-warning"
}, Rd = { class: "warning-header" }, Dd = { class: "warning-title" }, Ud = { class: "issues-list" }, Od = { class: "message-section" }, Vd = { class: "popover-footer" }, Wd = {
  key: 1,
  class: "commit-popover"
}, Pd = { class: "popover-header" }, Ad = { class: "popover-body" }, Fd = {
  key: 0,
  class: "changes-summary"
}, Gd = {
  key: 0,
  class: "change-item"
}, Hd = {
  key: 1,
  class: "change-item"
}, jd = {
  key: 2,
  class: "change-item"
}, Kd = {
  key: 3,
  class: "change-item"
}, qd = {
  key: 4,
  class: "change-item"
}, Yd = {
  key: 1,
  class: "no-changes"
}, Jd = {
  key: 2,
  class: "loading"
}, Xd = {
  key: 3,
  class: "issues-warning"
}, Qd = { class: "warning-header" }, Zd = { class: "warning-title" }, eu = { class: "issues-list" }, tu = { class: "message-section" }, ou = { class: "popover-footer" }, su = /* @__PURE__ */ H({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const s = t, i = c, { commit: g } = me(), h = x(""), u = x(!1), f = x(!1), m = x(null), p = W(() => {
      if (!s.status) return !1;
      const R = s.status.workflows;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || s.status.has_changes;
    }), z = W(() => {
      var R;
      return (R = s.status) != null && R.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), I = W(() => z.value.length > 0), _ = W(() => I.value && !f.value);
    async function $() {
      var R, b, E;
      if (!(I.value && !f.value) && !(!p.value || !h.value.trim() || u.value)) {
        u.value = !0, m.value = null;
        try {
          const S = await g(h.value.trim(), f.value);
          S.status === "success" ? (m.value = {
            type: "success",
            message: `Committed: ${((R = S.summary) == null ? void 0 : R.new) || 0} new, ${((b = S.summary) == null ? void 0 : b.modified) || 0} modified, ${((E = S.summary) == null ? void 0 : E.deleted) || 0} deleted`
          }, h.value = "", f.value = !1, setTimeout(() => i("committed"), 1e3)) : S.status === "no_changes" ? m.value = { type: "error", message: "No changes to commit" } : S.status === "blocked" ? m.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : m.value = { type: "error", message: S.message || "Commit failed" };
        } catch (S) {
          m.value = { type: "error", message: S instanceof Error ? S.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (R, b) => t.asModal ? (o(), y(Ue, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (E) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Cd, [
            b[11] || (b[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (E) => i("close"))
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
          e("div", xd, [
            t.status && p.value ? (o(), n("div", Sd, [
              t.status.workflows.new.length ? (o(), n("div", Ed, [
                b[12] || (b[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (o(), n("div", Id, [
                b[13] || (b[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", zd, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Ld, [
                b[15] || (b[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Md, [
                b[16] || (b[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0)
            ])) : t.status ? (o(), n("div", Nd, " No changes to commit ")) : (o(), n("div", Td, " Loading... ")),
            I.value ? (o(), n("div", Bd, [
              e("div", Rd, [
                b[17] || (b[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Dd, l(z.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Ud, [
                (o(!0), n(P, null, q(z.value, (E) => (o(), n("div", {
                  key: E.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(E.name), 1),
                  v(": " + l(E.issue_summary), 1)
                ]))), 128))
              ]),
              d(wt, {
                modelValue: f.value,
                "onUpdate:modelValue": b[1] || (b[1] = (E) => f.value = E),
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
                "onUpdate:modelValue": b[2] || (b[2] = (E) => h.value = E),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : p.value ? "Describe your changes..." : "No changes",
                disabled: !p.value || u.value || _.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            m.value ? (o(), n("div", {
              key: 4,
              class: Y(["result", m.value.type])
            }, l(m.value.message), 3)) : r("", !0)
          ]),
          e("div", Vd, [
            d(ce, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (E) => i("close"))
            }, {
              default: a(() => [...b[19] || (b[19] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(ce, {
              variant: f.value ? "danger" : "primary",
              disabled: !p.value || !h.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: $
            }, {
              default: a(() => [
                v(l(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Wd, [
      e("div", Pd, [
        b[21] || (b[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (E) => i("close"))
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
      e("div", Ad, [
        t.status && p.value ? (o(), n("div", Fd, [
          t.status.workflows.new.length ? (o(), n("div", Gd, [
            b[22] || (b[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Hd, [
            b[23] || (b[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", jd, [
            b[24] || (b[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Kd, [
            b[25] || (b[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", qd, [
            b[26] || (b[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0)
        ])) : t.status ? (o(), n("div", Yd, " No changes to commit ")) : (o(), n("div", Jd, " Loading... ")),
        I.value ? (o(), n("div", Xd, [
          e("div", Qd, [
            b[27] || (b[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", Zd, l(z.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", eu, [
            (o(!0), n(P, null, q(z.value, (E) => (o(), n("div", {
              key: E.name,
              class: "issue-item"
            }, [
              e("strong", null, l(E.name), 1),
              v(": " + l(E.issue_summary), 1)
            ]))), 128))
          ]),
          d(wt, {
            modelValue: f.value,
            "onUpdate:modelValue": b[7] || (b[7] = (E) => f.value = E),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...b[28] || (b[28] = [
              v(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", tu, [
          d(yt, {
            modelValue: h.value,
            "onUpdate:modelValue": b[8] || (b[8] = (E) => h.value = E),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : p.value ? "Describe your changes..." : "No changes",
            disabled: !p.value || u.value || _.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        m.value ? (o(), n("div", {
          key: 4,
          class: Y(["result", m.value.type])
        }, l(m.value.message), 3)) : r("", !0)
      ]),
      e("div", ou, [
        d(ce, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (E) => i("close"))
        }, {
          default: a(() => [...b[29] || (b[29] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        d(ce, {
          variant: f.value ? "danger" : "primary",
          disabled: !p.value || !h.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: $
        }, {
          default: a(() => [
            v(l(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), St = /* @__PURE__ */ j(su, [["__scopeId", "data-v-38b45183"]]), au = { class: "modal-header" }, nu = { class: "modal-body" }, lu = { class: "switch-message" }, iu = { class: "switch-details" }, ru = { class: "modal-actions" }, cu = /* @__PURE__ */ H({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), y(Ue, { to: "body" }, [
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
          e("div", au, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", nu, [
            e("p", lu, [
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
            e("p", iu, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", ru, [
            d(V, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(V, {
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
}), du = /* @__PURE__ */ j(cu, [["__scopeId", "data-v-e9c5253e"]]), uu = { class: "progress-bar" }, mu = /* @__PURE__ */ H({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, s = W(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, g) => (o(), n("div", uu, [
      e("div", {
        class: Y(["progress-fill", t.variant]),
        style: Je({ width: s.value })
      }, null, 6)
    ]));
  }
}), vu = /* @__PURE__ */ j(mu, [["__scopeId", "data-v-1beb0512"]]), fu = {
  key: 0,
  class: "modal-overlay"
}, gu = { class: "modal-content" }, hu = { class: "modal-body" }, pu = { class: "progress-info" }, yu = { class: "progress-percentage" }, wu = { class: "progress-state" }, bu = { class: "switch-steps" }, ku = { class: "step-icon" }, $u = { class: "step-label" }, _u = /* @__PURE__ */ H({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, s = W(() => {
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
    }), i = W(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), g = W(() => {
      const h = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = h.findIndex((f) => f.state === c.state);
      return h.map((f, m) => {
        let p = "pending", z = "○";
        return m < u ? (p = "completed", z = "✓") : m === u && (p = "active", z = "⟳"), {
          ...f,
          status: p,
          icon: z
        };
      });
    });
    return (h, u) => (o(), y(Ue, { to: "body" }, [
      t.show ? (o(), n("div", fu, [
        e("div", gu, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", hu, [
            d(vu, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", pu, [
              e("div", yu, l(t.progress) + "%", 1),
              e("div", wu, l(s.value), 1)
            ]),
            e("div", bu, [
              (o(!0), n(P, null, q(g.value, (f) => (o(), n("div", {
                key: f.state,
                class: Y(["switch-step", f.status])
              }, [
                e("span", ku, l(f.icon), 1),
                e("span", $u, l(f.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Cu = /* @__PURE__ */ j(_u, [["__scopeId", "data-v-768a5078"]]), xu = { class: "modal-header" }, Su = { class: "modal-body" }, Eu = {
  key: 0,
  class: "node-section"
}, Iu = { class: "node-list" }, zu = {
  key: 1,
  class: "node-section"
}, Lu = { class: "node-list" }, Mu = { class: "modal-actions" }, Nu = /* @__PURE__ */ H({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), y(Ue, { to: "body" }, [
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
          e("div", xu, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Su, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Eu, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Iu, [
                (o(!0), n(P, null, q(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", zu, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Lu, [
                (o(!0), n(P, null, q(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
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
          e("div", Mu, [
            d(V, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(V, {
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
}), Tu = /* @__PURE__ */ j(Nu, [["__scopeId", "data-v-7cad7518"]]);
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
  const t = x(null);
  async function c() {
    try {
      const u = await He(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (u.ok)
        return (await u.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await He(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await He(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Failed to get status");
      return await u.json();
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
const Ru = { class: "comfygit-panel" }, Du = { class: "panel-header" }, Uu = { class: "header-left" }, Ou = {
  key: 0,
  class: "header-info"
}, Vu = { class: "header-actions" }, Wu = { class: "env-switcher" }, Pu = {
  key: 0,
  class: "header-info"
}, Au = { class: "branch-name" }, Fu = { class: "panel-main" }, Gu = { class: "sidebar" }, Hu = { class: "sidebar-section" }, ju = { class: "sidebar-section" }, Ku = { class: "sidebar-section" }, qu = { class: "content-area" }, Yu = {
  key: 0,
  class: "error-message"
}, Ju = {
  key: 1,
  class: "loading"
}, Xu = { class: "dialog-content env-selector-dialog" }, Qu = { class: "dialog-header" }, Zu = { class: "dialog-body" }, em = { class: "env-list" }, tm = { class: "env-info" }, om = { class: "env-name-row" }, sm = { class: "env-indicator" }, am = { class: "env-name" }, nm = {
  key: 0,
  class: "env-branch"
}, lm = {
  key: 1,
  class: "current-label"
}, im = { class: "env-stats" }, rm = ["onClick"], cm = { class: "toast-container" }, dm = { class: "toast-icon" }, um = { class: "toast-message" }, mm = /* @__PURE__ */ H({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const s = c, {
      getStatus: i,
      getHistory: g,
      getBranches: h,
      checkout: u,
      createBranch: f,
      switchBranch: m,
      getEnvironments: p,
      switchEnvironment: z,
      getSwitchProgress: I,
      syncEnvironmentManually: _
    } = me(), $ = Bu(), R = x(null), b = x([]), E = x([]), S = x([]), U = W(() => S.value.find((O) => O.is_current)), F = x(!1), B = x(null), N = x(null), w = x(!1), L = x(!1), C = x(!1), T = x(""), D = x({ state: "idle", progress: 0, message: "" });
    let K = null, A = null;
    const M = x("status"), J = x("this-env");
    function se(O, k) {
      M.value = O, J.value = k;
    }
    function Oe(O) {
      const oe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[O];
      oe && se(oe.view, oe.section);
    }
    function Ve() {
      se("branches", "this-env");
    }
    const ie = x(null), _e = x(!1), X = x(!1), Le = x([]);
    let ot = 0;
    function ne(O, k = "info", oe = 3e3) {
      const le = ++ot;
      return Le.value.push({ id: le, message: O, type: k }), oe > 0 && setTimeout(() => {
        Le.value = Le.value.filter((ye) => ye.id !== le);
      }, oe), le;
    }
    function $e(O) {
      Le.value = Le.value.filter((k) => k.id !== O);
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
    const G = W(() => {
      if (!R.value) return "neutral";
      const O = R.value.workflows, k = O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || R.value.has_changes;
      return R.value.comparison.is_synced ? k ? "warning" : "success" : "error";
    });
    W(() => R.value ? G.value === "success" ? "All synced" : G.value === "warning" ? "Uncommitted changes" : G.value === "error" ? "Not synced" : "" : "");
    async function Q() {
      F.value = !0, B.value = null;
      try {
        const [O, k, oe, le] = await Promise.all([
          i(),
          g(),
          h(),
          p()
        ]);
        R.value = O, b.value = k.commits, E.value = oe.branches, S.value = le, s("statusUpdate", O);
      } catch (O) {
        B.value = O instanceof Error ? O.message : "Failed to load status", R.value = null, b.value = [], E.value = [];
      } finally {
        F.value = !1;
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
          const le = ne(`Checking out ${O.short_hash || ((we = O.hash) == null ? void 0 : we.slice(0, 7))}...`, "info", 0), ye = await u(O.hash, k);
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
          const oe = ne(`Switching to ${O}...`, "info", 0), le = await m(O, k);
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
      try {
        const O = localStorage.getItem("Comfy.OpenWorkflowsPaths");
        O && (sessionStorage.setItem("ComfyGit.WorkflowsToReload", O), console.log("[ComfyGit] Stored workflows for reload:", O)), sessionStorage.setItem("ComfyGit.PendingGitReload", "true"), localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((k) => {
          (k.startsWith("workflow:") || k.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(k);
        }), console.log("[ComfyGit] Cleared workflow content cache (kept tab list for hot reload)");
      } catch (O) {
        console.warn("[ComfyGit] Failed to clear workflow cache:", O);
      }
    }
    async function ft(O) {
      w.value = !1, T.value = O, L.value = !0;
    }
    async function Tt() {
      L.value = !1, C.value = !0, at(), D.value = {
        progress: 10,
        state: Qe(10),
        message: Ze(10)
      };
      try {
        await z(T.value), Bt(), Rt();
      } catch (O) {
        Te(), C.value = !1, ne(`Failed to initiate switch: ${O instanceof Error ? O.message : "Unknown error"}`, "error"), D.value = { state: "idle", progress: 0, message: "" };
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
    function Bt() {
      if (A) return;
      let O = 10;
      const k = 60, oe = 5e3, le = 100, ye = (k - O) / (oe / le);
      A = window.setInterval(() => {
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
      A && (clearInterval(A), A = null);
    }
    function Rt() {
      K || (K = window.setInterval(async () => {
        try {
          let O = await $.getStatus();
          if ((!O || O.state === "idle") && (O = await I()), !O)
            return;
          const k = O.progress || 0;
          k >= 60 && Te();
          const oe = Math.max(k, D.value.progress), le = O.state && O.state !== "idle" && O.state !== "unknown", ye = le ? O.state : Qe(oe), we = le && O.message || Ze(oe);
          D.value = {
            state: ye,
            progress: oe,
            message: we
          }, O.state === "complete" ? (Te(), nt(), C.value = !1, ne(`✓ Switched to ${T.value}`, "success"), await Q(), T.value = "") : O.state === "rolled_back" ? (Te(), nt(), C.value = !1, ne("Switch failed, restored previous environment", "warning"), T.value = "") : O.state === "critical_failure" && (Te(), nt(), C.value = !1, ne(`Critical error during switch: ${O.message}`, "error"), T.value = "");
        } catch (O) {
          console.error("Failed to poll switch progress:", O);
        }
      }, 1e3));
    }
    function nt() {
      Te(), K && (clearInterval(K), K = null);
    }
    function Dt() {
      L.value = !1, T.value = "";
    }
    async function Ut() {
      _e.value = !1, await Q(), ne("✓ Changes committed", "success");
    }
    async function Ot() {
      X.value = !1;
      const O = ne("Syncing environment...", "info", 0);
      try {
        const k = await _("skip", !0);
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
    async function Vt(O) {
      const k = ne(`Creating environment "${O}"...`, "info", 0);
      $e(k), ne("Environment creation not yet implemented", "warning");
    }
    async function Wt(O) {
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
      return o(), n("div", Ru, [
        e("div", Du, [
          e("div", Uu, [
            k[27] || (k[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            R.value ? (o(), n("div", Ou)) : r("", !0)
          ]),
          e("div", Vu, [
            e("button", {
              class: Y(["icon-btn", { spinning: F.value }]),
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
        e("div", Wu, [
          k[31] || (k[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: k[1] || (k[1] = (ee) => se("environments", "all-envs"))
          }, [
            R.value ? (o(), n("div", Pu, [
              e("span", null, l(((oe = U.value) == null ? void 0 : oe.name) || ((le = R.value) == null ? void 0 : le.environment) || "Loading..."), 1),
              e("span", Au, "(" + l(R.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            k[30] || (k[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Fu, [
          e("div", Gu, [
            e("div", Hu, [
              k[32] || (k[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "status" && J.value === "this-env" }]),
                onClick: k[2] || (k[2] = (ee) => se("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "workflows" }]),
                onClick: k[3] || (k[3] = (ee) => se("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "models-env" }]),
                onClick: k[4] || (k[4] = (ee) => se("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "branches" }]),
                onClick: k[5] || (k[5] = (ee) => se("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "history" }]),
                onClick: k[6] || (k[6] = (ee) => se("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "nodes" }]),
                onClick: k[7] || (k[7] = (ee) => se("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "debug-env" }]),
                onClick: k[8] || (k[8] = (ee) => se("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            k[35] || (k[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ju, [
              k[33] || (k[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "environments" }]),
                onClick: k[9] || (k[9] = (ee) => se("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "model-index" }]),
                onClick: k[10] || (k[10] = (ee) => se("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "settings" }]),
                onClick: k[11] || (k[11] = (ee) => se("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "debug-workspace" }]),
                onClick: k[12] || (k[12] = (ee) => se("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            k[36] || (k[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Ku, [
              k[34] || (k[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "export" }]),
                onClick: k[13] || (k[13] = (ee) => se("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "import" }]),
                onClick: k[14] || (k[14] = (ee) => se("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: M.value === "remotes" }]),
                onClick: k[15] || (k[15] = (ee) => se("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", qu, [
            B.value ? (o(), n("div", Yu, l(B.value), 1)) : !R.value && M.value === "status" ? (o(), n("div", Ju, " Loading status... ")) : (o(), n(P, { key: 2 }, [
              M.value === "status" ? (o(), y(ka, {
                key: 0,
                status: R.value,
                onSwitchBranch: Ve,
                onCommitChanges: k[16] || (k[16] = (ee) => _e.value = !0),
                onSyncEnvironment: k[17] || (k[17] = (ee) => X.value = !0),
                onViewWorkflows: k[18] || (k[18] = (ee) => se("workflows", "this-env")),
                onViewHistory: k[19] || (k[19] = (ee) => se("history", "this-env")),
                onViewDebug: k[20] || (k[20] = (ee) => se("debug-env", "this-env"))
              }, null, 8, ["status"])) : M.value === "workflows" ? (o(), y(Ol, {
                key: 1,
                onRefresh: Q
              })) : M.value === "models-env" ? (o(), y(Pl, {
                key: 2,
                onNavigate: Oe
              })) : M.value === "branches" ? (o(), y(Da, {
                key: 3,
                branches: E.value,
                current: ((ye = R.value) == null ? void 0 : ye.branch) || null,
                onSwitch: Xe,
                onCreate: Mt
              }, null, 8, ["branches", "current"])) : M.value === "history" ? (o(), y(Ka, {
                key: 4,
                commits: b.value,
                onSelect: ae,
                onCheckout: Ge
              }, null, 8, ["commits"])) : M.value === "nodes" ? (o(), y(ql, { key: 5 })) : M.value === "debug-env" ? (o(), y(Yi, { key: 6 })) : M.value === "environments" ? (o(), y(ir, {
                key: 7,
                onSwitch: ft,
                onCreate: Vt,
                onDelete: Wt,
                onViewDetails: Pt
              })) : M.value === "model-index" ? (o(), y(Fl, { key: 8 })) : M.value === "settings" ? (o(), y(Hi, { key: 9 })) : M.value === "debug-workspace" ? (o(), y(Ki, { key: 10 })) : M.value === "export" ? (o(), y(pr, { key: 11 })) : M.value === "import" ? (o(), y(Hc, { key: 12 })) : M.value === "remotes" ? (o(), y(Ei, { key: 13 })) : r("", !0)
            ], 64))
          ])
        ]),
        N.value ? (o(), y(cd, {
          key: 0,
          commit: N.value,
          onClose: k[21] || (k[21] = (ee) => N.value = null),
          onCheckout: Ge,
          onCreateBranch: Nt
        }, null, 8, ["commit"])) : r("", !0),
        ie.value ? (o(), y(fd, {
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
        d(du, {
          show: L.value,
          "from-environment": ((we = U.value) == null ? void 0 : we.name) || "unknown",
          "to-environment": T.value,
          onConfirm: Tt,
          onClose: Dt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        _e.value && R.value ? (o(), y(St, {
          key: 2,
          status: R.value,
          "as-modal": !0,
          onClose: k[23] || (k[23] = (ee) => _e.value = !1),
          onCommitted: Ut
        }, null, 8, ["status"])) : r("", !0),
        X.value && R.value ? (o(), y(Tu, {
          key: 3,
          show: X.value,
          "mismatch-details": {
            missing_nodes: R.value.comparison.missing_nodes,
            extra_nodes: R.value.comparison.extra_nodes
          },
          onConfirm: Ot,
          onClose: k[24] || (k[24] = (ee) => X.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        d(Cu, {
          show: C.value,
          state: D.value.state,
          progress: D.value.progress,
          message: D.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        w.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: k[26] || (k[26] = ve((ee) => w.value = !1, ["self"]))
        }, [
          e("div", Xu, [
            e("div", Qu, [
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
            e("div", Zu, [
              k[39] || (k[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", em, [
                (o(!0), n(P, null, q(S.value, (ee) => (o(), n("div", {
                  key: ee.name,
                  class: Y(["env-item", { current: ee.is_current }])
                }, [
                  e("div", tm, [
                    e("div", om, [
                      e("span", sm, l(ee.is_current ? "●" : "○"), 1),
                      e("span", am, l(ee.name), 1),
                      ee.current_branch ? (o(), n("span", nm, "(" + l(ee.current_branch) + ")", 1)) : r("", !0),
                      ee.is_current ? (o(), n("span", lm, "CURRENT")) : r("", !0)
                    ]),
                    e("div", im, l(ee.workflow_count) + " workflows • " + l(ee.node_count) + " nodes ", 1)
                  ]),
                  ee.is_current ? r("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Cm) => ft(ee.name)
                  }, " SWITCH ", 8, rm))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        e("div", cm, [
          d(Ht, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(P, null, q(Le.value, (ee) => (o(), n("div", {
                key: ee.id,
                class: Y(["toast", ee.type])
              }, [
                e("span", dm, l(st(ee.type)), 1),
                e("span", um, l(ee.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), vm = /* @__PURE__ */ j(mm, [["__scopeId", "data-v-fa077904"]]), fm = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', gm = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', hm = {
  comfy: fm,
  phosphor: gm
}, mt = "comfy", Et = "comfygit-theme";
let Be = null, It = mt;
function pm() {
  try {
    const t = localStorage.getItem(Et);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return mt;
}
function zt(t = mt) {
  Be && Be.remove(), Be = document.createElement("style"), Be.id = "comfygit-theme-styles", Be.setAttribute("data-theme", t), Be.textContent = hm[t], document.head.appendChild(Be), document.body.setAttribute("data-comfygit-theme", t), It = t;
  try {
    localStorage.setItem(Et, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function ym() {
  return It;
}
function wm(t) {
  zt(t);
}
const vt = document.createElement("link");
vt.rel = "stylesheet";
vt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(vt);
const bm = pm();
zt(bm);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), wm(t);
  },
  getTheme: () => {
    const t = ym();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let be = null, he = null, Ke = null;
const Pe = x(null);
async function et() {
  var t;
  if (!((t = De) != null && t.api)) return null;
  try {
    const c = await De.api.fetchApi("/v2/comfygit/status");
    c.ok && (Pe.value = await c.json());
  } catch {
  }
}
function km() {
  if (!Pe.value) return !1;
  const t = Pe.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Pe.value.has_changes;
}
function $m() {
  be && be.remove(), be = document.createElement("div"), be.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", be.appendChild(t), be.addEventListener("click", (i) => {
    i.target === be && rt();
  });
  const c = (i) => {
    i.key === "Escape" && (rt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), $t({
    render: () => _t(vm, {
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
function _m(t) {
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
  t && (t.style.display = km() ? "block" : "none");
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
De.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var i, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = $m, xe = document.createElement("button"), xe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", xe.innerHTML = 'Commit <span class="commit-indicator"></span>', xe.title = "Quick Commit", xe.onclick = () => _m(xe), t.appendChild(c), t.appendChild(xe), (g = (i = De.menu) == null ? void 0 : i.settingsGroup) != null && g.element && (De.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await et(), qe(), setInterval(async () => {
      await et(), qe();
    }, 3e4);
    const s = De.api;
    if (s) {
      s.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: z, workflow_name: I } = p.detail;
        console.log(`[ComfyGit] Workflow ${z}: ${I}`), await et(), qe();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let h = !1, u = null;
      s.addEventListener("status", async (p) => {
        const z = p.detail != null;
        z && !h && (console.log("[ComfyGit] Server reconnected, checking for pending workflow reload..."), u && (clearTimeout(u), u = null), u = setTimeout(async () => {
          await f();
        }, 500)), h = z;
      });
      async function f() {
        try {
          if (!sessionStorage.getItem("ComfyGit.PendingGitReload")) {
            console.log("[ComfyGit] No pending reload detected");
            return;
          }
          const z = sessionStorage.getItem("ComfyGit.WorkflowsToReload");
          if (!z) {
            console.log("[ComfyGit] No workflows to reload"), sessionStorage.removeItem("ComfyGit.PendingGitReload");
            return;
          }
          console.log("[ComfyGit] Found workflows to reload:", z);
          let I;
          try {
            I = JSON.parse(z);
          } catch (_) {
            console.error("[ComfyGit] Failed to parse workflow paths:", _), sessionStorage.removeItem("ComfyGit.PendingGitReload"), sessionStorage.removeItem("ComfyGit.WorkflowsToReload");
            return;
          }
          if (Array.isArray(I) && I.length > 0) {
            console.log(`[ComfyGit] Reloading ${I.length} workflow(s)...`);
            const _ = I[0];
            await m(_);
          }
          sessionStorage.removeItem("ComfyGit.PendingGitReload"), sessionStorage.removeItem("ComfyGit.WorkflowsToReload"), console.log("[ComfyGit] Workflow reload completed");
        } catch (p) {
          console.error("[ComfyGit] Error during workflow reload:", p), sessionStorage.removeItem("ComfyGit.PendingGitReload"), sessionStorage.removeItem("ComfyGit.WorkflowsToReload");
        }
      }
      async function m(p) {
        try {
          console.log(`[ComfyGit] Loading workflow: ${p}`);
          const z = p.replace(/^workflows\//, "").replace(/\.json$/, "");
          console.log(`[ComfyGit] Fetching workflow: ${z}`);
          const I = await fetch(`/api/v2/comfygit/workflow/${encodeURIComponent(z)}/content`);
          if (!I.ok) {
            console.warn(`[ComfyGit] Failed to fetch workflow ${z}: ${I.status}`);
            return;
          }
          const _ = await I.json();
          await De.loadGraphData(
            _,
            !0,
            // clean - clear current graph
            !0,
            // restore_view - restore saved view position
            z,
            // workflow name
            {
              showMissingNodesDialog: !0,
              showMissingModelsDialog: !0,
              openSource: "comfygit_reload"
            }
          ), console.log(`[ComfyGit] Successfully reloaded workflow: ${z}`);
        } catch (z) {
          console.error(`[ComfyGit] Error reloading workflow ${p}:`, z);
        }
      }
      console.log("[ComfyGit] Hot reload system initialized");
    }
  }
});
