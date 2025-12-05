import { app as Bt } from "../../scripts/app.js";
import { defineComponent as se, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Re, createBlock as R, resolveDynamicComponent as Os, normalizeClass as fe, withCtx as l, toDisplayString as a, createVNode as _, createTextVNode as h, computed as z, Fragment as V, renderList as ie, normalizeStyle as Lt, ref as y, onMounted as Ne, watch as ut, Teleport as et, withModifiers as Be, Transition as Ro, createSlots as Kt, withKeys as wt, reactive as vs, onUnmounted as Cs, readonly as Po, unref as Se, withDirectives as Pe, vModelText as kt, vModelRadio as Rt, vModelCheckbox as ks, nextTick as As, vModelSelect as Dt, vModelDynamic as xs, TransitionGroup as Mo, createApp as Fs, h as Bs } from "vue";
const Do = { class: "panel-layout" }, Lo = {
  key: 0,
  class: "panel-layout-header"
}, zo = {
  key: 1,
  class: "panel-layout-search"
}, Uo = { class: "panel-layout-content" }, No = {
  key: 2,
  class: "panel-layout-footer"
}, Oo = /* @__PURE__ */ se({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", Do, [
      c.$slots.header ? (s(), o("div", Lo, [
        Re(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", zo, [
        Re(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Uo, [
        Re(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", No, [
        Re(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), ne = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, u] of c)
    n[i] = u;
  return n;
}, nt = /* @__PURE__ */ ne(Oo, [["__scopeId", "data-v-21565df9"]]), Ao = {
  key: 0,
  class: "panel-title-prefix"
}, Fo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Bo = /* @__PURE__ */ se({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), R(Os(`h${t.level}`), {
      class: fe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", Ao, a(t.prefix), 1)) : (s(), o("span", Fo)),
        Re(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vo = /* @__PURE__ */ ne(Bo, [["__scopeId", "data-v-c3875efc"]]), Wo = ["title"], Go = ["width", "height"], jo = /* @__PURE__ */ se({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (i) => c.$emit("click"))
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
      ])], 8, Go))
    ], 8, Wo));
  }
}), so = /* @__PURE__ */ ne(jo, [["__scopeId", "data-v-6fc7f16d"]]), Ko = { class: "header-left" }, Ho = {
  key: 0,
  class: "header-actions"
}, qo = /* @__PURE__ */ se({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Ko, [
        _(Vo, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), R(so, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Ho, [
        Re(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ ne(qo, [["__scopeId", "data-v-55a62cd6"]]), Yo = {
  key: 0,
  class: "section-title-count"
}, Jo = {
  key: 1,
  class: "section-title-icon"
}, Xo = /* @__PURE__ */ se({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), R(Os(`h${t.level}`), {
      class: fe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Re(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Yo, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", Jo, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ct = /* @__PURE__ */ ne(Xo, [["__scopeId", "data-v-559361eb"]]), Qo = { class: "status-grid" }, Zo = { class: "status-grid__columns" }, en = { class: "status-grid__column" }, tn = { class: "status-grid__title" }, sn = { class: "status-grid__column status-grid__column--right" }, on = { class: "status-grid__title" }, nn = {
  key: 0,
  class: "status-grid__footer"
}, an = /* @__PURE__ */ se({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Qo, [
      e("div", Zo, [
        e("div", en, [
          e("h4", tn, a(t.leftTitle), 1),
          Re(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", sn, [
          e("h4", on, a(t.rightTitle), 1),
          Re(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", nn, [
        Re(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), ln = /* @__PURE__ */ ne(an, [["__scopeId", "data-v-73b7ba3f"]]), rn = {
  key: 0,
  class: "status-item__icon"
}, dn = {
  key: 1,
  class: "status-item__count"
}, cn = { class: "status-item__label" }, un = /* @__PURE__ */ se({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = z(() => `status-item--${c.variant}`);
    return (i, u) => (s(), o("div", {
      class: fe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", rn, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", dn, a(t.count), 1)) : r("", !0),
      e("span", cn, a(t.label), 1)
    ], 2));
  }
}), Et = /* @__PURE__ */ ne(un, [["__scopeId", "data-v-6f929183"]]), mn = { class: "issue-card__header" }, vn = { class: "issue-card__icon" }, fn = { class: "issue-card__title" }, pn = {
  key: 0,
  class: "issue-card__content"
}, gn = {
  key: 0,
  class: "issue-card__description"
}, hn = {
  key: 1,
  class: "issue-card__items"
}, yn = {
  key: 2,
  class: "issue-card__actions"
}, wn = /* @__PURE__ */ se({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = z(() => `issue-card--${c.severity}`);
    return (i, u) => (s(), o("div", {
      class: fe(["issue-card", n.value])
    }, [
      e("div", mn, [
        e("span", vn, a(t.icon), 1),
        e("h4", fn, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", pn, [
        t.description ? (s(), o("p", gn, a(t.description), 1)) : r("", !0),
        Re(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", hn, [
        (s(!0), o(V, null, ie(t.items, (g, m) => (s(), o("div", {
          key: m,
          class: "issue-card__item"
        }, [
          u[0] || (u[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", yn, [
        Re(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ ne(wn, [["__scopeId", "data-v-df6aa348"]]), kn = ["type", "disabled"], bn = {
  key: 0,
  class: "spinner"
}, _n = /* @__PURE__ */ se({
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
    return (c, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", bn)) : r("", !0),
      t.loading ? r("", !0) : Re(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, kn));
  }
}), J = /* @__PURE__ */ ne(_n, [["__scopeId", "data-v-772abe47"]]), $n = { class: "empty-state" }, Cn = {
  key: 0,
  class: "empty-icon"
}, xn = { class: "empty-message" }, Sn = /* @__PURE__ */ se({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", $n, [
      t.icon ? (s(), o("div", Cn, a(t.icon), 1)) : r("", !0),
      e("p", xn, a(t.message), 1),
      t.actionLabel ? (s(), R(J, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          h(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), _t = /* @__PURE__ */ ne(Sn, [["__scopeId", "data-v-4466284f"]]), In = /* @__PURE__ */ se({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: fe(["detail-label"]),
      style: Lt({ minWidth: t.minWidth })
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ys = /* @__PURE__ */ ne(In, [["__scopeId", "data-v-75e9eeb8"]]), En = /* @__PURE__ */ se({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: fe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ls = /* @__PURE__ */ ne(En, [["__scopeId", "data-v-2f186e4c"]]), Tn = { class: "detail-row" }, Rn = /* @__PURE__ */ se({
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
    return (c, n) => (s(), o("div", Tn, [
      _(ys, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), R(Ls, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Re(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ge = /* @__PURE__ */ ne(Rn, [["__scopeId", "data-v-ef15664a"]]), Pn = { class: "modal-header" }, Mn = { class: "modal-body" }, Dn = { class: "status-section" }, Ln = {
  key: 0,
  class: "status-section"
}, zn = { class: "section-header-row" }, Un = {
  key: 0,
  class: "workflow-group"
}, Nn = { class: "workflow-group-header" }, On = { class: "workflow-group-title" }, An = { class: "workflow-list" }, Fn = { class: "workflow-name" }, Bn = { class: "workflow-issue" }, Vn = {
  key: 1,
  class: "workflow-group"
}, Wn = { class: "workflow-group-header" }, Gn = { class: "workflow-group-title" }, jn = { class: "workflow-list" }, Kn = { class: "workflow-name" }, Hn = { class: "workflow-issue" }, qn = {
  key: 2,
  class: "workflow-group"
}, Yn = { class: "workflow-group-header" }, Jn = { class: "workflow-group-title" }, Xn = { class: "workflow-list" }, Qn = { class: "workflow-name" }, Zn = {
  key: 3,
  class: "workflow-group"
}, ea = { class: "workflow-group-header" }, ta = { class: "workflow-group-title" }, sa = { class: "workflow-list" }, oa = { class: "workflow-name" }, na = {
  key: 4,
  class: "workflow-group"
}, aa = { class: "workflow-group-header" }, la = { class: "workflow-group-title" }, ia = { class: "workflow-list" }, ra = { class: "workflow-name" }, da = {
  key: 5,
  class: "workflow-group"
}, ca = { class: "workflow-group-title" }, ua = { class: "expand-icon" }, ma = {
  key: 0,
  class: "workflow-list"
}, va = { class: "workflow-name" }, fa = {
  key: 1,
  class: "status-section"
}, pa = {
  key: 0,
  class: "change-group"
}, ga = { class: "change-group-header" }, ha = { class: "change-group-title" }, ya = { class: "change-list" }, wa = { class: "node-name" }, ka = {
  key: 0,
  class: "dev-badge"
}, ba = {
  key: 1,
  class: "change-group"
}, _a = { class: "change-group-header" }, $a = { class: "change-group-title" }, Ca = { class: "change-list" }, xa = { class: "node-name" }, Sa = {
  key: 0,
  class: "dev-badge"
}, Ia = {
  key: 2,
  class: "change-group"
}, Ea = { class: "change-list" }, Ta = { class: "change-item" }, Ra = { class: "node-name" }, Pa = {
  key: 3,
  class: "change-group"
}, Ma = {
  key: 2,
  class: "status-section"
}, Da = { class: "section-header-row" }, La = {
  key: 0,
  class: "drift-item"
}, za = { class: "drift-list" }, Ua = {
  key: 0,
  class: "drift-list-more"
}, Na = {
  key: 1,
  class: "drift-item"
}, Oa = { class: "drift-list" }, Aa = {
  key: 0,
  class: "drift-list-more"
}, Fa = {
  key: 2,
  class: "drift-item"
}, Ba = { class: "drift-list" }, Va = { class: "version-actual" }, Wa = { class: "version-expected" }, Ga = {
  key: 0,
  class: "drift-list-more"
}, ja = {
  key: 3,
  class: "drift-item"
}, Ka = { class: "repair-action" }, Ha = {
  key: 3,
  class: "status-section"
}, qa = { class: "info-box" }, Ya = { class: "drift-list" }, Ja = {
  key: 0,
  class: "drift-list-more"
}, Xa = {
  key: 4,
  class: "status-section"
}, Qa = { class: "warning-box" }, Za = {
  key: 5,
  class: "empty-state-inline"
}, el = { class: "modal-actions" }, tl = /* @__PURE__ */ se({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = y(!1);
    Ne(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), ut(() => c.show, (b, f) => {
      console.log("StatusDetailModal show prop changed from", f, "to", b);
    }, { immediate: !0 });
    const i = z(() => {
      var b, f, x;
      return ((x = (f = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : f.analyzed) == null ? void 0 : x.filter(
        (I) => I.status === "broken" && I.sync_state === "synced"
      )) || [];
    }), u = z(() => {
      var b, f, x;
      return ((x = (f = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : f.analyzed) == null ? void 0 : x.filter(
        (I) => I.status === "broken" && I.sync_state !== "synced"
      )) || [];
    }), g = z(() => {
      var b, f, x;
      return ((x = (f = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : f.synced) == null ? void 0 : x.filter((I) => {
        var P, O, T;
        const $ = (T = (O = (P = c.status) == null ? void 0 : P.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : T.find((E) => E.name === I);
        return !$ || $.status !== "broken";
      })) || [];
    }), m = z(() => {
      var b, f, x, I, $;
      return (b = c.status) != null && b.workflows ? (((f = c.status.workflows.new) == null ? void 0 : f.length) ?? 0) > 0 || (((x = c.status.workflows.modified) == null ? void 0 : x.length) ?? 0) > 0 || (((I = c.status.workflows.deleted) == null ? void 0 : I.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), p = z(() => {
      var f, x, I;
      const b = (f = c.status) == null ? void 0 : f.git_changes;
      return b ? (((x = b.nodes_added) == null ? void 0 : x.length) ?? 0) > 0 || (((I = b.nodes_removed) == null ? void 0 : I.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), d = z(() => {
      var b, f, x, I, $, P;
      return !m.value && !p.value && ((f = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : f.is_synced) && (((x = c.status) == null ? void 0 : x.missing_models_count) ?? 0) === 0 && (((P = ($ = (I = c.status) == null ? void 0 : I.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), v = z(() => {
      var f, x;
      const b = (x = (f = c.status) == null ? void 0 : f.git_changes) == null ? void 0 : x.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function w(b) {
      return typeof b == "string" ? b : b.name;
    }
    function k(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, f) => {
      var x, I, $, P, O, T, E, q, B, F, S, C, M, X, oe, K, te, Y, U, N, D, ve;
      return s(), R(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (ae) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Pn, [
              f[8] || (f[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (ae) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", Mn, [
              e("div", Dn, [
                _(ct, { level: "4" }, {
                  default: l(() => [...f[9] || (f[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                _(Ge, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              m.value ? (s(), o("div", Ln, [
                e("div", zn, [
                  _(ct, { level: "4" }, {
                    default: l(() => [...f[10] || (f[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: f[1] || (f[1] = (ae) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Un, [
                  e("div", Nn, [
                    f[11] || (f[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", On, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", An, [
                    (s(!0), o(V, null, ie(i.value, (ae) => (s(), o("div", {
                      key: ae.name,
                      class: "workflow-item"
                    }, [
                      e("span", Fn, a(ae.name), 1),
                      e("span", Bn, a(ae.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                u.value.length ? (s(), o("div", Vn, [
                  e("div", Wn, [
                    f[12] || (f[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Gn, "BROKEN (UNCOMMITTED) (" + a(u.value.length) + ")", 1)
                  ]),
                  e("div", jn, [
                    (s(!0), o(V, null, ie(u.value, (ae) => (s(), o("div", {
                      key: ae.name,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(ae.name), 1),
                      e("span", Hn, a(ae.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (I = (x = t.status.workflows) == null ? void 0 : x.new) != null && I.length ? (s(), o("div", qn, [
                  e("div", Yn, [
                    f[13] || (f[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Jn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Xn, [
                    (s(!0), o(V, null, ie(t.status.workflows.new, (ae) => (s(), o("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      e("span", Qn, a(ae), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (P = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (s(), o("div", Zn, [
                  e("div", ea, [
                    f[14] || (f[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", ta, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", sa, [
                    (s(!0), o(V, null, ie(t.status.workflows.modified, (ae) => (s(), o("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      e("span", oa, a(ae), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (T = (O = t.status.workflows) == null ? void 0 : O.deleted) != null && T.length ? (s(), o("div", na, [
                  e("div", aa, [
                    f[15] || (f[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", la, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ia, [
                    (s(!0), o(V, null, ie(t.status.workflows.deleted, (ae) => (s(), o("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      e("span", ra, a(ae), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                g.value.length ? (s(), o("div", da, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: f[2] || (f[2] = (ae) => n.value = !n.value)
                  }, [
                    f[16] || (f[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ca, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", ua, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", ma, [
                    (s(!0), o(V, null, ie(g.value, (ae) => (s(), o("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      e("span", va, a(ae), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              p.value ? (s(), o("div", fa, [
                _(ct, { level: "4" }, {
                  default: l(() => [...f[17] || (f[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (E = t.status.git_changes) == null ? void 0 : E.nodes_added) != null && q.length ? (s(), o("div", pa, [
                  e("div", ga, [
                    f[18] || (f[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ha, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ya, [
                    (s(!0), o(V, null, ie(t.status.git_changes.nodes_added, (ae) => (s(), o("div", {
                      key: w(ae),
                      class: "change-item"
                    }, [
                      e("span", wa, a(w(ae)), 1),
                      k(ae) ? (s(), o("span", ka, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (F = (B = t.status.git_changes) == null ? void 0 : B.nodes_removed) != null && F.length ? (s(), o("div", ba, [
                  e("div", _a, [
                    f[19] || (f[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", $a, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ca, [
                    (s(!0), o(V, null, ie(t.status.git_changes.nodes_removed, (ae) => (s(), o("div", {
                      key: w(ae),
                      class: "change-item"
                    }, [
                      e("span", xa, a(w(ae)), 1),
                      k(ae) ? (s(), o("span", Sa, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = t.status.git_changes) != null && S.workflow_changes ? (s(), o("div", Ia, [
                  f[20] || (f[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Ea, [
                    e("div", Ta, [
                      e("span", Ra, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (C = t.status.git_changes) != null && C.has_other_changes ? (s(), o("div", Pa, [...f[21] || (f[21] = [
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
              (M = t.status.comparison) != null && M.is_synced ? r("", !0) : (s(), o("div", Ma, [
                e("div", Da, [
                  _(ct, { level: "4" }, {
                    default: l(() => [...f[22] || (f[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: f[3] || (f[3] = (ae) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                f[26] || (f[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (oe = (X = t.status.comparison) == null ? void 0 : X.missing_nodes) != null && oe.length ? (s(), o("div", La, [
                  _(Ge, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", za, [
                    (s(!0), o(V, null, ie(t.status.comparison.missing_nodes.slice(0, 10), (ae) => (s(), o("div", {
                      key: ae,
                      class: "drift-list-item"
                    }, " - " + a(ae), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Ua, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (te = (K = t.status.comparison) == null ? void 0 : K.extra_nodes) != null && te.length ? (s(), o("div", Na, [
                  _(Ge, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Oa, [
                    (s(!0), o(V, null, ie(t.status.comparison.extra_nodes.slice(0, 10), (ae) => (s(), o("div", {
                      key: ae,
                      class: "drift-list-item"
                    }, " - " + a(ae), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Aa, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (U = (Y = t.status.comparison) == null ? void 0 : Y.version_mismatches) != null && U.length ? (s(), o("div", Fa, [
                  _(Ge, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Ba, [
                    (s(!0), o(V, null, ie(t.status.comparison.version_mismatches.slice(0, 10), (ae) => (s(), o("div", {
                      key: ae.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(ae.name) + ": ", 1),
                      e("span", Va, a(ae.actual), 1),
                      f[23] || (f[23] = h(" → ", -1)),
                      e("span", Wa, a(ae.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Ga, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((N = t.status.comparison) == null ? void 0 : N.packages_in_sync) === !1 ? (s(), o("div", ja, [
                  _(Ge, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ka, [
                  _(J, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: f[4] || (f[4] = (ae) => b.$emit("repair"))
                  }, {
                    default: l(() => [...f[24] || (f[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  f[25] || (f[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ve = (D = t.status.comparison) == null ? void 0 : D.disabled_nodes) != null && ve.length ? (s(), o("div", Ha, [
                _(ct, { level: "4" }, {
                  default: l(() => [...f[27] || (f[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", qa, [
                  f[28] || (f[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ya, [
                  (s(!0), o(V, null, ie(t.status.comparison.disabled_nodes.slice(0, 10), (ae) => (s(), o("div", {
                    key: ae,
                    class: "drift-list-item"
                  }, " • " + a(ae), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ja, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Xa, [
                _(ct, { level: "4" }, {
                  default: l(() => [...f[29] || (f[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Qa, [
                  f[30] || (f[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                f[31] || (f[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", Za, [...f[32] || (f[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", el, [
              _(J, {
                variant: "secondary",
                onClick: f[5] || (f[5] = (ae) => b.$emit("close"))
              }, {
                default: l(() => [...f[33] || (f[33] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), sl = /* @__PURE__ */ ne(tl, [["__scopeId", "data-v-e2b37122"]]), ol = { class: "health-section-header" }, nl = { class: "suggestions-content" }, al = { class: "suggestions-text" }, ll = { style: { "margin-top": "var(--cg-space-3)" } }, il = {
  key: 1,
  class: "no-issues-text"
}, rl = /* @__PURE__ */ se({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, u = y(!1), g = y(!1);
    function m() {
      u.value = !0;
    }
    function p() {
      u.value = !1, v("view-workflows");
    }
    function d() {
      u.value = !1, v("view-nodes");
    }
    const v = n, w = y(!1), k = y(!1);
    function b() {
      k.value = !0, v("repair-environment");
    }
    function f() {
      k.value = !1;
    }
    function x() {
      u.value = !1;
    }
    const I = z(() => {
      const Y = i.status.workflows.analyzed || [], U = Y.filter(
        (N) => N.unresolved_models_count > 0 || N.ambiguous_models_count > 0
      );
      return U.length === 0 && i.status.missing_models_count > 0 ? Y.filter((N) => N.sync_state === "synced") : U;
    });
    function $() {
      const Y = I.value;
      Y.length !== 0 && (w.value = !0, v("repair-missing-models", Y.map((U) => U.name)));
    }
    function P() {
      w.value = !1;
    }
    c({ resetRepairingState: P, resetRepairingEnvironmentState: f, closeDetailModal: x });
    const O = z(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), T = z(() => i.status.has_changes), E = z(() => {
      const Y = i.status.git_changes;
      return Y.nodes_added.length > 0 || Y.nodes_removed.length > 0 || Y.workflow_changes;
    }), q = z(() => i.status.has_changes || O.value), B = z(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), F = z(() => i.status.git_changes.has_other_changes), S = z(() => {
      var Y;
      return ((Y = i.status.workflows.analyzed) == null ? void 0 : Y.filter((U) => U.status === "broken")) || [];
    }), C = z(() => {
      var Y;
      return ((Y = i.status.workflows.analyzed) == null ? void 0 : Y.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), M = z(() => S.value.length > 0), X = z(() => M.value || C.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), oe = z(() => {
      const Y = [];
      return i.status.workflows.new.length > 0 && Y.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && Y.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && Y.push(`${i.status.workflows.deleted.length} deleted`), Y.length > 0 ? `${Y.join(", ")} workflow${Y.length === 1 && !Y[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), K = z(() => {
      var N, D;
      const Y = [], U = i.status.comparison;
      return (N = U.missing_nodes) != null && N.length && Y.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (D = U.extra_nodes) != null && D.length && Y.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), Y.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Y.join(" and ")}.`;
    }), te = z(() => {
      var N, D;
      const Y = [], U = i.status.comparison;
      return (N = U.extra_nodes) != null && N.length && (U.extra_nodes.slice(0, 3).forEach((ve) => {
        Y.push(`Untracked: ${ve}`);
      }), U.extra_nodes.length > 3 && Y.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (D = U.missing_nodes) != null && D.length && (U.missing_nodes.slice(0, 3).forEach((ve) => {
        Y.push(`Missing: ${ve}`);
      }), U.missing_nodes.length > 3 && Y.push(`...and ${U.missing_nodes.length - 3} more missing`)), Y;
    });
    return (Y, U) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), R(ht, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              _(J, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (N) => Y.$emit("start-setup"))
              }, {
                default: l(() => [...U[13] || (U[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), R(ht, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              _(J, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (N) => Y.$emit("view-environments"))
              }, {
                default: l(() => [...U[14] || (U[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), R(ht, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              _(J, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (N) => Y.$emit("create-environment"))
              }, {
                default: l(() => [...U[15] || (U[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (N) => g.value = !0),
            onMouseleave: U[5] || (U[5] = (N) => g.value = !1)
          }, [
            e("div", ol, [
              _(ct, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...U[16] || (U[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              _(Ro, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), R(J, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: m
                  }, {
                    default: l(() => [...U[17] || (U[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            _(ln, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Kt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), R(Et, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), R(Et, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), R(Et, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                _(Et, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: O.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), R(Et, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), R(Et, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), R(Et, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                F.value ? (s(), R(Et, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                T.value && !E.value && !F.value ? (s(), R(Et, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                T.value ? r("", !0) : (s(), R(Et, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              q.value ? {
                name: "footer",
                fn: l(() => [
                  U[19] || (U[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", nl, [
                    e("span", al, a(oe.value), 1),
                    _(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (N) => Y.$emit("commit-changes"))
                    }, {
                      default: l(() => [...U[18] || (U[18] = [
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
          t.status.is_detached_head ? (s(), R(ht, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              _(J, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (N) => Y.$emit("create-branch"))
              }, {
                default: l(() => [...U[20] || (U[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", ll, [
            _(ct, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...U[21] || (U[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            X.value ? (s(), o(V, { key: 0 }, [
              S.value.length > 0 ? (s(), R(ht, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: S.value.map((N) => `${N.name} — ${N.issue_summary}`)
              }, {
                actions: l(() => [
                  _(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (N) => Y.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[22] || (U[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              C.value.length > 0 ? (s(), R(ht, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${C.value.length} workflow${C.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: C.value.map((N) => `${N.name} — ${N.models_needing_path_sync_count} model path${N.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  _(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (N) => Y.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[23] || (U[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !M.value ? (s(), R(ht, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  _(J, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      h(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  _(J, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (N) => Y.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[24] || (U[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), R(ht, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: K.value,
                items: te.value
              }, {
                actions: l(() => [
                  _(J, {
                    variant: "secondary",
                    size: "sm",
                    onClick: m
                  }, {
                    default: l(() => [...U[25] || (U[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  _(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (N) => Y.$emit("view-nodes"))
                  }, {
                    default: l(() => [...U[26] || (U[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), R(ht, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  _(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (N) => Y.$emit("view-nodes"))
                  }, {
                    default: l(() => [...U[27] || (U[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : q.value ? (s(), o("span", il, "No issues")) : (s(), R(_t, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      _(sl, {
        show: u.value,
        status: t.status,
        "is-repairing": k.value,
        onClose: U[12] || (U[12] = (N) => u.value = !1),
        onNavigateWorkflows: p,
        onNavigateNodes: d,
        onRepair: b
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), dl = /* @__PURE__ */ ne(rl, [["__scopeId", "data-v-55fcd77f"]]), cl = ["type", "value", "placeholder", "disabled"], ul = /* @__PURE__ */ se({
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
  setup(t, { expose: c, emit: n }) {
    const i = t, u = n, g = y(null);
    function m(p) {
      const d = p.target.value;
      u("update:modelValue", d);
    }
    return Ne(() => {
      i.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var p;
        return (p = g.value) == null ? void 0 : p.focus();
      },
      blur: () => {
        var p;
        return (p = g.value) == null ? void 0 : p.blur();
      }
    }), (p, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: fe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        d[0] || (d[0] = wt((v) => p.$emit("enter"), ["enter"])),
        d[1] || (d[1] = wt((v) => p.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => p.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => p.$emit("blur"))
    }, null, 42, cl));
  }
}), bs = /* @__PURE__ */ ne(ul, [["__scopeId", "data-v-0380d08f"]]), ml = { class: "branch-create-form" }, vl = { class: "form-actions" }, fl = /* @__PURE__ */ se({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = y(""), u = z(() => {
      const p = i.value.trim();
      return p.length > 0 && !p.startsWith("-") && !p.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(p);
    });
    function g() {
      u.value && (n("create", i.value.trim()), i.value = "");
    }
    function m() {
      i.value = "", n("cancel");
    }
    return (p, d) => (s(), o("div", ml, [
      _(bs, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", vl, [
        _(J, {
          variant: "primary",
          size: "sm",
          disabled: !u.value,
          onClick: g
        }, {
          default: l(() => [...d[1] || (d[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        _(J, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: l(() => [...d[2] || (d[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pl = /* @__PURE__ */ ne(fl, [["__scopeId", "data-v-7c500394"]]), gl = { class: "branch-list-item__indicator" }, hl = { class: "branch-list-item__name" }, yl = {
  key: 0,
  class: "branch-list-item__actions"
}, wl = {
  key: 0,
  class: "branch-list-item__current-label"
}, kl = /* @__PURE__ */ se({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", gl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", hl, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", yl, [
        Re(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", wl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), bl = /* @__PURE__ */ ne(kl, [["__scopeId", "data-v-c6581a24"]]), _l = {
  key: 2,
  class: "branch-list"
}, $l = /* @__PURE__ */ se({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = y(!1);
    function u(m) {
      n("create", m), g();
    }
    function g() {
      i.value = !1;
    }
    return (m, p) => (s(), R(nt, null, {
      header: l(() => [
        _(at, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), R(J, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: p[0] || (p[0] = (d) => i.value = !0)
            }, {
              default: l(() => [...p[1] || (p[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), R(pl, {
          key: 0,
          onCreate: u,
          onCancel: g
        })) : r("", !0),
        t.branches.length === 0 ? (s(), R(_t, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", _l, [
          (s(!0), o(V, null, ie(t.branches, (d) => (s(), R(bl, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), R(J, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => m.$emit("delete", d.name)
              }, {
                default: l(() => [...p[2] || (p[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), R(J, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => m.$emit("switch", d.name)
              }, {
                default: l(() => [...p[3] || (p[3] = [
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
}), Cl = /* @__PURE__ */ ne($l, [["__scopeId", "data-v-86784ddd"]]), xl = { class: "commit-list" }, Sl = /* @__PURE__ */ se({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", xl, [
      Re(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Il = /* @__PURE__ */ ne(Sl, [["__scopeId", "data-v-8c5ee761"]]), El = { class: "commit-hash" }, Tl = /* @__PURE__ */ se({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = z(() => c.hash.slice(0, c.length));
    return (i, u) => (s(), o("span", El, a(n.value), 1));
  }
}), oo = /* @__PURE__ */ ne(Tl, [["__scopeId", "data-v-7c333cc6"]]), Rl = { class: "commit-message" }, Pl = { class: "commit-date" }, Ml = /* @__PURE__ */ se({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u() {
      n.clickable && i("click");
    }
    return (g, m) => (s(), o("div", {
      class: fe(["commit-item", { clickable: t.clickable }]),
      onClick: u
    }, [
      _(oo, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Rl, a(t.message), 1),
      e("span", Pl, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = Be(() => {
        }, ["stop"]))
      }, [
        Re(g.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Dl = /* @__PURE__ */ ne(Ml, [["__scopeId", "data-v-dd7c621b"]]), Ll = /* @__PURE__ */ se({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), R(nt, null, {
      header: l(() => [
        _(at, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), R(_t, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), R(Il, { key: 1 }, {
          default: l(() => [
            (s(!0), o(V, null, ie(t.commits, (i) => (s(), R(Dl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (u) => c.$emit("select", i)
            }, {
              actions: l(() => [
                _(J, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => c.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: l(() => [...n[0] || (n[0] = [
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
}), zl = /* @__PURE__ */ ne(Ll, [["__scopeId", "data-v-981c3c64"]]), r8 = vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const d8 = [
  // BROKEN workflows (4) - Missing dependencies or category mismatch
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
  // Category mismatch example - model exists but in wrong directory
  {
    name: "lora-wrong-dir.json",
    status: "broken",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 8,
    model_count: 2,
    sync_state: "synced",
    has_category_mismatch_issues: !0,
    models_with_category_mismatch: 1
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
  ...Array(12).fill(null).map((t, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
], c8 = {
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
  },
  // Category mismatch example - LoRA in wrong directory
  "lora-wrong-dir.json": {
    name: "lora-wrong-dir.json",
    status: "broken",
    nodes: [
      {
        name: "comfyui-core",
        installed: !0,
        registry_id: "comfyui-core",
        repository: null,
        version: "0.3.0",
        source: "builtin",
        download_url: null
      }
    ],
    models: [
      {
        filename: "my_character_lora.safetensors",
        hash: "f8c9e2d1",
        // CRC32
        sha256_hash: "f8c9e2d1a0b1c2d3e4f5678901234567890abcdef1234567890abcdef12345678",
        blake3_hash: null,
        status: "category_mismatch",
        // Wrong directory!
        importance: "required",
        size_mb: 185,
        file_size: 194e6,
        node_type: "LoraLoader",
        node_id: "7",
        relative_path: "checkpoints/my_character_lora.safetensors",
        // Wrong! Should be loras/
        category: "checkpoints",
        // Wrong category
        mtime: Date.now() / 1e3 - 86400 * 3,
        metadata: {
          model_type: "lora",
          base_model: "SDXL"
        },
        // Category mismatch details
        has_category_mismatch: !0,
        expected_categories: ["loras"],
        actual_category: "checkpoints"
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "b22f3f8c",
        sha256_hash: "b22f3f8c90d1e2f3456789abcdef01234567890abcdef1234567890abcdef012",
        blake3_hash: null,
        status: "available",
        importance: "required",
        size_mb: 6938,
        file_size: 7275159552,
        node_type: "CheckpointLoader",
        node_id: "4",
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        category: "checkpoints",
        mtime: Date.now() / 1e3 - 86400 * 30,
        metadata: {
          model_type: "checkpoint",
          base_model: "SDXL"
        },
        has_category_mismatch: !1,
        expected_categories: ["checkpoints"],
        actual_category: "checkpoints"
      }
    ]
  }
}, Ul = [
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
], u8 = [
  ...Ul,
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
function Xt() {
  return !1;
}
function Ae() {
  const t = y(!1), c = y(null);
  async function n(W, de) {
    var We;
    if (!((We = window.app) != null && We.api))
      throw new Error("ComfyUI API not available");
    const ke = await window.app.api.fetchApi(W, de);
    if (!ke.ok) {
      const _e = await ke.json().catch(() => ({}));
      throw new Error(_e.error || _e.message || `Request failed: ${ke.status}`);
    }
    return ke.json();
  }
  async function i(W = !1) {
    return n(W ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function u(W, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: W, allow_issues: de })
    });
  }
  async function g(W = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${W}&offset=${de}`);
  }
  async function m(W) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W })
    });
  }
  async function p() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function d() {
    return n("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function v(W) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W, force: !0 })
    });
  }
  async function w() {
    return n("/v2/comfygit/branches");
  }
  async function k(W) {
    return n(`/v2/comfygit/commit/${W}`);
  }
  async function b(W, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: W, force: de })
    });
  }
  async function f(W, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: W, start_point: de })
    });
  }
  async function x(W, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: W, force: de })
    });
  }
  async function I(W, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(W)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const W = await i();
        return [{
          name: W.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + W.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: W.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: W.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(W, de) {
    const ke = { target_env: W };
    return de && (ke.workspace_path = de), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function O() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function T(W) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function E() {
    return n("/v2/workspace/environments/create_status");
  }
  async function q(W = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${W}`);
  }
  async function B(W) {
    return n(`/v2/workspace/environments/${W}`, {
      method: "DELETE"
    });
  }
  async function F(W = !1) {
    try {
      return n(W ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await i(W), ke = [];
      return de.workflows.new.forEach((We) => {
        ke.push({ name: We, status: "new", missing_nodes: 0, missing_models: 0, path: We });
      }), de.workflows.modified.forEach((We) => {
        ke.push({ name: We, status: "modified", missing_nodes: 0, missing_models: 0, path: We });
      }), de.workflows.synced.forEach((We) => {
        ke.push({ name: We, status: "synced", missing_nodes: 0, missing_models: 0, path: We });
      }), ke;
    }
  }
  async function S(W) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(W)}/details`);
  }
  async function C(W) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(W)}/resolve`, {
      method: "POST"
    });
  }
  async function M(W, de, ke) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(W)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: ke })
    });
  }
  async function X(W, de, ke) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(W)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: ke })
    });
  }
  async function oe() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function K() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function te(W) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(W)}`);
  }
  async function Y(W) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function U(W, de) {
    return n(`/v2/workspace/models/${W}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function N(W, de) {
    return n(`/v2/workspace/models/${W}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function D(W) {
    return n(`/v2/workspace/models/${W}`, {
      method: "DELETE"
    });
  }
  async function ve(W) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function ae() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function be() {
    return n("/v2/workspace/models/directory");
  }
  async function Ce(W) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function Le(W) {
    try {
      const de = W ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(W)}` : "/v2/comfygit/config";
      return n(de);
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0,
        comfyui_extra_args: []
      };
    }
  }
  async function Ue(W, de) {
    const ke = de ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(de)}` : "/v2/comfygit/config";
    return n(ke, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function me(W, de) {
    try {
      const ke = new URLSearchParams();
      return W && ke.append("level", W), de && ke.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${ke}`);
    } catch {
      return [];
    }
  }
  async function ge(W, de) {
    try {
      const ke = new URLSearchParams();
      return W && ke.append("level", W), de && ke.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${ke}`);
    } catch {
      return [];
    }
  }
  async function Me() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function ce() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Z(W, de) {
    try {
      const ke = new URLSearchParams();
      return W && ke.append("level", W), de && ke.append("lines", de.toString()), n(`/v2/workspace/debug/orchestrator-logs?${ke}`);
    } catch {
      return [];
    }
  }
  async function De() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function pe(W) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function Je() {
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
  async function tt(W) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(W)}/track-dev`, {
      method: "POST"
    });
  }
  async function st(W) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(W)}/install`, {
      method: "POST"
    });
  }
  async function Te(W) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(W)}/update`, {
      method: "POST"
    });
  }
  async function Xe(W) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function qe() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Qe(W, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: W, url: de })
    });
  }
  async function mt(W) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function $e(W, de, ke) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(W)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: ke })
    });
  }
  async function je(W, de) {
    const ke = {};
    return de && (ke["X-Git-Auth-Token"] = de), n(`/v2/comfygit/remotes/${encodeURIComponent(W)}/fetch`, {
      method: "POST",
      headers: ke
    });
  }
  async function it(W) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(W)}/status`);
    } catch {
      return null;
    }
  }
  async function Ye(W = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: W,
        remove_extra_nodes: de
      })
    });
  }
  async function ue(W, de) {
    const ke = de ? `/v2/comfygit/remotes/${encodeURIComponent(W)}/pull-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(W)}/pull-preview`;
    return n(ke);
  }
  async function Q(W, de = {}) {
    const ke = { "Content-Type": "application/json" };
    return de.authToken && (ke["X-Git-Auth-Token"] = de.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(W)}/pull`, {
      method: "POST",
      headers: ke,
      body: JSON.stringify({
        model_strategy: de.modelStrategy || "skip",
        force: de.force || !1,
        resolutions: de.resolutions
      })
    });
  }
  async function ee(W, de) {
    const ke = de ? `/v2/comfygit/remotes/${encodeURIComponent(W)}/push-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(W)}/push-preview`;
    return n(ke);
  }
  async function L(W, de = {}) {
    const ke = { "Content-Type": "application/json" };
    return de.authToken && (ke["X-Git-Auth-Token"] = de.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(W)}/push`, {
      method: "POST",
      headers: ke,
      body: JSON.stringify({ force: de.force || !1 })
    });
  }
  async function G(W, de) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(W)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: de })
    });
  }
  async function le(W) {
    const de = {
      success: 0,
      failed: []
    };
    for (const ke of W)
      try {
        await C(ke), de.success++;
      } catch (We) {
        de.failed.push({
          name: ke,
          error: We instanceof Error ? We.message : "Unknown error"
        });
      }
    return de;
  }
  async function xe(W) {
    var We;
    const de = new FormData();
    if (de.append("file", W), !((We = window.app) != null && We.api))
      throw new Error("ComfyUI API not available");
    const ke = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: de
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ke.ok) {
      const _e = await ke.json().catch(() => ({}));
      throw new Error(_e.error || `Preview failed: ${ke.status}`);
    }
    return ke.json();
  }
  async function Ve(W) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(W)}`
    );
  }
  async function ft(W, de, ke, We) {
    var qs;
    const _e = new FormData();
    if (_e.append("file", W), _e.append("name", de), _e.append("model_strategy", ke), _e.append("torch_backend", We), !((qs = window.app) != null && qs.api))
      throw new Error("ComfyUI API not available");
    const ns = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: _e
    });
    if (!ns.ok) {
      const Ys = await ns.json().catch(() => ({}));
      throw new Error(Ys.message || Ys.error || `Import failed: ${ns.status}`);
    }
    return ns.json();
  }
  async function Ct() {
    return n("/v2/workspace/import/status");
  }
  async function rt(W) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: W })
    });
  }
  async function Nt(W, de, ke, We) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: W,
        name: de,
        model_strategy: ke,
        torch_backend: We
      })
    });
  }
  async function Ot() {
    return n("/v2/setup/status");
  }
  async function At(W) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Ht() {
    return n("/v2/setup/initialize_status");
  }
  async function pt(W) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Vt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Ft() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function qt(W, de) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: W, save_key: de })
    });
  }
  async function ts() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ss(W) {
    const de = W ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(W)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(de);
  }
  async function os(W) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function re() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function j(W) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function Ee(W) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/stop`, {
      method: "POST"
    });
  }
  async function Ze(W) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/start`, {
      method: "POST"
    });
  }
  async function gt(W) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/status`);
  }
  async function Pt(W) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W })
    });
  }
  async function Mt(W = !1) {
    return n(W ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function xt() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function we() {
    return n("/v2/comfygit/deploy/custom/workers");
  }
  async function St(W) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function H(W) {
    return n(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function A(W) {
    return n("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function he() {
    return n("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Ie(W) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/info`);
  }
  async function Oe(W) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances`);
  }
  async function Ke(W, de) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(de)
    });
  }
  async function lt(W, de) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(de)}/start`, {
      method: "POST"
    });
  }
  async function It(W, de) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(de)}/stop`, {
      method: "POST"
    });
  }
  async function Wt(W, de) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(de)}`, {
      method: "DELETE"
    });
  }
  async function Gt(W) {
    return n("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: W })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: u,
    getHistory: g,
    exportEnv: m,
    validateExport: p,
    validateDeploy: d,
    exportEnvWithForce: v,
    // Git Operations
    getBranches: w,
    getCommitDetail: k,
    checkout: b,
    createBranch: f,
    switchBranch: x,
    deleteBranch: I,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: O,
    createEnvironment: T,
    getCreateProgress: E,
    getComfyUIReleases: q,
    deleteEnvironment: B,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: S,
    resolveWorkflow: C,
    installWorkflowDeps: M,
    setModelImportance: X,
    // Model Management
    getEnvironmentModels: oe,
    getWorkspaceModels: K,
    getModelDetails: te,
    openFileLocation: Y,
    addModelSource: U,
    removeModelSource: N,
    deleteModel: D,
    downloadModel: ve,
    scanWorkspaceModels: ae,
    getModelsDirectory: be,
    setModelsDirectory: Ce,
    // Settings
    getConfig: Le,
    updateConfig: Ue,
    // Debug/Logs
    getEnvironmentLogs: me,
    getWorkspaceLogs: ge,
    getEnvironmentLogPath: Me,
    getWorkspaceLogPath: ce,
    getOrchestratorLogs: Z,
    getOrchestratorLogPath: De,
    openFile: pe,
    // Node Management
    getNodes: Je,
    trackNodeAsDev: tt,
    installNode: st,
    updateNode: Te,
    uninstallNode: Xe,
    // Git Remotes
    getRemotes: qe,
    addRemote: Qe,
    removeRemote: mt,
    updateRemoteUrl: $e,
    fetchRemote: je,
    getRemoteSyncStatus: it,
    // Push/Pull
    getPullPreview: ue,
    pullFromRemote: Q,
    getPushPreview: ee,
    pushToRemote: L,
    validateMerge: G,
    // Environment Sync
    syncEnvironmentManually: Ye,
    // Workflow Repair
    repairWorkflowModels: le,
    // Import Operations
    previewTarballImport: xe,
    previewGitImport: rt,
    validateEnvironmentName: Ve,
    executeImport: ft,
    executeGitImport: Nt,
    getImportProgress: Ct,
    // First-Time Setup
    getSetupStatus: Ot,
    initializeWorkspace: At,
    getInitializeProgress: Ht,
    validatePath: pt,
    // Deploy Operations
    getDeploySummary: Vt,
    getDataCenters: Ft,
    testRunPodConnection: qt,
    getNetworkVolumes: ts,
    getRunPodGpuTypes: ss,
    deployToRunPod: os,
    getRunPodPods: re,
    terminateRunPodPod: j,
    stopRunPodPod: Ee,
    startRunPodPod: Ze,
    getDeploymentStatus: gt,
    exportDeployPackage: Pt,
    getStoredRunPodKey: Mt,
    clearRunPodKey: xt,
    // Custom Worker Operations
    getCustomWorkers: we,
    addCustomWorker: St,
    removeCustomWorker: H,
    testWorkerConnection: A,
    scanForWorkers: he,
    getWorkerSystemInfo: Ie,
    getWorkerInstances: Oe,
    deployToWorker: Ke,
    startWorkerInstance: lt,
    stopWorkerInstance: It,
    terminateWorkerInstance: Wt,
    // Git Authentication
    testGitAuth: Gt
  };
}
async function as(t, c = {}, n = 5e3) {
  const i = new AbortController(), u = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(u), g;
  } catch (g) {
    throw clearTimeout(u), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function no() {
  const t = y(null);
  async function c() {
    try {
      const m = await as(
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
  async function n() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await as(
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
      const m = await as(
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
  async function u() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await as(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await as(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: c,
    checkHealth: n,
    getStatus: i,
    restart: u,
    kill: g
  };
}
const Nl = { class: "base-modal-header" }, Ol = {
  key: 0,
  class: "base-modal-title"
}, Al = { class: "base-modal-body" }, Fl = {
  key: 0,
  class: "base-modal-loading"
}, Bl = {
  key: 1,
  class: "base-modal-error"
}, Vl = {
  key: 0,
  class: "base-modal-footer"
}, Wl = /* @__PURE__ */ se({
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
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u() {
      n.closeOnOverlayClick && i("close");
    }
    function g(m) {
      m.key === "Escape" && n.showCloseButton && i("close");
    }
    return Ne(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Cs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (m, p) => (s(), R(et, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: u
      }, [
        e("div", {
          class: fe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: p[1] || (p[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Nl, [
            Re(m.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Ol, a(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: p[0] || (p[0] = (d) => m.$emit("close"))
            }, [...p[2] || (p[2] = [
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
          e("div", Al, [
            t.loading ? (s(), o("div", Fl, "Loading...")) : t.error ? (s(), o("div", Bl, a(t.error), 1)) : Re(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (s(), o("div", Vl, [
            Re(m.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), He = /* @__PURE__ */ ne(Wl, [["__scopeId", "data-v-8dab1081"]]), Gl = ["type", "disabled"], jl = {
  key: 0,
  class: "spinner"
}, Kl = /* @__PURE__ */ se({
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
    return (c, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", jl)) : r("", !0),
      Re(c.$slots, "default", {}, void 0, !0)
    ], 10, Gl));
  }
}), ye = /* @__PURE__ */ ne(Kl, [["__scopeId", "data-v-f3452606"]]), Hl = {
  key: 0,
  class: "base-title-count"
}, ql = /* @__PURE__ */ se({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), R(Os(`h${t.level}`), {
      class: fe(["base-title", t.variant])
    }, {
      default: l(() => [
        Re(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Hl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cs = /* @__PURE__ */ ne(ql, [["__scopeId", "data-v-5a01561d"]]), Yl = ["value", "disabled"], Jl = {
  key: 0,
  value: "",
  disabled: ""
}, Xl = ["value"], Ql = {
  key: 0,
  class: "base-select-error"
}, Zl = /* @__PURE__ */ se({
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
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, u) => (s(), o("div", {
      class: fe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: fe(["base-select", { error: !!t.error }]),
        onChange: u[0] || (u[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Jl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(V, null, ie(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, Xl))), 128))
      ], 42, Yl),
      t.error ? (s(), o("span", Ql, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), ei = /* @__PURE__ */ ne(Zl, [["__scopeId", "data-v-7436d745"]]), ti = { class: "popover-header" }, si = { class: "popover-title" }, oi = { class: "popover-content" }, ni = {
  key: 0,
  class: "popover-actions"
}, ai = /* @__PURE__ */ se({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), R(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Lt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", ti, [
            e("h4", si, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", oi, [
            Re(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", ni, [
            Re(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), $t = /* @__PURE__ */ ne(ai, [["__scopeId", "data-v-42815ace"]]), li = { class: "detail-section" }, ii = {
  key: 0,
  class: "empty-message"
}, ri = { class: "model-header" }, di = { class: "model-name" }, ci = { class: "model-details" }, ui = { class: "model-row" }, mi = { class: "model-row" }, vi = { class: "label" }, fi = {
  key: 0,
  class: "model-row model-row-nodes"
}, pi = { class: "node-list" }, gi = ["onClick"], hi = {
  key: 1,
  class: "model-row"
}, yi = { class: "value" }, wi = {
  key: 2,
  class: "model-row"
}, ki = { class: "value error" }, bi = {
  key: 0,
  class: "model-actions"
}, _i = { class: "detail-section" }, $i = {
  key: 0,
  class: "empty-message"
}, Ci = { class: "node-name" }, xi = {
  key: 0,
  class: "node-version"
}, Si = /* @__PURE__ */ se({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: u, setModelImportance: g, openFileLocation: m } = Ae(), p = y(null), d = y(!1), v = y(null), w = y(!1), k = y({}), b = y(!1), f = y(/* @__PURE__ */ new Set()), x = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function I(S) {
      switch (S) {
        case "available":
          return "success";
        case "path_mismatch":
          return "warning";
        case "downloadable":
          return "info";
        case "category_mismatch":
          return "error";
        case "missing":
        default:
          return "error";
      }
    }
    function $(S) {
      switch (S) {
        case "available":
          return "✓ Available";
        case "path_mismatch":
          return "⚠ Path Mismatch";
        case "category_mismatch":
          return "✗ Wrong Directory";
        case "downloadable":
          return "⬇ Downloadable";
        case "missing":
        default:
          return "✗ Missing";
      }
    }
    function P(S) {
      if (!S.loaded_by || S.loaded_by.length === 0) return [];
      const C = S.hash || S.filename;
      return f.value.has(C) ? S.loaded_by : S.loaded_by.slice(0, 3);
    }
    function O(S) {
      return f.value.has(S);
    }
    function T(S) {
      f.value.has(S) ? f.value.delete(S) : f.value.add(S), f.value = new Set(f.value);
    }
    async function E() {
      d.value = !0, v.value = null;
      try {
        p.value = await u(n.workflowName);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function q(S, C) {
      k.value[S] = C, w.value = !0;
    }
    async function B(S) {
      try {
        await m(S);
      } catch (C) {
        v.value = C instanceof Error ? C.message : "Failed to open file location";
      }
    }
    async function F() {
      if (!w.value) {
        i("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [S, C] of Object.entries(k.value))
          await g(n.workflowName, S, C);
        i("refresh"), i("close");
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Ne(E), (S, C) => (s(), o(V, null, [
      _(He, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: C[4] || (C[4] = (M) => i("close"))
      }, {
        body: l(() => [
          p.value ? (s(), o(V, { key: 0 }, [
            e("section", li, [
              _(cs, { variant: "section" }, {
                default: l(() => [
                  h("MODELS USED (" + a(p.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              p.value.models.length === 0 ? (s(), o("div", ii, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(V, null, ie(p.value.models, (M) => {
                var X;
                return s(), o("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  e("div", ri, [
                    C[6] || (C[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", di, a(M.filename), 1)
                  ]),
                  e("div", ci, [
                    e("div", ui, [
                      C[7] || (C[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: fe(["value", I(M.status)])
                      }, a($(M.status)), 3)
                    ]),
                    e("div", mi, [
                      e("span", vi, [
                        C[8] || (C[8] = h(" Importance: ", -1)),
                        _(so, {
                          size: 14,
                          title: "About importance levels",
                          onClick: C[0] || (C[0] = (oe) => b.value = !0)
                        })
                      ]),
                      _(ei, {
                        "model-value": k.value[M.filename] || M.importance,
                        options: x,
                        "onUpdate:modelValue": (oe) => q(M.filename, oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (s(), o("div", fi, [
                      C[9] || (C[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", pi, [
                        (s(!0), o(V, null, ie(P(M), (oe, K) => (s(), o("div", {
                          key: `${oe.node_id}-${K}`,
                          class: "node-reference"
                        }, a(oe.node_type) + " (Node #" + a(oe.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (oe) => T(M.hash || M.filename)
                        }, a(O(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, gi)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    M.size_mb ? (s(), o("div", hi, [
                      C[10] || (C[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", yi, a(M.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    M.has_category_mismatch ? (s(), o("div", wi, [
                      C[13] || (C[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ki, [
                        C[11] || (C[11] = h(" In ", -1)),
                        e("code", null, a(M.actual_category) + "/", 1),
                        C[12] || (C[12] = h(" but loader needs ", -1)),
                        e("code", null, a((X = M.expected_categories) == null ? void 0 : X[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  M.status !== "available" ? (s(), o("div", bi, [
                    M.status === "downloadable" ? (s(), R(ye, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: C[1] || (C[1] = (oe) => i("resolve"))
                    }, {
                      default: l(() => [...C[14] || (C[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (s(), R(ye, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => B(M.file_path)
                    }, {
                      default: l(() => [...C[15] || (C[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (s(), R(ye, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: C[2] || (C[2] = (oe) => i("resolve"))
                    }, {
                      default: l(() => [...C[16] || (C[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", _i, [
              _(cs, { variant: "section" }, {
                default: l(() => [
                  h("NODES USED (" + a(p.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              p.value.nodes.length === 0 ? (s(), o("div", $i, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(V, null, ie(p.value.nodes, (M) => (s(), o("div", {
                key: M.name,
                class: "node-item"
              }, [
                e("span", {
                  class: fe(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, a(M.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ci, a(M.name), 1),
                M.version ? (s(), o("span", xi, "v" + a(M.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          _(ye, {
            variant: "secondary",
            onClick: C[3] || (C[3] = (M) => i("close"))
          }, {
            default: l(() => [...C[17] || (C[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (s(), R(ye, {
            key: 0,
            variant: "primary",
            onClick: F
          }, {
            default: l(() => [...C[18] || (C[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      _($t, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: C[5] || (C[5] = (M) => b.value = !1)
      }, {
        content: l(() => [...C[19] || (C[19] = [
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
}), Ii = /* @__PURE__ */ ne(Si, [["__scopeId", "data-v-668728e6"]]), ze = vs({
  items: [],
  status: "idle"
});
let Tt = null;
function ao() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Is(t) {
  return ze.items.find((c) => c.id === t);
}
async function Qt() {
  if (ze.status === "downloading") return;
  const t = ze.items.find((c) => c.status === "queued");
  if (!t) {
    ze.status = "idle";
    return;
  }
  ze.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Ei(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    ze.status = "idle", Qt();
  }
}
async function Ei(t) {
  return new Promise((c, n) => {
    Tt && (Tt.close(), Tt = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), u = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Tt = u;
    let g = Date.now(), m = 0, p = !1;
    u.onmessage = (d) => {
      try {
        const v = JSON.parse(d.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const w = Date.now(), k = (w - g) / 1e3;
            if (k > 0.5) {
              const b = t.downloaded - m;
              if (t.speed = b / k, g = w, m = t.downloaded, t.speed > 0 && t.size > 0) {
                const f = t.size - t.downloaded;
                t.eta = f / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            p = !0, u.close(), Tt = null, c();
            break;
          case "error":
            p = !0, u.close(), Tt = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, u.onerror = () => {
      u.close(), Tt = null, p || n(new Error("Connection lost"));
    };
  });
}
async function Ti() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (ze.items.some((u) => u.url === n.url && u.filename === n.filename))
        continue;
      const i = {
        id: ao(),
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
      ze.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function fs() {
  function t($) {
    for (const P of $) {
      if (ze.items.some(
        (E) => E.url === P.url && E.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const T = {
        id: ao(),
        workflow: P.workflow,
        filename: P.filename,
        url: P.url,
        targetPath: P.targetPath,
        size: P.size || 0,
        type: P.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ze.items.push(T);
    }
    ze.status === "idle" && Qt();
  }
  async function c($) {
    const P = Is($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Tt && (Tt.close(), Tt = null), P.status = "failed", P.error = "Cancelled by user", ze.status = "idle", Qt();
      } else if (P.status === "queued") {
        const O = ze.items.findIndex((T) => T.id === $);
        O >= 0 && ze.items.splice(O, 1);
      }
    }
  }
  function n($) {
    const P = Is($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, ze.status === "idle" && Qt());
  }
  function i($) {
    const P = Is($);
    !P || P.status !== "paused" || (P.status = "queued", ze.status === "idle" && Qt());
  }
  function u() {
    const $ = ze.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    ze.status === "idle" && Qt();
  }
  function g($) {
    const P = ze.items.findIndex((O) => O.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(ze.items[P].status) && ze.items.splice(P, 1);
  }
  function m() {
    ze.items = ze.items.filter(($) => $.status !== "completed");
  }
  function p() {
    ze.items = ze.items.filter(($) => $.status !== "failed");
  }
  const d = z(
    () => ze.items.find(($) => $.status === "downloading")
  ), v = z(
    () => ze.items.filter(($) => $.status === "queued")
  ), w = z(
    () => ze.items.filter(($) => $.status === "completed")
  ), k = z(
    () => ze.items.filter(($) => $.status === "failed")
  ), b = z(
    () => ze.items.filter(($) => $.status === "paused")
  ), f = z(() => ze.items.length > 0), x = z(
    () => ze.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), I = z(
    () => ze.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Po(ze),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: w,
    failedItems: k,
    pausedItems: b,
    hasItems: f,
    activeCount: x,
    hasPaused: I,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: u,
    removeItem: g,
    clearCompleted: m,
    clearFailed: p,
    loadPendingDownloads: Ti
  };
}
function lo() {
  const t = y(null), c = y(null), n = y([]), i = y([]), u = y(!1), g = y(null);
  async function m(O, T) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(O, T);
    if (!E.ok) {
      const B = await E.json().catch(() => ({})), F = B.error || B.message || `Request failed: ${E.status}`;
      throw new Error(F);
    }
    return E.json();
  }
  async function p(O) {
    u.value = !0, g.value = null;
    try {
      let T;
      return Xt() || (T = await m(
        `/v2/comfygit/workflow/${O}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = T, T;
    } catch (T) {
      const E = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = E, T;
    } finally {
      u.value = !1;
    }
  }
  async function d(O, T, E, q) {
    u.value = !0, g.value = null;
    try {
      let B;
      if (!Xt()) {
        const F = Object.fromEntries(T), S = Object.fromEntries(E), C = q ? Array.from(q) : [];
        B = await m(
          `/v2/comfygit/workflow/${O}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: S,
              skipped_packages: C
            })
          }
        );
      }
      return c.value = B, B;
    } catch (B) {
      const F = B instanceof Error ? B.message : "Unknown error occurred";
      throw g.value = F, B;
    } finally {
      u.value = !1;
    }
  }
  async function v(O, T = 10) {
    u.value = !0, g.value = null;
    try {
      let E;
      return Xt() || (E = await m(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: T })
        }
      )), n.value = E.results, E.results;
    } catch (E) {
      const q = E instanceof Error ? E.message : "Unknown error occurred";
      throw g.value = q, E;
    } finally {
      u.value = !1;
    }
  }
  async function w(O, T = 10) {
    u.value = !0, g.value = null;
    try {
      let E;
      return Xt() || (E = await m(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: T })
        }
      )), i.value = E.results, E.results;
    } catch (E) {
      const q = E instanceof Error ? E.message : "Unknown error occurred";
      throw g.value = q, E;
    } finally {
      u.value = !1;
    }
  }
  const k = vs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    k.phase = "idle", k.currentFile = void 0, k.currentFileIndex = void 0, k.totalFiles = void 0, k.bytesDownloaded = void 0, k.bytesTotal = void 0, k.completedFiles = [], k.nodesToInstall = [], k.nodesInstalled = [], k.installError = void 0, k.needsRestart = void 0, k.error = void 0, k.nodeInstallProgress = void 0;
  }
  async function f(O) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xt(), await x(O);
    } catch (T) {
      const E = T instanceof Error ? T.message : "Failed to install nodes";
      throw k.installError = E, T;
    }
  }
  async function x(O) {
    var E;
    const T = await m(
      `/v2/comfygit/workflow/${O}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: k.nodesToInstall
        })
      }
    );
    if (k.nodeInstallProgress) {
      k.nodeInstallProgress.totalNodes = k.nodesToInstall.length;
      const q = new Map(((E = T.failed) == null ? void 0 : E.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < k.nodesToInstall.length; B++) {
        const F = k.nodesToInstall[B], S = q.get(F);
        k.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !S,
          error: S
        });
      }
    }
    return k.nodesInstalled = T.nodes_installed, k.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (k.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function I(O, T, E) {
    b(), k.phase = "resolving", g.value = null;
    const q = Object.fromEntries(T), B = Object.fromEntries(E);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${O}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: B
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const S = F.body.getReader(), C = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: X, value: oe } = await S.read();
        if (X) break;
        M += C.decode(oe, { stream: !0 });
        const K = M.split(`

`);
        M = K.pop() || "";
        for (const te of K) {
          if (!te.trim()) continue;
          const Y = te.split(`
`);
          let U = "", N = "";
          for (const D of Y)
            D.startsWith("event: ") ? U = D.slice(7) : D.startsWith("data: ") && (N = D.slice(6));
          if (N)
            try {
              const D = JSON.parse(N);
              $(U, D);
            } catch (D) {
              console.warn("Failed to parse SSE event:", D);
            }
        }
      }
    } catch (F) {
      const S = F instanceof Error ? F.message : "Unknown error occurred";
      throw g.value = S, k.error = S, k.phase = "error", F;
    }
  }
  function $(O, T) {
    switch (O) {
      case "batch_start":
        k.phase = "downloading", k.totalFiles = T.total;
        break;
      case "file_start":
        k.currentFile = T.filename, k.currentFileIndex = T.index, k.bytesDownloaded = 0, k.bytesTotal = void 0;
        break;
      case "file_progress":
        k.bytesDownloaded = T.downloaded, k.bytesTotal = T.total;
        break;
      case "file_complete":
        k.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        k.nodesToInstall = T.nodes_to_install || [], T.download_results && (k.completedFiles = T.download_results), k.phase = "complete";
        break;
      case "error":
        k.error = T.message, k.phase = "error", g.value = T.message;
        break;
    }
  }
  function P(O, T) {
    const { addToQueue: E } = fs(), q = T.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: O,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return q.length > 0 && E(q), q.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: u,
    error: g,
    progress: k,
    // Methods
    analyzeWorkflow: p,
    applyResolution: d,
    applyResolutionWithProgress: I,
    installNodes: f,
    searchNodes: v,
    searchModels: w,
    resetProgress: b,
    queueModelDownloads: P
  };
}
const Ri = { class: "resolution-stepper" }, Pi = { class: "stepper-header" }, Mi = ["onClick"], Di = {
  key: 0,
  class: "step-icon"
}, Li = {
  key: 1,
  class: "step-number"
}, zi = { class: "step-label" }, Ui = {
  key: 0,
  class: "step-connector"
}, Ni = { class: "stepper-content" }, Oi = /* @__PURE__ */ se({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u(v) {
      var w;
      if ((w = n.stepStats) != null && w[v]) {
        const k = n.stepStats[v];
        return k.total > 0 && k.resolved === k.total;
      }
      return n.completedSteps.includes(v);
    }
    function g(v) {
      var w;
      if ((w = n.stepStats) != null && w[v]) {
        const k = n.stepStats[v];
        return k.resolved > 0 && k.resolved < k.total;
      }
      return !1;
    }
    function m(v) {
      return u(v) ? "state-complete" : g(v) ? "state-partial" : "state-pending";
    }
    function p(v) {
      return !1;
    }
    function d(v) {
      i("step-change", v);
    }
    return (v, w) => (s(), o("div", Ri, [
      e("div", Pi, [
        (s(!0), o(V, null, ie(t.steps, (k, b) => (s(), o("div", {
          key: k.id,
          class: fe(["step", {
            active: t.currentStep === k.id,
            completed: u(k.id),
            "in-progress": g(k.id),
            disabled: p(k.id)
          }]),
          onClick: (f) => d(k.id)
        }, [
          e("div", {
            class: fe(["step-indicator", m(k.id)])
          }, [
            u(k.id) ? (s(), o("span", Di, "✓")) : (s(), o("span", Li, a(b + 1), 1))
          ], 2),
          e("div", zi, a(k.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", Ui)) : r("", !0)
        ], 10, Mi))), 128))
      ]),
      e("div", Ni, [
        Re(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ai = /* @__PURE__ */ ne(Oi, [["__scopeId", "data-v-2a7b3af8"]]), Fi = /* @__PURE__ */ se({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = z(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = z(() => `confidence-${n.value}`), u = z(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, m) => (s(), o("span", {
      class: fe(["confidence-badge", i.value, t.size])
    }, a(u.value), 3));
  }
}), _s = /* @__PURE__ */ ne(Fi, [["__scopeId", "data-v-17ec4b80"]]), Bi = { class: "node-info" }, Vi = { class: "node-info-text" }, Wi = { class: "item-body" }, Gi = {
  key: 0,
  class: "resolved-state"
}, ji = {
  key: 1,
  class: "multiple-options"
}, Ki = { class: "options-list" }, Hi = ["onClick"], qi = ["name", "value", "checked", "onChange"], Yi = { class: "option-content" }, Ji = { class: "option-header" }, Xi = { class: "option-package-id" }, Qi = {
  key: 0,
  class: "option-title"
}, Zi = { class: "option-meta" }, er = {
  key: 0,
  class: "installed-badge"
}, tr = { class: "action-buttons" }, sr = {
  key: 2,
  class: "unresolved"
}, or = {
  key: 0,
  class: "searching-state"
}, nr = { class: "options-list" }, ar = ["onClick"], lr = ["name", "value"], ir = { class: "option-content" }, rr = { class: "option-header" }, dr = { class: "option-package-id" }, cr = {
  key: 0,
  class: "option-description"
}, ur = { class: "option-meta" }, mr = {
  key: 0,
  class: "installed-badge"
}, vr = {
  key: 2,
  class: "unresolved-message"
}, fr = { class: "action-buttons" }, pr = /* @__PURE__ */ se({
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
    statusLabel: {},
    searchResults: {},
    isSearching: { type: Boolean }
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice", "search-result-selected"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u(d, v = 80) {
      return d.length <= v ? d : d.slice(0, v - 3) + "...";
    }
    const g = z(() => !!n.choice);
    z(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), z(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const m = z(() => {
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
    function p(d) {
      i("option-selected", d);
    }
    return (d, v) => (s(), o("div", {
      class: fe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", Bi, [
        e("span", Vi, [
          v[7] || (v[7] = h("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", m.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Wi, [
        g.value ? (s(), o("div", Gi, [
          _(ye, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (w) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ji, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ki, [
            (s(!0), o(V, null, ie(t.options, (w, k) => (s(), o("label", {
              key: w.package_id,
              class: fe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (b) => p(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (b) => p(k)
              }, null, 40, qi),
              e("div", Yi, [
                e("div", Ji, [
                  e("span", Xi, a(w.package_id), 1),
                  _(_s, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (s(), o("div", Qi, a(w.title), 1)) : r("", !0),
                e("div", Zi, [
                  w.is_installed ? (s(), o("span", er, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Hi))), 128))
          ]),
          e("div", tr, [
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (w) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (w) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", sr, [
          t.isSearching ? (s(), o("div", or, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(V, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", nr, [
              (s(!0), o(V, null, ie(t.searchResults.slice(0, 5), (w, k) => (s(), o("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", w)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: k
                }, null, 8, lr),
                e("div", ir, [
                  e("div", rr, [
                    e("span", dr, a(w.package_id), 1),
                    _(_s, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (s(), o("div", cr, a(u(w.description)), 1)) : r("", !0),
                  e("div", ur, [
                    w.is_installed ? (s(), o("span", mr, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, ar))), 128))
            ])
          ], 64)) : (s(), o("div", vr, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", fr, [
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (w) => i("search"))
            }, {
              default: l(() => {
                var w;
                return [
                  h(a((w = t.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (w) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...v[17] || (v[17] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), gr = /* @__PURE__ */ ne(pr, [["__scopeId", "data-v-c2997d1d"]]), hr = { class: "item-navigator" }, yr = { class: "nav-item-info" }, wr = ["title"], kr = { class: "nav-controls" }, br = { class: "nav-arrows" }, _r = ["disabled"], $r = ["disabled"], Cr = { class: "nav-position" }, xr = /* @__PURE__ */ se({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, u) => (s(), o("div", hr, [
      e("div", yr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, wr)
      ]),
      e("div", kr, [
        e("div", br, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: u[0] || (u[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, _r),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: u[1] || (u[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, $r)
        ]),
        e("span", Cr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), io = /* @__PURE__ */ ne(xr, [["__scopeId", "data-v-74af7920"]]), Sr = ["type", "value", "placeholder", "disabled"], Ir = {
  key: 0,
  class: "base-input-error"
}, Er = /* @__PURE__ */ se({
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
    return (c, n) => (s(), o("div", {
      class: fe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: fe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = wt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = wt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Sr),
      t.error ? (s(), o("span", Ir, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ ne(Er, [["__scopeId", "data-v-9ba02cdc"]]), Tr = { class: "node-resolution-step" }, Rr = {
  key: 0,
  class: "auto-resolved-section"
}, Pr = { class: "section-header" }, Mr = { class: "stat-badge" }, Dr = { class: "resolved-packages-list" }, Lr = { class: "package-info" }, zr = { class: "package-id" }, Ur = { class: "node-count" }, Nr = { class: "package-actions" }, Or = {
  key: 0,
  class: "status-badge install"
}, Ar = {
  key: 1,
  class: "status-badge skip"
}, Fr = ["onClick"], Br = {
  key: 1,
  class: "section-divider"
}, Vr = { class: "step-header" }, Wr = { class: "stat-badge" }, Gr = {
  key: 1,
  class: "step-body"
}, jr = {
  key: 3,
  class: "empty-state"
}, Kr = { class: "node-modal-body" }, Hr = { class: "node-search-results-container" }, qr = {
  key: 0,
  class: "node-search-results"
}, Yr = ["onClick"], Jr = { class: "node-result-header" }, Xr = { class: "node-result-package-id" }, Qr = {
  key: 0,
  class: "node-result-description"
}, Zr = {
  key: 1,
  class: "node-empty-state"
}, ed = {
  key: 2,
  class: "node-empty-state"
}, td = {
  key: 3,
  class: "node-empty-state"
}, sd = { class: "node-manual-entry-modal" }, od = { class: "node-modal-body" }, nd = { class: "node-modal-actions" }, ad = /* @__PURE__ */ se({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: u } = lo(), g = y(0), m = y(!1), p = y(!1), d = y(""), v = y(""), w = y([]), k = y(!1), b = y(/* @__PURE__ */ new Map()), f = y(/* @__PURE__ */ new Set()), x = y(!1);
    function I() {
      x.value && N(), x.value = !1;
    }
    const $ = z(() => n.nodes[g.value]), P = z(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), O = z(() => $.value ? b.value.get($.value.node_type) || [] : []), T = z(() => $.value ? f.value.has($.value.node_type) : !1);
    ut($, async (me) => {
      var ge;
      me && ((ge = me.options) != null && ge.length || b.value.has(me.node_type) || f.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await E(me.node_type));
    }, { immediate: !0 });
    async function E(me) {
      f.value.add(me);
      try {
        const ge = await u(me, 5);
        b.value.set(me, ge);
      } catch {
        b.value.set(me, []);
      } finally {
        f.value.delete(me);
      }
    }
    const q = z(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function B(me) {
      return n.skippedPackages.has(me);
    }
    function F(me) {
      i("package-skip", me);
    }
    const S = z(() => {
      var ge;
      if (!$.value) return "not-found";
      const me = n.nodeChoices.get($.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ge = $.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), C = z(() => {
      var ge;
      if (!$.value) return;
      const me = n.nodeChoices.get($.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return me.package_id ? `→ ${me.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ge = $.value.options) != null && ge.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function M(me) {
      me >= 0 && me < n.nodes.length && (g.value = me);
    }
    function X() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function oe() {
      $.value && i("skip", $.value.node_type);
    }
    function K(me) {
      $.value && i("option-selected", $.value.node_type, me);
    }
    function te() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function Y() {
      $.value && (d.value = $.value.node_type, w.value = O.value, m.value = !0, be(d.value));
    }
    function U() {
      v.value = "", p.value = !0;
    }
    function N() {
      m.value = !1, d.value = "", w.value = [];
    }
    function D() {
      p.value = !1, v.value = "";
    }
    let ve = null;
    function ae() {
      ve && clearTimeout(ve), ve = setTimeout(() => {
        be(d.value);
      }, 300);
    }
    async function be(me) {
      if (!me.trim()) {
        w.value = [];
        return;
      }
      k.value = !0;
      try {
        w.value = await u(me, 10);
      } catch {
        w.value = [];
      } finally {
        k.value = !1;
      }
    }
    function Ce(me) {
      $.value && (i("manual-entry", $.value.node_type, me.package_id), N());
    }
    function Le(me) {
      $.value && i("manual-entry", $.value.node_type, me.package_id);
    }
    function Ue() {
      !$.value || !v.value.trim() || (i("manual-entry", $.value.node_type, v.value.trim()), D());
    }
    return (me, ge) => {
      var Me, ce;
      return s(), o("div", Tr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Rr, [
          e("div", Pr, [
            ge[6] || (ge[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Mr, a(q.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Dr, [
            (s(!0), o(V, null, ie(t.autoResolvedPackages, (Z) => (s(), o("div", {
              key: Z.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Lr, [
                e("code", zr, a(Z.package_id), 1),
                e("span", Ur, a(Z.node_types_count) + " node type" + a(Z.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Nr, [
                B(Z.package_id) ? (s(), o("span", Ar, " SKIPPED ")) : (s(), o("span", Or, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (De) => F(Z.package_id)
                }, a(B(Z.package_id) ? "Include" : "Skip"), 9, Fr)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Br)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", Vr, [
            ge[7] || (ge[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Wr, a(P.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), R(io, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ge[0] || (ge[0] = (Z) => M(g.value - 1)),
            onNext: ge[1] || (ge[1] = (Z) => M(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Gr, [
            _(gr, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Me = $.value.options) != null && Me.length),
              options: $.value.options,
              choice: (ce = t.nodeChoices) == null ? void 0 : ce.get($.value.node_type),
              status: S.value,
              "status-label": C.value,
              "search-results": O.value,
              "is-searching": T.value,
              onMarkOptional: X,
              onSkip: oe,
              onManualEntry: U,
              onSearch: Y,
              onOptionSelected: K,
              onClearChoice: te,
              onSearchResultSelected: Le
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", jr, [...ge[8] || (ge[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), R(et, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ge[4] || (ge[4] = Be((Z) => x.value = !0, ["self"])),
            onMouseup: Be(I, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ge[3] || (ge[3] = (Z) => x.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ge[9] || (ge[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Kr, [
                _(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (Z) => d.value = Z),
                  placeholder: "Search by node type, package name...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                e("div", Hr, [
                  w.value.length > 0 ? (s(), o("div", qr, [
                    (s(!0), o(V, null, ie(w.value, (Z) => (s(), o("div", {
                      key: Z.package_id,
                      class: "node-search-result-item",
                      onClick: (De) => Ce(Z)
                    }, [
                      e("div", Jr, [
                        e("code", Xr, a(Z.package_id), 1),
                        Z.match_confidence ? (s(), R(_s, {
                          key: 0,
                          confidence: Z.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      Z.description ? (s(), o("div", Qr, a(Z.description), 1)) : r("", !0)
                    ], 8, Yr))), 128))
                  ])) : k.value ? (s(), o("div", Zr, "Searching...")) : d.value ? (s(), o("div", ed, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", td, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), R(et, { to: "body" }, [
          p.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Be(D, ["self"])
          }, [
            e("div", sd, [
              e("div", { class: "node-modal-header" }, [
                ge[10] || (ge[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              e("div", od, [
                _(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ge[5] || (ge[5] = (Z) => v.value = Z),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", nd, [
                  _(ye, {
                    variant: "secondary",
                    onClick: D
                  }, {
                    default: l(() => [...ge[11] || (ge[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  _(ye, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Ue
                  }, {
                    default: l(() => [...ge[12] || (ge[12] = [
                      h(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : r("", !0)
        ]))
      ]);
    };
  }
}), ld = /* @__PURE__ */ ne(ad, [["__scopeId", "data-v-281581bc"]]), id = { class: "node-info" }, rd = { class: "node-info-text" }, dd = { class: "item-body" }, cd = {
  key: 0,
  class: "resolved-state"
}, ud = {
  key: 1,
  class: "multiple-options"
}, md = { class: "options-list" }, vd = ["onClick"], fd = ["name", "value", "checked", "onChange"], pd = { class: "option-content" }, gd = { class: "option-header" }, hd = { class: "option-filename" }, yd = { class: "option-meta" }, wd = { class: "option-size" }, kd = { class: "option-category" }, bd = { class: "option-path" }, _d = { class: "action-buttons" }, $d = {
  key: 2,
  class: "unresolved"
}, Cd = { class: "action-buttons" }, xd = /* @__PURE__ */ se({
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
  setup(t, { emit: c }) {
    const n = t, i = c, u = z(() => !!n.choice);
    z(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), z(() => {
      var d, v;
      return ((v = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const g = z(() => {
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
    function m(d) {
      i("option-selected", d);
    }
    function p(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (s(), o("div", {
      class: fe(["model-resolution-item", { resolved: u.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", id, [
        e("span", rd, [
          v[7] || (v[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", dd, [
        u.value ? (s(), o("div", cd, [
          _(ye, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (w) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ud, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", md, [
            (s(!0), o(V, null, ie(t.options, (w, k) => (s(), o("label", {
              key: w.model.hash,
              class: fe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (b) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (b) => m(k)
              }, null, 40, fd),
              e("div", pd, [
                e("div", gd, [
                  e("span", hd, a(w.model.filename), 1),
                  _(_s, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", yd, [
                  e("span", wd, a(p(w.model.size)), 1),
                  e("span", kd, a(w.model.category), 1)
                ]),
                e("div", bd, a(w.model.relative_path), 1)
              ])
            ], 10, vd))), 128))
          ]),
          e("div", _d, [
            _(ye, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (w) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (w) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", $d, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Cd, [
            _(ye, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (w) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (w) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...v[15] || (v[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Sd = /* @__PURE__ */ ne(xd, [["__scopeId", "data-v-8a82fefa"]]), Id = { class: "model-resolution-step" }, Ed = { class: "step-header" }, Td = { class: "step-info" }, Rd = { class: "step-title" }, Pd = { class: "step-description" }, Md = { class: "stat-badge" }, Dd = {
  key: 1,
  class: "step-body"
}, Ld = {
  key: 2,
  class: "empty-state"
}, zd = { class: "model-search-modal" }, Ud = { class: "model-modal-body" }, Nd = {
  key: 0,
  class: "model-search-results"
}, Od = ["onClick"], Ad = { class: "model-result-header" }, Fd = { class: "model-result-filename" }, Bd = { class: "model-result-meta" }, Vd = { class: "model-result-category" }, Wd = { class: "model-result-size" }, Gd = {
  key: 0,
  class: "model-result-path"
}, jd = {
  key: 1,
  class: "model-no-results"
}, Kd = {
  key: 2,
  class: "model-searching"
}, Hd = { class: "model-download-url-modal" }, qd = { class: "model-modal-body" }, Yd = { class: "model-input-group" }, Jd = { class: "model-input-group" }, Xd = { class: "model-modal-actions" }, Qd = /* @__PURE__ */ se({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: c }) {
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
    function i(N) {
      var D;
      return N && ((D = n[N]) == null ? void 0 : D[0]) || null;
    }
    const u = t, g = c, m = y(0), p = y(!1), d = y(!1), v = y(""), w = y(""), k = y(""), b = y([]), f = y(!1), x = z(() => u.models[m.value]), I = z(() => u.models.some((N) => N.is_download_intent)), $ = z(() => u.models.filter(
      (N) => u.modelChoices.has(N.filename) || N.is_download_intent
    ).length), P = z(() => {
      var D;
      if (!x.value) return "";
      const N = i((D = x.value.reference) == null ? void 0 : D.node_type);
      return N ? `${N}/${x.value.filename}` : "";
    }), O = z(() => {
      var D;
      if (!x.value) return "not-found";
      const N = u.modelChoices.get(x.value.filename);
      if (N)
        switch (N.action) {
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
      return x.value.is_download_intent ? "download" : (D = x.value.options) != null && D.length ? "ambiguous" : "not-found";
    }), T = z(() => {
      var D, ve;
      if (!x.value) return;
      const N = u.modelChoices.get(x.value.filename);
      if (N)
        switch (N.action) {
          case "select":
            return (D = N.selected_model) != null && D.filename ? `→ ${N.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return x.value.is_download_intent ? "Pending Download" : (ve = x.value.options) != null && ve.length ? `${x.value.options.length} matches` : "Not Found";
    });
    function E(N) {
      N >= 0 && N < u.models.length && (m.value = N);
    }
    function q() {
      x.value && g("mark-optional", x.value.filename);
    }
    function B() {
      x.value && g("skip", x.value.filename);
    }
    function F(N) {
      x.value && g("option-selected", x.value.filename, N);
    }
    function S() {
      x.value && g("clear-choice", x.value.filename);
    }
    function C() {
      x.value && (v.value = x.value.filename, p.value = !0);
    }
    function M() {
      x.value && (w.value = x.value.download_source || "", k.value = x.value.target_path || P.value, d.value = !0);
    }
    function X() {
      p.value = !1, v.value = "", b.value = [];
    }
    function oe() {
      d.value = !1, w.value = "", k.value = "";
    }
    function K() {
      f.value = !0, setTimeout(() => {
        f.value = !1;
      }, 300);
    }
    function te(N) {
      x.value && X();
    }
    function Y() {
      !x.value || !w.value.trim() || (g("download-url", x.value.filename, w.value.trim(), k.value.trim() || void 0), oe());
    }
    function U(N) {
      if (!N) return "Unknown";
      const D = N / (1024 * 1024 * 1024);
      return D >= 1 ? `${D.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, D) => {
      var ve, ae, be;
      return s(), o("div", Id, [
        e("div", Ed, [
          e("div", Td, [
            e("h3", Rd, a(I.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Pd, a(I.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Md, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        x.value ? (s(), R(io, {
          key: 0,
          "item-name": x.value.filename,
          "current-index": m.value,
          "total-items": t.models.length,
          onPrev: D[0] || (D[0] = (Ce) => E(m.value - 1)),
          onNext: D[1] || (D[1] = (Ce) => E(m.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        x.value ? (s(), o("div", Dd, [
          _(Sd, {
            filename: x.value.filename,
            "node-type": ((ve = x.value.reference) == null ? void 0 : ve.node_type) || "Unknown",
            "has-multiple-options": !!((ae = x.value.options) != null && ae.length),
            options: x.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(x.value.filename),
            status: O.value,
            "status-label": T.value,
            onMarkOptional: q,
            onSkip: B,
            onDownloadUrl: M,
            onSearch: C,
            onOptionSelected: F,
            onClearChoice: S
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Ld, [...D[5] || (D[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), R(et, { to: "body" }, [
          p.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(X, ["self"])
          }, [
            e("div", zd, [
              e("div", { class: "model-modal-header" }, [
                D[6] || (D[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              e("div", Ud, [
                _(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": D[2] || (D[2] = (Ce) => v.value = Ce),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", Nd, [
                  (s(!0), o(V, null, ie(b.value, (Ce) => (s(), o("div", {
                    key: Ce.hash,
                    class: "model-search-result-item",
                    onClick: (Le) => te()
                  }, [
                    e("div", Ad, [
                      e("code", Fd, a(Ce.filename), 1)
                    ]),
                    e("div", Bd, [
                      e("span", Vd, a(Ce.category), 1),
                      e("span", Wd, a(U(Ce.size)), 1)
                    ]),
                    Ce.relative_path ? (s(), o("div", Gd, a(Ce.relative_path), 1)) : r("", !0)
                  ], 8, Od))), 128))
                ])) : v.value && !f.value ? (s(), o("div", jd, ' No models found matching "' + a(v.value) + '" ', 1)) : r("", !0),
                f.value ? (s(), o("div", Kd, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), R(et, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(oe, ["self"])
          }, [
            e("div", Hd, [
              e("div", { class: "model-modal-header" }, [
                D[7] || (D[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: oe
                }, "✕")
              ]),
              e("div", qd, [
                e("div", Yd, [
                  D[8] || (D[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  _(bt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": D[3] || (D[3] = (Ce) => w.value = Ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Jd, [
                  D[9] || (D[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  _(bt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": D[4] || (D[4] = (Ce) => k.value = Ce),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Xd, [
                  _(ye, {
                    variant: "secondary",
                    onClick: oe
                  }, {
                    default: l(() => [...D[10] || (D[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  _(ye, {
                    variant: "primary",
                    disabled: !w.value.trim() || !k.value.trim(),
                    onClick: Y
                  }, {
                    default: l(() => [...D[11] || (D[11] = [
                      h(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : r("", !0)
        ]))
      ]);
    };
  }
}), Zd = /* @__PURE__ */ ne(Qd, [["__scopeId", "data-v-c6acbada"]]), ec = { class: "applying-step" }, tc = {
  key: 0,
  class: "phase-content"
}, sc = {
  key: 1,
  class: "phase-content"
}, oc = { class: "phase-description" }, nc = { class: "overall-progress" }, ac = { class: "progress-bar" }, lc = { class: "progress-label" }, ic = { class: "install-list" }, rc = { class: "install-icon" }, dc = { key: 0 }, cc = {
  key: 1,
  class: "spinner"
}, uc = { key: 2 }, mc = { key: 3 }, vc = {
  key: 0,
  class: "install-error"
}, fc = {
  key: 2,
  class: "phase-content"
}, pc = { class: "phase-header" }, gc = { class: "phase-title" }, hc = { class: "completion-summary" }, yc = {
  key: 0,
  class: "summary-item success"
}, wc = { class: "summary-text" }, kc = {
  key: 1,
  class: "summary-item error"
}, bc = { class: "summary-text" }, _c = {
  key: 2,
  class: "failed-list"
}, $c = { class: "failed-node-id" }, Cc = { class: "failed-error" }, xc = {
  key: 4,
  class: "summary-item success"
}, Sc = {
  key: 5,
  class: "restart-prompt"
}, Ic = {
  key: 3,
  class: "phase-content error"
}, Ec = { class: "error-message" }, Tc = /* @__PURE__ */ se({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = z(() => {
      var v, w;
      const p = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!p) return 0;
      const d = ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(d / p * 100);
    }), i = z(() => {
      var p;
      return ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.filter((d) => !d.success)) || [];
    }), u = z(() => i.value.length > 0);
    function g(p, d) {
      var w, k;
      const v = (w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((b) => b.node_id === p);
      return v ? v.success ? "complete" : "failed" : ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.currentIndex) === d ? "installing" : "pending";
    }
    function m(p) {
      var d, v;
      return (v = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((w) => w.node_id === p)) == null ? void 0 : v.error;
    }
    return (p, d) => {
      var v, w, k, b;
      return s(), o("div", ec, [
        t.progress.phase === "resolving" ? (s(), o("div", tc, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", sc, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", oc, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", nc, [
            e("div", ac, [
              e("div", {
                class: "progress-fill",
                style: Lt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", lc, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", ic, [
            (s(!0), o(V, null, ie(t.progress.nodesToInstall, (f, x) => (s(), o("div", {
              key: f,
              class: fe(["install-item", g(f, x)])
            }, [
              e("span", rc, [
                g(f, x) === "pending" ? (s(), o("span", dc, "○")) : g(f, x) === "installing" ? (s(), o("span", cc, "◌")) : g(f, x) === "complete" ? (s(), o("span", uc, "✓")) : g(f, x) === "failed" ? (s(), o("span", mc, "✗")) : r("", !0)
              ]),
              e("code", null, a(f), 1),
              m(f) ? (s(), o("span", vc, a(m(f)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", fc, [
          e("div", pc, [
            e("span", {
              class: fe(["phase-icon", u.value ? "warning" : "success"])
            }, a(u.value ? "⚠" : "✓"), 3),
            e("h3", gc, a(u.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", hc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", yc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", wc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", kc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", bc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", _c, [
              (s(!0), o(V, null, ie(i.value, (f) => (s(), o("div", {
                key: f.node_id,
                class: "failed-item"
              }, [
                e("code", $c, a(f.node_id), 1),
                e("span", Cc, a(f.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (f) => p.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            u.value ? r("", !0) : (s(), o("div", xc, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Sc, [
              d[7] || (d[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (f) => p.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : r("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Ic, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Ec, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), Rc = /* @__PURE__ */ ne(Tc, [["__scopeId", "data-v-5efaae58"]]), Pc = {
  key: 0,
  class: "loading-state"
}, Mc = {
  key: 1,
  class: "wizard-content"
}, Dc = {
  key: 0,
  class: "step-content"
}, Lc = { class: "analysis-summary" }, zc = { class: "analysis-header" }, Uc = { class: "summary-description" }, Nc = { class: "stats-grid" }, Oc = { class: "stat-card" }, Ac = { class: "stat-items" }, Fc = {
  key: 0,
  class: "stat-item success"
}, Bc = { class: "stat-count" }, Vc = {
  key: 1,
  class: "stat-item info"
}, Wc = { class: "stat-count" }, Gc = {
  key: 2,
  class: "stat-item warning"
}, jc = { class: "stat-count" }, Kc = {
  key: 3,
  class: "stat-item error"
}, Hc = { class: "stat-count" }, qc = { class: "stat-card" }, Yc = { class: "stat-items" }, Jc = { class: "stat-item success" }, Xc = { class: "stat-count" }, Qc = {
  key: 0,
  class: "stat-item info"
}, Zc = { class: "stat-count" }, eu = {
  key: 1,
  class: "stat-item warning"
}, tu = { class: "stat-count" }, su = {
  key: 2,
  class: "stat-item warning"
}, ou = { class: "stat-count" }, nu = {
  key: 3,
  class: "stat-item error"
}, au = { class: "stat-count" }, lu = {
  key: 0,
  class: "status-message warning"
}, iu = { class: "status-text" }, ru = {
  key: 1,
  class: "status-message info"
}, du = { class: "status-text" }, cu = {
  key: 2,
  class: "status-message info"
}, uu = { class: "status-text" }, mu = {
  key: 3,
  class: "status-message warning"
}, vu = { class: "status-text" }, fu = {
  key: 4,
  class: "status-message success"
}, pu = {
  key: 5,
  class: "category-mismatch-section"
}, gu = { class: "mismatch-list" }, hu = { class: "mismatch-path" }, yu = { class: "mismatch-target" }, wu = {
  key: 3,
  class: "step-content"
}, ku = { class: "review-summary" }, bu = { class: "review-stats" }, _u = { class: "review-stat" }, $u = { class: "stat-value" }, Cu = { class: "review-stat" }, xu = { class: "stat-value" }, Su = { class: "review-stat" }, Iu = { class: "stat-value" }, Eu = { class: "review-stat" }, Tu = { class: "stat-value" }, Ru = {
  key: 0,
  class: "review-section"
}, Pu = { class: "section-title" }, Mu = { class: "review-items" }, Du = { class: "item-name" }, Lu = { class: "item-choice" }, zu = {
  key: 0,
  class: "choice-badge install"
}, Uu = {
  key: 1,
  class: "choice-badge skip"
}, Nu = {
  key: 1,
  class: "review-section"
}, Ou = { class: "section-title" }, Au = { class: "review-items" }, Fu = { class: "item-name" }, Bu = { class: "item-choice" }, Vu = {
  key: 0,
  class: "choice-badge install"
}, Wu = {
  key: 1,
  class: "choice-badge optional"
}, Gu = {
  key: 2,
  class: "choice-badge skip"
}, ju = {
  key: 1,
  class: "choice-badge pending"
}, Ku = {
  key: 2,
  class: "review-section"
}, Hu = { class: "section-title" }, qu = { class: "review-items" }, Yu = { class: "item-name" }, Ju = { class: "item-choice" }, Xu = {
  key: 0,
  class: "choice-badge install"
}, Qu = {
  key: 1,
  class: "choice-badge download"
}, Zu = {
  key: 2,
  class: "choice-badge optional"
}, em = {
  key: 3,
  class: "choice-badge skip"
}, tm = {
  key: 4,
  class: "choice-badge skip"
}, sm = {
  key: 1,
  class: "choice-badge download"
}, om = {
  key: 2,
  class: "choice-badge pending"
}, nm = {
  key: 3,
  class: "no-choices"
}, am = /* @__PURE__ */ se({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: u, applyResolution: g, installNodes: m, queueModelDownloads: p, progress: d, resetProgress: v } = lo(), { loadPendingDownloads: w } = fs(), { openFileLocation: k } = Ae(), b = y(null), f = y(!1), x = y(!1), I = y(null), $ = y("analysis"), P = y([]), O = y(/* @__PURE__ */ new Map()), T = y(/* @__PURE__ */ new Map()), E = y(/* @__PURE__ */ new Set()), q = z(() => {
      const ee = [
        { id: "analysis", label: "Analysis" }
      ];
      return (F.value || M.value) && ee.push({ id: "nodes", label: "Nodes" }), (S.value || C.value) && ee.push({ id: "models", label: "Models" }), ee.push({ id: "review", label: "Review" }), $.value === "applying" && ee.push({ id: "applying", label: "Applying" }), ee;
    }), B = z(() => b.value ? b.value.stats.needs_user_input : !1), F = z(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), S = z(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), C = z(() => b.value ? b.value.stats.download_intents > 0 : !1), M = z(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), X = z(() => b.value ? b.value.nodes.resolved.length : 0), oe = z(() => b.value ? b.value.models.resolved.filter((ee) => ee.has_category_mismatch) : []), K = z(() => oe.value.length > 0), te = z(() => {
      if (!b.value) return [];
      const ee = b.value.nodes.resolved.filter((G) => !G.is_installed), L = /* @__PURE__ */ new Set();
      return ee.filter((G) => L.has(G.package.package_id) ? !1 : (L.add(G.package.package_id), !0));
    }), Y = z(() => {
      if (!b.value) return [];
      const ee = b.value.nodes.resolved.filter((G) => !G.is_installed), L = /* @__PURE__ */ new Map();
      for (const G of ee) {
        const le = L.get(G.package.package_id);
        le ? le.node_types_count++ : L.set(G.package.package_id, {
          package_id: G.package.package_id,
          title: G.package.title,
          node_types_count: 1
        });
      }
      return Array.from(L.values());
    }), U = z(() => te.value.filter((ee) => !E.value.has(ee.package.package_id))), N = z(() => b.value ? b.value.models.resolved.filter((ee) => ee.match_type === "download_intent").map((ee) => ({
      filename: ee.reference.widget_value,
      reference: ee.reference,
      is_download_intent: !0,
      resolved_model: ee.model,
      download_source: ee.download_source,
      target_path: ee.target_path
    })) : []), D = z(() => {
      if (!b.value) return [];
      const ee = b.value.nodes.unresolved.map((G) => ({
        node_type: G.reference.node_type,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), L = b.value.nodes.ambiguous.map((G) => ({
        node_type: G.reference.node_type,
        has_multiple_options: !0,
        options: G.options.map((le) => ({
          package_id: le.package.package_id,
          title: le.package.title,
          match_confidence: le.match_confidence,
          match_type: le.match_type,
          is_installed: le.is_installed
        }))
      }));
      return [...ee, ...L];
    }), ve = z(() => {
      if (!b.value) return [];
      const ee = b.value.models.unresolved.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), L = b.value.models.ambiguous.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        has_multiple_options: !0,
        options: G.options.map((le) => ({
          model: le.model,
          match_confidence: le.match_confidence,
          match_type: le.match_type,
          has_download_source: le.has_download_source
        }))
      }));
      return [...ee, ...L];
    }), ae = z(() => {
      const ee = ve.value, L = N.value.map((G) => ({
        filename: G.filename,
        reference: G.reference,
        is_download_intent: !0,
        resolved_model: G.resolved_model,
        download_source: G.download_source,
        target_path: G.target_path,
        options: void 0
      }));
      return [...ee, ...L];
    }), be = z(() => {
      let ee = U.value.length;
      for (const L of O.value.values())
        L.action === "install" && ee++;
      for (const L of T.value.values())
        L.action === "select" && ee++;
      return ee;
    }), Ce = z(() => {
      let ee = 0;
      for (const L of T.value.values())
        L.action === "download" && ee++;
      return ee;
    }), Le = z(() => {
      let ee = 0;
      for (const L of O.value.values())
        L.action === "optional" && ee++;
      for (const L of T.value.values())
        L.action === "optional" && ee++;
      return ee;
    }), Ue = z(() => {
      let ee = E.value.size;
      for (const L of O.value.values())
        L.action === "skip" && ee++;
      for (const L of T.value.values())
        L.action === "skip" && ee++;
      for (const L of D.value)
        O.value.has(L.node_type) || ee++;
      for (const L of ve.value)
        T.value.has(L.filename) || ee++;
      return ee;
    }), me = z(() => {
      const ee = {};
      if (ee.analysis = { resolved: 1, total: 1 }, F.value) {
        const L = D.value.length, G = D.value.filter(
          (le) => O.value.has(le.node_type)
        ).length;
        ee.nodes = { resolved: G, total: L };
      }
      if (S.value || C.value) {
        const L = ae.value.length, G = ae.value.filter(
          (le) => T.value.has(le.filename) || le.is_download_intent
        ).length;
        ee.models = { resolved: G, total: L };
      }
      if (ee.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const L = d.totalFiles || 1, G = d.completedFiles.length;
        ee.applying = { resolved: G, total: L };
      }
      return ee;
    });
    function ge(ee) {
      $.value = ee;
    }
    function Me() {
      const ee = q.value.findIndex((L) => L.id === $.value);
      ee > 0 && ($.value = q.value[ee - 1].id);
    }
    function ce() {
      const ee = q.value.findIndex((L) => L.id === $.value);
      ee < q.value.length - 1 && ($.value = q.value[ee + 1].id);
    }
    async function Z() {
      f.value = !0, I.value = null;
      try {
        b.value = await u(n.workflowName);
      } catch (ee) {
        I.value = ee instanceof Error ? ee.message : "Failed to analyze workflow";
      } finally {
        f.value = !1;
      }
    }
    function De() {
      P.value.includes("analysis") || P.value.push("analysis"), F.value || M.value ? $.value = "nodes" : S.value || C.value ? $.value = "models" : $.value = "review";
    }
    function pe(ee) {
      O.value.set(ee, { action: "optional" });
    }
    function Je(ee) {
      O.value.set(ee, { action: "skip" });
    }
    function tt(ee, L) {
      var le;
      const G = D.value.find((xe) => xe.node_type === ee);
      (le = G == null ? void 0 : G.options) != null && le[L] && O.value.set(ee, {
        action: "install",
        package_id: G.options[L].package_id
      });
    }
    function st(ee, L) {
      O.value.set(ee, {
        action: "install",
        package_id: L
      });
    }
    function Te(ee) {
      O.value.delete(ee);
    }
    function Xe(ee) {
      E.value.has(ee) ? E.value.delete(ee) : E.value.add(ee);
    }
    function qe(ee) {
      T.value.set(ee, { action: "optional" });
    }
    function Qe(ee) {
      T.value.set(ee, { action: "skip" });
    }
    function mt(ee, L) {
      var le;
      const G = ve.value.find((xe) => xe.filename === ee);
      (le = G == null ? void 0 : G.options) != null && le[L] && T.value.set(ee, {
        action: "select",
        selected_model: G.options[L].model
      });
    }
    function $e(ee, L, G) {
      T.value.set(ee, {
        action: "download",
        url: L,
        target_path: G
      });
    }
    function je(ee) {
      T.value.delete(ee);
    }
    async function it(ee) {
      try {
        await k(ee);
      } catch (L) {
        I.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function Ye() {
      var ee;
      x.value = !0, I.value = null, v(), d.phase = "resolving", $.value = "applying";
      try {
        const L = await g(n.workflowName, O.value, T.value, E.value);
        L.models_to_download && L.models_to_download.length > 0 && p(n.workflowName, L.models_to_download);
        const G = [
          ...L.nodes_to_install || [],
          ...U.value.map((xe) => xe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(G)], d.nodesToInstall.length > 0 && await m(n.workflowName), d.phase = "complete", await w();
        const le = d.installError || ((ee = d.nodeInstallProgress) == null ? void 0 : ee.completedNodes.some((xe) => !xe.success));
        !d.needsRestart && !le && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (L) {
        I.value = L instanceof Error ? L.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function ue() {
      i("refresh"), i("restart"), i("close");
    }
    async function Q() {
      var L;
      const ee = ((L = d.nodeInstallProgress) == null ? void 0 : L.completedNodes.filter((G) => !G.success).map((G) => G.node_id)) || [];
      if (ee.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ee.length
        }, d.nodesToInstall = ee, d.nodesInstalled = [], d.installError = void 0;
        try {
          await m(n.workflowName), d.phase = "complete";
        } catch (G) {
          d.error = G instanceof Error ? G.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Ne(Z), (ee, L) => (s(), R(He, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: f.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: L[1] || (L[1] = (G) => i("close"))
    }, {
      body: l(() => [
        f.value && !b.value ? (s(), o("div", Pc, [...L[2] || (L[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", Mc, [
          _(Ai, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": me.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Dc, [
            e("div", Lc, [
              e("div", zc, [
                L[3] || (L[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Uc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Nc, [
                e("div", Oc, [
                  L[12] || (L[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Ac, [
                    X.value > 0 ? (s(), o("div", Fc, [
                      L[4] || (L[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Bc, a(X.value), 1),
                      L[5] || (L[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", Vc, [
                      L[6] || (L[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Wc, a(b.value.stats.packages_needing_installation), 1),
                      L[7] || (L[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", Gc, [
                      L[8] || (L[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", jc, a(b.value.nodes.ambiguous.length), 1),
                      L[9] || (L[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", Kc, [
                      L[10] || (L[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Hc, a(b.value.nodes.unresolved.length), 1),
                      L[11] || (L[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", qc, [
                  L[23] || (L[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Yc, [
                    e("div", Jc, [
                      L[13] || (L[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Xc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      L[14] || (L[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", Qc, [
                      L[15] || (L[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Zc, a(b.value.stats.download_intents), 1),
                      L[16] || (L[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    K.value ? (s(), o("div", eu, [
                      L[17] || (L[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", tu, a(oe.value.length), 1),
                      L[18] || (L[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", su, [
                      L[19] || (L[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ou, a(b.value.models.ambiguous.length), 1),
                      L[20] || (L[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", nu, [
                      L[21] || (L[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", au, a(b.value.models.unresolved.length), 1),
                      L[22] || (L[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              B.value ? (s(), o("div", lu, [
                L[24] || (L[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", iu, a(D.value.length + ve.value.length) + " items need your input", 1)
              ])) : M.value ? (s(), o("div", ru, [
                L[25] || (L[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", du, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(C.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : C.value ? (s(), o("div", cu, [
                L[26] || (L[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", uu, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : K.value ? (s(), o("div", mu, [
                L[27] || (L[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", vu, a(oe.value.length) + " model" + a(oe.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", fu, [...L[28] || (L[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              K.value ? (s(), o("div", pu, [
                L[31] || (L[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", gu, [
                  (s(!0), o(V, null, ie(oe.value, (G) => {
                    var le, xe;
                    return s(), o("div", {
                      key: G.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", hu, a(G.actual_category) + "/" + a((le = G.model) == null ? void 0 : le.filename), 1),
                      L[30] || (L[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", yu, a((xe = G.expected_categories) == null ? void 0 : xe[0]) + "/", 1),
                      G.file_path ? (s(), R(ye, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ve) => it(G.file_path)
                      }, {
                        default: l(() => [...L[29] || (L[29] = [
                          h(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0)
                    ]);
                  }), 128))
                ])
              ])) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "nodes" ? (s(), R(ld, {
            key: 1,
            nodes: D.value,
            "node-choices": O.value,
            "auto-resolved-packages": Y.value,
            "skipped-packages": E.value,
            onMarkOptional: pe,
            onSkip: Je,
            onOptionSelected: tt,
            onManualEntry: st,
            onClearChoice: Te,
            onPackageSkip: Xe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), R(Zd, {
            key: 2,
            models: ae.value,
            "model-choices": T.value,
            onMarkOptional: qe,
            onSkip: Qe,
            onOptionSelected: mt,
            onDownloadUrl: $e,
            onClearChoice: je
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", wu, [
            e("div", ku, [
              L[36] || (L[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", bu, [
                e("div", _u, [
                  e("span", $u, a(be.value), 1),
                  L[32] || (L[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Cu, [
                  e("span", xu, a(Ce.value), 1),
                  L[33] || (L[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Su, [
                  e("span", Iu, a(Le.value), 1),
                  L[34] || (L[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Eu, [
                  e("span", Tu, a(Ue.value), 1),
                  L[35] || (L[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Y.value.length > 0 ? (s(), o("div", Ru, [
                e("h4", Pu, "Node Packages (" + a(Y.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(V, null, ie(Y.value, (G) => (s(), o("div", {
                    key: G.package_id,
                    class: "review-item"
                  }, [
                    e("code", Du, a(G.package_id), 1),
                    e("div", Lu, [
                      E.value.has(G.package_id) ? (s(), o("span", Uu, "Skipped")) : (s(), o("span", zu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              D.value.length > 0 ? (s(), o("div", Nu, [
                e("h4", Ou, "Node Choices (" + a(D.value.length) + ")", 1),
                e("div", Au, [
                  (s(!0), o(V, null, ie(D.value, (G) => {
                    var le, xe, Ve, ft;
                    return s(), o("div", {
                      key: G.node_type,
                      class: "review-item"
                    }, [
                      e("code", Fu, a(G.node_type), 1),
                      e("div", Bu, [
                        O.value.has(G.node_type) ? (s(), o(V, { key: 0 }, [
                          ((le = O.value.get(G.node_type)) == null ? void 0 : le.action) === "install" ? (s(), o("span", Vu, a((xe = O.value.get(G.node_type)) == null ? void 0 : xe.package_id), 1)) : ((Ve = O.value.get(G.node_type)) == null ? void 0 : Ve.action) === "optional" ? (s(), o("span", Wu, " Optional ")) : ((ft = O.value.get(G.node_type)) == null ? void 0 : ft.action) === "skip" ? (s(), o("span", Gu, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", ju, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ae.value.length > 0 ? (s(), o("div", Ku, [
                e("h4", Hu, "Models (" + a(ae.value.length) + ")", 1),
                e("div", qu, [
                  (s(!0), o(V, null, ie(ae.value, (G) => {
                    var le, xe, Ve, ft, Ct, rt, Nt;
                    return s(), o("div", {
                      key: G.filename,
                      class: "review-item"
                    }, [
                      e("code", Yu, a(G.filename), 1),
                      e("div", Ju, [
                        T.value.has(G.filename) ? (s(), o(V, { key: 0 }, [
                          ((le = T.value.get(G.filename)) == null ? void 0 : le.action) === "select" ? (s(), o("span", Xu, a((Ve = (xe = T.value.get(G.filename)) == null ? void 0 : xe.selected_model) == null ? void 0 : Ve.filename), 1)) : ((ft = T.value.get(G.filename)) == null ? void 0 : ft.action) === "download" ? (s(), o("span", Qu, " Download ")) : ((Ct = T.value.get(G.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Zu, " Optional ")) : ((rt = T.value.get(G.filename)) == null ? void 0 : rt.action) === "skip" ? (s(), o("span", em, " Skip ")) : ((Nt = T.value.get(G.filename)) == null ? void 0 : Nt.action) === "cancel_download" ? (s(), o("span", tm, " Cancel Download ")) : r("", !0)
                        ], 64)) : G.is_download_intent ? (s(), o("span", sm, " Pending Download ")) : (s(), o("span", om, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              te.value.length === 0 && D.value.length === 0 && ae.value.length === 0 ? (s(), o("div", nm, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), R(Rc, {
            key: 4,
            progress: Se(d),
            onRestart: ue,
            onRetryFailed: Q
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), R(ye, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: Me
        }, {
          default: l(() => [...L[37] || (L[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        L[41] || (L[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Se(d).phase === "complete" || Se(d).phase === "error" ? (s(), R(ye, {
          key: 1,
          variant: "secondary",
          onClick: L[0] || (L[0] = (G) => i("close"))
        }, {
          default: l(() => [
            h(a(Se(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), R(ye, {
          key: 2,
          variant: "primary",
          disabled: f.value,
          onClick: De
        }, {
          default: l(() => [...L[38] || (L[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), R(ye, {
          key: 3,
          variant: "primary",
          onClick: ce
        }, {
          default: l(() => [
            h(a(S.value || C.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), R(ye, {
          key: 4,
          variant: "primary",
          onClick: ce
        }, {
          default: l(() => [...L[39] || (L[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), R(ye, {
          key: 5,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: Ye
        }, {
          default: l(() => [...L[40] || (L[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), lm = /* @__PURE__ */ ne(am, [["__scopeId", "data-v-6276cf1d"]]), im = { class: "search-input-wrapper" }, rm = ["value", "placeholder"], dm = /* @__PURE__ */ se({
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
    const n = t, i = c, u = y(null);
    let g;
    function m(d) {
      const v = d.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", v);
      }, n.debounce)) : i("update:modelValue", v);
    }
    function p() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = u.value) == null || d.focus();
    }
    return Ne(() => {
      n.autoFocus && u.value && u.value.focus();
    }), (d, v) => (s(), o("div", im, [
      e("input", {
        ref_key: "inputRef",
        ref: u,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: wt(p, ["escape"])
      }, null, 40, rm),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: p,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), cm = /* @__PURE__ */ ne(dm, [["__scopeId", "data-v-266f857a"]]), um = { class: "search-bar" }, mm = /* @__PURE__ */ se({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", um, [
      _(cm, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), es = /* @__PURE__ */ ne(mm, [["__scopeId", "data-v-3d51bbfd"]]), vm = { class: "section-group" }, fm = {
  key: 0,
  class: "section-content"
}, pm = /* @__PURE__ */ se({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(n.initiallyExpanded);
    function g() {
      n.collapsible && (u.value = !u.value, i("toggle", u.value));
    }
    return (m, p) => (s(), o("section", vm, [
      _(ct, {
        count: t.count,
        clickable: t.collapsible,
        expanded: u.value,
        onClick: g
      }, {
        default: l(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || u.value ? (s(), o("div", fm, [
        Re(m.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ ne(pm, [["__scopeId", "data-v-c48e33ed"]]), gm = { class: "item-header" }, hm = {
  key: 0,
  class: "item-icon"
}, ym = { class: "item-info" }, wm = {
  key: 0,
  class: "item-title"
}, km = {
  key: 1,
  class: "item-subtitle"
}, bm = {
  key: 0,
  class: "item-details"
}, _m = {
  key: 1,
  class: "item-actions"
}, $m = /* @__PURE__ */ se({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = z(() => n.status ? `status-${n.status}` : "");
    return (u, g) => (s(), o("div", {
      class: fe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (m) => t.clickable && u.$emit("click"))
    }, [
      e("div", gm, [
        u.$slots.icon ? (s(), o("span", hm, [
          Re(u.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", ym, [
          u.$slots.title ? (s(), o("div", wm, [
            Re(u.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          u.$slots.subtitle ? (s(), o("div", km, [
            Re(u.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      u.$slots.details ? (s(), o("div", bm, [
        Re(u.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      u.$slots.actions ? (s(), o("div", _m, [
        Re(u.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ ne($m, [["__scopeId", "data-v-cc435e0e"]]), Cm = { class: "loading-state" }, xm = { class: "loading-message" }, Sm = /* @__PURE__ */ se({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", Cm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", xm, a(t.message), 1)
    ]));
  }
}), zt = /* @__PURE__ */ ne(Sm, [["__scopeId", "data-v-ad8436c9"]]), Im = { class: "error-state" }, Em = { class: "error-message" }, Tm = /* @__PURE__ */ se({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", Im, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Em, a(t.message), 1),
      t.retry ? (s(), R(J, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ ne(Tm, [["__scopeId", "data-v-5397be48"]]), Rm = /* @__PURE__ */ se({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: u } = Ae();
    no();
    const g = y([]), m = y(!1), p = y(null), d = y(""), v = y(!0), w = y(!1), k = y(!1), b = y(!1), f = y(null), x = z(
      () => g.value.filter((U) => U.status === "broken")
    ), I = z(
      () => g.value.filter((U) => U.status === "new")
    ), $ = z(
      () => g.value.filter((U) => U.status === "modified")
    ), P = z(
      () => g.value.filter((U) => U.status === "synced")
    ), O = z(() => {
      if (!d.value.trim()) return g.value;
      const U = d.value.toLowerCase();
      return g.value.filter((N) => N.name.toLowerCase().includes(U));
    }), T = z(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = z(
      () => I.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = z(
      () => $.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = z(
      () => P.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = z(
      () => w.value ? B.value : B.value.slice(0, 5)
    );
    async function S(U = !1) {
      m.value = !0, p.value = null;
      try {
        g.value = await u(U);
      } catch (N) {
        p.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        m.value = !1;
      }
    }
    c({ loadWorkflows: S });
    function C(U) {
      f.value = U, k.value = !0;
    }
    function M(U) {
      f.value = U, b.value = !0;
    }
    function X() {
      i("refresh");
    }
    async function oe() {
      b.value = !1, await S(!0);
    }
    async function K() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function te(U) {
      const N = [];
      return U.missing_nodes > 0 && N.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && N.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && N.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && N.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), N.length > 0 ? N.join(", ") : "Has issues";
    }
    function Y(U) {
      const N = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return Ne(S), (U, N) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          _(es, {
            modelValue: d.value,
            "onUpdate:modelValue": N[0] || (N[0] = (D) => d.value = D),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value ? (s(), R(zt, {
            key: 0,
            message: "Loading workflows..."
          })) : p.value ? (s(), R(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            T.value.length ? (s(), R(Fe, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(T.value, (D) => (s(), R(ot, {
                  key: D.name,
                  status: "broken"
                }, {
                  icon: l(() => [...N[7] || (N[7] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(D.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(te(D)), 1)
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ve) => M(D.name)
                    }, {
                      default: l(() => [...N[8] || (N[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => C(D.name)
                    }, {
                      default: l(() => [...N[9] || (N[9] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            E.value.length ? (s(), R(Fe, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(E.value, (D) => (s(), R(ot, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    h(a(D.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    h(a(D.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(Y(D)), 1)
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => C(D.name)
                    }, {
                      default: l(() => [...N[10] || (N[10] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            q.value.length ? (s(), R(Fe, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(q.value, (D) => (s(), R(ot, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...N[11] || (N[11] = [
                    h("⚡", -1)
                  ])]),
                  title: l(() => [
                    h(a(D.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(Y(D)), 1)
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => C(D.name)
                    }, {
                      default: l(() => [...N[12] || (N[12] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            B.value.length ? (s(), R(Fe, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: N[2] || (N[2] = (D) => v.value = D)
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(F.value, (D) => (s(), R(ot, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    h(a(D.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    h(a(D.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(Y(D)), 1)
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => C(D.name)
                    }, {
                      default: l(() => [...N[13] || (N[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && B.value.length > 5 ? (s(), R(J, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (D) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    h(" View all " + a(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            O.value.length ? r("", !0) : (s(), R(_t, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && f.value ? (s(), R(Ii, {
        key: 0,
        "workflow-name": f.value,
        onClose: N[3] || (N[3] = (D) => k.value = !1),
        onResolve: N[4] || (N[4] = (D) => M(f.value)),
        onRefresh: N[5] || (N[5] = (D) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      b.value && f.value ? (s(), R(lm, {
        key: 1,
        "workflow-name": f.value,
        onClose: oe,
        onInstall: X,
        onRefresh: N[6] || (N[6] = (D) => i("refresh")),
        onRestart: K
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Pm = /* @__PURE__ */ ne(Rm, [["__scopeId", "data-v-fa3f076e"]]), Mm = /* @__PURE__ */ se({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["summary-bar", t.variant])
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ps = /* @__PURE__ */ ne(Mm, [["__scopeId", "data-v-ccb7816e"]]), Dm = {
  key: 0,
  class: "model-details"
}, Lm = { class: "detail-section" }, zm = { class: "detail-row" }, Um = { class: "detail-value mono" }, Nm = { class: "detail-row" }, Om = { class: "detail-value mono" }, Am = { class: "detail-row" }, Fm = { class: "detail-value mono" }, Bm = { class: "detail-row" }, Vm = { class: "detail-value" }, Wm = { class: "detail-row" }, Gm = { class: "detail-value" }, jm = { class: "detail-row" }, Km = { class: "detail-value" }, Hm = { class: "detail-section" }, qm = { class: "section-header" }, Ym = {
  key: 0,
  class: "locations-list"
}, Jm = { class: "location-path mono" }, Xm = {
  key: 0,
  class: "location-modified"
}, Qm = ["onClick"], Zm = {
  key: 1,
  class: "empty-state"
}, ev = { class: "detail-section" }, tv = { class: "section-header" }, sv = {
  key: 0,
  class: "sources-list"
}, ov = { class: "source-type" }, nv = ["href"], av = ["disabled", "onClick"], lv = {
  key: 1,
  class: "empty-state"
}, iv = { class: "add-source-form" }, rv = ["disabled"], dv = {
  key: 2,
  class: "source-error"
}, cv = {
  key: 3,
  class: "source-success"
}, uv = /* @__PURE__ */ se({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: u, removeModelSource: g, openFileLocation: m } = Ae(), p = y(null), d = y(!0), v = y(null), w = y(""), k = y(!1), b = y(null), f = y(null), x = y(null), I = y(null);
    let $ = null;
    function P(S, C = "success", M = 2e3) {
      $ && clearTimeout($), I.value = { message: S, type: C }, $ = setTimeout(() => {
        I.value = null;
      }, M);
    }
    function O(S) {
      if (!S) return "Unknown";
      const C = 1024 * 1024 * 1024, M = 1024 * 1024;
      return S >= C ? `${(S / C).toFixed(1)} GB` : S >= M ? `${(S / M).toFixed(0)} MB` : `${(S / 1024).toFixed(0)} KB`;
    }
    function T(S) {
      navigator.clipboard.writeText(S), P("Copied to clipboard!");
    }
    async function E(S) {
      try {
        await m(S), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!w.value.trim() || !p.value)) {
        k.value = !0, f.value = null, x.value = null;
        try {
          await u(p.value.hash, w.value.trim()), x.value = "Source added successfully!", w.value = "", await F();
        } catch (S) {
          f.value = S instanceof Error ? S.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function B(S) {
      if (p.value) {
        b.value = S, f.value = null, x.value = null;
        try {
          await g(p.value.hash, S), P("Source removed"), await F();
        } catch (C) {
          f.value = C instanceof Error ? C.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function F() {
      d.value = !0, v.value = null;
      try {
        p.value = await i(n.identifier);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Ne(F), (S, C) => {
      var M;
      return s(), o(V, null, [
        _(He, {
          title: `Model Details: ${((M = p.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: C[5] || (C[5] = (X) => S.$emit("close"))
        }, {
          body: l(() => {
            var X, oe, K, te;
            return [
              p.value ? (s(), o("div", Dm, [
                e("section", Lm, [
                  e("div", zm, [
                    C[6] || (C[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Um, a(p.value.hash || "Not computed"), 1),
                    p.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[0] || (C[0] = (Y) => T(p.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Nm, [
                    C[7] || (C[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Om, a(p.value.blake3 || "Not computed"), 1),
                    p.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[1] || (C[1] = (Y) => T(p.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Am, [
                    C[8] || (C[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Fm, a(p.value.sha256 || "Not computed"), 1),
                    p.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[2] || (C[2] = (Y) => T(p.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Bm, [
                    C[9] || (C[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Vm, a(O(p.value.size)), 1)
                  ]),
                  e("div", Wm, [
                    C[10] || (C[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Gm, a(p.value.category), 1)
                  ]),
                  e("div", jm, [
                    C[11] || (C[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Km, a(p.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Hm, [
                  e("h4", qm, "Locations (" + a(((X = p.value.locations) == null ? void 0 : X.length) || 0) + ")", 1),
                  (oe = p.value.locations) != null && oe.length ? (s(), o("div", Ym, [
                    (s(!0), o(V, null, ie(p.value.locations, (Y, U) => (s(), o("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      e("span", Jm, a(Y.path), 1),
                      Y.modified ? (s(), o("span", Xm, "Modified: " + a(Y.modified), 1)) : r("", !0),
                      Y.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => E(Y.path)
                      }, " Open File Location ", 8, Qm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Zm, "No locations found"))
                ]),
                e("section", ev, [
                  e("h4", tv, "Download Sources (" + a(((K = p.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                  (te = p.value.sources) != null && te.length ? (s(), o("div", sv, [
                    (s(!0), o(V, null, ie(p.value.sources, (Y, U) => (s(), o("div", {
                      key: U,
                      class: "source-item"
                    }, [
                      e("span", ov, a(Y.type) + ":", 1),
                      e("a", {
                        href: Y.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Y.url), 9, nv),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === Y.url,
                        onClick: (N) => B(Y.url)
                      }, a(b.value === Y.url ? "..." : "×"), 9, av)
                    ]))), 128))
                  ])) : (s(), o("div", lv, " No download sources configured ")),
                  e("div", iv, [
                    Pe(e("input", {
                      "onUpdate:modelValue": C[3] || (C[3] = (Y) => w.value = Y),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [kt, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || k.value,
                      onClick: q
                    }, a(k.value ? "Adding..." : "Add Source"), 9, rv)
                  ]),
                  f.value ? (s(), o("p", dv, a(f.value), 1)) : r("", !0),
                  x.value ? (s(), o("p", cv, a(x.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: C[4] || (C[4] = (X) => S.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), R(et, { to: "body" }, [
          I.value ? (s(), o("div", {
            key: 0,
            class: fe(["toast", I.value.type])
          }, a(I.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Vs = /* @__PURE__ */ ne(uv, [["__scopeId", "data-v-f15cbb56"]]), mv = /* @__PURE__ */ se({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: u } = Ae(), g = y([]), m = y([]), p = y("production"), d = y(!1), v = y(null), w = y(""), k = y(!1), b = y(null);
    function f() {
      k.value = !1, n("navigate", "model-index");
    }
    const x = z(
      () => g.value.reduce((F, S) => F + (S.size || 0), 0)
    ), I = z(() => {
      if (!w.value.trim()) return g.value;
      const F = w.value.toLowerCase();
      return g.value.filter((S) => S.filename.toLowerCase().includes(F));
    }), $ = z(() => {
      if (!w.value.trim()) return m.value;
      const F = w.value.toLowerCase();
      return m.value.filter((S) => S.filename.toLowerCase().includes(F));
    }), P = z(() => {
      const F = {};
      for (const C of I.value) {
        const M = C.type || "other";
        F[M] || (F[M] = []), F[M].push(C);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([C], [M]) => {
        const X = S.indexOf(C), oe = S.indexOf(M);
        return X >= 0 && oe >= 0 ? X - oe : X >= 0 ? -1 : oe >= 0 ? 1 : C.localeCompare(M);
      }).map(([C, M]) => ({ type: C, models: M }));
    });
    function O(F) {
      if (!F) return "Unknown";
      const S = F / (1024 * 1024);
      return S >= 1024 ? `${(S / 1024).toFixed(1)} GB` : `${S.toFixed(0)} MB`;
    }
    function T(F) {
      b.value = F.hash || F.filename;
    }
    function E(F) {
      n("navigate", "model-index");
    }
    function q(F) {
      alert(`Download functionality not yet implemented for ${F}`);
    }
    async function B() {
      d.value = !0, v.value = null;
      try {
        const F = await i();
        g.value = F, m.value = [];
        const S = await u();
        p.value = S.environment || "production";
      } catch (F) {
        v.value = F instanceof Error ? F.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Ne(B), (F, S) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (C) => k.value = !0)
          })
        ]),
        search: l(() => [
          _(es, {
            modelValue: w.value,
            "onUpdate:modelValue": S[1] || (S[1] = (C) => w.value = C),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), R(zt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), R(Ut, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), R(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(O(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(V, null, ie(P.value, (C) => (s(), R(Fe, {
              key: C.type,
              title: C.type.toUpperCase(),
              count: C.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(C.models, (M) => (s(), R(ot, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...S[4] || (S[4] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(M.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(O(M.size)), 1)
                  ]),
                  details: l(() => [
                    _(Ge, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(Ge, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => T(M)
                    }, {
                      default: l(() => [...S[5] || (S[5] = [
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
            $.value.length ? (s(), R(Fe, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie($.value, (C) => (s(), R(ot, {
                  key: C.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...S[6] || (S[6] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(C.filename), 1)
                  ]),
                  subtitle: l(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var M;
                    return [
                      _(Ge, {
                        label: "Required by:",
                        value: ((M = C.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    _(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => q(C.filename)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => E(C.filename)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !I.value.length && !$.value.length ? (s(), R(_t, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: k.value,
        title: "About Environment Models",
        onClose: S[2] || (S[2] = (C) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            S[10] || (S[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(p.value) + '"', 1),
            S[11] || (S[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          _(J, {
            variant: "primary",
            onClick: f
          }, {
            default: l(() => [...S[12] || (S[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), R(Vs, {
        key: 0,
        identifier: b.value,
        onClose: S[3] || (S[3] = (C) => b.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), vv = /* @__PURE__ */ ne(mv, [["__scopeId", "data-v-cb4f12b3"]]), fv = {
  key: 0,
  class: "indexing-progress"
}, pv = { class: "progress-info" }, gv = { class: "progress-label" }, hv = { class: "progress-count" }, yv = { class: "progress-bar" }, wv = { class: "modal-content" }, kv = { class: "modal-header" }, bv = { class: "modal-body" }, _v = { class: "input-group" }, $v = { class: "current-path" }, Cv = { class: "input-group" }, xv = { class: "modal-footer" }, Sv = { class: "modal-content" }, Iv = { class: "modal-header" }, Ev = { class: "modal-body" }, Tv = { class: "input-group" }, Rv = { class: "input-group" }, Pv = { class: "modal-footer" }, Mv = /* @__PURE__ */ se({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: u,
      setModelsDirectory: g
    } = Ae(), { addToQueue: m } = fs(), p = c, d = y([]), v = y(!1), w = y(!1), k = y(null), b = y(""), f = y(!1), x = y(null), I = y(!1), $ = y(null), P = y(""), O = y(!1), T = y(!1), E = y(""), q = y(""), B = y(null), F = z(
      () => d.value.reduce((N, D) => N + (D.size || 0), 0)
    ), S = z(() => {
      if (!b.value.trim()) return d.value;
      const N = b.value.toLowerCase();
      return d.value.filter((D) => {
        const ve = D, ae = D.sha256 || ve.sha256_hash || "";
        return D.filename.toLowerCase().includes(N) || ae.toLowerCase().includes(N);
      });
    }), C = z(() => {
      const N = {};
      for (const ve of S.value) {
        const ae = ve.type || "other";
        N[ae] || (N[ae] = []), N[ae].push(ve);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([ve], [ae]) => {
        const be = D.indexOf(ve), Ce = D.indexOf(ae);
        return be >= 0 && Ce >= 0 ? be - Ce : be >= 0 ? -1 : Ce >= 0 ? 1 : ve.localeCompare(ae);
      }).map(([ve, ae]) => ({ type: ve, models: ae }));
    });
    function M(N) {
      if (!N) return "Unknown";
      const D = 1024 * 1024 * 1024, ve = 1024 * 1024;
      return N >= D ? `${(N / D).toFixed(1)} GB` : N >= ve ? `${(N / ve).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function X(N) {
      x.value = N.hash || N.filename;
    }
    async function oe() {
      w.value = !0, k.value = null;
      try {
        const N = await i();
        await Y(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        k.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function K() {
      if (P.value.trim()) {
        O.value = !0, k.value = null;
        try {
          const N = await g(P.value.trim());
          $.value = N.path, I.value = !1, P.value = "", await Y(), console.log(`Directory changed: ${N.models_indexed} models indexed`), p("refresh");
        } catch (N) {
          k.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          O.value = !1;
        }
      }
    }
    function te() {
      if (!E.value.trim() || !q.value.trim()) return;
      const N = q.value.split("/").pop() || "model.safetensors";
      m([{
        workflow: "__manual__",
        filename: N,
        url: E.value.trim(),
        targetPath: q.value.trim()
      }]), E.value = "", q.value = "", T.value = !1;
    }
    async function Y() {
      v.value = !0, k.value = null;
      try {
        d.value = await n();
      } catch (N) {
        k.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function U() {
      try {
        const N = await u();
        $.value = N.path;
      } catch {
      }
    }
    return Ne(() => {
      Y(), U();
    }), (N, D) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: D[2] || (D[2] = (ve) => f.value = !0)
          }, {
            actions: l(() => [
              _(J, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: oe
              }, {
                default: l(() => [
                  h(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              _(J, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (ve) => I.value = !0)
              }, {
                default: l(() => [...D[15] || (D[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              _(J, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (ve) => T.value = !0)
              }, {
                default: l(() => [...D[16] || (D[16] = [
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
        search: l(() => [
          B.value ? (s(), o("div", fv, [
            e("div", pv, [
              e("span", gv, a(B.value.message), 1),
              e("span", hv, a(B.value.current) + "/" + a(B.value.total), 1)
            ]),
            e("div", yv, [
              e("div", {
                class: "progress-fill",
                style: Lt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          _(es, {
            modelValue: b.value,
            "onUpdate:modelValue": D[3] || (D[3] = (ve) => b.value = ve),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || B.value ? (s(), R(zt, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), R(Ut, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            d.value.length ? (s(), R(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(d.value.length) + " models • " + a(M(F.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(V, null, ie(C.value, (ve) => (s(), R(Fe, {
              key: ve.type,
              title: ve.type.toUpperCase(),
              count: ve.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(ve.models, (ae) => (s(), R(ot, {
                  key: ae.sha256 || ae.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...D[17] || (D[17] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(ae.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(M(ae.size)), 1)
                  ]),
                  details: l(() => [
                    _(Ge, {
                      label: "Hash:",
                      value: ae.hash ? ae.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => X(ae)
                    }, {
                      default: l(() => [...D[18] || (D[18] = [
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
            S.value.length ? r("", !0) : (s(), R(_t, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: D[4] || (D[4] = (ve) => f.value = !1)
      }, {
        content: l(() => [...D[19] || (D[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      x.value ? (s(), R(Vs, {
        key: 0,
        identifier: x.value,
        onClose: D[5] || (D[5] = (ve) => x.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), R(et, { to: "body" }, [
        I.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[9] || (D[9] = Be((ve) => I.value = !1, ["self"]))
        }, [
          e("div", wv, [
            e("div", kv, [
              D[20] || (D[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: D[6] || (D[6] = (ve) => I.value = !1)
              }, "✕")
            ]),
            e("div", bv, [
              e("div", _v, [
                D[21] || (D[21] = e("label", null, "Current Directory", -1)),
                e("code", $v, a($.value || "Not set"), 1)
              ]),
              e("div", Cv, [
                D[22] || (D[22] = e("label", null, "New Directory Path", -1)),
                _(bt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": D[7] || (D[7] = (ve) => P.value = ve),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              D[23] || (D[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", xv, [
              _(ye, {
                variant: "secondary",
                onClick: D[8] || (D[8] = (ve) => I.value = !1)
              }, {
                default: l(() => [...D[24] || (D[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              _(ye, {
                variant: "primary",
                disabled: !P.value.trim() || O.value,
                loading: O.value,
                onClick: K
              }, {
                default: l(() => [
                  h(a(O.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), R(et, { to: "body" }, [
        T.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[14] || (D[14] = Be((ve) => T.value = !1, ["self"]))
        }, [
          e("div", Sv, [
            e("div", Iv, [
              D[25] || (D[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: D[10] || (D[10] = (ve) => T.value = !1)
              }, "✕")
            ]),
            e("div", Ev, [
              e("div", Tv, [
                D[26] || (D[26] = e("label", null, "Download URL", -1)),
                _(bt, {
                  modelValue: E.value,
                  "onUpdate:modelValue": D[11] || (D[11] = (ve) => E.value = ve),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Rv, [
                D[27] || (D[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                _(bt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": D[12] || (D[12] = (ve) => q.value = ve),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              D[28] || (D[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Pv, [
              _(ye, {
                variant: "secondary",
                onClick: D[13] || (D[13] = (ve) => T.value = !1)
              }, {
                default: l(() => [...D[29] || (D[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              _(ye, {
                variant: "primary",
                disabled: !E.value.trim() || !q.value.trim(),
                onClick: te
              }, {
                default: l(() => [...D[30] || (D[30] = [
                  h(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : r("", !0)
      ]))
    ], 64));
  }
}), Dv = /* @__PURE__ */ ne(Mv, [["__scopeId", "data-v-73b78d84"]]), Lv = { class: "node-details" }, zv = { class: "status-row" }, Uv = {
  key: 0,
  class: "detail-row"
}, Nv = { class: "value" }, Ov = { class: "detail-row" }, Av = { class: "value" }, Fv = {
  key: 1,
  class: "detail-row"
}, Bv = { class: "value mono" }, Vv = {
  key: 2,
  class: "detail-row"
}, Wv = ["href"], Gv = {
  key: 3,
  class: "detail-row"
}, jv = { class: "value mono small" }, Kv = { class: "detail-row" }, Hv = {
  key: 0,
  class: "value"
}, qv = {
  key: 1,
  class: "workflow-list"
}, Yv = /* @__PURE__ */ se({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = z(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = z(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), m = z(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (p, d) => (s(), R(He, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", Lv, [
          e("div", zv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", u.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", Uv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Nv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", Ov, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Av, a(m.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Fv, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Bv, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Vv, [
            d[7] || (d[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              h(a(t.node.repository) + " ", 1),
              d[6] || (d[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Wv)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Gv, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", jv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Kv, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Hv, " Not used in any workflows ")) : (s(), o("div", qv, [
              (s(!0), o(V, null, ie(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => i("close"))
        }, {
          default: l(() => [...d[11] || (d[11] = [
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Jv = /* @__PURE__ */ ne(Yv, [["__scopeId", "data-v-b342f626"]]), Xv = { class: "dialog-message" }, Qv = {
  key: 0,
  class: "dialog-details"
}, Zv = {
  key: 1,
  class: "dialog-warning"
}, ef = /* @__PURE__ */ se({
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
    return (c, n) => (s(), R(He, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Xv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Qv, [
          (s(!0), o(V, null, ie(t.details, (i, u) => (s(), o("div", {
            key: u,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", Zv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), R(ye, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        _(ye, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
        }, {
          default: l(() => [
            h(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ws = /* @__PURE__ */ ne(ef, [["__scopeId", "data-v-3670b9f5"]]), tf = { class: "mismatch-warning" }, sf = { class: "version-mismatch" }, of = { class: "version-actual" }, nf = { class: "version-expected" }, af = { key: 0 }, lf = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, rf = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, df = /* @__PURE__ */ se({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: u, trackNodeAsDev: g, installNode: m, uninstallNode: p } = Ae(), d = y({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = y(!1), w = y(null), k = y(""), b = y(!1), f = y(null), x = y(null), I = z(() => {
      if (!k.value.trim()) return d.value.nodes;
      const oe = k.value.toLowerCase();
      return d.value.nodes.filter(
        (K) => {
          var te, Y;
          return K.name.toLowerCase().includes(oe) || ((te = K.description) == null ? void 0 : te.toLowerCase().includes(oe)) || ((Y = K.repository) == null ? void 0 : Y.toLowerCase().includes(oe));
        }
      );
    }), $ = z(
      () => I.value.filter((oe) => oe.installed && oe.tracked)
    ), P = z(
      () => I.value.filter((oe) => !oe.installed && oe.tracked)
    ), O = z(
      () => I.value.filter((oe) => oe.installed && !oe.tracked)
    );
    function T(oe) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[oe] || oe;
    }
    const E = z(() => n.versionMismatches.length > 0);
    function q(oe) {
      return !oe.used_in_workflows || oe.used_in_workflows.length === 0 ? "Not used in any workflows" : oe.used_in_workflows.length === 1 ? oe.used_in_workflows[0] : `${oe.used_in_workflows.length} workflows`;
    }
    function B(oe) {
      f.value = oe;
    }
    function F() {
      i("open-node-manager");
    }
    function S(oe) {
      x.value = {
        title: "Track as Development Node",
        message: `Track "${oe}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          x.value = null;
          try {
            v.value = !0;
            const K = await g(oe);
            K.status === "success" ? (i("toast", `✓ Node "${oe}" tracked as development`, "success"), await X()) : i("toast", `Failed to track node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            i("toast", `Error tracking node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function C(oe) {
      x.value = {
        title: "Remove Untracked Node",
        message: `Remove "${oe}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          x.value = null;
          try {
            v.value = !0;
            const K = await p(oe);
            K.status === "success" ? (i("toast", `✓ Node "${oe}" removed`, "success"), await X()) : i("toast", `Failed to remove node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            i("toast", `Error removing node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function M(oe) {
      x.value = {
        title: "Install Missing Node",
        message: `Install "${oe}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          x.value = null;
          try {
            v.value = !0;
            const K = await m(oe);
            K.status === "success" ? (i("toast", `✓ Node "${oe}" installed`, "success"), await X()) : i("toast", `Failed to install node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            i("toast", `Error installing node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function X() {
      v.value = !0, w.value = null;
      try {
        d.value = await u();
      } catch (oe) {
        w.value = oe instanceof Error ? oe.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Ne(X), (oe, K) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (te) => b.value = !0)
          }, {
            actions: l(() => [
              _(J, {
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: l(() => [...K[7] || (K[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          _(es, {
            modelValue: k.value,
            "onUpdate:modelValue": K[1] || (K[1] = (te) => k.value = te),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), R(zt, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (s(), R(Ut, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            d.value.total_count ? (s(), R(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (s(), o(V, { key: 0 }, [
                  h(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (s(), o(V, { key: 1 }, [
                  h(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            E.value ? (s(), R(Fe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", tf, [
                  K[8] || (K[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(V, null, ie(t.versionMismatches, (te) => (s(), R(ot, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: l(() => [...K[9] || (K[9] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(te.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", sf, [
                      e("span", of, a(te.actual), 1),
                      K[10] || (K[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", nf, a(te.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "warning",
                      size: "sm",
                      onClick: K[2] || (K[2] = (Y) => i("repair-environment"))
                    }, {
                      default: l(() => [...K[11] || (K[11] = [
                        h(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            O.value.length ? (s(), R(Fe, {
              key: 2,
              title: "UNTRACKED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(O.value, (te) => (s(), R(ot, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: l(() => [...K[12] || (K[12] = [
                    h("?", -1)
                  ])]),
                  title: l(() => [
                    h(a(te.name), 1)
                  ]),
                  subtitle: l(() => [...K[13] || (K[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    _(Ge, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => B(te)
                    }, {
                      default: l(() => [...K[14] || (K[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => S(te.name)
                    }, {
                      default: l(() => [...K[15] || (K[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(J, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Y) => C(te.name)
                    }, {
                      default: l(() => [...K[16] || (K[16] = [
                        h(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            $.value.length ? (s(), R(Fe, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie($.value, (te) => (s(), R(ot, {
                  key: te.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    h(a(te.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    h(a(te.name), 1)
                  ]),
                  subtitle: l(() => [
                    te.version ? (s(), o("span", af, a(te.source === "development" ? "" : "v") + a(te.version), 1)) : (s(), o("span", lf, "version unknown")),
                    e("span", rf, " • " + a(T(te.source)), 1)
                  ]),
                  details: l(() => [
                    _(Ge, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => B(te)
                    }, {
                      default: l(() => [...K[17] || (K[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: F
                    }, {
                      default: l(() => [...K[18] || (K[18] = [
                        h(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            P.value.length ? (s(), R(Fe, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(P.value, (te) => (s(), R(ot, {
                  key: te.name,
                  status: "missing"
                }, {
                  icon: l(() => [...K[19] || (K[19] = [
                    h("!", -1)
                  ])]),
                  title: l(() => [
                    h(a(te.name), 1)
                  ]),
                  subtitle: l(() => [...K[20] || (K[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    _(Ge, {
                      label: "Required by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => B(te)
                    }, {
                      default: l(() => [...K[21] || (K[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => M(te.name)
                    }, {
                      default: l(() => [...K[22] || (K[22] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !$.value.length && !P.value.length && !O.value.length ? (s(), R(_t, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: b.value,
        title: "About Custom Nodes",
        onClose: K[4] || (K[4] = (te) => b.value = !1)
      }, {
        content: l(() => [...K[23] || (K[23] = [
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
        actions: l(() => [
          _(J, {
            variant: "primary",
            onClick: K[3] || (K[3] = (te) => b.value = !1)
          }, {
            default: l(() => [...K[24] || (K[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      f.value ? (s(), R(Jv, {
        key: 0,
        node: f.value,
        onClose: K[5] || (K[5] = (te) => f.value = null)
      }, null, 8, ["node"])) : r("", !0),
      x.value ? (s(), R(Ws, {
        key: 1,
        title: x.value.title,
        message: x.value.message,
        warning: x.value.warning,
        "confirm-label": x.value.confirmLabel,
        destructive: x.value.destructive,
        onConfirm: x.value.onConfirm,
        onCancel: K[6] || (K[6] = (te) => x.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), cf = /* @__PURE__ */ ne(df, [["__scopeId", "data-v-1555a802"]]);
function ro(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const uf = { class: "remote-url-display" }, mf = ["title"], vf = ["title"], ff = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, pf = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gf = /* @__PURE__ */ se({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = y(!1), i = z(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), m = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${m}`;
    });
    async function u() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, m) => (s(), o("div", uf, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, mf),
      e("button", {
        class: fe(["copy-btn", { copied: n.value }]),
        onClick: u,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", pf, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", ff, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, vf)
    ]));
  }
}), hf = /* @__PURE__ */ ne(gf, [["__scopeId", "data-v-7768a58d"]]), yf = { class: "remote-title" }, wf = {
  key: 0,
  class: "default-badge"
}, kf = {
  key: 1,
  class: "sync-badge"
}, bf = {
  key: 0,
  class: "ahead"
}, _f = {
  key: 1,
  class: "behind"
}, $f = {
  key: 1,
  class: "synced"
}, Cf = ["href"], xf = {
  key: 1,
  class: "remote-url-text"
}, Sf = /* @__PURE__ */ se({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = z(() => c.fetchingRemote === c.remote.name), i = z(() => c.remote.is_default), u = z(() => c.syncStatus && c.syncStatus.behind > 0), g = z(() => c.syncStatus && c.syncStatus.ahead > 0), m = z(() => c.remote.push_url !== c.remote.fetch_url), p = z(() => {
      const v = c.remote.fetch_url, w = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return w ? `https://${w[1]}/${w[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = z(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, w) => (s(), R(ot, {
      status: i.value ? "synced" : void 0
    }, Kt({
      icon: l(() => [
        h(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", yf, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", wf, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", kf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(V, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", bf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", _f, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", $f, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        p.value ? (s(), o("a", {
          key: 0,
          href: p.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: w[0] || (w[0] = Be(() => {
          }, ["stop"]))
        }, a(d.value), 9, Cf)) : (s(), o("span", xf, a(d.value), 1))
      ]),
      actions: l(() => [
        _(J, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: w[1] || (w[1] = (k) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...w[6] || (w[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        _(J, {
          variant: u.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[2] || (w[2] = (k) => v.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        _(J, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[3] || (w[3] = (k) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        _(J, {
          variant: "secondary",
          size: "xs",
          onClick: w[4] || (w[4] = (k) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...w[7] || (w[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), R(J, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: w[5] || (w[5] = (k) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...w[8] || (w[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      m.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), R(Ge, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              _(hf, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), If = /* @__PURE__ */ ne(Sf, [["__scopeId", "data-v-8310f3a8"]]), Ef = ["for"], Tf = {
  key: 0,
  class: "base-form-field-required"
}, Rf = { class: "base-form-field-input" }, Pf = {
  key: 1,
  class: "base-form-field-error"
}, Mf = {
  key: 2,
  class: "base-form-field-hint"
}, Df = /* @__PURE__ */ se({
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
    const c = t, n = z(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, u) => (s(), o("div", {
      class: fe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Tf, "*")) : r("", !0)
      ], 8, Ef)) : r("", !0),
      e("div", Rf, [
        Re(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Pf, a(t.error), 1)) : t.hint ? (s(), o("span", Mf, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), Es = /* @__PURE__ */ ne(Df, [["__scopeId", "data-v-9a1cf296"]]), Lf = { class: "remote-form" }, zf = { class: "form-header" }, Uf = { class: "form-body" }, Nf = {
  key: 0,
  class: "form-error"
}, Of = { class: "form-actions" }, Af = /* @__PURE__ */ se({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = y(!1), m = y(null);
    ut(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      u.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const p = z(() => u.value.name.trim() !== "" && u.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!p.value || g.value)) {
        m.value = null, g.value = !0;
        try {
          i("submit", u.value);
        } catch (v) {
          m.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (v, w) => (s(), o("div", Lf, [
      e("div", zf, [
        _(ct, null, {
          default: l(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Uf, [
        _(Es, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            _(bt, {
              modelValue: u.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (k) => u.value.name = k),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        _(Es, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            _(bt, {
              modelValue: u.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (k) => u.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        _(Es, { label: "Push URL (optional)" }, {
          default: l(() => [
            _(bt, {
              modelValue: u.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (k) => u.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (s(), o("div", Nf, a(m.value), 1)) : r("", !0)
      ]),
      e("div", Of, [
        _(J, {
          variant: "primary",
          size: "md",
          disabled: !p.value,
          loading: g.value,
          onClick: d
        }, {
          default: l(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        _(J, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (k) => v.$emit("cancel"))
        }, {
          default: l(() => [...w[4] || (w[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ff = /* @__PURE__ */ ne(Af, [["__scopeId", "data-v-56021b18"]]), Bf = { class: "conflict-summary-box" }, Vf = { class: "summary-header" }, Wf = { class: "summary-text" }, Gf = { key: 0 }, jf = {
  key: 1,
  class: "all-resolved"
}, Kf = { class: "summary-progress" }, Hf = { class: "progress-bar" }, qf = { class: "progress-text" }, Yf = /* @__PURE__ */ se({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = z(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, u) => (s(), o("div", Bf, [
      e("div", Vf, [
        u[0] || (u[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Wf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Gf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", jf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Kf, [
        e("div", Hf, [
          e("div", {
            class: "progress-fill",
            style: Lt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", qf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Jf = /* @__PURE__ */ ne(Yf, [["__scopeId", "data-v-4e9e6cc9"]]), Xf = { class: "modal-header" }, Qf = { class: "modal-title" }, Zf = { class: "modal-body" }, ep = {
  key: 0,
  class: "error-box"
}, tp = {
  key: 0,
  class: "error-hint"
}, sp = {
  key: 1,
  class: "loading-state"
}, op = { class: "commit-summary" }, np = {
  key: 0,
  class: "changes-section"
}, ap = {
  key: 0,
  class: "change-group",
  open: ""
}, lp = { class: "change-count" }, ip = { class: "change-list" }, rp = {
  key: 0,
  class: "conflict-badge"
}, dp = {
  key: 1,
  class: "change-group"
}, cp = { class: "change-count" }, up = { class: "change-list" }, mp = {
  key: 2,
  class: "change-group"
}, vp = { class: "change-count" }, fp = { class: "change-list" }, pp = {
  key: 2,
  class: "strategy-section"
}, gp = { class: "radio-group" }, hp = { class: "radio-option" }, yp = { class: "radio-option" }, wp = { class: "radio-option" }, kp = {
  key: 3,
  class: "up-to-date"
}, bp = { class: "modal-actions" }, Js = "comfygit.pullModelStrategy", _p = /* @__PURE__ */ se({
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
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(localStorage.getItem(Js) || "skip");
    ut(u, ($) => {
      localStorage.setItem(Js, $);
    });
    const g = z(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), m = z(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), p = z(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = z(() => {
      var $;
      return m.value > 0 || p.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = z(() => n.preview && ro(n.preview) ? n.preview : null), w = z(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = z(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), b = z(
      () => w.value > 0 && k.value === w.value
    ), f = z(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !b.value));
    function x($) {
      if (!v.value) return !1;
      const P = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((O) => O.name === P);
    }
    function I($) {
      const P = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: u.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var O, T;
      return s(), R(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (E) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Xf, [
              e("h3", Qf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (E) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Zf, [
              t.error ? (s(), o("div", ep, [
                P[13] || (P[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  P[12] || (P[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", tp, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", sp, [...P[14] || (P[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (O = t.preview) != null && O.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
                P[15] || (P[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                P[16] || (P[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", op, [
                  P[17] || (P[17] = e("span", { class: "icon" }, "📥", -1)),
                  h(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", np, [
                  P[21] || (P[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  m.value > 0 ? (s(), o("details", ap, [
                    e("summary", null, [
                      P[18] || (P[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", lp, a(m.value) + " changes", 1)
                    ]),
                    e("div", ip, [
                      (s(!0), o(V, null, ie(t.preview.changes.workflows.added, (E) => (s(), o("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + a(E), 1))), 128)),
                      (s(!0), o(V, null, ie(t.preview.changes.workflows.modified, (E) => (s(), o("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(E) + " ", 1),
                        x(E) ? (s(), o("span", rp, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, ie(t.preview.changes.workflows.deleted, (E) => (s(), o("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + a(E), 1))), 128))
                    ])
                  ])) : r("", !0),
                  p.value > 0 ? (s(), o("details", dp, [
                    e("summary", null, [
                      P[19] || (P[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", cp, a(p.value) + " to install", 1)
                    ]),
                    e("div", up, [
                      (s(!0), o(V, null, ie(t.preview.changes.nodes.to_install, (E) => (s(), o("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + a(E), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", mp, [
                    e("summary", null, [
                      P[20] || (P[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", vp, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", fp, [
                      (s(!0), o(V, null, ie(t.preview.changes.models.referenced, (E) => (s(), o("div", {
                        key: E,
                        class: "change-item"
                      }, a(E), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                v.value ? (s(), R(Jf, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", pp, [
                  P[26] || (P[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", gp, [
                    e("label", hp, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (E) => u.value = E),
                        value: "all"
                      }, null, 512), [
                        [Rt, u.value]
                      ]),
                      P[22] || (P[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", yp, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (E) => u.value = E),
                        value: "required"
                      }, null, 512), [
                        [Rt, u.value]
                      ]),
                      P[23] || (P[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", wp, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (E) => u.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Rt, u.value]
                      ]),
                      P[24] || (P[24] = e("span", null, "Skip model downloads", -1)),
                      P[25] || (P[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  P[27] || (P[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", kp, [
                  P[28] || (P[28] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", bp, [
              _(J, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (E) => $.$emit("close"))
              }, {
                default: l(() => [...P[29] || (P[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                _(J, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: P[5] || (P[5] = (E) => I(!1))
                }, {
                  default: l(() => [...P[30] || (P[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                _(J, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: P[6] || (P[6] = (E) => I(!0))
                }, {
                  default: l(() => [...P[31] || (P[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = t.preview) != null && T.has_uncommitted_changes ? (s(), R(J, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: P[7] || (P[7] = (E) => I(!0))
              }, {
                default: l(() => [...P[32] || (P[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                v.value && !b.value ? (s(), R(J, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (E) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    h(" Resolve Conflicts (" + a(k.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), R(J, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !f.value,
                  onClick: P[9] || (P[9] = (E) => I(!1))
                }, {
                  default: l(() => [...P[33] || (P[33] = [
                    h(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : r("", !0)
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), $p = /* @__PURE__ */ ne(_p, [["__scopeId", "data-v-300c7b2f"]]), Cp = { class: "modal-header" }, xp = { class: "modal-title" }, Sp = { class: "modal-body" }, Ip = {
  key: 0,
  class: "loading-state"
}, Ep = {
  key: 1,
  class: "warning-box"
}, Tp = {
  key: 0,
  class: "commits-section"
}, Rp = { class: "commit-list" }, Pp = { class: "commit-hash" }, Mp = { class: "commit-message" }, Dp = { class: "commit-date" }, Lp = { class: "force-option" }, zp = { class: "checkbox-option" }, Up = { class: "commit-summary" }, Np = {
  key: 0,
  class: "commits-section"
}, Op = { class: "commit-list" }, Ap = { class: "commit-hash" }, Fp = { class: "commit-message" }, Bp = { class: "commit-date" }, Vp = {
  key: 1,
  class: "up-to-date"
}, Wp = { class: "modal-actions" }, Gp = /* @__PURE__ */ se({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: c }) {
    const n = c, i = y(!1);
    function u(g) {
      n("push", { force: g });
    }
    return (g, m) => {
      var p, d, v;
      return s(), R(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: m[7] || (m[7] = (w) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: m[6] || (m[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Cp, [
              e("h3", xp, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: m[0] || (m[0] = (w) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Sp, [
              t.loading ? (s(), o("div", Ip, [...m[8] || (m[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (p = t.preview) != null && p.has_uncommitted_changes ? (s(), o("div", Ep, [...m[9] || (m[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(V, { key: 2 }, [
                m[13] || (m[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Tp, [
                  m[10] || (m[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Rp, [
                    (s(!0), o(V, null, ie(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Pp, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Mp, a(w.message), 1),
                      e("span", Dp, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", Lp, [
                  e("label", zp, [
                    Pe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": m[1] || (m[1] = (w) => i.value = w)
                    }, null, 512), [
                      [ks, i.value]
                    ]),
                    m[11] || (m[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  m[12] || (m[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", Up, [
                  m[14] || (m[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Np, [
                  m[15] || (m[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Op, [
                    (s(!0), o(V, null, ie(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Ap, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Fp, a(w.message), 1),
                      e("span", Bp, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Vp, [
                  m[16] || (m[16] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", Wp, [
              _(J, {
                variant: "secondary",
                onClick: m[2] || (m[2] = (w) => g.$emit("close"))
              }, {
                default: l(() => [...m[17] || (m[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                _(J, {
                  variant: "secondary",
                  onClick: m[3] || (m[3] = (w) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...m[18] || (m[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                _(J, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: m[4] || (m[4] = (w) => u(!0))
                }, {
                  default: l(() => [...m[19] || (m[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), R(J, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: m[5] || (m[5] = (w) => u(!1))
              }, {
                default: l(() => [...m[20] || (m[20] = [
                  h(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : r("", !0)
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), jp = /* @__PURE__ */ ne(Gp, [["__scopeId", "data-v-bc6ded53"]]), Kp = { class: "resolution-choice-group" }, Hp = ["disabled"], qp = ["disabled"], Yp = /* @__PURE__ */ se({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Kp, [
      e("button", {
        class: fe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Hp),
      e("button", {
        class: fe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, qp)
    ]));
  }
}), Jp = /* @__PURE__ */ ne(Yp, [["__scopeId", "data-v-985715ed"]]), Xp = { class: "conflict-header" }, Qp = { class: "conflict-info" }, Zp = { class: "workflow-name" }, eg = { class: "conflict-description" }, tg = {
  key: 0,
  class: "resolved-badge"
}, sg = { class: "resolved-text" }, og = { class: "conflict-hashes" }, ng = { class: "hash-item" }, ag = { class: "hash-item" }, lg = { class: "conflict-actions" }, ig = /* @__PURE__ */ se({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(n.resolution);
    ut(() => n.resolution, (d) => {
      u.value = d;
    }), ut(u, (d) => {
      d && i("resolve", d);
    });
    const g = z(() => u.value !== null), m = z(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), p = z(() => {
      switch (u.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, v) => {
      var w, k;
      return s(), o("div", {
        class: fe(["conflict-item", { resolved: g.value }])
      }, [
        e("div", Xp, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Qp, [
            e("code", Zp, a(t.conflict.name) + ".json", 1),
            e("div", eg, a(m.value), 1)
          ]),
          g.value ? (s(), o("div", tg, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", sg, a(p.value), 1)
          ])) : r("", !0)
        ]),
        e("div", og, [
          e("span", ng, [
            v[3] || (v[3] = h("Your: ", -1)),
            e("code", null, a(((w = t.conflict.base_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", ag, [
            v[4] || (v[4] = h("Theirs: ", -1)),
            e("code", null, a(((k = t.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", lg, [
          _(Jp, {
            modelValue: u.value,
            "onUpdate:modelValue": v[0] || (v[0] = (b) => u.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), rg = /* @__PURE__ */ ne(ig, [["__scopeId", "data-v-506d3bbf"]]), dg = { class: "resolution-content" }, cg = {
  key: 0,
  class: "error-box"
}, ug = { class: "resolution-header" }, mg = { class: "header-stats" }, vg = { class: "stat" }, fg = { class: "stat-value" }, pg = { class: "stat resolved" }, gg = { class: "stat-value" }, hg = {
  key: 0,
  class: "stat pending"
}, yg = { class: "stat-value" }, wg = { class: "conflicts-list" }, kg = {
  key: 1,
  class: "all-resolved-message"
}, bg = /* @__PURE__ */ se({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = z(() => n.resolutions.size), g = z(() => n.workflowConflicts.length - u.value), m = z(() => u.value === n.workflowConflicts.length), p = z(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(b) {
      const f = n.resolutions.get(b);
      return (f == null ? void 0 : f.resolution) ?? null;
    }
    function v(b, f) {
      i("resolve", b, f);
    }
    function w() {
      i("close");
    }
    function k() {
      i("apply");
    }
    return (b, f) => (s(), R(He, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: l(() => [
        e("div", dg, [
          t.error ? (s(), o("div", cg, [
            f[1] || (f[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              f[0] || (f[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", ug, [
            e("div", mg, [
              e("div", vg, [
                e("span", fg, a(t.workflowConflicts.length), 1),
                f[2] || (f[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", pg, [
                e("span", gg, a(u.value), 1),
                f[3] || (f[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", hg, [
                e("span", yg, a(g.value), 1),
                f[4] || (f[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            f[5] || (f[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", wg, [
            (s(!0), o(V, null, ie(t.workflowConflicts, (x) => (s(), R(rg, {
              key: x.name,
              conflict: x,
              resolution: d(x.name),
              onResolve: (I) => v(x.name, I)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          m.value ? (s(), o("div", kg, [
            f[6] || (f[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(p.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: w
        }, {
          default: l(() => [...f[7] || (f[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[8] || (f[8] = e("div", { class: "footer-spacer" }, null, -1)),
        _(ye, {
          variant: "primary",
          disabled: !m.value || t.validating,
          loading: t.validating,
          onClick: k
        }, {
          default: l(() => [
            h(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _g = /* @__PURE__ */ ne(bg, [["__scopeId", "data-v-c58d150d"]]), $g = { class: "node-conflict-item" }, Cg = { class: "node-header" }, xg = { class: "node-name" }, Sg = { class: "node-id" }, Ig = { class: "version-comparison" }, Eg = { class: "version yours" }, Tg = { class: "version theirs" }, Rg = { class: "chosen-version" }, Pg = { class: "chosen" }, Mg = { class: "chosen-reason" }, Dg = { class: "affected-workflows" }, Lg = { class: "wf-source" }, zg = { class: "wf-version" }, Ug = /* @__PURE__ */ se({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", $g, [
      e("div", Cg, [
        e("code", xg, a(t.conflict.node_name), 1),
        e("span", Sg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Ig, [
        e("div", Eg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Tg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Rg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Pg, a(t.conflict.chosen_version), 1),
        e("span", Mg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Dg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(V, null, ie(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Lg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", zg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Ng = /* @__PURE__ */ ne(Ug, [["__scopeId", "data-v-8b626725"]]), Og = { class: "validation-content" }, Ag = {
  key: 0,
  class: "compatible-message"
}, Fg = { class: "conflicts-list" }, Bg = {
  key: 2,
  class: "warnings-section"
}, Vg = /* @__PURE__ */ se({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = z(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, m) => (s(), R(He, {
      title: "Compatibility Check",
      size: "lg",
      onClose: m[3] || (m[3] = (p) => i("cancel"))
    }, {
      body: l(() => [
        e("div", Og, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Ag, [
            m[5] || (m[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              m[4] || (m[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(V, { key: 1 }, [
            m[6] || (m[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Fg, [
              (s(!0), o(V, null, ie(t.validation.node_conflicts, (p) => (s(), R(Ng, {
                key: p.node_id,
                conflict: p
              }, null, 8, ["conflict"]))), 128))
            ]),
            m[7] || (m[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Bg, [
            m[8] || (m[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(V, null, ie(t.validation.warnings, (p, d) => (s(), o("li", { key: d }, a(p), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (p) => i("cancel"))
        }, {
          default: l(() => [...m[9] || (m[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m[11] || (m[11] = e("div", { class: "footer-spacer" }, null, -1)),
        _(ye, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (p) => i("goBack"))
        }, {
          default: l(() => [...m[10] || (m[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        _(ye, {
          variant: "primary",
          loading: t.executing,
          onClick: m[2] || (m[2] = (p) => i("proceed"))
        }, {
          default: l(() => [
            h(a(u.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Wg = /* @__PURE__ */ ne(Vg, [["__scopeId", "data-v-fefd26ed"]]), Gg = { key: 0 }, jg = /* @__PURE__ */ se({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: u,
      removeRemote: g,
      updateRemoteUrl: m,
      fetchRemote: p,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: w,
      getPushPreview: k,
      pushToRemote: b,
      validateMerge: f
    } = Ae(), x = y([]), I = y(null), $ = y({}), P = y(!1), O = y(null), T = y(""), E = y(!1), q = y(null), B = y(!1), F = y("add"), S = y({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), C = z(() => {
      if (!T.value.trim()) return x.value;
      const G = T.value.toLowerCase();
      return x.value.filter(
        (le) => le.name.toLowerCase().includes(G) || le.fetch_url.toLowerCase().includes(G) || le.push_url.toLowerCase().includes(G)
      );
    });
    async function M() {
      P.value = !0, O.value = null;
      try {
        const G = await i();
        x.value = G.remotes, I.value = G.current_branch_tracking || null, await Promise.all(
          G.remotes.map(async (le) => {
            const xe = await d(le.name);
            xe && ($.value[le.name] = xe);
          })
        );
      } catch (G) {
        O.value = G instanceof Error ? G.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function X() {
      F.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function oe(G) {
      const le = x.value.find((xe) => xe.name === G);
      le && (F.value = "edit", S.value = {
        name: le.name,
        fetchUrl: le.fetch_url,
        pushUrl: le.push_url
      }, B.value = !0);
    }
    async function K(G) {
      try {
        F.value === "add" ? await u(G.name, G.fetchUrl) : await m(G.name, G.fetchUrl, G.pushUrl || void 0), B.value = !1, await M();
      } catch (le) {
        O.value = le instanceof Error ? le.message : "Operation failed";
      }
    }
    function te() {
      B.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Y(G) {
      q.value = G;
      try {
        await p(G);
        const le = await d(G);
        le && ($.value[G] = le), n("toast", `✓ Fetched from ${G}`, "success");
      } catch (le) {
        n("toast", le instanceof Error ? le.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function U(G) {
      if (confirm(`Remove remote "${G}"?`))
        try {
          await g(G), await M();
        } catch (le) {
          O.value = le instanceof Error ? le.message : "Failed to remove remote";
        }
    }
    function N() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const D = y("idle"), ve = z(() => D.value === "pull_preview"), ae = z(
      () => D.value === "resolving" || D.value === "validating"
    ), be = z(
      () => D.value === "validation_review" || D.value === "executing"
    ), Ce = y(!1), Le = y(null), Ue = y(!1), me = y(null), ge = y(!1), Me = y(null), ce = y(null), Z = y(/* @__PURE__ */ new Map()), De = y(null), pe = y(null), Je = z(() => Me.value && ro(Me.value) ? Me.value : null);
    async function tt(G) {
      me.value = G, D.value = "pull_preview", ge.value = !0, Me.value = null, ce.value = null;
      try {
        Me.value = await v(G);
      } catch (le) {
        ce.value = le instanceof Error ? le.message : "Failed to load pull preview";
      } finally {
        ge.value = !1;
      }
    }
    function st() {
      D.value = "idle", Me.value = null, ce.value = null, me.value = null;
    }
    async function Te(G) {
      if (!me.value) return;
      D.value = "executing", ce.value = null;
      const le = me.value;
      try {
        const xe = await w(le, G);
        if (xe.rolled_back) {
          ce.value = `Pull failed and was rolled back: ${xe.error || "Unknown error"}`, D.value = "pull_preview";
          return;
        }
        Ye(), D.value = "idle", n("toast", `✓ Pulled from ${le}`, "success"), await M();
      } catch (xe) {
        ce.value = xe instanceof Error ? xe.message : "Pull failed", D.value = "pull_preview";
      }
    }
    function Xe() {
      Je.value && (D.value = "resolving", pe.value = null);
    }
    function qe(G, le) {
      Z.value.set(G, { name: G, resolution: le });
    }
    function Qe() {
      D.value = "pull_preview";
    }
    async function mt() {
      D.value = "validating", pe.value = null;
      try {
        const G = Array.from(Z.value.values());
        De.value = await f(me.value, G), D.value = "validation_review";
      } catch (G) {
        pe.value = G instanceof Error ? G.message : "Validation failed", D.value = "resolving";
      }
    }
    async function $e() {
      D.value = "executing";
      const G = me.value;
      try {
        const le = Array.from(Z.value.values()), xe = await w(G, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: le
        });
        if (xe.rolled_back) {
          ce.value = `Pull failed and was rolled back: ${xe.error || "Unknown error"}`, D.value = "pull_preview";
          return;
        }
        Ye(), D.value = "idle", n("toast", `✓ Pulled from ${G}`, "success"), await M();
      } catch (le) {
        ce.value = le instanceof Error ? le.message : "Pull failed", D.value = "validation_review";
      }
    }
    function je() {
      D.value = "resolving";
    }
    function it() {
      Ye(), D.value = "idle";
    }
    function Ye() {
      Z.value.clear(), De.value = null, pe.value = null, ce.value = null, Me.value = null, me.value = null;
    }
    async function ue(G) {
      me.value = G, Ce.value = !0, ge.value = !0, Le.value = null;
      try {
        Le.value = await k(G);
      } catch (le) {
        O.value = le instanceof Error ? le.message : "Failed to load push preview";
      } finally {
        ge.value = !1;
      }
    }
    function Q() {
      Ce.value = !1, Le.value = null, me.value = null;
    }
    async function ee(G) {
      if (!me.value) return;
      Ue.value = !0;
      const le = me.value;
      try {
        await b(le, G), Q(), n("toast", `✓ Pushed to ${le}`, "success"), await M();
      } catch (xe) {
        n("toast", xe instanceof Error ? xe.message : "Push failed", "error");
      } finally {
        Ue.value = !1;
      }
    }
    function L() {
      const G = me.value;
      Q(), G && tt(G);
    }
    return Ne(M), (G, le) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (xe) => E.value = !0)
          }, {
            actions: l(() => [
              B.value ? r("", !0) : (s(), R(J, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: X
              }, {
                default: l(() => [...le[3] || (le[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          B.value ? r("", !0) : (s(), R(es, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": le[1] || (le[1] = (xe) => T.value = xe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          P.value ? (s(), R(zt, {
            key: 0,
            message: "Loading remotes..."
          })) : O.value ? (s(), R(Ut, {
            key: 1,
            message: O.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            B.value ? (s(), R(Ff, {
              key: 0,
              mode: F.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: K,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            x.value.length && !B.value ? (s(), R(ps, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(x.value.length) + " remote" + a(x.value.length !== 1 ? "s" : "") + " ", 1),
                I.value ? (s(), o("span", Gg, " • Tracking: " + a(I.value.remote) + "/" + a(I.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            C.value.length && !B.value ? (s(), R(Fe, {
              key: 2,
              title: "REMOTES",
              count: C.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(C.value, (xe) => (s(), R(If, {
                  key: xe.name,
                  remote: xe,
                  "sync-status": $.value[xe.name],
                  "fetching-remote": q.value,
                  onFetch: Y,
                  onEdit: oe,
                  onRemove: U,
                  onPull: tt,
                  onPush: ue
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !C.value.length && !B.value ? (s(), R(_t, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                _(J, {
                  variant: "primary",
                  onClick: X
                }, {
                  default: l(() => [...le[4] || (le[4] = [
                    h(" Add Your First Remote ", -1)
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
      _($t, {
        show: E.value,
        title: "About Git Remotes",
        onClose: le[2] || (le[2] = (xe) => E.value = !1)
      }, {
        content: l(() => [...le[5] || (le[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          _(J, {
            variant: "link",
            onClick: N
          }, {
            default: l(() => [...le[6] || (le[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _($p, {
        show: ve.value,
        "remote-name": me.value || "",
        preview: Me.value,
        loading: ge.value,
        pulling: D.value === "executing",
        error: ce.value,
        "conflict-resolutions": Z.value,
        onClose: st,
        onPull: Te,
        onOpenConflictResolution: Xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      _(jp, {
        show: Ce.value,
        "remote-name": me.value || "",
        preview: Le.value,
        loading: ge.value,
        pushing: Ue.value,
        onClose: Q,
        onPush: ee,
        onPullFirst: L
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ae.value && Je.value ? (s(), R(_g, {
        key: 0,
        "workflow-conflicts": Je.value.workflow_conflicts,
        resolutions: Z.value,
        "operation-type": "pull",
        validating: D.value === "validating",
        error: pe.value,
        onClose: Qe,
        onResolve: qe,
        onApply: mt
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      be.value && De.value ? (s(), R(Wg, {
        key: 1,
        validation: De.value,
        "operation-type": "pull",
        executing: D.value === "executing",
        onProceed: $e,
        onGoBack: je,
        onCancel: it
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Kg = /* @__PURE__ */ ne(jg, [["__scopeId", "data-v-9ae3b76d"]]), Hg = { class: "setting-info" }, qg = { class: "setting-label" }, Yg = {
  key: 0,
  class: "required-marker"
}, Jg = {
  key: 0,
  class: "setting-description"
}, Xg = { class: "setting-control" }, Qg = /* @__PURE__ */ se({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Hg, [
        e("div", qg, [
          h(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Yg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Jg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Xg, [
        Re(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ts = /* @__PURE__ */ ne(Qg, [["__scopeId", "data-v-cb5d236c"]]), Zg = { class: "toggle" }, eh = ["checked", "disabled"], th = /* @__PURE__ */ se({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Zg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, eh),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), sh = /* @__PURE__ */ ne(th, [["__scopeId", "data-v-71c0f550"]]), oh = { class: "workspace-settings-content" }, nh = { class: "settings-section" }, ah = { class: "path-setting" }, lh = { class: "path-value" }, ih = { class: "path-setting" }, rh = { class: "path-value" }, dh = { class: "settings-section" }, ch = { class: "settings-section" }, uh = { class: "settings-section" }, mh = /* @__PURE__ */ se({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, u = n, { getConfig: g, updateConfig: m } = Ae(), p = y(!1), d = y(null), v = y(null), w = y(null), k = y(null), b = y(""), f = y(""), x = y(!1);
    function I(B) {
      return B.join(" ");
    }
    function $(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const P = z(() => {
      if (!k.value) return !1;
      const B = b.value !== (k.value.civitai_api_key || ""), F = f.value !== I(k.value.comfyui_extra_args || []);
      return B || F;
    });
    async function O() {
      p.value = !0, d.value = null;
      try {
        w.value = await g(i.workspacePath || void 0), k.value = { ...w.value }, b.value = w.value.civitai_api_key || "", f.value = I(w.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        x.value = B === "true";
      } catch (B) {
        d.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        p.value = !1;
      }
    }
    async function T() {
      var B, F;
      v.value = null;
      try {
        const S = {};
        b.value !== (((B = k.value) == null ? void 0 : B.civitai_api_key) || "") && (S.civitai_api_key = b.value || null), f.value !== I(((F = k.value) == null ? void 0 : F.comfyui_extra_args) || []) && (S.comfyui_extra_args = $(f.value)), await m(S, i.workspacePath || void 0), await O(), v.value = { type: "success", message: "Settings saved successfully" }, u("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (S) {
        const C = S instanceof Error ? S.message : "Failed to save settings";
        v.value = { type: "error", message: C }, u("error", C);
      }
    }
    function E() {
      k.value && (b.value = k.value.civitai_api_key || "", f.value = I(k.value.comfyui_extra_args || []), v.value = null);
    }
    function q(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return c({
      saveSettings: T,
      resetSettings: E,
      hasChanges: P,
      loadSettings: O
    }), Ne(O), (B, F) => (s(), o("div", oh, [
      p.value ? (s(), R(zt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), R(Ut, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: O
      }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
        _(Fe, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var S, C;
            return [
              e("div", nh, [
                e("div", ah, [
                  F[3] || (F[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  F[4] || (F[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", lh, a(((S = w.value) == null ? void 0 : S.workspace_path) || "Loading..."), 1)
                ]),
                e("div", ih, [
                  F[5] || (F[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  F[6] || (F[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", rh, a(((C = w.value) == null ? void 0 : C.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        _(Fe, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", dh, [
              _(Ts, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  _(bs, {
                    modelValue: b.value,
                    "onUpdate:modelValue": F[0] || (F[0] = (S) => b.value = S),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        _(Fe, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", ch, [
              _(Ts, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  _(bs, {
                    modelValue: f.value,
                    "onUpdate:modelValue": F[1] || (F[1] = (S) => f.value = S),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              F[7] || (F[7] = e("div", { class: "setting-hint" }, [
                h(" Common flags: "),
                e("code", null, "--lowvram"),
                h(", "),
                e("code", null, "--highvram"),
                h(", "),
                e("code", null, "--listen 0.0.0.0"),
                h(", "),
                e("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        _(Fe, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", uh, [
              _(Ts, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  _(sh, {
                    modelValue: x.value,
                    "onUpdate:modelValue": [
                      F[2] || (F[2] = (S) => x.value = S),
                      q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        v.value ? (s(), R(ps, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: Lt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), co = /* @__PURE__ */ ne(mh, [["__scopeId", "data-v-9f44552d"]]), vh = /* @__PURE__ */ se({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = y(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, u) => (s(), R(nt, null, {
      header: l(() => [
        _(at, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var g, m;
            return [
              _(J, {
                variant: "primary",
                size: "sm",
                disabled: !((g = c.value) != null && g.hasChanges),
                onClick: u[0] || (u[0] = (p) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: l(() => [...u[2] || (u[2] = [
                  h(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (m = c.value) != null && m.hasChanges ? (s(), R(J, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: u[1] || (u[1] = (p) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: l(() => [...u[3] || (u[3] = [
                  h(" Reset ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: l(() => [
        _(co, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), fh = { class: "base-tabs" }, ph = ["disabled", "onClick"], gh = {
  key: 0,
  class: "base-tabs__badge"
}, hh = /* @__PURE__ */ se({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u(g) {
      var m;
      (m = n.tabs.find((p) => p.id === g)) != null && m.disabled || i("update:modelValue", g);
    }
    return (g, m) => (s(), o("div", fh, [
      (s(!0), o(V, null, ie(t.tabs, (p) => (s(), o("button", {
        key: p.id,
        class: fe([
          "base-tabs__tab",
          {
            active: t.modelValue === p.id,
            disabled: p.disabled
          }
        ]),
        disabled: p.disabled,
        onClick: (d) => u(p.id)
      }, [
        h(a(p.label) + " ", 1),
        p.badge ? (s(), o("span", gh, a(p.badge), 1)) : r("", !0)
      ], 10, ph))), 128))
    ]));
  }
}), uo = /* @__PURE__ */ ne(hh, [["__scopeId", "data-v-ad5e6cad"]]), yh = { class: "log-viewer-wrapper" }, wh = ["disabled", "title"], kh = /* @__PURE__ */ se({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(t) {
    const c = t, n = y(null), i = y("idle"), u = z(() => c.logs.map((v) => ({
      text: c.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function g() {
      var w;
      await As();
      const v = (w = n.value) == null ? void 0 : w.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    Ne(g), ut(() => c.logs, g);
    async function m() {
      if (u.value.length === 0) return;
      const v = u.value.map((w) => w.text).join(`
`);
      try {
        await navigator.clipboard.writeText(v), i.value = "copied", setTimeout(() => {
          i.value = "idle";
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy logs:", w);
      }
    }
    function p(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, w) => (s(), o("div", yh, [
      e("div", {
        ref_key: "logOutputElement",
        ref: n,
        class: "log-output",
        onKeydown: p,
        onCopy: d,
        tabindex: "0"
      }, [
        e("button", {
          class: "copy-overlay-btn",
          onClick: m,
          disabled: i.value !== "idle",
          title: i.value === "copied" ? "Copied!" : "Copy all logs"
        }, a(i.value === "copied" ? "Copied!" : "Copy"), 9, wh),
        (s(!0), o(V, null, ie(u.value, (k, b) => (s(), o("div", {
          key: b,
          class: fe(`log-line log-level-${k.level.toLowerCase()}`)
        }, a(k.text), 3))), 128))
      ], 544)
    ]));
  }
}), mo = /* @__PURE__ */ ne(kh, [["__scopeId", "data-v-c0cc6d21"]]), bh = /* @__PURE__ */ se({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const {
      getWorkspaceLogs: c,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: i,
      getOrchestratorLogPath: u,
      openFile: g
    } = Ae(), m = y("workspace"), p = y([]), d = y(!1), v = y(null), w = y(!1), k = y(null), b = y(null), f = y(!1), x = z(() => m.value === "workspace" ? k.value : b.value);
    async function I() {
      d.value = !0, v.value = null;
      try {
        m.value === "workspace" ? p.value = await c(void 0, 500) : p.value = await i(void 0, 500);
      } catch (O) {
        v.value = O instanceof Error ? O.message : `Failed to load ${m.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [O, T] = await Promise.all([
          n(),
          u()
        ]);
        O.exists && (k.value = O.path), T.exists && (b.value = T.path);
      } catch {
      }
    }
    async function P() {
      if (x.value) {
        f.value = !0;
        try {
          await g(x.value);
        } catch (O) {
          console.error("Failed to open log file:", O);
        } finally {
          f.value = !1;
        }
      }
    }
    return ut(m, () => {
      I();
    }), Ne(() => {
      I(), $();
    }), (O, T) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (E) => w.value = !0)
          }, {
            actions: l(() => [
              _(J, {
                variant: "secondary",
                size: "sm",
                onClick: P,
                disabled: !x.value || f.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(f.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              _(J, {
                variant: "secondary",
                size: "sm",
                onClick: I,
                disabled: d.value
              }, {
                default: l(() => [
                  h(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          _(uo, {
            modelValue: m.value,
            "onUpdate:modelValue": T[1] || (T[1] = (E) => m.value = E),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), R(zt, {
            key: 0,
            message: `Loading ${m.value} logs...`
          }, null, 8, ["message"])) : v.value ? (s(), R(Ut, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            p.value.length === 0 ? (s(), R(_t, {
              key: 0,
              icon: "📝",
              message: `No ${m.value} logs available`
            }, null, 8, ["message"])) : (s(), R(mo, {
              key: 1,
              logs: p.value,
              "raw-format": m.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: w.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (E) => w.value = !1)
      }, {
        content: l(() => [...T[4] || (T[4] = [
          e("p", null, [
            e("strong", null, "Workspace Logs:"),
            h(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Orchestrator Logs:"),
            h(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
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
          ], -1)
        ])]),
        actions: l(() => [
          _(J, {
            variant: "primary",
            onClick: T[2] || (T[2] = (E) => w.value = !1)
          }, {
            default: l(() => [...T[5] || (T[5] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _h = /* @__PURE__ */ se({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: u } = Ae(), g = y([]), m = y(!1), p = y(null), d = y(!1), v = y("production"), w = y(null), k = y(!1);
    async function b() {
      m.value = !0, p.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const I = await n();
          v.value = I.environment || "production";
        } catch {
        }
      } catch (I) {
        p.value = I instanceof Error ? I.message : "Failed to load environment logs";
      } finally {
        m.value = !1;
      }
    }
    async function f() {
      try {
        const I = await i();
        I.exists && (w.value = I.path);
      } catch {
      }
    }
    async function x() {
      if (w.value) {
        k.value = !0;
        try {
          await u(w.value);
        } catch (I) {
          console.error("Failed to open log file:", I);
        } finally {
          k.value = !1;
        }
      }
    }
    return Ne(() => {
      b(), f();
    }), (I, $) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: l(() => [
              _(J, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: !w.value || k.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(k.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              _(J, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: m.value
              }, {
                default: l(() => [
                  h(a(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          m.value ? (s(), R(zt, {
            key: 0,
            message: "Loading environment logs..."
          })) : p.value ? (s(), R(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length === 0 ? (s(), R(_t, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), R(mo, {
              key: 1,
              logs: g.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (P) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            $[3] || ($[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            $[4] || ($[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          ], -1))
        ]),
        actions: l(() => [
          _(J, {
            variant: "primary",
            onClick: $[1] || ($[1] = (P) => d.value = !1)
          }, {
            default: l(() => [...$[6] || ($[6] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), $h = { class: "env-title" }, Ch = {
  key: 0,
  class: "current-badge"
}, xh = {
  key: 0,
  class: "branch-info"
}, Sh = /* @__PURE__ */ se({
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
    return (c, n) => (s(), R(ot, {
      status: t.isCurrent ? "synced" : void 0
    }, Kt({
      icon: l(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", $h, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Ch, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", xh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Re(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          _(Ge, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          _(Ge, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          _(Ge, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), R(Ge, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ih = /* @__PURE__ */ ne(Sh, [["__scopeId", "data-v-9231917a"]]), Eh = { class: "env-details" }, Th = { class: "status-row" }, Rh = {
  key: 0,
  class: "detail-row"
}, Ph = { class: "value mono" }, Mh = {
  key: 1,
  class: "detail-row"
}, Dh = { class: "value mono small" }, Lh = { class: "detail-row" }, zh = { class: "value" }, Uh = { class: "detail-row" }, Nh = { class: "value" }, Oh = { class: "detail-row" }, Ah = { class: "value" }, Fh = {
  key: 2,
  class: "section-divider"
}, Bh = {
  key: 3,
  class: "detail-row"
}, Vh = { class: "value" }, Wh = {
  key: 4,
  class: "detail-row"
}, Gh = { class: "value" }, jh = { class: "footer-actions" }, Kh = /* @__PURE__ */ se({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(u) {
      if (!u) return "Unknown";
      try {
        const g = new Date(u), p = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), d = Math.floor(p / 6e4), v = Math.floor(p / 36e5), w = Math.floor(p / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return u;
      }
    }
    return (u, g) => (s(), R(He, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (m) => n("close"))
    }, {
      body: l(() => [
        e("div", Eh, [
          e("div", Th, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Rh, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Ph, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", Mh, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Dh, a(t.environment.path), 1)
          ])) : r("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Lh, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", zh, a(t.environment.workflow_count), 1)
          ]),
          e("div", Uh, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Nh, a(t.environment.node_count), 1)
          ]),
          e("div", Oh, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Ah, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Fh)) : r("", !0),
          t.environment.created_at ? (s(), o("div", Bh, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Vh, a(i(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", Wh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Gh, a(i(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", jh, [
          t.canDelete ? (s(), R(ye, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (m) => n("delete", t.environment.name))
          }, {
            default: l(() => [...g[12] || (g[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          _(ye, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (m) => n("close"))
          }, {
            default: l(() => [...g[13] || (g[13] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hh = /* @__PURE__ */ ne(Kh, [["__scopeId", "data-v-59855453"]]), vo = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], fo = "3.12", Gs = [
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
], po = "auto", qh = { class: "progress-bar" }, Yh = /* @__PURE__ */ se({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = z(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, u) => (s(), o("div", qh, [
      e("div", {
        class: fe(["progress-fill", t.variant]),
        style: Lt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ss = /* @__PURE__ */ ne(Yh, [["__scopeId", "data-v-1beb0512"]]), Jh = { class: "task-progress" }, Xh = { class: "progress-info" }, Qh = { class: "progress-percentage" }, Zh = { class: "progress-message" }, e1 = {
  key: 0,
  class: "progress-steps"
}, t1 = { class: "step-icon" }, s1 = { class: "step-label" }, o1 = /* @__PURE__ */ se({
  __name: "TaskProgressDisplay",
  props: {
    progress: {},
    message: {},
    currentPhase: {},
    variant: { default: "default" },
    showSteps: { type: Boolean, default: !1 },
    steps: { default: () => [] }
  },
  setup(t) {
    const c = t;
    function n(u) {
      const g = c.steps.find((m) => m.id === u);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === u ? "active" : "pending" : "pending";
    }
    function i(u) {
      const g = n(u);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (u, g) => (s(), o("div", Jh, [
      _(Ss, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Xh, [
        e("span", Qh, a(t.progress) + "%", 1),
        e("span", Zh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", e1, [
        (s(!0), o(V, null, ie(t.steps, (m) => (s(), o("div", {
          key: m.id,
          class: fe(["step", n(m.id)])
        }, [
          e("span", t1, a(i(m.id)), 1),
          e("span", s1, a(m.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), $s = /* @__PURE__ */ ne(o1, [["__scopeId", "data-v-9d1de66c"]]), n1 = {
  key: 0,
  class: "create-env-form"
}, a1 = { class: "form-field" }, l1 = { class: "form-field" }, i1 = ["value"], r1 = { class: "form-field" }, d1 = ["disabled"], c1 = ["value"], u1 = { class: "form-field" }, m1 = ["value"], v1 = { class: "form-field form-field--checkbox" }, f1 = { class: "form-checkbox" }, p1 = {
  key: 1,
  class: "create-env-progress"
}, g1 = { class: "creating-intro" }, h1 = {
  key: 0,
  class: "progress-warning"
}, y1 = {
  key: 1,
  class: "create-error"
}, w1 = { class: "error-message" }, k1 = {
  key: 1,
  class: "footer-status"
}, b1 = 10, _1 = /* @__PURE__ */ se({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: u, getCreateProgress: g } = Ae(), m = y(""), p = y(fo), d = y("latest"), v = y(po), w = y(!1), k = y([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = y(!1), f = y(!1), x = y({
      progress: 0,
      message: ""
    });
    let I = null, $ = 0;
    const P = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], O = y(null);
    function T() {
      f.value || n("close");
    }
    async function E() {
      const C = m.value.trim();
      if (C) {
        f.value = !0, x.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const M = {
            name: C,
            python_version: p.value,
            comfyui_version: d.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, X = await u(M);
          X.status === "started" ? q() : X.status === "error" && (x.value = {
            progress: 0,
            message: X.message || "Failed to start creation",
            error: X.message
          });
        } catch (M) {
          x.value = {
            progress: 0,
            message: M instanceof Error ? M.message : "Unknown error",
            error: M instanceof Error ? M.message : "Unknown error"
          };
        }
      }
    }
    function q() {
      I || ($ = 0, I = window.setInterval(async () => {
        try {
          const C = await g();
          $ = 0, x.value = {
            progress: C.progress ?? 0,
            message: C.message,
            phase: C.phase,
            error: C.error
          }, C.state === "complete" ? (B(), n("created", C.environment_name || m.value.trim(), w.value)) : C.state === "error" ? (B(), x.value.error = C.error || C.message) : C.state === "idle" && f.value && (B(), x.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= b1 && (B(), x.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      I && (clearInterval(I), I = null);
    }
    function F() {
      f.value = !1, x.value = { progress: 0, message: "" }, n("close");
    }
    async function S() {
      b.value = !0;
      try {
        k.value = await i();
      } catch (C) {
        console.error("Failed to load ComfyUI releases:", C);
      } finally {
        b.value = !1;
      }
    }
    return Ne(async () => {
      var C;
      await As(), (C = O.value) == null || C.focus(), S();
    }), Cs(() => {
      B();
    }), (C, M) => (s(), R(He, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !f.value,
      onClose: T
    }, {
      body: l(() => [
        f.value ? (s(), o("div", p1, [
          e("p", g1, [
            M[11] || (M[11] = h(" Creating environment ", -1)),
            e("strong", null, a(m.value), 1),
            M[12] || (M[12] = h("... ", -1))
          ]),
          _($s, {
            progress: x.value.progress,
            message: x.value.message,
            "current-phase": x.value.phase,
            variant: x.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          x.value.error ? r("", !0) : (s(), o("p", h1, " This may take several minutes. Please wait... ")),
          x.value.error ? (s(), o("div", y1, [
            e("p", w1, a(x.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", n1, [
          e("div", a1, [
            M[6] || (M[6] = e("label", { class: "form-label" }, "Name", -1)),
            Pe(e("input", {
              ref_key: "nameInput",
              ref: O,
              "onUpdate:modelValue": M[0] || (M[0] = (X) => m.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: wt(E, ["enter"])
            }, null, 544), [
              [kt, m.value]
            ])
          ]),
          e("div", l1, [
            M[7] || (M[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Pe(e("select", {
              "onUpdate:modelValue": M[1] || (M[1] = (X) => p.value = X),
              class: "form-select"
            }, [
              (s(!0), o(V, null, ie(Se(vo), (X) => (s(), o("option", {
                key: X,
                value: X
              }, a(X), 9, i1))), 128))
            ], 512), [
              [Dt, p.value]
            ])
          ]),
          e("div", r1, [
            M[8] || (M[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Pe(e("select", {
              "onUpdate:modelValue": M[2] || (M[2] = (X) => d.value = X),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(V, null, ie(k.value, (X) => (s(), o("option", {
                key: X.tag_name,
                value: X.tag_name
              }, a(X.name), 9, c1))), 128))
            ], 8, d1), [
              [Dt, d.value]
            ])
          ]),
          e("div", u1, [
            M[9] || (M[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Pe(e("select", {
              "onUpdate:modelValue": M[3] || (M[3] = (X) => v.value = X),
              class: "form-select"
            }, [
              (s(!0), o(V, null, ie(Se(Gs), (X) => (s(), o("option", {
                key: X,
                value: X
              }, a(X) + a(X === "auto" ? " (detect GPU)" : ""), 9, m1))), 128))
            ], 512), [
              [Dt, v.value]
            ])
          ]),
          e("div", v1, [
            e("label", f1, [
              Pe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": M[4] || (M[4] = (X) => w.value = X)
              }, null, 512), [
                [ks, w.value]
              ]),
              M[10] || (M[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        f.value ? (s(), o(V, { key: 1 }, [
          x.value.error ? (s(), R(ye, {
            key: 0,
            variant: "secondary",
            onClick: F
          }, {
            default: l(() => [...M[15] || (M[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", k1, " Creating environment... "))
        ], 64)) : (s(), o(V, { key: 0 }, [
          _(ye, {
            variant: "primary",
            disabled: !m.value.trim(),
            onClick: E
          }, {
            default: l(() => [...M[13] || (M[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          _(ye, {
            variant: "secondary",
            onClick: M[5] || (M[5] = (X) => n("close"))
          }, {
            default: l(() => [...M[14] || (M[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), $1 = /* @__PURE__ */ ne(_1, [["__scopeId", "data-v-f37eaa42"]]), C1 = /* @__PURE__ */ se({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: u } = Ae(), g = y([]), m = y(!1), p = y(null), d = y(""), v = y(!1), w = y(!1), k = y(null), b = z(() => {
      if (!d.value.trim()) return g.value;
      const O = d.value.toLowerCase();
      return g.value.filter(
        (T) => {
          var E;
          return T.name.toLowerCase().includes(O) || ((E = T.current_branch) == null ? void 0 : E.toLowerCase().includes(O));
        }
      );
    });
    function f(O, T) {
      w.value = !1, i("created", O, T);
    }
    function x() {
      w.value = !0;
    }
    function I(O) {
      k.value = O;
    }
    function $(O) {
      k.value = null, i("delete", O);
    }
    async function P() {
      m.value = !0, p.value = null;
      try {
        g.value = await u();
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to load environments";
      } finally {
        m.value = !1;
      }
    }
    return Ne(P), c({
      loadEnvironments: P,
      openCreateModal: x
    }), (O, T) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (E) => v.value = !0)
          }, {
            actions: l(() => [
              _(J, {
                variant: "primary",
                size: "sm",
                onClick: x
              }, {
                default: l(() => [...T[6] || (T[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              _(J, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: l(() => [...T[7] || (T[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          _(es, {
            modelValue: d.value,
            "onUpdate:modelValue": T[1] || (T[1] = (E) => d.value = E),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value ? (s(), R(zt, {
            key: 0,
            message: "Loading environments..."
          })) : p.value ? (s(), R(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            b.value.length ? (s(), R(Fe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ie(b.value, (E) => (s(), R(Ih, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    E.is_current ? r("", !0) : (s(), R(J, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => O.$emit("switch", E.name)
                    }, {
                      default: l(() => [...T[8] || (T[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    _(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => I(E)
                    }, {
                      default: l(() => [...T[9] || (T[9] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            b.value.length ? r("", !0) : (s(), R(_t, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Kt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  _(J, {
                    variant: "primary",
                    onClick: x
                  }, {
                    default: l(() => [...T[10] || (T[10] = [
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
      _($t, {
        show: v.value,
        title: "About Environments",
        onClose: T[3] || (T[3] = (E) => v.value = !1)
      }, {
        content: l(() => [...T[11] || (T[11] = [
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
        actions: l(() => [
          _(J, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (E) => v.value = !1)
          }, {
            default: l(() => [...T[12] || (T[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), R(Hh, {
        key: 0,
        environment: k.value,
        "can-delete": g.value.length > 1,
        onClose: T[4] || (T[4] = (E) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      w.value ? (s(), R($1, {
        key: 1,
        onClose: T[5] || (T[5] = (E) => w.value = !1),
        onCreated: f
      })) : r("", !0)
    ], 64));
  }
}), x1 = /* @__PURE__ */ ne(C1, [["__scopeId", "data-v-f95999f4"]]), S1 = { class: "file-path" }, I1 = { class: "file-path-text" }, E1 = ["title"], T1 = /* @__PURE__ */ se({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = y(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (u) {
        console.error("Failed to copy:", u);
      }
    }
    return (u, g) => (s(), o("div", S1, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", I1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, E1)) : r("", !0)
    ]));
  }
}), R1 = /* @__PURE__ */ ne(T1, [["__scopeId", "data-v-f0982173"]]), P1 = { class: "export-blocked" }, M1 = { class: "issues-list" }, D1 = { class: "issue-message" }, L1 = {
  key: 0,
  class: "issue-details"
}, z1 = ["onClick"], U1 = { class: "issue-fix" }, N1 = /* @__PURE__ */ se({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = vs({});
    function i(u) {
      const g = c.issues[u];
      return n[u] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (u, g) => (s(), R(He, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (m) => u.$emit("close"))
    }, {
      body: l(() => [
        e("div", P1, [
          g[2] || (g[2] = e("div", { class: "error-header" }, [
            e("span", { class: "error-icon" }, [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ]),
            e("div", { class: "error-summary" }, [
              e("h3", { class: "error-title" }, "Export blocked"),
              e("p", { class: "error-description" }, " The following issues must be resolved before exporting. ")
            ])
          ], -1)),
          e("div", M1, [
            (s(!0), o(V, null, ie(t.issues, (m, p) => (s(), o("div", {
              key: p,
              class: "issue-item"
            }, [
              e("div", D1, a(m.message), 1),
              m.details.length ? (s(), o("div", L1, [
                (s(!0), o(V, null, ie(i(p), (d, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                m.details.length > 3 && !n[p] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[p] = !0
                }, " +" + a(m.details.length - 3) + " more ", 9, z1)) : r("", !0)
              ])) : r("", !0),
              e("div", U1, [
                m.type === "uncommitted_workflows" ? (s(), o(V, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : m.type === "uncommitted_git_changes" ? (s(), o(V, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : m.type === "unresolved_issues" ? (s(), o(V, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : r("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        _(ye, {
          variant: "primary",
          onClick: g[0] || (g[0] = (m) => u.$emit("close"))
        }, {
          default: l(() => [...g[3] || (g[3] = [
            h(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), go = /* @__PURE__ */ ne(N1, [["__scopeId", "data-v-b52f5e32"]]), O1 = { class: "export-warnings" }, A1 = {
  key: 0,
  class: "success-header"
}, F1 = { class: "warning-header" }, B1 = { class: "warning-summary" }, V1 = { class: "warning-title" }, W1 = { class: "models-section" }, G1 = { class: "models-list" }, j1 = { class: "model-info" }, K1 = { class: "model-filename" }, H1 = { class: "model-workflows" }, q1 = ["onClick"], Y1 = /* @__PURE__ */ se({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(!1), g = y(null), m = z(() => u.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function p() {
      g.value = null, i("revalidate");
    }
    return (d, v) => (s(), o(V, null, [
      _(He, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (w) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", O1, [
            t.models.length === 0 ? (s(), o("div", A1, [...v[4] || (v[4] = [
              e("span", { class: "success-icon" }, [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1),
              e("div", { class: "success-summary" }, [
                e("h3", { class: "success-title" }, "All models have source URLs"),
                e("p", { class: "success-description" }, " Your environment is ready to export. Recipients will be able to download all models automatically. ")
              ], -1)
            ])])) : (s(), o(V, { key: 1 }, [
              e("div", F1, [
                v[6] || (v[6] = e("span", { class: "warning-icon" }, [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                    e("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
                  ])
                ], -1)),
                e("div", B1, [
                  e("h3", V1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", W1, [
                e("div", G1, [
                  (s(!0), o(V, null, ie(m.value, (w) => (s(), o("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    e("div", j1, [
                      e("div", K1, a(w.filename), 1),
                      e("div", H1, " Used by: " + a(w.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => g.value = w.hash
                    }, " Add Source ", 8, q1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !u.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (w) => u.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          _(ye, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (w) => d.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          _(ye, {
            variant: "primary",
            onClick: v[2] || (v[2] = (w) => d.$emit("confirm"))
          }, {
            default: l(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), R(Vs, {
        key: 0,
        identifier: g.value,
        onClose: p
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), ho = /* @__PURE__ */ ne(Y1, [["__scopeId", "data-v-b698d882"]]), J1 = { class: "export-card" }, X1 = { class: "export-path-row" }, Q1 = { class: "export-actions" }, Z1 = {
  key: 1,
  class: "export-warning"
}, ey = /* @__PURE__ */ se({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Ae(), i = y(""), u = y(!1), g = y(!1), m = y(!1), p = y(null), d = y(!1), v = y(null), w = y(!1), k = y(!1), b = z(() => u.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function f() {
      u.value = !0, p.value = null;
      try {
        const T = await c();
        v.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : w.value = !0;
      } catch (T) {
        p.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function x() {
      k.value = !1, await $();
    }
    async function I() {
      try {
        const T = await c();
        v.value = T;
      } catch (T) {
        console.error("Re-validation failed:", T);
      }
    }
    async function $() {
      g.value = !0;
      try {
        const T = await n(i.value || void 0);
        p.value = T;
      } catch (T) {
        p.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function P() {
      var T;
      if ((T = p.value) != null && T.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (E) {
          console.error("Failed to copy path:", E);
        }
    }
    async function O() {
      var T;
      if ((T = p.value) != null && T.path) {
        m.value = !0;
        try {
          const E = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(p.value.path)}`);
          if (!E.ok)
            throw new Error(`Download failed: ${E.statusText}`);
          const q = await E.blob(), B = URL.createObjectURL(q), F = p.value.path.split("/").pop() || "environment-export.tar.gz", S = document.createElement("a");
          S.href = B, S.download = F, document.body.appendChild(S), S.click(), document.body.removeChild(S), URL.revokeObjectURL(B);
        } catch (E) {
          console.error("Failed to download:", E), alert(`Download failed: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
      }
    }
    return (T, E) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (q) => d.value = !0)
          })
        ]),
        content: l(() => [
          _(Fe, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", J1, [
                E[7] || (E[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", X1, [
                  _(bs, {
                    modelValue: i.value,
                    "onUpdate:modelValue": E[1] || (E[1] = (q) => i.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Q1, [
                  _(J, {
                    variant: "primary",
                    size: "md",
                    loading: u.value || g.value,
                    disabled: u.value || g.value,
                    onClick: f
                  }, {
                    default: l(() => [
                      E[6] || (E[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      h(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          p.value ? (s(), R(Fe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              _(ot, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Kt({
                icon: l(() => [
                  h(a(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  h(a(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  h(a(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    _(Ge, { label: "Saved to:" }, {
                      default: l(() => [
                        _(R1, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (s(), R(Ge, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (s(), o("div", Z1, [...E[8] || (E[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    _(J, {
                      variant: "primary",
                      size: "sm",
                      loading: m.value,
                      onClick: O
                    }, {
                      default: l(() => [...E[9] || (E[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    _(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: l(() => [...E[10] || (E[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    _(J, {
                      variant: "ghost",
                      size: "sm",
                      onClick: E[2] || (E[2] = (q) => p.value = null)
                    }, {
                      default: l(() => [...E[11] || (E[11] = [
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
          })) : r("", !0)
        ]),
        _: 1
      }),
      _($t, {
        show: d.value,
        title: "What Gets Exported",
        onClose: E[3] || (E[3] = (q) => d.value = !1)
      }, {
        content: l(() => [...E[12] || (E[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  h(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  h(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  h(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  h(" — Environment settings and metadata")
                ])
              ])
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "Use Cases:"),
              e("ul", null, [
                e("li", null, "Share environments with collaborators"),
                e("li", null, "Back up your setup for safekeeping"),
                e("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            e("p", { class: "info-note" }, [
              e("strong", null, "Note:"),
              h(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      w.value && v.value ? (s(), R(go, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: E[4] || (E[4] = (q) => w.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && v.value ? (s(), R(ho, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: x,
        onCancel: E[5] || (E[5] = (q) => k.value = !1),
        onRevalidate: I
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), ty = /* @__PURE__ */ ne(ey, [["__scopeId", "data-v-f4d120f2"]]), sy = { class: "file-input-wrapper" }, oy = ["accept", "multiple", "disabled"], ny = /* @__PURE__ */ se({
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
  setup(t, { expose: c, emit: n }) {
    const i = n, u = y(null);
    function g() {
      var p;
      (p = u.value) == null || p.click();
    }
    function m(p) {
      const d = p.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return c({
      triggerInput: g
    }), (p, d) => (s(), o("div", sy, [
      e("input", {
        ref_key: "fileInputRef",
        ref: u,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, oy),
      _(J, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          Re(p.$slots, "default", {}, () => [
            d[0] || (d[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            h(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), ay = /* @__PURE__ */ ne(ny, [["__scopeId", "data-v-cd192091"]]), ly = {
  key: 0,
  class: "drop-zone-empty"
}, iy = { class: "drop-zone-text" }, ry = { class: "drop-zone-primary" }, dy = { class: "drop-zone-secondary" }, cy = { class: "drop-zone-actions" }, uy = {
  key: 1,
  class: "drop-zone-file"
}, my = { class: "file-info" }, vy = { class: "file-details" }, fy = { class: "file-name" }, py = { class: "file-size" }, gy = /* @__PURE__ */ se({
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
    const n = c, i = y(!1), u = y(null), g = y(0), m = z(() => u.value !== null), p = z(() => {
      var $;
      return (($ = u.value) == null ? void 0 : $.name) || "";
    }), d = z(() => {
      if (!u.value) return "";
      const $ = u.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var P;
      $.stopPropagation(), g.value++, (P = $.dataTransfer) != null && P.types.includes("Files") && (i.value = !0);
    }
    function w($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function k($) {
      $.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function b($) {
      var O;
      $.stopPropagation(), g.value = 0, i.value = !1;
      const P = (O = $.dataTransfer) == null ? void 0 : O.files;
      P && P.length > 0 && x(P[0]);
    }
    function f($) {
      $.length > 0 && x($[0]);
    }
    function x($) {
      u.value = $, n("fileSelected", $);
    }
    function I() {
      u.value = null, n("clear");
    }
    return ($, P) => (s(), o("div", {
      class: fe(["file-drop-zone", { "drop-active": i.value, "has-file": m.value }]),
      onDragenter: Be(v, ["prevent"]),
      onDragover: Be(w, ["prevent"]),
      onDragleave: Be(k, ["prevent"]),
      onDrop: Be(b, ["prevent"])
    }, [
      m.value ? (s(), o("div", uy, [
        e("div", my, [
          P[1] || (P[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", vy, [
            e("div", fy, a(p.value), 1),
            e("div", py, a(d.value), 1)
          ])
        ]),
        _(J, {
          variant: "ghost",
          size: "xs",
          onClick: I,
          title: "Remove file"
        }, {
          default: l(() => [...P[2] || (P[2] = [
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
      ])) : (s(), o("div", ly, [
        P[0] || (P[0] = e("div", { class: "drop-zone-icon" }, [
          e("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            e("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        e("div", iy, [
          e("p", ry, a(t.primaryText), 1),
          e("p", dy, a(t.secondaryText), 1)
        ]),
        e("div", cy, [
          _(ay, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: f
          }, {
            default: l(() => [
              h(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), hy = /* @__PURE__ */ ne(gy, [["__scopeId", "data-v-0f79cb86"]]), yy = { class: "import-preview" }, wy = { class: "preview-header" }, ky = {
  key: 0,
  class: "source-env"
}, by = { class: "preview-content" }, _y = { class: "preview-section" }, $y = { class: "section-header" }, Cy = { class: "section-info" }, xy = { class: "section-count" }, Sy = {
  key: 0,
  class: "item-list"
}, Iy = { class: "item-name" }, Ey = {
  key: 0,
  class: "item-more"
}, Ty = { class: "preview-section" }, Ry = { class: "section-header" }, Py = { class: "section-info" }, My = { class: "section-count" }, Dy = {
  key: 0,
  class: "item-list"
}, Ly = { class: "item-details" }, zy = { class: "item-name" }, Uy = { class: "item-meta" }, Ny = {
  key: 0,
  class: "item-more"
}, Oy = { class: "preview-section" }, Ay = { class: "section-header" }, Fy = { class: "section-info" }, By = { class: "section-count" }, Vy = {
  key: 0,
  class: "item-list"
}, Wy = { class: "item-name" }, Gy = {
  key: 0,
  class: "item-more"
}, jy = {
  key: 0,
  class: "preview-section"
}, Ky = { class: "git-info" }, Hy = /* @__PURE__ */ se({
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
    const c = t, n = z(() => c.workflows.length), i = z(() => c.models.length), u = z(() => c.nodes.length);
    function g(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, p) => (s(), o("div", yy, [
      e("div", wy, [
        _(ct, null, {
          default: l(() => [...p[0] || (p[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", ky, [
          p[1] || (p[1] = h(" From: ", -1)),
          _(Ls, null, {
            default: l(() => [
              h(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", by, [
        e("div", _y, [
          e("div", $y, [
            p[3] || (p[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Cy, [
              p[2] || (p[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", xy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Sy, [
            (s(!0), o(V, null, ie(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              p[4] || (p[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Iy, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Ey, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Ty, [
          e("div", Ry, [
            p[6] || (p[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Py, [
              p[5] || (p[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", My, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Dy, [
            (s(!0), o(V, null, ie(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              p[7] || (p[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Ly, [
                e("span", zy, a(d.filename), 1),
                e("span", Uy, a(g(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Ny, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Oy, [
          e("div", Ay, [
            p[9] || (p[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Fy, [
              p[8] || (p[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", By, a(u.value) + " node" + a(u.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Vy, [
            (s(!0), o(V, null, ie(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              p[10] || (p[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Wy, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Gy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", jy, [
          p[11] || (p[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Ky, [
            t.gitBranch ? (s(), R(Ge, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                _(Ls, null, {
                  default: l(() => [
                    h(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), R(Ge, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                _(oo, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), qy = /* @__PURE__ */ ne(Hy, [["__scopeId", "data-v-182fe113"]]), Yy = { class: "import-config" }, Jy = { class: "config-container" }, Xy = { class: "config-field" }, Qy = { class: "input-wrapper" }, Zy = ["value"], e0 = {
  key: 0,
  class: "validating-indicator"
}, t0 = {
  key: 1,
  class: "valid-indicator"
}, s0 = {
  key: 0,
  class: "field-error"
}, o0 = { class: "config-field" }, n0 = { class: "strategy-options" }, a0 = ["value", "checked", "onChange"], l0 = { class: "strategy-content" }, i0 = { class: "strategy-label" }, r0 = { class: "strategy-description" }, d0 = { class: "config-field switch-field" }, c0 = { class: "switch-label" }, u0 = ["checked"], m0 = { class: "advanced-section" }, v0 = { class: "advanced-content" }, f0 = { class: "config-field" }, p0 = ["value"], g0 = ["value"], h0 = /* @__PURE__ */ se({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(!1), g = y(!1);
    ut(() => n.nameError, (w) => {
      u.value = !1, g.value = !w && n.name.length > 0;
    });
    const m = [
      {
        value: "all",
        label: "Download All",
        description: "Download all models with available sources"
      },
      {
        value: "required",
        label: "Required Only",
        description: "Only download models marked as required in workflows"
      },
      {
        value: "skip",
        label: "Skip Downloads",
        description: "Don't download any models now (resolve later)"
      }
    ];
    let p = null;
    function d(w) {
      const k = w.target.value;
      i("update:name", k), g.value = !1, p && clearTimeout(p), k.length > 0 ? (u.value = !0, p = setTimeout(() => {
        i("validate-name", k);
      }, 400)) : u.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (w, k) => (s(), o("div", Yy, [
      _(ct, null, {
        default: l(() => [...k[2] || (k[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Jy, [
        e("div", Xy, [
          _(ys, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              h("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Qy, [
            e("input", {
              type: "text",
              class: fe(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Zy),
            u.value ? (s(), o("span", e0, "...")) : g.value ? (s(), o("span", t0, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", s0, a(t.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", o0, [
          _(ys, null, {
            default: l(() => [...k[5] || (k[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", n0, [
            (s(), o(V, null, ie(m, (b) => e("label", {
              key: b.value,
              class: fe(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: (f) => i("update:modelStrategy", b.value)
              }, null, 40, a0),
              e("div", l0, [
                e("span", i0, a(b.label), 1),
                e("span", r0, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", d0, [
          e("label", c0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: k[0] || (k[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, u0),
            k[6] || (k[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", m0, [
          k[8] || (k[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", v0, [
            e("div", f0, [
              _(ys, null, {
                default: l(() => [...k[7] || (k[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: k[1] || (k[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(V, null, ie(Se(Gs), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, g0))), 128))
              ], 40, p0)
            ])
          ])
        ])
      ])
    ]));
  }
}), y0 = /* @__PURE__ */ ne(h0, [["__scopeId", "data-v-89ea06a1"]]), w0 = { class: "import-flow" }, k0 = {
  key: 0,
  class: "import-empty"
}, b0 = { class: "git-import-section" }, _0 = { class: "git-url-input-row" }, $0 = ["disabled"], C0 = {
  key: 0,
  class: "git-error"
}, x0 = {
  key: 1,
  class: "import-configure"
}, S0 = { class: "selected-file-bar" }, I0 = {
  key: 0,
  class: "file-bar-content"
}, E0 = { class: "file-bar-info" }, T0 = { class: "file-bar-name" }, R0 = { class: "file-bar-size" }, P0 = {
  key: 1,
  class: "file-bar-content"
}, M0 = { class: "file-bar-info" }, D0 = { class: "file-bar-name" }, L0 = {
  key: 0,
  class: "preview-loading"
}, z0 = { class: "import-actions" }, U0 = {
  key: 2,
  class: "import-progress"
}, N0 = { class: "creating-intro" }, O0 = {
  key: 0,
  class: "progress-warning"
}, A0 = {
  key: 1,
  class: "import-error"
}, F0 = { class: "error-message" }, B0 = {
  key: 3,
  class: "import-complete"
}, V0 = { class: "complete-message" }, W0 = { class: "complete-title" }, G0 = { class: "complete-details" }, j0 = { class: "complete-actions" }, K0 = /* @__PURE__ */ se({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Ue, me, ge, Me;
    const i = t, u = n, { previewTarballImport: g, previewGitImport: m, validateEnvironmentName: p, executeImport: d, executeGitImport: v, getImportProgress: w } = Ae();
    let k = null;
    const b = y(null), f = y(i.resumeImport ?? !1), x = y(!1), I = y(!1), $ = y(""), P = y(!1), O = y(null), T = y(""), E = y(null), q = y(!1), B = y(null), F = y(null), S = y({
      name: ((Ue = i.initialProgress) == null ? void 0 : Ue.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), C = y(null), M = y({
      message: ((me = i.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((ge = i.initialProgress) == null ? void 0 : ge.phase) ?? "",
      progress: ((Me = i.initialProgress) == null ? void 0 : Me.progress) ?? 0,
      error: null
    }), X = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], oe = z(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ce = F.value;
      return {
        sourceEnvironment: ce.comfyui_version ? `ComfyUI ${ce.comfyui_version}` : "Unknown",
        workflows: ce.workflows.map((Z) => Z.name),
        models: ce.models.map((Z) => ({
          filename: Z.filename,
          size: 0,
          type: Z.relative_path.split("/")[0] || "model"
        })),
        nodes: ce.nodes.map((Z) => Z.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), K = z(() => !P.value && !O.value && F.value && S.value.name.length > 0 && !C.value && (b.value || E.value));
    async function te(ce) {
      b.value = ce, P.value = !0, O.value = null, F.value = null;
      try {
        const Z = await g(ce);
        F.value = Z;
      } catch (Z) {
        O.value = Z instanceof Error ? Z.message : "Failed to analyze file", console.error("Preview error:", Z);
      } finally {
        P.value = !1;
      }
    }
    function Y() {
      b.value = null, E.value = null, T.value = "", B.value = null, x.value = !1, I.value = !1, $.value = "", F.value = null, O.value = null, S.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, C.value = null, u("source-cleared");
    }
    function U() {
      Ce(), Y(), f.value = !1, P.value = !1, q.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (T.value.trim()) {
        q.value = !0, B.value = null;
        try {
          const ce = await m(T.value.trim());
          E.value = T.value.trim(), F.value = ce;
        } catch (ce) {
          B.value = ce instanceof Error ? ce.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function D(ce) {
      try {
        const Z = new URL(ce);
        return Z.host + Z.pathname.replace(/\.git$/, "");
      } catch {
        return ce;
      }
    }
    async function ve(ce) {
      if (!ce) {
        C.value = "Environment name is required";
        return;
      }
      try {
        const Z = await p(ce);
        C.value = Z.valid ? null : Z.error || "Invalid name";
      } catch {
        C.value = "Failed to validate name";
      }
    }
    async function ae() {
      if (S.value.name && !(!b.value && !E.value)) {
        f.value = !0, x.value = !1, M.value = { message: `Creating environment '${S.value.name}'...`, phase: "", progress: 0, error: null }, u("import-started");
        try {
          let ce;
          if (b.value)
            ce = await d(
              b.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else if (E.value)
            ce = await v(
              E.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ce.status === "started" ? be() : (I.value = !1, $.value = ce.message, f.value = !1, x.value = !0);
        } catch (ce) {
          I.value = !1, $.value = ce instanceof Error ? ce.message : "Unknown error occurred during import", f.value = !1, x.value = !0;
        }
      }
    }
    async function be() {
      if (k) return;
      const ce = async () => {
        try {
          const De = await w();
          return M.value = {
            message: De.message,
            phase: De.phase || "",
            progress: De.progress ?? (De.state === "importing" ? 50 : 0),
            error: De.error || null
          }, De.state === "complete" ? (Ce(), I.value = !0, $.value = `Environment '${De.environment_name}' created successfully`, f.value = !1, x.value = !0, De.environment_name && u("import-complete", De.environment_name, S.value.switchAfterImport), !1) : De.state === "error" ? (Ce(), I.value = !1, $.value = De.error || De.message, f.value = !1, x.value = !0, !1) : !0;
        } catch (De) {
          return console.error("Failed to poll import progress:", De), !0;
        }
      };
      await ce() && (k = setInterval(async () => {
        await ce() || Ce();
      }, 2e3));
    }
    function Ce() {
      k && (clearInterval(k), k = null);
    }
    function Le(ce) {
      return ce < 1024 ? `${ce} B` : ce < 1024 * 1024 ? `${(ce / 1024).toFixed(1)} KB` : ce < 1024 * 1024 * 1024 ? `${(ce / (1024 * 1024)).toFixed(1)} MB` : `${(ce / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ne(async () => {
      try {
        const ce = await w();
        console.log("[ComfyGit ImportFlow] Import progress check:", ce.state, ce), ce.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ce.environment_name), f.value = !0, S.value.name = ce.environment_name || S.value.name || "", M.value = {
          progress: ce.progress ?? 0,
          message: ce.message || "Importing...",
          phase: ce.phase || "",
          error: null
        }, be());
      } catch (ce) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ce);
      }
    }), c({
      handleReset: U,
      isImporting: f,
      canImport: K
    }), (ce, Z) => {
      var De;
      return s(), o("div", w0, [
        !b.value && !E.value && !f.value ? (s(), o("div", k0, [
          _(hy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: te
          }),
          Z[7] || (Z[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", b0, [
            Z[5] || (Z[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", _0, [
              Pe(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Z[0] || (Z[0] = (pe) => T.value = pe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: wt(N, ["enter"]),
                disabled: q.value
              }, null, 40, $0), [
                [kt, T.value]
              ]),
              _(J, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || q.value,
                onClick: N
              }, {
                default: l(() => [
                  h(a(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (s(), o("div", C0, a(B.value), 1)) : r("", !0),
            Z[6] || (Z[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (b.value || E.value) && !f.value && !x.value ? (s(), o("div", x0, [
          e("div", S0, [
            b.value ? (s(), o("div", I0, [
              Z[8] || (Z[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", E0, [
                e("div", T0, a(b.value.name), 1),
                e("div", R0, a(Le(b.value.size)), 1)
              ])
            ])) : E.value ? (s(), o("div", P0, [
              Z[10] || (Z[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", M0, [
                e("div", D0, a(D(E.value)), 1),
                Z[9] || (Z[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            _(J, {
              variant: "ghost",
              size: "sm",
              onClick: Y
            }, {
              default: l(() => [...Z[11] || (Z[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (s(), o("div", L0, [...Z[12] || (Z[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : O.value ? (s(), R(ht, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [O.value]
          }, null, 8, ["details"])) : F.value ? (s(), R(qy, {
            key: 2,
            "source-environment": oe.value.sourceEnvironment,
            workflows: oe.value.workflows,
            models: oe.value.models,
            nodes: oe.value.nodes,
            "git-branch": oe.value.gitBranch,
            "git-commit": oe.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          F.value ? (s(), R(y0, {
            key: 3,
            name: S.value.name,
            "onUpdate:name": Z[1] || (Z[1] = (pe) => S.value.name = pe),
            "model-strategy": S.value.modelStrategy,
            "onUpdate:modelStrategy": Z[2] || (Z[2] = (pe) => S.value.modelStrategy = pe),
            "torch-backend": S.value.torchBackend,
            "onUpdate:torchBackend": Z[3] || (Z[3] = (pe) => S.value.torchBackend = pe),
            "switch-after-import": S.value.switchAfterImport,
            "onUpdate:switchAfterImport": Z[4] || (Z[4] = (pe) => S.value.switchAfterImport = pe),
            "name-error": C.value,
            onValidateName: ve
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          S.value.modelStrategy === "skip" && ((De = F.value) != null && De.models_needing_download) ? (s(), R(ht, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", z0, [
            _(J, {
              variant: "secondary",
              size: "md",
              onClick: Y
            }, {
              default: l(() => [...Z[13] || (Z[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(J, {
              variant: "primary",
              size: "md",
              disabled: !K.value,
              onClick: ae
            }, {
              default: l(() => [...Z[14] || (Z[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : f.value ? (s(), o("div", U0, [
          e("p", N0, [
            Z[15] || (Z[15] = h(" Importing environment ", -1)),
            e("strong", null, a(S.value.name), 1),
            Z[16] || (Z[16] = h("... ", -1))
          ]),
          _($s, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: X
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? r("", !0) : (s(), o("p", O0, " This may take several minutes. Please wait... ")),
          M.value.error ? (s(), o("div", A0, [
            e("p", F0, a(M.value.error), 1)
          ])) : r("", !0)
        ])) : x.value ? (s(), o("div", B0, [
          e("div", {
            class: fe(["complete-icon", I.value ? "success" : "error"])
          }, a(I.value ? "✓" : "✕"), 3),
          e("div", V0, [
            e("div", W0, a(I.value ? "Import Successful" : "Import Failed"), 1),
            e("div", G0, a($.value), 1)
          ]),
          e("div", j0, [
            _(J, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: l(() => [...Z[17] || (Z[17] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), yo = /* @__PURE__ */ ne(K0, [["__scopeId", "data-v-72cbc04e"]]), H0 = /* @__PURE__ */ se({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = y(!1);
    function u(g, m) {
      m && n("import-complete-switch", g);
    }
    return (g, m) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (p) => i.value = !0)
          })
        ]),
        content: l(() => [
          _(yo, { onImportComplete: u })
        ]),
        _: 1
      }),
      _($t, {
        show: i.value,
        title: "How Import Works",
        onClose: m[1] || (m[1] = (p) => i.value = !1)
      }, {
        content: l(() => [...m[2] || (m[2] = [
          e("div", { class: "help-steps" }, [
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "1"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Creates a New Environment"),
                e("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "2"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Preview Before Import"),
                e("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "3"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Choose Model Strategy"),
                e("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "4"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Switch When Ready"),
                e("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), q0 = /* @__PURE__ */ ne(H0, [["__scopeId", "data-v-e13bfe76"]]), gs = Xt(), Y0 = 5e3, Yt = y([]), Rs = y(!1), Ps = y(null);
let ls = null;
async function hs(t, c) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(t, c);
}
function wo(t) {
  const c = z(
    () => Yt.value.filter((f) => f.status === "running")
  ), n = z(
    () => Yt.value.filter((f) => f.status === "deploying")
  ), i = z(
    () => Yt.value.filter((f) => f.status === "stopped")
  ), u = z(
    () => c.value.length + n.value.length
  ), g = z(() => {
    const f = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...Yt.value].sort(
      (x, I) => (f[x.status] ?? 5) - (f[I.status] ?? 5)
    );
  });
  async function m() {
    Rs.value = !0, Ps.value = null;
    try {
      let f;
      if (!gs) {
        const x = await hs("/v2/comfygit/deploy/instances");
        if (!x.ok)
          throw new Error(`Failed to fetch instances: ${x.status}`);
        f = await x.json();
      }
      Yt.value = f.instances;
    } catch (f) {
      Ps.value = f instanceof Error ? f.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", f);
    } finally {
      Rs.value = !1;
    }
  }
  function p(f, x) {
    if (f.provider === "custom" && f.worker_name) {
      const I = f.id.includes(":") ? f.id.split(":").slice(1).join(":") : f.id;
      return x === "terminate" ? `/v2/comfygit/deploy/custom/${f.worker_name}/instances/${I}` : `/v2/comfygit/deploy/custom/${f.worker_name}/instances/${I}/${x}`;
    }
    return x === "terminate" ? `/v2/comfygit/deploy/${f.provider}/${f.id}` : `/v2/comfygit/deploy/${f.provider}/${f.id}/${x}`;
  }
  async function d(f) {
    try {
      if (!gs) {
        const x = p(f, "stop"), I = await hs(x, { method: "POST" });
        if (!I.ok) {
          const $ = await I.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await m();
    } catch (x) {
      throw console.error("[useDeployInstances] stopInstance error:", x), x;
    }
  }
  async function v(f) {
    try {
      if (!gs) {
        const x = p(f, "start"), I = await hs(x, { method: "POST" });
        if (!I.ok) {
          const $ = await I.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await m();
    } catch (x) {
      throw console.error("[useDeployInstances] startInstance error:", x), x;
    }
  }
  async function w(f) {
    try {
      if (!gs) {
        const x = p(f, "terminate"), I = await hs(x, { method: "DELETE" });
        if (!I.ok) {
          const $ = await I.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await m();
    } catch (x) {
      throw console.error("[useDeployInstances] terminateInstance error:", x), x;
    }
  }
  function k() {
    ls || (ls = window.setInterval(m, Y0));
  }
  function b() {
    ls && (clearInterval(ls), ls = null);
  }
  return ut(n, (f) => {
    f.length > 0 && k();
  }, { immediate: !0 }), t != null && t.autoStart && (m(), k()), {
    // State
    instances: Yt,
    isLoading: Rs,
    error: Ps,
    // Computed
    runningInstances: c,
    deployingInstances: n,
    stoppedInstances: i,
    liveInstanceCount: u,
    sortedInstances: g,
    // Actions
    refreshInstances: m,
    stopInstance: d,
    startInstance: v,
    terminateInstance: w,
    // Polling
    startPolling: k,
    stopPolling: b
  };
}
const J0 = { class: "instance-header" }, X0 = { class: "provider-badge" }, Q0 = { class: "instance-name" }, Z0 = {
  key: 0,
  class: "spinner"
}, ew = { class: "instance-details" }, tw = {
  key: 0,
  class: "detail"
}, sw = {
  key: 1,
  class: "detail instance-url"
}, ow = {
  key: 2,
  class: "detail"
}, nw = {
  key: 3,
  class: "detail"
}, aw = {
  key: 4,
  class: "detail total-cost"
}, lw = {
  key: 0,
  class: "deployment-progress"
}, iw = { class: "progress-message" }, rw = { class: "instance-actions" }, dw = /* @__PURE__ */ se({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(t) {
    const c = t, n = z(() => c.instance.provider === "custom" && c.instance.worker_name ? c.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[c.instance.provider] || c.instance.provider), i = z(() => ({
      deploying: "Deploying",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[c.instance.status] || c.instance.status), u = z(() => `status-${c.instance.status}`);
    function g() {
      c.instance.comfyui_url && window.open(c.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function m() {
      c.instance.console_url && window.open(c.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function p(d) {
      const v = Math.floor(d / 3600), w = Math.floor(d % 3600 / 60);
      return v > 0 ? `${v}h ${w}m` : `${w}m`;
    }
    return (d, v) => (s(), o("div", {
      class: fe(["instance-card", u.value])
    }, [
      e("div", J0, [
        e("span", X0, a(n.value), 1),
        e("span", Q0, a(t.instance.name), 1),
        e("span", {
          class: fe(["status-indicator", t.instance.status])
        }, [
          t.instance.status === "deploying" ? (s(), o("span", Z0)) : r("", !0),
          h(" " + a(i.value), 1)
        ], 2)
      ]),
      e("div", ew, [
        t.instance.gpu_type ? (s(), o("span", tw, a(t.instance.gpu_type), 1)) : r("", !0),
        t.instance.comfyui_url ? (s(), o("span", sw, a(t.instance.comfyui_url), 1)) : r("", !0),
        t.instance.uptime_seconds ? (s(), o("span", ow, a(p(t.instance.uptime_seconds)), 1)) : r("", !0),
        t.instance.cost_per_hour ? (s(), o("span", nw, "$" + a(t.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : r("", !0),
        t.instance.total_cost ? (s(), o("span", aw, "$" + a(t.instance.total_cost.toFixed(2)) + " total", 1)) : r("", !0)
      ]),
      t.instance.status === "deploying" ? (s(), o("div", lw, [
        e("div", iw, a(t.instance.deployment_message || "Deploying..."), 1),
        t.instance.deployment_progress ? (s(), R(Ss, {
          key: 0,
          progress: t.instance.deployment_progress
        }, null, 8, ["progress"])) : r("", !0)
      ])) : r("", !0),
      e("div", rw, [
        t.instance.status === "running" && t.instance.comfyui_url ? (s(), R(J, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: g
        }, {
          default: l(() => [...v[3] || (v[3] = [
            h(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.console_url && t.instance.provider !== "custom" ? (s(), R(J, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: m
        }, {
          default: l(() => [...v[4] || (v[4] = [
            h(" Console ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.status === "running" ? (s(), R(J, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[0] || (v[0] = (w) => d.$emit("stop", t.instance))
        }, {
          default: l(() => [...v[5] || (v[5] = [
            h(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        t.instance.status === "stopped" ? (s(), R(J, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[1] || (v[1] = (w) => d.$emit("start", t.instance))
        }, {
          default: l(() => [...v[6] || (v[6] = [
            h(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        _(J, {
          variant: "destructive",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[2] || (v[2] = (w) => d.$emit("terminate", t.instance))
        }, {
          default: l(() => [...v[7] || (v[7] = [
            h(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), cw = /* @__PURE__ */ ne(dw, [["__scopeId", "data-v-73e9704d"]]), uw = { class: "instances-tab" }, mw = { class: "instances-header" }, vw = {
  key: 0,
  class: "loading-state"
}, fw = {
  key: 1,
  class: "empty-state"
}, pw = {
  key: 2,
  class: "instances-list"
}, gw = /* @__PURE__ */ se({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(t) {
    const c = t, n = z(() => {
      const i = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...c.instances].sort(
        (u, g) => (i[u.status] ?? 5) - (i[g.status] ?? 5)
      );
    });
    return (i, u) => (s(), o("div", uw, [
      e("div", mw, [
        _(ct, null, {
          default: l(() => [...u[4] || (u[4] = [
            h("Active Instances", -1)
          ])]),
          _: 1
        }),
        _(J, {
          variant: "ghost",
          size: "xs",
          loading: t.isLoading,
          onClick: u[0] || (u[0] = (g) => i.$emit("refresh"))
        }, {
          default: l(() => [...u[5] || (u[5] = [
            h(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      t.isLoading && t.instances.length === 0 ? (s(), o("div", vw, [...u[6] || (u[6] = [
        e("span", { class: "spinner" }, null, -1),
        h(" Loading instances... ", -1)
      ])])) : t.instances.length === 0 ? (s(), o("div", fw, [...u[7] || (u[7] = [
        e("span", { class: "empty-icon" }, "○", -1),
        e("span", { class: "empty-text" }, "No active instances", -1),
        e("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (s(), o("div", pw, [
        (s(!0), o(V, null, ie(n.value, (g) => (s(), R(cw, {
          key: g.id,
          instance: g,
          "is-loading": t.actionLoadingId === g.id,
          onStop: u[1] || (u[1] = (m) => i.$emit("stop", m)),
          onStart: u[2] || (u[2] = (m) => i.$emit("start", m)),
          onTerminate: u[3] || (u[3] = (m) => i.$emit("terminate", m))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), hw = /* @__PURE__ */ ne(gw, [["__scopeId", "data-v-ba614fc3"]]), yw = { class: "remote-header" }, ww = { class: "remote-info" }, kw = { class: "remote-icon" }, bw = { class: "remote-name" }, _w = {
  key: 0,
  class: "default-badge"
}, $w = {
  key: 1,
  class: "sync-badge"
}, Cw = {
  key: 0,
  class: "ahead"
}, xw = {
  key: 1,
  class: "behind"
}, Sw = {
  key: 1,
  class: "synced"
}, Iw = ["href"], Ew = {
  key: 1,
  class: "remote-url-text"
}, Tw = { class: "remote-actions" }, Rw = /* @__PURE__ */ se({
  __name: "DeployRemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    isSelected: { type: Boolean },
    isFetching: { type: Boolean },
    isPushing: { type: Boolean }
  },
  emits: ["fetch", "push", "select"],
  setup(t) {
    const c = t, n = z(() => c.remote.is_default), i = z(() => {
      const g = c.remote.fetch_url, m = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return m ? `https://${m[1]}/${m[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), u = z(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, m) => (s(), o("div", {
      class: fe(["deploy-remote-card", { selected: t.isSelected }])
    }, [
      e("div", yw, [
        e("div", ww, [
          e("span", kw, a(n.value ? "🔗" : "🌐"), 1),
          e("span", bw, a(t.remote.name), 1),
          n.value ? (s(), o("span", _w, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", $w, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(V, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Cw, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", xw, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", Sw, "✓ synced"))
          ])) : r("", !0)
        ]),
        i.value ? (s(), o("a", {
          key: 0,
          href: i.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: m[0] || (m[0] = Be(() => {
          }, ["stop"]))
        }, a(u.value), 9, Iw)) : (s(), o("span", Ew, a(u.value), 1))
      ]),
      e("div", Tw, [
        _(J, {
          variant: "secondary",
          size: "xs",
          loading: t.isFetching,
          onClick: m[1] || (m[1] = (p) => g.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...m[4] || (m[4] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        t.syncStatus && t.syncStatus.ahead > 0 ? (s(), R(J, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: t.isPushing,
          onClick: m[2] || (m[2] = (p) => g.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            h(" Push ↑" + a(t.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : r("", !0),
        _(J, {
          variant: t.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: m[3] || (m[3] = (p) => g.$emit("select", t.remote.name))
        }, {
          default: l(() => [
            h(a(t.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), ko = /* @__PURE__ */ ne(Rw, [["__scopeId", "data-v-d687d161"]]), Pw = { class: "runpod-tab" }, Mw = { class: "api-key-card" }, Dw = { class: "api-key-row" }, Lw = { class: "api-key-input-wrapper" }, zw = ["type", "disabled"], Uw = ["title"], Nw = { class: "status-icon" }, Ow = { class: "status-text" }, Aw = {
  key: 0,
  class: "credit-balance"
}, Fw = { class: "config-card" }, Bw = { class: "config-row" }, Vw = ["disabled"], Ww = {
  key: 0,
  value: ""
}, Gw = {
  key: 1,
  value: "",
  disabled: ""
}, jw = ["value", "disabled"], Kw = { class: "config-row" }, Hw = {
  key: 0,
  class: "loading-inline"
}, qw = { class: "no-volumes-state" }, Yw = { class: "no-volumes-text" }, Jw = ["value"], Xw = { class: "config-row" }, Qw = ["disabled"], Zw = {
  key: 0,
  value: ""
}, ek = {
  key: 1,
  value: ""
}, tk = {
  key: 2,
  value: ""
}, sk = ["value"], ok = { class: "config-row" }, nk = { class: "radio-group" }, ak = { class: "radio-option" }, lk = { class: "radio-label" }, ik = { class: "radio-option" }, rk = { class: "radio-label" }, dk = { class: "config-row" }, ck = { class: "radio-group" }, uk = { class: "radio-option" }, mk = { class: "radio-label" }, vk = { class: "radio-option" }, fk = { class: "radio-label" }, pk = { class: "config-row" }, gk = {
  key: 0,
  class: "loading-text"
}, hk = {
  key: 1,
  class: "empty-remotes"
}, yk = { class: "remotes-list" }, wk = {
  key: 0,
  class: "sync-warning"
}, kk = { class: "warning-content" }, bk = { class: "remotes-footer" }, _k = { class: "summary-card" }, $k = {
  key: 0,
  class: "loading-text"
}, Ck = { class: "summary-row" }, xk = { class: "summary-value" }, Sk = { class: "summary-row" }, Ik = { class: "summary-value" }, Ek = { class: "summary-row" }, Tk = { class: "summary-value" }, Rk = {
  key: 0,
  class: "summary-sub-row"
}, Pk = { class: "summary-sub-label" }, Mk = {
  key: 1,
  class: "summary-sub-row warning"
}, Dk = { class: "summary-sub-label" }, Lk = { class: "summary-row" }, zk = { class: "summary-value" }, Uk = { class: "summary-row" }, Nk = { class: "summary-value" }, Ok = { class: "deployment-summary" }, Ak = { class: "summary-columns" }, Fk = { class: "summary-column" }, Bk = { class: "pricing-row" }, Vk = { class: "pricing-value" }, Wk = { class: "pricing-row" }, Gk = { class: "pricing-value" }, jk = { class: "pricing-row" }, Kk = { class: "pricing-value" }, Hk = { class: "pricing-row total" }, qk = { class: "pricing-value" }, Yk = { class: "summary-column" }, Jk = { class: "spec-row" }, Xk = { class: "spec-row" }, Qk = {
  key: 0,
  class: "spec-row"
}, Zk = {
  key: 1,
  class: "spec-row spot-warning"
}, eb = {
  key: 4,
  class: "deploy-actions"
}, tb = { class: "progress-content" }, sb = { class: "phase-indicator" }, ob = { key: 0 }, nb = { key: 1 }, ab = { key: 2 }, lb = {
  key: 3,
  class: "spinner"
}, ib = { class: "phase-text" }, rb = { class: "phase-name" }, db = { class: "phase-detail" }, cb = {
  key: 0,
  class: "ready-actions"
}, ub = { class: "console-link" }, mb = ["href"], vb = /* @__PURE__ */ se({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      testRunPodConnection: u,
      getNetworkVolumes: g,
      getRunPodGpuTypes: m,
      deployToRunPod: p,
      getDeploymentStatus: d,
      getStoredRunPodKey: v,
      clearRunPodKey: w,
      validateDeploy: k,
      getRemotes: b,
      getRemoteSyncStatus: f,
      fetchRemote: x,
      pushToRemote: I,
      getDataCenters: $
    } = Ae(), P = y(!1), O = y(""), T = y(!1), E = y(!1), q = y(null), B = y(null), F = y(""), S = y(""), C = y(""), M = y("SECURE"), X = y("ON_DEMAND"), oe = y("my-comfyui-deploy"), K = y([]), te = y({}), Y = y(!1), U = y(null), N = y(null), D = y(null), ve = y([]), ae = y(!1), be = y([]), Ce = y(!1), Le = y([]), Ue = y(!1), me = y(null), ge = y(!1), Me = y(!1), ce = y(null), Z = y(!1), De = y(null), pe = y(null), Je = y(null), tt = y(!1), st = y(null), Te = y(!1), Xe = y(!1), qe = z(() => be.value.find((re) => re.id === S.value) || null), Qe = z(() => F.value ? be.value.filter((re) => re.data_center_id === F.value) : be.value), mt = z(() => Le.value.filter((re) => re.available)), $e = z(() => U.value && te.value[U.value] || null), je = z(() => {
      if (!U.value) return null;
      const re = K.value.find((j) => j.name === U.value);
      return (re == null ? void 0 : re.fetch_url) || null;
    }), it = z(() => T.value && S.value && C.value && je.value && !Me.value && !tt.value), Ye = (re) => {
      const j = Le.value.find((Ze) => Ze.id === C.value);
      if (!j) return "0.00";
      if (re === "SECURE") return (j.securePrice ?? 0).toFixed(2);
      if (re === "COMMUNITY") return (j.communityPrice ?? 0).toFixed(2);
      const Ee = M.value === "SECURE";
      return re === "ON_DEMAND" ? Ee ? (j.securePrice ?? 0).toFixed(2) : (j.communityPrice ?? 0).toFixed(2) : Ee ? (j.secureSpotPrice ?? 0).toFixed(2) : (j.communitySpotPrice ?? 0).toFixed(2);
    }, ue = z(() => {
      const re = Le.value.find((xt) => xt.id === C.value), j = be.value.find((xt) => xt.id === S.value);
      if (!re) return null;
      const Ee = M.value === "SECURE", Ze = X.value === "SPOT";
      let gt;
      Ze ? gt = Ee ? re.secureSpotPrice ?? 0 : re.communitySpotPrice ?? 0 : gt = Ee ? re.securePrice ?? 0 : re.communityPrice ?? 0;
      const Pt = j ? j.size_gb * 14e-5 : 0, Mt = 4e-3;
      return {
        gpu: gt,
        volume: Pt,
        container: Mt,
        total: gt + Pt + Mt
      };
    });
    async function Q() {
      await ft(), await Promise.all([rt(), ee()]);
    }
    async function ee() {
      Y.value = !0;
      try {
        const re = await b();
        K.value = re.remotes, await Promise.all(
          re.remotes.map(async (Ee) => {
            const Ze = await f(Ee.name);
            Ze && (te.value[Ee.name] = Ze);
          })
        );
        const j = re.remotes.find((Ee) => Ee.is_default);
        j ? U.value = j.name : re.remotes.length > 0 && (U.value = re.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        Y.value = !1;
      }
    }
    async function L(re) {
      N.value = re;
      try {
        await x(re);
        const j = await f(re);
        j && (te.value[re] = j), n("toast", `Fetched from ${re}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function G(re) {
      D.value = re;
      try {
        await I(re, { force: !1 });
        const j = await f(re);
        j && (te.value[re] = j), n("toast", `Pushed to ${re}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        D.value = null;
      }
    }
    function le(re) {
      U.value = re;
    }
    async function xe() {
      if (O.value) {
        E.value = !0, q.value = null;
        try {
          const re = await u(O.value, !0);
          re.status === "success" ? (T.value = !0, B.value = re.credit_balance ?? null, q.value = { type: "success", message: re.message }, await Q()) : q.value = { type: "error", message: re.message };
        } catch (re) {
          q.value = {
            type: "error",
            message: re instanceof Error ? re.message : "Connection test failed"
          };
        } finally {
          E.value = !1;
        }
      }
    }
    async function Ve() {
      try {
        await w(), O.value = "", T.value = !1, q.value = null, B.value = null, ve.value = [], F.value = "", be.value = [], S.value = "", Le.value = [], C.value = "", me.value = null, n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function ft() {
      Ce.value = !0, ae.value = !0;
      try {
        const re = await g();
        be.value = re.volumes;
        const j = /* @__PURE__ */ new Map();
        for (const Ee of re.volumes)
          Ee.data_center_id && !j.has(Ee.data_center_id) && j.set(Ee.data_center_id, {
            id: Ee.data_center_id,
            name: Ee.data_center_name || Ee.data_center_id,
            available: !0
          });
        if (re.volumes.length === 0) {
          const Ee = await $();
          ve.value = Ee.data_centers;
        } else
          ve.value = Array.from(j.values());
        if (be.value.length > 0) {
          const Ee = be.value[0];
          S.value = Ee.id, Ee.data_center_id && (F.value = Ee.data_center_id, await Ct(Ee.data_center_id));
        } else ve.value.length > 0 && (F.value = ve.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        Ce.value = !1, ae.value = !1;
      }
    }
    async function Ct(re) {
      Ue.value = !0;
      try {
        const j = await m(re);
        Le.value = j.gpu_types;
        const Ee = Le.value.find((Ze) => Ze.available);
        Ee ? C.value = Ee.id : C.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        Ue.value = !1;
      }
    }
    ut(F, async (re) => {
      if (!re || Ce.value) return;
      const j = be.value.find((Ee) => Ee.id === S.value);
      j && j.data_center_id !== re && (S.value = ""), await Ct(re);
    }), ut(S, async (re) => {
      if (!re) {
        Le.value = [], C.value = "";
        return;
      }
      if (Ce.value) return;
      const j = be.value.find((Ee) => Ee.id === re);
      j && j.data_center_id !== F.value ? F.value = j.data_center_id : j && await Ct(j.data_center_id);
    });
    async function rt() {
      ge.value = !0;
      try {
        me.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        ge.value = !1;
      }
    }
    async function Nt() {
      if (!(!C.value || !S.value)) {
        tt.value = !0, ce.value = null;
        try {
          const re = await k();
          st.value = re, re.can_export ? re.warnings.models_without_sources.length > 0 ? Xe.value = !0 : await Ht() : Te.value = !0;
        } catch (re) {
          ce.value = {
            status: "error",
            message: re instanceof Error ? re.message : "Validation failed"
          }, n("toast", "Validation failed", "error");
        } finally {
          tt.value = !1;
        }
      }
    }
    async function Ot() {
      Xe.value = !1, await Ht();
    }
    async function At() {
      try {
        const re = await k();
        st.value = re;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ht() {
      Me.value = !0;
      try {
        let re;
        if (X.value === "SPOT") {
          const Ee = Le.value.find((Ze) => Ze.id === C.value);
          Ee && (re = M.value === "SECURE" ? Ee.secureSpotPrice : Ee.communitySpotPrice);
        }
        const j = await p({
          gpu_type_id: C.value,
          pod_name: oe.value || "my-comfyui-deploy",
          network_volume_id: S.value,
          cloud_type: M.value,
          pricing_type: X.value,
          spot_bid: re,
          import_source: je.value
        });
        ce.value = j, j.status === "success" && j.pod_id ? (De.value = j.pod_id, Z.value = !0, pt(j.pod_id), n("toast", "Deployment started", "success"), n("deployed")) : n("toast", j.message, "error");
      } catch (re) {
        ce.value = {
          status: "error",
          message: re instanceof Error ? re.message : "Deployment failed"
        }, n("toast", "Deployment failed", "error");
      } finally {
        Me.value = !1;
      }
    }
    function pt(re) {
      Ft(re), Je.value = window.setInterval(() => Ft(re), 3e3);
    }
    function Vt() {
      Je.value && (clearInterval(Je.value), Je.value = null);
    }
    async function Ft(re) {
      try {
        const j = await d(re);
        pe.value = j, (j.phase === "READY" || j.phase === "ERROR" || j.phase === "STOPPED") && (Vt(), j.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), n("deployed"));
      } catch (j) {
        console.error("Failed to poll deployment status:", j);
      }
    }
    function qt() {
      Z.value = !1, Vt(), De.value = null, pe.value = null;
    }
    function ts() {
      var re;
      (re = pe.value) != null && re.comfyui_url && window.open(pe.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function ss(re) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[re || ""] || "Initializing...";
    }
    function os(re) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[re || ""] ?? 10;
    }
    return Ne(async () => {
      try {
        const re = await v(!0);
        re.has_key && re.key_preview && (O.value = `****${re.key_preview}`, re.valid ? (T.value = !0, B.value = re.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await Q()) : re.error && (q.value = { type: "error", message: re.error }));
      } catch {
      }
    }), Cs(() => {
      Vt();
    }), (re, j) => {
      var Ee, Ze, gt, Pt, Mt, xt;
      return s(), o(V, null, [
        e("div", Pw, [
          _(Fe, { title: "RUNPOD API KEY" }, {
            default: l(() => [
              e("div", Mw, [
                e("div", Dw, [
                  e("div", Lw, [
                    Pe(e("input", {
                      "onUpdate:modelValue": j[0] || (j[0] = (we) => O.value = we),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, zw), [
                      [xs, O.value]
                    ]),
                    e("button", {
                      class: "toggle-visibility-btn",
                      onClick: j[1] || (j[1] = (we) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, a(P.value ? "👁" : "👁‍🗨"), 9, Uw)
                  ]),
                  T.value ? r("", !0) : (s(), R(J, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: E.value,
                    disabled: !O.value || E.value,
                    onClick: xe
                  }, {
                    default: l(() => [...j[16] || (j[16] = [
                      h(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (s(), R(J, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Ve
                  }, {
                    default: l(() => [...j[17] || (j[17] = [
                      h(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                q.value ? (s(), o("div", {
                  key: 0,
                  class: fe(["connection-status", q.value.type])
                }, [
                  e("span", Nw, a(q.value.type === "success" ? "✓" : "✕"), 1),
                  e("span", Ow, a(q.value.message), 1),
                  B.value !== null ? (s(), o("span", Aw, " $" + a(B.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                ], 2)) : r("", !0),
                j[18] || (j[18] = e("div", { class: "api-key-help" }, [
                  e("span", { class: "help-icon" }, "i"),
                  e("span", { class: "help-text" }, [
                    h(" Get your API key at "),
                    e("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    h(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          T.value ? (s(), R(Fe, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: l(() => [
              e("div", Fw, [
                e("div", Bw, [
                  j[19] || (j[19] = e("label", { class: "config-label" }, "Region", -1)),
                  Pe(e("select", {
                    "onUpdate:modelValue": j[2] || (j[2] = (we) => F.value = we),
                    class: "config-select",
                    disabled: ae.value
                  }, [
                    ae.value ? (s(), o("option", Ww, "Loading...")) : F.value ? r("", !0) : (s(), o("option", Gw, "Select a region")),
                    (s(!0), o(V, null, ie(ve.value, (we) => (s(), o("option", {
                      key: we.id,
                      value: we.id,
                      disabled: !we.available
                    }, a(we.id) + " (" + a(we.name) + ")" + a(we.available ? "" : " [Unavailable]"), 9, jw))), 128))
                  ], 8, Vw), [
                    [Dt, F.value]
                  ])
                ]),
                e("div", Kw, [
                  j[24] || (j[24] = e("label", { class: "config-label" }, "Network Volume", -1)),
                  Ce.value ? (s(), o("div", Hw, "Loading volumes...")) : Qe.value.length === 0 ? (s(), o(V, { key: 1 }, [
                    e("div", qw, [
                      j[20] || (j[20] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      e("span", Yw, "No volumes in " + a(F.value || "this region"), 1)
                    ]),
                    j[21] || (j[21] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    j[22] || (j[22] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (s(), o(V, { key: 2 }, [
                    Pe(e("select", {
                      "onUpdate:modelValue": j[3] || (j[3] = (we) => S.value = we),
                      class: "config-select"
                    }, [
                      (s(!0), o(V, null, ie(Qe.value, (we) => (s(), o("option", {
                        key: we.id,
                        value: we.id
                      }, a(we.name) + " (" + a(we.size_gb) + "GB) ", 9, Jw))), 128))
                    ], 512), [
                      [Dt, S.value]
                    ]),
                    j[23] || (j[23] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                e("div", Xw, [
                  j[25] || (j[25] = e("label", { class: "config-label" }, "GPU Type", -1)),
                  Pe(e("select", {
                    "onUpdate:modelValue": j[4] || (j[4] = (we) => C.value = we),
                    class: "config-select",
                    disabled: Ue.value || !S.value
                  }, [
                    S.value ? Ue.value ? (s(), o("option", ek, "Loading GPUs...")) : mt.value.length === 0 ? (s(), o("option", tk, "No GPUs available in this region")) : r("", !0) : (s(), o("option", Zw, "Select a volume first")),
                    (s(!0), o(V, null, ie(mt.value, (we) => (s(), o("option", {
                      key: we.id,
                      value: we.id
                    }, a(we.displayName) + " (" + a(we.memoryInGb) + "GB) - $" + a(M.value === "SECURE" ? (we.securePrice ?? 0).toFixed(2) : (we.communityPrice ?? 0).toFixed(2)) + "/hr " + a(we.stockStatus ? `[${we.stockStatus}]` : ""), 9, sk))), 128))
                  ], 8, Qw), [
                    [Dt, C.value]
                  ])
                ]),
                e("div", ok, [
                  j[26] || (j[26] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                  e("div", nk, [
                    e("label", ak, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[5] || (j[5] = (we) => M.value = we),
                        value: "SECURE"
                      }, null, 512), [
                        [Rt, M.value]
                      ]),
                      e("span", lk, "Secure ($" + a(Ye("SECURE")) + "/hr)", 1)
                    ]),
                    e("label", ik, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[6] || (j[6] = (we) => M.value = we),
                        value: "COMMUNITY"
                      }, null, 512), [
                        [Rt, M.value]
                      ]),
                      e("span", rk, "Community ($" + a(Ye("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", dk, [
                  j[27] || (j[27] = e("label", { class: "config-label" }, [
                    h(" Pricing "),
                    e("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  e("div", ck, [
                    e("label", uk, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[7] || (j[7] = (we) => X.value = we),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Rt, X.value]
                      ]),
                      e("span", mk, "On-Demand ($" + a(Ye("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    e("label", vk, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[8] || (j[8] = (we) => X.value = we),
                        value: "SPOT"
                      }, null, 512), [
                        [Rt, X.value]
                      ]),
                      e("span", fk, "Spot ($" + a(Ye("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", pk, [
                  j[28] || (j[28] = e("label", { class: "config-label" }, "Pod Name", -1)),
                  Pe(e("input", {
                    "onUpdate:modelValue": j[9] || (j[9] = (we) => oe.value = we),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [kt, oe.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : r("", !0),
          T.value ? (s(), R(Fe, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: l(() => [
              Y.value ? (s(), o("div", gk, "Loading remotes...")) : K.value.length === 0 ? (s(), o("div", hk, [
                j[30] || (j[30] = e("div", { class: "empty-message" }, [
                  e("span", { class: "empty-icon" }, "🌐"),
                  e("span", { class: "empty-text" }, "No Git remotes configured"),
                  e("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                _(J, {
                  variant: "primary",
                  size: "xs",
                  onClick: j[10] || (j[10] = (we) => n("navigate", "remotes"))
                }, {
                  default: l(() => [...j[29] || (j[29] = [
                    h(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (s(), o(V, { key: 2 }, [
                e("div", yk, [
                  (s(!0), o(V, null, ie(K.value, (we) => (s(), R(ko, {
                    key: we.name,
                    remote: we,
                    "sync-status": te.value[we.name],
                    "is-selected": U.value === we.name,
                    "is-fetching": N.value === we.name,
                    "is-pushing": D.value === we.name,
                    onFetch: L,
                    onPush: G,
                    onSelect: le
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                $e.value && $e.value.ahead > 0 ? (s(), o("div", wk, [
                  j[31] || (j[31] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("div", kk, [
                    e("strong", null, a($e.value.ahead) + " unpushed commit" + a($e.value.ahead !== 1 ? "s" : ""), 1),
                    e("p", null, "Push to '" + a(U.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  _(J, {
                    variant: "primary",
                    size: "xs",
                    loading: D.value === U.value,
                    onClick: j[11] || (j[11] = (we) => U.value && G(U.value))
                  }, {
                    default: l(() => [
                      h(" Push to " + a(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : r("", !0),
                e("div", bk, [
                  _(J, {
                    variant: "link",
                    size: "xs",
                    onClick: j[12] || (j[12] = (we) => n("navigate", "remotes"))
                  }, {
                    default: l(() => [...j[32] || (j[32] = [
                      h(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : r("", !0),
          T.value ? (s(), R(Fe, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: l(() => [
              e("div", _k, [
                ge.value ? (s(), o("div", $k, "Loading environment summary...")) : me.value ? (s(), o(V, { key: 1 }, [
                  e("div", Ck, [
                    j[33] || (j[33] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                    e("span", xk, a(me.value.comfyui_version), 1)
                  ]),
                  e("div", Sk, [
                    j[34] || (j[34] = e("span", { class: "summary-label" }, "Nodes", -1)),
                    e("span", Ik, a(me.value.node_count) + " custom nodes", 1)
                  ]),
                  e("div", Ek, [
                    j[35] || (j[35] = e("span", { class: "summary-label" }, "Models", -1)),
                    e("span", Tk, a(me.value.model_count) + " models", 1)
                  ]),
                  me.value.models_with_sources > 0 ? (s(), o("div", Rk, [
                    e("span", Pk, "└─ " + a(me.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : r("", !0),
                  me.value.models_without_sources > 0 ? (s(), o("div", Mk, [
                    e("span", Dk, "└─ " + a(me.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : r("", !0),
                  e("div", Lk, [
                    j[36] || (j[36] = e("span", { class: "summary-label" }, "Workflows", -1)),
                    e("span", zk, a(me.value.workflow_count) + " committed", 1)
                  ]),
                  e("div", Uk, [
                    j[37] || (j[37] = e("span", { class: "summary-label" }, "Package", -1)),
                    e("span", Nk, "~" + a(me.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : r("", !0)
              ])
            ]),
            _: 1
          })) : r("", !0),
          T.value && ue.value ? (s(), R(Fe, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: l(() => {
              var we, St;
              return [
                e("div", Ok, [
                  e("div", Ak, [
                    e("div", Fk, [
                      j[42] || (j[42] = e("div", { class: "column-header" }, "Pricing", -1)),
                      e("div", Bk, [
                        j[38] || (j[38] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                        e("span", Vk, "$" + a(ue.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      e("div", Wk, [
                        j[39] || (j[39] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                        e("span", Gk, "$" + a(ue.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      e("div", jk, [
                        j[40] || (j[40] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                        e("span", Kk, "$" + a(ue.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      j[43] || (j[43] = e("div", { class: "pricing-divider" }, null, -1)),
                      e("div", Hk, [
                        j[41] || (j[41] = e("span", { class: "pricing-label" }, "Total:", -1)),
                        e("span", qk, "~$" + a(ue.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    e("div", Yk, [
                      j[45] || (j[45] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                      e("div", Jk, [
                        e("span", null, a(((we = Le.value.find((H) => H.id === C.value)) == null ? void 0 : we.displayName) || "GPU") + " (" + a(((St = Le.value.find((H) => H.id === C.value)) == null ? void 0 : St.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      e("div", Xk, [
                        e("span", null, "Region: " + a(F.value), 1)
                      ]),
                      qe.value ? (s(), o("div", Qk, [
                        e("span", null, "Volume: " + a(qe.value.name), 1)
                      ])) : r("", !0),
                      X.value === "SPOT" ? (s(), o("div", Zk, [...j[44] || (j[44] = [
                        e("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : r("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : r("", !0),
          T.value ? (s(), o("div", eb, [
            _(J, {
              variant: "primary",
              size: "md",
              loading: tt.value || Me.value,
              disabled: !it.value,
              onClick: Nt
            }, {
              default: l(() => [
                j[46] || (j[46] = e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                h(" " + a(tt.value ? "Validating..." : Me.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : r("", !0),
          ce.value ? (s(), R(Fe, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: l(() => [
              _(ot, {
                status: ce.value.status === "success" ? "synced" : "broken"
              }, Kt({
                icon: l(() => [
                  h(a(ce.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  h(a(ce.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: l(() => [
                  h(a(ce.value.message), 1)
                ]),
                actions: l(() => [
                  _(J, {
                    variant: "ghost",
                    size: "xs",
                    onClick: j[13] || (j[13] = (we) => ce.value = null)
                  }, {
                    default: l(() => [...j[47] || (j[47] = [
                      h(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ce.value.pod_id ? {
                  name: "details",
                  fn: l(() => [
                    _(Ge, {
                      label: "Pod ID:",
                      value: ce.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        Z.value ? (s(), R(He, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ee = pe.value) == null ? void 0 : Ee.phase) === "READY" || ((Ze = pe.value) == null ? void 0 : Ze.phase) === "ERROR" || ((gt = pe.value) == null ? void 0 : gt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: qt
        }, Kt({
          body: l(() => {
            var we, St, H, A, he, Ie, Oe, Ke, lt, It, Wt, Gt;
            return [
              e("div", tb, [
                e("div", sb, [
                  e("div", {
                    class: fe(["phase-icon", (St = (we = pe.value) == null ? void 0 : we.phase) == null ? void 0 : St.toLowerCase()])
                  }, [
                    ((H = pe.value) == null ? void 0 : H.phase) === "READY" ? (s(), o("span", ob, "✓")) : ((A = pe.value) == null ? void 0 : A.phase) === "ERROR" ? (s(), o("span", nb, "✕")) : ((he = pe.value) == null ? void 0 : he.phase) === "STOPPED" ? (s(), o("span", ab, "○")) : (s(), o("span", lb, "⟳"))
                  ], 2),
                  e("div", ib, [
                    e("div", rb, a(ss((Ie = pe.value) == null ? void 0 : Ie.phase)), 1),
                    e("div", db, a(((Oe = pe.value) == null ? void 0 : Oe.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                _(Ss, {
                  progress: os((Ke = pe.value) == null ? void 0 : Ke.phase),
                  variant: ((lt = pe.value) == null ? void 0 : lt.phase) === "ERROR" ? "error" : ((It = pe.value) == null ? void 0 : It.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Wt = pe.value) == null ? void 0 : Wt.phase) === "READY" ? (s(), o("div", cb, [
                  _(J, {
                    variant: "primary",
                    size: "md",
                    onClick: ts
                  }, {
                    default: l(() => [...j[48] || (j[48] = [
                      h(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", ub, [
                  (Gt = pe.value) != null && Gt.console_url ? (s(), o("a", {
                    key: 0,
                    href: pe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, mb)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Pt = pe.value) == null ? void 0 : Pt.phase) === "READY" || ((Mt = pe.value) == null ? void 0 : Mt.phase) === "ERROR" || ((xt = pe.value) == null ? void 0 : xt.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              _(J, {
                variant: "ghost",
                size: "xs",
                onClick: qt
              }, {
                default: l(() => [...j[49] || (j[49] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        Te.value && st.value ? (s(), R(go, {
          key: 1,
          issues: st.value.blocking_issues,
          onClose: j[14] || (j[14] = (we) => Te.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        Xe.value && st.value ? (s(), R(ho, {
          key: 2,
          models: st.value.warnings.models_without_sources,
          onConfirm: Ot,
          onCancel: j[15] || (j[15] = (we) => Xe.value = !1),
          onRevalidate: At
        }, null, 8, ["models"])) : r("", !0)
      ], 64);
    };
  }
}), fb = /* @__PURE__ */ ne(vb, [["__scopeId", "data-v-925ec410"]]), pb = { class: "worker-header" }, gb = { class: "worker-status" }, hb = { class: "worker-name" }, yb = { class: "worker-actions" }, wb = { class: "worker-details" }, kb = { class: "detail-item" }, bb = { class: "detail-value" }, _b = {
  key: 0,
  class: "detail-item"
}, $b = { class: "detail-value" }, Cb = {
  key: 1,
  class: "detail-item"
}, xb = { class: "detail-value mode-badge" }, Sb = {
  key: 0,
  class: "worker-stats"
}, Ib = {
  key: 0,
  class: "stat-item"
}, Eb = { key: 0 }, Tb = {
  key: 1,
  class: "worker-stats offline"
}, Rb = /* @__PURE__ */ se({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "manage", "remove"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["worker-card", { offline: t.worker.status === "offline" }])
    }, [
      e("div", pb, [
        e("div", gb, [
          e("span", {
            class: fe(["status-dot", t.worker.status])
          }, null, 2),
          e("span", hb, a(t.worker.name), 1)
        ]),
        e("div", yb, [
          t.worker.status === "online" ? (s(), R(J, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: t.isActionLoading,
            onClick: n[0] || (n[0] = (i) => c.$emit("deploy", t.worker))
          }, {
            default: l(() => [...n[3] || (n[3] = [
              h(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : r("", !0),
          t.worker.status === "online" ? (s(), R(J, {
            key: 1,
            variant: "ghost",
            size: "xs",
            disabled: t.isActionLoading,
            onClick: n[1] || (n[1] = (i) => c.$emit("manage", t.worker))
          }, {
            default: l(() => [...n[4] || (n[4] = [
              h(" Manage ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : r("", !0),
          _(J, {
            variant: "ghost",
            size: "xs",
            loading: t.isActionLoading,
            onClick: n[2] || (n[2] = (i) => c.$emit("remove", t.worker.name))
          }, {
            default: l(() => [...n[5] || (n[5] = [
              h(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      e("div", wb, [
        e("span", kb, [
          e("span", bb, a(t.worker.host) + ":" + a(t.worker.port), 1)
        ]),
        t.worker.gpu_info ? (s(), o("span", _b, [
          n[6] || (n[6] = e("span", { class: "detail-label" }, "•", -1)),
          e("span", $b, a(t.worker.gpu_info), 1)
        ])) : r("", !0),
        t.worker.mode ? (s(), o("span", Cb, [
          n[7] || (n[7] = e("span", { class: "detail-label" }, "•", -1)),
          e("span", xb, a(t.worker.mode), 1)
        ])) : r("", !0)
      ]),
      t.worker.status === "online" ? (s(), o("div", Sb, [
        n[8] || (n[8] = e("span", { class: "stat-item" }, [
          h(" Status: "),
          e("span", { class: "stat-value online" }, "Online")
        ], -1)),
        t.worker.instance_count !== void 0 ? (s(), o("span", Ib, [
          h(" • " + a(t.worker.instance_count) + " instance" + a(t.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          t.worker.running_count ? (s(), o("span", Eb, "(" + a(t.worker.running_count) + " running)", 1)) : r("", !0)
        ])) : r("", !0)
      ])) : (s(), o("div", Tb, [...n[9] || (n[9] = [
        e("span", { class: "stat-item" }, [
          h(" Status: "),
          e("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), Pb = /* @__PURE__ */ ne(Rb, [["__scopeId", "data-v-054127e2"]]), Mb = { class: "add-worker-content" }, Db = { class: "manual-form" }, Lb = { class: "form-row" }, zb = { class: "form-row-inline" }, Ub = { class: "form-field flex-2" }, Nb = { class: "form-field flex-1" }, Ob = { class: "form-row" }, Ab = { class: "api-key-wrapper" }, Fb = ["type"], Bb = { class: "result-icon" }, Vb = { class: "result-content" }, Wb = { class: "result-message" }, Gb = {
  key: 0,
  class: "result-detail"
}, jb = { class: "modal-actions" }, Kb = /* @__PURE__ */ se({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(t, { emit: c }) {
    const n = c, { testWorkerConnection: i } = Ae(), u = vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), g = y(!1), m = y(!1), p = y(!1), d = y(null), v = z(() => u.host && u.port && u.apiKey), w = z(() => u.name && u.host && u.port && u.apiKey);
    async function k() {
      if (v.value) {
        m.value = !0, d.value = null;
        try {
          const f = await i({
            host: u.host,
            port: u.port,
            api_key: u.apiKey
          });
          f.status === "success" ? (d.value = {
            type: "success",
            message: f.message,
            gpu_info: f.gpu_info
          }, !u.name && f.gpu_info && (u.name = `worker-${u.host.split(".").pop()}`)) : d.value = {
            type: "error",
            message: f.message
          };
        } catch (f) {
          d.value = {
            type: "error",
            message: f instanceof Error ? f.message : "Connection test failed"
          };
        } finally {
          m.value = !1;
        }
      }
    }
    function b() {
      w.value && (p.value = !0, n("add", {
        name: u.name,
        host: u.host,
        port: u.port,
        api_key: u.apiKey
      }));
    }
    return (f, x) => (s(), R(He, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: x[5] || (x[5] = (I) => f.$emit("close"))
    }, {
      body: l(() => [
        e("div", Mb, [
          e("div", Db, [
            e("div", Lb, [
              x[6] || (x[6] = e("label", { class: "form-label" }, "Worker Name", -1)),
              Pe(e("input", {
                "onUpdate:modelValue": x[0] || (x[0] = (I) => u.name = I),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [kt, u.name]
              ])
            ]),
            e("div", zb, [
              e("div", Ub, [
                x[7] || (x[7] = e("label", { class: "form-label" }, "Host", -1)),
                Pe(e("input", {
                  "onUpdate:modelValue": x[1] || (x[1] = (I) => u.host = I),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [kt, u.host]
                ])
              ]),
              e("div", Nb, [
                x[8] || (x[8] = e("label", { class: "form-label" }, "Port", -1)),
                Pe(e("input", {
                  "onUpdate:modelValue": x[2] || (x[2] = (I) => u.port = I),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    kt,
                    u.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            e("div", Ob, [
              x[9] || (x[9] = e("label", { class: "form-label" }, "API Key", -1)),
              e("div", Ab, [
                Pe(e("input", {
                  "onUpdate:modelValue": x[3] || (x[3] = (I) => u.apiKey = I),
                  type: g.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, Fb), [
                  [xs, u.apiKey]
                ]),
                e("button", {
                  class: "toggle-visibility",
                  onClick: x[4] || (x[4] = (I) => g.value = !g.value),
                  type: "button"
                }, a(g.value ? "👁" : "👁‍🗨"), 1)
              ]),
              x[10] || (x[10] = e("div", { class: "form-help" }, [
                e("span", { class: "help-icon" }, "ⓘ"),
                h(" Run "),
                e("code", null, "cg-deploy worker setup"),
                h(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (s(), o("div", {
              key: 0,
              class: fe(["test-result", d.value.type])
            }, [
              e("span", Bb, a(d.value.type === "success" ? "✓" : "✕"), 1),
              e("div", Vb, [
                e("span", Wb, a(d.value.message), 1),
                d.value.gpu_info ? (s(), o("span", Gb, "GPU: " + a(d.value.gpu_info), 1)) : r("", !0)
              ])
            ], 2)) : r("", !0)
          ])
        ])
      ]),
      footer: l(() => [
        e("div", jb, [
          _(J, {
            variant: "ghost",
            size: "sm",
            loading: m.value,
            disabled: !v.value || m.value,
            onClick: k
          }, {
            default: l(() => [...x[11] || (x[11] = [
              h(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          _(J, {
            variant: "primary",
            size: "sm",
            loading: p.value,
            disabled: !w.value || p.value,
            onClick: b
          }, {
            default: l(() => [...x[12] || (x[12] = [
              h(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), Hb = /* @__PURE__ */ ne(Kb, [["__scopeId", "data-v-07a00732"]]), qb = { class: "discovered-content" }, Yb = {
  key: 0,
  class: "workers-list"
}, Jb = { class: "worker-info" }, Xb = { class: "worker-name" }, Qb = { class: "worker-address" }, Zb = {
  key: 0,
  class: "worker-gpu"
}, e_ = {
  key: 1,
  class: "empty-state"
}, t_ = {
  key: 2,
  class: "api-key-section"
}, s_ = { class: "selected-worker" }, o_ = { class: "selected-name" }, n_ = { class: "selected-address" }, a_ = { class: "form-row" }, l_ = { class: "api-key-wrapper" }, i_ = ["type"], r_ = { class: "result-icon" }, d_ = { class: "result-message" }, c_ = { class: "modal-actions" }, u_ = /* @__PURE__ */ se({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(t, { emit: c }) {
    const n = c, { testWorkerConnection: i } = Ae(), u = y(null), g = y(""), m = y(!1), p = y(!1), d = y(null), v = y(null);
    async function w(b) {
      var f;
      u.value = b, g.value = "", v.value = null, await As(), (f = d.value) == null || f.focus();
    }
    async function k() {
      if (!(!u.value || !g.value)) {
        p.value = !0, v.value = null;
        try {
          const b = await i({
            host: u.value.host,
            port: u.value.port,
            api_key: g.value
          });
          b.status === "success" ? n("add", {
            name: u.value.name,
            host: u.value.host,
            port: u.value.port,
            api_key: g.value
          }) : v.value = {
            type: "error",
            message: b.message
          };
        } catch (b) {
          v.value = {
            type: "error",
            message: b instanceof Error ? b.message : "Connection failed"
          };
        } finally {
          p.value = !1;
        }
      }
    }
    return (b, f) => (s(), R(He, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: f[3] || (f[3] = (x) => b.$emit("close"))
    }, {
      body: l(() => [
        e("div", qb, [
          t.workers.length > 0 ? (s(), o("div", Yb, [
            (s(!0), o(V, null, ie(t.workers, (x) => (s(), o("div", {
              key: `${x.host}:${x.port}`,
              class: "worker-item"
            }, [
              e("div", Jb, [
                e("span", Xb, a(x.name), 1),
                e("span", Qb, a(x.host) + ":" + a(x.port), 1),
                x.gpu_info ? (s(), o("span", Zb, a(x.gpu_info), 1)) : r("", !0)
              ]),
              _(J, {
                variant: "primary",
                size: "xs",
                onClick: (I) => w(x)
              }, {
                default: l(() => [...f[4] || (f[4] = [
                  h(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (s(), o("div", e_, [...f[5] || (f[5] = [
            e("span", { class: "empty-icon" }, "📡", -1),
            e("span", { class: "empty-text" }, "No workers found on the network", -1),
            e("span", { class: "empty-help" }, [
              h("Make sure workers are running with "),
              e("code", null, "--broadcast")
            ], -1)
          ])])),
          u.value ? (s(), o("div", t_, [
            e("div", s_, [
              f[6] || (f[6] = e("span", { class: "selected-label" }, "Adding:", -1)),
              e("span", o_, a(u.value.name), 1),
              e("span", n_, "(" + a(u.value.host) + ":" + a(u.value.port) + ")", 1)
            ]),
            e("div", a_, [
              f[7] || (f[7] = e("label", { class: "form-label" }, "API Key", -1)),
              e("div", l_, [
                Pe(e("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": f[0] || (f[0] = (x) => g.value = x),
                  type: m.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: wt(k, ["enter"])
                }, null, 40, i_), [
                  [xs, g.value]
                ]),
                e("button", {
                  class: "toggle-visibility",
                  onClick: f[1] || (f[1] = (x) => m.value = !m.value),
                  type: "button"
                }, a(m.value ? "👁" : "👁‍🗨"), 1)
              ]),
              f[8] || (f[8] = e("div", { class: "form-help" }, [
                e("span", { class: "help-icon" }, "ⓘ"),
                h(" Run "),
                e("code", null, "cg-deploy worker setup"),
                h(" on the worker to get the key ")
              ], -1))
            ]),
            v.value ? (s(), o("div", {
              key: 0,
              class: fe(["test-result", v.value.type])
            }, [
              e("span", r_, a(v.value.type === "success" ? "✓" : "✕"), 1),
              e("span", d_, a(v.value.message), 1)
            ], 2)) : r("", !0)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", c_, [
          u.value ? (s(), R(J, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: f[2] || (f[2] = (x) => {
              u.value = null, g.value = "", v.value = null;
            })
          }, {
            default: l(() => [...f[9] || (f[9] = [
              h(" Back ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          u.value ? (s(), R(J, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: p.value,
            disabled: !g.value || p.value,
            onClick: k
          }, {
            default: l(() => [...f[10] || (f[10] = [
              h(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : r("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), m_ = /* @__PURE__ */ ne(u_, [["__scopeId", "data-v-5a3e40a4"]]), v_ = { class: "deploy-content" }, f_ = { class: "section" }, p_ = {
  key: 0,
  class: "loading-text"
}, g_ = {
  key: 1,
  class: "empty-remotes"
}, h_ = {
  key: 2,
  class: "remotes-list"
}, y_ = { class: "section" }, w_ = { class: "mode-options" }, k_ = { class: "mode-option" }, b_ = ["disabled"], __ = { class: "mode-option" }, $_ = { class: "section" }, C_ = {
  key: 0,
  class: "section"
}, x_ = { class: "summary-row" }, S_ = {
  key: 1,
  class: "sync-warning"
}, I_ = { class: "warning-content" }, E_ = { class: "modal-actions" }, T_ = /* @__PURE__ */ se({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getRemotes: u,
      getRemoteSyncStatus: g,
      fetchRemote: m,
      pushToRemote: p,
      getDeploySummary: d,
      deployToWorker: v
    } = Ae(), w = y([]), k = y({}), b = y(!1), f = y(null), x = y(null), I = y(null), $ = y(n.worker.mode || "native"), P = y(""), O = y(null), T = y(!1), E = z(() => f.value && k.value[f.value] || null), q = z(() => {
      if (!f.value) return null;
      const K = w.value.find((te) => te.name === f.value);
      return (K == null ? void 0 : K.fetch_url) || null;
    }), B = z(() => q.value && !T.value);
    async function F() {
      b.value = !0;
      try {
        const K = await u();
        w.value = K.remotes, await Promise.all(
          K.remotes.map(async (Y) => {
            const U = await g(Y.name);
            U && (k.value[Y.name] = U);
          })
        );
        const te = K.remotes.find((Y) => Y.is_default);
        te ? f.value = te.name : K.remotes.length > 0 && (f.value = K.remotes[0].name);
      } catch {
        i("toast", "Failed to load remotes", "error");
      } finally {
        b.value = !1;
      }
    }
    async function S() {
      try {
        O.value = await d();
      } catch {
      }
    }
    async function C(K) {
      x.value = K;
      try {
        await m(K);
        const te = await g(K);
        te && (k.value[K] = te), i("toast", `Fetched from ${K}`, "success");
      } catch {
        i("toast", "Fetch failed", "error");
      } finally {
        x.value = null;
      }
    }
    async function M(K) {
      I.value = K;
      try {
        await p(K, { force: !1 });
        const te = await g(K);
        te && (k.value[K] = te), i("toast", `Pushed to ${K}`, "success");
      } catch {
        i("toast", "Push failed", "error");
      } finally {
        I.value = null;
      }
    }
    function X(K) {
      f.value = K;
    }
    async function oe() {
      if (q.value) {
        T.value = !0;
        try {
          const K = await v(n.worker.name, {
            import_source: q.value,
            mode: $.value,
            name: P.value || void 0
          });
          K.id ? (i("toast", `Deployment started: ${K.name || K.id}`, "success"), i("deployed")) : K.status === "error" ? i("toast", K.message || "Deployment failed", "error") : i("toast", "Unexpected response from worker", "error");
        } catch (K) {
          i("toast", K instanceof Error ? K.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return Ne(() => {
      F(), S();
    }), (K, te) => (s(), R(He, {
      title: `DEPLOY TO: ${t.worker.name}`,
      size: "md",
      onClose: te[5] || (te[5] = (Y) => K.$emit("close"))
    }, {
      body: l(() => [
        e("div", v_, [
          e("div", f_, [
            te[7] || (te[7] = e("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            b.value ? (s(), o("div", p_, "Loading remotes...")) : w.value.length === 0 ? (s(), o("div", g_, [...te[6] || (te[6] = [
              e("span", { class: "empty-icon" }, "🌐", -1),
              e("span", { class: "empty-text" }, "No Git remotes configured", -1),
              e("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (s(), o("div", h_, [
              (s(!0), o(V, null, ie(w.value, (Y) => (s(), R(ko, {
                key: Y.name,
                remote: Y,
                "sync-status": k.value[Y.name],
                "is-selected": f.value === Y.name,
                "is-fetching": x.value === Y.name,
                "is-pushing": I.value === Y.name,
                onFetch: C,
                onPush: M,
                onSelect: X
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          e("div", y_, [
            te[10] || (te[10] = e("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            e("div", w_, [
              e("label", k_, [
                Pe(e("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[0] || (te[0] = (Y) => $.value = Y),
                  value: "docker",
                  disabled: !t.worker.mode || t.worker.mode === "native"
                }, null, 8, b_), [
                  [Rt, $.value]
                ]),
                te[8] || (te[8] = e("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              e("label", __, [
                Pe(e("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[1] || (te[1] = (Y) => $.value = Y),
                  value: "native"
                }, null, 512), [
                  [Rt, $.value]
                ]),
                te[9] || (te[9] = e("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          e("div", $_, [
            te[11] || (te[11] = e("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Pe(e("input", {
              "onUpdate:modelValue": te[2] || (te[2] = (Y) => P.value = Y),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [kt, P.value]
            ])
          ]),
          O.value ? (s(), o("div", C_, [
            te[12] || (te[12] = e("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            e("div", x_, " ComfyUI: " + a(O.value.comfyui_version) + " • " + a(O.value.node_count) + " nodes • " + a(O.value.model_count) + " models • " + a(O.value.workflow_count) + " workflows ", 1)
          ])) : r("", !0),
          E.value && E.value.ahead > 0 ? (s(), o("div", S_, [
            te[14] || (te[14] = e("span", { class: "warning-icon" }, "⚠", -1)),
            e("div", I_, [
              e("strong", null, a(E.value.ahead) + " unpushed commit" + a(E.value.ahead !== 1 ? "s" : ""), 1),
              e("p", null, "Push to '" + a(f.value) + "' before deploying to include your latest changes.", 1)
            ]),
            _(J, {
              variant: "primary",
              size: "xs",
              loading: I.value === f.value,
              onClick: te[3] || (te[3] = (Y) => f.value && M(f.value))
            }, {
              default: l(() => [...te[13] || (te[13] = [
                h(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", E_, [
          _(J, {
            variant: "ghost",
            size: "sm",
            onClick: te[4] || (te[4] = (Y) => K.$emit("close"))
          }, {
            default: l(() => [...te[15] || (te[15] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          }),
          _(J, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !B.value || T.value,
            onClick: oe
          }, {
            default: l(() => [...te[16] || (te[16] = [
              h(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), R_ = /* @__PURE__ */ ne(T_, [["__scopeId", "data-v-c12720d3"]]), P_ = {
  key: 0,
  class: "worker-details-content"
}, M_ = { class: "section" }, D_ = { class: "detail-card" }, L_ = { class: "detail-row" }, z_ = { class: "detail-value mono" }, U_ = { class: "detail-row" }, N_ = {
  key: 0,
  class: "section"
}, O_ = { class: "detail-card" }, A_ = { class: "detail-row" }, F_ = { class: "detail-value" }, B_ = { class: "detail-row" }, V_ = { class: "detail-value capitalize" }, W_ = { class: "detail-row" }, G_ = { class: "detail-value mono" }, j_ = { class: "section" }, K_ = { class: "section-header" }, H_ = { class: "section-label" }, q_ = {
  key: 0,
  class: "loading-text"
}, Y_ = {
  key: 1,
  class: "empty-text"
}, J_ = {
  key: 2,
  class: "instances-list"
}, X_ = { class: "instance-info" }, Q_ = { class: "instance-name" }, Z_ = { class: "instance-port" }, e2 = { class: "instance-state" }, t2 = { class: "instance-actions" }, s2 = {
  key: 1,
  class: "section"
}, o2 = { class: "port-info" }, n2 = { class: "modal-actions" }, a2 = /* @__PURE__ */ se({
  __name: "WorkerDetailsModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getWorkerSystemInfo: u,
      getWorkerInstances: g,
      startWorkerInstance: m,
      stopWorkerInstance: p,
      terminateWorkerInstance: d,
      removeCustomWorker: v
    } = Ae(), w = y(null), k = y([]), b = y(null), f = y(!1), x = y(!1), I = y(null), $ = y(!1);
    function P(S) {
      switch (S) {
        case "running":
          return "●";
        case "stopped":
          return "○";
        case "deploying":
          return "⟳";
        case "error":
          return "✕";
        default:
          return "?";
      }
    }
    async function O() {
      if (n.worker.status === "online") {
        f.value = !0;
        try {
          w.value = await u(n.worker.name);
        } catch {
          i("toast", "Failed to load system info", "error");
        } finally {
          f.value = !1;
        }
      }
    }
    async function T() {
      if (n.worker.status === "online") {
        x.value = !0;
        try {
          const S = await g(n.worker.name);
          k.value = S.instances, b.value = {
            port_range: S.port_range,
            ports_available: S.ports_available
          };
        } catch {
          i("toast", "Failed to load instances", "error");
        } finally {
          x.value = !1;
        }
      }
    }
    async function E(S) {
      I.value = S;
      try {
        await m(n.worker.name, S), i("toast", "Instance starting...", "success"), await T();
      } catch (C) {
        i("toast", C instanceof Error ? C.message : "Failed to start instance", "error");
      } finally {
        I.value = null;
      }
    }
    async function q(S) {
      I.value = S;
      try {
        await p(n.worker.name, S), i("toast", "Instance stopped", "success"), await T();
      } catch (C) {
        i("toast", C instanceof Error ? C.message : "Failed to stop instance", "error");
      } finally {
        I.value = null;
      }
    }
    async function B(S) {
      I.value = S;
      try {
        await d(n.worker.name, S), i("toast", "Instance terminated", "success"), await T();
      } catch (C) {
        i("toast", C instanceof Error ? C.message : "Failed to terminate instance", "error");
      } finally {
        I.value = null;
      }
    }
    async function F() {
      $.value = !0;
      try {
        await v(n.worker.name), i("toast", `Worker '${n.worker.name}' removed`, "success"), i("refresh"), i("close");
      } catch (S) {
        i("toast", S instanceof Error ? S.message : "Failed to remove worker", "error");
      } finally {
        $.value = !1;
      }
    }
    return Ne(() => {
      O(), T();
    }), (S, C) => {
      var M;
      return s(), R(He, {
        title: `WORKER: ${((M = t.worker) == null ? void 0 : M.name) ?? "Loading..."}`,
        size: "md",
        onClose: C[1] || (C[1] = (X) => S.$emit("close"))
      }, {
        body: l(() => [
          t.worker ? (s(), o("div", P_, [
            e("div", M_, [
              C[4] || (C[4] = e("div", { class: "section-label" }, "CONNECTION", -1)),
              e("div", D_, [
                e("div", L_, [
                  C[2] || (C[2] = e("span", { class: "detail-label" }, "Host:", -1)),
                  e("span", z_, a(t.worker.host) + ":" + a(t.worker.port), 1)
                ]),
                e("div", U_, [
                  C[3] || (C[3] = e("span", { class: "detail-label" }, "Status:", -1)),
                  e("span", {
                    class: fe(["detail-value", "status", t.worker.status])
                  }, a(t.worker.status === "online" ? "● Online" : "○ Offline"), 3)
                ])
              ])
            ]),
            w.value ? (s(), o("div", N_, [
              C[8] || (C[8] = e("div", { class: "section-label" }, "SYSTEM INFO", -1)),
              e("div", O_, [
                e("div", A_, [
                  C[5] || (C[5] = e("span", { class: "detail-label" }, "GPU:", -1)),
                  e("span", F_, a(w.value.gpu.name) + " (" + a(Math.round(w.value.gpu.memory_total_mb / 1024)) + "GB)", 1)
                ]),
                e("div", B_, [
                  C[6] || (C[6] = e("span", { class: "detail-label" }, "Mode:", -1)),
                  e("span", V_, a(w.value.default_mode), 1)
                ]),
                e("div", W_, [
                  C[7] || (C[7] = e("span", { class: "detail-label" }, "Workspace:", -1)),
                  e("span", G_, a(w.value.workspace_path), 1)
                ])
              ])
            ])) : r("", !0),
            e("div", j_, [
              e("div", K_, [
                e("div", H_, "INSTANCES (" + a(k.value.length) + ")", 1),
                _(J, {
                  variant: "ghost",
                  size: "xs",
                  loading: x.value,
                  onClick: T
                }, {
                  default: l(() => [...C[9] || (C[9] = [
                    h(" Refresh ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ]),
              x.value && k.value.length === 0 ? (s(), o("div", q_, " Loading instances... ")) : k.value.length === 0 ? (s(), o("div", Y_, " No instances on this worker ")) : (s(), o("div", J_, [
                (s(!0), o(V, null, ie(k.value, (X) => (s(), o("div", {
                  key: X.id,
                  class: "instance-item"
                }, [
                  e("div", X_, [
                    e("span", {
                      class: fe(["instance-status", X.status])
                    }, a(P(X.status)), 3),
                    e("span", Q_, a(X.name), 1),
                    e("span", Z_, ":" + a(X.assigned_port), 1),
                    e("span", e2, a(X.status), 1)
                  ]),
                  e("div", t2, [
                    X.status === "running" ? (s(), R(J, {
                      key: 0,
                      variant: "ghost",
                      size: "xs",
                      loading: I.value === X.id,
                      onClick: (oe) => q(X.id)
                    }, {
                      default: l(() => [...C[10] || (C[10] = [
                        h(" Stop ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "onClick"])) : r("", !0),
                    X.status === "stopped" ? (s(), R(J, {
                      key: 1,
                      variant: "ghost",
                      size: "xs",
                      loading: I.value === X.id,
                      onClick: (oe) => E(X.id)
                    }, {
                      default: l(() => [...C[11] || (C[11] = [
                        h(" Start ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "onClick"])) : r("", !0),
                    _(J, {
                      variant: "ghost",
                      size: "xs",
                      loading: I.value === X.id,
                      onClick: (oe) => B(X.id)
                    }, {
                      default: l(() => [...C[12] || (C[12] = [
                        h(" Term ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ])
                ]))), 128))
              ]))
            ]),
            b.value ? (s(), o("div", s2, [
              e("div", o2, " PORT RANGE: " + a(b.value.port_range.start) + "-" + a(b.value.port_range.end) + " (" + a(b.value.ports_available) + " available) ", 1)
            ])) : r("", !0)
          ])) : r("", !0)
        ]),
        footer: l(() => [
          e("div", n2, [
            _(J, {
              variant: "ghost",
              size: "sm",
              onClick: C[0] || (C[0] = (X) => S.$emit("close"))
            }, {
              default: l(() => [...C[13] || (C[13] = [
                h(" Disconnect ", -1)
              ])]),
              _: 1
            }),
            _(J, {
              variant: "error",
              size: "sm",
              loading: $.value,
              onClick: F
            }, {
              default: l(() => [...C[14] || (C[14] = [
                h(" Remove Worker ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
}), l2 = /* @__PURE__ */ ne(a2, [["__scopeId", "data-v-d3219d9d"]]), i2 = { class: "custom-tab" }, r2 = { class: "section-header" }, d2 = { class: "section-actions" }, c2 = { class: "workers-content" }, u2 = {
  key: 0,
  class: "loading-state"
}, m2 = {
  key: 1,
  class: "empty-state"
}, v2 = {
  key: 2,
  class: "workers-list"
}, f2 = { class: "scan-icon" }, p2 = { class: "scan-message" }, g2 = /* @__PURE__ */ se({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(t, { emit: c }) {
    const n = c, {
      getCustomWorkers: i,
      addCustomWorker: u,
      removeCustomWorker: g,
      scanForWorkers: m
    } = Ae(), p = y([]), d = y([]), v = y(!1), w = y(!1), k = y(null), b = y(!1), f = y(!1), x = y(null), I = y(null), $ = y(null);
    async function P() {
      v.value = !0;
      try {
        const C = await i();
        p.value = C.workers;
      } catch (C) {
        n("toast", C instanceof Error ? C.message : "Failed to load workers", "error");
      } finally {
        v.value = !1;
      }
    }
    async function O() {
      w.value = !0, $.value = null;
      try {
        const C = await m(), M = C.discovered.filter(
          (X) => !p.value.some((oe) => oe.host === X.host && oe.port === X.port)
        );
        d.value = M, M.length > 0 ? f.value = !0 : C.discovered.length > 0 ? $.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : $.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (C) {
        n("toast", C instanceof Error ? C.message : "Network scan failed", "error");
      } finally {
        w.value = !1;
      }
    }
    async function T(C) {
      try {
        await u(C), n("toast", `Worker '${C.name}' added`, "success"), b.value = !1, await P();
      } catch (M) {
        n("toast", M instanceof Error ? M.message : "Failed to add worker", "error");
      }
    }
    async function E(C) {
      try {
        await u(C), n("toast", `Worker '${C.name}' added`, "success"), f.value = !1, await P();
      } catch (M) {
        n("toast", M instanceof Error ? M.message : "Failed to add worker", "error");
      }
    }
    async function q(C) {
      k.value = C;
      try {
        await g(C), n("toast", `Worker '${C}' removed`, "success"), await P();
      } catch (M) {
        n("toast", M instanceof Error ? M.message : "Failed to remove worker", "error");
      } finally {
        k.value = null;
      }
    }
    function B(C) {
      x.value = C;
    }
    function F(C) {
      I.value = C;
    }
    function S() {
      x.value = null, n("deployed");
    }
    return Ne(() => {
      P();
    }), (C, M) => (s(), o("div", i2, [
      e("div", r2, [
        M[10] || (M[10] = e("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        e("div", d2, [
          _(J, {
            variant: "ghost",
            size: "xs",
            loading: w.value,
            disabled: w.value,
            onClick: O
          }, {
            default: l(() => [...M[8] || (M[8] = [
              h(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          _(J, {
            variant: "secondary",
            size: "xs",
            onClick: M[0] || (M[0] = (X) => b.value = !0)
          }, {
            default: l(() => [...M[9] || (M[9] = [
              h(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      e("div", c2, [
        v.value && p.value.length === 0 ? (s(), o("div", u2, [...M[11] || (M[11] = [
          e("span", { class: "spinner" }, null, -1),
          h(" Loading workers... ", -1)
        ])])) : p.value.length === 0 ? (s(), o("div", m2, [...M[12] || (M[12] = [
          e("div", { class: "empty-card" }, [
            e("span", { class: "empty-text" }, "No workers registered yet"),
            e("p", { class: "empty-help" }, " To add a custom worker: "),
            e("ol", { class: "setup-steps" }, [
              e("li", null, [
                h("On your GPU machine, run:"),
                e("br"),
                e("code", null, "cg-deploy worker setup"),
                e("br"),
                e("code", null, "cg-deploy worker up --broadcast")
              ]),
              e("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (s(), o("div", v2, [
          (s(!0), o(V, null, ie(p.value, (X) => (s(), R(Pb, {
            key: X.name,
            worker: X,
            "is-action-loading": k.value === X.name,
            onDeploy: B,
            onManage: F,
            onRemove: q
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      $.value ? (s(), o("div", {
        key: 0,
        class: fe(["scan-result", $.value.type])
      }, [
        e("span", f2, a($.value.type === "success" ? "✓" : "ⓘ"), 1),
        e("span", p2, a($.value.message), 1),
        e("button", {
          class: "dismiss-btn",
          onClick: M[1] || (M[1] = (X) => $.value = null)
        }, "×")
      ], 2)) : r("", !0),
      f.value ? (s(), R(m_, {
        key: 1,
        workers: d.value,
        onClose: M[2] || (M[2] = (X) => f.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : r("", !0),
      b.value ? (s(), R(Hb, {
        key: 2,
        onClose: M[3] || (M[3] = (X) => b.value = !1),
        onAdd: T
      })) : r("", !0),
      x.value ? (s(), R(R_, {
        key: 3,
        worker: x.value,
        onClose: M[4] || (M[4] = (X) => x.value = null),
        onToast: M[5] || (M[5] = (X, oe) => n("toast", X, oe)),
        onDeployed: S
      }, null, 8, ["worker"])) : r("", !0),
      I.value ? (s(), R(l2, {
        key: 4,
        worker: I.value,
        onClose: M[6] || (M[6] = (X) => I.value = null),
        onToast: M[7] || (M[7] = (X, oe) => n("toast", X, oe)),
        onRefresh: P
      }, null, 8, ["worker"])) : r("", !0)
    ]));
  }
}), h2 = /* @__PURE__ */ ne(g2, [["__scopeId", "data-v-6ab67cb2"]]), Ms = "ComfyGit.Deploy.GitHubPAT";
function bo(t) {
  return t.startsWith("git@") || t.startsWith("ssh://");
}
function y2(t) {
  return t.startsWith("https://") || t.startsWith("http://");
}
function w2() {
  function t() {
    try {
      return localStorage.getItem(Ms);
    } catch {
      return null;
    }
  }
  function c(u) {
    try {
      localStorage.setItem(Ms, u);
    } catch (g) {
      console.error("[useGitAuth] Failed to save token:", g);
    }
  }
  function n() {
    try {
      localStorage.removeItem(Ms);
    } catch (u) {
      console.error("[useGitAuth] Failed to clear token:", u);
    }
  }
  function i() {
    const u = t();
    return u !== null && u.length > 0;
  }
  return {
    getToken: t,
    setToken: c,
    clearToken: n,
    hasToken: i,
    isRemoteSsh: bo,
    isRemoteHttps: y2
  };
}
const k2 = { class: "settings-content" }, b2 = { class: "settings-section" }, _2 = {
  key: 0,
  class: "ssh-warning"
}, $2 = { class: "form-row" }, C2 = { class: "token-wrapper" }, x2 = ["type"], S2 = { class: "result-icon" }, I2 = { class: "result-message" }, E2 = { class: "token-actions" }, T2 = /* @__PURE__ */ se({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(t, { emit: c }) {
    const n = c, { getToken: i, setToken: u, clearToken: g, hasToken: m } = w2(), { getRemotes: p, testGitAuth: d } = Ae(), v = y(""), w = y(!1), k = y(!1), b = y(null), f = y(!1), x = z(() => m());
    Ne(async () => {
      var T;
      const O = i();
      O && (v.value = O);
      try {
        const q = (T = (await p()).remotes) == null ? void 0 : T.find((B) => B.name === "origin");
        q && bo(q.url) && (f.value = !0);
      } catch {
      }
    });
    async function I() {
      if (v.value) {
        k.value = !0, b.value = null;
        try {
          const O = await d(v.value);
          b.value = {
            type: O.status === "success" ? "success" : "error",
            message: O.message
          };
        } catch (O) {
          b.value = {
            type: "error",
            message: O instanceof Error ? O.message : "Connection test failed"
          };
        } finally {
          k.value = !1;
        }
      }
    }
    function $() {
      v.value && (u(v.value), n("saved"), n("close"));
    }
    function P() {
      g(), v.value = "", b.value = null;
    }
    return (O, T) => (s(), R(He, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (E) => O.$emit("close"))
    }, {
      body: l(() => [
        e("div", k2, [
          e("div", b2, [
            T[8] || (T[8] = e("div", { class: "section-header" }, [
              e("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = e("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            f.value ? (s(), o("div", _2, [...T[3] || (T[3] = [
              e("span", { class: "warning-icon" }, "!", -1),
              e("div", { class: "warning-content" }, [
                e("strong", null, "SSH remote detected"),
                e("p", null, [
                  h("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  e("code", null, "git@github.com:..."),
                  h(" to "),
                  e("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : r("", !0),
            e("div", $2, [
              T[4] || (T[4] = e("label", { class: "form-label" }, "Personal Access Token", -1)),
              e("div", C2, [
                Pe(e("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (E) => v.value = E),
                  type: w.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, x2), [
                  [xs, v.value]
                ]),
                e("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (E) => w.value = !w.value)
                }, a(w.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = e("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            b.value ? (s(), o("div", {
              key: 1,
              class: fe(["test-result", b.value.type])
            }, [
              e("span", S2, a(b.value.type === "success" ? "✓" : "✕"), 1),
              e("span", I2, a(b.value.message), 1)
            ], 2)) : r("", !0),
            e("div", E2, [
              _(J, {
                variant: "ghost",
                size: "sm",
                loading: k.value,
                disabled: !v.value || k.value,
                onClick: I
              }, {
                default: l(() => [...T[6] || (T[6] = [
                  h(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              x.value ? (s(), R(J, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: l(() => [...T[7] || (T[7] = [
                  h(" Clear ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ])
          ])
        ])
      ]),
      footer: l(() => [
        _(J, {
          variant: "primary",
          size: "sm",
          disabled: !v.value,
          onClick: $
        }, {
          default: l(() => [...T[10] || (T[10] = [
            h(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), R2 = /* @__PURE__ */ ne(T2, [["__scopeId", "data-v-b21588ad"]]), P2 = /* @__PURE__ */ se({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(t, { emit: c }) {
    const n = c, {
      instances: i,
      isLoading: u,
      liveInstanceCount: g,
      refreshInstances: m,
      stopInstance: p,
      startInstance: d,
      terminateInstance: v,
      startPolling: w,
      stopPolling: k
    } = wo(), b = y(!1), f = y(!1), x = y("instances"), I = y(null), $ = y(null), P = z(() => [
      {
        id: "instances",
        label: "Instances",
        badge: g.value > 0 ? String(g.value) : void 0
      },
      {
        id: "runpod",
        label: "RunPod"
      },
      {
        id: "custom",
        label: "Custom"
      }
    ]);
    async function O(F) {
      I.value = F.id;
      try {
        await p(F), n("toast", "Instance stopped", "success");
      } catch (S) {
        n("toast", S instanceof Error ? S.message : "Failed to stop instance", "error");
      } finally {
        I.value = null;
      }
    }
    async function T(F) {
      I.value = F.id;
      try {
        await d(F), n("toast", "Instance starting...", "success");
      } catch (S) {
        n("toast", S instanceof Error ? S.message : "Failed to start instance", "error");
      } finally {
        I.value = null;
      }
    }
    function E(F) {
      $.value = F;
    }
    async function q() {
      const F = $.value;
      if (F) {
        $.value = null, I.value = F.id;
        try {
          await v(F), n("toast", "Instance terminated", "success");
        } catch (S) {
          n("toast", S instanceof Error ? S.message : "Failed to terminate instance", "error");
        } finally {
          I.value = null;
        }
      }
    }
    async function B() {
      await m(), x.value = "instances";
    }
    return Ne(() => {
      m(), w();
    }), Cs(() => {
      k();
    }), (F, S) => (s(), o(V, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: S[1] || (S[1] = (C) => b.value = !0)
          }, {
            actions: l(() => [
              _(J, {
                variant: "ghost",
                size: "xs",
                onClick: S[0] || (S[0] = (C) => f.value = !0)
              }, {
                default: l(() => [...S[10] || (S[10] = [
                  h(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          _(uo, {
            modelValue: x.value,
            "onUpdate:modelValue": S[2] || (S[2] = (C) => x.value = C),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: l(() => [
          x.value === "instances" ? (s(), R(hw, {
            key: 0,
            instances: Se(i),
            "is-loading": Se(u),
            "action-loading-id": I.value,
            onRefresh: Se(m),
            onStop: O,
            onStart: T,
            onTerminate: E
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : r("", !0),
          x.value === "runpod" ? (s(), R(fb, {
            key: 1,
            onToast: S[3] || (S[3] = (C, M) => n("toast", C, M)),
            onNavigate: S[4] || (S[4] = (C) => n("navigate", C)),
            onDeployed: B
          })) : r("", !0),
          x.value === "custom" ? (s(), R(h2, {
            key: 2,
            onToast: S[5] || (S[5] = (C, M) => n("toast", C, M)),
            onDeployed: B
          })) : r("", !0)
        ]),
        _: 1
      }),
      $.value ? (s(), R(Ws, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: S[6] || (S[6] = (C) => $.value = null)
      }, null, 8, ["message"])) : r("", !0),
      _($t, {
        show: b.value,
        title: "Deploy to Cloud",
        onClose: S[7] || (S[7] = (C) => b.value = !1)
      }, {
        content: l(() => [...S[11] || (S[11] = [
          e("div", { class: "deploy-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "What is Deploy?"),
              e("p", null, "Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).")
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "What gets deployed:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  h(" - All committed workflows")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  h(" - Installed automatically")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  h(" - Downloaded from sources (when available)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  h(" - Environment settings")
                ])
              ])
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "Cost Information:"),
              e("p", null, "You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      f.value ? (s(), R(R2, {
        key: 1,
        onClose: S[8] || (S[8] = (C) => f.value = !1),
        onSaved: S[9] || (S[9] = (C) => n("toast", "GitHub token saved", "success"))
      })) : r("", !0)
    ], 64));
  }
}), M2 = /* @__PURE__ */ ne(P2, [["__scopeId", "data-v-d4e32a10"]]), D2 = { class: "header-info" }, L2 = { class: "commit-hash" }, z2 = {
  key: 0,
  class: "commit-refs"
}, U2 = { class: "commit-message" }, N2 = { class: "commit-date" }, O2 = {
  key: 0,
  class: "loading"
}, A2 = {
  key: 1,
  class: "changes-section"
}, F2 = { class: "stats-row" }, B2 = { class: "stat" }, V2 = { class: "stat insertions" }, W2 = { class: "stat deletions" }, G2 = {
  key: 0,
  class: "change-group"
}, j2 = {
  key: 1,
  class: "change-group"
}, K2 = {
  key: 0,
  class: "version"
}, H2 = {
  key: 2,
  class: "change-group"
}, q2 = { class: "change-item" }, Y2 = /* @__PURE__ */ se({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ae(), i = y(null), u = y(!0), g = z(() => {
      if (!i.value) return !1;
      const p = i.value.changes.workflows;
      return p.added.length > 0 || p.modified.length > 0 || p.deleted.length > 0;
    }), m = z(() => {
      if (!i.value) return !1;
      const p = i.value.changes.nodes;
      return p.added.length > 0 || p.removed.length > 0;
    });
    return Ne(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (p, d) => (s(), R(He, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => p.$emit("close"))
    }, {
      header: l(() => {
        var v, w, k, b;
        return [
          e("div", D2, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", L2, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (b = (k = i.value) == null ? void 0 : k.refs) != null && b.length ? (s(), o("span", z2, [
              (s(!0), o(V, null, ie(i.value.refs, (f) => (s(), o("span", {
                key: f,
                class: "ref-badge"
              }, a(f), 1))), 128))
            ])) : r("", !0)
          ]),
          _(ye, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (f) => p.$emit("close"))
          }, {
            default: l(() => [...d[5] || (d[5] = [
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
      body: l(() => {
        var v, w;
        return [
          e("div", U2, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", N2, a(((w = i.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          u.value ? (s(), o("div", O2, "Loading details...")) : i.value ? (s(), o("div", A2, [
            e("div", F2, [
              e("span", B2, a(i.value.stats.files_changed) + " files", 1),
              e("span", V2, "+" + a(i.value.stats.insertions), 1),
              e("span", W2, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", G2, [
              _(cs, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, ie(i.value.changes.workflows.added, (k) => (s(), o("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(V, null, ie(i.value.changes.workflows.modified, (k) => (s(), o("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(V, null, ie(i.value.changes.workflows.deleted, (k) => (s(), o("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k), 1)
              ]))), 128))
            ])) : r("", !0),
            m.value ? (s(), o("div", j2, [
              _(cs, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, ie(i.value.changes.nodes.added, (k) => (s(), o("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k.name), 1),
                k.version ? (s(), o("span", K2, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(V, null, ie(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", H2, [
              _(cs, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", q2, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => p.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        _(ye, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => p.$emit("checkout", t.commit))
        }, {
          default: l(() => [...d[16] || (d[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), J2 = /* @__PURE__ */ ne(Y2, [["__scopeId", "data-v-d256ff6d"]]), X2 = { class: "base-textarea-wrapper" }, Q2 = ["value", "rows", "placeholder", "disabled", "maxlength"], Z2 = {
  key: 0,
  class: "base-textarea-count"
}, e$ = /* @__PURE__ */ se({
  __name: "BaseTextarea",
  props: {
    modelValue: {},
    rows: { default: 3 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    maxLength: {},
    showCharCount: { type: Boolean, default: !1 },
    submitOnEnter: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "ctrlEnter", "submit"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u(g) {
      g.shiftKey || g.ctrlKey || g.metaKey || n.submitOnEnter && (g.preventDefault(), i("submit"));
    }
    return (g, m) => (s(), o("div", X2, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: m[0] || (m[0] = (p) => g.$emit("update:modelValue", p.target.value)),
        onKeydown: [
          m[1] || (m[1] = wt(Be((p) => g.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          m[2] || (m[2] = wt(Be((p) => g.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          wt(u, ["enter"])
        ]
      }, null, 40, Q2),
      t.showCharCount && t.maxLength ? (s(), o("div", Z2, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Xs = /* @__PURE__ */ ne(e$, [["__scopeId", "data-v-c6d16c93"]]), t$ = ["checked", "disabled"], s$ = { class: "base-checkbox-box" }, o$ = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, n$ = {
  key: 0,
  class: "base-checkbox-label"
}, a$ = /* @__PURE__ */ se({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: fe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, t$),
      e("span", s$, [
        t.modelValue ? (s(), o("svg", o$, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", n$, [
        Re(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Qs = /* @__PURE__ */ ne(a$, [["__scopeId", "data-v-bf17c831"]]), l$ = { class: "popover-header" }, i$ = { class: "popover-body" }, r$ = {
  key: 0,
  class: "changes-summary"
}, d$ = {
  key: 0,
  class: "change-item"
}, c$ = {
  key: 1,
  class: "change-item"
}, u$ = {
  key: 2,
  class: "change-item"
}, m$ = {
  key: 3,
  class: "change-item"
}, v$ = {
  key: 4,
  class: "change-item"
}, f$ = {
  key: 5,
  class: "change-item"
}, p$ = {
  key: 1,
  class: "no-changes"
}, g$ = {
  key: 2,
  class: "loading"
}, h$ = {
  key: 3,
  class: "issues-error"
}, y$ = { class: "error-header" }, w$ = { class: "error-title" }, k$ = { class: "issues-list" }, b$ = { class: "message-section" }, _$ = { class: "popover-footer" }, $$ = {
  key: 1,
  class: "commit-popover"
}, C$ = { class: "popover-header" }, x$ = { class: "popover-body" }, S$ = {
  key: 0,
  class: "changes-summary"
}, I$ = {
  key: 0,
  class: "change-item"
}, E$ = {
  key: 1,
  class: "change-item"
}, T$ = {
  key: 2,
  class: "change-item"
}, R$ = {
  key: 3,
  class: "change-item"
}, P$ = {
  key: 4,
  class: "change-item"
}, M$ = {
  key: 5,
  class: "change-item"
}, D$ = {
  key: 1,
  class: "no-changes"
}, L$ = {
  key: 2,
  class: "loading"
}, z$ = {
  key: 3,
  class: "issues-error"
}, U$ = { class: "error-header" }, N$ = { class: "error-title" }, O$ = { class: "issues-list" }, A$ = { class: "message-section" }, F$ = { class: "popover-footer" }, B$ = /* @__PURE__ */ se({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: u } = Ae(), g = y(""), m = y(!1), p = y(!1), d = z(() => {
      if (!n.status) return !1;
      const x = n.status.workflows;
      return x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || n.status.has_changes;
    }), v = z(() => {
      if (!n.status) return !1;
      const x = n.status.workflows, I = n.status.git_changes;
      return x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || I.nodes_added.length > 0 || I.nodes_removed.length > 0;
    }), w = z(() => {
      var x;
      return (x = n.status) != null && x.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (I) => I.has_issues && (I.sync_state === "new" || I.sync_state === "modified")
      ) : [];
    }), k = z(() => w.value.length > 0), b = z(() => k.value && !p.value);
    async function f() {
      var x, I, $;
      if (!(k.value && !p.value) && !(!d.value || !g.value.trim() || m.value)) {
        m.value = !0;
        try {
          const P = await u(g.value.trim(), p.value);
          if (P.status === "success") {
            const O = `Committed: ${((x = P.summary) == null ? void 0 : x.new) || 0} new, ${((I = P.summary) == null ? void 0 : I.modified) || 0} modified, ${(($ = P.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: O });
          } else P.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : P.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: P.message || "Commit failed" });
        } catch (P) {
          i("committed", { success: !1, message: P instanceof Error ? P.message : "Commit failed" });
        } finally {
          m.value = !1;
        }
      }
    }
    return (x, I) => t.asModal ? (s(), R(et, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: I[5] || (I[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: I[4] || (I[4] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", l$, [
            I[11] || (I[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: I[0] || (I[0] = ($) => i("close"))
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
          e("div", i$, [
            t.status && d.value ? (s(), o("div", r$, [
              t.status.workflows.new.length ? (s(), o("div", d$, [
                I[12] || (I[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", c$, [
                I[13] || (I[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", u$, [
                I[14] || (I[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", m$, [
                I[15] || (I[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", v$, [
                I[16] || (I[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (s(), o("div", f$, [...I[17] || (I[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", p$, " No changes to commit ")) : (s(), o("div", g$, " Loading... ")),
            k.value ? (s(), o("div", h$, [
              e("div", y$, [
                I[18] || (I[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", w$, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", k$, [
                (s(!0), o(V, null, ie(w.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  h(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              _(Qs, {
                modelValue: p.value,
                "onUpdate:modelValue": I[1] || (I[1] = ($) => p.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...I[19] || (I[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", b$, [
              _(Xs, {
                modelValue: g.value,
                "onUpdate:modelValue": I[2] || (I[2] = ($) => g.value = $),
                placeholder: b.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || m.value || b.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: f,
                onSubmit: f
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", _$, [
            _(ye, {
              variant: "secondary",
              onClick: I[3] || (I[3] = ($) => i("close"))
            }, {
              default: l(() => [...I[20] || (I[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: p.value ? "danger" : "primary",
              disabled: !d.value || !g.value.trim() || m.value || b.value,
              loading: m.value,
              onClick: f
            }, {
              default: l(() => [
                h(a(m.value ? "Committing..." : p.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", $$, [
      e("div", C$, [
        I[22] || (I[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: I[6] || (I[6] = ($) => i("close"))
        }, [...I[21] || (I[21] = [
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
      e("div", x$, [
        t.status && d.value ? (s(), o("div", S$, [
          t.status.workflows.new.length ? (s(), o("div", I$, [
            I[23] || (I[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", E$, [
            I[24] || (I[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", T$, [
            I[25] || (I[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", R$, [
            I[26] || (I[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", P$, [
            I[27] || (I[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (s(), o("div", M$, [...I[28] || (I[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", D$, " No changes to commit ")) : (s(), o("div", L$, " Loading... ")),
        k.value ? (s(), o("div", z$, [
          e("div", U$, [
            I[29] || (I[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", N$, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", O$, [
            (s(!0), o(V, null, ie(w.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              h(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          _(Qs, {
            modelValue: p.value,
            "onUpdate:modelValue": I[7] || (I[7] = ($) => p.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...I[30] || (I[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", A$, [
          _(Xs, {
            modelValue: g.value,
            "onUpdate:modelValue": I[8] || (I[8] = ($) => g.value = $),
            placeholder: b.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || m.value || b.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: f,
            onSubmit: f
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", F$, [
        _(ye, {
          variant: "secondary",
          onClick: I[9] || (I[9] = ($) => i("close"))
        }, {
          default: l(() => [...I[31] || (I[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _(ye, {
          variant: p.value ? "danger" : "primary",
          disabled: !d.value || !g.value.trim() || m.value || b.value,
          loading: m.value,
          onClick: f
        }, {
          default: l(() => [
            h(a(m.value ? "Committing..." : p.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), _o = /* @__PURE__ */ ne(B$, [["__scopeId", "data-v-d0fe6172"]]), V$ = { class: "modal-header" }, W$ = { class: "modal-body" }, G$ = { class: "switch-message" }, j$ = { class: "switch-details" }, K$ = { class: "modal-actions" }, H$ = /* @__PURE__ */ se({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), R(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", V$, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", W$, [
            e("p", G$, [
              n[6] || (n[6] = h(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = h(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = h("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", j$, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", K$, [
            _(J, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(J, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), q$ = /* @__PURE__ */ ne(H$, [["__scopeId", "data-v-e9c5253e"]]), Y$ = {
  key: 0,
  class: "modal-overlay"
}, J$ = { class: "modal-content" }, X$ = { class: "modal-body" }, Q$ = { class: "progress-info" }, Z$ = { class: "progress-percentage" }, eC = { class: "progress-state" }, tC = { class: "switch-steps" }, sC = { class: "step-icon" }, oC = { class: "step-label" }, nC = /* @__PURE__ */ se({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = z(() => {
      const g = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || g[c.state] || c.state;
    }), i = z(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), u = z(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = g.findIndex((p) => p.state === c.state);
      return g.map((p, d) => {
        let v = "pending", w = "○";
        return d < m ? (v = "completed", w = "✓") : d === m && (v = "active", w = "⟳"), {
          ...p,
          status: v,
          icon: w
        };
      });
    });
    return (g, m) => (s(), R(et, { to: "body" }, [
      t.show ? (s(), o("div", Y$, [
        e("div", J$, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", X$, [
            _(Ss, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Q$, [
              e("div", Z$, a(t.progress) + "%", 1),
              e("div", eC, a(n.value), 1)
            ]),
            e("div", tC, [
              (s(!0), o(V, null, ie(u.value, (p) => (s(), o("div", {
                key: p.state,
                class: fe(["switch-step", p.status])
              }, [
                e("span", sC, a(p.icon), 1),
                e("span", oC, a(p.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), aC = /* @__PURE__ */ ne(nC, [["__scopeId", "data-v-768a5078"]]), lC = { class: "modal-header" }, iC = { class: "modal-body" }, rC = {
  key: 0,
  class: "node-section"
}, dC = { class: "node-list" }, cC = {
  key: 1,
  class: "node-section"
}, uC = { class: "node-list" }, mC = { class: "modal-actions" }, vC = /* @__PURE__ */ se({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), R(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", lC, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", iC, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", rC, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", dC, [
                (s(!0), o(V, null, ie(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", cC, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", uC, [
                (s(!0), o(V, null, ie(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", mC, [
            _(J, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(J, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), fC = /* @__PURE__ */ ne(vC, [["__scopeId", "data-v-7cad7518"]]), pC = [
  {
    id: "sponsor",
    url: "https://github.com/sponsors/comfyhub-org",
    title: "Sponsor ComfyHub",
    ariaLabel: "Sponsor ComfyHub on GitHub",
    iconPath: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z",
    label: "Sponsor"
  },
  {
    id: "discord",
    url: "https://discord.gg/2h5rSTeh6Y",
    title: "Join Discord",
    ariaLabel: "Join ComfyHub Discord",
    iconPath: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.07 8.735 8.735 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.44-1.249.594a.05.05 0 0 0-.027.07c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zM5.347 10.64c-.79 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.807 0 1.451.733 1.44 1.613 0 .888-.637 1.612-1.44 1.612zm5.316 0c-.788 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.808 0 1.451.733 1.44 1.613 0 .888-.632 1.612-1.44 1.612z"
  },
  {
    id: "x",
    url: "https://x.com/akatz_ai",
    title: "Follow on X",
    ariaLabel: "Follow on X",
    iconPath: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z"
  },
  {
    id: "github",
    url: "https://github.com/comfyhub-org/comfygit",
    title: "View on GitHub",
    ariaLabel: "View ComfyGit on GitHub",
    iconPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  },
  {
    id: "docs",
    url: "https://docs.comfyhub.org/comfygit/",
    title: "Documentation",
    ariaLabel: "View ComfyGit Documentation",
    iconPath: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }
], gC = "v0.0.4", hC = "Akatz", yC = { class: "social-buttons" }, wC = ["title", "aria-label", "onClick"], kC = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, bC = ["d"], _C = ["title", "aria-label", "onClick"], $C = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, CC = ["d"], xC = /* @__PURE__ */ se({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", yC, [
      (s(!0), o(V, null, ie(Se(pC), (u) => (s(), o(V, {
        key: u.id
      }, [
        u.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: u.title,
          "aria-label": u.ariaLabel,
          onClick: (g) => c(u.url)
        }, [
          h(a(u.label) + " ", 1),
          (s(), o("svg", kC, [
            e("path", {
              d: u.iconPath
            }, null, 8, bC)
          ]))
        ], 8, wC)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: u.title,
          "aria-label": u.ariaLabel,
          onClick: (g) => c(u.url)
        }, [
          (s(), o("svg", $C, [
            e("path", {
              d: u.iconPath
            }, null, 8, CC)
          ]))
        ], 8, _C))
      ], 64))), 128))
    ]));
  }
}), $o = /* @__PURE__ */ ne(xC, [["__scopeId", "data-v-4f846342"]]), SC = { class: "footer-info" }, IC = { class: "version" }, EC = { class: "made-by" }, TC = /* @__PURE__ */ se({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", SC, [
      e("span", IC, a(Se(gC)), 1),
      e("span", EC, [
        n[0] || (n[0] = h(" made with ", -1)),
        n[1] || (n[1] = e("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        h(" by " + a(Se(hC)), 1)
      ])
    ]));
  }
}), Co = /* @__PURE__ */ ne(TC, [["__scopeId", "data-v-8bc3db0a"]]), RC = /* @__PURE__ */ se({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = y(null);
    async function i() {
      var g;
      await ((g = n.value) == null ? void 0 : g.saveSettings());
    }
    function u() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (g, m) => (s(), R(He, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: m[1] || (m[1] = (p) => g.$emit("close"))
    }, {
      body: l(() => [
        _(co, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: u
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var p;
        return [
          _(ye, {
            variant: "primary",
            disabled: !((p = n.value) != null && p.hasChanges),
            onClick: i
          }, {
            default: l(() => [...m[2] || (m[2] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          _(ye, {
            variant: "secondary",
            onClick: m[0] || (m[0] = (d) => g.$emit("close"))
          }, {
            default: l(() => [...m[3] || (m[3] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), PC = /* @__PURE__ */ ne(RC, [["__scopeId", "data-v-fac00ae7"]]), MC = { class: "header-actions" }, DC = {
  key: 0,
  class: "wizard-step"
}, LC = { class: "form-field" }, zC = ["placeholder"], UC = {
  key: 0,
  class: "form-error"
}, NC = { class: "form-field form-field--checkbox" }, OC = { class: "form-checkbox" }, AC = {
  key: 0,
  class: "form-field"
}, FC = ["placeholder"], BC = {
  key: 0,
  class: "form-info"
}, VC = {
  key: 1,
  class: "form-suggestion"
}, WC = {
  key: 2,
  class: "form-error"
}, GC = {
  key: 3,
  class: "form-info"
}, jC = {
  key: 1,
  class: "wizard-step"
}, KC = {
  key: 0,
  class: "progress-check-loading"
}, HC = {
  key: 0,
  class: "cli-warning"
}, qC = { class: "cli-warning-header" }, YC = {
  key: 1,
  class: "env-landing"
}, JC = { class: "env-list" }, XC = ["value"], QC = { class: "env-name" }, ZC = {
  key: 2,
  class: "env-create"
}, e3 = { class: "form-field" }, t3 = { class: "form-field" }, s3 = ["value"], o3 = { class: "form-field" }, n3 = ["disabled"], a3 = ["value"], l3 = { class: "form-field" }, i3 = ["value"], r3 = { class: "form-field form-field--checkbox" }, d3 = { class: "form-checkbox" }, c3 = {
  key: 0,
  class: "form-error"
}, u3 = {
  key: 1,
  class: "env-creating"
}, m3 = { class: "creating-intro" }, v3 = {
  key: 3,
  class: "env-import"
}, f3 = { class: "wizard-footer" }, p3 = { class: "wizard-footer-actions" }, Jt = 10, g3 = 600 * 1e3, Zs = 1800 * 1e3, h3 = /* @__PURE__ */ se({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {},
    initialStep: {},
    existingEnvironments: {},
    cliInstalled: { type: Boolean },
    setupState: {},
    workspacePath: {}
  },
  emits: ["complete", "close", "switch-environment", "environment-created-no-switch"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      initializeWorkspace: u,
      getInitializeProgress: g,
      validatePath: m,
      createEnvironment: p,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: w
    } = Ae(), k = y(n.initialStep || 1), b = y(null), f = y("landing"), x = y(!1), I = y(!1), $ = y(!1), P = y(!1), O = y(null), T = y(n.initialStep === 2), E = y(n.defaultPath), q = y(!!n.detectedModelsDir), B = y(n.detectedModelsDir || ""), F = y(null), S = y(null), C = y(null), M = y(null), X = y("my-new-env"), oe = y(fo), K = y("latest"), te = y(po), Y = y(!0), U = y(null), N = y(null), D = y([{ tag_name: "latest", name: "Latest", published_at: "" }]), ve = y(!1), ae = y(!1), be = y(!1), Ce = y({ progress: 0, message: "" }), Le = y({ progress: 0, message: "" }), Ue = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], me = y(0), ge = y(null), Me = y(0), ce = y(null), Z = z(() => {
      var L, G;
      const ue = (L = E.value) == null ? void 0 : L.trim(), Q = !F.value, ee = !q.value || !S.value && ((G = B.value) == null ? void 0 : G.trim());
      return ue && Q && ee;
    }), De = z(() => {
      var ue;
      return (ue = X.value) == null ? void 0 : ue.trim();
    }), pe = z(() => !!(k.value === 2 || N.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Je = z(() => N.value || n.workspacePath || null);
    async function tt() {
      var ue;
      if (F.value = null, !!((ue = E.value) != null && ue.trim()))
        try {
          const Q = await m({ path: E.value, type: "workspace" });
          Q.valid || (F.value = Q.error || "Invalid path");
        } catch (Q) {
          F.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function st() {
      var ue;
      if (S.value = null, C.value = null, M.value = null, !!((ue = B.value) != null && ue.trim()))
        try {
          const Q = await m({ path: B.value, type: "models" });
          if (Q.valid)
            M.value = Q.model_count ?? null;
          else if (S.value = Q.error || "Invalid path", Q.suggestion) {
            C.value = Q.suggestion, B.value = Q.suggestion, S.value = null;
            const ee = await m({ path: Q.suggestion, type: "models" });
            ee.valid && (M.value = ee.model_count ?? null);
          }
        } catch (Q) {
          S.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function Te() {
      var ue, Q, ee, L, G;
      if (F.value = null, S.value = null, await tt(), (ue = F.value) != null && ue.includes("already exists")) {
        F.value = null, N.value = ((Q = E.value) == null ? void 0 : Q.trim()) || n.defaultPath, k.value = 2, qe();
        return;
      }
      if (!F.value && !(q.value && ((ee = B.value) != null && ee.trim()) && (await st(), S.value))) {
        ae.value = !0;
        try {
          await u({
            workspace_path: ((L = E.value) == null ? void 0 : L.trim()) || n.defaultPath,
            models_directory: q.value && ((G = B.value) == null ? void 0 : G.trim()) || null
          }), me.value = 0, ge.value = Date.now();
          const le = setInterval(async () => {
            var xe;
            if (ge.value && Date.now() - ge.value > g3) {
              clearInterval(le), ae.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ve = await g();
              if (me.value = 0, Ve.state === "idle" && ae.value) {
                clearInterval(le), ae.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ce.value = { progress: Ve.progress, message: Ve.message }, Ve.state === "complete" ? (clearInterval(le), ae.value = !1, N.value = ((xe = E.value) == null ? void 0 : xe.trim()) || n.defaultPath, k.value = 2, qe()) : Ve.state === "error" && (clearInterval(le), ae.value = !1, F.value = Ve.error || "Workspace creation failed");
            } catch (Ve) {
              me.value++, console.warn(`Polling failure ${me.value}/${Jt}:`, Ve), me.value >= Jt && (clearInterval(le), ae.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (le) {
          ae.value = !1, F.value = le instanceof Error ? le.message : "Failed to create workspace";
        }
      }
    }
    async function Xe() {
      be.value = !0, U.value = null;
      try {
        const ue = {
          name: X.value.trim() || "my-new-env",
          python_version: oe.value,
          comfyui_version: K.value,
          torch_backend: te.value,
          switch_after: Y.value,
          workspace_path: N.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await p(ue)).status === "started") {
          Me.value = 0, ce.value = Date.now();
          const ee = setInterval(async () => {
            if (ce.value && Date.now() - ce.value > Zs) {
              clearInterval(ee), be.value = !1, U.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const L = await d();
              if (Me.value = 0, L.state === "idle" && be.value) {
                clearInterval(ee), be.value = !1, U.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Le.value = {
                progress: L.progress ?? 0,
                message: L.message,
                phase: L.phase
              }, L.state === "complete") {
                clearInterval(ee), be.value = !1;
                const G = L.environment_name || ue.name;
                Y.value ? i("complete", G, N.value) : (f.value = "landing", i("environment-created-no-switch", G));
              } else L.state === "error" && (clearInterval(ee), be.value = !1, U.value = L.error || "Environment creation failed");
            } catch (L) {
              Me.value++, console.warn(`Polling failure ${Me.value}/${Jt}:`, L), Me.value >= Jt && (clearInterval(ee), be.value = !1, U.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ue) {
        be.value = !1, U.value = ue instanceof Error ? ue.message : "Unknown error";
      }
    }
    async function qe() {
      ve.value = !0;
      try {
        D.value = await w();
      } catch (ue) {
        console.error("Failed to load ComfyUI releases:", ue);
      } finally {
        ve.value = !1;
      }
    }
    function Qe() {
      b.value && i("switch-environment", b.value, N.value);
    }
    function mt() {
      f.value === "create" || f.value === "import" ? f.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function $e(ue, Q) {
      I.value = !1, Q ? i("complete", ue, N.value) : (i("environment-created-no-switch", ue), f.value = "landing");
    }
    function je() {
    }
    Ne(async () => {
      if (n.detectedModelsDir && (B.value = n.detectedModelsDir), n.workspacePath && (N.value = n.workspacePath), k.value === 2) {
        qe();
        const ue = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await it(), clearTimeout(ue), T.value = !1;
      }
    });
    async function it() {
      try {
        const ue = await d();
        if (console.log("[ComfyGit] Create progress check:", ue.state, ue), ue.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ue.environment_name), f.value = "create", be.value = !0, X.value = ue.environment_name || "my-new-env", Le.value = {
            progress: ue.progress ?? 0,
            message: ue.message,
            phase: ue.phase
          }, Ye();
          return;
        }
      } catch (ue) {
        console.log("[ComfyGit] Create progress check failed:", ue);
      }
      try {
        const ue = await v();
        console.log("[ComfyGit] Import progress check:", ue.state, ue), ue.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ue.environment_name), O.value = {
          message: ue.message || "Importing...",
          phase: ue.phase || "",
          progress: ue.progress ?? 0,
          environmentName: ue.environment_name || ""
        }, P.value = !0, f.value = "import", I.value = !0);
      } catch (ue) {
        console.log("[ComfyGit] Import progress check failed:", ue);
      }
    }
    async function Ye() {
      Me.value = 0, ce.value = Date.now();
      let ue = null;
      const Q = async () => {
        if (ce.value && Date.now() - ce.value > Zs)
          return ue && clearInterval(ue), be.value = !1, U.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const L = await d();
          if (Me.value = 0, L.state === "idle" && be.value)
            return ue && clearInterval(ue), be.value = !1, U.value = "Environment creation was interrupted. Please try again.", !1;
          if (Le.value = {
            progress: L.progress ?? 0,
            message: L.message,
            phase: L.phase
          }, L.state === "complete") {
            ue && clearInterval(ue), be.value = !1;
            const G = L.environment_name || X.value;
            return i("complete", G, N.value), !1;
          } else if (L.state === "error")
            return ue && clearInterval(ue), be.value = !1, U.value = L.error || "Environment creation failed", !1;
          return !0;
        } catch (L) {
          return Me.value++, console.warn(`Polling failure ${Me.value}/${Jt}:`, L), Me.value >= Jt ? (ue && clearInterval(ue), be.value = !1, U.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Q() && (ue = setInterval(async () => {
        !await Q() && ue && clearInterval(ue);
      }, 2e3));
    }
    return (ue, Q) => (s(), o(V, null, [
      _(He, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (ee) => ue.$emit("close"))
      }, {
        header: l(() => [
          Q[20] || (Q[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", MC, [
            _($o),
            Q[19] || (Q[19] = e("span", { class: "header-divider" }, null, -1)),
            pe.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Q[0] || (Q[0] = (ee) => x.value = !0)
            }, [...Q[17] || (Q[17] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                e("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                e("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : r("", !0),
            e("button", {
              class: "icon-btn",
              onClick: Q[1] || (Q[1] = (ee) => ue.$emit("close")),
              title: "Close"
            }, [...Q[18] || (Q[18] = [
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
        body: l(() => {
          var ee;
          return [
            k.value === 1 ? (s(), o("div", DC, [
              Q[24] || (Q[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", LC, [
                Q[21] || (Q[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Pe(e("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (L) => E.value = L),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, zC), [
                  [kt, E.value]
                ]),
                F.value ? (s(), o("p", UC, a(F.value), 1)) : r("", !0)
              ]),
              e("div", NC, [
                e("label", OC, [
                  Pe(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (L) => q.value = L)
                  }, null, 512), [
                    [ks, q.value]
                  ]),
                  Q[22] || (Q[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (s(), o("div", AC, [
                Q[23] || (Q[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Pe(e("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (L) => B.value = L),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, FC), [
                  [kt, B.value]
                ]),
                t.detectedModelsDir && !B.value ? (s(), o("p", BC, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                C.value ? (s(), o("p", VC, " Did you mean: " + a(C.value), 1)) : r("", !0),
                S.value ? (s(), o("p", WC, a(S.value), 1)) : r("", !0),
                M.value !== null && !S.value ? (s(), o("p", GC, " Found " + a(M.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              ae.value ? (s(), R($s, {
                key: 1,
                progress: Ce.value.progress,
                message: Ce.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", jC, [
              T.value ? (s(), o("div", KC, [...Q[25] || (Q[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(V, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", HC, [
                  e("div", qC, [
                    Q[27] || (Q[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (L) => $.value = !0),
                      title: "Dismiss"
                    }, [...Q[26] || (Q[26] = [
                      e("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  Q[29] || (Q[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Q[30] || (Q[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : r("", !0),
                f.value === "landing" ? (s(), o("div", YC, [
                  Q[34] || (Q[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: Q[6] || (Q[6] = (L) => f.value = "create")
                  }, [...Q[31] || (Q[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: Q[7] || (Q[7] = (L) => {
                      P.value = !1, f.value = "import";
                    })
                  }, [...Q[32] || (Q[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (ee = n.existingEnvironments) != null && ee.length ? (s(), o(V, { key: 0 }, [
                    Q[33] || (Q[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", JC, [
                      (s(!0), o(V, null, ie(n.existingEnvironments, (L) => (s(), o("label", {
                        key: L,
                        class: fe(["env-option", { selected: b.value === L }])
                      }, [
                        Pe(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: L,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (G) => b.value = G)
                        }, null, 8, XC), [
                          [Rt, b.value]
                        ]),
                        e("span", QC, a(L), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : f.value === "create" ? (s(), o("div", ZC, [
                  be.value ? (s(), o("div", u3, [
                    e("p", m3, [
                      Q[41] || (Q[41] = h(" Creating environment ", -1)),
                      e("strong", null, a(X.value), 1),
                      Q[42] || (Q[42] = h("... ", -1))
                    ]),
                    _($s, {
                      progress: Le.value.progress,
                      message: Le.value.message,
                      "current-phase": Le.value.phase,
                      "show-steps": !0,
                      steps: Ue
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(V, { key: 0 }, [
                    Q[40] || (Q[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", e3, [
                      Q[35] || (Q[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Pe(e("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (L) => X.value = L),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [kt, X.value]
                      ])
                    ]),
                    e("div", t3, [
                      Q[36] || (Q[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Pe(e("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (L) => oe.value = L),
                        class: "form-select"
                      }, [
                        (s(!0), o(V, null, ie(Se(vo), (L) => (s(), o("option", {
                          key: L,
                          value: L
                        }, a(L), 9, s3))), 128))
                      ], 512), [
                        [Dt, oe.value]
                      ])
                    ]),
                    e("div", o3, [
                      Q[37] || (Q[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Pe(e("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (L) => K.value = L),
                        class: "form-select",
                        disabled: ve.value
                      }, [
                        (s(!0), o(V, null, ie(D.value, (L) => (s(), o("option", {
                          key: L.tag_name,
                          value: L.tag_name
                        }, a(L.name), 9, a3))), 128))
                      ], 8, n3), [
                        [Dt, K.value]
                      ])
                    ]),
                    e("div", l3, [
                      Q[38] || (Q[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Pe(e("select", {
                        "onUpdate:modelValue": Q[12] || (Q[12] = (L) => te.value = L),
                        class: "form-select"
                      }, [
                        (s(!0), o(V, null, ie(Se(Gs), (L) => (s(), o("option", {
                          key: L,
                          value: L
                        }, a(L) + a(L === "auto" ? " (detect GPU)" : ""), 9, i3))), 128))
                      ], 512), [
                        [Dt, te.value]
                      ])
                    ]),
                    e("div", r3, [
                      e("label", d3, [
                        Pe(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Q[13] || (Q[13] = (L) => Y.value = L)
                        }, null, 512), [
                          [ks, Y.value]
                        ]),
                        Q[39] || (Q[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    U.value ? (s(), o("div", c3, a(U.value), 1)) : r("", !0)
                  ], 64))
                ])) : f.value === "import" ? (s(), o("div", v3, [
                  _(yo, {
                    "workspace-path": N.value,
                    "resume-import": P.value,
                    "initial-progress": O.value ?? void 0,
                    onImportComplete: $e,
                    onImportStarted: Q[14] || (Q[14] = (L) => I.value = !0),
                    onSourceCleared: je
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", f3, [
            _(Co),
            e("div", p3, [
              k.value === 1 ? (s(), R(ye, {
                key: 0,
                variant: "primary",
                disabled: !Z.value || ae.value,
                onClick: Te
              }, {
                default: l(() => [
                  h(a(ae.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(V, { key: 1 }, [
                !be.value && !I.value && (f.value !== "landing" || n.setupState === "no_workspace" && !N.value) ? (s(), R(ye, {
                  key: 0,
                  variant: "secondary",
                  onClick: mt
                }, {
                  default: l(() => [...Q[44] || (Q[44] = [
                    h(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                f.value === "create" ? (s(), R(ye, {
                  key: 1,
                  variant: "primary",
                  disabled: !De.value || be.value,
                  onClick: Xe
                }, {
                  default: l(() => [
                    h(a(be.value ? "Creating..." : Y.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                f.value === "landing" && b.value ? (s(), R(ye, {
                  key: 2,
                  variant: "primary",
                  onClick: Qe
                }, {
                  default: l(() => [
                    h(" Switch to " + a(b.value), 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ], 64)) : r("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      x.value ? (s(), R(PC, {
        key: 0,
        "workspace-path": Je.value,
        onClose: Q[16] || (Q[16] = (ee) => x.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), y3 = /* @__PURE__ */ ne(h3, [["__scopeId", "data-v-9a9aadc0"]]), w3 = { class: "comfygit-panel" }, k3 = { class: "panel-header" }, b3 = { class: "header-left" }, _3 = {
  key: 0,
  class: "header-info"
}, $3 = { class: "header-actions" }, C3 = { class: "env-switcher" }, x3 = {
  key: 0,
  class: "header-info"
}, S3 = { class: "branch-name" }, I3 = { class: "panel-main" }, E3 = { class: "sidebar" }, T3 = { class: "sidebar-content" }, R3 = { class: "sidebar-section" }, P3 = { class: "sidebar-section" }, M3 = { class: "sidebar-section" }, D3 = {
  key: 0,
  class: "sidebar-badge"
}, L3 = { class: "sidebar-footer" }, z3 = { class: "content-area" }, U3 = {
  key: 0,
  class: "error-message"
}, N3 = {
  key: 1,
  class: "loading"
}, O3 = { class: "dialog-content env-selector-dialog" }, A3 = { class: "dialog-header" }, F3 = { class: "dialog-body" }, B3 = { class: "env-list" }, V3 = { class: "env-info" }, W3 = { class: "env-name-row" }, G3 = { class: "env-indicator" }, j3 = { class: "env-name" }, K3 = {
  key: 0,
  class: "env-branch"
}, H3 = {
  key: 1,
  class: "current-label"
}, q3 = { class: "env-stats" }, Y3 = ["onClick"], J3 = { class: "toast-container" }, X3 = { class: "toast-message" }, Q3 = /* @__PURE__ */ se({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: u,
      getHistory: g,
      getBranches: m,
      checkout: p,
      createBranch: d,
      switchBranch: v,
      deleteBranch: w,
      getEnvironments: k,
      switchEnvironment: b,
      getSwitchProgress: f,
      deleteEnvironment: x,
      syncEnvironmentManually: I,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = Ae(), O = no(), { liveInstanceCount: T } = wo({ autoStart: !0 }), E = y(null), q = y([]), B = y([]), F = y([]), S = z(() => F.value.find((H) => H.is_current)), C = y(null), M = y(!1), X = y(1), oe = z(() => {
      var H;
      return ((H = C.value) == null ? void 0 : H.state) || "managed";
    }), K = y(!1), te = y(null), Y = y(null), U = y(!1), N = y(null), D = y(null), ve = y(null), ae = y(!1), be = y(!1), Ce = y(""), Le = y(null), Ue = y({ state: "idle", progress: 0, message: "" });
    let me = null, ge = null;
    const Me = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ce = n.initialView ? Me[n.initialView] : null, Z = y((ce == null ? void 0 : ce.view) ?? "status"), De = y((ce == null ? void 0 : ce.section) ?? "this-env");
    function pe(H, A) {
      Z.value = H, De.value = A;
    }
    function Je(H) {
      const he = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[H];
      he && pe(he.view, he.section);
    }
    function tt() {
      pe("branches", "this-env");
    }
    function st() {
      i("close"), setTimeout(() => {
        var A;
        const H = document.querySelectorAll("button.comfyui-button");
        for (const he of H)
          if (((A = he.textContent) == null ? void 0 : A.trim()) === "Manager") {
            he.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Te = y(null), Xe = y(!1), qe = y(!1), Qe = y([]);
    let mt = 0;
    function $e(H, A = "info", he = 3e3) {
      const Ie = ++mt;
      return Qe.value.push({ id: Ie, message: H, type: A }), he > 0 && setTimeout(() => {
        Qe.value = Qe.value.filter((Oe) => Oe.id !== Ie);
      }, he), Ie;
    }
    function je(H) {
      Qe.value = Qe.value.filter((A) => A.id !== H);
    }
    function it(H, A) {
      $e(H, A);
    }
    const Ye = z(() => {
      if (!E.value) return "neutral";
      const H = E.value.workflows, A = H.new.length > 0 || H.modified.length > 0 || H.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? A ? "warning" : "success" : "error";
    });
    z(() => E.value ? Ye.value === "success" ? "All synced" : Ye.value === "warning" ? "Uncommitted changes" : Ye.value === "error" ? "Not synced" : "" : "");
    async function ue() {
      K.value = !0, te.value = null;
      try {
        const [H, A, he, Ie] = await Promise.all([
          u(!0),
          g(),
          m(),
          k()
        ]);
        E.value = H, q.value = A.commits, B.value = he.branches, F.value = Ie, i("statusUpdate", H), N.value && await N.value.loadWorkflows(!0);
      } catch (H) {
        te.value = H instanceof Error ? H.message : "Failed to load status", E.value = null, q.value = [], B.value = [];
      } finally {
        K.value = !1;
      }
    }
    function Q(H) {
      Y.value = H;
    }
    async function ee(H) {
      var he;
      Y.value = null;
      const A = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      Te.value = {
        title: A ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: A ? "You have uncommitted changes that will be lost." : `Checkout commit ${H.short_hash || ((he = H.hash) == null ? void 0 : he.slice(0, 7))}?`,
        details: A ? St() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: A ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: A,
        onConfirm: async () => {
          var Ke;
          Te.value = null, Ve();
          const Ie = $e(`Checking out ${H.short_hash || ((Ke = H.hash) == null ? void 0 : Ke.slice(0, 7))}...`, "info", 0), Oe = await p(H.hash, A);
          je(Ie), Oe.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Oe.message || "Checkout failed", "error");
        }
      };
    }
    async function L(H) {
      const A = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      Te.value = {
        title: A ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: A ? "You have uncommitted changes." : `Switch to branch "${H}"?`,
        details: A ? St() : void 0,
        warning: A ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: A ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Te.value = null, Ve();
          const he = $e(`Switching to ${H}...`, "info", 0), Ie = await v(H, A);
          je(he), Ie.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function G(H) {
      const A = $e(`Creating branch ${H}...`, "info", 0), he = await d(H);
      je(A), he.status === "success" ? ($e(`Branch "${H}" created`, "success"), await ue()) : $e(he.message || "Failed to create branch", "error");
    }
    async function le(H, A = !1) {
      const he = async (Ie) => {
        var Ke;
        const Oe = $e(`Deleting branch ${H}...`, "info", 0);
        try {
          const lt = await w(H, Ie);
          je(Oe), lt.status === "success" ? ($e(`Branch "${H}" deleted`, "success"), await ue()) : (Ke = lt.message) != null && Ke.includes("not fully merged") ? Te.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Te.value = null, await he(!0);
            }
          } : $e(lt.message || "Failed to delete branch", "error");
        } catch (lt) {
          je(Oe);
          const It = lt instanceof Error ? lt.message : "Failed to delete branch";
          It.includes("not fully merged") ? Te.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Te.value = null, await he(!0);
            }
          } : $e(It, "error");
        }
      };
      Te.value = {
        title: "Delete Branch",
        message: `Delete branch "${H}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Te.value = null, await he(A);
        }
      };
    }
    async function xe(H) {
      Y.value = null;
      const A = prompt("Enter branch name:");
      if (A) {
        const he = $e(`Creating branch ${A}...`, "info", 0), Ie = await d(A, H.hash);
        je(he), Ie.status === "success" ? ($e(`Branch "${A}" created from ${H.short_hash}`, "success"), await ue()) : $e(Ie.message || "Failed to create branch", "error");
      }
    }
    function Ve() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ft() {
      Te.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Te.value = null, Ve(), $e("Restarting environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Ct() {
      Te.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Te.value = null, $e("Stopping environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function rt(H, A) {
      U.value = !1, Ce.value = H, Le.value = A || null, ae.value = !0;
    }
    async function Nt() {
      ae.value = !1, be.value = !0, Ve(), Ue.value = {
        progress: 10,
        state: Ot(10),
        message: At(10)
      };
      try {
        await b(Ce.value, Le.value || void 0), Ht(), Vt();
      } catch (H) {
        pt(), be.value = !1, $e(`Failed to initiate switch: ${H instanceof Error ? H.message : "Unknown error"}`, "error"), Ue.value = { state: "idle", progress: 0, message: "" }, Le.value = null;
      }
    }
    function Ot(H) {
      return H >= 100 ? "complete" : H >= 80 ? "validating" : H >= 60 ? "starting" : H >= 30 ? "syncing" : "preparing";
    }
    function At(H) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ot(H)] || "";
    }
    function Ht() {
      if (ge) return;
      let H = 10;
      const A = 60, he = 5e3, Ie = 100, Oe = (A - H) / (he / Ie);
      ge = window.setInterval(() => {
        if (H += Oe, H >= A && (H = A, pt()), Ue.value.progress < A) {
          const Ke = Math.floor(H);
          Ue.value = {
            progress: Ke,
            state: Ot(Ke),
            message: At(Ke)
          };
        }
      }, Ie);
    }
    function pt() {
      ge && (clearInterval(ge), ge = null);
    }
    function Vt() {
      me || (me = window.setInterval(async () => {
        try {
          let H = await O.getStatus();
          if ((!H || H.state === "idle") && (H = await f()), !H)
            return;
          const A = H.progress || 0;
          A >= 60 && pt();
          const he = Math.max(A, Ue.value.progress), Ie = H.state && H.state !== "idle" && H.state !== "unknown", Oe = Ie ? H.state : Ot(he), Ke = Ie && H.message || At(he);
          Ue.value = {
            state: Oe,
            progress: he,
            message: Ke
          }, H.state === "complete" ? (pt(), Ft(), be.value = !1, $e(`✓ Switched to ${Ce.value}`, "success"), await ue(), Ce.value = "") : H.state === "rolled_back" ? (pt(), Ft(), be.value = !1, $e("Switch failed, restored previous environment", "warning"), Ce.value = "") : H.state === "critical_failure" && (pt(), Ft(), be.value = !1, $e(`Critical error during switch: ${H.message}`, "error"), Ce.value = "");
        } catch (H) {
          console.error("Failed to poll switch progress:", H);
        }
      }, 1e3));
    }
    function Ft() {
      pt(), me && (clearInterval(me), me = null);
    }
    function qt() {
      var H;
      ae.value = !1, Ce.value = "", (H = C.value) != null && H.state && C.value.state !== "managed" && (X.value = C.value.state === "no_workspace" ? 1 : 2, M.value = !0);
    }
    async function ts(H) {
      Xe.value = !1, await ue(), $e(H.message, H.success ? "success" : "error");
    }
    async function ss() {
      qe.value = !1;
      const H = $e("Syncing environment...", "info", 0);
      try {
        const A = await I("skip", !0);
        if (je(H), A.status === "success") {
          const he = [];
          A.nodes_installed.length && he.push(`${A.nodes_installed.length} installed`), A.nodes_removed.length && he.push(`${A.nodes_removed.length} removed`);
          const Ie = he.length ? `: ${he.join(", ")}` : "";
          $e(`✓ Environment synced${Ie}`, "success"), await ue();
        } else {
          const he = A.errors.length ? A.errors.join("; ") : A.message;
          $e(`Sync failed: ${he}`, "error");
        }
      } catch (A) {
        je(H), $e(`Sync error: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
      }
    }
    async function os(H) {
      var A;
      try {
        const he = await $(H);
        he.failed.length === 0 ? $e(`✓ Repaired ${he.success} workflow${he.success === 1 ? "" : "s"}`, "success") : $e(`Repaired ${he.success}, failed: ${he.failed.length}`, "warning"), await ue();
      } catch (he) {
        $e(`Repair failed: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
      } finally {
        (A = ve.value) == null || A.resetRepairingState();
      }
    }
    async function re() {
      var A, he;
      const H = $e("Repairing environment...", "info", 0);
      try {
        const Ie = await I("skip", !0);
        if (je(H), Ie.status === "success") {
          const Oe = [];
          Ie.nodes_installed.length && Oe.push(`${Ie.nodes_installed.length} installed`), Ie.nodes_removed.length && Oe.push(`${Ie.nodes_removed.length} removed`);
          const Ke = Oe.length ? `: ${Oe.join(", ")}` : "";
          $e(`✓ Environment repaired${Ke}`, "success"), (A = ve.value) == null || A.closeDetailModal(), await ue();
        } else {
          const Oe = Ie.errors.length ? Ie.errors.join(", ") : Ie.message || "Unknown error";
          $e(`Repair failed: ${Oe}`, "error");
        }
      } catch (Ie) {
        je(H), $e(`Repair error: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
      } finally {
        (he = ve.value) == null || he.resetRepairingEnvironmentState();
      }
    }
    async function j(H, A) {
      $e(`Environment '${H}' created`, "success"), await ue(), D.value && await D.value.loadEnvironments(), A && await rt(H);
    }
    async function Ee(H) {
      var A;
      if (((A = S.value) == null ? void 0 : A.name) === H) {
        $e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Te.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${H}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Te.value = null;
          try {
            const he = await x(H);
            he.status === "success" ? ($e(`Environment "${H}" deleted`, "success"), await ue(), D.value && await D.value.loadEnvironments()) : $e(he.message || "Failed to delete environment", "error");
          } catch (he) {
            $e(`Error deleting environment: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ze(H, A) {
      M.value = !1;
      try {
        C.value = await P();
      } catch {
      }
      await rt(H, A);
    }
    function gt() {
      M.value = !1, i("close");
    }
    async function Pt(H, A) {
      await rt(H, A);
    }
    async function Mt(H) {
      await ue(), await rt(H);
    }
    async function xt(H) {
      C.value = await P(), console.log(`Environment '${H}' created. Available for switching.`);
    }
    function we() {
      pe("environments", "all-envs"), setTimeout(() => {
        var H;
        (H = D.value) == null || H.openCreateModal();
      }, 100);
    }
    function St() {
      if (!E.value) return [];
      const H = [], A = E.value.workflows;
      return A.new.length && H.push(`${A.new.length} new workflow(s)`), A.modified.length && H.push(`${A.modified.length} modified workflow(s)`), A.deleted.length && H.push(`${A.deleted.length} deleted workflow(s)`), H;
    }
    return Ne(async () => {
      try {
        if (C.value = await P(), C.value.state === "no_workspace") {
          M.value = !0, X.value = 1;
          return;
        }
        if (C.value.state === "empty_workspace") {
          M.value = !0, X.value = 2;
          return;
        }
        if (C.value.state === "unmanaged") {
          M.value = !0, X.value = 2;
          return;
        }
      } catch (H) {
        console.warn("Setup status check failed, proceeding normally:", H);
      }
      await ue();
    }), (H, A) => {
      var he, Ie, Oe, Ke, lt, It, Wt, Gt, W, de, ke, We;
      return s(), o("div", w3, [
        e("div", k3, [
          e("div", b3, [
            A[31] || (A[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (s(), o("div", _3)) : r("", !0)
          ]),
          e("div", $3, [
            _($o),
            A[34] || (A[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: fe(["icon-btn", { spinning: K.value }]),
              onClick: ue,
              title: "Refresh"
            }, [...A[32] || (A[32] = [
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
              onClick: A[0] || (A[0] = (_e) => i("close")),
              title: "Close"
            }, [...A[33] || (A[33] = [
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
        e("div", C3, [
          e("div", { class: "env-switcher-header" }, [
            A[35] || (A[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ft
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Ct
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: A[1] || (A[1] = (_e) => pe("environments", "all-envs"))
          }, [
            E.value ? (s(), o("div", x3, [
              e("span", null, a(((he = S.value) == null ? void 0 : he.name) || ((Ie = E.value) == null ? void 0 : Ie.environment) || "Loading..."), 1),
              e("span", S3, "(" + a(E.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            A[36] || (A[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", I3, [
          e("div", E3, [
            e("div", T3, [
              e("div", R3, [
                A[37] || (A[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "status" && De.value === "this-env" }]),
                  onClick: A[2] || (A[2] = (_e) => pe("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "workflows" }]),
                  onClick: A[3] || (A[3] = (_e) => pe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "models-env" }]),
                  onClick: A[4] || (A[4] = (_e) => pe("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "branches" }]),
                  onClick: A[5] || (A[5] = (_e) => pe("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "history" }]),
                  onClick: A[6] || (A[6] = (_e) => pe("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "nodes" }]),
                  onClick: A[7] || (A[7] = (_e) => pe("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "debug-env" }]),
                  onClick: A[8] || (A[8] = (_e) => pe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              A[41] || (A[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", P3, [
                A[38] || (A[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "environments" }]),
                  onClick: A[9] || (A[9] = (_e) => pe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "model-index" }]),
                  onClick: A[10] || (A[10] = (_e) => pe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "settings" }]),
                  onClick: A[11] || (A[11] = (_e) => pe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "debug-workspace" }]),
                  onClick: A[12] || (A[12] = (_e) => pe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              A[42] || (A[42] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", M3, [
                A[40] || (A[40] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "deploy" }]),
                  onClick: A[13] || (A[13] = (_e) => pe("deploy", "sharing"))
                }, [
                  A[39] || (A[39] = h(" DEPLOY ", -1)),
                  Se(T) > 0 ? (s(), o("span", D3, a(Se(T)), 1)) : r("", !0)
                ], 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "export" }]),
                  onClick: A[14] || (A[14] = (_e) => pe("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "import" }]),
                  onClick: A[15] || (A[15] = (_e) => pe("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "remotes" }]),
                  onClick: A[16] || (A[16] = (_e) => pe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", L3, [
              _(Co)
            ])
          ]),
          e("div", z3, [
            te.value ? (s(), o("div", U3, a(te.value), 1)) : !E.value && Z.value === "status" ? (s(), o("div", N3, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              Z.value === "status" ? (s(), R(dl, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ve,
                status: E.value,
                "setup-state": oe.value,
                onSwitchBranch: tt,
                onCommitChanges: A[17] || (A[17] = (_e) => Xe.value = !0),
                onSyncEnvironment: A[18] || (A[18] = (_e) => qe.value = !0),
                onViewWorkflows: A[19] || (A[19] = (_e) => pe("workflows", "this-env")),
                onViewHistory: A[20] || (A[20] = (_e) => pe("history", "this-env")),
                onViewDebug: A[21] || (A[21] = (_e) => pe("debug-env", "this-env")),
                onViewNodes: A[22] || (A[22] = (_e) => pe("nodes", "this-env")),
                onRepairMissingModels: os,
                onRepairEnvironment: re,
                onStartSetup: A[23] || (A[23] = (_e) => M.value = !0),
                onViewEnvironments: A[24] || (A[24] = (_e) => pe("environments", "all-envs")),
                onCreateEnvironment: we
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), R(Pm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: ue
              }, null, 512)) : Z.value === "models-env" ? (s(), R(vv, {
                key: 2,
                onNavigate: Je
              })) : Z.value === "branches" ? (s(), R(Cl, {
                key: 3,
                branches: B.value,
                current: ((Oe = E.value) == null ? void 0 : Oe.branch) || null,
                onSwitch: L,
                onCreate: G,
                onDelete: le
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), R(zl, {
                key: 4,
                commits: q.value,
                onSelect: Q,
                onCheckout: ee
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), R(cf, {
                key: 5,
                "version-mismatches": ((lt = (Ke = E.value) == null ? void 0 : Ke.comparison) == null ? void 0 : lt.version_mismatches) || [],
                onOpenNodeManager: st,
                onRepairEnvironment: re,
                onToast: it
              }, null, 8, ["version-mismatches"])) : Z.value === "debug-env" ? (s(), R(_h, { key: 6 })) : Z.value === "environments" ? (s(), R(x1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: D,
                onSwitch: rt,
                onCreated: j,
                onDelete: Ee
              }, null, 512)) : Z.value === "model-index" ? (s(), R(Dv, {
                key: 8,
                onRefresh: ue
              })) : Z.value === "settings" ? (s(), R(vh, { key: 9 })) : Z.value === "debug-workspace" ? (s(), R(bh, { key: 10 })) : Z.value === "deploy" ? (s(), R(M2, {
                key: 11,
                onToast: it,
                onNavigate: Je
              })) : Z.value === "export" ? (s(), R(ty, { key: 12 })) : Z.value === "import" ? (s(), R(q0, {
                key: 13,
                onImportCompleteSwitch: Mt
              })) : Z.value === "remotes" ? (s(), R(Kg, {
                key: 14,
                onToast: it
              })) : r("", !0)
            ], 64))
          ])
        ]),
        Y.value ? (s(), R(J2, {
          key: 0,
          commit: Y.value,
          onClose: A[25] || (A[25] = (_e) => Y.value = null),
          onCheckout: ee,
          onCreateBranch: xe
        }, null, 8, ["commit"])) : r("", !0),
        Te.value ? (s(), R(Ws, {
          key: 1,
          title: Te.value.title,
          message: Te.value.message,
          details: Te.value.details,
          warning: Te.value.warning,
          confirmLabel: Te.value.confirmLabel,
          cancelLabel: Te.value.cancelLabel,
          secondaryLabel: Te.value.secondaryLabel,
          secondaryAction: Te.value.secondaryAction,
          destructive: Te.value.destructive,
          onConfirm: Te.value.onConfirm,
          onCancel: A[26] || (A[26] = (_e) => Te.value = null),
          onSecondary: Te.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        _(q$, {
          show: ae.value,
          "from-environment": ((It = S.value) == null ? void 0 : It.name) || "unknown",
          "to-environment": Ce.value,
          onConfirm: Nt,
          onClose: qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Xe.value && E.value ? (s(), R(_o, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: A[27] || (A[27] = (_e) => Xe.value = !1),
          onCommitted: ts
        }, null, 8, ["status"])) : r("", !0),
        qe.value && E.value ? (s(), R(fC, {
          key: 3,
          show: qe.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: ss,
          onClose: A[28] || (A[28] = (_e) => qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        _(aC, {
          show: be.value,
          state: Ue.value.state,
          progress: Ue.value.progress,
          message: Ue.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: A[30] || (A[30] = Be((_e) => U.value = !1, ["self"]))
        }, [
          e("div", O3, [
            e("div", A3, [
              A[44] || (A[44] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: A[29] || (A[29] = (_e) => U.value = !1)
              }, [...A[43] || (A[43] = [
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
            e("div", F3, [
              A[45] || (A[45] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", B3, [
                (s(!0), o(V, null, ie(F.value, (_e) => (s(), o("div", {
                  key: _e.name,
                  class: fe(["env-item", { current: _e.is_current }])
                }, [
                  e("div", V3, [
                    e("div", W3, [
                      e("span", G3, a(_e.is_current ? "●" : "○"), 1),
                      e("span", j3, a(_e.name), 1),
                      _e.current_branch ? (s(), o("span", K3, "(" + a(_e.current_branch) + ")", 1)) : r("", !0),
                      _e.is_current ? (s(), o("span", H3, "CURRENT")) : r("", !0)
                    ]),
                    e("div", q3, a(_e.workflow_count) + " workflows • " + a(_e.node_count) + " nodes ", 1)
                  ]),
                  _e.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ns) => rt(_e.name)
                  }, " SWITCH ", 8, Y3))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        M.value ? (s(), R(y3, {
          key: 5,
          "default-path": ((Wt = C.value) == null ? void 0 : Wt.default_path) || "~/comfygit",
          "detected-models-dir": ((Gt = C.value) == null ? void 0 : Gt.detected_models_dir) || null,
          "initial-step": X.value,
          "existing-environments": ((W = C.value) == null ? void 0 : W.environments) || [],
          "cli-installed": ((de = C.value) == null ? void 0 : de.cli_installed) ?? !0,
          "setup-state": ((ke = C.value) == null ? void 0 : ke.state) || "no_workspace",
          "workspace-path": ((We = C.value) == null ? void 0 : We.workspace_path) || null,
          onComplete: Ze,
          onClose: gt,
          onSwitchEnvironment: Pt,
          onEnvironmentCreatedNoSwitch: xt
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", J3, [
          _(Mo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(V, null, ie(Qe.value, (_e) => (s(), o("div", {
                key: _e.id,
                class: fe(["toast", _e.type])
              }, [
                e("span", X3, a(_e.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Z3 = /* @__PURE__ */ ne(Q3, [["__scopeId", "data-v-037b3ee3"]]), e5 = { class: "item-header" }, t5 = { class: "item-info" }, s5 = { class: "filename" }, o5 = { class: "metadata" }, n5 = { class: "size" }, a5 = {
  key: 0,
  class: "type"
}, l5 = { class: "item-actions" }, i5 = {
  key: 0,
  class: "progress-section"
}, r5 = { class: "progress-bar" }, d5 = { class: "progress-stats" }, c5 = { class: "downloaded" }, u5 = { class: "speed" }, m5 = {
  key: 0,
  class: "eta"
}, v5 = {
  key: 1,
  class: "status-msg paused"
}, f5 = {
  key: 2,
  class: "status-msg queued"
}, p5 = {
  key: 3,
  class: "status-msg completed"
}, g5 = {
  key: 4,
  class: "status-msg failed"
}, h5 = {
  key: 0,
  class: "retries"
}, y5 = /* @__PURE__ */ se({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(m) {
      if (m === 0) return "?";
      const p = m / (1024 * 1024 * 1024);
      return p >= 1 ? `${p.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    function u(m) {
      return m === 0 ? "-" : `${(m / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(m) {
      if (m < 60) return `${Math.round(m)}s`;
      const p = Math.floor(m / 60);
      return p < 60 ? `${p}m` : `${Math.floor(p / 60)}h ${p % 60}m`;
    }
    return (m, p) => (s(), o("div", {
      class: fe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", e5, [
        e("div", t5, [
          e("div", s5, a(t.item.filename), 1),
          e("div", o5, [
            e("span", n5, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", a5, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", l5, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: p[0] || (p[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: p[1] || (p[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: p[2] || (p[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: p[3] || (p[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", i5, [
        e("div", r5, [
          e("div", {
            class: "progress-fill",
            style: Lt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", d5, [
          e("span", c5, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", u5, a(u(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", m5, a(g(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", v5, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", f5, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", p5, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", g5, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", h5, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), is = /* @__PURE__ */ ne(y5, [["__scopeId", "data-v-2110df65"]]), w5 = { class: "queue-title" }, k5 = { class: "count" }, b5 = { class: "queue-actions" }, _5 = { class: "action-label" }, $5 = {
  key: 0,
  class: "overall-progress"
}, C5 = { class: "progress-bar" }, x5 = {
  key: 0,
  class: "current-mini"
}, S5 = { class: "filename" }, I5 = { class: "speed" }, E5 = {
  key: 1,
  class: "queue-content"
}, T5 = {
  key: 0,
  class: "section"
}, R5 = {
  key: 1,
  class: "section"
}, P5 = { class: "section-header" }, M5 = { class: "section-label paused" }, D5 = { class: "items-list" }, L5 = {
  key: 2,
  class: "section"
}, z5 = { class: "section-header" }, U5 = { class: "section-label" }, N5 = { class: "items-list" }, O5 = {
  key: 3,
  class: "section"
}, A5 = { class: "section-header" }, F5 = { class: "section-label" }, B5 = { class: "items-list" }, V5 = {
  key: 4,
  class: "section"
}, W5 = { class: "section-header" }, G5 = { class: "section-label failed" }, j5 = { class: "items-list" }, K5 = /* @__PURE__ */ se({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: u,
      failedItems: g,
      pausedItems: m,
      hasItems: p,
      activeCount: d,
      cancelDownload: v,
      retryDownload: w,
      resumeDownload: k,
      resumeAllPaused: b,
      removeItem: f,
      clearCompleted: x
    } = fs(), I = y(!1);
    let $ = null;
    ut(
      () => ({
        active: d.value,
        failed: g.value.length,
        paused: m.value.length,
        completed: u.value.length
      }),
      (E, q) => {
        $ && (clearTimeout($), $ = null);
        const B = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, F = q && (q.active > 0 || q.paused > 0);
        B && F && ($ = setTimeout(() => {
          x(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = z(() => {
      var B;
      if (c.items.length === 0) return 0;
      const E = u.value.length, q = ((B = n.value) == null ? void 0 : B.progress) || 0;
      return Math.round((E + q / 100) / c.items.length * 100);
    });
    function O(E) {
      v(E);
    }
    function T(E) {
      return E === 0 ? "" : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, q) => (s(), R(et, { to: "body" }, [
      Se(p) ? (s(), o("div", {
        key: 0,
        class: fe(["model-download-queue", { minimized: !I.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (B) => I.value = !I.value)
        }, [
          e("div", w5, [
            q[4] || (q[4] = e("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", k5, "(" + a(Se(d)) + "/" + a(Se(c).items.length) + ")", 1)
          ]),
          e("div", b5, [
            e("span", _5, a(I.value ? "minimize" : "expand"), 1)
          ])
        ]),
        I.value ? (s(), o("div", E5, [
          Se(n) ? (s(), o("div", T5, [
            q[6] || (q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            _(is, {
              item: Se(n),
              onCancel: q[1] || (q[1] = (B) => O(Se(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Se(m).length > 0 ? (s(), o("div", R5, [
            e("div", P5, [
              e("span", M5, "Paused (" + a(Se(m).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...B) => Se(b) && Se(b)(...B))
              }, "Resume All")
            ]),
            e("div", D5, [
              (s(!0), o(V, null, ie(Se(m), (B) => (s(), R(is, {
                key: B.id,
                item: B,
                onResume: (F) => Se(k)(B.id),
                onRemove: (F) => Se(f)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Se(i).length > 0 ? (s(), o("div", L5, [
            e("div", z5, [
              e("span", U5, "Queued (" + a(Se(i).length) + ")", 1)
            ]),
            e("div", N5, [
              (s(!0), o(V, null, ie(Se(i), (B) => (s(), R(is, {
                key: B.id,
                item: B,
                onCancel: (F) => O(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Se(u).length > 0 ? (s(), o("div", O5, [
            e("div", A5, [
              e("span", F5, "Completed (" + a(Se(u).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...B) => Se(x) && Se(x)(...B))
              }, "Clear")
            ]),
            e("div", B5, [
              (s(!0), o(V, null, ie(Se(u).slice(0, 3), (B) => (s(), R(is, {
                key: B.id,
                item: B,
                onRemove: (F) => Se(f)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Se(g).length > 0 ? (s(), o("div", V5, [
            e("div", W5, [
              e("span", G5, "Failed (" + a(Se(g).length) + ")", 1)
            ]),
            e("div", j5, [
              (s(!0), o(V, null, ie(Se(g), (B) => (s(), R(is, {
                key: B.id,
                item: B,
                onRetry: (F) => Se(w)(B.id),
                onRemove: (F) => Se(f)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", $5, [
          e("div", C5, [
            e("div", {
              class: "progress-fill",
              style: Lt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Se(n) ? (s(), o("div", x5, [
            e("span", S5, a(Se(n).filename), 1),
            e("span", I5, a(T(Se(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), H5 = /* @__PURE__ */ ne(K5, [["__scopeId", "data-v-60751cfa"]]), q5 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', Y5 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', J5 = {
  comfy: q5,
  phosphor: Y5
}, js = "comfy", xo = "comfygit-theme";
let jt = null, So = js;
function X5() {
  try {
    const t = localStorage.getItem(xo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return js;
}
function Io(t = js) {
  jt && jt.remove(), jt = document.createElement("style"), jt.id = "comfygit-theme-styles", jt.setAttribute("data-theme", t), jt.textContent = J5[t], document.head.appendChild(jt), document.body.setAttribute("data-comfygit-theme", t), So = t;
  try {
    localStorage.setItem(xo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Q5() {
  return So;
}
function Z5(t) {
  Io(t);
}
function e8(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const u = i[c];
  return u && u.result === "error" && ((g = u.status) == null ? void 0 : g.status_str) === "error" ? (u.status.messages || [])[0] || "Unknown error" : null;
}
const Ks = document.createElement("link");
Ks.rel = "stylesheet";
Ks.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ks);
const t8 = X5();
Io(t8);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Z5(t);
  },
  getTheme: () => {
    const t = Q5();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let yt = null, dt = null, us = null, rs = null, eo = null;
const Zt = y(null);
let Hs = "managed", Eo = !1;
async function ws() {
  var t;
  if (!((t = Bt) != null && t.api)) return null;
  try {
    const c = await Bt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Zt.value = await c.json());
  } catch {
  }
}
async function zs() {
  var t;
  if ((t = Bt) != null && t.api)
    try {
      const c = await Bt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Hs = n.state, Eo = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Us() {
  var c;
  if (Hs === "managed" || !Eo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function s8() {
  if (!Zt.value) return !1;
  const t = Zt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Zt.value.has_changes;
}
function to(t) {
  yt && yt.remove(), yt = document.createElement("div"), yt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", yt.appendChild(c), yt.addEventListener("click", (u) => {
    u.target === yt && Ds();
  });
  const n = (u) => {
    u.key === "Escape" && (Ds(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Fs({
    render: () => Bs(Z3, {
      initialView: t,
      onClose: Ds,
      onStatusUpdate: async (u) => {
        Zt.value = u, ms(), await zs(), Ns(), Us();
      }
    })
  }).mount(c), document.body.appendChild(yt);
}
function Ds() {
  yt && (yt.remove(), yt = null);
}
function o8(t) {
  ds(), dt = document.createElement("div"), dt.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  dt.style.position = "fixed", dt.style.top = `${c.bottom + 8}px`, dt.style.right = `${window.innerWidth - c.right}px`, dt.style.zIndex = "10001";
  const n = (u) => {
    dt && !dt.contains(u.target) && u.target !== t && (ds(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (u) => {
    u.key === "Escape" && (ds(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), us = Fs({
    render: () => Bs(_o, {
      status: Zt.value,
      onClose: ds,
      onCommitted: (u) => {
        ds(), n8(u.success, u.message), ws().then(ms);
      }
    })
  }), us.mount(dt), document.body.appendChild(dt);
}
function ds() {
  us && (us.unmount(), us = null), dt && (dt.remove(), dt = null);
}
function n8(t, c) {
  const n = document.createElement("div"), i = t ? "#22c55e" : "#ef4444";
  n.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${i};
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10002;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: sans-serif;
    font-size: 13px;
    color: var(--fg-color, #fff);
    animation: toastSlideUp 0.2s ease;
  `;
  const u = document.createElement("span");
  u.textContent = t ? "✓" : "✕", u.style.cssText = `
    color: ${i};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(u);
  const g = document.createElement("span");
  g.textContent = c, n.appendChild(g), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function a8() {
  rs || (rs = document.createElement("div"), rs.className = "comfygit-download-queue-root", eo = Fs({
    render: () => Bs(H5)
  }), eo.mount(rs), document.body.appendChild(rs), console.log("[ComfyGit] Model download queue mounted"));
}
let vt = null;
function ms() {
  if (!vt) return;
  const t = vt.querySelector(".commit-indicator");
  t && (t.style.display = s8() ? "block" : "none");
}
function Ns() {
  if (!vt) return;
  const t = Hs !== "managed";
  vt.disabled = t, vt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const To = document.createElement("style");
To.textContent = `
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

  .comfygit-commit-btn:hover:not(:disabled) {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
  }

  .comfygit-commit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .comfygit-mock-btn {
    background: linear-gradient(180deg, #7c3aed 0%, #5b21b6 100%) !important;
    color: white !important;
    border: none !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .comfygit-mock-btn:hover {
    background: linear-gradient(180deg, #8b5cf6 0%, #6d28d9 100%) !important;
  }

  /* Adjust commit button border-radius when mock button is present */
  .comfygit-btn-group:has(.comfygit-mock-btn) .comfygit-commit-btn {
    border-radius: 0 !important;
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
document.head.appendChild(To);
Bt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var u, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = to, vt = document.createElement("button"), vt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", vt.innerHTML = 'Commit <span class="commit-indicator"></span>', vt.title = "Quick Commit", vt.onclick = () => o8(vt), t.appendChild(c), t.appendChild(vt), (g = (u = Bt.menu) == null ? void 0 : u.settingsGroup) != null && g.element && (Bt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), a8();
    const { loadPendingDownloads: n } = fs();
    n(), await Promise.all([ws(), zs()]), ms(), Ns(), Us(), setTimeout(Us, 100), setInterval(async () => {
      await Promise.all([ws(), zs()]), ms(), Ns();
    }, 3e4);
    const i = Bt.api;
    if (i) {
      let m = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((w) => {
          (w.startsWith("workflow:") || w.startsWith("Comfy.OpenWorkflowsPaths:") || w.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(w);
        }), window.location.reload();
      }, p = function() {
        const w = document.createElement("div");
        w.style.cssText = `
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
        const k = document.createElement("span");
        k.textContent = "Workflows updated - refresh required", w.appendChild(k);
        const b = document.createElement("button");
        b.textContent = "Refresh", b.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => m(), w.appendChild(b);
        const f = document.createElement("button");
        f.textContent = "×", f.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, f.onmouseover = () => f.style.opacity = "1", f.onmouseout = () => f.style.opacity = "0.6", f.onclick = () => w.remove(), w.appendChild(f), document.body.appendChild(w), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(w) {
        const k = document.getElementById("comfygit-error-toast");
        k && k.remove();
        const b = document.createElement("div");
        b.id = "comfygit-error-toast", b.style.cssText = `
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          border: 2px solid #e53935;
          border-radius: 8px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          z-index: 999999;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: sans-serif;
          font-size: 14px;
          color: #fff;
          max-width: 600px;
        `;
        const f = document.createElement("span");
        f.textContent = "⚠️", f.style.fontSize = "20px", b.appendChild(f);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const I = document.createElement("div");
        I.textContent = "Node installation failed", I.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(I);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild($), b.appendChild(x);
        const P = document.createElement("button");
        P.textContent = "View Logs", P.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, P.onmouseover = () => P.style.background = "#c62828", P.onmouseout = () => P.style.background = "#e53935", P.onclick = () => {
          b.remove(), to("debug-env");
        }, b.appendChild(P);
        const O = document.createElement("button");
        O.textContent = "×", O.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, O.onmouseover = () => O.style.opacity = "1", O.onmouseout = () => O.style.opacity = "0.6", O.onclick = () => b.remove(), b.appendChild(O), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", w), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (w) => {
        const { change_type: k, workflow_name: b } = w.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${b}`), await ws(), ms();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      i.addEventListener("status", async (w) => {
        const k = w.detail != null;
        k && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), m()) : p()), v = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (w) => {
        const k = e8(w.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
