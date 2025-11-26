import { app as lt } from "../../scripts/app.js";
import { defineComponent as Q, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as me, createBlock as S, resolveDynamicComponent as Ut, normalizeClass as se, withCtx as i, toDisplayString as l, createVNode as f, createTextVNode as h, computed as B, Fragment as j, renderList as oe, normalizeStyle as qe, ref as $, onMounted as $e, watch as Pt, Teleport as Se, withModifiers as ke, Transition as uo, createSlots as Bt, withKeys as He, onUnmounted as mo, reactive as Qt, readonly as vo, unref as fe, withDirectives as fo, vModelText as go, resolveComponent as po, TransitionGroup as ho, createApp as Ft, h as Vt } from "vue";
const yo = { class: "panel-layout" }, wo = {
  key: 0,
  class: "panel-layout-header"
}, ko = {
  key: 1,
  class: "panel-layout-search"
}, bo = { class: "panel-layout-content" }, _o = {
  key: 2,
  class: "panel-layout-footer"
}, $o = /* @__PURE__ */ Q({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (o(), s("div", yo, [
      u.$slots.header ? (o(), s("div", wo, [
        me(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (o(), s("div", ko, [
        me(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", bo, [
        me(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (o(), s("div", _o, [
        me(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Y = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, g] of u)
    n[r] = g;
  return n;
}, Te = /* @__PURE__ */ Y($o, [["__scopeId", "data-v-21565df9"]]), Co = {
  key: 0,
  class: "panel-title-prefix"
}, xo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, So = /* @__PURE__ */ Q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (o(), S(Ut(`h${t.level}`), {
      class: se(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", Co, l(t.prefix), 1)) : (o(), s("span", xo)),
        me(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Io = /* @__PURE__ */ Y(So, [["__scopeId", "data-v-c3875efc"]]), Eo = ["title"], Mo = ["width", "height"], zo = /* @__PURE__ */ Q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => u.$emit("click"))
    }, [
      (o(), s("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...n[1] || (n[1] = [
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
      ])], 8, Mo))
    ], 8, Eo));
  }
}), Yt = /* @__PURE__ */ Y(zo, [["__scopeId", "data-v-6fc7f16d"]]), Lo = { class: "header-left" }, To = {
  key: 0,
  class: "header-actions"
}, Ro = /* @__PURE__ */ Q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: se(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Lo, [
        f(Io, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            h(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), S(Yt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", To, [
        me(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Re = /* @__PURE__ */ Y(Ro, [["__scopeId", "data-v-55a62cd6"]]), Do = {
  key: 0,
  class: "section-title-count"
}, No = {
  key: 1,
  class: "section-title-icon"
}, Oo = /* @__PURE__ */ Q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), S(Ut(`h${t.level}`), {
      class: se(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        me(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Do, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", No, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ne = /* @__PURE__ */ Y(Oo, [["__scopeId", "data-v-559361eb"]]), Uo = { class: "status-grid" }, Po = { class: "status-grid__columns" }, Bo = { class: "status-grid__column" }, Fo = { class: "status-grid__title" }, Vo = { class: "status-grid__column status-grid__column--right" }, Ao = { class: "status-grid__title" }, Wo = {
  key: 0,
  class: "status-grid__footer"
}, Go = /* @__PURE__ */ Q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", Uo, [
      e("div", Po, [
        e("div", Bo, [
          e("h4", Fo, l(t.leftTitle), 1),
          me(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Vo, [
          e("h4", Ao, l(t.rightTitle), 1),
          me(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (o(), s("div", Wo, [
        me(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), jo = /* @__PURE__ */ Y(Go, [["__scopeId", "data-v-73b7ba3f"]]), Ho = {
  key: 0,
  class: "status-item__icon"
}, qo = {
  key: 1,
  class: "status-item__count"
}, Ko = { class: "status-item__label" }, Jo = /* @__PURE__ */ Q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = B(() => `status-item--${u.variant}`);
    return (r, g) => (o(), s("div", {
      class: se(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Ho, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", qo, l(t.count), 1)) : c("", !0),
      e("span", Ko, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ Y(Jo, [["__scopeId", "data-v-6f929183"]]), Qo = { class: "issue-card__header" }, Yo = { class: "issue-card__icon" }, Xo = { class: "issue-card__title" }, Zo = {
  key: 0,
  class: "issue-card__content"
}, es = {
  key: 0,
  class: "issue-card__description"
}, ts = {
  key: 1,
  class: "issue-card__items"
}, os = {
  key: 2,
  class: "issue-card__actions"
}, ss = /* @__PURE__ */ Q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = B(() => `issue-card--${u.severity}`);
    return (r, g) => (o(), s("div", {
      class: se(["issue-card", n.value])
    }, [
      e("div", Qo, [
        e("span", Yo, l(t.icon), 1),
        e("h4", Xo, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", Zo, [
        t.description ? (o(), s("p", es, l(t.description), 1)) : c("", !0),
        me(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), s("div", ts, [
        (o(!0), s(j, null, oe(t.items, (w, p) => (o(), s("div", {
          key: p,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(w), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), s("div", os, [
        me(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ Y(ss, [["__scopeId", "data-v-df6aa348"]]), ns = ["type", "disabled"], as = {
  key: 0,
  class: "spinner"
}, ls = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: se(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", as)) : c("", !0),
      t.loading ? c("", !0) : me(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, ns));
  }
}), X = /* @__PURE__ */ Y(ls, [["__scopeId", "data-v-772abe47"]]), is = { class: "empty-state" }, rs = {
  key: 0,
  class: "empty-icon"
}, ds = { class: "empty-message" }, cs = /* @__PURE__ */ Q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (o(), s("div", is, [
      t.icon ? (o(), s("div", rs, l(t.icon), 1)) : c("", !0),
      e("p", ds, l(t.message), 1),
      t.actionLabel ? (o(), S(X, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: i(() => [
          h(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Pe = /* @__PURE__ */ Y(cs, [["__scopeId", "data-v-4466284f"]]), us = /* @__PURE__ */ Q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: se(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      me(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Nt = /* @__PURE__ */ Y(us, [["__scopeId", "data-v-75e9eeb8"]]), ms = /* @__PURE__ */ Q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: se(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      me(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ Y(ms, [["__scopeId", "data-v-2f186e4c"]]), vs = { class: "detail-row" }, fs = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), s("div", vs, [
      f(Nt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          h(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), S(Ot, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          h(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : me(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ye = /* @__PURE__ */ Y(fs, [["__scopeId", "data-v-ef15664a"]]), gs = { class: "modal-header" }, ps = { class: "modal-body" }, hs = { class: "status-section" }, ys = {
  key: 0,
  class: "status-section"
}, ws = { class: "section-header-row" }, ks = {
  key: 0,
  class: "workflow-group"
}, bs = { class: "workflow-group-header" }, _s = { class: "workflow-group-title" }, $s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = { class: "workflow-issue" }, Ss = {
  key: 1,
  class: "workflow-group"
}, Is = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, Ms = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ls = { class: "workflow-issue" }, Ts = {
  key: 2,
  class: "workflow-group"
}, Rs = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Os = { class: "workflow-name" }, Us = {
  key: 3,
  class: "workflow-group"
}, Ps = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Fs = { class: "workflow-list" }, Vs = { class: "workflow-name" }, As = {
  key: 4,
  class: "workflow-group"
}, Ws = { class: "workflow-group-header" }, Gs = { class: "workflow-group-title" }, js = { class: "workflow-list" }, Hs = { class: "workflow-name" }, qs = {
  key: 5,
  class: "workflow-group"
}, Ks = { class: "workflow-group-title" }, Js = { class: "expand-icon" }, Qs = {
  key: 0,
  class: "workflow-list"
}, Ys = { class: "workflow-name" }, Xs = {
  key: 1,
  class: "status-section"
}, Zs = {
  key: 0,
  class: "change-group"
}, en = { class: "change-group-header" }, tn = { class: "change-group-title" }, on = { class: "change-list" }, sn = { class: "node-name" }, nn = {
  key: 0,
  class: "dev-badge"
}, an = {
  key: 1,
  class: "change-group"
}, ln = { class: "change-group-header" }, rn = { class: "change-group-title" }, dn = { class: "change-list" }, cn = { class: "node-name" }, un = {
  key: 0,
  class: "dev-badge"
}, mn = {
  key: 2,
  class: "change-group"
}, vn = { class: "change-list" }, fn = { class: "change-item" }, gn = { class: "node-name" }, pn = {
  key: 3,
  class: "change-group"
}, hn = {
  key: 2,
  class: "status-section"
}, yn = { class: "section-header-row" }, wn = {
  key: 0,
  class: "drift-item"
}, kn = { class: "drift-list" }, bn = {
  key: 0,
  class: "drift-list-more"
}, _n = {
  key: 1,
  class: "drift-item"
}, $n = { class: "drift-list" }, Cn = {
  key: 0,
  class: "drift-list-more"
}, xn = {
  key: 2,
  class: "drift-item"
}, Sn = {
  key: 3,
  class: "drift-item"
}, In = {
  key: 3,
  class: "status-section"
}, En = { class: "info-box" }, Mn = { class: "drift-list" }, zn = {
  key: 0,
  class: "drift-list-more"
}, Ln = {
  key: 4,
  class: "status-section"
}, Tn = { class: "warning-box" }, Rn = {
  key: 5,
  class: "empty-state-inline"
}, Dn = { class: "modal-actions" }, Nn = /* @__PURE__ */ Q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = $(!1);
    $e(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), Pt(() => u.show, (I, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", I);
    }, { immediate: !0 });
    const r = B(() => {
      var I, k, D;
      return ((D = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : D.filter(
        (y) => y.status === "broken" && y.sync_state === "synced"
      )) || [];
    }), g = B(() => {
      var I, k, D;
      return ((D = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : D.filter(
        (y) => y.status === "broken" && y.sync_state !== "synced"
      )) || [];
    }), w = B(() => {
      var I, k, D;
      return ((D = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.synced) == null ? void 0 : D.filter((y) => {
        var O, F, R;
        const C = (R = (F = (O = u.status) == null ? void 0 : O.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : R.find((z) => z.name === y);
        return !C || C.status !== "broken";
      })) || [];
    }), p = B(() => {
      var I, k, D, y, C;
      return (I = u.status) != null && I.workflows ? (((k = u.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((D = u.status.workflows.modified) == null ? void 0 : D.length) ?? 0) > 0 || (((y = u.status.workflows.deleted) == null ? void 0 : y.length) ?? 0) > 0 || (((C = u.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var k, D, y;
      const I = (k = u.status) == null ? void 0 : k.git_changes;
      return I ? (((D = I.nodes_added) == null ? void 0 : D.length) ?? 0) > 0 || (((y = I.nodes_removed) == null ? void 0 : y.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), a = B(() => {
      var I, k, D, y, C, O;
      return !p.value && !m.value && ((k = (I = u.status) == null ? void 0 : I.comparison) == null ? void 0 : k.is_synced) && (((D = u.status) == null ? void 0 : D.missing_models_count) ?? 0) === 0 && (((O = (C = (y = u.status) == null ? void 0 : y.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : O.length) ?? 0) === 0;
    }), v = B(() => {
      var k, D;
      const I = (D = (k = u.status) == null ? void 0 : k.git_changes) == null ? void 0 : D.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function _(I) {
      return typeof I == "string" ? I : I.name;
    }
    function d(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, k) => {
      var D, y, C, O, F, R, z, H, M, T, U, E, x, V, q, ee, ne, A, Z, L, b, ae;
      return o(), S(Se, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[6] || (k[6] = (te) => I.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[5] || (k[5] = ke(() => {
            }, ["stop"]))
          }, [
            e("div", gs, [
              k[7] || (k[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (te) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", ps, [
              e("div", hs, [
                f(Ne, { level: "4" }, {
                  default: i(() => [...k[8] || (k[8] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(ye, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              p.value ? (o(), s("div", ys, [
                e("div", ws, [
                  f(Ne, { level: "4" }, {
                    default: i(() => [...k[9] || (k[9] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (te) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", ks, [
                  e("div", bs, [
                    k[10] || (k[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _s, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", $s, [
                    (o(!0), s(j, null, oe(r.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(te.name), 1),
                      e("span", xs, l(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), s("div", Ss, [
                  e("div", Is, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Es, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), s(j, null, oe(g.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", zs, l(te.name), 1),
                      e("span", Ls, l(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (y = (D = t.status.workflows) == null ? void 0 : D.new) != null && y.length ? (o(), s("div", Ts, [
                  e("div", Rs, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ds, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), s(j, null, oe(t.status.workflows.new, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Os, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (O = (C = t.status.workflows) == null ? void 0 : C.modified) != null && O.length ? (o(), s("div", Us, [
                  e("div", Ps, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Bs, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), s(j, null, oe(t.status.workflows.modified, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && R.length ? (o(), s("div", As, [
                  e("div", Ws, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Gs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), s(j, null, oe(t.status.workflows.deleted, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                w.value.length ? (o(), s("div", qs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (te) => n.value = !n.value)
                  }, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Ks, "SYNCED (" + l(w.value.length) + ")", 1),
                    e("span", Js, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", Qs, [
                    (o(!0), s(j, null, oe(w.value, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Ys, l(te), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), s("div", Xs, [
                f(Ne, { level: "4" }, {
                  default: i(() => [...k[16] || (k[16] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (z = t.status.git_changes) == null ? void 0 : z.nodes_added) != null && H.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    k[17] || (k[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", tn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(j, null, oe(t.status.git_changes.nodes_added, (te) => (o(), s("div", {
                      key: _(te),
                      class: "change-item"
                    }, [
                      e("span", sn, l(_(te)), 1),
                      d(te) ? (o(), s("span", nn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (M = t.status.git_changes) == null ? void 0 : M.nodes_removed) != null && T.length ? (o(), s("div", an, [
                  e("div", ln, [
                    k[18] || (k[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", rn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), s(j, null, oe(t.status.git_changes.nodes_removed, (te) => (o(), s("div", {
                      key: _(te),
                      class: "change-item"
                    }, [
                      e("span", cn, l(_(te)), 1),
                      d(te) ? (o(), s("span", un, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (U = t.status.git_changes) != null && U.workflow_changes ? (o(), s("div", mn, [
                  k[19] || (k[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", vn, [
                    e("div", fn, [
                      e("span", gn, l(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (E = t.status.git_changes) != null && E.has_other_changes ? (o(), s("div", pn, [...k[20] || (k[20] = [
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
              (x = t.status.comparison) != null && x.is_synced ? c("", !0) : (o(), s("div", hn, [
                e("div", yn, [
                  f(Ne, { level: "4" }, {
                    default: i(() => [...k[21] || (k[21] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[3] || (k[3] = (te) => I.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                k[22] || (k[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (q = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && q.length ? (o(), s("div", wn, [
                  f(ye, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", kn, [
                    (o(!0), s(j, null, oe(t.status.comparison.missing_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + l(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", bn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ne = (ee = t.status.comparison) == null ? void 0 : ee.extra_nodes) != null && ne.length ? (o(), s("div", _n, [
                  f(ye, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", $n, [
                    (o(!0), s(j, null, oe(t.status.comparison.extra_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + l(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Cn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Z = (A = t.status.comparison) == null ? void 0 : A.version_mismatches) != null && Z.length ? (o(), s("div", xn, [
                  f(ye, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (L = t.status.comparison) != null && L.packages_in_sync ? c("", !0) : (o(), s("div", Sn, [
                  f(ye, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (b = t.status.comparison) == null ? void 0 : b.disabled_nodes) != null && ae.length ? (o(), s("div", In, [
                f(Ne, { level: "4" }, {
                  default: i(() => [...k[23] || (k[23] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", En, [
                  k[24] || (k[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Mn, [
                  (o(!0), s(j, null, oe(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (o(), s("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + l(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", zn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Ln, [
                f(Ne, { level: "4" }, {
                  default: i(() => [...k[25] || (k[25] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Tn, [
                  k[26] || (k[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[27] || (k[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              a.value ? (o(), s("div", Rn, [...k[28] || (k[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Dn, [
              f(X, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (te) => I.$emit("close"))
              }, {
                default: i(() => [...k[29] || (k[29] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), On = /* @__PURE__ */ Y(Nn, [["__scopeId", "data-v-c67eed17"]]), Un = { class: "health-section-header" }, Pn = { class: "suggestions-content" }, Bn = { class: "suggestions-text" }, Fn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Vn = /* @__PURE__ */ Q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: u }) {
    const n = t, r = $(!1), g = $(!1);
    function w() {
      r.value = !0;
    }
    function p() {
      r.value = !1, a("view-workflows");
    }
    function m() {
      r.value = !1, a("view-nodes");
    }
    const a = u, v = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), _ = B(() => n.status.has_changes), d = B(() => {
      const M = n.status.git_changes;
      return M.nodes_added.length > 0 || M.nodes_removed.length > 0 || M.workflow_changes;
    }), I = B(() => n.status.has_changes || v.value), k = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), D = B(() => n.status.git_changes.has_other_changes), y = B(() => {
      var M;
      return ((M = n.status.workflows.analyzed) == null ? void 0 : M.filter((T) => T.status === "broken")) || [];
    }), C = B(() => {
      var M;
      return ((M = n.status.workflows.analyzed) == null ? void 0 : M.filter(
        (T) => T.has_path_sync_issues && !T.has_issues
      )) || [];
    }), O = B(() => y.value.length > 0), F = B(() => O.value || C.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), R = B(() => {
      const M = [];
      return n.status.workflows.new.length > 0 && M.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && M.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && M.push(`${n.status.workflows.deleted.length} deleted`), M.length > 0 ? `${M.join(", ")} workflow${M.length === 1 && !M[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), z = B(() => {
      var U, E;
      const M = [], T = n.status.comparison;
      return (U = T.missing_nodes) != null && U.length && M.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (E = T.extra_nodes) != null && E.length && M.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), M.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${M.join(" and ")}.`;
    }), H = B(() => {
      var U, E;
      const M = [], T = n.status.comparison;
      return (U = T.extra_nodes) != null && U.length && (T.extra_nodes.slice(0, 3).forEach((x) => {
        M.push(`Untracked: ${x}`);
      }), T.extra_nodes.length > 3 && M.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (E = T.missing_nodes) != null && E.length && (T.missing_nodes.slice(0, 3).forEach((x) => {
        M.push(`Missing: ${x}`);
      }), T.missing_nodes.length > 3 && M.push(`...and ${T.missing_nodes.length - 3} more missing`)), M;
    });
    return (M, T) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[1] || (T[1] = (U) => g.value = !0),
            onMouseleave: T[2] || (T[2] = (U) => g.value = !1)
          }, [
            e("div", Un, [
              f(Ne, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...T[9] || (T[9] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(uo, { name: "fade" }, {
                default: i(() => [
                  g.value ? (o(), S(X, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: w
                  }, {
                    default: i(() => [...T[10] || (T[10] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            f(jo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Bt({
              left: i(() => [
                t.status.workflows.new.length ? (o(), S(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), S(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), S(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                f(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: v.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), S(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), S(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), S(Ve, {
                  key: 2,
                  icon: "●",
                  count: k.value,
                  label: k.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                D.value ? (o(), S(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                _.value && !d.value && !D.value ? (o(), S(Ve, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                _.value ? c("", !0) : (o(), S(Ve, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              I.value ? {
                name: "footer",
                fn: i(() => [
                  T[12] || (T[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Pn, [
                    e("span", Bn, l(R.value), 1),
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[0] || (T[0] = (U) => M.$emit("commit-changes"))
                    }, {
                      default: i(() => [...T[11] || (T[11] = [
                        h(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (o(), S(nt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              f(X, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (U) => M.$emit("create-branch"))
              }, {
                default: i(() => [...T[13] || (T[13] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          F.value ? (o(), s("div", Fn, [
            f(Ne, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...T[14] || (T[14] = [
                h(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            y.value.length > 0 ? (o(), S(nt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${y.value.length} workflow${y.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: y.value.map((U) => `${U.name} — ${U.issue_summary}`)
            }, {
              actions: i(() => [
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (U) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[15] || (T[15] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            C.value.length > 0 ? (o(), S(nt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${C.value.length} workflow${C.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: C.value.map((U) => `${U.name} — ${U.models_needing_path_sync_count} model path${U.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (U) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[16] || (T[16] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !O.value ? (o(), S(nt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (U) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[17] || (T[17] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), S(nt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: z.value,
              items: H.value
            }, {
              actions: i(() => [
                f(X, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w
                }, {
                  default: i(() => [...T[18] || (T[18] = [
                    h(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (U) => M.$emit("view-nodes"))
                }, {
                  default: i(() => [...T[19] || (T[19] = [
                    h(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !F.value && !I.value ? (o(), S(Pe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      f(On, {
        show: r.value,
        status: t.status,
        onClose: T[8] || (T[8] = (U) => r.value = !1),
        onNavigateWorkflows: p,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), An = /* @__PURE__ */ Y(Vn, [["__scopeId", "data-v-698b3f43"]]), Wn = ["type", "value", "placeholder", "disabled"], Gn = /* @__PURE__ */ Q({
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
  setup(t, { expose: u, emit: n }) {
    const r = t, g = n, w = $(null);
    function p(m) {
      const a = m.target.value;
      g("update:modelValue", a);
    }
    return $e(() => {
      r.autoFocus && w.value && w.value.focus();
    }), u({
      focus: () => {
        var m;
        return (m = w.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = w.value) == null ? void 0 : m.blur();
      }
    }), (m, a) => (o(), s("input", {
      ref_key: "inputRef",
      ref: w,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: se(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: p,
      onKeyup: [
        a[0] || (a[0] = He((v) => m.$emit("enter"), ["enter"])),
        a[1] || (a[1] = He((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: a[2] || (a[2] = (v) => m.$emit("focus")),
      onBlur: a[3] || (a[3] = (v) => m.$emit("blur"))
    }, null, 42, Wn));
  }
}), _t = /* @__PURE__ */ Y(Gn, [["__scopeId", "data-v-0380d08f"]]), jn = { class: "branch-create-form" }, Hn = { class: "form-actions" }, qn = /* @__PURE__ */ Q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = $(""), g = B(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function w() {
      g.value && (n("create", r.value.trim()), r.value = "");
    }
    function p() {
      r.value = "", n("cancel");
    }
    return (m, a) => (o(), s("div", jn, [
      f(_t, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: w,
        onEscape: p
      }, null, 8, ["modelValue"]),
      e("div", Hn, [
        f(X, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: w
        }, {
          default: i(() => [...a[1] || (a[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(X, {
          variant: "secondary",
          size: "sm",
          onClick: p
        }, {
          default: i(() => [...a[2] || (a[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Kn = /* @__PURE__ */ Y(qn, [["__scopeId", "data-v-7c500394"]]), Jn = { class: "branch-list-item__indicator" }, Qn = { class: "branch-list-item__name" }, Yn = {
  key: 0,
  class: "branch-list-item__actions"
}, Xn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Zn = /* @__PURE__ */ Q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: se(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", Jn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Qn, l(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", Yn, [
        me(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", Xn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ea = /* @__PURE__ */ Y(Zn, [["__scopeId", "data-v-c6581a24"]]), ta = {
  key: 2,
  class: "branch-list"
}, oa = /* @__PURE__ */ Q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1);
    function g(p) {
      n("create", p), w();
    }
    function w() {
      r.value = !1;
    }
    return (p, m) => (o(), S(Te, null, {
      header: i(() => [
        f(Re, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? c("", !0) : (o(), S(X, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (a) => r.value = !0)
            }, {
              default: i(() => [...m[1] || (m[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), S(Kn, {
          key: 0,
          onCreate: g,
          onCancel: w
        })) : c("", !0),
        t.branches.length === 0 ? (o(), S(Pe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ta, [
          (o(!0), s(j, null, oe(t.branches, (a) => (o(), S(ea, {
            key: a.name,
            "branch-name": a.name,
            "is-current": a.is_current
          }, {
            actions: i(() => [
              a.is_current ? c("", !0) : (o(), S(X, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => p.$emit("delete", a.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              a.is_current ? c("", !0) : (o(), S(X, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => p.$emit("switch", a.name)
              }, {
                default: i(() => [...m[3] || (m[3] = [
                  h(" Switch ", -1)
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
}), sa = /* @__PURE__ */ Y(oa, [["__scopeId", "data-v-86784ddd"]]), na = { class: "commit-list" }, aa = /* @__PURE__ */ Q({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", na, [
      me(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), la = /* @__PURE__ */ Y(aa, [["__scopeId", "data-v-8c5ee761"]]), ia = { class: "commit-hash" }, ra = /* @__PURE__ */ Q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = B(() => u.hash.slice(0, u.length));
    return (r, g) => (o(), s("span", ia, l(n.value), 1));
  }
}), Xt = /* @__PURE__ */ Y(ra, [["__scopeId", "data-v-7c333cc6"]]), da = { class: "commit-message" }, ca = { class: "commit-date" }, ua = /* @__PURE__ */ Q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = u;
    function g() {
      n.clickable && r("click");
    }
    return (w, p) => (o(), s("div", {
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(Xt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", da, l(t.message), 1),
      e("span", ca, l(t.relativeDate), 1),
      w.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = ke(() => {
        }, ["stop"]))
      }, [
        me(w.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ma = /* @__PURE__ */ Y(ua, [["__scopeId", "data-v-dd7c621b"]]), va = /* @__PURE__ */ Q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), S(Te, null, {
      header: i(() => [
        f(Re, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), S(Pe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), S(la, { key: 1 }, {
          default: i(() => [
            (o(!0), s(j, null, oe(t.commits, (r) => (o(), S(ma, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => u.$emit("select", r)
            }, {
              actions: i(() => [
                f(X, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => u.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: i(() => [...n[0] || (n[0] = [
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
}), fa = /* @__PURE__ */ Y(va, [["__scopeId", "data-v-981c3c64"]]), P1 = [
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
  ...Array(12).fill(null).map((t, u) => ({
    name: `synced-workflow-${u + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + u,
    model_count: 1 + u % 3,
    sync_state: "synced"
  }))
], B1 = {
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
}, ga = [
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
], F1 = [
  ...ga,
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
function ft() {
  return !1;
}
function Ie() {
  const t = $(!1), u = $(null);
  async function n(K, ie) {
    var _e;
    if (!((_e = window.app) != null && _e.api))
      throw new Error("ComfyUI API not available");
    const pe = await window.app.api.fetchApi(K, ie);
    if (!pe.ok) {
      const st = await pe.json().catch(() => ({}));
      throw new Error(st.error || st.message || `Request failed: ${pe.status}`);
    }
    return pe.json();
  }
  async function r(K = !1) {
    return n(K ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(K, ie = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: K, allow_issues: ie })
    });
  }
  async function w(K = 10, ie = 0) {
    return n(`/v2/comfygit/log?limit=${K}&offset=${ie}`);
  }
  async function p(K) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function a(K) {
    return n(`/v2/comfygit/commit/${K}`);
  }
  async function v(K, ie = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: K, force: ie })
    });
  }
  async function _(K, ie = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, start_point: ie })
    });
  }
  async function d(K, ie = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: K, force: ie })
    });
  }
  async function I(K, ie = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(K)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ie })
    });
  }
  async function k() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const K = await r();
        return [{
          name: K.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + K.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: K.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: K.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function D(K) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: K })
    });
  }
  async function y() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function C(K, ie, pe) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, pytorch_backend: ie, clone_from: pe })
    });
  }
  async function O(K) {
    return n(`/v2/workspace/environments/${K}`, {
      method: "DELETE"
    });
  }
  async function F(K = !1) {
    try {
      return n(K ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ie = await r(K), pe = [];
      return ie.workflows.new.forEach((_e) => {
        pe.push({ name: _e, status: "new", missing_nodes: 0, missing_models: 0, path: _e });
      }), ie.workflows.modified.forEach((_e) => {
        pe.push({ name: _e, status: "modified", missing_nodes: 0, missing_models: 0, path: _e });
      }), ie.workflows.synced.forEach((_e) => {
        pe.push({ name: _e, status: "synced", missing_nodes: 0, missing_models: 0, path: _e });
      }), pe;
    }
  }
  async function R(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function z(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function H(K, ie, pe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ie, install_models: pe })
    });
  }
  async function M(K, ie, pe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ie, importance: pe })
    });
  }
  async function T() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function U() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function E(K) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(K)}`);
  }
  async function x(K) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function V(K, ie) {
    return n(`/v2/workspace/models/${K}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function q(K, ie) {
    return n(`/v2/workspace/models/${K}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function ee(K) {
    return n(`/v2/workspace/models/${K}`, {
      method: "DELETE"
    });
  }
  async function ne(K) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function A() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Z() {
    return n("/v2/workspace/models/directory");
  }
  async function L(K) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function b() {
    try {
      return n("/v2/comfygit/config");
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0
      };
    }
  }
  async function ae(K) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function te(K, ie) {
    try {
      const pe = new URLSearchParams();
      return K && pe.append("level", K), ie && pe.append("lines", ie.toString()), n(`/v2/comfygit/debug/logs?${pe}`);
    } catch {
      return [];
    }
  }
  async function ue(K, ie) {
    try {
      const pe = new URLSearchParams();
      return K && pe.append("level", K), ie && pe.append("lines", ie.toString()), n(`/v2/workspace/debug/logs?${pe}`);
    } catch {
      return [];
    }
  }
  async function he() {
    try {
      return n("/v2/comfygit/nodes");
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
  async function Be(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/track-dev`, {
      method: "POST"
    });
  }
  async function Fe(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/install`, {
      method: "POST"
    });
  }
  async function tt(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/update`, {
      method: "POST"
    });
  }
  async function ve(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function Ee() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ut(K, ie) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: ie })
    });
  }
  async function Ye(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function Me(K, ie, pe) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ie, push_url: pe })
    });
  }
  async function mt(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST"
    });
  }
  async function ot(K) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function vt(K = "skip", ie = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: K,
        remove_extra_nodes: ie
      })
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: g,
    getHistory: w,
    exportEnv: p,
    // Git Operations
    getBranches: m,
    getCommitDetail: a,
    checkout: v,
    createBranch: _,
    switchBranch: d,
    deleteBranch: I,
    // Environment Management
    getEnvironments: k,
    switchEnvironment: D,
    getSwitchProgress: y,
    createEnvironment: C,
    deleteEnvironment: O,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: R,
    resolveWorkflow: z,
    installWorkflowDeps: H,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: T,
    getWorkspaceModels: U,
    getModelDetails: E,
    openFileLocation: x,
    addModelSource: V,
    removeModelSource: q,
    deleteModel: ee,
    downloadModel: ne,
    scanWorkspaceModels: A,
    getModelsDirectory: Z,
    setModelsDirectory: L,
    // Settings
    getConfig: b,
    updateConfig: ae,
    // Debug/Logs
    getEnvironmentLogs: te,
    getWorkspaceLogs: ue,
    // Node Management
    getNodes: he,
    trackNodeAsDev: Be,
    installNode: Fe,
    updateNode: tt,
    uninstallNode: ve,
    // Git Remotes
    getRemotes: Ee,
    addRemote: ut,
    removeRemote: Ye,
    updateRemoteUrl: Me,
    fetchRemote: mt,
    getRemoteSyncStatus: ot,
    // Environment Sync
    syncEnvironmentManually: vt
  };
}
async function gt(t, u = {}, n = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), n);
  try {
    const w = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(g), w;
  } catch (w) {
    throw clearTimeout(g), w.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : w;
  }
}
function Zt() {
  const t = $(null);
  async function u() {
    try {
      const p = await gt(
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
  async function n() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const p = await gt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Health check failed");
      return await p.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const p = await gt(
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
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await gt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function w() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await gt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: u,
    checkHealth: n,
    getStatus: r,
    restart: g,
    kill: w
  };
}
const pa = { class: "base-modal-header" }, ha = {
  key: 0,
  class: "base-modal-title"
}, ya = { class: "base-modal-body" }, wa = {
  key: 0,
  class: "base-modal-loading"
}, ka = {
  key: 1,
  class: "base-modal-error"
}, ba = {
  key: 0,
  class: "base-modal-footer"
}, _a = /* @__PURE__ */ Q({
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
  setup(t, { emit: u }) {
    const n = t, r = u;
    function g() {
      n.closeOnOverlayClick && r("close");
    }
    function w(p) {
      p.key === "Escape" && r("close");
    }
    return $e(() => {
      document.addEventListener("keydown", w), document.body.style.overflow = "hidden";
    }), mo(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = "";
    }), (p, m) => (o(), S(Se, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", pa, [
            me(p.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", ha, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (a) => p.$emit("close"))
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
          e("div", ya, [
            t.loading ? (o(), s("div", wa, "Loading...")) : t.error ? (o(), s("div", ka, l(t.error), 1)) : me(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (o(), s("div", ba, [
            me(p.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), rt = /* @__PURE__ */ Y(_a, [["__scopeId", "data-v-2125a0e6"]]), $a = ["type", "disabled"], Ca = {
  key: 0,
  class: "spinner"
}, xa = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: se(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Ca)) : c("", !0),
      me(u.$slots, "default", {}, void 0, !0)
    ], 10, $a));
  }
}), re = /* @__PURE__ */ Y(xa, [["__scopeId", "data-v-f3452606"]]), Sa = {
  key: 0,
  class: "base-title-count"
}, Ia = /* @__PURE__ */ Q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (o(), S(Ut(`h${t.level}`), {
      class: se(["base-title", t.variant])
    }, {
      default: i(() => [
        me(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Sa, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wt = /* @__PURE__ */ Y(Ia, [["__scopeId", "data-v-5a01561d"]]), Ea = ["value", "disabled"], Ma = {
  key: 0,
  value: "",
  disabled: ""
}, za = ["value"], La = {
  key: 0,
  class: "base-select-error"
}, Ta = /* @__PURE__ */ Q({
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
    function u(r) {
      return typeof r == "string" ? r : r.value;
    }
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, g) => (o(), s("div", {
      class: se(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: se(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (w) => r.$emit("update:modelValue", w.target.value))
      }, [
        t.placeholder ? (o(), s("option", Ma, l(t.placeholder), 1)) : c("", !0),
        (o(!0), s(j, null, oe(t.options, (w) => (o(), s("option", {
          key: u(w),
          value: u(w)
        }, l(n(w)), 9, za))), 128))
      ], 42, Ea),
      t.error ? (o(), s("span", La, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ra = /* @__PURE__ */ Y(Ta, [["__scopeId", "data-v-7436d745"]]), Da = { class: "popover-header" }, Na = { class: "popover-title" }, Oa = { class: "popover-content" }, Ua = {
  key: 0,
  class: "popover-actions"
}, Pa = /* @__PURE__ */ Q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (o(), S(Se, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Da, [
            e("h4", Na, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Oa, [
            me(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", Ua, [
            me(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ Y(Pa, [["__scopeId", "data-v-42815ace"]]), Ba = { class: "detail-section" }, Fa = {
  key: 0,
  class: "empty-message"
}, Va = { class: "model-header" }, Aa = { class: "model-name" }, Wa = { class: "model-details" }, Ga = { class: "model-row" }, ja = { class: "model-row" }, Ha = { class: "label" }, qa = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ka = { class: "node-list" }, Ja = ["onClick"], Qa = {
  key: 1,
  class: "model-row"
}, Ya = { class: "value" }, Xa = {
  key: 0,
  class: "model-actions"
}, Za = { class: "detail-section" }, el = {
  key: 0,
  class: "empty-message"
}, tl = { class: "node-name" }, ol = {
  key: 0,
  class: "node-version"
}, sl = /* @__PURE__ */ Q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: g, setModelImportance: w, installWorkflowDeps: p } = Ie(), m = $(null), a = $(!1), v = $(null), _ = $(!1), d = $({}), I = $({}), k = $(!1), D = $(/* @__PURE__ */ new Set()), y = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(E) {
      switch (E) {
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
    function O(E) {
      switch (E) {
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
    function F(E) {
      if (!E.loaded_by || E.loaded_by.length === 0) return [];
      const x = E.hash || E.filename;
      return D.value.has(x) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function R(E) {
      return D.value.has(E);
    }
    function z(E) {
      D.value.has(E) ? D.value.delete(E) : D.value.add(E), D.value = new Set(D.value);
    }
    async function H() {
      a.value = !0, v.value = null;
      try {
        m.value = await g(n.workflowName);
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load workflow details";
      } finally {
        a.value = !1;
      }
    }
    function M(E, x) {
      d.value[E] = x, _.value = !0;
    }
    async function T() {
      if (!_.value) {
        r("close");
        return;
      }
      a.value = !0, v.value = null;
      try {
        for (const [E, x] of Object.entries(d.value))
          await w(n.workflowName, E, x);
        r("refresh"), r("close");
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to save changes";
      } finally {
        a.value = !1;
      }
    }
    async function U(E) {
      I.value[E] = !0, v.value = null;
      try {
        await p(n.workflowName, !0, !1), await H();
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to install node";
      } finally {
        I.value[E] = !1;
      }
    }
    return $e(H), (E, x) => (o(), s(j, null, [
      f(rt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: a.value,
        error: v.value || void 0,
        onClose: x[5] || (x[5] = (V) => r("close"))
      }, {
        body: i(() => [
          m.value ? (o(), s(j, { key: 0 }, [
            e("section", Ba, [
              f(wt, { variant: "section" }, {
                default: i(() => [
                  h("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", Fa, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(j, null, oe(m.value.models, (V) => (o(), s("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", Va, [
                  x[7] || (x[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Aa, l(V.filename), 1)
                ]),
                e("div", Wa, [
                  e("div", Ga, [
                    x[8] || (x[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: se(["value", C(V.status)])
                    }, l(O(V.status)), 3)
                  ]),
                  e("div", ja, [
                    e("span", Ha, [
                      x[9] || (x[9] = h(" Importance: ", -1)),
                      f(Yt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: x[0] || (x[0] = (q) => k.value = !0)
                      })
                    ]),
                    f(Ra, {
                      "model-value": d.value[V.filename] || V.importance,
                      options: y,
                      "onUpdate:modelValue": (q) => M(V.filename, q)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), s("div", qa, [
                    x[10] || (x[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ka, [
                      (o(!0), s(j, null, oe(F(V), (q, ee) => (o(), s("div", {
                        key: `${q.node_id}-${ee}`,
                        class: "node-reference"
                      }, l(q.node_type) + " (Node #" + l(q.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (q) => z(V.hash || V.filename)
                      }, l(R(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, Ja)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  V.size_mb ? (o(), s("div", Qa, [
                    x[11] || (x[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Ya, l(V.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                V.status !== "available" ? (o(), s("div", Xa, [
                  V.status === "downloadable" ? (o(), S(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: x[1] || (x[1] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...x[12] || (x[12] = [
                      h(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), S(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[2] || (x[2] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...x[13] || (x[13] = [
                      h(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), S(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[3] || (x[3] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...x[14] || (x[14] = [
                      h(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Za, [
              f(wt, { variant: "section" }, {
                default: i(() => [
                  h("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", el, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(j, null, oe(m.value.nodes, (V) => (o(), s("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, l(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", tl, l(V.name), 1),
                V.version ? (o(), s("span", ol, "v" + l(V.version), 1)) : c("", !0),
                V.status === "missing" ? (o(), S(re, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: I.value[V.name],
                  onClick: (q) => U(V.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...x[15] || (x[15] = [
                    h(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          f(re, {
            variant: "secondary",
            onClick: x[4] || (x[4] = (V) => r("close"))
          }, {
            default: i(() => [...x[16] || (x[16] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          _.value ? (o(), S(re, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: i(() => [...x[17] || (x[17] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(Ke, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[6] || (x[6] = (V) => k.value = !1)
      }, {
        content: i(() => [...x[18] || (x[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              h(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              h(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              h(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nl = /* @__PURE__ */ Y(sl, [["__scopeId", "data-v-0b14d32e"]]), ge = Qt({
  items: [],
  status: "idle"
});
let Ae = null;
function eo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Tt(t) {
  return ge.items.find((u) => u.id === t);
}
async function at() {
  if (ge.status === "downloading") return;
  const t = ge.items.find((u) => u.status === "queued");
  if (!t) {
    ge.status = "idle";
    return;
  }
  ge.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await al(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    ge.status = "idle", at();
  }
}
async function al(t) {
  return new Promise((u, n) => {
    Ae && (Ae.close(), Ae = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ae = g;
    let w = Date.now(), p = 0, m = !1;
    g.onmessage = (a) => {
      try {
        const v = JSON.parse(a.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const _ = Date.now(), d = (_ - w) / 1e3;
            if (d > 0.5) {
              const I = t.downloaded - p;
              if (t.speed = I / d, w = _, p = t.downloaded, t.speed > 0 && t.size > 0) {
                const k = t.size - t.downloaded;
                t.eta = k / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, g.close(), Ae = null, u();
            break;
          case "error":
            m = !0, g.close(), Ae = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Ae = null, m || n(new Error("Connection lost"));
    };
  });
}
async function ll() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (ge.items.some((g) => g.url === n.url && g.filename === n.filename))
        continue;
      const r = {
        id: eo(),
        workflow: n.workflow,
        filename: n.filename,
        url: n.url,
        targetPath: n.target_path,
        size: n.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ge.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function $t() {
  function t(C) {
    for (const O of C) {
      if (ge.items.some(
        (z) => z.url === O.url && z.targetPath === O.targetPath && ["queued", "downloading", "paused", "completed"].includes(z.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${O.filename}`);
        continue;
      }
      const R = {
        id: eo(),
        workflow: O.workflow,
        filename: O.filename,
        url: O.url,
        targetPath: O.targetPath,
        size: O.size || 0,
        type: O.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ge.items.push(R);
    }
    ge.status === "idle" && at();
  }
  async function u(C) {
    const O = Tt(C);
    if (O) {
      if (O.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(O.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ae && (Ae.close(), Ae = null), O.status = "failed", O.error = "Cancelled by user", ge.status = "idle", at();
      } else if (O.status === "queued") {
        const F = ge.items.findIndex((R) => R.id === C);
        F >= 0 && ge.items.splice(F, 1);
      }
    }
  }
  function n(C) {
    const O = Tt(C);
    !O || O.status !== "failed" || (O.status = "queued", O.error = void 0, O.progress = 0, O.downloaded = 0, ge.status === "idle" && at());
  }
  function r(C) {
    const O = Tt(C);
    !O || O.status !== "paused" || (O.status = "queued", ge.status === "idle" && at());
  }
  function g() {
    const C = ge.items.filter((O) => O.status === "paused");
    for (const O of C)
      O.status = "queued";
    ge.status === "idle" && at();
  }
  function w(C) {
    const O = ge.items.findIndex((F) => F.id === C);
    O >= 0 && ["completed", "failed", "paused"].includes(ge.items[O].status) && ge.items.splice(O, 1);
  }
  function p() {
    ge.items = ge.items.filter((C) => C.status !== "completed");
  }
  function m() {
    ge.items = ge.items.filter((C) => C.status !== "failed");
  }
  const a = B(
    () => ge.items.find((C) => C.status === "downloading")
  ), v = B(
    () => ge.items.filter((C) => C.status === "queued")
  ), _ = B(
    () => ge.items.filter((C) => C.status === "completed")
  ), d = B(
    () => ge.items.filter((C) => C.status === "failed")
  ), I = B(
    () => ge.items.filter((C) => C.status === "paused")
  ), k = B(() => ge.items.length > 0), D = B(
    () => ge.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), y = B(
    () => ge.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: vo(ge),
    // Computed
    currentDownload: a,
    queuedItems: v,
    completedItems: _,
    failedItems: d,
    pausedItems: I,
    hasItems: k,
    activeCount: D,
    hasPaused: y,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: w,
    clearCompleted: p,
    clearFailed: m,
    loadPendingDownloads: ll
  };
}
function il() {
  const t = $(null), u = $(null), n = $([]), r = $([]), g = $(!1), w = $(null);
  async function p(F, R) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const z = await window.app.api.fetchApi(F, R);
    if (!z.ok) {
      const M = await z.json().catch(() => ({})), T = M.error || M.message || `Request failed: ${z.status}`;
      throw new Error(T);
    }
    return z.json();
  }
  async function m(F) {
    g.value = !0, w.value = null;
    try {
      let R;
      return ft() || (R = await p(
        `/v2/comfygit/workflow/${F}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = R, R;
    } catch (R) {
      const z = R instanceof Error ? R.message : "Unknown error occurred";
      throw w.value = z, R;
    } finally {
      g.value = !1;
    }
  }
  async function a(F, R, z, H) {
    g.value = !0, w.value = null;
    try {
      let M;
      if (!ft()) {
        const T = Object.fromEntries(R), U = Object.fromEntries(z), E = H ? Array.from(H) : [];
        M = await p(
          `/v2/comfygit/workflow/${F}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: T,
              model_choices: U,
              skipped_packages: E
            })
          }
        );
      }
      return u.value = M, M;
    } catch (M) {
      const T = M instanceof Error ? M.message : "Unknown error occurred";
      throw w.value = T, M;
    } finally {
      g.value = !1;
    }
  }
  async function v(F, R = 10) {
    g.value = !0, w.value = null;
    try {
      let z;
      return ft() || (z = await p(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: R })
        }
      )), n.value = z.results, z.results;
    } catch (z) {
      const H = z instanceof Error ? z.message : "Unknown error occurred";
      throw w.value = H, z;
    } finally {
      g.value = !1;
    }
  }
  async function _(F, R = 10) {
    g.value = !0, w.value = null;
    try {
      let z;
      return ft() || (z = await p(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: R })
        }
      )), r.value = z.results, z.results;
    } catch (z) {
      const H = z instanceof Error ? z.message : "Unknown error occurred";
      throw w.value = H, z;
    } finally {
      g.value = !1;
    }
  }
  const d = Qt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function I() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0, d.nodeInstallProgress = void 0;
  }
  async function k(F) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0, d.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return ft(), await D(F);
    } catch (R) {
      const z = R instanceof Error ? R.message : "Failed to install nodes";
      throw d.installError = z, R;
    }
  }
  async function D(F) {
    var z;
    const R = await p(
      `/v2/comfygit/workflow/${F}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: d.nodesToInstall
        })
      }
    );
    if (d.nodeInstallProgress) {
      d.nodeInstallProgress.totalNodes = d.nodesToInstall.length;
      const H = new Map(((z = R.failed) == null ? void 0 : z.map((M) => [M.node_id, M.error])) || []);
      for (let M = 0; M < d.nodesToInstall.length; M++) {
        const T = d.nodesToInstall[M], U = H.get(T);
        d.nodeInstallProgress.completedNodes.push({
          node_id: T,
          success: !U,
          error: U
        });
      }
    }
    return d.nodesInstalled = R.nodes_installed, d.needsRestart = R.nodes_installed.length > 0, R.failed && R.failed.length > 0 && (d.installError = `${R.failed.length} package(s) failed to install`), R;
  }
  async function y(F, R, z) {
    I(), d.phase = "resolving", w.value = null;
    const H = Object.fromEntries(R), M = Object.fromEntries(z);
    try {
      const T = await fetch(`/v2/comfygit/workflow/${F}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: M
        })
      });
      if (!T.ok)
        throw new Error(`Request failed: ${T.status}`);
      if (!T.body)
        throw new Error("No response body");
      const U = T.body.getReader(), E = new TextDecoder();
      let x = "";
      for (; ; ) {
        const { done: V, value: q } = await U.read();
        if (V) break;
        x += E.decode(q, { stream: !0 });
        const ee = x.split(`

`);
        x = ee.pop() || "";
        for (const ne of ee) {
          if (!ne.trim()) continue;
          const A = ne.split(`
`);
          let Z = "", L = "";
          for (const b of A)
            b.startsWith("event: ") ? Z = b.slice(7) : b.startsWith("data: ") && (L = b.slice(6));
          if (L)
            try {
              const b = JSON.parse(L);
              C(Z, b);
            } catch (b) {
              console.warn("Failed to parse SSE event:", b);
            }
        }
      }
    } catch (T) {
      const U = T instanceof Error ? T.message : "Unknown error occurred";
      throw w.value = U, d.error = U, d.phase = "error", T;
    }
  }
  function C(F, R) {
    switch (F) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = R.total;
        break;
      case "file_start":
        d.currentFile = R.filename, d.currentFileIndex = R.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = R.downloaded, d.bytesTotal = R.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: R.filename,
          success: R.success,
          error: R.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = R.nodes_to_install || [], R.download_results && (d.completedFiles = R.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = R.message, d.phase = "error", w.value = R.message;
        break;
    }
  }
  function O(F, R) {
    const { addToQueue: z } = $t(), H = R.filter((M) => M.url && M.target_path).map((M) => ({
      workflow: F,
      filename: M.filename,
      url: M.url,
      targetPath: M.target_path,
      size: M.size || 0,
      type: "model"
    }));
    return H.length > 0 && z(H), H.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: r,
    isLoading: g,
    error: w,
    progress: d,
    // Methods
    analyzeWorkflow: m,
    applyResolution: a,
    applyResolutionWithProgress: y,
    installNodes: k,
    searchNodes: v,
    searchModels: _,
    resetProgress: I,
    queueModelDownloads: O
  };
}
const rl = { class: "resolution-stepper" }, dl = { class: "stepper-header" }, cl = ["onClick"], ul = {
  key: 0,
  class: "step-icon"
}, ml = {
  key: 1,
  class: "step-number"
}, vl = { class: "step-label" }, fl = {
  key: 0,
  class: "step-connector"
}, gl = { class: "stepper-content" }, pl = /* @__PURE__ */ Q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: u }) {
    const n = t, r = u;
    function g(v) {
      var _;
      if ((_ = n.stepStats) != null && _[v]) {
        const d = n.stepStats[v];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(v);
    }
    function w(v) {
      var _;
      if ((_ = n.stepStats) != null && _[v]) {
        const d = n.stepStats[v];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function p(v) {
      return g(v) ? "state-complete" : w(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function a(v) {
      r("step-change", v);
    }
    return (v, _) => (o(), s("div", rl, [
      e("div", dl, [
        (o(!0), s(j, null, oe(t.steps, (d, I) => (o(), s("div", {
          key: d.id,
          class: se(["step", {
            active: t.currentStep === d.id,
            completed: g(d.id),
            "in-progress": w(d.id),
            disabled: m(d.id)
          }]),
          onClick: (k) => a(d.id)
        }, [
          e("div", {
            class: se(["step-indicator", p(d.id)])
          }, [
            g(d.id) ? (o(), s("span", ul, "✓")) : (o(), s("span", ml, l(I + 1), 1))
          ], 2),
          e("div", vl, l(d.label), 1),
          I < t.steps.length - 1 ? (o(), s("div", fl)) : c("", !0)
        ], 10, cl))), 128))
      ]),
      e("div", gl, [
        me(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), hl = /* @__PURE__ */ Y(pl, [["__scopeId", "data-v-2a7b3af8"]]), yl = /* @__PURE__ */ Q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = B(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), g = B(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (w, p) => (o(), s("span", {
      class: se(["confidence-badge", r.value, t.size])
    }, l(g.value), 3));
  }
}), At = /* @__PURE__ */ Y(yl, [["__scopeId", "data-v-17ec4b80"]]), wl = { class: "node-info" }, kl = { class: "node-info-text" }, bl = { class: "item-body" }, _l = {
  key: 0,
  class: "resolved-state"
}, $l = {
  key: 1,
  class: "multiple-options"
}, Cl = { class: "options-list" }, xl = ["onClick"], Sl = ["name", "value", "checked", "onChange"], Il = { class: "option-content" }, El = { class: "option-header" }, Ml = { class: "option-package-id" }, zl = {
  key: 0,
  class: "option-title"
}, Ll = { class: "option-meta" }, Tl = {
  key: 0,
  class: "installed-badge"
}, Rl = { class: "action-buttons" }, Dl = {
  key: 2,
  class: "unresolved"
}, Nl = { class: "action-buttons" }, Ol = /* @__PURE__ */ Q({
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
  setup(t, { emit: u }) {
    const n = t, r = u, g = B(() => !!n.choice);
    B(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), B(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const w = B(() => {
      switch (n.status) {
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
    function p(m) {
      r("option-selected", m);
    }
    return (m, a) => (o(), s("div", {
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", wl, [
        e("span", kl, [
          a[7] || (a[7] = h("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", w.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", bl, [
        g.value ? (o(), s("div", _l, [
          f(re, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (v) => r("clear-choice"))
          }, {
            default: i(() => [...a[8] || (a[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", $l, [
          a[12] || (a[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Cl, [
            (o(!0), s(j, null, oe(t.options, (v, _) => (o(), s("label", {
              key: v.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (d) => p(_)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (d) => p(_)
              }, null, 40, Sl),
              e("div", Il, [
                e("div", El, [
                  e("span", Ml, l(v.package_id), 1),
                  f(At, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (o(), s("div", zl, l(v.title), 1)) : c("", !0),
                e("div", Ll, [
                  v.is_installed ? (o(), s("span", Tl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, xl))), 128))
          ]),
          e("div", Rl, [
            f(re, {
              variant: "ghost",
              size: "sm",
              onClick: a[1] || (a[1] = (v) => r("search"))
            }, {
              default: i(() => [...a[9] || (a[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "ghost",
              size: "sm",
              onClick: a[2] || (a[2] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[3] || (a[3] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Dl, [
          a[16] || (a[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Nl, [
            f(re, {
              variant: "primary",
              size: "sm",
              onClick: a[4] || (a[4] = (v) => r("search"))
            }, {
              default: i(() => [...a[13] || (a[13] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[5] || (a[5] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[14] || (a[14] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[6] || (a[6] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...a[15] || (a[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ul = /* @__PURE__ */ Y(Ol, [["__scopeId", "data-v-e02629e7"]]), Pl = { class: "item-navigator" }, Bl = { class: "nav-item-info" }, Fl = ["title"], Vl = { class: "nav-controls" }, Al = { class: "nav-arrows" }, Wl = ["disabled"], Gl = ["disabled"], jl = { class: "nav-position" }, Hl = /* @__PURE__ */ Q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, g) => (o(), s("div", Pl, [
      e("div", Bl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Fl)
      ]),
      e("div", Vl, [
        e("div", Al, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (w) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Wl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (w) => n("next")),
            title: "Next item"
          }, " → ", 8, Gl)
        ]),
        e("span", jl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), to = /* @__PURE__ */ Y(Hl, [["__scopeId", "data-v-74af7920"]]), ql = ["type", "value", "placeholder", "disabled"], Kl = {
  key: 0,
  class: "base-input-error"
}, Jl = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), s("div", {
      class: se(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: se(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = He((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = He((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ql),
      t.error ? (o(), s("span", Kl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ Y(Jl, [["__scopeId", "data-v-9ba02cdc"]]), Ql = { class: "node-resolution-step" }, Yl = {
  key: 0,
  class: "auto-resolved-section"
}, Xl = { class: "section-header" }, Zl = { class: "stat-badge" }, ei = { class: "resolved-packages-list" }, ti = { class: "package-info" }, oi = { class: "package-id" }, si = { class: "node-count" }, ni = { class: "package-actions" }, ai = {
  key: 0,
  class: "status-badge install"
}, li = {
  key: 1,
  class: "status-badge skip"
}, ii = ["onClick"], ri = {
  key: 1,
  class: "section-divider"
}, di = { class: "step-header" }, ci = { class: "stat-badge" }, ui = {
  key: 1,
  class: "step-body"
}, mi = {
  key: 3,
  class: "empty-state"
}, vi = { class: "node-search-modal" }, fi = { class: "node-modal-body" }, gi = {
  key: 0,
  class: "node-search-results"
}, pi = ["onClick"], hi = { class: "node-result-header" }, yi = { class: "node-result-package-id" }, wi = {
  key: 0,
  class: "node-result-description"
}, ki = {
  key: 1,
  class: "node-no-results"
}, bi = {
  key: 2,
  class: "node-searching"
}, _i = { class: "node-manual-entry-modal" }, $i = { class: "node-modal-body" }, Ci = { class: "node-modal-actions" }, xi = /* @__PURE__ */ Q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = $(0), w = $(!1), p = $(!1), m = $(""), a = $(""), v = $([]), _ = $(!1), d = B(() => n.nodes[g.value]), I = B(() => n.nodes.filter((ne) => n.nodeChoices.has(ne.node_type)).length), k = B(() => n.autoResolvedPackages.filter((ne) => !n.skippedPackages.has(ne.package_id)).length);
    function D(ne) {
      return n.skippedPackages.has(ne);
    }
    function y(ne) {
      r("package-skip", ne);
    }
    const C = B(() => {
      var A;
      if (!d.value) return "not-found";
      const ne = n.nodeChoices.get(d.value.node_type);
      if (ne)
        switch (ne.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (A = d.value.options) != null && A.length ? "ambiguous" : "not-found";
    }), O = B(() => {
      var A;
      if (!d.value) return;
      const ne = n.nodeChoices.get(d.value.node_type);
      if (ne)
        switch (ne.action) {
          case "install":
            return ne.package_id ? `→ ${ne.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (A = d.value.options) != null && A.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function F(ne) {
      ne >= 0 && ne < n.nodes.length && (g.value = ne);
    }
    function R() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function z() {
      d.value && r("skip", d.value.node_type);
    }
    function H(ne) {
      d.value && r("option-selected", d.value.node_type, ne);
    }
    function M() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function T() {
      d.value && (m.value = d.value.node_type, w.value = !0);
    }
    function U() {
      a.value = "", p.value = !0;
    }
    function E() {
      w.value = !1, m.value = "", v.value = [];
    }
    function x() {
      p.value = !1, a.value = "";
    }
    function V() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function q(ne) {
      d.value && (r("manual-entry", d.value.node_type, ne.package_id), E());
    }
    function ee() {
      !d.value || !a.value.trim() || (r("manual-entry", d.value.node_type, a.value.trim()), x());
    }
    return (ne, A) => {
      var Z, L;
      return o(), s("div", Ql, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", Yl, [
          e("div", Xl, [
            A[4] || (A[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Zl, l(k.value) + "/" + l(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", ei, [
            (o(!0), s(j, null, oe(t.autoResolvedPackages, (b) => (o(), s("div", {
              key: b.package_id,
              class: "resolved-package-item"
            }, [
              e("div", ti, [
                e("code", oi, l(b.package_id), 1),
                e("span", si, l(b.node_types_count) + " node type" + l(b.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", ni, [
                D(b.package_id) ? (o(), s("span", li, " SKIPPED ")) : (o(), s("span", ai, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ae) => y(b.package_id)
                }, l(D(b.package_id) ? "Include" : "Skip"), 9, ii)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", ri)) : c("", !0),
        t.nodes.length > 0 ? (o(), s(j, { key: 2 }, [
          e("div", di, [
            A[5] || (A[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", ci, l(I.value) + "/" + l(t.nodes.length) + " resolved", 1)
          ]),
          d.value ? (o(), S(to, {
            key: 0,
            "item-name": d.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: A[0] || (A[0] = (b) => F(g.value - 1)),
            onNext: A[1] || (A[1] = (b) => F(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          d.value ? (o(), s("div", ui, [
            f(Ul, {
              "node-type": d.value.node_type,
              "has-multiple-options": !!((Z = d.value.options) != null && Z.length),
              options: d.value.options,
              choice: (L = t.nodeChoices) == null ? void 0 : L.get(d.value.node_type),
              status: C.value,
              "status-label": O.value,
              onMarkOptional: R,
              onSkip: z,
              onManualEntry: U,
              onSearch: T,
              onOptionSelected: H,
              onClearChoice: M
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", mi, [...A[6] || (A[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (o(), S(Se, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(E, ["self"])
          }, [
            e("div", vi, [
              e("div", { class: "node-modal-header" }, [
                A[7] || (A[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", fi, [
                f(Ue, {
                  modelValue: m.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (b) => m.value = b),
                  placeholder: "Search by node type, package name...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), s("div", gi, [
                  (o(!0), s(j, null, oe(v.value, (b) => (o(), s("div", {
                    key: b.package_id,
                    class: "node-search-result-item",
                    onClick: (ae) => q(b)
                  }, [
                    e("div", hi, [
                      e("code", yi, l(b.package_id), 1),
                      b.match_confidence ? (o(), S(At, {
                        key: 0,
                        confidence: b.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    b.description ? (o(), s("div", wi, l(b.description), 1)) : c("", !0)
                  ], 8, pi))), 128))
                ])) : m.value && !_.value ? (o(), s("div", ki, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                _.value ? (o(), s("div", bi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(Se, { to: "body" }, [
          p.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(x, ["self"])
          }, [
            e("div", _i, [
              e("div", { class: "node-modal-header" }, [
                A[8] || (A[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: x
                }, "✕")
              ]),
              e("div", $i, [
                f(Ue, {
                  modelValue: a.value,
                  "onUpdate:modelValue": A[3] || (A[3] = (b) => a.value = b),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ci, [
                  f(re, {
                    variant: "secondary",
                    onClick: x
                  }, {
                    default: i(() => [...A[9] || (A[9] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(re, {
                    variant: "primary",
                    disabled: !a.value.trim(),
                    onClick: ee
                  }, {
                    default: i(() => [...A[10] || (A[10] = [
                      h(" Add Package ", -1)
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
}), Si = /* @__PURE__ */ Y(xi, [["__scopeId", "data-v-6474069a"]]), Ii = { class: "node-info" }, Ei = { class: "node-info-text" }, Mi = { class: "item-body" }, zi = {
  key: 0,
  class: "resolved-state"
}, Li = {
  key: 1,
  class: "multiple-options"
}, Ti = { class: "options-list" }, Ri = ["onClick"], Di = ["name", "value", "checked", "onChange"], Ni = { class: "option-content" }, Oi = { class: "option-header" }, Ui = { class: "option-filename" }, Pi = { class: "option-meta" }, Bi = { class: "option-size" }, Fi = { class: "option-category" }, Vi = { class: "option-path" }, Ai = { class: "action-buttons" }, Wi = {
  key: 2,
  class: "unresolved"
}, Gi = { class: "action-buttons" }, ji = /* @__PURE__ */ Q({
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
  setup(t, { emit: u }) {
    const n = t, r = u, g = B(() => !!n.choice);
    B(() => {
      var a;
      return (a = n.choice) == null ? void 0 : a.action;
    }), B(() => {
      var a, v;
      return ((v = (a = n.choice) == null ? void 0 : a.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const w = B(() => {
      switch (n.status) {
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
    function p(a) {
      r("option-selected", a);
    }
    function m(a) {
      if (!a) return "Unknown";
      const v = a / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(a / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (a, v) => (o(), s("div", {
      class: se(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Ii, [
        e("span", Ei, [
          v[7] || (v[7] = h("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", w.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Mi, [
        g.value ? (o(), s("div", zi, [
          f(re, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (_) => r("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Li, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Ti, [
            (o(!0), s(j, null, oe(t.options, (_, d) => (o(), s("label", {
              key: _.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (I) => p(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (I) => p(d)
              }, null, 40, Di),
              e("div", Ni, [
                e("div", Oi, [
                  e("span", Ui, l(_.model.filename), 1),
                  f(At, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Pi, [
                  e("span", Bi, l(m(_.model.size)), 1),
                  e("span", Fi, l(_.model.category), 1)
                ]),
                e("div", Vi, l(_.model.relative_path), 1)
              ])
            ], 10, Ri))), 128))
          ]),
          e("div", Ai, [
            f(re, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (_) => r("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (_) => r("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (_) => r("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Wi, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Gi, [
            f(re, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (_) => r("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (_) => r("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (_) => r("mark-optional"))
            }, {
              default: i(() => [...v[15] || (v[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Hi = /* @__PURE__ */ Y(ji, [["__scopeId", "data-v-8a82fefa"]]), qi = { class: "model-resolution-step" }, Ki = { class: "step-header" }, Ji = { class: "step-info" }, Qi = { class: "step-title" }, Yi = { class: "step-description" }, Xi = { class: "stat-badge" }, Zi = {
  key: 1,
  class: "step-body"
}, er = {
  key: 2,
  class: "empty-state"
}, tr = { class: "model-search-modal" }, or = { class: "model-modal-body" }, sr = {
  key: 0,
  class: "model-search-results"
}, nr = ["onClick"], ar = { class: "model-result-header" }, lr = { class: "model-result-filename" }, ir = { class: "model-result-meta" }, rr = { class: "model-result-category" }, dr = { class: "model-result-size" }, cr = {
  key: 0,
  class: "model-result-path"
}, ur = {
  key: 1,
  class: "model-no-results"
}, mr = {
  key: 2,
  class: "model-searching"
}, vr = { class: "model-download-url-modal" }, fr = { class: "model-modal-body" }, gr = { class: "model-input-group" }, pr = { class: "model-input-group" }, hr = { class: "model-modal-actions" }, yr = /* @__PURE__ */ Q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: u }) {
    const n = {
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
    function r(L) {
      var b;
      return L && ((b = n[L]) == null ? void 0 : b[0]) || null;
    }
    const g = t, w = u, p = $(0), m = $(!1), a = $(!1), v = $(""), _ = $(""), d = $(""), I = $([]), k = $(!1), D = B(() => g.models[p.value]), y = B(() => g.models.some((L) => L.is_download_intent)), C = B(() => g.models.filter(
      (L) => g.modelChoices.has(L.filename) || L.is_download_intent
    ).length), O = B(() => {
      var b;
      if (!D.value) return "";
      const L = r((b = D.value.reference) == null ? void 0 : b.node_type);
      return L ? `${L}/${D.value.filename}` : "";
    }), F = B(() => {
      var b;
      if (!D.value) return "not-found";
      const L = g.modelChoices.get(D.value.filename);
      if (L)
        switch (L.action) {
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
      return D.value.is_download_intent ? "download" : (b = D.value.options) != null && b.length ? "ambiguous" : "not-found";
    }), R = B(() => {
      var b, ae;
      if (!D.value) return;
      const L = g.modelChoices.get(D.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (b = L.selected_model) != null && b.filename ? `→ ${L.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return D.value.is_download_intent ? "Pending Download" : (ae = D.value.options) != null && ae.length ? `${D.value.options.length} matches` : "Not Found";
    });
    function z(L) {
      L >= 0 && L < g.models.length && (p.value = L);
    }
    function H() {
      D.value && w("mark-optional", D.value.filename);
    }
    function M() {
      D.value && w("skip", D.value.filename);
    }
    function T(L) {
      D.value && w("option-selected", D.value.filename, L);
    }
    function U() {
      D.value && w("clear-choice", D.value.filename);
    }
    function E() {
      D.value && (v.value = D.value.filename, m.value = !0);
    }
    function x() {
      D.value && (_.value = D.value.download_source || "", d.value = D.value.target_path || O.value, a.value = !0);
    }
    function V() {
      m.value = !1, v.value = "", I.value = [];
    }
    function q() {
      a.value = !1, _.value = "", d.value = "";
    }
    function ee() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function ne(L) {
      D.value && V();
    }
    function A() {
      !D.value || !_.value.trim() || (w("download-url", D.value.filename, _.value.trim(), d.value.trim() || void 0), q());
    }
    function Z(L) {
      if (!L) return "Unknown";
      const b = L / (1024 * 1024 * 1024);
      return b >= 1 ? `${b.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, b) => {
      var ae, te, ue;
      return o(), s("div", qi, [
        e("div", Ki, [
          e("div", Ji, [
            e("h3", Qi, l(y.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Yi, l(y.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Xi, l(C.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        D.value ? (o(), S(to, {
          key: 0,
          "item-name": D.value.filename,
          "current-index": p.value,
          "total-items": t.models.length,
          onPrev: b[0] || (b[0] = (he) => z(p.value - 1)),
          onNext: b[1] || (b[1] = (he) => z(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        D.value ? (o(), s("div", Zi, [
          f(Hi, {
            filename: D.value.filename,
            "node-type": ((ae = D.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((te = D.value.options) != null && te.length),
            options: D.value.options,
            choice: (ue = t.modelChoices) == null ? void 0 : ue.get(D.value.filename),
            status: F.value,
            "status-label": R.value,
            onMarkOptional: H,
            onSkip: M,
            onDownloadUrl: x,
            onSearch: E,
            onOptionSelected: T,
            onClearChoice: U
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", er, [...b[5] || (b[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), S(Se, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(V, ["self"])
          }, [
            e("div", tr, [
              e("div", { class: "model-modal-header" }, [
                b[6] || (b[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", or, [
                f(Ue, {
                  modelValue: v.value,
                  "onUpdate:modelValue": b[2] || (b[2] = (he) => v.value = he),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (o(), s("div", sr, [
                  (o(!0), s(j, null, oe(I.value, (he) => (o(), s("div", {
                    key: he.hash,
                    class: "model-search-result-item",
                    onClick: (Be) => ne()
                  }, [
                    e("div", ar, [
                      e("code", lr, l(he.filename), 1)
                    ]),
                    e("div", ir, [
                      e("span", rr, l(he.category), 1),
                      e("span", dr, l(Z(he.size)), 1)
                    ]),
                    he.relative_path ? (o(), s("div", cr, l(he.relative_path), 1)) : c("", !0)
                  ], 8, nr))), 128))
                ])) : v.value && !k.value ? (o(), s("div", ur, ' No models found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                k.value ? (o(), s("div", mr, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(Se, { to: "body" }, [
          a.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(q, ["self"])
          }, [
            e("div", vr, [
              e("div", { class: "model-modal-header" }, [
                b[7] || (b[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: q
                }, "✕")
              ]),
              e("div", fr, [
                e("div", gr, [
                  b[8] || (b[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Ue, {
                    modelValue: _.value,
                    "onUpdate:modelValue": b[3] || (b[3] = (he) => _.value = he),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", pr, [
                  b[9] || (b[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Ue, {
                    modelValue: d.value,
                    "onUpdate:modelValue": b[4] || (b[4] = (he) => d.value = he),
                    placeholder: O.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", hr, [
                  f(re, {
                    variant: "secondary",
                    onClick: q
                  }, {
                    default: i(() => [...b[10] || (b[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(re, {
                    variant: "primary",
                    disabled: !_.value.trim() || !d.value.trim(),
                    onClick: A
                  }, {
                    default: i(() => [...b[11] || (b[11] = [
                      h(" Queue Download ", -1)
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
}), wr = /* @__PURE__ */ Y(yr, [["__scopeId", "data-v-c6acbada"]]), kr = { class: "applying-step" }, br = {
  key: 0,
  class: "phase-content"
}, _r = {
  key: 1,
  class: "phase-content"
}, $r = { class: "phase-description" }, Cr = { class: "overall-progress" }, xr = { class: "progress-bar" }, Sr = { class: "progress-label" }, Ir = { class: "install-list" }, Er = { class: "install-icon" }, Mr = { key: 0 }, zr = {
  key: 1,
  class: "spinner"
}, Lr = { key: 2 }, Tr = { key: 3 }, Rr = {
  key: 0,
  class: "install-error"
}, Dr = {
  key: 2,
  class: "phase-content"
}, Nr = { class: "phase-header" }, Or = { class: "phase-title" }, Ur = { class: "completion-summary" }, Pr = {
  key: 0,
  class: "summary-item success"
}, Br = { class: "summary-text" }, Fr = {
  key: 1,
  class: "summary-item error"
}, Vr = { class: "summary-text" }, Ar = {
  key: 2,
  class: "failed-list"
}, Wr = { class: "failed-node-id" }, Gr = { class: "failed-error" }, jr = {
  key: 4,
  class: "summary-item success"
}, Hr = {
  key: 5,
  class: "restart-prompt"
}, qr = {
  key: 3,
  class: "phase-content error"
}, Kr = { class: "error-message" }, Jr = /* @__PURE__ */ Q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = B(() => {
      var v, _;
      const m = ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const a = ((_ = u.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.length) ?? 0;
      return Math.round(a / m * 100);
    }), r = B(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((a) => !a.success)) || [];
    }), g = B(() => r.value.length > 0);
    function w(m, a) {
      var _, d;
      const v = (_ = u.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.find((I) => I.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((d = u.progress.nodeInstallProgress) == null ? void 0 : d.currentIndex) === a ? "installing" : "pending";
    }
    function p(m) {
      var a, v;
      return (v = (a = u.progress.nodeInstallProgress) == null ? void 0 : a.completedNodes.find((_) => _.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, a) => {
      var v, _, d, I;
      return o(), s("div", kr, [
        t.progress.phase === "resolving" ? (o(), s("div", br, [...a[2] || (a[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", _r, [
          a[3] || (a[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", $r, " Installing " + l((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + l(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Cr, [
            e("div", xr, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Sr, l(((d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.length) ?? 0) + " / " + l(((I = t.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Ir, [
            (o(!0), s(j, null, oe(t.progress.nodesToInstall, (k, D) => (o(), s("div", {
              key: k,
              class: se(["install-item", w(k, D)])
            }, [
              e("span", Er, [
                w(k, D) === "pending" ? (o(), s("span", Mr, "○")) : w(k, D) === "installing" ? (o(), s("span", zr, "◌")) : w(k, D) === "complete" ? (o(), s("span", Lr, "✓")) : w(k, D) === "failed" ? (o(), s("span", Tr, "✗")) : c("", !0)
              ]),
              e("code", null, l(k), 1),
              p(k) ? (o(), s("span", Rr, l(p(k)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Dr, [
          e("div", Nr, [
            e("span", {
              class: se(["phase-icon", g.value ? "warning" : "success"])
            }, l(g.value ? "⚠" : "✓"), 3),
            e("h3", Or, l(g.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Ur, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", Pr, [
              a[4] || (a[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Br, l(t.progress.nodesInstalled.length) + " node package" + l(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Fr, [
              a[5] || (a[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Vr, l(r.value.length) + " package" + l(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Ar, [
              (o(!0), s(j, null, oe(r.value, (k) => (o(), s("div", {
                key: k.node_id,
                class: "failed-item"
              }, [
                e("code", Wr, l(k.node_id), 1),
                e("span", Gr, l(k.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: a[0] || (a[0] = (k) => m.$emit("retry-failed"))
            }, " Retry Failed (" + l(r.value.length) + ") ", 1)) : c("", !0),
            g.value ? c("", !0) : (o(), s("div", jr, [...a[6] || (a[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            a[8] || (a[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", Hr, [
              a[7] || (a[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: a[1] || (a[1] = (k) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", qr, [
          a[9] || (a[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Kr, l(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Qr = /* @__PURE__ */ Y(Jr, [["__scopeId", "data-v-5efaae58"]]), Yr = {
  key: 0,
  class: "loading-state"
}, Xr = {
  key: 1,
  class: "wizard-content"
}, Zr = {
  key: 0,
  class: "step-content"
}, ed = { class: "analysis-summary" }, td = { class: "analysis-header" }, od = { class: "summary-description" }, sd = { class: "stats-grid" }, nd = { class: "stat-card" }, ad = { class: "stat-items" }, ld = {
  key: 0,
  class: "stat-item success"
}, id = { class: "stat-count" }, rd = {
  key: 1,
  class: "stat-item info"
}, dd = { class: "stat-count" }, cd = {
  key: 2,
  class: "stat-item warning"
}, ud = { class: "stat-count" }, md = {
  key: 3,
  class: "stat-item error"
}, vd = { class: "stat-count" }, fd = { class: "stat-card" }, gd = { class: "stat-items" }, pd = { class: "stat-item success" }, hd = { class: "stat-count" }, yd = {
  key: 0,
  class: "stat-item info"
}, wd = { class: "stat-count" }, kd = {
  key: 1,
  class: "stat-item warning"
}, bd = { class: "stat-count" }, _d = {
  key: 2,
  class: "stat-item error"
}, $d = { class: "stat-count" }, Cd = {
  key: 0,
  class: "status-message warning"
}, xd = { class: "status-text" }, Sd = {
  key: 1,
  class: "status-message info"
}, Id = { class: "status-text" }, Ed = {
  key: 2,
  class: "status-message info"
}, Md = { class: "status-text" }, zd = {
  key: 3,
  class: "status-message success"
}, Ld = {
  key: 3,
  class: "step-content"
}, Td = { class: "review-summary" }, Rd = { class: "review-stats" }, Dd = { class: "review-stat" }, Nd = { class: "stat-value" }, Od = { class: "review-stat" }, Ud = { class: "stat-value" }, Pd = { class: "review-stat" }, Bd = { class: "stat-value" }, Fd = { class: "review-stat" }, Vd = { class: "stat-value" }, Ad = {
  key: 0,
  class: "review-section"
}, Wd = { class: "section-title" }, Gd = { class: "review-items" }, jd = { class: "item-name" }, Hd = { class: "item-choice" }, qd = {
  key: 0,
  class: "choice-badge install"
}, Kd = {
  key: 1,
  class: "choice-badge skip"
}, Jd = {
  key: 1,
  class: "review-section"
}, Qd = { class: "section-title" }, Yd = { class: "review-items" }, Xd = { class: "item-name" }, Zd = { class: "item-choice" }, ec = {
  key: 0,
  class: "choice-badge install"
}, tc = {
  key: 1,
  class: "choice-badge optional"
}, oc = {
  key: 2,
  class: "choice-badge skip"
}, sc = {
  key: 1,
  class: "choice-badge pending"
}, nc = {
  key: 2,
  class: "review-section"
}, ac = { class: "section-title" }, lc = { class: "review-items" }, ic = { class: "item-name" }, rc = { class: "item-choice" }, dc = {
  key: 0,
  class: "choice-badge install"
}, cc = {
  key: 1,
  class: "choice-badge download"
}, uc = {
  key: 2,
  class: "choice-badge optional"
}, mc = {
  key: 3,
  class: "choice-badge skip"
}, vc = {
  key: 4,
  class: "choice-badge skip"
}, fc = {
  key: 1,
  class: "choice-badge download"
}, gc = {
  key: 2,
  class: "choice-badge pending"
}, pc = {
  key: 3,
  class: "no-choices"
}, hc = /* @__PURE__ */ Q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: g, applyResolution: w, installNodes: p, queueModelDownloads: m, progress: a, resetProgress: v } = il(), { loadPendingDownloads: _ } = $t(), d = $(null), I = $(!1), k = $(!1), D = $(null), y = $("analysis"), C = $([]), O = $(/* @__PURE__ */ new Map()), F = $(/* @__PURE__ */ new Map()), R = $(/* @__PURE__ */ new Set()), z = B(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (M.value || E.value) && G.push({ id: "nodes", label: "Nodes" }), (T.value || U.value) && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), y.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), H = B(() => d.value ? d.value.stats.needs_user_input : !1), M = B(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), T = B(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), U = B(() => d.value ? d.value.stats.download_intents > 0 : !1), E = B(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), x = B(() => d.value ? d.value.nodes.resolved.length : 0), V = B(() => {
      if (!d.value) return [];
      const G = d.value.nodes.resolved.filter((J) => !J.is_installed), P = /* @__PURE__ */ new Set();
      return G.filter((J) => P.has(J.package.package_id) ? !1 : (P.add(J.package.package_id), !0));
    }), q = B(() => {
      if (!d.value) return [];
      const G = d.value.nodes.resolved.filter((J) => !J.is_installed), P = /* @__PURE__ */ new Map();
      for (const J of G) {
        const ce = P.get(J.package.package_id);
        ce ? ce.node_types_count++ : P.set(J.package.package_id, {
          package_id: J.package.package_id,
          title: J.package.title,
          node_types_count: 1
        });
      }
      return Array.from(P.values());
    }), ee = B(() => V.value.filter((G) => !R.value.has(G.package.package_id))), ne = B(() => d.value ? d.value.models.resolved.filter((G) => G.match_type === "download_intent").map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), A = B(() => {
      if (!d.value) return [];
      const G = d.value.nodes.unresolved.map((J) => ({
        node_type: J.reference.node_type,
        reason: J.reason,
        is_unresolved: !0,
        options: void 0
      })), P = d.value.nodes.ambiguous.map((J) => ({
        node_type: J.reference.node_type,
        has_multiple_options: !0,
        options: J.options.map((ce) => ({
          package_id: ce.package.package_id,
          title: ce.package.title,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          is_installed: ce.is_installed
        }))
      }));
      return [...G, ...P];
    }), Z = B(() => {
      if (!d.value) return [];
      const G = d.value.models.unresolved.map((J) => ({
        filename: J.reference.widget_value,
        reference: J.reference,
        reason: J.reason,
        is_unresolved: !0,
        options: void 0
      })), P = d.value.models.ambiguous.map((J) => ({
        filename: J.reference.widget_value,
        reference: J.reference,
        has_multiple_options: !0,
        options: J.options.map((ce) => ({
          model: ce.model,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          has_download_source: ce.has_download_source
        }))
      }));
      return [...G, ...P];
    }), L = B(() => {
      const G = Z.value, P = ne.value.map((J) => ({
        filename: J.filename,
        reference: J.reference,
        is_download_intent: !0,
        resolved_model: J.resolved_model,
        download_source: J.download_source,
        target_path: J.target_path,
        options: void 0
      }));
      return [...G, ...P];
    }), b = B(() => {
      let G = ee.value.length;
      for (const P of O.value.values())
        P.action === "install" && G++;
      for (const P of F.value.values())
        P.action === "select" && G++;
      return G;
    }), ae = B(() => {
      let G = 0;
      for (const P of F.value.values())
        P.action === "download" && G++;
      return G;
    }), te = B(() => {
      let G = 0;
      for (const P of O.value.values())
        P.action === "optional" && G++;
      for (const P of F.value.values())
        P.action === "optional" && G++;
      return G;
    }), ue = B(() => {
      let G = R.value.size;
      for (const P of O.value.values())
        P.action === "skip" && G++;
      for (const P of F.value.values())
        P.action === "skip" && G++;
      for (const P of A.value)
        O.value.has(P.node_type) || G++;
      for (const P of Z.value)
        F.value.has(P.filename) || G++;
      return G;
    }), he = B(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, M.value) {
        const P = A.value.length, J = A.value.filter(
          (ce) => O.value.has(ce.node_type)
        ).length;
        G.nodes = { resolved: J, total: P };
      }
      if (T.value || U.value) {
        const P = L.value.length, J = L.value.filter(
          (ce) => F.value.has(ce.filename) || ce.is_download_intent
        ).length;
        G.models = { resolved: J, total: P };
      }
      if (G.review = { resolved: 1, total: 1 }, y.value === "applying") {
        const P = a.totalFiles || 1, J = a.completedFiles.length;
        G.applying = { resolved: J, total: P };
      }
      return G;
    });
    function Be(G) {
      y.value = G;
    }
    function Fe() {
      const G = z.value.findIndex((P) => P.id === y.value);
      G > 0 && (y.value = z.value[G - 1].id);
    }
    function tt() {
      const G = z.value.findIndex((P) => P.id === y.value);
      G < z.value.length - 1 && (y.value = z.value[G + 1].id);
    }
    async function ve() {
      I.value = !0, D.value = null;
      try {
        d.value = await g(n.workflowName);
      } catch (G) {
        D.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function Ee() {
      C.value.includes("analysis") || C.value.push("analysis"), M.value || E.value ? y.value = "nodes" : T.value || U.value ? y.value = "models" : y.value = "review";
    }
    function ut(G) {
      O.value.set(G, { action: "optional" });
    }
    function Ye(G) {
      O.value.set(G, { action: "skip" });
    }
    function Me(G, P) {
      var ce;
      const J = A.value.find((Ce) => Ce.node_type === G);
      (ce = J == null ? void 0 : J.options) != null && ce[P] && O.value.set(G, {
        action: "install",
        package_id: J.options[P].package_id
      });
    }
    function mt(G, P) {
      O.value.set(G, {
        action: "install",
        package_id: P
      });
    }
    function ot(G) {
      O.value.delete(G);
    }
    function vt(G) {
      R.value.has(G) ? R.value.delete(G) : R.value.add(G);
    }
    function K(G) {
      F.value.set(G, { action: "optional" });
    }
    function ie(G) {
      F.value.set(G, { action: "skip" });
    }
    function pe(G, P) {
      var ce;
      const J = Z.value.find((Ce) => Ce.filename === G);
      (ce = J == null ? void 0 : J.options) != null && ce[P] && F.value.set(G, {
        action: "select",
        selected_model: J.options[P].model
      });
    }
    function _e(G, P, J) {
      F.value.set(G, {
        action: "download",
        url: P,
        target_path: J
      });
    }
    function st(G) {
      F.value.delete(G);
    }
    async function Mt() {
      var G;
      k.value = !0, D.value = null, v(), a.phase = "resolving", y.value = "applying";
      try {
        const P = await w(n.workflowName, O.value, F.value, R.value);
        P.models_to_download && P.models_to_download.length > 0 && m(n.workflowName, P.models_to_download);
        const J = [
          ...P.nodes_to_install || [],
          ...ee.value.map((Ce) => Ce.package.package_id)
        ];
        a.nodesToInstall = [...new Set(J)], a.nodesToInstall.length > 0 && await p(n.workflowName), a.phase = "complete", await _();
        const ce = a.installError || ((G = a.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((Ce) => !Ce.success));
        !a.needsRestart && !ce && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (P) {
        D.value = P instanceof Error ? P.message : "Failed to apply resolution", a.error = D.value, a.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function Ct() {
      r("refresh"), r("restart"), r("close");
    }
    async function zt() {
      var P;
      const G = ((P = a.nodeInstallProgress) == null ? void 0 : P.completedNodes.filter((J) => !J.success).map((J) => J.node_id)) || [];
      if (G.length !== 0) {
        a.phase = "installing", a.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, a.nodesToInstall = G, a.nodesInstalled = [], a.installError = void 0;
        try {
          await p(n.workflowName), a.phase = "complete";
        } catch (J) {
          a.error = J instanceof Error ? J.message : "Retry failed", a.phase = "error";
        }
      }
    }
    return $e(ve), (G, P) => (o(), S(rt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: D.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (J) => r("close"))
    }, {
      body: i(() => [
        I.value && !d.value ? (o(), s("div", Yr, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", Xr, [
          f(hl, {
            steps: z.value,
            "current-step": y.value,
            "completed-steps": C.value,
            "step-stats": he.value,
            onStepChange: Be
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          y.value === "analysis" ? (o(), s("div", Zr, [
            e("div", ed, [
              e("div", td, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", od, " Found " + l(d.value.stats.total_nodes) + " nodes and " + l(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", sd, [
                e("div", nd, [
                  P[12] || (P[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", ad, [
                    x.value > 0 ? (o(), s("div", ld, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", id, l(x.value), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    d.value.stats.packages_needing_installation > 0 ? (o(), s("div", rd, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", dd, l(d.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", cd, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ud, l(d.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", md, [
                      P[10] || (P[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", vd, l(d.value.nodes.unresolved.length), 1),
                      P[11] || (P[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", fd, [
                  P[21] || (P[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", gd, [
                    e("div", pd, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", hd, l(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", yd, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", wd, l(d.value.stats.download_intents), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", kd, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", bd, l(d.value.models.ambiguous.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", _d, [
                      P[19] || (P[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", $d, l(d.value.models.unresolved.length), 1),
                      P[20] || (P[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              H.value ? (o(), s("div", Cd, [
                P[22] || (P[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", xd, l(A.value.length + Z.value.length) + " items need your input", 1)
              ])) : E.value ? (o(), s("div", Sd, [
                P[23] || (P[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Id, l(d.value.stats.packages_needing_installation) + " package" + l(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + l(d.value.stats.nodes_needing_installation) + " node type" + l(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + l(U.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : U.value ? (o(), s("div", Ed, [
                P[24] || (P[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Md, l(d.value.stats.download_intents) + " model" + l(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", zd, [...P[25] || (P[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          y.value === "nodes" ? (o(), S(Si, {
            key: 1,
            nodes: A.value,
            "node-choices": O.value,
            "auto-resolved-packages": q.value,
            "skipped-packages": R.value,
            onMarkOptional: ut,
            onSkip: Ye,
            onOptionSelected: Me,
            onManualEntry: mt,
            onClearChoice: ot,
            onPackageSkip: vt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          y.value === "models" ? (o(), S(wr, {
            key: 2,
            models: L.value,
            "model-choices": F.value,
            onMarkOptional: K,
            onSkip: ie,
            onOptionSelected: pe,
            onDownloadUrl: _e,
            onClearChoice: st
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          y.value === "review" ? (o(), s("div", Ld, [
            e("div", Td, [
              P[30] || (P[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Rd, [
                e("div", Dd, [
                  e("span", Nd, l(b.value), 1),
                  P[26] || (P[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Od, [
                  e("span", Ud, l(ae.value), 1),
                  P[27] || (P[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Pd, [
                  e("span", Bd, l(te.value), 1),
                  P[28] || (P[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Fd, [
                  e("span", Vd, l(ue.value), 1),
                  P[29] || (P[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              q.value.length > 0 ? (o(), s("div", Ad, [
                e("h4", Wd, "Node Packages (" + l(q.value.length) + ")", 1),
                e("div", Gd, [
                  (o(!0), s(j, null, oe(q.value, (J) => (o(), s("div", {
                    key: J.package_id,
                    class: "review-item"
                  }, [
                    e("code", jd, l(J.package_id), 1),
                    e("div", Hd, [
                      R.value.has(J.package_id) ? (o(), s("span", Kd, "Skipped")) : (o(), s("span", qd, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              A.value.length > 0 ? (o(), s("div", Jd, [
                e("h4", Qd, "Node Choices (" + l(A.value.length) + ")", 1),
                e("div", Yd, [
                  (o(!0), s(j, null, oe(A.value, (J) => {
                    var ce, Ce, We, Xe;
                    return o(), s("div", {
                      key: J.node_type,
                      class: "review-item"
                    }, [
                      e("code", Xd, l(J.node_type), 1),
                      e("div", Zd, [
                        O.value.has(J.node_type) ? (o(), s(j, { key: 0 }, [
                          ((ce = O.value.get(J.node_type)) == null ? void 0 : ce.action) === "install" ? (o(), s("span", ec, l((Ce = O.value.get(J.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((We = O.value.get(J.node_type)) == null ? void 0 : We.action) === "optional" ? (o(), s("span", tc, " Optional ")) : ((Xe = O.value.get(J.node_type)) == null ? void 0 : Xe.action) === "skip" ? (o(), s("span", oc, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", sc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              L.value.length > 0 ? (o(), s("div", nc, [
                e("h4", ac, "Models (" + l(L.value.length) + ")", 1),
                e("div", lc, [
                  (o(!0), s(j, null, oe(L.value, (J) => {
                    var ce, Ce, We, Xe, xt, St, It;
                    return o(), s("div", {
                      key: J.filename,
                      class: "review-item"
                    }, [
                      e("code", ic, l(J.filename), 1),
                      e("div", rc, [
                        F.value.has(J.filename) ? (o(), s(j, { key: 0 }, [
                          ((ce = F.value.get(J.filename)) == null ? void 0 : ce.action) === "select" ? (o(), s("span", dc, l((We = (Ce = F.value.get(J.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : We.filename), 1)) : ((Xe = F.value.get(J.filename)) == null ? void 0 : Xe.action) === "download" ? (o(), s("span", cc, " Download ")) : ((xt = F.value.get(J.filename)) == null ? void 0 : xt.action) === "optional" ? (o(), s("span", uc, " Optional ")) : ((St = F.value.get(J.filename)) == null ? void 0 : St.action) === "skip" ? (o(), s("span", mc, " Skip ")) : ((It = F.value.get(J.filename)) == null ? void 0 : It.action) === "cancel_download" ? (o(), s("span", vc, " Cancel Download ")) : c("", !0)
                        ], 64)) : J.is_download_intent ? (o(), s("span", fc, " Pending Download ")) : (o(), s("span", gc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              V.value.length === 0 && A.value.length === 0 && L.value.length === 0 ? (o(), s("div", pc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          y.value === "applying" ? (o(), S(Qr, {
            key: 4,
            progress: fe(a),
            onRestart: Ct,
            onRetryFailed: zt
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        y.value !== "analysis" && y.value !== "applying" ? (o(), S(re, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: Fe
        }, {
          default: i(() => [...P[31] || (P[31] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        P[35] || (P[35] = e("div", { class: "footer-spacer" }, null, -1)),
        y.value !== "applying" || fe(a).phase === "complete" || fe(a).phase === "error" ? (o(), S(re, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (J) => r("close"))
        }, {
          default: i(() => [
            h(l(fe(a).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        y.value === "analysis" ? (o(), S(re, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: Ee
        }, {
          default: i(() => [...P[32] || (P[32] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        y.value === "nodes" ? (o(), S(re, {
          key: 3,
          variant: "primary",
          onClick: tt
        }, {
          default: i(() => [
            h(l(T.value || U.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        y.value === "models" ? (o(), S(re, {
          key: 4,
          variant: "primary",
          onClick: tt
        }, {
          default: i(() => [...P[33] || (P[33] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        y.value === "review" ? (o(), S(re, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: Mt
        }, {
          default: i(() => [...P[34] || (P[34] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), yc = /* @__PURE__ */ Y(hc, [["__scopeId", "data-v-0d3f93e6"]]), wc = { class: "search-input-wrapper" }, kc = ["value", "placeholder"], bc = /* @__PURE__ */ Q({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = $(null);
    let w;
    function p(a) {
      const v = a.target.value;
      n.debounce > 0 ? (clearTimeout(w), w = window.setTimeout(() => {
        r("update:modelValue", v);
      }, n.debounce)) : r("update:modelValue", v);
    }
    function m() {
      var a;
      r("update:modelValue", ""), r("clear"), (a = g.value) == null || a.focus();
    }
    return $e(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (a, v) => (o(), s("div", wc, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: He(m, ["escape"])
      }, null, 40, kc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), _c = /* @__PURE__ */ Y(bc, [["__scopeId", "data-v-266f857a"]]), $c = { class: "search-bar" }, Cc = /* @__PURE__ */ Q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", $c, [
      f(_c, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), dt = /* @__PURE__ */ Y(Cc, [["__scopeId", "data-v-3d51bbfd"]]), xc = { class: "section-group" }, Sc = {
  key: 0,
  class: "section-content"
}, Ic = /* @__PURE__ */ Q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = $(n.initiallyExpanded);
    function w() {
      n.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (p, m) => (o(), s("section", xc, [
      f(Ne, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: w
      }, {
        default: i(() => [
          h(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), s("div", Sc, [
        me(p.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), be = /* @__PURE__ */ Y(Ic, [["__scopeId", "data-v-c48e33ed"]]), Ec = { class: "item-header" }, Mc = {
  key: 0,
  class: "item-icon"
}, zc = { class: "item-info" }, Lc = {
  key: 0,
  class: "item-title"
}, Tc = {
  key: 1,
  class: "item-subtitle"
}, Rc = {
  key: 0,
  class: "item-details"
}, Dc = {
  key: 1,
  class: "item-actions"
}, Nc = /* @__PURE__ */ Q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = B(() => n.status ? `status-${n.status}` : "");
    return (g, w) => (o(), s("div", {
      class: se(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: w[0] || (w[0] = (p) => t.clickable && g.$emit("click"))
    }, [
      e("div", Ec, [
        g.$slots.icon ? (o(), s("span", Mc, [
          me(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", zc, [
          g.$slots.title ? (o(), s("div", Lc, [
            me(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), s("div", Tc, [
            me(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), s("div", Rc, [
        me(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), s("div", Dc, [
        me(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ Y(Nc, [["__scopeId", "data-v-cc435e0e"]]), Oc = { class: "loading-state" }, Uc = { class: "loading-message" }, Pc = /* @__PURE__ */ Q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (o(), s("div", Oc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Uc, l(t.message), 1)
    ]));
  }
}), Je = /* @__PURE__ */ Y(Pc, [["__scopeId", "data-v-ad8436c9"]]), Bc = { class: "error-state" }, Fc = { class: "error-message" }, Vc = /* @__PURE__ */ Q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (o(), s("div", Bc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Fc, l(t.message), 1),
      t.retry ? (o(), S(X, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Qe = /* @__PURE__ */ Y(Vc, [["__scopeId", "data-v-5397be48"]]), Ac = /* @__PURE__ */ Q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: g } = Ie();
    Zt();
    const w = $([]), p = $(!1), m = $(null), a = $(""), v = $(!0), _ = $(!1), d = $(!1), I = $(!1), k = $(null), D = B(
      () => w.value.filter((Z) => Z.status === "broken")
    ), y = B(
      () => w.value.filter((Z) => Z.status === "new")
    ), C = B(
      () => w.value.filter((Z) => Z.status === "modified")
    ), O = B(
      () => w.value.filter((Z) => Z.status === "synced")
    ), F = B(() => {
      if (!a.value.trim()) return w.value;
      const Z = a.value.toLowerCase();
      return w.value.filter((L) => L.name.toLowerCase().includes(Z));
    }), R = B(
      () => D.value.filter(
        (Z) => !a.value.trim() || Z.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), z = B(
      () => y.value.filter(
        (Z) => !a.value.trim() || Z.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), H = B(
      () => C.value.filter(
        (Z) => !a.value.trim() || Z.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), M = B(
      () => O.value.filter(
        (Z) => !a.value.trim() || Z.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), T = B(
      () => _.value ? M.value : M.value.slice(0, 5)
    );
    async function U(Z = !1) {
      p.value = !0, m.value = null;
      try {
        w.value = await g(Z);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    u({ loadWorkflows: U });
    function E(Z) {
      k.value = Z, d.value = !0;
    }
    function x(Z) {
      k.value = Z, I.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function q() {
      r("refresh");
    }
    async function ee() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ne(Z) {
      const L = [];
      return Z.missing_nodes > 0 && L.push(`${Z.missing_nodes} missing node${Z.missing_nodes > 1 ? "s" : ""}`), Z.missing_models > 0 && L.push(`${Z.missing_models} missing model${Z.missing_models > 1 ? "s" : ""}`), Z.pending_downloads && Z.pending_downloads > 0 && L.push(`${Z.pending_downloads} pending download${Z.pending_downloads > 1 ? "s" : ""}`), L.length > 0 ? L.join(", ") : "Has issues";
    }
    function A(Z) {
      const L = Z.sync_state === "new" ? "New" : Z.sync_state === "modified" ? "Modified" : Z.sync_state === "synced" ? "Synced" : Z.sync_state;
      return Z.has_path_sync_issues && Z.models_needing_path_sync && Z.models_needing_path_sync > 0 ? `${Z.models_needing_path_sync} model path${Z.models_needing_path_sync > 1 ? "s" : ""} need${Z.models_needing_path_sync === 1 ? "s" : ""} sync` : L || "Unknown";
    }
    return $e(U), (Z, L) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, { title: "WORKFLOWS" }, {
            actions: i(() => [
              D.value.length > 0 ? (o(), S(X, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...L[8] || (L[8] = [
                  h(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(dt, {
            modelValue: a.value,
            "onUpdate:modelValue": L[0] || (L[0] = (b) => a.value = b),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          p.value ? (o(), S(Je, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), S(Qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            R.value.length ? (o(), S(be, {
              key: 0,
              title: "BROKEN",
              count: R.value.length
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(R.value, (b) => (o(), S(xe, {
                  key: b.name,
                  status: "broken"
                }, {
                  icon: i(() => [...L[9] || (L[9] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(ne(b)), 1)
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => x(b.name)
                    }, {
                      default: i(() => [...L[10] || (L[10] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(b.name)
                    }, {
                      default: i(() => [...L[11] || (L[11] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            z.value.length ? (o(), S(be, {
              key: 1,
              title: "NEW",
              count: z.value.length
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(z.value, (b) => (o(), S(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    h(l(b.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    h(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(A(b)), 1)
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(b.name)
                    }, {
                      default: i(() => [...L[12] || (L[12] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            H.value.length ? (o(), S(be, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(H.value, (b) => (o(), S(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...L[13] || (L[13] = [
                    h("⚡", -1)
                  ])]),
                  title: i(() => [
                    h(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(A(b)), 1)
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(b.name)
                    }, {
                      default: i(() => [...L[14] || (L[14] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (o(), S(be, {
              key: 3,
              title: "SYNCED",
              count: M.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: L[2] || (L[2] = (b) => v.value = b)
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(T.value, (b) => (o(), S(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    h(l(b.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    h(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(A(b)), 1)
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(b.name)
                    }, {
                      default: i(() => [...L[15] || (L[15] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !_.value && M.value.length > 5 ? (o(), S(X, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (b) => _.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    h(" View all " + l(M.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            F.value.length ? c("", !0) : (o(), S(Pe, {
              key: 4,
              icon: "📭",
              message: a.value ? `No workflows match '${a.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && k.value ? (o(), S(nl, {
        key: 0,
        "workflow-name": k.value,
        onClose: L[3] || (L[3] = (b) => d.value = !1),
        onResolve: L[4] || (L[4] = (b) => x(k.value)),
        onRefresh: L[5] || (L[5] = (b) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      I.value && k.value ? (o(), S(yc, {
        key: 1,
        "workflow-name": k.value,
        onClose: L[6] || (L[6] = (b) => I.value = !1),
        onInstall: q,
        onRefresh: L[7] || (L[7] = (b) => r("refresh")),
        onRestart: ee
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Wc = /* @__PURE__ */ Y(Ac, [["__scopeId", "data-v-b7939cb4"]]), Gc = /* @__PURE__ */ Q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: se(["summary-bar", t.variant])
    }, [
      me(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ Y(Gc, [["__scopeId", "data-v-ccb7816e"]]), jc = {
  key: 0,
  class: "model-details"
}, Hc = { class: "detail-section" }, qc = { class: "detail-row" }, Kc = { class: "detail-value mono" }, Jc = { class: "detail-row" }, Qc = { class: "detail-value mono" }, Yc = { class: "detail-row" }, Xc = { class: "detail-value mono" }, Zc = { class: "detail-row" }, eu = { class: "detail-value" }, tu = { class: "detail-row" }, ou = { class: "detail-value" }, su = { class: "detail-row" }, nu = { class: "detail-value" }, au = { class: "detail-section" }, lu = { class: "section-header" }, iu = {
  key: 0,
  class: "locations-list"
}, ru = { class: "location-path mono" }, du = {
  key: 0,
  class: "location-modified"
}, cu = ["onClick"], uu = {
  key: 1,
  class: "empty-state"
}, mu = { class: "detail-section" }, vu = { class: "section-header" }, fu = {
  key: 0,
  class: "sources-list"
}, gu = { class: "source-type" }, pu = ["href"], hu = ["disabled", "onClick"], yu = {
  key: 1,
  class: "empty-state"
}, wu = { class: "add-source-form" }, ku = ["disabled"], bu = {
  key: 2,
  class: "source-error"
}, _u = {
  key: 3,
  class: "source-success"
}, $u = /* @__PURE__ */ Q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: g, removeModelSource: w, openFileLocation: p } = Ie(), m = $(null), a = $(!0), v = $(null), _ = $(""), d = $(!1), I = $(null), k = $(null), D = $(null), y = $(null);
    let C = null;
    function O(U, E = "success", x = 2e3) {
      C && clearTimeout(C), y.value = { message: U, type: E }, C = setTimeout(() => {
        y.value = null;
      }, x);
    }
    function F(U) {
      if (!U) return "Unknown";
      const E = 1024 * 1024 * 1024, x = 1024 * 1024;
      return U >= E ? `${(U / E).toFixed(1)} GB` : U >= x ? `${(U / x).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function R(U) {
      navigator.clipboard.writeText(U), O("Copied to clipboard!");
    }
    async function z(U) {
      try {
        await p(U), O("Opening file location...");
      } catch {
        O("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!_.value.trim() || !m.value)) {
        d.value = !0, k.value = null, D.value = null;
        try {
          await g(m.value.hash, _.value.trim()), D.value = "Source added successfully!", _.value = "", await T();
        } catch (U) {
          k.value = U instanceof Error ? U.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function M(U) {
      if (m.value) {
        I.value = U, k.value = null, D.value = null;
        try {
          await w(m.value.hash, U), O("Source removed"), await T();
        } catch (E) {
          k.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          I.value = null;
        }
      }
    }
    async function T() {
      a.value = !0, v.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (U) {
        v.value = U instanceof Error ? U.message : "Failed to load model details";
      } finally {
        a.value = !1;
      }
    }
    return $e(T), (U, E) => {
      var x;
      return o(), s(j, null, [
        f(rt, {
          title: `Model Details: ${((x = m.value) == null ? void 0 : x.filename) || "Loading..."}`,
          size: "lg",
          loading: a.value,
          error: v.value,
          onClose: E[5] || (E[5] = (V) => U.$emit("close"))
        }, {
          body: i(() => {
            var V, q, ee, ne;
            return [
              m.value ? (o(), s("div", jc, [
                e("section", Hc, [
                  e("div", qc, [
                    E[6] || (E[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Kc, l(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (A) => R(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Jc, [
                    E[7] || (E[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Qc, l(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (A) => R(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Yc, [
                    E[8] || (E[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Xc, l(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (A) => R(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Zc, [
                    E[9] || (E[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", eu, l(F(m.value.size)), 1)
                  ]),
                  e("div", tu, [
                    E[10] || (E[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", ou, l(m.value.category), 1)
                  ]),
                  e("div", su, [
                    E[11] || (E[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", nu, l(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", au, [
                  e("h4", lu, "Locations (" + l(((V = m.value.locations) == null ? void 0 : V.length) || 0) + ")", 1),
                  (q = m.value.locations) != null && q.length ? (o(), s("div", iu, [
                    (o(!0), s(j, null, oe(m.value.locations, (A, Z) => (o(), s("div", {
                      key: Z,
                      class: "location-item"
                    }, [
                      e("span", ru, l(A.path), 1),
                      A.modified ? (o(), s("span", du, "Modified: " + l(A.modified), 1)) : c("", !0),
                      A.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => z(A.path)
                      }, " Open File Location ", 8, cu)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", uu, "No locations found"))
                ]),
                e("section", mu, [
                  e("h4", vu, "Download Sources (" + l(((ee = m.value.sources) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (ne = m.value.sources) != null && ne.length ? (o(), s("div", fu, [
                    (o(!0), s(j, null, oe(m.value.sources, (A, Z) => (o(), s("div", {
                      key: Z,
                      class: "source-item"
                    }, [
                      e("span", gu, l(A.type) + ":", 1),
                      e("a", {
                        href: A.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(A.url), 9, pu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === A.url,
                        onClick: (L) => M(A.url)
                      }, l(I.value === A.url ? "..." : "×"), 9, hu)
                    ]))), 128))
                  ])) : (o(), s("div", yu, " No download sources configured ")),
                  e("div", wu, [
                    fo(e("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (A) => _.value = A),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [go, _.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !_.value.trim() || d.value,
                      onClick: H
                    }, l(d.value ? "Adding..." : "Add Source"), 9, ku)
                  ]),
                  k.value ? (o(), s("p", bu, l(k.value), 1)) : c("", !0),
                  D.value ? (o(), s("p", _u, l(D.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (V) => U.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), S(Se, { to: "body" }, [
          y.value ? (o(), s("div", {
            key: 0,
            class: se(["toast", y.value.type])
          }, l(y.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), oo = /* @__PURE__ */ Y($u, [["__scopeId", "data-v-f15cbb56"]]), Cu = /* @__PURE__ */ Q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: g } = Ie(), w = $([]), p = $([]), m = $("production"), a = $(!1), v = $(null), _ = $(""), d = $(!1), I = $(null);
    function k() {
      d.value = !1, n("navigate", "model-index");
    }
    const D = B(
      () => w.value.reduce((T, U) => T + (U.size || 0), 0)
    ), y = B(() => {
      if (!_.value.trim()) return w.value;
      const T = _.value.toLowerCase();
      return w.value.filter((U) => U.filename.toLowerCase().includes(T));
    }), C = B(() => {
      if (!_.value.trim()) return p.value;
      const T = _.value.toLowerCase();
      return p.value.filter((U) => U.filename.toLowerCase().includes(T));
    }), O = B(() => {
      const T = {};
      for (const E of y.value) {
        const x = E.type || "other";
        T[x] || (T[x] = []), T[x].push(E);
      }
      const U = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([E], [x]) => {
        const V = U.indexOf(E), q = U.indexOf(x);
        return V >= 0 && q >= 0 ? V - q : V >= 0 ? -1 : q >= 0 ? 1 : E.localeCompare(x);
      }).map(([E, x]) => ({ type: E, models: x }));
    });
    function F(T) {
      if (!T) return "Unknown";
      const U = T / (1024 * 1024);
      return U >= 1024 ? `${(U / 1024).toFixed(1)} GB` : `${U.toFixed(0)} MB`;
    }
    function R(T) {
      I.value = T.hash || T.filename;
    }
    function z(T) {
      n("navigate", "model-index");
    }
    function H(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function M() {
      a.value = !0, v.value = null;
      try {
        const T = await r();
        w.value = T, p.value = [];
        const U = await g();
        m.value = U.environment || "production";
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        a.value = !1;
      }
    }
    return $e(M), (T, U) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: U[0] || (U[0] = (E) => d.value = !0)
          })
        ]),
        search: i(() => [
          f(dt, {
            modelValue: _.value,
            "onUpdate:modelValue": U[1] || (U[1] = (E) => _.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), S(Je, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (o(), S(Qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            w.value.length ? (o(), S(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + l(w.value.length) + " models • " + l(F(D.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(j, null, oe(O.value, (E) => (o(), S(be, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(E.models, (x) => (o(), S(xe, {
                  key: x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...U[4] || (U[4] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(l(x.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(F(x.size)), 1)
                  ]),
                  details: i(() => [
                    f(ye, {
                      label: "Used by:",
                      value: (x.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(ye, {
                      label: "Path:",
                      value: x.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => R(x)
                    }, {
                      default: i(() => [...U[5] || (U[5] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            C.value.length ? (o(), S(be, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(C.value, (E) => (o(), S(xe, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...U[6] || (U[6] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(l(E.filename), 1)
                  ]),
                  subtitle: i(() => [...U[7] || (U[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var x;
                    return [
                      f(ye, {
                        label: "Required by:",
                        value: ((x = E.workflow_names) == null ? void 0 : x.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (x) => H(E.filename)
                    }, {
                      default: i(() => [...U[8] || (U[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (x) => z(E.filename)
                    }, {
                      default: i(() => [...U[9] || (U[9] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !y.value.length && !C.value.length ? (o(), S(Pe, {
              key: 2,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(Ke, {
        show: d.value,
        title: "About Environment Models",
        onClose: U[2] || (U[2] = (E) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            U[10] || (U[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            U[11] || (U[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          f(X, {
            variant: "primary",
            onClick: k
          }, {
            default: i(() => [...U[12] || (U[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(oo, {
        key: 0,
        identifier: I.value,
        onClose: U[3] || (U[3] = (E) => I.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), xu = /* @__PURE__ */ Y(Cu, [["__scopeId", "data-v-cb4f12b3"]]), Su = {
  key: 0,
  class: "indexing-progress"
}, Iu = { class: "progress-info" }, Eu = { class: "progress-label" }, Mu = { class: "progress-count" }, zu = { class: "progress-bar" }, Lu = { class: "modal-content" }, Tu = { class: "modal-header" }, Ru = { class: "modal-body" }, Du = { class: "input-group" }, Nu = { class: "current-path" }, Ou = { class: "input-group" }, Uu = { class: "modal-footer" }, Pu = { class: "modal-content" }, Bu = { class: "modal-header" }, Fu = { class: "modal-body" }, Vu = { class: "input-group" }, Au = { class: "input-group" }, Wu = { class: "modal-footer" }, Gu = /* @__PURE__ */ Q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: g,
      setModelsDirectory: w
    } = Ie(), { addToQueue: p } = $t(), m = u, a = $([]), v = $(!1), _ = $(!1), d = $(null), I = $(""), k = $(!1), D = $(null), y = $(!1), C = $(null), O = $(""), F = $(!1), R = $(!1), z = $(""), H = $(""), M = $(null), T = B(
      () => a.value.reduce((L, b) => L + (b.size || 0), 0)
    ), U = B(() => {
      if (!I.value.trim()) return a.value;
      const L = I.value.toLowerCase();
      return a.value.filter((b) => {
        const ae = b, te = b.sha256 || ae.sha256_hash || "";
        return b.filename.toLowerCase().includes(L) || te.toLowerCase().includes(L);
      });
    }), E = B(() => {
      const L = {};
      for (const ae of U.value) {
        const te = ae.type || "other";
        L[te] || (L[te] = []), L[te].push(ae);
      }
      const b = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([ae], [te]) => {
        const ue = b.indexOf(ae), he = b.indexOf(te);
        return ue >= 0 && he >= 0 ? ue - he : ue >= 0 ? -1 : he >= 0 ? 1 : ae.localeCompare(te);
      }).map(([ae, te]) => ({ type: ae, models: te }));
    });
    function x(L) {
      if (!L) return "Unknown";
      const b = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return L >= b ? `${(L / b).toFixed(1)} GB` : L >= ae ? `${(L / ae).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function V(L) {
      D.value = L.hash || L.filename;
    }
    async function q() {
      _.value = !0, d.value = null;
      try {
        const L = await r();
        await A(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        d.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        _.value = !1;
      }
    }
    async function ee() {
      if (O.value.trim()) {
        F.value = !0, d.value = null;
        try {
          const L = await w(O.value.trim());
          C.value = L.path, y.value = !1, O.value = "", await A(), console.log(`Directory changed: ${L.models_indexed} models indexed`), m("refresh");
        } catch (L) {
          d.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          F.value = !1;
        }
      }
    }
    function ne() {
      if (!z.value.trim() || !H.value.trim()) return;
      const L = H.value.split("/").pop() || "model.safetensors";
      p([{
        workflow: "__manual__",
        filename: L,
        url: z.value.trim(),
        targetPath: H.value.trim()
      }]), z.value = "", H.value = "", R.value = !1;
    }
    async function A() {
      v.value = !0, d.value = null;
      try {
        a.value = await n();
      } catch (L) {
        d.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function Z() {
      try {
        const L = await g();
        C.value = L.path;
      } catch {
      }
    }
    return $e(() => {
      A(), Z();
    }), (L, b) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: b[2] || (b[2] = (ae) => k.value = !0)
          }, {
            actions: i(() => [
              f(X, {
                variant: "primary",
                size: "sm",
                disabled: _.value,
                onClick: q
              }, {
                default: i(() => [
                  h(l(_.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(X, {
                variant: "primary",
                size: "sm",
                onClick: b[0] || (b[0] = (ae) => y.value = !0)
              }, {
                default: i(() => [...b[15] || (b[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(X, {
                variant: "primary",
                size: "sm",
                onClick: b[1] || (b[1] = (ae) => R.value = !0)
              }, {
                default: i(() => [...b[16] || (b[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  h(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          M.value ? (o(), s("div", Su, [
            e("div", Iu, [
              e("span", Eu, l(M.value.message), 1),
              e("span", Mu, l(M.value.current) + "/" + l(M.value.total), 1)
            ]),
            e("div", zu, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          f(dt, {
            modelValue: I.value,
            "onUpdate:modelValue": b[3] || (b[3] = (ae) => I.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value || M.value ? (o(), S(Je, {
            key: 0,
            message: M.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), S(Qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            a.value.length ? (o(), S(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + l(a.value.length) + " models • " + l(x(T.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(j, null, oe(E.value, (ae) => (o(), S(be, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(ae.models, (te) => (o(), S(xe, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...b[17] || (b[17] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(l(te.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(x(te.size)), 1)
                  ]),
                  details: i(() => [
                    f(ye, {
                      label: "Hash:",
                      value: te.hash ? te.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ue) => V(te)
                    }, {
                      default: i(() => [...b[18] || (b[18] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            U.value.length ? c("", !0) : (o(), S(Pe, {
              key: 1,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(Ke, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: b[4] || (b[4] = (ae) => k.value = !1)
      }, {
        content: i(() => [...b[19] || (b[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      D.value ? (o(), S(oo, {
        key: 0,
        identifier: D.value,
        onClose: b[5] || (b[5] = (ae) => D.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), S(Se, { to: "body" }, [
        y.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[9] || (b[9] = ke((ae) => y.value = !1, ["self"]))
        }, [
          e("div", Lu, [
            e("div", Tu, [
              b[20] || (b[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[6] || (b[6] = (ae) => y.value = !1)
              }, "✕")
            ]),
            e("div", Ru, [
              e("div", Du, [
                b[21] || (b[21] = e("label", null, "Current Directory", -1)),
                e("code", Nu, l(C.value || "Not set"), 1)
              ]),
              e("div", Ou, [
                b[22] || (b[22] = e("label", null, "New Directory Path", -1)),
                f(Ue, {
                  modelValue: O.value,
                  "onUpdate:modelValue": b[7] || (b[7] = (ae) => O.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              b[23] || (b[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Uu, [
              f(re, {
                variant: "secondary",
                onClick: b[8] || (b[8] = (ae) => y.value = !1)
              }, {
                default: i(() => [...b[24] || (b[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(re, {
                variant: "primary",
                disabled: !O.value.trim() || F.value,
                loading: F.value,
                onClick: ee
              }, {
                default: i(() => [
                  h(l(F.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), S(Se, { to: "body" }, [
        R.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[14] || (b[14] = ke((ae) => R.value = !1, ["self"]))
        }, [
          e("div", Pu, [
            e("div", Bu, [
              b[25] || (b[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[10] || (b[10] = (ae) => R.value = !1)
              }, "✕")
            ]),
            e("div", Fu, [
              e("div", Vu, [
                b[26] || (b[26] = e("label", null, "Download URL", -1)),
                f(Ue, {
                  modelValue: z.value,
                  "onUpdate:modelValue": b[11] || (b[11] = (ae) => z.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Au, [
                b[27] || (b[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Ue, {
                  modelValue: H.value,
                  "onUpdate:modelValue": b[12] || (b[12] = (ae) => H.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              b[28] || (b[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Wu, [
              f(re, {
                variant: "secondary",
                onClick: b[13] || (b[13] = (ae) => R.value = !1)
              }, {
                default: i(() => [...b[29] || (b[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(re, {
                variant: "primary",
                disabled: !z.value.trim() || !H.value.trim(),
                onClick: ne
              }, {
                default: i(() => [...b[30] || (b[30] = [
                  h(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), ju = /* @__PURE__ */ Y(Gu, [["__scopeId", "data-v-73b78d84"]]), Hu = { class: "node-details" }, qu = { class: "status-row" }, Ku = {
  key: 0,
  class: "detail-row"
}, Ju = { class: "value" }, Qu = { class: "detail-row" }, Yu = { class: "value" }, Xu = {
  key: 1,
  class: "detail-row"
}, Zu = { class: "value mono" }, em = {
  key: 2,
  class: "detail-row"
}, tm = ["href"], om = {
  key: 3,
  class: "detail-row"
}, sm = { class: "value mono small" }, nm = { class: "detail-row" }, am = {
  key: 0,
  class: "value"
}, lm = {
  key: 1,
  class: "workflow-list"
}, im = /* @__PURE__ */ Q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), w = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), p = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, a) => (o(), S(rt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: a[1] || (a[1] = (v) => r("close"))
    }, {
      body: i(() => [
        e("div", Hu, [
          e("div", qu, [
            a[2] || (a[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", g.value])
            }, l(w.value), 3)
          ]),
          t.node.version ? (o(), s("div", Ku, [
            a[3] || (a[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Ju, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : c("", !0),
          e("div", Qu, [
            a[4] || (a[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Yu, l(p.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", Xu, [
            a[5] || (a[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Zu, l(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), s("div", em, [
            a[7] || (a[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              h(l(t.node.repository) + " ", 1),
              a[6] || (a[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, tm)
          ])) : c("", !0),
          t.node.download_url ? (o(), s("div", om, [
            a[8] || (a[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", sm, l(t.node.download_url), 1)
          ])) : c("", !0),
          a[10] || (a[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", nm, [
            a[9] || (a[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", am, " Not used in any workflows ")) : (o(), s("div", lm, [
              (o(!0), s(j, null, oe(t.node.used_in_workflows, (v) => (o(), s("span", {
                key: v,
                class: "workflow-tag"
              }, l(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        f(re, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (v) => r("close"))
        }, {
          default: i(() => [...a[11] || (a[11] = [
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), rm = /* @__PURE__ */ Y(im, [["__scopeId", "data-v-b342f626"]]), dm = { key: 0 }, cm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, um = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, mm = /* @__PURE__ */ Q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: g, installNode: w, uninstallNode: p } = Ie(), m = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), a = $(!1), v = $(null), _ = $(""), d = $(!1), I = $(null), k = B(() => {
      if (!_.value.trim()) return m.value.nodes;
      const E = _.value.toLowerCase();
      return m.value.nodes.filter(
        (x) => {
          var V, q;
          return x.name.toLowerCase().includes(E) || ((V = x.description) == null ? void 0 : V.toLowerCase().includes(E)) || ((q = x.repository) == null ? void 0 : q.toLowerCase().includes(E));
        }
      );
    }), D = B(
      () => k.value.filter((E) => E.installed && E.tracked)
    ), y = B(
      () => k.value.filter((E) => !E.installed && E.tracked)
    ), C = B(
      () => k.value.filter((E) => E.installed && !E.tracked)
    );
    function O(E) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[E] || E;
    }
    function F(E) {
      return !E.used_in_workflows || E.used_in_workflows.length === 0 ? "Not used in any workflows" : E.used_in_workflows.length === 1 ? E.used_in_workflows[0] : `${E.used_in_workflows.length} workflows`;
    }
    function R(E) {
      I.value = E;
    }
    function z() {
      n("open-node-manager");
    }
    async function H(E) {
      if (confirm(`Track "${E}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          a.value = !0;
          const x = await g(E);
          x.status === "success" ? (alert(`Node "${E}" is now tracked as development!`), await U()) : alert(`Failed to track node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error tracking node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function M(E) {
      if (confirm(`Remove untracked node "${E}"?

This will delete the node directory from custom_nodes/.`))
        try {
          a.value = !0;
          const x = await p(E);
          x.status === "success" ? (alert(`Node "${E}" removed!`), await U()) : alert(`Failed to remove node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error removing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function T(E) {
      if (confirm(`Install node "${E}"?

This will download and install the node.`))
        try {
          a.value = !0;
          const x = await w(E);
          x.status === "success" ? (alert(`Node "${E}" installed successfully!`), await U()) : alert(`Failed to install node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error installing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function U() {
      a.value = !0, v.value = null;
      try {
        m.value = await r();
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load nodes";
      } finally {
        a.value = !1;
      }
    }
    return $e(U), (E, x) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (V) => d.value = !0)
          }, {
            actions: i(() => [
              f(X, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: i(() => [...x[5] || (x[5] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(dt, {
            modelValue: _.value,
            "onUpdate:modelValue": x[1] || (x[1] = (V) => _.value = V),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), S(Je, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (o(), S(Qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            m.value.total_count ? (o(), S(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(l(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(j, { key: 0 }, [
                  h(" • " + l(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (o(), s(j, { key: 1 }, [
                  h(" • " + l(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            C.value.length ? (o(), S(be, {
              key: 1,
              title: "UNTRACKED",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(C.value, (V) => (o(), S(xe, {
                  key: V.name,
                  status: "warning"
                }, {
                  icon: i(() => [...x[6] || (x[6] = [
                    h("?", -1)
                  ])]),
                  title: i(() => [
                    h(l(V.name), 1)
                  ]),
                  subtitle: i(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    f(ye, {
                      label: "Used by:",
                      value: F(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => R(V)
                    }, {
                      default: i(() => [...x[8] || (x[8] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => H(V.name)
                    }, {
                      default: i(() => [...x[9] || (x[9] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(X, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (q) => M(V.name)
                    }, {
                      default: i(() => [...x[10] || (x[10] = [
                        h(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            D.value.length ? (o(), S(be, {
              key: 2,
              title: "INSTALLED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(D.value, (V) => (o(), S(xe, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    h(l(V.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    h(l(V.name), 1)
                  ]),
                  subtitle: i(() => [
                    V.version ? (o(), s("span", dm, l(V.source === "development" ? "" : "v") + l(V.version), 1)) : (o(), s("span", cm, "version unknown")),
                    e("span", um, " • " + l(O(V.source)), 1)
                  ]),
                  details: i(() => [
                    f(ye, {
                      label: "Used by:",
                      value: F(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => R(V)
                    }, {
                      default: i(() => [...x[11] || (x[11] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: z
                    }, {
                      default: i(() => [...x[12] || (x[12] = [
                        h(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            y.value.length ? (o(), S(be, {
              key: 3,
              title: "MISSING",
              count: y.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(y.value, (V) => (o(), S(xe, {
                  key: V.name,
                  status: "missing"
                }, {
                  icon: i(() => [...x[13] || (x[13] = [
                    h("!", -1)
                  ])]),
                  title: i(() => [
                    h(l(V.name), 1)
                  ]),
                  subtitle: i(() => [...x[14] || (x[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    f(ye, {
                      label: "Required by:",
                      value: F(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => R(V)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => T(V.name)
                    }, {
                      default: i(() => [...x[16] || (x[16] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !D.value.length && !y.value.length && !C.value.length ? (o(), S(Pe, {
              key: 4,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(Ke, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: x[3] || (x[3] = (V) => d.value = !1)
      }, {
        content: i(() => [...x[17] || (x[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            h(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            h(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            h(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          f(X, {
            variant: "primary",
            onClick: x[2] || (x[2] = (V) => d.value = !1)
          }, {
            default: i(() => [...x[18] || (x[18] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(rm, {
        key: 0,
        node: I.value,
        onClose: x[4] || (x[4] = (V) => I.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), vm = /* @__PURE__ */ Y(mm, [["__scopeId", "data-v-4ac1465a"]]), fm = { class: "remote-url-display" }, gm = ["title"], pm = ["title"], hm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ym = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, wm = /* @__PURE__ */ Q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = $(!1), r = B(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const w = u.url.slice(0, Math.floor(u.maxLength * 0.6)), p = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${w}...${p}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy URL:", w);
      }
    }
    return (w, p) => (o(), s("div", fm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, gm),
      e("button", {
        class: se(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", ym, [...p[1] || (p[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", hm, [...p[0] || (p[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, pm)
    ]));
  }
}), Ht = /* @__PURE__ */ Y(wm, [["__scopeId", "data-v-7768a58d"]]), km = { class: "remote-title" }, bm = {
  key: 0,
  class: "default-badge"
}, _m = {
  key: 1,
  class: "sync-badge"
}, $m = {
  key: 0,
  class: "ahead"
}, Cm = {
  key: 1,
  class: "behind"
}, xm = {
  key: 0,
  class: "tracking-info"
}, Sm = /* @__PURE__ */ Q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: u }) {
    const n = t, r = B(() => n.fetchingRemote === n.remote.name), g = B(() => n.remote.is_default), w = B(() => !!n.trackingBranch);
    function p(m) {
      const a = new Date(m), _ = (/* @__PURE__ */ new Date()).getTime() - a.getTime(), d = Math.floor(_ / 6e4);
      if (d < 1) return "Just now";
      if (d < 60) return `${d}m ago`;
      const I = Math.floor(d / 60);
      if (I < 24) return `${I}h ago`;
      const k = Math.floor(I / 24);
      return k < 7 ? `${k}d ago` : a.toLocaleDateString();
    }
    return (m, a) => (o(), S(xe, {
      status: g.value ? "synced" : void 0
    }, {
      icon: i(() => [
        h(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", km, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), s("span", bm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", _m, [
            t.syncStatus.ahead > 0 ? (o(), s("span", $m, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", Cm, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        w.value ? (o(), s("span", xm, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var v;
        return [
          f(ye, { label: "Fetch:" }, {
            default: i(() => [
              f(Ht, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), S(ye, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              f(Ht, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (v = t.syncStatus) != null && v.last_fetch ? (o(), S(ye, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, l(p(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        f(X, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: a[0] || (a[0] = (v) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...a[3] || (a[3] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(X, {
          variant: "secondary",
          size: "xs",
          onClick: a[1] || (a[1] = (v) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...a[4] || (a[4] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), S(X, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: a[2] || (a[2] = (v) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...a[5] || (a[5] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Im = /* @__PURE__ */ Y(Sm, [["__scopeId", "data-v-17362e45"]]), Em = ["for"], Mm = {
  key: 0,
  class: "base-form-field-required"
}, zm = { class: "base-form-field-input" }, Lm = {
  key: 1,
  class: "base-form-field-error"
}, Tm = {
  key: 2,
  class: "base-form-field-hint"
}, Rm = /* @__PURE__ */ Q({
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
    const u = t, n = B(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, g) => (o(), s("div", {
      class: se(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(l(t.label) + " ", 1),
        t.required ? (o(), s("span", Mm, "*")) : c("", !0)
      ], 8, Em)) : c("", !0),
      e("div", zm, [
        me(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Lm, l(t.error), 1)) : t.hint ? (o(), s("span", Tm, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ Y(Rm, [["__scopeId", "data-v-9a1cf296"]]), Dm = { class: "remote-form" }, Nm = { class: "form-header" }, Om = { class: "form-body" }, Um = {
  key: 0,
  class: "form-error"
}, Pm = { class: "form-actions" }, Bm = /* @__PURE__ */ Q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), w = $(!1), p = $(null);
    Pt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = B(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function a() {
      if (!(!m.value || w.value)) {
        p.value = null, w.value = !0;
        try {
          r("submit", g.value);
        } catch (v) {
          p.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          w.value = !1;
        }
      }
    }
    return (v, _) => (o(), s("div", Dm, [
      e("div", Nm, [
        f(Ne, null, {
          default: i(() => [
            h(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Om, [
        f(Rt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            f(Ue, {
              modelValue: g.value.name,
              "onUpdate:modelValue": _[0] || (_[0] = (d) => g.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f(Rt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            f(Ue, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": _[1] || (_[1] = (d) => g.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(Rt, { label: "Push URL (optional)" }, {
          default: i(() => [
            f(Ue, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": _[2] || (_[2] = (d) => g.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p.value ? (o(), s("div", Um, l(p.value), 1)) : c("", !0)
      ]),
      e("div", Pm, [
        f(X, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: w.value,
          onClick: a
        }, {
          default: i(() => [
            h(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(X, {
          variant: "ghost",
          size: "md",
          onClick: _[3] || (_[3] = (d) => v.$emit("cancel"))
        }, {
          default: i(() => [..._[4] || (_[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Fm = /* @__PURE__ */ Y(Bm, [["__scopeId", "data-v-56021b18"]]), Vm = { key: 0 }, Am = /* @__PURE__ */ Q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: w,
      getRemoteSyncStatus: p
    } = Ie(), m = $([]), a = $(null), v = $({}), _ = $(!1), d = $(null), I = $(""), k = $(!1), D = $(null), y = $(!1), C = $("add"), O = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = B(() => {
      if (!I.value.trim()) return m.value;
      const q = I.value.toLowerCase();
      return m.value.filter(
        (ee) => ee.name.toLowerCase().includes(q) || ee.fetch_url.toLowerCase().includes(q) || ee.push_url.toLowerCase().includes(q)
      );
    });
    function R(q) {
      var ee;
      return ((ee = a.value) == null ? void 0 : ee.remote) === q;
    }
    async function z() {
      _.value = !0, d.value = null;
      try {
        const q = await u();
        m.value = q.remotes, a.value = q.current_branch_tracking || null, await Promise.all(
          q.remotes.map(async (ee) => {
            const ne = await p(ee.name);
            ne && (v.value[ee.name] = ne);
          })
        );
      } catch (q) {
        d.value = q instanceof Error ? q.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function H() {
      C.value = "add", O.value = { name: "", fetchUrl: "", pushUrl: "" }, y.value = !0;
    }
    function M(q) {
      const ee = m.value.find((ne) => ne.name === q);
      ee && (C.value = "edit", O.value = {
        name: ee.name,
        fetchUrl: ee.fetch_url,
        pushUrl: ee.push_url
      }, y.value = !0);
    }
    async function T(q) {
      try {
        C.value === "add" ? await n(q.name, q.fetchUrl) : await g(q.name, q.fetchUrl, q.pushUrl || void 0), y.value = !1, await z();
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Operation failed";
      }
    }
    function U() {
      y.value = !1, O.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function E(q) {
      D.value = q;
      try {
        await w(q);
        const ee = await p(q);
        ee && (v.value[q] = ee);
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Fetch failed";
      } finally {
        D.value = null;
      }
    }
    async function x(q) {
      if (confirm(`Remove remote "${q}"?`))
        try {
          await r(q), await z();
        } catch (ee) {
          d.value = ee instanceof Error ? ee.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return $e(z), (q, ee) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (ne) => k.value = !0)
          }, {
            actions: i(() => [
              y.value ? c("", !0) : (o(), S(X, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: i(() => [...ee[3] || (ee[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          y.value ? c("", !0) : (o(), S(dt, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (ne) => I.value = ne),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          _.value ? (o(), S(Je, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), S(Qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            y.value ? (o(), S(Fm, {
              key: 0,
              mode: C.value,
              "remote-name": O.value.name,
              "fetch-url": O.value.fetchUrl,
              "push-url": O.value.pushUrl,
              onSubmit: T,
              onCancel: U
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !y.value ? (o(), S(ct, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                a.value ? (o(), s("span", Vm, " • Tracking: " + l(a.value.remote) + "/" + l(a.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            F.value.length && !y.value ? (o(), S(be, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: i(() => [
                (o(!0), s(j, null, oe(F.value, (ne) => {
                  var A;
                  return o(), S(Im, {
                    key: ne.name,
                    remote: ne,
                    "sync-status": v.value[ne.name],
                    "tracking-branch": R(ne.name) ? (A = a.value) == null ? void 0 : A.branch : void 0,
                    "fetching-remote": D.value,
                    onFetch: E,
                    onEdit: M,
                    onRemove: x
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !F.value.length && !y.value ? (o(), S(Pe, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                f(X, {
                  variant: "primary",
                  onClick: H
                }, {
                  default: i(() => [...ee[4] || (ee[4] = [
                    h(" Add Your First Remote ", -1)
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
      f(Ke, {
        show: k.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (ne) => k.value = !1)
      }, {
        content: i(() => [...ee[5] || (ee[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          f(X, {
            variant: "link",
            onClick: V
          }, {
            default: i(() => [...ee[6] || (ee[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Wm = /* @__PURE__ */ Y(Am, [["__scopeId", "data-v-a75719bb"]]), Gm = { class: "setting-info" }, jm = { class: "setting-label" }, Hm = {
  key: 0,
  class: "required-marker"
}, qm = {
  key: 0,
  class: "setting-description"
}, Km = { class: "setting-control" }, Jm = /* @__PURE__ */ Q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: se(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Gm, [
        e("div", jm, [
          h(l(t.label) + " ", 1),
          t.required ? (o(), s("span", Hm, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", qm, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Km, [
        me(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), je = /* @__PURE__ */ Y(Jm, [["__scopeId", "data-v-cb5d236c"]]), Qm = { class: "toggle" }, Ym = ["checked", "disabled"], Xm = /* @__PURE__ */ Q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", Qm, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Ym),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), et = /* @__PURE__ */ Y(Xm, [["__scopeId", "data-v-71c0f550"]]), Zm = { class: "settings-section" }, ev = { class: "path-setting" }, tv = { class: "path-value" }, ov = { class: "path-setting" }, sv = { class: "path-value" }, nv = { class: "settings-section" }, av = { class: "settings-section" }, lv = { class: "settings-section" }, iv = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Ie(), r = $(!1), g = $(null), w = $(null), p = $(null), m = $(null), a = $(""), v = $(""), _ = $(!0), d = $(!0), I = $(!1), k = B(() => m.value ? a.value !== (m.value.civitai_api_key || "") : !1);
    async function D() {
      r.value = !0, g.value = null;
      try {
        p.value = await u(), m.value = { ...p.value }, a.value = p.value.civitai_api_key || "", v.value = p.value.huggingface_token || "", _.value = p.value.auto_sync_models, d.value = p.value.confirm_destructive;
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        I.value = F === "true";
      } catch (F) {
        g.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function y() {
      var F;
      w.value = null;
      try {
        const R = {};
        a.value !== (((F = m.value) == null ? void 0 : F.civitai_api_key) || "") && (R.civitai_api_key = a.value || null), await n(R), await D(), w.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          w.value = null;
        }, 3e3);
      } catch (R) {
        w.value = {
          type: "error",
          message: R instanceof Error ? R.message : "Failed to save settings"
        };
      }
    }
    function C() {
      m.value && (a.value = m.value.civitai_api_key || "", v.value = m.value.huggingface_token || "", _.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, w.value = null);
    }
    function O(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return $e(D), (F, R) => (o(), S(Te, null, {
      header: i(() => [
        f(Re, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            f(X, {
              variant: "primary",
              size: "sm",
              disabled: !k.value,
              onClick: y
            }, {
              default: i(() => [...R[5] || (R[5] = [
                h(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            k.value ? (o(), S(X, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: C
            }, {
              default: i(() => [...R[6] || (R[6] = [
                h(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), S(Je, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), S(Qe, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: D
        }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
          f(be, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var z, H;
              return [
                e("div", Zm, [
                  e("div", ev, [
                    R[7] || (R[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    R[8] || (R[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", tv, l(((z = p.value) == null ? void 0 : z.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", ov, [
                    R[9] || (R[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    R[10] || (R[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", sv, l(((H = p.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(be, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", nv, [
                f(je, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    f(_t, {
                      modelValue: a.value,
                      "onUpdate:modelValue": R[0] || (R[0] = (z) => a.value = z),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(je, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(_t, {
                      modelValue: v.value,
                      "onUpdate:modelValue": R[1] || (R[1] = (z) => v.value = z),
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
          f(be, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", av, [
                f(je, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    f(et, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        R[2] || (R[2] = (z) => I.value = z),
                        O
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f(be, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", lv, [
                f(je, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(et, {
                      modelValue: _.value,
                      "onUpdate:modelValue": R[3] || (R[3] = (z) => _.value = z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(je, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(et, {
                      modelValue: d.value,
                      "onUpdate:modelValue": R[4] || (R[4] = (z) => d.value = z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          w.value ? (o(), S(ct, {
            key: 0,
            variant: (w.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: qe({ color: w.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(w.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), rv = /* @__PURE__ */ Y(iv, [["__scopeId", "data-v-7861bd35"]]), dv = /* @__PURE__ */ Q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Ie(), n = $([]), r = $(!1), g = $(null), w = $(!1), p = $(null), m = B(() => n.value.length === 0 ? [] : n.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function a() {
      r.value = !0, g.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (v) {
        g.value = v instanceof Error ? v.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var v;
          (v = p.value) != null && v.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return $e(a), (v, _) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (d) => w.value = !0)
          }, {
            actions: i(() => [
              f(X, {
                variant: "secondary",
                size: "sm",
                onClick: a,
                disabled: r.value
              }, {
                default: i(() => [
                  h(l(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (o(), S(Je, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), S(Qe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: a
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            n.value.length === 0 ? (o(), S(Pe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (o(!0), s(j, null, oe(m.value, (d, I) => (o(), s("div", {
                key: I,
                class: se(`log-line log-level-${d.level.toLowerCase()}`)
              }, l(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(Ke, {
        show: w.value,
        title: "About Workspace Logs",
        onClose: _[2] || (_[2] = (d) => w.value = !1)
      }, {
        content: i(() => [..._[3] || (_[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: i(() => [
          f(X, {
            variant: "primary",
            onClick: _[1] || (_[1] = (d) => w.value = !1)
          }, {
            default: i(() => [..._[4] || (_[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), cv = /* @__PURE__ */ Y(dv, [["__scopeId", "data-v-39f6a756"]]), uv = /* @__PURE__ */ Q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Ie(), r = $([]), g = $(!1), w = $(null), p = $(!1), m = $("production"), a = $(null), v = B(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function _() {
      g.value = !0, w.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const d = await n();
          m.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        w.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var d;
          (d = a.value) != null && d.parentElement && (a.value.parentElement.scrollTop = a.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return $e(_), (d, I) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (k) => p.value = !0)
          }, {
            actions: i(() => [
              f(X, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: g.value
              }, {
                default: i(() => [
                  h(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          g.value ? (o(), S(Je, {
            key: 0,
            message: "Loading environment logs..."
          })) : w.value ? (o(), S(Qe, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            r.value.length === 0 ? (o(), S(Pe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: a,
              class: "log-output"
            }, [
              (o(!0), s(j, null, oe(v.value, (k, D) => (o(), s("div", {
                key: D,
                class: se(`log-line log-level-${k.level.toLowerCase()}`)
              }, l(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(Ke, {
        show: p.value,
        title: "About Environment Logs",
        onClose: I[2] || (I[2] = (k) => p.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            I[3] || (I[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            I[4] || (I[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          I[5] || (I[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1)),
          I[6] || (I[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          f(X, {
            variant: "primary",
            onClick: I[1] || (I[1] = (k) => p.value = !1)
          }, {
            default: i(() => [...I[7] || (I[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), mv = /* @__PURE__ */ Y(uv, [["__scopeId", "data-v-4f1e6f72"]]), vv = { class: "env-title" }, fv = {
  key: 0,
  class: "current-badge"
}, gv = {
  key: 0,
  class: "branch-info"
}, pv = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), S(xe, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: i(() => [
        h(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", vv, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", fv, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", gv, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: i(() => [
        f(ye, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        f(ye, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        f(ye, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), S(ye, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: i(() => [
        me(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), hv = /* @__PURE__ */ Y(pv, [["__scopeId", "data-v-5238e57c"]]), yv = {
  key: 0,
  class: "create-form"
}, wv = { class: "create-form__header" }, kv = { class: "create-form__body" }, bv = { class: "create-form__actions" }, _v = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, $v = /* @__PURE__ */ Q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironments: r } = Ie(), g = $([]), w = $(!1), p = $(null), m = $(""), a = $(!1), v = $(!1), _ = $(""), d = B(
      () => g.value.find((R) => R.is_current)
    ), I = B(() => {
      if (!m.value.trim()) return g.value;
      const R = m.value.toLowerCase();
      return g.value.filter(
        (z) => {
          var H;
          return z.name.toLowerCase().includes(R) || ((H = z.current_branch) == null ? void 0 : H.toLowerCase().includes(R));
        }
      );
    });
    function k(R) {
      if (!R) return "";
      try {
        const z = new Date(R), M = (/* @__PURE__ */ new Date()).getTime() - z.getTime(), T = Math.floor(M / 6e4), U = Math.floor(M / 36e5), E = Math.floor(M / 864e5);
        return T < 1 ? "just now" : T < 60 ? `${T} ${T === 1 ? "minute" : "minutes"} ago` : U < 24 ? `${U} ${U === 1 ? "hour" : "hours"} ago` : E < 30 ? `${E} ${E === 1 ? "day" : "days"} ago` : z.toLocaleDateString();
      } catch {
        return R;
      }
    }
    function D() {
      const R = _.value.trim();
      R && (n("create", R), _.value = "", v.value = !1);
    }
    function y() {
      _.value = "", v.value = !1;
    }
    function C(R) {
      n("viewDetails", R);
    }
    function O(R) {
      confirm(`Delete environment "${R}"?

This action cannot be undone.`) && n("delete", R);
    }
    async function F() {
      w.value = !0, p.value = null;
      try {
        g.value = await r();
      } catch (R) {
        p.value = R instanceof Error ? R.message : "Failed to load environments";
      } finally {
        w.value = !1;
      }
    }
    return $e(F), (R, z) => {
      const H = po("SectionGroup");
      return o(), s(j, null, [
        f(Te, null, {
          header: i(() => [
            f(Re, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: z[1] || (z[1] = (M) => a.value = !0)
            }, {
              actions: i(() => [
                f(X, {
                  variant: "ghost",
                  size: "sm",
                  onClick: z[0] || (z[0] = (M) => v.value = !0),
                  title: "Create new environment"
                }, {
                  default: i(() => [...z[7] || (z[7] = [
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
                f(X, {
                  variant: "ghost",
                  size: "sm",
                  onClick: F,
                  title: "Refresh environments"
                }, {
                  default: i(() => [...z[8] || (z[8] = [
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
          search: i(() => [
            f(dt, {
              modelValue: m.value,
              "onUpdate:modelValue": z[2] || (z[2] = (M) => m.value = M),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: i(() => [
            w.value ? (o(), S(Je, {
              key: 0,
              message: "Loading environments..."
            })) : p.value ? (o(), S(Qe, {
              key: 1,
              message: p.value,
              retry: !0,
              onRetry: F
            }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
              v.value ? (o(), s("div", yv, [
                e("div", wv, [
                  z[10] || (z[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  f(X, {
                    variant: "ghost",
                    size: "xs",
                    onClick: y
                  }, {
                    default: i(() => [...z[9] || (z[9] = [
                      h(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", kv, [
                  f(_t, {
                    modelValue: _.value,
                    "onUpdate:modelValue": z[3] || (z[3] = (M) => _.value = M),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      He(D, ["enter"]),
                      He(y, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", bv, [
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: D,
                      disabled: !_.value.trim()
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
                        h(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: y
                    }, {
                      default: i(() => [...z[12] || (z[12] = [
                        h(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), S(ct, {
                key: 1,
                variant: "compact"
              }, {
                default: i(() => [
                  h(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  d.value ? (o(), s(j, { key: 0 }, [
                    z[13] || (z[13] = h(" • Current: ", -1)),
                    e("strong", null, l(d.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              I.value.length ? (o(), S(H, {
                key: 2,
                title: "ENVIRONMENTS",
                count: I.value.length
              }, {
                default: i(() => [
                  (o(!0), s(j, null, oe(I.value, (M) => (o(), S(hv, {
                    key: M.name,
                    "environment-name": M.name,
                    "is-current": M.is_current,
                    "current-branch": M.current_branch,
                    "workflow-count": M.workflow_count,
                    "node-count": M.node_count,
                    "model-count": M.model_count,
                    "last-used": k(M.last_used),
                    "show-last-used": !!M.last_used
                  }, {
                    actions: i(() => [
                      M.is_current ? c("", !0) : (o(), S(X, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (T) => R.$emit("switch", M.name)
                      }, {
                        default: i(() => [...z[14] || (z[14] = [
                          h(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      f(X, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (T) => C(M.name),
                        title: "View environment details"
                      }, {
                        default: i(() => [...z[15] || (z[15] = [
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
                      !M.is_current && g.value.length > 1 ? (o(), S(X, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (T) => O(M.name),
                        title: "Delete environment"
                      }, {
                        default: i(() => [
                          (o(), s("svg", _v, [...z[16] || (z[16] = [
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
              I.value.length ? c("", !0) : (o(), S(Pe, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, Bt({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: i(() => [
                    f(X, {
                      variant: "primary",
                      onClick: z[4] || (z[4] = (M) => v.value = !0)
                    }, {
                      default: i(() => [...z[17] || (z[17] = [
                        h(" Create Environment ", -1)
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
        f(Ke, {
          show: a.value,
          title: "About Environments",
          onClose: z[6] || (z[6] = (M) => a.value = !1)
        }, {
          content: i(() => [...z[18] || (z[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              h(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          actions: i(() => [
            f(X, {
              variant: "secondary",
              onClick: z[5] || (z[5] = (M) => a.value = !1)
            }, {
              default: i(() => [...z[19] || (z[19] = [
                h(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Cv = /* @__PURE__ */ Y($v, [["__scopeId", "data-v-97d6527d"]]), xv = { class: "file-path" }, Sv = { class: "file-path-text" }, Iv = ["title"], Ev = /* @__PURE__ */ Q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = $(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, w) => (o(), s("div", xv, [
      w[0] || (w[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Sv, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, Iv)) : c("", !0)
    ]));
  }
}), Mv = /* @__PURE__ */ Y(Ev, [["__scopeId", "data-v-f0982173"]]), zv = { class: "output-path-input" }, Lv = { class: "export-actions" }, Tv = {
  key: 1,
  class: "export-warning"
}, Rv = /* @__PURE__ */ Q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Ie(), n = $(""), r = $(!1), g = $(null), w = $(!1);
    async function p() {
      r.value = !0, g.value = null;
      try {
        const a = await u(n.value || void 0);
        g.value = a;
      } catch (a) {
        g.value = {
          status: "error",
          message: a instanceof Error ? a.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function m() {
      var a;
      if ((a = g.value) != null && a.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (v) {
          console.error("Failed to copy path:", v);
        }
    }
    return (a, v) => (o(), s(j, null, [
      f(Te, null, {
        header: i(() => [
          f(Re, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              f(X, {
                variant: "ghost",
                size: "sm",
                onClick: v[0] || (v[0] = (_) => w.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...v[5] || (v[5] = [
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
        content: i(() => [
          f(be, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              f(xe, { status: "synced" }, {
                icon: i(() => [...v[6] || (v[6] = [
                  h("📦", -1)
                ])]),
                title: i(() => [...v[7] || (v[7] = [
                  h("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...v[8] || (v[8] = [
                  h(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  f(ye, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(ye, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(ye, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(ye, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(be, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              f(xe, { status: "synced" }, {
                icon: i(() => [...v[9] || (v[9] = [
                  h("📁", -1)
                ])]),
                title: i(() => [...v[10] || (v[10] = [
                  h("Output Destination", -1)
                ])]),
                subtitle: i(() => [...v[11] || (v[11] = [
                  h(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", zv, [
                    f(_t, {
                      modelValue: n.value,
                      "onUpdate:modelValue": v[1] || (v[1] = (_) => n.value = _),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(be, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Lv, [
                f(X, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: p
                }, {
                  default: i(() => [
                    v[12] || (v[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    h(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), S(X, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: v[2] || (v[2] = (_) => n.value = "")
                }, {
                  default: i(() => [...v[13] || (v[13] = [
                    h(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), S(be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              f(xe, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Bt({
                icon: i(() => [
                  h(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  h(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  h(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    f(ye, { label: "Saved to:" }, {
                      default: i(() => [
                        f(Mv, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), S(ye, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), s("div", Tv, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...v[15] || (v[15] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(X, {
                      variant: "ghost",
                      size: "sm",
                      onClick: v[3] || (v[3] = (_) => g.value = null)
                    }, {
                      default: i(() => [...v[16] || (v[16] = [
                        h(" Dismiss ", -1)
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
      f(Ke, {
        show: w.value,
        title: "About Environment Export",
        onClose: v[4] || (v[4] = (_) => w.value = !1)
      }, {
        content: i(() => [...v[17] || (v[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            h(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Dv = /* @__PURE__ */ Y(Rv, [["__scopeId", "data-v-1777a9d5"]]), Nv = { class: "file-input-wrapper" }, Ov = ["accept", "multiple", "disabled"], Uv = /* @__PURE__ */ Q({
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
  setup(t, { expose: u, emit: n }) {
    const r = n, g = $(null);
    function w() {
      var m;
      (m = g.value) == null || m.click();
    }
    function p(m) {
      const a = m.target;
      a.files && a.files.length > 0 && (r("change", a.files), a.value = "");
    }
    return u({
      triggerInput: w
    }), (m, a) => (o(), s("div", Nv, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: p
      }, null, 40, Ov),
      f(X, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: w
      }, {
        default: i(() => [
          me(m.$slots, "default", {}, () => [
            a[0] || (a[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            h(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Pv = /* @__PURE__ */ Y(Uv, [["__scopeId", "data-v-cd192091"]]), Bv = {
  key: 0,
  class: "drop-zone-empty"
}, Fv = { class: "drop-zone-text" }, Vv = { class: "drop-zone-primary" }, Av = { class: "drop-zone-secondary" }, Wv = { class: "drop-zone-actions" }, Gv = {
  key: 1,
  class: "drop-zone-file"
}, jv = { class: "file-info" }, Hv = { class: "file-details" }, qv = { class: "file-name" }, Kv = { class: "file-size" }, Jv = /* @__PURE__ */ Q({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1), g = $(null), w = $(0), p = B(() => g.value !== null), m = B(() => {
      var C;
      return ((C = g.value) == null ? void 0 : C.name) || "";
    }), a = B(() => {
      if (!g.value) return "";
      const C = g.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var O;
      w.value++, (O = C.dataTransfer) != null && O.types.includes("Files") && (r.value = !0);
    }
    function _(C) {
      C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function d() {
      w.value--, w.value === 0 && (r.value = !1);
    }
    function I(C) {
      var F;
      w.value = 0, r.value = !1;
      const O = (F = C.dataTransfer) == null ? void 0 : F.files;
      O && O.length > 0 && D(O[0]);
    }
    function k(C) {
      C.length > 0 && D(C[0]);
    }
    function D(C) {
      g.value = C, n("fileSelected", C);
    }
    function y() {
      g.value = null, n("clear");
    }
    return (C, O) => (o(), s("div", {
      class: se(["file-drop-zone", { "drop-active": r.value, "has-file": p.value }]),
      onDragenter: ke(v, ["prevent"]),
      onDragover: ke(_, ["prevent"]),
      onDragleave: ke(d, ["prevent"]),
      onDrop: ke(I, ["prevent"])
    }, [
      p.value ? (o(), s("div", Gv, [
        e("div", jv, [
          O[1] || (O[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Hv, [
            e("div", qv, l(m.value), 1),
            e("div", Kv, l(a.value), 1)
          ])
        ]),
        f(X, {
          variant: "ghost",
          size: "xs",
          onClick: y,
          title: "Remove file"
        }, {
          default: i(() => [...O[2] || (O[2] = [
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
      ])) : (o(), s("div", Bv, [
        O[0] || (O[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Fv, [
          e("p", Vv, l(t.primaryText), 1),
          e("p", Av, l(t.secondaryText), 1)
        ]),
        e("div", Wv, [
          f(Pv, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: k
          }, {
            default: i(() => [
              h(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Qv = /* @__PURE__ */ Y(Jv, [["__scopeId", "data-v-e00abbca"]]), Yv = { class: "import-preview" }, Xv = { class: "preview-header" }, Zv = {
  key: 0,
  class: "source-env"
}, ef = { class: "preview-content" }, tf = { class: "preview-section" }, of = { class: "section-header" }, sf = { class: "section-info" }, nf = { class: "section-count" }, af = {
  key: 0,
  class: "item-list"
}, lf = { class: "item-name" }, rf = {
  key: 0,
  class: "item-more"
}, df = { class: "preview-section" }, cf = { class: "section-header" }, uf = { class: "section-info" }, mf = { class: "section-count" }, vf = {
  key: 0,
  class: "item-list"
}, ff = { class: "item-details" }, gf = { class: "item-name" }, pf = { class: "item-meta" }, hf = {
  key: 0,
  class: "item-more"
}, yf = { class: "preview-section" }, wf = { class: "section-header" }, kf = { class: "section-info" }, bf = { class: "section-count" }, _f = {
  key: 0,
  class: "item-list"
}, $f = { class: "item-name" }, Cf = {
  key: 0,
  class: "item-more"
}, xf = {
  key: 0,
  class: "preview-section"
}, Sf = { class: "git-info" }, If = /* @__PURE__ */ Q({
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
    const u = t, n = B(() => u.workflows.length), r = B(() => u.models.length), g = B(() => u.nodes.length);
    function w(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, m) => (o(), s("div", Yv, [
      e("div", Xv, [
        f(Ne, null, {
          default: i(() => [...m[0] || (m[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Zv, [
          m[1] || (m[1] = h(" From: ", -1)),
          f(Ot, null, {
            default: i(() => [
              h(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", ef, [
        e("div", tf, [
          e("div", of, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", sf, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", nf, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", af, [
            (o(!0), s(j, null, oe(t.workflows.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", lf, l(a), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", rf, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", df, [
          e("div", cf, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", uf, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", mf, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", vf, [
            (o(!0), s(j, null, oe(t.models.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ff, [
                e("span", gf, l(a.filename), 1),
                e("span", pf, l(w(a.size)) + " • " + l(a.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", hf, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", yf, [
          e("div", wf, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", kf, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", bf, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", _f, [
            (o(!0), s(j, null, oe(t.nodes.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", $f, l(a), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", Cf, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", xf, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Sf, [
            t.gitBranch ? (o(), S(ye, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                f(Ot, null, {
                  default: i(() => [
                    h(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), S(ye, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                f(Xt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Ef = /* @__PURE__ */ Y(If, [["__scopeId", "data-v-182fe113"]]), Mf = { class: "import-options" }, zf = { class: "options-container" }, Lf = { class: "option-section" }, Tf = { class: "conflict-options" }, Rf = ["value", "checked", "onChange"], Df = { class: "conflict-content" }, Nf = { class: "conflict-label" }, Of = { class: "conflict-description" }, Uf = { class: "option-section" }, Pf = { class: "component-toggles" }, Bf = /* @__PURE__ */ Q({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: u }) {
    const n = u, r = [
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
    return (g, w) => (o(), s("div", Mf, [
      f(Ne, null, {
        default: i(() => [...w[4] || (w[4] = [
          h("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", zf, [
        e("div", Lf, [
          f(Nt, null, {
            default: i(() => [...w[5] || (w[5] = [
              h("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Tf, [
            (o(), s(j, null, oe(r, (p) => e("label", {
              key: p.value,
              class: se(["conflict-option", { active: t.conflictMode === p.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: p.value,
                checked: t.conflictMode === p.value,
                onChange: (m) => n("update:conflictMode", p.value)
              }, null, 40, Rf),
              e("div", Df, [
                e("span", Nf, l(p.label), 1),
                e("span", Of, l(p.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Uf, [
          f(Nt, null, {
            default: i(() => [...w[6] || (w[6] = [
              h("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Pf, [
            f(je, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": w[0] || (w[0] = (p) => n("update:includeWorkflows", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(je, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": w[1] || (w[1] = (p) => n("update:includeModels", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(je, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": w[2] || (w[2] = (p) => n("update:includeNodes", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(je, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": w[3] || (w[3] = (p) => n("update:includeGitHistory", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Ff = /* @__PURE__ */ Y(Bf, [["__scopeId", "data-v-0ec212b0"]]), Vf = {
  key: 0,
  class: "import-empty"
}, Af = { class: "import-help" }, Wf = {
  key: 1,
  class: "import-configure"
}, Gf = { class: "selected-file-bar" }, jf = { class: "file-bar-content" }, Hf = { class: "file-bar-info" }, qf = { class: "file-bar-name" }, Kf = { class: "file-bar-size" }, Jf = { class: "import-actions" }, Qf = {
  key: 2,
  class: "import-progress"
}, Yf = { class: "progress-content" }, Xf = { class: "progress-info" }, Zf = { class: "progress-title" }, eg = { class: "progress-detail" }, tg = { class: "progress-bar" }, og = { class: "progress-status" }, sg = {
  key: 3,
  class: "import-complete"
}, ng = { class: "complete-message" }, ag = { class: "complete-title" }, lg = { class: "complete-details" }, ig = { class: "complete-actions" }, rg = /* @__PURE__ */ Q({
  __name: "ImportSection",
  setup(t) {
    const u = $(null), n = $(!1), r = $(!1), g = $(!1), w = $(""), p = $({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = $({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), a = $({
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
    }), v = B(() => p.value.includeWorkflows || p.value.includeModels || p.value.includeNodes || p.value.includeGitHistory);
    function _(y) {
      u.value = y;
    }
    function d() {
      u.value = null, r.value = !1, g.value = !1, w.value = "";
    }
    function I() {
      d(), n.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function k() {
      if (u.value) {
        n.value = !0, r.value = !1;
        try {
          const y = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${a.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${a.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${a.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const C of y)
            m.value = C, await new Promise((O) => setTimeout(O, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((C) => setTimeout(C, 500)), g.value = !0, w.value = `Successfully imported ${a.value.workflows.length} workflows, ${a.value.models.length} models, and ${a.value.nodes.length} custom nodes.`;
        } catch (y) {
          g.value = !1, w.value = y instanceof Error ? y.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function D(y) {
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (y, C) => (o(), S(Te, null, {
      header: i(() => [
        f(Re, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (o(), s("div", Vf, [
          f(Qv, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: _
          }),
          e("div", Af, [
            f(Ne, null, {
              default: i(() => [...C[5] || (C[5] = [
                h("How to Import", -1)
              ])]),
              _: 1
            }),
            C[6] || (C[6] = e("div", { class: "help-content" }, [
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
        ])) : u.value && !n.value && !r.value ? (o(), s("div", Wf, [
          e("div", Gf, [
            e("div", jf, [
              C[7] || (C[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Hf, [
                e("div", qf, l(u.value.name), 1),
                e("div", Kf, l(D(u.value.size)), 1)
              ])
            ]),
            f(X, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: i(() => [...C[8] || (C[8] = [
                h(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(Ef, {
            "source-environment": a.value.sourceEnvironment,
            workflows: a.value.workflows,
            models: a.value.models,
            nodes: a.value.nodes,
            "git-branch": a.value.gitBranch,
            "git-commit": a.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Ff, {
            "conflict-mode": p.value.conflictMode,
            "onUpdate:conflictMode": C[0] || (C[0] = (O) => p.value.conflictMode = O),
            "include-workflows": p.value.includeWorkflows,
            "onUpdate:includeWorkflows": C[1] || (C[1] = (O) => p.value.includeWorkflows = O),
            "include-models": p.value.includeModels,
            "onUpdate:includeModels": C[2] || (C[2] = (O) => p.value.includeModels = O),
            "include-nodes": p.value.includeNodes,
            "onUpdate:includeNodes": C[3] || (C[3] = (O) => p.value.includeNodes = O),
            "include-git-history": p.value.includeGitHistory,
            "onUpdate:includeGitHistory": C[4] || (C[4] = (O) => p.value.includeGitHistory = O)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !p.value.includeModels && a.value.models.length > 0 ? (o(), S(nt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${a.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Jf, [
            f(X, {
              variant: "primary",
              size: "md",
              disabled: !v.value,
              onClick: k
            }, {
              default: i(() => [...C[9] || (C[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                h(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f(X, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: i(() => [...C[10] || (C[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Qf, [
          e("div", Yf, [
            C[11] || (C[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Xf, [
              e("div", Zf, l(m.value.message), 1),
              e("div", eg, l(m.value.detail), 1)
            ])
          ]),
          e("div", tg, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", og, l(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", sg, [
          e("div", {
            class: se(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", ng, [
            e("div", ag, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", lg, l(w.value), 1)
          ]),
          e("div", ig, [
            f(X, {
              variant: "primary",
              size: "md",
              onClick: I
            }, {
              default: i(() => [...C[12] || (C[12] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), dg = /* @__PURE__ */ Y(rg, [["__scopeId", "data-v-18e18eb5"]]), cg = { class: "header-info" }, ug = { class: "commit-hash" }, mg = {
  key: 0,
  class: "commit-refs"
}, vg = { class: "commit-message" }, fg = { class: "commit-date" }, gg = {
  key: 0,
  class: "loading"
}, pg = {
  key: 1,
  class: "changes-section"
}, hg = { class: "stats-row" }, yg = { class: "stat" }, wg = { class: "stat insertions" }, kg = { class: "stat deletions" }, bg = {
  key: 0,
  class: "change-group"
}, _g = {
  key: 1,
  class: "change-group"
}, $g = {
  key: 0,
  class: "version"
}, Cg = {
  key: 2,
  class: "change-group"
}, xg = { class: "change-item" }, Sg = /* @__PURE__ */ Q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Ie(), r = $(null), g = $(!0), w = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), p = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return $e(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (m, a) => (o(), S(rt, {
      size: "md",
      "show-close-button": !1,
      onClose: a[3] || (a[3] = (v) => m.$emit("close"))
    }, {
      header: i(() => {
        var v, _, d, I;
        return [
          e("div", cg, [
            a[4] || (a[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", ug, l(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((_ = t.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
            (I = (d = r.value) == null ? void 0 : d.refs) != null && I.length ? (o(), s("span", mg, [
              (o(!0), s(j, null, oe(r.value.refs, (k) => (o(), s("span", {
                key: k,
                class: "ref-badge"
              }, l(k), 1))), 128))
            ])) : c("", !0)
          ]),
          f(re, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (k) => m.$emit("close"))
          }, {
            default: i(() => [...a[5] || (a[5] = [
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
      body: i(() => {
        var v, _;
        return [
          e("div", vg, l(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", fg, l(((_ = r.value) == null ? void 0 : _.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), s("div", gg, "Loading details...")) : r.value ? (o(), s("div", pg, [
            e("div", hg, [
              e("span", yg, l(r.value.stats.files_changed) + " files", 1),
              e("span", wg, "+" + l(r.value.stats.insertions), 1),
              e("span", kg, "-" + l(r.value.stats.deletions), 1)
            ]),
            w.value ? (o(), s("div", bg, [
              f(wt, { variant: "section" }, {
                default: i(() => [...a[6] || (a[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(j, null, oe(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                a[7] || (a[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(j, null, oe(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                a[8] || (a[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(j, null, oe(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                a[9] || (a[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d), 1)
              ]))), 128))
            ])) : c("", !0),
            p.value ? (o(), s("div", _g, [
              f(wt, { variant: "section" }, {
                default: i(() => [...a[10] || (a[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(j, null, oe(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                a[11] || (a[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d.name), 1),
                d.version ? (o(), s("span", $g, "(" + l(d.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(j, null, oe(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                a[12] || (a[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", Cg, [
              f(wt, { variant: "section" }, {
                default: i(() => [...a[13] || (a[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", xg, [
                a[14] || (a[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        f(re, {
          variant: "secondary",
          onClick: a[1] || (a[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...a[15] || (a[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(re, {
          variant: "primary",
          onClick: a[2] || (a[2] = (v) => m.$emit("checkout", t.commit))
        }, {
          default: i(() => [...a[16] || (a[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ig = /* @__PURE__ */ Y(Sg, [["__scopeId", "data-v-d256ff6d"]]), Eg = { class: "dialog-message" }, Mg = {
  key: 0,
  class: "dialog-details"
}, zg = {
  key: 1,
  class: "dialog-warning"
}, Lg = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), S(rt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Eg, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", Mg, [
          (o(!0), s(j, null, oe(t.details, (r, g) => (o(), s("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", zg, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        f(re, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            h(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), S(re, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            h(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        f(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: i(() => [
            h(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tg = /* @__PURE__ */ Y(Lg, [["__scopeId", "data-v-3670b9f5"]]), Rg = { class: "base-textarea-wrapper" }, Dg = ["value", "rows", "placeholder", "disabled", "maxlength"], Ng = {
  key: 0,
  class: "base-textarea-count"
}, Og = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), s("div", Rg, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = He(ke((r) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = He(ke((r) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Dg),
      t.showCharCount && t.maxLength ? (o(), s("div", Ng, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), qt = /* @__PURE__ */ Y(Og, [["__scopeId", "data-v-5516e6fc"]]), Ug = ["checked", "disabled"], Pg = { class: "base-checkbox-box" }, Bg = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Fg = {
  key: 0,
  class: "base-checkbox-label"
}, Vg = /* @__PURE__ */ Q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", {
      class: se(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, Ug),
      e("span", Pg, [
        t.modelValue ? (o(), s("svg", Bg, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (o(), s("span", Fg, [
        me(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ Y(Vg, [["__scopeId", "data-v-bf17c831"]]), Ag = { class: "popover-header" }, Wg = { class: "popover-body" }, Gg = {
  key: 0,
  class: "changes-summary"
}, jg = {
  key: 0,
  class: "change-item"
}, Hg = {
  key: 1,
  class: "change-item"
}, qg = {
  key: 2,
  class: "change-item"
}, Kg = {
  key: 3,
  class: "change-item"
}, Jg = {
  key: 4,
  class: "change-item"
}, Qg = {
  key: 1,
  class: "no-changes"
}, Yg = {
  key: 2,
  class: "loading"
}, Xg = {
  key: 3,
  class: "issues-error"
}, Zg = { class: "error-header" }, ep = { class: "error-title" }, tp = { class: "issues-list" }, op = { class: "message-section" }, sp = { class: "popover-footer" }, np = {
  key: 1,
  class: "commit-popover"
}, ap = { class: "popover-header" }, lp = { class: "popover-body" }, ip = {
  key: 0,
  class: "changes-summary"
}, rp = {
  key: 0,
  class: "change-item"
}, dp = {
  key: 1,
  class: "change-item"
}, cp = {
  key: 2,
  class: "change-item"
}, up = {
  key: 3,
  class: "change-item"
}, mp = {
  key: 4,
  class: "change-item"
}, vp = {
  key: 1,
  class: "no-changes"
}, fp = {
  key: 2,
  class: "loading"
}, gp = {
  key: 3,
  class: "issues-error"
}, pp = { class: "error-header" }, hp = { class: "error-title" }, yp = { class: "issues-list" }, wp = { class: "message-section" }, kp = { class: "popover-footer" }, bp = /* @__PURE__ */ Q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: g } = Ie(), w = $(""), p = $(!1), m = $(!1), a = $(null), v = B(() => {
      if (!n.status) return !1;
      const D = n.status.workflows;
      return D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || n.status.has_changes;
    }), _ = B(() => {
      var D;
      return (D = n.status) != null && D.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (y) => y.has_issues && (y.sync_state === "new" || y.sync_state === "modified")
      ) : [];
    }), d = B(() => _.value.length > 0), I = B(() => d.value && !m.value);
    async function k() {
      var D, y, C;
      if (!(d.value && !m.value) && !(!v.value || !w.value.trim() || p.value)) {
        p.value = !0, a.value = null;
        try {
          const O = await g(w.value.trim(), m.value);
          O.status === "success" ? (a.value = {
            type: "success",
            message: `Committed: ${((D = O.summary) == null ? void 0 : D.new) || 0} new, ${((y = O.summary) == null ? void 0 : y.modified) || 0} modified, ${((C = O.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, w.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : O.status === "no_changes" ? a.value = { type: "error", message: "No changes to commit" } : O.status === "blocked" ? a.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : a.value = { type: "error", message: O.message || "Commit failed" };
        } catch (O) {
          a.value = { type: "error", message: O instanceof Error ? O.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (D, y) => t.asModal ? (o(), S(Se, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: y[5] || (y[5] = (C) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: y[4] || (y[4] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Ag, [
            y[11] || (y[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: y[0] || (y[0] = (C) => r("close"))
            }, [...y[10] || (y[10] = [
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
          e("div", Wg, [
            t.status && v.value ? (o(), s("div", Gg, [
              t.status.workflows.new.length ? (o(), s("div", jg, [
                y[12] || (y[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Hg, [
                y[13] || (y[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", qg, [
                y[14] || (y[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Kg, [
                y[15] || (y[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Jg, [
                y[16] || (y[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", Qg, " No changes to commit ")) : (o(), s("div", Yg, " Loading... ")),
            d.value ? (o(), s("div", Xg, [
              e("div", Zg, [
                y[17] || (y[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", ep, l(_.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", tp, [
                (o(!0), s(j, null, oe(_.value, (C) => (o(), s("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(C.name), 1),
                  h(": " + l(C.issue_summary), 1)
                ]))), 128))
              ]),
              f(Kt, {
                modelValue: m.value,
                "onUpdate:modelValue": y[1] || (y[1] = (C) => m.value = C),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...y[18] || (y[18] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", op, [
              f(qt, {
                modelValue: w.value,
                "onUpdate:modelValue": y[2] || (y[2] = (C) => w.value = C),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || p.value || I.value,
                rows: 3,
                onCtrlEnter: k
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            a.value ? (o(), s("div", {
              key: 4,
              class: se(["result", a.value.type])
            }, l(a.value.message), 3)) : c("", !0)
          ]),
          e("div", sp, [
            f(re, {
              variant: "secondary",
              onClick: y[3] || (y[3] = (C) => r("close"))
            }, {
              default: i(() => [...y[19] || (y[19] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !w.value.trim() || p.value || I.value,
              loading: p.value,
              onClick: k
            }, {
              default: i(() => [
                h(l(p.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", np, [
      e("div", ap, [
        y[21] || (y[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: y[6] || (y[6] = (C) => r("close"))
        }, [...y[20] || (y[20] = [
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
      e("div", lp, [
        t.status && v.value ? (o(), s("div", ip, [
          t.status.workflows.new.length ? (o(), s("div", rp, [
            y[22] || (y[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", dp, [
            y[23] || (y[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", cp, [
            y[24] || (y[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", up, [
            y[25] || (y[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", mp, [
            y[26] || (y[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", vp, " No changes to commit ")) : (o(), s("div", fp, " Loading... ")),
        d.value ? (o(), s("div", gp, [
          e("div", pp, [
            y[27] || (y[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", hp, l(_.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", yp, [
            (o(!0), s(j, null, oe(_.value, (C) => (o(), s("div", {
              key: C.name,
              class: "issue-item"
            }, [
              e("strong", null, l(C.name), 1),
              h(": " + l(C.issue_summary), 1)
            ]))), 128))
          ]),
          f(Kt, {
            modelValue: m.value,
            "onUpdate:modelValue": y[7] || (y[7] = (C) => m.value = C),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...y[28] || (y[28] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", wp, [
          f(qt, {
            modelValue: w.value,
            "onUpdate:modelValue": y[8] || (y[8] = (C) => w.value = C),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || p.value || I.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        a.value ? (o(), s("div", {
          key: 4,
          class: se(["result", a.value.type])
        }, l(a.value.message), 3)) : c("", !0)
      ]),
      e("div", kp, [
        f(re, {
          variant: "secondary",
          onClick: y[9] || (y[9] = (C) => r("close"))
        }, {
          default: i(() => [...y[29] || (y[29] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(re, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !w.value.trim() || p.value || I.value,
          loading: p.value,
          onClick: k
        }, {
          default: i(() => [
            h(l(p.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), so = /* @__PURE__ */ Y(bp, [["__scopeId", "data-v-d92153de"]]), _p = { class: "modal-header" }, $p = { class: "modal-body" }, Cp = { class: "switch-message" }, xp = { class: "switch-details" }, Sp = { class: "modal-actions" }, Ip = /* @__PURE__ */ Q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), S(Se, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", _p, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", $p, [
            e("p", Cp, [
              n[6] || (n[6] = h(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              n[7] || (n[7] = h(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              n[8] || (n[8] = h("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", xp, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Sp, [
            f(X, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(X, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Ep = /* @__PURE__ */ Y(Ip, [["__scopeId", "data-v-e9c5253e"]]), Mp = { class: "progress-bar" }, zp = /* @__PURE__ */ Q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = B(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, g) => (o(), s("div", Mp, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), Lp = /* @__PURE__ */ Y(zp, [["__scopeId", "data-v-1beb0512"]]), Tp = {
  key: 0,
  class: "modal-overlay"
}, Rp = { class: "modal-content" }, Dp = { class: "modal-body" }, Np = { class: "progress-info" }, Op = { class: "progress-percentage" }, Up = { class: "progress-state" }, Pp = { class: "switch-steps" }, Bp = { class: "step-icon" }, Fp = { class: "step-label" }, Vp = /* @__PURE__ */ Q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = B(() => {
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
      return u.message || w[u.state] || u.state;
    }), r = B(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), g = B(() => {
      const w = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], p = w.findIndex((m) => m.state === u.state);
      return w.map((m, a) => {
        let v = "pending", _ = "○";
        return a < p ? (v = "completed", _ = "✓") : a === p && (v = "active", _ = "⟳"), {
          ...m,
          status: v,
          icon: _
        };
      });
    });
    return (w, p) => (o(), S(Se, { to: "body" }, [
      t.show ? (o(), s("div", Tp, [
        e("div", Rp, [
          p[1] || (p[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Dp, [
            f(Lp, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Np, [
              e("div", Op, l(t.progress) + "%", 1),
              e("div", Up, l(n.value), 1)
            ]),
            e("div", Pp, [
              (o(!0), s(j, null, oe(g.value, (m) => (o(), s("div", {
                key: m.state,
                class: se(["switch-step", m.status])
              }, [
                e("span", Bp, l(m.icon), 1),
                e("span", Fp, l(m.label), 1)
              ], 2))), 128))
            ]),
            p[0] || (p[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Ap = /* @__PURE__ */ Y(Vp, [["__scopeId", "data-v-768a5078"]]), Wp = { class: "modal-header" }, Gp = { class: "modal-body" }, jp = {
  key: 0,
  class: "node-section"
}, Hp = { class: "node-list" }, qp = {
  key: 1,
  class: "node-section"
}, Kp = { class: "node-list" }, Jp = { class: "modal-actions" }, Qp = /* @__PURE__ */ Q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), S(Se, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Wp, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Gp, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", jp, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Hp, [
                (o(!0), s(j, null, oe(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", qp, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Kp, [
                (o(!0), s(j, null, oe(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Jp, [
            f(X, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(X, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Yp = /* @__PURE__ */ Y(Qp, [["__scopeId", "data-v-7cad7518"]]), Xp = { class: "comfygit-panel" }, Zp = { class: "panel-header" }, eh = { class: "header-left" }, th = {
  key: 0,
  class: "header-info"
}, oh = { class: "header-actions" }, sh = { class: "env-switcher" }, nh = {
  key: 0,
  class: "header-info"
}, ah = { class: "branch-name" }, lh = { class: "panel-main" }, ih = { class: "sidebar" }, rh = { class: "sidebar-section" }, dh = { class: "sidebar-section" }, ch = { class: "sidebar-section" }, uh = { class: "content-area" }, mh = {
  key: 0,
  class: "error-message"
}, vh = {
  key: 1,
  class: "loading"
}, fh = { class: "dialog-content env-selector-dialog" }, gh = { class: "dialog-header" }, ph = { class: "dialog-body" }, hh = { class: "env-list" }, yh = { class: "env-info" }, wh = { class: "env-name-row" }, kh = { class: "env-indicator" }, bh = { class: "env-name" }, _h = {
  key: 0,
  class: "env-branch"
}, $h = {
  key: 1,
  class: "current-label"
}, Ch = { class: "env-stats" }, xh = ["onClick"], Sh = { class: "toast-container" }, Ih = { class: "toast-icon" }, Eh = { class: "toast-message" }, Mh = /* @__PURE__ */ Q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: g,
      getBranches: w,
      checkout: p,
      createBranch: m,
      switchBranch: a,
      deleteBranch: v,
      getEnvironments: _,
      switchEnvironment: d,
      getSwitchProgress: I,
      syncEnvironmentManually: k
    } = Ie(), D = Zt(), y = $(null), C = $([]), O = $([]), F = $([]), R = B(() => F.value.find((W) => W.is_current)), z = $(!1), H = $(null), M = $(null), T = $(!1), U = $(null), E = $(!1), x = $(!1), V = $(""), q = $({ state: "idle", progress: 0, message: "" });
    let ee = null, ne = null;
    const A = $("status"), Z = $("this-env");
    function L(W, N) {
      A.value = W, Z.value = N;
    }
    function b(W) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      de && L(de.view, de.section);
    }
    function ae() {
      L("branches", "this-env");
    }
    function te() {
      n("close"), setTimeout(() => {
        var N;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const de of W)
          if (((N = de.textContent) == null ? void 0 : N.trim()) === "Manager") {
            de.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ue = $(null), he = $(!1), Be = $(!1), Fe = $([]);
    let tt = 0;
    function ve(W, N = "info", de = 3e3) {
      const we = ++tt;
      return Fe.value.push({ id: we, message: W, type: N }), de > 0 && setTimeout(() => {
        Fe.value = Fe.value.filter((ze) => ze.id !== we);
      }, de), we;
    }
    function Ee(W) {
      Fe.value = Fe.value.filter((N) => N.id !== W);
    }
    function ut(W) {
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
    const Ye = B(() => {
      if (!y.value) return "neutral";
      const W = y.value.workflows, N = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || y.value.has_changes;
      return y.value.comparison.is_synced ? N ? "warning" : "success" : "error";
    });
    B(() => y.value ? Ye.value === "success" ? "All synced" : Ye.value === "warning" ? "Uncommitted changes" : Ye.value === "error" ? "Not synced" : "" : "");
    async function Me() {
      z.value = !0, H.value = null;
      try {
        const [W, N, de, we] = await Promise.all([
          r(!0),
          g(),
          w(),
          _()
        ]);
        y.value = W, C.value = N.commits, O.value = de.branches, F.value = we, n("statusUpdate", W), U.value && await U.value.loadWorkflows(!0);
      } catch (W) {
        H.value = W instanceof Error ? W.message : "Failed to load status", y.value = null, C.value = [], O.value = [];
      } finally {
        z.value = !1;
      }
    }
    function mt(W) {
      M.value = W;
    }
    async function ot(W) {
      var de;
      M.value = null;
      const N = y.value && (y.value.workflows.new.length > 0 || y.value.workflows.modified.length > 0 || y.value.workflows.deleted.length > 0 || y.value.has_changes);
      ue.value = {
        title: N ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: N ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((de = W.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: N ? jt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: N ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: N,
        onConfirm: async () => {
          var Le;
          ue.value = null, _e();
          const we = ve(`Checking out ${W.short_hash || ((Le = W.hash) == null ? void 0 : Le.slice(0, 7))}...`, "info", 0), ze = await p(W.hash, N);
          Ee(we), ze.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(ze.message || "Checkout failed", "error");
        }
      };
    }
    async function vt(W) {
      const N = y.value && (y.value.workflows.new.length > 0 || y.value.workflows.modified.length > 0 || y.value.workflows.deleted.length > 0 || y.value.has_changes);
      ue.value = {
        title: N ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: N ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: N ? jt() : void 0,
        warning: N ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: N ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ue.value = null, _e();
          const de = ve(`Switching to ${W}...`, "info", 0), we = await a(W, N);
          Ee(de), we.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(we.message || "Branch switch failed", "error");
        }
      };
    }
    async function K(W) {
      const N = ve(`Creating branch ${W}...`, "info", 0), de = await m(W);
      Ee(N), de.status === "success" ? (ve(`Branch "${W}" created`, "success"), await Me()) : ve(de.message || "Failed to create branch", "error");
    }
    async function ie(W, N = !1) {
      const de = async (we) => {
        var Le;
        const ze = ve(`Deleting branch ${W}...`, "info", 0);
        try {
          const le = await v(W, we);
          Ee(ze), le.status === "success" ? (ve(`Branch "${W}" deleted`, "success"), await Me()) : (Le = le.message) != null && Le.includes("not fully merged") ? ue.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ue.value = null, await de(!0);
            }
          } : ve(le.message || "Failed to delete branch", "error");
        } catch (le) {
          Ee(ze);
          const Lt = le instanceof Error ? le.message : "Failed to delete branch";
          Lt.includes("not fully merged") ? ue.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ue.value = null, await de(!0);
            }
          } : ve(Lt, "error");
        }
      };
      ue.value = {
        title: "Delete Branch",
        message: `Delete branch "${W}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ue.value = null, await de(N);
        }
      };
    }
    async function pe(W) {
      M.value = null;
      const N = prompt("Enter branch name:");
      if (N) {
        const de = ve(`Creating branch ${N}...`, "info", 0), we = await m(N, W.hash);
        Ee(de), we.status === "success" ? (ve(`Branch "${N}" created from ${W.short_hash}`, "success"), await Me()) : ve(we.message || "Failed to create branch", "error");
      }
    }
    function _e() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function st() {
      ue.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          ue.value = null, _e(), ve("Restarting environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Mt() {
      ue.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          ue.value = null, ve("Stopping environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Ct(W) {
      T.value = !1, V.value = W, E.value = !0;
    }
    async function zt() {
      E.value = !1, x.value = !0, _e(), q.value = {
        progress: 10,
        state: G(10),
        message: P(10)
      };
      try {
        await d(V.value), J(), Ce();
      } catch (W) {
        ce(), x.value = !1, ve(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), q.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function G(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function P(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[G(W)] || "";
    }
    function J() {
      if (ne) return;
      let W = 10;
      const N = 60, de = 5e3, we = 100, ze = (N - W) / (de / we);
      ne = window.setInterval(() => {
        if (W += ze, W >= N && (W = N, ce()), q.value.progress < N) {
          const Le = Math.floor(W);
          q.value = {
            progress: Le,
            state: G(Le),
            message: P(Le)
          };
        }
      }, we);
    }
    function ce() {
      ne && (clearInterval(ne), ne = null);
    }
    function Ce() {
      ee || (ee = window.setInterval(async () => {
        try {
          let W = await D.getStatus();
          if ((!W || W.state === "idle") && (W = await I()), !W)
            return;
          const N = W.progress || 0;
          N >= 60 && ce();
          const de = Math.max(N, q.value.progress), we = W.state && W.state !== "idle" && W.state !== "unknown", ze = we ? W.state : G(de), Le = we && W.message || P(de);
          q.value = {
            state: ze,
            progress: de,
            message: Le
          }, W.state === "complete" ? (ce(), We(), x.value = !1, ve(`✓ Switched to ${V.value}`, "success"), await Me(), V.value = "") : W.state === "rolled_back" ? (ce(), We(), x.value = !1, ve("Switch failed, restored previous environment", "warning"), V.value = "") : W.state === "critical_failure" && (ce(), We(), x.value = !1, ve(`Critical error during switch: ${W.message}`, "error"), V.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function We() {
      ce(), ee && (clearInterval(ee), ee = null);
    }
    function Xe() {
      E.value = !1, V.value = "";
    }
    async function xt() {
      he.value = !1, await Me(), ve("✓ Changes committed", "success");
    }
    async function St() {
      Be.value = !1;
      const W = ve("Syncing environment...", "info", 0);
      try {
        const N = await k("skip", !0);
        if (Ee(W), N.status === "success") {
          const de = [];
          N.nodes_installed.length && de.push(`${N.nodes_installed.length} installed`), N.nodes_removed.length && de.push(`${N.nodes_removed.length} removed`);
          const we = de.length ? `: ${de.join(", ")}` : "";
          ve(`✓ Environment synced${we}`, "success"), await Me();
        } else {
          const de = N.errors.length ? N.errors.join("; ") : N.message;
          ve(`Sync failed: ${de}`, "error");
        }
      } catch (N) {
        Ee(W), ve(`Sync error: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
      }
    }
    async function It(W) {
      const N = ve(`Creating environment "${W}"...`, "info", 0);
      Ee(N), ve("Environment creation not yet implemented", "warning");
    }
    async function ro(W) {
      const N = ve(`Deleting environment "${W}"...`, "info", 0);
      Ee(N), ve("Environment deletion not yet implemented", "warning");
    }
    function co(W) {
      ve(`Viewing details for "${W}"`, "info"), L("models-env", "this-env");
    }
    function jt() {
      if (!y.value) return [];
      const W = [], N = y.value.workflows;
      return N.new.length && W.push(`${N.new.length} new workflow(s)`), N.modified.length && W.push(`${N.modified.length} modified workflow(s)`), N.deleted.length && W.push(`${N.deleted.length} deleted workflow(s)`), W;
    }
    return $e(Me), (W, N) => {
      var de, we, ze, Le;
      return o(), s("div", Xp, [
        e("div", Zp, [
          e("div", eh, [
            N[27] || (N[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            y.value ? (o(), s("div", th)) : c("", !0)
          ]),
          e("div", oh, [
            e("button", {
              class: se(["icon-btn", { spinning: z.value }]),
              onClick: Me,
              title: "Refresh"
            }, [...N[28] || (N[28] = [
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
              onClick: N[0] || (N[0] = (le) => n("close")),
              title: "Close"
            }, [...N[29] || (N[29] = [
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
        e("div", sh, [
          e("div", { class: "env-switcher-header" }, [
            N[30] || (N[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: st
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Mt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: N[1] || (N[1] = (le) => L("environments", "all-envs"))
          }, [
            y.value ? (o(), s("div", nh, [
              e("span", null, l(((de = R.value) == null ? void 0 : de.name) || ((we = y.value) == null ? void 0 : we.environment) || "Loading..."), 1),
              e("span", ah, "(" + l(y.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            N[31] || (N[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", lh, [
          e("div", ih, [
            e("div", rh, [
              N[32] || (N[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "status" && Z.value === "this-env" }]),
                onClick: N[2] || (N[2] = (le) => L("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "workflows" }]),
                onClick: N[3] || (N[3] = (le) => L("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "models-env" }]),
                onClick: N[4] || (N[4] = (le) => L("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "branches" }]),
                onClick: N[5] || (N[5] = (le) => L("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "history" }]),
                onClick: N[6] || (N[6] = (le) => L("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "nodes" }]),
                onClick: N[7] || (N[7] = (le) => L("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "debug-env" }]),
                onClick: N[8] || (N[8] = (le) => L("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            N[35] || (N[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", dh, [
              N[33] || (N[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "environments" }]),
                onClick: N[9] || (N[9] = (le) => L("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "model-index" }]),
                onClick: N[10] || (N[10] = (le) => L("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "settings" }]),
                onClick: N[11] || (N[11] = (le) => L("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "debug-workspace" }]),
                onClick: N[12] || (N[12] = (le) => L("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            N[36] || (N[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ch, [
              N[34] || (N[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "export" }]),
                onClick: N[13] || (N[13] = (le) => L("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "import" }]),
                onClick: N[14] || (N[14] = (le) => L("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "remotes" }]),
                onClick: N[15] || (N[15] = (le) => L("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", uh, [
            H.value ? (o(), s("div", mh, l(H.value), 1)) : !y.value && A.value === "status" ? (o(), s("div", vh, " Loading status... ")) : (o(), s(j, { key: 2 }, [
              A.value === "status" ? (o(), S(An, {
                key: 0,
                status: y.value,
                onSwitchBranch: ae,
                onCommitChanges: N[16] || (N[16] = (le) => he.value = !0),
                onSyncEnvironment: N[17] || (N[17] = (le) => Be.value = !0),
                onViewWorkflows: N[18] || (N[18] = (le) => L("workflows", "this-env")),
                onViewHistory: N[19] || (N[19] = (le) => L("history", "this-env")),
                onViewDebug: N[20] || (N[20] = (le) => L("debug-env", "this-env"))
              }, null, 8, ["status"])) : A.value === "workflows" ? (o(), S(Wc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: U,
                onRefresh: Me
              }, null, 512)) : A.value === "models-env" ? (o(), S(xu, {
                key: 2,
                onNavigate: b
              })) : A.value === "branches" ? (o(), S(sa, {
                key: 3,
                branches: O.value,
                current: ((ze = y.value) == null ? void 0 : ze.branch) || null,
                onSwitch: vt,
                onCreate: K,
                onDelete: ie
              }, null, 8, ["branches", "current"])) : A.value === "history" ? (o(), S(fa, {
                key: 4,
                commits: C.value,
                onSelect: mt,
                onCheckout: ot
              }, null, 8, ["commits"])) : A.value === "nodes" ? (o(), S(vm, {
                key: 5,
                onOpenNodeManager: te
              })) : A.value === "debug-env" ? (o(), S(mv, { key: 6 })) : A.value === "environments" ? (o(), S(Cv, {
                key: 7,
                onSwitch: Ct,
                onCreate: It,
                onDelete: ro,
                onViewDetails: co
              })) : A.value === "model-index" ? (o(), S(ju, {
                key: 8,
                onRefresh: Me
              })) : A.value === "settings" ? (o(), S(rv, { key: 9 })) : A.value === "debug-workspace" ? (o(), S(cv, { key: 10 })) : A.value === "export" ? (o(), S(Dv, { key: 11 })) : A.value === "import" ? (o(), S(dg, { key: 12 })) : A.value === "remotes" ? (o(), S(Wm, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        M.value ? (o(), S(Ig, {
          key: 0,
          commit: M.value,
          onClose: N[21] || (N[21] = (le) => M.value = null),
          onCheckout: ot,
          onCreateBranch: pe
        }, null, 8, ["commit"])) : c("", !0),
        ue.value ? (o(), S(Tg, {
          key: 1,
          title: ue.value.title,
          message: ue.value.message,
          details: ue.value.details,
          warning: ue.value.warning,
          confirmLabel: ue.value.confirmLabel,
          cancelLabel: ue.value.cancelLabel,
          secondaryLabel: ue.value.secondaryLabel,
          secondaryAction: ue.value.secondaryAction,
          destructive: ue.value.destructive,
          onConfirm: ue.value.onConfirm,
          onCancel: N[22] || (N[22] = (le) => ue.value = null),
          onSecondary: ue.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        f(Ep, {
          show: E.value,
          "from-environment": ((Le = R.value) == null ? void 0 : Le.name) || "unknown",
          "to-environment": V.value,
          onConfirm: zt,
          onClose: Xe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        he.value && y.value ? (o(), S(so, {
          key: 2,
          status: y.value,
          "as-modal": !0,
          onClose: N[23] || (N[23] = (le) => he.value = !1),
          onCommitted: xt
        }, null, 8, ["status"])) : c("", !0),
        Be.value && y.value ? (o(), S(Yp, {
          key: 3,
          show: Be.value,
          "mismatch-details": {
            missing_nodes: y.value.comparison.missing_nodes,
            extra_nodes: y.value.comparison.extra_nodes
          },
          onConfirm: St,
          onClose: N[24] || (N[24] = (le) => Be.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        f(Ap, {
          show: x.value,
          state: q.value.state,
          progress: q.value.progress,
          message: q.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        T.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: N[26] || (N[26] = ke((le) => T.value = !1, ["self"]))
        }, [
          e("div", fh, [
            e("div", gh, [
              N[38] || (N[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: N[25] || (N[25] = (le) => T.value = !1)
              }, [...N[37] || (N[37] = [
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
            e("div", ph, [
              N[39] || (N[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", hh, [
                (o(!0), s(j, null, oe(F.value, (le) => (o(), s("div", {
                  key: le.name,
                  class: se(["env-item", { current: le.is_current }])
                }, [
                  e("div", yh, [
                    e("div", wh, [
                      e("span", kh, l(le.is_current ? "●" : "○"), 1),
                      e("span", bh, l(le.name), 1),
                      le.current_branch ? (o(), s("span", _h, "(" + l(le.current_branch) + ")", 1)) : c("", !0),
                      le.is_current ? (o(), s("span", $h, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Ch, l(le.workflow_count) + " workflows • " + l(le.node_count) + " nodes ", 1)
                  ]),
                  le.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Lt) => Ct(le.name)
                  }, " SWITCH ", 8, xh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", Sh, [
          f(ho, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(j, null, oe(Fe.value, (le) => (o(), s("div", {
                key: le.id,
                class: se(["toast", le.type])
              }, [
                e("span", Ih, l(ut(le.type)), 1),
                e("span", Eh, l(le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), zh = /* @__PURE__ */ Y(Mh, [["__scopeId", "data-v-56dfbaad"]]), Lh = { class: "item-header" }, Th = { class: "item-info" }, Rh = { class: "filename" }, Dh = { class: "metadata" }, Nh = { class: "size" }, Oh = {
  key: 0,
  class: "type"
}, Uh = { class: "item-actions" }, Ph = {
  key: 0,
  class: "progress-section"
}, Bh = { class: "progress-bar" }, Fh = { class: "progress-stats" }, Vh = { class: "downloaded" }, Ah = { class: "speed" }, Wh = {
  key: 0,
  class: "eta"
}, Gh = {
  key: 1,
  class: "status-msg paused"
}, jh = {
  key: 2,
  class: "status-msg queued"
}, Hh = {
  key: 3,
  class: "status-msg completed"
}, qh = {
  key: 4,
  class: "status-msg failed"
}, Kh = {
  key: 0,
  class: "retries"
}, Jh = /* @__PURE__ */ Q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(p) {
      if (p === 0) return "?";
      const m = p / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(p / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(p) {
      return p === 0 ? "-" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function w(p) {
      if (p < 60) return `${Math.round(p)}s`;
      const m = Math.floor(p / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (p, m) => (o(), s("div", {
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Lh, [
        e("div", Th, [
          e("div", Rh, l(t.item.filename), 1),
          e("div", Dh, [
            e("span", Nh, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Oh, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Uh, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (a) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (a) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (a) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (a) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Ph, [
        e("div", Bh, [
          e("div", {
            class: "progress-fill",
            style: qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Fh, [
          e("span", Vh, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", Ah, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Wh, l(w(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Gh, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", jh, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Hh, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", qh, [
        h(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Kh, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ Y(Jh, [["__scopeId", "data-v-2110df65"]]), Qh = { class: "queue-title" }, Yh = { class: "count" }, Xh = { class: "queue-actions" }, Zh = { class: "action-label" }, e1 = {
  key: 0,
  class: "overall-progress"
}, t1 = { class: "progress-bar" }, o1 = {
  key: 0,
  class: "current-mini"
}, s1 = { class: "filename" }, n1 = { class: "speed" }, a1 = {
  key: 1,
  class: "queue-content"
}, l1 = {
  key: 0,
  class: "section"
}, i1 = {
  key: 1,
  class: "section"
}, r1 = { class: "section-header" }, d1 = { class: "section-label paused" }, c1 = { class: "items-list" }, u1 = {
  key: 2,
  class: "section"
}, m1 = { class: "section-header" }, v1 = { class: "section-label" }, f1 = { class: "items-list" }, g1 = {
  key: 3,
  class: "section"
}, p1 = { class: "section-header" }, h1 = { class: "section-label" }, y1 = { class: "items-list" }, w1 = {
  key: 4,
  class: "section"
}, k1 = { class: "section-header" }, b1 = { class: "section-label failed" }, _1 = { class: "items-list" }, $1 = /* @__PURE__ */ Q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: g,
      failedItems: w,
      pausedItems: p,
      hasItems: m,
      activeCount: a,
      cancelDownload: v,
      retryDownload: _,
      resumeDownload: d,
      resumeAllPaused: I,
      removeItem: k,
      clearCompleted: D
    } = $t(), y = $(!1);
    let C = null;
    Pt(
      () => ({
        active: a.value,
        failed: w.value.length,
        paused: p.value.length,
        completed: g.value.length
      }),
      (z, H) => {
        C && (clearTimeout(C), C = null);
        const M = z.active === 0 && z.failed === 0 && z.paused === 0 && z.completed > 0, T = H && (H.active > 0 || H.paused > 0);
        M && T && (C = setTimeout(() => {
          D(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const O = B(() => {
      var M;
      if (u.items.length === 0) return 0;
      const z = g.value.length, H = ((M = n.value) == null ? void 0 : M.progress) || 0;
      return Math.round((z + H / 100) / u.items.length * 100);
    });
    function F(z) {
      v(z);
    }
    function R(z) {
      return z === 0 ? "" : `${(z / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (z, H) => (o(), S(Se, { to: "body" }, [
      fe(m) ? (o(), s("div", {
        key: 0,
        class: se(["model-download-queue", { minimized: !y.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (M) => y.value = !y.value)
        }, [
          e("div", Qh, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Yh, "(" + l(fe(a)) + "/" + l(fe(u).items.length) + ")", 1)
          ]),
          e("div", Xh, [
            e("span", Zh, l(y.value ? "minimize" : "expand"), 1)
          ])
        ]),
        y.value ? (o(), s("div", a1, [
          fe(n) ? (o(), s("div", l1, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(pt, {
              item: fe(n),
              onCancel: H[1] || (H[1] = (M) => F(fe(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          fe(p).length > 0 ? (o(), s("div", i1, [
            e("div", r1, [
              e("span", d1, "Paused (" + l(fe(p).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...M) => fe(I) && fe(I)(...M))
              }, "Resume All")
            ]),
            e("div", c1, [
              (o(!0), s(j, null, oe(fe(p), (M) => (o(), S(pt, {
                key: M.id,
                item: M,
                onResume: (T) => fe(d)(M.id),
                onRemove: (T) => fe(k)(M.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          fe(r).length > 0 ? (o(), s("div", u1, [
            e("div", m1, [
              e("span", v1, "Queued (" + l(fe(r).length) + ")", 1)
            ]),
            e("div", f1, [
              (o(!0), s(j, null, oe(fe(r), (M) => (o(), S(pt, {
                key: M.id,
                item: M,
                onCancel: (T) => F(M.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          fe(g).length > 0 ? (o(), s("div", g1, [
            e("div", p1, [
              e("span", h1, "Completed (" + l(fe(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...M) => fe(D) && fe(D)(...M))
              }, "Clear")
            ]),
            e("div", y1, [
              (o(!0), s(j, null, oe(fe(g).slice(0, 3), (M) => (o(), S(pt, {
                key: M.id,
                item: M,
                onRemove: (T) => fe(k)(M.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          fe(w).length > 0 ? (o(), s("div", w1, [
            e("div", k1, [
              e("span", b1, "Failed (" + l(fe(w).length) + ")", 1)
            ]),
            e("div", _1, [
              (o(!0), s(j, null, oe(fe(w), (M) => (o(), S(pt, {
                key: M.id,
                item: M,
                onRetry: (T) => fe(_)(M.id),
                onRemove: (T) => fe(k)(M.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", e1, [
          e("div", t1, [
            e("div", {
              class: "progress-fill",
              style: qe({ width: `${O.value}%` })
            }, null, 4)
          ]),
          fe(n) ? (o(), s("div", o1, [
            e("span", s1, l(fe(n).filename), 1),
            e("span", n1, l(R(fe(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), C1 = /* @__PURE__ */ Y($1, [["__scopeId", "data-v-60751cfa"]]), x1 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', S1 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', I1 = {
  comfy: x1,
  phosphor: S1
}, Wt = "comfy", no = "comfygit-theme";
let Ze = null, ao = Wt;
function E1() {
  try {
    const t = localStorage.getItem(no);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Wt;
}
function lo(t = Wt) {
  Ze && Ze.remove(), Ze = document.createElement("style"), Ze.id = "comfygit-theme-styles", Ze.setAttribute("data-theme", t), Ze.textContent = I1[t], document.head.appendChild(Ze), document.body.setAttribute("data-comfygit-theme", t), ao = t;
  try {
    localStorage.setItem(no, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function M1() {
  return ao;
}
function z1(t) {
  lo(t);
}
const Gt = document.createElement("link");
Gt.rel = "stylesheet";
Gt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Gt);
const L1 = E1();
lo(L1);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), z1(t);
  },
  getTheme: () => {
    const t = M1();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Oe = null, De = null, kt = null, ht = null, Jt = null;
const it = $(null);
async function Et() {
  var t;
  if (!((t = lt) != null && t.api)) return null;
  try {
    const u = await lt.api.fetchApi("/v2/comfygit/status");
    u.ok && (it.value = await u.json());
  } catch {
  }
}
function T1() {
  if (!it.value) return !1;
  const t = it.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || it.value.has_changes;
}
function R1() {
  Oe && Oe.remove(), Oe = document.createElement("div"), Oe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Oe.appendChild(t), Oe.addEventListener("click", (r) => {
    r.target === Oe && Dt();
  });
  const u = (r) => {
    r.key === "Escape" && (Dt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), Ft({
    render: () => Vt(zh, {
      onClose: Dt,
      onStatusUpdate: (r) => {
        it.value = r, bt();
      }
    })
  }).mount(t), document.body.appendChild(Oe);
}
function Dt() {
  Oe && (Oe.remove(), Oe = null);
}
function D1(t) {
  yt(), De = document.createElement("div"), De.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  De.style.position = "fixed", De.style.top = `${u.bottom + 8}px`, De.style.right = `${window.innerWidth - u.right}px`, De.style.zIndex = "10001";
  const n = (g) => {
    De && !De.contains(g.target) && g.target !== t && (yt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (g) => {
    g.key === "Escape" && (yt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), kt = Ft({
    render: () => Vt(so, {
      status: it.value,
      onClose: yt,
      onCommitted: () => {
        yt(), Et().then(bt);
      }
    })
  }), kt.mount(De), document.body.appendChild(De);
}
function yt() {
  kt && (kt.unmount(), kt = null), De && (De.remove(), De = null);
}
function N1() {
  ht || (ht = document.createElement("div"), ht.className = "comfygit-download-queue-root", Jt = Ft({
    render: () => Vt(C1)
  }), Jt.mount(ht), document.body.appendChild(ht), console.log("[ComfyGit] Model download queue mounted"));
}
let Ge = null;
function bt() {
  if (!Ge) return;
  const t = Ge.querySelector(".commit-indicator");
  t && (t.style.display = T1() ? "block" : "none");
}
const io = document.createElement("style");
io.textContent = `
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
document.head.appendChild(io);
lt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, w;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = R1, Ge = document.createElement("button"), Ge.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ge.innerHTML = 'Commit <span class="commit-indicator"></span>', Ge.title = "Quick Commit", Ge.onclick = () => D1(Ge), t.appendChild(u), t.appendChild(Ge), (w = (g = lt.menu) == null ? void 0 : g.settingsGroup) != null && w.element && (lt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), N1();
    const { loadPendingDownloads: n } = $t();
    n(), await Et(), bt(), setInterval(async () => {
      await Et(), bt();
    }, 3e4);
    const r = lt.api;
    if (r) {
      let p = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, m = function() {
        const v = document.createElement("div");
        v.style.cssText = `
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", v.appendChild(_);
        const d = document.createElement("button");
        d.textContent = "Refresh", d.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => p(), v.appendChild(d);
        const I = document.createElement("button");
        I.textContent = "×", I.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => v.remove(), v.appendChild(I), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: _, workflow_name: d } = v.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${d}`), await Et(), bt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let a = !1;
      r.addEventListener("status", async (v) => {
        const _ = v.detail != null;
        _ && !a && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), p()) : m()), a = _;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
