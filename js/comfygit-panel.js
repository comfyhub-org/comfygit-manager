import { app as rt } from "../../scripts/app.js";
import { defineComponent as Q, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as ce, createBlock as S, resolveDynamicComponent as Ut, normalizeClass as se, withCtx as i, toDisplayString as l, createVNode as f, createTextVNode as p, computed as B, Fragment as G, renderList as oe, normalizeStyle as He, ref as $, onMounted as _e, watch as Pt, Teleport as Se, withModifiers as ke, Transition as ro, createSlots as Bt, withKeys as je, onUnmounted as co, reactive as Qt, readonly as uo, unref as fe, withDirectives as mo, vModelText as vo, resolveComponent as fo, TransitionGroup as go, createApp as Ft, h as Vt } from "vue";
const ho = { class: "panel-layout" }, po = {
  key: 0,
  class: "panel-layout-header"
}, yo = {
  key: 1,
  class: "panel-layout-search"
}, wo = { class: "panel-layout-content" }, ko = {
  key: 2,
  class: "panel-layout-footer"
}, bo = /* @__PURE__ */ Q({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (o(), s("div", ho, [
      u.$slots.header ? (o(), s("div", po, [
        ce(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (o(), s("div", yo, [
        ce(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", wo, [
        ce(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (o(), s("div", ko, [
        ce(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), X = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, g] of u)
    n[r] = g;
  return n;
}, Te = /* @__PURE__ */ X(bo, [["__scopeId", "data-v-21565df9"]]), _o = {
  key: 0,
  class: "panel-title-prefix"
}, $o = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Co = /* @__PURE__ */ Q({
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
        t.showPrefix ? (o(), s("span", _o, l(t.prefix), 1)) : (o(), s("span", $o)),
        ce(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xo = /* @__PURE__ */ X(Co, [["__scopeId", "data-v-c3875efc"]]), So = ["title"], Io = ["width", "height"], Eo = /* @__PURE__ */ Q({
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
      ])], 8, Io))
    ], 8, So));
  }
}), Xt = /* @__PURE__ */ X(Eo, [["__scopeId", "data-v-6fc7f16d"]]), Mo = { class: "header-left" }, zo = {
  key: 0,
  class: "header-actions"
}, Lo = /* @__PURE__ */ Q({
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
      e("div", Mo, [
        f(xo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            p(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), S(Xt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", zo, [
        ce(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), De = /* @__PURE__ */ X(Lo, [["__scopeId", "data-v-55a62cd6"]]), To = {
  key: 0,
  class: "section-title-count"
}, Do = {
  key: 1,
  class: "section-title-icon"
}, No = /* @__PURE__ */ Q({
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
        ce(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", To, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", Do, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Re = /* @__PURE__ */ X(No, [["__scopeId", "data-v-559361eb"]]), Ro = { class: "status-grid" }, Oo = { class: "status-grid__columns" }, Uo = { class: "status-grid__column" }, Po = { class: "status-grid__title" }, Bo = { class: "status-grid__column status-grid__column--right" }, Fo = { class: "status-grid__title" }, Vo = {
  key: 0,
  class: "status-grid__footer"
}, Ao = /* @__PURE__ */ Q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", Ro, [
      e("div", Oo, [
        e("div", Uo, [
          e("h4", Po, l(t.leftTitle), 1),
          ce(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Bo, [
          e("h4", Fo, l(t.rightTitle), 1),
          ce(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (o(), s("div", Vo, [
        ce(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Wo = /* @__PURE__ */ X(Ao, [["__scopeId", "data-v-73b7ba3f"]]), Go = {
  key: 0,
  class: "status-item__icon"
}, jo = {
  key: 1,
  class: "status-item__count"
}, Ho = { class: "status-item__label" }, qo = /* @__PURE__ */ Q({
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
      t.icon ? (o(), s("span", Go, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", jo, l(t.count), 1)) : c("", !0),
      e("span", Ho, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ X(qo, [["__scopeId", "data-v-6f929183"]]), Ko = { class: "issue-card__header" }, Jo = { class: "issue-card__icon" }, Qo = { class: "issue-card__title" }, Xo = {
  key: 0,
  class: "issue-card__content"
}, Yo = {
  key: 0,
  class: "issue-card__description"
}, Zo = {
  key: 1,
  class: "issue-card__items"
}, es = {
  key: 2,
  class: "issue-card__actions"
}, ts = /* @__PURE__ */ Q({
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
      e("div", Ko, [
        e("span", Jo, l(t.icon), 1),
        e("h4", Qo, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", Xo, [
        t.description ? (o(), s("p", Yo, l(t.description), 1)) : c("", !0),
        ce(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), s("div", Zo, [
        (o(!0), s(G, null, oe(t.items, (w, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(w), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), s("div", es, [
        ce(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ X(ts, [["__scopeId", "data-v-df6aa348"]]), os = ["type", "disabled"], ss = {
  key: 0,
  class: "spinner"
}, ns = /* @__PURE__ */ Q({
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
      t.loading ? (o(), s("span", ss)) : c("", !0),
      t.loading ? c("", !0) : ce(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, os));
  }
}), Y = /* @__PURE__ */ X(ns, [["__scopeId", "data-v-772abe47"]]), as = { class: "empty-state" }, ls = {
  key: 0,
  class: "empty-icon"
}, is = { class: "empty-message" }, rs = /* @__PURE__ */ Q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (o(), s("div", as, [
      t.icon ? (o(), s("div", ls, l(t.icon), 1)) : c("", !0),
      e("p", is, l(t.message), 1),
      t.actionLabel ? (o(), S(Y, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: i(() => [
          p(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Pe = /* @__PURE__ */ X(rs, [["__scopeId", "data-v-4466284f"]]), ds = /* @__PURE__ */ Q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: se(["detail-label"]),
      style: He({ minWidth: t.minWidth })
    }, [
      ce(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Rt = /* @__PURE__ */ X(ds, [["__scopeId", "data-v-75e9eeb8"]]), cs = /* @__PURE__ */ Q({
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
      ce(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ X(cs, [["__scopeId", "data-v-2f186e4c"]]), us = { class: "detail-row" }, ms = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), s("div", us, [
      f(Rt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          p(l(t.label), 1)
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
          p(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ce(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ye = /* @__PURE__ */ X(ms, [["__scopeId", "data-v-ef15664a"]]), vs = { class: "modal-header" }, fs = { class: "modal-body" }, gs = { class: "status-section" }, hs = {
  key: 0,
  class: "status-section"
}, ps = { class: "section-header-row" }, ys = {
  key: 0,
  class: "workflow-group"
}, ws = { class: "workflow-group-header" }, ks = { class: "workflow-group-title" }, bs = { class: "workflow-list" }, _s = { class: "workflow-name" }, $s = { class: "workflow-issue" }, Cs = {
  key: 1,
  class: "workflow-group"
}, xs = { class: "workflow-group-header" }, Ss = { class: "workflow-group-title" }, Is = { class: "workflow-list" }, Es = { class: "workflow-name" }, Ms = { class: "workflow-issue" }, zs = {
  key: 2,
  class: "workflow-group"
}, Ls = { class: "workflow-group-header" }, Ts = { class: "workflow-group-title" }, Ds = { class: "workflow-list" }, Ns = { class: "workflow-name" }, Rs = {
  key: 3,
  class: "workflow-group"
}, Os = { class: "workflow-group-header" }, Us = { class: "workflow-group-title" }, Ps = { class: "workflow-list" }, Bs = { class: "workflow-name" }, Fs = {
  key: 4,
  class: "workflow-group"
}, Vs = { class: "workflow-group-header" }, As = { class: "workflow-group-title" }, Ws = { class: "workflow-list" }, Gs = { class: "workflow-name" }, js = {
  key: 5,
  class: "workflow-group"
}, Hs = { class: "workflow-group-title" }, qs = { class: "expand-icon" }, Ks = {
  key: 0,
  class: "workflow-list"
}, Js = { class: "workflow-name" }, Qs = {
  key: 1,
  class: "status-section"
}, Xs = {
  key: 0,
  class: "change-group"
}, Ys = { class: "change-group-header" }, Zs = { class: "change-group-title" }, en = { class: "change-list" }, tn = { class: "node-name" }, on = {
  key: 0,
  class: "dev-badge"
}, sn = {
  key: 1,
  class: "change-group"
}, nn = { class: "change-group-header" }, an = { class: "change-group-title" }, ln = { class: "change-list" }, rn = { class: "node-name" }, dn = {
  key: 0,
  class: "dev-badge"
}, cn = {
  key: 2,
  class: "change-group"
}, un = { class: "change-list" }, mn = { class: "change-item" }, vn = { class: "node-name" }, fn = {
  key: 3,
  class: "change-group"
}, gn = {
  key: 2,
  class: "status-section"
}, hn = { class: "section-header-row" }, pn = {
  key: 0,
  class: "drift-item"
}, yn = { class: "drift-list" }, wn = {
  key: 0,
  class: "drift-list-more"
}, kn = {
  key: 1,
  class: "drift-item"
}, bn = { class: "drift-list" }, _n = {
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
}, Mn = {
  key: 4,
  class: "status-section"
}, zn = { class: "warning-box" }, Ln = {
  key: 5,
  class: "empty-state-inline"
}, Tn = { class: "modal-actions" }, Dn = /* @__PURE__ */ Q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = $(!1);
    _e(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), Pt(() => u.show, (I, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", I);
    }, { immediate: !0 });
    const r = B(() => {
      var I, k, N;
      return ((N = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : N.filter(
        (y) => y.status === "broken" && y.sync_state === "synced"
      )) || [];
    }), g = B(() => {
      var I, k, N;
      return ((N = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : N.filter(
        (y) => y.status === "broken" && y.sync_state !== "synced"
      )) || [];
    }), w = B(() => {
      var I, k, N;
      return ((N = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.synced) == null ? void 0 : N.filter((y) => {
        var O, F, D;
        const C = (D = (F = (O = u.status) == null ? void 0 : O.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : D.find((z) => z.name === y);
        return !C || C.status !== "broken";
      })) || [];
    }), h = B(() => {
      var I, k, N, y, C;
      return (I = u.status) != null && I.workflows ? (((k = u.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((N = u.status.workflows.modified) == null ? void 0 : N.length) ?? 0) > 0 || (((y = u.status.workflows.deleted) == null ? void 0 : y.length) ?? 0) > 0 || (((C = u.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var k, N, y;
      const I = (k = u.status) == null ? void 0 : k.git_changes;
      return I ? (((N = I.nodes_added) == null ? void 0 : N.length) ?? 0) > 0 || (((y = I.nodes_removed) == null ? void 0 : y.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), a = B(() => {
      var I, k, N, y, C, O;
      return !h.value && !m.value && ((k = (I = u.status) == null ? void 0 : I.comparison) == null ? void 0 : k.is_synced) && (((N = u.status) == null ? void 0 : N.missing_models_count) ?? 0) === 0 && (((O = (C = (y = u.status) == null ? void 0 : y.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : O.length) ?? 0) === 0;
    }), v = B(() => {
      var k, N;
      const I = (N = (k = u.status) == null ? void 0 : k.git_changes) == null ? void 0 : N.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function _(I) {
      return typeof I == "string" ? I : I.name;
    }
    function d(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, k) => {
      var N, y, C, O, F, D, z, H, M, T, P, E, x, V, q, ee, ne, A, Z, L, b, ae;
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
            e("div", vs, [
              k[7] || (k[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (te) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", fs, [
              e("div", gs, [
                f(Re, { level: "4" }, {
                  default: i(() => [...k[8] || (k[8] = [
                    p("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(ye, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", hs, [
                e("div", ps, [
                  f(Re, { level: "4" }, {
                    default: i(() => [...k[9] || (k[9] = [
                      p("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (te) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", ys, [
                  e("div", ws, [
                    k[10] || (k[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ks, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", bs, [
                    (o(!0), s(G, null, oe(r.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", _s, l(te.name), 1),
                      e("span", $s, l(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), s("div", Cs, [
                  e("div", xs, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ss, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", Is, [
                    (o(!0), s(G, null, oe(g.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Es, l(te.name), 1),
                      e("span", Ms, l(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (y = (N = t.status.workflows) == null ? void 0 : N.new) != null && y.length ? (o(), s("div", zs, [
                  e("div", Ls, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ts, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ds, [
                    (o(!0), s(G, null, oe(t.status.workflows.new, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Ns, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (O = (C = t.status.workflows) == null ? void 0 : C.modified) != null && O.length ? (o(), s("div", Rs, [
                  e("div", Os, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Us, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ps, [
                    (o(!0), s(G, null, oe(t.status.workflows.modified, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Bs, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && D.length ? (o(), s("div", Fs, [
                  e("div", Vs, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", As, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ws, [
                    (o(!0), s(G, null, oe(t.status.workflows.deleted, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Gs, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                w.value.length ? (o(), s("div", js, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (te) => n.value = !n.value)
                  }, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Hs, "SYNCED (" + l(w.value.length) + ")", 1),
                    e("span", qs, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", Ks, [
                    (o(!0), s(G, null, oe(w.value, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Js, l(te), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), s("div", Qs, [
                f(Re, { level: "4" }, {
                  default: i(() => [...k[16] || (k[16] = [
                    p("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (z = t.status.git_changes) == null ? void 0 : z.nodes_added) != null && H.length ? (o(), s("div", Xs, [
                  e("div", Ys, [
                    k[17] || (k[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Zs, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", en, [
                    (o(!0), s(G, null, oe(t.status.git_changes.nodes_added, (te) => (o(), s("div", {
                      key: _(te),
                      class: "change-item"
                    }, [
                      e("span", tn, l(_(te)), 1),
                      d(te) ? (o(), s("span", on, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (M = t.status.git_changes) == null ? void 0 : M.nodes_removed) != null && T.length ? (o(), s("div", sn, [
                  e("div", nn, [
                    k[18] || (k[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", an, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", ln, [
                    (o(!0), s(G, null, oe(t.status.git_changes.nodes_removed, (te) => (o(), s("div", {
                      key: _(te),
                      class: "change-item"
                    }, [
                      e("span", rn, l(_(te)), 1),
                      d(te) ? (o(), s("span", dn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (P = t.status.git_changes) != null && P.workflow_changes ? (o(), s("div", cn, [
                  k[19] || (k[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", un, [
                    e("div", mn, [
                      e("span", vn, l(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (E = t.status.git_changes) != null && E.has_other_changes ? (o(), s("div", fn, [...k[20] || (k[20] = [
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
              (x = t.status.comparison) != null && x.is_synced ? c("", !0) : (o(), s("div", gn, [
                e("div", hn, [
                  f(Re, { level: "4" }, {
                    default: i(() => [...k[21] || (k[21] = [
                      p("ENVIRONMENT DRIFT", -1)
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
                (q = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && q.length ? (o(), s("div", pn, [
                  f(ye, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", yn, [
                    (o(!0), s(G, null, oe(t.status.comparison.missing_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + l(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", wn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ne = (ee = t.status.comparison) == null ? void 0 : ee.extra_nodes) != null && ne.length ? (o(), s("div", kn, [
                  f(ye, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", bn, [
                    (o(!0), s(G, null, oe(t.status.comparison.extra_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + l(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", _n, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Z = (A = t.status.comparison) == null ? void 0 : A.version_mismatches) != null && Z.length ? (o(), s("div", $n, [
                  f(ye, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (L = t.status.comparison) != null && L.packages_in_sync ? c("", !0) : (o(), s("div", Cn, [
                  f(ye, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (b = t.status.comparison) == null ? void 0 : b.disabled_nodes) != null && ae.length ? (o(), s("div", xn, [
                f(Re, { level: "4" }, {
                  default: i(() => [...k[23] || (k[23] = [
                    p("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Sn, [
                  k[24] || (k[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", In, [
                  (o(!0), s(G, null, oe(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (o(), s("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + l(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", En, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Mn, [
                f(Re, { level: "4" }, {
                  default: i(() => [...k[25] || (k[25] = [
                    p("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", zn, [
                  k[26] || (k[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[27] || (k[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              a.value ? (o(), s("div", Ln, [...k[28] || (k[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Tn, [
              f(Y, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (te) => I.$emit("close"))
              }, {
                default: i(() => [...k[29] || (k[29] = [
                  p(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Nn = /* @__PURE__ */ X(Dn, [["__scopeId", "data-v-c67eed17"]]), Rn = { class: "health-section-header" }, On = { class: "suggestions-content" }, Un = { class: "suggestions-text" }, Pn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Bn = /* @__PURE__ */ Q({
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
    function h() {
      r.value = !1, a("view-workflows");
    }
    function m() {
      r.value = !1, a("view-nodes");
    }
    const a = u, v = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), _ = B(() => n.status.has_changes), d = B(() => {
      const M = n.status.git_changes;
      return M.nodes_added.length > 0 || M.nodes_removed.length > 0 || M.workflow_changes;
    }), I = B(() => n.status.has_changes || v.value), k = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), N = B(() => n.status.git_changes.has_other_changes), y = B(() => {
      var M;
      return ((M = n.status.workflows.analyzed) == null ? void 0 : M.filter((T) => T.status === "broken")) || [];
    }), C = B(() => {
      var M;
      return ((M = n.status.workflows.analyzed) == null ? void 0 : M.filter(
        (T) => T.has_path_sync_issues && !T.has_issues
      )) || [];
    }), O = B(() => y.value.length > 0), F = B(() => O.value || C.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), D = B(() => {
      const M = [];
      return n.status.workflows.new.length > 0 && M.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && M.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && M.push(`${n.status.workflows.deleted.length} deleted`), M.length > 0 ? `${M.join(", ")} workflow${M.length === 1 && !M[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), z = B(() => {
      var P, E;
      const M = [], T = n.status.comparison;
      return (P = T.missing_nodes) != null && P.length && M.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (E = T.extra_nodes) != null && E.length && M.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), M.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${M.join(" and ")}.`;
    }), H = B(() => {
      var P, E;
      const M = [], T = n.status.comparison;
      return (P = T.extra_nodes) != null && P.length && (T.extra_nodes.slice(0, 3).forEach((x) => {
        M.push(`Untracked: ${x}`);
      }), T.extra_nodes.length > 3 && M.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (E = T.missing_nodes) != null && E.length && (T.missing_nodes.slice(0, 3).forEach((x) => {
        M.push(`Missing: ${x}`);
      }), T.missing_nodes.length > 3 && M.push(`...and ${T.missing_nodes.length - 3} more missing`)), M;
    });
    return (M, T) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[1] || (T[1] = (P) => g.value = !0),
            onMouseleave: T[2] || (T[2] = (P) => g.value = !1)
          }, [
            e("div", Rn, [
              f(Re, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...T[9] || (T[9] = [
                  p(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(ro, { name: "fade" }, {
                default: i(() => [
                  g.value ? (o(), S(Y, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: w
                  }, {
                    default: i(() => [...T[10] || (T[10] = [
                      p(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            f(Wo, {
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
                N.value ? (o(), S(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                _.value && !d.value && !N.value ? (o(), S(Ve, {
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
                  e("div", On, [
                    e("span", Un, l(D.value), 1),
                    f(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[0] || (T[0] = (P) => M.$emit("commit-changes"))
                    }, {
                      default: i(() => [...T[11] || (T[11] = [
                        p(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (o(), S(lt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              f(Y, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (P) => M.$emit("create-branch"))
              }, {
                default: i(() => [...T[13] || (T[13] = [
                  p(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          F.value ? (o(), s("div", Pn, [
            f(Re, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...T[14] || (T[14] = [
                p(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            y.value.length > 0 ? (o(), S(lt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${y.value.length} workflow${y.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: y.value.map((P) => `${P.name} — ${P.issue_summary}`)
            }, {
              actions: i(() => [
                f(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (P) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[15] || (T[15] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            C.value.length > 0 ? (o(), S(lt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${C.value.length} workflow${C.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: C.value.map((P) => `${P.name} — ${P.models_needing_path_sync_count} model path${P.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                f(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (P) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[16] || (T[16] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !O.value ? (o(), S(lt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                f(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (P) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[17] || (T[17] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), S(lt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: z.value,
              items: H.value
            }, {
              actions: i(() => [
                f(Y, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w
                }, {
                  default: i(() => [...T[18] || (T[18] = [
                    p(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (P) => M.$emit("view-nodes"))
                }, {
                  default: i(() => [...T[19] || (T[19] = [
                    p(" See Nodes ", -1)
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
      f(Nn, {
        show: r.value,
        status: t.status,
        onClose: T[8] || (T[8] = (P) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Fn = /* @__PURE__ */ X(Bn, [["__scopeId", "data-v-698b3f43"]]), Vn = ["type", "value", "placeholder", "disabled"], An = /* @__PURE__ */ Q({
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
    function h(m) {
      const a = m.target.value;
      g("update:modelValue", a);
    }
    return _e(() => {
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
      onInput: h,
      onKeyup: [
        a[0] || (a[0] = je((v) => m.$emit("enter"), ["enter"])),
        a[1] || (a[1] = je((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: a[2] || (a[2] = (v) => m.$emit("focus")),
      onBlur: a[3] || (a[3] = (v) => m.$emit("blur"))
    }, null, 42, Vn));
  }
}), Ct = /* @__PURE__ */ X(An, [["__scopeId", "data-v-0380d08f"]]), Wn = { class: "branch-create-form" }, Gn = { class: "form-actions" }, jn = /* @__PURE__ */ Q({
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
    function h() {
      r.value = "", n("cancel");
    }
    return (m, a) => (o(), s("div", Wn, [
      f(Ct, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: w,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Gn, [
        f(Y, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: w
        }, {
          default: i(() => [...a[1] || (a[1] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(Y, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: i(() => [...a[2] || (a[2] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Hn = /* @__PURE__ */ X(jn, [["__scopeId", "data-v-7c500394"]]), qn = { class: "branch-list-item__indicator" }, Kn = { class: "branch-list-item__name" }, Jn = {
  key: 0,
  class: "branch-list-item__actions"
}, Qn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Xn = /* @__PURE__ */ Q({
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
      e("span", qn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Kn, l(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", Jn, [
        ce(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", Qn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Yn = /* @__PURE__ */ X(Xn, [["__scopeId", "data-v-c6581a24"]]), Zn = {
  key: 2,
  class: "branch-list"
}, ea = /* @__PURE__ */ Q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1);
    function g(h) {
      n("create", h), w();
    }
    function w() {
      r.value = !1;
    }
    return (h, m) => (o(), S(Te, null, {
      header: i(() => [
        f(De, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? c("", !0) : (o(), S(Y, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (a) => r.value = !0)
            }, {
              default: i(() => [...m[1] || (m[1] = [
                p(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), S(Hn, {
          key: 0,
          onCreate: g,
          onCancel: w
        })) : c("", !0),
        t.branches.length === 0 ? (o(), S(Pe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", Zn, [
          (o(!0), s(G, null, oe(t.branches, (a) => (o(), S(Yn, {
            key: a.name,
            "branch-name": a.name,
            "is-current": a.is_current
          }, {
            actions: i(() => [
              a.is_current ? c("", !0) : (o(), S(Y, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => h.$emit("delete", a.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  p(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              a.is_current ? c("", !0) : (o(), S(Y, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => h.$emit("switch", a.name)
              }, {
                default: i(() => [...m[3] || (m[3] = [
                  p(" Switch ", -1)
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
}), ta = /* @__PURE__ */ X(ea, [["__scopeId", "data-v-86784ddd"]]), oa = { class: "commit-list" }, sa = /* @__PURE__ */ Q({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", oa, [
      ce(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), na = /* @__PURE__ */ X(sa, [["__scopeId", "data-v-8c5ee761"]]), aa = { class: "commit-hash" }, la = /* @__PURE__ */ Q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = B(() => u.hash.slice(0, u.length));
    return (r, g) => (o(), s("span", aa, l(n.value), 1));
  }
}), Yt = /* @__PURE__ */ X(la, [["__scopeId", "data-v-7c333cc6"]]), ia = { class: "commit-message" }, ra = { class: "commit-date" }, da = /* @__PURE__ */ Q({
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
    return (w, h) => (o(), s("div", {
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(Yt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ia, l(t.message), 1),
      e("span", ra, l(t.relativeDate), 1),
      w.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = ke(() => {
        }, ["stop"]))
      }, [
        ce(w.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ca = /* @__PURE__ */ X(da, [["__scopeId", "data-v-dd7c621b"]]), ua = /* @__PURE__ */ Q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), S(Te, null, {
      header: i(() => [
        f(De, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), S(Pe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), S(na, { key: 1 }, {
          default: i(() => [
            (o(!0), s(G, null, oe(t.commits, (r) => (o(), S(ca, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => u.$emit("select", r)
            }, {
              actions: i(() => [
                f(Y, {
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
}), ma = /* @__PURE__ */ X(ua, [["__scopeId", "data-v-981c3c64"]]), O1 = [
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
], U1 = {
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
}, va = [
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
], P1 = [
  ...va,
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
function Ie() {
  const t = $(!1), u = $(null);
  async function n(K, ie) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const he = await window.app.api.fetchApi(K, ie);
    if (!he.ok) {
      const Xe = await he.json().catch(() => ({}));
      throw new Error(Xe.error || Xe.message || `Request failed: ${he.status}`);
    }
    return he.json();
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
  async function h(K) {
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
  async function N(K) {
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
  async function C(K, ie, he) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, pytorch_backend: ie, clone_from: he })
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
      const ie = await r(K), he = [];
      return ie.workflows.new.forEach(($e) => {
        he.push({ name: $e, status: "new", missing_nodes: 0, missing_models: 0, path: $e });
      }), ie.workflows.modified.forEach(($e) => {
        he.push({ name: $e, status: "modified", missing_nodes: 0, missing_models: 0, path: $e });
      }), ie.workflows.synced.forEach(($e) => {
        he.push({ name: $e, status: "synced", missing_nodes: 0, missing_models: 0, path: $e });
      }), he;
    }
  }
  async function D(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function z(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function H(K, ie, he) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ie, install_models: he })
    });
  }
  async function M(K, ie, he) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ie, importance: he })
    });
  }
  async function T() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function P() {
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
      const he = new URLSearchParams();
      return K && he.append("level", K), ie && he.append("lines", ie.toString()), n(`/v2/comfygit/debug/logs?${he}`);
    } catch {
      return [];
    }
  }
  async function me(K, ie) {
    try {
      const he = new URLSearchParams();
      return K && he.append("level", K), ie && he.append("lines", ie.toString()), n(`/v2/workspace/debug/logs?${he}`);
    } catch {
      return [];
    }
  }
  async function pe() {
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
  async function ot(K) {
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
  async function vt(K, ie) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: ie })
    });
  }
  async function Qe(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function Me(K, ie, he) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ie, push_url: he })
    });
  }
  async function ft(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST"
    });
  }
  async function st(K) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function gt(K = "skip", ie = !0) {
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
    exportEnv: h,
    // Git Operations
    getBranches: m,
    getCommitDetail: a,
    checkout: v,
    createBranch: _,
    switchBranch: d,
    deleteBranch: I,
    // Environment Management
    getEnvironments: k,
    switchEnvironment: N,
    getSwitchProgress: y,
    createEnvironment: C,
    deleteEnvironment: O,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: D,
    resolveWorkflow: z,
    installWorkflowDeps: H,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: T,
    getWorkspaceModels: P,
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
    getWorkspaceLogs: me,
    // Node Management
    getNodes: pe,
    trackNodeAsDev: Be,
    installNode: Fe,
    updateNode: ot,
    uninstallNode: ve,
    // Git Remotes
    getRemotes: Ee,
    addRemote: vt,
    removeRemote: Qe,
    updateRemoteUrl: Me,
    fetchRemote: ft,
    getRemoteSyncStatus: st,
    // Environment Sync
    syncEnvironmentManually: gt
  };
}
async function pt(t, u = {}, n = 5e3) {
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
      const h = await pt(
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
  async function n() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const h = await pt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const h = await pt(
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
  async function g() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await pt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function w() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await pt(
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
const fa = { class: "base-modal-header" }, ga = {
  key: 0,
  class: "base-modal-title"
}, ha = { class: "base-modal-body" }, pa = {
  key: 0,
  class: "base-modal-loading"
}, ya = {
  key: 1,
  class: "base-modal-error"
}, wa = {
  key: 0,
  class: "base-modal-footer"
}, ka = /* @__PURE__ */ Q({
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
    function w(h) {
      h.key === "Escape" && r("close");
    }
    return _e(() => {
      document.addEventListener("keydown", w), document.body.style.overflow = "hidden";
    }), co(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = "";
    }), (h, m) => (o(), S(Se, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", fa, [
            ce(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", ga, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (a) => h.$emit("close"))
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
          e("div", ha, [
            t.loading ? (o(), s("div", pa, "Loading...")) : t.error ? (o(), s("div", ya, l(t.error), 1)) : ce(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", wa, [
            ce(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), ct = /* @__PURE__ */ X(ka, [["__scopeId", "data-v-2125a0e6"]]), ba = ["type", "disabled"], _a = {
  key: 0,
  class: "spinner"
}, $a = /* @__PURE__ */ Q({
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
      t.loading ? (o(), s("span", _a)) : c("", !0),
      ce(u.$slots, "default", {}, void 0, !0)
    ], 10, ba));
  }
}), re = /* @__PURE__ */ X($a, [["__scopeId", "data-v-f3452606"]]), Ca = {
  key: 0,
  class: "base-title-count"
}, xa = /* @__PURE__ */ Q({
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
        ce(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Ca, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bt = /* @__PURE__ */ X(xa, [["__scopeId", "data-v-5a01561d"]]), Sa = ["value", "disabled"], Ia = {
  key: 0,
  value: "",
  disabled: ""
}, Ea = ["value"], Ma = {
  key: 0,
  class: "base-select-error"
}, za = /* @__PURE__ */ Q({
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
        t.placeholder ? (o(), s("option", Ia, l(t.placeholder), 1)) : c("", !0),
        (o(!0), s(G, null, oe(t.options, (w) => (o(), s("option", {
          key: u(w),
          value: u(w)
        }, l(n(w)), 9, Ea))), 128))
      ], 42, Sa),
      t.error ? (o(), s("span", Ma, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), La = /* @__PURE__ */ X(za, [["__scopeId", "data-v-7436d745"]]), Ta = { class: "popover-header" }, Da = { class: "popover-title" }, Na = { class: "popover-content" }, Ra = {
  key: 0,
  class: "popover-actions"
}, Oa = /* @__PURE__ */ Q({
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
          style: He({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Ta, [
            e("h4", Da, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Na, [
            ce(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", Ra, [
            ce(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ X(Oa, [["__scopeId", "data-v-42815ace"]]), Ua = { class: "detail-section" }, Pa = {
  key: 0,
  class: "empty-message"
}, Ba = { class: "model-header" }, Fa = { class: "model-name" }, Va = { class: "model-details" }, Aa = { class: "model-row" }, Wa = { class: "model-row" }, Ga = { class: "label" }, ja = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ha = { class: "node-list" }, qa = ["onClick"], Ka = {
  key: 1,
  class: "model-row"
}, Ja = { class: "value" }, Qa = {
  key: 0,
  class: "model-actions"
}, Xa = { class: "detail-section" }, Ya = {
  key: 0,
  class: "empty-message"
}, Za = { class: "node-name" }, el = {
  key: 0,
  class: "node-version"
}, tl = /* @__PURE__ */ Q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: g, setModelImportance: w, installWorkflowDeps: h } = Ie(), m = $(null), a = $(!1), v = $(null), _ = $(!1), d = $({}), I = $({}), k = $(!1), N = $(/* @__PURE__ */ new Set()), y = [
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
      return N.value.has(x) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function D(E) {
      return N.value.has(E);
    }
    function z(E) {
      N.value.has(E) ? N.value.delete(E) : N.value.add(E), N.value = new Set(N.value);
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
    async function P(E) {
      I.value[E] = !0, v.value = null;
      try {
        await h(n.workflowName, !0, !1), await H();
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to install node";
      } finally {
        I.value[E] = !1;
      }
    }
    return _e(H), (E, x) => (o(), s(G, null, [
      f(ct, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: a.value,
        error: v.value || void 0,
        onClose: x[5] || (x[5] = (V) => r("close"))
      }, {
        body: i(() => [
          m.value ? (o(), s(G, { key: 0 }, [
            e("section", Ua, [
              f(bt, { variant: "section" }, {
                default: i(() => [
                  p("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", Pa, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(G, null, oe(m.value.models, (V) => (o(), s("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", Ba, [
                  x[7] || (x[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Fa, l(V.filename), 1)
                ]),
                e("div", Va, [
                  e("div", Aa, [
                    x[8] || (x[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: se(["value", C(V.status)])
                    }, l(O(V.status)), 3)
                  ]),
                  e("div", Wa, [
                    e("span", Ga, [
                      x[9] || (x[9] = p(" Importance: ", -1)),
                      f(Xt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: x[0] || (x[0] = (q) => k.value = !0)
                      })
                    ]),
                    f(La, {
                      "model-value": d.value[V.filename] || V.importance,
                      options: y,
                      "onUpdate:modelValue": (q) => M(V.filename, q)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), s("div", ja, [
                    x[10] || (x[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ha, [
                      (o(!0), s(G, null, oe(F(V), (q, ee) => (o(), s("div", {
                        key: `${q.node_id}-${ee}`,
                        class: "node-reference"
                      }, l(q.node_type) + " (Node #" + l(q.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (q) => z(V.hash || V.filename)
                      }, l(D(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, qa)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  V.size_mb ? (o(), s("div", Ka, [
                    x[11] || (x[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Ja, l(V.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                V.status !== "available" ? (o(), s("div", Qa, [
                  V.status === "downloadable" ? (o(), S(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: x[1] || (x[1] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...x[12] || (x[12] = [
                      p(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), S(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[2] || (x[2] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...x[13] || (x[13] = [
                      p(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), S(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[3] || (x[3] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...x[14] || (x[14] = [
                      p(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Xa, [
              f(bt, { variant: "section" }, {
                default: i(() => [
                  p("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", Ya, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(G, null, oe(m.value.nodes, (V) => (o(), s("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, l(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", Za, l(V.name), 1),
                V.version ? (o(), s("span", el, "v" + l(V.version), 1)) : c("", !0),
                V.status === "missing" ? (o(), S(re, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: I.value[V.name],
                  onClick: (q) => P(V.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...x[15] || (x[15] = [
                    p(" Install ", -1)
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
              p(" Close ", -1)
            ])]),
            _: 1
          }),
          _.value ? (o(), S(re, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: i(() => [...x[17] || (x[17] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(qe, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[6] || (x[6] = (V) => k.value = !1)
      }, {
        content: i(() => [...x[18] || (x[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              p(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              p(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              p(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ol = /* @__PURE__ */ X(tl, [["__scopeId", "data-v-0b14d32e"]]), ge = Qt({
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
async function it() {
  if (ge.status === "downloading") return;
  const t = ge.items.find((u) => u.status === "queued");
  if (!t) {
    ge.status = "idle";
    return;
  }
  ge.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await sl(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    ge.status = "idle", it();
  }
}
async function sl(t) {
  return new Promise((u, n) => {
    Ae && (Ae.close(), Ae = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ae = g;
    let w = Date.now(), h = 0, m = !1;
    g.onmessage = (a) => {
      try {
        const v = JSON.parse(a.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const _ = Date.now(), d = (_ - w) / 1e3;
            if (d > 0.5) {
              const I = t.downloaded - h;
              if (t.speed = I / d, w = _, h = t.downloaded, t.speed > 0 && t.size > 0) {
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
async function nl() {
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
function xt() {
  function t(C) {
    for (const O of C) {
      if (ge.items.some(
        (z) => z.url === O.url && z.targetPath === O.targetPath && ["queued", "downloading", "paused", "completed"].includes(z.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${O.filename}`);
        continue;
      }
      const D = {
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
      ge.items.push(D);
    }
    ge.status === "idle" && it();
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
        Ae && (Ae.close(), Ae = null), O.status = "failed", O.error = "Cancelled by user", ge.status = "idle", it();
      } else if (O.status === "queued") {
        const F = ge.items.findIndex((D) => D.id === C);
        F >= 0 && ge.items.splice(F, 1);
      }
    }
  }
  function n(C) {
    const O = Tt(C);
    !O || O.status !== "failed" || (O.status = "queued", O.error = void 0, O.progress = 0, O.downloaded = 0, ge.status === "idle" && it());
  }
  function r(C) {
    const O = Tt(C);
    !O || O.status !== "paused" || (O.status = "queued", ge.status === "idle" && it());
  }
  function g() {
    const C = ge.items.filter((O) => O.status === "paused");
    for (const O of C)
      O.status = "queued";
    ge.status === "idle" && it();
  }
  function w(C) {
    const O = ge.items.findIndex((F) => F.id === C);
    O >= 0 && ["completed", "failed", "paused"].includes(ge.items[O].status) && ge.items.splice(O, 1);
  }
  function h() {
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
  ), k = B(() => ge.items.length > 0), N = B(
    () => ge.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), y = B(
    () => ge.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: uo(ge),
    // Computed
    currentDownload: a,
    queuedItems: v,
    completedItems: _,
    failedItems: d,
    pausedItems: I,
    hasItems: k,
    activeCount: N,
    hasPaused: y,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: w,
    clearCompleted: h,
    clearFailed: m,
    loadPendingDownloads: nl
  };
}
function al() {
  const t = $(null), u = $(null), n = $([]), r = $([]), g = $(!1), w = $(null);
  async function h(F, D) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const z = await window.app.api.fetchApi(F, D);
    if (!z.ok) {
      const M = await z.json().catch(() => ({})), T = M.error || M.message || `Request failed: ${z.status}`;
      throw new Error(T);
    }
    return z.json();
  }
  async function m(F) {
    g.value = !0, w.value = null;
    try {
      let D;
      return ht() || (D = await h(
        `/v2/comfygit/workflow/${F}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = D, D;
    } catch (D) {
      const z = D instanceof Error ? D.message : "Unknown error occurred";
      throw w.value = z, D;
    } finally {
      g.value = !1;
    }
  }
  async function a(F, D, z, H) {
    g.value = !0, w.value = null;
    try {
      let M;
      if (!ht()) {
        const T = Object.fromEntries(D), P = Object.fromEntries(z), E = H ? Array.from(H) : [];
        M = await h(
          `/v2/comfygit/workflow/${F}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: T,
              model_choices: P,
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
  async function v(F, D = 10) {
    g.value = !0, w.value = null;
    try {
      let z;
      return ht() || (z = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: D })
        }
      )), n.value = z.results, z.results;
    } catch (z) {
      const H = z instanceof Error ? z.message : "Unknown error occurred";
      throw w.value = H, z;
    } finally {
      g.value = !1;
    }
  }
  async function _(F, D = 10) {
    g.value = !0, w.value = null;
    try {
      let z;
      return ht() || (z = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: D })
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
      return ht(), await N(F);
    } catch (D) {
      const z = D instanceof Error ? D.message : "Failed to install nodes";
      throw d.installError = z, D;
    }
  }
  async function N(F) {
    var z;
    const D = await h(
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
      const H = new Map(((z = D.failed) == null ? void 0 : z.map((M) => [M.node_id, M.error])) || []);
      for (let M = 0; M < d.nodesToInstall.length; M++) {
        const T = d.nodesToInstall[M], P = H.get(T);
        d.nodeInstallProgress.completedNodes.push({
          node_id: T,
          success: !P,
          error: P
        });
      }
    }
    return d.nodesInstalled = D.nodes_installed, d.needsRestart = D.nodes_installed.length > 0, D.failed && D.failed.length > 0 && (d.installError = `${D.failed.length} package(s) failed to install`), D;
  }
  async function y(F, D, z) {
    I(), d.phase = "resolving", w.value = null;
    const H = Object.fromEntries(D), M = Object.fromEntries(z);
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
      const P = T.body.getReader(), E = new TextDecoder();
      let x = "";
      for (; ; ) {
        const { done: V, value: q } = await P.read();
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
      const P = T instanceof Error ? T.message : "Unknown error occurred";
      throw w.value = P, d.error = P, d.phase = "error", T;
    }
  }
  function C(F, D) {
    switch (F) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = D.total;
        break;
      case "file_start":
        d.currentFile = D.filename, d.currentFileIndex = D.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = D.downloaded, d.bytesTotal = D.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: D.filename,
          success: D.success,
          error: D.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = D.nodes_to_install || [], D.download_results && (d.completedFiles = D.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = D.message, d.phase = "error", w.value = D.message;
        break;
    }
  }
  function O(F, D) {
    const { addToQueue: z } = xt(), H = D.filter((M) => M.url && M.target_path).map((M) => ({
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
const ll = { class: "resolution-stepper" }, il = { class: "stepper-header" }, rl = ["onClick"], dl = {
  key: 0,
  class: "step-icon"
}, cl = {
  key: 1,
  class: "step-number"
}, ul = { class: "step-label" }, ml = {
  key: 0,
  class: "step-connector"
}, vl = { class: "stepper-content" }, fl = /* @__PURE__ */ Q({
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
    function h(v) {
      return g(v) ? "state-complete" : w(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function a(v) {
      r("step-change", v);
    }
    return (v, _) => (o(), s("div", ll, [
      e("div", il, [
        (o(!0), s(G, null, oe(t.steps, (d, I) => (o(), s("div", {
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
            class: se(["step-indicator", h(d.id)])
          }, [
            g(d.id) ? (o(), s("span", dl, "✓")) : (o(), s("span", cl, l(I + 1), 1))
          ], 2),
          e("div", ul, l(d.label), 1),
          I < t.steps.length - 1 ? (o(), s("div", ml)) : c("", !0)
        ], 10, rl))), 128))
      ]),
      e("div", vl, [
        ce(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), gl = /* @__PURE__ */ X(fl, [["__scopeId", "data-v-2a7b3af8"]]), hl = /* @__PURE__ */ Q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = B(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), g = B(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (w, h) => (o(), s("span", {
      class: se(["confidence-badge", r.value, t.size])
    }, l(g.value), 3));
  }
}), At = /* @__PURE__ */ X(hl, [["__scopeId", "data-v-17ec4b80"]]), pl = { class: "node-info" }, yl = { class: "node-info-text" }, wl = { class: "item-body" }, kl = {
  key: 0,
  class: "resolved-state"
}, bl = {
  key: 1,
  class: "multiple-options"
}, _l = { class: "options-list" }, $l = ["onClick"], Cl = ["name", "value", "checked", "onChange"], xl = { class: "option-content" }, Sl = { class: "option-header" }, Il = { class: "option-package-id" }, El = {
  key: 0,
  class: "option-title"
}, Ml = { class: "option-meta" }, zl = {
  key: 0,
  class: "installed-badge"
}, Ll = { class: "action-buttons" }, Tl = {
  key: 2,
  class: "unresolved"
}, Dl = { class: "action-buttons" }, Nl = /* @__PURE__ */ Q({
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
    function h(m) {
      r("option-selected", m);
    }
    return (m, a) => (o(), s("div", {
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", pl, [
        e("span", yl, [
          a[7] || (a[7] = p("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", w.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", wl, [
        g.value ? (o(), s("div", kl, [
          f(re, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (v) => r("clear-choice"))
          }, {
            default: i(() => [...a[8] || (a[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", bl, [
          a[12] || (a[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", _l, [
            (o(!0), s(G, null, oe(t.options, (v, _) => (o(), s("label", {
              key: v.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (d) => h(_)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (d) => h(_)
              }, null, 40, Cl),
              e("div", xl, [
                e("div", Sl, [
                  e("span", Il, l(v.package_id), 1),
                  f(At, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (o(), s("div", El, l(v.title), 1)) : c("", !0),
                e("div", Ml, [
                  v.is_installed ? (o(), s("span", zl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, $l))), 128))
          ]),
          e("div", Ll, [
            f(re, {
              variant: "ghost",
              size: "sm",
              onClick: a[1] || (a[1] = (v) => r("search"))
            }, {
              default: i(() => [...a[9] || (a[9] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "ghost",
              size: "sm",
              onClick: a[2] || (a[2] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[3] || (a[3] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Tl, [
          a[16] || (a[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Dl, [
            f(re, {
              variant: "primary",
              size: "sm",
              onClick: a[4] || (a[4] = (v) => r("search"))
            }, {
              default: i(() => [...a[13] || (a[13] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[5] || (a[5] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[14] || (a[14] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[6] || (a[6] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...a[15] || (a[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Rl = /* @__PURE__ */ X(Nl, [["__scopeId", "data-v-e02629e7"]]), Ol = { class: "item-navigator" }, Ul = { class: "nav-item-info" }, Pl = ["title"], Bl = { class: "nav-controls" }, Fl = { class: "nav-arrows" }, Vl = ["disabled"], Al = ["disabled"], Wl = { class: "nav-position" }, Gl = /* @__PURE__ */ Q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, g) => (o(), s("div", Ol, [
      e("div", Ul, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Pl)
      ]),
      e("div", Bl, [
        e("div", Fl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (w) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Vl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (w) => n("next")),
            title: "Next item"
          }, " → ", 8, Al)
        ]),
        e("span", Wl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), to = /* @__PURE__ */ X(Gl, [["__scopeId", "data-v-74af7920"]]), jl = ["type", "value", "placeholder", "disabled"], Hl = {
  key: 0,
  class: "base-input-error"
}, ql = /* @__PURE__ */ Q({
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
          n[1] || (n[1] = je((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = je((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, jl),
      t.error ? (o(), s("span", Hl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ X(ql, [["__scopeId", "data-v-9ba02cdc"]]), Kl = { class: "node-resolution-step" }, Jl = {
  key: 0,
  class: "auto-resolved-section"
}, Ql = { class: "section-header" }, Xl = { class: "stat-badge" }, Yl = { class: "resolved-packages-list" }, Zl = { class: "package-info" }, ei = { class: "package-id" }, ti = { class: "node-count" }, oi = { class: "package-actions" }, si = {
  key: 0,
  class: "status-badge install"
}, ni = {
  key: 1,
  class: "status-badge skip"
}, ai = ["onClick"], li = {
  key: 1,
  class: "section-divider"
}, ii = { class: "step-header" }, ri = { class: "stat-badge" }, di = {
  key: 1,
  class: "step-body"
}, ci = {
  key: 3,
  class: "empty-state"
}, ui = { class: "node-search-modal" }, mi = { class: "node-modal-body" }, vi = {
  key: 0,
  class: "node-search-results"
}, fi = ["onClick"], gi = { class: "node-result-header" }, hi = { class: "node-result-package-id" }, pi = {
  key: 0,
  class: "node-result-description"
}, yi = {
  key: 1,
  class: "node-no-results"
}, wi = {
  key: 2,
  class: "node-searching"
}, ki = { class: "node-manual-entry-modal" }, bi = { class: "node-modal-body" }, _i = { class: "node-modal-actions" }, $i = /* @__PURE__ */ Q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = $(0), w = $(!1), h = $(!1), m = $(""), a = $(""), v = $([]), _ = $(!1), d = B(() => n.nodes[g.value]), I = B(() => n.nodes.filter((ne) => n.nodeChoices.has(ne.node_type)).length), k = B(() => n.autoResolvedPackages.filter((ne) => !n.skippedPackages.has(ne.package_id)).length);
    function N(ne) {
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
    function D() {
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
    function P() {
      a.value = "", h.value = !0;
    }
    function E() {
      w.value = !1, m.value = "", v.value = [];
    }
    function x() {
      h.value = !1, a.value = "";
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
      return o(), s("div", Kl, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", Jl, [
          e("div", Ql, [
            A[4] || (A[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Xl, l(k.value) + "/" + l(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Yl, [
            (o(!0), s(G, null, oe(t.autoResolvedPackages, (b) => (o(), s("div", {
              key: b.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Zl, [
                e("code", ei, l(b.package_id), 1),
                e("span", ti, l(b.node_types_count) + " node type" + l(b.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", oi, [
                N(b.package_id) ? (o(), s("span", ni, " SKIPPED ")) : (o(), s("span", si, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ae) => y(b.package_id)
                }, l(N(b.package_id) ? "Include" : "Skip"), 9, ai)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", li)) : c("", !0),
        t.nodes.length > 0 ? (o(), s(G, { key: 2 }, [
          e("div", ii, [
            A[5] || (A[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", ri, l(I.value) + "/" + l(t.nodes.length) + " resolved", 1)
          ]),
          d.value ? (o(), S(to, {
            key: 0,
            "item-name": d.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: A[0] || (A[0] = (b) => F(g.value - 1)),
            onNext: A[1] || (A[1] = (b) => F(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          d.value ? (o(), s("div", di, [
            f(Rl, {
              "node-type": d.value.node_type,
              "has-multiple-options": !!((Z = d.value.options) != null && Z.length),
              options: d.value.options,
              choice: (L = t.nodeChoices) == null ? void 0 : L.get(d.value.node_type),
              status: C.value,
              "status-label": O.value,
              onMarkOptional: D,
              onSkip: z,
              onManualEntry: P,
              onSearch: T,
              onOptionSelected: H,
              onClearChoice: M
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", ci, [...A[6] || (A[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (o(), S(Se, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(E, ["self"])
          }, [
            e("div", ui, [
              e("div", { class: "node-modal-header" }, [
                A[7] || (A[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", mi, [
                f(Ue, {
                  modelValue: m.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (b) => m.value = b),
                  placeholder: "Search by node type, package name...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), s("div", vi, [
                  (o(!0), s(G, null, oe(v.value, (b) => (o(), s("div", {
                    key: b.package_id,
                    class: "node-search-result-item",
                    onClick: (ae) => q(b)
                  }, [
                    e("div", gi, [
                      e("code", hi, l(b.package_id), 1),
                      b.match_confidence ? (o(), S(At, {
                        key: 0,
                        confidence: b.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    b.description ? (o(), s("div", pi, l(b.description), 1)) : c("", !0)
                  ], 8, fi))), 128))
                ])) : m.value && !_.value ? (o(), s("div", yi, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                _.value ? (o(), s("div", wi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(Se, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(x, ["self"])
          }, [
            e("div", ki, [
              e("div", { class: "node-modal-header" }, [
                A[8] || (A[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: x
                }, "✕")
              ]),
              e("div", bi, [
                f(Ue, {
                  modelValue: a.value,
                  "onUpdate:modelValue": A[3] || (A[3] = (b) => a.value = b),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", _i, [
                  f(re, {
                    variant: "secondary",
                    onClick: x
                  }, {
                    default: i(() => [...A[9] || (A[9] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(re, {
                    variant: "primary",
                    disabled: !a.value.trim(),
                    onClick: ee
                  }, {
                    default: i(() => [...A[10] || (A[10] = [
                      p(" Add Package ", -1)
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
}), Ci = /* @__PURE__ */ X($i, [["__scopeId", "data-v-6474069a"]]), xi = { class: "node-info" }, Si = { class: "node-info-text" }, Ii = { class: "item-body" }, Ei = {
  key: 0,
  class: "resolved-state"
}, Mi = {
  key: 1,
  class: "multiple-options"
}, zi = { class: "options-list" }, Li = ["onClick"], Ti = ["name", "value", "checked", "onChange"], Di = { class: "option-content" }, Ni = { class: "option-header" }, Ri = { class: "option-filename" }, Oi = { class: "option-meta" }, Ui = { class: "option-size" }, Pi = { class: "option-category" }, Bi = { class: "option-path" }, Fi = { class: "action-buttons" }, Vi = {
  key: 2,
  class: "unresolved"
}, Ai = { class: "action-buttons" }, Wi = /* @__PURE__ */ Q({
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
    function h(a) {
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
      e("div", xi, [
        e("span", Si, [
          v[7] || (v[7] = p("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", w.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Ii, [
        g.value ? (o(), s("div", Ei, [
          f(re, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (_) => r("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Mi, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", zi, [
            (o(!0), s(G, null, oe(t.options, (_, d) => (o(), s("label", {
              key: _.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (I) => h(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (I) => h(d)
              }, null, 40, Ti),
              e("div", Di, [
                e("div", Ni, [
                  e("span", Ri, l(_.model.filename), 1),
                  f(At, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Oi, [
                  e("span", Ui, l(m(_.model.size)), 1),
                  e("span", Pi, l(_.model.category), 1)
                ]),
                e("div", Bi, l(_.model.relative_path), 1)
              ])
            ], 10, Li))), 128))
          ]),
          e("div", Fi, [
            f(re, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (_) => r("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (_) => r("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (_) => r("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Vi, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ai, [
            f(re, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (_) => r("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (_) => r("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (_) => r("mark-optional"))
            }, {
              default: i(() => [...v[15] || (v[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Gi = /* @__PURE__ */ X(Wi, [["__scopeId", "data-v-8a82fefa"]]), ji = { class: "model-resolution-step" }, Hi = { class: "step-header" }, qi = { class: "step-info" }, Ki = { class: "step-title" }, Ji = { class: "step-description" }, Qi = { class: "stat-badge" }, Xi = {
  key: 1,
  class: "step-body"
}, Yi = {
  key: 2,
  class: "empty-state"
}, Zi = { class: "model-search-modal" }, er = { class: "model-modal-body" }, tr = {
  key: 0,
  class: "model-search-results"
}, or = ["onClick"], sr = { class: "model-result-header" }, nr = { class: "model-result-filename" }, ar = { class: "model-result-meta" }, lr = { class: "model-result-category" }, ir = { class: "model-result-size" }, rr = {
  key: 0,
  class: "model-result-path"
}, dr = {
  key: 1,
  class: "model-no-results"
}, cr = {
  key: 2,
  class: "model-searching"
}, ur = { class: "model-download-url-modal" }, mr = { class: "model-modal-body" }, vr = { class: "model-input-group" }, fr = { class: "model-input-group" }, gr = { class: "model-modal-actions" }, hr = /* @__PURE__ */ Q({
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
    const g = t, w = u, h = $(0), m = $(!1), a = $(!1), v = $(""), _ = $(""), d = $(""), I = $([]), k = $(!1), N = B(() => g.models[h.value]), y = B(() => g.models.some((L) => L.is_download_intent)), C = B(() => g.models.filter(
      (L) => g.modelChoices.has(L.filename) || L.is_download_intent
    ).length), O = B(() => {
      var b;
      if (!N.value) return "";
      const L = r((b = N.value.reference) == null ? void 0 : b.node_type);
      return L ? `${L}/${N.value.filename}` : "";
    }), F = B(() => {
      var b;
      if (!N.value) return "not-found";
      const L = g.modelChoices.get(N.value.filename);
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
      return N.value.is_download_intent ? "download" : (b = N.value.options) != null && b.length ? "ambiguous" : "not-found";
    }), D = B(() => {
      var b, ae;
      if (!N.value) return;
      const L = g.modelChoices.get(N.value.filename);
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
      return N.value.is_download_intent ? "Pending Download" : (ae = N.value.options) != null && ae.length ? `${N.value.options.length} matches` : "Not Found";
    });
    function z(L) {
      L >= 0 && L < g.models.length && (h.value = L);
    }
    function H() {
      N.value && w("mark-optional", N.value.filename);
    }
    function M() {
      N.value && w("skip", N.value.filename);
    }
    function T(L) {
      N.value && w("option-selected", N.value.filename, L);
    }
    function P() {
      N.value && w("clear-choice", N.value.filename);
    }
    function E() {
      N.value && (v.value = N.value.filename, m.value = !0);
    }
    function x() {
      N.value && (_.value = N.value.download_source || "", d.value = N.value.target_path || O.value, a.value = !0);
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
      N.value && V();
    }
    function A() {
      !N.value || !_.value.trim() || (w("download-url", N.value.filename, _.value.trim(), d.value.trim() || void 0), q());
    }
    function Z(L) {
      if (!L) return "Unknown";
      const b = L / (1024 * 1024 * 1024);
      return b >= 1 ? `${b.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, b) => {
      var ae, te, me;
      return o(), s("div", ji, [
        e("div", Hi, [
          e("div", qi, [
            e("h3", Ki, l(y.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Ji, l(y.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Qi, l(C.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        N.value ? (o(), S(to, {
          key: 0,
          "item-name": N.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: b[0] || (b[0] = (pe) => z(h.value - 1)),
          onNext: b[1] || (b[1] = (pe) => z(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        N.value ? (o(), s("div", Xi, [
          f(Gi, {
            filename: N.value.filename,
            "node-type": ((ae = N.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((te = N.value.options) != null && te.length),
            options: N.value.options,
            choice: (me = t.modelChoices) == null ? void 0 : me.get(N.value.filename),
            status: F.value,
            "status-label": D.value,
            onMarkOptional: H,
            onSkip: M,
            onDownloadUrl: x,
            onSearch: E,
            onOptionSelected: T,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Yi, [...b[5] || (b[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), S(Se, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(V, ["self"])
          }, [
            e("div", Zi, [
              e("div", { class: "model-modal-header" }, [
                b[6] || (b[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", er, [
                f(Ue, {
                  modelValue: v.value,
                  "onUpdate:modelValue": b[2] || (b[2] = (pe) => v.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (o(), s("div", tr, [
                  (o(!0), s(G, null, oe(I.value, (pe) => (o(), s("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (Be) => ne()
                  }, [
                    e("div", sr, [
                      e("code", nr, l(pe.filename), 1)
                    ]),
                    e("div", ar, [
                      e("span", lr, l(pe.category), 1),
                      e("span", ir, l(Z(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), s("div", rr, l(pe.relative_path), 1)) : c("", !0)
                  ], 8, or))), 128))
                ])) : v.value && !k.value ? (o(), s("div", dr, ' No models found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                k.value ? (o(), s("div", cr, "Searching...")) : c("", !0)
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
            e("div", ur, [
              e("div", { class: "model-modal-header" }, [
                b[7] || (b[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: q
                }, "✕")
              ]),
              e("div", mr, [
                e("div", vr, [
                  b[8] || (b[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Ue, {
                    modelValue: _.value,
                    "onUpdate:modelValue": b[3] || (b[3] = (pe) => _.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", fr, [
                  b[9] || (b[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Ue, {
                    modelValue: d.value,
                    "onUpdate:modelValue": b[4] || (b[4] = (pe) => d.value = pe),
                    placeholder: O.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", gr, [
                  f(re, {
                    variant: "secondary",
                    onClick: q
                  }, {
                    default: i(() => [...b[10] || (b[10] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(re, {
                    variant: "primary",
                    disabled: !_.value.trim() || !d.value.trim(),
                    onClick: A
                  }, {
                    default: i(() => [...b[11] || (b[11] = [
                      p(" Queue Download ", -1)
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
}), pr = /* @__PURE__ */ X(hr, [["__scopeId", "data-v-c6acbada"]]), yr = { class: "applying-step" }, wr = {
  key: 0,
  class: "phase-content"
}, kr = {
  key: 1,
  class: "phase-content"
}, br = { class: "phase-description" }, _r = { class: "overall-progress" }, $r = { class: "progress-bar" }, Cr = { class: "progress-label" }, xr = { class: "install-list" }, Sr = { class: "install-icon" }, Ir = { key: 0 }, Er = {
  key: 1,
  class: "spinner"
}, Mr = { key: 2 }, zr = { key: 3 }, Lr = {
  key: 0,
  class: "install-error"
}, Tr = {
  key: 2,
  class: "phase-content"
}, Dr = { class: "phase-header" }, Nr = { class: "phase-title" }, Rr = { class: "completion-summary" }, Or = {
  key: 0,
  class: "summary-item success"
}, Ur = { class: "summary-text" }, Pr = {
  key: 1,
  class: "summary-item error"
}, Br = { class: "summary-text" }, Fr = {
  key: 2,
  class: "failed-list"
}, Vr = { class: "failed-node-id" }, Ar = { class: "failed-error" }, Wr = {
  key: 4,
  class: "summary-item success"
}, Gr = {
  key: 5,
  class: "restart-prompt"
}, jr = {
  key: 3,
  class: "phase-content error"
}, Hr = { class: "error-message" }, qr = /* @__PURE__ */ Q({
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
    function h(m) {
      var a, v;
      return (v = (a = u.progress.nodeInstallProgress) == null ? void 0 : a.completedNodes.find((_) => _.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, a) => {
      var v, _, d, I;
      return o(), s("div", yr, [
        t.progress.phase === "resolving" ? (o(), s("div", wr, [...a[2] || (a[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", kr, [
          a[3] || (a[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", br, " Installing " + l((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + l(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", _r, [
            e("div", $r, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Cr, l(((d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.length) ?? 0) + " / " + l(((I = t.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", xr, [
            (o(!0), s(G, null, oe(t.progress.nodesToInstall, (k, N) => (o(), s("div", {
              key: k,
              class: se(["install-item", w(k, N)])
            }, [
              e("span", Sr, [
                w(k, N) === "pending" ? (o(), s("span", Ir, "○")) : w(k, N) === "installing" ? (o(), s("span", Er, "◌")) : w(k, N) === "complete" ? (o(), s("span", Mr, "✓")) : w(k, N) === "failed" ? (o(), s("span", zr, "✗")) : c("", !0)
              ]),
              e("code", null, l(k), 1),
              h(k) ? (o(), s("span", Lr, l(h(k)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Tr, [
          e("div", Dr, [
            e("span", {
              class: se(["phase-icon", g.value ? "warning" : "success"])
            }, l(g.value ? "⚠" : "✓"), 3),
            e("h3", Nr, l(g.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Rr, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", Or, [
              a[4] || (a[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Ur, l(t.progress.nodesInstalled.length) + " node package" + l(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Pr, [
              a[5] || (a[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Br, l(r.value.length) + " package" + l(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Fr, [
              (o(!0), s(G, null, oe(r.value, (k) => (o(), s("div", {
                key: k.node_id,
                class: "failed-item"
              }, [
                e("code", Vr, l(k.node_id), 1),
                e("span", Ar, l(k.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: a[0] || (a[0] = (k) => m.$emit("retry-failed"))
            }, " Retry Failed (" + l(r.value.length) + ") ", 1)) : c("", !0),
            g.value ? c("", !0) : (o(), s("div", Wr, [...a[6] || (a[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            a[8] || (a[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", Gr, [
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
        ])) : t.progress.phase === "error" ? (o(), s("div", jr, [
          a[9] || (a[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Hr, l(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Kr = /* @__PURE__ */ X(qr, [["__scopeId", "data-v-5efaae58"]]), Jr = {
  key: 0,
  class: "loading-state"
}, Qr = {
  key: 1,
  class: "wizard-content"
}, Xr = {
  key: 0,
  class: "step-content"
}, Yr = { class: "analysis-summary" }, Zr = { class: "analysis-header" }, ed = { class: "summary-description" }, td = { class: "stats-grid" }, od = { class: "stat-card" }, sd = { class: "stat-items" }, nd = {
  key: 0,
  class: "stat-item success"
}, ad = { class: "stat-count" }, ld = {
  key: 1,
  class: "stat-item info"
}, id = { class: "stat-count" }, rd = {
  key: 2,
  class: "stat-item warning"
}, dd = { class: "stat-count" }, cd = {
  key: 3,
  class: "stat-item error"
}, ud = { class: "stat-count" }, md = { class: "stat-card" }, vd = { class: "stat-items" }, fd = { class: "stat-item success" }, gd = { class: "stat-count" }, hd = {
  key: 0,
  class: "stat-item info"
}, pd = { class: "stat-count" }, yd = {
  key: 1,
  class: "stat-item warning"
}, wd = { class: "stat-count" }, kd = {
  key: 2,
  class: "stat-item error"
}, bd = { class: "stat-count" }, _d = {
  key: 0,
  class: "status-message warning"
}, $d = { class: "status-text" }, Cd = {
  key: 1,
  class: "status-message info"
}, xd = { class: "status-text" }, Sd = {
  key: 2,
  class: "status-message info"
}, Id = { class: "status-text" }, Ed = {
  key: 3,
  class: "status-message success"
}, Md = {
  key: 3,
  class: "step-content"
}, zd = { class: "review-summary" }, Ld = { class: "review-stats" }, Td = { class: "review-stat" }, Dd = { class: "stat-value" }, Nd = { class: "review-stat" }, Rd = { class: "stat-value" }, Od = { class: "review-stat" }, Ud = { class: "stat-value" }, Pd = { class: "review-stat" }, Bd = { class: "stat-value" }, Fd = {
  key: 0,
  class: "review-section"
}, Vd = { class: "section-title" }, Ad = { class: "review-items" }, Wd = { class: "item-name" }, Gd = { class: "item-choice" }, jd = {
  key: 0,
  class: "choice-badge install"
}, Hd = {
  key: 1,
  class: "choice-badge skip"
}, qd = {
  key: 1,
  class: "review-section"
}, Kd = { class: "section-title" }, Jd = { class: "review-items" }, Qd = { class: "item-name" }, Xd = { class: "item-choice" }, Yd = {
  key: 0,
  class: "choice-badge install"
}, Zd = {
  key: 1,
  class: "choice-badge optional"
}, ec = {
  key: 2,
  class: "choice-badge skip"
}, tc = {
  key: 1,
  class: "choice-badge pending"
}, oc = {
  key: 2,
  class: "review-section"
}, sc = { class: "section-title" }, nc = { class: "review-items" }, ac = { class: "item-name" }, lc = { class: "item-choice" }, ic = {
  key: 0,
  class: "choice-badge install"
}, rc = {
  key: 1,
  class: "choice-badge download"
}, dc = {
  key: 2,
  class: "choice-badge optional"
}, cc = {
  key: 3,
  class: "choice-badge skip"
}, uc = {
  key: 4,
  class: "choice-badge skip"
}, mc = {
  key: 1,
  class: "choice-badge download"
}, vc = {
  key: 2,
  class: "choice-badge pending"
}, fc = {
  key: 3,
  class: "no-choices"
}, gc = /* @__PURE__ */ Q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: g, applyResolution: w, installNodes: h, queueModelDownloads: m, progress: a, resetProgress: v } = al(), { loadPendingDownloads: _ } = xt(), d = $(null), I = $(!1), k = $(!1), N = $(null), y = $("analysis"), C = $([]), O = $(/* @__PURE__ */ new Map()), F = $(/* @__PURE__ */ new Map()), D = $(/* @__PURE__ */ new Set()), z = B(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (M.value || E.value) && j.push({ id: "nodes", label: "Nodes" }), (T.value || P.value) && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), y.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), H = B(() => d.value ? d.value.stats.needs_user_input : !1), M = B(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), T = B(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), P = B(() => d.value ? d.value.stats.download_intents > 0 : !1), E = B(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), x = B(() => d.value ? d.value.nodes.resolved.length : 0), V = B(() => {
      if (!d.value) return [];
      const j = d.value.nodes.resolved.filter((J) => !J.is_installed), U = /* @__PURE__ */ new Set();
      return j.filter((J) => U.has(J.package.package_id) ? !1 : (U.add(J.package.package_id), !0));
    }), q = B(() => {
      if (!d.value) return [];
      const j = d.value.nodes.resolved.filter((J) => !J.is_installed), U = /* @__PURE__ */ new Map();
      for (const J of j) {
        const ue = U.get(J.package.package_id);
        ue ? ue.node_types_count++ : U.set(J.package.package_id, {
          package_id: J.package.package_id,
          title: J.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), ee = B(() => V.value.filter((j) => !D.value.has(j.package.package_id))), ne = B(() => d.value ? d.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), A = B(() => {
      if (!d.value) return [];
      const j = d.value.nodes.unresolved.map((J) => ({
        node_type: J.reference.node_type,
        reason: J.reason,
        is_unresolved: !0,
        options: void 0
      })), U = d.value.nodes.ambiguous.map((J) => ({
        node_type: J.reference.node_type,
        has_multiple_options: !0,
        options: J.options.map((ue) => ({
          package_id: ue.package.package_id,
          title: ue.package.title,
          match_confidence: ue.match_confidence,
          match_type: ue.match_type,
          is_installed: ue.is_installed
        }))
      }));
      return [...j, ...U];
    }), Z = B(() => {
      if (!d.value) return [];
      const j = d.value.models.unresolved.map((J) => ({
        filename: J.reference.widget_value,
        reference: J.reference,
        reason: J.reason,
        is_unresolved: !0,
        options: void 0
      })), U = d.value.models.ambiguous.map((J) => ({
        filename: J.reference.widget_value,
        reference: J.reference,
        has_multiple_options: !0,
        options: J.options.map((ue) => ({
          model: ue.model,
          match_confidence: ue.match_confidence,
          match_type: ue.match_type,
          has_download_source: ue.has_download_source
        }))
      }));
      return [...j, ...U];
    }), L = B(() => {
      const j = Z.value, U = ne.value.map((J) => ({
        filename: J.filename,
        reference: J.reference,
        is_download_intent: !0,
        resolved_model: J.resolved_model,
        download_source: J.download_source,
        target_path: J.target_path,
        options: void 0
      }));
      return [...j, ...U];
    }), b = B(() => {
      let j = ee.value.length;
      for (const U of O.value.values())
        U.action === "install" && j++;
      for (const U of F.value.values())
        U.action === "select" && j++;
      return j;
    }), ae = B(() => {
      let j = 0;
      for (const U of F.value.values())
        U.action === "download" && j++;
      return j;
    }), te = B(() => {
      let j = 0;
      for (const U of O.value.values())
        U.action === "optional" && j++;
      for (const U of F.value.values())
        U.action === "optional" && j++;
      return j;
    }), me = B(() => {
      let j = D.value.size;
      for (const U of O.value.values())
        U.action === "skip" && j++;
      for (const U of F.value.values())
        U.action === "skip" && j++;
      for (const U of A.value)
        O.value.has(U.node_type) || j++;
      for (const U of Z.value)
        F.value.has(U.filename) || j++;
      return j;
    }), pe = B(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, M.value) {
        const U = A.value.length, J = A.value.filter(
          (ue) => O.value.has(ue.node_type)
        ).length;
        j.nodes = { resolved: J, total: U };
      }
      if (T.value || P.value) {
        const U = L.value.length, J = L.value.filter(
          (ue) => F.value.has(ue.filename) || ue.is_download_intent
        ).length;
        j.models = { resolved: J, total: U };
      }
      if (j.review = { resolved: 1, total: 1 }, y.value === "applying") {
        const U = a.totalFiles || 1, J = a.completedFiles.length;
        j.applying = { resolved: J, total: U };
      }
      return j;
    });
    function Be(j) {
      y.value = j;
    }
    function Fe() {
      const j = z.value.findIndex((U) => U.id === y.value);
      j > 0 && (y.value = z.value[j - 1].id);
    }
    function ot() {
      const j = z.value.findIndex((U) => U.id === y.value);
      j < z.value.length - 1 && (y.value = z.value[j + 1].id);
    }
    async function ve() {
      I.value = !0, N.value = null;
      try {
        d.value = await g(n.workflowName);
      } catch (j) {
        N.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function Ee() {
      C.value.includes("analysis") || C.value.push("analysis"), M.value || E.value ? y.value = "nodes" : T.value || P.value ? y.value = "models" : y.value = "review";
    }
    function vt(j) {
      O.value.set(j, { action: "optional" });
    }
    function Qe(j) {
      O.value.set(j, { action: "skip" });
    }
    function Me(j, U) {
      var ue;
      const J = A.value.find((Ce) => Ce.node_type === j);
      (ue = J == null ? void 0 : J.options) != null && ue[U] && O.value.set(j, {
        action: "install",
        package_id: J.options[U].package_id
      });
    }
    function ft(j, U) {
      O.value.set(j, {
        action: "install",
        package_id: U
      });
    }
    function st(j) {
      O.value.delete(j);
    }
    function gt(j) {
      D.value.has(j) ? D.value.delete(j) : D.value.add(j);
    }
    function K(j) {
      F.value.set(j, { action: "optional" });
    }
    function ie(j) {
      F.value.set(j, { action: "skip" });
    }
    function he(j, U) {
      var ue;
      const J = Z.value.find((Ce) => Ce.filename === j);
      (ue = J == null ? void 0 : J.options) != null && ue[U] && F.value.set(j, {
        action: "select",
        selected_model: J.options[U].model
      });
    }
    function $e(j, U, J) {
      F.value.set(j, {
        action: "download",
        url: U,
        target_path: J
      });
    }
    function Xe(j) {
      F.value.delete(j);
    }
    async function zt() {
      var j;
      k.value = !0, N.value = null, v(), a.phase = "resolving", y.value = "applying";
      try {
        const U = await w(n.workflowName, O.value, F.value, D.value);
        U.models_to_download && U.models_to_download.length > 0 && m(n.workflowName, U.models_to_download);
        const J = [
          ...U.nodes_to_install || [],
          ...ee.value.map((Ce) => Ce.package.package_id)
        ];
        a.nodesToInstall = [...new Set(J)], a.nodesToInstall.length > 0 && await h(n.workflowName), a.phase = "complete", await _();
        const ue = a.installError || ((j = a.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Ce) => !Ce.success));
        !a.needsRestart && !ue && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (U) {
        N.value = U instanceof Error ? U.message : "Failed to apply resolution", a.error = N.value, a.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function nt() {
      r("refresh"), r("restart"), r("close");
    }
    async function at() {
      var U;
      const j = ((U = a.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((J) => !J.success).map((J) => J.node_id)) || [];
      if (j.length !== 0) {
        a.phase = "installing", a.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, a.nodesToInstall = j, a.nodesInstalled = [], a.installError = void 0;
        try {
          await h(n.workflowName), a.phase = "complete";
        } catch (J) {
          a.error = J instanceof Error ? J.message : "Retry failed", a.phase = "error";
        }
      }
    }
    return _e(ve), (j, U) => (o(), S(ct, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: N.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (J) => r("close"))
    }, {
      body: i(() => [
        I.value && !d.value ? (o(), s("div", Jr, [...U[2] || (U[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", Qr, [
          f(gl, {
            steps: z.value,
            "current-step": y.value,
            "completed-steps": C.value,
            "step-stats": pe.value,
            onStepChange: Be
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          y.value === "analysis" ? (o(), s("div", Xr, [
            e("div", Yr, [
              e("div", Zr, [
                U[3] || (U[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", ed, " Found " + l(d.value.stats.total_nodes) + " nodes and " + l(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", td, [
                e("div", od, [
                  U[12] || (U[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", sd, [
                    x.value > 0 ? (o(), s("div", nd, [
                      U[4] || (U[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", ad, l(x.value), 1),
                      U[5] || (U[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    d.value.stats.packages_needing_installation > 0 ? (o(), s("div", ld, [
                      U[6] || (U[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", id, l(d.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", rd, [
                      U[8] || (U[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", dd, l(d.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", cd, [
                      U[10] || (U[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", ud, l(d.value.nodes.unresolved.length), 1),
                      U[11] || (U[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", md, [
                  U[21] || (U[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", vd, [
                    e("div", fd, [
                      U[13] || (U[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", gd, l(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      U[14] || (U[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", hd, [
                      U[15] || (U[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", pd, l(d.value.stats.download_intents), 1),
                      U[16] || (U[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", yd, [
                      U[17] || (U[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", wd, l(d.value.models.ambiguous.length), 1),
                      U[18] || (U[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", kd, [
                      U[19] || (U[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", bd, l(d.value.models.unresolved.length), 1),
                      U[20] || (U[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              H.value ? (o(), s("div", _d, [
                U[22] || (U[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", $d, l(A.value.length + Z.value.length) + " items need your input", 1)
              ])) : E.value ? (o(), s("div", Cd, [
                U[23] || (U[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", xd, l(d.value.stats.packages_needing_installation) + " package" + l(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + l(d.value.stats.nodes_needing_installation) + " node type" + l(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + l(P.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : P.value ? (o(), s("div", Sd, [
                U[24] || (U[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Id, l(d.value.stats.download_intents) + " model" + l(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", Ed, [...U[25] || (U[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          y.value === "nodes" ? (o(), S(Ci, {
            key: 1,
            nodes: A.value,
            "node-choices": O.value,
            "auto-resolved-packages": q.value,
            "skipped-packages": D.value,
            onMarkOptional: vt,
            onSkip: Qe,
            onOptionSelected: Me,
            onManualEntry: ft,
            onClearChoice: st,
            onPackageSkip: gt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          y.value === "models" ? (o(), S(pr, {
            key: 2,
            models: L.value,
            "model-choices": F.value,
            onMarkOptional: K,
            onSkip: ie,
            onOptionSelected: he,
            onDownloadUrl: $e,
            onClearChoice: Xe
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          y.value === "review" ? (o(), s("div", Md, [
            e("div", zd, [
              U[30] || (U[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Ld, [
                e("div", Td, [
                  e("span", Dd, l(b.value), 1),
                  U[26] || (U[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Nd, [
                  e("span", Rd, l(ae.value), 1),
                  U[27] || (U[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Od, [
                  e("span", Ud, l(te.value), 1),
                  U[28] || (U[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Pd, [
                  e("span", Bd, l(me.value), 1),
                  U[29] || (U[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              q.value.length > 0 ? (o(), s("div", Fd, [
                e("h4", Vd, "Node Packages (" + l(q.value.length) + ")", 1),
                e("div", Ad, [
                  (o(!0), s(G, null, oe(q.value, (J) => (o(), s("div", {
                    key: J.package_id,
                    class: "review-item"
                  }, [
                    e("code", Wd, l(J.package_id), 1),
                    e("div", Gd, [
                      D.value.has(J.package_id) ? (o(), s("span", Hd, "Skipped")) : (o(), s("span", jd, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              A.value.length > 0 ? (o(), s("div", qd, [
                e("h4", Kd, "Node Choices (" + l(A.value.length) + ")", 1),
                e("div", Jd, [
                  (o(!0), s(G, null, oe(A.value, (J) => {
                    var ue, Ce, Ye, Ze;
                    return o(), s("div", {
                      key: J.node_type,
                      class: "review-item"
                    }, [
                      e("code", Qd, l(J.node_type), 1),
                      e("div", Xd, [
                        O.value.has(J.node_type) ? (o(), s(G, { key: 0 }, [
                          ((ue = O.value.get(J.node_type)) == null ? void 0 : ue.action) === "install" ? (o(), s("span", Yd, l((Ce = O.value.get(J.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((Ye = O.value.get(J.node_type)) == null ? void 0 : Ye.action) === "optional" ? (o(), s("span", Zd, " Optional ")) : ((Ze = O.value.get(J.node_type)) == null ? void 0 : Ze.action) === "skip" ? (o(), s("span", ec, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", tc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              L.value.length > 0 ? (o(), s("div", oc, [
                e("h4", sc, "Models (" + l(L.value.length) + ")", 1),
                e("div", nc, [
                  (o(!0), s(G, null, oe(L.value, (J) => {
                    var ue, Ce, Ye, Ze, St, It, Et;
                    return o(), s("div", {
                      key: J.filename,
                      class: "review-item"
                    }, [
                      e("code", ac, l(J.filename), 1),
                      e("div", lc, [
                        F.value.has(J.filename) ? (o(), s(G, { key: 0 }, [
                          ((ue = F.value.get(J.filename)) == null ? void 0 : ue.action) === "select" ? (o(), s("span", ic, l((Ye = (Ce = F.value.get(J.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : Ye.filename), 1)) : ((Ze = F.value.get(J.filename)) == null ? void 0 : Ze.action) === "download" ? (o(), s("span", rc, " Download ")) : ((St = F.value.get(J.filename)) == null ? void 0 : St.action) === "optional" ? (o(), s("span", dc, " Optional ")) : ((It = F.value.get(J.filename)) == null ? void 0 : It.action) === "skip" ? (o(), s("span", cc, " Skip ")) : ((Et = F.value.get(J.filename)) == null ? void 0 : Et.action) === "cancel_download" ? (o(), s("span", uc, " Cancel Download ")) : c("", !0)
                        ], 64)) : J.is_download_intent ? (o(), s("span", mc, " Pending Download ")) : (o(), s("span", vc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              V.value.length === 0 && A.value.length === 0 && L.value.length === 0 ? (o(), s("div", fc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          y.value === "applying" ? (o(), S(Kr, {
            key: 4,
            progress: fe(a),
            onRestart: nt,
            onRetryFailed: at
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
          default: i(() => [...U[31] || (U[31] = [
            p(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        U[35] || (U[35] = e("div", { class: "footer-spacer" }, null, -1)),
        y.value !== "applying" || fe(a).phase === "complete" || fe(a).phase === "error" ? (o(), S(re, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (J) => r("close"))
        }, {
          default: i(() => [
            p(l(fe(a).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        y.value === "analysis" ? (o(), S(re, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: Ee
        }, {
          default: i(() => [...U[32] || (U[32] = [
            p(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        y.value === "nodes" ? (o(), S(re, {
          key: 3,
          variant: "primary",
          onClick: ot
        }, {
          default: i(() => [
            p(l(T.value || P.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        y.value === "models" ? (o(), S(re, {
          key: 4,
          variant: "primary",
          onClick: ot
        }, {
          default: i(() => [...U[33] || (U[33] = [
            p(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        y.value === "review" ? (o(), S(re, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: zt
        }, {
          default: i(() => [...U[34] || (U[34] = [
            p(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), hc = /* @__PURE__ */ X(gc, [["__scopeId", "data-v-0d3f93e6"]]), pc = { class: "search-input-wrapper" }, yc = ["value", "placeholder"], wc = /* @__PURE__ */ Q({
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
    function h(a) {
      const v = a.target.value;
      n.debounce > 0 ? (clearTimeout(w), w = window.setTimeout(() => {
        r("update:modelValue", v);
      }, n.debounce)) : r("update:modelValue", v);
    }
    function m() {
      var a;
      r("update:modelValue", ""), r("clear"), (a = g.value) == null || a.focus();
    }
    return _e(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (a, v) => (o(), s("div", pc, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: je(m, ["escape"])
      }, null, 40, yc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), kc = /* @__PURE__ */ X(wc, [["__scopeId", "data-v-266f857a"]]), bc = { class: "search-bar" }, _c = /* @__PURE__ */ Q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", bc, [
      f(kc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ut = /* @__PURE__ */ X(_c, [["__scopeId", "data-v-3d51bbfd"]]), $c = { class: "section-group" }, Cc = {
  key: 0,
  class: "section-content"
}, xc = /* @__PURE__ */ Q({
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
    return (h, m) => (o(), s("section", $c, [
      f(Re, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: w
      }, {
        default: i(() => [
          p(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), s("div", Cc, [
        ce(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), be = /* @__PURE__ */ X(xc, [["__scopeId", "data-v-c48e33ed"]]), Sc = { class: "item-header" }, Ic = {
  key: 0,
  class: "item-icon"
}, Ec = { class: "item-info" }, Mc = {
  key: 0,
  class: "item-title"
}, zc = {
  key: 1,
  class: "item-subtitle"
}, Lc = {
  key: 0,
  class: "item-details"
}, Tc = {
  key: 1,
  class: "item-actions"
}, Dc = /* @__PURE__ */ Q({
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
      onClick: w[0] || (w[0] = (h) => t.clickable && g.$emit("click"))
    }, [
      e("div", Sc, [
        g.$slots.icon ? (o(), s("span", Ic, [
          ce(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Ec, [
          g.$slots.title ? (o(), s("div", Mc, [
            ce(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), s("div", zc, [
            ce(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), s("div", Lc, [
        ce(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), s("div", Tc, [
        ce(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ X(Dc, [["__scopeId", "data-v-cc435e0e"]]), Nc = { class: "loading-state" }, Rc = { class: "loading-message" }, Oc = /* @__PURE__ */ Q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (o(), s("div", Nc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Rc, l(t.message), 1)
    ]));
  }
}), Ke = /* @__PURE__ */ X(Oc, [["__scopeId", "data-v-ad8436c9"]]), Uc = { class: "error-state" }, Pc = { class: "error-message" }, Bc = /* @__PURE__ */ Q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (o(), s("div", Uc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Pc, l(t.message), 1),
      t.retry ? (o(), S(Y, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          p(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ X(Bc, [["__scopeId", "data-v-5397be48"]]), Fc = /* @__PURE__ */ Q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: g } = Ie();
    Zt();
    const w = $([]), h = $(!1), m = $(null), a = $(""), v = $(!0), _ = $(!1), d = $(!1), I = $(!1), k = $(null), N = B(
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
    }), D = B(
      () => N.value.filter(
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
    async function P(Z = !1) {
      h.value = !0, m.value = null;
      try {
        w.value = await g(Z);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    u({ loadWorkflows: P });
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
    return _e(P), (Z, L) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, { title: "WORKFLOWS" }, {
            actions: i(() => [
              N.value.length > 0 ? (o(), S(Y, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...L[8] || (L[8] = [
                  p(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(ut, {
            modelValue: a.value,
            "onUpdate:modelValue": L[0] || (L[0] = (b) => a.value = b),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), S(Je, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            D.value.length ? (o(), S(be, {
              key: 0,
              title: "BROKEN",
              count: D.value.length
            }, {
              default: i(() => [
                (o(!0), s(G, null, oe(D.value, (b) => (o(), S(xe, {
                  key: b.name,
                  status: "broken"
                }, {
                  icon: i(() => [...L[9] || (L[9] = [
                    p("⚠", -1)
                  ])]),
                  title: i(() => [
                    p(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(ne(b)), 1)
                  ]),
                  actions: i(() => [
                    f(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => x(b.name)
                    }, {
                      default: i(() => [...L[10] || (L[10] = [
                        p(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(b.name)
                    }, {
                      default: i(() => [...L[11] || (L[11] = [
                        p(" Details ▸ ", -1)
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
                (o(!0), s(G, null, oe(z.value, (b) => (o(), S(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    p(l(b.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    p(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(A(b)), 1)
                  ]),
                  actions: i(() => [
                    f(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(b.name)
                    }, {
                      default: i(() => [...L[12] || (L[12] = [
                        p(" Details ", -1)
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
                (o(!0), s(G, null, oe(H.value, (b) => (o(), S(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...L[13] || (L[13] = [
                    p("⚡", -1)
                  ])]),
                  title: i(() => [
                    p(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(A(b)), 1)
                  ]),
                  actions: i(() => [
                    f(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(b.name)
                    }, {
                      default: i(() => [...L[14] || (L[14] = [
                        p(" Details ", -1)
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
                (o(!0), s(G, null, oe(T.value, (b) => (o(), S(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    p(l(b.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    p(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(A(b)), 1)
                  ]),
                  actions: i(() => [
                    f(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(b.name)
                    }, {
                      default: i(() => [...L[15] || (L[15] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !_.value && M.value.length > 5 ? (o(), S(Y, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (b) => _.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    p(" View all " + l(M.value.length) + " → ", 1)
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
      d.value && k.value ? (o(), S(ol, {
        key: 0,
        "workflow-name": k.value,
        onClose: L[3] || (L[3] = (b) => d.value = !1),
        onResolve: L[4] || (L[4] = (b) => x(k.value)),
        onRefresh: L[5] || (L[5] = (b) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      I.value && k.value ? (o(), S(hc, {
        key: 1,
        "workflow-name": k.value,
        onClose: L[6] || (L[6] = (b) => I.value = !1),
        onInstall: q,
        onRefresh: L[7] || (L[7] = (b) => r("refresh")),
        onRestart: ee
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Vc = /* @__PURE__ */ X(Fc, [["__scopeId", "data-v-b7939cb4"]]), Ac = /* @__PURE__ */ Q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: se(["summary-bar", t.variant])
    }, [
      ce(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), mt = /* @__PURE__ */ X(Ac, [["__scopeId", "data-v-ccb7816e"]]), Wc = {
  key: 0,
  class: "model-details"
}, Gc = { class: "detail-section" }, jc = { class: "detail-row" }, Hc = { class: "detail-value mono" }, qc = { class: "detail-row" }, Kc = { class: "detail-value mono" }, Jc = { class: "detail-row" }, Qc = { class: "detail-value mono" }, Xc = { class: "detail-row" }, Yc = { class: "detail-value" }, Zc = { class: "detail-row" }, eu = { class: "detail-value" }, tu = { class: "detail-row" }, ou = { class: "detail-value" }, su = { class: "detail-section" }, nu = { class: "section-header" }, au = {
  key: 0,
  class: "locations-list"
}, lu = { class: "location-path mono" }, iu = {
  key: 0,
  class: "location-modified"
}, ru = ["onClick"], du = {
  key: 1,
  class: "empty-state"
}, cu = { class: "detail-section" }, uu = { class: "section-header" }, mu = {
  key: 0,
  class: "sources-list"
}, vu = { class: "source-type" }, fu = ["href"], gu = ["disabled", "onClick"], hu = {
  key: 1,
  class: "empty-state"
}, pu = { class: "add-source-form" }, yu = ["disabled"], wu = {
  key: 2,
  class: "source-error"
}, ku = {
  key: 3,
  class: "source-success"
}, bu = /* @__PURE__ */ Q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: g, removeModelSource: w, openFileLocation: h } = Ie(), m = $(null), a = $(!0), v = $(null), _ = $(""), d = $(!1), I = $(null), k = $(null), N = $(null), y = $(null);
    let C = null;
    function O(P, E = "success", x = 2e3) {
      C && clearTimeout(C), y.value = { message: P, type: E }, C = setTimeout(() => {
        y.value = null;
      }, x);
    }
    function F(P) {
      if (!P) return "Unknown";
      const E = 1024 * 1024 * 1024, x = 1024 * 1024;
      return P >= E ? `${(P / E).toFixed(1)} GB` : P >= x ? `${(P / x).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function D(P) {
      navigator.clipboard.writeText(P), O("Copied to clipboard!");
    }
    async function z(P) {
      try {
        await h(P), O("Opening file location...");
      } catch {
        O("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!_.value.trim() || !m.value)) {
        d.value = !0, k.value = null, N.value = null;
        try {
          await g(m.value.hash, _.value.trim()), N.value = "Source added successfully!", _.value = "", await T();
        } catch (P) {
          k.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function M(P) {
      if (m.value) {
        I.value = P, k.value = null, N.value = null;
        try {
          await w(m.value.hash, P), O("Source removed"), await T();
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
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        a.value = !1;
      }
    }
    return _e(T), (P, E) => {
      var x;
      return o(), s(G, null, [
        f(ct, {
          title: `Model Details: ${((x = m.value) == null ? void 0 : x.filename) || "Loading..."}`,
          size: "lg",
          loading: a.value,
          error: v.value,
          onClose: E[5] || (E[5] = (V) => P.$emit("close"))
        }, {
          body: i(() => {
            var V, q, ee, ne;
            return [
              m.value ? (o(), s("div", Wc, [
                e("section", Gc, [
                  e("div", jc, [
                    E[6] || (E[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Hc, l(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (A) => D(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", qc, [
                    E[7] || (E[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Kc, l(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (A) => D(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Jc, [
                    E[8] || (E[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Qc, l(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (A) => D(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Xc, [
                    E[9] || (E[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Yc, l(F(m.value.size)), 1)
                  ]),
                  e("div", Zc, [
                    E[10] || (E[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", eu, l(m.value.category), 1)
                  ]),
                  e("div", tu, [
                    E[11] || (E[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", ou, l(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", su, [
                  e("h4", nu, "Locations (" + l(((V = m.value.locations) == null ? void 0 : V.length) || 0) + ")", 1),
                  (q = m.value.locations) != null && q.length ? (o(), s("div", au, [
                    (o(!0), s(G, null, oe(m.value.locations, (A, Z) => (o(), s("div", {
                      key: Z,
                      class: "location-item"
                    }, [
                      e("span", lu, l(A.path), 1),
                      A.modified ? (o(), s("span", iu, "Modified: " + l(A.modified), 1)) : c("", !0),
                      A.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => z(A.path)
                      }, " Open File Location ", 8, ru)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", du, "No locations found"))
                ]),
                e("section", cu, [
                  e("h4", uu, "Download Sources (" + l(((ee = m.value.sources) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (ne = m.value.sources) != null && ne.length ? (o(), s("div", mu, [
                    (o(!0), s(G, null, oe(m.value.sources, (A, Z) => (o(), s("div", {
                      key: Z,
                      class: "source-item"
                    }, [
                      e("span", vu, l(A.type) + ":", 1),
                      e("a", {
                        href: A.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(A.url), 9, fu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === A.url,
                        onClick: (L) => M(A.url)
                      }, l(I.value === A.url ? "..." : "×"), 9, gu)
                    ]))), 128))
                  ])) : (o(), s("div", hu, " No download sources configured ")),
                  e("div", pu, [
                    mo(e("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (A) => _.value = A),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [vo, _.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !_.value.trim() || d.value,
                      onClick: H
                    }, l(d.value ? "Adding..." : "Add Source"), 9, yu)
                  ]),
                  k.value ? (o(), s("p", wu, l(k.value), 1)) : c("", !0),
                  N.value ? (o(), s("p", ku, l(N.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (V) => P.$emit("close"))
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
}), oo = /* @__PURE__ */ X(bu, [["__scopeId", "data-v-f15cbb56"]]), _u = /* @__PURE__ */ Q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: g } = Ie(), w = $([]), h = $([]), m = $("production"), a = $(!1), v = $(null), _ = $(""), d = $(!1), I = $(null);
    function k() {
      d.value = !1, n("navigate", "model-index");
    }
    const N = B(
      () => w.value.reduce((T, P) => T + (P.size || 0), 0)
    ), y = B(() => {
      if (!_.value.trim()) return w.value;
      const T = _.value.toLowerCase();
      return w.value.filter((P) => P.filename.toLowerCase().includes(T));
    }), C = B(() => {
      if (!_.value.trim()) return h.value;
      const T = _.value.toLowerCase();
      return h.value.filter((P) => P.filename.toLowerCase().includes(T));
    }), O = B(() => {
      const T = {};
      for (const E of y.value) {
        const x = E.type || "other";
        T[x] || (T[x] = []), T[x].push(E);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([E], [x]) => {
        const V = P.indexOf(E), q = P.indexOf(x);
        return V >= 0 && q >= 0 ? V - q : V >= 0 ? -1 : q >= 0 ? 1 : E.localeCompare(x);
      }).map(([E, x]) => ({ type: E, models: x }));
    });
    function F(T) {
      if (!T) return "Unknown";
      const P = T / (1024 * 1024);
      return P >= 1024 ? `${(P / 1024).toFixed(1)} GB` : `${P.toFixed(0)} MB`;
    }
    function D(T) {
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
        w.value = T, h.value = [];
        const P = await g();
        m.value = P.environment || "production";
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        a.value = !1;
      }
    }
    return _e(M), (T, P) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (E) => d.value = !0)
          })
        ]),
        search: i(() => [
          f(ut, {
            modelValue: _.value,
            "onUpdate:modelValue": P[1] || (P[1] = (E) => _.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (o(), S(Je, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            w.value.length ? (o(), S(mt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + l(w.value.length) + " models • " + l(F(N.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(G, null, oe(O.value, (E) => (o(), S(be, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(G, null, oe(E.models, (x) => (o(), S(xe, {
                  key: x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...P[4] || (P[4] = [
                    p("📦", -1)
                  ])]),
                  title: i(() => [
                    p(l(x.filename), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(F(x.size)), 1)
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
                    f(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => D(x)
                    }, {
                      default: i(() => [...P[5] || (P[5] = [
                        p(" View Details ", -1)
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
                (o(!0), s(G, null, oe(C.value, (E) => (o(), S(xe, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...P[6] || (P[6] = [
                    p("⚠", -1)
                  ])]),
                  title: i(() => [
                    p(l(E.filename), 1)
                  ]),
                  subtitle: i(() => [...P[7] || (P[7] = [
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
                    f(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (x) => H(E.filename)
                    }, {
                      default: i(() => [...P[8] || (P[8] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (x) => z(E.filename)
                    }, {
                      default: i(() => [...P[9] || (P[9] = [
                        p(" Search Workspace Index ", -1)
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
      f(qe, {
        show: d.value,
        title: "About Environment Models",
        onClose: P[2] || (P[2] = (E) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            P[10] || (P[10] = p(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            P[11] || (P[11] = p(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          f(Y, {
            variant: "primary",
            onClick: k
          }, {
            default: i(() => [...P[12] || (P[12] = [
              p(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(oo, {
        key: 0,
        identifier: I.value,
        onClose: P[3] || (P[3] = (E) => I.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), $u = /* @__PURE__ */ X(_u, [["__scopeId", "data-v-cb4f12b3"]]), Cu = {
  key: 0,
  class: "indexing-progress"
}, xu = { class: "progress-info" }, Su = { class: "progress-label" }, Iu = { class: "progress-count" }, Eu = { class: "progress-bar" }, Mu = { class: "modal-content" }, zu = { class: "modal-header" }, Lu = { class: "modal-body" }, Tu = { class: "input-group" }, Du = { class: "current-path" }, Nu = { class: "input-group" }, Ru = { class: "modal-footer" }, Ou = { class: "modal-content" }, Uu = { class: "modal-header" }, Pu = { class: "modal-body" }, Bu = { class: "input-group" }, Fu = { class: "input-group" }, Vu = { class: "modal-footer" }, Au = /* @__PURE__ */ Q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: g,
      setModelsDirectory: w
    } = Ie(), { addToQueue: h } = xt(), m = u, a = $([]), v = $(!1), _ = $(!1), d = $(null), I = $(""), k = $(!1), N = $(null), y = $(!1), C = $(null), O = $(""), F = $(!1), D = $(!1), z = $(""), H = $(""), M = $(null), T = B(
      () => a.value.reduce((L, b) => L + (b.size || 0), 0)
    ), P = B(() => {
      if (!I.value.trim()) return a.value;
      const L = I.value.toLowerCase();
      return a.value.filter((b) => {
        const ae = b, te = b.sha256 || ae.sha256_hash || "";
        return b.filename.toLowerCase().includes(L) || te.toLowerCase().includes(L);
      });
    }), E = B(() => {
      const L = {};
      for (const ae of P.value) {
        const te = ae.type || "other";
        L[te] || (L[te] = []), L[te].push(ae);
      }
      const b = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([ae], [te]) => {
        const me = b.indexOf(ae), pe = b.indexOf(te);
        return me >= 0 && pe >= 0 ? me - pe : me >= 0 ? -1 : pe >= 0 ? 1 : ae.localeCompare(te);
      }).map(([ae, te]) => ({ type: ae, models: te }));
    });
    function x(L) {
      if (!L) return "Unknown";
      const b = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return L >= b ? `${(L / b).toFixed(1)} GB` : L >= ae ? `${(L / ae).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function V(L) {
      N.value = L.hash || L.filename;
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
      h([{
        workflow: "__manual__",
        filename: L,
        url: z.value.trim(),
        targetPath: H.value.trim()
      }]), z.value = "", H.value = "", D.value = !1;
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
    return _e(() => {
      A(), Z();
    }), (L, b) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: b[2] || (b[2] = (ae) => k.value = !0)
          }, {
            actions: i(() => [
              f(Y, {
                variant: "primary",
                size: "sm",
                disabled: _.value,
                onClick: q
              }, {
                default: i(() => [
                  p(l(_.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(Y, {
                variant: "primary",
                size: "sm",
                onClick: b[0] || (b[0] = (ae) => y.value = !0)
              }, {
                default: i(() => [...b[15] || (b[15] = [
                  p(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(Y, {
                variant: "primary",
                size: "sm",
                onClick: b[1] || (b[1] = (ae) => D.value = !0)
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
                  p(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          M.value ? (o(), s("div", Cu, [
            e("div", xu, [
              e("span", Su, l(M.value.message), 1),
              e("span", Iu, l(M.value.current) + "/" + l(M.value.total), 1)
            ]),
            e("div", Eu, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          f(ut, {
            modelValue: I.value,
            "onUpdate:modelValue": b[3] || (b[3] = (ae) => I.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value || M.value ? (o(), S(Ke, {
            key: 0,
            message: M.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), S(Je, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            a.value.length ? (o(), S(mt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + l(a.value.length) + " models • " + l(x(T.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(G, null, oe(E.value, (ae) => (o(), S(be, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(G, null, oe(ae.models, (te) => (o(), S(xe, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...b[17] || (b[17] = [
                    p("📦", -1)
                  ])]),
                  title: i(() => [
                    p(l(te.filename), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(x(te.size)), 1)
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
                    f(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (me) => V(te)
                    }, {
                      default: i(() => [...b[18] || (b[18] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            P.value.length ? c("", !0) : (o(), S(Pe, {
              key: 1,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: b[4] || (b[4] = (ae) => k.value = !1)
      }, {
        content: i(() => [...b[19] || (b[19] = [
          e("p", null, [
            p(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            p(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      N.value ? (o(), S(oo, {
        key: 0,
        identifier: N.value,
        onClose: b[5] || (b[5] = (ae) => N.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), S(Se, { to: "body" }, [
        y.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[9] || (b[9] = ke((ae) => y.value = !1, ["self"]))
        }, [
          e("div", Mu, [
            e("div", zu, [
              b[20] || (b[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[6] || (b[6] = (ae) => y.value = !1)
              }, "✕")
            ]),
            e("div", Lu, [
              e("div", Tu, [
                b[21] || (b[21] = e("label", null, "Current Directory", -1)),
                e("code", Du, l(C.value || "Not set"), 1)
              ]),
              e("div", Nu, [
                b[22] || (b[22] = e("label", null, "New Directory Path", -1)),
                f(Ue, {
                  modelValue: O.value,
                  "onUpdate:modelValue": b[7] || (b[7] = (ae) => O.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              b[23] || (b[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Ru, [
              f(re, {
                variant: "secondary",
                onClick: b[8] || (b[8] = (ae) => y.value = !1)
              }, {
                default: i(() => [...b[24] || (b[24] = [
                  p(" Cancel ", -1)
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
                  p(l(F.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), S(Se, { to: "body" }, [
        D.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[14] || (b[14] = ke((ae) => D.value = !1, ["self"]))
        }, [
          e("div", Ou, [
            e("div", Uu, [
              b[25] || (b[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[10] || (b[10] = (ae) => D.value = !1)
              }, "✕")
            ]),
            e("div", Pu, [
              e("div", Bu, [
                b[26] || (b[26] = e("label", null, "Download URL", -1)),
                f(Ue, {
                  modelValue: z.value,
                  "onUpdate:modelValue": b[11] || (b[11] = (ae) => z.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Fu, [
                b[27] || (b[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Ue, {
                  modelValue: H.value,
                  "onUpdate:modelValue": b[12] || (b[12] = (ae) => H.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              b[28] || (b[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Vu, [
              f(re, {
                variant: "secondary",
                onClick: b[13] || (b[13] = (ae) => D.value = !1)
              }, {
                default: i(() => [...b[29] || (b[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(re, {
                variant: "primary",
                disabled: !z.value.trim() || !H.value.trim(),
                onClick: ne
              }, {
                default: i(() => [...b[30] || (b[30] = [
                  p(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), Wu = /* @__PURE__ */ X(Au, [["__scopeId", "data-v-73b78d84"]]), Gu = { class: "node-details" }, ju = { class: "status-row" }, Hu = {
  key: 0,
  class: "detail-row"
}, qu = { class: "value" }, Ku = { class: "detail-row" }, Ju = { class: "value" }, Qu = {
  key: 1,
  class: "detail-row"
}, Xu = { class: "value mono" }, Yu = {
  key: 2,
  class: "detail-row"
}, Zu = ["href"], em = {
  key: 3,
  class: "detail-row"
}, tm = { class: "value mono small" }, om = { class: "detail-row" }, sm = {
  key: 0,
  class: "value"
}, nm = {
  key: 1,
  class: "workflow-list"
}, am = /* @__PURE__ */ Q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), w = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, a) => (o(), S(ct, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: a[1] || (a[1] = (v) => r("close"))
    }, {
      body: i(() => [
        e("div", Gu, [
          e("div", ju, [
            a[2] || (a[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", g.value])
            }, l(w.value), 3)
          ]),
          t.node.version ? (o(), s("div", Hu, [
            a[3] || (a[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", qu, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : c("", !0),
          e("div", Ku, [
            a[4] || (a[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Ju, l(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", Qu, [
            a[5] || (a[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Xu, l(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), s("div", Yu, [
            a[7] || (a[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              p(l(t.node.repository) + " ", 1),
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
            ], 8, Zu)
          ])) : c("", !0),
          t.node.download_url ? (o(), s("div", em, [
            a[8] || (a[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", tm, l(t.node.download_url), 1)
          ])) : c("", !0),
          a[10] || (a[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", om, [
            a[9] || (a[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", sm, " Not used in any workflows ")) : (o(), s("div", nm, [
              (o(!0), s(G, null, oe(t.node.used_in_workflows, (v) => (o(), s("span", {
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
            p(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), lm = /* @__PURE__ */ X(am, [["__scopeId", "data-v-b342f626"]]), im = { key: 0 }, rm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, dm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, cm = /* @__PURE__ */ Q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: g, installNode: w, uninstallNode: h } = Ie(), m = $({
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
    }), N = B(
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
    function D(E) {
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
          x.status === "success" ? (alert(`Node "${E}" is now tracked as development!`), await P()) : alert(`Failed to track node: ${x.message || "Unknown error"}`);
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
          const x = await h(E);
          x.status === "success" ? (alert(`Node "${E}" removed!`), await P()) : alert(`Failed to remove node: ${x.message || "Unknown error"}`);
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
          x.status === "success" ? (alert(`Node "${E}" installed successfully!`), await P()) : alert(`Failed to install node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error installing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function P() {
      a.value = !0, v.value = null;
      try {
        m.value = await r();
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load nodes";
      } finally {
        a.value = !1;
      }
    }
    return _e(P), (E, x) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (V) => d.value = !0)
          }, {
            actions: i(() => [
              f(Y, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: i(() => [...x[5] || (x[5] = [
                  p(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(ut, {
            modelValue: _.value,
            "onUpdate:modelValue": x[1] || (x[1] = (V) => _.value = V),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (o(), S(Je, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            m.value.total_count ? (o(), S(mt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(l(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(G, { key: 0 }, [
                  p(" • " + l(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (o(), s(G, { key: 1 }, [
                  p(" • " + l(m.value.untracked_count) + " untracked", 1)
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
                (o(!0), s(G, null, oe(C.value, (V) => (o(), S(xe, {
                  key: V.name,
                  status: "warning"
                }, {
                  icon: i(() => [...x[6] || (x[6] = [
                    p("?", -1)
                  ])]),
                  title: i(() => [
                    p(l(V.name), 1)
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
                    f(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => D(V)
                    }, {
                      default: i(() => [...x[8] || (x[8] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => H(V.name)
                    }, {
                      default: i(() => [...x[9] || (x[9] = [
                        p(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Y, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (q) => M(V.name)
                    }, {
                      default: i(() => [...x[10] || (x[10] = [
                        p(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            N.value.length ? (o(), S(be, {
              key: 2,
              title: "INSTALLED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(G, null, oe(N.value, (V) => (o(), S(xe, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    p(l(V.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: i(() => [
                    V.version ? (o(), s("span", im, l(V.source === "development" ? "" : "v") + l(V.version), 1)) : (o(), s("span", rm, "version unknown")),
                    e("span", dm, " • " + l(O(V.source)), 1)
                  ]),
                  details: i(() => [
                    f(ye, {
                      label: "Used by:",
                      value: F(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => D(V)
                    }, {
                      default: i(() => [...x[11] || (x[11] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: z
                    }, {
                      default: i(() => [...x[12] || (x[12] = [
                        p(" Manage ", -1)
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
                (o(!0), s(G, null, oe(y.value, (V) => (o(), S(xe, {
                  key: V.name,
                  status: "missing"
                }, {
                  icon: i(() => [...x[13] || (x[13] = [
                    p("!", -1)
                  ])]),
                  title: i(() => [
                    p(l(V.name), 1)
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
                    f(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => D(V)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => T(V.name)
                    }, {
                      default: i(() => [...x[16] || (x[16] = [
                        p(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !N.value.length && !y.value.length && !C.value.length ? (o(), S(Pe, {
              key: 4,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: x[3] || (x[3] = (V) => d.value = !1)
      }, {
        content: i(() => [...x[17] || (x[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            p(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            p(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            p(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          f(Y, {
            variant: "primary",
            onClick: x[2] || (x[2] = (V) => d.value = !1)
          }, {
            default: i(() => [...x[18] || (x[18] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(lm, {
        key: 0,
        node: I.value,
        onClose: x[4] || (x[4] = (V) => I.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), um = /* @__PURE__ */ X(cm, [["__scopeId", "data-v-4ac1465a"]]), mm = { class: "remote-url-display" }, vm = ["title"], fm = ["title"], gm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, hm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, pm = /* @__PURE__ */ Q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = $(!1), r = B(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const w = u.url.slice(0, Math.floor(u.maxLength * 0.6)), h = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${w}...${h}`;
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
    return (w, h) => (o(), s("div", mm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, vm),
      e("button", {
        class: se(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", hm, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", gm, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, fm)
    ]));
  }
}), Ht = /* @__PURE__ */ X(pm, [["__scopeId", "data-v-7768a58d"]]), ym = { class: "remote-title" }, wm = {
  key: 0,
  class: "default-badge"
}, km = {
  key: 1,
  class: "sync-badge"
}, bm = {
  key: 0,
  class: "ahead"
}, _m = {
  key: 1,
  class: "behind"
}, $m = {
  key: 0,
  class: "tracking-info"
}, Cm = /* @__PURE__ */ Q({
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
    function h(m) {
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
        p(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", ym, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), s("span", wm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", km, [
            t.syncStatus.ahead > 0 ? (o(), s("span", bm, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", _m, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        w.value ? (o(), s("span", $m, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
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
              e("span", null, l(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        f(Y, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: a[0] || (a[0] = (v) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...a[3] || (a[3] = [
            p(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(Y, {
          variant: "secondary",
          size: "xs",
          onClick: a[1] || (a[1] = (v) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...a[4] || (a[4] = [
            p(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), S(Y, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: a[2] || (a[2] = (v) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...a[5] || (a[5] = [
            p(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), xm = /* @__PURE__ */ X(Cm, [["__scopeId", "data-v-17362e45"]]), Sm = ["for"], Im = {
  key: 0,
  class: "base-form-field-required"
}, Em = { class: "base-form-field-input" }, Mm = {
  key: 1,
  class: "base-form-field-error"
}, zm = {
  key: 2,
  class: "base-form-field-hint"
}, Lm = /* @__PURE__ */ Q({
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
        p(l(t.label) + " ", 1),
        t.required ? (o(), s("span", Im, "*")) : c("", !0)
      ], 8, Sm)) : c("", !0),
      e("div", Em, [
        ce(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Mm, l(t.error), 1)) : t.hint ? (o(), s("span", zm, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ X(Lm, [["__scopeId", "data-v-9a1cf296"]]), Tm = { class: "remote-form" }, Dm = { class: "form-header" }, Nm = { class: "form-body" }, Rm = {
  key: 0,
  class: "form-error"
}, Om = { class: "form-actions" }, Um = /* @__PURE__ */ Q({
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
    }), w = $(!1), h = $(null);
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
        h.value = null, w.value = !0;
        try {
          r("submit", g.value);
        } catch (v) {
          h.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          w.value = !1;
        }
      }
    }
    return (v, _) => (o(), s("div", Tm, [
      e("div", Dm, [
        f(Re, null, {
          default: i(() => [
            p(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Nm, [
        f(Dt, {
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
        f(Dt, {
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
        f(Dt, { label: "Push URL (optional)" }, {
          default: i(() => [
            f(Ue, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": _[2] || (_[2] = (d) => g.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", Rm, l(h.value), 1)) : c("", !0)
      ]),
      e("div", Om, [
        f(Y, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: w.value,
          onClick: a
        }, {
          default: i(() => [
            p(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(Y, {
          variant: "ghost",
          size: "md",
          onClick: _[3] || (_[3] = (d) => v.$emit("cancel"))
        }, {
          default: i(() => [..._[4] || (_[4] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Pm = /* @__PURE__ */ X(Um, [["__scopeId", "data-v-56021b18"]]), Bm = { key: 0 }, Fm = /* @__PURE__ */ Q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: w,
      getRemoteSyncStatus: h
    } = Ie(), m = $([]), a = $(null), v = $({}), _ = $(!1), d = $(null), I = $(""), k = $(!1), N = $(null), y = $(!1), C = $("add"), O = $({
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
    function D(q) {
      var ee;
      return ((ee = a.value) == null ? void 0 : ee.remote) === q;
    }
    async function z() {
      _.value = !0, d.value = null;
      try {
        const q = await u();
        m.value = q.remotes, a.value = q.current_branch_tracking || null, await Promise.all(
          q.remotes.map(async (ee) => {
            const ne = await h(ee.name);
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
    function P() {
      y.value = !1, O.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function E(q) {
      N.value = q;
      try {
        await w(q);
        const ee = await h(q);
        ee && (v.value[q] = ee);
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Fetch failed";
      } finally {
        N.value = null;
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
    return _e(z), (q, ee) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (ne) => k.value = !0)
          }, {
            actions: i(() => [
              y.value ? c("", !0) : (o(), S(Y, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: i(() => [...ee[3] || (ee[3] = [
                  p(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          y.value ? c("", !0) : (o(), S(ut, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (ne) => I.value = ne),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          _.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), S(Je, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            y.value ? (o(), S(Pm, {
              key: 0,
              mode: C.value,
              "remote-name": O.value.name,
              "fetch-url": O.value.fetchUrl,
              "push-url": O.value.pushUrl,
              onSubmit: T,
              onCancel: P
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !y.value ? (o(), S(mt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                a.value ? (o(), s("span", Bm, " • Tracking: " + l(a.value.remote) + "/" + l(a.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            F.value.length && !y.value ? (o(), S(be, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: i(() => [
                (o(!0), s(G, null, oe(F.value, (ne) => {
                  var A;
                  return o(), S(xm, {
                    key: ne.name,
                    remote: ne,
                    "sync-status": v.value[ne.name],
                    "tracking-branch": D(ne.name) ? (A = a.value) == null ? void 0 : A.branch : void 0,
                    "fetching-remote": N.value,
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
                f(Y, {
                  variant: "primary",
                  onClick: H
                }, {
                  default: i(() => [...ee[4] || (ee[4] = [
                    p(" Add Your First Remote ", -1)
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
      f(qe, {
        show: k.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (ne) => k.value = !1)
      }, {
        content: i(() => [...ee[5] || (ee[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            p(" The "),
            e("strong", null, '"origin"'),
            p(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          f(Y, {
            variant: "link",
            onClick: V
          }, {
            default: i(() => [...ee[6] || (ee[6] = [
              p(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vm = /* @__PURE__ */ X(Fm, [["__scopeId", "data-v-a75719bb"]]), Am = { class: "setting-info" }, Wm = { class: "setting-label" }, Gm = {
  key: 0,
  class: "required-marker"
}, jm = {
  key: 0,
  class: "setting-description"
}, Hm = { class: "setting-control" }, qm = /* @__PURE__ */ Q({
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
      e("div", Am, [
        e("div", Wm, [
          p(l(t.label) + " ", 1),
          t.required ? (o(), s("span", Gm, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", jm, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Hm, [
        ce(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ X(qm, [["__scopeId", "data-v-cb5d236c"]]), Km = { class: "toggle" }, Jm = ["checked", "disabled"], Qm = /* @__PURE__ */ Q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", Km, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Jm),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), tt = /* @__PURE__ */ X(Qm, [["__scopeId", "data-v-71c0f550"]]), Xm = { class: "settings-section" }, Ym = { class: "path-setting" }, Zm = { class: "path-value" }, ev = { class: "path-setting" }, tv = { class: "path-value" }, ov = { class: "settings-section" }, sv = { class: "settings-section" }, nv = { class: "settings-section" }, av = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Ie(), r = $(!1), g = $(null), w = $(null), h = $(null), m = $(null), a = $(""), v = $(""), _ = $(!0), d = $(!0), I = $(!1), k = B(() => m.value ? a.value !== (m.value.civitai_api_key || "") : !1);
    async function N() {
      r.value = !0, g.value = null;
      try {
        h.value = await u(), m.value = { ...h.value }, a.value = h.value.civitai_api_key || "", v.value = h.value.huggingface_token || "", _.value = h.value.auto_sync_models, d.value = h.value.confirm_destructive;
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
        const D = {};
        a.value !== (((F = m.value) == null ? void 0 : F.civitai_api_key) || "") && (D.civitai_api_key = a.value || null), await n(D), await N(), w.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          w.value = null;
        }, 3e3);
      } catch (D) {
        w.value = {
          type: "error",
          message: D instanceof Error ? D.message : "Failed to save settings"
        };
      }
    }
    function C() {
      m.value && (a.value = m.value.civitai_api_key || "", v.value = m.value.huggingface_token || "", _.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, w.value = null);
    }
    function O(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return _e(N), (F, D) => (o(), S(Te, null, {
      header: i(() => [
        f(De, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            f(Y, {
              variant: "primary",
              size: "sm",
              disabled: !k.value,
              onClick: y
            }, {
              default: i(() => [...D[5] || (D[5] = [
                p(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            k.value ? (o(), S(Y, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: C
            }, {
              default: i(() => [...D[6] || (D[6] = [
                p(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), S(Ke, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), S(Je, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: N
        }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
          f(be, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var z, H;
              return [
                e("div", Xm, [
                  e("div", Ym, [
                    D[7] || (D[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    D[8] || (D[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Zm, l(((z = h.value) == null ? void 0 : z.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", ev, [
                    D[9] || (D[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    D[10] || (D[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", tv, l(((H = h.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(be, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", ov, [
                f(Ge, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    f(Ct, {
                      modelValue: a.value,
                      "onUpdate:modelValue": D[0] || (D[0] = (z) => a.value = z),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ge, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(Ct, {
                      modelValue: v.value,
                      "onUpdate:modelValue": D[1] || (D[1] = (z) => v.value = z),
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
              e("div", sv, [
                f(Ge, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    f(tt, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        D[2] || (D[2] = (z) => I.value = z),
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
              e("div", nv, [
                f(Ge, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(tt, {
                      modelValue: _.value,
                      "onUpdate:modelValue": D[3] || (D[3] = (z) => _.value = z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ge, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(tt, {
                      modelValue: d.value,
                      "onUpdate:modelValue": D[4] || (D[4] = (z) => d.value = z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          w.value ? (o(), S(mt, {
            key: 0,
            variant: (w.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: He({ color: w.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(w.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), lv = /* @__PURE__ */ X(av, [["__scopeId", "data-v-7861bd35"]]), iv = /* @__PURE__ */ Q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Ie(), n = $([]), r = $(!1), g = $(null), w = $(!1), h = $(null), m = B(() => n.value.length === 0 ? [] : n.value.map((v) => ({
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
          (v = h.value) != null && v.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(a), (v, _) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (d) => w.value = !0)
          }, {
            actions: i(() => [
              f(Y, {
                variant: "secondary",
                size: "sm",
                onClick: a,
                disabled: r.value
              }, {
                default: i(() => [
                  p(l(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), S(Je, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: a
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            n.value.length === 0 ? (o(), S(Pe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(G, null, oe(m.value, (d, I) => (o(), s("div", {
                key: I,
                class: se(`log-line log-level-${d.level.toLowerCase()}`)
              }, l(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
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
            p(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            p(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            p(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            p(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: i(() => [
          f(Y, {
            variant: "primary",
            onClick: _[1] || (_[1] = (d) => w.value = !1)
          }, {
            default: i(() => [..._[4] || (_[4] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), rv = /* @__PURE__ */ X(iv, [["__scopeId", "data-v-39f6a756"]]), dv = /* @__PURE__ */ Q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Ie(), r = $([]), g = $(!1), w = $(null), h = $(!1), m = $("production"), a = $(null), v = B(() => r.value.length === 0 ? [] : r.value.map((d) => ({
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
    return _e(_), (d, I) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (k) => h.value = !0)
          }, {
            actions: i(() => [
              f(Y, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: g.value
              }, {
                default: i(() => [
                  p(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          g.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading environment logs..."
          })) : w.value ? (o(), S(Je, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
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
              (o(!0), s(G, null, oe(v.value, (k, N) => (o(), s("div", {
                key: N,
                class: se(`log-line log-level-${k.level.toLowerCase()}`)
              }, l(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: h.value,
        title: "About Environment Logs",
        onClose: I[2] || (I[2] = (k) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            I[3] || (I[3] = p(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            I[4] || (I[4] = p(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          I[5] || (I[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            p(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            p(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            p(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            p(" Detailed debugging information ")
          ], -1)),
          I[6] || (I[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          f(Y, {
            variant: "primary",
            onClick: I[1] || (I[1] = (k) => h.value = !1)
          }, {
            default: i(() => [...I[7] || (I[7] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), cv = /* @__PURE__ */ X(dv, [["__scopeId", "data-v-4f1e6f72"]]), uv = { class: "env-title" }, mv = {
  key: 0,
  class: "current-badge"
}, vv = {
  key: 0,
  class: "branch-info"
}, fv = /* @__PURE__ */ Q({
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
        p(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", uv, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", mv, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", vv, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          p(" " + l(t.currentBranch), 1)
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
        ce(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), gv = /* @__PURE__ */ X(fv, [["__scopeId", "data-v-5238e57c"]]), hv = {
  key: 0,
  class: "create-form"
}, pv = { class: "create-form__header" }, yv = { class: "create-form__body" }, wv = { class: "create-form__actions" }, kv = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, bv = /* @__PURE__ */ Q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironments: r } = Ie(), g = $([]), w = $(!1), h = $(null), m = $(""), a = $(!1), v = $(!1), _ = $(""), d = B(
      () => g.value.find((D) => D.is_current)
    ), I = B(() => {
      if (!m.value.trim()) return g.value;
      const D = m.value.toLowerCase();
      return g.value.filter(
        (z) => {
          var H;
          return z.name.toLowerCase().includes(D) || ((H = z.current_branch) == null ? void 0 : H.toLowerCase().includes(D));
        }
      );
    });
    function k(D) {
      if (!D) return "";
      try {
        const z = new Date(D), M = (/* @__PURE__ */ new Date()).getTime() - z.getTime(), T = Math.floor(M / 6e4), P = Math.floor(M / 36e5), E = Math.floor(M / 864e5);
        return T < 1 ? "just now" : T < 60 ? `${T} ${T === 1 ? "minute" : "minutes"} ago` : P < 24 ? `${P} ${P === 1 ? "hour" : "hours"} ago` : E < 30 ? `${E} ${E === 1 ? "day" : "days"} ago` : z.toLocaleDateString();
      } catch {
        return D;
      }
    }
    function N() {
      const D = _.value.trim();
      D && (n("create", D), _.value = "", v.value = !1);
    }
    function y() {
      _.value = "", v.value = !1;
    }
    function C(D) {
      n("viewDetails", D);
    }
    function O(D) {
      confirm(`Delete environment "${D}"?

This action cannot be undone.`) && n("delete", D);
    }
    async function F() {
      w.value = !0, h.value = null;
      try {
        g.value = await r();
      } catch (D) {
        h.value = D instanceof Error ? D.message : "Failed to load environments";
      } finally {
        w.value = !1;
      }
    }
    return _e(F), (D, z) => {
      const H = fo("SectionGroup");
      return o(), s(G, null, [
        f(Te, null, {
          header: i(() => [
            f(De, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: z[1] || (z[1] = (M) => a.value = !0)
            }, {
              actions: i(() => [
                f(Y, {
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
                f(Y, {
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
            f(ut, {
              modelValue: m.value,
              "onUpdate:modelValue": z[2] || (z[2] = (M) => m.value = M),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: i(() => [
            w.value ? (o(), S(Ke, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), S(Je, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: F
            }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
              v.value ? (o(), s("div", hv, [
                e("div", pv, [
                  z[10] || (z[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  f(Y, {
                    variant: "ghost",
                    size: "xs",
                    onClick: y
                  }, {
                    default: i(() => [...z[9] || (z[9] = [
                      p(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", yv, [
                  f(Ct, {
                    modelValue: _.value,
                    "onUpdate:modelValue": z[3] || (z[3] = (M) => _.value = M),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      je(N, ["enter"]),
                      je(y, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", wv, [
                    f(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: N,
                      disabled: !_.value.trim()
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
                        p(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    f(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: y
                    }, {
                      default: i(() => [...z[12] || (z[12] = [
                        p(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), S(mt, {
                key: 1,
                variant: "compact"
              }, {
                default: i(() => [
                  p(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  d.value ? (o(), s(G, { key: 0 }, [
                    z[13] || (z[13] = p(" • Current: ", -1)),
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
                  (o(!0), s(G, null, oe(I.value, (M) => (o(), S(gv, {
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
                      M.is_current ? c("", !0) : (o(), S(Y, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (T) => D.$emit("switch", M.name)
                      }, {
                        default: i(() => [...z[14] || (z[14] = [
                          p(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      f(Y, {
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
                      !M.is_current && g.value.length > 1 ? (o(), S(Y, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (T) => O(M.name),
                        title: "Delete environment"
                      }, {
                        default: i(() => [
                          (o(), s("svg", kv, [...z[16] || (z[16] = [
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
                    f(Y, {
                      variant: "primary",
                      onClick: z[4] || (z[4] = (M) => v.value = !0)
                    }, {
                      default: i(() => [...z[17] || (z[17] = [
                        p(" Create Environment ", -1)
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
        f(qe, {
          show: a.value,
          title: "About Environments",
          onClose: z[6] || (z[6] = (M) => a.value = !1)
        }, {
          content: i(() => [...z[18] || (z[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              p(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            f(Y, {
              variant: "secondary",
              onClick: z[5] || (z[5] = (M) => a.value = !1)
            }, {
              default: i(() => [...z[19] || (z[19] = [
                p(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), _v = /* @__PURE__ */ X(bv, [["__scopeId", "data-v-97d6527d"]]), $v = { class: "file-path" }, Cv = { class: "file-path-text" }, xv = ["title"], Sv = /* @__PURE__ */ Q({
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
    return (g, w) => (o(), s("div", $v, [
      w[0] || (w[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Cv, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, xv)) : c("", !0)
    ]));
  }
}), Iv = /* @__PURE__ */ X(Sv, [["__scopeId", "data-v-f0982173"]]), Ev = { class: "output-path-input" }, Mv = { class: "export-actions" }, zv = {
  key: 1,
  class: "export-warning"
}, Lv = /* @__PURE__ */ Q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Ie(), n = $(""), r = $(!1), g = $(null), w = $(!1);
    async function h() {
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
    return (a, v) => (o(), s(G, null, [
      f(Te, null, {
        header: i(() => [
          f(De, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              f(Y, {
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
                  p("📦", -1)
                ])]),
                title: i(() => [...v[7] || (v[7] = [
                  p("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...v[8] || (v[8] = [
                  p(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
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
                  p("📁", -1)
                ])]),
                title: i(() => [...v[10] || (v[10] = [
                  p("Output Destination", -1)
                ])]),
                subtitle: i(() => [...v[11] || (v[11] = [
                  p(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", Ev, [
                    f(Ct, {
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
              e("div", Mv, [
                f(Y, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
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
                    p(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), S(Y, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: v[2] || (v[2] = (_) => n.value = "")
                }, {
                  default: i(() => [...v[13] || (v[13] = [
                    p(" Clear Path ", -1)
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
                  p(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  p(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  p(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    f(ye, { label: "Saved to:" }, {
                      default: i(() => [
                        f(Iv, {
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
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), s("div", zv, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    f(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...v[15] || (v[15] = [
                        p(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(Y, {
                      variant: "ghost",
                      size: "sm",
                      onClick: v[3] || (v[3] = (_) => g.value = null)
                    }, {
                      default: i(() => [...v[16] || (v[16] = [
                        p(" Dismiss ", -1)
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
      f(qe, {
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
            p(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Tv = /* @__PURE__ */ X(Lv, [["__scopeId", "data-v-1777a9d5"]]), Dv = { class: "file-input-wrapper" }, Nv = ["accept", "multiple", "disabled"], Rv = /* @__PURE__ */ Q({
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
    function h(m) {
      const a = m.target;
      a.files && a.files.length > 0 && (r("change", a.files), a.value = "");
    }
    return u({
      triggerInput: w
    }), (m, a) => (o(), s("div", Dv, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Nv),
      f(Y, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: w
      }, {
        default: i(() => [
          ce(m.$slots, "default", {}, () => [
            a[0] || (a[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            p(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Ov = /* @__PURE__ */ X(Rv, [["__scopeId", "data-v-cd192091"]]), Uv = {
  key: 0,
  class: "drop-zone-empty"
}, Pv = { class: "drop-zone-text" }, Bv = { class: "drop-zone-primary" }, Fv = { class: "drop-zone-secondary" }, Vv = { class: "drop-zone-actions" }, Av = {
  key: 1,
  class: "drop-zone-file"
}, Wv = { class: "file-info" }, Gv = { class: "file-details" }, jv = { class: "file-name" }, Hv = { class: "file-size" }, qv = /* @__PURE__ */ Q({
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
    const n = u, r = $(!1), g = $(null), w = $(0), h = B(() => g.value !== null), m = B(() => {
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
      O && O.length > 0 && N(O[0]);
    }
    function k(C) {
      C.length > 0 && N(C[0]);
    }
    function N(C) {
      g.value = C, n("fileSelected", C);
    }
    function y() {
      g.value = null, n("clear");
    }
    return (C, O) => (o(), s("div", {
      class: se(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: ke(v, ["prevent"]),
      onDragover: ke(_, ["prevent"]),
      onDragleave: ke(d, ["prevent"]),
      onDrop: ke(I, ["prevent"])
    }, [
      h.value ? (o(), s("div", Av, [
        e("div", Wv, [
          O[1] || (O[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Gv, [
            e("div", jv, l(m.value), 1),
            e("div", Hv, l(a.value), 1)
          ])
        ]),
        f(Y, {
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
      ])) : (o(), s("div", Uv, [
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
        e("div", Pv, [
          e("p", Bv, l(t.primaryText), 1),
          e("p", Fv, l(t.secondaryText), 1)
        ]),
        e("div", Vv, [
          f(Ov, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: k
          }, {
            default: i(() => [
              p(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Kv = /* @__PURE__ */ X(qv, [["__scopeId", "data-v-e00abbca"]]), Jv = { class: "import-preview" }, Qv = { class: "preview-header" }, Xv = {
  key: 0,
  class: "source-env"
}, Yv = { class: "preview-content" }, Zv = { class: "preview-section" }, ef = { class: "section-header" }, tf = { class: "section-info" }, of = { class: "section-count" }, sf = {
  key: 0,
  class: "item-list"
}, nf = { class: "item-name" }, af = {
  key: 0,
  class: "item-more"
}, lf = { class: "preview-section" }, rf = { class: "section-header" }, df = { class: "section-info" }, cf = { class: "section-count" }, uf = {
  key: 0,
  class: "item-list"
}, mf = { class: "item-details" }, vf = { class: "item-name" }, ff = { class: "item-meta" }, gf = {
  key: 0,
  class: "item-more"
}, hf = { class: "preview-section" }, pf = { class: "section-header" }, yf = { class: "section-info" }, wf = { class: "section-count" }, kf = {
  key: 0,
  class: "item-list"
}, bf = { class: "item-name" }, _f = {
  key: 0,
  class: "item-more"
}, $f = {
  key: 0,
  class: "preview-section"
}, Cf = { class: "git-info" }, xf = /* @__PURE__ */ Q({
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
    function w(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, m) => (o(), s("div", Jv, [
      e("div", Qv, [
        f(Re, null, {
          default: i(() => [...m[0] || (m[0] = [
            p("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Xv, [
          m[1] || (m[1] = p(" From: ", -1)),
          f(Ot, null, {
            default: i(() => [
              p(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Yv, [
        e("div", Zv, [
          e("div", ef, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", tf, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", of, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", sf, [
            (o(!0), s(G, null, oe(t.workflows.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", nf, l(a), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", af, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", lf, [
          e("div", rf, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", df, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", cf, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", uf, [
            (o(!0), s(G, null, oe(t.models.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", mf, [
                e("span", vf, l(a.filename), 1),
                e("span", ff, l(w(a.size)) + " • " + l(a.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", gf, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", hf, [
          e("div", pf, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", yf, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", wf, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", kf, [
            (o(!0), s(G, null, oe(t.nodes.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", bf, l(a), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", _f, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", $f, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Cf, [
            t.gitBranch ? (o(), S(ye, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                f(Ot, null, {
                  default: i(() => [
                    p(l(t.gitBranch), 1)
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
                f(Yt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Sf = /* @__PURE__ */ X(xf, [["__scopeId", "data-v-182fe113"]]), If = { class: "import-options" }, Ef = { class: "options-container" }, Mf = { class: "option-section" }, zf = { class: "conflict-options" }, Lf = ["value", "checked", "onChange"], Tf = { class: "conflict-content" }, Df = { class: "conflict-label" }, Nf = { class: "conflict-description" }, Rf = { class: "option-section" }, Of = { class: "component-toggles" }, Uf = /* @__PURE__ */ Q({
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
    return (g, w) => (o(), s("div", If, [
      f(Re, null, {
        default: i(() => [...w[4] || (w[4] = [
          p("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Ef, [
        e("div", Mf, [
          f(Rt, null, {
            default: i(() => [...w[5] || (w[5] = [
              p("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", zf, [
            (o(), s(G, null, oe(r, (h) => e("label", {
              key: h.value,
              class: se(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (m) => n("update:conflictMode", h.value)
              }, null, 40, Lf),
              e("div", Tf, [
                e("span", Df, l(h.label), 1),
                e("span", Nf, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Rf, [
          f(Rt, null, {
            default: i(() => [...w[6] || (w[6] = [
              p("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Of, [
            f(Ge, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                f(tt, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": w[0] || (w[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                f(tt, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": w[1] || (w[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                f(tt, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": w[2] || (w[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                f(tt, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": w[3] || (w[3] = (h) => n("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Pf = /* @__PURE__ */ X(Uf, [["__scopeId", "data-v-0ec212b0"]]), Bf = {
  key: 0,
  class: "import-empty"
}, Ff = { class: "import-help" }, Vf = {
  key: 1,
  class: "import-configure"
}, Af = { class: "selected-file-bar" }, Wf = { class: "file-bar-content" }, Gf = { class: "file-bar-info" }, jf = { class: "file-bar-name" }, Hf = { class: "file-bar-size" }, qf = { class: "import-actions" }, Kf = {
  key: 2,
  class: "import-progress"
}, Jf = { class: "progress-content" }, Qf = { class: "progress-info" }, Xf = { class: "progress-title" }, Yf = { class: "progress-detail" }, Zf = { class: "progress-bar" }, eg = { class: "progress-status" }, tg = {
  key: 3,
  class: "import-complete"
}, og = { class: "complete-message" }, sg = { class: "complete-title" }, ng = { class: "complete-details" }, ag = { class: "complete-actions" }, lg = /* @__PURE__ */ Q({
  __name: "ImportSection",
  setup(t) {
    const u = $(null), n = $(!1), r = $(!1), g = $(!1), w = $(""), h = $({
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
    }), v = B(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
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
    function N(y) {
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (y, C) => (o(), S(Te, null, {
      header: i(() => [
        f(De, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (o(), s("div", Bf, [
          f(Kv, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: _
          }),
          e("div", Ff, [
            f(Re, null, {
              default: i(() => [...C[5] || (C[5] = [
                p("How to Import", -1)
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
        ])) : u.value && !n.value && !r.value ? (o(), s("div", Vf, [
          e("div", Af, [
            e("div", Wf, [
              C[7] || (C[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Gf, [
                e("div", jf, l(u.value.name), 1),
                e("div", Hf, l(N(u.value.size)), 1)
              ])
            ]),
            f(Y, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: i(() => [...C[8] || (C[8] = [
                p(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(Sf, {
            "source-environment": a.value.sourceEnvironment,
            workflows: a.value.workflows,
            models: a.value.models,
            nodes: a.value.nodes,
            "git-branch": a.value.gitBranch,
            "git-commit": a.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Pf, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": C[0] || (C[0] = (O) => h.value.conflictMode = O),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": C[1] || (C[1] = (O) => h.value.includeWorkflows = O),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": C[2] || (C[2] = (O) => h.value.includeModels = O),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": C[3] || (C[3] = (O) => h.value.includeNodes = O),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": C[4] || (C[4] = (O) => h.value.includeGitHistory = O)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && a.value.models.length > 0 ? (o(), S(lt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${a.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", qf, [
            f(Y, {
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
                p(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f(Y, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: i(() => [...C[10] || (C[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Kf, [
          e("div", Jf, [
            C[11] || (C[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Qf, [
              e("div", Xf, l(m.value.message), 1),
              e("div", Yf, l(m.value.detail), 1)
            ])
          ]),
          e("div", Zf, [
            e("div", {
              class: "progress-bar-fill",
              style: He({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", eg, l(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", tg, [
          e("div", {
            class: se(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", og, [
            e("div", sg, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", ng, l(w.value), 1)
          ]),
          e("div", ag, [
            f(Y, {
              variant: "primary",
              size: "md",
              onClick: I
            }, {
              default: i(() => [...C[12] || (C[12] = [
                p(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), ig = /* @__PURE__ */ X(lg, [["__scopeId", "data-v-18e18eb5"]]), rg = { class: "header-info" }, dg = { class: "commit-hash" }, cg = {
  key: 0,
  class: "commit-refs"
}, ug = { class: "commit-message" }, mg = { class: "commit-date" }, vg = {
  key: 0,
  class: "loading"
}, fg = {
  key: 1,
  class: "changes-section"
}, gg = { class: "stats-row" }, hg = { class: "stat" }, pg = { class: "stat insertions" }, yg = { class: "stat deletions" }, wg = {
  key: 0,
  class: "change-group"
}, kg = {
  key: 1,
  class: "change-group"
}, bg = {
  key: 0,
  class: "version"
}, _g = {
  key: 2,
  class: "change-group"
}, $g = { class: "change-item" }, Cg = /* @__PURE__ */ Q({
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
    }), h = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return _e(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (m, a) => (o(), S(ct, {
      size: "md",
      "show-close-button": !1,
      onClose: a[3] || (a[3] = (v) => m.$emit("close"))
    }, {
      header: i(() => {
        var v, _, d, I;
        return [
          e("div", rg, [
            a[4] || (a[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", dg, l(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((_ = t.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
            (I = (d = r.value) == null ? void 0 : d.refs) != null && I.length ? (o(), s("span", cg, [
              (o(!0), s(G, null, oe(r.value.refs, (k) => (o(), s("span", {
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
          e("div", ug, l(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", mg, l(((_ = r.value) == null ? void 0 : _.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), s("div", vg, "Loading details...")) : r.value ? (o(), s("div", fg, [
            e("div", gg, [
              e("span", hg, l(r.value.stats.files_changed) + " files", 1),
              e("span", pg, "+" + l(r.value.stats.insertions), 1),
              e("span", yg, "-" + l(r.value.stats.deletions), 1)
            ]),
            w.value ? (o(), s("div", wg, [
              f(bt, { variant: "section" }, {
                default: i(() => [...a[6] || (a[6] = [
                  p("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(G, null, oe(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                a[7] || (a[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(G, null, oe(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                a[8] || (a[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(G, null, oe(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                a[9] || (a[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), s("div", kg, [
              f(bt, { variant: "section" }, {
                default: i(() => [...a[10] || (a[10] = [
                  p("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(G, null, oe(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                a[11] || (a[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d.name), 1),
                d.version ? (o(), s("span", bg, "(" + l(d.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(G, null, oe(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                a[12] || (a[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", _g, [
              f(bt, { variant: "section" }, {
                default: i(() => [...a[13] || (a[13] = [
                  p("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", $g, [
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
            p(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(re, {
          variant: "primary",
          onClick: a[2] || (a[2] = (v) => m.$emit("checkout", t.commit))
        }, {
          default: i(() => [...a[16] || (a[16] = [
            p(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), xg = /* @__PURE__ */ X(Cg, [["__scopeId", "data-v-d256ff6d"]]), Sg = { class: "dialog-message" }, Ig = {
  key: 0,
  class: "dialog-details"
}, Eg = {
  key: 1,
  class: "dialog-warning"
}, Mg = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), S(ct, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Sg, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", Ig, [
          (o(!0), s(G, null, oe(t.details, (r, g) => (o(), s("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", Eg, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          p(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        f(re, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            p(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), S(re, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            p(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        f(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: i(() => [
            p(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), zg = /* @__PURE__ */ X(Mg, [["__scopeId", "data-v-3670b9f5"]]), Lg = { class: "base-textarea-wrapper" }, Tg = ["value", "rows", "placeholder", "disabled", "maxlength"], Dg = {
  key: 0,
  class: "base-textarea-count"
}, Ng = /* @__PURE__ */ Q({
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
    return (u, n) => (o(), s("div", Lg, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = je(ke((r) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = je(ke((r) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Tg),
      t.showCharCount && t.maxLength ? (o(), s("div", Dg, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), qt = /* @__PURE__ */ X(Ng, [["__scopeId", "data-v-5516e6fc"]]), Rg = ["checked", "disabled"], Og = { class: "base-checkbox-box" }, Ug = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Pg = {
  key: 0,
  class: "base-checkbox-label"
}, Bg = /* @__PURE__ */ Q({
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
      }, null, 40, Rg),
      e("span", Og, [
        t.modelValue ? (o(), s("svg", Ug, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (o(), s("span", Pg, [
        ce(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ X(Bg, [["__scopeId", "data-v-bf17c831"]]), Fg = { class: "popover-header" }, Vg = { class: "popover-body" }, Ag = {
  key: 0,
  class: "changes-summary"
}, Wg = {
  key: 0,
  class: "change-item"
}, Gg = {
  key: 1,
  class: "change-item"
}, jg = {
  key: 2,
  class: "change-item"
}, Hg = {
  key: 3,
  class: "change-item"
}, qg = {
  key: 4,
  class: "change-item"
}, Kg = {
  key: 1,
  class: "no-changes"
}, Jg = {
  key: 2,
  class: "loading"
}, Qg = {
  key: 3,
  class: "issues-error"
}, Xg = { class: "error-header" }, Yg = { class: "error-title" }, Zg = { class: "issues-list" }, eh = { class: "message-section" }, th = { class: "popover-footer" }, oh = {
  key: 1,
  class: "commit-popover"
}, sh = { class: "popover-header" }, nh = { class: "popover-body" }, ah = {
  key: 0,
  class: "changes-summary"
}, lh = {
  key: 0,
  class: "change-item"
}, ih = {
  key: 1,
  class: "change-item"
}, rh = {
  key: 2,
  class: "change-item"
}, dh = {
  key: 3,
  class: "change-item"
}, ch = {
  key: 4,
  class: "change-item"
}, uh = {
  key: 1,
  class: "no-changes"
}, mh = {
  key: 2,
  class: "loading"
}, vh = {
  key: 3,
  class: "issues-error"
}, fh = { class: "error-header" }, gh = { class: "error-title" }, hh = { class: "issues-list" }, ph = { class: "message-section" }, yh = { class: "popover-footer" }, wh = /* @__PURE__ */ Q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: g } = Ie(), w = $(""), h = $(!1), m = $(!1), a = $(null), v = B(() => {
      if (!n.status) return !1;
      const N = n.status.workflows;
      return N.new.length > 0 || N.modified.length > 0 || N.deleted.length > 0 || n.status.has_changes;
    }), _ = B(() => {
      var N;
      return (N = n.status) != null && N.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (y) => y.has_issues && (y.sync_state === "new" || y.sync_state === "modified")
      ) : [];
    }), d = B(() => _.value.length > 0), I = B(() => d.value && !m.value);
    async function k() {
      var N, y, C;
      if (!(d.value && !m.value) && !(!v.value || !w.value.trim() || h.value)) {
        h.value = !0, a.value = null;
        try {
          const O = await g(w.value.trim(), m.value);
          O.status === "success" ? (a.value = {
            type: "success",
            message: `Committed: ${((N = O.summary) == null ? void 0 : N.new) || 0} new, ${((y = O.summary) == null ? void 0 : y.modified) || 0} modified, ${((C = O.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, w.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : O.status === "no_changes" ? a.value = { type: "error", message: "No changes to commit" } : O.status === "blocked" ? a.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : a.value = { type: "error", message: O.message || "Commit failed" };
        } catch (O) {
          a.value = { type: "error", message: O instanceof Error ? O.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (N, y) => t.asModal ? (o(), S(Se, {
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
          e("div", Fg, [
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
          e("div", Vg, [
            t.status && v.value ? (o(), s("div", Ag, [
              t.status.workflows.new.length ? (o(), s("div", Wg, [
                y[12] || (y[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Gg, [
                y[13] || (y[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", jg, [
                y[14] || (y[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Hg, [
                y[15] || (y[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", qg, [
                y[16] || (y[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", Kg, " No changes to commit ")) : (o(), s("div", Jg, " Loading... ")),
            d.value ? (o(), s("div", Qg, [
              e("div", Xg, [
                y[17] || (y[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Yg, l(_.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Zg, [
                (o(!0), s(G, null, oe(_.value, (C) => (o(), s("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(C.name), 1),
                  p(": " + l(C.issue_summary), 1)
                ]))), 128))
              ]),
              f(Kt, {
                modelValue: m.value,
                "onUpdate:modelValue": y[1] || (y[1] = (C) => m.value = C),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...y[18] || (y[18] = [
                  p(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", eh, [
              f(qt, {
                modelValue: w.value,
                "onUpdate:modelValue": y[2] || (y[2] = (C) => w.value = C),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || h.value || I.value,
                rows: 3,
                onCtrlEnter: k
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            a.value ? (o(), s("div", {
              key: 4,
              class: se(["result", a.value.type])
            }, l(a.value.message), 3)) : c("", !0)
          ]),
          e("div", th, [
            f(re, {
              variant: "secondary",
              onClick: y[3] || (y[3] = (C) => r("close"))
            }, {
              default: i(() => [...y[19] || (y[19] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(re, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !w.value.trim() || h.value || I.value,
              loading: h.value,
              onClick: k
            }, {
              default: i(() => [
                p(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", oh, [
      e("div", sh, [
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
      e("div", nh, [
        t.status && v.value ? (o(), s("div", ah, [
          t.status.workflows.new.length ? (o(), s("div", lh, [
            y[22] || (y[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", ih, [
            y[23] || (y[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", rh, [
            y[24] || (y[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", dh, [
            y[25] || (y[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", ch, [
            y[26] || (y[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", uh, " No changes to commit ")) : (o(), s("div", mh, " Loading... ")),
        d.value ? (o(), s("div", vh, [
          e("div", fh, [
            y[27] || (y[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", gh, l(_.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", hh, [
            (o(!0), s(G, null, oe(_.value, (C) => (o(), s("div", {
              key: C.name,
              class: "issue-item"
            }, [
              e("strong", null, l(C.name), 1),
              p(": " + l(C.issue_summary), 1)
            ]))), 128))
          ]),
          f(Kt, {
            modelValue: m.value,
            "onUpdate:modelValue": y[7] || (y[7] = (C) => m.value = C),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...y[28] || (y[28] = [
              p(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", ph, [
          f(qt, {
            modelValue: w.value,
            "onUpdate:modelValue": y[8] || (y[8] = (C) => w.value = C),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || h.value || I.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        a.value ? (o(), s("div", {
          key: 4,
          class: se(["result", a.value.type])
        }, l(a.value.message), 3)) : c("", !0)
      ]),
      e("div", yh, [
        f(re, {
          variant: "secondary",
          onClick: y[9] || (y[9] = (C) => r("close"))
        }, {
          default: i(() => [...y[29] || (y[29] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(re, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !w.value.trim() || h.value || I.value,
          loading: h.value,
          onClick: k
        }, {
          default: i(() => [
            p(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), so = /* @__PURE__ */ X(wh, [["__scopeId", "data-v-d92153de"]]), kh = { class: "modal-header" }, bh = { class: "modal-body" }, _h = { class: "switch-message" }, $h = { class: "switch-details" }, Ch = { class: "modal-actions" }, xh = /* @__PURE__ */ Q({
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
          e("div", kh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", bh, [
            e("p", _h, [
              n[6] || (n[6] = p(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              n[7] || (n[7] = p(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              n[8] || (n[8] = p("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", $h, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Ch, [
            f(Y, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Y, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                p(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Sh = /* @__PURE__ */ X(xh, [["__scopeId", "data-v-e9c5253e"]]), Ih = { class: "progress-bar" }, Eh = /* @__PURE__ */ Q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = B(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, g) => (o(), s("div", Ih, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: He({ width: n.value })
      }, null, 6)
    ]));
  }
}), Mh = /* @__PURE__ */ X(Eh, [["__scopeId", "data-v-1beb0512"]]), zh = {
  key: 0,
  class: "modal-overlay"
}, Lh = { class: "modal-content" }, Th = { class: "modal-body" }, Dh = { class: "progress-info" }, Nh = { class: "progress-percentage" }, Rh = { class: "progress-state" }, Oh = { class: "switch-steps" }, Uh = { class: "step-icon" }, Ph = { class: "step-label" }, Bh = /* @__PURE__ */ Q({
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
      ], h = w.findIndex((m) => m.state === u.state);
      return w.map((m, a) => {
        let v = "pending", _ = "○";
        return a < h ? (v = "completed", _ = "✓") : a === h && (v = "active", _ = "⟳"), {
          ...m,
          status: v,
          icon: _
        };
      });
    });
    return (w, h) => (o(), S(Se, { to: "body" }, [
      t.show ? (o(), s("div", zh, [
        e("div", Lh, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Th, [
            f(Mh, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Dh, [
              e("div", Nh, l(t.progress) + "%", 1),
              e("div", Rh, l(n.value), 1)
            ]),
            e("div", Oh, [
              (o(!0), s(G, null, oe(g.value, (m) => (o(), s("div", {
                key: m.state,
                class: se(["switch-step", m.status])
              }, [
                e("span", Uh, l(m.icon), 1),
                e("span", Ph, l(m.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Fh = /* @__PURE__ */ X(Bh, [["__scopeId", "data-v-768a5078"]]), Vh = { class: "modal-header" }, Ah = { class: "modal-body" }, Wh = {
  key: 0,
  class: "node-section"
}, Gh = { class: "node-list" }, jh = {
  key: 1,
  class: "node-section"
}, Hh = { class: "node-list" }, qh = { class: "modal-actions" }, Kh = /* @__PURE__ */ Q({
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
          e("div", Vh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Ah, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Wh, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Gh, [
                (o(!0), s(G, null, oe(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", jh, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Hh, [
                (o(!0), s(G, null, oe(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
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
          e("div", qh, [
            f(Y, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Y, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                p(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Jh = /* @__PURE__ */ X(Kh, [["__scopeId", "data-v-7cad7518"]]), Qh = { class: "comfygit-panel" }, Xh = { class: "panel-header" }, Yh = { class: "header-left" }, Zh = {
  key: 0,
  class: "header-info"
}, ep = { class: "header-actions" }, tp = { class: "env-switcher" }, op = {
  key: 0,
  class: "header-info"
}, sp = { class: "branch-name" }, np = { class: "panel-main" }, ap = { class: "sidebar" }, lp = { class: "sidebar-section" }, ip = { class: "sidebar-section" }, rp = { class: "sidebar-section" }, dp = { class: "content-area" }, cp = {
  key: 0,
  class: "error-message"
}, up = {
  key: 1,
  class: "loading"
}, mp = { class: "dialog-content env-selector-dialog" }, vp = { class: "dialog-header" }, fp = { class: "dialog-body" }, gp = { class: "env-list" }, hp = { class: "env-info" }, pp = { class: "env-name-row" }, yp = { class: "env-indicator" }, wp = { class: "env-name" }, kp = {
  key: 0,
  class: "env-branch"
}, bp = {
  key: 1,
  class: "current-label"
}, _p = { class: "env-stats" }, $p = ["onClick"], Cp = { class: "toast-container" }, xp = { class: "toast-icon" }, Sp = { class: "toast-message" }, Ip = /* @__PURE__ */ Q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: g,
      getBranches: w,
      checkout: h,
      createBranch: m,
      switchBranch: a,
      deleteBranch: v,
      getEnvironments: _,
      switchEnvironment: d,
      getSwitchProgress: I,
      syncEnvironmentManually: k
    } = Ie(), N = Zt(), y = $(null), C = $([]), O = $([]), F = $([]), D = B(() => F.value.find((W) => W.is_current)), z = $(!1), H = $(null), M = $(null), T = $(!1), P = $(null), E = $(!1), x = $(!1), V = $(""), q = $({ state: "idle", progress: 0, message: "" });
    let ee = null, ne = null;
    const A = $("status"), Z = $("this-env");
    function L(W, R) {
      A.value = W, Z.value = R;
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
        var R;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const de of W)
          if (((R = de.textContent) == null ? void 0 : R.trim()) === "Manager") {
            de.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const me = $(null), pe = $(!1), Be = $(!1), Fe = $([]);
    let ot = 0;
    function ve(W, R = "info", de = 3e3) {
      const we = ++ot;
      return Fe.value.push({ id: we, message: W, type: R }), de > 0 && setTimeout(() => {
        Fe.value = Fe.value.filter((ze) => ze.id !== we);
      }, de), we;
    }
    function Ee(W) {
      Fe.value = Fe.value.filter((R) => R.id !== W);
    }
    function vt(W) {
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
    const Qe = B(() => {
      if (!y.value) return "neutral";
      const W = y.value.workflows, R = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || y.value.has_changes;
      return y.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    B(() => y.value ? Qe.value === "success" ? "All synced" : Qe.value === "warning" ? "Uncommitted changes" : Qe.value === "error" ? "Not synced" : "" : "");
    async function Me() {
      z.value = !0, H.value = null;
      try {
        const [W, R, de, we] = await Promise.all([
          r(!0),
          g(),
          w(),
          _()
        ]);
        y.value = W, C.value = R.commits, O.value = de.branches, F.value = we, n("statusUpdate", W), P.value && await P.value.loadWorkflows(!0);
      } catch (W) {
        H.value = W instanceof Error ? W.message : "Failed to load status", y.value = null, C.value = [], O.value = [];
      } finally {
        z.value = !1;
      }
    }
    function ft(W) {
      M.value = W;
    }
    async function st(W) {
      var de;
      M.value = null;
      const R = y.value && (y.value.workflows.new.length > 0 || y.value.workflows.modified.length > 0 || y.value.workflows.deleted.length > 0 || y.value.has_changes);
      me.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((de = W.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: R ? jt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var Le;
          me.value = null, $e();
          const we = ve(`Checking out ${W.short_hash || ((Le = W.hash) == null ? void 0 : Le.slice(0, 7))}...`, "info", 0), ze = await h(W.hash, R);
          Ee(we), ze.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(ze.message || "Checkout failed", "error");
        }
      };
    }
    async function gt(W) {
      const R = y.value && (y.value.workflows.new.length > 0 || y.value.workflows.modified.length > 0 || y.value.workflows.deleted.length > 0 || y.value.has_changes);
      me.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: R ? jt() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          me.value = null, $e();
          const de = ve(`Switching to ${W}...`, "info", 0), we = await a(W, R);
          Ee(de), we.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(we.message || "Branch switch failed", "error");
        }
      };
    }
    async function K(W) {
      const R = ve(`Creating branch ${W}...`, "info", 0), de = await m(W);
      Ee(R), de.status === "success" ? (ve(`Branch "${W}" created`, "success"), await Me()) : ve(de.message || "Failed to create branch", "error");
    }
    async function ie(W, R = !1) {
      const de = async (we) => {
        var Le;
        const ze = ve(`Deleting branch ${W}...`, "info", 0);
        try {
          const le = await v(W, we);
          Ee(ze), le.status === "success" ? (ve(`Branch "${W}" deleted`, "success"), await Me()) : (Le = le.message) != null && Le.includes("not fully merged") ? me.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              me.value = null, await de(!0);
            }
          } : ve(le.message || "Failed to delete branch", "error");
        } catch (le) {
          Ee(ze);
          const Lt = le instanceof Error ? le.message : "Failed to delete branch";
          Lt.includes("not fully merged") ? me.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              me.value = null, await de(!0);
            }
          } : ve(Lt, "error");
        }
      };
      me.value = {
        title: "Delete Branch",
        message: `Delete branch "${W}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          me.value = null, await de(R);
        }
      };
    }
    async function he(W) {
      M.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const de = ve(`Creating branch ${R}...`, "info", 0), we = await m(R, W.hash);
        Ee(de), we.status === "success" ? (ve(`Branch "${R}" created from ${W.short_hash}`, "success"), await Me()) : ve(we.message || "Failed to create branch", "error");
      }
    }
    function $e() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Xe(W) {
      T.value = !1, V.value = W, E.value = !0;
    }
    async function zt() {
      E.value = !1, x.value = !0, $e(), q.value = {
        progress: 10,
        state: nt(10),
        message: at(10)
      };
      try {
        await d(V.value), j(), J();
      } catch (W) {
        U(), x.value = !1, ve(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), q.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function nt(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function at(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[nt(W)] || "";
    }
    function j() {
      if (ne) return;
      let W = 10;
      const R = 60, de = 5e3, we = 100, ze = (R - W) / (de / we);
      ne = window.setInterval(() => {
        if (W += ze, W >= R && (W = R, U()), q.value.progress < R) {
          const Le = Math.floor(W);
          q.value = {
            progress: Le,
            state: nt(Le),
            message: at(Le)
          };
        }
      }, we);
    }
    function U() {
      ne && (clearInterval(ne), ne = null);
    }
    function J() {
      ee || (ee = window.setInterval(async () => {
        try {
          let W = await N.getStatus();
          if ((!W || W.state === "idle") && (W = await I()), !W)
            return;
          const R = W.progress || 0;
          R >= 60 && U();
          const de = Math.max(R, q.value.progress), we = W.state && W.state !== "idle" && W.state !== "unknown", ze = we ? W.state : nt(de), Le = we && W.message || at(de);
          q.value = {
            state: ze,
            progress: de,
            message: Le
          }, W.state === "complete" ? (U(), ue(), x.value = !1, ve(`✓ Switched to ${V.value}`, "success"), await Me(), V.value = "") : W.state === "rolled_back" ? (U(), ue(), x.value = !1, ve("Switch failed, restored previous environment", "warning"), V.value = "") : W.state === "critical_failure" && (U(), ue(), x.value = !1, ve(`Critical error during switch: ${W.message}`, "error"), V.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function ue() {
      U(), ee && (clearInterval(ee), ee = null);
    }
    function Ce() {
      E.value = !1, V.value = "";
    }
    async function Ye() {
      pe.value = !1, await Me(), ve("✓ Changes committed", "success");
    }
    async function Ze() {
      Be.value = !1;
      const W = ve("Syncing environment...", "info", 0);
      try {
        const R = await k("skip", !0);
        if (Ee(W), R.status === "success") {
          const de = [];
          R.nodes_installed.length && de.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && de.push(`${R.nodes_removed.length} removed`);
          const we = de.length ? `: ${de.join(", ")}` : "";
          ve(`✓ Environment synced${we}`, "success"), await Me();
        } else {
          const de = R.errors.length ? R.errors.join("; ") : R.message;
          ve(`Sync failed: ${de}`, "error");
        }
      } catch (R) {
        Ee(W), ve(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function St(W) {
      const R = ve(`Creating environment "${W}"...`, "info", 0);
      Ee(R), ve("Environment creation not yet implemented", "warning");
    }
    async function It(W) {
      const R = ve(`Deleting environment "${W}"...`, "info", 0);
      Ee(R), ve("Environment deletion not yet implemented", "warning");
    }
    function Et(W) {
      ve(`Viewing details for "${W}"`, "info"), L("models-env", "this-env");
    }
    function jt() {
      if (!y.value) return [];
      const W = [], R = y.value.workflows;
      return R.new.length && W.push(`${R.new.length} new workflow(s)`), R.modified.length && W.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && W.push(`${R.deleted.length} deleted workflow(s)`), W;
    }
    return _e(Me), (W, R) => {
      var de, we, ze, Le;
      return o(), s("div", Qh, [
        e("div", Xh, [
          e("div", Yh, [
            R[27] || (R[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            y.value ? (o(), s("div", Zh)) : c("", !0)
          ]),
          e("div", ep, [
            e("button", {
              class: se(["icon-btn", { spinning: z.value }]),
              onClick: Me,
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
              onClick: R[0] || (R[0] = (le) => n("close")),
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
        e("div", tp, [
          R[31] || (R[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[1] || (R[1] = (le) => L("environments", "all-envs"))
          }, [
            y.value ? (o(), s("div", op, [
              e("span", null, l(((de = D.value) == null ? void 0 : de.name) || ((we = y.value) == null ? void 0 : we.environment) || "Loading..."), 1),
              e("span", sp, "(" + l(y.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            R[30] || (R[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", np, [
          e("div", ap, [
            e("div", lp, [
              R[32] || (R[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "status" && Z.value === "this-env" }]),
                onClick: R[2] || (R[2] = (le) => L("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "workflows" }]),
                onClick: R[3] || (R[3] = (le) => L("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "models-env" }]),
                onClick: R[4] || (R[4] = (le) => L("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "branches" }]),
                onClick: R[5] || (R[5] = (le) => L("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "history" }]),
                onClick: R[6] || (R[6] = (le) => L("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "nodes" }]),
                onClick: R[7] || (R[7] = (le) => L("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "debug-env" }]),
                onClick: R[8] || (R[8] = (le) => L("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            R[35] || (R[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ip, [
              R[33] || (R[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "environments" }]),
                onClick: R[9] || (R[9] = (le) => L("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "model-index" }]),
                onClick: R[10] || (R[10] = (le) => L("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "settings" }]),
                onClick: R[11] || (R[11] = (le) => L("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "debug-workspace" }]),
                onClick: R[12] || (R[12] = (le) => L("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            R[36] || (R[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", rp, [
              R[34] || (R[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "export" }]),
                onClick: R[13] || (R[13] = (le) => L("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "import" }]),
                onClick: R[14] || (R[14] = (le) => L("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: A.value === "remotes" }]),
                onClick: R[15] || (R[15] = (le) => L("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", dp, [
            H.value ? (o(), s("div", cp, l(H.value), 1)) : !y.value && A.value === "status" ? (o(), s("div", up, " Loading status... ")) : (o(), s(G, { key: 2 }, [
              A.value === "status" ? (o(), S(Fn, {
                key: 0,
                status: y.value,
                onSwitchBranch: ae,
                onCommitChanges: R[16] || (R[16] = (le) => pe.value = !0),
                onSyncEnvironment: R[17] || (R[17] = (le) => Be.value = !0),
                onViewWorkflows: R[18] || (R[18] = (le) => L("workflows", "this-env")),
                onViewHistory: R[19] || (R[19] = (le) => L("history", "this-env")),
                onViewDebug: R[20] || (R[20] = (le) => L("debug-env", "this-env"))
              }, null, 8, ["status"])) : A.value === "workflows" ? (o(), S(Vc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: P,
                onRefresh: Me
              }, null, 512)) : A.value === "models-env" ? (o(), S($u, {
                key: 2,
                onNavigate: b
              })) : A.value === "branches" ? (o(), S(ta, {
                key: 3,
                branches: O.value,
                current: ((ze = y.value) == null ? void 0 : ze.branch) || null,
                onSwitch: gt,
                onCreate: K,
                onDelete: ie
              }, null, 8, ["branches", "current"])) : A.value === "history" ? (o(), S(ma, {
                key: 4,
                commits: C.value,
                onSelect: ft,
                onCheckout: st
              }, null, 8, ["commits"])) : A.value === "nodes" ? (o(), S(um, {
                key: 5,
                onOpenNodeManager: te
              })) : A.value === "debug-env" ? (o(), S(cv, { key: 6 })) : A.value === "environments" ? (o(), S(_v, {
                key: 7,
                onSwitch: Xe,
                onCreate: St,
                onDelete: It,
                onViewDetails: Et
              })) : A.value === "model-index" ? (o(), S(Wu, {
                key: 8,
                onRefresh: Me
              })) : A.value === "settings" ? (o(), S(lv, { key: 9 })) : A.value === "debug-workspace" ? (o(), S(rv, { key: 10 })) : A.value === "export" ? (o(), S(Tv, { key: 11 })) : A.value === "import" ? (o(), S(ig, { key: 12 })) : A.value === "remotes" ? (o(), S(Vm, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        M.value ? (o(), S(xg, {
          key: 0,
          commit: M.value,
          onClose: R[21] || (R[21] = (le) => M.value = null),
          onCheckout: st,
          onCreateBranch: he
        }, null, 8, ["commit"])) : c("", !0),
        me.value ? (o(), S(zg, {
          key: 1,
          title: me.value.title,
          message: me.value.message,
          details: me.value.details,
          warning: me.value.warning,
          confirmLabel: me.value.confirmLabel,
          cancelLabel: me.value.cancelLabel,
          secondaryLabel: me.value.secondaryLabel,
          secondaryAction: me.value.secondaryAction,
          destructive: me.value.destructive,
          onConfirm: me.value.onConfirm,
          onCancel: R[22] || (R[22] = (le) => me.value = null),
          onSecondary: me.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        f(Sh, {
          show: E.value,
          "from-environment": ((Le = D.value) == null ? void 0 : Le.name) || "unknown",
          "to-environment": V.value,
          onConfirm: zt,
          onClose: Ce
        }, null, 8, ["show", "from-environment", "to-environment"]),
        pe.value && y.value ? (o(), S(so, {
          key: 2,
          status: y.value,
          "as-modal": !0,
          onClose: R[23] || (R[23] = (le) => pe.value = !1),
          onCommitted: Ye
        }, null, 8, ["status"])) : c("", !0),
        Be.value && y.value ? (o(), S(Jh, {
          key: 3,
          show: Be.value,
          "mismatch-details": {
            missing_nodes: y.value.comparison.missing_nodes,
            extra_nodes: y.value.comparison.extra_nodes
          },
          onConfirm: Ze,
          onClose: R[24] || (R[24] = (le) => Be.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        f(Fh, {
          show: x.value,
          state: q.value.state,
          progress: q.value.progress,
          message: q.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        T.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[26] || (R[26] = ke((le) => T.value = !1, ["self"]))
        }, [
          e("div", mp, [
            e("div", vp, [
              R[38] || (R[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[25] || (R[25] = (le) => T.value = !1)
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
            e("div", fp, [
              R[39] || (R[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", gp, [
                (o(!0), s(G, null, oe(F.value, (le) => (o(), s("div", {
                  key: le.name,
                  class: se(["env-item", { current: le.is_current }])
                }, [
                  e("div", hp, [
                    e("div", pp, [
                      e("span", yp, l(le.is_current ? "●" : "○"), 1),
                      e("span", wp, l(le.name), 1),
                      le.current_branch ? (o(), s("span", kp, "(" + l(le.current_branch) + ")", 1)) : c("", !0),
                      le.is_current ? (o(), s("span", bp, "CURRENT")) : c("", !0)
                    ]),
                    e("div", _p, l(le.workflow_count) + " workflows • " + l(le.node_count) + " nodes ", 1)
                  ]),
                  le.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Lt) => Xe(le.name)
                  }, " SWITCH ", 8, $p))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", Cp, [
          f(go, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(G, null, oe(Fe.value, (le) => (o(), s("div", {
                key: le.id,
                class: se(["toast", le.type])
              }, [
                e("span", xp, l(vt(le.type)), 1),
                e("span", Sp, l(le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Ep = /* @__PURE__ */ X(Ip, [["__scopeId", "data-v-4099bd47"]]), Mp = { class: "item-header" }, zp = { class: "item-info" }, Lp = { class: "filename" }, Tp = { class: "metadata" }, Dp = { class: "size" }, Np = {
  key: 0,
  class: "type"
}, Rp = { class: "item-actions" }, Op = {
  key: 0,
  class: "progress-section"
}, Up = { class: "progress-bar" }, Pp = { class: "progress-stats" }, Bp = { class: "downloaded" }, Fp = { class: "speed" }, Vp = {
  key: 0,
  class: "eta"
}, Ap = {
  key: 1,
  class: "status-msg paused"
}, Wp = {
  key: 2,
  class: "status-msg queued"
}, Gp = {
  key: 3,
  class: "status-msg completed"
}, jp = {
  key: 4,
  class: "status-msg failed"
}, Hp = {
  key: 0,
  class: "retries"
}, qp = /* @__PURE__ */ Q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(h) {
      if (h === 0) return "?";
      const m = h / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function w(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const m = Math.floor(h / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (h, m) => (o(), s("div", {
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Mp, [
        e("div", zp, [
          e("div", Lp, l(t.item.filename), 1),
          e("div", Tp, [
            e("span", Dp, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Np, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Rp, [
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
      t.item.status === "downloading" ? (o(), s("div", Op, [
        e("div", Up, [
          e("div", {
            class: "progress-fill",
            style: He({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Pp, [
          e("span", Bp, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", Fp, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Vp, l(w(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Ap, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Wp, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Gp, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", jp, [
        p(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Hp, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ X(qp, [["__scopeId", "data-v-2110df65"]]), Kp = { class: "queue-title" }, Jp = { class: "count" }, Qp = { class: "queue-actions" }, Xp = { class: "action-label" }, Yp = {
  key: 0,
  class: "overall-progress"
}, Zp = { class: "progress-bar" }, e1 = {
  key: 0,
  class: "current-mini"
}, t1 = { class: "filename" }, o1 = { class: "speed" }, s1 = {
  key: 1,
  class: "queue-content"
}, n1 = {
  key: 0,
  class: "section"
}, a1 = {
  key: 1,
  class: "section"
}, l1 = { class: "section-header" }, i1 = { class: "section-label paused" }, r1 = { class: "items-list" }, d1 = {
  key: 2,
  class: "section"
}, c1 = { class: "section-header" }, u1 = { class: "section-label" }, m1 = { class: "items-list" }, v1 = {
  key: 3,
  class: "section"
}, f1 = { class: "section-header" }, g1 = { class: "section-label" }, h1 = { class: "items-list" }, p1 = {
  key: 4,
  class: "section"
}, y1 = { class: "section-header" }, w1 = { class: "section-label failed" }, k1 = { class: "items-list" }, b1 = /* @__PURE__ */ Q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: g,
      failedItems: w,
      pausedItems: h,
      hasItems: m,
      activeCount: a,
      cancelDownload: v,
      retryDownload: _,
      resumeDownload: d,
      resumeAllPaused: I,
      removeItem: k,
      clearCompleted: N
    } = xt(), y = $(!1);
    let C = null;
    Pt(
      () => ({
        active: a.value,
        failed: w.value.length,
        paused: h.value.length,
        completed: g.value.length
      }),
      (z, H) => {
        C && (clearTimeout(C), C = null);
        const M = z.active === 0 && z.failed === 0 && z.paused === 0 && z.completed > 0, T = H && (H.active > 0 || H.paused > 0);
        M && T && (C = setTimeout(() => {
          N(), C = null;
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
    function D(z) {
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
          e("div", Kp, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Jp, "(" + l(fe(a)) + "/" + l(fe(u).items.length) + ")", 1)
          ]),
          e("div", Qp, [
            e("span", Xp, l(y.value ? "minimize" : "expand"), 1)
          ])
        ]),
        y.value ? (o(), s("div", s1, [
          fe(n) ? (o(), s("div", n1, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(yt, {
              item: fe(n),
              onCancel: H[1] || (H[1] = (M) => F(fe(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          fe(h).length > 0 ? (o(), s("div", a1, [
            e("div", l1, [
              e("span", i1, "Paused (" + l(fe(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...M) => fe(I) && fe(I)(...M))
              }, "Resume All")
            ]),
            e("div", r1, [
              (o(!0), s(G, null, oe(fe(h), (M) => (o(), S(yt, {
                key: M.id,
                item: M,
                onResume: (T) => fe(d)(M.id),
                onRemove: (T) => fe(k)(M.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          fe(r).length > 0 ? (o(), s("div", d1, [
            e("div", c1, [
              e("span", u1, "Queued (" + l(fe(r).length) + ")", 1)
            ]),
            e("div", m1, [
              (o(!0), s(G, null, oe(fe(r), (M) => (o(), S(yt, {
                key: M.id,
                item: M,
                onCancel: (T) => F(M.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          fe(g).length > 0 ? (o(), s("div", v1, [
            e("div", f1, [
              e("span", g1, "Completed (" + l(fe(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...M) => fe(N) && fe(N)(...M))
              }, "Clear")
            ]),
            e("div", h1, [
              (o(!0), s(G, null, oe(fe(g).slice(0, 3), (M) => (o(), S(yt, {
                key: M.id,
                item: M,
                onRemove: (T) => fe(k)(M.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          fe(w).length > 0 ? (o(), s("div", p1, [
            e("div", y1, [
              e("span", w1, "Failed (" + l(fe(w).length) + ")", 1)
            ]),
            e("div", k1, [
              (o(!0), s(G, null, oe(fe(w), (M) => (o(), S(yt, {
                key: M.id,
                item: M,
                onRetry: (T) => fe(_)(M.id),
                onRemove: (T) => fe(k)(M.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", Yp, [
          e("div", Zp, [
            e("div", {
              class: "progress-fill",
              style: He({ width: `${O.value}%` })
            }, null, 4)
          ]),
          fe(n) ? (o(), s("div", e1, [
            e("span", t1, l(fe(n).filename), 1),
            e("span", o1, l(D(fe(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), _1 = /* @__PURE__ */ X(b1, [["__scopeId", "data-v-60751cfa"]]), $1 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', C1 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', x1 = {
  comfy: $1,
  phosphor: C1
}, Wt = "comfy", no = "comfygit-theme";
let et = null, ao = Wt;
function S1() {
  try {
    const t = localStorage.getItem(no);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Wt;
}
function lo(t = Wt) {
  et && et.remove(), et = document.createElement("style"), et.id = "comfygit-theme-styles", et.setAttribute("data-theme", t), et.textContent = x1[t], document.head.appendChild(et), document.body.setAttribute("data-comfygit-theme", t), ao = t;
  try {
    localStorage.setItem(no, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function I1() {
  return ao;
}
function E1(t) {
  lo(t);
}
const Gt = document.createElement("link");
Gt.rel = "stylesheet";
Gt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Gt);
const M1 = S1();
lo(M1);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), E1(t);
  },
  getTheme: () => {
    const t = I1();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Oe = null, Ne = null, _t = null, wt = null, Jt = null;
const dt = $(null);
async function Mt() {
  var t;
  if (!((t = rt) != null && t.api)) return null;
  try {
    const u = await rt.api.fetchApi("/v2/comfygit/status");
    u.ok && (dt.value = await u.json());
  } catch {
  }
}
function z1() {
  if (!dt.value) return !1;
  const t = dt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || dt.value.has_changes;
}
function L1() {
  Oe && Oe.remove(), Oe = document.createElement("div"), Oe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Oe.appendChild(t), Oe.addEventListener("click", (r) => {
    r.target === Oe && Nt();
  });
  const u = (r) => {
    r.key === "Escape" && (Nt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), Ft({
    render: () => Vt(Ep, {
      onClose: Nt,
      onStatusUpdate: (r) => {
        dt.value = r, $t();
      }
    })
  }).mount(t), document.body.appendChild(Oe);
}
function Nt() {
  Oe && (Oe.remove(), Oe = null);
}
function T1(t) {
  kt(), Ne = document.createElement("div"), Ne.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Ne.style.position = "fixed", Ne.style.top = `${u.bottom + 8}px`, Ne.style.right = `${window.innerWidth - u.right}px`, Ne.style.zIndex = "10001";
  const n = (g) => {
    Ne && !Ne.contains(g.target) && g.target !== t && (kt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (g) => {
    g.key === "Escape" && (kt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), _t = Ft({
    render: () => Vt(so, {
      status: dt.value,
      onClose: kt,
      onCommitted: () => {
        kt(), Mt().then($t);
      }
    })
  }), _t.mount(Ne), document.body.appendChild(Ne);
}
function kt() {
  _t && (_t.unmount(), _t = null), Ne && (Ne.remove(), Ne = null);
}
function D1() {
  wt || (wt = document.createElement("div"), wt.className = "comfygit-download-queue-root", Jt = Ft({
    render: () => Vt(_1)
  }), Jt.mount(wt), document.body.appendChild(wt), console.log("[ComfyGit] Model download queue mounted"));
}
let We = null;
function $t() {
  if (!We) return;
  const t = We.querySelector(".commit-indicator");
  t && (t.style.display = z1() ? "block" : "none");
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
rt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, w;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = L1, We = document.createElement("button"), We.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", We.innerHTML = 'Commit <span class="commit-indicator"></span>', We.title = "Quick Commit", We.onclick = () => T1(We), t.appendChild(u), t.appendChild(We), (w = (g = rt.menu) == null ? void 0 : g.settingsGroup) != null && w.element && (rt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), D1();
    const { loadPendingDownloads: n } = xt();
    n(), await Mt(), $t(), setInterval(async () => {
      await Mt(), $t();
    }, 3e4);
    const r = rt.api;
    if (r) {
      let h = function() {
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
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => h(), v.appendChild(d);
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
        console.log(`[ComfyGit] Workflow ${_}: ${d}`), await Mt(), $t();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let a = !1;
      r.addEventListener("status", async (v) => {
        const _ = v.detail != null;
        _ && !a && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : m()), a = _;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
