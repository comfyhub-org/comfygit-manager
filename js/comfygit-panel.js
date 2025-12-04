import { app as Bt } from "../../scripts/app.js";
import { defineComponent as oe, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Re, createBlock as T, resolveDynamicComponent as Os, normalizeClass as fe, withCtx as i, toDisplayString as a, createVNode as $, createTextVNode as h, computed as z, Fragment as B, renderList as ie, normalizeStyle as Lt, ref as y, onMounted as Ne, watch as ut, Teleport as et, withModifiers as Be, Transition as Ro, createSlots as Kt, withKeys as wt, reactive as vs, onUnmounted as Cs, readonly as Po, unref as Se, withDirectives as Pe, vModelText as kt, vModelRadio as Rt, vModelCheckbox as ks, nextTick as As, vModelSelect as Dt, vModelDynamic as xs, TransitionGroup as Mo, createApp as Fs, h as Bs } from "vue";
const Do = { class: "panel-layout" }, Lo = {
  key: 0,
  class: "panel-layout-header"
}, zo = {
  key: 1,
  class: "panel-layout-search"
}, Uo = { class: "panel-layout-content" }, No = {
  key: 2,
  class: "panel-layout-footer"
}, Oo = /* @__PURE__ */ oe({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (s(), o("div", Do, [
      u.$slots.header ? (s(), o("div", Lo, [
        Re(u.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      u.$slots.search ? (s(), o("div", zo, [
        Re(u.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Uo, [
        Re(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (s(), o("div", No, [
        Re(u.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), ne = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [l, c] of u)
    n[l] = c;
  return n;
}, nt = /* @__PURE__ */ ne(Oo, [["__scopeId", "data-v-21565df9"]]), Ao = {
  key: 0,
  class: "panel-title-prefix"
}, Fo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Bo = /* @__PURE__ */ oe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (s(), T(Os(`h${t.level}`), {
      class: fe(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", Ao, a(t.prefix), 1)) : (s(), o("span", Fo)),
        Re(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vo = /* @__PURE__ */ ne(Bo, [["__scopeId", "data-v-c3875efc"]]), Wo = ["title"], Go = ["width", "height"], jo = /* @__PURE__ */ oe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (l) => u.$emit("click"))
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
}, qo = /* @__PURE__ */ oe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: fe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Ko, [
        $(Vo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), T(so, {
          key: 0,
          onClick: n[0] || (n[0] = (l) => u.$emit("info-click"))
        })) : r("", !0)
      ]),
      u.$slots.actions ? (s(), o("div", Ho, [
        Re(u.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ ne(qo, [["__scopeId", "data-v-55a62cd6"]]), Yo = {
  key: 0,
  class: "section-title-count"
}, Jo = {
  key: 1,
  class: "section-title-icon"
}, Xo = /* @__PURE__ */ oe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), T(Os(`h${t.level}`), {
      class: fe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (l) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        Re(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Yo, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", Jo, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ct = /* @__PURE__ */ ne(Xo, [["__scopeId", "data-v-559361eb"]]), Qo = { class: "status-grid" }, Zo = { class: "status-grid__columns" }, en = { class: "status-grid__column" }, tn = { class: "status-grid__title" }, sn = { class: "status-grid__column status-grid__column--right" }, on = { class: "status-grid__title" }, nn = {
  key: 0,
  class: "status-grid__footer"
}, an = /* @__PURE__ */ oe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", Qo, [
      e("div", Zo, [
        e("div", en, [
          e("h4", tn, a(t.leftTitle), 1),
          Re(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", sn, [
          e("h4", on, a(t.rightTitle), 1),
          Re(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (s(), o("div", nn, [
        Re(u.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), ln = /* @__PURE__ */ ne(an, [["__scopeId", "data-v-73b7ba3f"]]), rn = {
  key: 0,
  class: "status-item__icon"
}, dn = {
  key: 1,
  class: "status-item__count"
}, cn = { class: "status-item__label" }, un = /* @__PURE__ */ oe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = z(() => `status-item--${u.variant}`);
    return (l, c) => (s(), o("div", {
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
}, wn = /* @__PURE__ */ oe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = z(() => `issue-card--${u.severity}`);
    return (l, c) => (s(), o("div", {
      class: fe(["issue-card", n.value])
    }, [
      e("div", mn, [
        e("span", vn, a(t.icon), 1),
        e("h4", fn, a(t.title), 1)
      ]),
      l.$slots.default || t.description ? (s(), o("div", pn, [
        t.description ? (s(), o("p", gn, a(t.description), 1)) : r("", !0),
        Re(l.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", hn, [
        (s(!0), o(B, null, ie(t.items, (g, m) => (s(), o("div", {
          key: m,
          class: "issue-card__item"
        }, [
          c[0] || (c[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : r("", !0),
      l.$slots.actions ? (s(), o("div", yn, [
        Re(l.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ ne(wn, [["__scopeId", "data-v-df6aa348"]]), kn = ["type", "disabled"], bn = {
  key: 0,
  class: "spinner"
}, _n = /* @__PURE__ */ oe({
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
    return (u, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (l) => u.$emit("click", l))
    }, [
      t.loading ? (s(), o("span", bn)) : r("", !0),
      t.loading ? r("", !0) : Re(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, kn));
  }
}), X = /* @__PURE__ */ ne(_n, [["__scopeId", "data-v-772abe47"]]), $n = { class: "empty-state" }, Cn = {
  key: 0,
  class: "empty-icon"
}, xn = { class: "empty-message" }, Sn = /* @__PURE__ */ oe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (s(), o("div", $n, [
      t.icon ? (s(), o("div", Cn, a(t.icon), 1)) : r("", !0),
      e("p", xn, a(t.message), 1),
      t.actionLabel ? (s(), T(X, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (l) => u.$emit("action"))
      }, {
        default: i(() => [
          h(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), _t = /* @__PURE__ */ ne(Sn, [["__scopeId", "data-v-4466284f"]]), In = /* @__PURE__ */ oe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: fe(["detail-label"]),
      style: Lt({ minWidth: t.minWidth })
    }, [
      Re(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ys = /* @__PURE__ */ ne(In, [["__scopeId", "data-v-75e9eeb8"]]), En = /* @__PURE__ */ oe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: fe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Re(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ls = /* @__PURE__ */ ne(En, [["__scopeId", "data-v-2f186e4c"]]), Tn = { class: "detail-row" }, Rn = /* @__PURE__ */ oe({
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
    return (u, n) => (s(), o("div", Tn, [
      $(ys, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), T(Ls, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Re(u.$slots, "value", { key: 1 }, void 0, !0)
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
}, el = { class: "modal-actions" }, tl = /* @__PURE__ */ oe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const u = t, n = y(!1);
    Ne(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), ut(() => u.show, (k, f) => {
      console.log("StatusDetailModal show prop changed from", f, "to", k);
    }, { immediate: !0 });
    const l = z(() => {
      var k, f, x;
      return ((x = (f = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : f.analyzed) == null ? void 0 : x.filter(
        (R) => R.status === "broken" && R.sync_state === "synced"
      )) || [];
    }), c = z(() => {
      var k, f, x;
      return ((x = (f = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : f.analyzed) == null ? void 0 : x.filter(
        (R) => R.status === "broken" && R.sync_state !== "synced"
      )) || [];
    }), g = z(() => {
      var k, f, x;
      return ((x = (f = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : f.synced) == null ? void 0 : x.filter((R) => {
        var P, O, I;
        const C = (I = (O = (P = u.status) == null ? void 0 : P.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : I.find((S) => S.name === R);
        return !C || C.status !== "broken";
      })) || [];
    }), m = z(() => {
      var k, f, x, R, C;
      return (k = u.status) != null && k.workflows ? (((f = u.status.workflows.new) == null ? void 0 : f.length) ?? 0) > 0 || (((x = u.status.workflows.modified) == null ? void 0 : x.length) ?? 0) > 0 || (((R = u.status.workflows.deleted) == null ? void 0 : R.length) ?? 0) > 0 || (((C = u.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), p = z(() => {
      var f, x, R;
      const k = (f = u.status) == null ? void 0 : f.git_changes;
      return k ? (((x = k.nodes_added) == null ? void 0 : x.length) ?? 0) > 0 || (((R = k.nodes_removed) == null ? void 0 : R.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), d = z(() => {
      var k, f, x, R, C, P;
      return !m.value && !p.value && ((f = (k = u.status) == null ? void 0 : k.comparison) == null ? void 0 : f.is_synced) && (((x = u.status) == null ? void 0 : x.missing_models_count) ?? 0) === 0 && (((P = (C = (R = u.status) == null ? void 0 : R.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), v = z(() => {
      var f, x;
      const k = (x = (f = u.status) == null ? void 0 : f.git_changes) == null ? void 0 : x.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function w(k) {
      return typeof k == "string" ? k : k.name;
    }
    function b(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, f) => {
      var x, R, C, P, O, I, S, Y, F, V, E, _, M, H, se, K, te, J, U, N, D, ve;
      return s(), T(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (ae) => k.$emit("close"))
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
                onClick: f[0] || (f[0] = (ae) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Mn, [
              e("div", Dn, [
                $(ct, { level: "4" }, {
                  default: i(() => [...f[9] || (f[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                $(Ge, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              m.value ? (s(), o("div", Ln, [
                e("div", zn, [
                  $(ct, { level: "4" }, {
                    default: i(() => [...f[10] || (f[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: f[1] || (f[1] = (ae) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                l.value.length ? (s(), o("div", Un, [
                  e("div", Nn, [
                    f[11] || (f[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", On, "BROKEN (COMMITTED) (" + a(l.value.length) + ")", 1)
                  ]),
                  e("div", An, [
                    (s(!0), o(B, null, ie(l.value, (ae) => (s(), o("div", {
                      key: ae.name,
                      class: "workflow-item"
                    }, [
                      e("span", Fn, a(ae.name), 1),
                      e("span", Bn, a(ae.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                c.value.length ? (s(), o("div", Vn, [
                  e("div", Wn, [
                    f[12] || (f[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Gn, "BROKEN (UNCOMMITTED) (" + a(c.value.length) + ")", 1)
                  ]),
                  e("div", jn, [
                    (s(!0), o(B, null, ie(c.value, (ae) => (s(), o("div", {
                      key: ae.name,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(ae.name), 1),
                      e("span", Hn, a(ae.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (R = (x = t.status.workflows) == null ? void 0 : x.new) != null && R.length ? (s(), o("div", qn, [
                  e("div", Yn, [
                    f[13] || (f[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Jn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Xn, [
                    (s(!0), o(B, null, ie(t.status.workflows.new, (ae) => (s(), o("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      e("span", Qn, a(ae), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (P = (C = t.status.workflows) == null ? void 0 : C.modified) != null && P.length ? (s(), o("div", Zn, [
                  e("div", ea, [
                    f[14] || (f[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", ta, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", sa, [
                    (s(!0), o(B, null, ie(t.status.workflows.modified, (ae) => (s(), o("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      e("span", oa, a(ae), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (I = (O = t.status.workflows) == null ? void 0 : O.deleted) != null && I.length ? (s(), o("div", na, [
                  e("div", aa, [
                    f[15] || (f[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", la, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ia, [
                    (s(!0), o(B, null, ie(t.status.workflows.deleted, (ae) => (s(), o("div", {
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
                    (s(!0), o(B, null, ie(g.value, (ae) => (s(), o("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      e("span", va, a(ae), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              p.value ? (s(), o("div", fa, [
                $(ct, { level: "4" }, {
                  default: i(() => [...f[17] || (f[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Y = (S = t.status.git_changes) == null ? void 0 : S.nodes_added) != null && Y.length ? (s(), o("div", pa, [
                  e("div", ga, [
                    f[18] || (f[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ha, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ya, [
                    (s(!0), o(B, null, ie(t.status.git_changes.nodes_added, (ae) => (s(), o("div", {
                      key: w(ae),
                      class: "change-item"
                    }, [
                      e("span", wa, a(w(ae)), 1),
                      b(ae) ? (s(), o("span", ka, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (V = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && V.length ? (s(), o("div", ba, [
                  e("div", _a, [
                    f[19] || (f[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", $a, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ca, [
                    (s(!0), o(B, null, ie(t.status.git_changes.nodes_removed, (ae) => (s(), o("div", {
                      key: w(ae),
                      class: "change-item"
                    }, [
                      e("span", xa, a(w(ae)), 1),
                      b(ae) ? (s(), o("span", Sa, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (E = t.status.git_changes) != null && E.workflow_changes ? (s(), o("div", Ia, [
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
                (_ = t.status.git_changes) != null && _.has_other_changes ? (s(), o("div", Pa, [...f[21] || (f[21] = [
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
                  $(ct, { level: "4" }, {
                    default: i(() => [...f[22] || (f[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: f[3] || (f[3] = (ae) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                f[26] || (f[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (se = (H = t.status.comparison) == null ? void 0 : H.missing_nodes) != null && se.length ? (s(), o("div", La, [
                  $(Ge, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", za, [
                    (s(!0), o(B, null, ie(t.status.comparison.missing_nodes.slice(0, 10), (ae) => (s(), o("div", {
                      key: ae,
                      class: "drift-list-item"
                    }, " - " + a(ae), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Ua, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (te = (K = t.status.comparison) == null ? void 0 : K.extra_nodes) != null && te.length ? (s(), o("div", Na, [
                  $(Ge, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Oa, [
                    (s(!0), o(B, null, ie(t.status.comparison.extra_nodes.slice(0, 10), (ae) => (s(), o("div", {
                      key: ae,
                      class: "drift-list-item"
                    }, " - " + a(ae), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Aa, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (U = (J = t.status.comparison) == null ? void 0 : J.version_mismatches) != null && U.length ? (s(), o("div", Fa, [
                  $(Ge, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Ba, [
                    (s(!0), o(B, null, ie(t.status.comparison.version_mismatches.slice(0, 10), (ae) => (s(), o("div", {
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
                  $(Ge, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ka, [
                  $(X, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: f[4] || (f[4] = (ae) => k.$emit("repair"))
                  }, {
                    default: i(() => [...f[24] || (f[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  f[25] || (f[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ve = (D = t.status.comparison) == null ? void 0 : D.disabled_nodes) != null && ve.length ? (s(), o("div", Ha, [
                $(ct, { level: "4" }, {
                  default: i(() => [...f[27] || (f[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", qa, [
                  f[28] || (f[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ya, [
                  (s(!0), o(B, null, ie(t.status.comparison.disabled_nodes.slice(0, 10), (ae) => (s(), o("div", {
                    key: ae,
                    class: "drift-list-item"
                  }, " • " + a(ae), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ja, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Xa, [
                $(ct, { level: "4" }, {
                  default: i(() => [...f[29] || (f[29] = [
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
              $(X, {
                variant: "secondary",
                onClick: f[5] || (f[5] = (ae) => k.$emit("close"))
              }, {
                default: i(() => [...f[33] || (f[33] = [
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
}, rl = /* @__PURE__ */ oe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: u, emit: n }) {
    const l = t, c = y(!1), g = y(!1);
    function m() {
      c.value = !0;
    }
    function p() {
      c.value = !1, v("view-workflows");
    }
    function d() {
      c.value = !1, v("view-nodes");
    }
    const v = n, w = y(!1), b = y(!1);
    function k() {
      b.value = !0, v("repair-environment");
    }
    function f() {
      b.value = !1;
    }
    function x() {
      c.value = !1;
    }
    const R = z(() => {
      const J = l.status.workflows.analyzed || [], U = J.filter(
        (N) => N.unresolved_models_count > 0 || N.ambiguous_models_count > 0
      );
      return U.length === 0 && l.status.missing_models_count > 0 ? J.filter((N) => N.sync_state === "synced") : U;
    });
    function C() {
      const J = R.value;
      J.length !== 0 && (w.value = !0, v("repair-missing-models", J.map((U) => U.name)));
    }
    function P() {
      w.value = !1;
    }
    u({ resetRepairingState: P, resetRepairingEnvironmentState: f, closeDetailModal: x });
    const O = z(() => l.status.workflows.new.length > 0 || l.status.workflows.modified.length > 0 || l.status.workflows.deleted.length > 0), I = z(() => l.status.has_changes), S = z(() => {
      const J = l.status.git_changes;
      return J.nodes_added.length > 0 || J.nodes_removed.length > 0 || J.workflow_changes;
    }), Y = z(() => l.status.has_changes || O.value), F = z(() => Object.keys(l.status.git_changes.workflow_changes_detail).length), V = z(() => l.status.git_changes.has_other_changes), E = z(() => {
      var J;
      return ((J = l.status.workflows.analyzed) == null ? void 0 : J.filter((U) => U.status === "broken")) || [];
    }), _ = z(() => {
      var J;
      return ((J = l.status.workflows.analyzed) == null ? void 0 : J.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), M = z(() => E.value.length > 0), H = z(() => M.value || _.value.length > 0 || l.status.missing_models_count > 0 || !l.status.comparison.is_synced || l.status.has_legacy_manager), se = z(() => {
      const J = [];
      return l.status.workflows.new.length > 0 && J.push(`${l.status.workflows.new.length} new`), l.status.workflows.modified.length > 0 && J.push(`${l.status.workflows.modified.length} modified`), l.status.workflows.deleted.length > 0 && J.push(`${l.status.workflows.deleted.length} deleted`), J.length > 0 ? `${J.join(", ")} workflow${J.length === 1 && !J[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), K = z(() => {
      var N, D;
      const J = [], U = l.status.comparison;
      return (N = U.missing_nodes) != null && N.length && J.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (D = U.extra_nodes) != null && D.length && J.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), J.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${J.join(" and ")}.`;
    }), te = z(() => {
      var N, D;
      const J = [], U = l.status.comparison;
      return (N = U.extra_nodes) != null && N.length && (U.extra_nodes.slice(0, 3).forEach((ve) => {
        J.push(`Untracked: ${ve}`);
      }), U.extra_nodes.length > 3 && J.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (D = U.missing_nodes) != null && D.length && (U.missing_nodes.slice(0, 3).forEach((ve) => {
        J.push(`Missing: ${ve}`);
      }), U.missing_nodes.length > 3 && J.push(`...and ${U.missing_nodes.length - 3} more missing`)), J;
    });
    return (J, U) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, { title: "STATUS" })
        ]),
        content: i(() => [
          l.setupState === "no_workspace" ? (s(), T(ht, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              $(X, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (N) => J.$emit("start-setup"))
              }, {
                default: i(() => [...U[13] || (U[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "unmanaged" ? (s(), T(ht, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              $(X, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (N) => J.$emit("view-environments"))
              }, {
                default: i(() => [...U[14] || (U[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "empty_workspace" ? (s(), T(ht, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: i(() => [
              $(X, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (N) => J.$emit("create-environment"))
              }, {
                default: i(() => [...U[15] || (U[15] = [
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
              $(ct, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...U[16] || (U[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              $(Ro, { name: "fade" }, {
                default: i(() => [
                  g.value ? (s(), T(X, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: m
                  }, {
                    default: i(() => [...U[17] || (U[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            $(ln, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Kt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), T(Et, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), T(Et, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), T(Et, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                $(Et, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: O.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), T(Et, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), T(Et, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), T(Et, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                V.value ? (s(), T(Et, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                I.value && !S.value && !V.value ? (s(), T(Et, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                I.value ? r("", !0) : (s(), T(Et, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              Y.value ? {
                name: "footer",
                fn: i(() => [
                  U[19] || (U[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", nl, [
                    e("span", al, a(se.value), 1),
                    $(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (N) => J.$emit("commit-changes"))
                    }, {
                      default: i(() => [...U[18] || (U[18] = [
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
          t.status.is_detached_head ? (s(), T(ht, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              $(X, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (N) => J.$emit("create-branch"))
              }, {
                default: i(() => [...U[20] || (U[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", ll, [
            $(ct, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...U[21] || (U[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            H.value ? (s(), o(B, { key: 0 }, [
              E.value.length > 0 ? (s(), T(ht, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: E.value.map((N) => `${N.name} — ${N.issue_summary}`)
              }, {
                actions: i(() => [
                  $(X, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (N) => J.$emit("view-workflows"))
                  }, {
                    default: i(() => [...U[22] || (U[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              _.value.length > 0 ? (s(), T(ht, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${_.value.length} workflow${_.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: _.value.map((N) => `${N.name} — ${N.models_needing_path_sync_count} model path${N.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  $(X, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (N) => J.$emit("view-workflows"))
                  }, {
                    default: i(() => [...U[23] || (U[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !M.value ? (s(), T(ht, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  $(X, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: C
                  }, {
                    default: i(() => [
                      h(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  $(X, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (N) => J.$emit("view-workflows"))
                  }, {
                    default: i(() => [...U[24] || (U[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), T(ht, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: K.value,
                items: te.value
              }, {
                actions: i(() => [
                  $(X, {
                    variant: "secondary",
                    size: "sm",
                    onClick: m
                  }, {
                    default: i(() => [...U[25] || (U[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  $(X, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (N) => J.$emit("view-nodes"))
                  }, {
                    default: i(() => [...U[26] || (U[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), T(ht, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: i(() => [
                  $(X, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (N) => J.$emit("view-nodes"))
                  }, {
                    default: i(() => [...U[27] || (U[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : Y.value ? (s(), o("span", il, "No issues")) : (s(), T(_t, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      $(sl, {
        show: c.value,
        status: t.status,
        "is-repairing": b.value,
        onClose: U[12] || (U[12] = (N) => c.value = !1),
        onNavigateWorkflows: p,
        onNavigateNodes: d,
        onRepair: k
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), dl = /* @__PURE__ */ ne(rl, [["__scopeId", "data-v-55fcd77f"]]), cl = ["type", "value", "placeholder", "disabled"], ul = /* @__PURE__ */ oe({
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
    const l = t, c = n, g = y(null);
    function m(p) {
      const d = p.target.value;
      c("update:modelValue", d);
    }
    return Ne(() => {
      l.autoFocus && g.value && g.value.focus();
    }), u({
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
}), bs = /* @__PURE__ */ ne(ul, [["__scopeId", "data-v-0380d08f"]]), ml = { class: "branch-create-form" }, vl = { class: "form-actions" }, fl = /* @__PURE__ */ oe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, l = y(""), c = z(() => {
      const p = l.value.trim();
      return p.length > 0 && !p.startsWith("-") && !p.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(p);
    });
    function g() {
      c.value && (n("create", l.value.trim()), l.value = "");
    }
    function m() {
      l.value = "", n("cancel");
    }
    return (p, d) => (s(), o("div", ml, [
      $(bs, {
        modelValue: l.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => l.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", vl, [
        $(X, {
          variant: "primary",
          size: "sm",
          disabled: !c.value,
          onClick: g
        }, {
          default: i(() => [...d[1] || (d[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        $(X, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: i(() => [...d[2] || (d[2] = [
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
}, kl = /* @__PURE__ */ oe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: fe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (l) => t.clickable && u.$emit("click"))
    }, [
      e("span", gl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", hl, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (s(), o("div", yl, [
        Re(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", wl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), bl = /* @__PURE__ */ ne(kl, [["__scopeId", "data-v-c6581a24"]]), _l = {
  key: 2,
  class: "branch-list"
}, $l = /* @__PURE__ */ oe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, l = y(!1);
    function c(m) {
      n("create", m), g();
    }
    function g() {
      l.value = !1;
    }
    return (m, p) => (s(), T(nt, null, {
      header: i(() => [
        $(at, { title: "BRANCHES" }, {
          actions: i(() => [
            l.value ? r("", !0) : (s(), T(X, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: p[0] || (p[0] = (d) => l.value = !0)
            }, {
              default: i(() => [...p[1] || (p[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        l.value ? (s(), T(pl, {
          key: 0,
          onCreate: c,
          onCancel: g
        })) : r("", !0),
        t.branches.length === 0 ? (s(), T(_t, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", _l, [
          (s(!0), o(B, null, ie(t.branches, (d) => (s(), T(bl, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: i(() => [
              d.is_current ? r("", !0) : (s(), T(X, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => m.$emit("delete", d.name)
              }, {
                default: i(() => [...p[2] || (p[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), T(X, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => m.$emit("switch", d.name)
              }, {
                default: i(() => [...p[3] || (p[3] = [
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
}), Cl = /* @__PURE__ */ ne($l, [["__scopeId", "data-v-86784ddd"]]), xl = { class: "commit-list" }, Sl = /* @__PURE__ */ oe({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (s(), o("div", xl, [
      Re(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Il = /* @__PURE__ */ ne(Sl, [["__scopeId", "data-v-8c5ee761"]]), El = { class: "commit-hash" }, Tl = /* @__PURE__ */ oe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = z(() => u.hash.slice(0, u.length));
    return (l, c) => (s(), o("span", El, a(n.value), 1));
  }
}), oo = /* @__PURE__ */ ne(Tl, [["__scopeId", "data-v-7c333cc6"]]), Rl = { class: "commit-message" }, Pl = { class: "commit-date" }, Ml = /* @__PURE__ */ oe({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, l = u;
    function c() {
      n.clickable && l("click");
    }
    return (g, m) => (s(), o("div", {
      class: fe(["commit-item", { clickable: t.clickable }]),
      onClick: c
    }, [
      $(oo, { hash: t.hash }, null, 8, ["hash"]),
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
}), Dl = /* @__PURE__ */ ne(Ml, [["__scopeId", "data-v-dd7c621b"]]), Ll = /* @__PURE__ */ oe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (s(), T(nt, null, {
      header: i(() => [
        $(at, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), T(_t, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), T(Il, { key: 1 }, {
          default: i(() => [
            (s(!0), o(B, null, ie(t.commits, (l) => (s(), T(Dl, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (c) => u.$emit("select", l)
            }, {
              actions: i(() => [
                $(X, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => u.$emit("checkout", l),
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
  ...Array(12).fill(null).map((t, u) => ({
    name: `synced-workflow-${u + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + u,
    model_count: 1 + u % 3,
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
  const t = y(!1), u = y(null);
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
  async function l(W = !1) {
    return n(W ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function c(W, de = !1) {
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
  async function b(W) {
    return n(`/v2/comfygit/commit/${W}`);
  }
  async function k(W, de = !1) {
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
  async function R(W, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(W)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function C() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const W = await l();
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
  async function I(W) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function S() {
    return n("/v2/workspace/environments/create_status");
  }
  async function Y(W = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${W}`);
  }
  async function F(W) {
    return n(`/v2/workspace/environments/${W}`, {
      method: "DELETE"
    });
  }
  async function V(W = !1) {
    try {
      return n(W ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await l(W), ke = [];
      return de.workflows.new.forEach((We) => {
        ke.push({ name: We, status: "new", missing_nodes: 0, missing_models: 0, path: We });
      }), de.workflows.modified.forEach((We) => {
        ke.push({ name: We, status: "modified", missing_nodes: 0, missing_models: 0, path: We });
      }), de.workflows.synced.forEach((We) => {
        ke.push({ name: We, status: "synced", missing_nodes: 0, missing_models: 0, path: We });
      }), ke;
    }
  }
  async function E(W) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(W)}/details`);
  }
  async function _(W) {
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
  async function H(W, de, ke) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(W)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: ke })
    });
  }
  async function se() {
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
  async function J(W) {
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
        await _(ke), de.success++;
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
  async function q(W) {
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
    error: u,
    getStatus: l,
    commit: c,
    getHistory: g,
    exportEnv: m,
    validateExport: p,
    validateDeploy: d,
    exportEnvWithForce: v,
    // Git Operations
    getBranches: w,
    getCommitDetail: b,
    checkout: k,
    createBranch: f,
    switchBranch: x,
    deleteBranch: R,
    // Environment Management
    getEnvironments: C,
    switchEnvironment: P,
    getSwitchProgress: O,
    createEnvironment: I,
    getCreateProgress: S,
    getComfyUIReleases: Y,
    deleteEnvironment: F,
    // Workflow Management
    getWorkflows: V,
    getWorkflowDetails: E,
    resolveWorkflow: _,
    installWorkflowDeps: M,
    setModelImportance: H,
    // Model Management
    getEnvironmentModels: se,
    getWorkspaceModels: K,
    getModelDetails: te,
    openFileLocation: J,
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
    removeCustomWorker: q,
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
async function as(t, u = {}, n = 5e3) {
  const l = new AbortController(), c = setTimeout(() => l.abort(), n);
  try {
    const g = await fetch(t, {
      ...u,
      signal: l.signal
    });
    return clearTimeout(c), g;
  } catch (g) {
    throw clearTimeout(c), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function no() {
  const t = y(null);
  async function u() {
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
    if (t.value || (t.value = await u()), !t.value)
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
      return t.value = await u(), null;
    }
  }
  async function l() {
    if (t.value || (t.value = await u()), !t.value)
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
  async function c() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await as(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await u()), !t.value)
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
    discoverControlPort: u,
    checkHealth: n,
    getStatus: l,
    restart: c,
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
}, Wl = /* @__PURE__ */ oe({
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
    const n = t, l = u;
    function c() {
      n.closeOnOverlayClick && l("close");
    }
    function g(m) {
      m.key === "Escape" && n.showCloseButton && l("close");
    }
    return Ne(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Cs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (m, p) => (s(), T(et, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: c
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
}, Kl = /* @__PURE__ */ oe({
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
    return (u, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (l) => u.$emit("click", l))
    }, [
      t.loading ? (s(), o("span", jl)) : r("", !0),
      Re(u.$slots, "default", {}, void 0, !0)
    ], 10, Gl));
  }
}), ye = /* @__PURE__ */ ne(Kl, [["__scopeId", "data-v-f3452606"]]), Hl = {
  key: 0,
  class: "base-title-count"
}, ql = /* @__PURE__ */ oe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (s(), T(Os(`h${t.level}`), {
      class: fe(["base-title", t.variant])
    }, {
      default: i(() => [
        Re(u.$slots, "default", {}, void 0, !0),
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
}, Zl = /* @__PURE__ */ oe({
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
    function u(l) {
      return typeof l == "string" ? l : l.value;
    }
    function n(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, c) => (s(), o("div", {
      class: fe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: fe(["base-select", { error: !!t.error }]),
        onChange: c[0] || (c[0] = (g) => l.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Jl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(B, null, ie(t.options, (g) => (s(), o("option", {
          key: u(g),
          value: u(g)
        }, a(n(g)), 9, Xl))), 128))
      ], 42, Yl),
      t.error ? (s(), o("span", Ql, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), ei = /* @__PURE__ */ ne(Zl, [["__scopeId", "data-v-7436d745"]]), ti = { class: "popover-header" }, si = { class: "popover-title" }, oi = { class: "popover-content" }, ni = {
  key: 0,
  class: "popover-actions"
}, ai = /* @__PURE__ */ oe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (s(), T(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (l) => u.$emit("close"))
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
              onClick: n[0] || (n[0] = (l) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", oi, [
            Re(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (s(), o("div", ni, [
            Re(u.$slots, "actions", {}, void 0, !0)
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
}, Si = /* @__PURE__ */ oe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, l = u, { getWorkflowDetails: c, setModelImportance: g, openFileLocation: m } = Ae(), p = y(null), d = y(!1), v = y(null), w = y(!1), b = y({}), k = y(!1), f = y(/* @__PURE__ */ new Set()), x = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function R(E) {
      switch (E) {
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
    function C(E) {
      switch (E) {
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
    function P(E) {
      if (!E.loaded_by || E.loaded_by.length === 0) return [];
      const _ = E.hash || E.filename;
      return f.value.has(_) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function O(E) {
      return f.value.has(E);
    }
    function I(E) {
      f.value.has(E) ? f.value.delete(E) : f.value.add(E), f.value = new Set(f.value);
    }
    async function S() {
      d.value = !0, v.value = null;
      try {
        p.value = await c(n.workflowName);
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function Y(E, _) {
      b.value[E] = _, w.value = !0;
    }
    async function F(E) {
      try {
        await m(E);
      } catch (_) {
        v.value = _ instanceof Error ? _.message : "Failed to open file location";
      }
    }
    async function V() {
      if (!w.value) {
        l("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [E, _] of Object.entries(b.value))
          await g(n.workflowName, E, _);
        l("refresh"), l("close");
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Ne(S), (E, _) => (s(), o(B, null, [
      $(He, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: _[4] || (_[4] = (M) => l("close"))
      }, {
        body: i(() => [
          p.value ? (s(), o(B, { key: 0 }, [
            e("section", li, [
              $(cs, { variant: "section" }, {
                default: i(() => [
                  h("MODELS USED (" + a(p.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              p.value.models.length === 0 ? (s(), o("div", ii, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(B, null, ie(p.value.models, (M) => {
                var H;
                return s(), o("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  e("div", ri, [
                    _[6] || (_[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", di, a(M.filename), 1)
                  ]),
                  e("div", ci, [
                    e("div", ui, [
                      _[7] || (_[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: fe(["value", R(M.status)])
                      }, a(C(M.status)), 3)
                    ]),
                    e("div", mi, [
                      e("span", vi, [
                        _[8] || (_[8] = h(" Importance: ", -1)),
                        $(so, {
                          size: 14,
                          title: "About importance levels",
                          onClick: _[0] || (_[0] = (se) => k.value = !0)
                        })
                      ]),
                      $(ei, {
                        "model-value": b.value[M.filename] || M.importance,
                        options: x,
                        "onUpdate:modelValue": (se) => Y(M.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (s(), o("div", fi, [
                      _[9] || (_[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", pi, [
                        (s(!0), o(B, null, ie(P(M), (se, K) => (s(), o("div", {
                          key: `${se.node_id}-${K}`,
                          class: "node-reference"
                        }, a(se.node_type) + " (Node #" + a(se.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => I(M.hash || M.filename)
                        }, a(O(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, gi)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    M.size_mb ? (s(), o("div", hi, [
                      _[10] || (_[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", yi, a(M.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    M.has_category_mismatch ? (s(), o("div", wi, [
                      _[13] || (_[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ki, [
                        _[11] || (_[11] = h(" In ", -1)),
                        e("code", null, a(M.actual_category) + "/", 1),
                        _[12] || (_[12] = h(" but loader needs ", -1)),
                        e("code", null, a((H = M.expected_categories) == null ? void 0 : H[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  M.status !== "available" ? (s(), o("div", bi, [
                    M.status === "downloadable" ? (s(), T(ye, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: _[1] || (_[1] = (se) => l("resolve"))
                    }, {
                      default: i(() => [..._[14] || (_[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (s(), T(ye, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => F(M.file_path)
                    }, {
                      default: i(() => [..._[15] || (_[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (s(), T(ye, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: _[2] || (_[2] = (se) => l("resolve"))
                    }, {
                      default: i(() => [..._[16] || (_[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", _i, [
              $(cs, { variant: "section" }, {
                default: i(() => [
                  h("NODES USED (" + a(p.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              p.value.nodes.length === 0 ? (s(), o("div", $i, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(B, null, ie(p.value.nodes, (M) => (s(), o("div", {
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
        footer: i(() => [
          $(ye, {
            variant: "secondary",
            onClick: _[3] || (_[3] = (M) => l("close"))
          }, {
            default: i(() => [..._[17] || (_[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (s(), T(ye, {
            key: 0,
            variant: "primary",
            onClick: V
          }, {
            default: i(() => [..._[18] || (_[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      $($t, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: _[5] || (_[5] = (M) => k.value = !1)
      }, {
        content: i(() => [..._[19] || (_[19] = [
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
  return ze.items.find((u) => u.id === t);
}
async function Qt() {
  if (ze.status === "downloading") return;
  const t = ze.items.find((u) => u.status === "queued");
  if (!t) {
    ze.status = "idle";
    return;
  }
  ze.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Ei(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    ze.status = "idle", Qt();
  }
}
async function Ei(t) {
  return new Promise((u, n) => {
    Tt && (Tt.close(), Tt = null);
    const l = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), c = new EventSource(`/v2/comfygit/models/download-stream?${l}`);
    Tt = c;
    let g = Date.now(), m = 0, p = !1;
    c.onmessage = (d) => {
      try {
        const v = JSON.parse(d.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const w = Date.now(), b = (w - g) / 1e3;
            if (b > 0.5) {
              const k = t.downloaded - m;
              if (t.speed = k / b, g = w, m = t.downloaded, t.speed > 0 && t.size > 0) {
                const f = t.size - t.downloaded;
                t.eta = f / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            p = !0, c.close(), Tt = null, u();
            break;
          case "error":
            p = !0, c.close(), Tt = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, c.onerror = () => {
      c.close(), Tt = null, p || n(new Error("Connection lost"));
    };
  });
}
async function Ti() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (ze.items.some((c) => c.url === n.url && c.filename === n.filename))
        continue;
      const l = {
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
      ze.items.push(l);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function fs() {
  function t(C) {
    for (const P of C) {
      if (ze.items.some(
        (S) => S.url === P.url && S.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const I = {
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
      ze.items.push(I);
    }
    ze.status === "idle" && Qt();
  }
  async function u(C) {
    const P = Is(C);
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
        const O = ze.items.findIndex((I) => I.id === C);
        O >= 0 && ze.items.splice(O, 1);
      }
    }
  }
  function n(C) {
    const P = Is(C);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, ze.status === "idle" && Qt());
  }
  function l(C) {
    const P = Is(C);
    !P || P.status !== "paused" || (P.status = "queued", ze.status === "idle" && Qt());
  }
  function c() {
    const C = ze.items.filter((P) => P.status === "paused");
    for (const P of C)
      P.status = "queued";
    ze.status === "idle" && Qt();
  }
  function g(C) {
    const P = ze.items.findIndex((O) => O.id === C);
    P >= 0 && ["completed", "failed", "paused"].includes(ze.items[P].status) && ze.items.splice(P, 1);
  }
  function m() {
    ze.items = ze.items.filter((C) => C.status !== "completed");
  }
  function p() {
    ze.items = ze.items.filter((C) => C.status !== "failed");
  }
  const d = z(
    () => ze.items.find((C) => C.status === "downloading")
  ), v = z(
    () => ze.items.filter((C) => C.status === "queued")
  ), w = z(
    () => ze.items.filter((C) => C.status === "completed")
  ), b = z(
    () => ze.items.filter((C) => C.status === "failed")
  ), k = z(
    () => ze.items.filter((C) => C.status === "paused")
  ), f = z(() => ze.items.length > 0), x = z(
    () => ze.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), R = z(
    () => ze.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Po(ze),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: w,
    failedItems: b,
    pausedItems: k,
    hasItems: f,
    activeCount: x,
    hasPaused: R,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: l,
    resumeAllPaused: c,
    removeItem: g,
    clearCompleted: m,
    clearFailed: p,
    loadPendingDownloads: Ti
  };
}
function lo() {
  const t = y(null), u = y(null), n = y([]), l = y([]), c = y(!1), g = y(null);
  async function m(O, I) {
    var Y;
    if (!((Y = window.app) != null && Y.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(O, I);
    if (!S.ok) {
      const F = await S.json().catch(() => ({})), V = F.error || F.message || `Request failed: ${S.status}`;
      throw new Error(V);
    }
    return S.json();
  }
  async function p(O) {
    c.value = !0, g.value = null;
    try {
      let I;
      return Xt() || (I = await m(
        `/v2/comfygit/workflow/${O}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = I, I;
    } catch (I) {
      const S = I instanceof Error ? I.message : "Unknown error occurred";
      throw g.value = S, I;
    } finally {
      c.value = !1;
    }
  }
  async function d(O, I, S, Y) {
    c.value = !0, g.value = null;
    try {
      let F;
      if (!Xt()) {
        const V = Object.fromEntries(I), E = Object.fromEntries(S), _ = Y ? Array.from(Y) : [];
        F = await m(
          `/v2/comfygit/workflow/${O}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: V,
              model_choices: E,
              skipped_packages: _
            })
          }
        );
      }
      return u.value = F, F;
    } catch (F) {
      const V = F instanceof Error ? F.message : "Unknown error occurred";
      throw g.value = V, F;
    } finally {
      c.value = !1;
    }
  }
  async function v(O, I = 10) {
    c.value = !0, g.value = null;
    try {
      let S;
      return Xt() || (S = await m(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: I })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const Y = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = Y, S;
    } finally {
      c.value = !1;
    }
  }
  async function w(O, I = 10) {
    c.value = !0, g.value = null;
    try {
      let S;
      return Xt() || (S = await m(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: I })
        }
      )), l.value = S.results, S.results;
    } catch (S) {
      const Y = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = Y, S;
    } finally {
      c.value = !1;
    }
  }
  const b = vs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    b.phase = "idle", b.currentFile = void 0, b.currentFileIndex = void 0, b.totalFiles = void 0, b.bytesDownloaded = void 0, b.bytesTotal = void 0, b.completedFiles = [], b.nodesToInstall = [], b.nodesInstalled = [], b.installError = void 0, b.needsRestart = void 0, b.error = void 0, b.nodeInstallProgress = void 0;
  }
  async function f(O) {
    b.phase = "installing", b.nodesInstalled = [], b.installError = void 0, b.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xt(), await x(O);
    } catch (I) {
      const S = I instanceof Error ? I.message : "Failed to install nodes";
      throw b.installError = S, I;
    }
  }
  async function x(O) {
    var S;
    const I = await m(
      `/v2/comfygit/workflow/${O}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: b.nodesToInstall
        })
      }
    );
    if (b.nodeInstallProgress) {
      b.nodeInstallProgress.totalNodes = b.nodesToInstall.length;
      const Y = new Map(((S = I.failed) == null ? void 0 : S.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < b.nodesToInstall.length; F++) {
        const V = b.nodesToInstall[F], E = Y.get(V);
        b.nodeInstallProgress.completedNodes.push({
          node_id: V,
          success: !E,
          error: E
        });
      }
    }
    return b.nodesInstalled = I.nodes_installed, b.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (b.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function R(O, I, S) {
    k(), b.phase = "resolving", g.value = null;
    const Y = Object.fromEntries(I), F = Object.fromEntries(S);
    try {
      const V = await fetch(`/v2/comfygit/workflow/${O}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: Y,
          model_choices: F
        })
      });
      if (!V.ok)
        throw new Error(`Request failed: ${V.status}`);
      if (!V.body)
        throw new Error("No response body");
      const E = V.body.getReader(), _ = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: H, value: se } = await E.read();
        if (H) break;
        M += _.decode(se, { stream: !0 });
        const K = M.split(`

`);
        M = K.pop() || "";
        for (const te of K) {
          if (!te.trim()) continue;
          const J = te.split(`
`);
          let U = "", N = "";
          for (const D of J)
            D.startsWith("event: ") ? U = D.slice(7) : D.startsWith("data: ") && (N = D.slice(6));
          if (N)
            try {
              const D = JSON.parse(N);
              C(U, D);
            } catch (D) {
              console.warn("Failed to parse SSE event:", D);
            }
        }
      }
    } catch (V) {
      const E = V instanceof Error ? V.message : "Unknown error occurred";
      throw g.value = E, b.error = E, b.phase = "error", V;
    }
  }
  function C(O, I) {
    switch (O) {
      case "batch_start":
        b.phase = "downloading", b.totalFiles = I.total;
        break;
      case "file_start":
        b.currentFile = I.filename, b.currentFileIndex = I.index, b.bytesDownloaded = 0, b.bytesTotal = void 0;
        break;
      case "file_progress":
        b.bytesDownloaded = I.downloaded, b.bytesTotal = I.total;
        break;
      case "file_complete":
        b.completedFiles.push({
          filename: I.filename,
          success: I.success,
          error: I.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        b.nodesToInstall = I.nodes_to_install || [], I.download_results && (b.completedFiles = I.download_results), b.phase = "complete";
        break;
      case "error":
        b.error = I.message, b.phase = "error", g.value = I.message;
        break;
    }
  }
  function P(O, I) {
    const { addToQueue: S } = fs(), Y = I.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: O,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return Y.length > 0 && S(Y), Y.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: l,
    isLoading: c,
    error: g,
    progress: b,
    // Methods
    analyzeWorkflow: p,
    applyResolution: d,
    applyResolutionWithProgress: R,
    installNodes: f,
    searchNodes: v,
    searchModels: w,
    resetProgress: k,
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
}, Ni = { class: "stepper-content" }, Oi = /* @__PURE__ */ oe({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: u }) {
    const n = t, l = u;
    function c(v) {
      var w;
      if ((w = n.stepStats) != null && w[v]) {
        const b = n.stepStats[v];
        return b.total > 0 && b.resolved === b.total;
      }
      return n.completedSteps.includes(v);
    }
    function g(v) {
      var w;
      if ((w = n.stepStats) != null && w[v]) {
        const b = n.stepStats[v];
        return b.resolved > 0 && b.resolved < b.total;
      }
      return !1;
    }
    function m(v) {
      return c(v) ? "state-complete" : g(v) ? "state-partial" : "state-pending";
    }
    function p(v) {
      return !1;
    }
    function d(v) {
      l("step-change", v);
    }
    return (v, w) => (s(), o("div", Ri, [
      e("div", Pi, [
        (s(!0), o(B, null, ie(t.steps, (b, k) => (s(), o("div", {
          key: b.id,
          class: fe(["step", {
            active: t.currentStep === b.id,
            completed: c(b.id),
            "in-progress": g(b.id),
            disabled: p(b.id)
          }]),
          onClick: (f) => d(b.id)
        }, [
          e("div", {
            class: fe(["step-indicator", m(b.id)])
          }, [
            c(b.id) ? (s(), o("span", Di, "✓")) : (s(), o("span", Li, a(k + 1), 1))
          ], 2),
          e("div", zi, a(b.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", Ui)) : r("", !0)
        ], 10, Mi))), 128))
      ]),
      e("div", Ni, [
        Re(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ai = /* @__PURE__ */ ne(Oi, [["__scopeId", "data-v-2a7b3af8"]]), Fi = /* @__PURE__ */ oe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = z(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), l = z(() => `confidence-${n.value}`), c = z(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, m) => (s(), o("span", {
      class: fe(["confidence-badge", l.value, t.size])
    }, a(c.value), 3));
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
}, fr = { class: "action-buttons" }, pr = /* @__PURE__ */ oe({
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
  setup(t, { emit: u }) {
    const n = t, l = u;
    function c(d, v = 80) {
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
      l("option-selected", d);
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
          $(ye, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (w) => l("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ji, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ki, [
            (s(!0), o(B, null, ie(t.options, (w, b) => (s(), o("label", {
              key: w.package_id,
              class: fe(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (k) => p(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (k) => p(b)
              }, null, 40, qi),
              e("div", Yi, [
                e("div", Ji, [
                  e("span", Xi, a(w.package_id), 1),
                  $(_s, {
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
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (w) => l("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (w) => l("manual-entry"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (w) => l("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", sr, [
          t.isSearching ? (s(), o("div", or, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(B, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", nr, [
              (s(!0), o(B, null, ie(t.searchResults.slice(0, 5), (w, b) => (s(), o("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (k) => l("search-result-selected", w)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: b
                }, null, 8, lr),
                e("div", ir, [
                  e("div", rr, [
                    e("span", dr, a(w.package_id), 1),
                    $(_s, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (s(), o("div", cr, a(c(w.description)), 1)) : r("", !0),
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
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (w) => l("search"))
            }, {
              default: i(() => {
                var w;
                return [
                  h(a((w = t.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (w) => l("manual-entry"))
            }, {
              default: i(() => [...v[16] || (v[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (w) => l("mark-optional"))
            }, {
              default: i(() => [...v[17] || (v[17] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), gr = /* @__PURE__ */ ne(pr, [["__scopeId", "data-v-c2997d1d"]]), hr = { class: "item-navigator" }, yr = { class: "nav-item-info" }, wr = ["title"], kr = { class: "nav-controls" }, br = { class: "nav-arrows" }, _r = ["disabled"], $r = ["disabled"], Cr = { class: "nav-position" }, xr = /* @__PURE__ */ oe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (l, c) => (s(), o("div", hr, [
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
            onClick: c[0] || (c[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, _r),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: c[1] || (c[1] = (g) => n("next")),
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
}, Er = /* @__PURE__ */ oe({
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
    return (u, n) => (s(), o("div", {
      class: fe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: fe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (l) => u.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          n[1] || (n[1] = wt((l) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = wt((l) => u.$emit("escape"), ["escape"]))
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
}, sd = { class: "node-manual-entry-modal" }, od = { class: "node-modal-body" }, nd = { class: "node-modal-actions" }, ad = /* @__PURE__ */ oe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, l = u, { searchNodes: c } = lo(), g = y(0), m = y(!1), p = y(!1), d = y(""), v = y(""), w = y([]), b = y(!1), k = y(/* @__PURE__ */ new Map()), f = y(/* @__PURE__ */ new Set()), x = y(!1);
    function R() {
      x.value && N(), x.value = !1;
    }
    const C = z(() => n.nodes[g.value]), P = z(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), O = z(() => C.value ? k.value.get(C.value.node_type) || [] : []), I = z(() => C.value ? f.value.has(C.value.node_type) : !1);
    ut(C, async (me) => {
      var ge;
      me && ((ge = me.options) != null && ge.length || k.value.has(me.node_type) || f.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await S(me.node_type));
    }, { immediate: !0 });
    async function S(me) {
      f.value.add(me);
      try {
        const ge = await c(me, 5);
        k.value.set(me, ge);
      } catch {
        k.value.set(me, []);
      } finally {
        f.value.delete(me);
      }
    }
    const Y = z(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function F(me) {
      return n.skippedPackages.has(me);
    }
    function V(me) {
      l("package-skip", me);
    }
    const E = z(() => {
      var ge;
      if (!C.value) return "not-found";
      const me = n.nodeChoices.get(C.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ge = C.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), _ = z(() => {
      var ge;
      if (!C.value) return;
      const me = n.nodeChoices.get(C.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return me.package_id ? `→ ${me.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ge = C.value.options) != null && ge.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function M(me) {
      me >= 0 && me < n.nodes.length && (g.value = me);
    }
    function H() {
      C.value && l("mark-optional", C.value.node_type);
    }
    function se() {
      C.value && l("skip", C.value.node_type);
    }
    function K(me) {
      C.value && l("option-selected", C.value.node_type, me);
    }
    function te() {
      C.value && l("clear-choice", C.value.node_type);
    }
    function J() {
      C.value && (d.value = C.value.node_type, w.value = O.value, m.value = !0, be(d.value));
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
      b.value = !0;
      try {
        w.value = await c(me, 10);
      } catch {
        w.value = [];
      } finally {
        b.value = !1;
      }
    }
    function Ce(me) {
      C.value && (l("manual-entry", C.value.node_type, me.package_id), N());
    }
    function Le(me) {
      C.value && l("manual-entry", C.value.node_type, me.package_id);
    }
    function Ue() {
      !C.value || !v.value.trim() || (l("manual-entry", C.value.node_type, v.value.trim()), D());
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
            e("span", Mr, a(Y.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Dr, [
            (s(!0), o(B, null, ie(t.autoResolvedPackages, (Z) => (s(), o("div", {
              key: Z.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Lr, [
                e("code", zr, a(Z.package_id), 1),
                e("span", Ur, a(Z.node_types_count) + " node type" + a(Z.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Nr, [
                F(Z.package_id) ? (s(), o("span", Ar, " SKIPPED ")) : (s(), o("span", Or, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (De) => V(Z.package_id)
                }, a(F(Z.package_id) ? "Include" : "Skip"), 9, Fr)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Br)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(B, { key: 2 }, [
          e("div", Vr, [
            ge[7] || (ge[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Wr, a(P.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          C.value ? (s(), T(io, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ge[0] || (ge[0] = (Z) => M(g.value - 1)),
            onNext: ge[1] || (ge[1] = (Z) => M(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          C.value ? (s(), o("div", Gr, [
            $(gr, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((Me = C.value.options) != null && Me.length),
              options: C.value.options,
              choice: (ce = t.nodeChoices) == null ? void 0 : ce.get(C.value.node_type),
              status: E.value,
              "status-label": _.value,
              "search-results": O.value,
              "is-searching": I.value,
              onMarkOptional: H,
              onSkip: se,
              onManualEntry: U,
              onSearch: J,
              onOptionSelected: K,
              onClearChoice: te,
              onSearchResultSelected: Le
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", jr, [...ge[8] || (ge[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), T(et, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ge[4] || (ge[4] = Be((Z) => x.value = !0, ["self"])),
            onMouseup: Be(R, ["self"])
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
                $(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (Z) => d.value = Z),
                  placeholder: "Search by node type, package name...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                e("div", Hr, [
                  w.value.length > 0 ? (s(), o("div", qr, [
                    (s(!0), o(B, null, ie(w.value, (Z) => (s(), o("div", {
                      key: Z.package_id,
                      class: "node-search-result-item",
                      onClick: (De) => Ce(Z)
                    }, [
                      e("div", Jr, [
                        e("code", Xr, a(Z.package_id), 1),
                        Z.match_confidence ? (s(), T(_s, {
                          key: 0,
                          confidence: Z.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      Z.description ? (s(), o("div", Qr, a(Z.description), 1)) : r("", !0)
                    ], 8, Yr))), 128))
                  ])) : b.value ? (s(), o("div", Zr, "Searching...")) : d.value ? (s(), o("div", ed, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", td, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), T(et, { to: "body" }, [
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
                $(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ge[5] || (ge[5] = (Z) => v.value = Z),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", nd, [
                  $(ye, {
                    variant: "secondary",
                    onClick: D
                  }, {
                    default: i(() => [...ge[11] || (ge[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(ye, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Ue
                  }, {
                    default: i(() => [...ge[12] || (ge[12] = [
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
}, Cd = { class: "action-buttons" }, xd = /* @__PURE__ */ oe({
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
    const n = t, l = u, c = z(() => !!n.choice);
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
      l("option-selected", d);
    }
    function p(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (s(), o("div", {
      class: fe(["model-resolution-item", { resolved: c.value, ambiguous: t.hasMultipleOptions }])
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
        c.value ? (s(), o("div", cd, [
          $(ye, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (w) => l("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ud, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", md, [
            (s(!0), o(B, null, ie(t.options, (w, b) => (s(), o("label", {
              key: w.model.hash,
              class: fe(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (k) => m(b)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (k) => m(b)
              }, null, 40, fd),
              e("div", pd, [
                e("div", gd, [
                  e("span", hd, a(w.model.filename), 1),
                  $(_s, {
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
            $(ye, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (w) => l("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(ye, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (w) => l("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (w) => l("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
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
            $(ye, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (w) => l("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (w) => l("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (w) => l("mark-optional"))
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
}, Hd = { class: "model-download-url-modal" }, qd = { class: "model-modal-body" }, Yd = { class: "model-input-group" }, Jd = { class: "model-input-group" }, Xd = { class: "model-modal-actions" }, Qd = /* @__PURE__ */ oe({
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
    function l(N) {
      var D;
      return N && ((D = n[N]) == null ? void 0 : D[0]) || null;
    }
    const c = t, g = u, m = y(0), p = y(!1), d = y(!1), v = y(""), w = y(""), b = y(""), k = y([]), f = y(!1), x = z(() => c.models[m.value]), R = z(() => c.models.some((N) => N.is_download_intent)), C = z(() => c.models.filter(
      (N) => c.modelChoices.has(N.filename) || N.is_download_intent
    ).length), P = z(() => {
      var D;
      if (!x.value) return "";
      const N = l((D = x.value.reference) == null ? void 0 : D.node_type);
      return N ? `${N}/${x.value.filename}` : "";
    }), O = z(() => {
      var D;
      if (!x.value) return "not-found";
      const N = c.modelChoices.get(x.value.filename);
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
    }), I = z(() => {
      var D, ve;
      if (!x.value) return;
      const N = c.modelChoices.get(x.value.filename);
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
    function S(N) {
      N >= 0 && N < c.models.length && (m.value = N);
    }
    function Y() {
      x.value && g("mark-optional", x.value.filename);
    }
    function F() {
      x.value && g("skip", x.value.filename);
    }
    function V(N) {
      x.value && g("option-selected", x.value.filename, N);
    }
    function E() {
      x.value && g("clear-choice", x.value.filename);
    }
    function _() {
      x.value && (v.value = x.value.filename, p.value = !0);
    }
    function M() {
      x.value && (w.value = x.value.download_source || "", b.value = x.value.target_path || P.value, d.value = !0);
    }
    function H() {
      p.value = !1, v.value = "", k.value = [];
    }
    function se() {
      d.value = !1, w.value = "", b.value = "";
    }
    function K() {
      f.value = !0, setTimeout(() => {
        f.value = !1;
      }, 300);
    }
    function te(N) {
      x.value && H();
    }
    function J() {
      !x.value || !w.value.trim() || (g("download-url", x.value.filename, w.value.trim(), b.value.trim() || void 0), se());
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
            e("h3", Rd, a(R.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Pd, a(R.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Md, a(C.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        x.value ? (s(), T(io, {
          key: 0,
          "item-name": x.value.filename,
          "current-index": m.value,
          "total-items": t.models.length,
          onPrev: D[0] || (D[0] = (Ce) => S(m.value - 1)),
          onNext: D[1] || (D[1] = (Ce) => S(m.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        x.value ? (s(), o("div", Dd, [
          $(Sd, {
            filename: x.value.filename,
            "node-type": ((ve = x.value.reference) == null ? void 0 : ve.node_type) || "Unknown",
            "has-multiple-options": !!((ae = x.value.options) != null && ae.length),
            options: x.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(x.value.filename),
            status: O.value,
            "status-label": I.value,
            onMarkOptional: Y,
            onSkip: F,
            onDownloadUrl: M,
            onSearch: _,
            onOptionSelected: V,
            onClearChoice: E
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Ld, [...D[5] || (D[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), T(et, { to: "body" }, [
          p.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(H, ["self"])
          }, [
            e("div", zd, [
              e("div", { class: "model-modal-header" }, [
                D[6] || (D[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: H
                }, "✕")
              ]),
              e("div", Ud, [
                $(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": D[2] || (D[2] = (Ce) => v.value = Ce),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", Nd, [
                  (s(!0), o(B, null, ie(k.value, (Ce) => (s(), o("div", {
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
        (s(), T(et, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(se, ["self"])
          }, [
            e("div", Hd, [
              e("div", { class: "model-modal-header" }, [
                D[7] || (D[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: se
                }, "✕")
              ]),
              e("div", qd, [
                e("div", Yd, [
                  D[8] || (D[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  $(bt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": D[3] || (D[3] = (Ce) => w.value = Ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Jd, [
                  D[9] || (D[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  $(bt, {
                    modelValue: b.value,
                    "onUpdate:modelValue": D[4] || (D[4] = (Ce) => b.value = Ce),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Xd, [
                  $(ye, {
                    variant: "secondary",
                    onClick: se
                  }, {
                    default: i(() => [...D[10] || (D[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(ye, {
                    variant: "primary",
                    disabled: !w.value.trim() || !b.value.trim(),
                    onClick: J
                  }, {
                    default: i(() => [...D[11] || (D[11] = [
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
}, Ec = { class: "error-message" }, Tc = /* @__PURE__ */ oe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = z(() => {
      var v, w;
      const p = ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || u.progress.nodesToInstall.length;
      if (!p) return 0;
      const d = ((w = u.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(d / p * 100);
    }), l = z(() => {
      var p;
      return ((p = u.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.filter((d) => !d.success)) || [];
    }), c = z(() => l.value.length > 0);
    function g(p, d) {
      var w, b;
      const v = (w = u.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((k) => k.node_id === p);
      return v ? v.success ? "complete" : "failed" : ((b = u.progress.nodeInstallProgress) == null ? void 0 : b.currentIndex) === d ? "installing" : "pending";
    }
    function m(p) {
      var d, v;
      return (v = (d = u.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((w) => w.node_id === p)) == null ? void 0 : v.error;
    }
    return (p, d) => {
      var v, w, b, k;
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
            e("span", lc, a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0) + " / " + a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", ic, [
            (s(!0), o(B, null, ie(t.progress.nodesToInstall, (f, x) => (s(), o("div", {
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
              class: fe(["phase-icon", c.value ? "warning" : "success"])
            }, a(c.value ? "⚠" : "✓"), 3),
            e("h3", gc, a(c.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", hc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", yc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", wc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            l.value.length > 0 ? (s(), o("div", kc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", bc, a(l.value.length) + " package" + a(l.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            l.value.length > 0 ? (s(), o("div", _c, [
              (s(!0), o(B, null, ie(l.value, (f) => (s(), o("div", {
                key: f.node_id,
                class: "failed-item"
              }, [
                e("code", $c, a(f.node_id), 1),
                e("span", Cc, a(f.error), 1)
              ]))), 128))
            ])) : r("", !0),
            l.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (f) => p.$emit("retry-failed"))
            }, " Retry Failed (" + a(l.value.length) + ") ", 1)) : r("", !0),
            c.value ? r("", !0) : (s(), o("div", xc, [...d[6] || (d[6] = [
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
}, am = /* @__PURE__ */ oe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, l = u, { analyzeWorkflow: c, applyResolution: g, installNodes: m, queueModelDownloads: p, progress: d, resetProgress: v } = lo(), { loadPendingDownloads: w } = fs(), { openFileLocation: b } = Ae(), k = y(null), f = y(!1), x = y(!1), R = y(null), C = y("analysis"), P = y([]), O = y(/* @__PURE__ */ new Map()), I = y(/* @__PURE__ */ new Map()), S = y(/* @__PURE__ */ new Set()), Y = z(() => {
      const ee = [
        { id: "analysis", label: "Analysis" }
      ];
      return (V.value || M.value) && ee.push({ id: "nodes", label: "Nodes" }), (E.value || _.value) && ee.push({ id: "models", label: "Models" }), ee.push({ id: "review", label: "Review" }), C.value === "applying" && ee.push({ id: "applying", label: "Applying" }), ee;
    }), F = z(() => k.value ? k.value.stats.needs_user_input : !1), V = z(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), E = z(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), _ = z(() => k.value ? k.value.stats.download_intents > 0 : !1), M = z(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), H = z(() => k.value ? k.value.nodes.resolved.length : 0), se = z(() => k.value ? k.value.models.resolved.filter((ee) => ee.has_category_mismatch) : []), K = z(() => se.value.length > 0), te = z(() => {
      if (!k.value) return [];
      const ee = k.value.nodes.resolved.filter((G) => !G.is_installed), L = /* @__PURE__ */ new Set();
      return ee.filter((G) => L.has(G.package.package_id) ? !1 : (L.add(G.package.package_id), !0));
    }), J = z(() => {
      if (!k.value) return [];
      const ee = k.value.nodes.resolved.filter((G) => !G.is_installed), L = /* @__PURE__ */ new Map();
      for (const G of ee) {
        const le = L.get(G.package.package_id);
        le ? le.node_types_count++ : L.set(G.package.package_id, {
          package_id: G.package.package_id,
          title: G.package.title,
          node_types_count: 1
        });
      }
      return Array.from(L.values());
    }), U = z(() => te.value.filter((ee) => !S.value.has(ee.package.package_id))), N = z(() => k.value ? k.value.models.resolved.filter((ee) => ee.match_type === "download_intent").map((ee) => ({
      filename: ee.reference.widget_value,
      reference: ee.reference,
      is_download_intent: !0,
      resolved_model: ee.model,
      download_source: ee.download_source,
      target_path: ee.target_path
    })) : []), D = z(() => {
      if (!k.value) return [];
      const ee = k.value.nodes.unresolved.map((G) => ({
        node_type: G.reference.node_type,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), L = k.value.nodes.ambiguous.map((G) => ({
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
      if (!k.value) return [];
      const ee = k.value.models.unresolved.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), L = k.value.models.ambiguous.map((G) => ({
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
      for (const L of I.value.values())
        L.action === "select" && ee++;
      return ee;
    }), Ce = z(() => {
      let ee = 0;
      for (const L of I.value.values())
        L.action === "download" && ee++;
      return ee;
    }), Le = z(() => {
      let ee = 0;
      for (const L of O.value.values())
        L.action === "optional" && ee++;
      for (const L of I.value.values())
        L.action === "optional" && ee++;
      return ee;
    }), Ue = z(() => {
      let ee = S.value.size;
      for (const L of O.value.values())
        L.action === "skip" && ee++;
      for (const L of I.value.values())
        L.action === "skip" && ee++;
      for (const L of D.value)
        O.value.has(L.node_type) || ee++;
      for (const L of ve.value)
        I.value.has(L.filename) || ee++;
      return ee;
    }), me = z(() => {
      const ee = {};
      if (ee.analysis = { resolved: 1, total: 1 }, V.value) {
        const L = D.value.length, G = D.value.filter(
          (le) => O.value.has(le.node_type)
        ).length;
        ee.nodes = { resolved: G, total: L };
      }
      if (E.value || _.value) {
        const L = ae.value.length, G = ae.value.filter(
          (le) => I.value.has(le.filename) || le.is_download_intent
        ).length;
        ee.models = { resolved: G, total: L };
      }
      if (ee.review = { resolved: 1, total: 1 }, C.value === "applying") {
        const L = d.totalFiles || 1, G = d.completedFiles.length;
        ee.applying = { resolved: G, total: L };
      }
      return ee;
    });
    function ge(ee) {
      C.value = ee;
    }
    function Me() {
      const ee = Y.value.findIndex((L) => L.id === C.value);
      ee > 0 && (C.value = Y.value[ee - 1].id);
    }
    function ce() {
      const ee = Y.value.findIndex((L) => L.id === C.value);
      ee < Y.value.length - 1 && (C.value = Y.value[ee + 1].id);
    }
    async function Z() {
      f.value = !0, R.value = null;
      try {
        k.value = await c(n.workflowName);
      } catch (ee) {
        R.value = ee instanceof Error ? ee.message : "Failed to analyze workflow";
      } finally {
        f.value = !1;
      }
    }
    function De() {
      P.value.includes("analysis") || P.value.push("analysis"), V.value || M.value ? C.value = "nodes" : E.value || _.value ? C.value = "models" : C.value = "review";
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
      S.value.has(ee) ? S.value.delete(ee) : S.value.add(ee);
    }
    function qe(ee) {
      I.value.set(ee, { action: "optional" });
    }
    function Qe(ee) {
      I.value.set(ee, { action: "skip" });
    }
    function mt(ee, L) {
      var le;
      const G = ve.value.find((xe) => xe.filename === ee);
      (le = G == null ? void 0 : G.options) != null && le[L] && I.value.set(ee, {
        action: "select",
        selected_model: G.options[L].model
      });
    }
    function $e(ee, L, G) {
      I.value.set(ee, {
        action: "download",
        url: L,
        target_path: G
      });
    }
    function je(ee) {
      I.value.delete(ee);
    }
    async function it(ee) {
      try {
        await b(ee);
      } catch (L) {
        R.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function Ye() {
      var ee;
      x.value = !0, R.value = null, v(), d.phase = "resolving", C.value = "applying";
      try {
        const L = await g(n.workflowName, O.value, I.value, S.value);
        L.models_to_download && L.models_to_download.length > 0 && p(n.workflowName, L.models_to_download);
        const G = [
          ...L.nodes_to_install || [],
          ...U.value.map((xe) => xe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(G)], d.nodesToInstall.length > 0 && await m(n.workflowName), d.phase = "complete", await w();
        const le = d.installError || ((ee = d.nodeInstallProgress) == null ? void 0 : ee.completedNodes.some((xe) => !xe.success));
        !d.needsRestart && !le && setTimeout(() => {
          l("refresh"), l("install"), l("close");
        }, 1500);
      } catch (L) {
        R.value = L instanceof Error ? L.message : "Failed to apply resolution", d.error = R.value, d.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function ue() {
      l("refresh"), l("restart"), l("close");
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
    return Ne(Z), (ee, L) => (s(), T(He, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: f.value,
      error: R.value || void 0,
      "fixed-height": !0,
      onClose: L[1] || (L[1] = (G) => l("close"))
    }, {
      body: i(() => [
        f.value && !k.value ? (s(), o("div", Pc, [...L[2] || (L[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Mc, [
          $(Ai, {
            steps: Y.value,
            "current-step": C.value,
            "completed-steps": P.value,
            "step-stats": me.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          C.value === "analysis" ? (s(), o("div", Dc, [
            e("div", Lc, [
              e("div", zc, [
                L[3] || (L[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Uc, " Found " + a(k.value.stats.total_nodes) + " nodes and " + a(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Nc, [
                e("div", Oc, [
                  L[12] || (L[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Ac, [
                    H.value > 0 ? (s(), o("div", Fc, [
                      L[4] || (L[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Bc, a(H.value), 1),
                      L[5] || (L[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", Vc, [
                      L[6] || (L[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Wc, a(k.value.stats.packages_needing_installation), 1),
                      L[7] || (L[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", Gc, [
                      L[8] || (L[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", jc, a(k.value.nodes.ambiguous.length), 1),
                      L[9] || (L[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", Kc, [
                      L[10] || (L[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Hc, a(k.value.nodes.unresolved.length), 1),
                      L[11] || (L[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", qc, [
                  L[23] || (L[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Yc, [
                    e("div", Jc, [
                      L[13] || (L[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Xc, a(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      L[14] || (L[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", Qc, [
                      L[15] || (L[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Zc, a(k.value.stats.download_intents), 1),
                      L[16] || (L[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    K.value ? (s(), o("div", eu, [
                      L[17] || (L[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", tu, a(se.value.length), 1),
                      L[18] || (L[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", su, [
                      L[19] || (L[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ou, a(k.value.models.ambiguous.length), 1),
                      L[20] || (L[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", nu, [
                      L[21] || (L[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", au, a(k.value.models.unresolved.length), 1),
                      L[22] || (L[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", lu, [
                L[24] || (L[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", iu, a(D.value.length + ve.value.length) + " items need your input", 1)
              ])) : M.value ? (s(), o("div", ru, [
                L[25] || (L[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", du, a(k.value.stats.packages_needing_installation) + " package" + a(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(k.value.stats.nodes_needing_installation) + " node type" + a(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(_.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : _.value ? (s(), o("div", cu, [
                L[26] || (L[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", uu, a(k.value.stats.download_intents) + " model" + a(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : K.value ? (s(), o("div", mu, [
                L[27] || (L[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", vu, a(se.value.length) + " model" + a(se.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", fu, [...L[28] || (L[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              K.value ? (s(), o("div", pu, [
                L[31] || (L[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", gu, [
                  (s(!0), o(B, null, ie(se.value, (G) => {
                    var le, xe;
                    return s(), o("div", {
                      key: G.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", hu, a(G.actual_category) + "/" + a((le = G.model) == null ? void 0 : le.filename), 1),
                      L[30] || (L[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", yu, a((xe = G.expected_categories) == null ? void 0 : xe[0]) + "/", 1),
                      G.file_path ? (s(), T(ye, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ve) => it(G.file_path)
                      }, {
                        default: i(() => [...L[29] || (L[29] = [
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
          C.value === "nodes" ? (s(), T(ld, {
            key: 1,
            nodes: D.value,
            "node-choices": O.value,
            "auto-resolved-packages": J.value,
            "skipped-packages": S.value,
            onMarkOptional: pe,
            onSkip: Je,
            onOptionSelected: tt,
            onManualEntry: st,
            onClearChoice: Te,
            onPackageSkip: Xe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          C.value === "models" ? (s(), T(Zd, {
            key: 2,
            models: ae.value,
            "model-choices": I.value,
            onMarkOptional: qe,
            onSkip: Qe,
            onOptionSelected: mt,
            onDownloadUrl: $e,
            onClearChoice: je
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          C.value === "review" ? (s(), o("div", wu, [
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
              J.value.length > 0 ? (s(), o("div", Ru, [
                e("h4", Pu, "Node Packages (" + a(J.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(B, null, ie(J.value, (G) => (s(), o("div", {
                    key: G.package_id,
                    class: "review-item"
                  }, [
                    e("code", Du, a(G.package_id), 1),
                    e("div", Lu, [
                      S.value.has(G.package_id) ? (s(), o("span", Uu, "Skipped")) : (s(), o("span", zu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              D.value.length > 0 ? (s(), o("div", Nu, [
                e("h4", Ou, "Node Choices (" + a(D.value.length) + ")", 1),
                e("div", Au, [
                  (s(!0), o(B, null, ie(D.value, (G) => {
                    var le, xe, Ve, ft;
                    return s(), o("div", {
                      key: G.node_type,
                      class: "review-item"
                    }, [
                      e("code", Fu, a(G.node_type), 1),
                      e("div", Bu, [
                        O.value.has(G.node_type) ? (s(), o(B, { key: 0 }, [
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
                  (s(!0), o(B, null, ie(ae.value, (G) => {
                    var le, xe, Ve, ft, Ct, rt, Nt;
                    return s(), o("div", {
                      key: G.filename,
                      class: "review-item"
                    }, [
                      e("code", Yu, a(G.filename), 1),
                      e("div", Ju, [
                        I.value.has(G.filename) ? (s(), o(B, { key: 0 }, [
                          ((le = I.value.get(G.filename)) == null ? void 0 : le.action) === "select" ? (s(), o("span", Xu, a((Ve = (xe = I.value.get(G.filename)) == null ? void 0 : xe.selected_model) == null ? void 0 : Ve.filename), 1)) : ((ft = I.value.get(G.filename)) == null ? void 0 : ft.action) === "download" ? (s(), o("span", Qu, " Download ")) : ((Ct = I.value.get(G.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Zu, " Optional ")) : ((rt = I.value.get(G.filename)) == null ? void 0 : rt.action) === "skip" ? (s(), o("span", em, " Skip ")) : ((Nt = I.value.get(G.filename)) == null ? void 0 : Nt.action) === "cancel_download" ? (s(), o("span", tm, " Cancel Download ")) : r("", !0)
                        ], 64)) : G.is_download_intent ? (s(), o("span", sm, " Pending Download ")) : (s(), o("span", om, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              te.value.length === 0 && D.value.length === 0 && ae.value.length === 0 ? (s(), o("div", nm, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          C.value === "applying" ? (s(), T(Rc, {
            key: 4,
            progress: Se(d),
            onRestart: ue,
            onRetryFailed: Q
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: i(() => [
        C.value !== "analysis" && C.value !== "applying" ? (s(), T(ye, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: Me
        }, {
          default: i(() => [...L[37] || (L[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        L[41] || (L[41] = e("div", { class: "footer-spacer" }, null, -1)),
        C.value !== "applying" || Se(d).phase === "complete" || Se(d).phase === "error" ? (s(), T(ye, {
          key: 1,
          variant: "secondary",
          onClick: L[0] || (L[0] = (G) => l("close"))
        }, {
          default: i(() => [
            h(a(Se(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        C.value === "analysis" ? (s(), T(ye, {
          key: 2,
          variant: "primary",
          disabled: f.value,
          onClick: De
        }, {
          default: i(() => [...L[38] || (L[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        C.value === "nodes" ? (s(), T(ye, {
          key: 3,
          variant: "primary",
          onClick: ce
        }, {
          default: i(() => [
            h(a(E.value || _.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        C.value === "models" ? (s(), T(ye, {
          key: 4,
          variant: "primary",
          onClick: ce
        }, {
          default: i(() => [...L[39] || (L[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        C.value === "review" ? (s(), T(ye, {
          key: 5,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: Ye
        }, {
          default: i(() => [...L[40] || (L[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), lm = /* @__PURE__ */ ne(am, [["__scopeId", "data-v-6276cf1d"]]), im = { class: "search-input-wrapper" }, rm = ["value", "placeholder"], dm = /* @__PURE__ */ oe({
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
    const n = t, l = u, c = y(null);
    let g;
    function m(d) {
      const v = d.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        l("update:modelValue", v);
      }, n.debounce)) : l("update:modelValue", v);
    }
    function p() {
      var d;
      l("update:modelValue", ""), l("clear"), (d = c.value) == null || d.focus();
    }
    return Ne(() => {
      n.autoFocus && c.value && c.value.focus();
    }), (d, v) => (s(), o("div", im, [
      e("input", {
        ref_key: "inputRef",
        ref: c,
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
}), cm = /* @__PURE__ */ ne(dm, [["__scopeId", "data-v-266f857a"]]), um = { class: "search-bar" }, mm = /* @__PURE__ */ oe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (s(), o("div", um, [
      $(cm, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (l) => u.$emit("update:modelValue", l)),
        onClear: n[1] || (n[1] = (l) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), es = /* @__PURE__ */ ne(mm, [["__scopeId", "data-v-3d51bbfd"]]), vm = { class: "section-group" }, fm = {
  key: 0,
  class: "section-content"
}, pm = /* @__PURE__ */ oe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, l = u, c = y(n.initiallyExpanded);
    function g() {
      n.collapsible && (c.value = !c.value, l("toggle", c.value));
    }
    return (m, p) => (s(), o("section", vm, [
      $(ct, {
        count: t.count,
        clickable: t.collapsible,
        expanded: c.value,
        onClick: g
      }, {
        default: i(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || c.value ? (s(), o("div", fm, [
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
}, $m = /* @__PURE__ */ oe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, l = z(() => n.status ? `status-${n.status}` : "");
    return (c, g) => (s(), o("div", {
      class: fe(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: g[0] || (g[0] = (m) => t.clickable && c.$emit("click"))
    }, [
      e("div", gm, [
        c.$slots.icon ? (s(), o("span", hm, [
          Re(c.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", ym, [
          c.$slots.title ? (s(), o("div", wm, [
            Re(c.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          c.$slots.subtitle ? (s(), o("div", km, [
            Re(c.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      c.$slots.details ? (s(), o("div", bm, [
        Re(c.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.actions ? (s(), o("div", _m, [
        Re(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ ne($m, [["__scopeId", "data-v-cc435e0e"]]), Cm = { class: "loading-state" }, xm = { class: "loading-message" }, Sm = /* @__PURE__ */ oe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (s(), o("div", Cm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", xm, a(t.message), 1)
    ]));
  }
}), zt = /* @__PURE__ */ ne(Sm, [["__scopeId", "data-v-ad8436c9"]]), Im = { class: "error-state" }, Em = { class: "error-message" }, Tm = /* @__PURE__ */ oe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (s(), o("div", Im, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Em, a(t.message), 1),
      t.retry ? (s(), T(X, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (l) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ ne(Tm, [["__scopeId", "data-v-5397be48"]]), Rm = /* @__PURE__ */ oe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const l = n, { getWorkflows: c } = Ae();
    no();
    const g = y([]), m = y(!1), p = y(null), d = y(""), v = y(!0), w = y(!1), b = y(!1), k = y(!1), f = y(null), x = z(
      () => g.value.filter((U) => U.status === "broken")
    ), R = z(
      () => g.value.filter((U) => U.status === "new")
    ), C = z(
      () => g.value.filter((U) => U.status === "modified")
    ), P = z(
      () => g.value.filter((U) => U.status === "synced")
    ), O = z(() => {
      if (!d.value.trim()) return g.value;
      const U = d.value.toLowerCase();
      return g.value.filter((N) => N.name.toLowerCase().includes(U));
    }), I = z(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = z(
      () => R.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Y = z(
      () => C.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = z(
      () => P.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = z(
      () => w.value ? F.value : F.value.slice(0, 5)
    );
    async function E(U = !1) {
      m.value = !0, p.value = null;
      try {
        g.value = await c(U);
      } catch (N) {
        p.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        m.value = !1;
      }
    }
    u({ loadWorkflows: E });
    function _(U) {
      f.value = U, b.value = !0;
    }
    function M(U) {
      f.value = U, k.value = !0;
    }
    function H() {
      l("refresh");
    }
    async function se() {
      k.value = !1, await E(!0);
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
    function J(U) {
      const N = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return Ne(E), (U, N) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, { title: "WORKFLOWS" })
        ]),
        search: i(() => [
          $(es, {
            modelValue: d.value,
            "onUpdate:modelValue": N[0] || (N[0] = (D) => d.value = D),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (s(), T(zt, {
            key: 0,
            message: "Loading workflows..."
          })) : p.value ? (s(), T(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
            I.value.length ? (s(), T(Fe, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(I.value, (D) => (s(), T(ot, {
                  key: D.name,
                  status: "broken"
                }, {
                  icon: i(() => [...N[7] || (N[7] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(D.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(te(D)), 1)
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ve) => M(D.name)
                    }, {
                      default: i(() => [...N[8] || (N[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => _(D.name)
                    }, {
                      default: i(() => [...N[9] || (N[9] = [
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
            S.value.length ? (s(), T(Fe, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(S.value, (D) => (s(), T(ot, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    h(a(D.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    h(a(D.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(J(D)), 1)
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => _(D.name)
                    }, {
                      default: i(() => [...N[10] || (N[10] = [
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
            Y.value.length ? (s(), T(Fe, {
              key: 2,
              title: "MODIFIED",
              count: Y.value.length
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(Y.value, (D) => (s(), T(ot, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...N[11] || (N[11] = [
                    h("⚡", -1)
                  ])]),
                  title: i(() => [
                    h(a(D.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(J(D)), 1)
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => _(D.name)
                    }, {
                      default: i(() => [...N[12] || (N[12] = [
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
            F.value.length ? (s(), T(Fe, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: N[2] || (N[2] = (D) => v.value = D)
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(V.value, (D) => (s(), T(ot, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    h(a(D.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    h(a(D.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(J(D)), 1)
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => _(D.name)
                    }, {
                      default: i(() => [...N[13] || (N[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && F.value.length > 5 ? (s(), T(X, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (D) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    h(" View all " + a(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            O.value.length ? r("", !0) : (s(), T(_t, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b.value && f.value ? (s(), T(Ii, {
        key: 0,
        "workflow-name": f.value,
        onClose: N[3] || (N[3] = (D) => b.value = !1),
        onResolve: N[4] || (N[4] = (D) => M(f.value)),
        onRefresh: N[5] || (N[5] = (D) => l("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      k.value && f.value ? (s(), T(lm, {
        key: 1,
        "workflow-name": f.value,
        onClose: se,
        onInstall: H,
        onRefresh: N[6] || (N[6] = (D) => l("refresh")),
        onRestart: K
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Pm = /* @__PURE__ */ ne(Rm, [["__scopeId", "data-v-fa3f076e"]]), Mm = /* @__PURE__ */ oe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: fe(["summary-bar", t.variant])
    }, [
      Re(u.$slots, "default", {}, void 0, !0)
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
}, uv = /* @__PURE__ */ oe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: l, addModelSource: c, removeModelSource: g, openFileLocation: m } = Ae(), p = y(null), d = y(!0), v = y(null), w = y(""), b = y(!1), k = y(null), f = y(null), x = y(null), R = y(null);
    let C = null;
    function P(E, _ = "success", M = 2e3) {
      C && clearTimeout(C), R.value = { message: E, type: _ }, C = setTimeout(() => {
        R.value = null;
      }, M);
    }
    function O(E) {
      if (!E) return "Unknown";
      const _ = 1024 * 1024 * 1024, M = 1024 * 1024;
      return E >= _ ? `${(E / _).toFixed(1)} GB` : E >= M ? `${(E / M).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function I(E) {
      navigator.clipboard.writeText(E), P("Copied to clipboard!");
    }
    async function S(E) {
      try {
        await m(E), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function Y() {
      if (!(!w.value.trim() || !p.value)) {
        b.value = !0, f.value = null, x.value = null;
        try {
          await c(p.value.hash, w.value.trim()), x.value = "Source added successfully!", w.value = "", await V();
        } catch (E) {
          f.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          b.value = !1;
        }
      }
    }
    async function F(E) {
      if (p.value) {
        k.value = E, f.value = null, x.value = null;
        try {
          await g(p.value.hash, E), P("Source removed"), await V();
        } catch (_) {
          f.value = _ instanceof Error ? _.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function V() {
      d.value = !0, v.value = null;
      try {
        p.value = await l(n.identifier);
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Ne(V), (E, _) => {
      var M;
      return s(), o(B, null, [
        $(He, {
          title: `Model Details: ${((M = p.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: _[5] || (_[5] = (H) => E.$emit("close"))
        }, {
          body: i(() => {
            var H, se, K, te;
            return [
              p.value ? (s(), o("div", Dm, [
                e("section", Lm, [
                  e("div", zm, [
                    _[6] || (_[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Um, a(p.value.hash || "Not computed"), 1),
                    p.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: _[0] || (_[0] = (J) => I(p.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Nm, [
                    _[7] || (_[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Om, a(p.value.blake3 || "Not computed"), 1),
                    p.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: _[1] || (_[1] = (J) => I(p.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Am, [
                    _[8] || (_[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Fm, a(p.value.sha256 || "Not computed"), 1),
                    p.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: _[2] || (_[2] = (J) => I(p.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Bm, [
                    _[9] || (_[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Vm, a(O(p.value.size)), 1)
                  ]),
                  e("div", Wm, [
                    _[10] || (_[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Gm, a(p.value.category), 1)
                  ]),
                  e("div", jm, [
                    _[11] || (_[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Km, a(p.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Hm, [
                  e("h4", qm, "Locations (" + a(((H = p.value.locations) == null ? void 0 : H.length) || 0) + ")", 1),
                  (se = p.value.locations) != null && se.length ? (s(), o("div", Ym, [
                    (s(!0), o(B, null, ie(p.value.locations, (J, U) => (s(), o("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      e("span", Jm, a(J.path), 1),
                      J.modified ? (s(), o("span", Xm, "Modified: " + a(J.modified), 1)) : r("", !0),
                      J.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => S(J.path)
                      }, " Open File Location ", 8, Qm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Zm, "No locations found"))
                ]),
                e("section", ev, [
                  e("h4", tv, "Download Sources (" + a(((K = p.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                  (te = p.value.sources) != null && te.length ? (s(), o("div", sv, [
                    (s(!0), o(B, null, ie(p.value.sources, (J, U) => (s(), o("div", {
                      key: U,
                      class: "source-item"
                    }, [
                      e("span", ov, a(J.type) + ":", 1),
                      e("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(J.url), 9, nv),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === J.url,
                        onClick: (N) => F(J.url)
                      }, a(k.value === J.url ? "..." : "×"), 9, av)
                    ]))), 128))
                  ])) : (s(), o("div", lv, " No download sources configured ")),
                  e("div", iv, [
                    Pe(e("input", {
                      "onUpdate:modelValue": _[3] || (_[3] = (J) => w.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [kt, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || b.value,
                      onClick: Y
                    }, a(b.value ? "Adding..." : "Add Source"), 9, rv)
                  ]),
                  f.value ? (s(), o("p", dv, a(f.value), 1)) : r("", !0),
                  x.value ? (s(), o("p", cv, a(x.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: _[4] || (_[4] = (H) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), T(et, { to: "body" }, [
          R.value ? (s(), o("div", {
            key: 0,
            class: fe(["toast", R.value.type])
          }, a(R.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Vs = /* @__PURE__ */ ne(uv, [["__scopeId", "data-v-f15cbb56"]]), mv = /* @__PURE__ */ oe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: l, getStatus: c } = Ae(), g = y([]), m = y([]), p = y("production"), d = y(!1), v = y(null), w = y(""), b = y(!1), k = y(null);
    function f() {
      b.value = !1, n("navigate", "model-index");
    }
    const x = z(
      () => g.value.reduce((V, E) => V + (E.size || 0), 0)
    ), R = z(() => {
      if (!w.value.trim()) return g.value;
      const V = w.value.toLowerCase();
      return g.value.filter((E) => E.filename.toLowerCase().includes(V));
    }), C = z(() => {
      if (!w.value.trim()) return m.value;
      const V = w.value.toLowerCase();
      return m.value.filter((E) => E.filename.toLowerCase().includes(V));
    }), P = z(() => {
      const V = {};
      for (const _ of R.value) {
        const M = _.type || "other";
        V[M] || (V[M] = []), V[M].push(_);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(V).sort(([_], [M]) => {
        const H = E.indexOf(_), se = E.indexOf(M);
        return H >= 0 && se >= 0 ? H - se : H >= 0 ? -1 : se >= 0 ? 1 : _.localeCompare(M);
      }).map(([_, M]) => ({ type: _, models: M }));
    });
    function O(V) {
      if (!V) return "Unknown";
      const E = V / (1024 * 1024);
      return E >= 1024 ? `${(E / 1024).toFixed(1)} GB` : `${E.toFixed(0)} MB`;
    }
    function I(V) {
      k.value = V.hash || V.filename;
    }
    function S(V) {
      n("navigate", "model-index");
    }
    function Y(V) {
      alert(`Download functionality not yet implemented for ${V}`);
    }
    async function F() {
      d.value = !0, v.value = null;
      try {
        const V = await l();
        g.value = V, m.value = [];
        const E = await c();
        p.value = E.environment || "production";
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Ne(F), (V, E) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (_) => b.value = !0)
          })
        ]),
        search: i(() => [
          $(es, {
            modelValue: w.value,
            "onUpdate:modelValue": E[1] || (E[1] = (_) => w.value = _),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          d.value ? (s(), T(zt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), T(Ut, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
            g.value.length ? (s(), T(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(O(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(B, null, ie(P.value, (_) => (s(), T(Fe, {
              key: _.type,
              title: _.type.toUpperCase(),
              count: _.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(_.models, (M) => (s(), T(ot, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...E[4] || (E[4] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(a(M.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(O(M.size)), 1)
                  ]),
                  details: i(() => [
                    $(Ge, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    $(Ge, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => I(M)
                    }, {
                      default: i(() => [...E[5] || (E[5] = [
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
            C.value.length ? (s(), T(Fe, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(C.value, (_) => (s(), T(ot, {
                  key: _.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...E[6] || (E[6] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(_.filename), 1)
                  ]),
                  subtitle: i(() => [...E[7] || (E[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var M;
                    return [
                      $(Ge, {
                        label: "Required by:",
                        value: ((M = _.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    $(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => Y(_.filename)
                    }, {
                      default: i(() => [...E[8] || (E[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => S(_.filename)
                    }, {
                      default: i(() => [...E[9] || (E[9] = [
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
            !R.value.length && !C.value.length ? (s(), T(_t, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $($t, {
        show: b.value,
        title: "About Environment Models",
        onClose: E[2] || (E[2] = (_) => b.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            E[10] || (E[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(p.value) + '"', 1),
            E[11] || (E[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          $(X, {
            variant: "primary",
            onClick: f
          }, {
            default: i(() => [...E[12] || (E[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), T(Vs, {
        key: 0,
        identifier: k.value,
        onClose: E[3] || (E[3] = (_) => k.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), vv = /* @__PURE__ */ ne(mv, [["__scopeId", "data-v-cb4f12b3"]]), fv = {
  key: 0,
  class: "indexing-progress"
}, pv = { class: "progress-info" }, gv = { class: "progress-label" }, hv = { class: "progress-count" }, yv = { class: "progress-bar" }, wv = { class: "modal-content" }, kv = { class: "modal-header" }, bv = { class: "modal-body" }, _v = { class: "input-group" }, $v = { class: "current-path" }, Cv = { class: "input-group" }, xv = { class: "modal-footer" }, Sv = { class: "modal-content" }, Iv = { class: "modal-header" }, Ev = { class: "modal-body" }, Tv = { class: "input-group" }, Rv = { class: "input-group" }, Pv = { class: "modal-footer" }, Mv = /* @__PURE__ */ oe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: l,
      getModelsDirectory: c,
      setModelsDirectory: g
    } = Ae(), { addToQueue: m } = fs(), p = u, d = y([]), v = y(!1), w = y(!1), b = y(null), k = y(""), f = y(!1), x = y(null), R = y(!1), C = y(null), P = y(""), O = y(!1), I = y(!1), S = y(""), Y = y(""), F = y(null), V = z(
      () => d.value.reduce((N, D) => N + (D.size || 0), 0)
    ), E = z(() => {
      if (!k.value.trim()) return d.value;
      const N = k.value.toLowerCase();
      return d.value.filter((D) => {
        const ve = D, ae = D.sha256 || ve.sha256_hash || "";
        return D.filename.toLowerCase().includes(N) || ae.toLowerCase().includes(N);
      });
    }), _ = z(() => {
      const N = {};
      for (const ve of E.value) {
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
    function H(N) {
      x.value = N.hash || N.filename;
    }
    async function se() {
      w.value = !0, b.value = null;
      try {
        const N = await l();
        await J(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        b.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function K() {
      if (P.value.trim()) {
        O.value = !0, b.value = null;
        try {
          const N = await g(P.value.trim());
          C.value = N.path, R.value = !1, P.value = "", await J(), console.log(`Directory changed: ${N.models_indexed} models indexed`), p("refresh");
        } catch (N) {
          b.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          O.value = !1;
        }
      }
    }
    function te() {
      if (!S.value.trim() || !Y.value.trim()) return;
      const N = Y.value.split("/").pop() || "model.safetensors";
      m([{
        workflow: "__manual__",
        filename: N,
        url: S.value.trim(),
        targetPath: Y.value.trim()
      }]), S.value = "", Y.value = "", I.value = !1;
    }
    async function J() {
      v.value = !0, b.value = null;
      try {
        d.value = await n();
      } catch (N) {
        b.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function U() {
      try {
        const N = await c();
        C.value = N.path;
      } catch {
      }
    }
    return Ne(() => {
      J(), U();
    }), (N, D) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: D[2] || (D[2] = (ve) => f.value = !0)
          }, {
            actions: i(() => [
              $(X, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: se
              }, {
                default: i(() => [
                  h(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(X, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (ve) => R.value = !0)
              }, {
                default: i(() => [...D[15] || (D[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              $(X, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (ve) => I.value = !0)
              }, {
                default: i(() => [...D[16] || (D[16] = [
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
          F.value ? (s(), o("div", fv, [
            e("div", pv, [
              e("span", gv, a(F.value.message), 1),
              e("span", hv, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", yv, [
              e("div", {
                class: "progress-fill",
                style: Lt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          $(es, {
            modelValue: k.value,
            "onUpdate:modelValue": D[3] || (D[3] = (ve) => k.value = ve),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value || F.value ? (s(), T(zt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : b.value ? (s(), T(Ut, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
            d.value.length ? (s(), T(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(d.value.length) + " models • " + a(M(V.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(B, null, ie(_.value, (ve) => (s(), T(Fe, {
              key: ve.type,
              title: ve.type.toUpperCase(),
              count: ve.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(ve.models, (ae) => (s(), T(ot, {
                  key: ae.sha256 || ae.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...D[17] || (D[17] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(a(ae.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(M(ae.size)), 1)
                  ]),
                  details: i(() => [
                    $(Ge, {
                      label: "Hash:",
                      value: ae.hash ? ae.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => H(ae)
                    }, {
                      default: i(() => [...D[18] || (D[18] = [
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
            E.value.length ? r("", !0) : (s(), T(_t, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      $($t, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: D[4] || (D[4] = (ve) => f.value = !1)
      }, {
        content: i(() => [...D[19] || (D[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      x.value ? (s(), T(Vs, {
        key: 0,
        identifier: x.value,
        onClose: D[5] || (D[5] = (ve) => x.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), T(et, { to: "body" }, [
        R.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[9] || (D[9] = Be((ve) => R.value = !1, ["self"]))
        }, [
          e("div", wv, [
            e("div", kv, [
              D[20] || (D[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: D[6] || (D[6] = (ve) => R.value = !1)
              }, "✕")
            ]),
            e("div", bv, [
              e("div", _v, [
                D[21] || (D[21] = e("label", null, "Current Directory", -1)),
                e("code", $v, a(C.value || "Not set"), 1)
              ]),
              e("div", Cv, [
                D[22] || (D[22] = e("label", null, "New Directory Path", -1)),
                $(bt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": D[7] || (D[7] = (ve) => P.value = ve),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              D[23] || (D[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", xv, [
              $(ye, {
                variant: "secondary",
                onClick: D[8] || (D[8] = (ve) => R.value = !1)
              }, {
                default: i(() => [...D[24] || (D[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              $(ye, {
                variant: "primary",
                disabled: !P.value.trim() || O.value,
                loading: O.value,
                onClick: K
              }, {
                default: i(() => [
                  h(a(O.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), T(et, { to: "body" }, [
        I.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[14] || (D[14] = Be((ve) => I.value = !1, ["self"]))
        }, [
          e("div", Sv, [
            e("div", Iv, [
              D[25] || (D[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: D[10] || (D[10] = (ve) => I.value = !1)
              }, "✕")
            ]),
            e("div", Ev, [
              e("div", Tv, [
                D[26] || (D[26] = e("label", null, "Download URL", -1)),
                $(bt, {
                  modelValue: S.value,
                  "onUpdate:modelValue": D[11] || (D[11] = (ve) => S.value = ve),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Rv, [
                D[27] || (D[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                $(bt, {
                  modelValue: Y.value,
                  "onUpdate:modelValue": D[12] || (D[12] = (ve) => Y.value = ve),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              D[28] || (D[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Pv, [
              $(ye, {
                variant: "secondary",
                onClick: D[13] || (D[13] = (ve) => I.value = !1)
              }, {
                default: i(() => [...D[29] || (D[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              $(ye, {
                variant: "primary",
                disabled: !S.value.trim() || !Y.value.trim(),
                onClick: te
              }, {
                default: i(() => [...D[30] || (D[30] = [
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
}, Yv = /* @__PURE__ */ oe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, l = u, c = z(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = z(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), m = z(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (p, d) => (s(), T(He, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => l("close"))
    }, {
      body: i(() => [
        e("div", Lv, [
          e("div", zv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", c.value])
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
              (s(!0), o(B, null, ie(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        $(ye, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => l("close"))
        }, {
          default: i(() => [...d[11] || (d[11] = [
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
}, ef = /* @__PURE__ */ oe({
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
    return (u, n) => (s(), T(He, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (l) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Xv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Qv, [
          (s(!0), o(B, null, ie(t.details, (l, c) => (s(), o("div", {
            key: c,
            class: "detail-item"
          }, " • " + a(l), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", Zv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: i(() => [
        $(ye, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (l) => u.$emit("cancel"))
        }, {
          default: i(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), T(ye, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (l) => u.$emit("secondary"))
        }, {
          default: i(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        $(ye, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (l) => u.$emit("confirm"))
        }, {
          default: i(() => [
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
}, rf = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, df = /* @__PURE__ */ oe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: u }) {
    const n = t, l = u, { getNodes: c, trackNodeAsDev: g, installNode: m, uninstallNode: p } = Ae(), d = y({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = y(!1), w = y(null), b = y(""), k = y(!1), f = y(null), x = y(null), R = z(() => {
      if (!b.value.trim()) return d.value.nodes;
      const se = b.value.toLowerCase();
      return d.value.nodes.filter(
        (K) => {
          var te, J;
          return K.name.toLowerCase().includes(se) || ((te = K.description) == null ? void 0 : te.toLowerCase().includes(se)) || ((J = K.repository) == null ? void 0 : J.toLowerCase().includes(se));
        }
      );
    }), C = z(
      () => R.value.filter((se) => se.installed && se.tracked)
    ), P = z(
      () => R.value.filter((se) => !se.installed && se.tracked)
    ), O = z(
      () => R.value.filter((se) => se.installed && !se.tracked)
    );
    function I(se) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[se] || se;
    }
    const S = z(() => n.versionMismatches.length > 0);
    function Y(se) {
      return !se.used_in_workflows || se.used_in_workflows.length === 0 ? "Not used in any workflows" : se.used_in_workflows.length === 1 ? se.used_in_workflows[0] : `${se.used_in_workflows.length} workflows`;
    }
    function F(se) {
      f.value = se;
    }
    function V() {
      l("open-node-manager");
    }
    function E(se) {
      x.value = {
        title: "Track as Development Node",
        message: `Track "${se}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          x.value = null;
          try {
            v.value = !0;
            const K = await g(se);
            K.status === "success" ? (l("toast", `✓ Node "${se}" tracked as development`, "success"), await H()) : l("toast", `Failed to track node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            l("toast", `Error tracking node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function _(se) {
      x.value = {
        title: "Remove Untracked Node",
        message: `Remove "${se}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          x.value = null;
          try {
            v.value = !0;
            const K = await p(se);
            K.status === "success" ? (l("toast", `✓ Node "${se}" removed`, "success"), await H()) : l("toast", `Failed to remove node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            l("toast", `Error removing node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function M(se) {
      x.value = {
        title: "Install Missing Node",
        message: `Install "${se}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          x.value = null;
          try {
            v.value = !0;
            const K = await m(se);
            K.status === "success" ? (l("toast", `✓ Node "${se}" installed`, "success"), await H()) : l("toast", `Failed to install node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            l("toast", `Error installing node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function H() {
      v.value = !0, w.value = null;
      try {
        d.value = await c();
      } catch (se) {
        w.value = se instanceof Error ? se.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Ne(H), (se, K) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (te) => k.value = !0)
          }, {
            actions: i(() => [
              $(X, {
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...K[7] || (K[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          $(es, {
            modelValue: b.value,
            "onUpdate:modelValue": K[1] || (K[1] = (te) => b.value = te),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value ? (s(), T(zt, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (s(), T(Ut, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
            d.value.total_count ? (s(), T(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (s(), o(B, { key: 0 }, [
                  h(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (s(), o(B, { key: 1 }, [
                  h(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            S.value ? (s(), T(Fe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                e("div", tf, [
                  K[8] || (K[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(B, null, ie(t.versionMismatches, (te) => (s(), T(ot, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: i(() => [...K[9] || (K[9] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(te.name), 1)
                  ]),
                  subtitle: i(() => [
                    e("span", sf, [
                      e("span", of, a(te.actual), 1),
                      K[10] || (K[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", nf, a(te.expected), 1)
                    ])
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "warning",
                      size: "sm",
                      onClick: K[2] || (K[2] = (J) => l("repair-environment"))
                    }, {
                      default: i(() => [...K[11] || (K[11] = [
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
            O.value.length ? (s(), T(Fe, {
              key: 2,
              title: "UNTRACKED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(O.value, (te) => (s(), T(ot, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: i(() => [...K[12] || (K[12] = [
                    h("?", -1)
                  ])]),
                  title: i(() => [
                    h(a(te.name), 1)
                  ]),
                  subtitle: i(() => [...K[13] || (K[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    $(Ge, {
                      label: "Used by:",
                      value: Y(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => F(te)
                    }, {
                      default: i(() => [...K[14] || (K[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => E(te.name)
                    }, {
                      default: i(() => [...K[15] || (K[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(X, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (J) => _(te.name)
                    }, {
                      default: i(() => [...K[16] || (K[16] = [
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
            C.value.length ? (s(), T(Fe, {
              key: 3,
              title: "INSTALLED",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(C.value, (te) => (s(), T(ot, {
                  key: te.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    h(a(te.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    h(a(te.name), 1)
                  ]),
                  subtitle: i(() => [
                    te.version ? (s(), o("span", af, a(te.source === "development" ? "" : "v") + a(te.version), 1)) : (s(), o("span", lf, "version unknown")),
                    e("span", rf, " • " + a(I(te.source)), 1)
                  ]),
                  details: i(() => [
                    $(Ge, {
                      label: "Used by:",
                      value: Y(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => F(te)
                    }, {
                      default: i(() => [...K[17] || (K[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: V
                    }, {
                      default: i(() => [...K[18] || (K[18] = [
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
            P.value.length ? (s(), T(Fe, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(P.value, (te) => (s(), T(ot, {
                  key: te.name,
                  status: "missing"
                }, {
                  icon: i(() => [...K[19] || (K[19] = [
                    h("!", -1)
                  ])]),
                  title: i(() => [
                    h(a(te.name), 1)
                  ]),
                  subtitle: i(() => [...K[20] || (K[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    $(Ge, {
                      label: "Required by:",
                      value: Y(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    $(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => F(te)
                    }, {
                      default: i(() => [...K[21] || (K[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => M(te.name)
                    }, {
                      default: i(() => [...K[22] || (K[22] = [
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
            !C.value.length && !P.value.length && !O.value.length ? (s(), T(_t, {
              key: 5,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $($t, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: K[4] || (K[4] = (te) => k.value = !1)
      }, {
        content: i(() => [...K[23] || (K[23] = [
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
          $(X, {
            variant: "primary",
            onClick: K[3] || (K[3] = (te) => k.value = !1)
          }, {
            default: i(() => [...K[24] || (K[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      f.value ? (s(), T(Jv, {
        key: 0,
        node: f.value,
        onClose: K[5] || (K[5] = (te) => f.value = null)
      }, null, 8, ["node"])) : r("", !0),
      x.value ? (s(), T(Ws, {
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
}, gf = /* @__PURE__ */ oe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = y(!1), l = z(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const g = u.url.slice(0, Math.floor(u.maxLength * 0.6)), m = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${g}...${m}`;
    });
    async function c() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
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
      }, a(l.value), 9, mf),
      e("button", {
        class: fe(["copy-btn", { copied: n.value }]),
        onClick: c,
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
}, Sf = /* @__PURE__ */ oe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const u = t, n = z(() => u.fetchingRemote === u.remote.name), l = z(() => u.remote.is_default), c = z(() => u.syncStatus && u.syncStatus.behind > 0), g = z(() => u.syncStatus && u.syncStatus.ahead > 0), m = z(() => u.remote.push_url !== u.remote.fetch_url), p = z(() => {
      const v = u.remote.fetch_url, w = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return w ? `https://${w[1]}/${w[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = z(() => u.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, w) => (s(), T(ot, {
      status: l.value ? "synced" : void 0
    }, Kt({
      icon: i(() => [
        h(a(l.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", yf, [
          e("span", null, a(t.remote.name), 1),
          l.value ? (s(), o("span", wf, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", kf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(B, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", bf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", _f, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", $f, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: i(() => [
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
      actions: i(() => [
        $(X, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: w[1] || (w[1] = (b) => v.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...w[6] || (w[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        $(X, {
          variant: c.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[2] || (w[2] = (b) => v.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(X, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[3] || (w[3] = (b) => v.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(X, {
          variant: "secondary",
          size: "xs",
          onClick: w[4] || (w[4] = (b) => v.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...w[7] || (w[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        l.value ? r("", !0) : (s(), T(X, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: w[5] || (w[5] = (b) => v.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...w[8] || (w[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      m.value ? {
        name: "details",
        fn: i(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), T(Ge, {
            key: 0,
            label: "Push URL:"
          }, {
            default: i(() => [
              $(hf, {
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
}, Df = /* @__PURE__ */ oe({
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
    const u = t, n = z(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, c) => (s(), o("div", {
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
        Re(l.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Pf, a(t.error), 1)) : t.hint ? (s(), o("span", Mf, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), Es = /* @__PURE__ */ ne(Df, [["__scopeId", "data-v-9a1cf296"]]), Lf = { class: "remote-form" }, zf = { class: "form-header" }, Uf = { class: "form-body" }, Nf = {
  key: 0,
  class: "form-error"
}, Of = { class: "form-actions" }, Af = /* @__PURE__ */ oe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, l = u, c = y({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = y(!1), m = y(null);
    ut(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      c.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const p = z(() => c.value.name.trim() !== "" && c.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!p.value || g.value)) {
        m.value = null, g.value = !0;
        try {
          l("submit", c.value);
        } catch (v) {
          m.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (v, w) => (s(), o("div", Lf, [
      e("div", zf, [
        $(ct, null, {
          default: i(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Uf, [
        $(Es, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            $(bt, {
              modelValue: c.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (b) => c.value.name = b),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        $(Es, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            $(bt, {
              modelValue: c.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (b) => c.value.fetchUrl = b),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        $(Es, { label: "Push URL (optional)" }, {
          default: i(() => [
            $(bt, {
              modelValue: c.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (b) => c.value.pushUrl = b),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (s(), o("div", Nf, a(m.value), 1)) : r("", !0)
      ]),
      e("div", Of, [
        $(X, {
          variant: "primary",
          size: "md",
          disabled: !p.value,
          loading: g.value,
          onClick: d
        }, {
          default: i(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        $(X, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (b) => v.$emit("cancel"))
        }, {
          default: i(() => [...w[4] || (w[4] = [
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
}, Kf = { class: "summary-progress" }, Hf = { class: "progress-bar" }, qf = { class: "progress-text" }, Yf = /* @__PURE__ */ oe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const u = t, n = z(
      () => u.conflictCount > 0 ? u.resolvedCount / u.conflictCount * 100 : 0
    );
    return (l, c) => (s(), o("div", Bf, [
      e("div", Vf, [
        c[0] || (c[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
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
}, bp = { class: "modal-actions" }, Js = "comfygit.pullModelStrategy", _p = /* @__PURE__ */ oe({
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
  setup(t, { emit: u }) {
    const n = t, l = u, c = y(localStorage.getItem(Js) || "skip");
    ut(c, (C) => {
      localStorage.setItem(Js, C);
    });
    const g = z(() => {
      var C;
      return ((C = n.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), m = z(() => {
      if (!n.preview) return 0;
      const C = n.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), p = z(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = z(() => {
      var C;
      return m.value > 0 || p.value > 0 || (((C = n.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), v = z(() => n.preview && ro(n.preview) ? n.preview : null), w = z(() => {
      var C;
      return ((C = v.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), b = z(() => {
      var C;
      return ((C = n.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), k = z(
      () => w.value > 0 && b.value === w.value
    ), f = z(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !k.value));
    function x(C) {
      if (!v.value) return !1;
      const P = C.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((O) => O.name === P);
    }
    function R(C) {
      const P = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      l("pull", { modelStrategy: c.value, force: C, resolutions: P });
    }
    return (C, P) => {
      var O, I;
      return s(), T(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (S) => C.$emit("close"))
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
                onClick: P[0] || (P[0] = (S) => C.$emit("close"))
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
              ])])) : (O = t.preview) != null && O.has_uncommitted_changes ? (s(), o(B, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(B, { key: 3 }, [
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
                      (s(!0), o(B, null, ie(t.preview.changes.workflows.added, (S) => (s(), o("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + a(S), 1))), 128)),
                      (s(!0), o(B, null, ie(t.preview.changes.workflows.modified, (S) => (s(), o("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(S) + " ", 1),
                        x(S) ? (s(), o("span", rp, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(B, null, ie(t.preview.changes.workflows.deleted, (S) => (s(), o("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + a(S), 1))), 128))
                    ])
                  ])) : r("", !0),
                  p.value > 0 ? (s(), o("details", dp, [
                    e("summary", null, [
                      P[19] || (P[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", cp, a(p.value) + " to install", 1)
                    ]),
                    e("div", up, [
                      (s(!0), o(B, null, ie(t.preview.changes.nodes.to_install, (S) => (s(), o("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + a(S), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", mp, [
                    e("summary", null, [
                      P[20] || (P[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", vp, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", fp, [
                      (s(!0), o(B, null, ie(t.preview.changes.models.referenced, (S) => (s(), o("div", {
                        key: S,
                        class: "change-item"
                      }, a(S), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                v.value ? (s(), T(Jf, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": b.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", pp, [
                  P[26] || (P[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", gp, [
                    e("label", hp, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (S) => c.value = S),
                        value: "all"
                      }, null, 512), [
                        [Rt, c.value]
                      ]),
                      P[22] || (P[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", yp, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (S) => c.value = S),
                        value: "required"
                      }, null, 512), [
                        [Rt, c.value]
                      ]),
                      P[23] || (P[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", wp, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (S) => c.value = S),
                        value: "skip"
                      }, null, 512), [
                        [Rt, c.value]
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
              $(X, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (S) => C.$emit("close"))
              }, {
                default: i(() => [...P[29] || (P[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(B, { key: 0 }, [
                $(X, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: P[5] || (P[5] = (S) => R(!1))
                }, {
                  default: i(() => [...P[30] || (P[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                $(X, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: P[6] || (P[6] = (S) => R(!0))
                }, {
                  default: i(() => [...P[31] || (P[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = t.preview) != null && I.has_uncommitted_changes ? (s(), T(X, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: P[7] || (P[7] = (S) => R(!0))
              }, {
                default: i(() => [...P[32] || (P[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(B, { key: 2 }, [
                v.value && !k.value ? (s(), T(X, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (S) => l("openConflictResolution"))
                }, {
                  default: i(() => [
                    h(" Resolve Conflicts (" + a(b.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), T(X, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !f.value,
                  onClick: P[9] || (P[9] = (S) => R(!1))
                }, {
                  default: i(() => [...P[33] || (P[33] = [
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
}, Wp = { class: "modal-actions" }, Gp = /* @__PURE__ */ oe({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: u }) {
    const n = u, l = y(!1);
    function c(g) {
      n("push", { force: g });
    }
    return (g, m) => {
      var p, d, v;
      return s(), T(et, { to: "body" }, [
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
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(B, { key: 2 }, [
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
                    (s(!0), o(B, null, ie(t.preview.commits, (w) => (s(), o("div", {
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
                      "onUpdate:modelValue": m[1] || (m[1] = (w) => l.value = w)
                    }, null, 512), [
                      [ks, l.value]
                    ]),
                    m[11] || (m[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  m[12] || (m[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(B, { key: 3 }, [
                e("div", Up, [
                  m[14] || (m[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Np, [
                  m[15] || (m[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Op, [
                    (s(!0), o(B, null, ie(t.preview.commits, (w) => (s(), o("div", {
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
              $(X, {
                variant: "secondary",
                onClick: m[2] || (m[2] = (w) => g.$emit("close"))
              }, {
                default: i(() => [...m[17] || (m[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(B, { key: 0 }, [
                $(X, {
                  variant: "secondary",
                  onClick: m[3] || (m[3] = (w) => g.$emit("pull-first"))
                }, {
                  default: i(() => [...m[18] || (m[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                $(X, {
                  variant: "destructive",
                  disabled: !l.value,
                  loading: t.pushing,
                  onClick: m[4] || (m[4] = (w) => c(!0))
                }, {
                  default: i(() => [...m[19] || (m[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), T(X, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: m[5] || (m[5] = (w) => c(!1))
              }, {
                default: i(() => [...m[20] || (m[20] = [
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
}), jp = /* @__PURE__ */ ne(Gp, [["__scopeId", "data-v-bc6ded53"]]), Kp = { class: "resolution-choice-group" }, Hp = ["disabled"], qp = ["disabled"], Yp = /* @__PURE__ */ oe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("div", Kp, [
      e("button", {
        class: fe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (l) => u.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Hp),
      e("button", {
        class: fe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (l) => u.$emit("update:modelValue", "take_target")),
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
}, sg = { class: "resolved-text" }, og = { class: "conflict-hashes" }, ng = { class: "hash-item" }, ag = { class: "hash-item" }, lg = { class: "conflict-actions" }, ig = /* @__PURE__ */ oe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: u }) {
    const n = t, l = u, c = y(n.resolution);
    ut(() => n.resolution, (d) => {
      c.value = d;
    }), ut(c, (d) => {
      d && l("resolve", d);
    });
    const g = z(() => c.value !== null), m = z(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), p = z(() => {
      switch (c.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, v) => {
      var w, b;
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
            e("code", null, a(((b = t.conflict.target_hash) == null ? void 0 : b.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", lg, [
          $(Jp, {
            modelValue: c.value,
            "onUpdate:modelValue": v[0] || (v[0] = (k) => c.value = k),
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
}, bg = /* @__PURE__ */ oe({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: u }) {
    const n = t, l = u, c = z(() => n.resolutions.size), g = z(() => n.workflowConflicts.length - c.value), m = z(() => c.value === n.workflowConflicts.length), p = z(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(k) {
      const f = n.resolutions.get(k);
      return (f == null ? void 0 : f.resolution) ?? null;
    }
    function v(k, f) {
      l("resolve", k, f);
    }
    function w() {
      l("close");
    }
    function b() {
      l("apply");
    }
    return (k, f) => (s(), T(He, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: i(() => [
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
                e("span", gg, a(c.value), 1),
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
            (s(!0), o(B, null, ie(t.workflowConflicts, (x) => (s(), T(rg, {
              key: x.name,
              conflict: x,
              resolution: d(x.name),
              onResolve: (R) => v(x.name, R)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          m.value ? (s(), o("div", kg, [
            f[6] || (f[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(p.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        $(ye, {
          variant: "secondary",
          onClick: w
        }, {
          default: i(() => [...f[7] || (f[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[8] || (f[8] = e("div", { class: "footer-spacer" }, null, -1)),
        $(ye, {
          variant: "primary",
          disabled: !m.value || t.validating,
          loading: t.validating,
          onClick: b
        }, {
          default: i(() => [
            h(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _g = /* @__PURE__ */ ne(bg, [["__scopeId", "data-v-c58d150d"]]), $g = { class: "node-conflict-item" }, Cg = { class: "node-header" }, xg = { class: "node-name" }, Sg = { class: "node-id" }, Ig = { class: "version-comparison" }, Eg = { class: "version yours" }, Tg = { class: "version theirs" }, Rg = { class: "chosen-version" }, Pg = { class: "chosen" }, Mg = { class: "chosen-reason" }, Dg = { class: "affected-workflows" }, Lg = { class: "wf-source" }, zg = { class: "wf-version" }, Ug = /* @__PURE__ */ oe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", $g, [
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
          (s(!0), o(B, null, ie(t.conflict.affected_workflows, (l) => (s(), o("li", {
            key: l.name
          }, [
            e("code", null, a(l.name), 1),
            e("span", Lg, "(" + a(l.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", zg, "needs v" + a(l.required_version), 1)
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
}, Vg = /* @__PURE__ */ oe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: u }) {
    const n = t, l = u, c = z(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, m) => (s(), T(He, {
      title: "Compatibility Check",
      size: "lg",
      onClose: m[3] || (m[3] = (p) => l("cancel"))
    }, {
      body: i(() => [
        e("div", Og, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Ag, [
            m[5] || (m[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              m[4] || (m[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(B, { key: 1 }, [
            m[6] || (m[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Fg, [
              (s(!0), o(B, null, ie(t.validation.node_conflicts, (p) => (s(), T(Ng, {
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
              (s(!0), o(B, null, ie(t.validation.warnings, (p, d) => (s(), o("li", { key: d }, a(p), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        $(ye, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (p) => l("cancel"))
        }, {
          default: i(() => [...m[9] || (m[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m[11] || (m[11] = e("div", { class: "footer-spacer" }, null, -1)),
        $(ye, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (p) => l("goBack"))
        }, {
          default: i(() => [...m[10] || (m[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        $(ye, {
          variant: "primary",
          loading: t.executing,
          onClick: m[2] || (m[2] = (p) => l("proceed"))
        }, {
          default: i(() => [
            h(a(c.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Wg = /* @__PURE__ */ ne(Vg, [["__scopeId", "data-v-fefd26ed"]]), Gg = { key: 0 }, jg = /* @__PURE__ */ oe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: u }) {
    const n = u, {
      getRemotes: l,
      addRemote: c,
      removeRemote: g,
      updateRemoteUrl: m,
      fetchRemote: p,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: w,
      getPushPreview: b,
      pushToRemote: k,
      validateMerge: f
    } = Ae(), x = y([]), R = y(null), C = y({}), P = y(!1), O = y(null), I = y(""), S = y(!1), Y = y(null), F = y(!1), V = y("add"), E = y({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), _ = z(() => {
      if (!I.value.trim()) return x.value;
      const G = I.value.toLowerCase();
      return x.value.filter(
        (le) => le.name.toLowerCase().includes(G) || le.fetch_url.toLowerCase().includes(G) || le.push_url.toLowerCase().includes(G)
      );
    });
    async function M() {
      P.value = !0, O.value = null;
      try {
        const G = await l();
        x.value = G.remotes, R.value = G.current_branch_tracking || null, await Promise.all(
          G.remotes.map(async (le) => {
            const xe = await d(le.name);
            xe && (C.value[le.name] = xe);
          })
        );
      } catch (G) {
        O.value = G instanceof Error ? G.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function H() {
      V.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function se(G) {
      const le = x.value.find((xe) => xe.name === G);
      le && (V.value = "edit", E.value = {
        name: le.name,
        fetchUrl: le.fetch_url,
        pushUrl: le.push_url
      }, F.value = !0);
    }
    async function K(G) {
      try {
        V.value === "add" ? await c(G.name, G.fetchUrl) : await m(G.name, G.fetchUrl, G.pushUrl || void 0), F.value = !1, await M();
      } catch (le) {
        O.value = le instanceof Error ? le.message : "Operation failed";
      }
    }
    function te() {
      F.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(G) {
      Y.value = G;
      try {
        await p(G);
        const le = await d(G);
        le && (C.value[G] = le), n("toast", `✓ Fetched from ${G}`, "success");
      } catch (le) {
        n("toast", le instanceof Error ? le.message : "Fetch failed", "error");
      } finally {
        Y.value = null;
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
        Le.value = await b(G);
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
        await k(le, G), Q(), n("toast", `✓ Pushed to ${le}`, "success"), await M();
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
    return Ne(M), (G, le) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (xe) => S.value = !0)
          }, {
            actions: i(() => [
              F.value ? r("", !0) : (s(), T(X, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: i(() => [...le[3] || (le[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          F.value ? r("", !0) : (s(), T(es, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": le[1] || (le[1] = (xe) => I.value = xe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          P.value ? (s(), T(zt, {
            key: 0,
            message: "Loading remotes..."
          })) : O.value ? (s(), T(Ut, {
            key: 1,
            message: O.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
            F.value ? (s(), T(Ff, {
              key: 0,
              mode: V.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: K,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            x.value.length && !F.value ? (s(), T(ps, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(x.value.length) + " remote" + a(x.value.length !== 1 ? "s" : "") + " ", 1),
                R.value ? (s(), o("span", Gg, " • Tracking: " + a(R.value.remote) + "/" + a(R.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            _.value.length && !F.value ? (s(), T(Fe, {
              key: 2,
              title: "REMOTES",
              count: _.value.length
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(_.value, (xe) => (s(), T(If, {
                  key: xe.name,
                  remote: xe,
                  "sync-status": C.value[xe.name],
                  "fetching-remote": Y.value,
                  onFetch: J,
                  onEdit: se,
                  onRemove: U,
                  onPull: tt,
                  onPush: ue
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !_.value.length && !F.value ? (s(), T(_t, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                $(X, {
                  variant: "primary",
                  onClick: H
                }, {
                  default: i(() => [...le[4] || (le[4] = [
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
      $($t, {
        show: S.value,
        title: "About Git Remotes",
        onClose: le[2] || (le[2] = (xe) => S.value = !1)
      }, {
        content: i(() => [...le[5] || (le[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          $(X, {
            variant: "link",
            onClick: N
          }, {
            default: i(() => [...le[6] || (le[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $($p, {
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
      $(jp, {
        show: Ce.value,
        "remote-name": me.value || "",
        preview: Le.value,
        loading: ge.value,
        pushing: Ue.value,
        onClose: Q,
        onPush: ee,
        onPullFirst: L
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ae.value && Je.value ? (s(), T(_g, {
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
      be.value && De.value ? (s(), T(Wg, {
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
}, Xg = { class: "setting-control" }, Qg = /* @__PURE__ */ oe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
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
        Re(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ts = /* @__PURE__ */ ne(Qg, [["__scopeId", "data-v-cb5d236c"]]), Zg = { class: "toggle" }, eh = ["checked", "disabled"], th = /* @__PURE__ */ oe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", Zg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (l) => u.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, eh),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), sh = /* @__PURE__ */ ne(th, [["__scopeId", "data-v-71c0f550"]]), oh = { class: "workspace-settings-content" }, nh = { class: "settings-section" }, ah = { class: "path-setting" }, lh = { class: "path-value" }, ih = { class: "path-setting" }, rh = { class: "path-value" }, dh = { class: "settings-section" }, ch = { class: "settings-section" }, uh = { class: "settings-section" }, mh = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: u, emit: n }) {
    const l = t, c = n, { getConfig: g, updateConfig: m } = Ae(), p = y(!1), d = y(null), v = y(null), w = y(null), b = y(null), k = y(""), f = y(""), x = y(!1);
    function R(F) {
      return F.join(" ");
    }
    function C(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const P = z(() => {
      if (!b.value) return !1;
      const F = k.value !== (b.value.civitai_api_key || ""), V = f.value !== R(b.value.comfyui_extra_args || []);
      return F || V;
    });
    async function O() {
      p.value = !0, d.value = null;
      try {
        w.value = await g(l.workspacePath || void 0), b.value = { ...w.value }, k.value = w.value.civitai_api_key || "", f.value = R(w.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        x.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        p.value = !1;
      }
    }
    async function I() {
      var F, V;
      v.value = null;
      try {
        const E = {};
        k.value !== (((F = b.value) == null ? void 0 : F.civitai_api_key) || "") && (E.civitai_api_key = k.value || null), f.value !== R(((V = b.value) == null ? void 0 : V.comfyui_extra_args) || []) && (E.comfyui_extra_args = C(f.value)), await m(E, l.workspacePath || void 0), await O(), v.value = { type: "success", message: "Settings saved successfully" }, c("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (E) {
        const _ = E instanceof Error ? E.message : "Failed to save settings";
        v.value = { type: "error", message: _ }, c("error", _);
      }
    }
    function S() {
      b.value && (k.value = b.value.civitai_api_key || "", f.value = R(b.value.comfyui_extra_args || []), v.value = null);
    }
    function Y(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return u({
      saveSettings: I,
      resetSettings: S,
      hasChanges: P,
      loadSettings: O
    }), Ne(O), (F, V) => (s(), o("div", oh, [
      p.value ? (s(), T(zt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), T(Ut, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: O
      }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
        $(Fe, { title: "WORKSPACE PATHS" }, {
          default: i(() => {
            var E, _;
            return [
              e("div", nh, [
                e("div", ah, [
                  V[3] || (V[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  V[4] || (V[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", lh, a(((E = w.value) == null ? void 0 : E.workspace_path) || "Loading..."), 1)
                ]),
                e("div", ih, [
                  V[5] || (V[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  V[6] || (V[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", rh, a(((_ = w.value) == null ? void 0 : _.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        $(Fe, { title: "API CREDENTIALS" }, {
          default: i(() => [
            e("div", dh, [
              $(Ts, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: i(() => [
                  $(bs, {
                    modelValue: k.value,
                    "onUpdate:modelValue": V[0] || (V[0] = (E) => k.value = E),
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
        $(Fe, { title: "COMFYUI SETTINGS" }, {
          default: i(() => [
            e("div", ch, [
              $(Ts, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: i(() => [
                  $(bs, {
                    modelValue: f.value,
                    "onUpdate:modelValue": V[1] || (V[1] = (E) => f.value = E),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              V[7] || (V[7] = e("div", { class: "setting-hint" }, [
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
        $(Fe, { title: "UI SETTINGS" }, {
          default: i(() => [
            e("div", uh, [
              $(Ts, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: i(() => [
                  $(sh, {
                    modelValue: x.value,
                    "onUpdate:modelValue": [
                      V[2] || (V[2] = (E) => x.value = E),
                      Y
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        v.value ? (s(), T(ps, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: i(() => [
            e("span", {
              style: Lt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), co = /* @__PURE__ */ ne(mh, [["__scopeId", "data-v-9f44552d"]]), vh = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const u = y(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (l, c) => (s(), T(nt, null, {
      header: i(() => [
        $(at, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => {
            var g, m;
            return [
              $(X, {
                variant: "primary",
                size: "sm",
                disabled: !((g = u.value) != null && g.hasChanges),
                onClick: c[0] || (c[0] = (p) => {
                  var d;
                  return (d = u.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: i(() => [...c[2] || (c[2] = [
                  h(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (m = u.value) != null && m.hasChanges ? (s(), T(X, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: c[1] || (c[1] = (p) => {
                  var d;
                  return (d = u.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: i(() => [...c[3] || (c[3] = [
                  h(" Reset ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: i(() => [
        $(co, {
          ref_key: "contentRef",
          ref: u,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), fh = { class: "base-tabs" }, ph = ["disabled", "onClick"], gh = {
  key: 0,
  class: "base-tabs__badge"
}, hh = /* @__PURE__ */ oe({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: u }) {
    const n = t, l = u;
    function c(g) {
      var m;
      (m = n.tabs.find((p) => p.id === g)) != null && m.disabled || l("update:modelValue", g);
    }
    return (g, m) => (s(), o("div", fh, [
      (s(!0), o(B, null, ie(t.tabs, (p) => (s(), o("button", {
        key: p.id,
        class: fe([
          "base-tabs__tab",
          {
            active: t.modelValue === p.id,
            disabled: p.disabled
          }
        ]),
        disabled: p.disabled,
        onClick: (d) => c(p.id)
      }, [
        h(a(p.label) + " ", 1),
        p.badge ? (s(), o("span", gh, a(p.badge), 1)) : r("", !0)
      ], 10, ph))), 128))
    ]));
  }
}), uo = /* @__PURE__ */ ne(hh, [["__scopeId", "data-v-ad5e6cad"]]), yh = { class: "log-viewer-wrapper" }, wh = ["disabled", "title"], kh = /* @__PURE__ */ oe({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(t) {
    const u = t, n = y(null), l = y("idle"), c = z(() => u.logs.map((v) => ({
      text: u.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function g() {
      var w;
      await As();
      const v = (w = n.value) == null ? void 0 : w.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    Ne(g), ut(() => u.logs, g);
    async function m() {
      if (c.value.length === 0) return;
      const v = c.value.map((w) => w.text).join(`
`);
      try {
        await navigator.clipboard.writeText(v), l.value = "copied", setTimeout(() => {
          l.value = "idle";
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
          disabled: l.value !== "idle",
          title: l.value === "copied" ? "Copied!" : "Copy all logs"
        }, a(l.value === "copied" ? "Copied!" : "Copy"), 9, wh),
        (s(!0), o(B, null, ie(c.value, (b, k) => (s(), o("div", {
          key: k,
          class: fe(`log-line log-level-${b.level.toLowerCase()}`)
        }, a(b.text), 3))), 128))
      ], 544)
    ]));
  }
}), mo = /* @__PURE__ */ ne(kh, [["__scopeId", "data-v-c0cc6d21"]]), bh = /* @__PURE__ */ oe({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const {
      getWorkspaceLogs: u,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: l,
      getOrchestratorLogPath: c,
      openFile: g
    } = Ae(), m = y("workspace"), p = y([]), d = y(!1), v = y(null), w = y(!1), b = y(null), k = y(null), f = y(!1), x = z(() => m.value === "workspace" ? b.value : k.value);
    async function R() {
      d.value = !0, v.value = null;
      try {
        m.value === "workspace" ? p.value = await u(void 0, 500) : p.value = await l(void 0, 500);
      } catch (O) {
        v.value = O instanceof Error ? O.message : `Failed to load ${m.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function C() {
      try {
        const [O, I] = await Promise.all([
          n(),
          c()
        ]);
        O.exists && (b.value = O.path), I.exists && (k.value = I.path);
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
      R();
    }), Ne(() => {
      R(), C();
    }), (O, I) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (S) => w.value = !0)
          }, {
            actions: i(() => [
              $(X, {
                variant: "secondary",
                size: "sm",
                onClick: P,
                disabled: !x.value || f.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  h(a(f.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(X, {
                variant: "secondary",
                size: "sm",
                onClick: R,
                disabled: d.value
              }, {
                default: i(() => [
                  h(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          $(uo, {
            modelValue: m.value,
            "onUpdate:modelValue": I[1] || (I[1] = (S) => m.value = S),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          d.value ? (s(), T(zt, {
            key: 0,
            message: `Loading ${m.value} logs...`
          }, null, 8, ["message"])) : v.value ? (s(), T(Ut, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
            p.value.length === 0 ? (s(), T(_t, {
              key: 0,
              icon: "📝",
              message: `No ${m.value} logs available`
            }, null, 8, ["message"])) : (s(), T(mo, {
              key: 1,
              logs: p.value,
              "raw-format": m.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      $($t, {
        show: w.value,
        title: "About Logs",
        onClose: I[3] || (I[3] = (S) => w.value = !1)
      }, {
        content: i(() => [...I[4] || (I[4] = [
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
        actions: i(() => [
          $(X, {
            variant: "primary",
            onClick: I[2] || (I[2] = (S) => w.value = !1)
          }, {
            default: i(() => [...I[5] || (I[5] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _h = /* @__PURE__ */ oe({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n, getEnvironmentLogPath: l, openFile: c } = Ae(), g = y([]), m = y(!1), p = y(null), d = y(!1), v = y("production"), w = y(null), b = y(!1);
    async function k() {
      m.value = !0, p.value = null;
      try {
        g.value = await u(void 0, 500);
        try {
          const R = await n();
          v.value = R.environment || "production";
        } catch {
        }
      } catch (R) {
        p.value = R instanceof Error ? R.message : "Failed to load environment logs";
      } finally {
        m.value = !1;
      }
    }
    async function f() {
      try {
        const R = await l();
        R.exists && (w.value = R.path);
      } catch {
      }
    }
    async function x() {
      if (w.value) {
        b.value = !0;
        try {
          await c(w.value);
        } catch (R) {
          console.error("Failed to open log file:", R);
        } finally {
          b.value = !1;
        }
      }
    }
    return Ne(() => {
      k(), f();
    }), (R, C) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (P) => d.value = !0)
          }, {
            actions: i(() => [
              $(X, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: !w.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  h(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(X, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: m.value
              }, {
                default: i(() => [
                  h(a(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          m.value ? (s(), T(zt, {
            key: 0,
            message: "Loading environment logs..."
          })) : p.value ? (s(), T(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
            g.value.length === 0 ? (s(), T(_t, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), T(mo, {
              key: 1,
              logs: g.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      $($t, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (P) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            C[3] || (C[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            C[4] || (C[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
        actions: i(() => [
          $(X, {
            variant: "primary",
            onClick: C[1] || (C[1] = (P) => d.value = !1)
          }, {
            default: i(() => [...C[6] || (C[6] = [
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
}, Sh = /* @__PURE__ */ oe({
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
    return (u, n) => (s(), T(ot, {
      status: t.isCurrent ? "synced" : void 0
    }, Kt({
      icon: i(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", $h, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Ch, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", xh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: i(() => [
        Re(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          $(Ge, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          $(Ge, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          $(Ge, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), T(Ge, {
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
}, Gh = { class: "value" }, jh = { class: "footer-actions" }, Kh = /* @__PURE__ */ oe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: u }) {
    const n = u;
    function l(c) {
      if (!c) return "Unknown";
      try {
        const g = new Date(c), p = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), d = Math.floor(p / 6e4), v = Math.floor(p / 36e5), w = Math.floor(p / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return c;
      }
    }
    return (c, g) => (s(), T(He, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (m) => n("close"))
    }, {
      body: i(() => [
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
            e("span", Vh, a(l(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", Wh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Gh, a(l(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", jh, [
          t.canDelete ? (s(), T(ye, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (m) => n("delete", t.environment.name))
          }, {
            default: i(() => [...g[12] || (g[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          $(ye, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (m) => n("close"))
          }, {
            default: i(() => [...g[13] || (g[13] = [
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
], po = "auto", qh = { class: "progress-bar" }, Yh = /* @__PURE__ */ oe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = z(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (l, c) => (s(), o("div", qh, [
      e("div", {
        class: fe(["progress-fill", t.variant]),
        style: Lt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ss = /* @__PURE__ */ ne(Yh, [["__scopeId", "data-v-1beb0512"]]), Jh = { class: "task-progress" }, Xh = { class: "progress-info" }, Qh = { class: "progress-percentage" }, Zh = { class: "progress-message" }, e1 = {
  key: 0,
  class: "progress-steps"
}, t1 = { class: "step-icon" }, s1 = { class: "step-label" }, o1 = /* @__PURE__ */ oe({
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
    const u = t;
    function n(c) {
      const g = u.steps.find((m) => m.id === c);
      return g ? u.progress >= g.progressThreshold ? "completed" : u.currentPhase === c ? "active" : "pending" : "pending";
    }
    function l(c) {
      const g = n(c);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (c, g) => (s(), o("div", Jh, [
      $(Ss, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Xh, [
        e("span", Qh, a(t.progress) + "%", 1),
        e("span", Zh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", e1, [
        (s(!0), o(B, null, ie(t.steps, (m) => (s(), o("div", {
          key: m.id,
          class: fe(["step", n(m.id)])
        }, [
          e("span", t1, a(l(m.id)), 1),
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
}, b1 = 10, _1 = /* @__PURE__ */ oe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: l, createEnvironment: c, getCreateProgress: g } = Ae(), m = y(""), p = y(fo), d = y("latest"), v = y(po), w = y(!1), b = y([{ tag_name: "latest", name: "Latest", published_at: "" }]), k = y(!1), f = y(!1), x = y({
      progress: 0,
      message: ""
    });
    let R = null, C = 0;
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
    function I() {
      f.value || n("close");
    }
    async function S() {
      const _ = m.value.trim();
      if (_) {
        f.value = !0, x.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const M = {
            name: _,
            python_version: p.value,
            comfyui_version: d.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, H = await c(M);
          H.status === "started" ? Y() : H.status === "error" && (x.value = {
            progress: 0,
            message: H.message || "Failed to start creation",
            error: H.message
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
    function Y() {
      R || (C = 0, R = window.setInterval(async () => {
        try {
          const _ = await g();
          C = 0, x.value = {
            progress: _.progress ?? 0,
            message: _.message,
            phase: _.phase,
            error: _.error
          }, _.state === "complete" ? (F(), n("created", _.environment_name || m.value.trim(), w.value)) : _.state === "error" ? (F(), x.value.error = _.error || _.message) : _.state === "idle" && f.value && (F(), x.value.error = "Creation was interrupted. Please try again.");
        } catch {
          C++, C >= b1 && (F(), x.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      R && (clearInterval(R), R = null);
    }
    function V() {
      f.value = !1, x.value = { progress: 0, message: "" }, n("close");
    }
    async function E() {
      k.value = !0;
      try {
        b.value = await l();
      } catch (_) {
        console.error("Failed to load ComfyUI releases:", _);
      } finally {
        k.value = !1;
      }
    }
    return Ne(async () => {
      var _;
      await As(), (_ = O.value) == null || _.focus(), E();
    }), Cs(() => {
      F();
    }), (_, M) => (s(), T(He, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !f.value,
      onClose: I
    }, {
      body: i(() => [
        f.value ? (s(), o("div", p1, [
          e("p", g1, [
            M[11] || (M[11] = h(" Creating environment ", -1)),
            e("strong", null, a(m.value), 1),
            M[12] || (M[12] = h("... ", -1))
          ]),
          $($s, {
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
              "onUpdate:modelValue": M[0] || (M[0] = (H) => m.value = H),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: wt(S, ["enter"])
            }, null, 544), [
              [kt, m.value]
            ])
          ]),
          e("div", l1, [
            M[7] || (M[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Pe(e("select", {
              "onUpdate:modelValue": M[1] || (M[1] = (H) => p.value = H),
              class: "form-select"
            }, [
              (s(!0), o(B, null, ie(Se(vo), (H) => (s(), o("option", {
                key: H,
                value: H
              }, a(H), 9, i1))), 128))
            ], 512), [
              [Dt, p.value]
            ])
          ]),
          e("div", r1, [
            M[8] || (M[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Pe(e("select", {
              "onUpdate:modelValue": M[2] || (M[2] = (H) => d.value = H),
              class: "form-select",
              disabled: k.value
            }, [
              (s(!0), o(B, null, ie(b.value, (H) => (s(), o("option", {
                key: H.tag_name,
                value: H.tag_name
              }, a(H.name), 9, c1))), 128))
            ], 8, d1), [
              [Dt, d.value]
            ])
          ]),
          e("div", u1, [
            M[9] || (M[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Pe(e("select", {
              "onUpdate:modelValue": M[3] || (M[3] = (H) => v.value = H),
              class: "form-select"
            }, [
              (s(!0), o(B, null, ie(Se(Gs), (H) => (s(), o("option", {
                key: H,
                value: H
              }, a(H) + a(H === "auto" ? " (detect GPU)" : ""), 9, m1))), 128))
            ], 512), [
              [Dt, v.value]
            ])
          ]),
          e("div", v1, [
            e("label", f1, [
              Pe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": M[4] || (M[4] = (H) => w.value = H)
              }, null, 512), [
                [ks, w.value]
              ]),
              M[10] || (M[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        f.value ? (s(), o(B, { key: 1 }, [
          x.value.error ? (s(), T(ye, {
            key: 0,
            variant: "secondary",
            onClick: V
          }, {
            default: i(() => [...M[15] || (M[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", k1, " Creating environment... "))
        ], 64)) : (s(), o(B, { key: 0 }, [
          $(ye, {
            variant: "primary",
            disabled: !m.value.trim(),
            onClick: S
          }, {
            default: i(() => [...M[13] || (M[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(ye, {
            variant: "secondary",
            onClick: M[5] || (M[5] = (H) => n("close"))
          }, {
            default: i(() => [...M[14] || (M[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), $1 = /* @__PURE__ */ ne(_1, [["__scopeId", "data-v-f37eaa42"]]), C1 = /* @__PURE__ */ oe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: u, emit: n }) {
    const l = n, { getEnvironments: c } = Ae(), g = y([]), m = y(!1), p = y(null), d = y(""), v = y(!1), w = y(!1), b = y(null), k = z(() => {
      if (!d.value.trim()) return g.value;
      const O = d.value.toLowerCase();
      return g.value.filter(
        (I) => {
          var S;
          return I.name.toLowerCase().includes(O) || ((S = I.current_branch) == null ? void 0 : S.toLowerCase().includes(O));
        }
      );
    });
    function f(O, I) {
      w.value = !1, l("created", O, I);
    }
    function x() {
      w.value = !0;
    }
    function R(O) {
      b.value = O;
    }
    function C(O) {
      b.value = null, l("delete", O);
    }
    async function P() {
      m.value = !0, p.value = null;
      try {
        g.value = await c();
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to load environments";
      } finally {
        m.value = !1;
      }
    }
    return Ne(P), u({
      loadEnvironments: P,
      openCreateModal: x
    }), (O, I) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (S) => v.value = !0)
          }, {
            actions: i(() => [
              $(X, {
                variant: "primary",
                size: "sm",
                onClick: x
              }, {
                default: i(() => [...I[6] || (I[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              $(X, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: i(() => [...I[7] || (I[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          $(es, {
            modelValue: d.value,
            "onUpdate:modelValue": I[1] || (I[1] = (S) => d.value = S),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (s(), T(zt, {
            key: 0,
            message: "Loading environments..."
          })) : p.value ? (s(), T(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (s(), o(B, { key: 2 }, [
            k.value.length ? (s(), T(Fe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: i(() => [
                (s(!0), o(B, null, ie(k.value, (S) => (s(), T(Ih, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    S.is_current ? r("", !0) : (s(), T(X, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => O.$emit("switch", S.name)
                    }, {
                      default: i(() => [...I[8] || (I[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    $(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => R(S)
                    }, {
                      default: i(() => [...I[9] || (I[9] = [
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
            k.value.length ? r("", !0) : (s(), T(_t, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Kt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  $(X, {
                    variant: "primary",
                    onClick: x
                  }, {
                    default: i(() => [...I[10] || (I[10] = [
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
      $($t, {
        show: v.value,
        title: "About Environments",
        onClose: I[3] || (I[3] = (S) => v.value = !1)
      }, {
        content: i(() => [...I[11] || (I[11] = [
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
          $(X, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (S) => v.value = !1)
          }, {
            default: i(() => [...I[12] || (I[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), T(Hh, {
        key: 0,
        environment: b.value,
        "can-delete": g.value.length > 1,
        onClose: I[4] || (I[4] = (S) => b.value = null),
        onDelete: C
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      w.value ? (s(), T($1, {
        key: 1,
        onClose: I[5] || (I[5] = (S) => w.value = !1),
        onCreated: f
      })) : r("", !0)
    ], 64));
  }
}), x1 = /* @__PURE__ */ ne(C1, [["__scopeId", "data-v-f95999f4"]]), S1 = { class: "file-path" }, I1 = { class: "file-path-text" }, E1 = ["title"], T1 = /* @__PURE__ */ oe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = y(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (c) {
        console.error("Failed to copy:", c);
      }
    }
    return (c, g) => (s(), o("div", S1, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", I1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: l
      }, a(n.value ? "✓" : "📋"), 9, E1)) : r("", !0)
    ]));
  }
}), R1 = /* @__PURE__ */ ne(T1, [["__scopeId", "data-v-f0982173"]]), P1 = { class: "export-blocked" }, M1 = { class: "issues-list" }, D1 = { class: "issue-message" }, L1 = {
  key: 0,
  class: "issue-details"
}, z1 = ["onClick"], U1 = { class: "issue-fix" }, N1 = /* @__PURE__ */ oe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const u = t, n = vs({});
    function l(c) {
      const g = u.issues[c];
      return n[c] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (c, g) => (s(), T(He, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (m) => c.$emit("close"))
    }, {
      body: i(() => [
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
            (s(!0), o(B, null, ie(t.issues, (m, p) => (s(), o("div", {
              key: p,
              class: "issue-item"
            }, [
              e("div", D1, a(m.message), 1),
              m.details.length ? (s(), o("div", L1, [
                (s(!0), o(B, null, ie(l(p), (d, v) => (s(), o("div", {
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
                m.type === "uncommitted_workflows" ? (s(), o(B, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : m.type === "uncommitted_git_changes" ? (s(), o(B, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : m.type === "unresolved_issues" ? (s(), o(B, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : r("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: i(() => [
        $(ye, {
          variant: "primary",
          onClick: g[0] || (g[0] = (m) => c.$emit("close"))
        }, {
          default: i(() => [...g[3] || (g[3] = [
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
}, F1 = { class: "warning-header" }, B1 = { class: "warning-summary" }, V1 = { class: "warning-title" }, W1 = { class: "models-section" }, G1 = { class: "models-list" }, j1 = { class: "model-info" }, K1 = { class: "model-filename" }, H1 = { class: "model-workflows" }, q1 = ["onClick"], Y1 = /* @__PURE__ */ oe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: u }) {
    const n = t, l = u, c = y(!1), g = y(null), m = z(() => c.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function p() {
      g.value = null, l("revalidate");
    }
    return (d, v) => (s(), o(B, null, [
      $(He, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (w) => d.$emit("cancel"))
      }, {
        body: i(() => [
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
            ])])) : (s(), o(B, { key: 1 }, [
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
                  (s(!0), o(B, null, ie(m.value, (w) => (s(), o("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    e("div", j1, [
                      e("div", K1, a(w.filename), 1),
                      e("div", H1, " Used by: " + a(w.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (b) => g.value = w.hash
                    }, " Add Source ", 8, q1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !c.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (w) => c.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: i(() => [
          $(ye, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (w) => d.$emit("cancel"))
          }, {
            default: i(() => [...v[7] || (v[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          $(ye, {
            variant: "primary",
            onClick: v[2] || (v[2] = (w) => d.$emit("confirm"))
          }, {
            default: i(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), T(Vs, {
        key: 0,
        identifier: g.value,
        onClose: p
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), ho = /* @__PURE__ */ ne(Y1, [["__scopeId", "data-v-b698d882"]]), J1 = { class: "export-card" }, X1 = { class: "export-path-row" }, Q1 = { class: "export-actions" }, Z1 = {
  key: 1,
  class: "export-warning"
}, ey = /* @__PURE__ */ oe({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: u, exportEnvWithForce: n } = Ae(), l = y(""), c = y(!1), g = y(!1), m = y(!1), p = y(null), d = y(!1), v = y(null), w = y(!1), b = y(!1), k = z(() => c.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function f() {
      c.value = !0, p.value = null;
      try {
        const I = await u();
        v.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? b.value = !0 : await C() : w.value = !0;
      } catch (I) {
        p.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function x() {
      b.value = !1, await C();
    }
    async function R() {
      try {
        const I = await u();
        v.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function C() {
      g.value = !0;
      try {
        const I = await n(l.value || void 0);
        p.value = I;
      } catch (I) {
        p.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function P() {
      var I;
      if ((I = p.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (S) {
          console.error("Failed to copy path:", S);
        }
    }
    async function O() {
      var I;
      if ((I = p.value) != null && I.path) {
        m.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(p.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const Y = await S.blob(), F = URL.createObjectURL(Y), V = p.value.path.split("/").pop() || "environment-export.tar.gz", E = document.createElement("a");
          E.href = F, E.download = V, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(F);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
      }
    }
    return (I, S) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (Y) => d.value = !0)
          })
        ]),
        content: i(() => [
          $(Fe, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              e("div", J1, [
                S[7] || (S[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", X1, [
                  $(bs, {
                    modelValue: l.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (Y) => l.value = Y),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Q1, [
                  $(X, {
                    variant: "primary",
                    size: "md",
                    loading: c.value || g.value,
                    disabled: c.value || g.value,
                    onClick: f
                  }, {
                    default: i(() => [
                      S[6] || (S[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      h(" " + a(k.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          p.value ? (s(), T(Fe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              $(ot, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Kt({
                icon: i(() => [
                  h(a(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  h(a(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  h(a(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    $(Ge, { label: "Saved to:" }, {
                      default: i(() => [
                        $(R1, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (s(), T(Ge, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (s(), o("div", Z1, [...S[8] || (S[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    $(X, {
                      variant: "primary",
                      size: "sm",
                      loading: m.value,
                      onClick: O
                    }, {
                      default: i(() => [...S[9] || (S[9] = [
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
                    $(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: i(() => [...S[10] || (S[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    $(X, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (Y) => p.value = null)
                    }, {
                      default: i(() => [...S[11] || (S[11] = [
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
      $($t, {
        show: d.value,
        title: "What Gets Exported",
        onClose: S[3] || (S[3] = (Y) => d.value = !1)
      }, {
        content: i(() => [...S[12] || (S[12] = [
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
      w.value && v.value ? (s(), T(go, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: S[4] || (S[4] = (Y) => w.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      b.value && v.value ? (s(), T(ho, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: x,
        onCancel: S[5] || (S[5] = (Y) => b.value = !1),
        onRevalidate: R
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), ty = /* @__PURE__ */ ne(ey, [["__scopeId", "data-v-f4d120f2"]]), sy = { class: "file-input-wrapper" }, oy = ["accept", "multiple", "disabled"], ny = /* @__PURE__ */ oe({
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
    const l = n, c = y(null);
    function g() {
      var p;
      (p = c.value) == null || p.click();
    }
    function m(p) {
      const d = p.target;
      d.files && d.files.length > 0 && (l("change", d.files), d.value = "");
    }
    return u({
      triggerInput: g
    }), (p, d) => (s(), o("div", sy, [
      e("input", {
        ref_key: "fileInputRef",
        ref: c,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, oy),
      $(X, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: i(() => [
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
}, my = { class: "file-info" }, vy = { class: "file-details" }, fy = { class: "file-name" }, py = { class: "file-size" }, gy = /* @__PURE__ */ oe({
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
    const n = u, l = y(!1), c = y(null), g = y(0), m = z(() => c.value !== null), p = z(() => {
      var C;
      return ((C = c.value) == null ? void 0 : C.name) || "";
    }), d = z(() => {
      if (!c.value) return "";
      const C = c.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var P;
      C.stopPropagation(), g.value++, (P = C.dataTransfer) != null && P.types.includes("Files") && (l.value = !0);
    }
    function w(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function b(C) {
      C.stopPropagation(), g.value--, g.value === 0 && (l.value = !1);
    }
    function k(C) {
      var O;
      C.stopPropagation(), g.value = 0, l.value = !1;
      const P = (O = C.dataTransfer) == null ? void 0 : O.files;
      P && P.length > 0 && x(P[0]);
    }
    function f(C) {
      C.length > 0 && x(C[0]);
    }
    function x(C) {
      c.value = C, n("fileSelected", C);
    }
    function R() {
      c.value = null, n("clear");
    }
    return (C, P) => (s(), o("div", {
      class: fe(["file-drop-zone", { "drop-active": l.value, "has-file": m.value }]),
      onDragenter: Be(v, ["prevent"]),
      onDragover: Be(w, ["prevent"]),
      onDragleave: Be(b, ["prevent"]),
      onDrop: Be(k, ["prevent"])
    }, [
      m.value ? (s(), o("div", uy, [
        e("div", my, [
          P[1] || (P[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", vy, [
            e("div", fy, a(p.value), 1),
            e("div", py, a(d.value), 1)
          ])
        ]),
        $(X, {
          variant: "ghost",
          size: "xs",
          onClick: R,
          title: "Remove file"
        }, {
          default: i(() => [...P[2] || (P[2] = [
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
          $(ay, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: f
          }, {
            default: i(() => [
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
}, Ky = { class: "git-info" }, Hy = /* @__PURE__ */ oe({
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
    const u = t, n = z(() => u.workflows.length), l = z(() => u.models.length), c = z(() => u.nodes.length);
    function g(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, p) => (s(), o("div", yy, [
      e("div", wy, [
        $(ct, null, {
          default: i(() => [...p[0] || (p[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", ky, [
          p[1] || (p[1] = h(" From: ", -1)),
          $(Ls, null, {
            default: i(() => [
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
            (s(!0), o(B, null, ie(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
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
              e("div", My, a(l.value) + " file" + a(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Dy, [
            (s(!0), o(B, null, ie(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
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
              e("div", By, a(c.value) + " node" + a(c.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Vy, [
            (s(!0), o(B, null, ie(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
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
            t.gitBranch ? (s(), T(Ge, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                $(Ls, null, {
                  default: i(() => [
                    h(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), T(Ge, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                $(oo, { hash: t.gitCommit }, null, 8, ["hash"])
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
}, o0 = { class: "config-field" }, n0 = { class: "strategy-options" }, a0 = ["value", "checked", "onChange"], l0 = { class: "strategy-content" }, i0 = { class: "strategy-label" }, r0 = { class: "strategy-description" }, d0 = { class: "config-field switch-field" }, c0 = { class: "switch-label" }, u0 = ["checked"], m0 = { class: "advanced-section" }, v0 = { class: "advanced-content" }, f0 = { class: "config-field" }, p0 = ["value"], g0 = ["value"], h0 = /* @__PURE__ */ oe({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(t, { emit: u }) {
    const n = t, l = u, c = y(!1), g = y(!1);
    ut(() => n.nameError, (w) => {
      c.value = !1, g.value = !w && n.name.length > 0;
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
      const b = w.target.value;
      l("update:name", b), g.value = !1, p && clearTimeout(p), b.length > 0 ? (c.value = !0, p = setTimeout(() => {
        l("validate-name", b);
      }, 400)) : c.value = !1;
    }
    function v() {
      n.name.length > 0 && l("validate-name", n.name);
    }
    return (w, b) => (s(), o("div", Yy, [
      $(ct, null, {
        default: i(() => [...b[2] || (b[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Jy, [
        e("div", Xy, [
          $(ys, { required: "" }, {
            default: i(() => [...b[3] || (b[3] = [
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
            c.value ? (s(), o("span", e0, "...")) : g.value ? (s(), o("span", t0, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", s0, a(t.nameError), 1)) : r("", !0),
          b[4] || (b[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", o0, [
          $(ys, null, {
            default: i(() => [...b[5] || (b[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", n0, [
            (s(), o(B, null, ie(m, (k) => e("label", {
              key: k.value,
              class: fe(["strategy-option", { active: t.modelStrategy === k.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: k.value,
                checked: t.modelStrategy === k.value,
                onChange: (f) => l("update:modelStrategy", k.value)
              }, null, 40, a0),
              e("div", l0, [
                e("span", i0, a(k.label), 1),
                e("span", r0, a(k.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", d0, [
          e("label", c0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: b[0] || (b[0] = (k) => l("update:switchAfterImport", k.target.checked))
            }, null, 40, u0),
            b[6] || (b[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", m0, [
          b[8] || (b[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", v0, [
            e("div", f0, [
              $(ys, null, {
                default: i(() => [...b[7] || (b[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: b[1] || (b[1] = (k) => l("update:torchBackend", k.target.value))
              }, [
                (s(!0), o(B, null, ie(Se(Gs), (k) => (s(), o("option", {
                  key: k,
                  value: k
                }, a(k) + a(k === "auto" ? " (detect GPU)" : ""), 9, g0))), 128))
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
}, V0 = { class: "complete-message" }, W0 = { class: "complete-title" }, G0 = { class: "complete-details" }, j0 = { class: "complete-actions" }, K0 = /* @__PURE__ */ oe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: u, emit: n }) {
    var Ue, me, ge, Me;
    const l = t, c = n, { previewTarballImport: g, previewGitImport: m, validateEnvironmentName: p, executeImport: d, executeGitImport: v, getImportProgress: w } = Ae();
    let b = null;
    const k = y(null), f = y(l.resumeImport ?? !1), x = y(!1), R = y(!1), C = y(""), P = y(!1), O = y(null), I = y(""), S = y(null), Y = y(!1), F = y(null), V = y(null), E = y({
      name: ((Ue = l.initialProgress) == null ? void 0 : Ue.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), _ = y(null), M = y({
      message: ((me = l.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((ge = l.initialProgress) == null ? void 0 : ge.phase) ?? "",
      progress: ((Me = l.initialProgress) == null ? void 0 : Me.progress) ?? 0,
      error: null
    }), H = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], se = z(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ce = V.value;
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
    }), K = z(() => !P.value && !O.value && V.value && E.value.name.length > 0 && !_.value && (k.value || S.value));
    async function te(ce) {
      k.value = ce, P.value = !0, O.value = null, V.value = null;
      try {
        const Z = await g(ce);
        V.value = Z;
      } catch (Z) {
        O.value = Z instanceof Error ? Z.message : "Failed to analyze file", console.error("Preview error:", Z);
      } finally {
        P.value = !1;
      }
    }
    function J() {
      k.value = null, S.value = null, I.value = "", F.value = null, x.value = !1, R.value = !1, C.value = "", V.value = null, O.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, _.value = null, c("source-cleared");
    }
    function U() {
      Ce(), J(), f.value = !1, P.value = !1, Y.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (I.value.trim()) {
        Y.value = !0, F.value = null;
        try {
          const ce = await m(I.value.trim());
          S.value = I.value.trim(), V.value = ce;
        } catch (ce) {
          F.value = ce instanceof Error ? ce.message : "Failed to analyze repository";
        } finally {
          Y.value = !1;
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
        _.value = "Environment name is required";
        return;
      }
      try {
        const Z = await p(ce);
        _.value = Z.valid ? null : Z.error || "Invalid name";
      } catch {
        _.value = "Failed to validate name";
      }
    }
    async function ae() {
      if (E.value.name && !(!k.value && !S.value)) {
        f.value = !0, x.value = !1, M.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, c("import-started");
        try {
          let ce;
          if (k.value)
            ce = await d(
              k.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (S.value)
            ce = await v(
              S.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ce.status === "started" ? be() : (R.value = !1, C.value = ce.message, f.value = !1, x.value = !0);
        } catch (ce) {
          R.value = !1, C.value = ce instanceof Error ? ce.message : "Unknown error occurred during import", f.value = !1, x.value = !0;
        }
      }
    }
    async function be() {
      if (b) return;
      const ce = async () => {
        try {
          const De = await w();
          return M.value = {
            message: De.message,
            phase: De.phase || "",
            progress: De.progress ?? (De.state === "importing" ? 50 : 0),
            error: De.error || null
          }, De.state === "complete" ? (Ce(), R.value = !0, C.value = `Environment '${De.environment_name}' created successfully`, f.value = !1, x.value = !0, De.environment_name && c("import-complete", De.environment_name, E.value.switchAfterImport), !1) : De.state === "error" ? (Ce(), R.value = !1, C.value = De.error || De.message, f.value = !1, x.value = !0, !1) : !0;
        } catch (De) {
          return console.error("Failed to poll import progress:", De), !0;
        }
      };
      await ce() && (b = setInterval(async () => {
        await ce() || Ce();
      }, 2e3));
    }
    function Ce() {
      b && (clearInterval(b), b = null);
    }
    function Le(ce) {
      return ce < 1024 ? `${ce} B` : ce < 1024 * 1024 ? `${(ce / 1024).toFixed(1)} KB` : ce < 1024 * 1024 * 1024 ? `${(ce / (1024 * 1024)).toFixed(1)} MB` : `${(ce / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ne(async () => {
      try {
        const ce = await w();
        console.log("[ComfyGit ImportFlow] Import progress check:", ce.state, ce), ce.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ce.environment_name), f.value = !0, E.value.name = ce.environment_name || E.value.name || "", M.value = {
          progress: ce.progress ?? 0,
          message: ce.message || "Importing...",
          phase: ce.phase || "",
          error: null
        }, be());
      } catch (ce) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ce);
      }
    }), u({
      handleReset: U,
      isImporting: f,
      canImport: K
    }), (ce, Z) => {
      var De;
      return s(), o("div", w0, [
        !k.value && !S.value && !f.value ? (s(), o("div", k0, [
          $(hy, {
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
                "onUpdate:modelValue": Z[0] || (Z[0] = (pe) => I.value = pe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: wt(N, ["enter"]),
                disabled: Y.value
              }, null, 40, $0), [
                [kt, I.value]
              ]),
              $(X, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || Y.value,
                onClick: N
              }, {
                default: i(() => [
                  h(a(Y.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", C0, a(F.value), 1)) : r("", !0),
            Z[6] || (Z[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (k.value || S.value) && !f.value && !x.value ? (s(), o("div", x0, [
          e("div", S0, [
            k.value ? (s(), o("div", I0, [
              Z[8] || (Z[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", E0, [
                e("div", T0, a(k.value.name), 1),
                e("div", R0, a(Le(k.value.size)), 1)
              ])
            ])) : S.value ? (s(), o("div", P0, [
              Z[10] || (Z[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", M0, [
                e("div", D0, a(D(S.value)), 1),
                Z[9] || (Z[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            $(X, {
              variant: "ghost",
              size: "sm",
              onClick: J
            }, {
              default: i(() => [...Z[11] || (Z[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (s(), o("div", L0, [...Z[12] || (Z[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : O.value ? (s(), T(ht, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [O.value]
          }, null, 8, ["details"])) : V.value ? (s(), T(qy, {
            key: 2,
            "source-environment": se.value.sourceEnvironment,
            workflows: se.value.workflows,
            models: se.value.models,
            nodes: se.value.nodes,
            "git-branch": se.value.gitBranch,
            "git-commit": se.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          V.value ? (s(), T(y0, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": Z[1] || (Z[1] = (pe) => E.value.name = pe),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": Z[2] || (Z[2] = (pe) => E.value.modelStrategy = pe),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": Z[3] || (Z[3] = (pe) => E.value.torchBackend = pe),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": Z[4] || (Z[4] = (pe) => E.value.switchAfterImport = pe),
            "name-error": _.value,
            onValidateName: ve
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          E.value.modelStrategy === "skip" && ((De = V.value) != null && De.models_needing_download) ? (s(), T(ht, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${V.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", z0, [
            $(X, {
              variant: "secondary",
              size: "md",
              onClick: J
            }, {
              default: i(() => [...Z[13] || (Z[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(X, {
              variant: "primary",
              size: "md",
              disabled: !K.value,
              onClick: ae
            }, {
              default: i(() => [...Z[14] || (Z[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : f.value ? (s(), o("div", U0, [
          e("p", N0, [
            Z[15] || (Z[15] = h(" Importing environment ", -1)),
            e("strong", null, a(E.value.name), 1),
            Z[16] || (Z[16] = h("... ", -1))
          ]),
          $($s, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: H
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? r("", !0) : (s(), o("p", O0, " This may take several minutes. Please wait... ")),
          M.value.error ? (s(), o("div", A0, [
            e("p", F0, a(M.value.error), 1)
          ])) : r("", !0)
        ])) : x.value ? (s(), o("div", B0, [
          e("div", {
            class: fe(["complete-icon", R.value ? "success" : "error"])
          }, a(R.value ? "✓" : "✕"), 3),
          e("div", V0, [
            e("div", W0, a(R.value ? "Import Successful" : "Import Failed"), 1),
            e("div", G0, a(C.value), 1)
          ]),
          e("div", j0, [
            $(X, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: i(() => [...Z[17] || (Z[17] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), yo = /* @__PURE__ */ ne(K0, [["__scopeId", "data-v-72cbc04e"]]), H0 = /* @__PURE__ */ oe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: u }) {
    const n = u, l = y(!1);
    function c(g, m) {
      m && n("import-complete-switch", g);
    }
    return (g, m) => (s(), o(B, null, [
      $(nt, null, {
        header: i(() => [
          $(at, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (p) => l.value = !0)
          })
        ]),
        content: i(() => [
          $(yo, { onImportComplete: c })
        ]),
        _: 1
      }),
      $($t, {
        show: l.value,
        title: "How Import Works",
        onClose: m[1] || (m[1] = (p) => l.value = !1)
      }, {
        content: i(() => [...m[2] || (m[2] = [
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
async function hs(t, u) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(t, u);
}
function wo(t) {
  const u = z(
    () => Yt.value.filter((k) => k.status === "running")
  ), n = z(
    () => Yt.value.filter((k) => k.status === "deploying")
  ), l = z(
    () => Yt.value.filter((k) => k.status === "stopped")
  ), c = z(
    () => u.value.length + n.value.length
  ), g = z(() => {
    const k = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...Yt.value].sort(
      (f, x) => (k[f.status] ?? 5) - (k[x.status] ?? 5)
    );
  });
  async function m() {
    Rs.value = !0, Ps.value = null;
    try {
      let k;
      if (!gs) {
        const f = await hs("/v2/comfygit/deploy/instances");
        if (!f.ok)
          throw new Error(`Failed to fetch instances: ${f.status}`);
        k = await f.json();
      }
      Yt.value = k.instances;
    } catch (k) {
      Ps.value = k instanceof Error ? k.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", k);
    } finally {
      Rs.value = !1;
    }
  }
  async function p(k) {
    try {
      if (!gs) {
        const f = await hs(`/v2/comfygit/deploy/runpod/${k}/stop`, {
          method: "POST"
        });
        if (!f.ok) {
          const x = await f.json();
          throw new Error(x.message || "Failed to stop instance");
        }
      }
      await m();
    } catch (f) {
      throw console.error("[useDeployInstances] stopInstance error:", f), f;
    }
  }
  async function d(k) {
    try {
      if (!gs) {
        const f = await hs(`/v2/comfygit/deploy/runpod/${k}/start`, {
          method: "POST"
        });
        if (!f.ok) {
          const x = await f.json();
          throw new Error(x.message || "Failed to start instance");
        }
      }
      await m();
    } catch (f) {
      throw console.error("[useDeployInstances] startInstance error:", f), f;
    }
  }
  async function v(k) {
    try {
      if (!gs) {
        const f = await hs(`/v2/comfygit/deploy/runpod/${k}`, {
          method: "DELETE"
        });
        if (!f.ok) {
          const x = await f.json();
          throw new Error(x.message || "Failed to terminate instance");
        }
      }
      await m();
    } catch (f) {
      throw console.error("[useDeployInstances] terminateInstance error:", f), f;
    }
  }
  function w() {
    ls || (ls = window.setInterval(m, Y0));
  }
  function b() {
    ls && (clearInterval(ls), ls = null);
  }
  return ut(n, (k) => {
    k.length > 0 && w();
  }, { immediate: !0 }), t != null && t.autoStart && (m(), w()), {
    // State
    instances: Yt,
    isLoading: Rs,
    error: Ps,
    // Computed
    runningInstances: u,
    deployingInstances: n,
    stoppedInstances: l,
    liveInstanceCount: c,
    sortedInstances: g,
    // Actions
    refreshInstances: m,
    stopInstance: p,
    startInstance: d,
    terminateInstance: v,
    // Polling
    startPolling: w,
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
}, iw = { class: "progress-message" }, rw = { class: "instance-actions" }, dw = /* @__PURE__ */ oe({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(t) {
    const u = t, n = z(() => ({
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    })[u.instance.provider] || u.instance.provider), l = z(() => ({
      deploying: "Deploying",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[u.instance.status] || u.instance.status), c = z(() => `status-${u.instance.status}`);
    function g() {
      u.instance.comfyui_url && window.open(u.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function m() {
      u.instance.console_url && window.open(u.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function p(d) {
      const v = Math.floor(d / 3600), w = Math.floor(d % 3600 / 60);
      return v > 0 ? `${v}h ${w}m` : `${w}m`;
    }
    return (d, v) => (s(), o("div", {
      class: fe(["instance-card", c.value])
    }, [
      e("div", J0, [
        e("span", X0, a(n.value), 1),
        e("span", Q0, a(t.instance.name), 1),
        e("span", {
          class: fe(["status-indicator", t.instance.status])
        }, [
          t.instance.status === "deploying" ? (s(), o("span", Z0)) : r("", !0),
          h(" " + a(l.value), 1)
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
        t.instance.deployment_progress ? (s(), T(Ss, {
          key: 0,
          progress: t.instance.deployment_progress
        }, null, 8, ["progress"])) : r("", !0)
      ])) : r("", !0),
      e("div", rw, [
        t.instance.status === "running" && t.instance.comfyui_url ? (s(), T(X, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: g
        }, {
          default: i(() => [...v[3] || (v[3] = [
            h(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.console_url && t.instance.provider !== "custom" ? (s(), T(X, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: m
        }, {
          default: i(() => [...v[4] || (v[4] = [
            h(" Console ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.status === "running" ? (s(), T(X, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[0] || (v[0] = (w) => d.$emit("stop", t.instance.id))
        }, {
          default: i(() => [...v[5] || (v[5] = [
            h(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        t.instance.status === "stopped" ? (s(), T(X, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[1] || (v[1] = (w) => d.$emit("start", t.instance.id))
        }, {
          default: i(() => [...v[6] || (v[6] = [
            h(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        $(X, {
          variant: "destructive",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[2] || (v[2] = (w) => d.$emit("terminate", t.instance.id))
        }, {
          default: i(() => [...v[7] || (v[7] = [
            h(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), cw = /* @__PURE__ */ ne(dw, [["__scopeId", "data-v-de673d67"]]), uw = { class: "instances-tab" }, mw = { class: "instances-header" }, vw = {
  key: 0,
  class: "loading-state"
}, fw = {
  key: 1,
  class: "empty-state"
}, pw = {
  key: 2,
  class: "instances-list"
}, gw = /* @__PURE__ */ oe({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(t) {
    const u = t, n = z(() => {
      const l = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...u.instances].sort(
        (c, g) => (l[c.status] ?? 5) - (l[g.status] ?? 5)
      );
    });
    return (l, c) => (s(), o("div", uw, [
      e("div", mw, [
        $(ct, null, {
          default: i(() => [...c[4] || (c[4] = [
            h("Active Instances", -1)
          ])]),
          _: 1
        }),
        $(X, {
          variant: "ghost",
          size: "xs",
          loading: t.isLoading,
          onClick: c[0] || (c[0] = (g) => l.$emit("refresh"))
        }, {
          default: i(() => [...c[5] || (c[5] = [
            h(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      t.isLoading && t.instances.length === 0 ? (s(), o("div", vw, [...c[6] || (c[6] = [
        e("span", { class: "spinner" }, null, -1),
        h(" Loading instances... ", -1)
      ])])) : t.instances.length === 0 ? (s(), o("div", fw, [...c[7] || (c[7] = [
        e("span", { class: "empty-icon" }, "○", -1),
        e("span", { class: "empty-text" }, "No active instances", -1),
        e("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (s(), o("div", pw, [
        (s(!0), o(B, null, ie(n.value, (g) => (s(), T(cw, {
          key: g.id,
          instance: g,
          "is-loading": t.actionLoadingId === g.id,
          onStop: c[1] || (c[1] = (m) => l.$emit("stop", m)),
          onStart: c[2] || (c[2] = (m) => l.$emit("start", m)),
          onTerminate: c[3] || (c[3] = (m) => l.$emit("terminate", m))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), hw = /* @__PURE__ */ ne(gw, [["__scopeId", "data-v-fdd7390e"]]), yw = { class: "remote-header" }, ww = { class: "remote-info" }, kw = { class: "remote-icon" }, bw = { class: "remote-name" }, _w = {
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
}, Tw = { class: "remote-actions" }, Rw = /* @__PURE__ */ oe({
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
    const u = t, n = z(() => u.remote.is_default), l = z(() => {
      const g = u.remote.fetch_url, m = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return m ? `https://${m[1]}/${m[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), c = z(() => u.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, m) => (s(), o("div", {
      class: fe(["deploy-remote-card", { selected: t.isSelected }])
    }, [
      e("div", yw, [
        e("div", ww, [
          e("span", kw, a(n.value ? "🔗" : "🌐"), 1),
          e("span", bw, a(t.remote.name), 1),
          n.value ? (s(), o("span", _w, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", $w, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(B, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Cw, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", xw, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", Sw, "✓ synced"))
          ])) : r("", !0)
        ]),
        l.value ? (s(), o("a", {
          key: 0,
          href: l.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: m[0] || (m[0] = Be(() => {
          }, ["stop"]))
        }, a(c.value), 9, Iw)) : (s(), o("span", Ew, a(c.value), 1))
      ]),
      e("div", Tw, [
        $(X, {
          variant: "secondary",
          size: "xs",
          loading: t.isFetching,
          onClick: m[1] || (m[1] = (p) => g.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...m[4] || (m[4] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        t.syncStatus && t.syncStatus.ahead > 0 ? (s(), T(X, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: t.isPushing,
          onClick: m[2] || (m[2] = (p) => g.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            h(" Push ↑" + a(t.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : r("", !0),
        $(X, {
          variant: t.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: m[3] || (m[3] = (p) => g.$emit("select", t.remote.name))
        }, {
          default: i(() => [
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
}, ub = { class: "console-link" }, mb = ["href"], vb = /* @__PURE__ */ oe({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(t, { emit: u }) {
    const n = u, {
      getDeploySummary: l,
      testRunPodConnection: c,
      getNetworkVolumes: g,
      getRunPodGpuTypes: m,
      deployToRunPod: p,
      getDeploymentStatus: d,
      getStoredRunPodKey: v,
      clearRunPodKey: w,
      validateDeploy: b,
      getRemotes: k,
      getRemoteSyncStatus: f,
      fetchRemote: x,
      pushToRemote: R,
      getDataCenters: C
    } = Ae(), P = y(!1), O = y(""), I = y(!1), S = y(!1), Y = y(null), F = y(null), V = y(""), E = y(""), _ = y(""), M = y("SECURE"), H = y("ON_DEMAND"), se = y("my-comfyui-deploy"), K = y([]), te = y({}), J = y(!1), U = y(null), N = y(null), D = y(null), ve = y([]), ae = y(!1), be = y([]), Ce = y(!1), Le = y([]), Ue = y(!1), me = y(null), ge = y(!1), Me = y(!1), ce = y(null), Z = y(!1), De = y(null), pe = y(null), Je = y(null), tt = y(!1), st = y(null), Te = y(!1), Xe = y(!1), qe = z(() => be.value.find((re) => re.id === E.value) || null), Qe = z(() => V.value ? be.value.filter((re) => re.data_center_id === V.value) : be.value), mt = z(() => Le.value.filter((re) => re.available)), $e = z(() => U.value && te.value[U.value] || null), je = z(() => {
      if (!U.value) return null;
      const re = K.value.find((j) => j.name === U.value);
      return (re == null ? void 0 : re.fetch_url) || null;
    }), it = z(() => I.value && E.value && _.value && je.value && !Me.value && !tt.value), Ye = (re) => {
      const j = Le.value.find((Ze) => Ze.id === _.value);
      if (!j) return "0.00";
      if (re === "SECURE") return (j.securePrice ?? 0).toFixed(2);
      if (re === "COMMUNITY") return (j.communityPrice ?? 0).toFixed(2);
      const Ee = M.value === "SECURE";
      return re === "ON_DEMAND" ? Ee ? (j.securePrice ?? 0).toFixed(2) : (j.communityPrice ?? 0).toFixed(2) : Ee ? (j.secureSpotPrice ?? 0).toFixed(2) : (j.communitySpotPrice ?? 0).toFixed(2);
    }, ue = z(() => {
      const re = Le.value.find((xt) => xt.id === _.value), j = be.value.find((xt) => xt.id === E.value);
      if (!re) return null;
      const Ee = M.value === "SECURE", Ze = H.value === "SPOT";
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
      J.value = !0;
      try {
        const re = await k();
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
        J.value = !1;
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
        await R(re, { force: !1 });
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
        S.value = !0, Y.value = null;
        try {
          const re = await c(O.value, !0);
          re.status === "success" ? (I.value = !0, F.value = re.credit_balance ?? null, Y.value = { type: "success", message: re.message }, await Q()) : Y.value = { type: "error", message: re.message };
        } catch (re) {
          Y.value = {
            type: "error",
            message: re instanceof Error ? re.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function Ve() {
      try {
        await w(), O.value = "", I.value = !1, Y.value = null, F.value = null, ve.value = [], V.value = "", be.value = [], E.value = "", Le.value = [], _.value = "", me.value = null, n("toast", "API key cleared", "info");
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
          const Ee = await C();
          ve.value = Ee.data_centers;
        } else
          ve.value = Array.from(j.values());
        if (be.value.length > 0) {
          const Ee = be.value[0];
          E.value = Ee.id, Ee.data_center_id && (V.value = Ee.data_center_id, await Ct(Ee.data_center_id));
        } else ve.value.length > 0 && (V.value = ve.value[0].id);
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
        Ee ? _.value = Ee.id : _.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        Ue.value = !1;
      }
    }
    ut(V, async (re) => {
      if (!re || Ce.value) return;
      const j = be.value.find((Ee) => Ee.id === E.value);
      j && j.data_center_id !== re && (E.value = ""), await Ct(re);
    }), ut(E, async (re) => {
      if (!re) {
        Le.value = [], _.value = "";
        return;
      }
      if (Ce.value) return;
      const j = be.value.find((Ee) => Ee.id === re);
      j && j.data_center_id !== V.value ? V.value = j.data_center_id : j && await Ct(j.data_center_id);
    });
    async function rt() {
      ge.value = !0;
      try {
        me.value = await l();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        ge.value = !1;
      }
    }
    async function Nt() {
      if (!(!_.value || !E.value)) {
        tt.value = !0, ce.value = null;
        try {
          const re = await b();
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
        const re = await b();
        st.value = re;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ht() {
      Me.value = !0;
      try {
        let re;
        if (H.value === "SPOT") {
          const Ee = Le.value.find((Ze) => Ze.id === _.value);
          Ee && (re = M.value === "SECURE" ? Ee.secureSpotPrice : Ee.communitySpotPrice);
        }
        const j = await p({
          gpu_type_id: _.value,
          pod_name: se.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: M.value,
          pricing_type: H.value,
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
        re.has_key && re.key_preview && (O.value = `****${re.key_preview}`, re.valid ? (I.value = !0, F.value = re.credit_balance ?? null, Y.value = { type: "success", message: "Connected to RunPod" }, await Q()) : re.error && (Y.value = { type: "error", message: re.error }));
      } catch {
      }
    }), Cs(() => {
      Vt();
    }), (re, j) => {
      var Ee, Ze, gt, Pt, Mt, xt;
      return s(), o(B, null, [
        e("div", Pw, [
          $(Fe, { title: "RUNPOD API KEY" }, {
            default: i(() => [
              e("div", Mw, [
                e("div", Dw, [
                  e("div", Lw, [
                    Pe(e("input", {
                      "onUpdate:modelValue": j[0] || (j[0] = (we) => O.value = we),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, zw), [
                      [xs, O.value]
                    ]),
                    e("button", {
                      class: "toggle-visibility-btn",
                      onClick: j[1] || (j[1] = (we) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, a(P.value ? "👁" : "👁‍🗨"), 9, Uw)
                  ]),
                  I.value ? r("", !0) : (s(), T(X, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !O.value || S.value,
                    onClick: xe
                  }, {
                    default: i(() => [...j[16] || (j[16] = [
                      h(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (s(), T(X, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Ve
                  }, {
                    default: i(() => [...j[17] || (j[17] = [
                      h(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                Y.value ? (s(), o("div", {
                  key: 0,
                  class: fe(["connection-status", Y.value.type])
                }, [
                  e("span", Nw, a(Y.value.type === "success" ? "✓" : "✕"), 1),
                  e("span", Ow, a(Y.value.message), 1),
                  F.value !== null ? (s(), o("span", Aw, " $" + a(F.value.toFixed(2)) + " credit ", 1)) : r("", !0)
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
          I.value ? (s(), T(Fe, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: i(() => [
              e("div", Fw, [
                e("div", Bw, [
                  j[19] || (j[19] = e("label", { class: "config-label" }, "Region", -1)),
                  Pe(e("select", {
                    "onUpdate:modelValue": j[2] || (j[2] = (we) => V.value = we),
                    class: "config-select",
                    disabled: ae.value
                  }, [
                    ae.value ? (s(), o("option", Ww, "Loading...")) : V.value ? r("", !0) : (s(), o("option", Gw, "Select a region")),
                    (s(!0), o(B, null, ie(ve.value, (we) => (s(), o("option", {
                      key: we.id,
                      value: we.id,
                      disabled: !we.available
                    }, a(we.id) + " (" + a(we.name) + ")" + a(we.available ? "" : " [Unavailable]"), 9, jw))), 128))
                  ], 8, Vw), [
                    [Dt, V.value]
                  ])
                ]),
                e("div", Kw, [
                  j[24] || (j[24] = e("label", { class: "config-label" }, "Network Volume", -1)),
                  Ce.value ? (s(), o("div", Hw, "Loading volumes...")) : Qe.value.length === 0 ? (s(), o(B, { key: 1 }, [
                    e("div", qw, [
                      j[20] || (j[20] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      e("span", Yw, "No volumes in " + a(V.value || "this region"), 1)
                    ]),
                    j[21] || (j[21] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    j[22] || (j[22] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (s(), o(B, { key: 2 }, [
                    Pe(e("select", {
                      "onUpdate:modelValue": j[3] || (j[3] = (we) => E.value = we),
                      class: "config-select"
                    }, [
                      (s(!0), o(B, null, ie(Qe.value, (we) => (s(), o("option", {
                        key: we.id,
                        value: we.id
                      }, a(we.name) + " (" + a(we.size_gb) + "GB) ", 9, Jw))), 128))
                    ], 512), [
                      [Dt, E.value]
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
                    "onUpdate:modelValue": j[4] || (j[4] = (we) => _.value = we),
                    class: "config-select",
                    disabled: Ue.value || !E.value
                  }, [
                    E.value ? Ue.value ? (s(), o("option", ek, "Loading GPUs...")) : mt.value.length === 0 ? (s(), o("option", tk, "No GPUs available in this region")) : r("", !0) : (s(), o("option", Zw, "Select a volume first")),
                    (s(!0), o(B, null, ie(mt.value, (we) => (s(), o("option", {
                      key: we.id,
                      value: we.id
                    }, a(we.displayName) + " (" + a(we.memoryInGb) + "GB) - $" + a(M.value === "SECURE" ? (we.securePrice ?? 0).toFixed(2) : (we.communityPrice ?? 0).toFixed(2)) + "/hr " + a(we.stockStatus ? `[${we.stockStatus}]` : ""), 9, sk))), 128))
                  ], 8, Qw), [
                    [Dt, _.value]
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
                        "onUpdate:modelValue": j[7] || (j[7] = (we) => H.value = we),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Rt, H.value]
                      ]),
                      e("span", mk, "On-Demand ($" + a(Ye("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    e("label", vk, [
                      Pe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[8] || (j[8] = (we) => H.value = we),
                        value: "SPOT"
                      }, null, 512), [
                        [Rt, H.value]
                      ]),
                      e("span", fk, "Spot ($" + a(Ye("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", pk, [
                  j[28] || (j[28] = e("label", { class: "config-label" }, "Pod Name", -1)),
                  Pe(e("input", {
                    "onUpdate:modelValue": j[9] || (j[9] = (we) => se.value = we),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [kt, se.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : r("", !0),
          I.value ? (s(), T(Fe, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: i(() => [
              J.value ? (s(), o("div", gk, "Loading remotes...")) : K.value.length === 0 ? (s(), o("div", hk, [
                j[30] || (j[30] = e("div", { class: "empty-message" }, [
                  e("span", { class: "empty-icon" }, "🌐"),
                  e("span", { class: "empty-text" }, "No Git remotes configured"),
                  e("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                $(X, {
                  variant: "primary",
                  size: "xs",
                  onClick: j[10] || (j[10] = (we) => n("navigate", "remotes"))
                }, {
                  default: i(() => [...j[29] || (j[29] = [
                    h(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (s(), o(B, { key: 2 }, [
                e("div", yk, [
                  (s(!0), o(B, null, ie(K.value, (we) => (s(), T(ko, {
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
                  $(X, {
                    variant: "primary",
                    size: "xs",
                    loading: D.value === U.value,
                    onClick: j[11] || (j[11] = (we) => U.value && G(U.value))
                  }, {
                    default: i(() => [
                      h(" Push to " + a(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : r("", !0),
                e("div", bk, [
                  $(X, {
                    variant: "link",
                    size: "xs",
                    onClick: j[12] || (j[12] = (we) => n("navigate", "remotes"))
                  }, {
                    default: i(() => [...j[32] || (j[32] = [
                      h(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : r("", !0),
          I.value ? (s(), T(Fe, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: i(() => [
              e("div", _k, [
                ge.value ? (s(), o("div", $k, "Loading environment summary...")) : me.value ? (s(), o(B, { key: 1 }, [
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
          I.value && ue.value ? (s(), T(Fe, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: i(() => {
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
                        e("span", null, a(((we = Le.value.find((q) => q.id === _.value)) == null ? void 0 : we.displayName) || "GPU") + " (" + a(((St = Le.value.find((q) => q.id === _.value)) == null ? void 0 : St.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      e("div", Xk, [
                        e("span", null, "Region: " + a(V.value), 1)
                      ]),
                      qe.value ? (s(), o("div", Qk, [
                        e("span", null, "Volume: " + a(qe.value.name), 1)
                      ])) : r("", !0),
                      H.value === "SPOT" ? (s(), o("div", Zk, [...j[44] || (j[44] = [
                        e("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : r("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : r("", !0),
          I.value ? (s(), o("div", eb, [
            $(X, {
              variant: "primary",
              size: "md",
              loading: tt.value || Me.value,
              disabled: !it.value,
              onClick: Nt
            }, {
              default: i(() => [
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
          ce.value ? (s(), T(Fe, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: i(() => [
              $(ot, {
                status: ce.value.status === "success" ? "synced" : "broken"
              }, Kt({
                icon: i(() => [
                  h(a(ce.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  h(a(ce.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: i(() => [
                  h(a(ce.value.message), 1)
                ]),
                actions: i(() => [
                  $(X, {
                    variant: "ghost",
                    size: "xs",
                    onClick: j[13] || (j[13] = (we) => ce.value = null)
                  }, {
                    default: i(() => [...j[47] || (j[47] = [
                      h(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ce.value.pod_id ? {
                  name: "details",
                  fn: i(() => [
                    $(Ge, {
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
        Z.value ? (s(), T(He, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ee = pe.value) == null ? void 0 : Ee.phase) === "READY" || ((Ze = pe.value) == null ? void 0 : Ze.phase) === "ERROR" || ((gt = pe.value) == null ? void 0 : gt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: qt
        }, Kt({
          body: i(() => {
            var we, St, q, A, he, Ie, Oe, Ke, lt, It, Wt, Gt;
            return [
              e("div", tb, [
                e("div", sb, [
                  e("div", {
                    class: fe(["phase-icon", (St = (we = pe.value) == null ? void 0 : we.phase) == null ? void 0 : St.toLowerCase()])
                  }, [
                    ((q = pe.value) == null ? void 0 : q.phase) === "READY" ? (s(), o("span", ob, "✓")) : ((A = pe.value) == null ? void 0 : A.phase) === "ERROR" ? (s(), o("span", nb, "✕")) : ((he = pe.value) == null ? void 0 : he.phase) === "STOPPED" ? (s(), o("span", ab, "○")) : (s(), o("span", lb, "⟳"))
                  ], 2),
                  e("div", ib, [
                    e("div", rb, a(ss((Ie = pe.value) == null ? void 0 : Ie.phase)), 1),
                    e("div", db, a(((Oe = pe.value) == null ? void 0 : Oe.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                $(Ss, {
                  progress: os((Ke = pe.value) == null ? void 0 : Ke.phase),
                  variant: ((lt = pe.value) == null ? void 0 : lt.phase) === "ERROR" ? "error" : ((It = pe.value) == null ? void 0 : It.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Wt = pe.value) == null ? void 0 : Wt.phase) === "READY" ? (s(), o("div", cb, [
                  $(X, {
                    variant: "primary",
                    size: "md",
                    onClick: ts
                  }, {
                    default: i(() => [...j[48] || (j[48] = [
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
            fn: i(() => [
              $(X, {
                variant: "ghost",
                size: "xs",
                onClick: qt
              }, {
                default: i(() => [...j[49] || (j[49] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        Te.value && st.value ? (s(), T(go, {
          key: 1,
          issues: st.value.blocking_issues,
          onClose: j[14] || (j[14] = (we) => Te.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        Xe.value && st.value ? (s(), T(ho, {
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
}, Rb = /* @__PURE__ */ oe({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "manage", "remove"],
  setup(t) {
    return (u, n) => (s(), o("div", {
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
          t.worker.status === "online" ? (s(), T(X, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: t.isActionLoading,
            onClick: n[0] || (n[0] = (l) => u.$emit("deploy", t.worker))
          }, {
            default: i(() => [...n[3] || (n[3] = [
              h(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : r("", !0),
          t.worker.status === "online" ? (s(), T(X, {
            key: 1,
            variant: "ghost",
            size: "xs",
            disabled: t.isActionLoading,
            onClick: n[1] || (n[1] = (l) => u.$emit("manage", t.worker))
          }, {
            default: i(() => [...n[4] || (n[4] = [
              h(" Manage ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : r("", !0),
          $(X, {
            variant: "ghost",
            size: "xs",
            loading: t.isActionLoading,
            onClick: n[2] || (n[2] = (l) => u.$emit("remove", t.worker.name))
          }, {
            default: i(() => [...n[5] || (n[5] = [
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
}, jb = { class: "modal-actions" }, Kb = /* @__PURE__ */ oe({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(t, { emit: u }) {
    const n = u, { testWorkerConnection: l } = Ae(), c = vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), g = y(!1), m = y(!1), p = y(!1), d = y(null), v = z(() => c.host && c.port && c.apiKey), w = z(() => c.name && c.host && c.port && c.apiKey);
    async function b() {
      if (v.value) {
        m.value = !0, d.value = null;
        try {
          const f = await l({
            host: c.host,
            port: c.port,
            api_key: c.apiKey
          });
          f.status === "success" ? (d.value = {
            type: "success",
            message: f.message,
            gpu_info: f.gpu_info
          }, !c.name && f.gpu_info && (c.name = `worker-${c.host.split(".").pop()}`)) : d.value = {
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
    function k() {
      w.value && (p.value = !0, n("add", {
        name: c.name,
        host: c.host,
        port: c.port,
        api_key: c.apiKey
      }));
    }
    return (f, x) => (s(), T(He, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: x[5] || (x[5] = (R) => f.$emit("close"))
    }, {
      body: i(() => [
        e("div", Mb, [
          e("div", Db, [
            e("div", Lb, [
              x[6] || (x[6] = e("label", { class: "form-label" }, "Worker Name", -1)),
              Pe(e("input", {
                "onUpdate:modelValue": x[0] || (x[0] = (R) => c.name = R),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [kt, c.name]
              ])
            ]),
            e("div", zb, [
              e("div", Ub, [
                x[7] || (x[7] = e("label", { class: "form-label" }, "Host", -1)),
                Pe(e("input", {
                  "onUpdate:modelValue": x[1] || (x[1] = (R) => c.host = R),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [kt, c.host]
                ])
              ]),
              e("div", Nb, [
                x[8] || (x[8] = e("label", { class: "form-label" }, "Port", -1)),
                Pe(e("input", {
                  "onUpdate:modelValue": x[2] || (x[2] = (R) => c.port = R),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    kt,
                    c.port,
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
                  "onUpdate:modelValue": x[3] || (x[3] = (R) => c.apiKey = R),
                  type: g.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, Fb), [
                  [xs, c.apiKey]
                ]),
                e("button", {
                  class: "toggle-visibility",
                  onClick: x[4] || (x[4] = (R) => g.value = !g.value),
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
      footer: i(() => [
        e("div", jb, [
          $(X, {
            variant: "ghost",
            size: "sm",
            loading: m.value,
            disabled: !v.value || m.value,
            onClick: b
          }, {
            default: i(() => [...x[11] || (x[11] = [
              h(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          $(X, {
            variant: "primary",
            size: "sm",
            loading: p.value,
            disabled: !w.value || p.value,
            onClick: k
          }, {
            default: i(() => [...x[12] || (x[12] = [
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
}, s_ = { class: "selected-worker" }, o_ = { class: "selected-name" }, n_ = { class: "selected-address" }, a_ = { class: "form-row" }, l_ = { class: "api-key-wrapper" }, i_ = ["type"], r_ = { class: "result-icon" }, d_ = { class: "result-message" }, c_ = { class: "modal-actions" }, u_ = /* @__PURE__ */ oe({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(t, { emit: u }) {
    const n = u, { testWorkerConnection: l } = Ae(), c = y(null), g = y(""), m = y(!1), p = y(!1), d = y(null), v = y(null);
    async function w(k) {
      var f;
      c.value = k, g.value = "", v.value = null, await As(), (f = d.value) == null || f.focus();
    }
    async function b() {
      if (!(!c.value || !g.value)) {
        p.value = !0, v.value = null;
        try {
          const k = await l({
            host: c.value.host,
            port: c.value.port,
            api_key: g.value
          });
          k.status === "success" ? n("add", {
            name: c.value.name,
            host: c.value.host,
            port: c.value.port,
            api_key: g.value
          }) : v.value = {
            type: "error",
            message: k.message
          };
        } catch (k) {
          v.value = {
            type: "error",
            message: k instanceof Error ? k.message : "Connection failed"
          };
        } finally {
          p.value = !1;
        }
      }
    }
    return (k, f) => (s(), T(He, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: f[3] || (f[3] = (x) => k.$emit("close"))
    }, {
      body: i(() => [
        e("div", qb, [
          t.workers.length > 0 ? (s(), o("div", Yb, [
            (s(!0), o(B, null, ie(t.workers, (x) => (s(), o("div", {
              key: `${x.host}:${x.port}`,
              class: "worker-item"
            }, [
              e("div", Jb, [
                e("span", Xb, a(x.name), 1),
                e("span", Qb, a(x.host) + ":" + a(x.port), 1),
                x.gpu_info ? (s(), o("span", Zb, a(x.gpu_info), 1)) : r("", !0)
              ]),
              $(X, {
                variant: "primary",
                size: "xs",
                onClick: (R) => w(x)
              }, {
                default: i(() => [...f[4] || (f[4] = [
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
          c.value ? (s(), o("div", t_, [
            e("div", s_, [
              f[6] || (f[6] = e("span", { class: "selected-label" }, "Adding:", -1)),
              e("span", o_, a(c.value.name), 1),
              e("span", n_, "(" + a(c.value.host) + ":" + a(c.value.port) + ")", 1)
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
                  onKeyup: wt(b, ["enter"])
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
      footer: i(() => [
        e("div", c_, [
          c.value ? (s(), T(X, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: f[2] || (f[2] = (x) => {
              c.value = null, g.value = "", v.value = null;
            })
          }, {
            default: i(() => [...f[9] || (f[9] = [
              h(" Back ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          c.value ? (s(), T(X, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: p.value,
            disabled: !g.value || p.value,
            onClick: b
          }, {
            default: i(() => [...f[10] || (f[10] = [
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
}, I_ = { class: "warning-content" }, E_ = { class: "modal-actions" }, T_ = /* @__PURE__ */ oe({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(t, { emit: u }) {
    const n = t, l = u, {
      getRemotes: c,
      getRemoteSyncStatus: g,
      fetchRemote: m,
      pushToRemote: p,
      getDeploySummary: d,
      deployToWorker: v
    } = Ae(), w = y([]), b = y({}), k = y(!1), f = y(null), x = y(null), R = y(null), C = y(n.worker.mode || "native"), P = y(""), O = y(null), I = y(!1), S = z(() => f.value && b.value[f.value] || null), Y = z(() => {
      if (!f.value) return null;
      const K = w.value.find((te) => te.name === f.value);
      return (K == null ? void 0 : K.fetch_url) || null;
    }), F = z(() => Y.value && !I.value);
    async function V() {
      k.value = !0;
      try {
        const K = await c();
        w.value = K.remotes, await Promise.all(
          K.remotes.map(async (J) => {
            const U = await g(J.name);
            U && (b.value[J.name] = U);
          })
        );
        const te = K.remotes.find((J) => J.is_default);
        te ? f.value = te.name : K.remotes.length > 0 && (f.value = K.remotes[0].name);
      } catch {
        l("toast", "Failed to load remotes", "error");
      } finally {
        k.value = !1;
      }
    }
    async function E() {
      try {
        O.value = await d();
      } catch {
      }
    }
    async function _(K) {
      x.value = K;
      try {
        await m(K);
        const te = await g(K);
        te && (b.value[K] = te), l("toast", `Fetched from ${K}`, "success");
      } catch {
        l("toast", "Fetch failed", "error");
      } finally {
        x.value = null;
      }
    }
    async function M(K) {
      R.value = K;
      try {
        await p(K, { force: !1 });
        const te = await g(K);
        te && (b.value[K] = te), l("toast", `Pushed to ${K}`, "success");
      } catch {
        l("toast", "Push failed", "error");
      } finally {
        R.value = null;
      }
    }
    function H(K) {
      f.value = K;
    }
    async function se() {
      if (Y.value) {
        I.value = !0;
        try {
          const K = await v(n.worker.name, {
            import_source: Y.value,
            mode: C.value,
            name: P.value || void 0
          });
          K.id ? (l("toast", `Deployment started: ${K.name || K.id}`, "success"), l("deployed")) : K.status === "error" ? l("toast", K.message || "Deployment failed", "error") : l("toast", "Unexpected response from worker", "error");
        } catch (K) {
          l("toast", K instanceof Error ? K.message : "Deployment failed", "error");
        } finally {
          I.value = !1;
        }
      }
    }
    return Ne(() => {
      V(), E();
    }), (K, te) => (s(), T(He, {
      title: `DEPLOY TO: ${t.worker.name}`,
      size: "md",
      onClose: te[5] || (te[5] = (J) => K.$emit("close"))
    }, {
      body: i(() => [
        e("div", v_, [
          e("div", f_, [
            te[7] || (te[7] = e("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            k.value ? (s(), o("div", p_, "Loading remotes...")) : w.value.length === 0 ? (s(), o("div", g_, [...te[6] || (te[6] = [
              e("span", { class: "empty-icon" }, "🌐", -1),
              e("span", { class: "empty-text" }, "No Git remotes configured", -1),
              e("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (s(), o("div", h_, [
              (s(!0), o(B, null, ie(w.value, (J) => (s(), T(ko, {
                key: J.name,
                remote: J,
                "sync-status": b.value[J.name],
                "is-selected": f.value === J.name,
                "is-fetching": x.value === J.name,
                "is-pushing": R.value === J.name,
                onFetch: _,
                onPush: M,
                onSelect: H
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          e("div", y_, [
            te[10] || (te[10] = e("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            e("div", w_, [
              e("label", k_, [
                Pe(e("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[0] || (te[0] = (J) => C.value = J),
                  value: "docker",
                  disabled: !t.worker.mode || t.worker.mode === "native"
                }, null, 8, b_), [
                  [Rt, C.value]
                ]),
                te[8] || (te[8] = e("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              e("label", __, [
                Pe(e("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[1] || (te[1] = (J) => C.value = J),
                  value: "native"
                }, null, 512), [
                  [Rt, C.value]
                ]),
                te[9] || (te[9] = e("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          e("div", $_, [
            te[11] || (te[11] = e("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Pe(e("input", {
              "onUpdate:modelValue": te[2] || (te[2] = (J) => P.value = J),
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
          S.value && S.value.ahead > 0 ? (s(), o("div", S_, [
            te[14] || (te[14] = e("span", { class: "warning-icon" }, "⚠", -1)),
            e("div", I_, [
              e("strong", null, a(S.value.ahead) + " unpushed commit" + a(S.value.ahead !== 1 ? "s" : ""), 1),
              e("p", null, "Push to '" + a(f.value) + "' before deploying to include your latest changes.", 1)
            ]),
            $(X, {
              variant: "primary",
              size: "xs",
              loading: R.value === f.value,
              onClick: te[3] || (te[3] = (J) => f.value && M(f.value))
            }, {
              default: i(() => [...te[13] || (te[13] = [
                h(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", E_, [
          $(X, {
            variant: "ghost",
            size: "sm",
            onClick: te[4] || (te[4] = (J) => K.$emit("close"))
          }, {
            default: i(() => [...te[15] || (te[15] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(X, {
            variant: "primary",
            size: "sm",
            loading: I.value,
            disabled: !F.value || I.value,
            onClick: se
          }, {
            default: i(() => [...te[16] || (te[16] = [
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
}, o2 = { class: "port-info" }, n2 = { class: "modal-actions" }, a2 = /* @__PURE__ */ oe({
  __name: "WorkerDetailsModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "refresh"],
  setup(t, { emit: u }) {
    const n = t, l = u, {
      getWorkerSystemInfo: c,
      getWorkerInstances: g,
      startWorkerInstance: m,
      stopWorkerInstance: p,
      terminateWorkerInstance: d,
      removeCustomWorker: v
    } = Ae(), w = y(null), b = y([]), k = y(null), f = y(!1), x = y(!1), R = y(null), C = y(!1);
    function P(E) {
      switch (E) {
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
          w.value = await c(n.worker.name);
        } catch {
          l("toast", "Failed to load system info", "error");
        } finally {
          f.value = !1;
        }
      }
    }
    async function I() {
      if (n.worker.status === "online") {
        x.value = !0;
        try {
          const E = await g(n.worker.name);
          b.value = E.instances, k.value = {
            port_range: E.port_range,
            ports_available: E.ports_available
          };
        } catch {
          l("toast", "Failed to load instances", "error");
        } finally {
          x.value = !1;
        }
      }
    }
    async function S(E) {
      R.value = E;
      try {
        await m(n.worker.name, E), l("toast", "Instance starting...", "success"), await I();
      } catch (_) {
        l("toast", _ instanceof Error ? _.message : "Failed to start instance", "error");
      } finally {
        R.value = null;
      }
    }
    async function Y(E) {
      R.value = E;
      try {
        await p(n.worker.name, E), l("toast", "Instance stopped", "success"), await I();
      } catch (_) {
        l("toast", _ instanceof Error ? _.message : "Failed to stop instance", "error");
      } finally {
        R.value = null;
      }
    }
    async function F(E) {
      R.value = E;
      try {
        await d(n.worker.name, E), l("toast", "Instance terminated", "success"), await I();
      } catch (_) {
        l("toast", _ instanceof Error ? _.message : "Failed to terminate instance", "error");
      } finally {
        R.value = null;
      }
    }
    async function V() {
      C.value = !0;
      try {
        await v(n.worker.name), l("toast", `Worker '${n.worker.name}' removed`, "success"), l("refresh"), l("close");
      } catch (E) {
        l("toast", E instanceof Error ? E.message : "Failed to remove worker", "error");
      } finally {
        C.value = !1;
      }
    }
    return Ne(() => {
      O(), I();
    }), (E, _) => {
      var M;
      return s(), T(He, {
        title: `WORKER: ${((M = t.worker) == null ? void 0 : M.name) ?? "Loading..."}`,
        size: "md",
        onClose: _[1] || (_[1] = (H) => E.$emit("close"))
      }, {
        body: i(() => [
          t.worker ? (s(), o("div", P_, [
            e("div", M_, [
              _[4] || (_[4] = e("div", { class: "section-label" }, "CONNECTION", -1)),
              e("div", D_, [
                e("div", L_, [
                  _[2] || (_[2] = e("span", { class: "detail-label" }, "Host:", -1)),
                  e("span", z_, a(t.worker.host) + ":" + a(t.worker.port), 1)
                ]),
                e("div", U_, [
                  _[3] || (_[3] = e("span", { class: "detail-label" }, "Status:", -1)),
                  e("span", {
                    class: fe(["detail-value", "status", t.worker.status])
                  }, a(t.worker.status === "online" ? "● Online" : "○ Offline"), 3)
                ])
              ])
            ]),
            w.value ? (s(), o("div", N_, [
              _[8] || (_[8] = e("div", { class: "section-label" }, "SYSTEM INFO", -1)),
              e("div", O_, [
                e("div", A_, [
                  _[5] || (_[5] = e("span", { class: "detail-label" }, "GPU:", -1)),
                  e("span", F_, a(w.value.gpu.name) + " (" + a(Math.round(w.value.gpu.memory_total_mb / 1024)) + "GB)", 1)
                ]),
                e("div", B_, [
                  _[6] || (_[6] = e("span", { class: "detail-label" }, "Mode:", -1)),
                  e("span", V_, a(w.value.default_mode), 1)
                ]),
                e("div", W_, [
                  _[7] || (_[7] = e("span", { class: "detail-label" }, "Workspace:", -1)),
                  e("span", G_, a(w.value.workspace_path), 1)
                ])
              ])
            ])) : r("", !0),
            e("div", j_, [
              e("div", K_, [
                e("div", H_, "INSTANCES (" + a(b.value.length) + ")", 1),
                $(X, {
                  variant: "ghost",
                  size: "xs",
                  loading: x.value,
                  onClick: I
                }, {
                  default: i(() => [..._[9] || (_[9] = [
                    h(" Refresh ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ]),
              x.value && b.value.length === 0 ? (s(), o("div", q_, " Loading instances... ")) : b.value.length === 0 ? (s(), o("div", Y_, " No instances on this worker ")) : (s(), o("div", J_, [
                (s(!0), o(B, null, ie(b.value, (H) => (s(), o("div", {
                  key: H.id,
                  class: "instance-item"
                }, [
                  e("div", X_, [
                    e("span", {
                      class: fe(["instance-status", H.status])
                    }, a(P(H.status)), 3),
                    e("span", Q_, a(H.name), 1),
                    e("span", Z_, ":" + a(H.assigned_port), 1),
                    e("span", e2, a(H.status), 1)
                  ]),
                  e("div", t2, [
                    H.status === "running" ? (s(), T(X, {
                      key: 0,
                      variant: "ghost",
                      size: "xs",
                      loading: R.value === H.id,
                      onClick: (se) => Y(H.id)
                    }, {
                      default: i(() => [..._[10] || (_[10] = [
                        h(" Stop ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "onClick"])) : r("", !0),
                    H.status === "stopped" ? (s(), T(X, {
                      key: 1,
                      variant: "ghost",
                      size: "xs",
                      loading: R.value === H.id,
                      onClick: (se) => S(H.id)
                    }, {
                      default: i(() => [..._[11] || (_[11] = [
                        h(" Start ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "onClick"])) : r("", !0),
                    $(X, {
                      variant: "ghost",
                      size: "xs",
                      loading: R.value === H.id,
                      onClick: (se) => F(H.id)
                    }, {
                      default: i(() => [..._[12] || (_[12] = [
                        h(" Term ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ])
                ]))), 128))
              ]))
            ]),
            k.value ? (s(), o("div", s2, [
              e("div", o2, " PORT RANGE: " + a(k.value.port_range.start) + "-" + a(k.value.port_range.end) + " (" + a(k.value.ports_available) + " available) ", 1)
            ])) : r("", !0)
          ])) : r("", !0)
        ]),
        footer: i(() => [
          e("div", n2, [
            $(X, {
              variant: "ghost",
              size: "sm",
              onClick: _[0] || (_[0] = (H) => E.$emit("close"))
            }, {
              default: i(() => [..._[13] || (_[13] = [
                h(" Disconnect ", -1)
              ])]),
              _: 1
            }),
            $(X, {
              variant: "error",
              size: "sm",
              loading: C.value,
              onClick: V
            }, {
              default: i(() => [..._[14] || (_[14] = [
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
}, f2 = { class: "scan-icon" }, p2 = { class: "scan-message" }, g2 = /* @__PURE__ */ oe({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(t, { emit: u }) {
    const n = u, {
      getCustomWorkers: l,
      addCustomWorker: c,
      removeCustomWorker: g,
      scanForWorkers: m
    } = Ae(), p = y([]), d = y([]), v = y(!1), w = y(!1), b = y(null), k = y(!1), f = y(!1), x = y(null), R = y(null), C = y(null);
    async function P() {
      v.value = !0;
      try {
        const _ = await l();
        p.value = _.workers;
      } catch (_) {
        n("toast", _ instanceof Error ? _.message : "Failed to load workers", "error");
      } finally {
        v.value = !1;
      }
    }
    async function O() {
      w.value = !0, C.value = null;
      try {
        const _ = await m(), M = _.discovered.filter(
          (H) => !p.value.some((se) => se.host === H.host && se.port === H.port)
        );
        d.value = M, M.length > 0 ? f.value = !0 : _.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (_) {
        n("toast", _ instanceof Error ? _.message : "Network scan failed", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I(_) {
      try {
        await c(_), n("toast", `Worker '${_.name}' added`, "success"), k.value = !1, await P();
      } catch (M) {
        n("toast", M instanceof Error ? M.message : "Failed to add worker", "error");
      }
    }
    async function S(_) {
      try {
        await c(_), n("toast", `Worker '${_.name}' added`, "success"), f.value = !1, await P();
      } catch (M) {
        n("toast", M instanceof Error ? M.message : "Failed to add worker", "error");
      }
    }
    async function Y(_) {
      b.value = _;
      try {
        await g(_), n("toast", `Worker '${_}' removed`, "success"), await P();
      } catch (M) {
        n("toast", M instanceof Error ? M.message : "Failed to remove worker", "error");
      } finally {
        b.value = null;
      }
    }
    function F(_) {
      x.value = _;
    }
    function V(_) {
      R.value = _;
    }
    function E() {
      x.value = null, n("deployed");
    }
    return Ne(() => {
      P();
    }), (_, M) => (s(), o("div", i2, [
      e("div", r2, [
        M[10] || (M[10] = e("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        e("div", d2, [
          $(X, {
            variant: "ghost",
            size: "xs",
            loading: w.value,
            disabled: w.value,
            onClick: O
          }, {
            default: i(() => [...M[8] || (M[8] = [
              h(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          $(X, {
            variant: "secondary",
            size: "xs",
            onClick: M[0] || (M[0] = (H) => k.value = !0)
          }, {
            default: i(() => [...M[9] || (M[9] = [
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
          (s(!0), o(B, null, ie(p.value, (H) => (s(), T(Pb, {
            key: H.name,
            worker: H,
            "is-action-loading": b.value === H.name,
            onDeploy: F,
            onManage: V,
            onRemove: Y
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (s(), o("div", {
        key: 0,
        class: fe(["scan-result", C.value.type])
      }, [
        e("span", f2, a(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        e("span", p2, a(C.value.message), 1),
        e("button", {
          class: "dismiss-btn",
          onClick: M[1] || (M[1] = (H) => C.value = null)
        }, "×")
      ], 2)) : r("", !0),
      f.value ? (s(), T(m_, {
        key: 1,
        workers: d.value,
        onClose: M[2] || (M[2] = (H) => f.value = !1),
        onAdd: S
      }, null, 8, ["workers"])) : r("", !0),
      k.value ? (s(), T(Hb, {
        key: 2,
        onClose: M[3] || (M[3] = (H) => k.value = !1),
        onAdd: I
      })) : r("", !0),
      x.value ? (s(), T(R_, {
        key: 3,
        worker: x.value,
        onClose: M[4] || (M[4] = (H) => x.value = null),
        onToast: M[5] || (M[5] = (H, se) => n("toast", H, se)),
        onDeployed: E
      }, null, 8, ["worker"])) : r("", !0),
      R.value ? (s(), T(l2, {
        key: 4,
        worker: R.value,
        onClose: M[6] || (M[6] = (H) => R.value = null),
        onToast: M[7] || (M[7] = (H, se) => n("toast", H, se)),
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
  function u(c) {
    try {
      localStorage.setItem(Ms, c);
    } catch (g) {
      console.error("[useGitAuth] Failed to save token:", g);
    }
  }
  function n() {
    try {
      localStorage.removeItem(Ms);
    } catch (c) {
      console.error("[useGitAuth] Failed to clear token:", c);
    }
  }
  function l() {
    const c = t();
    return c !== null && c.length > 0;
  }
  return {
    getToken: t,
    setToken: u,
    clearToken: n,
    hasToken: l,
    isRemoteSsh: bo,
    isRemoteHttps: y2
  };
}
const k2 = { class: "settings-content" }, b2 = { class: "settings-section" }, _2 = {
  key: 0,
  class: "ssh-warning"
}, $2 = { class: "form-row" }, C2 = { class: "token-wrapper" }, x2 = ["type"], S2 = { class: "result-icon" }, I2 = { class: "result-message" }, E2 = { class: "token-actions" }, T2 = /* @__PURE__ */ oe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(t, { emit: u }) {
    const n = u, { getToken: l, setToken: c, clearToken: g, hasToken: m } = w2(), { getRemotes: p, testGitAuth: d } = Ae(), v = y(""), w = y(!1), b = y(!1), k = y(null), f = y(!1), x = z(() => m());
    Ne(async () => {
      var I;
      const O = l();
      O && (v.value = O);
      try {
        const Y = (I = (await p()).remotes) == null ? void 0 : I.find((F) => F.name === "origin");
        Y && bo(Y.url) && (f.value = !0);
      } catch {
      }
    });
    async function R() {
      if (v.value) {
        b.value = !0, k.value = null;
        try {
          const O = await d(v.value);
          k.value = {
            type: O.status === "success" ? "success" : "error",
            message: O.message
          };
        } catch (O) {
          k.value = {
            type: "error",
            message: O instanceof Error ? O.message : "Connection test failed"
          };
        } finally {
          b.value = !1;
        }
      }
    }
    function C() {
      v.value && (c(v.value), n("saved"), n("close"));
    }
    function P() {
      g(), v.value = "", k.value = null;
    }
    return (O, I) => (s(), T(He, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (S) => O.$emit("close"))
    }, {
      body: i(() => [
        e("div", k2, [
          e("div", b2, [
            I[8] || (I[8] = e("div", { class: "section-header" }, [
              e("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = e("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            f.value ? (s(), o("div", _2, [...I[3] || (I[3] = [
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
              I[4] || (I[4] = e("label", { class: "form-label" }, "Personal Access Token", -1)),
              e("div", C2, [
                Pe(e("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (S) => v.value = S),
                  type: w.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, x2), [
                  [xs, v.value]
                ]),
                e("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: I[1] || (I[1] = (S) => w.value = !w.value)
                }, a(w.value ? "Hide" : "Show"), 1)
              ]),
              I[5] || (I[5] = e("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            k.value ? (s(), o("div", {
              key: 1,
              class: fe(["test-result", k.value.type])
            }, [
              e("span", S2, a(k.value.type === "success" ? "✓" : "✕"), 1),
              e("span", I2, a(k.value.message), 1)
            ], 2)) : r("", !0),
            e("div", E2, [
              $(X, {
                variant: "ghost",
                size: "sm",
                loading: b.value,
                disabled: !v.value || b.value,
                onClick: R
              }, {
                default: i(() => [...I[6] || (I[6] = [
                  h(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              x.value ? (s(), T(X, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: i(() => [...I[7] || (I[7] = [
                  h(" Clear ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ])
          ])
        ])
      ]),
      footer: i(() => [
        $(X, {
          variant: "primary",
          size: "sm",
          disabled: !v.value,
          onClick: C
        }, {
          default: i(() => [...I[10] || (I[10] = [
            h(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), R2 = /* @__PURE__ */ ne(T2, [["__scopeId", "data-v-b21588ad"]]), P2 = /* @__PURE__ */ oe({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(t, { emit: u }) {
    const n = u, {
      instances: l,
      isLoading: c,
      liveInstanceCount: g,
      refreshInstances: m,
      stopInstance: p,
      startInstance: d,
      terminateInstance: v,
      startPolling: w,
      stopPolling: b
    } = wo(), k = y(!1), f = y(!1), x = y("instances"), R = y(null), C = y(null), P = z(() => [
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
    async function O(E) {
      R.value = E;
      try {
        await p(E), n("toast", "Instance stopped", "success");
      } catch (_) {
        n("toast", _ instanceof Error ? _.message : "Failed to stop instance", "error");
      } finally {
        R.value = null;
      }
    }
    async function I(E) {
      R.value = E;
      try {
        await d(E), n("toast", "Instance starting...", "success");
      } catch (_) {
        n("toast", _ instanceof Error ? _.message : "Failed to start instance", "error");
      } finally {
        R.value = null;
      }
    }
    function S(E) {
      C.value = E;
    }
    async function Y() {
      const E = C.value;
      if (E) {
        C.value = null, R.value = E;
        try {
          await v(E), n("toast", "Instance terminated", "success");
        } catch (_) {
          n("toast", _ instanceof Error ? _.message : "Failed to terminate instance", "error");
        } finally {
          R.value = null;
        }
      }
    }
    const F = z(
      () => l.value.find((E) => E.id === C.value)
    );
    async function V() {
      await m(), x.value = "instances";
    }
    return Ne(() => {
      m(), w();
    }), Cs(() => {
      b();
    }), (E, _) => {
      var M;
      return s(), o(B, null, [
        $(nt, null, {
          header: i(() => [
            $(at, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: _[1] || (_[1] = (H) => k.value = !0)
            }, {
              actions: i(() => [
                $(X, {
                  variant: "ghost",
                  size: "xs",
                  onClick: _[0] || (_[0] = (H) => f.value = !0)
                }, {
                  default: i(() => [..._[10] || (_[10] = [
                    h(" Settings ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: i(() => [
            $(uo, {
              modelValue: x.value,
              "onUpdate:modelValue": _[2] || (_[2] = (H) => x.value = H),
              tabs: P.value
            }, null, 8, ["modelValue", "tabs"])
          ]),
          content: i(() => [
            x.value === "instances" ? (s(), T(hw, {
              key: 0,
              instances: Se(l),
              "is-loading": Se(c),
              "action-loading-id": R.value,
              onRefresh: Se(m),
              onStop: O,
              onStart: I,
              onTerminate: S
            }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : r("", !0),
            x.value === "runpod" ? (s(), T(fb, {
              key: 1,
              onToast: _[3] || (_[3] = (H, se) => n("toast", H, se)),
              onNavigate: _[4] || (_[4] = (H) => n("navigate", H)),
              onDeployed: V
            })) : r("", !0),
            x.value === "custom" ? (s(), T(h2, {
              key: 2,
              onToast: _[5] || (_[5] = (H, se) => n("toast", H, se)),
              onDeployed: V
            })) : r("", !0)
          ]),
          _: 1
        }),
        C.value ? (s(), T(Ws, {
          key: 0,
          title: "Terminate Instance",
          message: `Are you sure you want to terminate '${((M = F.value) == null ? void 0 : M.name) || C.value}'?`,
          warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
          "confirm-label": "Terminate",
          destructive: !0,
          onConfirm: Y,
          onCancel: _[6] || (_[6] = (H) => C.value = null)
        }, null, 8, ["message"])) : r("", !0),
        $($t, {
          show: k.value,
          title: "Deploy to Cloud",
          onClose: _[7] || (_[7] = (H) => k.value = !1)
        }, {
          content: i(() => [..._[11] || (_[11] = [
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
        f.value ? (s(), T(R2, {
          key: 1,
          onClose: _[8] || (_[8] = (H) => f.value = !1),
          onSaved: _[9] || (_[9] = (H) => n("toast", "GitHub token saved", "success"))
        })) : r("", !0)
      ], 64);
    };
  }
}), M2 = /* @__PURE__ */ ne(P2, [["__scopeId", "data-v-d1c641c8"]]), D2 = { class: "header-info" }, L2 = { class: "commit-hash" }, z2 = {
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
}, q2 = { class: "change-item" }, Y2 = /* @__PURE__ */ oe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Ae(), l = y(null), c = y(!0), g = z(() => {
      if (!l.value) return !1;
      const p = l.value.changes.workflows;
      return p.added.length > 0 || p.modified.length > 0 || p.deleted.length > 0;
    }), m = z(() => {
      if (!l.value) return !1;
      const p = l.value.changes.nodes;
      return p.added.length > 0 || p.removed.length > 0;
    });
    return Ne(async () => {
      try {
        l.value = await n(u.commit.hash);
      } finally {
        c.value = !1;
      }
    }), (p, d) => (s(), T(He, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => p.$emit("close"))
    }, {
      header: i(() => {
        var v, w, b, k;
        return [
          e("div", D2, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", L2, a(((v = l.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (k = (b = l.value) == null ? void 0 : b.refs) != null && k.length ? (s(), o("span", z2, [
              (s(!0), o(B, null, ie(l.value.refs, (f) => (s(), o("span", {
                key: f,
                class: "ref-badge"
              }, a(f), 1))), 128))
            ])) : r("", !0)
          ]),
          $(ye, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (f) => p.$emit("close"))
          }, {
            default: i(() => [...d[5] || (d[5] = [
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
        var v, w;
        return [
          e("div", U2, a(((v = l.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", N2, a(((w = l.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          c.value ? (s(), o("div", O2, "Loading details...")) : l.value ? (s(), o("div", A2, [
            e("div", F2, [
              e("span", B2, a(l.value.stats.files_changed) + " files", 1),
              e("span", V2, "+" + a(l.value.stats.insertions), 1),
              e("span", W2, "-" + a(l.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", G2, [
              $(cs, { variant: "section" }, {
                default: i(() => [...d[6] || (d[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(B, null, ie(l.value.changes.workflows.added, (b) => (s(), o("div", {
                key: "add-" + b,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(b), 1)
              ]))), 128)),
              (s(!0), o(B, null, ie(l.value.changes.workflows.modified, (b) => (s(), o("div", {
                key: "mod-" + b,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(b), 1)
              ]))), 128)),
              (s(!0), o(B, null, ie(l.value.changes.workflows.deleted, (b) => (s(), o("div", {
                key: "del-" + b,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(b), 1)
              ]))), 128))
            ])) : r("", !0),
            m.value ? (s(), o("div", j2, [
              $(cs, { variant: "section" }, {
                default: i(() => [...d[10] || (d[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(B, null, ie(l.value.changes.nodes.added, (b) => (s(), o("div", {
                key: "add-" + b.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(b.name), 1),
                b.version ? (s(), o("span", K2, "(" + a(b.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(B, null, ie(l.value.changes.nodes.removed, (b) => (s(), o("div", {
                key: "rem-" + b.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(b.name), 1)
              ]))), 128))
            ])) : r("", !0),
            l.value.changes.models.resolved > 0 ? (s(), o("div", H2, [
              $(cs, { variant: "section" }, {
                default: i(() => [...d[13] || (d[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", q2, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: i(() => [
        $(ye, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => p.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...d[15] || (d[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        $(ye, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => p.$emit("checkout", t.commit))
        }, {
          default: i(() => [...d[16] || (d[16] = [
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
}, e$ = /* @__PURE__ */ oe({
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
  setup(t, { emit: u }) {
    const n = t, l = u;
    function c(g) {
      g.shiftKey || g.ctrlKey || g.metaKey || n.submitOnEnter && (g.preventDefault(), l("submit"));
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
          wt(c, ["enter"])
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
}, a$ = /* @__PURE__ */ oe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", {
      class: fe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (l) => u.$emit("update:modelValue", l.target.checked))
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
      u.$slots.default ? (s(), o("span", n$, [
        Re(u.$slots, "default", {}, void 0, !0)
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
}, U$ = { class: "error-header" }, N$ = { class: "error-title" }, O$ = { class: "issues-list" }, A$ = { class: "message-section" }, F$ = { class: "popover-footer" }, B$ = /* @__PURE__ */ oe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, l = u, { commit: c } = Ae(), g = y(""), m = y(!1), p = y(!1), d = z(() => {
      if (!n.status) return !1;
      const x = n.status.workflows;
      return x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || n.status.has_changes;
    }), v = z(() => {
      if (!n.status) return !1;
      const x = n.status.workflows, R = n.status.git_changes;
      return x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || R.nodes_added.length > 0 || R.nodes_removed.length > 0;
    }), w = z(() => {
      var x;
      return (x = n.status) != null && x.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (R) => R.has_issues && (R.sync_state === "new" || R.sync_state === "modified")
      ) : [];
    }), b = z(() => w.value.length > 0), k = z(() => b.value && !p.value);
    async function f() {
      var x, R, C;
      if (!(b.value && !p.value) && !(!d.value || !g.value.trim() || m.value)) {
        m.value = !0;
        try {
          const P = await c(g.value.trim(), p.value);
          if (P.status === "success") {
            const O = `Committed: ${((x = P.summary) == null ? void 0 : x.new) || 0} new, ${((R = P.summary) == null ? void 0 : R.modified) || 0} modified, ${((C = P.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            l("committed", { success: !0, message: O });
          } else P.status === "no_changes" ? l("committed", { success: !1, message: "No changes to commit" }) : P.status === "blocked" ? l("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : l("committed", { success: !1, message: P.message || "Commit failed" });
        } catch (P) {
          l("committed", { success: !1, message: P instanceof Error ? P.message : "Commit failed" });
        } finally {
          m.value = !1;
        }
      }
    }
    return (x, R) => t.asModal ? (s(), T(et, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: R[5] || (R[5] = (C) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: R[4] || (R[4] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", l$, [
            R[11] || (R[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: R[0] || (R[0] = (C) => l("close"))
            }, [...R[10] || (R[10] = [
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
                R[12] || (R[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", c$, [
                R[13] || (R[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", u$, [
                R[14] || (R[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", m$, [
                R[15] || (R[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", v$, [
                R[16] || (R[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (s(), o("div", f$, [...R[17] || (R[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", p$, " No changes to commit ")) : (s(), o("div", g$, " Loading... ")),
            b.value ? (s(), o("div", h$, [
              e("div", y$, [
                R[18] || (R[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", w$, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", k$, [
                (s(!0), o(B, null, ie(w.value, (C) => (s(), o("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(C.name), 1),
                  h(": " + a(C.issue_summary), 1)
                ]))), 128))
              ]),
              $(Qs, {
                modelValue: p.value,
                "onUpdate:modelValue": R[1] || (R[1] = (C) => p.value = C),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...R[19] || (R[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", b$, [
              $(Xs, {
                modelValue: g.value,
                "onUpdate:modelValue": R[2] || (R[2] = (C) => g.value = C),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || m.value || k.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: f,
                onSubmit: f
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", _$, [
            $(ye, {
              variant: "secondary",
              onClick: R[3] || (R[3] = (C) => l("close"))
            }, {
              default: i(() => [...R[20] || (R[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(ye, {
              variant: p.value ? "danger" : "primary",
              disabled: !d.value || !g.value.trim() || m.value || k.value,
              loading: m.value,
              onClick: f
            }, {
              default: i(() => [
                h(a(m.value ? "Committing..." : p.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", $$, [
      e("div", C$, [
        R[22] || (R[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: R[6] || (R[6] = (C) => l("close"))
        }, [...R[21] || (R[21] = [
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
            R[23] || (R[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", E$, [
            R[24] || (R[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", T$, [
            R[25] || (R[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", R$, [
            R[26] || (R[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", P$, [
            R[27] || (R[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (s(), o("div", M$, [...R[28] || (R[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", D$, " No changes to commit ")) : (s(), o("div", L$, " Loading... ")),
        b.value ? (s(), o("div", z$, [
          e("div", U$, [
            R[29] || (R[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", N$, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", O$, [
            (s(!0), o(B, null, ie(w.value, (C) => (s(), o("div", {
              key: C.name,
              class: "issue-item"
            }, [
              e("strong", null, a(C.name), 1),
              h(": " + a(C.issue_summary), 1)
            ]))), 128))
          ]),
          $(Qs, {
            modelValue: p.value,
            "onUpdate:modelValue": R[7] || (R[7] = (C) => p.value = C),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...R[30] || (R[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", A$, [
          $(Xs, {
            modelValue: g.value,
            "onUpdate:modelValue": R[8] || (R[8] = (C) => g.value = C),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || m.value || k.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: f,
            onSubmit: f
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", F$, [
        $(ye, {
          variant: "secondary",
          onClick: R[9] || (R[9] = (C) => l("close"))
        }, {
          default: i(() => [...R[31] || (R[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(ye, {
          variant: p.value ? "danger" : "primary",
          disabled: !d.value || !g.value.trim() || m.value || k.value,
          loading: m.value,
          onClick: f
        }, {
          default: i(() => [
            h(a(m.value ? "Committing..." : p.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), _o = /* @__PURE__ */ ne(B$, [["__scopeId", "data-v-d0fe6172"]]), V$ = { class: "modal-header" }, W$ = { class: "modal-body" }, G$ = { class: "switch-message" }, j$ = { class: "switch-details" }, K$ = { class: "modal-actions" }, H$ = /* @__PURE__ */ oe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), T(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (l) => u.$emit("close"))
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
              onClick: n[0] || (n[0] = (l) => u.$emit("close"))
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
            $(X, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(X, {
              variant: "primary",
              onClick: n[2] || (n[2] = (l) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
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
}, J$ = { class: "modal-content" }, X$ = { class: "modal-body" }, Q$ = { class: "progress-info" }, Z$ = { class: "progress-percentage" }, eC = { class: "progress-state" }, tC = { class: "switch-steps" }, sC = { class: "step-icon" }, oC = { class: "step-label" }, nC = /* @__PURE__ */ oe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = z(() => {
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
      return u.message || g[u.state] || u.state;
    }), l = z(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), c = z(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = g.findIndex((p) => p.state === u.state);
      return g.map((p, d) => {
        let v = "pending", w = "○";
        return d < m ? (v = "completed", w = "✓") : d === m && (v = "active", w = "⟳"), {
          ...p,
          status: v,
          icon: w
        };
      });
    });
    return (g, m) => (s(), T(et, { to: "body" }, [
      t.show ? (s(), o("div", Y$, [
        e("div", J$, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", X$, [
            $(Ss, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", Q$, [
              e("div", Z$, a(t.progress) + "%", 1),
              e("div", eC, a(n.value), 1)
            ]),
            e("div", tC, [
              (s(!0), o(B, null, ie(c.value, (p) => (s(), o("div", {
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
}, uC = { class: "node-list" }, mC = { class: "modal-actions" }, vC = /* @__PURE__ */ oe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), T(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (l) => u.$emit("close"))
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
              onClick: n[0] || (n[0] = (l) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", iC, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", rC, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", dC, [
                (s(!0), o(B, null, ie(t.mismatchDetails.missing_nodes, (l) => (s(), o("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + a(l), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", cC, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", uC, [
                (s(!0), o(B, null, ie(t.mismatchDetails.extra_nodes, (l) => (s(), o("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + a(l), 1))), 128))
              ])
            ])) : r("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", mC, [
            $(X, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(X, {
              variant: "primary",
              onClick: n[2] || (n[2] = (l) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
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
}, CC = ["d"], xC = /* @__PURE__ */ oe({
  __name: "SocialButtons",
  setup(t) {
    function u(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, l) => (s(), o("div", yC, [
      (s(!0), o(B, null, ie(Se(pC), (c) => (s(), o(B, {
        key: c.id
      }, [
        c.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: c.title,
          "aria-label": c.ariaLabel,
          onClick: (g) => u(c.url)
        }, [
          h(a(c.label) + " ", 1),
          (s(), o("svg", kC, [
            e("path", {
              d: c.iconPath
            }, null, 8, bC)
          ]))
        ], 8, wC)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: c.title,
          "aria-label": c.ariaLabel,
          onClick: (g) => u(c.url)
        }, [
          (s(), o("svg", $C, [
            e("path", {
              d: c.iconPath
            }, null, 8, CC)
          ]))
        ], 8, _C))
      ], 64))), 128))
    ]));
  }
}), $o = /* @__PURE__ */ ne(xC, [["__scopeId", "data-v-4f846342"]]), SC = { class: "footer-info" }, IC = { class: "version" }, EC = { class: "made-by" }, TC = /* @__PURE__ */ oe({
  __name: "FooterInfo",
  setup(t) {
    return (u, n) => (s(), o("div", SC, [
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
}), Co = /* @__PURE__ */ ne(TC, [["__scopeId", "data-v-8bc3db0a"]]), RC = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = y(null);
    async function l() {
      var g;
      await ((g = n.value) == null ? void 0 : g.saveSettings());
    }
    function c() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (g, m) => (s(), T(He, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: m[1] || (m[1] = (p) => g.$emit("close"))
    }, {
      body: i(() => [
        $(co, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: c
        }, null, 8, ["workspace-path"])
      ]),
      footer: i(() => {
        var p;
        return [
          $(ye, {
            variant: "primary",
            disabled: !((p = n.value) != null && p.hasChanges),
            onClick: l
          }, {
            default: i(() => [...m[2] || (m[2] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(ye, {
            variant: "secondary",
            onClick: m[0] || (m[0] = (d) => g.$emit("close"))
          }, {
            default: i(() => [...m[3] || (m[3] = [
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
}, f3 = { class: "wizard-footer" }, p3 = { class: "wizard-footer-actions" }, Jt = 10, g3 = 600 * 1e3, Zs = 1800 * 1e3, h3 = /* @__PURE__ */ oe({
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
  setup(t, { emit: u }) {
    const n = t, l = u, {
      initializeWorkspace: c,
      getInitializeProgress: g,
      validatePath: m,
      createEnvironment: p,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: w
    } = Ae(), b = y(n.initialStep || 1), k = y(null), f = y("landing"), x = y(!1), R = y(!1), C = y(!1), P = y(!1), O = y(null), I = y(n.initialStep === 2), S = y(n.defaultPath), Y = y(!!n.detectedModelsDir), F = y(n.detectedModelsDir || ""), V = y(null), E = y(null), _ = y(null), M = y(null), H = y("my-new-env"), se = y(fo), K = y("latest"), te = y(po), J = y(!0), U = y(null), N = y(null), D = y([{ tag_name: "latest", name: "Latest", published_at: "" }]), ve = y(!1), ae = y(!1), be = y(!1), Ce = y({ progress: 0, message: "" }), Le = y({ progress: 0, message: "" }), Ue = [
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
      const ue = (L = S.value) == null ? void 0 : L.trim(), Q = !V.value, ee = !Y.value || !E.value && ((G = F.value) == null ? void 0 : G.trim());
      return ue && Q && ee;
    }), De = z(() => {
      var ue;
      return (ue = H.value) == null ? void 0 : ue.trim();
    }), pe = z(() => !!(b.value === 2 || N.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Je = z(() => N.value || n.workspacePath || null);
    async function tt() {
      var ue;
      if (V.value = null, !!((ue = S.value) != null && ue.trim()))
        try {
          const Q = await m({ path: S.value, type: "workspace" });
          Q.valid || (V.value = Q.error || "Invalid path");
        } catch (Q) {
          V.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function st() {
      var ue;
      if (E.value = null, _.value = null, M.value = null, !!((ue = F.value) != null && ue.trim()))
        try {
          const Q = await m({ path: F.value, type: "models" });
          if (Q.valid)
            M.value = Q.model_count ?? null;
          else if (E.value = Q.error || "Invalid path", Q.suggestion) {
            _.value = Q.suggestion, F.value = Q.suggestion, E.value = null;
            const ee = await m({ path: Q.suggestion, type: "models" });
            ee.valid && (M.value = ee.model_count ?? null);
          }
        } catch (Q) {
          E.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function Te() {
      var ue, Q, ee, L, G;
      if (V.value = null, E.value = null, await tt(), (ue = V.value) != null && ue.includes("already exists")) {
        V.value = null, N.value = ((Q = S.value) == null ? void 0 : Q.trim()) || n.defaultPath, b.value = 2, qe();
        return;
      }
      if (!V.value && !(Y.value && ((ee = F.value) != null && ee.trim()) && (await st(), E.value))) {
        ae.value = !0;
        try {
          await c({
            workspace_path: ((L = S.value) == null ? void 0 : L.trim()) || n.defaultPath,
            models_directory: Y.value && ((G = F.value) == null ? void 0 : G.trim()) || null
          }), me.value = 0, ge.value = Date.now();
          const le = setInterval(async () => {
            var xe;
            if (ge.value && Date.now() - ge.value > g3) {
              clearInterval(le), ae.value = !1, V.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ve = await g();
              if (me.value = 0, Ve.state === "idle" && ae.value) {
                clearInterval(le), ae.value = !1, V.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ce.value = { progress: Ve.progress, message: Ve.message }, Ve.state === "complete" ? (clearInterval(le), ae.value = !1, N.value = ((xe = S.value) == null ? void 0 : xe.trim()) || n.defaultPath, b.value = 2, qe()) : Ve.state === "error" && (clearInterval(le), ae.value = !1, V.value = Ve.error || "Workspace creation failed");
            } catch (Ve) {
              me.value++, console.warn(`Polling failure ${me.value}/${Jt}:`, Ve), me.value >= Jt && (clearInterval(le), ae.value = !1, V.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (le) {
          ae.value = !1, V.value = le instanceof Error ? le.message : "Failed to create workspace";
        }
      }
    }
    async function Xe() {
      be.value = !0, U.value = null;
      try {
        const ue = {
          name: H.value.trim() || "my-new-env",
          python_version: se.value,
          comfyui_version: K.value,
          torch_backend: te.value,
          switch_after: J.value,
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
                J.value ? l("complete", G, N.value) : (f.value = "landing", l("environment-created-no-switch", G));
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
      k.value && l("switch-environment", k.value, N.value);
    }
    function mt() {
      f.value === "create" || f.value === "import" ? f.value = "landing" : b.value === 2 && n.setupState === "no_workspace" && (b.value = 1);
    }
    function $e(ue, Q) {
      R.value = !1, Q ? l("complete", ue, N.value) : (l("environment-created-no-switch", ue), f.value = "landing");
    }
    function je() {
    }
    Ne(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (N.value = n.workspacePath), b.value === 2) {
        qe();
        const ue = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await it(), clearTimeout(ue), I.value = !1;
      }
    });
    async function it() {
      try {
        const ue = await d();
        if (console.log("[ComfyGit] Create progress check:", ue.state, ue), ue.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ue.environment_name), f.value = "create", be.value = !0, H.value = ue.environment_name || "my-new-env", Le.value = {
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
        }, P.value = !0, f.value = "import", R.value = !0);
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
            const G = L.environment_name || H.value;
            return l("complete", G, N.value), !1;
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
    return (ue, Q) => (s(), o(B, null, [
      $(He, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (ee) => ue.$emit("close"))
      }, {
        header: i(() => [
          Q[20] || (Q[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", MC, [
            $($o),
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
        body: i(() => {
          var ee;
          return [
            b.value === 1 ? (s(), o("div", DC, [
              Q[24] || (Q[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", LC, [
                Q[21] || (Q[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Pe(e("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (L) => S.value = L),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, zC), [
                  [kt, S.value]
                ]),
                V.value ? (s(), o("p", UC, a(V.value), 1)) : r("", !0)
              ]),
              e("div", NC, [
                e("label", OC, [
                  Pe(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (L) => Y.value = L)
                  }, null, 512), [
                    [ks, Y.value]
                  ]),
                  Q[22] || (Q[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              Y.value ? (s(), o("div", AC, [
                Q[23] || (Q[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Pe(e("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (L) => F.value = L),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, FC), [
                  [kt, F.value]
                ]),
                t.detectedModelsDir && !F.value ? (s(), o("p", BC, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                _.value ? (s(), o("p", VC, " Did you mean: " + a(_.value), 1)) : r("", !0),
                E.value ? (s(), o("p", WC, a(E.value), 1)) : r("", !0),
                M.value !== null && !E.value ? (s(), o("p", GC, " Found " + a(M.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              ae.value ? (s(), T($s, {
                key: 1,
                progress: Ce.value.progress,
                message: Ce.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            b.value === 2 ? (s(), o("div", jC, [
              I.value ? (s(), o("div", KC, [...Q[25] || (Q[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(B, { key: 1 }, [
                !n.cliInstalled && !C.value ? (s(), o("div", HC, [
                  e("div", qC, [
                    Q[27] || (Q[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (L) => C.value = !0),
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
                  (ee = n.existingEnvironments) != null && ee.length ? (s(), o(B, { key: 0 }, [
                    Q[33] || (Q[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", JC, [
                      (s(!0), o(B, null, ie(n.existingEnvironments, (L) => (s(), o("label", {
                        key: L,
                        class: fe(["env-option", { selected: k.value === L }])
                      }, [
                        Pe(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: L,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (G) => k.value = G)
                        }, null, 8, XC), [
                          [Rt, k.value]
                        ]),
                        e("span", QC, a(L), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : f.value === "create" ? (s(), o("div", ZC, [
                  be.value ? (s(), o("div", u3, [
                    e("p", m3, [
                      Q[41] || (Q[41] = h(" Creating environment ", -1)),
                      e("strong", null, a(H.value), 1),
                      Q[42] || (Q[42] = h("... ", -1))
                    ]),
                    $($s, {
                      progress: Le.value.progress,
                      message: Le.value.message,
                      "current-phase": Le.value.phase,
                      "show-steps": !0,
                      steps: Ue
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(B, { key: 0 }, [
                    Q[40] || (Q[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", e3, [
                      Q[35] || (Q[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Pe(e("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (L) => H.value = L),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [kt, H.value]
                      ])
                    ]),
                    e("div", t3, [
                      Q[36] || (Q[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Pe(e("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (L) => se.value = L),
                        class: "form-select"
                      }, [
                        (s(!0), o(B, null, ie(Se(vo), (L) => (s(), o("option", {
                          key: L,
                          value: L
                        }, a(L), 9, s3))), 128))
                      ], 512), [
                        [Dt, se.value]
                      ])
                    ]),
                    e("div", o3, [
                      Q[37] || (Q[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Pe(e("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (L) => K.value = L),
                        class: "form-select",
                        disabled: ve.value
                      }, [
                        (s(!0), o(B, null, ie(D.value, (L) => (s(), o("option", {
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
                        (s(!0), o(B, null, ie(Se(Gs), (L) => (s(), o("option", {
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
                          "onUpdate:modelValue": Q[13] || (Q[13] = (L) => J.value = L)
                        }, null, 512), [
                          [ks, J.value]
                        ]),
                        Q[39] || (Q[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    U.value ? (s(), o("div", c3, a(U.value), 1)) : r("", !0)
                  ], 64))
                ])) : f.value === "import" ? (s(), o("div", v3, [
                  $(yo, {
                    "workspace-path": N.value,
                    "resume-import": P.value,
                    "initial-progress": O.value ?? void 0,
                    onImportComplete: $e,
                    onImportStarted: Q[14] || (Q[14] = (L) => R.value = !0),
                    onSourceCleared: je
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: i(() => [
          e("div", f3, [
            $(Co),
            e("div", p3, [
              b.value === 1 ? (s(), T(ye, {
                key: 0,
                variant: "primary",
                disabled: !Z.value || ae.value,
                onClick: Te
              }, {
                default: i(() => [
                  h(a(ae.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : b.value === 2 ? (s(), o(B, { key: 1 }, [
                !be.value && !R.value && (f.value !== "landing" || n.setupState === "no_workspace" && !N.value) ? (s(), T(ye, {
                  key: 0,
                  variant: "secondary",
                  onClick: mt
                }, {
                  default: i(() => [...Q[44] || (Q[44] = [
                    h(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                f.value === "create" ? (s(), T(ye, {
                  key: 1,
                  variant: "primary",
                  disabled: !De.value || be.value,
                  onClick: Xe
                }, {
                  default: i(() => [
                    h(a(be.value ? "Creating..." : J.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                f.value === "landing" && k.value ? (s(), T(ye, {
                  key: 2,
                  variant: "primary",
                  onClick: Qe
                }, {
                  default: i(() => [
                    h(" Switch to " + a(k.value), 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ], 64)) : r("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      x.value ? (s(), T(PC, {
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
}, q3 = { class: "env-stats" }, Y3 = ["onClick"], J3 = { class: "toast-container" }, X3 = { class: "toast-message" }, Q3 = /* @__PURE__ */ oe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = t, l = u, {
      getStatus: c,
      getHistory: g,
      getBranches: m,
      checkout: p,
      createBranch: d,
      switchBranch: v,
      deleteBranch: w,
      getEnvironments: b,
      switchEnvironment: k,
      getSwitchProgress: f,
      deleteEnvironment: x,
      syncEnvironmentManually: R,
      repairWorkflowModels: C,
      getSetupStatus: P
    } = Ae(), O = no(), { liveInstanceCount: I } = wo({ autoStart: !0 }), S = y(null), Y = y([]), F = y([]), V = y([]), E = z(() => V.value.find((q) => q.is_current)), _ = y(null), M = y(!1), H = y(1), se = z(() => {
      var q;
      return ((q = _.value) == null ? void 0 : q.state) || "managed";
    }), K = y(!1), te = y(null), J = y(null), U = y(!1), N = y(null), D = y(null), ve = y(null), ae = y(!1), be = y(!1), Ce = y(""), Le = y(null), Ue = y({ state: "idle", progress: 0, message: "" });
    let me = null, ge = null;
    const Me = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ce = n.initialView ? Me[n.initialView] : null, Z = y((ce == null ? void 0 : ce.view) ?? "status"), De = y((ce == null ? void 0 : ce.section) ?? "this-env");
    function pe(q, A) {
      Z.value = q, De.value = A;
    }
    function Je(q) {
      const he = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[q];
      he && pe(he.view, he.section);
    }
    function tt() {
      pe("branches", "this-env");
    }
    function st() {
      l("close"), setTimeout(() => {
        var A;
        const q = document.querySelectorAll("button.comfyui-button");
        for (const he of q)
          if (((A = he.textContent) == null ? void 0 : A.trim()) === "Manager") {
            he.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Te = y(null), Xe = y(!1), qe = y(!1), Qe = y([]);
    let mt = 0;
    function $e(q, A = "info", he = 3e3) {
      const Ie = ++mt;
      return Qe.value.push({ id: Ie, message: q, type: A }), he > 0 && setTimeout(() => {
        Qe.value = Qe.value.filter((Oe) => Oe.id !== Ie);
      }, he), Ie;
    }
    function je(q) {
      Qe.value = Qe.value.filter((A) => A.id !== q);
    }
    function it(q, A) {
      $e(q, A);
    }
    const Ye = z(() => {
      if (!S.value) return "neutral";
      const q = S.value.workflows, A = q.new.length > 0 || q.modified.length > 0 || q.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? A ? "warning" : "success" : "error";
    });
    z(() => S.value ? Ye.value === "success" ? "All synced" : Ye.value === "warning" ? "Uncommitted changes" : Ye.value === "error" ? "Not synced" : "" : "");
    async function ue() {
      K.value = !0, te.value = null;
      try {
        const [q, A, he, Ie] = await Promise.all([
          c(!0),
          g(),
          m(),
          b()
        ]);
        S.value = q, Y.value = A.commits, F.value = he.branches, V.value = Ie, l("statusUpdate", q), N.value && await N.value.loadWorkflows(!0);
      } catch (q) {
        te.value = q instanceof Error ? q.message : "Failed to load status", S.value = null, Y.value = [], F.value = [];
      } finally {
        K.value = !1;
      }
    }
    function Q(q) {
      J.value = q;
    }
    async function ee(q) {
      var he;
      J.value = null;
      const A = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Te.value = {
        title: A ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: A ? "You have uncommitted changes that will be lost." : `Checkout commit ${q.short_hash || ((he = q.hash) == null ? void 0 : he.slice(0, 7))}?`,
        details: A ? St() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: A ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: A,
        onConfirm: async () => {
          var Ke;
          Te.value = null, Ve();
          const Ie = $e(`Checking out ${q.short_hash || ((Ke = q.hash) == null ? void 0 : Ke.slice(0, 7))}...`, "info", 0), Oe = await p(q.hash, A);
          je(Ie), Oe.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Oe.message || "Checkout failed", "error");
        }
      };
    }
    async function L(q) {
      const A = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Te.value = {
        title: A ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: A ? "You have uncommitted changes." : `Switch to branch "${q}"?`,
        details: A ? St() : void 0,
        warning: A ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: A ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Te.value = null, Ve();
          const he = $e(`Switching to ${q}...`, "info", 0), Ie = await v(q, A);
          je(he), Ie.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function G(q) {
      const A = $e(`Creating branch ${q}...`, "info", 0), he = await d(q);
      je(A), he.status === "success" ? ($e(`Branch "${q}" created`, "success"), await ue()) : $e(he.message || "Failed to create branch", "error");
    }
    async function le(q, A = !1) {
      const he = async (Ie) => {
        var Ke;
        const Oe = $e(`Deleting branch ${q}...`, "info", 0);
        try {
          const lt = await w(q, Ie);
          je(Oe), lt.status === "success" ? ($e(`Branch "${q}" deleted`, "success"), await ue()) : (Ke = lt.message) != null && Ke.includes("not fully merged") ? Te.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${q}" has commits that haven't been merged.`,
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
            message: `The branch "${q}" has commits that haven't been merged.`,
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
        message: `Delete branch "${q}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Te.value = null, await he(A);
        }
      };
    }
    async function xe(q) {
      J.value = null;
      const A = prompt("Enter branch name:");
      if (A) {
        const he = $e(`Creating branch ${A}...`, "info", 0), Ie = await d(A, q.hash);
        je(he), Ie.status === "success" ? ($e(`Branch "${A}" created from ${q.short_hash}`, "success"), await ue()) : $e(Ie.message || "Failed to create branch", "error");
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
          var q;
          Te.value = null, Ve(), $e("Restarting environment...", "info");
          try {
            (q = window.app) != null && q.api && await window.app.api.fetchApi("/v2/manager/reboot");
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
          var q;
          Te.value = null, $e("Stopping environment...", "info");
          try {
            (q = window.app) != null && q.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function rt(q, A) {
      U.value = !1, Ce.value = q, Le.value = A || null, ae.value = !0;
    }
    async function Nt() {
      ae.value = !1, be.value = !0, Ve(), Ue.value = {
        progress: 10,
        state: Ot(10),
        message: At(10)
      };
      try {
        await k(Ce.value, Le.value || void 0), Ht(), Vt();
      } catch (q) {
        pt(), be.value = !1, $e(`Failed to initiate switch: ${q instanceof Error ? q.message : "Unknown error"}`, "error"), Ue.value = { state: "idle", progress: 0, message: "" }, Le.value = null;
      }
    }
    function Ot(q) {
      return q >= 100 ? "complete" : q >= 80 ? "validating" : q >= 60 ? "starting" : q >= 30 ? "syncing" : "preparing";
    }
    function At(q) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ot(q)] || "";
    }
    function Ht() {
      if (ge) return;
      let q = 10;
      const A = 60, he = 5e3, Ie = 100, Oe = (A - q) / (he / Ie);
      ge = window.setInterval(() => {
        if (q += Oe, q >= A && (q = A, pt()), Ue.value.progress < A) {
          const Ke = Math.floor(q);
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
          let q = await O.getStatus();
          if ((!q || q.state === "idle") && (q = await f()), !q)
            return;
          const A = q.progress || 0;
          A >= 60 && pt();
          const he = Math.max(A, Ue.value.progress), Ie = q.state && q.state !== "idle" && q.state !== "unknown", Oe = Ie ? q.state : Ot(he), Ke = Ie && q.message || At(he);
          Ue.value = {
            state: Oe,
            progress: he,
            message: Ke
          }, q.state === "complete" ? (pt(), Ft(), be.value = !1, $e(`✓ Switched to ${Ce.value}`, "success"), await ue(), Ce.value = "") : q.state === "rolled_back" ? (pt(), Ft(), be.value = !1, $e("Switch failed, restored previous environment", "warning"), Ce.value = "") : q.state === "critical_failure" && (pt(), Ft(), be.value = !1, $e(`Critical error during switch: ${q.message}`, "error"), Ce.value = "");
        } catch (q) {
          console.error("Failed to poll switch progress:", q);
        }
      }, 1e3));
    }
    function Ft() {
      pt(), me && (clearInterval(me), me = null);
    }
    function qt() {
      var q;
      ae.value = !1, Ce.value = "", (q = _.value) != null && q.state && _.value.state !== "managed" && (H.value = _.value.state === "no_workspace" ? 1 : 2, M.value = !0);
    }
    async function ts(q) {
      Xe.value = !1, await ue(), $e(q.message, q.success ? "success" : "error");
    }
    async function ss() {
      qe.value = !1;
      const q = $e("Syncing environment...", "info", 0);
      try {
        const A = await R("skip", !0);
        if (je(q), A.status === "success") {
          const he = [];
          A.nodes_installed.length && he.push(`${A.nodes_installed.length} installed`), A.nodes_removed.length && he.push(`${A.nodes_removed.length} removed`);
          const Ie = he.length ? `: ${he.join(", ")}` : "";
          $e(`✓ Environment synced${Ie}`, "success"), await ue();
        } else {
          const he = A.errors.length ? A.errors.join("; ") : A.message;
          $e(`Sync failed: ${he}`, "error");
        }
      } catch (A) {
        je(q), $e(`Sync error: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
      }
    }
    async function os(q) {
      var A;
      try {
        const he = await C(q);
        he.failed.length === 0 ? $e(`✓ Repaired ${he.success} workflow${he.success === 1 ? "" : "s"}`, "success") : $e(`Repaired ${he.success}, failed: ${he.failed.length}`, "warning"), await ue();
      } catch (he) {
        $e(`Repair failed: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
      } finally {
        (A = ve.value) == null || A.resetRepairingState();
      }
    }
    async function re() {
      var A, he;
      const q = $e("Repairing environment...", "info", 0);
      try {
        const Ie = await R("skip", !0);
        if (je(q), Ie.status === "success") {
          const Oe = [];
          Ie.nodes_installed.length && Oe.push(`${Ie.nodes_installed.length} installed`), Ie.nodes_removed.length && Oe.push(`${Ie.nodes_removed.length} removed`);
          const Ke = Oe.length ? `: ${Oe.join(", ")}` : "";
          $e(`✓ Environment repaired${Ke}`, "success"), (A = ve.value) == null || A.closeDetailModal(), await ue();
        } else {
          const Oe = Ie.errors.length ? Ie.errors.join(", ") : Ie.message || "Unknown error";
          $e(`Repair failed: ${Oe}`, "error");
        }
      } catch (Ie) {
        je(q), $e(`Repair error: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
      } finally {
        (he = ve.value) == null || he.resetRepairingEnvironmentState();
      }
    }
    async function j(q, A) {
      $e(`Environment '${q}' created`, "success"), await ue(), D.value && await D.value.loadEnvironments(), A && await rt(q);
    }
    async function Ee(q) {
      var A;
      if (((A = E.value) == null ? void 0 : A.name) === q) {
        $e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Te.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${q}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Te.value = null;
          try {
            const he = await x(q);
            he.status === "success" ? ($e(`Environment "${q}" deleted`, "success"), await ue(), D.value && await D.value.loadEnvironments()) : $e(he.message || "Failed to delete environment", "error");
          } catch (he) {
            $e(`Error deleting environment: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ze(q, A) {
      M.value = !1;
      try {
        _.value = await P();
      } catch {
      }
      await rt(q, A);
    }
    function gt() {
      M.value = !1, l("close");
    }
    async function Pt(q, A) {
      await rt(q, A);
    }
    async function Mt(q) {
      await ue(), await rt(q);
    }
    async function xt(q) {
      _.value = await P(), console.log(`Environment '${q}' created. Available for switching.`);
    }
    function we() {
      pe("environments", "all-envs"), setTimeout(() => {
        var q;
        (q = D.value) == null || q.openCreateModal();
      }, 100);
    }
    function St() {
      if (!S.value) return [];
      const q = [], A = S.value.workflows;
      return A.new.length && q.push(`${A.new.length} new workflow(s)`), A.modified.length && q.push(`${A.modified.length} modified workflow(s)`), A.deleted.length && q.push(`${A.deleted.length} deleted workflow(s)`), q;
    }
    return Ne(async () => {
      try {
        if (_.value = await P(), _.value.state === "no_workspace") {
          M.value = !0, H.value = 1;
          return;
        }
        if (_.value.state === "empty_workspace") {
          M.value = !0, H.value = 2;
          return;
        }
        if (_.value.state === "unmanaged") {
          M.value = !0, H.value = 2;
          return;
        }
      } catch (q) {
        console.warn("Setup status check failed, proceeding normally:", q);
      }
      await ue();
    }), (q, A) => {
      var he, Ie, Oe, Ke, lt, It, Wt, Gt, W, de, ke, We;
      return s(), o("div", w3, [
        e("div", k3, [
          e("div", b3, [
            A[31] || (A[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (s(), o("div", _3)) : r("", !0)
          ]),
          e("div", $3, [
            $($o),
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
              onClick: A[0] || (A[0] = (_e) => l("close")),
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
            S.value ? (s(), o("div", x3, [
              e("span", null, a(((he = E.value) == null ? void 0 : he.name) || ((Ie = S.value) == null ? void 0 : Ie.environment) || "Loading..."), 1),
              e("span", S3, "(" + a(S.value.branch || "detached") + ")", 1)
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
                  Se(I) > 0 ? (s(), o("span", D3, a(Se(I)), 1)) : r("", !0)
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
              $(Co)
            ])
          ]),
          e("div", z3, [
            te.value ? (s(), o("div", U3, a(te.value), 1)) : !S.value && Z.value === "status" ? (s(), o("div", N3, " Loading status... ")) : (s(), o(B, { key: 2 }, [
              Z.value === "status" ? (s(), T(dl, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ve,
                status: S.value,
                "setup-state": se.value,
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
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), T(Pm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: ue
              }, null, 512)) : Z.value === "models-env" ? (s(), T(vv, {
                key: 2,
                onNavigate: Je
              })) : Z.value === "branches" ? (s(), T(Cl, {
                key: 3,
                branches: F.value,
                current: ((Oe = S.value) == null ? void 0 : Oe.branch) || null,
                onSwitch: L,
                onCreate: G,
                onDelete: le
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), T(zl, {
                key: 4,
                commits: Y.value,
                onSelect: Q,
                onCheckout: ee
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), T(cf, {
                key: 5,
                "version-mismatches": ((lt = (Ke = S.value) == null ? void 0 : Ke.comparison) == null ? void 0 : lt.version_mismatches) || [],
                onOpenNodeManager: st,
                onRepairEnvironment: re,
                onToast: it
              }, null, 8, ["version-mismatches"])) : Z.value === "debug-env" ? (s(), T(_h, { key: 6 })) : Z.value === "environments" ? (s(), T(x1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: D,
                onSwitch: rt,
                onCreated: j,
                onDelete: Ee
              }, null, 512)) : Z.value === "model-index" ? (s(), T(Dv, {
                key: 8,
                onRefresh: ue
              })) : Z.value === "settings" ? (s(), T(vh, { key: 9 })) : Z.value === "debug-workspace" ? (s(), T(bh, { key: 10 })) : Z.value === "deploy" ? (s(), T(M2, {
                key: 11,
                onToast: it,
                onNavigate: Je
              })) : Z.value === "export" ? (s(), T(ty, { key: 12 })) : Z.value === "import" ? (s(), T(q0, {
                key: 13,
                onImportCompleteSwitch: Mt
              })) : Z.value === "remotes" ? (s(), T(Kg, {
                key: 14,
                onToast: it
              })) : r("", !0)
            ], 64))
          ])
        ]),
        J.value ? (s(), T(J2, {
          key: 0,
          commit: J.value,
          onClose: A[25] || (A[25] = (_e) => J.value = null),
          onCheckout: ee,
          onCreateBranch: xe
        }, null, 8, ["commit"])) : r("", !0),
        Te.value ? (s(), T(Ws, {
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
        $(q$, {
          show: ae.value,
          "from-environment": ((It = E.value) == null ? void 0 : It.name) || "unknown",
          "to-environment": Ce.value,
          onConfirm: Nt,
          onClose: qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Xe.value && S.value ? (s(), T(_o, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: A[27] || (A[27] = (_e) => Xe.value = !1),
          onCommitted: ts
        }, null, 8, ["status"])) : r("", !0),
        qe.value && S.value ? (s(), T(fC, {
          key: 3,
          show: qe.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: ss,
          onClose: A[28] || (A[28] = (_e) => qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        $(aC, {
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
                (s(!0), o(B, null, ie(V.value, (_e) => (s(), o("div", {
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
        M.value ? (s(), T(y3, {
          key: 5,
          "default-path": ((Wt = _.value) == null ? void 0 : Wt.default_path) || "~/comfygit",
          "detected-models-dir": ((Gt = _.value) == null ? void 0 : Gt.detected_models_dir) || null,
          "initial-step": H.value,
          "existing-environments": ((W = _.value) == null ? void 0 : W.environments) || [],
          "cli-installed": ((de = _.value) == null ? void 0 : de.cli_installed) ?? !0,
          "setup-state": ((ke = _.value) == null ? void 0 : ke.state) || "no_workspace",
          "workspace-path": ((We = _.value) == null ? void 0 : We.workspace_path) || null,
          onComplete: Ze,
          onClose: gt,
          onSwitchEnvironment: Pt,
          onEnvironmentCreatedNoSwitch: xt
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", J3, [
          $(Mo, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(B, null, ie(Qe.value, (_e) => (s(), o("div", {
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
}, y5 = /* @__PURE__ */ oe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function l(m) {
      if (m === 0) return "?";
      const p = m / (1024 * 1024 * 1024);
      return p >= 1 ? `${p.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    function c(m) {
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
            e("span", n5, a(l(t.item.size)), 1),
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
          e("span", c5, a(l(t.item.downloaded)) + " / " + a(l(t.item.size)), 1),
          e("span", u5, a(c(t.item.speed)), 1),
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
}, W5 = { class: "section-header" }, G5 = { class: "section-label failed" }, j5 = { class: "items-list" }, K5 = /* @__PURE__ */ oe({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: l,
      completedItems: c,
      failedItems: g,
      pausedItems: m,
      hasItems: p,
      activeCount: d,
      cancelDownload: v,
      retryDownload: w,
      resumeDownload: b,
      resumeAllPaused: k,
      removeItem: f,
      clearCompleted: x
    } = fs(), R = y(!1);
    let C = null;
    ut(
      () => ({
        active: d.value,
        failed: g.value.length,
        paused: m.value.length,
        completed: c.value.length
      }),
      (S, Y) => {
        C && (clearTimeout(C), C = null);
        const F = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, V = Y && (Y.active > 0 || Y.paused > 0);
        F && V && (C = setTimeout(() => {
          x(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = z(() => {
      var F;
      if (u.items.length === 0) return 0;
      const S = c.value.length, Y = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((S + Y / 100) / u.items.length * 100);
    });
    function O(S) {
      v(S);
    }
    function I(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, Y) => (s(), T(et, { to: "body" }, [
      Se(p) ? (s(), o("div", {
        key: 0,
        class: fe(["model-download-queue", { minimized: !R.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Y[0] || (Y[0] = (F) => R.value = !R.value)
        }, [
          e("div", w5, [
            Y[4] || (Y[4] = e("span", { class: "icon" }, "↓", -1)),
            Y[5] || (Y[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", k5, "(" + a(Se(d)) + "/" + a(Se(u).items.length) + ")", 1)
          ]),
          e("div", b5, [
            e("span", _5, a(R.value ? "minimize" : "expand"), 1)
          ])
        ]),
        R.value ? (s(), o("div", E5, [
          Se(n) ? (s(), o("div", T5, [
            Y[6] || (Y[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            $(is, {
              item: Se(n),
              onCancel: Y[1] || (Y[1] = (F) => O(Se(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Se(m).length > 0 ? (s(), o("div", R5, [
            e("div", P5, [
              e("span", M5, "Paused (" + a(Se(m).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Y[2] || (Y[2] = //@ts-ignore
                (...F) => Se(k) && Se(k)(...F))
              }, "Resume All")
            ]),
            e("div", D5, [
              (s(!0), o(B, null, ie(Se(m), (F) => (s(), T(is, {
                key: F.id,
                item: F,
                onResume: (V) => Se(b)(F.id),
                onRemove: (V) => Se(f)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Se(l).length > 0 ? (s(), o("div", L5, [
            e("div", z5, [
              e("span", U5, "Queued (" + a(Se(l).length) + ")", 1)
            ]),
            e("div", N5, [
              (s(!0), o(B, null, ie(Se(l), (F) => (s(), T(is, {
                key: F.id,
                item: F,
                onCancel: (V) => O(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Se(c).length > 0 ? (s(), o("div", O5, [
            e("div", A5, [
              e("span", F5, "Completed (" + a(Se(c).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Y[3] || (Y[3] = //@ts-ignore
                (...F) => Se(x) && Se(x)(...F))
              }, "Clear")
            ]),
            e("div", B5, [
              (s(!0), o(B, null, ie(Se(c).slice(0, 3), (F) => (s(), T(is, {
                key: F.id,
                item: F,
                onRemove: (V) => Se(f)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Se(g).length > 0 ? (s(), o("div", V5, [
            e("div", W5, [
              e("span", G5, "Failed (" + a(Se(g).length) + ")", 1)
            ]),
            e("div", j5, [
              (s(!0), o(B, null, ie(Se(g), (F) => (s(), T(is, {
                key: F.id,
                item: F,
                onRetry: (V) => Se(w)(F.id),
                onRemove: (V) => Se(f)(F.id)
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
            e("span", I5, a(I(Se(n).speed)), 1)
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
  const { ui_id: u, state: n } = t || {}, l = (n == null ? void 0 : n.history) || {};
  if (!u)
    return null;
  const c = l[u];
  return c && c.result === "error" && ((g = c.status) == null ? void 0 : g.status_str) === "error" ? (c.status.messages || [])[0] || "Unknown error" : null;
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
    const u = await Bt.api.fetchApi("/v2/comfygit/status");
    u.ok && (Zt.value = await u.json());
  } catch {
  }
}
async function zs() {
  var t;
  if ((t = Bt) != null && t.api)
    try {
      const u = await Bt.api.fetchApi("/v2/setup/status");
      if (u.ok) {
        const n = await u.json();
        Hs = n.state, Eo = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Us() {
  var u;
  if (Hs === "managed" || !Eo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((u = n.textContent) == null ? void 0 : u.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
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
  const u = document.createElement("div");
  u.className = "comfygit-panel-container", yt.appendChild(u), yt.addEventListener("click", (c) => {
    c.target === yt && Ds();
  });
  const n = (c) => {
    c.key === "Escape" && (Ds(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Fs({
    render: () => Bs(Z3, {
      initialView: t,
      onClose: Ds,
      onStatusUpdate: async (c) => {
        Zt.value = c, ms(), await zs(), Ns(), Us();
      }
    })
  }).mount(u), document.body.appendChild(yt);
}
function Ds() {
  yt && (yt.remove(), yt = null);
}
function o8(t) {
  ds(), dt = document.createElement("div"), dt.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  dt.style.position = "fixed", dt.style.top = `${u.bottom + 8}px`, dt.style.right = `${window.innerWidth - u.right}px`, dt.style.zIndex = "10001";
  const n = (c) => {
    dt && !dt.contains(c.target) && c.target !== t && (ds(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const l = (c) => {
    c.key === "Escape" && (ds(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), us = Fs({
    render: () => Bs(_o, {
      status: Zt.value,
      onClose: ds,
      onCommitted: (c) => {
        ds(), n8(c.success, c.message), ws().then(ms);
      }
    })
  }), us.mount(dt), document.body.appendChild(dt);
}
function ds() {
  us && (us.unmount(), us = null), dt && (dt.remove(), dt = null);
}
function n8(t, u) {
  const n = document.createElement("div"), l = t ? "#22c55e" : "#ef4444";
  n.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${l};
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
  const c = document.createElement("span");
  c.textContent = t ? "✓" : "✕", c.style.cssText = `
    color: ${l};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(c);
  const g = document.createElement("span");
  g.textContent = u, n.appendChild(g), document.body.appendChild(n), setTimeout(() => {
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
    var c, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = to, vt = document.createElement("button"), vt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", vt.innerHTML = 'Commit <span class="commit-indicator"></span>', vt.title = "Quick Commit", vt.onclick = () => o8(vt), t.appendChild(u), t.appendChild(vt), (g = (c = Bt.menu) == null ? void 0 : c.settingsGroup) != null && g.element && (Bt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), a8();
    const { loadPendingDownloads: n } = fs();
    n(), await Promise.all([ws(), zs()]), ms(), Ns(), Us(), setTimeout(Us, 100), setInterval(async () => {
      await Promise.all([ws(), zs()]), ms(), Ns();
    }, 3e4);
    const l = Bt.api;
    if (l) {
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
        const b = document.createElement("span");
        b.textContent = "Workflows updated - refresh required", w.appendChild(b);
        const k = document.createElement("button");
        k.textContent = "Refresh", k.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, k.onmouseover = () => k.style.background = "var(--comfy-input-bg)", k.onmouseout = () => k.style.background = "var(--comfy-menu-bg)", k.onclick = () => m(), w.appendChild(k);
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
        const b = document.getElementById("comfygit-error-toast");
        b && b.remove();
        const k = document.createElement("div");
        k.id = "comfygit-error-toast", k.style.cssText = `
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
        f.textContent = "⚠️", f.style.fontSize = "20px", k.appendChild(f);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const R = document.createElement("div");
        R.textContent = "Node installation failed", R.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(R);
        const C = document.createElement("div");
        C.textContent = "Dependency conflict detected", C.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(C), k.appendChild(x);
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
          k.remove(), to("debug-env");
        }, k.appendChild(P);
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
        `, O.onmouseover = () => O.style.opacity = "1", O.onmouseout = () => O.style.opacity = "0.6", O.onclick = () => k.remove(), k.appendChild(O), document.body.appendChild(k), console.log("[ComfyGit] Manager error toast displayed:", w), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && k.remove();
        }, 1e4);
      };
      l.addEventListener("comfygit:workflow-changed", async (w) => {
        const { change_type: b, workflow_name: k } = w.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${k}`), await ws(), ms();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      l.addEventListener("status", async (w) => {
        const b = w.detail != null;
        b && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), m()) : p()), v = b;
      }), console.log("[ComfyGit] Refresh notification system initialized"), l.addEventListener("cm-task-completed", (w) => {
        const b = e8(w.detail);
        b && d(b);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
