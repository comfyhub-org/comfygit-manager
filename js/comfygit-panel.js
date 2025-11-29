import { app as kt } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as o, openBlock as s, createCommentVNode as m, createElementVNode as e, renderSlot as pe, createBlock as I, resolveDynamicComponent as Qt, normalizeClass as ne, withCtx as d, toDisplayString as a, createVNode as w, createTextVNode as p, computed as D, Fragment as F, renderList as J, normalizeStyle as nt, ref as $, onMounted as Ee, watch as yt, Teleport as Re, withModifiers as $e, Transition as Ns, createSlots as Tt, withKeys as ut, onUnmounted as Ps, reactive as Xt, readonly as Us, unref as ye, withDirectives as ot, vModelText as cs, vModelRadio as Wt, vModelCheckbox as us, nextTick as Bs, vModelSelect as Gt, TransitionGroup as Os, createApp as Zt, h as Jt } from "vue";
const As = { class: "panel-layout" }, Fs = {
  key: 0,
  class: "panel-layout-header"
}, Vs = {
  key: 1,
  class: "panel-layout-search"
}, Ws = { class: "panel-layout-content" }, Gs = {
  key: 2,
  class: "panel-layout-footer"
}, js = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (r, n) => (s(), o("div", As, [
      r.$slots.header ? (s(), o("div", Fs, [
        pe(r.$slots, "header", {}, void 0, !0)
      ])) : m("", !0),
      r.$slots.search ? (s(), o("div", Vs, [
        pe(r.$slots, "search", {}, void 0, !0)
      ])) : m("", !0),
      e("div", Ws, [
        pe(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", Gs, [
        pe(r.$slots, "footer", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), Q = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [i, h] of r)
    n[i] = h;
  return n;
}, Be = /* @__PURE__ */ Q(js, [["__scopeId", "data-v-21565df9"]]), qs = {
  key: 0,
  class: "panel-title-prefix"
}, Hs = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ks = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, n) => (s(), I(Qt(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: d(() => [
        t.showPrefix ? (s(), o("span", qs, a(t.prefix), 1)) : (s(), o("span", Hs)),
        pe(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ys = /* @__PURE__ */ Q(Ks, [["__scopeId", "data-v-c3875efc"]]), Qs = ["title"], Xs = ["width", "height"], Zs = /* @__PURE__ */ Y({
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
      onClick: n[0] || (n[0] = (i) => r.$emit("click"))
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
      ])], 8, Xs))
    ], 8, Qs));
  }
}), ms = /* @__PURE__ */ Q(Zs, [["__scopeId", "data-v-6fc7f16d"]]), Js = { class: "header-left" }, eo = {
  key: 0,
  class: "header-actions"
}, to = /* @__PURE__ */ Y({
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
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Js, [
        w(Ys, { "show-prefix": t.showPrefix }, {
          default: d(() => [
            p(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), I(ms, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => r.$emit("info-click"))
        })) : m("", !0)
      ]),
      r.$slots.actions ? (s(), o("div", eo, [
        pe(r.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), Oe = /* @__PURE__ */ Q(to, [["__scopeId", "data-v-55a62cd6"]]), so = {
  key: 0,
  class: "section-title-count"
}, oo = {
  key: 1,
  class: "section-title-icon"
}, no = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, n) => (s(), I(Qt(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && r.$emit("click"))
    }, {
      default: d(() => [
        pe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", so, "(" + a(t.count) + ")", 1)) : m("", !0),
        t.clickable ? (s(), o("span", oo, a(t.expanded ? "▼" : "▸"), 1)) : m("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ke = /* @__PURE__ */ Q(no, [["__scopeId", "data-v-559361eb"]]), ao = { class: "status-grid" }, lo = { class: "status-grid__columns" }, io = { class: "status-grid__column" }, ro = { class: "status-grid__title" }, co = { class: "status-grid__column status-grid__column--right" }, uo = { class: "status-grid__title" }, mo = {
  key: 0,
  class: "status-grid__footer"
}, vo = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, n) => (s(), o("div", ao, [
      e("div", lo, [
        e("div", io, [
          e("h4", ro, a(t.leftTitle), 1),
          pe(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", co, [
          e("h4", uo, a(t.rightTitle), 1),
          pe(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", mo, [
        pe(r.$slots, "footer", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), fo = /* @__PURE__ */ Q(vo, [["__scopeId", "data-v-73b7ba3f"]]), go = {
  key: 0,
  class: "status-item__icon"
}, ho = {
  key: 1,
  class: "status-item__count"
}, po = { class: "status-item__label" }, yo = /* @__PURE__ */ Y({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, n = D(() => `status-item--${r.variant}`);
    return (i, h) => (s(), o("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", go, a(t.icon), 1)) : m("", !0),
      t.count !== void 0 ? (s(), o("span", ho, a(t.count), 1)) : m("", !0),
      e("span", po, a(t.label), 1)
    ], 2));
  }
}), tt = /* @__PURE__ */ Q(yo, [["__scopeId", "data-v-6f929183"]]), wo = { class: "issue-card__header" }, ko = { class: "issue-card__icon" }, bo = { class: "issue-card__title" }, _o = {
  key: 0,
  class: "issue-card__content"
}, $o = {
  key: 0,
  class: "issue-card__description"
}, Co = {
  key: 1,
  class: "issue-card__items"
}, xo = {
  key: 2,
  class: "issue-card__actions"
}, So = /* @__PURE__ */ Y({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, n = D(() => `issue-card--${r.severity}`);
    return (i, h) => (s(), o("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", wo, [
        e("span", ko, a(t.icon), 1),
        e("h4", bo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", _o, [
        t.description ? (s(), o("p", $o, a(t.description), 1)) : m("", !0),
        pe(i.$slots, "default", {}, void 0, !0)
      ])) : m("", !0),
      t.items && t.items.length ? (s(), o("div", Co, [
        (s(!0), o(F, null, J(t.items, (v, f) => (s(), o("div", {
          key: f,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : m("", !0),
      i.$slots.actions ? (s(), o("div", xo, [
        pe(i.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ Q(So, [["__scopeId", "data-v-df6aa348"]]), Io = ["type", "disabled"], Eo = {
  key: 0,
  class: "spinner"
}, Mo = /* @__PURE__ */ Y({
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
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => r.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Eo)) : m("", !0),
      t.loading ? m("", !0) : pe(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Io));
  }
}), ee = /* @__PURE__ */ Q(Mo, [["__scopeId", "data-v-772abe47"]]), Ro = { class: "empty-state" }, zo = {
  key: 0,
  class: "empty-icon"
}, Lo = { class: "empty-message" }, To = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, n) => (s(), o("div", Ro, [
      t.icon ? (s(), o("div", zo, a(t.icon), 1)) : m("", !0),
      e("p", Lo, a(t.message), 1),
      t.actionLabel ? (s(), I(ee, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => r.$emit("action"))
      }, {
        default: d(() => [
          p(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : m("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ Q(To, [["__scopeId", "data-v-4466284f"]]), Do = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, n) => (s(), o("span", {
      class: ne(["detail-label"]),
      style: nt({ minWidth: t.minWidth })
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Bt = /* @__PURE__ */ Q(Do, [["__scopeId", "data-v-75e9eeb8"]]), No = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, n) => (s(), o("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ Q(No, [["__scopeId", "data-v-2f186e4c"]]), Po = { class: "detail-row" }, Uo = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), o("div", Po, [
      w(Bt, { "min-width": t.labelMinWidth }, {
        default: d(() => [
          p(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), I(Yt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: d(() => [
          p(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : pe(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ce = /* @__PURE__ */ Q(Uo, [["__scopeId", "data-v-ef15664a"]]), Bo = { class: "modal-header" }, Oo = { class: "modal-body" }, Ao = { class: "status-section" }, Fo = {
  key: 0,
  class: "status-section"
}, Vo = { class: "section-header-row" }, Wo = {
  key: 0,
  class: "workflow-group"
}, Go = { class: "workflow-group-header" }, jo = { class: "workflow-group-title" }, qo = { class: "workflow-list" }, Ho = { class: "workflow-name" }, Ko = { class: "workflow-issue" }, Yo = {
  key: 1,
  class: "workflow-group"
}, Qo = { class: "workflow-group-header" }, Xo = { class: "workflow-group-title" }, Zo = { class: "workflow-list" }, Jo = { class: "workflow-name" }, en = { class: "workflow-issue" }, tn = {
  key: 2,
  class: "workflow-group"
}, sn = { class: "workflow-group-header" }, on = { class: "workflow-group-title" }, nn = { class: "workflow-list" }, an = { class: "workflow-name" }, ln = {
  key: 3,
  class: "workflow-group"
}, rn = { class: "workflow-group-header" }, dn = { class: "workflow-group-title" }, cn = { class: "workflow-list" }, un = { class: "workflow-name" }, mn = {
  key: 4,
  class: "workflow-group"
}, vn = { class: "workflow-group-header" }, fn = { class: "workflow-group-title" }, gn = { class: "workflow-list" }, hn = { class: "workflow-name" }, pn = {
  key: 5,
  class: "workflow-group"
}, yn = { class: "workflow-group-title" }, wn = { class: "expand-icon" }, kn = {
  key: 0,
  class: "workflow-list"
}, bn = { class: "workflow-name" }, _n = {
  key: 1,
  class: "status-section"
}, $n = {
  key: 0,
  class: "change-group"
}, Cn = { class: "change-group-header" }, xn = { class: "change-group-title" }, Sn = { class: "change-list" }, In = { class: "node-name" }, En = {
  key: 0,
  class: "dev-badge"
}, Mn = {
  key: 1,
  class: "change-group"
}, Rn = { class: "change-group-header" }, zn = { class: "change-group-title" }, Ln = { class: "change-list" }, Tn = { class: "node-name" }, Dn = {
  key: 0,
  class: "dev-badge"
}, Nn = {
  key: 2,
  class: "change-group"
}, Pn = { class: "change-list" }, Un = { class: "change-item" }, Bn = { class: "node-name" }, On = {
  key: 3,
  class: "change-group"
}, An = {
  key: 2,
  class: "status-section"
}, Fn = { class: "section-header-row" }, Vn = {
  key: 0,
  class: "drift-item"
}, Wn = { class: "drift-list" }, Gn = {
  key: 0,
  class: "drift-list-more"
}, jn = {
  key: 1,
  class: "drift-item"
}, qn = { class: "drift-list" }, Hn = {
  key: 0,
  class: "drift-list-more"
}, Kn = {
  key: 2,
  class: "drift-item"
}, Yn = {
  key: 3,
  class: "drift-item"
}, Qn = {
  key: 3,
  class: "status-section"
}, Xn = { class: "info-box" }, Zn = { class: "drift-list" }, Jn = {
  key: 0,
  class: "drift-list-more"
}, ea = {
  key: 4,
  class: "status-section"
}, ta = { class: "warning-box" }, sa = {
  key: 5,
  class: "empty-state-inline"
}, oa = { class: "modal-actions" }, na = /* @__PURE__ */ Y({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const r = t, n = $(!1);
    Ee(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), yt(() => r.show, (E, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", E);
    }, { immediate: !0 });
    const i = D(() => {
      var E, _, R;
      return ((R = (_ = (E = r.status) == null ? void 0 : E.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), h = D(() => {
      var E, _, R;
      return ((R = (_ = (E = r.status) == null ? void 0 : E.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), v = D(() => {
      var E, _, R;
      return ((R = (_ = (E = r.status) == null ? void 0 : E.workflows) == null ? void 0 : _.synced) == null ? void 0 : R.filter((b) => {
        var k, N, x;
        const S = (x = (N = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : x.find((L) => L.name === b);
        return !S || S.status !== "broken";
      })) || [];
    }), f = D(() => {
      var E, _, R, b, S;
      return (E = r.status) != null && E.workflows ? (((_ = r.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((R = r.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((b = r.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((S = r.status.workflows.synced) == null ? void 0 : S.length) ?? 0) > 0 : !1;
    }), u = D(() => {
      var _, R, b;
      const E = (_ = r.status) == null ? void 0 : _.git_changes;
      return E ? (((R = E.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((b = E.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || E.workflow_changes || E.has_other_changes : !1;
    }), l = D(() => {
      var E, _, R, b, S, k;
      return !f.value && !u.value && ((_ = (E = r.status) == null ? void 0 : E.comparison) == null ? void 0 : _.is_synced) && (((R = r.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((k = (S = (b = r.status) == null ? void 0 : b.comparison) == null ? void 0 : S.disabled_nodes) == null ? void 0 : k.length) ?? 0) === 0;
    }), g = D(() => {
      var _, R;
      const E = (R = (_ = r.status) == null ? void 0 : _.git_changes) == null ? void 0 : R.workflow_changes;
      return E ? typeof E == "number" ? E : Object.keys(E).length : 0;
    });
    function y(E) {
      return typeof E == "string" ? E : E.name;
    }
    function c(E) {
      return typeof E == "object" && E.is_development === !0;
    }
    return (E, _) => {
      var R, b, S, k, N, x, L, V, K, te, W, T, M, B, P, H, re, X, se, O, C, ae;
      return s(), I(Re, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[6] || (_[6] = (oe) => E.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[5] || (_[5] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Bo, [
              _[7] || (_[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (oe) => E.$emit("close"))
              }, "✕")
            ]),
            e("div", Oo, [
              e("div", Ao, [
                w(Ke, { level: "4" }, {
                  default: d(() => [..._[8] || (_[8] = [
                    p("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(Ce, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              f.value ? (s(), o("div", Fo, [
                e("div", Vo, [
                  w(Ke, { level: "4" }, {
                    default: d(() => [..._[9] || (_[9] = [
                      p("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (oe) => E.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Wo, [
                  e("div", Go, [
                    _[10] || (_[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", jo, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", qo, [
                    (s(!0), o(F, null, J(i.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ho, a(oe.name), 1),
                      e("span", Ko, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                h.value.length ? (s(), o("div", Yo, [
                  e("div", Qo, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Xo, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", Zo, [
                    (s(!0), o(F, null, J(h.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Jo, a(oe.name), 1),
                      e("span", en, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (b = (R = t.status.workflows) == null ? void 0 : R.new) != null && b.length ? (s(), o("div", tn, [
                  e("div", sn, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", on, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", nn, [
                    (s(!0), o(F, null, J(t.status.workflows.new, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", an, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (k = (S = t.status.workflows) == null ? void 0 : S.modified) != null && k.length ? (s(), o("div", ln, [
                  e("div", rn, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", dn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", cn, [
                    (s(!0), o(F, null, J(t.status.workflows.modified, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", un, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (x = (N = t.status.workflows) == null ? void 0 : N.deleted) != null && x.length ? (s(), o("div", mn, [
                  e("div", vn, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", fn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", gn, [
                    (s(!0), o(F, null, J(t.status.workflows.deleted, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", hn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                v.value.length ? (s(), o("div", pn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[2] || (_[2] = (oe) => n.value = !n.value)
                  }, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", yn, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", wn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", kn, [
                    (s(!0), o(F, null, J(v.value, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", bn, a(oe), 1)
                    ]))), 128))
                  ])) : m("", !0)
                ])) : m("", !0)
              ])) : m("", !0),
              u.value ? (s(), o("div", _n, [
                w(Ke, { level: "4" }, {
                  default: d(() => [..._[16] || (_[16] = [
                    p("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (V = (L = t.status.git_changes) == null ? void 0 : L.nodes_added) != null && V.length ? (s(), o("div", $n, [
                  e("div", Cn, [
                    _[17] || (_[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", xn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (s(!0), o(F, null, J(t.status.git_changes.nodes_added, (oe) => (s(), o("div", {
                      key: y(oe),
                      class: "change-item"
                    }, [
                      e("span", In, a(y(oe)), 1),
                      c(oe) ? (s(), o("span", En, "dev")) : m("", !0)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (te = (K = t.status.git_changes) == null ? void 0 : K.nodes_removed) != null && te.length ? (s(), o("div", Mn, [
                  e("div", Rn, [
                    _[18] || (_[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", zn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ln, [
                    (s(!0), o(F, null, J(t.status.git_changes.nodes_removed, (oe) => (s(), o("div", {
                      key: y(oe),
                      class: "change-item"
                    }, [
                      e("span", Tn, a(y(oe)), 1),
                      c(oe) ? (s(), o("span", Dn, "dev")) : m("", !0)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (W = t.status.git_changes) != null && W.workflow_changes ? (s(), o("div", Nn, [
                  _[19] || (_[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Pn, [
                    e("div", Un, [
                      e("span", Bn, a(g.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : m("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (s(), o("div", On, [..._[20] || (_[20] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : m("", !0)
              ])) : m("", !0),
              (M = t.status.comparison) != null && M.is_synced ? m("", !0) : (s(), o("div", An, [
                e("div", Fn, [
                  w(Ke, { level: "4" }, {
                    default: d(() => [..._[21] || (_[21] = [
                      p("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (oe) => E.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[22] || (_[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (P = (B = t.status.comparison) == null ? void 0 : B.missing_nodes) != null && P.length ? (s(), o("div", Vn, [
                  w(Ce, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Wn, [
                    (s(!0), o(F, null, J(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Gn, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : m("", !0)
                  ])
                ])) : m("", !0),
                (re = (H = t.status.comparison) == null ? void 0 : H.extra_nodes) != null && re.length ? (s(), o("div", jn, [
                  w(Ce, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", qn, [
                    (s(!0), o(F, null, J(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Hn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : m("", !0)
                  ])
                ])) : m("", !0),
                (se = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && se.length ? (s(), o("div", Kn, [
                  w(Ce, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : m("", !0),
                (O = t.status.comparison) != null && O.packages_in_sync ? m("", !0) : (s(), o("div", Yn, [
                  w(Ce, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (C = t.status.comparison) == null ? void 0 : C.disabled_nodes) != null && ae.length ? (s(), o("div", Qn, [
                w(Ke, { level: "4" }, {
                  default: d(() => [..._[23] || (_[23] = [
                    p("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Xn, [
                  _[24] || (_[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Zn, [
                  (s(!0), o(F, null, J(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (s(), o("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + a(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Jn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : m("", !0)
                ])
              ])) : m("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", ea, [
                w(Ke, { level: "4" }, {
                  default: d(() => [..._[25] || (_[25] = [
                    p("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ta, [
                  _[26] || (_[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[27] || (_[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : m("", !0),
              l.value ? (s(), o("div", sa, [..._[28] || (_[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : m("", !0)
            ]),
            e("div", oa, [
              w(ee, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (oe) => E.$emit("close"))
              }, {
                default: d(() => [..._[29] || (_[29] = [
                  p(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : m("", !0)
      ]);
    };
  }
}), aa = /* @__PURE__ */ Q(na, [["__scopeId", "data-v-c67eed17"]]), la = { class: "health-section-header" }, ia = { class: "suggestions-content" }, ra = { class: "suggestions-text" }, da = { style: { "margin-top": "var(--cg-space-3)" } }, ca = {
  key: 1,
  class: "no-issues-text"
}, ua = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models"],
  setup(t, { expose: r, emit: n }) {
    const i = t, h = $(!1), v = $(!1);
    function f() {
      h.value = !0;
    }
    function u() {
      h.value = !1, g("view-workflows");
    }
    function l() {
      h.value = !1, g("view-nodes");
    }
    const g = n, y = $(!1), c = D(() => {
      const B = i.status.workflows.analyzed || [], P = B.filter(
        (H) => H.unresolved_models_count > 0 || H.ambiguous_models_count > 0
      );
      return P.length === 0 && i.status.missing_models_count > 0 ? B.filter((H) => H.sync_state === "synced") : P;
    });
    function E() {
      const B = c.value;
      B.length !== 0 && (y.value = !0, g("repair-missing-models", B.map((P) => P.name)));
    }
    function _() {
      y.value = !1;
    }
    r({ resetRepairingState: _ });
    const R = D(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), b = D(() => i.status.has_changes), S = D(() => {
      const B = i.status.git_changes;
      return B.nodes_added.length > 0 || B.nodes_removed.length > 0 || B.workflow_changes;
    }), k = D(() => i.status.has_changes || R.value), N = D(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), x = D(() => i.status.git_changes.has_other_changes), L = D(() => {
      var B;
      return ((B = i.status.workflows.analyzed) == null ? void 0 : B.filter((P) => P.status === "broken")) || [];
    }), V = D(() => {
      var B;
      return ((B = i.status.workflows.analyzed) == null ? void 0 : B.filter(
        (P) => P.has_path_sync_issues && !P.has_issues
      )) || [];
    }), K = D(() => L.value.length > 0), te = D(() => K.value || V.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced), W = D(() => {
      const B = [];
      return i.status.workflows.new.length > 0 && B.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && B.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && B.push(`${i.status.workflows.deleted.length} deleted`), B.length > 0 ? `${B.join(", ")} workflow${B.length === 1 && !B[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), T = D(() => {
      var H, re;
      const B = [], P = i.status.comparison;
      return (H = P.missing_nodes) != null && H.length && B.push(`${P.missing_nodes.length} missing node${P.missing_nodes.length === 1 ? "" : "s"}`), (re = P.extra_nodes) != null && re.length && B.push(`${P.extra_nodes.length} untracked node${P.extra_nodes.length === 1 ? "" : "s"}`), B.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${B.join(" and ")}.`;
    }), M = D(() => {
      var H, re;
      const B = [], P = i.status.comparison;
      return (H = P.extra_nodes) != null && H.length && (P.extra_nodes.slice(0, 3).forEach((X) => {
        B.push(`Untracked: ${X}`);
      }), P.extra_nodes.length > 3 && B.push(`...and ${P.extra_nodes.length - 3} more untracked`)), (re = P.missing_nodes) != null && re.length && (P.missing_nodes.slice(0, 3).forEach((X) => {
        B.push(`Missing: ${X}`);
      }), P.missing_nodes.length > 3 && B.push(`...and ${P.missing_nodes.length - 3} more missing`)), B;
    });
    return (B, P) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, { title: "STATUS" })
        ]),
        content: d(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: P[1] || (P[1] = (H) => v.value = !0),
            onMouseleave: P[2] || (P[2] = (H) => v.value = !1)
          }, [
            e("div", la, [
              w(Ke, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: d(() => [...P[9] || (P[9] = [
                  p(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(Ns, { name: "fade" }, {
                default: d(() => [
                  v.value ? (s(), I(ee, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: d(() => [...P[10] || (P[10] = [
                      p(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : m("", !0)
                ]),
                _: 1
              })
            ]),
            w(fo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Tt({
              left: d(() => [
                t.status.workflows.new.length ? (s(), I(tt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : m("", !0),
                t.status.workflows.modified.length ? (s(), I(tt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : m("", !0),
                t.status.workflows.deleted.length ? (s(), I(tt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : m("", !0),
                w(tt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: R.value
                }, null, 8, ["count", "separator"])
              ]),
              right: d(() => [
                t.status.git_changes.nodes_added.length ? (s(), I(tt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : m("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), I(tt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : m("", !0),
                t.status.git_changes.workflow_changes ? (s(), I(tt, {
                  key: 2,
                  icon: "●",
                  count: N.value,
                  label: N.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : m("", !0),
                x.value ? (s(), I(tt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : m("", !0),
                b.value && !S.value && !x.value ? (s(), I(tt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : m("", !0),
                b.value ? m("", !0) : (s(), I(tt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              k.value ? {
                name: "footer",
                fn: d(() => [
                  P[12] || (P[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ia, [
                    e("span", ra, a(W.value), 1),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: P[0] || (P[0] = (H) => B.$emit("commit-changes"))
                    }, {
                      default: d(() => [...P[11] || (P[11] = [
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
          t.status.is_detached_head ? (s(), I(pt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: P[3] || (P[3] = (H) => B.$emit("create-branch"))
              }, {
                default: d(() => [...P[13] || (P[13] = [
                  p(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : m("", !0),
          e("div", da, [
            w(Ke, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: d(() => [...P[14] || (P[14] = [
                p(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            te.value ? (s(), o(F, { key: 0 }, [
              L.value.length > 0 ? (s(), I(pt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${L.value.length} workflow${L.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: L.value.map((H) => `${H.name} — ${H.issue_summary}`)
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: P[4] || (P[4] = (H) => B.$emit("view-workflows"))
                  }, {
                    default: d(() => [...P[15] || (P[15] = [
                      p(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : m("", !0),
              V.value.length > 0 ? (s(), I(pt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${V.value.length} workflow${V.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: V.value.map((H) => `${H.name} — ${H.models_needing_path_sync_count} model path${H.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: P[5] || (P[5] = (H) => B.$emit("view-workflows"))
                  }, {
                    default: d(() => [...P[16] || (P[16] = [
                      p(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : m("", !0),
              t.status.missing_models_count > 0 && !K.value ? (s(), I(pt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    disabled: y.value,
                    onClick: E
                  }, {
                    default: d(() => [
                      p(a(y.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  w(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: P[6] || (P[6] = (H) => B.$emit("view-workflows"))
                  }, {
                    default: d(() => [...P[17] || (P[17] = [
                      p(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : m("", !0),
              t.status.comparison.is_synced ? m("", !0) : (s(), I(pt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: T.value,
                items: M.value
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: d(() => [...P[18] || (P[18] = [
                      p(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: P[7] || (P[7] = (H) => B.$emit("view-nodes"))
                  }, {
                    default: d(() => [...P[19] || (P[19] = [
                      p(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : k.value ? (s(), o("span", ca, "No issues")) : (s(), I(Je, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      w(aa, {
        show: h.value,
        status: t.status,
        onClose: P[8] || (P[8] = (H) => h.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: l
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ma = /* @__PURE__ */ Q(ua, [["__scopeId", "data-v-5f863725"]]), va = ["type", "value", "placeholder", "disabled"], fa = /* @__PURE__ */ Y({
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
    const i = t, h = n, v = $(null);
    function f(u) {
      const l = u.target.value;
      h("update:modelValue", l);
    }
    return Ee(() => {
      i.autoFocus && v.value && v.value.focus();
    }), r({
      focus: () => {
        var u;
        return (u = v.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = v.value) == null ? void 0 : u.blur();
      }
    }), (u, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: f,
      onKeyup: [
        l[0] || (l[0] = ut((g) => u.$emit("enter"), ["enter"])),
        l[1] || (l[1] = ut((g) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (g) => u.$emit("focus")),
      onBlur: l[3] || (l[3] = (g) => u.$emit("blur"))
    }, null, 42, va));
  }
}), At = /* @__PURE__ */ Q(fa, [["__scopeId", "data-v-0380d08f"]]), ga = { class: "branch-create-form" }, ha = { class: "form-actions" }, pa = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const n = r, i = $(""), h = D(() => {
      const u = i.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function v() {
      h.value && (n("create", i.value.trim()), i.value = "");
    }
    function f() {
      i.value = "", n("cancel");
    }
    return (u, l) => (s(), o("div", ga, [
      w(At, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (g) => i.value = g),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: f
      }, null, 8, ["modelValue"]),
      e("div", ha, [
        w(ee, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: v
        }, {
          default: d(() => [...l[1] || (l[1] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(ee, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: d(() => [...l[2] || (l[2] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ya = /* @__PURE__ */ Q(pa, [["__scopeId", "data-v-7c500394"]]), wa = { class: "branch-list-item__indicator" }, ka = { class: "branch-list-item__name" }, ba = {
  key: 0,
  class: "branch-list-item__actions"
}, _a = {
  key: 0,
  class: "branch-list-item__current-label"
}, $a = /* @__PURE__ */ Y({
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
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && r.$emit("click"))
    }, [
      e("span", wa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ka, a(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", ba, [
        pe(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", _a, " current ")) : m("", !0)
      ])) : m("", !0)
    ], 2));
  }
}), Ca = /* @__PURE__ */ Q($a, [["__scopeId", "data-v-c6581a24"]]), xa = {
  key: 2,
  class: "branch-list"
}, Sa = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: r }) {
    const n = r, i = $(!1);
    function h(f) {
      n("create", f), v();
    }
    function v() {
      i.value = !1;
    }
    return (f, u) => (s(), I(Be, null, {
      header: d(() => [
        w(Oe, { title: "BRANCHES" }, {
          actions: d(() => [
            i.value ? m("", !0) : (s(), I(ee, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (l) => i.value = !0)
            }, {
              default: d(() => [...u[1] || (u[1] = [
                p(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: d(() => [
        i.value ? (s(), I(ya, {
          key: 0,
          onCreate: h,
          onCancel: v
        })) : m("", !0),
        t.branches.length === 0 ? (s(), I(Je, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", xa, [
          (s(!0), o(F, null, J(t.branches, (l) => (s(), I(Ca, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: d(() => [
              l.is_current ? m("", !0) : (s(), I(ee, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (g) => f.$emit("delete", l.name)
              }, {
                default: d(() => [...u[2] || (u[2] = [
                  p(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? m("", !0) : (s(), I(ee, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (g) => f.$emit("switch", l.name)
              }, {
                default: d(() => [...u[3] || (u[3] = [
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
}), Ia = /* @__PURE__ */ Q(Sa, [["__scopeId", "data-v-86784ddd"]]), Ea = { class: "commit-list" }, Ma = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (r, n) => (s(), o("div", Ea, [
      pe(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ra = /* @__PURE__ */ Q(Ma, [["__scopeId", "data-v-8c5ee761"]]), za = { class: "commit-hash" }, La = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, n = D(() => r.hash.slice(0, r.length));
    return (i, h) => (s(), o("span", za, a(n.value), 1));
  }
}), vs = /* @__PURE__ */ Q(La, [["__scopeId", "data-v-7c333cc6"]]), Ta = { class: "commit-message" }, Da = { class: "commit-date" }, Na = /* @__PURE__ */ Y({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = t, i = r;
    function h() {
      n.clickable && i("click");
    }
    return (v, f) => (s(), o("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      w(vs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ta, a(t.message), 1),
      e("span", Da, a(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = $e(() => {
        }, ["stop"]))
      }, [
        pe(v.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), Pa = /* @__PURE__ */ Q(Na, [["__scopeId", "data-v-dd7c621b"]]), Ua = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, n) => (s(), I(Be, null, {
      header: d(() => [
        w(Oe, { title: "HISTORY" })
      ]),
      content: d(() => [
        t.commits.length === 0 ? (s(), I(Je, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), I(Ra, { key: 1 }, {
          default: d(() => [
            (s(!0), o(F, null, J(t.commits, (i) => (s(), I(Pa, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (h) => r.$emit("select", i)
            }, {
              actions: d(() => [
                w(ee, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (h) => r.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: d(() => [...n[0] || (n[0] = [
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
}), Ba = /* @__PURE__ */ Q(Ua, [["__scopeId", "data-v-981c3c64"]]), as = [
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
], Oa = {
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
], Aa = [
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
], Pt = [
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
], Fa = [
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
], Ut = [
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
], fe = {
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
  getWorkflows: async () => (await ve(400), as),
  getWorkflowDetails: async (t) => (await ve(300), Oa[t] || {
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
  getWorkspaceModels: async () => (await ve(400), Aa),
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
    const t = Pt.filter((n) => n.installed), r = Pt.filter((n) => !n.installed);
    return {
      nodes: Pt,
      total_count: Pt.length,
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
  getEnvironmentLogs: async (t, r) => (await ve(250), (t ? Ut.filter((i) => i.level === t) : Ut).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await ve(300);
    const n = [...Ut, ...Ut.map((h) => ({
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
      synced: as.filter((t) => t.status === "synced").map((t) => t.name),
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
  getCommitHistory: async (t = 10) => (await ve(300), Fa.slice(0, t)),
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
   * Get Pull Preview - Returns preview with optional workflow conflicts (V2)
   * GET /v2/comfygit/remotes/{name}/pull-preview
   *
   * Test scenarios by remote name:
   * - "origin" - Returns preview WITH workflow conflicts (default for testing)
   * - "upstream" - Returns preview WITHOUT conflicts (clean pull)
   * - Any other - Returns preview with workflow conflicts
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
          modified: ["flux-schnell.json", "sdxl-turbo.json"],
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
      workflow_conflicts: [
        {
          name: "flux-schnell",
          conflict_type: "both_modified",
          base_hash: "abc12345",
          target_hash: "def67890"
        },
        {
          name: "sdxl-turbo",
          conflict_type: "both_modified",
          base_hash: "11111111",
          target_hash: "22222222"
        }
      ]
    } : {
      ...r,
      has_conflicts: !1,
      workflow_conflicts: []
    };
  },
  /**
   * Validate Merge - Check node version compatibility after workflow resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/validate-merge
   */
  validateMerge: async (t, r) => {
    await ve(400);
    const n = r.some((v) => v.resolution === "take_base"), i = r.some((v) => v.resolution === "take_target");
    return n && i ? {
      is_compatible: !1,
      node_conflicts: [
        {
          node_id: "rgthree-comfy",
          node_name: "rgthree's ComfyUI Nodes",
          base_version: "2.0.0",
          target_version: "1.5.0",
          chosen_version: "1.5.0",
          chosen_reason: "Required by sdxl-turbo (theirs)",
          affected_workflows: [
            { name: "flux-schnell", source: "base", required_version: "2.0.0" },
            { name: "sdxl-turbo", source: "target", required_version: "1.5.0" }
          ]
        }
      ],
      warnings: []
    } : {
      is_compatible: !0,
      node_conflicts: [],
      warnings: i ? ["Model 'flux-dev.safetensors' has no download source"] : []
    };
  },
  /**
   * Pull from Remote - Execute pull with optional conflict resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/pull
   */
  pullFromRemote: async (t, r) => (await ve(1500), console.log(`[MOCK] Pulling from ${t} with options:`, r), r.resolutions && Math.random() < 0.1 ? {
    status: "error",
    pull_output: "",
    sync_result: { nodes_installed: [], nodes_removed: [], models_queued: 0, errors: [] },
    rolled_back: !0,
    error: "Simulated sync failure - merge rolled back"
  } : {
    status: "success",
    pull_output: "Already up to date.",
    sync_result: {
      nodes_installed: r.resolutions ? ["comfyui-animatediff"] : [],
      nodes_removed: [],
      models_queued: 0,
      errors: []
    },
    rolled_back: !1,
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
    const i = [], h = [];
    return r.forEach((v, f) => {
      v.action === "install" && v.package_id && i.push(v.package_id);
    }), n.forEach((v, f) => {
      v.action === "download" && v.url ? h.push({
        filename: f,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${f}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: i,
      models_to_download: h,
      estimated_time_seconds: i.length * 30 + h.length * 120
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
  },
  // Export Validation - shows warnings for models without sources
  validateExport: async () => (await ve(400), {
    can_export: !0,
    blocking_issues: [],
    warnings: {
      models_without_sources: [
        {
          filename: "sd_xl_base_1.0.safetensors",
          hash: "abc123def456",
          workflows: ["flux-dev-img2img.json", "sdxl-lightning.json"]
        },
        {
          filename: "controlnet_openpose.safetensors",
          hash: "xyz789ghi012",
          workflows: ["pose-to-image.json"]
        },
        {
          filename: "custom_lora_v2.safetensors",
          hash: "lmn345opq678",
          workflows: ["flux-dev-img2img.json"]
        },
        {
          filename: "vae_ft_mse.pt",
          hash: "rst901uvw234",
          workflows: ["sdxl-lightning.json", "pose-to-image.json", "upscale-workflow.json"]
        }
      ]
    }
  }),
  // Mock for blocked export (call this variant to test blocked UI)
  validateExportBlocked: async () => (await ve(400), {
    can_export: !1,
    blocking_issues: [
      {
        type: "uncommitted_workflows",
        message: "Cannot export with uncommitted workflow changes",
        details: ["new-workflow.json", "modified-portrait.json", "another-change.json"]
      },
      {
        type: "unresolved_issues",
        message: "Cannot export - workflows have unresolved issues",
        details: []
      }
    ],
    warnings: {
      models_without_sources: []
    }
  }),
  exportEnvWithForce: async (t) => {
    await ve(800);
    const r = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      path: t || `/home/user/exports/production_export_${r}.tar.gz`,
      models_without_sources: 4
    };
  }
};
function ve(t) {
  return new Promise((r) => setTimeout(r, t));
}
function Ct() {
  return !0;
}
function ze() {
  const t = $(!1), r = $(null);
  async function n(U, j) {
    var Qe;
    if (!((Qe = window.app) != null && Qe.api))
      throw new Error("ComfyUI API not available");
    const de = await window.app.api.fetchApi(U, j);
    if (!de.ok) {
      const it = await de.json().catch(() => ({}));
      throw new Error(it.error || it.message || `Request failed: ${de.status}`);
    }
    return de.json();
  }
  async function i(U = !1) {
    return fe.getStatus();
  }
  async function h(U, j = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: U, allow_issues: j })
    });
  }
  async function v(U = 10, j = 0) {
    {
      const de = await fe.getCommitHistory(U);
      return {
        commits: de,
        total: de.length,
        offset: j
      };
    }
  }
  async function f(U) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: U })
    });
  }
  async function u() {
    return fe.validateExport();
  }
  async function l(U) {
    return fe.exportEnvWithForce(U);
  }
  async function g() {
    return fe.getBranches();
  }
  async function y(U) {
    return n(`/v2/comfygit/commit/${U}`);
  }
  async function c(U, j = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: U, force: j })
    });
  }
  async function E(U, j = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: U, start_point: j })
    });
  }
  async function _(U, j = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: U, force: j })
    });
  }
  async function R(U, j = !1) {
    return await fe.deleteBranch(U), { status: "success" };
  }
  async function b() {
    return fe.getEnvironments();
  }
  async function S(U) {
    return fe.switchEnvironment(U);
  }
  async function k() {
    return null;
  }
  async function N(U) {
    return await fe.createEnvironment(U.name, U.torch_backend || "auto"), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function x() {
    return { state: "idle", message: "No creation in progress" };
  }
  async function L(U = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function V(U) {
    return await fe.deleteEnvironment(U), { status: "success" };
  }
  async function K(U = !1) {
    return fe.getWorkflows();
  }
  async function te(U) {
    return fe.getWorkflowDetails(U);
  }
  async function W(U) {
    return fe.resolveWorkflow(U);
  }
  async function T(U, j, de) {
    return await fe.installWorkflowDeps(U, j, de), { status: "success" };
  }
  async function M(U, j, de) {
    return fe.setModelImportance(U, j, de);
  }
  async function B() {
    return fe.getEnvironmentModels();
  }
  async function P() {
    return fe.getWorkspaceModels();
  }
  async function H(U) {
    return fe.getModelDetails(U);
  }
  async function re(U) {
    return console.log(`[MOCK] Opening file location: ${U}`), { status: "success" };
  }
  async function X(U, j) {
    return await fe.updateModelSource(U, j), { status: "success", source_type: "custom" };
  }
  async function se(U, j) {
    return { status: "success" };
  }
  async function O(U) {
    return fe.deleteModel(U);
  }
  async function C(U) {
    return await fe.downloadModel(U), { status: "success" };
  }
  async function ae() {
    return { status: "success", changes: 0 };
  }
  async function oe() {
    return { path: "~/comfygit/models" };
  }
  async function xe(U) {
    return { status: "success", path: U, models_indexed: 10 };
  }
  async function be() {
    return fe.getConfig();
  }
  async function Le(U) {
    return fe.updateConfig(U);
  }
  async function Ae(U, j) {
    return fe.getEnvironmentLogs(U, j);
  }
  async function ce(U, j) {
    return fe.getWorkspaceLogs(U, j);
  }
  async function Fe() {
    return fe.getNodes();
  }
  async function ke(U) {
    return { status: "success", message: `Node '${U}' tracked as development` };
  }
  async function Te(U) {
    return await fe.installNode(U), { status: "success" };
  }
  async function Ge(U) {
    return await fe.updateNode(U), { status: "success" };
  }
  async function et(U) {
    return await fe.uninstallNode(U), { status: "success" };
  }
  async function he() {
    return fe.getRemotes();
  }
  async function je(U, j) {
    return await fe.addRemote(U, j), { status: "success", remote_name: U };
  }
  async function qe(U) {
    return await fe.removeRemote(U), { status: "success", remote_name: U };
  }
  async function He(U, j, de) {
    return await fe.updateRemoteUrl(U, j, de), { status: "success", remote_name: U };
  }
  async function mt(U) {
    return await fe.fetchRemote(U), { status: "success", remote_name: U };
  }
  async function me(U) {
    return fe.getRemoteSyncStatus(U);
  }
  async function De(U = "skip", j = !0) {
    return await new Promise((de) => setTimeout(de, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function vt(U, j) {
    return fe.getPullPreview(U);
  }
  async function lt(U, j = {}) {
    return fe.pullFromRemote(U, j);
  }
  async function Se(U, j) {
    return fe.getPushPreview(U);
  }
  async function ft(U, j = {}) {
    return fe.pushToRemote(U, j);
  }
  async function q(U, j) {
    return fe.validateMerge(U, j);
  }
  async function A(U) {
    const j = {
      success: 0,
      failed: []
    };
    for (const de of U)
      try {
        await W(de), j.success++;
      } catch (Qe) {
        j.failed.push({
          name: de,
          error: Qe instanceof Error ? Qe.message : "Unknown error"
        });
      }
    return j;
  }
  async function Z(U) {
    return await new Promise((j) => setTimeout(j, 500)), {
      comfyui_version: "v0.3.8",
      comfyui_version_type: "release",
      total_models: 3,
      models_locally_available: 1,
      models_needing_download: 1,
      models_without_sources: 1,
      models: [],
      total_nodes: 5,
      registry_nodes: 4,
      dev_nodes: 1,
      git_nodes: 0,
      nodes: [],
      total_workflows: 2,
      workflows: [],
      needs_model_downloads: !0,
      needs_node_installs: !0,
      download_strategy_recommendation: "required"
    };
  }
  async function ge(U) {
    return await new Promise((j) => setTimeout(j, 200)), U === "existing-env" ? { valid: !1, error: "Environment 'existing-env' already exists" } : U.includes("/") || U.includes(" ") ? { valid: !1, error: "Name contains invalid characters" } : { valid: !0, name: U };
  }
  async function Ie(U, j, de, Qe) {
    return await new Promise((it) => setTimeout(it, 300)), { status: "started", message: `Importing environment '${j}'...` };
  }
  async function Ne() {
    return { state: "idle", message: "No import in progress" };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: i,
    commit: h,
    getHistory: v,
    exportEnv: f,
    validateExport: u,
    exportEnvWithForce: l,
    // Git Operations
    getBranches: g,
    getCommitDetail: y,
    checkout: c,
    createBranch: E,
    switchBranch: _,
    deleteBranch: R,
    // Environment Management
    getEnvironments: b,
    switchEnvironment: S,
    getSwitchProgress: k,
    createEnvironment: N,
    getCreateProgress: x,
    getComfyUIReleases: L,
    deleteEnvironment: V,
    // Workflow Management
    getWorkflows: K,
    getWorkflowDetails: te,
    resolveWorkflow: W,
    installWorkflowDeps: T,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: B,
    getWorkspaceModels: P,
    getModelDetails: H,
    openFileLocation: re,
    addModelSource: X,
    removeModelSource: se,
    deleteModel: O,
    downloadModel: C,
    scanWorkspaceModels: ae,
    getModelsDirectory: oe,
    setModelsDirectory: xe,
    // Settings
    getConfig: be,
    updateConfig: Le,
    // Debug/Logs
    getEnvironmentLogs: Ae,
    getWorkspaceLogs: ce,
    // Node Management
    getNodes: Fe,
    trackNodeAsDev: ke,
    installNode: Te,
    updateNode: Ge,
    uninstallNode: et,
    // Git Remotes
    getRemotes: he,
    addRemote: je,
    removeRemote: qe,
    updateRemoteUrl: He,
    fetchRemote: mt,
    getRemoteSyncStatus: me,
    // Push/Pull
    getPullPreview: vt,
    pullFromRemote: lt,
    getPushPreview: Se,
    pushToRemote: ft,
    validateMerge: q,
    // Environment Sync
    syncEnvironmentManually: De,
    // Workflow Repair
    repairWorkflowModels: A,
    // Import Operations
    previewTarballImport: Z,
    validateEnvironmentName: ge,
    executeImport: Ie,
    getImportProgress: Ne
  };
}
async function xt(t, r = {}, n = 5e3) {
  const i = new AbortController(), h = setTimeout(() => i.abort(), n);
  try {
    const v = await fetch(t, {
      ...r,
      signal: i.signal
    });
    return clearTimeout(h), v;
  } catch (v) {
    throw clearTimeout(h), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function gs() {
  const t = $(null);
  async function r() {
    try {
      const f = await xt(
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
  async function n() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const f = await xt(
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
  async function i() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const f = await xt(
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
  async function v() {
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
    getStatus: i,
    restart: h,
    kill: v
  };
}
const Va = { class: "base-modal-header" }, Wa = {
  key: 0,
  class: "base-modal-title"
}, Ga = { class: "base-modal-body" }, ja = {
  key: 0,
  class: "base-modal-loading"
}, qa = {
  key: 1,
  class: "base-modal-error"
}, Ha = {
  key: 0,
  class: "base-modal-footer"
}, Ka = /* @__PURE__ */ Y({
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
    const n = t, i = r;
    function h() {
      n.closeOnOverlayClick && i("close");
    }
    function v(f) {
      f.key === "Escape" && i("close");
    }
    return Ee(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Ps(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (f, u) => (s(), I(Re, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: u[1] || (u[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Va, [
            pe(f.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Wa, a(t.title), 1)) : m("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (l) => f.$emit("close"))
            }, [...u[2] || (u[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : m("", !0)
          ]),
          e("div", Ga, [
            t.loading ? (s(), o("div", ja, "Loading...")) : t.error ? (s(), o("div", qa, a(t.error), 1)) : pe(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (s(), o("div", Ha, [
            pe(f.$slots, "footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 2)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ Q(Ka, [["__scopeId", "data-v-2125a0e6"]]), Ya = ["type", "disabled"], Qa = {
  key: 0,
  class: "spinner"
}, Xa = /* @__PURE__ */ Y({
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
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => r.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Qa)) : m("", !0),
      pe(r.$slots, "default", {}, void 0, !0)
    ], 10, Ya));
  }
}), ie = /* @__PURE__ */ Q(Xa, [["__scopeId", "data-v-f3452606"]]), Za = {
  key: 0,
  class: "base-title-count"
}, Ja = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, n) => (s(), I(Qt(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: d(() => [
        pe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Za, "(" + a(t.count) + ")", 1)) : m("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rt = /* @__PURE__ */ Q(Ja, [["__scopeId", "data-v-5a01561d"]]), el = ["value", "disabled"], tl = {
  key: 0,
  value: "",
  disabled: ""
}, sl = ["value"], ol = {
  key: 0,
  class: "base-select-error"
}, nl = /* @__PURE__ */ Y({
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
    function r(i) {
      return typeof i == "string" ? i : i.value;
    }
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, h) => (s(), o("div", {
      class: ne(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ne(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (v) => i.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", tl, a(t.placeholder), 1)) : m("", !0),
        (s(!0), o(F, null, J(t.options, (v) => (s(), o("option", {
          key: r(v),
          value: r(v)
        }, a(n(v)), 9, sl))), 128))
      ], 42, el),
      t.error ? (s(), o("span", ol, a(t.error), 1)) : m("", !0)
    ], 2));
  }
}), al = /* @__PURE__ */ Q(nl, [["__scopeId", "data-v-7436d745"]]), ll = { class: "popover-header" }, il = { class: "popover-title" }, rl = { class: "popover-content" }, dl = {
  key: 0,
  class: "popover-actions"
}, cl = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, n) => (s(), I(Re, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: nt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", ll, [
            e("h4", il, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", rl, [
            pe(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", dl, [
            pe(r.$slots, "actions", {}, void 0, !0)
          ])) : m("", !0)
        ], 4)
      ])) : m("", !0)
    ]));
  }
}), at = /* @__PURE__ */ Q(cl, [["__scopeId", "data-v-42815ace"]]), ul = { class: "detail-section" }, ml = {
  key: 0,
  class: "empty-message"
}, vl = { class: "model-header" }, fl = { class: "model-name" }, gl = { class: "model-details" }, hl = { class: "model-row" }, pl = { class: "model-row" }, yl = { class: "label" }, wl = {
  key: 0,
  class: "model-row model-row-nodes"
}, kl = { class: "node-list" }, bl = ["onClick"], _l = {
  key: 1,
  class: "model-row"
}, $l = { class: "value" }, Cl = {
  key: 0,
  class: "model-actions"
}, xl = { class: "detail-section" }, Sl = {
  key: 0,
  class: "empty-message"
}, Il = { class: "node-name" }, El = {
  key: 0,
  class: "node-version"
}, Ml = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: r }) {
    const n = t, i = r, { getWorkflowDetails: h, setModelImportance: v, installWorkflowDeps: f } = ze(), u = $(null), l = $(!1), g = $(null), y = $(!1), c = $({}), E = $({}), _ = $(!1), R = $(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(T) {
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
    function k(T) {
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
    function N(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const M = T.hash || T.filename;
      return R.value.has(M) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function x(T) {
      return R.value.has(T);
    }
    function L(T) {
      R.value.has(T) ? R.value.delete(T) : R.value.add(T), R.value = new Set(R.value);
    }
    async function V() {
      l.value = !0, g.value = null;
      try {
        u.value = await h(n.workflowName);
      } catch (T) {
        g.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function K(T, M) {
      c.value[T] = M, y.value = !0;
    }
    async function te() {
      if (!y.value) {
        i("close");
        return;
      }
      l.value = !0, g.value = null;
      try {
        for (const [T, M] of Object.entries(c.value))
          await v(n.workflowName, T, M);
        i("refresh"), i("close");
      } catch (T) {
        g.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function W(T) {
      E.value[T] = !0, g.value = null;
      try {
        await f(n.workflowName, !0, !1), await V();
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to install node";
      } finally {
        E.value[T] = !1;
      }
    }
    return Ee(V), (T, M) => (s(), o(F, null, [
      w(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: g.value || void 0,
        onClose: M[5] || (M[5] = (B) => i("close"))
      }, {
        body: d(() => [
          u.value ? (s(), o(F, { key: 0 }, [
            e("section", ul, [
              w(Rt, { variant: "section" }, {
                default: d(() => [
                  p("MODELS USED (" + a(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (s(), o("div", ml, " No models used in this workflow ")) : m("", !0),
              (s(!0), o(F, null, J(u.value.models, (B) => (s(), o("div", {
                key: B.hash || B.filename,
                class: "model-card"
              }, [
                e("div", vl, [
                  M[7] || (M[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", fl, a(B.filename), 1)
                ]),
                e("div", gl, [
                  e("div", hl, [
                    M[8] || (M[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", S(B.status)])
                    }, a(k(B.status)), 3)
                  ]),
                  e("div", pl, [
                    e("span", yl, [
                      M[9] || (M[9] = p(" Importance: ", -1)),
                      w(ms, {
                        size: 14,
                        title: "About importance levels",
                        onClick: M[0] || (M[0] = (P) => _.value = !0)
                      })
                    ]),
                    w(al, {
                      "model-value": c.value[B.filename] || B.importance,
                      options: b,
                      "onUpdate:modelValue": (P) => K(B.filename, P)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  B.loaded_by && B.loaded_by.length > 0 ? (s(), o("div", wl, [
                    M[10] || (M[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", kl, [
                      (s(!0), o(F, null, J(N(B), (P, H) => (s(), o("div", {
                        key: `${P.node_id}-${H}`,
                        class: "node-reference"
                      }, a(P.node_type) + " (Node #" + a(P.node_id) + ") ", 1))), 128)),
                      B.loaded_by.length > 3 ? (s(), o("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (P) => L(B.hash || B.filename)
                      }, a(x(B.hash || B.filename) ? "▼ Show less" : `▶ View all (${B.loaded_by.length})`), 9, bl)) : m("", !0)
                    ])
                  ])) : m("", !0),
                  B.size_mb ? (s(), o("div", _l, [
                    M[11] || (M[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", $l, a(B.size_mb) + " MB", 1)
                  ])) : m("", !0)
                ]),
                B.status !== "available" ? (s(), o("div", Cl, [
                  B.status === "downloadable" ? (s(), I(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: M[1] || (M[1] = (P) => i("resolve"))
                  }, {
                    default: d(() => [...M[12] || (M[12] = [
                      p(" Download ", -1)
                    ])]),
                    _: 1
                  })) : B.status === "path_mismatch" ? (s(), I(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: M[2] || (M[2] = (P) => i("resolve"))
                  }, {
                    default: d(() => [...M[13] || (M[13] = [
                      p(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (s(), I(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: M[3] || (M[3] = (P) => i("resolve"))
                  }, {
                    default: d(() => [...M[14] || (M[14] = [
                      p(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : m("", !0)
              ]))), 128))
            ]),
            e("section", xl, [
              w(Rt, { variant: "section" }, {
                default: d(() => [
                  p("NODES USED (" + a(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (s(), o("div", Sl, " No custom nodes used in this workflow ")) : m("", !0),
              (s(!0), o(F, null, J(u.value.nodes, (B) => (s(), o("div", {
                key: B.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", B.status === "installed" ? "installed" : "missing"])
                }, a(B.status === "installed" ? "✓" : "✕"), 3),
                e("span", Il, a(B.name), 1),
                B.version ? (s(), o("span", El, "v" + a(B.version), 1)) : m("", !0),
                B.status === "missing" ? (s(), I(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: E.value[B.name],
                  onClick: (P) => W(B.name),
                  class: "node-install-btn"
                }, {
                  default: d(() => [...M[15] || (M[15] = [
                    p(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : m("", !0)
              ]))), 128))
            ])
          ], 64)) : m("", !0)
        ]),
        footer: d(() => [
          w(ie, {
            variant: "secondary",
            onClick: M[4] || (M[4] = (B) => i("close"))
          }, {
            default: d(() => [...M[16] || (M[16] = [
              p(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), I(ie, {
            key: 0,
            variant: "primary",
            onClick: te
          }, {
            default: d(() => [...M[17] || (M[17] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          })) : m("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      w(at, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: M[6] || (M[6] = (B) => _.value = !1)
      }, {
        content: d(() => [...M[18] || (M[18] = [
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
}), Rl = /* @__PURE__ */ Q(Ml, [["__scopeId", "data-v-0b14d32e"]]), we = Xt({
  items: [],
  status: "idle"
});
let st = null;
function hs() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function jt(t) {
  return we.items.find((r) => r.id === t);
}
async function wt() {
  if (we.status === "downloading") return;
  const t = we.items.find((r) => r.status === "queued");
  if (!t) {
    we.status = "idle";
    return;
  }
  we.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await zl(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    we.status = "idle", wt();
  }
}
async function zl(t) {
  return new Promise((r, n) => {
    st && (st.close(), st = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    st = h;
    let v = Date.now(), f = 0, u = !1;
    h.onmessage = (l) => {
      try {
        const g = JSON.parse(l.data);
        switch (g.type) {
          case "progress":
            t.downloaded = g.downloaded || 0, t.size = g.total || t.size;
            const y = Date.now(), c = (y - v) / 1e3;
            if (c > 0.5) {
              const E = t.downloaded - f;
              if (t.speed = E / c, v = y, f = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            u = !0, h.close(), st = null, r();
            break;
          case "error":
            u = !0, h.close(), st = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), st = null, u || n(new Error("Connection lost"));
    };
  });
}
async function Ll() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const r = await t.json();
    if (!r.pending_downloads || r.pending_downloads.length === 0) return;
    for (const n of r.pending_downloads) {
      if (we.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const i = {
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
      we.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${r.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Dt() {
  function t(S) {
    for (const k of S) {
      if (we.items.some(
        (L) => L.url === k.url && L.targetPath === k.targetPath && ["queued", "downloading", "paused", "completed"].includes(L.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${k.filename}`);
        continue;
      }
      const x = {
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
      we.items.push(x);
    }
    we.status === "idle" && wt();
  }
  async function r(S) {
    const k = jt(S);
    if (k) {
      if (k.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(k.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        st && (st.close(), st = null), k.status = "failed", k.error = "Cancelled by user", we.status = "idle", wt();
      } else if (k.status === "queued") {
        const N = we.items.findIndex((x) => x.id === S);
        N >= 0 && we.items.splice(N, 1);
      }
    }
  }
  function n(S) {
    const k = jt(S);
    !k || k.status !== "failed" || (k.status = "queued", k.error = void 0, k.progress = 0, k.downloaded = 0, we.status === "idle" && wt());
  }
  function i(S) {
    const k = jt(S);
    !k || k.status !== "paused" || (k.status = "queued", we.status === "idle" && wt());
  }
  function h() {
    const S = we.items.filter((k) => k.status === "paused");
    for (const k of S)
      k.status = "queued";
    we.status === "idle" && wt();
  }
  function v(S) {
    const k = we.items.findIndex((N) => N.id === S);
    k >= 0 && ["completed", "failed", "paused"].includes(we.items[k].status) && we.items.splice(k, 1);
  }
  function f() {
    we.items = we.items.filter((S) => S.status !== "completed");
  }
  function u() {
    we.items = we.items.filter((S) => S.status !== "failed");
  }
  const l = D(
    () => we.items.find((S) => S.status === "downloading")
  ), g = D(
    () => we.items.filter((S) => S.status === "queued")
  ), y = D(
    () => we.items.filter((S) => S.status === "completed")
  ), c = D(
    () => we.items.filter((S) => S.status === "failed")
  ), E = D(
    () => we.items.filter((S) => S.status === "paused")
  ), _ = D(() => we.items.length > 0), R = D(
    () => we.items.filter((S) => S.status === "queued" || S.status === "downloading").length
  ), b = D(
    () => we.items.some((S) => S.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Us(we),
    // Computed
    currentDownload: l,
    queuedItems: g,
    completedItems: y,
    failedItems: c,
    pausedItems: E,
    hasItems: _,
    activeCount: R,
    hasPaused: b,
    // Actions
    addToQueue: t,
    cancelDownload: r,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: h,
    removeItem: v,
    clearCompleted: f,
    clearFailed: u,
    loadPendingDownloads: Ll
  };
}
function Tl() {
  const t = $(null), r = $(null), n = $([]), i = $([]), h = $(!1), v = $(null);
  async function f(k, N) {
    var L;
    if (!((L = window.app) != null && L.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(k, N);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), K = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(K);
    }
    return x.json();
  }
  async function u(k) {
    h.value = !0, v.value = null;
    try {
      let N;
      return Ct() && (N = await fe.analyzeWorkflow(k)), t.value = N, N;
    } catch (N) {
      const x = N instanceof Error ? N.message : "Unknown error occurred";
      throw v.value = x, N;
    } finally {
      h.value = !1;
    }
  }
  async function l(k, N, x, L) {
    h.value = !0, v.value = null;
    try {
      let V;
      return Ct() && (V = await fe.applyResolution(k, N, x)), r.value = V, V;
    } catch (V) {
      const K = V instanceof Error ? V.message : "Unknown error occurred";
      throw v.value = K, V;
    } finally {
      h.value = !1;
    }
  }
  async function g(k, N = 10) {
    h.value = !0, v.value = null;
    try {
      let x;
      return Ct() && (x = await fe.searchNodes(k, N)), n.value = x.results, x.results;
    } catch (x) {
      const L = x instanceof Error ? x.message : "Unknown error occurred";
      throw v.value = L, x;
    } finally {
      h.value = !1;
    }
  }
  async function y(k, N = 10) {
    h.value = !0, v.value = null;
    try {
      let x;
      return Ct() && (x = await fe.searchModels(k, N)), i.value = x.results, x.results;
    } catch (x) {
      const L = x instanceof Error ? x.message : "Unknown error occurred";
      throw v.value = L, x;
    } finally {
      h.value = !1;
    }
  }
  const c = Xt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function E() {
    c.phase = "idle", c.currentFile = void 0, c.currentFileIndex = void 0, c.totalFiles = void 0, c.bytesDownloaded = void 0, c.bytesTotal = void 0, c.completedFiles = [], c.nodesToInstall = [], c.nodesInstalled = [], c.installError = void 0, c.needsRestart = void 0, c.error = void 0, c.nodeInstallProgress = void 0;
  }
  async function _(k) {
    c.phase = "installing", c.nodesInstalled = [], c.installError = void 0, c.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Ct()) {
        c.nodeInstallProgress.totalNodes = c.nodesToInstall.length;
        for (let N = 0; N < c.nodesToInstall.length; N++)
          c.nodeInstallProgress.currentNode = c.nodesToInstall[N], c.nodeInstallProgress.currentIndex = N, await new Promise((x) => setTimeout(x, 500)), c.nodeInstallProgress.completedNodes.push({
            node_id: c.nodesToInstall[N],
            success: !0
          });
        return c.nodesInstalled = c.nodesToInstall, c.needsRestart = c.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: c.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await R(k);
    } catch (N) {
      const x = N instanceof Error ? N.message : "Failed to install nodes";
      throw c.installError = x, N;
    }
  }
  async function R(k) {
    var x;
    const N = await f(
      `/v2/comfygit/workflow/${k}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: c.nodesToInstall
        })
      }
    );
    if (c.nodeInstallProgress) {
      c.nodeInstallProgress.totalNodes = c.nodesToInstall.length;
      const L = new Map(((x = N.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < c.nodesToInstall.length; V++) {
        const K = c.nodesToInstall[V], te = L.get(K);
        c.nodeInstallProgress.completedNodes.push({
          node_id: K,
          success: !te,
          error: te
        });
      }
    }
    return c.nodesInstalled = N.nodes_installed, c.needsRestart = N.nodes_installed.length > 0, N.failed && N.failed.length > 0 && (c.installError = `${N.failed.length} package(s) failed to install`), N;
  }
  async function b(k, N, x) {
    E(), c.phase = "resolving", v.value = null;
    {
      const L = await fe.applyResolution(k, N, x);
      r.value = L, c.nodesToInstall = L.nodes_to_install, c.phase = "complete";
      return;
    }
  }
  function S(k, N) {
    const { addToQueue: x } = Dt(), L = N.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: k,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return L.length > 0 && x(L), L.length;
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: n,
    modelSearchResults: i,
    isLoading: h,
    error: v,
    progress: c,
    // Methods
    analyzeWorkflow: u,
    applyResolution: l,
    applyResolutionWithProgress: b,
    installNodes: _,
    searchNodes: g,
    searchModels: y,
    resetProgress: E,
    queueModelDownloads: S
  };
}
const Dl = { class: "resolution-stepper" }, Nl = { class: "stepper-header" }, Pl = ["onClick"], Ul = {
  key: 0,
  class: "step-icon"
}, Bl = {
  key: 1,
  class: "step-number"
}, Ol = { class: "step-label" }, Al = {
  key: 0,
  class: "step-connector"
}, Fl = { class: "stepper-content" }, Vl = /* @__PURE__ */ Y({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const n = t, i = r;
    function h(g) {
      var y;
      if ((y = n.stepStats) != null && y[g]) {
        const c = n.stepStats[g];
        return c.total > 0 && c.resolved === c.total;
      }
      return n.completedSteps.includes(g);
    }
    function v(g) {
      var y;
      if ((y = n.stepStats) != null && y[g]) {
        const c = n.stepStats[g];
        return c.resolved > 0 && c.resolved < c.total;
      }
      return !1;
    }
    function f(g) {
      return h(g) ? "state-complete" : v(g) ? "state-partial" : "state-pending";
    }
    function u(g) {
      return !1;
    }
    function l(g) {
      i("step-change", g);
    }
    return (g, y) => (s(), o("div", Dl, [
      e("div", Nl, [
        (s(!0), o(F, null, J(t.steps, (c, E) => (s(), o("div", {
          key: c.id,
          class: ne(["step", {
            active: t.currentStep === c.id,
            completed: h(c.id),
            "in-progress": v(c.id),
            disabled: u(c.id)
          }]),
          onClick: (_) => l(c.id)
        }, [
          e("div", {
            class: ne(["step-indicator", f(c.id)])
          }, [
            h(c.id) ? (s(), o("span", Ul, "✓")) : (s(), o("span", Bl, a(E + 1), 1))
          ], 2),
          e("div", Ol, a(c.label), 1),
          E < t.steps.length - 1 ? (s(), o("div", Al)) : m("", !0)
        ], 10, Pl))), 128))
      ]),
      e("div", Fl, [
        pe(g.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Wl = /* @__PURE__ */ Q(Vl, [["__scopeId", "data-v-2a7b3af8"]]), Gl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, n = D(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${n.value}`), h = D(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, f) => (s(), o("span", {
      class: ne(["confidence-badge", i.value, t.size])
    }, a(h.value), 3));
  }
}), es = /* @__PURE__ */ Q(Gl, [["__scopeId", "data-v-17ec4b80"]]), jl = { class: "node-info" }, ql = { class: "node-info-text" }, Hl = { class: "item-body" }, Kl = {
  key: 0,
  class: "resolved-state"
}, Yl = {
  key: 1,
  class: "multiple-options"
}, Ql = { class: "options-list" }, Xl = ["onClick"], Zl = ["name", "value", "checked", "onChange"], Jl = { class: "option-content" }, ei = { class: "option-header" }, ti = { class: "option-package-id" }, si = {
  key: 0,
  class: "option-title"
}, oi = { class: "option-meta" }, ni = {
  key: 0,
  class: "installed-badge"
}, ai = { class: "action-buttons" }, li = {
  key: 2,
  class: "unresolved"
}, ii = { class: "action-buttons" }, ri = /* @__PURE__ */ Y({
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
    const n = t, i = r, h = D(() => !!n.choice);
    D(() => {
      var u;
      return (u = n.choice) == null ? void 0 : u.action;
    }), D(() => {
      var u;
      return (u = n.choice) == null ? void 0 : u.package_id;
    });
    const v = D(() => {
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
    function f(u) {
      i("option-selected", u);
    }
    return (u, l) => (s(), o("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: h.value }])
    }, [
      e("div", jl, [
        e("span", ql, [
          l[7] || (l[7] = p("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ne(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : m("", !0)
      ]),
      e("div", Hl, [
        h.value ? (s(), o("div", Kl, [
          w(ie, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (g) => i("clear-choice"))
          }, {
            default: d(() => [...l[8] || (l[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Yl, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ql, [
            (s(!0), o(F, null, J(t.options, (g, y) => (s(), o("label", {
              key: g.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (c) => f(y)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (c) => f(y)
              }, null, 40, Zl),
              e("div", Jl, [
                e("div", ei, [
                  e("span", ti, a(g.package_id), 1),
                  w(es, {
                    confidence: g.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                g.title && g.title !== g.package_id ? (s(), o("div", si, a(g.title), 1)) : m("", !0),
                e("div", oi, [
                  g.is_installed ? (s(), o("span", ni, "Already Installed")) : m("", !0)
                ])
              ])
            ], 10, Xl))), 128))
          ]),
          e("div", ai, [
            w(ie, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (g) => i("search"))
            }, {
              default: d(() => [...l[9] || (l[9] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (g) => i("manual-entry"))
            }, {
              default: d(() => [...l[10] || (l[10] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (g) => i("mark-optional"))
            }, {
              default: d(() => [...l[11] || (l[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", li, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", ii, [
            w(ie, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (g) => i("search"))
            }, {
              default: d(() => [...l[13] || (l[13] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (g) => i("manual-entry"))
            }, {
              default: d(() => [...l[14] || (l[14] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (g) => i("mark-optional"))
            }, {
              default: d(() => [...l[15] || (l[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), di = /* @__PURE__ */ Q(ri, [["__scopeId", "data-v-e02629e7"]]), ci = { class: "item-navigator" }, ui = { class: "nav-item-info" }, mi = ["title"], vi = { class: "nav-controls" }, fi = { class: "nav-arrows" }, gi = ["disabled"], hi = ["disabled"], pi = { class: "nav-position" }, yi = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const n = r;
    return (i, h) => (s(), o("div", ci, [
      e("div", ui, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, mi)
      ]),
      e("div", vi, [
        e("div", fi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, gi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, hi)
        ]),
        e("span", pi, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), ps = /* @__PURE__ */ Q(yi, [["__scopeId", "data-v-74af7920"]]), wi = ["type", "value", "placeholder", "disabled"], ki = {
  key: 0,
  class: "base-input-error"
}, bi = /* @__PURE__ */ Y({
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
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => r.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = ut((i) => r.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ut((i) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, wi),
      t.error ? (s(), o("span", ki, a(t.error), 1)) : m("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ Q(bi, [["__scopeId", "data-v-9ba02cdc"]]), _i = { class: "node-resolution-step" }, $i = {
  key: 0,
  class: "auto-resolved-section"
}, Ci = { class: "section-header" }, xi = { class: "stat-badge" }, Si = { class: "resolved-packages-list" }, Ii = { class: "package-info" }, Ei = { class: "package-id" }, Mi = { class: "node-count" }, Ri = { class: "package-actions" }, zi = {
  key: 0,
  class: "status-badge install"
}, Li = {
  key: 1,
  class: "status-badge skip"
}, Ti = ["onClick"], Di = {
  key: 1,
  class: "section-divider"
}, Ni = { class: "step-header" }, Pi = { class: "stat-badge" }, Ui = {
  key: 1,
  class: "step-body"
}, Bi = {
  key: 3,
  class: "empty-state"
}, Oi = { class: "node-search-modal" }, Ai = { class: "node-modal-body" }, Fi = {
  key: 0,
  class: "node-search-results"
}, Vi = ["onClick"], Wi = { class: "node-result-header" }, Gi = { class: "node-result-package-id" }, ji = {
  key: 0,
  class: "node-result-description"
}, qi = {
  key: 1,
  class: "node-no-results"
}, Hi = {
  key: 2,
  class: "node-searching"
}, Ki = { class: "node-manual-entry-modal" }, Yi = { class: "node-modal-body" }, Qi = { class: "node-modal-actions" }, Xi = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(0), v = $(!1), f = $(!1), u = $(""), l = $(""), g = $([]), y = $(!1), c = D(() => n.nodes[h.value]), E = D(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), _ = D(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function R(re) {
      return n.skippedPackages.has(re);
    }
    function b(re) {
      i("package-skip", re);
    }
    const S = D(() => {
      var X;
      if (!c.value) return "not-found";
      const re = n.nodeChoices.get(c.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (X = c.value.options) != null && X.length ? "ambiguous" : "not-found";
    }), k = D(() => {
      var X;
      if (!c.value) return;
      const re = n.nodeChoices.get(c.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (X = c.value.options) != null && X.length ? `${c.value.options.length} matches` : "Not Found";
    });
    function N(re) {
      re >= 0 && re < n.nodes.length && (h.value = re);
    }
    function x() {
      c.value && i("mark-optional", c.value.node_type);
    }
    function L() {
      c.value && i("skip", c.value.node_type);
    }
    function V(re) {
      c.value && i("option-selected", c.value.node_type, re);
    }
    function K() {
      c.value && i("clear-choice", c.value.node_type);
    }
    function te() {
      c.value && (u.value = c.value.node_type, v.value = !0);
    }
    function W() {
      l.value = "", f.value = !0;
    }
    function T() {
      v.value = !1, u.value = "", g.value = [];
    }
    function M() {
      f.value = !1, l.value = "";
    }
    function B() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function P(re) {
      c.value && (i("manual-entry", c.value.node_type, re.package_id), T());
    }
    function H() {
      !c.value || !l.value.trim() || (i("manual-entry", c.value.node_type, l.value.trim()), M());
    }
    return (re, X) => {
      var se, O;
      return s(), o("div", _i, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", $i, [
          e("div", Ci, [
            X[4] || (X[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", xi, a(_.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Si, [
            (s(!0), o(F, null, J(t.autoResolvedPackages, (C) => (s(), o("div", {
              key: C.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Ii, [
                e("code", Ei, a(C.package_id), 1),
                e("span", Mi, a(C.node_types_count) + " node type" + a(C.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Ri, [
                R(C.package_id) ? (s(), o("span", Li, " SKIPPED ")) : (s(), o("span", zi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ae) => b(C.package_id)
                }, a(R(C.package_id) ? "Include" : "Skip"), 9, Ti)
              ])
            ]))), 128))
          ])
        ])) : m("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Di)) : m("", !0),
        t.nodes.length > 0 ? (s(), o(F, { key: 2 }, [
          e("div", Ni, [
            X[5] || (X[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Pi, a(E.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          c.value ? (s(), I(ps, {
            key: 0,
            "item-name": c.value.node_type,
            "current-index": h.value,
            "total-items": t.nodes.length,
            onPrev: X[0] || (X[0] = (C) => N(h.value - 1)),
            onNext: X[1] || (X[1] = (C) => N(h.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : m("", !0),
          c.value ? (s(), o("div", Ui, [
            w(di, {
              "node-type": c.value.node_type,
              "has-multiple-options": !!((se = c.value.options) != null && se.length),
              options: c.value.options,
              choice: (O = t.nodeChoices) == null ? void 0 : O.get(c.value.node_type),
              status: S.value,
              "status-label": k.value,
              onMarkOptional: x,
              onSkip: L,
              onManualEntry: W,
              onSearch: te,
              onOptionSelected: V,
              onClearChoice: K
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : m("", !0)
        ], 64)) : m("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Bi, [...X[6] || (X[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : m("", !0),
        (s(), I(Re, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(T, ["self"])
          }, [
            e("div", Oi, [
              e("div", { class: "node-modal-header" }, [
                X[7] || (X[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", Ai, [
                w(Ze, {
                  modelValue: u.value,
                  "onUpdate:modelValue": X[2] || (X[2] = (C) => u.value = C),
                  placeholder: "Search by node type, package name...",
                  onInput: B
                }, null, 8, ["modelValue"]),
                g.value.length > 0 ? (s(), o("div", Fi, [
                  (s(!0), o(F, null, J(g.value, (C) => (s(), o("div", {
                    key: C.package_id,
                    class: "node-search-result-item",
                    onClick: (ae) => P(C)
                  }, [
                    e("div", Wi, [
                      e("code", Gi, a(C.package_id), 1),
                      C.match_confidence ? (s(), I(es, {
                        key: 0,
                        confidence: C.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : m("", !0)
                    ]),
                    C.description ? (s(), o("div", ji, a(C.description), 1)) : m("", !0)
                  ], 8, Vi))), 128))
                ])) : u.value && !y.value ? (s(), o("div", qi, ' No packages found matching "' + a(u.value) + '" ', 1)) : m("", !0),
                y.value ? (s(), o("div", Hi, "Searching...")) : m("", !0)
              ])
            ])
          ])) : m("", !0)
        ])),
        (s(), I(Re, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(M, ["self"])
          }, [
            e("div", Ki, [
              e("div", { class: "node-modal-header" }, [
                X[8] || (X[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Yi, [
                w(Ze, {
                  modelValue: l.value,
                  "onUpdate:modelValue": X[3] || (X[3] = (C) => l.value = C),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Qi, [
                  w(ie, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: d(() => [...X[9] || (X[9] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ie, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: H
                  }, {
                    default: d(() => [...X[10] || (X[10] = [
                      p(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : m("", !0)
        ]))
      ]);
    };
  }
}), Zi = /* @__PURE__ */ Q(Xi, [["__scopeId", "data-v-6474069a"]]), Ji = { class: "node-info" }, er = { class: "node-info-text" }, tr = { class: "item-body" }, sr = {
  key: 0,
  class: "resolved-state"
}, or = {
  key: 1,
  class: "multiple-options"
}, nr = { class: "options-list" }, ar = ["onClick"], lr = ["name", "value", "checked", "onChange"], ir = { class: "option-content" }, rr = { class: "option-header" }, dr = { class: "option-filename" }, cr = { class: "option-meta" }, ur = { class: "option-size" }, mr = { class: "option-category" }, vr = { class: "option-path" }, fr = { class: "action-buttons" }, gr = {
  key: 2,
  class: "unresolved"
}, hr = { class: "action-buttons" }, pr = /* @__PURE__ */ Y({
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
    const n = t, i = r, h = D(() => !!n.choice);
    D(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), D(() => {
      var l, g;
      return ((g = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : g.filename) || "selected";
    });
    const v = D(() => {
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
    function f(l) {
      i("option-selected", l);
    }
    function u(l) {
      if (!l) return "Unknown";
      const g = l / (1024 * 1024 * 1024);
      return g >= 1 ? `${g.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, g) => (s(), o("div", {
      class: ne(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Ji, [
        e("span", er, [
          g[7] || (g[7] = p("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ne(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : m("", !0)
      ]),
      e("div", tr, [
        h.value ? (s(), o("div", sr, [
          w(ie, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (y) => i("clear-choice"))
          }, {
            default: d(() => [...g[8] || (g[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", or, [
          g[12] || (g[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", nr, [
            (s(!0), o(F, null, J(t.options, (y, c) => (s(), o("label", {
              key: y.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === c }]),
              onClick: (E) => f(c)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: c,
                checked: t.selectedOptionIndex === c,
                onChange: (E) => f(c)
              }, null, 40, lr),
              e("div", ir, [
                e("div", rr, [
                  e("span", dr, a(y.model.filename), 1),
                  w(es, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", cr, [
                  e("span", ur, a(u(y.model.size)), 1),
                  e("span", mr, a(y.model.category), 1)
                ]),
                e("div", vr, a(y.model.relative_path), 1)
              ])
            ], 10, ar))), 128))
          ]),
          e("div", fr, [
            w(ie, {
              variant: "ghost",
              size: "sm",
              onClick: g[1] || (g[1] = (y) => i("search"))
            }, {
              default: d(() => [...g[9] || (g[9] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "ghost",
              size: "sm",
              onClick: g[2] || (g[2] = (y) => i("download-url"))
            }, {
              default: d(() => [...g[10] || (g[10] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (y) => i("mark-optional"))
            }, {
              default: d(() => [...g[11] || (g[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", gr, [
          g[16] || (g[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", hr, [
            w(ie, {
              variant: "primary",
              size: "sm",
              onClick: g[4] || (g[4] = (y) => i("search"))
            }, {
              default: d(() => [...g[13] || (g[13] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (y) => i("download-url"))
            }, {
              default: d(() => [...g[14] || (g[14] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (y) => i("mark-optional"))
            }, {
              default: d(() => [...g[15] || (g[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), yr = /* @__PURE__ */ Q(pr, [["__scopeId", "data-v-8a82fefa"]]), wr = { class: "model-resolution-step" }, kr = { class: "step-header" }, br = { class: "step-info" }, _r = { class: "step-title" }, $r = { class: "step-description" }, Cr = { class: "stat-badge" }, xr = {
  key: 1,
  class: "step-body"
}, Sr = {
  key: 2,
  class: "empty-state"
}, Ir = { class: "model-search-modal" }, Er = { class: "model-modal-body" }, Mr = {
  key: 0,
  class: "model-search-results"
}, Rr = ["onClick"], zr = { class: "model-result-header" }, Lr = { class: "model-result-filename" }, Tr = { class: "model-result-meta" }, Dr = { class: "model-result-category" }, Nr = { class: "model-result-size" }, Pr = {
  key: 0,
  class: "model-result-path"
}, Ur = {
  key: 1,
  class: "model-no-results"
}, Br = {
  key: 2,
  class: "model-searching"
}, Or = { class: "model-download-url-modal" }, Ar = { class: "model-modal-body" }, Fr = { class: "model-input-group" }, Vr = { class: "model-input-group" }, Wr = { class: "model-modal-actions" }, Gr = /* @__PURE__ */ Y({
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
    function i(O) {
      var C;
      return O && ((C = n[O]) == null ? void 0 : C[0]) || null;
    }
    const h = t, v = r, f = $(0), u = $(!1), l = $(!1), g = $(""), y = $(""), c = $(""), E = $([]), _ = $(!1), R = D(() => h.models[f.value]), b = D(() => h.models.some((O) => O.is_download_intent)), S = D(() => h.models.filter(
      (O) => h.modelChoices.has(O.filename) || O.is_download_intent
    ).length), k = D(() => {
      var C;
      if (!R.value) return "";
      const O = i((C = R.value.reference) == null ? void 0 : C.node_type);
      return O ? `${O}/${R.value.filename}` : "";
    }), N = D(() => {
      var C;
      if (!R.value) return "not-found";
      const O = h.modelChoices.get(R.value.filename);
      if (O)
        switch (O.action) {
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
      return R.value.is_download_intent ? "download" : (C = R.value.options) != null && C.length ? "ambiguous" : "not-found";
    }), x = D(() => {
      var C, ae;
      if (!R.value) return;
      const O = h.modelChoices.get(R.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (C = O.selected_model) != null && C.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return R.value.is_download_intent ? "Pending Download" : (ae = R.value.options) != null && ae.length ? `${R.value.options.length} matches` : "Not Found";
    });
    function L(O) {
      O >= 0 && O < h.models.length && (f.value = O);
    }
    function V() {
      R.value && v("mark-optional", R.value.filename);
    }
    function K() {
      R.value && v("skip", R.value.filename);
    }
    function te(O) {
      R.value && v("option-selected", R.value.filename, O);
    }
    function W() {
      R.value && v("clear-choice", R.value.filename);
    }
    function T() {
      R.value && (g.value = R.value.filename, u.value = !0);
    }
    function M() {
      R.value && (y.value = R.value.download_source || "", c.value = R.value.target_path || k.value, l.value = !0);
    }
    function B() {
      u.value = !1, g.value = "", E.value = [];
    }
    function P() {
      l.value = !1, y.value = "", c.value = "";
    }
    function H() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function re(O) {
      R.value && B();
    }
    function X() {
      !R.value || !y.value.trim() || (v("download-url", R.value.filename, y.value.trim(), c.value.trim() || void 0), P());
    }
    function se(O) {
      if (!O) return "Unknown";
      const C = O / (1024 * 1024 * 1024);
      return C >= 1 ? `${C.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, C) => {
      var ae, oe, xe;
      return s(), o("div", wr, [
        e("div", kr, [
          e("div", br, [
            e("h3", _r, a(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", $r, a(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Cr, a(S.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        R.value ? (s(), I(ps, {
          key: 0,
          "item-name": R.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: C[0] || (C[0] = (be) => L(f.value - 1)),
          onNext: C[1] || (C[1] = (be) => L(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : m("", !0),
        R.value ? (s(), o("div", xr, [
          w(yr, {
            filename: R.value.filename,
            "node-type": ((ae = R.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((oe = R.value.options) != null && oe.length),
            options: R.value.options,
            choice: (xe = t.modelChoices) == null ? void 0 : xe.get(R.value.filename),
            status: N.value,
            "status-label": x.value,
            onMarkOptional: V,
            onSkip: K,
            onDownloadUrl: M,
            onSearch: T,
            onOptionSelected: te,
            onClearChoice: W
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Sr, [...C[5] || (C[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), I(Re, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(B, ["self"])
          }, [
            e("div", Ir, [
              e("div", { class: "model-modal-header" }, [
                C[6] || (C[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", Er, [
                w(Ze, {
                  modelValue: g.value,
                  "onUpdate:modelValue": C[2] || (C[2] = (be) => g.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: H
                }, null, 8, ["modelValue"]),
                E.value.length > 0 ? (s(), o("div", Mr, [
                  (s(!0), o(F, null, J(E.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (Le) => re()
                  }, [
                    e("div", zr, [
                      e("code", Lr, a(be.filename), 1)
                    ]),
                    e("div", Tr, [
                      e("span", Dr, a(be.category), 1),
                      e("span", Nr, a(se(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", Pr, a(be.relative_path), 1)) : m("", !0)
                  ], 8, Rr))), 128))
                ])) : g.value && !_.value ? (s(), o("div", Ur, ' No models found matching "' + a(g.value) + '" ', 1)) : m("", !0),
                _.value ? (s(), o("div", Br, "Searching...")) : m("", !0)
              ])
            ])
          ])) : m("", !0)
        ])),
        (s(), I(Re, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(P, ["self"])
          }, [
            e("div", Or, [
              e("div", { class: "model-modal-header" }, [
                C[7] || (C[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", Ar, [
                e("div", Fr, [
                  C[8] || (C[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(Ze, {
                    modelValue: y.value,
                    "onUpdate:modelValue": C[3] || (C[3] = (be) => y.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Vr, [
                  C[9] || (C[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(Ze, {
                    modelValue: c.value,
                    "onUpdate:modelValue": C[4] || (C[4] = (be) => c.value = be),
                    placeholder: k.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Wr, [
                  w(ie, {
                    variant: "secondary",
                    onClick: P
                  }, {
                    default: d(() => [...C[10] || (C[10] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ie, {
                    variant: "primary",
                    disabled: !y.value.trim() || !c.value.trim(),
                    onClick: X
                  }, {
                    default: d(() => [...C[11] || (C[11] = [
                      p(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : m("", !0)
        ]))
      ]);
    };
  }
}), jr = /* @__PURE__ */ Q(Gr, [["__scopeId", "data-v-c6acbada"]]), qr = { class: "applying-step" }, Hr = {
  key: 0,
  class: "phase-content"
}, Kr = {
  key: 1,
  class: "phase-content"
}, Yr = { class: "phase-description" }, Qr = { class: "overall-progress" }, Xr = { class: "progress-bar" }, Zr = { class: "progress-label" }, Jr = { class: "install-list" }, ed = { class: "install-icon" }, td = { key: 0 }, sd = {
  key: 1,
  class: "spinner"
}, od = { key: 2 }, nd = { key: 3 }, ad = {
  key: 0,
  class: "install-error"
}, ld = {
  key: 2,
  class: "phase-content"
}, id = { class: "phase-header" }, rd = { class: "phase-title" }, dd = { class: "completion-summary" }, cd = {
  key: 0,
  class: "summary-item success"
}, ud = { class: "summary-text" }, md = {
  key: 1,
  class: "summary-item error"
}, vd = { class: "summary-text" }, fd = {
  key: 2,
  class: "failed-list"
}, gd = { class: "failed-node-id" }, hd = { class: "failed-error" }, pd = {
  key: 4,
  class: "summary-item success"
}, yd = {
  key: 5,
  class: "restart-prompt"
}, wd = {
  key: 3,
  class: "phase-content error"
}, kd = { class: "error-message" }, bd = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const r = t, n = D(() => {
      var g, y;
      const u = ((g = r.progress.nodeInstallProgress) == null ? void 0 : g.totalNodes) || r.progress.nodesToInstall.length;
      if (!u) return 0;
      const l = ((y = r.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(l / u * 100);
    }), i = D(() => {
      var u;
      return ((u = r.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((l) => !l.success)) || [];
    }), h = D(() => i.value.length > 0);
    function v(u, l) {
      var y, c;
      const g = (y = r.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.find((E) => E.node_id === u);
      return g ? g.success ? "complete" : "failed" : ((c = r.progress.nodeInstallProgress) == null ? void 0 : c.currentIndex) === l ? "installing" : "pending";
    }
    function f(u) {
      var l, g;
      return (g = (l = r.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((y) => y.node_id === u)) == null ? void 0 : g.error;
    }
    return (u, l) => {
      var g, y, c, E;
      return s(), o("div", qr, [
        t.progress.phase === "resolving" ? (s(), o("div", Hr, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Kr, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Yr, " Installing " + a((((g = t.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) ?? 0) + 1) + " of " + a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Qr, [
            e("div", Xr, [
              e("div", {
                class: "progress-fill",
                style: nt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Zr, a(((c = t.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.length) ?? 0) + " / " + a(((E = t.progress.nodeInstallProgress) == null ? void 0 : E.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Jr, [
            (s(!0), o(F, null, J(t.progress.nodesToInstall, (_, R) => (s(), o("div", {
              key: _,
              class: ne(["install-item", v(_, R)])
            }, [
              e("span", ed, [
                v(_, R) === "pending" ? (s(), o("span", td, "○")) : v(_, R) === "installing" ? (s(), o("span", sd, "◌")) : v(_, R) === "complete" ? (s(), o("span", od, "✓")) : v(_, R) === "failed" ? (s(), o("span", nd, "✗")) : m("", !0)
              ]),
              e("code", null, a(_), 1),
              f(_) ? (s(), o("span", ad, a(f(_)), 1)) : m("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", ld, [
          e("div", id, [
            e("span", {
              class: ne(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", rd, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", dd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", cd, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", ud, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : m("", !0),
            i.value.length > 0 ? (s(), o("div", md, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", vd, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : m("", !0),
            i.value.length > 0 ? (s(), o("div", fd, [
              (s(!0), o(F, null, J(i.value, (_) => (s(), o("div", {
                key: _.node_id,
                class: "failed-item"
              }, [
                e("code", gd, a(_.node_id), 1),
                e("span", hd, a(_.error), 1)
              ]))), 128))
            ])) : m("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (_) => u.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : m("", !0),
            h.value ? m("", !0) : (s(), o("div", pd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", yd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (_) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : m("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", wd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", kd, a(t.progress.error), 1)
        ])) : m("", !0)
      ]);
    };
  }
}), _d = /* @__PURE__ */ Q(bd, [["__scopeId", "data-v-5efaae58"]]), $d = {
  key: 0,
  class: "loading-state"
}, Cd = {
  key: 1,
  class: "wizard-content"
}, xd = {
  key: 0,
  class: "step-content"
}, Sd = { class: "analysis-summary" }, Id = { class: "analysis-header" }, Ed = { class: "summary-description" }, Md = { class: "stats-grid" }, Rd = { class: "stat-card" }, zd = { class: "stat-items" }, Ld = {
  key: 0,
  class: "stat-item success"
}, Td = { class: "stat-count" }, Dd = {
  key: 1,
  class: "stat-item info"
}, Nd = { class: "stat-count" }, Pd = {
  key: 2,
  class: "stat-item warning"
}, Ud = { class: "stat-count" }, Bd = {
  key: 3,
  class: "stat-item error"
}, Od = { class: "stat-count" }, Ad = { class: "stat-card" }, Fd = { class: "stat-items" }, Vd = { class: "stat-item success" }, Wd = { class: "stat-count" }, Gd = {
  key: 0,
  class: "stat-item info"
}, jd = { class: "stat-count" }, qd = {
  key: 1,
  class: "stat-item warning"
}, Hd = { class: "stat-count" }, Kd = {
  key: 2,
  class: "stat-item error"
}, Yd = { class: "stat-count" }, Qd = {
  key: 0,
  class: "status-message warning"
}, Xd = { class: "status-text" }, Zd = {
  key: 1,
  class: "status-message info"
}, Jd = { class: "status-text" }, ec = {
  key: 2,
  class: "status-message info"
}, tc = { class: "status-text" }, sc = {
  key: 3,
  class: "status-message success"
}, oc = {
  key: 3,
  class: "step-content"
}, nc = { class: "review-summary" }, ac = { class: "review-stats" }, lc = { class: "review-stat" }, ic = { class: "stat-value" }, rc = { class: "review-stat" }, dc = { class: "stat-value" }, cc = { class: "review-stat" }, uc = { class: "stat-value" }, mc = { class: "review-stat" }, vc = { class: "stat-value" }, fc = {
  key: 0,
  class: "review-section"
}, gc = { class: "section-title" }, hc = { class: "review-items" }, pc = { class: "item-name" }, yc = { class: "item-choice" }, wc = {
  key: 0,
  class: "choice-badge install"
}, kc = {
  key: 1,
  class: "choice-badge skip"
}, bc = {
  key: 1,
  class: "review-section"
}, _c = { class: "section-title" }, $c = { class: "review-items" }, Cc = { class: "item-name" }, xc = { class: "item-choice" }, Sc = {
  key: 0,
  class: "choice-badge install"
}, Ic = {
  key: 1,
  class: "choice-badge optional"
}, Ec = {
  key: 2,
  class: "choice-badge skip"
}, Mc = {
  key: 1,
  class: "choice-badge pending"
}, Rc = {
  key: 2,
  class: "review-section"
}, zc = { class: "section-title" }, Lc = { class: "review-items" }, Tc = { class: "item-name" }, Dc = { class: "item-choice" }, Nc = {
  key: 0,
  class: "choice-badge install"
}, Pc = {
  key: 1,
  class: "choice-badge download"
}, Uc = {
  key: 2,
  class: "choice-badge optional"
}, Bc = {
  key: 3,
  class: "choice-badge skip"
}, Oc = {
  key: 4,
  class: "choice-badge skip"
}, Ac = {
  key: 1,
  class: "choice-badge download"
}, Fc = {
  key: 2,
  class: "choice-badge pending"
}, Vc = {
  key: 3,
  class: "no-choices"
}, Wc = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: r }) {
    const n = t, i = r, { analyzeWorkflow: h, applyResolution: v, installNodes: f, queueModelDownloads: u, progress: l, resetProgress: g } = Tl(), { loadPendingDownloads: y } = Dt(), c = $(null), E = $(!1), _ = $(!1), R = $(null), b = $("analysis"), S = $([]), k = $(/* @__PURE__ */ new Map()), N = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Set()), L = D(() => {
      const q = [
        { id: "analysis", label: "Analysis" }
      ];
      return (K.value || T.value) && q.push({ id: "nodes", label: "Nodes" }), (te.value || W.value) && q.push({ id: "models", label: "Models" }), q.push({ id: "review", label: "Review" }), b.value === "applying" && q.push({ id: "applying", label: "Applying" }), q;
    }), V = D(() => c.value ? c.value.stats.needs_user_input : !1), K = D(() => c.value ? c.value.nodes.unresolved.length > 0 || c.value.nodes.ambiguous.length > 0 : !1), te = D(() => c.value ? c.value.models.unresolved.length > 0 || c.value.models.ambiguous.length > 0 : !1), W = D(() => c.value ? c.value.stats.download_intents > 0 : !1), T = D(() => c.value ? c.value.stats.nodes_needing_installation > 0 : !1), M = D(() => c.value ? c.value.nodes.resolved.length : 0), B = D(() => {
      if (!c.value) return [];
      const q = c.value.nodes.resolved.filter((Z) => !Z.is_installed), A = /* @__PURE__ */ new Set();
      return q.filter((Z) => A.has(Z.package.package_id) ? !1 : (A.add(Z.package.package_id), !0));
    }), P = D(() => {
      if (!c.value) return [];
      const q = c.value.nodes.resolved.filter((Z) => !Z.is_installed), A = /* @__PURE__ */ new Map();
      for (const Z of q) {
        const ge = A.get(Z.package.package_id);
        ge ? ge.node_types_count++ : A.set(Z.package.package_id, {
          package_id: Z.package.package_id,
          title: Z.package.title,
          node_types_count: 1
        });
      }
      return Array.from(A.values());
    }), H = D(() => B.value.filter((q) => !x.value.has(q.package.package_id))), re = D(() => c.value ? c.value.models.resolved.filter((q) => q.match_type === "download_intent").map((q) => ({
      filename: q.reference.widget_value,
      reference: q.reference,
      is_download_intent: !0,
      resolved_model: q.model,
      download_source: q.download_source,
      target_path: q.target_path
    })) : []), X = D(() => {
      if (!c.value) return [];
      const q = c.value.nodes.unresolved.map((Z) => ({
        node_type: Z.reference.node_type,
        reason: Z.reason,
        is_unresolved: !0,
        options: void 0
      })), A = c.value.nodes.ambiguous.map((Z) => ({
        node_type: Z.reference.node_type,
        has_multiple_options: !0,
        options: Z.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...q, ...A];
    }), se = D(() => {
      if (!c.value) return [];
      const q = c.value.models.unresolved.map((Z) => ({
        filename: Z.reference.widget_value,
        reference: Z.reference,
        reason: Z.reason,
        is_unresolved: !0,
        options: void 0
      })), A = c.value.models.ambiguous.map((Z) => ({
        filename: Z.reference.widget_value,
        reference: Z.reference,
        has_multiple_options: !0,
        options: Z.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...q, ...A];
    }), O = D(() => {
      const q = se.value, A = re.value.map((Z) => ({
        filename: Z.filename,
        reference: Z.reference,
        is_download_intent: !0,
        resolved_model: Z.resolved_model,
        download_source: Z.download_source,
        target_path: Z.target_path,
        options: void 0
      }));
      return [...q, ...A];
    }), C = D(() => {
      let q = H.value.length;
      for (const A of k.value.values())
        A.action === "install" && q++;
      for (const A of N.value.values())
        A.action === "select" && q++;
      return q;
    }), ae = D(() => {
      let q = 0;
      for (const A of N.value.values())
        A.action === "download" && q++;
      return q;
    }), oe = D(() => {
      let q = 0;
      for (const A of k.value.values())
        A.action === "optional" && q++;
      for (const A of N.value.values())
        A.action === "optional" && q++;
      return q;
    }), xe = D(() => {
      let q = x.value.size;
      for (const A of k.value.values())
        A.action === "skip" && q++;
      for (const A of N.value.values())
        A.action === "skip" && q++;
      for (const A of X.value)
        k.value.has(A.node_type) || q++;
      for (const A of se.value)
        N.value.has(A.filename) || q++;
      return q;
    }), be = D(() => {
      const q = {};
      if (q.analysis = { resolved: 1, total: 1 }, K.value) {
        const A = X.value.length, Z = X.value.filter(
          (ge) => k.value.has(ge.node_type)
        ).length;
        q.nodes = { resolved: Z, total: A };
      }
      if (te.value || W.value) {
        const A = O.value.length, Z = O.value.filter(
          (ge) => N.value.has(ge.filename) || ge.is_download_intent
        ).length;
        q.models = { resolved: Z, total: A };
      }
      if (q.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const A = l.totalFiles || 1, Z = l.completedFiles.length;
        q.applying = { resolved: Z, total: A };
      }
      return q;
    });
    function Le(q) {
      b.value = q;
    }
    function Ae() {
      const q = L.value.findIndex((A) => A.id === b.value);
      q > 0 && (b.value = L.value[q - 1].id);
    }
    function ce() {
      const q = L.value.findIndex((A) => A.id === b.value);
      q < L.value.length - 1 && (b.value = L.value[q + 1].id);
    }
    async function Fe() {
      E.value = !0, R.value = null;
      try {
        c.value = await h(n.workflowName);
      } catch (q) {
        R.value = q instanceof Error ? q.message : "Failed to analyze workflow";
      } finally {
        E.value = !1;
      }
    }
    function ke() {
      S.value.includes("analysis") || S.value.push("analysis"), K.value || T.value ? b.value = "nodes" : te.value || W.value ? b.value = "models" : b.value = "review";
    }
    function Te(q) {
      k.value.set(q, { action: "optional" });
    }
    function Ge(q) {
      k.value.set(q, { action: "skip" });
    }
    function et(q, A) {
      var ge;
      const Z = X.value.find((Ie) => Ie.node_type === q);
      (ge = Z == null ? void 0 : Z.options) != null && ge[A] && k.value.set(q, {
        action: "install",
        package_id: Z.options[A].package_id
      });
    }
    function he(q, A) {
      k.value.set(q, {
        action: "install",
        package_id: A
      });
    }
    function je(q) {
      k.value.delete(q);
    }
    function qe(q) {
      x.value.has(q) ? x.value.delete(q) : x.value.add(q);
    }
    function He(q) {
      N.value.set(q, { action: "optional" });
    }
    function mt(q) {
      N.value.set(q, { action: "skip" });
    }
    function me(q, A) {
      var ge;
      const Z = se.value.find((Ie) => Ie.filename === q);
      (ge = Z == null ? void 0 : Z.options) != null && ge[A] && N.value.set(q, {
        action: "select",
        selected_model: Z.options[A].model
      });
    }
    function De(q, A, Z) {
      N.value.set(q, {
        action: "download",
        url: A,
        target_path: Z
      });
    }
    function vt(q) {
      N.value.delete(q);
    }
    async function lt() {
      var q;
      _.value = !0, R.value = null, g(), l.phase = "resolving", b.value = "applying";
      try {
        const A = await v(n.workflowName, k.value, N.value, x.value);
        A.models_to_download && A.models_to_download.length > 0 && u(n.workflowName, A.models_to_download);
        const Z = [
          ...A.nodes_to_install || [],
          ...H.value.map((Ie) => Ie.package.package_id)
        ];
        l.nodesToInstall = [...new Set(Z)], l.nodesToInstall.length > 0 && await f(n.workflowName), l.phase = "complete", await y();
        const ge = l.installError || ((q = l.nodeInstallProgress) == null ? void 0 : q.completedNodes.some((Ie) => !Ie.success));
        !l.needsRestart && !ge && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (A) {
        R.value = A instanceof Error ? A.message : "Failed to apply resolution", l.error = R.value, l.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function Se() {
      i("refresh"), i("restart"), i("close");
    }
    async function ft() {
      var A;
      const q = ((A = l.nodeInstallProgress) == null ? void 0 : A.completedNodes.filter((Z) => !Z.success).map((Z) => Z.node_id)) || [];
      if (q.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: q.length
        }, l.nodesToInstall = q, l.nodesInstalled = [], l.installError = void 0;
        try {
          await f(n.workflowName), l.phase = "complete";
        } catch (Z) {
          l.error = Z instanceof Error ? Z.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ee(Fe), (q, A) => (s(), I(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: E.value,
      error: R.value || void 0,
      "fixed-height": !0,
      onClose: A[1] || (A[1] = (Z) => i("close"))
    }, {
      body: d(() => [
        E.value && !c.value ? (s(), o("div", $d, [...A[2] || (A[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : c.value ? (s(), o("div", Cd, [
          w(Wl, {
            steps: L.value,
            "current-step": b.value,
            "completed-steps": S.value,
            "step-stats": be.value,
            onStepChange: Le
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (s(), o("div", xd, [
            e("div", Sd, [
              e("div", Id, [
                A[3] || (A[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Ed, " Found " + a(c.value.stats.total_nodes) + " nodes and " + a(c.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Md, [
                e("div", Rd, [
                  A[12] || (A[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", zd, [
                    M.value > 0 ? (s(), o("div", Ld, [
                      A[4] || (A[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Td, a(M.value), 1),
                      A[5] || (A[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : m("", !0),
                    c.value.stats.packages_needing_installation > 0 ? (s(), o("div", Dd, [
                      A[6] || (A[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Nd, a(c.value.stats.packages_needing_installation), 1),
                      A[7] || (A[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : m("", !0),
                    c.value.nodes.ambiguous.length > 0 ? (s(), o("div", Pd, [
                      A[8] || (A[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ud, a(c.value.nodes.ambiguous.length), 1),
                      A[9] || (A[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : m("", !0),
                    c.value.nodes.unresolved.length > 0 ? (s(), o("div", Bd, [
                      A[10] || (A[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Od, a(c.value.nodes.unresolved.length), 1),
                      A[11] || (A[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : m("", !0)
                  ])
                ]),
                e("div", Ad, [
                  A[21] || (A[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Fd, [
                    e("div", Vd, [
                      A[13] || (A[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Wd, a(c.value.models.resolved.length - c.value.stats.download_intents), 1),
                      A[14] || (A[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    c.value.stats.download_intents > 0 ? (s(), o("div", Gd, [
                      A[15] || (A[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", jd, a(c.value.stats.download_intents), 1),
                      A[16] || (A[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : m("", !0),
                    c.value.models.ambiguous.length > 0 ? (s(), o("div", qd, [
                      A[17] || (A[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Hd, a(c.value.models.ambiguous.length), 1),
                      A[18] || (A[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : m("", !0),
                    c.value.models.unresolved.length > 0 ? (s(), o("div", Kd, [
                      A[19] || (A[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Yd, a(c.value.models.unresolved.length), 1),
                      A[20] || (A[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : m("", !0)
                  ])
                ])
              ]),
              V.value ? (s(), o("div", Qd, [
                A[22] || (A[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Xd, a(X.value.length + se.value.length) + " items need your input", 1)
              ])) : T.value ? (s(), o("div", Zd, [
                A[23] || (A[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Jd, a(c.value.stats.packages_needing_installation) + " package" + a(c.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(c.value.stats.nodes_needing_installation) + " node type" + a(c.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(W.value ? `, ${c.value.stats.download_intents} model${c.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : W.value ? (s(), o("div", ec, [
                A[24] || (A[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", tc, a(c.value.stats.download_intents) + " model" + a(c.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (s(), o("div", sc, [...A[25] || (A[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : m("", !0),
          b.value === "nodes" ? (s(), I(Zi, {
            key: 1,
            nodes: X.value,
            "node-choices": k.value,
            "auto-resolved-packages": P.value,
            "skipped-packages": x.value,
            onMarkOptional: Te,
            onSkip: Ge,
            onOptionSelected: et,
            onManualEntry: he,
            onClearChoice: je,
            onPackageSkip: qe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : m("", !0),
          b.value === "models" ? (s(), I(jr, {
            key: 2,
            models: O.value,
            "model-choices": N.value,
            onMarkOptional: He,
            onSkip: mt,
            onOptionSelected: me,
            onDownloadUrl: De,
            onClearChoice: vt
          }, null, 8, ["models", "model-choices"])) : m("", !0),
          b.value === "review" ? (s(), o("div", oc, [
            e("div", nc, [
              A[30] || (A[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ac, [
                e("div", lc, [
                  e("span", ic, a(C.value), 1),
                  A[26] || (A[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", rc, [
                  e("span", dc, a(ae.value), 1),
                  A[27] || (A[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", cc, [
                  e("span", uc, a(oe.value), 1),
                  A[28] || (A[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", mc, [
                  e("span", vc, a(xe.value), 1),
                  A[29] || (A[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              P.value.length > 0 ? (s(), o("div", fc, [
                e("h4", gc, "Node Packages (" + a(P.value.length) + ")", 1),
                e("div", hc, [
                  (s(!0), o(F, null, J(P.value, (Z) => (s(), o("div", {
                    key: Z.package_id,
                    class: "review-item"
                  }, [
                    e("code", pc, a(Z.package_id), 1),
                    e("div", yc, [
                      x.value.has(Z.package_id) ? (s(), o("span", kc, "Skipped")) : (s(), o("span", wc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : m("", !0),
              X.value.length > 0 ? (s(), o("div", bc, [
                e("h4", _c, "Node Choices (" + a(X.value.length) + ")", 1),
                e("div", $c, [
                  (s(!0), o(F, null, J(X.value, (Z) => {
                    var ge, Ie, Ne, U;
                    return s(), o("div", {
                      key: Z.node_type,
                      class: "review-item"
                    }, [
                      e("code", Cc, a(Z.node_type), 1),
                      e("div", xc, [
                        k.value.has(Z.node_type) ? (s(), o(F, { key: 0 }, [
                          ((ge = k.value.get(Z.node_type)) == null ? void 0 : ge.action) === "install" ? (s(), o("span", Sc, a((Ie = k.value.get(Z.node_type)) == null ? void 0 : Ie.package_id), 1)) : ((Ne = k.value.get(Z.node_type)) == null ? void 0 : Ne.action) === "optional" ? (s(), o("span", Ic, " Optional ")) : ((U = k.value.get(Z.node_type)) == null ? void 0 : U.action) === "skip" ? (s(), o("span", Ec, " Skip ")) : m("", !0)
                        ], 64)) : (s(), o("span", Mc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : m("", !0),
              O.value.length > 0 ? (s(), o("div", Rc, [
                e("h4", zc, "Models (" + a(O.value.length) + ")", 1),
                e("div", Lc, [
                  (s(!0), o(F, null, J(O.value, (Z) => {
                    var ge, Ie, Ne, U, j, de, Qe;
                    return s(), o("div", {
                      key: Z.filename,
                      class: "review-item"
                    }, [
                      e("code", Tc, a(Z.filename), 1),
                      e("div", Dc, [
                        N.value.has(Z.filename) ? (s(), o(F, { key: 0 }, [
                          ((ge = N.value.get(Z.filename)) == null ? void 0 : ge.action) === "select" ? (s(), o("span", Nc, a((Ne = (Ie = N.value.get(Z.filename)) == null ? void 0 : Ie.selected_model) == null ? void 0 : Ne.filename), 1)) : ((U = N.value.get(Z.filename)) == null ? void 0 : U.action) === "download" ? (s(), o("span", Pc, " Download ")) : ((j = N.value.get(Z.filename)) == null ? void 0 : j.action) === "optional" ? (s(), o("span", Uc, " Optional ")) : ((de = N.value.get(Z.filename)) == null ? void 0 : de.action) === "skip" ? (s(), o("span", Bc, " Skip ")) : ((Qe = N.value.get(Z.filename)) == null ? void 0 : Qe.action) === "cancel_download" ? (s(), o("span", Oc, " Cancel Download ")) : m("", !0)
                        ], 64)) : Z.is_download_intent ? (s(), o("span", Ac, " Pending Download ")) : (s(), o("span", Fc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : m("", !0),
              B.value.length === 0 && X.value.length === 0 && O.value.length === 0 ? (s(), o("div", Vc, " No dependencies need resolution. ")) : m("", !0)
            ])
          ])) : m("", !0),
          b.value === "applying" ? (s(), I(_d, {
            key: 4,
            progress: ye(l),
            onRestart: Se,
            onRetryFailed: ft
          }, null, 8, ["progress"])) : m("", !0)
        ])) : m("", !0)
      ]),
      footer: d(() => [
        b.value !== "analysis" && b.value !== "applying" ? (s(), I(ie, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ae
        }, {
          default: d(() => [...A[31] || (A[31] = [
            p(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : m("", !0),
        A[35] || (A[35] = e("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || ye(l).phase === "complete" || ye(l).phase === "error" ? (s(), I(ie, {
          key: 1,
          variant: "secondary",
          onClick: A[0] || (A[0] = (Z) => i("close"))
        }, {
          default: d(() => [
            p(a(ye(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : m("", !0),
        b.value === "analysis" ? (s(), I(ie, {
          key: 2,
          variant: "primary",
          disabled: E.value,
          onClick: ke
        }, {
          default: d(() => [...A[32] || (A[32] = [
            p(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : m("", !0),
        b.value === "nodes" ? (s(), I(ie, {
          key: 3,
          variant: "primary",
          onClick: ce
        }, {
          default: d(() => [
            p(a(te.value || W.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : m("", !0),
        b.value === "models" ? (s(), I(ie, {
          key: 4,
          variant: "primary",
          onClick: ce
        }, {
          default: d(() => [...A[33] || (A[33] = [
            p(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : m("", !0),
        b.value === "review" ? (s(), I(ie, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: lt
        }, {
          default: d(() => [...A[34] || (A[34] = [
            p(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : m("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Gc = /* @__PURE__ */ Q(Wc, [["__scopeId", "data-v-0d3f93e6"]]), jc = { class: "search-input-wrapper" }, qc = ["value", "placeholder"], Hc = /* @__PURE__ */ Y({
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
    const n = t, i = r, h = $(null);
    let v;
    function f(l) {
      const g = l.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        i("update:modelValue", g);
      }, n.debounce)) : i("update:modelValue", g);
    }
    function u() {
      var l;
      i("update:modelValue", ""), i("clear"), (l = h.value) == null || l.focus();
    }
    return Ee(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (l, g) => (s(), o("div", jc, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: ut(u, ["escape"])
      }, null, 40, qc),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : m("", !0)
    ]));
  }
}), Kc = /* @__PURE__ */ Q(Hc, [["__scopeId", "data-v-266f857a"]]), Yc = { class: "search-bar" }, Qc = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, n) => (s(), o("div", Yc, [
      w(Kc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => r.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), _t = /* @__PURE__ */ Q(Qc, [["__scopeId", "data-v-3d51bbfd"]]), Xc = { class: "section-group" }, Zc = {
  key: 0,
  class: "section-content"
}, Jc = /* @__PURE__ */ Y({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(n.initiallyExpanded);
    function v() {
      n.collapsible && (h.value = !h.value, i("toggle", h.value));
    }
    return (f, u) => (s(), o("section", Xc, [
      w(Ke, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: v
      }, {
        default: d(() => [
          p(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (s(), o("div", Zc, [
        pe(f.$slots, "default", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ Q(Jc, [["__scopeId", "data-v-c48e33ed"]]), eu = { class: "item-header" }, tu = {
  key: 0,
  class: "item-icon"
}, su = { class: "item-info" }, ou = {
  key: 0,
  class: "item-title"
}, nu = {
  key: 1,
  class: "item-subtitle"
}, au = {
  key: 0,
  class: "item-details"
}, lu = {
  key: 1,
  class: "item-actions"
}, iu = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = t, i = D(() => n.status ? `status-${n.status}` : "");
    return (h, v) => (s(), o("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: v[0] || (v[0] = (f) => t.clickable && h.$emit("click"))
    }, [
      e("div", eu, [
        h.$slots.icon ? (s(), o("span", tu, [
          pe(h.$slots, "icon", {}, void 0, !0)
        ])) : m("", !0),
        e("div", su, [
          h.$slots.title ? (s(), o("div", ou, [
            pe(h.$slots, "title", {}, void 0, !0)
          ])) : m("", !0),
          h.$slots.subtitle ? (s(), o("div", nu, [
            pe(h.$slots, "subtitle", {}, void 0, !0)
          ])) : m("", !0)
        ])
      ]),
      h.$slots.details ? (s(), o("div", au, [
        pe(h.$slots, "details", {}, void 0, !0)
      ])) : m("", !0),
      h.$slots.actions ? (s(), o("div", lu, [
        pe(h.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), We = /* @__PURE__ */ Q(iu, [["__scopeId", "data-v-cc435e0e"]]), ru = { class: "loading-state" }, du = { class: "loading-message" }, cu = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, n) => (s(), o("div", ru, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", du, a(t.message), 1)
    ]));
  }
}), dt = /* @__PURE__ */ Q(cu, [["__scopeId", "data-v-ad8436c9"]]), uu = { class: "error-state" }, mu = { class: "error-message" }, vu = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, n) => (s(), o("div", uu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", mu, a(t.message), 1),
      t.retry ? (s(), I(ee, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => r.$emit("retry"))
      }, {
        default: d(() => [...n[1] || (n[1] = [
          p(" Retry ", -1)
        ])]),
        _: 1
      })) : m("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ Q(vu, [["__scopeId", "data-v-5397be48"]]), fu = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: n }) {
    const i = n, { getWorkflows: h } = ze();
    gs();
    const v = $([]), f = $(!1), u = $(null), l = $(""), g = $(!0), y = $(!1), c = $(!1), E = $(!1), _ = $(null), R = D(
      () => v.value.filter((se) => se.status === "broken")
    ), b = D(
      () => v.value.filter((se) => se.status === "new")
    ), S = D(
      () => v.value.filter((se) => se.status === "modified")
    ), k = D(
      () => v.value.filter((se) => se.status === "synced")
    ), N = D(() => {
      if (!l.value.trim()) return v.value;
      const se = l.value.toLowerCase();
      return v.value.filter((O) => O.name.toLowerCase().includes(se));
    }), x = D(
      () => R.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), L = D(
      () => b.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), V = D(
      () => S.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), K = D(
      () => k.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), te = D(
      () => y.value ? K.value : K.value.slice(0, 5)
    );
    async function W(se = !1) {
      f.value = !0, u.value = null;
      try {
        v.value = await h(se);
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        f.value = !1;
      }
    }
    r({ loadWorkflows: W });
    function T(se) {
      _.value = se, c.value = !0;
    }
    function M(se) {
      _.value = se, E.value = !0;
    }
    function B() {
      alert("Bulk resolution not yet implemented");
    }
    function P() {
      i("refresh");
    }
    async function H() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(se) {
      const O = [];
      return se.missing_nodes > 0 && O.push(`${se.missing_nodes} missing node${se.missing_nodes > 1 ? "s" : ""}`), se.missing_models > 0 && O.push(`${se.missing_models} missing model${se.missing_models > 1 ? "s" : ""}`), se.pending_downloads && se.pending_downloads > 0 && O.push(`${se.pending_downloads} pending download${se.pending_downloads > 1 ? "s" : ""}`), O.length > 0 ? O.join(", ") : "Has issues";
    }
    function X(se) {
      const O = se.sync_state === "new" ? "New" : se.sync_state === "modified" ? "Modified" : se.sync_state === "synced" ? "Synced" : se.sync_state;
      return se.has_path_sync_issues && se.models_needing_path_sync && se.models_needing_path_sync > 0 ? `${se.models_needing_path_sync} model path${se.models_needing_path_sync > 1 ? "s" : ""} need${se.models_needing_path_sync === 1 ? "s" : ""} sync` : O || "Unknown";
    }
    return Ee(W), (se, O) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, { title: "WORKFLOWS" }, {
            actions: d(() => [
              R.value.length > 0 ? (s(), I(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: d(() => [...O[8] || (O[8] = [
                  p(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : m("", !0)
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(_t, {
            modelValue: l.value,
            "onUpdate:modelValue": O[0] || (O[0] = (C) => l.value = C),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          f.value ? (s(), I(dt, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (s(), I(ct, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            x.value.length ? (s(), I(Me, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(x.value, (C) => (s(), I(We, {
                  key: C.name,
                  status: "broken"
                }, {
                  icon: d(() => [...O[9] || (O[9] = [
                    p("⚠", -1)
                  ])]),
                  title: d(() => [
                    p(a(C.name), 1)
                  ]),
                  subtitle: d(() => [
                    p(a(re(C)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => M(C.name)
                    }, {
                      default: d(() => [...O[10] || (O[10] = [
                        p(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(C.name)
                    }, {
                      default: d(() => [...O[11] || (O[11] = [
                        p(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            L.value.length ? (s(), I(Me, {
              key: 1,
              title: "NEW",
              count: L.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(L.value, (C) => (s(), I(We, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: d(() => [
                    p(a(C.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: d(() => [
                    p(a(C.name), 1)
                  ]),
                  subtitle: d(() => [
                    p(a(X(C)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(C.name)
                    }, {
                      default: d(() => [...O[12] || (O[12] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            V.value.length ? (s(), I(Me, {
              key: 2,
              title: "MODIFIED",
              count: V.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(V.value, (C) => (s(), I(We, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: d(() => [...O[13] || (O[13] = [
                    p("⚡", -1)
                  ])]),
                  title: d(() => [
                    p(a(C.name), 1)
                  ]),
                  subtitle: d(() => [
                    p(a(X(C)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(C.name)
                    }, {
                      default: d(() => [...O[14] || (O[14] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            K.value.length ? (s(), I(Me, {
              key: 3,
              title: "SYNCED",
              count: K.value.length,
              collapsible: !0,
              "initially-expanded": g.value,
              onToggle: O[2] || (O[2] = (C) => g.value = C)
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(te.value, (C) => (s(), I(We, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: d(() => [
                    p(a(C.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: d(() => [
                    p(a(C.name), 1)
                  ]),
                  subtitle: d(() => [
                    p(a(X(C)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(C.name)
                    }, {
                      default: d(() => [...O[15] || (O[15] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && K.value.length > 5 ? (s(), I(ee, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: O[1] || (O[1] = (C) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: d(() => [
                    p(" View all " + a(K.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : m("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : m("", !0),
            N.value.length ? m("", !0) : (s(), I(Je, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      c.value && _.value ? (s(), I(Rl, {
        key: 0,
        "workflow-name": _.value,
        onClose: O[3] || (O[3] = (C) => c.value = !1),
        onResolve: O[4] || (O[4] = (C) => M(_.value)),
        onRefresh: O[5] || (O[5] = (C) => i("refresh"))
      }, null, 8, ["workflow-name"])) : m("", !0),
      E.value && _.value ? (s(), I(Gc, {
        key: 1,
        "workflow-name": _.value,
        onClose: O[6] || (O[6] = (C) => E.value = !1),
        onInstall: P,
        onRefresh: O[7] || (O[7] = (C) => i("refresh")),
        onRestart: H
      }, null, 8, ["workflow-name"])) : m("", !0)
    ], 64));
  }
}), gu = /* @__PURE__ */ Q(fu, [["__scopeId", "data-v-b7939cb4"]]), hu = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ Q(hu, [["__scopeId", "data-v-ccb7816e"]]), pu = {
  key: 0,
  class: "model-details"
}, yu = { class: "detail-section" }, wu = { class: "detail-row" }, ku = { class: "detail-value mono" }, bu = { class: "detail-row" }, _u = { class: "detail-value mono" }, $u = { class: "detail-row" }, Cu = { class: "detail-value mono" }, xu = { class: "detail-row" }, Su = { class: "detail-value" }, Iu = { class: "detail-row" }, Eu = { class: "detail-value" }, Mu = { class: "detail-row" }, Ru = { class: "detail-value" }, zu = { class: "detail-section" }, Lu = { class: "section-header" }, Tu = {
  key: 0,
  class: "locations-list"
}, Du = { class: "location-path mono" }, Nu = {
  key: 0,
  class: "location-modified"
}, Pu = ["onClick"], Uu = {
  key: 1,
  class: "empty-state"
}, Bu = { class: "detail-section" }, Ou = { class: "section-header" }, Au = {
  key: 0,
  class: "sources-list"
}, Fu = { class: "source-type" }, Vu = ["href"], Wu = ["disabled", "onClick"], Gu = {
  key: 1,
  class: "empty-state"
}, ju = { class: "add-source-form" }, qu = ["disabled"], Hu = {
  key: 2,
  class: "source-error"
}, Ku = {
  key: 3,
  class: "source-success"
}, Yu = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const n = t, { getModelDetails: i, addModelSource: h, removeModelSource: v, openFileLocation: f } = ze(), u = $(null), l = $(!0), g = $(null), y = $(""), c = $(!1), E = $(null), _ = $(null), R = $(null), b = $(null);
    let S = null;
    function k(W, T = "success", M = 2e3) {
      S && clearTimeout(S), b.value = { message: W, type: T }, S = setTimeout(() => {
        b.value = null;
      }, M);
    }
    function N(W) {
      if (!W) return "Unknown";
      const T = 1024 * 1024 * 1024, M = 1024 * 1024;
      return W >= T ? `${(W / T).toFixed(1)} GB` : W >= M ? `${(W / M).toFixed(0)} MB` : `${(W / 1024).toFixed(0)} KB`;
    }
    function x(W) {
      navigator.clipboard.writeText(W), k("Copied to clipboard!");
    }
    async function L(W) {
      try {
        await f(W), k("Opening file location...");
      } catch {
        k("Failed to open location", "error");
      }
    }
    async function V() {
      if (!(!y.value.trim() || !u.value)) {
        c.value = !0, _.value = null, R.value = null;
        try {
          await h(u.value.hash, y.value.trim()), R.value = "Source added successfully!", y.value = "", await te();
        } catch (W) {
          _.value = W instanceof Error ? W.message : "Failed to add source";
        } finally {
          c.value = !1;
        }
      }
    }
    async function K(W) {
      if (u.value) {
        E.value = W, _.value = null, R.value = null;
        try {
          await v(u.value.hash, W), k("Source removed"), await te();
        } catch (T) {
          _.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          E.value = null;
        }
      }
    }
    async function te() {
      l.value = !0, g.value = null;
      try {
        u.value = await i(n.identifier);
      } catch (W) {
        g.value = W instanceof Error ? W.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ee(te), (W, T) => {
      var M;
      return s(), o(F, null, [
        w(Ye, {
          title: `Model Details: ${((M = u.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: g.value,
          onClose: T[5] || (T[5] = (B) => W.$emit("close"))
        }, {
          body: d(() => {
            var B, P, H, re;
            return [
              u.value ? (s(), o("div", pu, [
                e("section", yu, [
                  e("div", wu, [
                    T[6] || (T[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ku, a(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (X) => x(u.value.hash))
                    }, "Copy")) : m("", !0)
                  ]),
                  e("div", bu, [
                    T[7] || (T[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", _u, a(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (X) => x(u.value.blake3))
                    }, "Copy")) : m("", !0)
                  ]),
                  e("div", $u, [
                    T[8] || (T[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Cu, a(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (X) => x(u.value.sha256))
                    }, "Copy")) : m("", !0)
                  ]),
                  e("div", xu, [
                    T[9] || (T[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Su, a(N(u.value.size)), 1)
                  ]),
                  e("div", Iu, [
                    T[10] || (T[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Eu, a(u.value.category), 1)
                  ]),
                  e("div", Mu, [
                    T[11] || (T[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Ru, a(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", zu, [
                  e("h4", Lu, "Locations (" + a(((B = u.value.locations) == null ? void 0 : B.length) || 0) + ")", 1),
                  (P = u.value.locations) != null && P.length ? (s(), o("div", Tu, [
                    (s(!0), o(F, null, J(u.value.locations, (X, se) => (s(), o("div", {
                      key: se,
                      class: "location-item"
                    }, [
                      e("span", Du, a(X.path), 1),
                      X.modified ? (s(), o("span", Nu, "Modified: " + a(X.modified), 1)) : m("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => L(X.path)
                      }, " Open File Location ", 8, Pu)) : m("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Uu, "No locations found"))
                ]),
                e("section", Bu, [
                  e("h4", Ou, "Download Sources (" + a(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                  (re = u.value.sources) != null && re.length ? (s(), o("div", Au, [
                    (s(!0), o(F, null, J(u.value.sources, (X, se) => (s(), o("div", {
                      key: se,
                      class: "source-item"
                    }, [
                      e("span", Fu, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, Vu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: E.value === X.url,
                        onClick: (O) => K(X.url)
                      }, a(E.value === X.url ? "..." : "×"), 9, Wu)
                    ]))), 128))
                  ])) : (s(), o("div", Gu, " No download sources configured ")),
                  e("div", ju, [
                    ot(e("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (X) => y.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [cs, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || c.value,
                      onClick: V
                    }, a(c.value ? "Adding..." : "Add Source"), 9, qu)
                  ]),
                  _.value ? (s(), o("p", Hu, a(_.value), 1)) : m("", !0),
                  R.value ? (s(), o("p", Ku, a(R.value), 1)) : m("", !0)
                ])
              ])) : m("", !0)
            ];
          }),
          footer: d(() => [
            e("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (B) => W.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), I(Re, { to: "body" }, [
          b.value ? (s(), o("div", {
            key: 0,
            class: ne(["toast", b.value.type])
          }, a(b.value.message), 3)) : m("", !0)
        ]))
      ], 64);
    };
  }
}), ys = /* @__PURE__ */ Q(Yu, [["__scopeId", "data-v-f15cbb56"]]), Qu = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const n = r, { getEnvironmentModels: i, getStatus: h } = ze(), v = $([]), f = $([]), u = $("production"), l = $(!1), g = $(null), y = $(""), c = $(!1), E = $(null);
    function _() {
      c.value = !1, n("navigate", "model-index");
    }
    const R = D(
      () => v.value.reduce((te, W) => te + (W.size || 0), 0)
    ), b = D(() => {
      if (!y.value.trim()) return v.value;
      const te = y.value.toLowerCase();
      return v.value.filter((W) => W.filename.toLowerCase().includes(te));
    }), S = D(() => {
      if (!y.value.trim()) return f.value;
      const te = y.value.toLowerCase();
      return f.value.filter((W) => W.filename.toLowerCase().includes(te));
    }), k = D(() => {
      const te = {};
      for (const T of b.value) {
        const M = T.type || "other";
        te[M] || (te[M] = []), te[M].push(T);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(te).sort(([T], [M]) => {
        const B = W.indexOf(T), P = W.indexOf(M);
        return B >= 0 && P >= 0 ? B - P : B >= 0 ? -1 : P >= 0 ? 1 : T.localeCompare(M);
      }).map(([T, M]) => ({ type: T, models: M }));
    });
    function N(te) {
      if (!te) return "Unknown";
      const W = te / (1024 * 1024);
      return W >= 1024 ? `${(W / 1024).toFixed(1)} GB` : `${W.toFixed(0)} MB`;
    }
    function x(te) {
      E.value = te.hash || te.filename;
    }
    function L(te) {
      n("navigate", "model-index");
    }
    function V(te) {
      alert(`Download functionality not yet implemented for ${te}`);
    }
    async function K() {
      l.value = !0, g.value = null;
      try {
        const te = await i();
        v.value = te, f.value = [];
        const W = await h();
        u.value = W.environment || "production";
      } catch (te) {
        g.value = te instanceof Error ? te.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ee(K), (te, W) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (T) => c.value = !0)
          })
        ]),
        search: d(() => [
          w(_t, {
            modelValue: y.value,
            "onUpdate:modelValue": W[1] || (W[1] = (T) => y.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          l.value ? (s(), I(dt, {
            key: 0,
            message: "Loading environment models..."
          })) : g.value ? (s(), I(ct, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            v.value.length ? (s(), I($t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                p(" Total: " + a(v.value.length) + " models • " + a(N(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : m("", !0),
            (s(!0), o(F, null, J(k.value, (T) => (s(), I(Me, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(T.models, (M) => (s(), I(We, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...W[4] || (W[4] = [
                    p("📦", -1)
                  ])]),
                  title: d(() => [
                    p(a(M.filename), 1)
                  ]),
                  subtitle: d(() => [
                    p(a(N(M.size)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(Ce, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => x(M)
                    }, {
                      default: d(() => [...W[5] || (W[5] = [
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
            S.value.length ? (s(), I(Me, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(S.value, (T) => (s(), I(We, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: d(() => [...W[6] || (W[6] = [
                    p("⚠", -1)
                  ])]),
                  title: d(() => [
                    p(a(T.filename), 1)
                  ]),
                  subtitle: d(() => [...W[7] || (W[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: d(() => {
                    var M;
                    return [
                      w(Ce, {
                        label: "Required by:",
                        value: ((M = T.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => V(T.filename)
                    }, {
                      default: d(() => [...W[8] || (W[8] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => L(T.filename)
                    }, {
                      default: d(() => [...W[9] || (W[9] = [
                        p(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !b.value.length && !S.value.length ? (s(), I(Je, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: c.value,
        title: "About Environment Models",
        onClose: W[2] || (W[2] = (T) => c.value = !1)
      }, {
        content: d(() => [
          e("p", null, [
            W[10] || (W[10] = p(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(u.value) + '"', 1),
            W[11] || (W[11] = p(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: _
          }, {
            default: d(() => [...W[12] || (W[12] = [
              p(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (s(), I(ys, {
        key: 0,
        identifier: E.value,
        onClose: W[3] || (W[3] = (T) => E.value = null)
      }, null, 8, ["identifier"])) : m("", !0)
    ], 64));
  }
}), Xu = /* @__PURE__ */ Q(Qu, [["__scopeId", "data-v-cb4f12b3"]]), Zu = {
  key: 0,
  class: "indexing-progress"
}, Ju = { class: "progress-info" }, em = { class: "progress-label" }, tm = { class: "progress-count" }, sm = { class: "progress-bar" }, om = { class: "modal-content" }, nm = { class: "modal-header" }, am = { class: "modal-body" }, lm = { class: "input-group" }, im = { class: "current-path" }, rm = { class: "input-group" }, dm = { class: "modal-footer" }, cm = { class: "modal-content" }, um = { class: "modal-header" }, mm = { class: "modal-body" }, vm = { class: "input-group" }, fm = { class: "input-group" }, gm = { class: "modal-footer" }, hm = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: h,
      setModelsDirectory: v
    } = ze(), { addToQueue: f } = Dt(), u = r, l = $([]), g = $(!1), y = $(!1), c = $(null), E = $(""), _ = $(!1), R = $(null), b = $(!1), S = $(null), k = $(""), N = $(!1), x = $(!1), L = $(""), V = $(""), K = $(null), te = D(
      () => l.value.reduce((O, C) => O + (C.size || 0), 0)
    ), W = D(() => {
      if (!E.value.trim()) return l.value;
      const O = E.value.toLowerCase();
      return l.value.filter((C) => {
        const ae = C, oe = C.sha256 || ae.sha256_hash || "";
        return C.filename.toLowerCase().includes(O) || oe.toLowerCase().includes(O);
      });
    }), T = D(() => {
      const O = {};
      for (const ae of W.value) {
        const oe = ae.type || "other";
        O[oe] || (O[oe] = []), O[oe].push(ae);
      }
      const C = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([ae], [oe]) => {
        const xe = C.indexOf(ae), be = C.indexOf(oe);
        return xe >= 0 && be >= 0 ? xe - be : xe >= 0 ? -1 : be >= 0 ? 1 : ae.localeCompare(oe);
      }).map(([ae, oe]) => ({ type: ae, models: oe }));
    });
    function M(O) {
      if (!O) return "Unknown";
      const C = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return O >= C ? `${(O / C).toFixed(1)} GB` : O >= ae ? `${(O / ae).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function B(O) {
      R.value = O.hash || O.filename;
    }
    async function P() {
      y.value = !0, c.value = null;
      try {
        const O = await i();
        await X(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        c.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function H() {
      if (k.value.trim()) {
        N.value = !0, c.value = null;
        try {
          const O = await v(k.value.trim());
          S.value = O.path, b.value = !1, k.value = "", await X(), console.log(`Directory changed: ${O.models_indexed} models indexed`), u("refresh");
        } catch (O) {
          c.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function re() {
      if (!L.value.trim() || !V.value.trim()) return;
      const O = V.value.split("/").pop() || "model.safetensors";
      f([{
        workflow: "__manual__",
        filename: O,
        url: L.value.trim(),
        targetPath: V.value.trim()
      }]), L.value = "", V.value = "", x.value = !1;
    }
    async function X() {
      g.value = !0, c.value = null;
      try {
        l.value = await n();
      } catch (O) {
        c.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        g.value = !1;
      }
    }
    async function se() {
      try {
        const O = await h();
        S.value = O.path;
      } catch {
      }
    }
    return Ee(() => {
      X(), se();
    }), (O, C) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: C[2] || (C[2] = (ae) => _.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: P
              }, {
                default: d(() => [
                  p(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: C[0] || (C[0] = (ae) => b.value = !0)
              }, {
                default: d(() => [...C[15] || (C[15] = [
                  p(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: C[1] || (C[1] = (ae) => x.value = !0)
              }, {
                default: d(() => [...C[16] || (C[16] = [
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
        search: d(() => [
          K.value ? (s(), o("div", Zu, [
            e("div", Ju, [
              e("span", em, a(K.value.message), 1),
              e("span", tm, a(K.value.current) + "/" + a(K.value.total), 1)
            ]),
            e("div", sm, [
              e("div", {
                class: "progress-fill",
                style: nt({ width: `${K.value.current / K.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : m("", !0),
          w(_t, {
            modelValue: E.value,
            "onUpdate:modelValue": C[3] || (C[3] = (ae) => E.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          g.value || K.value ? (s(), I(dt, {
            key: 0,
            message: K.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : c.value ? (s(), I(ct, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            l.value.length ? (s(), I($t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                p(" Total: " + a(l.value.length) + " models • " + a(M(te.value)), 1)
              ]),
              _: 1
            })) : m("", !0),
            (s(!0), o(F, null, J(T.value, (ae) => (s(), I(Me, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(ae.models, (oe) => (s(), I(We, {
                  key: oe.sha256 || oe.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...C[17] || (C[17] = [
                    p("📦", -1)
                  ])]),
                  title: d(() => [
                    p(a(oe.filename), 1)
                  ]),
                  subtitle: d(() => [
                    p(a(M(oe.size)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Hash:",
                      value: oe.hash ? oe.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (xe) => B(oe)
                    }, {
                      default: d(() => [...C[18] || (C[18] = [
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
            W.value.length ? m("", !0) : (s(), I(Je, {
              key: 1,
              icon: "📭",
              message: E.value ? `No models match '${E.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: C[4] || (C[4] = (ae) => _.value = !1)
      }, {
        content: d(() => [...C[19] || (C[19] = [
          e("p", null, [
            p(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            p(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      R.value ? (s(), I(ys, {
        key: 0,
        identifier: R.value,
        onClose: C[5] || (C[5] = (ae) => R.value = null)
      }, null, 8, ["identifier"])) : m("", !0),
      (s(), I(Re, { to: "body" }, [
        b.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[9] || (C[9] = $e((ae) => b.value = !1, ["self"]))
        }, [
          e("div", om, [
            e("div", nm, [
              C[20] || (C[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[6] || (C[6] = (ae) => b.value = !1)
              }, "✕")
            ]),
            e("div", am, [
              e("div", lm, [
                C[21] || (C[21] = e("label", null, "Current Directory", -1)),
                e("code", im, a(S.value || "Not set"), 1)
              ]),
              e("div", rm, [
                C[22] || (C[22] = e("label", null, "New Directory Path", -1)),
                w(Ze, {
                  modelValue: k.value,
                  "onUpdate:modelValue": C[7] || (C[7] = (ae) => k.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              C[23] || (C[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", dm, [
              w(ie, {
                variant: "secondary",
                onClick: C[8] || (C[8] = (ae) => b.value = !1)
              }, {
                default: d(() => [...C[24] || (C[24] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ie, {
                variant: "primary",
                disabled: !k.value.trim() || N.value,
                loading: N.value,
                onClick: H
              }, {
                default: d(() => [
                  p(a(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : m("", !0)
      ])),
      (s(), I(Re, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[14] || (C[14] = $e((ae) => x.value = !1, ["self"]))
        }, [
          e("div", cm, [
            e("div", um, [
              C[25] || (C[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[10] || (C[10] = (ae) => x.value = !1)
              }, "✕")
            ]),
            e("div", mm, [
              e("div", vm, [
                C[26] || (C[26] = e("label", null, "Download URL", -1)),
                w(Ze, {
                  modelValue: L.value,
                  "onUpdate:modelValue": C[11] || (C[11] = (ae) => L.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", fm, [
                C[27] || (C[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(Ze, {
                  modelValue: V.value,
                  "onUpdate:modelValue": C[12] || (C[12] = (ae) => V.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              C[28] || (C[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", gm, [
              w(ie, {
                variant: "secondary",
                onClick: C[13] || (C[13] = (ae) => x.value = !1)
              }, {
                default: d(() => [...C[29] || (C[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ie, {
                variant: "primary",
                disabled: !L.value.trim() || !V.value.trim(),
                onClick: re
              }, {
                default: d(() => [...C[30] || (C[30] = [
                  p(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : m("", !0)
      ]))
    ], 64));
  }
}), pm = /* @__PURE__ */ Q(hm, [["__scopeId", "data-v-73b78d84"]]), ym = { class: "node-details" }, wm = { class: "status-row" }, km = {
  key: 0,
  class: "detail-row"
}, bm = { class: "value" }, _m = { class: "detail-row" }, $m = { class: "value" }, Cm = {
  key: 1,
  class: "detail-row"
}, xm = { class: "value mono" }, Sm = {
  key: 2,
  class: "detail-row"
}, Im = ["href"], Em = {
  key: 3,
  class: "detail-row"
}, Mm = { class: "value mono small" }, Rm = { class: "detail-row" }, zm = {
  key: 0,
  class: "value"
}, Lm = {
  key: 1,
  class: "workflow-list"
}, Tm = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), f = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, l) => (s(), I(Ye, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (g) => i("close"))
    }, {
      body: d(() => [
        e("div", ym, [
          e("div", wm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", h.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", km, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", bm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : m("", !0),
          e("div", _m, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", $m, a(f.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Cm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", xm, a(t.node.registry_id), 1)
          ])) : m("", !0),
          t.node.repository ? (s(), o("div", Sm, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              p(a(t.node.repository) + " ", 1),
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
            ], 8, Im)
          ])) : m("", !0),
          t.node.download_url ? (s(), o("div", Em, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Mm, a(t.node.download_url), 1)
          ])) : m("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Rm, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", zm, " Not used in any workflows ")) : (s(), o("div", Lm, [
              (s(!0), o(F, null, J(t.node.used_in_workflows, (g) => (s(), o("span", {
                key: g,
                class: "workflow-tag"
              }, a(g), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (g) => i("close"))
        }, {
          default: d(() => [...l[11] || (l[11] = [
            p(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Dm = /* @__PURE__ */ Q(Tm, [["__scopeId", "data-v-b342f626"]]), Nm = { key: 0 }, Pm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Um = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Bm = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: r }) {
    const n = r, { getNodes: i, trackNodeAsDev: h, installNode: v, uninstallNode: f } = ze(), u = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = $(!1), g = $(null), y = $(""), c = $(!1), E = $(null), _ = D(() => {
      if (!y.value.trim()) return u.value.nodes;
      const T = y.value.toLowerCase();
      return u.value.nodes.filter(
        (M) => {
          var B, P;
          return M.name.toLowerCase().includes(T) || ((B = M.description) == null ? void 0 : B.toLowerCase().includes(T)) || ((P = M.repository) == null ? void 0 : P.toLowerCase().includes(T));
        }
      );
    }), R = D(
      () => _.value.filter((T) => T.installed && T.tracked)
    ), b = D(
      () => _.value.filter((T) => !T.installed && T.tracked)
    ), S = D(
      () => _.value.filter((T) => T.installed && !T.tracked)
    );
    function k(T) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[T] || T;
    }
    function N(T) {
      return !T.used_in_workflows || T.used_in_workflows.length === 0 ? "Not used in any workflows" : T.used_in_workflows.length === 1 ? T.used_in_workflows[0] : `${T.used_in_workflows.length} workflows`;
    }
    function x(T) {
      E.value = T;
    }
    function L() {
      n("open-node-manager");
    }
    async function V(T) {
      if (confirm(`Track "${T}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const M = await h(T);
          M.status === "success" ? (alert(`Node "${T}" is now tracked as development!`), await W()) : alert(`Failed to track node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function K(T) {
      if (confirm(`Remove untracked node "${T}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const M = await f(T);
          M.status === "success" ? (alert(`Node "${T}" removed!`), await W()) : alert(`Failed to remove node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function te(T) {
      if (confirm(`Install node "${T}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const M = await v(T);
          M.status === "success" ? (alert(`Node "${T}" installed successfully!`), await W()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function W() {
      l.value = !0, g.value = null;
      try {
        u.value = await i();
      } catch (T) {
        g.value = T instanceof Error ? T.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ee(W), (T, M) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (B) => c.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: d(() => [...M[5] || (M[5] = [
                  p(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(_t, {
            modelValue: y.value,
            "onUpdate:modelValue": M[1] || (M[1] = (B) => y.value = B),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          l.value ? (s(), I(dt, {
            key: 0,
            message: "Loading nodes..."
          })) : g.value ? (s(), I(ct, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            u.value.total_count ? (s(), I($t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                p(a(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (s(), o(F, { key: 0 }, [
                  p(" • " + a(u.value.missing_count) + " missing", 1)
                ], 64)) : m("", !0),
                u.value.untracked_count ? (s(), o(F, { key: 1 }, [
                  p(" • " + a(u.value.untracked_count) + " untracked", 1)
                ], 64)) : m("", !0)
              ]),
              _: 1
            })) : m("", !0),
            S.value.length ? (s(), I(Me, {
              key: 1,
              title: "UNTRACKED",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(S.value, (B) => (s(), I(We, {
                  key: B.name,
                  status: "warning"
                }, {
                  icon: d(() => [...M[6] || (M[6] = [
                    p("?", -1)
                  ])]),
                  title: d(() => [
                    p(a(B.name), 1)
                  ]),
                  subtitle: d(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: N(B)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => x(B)
                    }, {
                      default: d(() => [...M[8] || (M[8] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => V(B.name)
                    }, {
                      default: d(() => [...M[9] || (M[9] = [
                        p(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (P) => K(B.name)
                    }, {
                      default: d(() => [...M[10] || (M[10] = [
                        p(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            R.value.length ? (s(), I(Me, {
              key: 2,
              title: "INSTALLED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(R.value, (B) => (s(), I(We, {
                  key: B.name,
                  status: "synced"
                }, {
                  icon: d(() => [
                    p(a(B.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: d(() => [
                    p(a(B.name), 1)
                  ]),
                  subtitle: d(() => [
                    B.version ? (s(), o("span", Nm, a(B.source === "development" ? "" : "v") + a(B.version), 1)) : (s(), o("span", Pm, "version unknown")),
                    e("span", Um, " • " + a(k(B.source)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: N(B)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => x(B)
                    }, {
                      default: d(() => [...M[11] || (M[11] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: L
                    }, {
                      default: d(() => [...M[12] || (M[12] = [
                        p(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            b.value.length ? (s(), I(Me, {
              key: 3,
              title: "MISSING",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(b.value, (B) => (s(), I(We, {
                  key: B.name,
                  status: "missing"
                }, {
                  icon: d(() => [...M[13] || (M[13] = [
                    p("!", -1)
                  ])]),
                  title: d(() => [
                    p(a(B.name), 1)
                  ]),
                  subtitle: d(() => [...M[14] || (M[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: d(() => [
                    w(Ce, {
                      label: "Required by:",
                      value: N(B)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => x(B)
                    }, {
                      default: d(() => [...M[15] || (M[15] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => te(B.name)
                    }, {
                      default: d(() => [...M[16] || (M[16] = [
                        p(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !R.value.length && !b.value.length && !S.value.length ? (s(), I(Je, {
              key: 4,
              icon: "📭",
              message: y.value ? `No nodes match '${y.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: c.value,
        title: "About Custom Nodes",
        onClose: M[3] || (M[3] = (B) => c.value = !1)
      }, {
        content: d(() => [...M[17] || (M[17] = [
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
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: M[2] || (M[2] = (B) => c.value = !1)
          }, {
            default: d(() => [...M[18] || (M[18] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (s(), I(Dm, {
        key: 0,
        node: E.value,
        onClose: M[4] || (M[4] = (B) => E.value = null)
      }, null, 8, ["node"])) : m("", !0)
    ], 64));
  }
}), Om = /* @__PURE__ */ Q(Bm, [["__scopeId", "data-v-4ac1465a"]]);
function ws(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Am = { class: "remote-url-display" }, Fm = ["title"], Vm = ["title"], Wm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Gm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, jm = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, n = $(!1), i = D(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const v = r.url.slice(0, Math.floor(r.maxLength * 0.6)), f = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${v}...${f}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(r.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, f) => (s(), o("div", Am, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, Fm),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Gm, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Wm, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Vm)
    ]));
  }
}), qm = /* @__PURE__ */ Q(jm, [["__scopeId", "data-v-7768a58d"]]), Hm = { class: "remote-title" }, Km = {
  key: 0,
  class: "default-badge"
}, Ym = {
  key: 1,
  class: "sync-badge"
}, Qm = {
  key: 0,
  class: "ahead"
}, Xm = {
  key: 1,
  class: "behind"
}, Zm = {
  key: 1,
  class: "synced"
}, Jm = ["href"], ev = {
  key: 1,
  class: "remote-url-text"
}, tv = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const r = t, n = D(() => r.fetchingRemote === r.remote.name), i = D(() => r.remote.is_default), h = D(() => r.syncStatus && r.syncStatus.behind > 0), v = D(() => r.syncStatus && r.syncStatus.ahead > 0), f = D(() => r.remote.push_url !== r.remote.fetch_url), u = D(() => {
      const g = r.remote.fetch_url, y = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), l = D(() => r.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, y) => (s(), I(We, {
      status: i.value ? "synced" : void 0
    }, Tt({
      icon: d(() => [
        p(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: d(() => [
        e("div", Hm, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Km, "DEFAULT")) : m("", !0),
          t.syncStatus ? (s(), o("span", Ym, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(F, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Qm, "↑" + a(t.syncStatus.ahead), 1)) : m("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Xm, "↓" + a(t.syncStatus.behind), 1)) : m("", !0)
            ], 64)) : (s(), o("span", Zm, "✓ synced"))
          ])) : m("", !0)
        ])
      ]),
      subtitle: d(() => [
        u.value ? (s(), o("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: y[0] || (y[0] = $e(() => {
          }, ["stop"]))
        }, a(l.value), 9, Jm)) : (s(), o("span", ev, a(l.value), 1))
      ]),
      actions: d(() => [
        w(ee, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (c) => g.$emit("fetch", t.remote.name))
        }, {
          default: d(() => [...y[6] || (y[6] = [
            p(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(ee, {
          variant: h.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (c) => g.$emit("pull", t.remote.name))
        }, {
          default: d(() => [
            p(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(ee, {
          variant: v.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (c) => g.$emit("push", t.remote.name))
        }, {
          default: d(() => [
            p(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(ee, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (c) => g.$emit("edit", t.remote.name))
        }, {
          default: d(() => [...y[7] || (y[7] = [
            p(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? m("", !0) : (s(), I(ee, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (c) => g.$emit("remove", t.remote.name))
        }, {
          default: d(() => [...y[8] || (y[8] = [
            p(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      f.value ? {
        name: "details",
        fn: d(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), I(Ce, {
            key: 0,
            label: "Push URL:"
          }, {
            default: d(() => [
              w(qm, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : m("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), sv = /* @__PURE__ */ Q(tv, [["__scopeId", "data-v-8310f3a8"]]), ov = ["for"], nv = {
  key: 0,
  class: "base-form-field-required"
}, av = { class: "base-form-field-input" }, lv = {
  key: 1,
  class: "base-form-field-error"
}, iv = {
  key: 2,
  class: "base-form-field-hint"
}, rv = /* @__PURE__ */ Y({
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
    const r = t, n = D(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, h) => (s(), o("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        p(a(t.label) + " ", 1),
        t.required ? (s(), o("span", nv, "*")) : m("", !0)
      ], 8, ov)) : m("", !0),
      e("div", av, [
        pe(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", lv, a(t.error), 1)) : t.hint ? (s(), o("span", iv, a(t.hint), 1)) : m("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ Q(rv, [["__scopeId", "data-v-9a1cf296"]]), dv = { class: "remote-form" }, cv = { class: "form-header" }, uv = { class: "form-body" }, mv = {
  key: 0,
  class: "form-error"
}, vv = { class: "form-actions" }, fv = /* @__PURE__ */ Y({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), v = $(!1), f = $(null);
    yt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = D(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!u.value || v.value)) {
        f.value = null, v.value = !0;
        try {
          i("submit", h.value);
        } catch (g) {
          f.value = g instanceof Error ? g.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (g, y) => (s(), o("div", dv, [
      e("div", cv, [
        w(Ke, null, {
          default: d(() => [
            p(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", uv, [
        w(qt, {
          label: "Remote Name",
          required: ""
        }, {
          default: d(() => [
            w(Ze, {
              modelValue: h.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (c) => h.value.name = c),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        w(qt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: d(() => [
            w(Ze, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (c) => h.value.fetchUrl = c),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w(qt, { label: "Push URL (optional)" }, {
          default: d(() => [
            w(Ze, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (c) => h.value.pushUrl = c),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f.value ? (s(), o("div", mv, a(f.value), 1)) : m("", !0)
      ]),
      e("div", vv, [
        w(ee, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: v.value,
          onClick: l
        }, {
          default: d(() => [
            p(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        w(ee, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (c) => g.$emit("cancel"))
        }, {
          default: d(() => [...y[4] || (y[4] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), gv = /* @__PURE__ */ Q(fv, [["__scopeId", "data-v-56021b18"]]), hv = { class: "conflict-summary-box" }, pv = { class: "summary-header" }, yv = { class: "summary-text" }, wv = { key: 0 }, kv = {
  key: 1,
  class: "all-resolved"
}, bv = { class: "summary-progress" }, _v = { class: "progress-bar" }, $v = { class: "progress-text" }, Cv = /* @__PURE__ */ Y({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const r = t, n = D(
      () => r.conflictCount > 0 ? r.resolvedCount / r.conflictCount * 100 : 0
    );
    return (i, h) => (s(), o("div", hv, [
      e("div", pv, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", yv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", wv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", kv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", bv, [
        e("div", _v, [
          e("div", {
            class: "progress-fill",
            style: nt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", $v, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), xv = /* @__PURE__ */ Q(Cv, [["__scopeId", "data-v-4e9e6cc9"]]), Sv = { class: "modal-header" }, Iv = { class: "modal-title" }, Ev = { class: "modal-body" }, Mv = {
  key: 0,
  class: "error-box"
}, Rv = {
  key: 0,
  class: "error-hint"
}, zv = {
  key: 1,
  class: "loading-state"
}, Lv = { class: "commit-summary" }, Tv = {
  key: 0,
  class: "changes-section"
}, Dv = {
  key: 0,
  class: "change-group",
  open: ""
}, Nv = { class: "change-count" }, Pv = { class: "change-list" }, Uv = {
  key: 0,
  class: "conflict-badge"
}, Bv = {
  key: 1,
  class: "change-group"
}, Ov = { class: "change-count" }, Av = { class: "change-list" }, Fv = {
  key: 2,
  class: "change-group"
}, Vv = { class: "change-count" }, Wv = { class: "change-list" }, Gv = {
  key: 2,
  class: "strategy-section"
}, jv = { class: "radio-group" }, qv = { class: "radio-option" }, Hv = { class: "radio-option" }, Kv = { class: "radio-option" }, Yv = {
  key: 3,
  class: "up-to-date"
}, Qv = { class: "modal-actions" }, ls = "comfygit.pullModelStrategy", Xv = /* @__PURE__ */ Y({
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
    const n = t, i = r, h = $(localStorage.getItem(ls) || "skip");
    yt(h, (S) => {
      localStorage.setItem(ls, S);
    });
    const v = D(() => {
      var S;
      return ((S = n.error) == null ? void 0 : S.toLowerCase().includes("unrelated histories")) ?? !1;
    }), f = D(() => {
      if (!n.preview) return 0;
      const S = n.preview.changes.workflows;
      return S.added.length + S.modified.length + S.deleted.length;
    }), u = D(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = D(() => {
      var S;
      return f.value > 0 || u.value > 0 || (((S = n.preview) == null ? void 0 : S.changes.models.count) || 0) > 0;
    }), g = D(() => n.preview && ws(n.preview) ? n.preview : null), y = D(() => {
      var S;
      return ((S = g.value) == null ? void 0 : S.workflow_conflicts.length) ?? 0;
    }), c = D(() => {
      var S;
      return ((S = n.conflictResolutions) == null ? void 0 : S.size) ?? 0;
    }), E = D(
      () => y.value > 0 && c.value === y.value
    ), _ = D(() => !(!n.preview || n.preview.has_uncommitted_changes || g.value && !E.value));
    function R(S) {
      if (!g.value) return !1;
      const k = S.replace(/\.json$/, "");
      return g.value.workflow_conflicts.some((N) => N.name === k);
    }
    function b(S) {
      const k = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: h.value, force: S, resolutions: k });
    }
    return (S, k) => {
      var N, x;
      return s(), I(Re, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[11] || (k[11] = (L) => S.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[10] || (k[10] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Sv, [
              e("h3", Iv, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (L) => S.$emit("close"))
              }, "✕")
            ]),
            e("div", Ev, [
              t.error ? (s(), o("div", Mv, [
                k[13] || (k[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  k[12] || (k[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  v.value ? (s(), o("p", Rv, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : m("", !0)
                ])
              ])) : t.loading ? (s(), o("div", zv, [...k[14] || (k[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                p(" Loading preview... ", -1)
              ])])) : (N = t.preview) != null && N.has_uncommitted_changes ? (s(), o(F, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", Lv, [
                  k[17] || (k[17] = e("span", { class: "icon" }, "📥", -1)),
                  p(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (s(), o("div", Tv, [
                  k[21] || (k[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  f.value > 0 ? (s(), o("details", Dv, [
                    e("summary", null, [
                      k[18] || (k[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Nv, a(f.value) + " changes", 1)
                    ]),
                    e("div", Pv, [
                      (s(!0), o(F, null, J(t.preview.changes.workflows.added, (L) => (s(), o("div", {
                        key: "a-" + L,
                        class: "change-item add"
                      }, " + " + a(L), 1))), 128)),
                      (s(!0), o(F, null, J(t.preview.changes.workflows.modified, (L) => (s(), o("div", {
                        key: "m-" + L,
                        class: "change-item modify"
                      }, [
                        p(" ~ " + a(L) + " ", 1),
                        R(L) ? (s(), o("span", Uv, "CONFLICT")) : m("", !0)
                      ]))), 128)),
                      (s(!0), o(F, null, J(t.preview.changes.workflows.deleted, (L) => (s(), o("div", {
                        key: "d-" + L,
                        class: "change-item delete"
                      }, " - " + a(L), 1))), 128))
                    ])
                  ])) : m("", !0),
                  u.value > 0 ? (s(), o("details", Bv, [
                    e("summary", null, [
                      k[19] || (k[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Ov, a(u.value) + " to install", 1)
                    ]),
                    e("div", Av, [
                      (s(!0), o(F, null, J(t.preview.changes.nodes.to_install, (L) => (s(), o("div", {
                        key: L,
                        class: "change-item add"
                      }, " + " + a(L), 1))), 128))
                    ])
                  ])) : m("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Fv, [
                    e("summary", null, [
                      k[20] || (k[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Vv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Wv, [
                      (s(!0), o(F, null, J(t.preview.changes.models.referenced, (L) => (s(), o("div", {
                        key: L,
                        class: "change-item"
                      }, a(L), 1))), 128))
                    ])
                  ])) : m("", !0)
                ])) : m("", !0),
                g.value ? (s(), I(xv, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": c.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : m("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Gv, [
                  k[26] || (k[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", jv, [
                    e("label", qv, [
                      ot(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[1] || (k[1] = (L) => h.value = L),
                        value: "all"
                      }, null, 512), [
                        [Wt, h.value]
                      ]),
                      k[22] || (k[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Hv, [
                      ot(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[2] || (k[2] = (L) => h.value = L),
                        value: "required"
                      }, null, 512), [
                        [Wt, h.value]
                      ]),
                      k[23] || (k[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Kv, [
                      ot(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[3] || (k[3] = (L) => h.value = L),
                        value: "skip"
                      }, null, 512), [
                        [Wt, h.value]
                      ]),
                      k[24] || (k[24] = e("span", null, "Skip model downloads", -1)),
                      k[25] || (k[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  k[27] || (k[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : m("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Yv, [
                  k[28] || (k[28] = e("span", { class: "icon" }, "✓", -1)),
                  p(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : m("", !0)
              ], 64)) : m("", !0)
            ]),
            e("div", Qv, [
              w(ee, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (L) => S.$emit("close"))
              }, {
                default: d(() => [...k[29] || (k[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(F, { key: 0 }, [
                w(ee, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: k[5] || (k[5] = (L) => b(!1))
                }, {
                  default: d(() => [...k[30] || (k[30] = [
                    p(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(ee, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: k[6] || (k[6] = (L) => b(!0))
                }, {
                  default: d(() => [...k[31] || (k[31] = [
                    p(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = t.preview) != null && x.has_uncommitted_changes ? (s(), I(ee, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: k[7] || (k[7] = (L) => b(!0))
              }, {
                default: d(() => [...k[32] || (k[32] = [
                  p(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(F, { key: 2 }, [
                g.value && !E.value ? (s(), I(ee, {
                  key: 0,
                  variant: "primary",
                  onClick: k[8] || (k[8] = (L) => i("openConflictResolution"))
                }, {
                  default: d(() => [
                    p(" Resolve Conflicts (" + a(c.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), I(ee, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !_.value,
                  onClick: k[9] || (k[9] = (L) => b(!1))
                }, {
                  default: d(() => [...k[33] || (k[33] = [
                    p(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : m("", !0)
            ])
          ])
        ])) : m("", !0)
      ]);
    };
  }
}), Zv = /* @__PURE__ */ Q(Xv, [["__scopeId", "data-v-300c7b2f"]]), Jv = { class: "modal-header" }, ef = { class: "modal-title" }, tf = { class: "modal-body" }, sf = {
  key: 0,
  class: "loading-state"
}, of = {
  key: 1,
  class: "warning-box"
}, nf = {
  key: 0,
  class: "commits-section"
}, af = { class: "commit-list" }, lf = { class: "commit-hash" }, rf = { class: "commit-message" }, df = { class: "commit-date" }, cf = { class: "force-option" }, uf = { class: "checkbox-option" }, mf = { class: "commit-summary" }, vf = {
  key: 0,
  class: "commits-section"
}, ff = { class: "commit-list" }, gf = { class: "commit-hash" }, hf = { class: "commit-message" }, pf = { class: "commit-date" }, yf = {
  key: 1,
  class: "up-to-date"
}, wf = { class: "modal-actions" }, kf = /* @__PURE__ */ Y({
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
    const n = r, i = $(!1);
    function h(v) {
      n("push", { force: v });
    }
    return (v, f) => {
      var u, l, g;
      return s(), I(Re, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (y) => v.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Jv, [
              e("h3", ef, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (y) => v.$emit("close"))
              }, "✕")
            ]),
            e("div", tf, [
              t.loading ? (s(), o("div", sf, [...f[8] || (f[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                p(" Loading preview... ", -1)
              ])])) : (u = t.preview) != null && u.has_uncommitted_changes ? (s(), o("div", of, [...f[9] || (f[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (s(), o(F, { key: 2 }, [
                f[13] || (f[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", nf, [
                  f[10] || (f[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", af, [
                    (s(!0), o(F, null, J(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", lf, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", rf, a(y.message), 1),
                      e("span", df, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                e("div", cf, [
                  e("label", uf, [
                    ot(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": f[1] || (f[1] = (y) => i.value = y)
                    }, null, 512), [
                      [us, i.value]
                    ]),
                    f[11] || (f[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  f[12] || (f[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", mf, [
                  f[14] || (f[14] = e("span", { class: "icon" }, "📤", -1)),
                  p(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", vf, [
                  f[15] || (f[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", ff, [
                    (s(!0), o(F, null, J(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", gf, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", hf, a(y.message), 1),
                      e("span", pf, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", yf, [
                  f[16] || (f[16] = e("span", { class: "icon" }, "✓", -1)),
                  p(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : m("", !0)
            ]),
            e("div", wf, [
              w(ee, {
                variant: "secondary",
                onClick: f[2] || (f[2] = (y) => v.$emit("close"))
              }, {
                default: d(() => [...f[17] || (f[17] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (g = t.preview) != null && g.remote_has_new_commits ? (s(), o(F, { key: 0 }, [
                w(ee, {
                  variant: "secondary",
                  onClick: f[3] || (f[3] = (y) => v.$emit("pull-first"))
                }, {
                  default: d(() => [...f[18] || (f[18] = [
                    p(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(ee, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: f[4] || (f[4] = (y) => h(!0))
                }, {
                  default: d(() => [...f[19] || (f[19] = [
                    p(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), I(ee, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: f[5] || (f[5] = (y) => h(!1))
              }, {
                default: d(() => [...f[20] || (f[20] = [
                  p(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : m("", !0)
            ])
          ])
        ])) : m("", !0)
      ]);
    };
  }
}), bf = /* @__PURE__ */ Q(kf, [["__scopeId", "data-v-bc6ded53"]]), _f = { class: "resolution-choice-group" }, $f = ["disabled"], Cf = ["disabled"], xf = /* @__PURE__ */ Y({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("div", _f, [
      e("button", {
        class: ne(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => r.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, $f),
      e("button", {
        class: ne(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => r.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Cf)
    ]));
  }
}), Sf = /* @__PURE__ */ Q(xf, [["__scopeId", "data-v-985715ed"]]), If = { class: "conflict-header" }, Ef = { class: "conflict-info" }, Mf = { class: "workflow-name" }, Rf = { class: "conflict-description" }, zf = {
  key: 0,
  class: "resolved-badge"
}, Lf = { class: "resolved-text" }, Tf = { class: "conflict-hashes" }, Df = { class: "hash-item" }, Nf = { class: "hash-item" }, Pf = { class: "conflict-actions" }, Uf = /* @__PURE__ */ Y({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(n.resolution);
    yt(() => n.resolution, (l) => {
      h.value = l;
    }), yt(h, (l) => {
      l && i("resolve", l);
    });
    const v = D(() => h.value !== null), f = D(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = D(() => {
      switch (h.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (l, g) => {
      var y, c;
      return s(), o("div", {
        class: ne(["conflict-item", { resolved: v.value }])
      }, [
        e("div", If, [
          g[2] || (g[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Ef, [
            e("code", Mf, a(t.conflict.name) + ".json", 1),
            e("div", Rf, a(f.value), 1)
          ]),
          v.value ? (s(), o("div", zf, [
            g[1] || (g[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Lf, a(u.value), 1)
          ])) : m("", !0)
        ]),
        e("div", Tf, [
          e("span", Df, [
            g[3] || (g[3] = p("Your: ", -1)),
            e("code", null, a(((y = t.conflict.base_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Nf, [
            g[4] || (g[4] = p("Theirs: ", -1)),
            e("code", null, a(((c = t.conflict.target_hash) == null ? void 0 : c.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Pf, [
          w(Sf, {
            modelValue: h.value,
            "onUpdate:modelValue": g[0] || (g[0] = (E) => h.value = E),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Bf = /* @__PURE__ */ Q(Uf, [["__scopeId", "data-v-506d3bbf"]]), Of = { class: "resolution-content" }, Af = {
  key: 0,
  class: "error-box"
}, Ff = { class: "resolution-header" }, Vf = { class: "header-stats" }, Wf = { class: "stat" }, Gf = { class: "stat-value" }, jf = { class: "stat resolved" }, qf = { class: "stat-value" }, Hf = {
  key: 0,
  class: "stat pending"
}, Kf = { class: "stat-value" }, Yf = { class: "conflicts-list" }, Qf = {
  key: 1,
  class: "all-resolved-message"
}, Xf = /* @__PURE__ */ Y({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = D(() => n.resolutions.size), v = D(() => n.workflowConflicts.length - h.value), f = D(() => h.value === n.workflowConflicts.length), u = D(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function l(E) {
      const _ = n.resolutions.get(E);
      return (_ == null ? void 0 : _.resolution) ?? null;
    }
    function g(E, _) {
      i("resolve", E, _);
    }
    function y() {
      i("close");
    }
    function c() {
      i("apply");
    }
    return (E, _) => (s(), I(Ye, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: d(() => [
        e("div", Of, [
          t.error ? (s(), o("div", Af, [
            _[1] || (_[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              _[0] || (_[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : m("", !0),
          e("div", Ff, [
            e("div", Vf, [
              e("div", Wf, [
                e("span", Gf, a(t.workflowConflicts.length), 1),
                _[2] || (_[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", jf, [
                e("span", qf, a(h.value), 1),
                _[3] || (_[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              v.value > 0 ? (s(), o("div", Hf, [
                e("span", Kf, a(v.value), 1),
                _[4] || (_[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : m("", !0)
            ]),
            _[5] || (_[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Yf, [
            (s(!0), o(F, null, J(t.workflowConflicts, (R) => (s(), I(Bf, {
              key: R.name,
              conflict: R,
              resolution: l(R.name),
              onResolve: (b) => g(R.name, b)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          f.value ? (s(), o("div", Qf, [
            _[6] || (_[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(u.value) + '" to continue.', 1)
          ])) : m("", !0)
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: y
        }, {
          default: d(() => [..._[7] || (_[7] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _[8] || (_[8] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ie, {
          variant: "primary",
          disabled: !f.value || t.validating,
          loading: t.validating,
          onClick: c
        }, {
          default: d(() => [
            p(a(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Zf = /* @__PURE__ */ Q(Xf, [["__scopeId", "data-v-c58d150d"]]), Jf = { class: "node-conflict-item" }, eg = { class: "node-header" }, tg = { class: "node-name" }, sg = { class: "node-id" }, og = { class: "version-comparison" }, ng = { class: "version yours" }, ag = { class: "version theirs" }, lg = { class: "chosen-version" }, ig = { class: "chosen" }, rg = { class: "chosen-reason" }, dg = { class: "affected-workflows" }, cg = { class: "wf-source" }, ug = { class: "wf-version" }, mg = /* @__PURE__ */ Y({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (r, n) => (s(), o("div", Jf, [
      e("div", eg, [
        e("code", tg, a(t.conflict.node_name), 1),
        e("span", sg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", og, [
        e("div", ng, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", ag, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", lg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", ig, a(t.conflict.chosen_version), 1),
        e("span", rg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", dg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(F, null, J(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", cg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", ug, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), vg = /* @__PURE__ */ Q(mg, [["__scopeId", "data-v-8b626725"]]), fg = { class: "validation-content" }, gg = {
  key: 0,
  class: "compatible-message"
}, hg = { class: "conflicts-list" }, pg = {
  key: 2,
  class: "warnings-section"
}, yg = /* @__PURE__ */ Y({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = D(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (v, f) => (s(), I(Ye, {
      title: "Compatibility Check",
      size: "lg",
      onClose: f[3] || (f[3] = (u) => i("cancel"))
    }, {
      body: d(() => [
        e("div", fg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", gg, [
            f[5] || (f[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              f[4] || (f[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(F, { key: 1 }, [
            f[6] || (f[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", hg, [
              (s(!0), o(F, null, J(t.validation.node_conflicts, (u) => (s(), I(vg, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            f[7] || (f[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : m("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", pg, [
            f[8] || (f[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(F, null, J(t.validation.warnings, (u, l) => (s(), o("li", { key: l }, a(u), 1))), 128))
            ])
          ])) : m("", !0)
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: f[0] || (f[0] = (u) => i("cancel"))
        }, {
          default: d(() => [...f[9] || (f[9] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[11] || (f[11] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ie, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (u) => i("goBack"))
        }, {
          default: d(() => [...f[10] || (f[10] = [
            p(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        w(ie, {
          variant: "primary",
          loading: t.executing,
          onClick: f[2] || (f[2] = (u) => i("proceed"))
        }, {
          default: d(() => [
            p(a(h.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), wg = /* @__PURE__ */ Q(yg, [["__scopeId", "data-v-fefd26ed"]]), kg = { key: 0 }, bg = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: r }) {
    const n = r, {
      getRemotes: i,
      addRemote: h,
      removeRemote: v,
      updateRemoteUrl: f,
      fetchRemote: u,
      getRemoteSyncStatus: l,
      getPullPreview: g,
      pullFromRemote: y,
      getPushPreview: c,
      pushToRemote: E,
      validateMerge: _
    } = ze(), R = $([]), b = $(null), S = $({}), k = $(!1), N = $(null), x = $(""), L = $(!1), V = $(null), K = $(!1), te = $("add"), W = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = D(() => {
      if (!x.value.trim()) return R.value;
      const U = x.value.toLowerCase();
      return R.value.filter(
        (j) => j.name.toLowerCase().includes(U) || j.fetch_url.toLowerCase().includes(U) || j.push_url.toLowerCase().includes(U)
      );
    });
    async function M() {
      k.value = !0, N.value = null;
      try {
        const U = await i();
        R.value = U.remotes, b.value = U.current_branch_tracking || null, await Promise.all(
          U.remotes.map(async (j) => {
            const de = await l(j.name);
            de && (S.value[j.name] = de);
          })
        );
      } catch (U) {
        N.value = U instanceof Error ? U.message : "Failed to load remotes";
      } finally {
        k.value = !1;
      }
    }
    function B() {
      te.value = "add", W.value = { name: "", fetchUrl: "", pushUrl: "" }, K.value = !0;
    }
    function P(U) {
      const j = R.value.find((de) => de.name === U);
      j && (te.value = "edit", W.value = {
        name: j.name,
        fetchUrl: j.fetch_url,
        pushUrl: j.push_url
      }, K.value = !0);
    }
    async function H(U) {
      try {
        te.value === "add" ? await h(U.name, U.fetchUrl) : await f(U.name, U.fetchUrl, U.pushUrl || void 0), K.value = !1, await M();
      } catch (j) {
        N.value = j instanceof Error ? j.message : "Operation failed";
      }
    }
    function re() {
      K.value = !1, W.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(U) {
      V.value = U;
      try {
        await u(U);
        const j = await l(U);
        j && (S.value[U] = j), n("toast", `✓ Fetched from ${U}`, "success");
      } catch (j) {
        n("toast", j instanceof Error ? j.message : "Fetch failed", "error");
      } finally {
        V.value = null;
      }
    }
    async function se(U) {
      if (confirm(`Remove remote "${U}"?`))
        try {
          await v(U), await M();
        } catch (j) {
          N.value = j instanceof Error ? j.message : "Failed to remove remote";
        }
    }
    function O() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const C = $("idle"), ae = D(() => C.value === "pull_preview"), oe = D(
      () => C.value === "resolving" || C.value === "validating"
    ), xe = D(
      () => C.value === "validation_review" || C.value === "executing"
    ), be = $(!1), Le = $(null), Ae = $(!1), ce = $(null), Fe = $(!1), ke = $(null), Te = $(null), Ge = $(/* @__PURE__ */ new Map()), et = $(null), he = $(null), je = D(() => ke.value && ws(ke.value) ? ke.value : null);
    async function qe(U) {
      ce.value = U, C.value = "pull_preview", Fe.value = !0, ke.value = null, Te.value = null;
      try {
        ke.value = await g(U);
      } catch (j) {
        Te.value = j instanceof Error ? j.message : "Failed to load pull preview";
      } finally {
        Fe.value = !1;
      }
    }
    function He() {
      C.value = "idle", ke.value = null, Te.value = null, ce.value = null;
    }
    async function mt(U) {
      if (!ce.value) return;
      C.value = "executing", Te.value = null;
      const j = ce.value;
      try {
        const de = await y(j, U);
        if (de.rolled_back) {
          Te.value = `Pull failed and was rolled back: ${de.error || "Unknown error"}`, C.value = "pull_preview";
          return;
        }
        A(), C.value = "idle", n("toast", `✓ Pulled from ${j}`, "success"), await M();
      } catch (de) {
        Te.value = de instanceof Error ? de.message : "Pull failed", C.value = "pull_preview";
      }
    }
    function me() {
      je.value && (C.value = "resolving", he.value = null);
    }
    function De(U, j) {
      Ge.value.set(U, { name: U, resolution: j });
    }
    function vt() {
      C.value = "pull_preview";
    }
    async function lt() {
      C.value = "validating", he.value = null;
      try {
        const U = Array.from(Ge.value.values());
        et.value = await _(ce.value, U), C.value = "validation_review";
      } catch (U) {
        he.value = U instanceof Error ? U.message : "Validation failed", C.value = "resolving";
      }
    }
    async function Se() {
      C.value = "executing";
      const U = ce.value;
      try {
        const j = Array.from(Ge.value.values()), de = await y(U, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: j
        });
        if (de.rolled_back) {
          Te.value = `Pull failed and was rolled back: ${de.error || "Unknown error"}`, C.value = "pull_preview";
          return;
        }
        A(), C.value = "idle", n("toast", `✓ Pulled from ${U}`, "success"), await M();
      } catch (j) {
        Te.value = j instanceof Error ? j.message : "Pull failed", C.value = "validation_review";
      }
    }
    function ft() {
      C.value = "resolving";
    }
    function q() {
      A(), C.value = "idle";
    }
    function A() {
      Ge.value.clear(), et.value = null, he.value = null, Te.value = null, ke.value = null, ce.value = null;
    }
    async function Z(U) {
      ce.value = U, be.value = !0, Fe.value = !0, Le.value = null;
      try {
        Le.value = await c(U);
      } catch (j) {
        N.value = j instanceof Error ? j.message : "Failed to load push preview";
      } finally {
        Fe.value = !1;
      }
    }
    function ge() {
      be.value = !1, Le.value = null, ce.value = null;
    }
    async function Ie(U) {
      if (!ce.value) return;
      Ae.value = !0;
      const j = ce.value;
      try {
        await E(j, U), ge(), n("toast", `✓ Pushed to ${j}`, "success"), await M();
      } catch (de) {
        n("toast", de instanceof Error ? de.message : "Push failed", "error");
      } finally {
        Ae.value = !1;
      }
    }
    function Ne() {
      const U = ce.value;
      ge(), U && qe(U);
    }
    return Ee(M), (U, j) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (de) => L.value = !0)
          }, {
            actions: d(() => [
              K.value ? m("", !0) : (s(), I(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: d(() => [...j[3] || (j[3] = [
                  p(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          K.value ? m("", !0) : (s(), I(_t, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": j[1] || (j[1] = (de) => x.value = de),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: d(() => [
          k.value ? (s(), I(dt, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (s(), I(ct, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            K.value ? (s(), I(gv, {
              key: 0,
              mode: te.value,
              "remote-name": W.value.name,
              "fetch-url": W.value.fetchUrl,
              "push-url": W.value.pushUrl,
              onSubmit: H,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : m("", !0),
            R.value.length && !K.value ? (s(), I($t, {
              key: 1,
              variant: "compact"
            }, {
              default: d(() => [
                p(" Total: " + a(R.value.length) + " remote" + a(R.value.length !== 1 ? "s" : "") + " ", 1),
                b.value ? (s(), o("span", kg, " • Tracking: " + a(b.value.remote) + "/" + a(b.value.branch), 1)) : m("", !0)
              ]),
              _: 1
            })) : m("", !0),
            T.value.length && !K.value ? (s(), I(Me, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(T.value, (de) => (s(), I(sv, {
                  key: de.name,
                  remote: de,
                  "sync-status": S.value[de.name],
                  "fetching-remote": V.value,
                  onFetch: X,
                  onEdit: P,
                  onRemove: se,
                  onPull: qe,
                  onPush: Z
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !T.value.length && !K.value ? (s(), I(Je, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: d(() => [
                w(ee, {
                  variant: "primary",
                  onClick: B
                }, {
                  default: d(() => [...j[4] || (j[4] = [
                    p(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: L.value,
        title: "About Git Remotes",
        onClose: j[2] || (j[2] = (de) => L.value = !1)
      }, {
        content: d(() => [...j[5] || (j[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            p(" The "),
            e("strong", null, '"origin"'),
            p(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: d(() => [
          w(ee, {
            variant: "link",
            onClick: O
          }, {
            default: d(() => [...j[6] || (j[6] = [
              p(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(Zv, {
        show: ae.value,
        "remote-name": ce.value || "",
        preview: ke.value,
        loading: Fe.value,
        pulling: C.value === "executing",
        error: Te.value,
        "conflict-resolutions": Ge.value,
        onClose: He,
        onPull: mt,
        onOpenConflictResolution: me
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(bf, {
        show: be.value,
        "remote-name": ce.value || "",
        preview: Le.value,
        loading: Fe.value,
        pushing: Ae.value,
        onClose: ge,
        onPush: Ie,
        onPullFirst: Ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      oe.value && je.value ? (s(), I(Zf, {
        key: 0,
        "workflow-conflicts": je.value.workflow_conflicts,
        resolutions: Ge.value,
        "operation-type": "pull",
        validating: C.value === "validating",
        error: he.value,
        onClose: vt,
        onResolve: De,
        onApply: lt
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : m("", !0),
      xe.value && et.value ? (s(), I(wg, {
        key: 1,
        validation: et.value,
        "operation-type": "pull",
        executing: C.value === "executing",
        onProceed: Se,
        onGoBack: ft,
        onCancel: q
      }, null, 8, ["validation", "executing"])) : m("", !0)
    ], 64));
  }
}), _g = /* @__PURE__ */ Q(bg, [["__scopeId", "data-v-9ae3b76d"]]), $g = { class: "setting-info" }, Cg = { class: "setting-label" }, xg = {
  key: 0,
  class: "required-marker"
}, Sg = {
  key: 0,
  class: "setting-description"
}, Ig = { class: "setting-control" }, Eg = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", $g, [
        e("div", Cg, [
          p(a(t.label) + " ", 1),
          t.required ? (s(), o("span", xg, "*")) : m("", !0)
        ]),
        t.description ? (s(), o("div", Sg, a(t.description), 1)) : m("", !0)
      ]),
      e("div", Ig, [
        pe(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), St = /* @__PURE__ */ Q(Eg, [["__scopeId", "data-v-cb5d236c"]]), Mg = { class: "toggle" }, Rg = ["checked", "disabled"], zg = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("label", Mg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => r.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Rg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ht = /* @__PURE__ */ Q(zg, [["__scopeId", "data-v-71c0f550"]]), Lg = { class: "settings-section" }, Tg = { class: "path-setting" }, Dg = { class: "path-value" }, Ng = { class: "path-setting" }, Pg = { class: "path-value" }, Ug = { class: "settings-section" }, Bg = { class: "settings-section" }, Og = { class: "settings-section" }, Ag = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: n } = ze(), i = $(!1), h = $(null), v = $(null), f = $(null), u = $(null), l = $(""), g = $(""), y = $(!0), c = $(!0), E = $(!1), _ = D(() => u.value ? l.value !== (u.value.civitai_api_key || "") : !1);
    async function R() {
      i.value = !0, h.value = null;
      try {
        f.value = await r(), u.value = { ...f.value }, l.value = f.value.civitai_api_key || "", g.value = f.value.huggingface_token || "", y.value = f.value.auto_sync_models, c.value = f.value.confirm_destructive;
        const N = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        E.value = N === "true";
      } catch (N) {
        h.value = N instanceof Error ? N.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function b() {
      var N;
      v.value = null;
      try {
        const x = {};
        l.value !== (((N = u.value) == null ? void 0 : N.civitai_api_key) || "") && (x.civitai_api_key = l.value || null), await n(x), await R(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (x) {
        v.value = {
          type: "error",
          message: x instanceof Error ? x.message : "Failed to save settings"
        };
      }
    }
    function S() {
      u.value && (l.value = u.value.civitai_api_key || "", g.value = u.value.huggingface_token || "", y.value = u.value.auto_sync_models, c.value = u.value.confirm_destructive, v.value = null);
    }
    function k(N) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(N)), console.log("[ComfyGit] Auto-refresh setting saved:", N);
    }
    return Ee(R), (N, x) => (s(), I(Be, null, {
      header: d(() => [
        w(Oe, { title: "WORKSPACE SETTINGS" }, {
          actions: d(() => [
            w(ee, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: b
            }, {
              default: d(() => [...x[5] || (x[5] = [
                p(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (s(), I(ee, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: S
            }, {
              default: d(() => [...x[6] || (x[6] = [
                p(" Reset ", -1)
              ])]),
              _: 1
            })) : m("", !0)
          ]),
          _: 1
        })
      ]),
      content: d(() => [
        i.value ? (s(), I(dt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (s(), I(ct, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: R
        }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
          w(Me, { title: "WORKSPACE PATHS" }, {
            default: d(() => {
              var L, V;
              return [
                e("div", Lg, [
                  e("div", Tg, [
                    x[7] || (x[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    x[8] || (x[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Dg, a(((L = f.value) == null ? void 0 : L.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Ng, [
                    x[9] || (x[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    x[10] || (x[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Pg, a(((V = f.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          w(Me, { title: "API CREDENTIALS" }, {
            default: d(() => [
              e("div", Ug, [
                w(St, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: d(() => [
                    w(At, {
                      modelValue: l.value,
                      "onUpdate:modelValue": x[0] || (x[0] = (L) => l.value = L),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(St, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(At, {
                      modelValue: g.value,
                      "onUpdate:modelValue": x[1] || (x[1] = (L) => g.value = L),
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
          w(Me, { title: "UI SETTINGS" }, {
            default: d(() => [
              e("div", Bg, [
                w(St, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: d(() => [
                    w(Ht, {
                      modelValue: E.value,
                      "onUpdate:modelValue": [
                        x[2] || (x[2] = (L) => E.value = L),
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
          w(Me, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: d(() => [
              e("div", Og, [
                w(St, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(Ht, {
                      modelValue: y.value,
                      "onUpdate:modelValue": x[3] || (x[3] = (L) => y.value = L),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(St, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(Ht, {
                      modelValue: c.value,
                      "onUpdate:modelValue": x[4] || (x[4] = (L) => c.value = L),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), I($t, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: d(() => [
              e("span", {
                style: nt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : m("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Fg = /* @__PURE__ */ Q(Ag, [["__scopeId", "data-v-7861bd35"]]), Vg = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = ze(), n = $([]), i = $(!1), h = $(null), v = $(!1), f = $(null), u = D(() => n.value.length === 0 ? [] : n.value.map((g) => ({
      text: `${g.timestamp} - ${g.name} - ${g.level} - ${g.func}:${g.line} - ${g.message}`,
      level: g.level
    })));
    async function l() {
      i.value = !0, h.value = null;
      try {
        n.value = await r(void 0, 500);
      } catch (g) {
        h.value = g instanceof Error ? g.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var g;
          (g = f.value) != null && g.parentElement && (f.value.parentElement.scrollTop = f.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ee(l), (g, y) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: y[0] || (y[0] = (c) => v.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: i.value
              }, {
                default: d(() => [
                  p(a(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: d(() => [
          i.value ? (s(), I(dt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (s(), I(ct, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            n.value.length === 0 ? (s(), I(Je, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: f,
              class: "log-output"
            }, [
              (s(!0), o(F, null, J(u.value, (c, E) => (s(), o("div", {
                key: E,
                class: ne(`log-line log-level-${c.level.toLowerCase()}`)
              }, a(c.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: y[2] || (y[2] = (c) => v.value = !1)
      }, {
        content: d(() => [...y[3] || (y[3] = [
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
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: y[1] || (y[1] = (c) => v.value = !1)
          }, {
            default: d(() => [...y[4] || (y[4] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Wg = /* @__PURE__ */ Q(Vg, [["__scopeId", "data-v-39f6a756"]]), Gg = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: n } = ze(), i = $([]), h = $(!1), v = $(null), f = $(!1), u = $("production"), l = $(null), g = D(() => i.value.length === 0 ? [] : i.value.map((c) => ({
      text: `${c.timestamp} - ${c.name} - ${c.level} - ${c.func}:${c.line} - ${c.message}`,
      level: c.level
    })));
    async function y() {
      h.value = !0, v.value = null;
      try {
        i.value = await r(void 0, 500);
        try {
          const c = await n();
          u.value = c.environment || "production";
        } catch {
        }
      } catch (c) {
        v.value = c instanceof Error ? c.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var c;
          (c = l.value) != null && c.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ee(y), (c, E) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (_) => f.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: y,
                disabled: h.value
              }, {
                default: d(() => [
                  p(a(h.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: d(() => [
          h.value ? (s(), I(dt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), I(ct, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: y
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            i.value.length === 0 ? (s(), I(Je, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(F, null, J(g.value, (_, R) => (s(), o("div", {
                key: R,
                class: ne(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: f.value,
        title: "About Environment Logs",
        onClose: E[2] || (E[2] = (_) => f.value = !1)
      }, {
        content: d(() => [
          e("p", null, [
            E[3] || (E[3] = p(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(u.value), 1),
            E[4] || (E[4] = p(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          E[5] || (E[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          E[6] || (E[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: E[1] || (E[1] = (_) => f.value = !1)
          }, {
            default: d(() => [...E[7] || (E[7] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jg = /* @__PURE__ */ Q(Gg, [["__scopeId", "data-v-4f1e6f72"]]), qg = { class: "env-title" }, Hg = {
  key: 0,
  class: "current-badge"
}, Kg = {
  key: 0,
  class: "branch-info"
}, Yg = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), I(We, {
      status: t.isCurrent ? "synced" : void 0
    }, Tt({
      icon: d(() => [
        p(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: d(() => [
        e("div", qg, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Hg, "CURRENT")) : m("", !0)
        ])
      ]),
      subtitle: d(() => [
        t.currentBranch ? (s(), o("span", Kg, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          p(" " + a(t.currentBranch), 1)
        ])) : m("", !0)
      ]),
      actions: d(() => [
        pe(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: d(() => [
          w(Ce, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(Ce, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(Ce, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), I(Ce, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : m("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Qg = /* @__PURE__ */ Q(Yg, [["__scopeId", "data-v-9231917a"]]), Xg = { class: "env-details" }, Zg = { class: "status-row" }, Jg = {
  key: 0,
  class: "detail-row"
}, eh = { class: "value mono" }, th = {
  key: 1,
  class: "detail-row"
}, sh = { class: "value mono small" }, oh = { class: "detail-row" }, nh = { class: "value" }, ah = { class: "detail-row" }, lh = { class: "value" }, ih = { class: "detail-row" }, rh = { class: "value" }, dh = {
  key: 2,
  class: "section-divider"
}, ch = {
  key: 3,
  class: "detail-row"
}, uh = { class: "value" }, mh = {
  key: 4,
  class: "detail-row"
}, vh = { class: "value" }, fh = { class: "footer-actions" }, gh = /* @__PURE__ */ Y({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: r }) {
    const n = r;
    function i(h) {
      if (!h) return "Unknown";
      try {
        const v = new Date(h), u = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(u / 6e4), g = Math.floor(u / 36e5), y = Math.floor(u / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : g < 24 ? `${g} ${g === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, v) => (s(), I(Ye, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (f) => n("close"))
    }, {
      body: d(() => [
        e("div", Xg, [
          e("div", Zg, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Jg, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", eh, a(t.environment.current_branch), 1)
          ])) : m("", !0),
          t.environment.path ? (s(), o("div", th, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", sh, a(t.environment.path), 1)
          ])) : m("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", oh, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", nh, a(t.environment.workflow_count), 1)
          ]),
          e("div", ah, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", lh, a(t.environment.node_count), 1)
          ]),
          e("div", ih, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", rh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", dh)) : m("", !0),
          t.environment.created_at ? (s(), o("div", ch, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", uh, a(i(t.environment.created_at)), 1)
          ])) : m("", !0),
          t.environment.last_used ? (s(), o("div", mh, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", vh, a(i(t.environment.last_used)), 1)
          ])) : m("", !0)
        ])
      ]),
      footer: d(() => [
        e("div", fh, [
          t.canDelete ? (s(), I(ie, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => n("delete", t.environment.name))
          }, {
            default: d(() => [...v[12] || (v[12] = [
              p(" Delete ", -1)
            ])]),
            _: 1
          })) : m("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          w(ie, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (f) => n("close"))
          }, {
            default: d(() => [...v[13] || (v[13] = [
              p(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), hh = /* @__PURE__ */ Q(gh, [["__scopeId", "data-v-59855453"]]), ph = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], yh = "3.12", ks = [
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
], wh = "auto", kh = { class: "create-env-form" }, bh = { class: "form-field" }, _h = { class: "form-field" }, $h = ["value"], Ch = { class: "form-field" }, xh = ["disabled"], Sh = ["value"], Ih = { class: "form-field" }, Eh = ["value"], Mh = { class: "form-field form-field--checkbox" }, Rh = { class: "form-checkbox" }, zh = /* @__PURE__ */ Y({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: r }) {
    const n = r, { getComfyUIReleases: i } = ze(), h = $(""), v = $(yh), f = $("latest"), u = $(wh), l = $(!1), g = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), y = $(!1), c = $(null);
    function E() {
      const R = h.value.trim();
      if (!R) return;
      const b = {
        name: R,
        python_version: v.value,
        comfyui_version: f.value,
        torch_backend: u.value,
        switch_after: l.value
      };
      n("create", b);
    }
    async function _() {
      y.value = !0;
      try {
        g.value = await i();
      } catch (R) {
        console.error("Failed to load ComfyUI releases:", R);
      } finally {
        y.value = !1;
      }
    }
    return Ee(async () => {
      var R;
      await Bs(), (R = c.value) == null || R.focus(), _();
    }), (R, b) => (s(), I(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: b[6] || (b[6] = (S) => n("close"))
    }, {
      body: d(() => [
        e("div", kh, [
          e("div", bh, [
            b[7] || (b[7] = e("label", { class: "form-label" }, "Name", -1)),
            ot(e("input", {
              ref_key: "nameInput",
              ref: c,
              "onUpdate:modelValue": b[0] || (b[0] = (S) => h.value = S),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ut(E, ["enter"])
            }, null, 544), [
              [cs, h.value]
            ])
          ]),
          e("div", _h, [
            b[8] || (b[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            ot(e("select", {
              "onUpdate:modelValue": b[1] || (b[1] = (S) => v.value = S),
              class: "form-select"
            }, [
              (s(!0), o(F, null, J(ye(ph), (S) => (s(), o("option", {
                key: S,
                value: S
              }, a(S), 9, $h))), 128))
            ], 512), [
              [Gt, v.value]
            ])
          ]),
          e("div", Ch, [
            b[9] || (b[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            ot(e("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (S) => f.value = S),
              class: "form-select",
              disabled: y.value
            }, [
              (s(!0), o(F, null, J(g.value, (S) => (s(), o("option", {
                key: S.tag_name,
                value: S.tag_name
              }, a(S.name), 9, Sh))), 128))
            ], 8, xh), [
              [Gt, f.value]
            ])
          ]),
          e("div", Ih, [
            b[10] || (b[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            ot(e("select", {
              "onUpdate:modelValue": b[3] || (b[3] = (S) => u.value = S),
              class: "form-select"
            }, [
              (s(!0), o(F, null, J(ye(ks), (S) => (s(), o("option", {
                key: S,
                value: S
              }, a(S) + a(S === "auto" ? " (detect GPU)" : ""), 9, Eh))), 128))
            ], 512), [
              [Gt, u.value]
            ])
          ]),
          e("div", Mh, [
            e("label", Rh, [
              ot(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": b[4] || (b[4] = (S) => l.value = S)
              }, null, 512), [
                [us, l.value]
              ]),
              b[11] || (b[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "primary",
          disabled: !h.value.trim(),
          onClick: E
        }, {
          default: d(() => [...b[12] || (b[12] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(ie, {
          variant: "secondary",
          onClick: b[5] || (b[5] = (S) => n("close"))
        }, {
          default: d(() => [...b[13] || (b[13] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Lh = /* @__PURE__ */ Q(zh, [["__scopeId", "data-v-a2f13447"]]), Th = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: r, emit: n }) {
    const i = n, { getEnvironments: h } = ze(), v = $([]), f = $(!1), u = $(null), l = $(""), g = $(!1), y = $(!1), c = $(null), E = D(
      () => v.value.find((x) => x.is_current)
    ), _ = D(() => {
      if (!l.value.trim()) return v.value;
      const x = l.value.toLowerCase();
      return v.value.filter(
        (L) => {
          var V;
          return L.name.toLowerCase().includes(x) || ((V = L.current_branch) == null ? void 0 : V.toLowerCase().includes(x));
        }
      );
    });
    function R(x) {
      i("create", x), y.value = !1;
    }
    function b() {
      y.value = !0;
    }
    function S(x) {
      c.value = x;
    }
    function k(x) {
      c.value = null, i("delete", x);
    }
    async function N() {
      f.value = !0, u.value = null;
      try {
        v.value = await h();
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environments";
      } finally {
        f.value = !1;
      }
    }
    return Ee(N), r({
      loadEnvironments: N
    }), (x, L) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (V) => g.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: d(() => [...L[6] || (L[6] = [
                  p(" Create ", -1)
                ])]),
                _: 1
              }),
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: N
              }, {
                default: d(() => [...L[7] || (L[7] = [
                  p(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(_t, {
            modelValue: l.value,
            "onUpdate:modelValue": L[1] || (L[1] = (V) => l.value = V),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          f.value ? (s(), I(dt, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (s(), I(ct, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            v.value.length ? (s(), I($t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                p(" Total: " + a(v.value.length) + " " + a(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                E.value ? (s(), o(F, { key: 0 }, [
                  L[8] || (L[8] = p(" • Current: ", -1)),
                  e("strong", null, a(E.value.name), 1)
                ], 64)) : m("", !0)
              ]),
              _: 1
            })) : m("", !0),
            _.value.length ? (s(), I(Me, {
              key: 1,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(_.value, (V) => (s(), I(Qg, {
                  key: V.name,
                  "environment-name": V.name,
                  "is-current": V.is_current,
                  "current-branch": V.current_branch,
                  "show-last-used": !1
                }, {
                  actions: d(() => [
                    V.is_current ? m("", !0) : (s(), I(ee, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => x.$emit("switch", V.name)
                    }, {
                      default: d(() => [...L[9] || (L[9] = [
                        p(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => S(V)
                    }, {
                      default: d(() => [...L[10] || (L[10] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            _.value.length ? m("", !0) : (s(), I(Je, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Tt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: d(() => [
                  w(ee, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: d(() => [...L[11] || (L[11] = [
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
      w(at, {
        show: g.value,
        title: "About Environments",
        onClose: L[3] || (L[3] = (V) => g.value = !1)
      }, {
        content: d(() => [...L[12] || (L[12] = [
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
        actions: d(() => [
          w(ee, {
            variant: "secondary",
            onClick: L[2] || (L[2] = (V) => g.value = !1)
          }, {
            default: d(() => [...L[13] || (L[13] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      c.value ? (s(), I(hh, {
        key: 0,
        environment: c.value,
        "can-delete": v.value.length > 1,
        onClose: L[4] || (L[4] = (V) => c.value = null),
        onDelete: k
      }, null, 8, ["environment", "can-delete"])) : m("", !0),
      y.value ? (s(), I(Lh, {
        key: 1,
        onClose: L[5] || (L[5] = (V) => y.value = !1),
        onCreate: R
      })) : m("", !0)
    ], 64));
  }
}), Dh = /* @__PURE__ */ Q(Th, [["__scopeId", "data-v-307d9926"]]), Nh = { class: "file-path" }, Ph = { class: "file-path-text" }, Uh = ["title"], Bh = /* @__PURE__ */ Y({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, n = $(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(r.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, v) => (s(), o("div", Nh, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Ph, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Uh)) : m("", !0)
    ]));
  }
}), Oh = /* @__PURE__ */ Q(Bh, [["__scopeId", "data-v-f0982173"]]), Ah = { class: "export-blocked" }, Fh = { class: "issues-list" }, Vh = { class: "issue-message" }, Wh = {
  key: 0,
  class: "issue-details"
}, Gh = ["onClick"], jh = { class: "issue-fix" }, qh = /* @__PURE__ */ Y({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const r = t, n = Xt({});
    function i(h) {
      const v = r.issues[h];
      return n[h] || v.details.length <= 3 ? v.details : v.details.slice(0, 3);
    }
    return (h, v) => (s(), I(Ye, {
      title: "Cannot Export",
      size: "md",
      onClose: v[1] || (v[1] = (f) => h.$emit("close"))
    }, {
      body: d(() => [
        e("div", Ah, [
          v[2] || (v[2] = e("div", { class: "error-header" }, [
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
          e("div", Fh, [
            (s(!0), o(F, null, J(t.issues, (f, u) => (s(), o("div", {
              key: u,
              class: "issue-item"
            }, [
              e("div", Vh, a(f.message), 1),
              f.details.length ? (s(), o("div", Wh, [
                (s(!0), o(F, null, J(i(u), (l, g) => (s(), o("div", {
                  key: g,
                  class: "issue-detail"
                }, a(l), 1))), 128)),
                f.details.length > 3 && !n[u] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (l) => n[u] = !0
                }, " +" + a(f.details.length - 3) + " more ", 9, Gh)) : m("", !0)
              ])) : m("", !0),
              e("div", jh, [
                f.type === "uncommitted_workflows" ? (s(), o(F, { key: 0 }, [
                  p(" Commit your workflow changes before exporting. ")
                ], 64)) : f.type === "uncommitted_git_changes" ? (s(), o(F, { key: 1 }, [
                  p(" Commit your changes before exporting. ")
                ], 64)) : f.type === "unresolved_issues" ? (s(), o(F, { key: 2 }, [
                  p(" Resolve all workflow issues before exporting. ")
                ], 64)) : m("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "primary",
          onClick: v[0] || (v[0] = (f) => h.$emit("close"))
        }, {
          default: d(() => [...v[3] || (v[3] = [
            p(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Hh = /* @__PURE__ */ Q(qh, [["__scopeId", "data-v-b52f5e32"]]), Kh = { class: "export-warnings" }, Yh = { class: "warning-header" }, Qh = { class: "warning-summary" }, Xh = { class: "warning-title" }, Zh = { class: "models-section" }, Jh = { class: "models-list" }, ep = { class: "model-filename" }, tp = { class: "model-workflows" }, sp = /* @__PURE__ */ Y({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel"],
  setup(t) {
    const r = t, n = $(!1), i = D(() => n.value || r.models.length <= 3 ? r.models : r.models.slice(0, 3));
    return (h, v) => (s(), I(Ye, {
      title: "Export Warnings",
      size: "md",
      onClose: v[3] || (v[3] = (f) => h.$emit("cancel"))
    }, {
      body: d(() => [
        e("div", Kh, [
          e("div", Yh, [
            v[5] || (v[5] = e("span", { class: "warning-icon" }, [
              e("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M7.47 1.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06-1.06L13.44 9H1.75a.75.75 0 0 1 0-1.5h11.69L7.47 3.03a.75.75 0 0 1 0-1.06z" }),
                e("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                e("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
              ])
            ], -1)),
            e("div", Qh, [
              e("h3", Xh, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
              v[4] || (v[4] = e("p", { class: "warning-description" }, " Recipients won't be able to download these models automatically. They'll need to source the models manually. ", -1))
            ])
          ]),
          e("div", Zh, [
            e("div", Jh, [
              (s(!0), o(F, null, J(i.value, (f) => (s(), o("div", {
                key: f.hash,
                class: "model-item"
              }, [
                e("div", ep, a(f.filename), 1),
                e("div", tp, " Used by: " + a(f.workflows.join(", ")), 1)
              ]))), 128))
            ]),
            t.models.length > 3 && !n.value ? (s(), o("button", {
              key: 0,
              class: "show-more-btn",
              onClick: v[0] || (v[0] = (f) => n.value = !0)
            }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : m("", !0)
          ]),
          v[6] || (v[6] = e("div", { class: "fix-guidance" }, [
            e("span", { class: "guidance-icon" }, [
              e("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm6.5-.25A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75zM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" })
              ])
            ]),
            e("div", { class: "guidance-text" }, [
              e("strong", null, "How to fix:"),
              p(" Add source URLs to your models using "),
              e("code", null, "cg model add-source"),
              p(" or from the Model Index page. ")
            ])
          ], -1))
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (f) => h.$emit("cancel"))
        }, {
          default: d(() => [...v[7] || (v[7] = [
            p(" Cancel Export ", -1)
          ])]),
          _: 1
        }),
        w(ie, {
          variant: "primary",
          onClick: v[2] || (v[2] = (f) => h.$emit("confirm"))
        }, {
          default: d(() => [...v[8] || (v[8] = [
            p(" Export Anyway ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), op = /* @__PURE__ */ Q(sp, [["__scopeId", "data-v-f130e8f7"]]), np = { class: "export-card" }, ap = { class: "export-path-row" }, lp = { class: "export-actions" }, ip = {
  key: 1,
  class: "export-warning"
}, rp = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: r, exportEnvWithForce: n } = ze(), i = $(""), h = $(!1), v = $(!1), f = $(!1), u = $(null), l = $(!1), g = $(null), y = $(!1), c = $(!1), E = D(() => h.value ? "Validating..." : v.value ? "Exporting..." : "Export Environment");
    async function _() {
      h.value = !0, u.value = null;
      try {
        const N = await r();
        g.value = N, N.can_export ? N.warnings.models_without_sources.length > 0 ? c.value = !0 : await b() : y.value = !0;
      } catch (N) {
        u.value = {
          status: "error",
          message: N instanceof Error ? N.message : "Validation failed"
        };
      } finally {
        h.value = !1;
      }
    }
    async function R() {
      c.value = !1, await b();
    }
    async function b() {
      v.value = !0;
      try {
        const N = await n(i.value || void 0);
        u.value = N;
      } catch (N) {
        u.value = {
          status: "error",
          message: N instanceof Error ? N.message : "Export failed"
        };
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      var N;
      if ((N = u.value) != null && N.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function k() {
      var N;
      if ((N = u.value) != null && N.path) {
        f.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const L = await x.blob(), V = URL.createObjectURL(L), K = u.value.path.split("/").pop() || "environment-export.tar.gz", te = document.createElement("a");
          te.href = V, te.download = K, document.body.appendChild(te), te.click(), document.body.removeChild(te), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return (N, x) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (L) => l.value = !0)
          })
        ]),
        content: d(() => [
          w(Me, { title: "EXPORT OPTIONS" }, {
            default: d(() => [
              e("div", np, [
                x[7] || (x[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", ap, [
                  w(At, {
                    modelValue: i.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (L) => i.value = L),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", lp, [
                  w(ee, {
                    variant: "primary",
                    size: "md",
                    loading: h.value || v.value,
                    disabled: h.value || v.value,
                    onClick: _
                  }, {
                    default: d(() => [
                      x[6] || (x[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      p(" " + a(E.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (s(), I(Me, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: d(() => [
              w(We, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, Tt({
                icon: d(() => [
                  p(a(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: d(() => [
                  p(a(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: d(() => [
                  p(a(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: d(() => [
                    w(Ce, { label: "Saved to:" }, {
                      default: d(() => [
                        w(Oh, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (s(), I(Ce, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : m("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (s(), o("div", ip, [...x[8] || (x[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : m("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: k
                    }, {
                      default: d(() => [...x[9] || (x[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: S
                    }, {
                      default: d(() => [...x[10] || (x[10] = [
                        p(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (L) => u.value = null)
                    }, {
                      default: d(() => [...x[11] || (x[11] = [
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
          })) : m("", !0)
        ]),
        _: 1
      }),
      w(at, {
        show: l.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (L) => l.value = !1)
      }, {
        content: d(() => [...x[12] || (x[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  p(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  p(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  p(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  p(" — Environment settings and metadata")
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
              p(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value && g.value ? (s(), I(Hh, {
        key: 0,
        issues: g.value.blocking_issues,
        onClose: x[4] || (x[4] = (L) => y.value = !1)
      }, null, 8, ["issues"])) : m("", !0),
      c.value && g.value ? (s(), I(op, {
        key: 1,
        models: g.value.warnings.models_without_sources,
        onConfirm: R,
        onCancel: x[5] || (x[5] = (L) => c.value = !1)
      }, null, 8, ["models"])) : m("", !0)
    ], 64));
  }
}), dp = /* @__PURE__ */ Q(rp, [["__scopeId", "data-v-b333f7a5"]]), cp = { class: "file-input-wrapper" }, up = ["accept", "multiple", "disabled"], mp = /* @__PURE__ */ Y({
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
    const i = n, h = $(null);
    function v() {
      var u;
      (u = h.value) == null || u.click();
    }
    function f(u) {
      const l = u.target;
      l.files && l.files.length > 0 && (i("change", l.files), l.value = "");
    }
    return r({
      triggerInput: v
    }), (u, l) => (s(), o("div", cp, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, up),
      w(ee, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: d(() => [
          pe(u.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            p(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), vp = /* @__PURE__ */ Q(mp, [["__scopeId", "data-v-cd192091"]]), fp = {
  key: 0,
  class: "drop-zone-empty"
}, gp = { class: "drop-zone-text" }, hp = { class: "drop-zone-primary" }, pp = { class: "drop-zone-secondary" }, yp = { class: "drop-zone-actions" }, wp = {
  key: 1,
  class: "drop-zone-file"
}, kp = { class: "file-info" }, bp = { class: "file-details" }, _p = { class: "file-name" }, $p = { class: "file-size" }, Cp = /* @__PURE__ */ Y({
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
    const n = r, i = $(!1), h = $(null), v = $(0), f = D(() => h.value !== null), u = D(() => {
      var S;
      return ((S = h.value) == null ? void 0 : S.name) || "";
    }), l = D(() => {
      if (!h.value) return "";
      const S = h.value.size;
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function g(S) {
      var k;
      S.stopPropagation(), v.value++, (k = S.dataTransfer) != null && k.types.includes("Files") && (i.value = !0);
    }
    function y(S) {
      S.stopPropagation(), S.dataTransfer && (S.dataTransfer.dropEffect = "copy");
    }
    function c(S) {
      S.stopPropagation(), v.value--, v.value === 0 && (i.value = !1);
    }
    function E(S) {
      var N;
      S.stopPropagation(), v.value = 0, i.value = !1;
      const k = (N = S.dataTransfer) == null ? void 0 : N.files;
      k && k.length > 0 && R(k[0]);
    }
    function _(S) {
      S.length > 0 && R(S[0]);
    }
    function R(S) {
      h.value = S, n("fileSelected", S);
    }
    function b() {
      h.value = null, n("clear");
    }
    return (S, k) => (s(), o("div", {
      class: ne(["file-drop-zone", { "drop-active": i.value, "has-file": f.value }]),
      onDragenter: $e(g, ["prevent"]),
      onDragover: $e(y, ["prevent"]),
      onDragleave: $e(c, ["prevent"]),
      onDrop: $e(E, ["prevent"])
    }, [
      f.value ? (s(), o("div", wp, [
        e("div", kp, [
          k[1] || (k[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", bp, [
            e("div", _p, a(u.value), 1),
            e("div", $p, a(l.value), 1)
          ])
        ]),
        w(ee, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: d(() => [...k[2] || (k[2] = [
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
      ])) : (s(), o("div", fp, [
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
        e("div", gp, [
          e("p", hp, a(t.primaryText), 1),
          e("p", pp, a(t.secondaryText), 1)
        ]),
        e("div", yp, [
          w(vp, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: _
          }, {
            default: d(() => [
              p(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), xp = /* @__PURE__ */ Q(Cp, [["__scopeId", "data-v-b774d3bb"]]), Sp = { class: "import-preview" }, Ip = { class: "preview-header" }, Ep = {
  key: 0,
  class: "source-env"
}, Mp = { class: "preview-content" }, Rp = { class: "preview-section" }, zp = { class: "section-header" }, Lp = { class: "section-info" }, Tp = { class: "section-count" }, Dp = {
  key: 0,
  class: "item-list"
}, Np = { class: "item-name" }, Pp = {
  key: 0,
  class: "item-more"
}, Up = { class: "preview-section" }, Bp = { class: "section-header" }, Op = { class: "section-info" }, Ap = { class: "section-count" }, Fp = {
  key: 0,
  class: "item-list"
}, Vp = { class: "item-details" }, Wp = { class: "item-name" }, Gp = { class: "item-meta" }, jp = {
  key: 0,
  class: "item-more"
}, qp = { class: "preview-section" }, Hp = { class: "section-header" }, Kp = { class: "section-info" }, Yp = { class: "section-count" }, Qp = {
  key: 0,
  class: "item-list"
}, Xp = { class: "item-name" }, Zp = {
  key: 0,
  class: "item-more"
}, Jp = {
  key: 0,
  class: "preview-section"
}, e1 = { class: "git-info" }, t1 = /* @__PURE__ */ Y({
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
    const r = t, n = D(() => r.workflows.length), i = D(() => r.models.length), h = D(() => r.nodes.length);
    function v(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, u) => (s(), o("div", Sp, [
      e("div", Ip, [
        w(Ke, null, {
          default: d(() => [...u[0] || (u[0] = [
            p("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Ep, [
          u[1] || (u[1] = p(" From: ", -1)),
          w(Yt, null, {
            default: d(() => [
              p(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : m("", !0)
      ]),
      e("div", Mp, [
        e("div", Rp, [
          e("div", zp, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Lp, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Tp, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Dp, [
            (s(!0), o(F, null, J(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Np, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Pp, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        e("div", Up, [
          e("div", Bp, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Op, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Ap, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Fp, [
            (s(!0), o(F, null, J(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Vp, [
                e("span", Wp, a(l.filename), 1),
                e("span", Gp, a(v(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", jp, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        e("div", qp, [
          e("div", Hp, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Kp, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Yp, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Qp, [
            (s(!0), o(F, null, J(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Xp, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Zp, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Jp, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", e1, [
            t.gitBranch ? (s(), I(Ce, {
              key: 0,
              label: "Branch"
            }, {
              default: d(() => [
                w(Yt, null, {
                  default: d(() => [
                    p(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : m("", !0),
            t.gitCommit ? (s(), I(Ce, {
              key: 1,
              label: "Commit"
            }, {
              default: d(() => [
                w(vs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : m("", !0)
          ])
        ])) : m("", !0)
      ])
    ]));
  }
}), s1 = /* @__PURE__ */ Q(t1, [["__scopeId", "data-v-182fe113"]]), o1 = { class: "import-config" }, n1 = { class: "config-container" }, a1 = { class: "config-field" }, l1 = { class: "input-wrapper" }, i1 = ["value"], r1 = {
  key: 0,
  class: "validating-indicator"
}, d1 = {
  key: 1,
  class: "valid-indicator"
}, c1 = {
  key: 0,
  class: "field-error"
}, u1 = { class: "config-field" }, m1 = { class: "strategy-options" }, v1 = ["value", "checked", "onChange"], f1 = { class: "strategy-content" }, g1 = { class: "strategy-label" }, h1 = { class: "strategy-description" }, p1 = { class: "advanced-section" }, y1 = { class: "advanced-content" }, w1 = { class: "config-field" }, k1 = ["value"], b1 = ["value"], _1 = /* @__PURE__ */ Y({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "validate-name"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(!1), v = $(!1);
    yt(() => n.nameError, (y) => {
      h.value = !1, v.value = !y && n.name.length > 0;
    });
    const f = [
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
    let u = null;
    function l(y) {
      const c = y.target.value;
      i("update:name", c), v.value = !1, u && clearTimeout(u), c.length > 0 ? (h.value = !0, u = setTimeout(() => {
        i("validate-name", c);
      }, 400)) : h.value = !1;
    }
    function g() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (y, c) => (s(), o("div", o1, [
      w(Ke, null, {
        default: d(() => [...c[1] || (c[1] = [
          p("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", n1, [
        e("div", a1, [
          w(Bt, { required: "" }, {
            default: d(() => [...c[2] || (c[2] = [
              p("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", l1, [
            e("input", {
              type: "text",
              class: ne(["name-input", { error: t.nameError, valid: v.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: l,
              onBlur: g
            }, null, 42, i1),
            h.value ? (s(), o("span", r1, "...")) : v.value ? (s(), o("span", d1, "✓")) : m("", !0)
          ]),
          t.nameError ? (s(), o("div", c1, a(t.nameError), 1)) : m("", !0),
          c[3] || (c[3] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", u1, [
          w(Bt, null, {
            default: d(() => [...c[4] || (c[4] = [
              p("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", m1, [
            (s(), o(F, null, J(f, (E) => e("label", {
              key: E.value,
              class: ne(["strategy-option", { active: t.modelStrategy === E.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: E.value,
                checked: t.modelStrategy === E.value,
                onChange: (_) => i("update:modelStrategy", E.value)
              }, null, 40, v1),
              e("div", f1, [
                e("span", g1, a(E.label), 1),
                e("span", h1, a(E.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("details", p1, [
          c[6] || (c[6] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", y1, [
            e("div", w1, [
              w(Bt, null, {
                default: d(() => [...c[5] || (c[5] = [
                  p("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: c[0] || (c[0] = (E) => i("update:torchBackend", E.target.value))
              }, [
                (s(!0), o(F, null, J(ye(ks), (E) => (s(), o("option", {
                  key: E,
                  value: E
                }, a(E) + a(E === "auto" ? " (detect GPU)" : ""), 9, b1))), 128))
              ], 40, k1)
            ])
          ])
        ])
      ])
    ]));
  }
}), $1 = /* @__PURE__ */ Q(_1, [["__scopeId", "data-v-ea63af76"]]), C1 = {
  key: 0,
  class: "import-empty"
}, x1 = {
  key: 1,
  class: "import-configure"
}, S1 = { class: "selected-file-bar" }, I1 = { class: "file-bar-content" }, E1 = { class: "file-bar-info" }, M1 = { class: "file-bar-name" }, R1 = { class: "file-bar-size" }, z1 = {
  key: 0,
  class: "preview-loading"
}, L1 = { class: "import-actions" }, T1 = {
  key: 2,
  class: "import-progress"
}, D1 = { class: "progress-content" }, N1 = { class: "progress-info" }, P1 = { class: "progress-title" }, U1 = { class: "progress-detail" }, B1 = { class: "progress-bar" }, O1 = { class: "progress-status" }, A1 = {
  key: 3,
  class: "import-complete"
}, F1 = { class: "complete-message" }, V1 = { class: "complete-title" }, W1 = { class: "complete-details" }, G1 = { class: "complete-actions" }, j1 = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const { previewTarballImport: r, validateEnvironmentName: n, executeImport: i, getImportProgress: h } = ze();
    let v = null;
    const f = $(!1), u = $(null), l = $(!1), g = $(!1), y = $(!1), c = $(""), E = $(!1), _ = $(null), R = $(null), b = $({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto"
    }), S = $(null), k = $({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), N = D(() => {
      if (!R.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const P = R.value;
      return {
        sourceEnvironment: P.comfyui_version ? `ComfyUI ${P.comfyui_version}` : "Unknown",
        workflows: P.workflows.map((H) => H.name),
        models: P.models.map((H) => ({
          filename: H.filename,
          size: 0,
          type: H.relative_path.split("/")[0] || "model"
        })),
        nodes: P.nodes.map((H) => H.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), x = D(() => !E.value && !_.value && R.value && b.value.name.length > 0 && !S.value);
    async function L(P) {
      u.value = P, E.value = !0, _.value = null, R.value = null;
      try {
        const H = await r(P);
        R.value = H;
      } catch (H) {
        _.value = H instanceof Error ? H.message : "Failed to analyze file", console.error("Preview error:", H);
      } finally {
        E.value = !1;
      }
    }
    function V() {
      u.value = null, g.value = !1, y.value = !1, c.value = "", R.value = null, _.value = null, b.value = { name: "", modelStrategy: "required", torchBackend: "auto" }, S.value = null;
    }
    function K() {
      M(), V(), l.value = !1, E.value = !1, k.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function te(P) {
      if (!P) {
        S.value = "Environment name is required";
        return;
      }
      try {
        const H = await n(P);
        S.value = H.valid ? null : H.error || "Invalid name";
      } catch {
        S.value = "Failed to validate name";
      }
    }
    async function W() {
      if (!(!u.value || !b.value.name)) {
        l.value = !0, g.value = !1, k.value = { message: `Creating environment '${b.value.name}'...`, detail: "", percent: 0 };
        try {
          const P = await i(
            u.value,
            b.value.name,
            b.value.modelStrategy,
            b.value.torchBackend
          );
          P.status === "started" ? T() : (y.value = !1, c.value = P.message, l.value = !1, g.value = !0);
        } catch (P) {
          y.value = !1, c.value = P instanceof Error ? P.message : "Unknown error occurred during import", l.value = !1, g.value = !0;
        }
      }
    }
    function T() {
      v || (v = setInterval(async () => {
        try {
          const P = await h();
          k.value = {
            message: P.message,
            detail: "",
            percent: P.state === "importing" ? 50 : P.state === "complete" ? 100 : 0
          }, P.state === "complete" ? (M(), y.value = !0, c.value = `Environment '${P.environment_name}' created successfully`, l.value = !1, g.value = !0) : P.state === "error" && (M(), y.value = !1, c.value = P.error || P.message, l.value = !1, g.value = !0);
        } catch (P) {
          console.error("Failed to poll import progress:", P);
        }
      }, 2e3));
    }
    function M() {
      v && (clearInterval(v), v = null);
    }
    function B(P) {
      return P < 1024 ? `${P} B` : P < 1024 * 1024 ? `${(P / 1024).toFixed(1)} KB` : P < 1024 * 1024 * 1024 ? `${(P / (1024 * 1024)).toFixed(1)} MB` : `${(P / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (P, H) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (re) => f.value = !0)
          })
        ]),
        content: d(() => {
          var re;
          return [
            !u.value && !l.value ? (s(), o("div", C1, [
              w(xp, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: L
              })
            ])) : u.value && !l.value && !g.value ? (s(), o("div", x1, [
              e("div", S1, [
                e("div", I1, [
                  H[5] || (H[5] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", E1, [
                    e("div", M1, a(u.value.name), 1),
                    e("div", R1, a(B(u.value.size)), 1)
                  ])
                ]),
                w(ee, {
                  variant: "ghost",
                  size: "sm",
                  onClick: V
                }, {
                  default: d(() => [...H[6] || (H[6] = [
                    p(" Change File ", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value ? (s(), o("div", z1, [...H[7] || (H[7] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : _.value ? (s(), I(pt, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [_.value]
              }, null, 8, ["details"])) : R.value ? (s(), I(s1, {
                key: 2,
                "source-environment": N.value.sourceEnvironment,
                workflows: N.value.workflows,
                models: N.value.models,
                nodes: N.value.nodes,
                "git-branch": N.value.gitBranch,
                "git-commit": N.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : m("", !0),
              R.value ? (s(), I($1, {
                key: 3,
                name: b.value.name,
                "onUpdate:name": H[1] || (H[1] = (X) => b.value.name = X),
                "model-strategy": b.value.modelStrategy,
                "onUpdate:modelStrategy": H[2] || (H[2] = (X) => b.value.modelStrategy = X),
                "torch-backend": b.value.torchBackend,
                "onUpdate:torchBackend": H[3] || (H[3] = (X) => b.value.torchBackend = X),
                "name-error": S.value,
                onValidateName: te
              }, null, 8, ["name", "model-strategy", "torch-backend", "name-error"])) : m("", !0),
              b.value.modelStrategy === "skip" && ((re = R.value) != null && re.models_needing_download) ? (s(), I(pt, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${R.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : m("", !0),
              e("div", L1, [
                w(ee, {
                  variant: "primary",
                  size: "md",
                  disabled: !x.value,
                  onClick: W
                }, {
                  default: d(() => [...H[8] || (H[8] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 4v4h3l-4 4-4-4h3V4h2z" })
                    ], -1),
                    p(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"]),
                w(ee, {
                  variant: "secondary",
                  size: "md",
                  onClick: V
                }, {
                  default: d(() => [...H[9] || (H[9] = [
                    p(" Cancel ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : l.value ? (s(), o("div", T1, [
              e("div", D1, [
                H[10] || (H[10] = e("div", { class: "progress-icon" }, [
                  e("div", { class: "spinner" })
                ], -1)),
                e("div", N1, [
                  e("div", P1, a(k.value.message), 1),
                  e("div", U1, a(k.value.detail), 1)
                ])
              ]),
              e("div", B1, [
                e("div", {
                  class: "progress-bar-fill",
                  style: nt({ width: `${k.value.percent}%` })
                }, null, 4)
              ]),
              e("div", O1, a(k.value.percent) + "% complete ", 1)
            ])) : g.value ? (s(), o("div", A1, [
              e("div", {
                class: ne(["complete-icon", y.value ? "success" : "error"])
              }, a(y.value ? "✓" : "✕"), 3),
              e("div", F1, [
                e("div", V1, a(y.value ? "Import Successful" : "Import Failed"), 1),
                e("div", W1, a(c.value), 1)
              ]),
              e("div", G1, [
                w(ee, {
                  variant: "primary",
                  size: "md",
                  onClick: K
                }, {
                  default: d(() => [...H[11] || (H[11] = [
                    p(" Import Another ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : m("", !0)
          ];
        }),
        _: 1
      }),
      w(at, {
        show: f.value,
        title: "How Import Works",
        onClose: H[4] || (H[4] = (re) => f.value = !1)
      }, {
        content: d(() => [...H[12] || (H[12] = [
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
}), q1 = /* @__PURE__ */ Q(j1, [["__scopeId", "data-v-f9c61799"]]), H1 = { class: "header-info" }, K1 = { class: "commit-hash" }, Y1 = {
  key: 0,
  class: "commit-refs"
}, Q1 = { class: "commit-message" }, X1 = { class: "commit-date" }, Z1 = {
  key: 0,
  class: "loading"
}, J1 = {
  key: 1,
  class: "changes-section"
}, ey = { class: "stats-row" }, ty = { class: "stat" }, sy = { class: "stat insertions" }, oy = { class: "stat deletions" }, ny = {
  key: 0,
  class: "change-group"
}, ay = {
  key: 1,
  class: "change-group"
}, ly = {
  key: 0,
  class: "version"
}, iy = {
  key: 2,
  class: "change-group"
}, ry = { class: "change-item" }, dy = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: n } = ze(), i = $(null), h = $(!0), v = D(() => {
      if (!i.value) return !1;
      const u = i.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), f = D(() => {
      if (!i.value) return !1;
      const u = i.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Ee(async () => {
      try {
        i.value = await n(r.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (u, l) => (s(), I(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (g) => u.$emit("close"))
    }, {
      header: d(() => {
        var g, y, c, E;
        return [
          e("div", H1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", K1, a(((g = i.value) == null ? void 0 : g.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (E = (c = i.value) == null ? void 0 : c.refs) != null && E.length ? (s(), o("span", Y1, [
              (s(!0), o(F, null, J(i.value.refs, (_) => (s(), o("span", {
                key: _,
                class: "ref-badge"
              }, a(_), 1))), 128))
            ])) : m("", !0)
          ]),
          w(ie, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (_) => u.$emit("close"))
          }, {
            default: d(() => [...l[5] || (l[5] = [
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
      body: d(() => {
        var g, y;
        return [
          e("div", Q1, a(((g = i.value) == null ? void 0 : g.message) || t.commit.message), 1),
          e("div", X1, a(((y = i.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (s(), o("div", Z1, "Loading details...")) : i.value ? (s(), o("div", J1, [
            e("div", ey, [
              e("span", ty, a(i.value.stats.files_changed) + " files", 1),
              e("span", sy, "+" + a(i.value.stats.insertions), 1),
              e("span", oy, "-" + a(i.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", ny, [
              w(Rt, { variant: "section" }, {
                default: d(() => [...l[6] || (l[6] = [
                  p("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, J(i.value.changes.workflows.added, (c) => (s(), o("div", {
                key: "add-" + c,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(c), 1)
              ]))), 128)),
              (s(!0), o(F, null, J(i.value.changes.workflows.modified, (c) => (s(), o("div", {
                key: "mod-" + c,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(c), 1)
              ]))), 128)),
              (s(!0), o(F, null, J(i.value.changes.workflows.deleted, (c) => (s(), o("div", {
                key: "del-" + c,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(c), 1)
              ]))), 128))
            ])) : m("", !0),
            f.value ? (s(), o("div", ay, [
              w(Rt, { variant: "section" }, {
                default: d(() => [...l[10] || (l[10] = [
                  p("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, J(i.value.changes.nodes.added, (c) => (s(), o("div", {
                key: "add-" + c.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(c.name), 1),
                c.version ? (s(), o("span", ly, "(" + a(c.version) + ")", 1)) : m("", !0)
              ]))), 128)),
              (s(!0), o(F, null, J(i.value.changes.nodes.removed, (c) => (s(), o("div", {
                key: "rem-" + c.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(c.name), 1)
              ]))), 128))
            ])) : m("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", iy, [
              w(Rt, { variant: "section" }, {
                default: d(() => [...l[13] || (l[13] = [
                  p("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", ry, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : m("", !0)
          ])) : m("", !0)
        ];
      }),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (g) => u.$emit("createBranch", t.commit))
        }, {
          default: d(() => [...l[15] || (l[15] = [
            p(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(ie, {
          variant: "primary",
          onClick: l[2] || (l[2] = (g) => u.$emit("checkout", t.commit))
        }, {
          default: d(() => [...l[16] || (l[16] = [
            p(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), cy = /* @__PURE__ */ Q(dy, [["__scopeId", "data-v-d256ff6d"]]), uy = { class: "dialog-message" }, my = {
  key: 0,
  class: "dialog-details"
}, vy = {
  key: 1,
  class: "dialog-warning"
}, fy = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), I(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => r.$emit("cancel"))
    }, {
      body: d(() => [
        e("p", uy, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", my, [
          (s(!0), o(F, null, J(t.details, (i, h) => (s(), o("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : m("", !0),
        t.warning ? (s(), o("p", vy, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          p(" " + a(t.warning), 1)
        ])) : m("", !0)
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => r.$emit("cancel"))
        }, {
          default: d(() => [
            p(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), I(ie, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => r.$emit("secondary"))
        }, {
          default: d(() => [
            p(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : m("", !0),
        w(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => r.$emit("confirm"))
        }, {
          default: d(() => [
            p(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gy = /* @__PURE__ */ Q(fy, [["__scopeId", "data-v-3670b9f5"]]), hy = { class: "base-textarea-wrapper" }, py = ["value", "rows", "placeholder", "disabled", "maxlength"], yy = {
  key: 0,
  class: "base-textarea-count"
}, wy = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), o("div", hy, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => r.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = ut($e((i) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ut($e((i) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, py),
      t.showCharCount && t.maxLength ? (s(), o("div", yy, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : m("", !0)
    ]));
  }
}), is = /* @__PURE__ */ Q(wy, [["__scopeId", "data-v-5516e6fc"]]), ky = ["checked", "disabled"], by = { class: "base-checkbox-box" }, _y = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, $y = {
  key: 0,
  class: "base-checkbox-label"
}, Cy = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => r.$emit("update:modelValue", i.target.checked))
      }, null, 40, ky),
      e("span", by, [
        t.modelValue ? (s(), o("svg", _y, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : m("", !0)
      ]),
      r.$slots.default ? (s(), o("span", $y, [
        pe(r.$slots, "default", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), rs = /* @__PURE__ */ Q(Cy, [["__scopeId", "data-v-bf17c831"]]), xy = { class: "popover-header" }, Sy = { class: "popover-body" }, Iy = {
  key: 0,
  class: "changes-summary"
}, Ey = {
  key: 0,
  class: "change-item"
}, My = {
  key: 1,
  class: "change-item"
}, Ry = {
  key: 2,
  class: "change-item"
}, zy = {
  key: 3,
  class: "change-item"
}, Ly = {
  key: 4,
  class: "change-item"
}, Ty = {
  key: 1,
  class: "no-changes"
}, Dy = {
  key: 2,
  class: "loading"
}, Ny = {
  key: 3,
  class: "issues-error"
}, Py = { class: "error-header" }, Uy = { class: "error-title" }, By = { class: "issues-list" }, Oy = { class: "message-section" }, Ay = { class: "popover-footer" }, Fy = {
  key: 1,
  class: "commit-popover"
}, Vy = { class: "popover-header" }, Wy = { class: "popover-body" }, Gy = {
  key: 0,
  class: "changes-summary"
}, jy = {
  key: 0,
  class: "change-item"
}, qy = {
  key: 1,
  class: "change-item"
}, Hy = {
  key: 2,
  class: "change-item"
}, Ky = {
  key: 3,
  class: "change-item"
}, Yy = {
  key: 4,
  class: "change-item"
}, Qy = {
  key: 1,
  class: "no-changes"
}, Xy = {
  key: 2,
  class: "loading"
}, Zy = {
  key: 3,
  class: "issues-error"
}, Jy = { class: "error-header" }, ew = { class: "error-title" }, tw = { class: "issues-list" }, sw = { class: "message-section" }, ow = { class: "popover-footer" }, nw = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const n = t, i = r, { commit: h } = ze(), v = $(""), f = $(!1), u = $(!1), l = $(null), g = D(() => {
      if (!n.status) return !1;
      const R = n.status.workflows;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || n.status.has_changes;
    }), y = D(() => {
      var R;
      return (R = n.status) != null && R.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), c = D(() => y.value.length > 0), E = D(() => c.value && !u.value);
    async function _() {
      var R, b, S;
      if (!(c.value && !u.value) && !(!g.value || !v.value.trim() || f.value)) {
        f.value = !0, l.value = null;
        try {
          const k = await h(v.value.trim(), u.value);
          k.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((R = k.summary) == null ? void 0 : R.new) || 0} new, ${((b = k.summary) == null ? void 0 : b.modified) || 0} modified, ${((S = k.summary) == null ? void 0 : S.deleted) || 0} deleted`
          }, v.value = "", u.value = !1, setTimeout(() => i("committed"), 1e3)) : k.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : k.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: k.message || "Commit failed" };
        } catch (k) {
          l.value = { type: "error", message: k instanceof Error ? k.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (R, b) => t.asModal ? (s(), I(Re, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (S) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", xy, [
            b[11] || (b[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (S) => i("close"))
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
          e("div", Sy, [
            t.status && g.value ? (s(), o("div", Iy, [
              t.status.workflows.new.length ? (s(), o("div", Ey, [
                b[12] || (b[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : m("", !0),
              t.status.workflows.modified.length ? (s(), o("div", My, [
                b[13] || (b[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : m("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Ry, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : m("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", zy, [
                b[15] || (b[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : m("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Ly, [
                b[16] || (b[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : m("", !0)
            ])) : t.status ? (s(), o("div", Ty, " No changes to commit ")) : (s(), o("div", Dy, " Loading... ")),
            c.value ? (s(), o("div", Ny, [
              e("div", Py, [
                b[17] || (b[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Uy, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", By, [
                (s(!0), o(F, null, J(y.value, (S) => (s(), o("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(S.name), 1),
                  p(": " + a(S.issue_summary), 1)
                ]))), 128))
              ]),
              w(rs, {
                modelValue: u.value,
                "onUpdate:modelValue": b[1] || (b[1] = (S) => u.value = S),
                class: "allow-issues-toggle"
              }, {
                default: d(() => [...b[18] || (b[18] = [
                  p(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : m("", !0),
            e("div", Oy, [
              w(is, {
                modelValue: v.value,
                "onUpdate:modelValue": b[2] || (b[2] = (S) => v.value = S),
                placeholder: E.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
                disabled: !g.value || f.value || E.value,
                rows: 3,
                onCtrlEnter: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: ne(["result", l.value.type])
            }, a(l.value.message), 3)) : m("", !0)
          ]),
          e("div", Ay, [
            w(ie, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (S) => i("close"))
            }, {
              default: d(() => [...b[19] || (b[19] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: u.value ? "danger" : "primary",
              disabled: !g.value || !v.value.trim() || f.value || E.value,
              loading: f.value,
              onClick: _
            }, {
              default: d(() => [
                p(a(f.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Fy, [
      e("div", Vy, [
        b[21] || (b[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (S) => i("close"))
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
      e("div", Wy, [
        t.status && g.value ? (s(), o("div", Gy, [
          t.status.workflows.new.length ? (s(), o("div", jy, [
            b[22] || (b[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : m("", !0),
          t.status.workflows.modified.length ? (s(), o("div", qy, [
            b[23] || (b[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : m("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Hy, [
            b[24] || (b[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : m("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Ky, [
            b[25] || (b[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : m("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Yy, [
            b[26] || (b[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : m("", !0)
        ])) : t.status ? (s(), o("div", Qy, " No changes to commit ")) : (s(), o("div", Xy, " Loading... ")),
        c.value ? (s(), o("div", Zy, [
          e("div", Jy, [
            b[27] || (b[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", ew, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", tw, [
            (s(!0), o(F, null, J(y.value, (S) => (s(), o("div", {
              key: S.name,
              class: "issue-item"
            }, [
              e("strong", null, a(S.name), 1),
              p(": " + a(S.issue_summary), 1)
            ]))), 128))
          ]),
          w(rs, {
            modelValue: u.value,
            "onUpdate:modelValue": b[7] || (b[7] = (S) => u.value = S),
            class: "allow-issues-toggle"
          }, {
            default: d(() => [...b[28] || (b[28] = [
              p(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : m("", !0),
        e("div", sw, [
          w(is, {
            modelValue: v.value,
            "onUpdate:modelValue": b[8] || (b[8] = (S) => v.value = S),
            placeholder: E.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || f.value || E.value,
            rows: 3,
            onCtrlEnter: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: ne(["result", l.value.type])
        }, a(l.value.message), 3)) : m("", !0)
      ]),
      e("div", ow, [
        w(ie, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (S) => i("close"))
        }, {
          default: d(() => [...b[29] || (b[29] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(ie, {
          variant: u.value ? "danger" : "primary",
          disabled: !g.value || !v.value.trim() || f.value || E.value,
          loading: f.value,
          onClick: _
        }, {
          default: d(() => [
            p(a(f.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), bs = /* @__PURE__ */ Q(nw, [["__scopeId", "data-v-d92153de"]]), aw = { class: "modal-header" }, lw = { class: "modal-body" }, iw = { class: "switch-message" }, rw = { class: "switch-details" }, dw = { class: "modal-actions" }, cw = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, n) => (s(), I(Re, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", aw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", lw, [
            e("p", iw, [
              n[6] || (n[6] = p(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = p(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = p("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", rw, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", dw, [
            w(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => r.$emit("close"))
            }, {
              default: d(() => [...n[11] || (n[11] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ee, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => r.$emit("confirm"))
            }, {
              default: d(() => [...n[12] || (n[12] = [
                p(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : m("", !0)
    ]));
  }
}), uw = /* @__PURE__ */ Q(cw, [["__scopeId", "data-v-e9c5253e"]]), mw = { class: "progress-bar" }, vw = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, n = D(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (i, h) => (s(), o("div", mw, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: nt({ width: n.value })
      }, null, 6)
    ]));
  }
}), fw = /* @__PURE__ */ Q(vw, [["__scopeId", "data-v-1beb0512"]]), gw = {
  key: 0,
  class: "modal-overlay"
}, hw = { class: "modal-content" }, pw = { class: "modal-body" }, yw = { class: "progress-info" }, ww = { class: "progress-percentage" }, kw = { class: "progress-state" }, bw = { class: "switch-steps" }, _w = { class: "step-icon" }, $w = { class: "step-label" }, Cw = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, n = D(() => {
      const v = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return r.message || v[r.state] || r.state;
    }), i = D(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), h = D(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], f = v.findIndex((u) => u.state === r.state);
      return v.map((u, l) => {
        let g = "pending", y = "○";
        return l < f ? (g = "completed", y = "✓") : l === f && (g = "active", y = "⟳"), {
          ...u,
          status: g,
          icon: y
        };
      });
    });
    return (v, f) => (s(), I(Re, { to: "body" }, [
      t.show ? (s(), o("div", gw, [
        e("div", hw, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", pw, [
            w(fw, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", yw, [
              e("div", ww, a(t.progress) + "%", 1),
              e("div", kw, a(n.value), 1)
            ]),
            e("div", bw, [
              (s(!0), o(F, null, J(h.value, (u) => (s(), o("div", {
                key: u.state,
                class: ne(["switch-step", u.status])
              }, [
                e("span", _w, a(u.icon), 1),
                e("span", $w, a(u.label), 1)
              ], 2))), 128))
            ]),
            f[0] || (f[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : m("", !0)
    ]));
  }
}), xw = /* @__PURE__ */ Q(Cw, [["__scopeId", "data-v-768a5078"]]), Sw = { class: "modal-header" }, Iw = { class: "modal-body" }, Ew = {
  key: 0,
  class: "node-section"
}, Mw = { class: "node-list" }, Rw = {
  key: 1,
  class: "node-section"
}, zw = { class: "node-list" }, Lw = { class: "modal-actions" }, Tw = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, n) => (s(), I(Re, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Sw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Iw, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", Ew, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Mw, [
                (s(!0), o(F, null, J(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : m("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", Rw, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", zw, [
                (s(!0), o(F, null, J(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : m("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Lw, [
            w(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => r.$emit("close"))
            }, {
              default: d(() => [...n[10] || (n[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ee, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => r.$emit("confirm"))
            }, {
              default: d(() => [...n[11] || (n[11] = [
                p(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : m("", !0)
    ]));
  }
}), Dw = /* @__PURE__ */ Q(Tw, [["__scopeId", "data-v-7cad7518"]]), Nw = { class: "comfygit-panel" }, Pw = { class: "panel-header" }, Uw = { class: "header-left" }, Bw = {
  key: 0,
  class: "header-info"
}, Ow = { class: "header-actions" }, Aw = { class: "env-switcher" }, Fw = {
  key: 0,
  class: "header-info"
}, Vw = { class: "branch-name" }, Ww = { class: "panel-main" }, Gw = { class: "sidebar" }, jw = { class: "sidebar-section" }, qw = { class: "sidebar-section" }, Hw = { class: "sidebar-section" }, Kw = { class: "content-area" }, Yw = {
  key: 0,
  class: "error-message"
}, Qw = {
  key: 1,
  class: "loading"
}, Xw = {
  key: 4,
  class: "dialog-overlay"
}, Zw = { class: "dialog-content create-progress-dialog" }, Jw = { class: "dialog-body create-progress-body" }, e0 = { class: "create-progress-message" }, t0 = { class: "dialog-content env-selector-dialog" }, s0 = { class: "dialog-header" }, o0 = { class: "dialog-body" }, n0 = { class: "env-list" }, a0 = { class: "env-info" }, l0 = { class: "env-name-row" }, i0 = { class: "env-indicator" }, r0 = { class: "env-name" }, d0 = {
  key: 0,
  class: "env-branch"
}, c0 = {
  key: 1,
  class: "current-label"
}, u0 = { class: "env-stats" }, m0 = ["onClick"], v0 = { class: "toast-container" }, f0 = { class: "toast-message" }, g0 = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const n = r, {
      getStatus: i,
      getHistory: h,
      getBranches: v,
      checkout: f,
      createBranch: u,
      switchBranch: l,
      deleteBranch: g,
      getEnvironments: y,
      switchEnvironment: c,
      getSwitchProgress: E,
      createEnvironment: _,
      getCreateProgress: R,
      deleteEnvironment: b,
      syncEnvironmentManually: S,
      repairWorkflowModels: k
    } = ze(), N = gs(), x = $(null), L = $([]), V = $([]), K = $([]), te = D(() => K.value.find((G) => G.is_current)), W = $(!1), T = $(null), M = $(null), B = $(!1), P = $(null), H = $(null), re = $(null), X = $(!1), se = $(!1), O = $(""), C = $({ state: "idle", progress: 0, message: "" });
    let ae = null, oe = null;
    const xe = $(!1), be = $({ state: "idle", message: "" }), Le = $(null);
    let Ae = null;
    const ce = $("status"), Fe = $("this-env");
    function ke(G, z) {
      ce.value = G, Fe.value = z;
    }
    function Te(G) {
      const le = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      le && ke(le.view, le.section);
    }
    function Ge() {
      ke("branches", "this-env");
    }
    function et() {
      n("close"), setTimeout(() => {
        var z;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const le of G)
          if (((z = le.textContent) == null ? void 0 : z.trim()) === "Manager") {
            le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const he = $(null), je = $(!1), qe = $(!1), He = $([]);
    let mt = 0;
    function me(G, z = "info", le = 3e3) {
      const _e = ++mt;
      return He.value.push({ id: _e, message: G, type: z }), le > 0 && setTimeout(() => {
        He.value = He.value.filter((Pe) => Pe.id !== _e);
      }, le), _e;
    }
    function De(G) {
      He.value = He.value.filter((z) => z.id !== G);
    }
    function vt(G, z) {
      me(G, z);
    }
    const lt = D(() => {
      if (!x.value) return "neutral";
      const G = x.value.workflows, z = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? z ? "warning" : "success" : "error";
    });
    D(() => x.value ? lt.value === "success" ? "All synced" : lt.value === "warning" ? "Uncommitted changes" : lt.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      W.value = !0, T.value = null;
      try {
        const [G, z, le, _e] = await Promise.all([
          i(!0),
          h(),
          v(),
          y()
        ]);
        x.value = G, L.value = z.commits, V.value = le.branches, K.value = _e, n("statusUpdate", G), P.value && await P.value.loadWorkflows(!0);
      } catch (G) {
        T.value = G instanceof Error ? G.message : "Failed to load status", x.value = null, L.value = [], V.value = [];
      } finally {
        W.value = !1;
      }
    }
    function ft(G) {
      M.value = G;
    }
    async function q(G) {
      var le;
      M.value = null;
      const z = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      he.value = {
        title: z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: z ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((le = G.hash) == null ? void 0 : le.slice(0, 7))}?`,
        details: z ? ns() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: z,
        onConfirm: async () => {
          var Ue;
          he.value = null, Ne();
          const _e = me(`Checking out ${G.short_hash || ((Ue = G.hash) == null ? void 0 : Ue.slice(0, 7))}...`, "info", 0), Pe = await f(G.hash, z);
          De(_e), Pe.status === "success" ? me("Restarting ComfyUI...", "success") : me(Pe.message || "Checkout failed", "error");
        }
      };
    }
    async function A(G) {
      const z = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      he.value = {
        title: z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: z ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: z ? ns() : void 0,
        warning: z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, Ne();
          const le = me(`Switching to ${G}...`, "info", 0), _e = await l(G, z);
          De(le), _e.status === "success" ? me("Restarting ComfyUI...", "success") : me(_e.message || "Branch switch failed", "error");
        }
      };
    }
    async function Z(G) {
      const z = me(`Creating branch ${G}...`, "info", 0), le = await u(G);
      De(z), le.status === "success" ? (me(`Branch "${G}" created`, "success"), await Se()) : me(le.message || "Failed to create branch", "error");
    }
    async function ge(G, z = !1) {
      const le = async (_e) => {
        var Ue;
        const Pe = me(`Deleting branch ${G}...`, "info", 0);
        try {
          const ue = await g(G, _e);
          De(Pe), ue.status === "success" ? (me(`Branch "${G}" deleted`, "success"), await Se()) : (Ue = ue.message) != null && Ue.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await le(!0);
            }
          } : me(ue.message || "Failed to delete branch", "error");
        } catch (ue) {
          De(Pe);
          const Vt = ue instanceof Error ? ue.message : "Failed to delete branch";
          Vt.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await le(!0);
            }
          } : me(Vt, "error");
        }
      };
      he.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, await le(z);
        }
      };
    }
    async function Ie(G) {
      M.value = null;
      const z = prompt("Enter branch name:");
      if (z) {
        const le = me(`Creating branch ${z}...`, "info", 0), _e = await u(z, G.hash);
        De(le), _e.status === "success" ? (me(`Branch "${z}" created from ${G.short_hash}`, "success"), await Se()) : me(_e.message || "Failed to create branch", "error");
      }
    }
    function Ne() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function U() {
      he.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          he.value = null, Ne(), me("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function j() {
      he.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          he.value = null, me("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function de(G) {
      B.value = !1, O.value = G, X.value = !0;
    }
    async function Qe() {
      X.value = !1, se.value = !0, Ne(), C.value = {
        progress: 10,
        state: it(10),
        message: Nt(10)
      };
      try {
        await c(O.value), Ss(), Is();
      } catch (G) {
        gt(), se.value = !1, me(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), C.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function it(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function Nt(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[it(G)] || "";
    }
    function Ss() {
      if (oe) return;
      let G = 10;
      const z = 60, le = 5e3, _e = 100, Pe = (z - G) / (le / _e);
      oe = window.setInterval(() => {
        if (G += Pe, G >= z && (G = z, gt()), C.value.progress < z) {
          const Ue = Math.floor(G);
          C.value = {
            progress: Ue,
            state: it(Ue),
            message: Nt(Ue)
          };
        }
      }, _e);
    }
    function gt() {
      oe && (clearInterval(oe), oe = null);
    }
    function Is() {
      ae || (ae = window.setInterval(async () => {
        try {
          let G = await N.getStatus();
          if ((!G || G.state === "idle") && (G = await E()), !G)
            return;
          const z = G.progress || 0;
          z >= 60 && gt();
          const le = Math.max(z, C.value.progress), _e = G.state && G.state !== "idle" && G.state !== "unknown", Pe = _e ? G.state : it(le), Ue = _e && G.message || Nt(le);
          C.value = {
            state: Pe,
            progress: le,
            message: Ue
          }, G.state === "complete" ? (gt(), Ft(), se.value = !1, me(`✓ Switched to ${O.value}`, "success"), await Se(), O.value = "") : G.state === "rolled_back" ? (gt(), Ft(), se.value = !1, me("Switch failed, restored previous environment", "warning"), O.value = "") : G.state === "critical_failure" && (gt(), Ft(), se.value = !1, me(`Critical error during switch: ${G.message}`, "error"), O.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Ft() {
      gt(), ae && (clearInterval(ae), ae = null);
    }
    function Es() {
      X.value = !1, O.value = "";
    }
    async function Ms() {
      je.value = !1, await Se(), me("✓ Changes committed", "success");
    }
    async function Rs() {
      qe.value = !1;
      const G = me("Syncing environment...", "info", 0);
      try {
        const z = await S("skip", !0);
        if (De(G), z.status === "success") {
          const le = [];
          z.nodes_installed.length && le.push(`${z.nodes_installed.length} installed`), z.nodes_removed.length && le.push(`${z.nodes_removed.length} removed`);
          const _e = le.length ? `: ${le.join(", ")}` : "";
          me(`✓ Environment synced${_e}`, "success"), await Se();
        } else {
          const le = z.errors.length ? z.errors.join("; ") : z.message;
          me(`Sync failed: ${le}`, "error");
        }
      } catch (z) {
        De(G), me(`Sync error: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
      }
    }
    async function zs(G) {
      var z;
      try {
        const le = await k(G);
        le.failed.length === 0 ? me(`✓ Repaired ${le.success} workflow${le.success === 1 ? "" : "s"}`, "success") : me(`Repaired ${le.success}, failed: ${le.failed.length}`, "warning"), await Se();
      } catch (le) {
        me(`Repair failed: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
      } finally {
        (z = re.value) == null || z.resetRepairingState();
      }
    }
    async function Ls(G) {
      Le.value = G, xe.value = !0, be.value = { state: "creating", message: `Creating environment '${G.name}'...` };
      try {
        const z = await _(G);
        z.status === "started" ? Ts() : z.status === "error" && (xe.value = !1, me(`Failed to create environment: ${z.message}. Check debug logs for details.`, "error"), Le.value = null);
      } catch (z) {
        xe.value = !1, me(`Error creating environment: ${z instanceof Error ? z.message : "Unknown error"}. Check debug logs.`, "error"), Le.value = null;
      }
    }
    function Ts() {
      Ae || (Ae = window.setInterval(async () => {
        var G;
        try {
          const z = await R();
          be.value = { state: z.state, message: z.message }, z.state === "complete" ? (os(), xe.value = !1, me(`✓ Environment '${z.environment_name}' created`, "success"), await Se(), H.value && await H.value.loadEnvironments(), (G = Le.value) != null && G.switch_after && z.environment_name && await de(z.environment_name), Le.value = null) : z.state === "error" && (os(), xe.value = !1, me(`Failed to create environment: ${z.error || z.message}. Check debug logs.`, "error"), Le.value = null);
        } catch (z) {
          console.error("Failed to poll create progress:", z);
        }
      }, 2e3));
    }
    function os() {
      Ae && (clearInterval(Ae), Ae = null);
    }
    async function Ds(G) {
      var z;
      if (((z = te.value) == null ? void 0 : z.name) === G) {
        me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      he.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          he.value = null;
          try {
            const le = await b(G);
            le.status === "success" ? (me(`Environment "${G}" deleted`, "success"), await Se(), H.value && await H.value.loadEnvironments()) : me(le.message || "Failed to delete environment", "error");
          } catch (le) {
            me(`Error deleting environment: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function ns() {
      if (!x.value) return [];
      const G = [], z = x.value.workflows;
      return z.new.length && G.push(`${z.new.length} new workflow(s)`), z.modified.length && G.push(`${z.modified.length} modified workflow(s)`), z.deleted.length && G.push(`${z.deleted.length} deleted workflow(s)`), G;
    }
    return Ee(Se), (G, z) => {
      var le, _e, Pe, Ue;
      return s(), o("div", Nw, [
        e("div", Pw, [
          e("div", Uw, [
            z[27] || (z[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", Bw)) : m("", !0)
          ]),
          e("div", Ow, [
            e("button", {
              class: ne(["icon-btn", { spinning: W.value }]),
              onClick: Se,
              title: "Refresh"
            }, [...z[28] || (z[28] = [
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
              onClick: z[0] || (z[0] = (ue) => n("close")),
              title: "Close"
            }, [...z[29] || (z[29] = [
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
        e("div", Aw, [
          e("div", { class: "env-switcher-header" }, [
            z[30] || (z[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: U
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: j
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: z[1] || (z[1] = (ue) => ke("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", Fw, [
              e("span", null, a(((le = te.value) == null ? void 0 : le.name) || ((_e = x.value) == null ? void 0 : _e.environment) || "Loading..."), 1),
              e("span", Vw, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : m("", !0),
            z[31] || (z[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Ww, [
          e("div", Gw, [
            e("div", jw, [
              z[32] || (z[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "status" && Fe.value === "this-env" }]),
                onClick: z[2] || (z[2] = (ue) => ke("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "workflows" }]),
                onClick: z[3] || (z[3] = (ue) => ke("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "models-env" }]),
                onClick: z[4] || (z[4] = (ue) => ke("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "branches" }]),
                onClick: z[5] || (z[5] = (ue) => ke("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "history" }]),
                onClick: z[6] || (z[6] = (ue) => ke("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "nodes" }]),
                onClick: z[7] || (z[7] = (ue) => ke("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "debug-env" }]),
                onClick: z[8] || (z[8] = (ue) => ke("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            z[35] || (z[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", qw, [
              z[33] || (z[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "environments" }]),
                onClick: z[9] || (z[9] = (ue) => ke("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "model-index" }]),
                onClick: z[10] || (z[10] = (ue) => ke("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "settings" }]),
                onClick: z[11] || (z[11] = (ue) => ke("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "debug-workspace" }]),
                onClick: z[12] || (z[12] = (ue) => ke("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            z[36] || (z[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Hw, [
              z[34] || (z[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "export" }]),
                onClick: z[13] || (z[13] = (ue) => ke("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "import" }]),
                onClick: z[14] || (z[14] = (ue) => ke("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "remotes" }]),
                onClick: z[15] || (z[15] = (ue) => ke("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Kw, [
            T.value ? (s(), o("div", Yw, a(T.value), 1)) : !x.value && ce.value === "status" ? (s(), o("div", Qw, " Loading status... ")) : (s(), o(F, { key: 2 }, [
              ce.value === "status" ? (s(), I(ma, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: re,
                status: x.value,
                onSwitchBranch: Ge,
                onCommitChanges: z[16] || (z[16] = (ue) => je.value = !0),
                onSyncEnvironment: z[17] || (z[17] = (ue) => qe.value = !0),
                onViewWorkflows: z[18] || (z[18] = (ue) => ke("workflows", "this-env")),
                onViewHistory: z[19] || (z[19] = (ue) => ke("history", "this-env")),
                onViewDebug: z[20] || (z[20] = (ue) => ke("debug-env", "this-env")),
                onRepairMissingModels: zs
              }, null, 8, ["status"])) : ce.value === "workflows" ? (s(), I(gu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: P,
                onRefresh: Se
              }, null, 512)) : ce.value === "models-env" ? (s(), I(Xu, {
                key: 2,
                onNavigate: Te
              })) : ce.value === "branches" ? (s(), I(Ia, {
                key: 3,
                branches: V.value,
                current: ((Pe = x.value) == null ? void 0 : Pe.branch) || null,
                onSwitch: A,
                onCreate: Z,
                onDelete: ge
              }, null, 8, ["branches", "current"])) : ce.value === "history" ? (s(), I(Ba, {
                key: 4,
                commits: L.value,
                onSelect: ft,
                onCheckout: q
              }, null, 8, ["commits"])) : ce.value === "nodes" ? (s(), I(Om, {
                key: 5,
                onOpenNodeManager: et
              })) : ce.value === "debug-env" ? (s(), I(jg, { key: 6 })) : ce.value === "environments" ? (s(), I(Dh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: H,
                onSwitch: de,
                onCreate: Ls,
                onDelete: Ds
              }, null, 512)) : ce.value === "model-index" ? (s(), I(pm, {
                key: 8,
                onRefresh: Se
              })) : ce.value === "settings" ? (s(), I(Fg, { key: 9 })) : ce.value === "debug-workspace" ? (s(), I(Wg, { key: 10 })) : ce.value === "export" ? (s(), I(dp, { key: 11 })) : ce.value === "import" ? (s(), I(q1, { key: 12 })) : ce.value === "remotes" ? (s(), I(_g, {
                key: 13,
                onToast: vt
              })) : m("", !0)
            ], 64))
          ])
        ]),
        M.value ? (s(), I(cy, {
          key: 0,
          commit: M.value,
          onClose: z[21] || (z[21] = (ue) => M.value = null),
          onCheckout: q,
          onCreateBranch: Ie
        }, null, 8, ["commit"])) : m("", !0),
        he.value ? (s(), I(gy, {
          key: 1,
          title: he.value.title,
          message: he.value.message,
          details: he.value.details,
          warning: he.value.warning,
          confirmLabel: he.value.confirmLabel,
          cancelLabel: he.value.cancelLabel,
          secondaryLabel: he.value.secondaryLabel,
          secondaryAction: he.value.secondaryAction,
          destructive: he.value.destructive,
          onConfirm: he.value.onConfirm,
          onCancel: z[22] || (z[22] = (ue) => he.value = null),
          onSecondary: he.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : m("", !0),
        w(uw, {
          show: X.value,
          "from-environment": ((Ue = te.value) == null ? void 0 : Ue.name) || "unknown",
          "to-environment": O.value,
          onConfirm: Qe,
          onClose: Es
        }, null, 8, ["show", "from-environment", "to-environment"]),
        je.value && x.value ? (s(), I(bs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: z[23] || (z[23] = (ue) => je.value = !1),
          onCommitted: Ms
        }, null, 8, ["status"])) : m("", !0),
        qe.value && x.value ? (s(), I(Dw, {
          key: 3,
          show: qe.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Rs,
          onClose: z[24] || (z[24] = (ue) => qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : m("", !0),
        w(xw, {
          show: se.value,
          state: C.value.state,
          progress: C.value.progress,
          message: C.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        xe.value ? (s(), o("div", Xw, [
          e("div", Zw, [
            z[39] || (z[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", Jw, [
              z[37] || (z[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", e0, a(be.value.message), 1),
              z[38] || (z[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : m("", !0),
        B.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: z[26] || (z[26] = $e((ue) => B.value = !1, ["self"]))
        }, [
          e("div", t0, [
            e("div", s0, [
              z[41] || (z[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: z[25] || (z[25] = (ue) => B.value = !1)
              }, [...z[40] || (z[40] = [
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
            e("div", o0, [
              z[42] || (z[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", n0, [
                (s(!0), o(F, null, J(K.value, (ue) => (s(), o("div", {
                  key: ue.name,
                  class: ne(["env-item", { current: ue.is_current }])
                }, [
                  e("div", a0, [
                    e("div", l0, [
                      e("span", i0, a(ue.is_current ? "●" : "○"), 1),
                      e("span", r0, a(ue.name), 1),
                      ue.current_branch ? (s(), o("span", d0, "(" + a(ue.current_branch) + ")", 1)) : m("", !0),
                      ue.is_current ? (s(), o("span", c0, "CURRENT")) : m("", !0)
                    ]),
                    e("div", u0, a(ue.workflow_count) + " workflows • " + a(ue.node_count) + " nodes ", 1)
                  ]),
                  ue.is_current ? m("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Vt) => de(ue.name)
                  }, " SWITCH ", 8, m0))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : m("", !0),
        e("div", v0, [
          w(Os, { name: "toast" }, {
            default: d(() => [
              (s(!0), o(F, null, J(He.value, (ue) => (s(), o("div", {
                key: ue.id,
                class: ne(["toast", ue.type])
              }, [
                e("span", f0, a(ue.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), h0 = /* @__PURE__ */ Q(g0, [["__scopeId", "data-v-44184278"]]), p0 = { class: "item-header" }, y0 = { class: "item-info" }, w0 = { class: "filename" }, k0 = { class: "metadata" }, b0 = { class: "size" }, _0 = {
  key: 0,
  class: "type"
}, $0 = { class: "item-actions" }, C0 = {
  key: 0,
  class: "progress-section"
}, x0 = { class: "progress-bar" }, S0 = { class: "progress-stats" }, I0 = { class: "downloaded" }, E0 = { class: "speed" }, M0 = {
  key: 0,
  class: "eta"
}, R0 = {
  key: 1,
  class: "status-msg paused"
}, z0 = {
  key: 2,
  class: "status-msg queued"
}, L0 = {
  key: 3,
  class: "status-msg completed"
}, T0 = {
  key: 4,
  class: "status-msg failed"
}, D0 = {
  key: 0,
  class: "retries"
}, N0 = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: r }) {
    const n = r;
    function i(f) {
      if (f === 0) return "?";
      const u = f / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(f) {
      return f === 0 ? "-" : `${(f / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(f) {
      if (f < 60) return `${Math.round(f)}s`;
      const u = Math.floor(f / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (f, u) => (s(), o("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", p0, [
        e("div", y0, [
          e("div", w0, a(t.item.filename), 1),
          e("div", k0, [
            e("span", b0, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", _0, a(t.item.type), 1)) : m("", !0)
          ])
        ]),
        e("div", $0, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : m("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : m("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : m("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : m("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", C0, [
        e("div", x0, [
          e("div", {
            class: "progress-fill",
            style: nt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", S0, [
          e("span", I0, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", E0, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", M0, a(v(t.item.eta)), 1)) : m("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", R0, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", z0, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", L0, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", T0, [
        p(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", D0, "(" + a(t.item.retries) + " retries)", 1)) : m("", !0)
      ])) : m("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ Q(N0, [["__scopeId", "data-v-2110df65"]]), P0 = { class: "queue-title" }, U0 = { class: "count" }, B0 = { class: "queue-actions" }, O0 = { class: "action-label" }, A0 = {
  key: 0,
  class: "overall-progress"
}, F0 = { class: "progress-bar" }, V0 = {
  key: 0,
  class: "current-mini"
}, W0 = { class: "filename" }, G0 = { class: "speed" }, j0 = {
  key: 1,
  class: "queue-content"
}, q0 = {
  key: 0,
  class: "section"
}, H0 = {
  key: 1,
  class: "section"
}, K0 = { class: "section-header" }, Y0 = { class: "section-label paused" }, Q0 = { class: "items-list" }, X0 = {
  key: 2,
  class: "section"
}, Z0 = { class: "section-header" }, J0 = { class: "section-label" }, ek = { class: "items-list" }, tk = {
  key: 3,
  class: "section"
}, sk = { class: "section-header" }, ok = { class: "section-label" }, nk = { class: "items-list" }, ak = {
  key: 4,
  class: "section"
}, lk = { class: "section-header" }, ik = { class: "section-label failed" }, rk = { class: "items-list" }, dk = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: r,
      currentDownload: n,
      queuedItems: i,
      completedItems: h,
      failedItems: v,
      pausedItems: f,
      hasItems: u,
      activeCount: l,
      cancelDownload: g,
      retryDownload: y,
      resumeDownload: c,
      resumeAllPaused: E,
      removeItem: _,
      clearCompleted: R
    } = Dt(), b = $(!1);
    let S = null;
    yt(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: f.value.length,
        completed: h.value.length
      }),
      (L, V) => {
        S && (clearTimeout(S), S = null);
        const K = L.active === 0 && L.failed === 0 && L.paused === 0 && L.completed > 0, te = V && (V.active > 0 || V.paused > 0);
        K && te && (S = setTimeout(() => {
          R(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const k = D(() => {
      var K;
      if (r.items.length === 0) return 0;
      const L = h.value.length, V = ((K = n.value) == null ? void 0 : K.progress) || 0;
      return Math.round((L + V / 100) / r.items.length * 100);
    });
    function N(L) {
      g(L);
    }
    function x(L) {
      return L === 0 ? "" : `${(L / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (L, V) => (s(), I(Re, { to: "body" }, [
      ye(u) ? (s(), o("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !b.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: V[0] || (V[0] = (K) => b.value = !b.value)
        }, [
          e("div", P0, [
            V[4] || (V[4] = e("span", { class: "icon" }, "↓", -1)),
            V[5] || (V[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", U0, "(" + a(ye(l)) + "/" + a(ye(r).items.length) + ")", 1)
          ]),
          e("div", B0, [
            e("span", O0, a(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (s(), o("div", j0, [
          ye(n) ? (s(), o("div", q0, [
            V[6] || (V[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(It, {
              item: ye(n),
              onCancel: V[1] || (V[1] = (K) => N(ye(n).id))
            }, null, 8, ["item"])
          ])) : m("", !0),
          ye(f).length > 0 ? (s(), o("div", H0, [
            e("div", K0, [
              e("span", Y0, "Paused (" + a(ye(f).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: V[2] || (V[2] = //@ts-ignore
                (...K) => ye(E) && ye(E)(...K))
              }, "Resume All")
            ]),
            e("div", Q0, [
              (s(!0), o(F, null, J(ye(f), (K) => (s(), I(It, {
                key: K.id,
                item: K,
                onResume: (te) => ye(c)(K.id),
                onRemove: (te) => ye(_)(K.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : m("", !0),
          ye(i).length > 0 ? (s(), o("div", X0, [
            e("div", Z0, [
              e("span", J0, "Queued (" + a(ye(i).length) + ")", 1)
            ]),
            e("div", ek, [
              (s(!0), o(F, null, J(ye(i), (K) => (s(), I(It, {
                key: K.id,
                item: K,
                onCancel: (te) => N(K.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : m("", !0),
          ye(h).length > 0 ? (s(), o("div", tk, [
            e("div", sk, [
              e("span", ok, "Completed (" + a(ye(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: V[3] || (V[3] = //@ts-ignore
                (...K) => ye(R) && ye(R)(...K))
              }, "Clear")
            ]),
            e("div", nk, [
              (s(!0), o(F, null, J(ye(h).slice(0, 3), (K) => (s(), I(It, {
                key: K.id,
                item: K,
                onRemove: (te) => ye(_)(K.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : m("", !0),
          ye(v).length > 0 ? (s(), o("div", ak, [
            e("div", lk, [
              e("span", ik, "Failed (" + a(ye(v).length) + ")", 1)
            ]),
            e("div", rk, [
              (s(!0), o(F, null, J(ye(v), (K) => (s(), I(It, {
                key: K.id,
                item: K,
                onRetry: (te) => ye(y)(K.id),
                onRemove: (te) => ye(_)(K.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : m("", !0)
        ])) : (s(), o("div", A0, [
          e("div", F0, [
            e("div", {
              class: "progress-fill",
              style: nt({ width: `${k.value}%` })
            }, null, 4)
          ]),
          ye(n) ? (s(), o("div", V0, [
            e("span", W0, a(ye(n).filename), 1),
            e("span", G0, a(x(ye(n).speed)), 1)
          ])) : m("", !0)
        ]))
      ], 2)) : m("", !0)
    ]));
  }
}), ck = /* @__PURE__ */ Q(dk, [["__scopeId", "data-v-60751cfa"]]), uk = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', mk = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', vk = {
  comfy: uk,
  phosphor: mk
}, ts = "comfy", _s = "comfygit-theme";
let ht = null, $s = ts;
function fk() {
  try {
    const t = localStorage.getItem(_s);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ts;
}
function Cs(t = ts) {
  ht && ht.remove(), ht = document.createElement("style"), ht.id = "comfygit-theme-styles", ht.setAttribute("data-theme", t), ht.textContent = vk[t], document.head.appendChild(ht), document.body.setAttribute("data-comfygit-theme", t), $s = t;
  try {
    localStorage.setItem(_s, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function gk() {
  return $s;
}
function hk(t) {
  Cs(t);
}
const ss = document.createElement("link");
ss.rel = "stylesheet";
ss.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ss);
const pk = fk();
Cs(pk);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), hk(t);
  },
  getTheme: () => {
    const t = gk();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Xe = null, Ve = null, zt = null, Et = null, ds = null;
const bt = $(null);
async function Ot() {
  var t;
  if (!((t = kt) != null && t.api)) return null;
  try {
    const r = await kt.api.fetchApi("/v2/comfygit/status");
    r.ok && (bt.value = await r.json());
  } catch {
  }
}
function yk() {
  if (!bt.value) return !1;
  const t = bt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || bt.value.has_changes;
}
function wk() {
  Xe && Xe.remove(), Xe = document.createElement("div"), Xe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Xe.appendChild(t), Xe.addEventListener("click", (i) => {
    i.target === Xe && Kt();
  });
  const r = (i) => {
    i.key === "Escape" && (Kt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Zt({
    render: () => Jt(h0, {
      onClose: Kt,
      onStatusUpdate: (i) => {
        bt.value = i, Lt();
      }
    })
  }).mount(t), document.body.appendChild(Xe);
}
function Kt() {
  Xe && (Xe.remove(), Xe = null);
}
function kk(t) {
  Mt(), Ve = document.createElement("div"), Ve.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  Ve.style.position = "fixed", Ve.style.top = `${r.bottom + 8}px`, Ve.style.right = `${window.innerWidth - r.right}px`, Ve.style.zIndex = "10001";
  const n = (h) => {
    Ve && !Ve.contains(h.target) && h.target !== t && (Mt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (h) => {
    h.key === "Escape" && (Mt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), zt = Zt({
    render: () => Jt(bs, {
      status: bt.value,
      onClose: Mt,
      onCommitted: () => {
        Mt(), Ot().then(Lt);
      }
    })
  }), zt.mount(Ve), document.body.appendChild(Ve);
}
function Mt() {
  zt && (zt.unmount(), zt = null), Ve && (Ve.remove(), Ve = null);
}
function bk() {
  Et || (Et = document.createElement("div"), Et.className = "comfygit-download-queue-root", ds = Zt({
    render: () => Jt(ck)
  }), ds.mount(Et), document.body.appendChild(Et), console.log("[ComfyGit] Model download queue mounted"));
}
let rt = null;
function Lt() {
  if (!rt) return;
  const t = rt.querySelector(".commit-indicator");
  t && (t.style.display = yk() ? "block" : "none");
}
const xs = document.createElement("style");
xs.textContent = `
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
document.head.appendChild(xs);
kt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = wk, rt = document.createElement("button"), rt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", rt.innerHTML = 'Commit <span class="commit-indicator"></span>', rt.title = "Quick Commit", rt.onclick = () => kk(rt), t.appendChild(r), t.appendChild(rt), (v = (h = kt.menu) == null ? void 0 : h.settingsGroup) != null && v.element && (kt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), bk();
    const { loadPendingDownloads: n } = Dt();
    n(), await Ot(), Lt(), setInterval(async () => {
      await Ot(), Lt();
    }, 3e4);
    const i = kt.api;
    if (i) {
      let f = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, u = function() {
        const g = document.createElement("div");
        g.style.cssText = `
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
        y.textContent = "Workflows updated - refresh required", g.appendChild(y);
        const c = document.createElement("button");
        c.textContent = "Refresh", c.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, c.onmouseover = () => c.style.background = "var(--comfy-input-bg)", c.onmouseout = () => c.style.background = "var(--comfy-menu-bg)", c.onclick = () => f(), g.appendChild(c);
        const E = document.createElement("button");
        E.textContent = "×", E.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => g.remove(), g.appendChild(E), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: y, workflow_name: c } = g.detail;
        console.log(`[ComfyGit] Workflow ${y}: ${c}`), await Ot(), Lt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      i.addEventListener("status", async (g) => {
        const y = g.detail != null;
        y && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), f()) : u()), l = y;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
