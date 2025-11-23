import { app as it } from "../../scripts/app.js";
import { defineComponent as H, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as t, renderSlot as ee, createBlock as p, resolveDynamicComponent as ft, normalizeClass as Y, withCtx as a, toDisplayString as i, createVNode as d, createTextVNode as m, computed as W, Fragment as A, renderList as q, normalizeStyle as Xe, ref as C, onMounted as ve, watch as Ct, Teleport as Oe, withModifiers as ge, Transition as Kt, withKeys as Ie, onUnmounted as qt, resolveComponent as Yt, createSlots as xt, TransitionGroup as Xt, createApp as St, h as Et } from "vue";
const Zt = { class: "panel-layout" }, Jt = {
  key: 0,
  class: "panel-layout-header"
}, Qt = {
  key: 1,
  class: "panel-layout-search"
}, eo = { class: "panel-layout-content" }, to = {
  key: 2,
  class: "panel-layout-footer"
}, oo = /* @__PURE__ */ H({
  __name: "PanelLayout",
  setup(e) {
    return (l, s) => (o(), n("div", Zt, [
      l.$slots.header ? (o(), n("div", Jt, [
        ee(l.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      l.$slots.search ? (o(), n("div", Qt, [
        ee(l.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      t("div", eo, [
        ee(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (o(), n("div", to, [
        ee(l.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), G = (e, l) => {
  const s = e.__vccOpts || e;
  for (const [r, g] of l)
    s[r] = g;
  return s;
}, he = /* @__PURE__ */ G(oo, [["__scopeId", "data-v-21565df9"]]), so = {
  key: 0,
  class: "panel-title-prefix"
}, ao = {
  key: 1,
  class: "panel-title-prefix-theme"
}, no = /* @__PURE__ */ H({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, s) => (o(), p(ft(`h${e.level}`), {
      class: Y(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (o(), n("span", so, i(e.prefix), 1)) : (o(), n("span", ao)),
        ee(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), lo = /* @__PURE__ */ G(no, [["__scopeId", "data-v-c3875efc"]]), io = ["title"], ro = ["width", "height"], co = /* @__PURE__ */ H({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (o(), n("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (r) => l.$emit("click"))
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
      ])], 8, ro))
    ], 8, io));
  }
}), It = /* @__PURE__ */ G(co, [["__scopeId", "data-v-6fc7f16d"]]), uo = { class: "header-left" }, mo = {
  key: 0,
  class: "header-actions"
}, vo = /* @__PURE__ */ H({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (l, s) => (o(), n("div", {
      class: Y(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", uo, [
        d(lo, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            m(i(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), p(It, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => l.$emit("info-click"))
        })) : c("", !0)
      ]),
      l.$slots.actions ? (o(), n("div", mo, [
        ee(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), pe = /* @__PURE__ */ G(vo, [["__scopeId", "data-v-55a62cd6"]]), fo = {
  key: 0,
  class: "section-title-count"
}, go = {
  key: 1,
  class: "section-title-icon"
}, ho = /* @__PURE__ */ H({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (o(), p(ft(`h${e.level}`), {
      class: Y(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: a(() => [
        ee(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", fo, "(" + i(e.count) + ")", 1)) : c("", !0),
        e.clickable ? (o(), n("span", go, i(e.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), we = /* @__PURE__ */ G(ho, [["__scopeId", "data-v-559361eb"]]), po = { class: "status-grid" }, yo = { class: "status-grid__column" }, wo = { class: "status-grid__title" }, bo = { class: "status-grid__column status-grid__column--right" }, ko = { class: "status-grid__title" }, _o = /* @__PURE__ */ H({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, s) => (o(), n("div", po, [
      t("div", yo, [
        t("h4", wo, i(e.leftTitle), 1),
        ee(l.$slots, "left", {}, void 0, !0)
      ]),
      t("div", bo, [
        t("h4", ko, i(e.rightTitle), 1),
        ee(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), $o = /* @__PURE__ */ G(_o, [["__scopeId", "data-v-fe556068"]]), Co = {
  key: 0,
  class: "status-item__icon"
}, xo = {
  key: 1,
  class: "status-item__count"
}, So = { class: "status-item__label" }, Eo = /* @__PURE__ */ H({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, s = W(() => `status-item--${l.variant}`);
    return (r, g) => (o(), n("div", {
      class: Y(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), n("span", Co, i(e.icon), 1)) : c("", !0),
      e.count !== void 0 ? (o(), n("span", xo, i(e.count), 1)) : c("", !0),
      t("span", So, i(e.label), 1)
    ], 2));
  }
}), Se = /* @__PURE__ */ G(Eo, [["__scopeId", "data-v-6f929183"]]), Io = { class: "issue-card__header" }, zo = { class: "issue-card__icon" }, Mo = { class: "issue-card__title" }, Lo = {
  key: 0,
  class: "issue-card__content"
}, No = {
  key: 0,
  class: "issue-card__description"
}, Bo = {
  key: 1,
  class: "issue-card__items"
}, To = {
  key: 2,
  class: "issue-card__actions"
}, Do = /* @__PURE__ */ H({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, s = W(() => `issue-card--${l.severity}`);
    return (r, g) => (o(), n("div", {
      class: Y(["issue-card", s.value])
    }, [
      t("div", Io, [
        t("span", zo, i(e.icon), 1),
        t("h4", Mo, i(e.title), 1)
      ]),
      r.$slots.default || e.description ? (o(), n("div", Lo, [
        e.description ? (o(), n("p", No, i(e.description), 1)) : c("", !0),
        ee(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      e.items && e.items.length ? (o(), n("div", Bo, [
        (o(!0), n(A, null, q(e.items, (h, u) => (o(), n("div", {
          key: u,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, i(h), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), n("div", To, [
        ee(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ G(Do, [["__scopeId", "data-v-df6aa348"]]), Ro = ["type", "disabled"], Uo = {
  key: 0,
  class: "spinner"
}, Oo = /* @__PURE__ */ H({
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
    return (l, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Y(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (o(), n("span", Uo)) : c("", !0),
      e.loading ? c("", !0) : ee(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ro));
  }
}), V = /* @__PURE__ */ G(Oo, [["__scopeId", "data-v-772abe47"]]), Vo = { class: "empty-state" }, Wo = {
  key: 0,
  class: "empty-icon"
}, Ao = { class: "empty-message" }, Fo = /* @__PURE__ */ H({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, s) => (o(), n("div", Vo, [
      e.icon ? (o(), n("div", Wo, i(e.icon), 1)) : c("", !0),
      t("p", Ao, i(e.message), 1),
      e.actionLabel ? (o(), p(V, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("action"))
      }, {
        default: a(() => [
          m(i(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), $e = /* @__PURE__ */ G(Fo, [["__scopeId", "data-v-4466284f"]]), Po = { class: "branch-indicator" }, Ho = { class: "branch-indicator__info" }, Go = { class: "branch-indicator__label" }, jo = { class: "branch-indicator__name" }, Ko = {
  key: 0,
  class: "branch-indicator__remote"
}, qo = {
  key: 0,
  class: "branch-indicator__status"
}, Yo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Xo = {
  key: 1,
  class: "branch-indicator__behind"
}, Zo = {
  key: 1,
  class: "branch-indicator__actions"
}, Jo = /* @__PURE__ */ H({
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
    return (l, s) => (o(), n("div", Po, [
      t("div", Ho, [
        t("span", Go, i(e.label), 1),
        t("span", jo, i(e.branchName), 1),
        e.remote ? (o(), n("span", Ko, "@" + i(e.remote), 1)) : c("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (o(), n("div", qo, [
        e.commitsAhead ? (o(), n("span", Yo, " ↑ " + i(e.commitsAhead) + " ahead ", 1)) : c("", !0),
        e.commitsBehind ? (o(), n("span", Xo, " ↓ " + i(e.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      l.$slots.actions ? (o(), n("div", Zo, [
        ee(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Qo = /* @__PURE__ */ G(Jo, [["__scopeId", "data-v-cb8dd50e"]]), es = /* @__PURE__ */ H({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (o(), n("span", {
      class: Y(["detail-label"]),
      style: Xe({ minWidth: e.minWidth })
    }, [
      ee(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ut = /* @__PURE__ */ G(es, [["__scopeId", "data-v-75e9eeb8"]]), ts = /* @__PURE__ */ H({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (o(), n("span", {
      class: Y(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ee(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), mt = /* @__PURE__ */ G(ts, [["__scopeId", "data-v-2f186e4c"]]), os = { class: "detail-row" }, ss = /* @__PURE__ */ H({
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
    return (l, s) => (o(), n("div", os, [
      d(ut, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          m(i(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), p(mt, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          m(i(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ee(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), J = /* @__PURE__ */ G(ss, [["__scopeId", "data-v-ef15664a"]]), as = { class: "modal-header" }, ns = { class: "modal-body" }, ls = { class: "status-section" }, is = {
  key: 0,
  class: "status-section"
}, rs = {
  key: 0,
  class: "workflow-group"
}, cs = { class: "workflow-group-header" }, ds = { class: "workflow-group-title" }, us = { class: "workflow-list" }, ms = { class: "workflow-name" }, vs = { class: "workflow-issue" }, fs = {
  key: 1,
  class: "workflow-group"
}, gs = { class: "workflow-group-header" }, hs = { class: "workflow-group-title" }, ps = { class: "workflow-list" }, ys = { class: "workflow-name" }, ws = { class: "workflow-issue" }, bs = {
  key: 2,
  class: "workflow-group"
}, ks = { class: "workflow-group-header" }, _s = { class: "workflow-group-title" }, $s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = {
  key: 3,
  class: "workflow-group"
}, Ss = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, Is = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ms = {
  key: 4,
  class: "workflow-group"
}, Ls = { class: "workflow-group-header" }, Ns = { class: "workflow-group-title" }, Bs = { class: "workflow-list" }, Ts = { class: "workflow-name" }, Ds = {
  key: 5,
  class: "workflow-group"
}, Rs = { class: "workflow-group-title" }, Us = { class: "expand-icon" }, Os = {
  key: 0,
  class: "workflow-list"
}, Vs = { class: "workflow-name" }, Ws = {
  key: 1,
  class: "status-section"
}, As = {
  key: 0,
  class: "change-group"
}, Fs = { class: "change-group-header" }, Ps = { class: "change-group-title" }, Hs = { class: "change-list" }, Gs = { class: "node-name" }, js = {
  key: 0,
  class: "dev-badge"
}, Ks = {
  key: 1,
  class: "change-group"
}, qs = { class: "change-group-header" }, Ys = { class: "change-group-title" }, Xs = { class: "change-list" }, Zs = { class: "node-name" }, Js = {
  key: 0,
  class: "dev-badge"
}, Qs = {
  key: 2,
  class: "change-group"
}, ea = { class: "change-list" }, ta = { class: "change-item" }, oa = { class: "node-name" }, sa = {
  key: 3,
  class: "change-group"
}, aa = {
  key: 2,
  class: "status-section"
}, na = {
  key: 0,
  class: "drift-item"
}, la = { class: "drift-list" }, ia = {
  key: 0,
  class: "drift-list-more"
}, ra = {
  key: 1,
  class: "drift-item"
}, ca = { class: "drift-list" }, da = {
  key: 0,
  class: "drift-list-more"
}, ua = {
  key: 2,
  class: "drift-item"
}, ma = {
  key: 3,
  class: "drift-item"
}, va = {
  key: 3,
  class: "status-section"
}, fa = { class: "info-box" }, ga = { class: "drift-list" }, ha = {
  key: 0,
  class: "drift-list-more"
}, pa = {
  key: 4,
  class: "status-section"
}, ya = { class: "warning-box" }, wa = {
  key: 5,
  class: "empty-state-inline"
}, ba = { class: "modal-actions" }, ka = /* @__PURE__ */ H({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(e) {
    const l = e, s = C(!1);
    ve(() => {
      console.log("StatusDetailModal mounted, initial show value:", l.show);
    }), Ct(() => l.show, (x, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", x);
    }, { immediate: !0 });
    const r = W(() => {
      var x, _, T;
      return ((T = (_ = (x = l.status) == null ? void 0 : x.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : T.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), g = W(() => {
      var x, _, T;
      return ((T = (_ = (x = l.status) == null ? void 0 : x.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : T.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), h = W(() => {
      var x, _, T;
      return ((T = (_ = (x = l.status) == null ? void 0 : x.workflows) == null ? void 0 : _.synced) == null ? void 0 : T.filter((b) => {
        var S, U, P;
        const E = (P = (U = (S = l.status) == null ? void 0 : S.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : P.find((B) => B.name === b);
        return !E || E.status !== "broken";
      })) || [];
    }), u = W(() => {
      var x, _, T, b, E;
      return (x = l.status) != null && x.workflows ? (((_ = l.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((T = l.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((b = l.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((E = l.status.workflows.synced) == null ? void 0 : E.length) ?? 0) > 0 : !1;
    }), f = W(() => {
      var _, T, b;
      const x = (_ = l.status) == null ? void 0 : _.git_changes;
      return x ? (((T = x.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((b = x.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || x.workflow_changes || x.has_other_changes : !1;
    }), v = W(() => {
      var x, _, T, b, E, S;
      return !u.value && !f.value && ((_ = (x = l.status) == null ? void 0 : x.comparison) == null ? void 0 : _.is_synced) && (((T = l.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((S = (E = (b = l.status) == null ? void 0 : b.comparison) == null ? void 0 : E.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), y = W(() => {
      var _, T;
      const x = (T = (_ = l.status) == null ? void 0 : _.git_changes) == null ? void 0 : T.workflow_changes;
      return x ? typeof x == "number" ? x : Object.keys(x).length : 0;
    });
    function D(x) {
      return typeof x == "string" ? x : x.name;
    }
    function N(x) {
      return typeof x == "object" && x.is_development === !0;
    }
    return (x, _) => {
      var T, b, E, S, U, P, B, M, w, I, $, L, R, K, F, z, X, se, Ve, We, re, xe;
      return o(), p(Oe, { to: "body" }, [
        e.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[4] || (_[4] = (Z) => x.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: _[3] || (_[3] = ge(() => {
            }, ["stop"]))
          }, [
            t("div", as, [
              _[5] || (_[5] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (Z) => x.$emit("close"))
              }, "✕")
            ]),
            t("div", ns, [
              t("div", ls, [
                d(we, { level: "4" }, {
                  default: a(() => [..._[6] || (_[6] = [
                    m("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                d(J, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (o(), n("div", is, [
                d(we, { level: "4" }, {
                  default: a(() => [..._[7] || (_[7] = [
                    m("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                r.value.length ? (o(), n("div", rs, [
                  t("div", cs, [
                    _[8] || (_[8] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", ds, "BROKEN (COMMITTED) (" + i(r.value.length) + ")", 1)
                  ]),
                  t("div", us, [
                    (o(!0), n(A, null, q(r.value, (Z) => (o(), n("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      t("span", ms, i(Z.name), 1),
                      t("span", vs, i(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), n("div", fs, [
                  t("div", gs, [
                    _[9] || (_[9] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", hs, "BROKEN (UNCOMMITTED) (" + i(g.value.length) + ")", 1)
                  ]),
                  t("div", ps, [
                    (o(!0), n(A, null, q(g.value, (Z) => (o(), n("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      t("span", ys, i(Z.name), 1),
                      t("span", ws, i(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (b = (T = e.status.workflows) == null ? void 0 : T.new) != null && b.length ? (o(), n("div", bs, [
                  t("div", ks, [
                    _[10] || (_[10] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", _s, "NEW (" + i(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", $s, [
                    (o(!0), n(A, null, q(e.status.workflows.new, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      t("span", Cs, i(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (S = (E = e.status.workflows) == null ? void 0 : E.modified) != null && S.length ? (o(), n("div", xs, [
                  t("div", Ss, [
                    _[11] || (_[11] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Es, "MODIFIED (" + i(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Is, [
                    (o(!0), n(A, null, q(e.status.workflows.modified, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      t("span", zs, i(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (P = (U = e.status.workflows) == null ? void 0 : U.deleted) != null && P.length ? (o(), n("div", Ms, [
                  t("div", Ls, [
                    _[12] || (_[12] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Ns, "DELETED (" + i(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Bs, [
                    (o(!0), n(A, null, q(e.status.workflows.deleted, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      t("span", Ts, i(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                h.value.length ? (o(), n("div", Ds, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[1] || (_[1] = (Z) => s.value = !s.value)
                  }, [
                    _[13] || (_[13] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Rs, "SYNCED (" + i(h.value.length) + ")", 1),
                    t("span", Us, i(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Os, [
                    (o(!0), n(A, null, q(h.value, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      t("span", Vs, i(Z), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              f.value ? (o(), n("div", Ws, [
                d(we, { level: "4" }, {
                  default: a(() => [..._[14] || (_[14] = [
                    m("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (B = e.status.git_changes) == null ? void 0 : B.nodes_added) != null && M.length ? (o(), n("div", As, [
                  t("div", Fs, [
                    _[15] || (_[15] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Ps, "NODES ADDED (" + i(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Hs, [
                    (o(!0), n(A, null, q(e.status.git_changes.nodes_added, (Z) => (o(), n("div", {
                      key: D(Z),
                      class: "change-item"
                    }, [
                      t("span", Gs, i(D(Z)), 1),
                      N(Z) ? (o(), n("span", js, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (I = (w = e.status.git_changes) == null ? void 0 : w.nodes_removed) != null && I.length ? (o(), n("div", Ks, [
                  t("div", qs, [
                    _[16] || (_[16] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Ys, "NODES REMOVED (" + i(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Xs, [
                    (o(!0), n(A, null, q(e.status.git_changes.nodes_removed, (Z) => (o(), n("div", {
                      key: D(Z),
                      class: "change-item"
                    }, [
                      t("span", Zs, i(D(Z)), 1),
                      N(Z) ? (o(), n("span", Js, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = e.status.git_changes) != null && $.workflow_changes ? (o(), n("div", Qs, [
                  _[17] || (_[17] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", ea, [
                    t("div", ta, [
                      t("span", oa, i(y.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (L = e.status.git_changes) != null && L.has_other_changes ? (o(), n("div", sa, [..._[18] || (_[18] = [
                  t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  t("div", { class: "change-list" }, [
                    t("div", { class: "change-item" }, [
                      t("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : c("", !0)
              ])) : c("", !0),
              (R = e.status.comparison) != null && R.is_synced ? c("", !0) : (o(), n("div", aa, [
                d(we, { level: "4" }, {
                  default: a(() => [..._[19] || (_[19] = [
                    m("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                _[20] || (_[20] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (F = (K = e.status.comparison) == null ? void 0 : K.missing_nodes) != null && F.length ? (o(), n("div", na, [
                  d(J, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", la, [
                    (o(!0), n(A, null, q(e.status.comparison.missing_nodes.slice(0, 10), (Z) => (o(), n("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + i(Z), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), n("div", ia, " ... and " + i(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (X = (z = e.status.comparison) == null ? void 0 : z.extra_nodes) != null && X.length ? (o(), n("div", ra, [
                  d(J, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", ca, [
                    (o(!0), n(A, null, q(e.status.comparison.extra_nodes.slice(0, 10), (Z) => (o(), n("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + i(Z), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), n("div", da, " ... and " + i(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Ve = (se = e.status.comparison) == null ? void 0 : se.version_mismatches) != null && Ve.length ? (o(), n("div", ua, [
                  d(J, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (We = e.status.comparison) != null && We.packages_in_sync ? c("", !0) : (o(), n("div", ma, [
                  d(J, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (xe = (re = e.status.comparison) == null ? void 0 : re.disabled_nodes) != null && xe.length ? (o(), n("div", va, [
                d(we, { level: "4" }, {
                  default: a(() => [..._[21] || (_[21] = [
                    m("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", fa, [
                  _[22] || (_[22] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, i(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", ga, [
                  (o(!0), n(A, null, q(e.status.comparison.disabled_nodes.slice(0, 10), (Z) => (o(), n("div", {
                    key: Z,
                    class: "drift-list-item"
                  }, " • " + i(Z), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", ha, " ... and " + i(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), n("div", pa, [
                d(we, { level: "4" }, {
                  default: a(() => [..._[23] || (_[23] = [
                    m("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", ya, [
                  _[24] || (_[24] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, i(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[25] || (_[25] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              v.value ? (o(), n("div", wa, [..._[26] || (_[26] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            t("div", ba, [
              d(V, {
                variant: "secondary",
                onClick: _[2] || (_[2] = (Z) => x.$emit("close"))
              }, {
                default: a(() => [..._[27] || (_[27] = [
                  m(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), wt = /* @__PURE__ */ G(ka, [["__scopeId", "data-v-c2264f66"]]), _a = { class: "health-section-header" }, $a = { style: { "margin-top": "var(--cg-space-1)" } }, Ca = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, xa = /* @__PURE__ */ H({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(e, { emit: l }) {
    const s = e, r = C(!1), g = C(!1);
    ve(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", wt);
    });
    function h() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function u() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    const f = W(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), v = W(() => {
      const S = s.status.git_changes;
      return S.nodes_added.length > 0 || S.nodes_removed.length > 0 || S.workflow_changes || S.has_other_changes;
    }), y = W(() => f.value || v.value), D = W(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), N = W(() => s.status.git_changes.has_other_changes), x = W(() => {
      var S;
      return ((S = s.status.workflows.analyzed) == null ? void 0 : S.filter(
        (U) => U.status === "broken" && U.sync_state === "synced"
      )) || [];
    }), _ = W(() => {
      var S;
      return ((S = s.status.workflows.analyzed) == null ? void 0 : S.filter(
        (U) => U.status === "broken" && U.sync_state !== "synced"
      )) || [];
    }), T = W(() => x.value.length > 0 || _.value.length > 0), b = W(() => T.value || s.status.missing_models_count > 0 || y.value || !s.status.comparison.is_synced), E = W(() => {
      const S = [];
      return s.status.workflows.new.length > 0 && S.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && S.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && S.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && S.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && S.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${S.length > 0 ? S.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (S, U) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, { title: "STATUS" })
        ]),
        content: a(() => [
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: U[0] || (U[0] = (P) => g.value = !0),
            onMouseleave: U[1] || (U[1] = (P) => g.value = !1)
          }, [
            t("div", _a, [
              d(we, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...U[11] || (U[11] = [
                  m(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              d(Kt, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), p(V, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: h
                  }, {
                    default: a(() => [...U[12] || (U[12] = [
                      m(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            d($o, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                e.status.workflows.new.length ? (o(), p(Se, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                e.status.workflows.modified.length ? (o(), p(Se, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                e.status.workflows.deleted.length ? (o(), p(Se, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                d(Se, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: f.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                e.status.git_changes.nodes_added.length ? (o(), p(Se, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), p(Se, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                e.status.git_changes.workflow_changes ? (o(), p(Se, {
                  key: 2,
                  icon: "●",
                  count: D.value,
                  label: D.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                N.value ? (o(), p(Se, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                v.value ? c("", !0) : (o(), p(Se, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          t("div", $a, [
            d(Qo, {
              "branch-name": e.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                d(V, {
                  variant: "secondary",
                  size: "sm",
                  onClick: U[2] || (U[2] = (P) => S.$emit("switch-branch"))
                }, {
                  default: a(() => [...U[13] || (U[13] = [
                    m(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          e.status.is_detached_head ? (o(), p(Ue, {
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
                onClick: U[3] || (U[3] = (P) => S.$emit("create-branch"))
              }, {
                default: a(() => [...U[14] || (U[14] = [
                  m(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          b.value ? (o(), n("div", Ca, [
            d(we, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...U[15] || (U[15] = [
                m(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            x.value.length > 0 ? (o(), p(Ue, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${x.value.length} committed workflow${x.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: x.value.map((P) => `${P.name} — ${P.issue_summary}`)
            }, {
              actions: a(() => [
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[4] || (U[4] = (P) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[16] || (U[16] = [
                    m(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            _.value.length > 0 ? (o(), p(Ue, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${_.value.length} workflow${_.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: _.value.map((P) => `${P.name} — ${P.issue_summary}`)
            }, {
              actions: a(() => [
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[5] || (U[5] = (P) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[17] || (U[17] = [
                    m(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            e.status.missing_models_count > 0 && !T.value ? (o(), p(Ue, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[6] || (U[6] = (P) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...U[18] || (U[18] = [
                    m(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            y.value ? (o(), p(Ue, {
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
                    m(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[7] || (U[7] = (P) => S.$emit("commit-changes"))
                }, {
                  default: a(() => [...U[20] || (U[20] = [
                    m(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            e.status.comparison.is_synced ? c("", !0) : (o(), p(Ue, {
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
                  onClick: U[8] || (U[8] = (P) => S.$emit("view-debug"))
                }, {
                  default: a(() => [...U[21] || (U[21] = [
                    m(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                d(V, {
                  variant: "primary",
                  size: "sm",
                  onClick: U[9] || (U[9] = (P) => S.$emit("sync-environment"))
                }, {
                  default: a(() => [...U[22] || (U[22] = [
                    m(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !b.value && !v.value ? (o(), p($e, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      d(wt, {
        show: r.value,
        status: e.status,
        onClose: U[10] || (U[10] = (P) => r.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Sa = /* @__PURE__ */ G(xa, [["__scopeId", "data-v-aabebf39"]]), Ea = ["type", "value", "placeholder", "disabled"], Ia = /* @__PURE__ */ H({
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
    const r = e, g = s, h = C(null);
    function u(f) {
      const v = f.target.value;
      g("update:modelValue", v);
    }
    return ve(() => {
      r.autoFocus && h.value && h.value.focus();
    }), l({
      focus: () => {
        var f;
        return (f = h.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = h.value) == null ? void 0 : f.blur();
      }
    }), (f, v) => (o(), n("input", {
      ref_key: "inputRef",
      ref: h,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Y(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        v[0] || (v[0] = Ie((y) => f.$emit("enter"), ["enter"])),
        v[1] || (v[1] = Ie((y) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: v[2] || (v[2] = (y) => f.$emit("focus")),
      onBlur: v[3] || (v[3] = (y) => f.$emit("blur"))
    }, null, 42, Ea));
  }
}), Ye = /* @__PURE__ */ G(Ia, [["__scopeId", "data-v-0380d08f"]]), za = { class: "branch-create-form" }, Ma = { class: "form-actions" }, La = /* @__PURE__ */ H({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const s = l, r = C(""), g = W(() => {
      const f = r.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function h() {
      g.value && (s("create", r.value.trim()), r.value = "");
    }
    function u() {
      r.value = "", s("cancel");
    }
    return (f, v) => (o(), n("div", za, [
      d(Ye, {
        modelValue: r.value,
        "onUpdate:modelValue": v[0] || (v[0] = (y) => r.value = y),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: h,
        onEscape: u
      }, null, 8, ["modelValue"]),
      t("div", Ma, [
        d(V, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: h
        }, {
          default: a(() => [...v[1] || (v[1] = [
            m(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        d(V, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: a(() => [...v[2] || (v[2] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Na = /* @__PURE__ */ G(La, [["__scopeId", "data-v-7c500394"]]), Ba = { class: "branch-list-item__indicator" }, Ta = { class: "branch-list-item__name" }, Da = {
  key: 0,
  class: "branch-list-item__actions"
}, Ra = {
  key: 0,
  class: "branch-list-item__current-label"
}, Ua = /* @__PURE__ */ H({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (o(), n("div", {
      class: Y(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      t("span", Ba, i(e.isCurrent ? "●" : "○"), 1),
      t("span", Ta, i(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (o(), n("div", Da, [
        ee(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (o(), n("span", Ra, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Oa = /* @__PURE__ */ G(Ua, [["__scopeId", "data-v-c6581a24"]]), Va = {
  key: 2,
  class: "branch-list"
}, Wa = /* @__PURE__ */ H({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const s = l, r = C(!1);
    function g(u) {
      s("create", u), h();
    }
    function h() {
      r.value = !1;
    }
    return (u, f) => (o(), p(he, null, {
      header: a(() => [
        d(pe, { title: "BRANCHES" }, {
          actions: a(() => [
            d(V, {
              variant: "ghost",
              size: "sm",
              onClick: f[0] || (f[0] = (v) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...f[1] || (f[1] = [
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
        r.value ? (o(), p(Na, {
          key: 0,
          onCreate: g,
          onCancel: h
        })) : c("", !0),
        e.branches.length === 0 ? (o(), p($e, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Va, [
          (o(!0), n(A, null, q(e.branches, (v) => (o(), p(Oa, {
            key: v.name,
            "branch-name": v.name,
            "is-current": v.is_current
          }, {
            actions: a(() => [
              v.is_current ? c("", !0) : (o(), p(V, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (y) => u.$emit("switch", v.name)
              }, {
                default: a(() => [...f[2] || (f[2] = [
                  m(" Switch ", -1)
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
}), Aa = /* @__PURE__ */ G(Wa, [["__scopeId", "data-v-763d6ec4"]]), Fa = { class: "commit-list" }, Pa = /* @__PURE__ */ H({
  __name: "CommitList",
  setup(e) {
    return (l, s) => (o(), n("div", Fa, [
      ee(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ha = /* @__PURE__ */ G(Pa, [["__scopeId", "data-v-8c5ee761"]]), Ga = { class: "commit-hash" }, ja = /* @__PURE__ */ H({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, s = W(() => l.hash.slice(0, l.length));
    return (r, g) => (o(), n("span", Ga, i(s.value), 1));
  }
}), zt = /* @__PURE__ */ G(ja, [["__scopeId", "data-v-7c333cc6"]]), Ka = { class: "commit-message" }, qa = { class: "commit-date" }, Ya = /* @__PURE__ */ H({
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
    function g() {
      s.clickable && r("click");
    }
    return (h, u) => (o(), n("div", {
      class: Y(["commit-item", { clickable: e.clickable }]),
      onClick: g
    }, [
      d(zt, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Ka, i(e.message), 1),
      t("span", qa, i(e.relativeDate), 1),
      h.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = ge(() => {
        }, ["stop"]))
      }, [
        ee(h.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xa = /* @__PURE__ */ G(Ya, [["__scopeId", "data-v-dd7c621b"]]), Za = /* @__PURE__ */ H({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, s) => (o(), p(he, null, {
      header: a(() => [
        d(pe, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (o(), p($e, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), p(Ha, { key: 1 }, {
          default: a(() => [
            (o(!0), n(A, null, q(e.commits, (r) => (o(), p(Xa, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => l.$emit("select", r)
            }, {
              actions: a(() => [
                d(V, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => l.$emit("checkout", r),
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
}), Ja = /* @__PURE__ */ G(Za, [["__scopeId", "data-v-981c3c64"]]), bt = [
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
], Qa = {
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
}, Mt = [
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
], en = [
  ...Mt,
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
], et = [
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
], tn = [
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
], tt = [
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.core.environment",
    level: "INFO",
    func: "sync",
    line: "306",
    message: "Restored workflows from .cec/"
  },
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.managers.workflow_manager",
    level: "INFO",
    func: "restore_from_cec",
    line: "554",
    message: "Restored workflow 'default' to ComfyUI"
  },
  {
    timestamp: "2025-11-23 13:07:40,286",
    name: "comfygit_core.core.environment",
    level: "DEBUG",
    func: "sync",
    line: "399",
    message: "User content symlinks configured"
  },
  {
    timestamp: "2025-11-23 13:07:42,130",
    name: "comfygit_core.managers.workflow_manager",
    level: "DEBUG",
    func: "resolve_workflow",
    line: "884",
    message: "Resolved node: ResolvedNodePackage(package='comfyui-basic-math', node='FloatInput', match=exact, confidence=1.00, 3 version(s), rank=1)"
  },
  {
    timestamp: "2025-11-23 13:07:42,157",
    name: "comfygit.command",
    level: "INFO",
    func: "log_command",
    line: "180",
    message: "Command 'env status' completed successfully"
  }
], ae = {
  // Environment Management
  getEnvironments: async () => (await ne(300), [
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
    await ne(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, l, s) => {
    await ne(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${l}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await ne(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ne(400), bt),
  getWorkflowDetails: async (e) => (await ne(300), Qa[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await ne(800), {
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
    await ne(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${l}, models=${s}`);
  },
  setModelImportance: async (e, l, s) => {
    await ne(200), console.log(`[MOCK] Setting ${l} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ne(350), Mt),
  getWorkspaceModels: async () => (await ne(400), en),
  updateModelSource: async (e, l) => {
    await ne(300), console.log(`[MOCK] Updating source for ${e}: ${l}`);
  },
  deleteModel: async (e) => {
    await ne(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await ne(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Node Management
  getNodes: async () => {
    await ne(350);
    const e = et.filter((s) => s.installed), l = et.filter((s) => !s.installed);
    return {
      nodes: et,
      total_count: et.length,
      installed_count: e.length,
      missing_count: l.length
    };
  },
  installNode: async (e) => {
    await ne(2500), console.log(`[MOCK] Installing node: ${e}`);
  },
  updateNode: async (e) => {
    await ne(2e3), console.log(`[MOCK] Updating node: ${e}`);
  },
  uninstallNode: async (e) => {
    await ne(1e3), console.log(`[MOCK] Uninstalling node: ${e}`);
  },
  // Settings & Debug
  getConfig: async () => (await ne(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (e) => {
    await ne(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, l) => (await ne(250), (e ? tt.filter((r) => r.level === e) : tt).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await ne(300);
    const s = [...tt, ...tt.map((g) => ({
      ...g,
      name: "comfygit.workspace"
    }))];
    return (e ? s.filter((g) => g.level === e) : s).slice(0, l || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   *
   * To test detached HEAD warning:
   * - Set branch: null
   * - Set is_detached_head: true
   */
  getStatus: async () => (await ne(400), {
    environment: "production",
    branch: "main",
    // Set to null to test detached HEAD
    is_detached_head: !1,
    // Set to true to test detached HEAD warning
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: bt.filter((e) => e.status === "synced").map((e) => e.name),
      total: 18,
      analyzed: [
        {
          name: "img2img-basic.json",
          sync_state: "new",
          status: "new",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 8,
          model_count: 2
        },
        {
          name: "controlnet-pose.json",
          sync_state: "new",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 1,
          unresolved_nodes_count: 1,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "1 unresolved node",
          node_count: 12,
          model_count: 3
        },
        {
          name: "flux-schnell.json",
          sync_state: "modified",
          status: "modified",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 15,
          model_count: 4
        },
        {
          name: "sdxl-lightning.json",
          sync_state: "synced",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 2,
          unresolved_models_count: 1,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "2 unresolved nodes, 1 missing model",
          node_count: 20,
          model_count: 5
        },
        {
          name: "flux-dev-img2img.json",
          sync_state: "synced",
          status: "synced",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 18,
          model_count: 3
        }
      ]
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
  getCommitHistory: async (e = 10) => (await ne(300), tn.slice(0, e)),
  getBranches: async () => (await ne(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await ne(300), {
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
  addRemote: async (e, l) => {
    await ne(400), console.log(`[MOCK] Adding remote: ${e} -> ${l}`);
  },
  removeRemote: async (e) => {
    await ne(350), console.log(`[MOCK] Removing remote: ${e}`);
  },
  updateRemoteUrl: async (e, l, s) => {
    await ne(400), console.log(`[MOCK] Updating remote ${e}: ${l}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (e) => {
    await ne(1500), console.log(`[MOCK] Fetching from remote: ${e}`);
  },
  getRemoteSyncStatus: async (e) => (await ne(300), {
    remote: e,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  })
};
function ne(e) {
  return new Promise((l) => setTimeout(l, e));
}
function fe() {
  const e = C(!1), l = C(null);
  async function s(j, te) {
    var Ge;
    if (!((Ge = window.app) != null && Ge.api))
      throw new Error("ComfyUI API not available");
    const de = await window.app.api.fetchApi(j, te);
    if (!de.ok) {
      const Ze = await de.json().catch(() => ({}));
      throw new Error(Ze.error || Ze.message || `Request failed: ${de.status}`);
    }
    return de.json();
  }
  async function r() {
    return ae.getStatus();
  }
  async function g(j, te = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: j, allow_issues: te })
    });
  }
  async function h(j = 10, te = 0) {
    {
      const de = await ae.getCommitHistory(j);
      return {
        commits: de,
        total: de.length,
        offset: te
      };
    }
  }
  async function u(j) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j })
    });
  }
  async function f() {
    return ae.getBranches();
  }
  async function v(j) {
    return s(`/v2/comfygit/commit/${j}`);
  }
  async function y(j, te = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: j, force: te })
    });
  }
  async function D(j, te = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, start_point: te })
    });
  }
  async function N(j, te = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: j, force: te })
    });
  }
  async function x() {
    return ae.getEnvironments();
  }
  async function _(j) {
    return ae.switchEnvironment(j);
  }
  async function T() {
    return null;
  }
  async function b(j, te, de) {
    return await ae.createEnvironment(j, te, de), { status: "success" };
  }
  async function E(j) {
    return await ae.deleteEnvironment(j), { status: "success" };
  }
  async function S() {
    return ae.getWorkflows();
  }
  async function U(j) {
    return ae.getWorkflowDetails(j);
  }
  async function P(j) {
    return ae.resolveWorkflow(j);
  }
  async function B(j, te, de) {
    return await ae.installWorkflowDeps(j, te, de), { status: "success" };
  }
  async function M(j, te, de) {
    return ae.setModelImportance(j, te, de);
  }
  async function w() {
    return ae.getEnvironmentModels();
  }
  async function I() {
    return ae.getWorkspaceModels();
  }
  async function $(j, te) {
    return ae.updateModelSource(j, te);
  }
  async function L(j) {
    return ae.deleteModel(j);
  }
  async function R(j) {
    return await ae.downloadModel(j), { status: "success" };
  }
  async function K() {
    return ae.getConfig();
  }
  async function F(j) {
    return ae.updateConfig(j);
  }
  async function z(j, te) {
    return ae.getEnvironmentLogs(j, te);
  }
  async function X(j, te) {
    return ae.getWorkspaceLogs(j, te);
  }
  async function se() {
    return ae.getNodes();
  }
  async function Ve(j) {
    return await ae.installNode(j), { status: "success" };
  }
  async function We(j) {
    return await ae.updateNode(j), { status: "success" };
  }
  async function re(j) {
    return await ae.uninstallNode(j), { status: "success" };
  }
  async function xe() {
    return ae.getRemotes();
  }
  async function Z(j, te) {
    return await ae.addRemote(j, te), { status: "success", remote_name: j };
  }
  async function Ne(j) {
    return await ae.removeRemote(j), { status: "success", remote_name: j };
  }
  async function at(j, te, de) {
    return await ae.updateRemoteUrl(j, te, de), { status: "success", remote_name: j };
  }
  async function le(j) {
    return await ae.fetchRemote(j), { status: "success", remote_name: j };
  }
  async function Ce(j) {
    return ae.getRemoteSyncStatus(j);
  }
  async function nt(j = "skip", te = !0) {
    return await new Promise((de) => setTimeout(de, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: g,
    getHistory: h,
    exportEnv: u,
    // Git Operations
    getBranches: f,
    getCommitDetail: v,
    checkout: y,
    createBranch: D,
    switchBranch: N,
    // Environment Management
    getEnvironments: x,
    switchEnvironment: _,
    getSwitchProgress: T,
    createEnvironment: b,
    deleteEnvironment: E,
    // Workflow Management
    getWorkflows: S,
    getWorkflowDetails: U,
    resolveWorkflow: P,
    installWorkflowDeps: B,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: w,
    getWorkspaceModels: I,
    updateModelSource: $,
    deleteModel: L,
    downloadModel: R,
    // Settings
    getConfig: K,
    updateConfig: F,
    // Debug/Logs
    getEnvironmentLogs: z,
    getWorkspaceLogs: X,
    // Node Management
    getNodes: se,
    installNode: Ve,
    updateNode: We,
    uninstallNode: re,
    // Git Remotes
    getRemotes: xe,
    addRemote: Z,
    removeRemote: Ne,
    updateRemoteUrl: at,
    fetchRemote: le,
    getRemoteSyncStatus: Ce,
    // Environment Sync
    syncEnvironmentManually: nt
  };
}
const on = { class: "base-modal-header" }, sn = {
  key: 0,
  class: "base-modal-title"
}, an = { class: "base-modal-body" }, nn = {
  key: 0,
  class: "base-modal-loading"
}, ln = {
  key: 1,
  class: "base-modal-error"
}, rn = {
  key: 0,
  class: "base-modal-footer"
}, cn = /* @__PURE__ */ H({
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
    function g() {
      s.closeOnOverlayClick && r("close");
    }
    function h(u) {
      u.key === "Escape" && r("close");
    }
    return ve(() => {
      document.addEventListener("keydown", h), document.body.style.overflow = "hidden";
    }), qt(() => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), (u, f) => (o(), p(Oe, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        t("div", {
          class: Y(["base-modal-content", e.size]),
          onClick: f[1] || (f[1] = ge(() => {
          }, ["stop"]))
        }, [
          t("div", on, [
            ee(u.$slots, "header", {}, () => [
              e.title ? (o(), n("h3", sn, i(e.title), 1)) : c("", !0)
            ], !0),
            e.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (v) => u.$emit("close"))
            }, [...f[2] || (f[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : c("", !0)
          ]),
          t("div", an, [
            e.loading ? (o(), n("div", nn, "Loading...")) : e.error ? (o(), n("div", ln, i(e.error), 1)) : ee(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (o(), n("div", rn, [
            ee(u.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), st = /* @__PURE__ */ G(cn, [["__scopeId", "data-v-700d367b"]]), dn = ["type", "disabled"], un = {
  key: 0,
  class: "spinner"
}, mn = /* @__PURE__ */ H({
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
    return (l, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Y(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (o(), n("span", un)) : c("", !0),
      ee(l.$slots, "default", {}, void 0, !0)
    ], 10, dn));
  }
}), ue = /* @__PURE__ */ G(mn, [["__scopeId", "data-v-f3452606"]]), vn = {
  key: 0,
  class: "base-title-count"
}, fn = /* @__PURE__ */ H({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, s) => (o(), p(ft(`h${e.level}`), {
      class: Y(["base-title", e.variant])
    }, {
      default: a(() => [
        ee(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", vn, "(" + i(e.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Te = /* @__PURE__ */ G(fn, [["__scopeId", "data-v-5a01561d"]]), gn = ["value", "disabled"], hn = {
  key: 0,
  value: "",
  disabled: ""
}, pn = ["value"], yn = {
  key: 0,
  class: "base-select-error"
}, wn = /* @__PURE__ */ H({
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
    return (r, g) => (o(), n("div", {
      class: Y(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Y(["base-select", { error: !!e.error }]),
        onChange: g[0] || (g[0] = (h) => r.$emit("update:modelValue", h.target.value))
      }, [
        e.placeholder ? (o(), n("option", hn, i(e.placeholder), 1)) : c("", !0),
        (o(!0), n(A, null, q(e.options, (h) => (o(), n("option", {
          key: l(h),
          value: l(h)
        }, i(s(h)), 9, pn))), 128))
      ], 42, gn),
      e.error ? (o(), n("span", yn, i(e.error), 1)) : c("", !0)
    ], 2));
  }
}), bn = /* @__PURE__ */ G(wn, [["__scopeId", "data-v-7436d745"]]), kn = { class: "popover-header" }, _n = { class: "popover-title" }, $n = { class: "popover-content" }, Cn = {
  key: 0,
  class: "popover-actions"
}, xn = /* @__PURE__ */ H({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, s) => (o(), p(Oe, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => l.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Xe({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = ge(() => {
          }, ["stop"]))
        }, [
          t("div", kn, [
            t("h4", _n, i(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          t("div", $n, [
            ee(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (o(), n("div", Cn, [
            ee(l.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), ze = /* @__PURE__ */ G(xn, [["__scopeId", "data-v-42815ace"]]), Sn = { class: "detail-section" }, En = {
  key: 0,
  class: "empty-message"
}, In = { class: "model-header" }, zn = { class: "model-name" }, Mn = { class: "model-details" }, Ln = { class: "model-row" }, Nn = { class: "model-row" }, Bn = { class: "label" }, Tn = {
  key: 0,
  class: "model-row model-row-nodes"
}, Dn = { class: "node-list" }, Rn = ["onClick"], Un = {
  key: 1,
  class: "model-row"
}, On = { class: "value" }, Vn = {
  key: 0,
  class: "model-actions"
}, Wn = { class: "detail-section" }, An = {
  key: 0,
  class: "empty-message"
}, Fn = { class: "node-name" }, Pn = {
  key: 0,
  class: "node-version"
}, Hn = /* @__PURE__ */ H({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const s = e, r = l, { getWorkflowDetails: g, setModelImportance: h, installWorkflowDeps: u } = fe(), f = C(null), v = C(!1), y = C(null), D = C(!1), N = C({}), x = C({}), _ = C(!1), T = C(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function E(L) {
      switch (L) {
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
    function S(L) {
      switch (L) {
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
    function U(L) {
      if (!L.loaded_by || L.loaded_by.length === 0) return [];
      const R = L.hash || L.filename;
      return T.value.has(R) ? L.loaded_by : L.loaded_by.slice(0, 3);
    }
    function P(L) {
      return T.value.has(L);
    }
    function B(L) {
      T.value.has(L) ? T.value.delete(L) : T.value.add(L), T.value = new Set(T.value);
    }
    async function M() {
      v.value = !0, y.value = null;
      try {
        f.value = await g(s.workflowName);
      } catch (L) {
        y.value = L instanceof Error ? L.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function w(L, R) {
      N.value[L] = R, D.value = !0;
    }
    async function I() {
      if (!D.value) {
        r("close");
        return;
      }
      v.value = !0, y.value = null;
      try {
        for (const [L, R] of Object.entries(N.value))
          await h(s.workflowName, L, R);
        r("close");
      } catch (L) {
        y.value = L instanceof Error ? L.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    async function $(L) {
      x.value[L] = !0, y.value = null;
      try {
        await u(s.workflowName, !0, !1), await M();
      } catch (R) {
        y.value = R instanceof Error ? R.message : "Failed to install node";
      } finally {
        x.value[L] = !1;
      }
    }
    return ve(M), (L, R) => (o(), n(A, null, [
      d(st, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: y.value || void 0,
        onClose: R[5] || (R[5] = (K) => r("close"))
      }, {
        body: a(() => [
          f.value ? (o(), n(A, { key: 0 }, [
            t("section", Sn, [
              d(Te, { variant: "section" }, {
                default: a(() => [
                  m("MODELS USED (" + i(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (o(), n("div", En, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(A, null, q(f.value.models, (K) => (o(), n("div", {
                key: K.hash,
                class: "model-card"
              }, [
                t("div", In, [
                  R[7] || (R[7] = t("span", { class: "model-icon" }, "📦", -1)),
                  t("span", zn, i(K.filename), 1)
                ]),
                t("div", Mn, [
                  t("div", Ln, [
                    R[8] || (R[8] = t("span", { class: "label" }, "Status:", -1)),
                    t("span", {
                      class: Y(["value", E(K.status)])
                    }, i(S(K.status)), 3)
                  ]),
                  t("div", Nn, [
                    t("span", Bn, [
                      R[9] || (R[9] = m(" Importance: ", -1)),
                      d(It, {
                        size: 14,
                        title: "About importance levels",
                        onClick: R[0] || (R[0] = (F) => _.value = !0)
                      })
                    ]),
                    d(bn, {
                      "model-value": N.value[K.hash] || K.importance,
                      options: b,
                      "onUpdate:modelValue": (F) => w(K.hash, F)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  K.loaded_by && K.loaded_by.length > 0 ? (o(), n("div", Tn, [
                    R[10] || (R[10] = t("span", { class: "label" }, "Loaded by:", -1)),
                    t("div", Dn, [
                      (o(!0), n(A, null, q(U(K), (F, z) => (o(), n("div", {
                        key: `${F.node_id}-${z}`,
                        class: "node-reference"
                      }, i(F.node_type) + " (Node #" + i(F.node_id) + ") ", 1))), 128)),
                      K.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (F) => B(K.hash || K.filename)
                      }, i(P(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, Rn)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  K.size_mb ? (o(), n("div", Un, [
                    R[11] || (R[11] = t("span", { class: "label" }, "Size:", -1)),
                    t("span", On, i(K.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                K.status !== "available" ? (o(), n("div", Vn, [
                  K.status === "downloadable" ? (o(), p(ue, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: R[1] || (R[1] = (F) => r("resolve"))
                  }, {
                    default: a(() => [...R[12] || (R[12] = [
                      m(" Download ", -1)
                    ])]),
                    _: 1
                  })) : K.status === "path_mismatch" ? (o(), p(ue, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: R[2] || (R[2] = (F) => r("resolve"))
                  }, {
                    default: a(() => [...R[13] || (R[13] = [
                      m(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), p(ue, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: R[3] || (R[3] = (F) => r("resolve"))
                  }, {
                    default: a(() => [...R[14] || (R[14] = [
                      m(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            t("section", Wn, [
              d(Te, { variant: "section" }, {
                default: a(() => [
                  m("NODES USED (" + i(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (o(), n("div", An, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(A, null, q(f.value.nodes, (K) => (o(), n("div", {
                key: K.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Y(["node-status", K.status === "installed" ? "installed" : "missing"])
                }, i(K.status === "installed" ? "✓" : "✕"), 3),
                t("span", Fn, i(K.name), 1),
                K.version ? (o(), n("span", Pn, "v" + i(K.version), 1)) : c("", !0),
                K.status === "missing" ? (o(), p(ue, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: x.value[K.name],
                  onClick: (F) => $(K.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...R[15] || (R[15] = [
                    m(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          d(ue, {
            variant: "secondary",
            onClick: R[4] || (R[4] = (K) => r("close"))
          }, {
            default: a(() => [...R[16] || (R[16] = [
              m(" Close ", -1)
            ])]),
            _: 1
          }),
          D.value ? (o(), p(ue, {
            key: 0,
            variant: "primary",
            onClick: I
          }, {
            default: a(() => [...R[17] || (R[17] = [
              m(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      d(ze, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: R[6] || (R[6] = (K) => _.value = !1)
      }, {
        content: a(() => [...R[18] || (R[18] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              m(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              m(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              m(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Gn = /* @__PURE__ */ G(Hn, [["__scopeId", "data-v-1325d542"]]), jn = {
  key: 0,
  class: "resolve-section"
}, Kn = { class: "resolve-card success-card" }, qn = { class: "items-list" }, Yn = { class: "item-info" }, Xn = { class: "item-name" }, Zn = {
  key: 0,
  class: "item-meta"
}, Jn = { class: "match-type" }, Qn = { class: "source" }, el = {
  key: 1,
  class: "resolve-section"
}, tl = { class: "resolve-card warning-card" }, ol = { class: "items-list" }, sl = { class: "item-info" }, al = { class: "item-name" }, nl = { class: "item-meta" }, ll = { key: 0 }, il = { key: 1 }, rl = {
  key: 0,
  class: "item-warning"
}, cl = {
  key: 0,
  class: "item-action"
}, dl = ["onClick"], ul = {
  key: 2,
  class: "resolve-section"
}, ml = { class: "info-text" }, vl = { class: "actions-summary" }, fl = { class: "summary-list" }, gl = { key: 0 }, hl = { key: 1 }, pl = { key: 2 }, yl = {
  key: 0,
  class: "estimated-size"
}, wl = /* @__PURE__ */ H({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const s = e, r = l, { resolveWorkflow: g, installWorkflowDeps: h } = fe(), u = C(null), f = C(!1), v = C(!1), y = C(null), D = W(() => {
      var M;
      return u.value ? ((M = u.value.download_results) == null ? void 0 : M.every((w) => w.can_download)) ?? !1 : !1;
    });
    async function N() {
      f.value = !0, y.value = null;
      try {
        u.value = await g(s.workflowName);
      } catch (M) {
        y.value = M instanceof Error ? M.message : "Failed to analyze workflow";
      } finally {
        f.value = !1;
      }
    }
    function x(M) {
      return !M.possible_matches || M.possible_matches.length === 0 ? null : M.possible_matches.reduce(
        (w, I) => I.match_confidence > w.match_confidence ? I : w
      );
    }
    function _(M) {
      return M >= 0.9 ? "high" : M >= 0.7 ? "medium" : "low";
    }
    function T(M) {
      const w = x(M);
      return w ? w.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function b(M) {
      var w, I;
      return (I = (w = u.value) == null ? void 0 : w.download_results) == null ? void 0 : I.find(($) => $.model === M);
    }
    function E(M) {
      const w = b(M);
      return (w == null ? void 0 : w.can_download) ?? !1;
    }
    function S(M) {
      const w = b(M);
      return (w == null ? void 0 : w.source_url) || null;
    }
    function U(M) {
      window.open(M, "_blank");
    }
    async function P() {
      if (!(!u.value || v.value)) {
        v.value = !0, y.value = null;
        try {
          await h(
            s.workflowName,
            u.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (M) {
          y.value = M instanceof Error ? M.message : "Installation failed";
        } finally {
          v.value = !1;
        }
      }
    }
    async function B() {
      if (!(!u.value || v.value)) {
        v.value = !0, y.value = null;
        try {
          await h(
            s.workflowName,
            u.value.nodes_to_install,
            u.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (M) {
          y.value = M instanceof Error ? M.message : "Installation failed";
        } finally {
          v.value = !1;
        }
      }
    }
    return ve(N), (M, w) => (o(), p(st, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: f.value,
      error: y.value || void 0,
      onClose: w[1] || (w[1] = (I) => r("close"))
    }, {
      body: a(() => [
        u.value ? (o(), n(A, { key: 0 }, [
          w[5] || (w[5] = t("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          u.value.nodes_unresolved.length > 0 ? (o(), n("section", jn, [
            d(Te, { variant: "section" }, {
              default: a(() => [
                m("NODES (" + i(u.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", Kn, [
              w[2] || (w[2] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "✓"),
                t("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              t("div", qn, [
                (o(!0), n(A, null, q(u.value.nodes_unresolved, (I) => {
                  var $;
                  return o(), n("div", {
                    key: I.node_type,
                    class: "item"
                  }, [
                    t("div", Yn, [
                      t("div", Xn, i((($ = x(I)) == null ? void 0 : $.package_id) || I.node_type), 1),
                      x(I) ? (o(), n("div", Zn, [
                        t("span", {
                          class: Y(["confidence-badge", _(x(I).match_confidence)])
                        }, i(Math.round(x(I).match_confidence * 100)) + "% match ", 3),
                        t("span", Jn, i(x(I).match_type), 1),
                        t("span", Qn, "Source: " + i(T(I)), 1)
                      ])) : c("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : c("", !0),
          u.value.models_unresolved.length > 0 ? (o(), n("section", el, [
            d(Te, { variant: "section" }, {
              default: a(() => [
                m("MODELS (" + i(u.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", tl, [
              w[3] || (w[3] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "⚠"),
                t("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              t("div", ol, [
                (o(!0), n(A, null, q(u.value.models_unresolved, (I) => (o(), n("div", {
                  key: I.filename,
                  class: "item"
                }, [
                  t("div", sl, [
                    t("div", al, i(I.filename), 1),
                    t("div", nl, [
                      I.expected_category ? (o(), n("span", ll, "Type: " + i(I.expected_category), 1)) : c("", !0),
                      b(I.filename) ? (o(), n("span", il, " Size: ~" + i(b(I.filename).estimated_size_mb) + " MB ", 1)) : c("", !0)
                    ]),
                    E(I.filename) ? c("", !0) : (o(), n("div", rl, " No auto-download source configured "))
                  ]),
                  S(I.filename) ? (o(), n("div", cl, [
                    t("button", {
                      class: "link-btn",
                      onClick: ($) => U(S(I.filename))
                    }, " Open Source ↗ ", 8, dl)
                  ])) : c("", !0)
                ]))), 128))
              ])
            ])
          ])) : c("", !0),
          u.value.nodes_resolved.length > 0 || u.value.models_resolved.length > 0 ? (o(), n("section", ul, [
            d(Te, { variant: "section" }, {
              default: a(() => [
                m(" ALREADY AVAILABLE (" + i(u.value.nodes_resolved.length + u.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            t("div", ml, i(u.value.nodes_resolved.length) + " nodes and " + i(u.value.models_resolved.length) + " models are already installed ", 1)
          ])) : c("", !0),
          t("div", vl, [
            w[4] || (w[4] = t("div", { class: "summary-title" }, "This will:", -1)),
            t("ol", fl, [
              u.value.nodes_to_install.length ? (o(), n("li", gl, " Install " + i(u.value.nodes_to_install.length) + " nodes (~" + i(u.value.estimated_time_seconds) + "s) ", 1)) : c("", !0),
              u.value.nodes_to_install.length ? (o(), n("li", hl, " Restart ComfyUI to load new nodes ")) : c("", !0),
              u.value.models_to_download.length ? (o(), n("li", pl, " You'll still need to download " + i(u.value.models_to_download.length) + " model(s) manually ", 1)) : c("", !0)
            ]),
            u.value.estimated_size_mb ? (o(), n("div", yl, " Estimated download: " + i(u.value.estimated_size_mb) + " MB ", 1)) : c("", !0)
          ])
        ], 64)) : c("", !0)
      ]),
      footer: a(() => [
        d(ue, {
          variant: "secondary",
          onClick: w[0] || (w[0] = (I) => r("close"))
        }, {
          default: a(() => [...w[6] || (w[6] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u.value && u.value.nodes_to_install.length && u.value.models_to_download.length ? (o(), p(ue, {
          key: 0,
          variant: "secondary",
          disabled: v.value,
          loading: v.value,
          onClick: P
        }, {
          default: a(() => [...w[7] || (w[7] = [
            m(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0),
        u.value && (u.value.nodes_to_install.length || u.value.models_to_download.length) ? (o(), p(ue, {
          key: 1,
          variant: "primary",
          disabled: v.value || u.value.models_to_download.length > 0 && !D.value,
          loading: v.value,
          onClick: B
        }, {
          default: a(() => [...w[8] || (w[8] = [
            m(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), bl = /* @__PURE__ */ G(wl, [["__scopeId", "data-v-d68efb14"]]), kl = { class: "search-input-wrapper" }, _l = ["value", "placeholder"], $l = /* @__PURE__ */ H({
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
    const s = e, r = l, g = C(null);
    let h;
    function u(v) {
      const y = v.target.value;
      s.debounce > 0 ? (clearTimeout(h), h = window.setTimeout(() => {
        r("update:modelValue", y);
      }, s.debounce)) : r("update:modelValue", y);
    }
    function f() {
      var v;
      r("update:modelValue", ""), r("clear"), (v = g.value) == null || v.focus();
    }
    return ve(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (v, y) => (o(), n("div", kl, [
      t("input", {
        ref_key: "inputRef",
        ref: g,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: Ie(f, ["escape"])
      }, null, 40, _l),
      e.clearable && e.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Cl = /* @__PURE__ */ G($l, [["__scopeId", "data-v-266f857a"]]), xl = { class: "search-bar" }, Sl = /* @__PURE__ */ H({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, s) => (o(), n("div", xl, [
      d(Cl, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Pe = /* @__PURE__ */ G(Sl, [["__scopeId", "data-v-3d51bbfd"]]), El = { class: "section-group" }, Il = {
  key: 0,
  class: "section-content"
}, zl = /* @__PURE__ */ H({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const s = e, r = l, g = C(s.initiallyExpanded);
    function h() {
      s.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (u, f) => (o(), n("section", El, [
      d(we, {
        count: e.count,
        clickable: e.collapsible,
        expanded: g.value,
        onClick: h
      }, {
        default: a(() => [
          m(i(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || g.value ? (o(), n("div", Il, [
        ee(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ce = /* @__PURE__ */ G(zl, [["__scopeId", "data-v-c48e33ed"]]), Ml = { class: "item-header" }, Ll = {
  key: 0,
  class: "item-icon"
}, Nl = { class: "item-info" }, Bl = {
  key: 0,
  class: "item-title"
}, Tl = {
  key: 1,
  class: "item-subtitle"
}, Dl = {
  key: 0,
  class: "item-details"
}, Rl = {
  key: 1,
  class: "item-actions"
}, Ul = /* @__PURE__ */ H({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = W(() => s.status ? `status-${s.status}` : "");
    return (g, h) => (o(), n("div", {
      class: Y(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: h[0] || (h[0] = (u) => e.clickable && g.$emit("click"))
    }, [
      t("div", Ml, [
        g.$slots.icon ? (o(), n("span", Ll, [
          ee(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        t("div", Nl, [
          g.$slots.title ? (o(), n("div", Bl, [
            ee(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), n("div", Tl, [
            ee(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), n("div", Dl, [
        ee(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), n("div", Rl, [
        ee(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), me = /* @__PURE__ */ G(Ul, [["__scopeId", "data-v-cc435e0e"]]), Ol = { class: "loading-state" }, Vl = { class: "loading-message" }, Wl = /* @__PURE__ */ H({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, s) => (o(), n("div", Ol, [
      s[0] || (s[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", Vl, i(e.message), 1)
    ]));
  }
}), Me = /* @__PURE__ */ G(Wl, [["__scopeId", "data-v-ad8436c9"]]), Al = { class: "error-state" }, Fl = { class: "error-message" }, Pl = /* @__PURE__ */ H({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, s) => (o(), n("div", Al, [
      s[2] || (s[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", Fl, i(e.message), 1),
      e.retry ? (o(), p(V, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          m(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ G(Pl, [["__scopeId", "data-v-5397be48"]]), Hl = /* @__PURE__ */ H({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const s = l, { getWorkflows: r } = fe(), g = C([]), h = C(!1), u = C(null), f = C(""), v = C(!0), y = C(!1), D = C(!1), N = C(!1), x = C(null), _ = W(
      () => g.value.filter((F) => F.status === "broken")
    ), T = W(
      () => g.value.filter((F) => F.status === "new")
    ), b = W(
      () => g.value.filter((F) => F.status === "modified")
    ), E = W(
      () => g.value.filter((F) => F.status === "synced")
    ), S = W(() => {
      if (!f.value.trim()) return g.value;
      const F = f.value.toLowerCase();
      return g.value.filter((z) => z.name.toLowerCase().includes(F));
    }), U = W(
      () => _.value.filter(
        (F) => !f.value.trim() || F.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), P = W(
      () => T.value.filter(
        (F) => !f.value.trim() || F.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), B = W(
      () => b.value.filter(
        (F) => !f.value.trim() || F.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), M = W(
      () => E.value.filter(
        (F) => !f.value.trim() || F.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), w = W(
      () => y.value ? M.value : M.value.slice(0, 5)
    );
    async function I() {
      h.value = !0, u.value = null;
      try {
        g.value = await r();
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    function $(F) {
      x.value = F, D.value = !0;
    }
    function L(F) {
      x.value = F, N.value = !0;
    }
    function R() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      s("refresh");
    }
    return ve(I), (F, z) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), p(V, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: a(() => [...z[7] || (z[7] = [
                  m(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Pe, {
            modelValue: f.value,
            "onUpdate:modelValue": z[0] || (z[0] = (X) => f.value = X),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), p(Me, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), p(Le, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            U.value.length ? (o(), p(ce, {
              key: 0,
              title: "BROKEN",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(U.value, (X) => (o(), p(me, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: a(() => [...z[8] || (z[8] = [
                    m("⚠", -1)
                  ])]),
                  title: a(() => [
                    m(i(X.name), 1)
                  ]),
                  subtitle: a(() => [
                    m(" Missing: " + i(X.missing_nodes) + " nodes, " + i(X.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    d(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => L(X.name)
                    }, {
                      default: a(() => [...z[9] || (z[9] = [
                        m(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => $(X.name)
                    }, {
                      default: a(() => [...z[10] || (z[10] = [
                        m(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            P.value.length ? (o(), p(ce, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(P.value, (X) => (o(), p(me, {
                  key: X.name,
                  status: "new"
                }, {
                  icon: a(() => [...z[11] || (z[11] = [
                    m("●", -1)
                  ])]),
                  title: a(() => [
                    m(i(X.name), 1)
                  ]),
                  subtitle: a(() => [...z[12] || (z[12] = [
                    m("New", -1)
                  ])]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => $(X.name)
                    }, {
                      default: a(() => [...z[13] || (z[13] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            B.value.length ? (o(), p(ce, {
              key: 2,
              title: "MODIFIED",
              count: B.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(B.value, (X) => (o(), p(me, {
                  key: X.name,
                  status: "modified"
                }, {
                  icon: a(() => [...z[14] || (z[14] = [
                    m("⚡", -1)
                  ])]),
                  title: a(() => [
                    m(i(X.name), 1)
                  ]),
                  subtitle: a(() => [...z[15] || (z[15] = [
                    m("Modified", -1)
                  ])]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => $(X.name)
                    }, {
                      default: a(() => [...z[16] || (z[16] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (o(), p(ce, {
              key: 3,
              title: "SYNCED",
              count: M.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: z[2] || (z[2] = (X) => v.value = X)
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(w.value, (X) => (o(), p(me, {
                  key: X.name,
                  status: "synced"
                }, {
                  icon: a(() => [...z[17] || (z[17] = [
                    m("✓", -1)
                  ])]),
                  title: a(() => [
                    m(i(X.name), 1)
                  ]),
                  subtitle: a(() => [...z[18] || (z[18] = [
                    m("Synced", -1)
                  ])]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => $(X.name)
                    }, {
                      default: a(() => [...z[19] || (z[19] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !y.value && M.value.length > 5 ? (o(), p(V, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (X) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    m(" View all " + i(M.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            S.value.length ? c("", !0) : (o(), p($e, {
              key: 4,
              icon: "📭",
              message: f.value ? `No workflows match '${f.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      D.value && x.value ? (o(), p(Gn, {
        key: 0,
        "workflow-name": x.value,
        onClose: z[3] || (z[3] = (X) => D.value = !1),
        onResolve: z[4] || (z[4] = (X) => L(x.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      N.value && x.value ? (o(), p(bl, {
        key: 1,
        "workflow-name": x.value,
        onClose: z[5] || (z[5] = (X) => N.value = !1),
        onInstall: K,
        onRefresh: z[6] || (z[6] = (X) => s("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Gl = /* @__PURE__ */ G(Hl, [["__scopeId", "data-v-ee63730e"]]), jl = /* @__PURE__ */ H({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, s) => (o(), n("div", {
      class: Y(["summary-bar", e.variant])
    }, [
      ee(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), He = /* @__PURE__ */ G(jl, [["__scopeId", "data-v-ccb7816e"]]), Kl = /* @__PURE__ */ H({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const s = l, { getEnvironmentModels: r, getStatus: g } = fe(), h = C([]), u = C([]), f = C("production"), v = C(!1), y = C(null), D = C(""), N = C(!1);
    function x() {
      N.value = !1, s("navigate", "model-index");
    }
    const _ = W(
      () => h.value.reduce(($, L) => $ + (L.size || 0), 0)
    ), T = W(() => {
      if (!D.value.trim()) return h.value;
      const $ = D.value.toLowerCase();
      return h.value.filter((L) => L.filename.toLowerCase().includes($));
    }), b = W(() => {
      if (!D.value.trim()) return u.value;
      const $ = D.value.toLowerCase();
      return u.value.filter((L) => L.filename.toLowerCase().includes($));
    }), E = W(
      () => T.value.filter(($) => $.type === "checkpoints")
    ), S = W(
      () => T.value.filter(($) => $.type === "loras")
    ), U = W(
      () => T.value.filter(($) => $.type !== "checkpoints" && $.type !== "loras")
    );
    function P($) {
      if (!$) return "Unknown";
      const L = $ / (1024 * 1024);
      return L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB`;
    }
    function B($) {
      s("navigate", "model-index");
    }
    function M($) {
      s("navigate", "model-index");
    }
    function w($) {
      alert(`Download functionality not yet implemented for ${$}`);
    }
    async function I() {
      v.value = !0, y.value = null;
      try {
        const $ = await r();
        h.value = $, u.value = [];
        const L = await g();
        f.value = L.environment || "production";
      } catch ($) {
        y.value = $ instanceof Error ? $.message : "Failed to load models";
      } finally {
        v.value = !1;
      }
    }
    return ve(I), ($, L) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (R) => N.value = !0)
          })
        ]),
        search: a(() => [
          d(Pe, {
            modelValue: D.value,
            "onUpdate:modelValue": L[1] || (L[1] = (R) => D.value = R),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), p(Me, {
            key: 0,
            message: "Loading environment models..."
          })) : y.value ? (o(), p(Le, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            h.value.length ? (o(), p(He, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                m(" Total: " + i(h.value.length) + " models • " + i(P(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            E.value.length ? (o(), p(ce, {
              key: 1,
              title: "CHECKPOINTS",
              count: E.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(E.value, (R) => (o(), p(me, {
                  key: R.hash || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...L[3] || (L[3] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(i(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(i(P(R.size)), 1)
                  ]),
                  details: a(() => [
                    d(J, {
                      label: "Used by:",
                      value: (R.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(J, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(R.hash)
                    }, {
                      default: a(() => [...L[4] || (L[4] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (o(), p(ce, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(S.value, (R) => (o(), p(me, {
                  key: R.hash || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...L[5] || (L[5] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(i(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(i(P(R.size)), 1)
                  ]),
                  details: a(() => [
                    d(J, {
                      label: "Used by:",
                      value: (R.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(J, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(R.hash)
                    }, {
                      default: a(() => [...L[6] || (L[6] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            U.value.length ? (o(), p(ce, {
              key: 3,
              title: "OTHER",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(U.value, (R) => (o(), p(me, {
                  key: R.hash || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...L[7] || (L[7] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(i(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(i(P(R.size)), 1)
                  ]),
                  details: a(() => [
                    d(J, {
                      label: "Type:",
                      value: R.type
                    }, null, 8, ["value"]),
                    d(J, {
                      label: "Used by:",
                      value: (R.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(R.hash)
                    }, {
                      default: a(() => [...L[8] || (L[8] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            b.value.length ? (o(), p(ce, {
              key: 4,
              title: "MISSING",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(b.value, (R) => (o(), p(me, {
                  key: R.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...L[9] || (L[9] = [
                    m("⚠", -1)
                  ])]),
                  title: a(() => [
                    m(i(R.filename), 1)
                  ]),
                  subtitle: a(() => [...L[10] || (L[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var K;
                    return [
                      d(J, {
                        label: "Required by:",
                        value: ((K = R.workflow_names) == null ? void 0 : K.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    d(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => w(R.filename)
                    }, {
                      default: a(() => [...L[11] || (L[11] = [
                        m(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => M(R.filename)
                    }, {
                      default: a(() => [...L[12] || (L[12] = [
                        m(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !T.value.length && !b.value.length ? (o(), p($e, {
              key: 5,
              icon: "📭",
              message: D.value ? `No models match '${D.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(ze, {
        show: N.value,
        title: "About Environment Models",
        onClose: L[2] || (L[2] = (R) => N.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            L[13] || (L[13] = m(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + i(f.value) + '"', 1),
            L[14] || (L[14] = m(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          d(V, {
            variant: "primary",
            onClick: x
          }, {
            default: a(() => [...L[15] || (L[15] = [
              m(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ql = /* @__PURE__ */ G(Kl, [["__scopeId", "data-v-72675609"]]), Yl = /* @__PURE__ */ H({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = fe(), s = C([]), r = C(!1), g = C(null), h = C(""), u = C(!1), f = W(
      () => s.value.reduce((w, I) => w + (I.size_mb || I.size || 0), 0)
    ), v = W(() => {
      const w = /* @__PURE__ */ new Set();
      return s.value.forEach((I) => {
        I.used_in_environments && I.used_in_environments.length > 0 && I.used_in_environments.forEach(($) => w.add($.env_name));
      }), w.size;
    }), y = W(() => {
      if (!h.value.trim()) return s.value;
      const w = h.value.toLowerCase();
      return s.value.filter((I) => {
        const $ = I, L = I.sha256 || $.sha256_hash || "";
        return I.filename.toLowerCase().includes(w) || L.toLowerCase().includes(w);
      });
    }), D = W(
      () => y.value.filter((w) => w.type === "checkpoints")
    ), N = W(
      () => y.value.filter((w) => w.type === "loras")
    ), x = W(
      () => y.value.filter((w) => w.type !== "checkpoints" && w.type !== "loras")
    );
    function _(w) {
      return w ? w >= 1024 ? `${(w / 1024).toFixed(1)} GB` : `${w.toFixed(0)} MB` : "Unknown";
    }
    function T(w) {
      const I = w, $ = w.used_in_workflows || I.used_by || [];
      return !$ || $.length === 0 ? "Not used" : `${$.length} workflow(s)`;
    }
    function b(w) {
      navigator.clipboard.writeText(w), alert("Hash copied to clipboard");
    }
    function E(w) {
      prompt("Enter model source URL:", w.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function S(w) {
      const I = w, $ = w.used_in_workflows || I.used_by || [], L = $ && $.length > 0 ? `

⚠ WARNING: This model is used by ${$.length} workflow(s):
${$.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${w.filename}?${L}

This will free ${_(I.size_mb || w.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function U() {
      alert("Scan for models not yet implemented");
    }
    function P() {
      alert("Change directory not yet implemented");
    }
    function B() {
      alert("Download new model not yet implemented");
    }
    async function M() {
      r.value = !0, g.value = null;
      try {
        s.value = await l(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", D.value), console.log("Filtered loras:", N.value), console.log("Filtered other:", x.value);
      } catch (w) {
        g.value = w instanceof Error ? w.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ve(M), (w, I) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[0] || (I[0] = ($) => u.value = !0)
          }, {
            actions: a(() => [
              d(V, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...I[3] || (I[3] = [
                  m(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              d(V, {
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: a(() => [...I[4] || (I[4] = [
                  m(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              d(V, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: a(() => [...I[5] || (I[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  m(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Pe, {
            modelValue: h.value,
            "onUpdate:modelValue": I[1] || (I[1] = ($) => h.value = $),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), p(Me, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), p(Le, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            s.value.length ? (o(), p(He, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                m(" Total: " + i(s.value.length) + " models • " + i(_(f.value)) + " • Used in " + i(v.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            D.value.length ? (o(), p(ce, {
              key: 1,
              title: "CHECKPOINTS",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(D.value, ($) => (o(), p(me, {
                  key: $.sha256 || $.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[6] || (I[6] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(i($.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(i(_($.size_mb || $.size)), 1)
                  ]),
                  details: a(() => {
                    var L, R;
                    return [
                      $.sha256 || $.sha256_hash ? (o(), p(J, {
                        key: 0,
                        label: "SHA256:",
                        value: ($.sha256 || $.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      d(J, {
                        label: "Used in:",
                        value: T($)
                      }, null, 8, ["value"]),
                      $.source_url || (L = $.sources) != null && L[0] ? (o(), p(J, {
                        key: 1,
                        label: "Source URL:",
                        value: $.source_url || ((R = $.sources) == null ? void 0 : R[0])
                      }, null, 8, ["value"])) : (o(), p(J, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...I[7] || (I[7] = [
                          m("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => E($)
                    }, {
                      default: a(() => [...I[8] || (I[8] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $.sha256 || $.sha256_hash ? (o(), p(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => b($.sha256 || $.sha256_hash)
                    }, {
                      default: a(() => [...I[9] || (I[9] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    d(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => S($)
                    }, {
                      default: a(() => [...I[10] || (I[10] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            N.value.length ? (o(), p(ce, {
              key: 2,
              title: "LORAS",
              count: N.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(N.value, ($) => (o(), p(me, {
                  key: $.sha256 || $.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[11] || (I[11] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(i($.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(i(_($.size_mb || $.size)), 1)
                  ]),
                  details: a(() => {
                    var L, R;
                    return [
                      $.sha256 || $.sha256_hash ? (o(), p(J, {
                        key: 0,
                        label: "SHA256:",
                        value: ($.sha256 || $.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      d(J, {
                        label: "Used in:",
                        value: T($)
                      }, null, 8, ["value"]),
                      $.source_url || (L = $.sources) != null && L[0] ? (o(), p(J, {
                        key: 1,
                        label: "Source URL:",
                        value: $.source_url || ((R = $.sources) == null ? void 0 : R[0])
                      }, null, 8, ["value"])) : (o(), p(J, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...I[12] || (I[12] = [
                          m("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => E($)
                    }, {
                      default: a(() => [...I[13] || (I[13] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $.sha256 || $.sha256_hash ? (o(), p(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => b($.sha256 || $.sha256_hash)
                    }, {
                      default: a(() => [...I[14] || (I[14] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    d(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => S($)
                    }, {
                      default: a(() => [...I[15] || (I[15] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (o(), p(ce, {
              key: 3,
              title: "OTHER",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(x.value, ($) => (o(), p(me, {
                  key: $.sha256 || $.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[16] || (I[16] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(i($.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(i(_($.size_mb || $.size)), 1)
                  ]),
                  details: a(() => [
                    d(J, {
                      label: "Type:",
                      value: $.type
                    }, null, 8, ["value"]),
                    $.sha256 || $.sha256_hash ? (o(), p(J, {
                      key: 0,
                      label: "SHA256:",
                      value: ($.sha256 || $.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    d(J, {
                      label: "Used in:",
                      value: T($)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => E($)
                    }, {
                      default: a(() => [...I[17] || (I[17] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $.sha256 || $.sha256_hash ? (o(), p(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => b($.sha256 || $.sha256_hash)
                    }, {
                      default: a(() => [...I[18] || (I[18] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    d(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => S($)
                    }, {
                      default: a(() => [...I[19] || (I[19] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            y.value.length ? c("", !0) : (o(), p($e, {
              key: 4,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d(ze, {
        show: u.value,
        title: "About Workspace Model Index",
        onClose: I[2] || (I[2] = ($) => u.value = !1)
      }, {
        content: a(() => [...I[20] || (I[20] = [
          t("p", null, [
            m(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            m(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Xl = /* @__PURE__ */ G(Yl, [["__scopeId", "data-v-5a24af01"]]), Zl = { key: 0 }, Jl = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Ql = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, ei = /* @__PURE__ */ H({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: l, installNode: s, updateNode: r, uninstallNode: g } = fe(), h = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), u = C(!1), f = C(null), v = C(""), y = C(!1), D = W(() => {
      if (!v.value.trim()) return h.value.nodes;
      const B = v.value.toLowerCase();
      return h.value.nodes.filter(
        (M) => {
          var w, I;
          return M.name.toLowerCase().includes(B) || ((w = M.description) == null ? void 0 : w.toLowerCase().includes(B)) || ((I = M.repository) == null ? void 0 : I.toLowerCase().includes(B));
        }
      );
    }), N = W(
      () => D.value.filter((B) => B.installed)
    ), x = W(
      () => D.value.filter((B) => !B.installed)
    );
    function _(B) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[B] || B;
    }
    function T(B) {
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
          const M = await s(B);
          M.status === "success" ? (alert(`Node "${B}" installed successfully!`), await P()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function S(B) {
      if (confirm(`Check for updates for "${B}"?`))
        try {
          u.value = !0;
          const M = await r(B);
          M.status === "success" ? (alert(`Node "${B}" is up to date or has been updated!`), await P()) : alert(`Update check failed: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error checking for updates: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function U(B) {
      if (confirm(`Uninstall node "${B}"?

This will remove the node from this environment.`))
        try {
          u.value = !0;
          const M = await g(B);
          M.status === "success" ? (alert(`Node "${B}" uninstalled successfully!`), await P()) : alert(`Failed to uninstall node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error uninstalling node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function P() {
      u.value = !0, f.value = null;
      try {
        h.value = await l();
      } catch (B) {
        f.value = B instanceof Error ? B.message : "Failed to load nodes";
      } finally {
        u.value = !1;
      }
    }
    return ve(P), (B, M) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (w) => y.value = !0)
          })
        ]),
        search: a(() => [
          d(Pe, {
            modelValue: v.value,
            "onUpdate:modelValue": M[1] || (M[1] = (w) => v.value = w),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), p(Me, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : f.value ? (o(), p(Le, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            h.value.total_count ? (o(), p(He, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                m(" Total: " + i(h.value.total_count) + " nodes • " + i(h.value.installed_count) + " installed • " + i(h.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            N.value.length ? (o(), p(ce, {
              key: 1,
              title: "INSTALLED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(N.value, (w) => (o(), p(me, {
                  key: w.name,
                  status: "synced"
                }, {
                  icon: a(() => [...M[4] || (M[4] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(i(w.name), 1)
                  ]),
                  subtitle: a(() => [
                    w.version ? (o(), n("span", Zl, "v" + i(w.version), 1)) : (o(), n("span", Jl, "version unknown")),
                    w.source ? (o(), n("span", Ql, " • " + i(_(w.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    w.description ? (o(), p(J, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : c("", !0),
                    w.repository ? (o(), p(J, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : c("", !0),
                    d(J, {
                      label: "Used by:",
                      value: T(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.repository ? (o(), p(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => b(w.repository)
                    }, {
                      default: a(() => [...M[5] || (M[5] = [
                        m(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    w.source === "registry" ? (o(), p(V, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => S(w.name)
                    }, {
                      default: a(() => [...M[6] || (M[6] = [
                        m(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    w.source !== "unknown" ? (o(), p(V, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (I) => U(w.name)
                    }, {
                      default: a(() => [...M[7] || (M[7] = [
                        m(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (o(), p(ce, {
              key: 2,
              title: "MISSING",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(x.value, (w) => (o(), p(me, {
                  key: w.name,
                  status: "missing"
                }, {
                  icon: a(() => [...M[8] || (M[8] = [
                    m("⚠", -1)
                  ])]),
                  title: a(() => [
                    m(i(w.name), 1)
                  ]),
                  subtitle: a(() => [...M[9] || (M[9] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    w.description ? (o(), p(J, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : c("", !0),
                    w.repository ? (o(), p(J, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : c("", !0),
                    d(J, {
                      label: "Required by:",
                      value: T(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.download_url ? (o(), p(V, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (I) => E(w.name)
                    }, {
                      default: a(() => [...M[10] || (M[10] = [
                        m(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    w.repository ? (o(), p(V, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (I) => b(w.repository)
                    }, {
                      default: a(() => [...M[11] || (M[11] = [
                        m(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !N.value.length && !x.value.length ? (o(), p($e, {
              key: 3,
              icon: "📭",
              message: v.value ? `No nodes match '${v.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(ze, {
        show: y.value,
        title: "About Git-Tracked Nodes",
        onClose: M[3] || (M[3] = (w) => y.value = !1)
      }, {
        content: a(() => [...M[12] || (M[12] = [
          t("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            m(" Nodes currently available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            m(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          d(V, {
            variant: "primary",
            onClick: M[2] || (M[2] = (w) => y.value = !1)
          }, {
            default: a(() => [...M[13] || (M[13] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ti = /* @__PURE__ */ G(ei, [["__scopeId", "data-v-c480e2c1"]]), oi = { class: "remote-url-display" }, si = ["title"], ai = ["title"], ni = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, li = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ii = /* @__PURE__ */ H({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const l = e, s = C(!1), r = W(() => {
      if (l.url.length <= l.maxLength)
        return l.url;
      const h = l.url.slice(0, Math.floor(l.maxLength * 0.6)), u = l.url.slice(-Math.floor(l.maxLength * 0.3));
      return `${h}...${u}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(l.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy URL:", h);
      }
    }
    return (h, u) => (o(), n("div", oi, [
      t("span", {
        class: "url-text",
        title: e.url
      }, i(r.value), 9, si),
      t("button", {
        class: Y(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", li, [...u[1] || (u[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", ni, [...u[0] || (u[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, ai)
    ]));
  }
}), kt = /* @__PURE__ */ G(ii, [["__scopeId", "data-v-7768a58d"]]), ri = { class: "remote-title" }, ci = {
  key: 0,
  class: "default-badge"
}, di = {
  key: 1,
  class: "sync-badge"
}, ui = {
  key: 0,
  class: "ahead"
}, mi = {
  key: 1,
  class: "behind"
}, vi = {
  key: 0,
  class: "tracking-info"
}, fi = /* @__PURE__ */ H({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: l }) {
    const s = e, r = W(() => s.fetchingRemote === s.remote.name), g = W(() => s.remote.is_default), h = W(() => !!s.trackingBranch);
    function u(f) {
      const v = new Date(f), D = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), N = Math.floor(D / 6e4);
      if (N < 1) return "Just now";
      if (N < 60) return `${N}m ago`;
      const x = Math.floor(N / 60);
      if (x < 24) return `${x}h ago`;
      const _ = Math.floor(x / 24);
      return _ < 7 ? `${_}d ago` : v.toLocaleDateString();
    }
    return (f, v) => (o(), p(me, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        m(i(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        t("div", ri, [
          t("span", null, i(e.remote.name), 1),
          g.value ? (o(), n("span", ci, "DEFAULT")) : c("", !0),
          e.syncStatus ? (o(), n("span", di, [
            e.syncStatus.ahead > 0 ? (o(), n("span", ui, "↑" + i(e.syncStatus.ahead), 1)) : c("", !0),
            e.syncStatus.behind > 0 ? (o(), n("span", mi, "↓" + i(e.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        h.value ? (o(), n("span", vi, " Tracking: " + i(e.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var y;
        return [
          d(J, { label: "Fetch:" }, {
            default: a(() => [
              d(kt, {
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
              d(kt, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (y = e.syncStatus) != null && y.last_fetch ? (o(), p(J, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              t("span", null, i(u(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        d(V, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: v[0] || (v[0] = (y) => f.$emit("fetch", e.remote.name))
        }, {
          default: a(() => [...v[3] || (v[3] = [
            m(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        d(V, {
          variant: "secondary",
          size: "xs",
          onClick: v[1] || (v[1] = (y) => f.$emit("edit", e.remote.name))
        }, {
          default: a(() => [...v[4] || (v[4] = [
            m(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), p(V, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[2] || (v[2] = (y) => f.$emit("remove", e.remote.name))
        }, {
          default: a(() => [...v[5] || (v[5] = [
            m(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), gi = /* @__PURE__ */ G(fi, [["__scopeId", "data-v-17362e45"]]), hi = ["for"], pi = {
  key: 0,
  class: "base-form-field-required"
}, yi = { class: "base-form-field-input" }, wi = {
  key: 1,
  class: "base-form-field-error"
}, bi = {
  key: 2,
  class: "base-form-field-hint"
}, ki = /* @__PURE__ */ H({
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
    const l = e, s = W(() => l.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, g) => (o(), n("div", {
      class: Y(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        m(i(e.label) + " ", 1),
        e.required ? (o(), n("span", pi, "*")) : c("", !0)
      ], 8, hi)) : c("", !0),
      t("div", yi, [
        ee(r.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (o(), n("span", wi, i(e.error), 1)) : e.hint ? (o(), n("span", bi, i(e.hint), 1)) : c("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ G(ki, [["__scopeId", "data-v-9a1cf296"]]), _i = ["type", "value", "placeholder", "disabled"], $i = {
  key: 0,
  class: "base-input-error"
}, Ci = /* @__PURE__ */ H({
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
    return (l, s) => (o(), n("div", {
      class: Y(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Y(["base-input", { error: !!e.error }]),
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ie((r) => l.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ie((r) => l.$emit("escape"), ["escape"]))
        ]
      }, null, 42, _i),
      e.error ? (o(), n("span", $i, i(e.error), 1)) : c("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ G(Ci, [["__scopeId", "data-v-9ba02cdc"]]), xi = { class: "remote-form" }, Si = { class: "form-header" }, Ei = { class: "form-body" }, Ii = {
  key: 0,
  class: "form-error"
}, zi = { class: "form-actions" }, Mi = /* @__PURE__ */ H({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: l }) {
    const s = e, r = l, g = C({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), h = C(!1), u = C(null);
    Ct(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const f = W(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function v() {
      if (!(!f.value || h.value)) {
        u.value = null, h.value = !0;
        try {
          r("submit", g.value);
        } catch (y) {
          u.value = y instanceof Error ? y.message : "Failed to submit form";
        } finally {
          h.value = !1;
        }
      }
    }
    return (y, D) => (o(), n("div", xi, [
      t("div", Si, [
        d(we, null, {
          default: a(() => [
            m(i(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Ei, [
        d(rt, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            d(ct, {
              modelValue: g.value.name,
              "onUpdate:modelValue": D[0] || (D[0] = (N) => g.value.name = N),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        d(rt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            d(ct, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": D[1] || (D[1] = (N) => g.value.fetchUrl = N),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        d(rt, { label: "Push URL (optional)" }, {
          default: a(() => [
            d(ct, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": D[2] || (D[2] = (N) => g.value.pushUrl = N),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (o(), n("div", Ii, i(u.value), 1)) : c("", !0)
      ]),
      t("div", zi, [
        d(V, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: h.value,
          onClick: v
        }, {
          default: a(() => [
            m(i(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        d(V, {
          variant: "ghost",
          size: "md",
          onClick: D[3] || (D[3] = (N) => y.$emit("cancel"))
        }, {
          default: a(() => [...D[4] || (D[4] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Li = /* @__PURE__ */ G(Mi, [["__scopeId", "data-v-56021b18"]]), Ni = { key: 0 }, Bi = /* @__PURE__ */ H({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: l,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: h,
      getRemoteSyncStatus: u
    } = fe(), f = C([]), v = C(null), y = C({}), D = C(!1), N = C(null), x = C(""), _ = C(!1), T = C(null), b = C(!1), E = C("add"), S = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = W(() => {
      if (!x.value.trim()) return f.value;
      const F = x.value.toLowerCase();
      return f.value.filter(
        (z) => z.name.toLowerCase().includes(F) || z.fetch_url.toLowerCase().includes(F) || z.push_url.toLowerCase().includes(F)
      );
    });
    function P(F) {
      var z;
      return ((z = v.value) == null ? void 0 : z.remote) === F;
    }
    async function B() {
      D.value = !0, N.value = null;
      try {
        const F = await l();
        f.value = F.remotes, v.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (z) => {
            const X = await u(z.name);
            X && (y.value[z.name] = X);
          })
        );
      } catch (F) {
        N.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        D.value = !1;
      }
    }
    function M() {
      E.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, b.value = !0;
    }
    function w(F) {
      const z = f.value.find((X) => X.name === F);
      z && (E.value = "edit", S.value = {
        name: z.name,
        fetchUrl: z.fetch_url,
        pushUrl: z.push_url
      }, b.value = !0);
    }
    async function I(F) {
      try {
        E.value === "add" ? await s(F.name, F.fetchUrl) : await g(F.name, F.fetchUrl, F.pushUrl || void 0), b.value = !1, await B();
      } catch (z) {
        N.value = z instanceof Error ? z.message : "Operation failed";
      }
    }
    function $() {
      b.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function L(F) {
      T.value = F;
      try {
        await h(F);
        const z = await u(F);
        z && (y.value[F] = z);
      } catch (z) {
        N.value = z instanceof Error ? z.message : "Fetch failed";
      } finally {
        T.value = null;
      }
    }
    async function R(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await r(F), await B();
        } catch (z) {
          N.value = z instanceof Error ? z.message : "Failed to remove remote";
        }
    }
    function K() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ve(B), (F, z) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (X) => _.value = !0)
          }, {
            actions: a(() => [
              b.value ? c("", !0) : (o(), p(V, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...z[3] || (z[3] = [
                  m(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          b.value ? c("", !0) : (o(), p(Pe, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": z[1] || (z[1] = (X) => x.value = X),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          D.value ? (o(), p(Me, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (o(), p(Le, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            b.value ? (o(), p(Li, {
              key: 0,
              mode: E.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: I,
              onCancel: $
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            f.value.length && !b.value ? (o(), p(He, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                m(" Total: " + i(f.value.length) + " remote" + i(f.value.length !== 1 ? "s" : "") + " ", 1),
                v.value ? (o(), n("span", Ni, " • Tracking: " + i(v.value.remote) + "/" + i(v.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            U.value.length && !b.value ? (o(), p(ce, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(A, null, q(U.value, (X) => {
                  var se;
                  return o(), p(gi, {
                    key: X.name,
                    remote: X,
                    "sync-status": y.value[X.name],
                    "tracking-branch": P(X.name) ? (se = v.value) == null ? void 0 : se.branch : void 0,
                    "fetching-remote": T.value,
                    onFetch: L,
                    onEdit: w,
                    onRemove: R
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !U.value.length && !b.value ? (o(), p($e, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                d(V, {
                  variant: "primary",
                  onClick: M
                }, {
                  default: a(() => [...z[4] || (z[4] = [
                    m(" Add Your First Remote ", -1)
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
      d(ze, {
        show: _.value,
        title: "About Git Remotes",
        onClose: z[2] || (z[2] = (X) => _.value = !1)
      }, {
        content: a(() => [...z[5] || (z[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            m(" The "),
            t("strong", null, '"origin"'),
            m(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          d(V, {
            variant: "link",
            onClick: K
          }, {
            default: a(() => [...z[6] || (z[6] = [
              m(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ti = /* @__PURE__ */ G(Bi, [["__scopeId", "data-v-a75719bb"]]), Di = { class: "setting-info" }, Ri = { class: "setting-label" }, Ui = {
  key: 0,
  class: "required-marker"
}, Oi = {
  key: 0,
  class: "setting-description"
}, Vi = { class: "setting-control" }, Wi = /* @__PURE__ */ H({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (o(), n("div", {
      class: Y(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", Di, [
        t("div", Ri, [
          m(i(e.label) + " ", 1),
          e.required ? (o(), n("span", Ui, "*")) : c("", !0)
        ]),
        e.description ? (o(), n("div", Oi, i(e.description), 1)) : c("", !0)
      ]),
      t("div", Vi, [
        ee(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Be = /* @__PURE__ */ G(Wi, [["__scopeId", "data-v-cb5d236c"]]), Ai = { class: "toggle" }, Fi = ["checked", "disabled"], Pi = /* @__PURE__ */ H({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (l, s) => (o(), n("label", Ai, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Fi),
      s[1] || (s[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ae = /* @__PURE__ */ G(Pi, [["__scopeId", "data-v-71c0f550"]]), Hi = { class: "settings-section" }, Gi = { class: "path-setting" }, ji = { class: "path-value" }, Ki = { class: "path-setting" }, qi = { class: "path-value" }, Yi = { class: "settings-section" }, Xi = { class: "settings-section" }, Zi = /* @__PURE__ */ H({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const { getConfig: l, updateConfig: s } = fe(), r = C(!1), g = C(null), h = C(null), u = C(null), f = C(null), v = C(""), y = C(""), D = C(!0), N = C(!0), x = W(() => f.value ? v.value !== (f.value.civitai_api_key || "") : !1);
    async function _() {
      r.value = !0, g.value = null;
      try {
        u.value = await l(), f.value = { ...u.value }, v.value = u.value.civitai_api_key || "", y.value = u.value.huggingface_token || "", D.value = u.value.auto_sync_models, N.value = u.value.confirm_destructive;
      } catch (E) {
        g.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function T() {
      var E;
      h.value = null;
      try {
        const S = {};
        v.value !== (((E = f.value) == null ? void 0 : E.civitai_api_key) || "") && (S.civitai_api_key = v.value || null), await s(S), await _(), h.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
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
      f.value && (v.value = f.value.civitai_api_key || "", y.value = f.value.huggingface_token || "", D.value = f.value.auto_sync_models, N.value = f.value.confirm_destructive, h.value = null);
    }
    return ve(_), (E, S) => (o(), p(he, null, {
      header: a(() => [
        d(pe, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            d(V, {
              variant: "primary",
              size: "sm",
              disabled: !x.value,
              onClick: T
            }, {
              default: a(() => [...S[4] || (S[4] = [
                m(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            x.value ? (o(), p(V, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: a(() => [...S[5] || (S[5] = [
                m(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (o(), p(Me, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), p(Le, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: _
        }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
          d(ce, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var U, P;
              return [
                t("div", Hi, [
                  t("div", Gi, [
                    S[6] || (S[6] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                    S[7] || (S[7] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    t("div", ji, i(((U = u.value) == null ? void 0 : U.workspace_path) || "Loading..."), 1)
                  ]),
                  t("div", Ki, [
                    S[8] || (S[8] = t("div", { class: "path-label" }, "Models Directory", -1)),
                    S[9] || (S[9] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    t("div", qi, i(((P = u.value) == null ? void 0 : P.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          d(ce, { title: "API CREDENTIALS" }, {
            default: a(() => [
              t("div", Yi, [
                d(Be, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    d(Ye, {
                      modelValue: v.value,
                      "onUpdate:modelValue": S[0] || (S[0] = (U) => v.value = U),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Be, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Ye, {
                      modelValue: y.value,
                      "onUpdate:modelValue": S[1] || (S[1] = (U) => y.value = U),
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
          d(ce, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              t("div", Xi, [
                d(Be, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Ae, {
                      modelValue: D.value,
                      "onUpdate:modelValue": S[2] || (S[2] = (U) => D.value = U),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Be, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Ae, {
                      modelValue: N.value,
                      "onUpdate:modelValue": S[3] || (S[3] = (U) => N.value = U),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), p(He, {
            key: 0,
            variant: (h.value.type === "success", "compact")
          }, {
            default: a(() => [
              t("span", {
                style: Xe({ color: h.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, i(h.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Ji = /* @__PURE__ */ G(Zi, [["__scopeId", "data-v-8b092643"]]), Qi = /* @__PURE__ */ H({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: l } = fe(), s = C([]), r = C(!1), g = C(null), h = C(!1), u = C(null), f = W(() => s.value.length === 0 ? [] : s.value.map((y) => ({
      text: `${y.timestamp} - ${y.name} - ${y.level} - ${y.func}:${y.line} - ${y.message}`,
      level: y.level
    })));
    async function v() {
      r.value = !0, g.value = null;
      try {
        s.value = await l(void 0, 500);
      } catch (y) {
        g.value = y instanceof Error ? y.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var y;
          (y = u.value) != null && y.parentElement && (u.value.parentElement.scrollTop = u.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ve(v), (y, D) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (N) => h.value = !0)
          }, {
            actions: a(() => [
              d(V, {
                variant: "secondary",
                size: "sm",
                onClick: v,
                disabled: r.value
              }, {
                default: a(() => [
                  m(i(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          r.value ? (o(), p(Me, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), p(Le, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: v
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            s.value.length === 0 ? (o(), p($e, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: u,
              class: "log-output"
            }, [
              (o(!0), n(A, null, q(f.value, (N, x) => (o(), n("div", {
                key: x,
                class: Y(`log-line log-level-${N.level.toLowerCase()}`)
              }, i(N.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(ze, {
        show: h.value,
        title: "About Workspace Logs",
        onClose: D[2] || (D[2] = (N) => h.value = !1)
      }, {
        content: a(() => [...D[3] || (D[3] = [
          t("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            m(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            m(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            m(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            m(" Detailed debugging information ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          d(V, {
            variant: "primary",
            onClick: D[1] || (D[1] = (N) => h.value = !1)
          }, {
            default: a(() => [...D[4] || (D[4] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), er = /* @__PURE__ */ G(Qi, [["__scopeId", "data-v-39f6a756"]]), tr = /* @__PURE__ */ H({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: l, getStatus: s } = fe(), r = C([]), g = C(!1), h = C(null), u = C(!1), f = C("production"), v = C(null), y = W(() => r.value.length === 0 ? [] : r.value.map((N) => ({
      text: `${N.timestamp} - ${N.name} - ${N.level} - ${N.func}:${N.line} - ${N.message}`,
      level: N.level
    })));
    async function D() {
      g.value = !0, h.value = null;
      try {
        r.value = await l(void 0, 500);
        try {
          const N = await s();
          f.value = N.environment || "production";
        } catch {
        }
      } catch (N) {
        h.value = N instanceof Error ? N.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var N;
          (N = v.value) != null && N.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ve(D), (N, x) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (_) => u.value = !0)
          }, {
            actions: a(() => [
              d(V, {
                variant: "secondary",
                size: "sm",
                onClick: D,
                disabled: g.value
              }, {
                default: a(() => [
                  m(i(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), p(Me, {
            key: 0,
            message: "Loading environment logs..."
          })) : h.value ? (o(), p(Le, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
            r.value.length === 0 ? (o(), p($e, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), n(A, null, q(y.value, (_, T) => (o(), n("div", {
                key: T,
                class: Y(`log-line log-level-${_.level.toLowerCase()}`)
              }, i(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(ze, {
        show: u.value,
        title: "About Environment Logs",
        onClose: x[2] || (x[2] = (_) => u.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            x[3] || (x[3] = m(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, i(f.value), 1),
            x[4] || (x[4] = m(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          x[5] || (x[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            m(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            m(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            m(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            m(" Detailed debugging information ")
          ], -1)),
          x[6] || (x[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          d(V, {
            variant: "primary",
            onClick: x[1] || (x[1] = (_) => u.value = !1)
          }, {
            default: a(() => [...x[7] || (x[7] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), or = /* @__PURE__ */ G(tr, [["__scopeId", "data-v-4f1e6f72"]]), sr = { class: "env-title" }, ar = {
  key: 0,
  class: "current-badge"
}, nr = {
  key: 0,
  class: "branch-info"
}, lr = /* @__PURE__ */ H({
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
    return (l, s) => (o(), p(me, {
      status: e.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        m(i(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        t("div", sr, [
          t("span", null, i(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), n("span", ar, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        e.currentBranch ? (o(), n("span", nr, [
          s[0] || (s[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          m(" " + i(e.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        d(J, {
          label: "Workflows:",
          value: String(e.workflowCount)
        }, null, 8, ["value"]),
        d(J, {
          label: "Nodes:",
          value: String(e.nodeCount)
        }, null, 8, ["value"]),
        d(J, {
          label: "Models:",
          value: String(e.modelCount)
        }, null, 8, ["value"]),
        e.lastUsed && e.showLastUsed ? (o(), p(J, {
          key: 0,
          label: "Last used:",
          value: e.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        ee(l.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), ir = /* @__PURE__ */ G(lr, [["__scopeId", "data-v-5238e57c"]]), rr = {
  key: 0,
  class: "create-form"
}, cr = { class: "create-form__header" }, dr = { class: "create-form__body" }, ur = { class: "create-form__actions" }, mr = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, vr = /* @__PURE__ */ H({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(e, { emit: l }) {
    const s = l, { getEnvironments: r } = fe(), g = C([]), h = C(!1), u = C(null), f = C(""), v = C(!1), y = C(!1), D = C(""), N = W(
      () => g.value.find((P) => P.is_current)
    ), x = W(() => {
      if (!f.value.trim()) return g.value;
      const P = f.value.toLowerCase();
      return g.value.filter(
        (B) => {
          var M;
          return B.name.toLowerCase().includes(P) || ((M = B.current_branch) == null ? void 0 : M.toLowerCase().includes(P));
        }
      );
    });
    function _(P) {
      if (!P) return "";
      try {
        const B = new Date(P), w = (/* @__PURE__ */ new Date()).getTime() - B.getTime(), I = Math.floor(w / 6e4), $ = Math.floor(w / 36e5), L = Math.floor(w / 864e5);
        return I < 1 ? "just now" : I < 60 ? `${I} ${I === 1 ? "minute" : "minutes"} ago` : $ < 24 ? `${$} ${$ === 1 ? "hour" : "hours"} ago` : L < 30 ? `${L} ${L === 1 ? "day" : "days"} ago` : B.toLocaleDateString();
      } catch {
        return P;
      }
    }
    function T() {
      const P = D.value.trim();
      P && (s("create", P), D.value = "", y.value = !1);
    }
    function b() {
      D.value = "", y.value = !1;
    }
    function E(P) {
      s("viewDetails", P);
    }
    function S(P) {
      confirm(`Delete environment "${P}"?

This action cannot be undone.`) && s("delete", P);
    }
    async function U() {
      h.value = !0, u.value = null;
      try {
        g.value = await r();
      } catch (P) {
        u.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return ve(U), (P, B) => {
      const M = Yt("SectionGroup");
      return o(), n(A, null, [
        d(he, null, {
          header: a(() => [
            d(pe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: B[1] || (B[1] = (w) => v.value = !0)
            }, {
              actions: a(() => [
                d(V, {
                  variant: "ghost",
                  size: "sm",
                  onClick: B[0] || (B[0] = (w) => y.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...B[7] || (B[7] = [
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
                d(V, {
                  variant: "ghost",
                  size: "sm",
                  onClick: U,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...B[8] || (B[8] = [
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
            d(Pe, {
              modelValue: f.value,
              "onUpdate:modelValue": B[2] || (B[2] = (w) => f.value = w),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            h.value ? (o(), p(Me, {
              key: 0,
              message: "Loading environments..."
            })) : u.value ? (o(), p(Le, {
              key: 1,
              message: u.value,
              retry: !0,
              onRetry: U
            }, null, 8, ["message"])) : (o(), n(A, { key: 2 }, [
              y.value ? (o(), n("div", rr, [
                t("div", cr, [
                  B[10] || (B[10] = t("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  d(V, {
                    variant: "ghost",
                    size: "xs",
                    onClick: b
                  }, {
                    default: a(() => [...B[9] || (B[9] = [
                      m(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                t("div", dr, [
                  d(Ye, {
                    modelValue: D.value,
                    "onUpdate:modelValue": B[3] || (B[3] = (w) => D.value = w),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ie(T, ["enter"]),
                      Ie(b, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  t("div", ur, [
                    d(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: T,
                      disabled: !D.value.trim()
                    }, {
                      default: a(() => [...B[11] || (B[11] = [
                        m(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    d(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: b
                    }, {
                      default: a(() => [...B[12] || (B[12] = [
                        m(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), p(He, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  m(" Total: " + i(g.value.length) + " " + i(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  N.value ? (o(), n(A, { key: 0 }, [
                    B[13] || (B[13] = m(" • Current: ", -1)),
                    t("strong", null, i(N.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              x.value.length ? (o(), p(M, {
                key: 2,
                title: "ENVIRONMENTS",
                count: x.value.length
              }, {
                default: a(() => [
                  (o(!0), n(A, null, q(x.value, (w) => (o(), p(ir, {
                    key: w.name,
                    "environment-name": w.name,
                    "is-current": w.is_current,
                    "current-branch": w.current_branch,
                    "workflow-count": w.workflow_count,
                    "node-count": w.node_count,
                    "model-count": w.model_count,
                    "last-used": _(w.last_used),
                    "show-last-used": !!w.last_used
                  }, {
                    actions: a(() => [
                      w.is_current ? c("", !0) : (o(), p(V, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (I) => P.$emit("switch", w.name)
                      }, {
                        default: a(() => [...B[14] || (B[14] = [
                          m(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      d(V, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (I) => E(w.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...B[15] || (B[15] = [
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
                      !w.is_current && g.value.length > 1 ? (o(), p(V, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (I) => S(w.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", mr, [...B[16] || (B[16] = [
                            t("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
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
              x.value.length ? c("", !0) : (o(), p($e, {
                key: 3,
                icon: "🌍",
                message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
              }, xt({ _: 2 }, [
                f.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    d(V, {
                      variant: "primary",
                      onClick: B[4] || (B[4] = (w) => y.value = !0)
                    }, {
                      default: a(() => [...B[17] || (B[17] = [
                        m(" Create Environment ", -1)
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
        d(ze, {
          show: v.value,
          title: "About Environments",
          onClose: B[6] || (B[6] = (w) => v.value = !1)
        }, {
          content: a(() => [...B[18] || (B[18] = [
            t("p", null, [
              t("strong", null, "Environments"),
              m(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            d(V, {
              variant: "secondary",
              onClick: B[5] || (B[5] = (w) => v.value = !1)
            }, {
              default: a(() => [...B[19] || (B[19] = [
                m(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), fr = /* @__PURE__ */ G(vr, [["__scopeId", "data-v-97d6527d"]]), gr = { class: "file-path" }, hr = { class: "file-path-text" }, pr = ["title"], yr = /* @__PURE__ */ H({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, s = C(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(l.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, h) => (o(), n("div", gr, [
      h[0] || (h[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", hr, i(e.path), 1),
      e.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: r
      }, i(s.value ? "✓" : "📋"), 9, pr)) : c("", !0)
    ]));
  }
}), wr = /* @__PURE__ */ G(yr, [["__scopeId", "data-v-f0982173"]]), br = { class: "output-path-input" }, kr = { class: "export-actions" }, _r = {
  key: 1,
  class: "export-warning"
}, $r = /* @__PURE__ */ H({
  __name: "ExportSection",
  setup(e) {
    const { exportEnv: l } = fe(), s = C(""), r = C(!1), g = C(null), h = C(!1);
    async function u() {
      r.value = !0, g.value = null;
      try {
        const v = await l(s.value || void 0);
        g.value = v;
      } catch (v) {
        g.value = {
          status: "error",
          message: v instanceof Error ? v.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function f() {
      var v;
      if ((v = g.value) != null && v.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (y) {
          console.error("Failed to copy path:", y);
        }
    }
    return (v, y) => (o(), n(A, null, [
      d(he, null, {
        header: a(() => [
          d(pe, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              d(V, {
                variant: "ghost",
                size: "sm",
                onClick: y[0] || (y[0] = (D) => h.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...y[5] || (y[5] = [
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
          d(ce, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              d(me, { status: "synced" }, {
                icon: a(() => [...y[6] || (y[6] = [
                  m("📦", -1)
                ])]),
                title: a(() => [...y[7] || (y[7] = [
                  m("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...y[8] || (y[8] = [
                  m(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  d(J, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  d(J, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  d(J, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  d(J, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(ce, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              d(me, { status: "synced" }, {
                icon: a(() => [...y[9] || (y[9] = [
                  m("📁", -1)
                ])]),
                title: a(() => [...y[10] || (y[10] = [
                  m("Output Destination", -1)
                ])]),
                subtitle: a(() => [...y[11] || (y[11] = [
                  m(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  t("div", br, [
                    d(Ye, {
                      modelValue: s.value,
                      "onUpdate:modelValue": y[1] || (y[1] = (D) => s.value = D),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(ce, { title: "EXPORT" }, {
            default: a(() => [
              t("div", kr, [
                d(V, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: u
                }, {
                  default: a(() => [
                    y[12] || (y[12] = t("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      t("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    m(" " + i(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), p(V, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: y[2] || (y[2] = (D) => s.value = "")
                }, {
                  default: a(() => [...y[13] || (y[13] = [
                    m(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), p(ce, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              d(me, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, xt({
                icon: a(() => [
                  m(i(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  m(i(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  m(i(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    d(J, { label: "Saved to:" }, {
                      default: a(() => [
                        d(wr, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), p(J, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), n("div", _r, [...y[14] || (y[14] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
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
                      default: a(() => [...y[15] || (y[15] = [
                        m(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    d(V, {
                      variant: "ghost",
                      size: "sm",
                      onClick: y[3] || (y[3] = (D) => g.value = null)
                    }, {
                      default: a(() => [...y[16] || (y[16] = [
                        m(" Dismiss ", -1)
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
      d(ze, {
        show: h.value,
        title: "About Environment Export",
        onClose: y[4] || (y[4] = (D) => h.value = !1)
      }, {
        content: a(() => [...y[17] || (y[17] = [
          t("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          t("ul", null, [
            t("li", null, "Shared with collaborators"),
            t("li", null, "Backed up for safekeeping"),
            t("li", null, "Imported into other ComfyGit workspaces"),
            t("li", null, "Version controlled separately")
          ], -1),
          t("p", null, [
            t("strong", null, "Note:"),
            m(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cr = /* @__PURE__ */ G($r, [["__scopeId", "data-v-1777a9d5"]]), xr = { class: "file-input-wrapper" }, Sr = ["accept", "multiple", "disabled"], Er = /* @__PURE__ */ H({
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
  setup(e, { expose: l, emit: s }) {
    const r = s, g = C(null);
    function h() {
      var f;
      (f = g.value) == null || f.click();
    }
    function u(f) {
      const v = f.target;
      v.files && v.files.length > 0 && (r("change", v.files), v.value = "");
    }
    return l({
      triggerInput: h
    }), (f, v) => (o(), n("div", xr, [
      t("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, Sr),
      d(V, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: h
      }, {
        default: a(() => [
          ee(f.$slots, "default", {}, () => [
            v[0] || (v[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            m(" " + i(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Ir = /* @__PURE__ */ G(Er, [["__scopeId", "data-v-cd192091"]]), zr = {
  key: 0,
  class: "drop-zone-empty"
}, Mr = { class: "drop-zone-text" }, Lr = { class: "drop-zone-primary" }, Nr = { class: "drop-zone-secondary" }, Br = { class: "drop-zone-actions" }, Tr = {
  key: 1,
  class: "drop-zone-file"
}, Dr = { class: "file-info" }, Rr = { class: "file-details" }, Ur = { class: "file-name" }, Or = { class: "file-size" }, Vr = /* @__PURE__ */ H({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: l }) {
    const s = l, r = C(!1), g = C(null), h = C(0), u = W(() => g.value !== null), f = W(() => {
      var E;
      return ((E = g.value) == null ? void 0 : E.name) || "";
    }), v = W(() => {
      if (!g.value) return "";
      const E = g.value.size;
      return E < 1024 ? `${E} B` : E < 1024 * 1024 ? `${(E / 1024).toFixed(1)} KB` : E < 1024 * 1024 * 1024 ? `${(E / (1024 * 1024)).toFixed(1)} MB` : `${(E / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function y(E) {
      var S;
      h.value++, (S = E.dataTransfer) != null && S.types.includes("Files") && (r.value = !0);
    }
    function D(E) {
      E.dataTransfer && (E.dataTransfer.dropEffect = "copy");
    }
    function N() {
      h.value--, h.value === 0 && (r.value = !1);
    }
    function x(E) {
      var U;
      h.value = 0, r.value = !1;
      const S = (U = E.dataTransfer) == null ? void 0 : U.files;
      S && S.length > 0 && T(S[0]);
    }
    function _(E) {
      E.length > 0 && T(E[0]);
    }
    function T(E) {
      g.value = E, s("fileSelected", E);
    }
    function b() {
      g.value = null, s("clear");
    }
    return (E, S) => (o(), n("div", {
      class: Y(["file-drop-zone", { "drop-active": r.value, "has-file": u.value }]),
      onDragenter: ge(y, ["prevent"]),
      onDragover: ge(D, ["prevent"]),
      onDragleave: ge(N, ["prevent"]),
      onDrop: ge(x, ["prevent"])
    }, [
      u.value ? (o(), n("div", Tr, [
        t("div", Dr, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", Rr, [
            t("div", Ur, i(f.value), 1),
            t("div", Or, i(v.value), 1)
          ])
        ]),
        d(V, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: a(() => [...S[2] || (S[2] = [
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
      ])) : (o(), n("div", zr, [
        S[0] || (S[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", Mr, [
          t("p", Lr, i(e.primaryText), 1),
          t("p", Nr, i(e.secondaryText), 1)
        ]),
        t("div", Br, [
          d(Ir, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "md",
            onChange: _
          }, {
            default: a(() => [
              m(i(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Wr = /* @__PURE__ */ G(Vr, [["__scopeId", "data-v-e00abbca"]]), Ar = { class: "import-preview" }, Fr = { class: "preview-header" }, Pr = {
  key: 0,
  class: "source-env"
}, Hr = { class: "preview-content" }, Gr = { class: "preview-section" }, jr = { class: "section-header" }, Kr = { class: "section-info" }, qr = { class: "section-count" }, Yr = {
  key: 0,
  class: "item-list"
}, Xr = { class: "item-name" }, Zr = {
  key: 0,
  class: "item-more"
}, Jr = { class: "preview-section" }, Qr = { class: "section-header" }, ec = { class: "section-info" }, tc = { class: "section-count" }, oc = {
  key: 0,
  class: "item-list"
}, sc = { class: "item-details" }, ac = { class: "item-name" }, nc = { class: "item-meta" }, lc = {
  key: 0,
  class: "item-more"
}, ic = { class: "preview-section" }, rc = { class: "section-header" }, cc = { class: "section-info" }, dc = { class: "section-count" }, uc = {
  key: 0,
  class: "item-list"
}, mc = { class: "item-name" }, vc = {
  key: 0,
  class: "item-more"
}, fc = {
  key: 0,
  class: "preview-section"
}, gc = { class: "git-info" }, hc = /* @__PURE__ */ H({
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
    const l = e, s = W(() => l.workflows.length), r = W(() => l.models.length), g = W(() => l.nodes.length);
    function h(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, f) => (o(), n("div", Ar, [
      t("div", Fr, [
        d(we, null, {
          default: a(() => [...f[0] || (f[0] = [
            m("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), n("span", Pr, [
          f[1] || (f[1] = m(" From: ", -1)),
          d(mt, null, {
            default: a(() => [
              m(i(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      t("div", Hr, [
        t("div", Gr, [
          t("div", jr, [
            f[3] || (f[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Kr, [
              f[2] || (f[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", qr, i(s.value) + " file" + i(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), n("div", Yr, [
            (o(!0), n(A, null, q(e.workflows.slice(0, e.maxPreviewItems), (v) => (o(), n("div", {
              key: v,
              class: "preview-item"
            }, [
              f[4] || (f[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Xr, i(v), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), n("div", Zr, " +" + i(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t("div", Jr, [
          t("div", Qr, [
            f[6] || (f[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", ec, [
              f[5] || (f[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", tc, i(r.value) + " file" + i(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), n("div", oc, [
            (o(!0), n(A, null, q(e.models.slice(0, e.maxPreviewItems), (v) => (o(), n("div", {
              key: v.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", sc, [
                t("span", ac, i(v.filename), 1),
                t("span", nc, i(h(v.size)) + " • " + i(v.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), n("div", lc, " +" + i(e.models.length - e.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t("div", ic, [
          t("div", rc, [
            f[9] || (f[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", cc, [
              f[8] || (f[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", dc, i(g.value) + " node" + i(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), n("div", uc, [
            (o(!0), n(A, null, q(e.nodes.slice(0, e.maxPreviewItems), (v) => (o(), n("div", {
              key: v,
              class: "preview-item"
            }, [
              f[10] || (f[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", mc, i(v), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), n("div", vc, " +" + i(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), n("div", fc, [
          f[11] || (f[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", gc, [
            e.gitBranch ? (o(), p(J, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                d(mt, null, {
                  default: a(() => [
                    m(i(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            e.gitCommit ? (o(), p(J, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                d(zt, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), pc = /* @__PURE__ */ G(hc, [["__scopeId", "data-v-182fe113"]]), yc = { class: "import-options" }, wc = { class: "options-container" }, bc = { class: "option-section" }, kc = { class: "conflict-options" }, _c = ["value", "checked", "onChange"], $c = { class: "conflict-content" }, Cc = { class: "conflict-label" }, xc = { class: "conflict-description" }, Sc = { class: "option-section" }, Ec = { class: "component-toggles" }, Ic = /* @__PURE__ */ H({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(e, { emit: l }) {
    const s = l, r = [
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
    return (g, h) => (o(), n("div", yc, [
      d(we, null, {
        default: a(() => [...h[4] || (h[4] = [
          m("Import Options", -1)
        ])]),
        _: 1
      }),
      t("div", wc, [
        t("div", bc, [
          d(ut, null, {
            default: a(() => [...h[5] || (h[5] = [
              m("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          t("div", kc, [
            (o(), n(A, null, q(r, (u) => t("label", {
              key: u.value,
              class: Y(["conflict-option", { active: e.conflictMode === u.value }])
            }, [
              t("input", {
                type: "radio",
                name: "conflict-mode",
                value: u.value,
                checked: e.conflictMode === u.value,
                onChange: (f) => s("update:conflictMode", u.value)
              }, null, 40, _c),
              t("div", $c, [
                t("span", Cc, i(u.label), 1),
                t("span", xc, i(u.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", Sc, [
          d(ut, null, {
            default: a(() => [...h[6] || (h[6] = [
              m("Components to Import", -1)
            ])]),
            _: 1
          }),
          t("div", Ec, [
            d(Be, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                d(Ae, {
                  "model-value": e.includeWorkflows,
                  "onUpdate:modelValue": h[0] || (h[0] = (u) => s("update:includeWorkflows", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Be, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                d(Ae, {
                  "model-value": e.includeModels,
                  "onUpdate:modelValue": h[1] || (h[1] = (u) => s("update:includeModels", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Be, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                d(Ae, {
                  "model-value": e.includeNodes,
                  "onUpdate:modelValue": h[2] || (h[2] = (u) => s("update:includeNodes", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Be, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                d(Ae, {
                  "model-value": e.includeGitHistory,
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
}), zc = /* @__PURE__ */ G(Ic, [["__scopeId", "data-v-0ec212b0"]]), Mc = {
  key: 0,
  class: "import-empty"
}, Lc = { class: "import-help" }, Nc = {
  key: 1,
  class: "import-configure"
}, Bc = { class: "selected-file-bar" }, Tc = { class: "file-bar-content" }, Dc = { class: "file-bar-info" }, Rc = { class: "file-bar-name" }, Uc = { class: "file-bar-size" }, Oc = { class: "import-actions" }, Vc = {
  key: 2,
  class: "import-progress"
}, Wc = { class: "progress-content" }, Ac = { class: "progress-info" }, Fc = { class: "progress-title" }, Pc = { class: "progress-detail" }, Hc = { class: "progress-bar" }, Gc = { class: "progress-status" }, jc = {
  key: 3,
  class: "import-complete"
}, Kc = { class: "complete-message" }, qc = { class: "complete-title" }, Yc = { class: "complete-details" }, Xc = { class: "complete-actions" }, Zc = /* @__PURE__ */ H({
  __name: "ImportSection",
  setup(e) {
    const l = C(null), s = C(!1), r = C(!1), g = C(!1), h = C(""), u = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), f = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), v = C({
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
    }), y = W(() => u.value.includeWorkflows || u.value.includeModels || u.value.includeNodes || u.value.includeGitHistory);
    function D(b) {
      l.value = b;
    }
    function N() {
      l.value = null, r.value = !1, g.value = !1, h.value = "";
    }
    function x() {
      N(), s.value = !1, f.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function _() {
      if (l.value) {
        s.value = !0, r.value = !1;
        try {
          const b = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${v.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${v.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${v.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const E of b)
            f.value = E, await new Promise((S) => setTimeout(S, 800));
          f.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((E) => setTimeout(E, 500)), g.value = !0, h.value = `Successfully imported ${v.value.workflows.length} workflows, ${v.value.models.length} models, and ${v.value.nodes.length} custom nodes.`;
        } catch (b) {
          g.value = !1, h.value = b instanceof Error ? b.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, r.value = !0;
        }
      }
    }
    function T(b) {
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (b, E) => (o(), p(he, null, {
      header: a(() => [
        d(pe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !l.value && !s.value ? (o(), n("div", Mc, [
          d(Wr, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: D
          }),
          t("div", Lc, [
            d(we, null, {
              default: a(() => [...E[5] || (E[5] = [
                m("How to Import", -1)
              ])]),
              _: 1
            }),
            E[6] || (E[6] = t("div", { class: "help-content" }, [
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
        ])) : l.value && !s.value && !r.value ? (o(), n("div", Nc, [
          t("div", Bc, [
            t("div", Tc, [
              E[7] || (E[7] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", Dc, [
                t("div", Rc, i(l.value.name), 1),
                t("div", Uc, i(T(l.value.size)), 1)
              ])
            ]),
            d(V, {
              variant: "ghost",
              size: "sm",
              onClick: N
            }, {
              default: a(() => [...E[8] || (E[8] = [
                m(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          d(pc, {
            "source-environment": v.value.sourceEnvironment,
            workflows: v.value.workflows,
            models: v.value.models,
            nodes: v.value.nodes,
            "git-branch": v.value.gitBranch,
            "git-commit": v.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          d(zc, {
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
          !u.value.includeModels && v.value.models.length > 0 ? (o(), p(Ue, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${v.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          t("div", Oc, [
            d(V, {
              variant: "primary",
              size: "md",
              disabled: !y.value,
              onClick: _
            }, {
              default: a(() => [...E[9] || (E[9] = [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  t("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                m(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            d(V, {
              variant: "secondary",
              size: "md",
              onClick: N
            }, {
              default: a(() => [...E[10] || (E[10] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Vc, [
          t("div", Wc, [
            E[11] || (E[11] = t("div", { class: "progress-icon" }, [
              t("div", { class: "spinner" })
            ], -1)),
            t("div", Ac, [
              t("div", Fc, i(f.value.message), 1),
              t("div", Pc, i(f.value.detail), 1)
            ])
          ]),
          t("div", Hc, [
            t("div", {
              class: "progress-bar-fill",
              style: Xe({ width: `${f.value.percent}%` })
            }, null, 4)
          ]),
          t("div", Gc, i(f.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), n("div", jc, [
          t("div", {
            class: Y(["complete-icon", g.value ? "success" : "error"])
          }, i(g.value ? "✓" : "✕"), 3),
          t("div", Kc, [
            t("div", qc, i(g.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Yc, i(h.value), 1)
          ]),
          t("div", Xc, [
            d(V, {
              variant: "primary",
              size: "md",
              onClick: x
            }, {
              default: a(() => [...E[12] || (E[12] = [
                m(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Jc = /* @__PURE__ */ G(Zc, [["__scopeId", "data-v-18e18eb5"]]), Qc = { class: "header-info" }, ed = { class: "commit-hash" }, td = {
  key: 0,
  class: "commit-refs"
}, od = { class: "commit-message" }, sd = { class: "commit-date" }, ad = {
  key: 0,
  class: "loading"
}, nd = {
  key: 1,
  class: "changes-section"
}, ld = { class: "stats-row" }, id = { class: "stat" }, rd = { class: "stat insertions" }, cd = { class: "stat deletions" }, dd = {
  key: 0,
  class: "change-group"
}, ud = {
  key: 1,
  class: "change-group"
}, md = {
  key: 0,
  class: "version"
}, vd = {
  key: 2,
  class: "change-group"
}, fd = { class: "change-item" }, gd = /* @__PURE__ */ H({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: s } = fe(), r = C(null), g = C(!0), h = W(() => {
      if (!r.value) return !1;
      const f = r.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), u = W(() => {
      if (!r.value) return !1;
      const f = r.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return ve(async () => {
      try {
        r.value = await s(l.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (f, v) => (o(), p(st, {
      size: "md",
      "show-close-button": !1,
      onClose: v[3] || (v[3] = (y) => f.$emit("close"))
    }, {
      header: a(() => {
        var y, D, N, x;
        return [
          t("div", Qc, [
            v[4] || (v[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", ed, i(((y = r.value) == null ? void 0 : y.short_hash) || e.commit.short_hash || ((D = e.commit.hash) == null ? void 0 : D.slice(0, 7))), 1),
            (x = (N = r.value) == null ? void 0 : N.refs) != null && x.length ? (o(), n("span", td, [
              (o(!0), n(A, null, q(r.value.refs, (_) => (o(), n("span", {
                key: _,
                class: "ref-badge"
              }, i(_), 1))), 128))
            ])) : c("", !0)
          ]),
          d(ue, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (_) => f.$emit("close"))
          }, {
            default: a(() => [...v[5] || (v[5] = [
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
        var y, D;
        return [
          t("div", od, i(((y = r.value) == null ? void 0 : y.message) || e.commit.message), 1),
          t("div", sd, i(((D = r.value) == null ? void 0 : D.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          g.value ? (o(), n("div", ad, "Loading details...")) : r.value ? (o(), n("div", nd, [
            t("div", ld, [
              t("span", id, i(r.value.stats.files_changed) + " files", 1),
              t("span", rd, "+" + i(r.value.stats.insertions), 1),
              t("span", cd, "-" + i(r.value.stats.deletions), 1)
            ]),
            h.value ? (o(), n("div", dd, [
              d(Te, { variant: "section" }, {
                default: a(() => [...v[6] || (v[6] = [
                  m("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(A, null, q(r.value.changes.workflows.added, (N) => (o(), n("div", {
                key: "add-" + N,
                class: "change-item added"
              }, [
                v[7] || (v[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, i(N), 1)
              ]))), 128)),
              (o(!0), n(A, null, q(r.value.changes.workflows.modified, (N) => (o(), n("div", {
                key: "mod-" + N,
                class: "change-item modified"
              }, [
                v[8] || (v[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, i(N), 1)
              ]))), 128)),
              (o(!0), n(A, null, q(r.value.changes.workflows.deleted, (N) => (o(), n("div", {
                key: "del-" + N,
                class: "change-item deleted"
              }, [
                v[9] || (v[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, i(N), 1)
              ]))), 128))
            ])) : c("", !0),
            u.value ? (o(), n("div", ud, [
              d(Te, { variant: "section" }, {
                default: a(() => [...v[10] || (v[10] = [
                  m("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(A, null, q(r.value.changes.nodes.added, (N) => (o(), n("div", {
                key: "add-" + N.name,
                class: "change-item added"
              }, [
                v[11] || (v[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, i(N.name), 1),
                N.version ? (o(), n("span", md, "(" + i(N.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(A, null, q(r.value.changes.nodes.removed, (N) => (o(), n("div", {
                key: "rem-" + N.name,
                class: "change-item deleted"
              }, [
                v[12] || (v[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, i(N.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), n("div", vd, [
              d(Te, { variant: "section" }, {
                default: a(() => [...v[13] || (v[13] = [
                  m("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", fd, [
                v[14] || (v[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, i(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        d(ue, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (y) => f.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...v[15] || (v[15] = [
            m(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        d(ue, {
          variant: "primary",
          onClick: v[2] || (v[2] = (y) => f.$emit("checkout", e.commit))
        }, {
          default: a(() => [...v[16] || (v[16] = [
            m(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), hd = /* @__PURE__ */ G(gd, [["__scopeId", "data-v-d256ff6d"]]), pd = { class: "dialog-message" }, yd = {
  key: 0,
  class: "dialog-details"
}, wd = {
  key: 1,
  class: "dialog-warning"
}, bd = /* @__PURE__ */ H({
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
    return (l, s) => (o(), p(st, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => l.$emit("cancel"))
    }, {
      body: a(() => [
        t("p", pd, i(e.message), 1),
        e.details && e.details.length ? (o(), n("div", yd, [
          (o(!0), n(A, null, q(e.details, (r, g) => (o(), n("div", {
            key: g,
            class: "detail-item"
          }, " • " + i(r), 1))), 128))
        ])) : c("", !0),
        e.warning ? (o(), n("p", wd, [
          s[4] || (s[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          m(" " + i(e.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        d(ue, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => l.$emit("cancel"))
        }, {
          default: a(() => [
            m(i(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), p(ue, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => l.$emit("secondary"))
        }, {
          default: a(() => [
            m(i(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        d(ue, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => l.$emit("confirm"))
        }, {
          default: a(() => [
            m(i(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), kd = /* @__PURE__ */ G(bd, [["__scopeId", "data-v-3670b9f5"]]), _d = { class: "base-textarea-wrapper" }, $d = ["value", "rows", "placeholder", "disabled", "maxlength"], Cd = {
  key: 0,
  class: "base-textarea-count"
}, xd = /* @__PURE__ */ H({
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
    return (l, s) => (o(), n("div", _d, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ie(ge((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ie(ge((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, $d),
      e.showCharCount && e.maxLength ? (o(), n("div", Cd, i(e.modelValue.length) + " / " + i(e.maxLength), 1)) : c("", !0)
    ]));
  }
}), _t = /* @__PURE__ */ G(xd, [["__scopeId", "data-v-5516e6fc"]]), Sd = ["checked", "disabled"], Ed = { class: "base-checkbox-box" }, Id = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, zd = {
  key: 0,
  class: "base-checkbox-label"
}, Md = /* @__PURE__ */ H({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (l, s) => (o(), n("label", {
      class: Y(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.checked))
      }, null, 40, Sd),
      t("span", Ed, [
        e.modelValue ? (o(), n("svg", Id, [...s[1] || (s[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      l.$slots.default ? (o(), n("span", zd, [
        ee(l.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ G(Md, [["__scopeId", "data-v-bf17c831"]]), Ld = { class: "popover-header" }, Nd = { class: "popover-body" }, Bd = {
  key: 0,
  class: "changes-summary"
}, Td = {
  key: 0,
  class: "change-item"
}, Dd = {
  key: 1,
  class: "change-item"
}, Rd = {
  key: 2,
  class: "change-item"
}, Ud = {
  key: 3,
  class: "change-item"
}, Od = {
  key: 4,
  class: "change-item"
}, Vd = {
  key: 1,
  class: "no-changes"
}, Wd = {
  key: 2,
  class: "loading"
}, Ad = {
  key: 3,
  class: "issues-warning"
}, Fd = { class: "warning-header" }, Pd = { class: "warning-title" }, Hd = { class: "issues-list" }, Gd = { class: "message-section" }, jd = { class: "popover-footer" }, Kd = {
  key: 1,
  class: "commit-popover"
}, qd = { class: "popover-header" }, Yd = { class: "popover-body" }, Xd = {
  key: 0,
  class: "changes-summary"
}, Zd = {
  key: 0,
  class: "change-item"
}, Jd = {
  key: 1,
  class: "change-item"
}, Qd = {
  key: 2,
  class: "change-item"
}, eu = {
  key: 3,
  class: "change-item"
}, tu = {
  key: 4,
  class: "change-item"
}, ou = {
  key: 1,
  class: "no-changes"
}, su = {
  key: 2,
  class: "loading"
}, au = {
  key: 3,
  class: "issues-warning"
}, nu = { class: "warning-header" }, lu = { class: "warning-title" }, iu = { class: "issues-list" }, ru = { class: "message-section" }, cu = { class: "popover-footer" }, du = /* @__PURE__ */ H({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const s = e, r = l, { commit: g } = fe(), h = C(""), u = C(!1), f = C(!1), v = C(null), y = W(() => {
      if (!s.status) return !1;
      const T = s.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || s.status.has_changes;
    }), D = W(() => {
      var T;
      return (T = s.status) != null && T.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), N = W(() => D.value.length > 0), x = W(() => N.value && !f.value);
    async function _() {
      var T, b, E;
      if (!(N.value && !f.value) && !(!y.value || !h.value.trim() || u.value)) {
        u.value = !0, v.value = null;
        try {
          const S = await g(h.value.trim(), f.value);
          S.status === "success" ? (v.value = {
            type: "success",
            message: `Committed: ${((T = S.summary) == null ? void 0 : T.new) || 0} new, ${((b = S.summary) == null ? void 0 : b.modified) || 0} modified, ${((E = S.summary) == null ? void 0 : E.deleted) || 0} deleted`
          }, h.value = "", f.value = !1, setTimeout(() => r("committed"), 1e3)) : S.status === "no_changes" ? v.value = { type: "error", message: "No changes to commit" } : S.status === "blocked" ? v.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : v.value = { type: "error", message: S.message || "Commit failed" };
        } catch (S) {
          v.value = { type: "error", message: S instanceof Error ? S.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (T, b) => e.asModal ? (o(), p(Oe, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (E) => r("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = ge(() => {
          }, ["stop"]))
        }, [
          t("div", Ld, [
            b[11] || (b[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (E) => r("close"))
            }, [...b[10] || (b[10] = [
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
          t("div", Nd, [
            e.status && y.value ? (o(), n("div", Bd, [
              e.status.workflows.new.length ? (o(), n("div", Td, [
                b[12] || (b[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, i(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              e.status.workflows.modified.length ? (o(), n("div", Dd, [
                b[13] || (b[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, i(e.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              e.status.workflows.deleted.length ? (o(), n("div", Rd, [
                b[14] || (b[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, i(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              e.status.git_changes.nodes_added.length ? (o(), n("div", Ud, [
                b[15] || (b[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, i(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), n("div", Od, [
                b[16] || (b[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, i(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : e.status ? (o(), n("div", Vd, " No changes to commit ")) : (o(), n("div", Wd, " Loading... ")),
            N.value ? (o(), n("div", Ad, [
              t("div", Fd, [
                b[17] || (b[17] = t("span", { class: "warning-icon" }, "⚠️", -1)),
                t("span", Pd, i(D.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              t("div", Hd, [
                (o(!0), n(A, null, q(D.value, (E) => (o(), n("div", {
                  key: E.name,
                  class: "issue-item"
                }, [
                  t("strong", null, i(E.name), 1),
                  m(": " + i(E.issue_summary), 1)
                ]))), 128))
              ]),
              d($t, {
                modelValue: f.value,
                "onUpdate:modelValue": b[1] || (b[1] = (E) => f.value = E),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...b[18] || (b[18] = [
                  m(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            t("div", Gd, [
              d(_t, {
                modelValue: h.value,
                "onUpdate:modelValue": b[2] || (b[2] = (E) => h.value = E),
                placeholder: x.value ? "Enable 'Allow issues' to commit" : y.value ? "Describe your changes..." : "No changes",
                disabled: !y.value || u.value || x.value,
                rows: 3,
                onCtrlEnter: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            v.value ? (o(), n("div", {
              key: 4,
              class: Y(["result", v.value.type])
            }, i(v.value.message), 3)) : c("", !0)
          ]),
          t("div", jd, [
            d(ue, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (E) => r("close"))
            }, {
              default: a(() => [...b[19] || (b[19] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(ue, {
              variant: f.value ? "danger" : "primary",
              disabled: !y.value || !h.value.trim() || u.value || x.value,
              loading: u.value,
              onClick: _
            }, {
              default: a(() => [
                m(i(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Kd, [
      t("div", qd, [
        b[21] || (b[21] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (E) => r("close"))
        }, [...b[20] || (b[20] = [
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
      t("div", Yd, [
        e.status && y.value ? (o(), n("div", Xd, [
          e.status.workflows.new.length ? (o(), n("div", Zd, [
            b[22] || (b[22] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, i(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          e.status.workflows.modified.length ? (o(), n("div", Jd, [
            b[23] || (b[23] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, i(e.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          e.status.workflows.deleted.length ? (o(), n("div", Qd, [
            b[24] || (b[24] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, i(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          e.status.git_changes.nodes_added.length ? (o(), n("div", eu, [
            b[25] || (b[25] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, i(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), n("div", tu, [
            b[26] || (b[26] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, i(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : e.status ? (o(), n("div", ou, " No changes to commit ")) : (o(), n("div", su, " Loading... ")),
        N.value ? (o(), n("div", au, [
          t("div", nu, [
            b[27] || (b[27] = t("span", { class: "warning-icon" }, "⚠️", -1)),
            t("span", lu, i(D.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          t("div", iu, [
            (o(!0), n(A, null, q(D.value, (E) => (o(), n("div", {
              key: E.name,
              class: "issue-item"
            }, [
              t("strong", null, i(E.name), 1),
              m(": " + i(E.issue_summary), 1)
            ]))), 128))
          ]),
          d($t, {
            modelValue: f.value,
            "onUpdate:modelValue": b[7] || (b[7] = (E) => f.value = E),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...b[28] || (b[28] = [
              m(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        t("div", ru, [
          d(_t, {
            modelValue: h.value,
            "onUpdate:modelValue": b[8] || (b[8] = (E) => h.value = E),
            placeholder: x.value ? "Enable 'Allow issues' to commit" : y.value ? "Describe your changes..." : "No changes",
            disabled: !y.value || u.value || x.value,
            rows: 3,
            onCtrlEnter: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        v.value ? (o(), n("div", {
          key: 4,
          class: Y(["result", v.value.type])
        }, i(v.value.message), 3)) : c("", !0)
      ]),
      t("div", cu, [
        d(ue, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (E) => r("close"))
        }, {
          default: a(() => [...b[29] || (b[29] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        }),
        d(ue, {
          variant: f.value ? "danger" : "primary",
          disabled: !y.value || !h.value.trim() || u.value || x.value,
          loading: u.value,
          onClick: _
        }, {
          default: a(() => [
            m(i(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Lt = /* @__PURE__ */ G(du, [["__scopeId", "data-v-38b45183"]]), uu = { class: "modal-header" }, mu = { class: "modal-body" }, vu = { class: "switch-message" }, fu = { class: "switch-details" }, gu = { class: "modal-actions" }, hu = /* @__PURE__ */ H({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (l, s) => (o(), p(Oe, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => l.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ge(() => {
          }, ["stop"]))
        }, [
          t("div", uu, [
            s[5] || (s[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          t("div", mu, [
            t("p", vu, [
              s[6] || (s[6] = m(" Switch from ", -1)),
              t("strong", null, i(e.fromEnvironment), 1),
              s[7] || (s[7] = m(" to ", -1)),
              t("strong", null, i(e.toEnvironment), 1),
              s[8] || (s[8] = m("? ", -1))
            ]),
            s[9] || (s[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", fu, ' Your current work will be preserved. You can switch back to "' + i(e.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", gu, [
            d(V, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => l.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(V, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => l.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                m(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), pu = /* @__PURE__ */ G(hu, [["__scopeId", "data-v-e9c5253e"]]), yu = { class: "progress-bar" }, wu = /* @__PURE__ */ H({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const l = e, s = W(() => `${Math.max(0, Math.min(100, l.progress))}%`);
    return (r, g) => (o(), n("div", yu, [
      t("div", {
        class: Y(["progress-fill", e.variant]),
        style: Xe({ width: s.value })
      }, null, 6)
    ]));
  }
}), bu = /* @__PURE__ */ G(wu, [["__scopeId", "data-v-1beb0512"]]), ku = {
  key: 0,
  class: "modal-overlay"
}, _u = { class: "modal-content" }, $u = { class: "modal-body" }, Cu = { class: "progress-info" }, xu = { class: "progress-percentage" }, Su = { class: "progress-state" }, Eu = { class: "switch-steps" }, Iu = { class: "step-icon" }, zu = { class: "step-label" }, Mu = /* @__PURE__ */ H({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const l = e, s = W(() => {
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
      return l.message || h[l.state] || l.state;
    }), r = W(() => l.state === "complete" ? "success" : l.state === "critical_failure" || l.state === "rolled_back" ? "error" : "default"), g = W(() => {
      const h = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = h.findIndex((f) => f.state === l.state);
      return h.map((f, v) => {
        let y = "pending", D = "○";
        return v < u ? (y = "completed", D = "✓") : v === u && (y = "active", D = "⟳"), {
          ...f,
          status: y,
          icon: D
        };
      });
    });
    return (h, u) => (o(), p(Oe, { to: "body" }, [
      e.show ? (o(), n("div", ku, [
        t("div", _u, [
          u[1] || (u[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", $u, [
            d(bu, {
              progress: e.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            t("div", Cu, [
              t("div", xu, i(e.progress) + "%", 1),
              t("div", Su, i(s.value), 1)
            ]),
            t("div", Eu, [
              (o(!0), n(A, null, q(g.value, (f) => (o(), n("div", {
                key: f.state,
                class: Y(["switch-step", f.status])
              }, [
                t("span", Iu, i(f.icon), 1),
                t("span", zu, i(f.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Lu = /* @__PURE__ */ G(Mu, [["__scopeId", "data-v-768a5078"]]), Nu = { class: "modal-header" }, Bu = { class: "modal-body" }, Tu = {
  key: 0,
  class: "node-section"
}, Du = { class: "node-list" }, Ru = {
  key: 1,
  class: "node-section"
}, Uu = { class: "node-list" }, Ou = { class: "modal-actions" }, Vu = /* @__PURE__ */ H({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (l, s) => (o(), p(Oe, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => l.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ge(() => {
          }, ["stop"]))
        }, [
          t("div", Nu, [
            s[5] || (s[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          t("div", Bu, [
            s[8] || (s[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), n("div", Tu, [
              s[6] || (s[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", Du, [
                (o(!0), n(A, null, q(e.mismatchDetails.missing_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + i(r), 1))), 128))
              ])
            ])) : c("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), n("div", Ru, [
              s[7] || (s[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", Uu, [
                (o(!0), n(A, null, q(e.mismatchDetails.extra_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + i(r), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", Ou, [
            d(V, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => l.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(V, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => l.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                m(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Wu = /* @__PURE__ */ G(Vu, [["__scopeId", "data-v-7cad7518"]]);
async function je(e, l = {}, s = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), s);
  try {
    const h = await fetch(e, {
      ...l,
      signal: r.signal
    });
    return clearTimeout(g), h;
  } catch (h) {
    throw clearTimeout(g), h.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : h;
  }
}
function Au() {
  const e = C(null);
  async function l() {
    try {
      const u = await je(
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
    if (e.value || (e.value = await l()), !e.value)
      return null;
    try {
      const u = await je(
        `http://127.0.0.1:${e.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return e.value = await l(), null;
    }
  }
  async function r() {
    if (e.value || (e.value = await l()), !e.value)
      return null;
    try {
      const u = await je(
        `http://127.0.0.1:${e.value}/status`,
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
    if (e.value || (e.value = await l()), !e.value)
      throw new Error("Control port not available");
    if (!(await je(
      `http://127.0.0.1:${e.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function h() {
    if (e.value || (e.value = await l()), !e.value)
      throw new Error("Control port not available");
    if (!(await je(
      `http://127.0.0.1:${e.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: e,
    discoverControlPort: l,
    checkHealth: s,
    getStatus: r,
    restart: g,
    kill: h
  };
}
const Fu = { class: "comfygit-panel" }, Pu = { class: "panel-header" }, Hu = { class: "header-left" }, Gu = {
  key: 0,
  class: "header-info"
}, ju = { class: "header-actions" }, Ku = { class: "env-switcher" }, qu = {
  key: 0,
  class: "header-info"
}, Yu = { class: "branch-name" }, Xu = { class: "panel-main" }, Zu = { class: "sidebar" }, Ju = { class: "sidebar-section" }, Qu = { class: "sidebar-section" }, em = { class: "sidebar-section" }, tm = { class: "content-area" }, om = {
  key: 0,
  class: "error-message"
}, sm = {
  key: 1,
  class: "loading"
}, am = { class: "dialog-content env-selector-dialog" }, nm = { class: "dialog-header" }, lm = { class: "dialog-body" }, im = { class: "env-list" }, rm = { class: "env-info" }, cm = { class: "env-name-row" }, dm = { class: "env-indicator" }, um = { class: "env-name" }, mm = {
  key: 0,
  class: "env-branch"
}, vm = {
  key: 1,
  class: "current-label"
}, fm = { class: "env-stats" }, gm = ["onClick"], hm = { class: "toast-container" }, pm = { class: "toast-icon" }, ym = { class: "toast-message" }, wm = /* @__PURE__ */ H({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const s = l, {
      getStatus: r,
      getHistory: g,
      getBranches: h,
      checkout: u,
      createBranch: f,
      switchBranch: v,
      getEnvironments: y,
      switchEnvironment: D,
      getSwitchProgress: N,
      syncEnvironmentManually: x
    } = fe(), _ = Au(), T = C(null), b = C([]), E = C([]), S = C([]), U = W(() => S.value.find((O) => O.is_current)), P = C(!1), B = C(null), M = C(null), w = C(!1), I = C(!1), $ = C(!1), L = C(""), R = C({ state: "idle", progress: 0, message: "" });
    let K = null, F = null;
    const z = C("status"), X = C("this-env");
    function se(O, k) {
      z.value = O, X.value = k;
    }
    function Ve(O) {
      const oe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[O];
      oe && se(oe.view, oe.section);
    }
    function We() {
      se("branches", "this-env");
    }
    const re = C(null), xe = C(!1), Z = C(!1), Ne = C([]);
    let at = 0;
    function le(O, k = "info", oe = 3e3) {
      const ie = ++at;
      return Ne.value.push({ id: ie, message: O, type: k }), oe > 0 && setTimeout(() => {
        Ne.value = Ne.value.filter((be) => be.id !== ie);
      }, oe), ie;
    }
    function Ce(O) {
      Ne.value = Ne.value.filter((k) => k.id !== O);
    }
    function nt(O) {
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
    const j = W(() => {
      if (!T.value) return "neutral";
      const O = T.value.workflows, k = O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || T.value.has_changes;
      return T.value.comparison.is_synced ? k ? "warning" : "success" : "error";
    });
    W(() => T.value ? j.value === "success" ? "All synced" : j.value === "warning" ? "Uncommitted changes" : j.value === "error" ? "Not synced" : "" : "");
    async function te() {
      P.value = !0, B.value = null;
      try {
        const [O, k, oe, ie] = await Promise.all([
          r(),
          g(),
          h(),
          y()
        ]);
        T.value = O, b.value = k.commits, E.value = oe.branches, S.value = ie, s("statusUpdate", O);
      } catch (O) {
        B.value = O instanceof Error ? O.message : "Failed to load status", T.value = null, b.value = [], E.value = [];
      } finally {
        P.value = !1;
      }
    }
    function de(O) {
      M.value = O;
    }
    async function Ge(O) {
      var oe;
      M.value = null;
      const k = T.value && (T.value.workflows.new.length > 0 || T.value.workflows.modified.length > 0 || T.value.workflows.deleted.length > 0 || T.value.has_changes);
      re.value = {
        title: k ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: k ? "You have uncommitted changes that will be lost." : `Checkout commit ${O.short_hash || ((oe = O.hash) == null ? void 0 : oe.slice(0, 7))}?`,
        details: k ? yt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: k ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: k,
        onConfirm: async () => {
          var ke;
          re.value = null;
          const ie = le(`Checking out ${O.short_hash || ((ke = O.hash) == null ? void 0 : ke.slice(0, 7))}...`, "info", 0), be = await u(O.hash, k);
          Ce(ie), be.status === "success" ? le("Restarting ComfyUI...", "success") : le(be.message || "Checkout failed", "error");
        }
      };
    }
    async function Ze(O) {
      const k = T.value && (T.value.workflows.new.length > 0 || T.value.workflows.modified.length > 0 || T.value.workflows.deleted.length > 0 || T.value.has_changes);
      re.value = {
        title: k ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: k ? "You have uncommitted changes." : `Switch to branch "${O}"?`,
        details: k ? yt() : void 0,
        warning: k ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: k ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          re.value = null;
          const oe = le(`Switching to ${O}...`, "info", 0), ie = await v(O, k);
          Ce(oe), ie.status === "success" ? le("Restarting ComfyUI...", "success") : le(ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function Rt(O) {
      const k = le(`Creating branch ${O}...`, "info", 0), oe = await f(O);
      Ce(k), oe.status === "success" ? (le(`Branch "${O}" created`, "success"), await te()) : le(oe.message || "Failed to create branch", "error");
    }
    async function Ut(O) {
      M.value = null;
      const k = prompt("Enter branch name:");
      if (k) {
        const oe = le(`Creating branch ${k}...`, "info", 0), ie = await f(k, O.hash);
        Ce(oe), ie.status === "success" ? (le(`Branch "${k}" created from ${O.short_hash}`, "success"), await te()) : le(ie.message || "Failed to create branch", "error");
      }
    }
    async function pt(O) {
      w.value = !1, L.value = O, I.value = !0;
    }
    async function Ot() {
      I.value = !1, $.value = !0, R.value = {
        progress: 10,
        state: Je(10),
        message: Qe(10)
      };
      try {
        await D(L.value), Vt(), Wt();
      } catch (O) {
        De(), $.value = !1, le(`Failed to initiate switch: ${O instanceof Error ? O.message : "Unknown error"}`, "error"), R.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Je(O) {
      return O >= 100 ? "complete" : O >= 80 ? "validating" : O >= 60 ? "starting" : O >= 30 ? "syncing" : "preparing";
    }
    function Qe(O) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Je(O)] || "";
    }
    function Vt() {
      if (F) return;
      let O = 10;
      const k = 60, oe = 5e3, ie = 100, be = (k - O) / (oe / ie);
      F = window.setInterval(() => {
        if (O += be, O >= k && (O = k, De()), R.value.progress < k) {
          const ke = Math.floor(O);
          R.value = {
            progress: ke,
            state: Je(ke),
            message: Qe(ke)
          };
        }
      }, ie);
    }
    function De() {
      F && (clearInterval(F), F = null);
    }
    function Wt() {
      K || (K = window.setInterval(async () => {
        try {
          let O = await _.getStatus();
          if ((!O || O.state === "idle") && (O = await N()), !O)
            return;
          const k = O.progress || 0;
          k >= 60 && De();
          const oe = Math.max(k, R.value.progress), ie = O.state && O.state !== "idle" && O.state !== "unknown", be = ie ? O.state : Je(oe), ke = ie && O.message || Qe(oe);
          R.value = {
            state: be,
            progress: oe,
            message: ke
          }, O.state === "complete" ? (De(), lt(), $.value = !1, le(`✓ Switched to ${L.value}`, "success"), await te(), L.value = "") : O.state === "rolled_back" ? (De(), lt(), $.value = !1, le("Switch failed, restored previous environment", "warning"), L.value = "") : O.state === "critical_failure" && (De(), lt(), $.value = !1, le(`Critical error during switch: ${O.message}`, "error"), L.value = "");
        } catch (O) {
          console.error("Failed to poll switch progress:", O);
        }
      }, 1e3));
    }
    function lt() {
      De(), K && (clearInterval(K), K = null);
    }
    function At() {
      I.value = !1, L.value = "";
    }
    async function Ft() {
      xe.value = !1, await te(), le("✓ Changes committed", "success");
    }
    async function Pt() {
      Z.value = !1;
      const O = le("Syncing environment...", "info", 0);
      try {
        const k = await x("skip", !0);
        if (Ce(O), k.status === "success") {
          const oe = [];
          k.nodes_installed.length && oe.push(`${k.nodes_installed.length} installed`), k.nodes_removed.length && oe.push(`${k.nodes_removed.length} removed`);
          const ie = oe.length ? `: ${oe.join(", ")}` : "";
          le(`✓ Environment synced${ie}`, "success"), await te();
        } else {
          const oe = k.errors.length ? k.errors.join("; ") : k.message;
          le(`Sync failed: ${oe}`, "error");
        }
      } catch (k) {
        Ce(O), le(`Sync error: ${k instanceof Error ? k.message : "Unknown error"}`, "error");
      }
    }
    async function Ht(O) {
      const k = le(`Creating environment "${O}"...`, "info", 0);
      Ce(k), le("Environment creation not yet implemented", "warning");
    }
    async function Gt(O) {
      const k = le(`Deleting environment "${O}"...`, "info", 0);
      Ce(k), le("Environment deletion not yet implemented", "warning");
    }
    function jt(O) {
      le(`Viewing details for "${O}"`, "info"), se("models-env", "this-env");
    }
    function yt() {
      if (!T.value) return [];
      const O = [], k = T.value.workflows;
      return k.new.length && O.push(`${k.new.length} new workflow(s)`), k.modified.length && O.push(`${k.modified.length} modified workflow(s)`), k.deleted.length && O.push(`${k.deleted.length} deleted workflow(s)`), O;
    }
    return ve(te), (O, k) => {
      var oe, ie, be, ke;
      return o(), n("div", Fu, [
        t("div", Pu, [
          t("div", Hu, [
            k[27] || (k[27] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            T.value ? (o(), n("div", Gu)) : c("", !0)
          ]),
          t("div", ju, [
            t("button", {
              class: Y(["icon-btn", { spinning: P.value }]),
              onClick: te,
              title: "Refresh"
            }, [...k[28] || (k[28] = [
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
              onClick: k[0] || (k[0] = (Q) => s("close")),
              title: "Close"
            }, [...k[29] || (k[29] = [
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
        t("div", Ku, [
          k[31] || (k[31] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          t("button", {
            class: "env-switcher-btn",
            onClick: k[1] || (k[1] = (Q) => se("environments", "all-envs"))
          }, [
            T.value ? (o(), n("div", qu, [
              t("span", null, i(((oe = U.value) == null ? void 0 : oe.name) || ((ie = T.value) == null ? void 0 : ie.environment) || "Loading..."), 1),
              t("span", Yu, "(" + i(T.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            k[30] || (k[30] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", Xu, [
          t("div", Zu, [
            t("div", Ju, [
              k[32] || (k[32] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "status" && X.value === "this-env" }]),
                onClick: k[2] || (k[2] = (Q) => se("status", "this-env"))
              }, " STATUS ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "workflows" }]),
                onClick: k[3] || (k[3] = (Q) => se("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "models-env" }]),
                onClick: k[4] || (k[4] = (Q) => se("models-env", "this-env"))
              }, " MODELS ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "branches" }]),
                onClick: k[5] || (k[5] = (Q) => se("branches", "this-env"))
              }, " BRANCHES ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "history" }]),
                onClick: k[6] || (k[6] = (Q) => se("history", "this-env"))
              }, " HISTORY ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "nodes" }]),
                onClick: k[7] || (k[7] = (Q) => se("nodes", "this-env"))
              }, " NODES ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "debug-env" }]),
                onClick: k[8] || (k[8] = (Q) => se("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            k[35] || (k[35] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Qu, [
              k[33] || (k[33] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "environments" }]),
                onClick: k[9] || (k[9] = (Q) => se("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "model-index" }]),
                onClick: k[10] || (k[10] = (Q) => se("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "settings" }]),
                onClick: k[11] || (k[11] = (Q) => se("settings", "all-envs"))
              }, " SETTINGS ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "debug-workspace" }]),
                onClick: k[12] || (k[12] = (Q) => se("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            k[36] || (k[36] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", em, [
              k[34] || (k[34] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "export" }]),
                onClick: k[13] || (k[13] = (Q) => se("export", "sharing"))
              }, " EXPORT ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "import" }]),
                onClick: k[14] || (k[14] = (Q) => se("import", "sharing"))
              }, " IMPORT ", 2),
              t("button", {
                class: Y(["sidebar-item", { active: z.value === "remotes" }]),
                onClick: k[15] || (k[15] = (Q) => se("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          t("div", tm, [
            B.value ? (o(), n("div", om, i(B.value), 1)) : !T.value && z.value === "status" ? (o(), n("div", sm, " Loading status... ")) : (o(), n(A, { key: 2 }, [
              z.value === "status" ? (o(), p(Sa, {
                key: 0,
                status: T.value,
                onSwitchBranch: We,
                onCommitChanges: k[16] || (k[16] = (Q) => xe.value = !0),
                onSyncEnvironment: k[17] || (k[17] = (Q) => Z.value = !0),
                onViewWorkflows: k[18] || (k[18] = (Q) => se("workflows", "this-env")),
                onViewHistory: k[19] || (k[19] = (Q) => se("history", "this-env")),
                onViewDebug: k[20] || (k[20] = (Q) => se("debug-env", "this-env"))
              }, null, 8, ["status"])) : z.value === "workflows" ? (o(), p(Gl, {
                key: 1,
                onRefresh: te
              })) : z.value === "models-env" ? (o(), p(ql, {
                key: 2,
                onNavigate: Ve
              })) : z.value === "branches" ? (o(), p(Aa, {
                key: 3,
                branches: E.value,
                current: ((be = T.value) == null ? void 0 : be.branch) || null,
                onSwitch: Ze,
                onCreate: Rt
              }, null, 8, ["branches", "current"])) : z.value === "history" ? (o(), p(Ja, {
                key: 4,
                commits: b.value,
                onSelect: de,
                onCheckout: Ge
              }, null, 8, ["commits"])) : z.value === "nodes" ? (o(), p(ti, { key: 5 })) : z.value === "debug-env" ? (o(), p(or, { key: 6 })) : z.value === "environments" ? (o(), p(fr, {
                key: 7,
                onSwitch: pt,
                onCreate: Ht,
                onDelete: Gt,
                onViewDetails: jt
              })) : z.value === "model-index" ? (o(), p(Xl, { key: 8 })) : z.value === "settings" ? (o(), p(Ji, { key: 9 })) : z.value === "debug-workspace" ? (o(), p(er, { key: 10 })) : z.value === "export" ? (o(), p(Cr, { key: 11 })) : z.value === "import" ? (o(), p(Jc, { key: 12 })) : z.value === "remotes" ? (o(), p(Ti, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        M.value ? (o(), p(hd, {
          key: 0,
          commit: M.value,
          onClose: k[21] || (k[21] = (Q) => M.value = null),
          onCheckout: Ge,
          onCreateBranch: Ut
        }, null, 8, ["commit"])) : c("", !0),
        re.value ? (o(), p(kd, {
          key: 1,
          title: re.value.title,
          message: re.value.message,
          details: re.value.details,
          warning: re.value.warning,
          confirmLabel: re.value.confirmLabel,
          cancelLabel: re.value.cancelLabel,
          secondaryLabel: re.value.secondaryLabel,
          secondaryAction: re.value.secondaryAction,
          destructive: re.value.destructive,
          onConfirm: re.value.onConfirm,
          onCancel: k[22] || (k[22] = (Q) => re.value = null),
          onSecondary: re.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        d(pu, {
          show: I.value,
          "from-environment": ((ke = U.value) == null ? void 0 : ke.name) || "unknown",
          "to-environment": L.value,
          onConfirm: Ot,
          onClose: At
        }, null, 8, ["show", "from-environment", "to-environment"]),
        xe.value && T.value ? (o(), p(Lt, {
          key: 2,
          status: T.value,
          "as-modal": !0,
          onClose: k[23] || (k[23] = (Q) => xe.value = !1),
          onCommitted: Ft
        }, null, 8, ["status"])) : c("", !0),
        Z.value && T.value ? (o(), p(Wu, {
          key: 3,
          show: Z.value,
          "mismatch-details": {
            missing_nodes: T.value.comparison.missing_nodes,
            extra_nodes: T.value.comparison.extra_nodes
          },
          onConfirm: Pt,
          onClose: k[24] || (k[24] = (Q) => Z.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        d(Lu, {
          show: $.value,
          state: R.value.state,
          progress: R.value.progress,
          message: R.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        w.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: k[26] || (k[26] = ge((Q) => w.value = !1, ["self"]))
        }, [
          t("div", am, [
            t("div", nm, [
              k[38] || (k[38] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: k[25] || (k[25] = (Q) => w.value = !1)
              }, [...k[37] || (k[37] = [
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
            t("div", lm, [
              k[39] || (k[39] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", im, [
                (o(!0), n(A, null, q(S.value, (Q) => (o(), n("div", {
                  key: Q.name,
                  class: Y(["env-item", { current: Q.is_current }])
                }, [
                  t("div", rm, [
                    t("div", cm, [
                      t("span", dm, i(Q.is_current ? "●" : "○"), 1),
                      t("span", um, i(Q.name), 1),
                      Q.current_branch ? (o(), n("span", mm, "(" + i(Q.current_branch) + ")", 1)) : c("", !0),
                      Q.is_current ? (o(), n("span", vm, "CURRENT")) : c("", !0)
                    ]),
                    t("div", fm, i(Q.workflow_count) + " workflows • " + i(Q.node_count) + " nodes ", 1)
                  ]),
                  Q.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Lm) => pt(Q.name)
                  }, " SWITCH ", 8, gm))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        t("div", hm, [
          d(Xt, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(A, null, q(Ne.value, (Q) => (o(), n("div", {
                key: Q.id,
                class: Y(["toast", Q.type])
              }, [
                t("span", pm, i(nt(Q.type)), 1),
                t("span", ym, i(Q.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), bm = /* @__PURE__ */ G(wm, [["__scopeId", "data-v-2c8b25b1"]]), km = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', _m = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', $m = {
  comfy: km,
  phosphor: _m
}, gt = "comfy", Nt = "comfygit-theme";
let Re = null, Bt = gt;
function Cm() {
  try {
    const e = localStorage.getItem(Nt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return gt;
}
function Tt(e = gt) {
  Re && Re.remove(), Re = document.createElement("style"), Re.id = "comfygit-theme-styles", Re.setAttribute("data-theme", e), Re.textContent = $m[e], document.head.appendChild(Re), document.body.setAttribute("data-comfygit-theme", e), Bt = e;
  try {
    localStorage.setItem(Nt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function xm() {
  return Bt;
}
function Sm(e) {
  Tt(e);
}
const ht = document.createElement("link");
ht.rel = "stylesheet";
ht.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ht);
const Em = Cm();
Tt(Em);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Sm(e);
  },
  getTheme: () => {
    const e = xm();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let _e = null, ye = null, qe = null;
const Fe = C(null);
async function vt() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && (Fe.value = await l.json());
  } catch {
  }
}
function Im() {
  if (!Fe.value) return !1;
  const e = Fe.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Fe.value.has_changes;
}
function zm() {
  _e && _e.remove(), _e = document.createElement("div"), _e.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", _e.appendChild(e), _e.addEventListener("click", (r) => {
    r.target === _e && dt();
  });
  const l = (r) => {
    r.key === "Escape" && (dt(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), St({
    render: () => Et(bm, {
      onClose: dt,
      onStatusUpdate: (r) => {
        Fe.value = r, ot();
      }
    })
  }).mount(e), document.body.appendChild(_e);
}
function dt() {
  _e && (_e.remove(), _e = null);
}
function Mm(e) {
  Ke(), ye = document.createElement("div"), ye.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  ye.style.position = "fixed", ye.style.top = `${l.bottom + 8}px`, ye.style.right = `${window.innerWidth - l.right}px`, ye.style.zIndex = "10001";
  const s = (g) => {
    ye && !ye.contains(g.target) && g.target !== e && (Ke(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (g) => {
    g.key === "Escape" && (Ke(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), qe = St({
    render: () => Et(Lt, {
      status: Fe.value,
      onClose: Ke,
      onCommitted: () => {
        Ke(), vt().then(ot);
      }
    })
  }), qe.mount(ye), document.body.appendChild(ye);
}
function Ke() {
  qe && (qe.unmount(), qe = null), ye && (ye.remove(), ye = null);
}
let Ee = null;
function ot() {
  if (!Ee) return;
  const e = Ee.querySelector(".commit-indicator");
  e && (e.style.display = Im() ? "block" : "none");
}
const Dt = document.createElement("style");
Dt.textContent = `
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
document.head.appendChild(Dt);
it.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = zm, Ee = document.createElement("button"), Ee.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ee.innerHTML = 'Commit <span class="commit-indicator"></span>', Ee.title = "Quick Commit", Ee.onclick = () => Mm(Ee), e.appendChild(l), e.appendChild(Ee), (r = (s = it.menu) == null ? void 0 : s.settingsGroup) != null && r.element && (it.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await vt(), ot(), setInterval(async () => {
      await vt(), ot();
    }, 3e4);
  }
});
