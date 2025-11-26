import { app as it } from "../../scripts/app.js";
import { defineComponent as Z, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as de, createBlock as S, resolveDynamicComponent as Dt, normalizeClass as ne, withCtx as i, toDisplayString as l, createVNode as f, createTextVNode as h, computed as P, Fragment as W, renderList as se, normalizeStyle as He, ref as _, onMounted as be, watch as Ot, Teleport as Se, withModifiers as we, Transition as no, createSlots as Ut, withKeys as je, onUnmounted as ao, reactive as qt, readonly as lo, unref as me, withDirectives as io, vModelText as ro, resolveComponent as co, TransitionGroup as uo, createApp as Pt, h as Bt } from "vue";
const mo = { class: "panel-layout" }, vo = {
  key: 0,
  class: "panel-layout-header"
}, fo = {
  key: 1,
  class: "panel-layout-search"
}, go = { class: "panel-layout-content" }, po = {
  key: 2,
  class: "panel-layout-footer"
}, ho = /* @__PURE__ */ Z({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (o(), s("div", mo, [
      u.$slots.header ? (o(), s("div", vo, [
        de(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (o(), s("div", fo, [
        de(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", go, [
        de(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (o(), s("div", po, [
        de(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ee = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, g] of u)
    n[r] = g;
  return n;
}, Ee = /* @__PURE__ */ ee(ho, [["__scopeId", "data-v-21565df9"]]), yo = {
  key: 0,
  class: "panel-title-prefix"
}, wo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ko = /* @__PURE__ */ Z({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (o(), S(Dt(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", yo, l(t.prefix), 1)) : (o(), s("span", wo)),
        de(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bo = /* @__PURE__ */ ee(ko, [["__scopeId", "data-v-c3875efc"]]), _o = ["title"], $o = ["width", "height"], Co = /* @__PURE__ */ Z({
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
      ])], 8, $o))
    ], 8, _o));
  }
}), Kt = /* @__PURE__ */ ee(Co, [["__scopeId", "data-v-6fc7f16d"]]), xo = { class: "header-left" }, So = {
  key: 0,
  class: "header-actions"
}, Io = /* @__PURE__ */ Z({
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
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", xo, [
        f(bo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            h(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), S(Kt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", So, [
        de(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Me = /* @__PURE__ */ ee(Io, [["__scopeId", "data-v-55a62cd6"]]), Eo = {
  key: 0,
  class: "section-title-count"
}, Mo = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ Z({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), S(Dt(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        de(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Eo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", Mo, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Te = /* @__PURE__ */ ee(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, To = { class: "status-grid__columns" }, No = { class: "status-grid__column" }, Ro = { class: "status-grid__title" }, Do = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Uo = {
  key: 0,
  class: "status-grid__footer"
}, Po = /* @__PURE__ */ Z({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", Lo, [
      e("div", To, [
        e("div", No, [
          e("h4", Ro, l(t.leftTitle), 1),
          de(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Do, [
          e("h4", Oo, l(t.rightTitle), 1),
          de(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (o(), s("div", Uo, [
        de(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Bo = /* @__PURE__ */ ee(Po, [["__scopeId", "data-v-73b7ba3f"]]), Fo = {
  key: 0,
  class: "status-item__icon"
}, Vo = {
  key: 1,
  class: "status-item__count"
}, Ao = { class: "status-item__label" }, Wo = /* @__PURE__ */ Z({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = P(() => `status-item--${u.variant}`);
    return (r, g) => (o(), s("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Fo, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", Vo, l(t.count), 1)) : c("", !0),
      e("span", Ao, l(t.label), 1)
    ], 2));
  }
}), Fe = /* @__PURE__ */ ee(Wo, [["__scopeId", "data-v-6f929183"]]), Go = { class: "issue-card__header" }, jo = { class: "issue-card__icon" }, Ho = { class: "issue-card__title" }, qo = {
  key: 0,
  class: "issue-card__content"
}, Ko = {
  key: 0,
  class: "issue-card__description"
}, Jo = {
  key: 1,
  class: "issue-card__items"
}, Qo = {
  key: 2,
  class: "issue-card__actions"
}, Xo = /* @__PURE__ */ Z({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = P(() => `issue-card--${u.severity}`);
    return (r, g) => (o(), s("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", Go, [
        e("span", jo, l(t.icon), 1),
        e("h4", Ho, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", qo, [
        t.description ? (o(), s("p", Ko, l(t.description), 1)) : c("", !0),
        de(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), s("div", Jo, [
        (o(!0), s(W, null, se(t.items, (y, p) => (o(), s("div", {
          key: p,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), s("div", Qo, [
        de(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ ee(Xo, [["__scopeId", "data-v-df6aa348"]]), Yo = ["type", "disabled"], Zo = {
  key: 0,
  class: "spinner"
}, es = /* @__PURE__ */ Z({
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
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Zo)) : c("", !0),
      t.loading ? c("", !0) : de(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Yo));
  }
}), te = /* @__PURE__ */ ee(es, [["__scopeId", "data-v-772abe47"]]), ts = { class: "empty-state" }, os = {
  key: 0,
  class: "empty-icon"
}, ss = { class: "empty-message" }, ns = /* @__PURE__ */ Z({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (o(), s("div", ts, [
      t.icon ? (o(), s("div", os, l(t.icon), 1)) : c("", !0),
      e("p", ss, l(t.message), 1),
      t.actionLabel ? (o(), S(te, {
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
}), Be = /* @__PURE__ */ ee(ns, [["__scopeId", "data-v-4466284f"]]), as = /* @__PURE__ */ Z({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: ne(["detail-label"]),
      style: He({ minWidth: t.minWidth })
    }, [
      de(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Nt = /* @__PURE__ */ ee(as, [["__scopeId", "data-v-75e9eeb8"]]), ls = /* @__PURE__ */ Z({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      de(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ ee(ls, [["__scopeId", "data-v-2f186e4c"]]), is = { class: "detail-row" }, rs = /* @__PURE__ */ Z({
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
    return (u, n) => (o(), s("div", is, [
      f(Nt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          h(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), S(Rt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          h(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : de(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), he = /* @__PURE__ */ ee(rs, [["__scopeId", "data-v-ef15664a"]]), ds = { class: "modal-header" }, cs = { class: "modal-body" }, us = { class: "status-section" }, ms = {
  key: 0,
  class: "status-section"
}, vs = { class: "section-header-row" }, fs = {
  key: 0,
  class: "workflow-group"
}, gs = { class: "workflow-group-header" }, ps = { class: "workflow-group-title" }, hs = { class: "workflow-list" }, ys = { class: "workflow-name" }, ws = { class: "workflow-issue" }, ks = {
  key: 1,
  class: "workflow-group"
}, bs = { class: "workflow-group-header" }, _s = { class: "workflow-group-title" }, $s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = { class: "workflow-issue" }, Ss = {
  key: 2,
  class: "workflow-group"
}, Is = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, Ms = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ls = {
  key: 3,
  class: "workflow-group"
}, Ts = { class: "workflow-group-header" }, Ns = { class: "workflow-group-title" }, Rs = { class: "workflow-list" }, Ds = { class: "workflow-name" }, Os = {
  key: 4,
  class: "workflow-group"
}, Us = { class: "workflow-group-header" }, Ps = { class: "workflow-group-title" }, Bs = { class: "workflow-list" }, Fs = { class: "workflow-name" }, Vs = {
  key: 5,
  class: "workflow-group"
}, As = { class: "workflow-group-title" }, Ws = { class: "expand-icon" }, Gs = {
  key: 0,
  class: "workflow-list"
}, js = { class: "workflow-name" }, Hs = {
  key: 1,
  class: "status-section"
}, qs = {
  key: 0,
  class: "change-group"
}, Ks = { class: "change-group-header" }, Js = { class: "change-group-title" }, Qs = { class: "change-list" }, Xs = { class: "node-name" }, Ys = {
  key: 0,
  class: "dev-badge"
}, Zs = {
  key: 1,
  class: "change-group"
}, en = { class: "change-group-header" }, tn = { class: "change-group-title" }, on = { class: "change-list" }, sn = { class: "node-name" }, nn = {
  key: 0,
  class: "dev-badge"
}, an = {
  key: 2,
  class: "change-group"
}, ln = { class: "change-list" }, rn = { class: "change-item" }, dn = { class: "node-name" }, cn = {
  key: 3,
  class: "change-group"
}, un = {
  key: 2,
  class: "status-section"
}, mn = { class: "section-header-row" }, vn = {
  key: 0,
  class: "drift-item"
}, fn = { class: "drift-list" }, gn = {
  key: 0,
  class: "drift-list-more"
}, pn = {
  key: 1,
  class: "drift-item"
}, hn = { class: "drift-list" }, yn = {
  key: 0,
  class: "drift-list-more"
}, wn = {
  key: 2,
  class: "drift-item"
}, kn = {
  key: 3,
  class: "drift-item"
}, bn = {
  key: 3,
  class: "status-section"
}, _n = { class: "info-box" }, $n = { class: "drift-list" }, Cn = {
  key: 0,
  class: "drift-list-more"
}, xn = {
  key: 4,
  class: "status-section"
}, Sn = { class: "warning-box" }, In = {
  key: 5,
  class: "empty-state-inline"
}, En = { class: "modal-actions" }, Mn = /* @__PURE__ */ Z({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = _(!1);
    be(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), Ot(() => u.show, (I, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", I);
    }, { immediate: !0 });
    const r = P(() => {
      var I, k, C;
      return ((C = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : C.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), g = P(() => {
      var I, k, C;
      return ((C = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : C.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), y = P(() => {
      var I, k, C;
      return ((C = (k = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : k.synced) == null ? void 0 : C.filter((w) => {
        var R, V, T;
        const $ = (T = (V = (R = u.status) == null ? void 0 : R.workflows) == null ? void 0 : V.analyzed) == null ? void 0 : T.find((z) => z.name === w);
        return !$ || $.status !== "broken";
      })) || [];
    }), p = P(() => {
      var I, k, C, w, $;
      return (I = u.status) != null && I.workflows ? (((k = u.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((C = u.status.workflows.modified) == null ? void 0 : C.length) ?? 0) > 0 || (((w = u.status.workflows.deleted) == null ? void 0 : w.length) ?? 0) > 0 || ((($ = u.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = P(() => {
      var k, C, w;
      const I = (k = u.status) == null ? void 0 : k.git_changes;
      return I ? (((C = I.nodes_added) == null ? void 0 : C.length) ?? 0) > 0 || (((w = I.nodes_removed) == null ? void 0 : w.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), a = P(() => {
      var I, k, C, w, $, R;
      return !p.value && !m.value && ((k = (I = u.status) == null ? void 0 : I.comparison) == null ? void 0 : k.is_synced) && (((C = u.status) == null ? void 0 : C.missing_models_count) ?? 0) === 0 && (((R = ($ = (w = u.status) == null ? void 0 : w.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : R.length) ?? 0) === 0;
    }), v = P(() => {
      var k, C;
      const I = (C = (k = u.status) == null ? void 0 : k.git_changes) == null ? void 0 : C.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function b(I) {
      return typeof I == "string" ? I : I.name;
    }
    function d(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, k) => {
      var C, w, $, R, V, T, z, H, M, N, O, E, x, A, J, oe, K, F, q, B, L, ae;
      return o(), S(Se, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[6] || (k[6] = (Q) => I.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[5] || (k[5] = we(() => {
            }, ["stop"]))
          }, [
            e("div", ds, [
              k[7] || (k[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (Q) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", cs, [
              e("div", us, [
                f(Te, { level: "4" }, {
                  default: i(() => [...k[8] || (k[8] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(he, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              p.value ? (o(), s("div", ms, [
                e("div", vs, [
                  f(Te, { level: "4" }, {
                    default: i(() => [...k[9] || (k[9] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (Q) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", fs, [
                  e("div", gs, [
                    k[10] || (k[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ps, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", hs, [
                    (o(!0), s(W, null, se(r.value, (Q) => (o(), s("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", ys, l(Q.name), 1),
                      e("span", ws, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), s("div", ks, [
                  e("div", bs, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _s, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", $s, [
                    (o(!0), s(W, null, se(g.value, (Q) => (o(), s("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(Q.name), 1),
                      e("span", xs, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (w = (C = t.status.workflows) == null ? void 0 : C.new) != null && w.length ? (o(), s("div", Ss, [
                  e("div", Is, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Es, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), s(W, null, se(t.status.workflows.new, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", zs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && R.length ? (o(), s("div", Ls, [
                  e("div", Ts, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ns, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Rs, [
                    (o(!0), s(W, null, se(t.status.workflows.modified, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (V = t.status.workflows) == null ? void 0 : V.deleted) != null && T.length ? (o(), s("div", Os, [
                  e("div", Us, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ps, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Bs, [
                    (o(!0), s(W, null, se(t.status.workflows.deleted, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Fs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), s("div", Vs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (Q) => n.value = !n.value)
                  }, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", As, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Ws, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", Gs, [
                    (o(!0), s(W, null, se(y.value, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", js, l(Q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), s("div", Hs, [
                f(Te, { level: "4" }, {
                  default: i(() => [...k[16] || (k[16] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (z = t.status.git_changes) == null ? void 0 : z.nodes_added) != null && H.length ? (o(), s("div", qs, [
                  e("div", Ks, [
                    k[17] || (k[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Js, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), s(W, null, se(t.status.git_changes.nodes_added, (Q) => (o(), s("div", {
                      key: b(Q),
                      class: "change-item"
                    }, [
                      e("span", Xs, l(b(Q)), 1),
                      d(Q) ? (o(), s("span", Ys, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (N = (M = t.status.git_changes) == null ? void 0 : M.nodes_removed) != null && N.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    k[18] || (k[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", tn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(W, null, se(t.status.git_changes.nodes_removed, (Q) => (o(), s("div", {
                      key: b(Q),
                      class: "change-item"
                    }, [
                      e("span", sn, l(b(Q)), 1),
                      d(Q) ? (o(), s("span", nn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (O = t.status.git_changes) != null && O.workflow_changes ? (o(), s("div", an, [
                  k[19] || (k[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ln, [
                    e("div", rn, [
                      e("span", dn, l(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (E = t.status.git_changes) != null && E.has_other_changes ? (o(), s("div", cn, [...k[20] || (k[20] = [
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
              (x = t.status.comparison) != null && x.is_synced ? c("", !0) : (o(), s("div", un, [
                e("div", mn, [
                  f(Te, { level: "4" }, {
                    default: i(() => [...k[21] || (k[21] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[3] || (k[3] = (Q) => I.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                k[22] || (k[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (J = (A = t.status.comparison) == null ? void 0 : A.missing_nodes) != null && J.length ? (o(), s("div", vn, [
                  f(he, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", fn, [
                    (o(!0), s(W, null, se(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (o(), s("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", gn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (K = (oe = t.status.comparison) == null ? void 0 : oe.extra_nodes) != null && K.length ? (o(), s("div", pn, [
                  f(he, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", hn, [
                    (o(!0), s(W, null, se(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (o(), s("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", yn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (q = (F = t.status.comparison) == null ? void 0 : F.version_mismatches) != null && q.length ? (o(), s("div", wn, [
                  f(he, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (B = t.status.comparison) != null && B.packages_in_sync ? c("", !0) : (o(), s("div", kn, [
                  f(he, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (L = t.status.comparison) == null ? void 0 : L.disabled_nodes) != null && ae.length ? (o(), s("div", bn, [
                f(Te, { level: "4" }, {
                  default: i(() => [...k[23] || (k[23] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", _n, [
                  k[24] || (k[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", $n, [
                  (o(!0), s(W, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (o(), s("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + l(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Cn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", xn, [
                f(Te, { level: "4" }, {
                  default: i(() => [...k[25] || (k[25] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Sn, [
                  k[26] || (k[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[27] || (k[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              a.value ? (o(), s("div", In, [...k[28] || (k[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", En, [
              f(te, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (Q) => I.$emit("close"))
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
}), zn = /* @__PURE__ */ ee(Mn, [["__scopeId", "data-v-c67eed17"]]), Ln = { class: "health-section-header" }, Tn = { class: "suggestions-content" }, Nn = { class: "suggestions-text" }, Rn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Dn = /* @__PURE__ */ Z({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: u }) {
    const n = t, r = _(!1), g = _(!1);
    function y() {
      r.value = !0;
    }
    function p() {
      r.value = !1, a("view-workflows");
    }
    function m() {
      r.value = !1, a("view-nodes");
    }
    const a = u, v = P(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), b = P(() => n.status.has_changes), d = P(() => {
      const M = n.status.git_changes;
      return M.nodes_added.length > 0 || M.nodes_removed.length > 0 || M.workflow_changes;
    }), I = P(() => n.status.has_changes || v.value), k = P(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), C = P(() => n.status.git_changes.has_other_changes), w = P(() => {
      var M;
      return ((M = n.status.workflows.analyzed) == null ? void 0 : M.filter((N) => N.status === "broken")) || [];
    }), $ = P(() => {
      var M;
      return ((M = n.status.workflows.analyzed) == null ? void 0 : M.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), R = P(() => w.value.length > 0), V = P(() => R.value || $.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), T = P(() => {
      const M = [];
      return n.status.workflows.new.length > 0 && M.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && M.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && M.push(`${n.status.workflows.deleted.length} deleted`), M.length > 0 ? `${M.join(", ")} workflow${M.length === 1 && !M[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), z = P(() => {
      var O, E;
      const M = [], N = n.status.comparison;
      return (O = N.missing_nodes) != null && O.length && M.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (E = N.extra_nodes) != null && E.length && M.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), M.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${M.join(" and ")}.`;
    }), H = P(() => {
      var O, E;
      const M = [], N = n.status.comparison;
      return (O = N.extra_nodes) != null && O.length && (N.extra_nodes.slice(0, 3).forEach((x) => {
        M.push(`Untracked: ${x}`);
      }), N.extra_nodes.length > 3 && M.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (E = N.missing_nodes) != null && E.length && (N.missing_nodes.slice(0, 3).forEach((x) => {
        M.push(`Missing: ${x}`);
      }), N.missing_nodes.length > 3 && M.push(`...and ${N.missing_nodes.length - 3} more missing`)), M;
    });
    return (M, N) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[1] || (N[1] = (O) => g.value = !0),
            onMouseleave: N[2] || (N[2] = (O) => g.value = !1)
          }, [
            e("div", Ln, [
              f(Te, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...N[9] || (N[9] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(no, { name: "fade" }, {
                default: i(() => [
                  g.value ? (o(), S(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: i(() => [...N[10] || (N[10] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            f(Bo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Ut({
              left: i(() => [
                t.status.workflows.new.length ? (o(), S(Fe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), S(Fe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), S(Fe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                f(Fe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: v.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), S(Fe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), S(Fe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), S(Fe, {
                  key: 2,
                  icon: "●",
                  count: k.value,
                  label: k.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                C.value ? (o(), S(Fe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !d.value && !C.value ? (o(), S(Fe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), S(Fe, {
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
                  N[12] || (N[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Tn, [
                    e("span", Nn, l(T.value), 1),
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[0] || (N[0] = (O) => M.$emit("commit-changes"))
                    }, {
                      default: i(() => [...N[11] || (N[11] = [
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
          t.status.is_detached_head ? (o(), S(at, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              f(te, {
                variant: "primary",
                size: "sm",
                onClick: N[3] || (N[3] = (O) => M.$emit("create-branch"))
              }, {
                default: i(() => [...N[13] || (N[13] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          V.value ? (o(), s("div", Rn, [
            f(Te, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...N[14] || (N[14] = [
                h(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            w.value.length > 0 ? (o(), S(at, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: w.value.map((O) => `${O.name} — ${O.issue_summary}`)
            }, {
              actions: i(() => [
                f(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[4] || (N[4] = (O) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[15] || (N[15] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            $.value.length > 0 ? (o(), S(at, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${$.value.length} workflow${$.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: $.value.map((O) => `${O.name} — ${O.models_needing_path_sync_count} model path${O.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                f(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[5] || (N[5] = (O) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[16] || (N[16] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !R.value ? (o(), S(at, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                f(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[6] || (N[6] = (O) => M.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[17] || (N[17] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), S(at, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: z.value,
              items: H.value
            }, {
              actions: i(() => [
                f(te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: i(() => [...N[18] || (N[18] = [
                    h(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[7] || (N[7] = (O) => M.$emit("view-nodes"))
                }, {
                  default: i(() => [...N[19] || (N[19] = [
                    h(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !V.value && !I.value ? (o(), S(Be, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      f(zn, {
        show: r.value,
        status: t.status,
        onClose: N[8] || (N[8] = (O) => r.value = !1),
        onNavigateWorkflows: p,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), On = /* @__PURE__ */ ee(Dn, [["__scopeId", "data-v-698b3f43"]]), Un = ["type", "value", "placeholder", "disabled"], Pn = /* @__PURE__ */ Z({
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
    const r = t, g = n, y = _(null);
    function p(m) {
      const a = m.target.value;
      g("update:modelValue", a);
    }
    return be(() => {
      r.autoFocus && y.value && y.value.focus();
    }), u({
      focus: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.blur();
      }
    }), (m, a) => (o(), s("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: p,
      onKeyup: [
        a[0] || (a[0] = je((v) => m.$emit("enter"), ["enter"])),
        a[1] || (a[1] = je((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: a[2] || (a[2] = (v) => m.$emit("focus")),
      onBlur: a[3] || (a[3] = (v) => m.$emit("blur"))
    }, null, 42, Un));
  }
}), xt = /* @__PURE__ */ ee(Pn, [["__scopeId", "data-v-0380d08f"]]), Bn = { class: "branch-create-form" }, Fn = { class: "form-actions" }, Vn = /* @__PURE__ */ Z({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = _(""), g = P(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function y() {
      g.value && (n("create", r.value.trim()), r.value = "");
    }
    function p() {
      r.value = "", n("cancel");
    }
    return (m, a) => (o(), s("div", Bn, [
      f(xt, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: p
      }, null, 8, ["modelValue"]),
      e("div", Fn, [
        f(te, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: i(() => [...a[1] || (a[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(te, {
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
}), An = /* @__PURE__ */ ee(Vn, [["__scopeId", "data-v-7c500394"]]), Wn = { class: "branch-list-item__indicator" }, Gn = { class: "branch-list-item__name" }, jn = {
  key: 0,
  class: "branch-list-item__actions"
}, Hn = {
  key: 0,
  class: "branch-list-item__current-label"
}, qn = /* @__PURE__ */ Z({
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
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", Wn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Gn, l(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", jn, [
        de(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", Hn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Kn = /* @__PURE__ */ ee(qn, [["__scopeId", "data-v-c6581a24"]]), Jn = {
  key: 2,
  class: "branch-list"
}, Qn = /* @__PURE__ */ Z({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: u }) {
    const n = u, r = _(!1);
    function g(p) {
      n("create", p), y();
    }
    function y() {
      r.value = !1;
    }
    return (p, m) => (o(), S(Ee, null, {
      header: i(() => [
        f(Me, { title: "BRANCHES" }, {
          actions: i(() => [
            f(te, {
              variant: "ghost",
              size: "sm",
              onClick: m[0] || (m[0] = (a) => r.value = !0),
              title: "Create new branch"
            }, {
              default: i(() => [...m[1] || (m[1] = [
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
      content: i(() => [
        r.value ? (o(), S(An, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), S(Be, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", Jn, [
          (o(!0), s(W, null, se(t.branches, (a) => (o(), S(Kn, {
            key: a.name,
            "branch-name": a.name,
            "is-current": a.is_current
          }, {
            actions: i(() => [
              a.is_current ? c("", !0) : (o(), S(te, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (v) => p.$emit("switch", a.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
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
}), Xn = /* @__PURE__ */ ee(Qn, [["__scopeId", "data-v-763d6ec4"]]), Yn = { class: "commit-list" }, Zn = /* @__PURE__ */ Z({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", Yn, [
      de(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ea = /* @__PURE__ */ ee(Zn, [["__scopeId", "data-v-8c5ee761"]]), ta = { class: "commit-hash" }, oa = /* @__PURE__ */ Z({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = P(() => u.hash.slice(0, u.length));
    return (r, g) => (o(), s("span", ta, l(n.value), 1));
  }
}), Jt = /* @__PURE__ */ ee(oa, [["__scopeId", "data-v-7c333cc6"]]), sa = { class: "commit-message" }, na = { class: "commit-date" }, aa = /* @__PURE__ */ Z({
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
    return (y, p) => (o(), s("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(Jt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", sa, l(t.message), 1),
      e("span", na, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = we(() => {
        }, ["stop"]))
      }, [
        de(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ ee(aa, [["__scopeId", "data-v-dd7c621b"]]), ia = /* @__PURE__ */ Z({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), S(Ee, null, {
      header: i(() => [
        f(Me, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), S(Be, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), S(ea, { key: 1 }, {
          default: i(() => [
            (o(!0), s(W, null, se(t.commits, (r) => (o(), S(la, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => u.$emit("select", r)
            }, {
              actions: i(() => [
                f(te, {
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
}), ra = /* @__PURE__ */ ee(ia, [["__scopeId", "data-v-981c3c64"]]), R1 = [
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
], D1 = {
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
}, da = [
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
], O1 = [
  ...da,
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
  const t = _(!1), u = _(null);
  async function n(X, ie) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const ge = await window.app.api.fetchApi(X, ie);
    if (!ge.ok) {
      const ot = await ge.json().catch(() => ({}));
      throw new Error(ot.error || ot.message || `Request failed: ${ge.status}`);
    }
    return ge.json();
  }
  async function r(X = !1) {
    return n(X ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(X, ie = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: X, allow_issues: ie })
    });
  }
  async function y(X = 10, ie = 0) {
    return n(`/v2/comfygit/log?limit=${X}&offset=${ie}`);
  }
  async function p(X) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function a(X) {
    return n(`/v2/comfygit/commit/${X}`);
  }
  async function v(X, ie = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: X, force: ie })
    });
  }
  async function b(X, ie = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, start_point: ie })
    });
  }
  async function d(X, ie = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: X, force: ie })
    });
  }
  async function I() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const X = await r();
        return [{
          name: X.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + X.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: X.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: X.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function k(X) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: X })
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function w(X, ie, ge) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, pytorch_backend: ie, clone_from: ge })
    });
  }
  async function $(X) {
    return n(`/v2/workspace/environments/${X}`, {
      method: "DELETE"
    });
  }
  async function R(X = !1) {
    try {
      return n(X ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ie = await r(X), ge = [];
      return ie.workflows.new.forEach(($e) => {
        ge.push({ name: $e, status: "new", missing_nodes: 0, missing_models: 0, path: $e });
      }), ie.workflows.modified.forEach(($e) => {
        ge.push({ name: $e, status: "modified", missing_nodes: 0, missing_models: 0, path: $e });
      }), ie.workflows.synced.forEach(($e) => {
        ge.push({ name: $e, status: "synced", missing_nodes: 0, missing_models: 0, path: $e });
      }), ge;
    }
  }
  async function V(X) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(X)}/details`);
  }
  async function T(X) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(X)}/resolve`, {
      method: "POST"
    });
  }
  async function z(X, ie, ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(X)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ie, install_models: ge })
    });
  }
  async function H(X, ie, ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(X)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ie, importance: ge })
    });
  }
  async function M() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function N() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function O(X) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(X)}`);
  }
  async function E(X) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function x(X, ie) {
    return n(`/v2/workspace/models/${X}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function A(X, ie) {
    return n(`/v2/workspace/models/${X}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function J(X) {
    return n(`/v2/workspace/models/${X}`, {
      method: "DELETE"
    });
  }
  async function oe(X) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function K() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function F() {
    return n("/v2/workspace/models/directory");
  }
  async function q(X) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function B() {
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
  async function L(X) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function ae(X, ie) {
    try {
      const ge = new URLSearchParams();
      return X && ge.append("level", X), ie && ge.append("lines", ie.toString()), n(`/v2/comfygit/debug/logs?${ge}`);
    } catch {
      return [];
    }
  }
  async function Q(X, ie) {
    try {
      const ge = new URLSearchParams();
      return X && ge.append("level", X), ie && ge.append("lines", ie.toString()), n(`/v2/workspace/debug/logs?${ge}`);
    } catch {
      return [];
    }
  }
  async function _e() {
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
  async function pe(X) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(X)}/track-dev`, {
      method: "POST"
    });
  }
  async function Re(X) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(X)}/install`, {
      method: "POST"
    });
  }
  async function mt(X) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(X)}/update`, {
      method: "POST"
    });
  }
  async function fe(X) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function Ne() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function vt(X, ie) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, url: ie })
    });
  }
  async function Qe(X) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function ze(X, ie, ge) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ie, push_url: ge })
    });
  }
  async function ft(X) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(X)}/fetch`, {
      method: "POST"
    });
  }
  async function tt(X) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(X)}/status`);
    } catch {
      return null;
    }
  }
  async function gt(X = "skip", ie = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: X,
        remove_extra_nodes: ie
      })
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: g,
    getHistory: y,
    exportEnv: p,
    // Git Operations
    getBranches: m,
    getCommitDetail: a,
    checkout: v,
    createBranch: b,
    switchBranch: d,
    // Environment Management
    getEnvironments: I,
    switchEnvironment: k,
    getSwitchProgress: C,
    createEnvironment: w,
    deleteEnvironment: $,
    // Workflow Management
    getWorkflows: R,
    getWorkflowDetails: V,
    resolveWorkflow: T,
    installWorkflowDeps: z,
    setModelImportance: H,
    // Model Management
    getEnvironmentModels: M,
    getWorkspaceModels: N,
    getModelDetails: O,
    openFileLocation: E,
    addModelSource: x,
    removeModelSource: A,
    deleteModel: J,
    downloadModel: oe,
    scanWorkspaceModels: K,
    getModelsDirectory: F,
    setModelsDirectory: q,
    // Settings
    getConfig: B,
    updateConfig: L,
    // Debug/Logs
    getEnvironmentLogs: ae,
    getWorkspaceLogs: Q,
    // Node Management
    getNodes: _e,
    trackNodeAsDev: pe,
    installNode: Re,
    updateNode: mt,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: Ne,
    addRemote: vt,
    removeRemote: Qe,
    updateRemoteUrl: ze,
    fetchRemote: ft,
    getRemoteSyncStatus: tt,
    // Environment Sync
    syncEnvironmentManually: gt
  };
}
const ca = { class: "base-modal-header" }, ua = {
  key: 0,
  class: "base-modal-title"
}, ma = { class: "base-modal-body" }, va = {
  key: 0,
  class: "base-modal-loading"
}, fa = {
  key: 1,
  class: "base-modal-error"
}, ga = {
  key: 0,
  class: "base-modal-footer"
}, pa = /* @__PURE__ */ Z({
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
    function y(p) {
      p.key === "Escape" && r("close");
    }
    return be(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), ao(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (p, m) => (o(), S(Se, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = we(() => {
          }, ["stop"]))
        }, [
          e("div", ca, [
            de(p.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", ua, l(t.title), 1)) : c("", !0)
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
          e("div", ma, [
            t.loading ? (o(), s("div", va, "Loading...")) : t.error ? (o(), s("div", fa, l(t.error), 1)) : de(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (o(), s("div", ga, [
            de(p.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), dt = /* @__PURE__ */ ee(pa, [["__scopeId", "data-v-2125a0e6"]]), ha = ["type", "disabled"], ya = {
  key: 0,
  class: "spinner"
}, wa = /* @__PURE__ */ Z({
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
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", ya)) : c("", !0),
      de(u.$slots, "default", {}, void 0, !0)
    ], 10, ha));
  }
}), le = /* @__PURE__ */ ee(wa, [["__scopeId", "data-v-f3452606"]]), ka = {
  key: 0,
  class: "base-title-count"
}, ba = /* @__PURE__ */ Z({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (o(), S(Dt(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: i(() => [
        de(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", ka, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _t = /* @__PURE__ */ ee(ba, [["__scopeId", "data-v-5a01561d"]]), _a = ["value", "disabled"], $a = {
  key: 0,
  value: "",
  disabled: ""
}, Ca = ["value"], xa = {
  key: 0,
  class: "base-select-error"
}, Sa = /* @__PURE__ */ Z({
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
      class: ne(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ne(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), s("option", $a, l(t.placeholder), 1)) : c("", !0),
        (o(!0), s(W, null, se(t.options, (y) => (o(), s("option", {
          key: u(y),
          value: u(y)
        }, l(n(y)), 9, Ca))), 128))
      ], 42, _a),
      t.error ? (o(), s("span", xa, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ia = /* @__PURE__ */ ee(Sa, [["__scopeId", "data-v-7436d745"]]), Ea = { class: "popover-header" }, Ma = { class: "popover-title" }, za = { class: "popover-content" }, La = {
  key: 0,
  class: "popover-actions"
}, Ta = /* @__PURE__ */ Z({
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
          onClick: n[1] || (n[1] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Ea, [
            e("h4", Ma, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", za, [
            de(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", La, [
            de(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ ee(Ta, [["__scopeId", "data-v-42815ace"]]), Na = { class: "detail-section" }, Ra = {
  key: 0,
  class: "empty-message"
}, Da = { class: "model-header" }, Oa = { class: "model-name" }, Ua = { class: "model-details" }, Pa = { class: "model-row" }, Ba = { class: "model-row" }, Fa = { class: "label" }, Va = {
  key: 0,
  class: "model-row model-row-nodes"
}, Aa = { class: "node-list" }, Wa = ["onClick"], Ga = {
  key: 1,
  class: "model-row"
}, ja = { class: "value" }, Ha = {
  key: 0,
  class: "model-actions"
}, qa = { class: "detail-section" }, Ka = {
  key: 0,
  class: "empty-message"
}, Ja = { class: "node-name" }, Qa = {
  key: 0,
  class: "node-version"
}, Xa = /* @__PURE__ */ Z({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: p } = Ie(), m = _(null), a = _(!1), v = _(null), b = _(!1), d = _({}), I = _({}), k = _(!1), C = _(/* @__PURE__ */ new Set()), w = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function $(E) {
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
    function R(E) {
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
    function V(E) {
      if (!E.loaded_by || E.loaded_by.length === 0) return [];
      const x = E.hash || E.filename;
      return C.value.has(x) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function T(E) {
      return C.value.has(E);
    }
    function z(E) {
      C.value.has(E) ? C.value.delete(E) : C.value.add(E), C.value = new Set(C.value);
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
      d.value[E] = x, b.value = !0;
    }
    async function N() {
      if (!b.value) {
        r("close");
        return;
      }
      a.value = !0, v.value = null;
      try {
        for (const [E, x] of Object.entries(d.value))
          await y(n.workflowName, E, x);
        r("refresh"), r("close");
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to save changes";
      } finally {
        a.value = !1;
      }
    }
    async function O(E) {
      I.value[E] = !0, v.value = null;
      try {
        await p(n.workflowName, !0, !1), await H();
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to install node";
      } finally {
        I.value[E] = !1;
      }
    }
    return be(H), (E, x) => (o(), s(W, null, [
      f(dt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: a.value,
        error: v.value || void 0,
        onClose: x[5] || (x[5] = (A) => r("close"))
      }, {
        body: i(() => [
          m.value ? (o(), s(W, { key: 0 }, [
            e("section", Na, [
              f(_t, { variant: "section" }, {
                default: i(() => [
                  h("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", Ra, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(W, null, se(m.value.models, (A) => (o(), s("div", {
                key: A.hash || A.filename,
                class: "model-card"
              }, [
                e("div", Da, [
                  x[7] || (x[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Oa, l(A.filename), 1)
                ]),
                e("div", Ua, [
                  e("div", Pa, [
                    x[8] || (x[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", $(A.status)])
                    }, l(R(A.status)), 3)
                  ]),
                  e("div", Ba, [
                    e("span", Fa, [
                      x[9] || (x[9] = h(" Importance: ", -1)),
                      f(Kt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: x[0] || (x[0] = (J) => k.value = !0)
                      })
                    ]),
                    f(Ia, {
                      "model-value": d.value[A.filename] || A.importance,
                      options: w,
                      "onUpdate:modelValue": (J) => M(A.filename, J)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  A.loaded_by && A.loaded_by.length > 0 ? (o(), s("div", Va, [
                    x[10] || (x[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Aa, [
                      (o(!0), s(W, null, se(V(A), (J, oe) => (o(), s("div", {
                        key: `${J.node_id}-${oe}`,
                        class: "node-reference"
                      }, l(J.node_type) + " (Node #" + l(J.node_id) + ") ", 1))), 128)),
                      A.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (J) => z(A.hash || A.filename)
                      }, l(T(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, Wa)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  A.size_mb ? (o(), s("div", Ga, [
                    x[11] || (x[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", ja, l(A.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                A.status !== "available" ? (o(), s("div", Ha, [
                  A.status === "downloadable" ? (o(), S(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: x[1] || (x[1] = (J) => r("resolve"))
                  }, {
                    default: i(() => [...x[12] || (x[12] = [
                      h(" Download ", -1)
                    ])]),
                    _: 1
                  })) : A.status === "path_mismatch" ? (o(), S(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[2] || (x[2] = (J) => r("resolve"))
                  }, {
                    default: i(() => [...x[13] || (x[13] = [
                      h(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), S(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[3] || (x[3] = (J) => r("resolve"))
                  }, {
                    default: i(() => [...x[14] || (x[14] = [
                      h(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", qa, [
              f(_t, { variant: "section" }, {
                default: i(() => [
                  h("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", Ka, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(W, null, se(m.value.nodes, (A) => (o(), s("div", {
                key: A.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, l(A.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ja, l(A.name), 1),
                A.version ? (o(), s("span", Qa, "v" + l(A.version), 1)) : c("", !0),
                A.status === "missing" ? (o(), S(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: I.value[A.name],
                  onClick: (J) => O(A.name),
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
          f(le, {
            variant: "secondary",
            onClick: x[4] || (x[4] = (A) => r("close"))
          }, {
            default: i(() => [...x[16] || (x[16] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), S(le, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: i(() => [...x[17] || (x[17] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(qe, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[6] || (x[6] = (A) => k.value = !1)
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
}), Ya = /* @__PURE__ */ ee(Xa, [["__scopeId", "data-v-0b14d32e"]]), ve = qt({
  items: [],
  status: "idle"
});
let Ve = null;
function Qt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function zt(t) {
  return ve.items.find((u) => u.id === t);
}
async function lt() {
  if (ve.status === "downloading") return;
  const t = ve.items.find((u) => u.status === "queued");
  if (!t) {
    ve.status = "idle";
    return;
  }
  ve.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Za(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    ve.status = "idle", lt();
  }
}
async function Za(t) {
  return new Promise((u, n) => {
    Ve && (Ve.close(), Ve = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ve = g;
    let y = Date.now(), p = 0, m = !1;
    g.onmessage = (a) => {
      try {
        const v = JSON.parse(a.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const b = Date.now(), d = (b - y) / 1e3;
            if (d > 0.5) {
              const I = t.downloaded - p;
              if (t.speed = I / d, y = b, p = t.downloaded, t.speed > 0 && t.size > 0) {
                const k = t.size - t.downloaded;
                t.eta = k / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, g.close(), Ve = null, u();
            break;
          case "error":
            m = !0, g.close(), Ve = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Ve = null, m || n(new Error("Connection lost"));
    };
  });
}
async function el() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (ve.items.some((g) => g.url === n.url && g.filename === n.filename))
        continue;
      const r = {
        id: Qt(),
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
      ve.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function St() {
  function t($) {
    for (const R of $) {
      if (ve.items.some(
        (z) => z.url === R.url && z.targetPath === R.targetPath && ["queued", "downloading", "paused", "completed"].includes(z.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${R.filename}`);
        continue;
      }
      const T = {
        id: Qt(),
        workflow: R.workflow,
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath,
        size: R.size || 0,
        type: R.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ve.items.push(T);
    }
    ve.status === "idle" && lt();
  }
  async function u($) {
    const R = zt($);
    if (R) {
      if (R.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(R.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), R.status = "failed", R.error = "Cancelled by user", ve.status = "idle", lt();
      } else if (R.status === "queued") {
        const V = ve.items.findIndex((T) => T.id === $);
        V >= 0 && ve.items.splice(V, 1);
      }
    }
  }
  function n($) {
    const R = zt($);
    !R || R.status !== "failed" || (R.status = "queued", R.error = void 0, R.progress = 0, R.downloaded = 0, ve.status === "idle" && lt());
  }
  function r($) {
    const R = zt($);
    !R || R.status !== "paused" || (R.status = "queued", ve.status === "idle" && lt());
  }
  function g() {
    const $ = ve.items.filter((R) => R.status === "paused");
    for (const R of $)
      R.status = "queued";
    ve.status === "idle" && lt();
  }
  function y($) {
    const R = ve.items.findIndex((V) => V.id === $);
    R >= 0 && ["completed", "failed", "paused"].includes(ve.items[R].status) && ve.items.splice(R, 1);
  }
  function p() {
    ve.items = ve.items.filter(($) => $.status !== "completed");
  }
  function m() {
    ve.items = ve.items.filter(($) => $.status !== "failed");
  }
  const a = P(
    () => ve.items.find(($) => $.status === "downloading")
  ), v = P(
    () => ve.items.filter(($) => $.status === "queued")
  ), b = P(
    () => ve.items.filter(($) => $.status === "completed")
  ), d = P(
    () => ve.items.filter(($) => $.status === "failed")
  ), I = P(
    () => ve.items.filter(($) => $.status === "paused")
  ), k = P(() => ve.items.length > 0), C = P(
    () => ve.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), w = P(
    () => ve.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: lo(ve),
    // Computed
    currentDownload: a,
    queuedItems: v,
    completedItems: b,
    failedItems: d,
    pausedItems: I,
    hasItems: k,
    activeCount: C,
    hasPaused: w,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: p,
    clearFailed: m,
    loadPendingDownloads: el
  };
}
function tl() {
  const t = _(null), u = _(null), n = _([]), r = _([]), g = _(!1), y = _(null);
  async function p(V, T) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const z = await window.app.api.fetchApi(V, T);
    if (!z.ok) {
      const M = await z.json().catch(() => ({})), N = M.error || M.message || `Request failed: ${z.status}`;
      throw new Error(N);
    }
    return z.json();
  }
  async function m(V) {
    g.value = !0, y.value = null;
    try {
      let T;
      return ht() || (T = await p(
        `/v2/comfygit/workflow/${V}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = T, T;
    } catch (T) {
      const z = T instanceof Error ? T.message : "Unknown error occurred";
      throw y.value = z, T;
    } finally {
      g.value = !1;
    }
  }
  async function a(V, T, z, H) {
    g.value = !0, y.value = null;
    try {
      let M;
      if (!ht()) {
        const N = Object.fromEntries(T), O = Object.fromEntries(z), E = H ? Array.from(H) : [];
        M = await p(
          `/v2/comfygit/workflow/${V}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: N,
              model_choices: O,
              skipped_packages: E
            })
          }
        );
      }
      return u.value = M, M;
    } catch (M) {
      const N = M instanceof Error ? M.message : "Unknown error occurred";
      throw y.value = N, M;
    } finally {
      g.value = !1;
    }
  }
  async function v(V, T = 10) {
    g.value = !0, y.value = null;
    try {
      let z;
      return ht() || (z = await p(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: T })
        }
      )), n.value = z.results, z.results;
    } catch (z) {
      const H = z instanceof Error ? z.message : "Unknown error occurred";
      throw y.value = H, z;
    } finally {
      g.value = !1;
    }
  }
  async function b(V, T = 10) {
    g.value = !0, y.value = null;
    try {
      let z;
      return ht() || (z = await p(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: T })
        }
      )), r.value = z.results, z.results;
    } catch (z) {
      const H = z instanceof Error ? z.message : "Unknown error occurred";
      throw y.value = H, z;
    } finally {
      g.value = !1;
    }
  }
  const d = qt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function I() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0, d.nodeInstallProgress = void 0;
  }
  async function k(V) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0, d.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return ht(), await C(V);
    } catch (T) {
      const z = T instanceof Error ? T.message : "Failed to install nodes";
      throw d.installError = z, T;
    }
  }
  async function C(V) {
    var z;
    const T = await p(
      `/v2/comfygit/workflow/${V}/install`,
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
      const H = new Map(((z = T.failed) == null ? void 0 : z.map((M) => [M.node_id, M.error])) || []);
      for (let M = 0; M < d.nodesToInstall.length; M++) {
        const N = d.nodesToInstall[M], O = H.get(N);
        d.nodeInstallProgress.completedNodes.push({
          node_id: N,
          success: !O,
          error: O
        });
      }
    }
    return d.nodesInstalled = T.nodes_installed, d.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (d.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function w(V, T, z) {
    I(), d.phase = "resolving", y.value = null;
    const H = Object.fromEntries(T), M = Object.fromEntries(z);
    try {
      const N = await fetch(`/v2/comfygit/workflow/${V}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: M
        })
      });
      if (!N.ok)
        throw new Error(`Request failed: ${N.status}`);
      if (!N.body)
        throw new Error("No response body");
      const O = N.body.getReader(), E = new TextDecoder();
      let x = "";
      for (; ; ) {
        const { done: A, value: J } = await O.read();
        if (A) break;
        x += E.decode(J, { stream: !0 });
        const oe = x.split(`

`);
        x = oe.pop() || "";
        for (const K of oe) {
          if (!K.trim()) continue;
          const F = K.split(`
`);
          let q = "", B = "";
          for (const L of F)
            L.startsWith("event: ") ? q = L.slice(7) : L.startsWith("data: ") && (B = L.slice(6));
          if (B)
            try {
              const L = JSON.parse(B);
              $(q, L);
            } catch (L) {
              console.warn("Failed to parse SSE event:", L);
            }
        }
      }
    } catch (N) {
      const O = N instanceof Error ? N.message : "Unknown error occurred";
      throw y.value = O, d.error = O, d.phase = "error", N;
    }
  }
  function $(V, T) {
    switch (V) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = T.total;
        break;
      case "file_start":
        d.currentFile = T.filename, d.currentFileIndex = T.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = T.downloaded, d.bytesTotal = T.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = T.nodes_to_install || [], T.download_results && (d.completedFiles = T.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = T.message, d.phase = "error", y.value = T.message;
        break;
    }
  }
  function R(V, T) {
    const { addToQueue: z } = St(), H = T.filter((M) => M.url && M.target_path).map((M) => ({
      workflow: V,
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
    error: y,
    progress: d,
    // Methods
    analyzeWorkflow: m,
    applyResolution: a,
    applyResolutionWithProgress: w,
    installNodes: k,
    searchNodes: v,
    searchModels: b,
    resetProgress: I,
    queueModelDownloads: R
  };
}
const ol = { class: "resolution-stepper" }, sl = { class: "stepper-header" }, nl = ["onClick"], al = {
  key: 0,
  class: "step-icon"
}, ll = {
  key: 1,
  class: "step-number"
}, il = { class: "step-label" }, rl = {
  key: 0,
  class: "step-connector"
}, dl = { class: "stepper-content" }, cl = /* @__PURE__ */ Z({
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
      var b;
      if ((b = n.stepStats) != null && b[v]) {
        const d = n.stepStats[v];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(v);
    }
    function y(v) {
      var b;
      if ((b = n.stepStats) != null && b[v]) {
        const d = n.stepStats[v];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function p(v) {
      return g(v) ? "state-complete" : y(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function a(v) {
      r("step-change", v);
    }
    return (v, b) => (o(), s("div", ol, [
      e("div", sl, [
        (o(!0), s(W, null, se(t.steps, (d, I) => (o(), s("div", {
          key: d.id,
          class: ne(["step", {
            active: t.currentStep === d.id,
            completed: g(d.id),
            "in-progress": y(d.id),
            disabled: m(d.id)
          }]),
          onClick: (k) => a(d.id)
        }, [
          e("div", {
            class: ne(["step-indicator", p(d.id)])
          }, [
            g(d.id) ? (o(), s("span", al, "✓")) : (o(), s("span", ll, l(I + 1), 1))
          ], 2),
          e("div", il, l(d.label), 1),
          I < t.steps.length - 1 ? (o(), s("div", rl)) : c("", !0)
        ], 10, nl))), 128))
      ]),
      e("div", dl, [
        de(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ul = /* @__PURE__ */ ee(cl, [["__scopeId", "data-v-2a7b3af8"]]), ml = /* @__PURE__ */ Z({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = P(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = P(() => `confidence-${n.value}`), g = P(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (y, p) => (o(), s("span", {
      class: ne(["confidence-badge", r.value, t.size])
    }, l(g.value), 3));
  }
}), Ft = /* @__PURE__ */ ee(ml, [["__scopeId", "data-v-17ec4b80"]]), vl = { class: "node-info" }, fl = { class: "node-info-text" }, gl = { class: "item-body" }, pl = {
  key: 0,
  class: "resolved-state"
}, hl = {
  key: 1,
  class: "multiple-options"
}, yl = { class: "options-list" }, wl = ["onClick"], kl = ["name", "value", "checked", "onChange"], bl = { class: "option-content" }, _l = { class: "option-header" }, $l = { class: "option-package-id" }, Cl = {
  key: 0,
  class: "option-title"
}, xl = { class: "option-meta" }, Sl = {
  key: 0,
  class: "installed-badge"
}, Il = { class: "action-buttons" }, El = {
  key: 2,
  class: "unresolved"
}, Ml = { class: "action-buttons" }, zl = /* @__PURE__ */ Z({
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
    const n = t, r = u, g = P(() => !!n.choice);
    P(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), P(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const y = P(() => {
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
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", vl, [
        e("span", fl, [
          a[7] || (a[7] = h("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", gl, [
        g.value ? (o(), s("div", pl, [
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (v) => r("clear-choice"))
          }, {
            default: i(() => [...a[8] || (a[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", hl, [
          a[12] || (a[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", yl, [
            (o(!0), s(W, null, se(t.options, (v, b) => (o(), s("label", {
              key: v.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (d) => p(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (d) => p(b)
              }, null, 40, kl),
              e("div", bl, [
                e("div", _l, [
                  e("span", $l, l(v.package_id), 1),
                  f(Ft, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (o(), s("div", Cl, l(v.title), 1)) : c("", !0),
                e("div", xl, [
                  v.is_installed ? (o(), s("span", Sl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, wl))), 128))
          ]),
          e("div", Il, [
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: a[1] || (a[1] = (v) => r("search"))
            }, {
              default: i(() => [...a[9] || (a[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: a[2] || (a[2] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(le, {
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
        ])) : (o(), s("div", El, [
          a[16] || (a[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Ml, [
            f(le, {
              variant: "primary",
              size: "sm",
              onClick: a[4] || (a[4] = (v) => r("search"))
            }, {
              default: i(() => [...a[13] || (a[13] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: a[5] || (a[5] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[14] || (a[14] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(le, {
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
}), Ll = /* @__PURE__ */ ee(zl, [["__scopeId", "data-v-e02629e7"]]), Tl = { class: "item-navigator" }, Nl = { class: "nav-item-info" }, Rl = ["title"], Dl = { class: "nav-controls" }, Ol = { class: "nav-arrows" }, Ul = ["disabled"], Pl = ["disabled"], Bl = { class: "nav-position" }, Fl = /* @__PURE__ */ Z({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, g) => (o(), s("div", Tl, [
      e("div", Nl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Rl)
      ]),
      e("div", Dl, [
        e("div", Ol, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (y) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Ul),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (y) => n("next")),
            title: "Next item"
          }, " → ", 8, Pl)
        ]),
        e("span", Bl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), Xt = /* @__PURE__ */ ee(Fl, [["__scopeId", "data-v-74af7920"]]), Vl = ["type", "value", "placeholder", "disabled"], Al = {
  key: 0,
  class: "base-input-error"
}, Wl = /* @__PURE__ */ Z({
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
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = je((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = je((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Vl),
      t.error ? (o(), s("span", Al, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Pe = /* @__PURE__ */ ee(Wl, [["__scopeId", "data-v-9ba02cdc"]]), Gl = { class: "node-resolution-step" }, jl = {
  key: 0,
  class: "auto-resolved-section"
}, Hl = { class: "section-header" }, ql = { class: "stat-badge" }, Kl = { class: "resolved-packages-list" }, Jl = { class: "package-info" }, Ql = { class: "package-id" }, Xl = { class: "node-count" }, Yl = { class: "package-actions" }, Zl = {
  key: 0,
  class: "status-badge install"
}, ei = {
  key: 1,
  class: "status-badge skip"
}, ti = ["onClick"], oi = {
  key: 1,
  class: "section-divider"
}, si = { class: "step-header" }, ni = { class: "stat-badge" }, ai = {
  key: 1,
  class: "step-body"
}, li = {
  key: 3,
  class: "empty-state"
}, ii = { class: "node-search-modal" }, ri = { class: "node-modal-body" }, di = {
  key: 0,
  class: "node-search-results"
}, ci = ["onClick"], ui = { class: "node-result-header" }, mi = { class: "node-result-package-id" }, vi = {
  key: 0,
  class: "node-result-description"
}, fi = {
  key: 1,
  class: "node-no-results"
}, gi = {
  key: 2,
  class: "node-searching"
}, pi = { class: "node-manual-entry-modal" }, hi = { class: "node-modal-body" }, yi = { class: "node-modal-actions" }, wi = /* @__PURE__ */ Z({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = _(0), y = _(!1), p = _(!1), m = _(""), a = _(""), v = _([]), b = _(!1), d = P(() => n.nodes[g.value]), I = P(() => n.nodes.filter((K) => n.nodeChoices.has(K.node_type)).length), k = P(() => n.autoResolvedPackages.filter((K) => !n.skippedPackages.has(K.package_id)).length);
    function C(K) {
      return n.skippedPackages.has(K);
    }
    function w(K) {
      r("package-skip", K);
    }
    const $ = P(() => {
      var F;
      if (!d.value) return "not-found";
      const K = n.nodeChoices.get(d.value.node_type);
      if (K)
        switch (K.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (F = d.value.options) != null && F.length ? "ambiguous" : "not-found";
    }), R = P(() => {
      var F;
      if (!d.value) return;
      const K = n.nodeChoices.get(d.value.node_type);
      if (K)
        switch (K.action) {
          case "install":
            return K.package_id ? `→ ${K.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (F = d.value.options) != null && F.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function V(K) {
      K >= 0 && K < n.nodes.length && (g.value = K);
    }
    function T() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function z() {
      d.value && r("skip", d.value.node_type);
    }
    function H(K) {
      d.value && r("option-selected", d.value.node_type, K);
    }
    function M() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function N() {
      d.value && (m.value = d.value.node_type, y.value = !0);
    }
    function O() {
      a.value = "", p.value = !0;
    }
    function E() {
      y.value = !1, m.value = "", v.value = [];
    }
    function x() {
      p.value = !1, a.value = "";
    }
    function A() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function J(K) {
      d.value && (r("manual-entry", d.value.node_type, K.package_id), E());
    }
    function oe() {
      !d.value || !a.value.trim() || (r("manual-entry", d.value.node_type, a.value.trim()), x());
    }
    return (K, F) => {
      var q, B;
      return o(), s("div", Gl, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", jl, [
          e("div", Hl, [
            F[4] || (F[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", ql, l(k.value) + "/" + l(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Kl, [
            (o(!0), s(W, null, se(t.autoResolvedPackages, (L) => (o(), s("div", {
              key: L.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Jl, [
                e("code", Ql, l(L.package_id), 1),
                e("span", Xl, l(L.node_types_count) + " node type" + l(L.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Yl, [
                C(L.package_id) ? (o(), s("span", ei, " SKIPPED ")) : (o(), s("span", Zl, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ae) => w(L.package_id)
                }, l(C(L.package_id) ? "Include" : "Skip"), 9, ti)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", oi)) : c("", !0),
        t.nodes.length > 0 ? (o(), s(W, { key: 2 }, [
          e("div", si, [
            F[5] || (F[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", ni, l(I.value) + "/" + l(t.nodes.length) + " resolved", 1)
          ]),
          d.value ? (o(), S(Xt, {
            key: 0,
            "item-name": d.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: F[0] || (F[0] = (L) => V(g.value - 1)),
            onNext: F[1] || (F[1] = (L) => V(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          d.value ? (o(), s("div", ai, [
            f(Ll, {
              "node-type": d.value.node_type,
              "has-multiple-options": !!((q = d.value.options) != null && q.length),
              options: d.value.options,
              choice: (B = t.nodeChoices) == null ? void 0 : B.get(d.value.node_type),
              status: $.value,
              "status-label": R.value,
              onMarkOptional: T,
              onSkip: z,
              onManualEntry: O,
              onSearch: N,
              onOptionSelected: H,
              onClearChoice: M
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", li, [...F[6] || (F[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (o(), S(Se, { to: "body" }, [
          y.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: we(E, ["self"])
          }, [
            e("div", ii, [
              e("div", { class: "node-modal-header" }, [
                F[7] || (F[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", ri, [
                f(Pe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": F[2] || (F[2] = (L) => m.value = L),
                  placeholder: "Search by node type, package name...",
                  onInput: A
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), s("div", di, [
                  (o(!0), s(W, null, se(v.value, (L) => (o(), s("div", {
                    key: L.package_id,
                    class: "node-search-result-item",
                    onClick: (ae) => J(L)
                  }, [
                    e("div", ui, [
                      e("code", mi, l(L.package_id), 1),
                      L.match_confidence ? (o(), S(Ft, {
                        key: 0,
                        confidence: L.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    L.description ? (o(), s("div", vi, l(L.description), 1)) : c("", !0)
                  ], 8, ci))), 128))
                ])) : m.value && !b.value ? (o(), s("div", fi, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), s("div", gi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(Se, { to: "body" }, [
          p.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: we(x, ["self"])
          }, [
            e("div", pi, [
              e("div", { class: "node-modal-header" }, [
                F[8] || (F[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: x
                }, "✕")
              ]),
              e("div", hi, [
                f(Pe, {
                  modelValue: a.value,
                  "onUpdate:modelValue": F[3] || (F[3] = (L) => a.value = L),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", yi, [
                  f(le, {
                    variant: "secondary",
                    onClick: x
                  }, {
                    default: i(() => [...F[9] || (F[9] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(le, {
                    variant: "primary",
                    disabled: !a.value.trim(),
                    onClick: oe
                  }, {
                    default: i(() => [...F[10] || (F[10] = [
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
}), ki = /* @__PURE__ */ ee(wi, [["__scopeId", "data-v-6474069a"]]), bi = { class: "node-info" }, _i = { class: "node-info-text" }, $i = { class: "item-body" }, Ci = {
  key: 0,
  class: "resolved-state"
}, xi = {
  key: 1,
  class: "multiple-options"
}, Si = { class: "options-list" }, Ii = ["onClick"], Ei = ["name", "value", "checked", "onChange"], Mi = { class: "option-content" }, zi = { class: "option-header" }, Li = { class: "option-filename" }, Ti = { class: "option-meta" }, Ni = { class: "option-size" }, Ri = { class: "option-category" }, Di = { class: "option-path" }, Oi = { class: "action-buttons" }, Ui = {
  key: 2,
  class: "unresolved"
}, Pi = { class: "action-buttons" }, Bi = /* @__PURE__ */ Z({
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
    const n = t, r = u, g = P(() => !!n.choice);
    P(() => {
      var a;
      return (a = n.choice) == null ? void 0 : a.action;
    }), P(() => {
      var a, v;
      return ((v = (a = n.choice) == null ? void 0 : a.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const y = P(() => {
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
      class: ne(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", bi, [
        e("span", _i, [
          v[7] || (v[7] = h("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", $i, [
        g.value ? (o(), s("div", Ci, [
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (b) => r("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", xi, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Si, [
            (o(!0), s(W, null, se(t.options, (b, d) => (o(), s("label", {
              key: b.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (I) => p(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (I) => p(d)
              }, null, 40, Ei),
              e("div", Mi, [
                e("div", zi, [
                  e("span", Li, l(b.model.filename), 1),
                  f(Ft, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ti, [
                  e("span", Ni, l(m(b.model.size)), 1),
                  e("span", Ri, l(b.model.category), 1)
                ]),
                e("div", Di, l(b.model.relative_path), 1)
              ])
            ], 10, Ii))), 128))
          ]),
          e("div", Oi, [
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (b) => r("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (b) => r("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (b) => r("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Ui, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Pi, [
            f(le, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (b) => r("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (b) => r("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (b) => r("mark-optional"))
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
}), Fi = /* @__PURE__ */ ee(Bi, [["__scopeId", "data-v-8a82fefa"]]), Vi = { class: "model-resolution-step" }, Ai = { class: "step-header" }, Wi = { class: "step-info" }, Gi = { class: "step-title" }, ji = { class: "step-description" }, Hi = { class: "stat-badge" }, qi = {
  key: 1,
  class: "step-body"
}, Ki = {
  key: 2,
  class: "empty-state"
}, Ji = { class: "model-search-modal" }, Qi = { class: "model-modal-body" }, Xi = {
  key: 0,
  class: "model-search-results"
}, Yi = ["onClick"], Zi = { class: "model-result-header" }, er = { class: "model-result-filename" }, tr = { class: "model-result-meta" }, or = { class: "model-result-category" }, sr = { class: "model-result-size" }, nr = {
  key: 0,
  class: "model-result-path"
}, ar = {
  key: 1,
  class: "model-no-results"
}, lr = {
  key: 2,
  class: "model-searching"
}, ir = { class: "model-download-url-modal" }, rr = { class: "model-modal-body" }, dr = { class: "model-input-group" }, cr = { class: "model-input-group" }, ur = { class: "model-modal-actions" }, mr = /* @__PURE__ */ Z({
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
    function r(B) {
      var L;
      return B && ((L = n[B]) == null ? void 0 : L[0]) || null;
    }
    const g = t, y = u, p = _(0), m = _(!1), a = _(!1), v = _(""), b = _(""), d = _(""), I = _([]), k = _(!1), C = P(() => g.models[p.value]), w = P(() => g.models.some((B) => B.is_download_intent)), $ = P(() => g.models.filter(
      (B) => g.modelChoices.has(B.filename) || B.is_download_intent
    ).length), R = P(() => {
      var L;
      if (!C.value) return "";
      const B = r((L = C.value.reference) == null ? void 0 : L.node_type);
      return B ? `${B}/${C.value.filename}` : "";
    }), V = P(() => {
      var L;
      if (!C.value) return "not-found";
      const B = g.modelChoices.get(C.value.filename);
      if (B)
        switch (B.action) {
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
      return C.value.is_download_intent ? "download" : (L = C.value.options) != null && L.length ? "ambiguous" : "not-found";
    }), T = P(() => {
      var L, ae;
      if (!C.value) return;
      const B = g.modelChoices.get(C.value.filename);
      if (B)
        switch (B.action) {
          case "select":
            return (L = B.selected_model) != null && L.filename ? `→ ${B.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return C.value.is_download_intent ? "Pending Download" : (ae = C.value.options) != null && ae.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function z(B) {
      B >= 0 && B < g.models.length && (p.value = B);
    }
    function H() {
      C.value && y("mark-optional", C.value.filename);
    }
    function M() {
      C.value && y("skip", C.value.filename);
    }
    function N(B) {
      C.value && y("option-selected", C.value.filename, B);
    }
    function O() {
      C.value && y("clear-choice", C.value.filename);
    }
    function E() {
      C.value && (v.value = C.value.filename, m.value = !0);
    }
    function x() {
      C.value && (b.value = C.value.download_source || "", d.value = C.value.target_path || R.value, a.value = !0);
    }
    function A() {
      m.value = !1, v.value = "", I.value = [];
    }
    function J() {
      a.value = !1, b.value = "", d.value = "";
    }
    function oe() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function K(B) {
      C.value && A();
    }
    function F() {
      !C.value || !b.value.trim() || (y("download-url", C.value.filename, b.value.trim(), d.value.trim() || void 0), J());
    }
    function q(B) {
      if (!B) return "Unknown";
      const L = B / (1024 * 1024 * 1024);
      return L >= 1 ? `${L.toFixed(2)} GB` : `${(B / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (B, L) => {
      var ae, Q, _e;
      return o(), s("div", Vi, [
        e("div", Ai, [
          e("div", Wi, [
            e("h3", Gi, l(w.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", ji, l(w.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Hi, l($.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        C.value ? (o(), S(Xt, {
          key: 0,
          "item-name": C.value.filename,
          "current-index": p.value,
          "total-items": t.models.length,
          onPrev: L[0] || (L[0] = (pe) => z(p.value - 1)),
          onNext: L[1] || (L[1] = (pe) => z(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        C.value ? (o(), s("div", qi, [
          f(Fi, {
            filename: C.value.filename,
            "node-type": ((ae = C.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((Q = C.value.options) != null && Q.length),
            options: C.value.options,
            choice: (_e = t.modelChoices) == null ? void 0 : _e.get(C.value.filename),
            status: V.value,
            "status-label": T.value,
            onMarkOptional: H,
            onSkip: M,
            onDownloadUrl: x,
            onSearch: E,
            onOptionSelected: N,
            onClearChoice: O
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Ki, [...L[5] || (L[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), S(Se, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: we(A, ["self"])
          }, [
            e("div", Ji, [
              e("div", { class: "model-modal-header" }, [
                L[6] || (L[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", Qi, [
                f(Pe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": L[2] || (L[2] = (pe) => v.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (o(), s("div", Xi, [
                  (o(!0), s(W, null, se(I.value, (pe) => (o(), s("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (Re) => K()
                  }, [
                    e("div", Zi, [
                      e("code", er, l(pe.filename), 1)
                    ]),
                    e("div", tr, [
                      e("span", or, l(pe.category), 1),
                      e("span", sr, l(q(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), s("div", nr, l(pe.relative_path), 1)) : c("", !0)
                  ], 8, Yi))), 128))
                ])) : v.value && !k.value ? (o(), s("div", ar, ' No models found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                k.value ? (o(), s("div", lr, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(Se, { to: "body" }, [
          a.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: we(J, ["self"])
          }, [
            e("div", ir, [
              e("div", { class: "model-modal-header" }, [
                L[7] || (L[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              e("div", rr, [
                e("div", dr, [
                  L[8] || (L[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Pe, {
                    modelValue: b.value,
                    "onUpdate:modelValue": L[3] || (L[3] = (pe) => b.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", cr, [
                  L[9] || (L[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Pe, {
                    modelValue: d.value,
                    "onUpdate:modelValue": L[4] || (L[4] = (pe) => d.value = pe),
                    placeholder: R.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ur, [
                  f(le, {
                    variant: "secondary",
                    onClick: J
                  }, {
                    default: i(() => [...L[10] || (L[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(le, {
                    variant: "primary",
                    disabled: !b.value.trim() || !d.value.trim(),
                    onClick: F
                  }, {
                    default: i(() => [...L[11] || (L[11] = [
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
}), vr = /* @__PURE__ */ ee(mr, [["__scopeId", "data-v-c6acbada"]]), fr = { class: "applying-step" }, gr = {
  key: 0,
  class: "phase-content"
}, pr = {
  key: 1,
  class: "phase-content"
}, hr = { class: "phase-description" }, yr = { class: "overall-progress" }, wr = { class: "progress-bar" }, kr = { class: "progress-label" }, br = { class: "install-list" }, _r = { class: "install-icon" }, $r = { key: 0 }, Cr = {
  key: 1,
  class: "spinner"
}, xr = { key: 2 }, Sr = { key: 3 }, Ir = {
  key: 0,
  class: "install-error"
}, Er = {
  key: 2,
  class: "phase-content"
}, Mr = { class: "phase-header" }, zr = { class: "phase-title" }, Lr = { class: "completion-summary" }, Tr = {
  key: 0,
  class: "summary-item success"
}, Nr = { class: "summary-text" }, Rr = {
  key: 1,
  class: "summary-item error"
}, Dr = { class: "summary-text" }, Or = {
  key: 2,
  class: "failed-list"
}, Ur = { class: "failed-node-id" }, Pr = { class: "failed-error" }, Br = {
  key: 4,
  class: "summary-item success"
}, Fr = {
  key: 5,
  class: "restart-prompt"
}, Vr = {
  key: 3,
  class: "phase-content error"
}, Ar = { class: "error-message" }, Wr = /* @__PURE__ */ Z({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = P(() => {
      var v, b;
      const m = ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const a = ((b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0;
      return Math.round(a / m * 100);
    }), r = P(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((a) => !a.success)) || [];
    }), g = P(() => r.value.length > 0);
    function y(m, a) {
      var b, d;
      const v = (b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.find((I) => I.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((d = u.progress.nodeInstallProgress) == null ? void 0 : d.currentIndex) === a ? "installing" : "pending";
    }
    function p(m) {
      var a, v;
      return (v = (a = u.progress.nodeInstallProgress) == null ? void 0 : a.completedNodes.find((b) => b.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, a) => {
      var v, b, d, I;
      return o(), s("div", fr, [
        t.progress.phase === "resolving" ? (o(), s("div", gr, [...a[2] || (a[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", pr, [
          a[3] || (a[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", hr, " Installing " + l((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + l(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", yr, [
            e("div", wr, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", kr, l(((d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.length) ?? 0) + " / " + l(((I = t.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", br, [
            (o(!0), s(W, null, se(t.progress.nodesToInstall, (k, C) => (o(), s("div", {
              key: k,
              class: ne(["install-item", y(k, C)])
            }, [
              e("span", _r, [
                y(k, C) === "pending" ? (o(), s("span", $r, "○")) : y(k, C) === "installing" ? (o(), s("span", Cr, "◌")) : y(k, C) === "complete" ? (o(), s("span", xr, "✓")) : y(k, C) === "failed" ? (o(), s("span", Sr, "✗")) : c("", !0)
              ]),
              e("code", null, l(k), 1),
              p(k) ? (o(), s("span", Ir, l(p(k)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Er, [
          e("div", Mr, [
            e("span", {
              class: ne(["phase-icon", g.value ? "warning" : "success"])
            }, l(g.value ? "⚠" : "✓"), 3),
            e("h3", zr, l(g.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Lr, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", Tr, [
              a[4] || (a[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Nr, l(t.progress.nodesInstalled.length) + " node package" + l(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Rr, [
              a[5] || (a[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Dr, l(r.value.length) + " package" + l(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Or, [
              (o(!0), s(W, null, se(r.value, (k) => (o(), s("div", {
                key: k.node_id,
                class: "failed-item"
              }, [
                e("code", Ur, l(k.node_id), 1),
                e("span", Pr, l(k.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: a[0] || (a[0] = (k) => m.$emit("retry-failed"))
            }, " Retry Failed (" + l(r.value.length) + ") ", 1)) : c("", !0),
            g.value ? c("", !0) : (o(), s("div", Br, [...a[6] || (a[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            a[8] || (a[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", Fr, [
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
        ])) : t.progress.phase === "error" ? (o(), s("div", Vr, [
          a[9] || (a[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Ar, l(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Gr = /* @__PURE__ */ ee(Wr, [["__scopeId", "data-v-5efaae58"]]), jr = {
  key: 0,
  class: "loading-state"
}, Hr = {
  key: 1,
  class: "wizard-content"
}, qr = {
  key: 0,
  class: "step-content"
}, Kr = { class: "analysis-summary" }, Jr = { class: "analysis-header" }, Qr = { class: "summary-description" }, Xr = { class: "stats-grid" }, Yr = { class: "stat-card" }, Zr = { class: "stat-items" }, ed = {
  key: 0,
  class: "stat-item success"
}, td = { class: "stat-count" }, od = {
  key: 1,
  class: "stat-item info"
}, sd = { class: "stat-count" }, nd = {
  key: 2,
  class: "stat-item warning"
}, ad = { class: "stat-count" }, ld = {
  key: 3,
  class: "stat-item error"
}, id = { class: "stat-count" }, rd = { class: "stat-card" }, dd = { class: "stat-items" }, cd = { class: "stat-item success" }, ud = { class: "stat-count" }, md = {
  key: 0,
  class: "stat-item info"
}, vd = { class: "stat-count" }, fd = {
  key: 1,
  class: "stat-item warning"
}, gd = { class: "stat-count" }, pd = {
  key: 2,
  class: "stat-item error"
}, hd = { class: "stat-count" }, yd = {
  key: 0,
  class: "status-message warning"
}, wd = { class: "status-text" }, kd = {
  key: 1,
  class: "status-message info"
}, bd = { class: "status-text" }, _d = {
  key: 2,
  class: "status-message info"
}, $d = { class: "status-text" }, Cd = {
  key: 3,
  class: "status-message success"
}, xd = {
  key: 3,
  class: "step-content"
}, Sd = { class: "review-summary" }, Id = { class: "review-stats" }, Ed = { class: "review-stat" }, Md = { class: "stat-value" }, zd = { class: "review-stat" }, Ld = { class: "stat-value" }, Td = { class: "review-stat" }, Nd = { class: "stat-value" }, Rd = { class: "review-stat" }, Dd = { class: "stat-value" }, Od = {
  key: 0,
  class: "review-section"
}, Ud = { class: "section-title" }, Pd = { class: "review-items" }, Bd = { class: "item-name" }, Fd = { class: "item-choice" }, Vd = {
  key: 0,
  class: "choice-badge install"
}, Ad = {
  key: 1,
  class: "choice-badge skip"
}, Wd = {
  key: 1,
  class: "review-section"
}, Gd = { class: "section-title" }, jd = { class: "review-items" }, Hd = { class: "item-name" }, qd = { class: "item-choice" }, Kd = {
  key: 0,
  class: "choice-badge install"
}, Jd = {
  key: 1,
  class: "choice-badge optional"
}, Qd = {
  key: 2,
  class: "choice-badge skip"
}, Xd = {
  key: 1,
  class: "choice-badge pending"
}, Yd = {
  key: 2,
  class: "review-section"
}, Zd = { class: "section-title" }, ec = { class: "review-items" }, tc = { class: "item-name" }, oc = { class: "item-choice" }, sc = {
  key: 0,
  class: "choice-badge install"
}, nc = {
  key: 1,
  class: "choice-badge download"
}, ac = {
  key: 2,
  class: "choice-badge optional"
}, lc = {
  key: 3,
  class: "choice-badge skip"
}, ic = {
  key: 4,
  class: "choice-badge skip"
}, rc = {
  key: 1,
  class: "choice-badge download"
}, dc = {
  key: 2,
  class: "choice-badge pending"
}, cc = {
  key: 3,
  class: "no-choices"
}, uc = /* @__PURE__ */ Z({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: g, applyResolution: y, installNodes: p, queueModelDownloads: m, progress: a, resetProgress: v } = tl(), { loadPendingDownloads: b } = St(), d = _(null), I = _(!1), k = _(!1), C = _(null), w = _("analysis"), $ = _([]), R = _(/* @__PURE__ */ new Map()), V = _(/* @__PURE__ */ new Map()), T = _(/* @__PURE__ */ new Set()), z = P(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (M.value || E.value) && G.push({ id: "nodes", label: "Nodes" }), (N.value || O.value) && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), w.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), H = P(() => d.value ? d.value.stats.needs_user_input : !1), M = P(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), N = P(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), O = P(() => d.value ? d.value.stats.download_intents > 0 : !1), E = P(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), x = P(() => d.value ? d.value.nodes.resolved.length : 0), A = P(() => {
      if (!d.value) return [];
      const G = d.value.nodes.resolved.filter((Y) => !Y.is_installed), U = /* @__PURE__ */ new Set();
      return G.filter((Y) => U.has(Y.package.package_id) ? !1 : (U.add(Y.package.package_id), !0));
    }), J = P(() => {
      if (!d.value) return [];
      const G = d.value.nodes.resolved.filter((Y) => !Y.is_installed), U = /* @__PURE__ */ new Map();
      for (const Y of G) {
        const ue = U.get(Y.package.package_id);
        ue ? ue.node_types_count++ : U.set(Y.package.package_id, {
          package_id: Y.package.package_id,
          title: Y.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), oe = P(() => A.value.filter((G) => !T.value.has(G.package.package_id))), K = P(() => d.value ? d.value.models.resolved.filter((G) => G.match_type === "download_intent").map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), F = P(() => {
      if (!d.value) return [];
      const G = d.value.nodes.unresolved.map((Y) => ({
        node_type: Y.reference.node_type,
        reason: Y.reason,
        is_unresolved: !0,
        options: void 0
      })), U = d.value.nodes.ambiguous.map((Y) => ({
        node_type: Y.reference.node_type,
        has_multiple_options: !0,
        options: Y.options.map((ue) => ({
          package_id: ue.package.package_id,
          title: ue.package.title,
          match_confidence: ue.match_confidence,
          match_type: ue.match_type,
          is_installed: ue.is_installed
        }))
      }));
      return [...G, ...U];
    }), q = P(() => {
      if (!d.value) return [];
      const G = d.value.models.unresolved.map((Y) => ({
        filename: Y.reference.widget_value,
        reference: Y.reference,
        reason: Y.reason,
        is_unresolved: !0,
        options: void 0
      })), U = d.value.models.ambiguous.map((Y) => ({
        filename: Y.reference.widget_value,
        reference: Y.reference,
        has_multiple_options: !0,
        options: Y.options.map((ue) => ({
          model: ue.model,
          match_confidence: ue.match_confidence,
          match_type: ue.match_type,
          has_download_source: ue.has_download_source
        }))
      }));
      return [...G, ...U];
    }), B = P(() => {
      const G = q.value, U = K.value.map((Y) => ({
        filename: Y.filename,
        reference: Y.reference,
        is_download_intent: !0,
        resolved_model: Y.resolved_model,
        download_source: Y.download_source,
        target_path: Y.target_path,
        options: void 0
      }));
      return [...G, ...U];
    }), L = P(() => {
      let G = oe.value.length;
      for (const U of R.value.values())
        U.action === "install" && G++;
      for (const U of V.value.values())
        U.action === "select" && G++;
      return G;
    }), ae = P(() => {
      let G = 0;
      for (const U of V.value.values())
        U.action === "download" && G++;
      return G;
    }), Q = P(() => {
      let G = 0;
      for (const U of R.value.values())
        U.action === "optional" && G++;
      for (const U of V.value.values())
        U.action === "optional" && G++;
      return G;
    }), _e = P(() => {
      let G = T.value.size;
      for (const U of R.value.values())
        U.action === "skip" && G++;
      for (const U of V.value.values())
        U.action === "skip" && G++;
      for (const U of F.value)
        R.value.has(U.node_type) || G++;
      for (const U of q.value)
        V.value.has(U.filename) || G++;
      return G;
    }), pe = P(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, M.value) {
        const U = F.value.length, Y = F.value.filter(
          (ue) => R.value.has(ue.node_type)
        ).length;
        G.nodes = { resolved: Y, total: U };
      }
      if (N.value || O.value) {
        const U = B.value.length, Y = B.value.filter(
          (ue) => V.value.has(ue.filename) || ue.is_download_intent
        ).length;
        G.models = { resolved: Y, total: U };
      }
      if (G.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const U = a.totalFiles || 1, Y = a.completedFiles.length;
        G.applying = { resolved: Y, total: U };
      }
      return G;
    });
    function Re(G) {
      w.value = G;
    }
    function mt() {
      const G = z.value.findIndex((U) => U.id === w.value);
      G > 0 && (w.value = z.value[G - 1].id);
    }
    function fe() {
      const G = z.value.findIndex((U) => U.id === w.value);
      G < z.value.length - 1 && (w.value = z.value[G + 1].id);
    }
    async function Ne() {
      I.value = !0, C.value = null;
      try {
        d.value = await g(n.workflowName);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function vt() {
      $.value.includes("analysis") || $.value.push("analysis"), M.value || E.value ? w.value = "nodes" : N.value || O.value ? w.value = "models" : w.value = "review";
    }
    function Qe(G) {
      R.value.set(G, { action: "optional" });
    }
    function ze(G) {
      R.value.set(G, { action: "skip" });
    }
    function ft(G, U) {
      var ue;
      const Y = F.value.find((Ce) => Ce.node_type === G);
      (ue = Y == null ? void 0 : Y.options) != null && ue[U] && R.value.set(G, {
        action: "install",
        package_id: Y.options[U].package_id
      });
    }
    function tt(G, U) {
      R.value.set(G, {
        action: "install",
        package_id: U
      });
    }
    function gt(G) {
      R.value.delete(G);
    }
    function X(G) {
      T.value.has(G) ? T.value.delete(G) : T.value.add(G);
    }
    function ie(G) {
      V.value.set(G, { action: "optional" });
    }
    function ge(G) {
      V.value.set(G, { action: "skip" });
    }
    function $e(G, U) {
      var ue;
      const Y = q.value.find((Ce) => Ce.filename === G);
      (ue = Y == null ? void 0 : Y.options) != null && ue[U] && V.value.set(G, {
        action: "select",
        selected_model: Y.options[U].model
      });
    }
    function ot(G, U, Y) {
      V.value.set(G, {
        action: "download",
        url: U,
        target_path: Y
      });
    }
    function st(G) {
      V.value.delete(G);
    }
    async function nt() {
      var G;
      k.value = !0, C.value = null, v(), a.phase = "resolving", w.value = "applying";
      try {
        const U = await y(n.workflowName, R.value, V.value, T.value);
        U.models_to_download && U.models_to_download.length > 0 && m(n.workflowName, U.models_to_download);
        const Y = [
          ...U.nodes_to_install || [],
          ...oe.value.map((Ce) => Ce.package.package_id)
        ];
        a.nodesToInstall = [...new Set(Y)], a.nodesToInstall.length > 0 && await p(n.workflowName), a.phase = "complete", await b();
        const ue = a.installError || ((G = a.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((Ce) => !Ce.success));
        !a.needsRestart && !ue && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (U) {
        C.value = U instanceof Error ? U.message : "Failed to apply resolution", a.error = C.value, a.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function Mt() {
      r("refresh"), r("restart"), r("close");
    }
    async function Ae() {
      var U;
      const G = ((U = a.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((Y) => !Y.success).map((Y) => Y.node_id)) || [];
      if (G.length !== 0) {
        a.phase = "installing", a.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, a.nodesToInstall = G, a.nodesInstalled = [], a.installError = void 0;
        try {
          await p(n.workflowName), a.phase = "complete";
        } catch (Y) {
          a.error = Y instanceof Error ? Y.message : "Retry failed", a.phase = "error";
        }
      }
    }
    return be(Ne), (G, U) => (o(), S(dt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (Y) => r("close"))
    }, {
      body: i(() => [
        I.value && !d.value ? (o(), s("div", jr, [...U[2] || (U[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", Hr, [
          f(ul, {
            steps: z.value,
            "current-step": w.value,
            "completed-steps": $.value,
            "step-stats": pe.value,
            onStepChange: Re
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", qr, [
            e("div", Kr, [
              e("div", Jr, [
                U[3] || (U[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Qr, " Found " + l(d.value.stats.total_nodes) + " nodes and " + l(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Xr, [
                e("div", Yr, [
                  U[12] || (U[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Zr, [
                    x.value > 0 ? (o(), s("div", ed, [
                      U[4] || (U[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", td, l(x.value), 1),
                      U[5] || (U[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    d.value.stats.packages_needing_installation > 0 ? (o(), s("div", od, [
                      U[6] || (U[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", sd, l(d.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", nd, [
                      U[8] || (U[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ad, l(d.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", ld, [
                      U[10] || (U[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", id, l(d.value.nodes.unresolved.length), 1),
                      U[11] || (U[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", rd, [
                  U[21] || (U[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", dd, [
                    e("div", cd, [
                      U[13] || (U[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", ud, l(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      U[14] || (U[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", md, [
                      U[15] || (U[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", vd, l(d.value.stats.download_intents), 1),
                      U[16] || (U[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", fd, [
                      U[17] || (U[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", gd, l(d.value.models.ambiguous.length), 1),
                      U[18] || (U[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", pd, [
                      U[19] || (U[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", hd, l(d.value.models.unresolved.length), 1),
                      U[20] || (U[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              H.value ? (o(), s("div", yd, [
                U[22] || (U[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", wd, l(F.value.length + q.value.length) + " items need your input", 1)
              ])) : E.value ? (o(), s("div", kd, [
                U[23] || (U[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", bd, l(d.value.stats.packages_needing_installation) + " package" + l(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + l(d.value.stats.nodes_needing_installation) + " node type" + l(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + l(O.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : O.value ? (o(), s("div", _d, [
                U[24] || (U[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", $d, l(d.value.stats.download_intents) + " model" + l(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", Cd, [...U[25] || (U[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          w.value === "nodes" ? (o(), S(ki, {
            key: 1,
            nodes: F.value,
            "node-choices": R.value,
            "auto-resolved-packages": J.value,
            "skipped-packages": T.value,
            onMarkOptional: Qe,
            onSkip: ze,
            onOptionSelected: ft,
            onManualEntry: tt,
            onClearChoice: gt,
            onPackageSkip: X
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          w.value === "models" ? (o(), S(vr, {
            key: 2,
            models: B.value,
            "model-choices": V.value,
            onMarkOptional: ie,
            onSkip: ge,
            onOptionSelected: $e,
            onDownloadUrl: ot,
            onClearChoice: st
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          w.value === "review" ? (o(), s("div", xd, [
            e("div", Sd, [
              U[30] || (U[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Id, [
                e("div", Ed, [
                  e("span", Md, l(L.value), 1),
                  U[26] || (U[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", zd, [
                  e("span", Ld, l(ae.value), 1),
                  U[27] || (U[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Td, [
                  e("span", Nd, l(Q.value), 1),
                  U[28] || (U[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Rd, [
                  e("span", Dd, l(_e.value), 1),
                  U[29] || (U[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              J.value.length > 0 ? (o(), s("div", Od, [
                e("h4", Ud, "Node Packages (" + l(J.value.length) + ")", 1),
                e("div", Pd, [
                  (o(!0), s(W, null, se(J.value, (Y) => (o(), s("div", {
                    key: Y.package_id,
                    class: "review-item"
                  }, [
                    e("code", Bd, l(Y.package_id), 1),
                    e("div", Fd, [
                      T.value.has(Y.package_id) ? (o(), s("span", Ad, "Skipped")) : (o(), s("span", Vd, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              F.value.length > 0 ? (o(), s("div", Wd, [
                e("h4", Gd, "Node Choices (" + l(F.value.length) + ")", 1),
                e("div", jd, [
                  (o(!0), s(W, null, se(F.value, (Y) => {
                    var ue, Ce, Xe, Ye;
                    return o(), s("div", {
                      key: Y.node_type,
                      class: "review-item"
                    }, [
                      e("code", Hd, l(Y.node_type), 1),
                      e("div", qd, [
                        R.value.has(Y.node_type) ? (o(), s(W, { key: 0 }, [
                          ((ue = R.value.get(Y.node_type)) == null ? void 0 : ue.action) === "install" ? (o(), s("span", Kd, l((Ce = R.value.get(Y.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((Xe = R.value.get(Y.node_type)) == null ? void 0 : Xe.action) === "optional" ? (o(), s("span", Jd, " Optional ")) : ((Ye = R.value.get(Y.node_type)) == null ? void 0 : Ye.action) === "skip" ? (o(), s("span", Qd, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", Xd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              B.value.length > 0 ? (o(), s("div", Yd, [
                e("h4", Zd, "Models (" + l(B.value.length) + ")", 1),
                e("div", ec, [
                  (o(!0), s(W, null, se(B.value, (Y) => {
                    var ue, Ce, Xe, Ye, It, pt, j;
                    return o(), s("div", {
                      key: Y.filename,
                      class: "review-item"
                    }, [
                      e("code", tc, l(Y.filename), 1),
                      e("div", oc, [
                        V.value.has(Y.filename) ? (o(), s(W, { key: 0 }, [
                          ((ue = V.value.get(Y.filename)) == null ? void 0 : ue.action) === "select" ? (o(), s("span", sc, l((Xe = (Ce = V.value.get(Y.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : Xe.filename), 1)) : ((Ye = V.value.get(Y.filename)) == null ? void 0 : Ye.action) === "download" ? (o(), s("span", nc, " Download ")) : ((It = V.value.get(Y.filename)) == null ? void 0 : It.action) === "optional" ? (o(), s("span", ac, " Optional ")) : ((pt = V.value.get(Y.filename)) == null ? void 0 : pt.action) === "skip" ? (o(), s("span", lc, " Skip ")) : ((j = V.value.get(Y.filename)) == null ? void 0 : j.action) === "cancel_download" ? (o(), s("span", ic, " Cancel Download ")) : c("", !0)
                        ], 64)) : Y.is_download_intent ? (o(), s("span", rc, " Pending Download ")) : (o(), s("span", dc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              A.value.length === 0 && F.value.length === 0 && B.value.length === 0 ? (o(), s("div", cc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          w.value === "applying" ? (o(), S(Gr, {
            key: 4,
            progress: me(a),
            onRestart: Mt,
            onRetryFailed: Ae
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), S(le, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: mt
        }, {
          default: i(() => [...U[31] || (U[31] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        U[35] || (U[35] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || me(a).phase === "complete" || me(a).phase === "error" ? (o(), S(le, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (Y) => r("close"))
        }, {
          default: i(() => [
            h(l(me(a).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        w.value === "analysis" ? (o(), S(le, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: vt
        }, {
          default: i(() => [...U[32] || (U[32] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        w.value === "nodes" ? (o(), S(le, {
          key: 3,
          variant: "primary",
          onClick: fe
        }, {
          default: i(() => [
            h(l(N.value || O.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        w.value === "models" ? (o(), S(le, {
          key: 4,
          variant: "primary",
          onClick: fe
        }, {
          default: i(() => [...U[33] || (U[33] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        w.value === "review" ? (o(), S(le, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: nt
        }, {
          default: i(() => [...U[34] || (U[34] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), mc = /* @__PURE__ */ ee(uc, [["__scopeId", "data-v-0d3f93e6"]]), vc = { class: "search-input-wrapper" }, fc = ["value", "placeholder"], gc = /* @__PURE__ */ Z({
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
    const n = t, r = u, g = _(null);
    let y;
    function p(a) {
      const v = a.target.value;
      n.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", v);
      }, n.debounce)) : r("update:modelValue", v);
    }
    function m() {
      var a;
      r("update:modelValue", ""), r("clear"), (a = g.value) == null || a.focus();
    }
    return be(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (a, v) => (o(), s("div", vc, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: je(m, ["escape"])
      }, null, 40, fc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), pc = /* @__PURE__ */ ee(gc, [["__scopeId", "data-v-266f857a"]]), hc = { class: "search-bar" }, yc = /* @__PURE__ */ Z({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", hc, [
      f(pc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ct = /* @__PURE__ */ ee(yc, [["__scopeId", "data-v-3d51bbfd"]]), wc = { class: "section-group" }, kc = {
  key: 0,
  class: "section-content"
}, bc = /* @__PURE__ */ Z({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = _(n.initiallyExpanded);
    function y() {
      n.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (p, m) => (o(), s("section", wc, [
      f(Te, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: i(() => [
          h(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), s("div", kc, [
        de(p.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ ee(bc, [["__scopeId", "data-v-c48e33ed"]]), _c = { class: "item-header" }, $c = {
  key: 0,
  class: "item-icon"
}, Cc = { class: "item-info" }, xc = {
  key: 0,
  class: "item-title"
}, Sc = {
  key: 1,
  class: "item-subtitle"
}, Ic = {
  key: 0,
  class: "item-details"
}, Ec = {
  key: 1,
  class: "item-actions"
}, Mc = /* @__PURE__ */ Z({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = P(() => n.status ? `status-${n.status}` : "");
    return (g, y) => (o(), s("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (p) => t.clickable && g.$emit("click"))
    }, [
      e("div", _c, [
        g.$slots.icon ? (o(), s("span", $c, [
          de(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Cc, [
          g.$slots.title ? (o(), s("div", xc, [
            de(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), s("div", Sc, [
            de(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), s("div", Ic, [
        de(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), s("div", Ec, [
        de(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ ee(Mc, [["__scopeId", "data-v-cc435e0e"]]), zc = { class: "loading-state" }, Lc = { class: "loading-message" }, Tc = /* @__PURE__ */ Z({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (o(), s("div", zc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Lc, l(t.message), 1)
    ]));
  }
}), Ke = /* @__PURE__ */ ee(Tc, [["__scopeId", "data-v-ad8436c9"]]), Nc = { class: "error-state" }, Rc = { class: "error-message" }, Dc = /* @__PURE__ */ Z({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (o(), s("div", Nc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Rc, l(t.message), 1),
      t.retry ? (o(), S(te, {
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
}), Je = /* @__PURE__ */ ee(Dc, [["__scopeId", "data-v-5397be48"]]), Oc = /* @__PURE__ */ Z({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: g } = Ie(), y = _([]), p = _(!1), m = _(null), a = _(""), v = _(!0), b = _(!1), d = _(!1), I = _(!1), k = _(null), C = P(
      () => y.value.filter((F) => F.status === "broken")
    ), w = P(
      () => y.value.filter((F) => F.status === "new")
    ), $ = P(
      () => y.value.filter((F) => F.status === "modified")
    ), R = P(
      () => y.value.filter((F) => F.status === "synced")
    ), V = P(() => {
      if (!a.value.trim()) return y.value;
      const F = a.value.toLowerCase();
      return y.value.filter((q) => q.name.toLowerCase().includes(F));
    }), T = P(
      () => C.value.filter(
        (F) => !a.value.trim() || F.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), z = P(
      () => w.value.filter(
        (F) => !a.value.trim() || F.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), H = P(
      () => $.value.filter(
        (F) => !a.value.trim() || F.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), M = P(
      () => R.value.filter(
        (F) => !a.value.trim() || F.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), N = P(
      () => b.value ? M.value : M.value.slice(0, 5)
    );
    async function O(F = !1) {
      p.value = !0, m.value = null;
      try {
        y.value = await g(F);
      } catch (q) {
        m.value = q instanceof Error ? q.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    u({ loadWorkflows: O });
    function E(F) {
      k.value = F, d.value = !0;
    }
    function x(F) {
      k.value = F, I.value = !0;
    }
    function A() {
      alert("Bulk resolution not yet implemented");
    }
    function J() {
      r("refresh");
    }
    function oe(F) {
      const q = [];
      return F.missing_nodes > 0 && q.push(`${F.missing_nodes} missing node${F.missing_nodes > 1 ? "s" : ""}`), F.missing_models > 0 && q.push(`${F.missing_models} missing model${F.missing_models > 1 ? "s" : ""}`), F.pending_downloads && F.pending_downloads > 0 && q.push(`${F.pending_downloads} pending download${F.pending_downloads > 1 ? "s" : ""}`), q.length > 0 ? q.join(", ") : "Has issues";
    }
    function K(F) {
      const q = F.sync_state === "new" ? "New" : F.sync_state === "modified" ? "Modified" : F.sync_state === "synced" ? "Synced" : F.sync_state;
      return F.has_path_sync_issues && F.models_needing_path_sync && F.models_needing_path_sync > 0 ? `${F.models_needing_path_sync} model path${F.models_needing_path_sync > 1 ? "s" : ""} need${F.models_needing_path_sync === 1 ? "s" : ""} sync` : q || "Unknown";
    }
    return be(O), (F, q) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, { title: "WORKFLOWS" }, {
            actions: i(() => [
              C.value.length > 0 ? (o(), S(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: i(() => [...q[8] || (q[8] = [
                  h(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(ct, {
            modelValue: a.value,
            "onUpdate:modelValue": q[0] || (q[0] = (B) => a.value = B),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          p.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), S(Je, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            T.value.length ? (o(), S(ke, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(T.value, (B) => (o(), S(xe, {
                  key: B.name,
                  status: "broken"
                }, {
                  icon: i(() => [...q[9] || (q[9] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(l(B.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(oe(B)), 1)
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (L) => x(B.name)
                    }, {
                      default: i(() => [...q[10] || (q[10] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => E(B.name)
                    }, {
                      default: i(() => [...q[11] || (q[11] = [
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
            z.value.length ? (o(), S(ke, {
              key: 1,
              title: "NEW",
              count: z.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(z.value, (B) => (o(), S(xe, {
                  key: B.name,
                  status: B.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    h(l(B.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    h(l(B.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(K(B)), 1)
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => E(B.name)
                    }, {
                      default: i(() => [...q[12] || (q[12] = [
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
            H.value.length ? (o(), S(ke, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(H.value, (B) => (o(), S(xe, {
                  key: B.name,
                  status: B.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...q[13] || (q[13] = [
                    h("⚡", -1)
                  ])]),
                  title: i(() => [
                    h(l(B.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(K(B)), 1)
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => E(B.name)
                    }, {
                      default: i(() => [...q[14] || (q[14] = [
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
            M.value.length ? (o(), S(ke, {
              key: 3,
              title: "SYNCED",
              count: M.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: q[2] || (q[2] = (B) => v.value = B)
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(N.value, (B) => (o(), S(xe, {
                  key: B.name,
                  status: B.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    h(l(B.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    h(l(B.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(K(B)), 1)
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => E(B.name)
                    }, {
                      default: i(() => [...q[15] || (q[15] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && M.value.length > 5 ? (o(), S(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: q[1] || (q[1] = (B) => b.value = !0),
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
            V.value.length ? c("", !0) : (o(), S(Be, {
              key: 4,
              icon: "📭",
              message: a.value ? `No workflows match '${a.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && k.value ? (o(), S(Ya, {
        key: 0,
        "workflow-name": k.value,
        onClose: q[3] || (q[3] = (B) => d.value = !1),
        onResolve: q[4] || (q[4] = (B) => x(k.value)),
        onRefresh: q[5] || (q[5] = (B) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      I.value && k.value ? (o(), S(mc, {
        key: 1,
        "workflow-name": k.value,
        onClose: q[6] || (q[6] = (B) => I.value = !1),
        onInstall: J,
        onRefresh: q[7] || (q[7] = (B) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Uc = /* @__PURE__ */ ee(Oc, [["__scopeId", "data-v-080576c0"]]), Pc = /* @__PURE__ */ Z({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      de(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ut = /* @__PURE__ */ ee(Pc, [["__scopeId", "data-v-ccb7816e"]]), Bc = {
  key: 0,
  class: "model-details"
}, Fc = { class: "detail-section" }, Vc = { class: "detail-row" }, Ac = { class: "detail-value mono" }, Wc = { class: "detail-row" }, Gc = { class: "detail-value mono" }, jc = { class: "detail-row" }, Hc = { class: "detail-value mono" }, qc = { class: "detail-row" }, Kc = { class: "detail-value" }, Jc = { class: "detail-row" }, Qc = { class: "detail-value" }, Xc = { class: "detail-row" }, Yc = { class: "detail-value" }, Zc = { class: "detail-section" }, eu = { class: "section-header" }, tu = {
  key: 0,
  class: "locations-list"
}, ou = { class: "location-path mono" }, su = {
  key: 0,
  class: "location-modified"
}, nu = ["onClick"], au = {
  key: 1,
  class: "empty-state"
}, lu = { class: "detail-section" }, iu = { class: "section-header" }, ru = {
  key: 0,
  class: "sources-list"
}, du = { class: "source-type" }, cu = ["href"], uu = ["disabled", "onClick"], mu = {
  key: 1,
  class: "empty-state"
}, vu = { class: "add-source-form" }, fu = ["disabled"], gu = {
  key: 2,
  class: "source-error"
}, pu = {
  key: 3,
  class: "source-success"
}, hu = /* @__PURE__ */ Z({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: g, removeModelSource: y, openFileLocation: p } = Ie(), m = _(null), a = _(!0), v = _(null), b = _(""), d = _(!1), I = _(null), k = _(null), C = _(null), w = _(null);
    let $ = null;
    function R(O, E = "success", x = 2e3) {
      $ && clearTimeout($), w.value = { message: O, type: E }, $ = setTimeout(() => {
        w.value = null;
      }, x);
    }
    function V(O) {
      if (!O) return "Unknown";
      const E = 1024 * 1024 * 1024, x = 1024 * 1024;
      return O >= E ? `${(O / E).toFixed(1)} GB` : O >= x ? `${(O / x).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function T(O) {
      navigator.clipboard.writeText(O), R("Copied to clipboard!");
    }
    async function z(O) {
      try {
        await p(O), R("Opening file location...");
      } catch {
        R("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!b.value.trim() || !m.value)) {
        d.value = !0, k.value = null, C.value = null;
        try {
          await g(m.value.hash, b.value.trim()), C.value = "Source added successfully!", b.value = "", await N();
        } catch (O) {
          k.value = O instanceof Error ? O.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function M(O) {
      if (m.value) {
        I.value = O, k.value = null, C.value = null;
        try {
          await y(m.value.hash, O), R("Source removed"), await N();
        } catch (E) {
          k.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          I.value = null;
        }
      }
    }
    async function N() {
      a.value = !0, v.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (O) {
        v.value = O instanceof Error ? O.message : "Failed to load model details";
      } finally {
        a.value = !1;
      }
    }
    return be(N), (O, E) => {
      var x;
      return o(), s(W, null, [
        f(dt, {
          title: `Model Details: ${((x = m.value) == null ? void 0 : x.filename) || "Loading..."}`,
          size: "lg",
          loading: a.value,
          error: v.value,
          onClose: E[5] || (E[5] = (A) => O.$emit("close"))
        }, {
          body: i(() => {
            var A, J, oe, K;
            return [
              m.value ? (o(), s("div", Bc, [
                e("section", Fc, [
                  e("div", Vc, [
                    E[6] || (E[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Ac, l(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (F) => T(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Wc, [
                    E[7] || (E[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Gc, l(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (F) => T(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", jc, [
                    E[8] || (E[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Hc, l(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (F) => T(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", qc, [
                    E[9] || (E[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Kc, l(V(m.value.size)), 1)
                  ]),
                  e("div", Jc, [
                    E[10] || (E[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Qc, l(m.value.category), 1)
                  ]),
                  e("div", Xc, [
                    E[11] || (E[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Yc, l(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Zc, [
                  e("h4", eu, "Locations (" + l(((A = m.value.locations) == null ? void 0 : A.length) || 0) + ")", 1),
                  (J = m.value.locations) != null && J.length ? (o(), s("div", tu, [
                    (o(!0), s(W, null, se(m.value.locations, (F, q) => (o(), s("div", {
                      key: q,
                      class: "location-item"
                    }, [
                      e("span", ou, l(F.path), 1),
                      F.modified ? (o(), s("span", su, "Modified: " + l(F.modified), 1)) : c("", !0),
                      F.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (B) => z(F.path)
                      }, " Open File Location ", 8, nu)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", au, "No locations found"))
                ]),
                e("section", lu, [
                  e("h4", iu, "Download Sources (" + l(((oe = m.value.sources) == null ? void 0 : oe.length) || 0) + ")", 1),
                  (K = m.value.sources) != null && K.length ? (o(), s("div", ru, [
                    (o(!0), s(W, null, se(m.value.sources, (F, q) => (o(), s("div", {
                      key: q,
                      class: "source-item"
                    }, [
                      e("span", du, l(F.type) + ":", 1),
                      e("a", {
                        href: F.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(F.url), 9, cu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === F.url,
                        onClick: (B) => M(F.url)
                      }, l(I.value === F.url ? "..." : "×"), 9, uu)
                    ]))), 128))
                  ])) : (o(), s("div", mu, " No download sources configured ")),
                  e("div", vu, [
                    io(e("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (F) => b.value = F),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ro, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || d.value,
                      onClick: H
                    }, l(d.value ? "Adding..." : "Add Source"), 9, fu)
                  ]),
                  k.value ? (o(), s("p", gu, l(k.value), 1)) : c("", !0),
                  C.value ? (o(), s("p", pu, l(C.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (A) => O.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), S(Se, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: ne(["toast", w.value.type])
          }, l(w.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Yt = /* @__PURE__ */ ee(hu, [["__scopeId", "data-v-f15cbb56"]]), yu = /* @__PURE__ */ Z({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: g } = Ie(), y = _([]), p = _([]), m = _("production"), a = _(!1), v = _(null), b = _(""), d = _(!1), I = _(null);
    function k() {
      d.value = !1, n("navigate", "model-index");
    }
    const C = P(
      () => y.value.reduce((N, O) => N + (O.size || 0), 0)
    ), w = P(() => {
      if (!b.value.trim()) return y.value;
      const N = b.value.toLowerCase();
      return y.value.filter((O) => O.filename.toLowerCase().includes(N));
    }), $ = P(() => {
      if (!b.value.trim()) return p.value;
      const N = b.value.toLowerCase();
      return p.value.filter((O) => O.filename.toLowerCase().includes(N));
    }), R = P(() => {
      const N = {};
      for (const E of w.value) {
        const x = E.type || "other";
        N[x] || (N[x] = []), N[x].push(E);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([E], [x]) => {
        const A = O.indexOf(E), J = O.indexOf(x);
        return A >= 0 && J >= 0 ? A - J : A >= 0 ? -1 : J >= 0 ? 1 : E.localeCompare(x);
      }).map(([E, x]) => ({ type: E, models: x }));
    });
    function V(N) {
      if (!N) return "Unknown";
      const O = N / (1024 * 1024);
      return O >= 1024 ? `${(O / 1024).toFixed(1)} GB` : `${O.toFixed(0)} MB`;
    }
    function T(N) {
      I.value = N.hash || N.filename;
    }
    function z(N) {
      n("navigate", "model-index");
    }
    function H(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function M() {
      a.value = !0, v.value = null;
      try {
        const N = await r();
        y.value = N, p.value = [];
        const O = await g();
        m.value = O.environment || "production";
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        a.value = !1;
      }
    }
    return be(M), (N, O) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (E) => d.value = !0)
          })
        ]),
        search: i(() => [
          f(ct, {
            modelValue: b.value,
            "onUpdate:modelValue": O[1] || (O[1] = (E) => b.value = E),
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
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            y.value.length ? (o(), S(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + l(y.value.length) + " models • " + l(V(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(W, null, se(R.value, (E) => (o(), S(ke, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(E.models, (x) => (o(), S(xe, {
                  key: x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...O[4] || (O[4] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(l(x.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(V(x.size)), 1)
                  ]),
                  details: i(() => [
                    f(he, {
                      label: "Used by:",
                      value: (x.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(he, {
                      label: "Path:",
                      value: x.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => T(x)
                    }, {
                      default: i(() => [...O[5] || (O[5] = [
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
            $.value.length ? (o(), S(ke, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, se($.value, (E) => (o(), S(xe, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...O[6] || (O[6] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(l(E.filename), 1)
                  ]),
                  subtitle: i(() => [...O[7] || (O[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var x;
                    return [
                      f(he, {
                        label: "Required by:",
                        value: ((x = E.workflow_names) == null ? void 0 : x.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (x) => H(E.filename)
                    }, {
                      default: i(() => [...O[8] || (O[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (x) => z(E.filename)
                    }, {
                      default: i(() => [...O[9] || (O[9] = [
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
            !w.value.length && !$.value.length ? (o(), S(Be, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: d.value,
        title: "About Environment Models",
        onClose: O[2] || (O[2] = (E) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            O[10] || (O[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            O[11] || (O[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          f(te, {
            variant: "primary",
            onClick: k
          }, {
            default: i(() => [...O[12] || (O[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(Yt, {
        key: 0,
        identifier: I.value,
        onClose: O[3] || (O[3] = (E) => I.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), wu = /* @__PURE__ */ ee(yu, [["__scopeId", "data-v-cb4f12b3"]]), ku = {
  key: 0,
  class: "indexing-progress"
}, bu = { class: "progress-info" }, _u = { class: "progress-label" }, $u = { class: "progress-count" }, Cu = { class: "progress-bar" }, xu = { class: "modal-content" }, Su = { class: "modal-header" }, Iu = { class: "modal-body" }, Eu = { class: "input-group" }, Mu = { class: "current-path" }, zu = { class: "input-group" }, Lu = { class: "modal-footer" }, Tu = { class: "modal-content" }, Nu = { class: "modal-header" }, Ru = { class: "modal-body" }, Du = { class: "input-group" }, Ou = { class: "input-group" }, Uu = { class: "modal-footer" }, Pu = /* @__PURE__ */ Z({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: g,
      setModelsDirectory: y
    } = Ie(), { addToQueue: p } = St(), m = u, a = _([]), v = _(!1), b = _(!1), d = _(null), I = _(""), k = _(!1), C = _(null), w = _(!1), $ = _(null), R = _(""), V = _(!1), T = _(!1), z = _(""), H = _(""), M = _(null), N = P(
      () => a.value.reduce((B, L) => B + (L.size || 0), 0)
    ), O = P(() => {
      if (!I.value.trim()) return a.value;
      const B = I.value.toLowerCase();
      return a.value.filter((L) => {
        const ae = L, Q = L.sha256 || ae.sha256_hash || "";
        return L.filename.toLowerCase().includes(B) || Q.toLowerCase().includes(B);
      });
    }), E = P(() => {
      const B = {};
      for (const ae of O.value) {
        const Q = ae.type || "other";
        B[Q] || (B[Q] = []), B[Q].push(ae);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(B).sort(([ae], [Q]) => {
        const _e = L.indexOf(ae), pe = L.indexOf(Q);
        return _e >= 0 && pe >= 0 ? _e - pe : _e >= 0 ? -1 : pe >= 0 ? 1 : ae.localeCompare(Q);
      }).map(([ae, Q]) => ({ type: ae, models: Q }));
    });
    function x(B) {
      if (!B) return "Unknown";
      const L = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return B >= L ? `${(B / L).toFixed(1)} GB` : B >= ae ? `${(B / ae).toFixed(0)} MB` : `${(B / 1024).toFixed(0)} KB`;
    }
    function A(B) {
      C.value = B.hash || B.filename;
    }
    async function J() {
      b.value = !0, d.value = null;
      try {
        const B = await r();
        await F(), B.changes > 0 && console.log(`Scan complete: ${B.changes} changes detected`);
      } catch (B) {
        d.value = B instanceof Error ? B.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function oe() {
      if (R.value.trim()) {
        V.value = !0, d.value = null;
        try {
          const B = await y(R.value.trim());
          $.value = B.path, w.value = !1, R.value = "", await F(), console.log(`Directory changed: ${B.models_indexed} models indexed`), m("refresh");
        } catch (B) {
          d.value = B instanceof Error ? B.message : "Failed to change directory";
        } finally {
          V.value = !1;
        }
      }
    }
    function K() {
      if (!z.value.trim() || !H.value.trim()) return;
      const B = H.value.split("/").pop() || "model.safetensors";
      p([{
        workflow: "__manual__",
        filename: B,
        url: z.value.trim(),
        targetPath: H.value.trim()
      }]), z.value = "", H.value = "", T.value = !1;
    }
    async function F() {
      v.value = !0, d.value = null;
      try {
        a.value = await n();
      } catch (B) {
        d.value = B instanceof Error ? B.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function q() {
      try {
        const B = await g();
        $.value = B.path;
      } catch {
      }
    }
    return be(() => {
      F(), q();
    }), (B, L) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: L[2] || (L[2] = (ae) => k.value = !0)
          }, {
            actions: i(() => [
              f(te, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: J
              }, {
                default: i(() => [
                  h(l(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(te, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (ae) => w.value = !0)
              }, {
                default: i(() => [...L[15] || (L[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(te, {
                variant: "primary",
                size: "sm",
                onClick: L[1] || (L[1] = (ae) => T.value = !0)
              }, {
                default: i(() => [...L[16] || (L[16] = [
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
          M.value ? (o(), s("div", ku, [
            e("div", bu, [
              e("span", _u, l(M.value.message), 1),
              e("span", $u, l(M.value.current) + "/" + l(M.value.total), 1)
            ]),
            e("div", Cu, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          f(ct, {
            modelValue: I.value,
            "onUpdate:modelValue": L[3] || (L[3] = (ae) => I.value = ae),
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
            onRetry: F
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            a.value.length ? (o(), S(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + l(a.value.length) + " models • " + l(x(N.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(W, null, se(E.value, (ae) => (o(), S(ke, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(ae.models, (Q) => (o(), S(xe, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...L[17] || (L[17] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(l(Q.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(l(x(Q.size)), 1)
                  ]),
                  details: i(() => [
                    f(he, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_e) => A(Q)
                    }, {
                      default: i(() => [...L[18] || (L[18] = [
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
            O.value.length ? c("", !0) : (o(), S(Be, {
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
        onClose: L[4] || (L[4] = (ae) => k.value = !1)
      }, {
        content: i(() => [...L[19] || (L[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      C.value ? (o(), S(Yt, {
        key: 0,
        identifier: C.value,
        onClose: L[5] || (L[5] = (ae) => C.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), S(Se, { to: "body" }, [
        w.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: L[9] || (L[9] = we((ae) => w.value = !1, ["self"]))
        }, [
          e("div", xu, [
            e("div", Su, [
              L[20] || (L[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: L[6] || (L[6] = (ae) => w.value = !1)
              }, "✕")
            ]),
            e("div", Iu, [
              e("div", Eu, [
                L[21] || (L[21] = e("label", null, "Current Directory", -1)),
                e("code", Mu, l($.value || "Not set"), 1)
              ]),
              e("div", zu, [
                L[22] || (L[22] = e("label", null, "New Directory Path", -1)),
                f(Pe, {
                  modelValue: R.value,
                  "onUpdate:modelValue": L[7] || (L[7] = (ae) => R.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              L[23] || (L[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Lu, [
              f(le, {
                variant: "secondary",
                onClick: L[8] || (L[8] = (ae) => w.value = !1)
              }, {
                default: i(() => [...L[24] || (L[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(le, {
                variant: "primary",
                disabled: !R.value.trim() || V.value,
                loading: V.value,
                onClick: oe
              }, {
                default: i(() => [
                  h(l(V.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), S(Se, { to: "body" }, [
        T.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: L[14] || (L[14] = we((ae) => T.value = !1, ["self"]))
        }, [
          e("div", Tu, [
            e("div", Nu, [
              L[25] || (L[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: L[10] || (L[10] = (ae) => T.value = !1)
              }, "✕")
            ]),
            e("div", Ru, [
              e("div", Du, [
                L[26] || (L[26] = e("label", null, "Download URL", -1)),
                f(Pe, {
                  modelValue: z.value,
                  "onUpdate:modelValue": L[11] || (L[11] = (ae) => z.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Ou, [
                L[27] || (L[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Pe, {
                  modelValue: H.value,
                  "onUpdate:modelValue": L[12] || (L[12] = (ae) => H.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              L[28] || (L[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Uu, [
              f(le, {
                variant: "secondary",
                onClick: L[13] || (L[13] = (ae) => T.value = !1)
              }, {
                default: i(() => [...L[29] || (L[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(le, {
                variant: "primary",
                disabled: !z.value.trim() || !H.value.trim(),
                onClick: K
              }, {
                default: i(() => [...L[30] || (L[30] = [
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
}), Bu = /* @__PURE__ */ ee(Pu, [["__scopeId", "data-v-73b78d84"]]), Fu = { class: "node-details" }, Vu = { class: "status-row" }, Au = {
  key: 0,
  class: "detail-row"
}, Wu = { class: "value" }, Gu = { class: "detail-row" }, ju = { class: "value" }, Hu = {
  key: 1,
  class: "detail-row"
}, qu = { class: "value mono" }, Ku = {
  key: 2,
  class: "detail-row"
}, Ju = ["href"], Qu = {
  key: 3,
  class: "detail-row"
}, Xu = { class: "value mono small" }, Yu = { class: "detail-row" }, Zu = {
  key: 0,
  class: "value"
}, em = {
  key: 1,
  class: "workflow-list"
}, tm = /* @__PURE__ */ Z({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), y = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), p = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, a) => (o(), S(dt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: a[1] || (a[1] = (v) => r("close"))
    }, {
      body: i(() => [
        e("div", Fu, [
          e("div", Vu, [
            a[2] || (a[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", g.value])
            }, l(y.value), 3)
          ]),
          t.node.version ? (o(), s("div", Au, [
            a[3] || (a[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Wu, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : c("", !0),
          e("div", Gu, [
            a[4] || (a[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", ju, l(p.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", Hu, [
            a[5] || (a[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", qu, l(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), s("div", Ku, [
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
            ], 8, Ju)
          ])) : c("", !0),
          t.node.download_url ? (o(), s("div", Qu, [
            a[8] || (a[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Xu, l(t.node.download_url), 1)
          ])) : c("", !0),
          a[10] || (a[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Yu, [
            a[9] || (a[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", Zu, " Not used in any workflows ")) : (o(), s("div", em, [
              (o(!0), s(W, null, se(t.node.used_in_workflows, (v) => (o(), s("span", {
                key: v,
                class: "workflow-tag"
              }, l(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        f(le, {
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
}), om = /* @__PURE__ */ ee(tm, [["__scopeId", "data-v-b342f626"]]), sm = { key: 0 }, nm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, am = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, lm = /* @__PURE__ */ Z({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: g, installNode: y, uninstallNode: p } = Ie(), m = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), a = _(!1), v = _(null), b = _(""), d = _(!1), I = _(null), k = P(() => {
      if (!b.value.trim()) return m.value.nodes;
      const E = b.value.toLowerCase();
      return m.value.nodes.filter(
        (x) => {
          var A, J;
          return x.name.toLowerCase().includes(E) || ((A = x.description) == null ? void 0 : A.toLowerCase().includes(E)) || ((J = x.repository) == null ? void 0 : J.toLowerCase().includes(E));
        }
      );
    }), C = P(
      () => k.value.filter((E) => E.installed && E.tracked)
    ), w = P(
      () => k.value.filter((E) => !E.installed && E.tracked)
    ), $ = P(
      () => k.value.filter((E) => E.installed && !E.tracked)
    );
    function R(E) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[E] || E;
    }
    function V(E) {
      return !E.used_in_workflows || E.used_in_workflows.length === 0 ? "Not used in any workflows" : E.used_in_workflows.length === 1 ? E.used_in_workflows[0] : `${E.used_in_workflows.length} workflows`;
    }
    function T(E) {
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
          x.status === "success" ? (alert(`Node "${E}" is now tracked as development!`), await O()) : alert(`Failed to track node: ${x.message || "Unknown error"}`);
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
          x.status === "success" ? (alert(`Node "${E}" removed!`), await O()) : alert(`Failed to remove node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error removing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function N(E) {
      if (confirm(`Install node "${E}"?

This will download and install the node.`))
        try {
          a.value = !0;
          const x = await y(E);
          x.status === "success" ? (alert(`Node "${E}" installed successfully!`), await O()) : alert(`Failed to install node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error installing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function O() {
      a.value = !0, v.value = null;
      try {
        m.value = await r();
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load nodes";
      } finally {
        a.value = !1;
      }
    }
    return be(O), (E, x) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (A) => d.value = !0)
          }, {
            actions: i(() => [
              f(te, {
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
          f(ct, {
            modelValue: b.value,
            "onUpdate:modelValue": x[1] || (x[1] = (A) => b.value = A),
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
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            m.value.total_count ? (o(), S(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(l(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(W, { key: 0 }, [
                  h(" • " + l(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (o(), s(W, { key: 1 }, [
                  h(" • " + l(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            $.value.length ? (o(), S(ke, {
              key: 1,
              title: "UNTRACKED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, se($.value, (A) => (o(), S(xe, {
                  key: A.name,
                  status: "warning"
                }, {
                  icon: i(() => [...x[6] || (x[6] = [
                    h("?", -1)
                  ])]),
                  title: i(() => [
                    h(l(A.name), 1)
                  ]),
                  subtitle: i(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    f(he, {
                      label: "Used by:",
                      value: V(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => T(A)
                    }, {
                      default: i(() => [...x[8] || (x[8] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => H(A.name)
                    }, {
                      default: i(() => [...x[9] || (x[9] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (J) => M(A.name)
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
            C.value.length ? (o(), S(ke, {
              key: 2,
              title: "INSTALLED",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(C.value, (A) => (o(), S(xe, {
                  key: A.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    h(l(A.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    h(l(A.name), 1)
                  ]),
                  subtitle: i(() => [
                    A.version ? (o(), s("span", sm, l(A.source === "development" ? "" : "v") + l(A.version), 1)) : (o(), s("span", nm, "version unknown")),
                    e("span", am, " • " + l(R(A.source)), 1)
                  ]),
                  details: i(() => [
                    f(he, {
                      label: "Used by:",
                      value: V(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => T(A)
                    }, {
                      default: i(() => [...x[11] || (x[11] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
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
            w.value.length ? (o(), S(ke, {
              key: 3,
              title: "MISSING",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(w.value, (A) => (o(), S(xe, {
                  key: A.name,
                  status: "missing"
                }, {
                  icon: i(() => [...x[13] || (x[13] = [
                    h("!", -1)
                  ])]),
                  title: i(() => [
                    h(l(A.name), 1)
                  ]),
                  subtitle: i(() => [...x[14] || (x[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    f(he, {
                      label: "Required by:",
                      value: V(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => T(A)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => N(A.name)
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
            !C.value.length && !w.value.length && !$.value.length ? (o(), S(Be, {
              key: 4,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: x[3] || (x[3] = (A) => d.value = !1)
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
          f(te, {
            variant: "primary",
            onClick: x[2] || (x[2] = (A) => d.value = !1)
          }, {
            default: i(() => [...x[18] || (x[18] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(om, {
        key: 0,
        node: I.value,
        onClose: x[4] || (x[4] = (A) => I.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), im = /* @__PURE__ */ ee(lm, [["__scopeId", "data-v-4ac1465a"]]), rm = { class: "remote-url-display" }, dm = ["title"], cm = ["title"], um = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vm = /* @__PURE__ */ Z({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = _(!1), r = P(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const y = u.url.slice(0, Math.floor(u.maxLength * 0.6)), p = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${y}...${p}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, p) => (o(), s("div", rm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, dm),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", mm, [...p[1] || (p[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", um, [...p[0] || (p[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, cm)
    ]));
  }
}), Wt = /* @__PURE__ */ ee(vm, [["__scopeId", "data-v-7768a58d"]]), fm = { class: "remote-title" }, gm = {
  key: 0,
  class: "default-badge"
}, pm = {
  key: 1,
  class: "sync-badge"
}, hm = {
  key: 0,
  class: "ahead"
}, ym = {
  key: 1,
  class: "behind"
}, wm = {
  key: 0,
  class: "tracking-info"
}, km = /* @__PURE__ */ Z({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: u }) {
    const n = t, r = P(() => n.fetchingRemote === n.remote.name), g = P(() => n.remote.is_default), y = P(() => !!n.trackingBranch);
    function p(m) {
      const a = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - a.getTime(), d = Math.floor(b / 6e4);
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
        e("div", fm, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), s("span", gm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", pm, [
            t.syncStatus.ahead > 0 ? (o(), s("span", hm, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", ym, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        y.value ? (o(), s("span", wm, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var v;
        return [
          f(he, { label: "Fetch:" }, {
            default: i(() => [
              f(Wt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), S(he, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              f(Wt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (v = t.syncStatus) != null && v.last_fetch ? (o(), S(he, {
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
        f(te, {
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
        f(te, {
          variant: "secondary",
          size: "xs",
          onClick: a[1] || (a[1] = (v) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...a[4] || (a[4] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), S(te, {
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
}), bm = /* @__PURE__ */ ee(km, [["__scopeId", "data-v-17362e45"]]), _m = ["for"], $m = {
  key: 0,
  class: "base-form-field-required"
}, Cm = { class: "base-form-field-input" }, xm = {
  key: 1,
  class: "base-form-field-error"
}, Sm = {
  key: 2,
  class: "base-form-field-hint"
}, Im = /* @__PURE__ */ Z({
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
    const u = t, n = P(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, g) => (o(), s("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(l(t.label) + " ", 1),
        t.required ? (o(), s("span", $m, "*")) : c("", !0)
      ], 8, _m)) : c("", !0),
      e("div", Cm, [
        de(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", xm, l(t.error), 1)) : t.hint ? (o(), s("span", Sm, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ ee(Im, [["__scopeId", "data-v-9a1cf296"]]), Em = { class: "remote-form" }, Mm = { class: "form-header" }, zm = { class: "form-body" }, Lm = {
  key: 0,
  class: "form-error"
}, Tm = { class: "form-actions" }, Nm = /* @__PURE__ */ Z({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), y = _(!1), p = _(null);
    Ot(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = P(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function a() {
      if (!(!m.value || y.value)) {
        p.value = null, y.value = !0;
        try {
          r("submit", g.value);
        } catch (v) {
          p.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (v, b) => (o(), s("div", Em, [
      e("div", Mm, [
        f(Te, null, {
          default: i(() => [
            h(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", zm, [
        f(Lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            f(Pe, {
              modelValue: g.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (d) => g.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f(Lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            f(Pe, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (d) => g.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(Lt, { label: "Push URL (optional)" }, {
          default: i(() => [
            f(Pe, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (d) => g.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p.value ? (o(), s("div", Lm, l(p.value), 1)) : c("", !0)
      ]),
      e("div", Tm, [
        f(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: y.value,
          onClick: a
        }, {
          default: i(() => [
            h(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(te, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (d) => v.$emit("cancel"))
        }, {
          default: i(() => [...b[4] || (b[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Rm = /* @__PURE__ */ ee(Nm, [["__scopeId", "data-v-56021b18"]]), Dm = { key: 0 }, Om = /* @__PURE__ */ Z({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: p
    } = Ie(), m = _([]), a = _(null), v = _({}), b = _(!1), d = _(null), I = _(""), k = _(!1), C = _(null), w = _(!1), $ = _("add"), R = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), V = P(() => {
      if (!I.value.trim()) return m.value;
      const J = I.value.toLowerCase();
      return m.value.filter(
        (oe) => oe.name.toLowerCase().includes(J) || oe.fetch_url.toLowerCase().includes(J) || oe.push_url.toLowerCase().includes(J)
      );
    });
    function T(J) {
      var oe;
      return ((oe = a.value) == null ? void 0 : oe.remote) === J;
    }
    async function z() {
      b.value = !0, d.value = null;
      try {
        const J = await u();
        m.value = J.remotes, a.value = J.current_branch_tracking || null, await Promise.all(
          J.remotes.map(async (oe) => {
            const K = await p(oe.name);
            K && (v.value[oe.name] = K);
          })
        );
      } catch (J) {
        d.value = J instanceof Error ? J.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function H() {
      $.value = "add", R.value = { name: "", fetchUrl: "", pushUrl: "" }, w.value = !0;
    }
    function M(J) {
      const oe = m.value.find((K) => K.name === J);
      oe && ($.value = "edit", R.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, w.value = !0);
    }
    async function N(J) {
      try {
        $.value === "add" ? await n(J.name, J.fetchUrl) : await g(J.name, J.fetchUrl, J.pushUrl || void 0), w.value = !1, await z();
      } catch (oe) {
        d.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function O() {
      w.value = !1, R.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function E(J) {
      C.value = J;
      try {
        await y(J);
        const oe = await p(J);
        oe && (v.value[J] = oe);
      } catch (oe) {
        d.value = oe instanceof Error ? oe.message : "Fetch failed";
      } finally {
        C.value = null;
      }
    }
    async function x(J) {
      if (confirm(`Remove remote "${J}"?`))
        try {
          await r(J), await z();
        } catch (oe) {
          d.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function A() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return be(z), (J, oe) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (K) => k.value = !0)
          }, {
            actions: i(() => [
              w.value ? c("", !0) : (o(), S(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: i(() => [...oe[3] || (oe[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          w.value ? c("", !0) : (o(), S(ct, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (K) => I.value = K),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), S(Je, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            w.value ? (o(), S(Rm, {
              key: 0,
              mode: $.value,
              "remote-name": R.value.name,
              "fetch-url": R.value.fetchUrl,
              "push-url": R.value.pushUrl,
              onSubmit: N,
              onCancel: O
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !w.value ? (o(), S(ut, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                a.value ? (o(), s("span", Dm, " • Tracking: " + l(a.value.remote) + "/" + l(a.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            V.value.length && !w.value ? (o(), S(ke, {
              key: 2,
              title: "REMOTES",
              count: V.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, se(V.value, (K) => {
                  var F;
                  return o(), S(bm, {
                    key: K.name,
                    remote: K,
                    "sync-status": v.value[K.name],
                    "tracking-branch": T(K.name) ? (F = a.value) == null ? void 0 : F.branch : void 0,
                    "fetching-remote": C.value,
                    onFetch: E,
                    onEdit: M,
                    onRemove: x
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !V.value.length && !w.value ? (o(), S(Be, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                f(te, {
                  variant: "primary",
                  onClick: H
                }, {
                  default: i(() => [...oe[4] || (oe[4] = [
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
      f(qe, {
        show: k.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (K) => k.value = !1)
      }, {
        content: i(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          f(te, {
            variant: "link",
            onClick: A
          }, {
            default: i(() => [...oe[6] || (oe[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Um = /* @__PURE__ */ ee(Om, [["__scopeId", "data-v-a75719bb"]]), Pm = { class: "setting-info" }, Bm = { class: "setting-label" }, Fm = {
  key: 0,
  class: "required-marker"
}, Vm = {
  key: 0,
  class: "setting-description"
}, Am = { class: "setting-control" }, Wm = /* @__PURE__ */ Z({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Pm, [
        e("div", Bm, [
          h(l(t.label) + " ", 1),
          t.required ? (o(), s("span", Fm, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", Vm, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Am, [
        de(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ ee(Wm, [["__scopeId", "data-v-cb5d236c"]]), Gm = { class: "toggle" }, jm = ["checked", "disabled"], Hm = /* @__PURE__ */ Z({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", Gm, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, jm),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), et = /* @__PURE__ */ ee(Hm, [["__scopeId", "data-v-71c0f550"]]), qm = { class: "settings-section" }, Km = { class: "path-setting" }, Jm = { class: "path-value" }, Qm = { class: "path-setting" }, Xm = { class: "path-value" }, Ym = { class: "settings-section" }, Zm = { class: "settings-section" }, ev = { class: "settings-section" }, tv = /* @__PURE__ */ Z({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Ie(), r = _(!1), g = _(null), y = _(null), p = _(null), m = _(null), a = _(""), v = _(""), b = _(!0), d = _(!0), I = _(!1), k = P(() => m.value ? a.value !== (m.value.civitai_api_key || "") : !1);
    async function C() {
      r.value = !0, g.value = null;
      try {
        p.value = await u(), m.value = { ...p.value }, a.value = p.value.civitai_api_key || "", v.value = p.value.huggingface_token || "", b.value = p.value.auto_sync_models, d.value = p.value.confirm_destructive;
        const V = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        I.value = V === "true";
      } catch (V) {
        g.value = V instanceof Error ? V.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function w() {
      var V;
      y.value = null;
      try {
        const T = {};
        a.value !== (((V = m.value) == null ? void 0 : V.civitai_api_key) || "") && (T.civitai_api_key = a.value || null), await n(T), await C(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (T) {
        y.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to save settings"
        };
      }
    }
    function $() {
      m.value && (a.value = m.value.civitai_api_key || "", v.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, y.value = null);
    }
    function R(V) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(V)), console.log("[ComfyGit] Auto-refresh setting saved:", V);
    }
    return be(C), (V, T) => (o(), S(Ee, null, {
      header: i(() => [
        f(Me, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            f(te, {
              variant: "primary",
              size: "sm",
              disabled: !k.value,
              onClick: w
            }, {
              default: i(() => [...T[5] || (T[5] = [
                h(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            k.value ? (o(), S(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: $
            }, {
              default: i(() => [...T[6] || (T[6] = [
                h(" Reset ", -1)
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
          onRetry: C
        }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
          f(ke, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var z, H;
              return [
                e("div", qm, [
                  e("div", Km, [
                    T[7] || (T[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    T[8] || (T[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Jm, l(((z = p.value) == null ? void 0 : z.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Qm, [
                    T[9] || (T[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    T[10] || (T[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Xm, l(((H = p.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(ke, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", Ym, [
                f(Ge, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    f(xt, {
                      modelValue: a.value,
                      "onUpdate:modelValue": T[0] || (T[0] = (z) => a.value = z),
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
                    f(xt, {
                      modelValue: v.value,
                      "onUpdate:modelValue": T[1] || (T[1] = (z) => v.value = z),
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
          f(ke, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Zm, [
                f(Ge, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    f(et, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        T[2] || (T[2] = (z) => I.value = z),
                        R
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f(ke, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", ev, [
                f(Ge, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(et, {
                      modelValue: b.value,
                      "onUpdate:modelValue": T[3] || (T[3] = (z) => b.value = z),
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
                    f(et, {
                      modelValue: d.value,
                      "onUpdate:modelValue": T[4] || (T[4] = (z) => d.value = z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), S(ut, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: He({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), ov = /* @__PURE__ */ ee(tv, [["__scopeId", "data-v-7861bd35"]]), sv = /* @__PURE__ */ Z({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Ie(), n = _([]), r = _(!1), g = _(null), y = _(!1), p = _(null), m = P(() => n.value.length === 0 ? [] : n.value.map((v) => ({
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
    return be(a), (v, b) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (d) => y.value = !0)
          }, {
            actions: i(() => [
              f(te, {
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
          r.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), S(Je, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: a
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            n.value.length === 0 ? (o(), S(Be, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (o(!0), s(W, null, se(m.value, (d, I) => (o(), s("div", {
                key: I,
                class: ne(`log-line log-level-${d.level.toLowerCase()}`)
              }, l(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (d) => y.value = !1)
      }, {
        content: i(() => [...b[3] || (b[3] = [
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
          f(te, {
            variant: "primary",
            onClick: b[1] || (b[1] = (d) => y.value = !1)
          }, {
            default: i(() => [...b[4] || (b[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nv = /* @__PURE__ */ ee(sv, [["__scopeId", "data-v-39f6a756"]]), av = /* @__PURE__ */ Z({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Ie(), r = _([]), g = _(!1), y = _(null), p = _(!1), m = _("production"), a = _(null), v = P(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function b() {
      g.value = !0, y.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const d = await n();
          m.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        y.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var d;
          (d = a.value) != null && d.parentElement && (a.value.parentElement.scrollTop = a.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(b), (d, I) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (k) => p.value = !0)
          }, {
            actions: i(() => [
              f(te, {
                variant: "secondary",
                size: "sm",
                onClick: b,
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
          g.value ? (o(), S(Ke, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), S(Je, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            r.value.length === 0 ? (o(), S(Be, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: a,
              class: "log-output"
            }, [
              (o(!0), s(W, null, se(v.value, (k, C) => (o(), s("div", {
                key: C,
                class: ne(`log-line log-level-${k.level.toLowerCase()}`)
              }, l(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
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
          f(te, {
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
}), lv = /* @__PURE__ */ ee(av, [["__scopeId", "data-v-4f1e6f72"]]), iv = { class: "env-title" }, rv = {
  key: 0,
  class: "current-badge"
}, dv = {
  key: 0,
  class: "branch-info"
}, cv = /* @__PURE__ */ Z({
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
        e("div", iv, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", rv, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", dv, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: i(() => [
        f(he, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        f(he, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        f(he, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), S(he, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: i(() => [
        de(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), uv = /* @__PURE__ */ ee(cv, [["__scopeId", "data-v-5238e57c"]]), mv = {
  key: 0,
  class: "create-form"
}, vv = { class: "create-form__header" }, fv = { class: "create-form__body" }, gv = { class: "create-form__actions" }, pv = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, hv = /* @__PURE__ */ Z({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironments: r } = Ie(), g = _([]), y = _(!1), p = _(null), m = _(""), a = _(!1), v = _(!1), b = _(""), d = P(
      () => g.value.find((T) => T.is_current)
    ), I = P(() => {
      if (!m.value.trim()) return g.value;
      const T = m.value.toLowerCase();
      return g.value.filter(
        (z) => {
          var H;
          return z.name.toLowerCase().includes(T) || ((H = z.current_branch) == null ? void 0 : H.toLowerCase().includes(T));
        }
      );
    });
    function k(T) {
      if (!T) return "";
      try {
        const z = new Date(T), M = (/* @__PURE__ */ new Date()).getTime() - z.getTime(), N = Math.floor(M / 6e4), O = Math.floor(M / 36e5), E = Math.floor(M / 864e5);
        return N < 1 ? "just now" : N < 60 ? `${N} ${N === 1 ? "minute" : "minutes"} ago` : O < 24 ? `${O} ${O === 1 ? "hour" : "hours"} ago` : E < 30 ? `${E} ${E === 1 ? "day" : "days"} ago` : z.toLocaleDateString();
      } catch {
        return T;
      }
    }
    function C() {
      const T = b.value.trim();
      T && (n("create", T), b.value = "", v.value = !1);
    }
    function w() {
      b.value = "", v.value = !1;
    }
    function $(T) {
      n("viewDetails", T);
    }
    function R(T) {
      confirm(`Delete environment "${T}"?

This action cannot be undone.`) && n("delete", T);
    }
    async function V() {
      y.value = !0, p.value = null;
      try {
        g.value = await r();
      } catch (T) {
        p.value = T instanceof Error ? T.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return be(V), (T, z) => {
      const H = co("SectionGroup");
      return o(), s(W, null, [
        f(Ee, null, {
          header: i(() => [
            f(Me, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: z[1] || (z[1] = (M) => a.value = !0)
            }, {
              actions: i(() => [
                f(te, {
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
                f(te, {
                  variant: "ghost",
                  size: "sm",
                  onClick: V,
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
            f(ct, {
              modelValue: m.value,
              "onUpdate:modelValue": z[2] || (z[2] = (M) => m.value = M),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: i(() => [
            y.value ? (o(), S(Ke, {
              key: 0,
              message: "Loading environments..."
            })) : p.value ? (o(), S(Je, {
              key: 1,
              message: p.value,
              retry: !0,
              onRetry: V
            }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
              v.value ? (o(), s("div", mv, [
                e("div", vv, [
                  z[10] || (z[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  f(te, {
                    variant: "ghost",
                    size: "xs",
                    onClick: w
                  }, {
                    default: i(() => [...z[9] || (z[9] = [
                      h(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", fv, [
                  f(xt, {
                    modelValue: b.value,
                    "onUpdate:modelValue": z[3] || (z[3] = (M) => b.value = M),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      je(C, ["enter"]),
                      je(w, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", gv, [
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: C,
                      disabled: !b.value.trim()
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
                        h(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: w
                    }, {
                      default: i(() => [...z[12] || (z[12] = [
                        h(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), S(ut, {
                key: 1,
                variant: "compact"
              }, {
                default: i(() => [
                  h(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  d.value ? (o(), s(W, { key: 0 }, [
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
                  (o(!0), s(W, null, se(I.value, (M) => (o(), S(uv, {
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
                      M.is_current ? c("", !0) : (o(), S(te, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (N) => T.$emit("switch", M.name)
                      }, {
                        default: i(() => [...z[14] || (z[14] = [
                          h(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      f(te, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (N) => $(M.name),
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
                      !M.is_current && g.value.length > 1 ? (o(), S(te, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (N) => R(M.name),
                        title: "Delete environment"
                      }, {
                        default: i(() => [
                          (o(), s("svg", pv, [...z[16] || (z[16] = [
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
              I.value.length ? c("", !0) : (o(), S(Be, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, Ut({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: i(() => [
                    f(te, {
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
        f(qe, {
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
            f(te, {
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
}), yv = /* @__PURE__ */ ee(hv, [["__scopeId", "data-v-97d6527d"]]), wv = { class: "file-path" }, kv = { class: "file-path-text" }, bv = ["title"], _v = /* @__PURE__ */ Z({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = _(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), s("div", wv, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", kv, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, bv)) : c("", !0)
    ]));
  }
}), $v = /* @__PURE__ */ ee(_v, [["__scopeId", "data-v-f0982173"]]), Cv = { class: "output-path-input" }, xv = { class: "export-actions" }, Sv = {
  key: 1,
  class: "export-warning"
}, Iv = /* @__PURE__ */ Z({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Ie(), n = _(""), r = _(!1), g = _(null), y = _(!1);
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
    return (a, v) => (o(), s(W, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              f(te, {
                variant: "ghost",
                size: "sm",
                onClick: v[0] || (v[0] = (b) => y.value = !0),
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
          f(ke, { title: "WHAT WILL BE EXPORTED" }, {
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
                  f(he, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(he, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(he, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(he, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(ke, { title: "EXPORT OPTIONS" }, {
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
                  e("div", Cv, [
                    f(xt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": v[1] || (v[1] = (b) => n.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(ke, { title: "EXPORT" }, {
            default: i(() => [
              e("div", xv, [
                f(te, {
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
                n.value ? (o(), S(te, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: v[2] || (v[2] = (b) => n.value = "")
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
          g.value ? (o(), S(ke, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              f(xe, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Ut({
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
                    f(he, { label: "Saved to:" }, {
                      default: i(() => [
                        f($v, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), S(he, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), s("div", Sv, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...v[15] || (v[15] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: v[3] || (v[3] = (b) => g.value = null)
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
      f(qe, {
        show: y.value,
        title: "About Environment Export",
        onClose: v[4] || (v[4] = (b) => y.value = !1)
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
}), Ev = /* @__PURE__ */ ee(Iv, [["__scopeId", "data-v-1777a9d5"]]), Mv = { class: "file-input-wrapper" }, zv = ["accept", "multiple", "disabled"], Lv = /* @__PURE__ */ Z({
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
    const r = n, g = _(null);
    function y() {
      var m;
      (m = g.value) == null || m.click();
    }
    function p(m) {
      const a = m.target;
      a.files && a.files.length > 0 && (r("change", a.files), a.value = "");
    }
    return u({
      triggerInput: y
    }), (m, a) => (o(), s("div", Mv, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: p
      }, null, 40, zv),
      f(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: i(() => [
          de(m.$slots, "default", {}, () => [
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
}), Tv = /* @__PURE__ */ ee(Lv, [["__scopeId", "data-v-cd192091"]]), Nv = {
  key: 0,
  class: "drop-zone-empty"
}, Rv = { class: "drop-zone-text" }, Dv = { class: "drop-zone-primary" }, Ov = { class: "drop-zone-secondary" }, Uv = { class: "drop-zone-actions" }, Pv = {
  key: 1,
  class: "drop-zone-file"
}, Bv = { class: "file-info" }, Fv = { class: "file-details" }, Vv = { class: "file-name" }, Av = { class: "file-size" }, Wv = /* @__PURE__ */ Z({
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
    const n = u, r = _(!1), g = _(null), y = _(0), p = P(() => g.value !== null), m = P(() => {
      var $;
      return (($ = g.value) == null ? void 0 : $.name) || "";
    }), a = P(() => {
      if (!g.value) return "";
      const $ = g.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var R;
      y.value++, (R = $.dataTransfer) != null && R.types.includes("Files") && (r.value = !0);
    }
    function b($) {
      $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function d() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function I($) {
      var V;
      y.value = 0, r.value = !1;
      const R = (V = $.dataTransfer) == null ? void 0 : V.files;
      R && R.length > 0 && C(R[0]);
    }
    function k($) {
      $.length > 0 && C($[0]);
    }
    function C($) {
      g.value = $, n("fileSelected", $);
    }
    function w() {
      g.value = null, n("clear");
    }
    return ($, R) => (o(), s("div", {
      class: ne(["file-drop-zone", { "drop-active": r.value, "has-file": p.value }]),
      onDragenter: we(v, ["prevent"]),
      onDragover: we(b, ["prevent"]),
      onDragleave: we(d, ["prevent"]),
      onDrop: we(I, ["prevent"])
    }, [
      p.value ? (o(), s("div", Pv, [
        e("div", Bv, [
          R[1] || (R[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Fv, [
            e("div", Vv, l(m.value), 1),
            e("div", Av, l(a.value), 1)
          ])
        ]),
        f(te, {
          variant: "ghost",
          size: "xs",
          onClick: w,
          title: "Remove file"
        }, {
          default: i(() => [...R[2] || (R[2] = [
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
      ])) : (o(), s("div", Nv, [
        R[0] || (R[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Rv, [
          e("p", Dv, l(t.primaryText), 1),
          e("p", Ov, l(t.secondaryText), 1)
        ]),
        e("div", Uv, [
          f(Tv, {
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
}), Gv = /* @__PURE__ */ ee(Wv, [["__scopeId", "data-v-e00abbca"]]), jv = { class: "import-preview" }, Hv = { class: "preview-header" }, qv = {
  key: 0,
  class: "source-env"
}, Kv = { class: "preview-content" }, Jv = { class: "preview-section" }, Qv = { class: "section-header" }, Xv = { class: "section-info" }, Yv = { class: "section-count" }, Zv = {
  key: 0,
  class: "item-list"
}, ef = { class: "item-name" }, tf = {
  key: 0,
  class: "item-more"
}, of = { class: "preview-section" }, sf = { class: "section-header" }, nf = { class: "section-info" }, af = { class: "section-count" }, lf = {
  key: 0,
  class: "item-list"
}, rf = { class: "item-details" }, df = { class: "item-name" }, cf = { class: "item-meta" }, uf = {
  key: 0,
  class: "item-more"
}, mf = { class: "preview-section" }, vf = { class: "section-header" }, ff = { class: "section-info" }, gf = { class: "section-count" }, pf = {
  key: 0,
  class: "item-list"
}, hf = { class: "item-name" }, yf = {
  key: 0,
  class: "item-more"
}, wf = {
  key: 0,
  class: "preview-section"
}, kf = { class: "git-info" }, bf = /* @__PURE__ */ Z({
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
    const u = t, n = P(() => u.workflows.length), r = P(() => u.models.length), g = P(() => u.nodes.length);
    function y(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, m) => (o(), s("div", jv, [
      e("div", Hv, [
        f(Te, null, {
          default: i(() => [...m[0] || (m[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", qv, [
          m[1] || (m[1] = h(" From: ", -1)),
          f(Rt, null, {
            default: i(() => [
              h(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Kv, [
        e("div", Jv, [
          e("div", Qv, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Xv, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Yv, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", Zv, [
            (o(!0), s(W, null, se(t.workflows.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ef, l(a), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", tf, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", of, [
          e("div", sf, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", nf, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", af, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", lf, [
            (o(!0), s(W, null, se(t.models.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", rf, [
                e("span", df, l(a.filename), 1),
                e("span", cf, l(y(a.size)) + " • " + l(a.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", uf, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", mf, [
          e("div", vf, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", ff, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", gf, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", pf, [
            (o(!0), s(W, null, se(t.nodes.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", hf, l(a), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", yf, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", wf, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", kf, [
            t.gitBranch ? (o(), S(he, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                f(Rt, null, {
                  default: i(() => [
                    h(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), S(he, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                f(Jt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), _f = /* @__PURE__ */ ee(bf, [["__scopeId", "data-v-182fe113"]]), $f = { class: "import-options" }, Cf = { class: "options-container" }, xf = { class: "option-section" }, Sf = { class: "conflict-options" }, If = ["value", "checked", "onChange"], Ef = { class: "conflict-content" }, Mf = { class: "conflict-label" }, zf = { class: "conflict-description" }, Lf = { class: "option-section" }, Tf = { class: "component-toggles" }, Nf = /* @__PURE__ */ Z({
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
    return (g, y) => (o(), s("div", $f, [
      f(Te, null, {
        default: i(() => [...y[4] || (y[4] = [
          h("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Cf, [
        e("div", xf, [
          f(Nt, null, {
            default: i(() => [...y[5] || (y[5] = [
              h("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Sf, [
            (o(), s(W, null, se(r, (p) => e("label", {
              key: p.value,
              class: ne(["conflict-option", { active: t.conflictMode === p.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: p.value,
                checked: t.conflictMode === p.value,
                onChange: (m) => n("update:conflictMode", p.value)
              }, null, 40, If),
              e("div", Ef, [
                e("span", Mf, l(p.label), 1),
                e("span", zf, l(p.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Lf, [
          f(Nt, null, {
            default: i(() => [...y[6] || (y[6] = [
              h("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Tf, [
            f(Ge, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (p) => n("update:includeWorkflows", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (p) => n("update:includeModels", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (p) => n("update:includeNodes", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (p) => n("update:includeGitHistory", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Rf = /* @__PURE__ */ ee(Nf, [["__scopeId", "data-v-0ec212b0"]]), Df = {
  key: 0,
  class: "import-empty"
}, Of = { class: "import-help" }, Uf = {
  key: 1,
  class: "import-configure"
}, Pf = { class: "selected-file-bar" }, Bf = { class: "file-bar-content" }, Ff = { class: "file-bar-info" }, Vf = { class: "file-bar-name" }, Af = { class: "file-bar-size" }, Wf = { class: "import-actions" }, Gf = {
  key: 2,
  class: "import-progress"
}, jf = { class: "progress-content" }, Hf = { class: "progress-info" }, qf = { class: "progress-title" }, Kf = { class: "progress-detail" }, Jf = { class: "progress-bar" }, Qf = { class: "progress-status" }, Xf = {
  key: 3,
  class: "import-complete"
}, Yf = { class: "complete-message" }, Zf = { class: "complete-title" }, eg = { class: "complete-details" }, tg = { class: "complete-actions" }, og = /* @__PURE__ */ Z({
  __name: "ImportSection",
  setup(t) {
    const u = _(null), n = _(!1), r = _(!1), g = _(!1), y = _(""), p = _({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = _({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), a = _({
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
    }), v = P(() => p.value.includeWorkflows || p.value.includeModels || p.value.includeNodes || p.value.includeGitHistory);
    function b(w) {
      u.value = w;
    }
    function d() {
      u.value = null, r.value = !1, g.value = !1, y.value = "";
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
          const w = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${a.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${a.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${a.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const $ of w)
            m.value = $, await new Promise((R) => setTimeout(R, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise(($) => setTimeout($, 500)), g.value = !0, y.value = `Successfully imported ${a.value.workflows.length} workflows, ${a.value.models.length} models, and ${a.value.nodes.length} custom nodes.`;
        } catch (w) {
          g.value = !1, y.value = w instanceof Error ? w.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function C(w) {
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (w, $) => (o(), S(Ee, null, {
      header: i(() => [
        f(Me, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (o(), s("div", Df, [
          f(Gv, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Of, [
            f(Te, null, {
              default: i(() => [...$[5] || ($[5] = [
                h("How to Import", -1)
              ])]),
              _: 1
            }),
            $[6] || ($[6] = e("div", { class: "help-content" }, [
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
        ])) : u.value && !n.value && !r.value ? (o(), s("div", Uf, [
          e("div", Pf, [
            e("div", Bf, [
              $[7] || ($[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Ff, [
                e("div", Vf, l(u.value.name), 1),
                e("div", Af, l(C(u.value.size)), 1)
              ])
            ]),
            f(te, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: i(() => [...$[8] || ($[8] = [
                h(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(_f, {
            "source-environment": a.value.sourceEnvironment,
            workflows: a.value.workflows,
            models: a.value.models,
            nodes: a.value.nodes,
            "git-branch": a.value.gitBranch,
            "git-commit": a.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Rf, {
            "conflict-mode": p.value.conflictMode,
            "onUpdate:conflictMode": $[0] || ($[0] = (R) => p.value.conflictMode = R),
            "include-workflows": p.value.includeWorkflows,
            "onUpdate:includeWorkflows": $[1] || ($[1] = (R) => p.value.includeWorkflows = R),
            "include-models": p.value.includeModels,
            "onUpdate:includeModels": $[2] || ($[2] = (R) => p.value.includeModels = R),
            "include-nodes": p.value.includeNodes,
            "onUpdate:includeNodes": $[3] || ($[3] = (R) => p.value.includeNodes = R),
            "include-git-history": p.value.includeGitHistory,
            "onUpdate:includeGitHistory": $[4] || ($[4] = (R) => p.value.includeGitHistory = R)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !p.value.includeModels && a.value.models.length > 0 ? (o(), S(at, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${a.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Wf, [
            f(te, {
              variant: "primary",
              size: "md",
              disabled: !v.value,
              onClick: k
            }, {
              default: i(() => [...$[9] || ($[9] = [
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
            f(te, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: i(() => [...$[10] || ($[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Gf, [
          e("div", jf, [
            $[11] || ($[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Hf, [
              e("div", qf, l(m.value.message), 1),
              e("div", Kf, l(m.value.detail), 1)
            ])
          ]),
          e("div", Jf, [
            e("div", {
              class: "progress-bar-fill",
              style: He({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Qf, l(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", Xf, [
          e("div", {
            class: ne(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", Yf, [
            e("div", Zf, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", eg, l(y.value), 1)
          ]),
          e("div", tg, [
            f(te, {
              variant: "primary",
              size: "md",
              onClick: I
            }, {
              default: i(() => [...$[12] || ($[12] = [
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
}), sg = /* @__PURE__ */ ee(og, [["__scopeId", "data-v-18e18eb5"]]), ng = { class: "header-info" }, ag = { class: "commit-hash" }, lg = {
  key: 0,
  class: "commit-refs"
}, ig = { class: "commit-message" }, rg = { class: "commit-date" }, dg = {
  key: 0,
  class: "loading"
}, cg = {
  key: 1,
  class: "changes-section"
}, ug = { class: "stats-row" }, mg = { class: "stat" }, vg = { class: "stat insertions" }, fg = { class: "stat deletions" }, gg = {
  key: 0,
  class: "change-group"
}, pg = {
  key: 1,
  class: "change-group"
}, hg = {
  key: 0,
  class: "version"
}, yg = {
  key: 2,
  class: "change-group"
}, wg = { class: "change-item" }, kg = /* @__PURE__ */ Z({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Ie(), r = _(null), g = _(!0), y = P(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), p = P(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return be(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (m, a) => (o(), S(dt, {
      size: "md",
      "show-close-button": !1,
      onClose: a[3] || (a[3] = (v) => m.$emit("close"))
    }, {
      header: i(() => {
        var v, b, d, I;
        return [
          e("div", ng, [
            a[4] || (a[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", ag, l(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (I = (d = r.value) == null ? void 0 : d.refs) != null && I.length ? (o(), s("span", lg, [
              (o(!0), s(W, null, se(r.value.refs, (k) => (o(), s("span", {
                key: k,
                class: "ref-badge"
              }, l(k), 1))), 128))
            ])) : c("", !0)
          ]),
          f(le, {
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
        var v, b;
        return [
          e("div", ig, l(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", rg, l(((b = r.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), s("div", dg, "Loading details...")) : r.value ? (o(), s("div", cg, [
            e("div", ug, [
              e("span", mg, l(r.value.stats.files_changed) + " files", 1),
              e("span", vg, "+" + l(r.value.stats.insertions), 1),
              e("span", fg, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), s("div", gg, [
              f(_t, { variant: "section" }, {
                default: i(() => [...a[6] || (a[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(W, null, se(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                a[7] || (a[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(W, null, se(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                a[8] || (a[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(W, null, se(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                a[9] || (a[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d), 1)
              ]))), 128))
            ])) : c("", !0),
            p.value ? (o(), s("div", pg, [
              f(_t, { variant: "section" }, {
                default: i(() => [...a[10] || (a[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(W, null, se(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                a[11] || (a[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d.name), 1),
                d.version ? (o(), s("span", hg, "(" + l(d.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(W, null, se(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                a[12] || (a[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", yg, [
              f(_t, { variant: "section" }, {
                default: i(() => [...a[13] || (a[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", wg, [
                a[14] || (a[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        f(le, {
          variant: "secondary",
          onClick: a[1] || (a[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...a[15] || (a[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(le, {
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
}), bg = /* @__PURE__ */ ee(kg, [["__scopeId", "data-v-d256ff6d"]]), _g = { class: "dialog-message" }, $g = {
  key: 0,
  class: "dialog-details"
}, Cg = {
  key: 1,
  class: "dialog-warning"
}, xg = /* @__PURE__ */ Z({
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
    return (u, n) => (o(), S(dt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", _g, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", $g, [
          (o(!0), s(W, null, se(t.details, (r, g) => (o(), s("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", Cg, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        f(le, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            h(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), S(le, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            h(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        f(le, {
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
}), Sg = /* @__PURE__ */ ee(xg, [["__scopeId", "data-v-3670b9f5"]]), Ig = { class: "base-textarea-wrapper" }, Eg = ["value", "rows", "placeholder", "disabled", "maxlength"], Mg = {
  key: 0,
  class: "base-textarea-count"
}, zg = /* @__PURE__ */ Z({
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
    return (u, n) => (o(), s("div", Ig, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = je(we((r) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = je(we((r) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Eg),
      t.showCharCount && t.maxLength ? (o(), s("div", Mg, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Gt = /* @__PURE__ */ ee(zg, [["__scopeId", "data-v-5516e6fc"]]), Lg = ["checked", "disabled"], Tg = { class: "base-checkbox-box" }, Ng = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Rg = {
  key: 0,
  class: "base-checkbox-label"
}, Dg = /* @__PURE__ */ Z({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, Lg),
      e("span", Tg, [
        t.modelValue ? (o(), s("svg", Ng, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (o(), s("span", Rg, [
        de(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ ee(Dg, [["__scopeId", "data-v-bf17c831"]]), Og = { class: "popover-header" }, Ug = { class: "popover-body" }, Pg = {
  key: 0,
  class: "changes-summary"
}, Bg = {
  key: 0,
  class: "change-item"
}, Fg = {
  key: 1,
  class: "change-item"
}, Vg = {
  key: 2,
  class: "change-item"
}, Ag = {
  key: 3,
  class: "change-item"
}, Wg = {
  key: 4,
  class: "change-item"
}, Gg = {
  key: 1,
  class: "no-changes"
}, jg = {
  key: 2,
  class: "loading"
}, Hg = {
  key: 3,
  class: "issues-error"
}, qg = { class: "error-header" }, Kg = { class: "error-title" }, Jg = { class: "issues-list" }, Qg = { class: "message-section" }, Xg = { class: "popover-footer" }, Yg = {
  key: 1,
  class: "commit-popover"
}, Zg = { class: "popover-header" }, ep = { class: "popover-body" }, tp = {
  key: 0,
  class: "changes-summary"
}, op = {
  key: 0,
  class: "change-item"
}, sp = {
  key: 1,
  class: "change-item"
}, np = {
  key: 2,
  class: "change-item"
}, ap = {
  key: 3,
  class: "change-item"
}, lp = {
  key: 4,
  class: "change-item"
}, ip = {
  key: 1,
  class: "no-changes"
}, rp = {
  key: 2,
  class: "loading"
}, dp = {
  key: 3,
  class: "issues-error"
}, cp = { class: "error-header" }, up = { class: "error-title" }, mp = { class: "issues-list" }, vp = { class: "message-section" }, fp = { class: "popover-footer" }, gp = /* @__PURE__ */ Z({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: g } = Ie(), y = _(""), p = _(!1), m = _(!1), a = _(null), v = P(() => {
      if (!n.status) return !1;
      const C = n.status.workflows;
      return C.new.length > 0 || C.modified.length > 0 || C.deleted.length > 0 || n.status.has_changes;
    }), b = P(() => {
      var C;
      return (C = n.status) != null && C.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (w) => w.has_issues && (w.sync_state === "new" || w.sync_state === "modified")
      ) : [];
    }), d = P(() => b.value.length > 0), I = P(() => d.value && !m.value);
    async function k() {
      var C, w, $;
      if (!(d.value && !m.value) && !(!v.value || !y.value.trim() || p.value)) {
        p.value = !0, a.value = null;
        try {
          const R = await g(y.value.trim(), m.value);
          R.status === "success" ? (a.value = {
            type: "success",
            message: `Committed: ${((C = R.summary) == null ? void 0 : C.new) || 0} new, ${((w = R.summary) == null ? void 0 : w.modified) || 0} modified, ${(($ = R.summary) == null ? void 0 : $.deleted) || 0} deleted`
          }, y.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : R.status === "no_changes" ? a.value = { type: "error", message: "No changes to commit" } : R.status === "blocked" ? a.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : a.value = { type: "error", message: R.message || "Commit failed" };
        } catch (R) {
          a.value = { type: "error", message: R instanceof Error ? R.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (C, w) => t.asModal ? (o(), S(Se, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: w[5] || (w[5] = ($) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: w[4] || (w[4] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Og, [
            w[11] || (w[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: w[0] || (w[0] = ($) => r("close"))
            }, [...w[10] || (w[10] = [
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
          e("div", Ug, [
            t.status && v.value ? (o(), s("div", Pg, [
              t.status.workflows.new.length ? (o(), s("div", Bg, [
                w[12] || (w[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Fg, [
                w[13] || (w[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Vg, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Ag, [
                w[15] || (w[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Wg, [
                w[16] || (w[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", Gg, " No changes to commit ")) : (o(), s("div", jg, " Loading... ")),
            d.value ? (o(), s("div", Hg, [
              e("div", qg, [
                w[17] || (w[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Kg, l(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Jg, [
                (o(!0), s(W, null, se(b.value, ($) => (o(), s("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l($.name), 1),
                  h(": " + l($.issue_summary), 1)
                ]))), 128))
              ]),
              f(jt, {
                modelValue: m.value,
                "onUpdate:modelValue": w[1] || (w[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...w[18] || (w[18] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Qg, [
              f(Gt, {
                modelValue: y.value,
                "onUpdate:modelValue": w[2] || (w[2] = ($) => y.value = $),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || p.value || I.value,
                rows: 3,
                onCtrlEnter: k
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            a.value ? (o(), s("div", {
              key: 4,
              class: ne(["result", a.value.type])
            }, l(a.value.message), 3)) : c("", !0)
          ]),
          e("div", Xg, [
            f(le, {
              variant: "secondary",
              onClick: w[3] || (w[3] = ($) => r("close"))
            }, {
              default: i(() => [...w[19] || (w[19] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !y.value.trim() || p.value || I.value,
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
    ])) : (o(), s("div", Yg, [
      e("div", Zg, [
        w[21] || (w[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: w[6] || (w[6] = ($) => r("close"))
        }, [...w[20] || (w[20] = [
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
      e("div", ep, [
        t.status && v.value ? (o(), s("div", tp, [
          t.status.workflows.new.length ? (o(), s("div", op, [
            w[22] || (w[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", sp, [
            w[23] || (w[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", np, [
            w[24] || (w[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", ap, [
            w[25] || (w[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", lp, [
            w[26] || (w[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", ip, " No changes to commit ")) : (o(), s("div", rp, " Loading... ")),
        d.value ? (o(), s("div", dp, [
          e("div", cp, [
            w[27] || (w[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", up, l(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", mp, [
            (o(!0), s(W, null, se(b.value, ($) => (o(), s("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, l($.name), 1),
              h(": " + l($.issue_summary), 1)
            ]))), 128))
          ]),
          f(jt, {
            modelValue: m.value,
            "onUpdate:modelValue": w[7] || (w[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...w[28] || (w[28] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", vp, [
          f(Gt, {
            modelValue: y.value,
            "onUpdate:modelValue": w[8] || (w[8] = ($) => y.value = $),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || p.value || I.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        a.value ? (o(), s("div", {
          key: 4,
          class: ne(["result", a.value.type])
        }, l(a.value.message), 3)) : c("", !0)
      ]),
      e("div", fp, [
        f(le, {
          variant: "secondary",
          onClick: w[9] || (w[9] = ($) => r("close"))
        }, {
          default: i(() => [...w[29] || (w[29] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(le, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !y.value.trim() || p.value || I.value,
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
}), Zt = /* @__PURE__ */ ee(gp, [["__scopeId", "data-v-d92153de"]]), pp = { class: "modal-header" }, hp = { class: "modal-body" }, yp = { class: "switch-message" }, wp = { class: "switch-details" }, kp = { class: "modal-actions" }, bp = /* @__PURE__ */ Z({
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
          onClick: n[3] || (n[3] = we(() => {
          }, ["stop"]))
        }, [
          e("div", pp, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", hp, [
            e("p", yp, [
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
            e("p", wp, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", kp, [
            f(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(te, {
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
}), _p = /* @__PURE__ */ ee(bp, [["__scopeId", "data-v-e9c5253e"]]), $p = { class: "progress-bar" }, Cp = /* @__PURE__ */ Z({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = P(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, g) => (o(), s("div", $p, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: He({ width: n.value })
      }, null, 6)
    ]));
  }
}), xp = /* @__PURE__ */ ee(Cp, [["__scopeId", "data-v-1beb0512"]]), Sp = {
  key: 0,
  class: "modal-overlay"
}, Ip = { class: "modal-content" }, Ep = { class: "modal-body" }, Mp = { class: "progress-info" }, zp = { class: "progress-percentage" }, Lp = { class: "progress-state" }, Tp = { class: "switch-steps" }, Np = { class: "step-icon" }, Rp = { class: "step-label" }, Dp = /* @__PURE__ */ Z({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = P(() => {
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
      return u.message || y[u.state] || u.state;
    }), r = P(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), g = P(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], p = y.findIndex((m) => m.state === u.state);
      return y.map((m, a) => {
        let v = "pending", b = "○";
        return a < p ? (v = "completed", b = "✓") : a === p && (v = "active", b = "⟳"), {
          ...m,
          status: v,
          icon: b
        };
      });
    });
    return (y, p) => (o(), S(Se, { to: "body" }, [
      t.show ? (o(), s("div", Sp, [
        e("div", Ip, [
          p[1] || (p[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Ep, [
            f(xp, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Mp, [
              e("div", zp, l(t.progress) + "%", 1),
              e("div", Lp, l(n.value), 1)
            ]),
            e("div", Tp, [
              (o(!0), s(W, null, se(g.value, (m) => (o(), s("div", {
                key: m.state,
                class: ne(["switch-step", m.status])
              }, [
                e("span", Np, l(m.icon), 1),
                e("span", Rp, l(m.label), 1)
              ], 2))), 128))
            ]),
            p[0] || (p[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Op = /* @__PURE__ */ ee(Dp, [["__scopeId", "data-v-768a5078"]]), Up = { class: "modal-header" }, Pp = { class: "modal-body" }, Bp = {
  key: 0,
  class: "node-section"
}, Fp = { class: "node-list" }, Vp = {
  key: 1,
  class: "node-section"
}, Ap = { class: "node-list" }, Wp = { class: "modal-actions" }, Gp = /* @__PURE__ */ Z({
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
          onClick: n[3] || (n[3] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Up, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Pp, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Bp, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Fp, [
                (o(!0), s(W, null, se(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Vp, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Ap, [
                (o(!0), s(W, null, se(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
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
          e("div", Wp, [
            f(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(te, {
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
}), jp = /* @__PURE__ */ ee(Gp, [["__scopeId", "data-v-7cad7518"]]);
async function yt(t, u = {}, n = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), n);
  try {
    const y = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : y;
  }
}
function Hp() {
  const t = _(null);
  async function u() {
    try {
      const p = await yt(
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
      const p = await yt(
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
      const p = await yt(
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
    if (!(await yt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await yt(
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
    kill: y
  };
}
const qp = { class: "comfygit-panel" }, Kp = { class: "panel-header" }, Jp = { class: "header-left" }, Qp = {
  key: 0,
  class: "header-info"
}, Xp = { class: "header-actions" }, Yp = { class: "env-switcher" }, Zp = {
  key: 0,
  class: "header-info"
}, eh = { class: "branch-name" }, th = { class: "panel-main" }, oh = { class: "sidebar" }, sh = { class: "sidebar-section" }, nh = { class: "sidebar-section" }, ah = { class: "sidebar-section" }, lh = { class: "content-area" }, ih = {
  key: 0,
  class: "error-message"
}, rh = {
  key: 1,
  class: "loading"
}, dh = { class: "dialog-content env-selector-dialog" }, ch = { class: "dialog-header" }, uh = { class: "dialog-body" }, mh = { class: "env-list" }, vh = { class: "env-info" }, fh = { class: "env-name-row" }, gh = { class: "env-indicator" }, ph = { class: "env-name" }, hh = {
  key: 0,
  class: "env-branch"
}, yh = {
  key: 1,
  class: "current-label"
}, wh = { class: "env-stats" }, kh = ["onClick"], bh = { class: "toast-container" }, _h = { class: "toast-icon" }, $h = { class: "toast-message" }, Ch = /* @__PURE__ */ Z({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: g,
      getBranches: y,
      checkout: p,
      createBranch: m,
      switchBranch: a,
      getEnvironments: v,
      switchEnvironment: b,
      getSwitchProgress: d,
      syncEnvironmentManually: I
    } = Ie(), k = Hp(), C = _(null), w = _([]), $ = _([]), R = _([]), V = P(() => R.value.find((j) => j.is_current)), T = _(!1), z = _(null), H = _(null), M = _(!1), N = _(null), O = _(!1), E = _(!1), x = _(""), A = _({ state: "idle", progress: 0, message: "" });
    let J = null, oe = null;
    const K = _("status"), F = _("this-env");
    function q(j, D) {
      K.value = j, F.value = D;
    }
    function B(j) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ce && q(ce.view, ce.section);
    }
    function L() {
      q("branches", "this-env");
    }
    function ae() {
      n("close"), setTimeout(() => {
        var D;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const ce of j)
          if (((D = ce.textContent) == null ? void 0 : D.trim()) === "Manager") {
            ce.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Q = _(null), _e = _(!1), pe = _(!1), Re = _([]);
    let mt = 0;
    function fe(j, D = "info", ce = 3e3) {
      const ye = ++mt;
      return Re.value.push({ id: ye, message: j, type: D }), ce > 0 && setTimeout(() => {
        Re.value = Re.value.filter((De) => De.id !== ye);
      }, ce), ye;
    }
    function Ne(j) {
      Re.value = Re.value.filter((D) => D.id !== j);
    }
    function vt(j) {
      switch (j) {
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
    const Qe = P(() => {
      if (!C.value) return "neutral";
      const j = C.value.workflows, D = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || C.value.has_changes;
      return C.value.comparison.is_synced ? D ? "warning" : "success" : "error";
    });
    P(() => C.value ? Qe.value === "success" ? "All synced" : Qe.value === "warning" ? "Uncommitted changes" : Qe.value === "error" ? "Not synced" : "" : "");
    async function ze() {
      T.value = !0, z.value = null;
      try {
        const [j, D, ce, ye] = await Promise.all([
          r(!0),
          g(),
          y(),
          v()
        ]);
        C.value = j, w.value = D.commits, $.value = ce.branches, R.value = ye, n("statusUpdate", j), N.value && await N.value.loadWorkflows(!0);
      } catch (j) {
        z.value = j instanceof Error ? j.message : "Failed to load status", C.value = null, w.value = [], $.value = [];
      } finally {
        T.value = !1;
      }
    }
    function ft(j) {
      H.value = j;
    }
    async function tt(j) {
      var ce;
      H.value = null;
      const D = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      Q.value = {
        title: D ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: D ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ce = j.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: D ? pt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: D ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: D,
        onConfirm: async () => {
          var Oe;
          Q.value = null, ge();
          const ye = fe(`Checking out ${j.short_hash || ((Oe = j.hash) == null ? void 0 : Oe.slice(0, 7))}...`, "info", 0), De = await p(j.hash, D);
          Ne(ye), De.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(De.message || "Checkout failed", "error");
        }
      };
    }
    async function gt(j) {
      const D = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      Q.value = {
        title: D ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: D ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: D ? pt() : void 0,
        warning: D ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: D ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Q.value = null, ge();
          const ce = fe(`Switching to ${j}...`, "info", 0), ye = await a(j, D);
          Ne(ce), ye.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function X(j) {
      const D = fe(`Creating branch ${j}...`, "info", 0), ce = await m(j);
      Ne(D), ce.status === "success" ? (fe(`Branch "${j}" created`, "success"), await ze()) : fe(ce.message || "Failed to create branch", "error");
    }
    async function ie(j) {
      H.value = null;
      const D = prompt("Enter branch name:");
      if (D) {
        const ce = fe(`Creating branch ${D}...`, "info", 0), ye = await m(D, j.hash);
        Ne(ce), ye.status === "success" ? (fe(`Branch "${D}" created from ${j.short_hash}`, "success"), await ze()) : fe(ye.message || "Failed to create branch", "error");
      }
    }
    function ge() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function $e(j) {
      M.value = !1, x.value = j, O.value = !0;
    }
    async function ot() {
      O.value = !1, E.value = !0, ge(), A.value = {
        progress: 10,
        state: st(10),
        message: nt(10)
      };
      try {
        await b(x.value), Mt(), G();
      } catch (j) {
        Ae(), E.value = !1, fe(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), A.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function st(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function nt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[st(j)] || "";
    }
    function Mt() {
      if (oe) return;
      let j = 10;
      const D = 60, ce = 5e3, ye = 100, De = (D - j) / (ce / ye);
      oe = window.setInterval(() => {
        if (j += De, j >= D && (j = D, Ae()), A.value.progress < D) {
          const Oe = Math.floor(j);
          A.value = {
            progress: Oe,
            state: st(Oe),
            message: nt(Oe)
          };
        }
      }, ye);
    }
    function Ae() {
      oe && (clearInterval(oe), oe = null);
    }
    function G() {
      J || (J = window.setInterval(async () => {
        try {
          let j = await k.getStatus();
          if ((!j || j.state === "idle") && (j = await d()), !j)
            return;
          const D = j.progress || 0;
          D >= 60 && Ae();
          const ce = Math.max(D, A.value.progress), ye = j.state && j.state !== "idle" && j.state !== "unknown", De = ye ? j.state : st(ce), Oe = ye && j.message || nt(ce);
          A.value = {
            state: De,
            progress: ce,
            message: Oe
          }, j.state === "complete" ? (Ae(), U(), E.value = !1, fe(`✓ Switched to ${x.value}`, "success"), await ze(), x.value = "") : j.state === "rolled_back" ? (Ae(), U(), E.value = !1, fe("Switch failed, restored previous environment", "warning"), x.value = "") : j.state === "critical_failure" && (Ae(), U(), E.value = !1, fe(`Critical error during switch: ${j.message}`, "error"), x.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function U() {
      Ae(), J && (clearInterval(J), J = null);
    }
    function Y() {
      O.value = !1, x.value = "";
    }
    async function ue() {
      _e.value = !1, await ze(), fe("✓ Changes committed", "success");
    }
    async function Ce() {
      pe.value = !1;
      const j = fe("Syncing environment...", "info", 0);
      try {
        const D = await I("skip", !0);
        if (Ne(j), D.status === "success") {
          const ce = [];
          D.nodes_installed.length && ce.push(`${D.nodes_installed.length} installed`), D.nodes_removed.length && ce.push(`${D.nodes_removed.length} removed`);
          const ye = ce.length ? `: ${ce.join(", ")}` : "";
          fe(`✓ Environment synced${ye}`, "success"), await ze();
        } else {
          const ce = D.errors.length ? D.errors.join("; ") : D.message;
          fe(`Sync failed: ${ce}`, "error");
        }
      } catch (D) {
        Ne(j), fe(`Sync error: ${D instanceof Error ? D.message : "Unknown error"}`, "error");
      }
    }
    async function Xe(j) {
      const D = fe(`Creating environment "${j}"...`, "info", 0);
      Ne(D), fe("Environment creation not yet implemented", "warning");
    }
    async function Ye(j) {
      const D = fe(`Deleting environment "${j}"...`, "info", 0);
      Ne(D), fe("Environment deletion not yet implemented", "warning");
    }
    function It(j) {
      fe(`Viewing details for "${j}"`, "info"), q("models-env", "this-env");
    }
    function pt() {
      if (!C.value) return [];
      const j = [], D = C.value.workflows;
      return D.new.length && j.push(`${D.new.length} new workflow(s)`), D.modified.length && j.push(`${D.modified.length} modified workflow(s)`), D.deleted.length && j.push(`${D.deleted.length} deleted workflow(s)`), j;
    }
    return be(ze), (j, D) => {
      var ce, ye, De, Oe;
      return o(), s("div", qp, [
        e("div", Kp, [
          e("div", Jp, [
            D[27] || (D[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            C.value ? (o(), s("div", Qp)) : c("", !0)
          ]),
          e("div", Xp, [
            e("button", {
              class: ne(["icon-btn", { spinning: T.value }]),
              onClick: ze,
              title: "Refresh"
            }, [...D[28] || (D[28] = [
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
              onClick: D[0] || (D[0] = (re) => n("close")),
              title: "Close"
            }, [...D[29] || (D[29] = [
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
        e("div", Yp, [
          D[31] || (D[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: D[1] || (D[1] = (re) => q("environments", "all-envs"))
          }, [
            C.value ? (o(), s("div", Zp, [
              e("span", null, l(((ce = V.value) == null ? void 0 : ce.name) || ((ye = C.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", eh, "(" + l(C.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            D[30] || (D[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", th, [
          e("div", oh, [
            e("div", sh, [
              D[32] || (D[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "status" && F.value === "this-env" }]),
                onClick: D[2] || (D[2] = (re) => q("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "workflows" }]),
                onClick: D[3] || (D[3] = (re) => q("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "models-env" }]),
                onClick: D[4] || (D[4] = (re) => q("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "branches" }]),
                onClick: D[5] || (D[5] = (re) => q("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "history" }]),
                onClick: D[6] || (D[6] = (re) => q("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "nodes" }]),
                onClick: D[7] || (D[7] = (re) => q("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "debug-env" }]),
                onClick: D[8] || (D[8] = (re) => q("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            D[35] || (D[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", nh, [
              D[33] || (D[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "environments" }]),
                onClick: D[9] || (D[9] = (re) => q("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "model-index" }]),
                onClick: D[10] || (D[10] = (re) => q("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "settings" }]),
                onClick: D[11] || (D[11] = (re) => q("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "debug-workspace" }]),
                onClick: D[12] || (D[12] = (re) => q("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            D[36] || (D[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ah, [
              D[34] || (D[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "export" }]),
                onClick: D[13] || (D[13] = (re) => q("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "import" }]),
                onClick: D[14] || (D[14] = (re) => q("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: K.value === "remotes" }]),
                onClick: D[15] || (D[15] = (re) => q("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", lh, [
            z.value ? (o(), s("div", ih, l(z.value), 1)) : !C.value && K.value === "status" ? (o(), s("div", rh, " Loading status... ")) : (o(), s(W, { key: 2 }, [
              K.value === "status" ? (o(), S(On, {
                key: 0,
                status: C.value,
                onSwitchBranch: L,
                onCommitChanges: D[16] || (D[16] = (re) => _e.value = !0),
                onSyncEnvironment: D[17] || (D[17] = (re) => pe.value = !0),
                onViewWorkflows: D[18] || (D[18] = (re) => q("workflows", "this-env")),
                onViewHistory: D[19] || (D[19] = (re) => q("history", "this-env")),
                onViewDebug: D[20] || (D[20] = (re) => q("debug-env", "this-env"))
              }, null, 8, ["status"])) : K.value === "workflows" ? (o(), S(Uc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: ze
              }, null, 512)) : K.value === "models-env" ? (o(), S(wu, {
                key: 2,
                onNavigate: B
              })) : K.value === "branches" ? (o(), S(Xn, {
                key: 3,
                branches: $.value,
                current: ((De = C.value) == null ? void 0 : De.branch) || null,
                onSwitch: gt,
                onCreate: X
              }, null, 8, ["branches", "current"])) : K.value === "history" ? (o(), S(ra, {
                key: 4,
                commits: w.value,
                onSelect: ft,
                onCheckout: tt
              }, null, 8, ["commits"])) : K.value === "nodes" ? (o(), S(im, {
                key: 5,
                onOpenNodeManager: ae
              })) : K.value === "debug-env" ? (o(), S(lv, { key: 6 })) : K.value === "environments" ? (o(), S(yv, {
                key: 7,
                onSwitch: $e,
                onCreate: Xe,
                onDelete: Ye,
                onViewDetails: It
              })) : K.value === "model-index" ? (o(), S(Bu, {
                key: 8,
                onRefresh: ze
              })) : K.value === "settings" ? (o(), S(ov, { key: 9 })) : K.value === "debug-workspace" ? (o(), S(nv, { key: 10 })) : K.value === "export" ? (o(), S(Ev, { key: 11 })) : K.value === "import" ? (o(), S(sg, { key: 12 })) : K.value === "remotes" ? (o(), S(Um, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        H.value ? (o(), S(bg, {
          key: 0,
          commit: H.value,
          onClose: D[21] || (D[21] = (re) => H.value = null),
          onCheckout: tt,
          onCreateBranch: ie
        }, null, 8, ["commit"])) : c("", !0),
        Q.value ? (o(), S(Sg, {
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
          onCancel: D[22] || (D[22] = (re) => Q.value = null),
          onSecondary: Q.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        f(_p, {
          show: O.value,
          "from-environment": ((Oe = V.value) == null ? void 0 : Oe.name) || "unknown",
          "to-environment": x.value,
          onConfirm: ot,
          onClose: Y
        }, null, 8, ["show", "from-environment", "to-environment"]),
        _e.value && C.value ? (o(), S(Zt, {
          key: 2,
          status: C.value,
          "as-modal": !0,
          onClose: D[23] || (D[23] = (re) => _e.value = !1),
          onCommitted: ue
        }, null, 8, ["status"])) : c("", !0),
        pe.value && C.value ? (o(), S(jp, {
          key: 3,
          show: pe.value,
          "mismatch-details": {
            missing_nodes: C.value.comparison.missing_nodes,
            extra_nodes: C.value.comparison.extra_nodes
          },
          onConfirm: Ce,
          onClose: D[24] || (D[24] = (re) => pe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        f(Op, {
          show: E.value,
          state: A.value.state,
          progress: A.value.progress,
          message: A.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        M.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: D[26] || (D[26] = we((re) => M.value = !1, ["self"]))
        }, [
          e("div", dh, [
            e("div", ch, [
              D[38] || (D[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: D[25] || (D[25] = (re) => M.value = !1)
              }, [...D[37] || (D[37] = [
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
            e("div", uh, [
              D[39] || (D[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", mh, [
                (o(!0), s(W, null, se(R.value, (re) => (o(), s("div", {
                  key: re.name,
                  class: ne(["env-item", { current: re.is_current }])
                }, [
                  e("div", vh, [
                    e("div", fh, [
                      e("span", gh, l(re.is_current ? "●" : "○"), 1),
                      e("span", ph, l(re.name), 1),
                      re.current_branch ? (o(), s("span", hh, "(" + l(re.current_branch) + ")", 1)) : c("", !0),
                      re.is_current ? (o(), s("span", yh, "CURRENT")) : c("", !0)
                    ]),
                    e("div", wh, l(re.workflow_count) + " workflows • " + l(re.node_count) + " nodes ", 1)
                  ]),
                  re.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (L1) => $e(re.name)
                  }, " SWITCH ", 8, kh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", bh, [
          f(uo, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(W, null, se(Re.value, (re) => (o(), s("div", {
                key: re.id,
                class: ne(["toast", re.type])
              }, [
                e("span", _h, l(vt(re.type)), 1),
                e("span", $h, l(re.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), xh = /* @__PURE__ */ ee(Ch, [["__scopeId", "data-v-99b7a544"]]), Sh = { class: "item-header" }, Ih = { class: "item-info" }, Eh = { class: "filename" }, Mh = { class: "metadata" }, zh = { class: "size" }, Lh = {
  key: 0,
  class: "type"
}, Th = { class: "item-actions" }, Nh = {
  key: 0,
  class: "progress-section"
}, Rh = { class: "progress-bar" }, Dh = { class: "progress-stats" }, Oh = { class: "downloaded" }, Uh = { class: "speed" }, Ph = {
  key: 0,
  class: "eta"
}, Bh = {
  key: 1,
  class: "status-msg paused"
}, Fh = {
  key: 2,
  class: "status-msg queued"
}, Vh = {
  key: 3,
  class: "status-msg completed"
}, Ah = {
  key: 4,
  class: "status-msg failed"
}, Wh = {
  key: 0,
  class: "retries"
}, Gh = /* @__PURE__ */ Z({
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
    function y(p) {
      if (p < 60) return `${Math.round(p)}s`;
      const m = Math.floor(p / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (p, m) => (o(), s("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Sh, [
        e("div", Ih, [
          e("div", Eh, l(t.item.filename), 1),
          e("div", Mh, [
            e("span", zh, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Lh, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Th, [
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
      t.item.status === "downloading" ? (o(), s("div", Nh, [
        e("div", Rh, [
          e("div", {
            class: "progress-fill",
            style: He({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Dh, [
          e("span", Oh, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", Uh, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Ph, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Bh, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Fh, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Vh, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Ah, [
        h(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Wh, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ ee(Gh, [["__scopeId", "data-v-2110df65"]]), jh = { class: "queue-title" }, Hh = { class: "count" }, qh = { class: "queue-actions" }, Kh = { class: "action-label" }, Jh = {
  key: 0,
  class: "overall-progress"
}, Qh = { class: "progress-bar" }, Xh = {
  key: 0,
  class: "current-mini"
}, Yh = { class: "filename" }, Zh = { class: "speed" }, e1 = {
  key: 1,
  class: "queue-content"
}, t1 = {
  key: 0,
  class: "section"
}, o1 = {
  key: 1,
  class: "section"
}, s1 = { class: "section-header" }, n1 = { class: "section-label paused" }, a1 = { class: "items-list" }, l1 = {
  key: 2,
  class: "section"
}, i1 = { class: "section-header" }, r1 = { class: "section-label" }, d1 = { class: "items-list" }, c1 = {
  key: 3,
  class: "section"
}, u1 = { class: "section-header" }, m1 = { class: "section-label" }, v1 = { class: "items-list" }, f1 = {
  key: 4,
  class: "section"
}, g1 = { class: "section-header" }, p1 = { class: "section-label failed" }, h1 = { class: "items-list" }, y1 = /* @__PURE__ */ Z({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: g,
      failedItems: y,
      pausedItems: p,
      hasItems: m,
      activeCount: a,
      cancelDownload: v,
      retryDownload: b,
      resumeDownload: d,
      resumeAllPaused: I,
      removeItem: k,
      clearCompleted: C
    } = St(), w = _(!1);
    let $ = null;
    Ot(
      () => ({
        active: a.value,
        failed: y.value.length,
        paused: p.value.length,
        completed: g.value.length
      }),
      (z, H) => {
        $ && (clearTimeout($), $ = null);
        const M = z.active === 0 && z.failed === 0 && z.paused === 0 && z.completed > 0, N = H && (H.active > 0 || H.paused > 0);
        M && N && ($ = setTimeout(() => {
          C(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const R = P(() => {
      var M;
      if (u.items.length === 0) return 0;
      const z = g.value.length, H = ((M = n.value) == null ? void 0 : M.progress) || 0;
      return Math.round((z + H / 100) / u.items.length * 100);
    });
    function V(z) {
      v(z);
    }
    function T(z) {
      return z === 0 ? "" : `${(z / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (z, H) => (o(), S(Se, { to: "body" }, [
      me(m) ? (o(), s("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !w.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (M) => w.value = !w.value)
        }, [
          e("div", jh, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Hh, "(" + l(me(a)) + "/" + l(me(u).items.length) + ")", 1)
          ]),
          e("div", qh, [
            e("span", Kh, l(w.value ? "minimize" : "expand"), 1)
          ])
        ]),
        w.value ? (o(), s("div", e1, [
          me(n) ? (o(), s("div", t1, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(wt, {
              item: me(n),
              onCancel: H[1] || (H[1] = (M) => V(me(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          me(p).length > 0 ? (o(), s("div", o1, [
            e("div", s1, [
              e("span", n1, "Paused (" + l(me(p).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...M) => me(I) && me(I)(...M))
              }, "Resume All")
            ]),
            e("div", a1, [
              (o(!0), s(W, null, se(me(p), (M) => (o(), S(wt, {
                key: M.id,
                item: M,
                onResume: (N) => me(d)(M.id),
                onRemove: (N) => me(k)(M.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(r).length > 0 ? (o(), s("div", l1, [
            e("div", i1, [
              e("span", r1, "Queued (" + l(me(r).length) + ")", 1)
            ]),
            e("div", d1, [
              (o(!0), s(W, null, se(me(r), (M) => (o(), S(wt, {
                key: M.id,
                item: M,
                onCancel: (N) => V(M.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          me(g).length > 0 ? (o(), s("div", c1, [
            e("div", u1, [
              e("span", m1, "Completed (" + l(me(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...M) => me(C) && me(C)(...M))
              }, "Clear")
            ]),
            e("div", v1, [
              (o(!0), s(W, null, se(me(g).slice(0, 3), (M) => (o(), S(wt, {
                key: M.id,
                item: M,
                onRemove: (N) => me(k)(M.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(y).length > 0 ? (o(), s("div", f1, [
            e("div", g1, [
              e("span", p1, "Failed (" + l(me(y).length) + ")", 1)
            ]),
            e("div", h1, [
              (o(!0), s(W, null, se(me(y), (M) => (o(), S(wt, {
                key: M.id,
                item: M,
                onRetry: (N) => me(b)(M.id),
                onRemove: (N) => me(k)(M.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", Jh, [
          e("div", Qh, [
            e("div", {
              class: "progress-fill",
              style: He({ width: `${R.value}%` })
            }, null, 4)
          ]),
          me(n) ? (o(), s("div", Xh, [
            e("span", Yh, l(me(n).filename), 1),
            e("span", Zh, l(T(me(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), w1 = /* @__PURE__ */ ee(y1, [["__scopeId", "data-v-60751cfa"]]), k1 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', b1 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', _1 = {
  comfy: k1,
  phosphor: b1
}, Vt = "comfy", eo = "comfygit-theme";
let Ze = null, to = Vt;
function $1() {
  try {
    const t = localStorage.getItem(eo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Vt;
}
function oo(t = Vt) {
  Ze && Ze.remove(), Ze = document.createElement("style"), Ze.id = "comfygit-theme-styles", Ze.setAttribute("data-theme", t), Ze.textContent = _1[t], document.head.appendChild(Ze), document.body.setAttribute("data-comfygit-theme", t), to = t;
  try {
    localStorage.setItem(eo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function C1() {
  return to;
}
function x1(t) {
  oo(t);
}
const At = document.createElement("link");
At.rel = "stylesheet";
At.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(At);
const S1 = $1();
oo(S1);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), x1(t);
  },
  getTheme: () => {
    const t = C1();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ue = null, Le = null, $t = null, kt = null, Ht = null;
const rt = _(null);
async function Et() {
  var t;
  if (!((t = it) != null && t.api)) return null;
  try {
    const u = await it.api.fetchApi("/v2/comfygit/status");
    u.ok && (rt.value = await u.json());
  } catch {
  }
}
function I1() {
  if (!rt.value) return !1;
  const t = rt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || rt.value.has_changes;
}
function E1() {
  Ue && Ue.remove(), Ue = document.createElement("div"), Ue.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ue.appendChild(t), Ue.addEventListener("click", (r) => {
    r.target === Ue && Tt();
  });
  const u = (r) => {
    r.key === "Escape" && (Tt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), Pt({
    render: () => Bt(xh, {
      onClose: Tt,
      onStatusUpdate: (r) => {
        rt.value = r, Ct();
      }
    })
  }).mount(t), document.body.appendChild(Ue);
}
function Tt() {
  Ue && (Ue.remove(), Ue = null);
}
function M1(t) {
  bt(), Le = document.createElement("div"), Le.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Le.style.position = "fixed", Le.style.top = `${u.bottom + 8}px`, Le.style.right = `${window.innerWidth - u.right}px`, Le.style.zIndex = "10001";
  const n = (g) => {
    Le && !Le.contains(g.target) && g.target !== t && (bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (g) => {
    g.key === "Escape" && (bt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), $t = Pt({
    render: () => Bt(Zt, {
      status: rt.value,
      onClose: bt,
      onCommitted: () => {
        bt(), Et().then(Ct);
      }
    })
  }), $t.mount(Le), document.body.appendChild(Le);
}
function bt() {
  $t && ($t.unmount(), $t = null), Le && (Le.remove(), Le = null);
}
function z1() {
  kt || (kt = document.createElement("div"), kt.className = "comfygit-download-queue-root", Ht = Pt({
    render: () => Bt(w1)
  }), Ht.mount(kt), document.body.appendChild(kt), console.log("[ComfyGit] Model download queue mounted"));
}
let We = null;
function Ct() {
  if (!We) return;
  const t = We.querySelector(".commit-indicator");
  t && (t.style.display = I1() ? "block" : "none");
}
const so = document.createElement("style");
so.textContent = `
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
document.head.appendChild(so);
it.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = E1, We = document.createElement("button"), We.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", We.innerHTML = 'Commit <span class="commit-indicator"></span>', We.title = "Quick Commit", We.onclick = () => M1(We), t.appendChild(u), t.appendChild(We), (y = (g = it.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (it.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), z1();
    const { loadPendingDownloads: n } = St();
    n(), await Et(), Ct(), setInterval(async () => {
      await Et(), Ct();
    }, 3e4);
    const r = it.api;
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
        const b = document.createElement("span");
        b.textContent = "Workflows updated - refresh required", v.appendChild(b);
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
        const { change_type: b, workflow_name: d } = v.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${d}`), await Et(), Ct();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let a = !1;
      r.addEventListener("status", async (v) => {
        const b = v.detail != null;
        b && !a && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), p()) : m()), a = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
