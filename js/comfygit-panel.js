import { app as wt } from "../../scripts/app.js";
import { defineComponent as K, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as fe, createBlock as S, resolveDynamicComponent as Yt, normalizeClass as te, withCtx as i, toDisplayString as a, createVNode as p, createTextVNode as w, computed as T, Fragment as V, renderList as J, normalizeStyle as Xe, ref as C, onMounted as Ie, watch as bt, Teleport as Me, withModifiers as xe, Transition as Ts, createSlots as Bt, withKeys as rt, onUnmounted as Ns, reactive as ds, readonly as Ds, unref as he, withDirectives as Qe, vModelText as cs, vModelRadio as At, vModelCheckbox as us, nextTick as Ps, vModelSelect as Vt, TransitionGroup as Us, createApp as Qt, h as Xt } from "vue";
const Bs = { class: "panel-layout" }, Os = {
  key: 0,
  class: "panel-layout-header"
}, Fs = {
  key: 1,
  class: "panel-layout-search"
}, As = { class: "panel-layout-content" }, Vs = {
  key: 2,
  class: "panel-layout-footer"
}, Ws = /* @__PURE__ */ K({
  __name: "PanelLayout",
  setup(t) {
    return (r, n) => (s(), o("div", Bs, [
      r.$slots.header ? (s(), o("div", Os, [
        fe(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (s(), o("div", Fs, [
        fe(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", As, [
        fe(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", Vs, [
        fe(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), q = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [d, h] of r)
    n[d] = h;
  return n;
}, Pe = /* @__PURE__ */ q(Ws, [["__scopeId", "data-v-21565df9"]]), Gs = {
  key: 0,
  class: "panel-title-prefix"
}, js = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Hs = /* @__PURE__ */ K({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, n) => (s(), S(Yt(`h${t.level}`), {
      class: te(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", Gs, a(t.prefix), 1)) : (s(), o("span", js)),
        fe(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ks = /* @__PURE__ */ q(Hs, [["__scopeId", "data-v-c3875efc"]]), qs = ["title"], Ys = ["width", "height"], Qs = /* @__PURE__ */ K({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (d) => r.$emit("click"))
    }, [
      (s(), o("svg", {
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
      ])], 8, Ys))
    ], 8, qs));
  }
}), ms = /* @__PURE__ */ q(Qs, [["__scopeId", "data-v-6fc7f16d"]]), Xs = { class: "header-left" }, Zs = {
  key: 0,
  class: "header-actions"
}, Js = /* @__PURE__ */ K({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: te(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Xs, [
        p(Ks, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), S(ms, {
          key: 0,
          onClick: n[0] || (n[0] = (d) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (s(), o("div", Zs, [
        fe(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ q(Js, [["__scopeId", "data-v-55a62cd6"]]), eo = {
  key: 0,
  class: "section-title-count"
}, to = {
  key: 1,
  class: "section-title-icon"
}, so = /* @__PURE__ */ K({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, n) => (s(), S(Yt(`h${t.level}`), {
      class: te(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (d) => t.clickable && r.$emit("click"))
    }, {
      default: i(() => [
        fe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", eo, "(" + a(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", to, a(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ae = /* @__PURE__ */ q(so, [["__scopeId", "data-v-559361eb"]]), oo = { class: "status-grid" }, no = { class: "status-grid__columns" }, ao = { class: "status-grid__column" }, lo = { class: "status-grid__title" }, io = { class: "status-grid__column status-grid__column--right" }, ro = { class: "status-grid__title" }, co = {
  key: 0,
  class: "status-grid__footer"
}, uo = /* @__PURE__ */ K({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, n) => (s(), o("div", oo, [
      e("div", no, [
        e("div", ao, [
          e("h4", lo, a(t.leftTitle), 1),
          fe(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", io, [
          e("h4", ro, a(t.rightTitle), 1),
          fe(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", co, [
        fe(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), mo = /* @__PURE__ */ q(uo, [["__scopeId", "data-v-73b7ba3f"]]), vo = {
  key: 0,
  class: "status-item__icon"
}, fo = {
  key: 1,
  class: "status-item__count"
}, go = { class: "status-item__label" }, ho = /* @__PURE__ */ K({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, n = T(() => `status-item--${r.variant}`);
    return (d, h) => (s(), o("div", {
      class: te(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", vo, a(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", fo, a(t.count), 1)) : c("", !0),
      e("span", go, a(t.label), 1)
    ], 2));
  }
}), qe = /* @__PURE__ */ q(ho, [["__scopeId", "data-v-6f929183"]]), po = { class: "issue-card__header" }, yo = { class: "issue-card__icon" }, wo = { class: "issue-card__title" }, ko = {
  key: 0,
  class: "issue-card__content"
}, bo = {
  key: 0,
  class: "issue-card__description"
}, _o = {
  key: 1,
  class: "issue-card__items"
}, $o = {
  key: 2,
  class: "issue-card__actions"
}, Co = /* @__PURE__ */ K({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, n = T(() => `issue-card--${r.severity}`);
    return (d, h) => (s(), o("div", {
      class: te(["issue-card", n.value])
    }, [
      e("div", po, [
        e("span", yo, a(t.icon), 1),
        e("h4", wo, a(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", ko, [
        t.description ? (s(), o("p", bo, a(t.description), 1)) : c("", !0),
        fe(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", _o, [
        (s(!0), o(V, null, J(t.items, (f, g) => (s(), o("div", {
          key: g,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(f), 1)
        ]))), 128))
      ])) : c("", !0),
      d.$slots.actions ? (s(), o("div", $o, [
        fe(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ q(Co, [["__scopeId", "data-v-df6aa348"]]), xo = ["type", "disabled"], So = {
  key: 0,
  class: "spinner"
}, Io = /* @__PURE__ */ K({
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
    return (r, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: te(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", So)) : c("", !0),
      t.loading ? c("", !0) : fe(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, xo));
  }
}), Q = /* @__PURE__ */ q(Io, [["__scopeId", "data-v-772abe47"]]), Eo = { class: "empty-state" }, Mo = {
  key: 0,
  class: "empty-icon"
}, Ro = { class: "empty-message" }, zo = /* @__PURE__ */ K({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, n) => (s(), o("div", Eo, [
      t.icon ? (s(), o("div", Mo, a(t.icon), 1)) : c("", !0),
      e("p", Ro, a(t.message), 1),
      t.actionLabel ? (s(), S(Q, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (d) => r.$emit("action"))
      }, {
        default: i(() => [
          w(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ q(zo, [["__scopeId", "data-v-4466284f"]]), Lo = /* @__PURE__ */ K({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, n) => (s(), o("span", {
      class: te(["detail-label"]),
      style: Xe({ minWidth: t.minWidth })
    }, [
      fe(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Kt = /* @__PURE__ */ q(Lo, [["__scopeId", "data-v-75e9eeb8"]]), To = /* @__PURE__ */ K({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, n) => (s(), o("span", {
      class: te(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      fe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ q(To, [["__scopeId", "data-v-2f186e4c"]]), No = { class: "detail-row" }, Do = /* @__PURE__ */ K({
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
    return (r, n) => (s(), o("div", No, [
      p(Kt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), S(qt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : fe(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), _e = /* @__PURE__ */ q(Do, [["__scopeId", "data-v-ef15664a"]]), Po = { class: "modal-header" }, Uo = { class: "modal-body" }, Bo = { class: "status-section" }, Oo = {
  key: 0,
  class: "status-section"
}, Fo = { class: "section-header-row" }, Ao = {
  key: 0,
  class: "workflow-group"
}, Vo = { class: "workflow-group-header" }, Wo = { class: "workflow-group-title" }, Go = { class: "workflow-list" }, jo = { class: "workflow-name" }, Ho = { class: "workflow-issue" }, Ko = {
  key: 1,
  class: "workflow-group"
}, qo = { class: "workflow-group-header" }, Yo = { class: "workflow-group-title" }, Qo = { class: "workflow-list" }, Xo = { class: "workflow-name" }, Zo = { class: "workflow-issue" }, Jo = {
  key: 2,
  class: "workflow-group"
}, en = { class: "workflow-group-header" }, tn = { class: "workflow-group-title" }, sn = { class: "workflow-list" }, on = { class: "workflow-name" }, nn = {
  key: 3,
  class: "workflow-group"
}, an = { class: "workflow-group-header" }, ln = { class: "workflow-group-title" }, rn = { class: "workflow-list" }, dn = { class: "workflow-name" }, cn = {
  key: 4,
  class: "workflow-group"
}, un = { class: "workflow-group-header" }, mn = { class: "workflow-group-title" }, vn = { class: "workflow-list" }, fn = { class: "workflow-name" }, gn = {
  key: 5,
  class: "workflow-group"
}, hn = { class: "workflow-group-title" }, pn = { class: "expand-icon" }, yn = {
  key: 0,
  class: "workflow-list"
}, wn = { class: "workflow-name" }, kn = {
  key: 1,
  class: "status-section"
}, bn = {
  key: 0,
  class: "change-group"
}, _n = { class: "change-group-header" }, $n = { class: "change-group-title" }, Cn = { class: "change-list" }, xn = { class: "node-name" }, Sn = {
  key: 0,
  class: "dev-badge"
}, In = {
  key: 1,
  class: "change-group"
}, En = { class: "change-group-header" }, Mn = { class: "change-group-title" }, Rn = { class: "change-list" }, zn = { class: "node-name" }, Ln = {
  key: 0,
  class: "dev-badge"
}, Tn = {
  key: 2,
  class: "change-group"
}, Nn = { class: "change-list" }, Dn = { class: "change-item" }, Pn = { class: "node-name" }, Un = {
  key: 3,
  class: "change-group"
}, Bn = {
  key: 2,
  class: "status-section"
}, On = { class: "section-header-row" }, Fn = {
  key: 0,
  class: "drift-item"
}, An = { class: "drift-list" }, Vn = {
  key: 0,
  class: "drift-list-more"
}, Wn = {
  key: 1,
  class: "drift-item"
}, Gn = { class: "drift-list" }, jn = {
  key: 0,
  class: "drift-list-more"
}, Hn = {
  key: 2,
  class: "drift-item"
}, Kn = {
  key: 3,
  class: "drift-item"
}, qn = {
  key: 3,
  class: "status-section"
}, Yn = { class: "info-box" }, Qn = { class: "drift-list" }, Xn = {
  key: 0,
  class: "drift-list-more"
}, Zn = {
  key: 4,
  class: "status-section"
}, Jn = { class: "warning-box" }, ea = {
  key: 5,
  class: "empty-state-inline"
}, ta = { class: "modal-actions" }, sa = /* @__PURE__ */ K({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const r = t, n = C(!1);
    Ie(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), bt(() => r.show, (I, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", I);
    }, { immediate: !0 });
    const d = T(() => {
      var I, $, R;
      return ((R = ($ = (I = r.status) == null ? void 0 : I.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), h = T(() => {
      var I, $, R;
      return ((R = ($ = (I = r.status) == null ? void 0 : I.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), f = T(() => {
      var I, $, R;
      return ((R = ($ = (I = r.status) == null ? void 0 : I.workflows) == null ? void 0 : $.synced) == null ? void 0 : R.filter((b) => {
        var k, z, D;
        const y = (D = (z = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : z.analyzed) == null ? void 0 : D.find((N) => N.name === b);
        return !y || y.status !== "broken";
      })) || [];
    }), g = T(() => {
      var I, $, R, b, y;
      return (I = r.status) != null && I.workflows ? ((($ = r.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((R = r.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((b = r.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((y = r.status.workflows.synced) == null ? void 0 : y.length) ?? 0) > 0 : !1;
    }), v = T(() => {
      var $, R, b;
      const I = ($ = r.status) == null ? void 0 : $.git_changes;
      return I ? (((R = I.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((b = I.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), l = T(() => {
      var I, $, R, b, y, k;
      return !g.value && !v.value && (($ = (I = r.status) == null ? void 0 : I.comparison) == null ? void 0 : $.is_synced) && (((R = r.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((k = (y = (b = r.status) == null ? void 0 : b.comparison) == null ? void 0 : y.disabled_nodes) == null ? void 0 : k.length) ?? 0) === 0;
    }), m = T(() => {
      var $, R;
      const I = (R = ($ = r.status) == null ? void 0 : $.git_changes) == null ? void 0 : R.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function _(I) {
      return typeof I == "string" ? I : I.name;
    }
    function u(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, $) => {
      var R, b, y, k, z, D, N, G, A, F, O, L, M, H, oe, be, re, X, Z, U, x, se;
      return s(), S(Me, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (ee) => I.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = xe(() => {
            }, ["stop"]))
          }, [
            e("div", Po, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (ee) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", Uo, [
              e("div", Bo, [
                p(Ae, { level: "4" }, {
                  default: i(() => [...$[8] || ($[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                p(_e, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              g.value ? (s(), o("div", Oo, [
                e("div", Fo, [
                  p(Ae, { level: "4" }, {
                    default: i(() => [...$[9] || ($[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (ee) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                d.value.length ? (s(), o("div", Ao, [
                  e("div", Vo, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Wo, "BROKEN (COMMITTED) (" + a(d.value.length) + ")", 1)
                  ]),
                  e("div", Go, [
                    (s(!0), o(V, null, J(d.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", jo, a(ee.name), 1),
                      e("span", Ho, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                h.value.length ? (s(), o("div", Ko, [
                  e("div", qo, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Yo, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", Qo, [
                    (s(!0), o(V, null, J(h.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Xo, a(ee.name), 1),
                      e("span", Zo, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (b = (R = t.status.workflows) == null ? void 0 : R.new) != null && b.length ? (s(), o("div", Jo, [
                  e("div", en, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", tn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", sn, [
                    (s(!0), o(V, null, J(t.status.workflows.new, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", on, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (k = (y = t.status.workflows) == null ? void 0 : y.modified) != null && k.length ? (s(), o("div", nn, [
                  e("div", an, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", ln, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", rn, [
                    (s(!0), o(V, null, J(t.status.workflows.modified, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", dn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = (z = t.status.workflows) == null ? void 0 : z.deleted) != null && D.length ? (s(), o("div", cn, [
                  e("div", un, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", mn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", vn, [
                    (s(!0), o(V, null, J(t.status.workflows.deleted, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", fn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (s(), o("div", gn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (ee) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", hn, "SYNCED (" + a(f.value.length) + ")", 1),
                    e("span", pn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", yn, [
                    (s(!0), o(V, null, J(f.value, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", wn, a(ee), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              v.value ? (s(), o("div", kn, [
                p(Ae, { level: "4" }, {
                  default: i(() => [...$[16] || ($[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (G = (N = t.status.git_changes) == null ? void 0 : N.nodes_added) != null && G.length ? (s(), o("div", bn, [
                  e("div", _n, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", $n, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Cn, [
                    (s(!0), o(V, null, J(t.status.git_changes.nodes_added, (ee) => (s(), o("div", {
                      key: _(ee),
                      class: "change-item"
                    }, [
                      e("span", xn, a(_(ee)), 1),
                      u(ee) ? (s(), o("span", Sn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (F = (A = t.status.git_changes) == null ? void 0 : A.nodes_removed) != null && F.length ? (s(), o("div", In, [
                  e("div", En, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Mn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Rn, [
                    (s(!0), o(V, null, J(t.status.git_changes.nodes_removed, (ee) => (s(), o("div", {
                      key: _(ee),
                      class: "change-item"
                    }, [
                      e("span", zn, a(_(ee)), 1),
                      u(ee) ? (s(), o("span", Ln, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (O = t.status.git_changes) != null && O.workflow_changes ? (s(), o("div", Tn, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Nn, [
                    e("div", Dn, [
                      e("span", Pn, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (L = t.status.git_changes) != null && L.has_other_changes ? (s(), o("div", Un, [...$[20] || ($[20] = [
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
              (M = t.status.comparison) != null && M.is_synced ? c("", !0) : (s(), o("div", Bn, [
                e("div", On, [
                  p(Ae, { level: "4" }, {
                    default: i(() => [...$[21] || ($[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (ee) => I.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (oe = (H = t.status.comparison) == null ? void 0 : H.missing_nodes) != null && oe.length ? (s(), o("div", Fn, [
                  p(_e, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", An, [
                    (s(!0), o(V, null, J(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Vn, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (re = (be = t.status.comparison) == null ? void 0 : be.extra_nodes) != null && re.length ? (s(), o("div", Wn, [
                  p(_e, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Gn, [
                    (s(!0), o(V, null, J(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", jn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Z = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && Z.length ? (s(), o("div", Hn, [
                  p(_e, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (U = t.status.comparison) != null && U.packages_in_sync ? c("", !0) : (s(), o("div", Kn, [
                  p(_e, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (se = (x = t.status.comparison) == null ? void 0 : x.disabled_nodes) != null && se.length ? (s(), o("div", qn, [
                p(Ae, { level: "4" }, {
                  default: i(() => [...$[23] || ($[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Yn, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Qn, [
                  (s(!0), o(V, null, J(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (s(), o("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Xn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Zn, [
                p(Ae, { level: "4" }, {
                  default: i(() => [...$[25] || ($[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Jn, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", ea, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", ta, [
              p(Q, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (ee) => I.$emit("close"))
              }, {
                default: i(() => [...$[29] || ($[29] = [
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
}), oa = /* @__PURE__ */ q(sa, [["__scopeId", "data-v-c67eed17"]]), na = { class: "health-section-header" }, aa = { class: "suggestions-content" }, la = { class: "suggestions-text" }, ia = { style: { "margin-top": "var(--cg-space-3)" } }, ra = {
  key: 1,
  class: "no-issues-text"
}, da = /* @__PURE__ */ K({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: r }) {
    const n = t, d = C(!1), h = C(!1);
    function f() {
      d.value = !0;
    }
    function g() {
      d.value = !1, l("view-workflows");
    }
    function v() {
      d.value = !1, l("view-nodes");
    }
    const l = r, m = T(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), _ = T(() => n.status.has_changes), u = T(() => {
      const A = n.status.git_changes;
      return A.nodes_added.length > 0 || A.nodes_removed.length > 0 || A.workflow_changes;
    }), I = T(() => n.status.has_changes || m.value), $ = T(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), R = T(() => n.status.git_changes.has_other_changes), b = T(() => {
      var A;
      return ((A = n.status.workflows.analyzed) == null ? void 0 : A.filter((F) => F.status === "broken")) || [];
    }), y = T(() => {
      var A;
      return ((A = n.status.workflows.analyzed) == null ? void 0 : A.filter(
        (F) => F.has_path_sync_issues && !F.has_issues
      )) || [];
    }), k = T(() => b.value.length > 0), z = T(() => k.value || y.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), D = T(() => {
      const A = [];
      return n.status.workflows.new.length > 0 && A.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && A.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && A.push(`${n.status.workflows.deleted.length} deleted`), A.length > 0 ? `${A.join(", ")} workflow${A.length === 1 && !A[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), N = T(() => {
      var O, L;
      const A = [], F = n.status.comparison;
      return (O = F.missing_nodes) != null && O.length && A.push(`${F.missing_nodes.length} missing node${F.missing_nodes.length === 1 ? "" : "s"}`), (L = F.extra_nodes) != null && L.length && A.push(`${F.extra_nodes.length} untracked node${F.extra_nodes.length === 1 ? "" : "s"}`), A.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${A.join(" and ")}.`;
    }), G = T(() => {
      var O, L;
      const A = [], F = n.status.comparison;
      return (O = F.extra_nodes) != null && O.length && (F.extra_nodes.slice(0, 3).forEach((M) => {
        A.push(`Untracked: ${M}`);
      }), F.extra_nodes.length > 3 && A.push(`...and ${F.extra_nodes.length - 3} more untracked`)), (L = F.missing_nodes) != null && L.length && (F.missing_nodes.slice(0, 3).forEach((M) => {
        A.push(`Missing: ${M}`);
      }), F.missing_nodes.length > 3 && A.push(`...and ${F.missing_nodes.length - 3} more missing`)), A;
    });
    return (A, F) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: F[1] || (F[1] = (O) => h.value = !0),
            onMouseleave: F[2] || (F[2] = (O) => h.value = !1)
          }, [
            e("div", na, [
              p(Ae, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...F[9] || (F[9] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              p(Ts, { name: "fade" }, {
                default: i(() => [
                  h.value ? (s(), S(Q, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: i(() => [...F[10] || (F[10] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            p(mo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Bt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), S(qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), S(qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), S(qe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                p(qe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), S(qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), S(qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), S(qe, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                R.value ? (s(), S(qe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                _.value && !u.value && !R.value ? (s(), S(qe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                _.value ? c("", !0) : (s(), S(qe, {
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
                  F[12] || (F[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", aa, [
                    e("span", la, a(D.value), 1),
                    p(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: F[0] || (F[0] = (O) => A.$emit("commit-changes"))
                    }, {
                      default: i(() => [...F[11] || (F[11] = [
                        w(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), S(pt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              p(Q, {
                variant: "primary",
                size: "sm",
                onClick: F[3] || (F[3] = (O) => A.$emit("create-branch"))
              }, {
                default: i(() => [...F[13] || (F[13] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", ia, [
            p(Ae, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...F[14] || (F[14] = [
                w(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            z.value ? (s(), o(V, { key: 0 }, [
              b.value.length > 0 ? (s(), S(pt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${b.value.length} workflow${b.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: b.value.map((O) => `${O.name} — ${O.issue_summary}`)
              }, {
                actions: i(() => [
                  p(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[4] || (F[4] = (O) => A.$emit("view-workflows"))
                  }, {
                    default: i(() => [...F[15] || (F[15] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              y.value.length > 0 ? (s(), S(pt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${y.value.length} workflow${y.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: y.value.map((O) => `${O.name} — ${O.models_needing_path_sync_count} model path${O.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  p(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[5] || (F[5] = (O) => A.$emit("view-workflows"))
                  }, {
                    default: i(() => [...F[16] || (F[16] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              t.status.missing_models_count > 0 && !k.value ? (s(), S(pt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index."
              }, {
                actions: i(() => [
                  p(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[6] || (F[6] = (O) => A.$emit("view-workflows"))
                  }, {
                    default: i(() => [...F[17] || (F[17] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : c("", !0),
              t.status.comparison.is_synced ? c("", !0) : (s(), S(pt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: N.value,
                items: G.value
              }, {
                actions: i(() => [
                  p(Q, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: i(() => [...F[18] || (F[18] = [
                      w(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  p(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[7] || (F[7] = (O) => A.$emit("view-nodes"))
                  }, {
                    default: i(() => [...F[19] || (F[19] = [
                      w(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : I.value ? (s(), o("span", ra, "No issues")) : (s(), S(Ke, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      p(oa, {
        show: d.value,
        status: t.status,
        onClose: F[8] || (F[8] = (O) => d.value = !1),
        onNavigateWorkflows: g,
        onNavigateNodes: v
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ca = /* @__PURE__ */ q(da, [["__scopeId", "data-v-bd67edd1"]]), ua = ["type", "value", "placeholder", "disabled"], ma = /* @__PURE__ */ K({
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
  setup(t, { expose: r, emit: n }) {
    const d = t, h = n, f = C(null);
    function g(v) {
      const l = v.target.value;
      h("update:modelValue", l);
    }
    return Ie(() => {
      d.autoFocus && f.value && f.value.focus();
    }), r({
      focus: () => {
        var v;
        return (v = f.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = f.value) == null ? void 0 : v.blur();
      }
    }), (v, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: f,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: te(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: g,
      onKeyup: [
        l[0] || (l[0] = rt((m) => v.$emit("enter"), ["enter"])),
        l[1] || (l[1] = rt((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (m) => v.$emit("focus")),
      onBlur: l[3] || (l[3] = (m) => v.$emit("blur"))
    }, null, 42, ua));
  }
}), Ut = /* @__PURE__ */ q(ma, [["__scopeId", "data-v-0380d08f"]]), va = { class: "branch-create-form" }, fa = { class: "form-actions" }, ga = /* @__PURE__ */ K({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const n = r, d = C(""), h = T(() => {
      const v = d.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function f() {
      h.value && (n("create", d.value.trim()), d.value = "");
    }
    function g() {
      d.value = "", n("cancel");
    }
    return (v, l) => (s(), o("div", va, [
      p(Ut, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (m) => d.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: f,
        onEscape: g
      }, null, 8, ["modelValue"]),
      e("div", fa, [
        p(Q, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: f
        }, {
          default: i(() => [...l[1] || (l[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(Q, {
          variant: "secondary",
          size: "sm",
          onClick: g
        }, {
          default: i(() => [...l[2] || (l[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ha = /* @__PURE__ */ q(ga, [["__scopeId", "data-v-7c500394"]]), pa = { class: "branch-list-item__indicator" }, ya = { class: "branch-list-item__name" }, wa = {
  key: 0,
  class: "branch-list-item__actions"
}, ka = {
  key: 0,
  class: "branch-list-item__current-label"
}, ba = /* @__PURE__ */ K({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: te(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (d) => t.clickable && r.$emit("click"))
    }, [
      e("span", pa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ya, a(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", wa, [
        fe(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", ka, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), _a = /* @__PURE__ */ q(ba, [["__scopeId", "data-v-c6581a24"]]), $a = {
  key: 2,
  class: "branch-list"
}, Ca = /* @__PURE__ */ K({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: r }) {
    const n = r, d = C(!1);
    function h(g) {
      n("create", g), f();
    }
    function f() {
      d.value = !1;
    }
    return (g, v) => (s(), S(Pe, null, {
      header: i(() => [
        p(Ue, { title: "BRANCHES" }, {
          actions: i(() => [
            d.value ? c("", !0) : (s(), S(Q, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (l) => d.value = !0)
            }, {
              default: i(() => [...v[1] || (v[1] = [
                w(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), S(ha, {
          key: 0,
          onCreate: h,
          onCancel: f
        })) : c("", !0),
        t.branches.length === 0 ? (s(), S(Ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", $a, [
          (s(!0), o(V, null, J(t.branches, (l) => (s(), S(_a, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), S(Q, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => g.$emit("delete", l.name)
              }, {
                default: i(() => [...v[2] || (v[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), S(Q, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => g.$emit("switch", l.name)
              }, {
                default: i(() => [...v[3] || (v[3] = [
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
}), xa = /* @__PURE__ */ q(Ca, [["__scopeId", "data-v-86784ddd"]]), Sa = { class: "commit-list" }, Ia = /* @__PURE__ */ K({
  __name: "CommitList",
  setup(t) {
    return (r, n) => (s(), o("div", Sa, [
      fe(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ea = /* @__PURE__ */ q(Ia, [["__scopeId", "data-v-8c5ee761"]]), Ma = { class: "commit-hash" }, Ra = /* @__PURE__ */ K({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, n = T(() => r.hash.slice(0, r.length));
    return (d, h) => (s(), o("span", Ma, a(n.value), 1));
  }
}), vs = /* @__PURE__ */ q(Ra, [["__scopeId", "data-v-7c333cc6"]]), za = { class: "commit-message" }, La = { class: "commit-date" }, Ta = /* @__PURE__ */ K({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = t, d = r;
    function h() {
      n.clickable && d("click");
    }
    return (f, g) => (s(), o("div", {
      class: te(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      p(vs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", za, a(t.message), 1),
      e("span", La, a(t.relativeDate), 1),
      f.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: g[0] || (g[0] = xe(() => {
        }, ["stop"]))
      }, [
        fe(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Na = /* @__PURE__ */ q(Ta, [["__scopeId", "data-v-dd7c621b"]]), Da = /* @__PURE__ */ K({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, n) => (s(), S(Pe, null, {
      header: i(() => [
        p(Ue, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), S(Ke, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), S(Ea, { key: 1 }, {
          default: i(() => [
            (s(!0), o(V, null, J(t.commits, (d) => (s(), S(Na, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (h) => r.$emit("select", d)
            }, {
              actions: i(() => [
                p(Q, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (h) => r.$emit("checkout", d),
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
}), Pa = /* @__PURE__ */ q(Da, [["__scopeId", "data-v-981c3c64"]]), os = [
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
], Ua = {
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
}, fs = [
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
], Ba = [
  ...fs,
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
], Nt = [
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
], Oa = [
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
], Dt = [
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
], ue = {
  // Environment Management
  getEnvironments: async () => (await ve(300), [
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
    await ve(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, n) => {
    await ve(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, n ? `cloned from ${n}` : "");
  },
  deleteEnvironment: async (t) => {
    await ve(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ve(400), os),
  getWorkflowDetails: async (t) => (await ve(300), Ua[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ve(800), {
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
  installWorkflowDeps: async (t, r, n) => {
    await ve(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${n}`);
  },
  setModelImportance: async (t, r, n) => {
    await ve(200), console.log(`[MOCK] Setting ${r} importance to ${n} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ve(350), fs),
  getWorkspaceModels: async () => (await ve(400), Ba),
  getModelDetails: async (t) => (await ve(200), {
    filename: t,
    hash: "762871a9ab79bfa2",
    blake3: null,
    sha256: null,
    size: 173e8,
    category: "checkpoints",
    relative_path: `checkpoints/${t}`,
    last_seen: "2025-11-11 23:34:23",
    locations: [
      { path: `/workspace/models/checkpoints/${t}`, modified: "2024-08-03 13:16:22" }
    ],
    sources: []
  }),
  updateModelSource: async (t, r) => {
    await ve(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await ve(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ve(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ve(350);
    const t = Nt.filter((n) => n.installed), r = Nt.filter((n) => !n.installed);
    return {
      nodes: Nt,
      total_count: Nt.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await ve(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ve(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ve(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ve(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await ve(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await ve(250), (t ? Dt.filter((d) => d.level === t) : Dt).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await ve(300);
    const n = [...Dt, ...Dt.map((h) => ({
      ...h,
      name: "comfygit.workspace"
    }))];
    return (t ? n.filter((h) => h.level === t) : n).slice(0, r || 100);
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
  getStatus: async () => (await ve(400), {
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
      synced: os.filter((t) => t.status === "synced").map((t) => t.name),
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
  getCommitHistory: async (t = 10) => (await ve(300), Oa.slice(0, t)),
  getBranches: async () => (await ve(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await ve(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await ve(300), {
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
    await ve(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await ve(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, n) => {
    await ve(400), console.log(`[MOCK] Updating remote ${t}: ${r}${n ? ` (push: ${n})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ve(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ve(300), {
    remote: t,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  }),
  /**
   * Get Pull Preview - Returns preview with optional conflicts
   * GET /v2/comfygit/remotes/{name}/pull-preview
   *
   * Test scenarios by remote name:
   * - "origin" - Returns preview WITH conflicts (default for testing)
   * - "upstream" - Returns preview WITHOUT conflicts (clean pull)
   * - Any other - Returns preview with conflicts
   */
  getPullPreview: async (t) => {
    await ve(500);
    const r = {
      remote: t,
      branch: "main",
      commits_behind: 3,
      commits: [
        { hash: "abc1234", short_hash: "abc1234", message: "Add new workflow features", date: "2024-01-15T10:30:00Z", date_relative: "2 hours ago" },
        { hash: "def5678", short_hash: "def5678", message: "Update node dependencies", date: "2024-01-15T09:15:00Z", date_relative: "3 hours ago" },
        { hash: "ghi9012", short_hash: "ghi9012", message: "Fix model path handling", date: "2024-01-15T08:00:00Z", date_relative: "4 hours ago" }
      ],
      changes: {
        workflows: {
          added: ["new-workflow.json"],
          modified: ["flux-schnell.json", "sdxl-lightning.json"],
          deleted: []
        },
        nodes: {
          to_install: ["comfyui-animatediff", "comfyui-controlnet-aux"],
          to_remove: []
        },
        models: {
          referenced: ["flux1-dev.safetensors", "sdxl_base.safetensors"],
          count: 2
        }
      },
      has_uncommitted_changes: !1,
      can_pull: !0,
      block_reason: null
    };
    return t !== "upstream" ? {
      ...r,
      has_conflicts: !0,
      conflicts: [
        {
          category: "workflow",
          identifier: "flux-schnell.json",
          conflict_type: "both_modified",
          resolution: "unresolved",
          base_hash: "abc12345",
          target_hash: "def67890"
        },
        {
          category: "node",
          identifier: "comfyui-animatediff",
          conflict_type: "both_modified",
          resolution: "unresolved",
          base_version: "v1.2.0",
          target_version: "v1.5.0",
          base_deleted: !1,
          target_deleted: !1
        },
        {
          category: "dependency",
          identifier: "torch",
          conflict_type: "both_modified",
          resolution: "unresolved",
          base_spec: "torch>=2.0.0",
          target_spec: "torch>=2.1.0"
        }
      ]
    } : {
      ...r,
      has_conflicts: !1,
      conflicts: []
    };
  },
  /**
   * Pull from Remote - Execute pull with optional conflict resolutions
   * POST /v2/comfygit/remotes/{name}/pull
   */
  pullFromRemote: async (t, r) => (await ve(1500), console.log(`[MOCK] Pulling from ${t} with options:`, r), {
    status: "success",
    pull_output: "Already up to date.",
    sync_result: {
      nodes_installed: r.resolutions ? ["comfyui-animatediff"] : [],
      nodes_removed: [],
      models_queued: 0,
      errors: []
    },
    message: "Pull completed successfully"
  }),
  /**
   * Get Push Preview
   * GET /v2/comfygit/remotes/{name}/push-preview
   */
  getPushPreview: async (t) => (await ve(400), {
    remote: t,
    branch: "main",
    commits_ahead: 2,
    commits: [
      { hash: "xyz1234", short_hash: "xyz1234", message: "Local workflow changes", date: "2024-01-15T11:00:00Z", date_relative: "1 hour ago" },
      { hash: "uvw5678", short_hash: "uvw5678", message: "Add new node configuration", date: "2024-01-15T10:45:00Z", date_relative: "1.5 hours ago" }
    ],
    has_uncommitted_changes: !1,
    remote_has_new_commits: !1,
    can_push: !0,
    needs_force: !1,
    block_reason: null
  }),
  /**
   * Push to Remote
   * POST /v2/comfygit/remotes/{name}/push
   */
  pushToRemote: async (t, r) => (await ve(1e3), console.log(`[MOCK] Pushing to ${t} with options:`, r), {
    status: "success",
    push_output: "Everything up-to-date",
    commits_pushed: 2,
    message: "Push completed successfully"
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
  analyzeWorkflow: async (t) => (await ve(600), {
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
  applyResolution: async (t, r, n) => {
    await ve(800);
    const d = [], h = [];
    return r.forEach((f, g) => {
      f.action === "install" && f.package_id && d.push(f.package_id);
    }), n.forEach((f, g) => {
      f.action === "download" && f.url ? h.push({
        filename: g,
        url: f.url,
        size: 65e8,
        target_path: f.target_path || `models/${g}`
      }) : f.action === "select" && f.selected_model && console.log(`[MOCK] Selected existing model: ${f.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: d,
      models_to_download: h,
      estimated_time_seconds: d.length * 30 + h.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await ve(400);
    const n = [
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
      results: n.slice(0, r),
      total: n.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, r = 10) => {
    await ve(400);
    const n = [
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
      results: n.slice(0, r),
      total: n.length
    };
  }
};
function ve(t) {
  return new Promise((r) => setTimeout(r, t));
}
function Ct() {
  return !0;
}
function Re() {
  const t = C(!1), r = C(null);
  async function n(P, ae) {
    var B;
    if (!((B = window.app) != null && B.api))
      throw new Error("ComfyUI API not available");
    const W = await window.app.api.fetchApi(P, ae);
    if (!W.ok) {
      const Y = await W.json().catch(() => ({}));
      throw new Error(Y.error || Y.message || `Request failed: ${W.status}`);
    }
    return W.json();
  }
  async function d(P = !1) {
    return ue.getStatus();
  }
  async function h(P, ae = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: P, allow_issues: ae })
    });
  }
  async function f(P = 10, ae = 0) {
    {
      const W = await ue.getCommitHistory(P);
      return {
        commits: W,
        total: W.length,
        offset: ae
      };
    }
  }
  async function g(P) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: P })
    });
  }
  async function v() {
    return ue.getBranches();
  }
  async function l(P) {
    return n(`/v2/comfygit/commit/${P}`);
  }
  async function m(P, ae = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: P, force: ae })
    });
  }
  async function _(P, ae = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: P, start_point: ae })
    });
  }
  async function u(P, ae = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: P, force: ae })
    });
  }
  async function I(P, ae = !1) {
    return await ue.deleteBranch(P), { status: "success" };
  }
  async function $() {
    return ue.getEnvironments();
  }
  async function R(P) {
    return ue.switchEnvironment(P);
  }
  async function b() {
    return null;
  }
  async function y(P) {
    return await ue.createEnvironment(P.name, P.torch_backend || "auto"), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function k() {
    return { state: "idle", message: "No creation in progress" };
  }
  async function z(P = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function D(P) {
    return await ue.deleteEnvironment(P), { status: "success" };
  }
  async function N(P = !1) {
    return ue.getWorkflows();
  }
  async function G(P) {
    return ue.getWorkflowDetails(P);
  }
  async function A(P) {
    return ue.resolveWorkflow(P);
  }
  async function F(P, ae, W) {
    return await ue.installWorkflowDeps(P, ae, W), { status: "success" };
  }
  async function O(P, ae, W) {
    return ue.setModelImportance(P, ae, W);
  }
  async function L() {
    return ue.getEnvironmentModels();
  }
  async function M() {
    return ue.getWorkspaceModels();
  }
  async function H(P) {
    return ue.getModelDetails(P);
  }
  async function oe(P) {
    return console.log(`[MOCK] Opening file location: ${P}`), { status: "success" };
  }
  async function be(P, ae) {
    return await ue.updateModelSource(P, ae), { status: "success", source_type: "custom" };
  }
  async function re(P, ae) {
    return { status: "success" };
  }
  async function X(P) {
    return ue.deleteModel(P);
  }
  async function Z(P) {
    return await ue.downloadModel(P), { status: "success" };
  }
  async function U() {
    return { status: "success", changes: 0 };
  }
  async function x() {
    return { path: "~/comfygit/models" };
  }
  async function se(P) {
    return { status: "success", path: P, models_indexed: 10 };
  }
  async function ee() {
    return ue.getConfig();
  }
  async function Ce(P) {
    return ue.updateConfig(P);
  }
  async function we(P, ae) {
    return ue.getEnvironmentLogs(P, ae);
  }
  async function ce(P, ae) {
    return ue.getWorkspaceLogs(P, ae);
  }
  async function Ve() {
    return ue.getNodes();
  }
  async function ke(P) {
    return { status: "success", message: `Node '${P}' tracked as development` };
  }
  async function We(P) {
    return await ue.installNode(P), { status: "success" };
  }
  async function Ze(P) {
    return await ue.updateNode(P), { status: "success" };
  }
  async function it(P) {
    return await ue.uninstallNode(P), { status: "success" };
  }
  async function pe() {
    return ue.getRemotes();
  }
  async function Ge(P, ae) {
    return await ue.addRemote(P, ae), { status: "success", remote_name: P };
  }
  async function Be(P) {
    return await ue.removeRemote(P), { status: "success", remote_name: P };
  }
  async function Oe(P, ae, W) {
    return await ue.updateRemoteUrl(P, ae, W), { status: "success", remote_name: P };
  }
  async function dt(P) {
    return await ue.fetchRemote(P), { status: "success", remote_name: P };
  }
  async function me(P) {
    return ue.getRemoteSyncStatus(P);
  }
  async function Te(P = "skip", ae = !0) {
    return await new Promise((W) => setTimeout(W, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function ct(P, ae) {
    return ue.getPullPreview(P);
  }
  async function Je(P, ae = {}) {
    return ue.pullFromRemote(P, ae);
  }
  async function Ee(P, ae) {
    return ue.getPushPreview(P);
  }
  async function ne(P, ae = {}) {
    return ue.pushToRemote(P, ae);
  }
  return {
    isLoading: t,
    error: r,
    getStatus: d,
    commit: h,
    getHistory: f,
    exportEnv: g,
    // Git Operations
    getBranches: v,
    getCommitDetail: l,
    checkout: m,
    createBranch: _,
    switchBranch: u,
    deleteBranch: I,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: R,
    getSwitchProgress: b,
    createEnvironment: y,
    getCreateProgress: k,
    getComfyUIReleases: z,
    deleteEnvironment: D,
    // Workflow Management
    getWorkflows: N,
    getWorkflowDetails: G,
    resolveWorkflow: A,
    installWorkflowDeps: F,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: M,
    getModelDetails: H,
    openFileLocation: oe,
    addModelSource: be,
    removeModelSource: re,
    deleteModel: X,
    downloadModel: Z,
    scanWorkspaceModels: U,
    getModelsDirectory: x,
    setModelsDirectory: se,
    // Settings
    getConfig: ee,
    updateConfig: Ce,
    // Debug/Logs
    getEnvironmentLogs: we,
    getWorkspaceLogs: ce,
    // Node Management
    getNodes: Ve,
    trackNodeAsDev: ke,
    installNode: We,
    updateNode: Ze,
    uninstallNode: it,
    // Git Remotes
    getRemotes: pe,
    addRemote: Ge,
    removeRemote: Be,
    updateRemoteUrl: Oe,
    fetchRemote: dt,
    getRemoteSyncStatus: me,
    // Push/Pull
    getPullPreview: ct,
    pullFromRemote: Je,
    getPushPreview: Ee,
    pushToRemote: ne,
    // Environment Sync
    syncEnvironmentManually: Te
  };
}
async function xt(t, r = {}, n = 5e3) {
  const d = new AbortController(), h = setTimeout(() => d.abort(), n);
  try {
    const f = await fetch(t, {
      ...r,
      signal: d.signal
    });
    return clearTimeout(h), f;
  } catch (f) {
    throw clearTimeout(h), f.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : f;
  }
}
function gs() {
  const t = C(null);
  async function r() {
    try {
      const g = await xt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (g.ok)
        return (await g.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const g = await xt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!g.ok) throw new Error("Health check failed");
      return await g.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function d() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const g = await xt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!g.ok) throw new Error("Failed to get status");
      return await g.json();
    } catch {
      return null;
    }
  }
  async function h() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await xt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function f() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await xt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: r,
    checkHealth: n,
    getStatus: d,
    restart: h,
    kill: f
  };
}
const Fa = { class: "base-modal-header" }, Aa = {
  key: 0,
  class: "base-modal-title"
}, Va = { class: "base-modal-body" }, Wa = {
  key: 0,
  class: "base-modal-loading"
}, Ga = {
  key: 1,
  class: "base-modal-error"
}, ja = {
  key: 0,
  class: "base-modal-footer"
}, Ha = /* @__PURE__ */ K({
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
  setup(t, { emit: r }) {
    const n = t, d = r;
    function h() {
      n.closeOnOverlayClick && d("close");
    }
    function f(g) {
      g.key === "Escape" && d("close");
    }
    return Ie(() => {
      document.addEventListener("keydown", f), document.body.style.overflow = "hidden";
    }), Ns(() => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    }), (g, v) => (s(), S(Me, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: te(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", Fa, [
            fe(g.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Aa, a(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (l) => g.$emit("close"))
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
          e("div", Va, [
            t.loading ? (s(), o("div", Wa, "Loading...")) : t.error ? (s(), o("div", Ga, a(t.error), 1)) : fe(g.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          g.$slots.footer ? (s(), o("div", ja, [
            fe(g.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), ot = /* @__PURE__ */ q(Ha, [["__scopeId", "data-v-2125a0e6"]]), Ka = ["type", "disabled"], qa = {
  key: 0,
  class: "spinner"
}, Ya = /* @__PURE__ */ K({
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
    return (r, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: te(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", qa)) : c("", !0),
      fe(r.$slots, "default", {}, void 0, !0)
    ], 10, Ka));
  }
}), le = /* @__PURE__ */ q(Ya, [["__scopeId", "data-v-f3452606"]]), Qa = {
  key: 0,
  class: "base-title-count"
}, Xa = /* @__PURE__ */ K({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, n) => (s(), S(Yt(`h${t.level}`), {
      class: te(["base-title", t.variant])
    }, {
      default: i(() => [
        fe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Qa, "(" + a(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Mt = /* @__PURE__ */ q(Xa, [["__scopeId", "data-v-5a01561d"]]), Za = ["value", "disabled"], Ja = {
  key: 0,
  value: "",
  disabled: ""
}, el = ["value"], tl = {
  key: 0,
  class: "base-select-error"
}, sl = /* @__PURE__ */ K({
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
    function r(d) {
      return typeof d == "string" ? d : d.value;
    }
    function n(d) {
      return typeof d == "string" ? d : d.label;
    }
    return (d, h) => (s(), o("div", {
      class: te(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: te(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (f) => d.$emit("update:modelValue", f.target.value))
      }, [
        t.placeholder ? (s(), o("option", Ja, a(t.placeholder), 1)) : c("", !0),
        (s(!0), o(V, null, J(t.options, (f) => (s(), o("option", {
          key: r(f),
          value: r(f)
        }, a(n(f)), 9, el))), 128))
      ], 42, Za),
      t.error ? (s(), o("span", tl, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), ol = /* @__PURE__ */ q(sl, [["__scopeId", "data-v-7436d745"]]), nl = { class: "popover-header" }, al = { class: "popover-title" }, ll = { class: "popover-content" }, il = {
  key: 0,
  class: "popover-actions"
}, rl = /* @__PURE__ */ K({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, n) => (s(), S(Me, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Xe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", nl, [
            e("h4", al, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", ll, [
            fe(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", il, [
            fe(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), nt = /* @__PURE__ */ q(rl, [["__scopeId", "data-v-42815ace"]]), dl = { class: "detail-section" }, cl = {
  key: 0,
  class: "empty-message"
}, ul = { class: "model-header" }, ml = { class: "model-name" }, vl = { class: "model-details" }, fl = { class: "model-row" }, gl = { class: "model-row" }, hl = { class: "label" }, pl = {
  key: 0,
  class: "model-row model-row-nodes"
}, yl = { class: "node-list" }, wl = ["onClick"], kl = {
  key: 1,
  class: "model-row"
}, bl = { class: "value" }, _l = {
  key: 0,
  class: "model-actions"
}, $l = { class: "detail-section" }, Cl = {
  key: 0,
  class: "empty-message"
}, xl = { class: "node-name" }, Sl = {
  key: 0,
  class: "node-version"
}, Il = /* @__PURE__ */ K({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: r }) {
    const n = t, d = r, { getWorkflowDetails: h, setModelImportance: f, installWorkflowDeps: g } = Re(), v = C(null), l = C(!1), m = C(null), _ = C(!1), u = C({}), I = C({}), $ = C(!1), R = C(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function y(L) {
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
    function k(L) {
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
    function z(L) {
      if (!L.loaded_by || L.loaded_by.length === 0) return [];
      const M = L.hash || L.filename;
      return R.value.has(M) ? L.loaded_by : L.loaded_by.slice(0, 3);
    }
    function D(L) {
      return R.value.has(L);
    }
    function N(L) {
      R.value.has(L) ? R.value.delete(L) : R.value.add(L), R.value = new Set(R.value);
    }
    async function G() {
      l.value = !0, m.value = null;
      try {
        v.value = await h(n.workflowName);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function A(L, M) {
      u.value[L] = M, _.value = !0;
    }
    async function F() {
      if (!_.value) {
        d("close");
        return;
      }
      l.value = !0, m.value = null;
      try {
        for (const [L, M] of Object.entries(u.value))
          await f(n.workflowName, L, M);
        d("refresh"), d("close");
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function O(L) {
      I.value[L] = !0, m.value = null;
      try {
        await g(n.workflowName, !0, !1), await G();
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to install node";
      } finally {
        I.value[L] = !1;
      }
    }
    return Ie(G), (L, M) => (s(), o(V, null, [
      p(ot, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: m.value || void 0,
        onClose: M[5] || (M[5] = (H) => d("close"))
      }, {
        body: i(() => [
          v.value ? (s(), o(V, { key: 0 }, [
            e("section", dl, [
              p(Mt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", cl, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(V, null, J(v.value.models, (H) => (s(), o("div", {
                key: H.hash || H.filename,
                class: "model-card"
              }, [
                e("div", ul, [
                  M[7] || (M[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", ml, a(H.filename), 1)
                ]),
                e("div", vl, [
                  e("div", fl, [
                    M[8] || (M[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: te(["value", y(H.status)])
                    }, a(k(H.status)), 3)
                  ]),
                  e("div", gl, [
                    e("span", hl, [
                      M[9] || (M[9] = w(" Importance: ", -1)),
                      p(ms, {
                        size: 14,
                        title: "About importance levels",
                        onClick: M[0] || (M[0] = (oe) => $.value = !0)
                      })
                    ]),
                    p(ol, {
                      "model-value": u.value[H.filename] || H.importance,
                      options: b,
                      "onUpdate:modelValue": (oe) => A(H.filename, oe)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  H.loaded_by && H.loaded_by.length > 0 ? (s(), o("div", pl, [
                    M[10] || (M[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", yl, [
                      (s(!0), o(V, null, J(z(H), (oe, be) => (s(), o("div", {
                        key: `${oe.node_id}-${be}`,
                        class: "node-reference"
                      }, a(oe.node_type) + " (Node #" + a(oe.node_id) + ") ", 1))), 128)),
                      H.loaded_by.length > 3 ? (s(), o("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (oe) => N(H.hash || H.filename)
                      }, a(D(H.hash || H.filename) ? "▼ Show less" : `▶ View all (${H.loaded_by.length})`), 9, wl)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  H.size_mb ? (s(), o("div", kl, [
                    M[11] || (M[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", bl, a(H.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                H.status !== "available" ? (s(), o("div", _l, [
                  H.status === "downloadable" ? (s(), S(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: M[1] || (M[1] = (oe) => d("resolve"))
                  }, {
                    default: i(() => [...M[12] || (M[12] = [
                      w(" Download ", -1)
                    ])]),
                    _: 1
                  })) : H.status === "path_mismatch" ? (s(), S(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: M[2] || (M[2] = (oe) => d("resolve"))
                  }, {
                    default: i(() => [...M[13] || (M[13] = [
                      w(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (s(), S(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: M[3] || (M[3] = (oe) => d("resolve"))
                  }, {
                    default: i(() => [...M[14] || (M[14] = [
                      w(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", $l, [
              p(Mt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", Cl, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(V, null, J(v.value.nodes, (H) => (s(), o("div", {
                key: H.name,
                class: "node-item"
              }, [
                e("span", {
                  class: te(["node-status", H.status === "installed" ? "installed" : "missing"])
                }, a(H.status === "installed" ? "✓" : "✕"), 3),
                e("span", xl, a(H.name), 1),
                H.version ? (s(), o("span", Sl, "v" + a(H.version), 1)) : c("", !0),
                H.status === "missing" ? (s(), S(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: I.value[H.name],
                  onClick: (oe) => O(H.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...M[15] || (M[15] = [
                    w(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          p(le, {
            variant: "secondary",
            onClick: M[4] || (M[4] = (H) => d("close"))
          }, {
            default: i(() => [...M[16] || (M[16] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          _.value ? (s(), S(le, {
            key: 0,
            variant: "primary",
            onClick: F
          }, {
            default: i(() => [...M[17] || (M[17] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      p(nt, {
        show: $.value,
        title: "Model Importance Levels",
        onClose: M[6] || (M[6] = (H) => $.value = !1)
      }, {
        content: i(() => [...M[18] || (M[18] = [
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
}), El = /* @__PURE__ */ q(Il, [["__scopeId", "data-v-0b14d32e"]]), ye = ds({
  items: [],
  status: "idle"
});
let Ye = null;
function hs() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Wt(t) {
  return ye.items.find((r) => r.id === t);
}
async function yt() {
  if (ye.status === "downloading") return;
  const t = ye.items.find((r) => r.status === "queued");
  if (!t) {
    ye.status = "idle";
    return;
  }
  ye.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Ml(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    ye.status = "idle", yt();
  }
}
async function Ml(t) {
  return new Promise((r, n) => {
    Ye && (Ye.close(), Ye = null);
    const d = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${d}`);
    Ye = h;
    let f = Date.now(), g = 0, v = !1;
    h.onmessage = (l) => {
      try {
        const m = JSON.parse(l.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const _ = Date.now(), u = (_ - f) / 1e3;
            if (u > 0.5) {
              const I = t.downloaded - g;
              if (t.speed = I / u, f = _, g = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, h.close(), Ye = null, r();
            break;
          case "error":
            v = !0, h.close(), Ye = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), Ye = null, v || n(new Error("Connection lost"));
    };
  });
}
async function Rl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const r = await t.json();
    if (!r.pending_downloads || r.pending_downloads.length === 0) return;
    for (const n of r.pending_downloads) {
      if (ye.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const d = {
        id: hs(),
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
      ye.items.push(d);
    }
    console.log(`[ComfyGit] Loaded ${r.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Lt() {
  function t(y) {
    for (const k of y) {
      if (ye.items.some(
        (N) => N.url === k.url && N.targetPath === k.targetPath && ["queued", "downloading", "paused", "completed"].includes(N.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${k.filename}`);
        continue;
      }
      const D = {
        id: hs(),
        workflow: k.workflow,
        filename: k.filename,
        url: k.url,
        targetPath: k.targetPath,
        size: k.size || 0,
        type: k.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ye.items.push(D);
    }
    ye.status === "idle" && yt();
  }
  async function r(y) {
    const k = Wt(y);
    if (k) {
      if (k.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(k.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ye && (Ye.close(), Ye = null), k.status = "failed", k.error = "Cancelled by user", ye.status = "idle", yt();
      } else if (k.status === "queued") {
        const z = ye.items.findIndex((D) => D.id === y);
        z >= 0 && ye.items.splice(z, 1);
      }
    }
  }
  function n(y) {
    const k = Wt(y);
    !k || k.status !== "failed" || (k.status = "queued", k.error = void 0, k.progress = 0, k.downloaded = 0, ye.status === "idle" && yt());
  }
  function d(y) {
    const k = Wt(y);
    !k || k.status !== "paused" || (k.status = "queued", ye.status === "idle" && yt());
  }
  function h() {
    const y = ye.items.filter((k) => k.status === "paused");
    for (const k of y)
      k.status = "queued";
    ye.status === "idle" && yt();
  }
  function f(y) {
    const k = ye.items.findIndex((z) => z.id === y);
    k >= 0 && ["completed", "failed", "paused"].includes(ye.items[k].status) && ye.items.splice(k, 1);
  }
  function g() {
    ye.items = ye.items.filter((y) => y.status !== "completed");
  }
  function v() {
    ye.items = ye.items.filter((y) => y.status !== "failed");
  }
  const l = T(
    () => ye.items.find((y) => y.status === "downloading")
  ), m = T(
    () => ye.items.filter((y) => y.status === "queued")
  ), _ = T(
    () => ye.items.filter((y) => y.status === "completed")
  ), u = T(
    () => ye.items.filter((y) => y.status === "failed")
  ), I = T(
    () => ye.items.filter((y) => y.status === "paused")
  ), $ = T(() => ye.items.length > 0), R = T(
    () => ye.items.filter((y) => y.status === "queued" || y.status === "downloading").length
  ), b = T(
    () => ye.items.some((y) => y.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Ds(ye),
    // Computed
    currentDownload: l,
    queuedItems: m,
    completedItems: _,
    failedItems: u,
    pausedItems: I,
    hasItems: $,
    activeCount: R,
    hasPaused: b,
    // Actions
    addToQueue: t,
    cancelDownload: r,
    retryDownload: n,
    resumeDownload: d,
    resumeAllPaused: h,
    removeItem: f,
    clearCompleted: g,
    clearFailed: v,
    loadPendingDownloads: Rl
  };
}
function zl() {
  const t = C(null), r = C(null), n = C([]), d = C([]), h = C(!1), f = C(null);
  async function g(k, z) {
    var N;
    if (!((N = window.app) != null && N.api))
      throw new Error("ComfyUI API not available");
    const D = await window.app.api.fetchApi(k, z);
    if (!D.ok) {
      const G = await D.json().catch(() => ({})), A = G.error || G.message || `Request failed: ${D.status}`;
      throw new Error(A);
    }
    return D.json();
  }
  async function v(k) {
    h.value = !0, f.value = null;
    try {
      let z;
      return Ct() && (z = await ue.analyzeWorkflow(k)), t.value = z, z;
    } catch (z) {
      const D = z instanceof Error ? z.message : "Unknown error occurred";
      throw f.value = D, z;
    } finally {
      h.value = !1;
    }
  }
  async function l(k, z, D, N) {
    h.value = !0, f.value = null;
    try {
      let G;
      return Ct() && (G = await ue.applyResolution(k, z, D)), r.value = G, G;
    } catch (G) {
      const A = G instanceof Error ? G.message : "Unknown error occurred";
      throw f.value = A, G;
    } finally {
      h.value = !1;
    }
  }
  async function m(k, z = 10) {
    h.value = !0, f.value = null;
    try {
      let D;
      return Ct() && (D = await ue.searchNodes(k, z)), n.value = D.results, D.results;
    } catch (D) {
      const N = D instanceof Error ? D.message : "Unknown error occurred";
      throw f.value = N, D;
    } finally {
      h.value = !1;
    }
  }
  async function _(k, z = 10) {
    h.value = !0, f.value = null;
    try {
      let D;
      return Ct() && (D = await ue.searchModels(k, z)), d.value = D.results, D.results;
    } catch (D) {
      const N = D instanceof Error ? D.message : "Unknown error occurred";
      throw f.value = N, D;
    } finally {
      h.value = !1;
    }
  }
  const u = ds({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function I() {
    u.phase = "idle", u.currentFile = void 0, u.currentFileIndex = void 0, u.totalFiles = void 0, u.bytesDownloaded = void 0, u.bytesTotal = void 0, u.completedFiles = [], u.nodesToInstall = [], u.nodesInstalled = [], u.installError = void 0, u.needsRestart = void 0, u.error = void 0, u.nodeInstallProgress = void 0;
  }
  async function $(k) {
    u.phase = "installing", u.nodesInstalled = [], u.installError = void 0, u.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Ct()) {
        u.nodeInstallProgress.totalNodes = u.nodesToInstall.length;
        for (let z = 0; z < u.nodesToInstall.length; z++)
          u.nodeInstallProgress.currentNode = u.nodesToInstall[z], u.nodeInstallProgress.currentIndex = z, await new Promise((D) => setTimeout(D, 500)), u.nodeInstallProgress.completedNodes.push({
            node_id: u.nodesToInstall[z],
            success: !0
          });
        return u.nodesInstalled = u.nodesToInstall, u.needsRestart = u.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: u.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await R(k);
    } catch (z) {
      const D = z instanceof Error ? z.message : "Failed to install nodes";
      throw u.installError = D, z;
    }
  }
  async function R(k) {
    var D;
    const z = await g(
      `/v2/comfygit/workflow/${k}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: u.nodesToInstall
        })
      }
    );
    if (u.nodeInstallProgress) {
      u.nodeInstallProgress.totalNodes = u.nodesToInstall.length;
      const N = new Map(((D = z.failed) == null ? void 0 : D.map((G) => [G.node_id, G.error])) || []);
      for (let G = 0; G < u.nodesToInstall.length; G++) {
        const A = u.nodesToInstall[G], F = N.get(A);
        u.nodeInstallProgress.completedNodes.push({
          node_id: A,
          success: !F,
          error: F
        });
      }
    }
    return u.nodesInstalled = z.nodes_installed, u.needsRestart = z.nodes_installed.length > 0, z.failed && z.failed.length > 0 && (u.installError = `${z.failed.length} package(s) failed to install`), z;
  }
  async function b(k, z, D) {
    I(), u.phase = "resolving", f.value = null;
    {
      const N = await ue.applyResolution(k, z, D);
      r.value = N, u.nodesToInstall = N.nodes_to_install, u.phase = "complete";
      return;
    }
  }
  function y(k, z) {
    const { addToQueue: D } = Lt(), N = z.filter((G) => G.url && G.target_path).map((G) => ({
      workflow: k,
      filename: G.filename,
      url: G.url,
      targetPath: G.target_path,
      size: G.size || 0,
      type: "model"
    }));
    return N.length > 0 && D(N), N.length;
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: n,
    modelSearchResults: d,
    isLoading: h,
    error: f,
    progress: u,
    // Methods
    analyzeWorkflow: v,
    applyResolution: l,
    applyResolutionWithProgress: b,
    installNodes: $,
    searchNodes: m,
    searchModels: _,
    resetProgress: I,
    queueModelDownloads: y
  };
}
const Ll = { class: "resolution-stepper" }, Tl = { class: "stepper-header" }, Nl = ["onClick"], Dl = {
  key: 0,
  class: "step-icon"
}, Pl = {
  key: 1,
  class: "step-number"
}, Ul = { class: "step-label" }, Bl = {
  key: 0,
  class: "step-connector"
}, Ol = { class: "stepper-content" }, Fl = /* @__PURE__ */ K({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const n = t, d = r;
    function h(m) {
      var _;
      if ((_ = n.stepStats) != null && _[m]) {
        const u = n.stepStats[m];
        return u.total > 0 && u.resolved === u.total;
      }
      return n.completedSteps.includes(m);
    }
    function f(m) {
      var _;
      if ((_ = n.stepStats) != null && _[m]) {
        const u = n.stepStats[m];
        return u.resolved > 0 && u.resolved < u.total;
      }
      return !1;
    }
    function g(m) {
      return h(m) ? "state-complete" : f(m) ? "state-partial" : "state-pending";
    }
    function v(m) {
      return !1;
    }
    function l(m) {
      d("step-change", m);
    }
    return (m, _) => (s(), o("div", Ll, [
      e("div", Tl, [
        (s(!0), o(V, null, J(t.steps, (u, I) => (s(), o("div", {
          key: u.id,
          class: te(["step", {
            active: t.currentStep === u.id,
            completed: h(u.id),
            "in-progress": f(u.id),
            disabled: v(u.id)
          }]),
          onClick: ($) => l(u.id)
        }, [
          e("div", {
            class: te(["step-indicator", g(u.id)])
          }, [
            h(u.id) ? (s(), o("span", Dl, "✓")) : (s(), o("span", Pl, a(I + 1), 1))
          ], 2),
          e("div", Ul, a(u.label), 1),
          I < t.steps.length - 1 ? (s(), o("div", Bl)) : c("", !0)
        ], 10, Nl))), 128))
      ]),
      e("div", Ol, [
        fe(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Al = /* @__PURE__ */ q(Fl, [["__scopeId", "data-v-2a7b3af8"]]), Vl = /* @__PURE__ */ K({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, n = T(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), d = T(() => `confidence-${n.value}`), h = T(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (f, g) => (s(), o("span", {
      class: te(["confidence-badge", d.value, t.size])
    }, a(h.value), 3));
  }
}), Zt = /* @__PURE__ */ q(Vl, [["__scopeId", "data-v-17ec4b80"]]), Wl = { class: "node-info" }, Gl = { class: "node-info-text" }, jl = { class: "item-body" }, Hl = {
  key: 0,
  class: "resolved-state"
}, Kl = {
  key: 1,
  class: "multiple-options"
}, ql = { class: "options-list" }, Yl = ["onClick"], Ql = ["name", "value", "checked", "onChange"], Xl = { class: "option-content" }, Zl = { class: "option-header" }, Jl = { class: "option-package-id" }, ei = {
  key: 0,
  class: "option-title"
}, ti = { class: "option-meta" }, si = {
  key: 0,
  class: "installed-badge"
}, oi = { class: "action-buttons" }, ni = {
  key: 2,
  class: "unresolved"
}, ai = { class: "action-buttons" }, li = /* @__PURE__ */ K({
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
  setup(t, { emit: r }) {
    const n = t, d = r, h = T(() => !!n.choice);
    T(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), T(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    });
    const f = T(() => {
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
    function g(v) {
      d("option-selected", v);
    }
    return (v, l) => (s(), o("div", {
      class: te(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: h.value }])
    }, [
      e("div", Wl, [
        e("span", Gl, [
          l[7] || (l[7] = w("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: te(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", jl, [
        h.value ? (s(), o("div", Hl, [
          p(le, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (m) => d("clear-choice"))
          }, {
            default: i(() => [...l[8] || (l[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Kl, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ql, [
            (s(!0), o(V, null, J(t.options, (m, _) => (s(), o("label", {
              key: m.package_id,
              class: te(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (u) => g(_)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (u) => g(_)
              }, null, 40, Ql),
              e("div", Xl, [
                e("div", Zl, [
                  e("span", Jl, a(m.package_id), 1),
                  p(Zt, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (s(), o("div", ei, a(m.title), 1)) : c("", !0),
                e("div", ti, [
                  m.is_installed ? (s(), o("span", si, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Yl))), 128))
          ]),
          e("div", oi, [
            p(le, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (m) => d("search"))
            }, {
              default: i(() => [...l[9] || (l[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (m) => d("manual-entry"))
            }, {
              default: i(() => [...l[10] || (l[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (m) => d("mark-optional"))
            }, {
              default: i(() => [...l[11] || (l[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ni, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", ai, [
            p(le, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (m) => d("search"))
            }, {
              default: i(() => [...l[13] || (l[13] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (m) => d("manual-entry"))
            }, {
              default: i(() => [...l[14] || (l[14] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (m) => d("mark-optional"))
            }, {
              default: i(() => [...l[15] || (l[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ii = /* @__PURE__ */ q(li, [["__scopeId", "data-v-e02629e7"]]), ri = { class: "item-navigator" }, di = { class: "nav-item-info" }, ci = ["title"], ui = { class: "nav-controls" }, mi = { class: "nav-arrows" }, vi = ["disabled"], fi = ["disabled"], gi = { class: "nav-position" }, hi = /* @__PURE__ */ K({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const n = r;
    return (d, h) => (s(), o("div", ri, [
      e("div", di, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, ci)
      ]),
      e("div", ui, [
        e("div", mi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (f) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, vi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (f) => n("next")),
            title: "Next item"
          }, " → ", 8, fi)
        ]),
        e("span", gi, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), ps = /* @__PURE__ */ q(hi, [["__scopeId", "data-v-74af7920"]]), pi = ["type", "value", "placeholder", "disabled"], yi = {
  key: 0,
  class: "base-input-error"
}, wi = /* @__PURE__ */ K({
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
    return (r, n) => (s(), o("div", {
      class: te(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: te(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeyup: [
          n[1] || (n[1] = rt((d) => r.$emit("enter"), ["enter"])),
          n[2] || (n[2] = rt((d) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, pi),
      t.error ? (s(), o("span", yi, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ q(wi, [["__scopeId", "data-v-9ba02cdc"]]), ki = { class: "node-resolution-step" }, bi = {
  key: 0,
  class: "auto-resolved-section"
}, _i = { class: "section-header" }, $i = { class: "stat-badge" }, Ci = { class: "resolved-packages-list" }, xi = { class: "package-info" }, Si = { class: "package-id" }, Ii = { class: "node-count" }, Ei = { class: "package-actions" }, Mi = {
  key: 0,
  class: "status-badge install"
}, Ri = {
  key: 1,
  class: "status-badge skip"
}, zi = ["onClick"], Li = {
  key: 1,
  class: "section-divider"
}, Ti = { class: "step-header" }, Ni = { class: "stat-badge" }, Di = {
  key: 1,
  class: "step-body"
}, Pi = {
  key: 3,
  class: "empty-state"
}, Ui = { class: "node-search-modal" }, Bi = { class: "node-modal-body" }, Oi = {
  key: 0,
  class: "node-search-results"
}, Fi = ["onClick"], Ai = { class: "node-result-header" }, Vi = { class: "node-result-package-id" }, Wi = {
  key: 0,
  class: "node-result-description"
}, Gi = {
  key: 1,
  class: "node-no-results"
}, ji = {
  key: 2,
  class: "node-searching"
}, Hi = { class: "node-manual-entry-modal" }, Ki = { class: "node-modal-body" }, qi = { class: "node-modal-actions" }, Yi = /* @__PURE__ */ K({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: r }) {
    const n = t, d = r, h = C(0), f = C(!1), g = C(!1), v = C(""), l = C(""), m = C([]), _ = C(!1), u = T(() => n.nodes[h.value]), I = T(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), $ = T(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function R(re) {
      return n.skippedPackages.has(re);
    }
    function b(re) {
      d("package-skip", re);
    }
    const y = T(() => {
      var X;
      if (!u.value) return "not-found";
      const re = n.nodeChoices.get(u.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (X = u.value.options) != null && X.length ? "ambiguous" : "not-found";
    }), k = T(() => {
      var X;
      if (!u.value) return;
      const re = n.nodeChoices.get(u.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (X = u.value.options) != null && X.length ? `${u.value.options.length} matches` : "Not Found";
    });
    function z(re) {
      re >= 0 && re < n.nodes.length && (h.value = re);
    }
    function D() {
      u.value && d("mark-optional", u.value.node_type);
    }
    function N() {
      u.value && d("skip", u.value.node_type);
    }
    function G(re) {
      u.value && d("option-selected", u.value.node_type, re);
    }
    function A() {
      u.value && d("clear-choice", u.value.node_type);
    }
    function F() {
      u.value && (v.value = u.value.node_type, f.value = !0);
    }
    function O() {
      l.value = "", g.value = !0;
    }
    function L() {
      f.value = !1, v.value = "", m.value = [];
    }
    function M() {
      g.value = !1, l.value = "";
    }
    function H() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function oe(re) {
      u.value && (d("manual-entry", u.value.node_type, re.package_id), L());
    }
    function be() {
      !u.value || !l.value.trim() || (d("manual-entry", u.value.node_type, l.value.trim()), M());
    }
    return (re, X) => {
      var Z, U;
      return s(), o("div", ki, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", bi, [
          e("div", _i, [
            X[4] || (X[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", $i, a($.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Ci, [
            (s(!0), o(V, null, J(t.autoResolvedPackages, (x) => (s(), o("div", {
              key: x.package_id,
              class: "resolved-package-item"
            }, [
              e("div", xi, [
                e("code", Si, a(x.package_id), 1),
                e("span", Ii, a(x.node_types_count) + " node type" + a(x.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Ei, [
                R(x.package_id) ? (s(), o("span", Ri, " SKIPPED ")) : (s(), o("span", Mi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (se) => b(x.package_id)
                }, a(R(x.package_id) ? "Include" : "Skip"), 9, zi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Li)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", Ti, [
            X[5] || (X[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ni, a(I.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          u.value ? (s(), S(ps, {
            key: 0,
            "item-name": u.value.node_type,
            "current-index": h.value,
            "total-items": t.nodes.length,
            onPrev: X[0] || (X[0] = (x) => z(h.value - 1)),
            onNext: X[1] || (X[1] = (x) => z(h.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          u.value ? (s(), o("div", Di, [
            p(ii, {
              "node-type": u.value.node_type,
              "has-multiple-options": !!((Z = u.value.options) != null && Z.length),
              options: u.value.options,
              choice: (U = t.nodeChoices) == null ? void 0 : U.get(u.value.node_type),
              status: y.value,
              "status-label": k.value,
              onMarkOptional: D,
              onSkip: N,
              onManualEntry: O,
              onSearch: F,
              onOptionSelected: G,
              onClearChoice: A
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Pi, [...X[6] || (X[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), S(Me, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: xe(L, ["self"])
          }, [
            e("div", Ui, [
              e("div", { class: "node-modal-header" }, [
                X[7] || (X[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", Bi, [
                p(He, {
                  modelValue: v.value,
                  "onUpdate:modelValue": X[2] || (X[2] = (x) => v.value = x),
                  placeholder: "Search by node type, package name...",
                  onInput: H
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (s(), o("div", Oi, [
                  (s(!0), o(V, null, J(m.value, (x) => (s(), o("div", {
                    key: x.package_id,
                    class: "node-search-result-item",
                    onClick: (se) => oe(x)
                  }, [
                    e("div", Ai, [
                      e("code", Vi, a(x.package_id), 1),
                      x.match_confidence ? (s(), S(Zt, {
                        key: 0,
                        confidence: x.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    x.description ? (s(), o("div", Wi, a(x.description), 1)) : c("", !0)
                  ], 8, Fi))), 128))
                ])) : v.value && !_.value ? (s(), o("div", Gi, ' No packages found matching "' + a(v.value) + '" ', 1)) : c("", !0),
                _.value ? (s(), o("div", ji, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), S(Me, { to: "body" }, [
          g.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: xe(M, ["self"])
          }, [
            e("div", Hi, [
              e("div", { class: "node-modal-header" }, [
                X[8] || (X[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Ki, [
                p(He, {
                  modelValue: l.value,
                  "onUpdate:modelValue": X[3] || (X[3] = (x) => l.value = x),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", qi, [
                  p(le, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: i(() => [...X[9] || (X[9] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(le, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: be
                  }, {
                    default: i(() => [...X[10] || (X[10] = [
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
}), Qi = /* @__PURE__ */ q(Yi, [["__scopeId", "data-v-6474069a"]]), Xi = { class: "node-info" }, Zi = { class: "node-info-text" }, Ji = { class: "item-body" }, er = {
  key: 0,
  class: "resolved-state"
}, tr = {
  key: 1,
  class: "multiple-options"
}, sr = { class: "options-list" }, or = ["onClick"], nr = ["name", "value", "checked", "onChange"], ar = { class: "option-content" }, lr = { class: "option-header" }, ir = { class: "option-filename" }, rr = { class: "option-meta" }, dr = { class: "option-size" }, cr = { class: "option-category" }, ur = { class: "option-path" }, mr = { class: "action-buttons" }, vr = {
  key: 2,
  class: "unresolved"
}, fr = { class: "action-buttons" }, gr = /* @__PURE__ */ K({
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
  setup(t, { emit: r }) {
    const n = t, d = r, h = T(() => !!n.choice);
    T(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), T(() => {
      var l, m;
      return ((m = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const f = T(() => {
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
    function g(l) {
      d("option-selected", l);
    }
    function v(l) {
      if (!l) return "Unknown";
      const m = l / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, m) => (s(), o("div", {
      class: te(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Xi, [
        e("span", Zi, [
          m[7] || (m[7] = w("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: te(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Ji, [
        h.value ? (s(), o("div", er, [
          p(le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (_) => d("clear-choice"))
          }, {
            default: i(() => [...m[8] || (m[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", tr, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", sr, [
            (s(!0), o(V, null, J(t.options, (_, u) => (s(), o("label", {
              key: _.model.hash,
              class: te(["option-card", { selected: t.selectedOptionIndex === u }]),
              onClick: (I) => g(u)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: u,
                checked: t.selectedOptionIndex === u,
                onChange: (I) => g(u)
              }, null, 40, nr),
              e("div", ar, [
                e("div", lr, [
                  e("span", ir, a(_.model.filename), 1),
                  p(Zt, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", rr, [
                  e("span", dr, a(v(_.model.size)), 1),
                  e("span", cr, a(_.model.category), 1)
                ]),
                e("div", ur, a(_.model.relative_path), 1)
              ])
            ], 10, or))), 128))
          ]),
          e("div", mr, [
            p(le, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (_) => d("search"))
            }, {
              default: i(() => [...m[9] || (m[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (_) => d("download-url"))
            }, {
              default: i(() => [...m[10] || (m[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (_) => d("mark-optional"))
            }, {
              default: i(() => [...m[11] || (m[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", vr, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", fr, [
            p(le, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (_) => d("search"))
            }, {
              default: i(() => [...m[13] || (m[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (_) => d("download-url"))
            }, {
              default: i(() => [...m[14] || (m[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (_) => d("mark-optional"))
            }, {
              default: i(() => [...m[15] || (m[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), hr = /* @__PURE__ */ q(gr, [["__scopeId", "data-v-8a82fefa"]]), pr = { class: "model-resolution-step" }, yr = { class: "step-header" }, wr = { class: "step-info" }, kr = { class: "step-title" }, br = { class: "step-description" }, _r = { class: "stat-badge" }, $r = {
  key: 1,
  class: "step-body"
}, Cr = {
  key: 2,
  class: "empty-state"
}, xr = { class: "model-search-modal" }, Sr = { class: "model-modal-body" }, Ir = {
  key: 0,
  class: "model-search-results"
}, Er = ["onClick"], Mr = { class: "model-result-header" }, Rr = { class: "model-result-filename" }, zr = { class: "model-result-meta" }, Lr = { class: "model-result-category" }, Tr = { class: "model-result-size" }, Nr = {
  key: 0,
  class: "model-result-path"
}, Dr = {
  key: 1,
  class: "model-no-results"
}, Pr = {
  key: 2,
  class: "model-searching"
}, Ur = { class: "model-download-url-modal" }, Br = { class: "model-modal-body" }, Or = { class: "model-input-group" }, Fr = { class: "model-input-group" }, Ar = { class: "model-modal-actions" }, Vr = /* @__PURE__ */ K({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: r }) {
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
    function d(U) {
      var x;
      return U && ((x = n[U]) == null ? void 0 : x[0]) || null;
    }
    const h = t, f = r, g = C(0), v = C(!1), l = C(!1), m = C(""), _ = C(""), u = C(""), I = C([]), $ = C(!1), R = T(() => h.models[g.value]), b = T(() => h.models.some((U) => U.is_download_intent)), y = T(() => h.models.filter(
      (U) => h.modelChoices.has(U.filename) || U.is_download_intent
    ).length), k = T(() => {
      var x;
      if (!R.value) return "";
      const U = d((x = R.value.reference) == null ? void 0 : x.node_type);
      return U ? `${U}/${R.value.filename}` : "";
    }), z = T(() => {
      var x;
      if (!R.value) return "not-found";
      const U = h.modelChoices.get(R.value.filename);
      if (U)
        switch (U.action) {
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
      return R.value.is_download_intent ? "download" : (x = R.value.options) != null && x.length ? "ambiguous" : "not-found";
    }), D = T(() => {
      var x, se;
      if (!R.value) return;
      const U = h.modelChoices.get(R.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (x = U.selected_model) != null && x.filename ? `→ ${U.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return R.value.is_download_intent ? "Pending Download" : (se = R.value.options) != null && se.length ? `${R.value.options.length} matches` : "Not Found";
    });
    function N(U) {
      U >= 0 && U < h.models.length && (g.value = U);
    }
    function G() {
      R.value && f("mark-optional", R.value.filename);
    }
    function A() {
      R.value && f("skip", R.value.filename);
    }
    function F(U) {
      R.value && f("option-selected", R.value.filename, U);
    }
    function O() {
      R.value && f("clear-choice", R.value.filename);
    }
    function L() {
      R.value && (m.value = R.value.filename, v.value = !0);
    }
    function M() {
      R.value && (_.value = R.value.download_source || "", u.value = R.value.target_path || k.value, l.value = !0);
    }
    function H() {
      v.value = !1, m.value = "", I.value = [];
    }
    function oe() {
      l.value = !1, _.value = "", u.value = "";
    }
    function be() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function re(U) {
      R.value && H();
    }
    function X() {
      !R.value || !_.value.trim() || (f("download-url", R.value.filename, _.value.trim(), u.value.trim() || void 0), oe());
    }
    function Z(U) {
      if (!U) return "Unknown";
      const x = U / (1024 * 1024 * 1024);
      return x >= 1 ? `${x.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, x) => {
      var se, ee, Ce;
      return s(), o("div", pr, [
        e("div", yr, [
          e("div", wr, [
            e("h3", kr, a(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", br, a(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", _r, a(y.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        R.value ? (s(), S(ps, {
          key: 0,
          "item-name": R.value.filename,
          "current-index": g.value,
          "total-items": t.models.length,
          onPrev: x[0] || (x[0] = (we) => N(g.value - 1)),
          onNext: x[1] || (x[1] = (we) => N(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        R.value ? (s(), o("div", $r, [
          p(hr, {
            filename: R.value.filename,
            "node-type": ((se = R.value.reference) == null ? void 0 : se.node_type) || "Unknown",
            "has-multiple-options": !!((ee = R.value.options) != null && ee.length),
            options: R.value.options,
            choice: (Ce = t.modelChoices) == null ? void 0 : Ce.get(R.value.filename),
            status: z.value,
            "status-label": D.value,
            onMarkOptional: G,
            onSkip: A,
            onDownloadUrl: M,
            onSearch: L,
            onOptionSelected: F,
            onClearChoice: O
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Cr, [...x[5] || (x[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), S(Me, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: xe(H, ["self"])
          }, [
            e("div", xr, [
              e("div", { class: "model-modal-header" }, [
                x[6] || (x[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: H
                }, "✕")
              ]),
              e("div", Sr, [
                p(He, {
                  modelValue: m.value,
                  "onUpdate:modelValue": x[2] || (x[2] = (we) => m.value = we),
                  placeholder: "Search by filename, category...",
                  onInput: be
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (s(), o("div", Ir, [
                  (s(!0), o(V, null, J(I.value, (we) => (s(), o("div", {
                    key: we.hash,
                    class: "model-search-result-item",
                    onClick: (ce) => re()
                  }, [
                    e("div", Mr, [
                      e("code", Rr, a(we.filename), 1)
                    ]),
                    e("div", zr, [
                      e("span", Lr, a(we.category), 1),
                      e("span", Tr, a(Z(we.size)), 1)
                    ]),
                    we.relative_path ? (s(), o("div", Nr, a(we.relative_path), 1)) : c("", !0)
                  ], 8, Er))), 128))
                ])) : m.value && !$.value ? (s(), o("div", Dr, ' No models found matching "' + a(m.value) + '" ', 1)) : c("", !0),
                $.value ? (s(), o("div", Pr, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), S(Me, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: xe(oe, ["self"])
          }, [
            e("div", Ur, [
              e("div", { class: "model-modal-header" }, [
                x[7] || (x[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: oe
                }, "✕")
              ]),
              e("div", Br, [
                e("div", Or, [
                  x[8] || (x[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  p(He, {
                    modelValue: _.value,
                    "onUpdate:modelValue": x[3] || (x[3] = (we) => _.value = we),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Fr, [
                  x[9] || (x[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  p(He, {
                    modelValue: u.value,
                    "onUpdate:modelValue": x[4] || (x[4] = (we) => u.value = we),
                    placeholder: k.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Ar, [
                  p(le, {
                    variant: "secondary",
                    onClick: oe
                  }, {
                    default: i(() => [...x[10] || (x[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(le, {
                    variant: "primary",
                    disabled: !_.value.trim() || !u.value.trim(),
                    onClick: X
                  }, {
                    default: i(() => [...x[11] || (x[11] = [
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
}), Wr = /* @__PURE__ */ q(Vr, [["__scopeId", "data-v-c6acbada"]]), Gr = { class: "applying-step" }, jr = {
  key: 0,
  class: "phase-content"
}, Hr = {
  key: 1,
  class: "phase-content"
}, Kr = { class: "phase-description" }, qr = { class: "overall-progress" }, Yr = { class: "progress-bar" }, Qr = { class: "progress-label" }, Xr = { class: "install-list" }, Zr = { class: "install-icon" }, Jr = { key: 0 }, ed = {
  key: 1,
  class: "spinner"
}, td = { key: 2 }, sd = { key: 3 }, od = {
  key: 0,
  class: "install-error"
}, nd = {
  key: 2,
  class: "phase-content"
}, ad = { class: "phase-header" }, ld = { class: "phase-title" }, id = { class: "completion-summary" }, rd = {
  key: 0,
  class: "summary-item success"
}, dd = { class: "summary-text" }, cd = {
  key: 1,
  class: "summary-item error"
}, ud = { class: "summary-text" }, md = {
  key: 2,
  class: "failed-list"
}, vd = { class: "failed-node-id" }, fd = { class: "failed-error" }, gd = {
  key: 4,
  class: "summary-item success"
}, hd = {
  key: 5,
  class: "restart-prompt"
}, pd = {
  key: 3,
  class: "phase-content error"
}, yd = { class: "error-message" }, wd = /* @__PURE__ */ K({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const r = t, n = T(() => {
      var m, _;
      const v = ((m = r.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || r.progress.nodesToInstall.length;
      if (!v) return 0;
      const l = ((_ = r.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.length) ?? 0;
      return Math.round(l / v * 100);
    }), d = T(() => {
      var v;
      return ((v = r.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((l) => !l.success)) || [];
    }), h = T(() => d.value.length > 0);
    function f(v, l) {
      var _, u;
      const m = (_ = r.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.find((I) => I.node_id === v);
      return m ? m.success ? "complete" : "failed" : ((u = r.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) === l ? "installing" : "pending";
    }
    function g(v) {
      var l, m;
      return (m = (l = r.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((_) => _.node_id === v)) == null ? void 0 : m.error;
    }
    return (v, l) => {
      var m, _, u, I;
      return s(), o("div", Gr, [
        t.progress.phase === "resolving" ? (s(), o("div", jr, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Hr, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Kr, " Installing " + a((((m = t.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", qr, [
            e("div", Yr, [
              e("div", {
                class: "progress-fill",
                style: Xe({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Qr, a(((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.length) ?? 0) + " / " + a(((I = t.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Xr, [
            (s(!0), o(V, null, J(t.progress.nodesToInstall, ($, R) => (s(), o("div", {
              key: $,
              class: te(["install-item", f($, R)])
            }, [
              e("span", Zr, [
                f($, R) === "pending" ? (s(), o("span", Jr, "○")) : f($, R) === "installing" ? (s(), o("span", ed, "◌")) : f($, R) === "complete" ? (s(), o("span", td, "✓")) : f($, R) === "failed" ? (s(), o("span", sd, "✗")) : c("", !0)
              ]),
              e("code", null, a($), 1),
              g($) ? (s(), o("span", od, a(g($)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", nd, [
          e("div", ad, [
            e("span", {
              class: te(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", ld, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", id, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", rd, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", dd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", cd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", ud, a(d.value.length) + " package" + a(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", md, [
              (s(!0), o(V, null, J(d.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", vd, a($.node_id), 1),
                e("span", fd, a($.error), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = ($) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(d.value.length) + ") ", 1)) : c("", !0),
            h.value ? c("", !0) : (s(), o("div", gd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", hd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = ($) => v.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", pd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", yd, a(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), kd = /* @__PURE__ */ q(wd, [["__scopeId", "data-v-5efaae58"]]), bd = {
  key: 0,
  class: "loading-state"
}, _d = {
  key: 1,
  class: "wizard-content"
}, $d = {
  key: 0,
  class: "step-content"
}, Cd = { class: "analysis-summary" }, xd = { class: "analysis-header" }, Sd = { class: "summary-description" }, Id = { class: "stats-grid" }, Ed = { class: "stat-card" }, Md = { class: "stat-items" }, Rd = {
  key: 0,
  class: "stat-item success"
}, zd = { class: "stat-count" }, Ld = {
  key: 1,
  class: "stat-item info"
}, Td = { class: "stat-count" }, Nd = {
  key: 2,
  class: "stat-item warning"
}, Dd = { class: "stat-count" }, Pd = {
  key: 3,
  class: "stat-item error"
}, Ud = { class: "stat-count" }, Bd = { class: "stat-card" }, Od = { class: "stat-items" }, Fd = { class: "stat-item success" }, Ad = { class: "stat-count" }, Vd = {
  key: 0,
  class: "stat-item info"
}, Wd = { class: "stat-count" }, Gd = {
  key: 1,
  class: "stat-item warning"
}, jd = { class: "stat-count" }, Hd = {
  key: 2,
  class: "stat-item error"
}, Kd = { class: "stat-count" }, qd = {
  key: 0,
  class: "status-message warning"
}, Yd = { class: "status-text" }, Qd = {
  key: 1,
  class: "status-message info"
}, Xd = { class: "status-text" }, Zd = {
  key: 2,
  class: "status-message info"
}, Jd = { class: "status-text" }, ec = {
  key: 3,
  class: "status-message success"
}, tc = {
  key: 3,
  class: "step-content"
}, sc = { class: "review-summary" }, oc = { class: "review-stats" }, nc = { class: "review-stat" }, ac = { class: "stat-value" }, lc = { class: "review-stat" }, ic = { class: "stat-value" }, rc = { class: "review-stat" }, dc = { class: "stat-value" }, cc = { class: "review-stat" }, uc = { class: "stat-value" }, mc = {
  key: 0,
  class: "review-section"
}, vc = { class: "section-title" }, fc = { class: "review-items" }, gc = { class: "item-name" }, hc = { class: "item-choice" }, pc = {
  key: 0,
  class: "choice-badge install"
}, yc = {
  key: 1,
  class: "choice-badge skip"
}, wc = {
  key: 1,
  class: "review-section"
}, kc = { class: "section-title" }, bc = { class: "review-items" }, _c = { class: "item-name" }, $c = { class: "item-choice" }, Cc = {
  key: 0,
  class: "choice-badge install"
}, xc = {
  key: 1,
  class: "choice-badge optional"
}, Sc = {
  key: 2,
  class: "choice-badge skip"
}, Ic = {
  key: 1,
  class: "choice-badge pending"
}, Ec = {
  key: 2,
  class: "review-section"
}, Mc = { class: "section-title" }, Rc = { class: "review-items" }, zc = { class: "item-name" }, Lc = { class: "item-choice" }, Tc = {
  key: 0,
  class: "choice-badge install"
}, Nc = {
  key: 1,
  class: "choice-badge download"
}, Dc = {
  key: 2,
  class: "choice-badge optional"
}, Pc = {
  key: 3,
  class: "choice-badge skip"
}, Uc = {
  key: 4,
  class: "choice-badge skip"
}, Bc = {
  key: 1,
  class: "choice-badge download"
}, Oc = {
  key: 2,
  class: "choice-badge pending"
}, Fc = {
  key: 3,
  class: "no-choices"
}, Ac = /* @__PURE__ */ K({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: r }) {
    const n = t, d = r, { analyzeWorkflow: h, applyResolution: f, installNodes: g, queueModelDownloads: v, progress: l, resetProgress: m } = zl(), { loadPendingDownloads: _ } = Lt(), u = C(null), I = C(!1), $ = C(!1), R = C(null), b = C("analysis"), y = C([]), k = C(/* @__PURE__ */ new Map()), z = C(/* @__PURE__ */ new Map()), D = C(/* @__PURE__ */ new Set()), N = T(() => {
      const W = [
        { id: "analysis", label: "Analysis" }
      ];
      return (A.value || L.value) && W.push({ id: "nodes", label: "Nodes" }), (F.value || O.value) && W.push({ id: "models", label: "Models" }), W.push({ id: "review", label: "Review" }), b.value === "applying" && W.push({ id: "applying", label: "Applying" }), W;
    }), G = T(() => u.value ? u.value.stats.needs_user_input : !1), A = T(() => u.value ? u.value.nodes.unresolved.length > 0 || u.value.nodes.ambiguous.length > 0 : !1), F = T(() => u.value ? u.value.models.unresolved.length > 0 || u.value.models.ambiguous.length > 0 : !1), O = T(() => u.value ? u.value.stats.download_intents > 0 : !1), L = T(() => u.value ? u.value.stats.nodes_needing_installation > 0 : !1), M = T(() => u.value ? u.value.nodes.resolved.length : 0), H = T(() => {
      if (!u.value) return [];
      const W = u.value.nodes.resolved.filter((Y) => !Y.is_installed), B = /* @__PURE__ */ new Set();
      return W.filter((Y) => B.has(Y.package.package_id) ? !1 : (B.add(Y.package.package_id), !0));
    }), oe = T(() => {
      if (!u.value) return [];
      const W = u.value.nodes.resolved.filter((Y) => !Y.is_installed), B = /* @__PURE__ */ new Map();
      for (const Y of W) {
        const ge = B.get(Y.package.package_id);
        ge ? ge.node_types_count++ : B.set(Y.package.package_id, {
          package_id: Y.package.package_id,
          title: Y.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), be = T(() => H.value.filter((W) => !D.value.has(W.package.package_id))), re = T(() => u.value ? u.value.models.resolved.filter((W) => W.match_type === "download_intent").map((W) => ({
      filename: W.reference.widget_value,
      reference: W.reference,
      is_download_intent: !0,
      resolved_model: W.model,
      download_source: W.download_source,
      target_path: W.target_path
    })) : []), X = T(() => {
      if (!u.value) return [];
      const W = u.value.nodes.unresolved.map((Y) => ({
        node_type: Y.reference.node_type,
        reason: Y.reason,
        is_unresolved: !0,
        options: void 0
      })), B = u.value.nodes.ambiguous.map((Y) => ({
        node_type: Y.reference.node_type,
        has_multiple_options: !0,
        options: Y.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...W, ...B];
    }), Z = T(() => {
      if (!u.value) return [];
      const W = u.value.models.unresolved.map((Y) => ({
        filename: Y.reference.widget_value,
        reference: Y.reference,
        reason: Y.reason,
        is_unresolved: !0,
        options: void 0
      })), B = u.value.models.ambiguous.map((Y) => ({
        filename: Y.reference.widget_value,
        reference: Y.reference,
        has_multiple_options: !0,
        options: Y.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...W, ...B];
    }), U = T(() => {
      const W = Z.value, B = re.value.map((Y) => ({
        filename: Y.filename,
        reference: Y.reference,
        is_download_intent: !0,
        resolved_model: Y.resolved_model,
        download_source: Y.download_source,
        target_path: Y.target_path,
        options: void 0
      }));
      return [...W, ...B];
    }), x = T(() => {
      let W = be.value.length;
      for (const B of k.value.values())
        B.action === "install" && W++;
      for (const B of z.value.values())
        B.action === "select" && W++;
      return W;
    }), se = T(() => {
      let W = 0;
      for (const B of z.value.values())
        B.action === "download" && W++;
      return W;
    }), ee = T(() => {
      let W = 0;
      for (const B of k.value.values())
        B.action === "optional" && W++;
      for (const B of z.value.values())
        B.action === "optional" && W++;
      return W;
    }), Ce = T(() => {
      let W = D.value.size;
      for (const B of k.value.values())
        B.action === "skip" && W++;
      for (const B of z.value.values())
        B.action === "skip" && W++;
      for (const B of X.value)
        k.value.has(B.node_type) || W++;
      for (const B of Z.value)
        z.value.has(B.filename) || W++;
      return W;
    }), we = T(() => {
      const W = {};
      if (W.analysis = { resolved: 1, total: 1 }, A.value) {
        const B = X.value.length, Y = X.value.filter(
          (ge) => k.value.has(ge.node_type)
        ).length;
        W.nodes = { resolved: Y, total: B };
      }
      if (F.value || O.value) {
        const B = U.value.length, Y = U.value.filter(
          (ge) => z.value.has(ge.filename) || ge.is_download_intent
        ).length;
        W.models = { resolved: Y, total: B };
      }
      if (W.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const B = l.totalFiles || 1, Y = l.completedFiles.length;
        W.applying = { resolved: Y, total: B };
      }
      return W;
    });
    function ce(W) {
      b.value = W;
    }
    function Ve() {
      const W = N.value.findIndex((B) => B.id === b.value);
      W > 0 && (b.value = N.value[W - 1].id);
    }
    function ke() {
      const W = N.value.findIndex((B) => B.id === b.value);
      W < N.value.length - 1 && (b.value = N.value[W + 1].id);
    }
    async function We() {
      I.value = !0, R.value = null;
      try {
        u.value = await h(n.workflowName);
      } catch (W) {
        R.value = W instanceof Error ? W.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function Ze() {
      y.value.includes("analysis") || y.value.push("analysis"), A.value || L.value ? b.value = "nodes" : F.value || O.value ? b.value = "models" : b.value = "review";
    }
    function it(W) {
      k.value.set(W, { action: "optional" });
    }
    function pe(W) {
      k.value.set(W, { action: "skip" });
    }
    function Ge(W, B) {
      var ge;
      const Y = X.value.find((ze) => ze.node_type === W);
      (ge = Y == null ? void 0 : Y.options) != null && ge[B] && k.value.set(W, {
        action: "install",
        package_id: Y.options[B].package_id
      });
    }
    function Be(W, B) {
      k.value.set(W, {
        action: "install",
        package_id: B
      });
    }
    function Oe(W) {
      k.value.delete(W);
    }
    function dt(W) {
      D.value.has(W) ? D.value.delete(W) : D.value.add(W);
    }
    function me(W) {
      z.value.set(W, { action: "optional" });
    }
    function Te(W) {
      z.value.set(W, { action: "skip" });
    }
    function ct(W, B) {
      var ge;
      const Y = Z.value.find((ze) => ze.filename === W);
      (ge = Y == null ? void 0 : Y.options) != null && ge[B] && z.value.set(W, {
        action: "select",
        selected_model: Y.options[B].model
      });
    }
    function Je(W, B, Y) {
      z.value.set(W, {
        action: "download",
        url: B,
        target_path: Y
      });
    }
    function Ee(W) {
      z.value.delete(W);
    }
    async function ne() {
      var W;
      $.value = !0, R.value = null, m(), l.phase = "resolving", b.value = "applying";
      try {
        const B = await f(n.workflowName, k.value, z.value, D.value);
        B.models_to_download && B.models_to_download.length > 0 && v(n.workflowName, B.models_to_download);
        const Y = [
          ...B.nodes_to_install || [],
          ...be.value.map((ze) => ze.package.package_id)
        ];
        l.nodesToInstall = [...new Set(Y)], l.nodesToInstall.length > 0 && await g(n.workflowName), l.phase = "complete", await _();
        const ge = l.installError || ((W = l.nodeInstallProgress) == null ? void 0 : W.completedNodes.some((ze) => !ze.success));
        !l.needsRestart && !ge && setTimeout(() => {
          d("refresh"), d("install"), d("close");
        }, 1500);
      } catch (B) {
        R.value = B instanceof Error ? B.message : "Failed to apply resolution", l.error = R.value, l.phase = "error";
      } finally {
        $.value = !1;
      }
    }
    function P() {
      d("refresh"), d("restart"), d("close");
    }
    async function ae() {
      var B;
      const W = ((B = l.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((Y) => !Y.success).map((Y) => Y.node_id)) || [];
      if (W.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: W.length
        }, l.nodesToInstall = W, l.nodesInstalled = [], l.installError = void 0;
        try {
          await g(n.workflowName), l.phase = "complete";
        } catch (Y) {
          l.error = Y instanceof Error ? Y.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ie(We), (W, B) => (s(), S(ot, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: R.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (Y) => d("close"))
    }, {
      body: i(() => [
        I.value && !u.value ? (s(), o("div", bd, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : u.value ? (s(), o("div", _d, [
          p(Al, {
            steps: N.value,
            "current-step": b.value,
            "completed-steps": y.value,
            "step-stats": we.value,
            onStepChange: ce
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (s(), o("div", $d, [
            e("div", Cd, [
              e("div", xd, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Sd, " Found " + a(u.value.stats.total_nodes) + " nodes and " + a(u.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Id, [
                e("div", Ed, [
                  B[12] || (B[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Md, [
                    M.value > 0 ? (s(), o("div", Rd, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zd, a(M.value), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    u.value.stats.packages_needing_installation > 0 ? (s(), o("div", Ld, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Td, a(u.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    u.value.nodes.ambiguous.length > 0 ? (s(), o("div", Nd, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Dd, a(u.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    u.value.nodes.unresolved.length > 0 ? (s(), o("div", Pd, [
                      B[10] || (B[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ud, a(u.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Bd, [
                  B[21] || (B[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Od, [
                    e("div", Fd, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Ad, a(u.value.models.resolved.length - u.value.stats.download_intents), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    u.value.stats.download_intents > 0 ? (s(), o("div", Vd, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Wd, a(u.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    u.value.models.ambiguous.length > 0 ? (s(), o("div", Gd, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", jd, a(u.value.models.ambiguous.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    u.value.models.unresolved.length > 0 ? (s(), o("div", Hd, [
                      B[19] || (B[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Kd, a(u.value.models.unresolved.length), 1),
                      B[20] || (B[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              G.value ? (s(), o("div", qd, [
                B[22] || (B[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Yd, a(X.value.length + Z.value.length) + " items need your input", 1)
              ])) : L.value ? (s(), o("div", Qd, [
                B[23] || (B[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Xd, a(u.value.stats.packages_needing_installation) + " package" + a(u.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(u.value.stats.nodes_needing_installation) + " node type" + a(u.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(O.value ? `, ${u.value.stats.download_intents} model${u.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : O.value ? (s(), o("div", Zd, [
                B[24] || (B[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Jd, a(u.value.stats.download_intents) + " model" + a(u.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (s(), o("div", ec, [...B[25] || (B[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          b.value === "nodes" ? (s(), S(Qi, {
            key: 1,
            nodes: X.value,
            "node-choices": k.value,
            "auto-resolved-packages": oe.value,
            "skipped-packages": D.value,
            onMarkOptional: it,
            onSkip: pe,
            onOptionSelected: Ge,
            onManualEntry: Be,
            onClearChoice: Oe,
            onPackageSkip: dt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          b.value === "models" ? (s(), S(Wr, {
            key: 2,
            models: U.value,
            "model-choices": z.value,
            onMarkOptional: me,
            onSkip: Te,
            onOptionSelected: ct,
            onDownloadUrl: Je,
            onClearChoice: Ee
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          b.value === "review" ? (s(), o("div", tc, [
            e("div", sc, [
              B[30] || (B[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", oc, [
                e("div", nc, [
                  e("span", ac, a(x.value), 1),
                  B[26] || (B[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", lc, [
                  e("span", ic, a(se.value), 1),
                  B[27] || (B[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", rc, [
                  e("span", dc, a(ee.value), 1),
                  B[28] || (B[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", cc, [
                  e("span", uc, a(Ce.value), 1),
                  B[29] || (B[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              oe.value.length > 0 ? (s(), o("div", mc, [
                e("h4", vc, "Node Packages (" + a(oe.value.length) + ")", 1),
                e("div", fc, [
                  (s(!0), o(V, null, J(oe.value, (Y) => (s(), o("div", {
                    key: Y.package_id,
                    class: "review-item"
                  }, [
                    e("code", gc, a(Y.package_id), 1),
                    e("div", hc, [
                      D.value.has(Y.package_id) ? (s(), o("span", yc, "Skipped")) : (s(), o("span", pc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              X.value.length > 0 ? (s(), o("div", wc, [
                e("h4", kc, "Node Choices (" + a(X.value.length) + ")", 1),
                e("div", bc, [
                  (s(!0), o(V, null, J(X.value, (Y) => {
                    var ge, ze, ut, et;
                    return s(), o("div", {
                      key: Y.node_type,
                      class: "review-item"
                    }, [
                      e("code", _c, a(Y.node_type), 1),
                      e("div", $c, [
                        k.value.has(Y.node_type) ? (s(), o(V, { key: 0 }, [
                          ((ge = k.value.get(Y.node_type)) == null ? void 0 : ge.action) === "install" ? (s(), o("span", Cc, a((ze = k.value.get(Y.node_type)) == null ? void 0 : ze.package_id), 1)) : ((ut = k.value.get(Y.node_type)) == null ? void 0 : ut.action) === "optional" ? (s(), o("span", xc, " Optional ")) : ((et = k.value.get(Y.node_type)) == null ? void 0 : et.action) === "skip" ? (s(), o("span", Sc, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", Ic, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              U.value.length > 0 ? (s(), o("div", Ec, [
                e("h4", Mc, "Models (" + a(U.value.length) + ")", 1),
                e("div", Rc, [
                  (s(!0), o(V, null, J(U.value, (Y) => {
                    var ge, ze, ut, et, Tt, mt, vt;
                    return s(), o("div", {
                      key: Y.filename,
                      class: "review-item"
                    }, [
                      e("code", zc, a(Y.filename), 1),
                      e("div", Lc, [
                        z.value.has(Y.filename) ? (s(), o(V, { key: 0 }, [
                          ((ge = z.value.get(Y.filename)) == null ? void 0 : ge.action) === "select" ? (s(), o("span", Tc, a((ut = (ze = z.value.get(Y.filename)) == null ? void 0 : ze.selected_model) == null ? void 0 : ut.filename), 1)) : ((et = z.value.get(Y.filename)) == null ? void 0 : et.action) === "download" ? (s(), o("span", Nc, " Download ")) : ((Tt = z.value.get(Y.filename)) == null ? void 0 : Tt.action) === "optional" ? (s(), o("span", Dc, " Optional ")) : ((mt = z.value.get(Y.filename)) == null ? void 0 : mt.action) === "skip" ? (s(), o("span", Pc, " Skip ")) : ((vt = z.value.get(Y.filename)) == null ? void 0 : vt.action) === "cancel_download" ? (s(), o("span", Uc, " Cancel Download ")) : c("", !0)
                        ], 64)) : Y.is_download_intent ? (s(), o("span", Bc, " Pending Download ")) : (s(), o("span", Oc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              H.value.length === 0 && X.value.length === 0 && U.value.length === 0 ? (s(), o("div", Fc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          b.value === "applying" ? (s(), S(kd, {
            key: 4,
            progress: he(l),
            onRestart: P,
            onRetryFailed: ae
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        b.value !== "analysis" && b.value !== "applying" ? (s(), S(le, {
          key: 0,
          variant: "secondary",
          disabled: $.value,
          onClick: Ve
        }, {
          default: i(() => [...B[31] || (B[31] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        B[35] || (B[35] = e("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || he(l).phase === "complete" || he(l).phase === "error" ? (s(), S(le, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (Y) => d("close"))
        }, {
          default: i(() => [
            w(a(he(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        b.value === "analysis" ? (s(), S(le, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: Ze
        }, {
          default: i(() => [...B[32] || (B[32] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        b.value === "nodes" ? (s(), S(le, {
          key: 3,
          variant: "primary",
          onClick: ke
        }, {
          default: i(() => [
            w(a(F.value || O.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        b.value === "models" ? (s(), S(le, {
          key: 4,
          variant: "primary",
          onClick: ke
        }, {
          default: i(() => [...B[33] || (B[33] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        b.value === "review" ? (s(), S(le, {
          key: 5,
          variant: "primary",
          disabled: $.value,
          loading: $.value,
          onClick: ne
        }, {
          default: i(() => [...B[34] || (B[34] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Vc = /* @__PURE__ */ q(Ac, [["__scopeId", "data-v-0d3f93e6"]]), Wc = { class: "search-input-wrapper" }, Gc = ["value", "placeholder"], jc = /* @__PURE__ */ K({
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
    const n = t, d = r, h = C(null);
    let f;
    function g(l) {
      const m = l.target.value;
      n.debounce > 0 ? (clearTimeout(f), f = window.setTimeout(() => {
        d("update:modelValue", m);
      }, n.debounce)) : d("update:modelValue", m);
    }
    function v() {
      var l;
      d("update:modelValue", ""), d("clear"), (l = h.value) == null || l.focus();
    }
    return Ie(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (l, m) => (s(), o("div", Wc, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: g,
        onKeyup: rt(v, ["escape"])
      }, null, 40, Gc),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Hc = /* @__PURE__ */ q(jc, [["__scopeId", "data-v-266f857a"]]), Kc = { class: "search-bar" }, qc = /* @__PURE__ */ K({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, n) => (s(), o("div", Kc, [
      p(Hc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (d) => r.$emit("update:modelValue", d)),
        onClear: n[1] || (n[1] = (d) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), _t = /* @__PURE__ */ q(qc, [["__scopeId", "data-v-3d51bbfd"]]), Yc = { class: "section-group" }, Qc = {
  key: 0,
  class: "section-content"
}, Xc = /* @__PURE__ */ K({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const n = t, d = r, h = C(n.initiallyExpanded);
    function f() {
      n.collapsible && (h.value = !h.value, d("toggle", h.value));
    }
    return (g, v) => (s(), o("section", Yc, [
      p(Ae, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: f
      }, {
        default: i(() => [
          w(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (s(), o("div", Qc, [
        fe(g.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Se = /* @__PURE__ */ q(Xc, [["__scopeId", "data-v-c48e33ed"]]), Zc = { class: "item-header" }, Jc = {
  key: 0,
  class: "item-icon"
}, eu = { class: "item-info" }, tu = {
  key: 0,
  class: "item-title"
}, su = {
  key: 1,
  class: "item-subtitle"
}, ou = {
  key: 0,
  class: "item-details"
}, nu = {
  key: 1,
  class: "item-actions"
}, au = /* @__PURE__ */ K({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = t, d = T(() => n.status ? `status-${n.status}` : "");
    return (h, f) => (s(), o("div", {
      class: te(["item-card", { clickable: t.clickable, compact: t.compact }, d.value]),
      onClick: f[0] || (f[0] = (g) => t.clickable && h.$emit("click"))
    }, [
      e("div", Zc, [
        h.$slots.icon ? (s(), o("span", Jc, [
          fe(h.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", eu, [
          h.$slots.title ? (s(), o("div", tu, [
            fe(h.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          h.$slots.subtitle ? (s(), o("div", su, [
            fe(h.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      h.$slots.details ? (s(), o("div", ou, [
        fe(h.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      h.$slots.actions ? (s(), o("div", nu, [
        fe(h.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Le = /* @__PURE__ */ q(au, [["__scopeId", "data-v-cc435e0e"]]), lu = { class: "loading-state" }, iu = { class: "loading-message" }, ru = /* @__PURE__ */ K({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, n) => (s(), o("div", lu, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", iu, a(t.message), 1)
    ]));
  }
}), at = /* @__PURE__ */ q(ru, [["__scopeId", "data-v-ad8436c9"]]), du = { class: "error-state" }, cu = { class: "error-message" }, uu = /* @__PURE__ */ K({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, n) => (s(), o("div", du, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", cu, a(t.message), 1),
      t.retry ? (s(), S(Q, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (d) => r.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ q(uu, [["__scopeId", "data-v-5397be48"]]), mu = /* @__PURE__ */ K({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: n }) {
    const d = n, { getWorkflows: h } = Re();
    gs();
    const f = C([]), g = C(!1), v = C(null), l = C(""), m = C(!0), _ = C(!1), u = C(!1), I = C(!1), $ = C(null), R = T(
      () => f.value.filter((Z) => Z.status === "broken")
    ), b = T(
      () => f.value.filter((Z) => Z.status === "new")
    ), y = T(
      () => f.value.filter((Z) => Z.status === "modified")
    ), k = T(
      () => f.value.filter((Z) => Z.status === "synced")
    ), z = T(() => {
      if (!l.value.trim()) return f.value;
      const Z = l.value.toLowerCase();
      return f.value.filter((U) => U.name.toLowerCase().includes(Z));
    }), D = T(
      () => R.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), N = T(
      () => b.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), G = T(
      () => y.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), A = T(
      () => k.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), F = T(
      () => _.value ? A.value : A.value.slice(0, 5)
    );
    async function O(Z = !1) {
      g.value = !0, v.value = null;
      try {
        f.value = await h(Z);
      } catch (U) {
        v.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        g.value = !1;
      }
    }
    r({ loadWorkflows: O });
    function L(Z) {
      $.value = Z, u.value = !0;
    }
    function M(Z) {
      $.value = Z, I.value = !0;
    }
    function H() {
      alert("Bulk resolution not yet implemented");
    }
    function oe() {
      d("refresh");
    }
    async function be() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(Z) {
      const U = [];
      return Z.missing_nodes > 0 && U.push(`${Z.missing_nodes} missing node${Z.missing_nodes > 1 ? "s" : ""}`), Z.missing_models > 0 && U.push(`${Z.missing_models} missing model${Z.missing_models > 1 ? "s" : ""}`), Z.pending_downloads && Z.pending_downloads > 0 && U.push(`${Z.pending_downloads} pending download${Z.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function X(Z) {
      const U = Z.sync_state === "new" ? "New" : Z.sync_state === "modified" ? "Modified" : Z.sync_state === "synced" ? "Synced" : Z.sync_state;
      return Z.has_path_sync_issues && Z.models_needing_path_sync && Z.models_needing_path_sync > 0 ? `${Z.models_needing_path_sync} model path${Z.models_needing_path_sync > 1 ? "s" : ""} need${Z.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return Ie(O), (Z, U) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, { title: "WORKFLOWS" }, {
            actions: i(() => [
              R.value.length > 0 ? (s(), S(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: i(() => [...U[8] || (U[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(_t, {
            modelValue: l.value,
            "onUpdate:modelValue": U[0] || (U[0] = (x) => l.value = x),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          g.value ? (s(), S(at, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), S(lt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            D.value.length ? (s(), S(Se, {
              key: 0,
              title: "BROKEN",
              count: D.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(D.value, (x) => (s(), S(Le, {
                  key: x.name,
                  status: "broken"
                }, {
                  icon: i(() => [...U[9] || (U[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(a(x.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(re(x)), 1)
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => M(x.name)
                    }, {
                      default: i(() => [...U[10] || (U[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => L(x.name)
                    }, {
                      default: i(() => [...U[11] || (U[11] = [
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
            N.value.length ? (s(), S(Se, {
              key: 1,
              title: "NEW",
              count: N.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(N.value, (x) => (s(), S(Le, {
                  key: x.name,
                  status: x.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(a(x.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(a(x.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(X(x)), 1)
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => L(x.name)
                    }, {
                      default: i(() => [...U[12] || (U[12] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            G.value.length ? (s(), S(Se, {
              key: 2,
              title: "MODIFIED",
              count: G.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(G.value, (x) => (s(), S(Le, {
                  key: x.name,
                  status: x.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...U[13] || (U[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(a(x.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(X(x)), 1)
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => L(x.name)
                    }, {
                      default: i(() => [...U[14] || (U[14] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            A.value.length ? (s(), S(Se, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: U[2] || (U[2] = (x) => m.value = x)
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(F.value, (x) => (s(), S(Le, {
                  key: x.name,
                  status: x.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(a(x.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(a(x.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(X(x)), 1)
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => L(x.name)
                    }, {
                      default: i(() => [...U[15] || (U[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !_.value && A.value.length > 5 ? (s(), S(Q, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (x) => _.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    w(" View all " + a(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            z.value.length ? c("", !0) : (s(), S(Ke, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      u.value && $.value ? (s(), S(El, {
        key: 0,
        "workflow-name": $.value,
        onClose: U[3] || (U[3] = (x) => u.value = !1),
        onResolve: U[4] || (U[4] = (x) => M($.value)),
        onRefresh: U[5] || (U[5] = (x) => d("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      I.value && $.value ? (s(), S(Vc, {
        key: 1,
        "workflow-name": $.value,
        onClose: U[6] || (U[6] = (x) => I.value = !1),
        onInstall: oe,
        onRefresh: U[7] || (U[7] = (x) => d("refresh")),
        onRestart: be
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), vu = /* @__PURE__ */ q(mu, [["__scopeId", "data-v-b7939cb4"]]), fu = /* @__PURE__ */ K({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: te(["summary-bar", t.variant])
    }, [
      fe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ q(fu, [["__scopeId", "data-v-ccb7816e"]]), gu = {
  key: 0,
  class: "model-details"
}, hu = { class: "detail-section" }, pu = { class: "detail-row" }, yu = { class: "detail-value mono" }, wu = { class: "detail-row" }, ku = { class: "detail-value mono" }, bu = { class: "detail-row" }, _u = { class: "detail-value mono" }, $u = { class: "detail-row" }, Cu = { class: "detail-value" }, xu = { class: "detail-row" }, Su = { class: "detail-value" }, Iu = { class: "detail-row" }, Eu = { class: "detail-value" }, Mu = { class: "detail-section" }, Ru = { class: "section-header" }, zu = {
  key: 0,
  class: "locations-list"
}, Lu = { class: "location-path mono" }, Tu = {
  key: 0,
  class: "location-modified"
}, Nu = ["onClick"], Du = {
  key: 1,
  class: "empty-state"
}, Pu = { class: "detail-section" }, Uu = { class: "section-header" }, Bu = {
  key: 0,
  class: "sources-list"
}, Ou = { class: "source-type" }, Fu = ["href"], Au = ["disabled", "onClick"], Vu = {
  key: 1,
  class: "empty-state"
}, Wu = { class: "add-source-form" }, Gu = ["disabled"], ju = {
  key: 2,
  class: "source-error"
}, Hu = {
  key: 3,
  class: "source-success"
}, Ku = /* @__PURE__ */ K({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const n = t, { getModelDetails: d, addModelSource: h, removeModelSource: f, openFileLocation: g } = Re(), v = C(null), l = C(!0), m = C(null), _ = C(""), u = C(!1), I = C(null), $ = C(null), R = C(null), b = C(null);
    let y = null;
    function k(O, L = "success", M = 2e3) {
      y && clearTimeout(y), b.value = { message: O, type: L }, y = setTimeout(() => {
        b.value = null;
      }, M);
    }
    function z(O) {
      if (!O) return "Unknown";
      const L = 1024 * 1024 * 1024, M = 1024 * 1024;
      return O >= L ? `${(O / L).toFixed(1)} GB` : O >= M ? `${(O / M).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function D(O) {
      navigator.clipboard.writeText(O), k("Copied to clipboard!");
    }
    async function N(O) {
      try {
        await g(O), k("Opening file location...");
      } catch {
        k("Failed to open location", "error");
      }
    }
    async function G() {
      if (!(!_.value.trim() || !v.value)) {
        u.value = !0, $.value = null, R.value = null;
        try {
          await h(v.value.hash, _.value.trim()), R.value = "Source added successfully!", _.value = "", await F();
        } catch (O) {
          $.value = O instanceof Error ? O.message : "Failed to add source";
        } finally {
          u.value = !1;
        }
      }
    }
    async function A(O) {
      if (v.value) {
        I.value = O, $.value = null, R.value = null;
        try {
          await f(v.value.hash, O), k("Source removed"), await F();
        } catch (L) {
          $.value = L instanceof Error ? L.message : "Failed to remove source";
        } finally {
          I.value = null;
        }
      }
    }
    async function F() {
      l.value = !0, m.value = null;
      try {
        v.value = await d(n.identifier);
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ie(F), (O, L) => {
      var M;
      return s(), o(V, null, [
        p(ot, {
          title: `Model Details: ${((M = v.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: m.value,
          onClose: L[5] || (L[5] = (H) => O.$emit("close"))
        }, {
          body: i(() => {
            var H, oe, be, re;
            return [
              v.value ? (s(), o("div", gu, [
                e("section", hu, [
                  e("div", pu, [
                    L[6] || (L[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", yu, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[0] || (L[0] = (X) => D(v.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", wu, [
                    L[7] || (L[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", ku, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[1] || (L[1] = (X) => D(v.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", bu, [
                    L[8] || (L[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", _u, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[2] || (L[2] = (X) => D(v.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", $u, [
                    L[9] || (L[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Cu, a(z(v.value.size)), 1)
                  ]),
                  e("div", xu, [
                    L[10] || (L[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Su, a(v.value.category), 1)
                  ]),
                  e("div", Iu, [
                    L[11] || (L[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Eu, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Mu, [
                  e("h4", Ru, "Locations (" + a(((H = v.value.locations) == null ? void 0 : H.length) || 0) + ")", 1),
                  (oe = v.value.locations) != null && oe.length ? (s(), o("div", zu, [
                    (s(!0), o(V, null, J(v.value.locations, (X, Z) => (s(), o("div", {
                      key: Z,
                      class: "location-item"
                    }, [
                      e("span", Lu, a(X.path), 1),
                      X.modified ? (s(), o("span", Tu, "Modified: " + a(X.modified), 1)) : c("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => N(X.path)
                      }, " Open File Location ", 8, Nu)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Du, "No locations found"))
                ]),
                e("section", Pu, [
                  e("h4", Uu, "Download Sources (" + a(((be = v.value.sources) == null ? void 0 : be.length) || 0) + ")", 1),
                  (re = v.value.sources) != null && re.length ? (s(), o("div", Bu, [
                    (s(!0), o(V, null, J(v.value.sources, (X, Z) => (s(), o("div", {
                      key: Z,
                      class: "source-item"
                    }, [
                      e("span", Ou, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, Fu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === X.url,
                        onClick: (U) => A(X.url)
                      }, a(I.value === X.url ? "..." : "×"), 9, Au)
                    ]))), 128))
                  ])) : (s(), o("div", Vu, " No download sources configured ")),
                  e("div", Wu, [
                    Qe(e("input", {
                      "onUpdate:modelValue": L[3] || (L[3] = (X) => _.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [cs, _.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !_.value.trim() || u.value,
                      onClick: G
                    }, a(u.value ? "Adding..." : "Add Source"), 9, Gu)
                  ]),
                  $.value ? (s(), o("p", ju, a($.value), 1)) : c("", !0),
                  R.value ? (s(), o("p", Hu, a(R.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: L[4] || (L[4] = (H) => O.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), S(Me, { to: "body" }, [
          b.value ? (s(), o("div", {
            key: 0,
            class: te(["toast", b.value.type])
          }, a(b.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), ys = /* @__PURE__ */ q(Ku, [["__scopeId", "data-v-f15cbb56"]]), qu = /* @__PURE__ */ K({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const n = r, { getEnvironmentModels: d, getStatus: h } = Re(), f = C([]), g = C([]), v = C("production"), l = C(!1), m = C(null), _ = C(""), u = C(!1), I = C(null);
    function $() {
      u.value = !1, n("navigate", "model-index");
    }
    const R = T(
      () => f.value.reduce((F, O) => F + (O.size || 0), 0)
    ), b = T(() => {
      if (!_.value.trim()) return f.value;
      const F = _.value.toLowerCase();
      return f.value.filter((O) => O.filename.toLowerCase().includes(F));
    }), y = T(() => {
      if (!_.value.trim()) return g.value;
      const F = _.value.toLowerCase();
      return g.value.filter((O) => O.filename.toLowerCase().includes(F));
    }), k = T(() => {
      const F = {};
      for (const L of b.value) {
        const M = L.type || "other";
        F[M] || (F[M] = []), F[M].push(L);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([L], [M]) => {
        const H = O.indexOf(L), oe = O.indexOf(M);
        return H >= 0 && oe >= 0 ? H - oe : H >= 0 ? -1 : oe >= 0 ? 1 : L.localeCompare(M);
      }).map(([L, M]) => ({ type: L, models: M }));
    });
    function z(F) {
      if (!F) return "Unknown";
      const O = F / (1024 * 1024);
      return O >= 1024 ? `${(O / 1024).toFixed(1)} GB` : `${O.toFixed(0)} MB`;
    }
    function D(F) {
      I.value = F.hash || F.filename;
    }
    function N(F) {
      n("navigate", "model-index");
    }
    function G(F) {
      alert(`Download functionality not yet implemented for ${F}`);
    }
    async function A() {
      l.value = !0, m.value = null;
      try {
        const F = await d();
        f.value = F, g.value = [];
        const O = await h();
        v.value = O.environment || "production";
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ie(A), (F, O) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (L) => u.value = !0)
          })
        ]),
        search: i(() => [
          p(_t, {
            modelValue: _.value,
            "onUpdate:modelValue": O[1] || (O[1] = (L) => _.value = L),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(at, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), S(lt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            f.value.length ? (s(), S($t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(f.value.length) + " models • " + a(z(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(V, null, J(k.value, (L) => (s(), S(Se, {
              key: L.type,
              title: L.type.toUpperCase(),
              count: L.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(L.models, (M) => (s(), S(Le, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...O[4] || (O[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(a(M.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(z(M.size)), 1)
                  ]),
                  details: i(() => [
                    p(_e, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    p(_e, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => D(M)
                    }, {
                      default: i(() => [...O[5] || (O[5] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            y.value.length ? (s(), S(Se, {
              key: 1,
              title: "MISSING",
              count: y.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(y.value, (L) => (s(), S(Le, {
                  key: L.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...O[6] || (O[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(a(L.filename), 1)
                  ]),
                  subtitle: i(() => [...O[7] || (O[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var M;
                    return [
                      p(_e, {
                        label: "Required by:",
                        value: ((M = L.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    p(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => G(L.filename)
                    }, {
                      default: i(() => [...O[8] || (O[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => N(L.filename)
                    }, {
                      default: i(() => [...O[9] || (O[9] = [
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
            !b.value.length && !y.value.length ? (s(), S(Ke, {
              key: 2,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: u.value,
        title: "About Environment Models",
        onClose: O[2] || (O[2] = (L) => u.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            O[10] || (O[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            O[11] || (O[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          p(Q, {
            variant: "primary",
            onClick: $
          }, {
            default: i(() => [...O[12] || (O[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (s(), S(ys, {
        key: 0,
        identifier: I.value,
        onClose: O[3] || (O[3] = (L) => I.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Yu = /* @__PURE__ */ q(qu, [["__scopeId", "data-v-cb4f12b3"]]), Qu = {
  key: 0,
  class: "indexing-progress"
}, Xu = { class: "progress-info" }, Zu = { class: "progress-label" }, Ju = { class: "progress-count" }, em = { class: "progress-bar" }, tm = { class: "modal-content" }, sm = { class: "modal-header" }, om = { class: "modal-body" }, nm = { class: "input-group" }, am = { class: "current-path" }, lm = { class: "input-group" }, im = { class: "modal-footer" }, rm = { class: "modal-content" }, dm = { class: "modal-header" }, cm = { class: "modal-body" }, um = { class: "input-group" }, mm = { class: "input-group" }, vm = { class: "modal-footer" }, fm = /* @__PURE__ */ K({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: d,
      getModelsDirectory: h,
      setModelsDirectory: f
    } = Re(), { addToQueue: g } = Lt(), v = r, l = C([]), m = C(!1), _ = C(!1), u = C(null), I = C(""), $ = C(!1), R = C(null), b = C(!1), y = C(null), k = C(""), z = C(!1), D = C(!1), N = C(""), G = C(""), A = C(null), F = T(
      () => l.value.reduce((U, x) => U + (x.size || 0), 0)
    ), O = T(() => {
      if (!I.value.trim()) return l.value;
      const U = I.value.toLowerCase();
      return l.value.filter((x) => {
        const se = x, ee = x.sha256 || se.sha256_hash || "";
        return x.filename.toLowerCase().includes(U) || ee.toLowerCase().includes(U);
      });
    }), L = T(() => {
      const U = {};
      for (const se of O.value) {
        const ee = se.type || "other";
        U[ee] || (U[ee] = []), U[ee].push(se);
      }
      const x = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([se], [ee]) => {
        const Ce = x.indexOf(se), we = x.indexOf(ee);
        return Ce >= 0 && we >= 0 ? Ce - we : Ce >= 0 ? -1 : we >= 0 ? 1 : se.localeCompare(ee);
      }).map(([se, ee]) => ({ type: se, models: ee }));
    });
    function M(U) {
      if (!U) return "Unknown";
      const x = 1024 * 1024 * 1024, se = 1024 * 1024;
      return U >= x ? `${(U / x).toFixed(1)} GB` : U >= se ? `${(U / se).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function H(U) {
      R.value = U.hash || U.filename;
    }
    async function oe() {
      _.value = !0, u.value = null;
      try {
        const U = await d();
        await X(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        _.value = !1;
      }
    }
    async function be() {
      if (k.value.trim()) {
        z.value = !0, u.value = null;
        try {
          const U = await f(k.value.trim());
          y.value = U.path, b.value = !1, k.value = "", await X(), console.log(`Directory changed: ${U.models_indexed} models indexed`), v("refresh");
        } catch (U) {
          u.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          z.value = !1;
        }
      }
    }
    function re() {
      if (!N.value.trim() || !G.value.trim()) return;
      const U = G.value.split("/").pop() || "model.safetensors";
      g([{
        workflow: "__manual__",
        filename: U,
        url: N.value.trim(),
        targetPath: G.value.trim()
      }]), N.value = "", G.value = "", D.value = !1;
    }
    async function X() {
      m.value = !0, u.value = null;
      try {
        l.value = await n();
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function Z() {
      try {
        const U = await h();
        y.value = U.path;
      } catch {
      }
    }
    return Ie(() => {
      X(), Z();
    }), (U, x) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: x[2] || (x[2] = (se) => $.value = !0)
          }, {
            actions: i(() => [
              p(Q, {
                variant: "primary",
                size: "sm",
                disabled: _.value,
                onClick: oe
              }, {
                default: i(() => [
                  w(a(_.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              p(Q, {
                variant: "primary",
                size: "sm",
                onClick: x[0] || (x[0] = (se) => b.value = !0)
              }, {
                default: i(() => [...x[15] || (x[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              p(Q, {
                variant: "primary",
                size: "sm",
                onClick: x[1] || (x[1] = (se) => D.value = !0)
              }, {
                default: i(() => [...x[16] || (x[16] = [
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
        search: i(() => [
          A.value ? (s(), o("div", Qu, [
            e("div", Xu, [
              e("span", Zu, a(A.value.message), 1),
              e("span", Ju, a(A.value.current) + "/" + a(A.value.total), 1)
            ]),
            e("div", em, [
              e("div", {
                class: "progress-fill",
                style: Xe({ width: `${A.value.current / A.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          p(_t, {
            modelValue: I.value,
            "onUpdate:modelValue": x[3] || (x[3] = (se) => I.value = se),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value || A.value ? (s(), S(at, {
            key: 0,
            message: A.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : u.value ? (s(), S(lt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            l.value.length ? (s(), S($t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(l.value.length) + " models • " + a(M(F.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(V, null, J(L.value, (se) => (s(), S(Se, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(se.models, (ee) => (s(), S(Le, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...x[17] || (x[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(a(ee.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(M(ee.size)), 1)
                  ]),
                  details: i(() => [
                    p(_e, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ce) => H(ee)
                    }, {
                      default: i(() => [...x[18] || (x[18] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            O.value.length ? c("", !0) : (s(), S(Ke, {
              key: 1,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: x[4] || (x[4] = (se) => $.value = !1)
      }, {
        content: i(() => [...x[19] || (x[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      R.value ? (s(), S(ys, {
        key: 0,
        identifier: R.value,
        onClose: x[5] || (x[5] = (se) => R.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), S(Me, { to: "body" }, [
        b.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[9] || (x[9] = xe((se) => b.value = !1, ["self"]))
        }, [
          e("div", tm, [
            e("div", sm, [
              x[20] || (x[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: x[6] || (x[6] = (se) => b.value = !1)
              }, "✕")
            ]),
            e("div", om, [
              e("div", nm, [
                x[21] || (x[21] = e("label", null, "Current Directory", -1)),
                e("code", am, a(y.value || "Not set"), 1)
              ]),
              e("div", lm, [
                x[22] || (x[22] = e("label", null, "New Directory Path", -1)),
                p(He, {
                  modelValue: k.value,
                  "onUpdate:modelValue": x[7] || (x[7] = (se) => k.value = se),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              x[23] || (x[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", im, [
              p(le, {
                variant: "secondary",
                onClick: x[8] || (x[8] = (se) => b.value = !1)
              }, {
                default: i(() => [...x[24] || (x[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(le, {
                variant: "primary",
                disabled: !k.value.trim() || z.value,
                loading: z.value,
                onClick: be
              }, {
                default: i(() => [
                  w(a(z.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), S(Me, { to: "body" }, [
        D.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[14] || (x[14] = xe((se) => D.value = !1, ["self"]))
        }, [
          e("div", rm, [
            e("div", dm, [
              x[25] || (x[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: x[10] || (x[10] = (se) => D.value = !1)
              }, "✕")
            ]),
            e("div", cm, [
              e("div", um, [
                x[26] || (x[26] = e("label", null, "Download URL", -1)),
                p(He, {
                  modelValue: N.value,
                  "onUpdate:modelValue": x[11] || (x[11] = (se) => N.value = se),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", mm, [
                x[27] || (x[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                p(He, {
                  modelValue: G.value,
                  "onUpdate:modelValue": x[12] || (x[12] = (se) => G.value = se),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              x[28] || (x[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", vm, [
              p(le, {
                variant: "secondary",
                onClick: x[13] || (x[13] = (se) => D.value = !1)
              }, {
                default: i(() => [...x[29] || (x[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(le, {
                variant: "primary",
                disabled: !N.value.trim() || !G.value.trim(),
                onClick: re
              }, {
                default: i(() => [...x[30] || (x[30] = [
                  w(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), gm = /* @__PURE__ */ q(fm, [["__scopeId", "data-v-73b78d84"]]), hm = { class: "node-details" }, pm = { class: "status-row" }, ym = {
  key: 0,
  class: "detail-row"
}, wm = { class: "value" }, km = { class: "detail-row" }, bm = { class: "value" }, _m = {
  key: 1,
  class: "detail-row"
}, $m = { class: "value mono" }, Cm = {
  key: 2,
  class: "detail-row"
}, xm = ["href"], Sm = {
  key: 3,
  class: "detail-row"
}, Im = { class: "value mono small" }, Em = { class: "detail-row" }, Mm = {
  key: 0,
  class: "value"
}, Rm = {
  key: 1,
  class: "workflow-list"
}, zm = /* @__PURE__ */ K({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const n = t, d = r, h = T(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), f = T(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), g = T(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, l) => (s(), S(ot, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (m) => d("close"))
    }, {
      body: i(() => [
        e("div", hm, [
          e("div", pm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", h.value])
            }, a(f.value), 3)
          ]),
          t.node.version ? (s(), o("div", ym, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", wm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : c("", !0),
          e("div", km, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", bm, a(g.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", _m, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", $m, a(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", Cm, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              w(a(t.node.repository) + " ", 1),
              l[6] || (l[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, xm)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", Sm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Im, a(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Em, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Mm, " Not used in any workflows ")) : (s(), o("div", Rm, [
              (s(!0), o(V, null, J(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (m) => d("close"))
        }, {
          default: i(() => [...l[11] || (l[11] = [
            w(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Lm = /* @__PURE__ */ q(zm, [["__scopeId", "data-v-b342f626"]]), Tm = { key: 0 }, Nm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Dm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Pm = /* @__PURE__ */ K({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: r }) {
    const n = r, { getNodes: d, trackNodeAsDev: h, installNode: f, uninstallNode: g } = Re(), v = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = C(!1), m = C(null), _ = C(""), u = C(!1), I = C(null), $ = T(() => {
      if (!_.value.trim()) return v.value.nodes;
      const L = _.value.toLowerCase();
      return v.value.nodes.filter(
        (M) => {
          var H, oe;
          return M.name.toLowerCase().includes(L) || ((H = M.description) == null ? void 0 : H.toLowerCase().includes(L)) || ((oe = M.repository) == null ? void 0 : oe.toLowerCase().includes(L));
        }
      );
    }), R = T(
      () => $.value.filter((L) => L.installed && L.tracked)
    ), b = T(
      () => $.value.filter((L) => !L.installed && L.tracked)
    ), y = T(
      () => $.value.filter((L) => L.installed && !L.tracked)
    );
    function k(L) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[L] || L;
    }
    function z(L) {
      return !L.used_in_workflows || L.used_in_workflows.length === 0 ? "Not used in any workflows" : L.used_in_workflows.length === 1 ? L.used_in_workflows[0] : `${L.used_in_workflows.length} workflows`;
    }
    function D(L) {
      I.value = L;
    }
    function N() {
      n("open-node-manager");
    }
    async function G(L) {
      if (confirm(`Track "${L}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const M = await h(L);
          M.status === "success" ? (alert(`Node "${L}" is now tracked as development!`), await O()) : alert(`Failed to track node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function A(L) {
      if (confirm(`Remove untracked node "${L}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const M = await g(L);
          M.status === "success" ? (alert(`Node "${L}" removed!`), await O()) : alert(`Failed to remove node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function F(L) {
      if (confirm(`Install node "${L}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const M = await f(L);
          M.status === "success" ? (alert(`Node "${L}" installed successfully!`), await O()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function O() {
      l.value = !0, m.value = null;
      try {
        v.value = await d();
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ie(O), (L, M) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (H) => u.value = !0)
          }, {
            actions: i(() => [
              p(Q, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: i(() => [...M[5] || (M[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(_t, {
            modelValue: _.value,
            "onUpdate:modelValue": M[1] || (M[1] = (H) => _.value = H),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(at, {
            key: 0,
            message: "Loading nodes..."
          })) : m.value ? (s(), S(lt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            v.value.total_count ? (s(), S($t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(a(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (s(), o(V, { key: 0 }, [
                  w(" • " + a(v.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                v.value.untracked_count ? (s(), o(V, { key: 1 }, [
                  w(" • " + a(v.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            y.value.length ? (s(), S(Se, {
              key: 1,
              title: "UNTRACKED",
              count: y.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(y.value, (H) => (s(), S(Le, {
                  key: H.name,
                  status: "warning"
                }, {
                  icon: i(() => [...M[6] || (M[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(a(H.name), 1)
                  ]),
                  subtitle: i(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    p(_e, {
                      label: "Used by:",
                      value: z(H)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (oe) => D(H)
                    }, {
                      default: i(() => [...M[8] || (M[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => G(H.name)
                    }, {
                      default: i(() => [...M[9] || (M[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Q, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (oe) => A(H.name)
                    }, {
                      default: i(() => [...M[10] || (M[10] = [
                        w(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            R.value.length ? (s(), S(Se, {
              key: 2,
              title: "INSTALLED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(R.value, (H) => (s(), S(Le, {
                  key: H.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(a(H.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(a(H.name), 1)
                  ]),
                  subtitle: i(() => [
                    H.version ? (s(), o("span", Tm, a(H.source === "development" ? "" : "v") + a(H.version), 1)) : (s(), o("span", Nm, "version unknown")),
                    e("span", Dm, " • " + a(k(H.source)), 1)
                  ]),
                  details: i(() => [
                    p(_e, {
                      label: "Used by:",
                      value: z(H)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (oe) => D(H)
                    }, {
                      default: i(() => [...M[11] || (M[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: N
                    }, {
                      default: i(() => [...M[12] || (M[12] = [
                        w(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            b.value.length ? (s(), S(Se, {
              key: 3,
              title: "MISSING",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(b.value, (H) => (s(), S(Le, {
                  key: H.name,
                  status: "missing"
                }, {
                  icon: i(() => [...M[13] || (M[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(a(H.name), 1)
                  ]),
                  subtitle: i(() => [...M[14] || (M[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    p(_e, {
                      label: "Required by:",
                      value: z(H)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (oe) => D(H)
                    }, {
                      default: i(() => [...M[15] || (M[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => F(H.name)
                    }, {
                      default: i(() => [...M[16] || (M[16] = [
                        w(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !R.value.length && !b.value.length && !y.value.length ? (s(), S(Ke, {
              key: 4,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: u.value,
        title: "About Custom Nodes",
        onClose: M[3] || (M[3] = (H) => u.value = !1)
      }, {
        content: i(() => [...M[17] || (M[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            w(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            w(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            w(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          p(Q, {
            variant: "primary",
            onClick: M[2] || (M[2] = (H) => u.value = !1)
          }, {
            default: i(() => [...M[18] || (M[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (s(), S(Lm, {
        key: 0,
        node: I.value,
        onClose: M[4] || (M[4] = (H) => I.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), Um = /* @__PURE__ */ q(Pm, [["__scopeId", "data-v-4ac1465a"]]);
function ws(t) {
  return "has_conflicts" in t && t.has_conflicts === !0;
}
const Bm = { class: "remote-url-display" }, Om = ["title"], Fm = ["title"], Am = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Vm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Wm = /* @__PURE__ */ K({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, n = C(!1), d = T(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const f = r.url.slice(0, Math.floor(r.maxLength * 0.6)), g = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${f}...${g}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(r.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy URL:", f);
      }
    }
    return (f, g) => (s(), o("div", Bm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(d.value), 9, Om),
      e("button", {
        class: te(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Vm, [...g[1] || (g[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Am, [...g[0] || (g[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Fm)
    ]));
  }
}), ns = /* @__PURE__ */ q(Wm, [["__scopeId", "data-v-7768a58d"]]), Gm = { class: "remote-title" }, jm = {
  key: 0,
  class: "default-badge"
}, Hm = {
  key: 1,
  class: "sync-badge"
}, Km = {
  key: 0,
  class: "ahead"
}, qm = {
  key: 1,
  class: "behind"
}, Ym = {
  key: 0,
  class: "tracking-info"
}, Qm = /* @__PURE__ */ K({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const r = t, n = T(() => r.fetchingRemote === r.remote.name), d = T(() => r.remote.is_default), h = T(() => !!r.trackingBranch), f = T(() => r.syncStatus && r.syncStatus.behind > 0), g = T(() => r.syncStatus && r.syncStatus.ahead > 0);
    function v(l) {
      const m = new Date(l), u = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), I = Math.floor(u / 6e4);
      if (I < 1) return "Just now";
      if (I < 60) return `${I}m ago`;
      const $ = Math.floor(I / 60);
      if ($ < 24) return `${$}h ago`;
      const R = Math.floor($ / 24);
      return R < 7 ? `${R}d ago` : m.toLocaleDateString();
    }
    return (l, m) => (s(), S(Le, {
      status: d.value ? "synced" : void 0
    }, {
      icon: i(() => [
        w(a(d.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Gm, [
          e("span", null, a(t.remote.name), 1),
          d.value ? (s(), o("span", jm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", Hm, [
            t.syncStatus.ahead > 0 ? (s(), o("span", Km, "↑" + a(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", qm, "↓" + a(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        h.value ? (s(), o("span", Ym, " Tracking: " + a(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var _;
        return [
          p(_e, { label: "Fetch:" }, {
            default: i(() => [
              p(ns, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), S(_e, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              p(ns, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (_ = t.syncStatus) != null && _.last_fetch ? (s(), S(_e, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, a(v(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        p(Q, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: m[0] || (m[0] = (_) => l.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...m[5] || (m[5] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        p(Q, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: m[1] || (m[1] = (_) => l.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            w(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(Q, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: m[2] || (m[2] = (_) => l.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            w(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(Q, {
          variant: "secondary",
          size: "xs",
          onClick: m[3] || (m[3] = (_) => l.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...m[6] || (m[6] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        d.value ? c("", !0) : (s(), S(Q, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[4] || (m[4] = (_) => l.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...m[7] || (m[7] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Xm = /* @__PURE__ */ q(Qm, [["__scopeId", "data-v-f9018fc6"]]), Zm = ["for"], Jm = {
  key: 0,
  class: "base-form-field-required"
}, ev = { class: "base-form-field-input" }, tv = {
  key: 1,
  class: "base-form-field-error"
}, sv = {
  key: 2,
  class: "base-form-field-hint"
}, ov = /* @__PURE__ */ K({
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
    const r = t, n = T(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (d, h) => (s(), o("div", {
      class: te(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        w(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Jm, "*")) : c("", !0)
      ], 8, Zm)) : c("", !0),
      e("div", ev, [
        fe(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", tv, a(t.error), 1)) : t.hint ? (s(), o("span", sv, a(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Gt = /* @__PURE__ */ q(ov, [["__scopeId", "data-v-9a1cf296"]]), nv = { class: "remote-form" }, av = { class: "form-header" }, lv = { class: "form-body" }, iv = {
  key: 0,
  class: "form-error"
}, rv = { class: "form-actions" }, dv = /* @__PURE__ */ K({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const n = t, d = r, h = C({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), f = C(!1), g = C(null);
    bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = T(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!v.value || f.value)) {
        g.value = null, f.value = !0;
        try {
          d("submit", h.value);
        } catch (m) {
          g.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          f.value = !1;
        }
      }
    }
    return (m, _) => (s(), o("div", nv, [
      e("div", av, [
        p(Ae, null, {
          default: i(() => [
            w(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", lv, [
        p(Gt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            p(He, {
              modelValue: h.value.name,
              "onUpdate:modelValue": _[0] || (_[0] = (u) => h.value.name = u),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        p(Gt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            p(He, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": _[1] || (_[1] = (u) => h.value.fetchUrl = u),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p(Gt, { label: "Push URL (optional)" }, {
          default: i(() => [
            p(He, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": _[2] || (_[2] = (u) => h.value.pushUrl = u),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g.value ? (s(), o("div", iv, a(g.value), 1)) : c("", !0)
      ]),
      e("div", rv, [
        p(Q, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: f.value,
          onClick: l
        }, {
          default: i(() => [
            w(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        p(Q, {
          variant: "ghost",
          size: "md",
          onClick: _[3] || (_[3] = (u) => m.$emit("cancel"))
        }, {
          default: i(() => [..._[4] || (_[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), cv = /* @__PURE__ */ q(dv, [["__scopeId", "data-v-56021b18"]]), uv = { class: "conflict-summary-box" }, mv = { class: "summary-header" }, vv = { class: "summary-text" }, fv = { key: 0 }, gv = {
  key: 1,
  class: "all-resolved"
}, hv = { class: "summary-progress" }, pv = { class: "progress-bar" }, yv = { class: "progress-text" }, wv = /* @__PURE__ */ K({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const r = t, n = T(
      () => r.conflictCount > 0 ? r.resolvedCount / r.conflictCount * 100 : 0
    );
    return (d, h) => (s(), o("div", uv, [
      e("div", mv, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", vv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", fv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", gv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", hv, [
        e("div", pv, [
          e("div", {
            class: "progress-fill",
            style: Xe({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", yv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), kv = /* @__PURE__ */ q(wv, [["__scopeId", "data-v-4e9e6cc9"]]), bv = { class: "modal-header" }, _v = { class: "modal-title" }, $v = { class: "modal-body" }, Cv = {
  key: 0,
  class: "error-box"
}, xv = {
  key: 0,
  class: "error-hint"
}, Sv = {
  key: 1,
  class: "loading-state"
}, Iv = { class: "commit-summary" }, Ev = {
  key: 0,
  class: "changes-section"
}, Mv = {
  key: 0,
  class: "change-group",
  open: ""
}, Rv = { class: "change-count" }, zv = { class: "change-list" }, Lv = {
  key: 0,
  class: "conflict-badge"
}, Tv = {
  key: 1,
  class: "change-group"
}, Nv = { class: "change-count" }, Dv = { class: "change-list" }, Pv = {
  key: 2,
  class: "change-group"
}, Uv = { class: "change-count" }, Bv = { class: "change-list" }, Ov = {
  key: 2,
  class: "strategy-section"
}, Fv = { class: "radio-group" }, Av = { class: "radio-option" }, Vv = { class: "radio-option" }, Wv = { class: "radio-option" }, Gv = {
  key: 3,
  class: "up-to-date"
}, jv = { class: "modal-actions" }, as = "comfygit.pullModelStrategy", Hv = /* @__PURE__ */ K({
  __name: "PullModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pulling: { type: Boolean },
    error: {},
    conflictResolutions: {}
  },
  emits: ["close", "pull", "openConflictResolution"],
  setup(t, { emit: r }) {
    const n = t, d = r, h = C(localStorage.getItem(as) || "skip");
    bt(h, (y) => {
      localStorage.setItem(as, y);
    });
    const f = T(() => {
      var y;
      return ((y = n.error) == null ? void 0 : y.toLowerCase().includes("unrelated histories")) ?? !1;
    }), g = T(() => {
      if (!n.preview) return 0;
      const y = n.preview.changes.workflows;
      return y.added.length + y.modified.length + y.deleted.length;
    }), v = T(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = T(() => {
      var y;
      return g.value > 0 || v.value > 0 || (((y = n.preview) == null ? void 0 : y.changes.models.count) || 0) > 0;
    }), m = T(() => n.preview && ws(n.preview) ? n.preview : null), _ = T(() => {
      var y;
      return ((y = m.value) == null ? void 0 : y.conflicts.length) ?? 0;
    }), u = T(() => {
      var y;
      return ((y = n.conflictResolutions) == null ? void 0 : y.size) ?? 0;
    }), I = T(
      () => _.value > 0 && u.value === _.value
    ), $ = T(() => !(!n.preview || n.preview.has_uncommitted_changes || m.value && !I.value));
    function R(y) {
      return m.value ? m.value.conflicts.some((k) => k.identifier === y) : !1;
    }
    function b(y) {
      const k = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      d("pull", { modelStrategy: h.value, force: y, resolutions: k });
    }
    return (y, k) => {
      var z, D;
      return s(), S(Me, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[11] || (k[11] = (N) => y.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[10] || (k[10] = xe(() => {
            }, ["stop"]))
          }, [
            e("div", bv, [
              e("h3", _v, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (N) => y.$emit("close"))
              }, "✕")
            ]),
            e("div", $v, [
              t.error ? (s(), o("div", Cv, [
                k[13] || (k[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  k[12] || (k[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  f.value ? (s(), o("p", xv, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : c("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Sv, [...k[14] || (k[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                w(" Loading preview... ", -1)
              ])])) : (z = t.preview) != null && z.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
                k[15] || (k[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                k[16] || (k[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", Iv, [
                  k[17] || (k[17] = e("span", { class: "icon" }, "📥", -1)),
                  w(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (s(), o("div", Ev, [
                  k[21] || (k[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  g.value > 0 ? (s(), o("details", Mv, [
                    e("summary", null, [
                      k[18] || (k[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Rv, a(g.value) + " changes", 1)
                    ]),
                    e("div", zv, [
                      (s(!0), o(V, null, J(t.preview.changes.workflows.added, (N) => (s(), o("div", {
                        key: "a-" + N,
                        class: "change-item add"
                      }, " + " + a(N), 1))), 128)),
                      (s(!0), o(V, null, J(t.preview.changes.workflows.modified, (N) => (s(), o("div", {
                        key: "m-" + N,
                        class: "change-item modify"
                      }, [
                        w(" ~ " + a(N) + " ", 1),
                        R(N) ? (s(), o("span", Lv, "CONFLICT")) : c("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, J(t.preview.changes.workflows.deleted, (N) => (s(), o("div", {
                        key: "d-" + N,
                        class: "change-item delete"
                      }, " - " + a(N), 1))), 128))
                    ])
                  ])) : c("", !0),
                  v.value > 0 ? (s(), o("details", Tv, [
                    e("summary", null, [
                      k[19] || (k[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Nv, a(v.value) + " to install", 1)
                    ]),
                    e("div", Dv, [
                      (s(!0), o(V, null, J(t.preview.changes.nodes.to_install, (N) => (s(), o("div", {
                        key: N,
                        class: "change-item add"
                      }, " + " + a(N), 1))), 128))
                    ])
                  ])) : c("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Pv, [
                    e("summary", null, [
                      k[20] || (k[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Uv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Bv, [
                      (s(!0), o(V, null, J(t.preview.changes.models.referenced, (N) => (s(), o("div", {
                        key: N,
                        class: "change-item"
                      }, a(N), 1))), 128))
                    ])
                  ])) : c("", !0)
                ])) : c("", !0),
                m.value ? (s(), S(kv, {
                  key: 1,
                  "conflict-count": _.value,
                  "resolved-count": u.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : c("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Ov, [
                  k[26] || (k[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Fv, [
                    e("label", Av, [
                      Qe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[1] || (k[1] = (N) => h.value = N),
                        value: "all"
                      }, null, 512), [
                        [At, h.value]
                      ]),
                      k[22] || (k[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Vv, [
                      Qe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[2] || (k[2] = (N) => h.value = N),
                        value: "required"
                      }, null, 512), [
                        [At, h.value]
                      ]),
                      k[23] || (k[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Wv, [
                      Qe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[3] || (k[3] = (N) => h.value = N),
                        value: "skip"
                      }, null, 512), [
                        [At, h.value]
                      ]),
                      k[24] || (k[24] = e("span", null, "Skip model downloads", -1)),
                      k[25] || (k[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  k[27] || (k[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : c("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Gv, [
                  k[28] || (k[28] = e("span", { class: "icon" }, "✓", -1)),
                  w(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : c("", !0)
              ], 64)) : c("", !0)
            ]),
            e("div", jv, [
              p(Q, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (N) => y.$emit("close"))
              }, {
                default: i(() => [...k[29] || (k[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                p(Q, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: k[5] || (k[5] = (N) => b(!1))
                }, {
                  default: i(() => [...k[30] || (k[30] = [
                    w(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                p(Q, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: k[6] || (k[6] = (N) => b(!0))
                }, {
                  default: i(() => [...k[31] || (k[31] = [
                    w(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (D = t.preview) != null && D.has_uncommitted_changes ? (s(), S(Q, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: k[7] || (k[7] = (N) => b(!0))
              }, {
                default: i(() => [...k[32] || (k[32] = [
                  w(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                m.value && !I.value ? (s(), S(Q, {
                  key: 0,
                  variant: "primary",
                  onClick: k[8] || (k[8] = (N) => d("openConflictResolution"))
                }, {
                  default: i(() => [
                    w(" Resolve Conflicts (" + a(u.value) + "/" + a(_.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), S(Q, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !$.value,
                  onClick: k[9] || (k[9] = (N) => b(!1))
                }, {
                  default: i(() => [...k[33] || (k[33] = [
                    w(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Kv = /* @__PURE__ */ q(Hv, [["__scopeId", "data-v-2b4d83ac"]]), qv = { class: "modal-header" }, Yv = { class: "modal-title" }, Qv = { class: "modal-body" }, Xv = {
  key: 0,
  class: "loading-state"
}, Zv = {
  key: 1,
  class: "warning-box"
}, Jv = {
  key: 0,
  class: "commits-section"
}, ef = { class: "commit-list" }, tf = { class: "commit-hash" }, sf = { class: "commit-message" }, of = { class: "commit-date" }, nf = { class: "force-option" }, af = { class: "checkbox-option" }, lf = { class: "commit-summary" }, rf = {
  key: 0,
  class: "commits-section"
}, df = { class: "commit-list" }, cf = { class: "commit-hash" }, uf = { class: "commit-message" }, mf = { class: "commit-date" }, vf = {
  key: 1,
  class: "up-to-date"
}, ff = { class: "modal-actions" }, gf = /* @__PURE__ */ K({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: r }) {
    const n = r, d = C(!1);
    function h(f) {
      n("push", { force: f });
    }
    return (f, g) => {
      var v, l, m;
      return s(), S(Me, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (_) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = xe(() => {
            }, ["stop"]))
          }, [
            e("div", qv, [
              e("h3", Yv, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (_) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", Qv, [
              t.loading ? (s(), o("div", Xv, [...g[8] || (g[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                w(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (s(), o("div", Zv, [...g[9] || (g[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (s(), o(V, { key: 2 }, [
                g[13] || (g[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Jv, [
                  g[10] || (g[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", ef, [
                    (s(!0), o(V, null, J(t.preview.commits, (_) => (s(), o("div", {
                      key: _.hash,
                      class: "commit-item"
                    }, [
                      e("span", tf, a(_.short_hash || _.hash.slice(0, 7)), 1),
                      e("span", sf, a(_.message), 1),
                      e("span", of, a(_.date_relative || _.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                e("div", nf, [
                  e("label", af, [
                    Qe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": g[1] || (g[1] = (_) => d.value = _)
                    }, null, 512), [
                      [us, d.value]
                    ]),
                    g[11] || (g[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  g[12] || (g[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", lf, [
                  g[14] || (g[14] = e("span", { class: "icon" }, "📤", -1)),
                  w(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", rf, [
                  g[15] || (g[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", df, [
                    (s(!0), o(V, null, J(t.preview.commits, (_) => (s(), o("div", {
                      key: _.hash,
                      class: "commit-item"
                    }, [
                      e("span", cf, a(_.short_hash || _.hash.slice(0, 7)), 1),
                      e("span", uf, a(_.message), 1),
                      e("span", mf, a(_.date_relative || _.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", vf, [
                  g[16] || (g[16] = e("span", { class: "icon" }, "✓", -1)),
                  w(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : c("", !0)
            ]),
            e("div", ff, [
              p(Q, {
                variant: "secondary",
                onClick: g[2] || (g[2] = (_) => f.$emit("close"))
              }, {
                default: i(() => [...g[17] || (g[17] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                p(Q, {
                  variant: "secondary",
                  onClick: g[3] || (g[3] = (_) => f.$emit("pull-first"))
                }, {
                  default: i(() => [...g[18] || (g[18] = [
                    w(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                p(Q, {
                  variant: "destructive",
                  disabled: !d.value,
                  loading: t.pushing,
                  onClick: g[4] || (g[4] = (_) => h(!0))
                }, {
                  default: i(() => [...g[19] || (g[19] = [
                    w(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), S(Q, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: g[5] || (g[5] = (_) => h(!1))
              }, {
                default: i(() => [...g[20] || (g[20] = [
                  w(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), hf = /* @__PURE__ */ q(gf, [["__scopeId", "data-v-bc6ded53"]]), pf = { class: "resolution-choice-group" }, yf = ["disabled"], wf = ["disabled"], kf = /* @__PURE__ */ K({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("div", pf, [
      e("button", {
        class: te(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (d) => r.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, yf),
      e("button", {
        class: te(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (d) => r.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, wf)
    ]));
  }
}), bf = /* @__PURE__ */ q(kf, [["__scopeId", "data-v-985715ed"]]), _f = { class: "conflict-header" }, $f = { class: "conflict-info" }, Cf = { class: "conflict-identifier" }, xf = { class: "category-badge" }, Sf = { class: "identifier-name" }, If = { class: "conflict-description" }, Ef = {
  key: 0,
  class: "resolved-badge"
}, Mf = { class: "resolved-text" }, Rf = {
  key: 0,
  class: "conflict-comparison"
}, zf = { class: "comparison-item mine" }, Lf = { class: "comparison-value" }, Tf = { class: "comparison-item theirs" }, Nf = { class: "comparison-value" }, Df = {
  key: 1,
  class: "conflict-hashes"
}, Pf = { class: "hash-item" }, Uf = { class: "hash-item" }, Bf = { class: "conflict-actions" }, Of = /* @__PURE__ */ K({
  __name: "ConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: r }) {
    const n = t, d = r, h = C(n.resolution);
    bt(() => n.resolution, (I) => {
      h.value = I;
    }), bt(h, (I) => {
      I && d("resolve", I);
    });
    const f = T(() => h.value !== null), g = T(() => {
      switch (n.conflict.category) {
        case "workflow":
          return "Workflow";
        case "node":
          return "Node";
        case "dependency":
          return "Dependency";
      }
    }), v = T(() => {
      if (n.conflict.conflict_type === "both_modified")
        return "Both you and remote modified this";
      if (n.conflict.category === "node") {
        const I = n.conflict;
        if (I.base_deleted) return "You deleted, remote modified";
        if (I.target_deleted) return "You modified, remote deleted";
      }
      return "Conflicting changes detected";
    }), l = T(
      () => n.conflict.category === "node" || n.conflict.category === "dependency"
    ), m = T(() => n.conflict.category === "node" ? n.conflict.base_version : n.conflict.category === "dependency" ? n.conflict.base_spec : null), _ = T(() => n.conflict.category === "node" ? n.conflict.target_version : n.conflict.category === "dependency" ? n.conflict.target_spec : null), u = T(() => {
      switch (h.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (I, $) => {
      var R, b;
      return s(), o("div", {
        class: te(["conflict-item", { resolved: f.value }])
      }, [
        e("div", _f, [
          $[2] || ($[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", $f, [
            e("div", Cf, [
              e("span", xf, a(g.value), 1),
              e("code", Sf, a(t.conflict.identifier), 1)
            ]),
            e("div", If, a(v.value), 1)
          ]),
          f.value ? (s(), o("div", Ef, [
            $[1] || ($[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Mf, a(u.value), 1)
          ])) : c("", !0)
        ]),
        l.value ? (s(), o("div", Rf, [
          e("div", zf, [
            $[3] || ($[3] = e("span", { class: "comparison-label" }, "Your version:", -1)),
            e("code", Lf, a(m.value || "(deleted)"), 1)
          ]),
          $[5] || ($[5] = e("span", { class: "comparison-arrow" }, "→", -1)),
          e("div", Tf, [
            $[4] || ($[4] = e("span", { class: "comparison-label" }, "Their version:", -1)),
            e("code", Nf, a(_.value || "(deleted)"), 1)
          ])
        ])) : c("", !0),
        t.conflict.category === "workflow" ? (s(), o("div", Df, [
          e("span", Pf, [
            $[6] || ($[6] = w("Your: ", -1)),
            e("code", null, a(((R = t.conflict.base_hash) == null ? void 0 : R.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Uf, [
            $[7] || ($[7] = w("Theirs: ", -1)),
            e("code", null, a(((b = t.conflict.target_hash) == null ? void 0 : b.slice(0, 8)) || "n/a"), 1)
          ])
        ])) : c("", !0),
        e("div", Bf, [
          p(bf, {
            modelValue: h.value,
            "onUpdate:modelValue": $[0] || ($[0] = (y) => h.value = y),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), jt = /* @__PURE__ */ q(Of, [["__scopeId", "data-v-128d4bde"]]), Ff = { class: "resolution-content" }, Af = { class: "resolution-header" }, Vf = { class: "header-stats" }, Wf = { class: "stat" }, Gf = { class: "stat-value" }, jf = { class: "stat resolved" }, Hf = { class: "stat-value" }, Kf = {
  key: 0,
  class: "stat pending"
}, qf = { class: "stat-value" }, Yf = { class: "conflicts-list" }, Qf = {
  key: 0,
  class: "conflict-category"
}, Xf = { class: "category-title" }, Zf = {
  key: 1,
  class: "conflict-category"
}, Jf = { class: "category-title" }, eg = {
  key: 2,
  class: "conflict-category"
}, tg = { class: "category-title" }, sg = {
  key: 0,
  class: "all-resolved-message"
}, og = /* @__PURE__ */ K({
  __name: "ConflictResolutionModal",
  props: {
    conflicts: {},
    resolutions: {},
    operationType: {},
    applying: { type: Boolean }
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: r }) {
    const n = t, d = r, h = T(
      () => n.conflicts.filter((b) => b.category === "workflow")
    ), f = T(
      () => n.conflicts.filter((b) => b.category === "node")
    ), g = T(
      () => n.conflicts.filter((b) => b.category === "dependency")
    ), v = T(() => n.resolutions.size), l = T(() => n.conflicts.length - v.value), m = T(() => v.value === n.conflicts.length), _ = T(() => n.operationType === "pull" ? "Pull with Resolutions" : "Merge with Resolutions");
    function u(b) {
      const y = n.resolutions.get(b);
      return (y == null ? void 0 : y.resolution) ?? null;
    }
    function I(b, y) {
      d("resolve", b, y);
    }
    function $() {
      d("close");
    }
    function R() {
      d("apply");
    }
    return (b, y) => (s(), S(ot, {
      title: `Resolve Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: $
    }, {
      body: i(() => [
        e("div", Ff, [
          e("div", Af, [
            e("div", Vf, [
              e("div", Wf, [
                e("span", Gf, a(t.conflicts.length), 1),
                y[0] || (y[0] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", jf, [
                e("span", Hf, a(v.value), 1),
                y[1] || (y[1] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              l.value > 0 ? (s(), o("div", Kf, [
                e("span", qf, a(l.value), 1),
                y[2] || (y[2] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : c("", !0)
            ]),
            y[3] || (y[3] = e("p", { class: "header-hint" }, " Select a resolution for each conflict. You can keep your local changes or accept incoming changes. ", -1))
          ]),
          e("div", Yf, [
            h.value.length > 0 ? (s(), o("div", Qf, [
              e("h4", Xf, "Workflows (" + a(h.value.length) + ")", 1),
              (s(!0), o(V, null, J(h.value, (k) => (s(), S(jt, {
                key: k.identifier,
                conflict: k,
                resolution: u(k.identifier),
                onResolve: (z) => I(k, z)
              }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
            ])) : c("", !0),
            f.value.length > 0 ? (s(), o("div", Zf, [
              e("h4", Jf, "Nodes (" + a(f.value.length) + ")", 1),
              (s(!0), o(V, null, J(f.value, (k) => (s(), S(jt, {
                key: k.identifier,
                conflict: k,
                resolution: u(k.identifier),
                onResolve: (z) => I(k, z)
              }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
            ])) : c("", !0),
            g.value.length > 0 ? (s(), o("div", eg, [
              e("h4", tg, "Dependencies (" + a(g.value.length) + ")", 1),
              (s(!0), o(V, null, J(g.value, (k) => (s(), S(jt, {
                key: k.identifier,
                conflict: k,
                resolution: u(k.identifier),
                onResolve: (z) => I(k, z)
              }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
            ])) : c("", !0)
          ]),
          m.value ? (s(), o("div", sg, [
            y[4] || (y[4] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(_.value) + '" to continue.', 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: $
        }, {
          default: i(() => [...y[5] || (y[5] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[6] || (y[6] = e("div", { class: "footer-spacer" }, null, -1)),
        p(le, {
          variant: "primary",
          disabled: !m.value || t.applying,
          loading: t.applying,
          onClick: R
        }, {
          default: i(() => [
            w(a(_.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ng = /* @__PURE__ */ q(og, [["__scopeId", "data-v-7723462c"]]), ag = { key: 0 }, lg = /* @__PURE__ */ K({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: n,
      removeRemote: d,
      updateRemoteUrl: h,
      fetchRemote: f,
      getRemoteSyncStatus: g,
      getPullPreview: v,
      pullFromRemote: l,
      getPushPreview: m,
      pushToRemote: _
    } = Re(), u = C([]), I = C(null), $ = C({}), R = C(!1), b = C(null), y = C(""), k = C(!1), z = C(null), D = C(!1), N = C("add"), G = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), A = T(() => {
      if (!y.value.trim()) return u.value;
      const ne = y.value.toLowerCase();
      return u.value.filter(
        (P) => P.name.toLowerCase().includes(ne) || P.fetch_url.toLowerCase().includes(ne) || P.push_url.toLowerCase().includes(ne)
      );
    });
    function F(ne) {
      var P;
      return ((P = I.value) == null ? void 0 : P.remote) === ne;
    }
    async function O() {
      R.value = !0, b.value = null;
      try {
        const ne = await r();
        u.value = ne.remotes, I.value = ne.current_branch_tracking || null, await Promise.all(
          ne.remotes.map(async (P) => {
            const ae = await g(P.name);
            ae && ($.value[P.name] = ae);
          })
        );
      } catch (ne) {
        b.value = ne instanceof Error ? ne.message : "Failed to load remotes";
      } finally {
        R.value = !1;
      }
    }
    function L() {
      N.value = "add", G.value = { name: "", fetchUrl: "", pushUrl: "" }, D.value = !0;
    }
    function M(ne) {
      const P = u.value.find((ae) => ae.name === ne);
      P && (N.value = "edit", G.value = {
        name: P.name,
        fetchUrl: P.fetch_url,
        pushUrl: P.push_url
      }, D.value = !0);
    }
    async function H(ne) {
      try {
        N.value === "add" ? await n(ne.name, ne.fetchUrl) : await h(ne.name, ne.fetchUrl, ne.pushUrl || void 0), D.value = !1, await O();
      } catch (P) {
        b.value = P instanceof Error ? P.message : "Operation failed";
      }
    }
    function oe() {
      D.value = !1, G.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function be(ne) {
      z.value = ne;
      try {
        await f(ne);
        const P = await g(ne);
        P && ($.value[ne] = P);
      } catch (P) {
        b.value = P instanceof Error ? P.message : "Fetch failed";
      } finally {
        z.value = null;
      }
    }
    async function re(ne) {
      if (confirm(`Remove remote "${ne}"?`))
        try {
          await d(ne), await O();
        } catch (P) {
          b.value = P instanceof Error ? P.message : "Failed to remove remote";
        }
    }
    function X() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Z = C(!1), U = C(!1), x = C(null), se = C(null), ee = C(!1), Ce = C(!1), we = C(!1), ce = C(null), Ve = C(null), ke = C(!1), We = C(/* @__PURE__ */ new Map()), Ze = T(() => x.value && ws(x.value) ? x.value : null);
    async function it(ne) {
      ce.value = ne, Z.value = !0, ee.value = !0, x.value = null, Ve.value = null;
      try {
        x.value = await v(ne);
      } catch (P) {
        b.value = P instanceof Error ? P.message : "Failed to load pull preview";
      } finally {
        ee.value = !1;
      }
    }
    async function pe(ne) {
      ce.value = ne, U.value = !0, ee.value = !0, se.value = null;
      try {
        se.value = await m(ne);
      } catch (P) {
        b.value = P instanceof Error ? P.message : "Failed to load push preview";
      } finally {
        ee.value = !1;
      }
    }
    function Ge() {
      Z.value = !1, x.value = null, Ve.value = null, ce.value = null;
    }
    function Be() {
      U.value = !1, se.value = null, ce.value = null;
    }
    async function Oe(ne) {
      if (ce.value) {
        Ce.value = !0, Ve.value = null;
        try {
          await l(ce.value, ne), Ge(), We.value.clear(), await O();
        } catch (P) {
          Ve.value = P instanceof Error ? P.message : "Pull failed";
        } finally {
          Ce.value = !1;
        }
      }
    }
    async function dt(ne) {
      if (ce.value) {
        we.value = !0;
        try {
          await _(ce.value, ne), Be(), await O();
        } catch (P) {
          b.value = P instanceof Error ? P.message : "Push failed";
        } finally {
          we.value = !1;
        }
      }
    }
    function me() {
      const ne = ce.value;
      Be(), ne && it(ne);
    }
    function Te() {
      Ze.value && (Z.value = !1, ke.value = !0);
    }
    function ct(ne, P) {
      We.value.set(ne.identifier, {
        identifier: ne.identifier,
        category: ne.category,
        resolution: P
      });
    }
    function Je() {
      ke.value = !1, Z.value = !0;
    }
    async function Ee() {
      ke.value = !1;
      const ne = Array.from(We.value.values());
      await Oe({
        modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
        force: !1,
        resolutions: ne
      });
    }
    return Ie(O), (ne, P) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (ae) => k.value = !0)
          }, {
            actions: i(() => [
              D.value ? c("", !0) : (s(), S(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: i(() => [...P[3] || (P[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          D.value ? c("", !0) : (s(), S(_t, {
            key: 0,
            modelValue: y.value,
            "onUpdate:modelValue": P[1] || (P[1] = (ae) => y.value = ae),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          R.value ? (s(), S(at, {
            key: 0,
            message: "Loading remotes..."
          })) : b.value ? (s(), S(lt, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            D.value ? (s(), S(cv, {
              key: 0,
              mode: N.value,
              "remote-name": G.value.name,
              "fetch-url": G.value.fetchUrl,
              "push-url": G.value.pushUrl,
              onSubmit: H,
              onCancel: oe
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            u.value.length && !D.value ? (s(), S($t, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(u.value.length) + " remote" + a(u.value.length !== 1 ? "s" : "") + " ", 1),
                I.value ? (s(), o("span", ag, " • Tracking: " + a(I.value.remote) + "/" + a(I.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            A.value.length && !D.value ? (s(), S(Se, {
              key: 2,
              title: "REMOTES",
              count: A.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, J(A.value, (ae) => {
                  var W;
                  return s(), S(Xm, {
                    key: ae.name,
                    remote: ae,
                    "sync-status": $.value[ae.name],
                    "tracking-branch": F(ae.name) ? (W = I.value) == null ? void 0 : W.branch : void 0,
                    "fetching-remote": z.value,
                    onFetch: be,
                    onEdit: M,
                    onRemove: re,
                    onPull: it,
                    onPush: pe
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !A.value.length && !D.value ? (s(), S(Ke, {
              key: 3,
              icon: "🌐",
              message: y.value ? `No remotes match '${y.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                p(Q, {
                  variant: "primary",
                  onClick: L
                }, {
                  default: i(() => [...P[4] || (P[4] = [
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
      p(nt, {
        show: k.value,
        title: "About Git Remotes",
        onClose: P[2] || (P[2] = (ae) => k.value = !1)
      }, {
        content: i(() => [...P[5] || (P[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          p(Q, {
            variant: "link",
            onClick: X
          }, {
            default: i(() => [...P[6] || (P[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p(Kv, {
        show: Z.value,
        "remote-name": ce.value || "",
        preview: x.value,
        loading: ee.value,
        pulling: Ce.value,
        error: Ve.value,
        "conflict-resolutions": We.value,
        onClose: Ge,
        onPull: Oe,
        onOpenConflictResolution: Te
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      p(hf, {
        show: U.value,
        "remote-name": ce.value || "",
        preview: se.value,
        loading: ee.value,
        pushing: we.value,
        onClose: Be,
        onPush: dt,
        onPullFirst: me
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ke.value && Ze.value ? (s(), S(ng, {
        key: 0,
        conflicts: Ze.value.conflicts,
        resolutions: We.value,
        "operation-type": "pull",
        applying: Ce.value,
        onClose: Je,
        onResolve: ct,
        onApply: Ee
      }, null, 8, ["conflicts", "resolutions", "applying"])) : c("", !0)
    ], 64));
  }
}), ig = /* @__PURE__ */ q(lg, [["__scopeId", "data-v-daaf2c6b"]]), rg = { class: "setting-info" }, dg = { class: "setting-label" }, cg = {
  key: 0,
  class: "required-marker"
}, ug = {
  key: 0,
  class: "setting-description"
}, mg = { class: "setting-control" }, vg = /* @__PURE__ */ K({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: te(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", rg, [
        e("div", dg, [
          w(a(t.label) + " ", 1),
          t.required ? (s(), o("span", cg, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", ug, a(t.description), 1)) : c("", !0)
      ]),
      e("div", mg, [
        fe(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), st = /* @__PURE__ */ q(vg, [["__scopeId", "data-v-cb5d236c"]]), fg = { class: "toggle" }, gg = ["checked", "disabled"], hg = /* @__PURE__ */ K({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("label", fg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (d) => r.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, gg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ht = /* @__PURE__ */ q(hg, [["__scopeId", "data-v-71c0f550"]]), pg = { class: "settings-section" }, yg = { class: "path-setting" }, wg = { class: "path-value" }, kg = { class: "path-setting" }, bg = { class: "path-value" }, _g = { class: "settings-section" }, $g = { class: "settings-section" }, Cg = { class: "settings-section" }, xg = /* @__PURE__ */ K({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: n } = Re(), d = C(!1), h = C(null), f = C(null), g = C(null), v = C(null), l = C(""), m = C(""), _ = C(!0), u = C(!0), I = C(!1), $ = T(() => v.value ? l.value !== (v.value.civitai_api_key || "") : !1);
    async function R() {
      d.value = !0, h.value = null;
      try {
        g.value = await r(), v.value = { ...g.value }, l.value = g.value.civitai_api_key || "", m.value = g.value.huggingface_token || "", _.value = g.value.auto_sync_models, u.value = g.value.confirm_destructive;
        const z = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        I.value = z === "true";
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function b() {
      var z;
      f.value = null;
      try {
        const D = {};
        l.value !== (((z = v.value) == null ? void 0 : z.civitai_api_key) || "") && (D.civitai_api_key = l.value || null), await n(D), await R(), f.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (D) {
        f.value = {
          type: "error",
          message: D instanceof Error ? D.message : "Failed to save settings"
        };
      }
    }
    function y() {
      v.value && (l.value = v.value.civitai_api_key || "", m.value = v.value.huggingface_token || "", _.value = v.value.auto_sync_models, u.value = v.value.confirm_destructive, f.value = null);
    }
    function k(z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(z)), console.log("[ComfyGit] Auto-refresh setting saved:", z);
    }
    return Ie(R), (z, D) => (s(), S(Pe, null, {
      header: i(() => [
        p(Ue, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            p(Q, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: b
            }, {
              default: i(() => [...D[5] || (D[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), S(Q, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: y
            }, {
              default: i(() => [...D[6] || (D[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), S(at, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (s(), S(lt, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: R
        }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
          p(Se, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var N, G;
              return [
                e("div", pg, [
                  e("div", yg, [
                    D[7] || (D[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    D[8] || (D[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", wg, a(((N = g.value) == null ? void 0 : N.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", kg, [
                    D[9] || (D[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    D[10] || (D[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", bg, a(((G = g.value) == null ? void 0 : G.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          p(Se, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", _g, [
                p(st, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    p(Ut, {
                      modelValue: l.value,
                      "onUpdate:modelValue": D[0] || (D[0] = (N) => l.value = N),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(st, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(Ut, {
                      modelValue: m.value,
                      "onUpdate:modelValue": D[1] || (D[1] = (N) => m.value = N),
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
          p(Se, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", $g, [
                p(st, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    p(ht, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        D[2] || (D[2] = (N) => I.value = N),
                        k
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          p(Se, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", Cg, [
                p(st, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(ht, {
                      modelValue: _.value,
                      "onUpdate:modelValue": D[3] || (D[3] = (N) => _.value = N),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(st, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(ht, {
                      modelValue: u.value,
                      "onUpdate:modelValue": D[4] || (D[4] = (N) => u.value = N),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f.value ? (s(), S($t, {
            key: 0,
            variant: (f.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: Xe({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(f.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Sg = /* @__PURE__ */ q(xg, [["__scopeId", "data-v-7861bd35"]]), Ig = /* @__PURE__ */ K({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = Re(), n = C([]), d = C(!1), h = C(null), f = C(!1), g = C(null), v = T(() => n.value.length === 0 ? [] : n.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function l() {
      d.value = !0, h.value = null;
      try {
        n.value = await r(void 0, 500);
      } catch (m) {
        h.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        d.value = !1, setTimeout(() => {
          var m;
          (m = g.value) != null && m.parentElement && (g.value.parentElement.scrollTop = g.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(l), (m, _) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (u) => f.value = !0)
          }, {
            actions: i(() => [
              p(Q, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: d.value
              }, {
                default: i(() => [
                  w(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          d.value ? (s(), S(at, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (s(), S(lt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            n.value.length === 0 ? (s(), S(Ke, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: g,
              class: "log-output"
            }, [
              (s(!0), o(V, null, J(v.value, (u, I) => (s(), o("div", {
                key: I,
                class: te(`log-line log-level-${u.level.toLowerCase()}`)
              }, a(u.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: f.value,
        title: "About Workspace Logs",
        onClose: _[2] || (_[2] = (u) => f.value = !1)
      }, {
        content: i(() => [..._[3] || (_[3] = [
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
        actions: i(() => [
          p(Q, {
            variant: "primary",
            onClick: _[1] || (_[1] = (u) => f.value = !1)
          }, {
            default: i(() => [..._[4] || (_[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Eg = /* @__PURE__ */ q(Ig, [["__scopeId", "data-v-39f6a756"]]), Mg = /* @__PURE__ */ K({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: n } = Re(), d = C([]), h = C(!1), f = C(null), g = C(!1), v = C("production"), l = C(null), m = T(() => d.value.length === 0 ? [] : d.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function _() {
      h.value = !0, f.value = null;
      try {
        d.value = await r(void 0, 500);
        try {
          const u = await n();
          v.value = u.environment || "production";
        } catch {
        }
      } catch (u) {
        f.value = u instanceof Error ? u.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var u;
          (u = l.value) != null && u.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(_), (u, I) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = ($) => g.value = !0)
          }, {
            actions: i(() => [
              p(Q, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: h.value
              }, {
                default: i(() => [
                  w(a(h.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          h.value ? (s(), S(at, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (s(), S(lt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            d.value.length === 0 ? (s(), S(Ke, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(V, null, J(m.value, ($, R) => (s(), o("div", {
                key: R,
                class: te(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: g.value,
        title: "About Environment Logs",
        onClose: I[2] || (I[2] = ($) => g.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            I[3] || (I[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            I[4] || (I[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          I[5] || (I[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          I[6] || (I[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          p(Q, {
            variant: "primary",
            onClick: I[1] || (I[1] = ($) => g.value = !1)
          }, {
            default: i(() => [...I[7] || (I[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Rg = /* @__PURE__ */ q(Mg, [["__scopeId", "data-v-4f1e6f72"]]), zg = { class: "env-title" }, Lg = {
  key: 0,
  class: "current-badge"
}, Tg = {
  key: 0,
  class: "branch-info"
}, Ng = /* @__PURE__ */ K({
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
    showLastUsed: { type: Boolean, default: !0 },
    showDetails: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, n) => (s(), S(Le, {
      status: t.isCurrent ? "synced" : void 0
    }, Bt({
      icon: i(() => [
        w(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", zg, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Lg, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", Tg, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + a(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        fe(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          p(_e, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          p(_e, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          p(_e, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), S(_e, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Dg = /* @__PURE__ */ q(Ng, [["__scopeId", "data-v-9231917a"]]), Pg = { class: "env-details" }, Ug = { class: "status-row" }, Bg = {
  key: 0,
  class: "detail-row"
}, Og = { class: "value mono" }, Fg = {
  key: 1,
  class: "detail-row"
}, Ag = { class: "value mono small" }, Vg = { class: "detail-row" }, Wg = { class: "value" }, Gg = { class: "detail-row" }, jg = { class: "value" }, Hg = { class: "detail-row" }, Kg = { class: "value" }, qg = {
  key: 2,
  class: "section-divider"
}, Yg = {
  key: 3,
  class: "detail-row"
}, Qg = { class: "value" }, Xg = {
  key: 4,
  class: "detail-row"
}, Zg = { class: "value" }, Jg = { class: "footer-actions" }, eh = /* @__PURE__ */ K({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: r }) {
    const n = r;
    function d(h) {
      if (!h) return "Unknown";
      try {
        const f = new Date(h), v = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), l = Math.floor(v / 6e4), m = Math.floor(v / 36e5), _ = Math.floor(v / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : _ < 30 ? `${_} ${_ === 1 ? "day" : "days"} ago` : f.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, f) => (s(), S(ot, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[2] || (f[2] = (g) => n("close"))
    }, {
      body: i(() => [
        e("div", Pg, [
          e("div", Ug, [
            f[3] || (f[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Bg, [
            f[4] || (f[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Og, a(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", Fg, [
            f[5] || (f[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Ag, a(t.environment.path), 1)
          ])) : c("", !0),
          f[11] || (f[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Vg, [
            f[6] || (f[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Wg, a(t.environment.workflow_count), 1)
          ]),
          e("div", Gg, [
            f[7] || (f[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", jg, a(t.environment.node_count), 1)
          ]),
          e("div", Hg, [
            f[8] || (f[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Kg, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", qg)) : c("", !0),
          t.environment.created_at ? (s(), o("div", Yg, [
            f[9] || (f[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Qg, a(d(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", Xg, [
            f[10] || (f[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Zg, a(d(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Jg, [
          t.canDelete ? (s(), S(le, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[0] || (f[0] = (g) => n("delete", t.environment.name))
          }, {
            default: i(() => [...f[12] || (f[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          f[14] || (f[14] = e("div", { class: "footer-spacer" }, null, -1)),
          p(le, {
            variant: "secondary",
            size: "sm",
            onClick: f[1] || (f[1] = (g) => n("close"))
          }, {
            default: i(() => [...f[13] || (f[13] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), th = /* @__PURE__ */ q(eh, [["__scopeId", "data-v-59855453"]]), sh = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], oh = "3.12", nh = [
  // Auto-detect
  "auto",
  // CPU only
  "cpu",
  // CUDA (newest first)
  "cu129",
  "cu128",
  "cu126",
  "cu125",
  "cu124",
  "cu123",
  "cu122",
  "cu121",
  "cu120",
  "cu118",
  "cu117",
  "cu116",
  "cu115",
  "cu114",
  "cu113",
  "cu112",
  "cu111",
  "cu110",
  "cu102",
  "cu101",
  "cu100",
  "cu92",
  "cu91",
  "cu90",
  "cu80",
  // ROCm (AMD)
  "rocm6.3",
  "rocm6.2.4",
  "rocm6.2",
  "rocm6.1",
  "rocm6.0",
  "rocm5.7",
  "rocm5.6",
  "rocm5.5",
  "rocm5.4.2",
  "rocm5.4",
  "rocm5.3",
  "rocm5.2",
  "rocm5.1.1",
  "rocm4.2",
  "rocm4.1",
  "rocm4.0.1",
  // Intel
  "xpu"
], ah = "auto", lh = { class: "create-env-form" }, ih = { class: "form-field" }, rh = { class: "form-field" }, dh = ["value"], ch = { class: "form-field" }, uh = ["disabled"], mh = ["value"], vh = { class: "form-field" }, fh = ["value"], gh = { class: "form-field form-field--checkbox" }, hh = { class: "form-checkbox" }, ph = /* @__PURE__ */ K({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: r }) {
    const n = r, { getComfyUIReleases: d } = Re(), h = C(""), f = C(oh), g = C("latest"), v = C(ah), l = C(!1), m = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = C(!1), u = C(null);
    function I() {
      const R = h.value.trim();
      if (!R) return;
      const b = {
        name: R,
        python_version: f.value,
        comfyui_version: g.value,
        torch_backend: v.value,
        switch_after: l.value
      };
      n("create", b);
    }
    async function $() {
      _.value = !0;
      try {
        m.value = await d();
      } catch (R) {
        console.error("Failed to load ComfyUI releases:", R);
      } finally {
        _.value = !1;
      }
    }
    return Ie(async () => {
      var R;
      await Ps(), (R = u.value) == null || R.focus(), $();
    }), (R, b) => (s(), S(ot, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: b[6] || (b[6] = (y) => n("close"))
    }, {
      body: i(() => [
        e("div", lh, [
          e("div", ih, [
            b[7] || (b[7] = e("label", { class: "form-label" }, "Name", -1)),
            Qe(e("input", {
              ref_key: "nameInput",
              ref: u,
              "onUpdate:modelValue": b[0] || (b[0] = (y) => h.value = y),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: rt(I, ["enter"])
            }, null, 544), [
              [cs, h.value]
            ])
          ]),
          e("div", rh, [
            b[8] || (b[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Qe(e("select", {
              "onUpdate:modelValue": b[1] || (b[1] = (y) => f.value = y),
              class: "form-select"
            }, [
              (s(!0), o(V, null, J(he(sh), (y) => (s(), o("option", {
                key: y,
                value: y
              }, a(y), 9, dh))), 128))
            ], 512), [
              [Vt, f.value]
            ])
          ]),
          e("div", ch, [
            b[9] || (b[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Qe(e("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (y) => g.value = y),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(V, null, J(m.value, (y) => (s(), o("option", {
                key: y.tag_name,
                value: y.tag_name
              }, a(y.name), 9, mh))), 128))
            ], 8, uh), [
              [Vt, g.value]
            ])
          ]),
          e("div", vh, [
            b[10] || (b[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Qe(e("select", {
              "onUpdate:modelValue": b[3] || (b[3] = (y) => v.value = y),
              class: "form-select"
            }, [
              (s(!0), o(V, null, J(he(nh), (y) => (s(), o("option", {
                key: y,
                value: y
              }, a(y) + a(y === "auto" ? " (detect GPU)" : ""), 9, fh))), 128))
            ], 512), [
              [Vt, v.value]
            ])
          ]),
          e("div", gh, [
            e("label", hh, [
              Qe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": b[4] || (b[4] = (y) => l.value = y)
              }, null, 512), [
                [us, l.value]
              ]),
              b[11] || (b[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        p(le, {
          variant: "primary",
          disabled: !h.value.trim(),
          onClick: I
        }, {
          default: i(() => [...b[12] || (b[12] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(le, {
          variant: "secondary",
          onClick: b[5] || (b[5] = (y) => n("close"))
        }, {
          default: i(() => [...b[13] || (b[13] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), yh = /* @__PURE__ */ q(ph, [["__scopeId", "data-v-a2f13447"]]), wh = /* @__PURE__ */ K({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: r, emit: n }) {
    const d = n, { getEnvironments: h } = Re(), f = C([]), g = C(!1), v = C(null), l = C(""), m = C(!1), _ = C(!1), u = C(null), I = T(
      () => f.value.find((D) => D.is_current)
    ), $ = T(() => {
      if (!l.value.trim()) return f.value;
      const D = l.value.toLowerCase();
      return f.value.filter(
        (N) => {
          var G;
          return N.name.toLowerCase().includes(D) || ((G = N.current_branch) == null ? void 0 : G.toLowerCase().includes(D));
        }
      );
    });
    function R(D) {
      d("create", D), _.value = !1;
    }
    function b() {
      _.value = !0;
    }
    function y(D) {
      u.value = D;
    }
    function k(D) {
      u.value = null, d("delete", D);
    }
    async function z() {
      g.value = !0, v.value = null;
      try {
        f.value = await h();
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load environments";
      } finally {
        g.value = !1;
      }
    }
    return Ie(z), r({
      loadEnvironments: z
    }), (D, N) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (G) => m.value = !0)
          }, {
            actions: i(() => [
              p(Q, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: i(() => [...N[6] || (N[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              p(Q, {
                variant: "secondary",
                size: "sm",
                onClick: z
              }, {
                default: i(() => [...N[7] || (N[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(_t, {
            modelValue: l.value,
            "onUpdate:modelValue": N[1] || (N[1] = (G) => l.value = G),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          g.value ? (s(), S(at, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), S(lt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            f.value.length ? (s(), S($t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(f.value.length) + " " + a(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                I.value ? (s(), o(V, { key: 0 }, [
                  N[8] || (N[8] = w(" • Current: ", -1)),
                  e("strong", null, a(I.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            $.value.length ? (s(), S(Se, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, J($.value, (G) => (s(), S(Dg, {
                  key: G.name,
                  "environment-name": G.name,
                  "is-current": G.is_current,
                  "current-branch": G.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    G.is_current ? c("", !0) : (s(), S(Q, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => D.$emit("switch", G.name)
                    }, {
                      default: i(() => [...N[9] || (N[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    p(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => y(G)
                    }, {
                      default: i(() => [...N[10] || (N[10] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? c("", !0) : (s(), S(Ke, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Bt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  p(Q, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: i(() => [...N[11] || (N[11] = [
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
      p(nt, {
        show: m.value,
        title: "About Environments",
        onClose: N[3] || (N[3] = (G) => m.value = !1)
      }, {
        content: i(() => [...N[12] || (N[12] = [
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
        actions: i(() => [
          p(Q, {
            variant: "secondary",
            onClick: N[2] || (N[2] = (G) => m.value = !1)
          }, {
            default: i(() => [...N[13] || (N[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      u.value ? (s(), S(th, {
        key: 0,
        environment: u.value,
        "can-delete": f.value.length > 1,
        onClose: N[4] || (N[4] = (G) => u.value = null),
        onDelete: k
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      _.value ? (s(), S(yh, {
        key: 1,
        onClose: N[5] || (N[5] = (G) => _.value = !1),
        onCreate: R
      })) : c("", !0)
    ], 64));
  }
}), kh = /* @__PURE__ */ q(wh, [["__scopeId", "data-v-307d9926"]]), bh = { class: "file-path" }, _h = { class: "file-path-text" }, $h = ["title"], Ch = /* @__PURE__ */ K({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, n = C(!1);
    async function d() {
      try {
        await navigator.clipboard.writeText(r.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, f) => (s(), o("div", bh, [
      f[0] || (f[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", _h, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: d
      }, a(n.value ? "✓" : "📋"), 9, $h)) : c("", !0)
    ]));
  }
}), xh = /* @__PURE__ */ q(Ch, [["__scopeId", "data-v-f0982173"]]), Sh = { class: "output-path-input" }, Ih = { class: "export-actions" }, Eh = {
  key: 1,
  class: "export-warning"
}, Mh = /* @__PURE__ */ K({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = Re(), n = C(""), d = C(!1), h = C(null), f = C(!1);
    async function g() {
      d.value = !0, h.value = null;
      try {
        const l = await r(n.value || void 0);
        h.value = l;
      } catch (l) {
        h.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        d.value = !1;
      }
    }
    async function v() {
      var l;
      if ((l = h.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(h.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (l, m) => (s(), o(V, null, [
      p(Pe, null, {
        header: i(() => [
          p(Ue, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              p(Q, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = (_) => f.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...m[5] || (m[5] = [
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
          p(Se, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              p(Le, { status: "synced" }, {
                icon: i(() => [...m[6] || (m[6] = [
                  w("📦", -1)
                ])]),
                title: i(() => [...m[7] || (m[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...m[8] || (m[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  p(_e, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  p(_e, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  p(_e, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  p(_e, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          p(Se, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              p(Le, { status: "synced" }, {
                icon: i(() => [...m[9] || (m[9] = [
                  w("📁", -1)
                ])]),
                title: i(() => [...m[10] || (m[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: i(() => [...m[11] || (m[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", Sh, [
                    p(Ut, {
                      modelValue: n.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (_) => n.value = _),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          p(Se, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Ih, [
                p(Q, {
                  variant: "primary",
                  size: "md",
                  loading: d.value,
                  disabled: d.value,
                  onClick: g
                }, {
                  default: i(() => [
                    m[12] || (m[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    w(" " + a(d.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (s(), S(Q, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: d.value,
                  onClick: m[2] || (m[2] = (_) => n.value = "")
                }, {
                  default: i(() => [...m[13] || (m[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          h.value ? (s(), S(Se, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              p(Le, {
                status: h.value.status === "success" ? "synced" : "broken"
              }, Bt({
                icon: i(() => [
                  w(a(h.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(a(h.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(a(h.value.status === "success" ? "Your environment has been exported" : h.value.message), 1)
                ]),
                _: 2
              }, [
                h.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    p(_e, { label: "Saved to:" }, {
                      default: i(() => [
                        p(xh, {
                          path: h.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    h.value.models_without_sources !== void 0 ? (s(), S(_e, {
                      key: 0,
                      label: "Models without sources:",
                      value: h.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    h.value.models_without_sources && h.value.models_without_sources > 0 ? (s(), o("div", Eh, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                h.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    p(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: v
                    }, {
                      default: i(() => [...m[15] || (m[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    p(Q, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = (_) => h.value = null)
                    }, {
                      default: i(() => [...m[16] || (m[16] = [
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
      p(nt, {
        show: f.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = (_) => f.value = !1)
      }, {
        content: i(() => [...m[17] || (m[17] = [
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
}), Rh = /* @__PURE__ */ q(Mh, [["__scopeId", "data-v-1777a9d5"]]), zh = { class: "file-input-wrapper" }, Lh = ["accept", "multiple", "disabled"], Th = /* @__PURE__ */ K({
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
  setup(t, { expose: r, emit: n }) {
    const d = n, h = C(null);
    function f() {
      var v;
      (v = h.value) == null || v.click();
    }
    function g(v) {
      const l = v.target;
      l.files && l.files.length > 0 && (d("change", l.files), l.value = "");
    }
    return r({
      triggerInput: f
    }), (v, l) => (s(), o("div", zh, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: g
      }, null, 40, Lh),
      p(Q, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: f
      }, {
        default: i(() => [
          fe(v.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Nh = /* @__PURE__ */ q(Th, [["__scopeId", "data-v-cd192091"]]), Dh = {
  key: 0,
  class: "drop-zone-empty"
}, Ph = { class: "drop-zone-text" }, Uh = { class: "drop-zone-primary" }, Bh = { class: "drop-zone-secondary" }, Oh = { class: "drop-zone-actions" }, Fh = {
  key: 1,
  class: "drop-zone-file"
}, Ah = { class: "file-info" }, Vh = { class: "file-details" }, Wh = { class: "file-name" }, Gh = { class: "file-size" }, jh = /* @__PURE__ */ K({
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
    const n = r, d = C(!1), h = C(null), f = C(0), g = T(() => h.value !== null), v = T(() => {
      var y;
      return ((y = h.value) == null ? void 0 : y.name) || "";
    }), l = T(() => {
      if (!h.value) return "";
      const y = h.value.size;
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(y) {
      var k;
      f.value++, (k = y.dataTransfer) != null && k.types.includes("Files") && (d.value = !0);
    }
    function _(y) {
      y.dataTransfer && (y.dataTransfer.dropEffect = "copy");
    }
    function u() {
      f.value--, f.value === 0 && (d.value = !1);
    }
    function I(y) {
      var z;
      f.value = 0, d.value = !1;
      const k = (z = y.dataTransfer) == null ? void 0 : z.files;
      k && k.length > 0 && R(k[0]);
    }
    function $(y) {
      y.length > 0 && R(y[0]);
    }
    function R(y) {
      h.value = y, n("fileSelected", y);
    }
    function b() {
      h.value = null, n("clear");
    }
    return (y, k) => (s(), o("div", {
      class: te(["file-drop-zone", { "drop-active": d.value, "has-file": g.value }]),
      onDragenter: xe(m, ["prevent"]),
      onDragover: xe(_, ["prevent"]),
      onDragleave: xe(u, ["prevent"]),
      onDrop: xe(I, ["prevent"])
    }, [
      g.value ? (s(), o("div", Fh, [
        e("div", Ah, [
          k[1] || (k[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Vh, [
            e("div", Wh, a(v.value), 1),
            e("div", Gh, a(l.value), 1)
          ])
        ]),
        p(Q, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: i(() => [...k[2] || (k[2] = [
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
      ])) : (s(), o("div", Dh, [
        k[0] || (k[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Ph, [
          e("p", Uh, a(t.primaryText), 1),
          e("p", Bh, a(t.secondaryText), 1)
        ]),
        e("div", Oh, [
          p(Nh, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
          }, {
            default: i(() => [
              w(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Hh = /* @__PURE__ */ q(jh, [["__scopeId", "data-v-e00abbca"]]), Kh = { class: "import-preview" }, qh = { class: "preview-header" }, Yh = {
  key: 0,
  class: "source-env"
}, Qh = { class: "preview-content" }, Xh = { class: "preview-section" }, Zh = { class: "section-header" }, Jh = { class: "section-info" }, ep = { class: "section-count" }, tp = {
  key: 0,
  class: "item-list"
}, sp = { class: "item-name" }, op = {
  key: 0,
  class: "item-more"
}, np = { class: "preview-section" }, ap = { class: "section-header" }, lp = { class: "section-info" }, ip = { class: "section-count" }, rp = {
  key: 0,
  class: "item-list"
}, dp = { class: "item-details" }, cp = { class: "item-name" }, up = { class: "item-meta" }, mp = {
  key: 0,
  class: "item-more"
}, vp = { class: "preview-section" }, fp = { class: "section-header" }, gp = { class: "section-info" }, hp = { class: "section-count" }, pp = {
  key: 0,
  class: "item-list"
}, yp = { class: "item-name" }, wp = {
  key: 0,
  class: "item-more"
}, kp = {
  key: 0,
  class: "preview-section"
}, bp = { class: "git-info" }, _p = /* @__PURE__ */ K({
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
    const r = t, n = T(() => r.workflows.length), d = T(() => r.models.length), h = T(() => r.nodes.length);
    function f(g) {
      return g < 1024 ? `${g} B` : g < 1024 * 1024 ? `${(g / 1024).toFixed(1)} KB` : g < 1024 * 1024 * 1024 ? `${(g / (1024 * 1024)).toFixed(1)} MB` : `${(g / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (g, v) => (s(), o("div", Kh, [
      e("div", qh, [
        p(Ae, null, {
          default: i(() => [...v[0] || (v[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Yh, [
          v[1] || (v[1] = w(" From: ", -1)),
          p(qt, null, {
            default: i(() => [
              w(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Qh, [
        e("div", Xh, [
          e("div", Zh, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Jh, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ep, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", tp, [
            (s(!0), o(V, null, J(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", sp, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", op, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", np, [
          e("div", ap, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", lp, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", ip, a(d.value) + " file" + a(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", rp, [
            (s(!0), o(V, null, J(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", dp, [
                e("span", cp, a(l.filename), 1),
                e("span", up, a(f(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", mp, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", vp, [
          e("div", fp, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", gp, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", hp, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", pp, [
            (s(!0), o(V, null, J(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", yp, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", wp, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", kp, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", bp, [
            t.gitBranch ? (s(), S(_e, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                p(qt, null, {
                  default: i(() => [
                    w(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), S(_e, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                p(vs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), $p = /* @__PURE__ */ q(_p, [["__scopeId", "data-v-182fe113"]]), Cp = { class: "import-options" }, xp = { class: "options-container" }, Sp = { class: "option-section" }, Ip = { class: "conflict-options" }, Ep = ["value", "checked", "onChange"], Mp = { class: "conflict-content" }, Rp = { class: "conflict-label" }, zp = { class: "conflict-description" }, Lp = { class: "option-section" }, Tp = { class: "component-toggles" }, Np = /* @__PURE__ */ K({
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
    const n = r, d = [
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
    return (h, f) => (s(), o("div", Cp, [
      p(Ae, null, {
        default: i(() => [...f[4] || (f[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", xp, [
        e("div", Sp, [
          p(Kt, null, {
            default: i(() => [...f[5] || (f[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Ip, [
            (s(), o(V, null, J(d, (g) => e("label", {
              key: g.value,
              class: te(["conflict-option", { active: t.conflictMode === g.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: g.value,
                checked: t.conflictMode === g.value,
                onChange: (v) => n("update:conflictMode", g.value)
              }, null, 40, Ep),
              e("div", Mp, [
                e("span", Rp, a(g.label), 1),
                e("span", zp, a(g.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Lp, [
          p(Kt, null, {
            default: i(() => [...f[6] || (f[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Tp, [
            p(st, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                p(ht, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": f[0] || (f[0] = (g) => n("update:includeWorkflows", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(st, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                p(ht, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": f[1] || (f[1] = (g) => n("update:includeModels", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(st, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                p(ht, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": f[2] || (f[2] = (g) => n("update:includeNodes", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(st, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                p(ht, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": f[3] || (f[3] = (g) => n("update:includeGitHistory", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Dp = /* @__PURE__ */ q(Np, [["__scopeId", "data-v-0ec212b0"]]), Pp = {
  key: 0,
  class: "import-empty"
}, Up = { class: "import-help" }, Bp = {
  key: 1,
  class: "import-configure"
}, Op = { class: "selected-file-bar" }, Fp = { class: "file-bar-content" }, Ap = { class: "file-bar-info" }, Vp = { class: "file-bar-name" }, Wp = { class: "file-bar-size" }, Gp = { class: "import-actions" }, jp = {
  key: 2,
  class: "import-progress"
}, Hp = { class: "progress-content" }, Kp = { class: "progress-info" }, qp = { class: "progress-title" }, Yp = { class: "progress-detail" }, Qp = { class: "progress-bar" }, Xp = { class: "progress-status" }, Zp = {
  key: 3,
  class: "import-complete"
}, Jp = { class: "complete-message" }, e1 = { class: "complete-title" }, t1 = { class: "complete-details" }, s1 = { class: "complete-actions" }, o1 = /* @__PURE__ */ K({
  __name: "ImportSection",
  setup(t) {
    const r = C(null), n = C(!1), d = C(!1), h = C(!1), f = C(""), g = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), v = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = C({
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
    }), m = T(() => g.value.includeWorkflows || g.value.includeModels || g.value.includeNodes || g.value.includeGitHistory);
    function _(b) {
      r.value = b;
    }
    function u() {
      r.value = null, d.value = !1, h.value = !1, f.value = "";
    }
    function I() {
      u(), n.value = !1, v.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (r.value) {
        n.value = !0, d.value = !1;
        try {
          const b = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const y of b)
            v.value = y, await new Promise((k) => setTimeout(k, 800));
          v.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((y) => setTimeout(y, 500)), h.value = !0, f.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (b) {
          h.value = !1, f.value = b instanceof Error ? b.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, d.value = !0;
        }
      }
    }
    function R(b) {
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (b, y) => (s(), S(Pe, null, {
      header: i(() => [
        p(Ue, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !r.value && !n.value ? (s(), o("div", Pp, [
          p(Hh, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: _
          }),
          e("div", Up, [
            p(Ae, null, {
              default: i(() => [...y[5] || (y[5] = [
                w("How to Import", -1)
              ])]),
              _: 1
            }),
            y[6] || (y[6] = e("div", { class: "help-content" }, [
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
        ])) : r.value && !n.value && !d.value ? (s(), o("div", Bp, [
          e("div", Op, [
            e("div", Fp, [
              y[7] || (y[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Ap, [
                e("div", Vp, a(r.value.name), 1),
                e("div", Wp, a(R(r.value.size)), 1)
              ])
            ]),
            p(Q, {
              variant: "ghost",
              size: "sm",
              onClick: u
            }, {
              default: i(() => [...y[8] || (y[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          p($p, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          p(Dp, {
            "conflict-mode": g.value.conflictMode,
            "onUpdate:conflictMode": y[0] || (y[0] = (k) => g.value.conflictMode = k),
            "include-workflows": g.value.includeWorkflows,
            "onUpdate:includeWorkflows": y[1] || (y[1] = (k) => g.value.includeWorkflows = k),
            "include-models": g.value.includeModels,
            "onUpdate:includeModels": y[2] || (y[2] = (k) => g.value.includeModels = k),
            "include-nodes": g.value.includeNodes,
            "onUpdate:includeNodes": y[3] || (y[3] = (k) => g.value.includeNodes = k),
            "include-git-history": g.value.includeGitHistory,
            "onUpdate:includeGitHistory": y[4] || (y[4] = (k) => g.value.includeGitHistory = k)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !g.value.includeModels && l.value.models.length > 0 ? (s(), S(pt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Gp, [
            p(Q, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
              onClick: $
            }, {
              default: i(() => [...y[9] || (y[9] = [
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
            p(Q, {
              variant: "secondary",
              size: "md",
              onClick: u
            }, {
              default: i(() => [...y[10] || (y[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (s(), o("div", jp, [
          e("div", Hp, [
            y[11] || (y[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Kp, [
              e("div", qp, a(v.value.message), 1),
              e("div", Yp, a(v.value.detail), 1)
            ])
          ]),
          e("div", Qp, [
            e("div", {
              class: "progress-bar-fill",
              style: Xe({ width: `${v.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Xp, a(v.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", Zp, [
          e("div", {
            class: te(["complete-icon", h.value ? "success" : "error"])
          }, a(h.value ? "✓" : "✕"), 3),
          e("div", Jp, [
            e("div", e1, a(h.value ? "Import Successful" : "Import Failed"), 1),
            e("div", t1, a(f.value), 1)
          ]),
          e("div", s1, [
            p(Q, {
              variant: "primary",
              size: "md",
              onClick: I
            }, {
              default: i(() => [...y[12] || (y[12] = [
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
}), n1 = /* @__PURE__ */ q(o1, [["__scopeId", "data-v-18e18eb5"]]), a1 = { class: "header-info" }, l1 = { class: "commit-hash" }, i1 = {
  key: 0,
  class: "commit-refs"
}, r1 = { class: "commit-message" }, d1 = { class: "commit-date" }, c1 = {
  key: 0,
  class: "loading"
}, u1 = {
  key: 1,
  class: "changes-section"
}, m1 = { class: "stats-row" }, v1 = { class: "stat" }, f1 = { class: "stat insertions" }, g1 = { class: "stat deletions" }, h1 = {
  key: 0,
  class: "change-group"
}, p1 = {
  key: 1,
  class: "change-group"
}, y1 = {
  key: 0,
  class: "version"
}, w1 = {
  key: 2,
  class: "change-group"
}, k1 = { class: "change-item" }, b1 = /* @__PURE__ */ K({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: n } = Re(), d = C(null), h = C(!0), f = T(() => {
      if (!d.value) return !1;
      const v = d.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), g = T(() => {
      if (!d.value) return !1;
      const v = d.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Ie(async () => {
      try {
        d.value = await n(r.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (v, l) => (s(), S(ot, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (m) => v.$emit("close"))
    }, {
      header: i(() => {
        var m, _, u, I;
        return [
          e("div", a1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", l1, a(((m = d.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((_ = t.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
            (I = (u = d.value) == null ? void 0 : u.refs) != null && I.length ? (s(), o("span", i1, [
              (s(!0), o(V, null, J(d.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : c("", !0)
          ]),
          p(le, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = ($) => v.$emit("close"))
          }, {
            default: i(() => [...l[5] || (l[5] = [
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
        var m, _;
        return [
          e("div", r1, a(((m = d.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", d1, a(((_ = d.value) == null ? void 0 : _.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (s(), o("div", c1, "Loading details...")) : d.value ? (s(), o("div", u1, [
            e("div", m1, [
              e("span", v1, a(d.value.stats.files_changed) + " files", 1),
              e("span", f1, "+" + a(d.value.stats.insertions), 1),
              e("span", g1, "-" + a(d.value.stats.deletions), 1)
            ]),
            f.value ? (s(), o("div", h1, [
              p(Mt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, J(d.value.changes.workflows.added, (u) => (s(), o("div", {
                key: "add-" + u,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(u), 1)
              ]))), 128)),
              (s(!0), o(V, null, J(d.value.changes.workflows.modified, (u) => (s(), o("div", {
                key: "mod-" + u,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(u), 1)
              ]))), 128)),
              (s(!0), o(V, null, J(d.value.changes.workflows.deleted, (u) => (s(), o("div", {
                key: "del-" + u,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(u), 1)
              ]))), 128))
            ])) : c("", !0),
            g.value ? (s(), o("div", p1, [
              p(Mt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, J(d.value.changes.nodes.added, (u) => (s(), o("div", {
                key: "add-" + u.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(u.name), 1),
                u.version ? (s(), o("span", y1, "(" + a(u.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(V, null, J(d.value.changes.nodes.removed, (u) => (s(), o("div", {
                key: "rem-" + u.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(u.name), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", w1, [
              p(Mt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", k1, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(d.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        p(le, {
          variant: "primary",
          onClick: l[2] || (l[2] = (m) => v.$emit("checkout", t.commit))
        }, {
          default: i(() => [...l[16] || (l[16] = [
            w(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), _1 = /* @__PURE__ */ q(b1, [["__scopeId", "data-v-d256ff6d"]]), $1 = { class: "dialog-message" }, C1 = {
  key: 0,
  class: "dialog-details"
}, x1 = {
  key: 1,
  class: "dialog-warning"
}, S1 = /* @__PURE__ */ K({
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
    return (r, n) => (s(), S(ot, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (d) => r.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", $1, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", C1, [
          (s(!0), o(V, null, J(t.details, (d, h) => (s(), o("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(d), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", x1, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + a(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (d) => r.$emit("cancel"))
        }, {
          default: i(() => [
            w(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), S(le, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (d) => r.$emit("secondary"))
        }, {
          default: i(() => [
            w(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        p(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (d) => r.$emit("confirm"))
        }, {
          default: i(() => [
            w(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), I1 = /* @__PURE__ */ q(S1, [["__scopeId", "data-v-3670b9f5"]]), E1 = { class: "base-textarea-wrapper" }, M1 = ["value", "rows", "placeholder", "disabled", "maxlength"], R1 = {
  key: 0,
  class: "base-textarea-count"
}, z1 = /* @__PURE__ */ K({
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
    return (r, n) => (s(), o("div", E1, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          n[1] || (n[1] = rt(xe((d) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = rt(xe((d) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, M1),
      t.showCharCount && t.maxLength ? (s(), o("div", R1, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), ls = /* @__PURE__ */ q(z1, [["__scopeId", "data-v-5516e6fc"]]), L1 = ["checked", "disabled"], T1 = { class: "base-checkbox-box" }, N1 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, D1 = {
  key: 0,
  class: "base-checkbox-label"
}, P1 = /* @__PURE__ */ K({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("label", {
      class: te(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (d) => r.$emit("update:modelValue", d.target.checked))
      }, null, 40, L1),
      e("span", T1, [
        t.modelValue ? (s(), o("svg", N1, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (s(), o("span", D1, [
        fe(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), is = /* @__PURE__ */ q(P1, [["__scopeId", "data-v-bf17c831"]]), U1 = { class: "popover-header" }, B1 = { class: "popover-body" }, O1 = {
  key: 0,
  class: "changes-summary"
}, F1 = {
  key: 0,
  class: "change-item"
}, A1 = {
  key: 1,
  class: "change-item"
}, V1 = {
  key: 2,
  class: "change-item"
}, W1 = {
  key: 3,
  class: "change-item"
}, G1 = {
  key: 4,
  class: "change-item"
}, j1 = {
  key: 1,
  class: "no-changes"
}, H1 = {
  key: 2,
  class: "loading"
}, K1 = {
  key: 3,
  class: "issues-error"
}, q1 = { class: "error-header" }, Y1 = { class: "error-title" }, Q1 = { class: "issues-list" }, X1 = { class: "message-section" }, Z1 = { class: "popover-footer" }, J1 = {
  key: 1,
  class: "commit-popover"
}, ey = { class: "popover-header" }, ty = { class: "popover-body" }, sy = {
  key: 0,
  class: "changes-summary"
}, oy = {
  key: 0,
  class: "change-item"
}, ny = {
  key: 1,
  class: "change-item"
}, ay = {
  key: 2,
  class: "change-item"
}, ly = {
  key: 3,
  class: "change-item"
}, iy = {
  key: 4,
  class: "change-item"
}, ry = {
  key: 1,
  class: "no-changes"
}, dy = {
  key: 2,
  class: "loading"
}, cy = {
  key: 3,
  class: "issues-error"
}, uy = { class: "error-header" }, my = { class: "error-title" }, vy = { class: "issues-list" }, fy = { class: "message-section" }, gy = { class: "popover-footer" }, hy = /* @__PURE__ */ K({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const n = t, d = r, { commit: h } = Re(), f = C(""), g = C(!1), v = C(!1), l = C(null), m = T(() => {
      if (!n.status) return !1;
      const R = n.status.workflows;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || n.status.has_changes;
    }), _ = T(() => {
      var R;
      return (R = n.status) != null && R.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), u = T(() => _.value.length > 0), I = T(() => u.value && !v.value);
    async function $() {
      var R, b, y;
      if (!(u.value && !v.value) && !(!m.value || !f.value.trim() || g.value)) {
        g.value = !0, l.value = null;
        try {
          const k = await h(f.value.trim(), v.value);
          k.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((R = k.summary) == null ? void 0 : R.new) || 0} new, ${((b = k.summary) == null ? void 0 : b.modified) || 0} modified, ${((y = k.summary) == null ? void 0 : y.deleted) || 0} deleted`
          }, f.value = "", v.value = !1, setTimeout(() => d("committed"), 1e3)) : k.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : k.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: k.message || "Commit failed" };
        } catch (k) {
          l.value = { type: "error", message: k instanceof Error ? k.message : "Commit failed" };
        } finally {
          g.value = !1;
        }
      }
    }
    return (R, b) => t.asModal ? (s(), S(Me, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (y) => d("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", U1, [
            b[11] || (b[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (y) => d("close"))
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
          e("div", B1, [
            t.status && m.value ? (s(), o("div", O1, [
              t.status.workflows.new.length ? (s(), o("div", F1, [
                b[12] || (b[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", A1, [
                b[13] || (b[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", V1, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", W1, [
                b[15] || (b[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", G1, [
                b[16] || (b[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", j1, " No changes to commit ")) : (s(), o("div", H1, " Loading... ")),
            u.value ? (s(), o("div", K1, [
              e("div", q1, [
                b[17] || (b[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Y1, a(_.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Q1, [
                (s(!0), o(V, null, J(_.value, (y) => (s(), o("div", {
                  key: y.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(y.name), 1),
                  w(": " + a(y.issue_summary), 1)
                ]))), 128))
              ]),
              p(is, {
                modelValue: v.value,
                "onUpdate:modelValue": b[1] || (b[1] = (y) => v.value = y),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...b[18] || (b[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", X1, [
              p(ls, {
                modelValue: f.value,
                "onUpdate:modelValue": b[2] || (b[2] = (y) => f.value = y),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || g.value || I.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: te(["result", l.value.type])
            }, a(l.value.message), 3)) : c("", !0)
          ]),
          e("div", Z1, [
            p(le, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (y) => d("close"))
            }, {
              default: i(() => [...b[19] || (b[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !f.value.trim() || g.value || I.value,
              loading: g.value,
              onClick: $
            }, {
              default: i(() => [
                w(a(g.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", J1, [
      e("div", ey, [
        b[21] || (b[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (y) => d("close"))
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
      e("div", ty, [
        t.status && m.value ? (s(), o("div", sy, [
          t.status.workflows.new.length ? (s(), o("div", oy, [
            b[22] || (b[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", ny, [
            b[23] || (b[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", ay, [
            b[24] || (b[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", ly, [
            b[25] || (b[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", iy, [
            b[26] || (b[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", ry, " No changes to commit ")) : (s(), o("div", dy, " Loading... ")),
        u.value ? (s(), o("div", cy, [
          e("div", uy, [
            b[27] || (b[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", my, a(_.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", vy, [
            (s(!0), o(V, null, J(_.value, (y) => (s(), o("div", {
              key: y.name,
              class: "issue-item"
            }, [
              e("strong", null, a(y.name), 1),
              w(": " + a(y.issue_summary), 1)
            ]))), 128))
          ]),
          p(is, {
            modelValue: v.value,
            "onUpdate:modelValue": b[7] || (b[7] = (y) => v.value = y),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...b[28] || (b[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", fy, [
          p(ls, {
            modelValue: f.value,
            "onUpdate:modelValue": b[8] || (b[8] = (y) => f.value = y),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || g.value || I.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: te(["result", l.value.type])
        }, a(l.value.message), 3)) : c("", !0)
      ]),
      e("div", gy, [
        p(le, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (y) => d("close"))
        }, {
          default: i(() => [...b[29] || (b[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p(le, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !f.value.trim() || g.value || I.value,
          loading: g.value,
          onClick: $
        }, {
          default: i(() => [
            w(a(g.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), ks = /* @__PURE__ */ q(hy, [["__scopeId", "data-v-d92153de"]]), py = { class: "modal-header" }, yy = { class: "modal-body" }, wy = { class: "switch-message" }, ky = { class: "switch-details" }, by = { class: "modal-actions" }, _y = /* @__PURE__ */ K({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, n) => (s(), S(Me, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", py, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", yy, [
            e("p", wy, [
              n[6] || (n[6] = w(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = w(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = w("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", ky, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", by, [
            p(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (d) => r.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), $y = /* @__PURE__ */ q(_y, [["__scopeId", "data-v-e9c5253e"]]), Cy = { class: "progress-bar" }, xy = /* @__PURE__ */ K({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, n = T(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (d, h) => (s(), o("div", Cy, [
      e("div", {
        class: te(["progress-fill", t.variant]),
        style: Xe({ width: n.value })
      }, null, 6)
    ]));
  }
}), Sy = /* @__PURE__ */ q(xy, [["__scopeId", "data-v-1beb0512"]]), Iy = {
  key: 0,
  class: "modal-overlay"
}, Ey = { class: "modal-content" }, My = { class: "modal-body" }, Ry = { class: "progress-info" }, zy = { class: "progress-percentage" }, Ly = { class: "progress-state" }, Ty = { class: "switch-steps" }, Ny = { class: "step-icon" }, Dy = { class: "step-label" }, Py = /* @__PURE__ */ K({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, n = T(() => {
      const f = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return r.message || f[r.state] || r.state;
    }), d = T(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), h = T(() => {
      const f = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], g = f.findIndex((v) => v.state === r.state);
      return f.map((v, l) => {
        let m = "pending", _ = "○";
        return l < g ? (m = "completed", _ = "✓") : l === g && (m = "active", _ = "⟳"), {
          ...v,
          status: m,
          icon: _
        };
      });
    });
    return (f, g) => (s(), S(Me, { to: "body" }, [
      t.show ? (s(), o("div", Iy, [
        e("div", Ey, [
          g[1] || (g[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", My, [
            p(Sy, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ry, [
              e("div", zy, a(t.progress) + "%", 1),
              e("div", Ly, a(n.value), 1)
            ]),
            e("div", Ty, [
              (s(!0), o(V, null, J(h.value, (v) => (s(), o("div", {
                key: v.state,
                class: te(["switch-step", v.status])
              }, [
                e("span", Ny, a(v.icon), 1),
                e("span", Dy, a(v.label), 1)
              ], 2))), 128))
            ]),
            g[0] || (g[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Uy = /* @__PURE__ */ q(Py, [["__scopeId", "data-v-768a5078"]]), By = { class: "modal-header" }, Oy = { class: "modal-body" }, Fy = {
  key: 0,
  class: "node-section"
}, Ay = { class: "node-list" }, Vy = {
  key: 1,
  class: "node-section"
}, Wy = { class: "node-list" }, Gy = { class: "modal-actions" }, jy = /* @__PURE__ */ K({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, n) => (s(), S(Me, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", By, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Oy, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", Fy, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Ay, [
                (s(!0), o(V, null, J(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + a(d), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", Vy, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Wy, [
                (s(!0), o(V, null, J(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item remove"
                }, " - " + a(d), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Gy, [
            p(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (d) => r.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Hy = /* @__PURE__ */ q(jy, [["__scopeId", "data-v-7cad7518"]]), Ky = { class: "comfygit-panel" }, qy = { class: "panel-header" }, Yy = { class: "header-left" }, Qy = {
  key: 0,
  class: "header-info"
}, Xy = { class: "header-actions" }, Zy = { class: "env-switcher" }, Jy = {
  key: 0,
  class: "header-info"
}, ew = { class: "branch-name" }, tw = { class: "panel-main" }, sw = { class: "sidebar" }, ow = { class: "sidebar-section" }, nw = { class: "sidebar-section" }, aw = { class: "sidebar-section" }, lw = { class: "content-area" }, iw = {
  key: 0,
  class: "error-message"
}, rw = {
  key: 1,
  class: "loading"
}, dw = {
  key: 4,
  class: "dialog-overlay"
}, cw = { class: "dialog-content create-progress-dialog" }, uw = { class: "dialog-body create-progress-body" }, mw = { class: "create-progress-message" }, vw = { class: "dialog-content env-selector-dialog" }, fw = { class: "dialog-header" }, gw = { class: "dialog-body" }, hw = { class: "env-list" }, pw = { class: "env-info" }, yw = { class: "env-name-row" }, ww = { class: "env-indicator" }, kw = { class: "env-name" }, bw = {
  key: 0,
  class: "env-branch"
}, _w = {
  key: 1,
  class: "current-label"
}, $w = { class: "env-stats" }, Cw = ["onClick"], xw = { class: "toast-container" }, Sw = { class: "toast-icon" }, Iw = { class: "toast-message" }, Ew = /* @__PURE__ */ K({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const n = r, {
      getStatus: d,
      getHistory: h,
      getBranches: f,
      checkout: g,
      createBranch: v,
      switchBranch: l,
      deleteBranch: m,
      getEnvironments: _,
      switchEnvironment: u,
      getSwitchProgress: I,
      createEnvironment: $,
      getCreateProgress: R,
      deleteEnvironment: b,
      syncEnvironmentManually: y
    } = Re(), k = gs(), z = C(null), D = C([]), N = C([]), G = C([]), A = T(() => G.value.find((j) => j.is_current)), F = C(!1), O = C(null), L = C(null), M = C(!1), H = C(null), oe = C(null), be = C(!1), re = C(!1), X = C(""), Z = C({ state: "idle", progress: 0, message: "" });
    let U = null, x = null;
    const se = C(!1), ee = C({ state: "idle", message: "" }), Ce = C(null);
    let we = null;
    const ce = C("status"), Ve = C("this-env");
    function ke(j, E) {
      ce.value = j, Ve.value = E;
    }
    function We(j) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      de && ke(de.view, de.section);
    }
    function Ze() {
      ke("branches", "this-env");
    }
    function it() {
      n("close"), setTimeout(() => {
        var E;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const de of j)
          if (((E = de.textContent) == null ? void 0 : E.trim()) === "Manager") {
            de.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const pe = C(null), Ge = C(!1), Be = C(!1), Oe = C([]);
    let dt = 0;
    function me(j, E = "info", de = 3e3) {
      const $e = ++dt;
      return Oe.value.push({ id: $e, message: j, type: E }), de > 0 && setTimeout(() => {
        Oe.value = Oe.value.filter((Ne) => Ne.id !== $e);
      }, de), $e;
    }
    function Te(j) {
      Oe.value = Oe.value.filter((E) => E.id !== j);
    }
    function ct(j) {
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
    const Je = T(() => {
      if (!z.value) return "neutral";
      const j = z.value.workflows, E = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || z.value.has_changes;
      return z.value.comparison.is_synced ? E ? "warning" : "success" : "error";
    });
    T(() => z.value ? Je.value === "success" ? "All synced" : Je.value === "warning" ? "Uncommitted changes" : Je.value === "error" ? "Not synced" : "" : "");
    async function Ee() {
      F.value = !0, O.value = null;
      try {
        const [j, E, de, $e] = await Promise.all([
          d(!0),
          h(),
          f(),
          _()
        ]);
        z.value = j, D.value = E.commits, N.value = de.branches, G.value = $e, n("statusUpdate", j), H.value && await H.value.loadWorkflows(!0);
      } catch (j) {
        O.value = j instanceof Error ? j.message : "Failed to load status", z.value = null, D.value = [], N.value = [];
      } finally {
        F.value = !1;
      }
    }
    function ne(j) {
      L.value = j;
    }
    async function P(j) {
      var de;
      L.value = null;
      const E = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      pe.value = {
        title: E ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: E ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((de = j.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: E ? ss() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: E,
        onConfirm: async () => {
          var De;
          pe.value = null, ge();
          const $e = me(`Checking out ${j.short_hash || ((De = j.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Ne = await g(j.hash, E);
          Te($e), Ne.status === "success" ? me("Restarting ComfyUI...", "success") : me(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function ae(j) {
      const E = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      pe.value = {
        title: E ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: E ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: E ? ss() : void 0,
        warning: E ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          pe.value = null, ge();
          const de = me(`Switching to ${j}...`, "info", 0), $e = await l(j, E);
          Te(de), $e.status === "success" ? me("Restarting ComfyUI...", "success") : me($e.message || "Branch switch failed", "error");
        }
      };
    }
    async function W(j) {
      const E = me(`Creating branch ${j}...`, "info", 0), de = await v(j);
      Te(E), de.status === "success" ? (me(`Branch "${j}" created`, "success"), await Ee()) : me(de.message || "Failed to create branch", "error");
    }
    async function B(j, E = !1) {
      const de = async ($e) => {
        var De;
        const Ne = me(`Deleting branch ${j}...`, "info", 0);
        try {
          const ie = await m(j, $e);
          Te(Ne), ie.status === "success" ? (me(`Branch "${j}" deleted`, "success"), await Ee()) : (De = ie.message) != null && De.includes("not fully merged") ? pe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              pe.value = null, await de(!0);
            }
          } : me(ie.message || "Failed to delete branch", "error");
        } catch (ie) {
          Te(Ne);
          const Ft = ie instanceof Error ? ie.message : "Failed to delete branch";
          Ft.includes("not fully merged") ? pe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              pe.value = null, await de(!0);
            }
          } : me(Ft, "error");
        }
      };
      pe.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          pe.value = null, await de(E);
        }
      };
    }
    async function Y(j) {
      L.value = null;
      const E = prompt("Enter branch name:");
      if (E) {
        const de = me(`Creating branch ${E}...`, "info", 0), $e = await v(E, j.hash);
        Te(de), $e.status === "success" ? (me(`Branch "${E}" created from ${j.short_hash}`, "success"), await Ee()) : me($e.message || "Failed to create branch", "error");
      }
    }
    function ge() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ze() {
      pe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          pe.value = null, ge(), me("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ut() {
      pe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          pe.value = null, me("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function et(j) {
      M.value = !1, X.value = j, be.value = !0;
    }
    async function Tt() {
      be.value = !1, re.value = !0, ge(), Z.value = {
        progress: 10,
        state: mt(10),
        message: vt(10)
      };
      try {
        await u(X.value), xs(), Ss();
      } catch (j) {
        ft(), re.value = !1, me(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), Z.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function mt(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function vt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[mt(j)] || "";
    }
    function xs() {
      if (x) return;
      let j = 10;
      const E = 60, de = 5e3, $e = 100, Ne = (E - j) / (de / $e);
      x = window.setInterval(() => {
        if (j += Ne, j >= E && (j = E, ft()), Z.value.progress < E) {
          const De = Math.floor(j);
          Z.value = {
            progress: De,
            state: mt(De),
            message: vt(De)
          };
        }
      }, $e);
    }
    function ft() {
      x && (clearInterval(x), x = null);
    }
    function Ss() {
      U || (U = window.setInterval(async () => {
        try {
          let j = await k.getStatus();
          if ((!j || j.state === "idle") && (j = await I()), !j)
            return;
          const E = j.progress || 0;
          E >= 60 && ft();
          const de = Math.max(E, Z.value.progress), $e = j.state && j.state !== "idle" && j.state !== "unknown", Ne = $e ? j.state : mt(de), De = $e && j.message || vt(de);
          Z.value = {
            state: Ne,
            progress: de,
            message: De
          }, j.state === "complete" ? (ft(), Ot(), re.value = !1, me(`✓ Switched to ${X.value}`, "success"), await Ee(), X.value = "") : j.state === "rolled_back" ? (ft(), Ot(), re.value = !1, me("Switch failed, restored previous environment", "warning"), X.value = "") : j.state === "critical_failure" && (ft(), Ot(), re.value = !1, me(`Critical error during switch: ${j.message}`, "error"), X.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Ot() {
      ft(), U && (clearInterval(U), U = null);
    }
    function Is() {
      be.value = !1, X.value = "";
    }
    async function Es() {
      Ge.value = !1, await Ee(), me("✓ Changes committed", "success");
    }
    async function Ms() {
      Be.value = !1;
      const j = me("Syncing environment...", "info", 0);
      try {
        const E = await y("skip", !0);
        if (Te(j), E.status === "success") {
          const de = [];
          E.nodes_installed.length && de.push(`${E.nodes_installed.length} installed`), E.nodes_removed.length && de.push(`${E.nodes_removed.length} removed`);
          const $e = de.length ? `: ${de.join(", ")}` : "";
          me(`✓ Environment synced${$e}`, "success"), await Ee();
        } else {
          const de = E.errors.length ? E.errors.join("; ") : E.message;
          me(`Sync failed: ${de}`, "error");
        }
      } catch (E) {
        Te(j), me(`Sync error: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
      }
    }
    async function Rs(j) {
      Ce.value = j, se.value = !0, ee.value = { state: "creating", message: `Creating environment '${j.name}'...` };
      try {
        const E = await $(j);
        E.status === "started" ? zs() : E.status === "error" && (se.value = !1, me(`Failed to create environment: ${E.message}. Check debug logs for details.`, "error"), Ce.value = null);
      } catch (E) {
        se.value = !1, me(`Error creating environment: ${E instanceof Error ? E.message : "Unknown error"}. Check debug logs.`, "error"), Ce.value = null;
      }
    }
    function zs() {
      we || (we = window.setInterval(async () => {
        var j;
        try {
          const E = await R();
          ee.value = { state: E.state, message: E.message }, E.state === "complete" ? (ts(), se.value = !1, me(`✓ Environment '${E.environment_name}' created`, "success"), await Ee(), oe.value && await oe.value.loadEnvironments(), (j = Ce.value) != null && j.switch_after && E.environment_name && await et(E.environment_name), Ce.value = null) : E.state === "error" && (ts(), se.value = !1, me(`Failed to create environment: ${E.error || E.message}. Check debug logs.`, "error"), Ce.value = null);
        } catch (E) {
          console.error("Failed to poll create progress:", E);
        }
      }, 2e3));
    }
    function ts() {
      we && (clearInterval(we), we = null);
    }
    async function Ls(j) {
      var E;
      if (((E = A.value) == null ? void 0 : E.name) === j) {
        me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      pe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          pe.value = null;
          try {
            const de = await b(j);
            de.status === "success" ? (me(`Environment "${j}" deleted`, "success"), await Ee(), oe.value && await oe.value.loadEnvironments()) : me(de.message || "Failed to delete environment", "error");
          } catch (de) {
            me(`Error deleting environment: ${de instanceof Error ? de.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function ss() {
      if (!z.value) return [];
      const j = [], E = z.value.workflows;
      return E.new.length && j.push(`${E.new.length} new workflow(s)`), E.modified.length && j.push(`${E.modified.length} modified workflow(s)`), E.deleted.length && j.push(`${E.deleted.length} deleted workflow(s)`), j;
    }
    return Ie(Ee), (j, E) => {
      var de, $e, Ne, De;
      return s(), o("div", Ky, [
        e("div", qy, [
          e("div", Yy, [
            E[27] || (E[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            z.value ? (s(), o("div", Qy)) : c("", !0)
          ]),
          e("div", Xy, [
            e("button", {
              class: te(["icon-btn", { spinning: F.value }]),
              onClick: Ee,
              title: "Refresh"
            }, [...E[28] || (E[28] = [
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
              onClick: E[0] || (E[0] = (ie) => n("close")),
              title: "Close"
            }, [...E[29] || (E[29] = [
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
        e("div", Zy, [
          e("div", { class: "env-switcher-header" }, [
            E[30] || (E[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ze
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ut
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: E[1] || (E[1] = (ie) => ke("environments", "all-envs"))
          }, [
            z.value ? (s(), o("div", Jy, [
              e("span", null, a(((de = A.value) == null ? void 0 : de.name) || (($e = z.value) == null ? void 0 : $e.environment) || "Loading..."), 1),
              e("span", ew, "(" + a(z.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            E[31] || (E[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", tw, [
          e("div", sw, [
            e("div", ow, [
              E[32] || (E[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "status" && Ve.value === "this-env" }]),
                onClick: E[2] || (E[2] = (ie) => ke("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "workflows" }]),
                onClick: E[3] || (E[3] = (ie) => ke("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "models-env" }]),
                onClick: E[4] || (E[4] = (ie) => ke("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "branches" }]),
                onClick: E[5] || (E[5] = (ie) => ke("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "history" }]),
                onClick: E[6] || (E[6] = (ie) => ke("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "nodes" }]),
                onClick: E[7] || (E[7] = (ie) => ke("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "debug-env" }]),
                onClick: E[8] || (E[8] = (ie) => ke("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            E[35] || (E[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", nw, [
              E[33] || (E[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "environments" }]),
                onClick: E[9] || (E[9] = (ie) => ke("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "model-index" }]),
                onClick: E[10] || (E[10] = (ie) => ke("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "settings" }]),
                onClick: E[11] || (E[11] = (ie) => ke("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "debug-workspace" }]),
                onClick: E[12] || (E[12] = (ie) => ke("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            E[36] || (E[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", aw, [
              E[34] || (E[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "export" }]),
                onClick: E[13] || (E[13] = (ie) => ke("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "import" }]),
                onClick: E[14] || (E[14] = (ie) => ke("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "remotes" }]),
                onClick: E[15] || (E[15] = (ie) => ke("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", lw, [
            O.value ? (s(), o("div", iw, a(O.value), 1)) : !z.value && ce.value === "status" ? (s(), o("div", rw, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              ce.value === "status" ? (s(), S(ca, {
                key: 0,
                status: z.value,
                onSwitchBranch: Ze,
                onCommitChanges: E[16] || (E[16] = (ie) => Ge.value = !0),
                onSyncEnvironment: E[17] || (E[17] = (ie) => Be.value = !0),
                onViewWorkflows: E[18] || (E[18] = (ie) => ke("workflows", "this-env")),
                onViewHistory: E[19] || (E[19] = (ie) => ke("history", "this-env")),
                onViewDebug: E[20] || (E[20] = (ie) => ke("debug-env", "this-env"))
              }, null, 8, ["status"])) : ce.value === "workflows" ? (s(), S(vu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: H,
                onRefresh: Ee
              }, null, 512)) : ce.value === "models-env" ? (s(), S(Yu, {
                key: 2,
                onNavigate: We
              })) : ce.value === "branches" ? (s(), S(xa, {
                key: 3,
                branches: N.value,
                current: ((Ne = z.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: ae,
                onCreate: W,
                onDelete: B
              }, null, 8, ["branches", "current"])) : ce.value === "history" ? (s(), S(Pa, {
                key: 4,
                commits: D.value,
                onSelect: ne,
                onCheckout: P
              }, null, 8, ["commits"])) : ce.value === "nodes" ? (s(), S(Um, {
                key: 5,
                onOpenNodeManager: it
              })) : ce.value === "debug-env" ? (s(), S(Rg, { key: 6 })) : ce.value === "environments" ? (s(), S(kh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: oe,
                onSwitch: et,
                onCreate: Rs,
                onDelete: Ls
              }, null, 512)) : ce.value === "model-index" ? (s(), S(gm, {
                key: 8,
                onRefresh: Ee
              })) : ce.value === "settings" ? (s(), S(Sg, { key: 9 })) : ce.value === "debug-workspace" ? (s(), S(Eg, { key: 10 })) : ce.value === "export" ? (s(), S(Rh, { key: 11 })) : ce.value === "import" ? (s(), S(n1, { key: 12 })) : ce.value === "remotes" ? (s(), S(ig, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        L.value ? (s(), S(_1, {
          key: 0,
          commit: L.value,
          onClose: E[21] || (E[21] = (ie) => L.value = null),
          onCheckout: P,
          onCreateBranch: Y
        }, null, 8, ["commit"])) : c("", !0),
        pe.value ? (s(), S(I1, {
          key: 1,
          title: pe.value.title,
          message: pe.value.message,
          details: pe.value.details,
          warning: pe.value.warning,
          confirmLabel: pe.value.confirmLabel,
          cancelLabel: pe.value.cancelLabel,
          secondaryLabel: pe.value.secondaryLabel,
          secondaryAction: pe.value.secondaryAction,
          destructive: pe.value.destructive,
          onConfirm: pe.value.onConfirm,
          onCancel: E[22] || (E[22] = (ie) => pe.value = null),
          onSecondary: pe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        p($y, {
          show: be.value,
          "from-environment": ((De = A.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": X.value,
          onConfirm: Tt,
          onClose: Is
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ge.value && z.value ? (s(), S(ks, {
          key: 2,
          status: z.value,
          "as-modal": !0,
          onClose: E[23] || (E[23] = (ie) => Ge.value = !1),
          onCommitted: Es
        }, null, 8, ["status"])) : c("", !0),
        Be.value && z.value ? (s(), S(Hy, {
          key: 3,
          show: Be.value,
          "mismatch-details": {
            missing_nodes: z.value.comparison.missing_nodes,
            extra_nodes: z.value.comparison.extra_nodes
          },
          onConfirm: Ms,
          onClose: E[24] || (E[24] = (ie) => Be.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        p(Uy, {
          show: re.value,
          state: Z.value.state,
          progress: Z.value.progress,
          message: Z.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        se.value ? (s(), o("div", dw, [
          e("div", cw, [
            E[39] || (E[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", uw, [
              E[37] || (E[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", mw, a(ee.value.message), 1),
              E[38] || (E[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        M.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: E[26] || (E[26] = xe((ie) => M.value = !1, ["self"]))
        }, [
          e("div", vw, [
            e("div", fw, [
              E[41] || (E[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: E[25] || (E[25] = (ie) => M.value = !1)
              }, [...E[40] || (E[40] = [
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
            e("div", gw, [
              E[42] || (E[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", hw, [
                (s(!0), o(V, null, J(G.value, (ie) => (s(), o("div", {
                  key: ie.name,
                  class: te(["env-item", { current: ie.is_current }])
                }, [
                  e("div", pw, [
                    e("div", yw, [
                      e("span", ww, a(ie.is_current ? "●" : "○"), 1),
                      e("span", kw, a(ie.name), 1),
                      ie.current_branch ? (s(), o("span", bw, "(" + a(ie.current_branch) + ")", 1)) : c("", !0),
                      ie.is_current ? (s(), o("span", _w, "CURRENT")) : c("", !0)
                    ]),
                    e("div", $w, a(ie.workflow_count) + " workflows • " + a(ie.node_count) + " nodes ", 1)
                  ]),
                  ie.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ft) => et(ie.name)
                  }, " SWITCH ", 8, Cw))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", xw, [
          p(Us, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(V, null, J(Oe.value, (ie) => (s(), o("div", {
                key: ie.id,
                class: te(["toast", ie.type])
              }, [
                e("span", Sw, a(ct(ie.type)), 1),
                e("span", Iw, a(ie.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Mw = /* @__PURE__ */ q(Ew, [["__scopeId", "data-v-97ffaacd"]]), Rw = { class: "item-header" }, zw = { class: "item-info" }, Lw = { class: "filename" }, Tw = { class: "metadata" }, Nw = { class: "size" }, Dw = {
  key: 0,
  class: "type"
}, Pw = { class: "item-actions" }, Uw = {
  key: 0,
  class: "progress-section"
}, Bw = { class: "progress-bar" }, Ow = { class: "progress-stats" }, Fw = { class: "downloaded" }, Aw = { class: "speed" }, Vw = {
  key: 0,
  class: "eta"
}, Ww = {
  key: 1,
  class: "status-msg paused"
}, Gw = {
  key: 2,
  class: "status-msg queued"
}, jw = {
  key: 3,
  class: "status-msg completed"
}, Hw = {
  key: 4,
  class: "status-msg failed"
}, Kw = {
  key: 0,
  class: "retries"
}, qw = /* @__PURE__ */ K({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: r }) {
    const n = r;
    function d(g) {
      if (g === 0) return "?";
      const v = g / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(g / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(g) {
      return g === 0 ? "-" : `${(g / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function f(g) {
      if (g < 60) return `${Math.round(g)}s`;
      const v = Math.floor(g / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (g, v) => (s(), o("div", {
      class: te(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Rw, [
        e("div", zw, [
          e("div", Lw, a(t.item.filename), 1),
          e("div", Tw, [
            e("span", Nw, a(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", Dw, a(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Pw, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Uw, [
        e("div", Bw, [
          e("div", {
            class: "progress-fill",
            style: Xe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Ow, [
          e("span", Fw, a(d(t.item.downloaded)) + " / " + a(d(t.item.size)), 1),
          e("span", Aw, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Vw, a(f(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Ww, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Gw, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", jw, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Hw, [
        w(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Kw, "(" + a(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), St = /* @__PURE__ */ q(qw, [["__scopeId", "data-v-2110df65"]]), Yw = { class: "queue-title" }, Qw = { class: "count" }, Xw = { class: "queue-actions" }, Zw = { class: "action-label" }, Jw = {
  key: 0,
  class: "overall-progress"
}, e0 = { class: "progress-bar" }, t0 = {
  key: 0,
  class: "current-mini"
}, s0 = { class: "filename" }, o0 = { class: "speed" }, n0 = {
  key: 1,
  class: "queue-content"
}, a0 = {
  key: 0,
  class: "section"
}, l0 = {
  key: 1,
  class: "section"
}, i0 = { class: "section-header" }, r0 = { class: "section-label paused" }, d0 = { class: "items-list" }, c0 = {
  key: 2,
  class: "section"
}, u0 = { class: "section-header" }, m0 = { class: "section-label" }, v0 = { class: "items-list" }, f0 = {
  key: 3,
  class: "section"
}, g0 = { class: "section-header" }, h0 = { class: "section-label" }, p0 = { class: "items-list" }, y0 = {
  key: 4,
  class: "section"
}, w0 = { class: "section-header" }, k0 = { class: "section-label failed" }, b0 = { class: "items-list" }, _0 = /* @__PURE__ */ K({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: r,
      currentDownload: n,
      queuedItems: d,
      completedItems: h,
      failedItems: f,
      pausedItems: g,
      hasItems: v,
      activeCount: l,
      cancelDownload: m,
      retryDownload: _,
      resumeDownload: u,
      resumeAllPaused: I,
      removeItem: $,
      clearCompleted: R
    } = Lt(), b = C(!1);
    let y = null;
    bt(
      () => ({
        active: l.value,
        failed: f.value.length,
        paused: g.value.length,
        completed: h.value.length
      }),
      (N, G) => {
        y && (clearTimeout(y), y = null);
        const A = N.active === 0 && N.failed === 0 && N.paused === 0 && N.completed > 0, F = G && (G.active > 0 || G.paused > 0);
        A && F && (y = setTimeout(() => {
          R(), y = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const k = T(() => {
      var A;
      if (r.items.length === 0) return 0;
      const N = h.value.length, G = ((A = n.value) == null ? void 0 : A.progress) || 0;
      return Math.round((N + G / 100) / r.items.length * 100);
    });
    function z(N) {
      m(N);
    }
    function D(N) {
      return N === 0 ? "" : `${(N / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (N, G) => (s(), S(Me, { to: "body" }, [
      he(v) ? (s(), o("div", {
        key: 0,
        class: te(["model-download-queue", { minimized: !b.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: G[0] || (G[0] = (A) => b.value = !b.value)
        }, [
          e("div", Yw, [
            G[4] || (G[4] = e("span", { class: "icon" }, "↓", -1)),
            G[5] || (G[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Qw, "(" + a(he(l)) + "/" + a(he(r).items.length) + ")", 1)
          ]),
          e("div", Xw, [
            e("span", Zw, a(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (s(), o("div", n0, [
          he(n) ? (s(), o("div", a0, [
            G[6] || (G[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            p(St, {
              item: he(n),
              onCancel: G[1] || (G[1] = (A) => z(he(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          he(g).length > 0 ? (s(), o("div", l0, [
            e("div", i0, [
              e("span", r0, "Paused (" + a(he(g).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: G[2] || (G[2] = //@ts-ignore
                (...A) => he(I) && he(I)(...A))
              }, "Resume All")
            ]),
            e("div", d0, [
              (s(!0), o(V, null, J(he(g), (A) => (s(), S(St, {
                key: A.id,
                item: A,
                onResume: (F) => he(u)(A.id),
                onRemove: (F) => he($)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          he(d).length > 0 ? (s(), o("div", c0, [
            e("div", u0, [
              e("span", m0, "Queued (" + a(he(d).length) + ")", 1)
            ]),
            e("div", v0, [
              (s(!0), o(V, null, J(he(d), (A) => (s(), S(St, {
                key: A.id,
                item: A,
                onCancel: (F) => z(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          he(h).length > 0 ? (s(), o("div", f0, [
            e("div", g0, [
              e("span", h0, "Completed (" + a(he(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: G[3] || (G[3] = //@ts-ignore
                (...A) => he(R) && he(R)(...A))
              }, "Clear")
            ]),
            e("div", p0, [
              (s(!0), o(V, null, J(he(h).slice(0, 3), (A) => (s(), S(St, {
                key: A.id,
                item: A,
                onRemove: (F) => he($)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          he(f).length > 0 ? (s(), o("div", y0, [
            e("div", w0, [
              e("span", k0, "Failed (" + a(he(f).length) + ")", 1)
            ]),
            e("div", b0, [
              (s(!0), o(V, null, J(he(f), (A) => (s(), S(St, {
                key: A.id,
                item: A,
                onRetry: (F) => he(_)(A.id),
                onRemove: (F) => he($)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", Jw, [
          e("div", e0, [
            e("div", {
              class: "progress-fill",
              style: Xe({ width: `${k.value}%` })
            }, null, 4)
          ]),
          he(n) ? (s(), o("div", t0, [
            e("span", s0, a(he(n).filename), 1),
            e("span", o0, a(D(he(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), $0 = /* @__PURE__ */ q(_0, [["__scopeId", "data-v-60751cfa"]]), C0 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', x0 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', S0 = {
  comfy: C0,
  phosphor: x0
}, Jt = "comfy", bs = "comfygit-theme";
let gt = null, _s = Jt;
function I0() {
  try {
    const t = localStorage.getItem(bs);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Jt;
}
function $s(t = Jt) {
  gt && gt.remove(), gt = document.createElement("style"), gt.id = "comfygit-theme-styles", gt.setAttribute("data-theme", t), gt.textContent = S0[t], document.head.appendChild(gt), document.body.setAttribute("data-comfygit-theme", t), _s = t;
  try {
    localStorage.setItem(bs, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function E0() {
  return _s;
}
function M0(t) {
  $s(t);
}
const es = document.createElement("link");
es.rel = "stylesheet";
es.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(es);
const R0 = I0();
$s(R0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), M0(t);
  },
  getTheme: () => {
    const t = E0();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let je = null, Fe = null, Rt = null, It = null, rs = null;
const kt = C(null);
async function Pt() {
  var t;
  if (!((t = wt) != null && t.api)) return null;
  try {
    const r = await wt.api.fetchApi("/v2/comfygit/status");
    r.ok && (kt.value = await r.json());
  } catch {
  }
}
function z0() {
  if (!kt.value) return !1;
  const t = kt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || kt.value.has_changes;
}
function L0() {
  je && je.remove(), je = document.createElement("div"), je.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", je.appendChild(t), je.addEventListener("click", (d) => {
    d.target === je && Ht();
  });
  const r = (d) => {
    d.key === "Escape" && (Ht(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Qt({
    render: () => Xt(Mw, {
      onClose: Ht,
      onStatusUpdate: (d) => {
        kt.value = d, zt();
      }
    })
  }).mount(t), document.body.appendChild(je);
}
function Ht() {
  je && (je.remove(), je = null);
}
function T0(t) {
  Et(), Fe = document.createElement("div"), Fe.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  Fe.style.position = "fixed", Fe.style.top = `${r.bottom + 8}px`, Fe.style.right = `${window.innerWidth - r.right}px`, Fe.style.zIndex = "10001";
  const n = (h) => {
    Fe && !Fe.contains(h.target) && h.target !== t && (Et(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const d = (h) => {
    h.key === "Escape" && (Et(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Rt = Qt({
    render: () => Xt(ks, {
      status: kt.value,
      onClose: Et,
      onCommitted: () => {
        Et(), Pt().then(zt);
      }
    })
  }), Rt.mount(Fe), document.body.appendChild(Fe);
}
function Et() {
  Rt && (Rt.unmount(), Rt = null), Fe && (Fe.remove(), Fe = null);
}
function N0() {
  It || (It = document.createElement("div"), It.className = "comfygit-download-queue-root", rs = Qt({
    render: () => Xt($0)
  }), rs.mount(It), document.body.appendChild(It), console.log("[ComfyGit] Model download queue mounted"));
}
let tt = null;
function zt() {
  if (!tt) return;
  const t = tt.querySelector(".commit-indicator");
  t && (t.style.display = z0() ? "block" : "none");
}
const Cs = document.createElement("style");
Cs.textContent = `
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
document.head.appendChild(Cs);
wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, f;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = L0, tt = document.createElement("button"), tt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", tt.innerHTML = 'Commit <span class="commit-indicator"></span>', tt.title = "Quick Commit", tt.onclick = () => T0(tt), t.appendChild(r), t.appendChild(tt), (f = (h = wt.menu) == null ? void 0 : h.settingsGroup) != null && f.element && (wt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), N0();
    const { loadPendingDownloads: n } = Lt();
    n(), await Pt(), zt(), setInterval(async () => {
      await Pt(), zt();
    }, 3e4);
    const d = wt.api;
    if (d) {
      let g = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((m) => {
          (m.startsWith("workflow:") || m.startsWith("Comfy.OpenWorkflowsPaths:") || m.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(m);
        }), window.location.reload();
      }, v = function() {
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", m.appendChild(_);
        const u = document.createElement("button");
        u.textContent = "Refresh", u.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, u.onmouseover = () => u.style.background = "var(--comfy-input-bg)", u.onmouseout = () => u.style.background = "var(--comfy-menu-bg)", u.onclick = () => g(), m.appendChild(u);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => m.remove(), m.appendChild(I), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      d.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: _, workflow_name: u } = m.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${u}`), await Pt(), zt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      d.addEventListener("status", async (m) => {
        const _ = m.detail != null;
        _ && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), g()) : v()), l = _;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
