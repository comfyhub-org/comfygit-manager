import { app as ut } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as s, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as le, createBlock as b, resolveDynamicComponent as pt, normalizeClass as Q, withCtx as n, toDisplayString as i, createVNode as c, createTextVNode as m, computed as O, Fragment as j, renderList as Z, normalizeStyle as et, ref as C, onMounted as he, watch as Et, Teleport as ze, withModifiers as fe, Transition as Yt, withKeys as Te, onUnmounted as Xt, resolveComponent as Zt, createSlots as zt, TransitionGroup as Jt, createApp as Mt, h as Lt } from "vue";
const Qt = { class: "panel-layout" }, eo = {
  key: 0,
  class: "panel-layout-header"
}, to = {
  key: 1,
  class: "panel-layout-search"
}, oo = { class: "panel-layout-content" }, so = {
  key: 2,
  class: "panel-layout-footer"
}, ao = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (r, a) => (o(), s("div", Qt, [
      r.$slots.header ? (o(), s("div", eo, [
        le(r.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      r.$slots.search ? (o(), s("div", to, [
        le(r.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", oo, [
        le(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (o(), s("div", so, [
        le(r.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Y = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [l, v] of r)
    a[l] = v;
  return a;
}, ye = /* @__PURE__ */ Y(ao, [["__scopeId", "data-v-21565df9"]]), no = {
  key: 0,
  class: "panel-title-prefix"
}, lo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, io = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, a) => (o(), b(pt(`h${t.level}`), {
      class: Q(["panel-title", t.variant])
    }, {
      default: n(() => [
        t.showPrefix ? (o(), s("span", no, i(t.prefix), 1)) : (o(), s("span", lo)),
        le(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ro = /* @__PURE__ */ Y(io, [["__scopeId", "data-v-c3875efc"]]), co = ["title"], uo = ["width", "height"], mo = /* @__PURE__ */ q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: a[0] || (a[0] = (l) => r.$emit("click"))
    }, [
      (o(), s("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...a[1] || (a[1] = [
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
      ])], 8, uo))
    ], 8, co));
  }
}), Rt = /* @__PURE__ */ Y(mo, [["__scopeId", "data-v-6fc7f16d"]]), vo = { class: "header-left" }, fo = {
  key: 0,
  class: "header-actions"
}, go = /* @__PURE__ */ q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, a) => (o(), s("div", {
      class: Q(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", vo, [
        c(ro, { "show-prefix": t.showPrefix }, {
          default: n(() => [
            m(i(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), b(Rt, {
          key: 0,
          onClick: a[0] || (a[0] = (l) => r.$emit("info-click"))
        })) : d("", !0)
      ]),
      r.$slots.actions ? (o(), s("div", fo, [
        le(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), we = /* @__PURE__ */ Y(go, [["__scopeId", "data-v-55a62cd6"]]), ho = {
  key: 0,
  class: "section-title-count"
}, po = {
  key: 1,
  class: "section-title-icon"
}, yo = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (o(), b(pt(`h${t.level}`), {
      class: Q(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (l) => t.clickable && r.$emit("click"))
    }, {
      default: n(() => [
        le(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", ho, "(" + i(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), s("span", po, i(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _e = /* @__PURE__ */ Y(yo, [["__scopeId", "data-v-559361eb"]]), wo = { class: "status-grid" }, ko = { class: "status-grid__column" }, bo = { class: "status-grid__title" }, _o = { class: "status-grid__column status-grid__column--right" }, $o = { class: "status-grid__title" }, Co = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, a) => (o(), s("div", wo, [
      e("div", ko, [
        e("h4", bo, i(t.leftTitle), 1),
        le(r.$slots, "left", {}, void 0, !0)
      ]),
      e("div", _o, [
        e("h4", $o, i(t.rightTitle), 1),
        le(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), xo = /* @__PURE__ */ Y(Co, [["__scopeId", "data-v-fe556068"]]), So = {
  key: 0,
  class: "status-item__icon"
}, Io = {
  key: 1,
  class: "status-item__count"
}, Eo = { class: "status-item__label" }, zo = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, a = O(() => `status-item--${r.variant}`);
    return (l, v) => (o(), s("div", {
      class: Q(["status-item", a.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", So, i(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), s("span", Io, i(t.count), 1)) : d("", !0),
      e("span", Eo, i(t.label), 1)
    ], 2));
  }
}), Ne = /* @__PURE__ */ Y(zo, [["__scopeId", "data-v-6f929183"]]), Mo = { class: "issue-card__header" }, Lo = { class: "issue-card__icon" }, Ro = { class: "issue-card__title" }, No = {
  key: 0,
  class: "issue-card__content"
}, Uo = {
  key: 0,
  class: "issue-card__description"
}, To = {
  key: 1,
  class: "issue-card__items"
}, Bo = {
  key: 2,
  class: "issue-card__actions"
}, Do = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, a = O(() => `issue-card--${r.severity}`);
    return (l, v) => (o(), s("div", {
      class: Q(["issue-card", a.value])
    }, [
      e("div", Mo, [
        e("span", Lo, i(t.icon), 1),
        e("h4", Ro, i(t.title), 1)
      ]),
      l.$slots.default || t.description ? (o(), s("div", No, [
        t.description ? (o(), s("p", Uo, i(t.description), 1)) : d("", !0),
        le(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), s("div", To, [
        (o(!0), s(j, null, Z(t.items, (p, f) => (o(), s("div", {
          key: f,
          class: "issue-card__item"
        }, [
          v[0] || (v[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, i(p), 1)
        ]))), 128))
      ])) : d("", !0),
      l.$slots.actions ? (o(), s("div", Bo, [
        le(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Pe = /* @__PURE__ */ Y(Do, [["__scopeId", "data-v-df6aa348"]]), Oo = ["type", "disabled"], Vo = {
  key: 0,
  class: "spinner"
}, Ao = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Q(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (l) => r.$emit("click", l))
    }, [
      t.loading ? (o(), s("span", Vo)) : d("", !0),
      t.loading ? d("", !0) : le(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Oo));
  }
}), H = /* @__PURE__ */ Y(Ao, [["__scopeId", "data-v-772abe47"]]), Fo = { class: "empty-state" }, Wo = {
  key: 0,
  class: "empty-icon"
}, Po = { class: "empty-message" }, Ho = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, a) => (o(), s("div", Fo, [
      t.icon ? (o(), s("div", Wo, i(t.icon), 1)) : d("", !0),
      e("p", Po, i(t.message), 1),
      t.actionLabel ? (o(), b(H, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (l) => r.$emit("action"))
      }, {
        default: n(() => [
          m(i(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ Y(Ho, [["__scopeId", "data-v-4466284f"]]), Go = { class: "branch-indicator" }, jo = { class: "branch-indicator__info" }, Ko = { class: "branch-indicator__label" }, qo = { class: "branch-indicator__name" }, Yo = {
  key: 0,
  class: "branch-indicator__remote"
}, Xo = {
  key: 0,
  class: "branch-indicator__status"
}, Zo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Jo = {
  key: 1,
  class: "branch-indicator__behind"
}, Qo = {
  key: 1,
  class: "branch-indicator__actions"
}, es = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("div", Go, [
      e("div", jo, [
        e("span", Ko, i(t.label), 1),
        e("span", qo, i(t.branchName), 1),
        t.remote ? (o(), s("span", Yo, "@" + i(t.remote), 1)) : d("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), s("div", Xo, [
        t.commitsAhead ? (o(), s("span", Zo, " ↑ " + i(t.commitsAhead) + " ahead ", 1)) : d("", !0),
        t.commitsBehind ? (o(), s("span", Jo, " ↓ " + i(t.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      r.$slots.actions ? (o(), s("div", Qo, [
        le(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ Y(es, [["__scopeId", "data-v-cb8dd50e"]]), os = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, a) => (o(), s("span", {
      class: Q(["detail-label"]),
      style: et({ minWidth: t.minWidth })
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ft = /* @__PURE__ */ Y(os, [["__scopeId", "data-v-75e9eeb8"]]), ss = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (o(), s("span", {
      class: Q(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ Y(ss, [["__scopeId", "data-v-2f186e4c"]]), as = { class: "detail-row" }, ns = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("div", as, [
      c(ft, { "min-width": t.labelMinWidth }, {
        default: n(() => [
          m(i(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), b(gt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: n(() => [
          m(i(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : le(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ae = /* @__PURE__ */ Y(ns, [["__scopeId", "data-v-ef15664a"]]), ls = { class: "modal-header" }, is = { class: "modal-body" }, rs = { class: "status-section" }, ds = {
  key: 0,
  class: "status-section"
}, cs = {
  key: 0,
  class: "workflow-group"
}, us = { class: "workflow-group-header" }, ms = { class: "workflow-group-title" }, vs = { class: "workflow-list" }, fs = { class: "workflow-name" }, gs = { class: "workflow-issue" }, hs = {
  key: 1,
  class: "workflow-group"
}, ps = { class: "workflow-group-header" }, ys = { class: "workflow-group-title" }, ws = { class: "workflow-list" }, ks = { class: "workflow-name" }, bs = { class: "workflow-issue" }, _s = {
  key: 2,
  class: "workflow-group"
}, $s = { class: "workflow-group-header" }, Cs = { class: "workflow-group-title" }, xs = { class: "workflow-list" }, Ss = { class: "workflow-name" }, Is = {
  key: 3,
  class: "workflow-group"
}, Es = { class: "workflow-group-header" }, zs = { class: "workflow-group-title" }, Ms = { class: "workflow-list" }, Ls = { class: "workflow-name" }, Rs = {
  key: 4,
  class: "workflow-group"
}, Ns = { class: "workflow-group-header" }, Us = { class: "workflow-group-title" }, Ts = { class: "workflow-list" }, Bs = { class: "workflow-name" }, Ds = {
  key: 5,
  class: "workflow-group"
}, Os = { class: "workflow-group-title" }, Vs = { class: "expand-icon" }, As = {
  key: 0,
  class: "workflow-list"
}, Fs = { class: "workflow-name" }, Ws = {
  key: 1,
  class: "status-section"
}, Ps = {
  key: 0,
  class: "change-group"
}, Hs = { class: "change-group-header" }, Gs = { class: "change-group-title" }, js = { class: "change-list" }, Ks = { class: "node-name" }, qs = {
  key: 0,
  class: "dev-badge"
}, Ys = {
  key: 1,
  class: "change-group"
}, Xs = { class: "change-group-header" }, Zs = { class: "change-group-title" }, Js = { class: "change-list" }, Qs = { class: "node-name" }, ea = {
  key: 0,
  class: "dev-badge"
}, ta = {
  key: 2,
  class: "change-group"
}, oa = { class: "change-list" }, sa = { class: "change-item" }, aa = { class: "node-name" }, na = {
  key: 3,
  class: "change-group"
}, la = {
  key: 2,
  class: "status-section"
}, ia = {
  key: 0,
  class: "drift-item"
}, ra = { class: "drift-list" }, da = {
  key: 0,
  class: "drift-list-more"
}, ca = {
  key: 1,
  class: "drift-item"
}, ua = { class: "drift-list" }, ma = {
  key: 0,
  class: "drift-list-more"
}, va = {
  key: 2,
  class: "drift-item"
}, fa = {
  key: 3,
  class: "drift-item"
}, ga = {
  key: 3,
  class: "status-section"
}, ha = { class: "info-box" }, pa = { class: "drift-list" }, ya = {
  key: 0,
  class: "drift-list-more"
}, wa = {
  key: 4,
  class: "status-section"
}, ka = { class: "warning-box" }, ba = {
  key: 5,
  class: "empty-state-inline"
}, _a = { class: "modal-actions" }, $a = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const r = t, a = C(!1);
    he(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), Et(() => r.show, (y, w) => {
      console.log("StatusDetailModal show prop changed from", w, "to", y);
    }, { immediate: !0 });
    const l = O(() => {
      var y, w, I;
      return ((I = (w = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : I.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), v = O(() => {
      var y, w, I;
      return ((I = (w = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : I.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), p = O(() => {
      var y, w, I;
      return ((I = (w = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : w.synced) == null ? void 0 : I.filter(($) => {
        var z, T, G;
        const E = (G = (T = (z = r.status) == null ? void 0 : z.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : G.find((U) => U.name === $);
        return !E || E.status !== "broken";
      })) || [];
    }), f = O(() => {
      var y, w, I, $, E;
      return (y = r.status) != null && y.workflows ? (((w = r.status.workflows.new) == null ? void 0 : w.length) ?? 0) > 0 || (((I = r.status.workflows.modified) == null ? void 0 : I.length) ?? 0) > 0 || ((($ = r.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((E = r.status.workflows.synced) == null ? void 0 : E.length) ?? 0) > 0 : !1;
    }), h = O(() => {
      var w, I, $;
      const y = (w = r.status) == null ? void 0 : w.git_changes;
      return y ? (((I = y.nodes_added) == null ? void 0 : I.length) ?? 0) > 0 || ((($ = y.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || y.workflow_changes || y.has_other_changes : !1;
    }), u = O(() => {
      var y, w, I, $, E, z;
      return !f.value && !h.value && ((w = (y = r.status) == null ? void 0 : y.comparison) == null ? void 0 : w.is_synced) && (((I = r.status) == null ? void 0 : I.missing_models_count) ?? 0) === 0 && (((z = (E = ($ = r.status) == null ? void 0 : $.comparison) == null ? void 0 : E.disabled_nodes) == null ? void 0 : z.length) ?? 0) === 0;
    }), g = O(() => {
      var w, I;
      const y = (I = (w = r.status) == null ? void 0 : w.git_changes) == null ? void 0 : I.workflow_changes;
      return y ? typeof y == "number" ? y : Object.keys(y).length : 0;
    });
    function k(y) {
      return typeof y == "string" ? y : y.name;
    }
    function _(y) {
      return typeof y == "object" && y.is_development === !0;
    }
    return (y, w) => {
      var I, $, E, z, T, G, U, F, L, V, M, R, N, P, K, S, D, se, $e, Ce, te, pe;
      return o(), b(ze, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: w[4] || (w[4] = (ee) => y.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: w[3] || (w[3] = fe(() => {
            }, ["stop"]))
          }, [
            e("div", ls, [
              w[5] || (w[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: w[0] || (w[0] = (ee) => y.$emit("close"))
              }, "✕")
            ]),
            e("div", is, [
              e("div", rs, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[6] || (w[6] = [
                    m("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                c(ae, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              f.value ? (o(), s("div", ds, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[7] || (w[7] = [
                    m("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                l.value.length ? (o(), s("div", cs, [
                  e("div", us, [
                    w[8] || (w[8] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ms, "BROKEN (COMMITTED) (" + i(l.value.length) + ")", 1)
                  ]),
                  e("div", vs, [
                    (o(!0), s(j, null, Z(l.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", fs, i(ee.name), 1),
                      e("span", gs, i(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                v.value.length ? (o(), s("div", hs, [
                  e("div", ps, [
                    w[9] || (w[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ys, "BROKEN (UNCOMMITTED) (" + i(v.value.length) + ")", 1)
                  ]),
                  e("div", ws, [
                    (o(!0), s(j, null, Z(v.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", ks, i(ee.name), 1),
                      e("span", bs, i(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                ($ = (I = t.status.workflows) == null ? void 0 : I.new) != null && $.length ? (o(), s("div", _s, [
                  e("div", $s, [
                    w[10] || (w[10] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Cs, "NEW (" + i(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", xs, [
                    (o(!0), s(j, null, Z(t.status.workflows.new, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Ss, i(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (z = (E = t.status.workflows) == null ? void 0 : E.modified) != null && z.length ? (o(), s("div", Is, [
                  e("div", Es, [
                    w[11] || (w[11] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", zs, "MODIFIED (" + i(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), s(j, null, Z(t.status.workflows.modified, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Ls, i(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (G = (T = t.status.workflows) == null ? void 0 : T.deleted) != null && G.length ? (o(), s("div", Rs, [
                  e("div", Ns, [
                    w[12] || (w[12] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Us, "DELETED (" + i(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ts, [
                    (o(!0), s(j, null, Z(t.status.workflows.deleted, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Bs, i(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (o(), s("div", Ds, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: w[1] || (w[1] = (ee) => a.value = !a.value)
                  }, [
                    w[13] || (w[13] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Os, "SYNCED (" + i(p.value.length) + ")", 1),
                    e("span", Vs, i(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (o(), s("div", As, [
                    (o(!0), s(j, null, Z(p.value, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Fs, i(ee), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              h.value ? (o(), s("div", Ws, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[14] || (w[14] = [
                    m("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (F = (U = t.status.git_changes) == null ? void 0 : U.nodes_added) != null && F.length ? (o(), s("div", Ps, [
                  e("div", Hs, [
                    w[15] || (w[15] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Gs, "NODES ADDED (" + i(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), s(j, null, Z(t.status.git_changes.nodes_added, (ee) => (o(), s("div", {
                      key: k(ee),
                      class: "change-item"
                    }, [
                      e("span", Ks, i(k(ee)), 1),
                      _(ee) ? (o(), s("span", qs, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (V = (L = t.status.git_changes) == null ? void 0 : L.nodes_removed) != null && V.length ? (o(), s("div", Ys, [
                  e("div", Xs, [
                    w[16] || (w[16] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Zs, "NODES REMOVED (" + i(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Js, [
                    (o(!0), s(j, null, Z(t.status.git_changes.nodes_removed, (ee) => (o(), s("div", {
                      key: k(ee),
                      class: "change-item"
                    }, [
                      e("span", Qs, i(k(ee)), 1),
                      _(ee) ? (o(), s("span", ea, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (M = t.status.git_changes) != null && M.workflow_changes ? (o(), s("div", ta, [
                  w[17] || (w[17] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", oa, [
                    e("div", sa, [
                      e("span", aa, i(g.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (R = t.status.git_changes) != null && R.has_other_changes ? (o(), s("div", na, [...w[18] || (w[18] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : d("", !0)
              ])) : d("", !0),
              (N = t.status.comparison) != null && N.is_synced ? d("", !0) : (o(), s("div", la, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[19] || (w[19] = [
                    m("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                w[20] || (w[20] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (K = (P = t.status.comparison) == null ? void 0 : P.missing_nodes) != null && K.length ? (o(), s("div", ia, [
                  c(ae, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ra, [
                    (o(!0), s(j, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + i(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", da, " ... and " + i(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (D = (S = t.status.comparison) == null ? void 0 : S.extra_nodes) != null && D.length ? (o(), s("div", ca, [
                  c(ae, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ua, [
                    (o(!0), s(j, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + i(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", ma, " ... and " + i(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ($e = (se = t.status.comparison) == null ? void 0 : se.version_mismatches) != null && $e.length ? (o(), s("div", va, [
                  c(ae, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (Ce = t.status.comparison) != null && Ce.packages_in_sync ? d("", !0) : (o(), s("div", fa, [
                  c(ae, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (pe = (te = t.status.comparison) == null ? void 0 : te.disabled_nodes) != null && pe.length ? (o(), s("div", ga, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[21] || (w[21] = [
                    m("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ha, [
                  w[22] || (w[22] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, i(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", pa, [
                  (o(!0), s(j, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), s("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + i(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", ya, " ... and " + i(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", wa, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[23] || (w[23] = [
                    m("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ka, [
                  w[24] || (w[24] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, i(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                w[25] || (w[25] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              u.value ? (o(), s("div", ba, [...w[26] || (w[26] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", _a, [
              c(H, {
                variant: "secondary",
                onClick: w[2] || (w[2] = (ee) => y.$emit("close"))
              }, {
                default: n(() => [...w[27] || (w[27] = [
                  m(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), $t = /* @__PURE__ */ Y($a, [["__scopeId", "data-v-c2264f66"]]), Ca = { class: "health-section-header" }, xa = { style: { "margin-top": "var(--cg-space-1)" } }, Sa = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Ia = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: r }) {
    const a = t, l = C(!1), v = C(!1);
    he(() => {
      console.log("StatusSection mounted with status:", a.status), console.log("StatusDetailModal component imported:", $t);
    });
    function p() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    function f() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    const h = O(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), u = O(() => {
      const z = a.status.git_changes;
      return z.nodes_added.length > 0 || z.nodes_removed.length > 0 || z.workflow_changes || z.has_other_changes;
    }), g = O(() => h.value || u.value), k = O(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), _ = O(() => a.status.git_changes.has_other_changes), y = O(() => {
      var z;
      return ((z = a.status.workflows.analyzed) == null ? void 0 : z.filter(
        (T) => T.status === "broken" && T.sync_state === "synced"
      )) || [];
    }), w = O(() => {
      var z;
      return ((z = a.status.workflows.analyzed) == null ? void 0 : z.filter(
        (T) => T.status === "broken" && T.sync_state !== "synced"
      )) || [];
    }), I = O(() => y.value.length > 0 || w.value.length > 0), $ = O(() => I.value || a.status.missing_models_count > 0 || g.value || !a.status.comparison.is_synced), E = O(() => {
      const z = [];
      return a.status.workflows.new.length > 0 && z.push(`${a.status.workflows.new.length} new workflow${a.status.workflows.new.length === 1 ? "" : "s"}`), a.status.workflows.modified.length > 0 && z.push(`${a.status.workflows.modified.length} modified workflow${a.status.workflows.modified.length === 1 ? "" : "s"}`), a.status.workflows.deleted.length > 0 && z.push(`${a.status.workflows.deleted.length} deleted workflow${a.status.workflows.deleted.length === 1 ? "" : "s"}`), a.status.git_changes.nodes_added.length > 0 && z.push(`${a.status.git_changes.nodes_added.length} node${a.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), a.status.git_changes.nodes_removed.length > 0 && z.push(`${a.status.git_changes.nodes_removed.length} node${a.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${z.length > 0 ? z.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (z, T) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, { title: "STATUS" })
        ]),
        content: n(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[0] || (T[0] = (G) => v.value = !0),
            onMouseleave: T[1] || (T[1] = (G) => v.value = !1)
          }, [
            e("div", Ca, [
              c(_e, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: n(() => [...T[11] || (T[11] = [
                  m(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              c(Yt, { name: "fade" }, {
                default: n(() => [
                  v.value ? (o(), b(H, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: n(() => [...T[12] || (T[12] = [
                      m(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            c(xo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: n(() => [
                t.status.workflows.new.length ? (o(), b(Ne, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), b(Ne, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), b(Ne, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                c(Ne, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: h.value
                }, null, 8, ["count", "separator"])
              ]),
              right: n(() => [
                t.status.git_changes.nodes_added.length ? (o(), b(Ne, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), b(Ne, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (o(), b(Ne, {
                  key: 2,
                  icon: "●",
                  count: k.value,
                  label: k.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                _.value ? (o(), b(Ne, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                u.value ? d("", !0) : (o(), b(Ne, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", xa, [
            c(ts, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: n(() => [
                c(H, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[2] || (T[2] = (G) => z.$emit("switch-branch"))
                }, {
                  default: n(() => [...T[13] || (T[13] = [
                    m(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), b(Pe, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: n(() => [
              c(H, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (G) => z.$emit("create-branch"))
              }, {
                default: n(() => [...T[14] || (T[14] = [
                  m(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          $.value ? (o(), s("div", Sa, [
            c(_e, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: n(() => [...T[15] || (T[15] = [
                m(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            y.value.length > 0 ? (o(), b(Pe, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${y.value.length} committed workflow${y.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: y.value.map((G) => `${G.name} — ${G.issue_summary}`)
            }, {
              actions: n(() => [
                c(H, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (G) => z.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[16] || (T[16] = [
                    m(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            w.value.length > 0 ? (o(), b(Pe, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: w.value.map((G) => `${G.name} — ${G.issue_summary}`)
            }, {
              actions: n(() => [
                c(H, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (G) => z.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[17] || (T[17] = [
                    m(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            t.status.missing_models_count > 0 && !I.value ? (o(), b(Pe, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: n(() => [
                c(H, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (G) => z.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[18] || (T[18] = [
                    m(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : d("", !0),
            g.value ? (o(), b(Pe, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: E.value
            }, {
              actions: n(() => [
                c(H, {
                  variant: "secondary",
                  size: "sm",
                  onClick: f
                }, {
                  default: n(() => [...T[19] || (T[19] = [
                    m(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                c(H, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (G) => z.$emit("commit-changes"))
                }, {
                  default: n(() => [...T[20] || (T[20] = [
                    m(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : d("", !0),
            t.status.comparison.is_synced ? d("", !0) : (o(), b(Pe, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: n(() => [
                c(H, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (G) => z.$emit("view-debug"))
                }, {
                  default: n(() => [...T[21] || (T[21] = [
                    m(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                c(H, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[9] || (T[9] = (G) => z.$emit("sync-environment"))
                }, {
                  default: n(() => [...T[22] || (T[22] = [
                    m(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : d("", !0),
          !$.value && !u.value ? (o(), b(Me, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : d("", !0)
        ]),
        _: 1
      }),
      c($t, {
        show: l.value,
        status: t.status,
        onClose: T[10] || (T[10] = (G) => l.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Ea = /* @__PURE__ */ Y(Ia, [["__scopeId", "data-v-aabebf39"]]), za = ["type", "value", "placeholder", "disabled"], Ma = /* @__PURE__ */ q({
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
  setup(t, { expose: r, emit: a }) {
    const l = t, v = a, p = C(null);
    function f(h) {
      const u = h.target.value;
      v("update:modelValue", u);
    }
    return he(() => {
      l.autoFocus && p.value && p.value.focus();
    }), r({
      focus: () => {
        var h;
        return (h = p.value) == null ? void 0 : h.focus();
      },
      blur: () => {
        var h;
        return (h = p.value) == null ? void 0 : h.blur();
      }
    }), (h, u) => (o(), s("input", {
      ref_key: "inputRef",
      ref: p,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: Q(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: f,
      onKeyup: [
        u[0] || (u[0] = Te((g) => h.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Te((g) => h.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (g) => h.$emit("focus")),
      onBlur: u[3] || (u[3] = (g) => h.$emit("blur"))
    }, null, 42, za));
  }
}), Qe = /* @__PURE__ */ Y(Ma, [["__scopeId", "data-v-0380d08f"]]), La = { class: "branch-create-form" }, Ra = { class: "form-actions" }, Na = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const a = r, l = C(""), v = O(() => {
      const h = l.value.trim();
      return h.length > 0 && !h.startsWith("-") && !h.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(h);
    });
    function p() {
      v.value && (a("create", l.value.trim()), l.value = "");
    }
    function f() {
      l.value = "", a("cancel");
    }
    return (h, u) => (o(), s("div", La, [
      c(Qe, {
        modelValue: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (g) => l.value = g),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: f
      }, null, 8, ["modelValue"]),
      e("div", Ra, [
        c(H, {
          variant: "primary",
          size: "sm",
          disabled: !v.value,
          onClick: p
        }, {
          default: n(() => [...u[1] || (u[1] = [
            m(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        c(H, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: n(() => [...u[2] || (u[2] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ua = /* @__PURE__ */ Y(Na, [["__scopeId", "data-v-7c500394"]]), Ta = { class: "branch-list-item__indicator" }, Ba = { class: "branch-list-item__name" }, Da = {
  key: 0,
  class: "branch-list-item__actions"
}, Oa = {
  key: 0,
  class: "branch-list-item__current-label"
}, Va = /* @__PURE__ */ q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (o(), s("div", {
      class: Q(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (l) => t.clickable && r.$emit("click"))
    }, [
      e("span", Ta, i(t.isCurrent ? "●" : "○"), 1),
      e("span", Ba, i(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (o(), s("div", Da, [
        le(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", Oa, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Aa = /* @__PURE__ */ Y(Va, [["__scopeId", "data-v-c6581a24"]]), Fa = {
  key: 2,
  class: "branch-list"
}, Wa = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: r }) {
    const a = r, l = C(!1);
    function v(f) {
      a("create", f), p();
    }
    function p() {
      l.value = !1;
    }
    return (f, h) => (o(), b(ye, null, {
      header: n(() => [
        c(we, { title: "BRANCHES" }, {
          actions: n(() => [
            c(H, {
              variant: "ghost",
              size: "sm",
              onClick: h[0] || (h[0] = (u) => l.value = !0),
              title: "Create new branch"
            }, {
              default: n(() => [...h[1] || (h[1] = [
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
      content: n(() => [
        l.value ? (o(), b(Ua, {
          key: 0,
          onCreate: v,
          onCancel: p
        })) : d("", !0),
        t.branches.length === 0 ? (o(), b(Me, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", Fa, [
          (o(!0), s(j, null, Z(t.branches, (u) => (o(), b(Aa, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: n(() => [
              u.is_current ? d("", !0) : (o(), b(H, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (g) => f.$emit("switch", u.name)
              }, {
                default: n(() => [...h[2] || (h[2] = [
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
}), Pa = /* @__PURE__ */ Y(Wa, [["__scopeId", "data-v-763d6ec4"]]), Ha = { class: "commit-list" }, Ga = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (r, a) => (o(), s("div", Ha, [
      le(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ja = /* @__PURE__ */ Y(Ga, [["__scopeId", "data-v-8c5ee761"]]), Ka = { class: "commit-hash" }, qa = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, a = O(() => r.hash.slice(0, r.length));
    return (l, v) => (o(), s("span", Ka, i(a.value), 1));
  }
}), Nt = /* @__PURE__ */ Y(qa, [["__scopeId", "data-v-7c333cc6"]]), Ya = { class: "commit-message" }, Xa = { class: "commit-date" }, Za = /* @__PURE__ */ q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, l = r;
    function v() {
      a.clickable && l("click");
    }
    return (p, f) => (o(), s("div", {
      class: Q(["commit-item", { clickable: t.clickable }]),
      onClick: v
    }, [
      c(Nt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ya, i(t.message), 1),
      e("span", Xa, i(t.relativeDate), 1),
      p.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = fe(() => {
        }, ["stop"]))
      }, [
        le(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ja = /* @__PURE__ */ Y(Za, [["__scopeId", "data-v-dd7c621b"]]), Qa = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, a) => (o(), b(ye, null, {
      header: n(() => [
        c(we, { title: "HISTORY" })
      ]),
      content: n(() => [
        t.commits.length === 0 ? (o(), b(Me, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), b(ja, { key: 1 }, {
          default: n(() => [
            (o(!0), s(j, null, Z(t.commits, (l) => (o(), b(Ja, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (v) => r.$emit("select", l)
            }, {
              actions: n(() => [
                c(H, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (v) => r.$emit("checkout", l),
                  title: "Checkout this commit"
                }, {
                  default: n(() => [...a[0] || (a[0] = [
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
}), en = /* @__PURE__ */ Y(Qa, [["__scopeId", "data-v-981c3c64"]]), Ct = [
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
  ...Array(12).fill(null).map((t, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], tn = {
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
}, Ut = [
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
], on = [
  ...Ut,
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
], nt = [
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
], sn = [
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
], lt = [
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
], de = {
  // Environment Management
  getEnvironments: async () => (await re(300), [
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
  switchEnvironment: async (t) => {
    await re(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, a) => {
    await re(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (t) => {
    await re(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await re(400), Ct),
  getWorkflowDetails: async (t) => (await re(300), tn[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await re(800), {
    workflow_name: t,
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
        workflow: t,
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
        workflow: t,
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
        workflow: t,
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
  installWorkflowDeps: async (t, r, a) => {
    await re(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${a}`);
  },
  setModelImportance: async (t, r, a) => {
    await re(200), console.log(`[MOCK] Setting ${r} importance to ${a} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await re(350), Ut),
  getWorkspaceModels: async () => (await re(400), on),
  updateModelSource: async (t, r) => {
    await re(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await re(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await re(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await re(350);
    const t = nt.filter((a) => a.installed), r = nt.filter((a) => !a.installed);
    return {
      nodes: nt,
      total_count: nt.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await re(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await re(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await re(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await re(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await re(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await re(250), (t ? lt.filter((l) => l.level === t) : lt).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await re(300);
    const a = [...lt, ...lt.map((v) => ({
      ...v,
      name: "comfygit.workspace"
    }))];
    return (t ? a.filter((v) => v.level === t) : a).slice(0, r || 100);
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
  getStatus: async () => (await re(400), {
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
      synced: Ct.filter((t) => t.status === "synced").map((t) => t.name),
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
  getCommitHistory: async (t = 10) => (await re(300), sn.slice(0, t)),
  getBranches: async () => (await re(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await re(300), {
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
  addRemote: async (t, r) => {
    await re(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await re(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, a) => {
    await re(400), console.log(`[MOCK] Updating remote ${t}: ${r}${a ? ` (push: ${a})` : ""}`);
  },
  fetchRemote: async (t) => {
    await re(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await re(300), {
    remote: t,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  }),
  // =============================================================================
  // NEW: Interactive Workflow Resolution Endpoints
  // =============================================================================
  /**
   * Analyze Workflow - Returns full resolution analysis
   * POST /v2/comfygit/workflow/{name}/analyze
   *
   * Test scenarios by using different workflow names:
   * - "test-unresolved-nodes.json" - Only unresolved nodes
   * - "test-unresolved-models.json" - Only unresolved models
   * - "test-ambiguous-nodes.json" - Multiple node options to choose from
   * - "test-ambiguous-models.json" - Multiple model options to choose from
   * - "test-mixed-complex.json" - Complex scenario with all types
   * - "test-all-resolved.json" - Everything perfect, no user input needed
   * - Default: Returns a realistic mixed scenario
   */
  analyzeWorkflow: async (t) => (await re(600), {
    // Scenario 1: Only unresolved nodes (no matching packages found)
    "test-unresolved-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "CustomUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          },
          {
            reference: { node_type: "MagicNode", workflow: t, node_id: "node2" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 2,
        nodes_ambiguous: 0,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 2: Only unresolved models (not found in index)
    "test-unresolved-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "LoadCheckpoint", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "super_rare_model.safetensors"
            },
            reason: "not_found_in_index"
          },
          {
            reference: {
              workflow: t,
              node_id: "node4",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "custom_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: []
      },
      stats: {
        total_nodes: 1,
        total_models: 2,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 2,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 3: Ambiguous nodes (multiple matching packages)
    "test-ambiguous-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: { node_type: "FluxLoader", workflow: t, node_id: "node1" },
            options: [
              {
                package: { package_id: "comfyui-flux-official", title: "FLUX Official Nodes" },
                match_confidence: 0.95,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-community-nodes", title: "FLUX Community Pack" },
                match_confidence: 0.9,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "advanced-flux-toolkit", title: "Advanced FLUX Toolkit" },
                match_confidence: 0.85,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          },
          {
            reference: { node_type: "ImageEnhancer", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "comfyui-image-enhance", title: "Image Enhancement Suite" },
                match_confidence: 0.88,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "ultimate-image-toolkit", title: "Ultimate Image Toolkit" },
                match_confidence: 0.82,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "5", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "def456", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 2,
        total_models: 1,
        nodes_resolved: 0,
        nodes_unresolved: 0,
        nodes_ambiguous: 2,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 4: Ambiguous models (multiple files match the name)
    "test-ambiguous-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "CheckpointLoader", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl_model.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "aaa111",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.95,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "bbb222",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.85,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_turbo.safetensors",
                  hash: "ccc333",
                  size: 67e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_turbo.safetensors"
                },
                match_confidence: 0.75,
                match_type: "fuzzy",
                has_download_source: !1
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 1,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 0,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 5: Complex mixed scenario (everything)
    "test-mixed-complex.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "UltraUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: [
          {
            reference: { node_type: "FluxSampler", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "flux-samplers-pro", title: "FLUX Samplers Pro" },
                match_confidence: 0.92,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-toolkit", title: "FLUX Toolkit" },
                match_confidence: 0.87,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node5",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "flux_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node6",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "ddd444",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.9,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "eee555",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.8,
                match_type: "fuzzy",
                has_download_source: !0
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 3,
        total_models: 3,
        nodes_resolved: 1,
        nodes_unresolved: 1,
        nodes_ambiguous: 1,
        models_resolved: 1,
        models_unresolved: 1,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 6: All resolved (perfect workflow, no user input needed)
    "test-all-resolved.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "CLIPTextEncode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "VAEDecode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "1", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "fff666", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          },
          {
            reference: { workflow: t, node_id: "2", node_type: "VAELoader", widget_name: "vae", widget_value: "sdxl_vae.safetensors" },
            model: { filename: "sdxl_vae.safetensors", hash: "ggg777", size: 335e6, category: "vae", relative_path: "vae/sdxl_vae.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 2,
        nodes_resolved: 3,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 2,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !1
      }
    }
  }[t] || {
    workflow: t,
    nodes: {
      resolved: [
        {
          reference: { node_type: "KSampler", workflow: t },
          package: { package_id: "comfyui-core", title: "ComfyUI Core" },
          match_confidence: 1,
          match_type: "builtin",
          is_installed: !0
        }
      ],
      unresolved: [
        {
          reference: { node_type: "CustomNode1", workflow: t, node_id: "node1" },
          reason: "not_found_in_registry"
        }
      ],
      ambiguous: [
        {
          reference: { node_type: "FluxNode", workflow: t, node_id: "node2" },
          options: [
            {
              package: { package_id: "flux-package-a", title: "FLUX Package A" },
              match_confidence: 0.92,
              match_type: "fuzzy",
              is_installed: !1
            },
            {
              package: { package_id: "flux-package-b", title: "FLUX Package B" },
              match_confidence: 0.85,
              match_type: "fuzzy",
              is_installed: !1
            }
          ]
        }
      ]
    },
    models: {
      resolved: [],
      unresolved: [
        {
          reference: {
            workflow: t,
            node_id: "node3",
            node_type: "CheckpointLoader",
            widget_name: "model",
            widget_value: "test_model.safetensors"
          },
          reason: "not_found_in_index"
        }
      ],
      ambiguous: []
    },
    stats: {
      total_nodes: 3,
      total_models: 1,
      nodes_resolved: 1,
      nodes_unresolved: 1,
      nodes_ambiguous: 1,
      models_resolved: 0,
      models_unresolved: 1,
      models_ambiguous: 0,
      needs_user_input: !0
    }
  }),
  /**
   * Apply Resolution - Apply user choices and return installation plan
   * POST /v2/comfygit/workflow/{name}/apply-resolution
   */
  applyResolution: async (t, r, a) => {
    await re(800);
    const l = [], v = [];
    return r.forEach((p, f) => {
      p.action === "install" && p.package_id && l.push(p.package_id);
    }), a.forEach((p, f) => {
      p.action === "download" && p.url ? v.push({
        filename: f,
        url: p.url,
        size: 65e8,
        target_path: p.target_path || `models/${f}`
      }) : p.action === "select" && p.selected_model && console.log(`[MOCK] Selected existing model: ${p.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: l,
      models_to_download: v,
      estimated_time_seconds: l.length * 30 + v.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await re(400);
    const a = [
      {
        package_id: "comfyui-flux-official",
        match_confidence: 0.95,
        match_type: "fuzzy",
        description: "Official FLUX model support for ComfyUI with optimized samplers",
        repository: "https://github.com/black-forest-labs/flux-comfy",
        is_installed: !1
      },
      {
        package_id: "flux-advanced-toolkit",
        match_confidence: 0.88,
        match_type: "fuzzy",
        description: "Advanced FLUX tools including custom schedulers and samplers",
        repository: "https://github.com/community/flux-toolkit",
        is_installed: !1
      },
      {
        package_id: "comfyui-upscaler-pack",
        match_confidence: 0.82,
        match_type: "fuzzy",
        description: "Collection of upscaling nodes with various models",
        repository: "https://github.com/upscaler/comfyui-pack",
        is_installed: !1
      },
      {
        package_id: "ultimate-image-tools",
        match_confidence: 0.75,
        match_type: "partial",
        description: "Ultimate image processing toolkit for ComfyUI",
        repository: "https://github.com/tools/ultimate-image",
        is_installed: !0
      },
      {
        package_id: "comfyui-controlnet-aux",
        match_confidence: 0.7,
        match_type: "partial",
        description: "Auxiliary ControlNet preprocessors",
        repository: "https://github.com/fannovel16/controlnet-aux",
        is_installed: !0
      }
    ];
    return {
      results: a.slice(0, r),
      total: a.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, r = 10) => {
    await re(400);
    const a = [
      {
        filename: "flux1-dev-fp8.safetensors",
        hash: "abc123def456",
        size: 11725e6,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/flux1-dev-fp8.safetensors",
        match_confidence: 0.95
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "def456abc789",
        size: 65e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        match_confidence: 0.9
      },
      {
        filename: "sdxl_refiner_1.0.safetensors",
        hash: "ghi789jkl012",
        size: 61e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_refiner_1.0.safetensors",
        match_confidence: 0.85
      },
      {
        filename: "flux_vae.safetensors",
        hash: "mno345pqr678",
        size: 335e6,
        category: "vae",
        has_download_source: !1,
        relative_path: "vae/flux_vae.safetensors",
        match_confidence: 0.8
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "stu901vwx234",
        size: 145e7,
        category: "controlnet",
        has_download_source: !0,
        relative_path: "controlnet/controlnet_openpose.safetensors",
        match_confidence: 0.75
      }
    ];
    return {
      results: a.slice(0, r),
      total: a.length
    };
  }
};
function re(t) {
  return new Promise((r) => setTimeout(r, t));
}
function it() {
  return !0;
}
function ke() {
  const t = C(!1), r = C(null);
  async function a(B, J) {
    var xe;
    if (!((xe = window.app) != null && xe.api))
      throw new Error("ComfyUI API not available");
    const ue = await window.app.api.fetchApi(B, J);
    if (!ue.ok) {
      const Re = await ue.json().catch(() => ({}));
      throw new Error(Re.error || Re.message || `Request failed: ${ue.status}`);
    }
    return ue.json();
  }
  async function l() {
    return de.getStatus();
  }
  async function v(B, J = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: B, allow_issues: J })
    });
  }
  async function p(B = 10, J = 0) {
    {
      const ue = await de.getCommitHistory(B);
      return {
        commits: ue,
        total: ue.length,
        offset: J
      };
    }
  }
  async function f(B) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: B })
    });
  }
  async function h() {
    return de.getBranches();
  }
  async function u(B) {
    return a(`/v2/comfygit/commit/${B}`);
  }
  async function g(B, J = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: B, force: J })
    });
  }
  async function k(B, J = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: B, start_point: J })
    });
  }
  async function _(B, J = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: B, force: J })
    });
  }
  async function y() {
    return de.getEnvironments();
  }
  async function w(B) {
    return de.switchEnvironment(B);
  }
  async function I() {
    return null;
  }
  async function $(B, J, ue) {
    return await de.createEnvironment(B, J, ue), { status: "success" };
  }
  async function E(B) {
    return await de.deleteEnvironment(B), { status: "success" };
  }
  async function z() {
    return de.getWorkflows();
  }
  async function T(B) {
    return de.getWorkflowDetails(B);
  }
  async function G(B) {
    return de.resolveWorkflow(B);
  }
  async function U(B, J, ue) {
    return await de.installWorkflowDeps(B, J, ue), { status: "success" };
  }
  async function F(B, J, ue) {
    return de.setModelImportance(B, J, ue);
  }
  async function L() {
    return de.getEnvironmentModels();
  }
  async function V() {
    return de.getWorkspaceModels();
  }
  async function M(B, J) {
    return de.updateModelSource(B, J);
  }
  async function R(B) {
    return de.deleteModel(B);
  }
  async function N(B) {
    return await de.downloadModel(B), { status: "success" };
  }
  async function P() {
    return de.getConfig();
  }
  async function K(B) {
    return de.updateConfig(B);
  }
  async function S(B, J) {
    return de.getEnvironmentLogs(B, J);
  }
  async function D(B, J) {
    return de.getWorkspaceLogs(B, J);
  }
  async function se() {
    return de.getNodes();
  }
  async function $e(B) {
    return await de.installNode(B), { status: "success" };
  }
  async function Ce(B) {
    return await de.updateNode(B), { status: "success" };
  }
  async function te(B) {
    return await de.uninstallNode(B), { status: "success" };
  }
  async function pe() {
    return de.getRemotes();
  }
  async function ee(B, J) {
    return await de.addRemote(B, J), { status: "success", remote_name: B };
  }
  async function Le(B) {
    return await de.removeRemote(B), { status: "success", remote_name: B };
  }
  async function qe(B, J, ue) {
    return await de.updateRemoteUrl(B, J, ue), { status: "success", remote_name: B };
  }
  async function ce(B) {
    return await de.fetchRemote(B), { status: "success", remote_name: B };
  }
  async function X(B) {
    return de.getRemoteSyncStatus(B);
  }
  async function A(B = "skip", J = !0) {
    return await new Promise((ue) => setTimeout(ue, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: l,
    commit: v,
    getHistory: p,
    exportEnv: f,
    // Git Operations
    getBranches: h,
    getCommitDetail: u,
    checkout: g,
    createBranch: k,
    switchBranch: _,
    // Environment Management
    getEnvironments: y,
    switchEnvironment: w,
    getSwitchProgress: I,
    createEnvironment: $,
    deleteEnvironment: E,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: T,
    resolveWorkflow: G,
    installWorkflowDeps: U,
    setModelImportance: F,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: V,
    updateModelSource: M,
    deleteModel: R,
    downloadModel: N,
    // Settings
    getConfig: P,
    updateConfig: K,
    // Debug/Logs
    getEnvironmentLogs: S,
    getWorkspaceLogs: D,
    // Node Management
    getNodes: se,
    installNode: $e,
    updateNode: Ce,
    uninstallNode: te,
    // Git Remotes
    getRemotes: pe,
    addRemote: ee,
    removeRemote: Le,
    updateRemoteUrl: qe,
    fetchRemote: ce,
    getRemoteSyncStatus: X,
    // Environment Sync
    syncEnvironmentManually: A
  };
}
const an = { class: "base-modal-header" }, nn = {
  key: 0,
  class: "base-modal-title"
}, ln = { class: "base-modal-body" }, rn = {
  key: 0,
  class: "base-modal-loading"
}, dn = {
  key: 1,
  class: "base-modal-error"
}, cn = {
  key: 0,
  class: "base-modal-footer"
}, un = /* @__PURE__ */ q({
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
  setup(t, { emit: r }) {
    const a = t, l = r;
    function v() {
      a.closeOnOverlayClick && l("close");
    }
    function p(f) {
      f.key === "Escape" && l("close");
    }
    return he(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), Xt(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (f, h) => (o(), b(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: v
      }, [
        e("div", {
          class: Q(["base-modal-content", t.size]),
          onClick: h[1] || (h[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", an, [
            le(f.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", nn, i(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: h[0] || (h[0] = (u) => f.$emit("close"))
            }, [...h[2] || (h[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : d("", !0)
          ]),
          e("div", ln, [
            t.loading ? (o(), s("div", rn, "Loading...")) : t.error ? (o(), s("div", dn, i(t.error), 1)) : le(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (o(), s("div", cn, [
            le(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), dt = /* @__PURE__ */ Y(un, [["__scopeId", "data-v-700d367b"]]), mn = ["type", "disabled"], vn = {
  key: 0,
  class: "spinner"
}, fn = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Q(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (l) => r.$emit("click", l))
    }, [
      t.loading ? (o(), s("span", vn)) : d("", !0),
      le(r.$slots, "default", {}, void 0, !0)
    ], 10, mn));
  }
}), oe = /* @__PURE__ */ Y(fn, [["__scopeId", "data-v-f3452606"]]), gn = {
  key: 0,
  class: "base-title-count"
}, hn = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, a) => (o(), b(pt(`h${t.level}`), {
      class: Q(["base-title", t.variant])
    }, {
      default: n(() => [
        le(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", gn, "(" + i(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ze = /* @__PURE__ */ Y(hn, [["__scopeId", "data-v-5a01561d"]]), pn = ["value", "disabled"], yn = {
  key: 0,
  value: "",
  disabled: ""
}, wn = ["value"], kn = {
  key: 0,
  class: "base-select-error"
}, bn = /* @__PURE__ */ q({
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
    function r(l) {
      return typeof l == "string" ? l : l.value;
    }
    function a(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, v) => (o(), s("div", {
      class: Q(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: Q(["base-select", { error: !!t.error }]),
        onChange: v[0] || (v[0] = (p) => l.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (o(), s("option", yn, i(t.placeholder), 1)) : d("", !0),
        (o(!0), s(j, null, Z(t.options, (p) => (o(), s("option", {
          key: r(p),
          value: r(p)
        }, i(a(p)), 9, wn))), 128))
      ], 42, pn),
      t.error ? (o(), s("span", kn, i(t.error), 1)) : d("", !0)
    ], 2));
  }
}), _n = /* @__PURE__ */ Y(bn, [["__scopeId", "data-v-7436d745"]]), $n = { class: "popover-header" }, Cn = { class: "popover-title" }, xn = { class: "popover-content" }, Sn = {
  key: 0,
  class: "popover-actions"
}, In = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, a) => (o(), b(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: et({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", $n, [
            e("h4", Cn, i(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", xn, [
            le(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (o(), s("div", Sn, [
            le(r.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Y(In, [["__scopeId", "data-v-42815ace"]]), En = { class: "detail-section" }, zn = {
  key: 0,
  class: "empty-message"
}, Mn = { class: "model-header" }, Ln = { class: "model-name" }, Rn = { class: "model-details" }, Nn = { class: "model-row" }, Un = { class: "model-row" }, Tn = { class: "label" }, Bn = {
  key: 0,
  class: "model-row model-row-nodes"
}, Dn = { class: "node-list" }, On = ["onClick"], Vn = {
  key: 1,
  class: "model-row"
}, An = { class: "value" }, Fn = {
  key: 0,
  class: "model-actions"
}, Wn = { class: "detail-section" }, Pn = {
  key: 0,
  class: "empty-message"
}, Hn = { class: "node-name" }, Gn = {
  key: 0,
  class: "node-version"
}, jn = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: r }) {
    const a = t, l = r, { getWorkflowDetails: v, setModelImportance: p, installWorkflowDeps: f } = ke(), h = C(null), u = C(!1), g = C(null), k = C(!1), _ = C({}), y = C({}), w = C(!1), I = C(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function E(R) {
      switch (R) {
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
    function z(R) {
      switch (R) {
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
    function T(R) {
      if (!R.loaded_by || R.loaded_by.length === 0) return [];
      const N = R.hash || R.filename;
      return I.value.has(N) ? R.loaded_by : R.loaded_by.slice(0, 3);
    }
    function G(R) {
      return I.value.has(R);
    }
    function U(R) {
      I.value.has(R) ? I.value.delete(R) : I.value.add(R), I.value = new Set(I.value);
    }
    async function F() {
      u.value = !0, g.value = null;
      try {
        h.value = await v(a.workflowName);
      } catch (R) {
        g.value = R instanceof Error ? R.message : "Failed to load workflow details";
      } finally {
        u.value = !1;
      }
    }
    function L(R, N) {
      _.value[R] = N, k.value = !0;
    }
    async function V() {
      if (!k.value) {
        l("close");
        return;
      }
      u.value = !0, g.value = null;
      try {
        for (const [R, N] of Object.entries(_.value))
          await p(a.workflowName, R, N);
        l("close");
      } catch (R) {
        g.value = R instanceof Error ? R.message : "Failed to save changes";
      } finally {
        u.value = !1;
      }
    }
    async function M(R) {
      y.value[R] = !0, g.value = null;
      try {
        await f(a.workflowName, !0, !1), await F();
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to install node";
      } finally {
        y.value[R] = !1;
      }
    }
    return he(F), (R, N) => (o(), s(j, null, [
      c(dt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: u.value,
        error: g.value || void 0,
        onClose: N[5] || (N[5] = (P) => l("close"))
      }, {
        body: n(() => [
          h.value ? (o(), s(j, { key: 0 }, [
            e("section", En, [
              c(Ze, { variant: "section" }, {
                default: n(() => [
                  m("MODELS USED (" + i(h.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              h.value.models.length === 0 ? (o(), s("div", zn, " No models used in this workflow ")) : d("", !0),
              (o(!0), s(j, null, Z(h.value.models, (P) => (o(), s("div", {
                key: P.hash,
                class: "model-card"
              }, [
                e("div", Mn, [
                  N[7] || (N[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ln, i(P.filename), 1)
                ]),
                e("div", Rn, [
                  e("div", Nn, [
                    N[8] || (N[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: Q(["value", E(P.status)])
                    }, i(z(P.status)), 3)
                  ]),
                  e("div", Un, [
                    e("span", Tn, [
                      N[9] || (N[9] = m(" Importance: ", -1)),
                      c(Rt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: N[0] || (N[0] = (K) => w.value = !0)
                      })
                    ]),
                    c(_n, {
                      "model-value": _.value[P.hash] || P.importance,
                      options: $,
                      "onUpdate:modelValue": (K) => L(P.hash, K)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  P.loaded_by && P.loaded_by.length > 0 ? (o(), s("div", Bn, [
                    N[10] || (N[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Dn, [
                      (o(!0), s(j, null, Z(T(P), (K, S) => (o(), s("div", {
                        key: `${K.node_id}-${S}`,
                        class: "node-reference"
                      }, i(K.node_type) + " (Node #" + i(K.node_id) + ") ", 1))), 128)),
                      P.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (K) => U(P.hash || P.filename)
                      }, i(G(P.hash || P.filename) ? "▼ Show less" : `▶ View all (${P.loaded_by.length})`), 9, On)) : d("", !0)
                    ])
                  ])) : d("", !0),
                  P.size_mb ? (o(), s("div", Vn, [
                    N[11] || (N[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", An, i(P.size_mb) + " MB", 1)
                  ])) : d("", !0)
                ]),
                P.status !== "available" ? (o(), s("div", Fn, [
                  P.status === "downloadable" ? (o(), b(oe, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: N[1] || (N[1] = (K) => l("resolve"))
                  }, {
                    default: n(() => [...N[12] || (N[12] = [
                      m(" Download ", -1)
                    ])]),
                    _: 1
                  })) : P.status === "path_mismatch" ? (o(), b(oe, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[2] || (N[2] = (K) => l("resolve"))
                  }, {
                    default: n(() => [...N[13] || (N[13] = [
                      m(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), b(oe, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[3] || (N[3] = (K) => l("resolve"))
                  }, {
                    default: n(() => [...N[14] || (N[14] = [
                      m(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : d("", !0)
              ]))), 128))
            ]),
            e("section", Wn, [
              c(Ze, { variant: "section" }, {
                default: n(() => [
                  m("NODES USED (" + i(h.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              h.value.nodes.length === 0 ? (o(), s("div", Pn, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), s(j, null, Z(h.value.nodes, (P) => (o(), s("div", {
                key: P.name,
                class: "node-item"
              }, [
                e("span", {
                  class: Q(["node-status", P.status === "installed" ? "installed" : "missing"])
                }, i(P.status === "installed" ? "✓" : "✕"), 3),
                e("span", Hn, i(P.name), 1),
                P.version ? (o(), s("span", Gn, "v" + i(P.version), 1)) : d("", !0),
                P.status === "missing" ? (o(), b(oe, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: y.value[P.name],
                  onClick: (K) => M(P.name),
                  class: "node-install-btn"
                }, {
                  default: n(() => [...N[15] || (N[15] = [
                    m(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: n(() => [
          c(oe, {
            variant: "secondary",
            onClick: N[4] || (N[4] = (P) => l("close"))
          }, {
            default: n(() => [...N[16] || (N[16] = [
              m(" Close ", -1)
            ])]),
            _: 1
          }),
          k.value ? (o(), b(oe, {
            key: 0,
            variant: "primary",
            onClick: V
          }, {
            default: n(() => [...N[17] || (N[17] = [
              m(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      c(Be, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: N[6] || (N[6] = (P) => w.value = !1)
      }, {
        content: n(() => [...N[18] || (N[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              m(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              m(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              m(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Kn = /* @__PURE__ */ Y(jn, [["__scopeId", "data-v-1325d542"]]);
function qn() {
  const t = C(null), r = C(null), a = C([]), l = C([]), v = C(!1), p = C(null);
  async function f(_, y) {
    var I;
    if (!((I = window.app) != null && I.api))
      throw new Error("ComfyUI API not available");
    const w = await window.app.api.fetchApi(_, y);
    if (!w.ok) {
      const $ = await w.json().catch(() => ({})), E = $.error || $.message || `Request failed: ${w.status}`;
      throw new Error(E);
    }
    return w.json();
  }
  async function h(_) {
    v.value = !0, p.value = null;
    try {
      let y;
      return it() && (y = await de.analyzeWorkflow(_)), t.value = y, y;
    } catch (y) {
      const w = y instanceof Error ? y.message : "Unknown error occurred";
      throw p.value = w, y;
    } finally {
      v.value = !1;
    }
  }
  async function u(_, y, w) {
    v.value = !0, p.value = null;
    try {
      let I;
      return it() && (I = await de.applyResolution(_, y, w)), r.value = I, I;
    } catch (I) {
      const $ = I instanceof Error ? I.message : "Unknown error occurred";
      throw p.value = $, I;
    } finally {
      v.value = !1;
    }
  }
  async function g(_, y = 10) {
    v.value = !0, p.value = null;
    try {
      let w;
      return it() && (w = await de.searchNodes(_, y)), a.value = w.results, w.results;
    } catch (w) {
      const I = w instanceof Error ? w.message : "Unknown error occurred";
      throw p.value = I, w;
    } finally {
      v.value = !1;
    }
  }
  async function k(_, y = 10) {
    v.value = !0, p.value = null;
    try {
      let w;
      return it() && (w = await de.searchModels(_, y)), l.value = w.results, w.results;
    } catch (w) {
      const I = w instanceof Error ? w.message : "Unknown error occurred";
      throw p.value = I, w;
    } finally {
      v.value = !1;
    }
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: a,
    modelSearchResults: l,
    isLoading: v,
    error: p,
    // Methods
    analyzeWorkflow: h,
    applyResolution: u,
    searchNodes: g,
    searchModels: k
  };
}
const Yn = { class: "resolution-stepper" }, Xn = { class: "stepper-header" }, Zn = ["onClick"], Jn = { class: "step-indicator" }, Qn = {
  key: 0,
  class: "step-icon"
}, el = {
  key: 1,
  class: "step-number"
}, tl = { class: "step-label" }, ol = {
  key: 0,
  class: "step-connector"
}, sl = { class: "stepper-content" }, al = /* @__PURE__ */ q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const a = t, l = r;
    function v(f) {
      return a.completedSteps.includes(f);
    }
    function p(f) {
      return f === "analysis" ? !1 : !a.completedSteps.includes("analysis");
    }
    return (f, h) => (o(), s("div", Yn, [
      e("div", Xn, [
        (o(!0), s(j, null, Z(t.steps, (u, g) => (o(), s("div", {
          key: u.id,
          class: Q(["step", {
            active: t.currentStep === u.id,
            completed: v(u.id),
            disabled: p(u.id)
          }]),
          onClick: (k) => !p(u.id) && l("step-change", u.id)
        }, [
          e("div", Jn, [
            v(u.id) ? (o(), s("span", Qn, "✓")) : (o(), s("span", el, i(g + 1), 1))
          ]),
          e("div", tl, i(u.label), 1),
          g < t.steps.length - 1 ? (o(), s("div", ol)) : d("", !0)
        ], 10, Zn))), 128))
      ]),
      e("div", sl, [
        le(f.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), nl = /* @__PURE__ */ Y(al, [["__scopeId", "data-v-bd19a50a"]]), ll = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = O(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), l = O(() => `confidence-${a.value}`), v = O(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : a.value.charAt(0).toUpperCase() + a.value.slice(1));
    return (p, f) => (o(), s("span", {
      class: Q(["confidence-badge", l.value, t.size])
    }, i(v.value), 3));
  }
}), yt = /* @__PURE__ */ Y(ll, [["__scopeId", "data-v-17ec4b80"]]), il = { class: "item-header" }, rl = { class: "item-title" }, dl = { class: "node-type" }, cl = {
  key: 0,
  class: "choice-status"
}, ul = {
  key: 0,
  class: "status-badge install"
}, ml = {
  key: 1,
  class: "status-badge optional"
}, vl = {
  key: 2,
  class: "status-badge skip"
}, fl = {
  key: 0,
  class: "item-status"
}, gl = {
  key: 0,
  class: "status-badge ambiguous"
}, hl = {
  key: 1,
  class: "status-badge unresolved"
}, pl = { class: "item-body" }, yl = {
  key: 0,
  class: "resolved-state"
}, wl = {
  key: 1,
  class: "multiple-options"
}, kl = { class: "options-list" }, bl = ["onClick"], _l = ["name", "value", "checked", "onChange"], $l = { class: "option-content" }, Cl = { class: "option-header" }, xl = { class: "option-package-id" }, Sl = {
  key: 0,
  class: "option-title"
}, Il = { class: "option-meta" }, El = {
  key: 0,
  class: "installed-badge"
}, zl = { class: "action-buttons" }, Ml = {
  key: 2,
  class: "unresolved"
}, Ll = { class: "action-buttons" }, Rl = /* @__PURE__ */ q({
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
    choice: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice"],
  setup(t, { emit: r }) {
    const a = t, l = r, v = O(() => !!a.choice), p = O(() => {
      var u;
      return (u = a.choice) == null ? void 0 : u.action;
    }), f = O(() => {
      var u;
      return (u = a.choice) == null ? void 0 : u.package_id;
    });
    function h(u) {
      l("option-selected", u);
    }
    return (u, g) => {
      var k;
      return o(), s("div", {
        class: Q(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
      }, [
        e("div", il, [
          e("div", rl, [
            e("code", dl, i(t.nodeType), 1),
            v.value ? (o(), s("span", cl, [
              p.value === "install" ? (o(), s("span", ul, "Installing: " + i(f.value), 1)) : p.value === "optional" ? (o(), s("span", ml, "Marked Optional")) : p.value === "skip" ? (o(), s("span", vl, "Skipped")) : d("", !0)
            ])) : d("", !0)
          ]),
          v.value ? d("", !0) : (o(), s("div", fl, [
            t.hasMultipleOptions ? (o(), s("span", gl, i((k = t.options) == null ? void 0 : k.length) + " matches", 1)) : t.packageId ? d("", !0) : (o(), s("span", hl, "Not Found"))
          ]))
        ]),
        e("div", pl, [
          v.value ? (o(), s("div", yl, [
            c(oe, {
              variant: "ghost",
              size: "sm",
              onClick: g[0] || (g[0] = (_) => l("clear-choice"))
            }, {
              default: n(() => [...g[9] || (g[9] = [
                m(" Change Selection ", -1)
              ])]),
              _: 1
            })
          ])) : t.hasMultipleOptions && t.options ? (o(), s("div", wl, [
            g[14] || (g[14] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
            e("div", kl, [
              (o(!0), s(j, null, Z(t.options, (_, y) => (o(), s("label", {
                key: _.package_id,
                class: Q(["option-card", { selected: t.selectedOptionIndex === y }]),
                onClick: (w) => h(y)
              }, [
                e("input", {
                  type: "radio",
                  name: `node-option-${t.nodeType}`,
                  value: y,
                  checked: t.selectedOptionIndex === y,
                  onChange: (w) => h(y)
                }, null, 40, _l),
                e("div", $l, [
                  e("div", Cl, [
                    e("span", xl, i(_.package_id), 1),
                    c(yt, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  _.title && _.title !== _.package_id ? (o(), s("div", Sl, i(_.title), 1)) : d("", !0),
                  e("div", Il, [
                    _.is_installed ? (o(), s("span", El, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 10, bl))), 128))
            ]),
            e("div", zl, [
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: g[1] || (g[1] = (_) => l("search"))
              }, {
                default: n(() => [...g[10] || (g[10] = [
                  m(" Search Registry ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: g[2] || (g[2] = (_) => l("manual-entry"))
              }, {
                default: n(() => [...g[11] || (g[11] = [
                  m(" Enter Manually ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: g[3] || (g[3] = (_) => l("mark-optional"))
              }, {
                default: n(() => [...g[12] || (g[12] = [
                  m(" Mark Optional ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: g[4] || (g[4] = (_) => l("skip"))
              }, {
                default: n(() => [...g[13] || (g[13] = [
                  m(" Skip ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : (o(), s("div", Ml, [
            g[19] || (g[19] = e("div", { class: "unresolved-message" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "No matching package found in registry")
            ], -1)),
            e("div", Ll, [
              c(oe, {
                variant: "primary",
                size: "sm",
                onClick: g[5] || (g[5] = (_) => l("search"))
              }, {
                default: n(() => [...g[15] || (g[15] = [
                  m(" Search Registry ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: g[6] || (g[6] = (_) => l("manual-entry"))
              }, {
                default: n(() => [...g[16] || (g[16] = [
                  m(" Enter Manually ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: g[7] || (g[7] = (_) => l("mark-optional"))
              }, {
                default: n(() => [...g[17] || (g[17] = [
                  m(" Mark Optional ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: g[8] || (g[8] = (_) => l("skip"))
              }, {
                default: n(() => [...g[18] || (g[18] = [
                  m(" Skip ", -1)
                ])]),
                _: 1
              })
            ])
          ]))
        ])
      ], 2);
    };
  }
}), Nl = /* @__PURE__ */ Y(Rl, [["__scopeId", "data-v-e95498d2"]]), Ul = ["type", "value", "placeholder", "disabled"], Tl = {
  key: 0,
  class: "base-input-error"
}, Bl = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("div", {
      class: Q(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: Q(["base-input", { error: !!t.error }]),
        onInput: a[0] || (a[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          a[1] || (a[1] = Te((l) => r.$emit("enter"), ["enter"])),
          a[2] || (a[2] = Te((l) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ul),
      t.error ? (o(), s("span", Tl, i(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ Y(Bl, [["__scopeId", "data-v-9ba02cdc"]]), Dl = { class: "node-resolution-step" }, Ol = { class: "step-header" }, Vl = { class: "step-stats" }, Al = { class: "stat resolved" }, Fl = { class: "stat pending" }, Wl = { class: "item-navigator" }, Pl = ["disabled"], Hl = { class: "item-indicators" }, Gl = ["title", "onClick"], jl = {
  key: 0,
  class: "dot-check"
}, Kl = ["disabled"], ql = { class: "nav-position" }, Yl = {
  key: 0,
  class: "step-body"
}, Xl = {
  key: 1,
  class: "empty-state"
}, Zl = { class: "step-footer" }, Jl = { class: "node-search-modal" }, Ql = { class: "node-modal-body" }, ei = {
  key: 0,
  class: "node-search-results"
}, ti = ["onClick"], oi = { class: "node-result-header" }, si = { class: "node-result-package-id" }, ai = {
  key: 0,
  class: "node-result-description"
}, ni = {
  key: 1,
  class: "node-no-results"
}, li = {
  key: 2,
  class: "node-searching"
}, ii = { class: "node-manual-entry-modal" }, ri = { class: "node-modal-body" }, di = { class: "node-modal-actions" }, ci = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    hasModels: { type: Boolean }
  },
  emits: ["back-section", "next-section", "mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: r }) {
    const a = t, l = r, v = C(0), p = C(!1), f = C(!1), h = C(""), u = C(""), g = C([]), k = C(!1), _ = O(() => a.nodes[v.value]), y = O(() => a.nodes.filter((N) => a.nodeChoices.has(N.node_type)).length), w = O(() => a.nodes.length - y.value);
    function I(N) {
      N >= 0 && N < a.nodes.length && (v.value = N);
    }
    function $() {
      _.value && l("mark-optional", _.value.node_type);
    }
    function E() {
      _.value && l("skip", _.value.node_type);
    }
    function z(N) {
      _.value && l("option-selected", _.value.node_type, N);
    }
    function T() {
      _.value && l("clear-choice", _.value.node_type);
    }
    function G() {
      _.value && (h.value = _.value.node_type, p.value = !0);
    }
    function U() {
      u.value = "", f.value = !0;
    }
    function F() {
      p.value = !1, h.value = "", g.value = [];
    }
    function L() {
      f.value = !1, u.value = "";
    }
    function V() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function M(N) {
      _.value && (l("manual-entry", _.value.node_type, N.package_id), F());
    }
    function R() {
      !_.value || !u.value.trim() || (l("manual-entry", _.value.node_type, u.value.trim()), L());
    }
    return (N, P) => {
      var K, S;
      return o(), s("div", Dl, [
        e("div", Ol, [
          P[6] || (P[6] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("div", Vl, [
            e("span", Al, i(y.value) + " resolved", 1),
            e("span", Fl, i(w.value) + " pending", 1)
          ])
        ]),
        e("div", Wl, [
          e("button", {
            class: "nav-arrow",
            disabled: v.value === 0,
            onClick: P[0] || (P[0] = (D) => I(v.value - 1))
          }, " ← ", 8, Pl),
          e("div", Hl, [
            (o(!0), s(j, null, Z(t.nodes, (D, se) => (o(), s("button", {
              key: D.node_type,
              class: Q(["item-dot", {
                active: se === v.value,
                resolved: t.nodeChoices.has(D.node_type)
              }]),
              title: D.node_type,
              onClick: ($e) => I(se)
            }, [
              t.nodeChoices.has(D.node_type) ? (o(), s("span", jl, "✓")) : d("", !0)
            ], 10, Gl))), 128))
          ]),
          e("button", {
            class: "nav-arrow",
            disabled: v.value === t.nodes.length - 1,
            onClick: P[1] || (P[1] = (D) => I(v.value + 1))
          }, " → ", 8, Kl),
          e("span", ql, i(v.value + 1) + " / " + i(t.nodes.length), 1)
        ]),
        _.value ? (o(), s("div", Yl, [
          c(Nl, {
            "node-type": _.value.node_type,
            "has-multiple-options": !!((K = _.value.options) != null && K.length),
            options: _.value.options,
            choice: (S = t.nodeChoices) == null ? void 0 : S.get(_.value.node_type),
            onMarkOptional: $,
            onSkip: E,
            onManualEntry: U,
            onSearch: G,
            onOptionSelected: z,
            onClearChoice: T
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), s("div", Xl, [...P[7] || (P[7] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        e("div", Zl, [
          c(oe, {
            variant: "secondary",
            onClick: P[2] || (P[2] = (D) => l("back-section"))
          }, {
            default: n(() => [...P[8] || (P[8] = [
              m(" ← Back ", -1)
            ])]),
            _: 1
          }),
          c(oe, {
            variant: "primary",
            onClick: P[3] || (P[3] = (D) => l("next-section"))
          }, {
            default: n(() => [
              m(i(t.hasModels ? "Continue to Models" : "Continue to Review") + " → ", 1)
            ]),
            _: 1
          })
        ]),
        (o(), b(ze, { to: "body" }, [
          p.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: fe(F, ["self"])
          }, [
            e("div", Jl, [
              e("div", { class: "node-modal-header" }, [
                P[9] || (P[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", Ql, [
                c(Ae, {
                  modelValue: h.value,
                  "onUpdate:modelValue": P[4] || (P[4] = (D) => h.value = D),
                  placeholder: "Search by node type, package name...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                g.value.length > 0 ? (o(), s("div", ei, [
                  (o(!0), s(j, null, Z(g.value, (D) => (o(), s("div", {
                    key: D.package_id,
                    class: "node-search-result-item",
                    onClick: (se) => M(D)
                  }, [
                    e("div", oi, [
                      e("code", si, i(D.package_id), 1),
                      D.match_confidence ? (o(), b(yt, {
                        key: 0,
                        confidence: D.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : d("", !0)
                    ]),
                    D.description ? (o(), s("div", ai, i(D.description), 1)) : d("", !0)
                  ], 8, ti))), 128))
                ])) : h.value && !k.value ? (o(), s("div", ni, ' No packages found matching "' + i(h.value) + '" ', 1)) : d("", !0),
                k.value ? (o(), s("div", li, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), b(ze, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: fe(L, ["self"])
          }, [
            e("div", ii, [
              e("div", { class: "node-modal-header" }, [
                P[10] || (P[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", ri, [
                c(Ae, {
                  modelValue: u.value,
                  "onUpdate:modelValue": P[5] || (P[5] = (D) => u.value = D),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", di, [
                  c(oe, {
                    variant: "secondary",
                    onClick: L
                  }, {
                    default: n(() => [...P[11] || (P[11] = [
                      m("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  c(oe, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: R
                  }, {
                    default: n(() => [...P[12] || (P[12] = [
                      m(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : d("", !0)
        ]))
      ]);
    };
  }
}), ui = /* @__PURE__ */ Y(ci, [["__scopeId", "data-v-006a61c2"]]), mi = { class: "item-header" }, vi = { class: "item-title" }, fi = { class: "model-filename" }, gi = {
  key: 0,
  class: "choice-status"
}, hi = {
  key: 0,
  class: "status-badge select"
}, pi = {
  key: 1,
  class: "status-badge download"
}, yi = {
  key: 2,
  class: "status-badge optional"
}, wi = {
  key: 3,
  class: "status-badge skip"
}, ki = {
  key: 0,
  class: "item-status"
}, bi = {
  key: 0,
  class: "status-badge ambiguous"
}, _i = {
  key: 1,
  class: "status-badge unresolved"
}, $i = { class: "node-info" }, Ci = { class: "item-body" }, xi = {
  key: 0,
  class: "resolved-state"
}, Si = {
  key: 1,
  class: "multiple-options"
}, Ii = { class: "options-list" }, Ei = ["onClick"], zi = ["name", "value", "checked", "onChange"], Mi = { class: "option-content" }, Li = { class: "option-header" }, Ri = { class: "option-filename" }, Ni = { class: "option-meta" }, Ui = { class: "option-size" }, Ti = { class: "option-category" }, Bi = { class: "option-path" }, Di = { class: "action-buttons" }, Oi = {
  key: 2,
  class: "unresolved"
}, Vi = { class: "action-buttons" }, Ai = /* @__PURE__ */ q({
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
    choice: {}
  },
  emits: ["mark-optional", "skip", "download-url", "search", "option-selected", "clear-choice"],
  setup(t, { emit: r }) {
    const a = t, l = r, v = O(() => !!a.choice), p = O(() => {
      var g;
      return (g = a.choice) == null ? void 0 : g.action;
    }), f = O(() => {
      var g, k;
      return ((k = (g = a.choice) == null ? void 0 : g.selected_model) == null ? void 0 : k.filename) || "selected";
    });
    function h(g) {
      l("option-selected", g);
    }
    function u(g) {
      if (!g) return "Unknown";
      const k = g / (1024 * 1024 * 1024);
      return k >= 1 ? `${k.toFixed(2)} GB` : `${(g / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (g, k) => {
      var _;
      return o(), s("div", {
        class: Q(["model-resolution-item", { resolved: v.value, ambiguous: t.hasMultipleOptions }])
      }, [
        e("div", mi, [
          e("div", vi, [
            e("code", fi, i(t.filename), 1),
            v.value ? (o(), s("span", gi, [
              p.value === "select" ? (o(), s("span", hi, "Using: " + i(f.value), 1)) : p.value === "download" ? (o(), s("span", pi, "Downloading")) : p.value === "optional" ? (o(), s("span", yi, "Marked Optional")) : p.value === "skip" ? (o(), s("span", wi, "Skipped")) : d("", !0)
            ])) : d("", !0)
          ]),
          v.value ? d("", !0) : (o(), s("div", ki, [
            t.hasMultipleOptions ? (o(), s("span", bi, i((_ = t.options) == null ? void 0 : _.length) + " matches", 1)) : (o(), s("span", _i, "Not Found"))
          ]))
        ]),
        e("div", $i, [
          k[9] || (k[9] = m(" Used by: ", -1)),
          e("code", null, i(t.nodeType), 1)
        ]),
        e("div", Ci, [
          v.value ? (o(), s("div", xi, [
            c(oe, {
              variant: "ghost",
              size: "sm",
              onClick: k[0] || (k[0] = (y) => l("clear-choice"))
            }, {
              default: n(() => [...k[10] || (k[10] = [
                m(" Change Selection ", -1)
              ])]),
              _: 1
            })
          ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Si, [
            k[15] || (k[15] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
            e("div", Ii, [
              (o(!0), s(j, null, Z(t.options, (y, w) => (o(), s("label", {
                key: y.model.hash,
                class: Q(["option-card", { selected: t.selectedOptionIndex === w }]),
                onClick: (I) => h(w)
              }, [
                e("input", {
                  type: "radio",
                  name: `model-option-${t.filename}`,
                  value: w,
                  checked: t.selectedOptionIndex === w,
                  onChange: (I) => h(w)
                }, null, 40, zi),
                e("div", Mi, [
                  e("div", Li, [
                    e("span", Ri, i(y.model.filename), 1),
                    c(yt, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  e("div", Ni, [
                    e("span", Ui, i(u(y.model.size)), 1),
                    e("span", Ti, i(y.model.category), 1)
                  ]),
                  e("div", Bi, i(y.model.relative_path), 1)
                ])
              ], 10, Ei))), 128))
            ]),
            e("div", Di, [
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: k[1] || (k[1] = (y) => l("search"))
              }, {
                default: n(() => [...k[11] || (k[11] = [
                  m(" Search Workspace ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: k[2] || (k[2] = (y) => l("download-url"))
              }, {
                default: n(() => [...k[12] || (k[12] = [
                  m(" Download URL ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: k[3] || (k[3] = (y) => l("mark-optional"))
              }, {
                default: n(() => [...k[13] || (k[13] = [
                  m(" Mark Optional ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: k[4] || (k[4] = (y) => l("skip"))
              }, {
                default: n(() => [...k[14] || (k[14] = [
                  m(" Skip ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : (o(), s("div", Oi, [
            k[20] || (k[20] = e("div", { class: "unresolved-message" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "Model not found in workspace")
            ], -1)),
            e("div", Vi, [
              c(oe, {
                variant: "primary",
                size: "sm",
                onClick: k[5] || (k[5] = (y) => l("search"))
              }, {
                default: n(() => [...k[16] || (k[16] = [
                  m(" Search Workspace ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: k[6] || (k[6] = (y) => l("download-url"))
              }, {
                default: n(() => [...k[17] || (k[17] = [
                  m(" Download URL ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: k[7] || (k[7] = (y) => l("mark-optional"))
              }, {
                default: n(() => [...k[18] || (k[18] = [
                  m(" Mark Optional ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: k[8] || (k[8] = (y) => l("skip"))
              }, {
                default: n(() => [...k[19] || (k[19] = [
                  m(" Skip ", -1)
                ])]),
                _: 1
              })
            ])
          ]))
        ])
      ], 2);
    };
  }
}), Fi = /* @__PURE__ */ Y(Ai, [["__scopeId", "data-v-e250f0b3"]]), Wi = { class: "model-resolution-step" }, Pi = { class: "step-header" }, Hi = { class: "step-stats" }, Gi = { class: "stat resolved" }, ji = { class: "stat pending" }, Ki = { class: "item-navigator" }, qi = ["disabled"], Yi = { class: "item-indicators" }, Xi = ["title", "onClick"], Zi = {
  key: 0,
  class: "dot-check"
}, Ji = ["disabled"], Qi = { class: "nav-position" }, er = {
  key: 0,
  class: "step-body"
}, tr = {
  key: 1,
  class: "empty-state"
}, or = { class: "step-footer" }, sr = { class: "model-search-modal" }, ar = { class: "model-modal-body" }, nr = {
  key: 0,
  class: "model-search-results"
}, lr = ["onClick"], ir = { class: "model-result-header" }, rr = { class: "model-result-filename" }, dr = { class: "model-result-meta" }, cr = { class: "model-result-category" }, ur = { class: "model-result-size" }, mr = {
  key: 0,
  class: "model-result-path"
}, vr = {
  key: 1,
  class: "model-no-results"
}, fr = {
  key: 2,
  class: "model-searching"
}, gr = { class: "model-download-url-modal" }, hr = { class: "model-modal-body" }, pr = { class: "model-modal-actions" }, yr = /* @__PURE__ */ q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["back-section", "next-section", "mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: r }) {
    const a = t, l = r, v = C(0), p = C(!1), f = C(!1), h = C(""), u = C(""), g = C(""), k = C([]), _ = C(!1), y = O(() => a.models[v.value]), w = O(() => a.models.filter((S) => a.modelChoices.has(S.filename)).length), I = O(() => a.models.length - w.value), $ = O(() => y.value ? `checkpoints/${y.value.filename}` : "checkpoints/");
    function E(S) {
      S >= 0 && S < a.models.length && (v.value = S);
    }
    function z() {
      y.value && l("mark-optional", y.value.filename);
    }
    function T() {
      y.value && l("skip", y.value.filename);
    }
    function G(S) {
      y.value && l("option-selected", y.value.filename, S);
    }
    function U() {
      y.value && l("clear-choice", y.value.filename);
    }
    function F() {
      y.value && (h.value = y.value.filename, p.value = !0);
    }
    function L() {
      u.value = "", g.value = $.value, f.value = !0;
    }
    function V() {
      p.value = !1, h.value = "", k.value = [];
    }
    function M() {
      f.value = !1, u.value = "", g.value = "";
    }
    function R() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function N(S) {
      y.value && V();
    }
    function P() {
      !y.value || !u.value.trim() || (l("download-url", y.value.filename, u.value.trim(), g.value.trim() || void 0), M());
    }
    function K(S) {
      if (!S) return "Unknown";
      const D = S / (1024 * 1024 * 1024);
      return D >= 1 ? `${D.toFixed(2)} GB` : `${(S / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (S, D) => {
      var se, $e, Ce;
      return o(), s("div", Wi, [
        e("div", Pi, [
          D[7] || (D[7] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Models"),
            e("p", { class: "step-description" }, " Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("div", Hi, [
            e("span", Gi, i(w.value) + " resolved", 1),
            e("span", ji, i(I.value) + " pending", 1)
          ])
        ]),
        e("div", Ki, [
          e("button", {
            class: "nav-arrow",
            disabled: v.value === 0,
            onClick: D[0] || (D[0] = (te) => E(v.value - 1))
          }, " ← ", 8, qi),
          e("div", Yi, [
            (o(!0), s(j, null, Z(t.models, (te, pe) => (o(), s("button", {
              key: te.filename,
              class: Q(["item-dot", {
                active: pe === v.value,
                resolved: t.modelChoices.has(te.filename)
              }]),
              title: te.filename,
              onClick: (ee) => E(pe)
            }, [
              t.modelChoices.has(te.filename) ? (o(), s("span", Zi, "✓")) : d("", !0)
            ], 10, Xi))), 128))
          ]),
          e("button", {
            class: "nav-arrow",
            disabled: v.value === t.models.length - 1,
            onClick: D[1] || (D[1] = (te) => E(v.value + 1))
          }, " → ", 8, Ji),
          e("span", Qi, i(v.value + 1) + " / " + i(t.models.length), 1)
        ]),
        y.value ? (o(), s("div", er, [
          c(Fi, {
            filename: y.value.filename,
            "node-type": ((se = y.value.reference) == null ? void 0 : se.node_type) || "Unknown",
            "has-multiple-options": !!(($e = y.value.options) != null && $e.length),
            options: y.value.options,
            choice: (Ce = t.modelChoices) == null ? void 0 : Ce.get(y.value.filename),
            onMarkOptional: z,
            onSkip: T,
            onDownloadUrl: L,
            onSearch: F,
            onOptionSelected: G,
            onClearChoice: U
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), s("div", tr, [...D[8] || (D[8] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        e("div", or, [
          c(oe, {
            variant: "secondary",
            onClick: D[2] || (D[2] = (te) => l("back-section"))
          }, {
            default: n(() => [...D[9] || (D[9] = [
              m(" ← Back ", -1)
            ])]),
            _: 1
          }),
          c(oe, {
            variant: "primary",
            onClick: D[3] || (D[3] = (te) => l("next-section"))
          }, {
            default: n(() => [...D[10] || (D[10] = [
              m(" Continue to Review → ", -1)
            ])]),
            _: 1
          })
        ]),
        (o(), b(ze, { to: "body" }, [
          p.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: fe(V, ["self"])
          }, [
            e("div", sr, [
              e("div", { class: "model-modal-header" }, [
                D[11] || (D[11] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", ar, [
                c(Ae, {
                  modelValue: h.value,
                  "onUpdate:modelValue": D[4] || (D[4] = (te) => h.value = te),
                  placeholder: "Search by filename, category...",
                  onInput: R
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (o(), s("div", nr, [
                  (o(!0), s(j, null, Z(k.value, (te) => (o(), s("div", {
                    key: te.hash,
                    class: "model-search-result-item",
                    onClick: (pe) => N()
                  }, [
                    e("div", ir, [
                      e("code", rr, i(te.filename), 1)
                    ]),
                    e("div", dr, [
                      e("span", cr, i(te.category), 1),
                      e("span", ur, i(K(te.size)), 1)
                    ]),
                    te.relative_path ? (o(), s("div", mr, i(te.relative_path), 1)) : d("", !0)
                  ], 8, lr))), 128))
                ])) : h.value && !_.value ? (o(), s("div", vr, ' No models found matching "' + i(h.value) + '" ', 1)) : d("", !0),
                _.value ? (o(), s("div", fr, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), b(ze, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: fe(M, ["self"])
          }, [
            e("div", gr, [
              e("div", { class: "model-modal-header" }, [
                D[12] || (D[12] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", hr, [
                c(Ae, {
                  modelValue: u.value,
                  "onUpdate:modelValue": D[5] || (D[5] = (te) => u.value = te),
                  label: "Download URL",
                  placeholder: "https://civitai.com/api/download/..."
                }, null, 8, ["modelValue"]),
                c(Ae, {
                  modelValue: g.value,
                  "onUpdate:modelValue": D[6] || (D[6] = (te) => g.value = te),
                  label: "Target Path (relative to models folder)",
                  placeholder: $.value
                }, null, 8, ["modelValue", "placeholder"]),
                e("div", pr, [
                  c(oe, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: n(() => [...D[13] || (D[13] = [
                      m("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  c(oe, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: P
                  }, {
                    default: n(() => [...D[14] || (D[14] = [
                      m(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : d("", !0)
        ]))
      ]);
    };
  }
}), wr = /* @__PURE__ */ Y(yr, [["__scopeId", "data-v-1cc039b2"]]), kr = {
  key: 0,
  class: "loading-state"
}, br = {
  key: 1,
  class: "wizard-content"
}, _r = {
  key: 0,
  class: "step-content"
}, $r = { class: "analysis-summary" }, Cr = { class: "analysis-header" }, xr = { class: "summary-description" }, Sr = { class: "stats-grid" }, Ir = { class: "stat-card" }, Er = { class: "stat-items" }, zr = { class: "stat-item success" }, Mr = { class: "stat-count" }, Lr = {
  key: 0,
  class: "stat-item warning"
}, Rr = { class: "stat-count" }, Nr = {
  key: 1,
  class: "stat-item error"
}, Ur = { class: "stat-count" }, Tr = { class: "stat-card" }, Br = { class: "stat-items" }, Dr = { class: "stat-item success" }, Or = { class: "stat-count" }, Vr = {
  key: 0,
  class: "stat-item warning"
}, Ar = { class: "stat-count" }, Fr = {
  key: 1,
  class: "stat-item error"
}, Wr = { class: "stat-count" }, Pr = {
  key: 0,
  class: "status-message warning"
}, Hr = { class: "status-text" }, Gr = {
  key: 1,
  class: "status-message success"
}, jr = {
  key: 3,
  class: "step-content"
}, Kr = { class: "review-summary" }, qr = { class: "review-stats" }, Yr = { class: "review-stat" }, Xr = { class: "stat-value" }, Zr = { class: "review-stat" }, Jr = { class: "stat-value" }, Qr = { class: "review-stat" }, ed = { class: "stat-value" }, td = { class: "review-stat" }, od = { class: "stat-value" }, sd = {
  key: 0,
  class: "review-section"
}, ad = { class: "section-title" }, nd = { class: "review-items" }, ld = { class: "item-name" }, id = { class: "item-choice" }, rd = {
  key: 0,
  class: "choice-badge install"
}, dd = {
  key: 1,
  class: "choice-badge optional"
}, cd = {
  key: 2,
  class: "choice-badge skip"
}, ud = {
  key: 1,
  class: "choice-badge pending"
}, md = {
  key: 1,
  class: "review-section"
}, vd = { class: "section-title" }, fd = { class: "review-items" }, gd = { class: "item-name" }, hd = { class: "item-choice" }, pd = {
  key: 0,
  class: "choice-badge install"
}, yd = {
  key: 1,
  class: "choice-badge download"
}, wd = {
  key: 2,
  class: "choice-badge optional"
}, kd = {
  key: 3,
  class: "choice-badge skip"
}, bd = {
  key: 1,
  class: "choice-badge pending"
}, _d = {
  key: 2,
  class: "no-choices"
}, $d = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: r }) {
    const a = t, l = r, { analyzeWorkflow: v, applyResolution: p } = qn(), f = C(null), h = C(!1), u = C(!1), g = C(null), k = C("analysis"), _ = C([]), y = C(/* @__PURE__ */ new Map()), w = C(/* @__PURE__ */ new Map()), I = O(() => {
      const X = [
        { id: "analysis", label: "Analysis" }
      ];
      return E.value && X.push({ id: "nodes", label: "Nodes" }), z.value && X.push({ id: "models", label: "Models" }), X.push({ id: "review", label: "Review" }), X;
    }), $ = O(() => f.value ? f.value.stats.needs_user_input : !1), E = O(() => f.value ? f.value.nodes.unresolved.length > 0 || f.value.nodes.ambiguous.length > 0 : !1), z = O(() => f.value ? f.value.models.unresolved.length > 0 || f.value.models.ambiguous.length > 0 : !1), T = O(() => {
      if (!f.value) return [];
      const X = f.value.nodes.unresolved.map((B) => ({
        node_type: B.reference.node_type,
        reason: B.reason,
        is_unresolved: !0
      })), A = f.value.nodes.ambiguous.map((B) => ({
        node_type: B.reference.node_type,
        has_multiple_options: !0,
        options: B.options.map((J) => ({
          package_id: J.package.package_id,
          title: J.package.title,
          match_confidence: J.match_confidence,
          match_type: J.match_type,
          is_installed: J.is_installed
        }))
      }));
      return [...X, ...A];
    }), G = O(() => {
      if (!f.value) return [];
      const X = f.value.models.unresolved.map((B) => ({
        filename: B.reference.widget_value,
        reference: B.reference,
        reason: B.reason,
        is_unresolved: !0
      })), A = f.value.models.ambiguous.map((B) => ({
        filename: B.reference.widget_value,
        reference: B.reference,
        has_multiple_options: !0,
        options: B.options.map((J) => ({
          model: J.model,
          match_confidence: J.match_confidence,
          match_type: J.match_type,
          has_download_source: J.has_download_source
        }))
      }));
      return [...X, ...A];
    }), U = O(() => {
      let X = 0;
      for (const A of y.value.values())
        A.action === "install" && X++;
      for (const A of w.value.values())
        A.action === "select" && X++;
      return X;
    }), F = O(() => {
      let X = 0;
      for (const A of w.value.values())
        A.action === "download" && X++;
      return X;
    }), L = O(() => {
      let X = 0;
      for (const A of y.value.values())
        A.action === "optional" && X++;
      for (const A of w.value.values())
        A.action === "optional" && X++;
      return X;
    }), V = O(() => {
      let X = 0;
      for (const A of y.value.values())
        A.action === "skip" && X++;
      for (const A of w.value.values())
        A.action === "skip" && X++;
      for (const A of T.value)
        y.value.has(A.node_type) || X++;
      for (const A of G.value)
        w.value.has(A.filename) || X++;
      return X;
    });
    function M(X) {
      k.value = X;
    }
    function R() {
      const X = I.value.findIndex((A) => A.id === k.value);
      X > 0 && (k.value = I.value[X - 1].id);
    }
    function N() {
      const X = I.value.findIndex((A) => A.id === k.value);
      X < I.value.length - 1 && (k.value = I.value[X + 1].id);
    }
    async function P() {
      h.value = !0, g.value = null;
      try {
        f.value = await v(a.workflowName);
      } catch (X) {
        g.value = X instanceof Error ? X.message : "Failed to analyze workflow";
      } finally {
        h.value = !1;
      }
    }
    function K() {
      _.value.includes("analysis") || _.value.push("analysis"), E.value ? k.value = "nodes" : z.value ? k.value = "models" : k.value = "review";
    }
    function S(X) {
      y.value.set(X, { action: "optional" });
    }
    function D(X) {
      y.value.set(X, { action: "skip" });
    }
    function se(X, A) {
      var J;
      const B = T.value.find((ue) => ue.node_type === X);
      (J = B == null ? void 0 : B.options) != null && J[A] && y.value.set(X, {
        action: "install",
        package_id: B.options[A].package_id
      });
    }
    function $e(X, A) {
      y.value.set(X, {
        action: "install",
        package_id: A
      });
    }
    function Ce(X) {
      y.value.delete(X);
    }
    function te(X) {
      w.value.set(X, { action: "optional" });
    }
    function pe(X) {
      w.value.set(X, { action: "skip" });
    }
    function ee(X, A) {
      var J;
      const B = G.value.find((ue) => ue.filename === X);
      (J = B == null ? void 0 : B.options) != null && J[A] && w.value.set(X, {
        action: "select",
        selected_model: B.options[A].model
      });
    }
    function Le(X, A, B) {
      w.value.set(X, {
        action: "download",
        url: A,
        target_path: B
      });
    }
    function qe(X) {
      w.value.delete(X);
    }
    async function ce() {
      u.value = !0, g.value = null;
      try {
        await p(a.workflowName, y.value, w.value), l("install"), l("refresh"), l("close");
      } catch (X) {
        g.value = X instanceof Error ? X.message : "Failed to apply resolution";
      } finally {
        u.value = !1;
      }
    }
    return he(P), (X, A) => (o(), b(dt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: h.value,
      error: g.value || void 0,
      onClose: A[1] || (A[1] = (B) => l("close"))
    }, {
      body: n(() => [
        h.value && !f.value ? (o(), s("div", kr, [...A[2] || (A[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : f.value ? (o(), s("div", br, [
          c(nl, {
            steps: I.value,
            "current-step": k.value,
            "completed-steps": _.value,
            onStepChange: M
          }, null, 8, ["steps", "current-step", "completed-steps"]),
          k.value === "analysis" ? (o(), s("div", _r, [
            e("div", $r, [
              e("div", Cr, [
                A[3] || (A[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", xr, " Found " + i(f.value.stats.total_nodes) + " nodes and " + i(f.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Sr, [
                e("div", Ir, [
                  A[10] || (A[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Er, [
                    e("div", zr, [
                      A[4] || (A[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Mr, i(f.value.nodes.resolved.length), 1),
                      A[5] || (A[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    f.value.nodes.ambiguous.length > 0 ? (o(), s("div", Lr, [
                      A[6] || (A[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Rr, i(f.value.nodes.ambiguous.length), 1),
                      A[7] || (A[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    f.value.nodes.unresolved.length > 0 ? (o(), s("div", Nr, [
                      A[8] || (A[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ur, i(f.value.nodes.unresolved.length), 1),
                      A[9] || (A[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Tr, [
                  A[17] || (A[17] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Br, [
                    e("div", Dr, [
                      A[11] || (A[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Or, i(f.value.models.resolved.length), 1),
                      A[12] || (A[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    f.value.models.ambiguous.length > 0 ? (o(), s("div", Vr, [
                      A[13] || (A[13] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ar, i(f.value.models.ambiguous.length), 1),
                      A[14] || (A[14] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    f.value.models.unresolved.length > 0 ? (o(), s("div", Fr, [
                      A[15] || (A[15] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Wr, i(f.value.models.unresolved.length), 1),
                      A[16] || (A[16] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              $.value ? (o(), s("div", Pr, [
                A[18] || (A[18] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Hr, i(T.value.length + G.value.length) + " items need your input", 1)
              ])) : (o(), s("div", Gr, [...A[19] || (A[19] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : d("", !0),
          k.value === "nodes" ? (o(), b(ui, {
            key: 1,
            nodes: T.value,
            "node-choices": y.value,
            "has-models": z.value,
            onBackSection: R,
            onNextSection: N,
            onMarkOptional: S,
            onSkip: D,
            onOptionSelected: se,
            onManualEntry: $e,
            onClearChoice: Ce
          }, null, 8, ["nodes", "node-choices", "has-models"])) : d("", !0),
          k.value === "models" ? (o(), b(wr, {
            key: 2,
            models: G.value,
            "model-choices": w.value,
            onBackSection: R,
            onNextSection: N,
            onMarkOptional: te,
            onSkip: pe,
            onOptionSelected: ee,
            onDownloadUrl: Le,
            onClearChoice: qe
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          k.value === "review" ? (o(), s("div", jr, [
            e("div", Kr, [
              A[24] || (A[24] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", qr, [
                e("div", Yr, [
                  e("span", Xr, i(U.value), 1),
                  A[20] || (A[20] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Zr, [
                  e("span", Jr, i(F.value), 1),
                  A[21] || (A[21] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Qr, [
                  e("span", ed, i(L.value), 1),
                  A[22] || (A[22] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", td, [
                  e("span", od, i(V.value), 1),
                  A[23] || (A[23] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              T.value.length > 0 ? (o(), s("div", sd, [
                e("h4", ad, "Node Packages (" + i(T.value.length) + ")", 1),
                e("div", nd, [
                  (o(!0), s(j, null, Z(T.value, (B) => {
                    var J, ue, xe, Re;
                    return o(), s("div", {
                      key: B.node_type,
                      class: "review-item"
                    }, [
                      e("code", ld, i(B.node_type), 1),
                      e("div", id, [
                        y.value.has(B.node_type) ? (o(), s(j, { key: 0 }, [
                          ((J = y.value.get(B.node_type)) == null ? void 0 : J.action) === "install" ? (o(), s("span", rd, i((ue = y.value.get(B.node_type)) == null ? void 0 : ue.package_id), 1)) : ((xe = y.value.get(B.node_type)) == null ? void 0 : xe.action) === "optional" ? (o(), s("span", dd, " Optional ")) : ((Re = y.value.get(B.node_type)) == null ? void 0 : Re.action) === "skip" ? (o(), s("span", cd, " Skip ")) : d("", !0)
                        ], 64)) : (o(), s("span", ud, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              G.value.length > 0 ? (o(), s("div", md, [
                e("h4", vd, "Models (" + i(G.value.length) + ")", 1),
                e("div", fd, [
                  (o(!0), s(j, null, Z(G.value, (B) => {
                    var J, ue, xe, Re, tt, ot;
                    return o(), s("div", {
                      key: B.filename,
                      class: "review-item"
                    }, [
                      e("code", gd, i(B.filename), 1),
                      e("div", hd, [
                        w.value.has(B.filename) ? (o(), s(j, { key: 0 }, [
                          ((J = w.value.get(B.filename)) == null ? void 0 : J.action) === "select" ? (o(), s("span", pd, i((xe = (ue = w.value.get(B.filename)) == null ? void 0 : ue.selected_model) == null ? void 0 : xe.filename), 1)) : ((Re = w.value.get(B.filename)) == null ? void 0 : Re.action) === "download" ? (o(), s("span", yd, " Download ")) : ((tt = w.value.get(B.filename)) == null ? void 0 : tt.action) === "optional" ? (o(), s("span", wd, " Optional ")) : ((ot = w.value.get(B.filename)) == null ? void 0 : ot.action) === "skip" ? (o(), s("span", kd, " Skip ")) : d("", !0)
                        ], 64)) : (o(), s("span", bd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              T.value.length === 0 && G.value.length === 0 ? (o(), s("div", _d, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: n(() => [
        c(oe, {
          variant: "secondary",
          onClick: A[0] || (A[0] = (B) => l("close"))
        }, {
          default: n(() => [...A[25] || (A[25] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k.value === "analysis" ? (o(), b(oe, {
          key: 0,
          variant: "primary",
          disabled: h.value,
          onClick: K
        }, {
          default: n(() => [
            m(i($.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        k.value === "review" ? (o(), b(oe, {
          key: 1,
          variant: "secondary",
          disabled: u.value,
          onClick: R
        }, {
          default: n(() => [...A[26] || (A[26] = [
            m(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        k.value === "review" ? (o(), b(oe, {
          key: 2,
          variant: "primary",
          disabled: u.value,
          loading: u.value,
          onClick: ce
        }, {
          default: n(() => [...A[27] || (A[27] = [
            m(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Cd = /* @__PURE__ */ Y($d, [["__scopeId", "data-v-16e4b3a8"]]), xd = { class: "search-input-wrapper" }, Sd = ["value", "placeholder"], Id = /* @__PURE__ */ q({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: r }) {
    const a = t, l = r, v = C(null);
    let p;
    function f(u) {
      const g = u.target.value;
      a.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        l("update:modelValue", g);
      }, a.debounce)) : l("update:modelValue", g);
    }
    function h() {
      var u;
      l("update:modelValue", ""), l("clear"), (u = v.value) == null || u.focus();
    }
    return he(() => {
      a.autoFocus && v.value && v.value.focus();
    }), (u, g) => (o(), s("div", xd, [
      e("input", {
        ref_key: "inputRef",
        ref: v,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: Te(h, ["escape"])
      }, null, 40, Sd),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: h,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Ed = /* @__PURE__ */ Y(Id, [["__scopeId", "data-v-266f857a"]]), zd = { class: "search-bar" }, Md = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, a) => (o(), s("div", zd, [
      c(Ed, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (l) => r.$emit("update:modelValue", l)),
        onClear: a[1] || (a[1] = (l) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), je = /* @__PURE__ */ Y(Md, [["__scopeId", "data-v-3d51bbfd"]]), Ld = { class: "section-group" }, Rd = {
  key: 0,
  class: "section-content"
}, Nd = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const a = t, l = r, v = C(a.initiallyExpanded);
    function p() {
      a.collapsible && (v.value = !v.value, l("toggle", v.value));
    }
    return (f, h) => (o(), s("section", Ld, [
      c(_e, {
        count: t.count,
        clickable: t.collapsible,
        expanded: v.value,
        onClick: p
      }, {
        default: n(() => [
          m(i(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || v.value ? (o(), s("div", Rd, [
        le(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ve = /* @__PURE__ */ Y(Nd, [["__scopeId", "data-v-c48e33ed"]]), Ud = { class: "item-header" }, Td = {
  key: 0,
  class: "item-icon"
}, Bd = { class: "item-info" }, Dd = {
  key: 0,
  class: "item-title"
}, Od = {
  key: 1,
  class: "item-subtitle"
}, Vd = {
  key: 0,
  class: "item-details"
}, Ad = {
  key: 1,
  class: "item-actions"
}, Fd = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, l = O(() => a.status ? `status-${a.status}` : "");
    return (v, p) => (o(), s("div", {
      class: Q(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: p[0] || (p[0] = (f) => t.clickable && v.$emit("click"))
    }, [
      e("div", Ud, [
        v.$slots.icon ? (o(), s("span", Td, [
          le(v.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Bd, [
          v.$slots.title ? (o(), s("div", Dd, [
            le(v.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          v.$slots.subtitle ? (o(), s("div", Od, [
            le(v.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      v.$slots.details ? (o(), s("div", Vd, [
        le(v.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      v.$slots.actions ? (o(), s("div", Ad, [
        le(v.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ge = /* @__PURE__ */ Y(Fd, [["__scopeId", "data-v-cc435e0e"]]), Wd = { class: "loading-state" }, Pd = { class: "loading-message" }, Hd = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, a) => (o(), s("div", Wd, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Pd, i(t.message), 1)
    ]));
  }
}), De = /* @__PURE__ */ Y(Hd, [["__scopeId", "data-v-ad8436c9"]]), Gd = { class: "error-state" }, jd = { class: "error-message" }, Kd = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, a) => (o(), s("div", Gd, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", jd, i(t.message), 1),
      t.retry ? (o(), b(H, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (l) => r.$emit("retry"))
      }, {
        default: n(() => [...a[1] || (a[1] = [
          m(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ Y(Kd, [["__scopeId", "data-v-5397be48"]]), qd = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const a = r, { getWorkflows: l } = ke(), v = C([]), p = C(!1), f = C(null), h = C(""), u = C(!0), g = C(!1), k = C(!1), _ = C(!1), y = C(null), w = O(
      () => v.value.filter((K) => K.status === "broken")
    ), I = O(
      () => v.value.filter((K) => K.status === "new")
    ), $ = O(
      () => v.value.filter((K) => K.status === "modified")
    ), E = O(
      () => v.value.filter((K) => K.status === "synced")
    ), z = O(() => {
      if (!h.value.trim()) return v.value;
      const K = h.value.toLowerCase();
      return v.value.filter((S) => S.name.toLowerCase().includes(K));
    }), T = O(
      () => w.value.filter(
        (K) => !h.value.trim() || K.name.toLowerCase().includes(h.value.toLowerCase())
      )
    ), G = O(
      () => I.value.filter(
        (K) => !h.value.trim() || K.name.toLowerCase().includes(h.value.toLowerCase())
      )
    ), U = O(
      () => $.value.filter(
        (K) => !h.value.trim() || K.name.toLowerCase().includes(h.value.toLowerCase())
      )
    ), F = O(
      () => E.value.filter(
        (K) => !h.value.trim() || K.name.toLowerCase().includes(h.value.toLowerCase())
      )
    ), L = O(
      () => g.value ? F.value : F.value.slice(0, 5)
    );
    async function V() {
      p.value = !0, f.value = null;
      try {
        v.value = await l();
      } catch (K) {
        f.value = K instanceof Error ? K.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    function M(K) {
      y.value = K, k.value = !0;
    }
    function R(K) {
      y.value = K, _.value = !0;
    }
    function N() {
      alert("Bulk resolution not yet implemented");
    }
    function P() {
      a("refresh");
    }
    return he(V), (K, S) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, { title: "WORKFLOWS" }, {
            actions: n(() => [
              w.value.length > 0 ? (o(), b(H, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: n(() => [...S[7] || (S[7] = [
                  m(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          c(je, {
            modelValue: h.value,
            "onUpdate:modelValue": S[0] || (S[0] = (D) => h.value = D),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          p.value ? (o(), b(De, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (o(), b(Oe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            T.value.length ? (o(), b(ve, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(T.value, (D) => (o(), b(ge, {
                  key: D.name,
                  status: "broken"
                }, {
                  icon: n(() => [...S[8] || (S[8] = [
                    m("⚠", -1)
                  ])]),
                  title: n(() => [
                    m(i(D.name), 1)
                  ]),
                  subtitle: n(() => [
                    m(" Missing: " + i(D.missing_nodes) + " nodes, " + i(D.missing_models) + " models ", 1)
                  ]),
                  actions: n(() => [
                    c(H, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => R(D.name)
                    }, {
                      default: n(() => [...S[9] || (S[9] = [
                        m(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    c(H, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => M(D.name)
                    }, {
                      default: n(() => [...S[10] || (S[10] = [
                        m(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            G.value.length ? (o(), b(ve, {
              key: 1,
              title: "NEW",
              count: G.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(G.value, (D) => (o(), b(ge, {
                  key: D.name,
                  status: "new"
                }, {
                  icon: n(() => [...S[11] || (S[11] = [
                    m("●", -1)
                  ])]),
                  title: n(() => [
                    m(i(D.name), 1)
                  ]),
                  subtitle: n(() => [...S[12] || (S[12] = [
                    m("New", -1)
                  ])]),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => M(D.name)
                    }, {
                      default: n(() => [...S[13] || (S[13] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            U.value.length ? (o(), b(ve, {
              key: 2,
              title: "MODIFIED",
              count: U.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(U.value, (D) => (o(), b(ge, {
                  key: D.name,
                  status: "modified"
                }, {
                  icon: n(() => [...S[14] || (S[14] = [
                    m("⚡", -1)
                  ])]),
                  title: n(() => [
                    m(i(D.name), 1)
                  ]),
                  subtitle: n(() => [...S[15] || (S[15] = [
                    m("Modified", -1)
                  ])]),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => M(D.name)
                    }, {
                      default: n(() => [...S[16] || (S[16] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            F.value.length ? (o(), b(ve, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: S[2] || (S[2] = (D) => u.value = D)
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(L.value, (D) => (o(), b(ge, {
                  key: D.name,
                  status: "synced"
                }, {
                  icon: n(() => [...S[17] || (S[17] = [
                    m("✓", -1)
                  ])]),
                  title: n(() => [
                    m(i(D.name), 1)
                  ]),
                  subtitle: n(() => [...S[18] || (S[18] = [
                    m("Synced", -1)
                  ])]),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => M(D.name)
                    }, {
                      default: n(() => [...S[19] || (S[19] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !g.value && F.value.length > 5 ? (o(), b(H, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: S[1] || (S[1] = (D) => g.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: n(() => [
                    m(" View all " + i(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            z.value.length ? d("", !0) : (o(), b(Me, {
              key: 4,
              icon: "📭",
              message: h.value ? `No workflows match '${h.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && y.value ? (o(), b(Kn, {
        key: 0,
        "workflow-name": y.value,
        onClose: S[3] || (S[3] = (D) => k.value = !1),
        onResolve: S[4] || (S[4] = (D) => R(y.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      _.value && y.value ? (o(), b(Cd, {
        key: 1,
        "workflow-name": y.value,
        onClose: S[5] || (S[5] = (D) => _.value = !1),
        onInstall: P,
        onRefresh: S[6] || (S[6] = (D) => a("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Yd = /* @__PURE__ */ Y(qd, [["__scopeId", "data-v-ee63730e"]]), Xd = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, a) => (o(), s("div", {
      class: Q(["summary-bar", t.variant])
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ Y(Xd, [["__scopeId", "data-v-ccb7816e"]]), Zd = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironmentModels: l, getStatus: v } = ke(), p = C([]), f = C([]), h = C("production"), u = C(!1), g = C(null), k = C(""), _ = C(!1);
    function y() {
      _.value = !1, a("navigate", "model-index");
    }
    const w = O(
      () => p.value.reduce((M, R) => M + (R.size || 0), 0)
    ), I = O(() => {
      if (!k.value.trim()) return p.value;
      const M = k.value.toLowerCase();
      return p.value.filter((R) => R.filename.toLowerCase().includes(M));
    }), $ = O(() => {
      if (!k.value.trim()) return f.value;
      const M = k.value.toLowerCase();
      return f.value.filter((R) => R.filename.toLowerCase().includes(M));
    }), E = O(
      () => I.value.filter((M) => M.type === "checkpoints")
    ), z = O(
      () => I.value.filter((M) => M.type === "loras")
    ), T = O(
      () => I.value.filter((M) => M.type !== "checkpoints" && M.type !== "loras")
    );
    function G(M) {
      if (!M) return "Unknown";
      const R = M / (1024 * 1024);
      return R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB`;
    }
    function U(M) {
      a("navigate", "model-index");
    }
    function F(M) {
      a("navigate", "model-index");
    }
    function L(M) {
      alert(`Download functionality not yet implemented for ${M}`);
    }
    async function V() {
      u.value = !0, g.value = null;
      try {
        const M = await l();
        p.value = M, f.value = [];
        const R = await v();
        h.value = R.environment || "production";
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return he(V), (M, R) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (N) => _.value = !0)
          })
        ]),
        search: n(() => [
          c(je, {
            modelValue: k.value,
            "onUpdate:modelValue": R[1] || (R[1] = (N) => k.value = N),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          u.value ? (o(), b(De, {
            key: 0,
            message: "Loading environment models..."
          })) : g.value ? (o(), b(Oe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            p.value.length ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                m(" Total: " + i(p.value.length) + " models • " + i(G(w.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            E.value.length ? (o(), b(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: E.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(E.value, (N) => (o(), b(ge, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[3] || (R[3] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(i(N.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(i(G(N.size)), 1)
                  ]),
                  details: n(() => [
                    c(ae, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    c(ae, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => U(N.hash)
                    }, {
                      default: n(() => [...R[4] || (R[4] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            z.value.length ? (o(), b(ve, {
              key: 2,
              title: "LORAS",
              count: z.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(z.value, (N) => (o(), b(ge, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[5] || (R[5] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(i(N.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(i(G(N.size)), 1)
                  ]),
                  details: n(() => [
                    c(ae, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    c(ae, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => U(N.hash)
                    }, {
                      default: n(() => [...R[6] || (R[6] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            T.value.length ? (o(), b(ve, {
              key: 3,
              title: "OTHER",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(T.value, (N) => (o(), b(ge, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[7] || (R[7] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(i(N.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(i(G(N.size)), 1)
                  ]),
                  details: n(() => [
                    c(ae, {
                      label: "Type:",
                      value: N.type
                    }, null, 8, ["value"]),
                    c(ae, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => U(N.hash)
                    }, {
                      default: n(() => [...R[8] || (R[8] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (o(), b(ve, {
              key: 4,
              title: "MISSING",
              count: $.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z($.value, (N) => (o(), b(ge, {
                  key: N.filename,
                  status: "broken"
                }, {
                  icon: n(() => [...R[9] || (R[9] = [
                    m("⚠", -1)
                  ])]),
                  title: n(() => [
                    m(i(N.filename), 1)
                  ]),
                  subtitle: n(() => [...R[10] || (R[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: n(() => {
                    var P;
                    return [
                      c(ae, {
                        label: "Required by:",
                        value: ((P = N.workflow_names) == null ? void 0 : P.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: n(() => [
                    c(H, {
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => L(N.filename)
                    }, {
                      default: n(() => [...R[11] || (R[11] = [
                        m(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    c(H, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => F(N.filename)
                    }, {
                      default: n(() => [...R[12] || (R[12] = [
                        m(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !I.value.length && !$.value.length ? (o(), b(Me, {
              key: 5,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: _.value,
        title: "About Environment Models",
        onClose: R[2] || (R[2] = (N) => _.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            R[13] || (R[13] = m(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + i(h.value) + '"', 1),
            R[14] || (R[14] = m(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: n(() => [
          c(H, {
            variant: "primary",
            onClick: y
          }, {
            default: n(() => [...R[15] || (R[15] = [
              m(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Jd = /* @__PURE__ */ Y(Zd, [["__scopeId", "data-v-72675609"]]), Qd = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: r } = ke(), a = C([]), l = C(!1), v = C(null), p = C(""), f = C(!1), h = O(
      () => a.value.reduce((L, V) => L + (V.size_mb || V.size || 0), 0)
    ), u = O(() => {
      const L = /* @__PURE__ */ new Set();
      return a.value.forEach((V) => {
        V.used_in_environments && V.used_in_environments.length > 0 && V.used_in_environments.forEach((M) => L.add(M.env_name));
      }), L.size;
    }), g = O(() => {
      if (!p.value.trim()) return a.value;
      const L = p.value.toLowerCase();
      return a.value.filter((V) => {
        const M = V, R = V.sha256 || M.sha256_hash || "";
        return V.filename.toLowerCase().includes(L) || R.toLowerCase().includes(L);
      });
    }), k = O(
      () => g.value.filter((L) => L.type === "checkpoints")
    ), _ = O(
      () => g.value.filter((L) => L.type === "loras")
    ), y = O(
      () => g.value.filter((L) => L.type !== "checkpoints" && L.type !== "loras")
    );
    function w(L) {
      return L ? L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB` : "Unknown";
    }
    function I(L) {
      const V = L, M = L.used_in_workflows || V.used_by || [];
      return !M || M.length === 0 ? "Not used" : `${M.length} workflow(s)`;
    }
    function $(L) {
      navigator.clipboard.writeText(L), alert("Hash copied to clipboard");
    }
    function E(L) {
      prompt("Enter model source URL:", L.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function z(L) {
      const V = L, M = L.used_in_workflows || V.used_by || [], R = M && M.length > 0 ? `

⚠ WARNING: This model is used by ${M.length} workflow(s):
${M.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${L.filename}?${R}

This will free ${w(V.size_mb || L.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function T() {
      alert("Scan for models not yet implemented");
    }
    function G() {
      alert("Change directory not yet implemented");
    }
    function U() {
      alert("Download new model not yet implemented");
    }
    async function F() {
      l.value = !0, v.value = null;
      try {
        a.value = await r(), console.log("Loaded models:", a.value), console.log("Filtered checkpoints:", k.value), console.log("Filtered loras:", _.value), console.log("Filtered other:", y.value);
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return he(F), (L, V) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: V[0] || (V[0] = (M) => f.value = !0)
          }, {
            actions: n(() => [
              c(H, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: n(() => [...V[3] || (V[3] = [
                  m(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              c(H, {
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: n(() => [...V[4] || (V[4] = [
                  m(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              c(H, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: n(() => [...V[5] || (V[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  m(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          c(je, {
            modelValue: p.value,
            "onUpdate:modelValue": V[1] || (V[1] = (M) => p.value = M),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          l.value ? (o(), b(De, {
            key: 0,
            message: "Loading workspace models..."
          })) : v.value ? (o(), b(Oe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            a.value.length ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                m(" Total: " + i(a.value.length) + " models • " + i(w(h.value)) + " • Used in " + i(u.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            k.value.length ? (o(), b(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(k.value, (M) => (o(), b(ge, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[6] || (V[6] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(i(M.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(i(w(M.size_mb || M.size)), 1)
                  ]),
                  details: n(() => {
                    var R, N;
                    return [
                      M.sha256 || M.sha256_hash ? (o(), b(ae, {
                        key: 0,
                        label: "SHA256:",
                        value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      c(ae, {
                        label: "Used in:",
                        value: I(M)
                      }, null, 8, ["value"]),
                      M.source_url || (R = M.sources) != null && R[0] ? (o(), b(ae, {
                        key: 1,
                        label: "Source URL:",
                        value: M.source_url || ((N = M.sources) == null ? void 0 : N[0])
                      }, null, 8, ["value"])) : (o(), b(ae, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...V[7] || (V[7] = [
                          m("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => E(M)
                    }, {
                      default: n(() => [...V[8] || (V[8] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(H, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => $(M.sha256 || M.sha256_hash)
                    }, {
                      default: n(() => [...V[9] || (V[9] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(H, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => z(M)
                    }, {
                      default: n(() => [...V[10] || (V[10] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? (o(), b(ve, {
              key: 2,
              title: "LORAS",
              count: _.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(_.value, (M) => (o(), b(ge, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[11] || (V[11] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(i(M.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(i(w(M.size_mb || M.size)), 1)
                  ]),
                  details: n(() => {
                    var R, N;
                    return [
                      M.sha256 || M.sha256_hash ? (o(), b(ae, {
                        key: 0,
                        label: "SHA256:",
                        value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      c(ae, {
                        label: "Used in:",
                        value: I(M)
                      }, null, 8, ["value"]),
                      M.source_url || (R = M.sources) != null && R[0] ? (o(), b(ae, {
                        key: 1,
                        label: "Source URL:",
                        value: M.source_url || ((N = M.sources) == null ? void 0 : N[0])
                      }, null, 8, ["value"])) : (o(), b(ae, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...V[12] || (V[12] = [
                          m("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => E(M)
                    }, {
                      default: n(() => [...V[13] || (V[13] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(H, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => $(M.sha256 || M.sha256_hash)
                    }, {
                      default: n(() => [...V[14] || (V[14] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(H, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => z(M)
                    }, {
                      default: n(() => [...V[15] || (V[15] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            y.value.length ? (o(), b(ve, {
              key: 3,
              title: "OTHER",
              count: y.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(y.value, (M) => (o(), b(ge, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[16] || (V[16] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(i(M.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(i(w(M.size_mb || M.size)), 1)
                  ]),
                  details: n(() => [
                    c(ae, {
                      label: "Type:",
                      value: M.type
                    }, null, 8, ["value"]),
                    M.sha256 || M.sha256_hash ? (o(), b(ae, {
                      key: 0,
                      label: "SHA256:",
                      value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    c(ae, {
                      label: "Used in:",
                      value: I(M)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => E(M)
                    }, {
                      default: n(() => [...V[17] || (V[17] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(H, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => $(M.sha256 || M.sha256_hash)
                    }, {
                      default: n(() => [...V[18] || (V[18] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(H, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => z(M)
                    }, {
                      default: n(() => [...V[19] || (V[19] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            g.value.length ? d("", !0) : (o(), b(Me, {
              key: 4,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: V[2] || (V[2] = (M) => f.value = !1)
      }, {
        content: n(() => [...V[20] || (V[20] = [
          e("p", null, [
            m(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            m(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ec = /* @__PURE__ */ Y(Qd, [["__scopeId", "data-v-5a24af01"]]), tc = { key: 0 }, oc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, sc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, ac = /* @__PURE__ */ q({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: r, installNode: a, updateNode: l, uninstallNode: v } = ke(), p = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), f = C(!1), h = C(null), u = C(""), g = C(!1), k = O(() => {
      if (!u.value.trim()) return p.value.nodes;
      const U = u.value.toLowerCase();
      return p.value.nodes.filter(
        (F) => {
          var L, V;
          return F.name.toLowerCase().includes(U) || ((L = F.description) == null ? void 0 : L.toLowerCase().includes(U)) || ((V = F.repository) == null ? void 0 : V.toLowerCase().includes(U));
        }
      );
    }), _ = O(
      () => k.value.filter((U) => U.installed)
    ), y = O(
      () => k.value.filter((U) => !U.installed)
    );
    function w(U) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[U] || U;
    }
    function I(U) {
      return !U.used_in_workflows || U.used_in_workflows.length === 0 ? "Not used in any workflows" : U.used_in_workflows.length === 1 ? U.used_in_workflows[0] : `${U.used_in_workflows.length} workflows`;
    }
    function $(U) {
      window.open(U, "_blank");
    }
    async function E(U) {
      if (confirm(`Install node "${U}"?

This will download and install the node from its repository.`))
        try {
          f.value = !0;
          const F = await a(U);
          F.status === "success" ? (alert(`Node "${U}" installed successfully!`), await G()) : alert(`Failed to install node: ${F.message || "Unknown error"}`);
        } catch (F) {
          alert(`Error installing node: ${F instanceof Error ? F.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
    }
    async function z(U) {
      if (confirm(`Check for updates for "${U}"?`))
        try {
          f.value = !0;
          const F = await l(U);
          F.status === "success" ? (alert(`Node "${U}" is up to date or has been updated!`), await G()) : alert(`Update check failed: ${F.message || "Unknown error"}`);
        } catch (F) {
          alert(`Error checking for updates: ${F instanceof Error ? F.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
    }
    async function T(U) {
      if (confirm(`Uninstall node "${U}"?

This will remove the node from this environment.`))
        try {
          f.value = !0;
          const F = await v(U);
          F.status === "success" ? (alert(`Node "${U}" uninstalled successfully!`), await G()) : alert(`Failed to uninstall node: ${F.message || "Unknown error"}`);
        } catch (F) {
          alert(`Error uninstalling node: ${F instanceof Error ? F.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
    }
    async function G() {
      f.value = !0, h.value = null;
      try {
        p.value = await r();
      } catch (U) {
        h.value = U instanceof Error ? U.message : "Failed to load nodes";
      } finally {
        f.value = !1;
      }
    }
    return he(G), (U, F) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: F[0] || (F[0] = (L) => g.value = !0)
          })
        ]),
        search: n(() => [
          c(je, {
            modelValue: u.value,
            "onUpdate:modelValue": F[1] || (F[1] = (L) => u.value = L),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          f.value ? (o(), b(De, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : h.value ? (o(), b(Oe, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            p.value.total_count ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                m(" Total: " + i(p.value.total_count) + " nodes • " + i(p.value.installed_count) + " installed • " + i(p.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            _.value.length ? (o(), b(ve, {
              key: 1,
              title: "INSTALLED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(_.value, (L) => (o(), b(ge, {
                  key: L.name,
                  status: "synced"
                }, {
                  icon: n(() => [...F[4] || (F[4] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(i(L.name), 1)
                  ]),
                  subtitle: n(() => [
                    L.version ? (o(), s("span", tc, "v" + i(L.version), 1)) : (o(), s("span", oc, "version unknown")),
                    L.source ? (o(), s("span", sc, " • " + i(w(L.source)), 1)) : d("", !0)
                  ]),
                  details: n(() => [
                    L.description ? (o(), b(ae, {
                      key: 0,
                      label: "Description:",
                      value: L.description
                    }, null, 8, ["value"])) : d("", !0),
                    L.repository ? (o(), b(ae, {
                      key: 1,
                      label: "Repository:",
                      value: L.repository
                    }, null, 8, ["value"])) : d("", !0),
                    c(ae, {
                      label: "Used by:",
                      value: I(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    L.repository ? (o(), b(H, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => $(L.repository)
                    }, {
                      default: n(() => [...F[5] || (F[5] = [
                        m(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    L.source === "registry" ? (o(), b(H, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => z(L.name)
                    }, {
                      default: n(() => [...F[6] || (F[6] = [
                        m(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    L.source !== "unknown" ? (o(), b(H, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (V) => T(L.name)
                    }, {
                      default: n(() => [...F[7] || (F[7] = [
                        m(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            y.value.length ? (o(), b(ve, {
              key: 2,
              title: "MISSING",
              count: y.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(y.value, (L) => (o(), b(ge, {
                  key: L.name,
                  status: "missing"
                }, {
                  icon: n(() => [...F[8] || (F[8] = [
                    m("⚠", -1)
                  ])]),
                  title: n(() => [
                    m(i(L.name), 1)
                  ]),
                  subtitle: n(() => [...F[9] || (F[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: n(() => [
                    L.description ? (o(), b(ae, {
                      key: 0,
                      label: "Description:",
                      value: L.description
                    }, null, 8, ["value"])) : d("", !0),
                    L.repository ? (o(), b(ae, {
                      key: 1,
                      label: "Repository:",
                      value: L.repository
                    }, null, 8, ["value"])) : d("", !0),
                    c(ae, {
                      label: "Required by:",
                      value: I(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    L.download_url ? (o(), b(H, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => E(L.name)
                    }, {
                      default: n(() => [...F[10] || (F[10] = [
                        m(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    L.repository ? (o(), b(H, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => $(L.repository)
                    }, {
                      default: n(() => [...F[11] || (F[11] = [
                        m(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !_.value.length && !y.value.length ? (o(), b(Me, {
              key: 3,
              icon: "📭",
              message: u.value ? `No nodes match '${u.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: g.value,
        title: "About Git-Tracked Nodes",
        onClose: F[3] || (F[3] = (L) => g.value = !1)
      }, {
        content: n(() => [...F[12] || (F[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            m(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            m(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: n(() => [
          c(H, {
            variant: "primary",
            onClick: F[2] || (F[2] = (L) => g.value = !1)
          }, {
            default: n(() => [...F[13] || (F[13] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nc = /* @__PURE__ */ Y(ac, [["__scopeId", "data-v-c480e2c1"]]), lc = { class: "remote-url-display" }, ic = ["title"], rc = ["title"], dc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, cc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, uc = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, a = C(!1), l = O(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const p = r.url.slice(0, Math.floor(r.maxLength * 0.6)), f = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${p}...${f}`;
    });
    async function v() {
      try {
        await navigator.clipboard.writeText(r.url), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, f) => (o(), s("div", lc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, i(l.value), 9, ic),
      e("button", {
        class: Q(["copy-btn", { copied: a.value }]),
        onClick: v,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (o(), s("svg", cc, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", dc, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, rc)
    ]));
  }
}), xt = /* @__PURE__ */ Y(uc, [["__scopeId", "data-v-7768a58d"]]), mc = { class: "remote-title" }, vc = {
  key: 0,
  class: "default-badge"
}, fc = {
  key: 1,
  class: "sync-badge"
}, gc = {
  key: 0,
  class: "ahead"
}, hc = {
  key: 1,
  class: "behind"
}, pc = {
  key: 0,
  class: "tracking-info"
}, yc = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const a = t, l = O(() => a.fetchingRemote === a.remote.name), v = O(() => a.remote.is_default), p = O(() => !!a.trackingBranch);
    function f(h) {
      const u = new Date(h), k = (/* @__PURE__ */ new Date()).getTime() - u.getTime(), _ = Math.floor(k / 6e4);
      if (_ < 1) return "Just now";
      if (_ < 60) return `${_}m ago`;
      const y = Math.floor(_ / 60);
      if (y < 24) return `${y}h ago`;
      const w = Math.floor(y / 24);
      return w < 7 ? `${w}d ago` : u.toLocaleDateString();
    }
    return (h, u) => (o(), b(ge, {
      status: v.value ? "synced" : void 0
    }, {
      icon: n(() => [
        m(i(v.value ? "🔗" : "🌐"), 1)
      ]),
      title: n(() => [
        e("div", mc, [
          e("span", null, i(t.remote.name), 1),
          v.value ? (o(), s("span", vc, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), s("span", fc, [
            t.syncStatus.ahead > 0 ? (o(), s("span", gc, "↑" + i(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", hc, "↓" + i(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: n(() => [
        p.value ? (o(), s("span", pc, " Tracking: " + i(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: n(() => {
        var g;
        return [
          c(ae, { label: "Fetch:" }, {
            default: n(() => [
              c(xt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), b(ae, {
            key: 0,
            label: "Push:"
          }, {
            default: n(() => [
              c(xt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (g = t.syncStatus) != null && g.last_fetch ? (o(), b(ae, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: n(() => [
              e("span", null, i(f(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: n(() => [
        c(H, {
          variant: "primary",
          size: "xs",
          loading: l.value,
          onClick: u[0] || (u[0] = (g) => h.$emit("fetch", t.remote.name))
        }, {
          default: n(() => [...u[3] || (u[3] = [
            m(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        c(H, {
          variant: "secondary",
          size: "xs",
          onClick: u[1] || (u[1] = (g) => h.$emit("edit", t.remote.name))
        }, {
          default: n(() => [...u[4] || (u[4] = [
            m(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        v.value ? d("", !0) : (o(), b(H, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: u[2] || (u[2] = (g) => h.$emit("remove", t.remote.name))
        }, {
          default: n(() => [...u[5] || (u[5] = [
            m(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), wc = /* @__PURE__ */ Y(yc, [["__scopeId", "data-v-17362e45"]]), kc = ["for"], bc = {
  key: 0,
  class: "base-form-field-required"
}, _c = { class: "base-form-field-input" }, $c = {
  key: 1,
  class: "base-form-field-error"
}, Cc = {
  key: 2,
  class: "base-form-field-hint"
}, xc = /* @__PURE__ */ q({
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
    const r = t, a = O(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, v) => (o(), s("div", {
      class: Q(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: a.value,
        class: "base-form-field-label"
      }, [
        m(i(t.label) + " ", 1),
        t.required ? (o(), s("span", bc, "*")) : d("", !0)
      ], 8, kc)) : d("", !0),
      e("div", _c, [
        le(l.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", $c, i(t.error), 1)) : t.hint ? (o(), s("span", Cc, i(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), mt = /* @__PURE__ */ Y(xc, [["__scopeId", "data-v-9a1cf296"]]), Sc = { class: "remote-form" }, Ic = { class: "form-header" }, Ec = { class: "form-body" }, zc = {
  key: 0,
  class: "form-error"
}, Mc = { class: "form-actions" }, Lc = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const a = t, l = r, v = C({
      name: a.remoteName,
      fetchUrl: a.fetchUrl,
      pushUrl: a.pushUrl
    }), p = C(!1), f = C(null);
    Et(() => [a.remoteName, a.fetchUrl, a.pushUrl], () => {
      v.value = {
        name: a.remoteName,
        fetchUrl: a.fetchUrl,
        pushUrl: a.pushUrl
      };
    });
    const h = O(() => v.value.name.trim() !== "" && v.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!h.value || p.value)) {
        f.value = null, p.value = !0;
        try {
          l("submit", v.value);
        } catch (g) {
          f.value = g instanceof Error ? g.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (g, k) => (o(), s("div", Sc, [
      e("div", Ic, [
        c(_e, null, {
          default: n(() => [
            m(i(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Ec, [
        c(mt, {
          label: "Remote Name",
          required: ""
        }, {
          default: n(() => [
            c(Ae, {
              modelValue: v.value.name,
              "onUpdate:modelValue": k[0] || (k[0] = (_) => v.value.name = _),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        c(mt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: n(() => [
            c(Ae, {
              modelValue: v.value.fetchUrl,
              "onUpdate:modelValue": k[1] || (k[1] = (_) => v.value.fetchUrl = _),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c(mt, { label: "Push URL (optional)" }, {
          default: n(() => [
            c(Ae, {
              modelValue: v.value.pushUrl,
              "onUpdate:modelValue": k[2] || (k[2] = (_) => v.value.pushUrl = _),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f.value ? (o(), s("div", zc, i(f.value), 1)) : d("", !0)
      ]),
      e("div", Mc, [
        c(H, {
          variant: "primary",
          size: "md",
          disabled: !h.value,
          loading: p.value,
          onClick: u
        }, {
          default: n(() => [
            m(i(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        c(H, {
          variant: "ghost",
          size: "md",
          onClick: k[3] || (k[3] = (_) => g.$emit("cancel"))
        }, {
          default: n(() => [...k[4] || (k[4] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Rc = /* @__PURE__ */ Y(Lc, [["__scopeId", "data-v-56021b18"]]), Nc = { key: 0 }, Uc = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: a,
      removeRemote: l,
      updateRemoteUrl: v,
      fetchRemote: p,
      getRemoteSyncStatus: f
    } = ke(), h = C([]), u = C(null), g = C({}), k = C(!1), _ = C(null), y = C(""), w = C(!1), I = C(null), $ = C(!1), E = C("add"), z = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = O(() => {
      if (!y.value.trim()) return h.value;
      const K = y.value.toLowerCase();
      return h.value.filter(
        (S) => S.name.toLowerCase().includes(K) || S.fetch_url.toLowerCase().includes(K) || S.push_url.toLowerCase().includes(K)
      );
    });
    function G(K) {
      var S;
      return ((S = u.value) == null ? void 0 : S.remote) === K;
    }
    async function U() {
      k.value = !0, _.value = null;
      try {
        const K = await r();
        h.value = K.remotes, u.value = K.current_branch_tracking || null, await Promise.all(
          K.remotes.map(async (S) => {
            const D = await f(S.name);
            D && (g.value[S.name] = D);
          })
        );
      } catch (K) {
        _.value = K instanceof Error ? K.message : "Failed to load remotes";
      } finally {
        k.value = !1;
      }
    }
    function F() {
      E.value = "add", z.value = { name: "", fetchUrl: "", pushUrl: "" }, $.value = !0;
    }
    function L(K) {
      const S = h.value.find((D) => D.name === K);
      S && (E.value = "edit", z.value = {
        name: S.name,
        fetchUrl: S.fetch_url,
        pushUrl: S.push_url
      }, $.value = !0);
    }
    async function V(K) {
      try {
        E.value === "add" ? await a(K.name, K.fetchUrl) : await v(K.name, K.fetchUrl, K.pushUrl || void 0), $.value = !1, await U();
      } catch (S) {
        _.value = S instanceof Error ? S.message : "Operation failed";
      }
    }
    function M() {
      $.value = !1, z.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function R(K) {
      I.value = K;
      try {
        await p(K);
        const S = await f(K);
        S && (g.value[K] = S);
      } catch (S) {
        _.value = S instanceof Error ? S.message : "Fetch failed";
      } finally {
        I.value = null;
      }
    }
    async function N(K) {
      if (confirm(`Remove remote "${K}"?`))
        try {
          await l(K), await U();
        } catch (S) {
          _.value = S instanceof Error ? S.message : "Failed to remove remote";
        }
    }
    function P() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return he(U), (K, S) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (D) => w.value = !0)
          }, {
            actions: n(() => [
              $.value ? d("", !0) : (o(), b(H, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: n(() => [...S[3] || (S[3] = [
                  m(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          $.value ? d("", !0) : (o(), b(je, {
            key: 0,
            modelValue: y.value,
            "onUpdate:modelValue": S[1] || (S[1] = (D) => y.value = D),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: n(() => [
          k.value ? (o(), b(De, {
            key: 0,
            message: "Loading remotes..."
          })) : _.value ? (o(), b(Oe, {
            key: 1,
            message: _.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            $.value ? (o(), b(Rc, {
              key: 0,
              mode: E.value,
              "remote-name": z.value.name,
              "fetch-url": z.value.fetchUrl,
              "push-url": z.value.pushUrl,
              onSubmit: V,
              onCancel: M
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            h.value.length && !$.value ? (o(), b(Ke, {
              key: 1,
              variant: "compact"
            }, {
              default: n(() => [
                m(" Total: " + i(h.value.length) + " remote" + i(h.value.length !== 1 ? "s" : "") + " ", 1),
                u.value ? (o(), s("span", Nc, " • Tracking: " + i(u.value.remote) + "/" + i(u.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            T.value.length && !$.value ? (o(), b(ve, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), s(j, null, Z(T.value, (D) => {
                  var se;
                  return o(), b(wc, {
                    key: D.name,
                    remote: D,
                    "sync-status": g.value[D.name],
                    "tracking-branch": G(D.name) ? (se = u.value) == null ? void 0 : se.branch : void 0,
                    "fetching-remote": I.value,
                    onFetch: R,
                    onEdit: L,
                    onRemove: N
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !T.value.length && !$.value ? (o(), b(Me, {
              key: 3,
              icon: "🌐",
              message: y.value ? `No remotes match '${y.value}'` : "No remotes configured."
            }, {
              actions: n(() => [
                c(H, {
                  variant: "primary",
                  onClick: F
                }, {
                  default: n(() => [...S[4] || (S[4] = [
                    m(" Add Your First Remote ", -1)
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
      c(Be, {
        show: w.value,
        title: "About Git Remotes",
        onClose: S[2] || (S[2] = (D) => w.value = !1)
      }, {
        content: n(() => [...S[5] || (S[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            m(" The "),
            e("strong", null, '"origin"'),
            m(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: n(() => [
          c(H, {
            variant: "link",
            onClick: P
          }, {
            default: n(() => [...S[6] || (S[6] = [
              m(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Tc = /* @__PURE__ */ Y(Uc, [["__scopeId", "data-v-a75719bb"]]), Bc = { class: "setting-info" }, Dc = { class: "setting-label" }, Oc = {
  key: 0,
  class: "required-marker"
}, Vc = {
  key: 0,
  class: "setting-description"
}, Ac = { class: "setting-control" }, Fc = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (o(), s("div", {
      class: Q(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Bc, [
        e("div", Dc, [
          m(i(t.label) + " ", 1),
          t.required ? (o(), s("span", Oc, "*")) : d("", !0)
        ]),
        t.description ? (o(), s("div", Vc, i(t.description), 1)) : d("", !0)
      ]),
      e("div", Ac, [
        le(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ Y(Fc, [["__scopeId", "data-v-cb5d236c"]]), Wc = { class: "toggle" }, Pc = ["checked", "disabled"], Hc = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (o(), s("label", Wc, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (l) => r.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, Pc),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), He = /* @__PURE__ */ Y(Hc, [["__scopeId", "data-v-71c0f550"]]), Gc = { class: "settings-section" }, jc = { class: "path-setting" }, Kc = { class: "path-value" }, qc = { class: "path-setting" }, Yc = { class: "path-value" }, Xc = { class: "settings-section" }, Zc = { class: "settings-section" }, Jc = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: a } = ke(), l = C(!1), v = C(null), p = C(null), f = C(null), h = C(null), u = C(""), g = C(""), k = C(!0), _ = C(!0), y = O(() => h.value ? u.value !== (h.value.civitai_api_key || "") : !1);
    async function w() {
      l.value = !0, v.value = null;
      try {
        f.value = await r(), h.value = { ...f.value }, u.value = f.value.civitai_api_key || "", g.value = f.value.huggingface_token || "", k.value = f.value.auto_sync_models, _.value = f.value.confirm_destructive;
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function I() {
      var E;
      p.value = null;
      try {
        const z = {};
        u.value !== (((E = h.value) == null ? void 0 : E.civitai_api_key) || "") && (z.civitai_api_key = u.value || null), await a(z), await w(), p.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          p.value = null;
        }, 3e3);
      } catch (z) {
        p.value = {
          type: "error",
          message: z instanceof Error ? z.message : "Failed to save settings"
        };
      }
    }
    function $() {
      h.value && (u.value = h.value.civitai_api_key || "", g.value = h.value.huggingface_token || "", k.value = h.value.auto_sync_models, _.value = h.value.confirm_destructive, p.value = null);
    }
    return he(w), (E, z) => (o(), b(ye, null, {
      header: n(() => [
        c(we, { title: "WORKSPACE SETTINGS" }, {
          actions: n(() => [
            c(H, {
              variant: "primary",
              size: "sm",
              disabled: !y.value,
              onClick: I
            }, {
              default: n(() => [...z[4] || (z[4] = [
                m(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            y.value ? (o(), b(H, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: $
            }, {
              default: n(() => [...z[5] || (z[5] = [
                m(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: n(() => [
        l.value ? (o(), b(De, {
          key: 0,
          message: "Loading workspace settings..."
        })) : v.value ? (o(), b(Oe, {
          key: 1,
          message: v.value,
          retry: !0,
          onRetry: w
        }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
          c(ve, { title: "WORKSPACE PATHS" }, {
            default: n(() => {
              var T, G;
              return [
                e("div", Gc, [
                  e("div", jc, [
                    z[6] || (z[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    z[7] || (z[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Kc, i(((T = f.value) == null ? void 0 : T.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", qc, [
                    z[8] || (z[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    z[9] || (z[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Yc, i(((G = f.value) == null ? void 0 : G.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          c(ve, { title: "API CREDENTIALS" }, {
            default: n(() => [
              e("div", Xc, [
                c(Ve, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: n(() => [
                    c(Qe, {
                      modelValue: u.value,
                      "onUpdate:modelValue": z[0] || (z[0] = (T) => u.value = T),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(Ve, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(Qe, {
                      modelValue: g.value,
                      "onUpdate:modelValue": z[1] || (z[1] = (T) => g.value = T),
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
          c(ve, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: n(() => [
              e("div", Zc, [
                c(Ve, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(He, {
                      modelValue: k.value,
                      "onUpdate:modelValue": z[2] || (z[2] = (T) => k.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(Ve, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(He, {
                      modelValue: _.value,
                      "onUpdate:modelValue": z[3] || (z[3] = (T) => _.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          p.value ? (o(), b(Ke, {
            key: 0,
            variant: (p.value.type === "success", "compact")
          }, {
            default: n(() => [
              e("span", {
                style: et({ color: p.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, i(p.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Qc = /* @__PURE__ */ Y(Jc, [["__scopeId", "data-v-8b092643"]]), eu = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = ke(), a = C([]), l = C(!1), v = C(null), p = C(!1), f = C(null), h = O(() => a.value.length === 0 ? [] : a.value.map((g) => ({
      text: `${g.timestamp} - ${g.name} - ${g.level} - ${g.func}:${g.line} - ${g.message}`,
      level: g.level
    })));
    async function u() {
      l.value = !0, v.value = null;
      try {
        a.value = await r(void 0, 500);
      } catch (g) {
        v.value = g instanceof Error ? g.message : "Failed to load workspace logs";
      } finally {
        l.value = !1, setTimeout(() => {
          var g;
          (g = f.value) != null && g.parentElement && (f.value.parentElement.scrollTop = f.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return he(u), (g, k) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (_) => p.value = !0)
          }, {
            actions: n(() => [
              c(H, {
                variant: "secondary",
                size: "sm",
                onClick: u,
                disabled: l.value
              }, {
                default: n(() => [
                  m(i(l.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          l.value ? (o(), b(De, {
            key: 0,
            message: "Loading workspace logs..."
          })) : v.value ? (o(), b(Oe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            a.value.length === 0 ? (o(), b(Me, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: f,
              class: "log-output"
            }, [
              (o(!0), s(j, null, Z(h.value, (_, y) => (o(), s("div", {
                key: y,
                class: Q(`log-line log-level-${_.level.toLowerCase()}`)
              }, i(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: p.value,
        title: "About Workspace Logs",
        onClose: k[2] || (k[2] = (_) => p.value = !1)
      }, {
        content: n(() => [...k[3] || (k[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            m(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            m(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            m(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            m(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: n(() => [
          c(H, {
            variant: "primary",
            onClick: k[1] || (k[1] = (_) => p.value = !1)
          }, {
            default: n(() => [...k[4] || (k[4] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tu = /* @__PURE__ */ Y(eu, [["__scopeId", "data-v-39f6a756"]]), ou = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: a } = ke(), l = C([]), v = C(!1), p = C(null), f = C(!1), h = C("production"), u = C(null), g = O(() => l.value.length === 0 ? [] : l.value.map((_) => ({
      text: `${_.timestamp} - ${_.name} - ${_.level} - ${_.func}:${_.line} - ${_.message}`,
      level: _.level
    })));
    async function k() {
      v.value = !0, p.value = null;
      try {
        l.value = await r(void 0, 500);
        try {
          const _ = await a();
          h.value = _.environment || "production";
        } catch {
        }
      } catch (_) {
        p.value = _ instanceof Error ? _.message : "Failed to load environment logs";
      } finally {
        v.value = !1, setTimeout(() => {
          var _;
          (_ = u.value) != null && _.parentElement && (u.value.parentElement.scrollTop = u.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return he(k), (_, y) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: y[0] || (y[0] = (w) => f.value = !0)
          }, {
            actions: n(() => [
              c(H, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: v.value
              }, {
                default: n(() => [
                  m(i(v.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          v.value ? (o(), b(De, {
            key: 0,
            message: "Loading environment logs..."
          })) : p.value ? (o(), b(Oe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            l.value.length === 0 ? (o(), b(Me, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: u,
              class: "log-output"
            }, [
              (o(!0), s(j, null, Z(g.value, (w, I) => (o(), s("div", {
                key: I,
                class: Q(`log-line log-level-${w.level.toLowerCase()}`)
              }, i(w.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: f.value,
        title: "About Environment Logs",
        onClose: y[2] || (y[2] = (w) => f.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            y[3] || (y[3] = m(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, i(h.value), 1),
            y[4] || (y[4] = m(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          y[5] || (y[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            m(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            m(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            m(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            m(" Detailed debugging information ")
          ], -1)),
          y[6] || (y[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: n(() => [
          c(H, {
            variant: "primary",
            onClick: y[1] || (y[1] = (w) => f.value = !1)
          }, {
            default: n(() => [...y[7] || (y[7] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), su = /* @__PURE__ */ Y(ou, [["__scopeId", "data-v-4f1e6f72"]]), au = { class: "env-title" }, nu = {
  key: 0,
  class: "current-badge"
}, lu = {
  key: 0,
  class: "branch-info"
}, iu = /* @__PURE__ */ q({
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
    return (r, a) => (o(), b(ge, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: n(() => [
        m(i(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: n(() => [
        e("div", au, [
          e("span", null, i(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", nu, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: n(() => [
        t.currentBranch ? (o(), s("span", lu, [
          a[0] || (a[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          m(" " + i(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      details: n(() => [
        c(ae, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        c(ae, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        c(ae, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), b(ae, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : d("", !0)
      ]),
      actions: n(() => [
        le(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), ru = /* @__PURE__ */ Y(iu, [["__scopeId", "data-v-5238e57c"]]), du = {
  key: 0,
  class: "create-form"
}, cu = { class: "create-form__header" }, uu = { class: "create-form__body" }, mu = { class: "create-form__actions" }, vu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, fu = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironments: l } = ke(), v = C([]), p = C(!1), f = C(null), h = C(""), u = C(!1), g = C(!1), k = C(""), _ = O(
      () => v.value.find((G) => G.is_current)
    ), y = O(() => {
      if (!h.value.trim()) return v.value;
      const G = h.value.toLowerCase();
      return v.value.filter(
        (U) => {
          var F;
          return U.name.toLowerCase().includes(G) || ((F = U.current_branch) == null ? void 0 : F.toLowerCase().includes(G));
        }
      );
    });
    function w(G) {
      if (!G) return "";
      try {
        const U = new Date(G), L = (/* @__PURE__ */ new Date()).getTime() - U.getTime(), V = Math.floor(L / 6e4), M = Math.floor(L / 36e5), R = Math.floor(L / 864e5);
        return V < 1 ? "just now" : V < 60 ? `${V} ${V === 1 ? "minute" : "minutes"} ago` : M < 24 ? `${M} ${M === 1 ? "hour" : "hours"} ago` : R < 30 ? `${R} ${R === 1 ? "day" : "days"} ago` : U.toLocaleDateString();
      } catch {
        return G;
      }
    }
    function I() {
      const G = k.value.trim();
      G && (a("create", G), k.value = "", g.value = !1);
    }
    function $() {
      k.value = "", g.value = !1;
    }
    function E(G) {
      a("viewDetails", G);
    }
    function z(G) {
      confirm(`Delete environment "${G}"?

This action cannot be undone.`) && a("delete", G);
    }
    async function T() {
      p.value = !0, f.value = null;
      try {
        v.value = await l();
      } catch (G) {
        f.value = G instanceof Error ? G.message : "Failed to load environments";
      } finally {
        p.value = !1;
      }
    }
    return he(T), (G, U) => {
      const F = Zt("SectionGroup");
      return o(), s(j, null, [
        c(ye, null, {
          header: n(() => [
            c(we, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: U[1] || (U[1] = (L) => u.value = !0)
            }, {
              actions: n(() => [
                c(H, {
                  variant: "ghost",
                  size: "sm",
                  onClick: U[0] || (U[0] = (L) => g.value = !0),
                  title: "Create new environment"
                }, {
                  default: n(() => [...U[7] || (U[7] = [
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
                c(H, {
                  variant: "ghost",
                  size: "sm",
                  onClick: T,
                  title: "Refresh environments"
                }, {
                  default: n(() => [...U[8] || (U[8] = [
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
          search: n(() => [
            c(je, {
              modelValue: h.value,
              "onUpdate:modelValue": U[2] || (U[2] = (L) => h.value = L),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: n(() => [
            p.value ? (o(), b(De, {
              key: 0,
              message: "Loading environments..."
            })) : f.value ? (o(), b(Oe, {
              key: 1,
              message: f.value,
              retry: !0,
              onRetry: T
            }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
              g.value ? (o(), s("div", du, [
                e("div", cu, [
                  U[10] || (U[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  c(H, {
                    variant: "ghost",
                    size: "xs",
                    onClick: $
                  }, {
                    default: n(() => [...U[9] || (U[9] = [
                      m(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", uu, [
                  c(Qe, {
                    modelValue: k.value,
                    "onUpdate:modelValue": U[3] || (U[3] = (L) => k.value = L),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Te(I, ["enter"]),
                      Te($, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", mu, [
                    c(H, {
                      variant: "primary",
                      size: "sm",
                      onClick: I,
                      disabled: !k.value.trim()
                    }, {
                      default: n(() => [...U[11] || (U[11] = [
                        m(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    c(H, {
                      variant: "secondary",
                      size: "sm",
                      onClick: $
                    }, {
                      default: n(() => [...U[12] || (U[12] = [
                        m(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : d("", !0),
              v.value.length ? (o(), b(Ke, {
                key: 1,
                variant: "compact"
              }, {
                default: n(() => [
                  m(" Total: " + i(v.value.length) + " " + i(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                  _.value ? (o(), s(j, { key: 0 }, [
                    U[13] || (U[13] = m(" • Current: ", -1)),
                    e("strong", null, i(_.value.name), 1)
                  ], 64)) : d("", !0)
                ]),
                _: 1
              })) : d("", !0),
              y.value.length ? (o(), b(F, {
                key: 2,
                title: "ENVIRONMENTS",
                count: y.value.length
              }, {
                default: n(() => [
                  (o(!0), s(j, null, Z(y.value, (L) => (o(), b(ru, {
                    key: L.name,
                    "environment-name": L.name,
                    "is-current": L.is_current,
                    "current-branch": L.current_branch,
                    "workflow-count": L.workflow_count,
                    "node-count": L.node_count,
                    "model-count": L.model_count,
                    "last-used": w(L.last_used),
                    "show-last-used": !!L.last_used
                  }, {
                    actions: n(() => [
                      L.is_current ? d("", !0) : (o(), b(H, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (V) => G.$emit("switch", L.name)
                      }, {
                        default: n(() => [...U[14] || (U[14] = [
                          m(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      c(H, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (V) => E(L.name),
                        title: "View environment details"
                      }, {
                        default: n(() => [...U[15] || (U[15] = [
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
                      !L.is_current && v.value.length > 1 ? (o(), b(H, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (V) => z(L.name),
                        title: "Delete environment"
                      }, {
                        default: n(() => [
                          (o(), s("svg", vu, [...U[16] || (U[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
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
              y.value.length ? d("", !0) : (o(), b(Me, {
                key: 3,
                icon: "🌍",
                message: h.value ? `No environments match '${h.value}'` : "No environments found. Create one to get started!"
              }, zt({ _: 2 }, [
                h.value ? void 0 : {
                  name: "actions",
                  fn: n(() => [
                    c(H, {
                      variant: "primary",
                      onClick: U[4] || (U[4] = (L) => g.value = !0)
                    }, {
                      default: n(() => [...U[17] || (U[17] = [
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
        c(Be, {
          show: u.value,
          title: "About Environments",
          onClose: U[6] || (U[6] = (L) => u.value = !1)
        }, {
          content: n(() => [...U[18] || (U[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              m(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          actions: n(() => [
            c(H, {
              variant: "secondary",
              onClick: U[5] || (U[5] = (L) => u.value = !1)
            }, {
              default: n(() => [...U[19] || (U[19] = [
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
}), gu = /* @__PURE__ */ Y(fu, [["__scopeId", "data-v-97d6527d"]]), hu = { class: "file-path" }, pu = { class: "file-path-text" }, yu = ["title"], wu = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = C(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(r.path), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy:", v);
      }
    }
    return (v, p) => (o(), s("div", hu, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", pu, i(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: l
      }, i(a.value ? "✓" : "📋"), 9, yu)) : d("", !0)
    ]));
  }
}), ku = /* @__PURE__ */ Y(wu, [["__scopeId", "data-v-f0982173"]]), bu = { class: "output-path-input" }, _u = { class: "export-actions" }, $u = {
  key: 1,
  class: "export-warning"
}, Cu = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = ke(), a = C(""), l = C(!1), v = C(null), p = C(!1);
    async function f() {
      l.value = !0, v.value = null;
      try {
        const u = await r(a.value || void 0);
        v.value = u;
      } catch (u) {
        v.value = {
          status: "error",
          message: u instanceof Error ? u.message : "Unknown error occurred"
        };
      } finally {
        l.value = !1;
      }
    }
    async function h() {
      var u;
      if ((u = v.value) != null && u.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (g) {
          console.error("Failed to copy path:", g);
        }
    }
    return (u, g) => (o(), s(j, null, [
      c(ye, null, {
        header: n(() => [
          c(we, { title: "EXPORT ENVIRONMENT" }, {
            actions: n(() => [
              c(H, {
                variant: "ghost",
                size: "sm",
                onClick: g[0] || (g[0] = (k) => p.value = !0),
                title: "About exporting"
              }, {
                default: n(() => [...g[5] || (g[5] = [
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
        content: n(() => [
          c(ve, { title: "WHAT WILL BE EXPORTED" }, {
            default: n(() => [
              c(ge, { status: "synced" }, {
                icon: n(() => [...g[6] || (g[6] = [
                  m("📦", -1)
                ])]),
                title: n(() => [...g[7] || (g[7] = [
                  m("Environment Snapshot", -1)
                ])]),
                subtitle: n(() => [...g[8] || (g[8] = [
                  m(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: n(() => [
                  c(ae, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  c(ae, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  c(ae, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  c(ae, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          c(ve, { title: "EXPORT OPTIONS" }, {
            default: n(() => [
              c(ge, { status: "synced" }, {
                icon: n(() => [...g[9] || (g[9] = [
                  m("📁", -1)
                ])]),
                title: n(() => [...g[10] || (g[10] = [
                  m("Output Destination", -1)
                ])]),
                subtitle: n(() => [...g[11] || (g[11] = [
                  m(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: n(() => [
                  e("div", bu, [
                    c(Qe, {
                      modelValue: a.value,
                      "onUpdate:modelValue": g[1] || (g[1] = (k) => a.value = k),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          c(ve, { title: "EXPORT" }, {
            default: n(() => [
              e("div", _u, [
                c(H, {
                  variant: "primary",
                  size: "md",
                  loading: l.value,
                  disabled: l.value,
                  onClick: f
                }, {
                  default: n(() => [
                    g[12] || (g[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    m(" " + i(l.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                a.value ? (o(), b(H, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: l.value,
                  onClick: g[2] || (g[2] = (k) => a.value = "")
                }, {
                  default: n(() => [...g[13] || (g[13] = [
                    m(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), b(ve, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: n(() => [
              c(ge, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, zt({
                icon: n(() => [
                  m(i(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: n(() => [
                  m(i(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: n(() => [
                  m(i(v.value.status === "success" ? "Your environment has been exported" : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: n(() => [
                    c(ae, { label: "Saved to:" }, {
                      default: n(() => [
                        c(ku, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (o(), b(ae, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (o(), s("div", $u, [...g[14] || (g[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: n(() => [
                    c(H, {
                      variant: "secondary",
                      size: "sm",
                      onClick: h
                    }, {
                      default: n(() => [...g[15] || (g[15] = [
                        m(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    c(H, {
                      variant: "ghost",
                      size: "sm",
                      onClick: g[3] || (g[3] = (k) => v.value = null)
                    }, {
                      default: n(() => [...g[16] || (g[16] = [
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
          })) : d("", !0)
        ]),
        _: 1
      }),
      c(Be, {
        show: p.value,
        title: "About Environment Export",
        onClose: g[4] || (g[4] = (k) => p.value = !1)
      }, {
        content: n(() => [...g[17] || (g[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            m(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), xu = /* @__PURE__ */ Y(Cu, [["__scopeId", "data-v-1777a9d5"]]), Su = { class: "file-input-wrapper" }, Iu = ["accept", "multiple", "disabled"], Eu = /* @__PURE__ */ q({
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
  setup(t, { expose: r, emit: a }) {
    const l = a, v = C(null);
    function p() {
      var h;
      (h = v.value) == null || h.click();
    }
    function f(h) {
      const u = h.target;
      u.files && u.files.length > 0 && (l("change", u.files), u.value = "");
    }
    return r({
      triggerInput: p
    }), (h, u) => (o(), s("div", Su, [
      e("input", {
        ref_key: "fileInputRef",
        ref: v,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, Iu),
      c(H, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: n(() => [
          le(h.$slots, "default", {}, () => [
            u[0] || (u[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            m(" " + i(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), zu = /* @__PURE__ */ Y(Eu, [["__scopeId", "data-v-cd192091"]]), Mu = {
  key: 0,
  class: "drop-zone-empty"
}, Lu = { class: "drop-zone-text" }, Ru = { class: "drop-zone-primary" }, Nu = { class: "drop-zone-secondary" }, Uu = { class: "drop-zone-actions" }, Tu = {
  key: 1,
  class: "drop-zone-file"
}, Bu = { class: "file-info" }, Du = { class: "file-details" }, Ou = { class: "file-name" }, Vu = { class: "file-size" }, Au = /* @__PURE__ */ q({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: r }) {
    const a = r, l = C(!1), v = C(null), p = C(0), f = O(() => v.value !== null), h = O(() => {
      var E;
      return ((E = v.value) == null ? void 0 : E.name) || "";
    }), u = O(() => {
      if (!v.value) return "";
      const E = v.value.size;
      return E < 1024 ? `${E} B` : E < 1024 * 1024 ? `${(E / 1024).toFixed(1)} KB` : E < 1024 * 1024 * 1024 ? `${(E / (1024 * 1024)).toFixed(1)} MB` : `${(E / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function g(E) {
      var z;
      p.value++, (z = E.dataTransfer) != null && z.types.includes("Files") && (l.value = !0);
    }
    function k(E) {
      E.dataTransfer && (E.dataTransfer.dropEffect = "copy");
    }
    function _() {
      p.value--, p.value === 0 && (l.value = !1);
    }
    function y(E) {
      var T;
      p.value = 0, l.value = !1;
      const z = (T = E.dataTransfer) == null ? void 0 : T.files;
      z && z.length > 0 && I(z[0]);
    }
    function w(E) {
      E.length > 0 && I(E[0]);
    }
    function I(E) {
      v.value = E, a("fileSelected", E);
    }
    function $() {
      v.value = null, a("clear");
    }
    return (E, z) => (o(), s("div", {
      class: Q(["file-drop-zone", { "drop-active": l.value, "has-file": f.value }]),
      onDragenter: fe(g, ["prevent"]),
      onDragover: fe(k, ["prevent"]),
      onDragleave: fe(_, ["prevent"]),
      onDrop: fe(y, ["prevent"])
    }, [
      f.value ? (o(), s("div", Tu, [
        e("div", Bu, [
          z[1] || (z[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Du, [
            e("div", Ou, i(h.value), 1),
            e("div", Vu, i(u.value), 1)
          ])
        ]),
        c(H, {
          variant: "ghost",
          size: "xs",
          onClick: $,
          title: "Remove file"
        }, {
          default: n(() => [...z[2] || (z[2] = [
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
      ])) : (o(), s("div", Mu, [
        z[0] || (z[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Lu, [
          e("p", Ru, i(t.primaryText), 1),
          e("p", Nu, i(t.secondaryText), 1)
        ]),
        e("div", Uu, [
          c(zu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: w
          }, {
            default: n(() => [
              m(i(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Fu = /* @__PURE__ */ Y(Au, [["__scopeId", "data-v-e00abbca"]]), Wu = { class: "import-preview" }, Pu = { class: "preview-header" }, Hu = {
  key: 0,
  class: "source-env"
}, Gu = { class: "preview-content" }, ju = { class: "preview-section" }, Ku = { class: "section-header" }, qu = { class: "section-info" }, Yu = { class: "section-count" }, Xu = {
  key: 0,
  class: "item-list"
}, Zu = { class: "item-name" }, Ju = {
  key: 0,
  class: "item-more"
}, Qu = { class: "preview-section" }, em = { class: "section-header" }, tm = { class: "section-info" }, om = { class: "section-count" }, sm = {
  key: 0,
  class: "item-list"
}, am = { class: "item-details" }, nm = { class: "item-name" }, lm = { class: "item-meta" }, im = {
  key: 0,
  class: "item-more"
}, rm = { class: "preview-section" }, dm = { class: "section-header" }, cm = { class: "section-info" }, um = { class: "section-count" }, mm = {
  key: 0,
  class: "item-list"
}, vm = { class: "item-name" }, fm = {
  key: 0,
  class: "item-more"
}, gm = {
  key: 0,
  class: "preview-section"
}, hm = { class: "git-info" }, pm = /* @__PURE__ */ q({
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
    const r = t, a = O(() => r.workflows.length), l = O(() => r.models.length), v = O(() => r.nodes.length);
    function p(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, h) => (o(), s("div", Wu, [
      e("div", Pu, [
        c(_e, null, {
          default: n(() => [...h[0] || (h[0] = [
            m("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Hu, [
          h[1] || (h[1] = m(" From: ", -1)),
          c(gt, null, {
            default: n(() => [
              m(i(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", Gu, [
        e("div", ju, [
          e("div", Ku, [
            h[3] || (h[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", qu, [
              h[2] || (h[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Yu, i(a.value) + " file" + i(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", Xu, [
            (o(!0), s(j, null, Z(t.workflows.slice(0, t.maxPreviewItems), (u) => (o(), s("div", {
              key: u,
              class: "preview-item"
            }, [
              h[4] || (h[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Zu, i(u), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", Ju, " +" + i(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Qu, [
          e("div", em, [
            h[6] || (h[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", tm, [
              h[5] || (h[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", om, i(l.value) + " file" + i(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", sm, [
            (o(!0), s(j, null, Z(t.models.slice(0, t.maxPreviewItems), (u) => (o(), s("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              h[7] || (h[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", am, [
                e("span", nm, i(u.filename), 1),
                e("span", lm, i(p(u.size)) + " • " + i(u.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", im, " +" + i(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", rm, [
          e("div", dm, [
            h[9] || (h[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", cm, [
              h[8] || (h[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", um, i(v.value) + " node" + i(v.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", mm, [
            (o(!0), s(j, null, Z(t.nodes.slice(0, t.maxPreviewItems), (u) => (o(), s("div", {
              key: u,
              class: "preview-item"
            }, [
              h[10] || (h[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", vm, i(u), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", fm, " +" + i(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", gm, [
          h[11] || (h[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", hm, [
            t.gitBranch ? (o(), b(ae, {
              key: 0,
              label: "Branch"
            }, {
              default: n(() => [
                c(gt, null, {
                  default: n(() => [
                    m(i(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), b(ae, {
              key: 1,
              label: "Commit"
            }, {
              default: n(() => [
                c(Nt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), ym = /* @__PURE__ */ Y(pm, [["__scopeId", "data-v-182fe113"]]), wm = { class: "import-options" }, km = { class: "options-container" }, bm = { class: "option-section" }, _m = { class: "conflict-options" }, $m = ["value", "checked", "onChange"], Cm = { class: "conflict-content" }, xm = { class: "conflict-label" }, Sm = { class: "conflict-description" }, Im = { class: "option-section" }, Em = { class: "component-toggles" }, zm = /* @__PURE__ */ q({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: r }) {
    const a = r, l = [
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
    return (v, p) => (o(), s("div", wm, [
      c(_e, null, {
        default: n(() => [...p[4] || (p[4] = [
          m("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", km, [
        e("div", bm, [
          c(ft, null, {
            default: n(() => [...p[5] || (p[5] = [
              m("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", _m, [
            (o(), s(j, null, Z(l, (f) => e("label", {
              key: f.value,
              class: Q(["conflict-option", { active: t.conflictMode === f.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: f.value,
                checked: t.conflictMode === f.value,
                onChange: (h) => a("update:conflictMode", f.value)
              }, null, 40, $m),
              e("div", Cm, [
                e("span", xm, i(f.label), 1),
                e("span", Sm, i(f.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Im, [
          c(ft, null, {
            default: n(() => [...p[6] || (p[6] = [
              m("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Em, [
            c(Ve, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: n(() => [
                c(He, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": p[0] || (p[0] = (f) => a("update:includeWorkflows", f))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(Ve, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: n(() => [
                c(He, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": p[1] || (p[1] = (f) => a("update:includeModels", f))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(Ve, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: n(() => [
                c(He, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": p[2] || (p[2] = (f) => a("update:includeNodes", f))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(Ve, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: n(() => [
                c(He, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": p[3] || (p[3] = (f) => a("update:includeGitHistory", f))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Mm = /* @__PURE__ */ Y(zm, [["__scopeId", "data-v-0ec212b0"]]), Lm = {
  key: 0,
  class: "import-empty"
}, Rm = { class: "import-help" }, Nm = {
  key: 1,
  class: "import-configure"
}, Um = { class: "selected-file-bar" }, Tm = { class: "file-bar-content" }, Bm = { class: "file-bar-info" }, Dm = { class: "file-bar-name" }, Om = { class: "file-bar-size" }, Vm = { class: "import-actions" }, Am = {
  key: 2,
  class: "import-progress"
}, Fm = { class: "progress-content" }, Wm = { class: "progress-info" }, Pm = { class: "progress-title" }, Hm = { class: "progress-detail" }, Gm = { class: "progress-bar" }, jm = { class: "progress-status" }, Km = {
  key: 3,
  class: "import-complete"
}, qm = { class: "complete-message" }, Ym = { class: "complete-title" }, Xm = { class: "complete-details" }, Zm = { class: "complete-actions" }, Jm = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const r = C(null), a = C(!1), l = C(!1), v = C(!1), p = C(""), f = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), h = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), u = C({
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
    }), g = O(() => f.value.includeWorkflows || f.value.includeModels || f.value.includeNodes || f.value.includeGitHistory);
    function k($) {
      r.value = $;
    }
    function _() {
      r.value = null, l.value = !1, v.value = !1, p.value = "";
    }
    function y() {
      _(), a.value = !1, h.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function w() {
      if (r.value) {
        a.value = !0, l.value = !1;
        try {
          const $ = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${u.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${u.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${u.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const E of $)
            h.value = E, await new Promise((z) => setTimeout(z, 800));
          h.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((E) => setTimeout(E, 500)), v.value = !0, p.value = `Successfully imported ${u.value.workflows.length} workflows, ${u.value.models.length} models, and ${u.value.nodes.length} custom nodes.`;
        } catch ($) {
          v.value = !1, p.value = $ instanceof Error ? $.message : "Unknown error occurred during import";
        } finally {
          a.value = !1, l.value = !0;
        }
      }
    }
    function I($) {
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ($, E) => (o(), b(ye, null, {
      header: n(() => [
        c(we, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: n(() => [
        !r.value && !a.value ? (o(), s("div", Lm, [
          c(Fu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: k
          }),
          e("div", Rm, [
            c(_e, null, {
              default: n(() => [...E[5] || (E[5] = [
                m("How to Import", -1)
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
        ])) : r.value && !a.value && !l.value ? (o(), s("div", Nm, [
          e("div", Um, [
            e("div", Tm, [
              E[7] || (E[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Bm, [
                e("div", Dm, i(r.value.name), 1),
                e("div", Om, i(I(r.value.size)), 1)
              ])
            ]),
            c(H, {
              variant: "ghost",
              size: "sm",
              onClick: _
            }, {
              default: n(() => [...E[8] || (E[8] = [
                m(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          c(ym, {
            "source-environment": u.value.sourceEnvironment,
            workflows: u.value.workflows,
            models: u.value.models,
            nodes: u.value.nodes,
            "git-branch": u.value.gitBranch,
            "git-commit": u.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          c(Mm, {
            "conflict-mode": f.value.conflictMode,
            "onUpdate:conflictMode": E[0] || (E[0] = (z) => f.value.conflictMode = z),
            "include-workflows": f.value.includeWorkflows,
            "onUpdate:includeWorkflows": E[1] || (E[1] = (z) => f.value.includeWorkflows = z),
            "include-models": f.value.includeModels,
            "onUpdate:includeModels": E[2] || (E[2] = (z) => f.value.includeModels = z),
            "include-nodes": f.value.includeNodes,
            "onUpdate:includeNodes": E[3] || (E[3] = (z) => f.value.includeNodes = z),
            "include-git-history": f.value.includeGitHistory,
            "onUpdate:includeGitHistory": E[4] || (E[4] = (z) => f.value.includeGitHistory = z)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !f.value.includeModels && u.value.models.length > 0 ? (o(), b(Pe, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${u.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", Vm, [
            c(H, {
              variant: "primary",
              size: "md",
              disabled: !g.value,
              onClick: w
            }, {
              default: n(() => [...E[9] || (E[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                m(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            c(H, {
              variant: "secondary",
              size: "md",
              onClick: _
            }, {
              default: n(() => [...E[10] || (E[10] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : a.value ? (o(), s("div", Am, [
          e("div", Fm, [
            E[11] || (E[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Wm, [
              e("div", Pm, i(h.value.message), 1),
              e("div", Hm, i(h.value.detail), 1)
            ])
          ]),
          e("div", Gm, [
            e("div", {
              class: "progress-bar-fill",
              style: et({ width: `${h.value.percent}%` })
            }, null, 4)
          ]),
          e("div", jm, i(h.value.percent) + "% complete ", 1)
        ])) : l.value ? (o(), s("div", Km, [
          e("div", {
            class: Q(["complete-icon", v.value ? "success" : "error"])
          }, i(v.value ? "✓" : "✕"), 3),
          e("div", qm, [
            e("div", Ym, i(v.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Xm, i(p.value), 1)
          ]),
          e("div", Zm, [
            c(H, {
              variant: "primary",
              size: "md",
              onClick: y
            }, {
              default: n(() => [...E[12] || (E[12] = [
                m(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]),
      _: 1
    }));
  }
}), Qm = /* @__PURE__ */ Y(Jm, [["__scopeId", "data-v-18e18eb5"]]), ev = { class: "header-info" }, tv = { class: "commit-hash" }, ov = {
  key: 0,
  class: "commit-refs"
}, sv = { class: "commit-message" }, av = { class: "commit-date" }, nv = {
  key: 0,
  class: "loading"
}, lv = {
  key: 1,
  class: "changes-section"
}, iv = { class: "stats-row" }, rv = { class: "stat" }, dv = { class: "stat insertions" }, cv = { class: "stat deletions" }, uv = {
  key: 0,
  class: "change-group"
}, mv = {
  key: 1,
  class: "change-group"
}, vv = {
  key: 0,
  class: "version"
}, fv = {
  key: 2,
  class: "change-group"
}, gv = { class: "change-item" }, hv = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: a } = ke(), l = C(null), v = C(!0), p = O(() => {
      if (!l.value) return !1;
      const h = l.value.changes.workflows;
      return h.added.length > 0 || h.modified.length > 0 || h.deleted.length > 0;
    }), f = O(() => {
      if (!l.value) return !1;
      const h = l.value.changes.nodes;
      return h.added.length > 0 || h.removed.length > 0;
    });
    return he(async () => {
      try {
        l.value = await a(r.commit.hash);
      } finally {
        v.value = !1;
      }
    }), (h, u) => (o(), b(dt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (g) => h.$emit("close"))
    }, {
      header: n(() => {
        var g, k, _, y;
        return [
          e("div", ev, [
            u[4] || (u[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", tv, i(((g = l.value) == null ? void 0 : g.short_hash) || t.commit.short_hash || ((k = t.commit.hash) == null ? void 0 : k.slice(0, 7))), 1),
            (y = (_ = l.value) == null ? void 0 : _.refs) != null && y.length ? (o(), s("span", ov, [
              (o(!0), s(j, null, Z(l.value.refs, (w) => (o(), s("span", {
                key: w,
                class: "ref-badge"
              }, i(w), 1))), 128))
            ])) : d("", !0)
          ]),
          c(oe, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (w) => h.$emit("close"))
          }, {
            default: n(() => [...u[5] || (u[5] = [
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
      body: n(() => {
        var g, k;
        return [
          e("div", sv, i(((g = l.value) == null ? void 0 : g.message) || t.commit.message), 1),
          e("div", av, i(((k = l.value) == null ? void 0 : k.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          v.value ? (o(), s("div", nv, "Loading details...")) : l.value ? (o(), s("div", lv, [
            e("div", iv, [
              e("span", rv, i(l.value.stats.files_changed) + " files", 1),
              e("span", dv, "+" + i(l.value.stats.insertions), 1),
              e("span", cv, "-" + i(l.value.stats.deletions), 1)
            ]),
            p.value ? (o(), s("div", uv, [
              c(Ze, { variant: "section" }, {
                default: n(() => [...u[6] || (u[6] = [
                  m("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(j, null, Z(l.value.changes.workflows.added, (_) => (o(), s("div", {
                key: "add-" + _,
                class: "change-item added"
              }, [
                u[7] || (u[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, i(_), 1)
              ]))), 128)),
              (o(!0), s(j, null, Z(l.value.changes.workflows.modified, (_) => (o(), s("div", {
                key: "mod-" + _,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, i(_), 1)
              ]))), 128)),
              (o(!0), s(j, null, Z(l.value.changes.workflows.deleted, (_) => (o(), s("div", {
                key: "del-" + _,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, i(_), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (o(), s("div", mv, [
              c(Ze, { variant: "section" }, {
                default: n(() => [...u[10] || (u[10] = [
                  m("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(j, null, Z(l.value.changes.nodes.added, (_) => (o(), s("div", {
                key: "add-" + _.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, i(_.name), 1),
                _.version ? (o(), s("span", vv, "(" + i(_.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), s(j, null, Z(l.value.changes.nodes.removed, (_) => (o(), s("div", {
                key: "rem-" + _.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, i(_.name), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.changes.models.resolved > 0 ? (o(), s("div", fv, [
              c(Ze, { variant: "section" }, {
                default: n(() => [...u[13] || (u[13] = [
                  m("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", gv, [
                u[14] || (u[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, i(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: n(() => [
        c(oe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (g) => h.$emit("createBranch", t.commit))
        }, {
          default: n(() => [...u[15] || (u[15] = [
            m(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        c(oe, {
          variant: "primary",
          onClick: u[2] || (u[2] = (g) => h.$emit("checkout", t.commit))
        }, {
          default: n(() => [...u[16] || (u[16] = [
            m(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), pv = /* @__PURE__ */ Y(hv, [["__scopeId", "data-v-d256ff6d"]]), yv = { class: "dialog-message" }, wv = {
  key: 0,
  class: "dialog-details"
}, kv = {
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
    return (r, a) => (o(), b(dt, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (l) => r.$emit("cancel"))
    }, {
      body: n(() => [
        e("p", yv, i(t.message), 1),
        t.details && t.details.length ? (o(), s("div", wv, [
          (o(!0), s(j, null, Z(t.details, (l, v) => (o(), s("div", {
            key: v,
            class: "detail-item"
          }, " • " + i(l), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), s("p", kv, [
          a[4] || (a[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          m(" " + i(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: n(() => [
        c(oe, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (l) => r.$emit("cancel"))
        }, {
          default: n(() => [
            m(i(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), b(oe, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (l) => r.$emit("secondary"))
        }, {
          default: n(() => [
            m(i(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        c(oe, {
          variant: t.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (l) => r.$emit("confirm"))
        }, {
          default: n(() => [
            m(i(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _v = /* @__PURE__ */ Y(bv, [["__scopeId", "data-v-3670b9f5"]]), $v = { class: "base-textarea-wrapper" }, Cv = ["value", "rows", "placeholder", "disabled", "maxlength"], xv = {
  key: 0,
  class: "base-textarea-count"
}, Sv = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("div", $v, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          a[1] || (a[1] = Te(fe((l) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = Te(fe((l) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Cv),
      t.showCharCount && t.maxLength ? (o(), s("div", xv, i(t.modelValue.length) + " / " + i(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), St = /* @__PURE__ */ Y(Sv, [["__scopeId", "data-v-5516e6fc"]]), Iv = ["checked", "disabled"], Ev = { class: "base-checkbox-box" }, zv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Mv = {
  key: 0,
  class: "base-checkbox-label"
}, Lv = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (o(), s("label", {
      class: Q(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: a[0] || (a[0] = (l) => r.$emit("update:modelValue", l.target.checked))
      }, null, 40, Iv),
      e("span", Ev, [
        t.modelValue ? (o(), s("svg", zv, [...a[1] || (a[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      r.$slots.default ? (o(), s("span", Mv, [
        le(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ Y(Lv, [["__scopeId", "data-v-bf17c831"]]), Rv = { class: "popover-header" }, Nv = { class: "popover-body" }, Uv = {
  key: 0,
  class: "changes-summary"
}, Tv = {
  key: 0,
  class: "change-item"
}, Bv = {
  key: 1,
  class: "change-item"
}, Dv = {
  key: 2,
  class: "change-item"
}, Ov = {
  key: 3,
  class: "change-item"
}, Vv = {
  key: 4,
  class: "change-item"
}, Av = {
  key: 1,
  class: "no-changes"
}, Fv = {
  key: 2,
  class: "loading"
}, Wv = {
  key: 3,
  class: "issues-warning"
}, Pv = { class: "warning-header" }, Hv = { class: "warning-title" }, Gv = { class: "issues-list" }, jv = { class: "message-section" }, Kv = { class: "popover-footer" }, qv = {
  key: 1,
  class: "commit-popover"
}, Yv = { class: "popover-header" }, Xv = { class: "popover-body" }, Zv = {
  key: 0,
  class: "changes-summary"
}, Jv = {
  key: 0,
  class: "change-item"
}, Qv = {
  key: 1,
  class: "change-item"
}, ef = {
  key: 2,
  class: "change-item"
}, tf = {
  key: 3,
  class: "change-item"
}, of = {
  key: 4,
  class: "change-item"
}, sf = {
  key: 1,
  class: "no-changes"
}, af = {
  key: 2,
  class: "loading"
}, nf = {
  key: 3,
  class: "issues-warning"
}, lf = { class: "warning-header" }, rf = { class: "warning-title" }, df = { class: "issues-list" }, cf = { class: "message-section" }, uf = { class: "popover-footer" }, mf = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const a = t, l = r, { commit: v } = ke(), p = C(""), f = C(!1), h = C(!1), u = C(null), g = O(() => {
      if (!a.status) return !1;
      const I = a.status.workflows;
      return I.new.length > 0 || I.modified.length > 0 || I.deleted.length > 0 || a.status.has_changes;
    }), k = O(() => {
      var I;
      return (I = a.status) != null && I.workflows.analyzed ? a.status.workflows.analyzed.filter(
        ($) => $.has_issues && ($.sync_state === "new" || $.sync_state === "modified")
      ) : [];
    }), _ = O(() => k.value.length > 0), y = O(() => _.value && !h.value);
    async function w() {
      var I, $, E;
      if (!(_.value && !h.value) && !(!g.value || !p.value.trim() || f.value)) {
        f.value = !0, u.value = null;
        try {
          const z = await v(p.value.trim(), h.value);
          z.status === "success" ? (u.value = {
            type: "success",
            message: `Committed: ${((I = z.summary) == null ? void 0 : I.new) || 0} new, ${(($ = z.summary) == null ? void 0 : $.modified) || 0} modified, ${((E = z.summary) == null ? void 0 : E.deleted) || 0} deleted`
          }, p.value = "", h.value = !1, setTimeout(() => l("committed"), 1e3)) : z.status === "no_changes" ? u.value = { type: "error", message: "No changes to commit" } : z.status === "blocked" ? u.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : u.value = { type: "error", message: z.message || "Commit failed" };
        } catch (z) {
          u.value = { type: "error", message: z instanceof Error ? z.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (I, $) => t.asModal ? (o(), b(ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (E) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Rv, [
            $[11] || ($[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (E) => l("close"))
            }, [...$[10] || ($[10] = [
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
          e("div", Nv, [
            t.status && g.value ? (o(), s("div", Uv, [
              t.status.workflows.new.length ? (o(), s("div", Tv, [
                $[12] || ($[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, i(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Bv, [
                $[13] || ($[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, i(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Dv, [
                $[14] || ($[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, i(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Ov, [
                $[15] || ($[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, i(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Vv, [
                $[16] || ($[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, i(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), s("div", Av, " No changes to commit ")) : (o(), s("div", Fv, " Loading... ")),
            _.value ? (o(), s("div", Wv, [
              e("div", Pv, [
                $[17] || ($[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Hv, i(k.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Gv, [
                (o(!0), s(j, null, Z(k.value, (E) => (o(), s("div", {
                  key: E.name,
                  class: "issue-item"
                }, [
                  e("strong", null, i(E.name), 1),
                  m(": " + i(E.issue_summary), 1)
                ]))), 128))
              ]),
              c(It, {
                modelValue: h.value,
                "onUpdate:modelValue": $[1] || ($[1] = (E) => h.value = E),
                class: "allow-issues-toggle"
              }, {
                default: n(() => [...$[18] || ($[18] = [
                  m(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", jv, [
              c(St, {
                modelValue: p.value,
                "onUpdate:modelValue": $[2] || ($[2] = (E) => p.value = E),
                placeholder: y.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
                disabled: !g.value || f.value || y.value,
                rows: 3,
                onCtrlEnter: w
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            u.value ? (o(), s("div", {
              key: 4,
              class: Q(["result", u.value.type])
            }, i(u.value.message), 3)) : d("", !0)
          ]),
          e("div", Kv, [
            c(oe, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (E) => l("close"))
            }, {
              default: n(() => [...$[19] || ($[19] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(oe, {
              variant: h.value ? "danger" : "primary",
              disabled: !g.value || !p.value.trim() || f.value || y.value,
              loading: f.value,
              onClick: w
            }, {
              default: n(() => [
                m(i(f.value ? "Committing..." : h.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", qv, [
      e("div", Yv, [
        $[21] || ($[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (E) => l("close"))
        }, [...$[20] || ($[20] = [
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
      e("div", Xv, [
        t.status && g.value ? (o(), s("div", Zv, [
          t.status.workflows.new.length ? (o(), s("div", Jv, [
            $[22] || ($[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, i(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), s("div", Qv, [
            $[23] || ($[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, i(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", ef, [
            $[24] || ($[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, i(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", tf, [
            $[25] || ($[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, i(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", of, [
            $[26] || ($[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, i(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), s("div", sf, " No changes to commit ")) : (o(), s("div", af, " Loading... ")),
        _.value ? (o(), s("div", nf, [
          e("div", lf, [
            $[27] || ($[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", rf, i(k.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", df, [
            (o(!0), s(j, null, Z(k.value, (E) => (o(), s("div", {
              key: E.name,
              class: "issue-item"
            }, [
              e("strong", null, i(E.name), 1),
              m(": " + i(E.issue_summary), 1)
            ]))), 128))
          ]),
          c(It, {
            modelValue: h.value,
            "onUpdate:modelValue": $[7] || ($[7] = (E) => h.value = E),
            class: "allow-issues-toggle"
          }, {
            default: n(() => [...$[28] || ($[28] = [
              m(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", cf, [
          c(St, {
            modelValue: p.value,
            "onUpdate:modelValue": $[8] || ($[8] = (E) => p.value = E),
            placeholder: y.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || f.value || y.value,
            rows: 3,
            onCtrlEnter: w
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        u.value ? (o(), s("div", {
          key: 4,
          class: Q(["result", u.value.type])
        }, i(u.value.message), 3)) : d("", !0)
      ]),
      e("div", uf, [
        c(oe, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (E) => l("close"))
        }, {
          default: n(() => [...$[29] || ($[29] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c(oe, {
          variant: h.value ? "danger" : "primary",
          disabled: !g.value || !p.value.trim() || f.value || y.value,
          loading: f.value,
          onClick: w
        }, {
          default: n(() => [
            m(i(f.value ? "Committing..." : h.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ Y(mf, [["__scopeId", "data-v-38b45183"]]), vf = { class: "modal-header" }, ff = { class: "modal-body" }, gf = { class: "switch-message" }, hf = { class: "switch-details" }, pf = { class: "modal-actions" }, yf = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (o(), b(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", vf, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", ff, [
            e("p", gf, [
              a[6] || (a[6] = m(" Switch from ", -1)),
              e("strong", null, i(t.fromEnvironment), 1),
              a[7] || (a[7] = m(" to ", -1)),
              e("strong", null, i(t.toEnvironment), 1),
              a[8] || (a[8] = m("? ", -1))
            ]),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", hf, ' Your current work will be preserved. You can switch back to "' + i(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", pf, [
            c(H, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (l) => r.$emit("close"))
            }, {
              default: n(() => [...a[11] || (a[11] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(H, {
              variant: "primary",
              onClick: a[2] || (a[2] = (l) => r.$emit("confirm"))
            }, {
              default: n(() => [...a[12] || (a[12] = [
                m(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), wf = /* @__PURE__ */ Y(yf, [["__scopeId", "data-v-e9c5253e"]]), kf = { class: "progress-bar" }, bf = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, a = O(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (l, v) => (o(), s("div", kf, [
      e("div", {
        class: Q(["progress-fill", t.variant]),
        style: et({ width: a.value })
      }, null, 6)
    ]));
  }
}), _f = /* @__PURE__ */ Y(bf, [["__scopeId", "data-v-1beb0512"]]), $f = {
  key: 0,
  class: "modal-overlay"
}, Cf = { class: "modal-content" }, xf = { class: "modal-body" }, Sf = { class: "progress-info" }, If = { class: "progress-percentage" }, Ef = { class: "progress-state" }, zf = { class: "switch-steps" }, Mf = { class: "step-icon" }, Lf = { class: "step-label" }, Rf = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, a = O(() => {
      const p = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return r.message || p[r.state] || r.state;
    }), l = O(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), v = O(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], f = p.findIndex((h) => h.state === r.state);
      return p.map((h, u) => {
        let g = "pending", k = "○";
        return u < f ? (g = "completed", k = "✓") : u === f && (g = "active", k = "⟳"), {
          ...h,
          status: g,
          icon: k
        };
      });
    });
    return (p, f) => (o(), b(ze, { to: "body" }, [
      t.show ? (o(), s("div", $f, [
        e("div", Cf, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", xf, [
            c(_f, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", Sf, [
              e("div", If, i(t.progress) + "%", 1),
              e("div", Ef, i(a.value), 1)
            ]),
            e("div", zf, [
              (o(!0), s(j, null, Z(v.value, (h) => (o(), s("div", {
                key: h.state,
                class: Q(["switch-step", h.status])
              }, [
                e("span", Mf, i(h.icon), 1),
                e("span", Lf, i(h.label), 1)
              ], 2))), 128))
            ]),
            f[0] || (f[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Nf = /* @__PURE__ */ Y(Rf, [["__scopeId", "data-v-768a5078"]]), Uf = { class: "modal-header" }, Tf = { class: "modal-body" }, Bf = {
  key: 0,
  class: "node-section"
}, Df = { class: "node-list" }, Of = {
  key: 1,
  class: "node-section"
}, Vf = { class: "node-list" }, Af = { class: "modal-actions" }, Ff = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (o(), b(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Uf, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Tf, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Bf, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Df, [
                (o(!0), s(j, null, Z(t.mismatchDetails.missing_nodes, (l) => (o(), s("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + i(l), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Of, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Vf, [
                (o(!0), s(j, null, Z(t.mismatchDetails.extra_nodes, (l) => (o(), s("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + i(l), 1))), 128))
              ])
            ])) : d("", !0),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Af, [
            c(H, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (l) => r.$emit("close"))
            }, {
              default: n(() => [...a[10] || (a[10] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(H, {
              variant: "primary",
              onClick: a[2] || (a[2] = (l) => r.$emit("confirm"))
            }, {
              default: n(() => [...a[11] || (a[11] = [
                m(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Wf = /* @__PURE__ */ Y(Ff, [["__scopeId", "data-v-7cad7518"]]);
async function Ye(t, r = {}, a = 5e3) {
  const l = new AbortController(), v = setTimeout(() => l.abort(), a);
  try {
    const p = await fetch(t, {
      ...r,
      signal: l.signal
    });
    return clearTimeout(v), p;
  } catch (p) {
    throw clearTimeout(v), p.name === "AbortError" ? new Error(`Request timeout after ${a}ms`) : p;
  }
}
function Pf() {
  const t = C(null);
  async function r() {
    try {
      const f = await Ye(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (f.ok)
        return (await f.json()).port;
    } catch {
    }
    return 8189;
  }
  async function a() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const f = await Ye(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Health check failed");
      return await f.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function l() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const f = await Ye(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Failed to get status");
      return await f.json();
    } catch {
      return null;
    }
  }
  async function v() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ye(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ye(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: r,
    checkHealth: a,
    getStatus: l,
    restart: v,
    kill: p
  };
}
const Hf = { class: "comfygit-panel" }, Gf = { class: "panel-header" }, jf = { class: "header-left" }, Kf = {
  key: 0,
  class: "header-info"
}, qf = { class: "header-actions" }, Yf = { class: "env-switcher" }, Xf = {
  key: 0,
  class: "header-info"
}, Zf = { class: "branch-name" }, Jf = { class: "panel-main" }, Qf = { class: "sidebar" }, eg = { class: "sidebar-section" }, tg = { class: "sidebar-section" }, og = { class: "sidebar-section" }, sg = { class: "content-area" }, ag = {
  key: 0,
  class: "error-message"
}, ng = {
  key: 1,
  class: "loading"
}, lg = { class: "dialog-content env-selector-dialog" }, ig = { class: "dialog-header" }, rg = { class: "dialog-body" }, dg = { class: "env-list" }, cg = { class: "env-info" }, ug = { class: "env-name-row" }, mg = { class: "env-indicator" }, vg = { class: "env-name" }, fg = {
  key: 0,
  class: "env-branch"
}, gg = {
  key: 1,
  class: "current-label"
}, hg = { class: "env-stats" }, pg = ["onClick"], yg = { class: "toast-container" }, wg = { class: "toast-icon" }, kg = { class: "toast-message" }, bg = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const a = r, {
      getStatus: l,
      getHistory: v,
      getBranches: p,
      checkout: f,
      createBranch: h,
      switchBranch: u,
      getEnvironments: g,
      switchEnvironment: k,
      getSwitchProgress: _,
      syncEnvironmentManually: y
    } = ke(), w = Pf(), I = C(null), $ = C([]), E = C([]), z = C([]), T = O(() => z.value.find((W) => W.is_current)), G = C(!1), U = C(null), F = C(null), L = C(!1), V = C(!1), M = C(!1), R = C(""), N = C({ state: "idle", progress: 0, message: "" });
    let P = null, K = null;
    const S = C("status"), D = C("this-env");
    function se(W, x) {
      S.value = W, D.value = x;
    }
    function $e(W) {
      const ie = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      ie && se(ie.view, ie.section);
    }
    function Ce() {
      se("branches", "this-env");
    }
    const te = C(null), pe = C(!1), ee = C(!1), Le = C([]);
    let qe = 0;
    function ce(W, x = "info", ie = 3e3) {
      const me = ++qe;
      return Le.value.push({ id: me, message: W, type: x }), ie > 0 && setTimeout(() => {
        Le.value = Le.value.filter((Se) => Se.id !== me);
      }, ie), me;
    }
    function X(W) {
      Le.value = Le.value.filter((x) => x.id !== W);
    }
    function A(W) {
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
    const B = O(() => {
      if (!I.value) return "neutral";
      const W = I.value.workflows, x = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || I.value.has_changes;
      return I.value.comparison.is_synced ? x ? "warning" : "success" : "error";
    });
    O(() => I.value ? B.value === "success" ? "All synced" : B.value === "warning" ? "Uncommitted changes" : B.value === "error" ? "Not synced" : "" : "");
    async function J() {
      G.value = !0, U.value = null;
      try {
        const [W, x, ie, me] = await Promise.all([
          l(),
          v(),
          p(),
          g()
        ]);
        I.value = W, $.value = x.commits, E.value = ie.branches, z.value = me, a("statusUpdate", W);
      } catch (W) {
        U.value = W instanceof Error ? W.message : "Failed to load status", I.value = null, $.value = [], E.value = [];
      } finally {
        G.value = !1;
      }
    }
    function ue(W) {
      F.value = W;
    }
    async function xe(W) {
      var ie;
      F.value = null;
      const x = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      te.value = {
        title: x ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: x ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((ie = W.hash) == null ? void 0 : ie.slice(0, 7))}?`,
        details: x ? _t() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: x ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: x,
        onConfirm: async () => {
          var Ie;
          te.value = null;
          const me = ce(`Checking out ${W.short_hash || ((Ie = W.hash) == null ? void 0 : Ie.slice(0, 7))}...`, "info", 0), Se = await f(W.hash, x);
          X(me), Se.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(Se.message || "Checkout failed", "error");
        }
      };
    }
    async function Re(W) {
      const x = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      te.value = {
        title: x ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: x ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: x ? _t() : void 0,
        warning: x ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: x ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          te.value = null;
          const ie = ce(`Switching to ${W}...`, "info", 0), me = await u(W, x);
          X(ie), me.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(me.message || "Branch switch failed", "error");
        }
      };
    }
    async function tt(W) {
      const x = ce(`Creating branch ${W}...`, "info", 0), ie = await h(W);
      X(x), ie.status === "success" ? (ce(`Branch "${W}" created`, "success"), await J()) : ce(ie.message || "Failed to create branch", "error");
    }
    async function ot(W) {
      F.value = null;
      const x = prompt("Enter branch name:");
      if (x) {
        const ie = ce(`Creating branch ${x}...`, "info", 0), me = await h(x, W.hash);
        X(ie), me.status === "success" ? (ce(`Branch "${x}" created from ${W.short_hash}`, "success"), await J()) : ce(me.message || "Failed to create branch", "error");
      }
    }
    async function bt(W) {
      L.value = !1, R.value = W, V.value = !0;
    }
    async function At() {
      V.value = !1, M.value = !0, N.value = {
        progress: 10,
        state: st(10),
        message: at(10)
      };
      try {
        await k(R.value), Ft(), Wt();
      } catch (W) {
        Fe(), M.value = !1, ce(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), N.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function st(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function at(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[st(W)] || "";
    }
    function Ft() {
      if (K) return;
      let W = 10;
      const x = 60, ie = 5e3, me = 100, Se = (x - W) / (ie / me);
      K = window.setInterval(() => {
        if (W += Se, W >= x && (W = x, Fe()), N.value.progress < x) {
          const Ie = Math.floor(W);
          N.value = {
            progress: Ie,
            state: st(Ie),
            message: at(Ie)
          };
        }
      }, me);
    }
    function Fe() {
      K && (clearInterval(K), K = null);
    }
    function Wt() {
      P || (P = window.setInterval(async () => {
        try {
          let W = await w.getStatus();
          if ((!W || W.state === "idle") && (W = await _()), !W)
            return;
          const x = W.progress || 0;
          x >= 60 && Fe();
          const ie = Math.max(x, N.value.progress), me = W.state && W.state !== "idle" && W.state !== "unknown", Se = me ? W.state : st(ie), Ie = me && W.message || at(ie);
          N.value = {
            state: Se,
            progress: ie,
            message: Ie
          }, W.state === "complete" ? (Fe(), ct(), M.value = !1, ce(`✓ Switched to ${R.value}`, "success"), await J(), R.value = "") : W.state === "rolled_back" ? (Fe(), ct(), M.value = !1, ce("Switch failed, restored previous environment", "warning"), R.value = "") : W.state === "critical_failure" && (Fe(), ct(), M.value = !1, ce(`Critical error during switch: ${W.message}`, "error"), R.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function ct() {
      Fe(), P && (clearInterval(P), P = null);
    }
    function Pt() {
      V.value = !1, R.value = "";
    }
    async function Ht() {
      pe.value = !1, await J(), ce("✓ Changes committed", "success");
    }
    async function Gt() {
      ee.value = !1;
      const W = ce("Syncing environment...", "info", 0);
      try {
        const x = await y("skip", !0);
        if (X(W), x.status === "success") {
          const ie = [];
          x.nodes_installed.length && ie.push(`${x.nodes_installed.length} installed`), x.nodes_removed.length && ie.push(`${x.nodes_removed.length} removed`);
          const me = ie.length ? `: ${ie.join(", ")}` : "";
          ce(`✓ Environment synced${me}`, "success"), await J();
        } else {
          const ie = x.errors.length ? x.errors.join("; ") : x.message;
          ce(`Sync failed: ${ie}`, "error");
        }
      } catch (x) {
        X(W), ce(`Sync error: ${x instanceof Error ? x.message : "Unknown error"}`, "error");
      }
    }
    async function jt(W) {
      const x = ce(`Creating environment "${W}"...`, "info", 0);
      X(x), ce("Environment creation not yet implemented", "warning");
    }
    async function Kt(W) {
      const x = ce(`Deleting environment "${W}"...`, "info", 0);
      X(x), ce("Environment deletion not yet implemented", "warning");
    }
    function qt(W) {
      ce(`Viewing details for "${W}"`, "info"), se("models-env", "this-env");
    }
    function _t() {
      if (!I.value) return [];
      const W = [], x = I.value.workflows;
      return x.new.length && W.push(`${x.new.length} new workflow(s)`), x.modified.length && W.push(`${x.modified.length} modified workflow(s)`), x.deleted.length && W.push(`${x.deleted.length} deleted workflow(s)`), W;
    }
    return he(J), (W, x) => {
      var ie, me, Se, Ie;
      return o(), s("div", Hf, [
        e("div", Gf, [
          e("div", jf, [
            x[27] || (x[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            I.value ? (o(), s("div", Kf)) : d("", !0)
          ]),
          e("div", qf, [
            e("button", {
              class: Q(["icon-btn", { spinning: G.value }]),
              onClick: J,
              title: "Refresh"
            }, [...x[28] || (x[28] = [
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
              onClick: x[0] || (x[0] = (ne) => a("close")),
              title: "Close"
            }, [...x[29] || (x[29] = [
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
        e("div", Yf, [
          x[31] || (x[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: x[1] || (x[1] = (ne) => se("environments", "all-envs"))
          }, [
            I.value ? (o(), s("div", Xf, [
              e("span", null, i(((ie = T.value) == null ? void 0 : ie.name) || ((me = I.value) == null ? void 0 : me.environment) || "Loading..."), 1),
              e("span", Zf, "(" + i(I.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            x[30] || (x[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Jf, [
          e("div", Qf, [
            e("div", eg, [
              x[32] || (x[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "status" && D.value === "this-env" }]),
                onClick: x[2] || (x[2] = (ne) => se("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "workflows" }]),
                onClick: x[3] || (x[3] = (ne) => se("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "models-env" }]),
                onClick: x[4] || (x[4] = (ne) => se("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "branches" }]),
                onClick: x[5] || (x[5] = (ne) => se("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "history" }]),
                onClick: x[6] || (x[6] = (ne) => se("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "nodes" }]),
                onClick: x[7] || (x[7] = (ne) => se("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "debug-env" }]),
                onClick: x[8] || (x[8] = (ne) => se("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            x[35] || (x[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", tg, [
              x[33] || (x[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "environments" }]),
                onClick: x[9] || (x[9] = (ne) => se("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "model-index" }]),
                onClick: x[10] || (x[10] = (ne) => se("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "settings" }]),
                onClick: x[11] || (x[11] = (ne) => se("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "debug-workspace" }]),
                onClick: x[12] || (x[12] = (ne) => se("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            x[36] || (x[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", og, [
              x[34] || (x[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "export" }]),
                onClick: x[13] || (x[13] = (ne) => se("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "import" }]),
                onClick: x[14] || (x[14] = (ne) => se("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: S.value === "remotes" }]),
                onClick: x[15] || (x[15] = (ne) => se("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", sg, [
            U.value ? (o(), s("div", ag, i(U.value), 1)) : !I.value && S.value === "status" ? (o(), s("div", ng, " Loading status... ")) : (o(), s(j, { key: 2 }, [
              S.value === "status" ? (o(), b(Ea, {
                key: 0,
                status: I.value,
                onSwitchBranch: Ce,
                onCommitChanges: x[16] || (x[16] = (ne) => pe.value = !0),
                onSyncEnvironment: x[17] || (x[17] = (ne) => ee.value = !0),
                onViewWorkflows: x[18] || (x[18] = (ne) => se("workflows", "this-env")),
                onViewHistory: x[19] || (x[19] = (ne) => se("history", "this-env")),
                onViewDebug: x[20] || (x[20] = (ne) => se("debug-env", "this-env"))
              }, null, 8, ["status"])) : S.value === "workflows" ? (o(), b(Yd, {
                key: 1,
                onRefresh: J
              })) : S.value === "models-env" ? (o(), b(Jd, {
                key: 2,
                onNavigate: $e
              })) : S.value === "branches" ? (o(), b(Pa, {
                key: 3,
                branches: E.value,
                current: ((Se = I.value) == null ? void 0 : Se.branch) || null,
                onSwitch: Re,
                onCreate: tt
              }, null, 8, ["branches", "current"])) : S.value === "history" ? (o(), b(en, {
                key: 4,
                commits: $.value,
                onSelect: ue,
                onCheckout: xe
              }, null, 8, ["commits"])) : S.value === "nodes" ? (o(), b(nc, { key: 5 })) : S.value === "debug-env" ? (o(), b(su, { key: 6 })) : S.value === "environments" ? (o(), b(gu, {
                key: 7,
                onSwitch: bt,
                onCreate: jt,
                onDelete: Kt,
                onViewDetails: qt
              })) : S.value === "model-index" ? (o(), b(ec, { key: 8 })) : S.value === "settings" ? (o(), b(Qc, { key: 9 })) : S.value === "debug-workspace" ? (o(), b(tu, { key: 10 })) : S.value === "export" ? (o(), b(xu, { key: 11 })) : S.value === "import" ? (o(), b(Qm, { key: 12 })) : S.value === "remotes" ? (o(), b(Tc, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        F.value ? (o(), b(pv, {
          key: 0,
          commit: F.value,
          onClose: x[21] || (x[21] = (ne) => F.value = null),
          onCheckout: xe,
          onCreateBranch: ot
        }, null, 8, ["commit"])) : d("", !0),
        te.value ? (o(), b(_v, {
          key: 1,
          title: te.value.title,
          message: te.value.message,
          details: te.value.details,
          warning: te.value.warning,
          confirmLabel: te.value.confirmLabel,
          cancelLabel: te.value.cancelLabel,
          secondaryLabel: te.value.secondaryLabel,
          secondaryAction: te.value.secondaryAction,
          destructive: te.value.destructive,
          onConfirm: te.value.onConfirm,
          onCancel: x[22] || (x[22] = (ne) => te.value = null),
          onSecondary: te.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        c(wf, {
          show: V.value,
          "from-environment": ((Ie = T.value) == null ? void 0 : Ie.name) || "unknown",
          "to-environment": R.value,
          onConfirm: At,
          onClose: Pt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        pe.value && I.value ? (o(), b(Tt, {
          key: 2,
          status: I.value,
          "as-modal": !0,
          onClose: x[23] || (x[23] = (ne) => pe.value = !1),
          onCommitted: Ht
        }, null, 8, ["status"])) : d("", !0),
        ee.value && I.value ? (o(), b(Wf, {
          key: 3,
          show: ee.value,
          "mismatch-details": {
            missing_nodes: I.value.comparison.missing_nodes,
            extra_nodes: I.value.comparison.extra_nodes
          },
          onConfirm: Gt,
          onClose: x[24] || (x[24] = (ne) => ee.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        c(Nf, {
          show: M.value,
          state: N.value.state,
          progress: N.value.progress,
          message: N.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        L.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: x[26] || (x[26] = fe((ne) => L.value = !1, ["self"]))
        }, [
          e("div", lg, [
            e("div", ig, [
              x[38] || (x[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: x[25] || (x[25] = (ne) => L.value = !1)
              }, [...x[37] || (x[37] = [
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
            e("div", rg, [
              x[39] || (x[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", dg, [
                (o(!0), s(j, null, Z(z.value, (ne) => (o(), s("div", {
                  key: ne.name,
                  class: Q(["env-item", { current: ne.is_current }])
                }, [
                  e("div", cg, [
                    e("div", ug, [
                      e("span", mg, i(ne.is_current ? "●" : "○"), 1),
                      e("span", vg, i(ne.name), 1),
                      ne.current_branch ? (o(), s("span", fg, "(" + i(ne.current_branch) + ")", 1)) : d("", !0),
                      ne.is_current ? (o(), s("span", gg, "CURRENT")) : d("", !0)
                    ]),
                    e("div", hg, i(ne.workflow_count) + " workflows • " + i(ne.node_count) + " nodes ", 1)
                  ]),
                  ne.is_current ? d("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ng) => bt(ne.name)
                  }, " SWITCH ", 8, pg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", yg, [
          c(Jt, { name: "toast" }, {
            default: n(() => [
              (o(!0), s(j, null, Z(Le.value, (ne) => (o(), s("div", {
                key: ne.id,
                class: Q(["toast", ne.type])
              }, [
                e("span", wg, i(A(ne.type)), 1),
                e("span", kg, i(ne.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), _g = /* @__PURE__ */ Y(bg, [["__scopeId", "data-v-2c8b25b1"]]), $g = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Cg = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', xg = {
  comfy: $g,
  phosphor: Cg
}, wt = "comfy", Bt = "comfygit-theme";
let We = null, Dt = wt;
function Sg() {
  try {
    const t = localStorage.getItem(Bt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return wt;
}
function Ot(t = wt) {
  We && We.remove(), We = document.createElement("style"), We.id = "comfygit-theme-styles", We.setAttribute("data-theme", t), We.textContent = xg[t], document.head.appendChild(We), document.body.setAttribute("data-comfygit-theme", t), Dt = t;
  try {
    localStorage.setItem(Bt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Ig() {
  return Dt;
}
function Eg(t) {
  Ot(t);
}
const kt = document.createElement("link");
kt.rel = "stylesheet";
kt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(kt);
const zg = Sg();
Ot(zg);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Eg(t);
  },
  getTheme: () => {
    const t = Ig();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ee = null, be = null, Je = null;
const Ge = C(null);
async function ht() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (Ge.value = await r.json());
  } catch {
  }
}
function Mg() {
  if (!Ge.value) return !1;
  const t = Ge.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ge.value.has_changes;
}
function Lg() {
  Ee && Ee.remove(), Ee = document.createElement("div"), Ee.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ee.appendChild(t), Ee.addEventListener("click", (l) => {
    l.target === Ee && vt();
  });
  const r = (l) => {
    l.key === "Escape" && (vt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Mt({
    render: () => Lt(_g, {
      onClose: vt,
      onStatusUpdate: (l) => {
        Ge.value = l, rt();
      }
    })
  }).mount(t), document.body.appendChild(Ee);
}
function vt() {
  Ee && (Ee.remove(), Ee = null);
}
function Rg(t) {
  Xe(), be = document.createElement("div"), be.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  be.style.position = "fixed", be.style.top = `${r.bottom + 8}px`, be.style.right = `${window.innerWidth - r.right}px`, be.style.zIndex = "10001";
  const a = (v) => {
    be && !be.contains(v.target) && v.target !== t && (Xe(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const l = (v) => {
    v.key === "Escape" && (Xe(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), Je = Mt({
    render: () => Lt(Tt, {
      status: Ge.value,
      onClose: Xe,
      onCommitted: () => {
        Xe(), ht().then(rt);
      }
    })
  }), Je.mount(be), document.body.appendChild(be);
}
function Xe() {
  Je && (Je.unmount(), Je = null), be && (be.remove(), be = null);
}
let Ue = null;
function rt() {
  if (!Ue) return;
  const t = Ue.querySelector(".commit-indicator");
  t && (t.style.display = Mg() ? "block" : "none");
}
const Vt = document.createElement("style");
Vt.textContent = `
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
document.head.appendChild(Vt);
ut.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var a, l;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = Lg, Ue = document.createElement("button"), Ue.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ue.innerHTML = 'Commit <span class="commit-indicator"></span>', Ue.title = "Quick Commit", Ue.onclick = () => Rg(Ue), t.appendChild(r), t.appendChild(Ue), (l = (a = ut.menu) == null ? void 0 : a.settingsGroup) != null && l.element && (ut.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ht(), rt(), setInterval(async () => {
      await ht(), rt();
    }, 3e4);
  }
});
