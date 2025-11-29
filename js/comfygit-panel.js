import { app as ht } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as fe, createBlock as E, resolveDynamicComponent as Ht, normalizeClass as te, withCtx as i, toDisplayString as a, createVNode as h, createTextVNode as y, computed as P, Fragment as A, renderList as X, normalizeStyle as et, ref as x, onMounted as Ie, watch as wt, Teleport as Ee, withModifiers as _e, Transition as Es, createSlots as Rt, withKeys as rt, onUnmounted as Ms, reactive as ns, readonly as Rs, unref as ge, withDirectives as Ze, vModelText as as, vModelRadio as Bt, vModelCheckbox as ls, nextTick as Ts, vModelSelect as At, TransitionGroup as zs, createApp as qt, h as Kt } from "vue";
const Ls = { class: "panel-layout" }, Ns = {
  key: 0,
  class: "panel-layout-header"
}, Ds = {
  key: 1,
  class: "panel-layout-search"
}, Ps = { class: "panel-layout-content" }, Us = {
  key: 2,
  class: "panel-layout-footer"
}, Os = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (d, n) => (s(), o("div", Ls, [
      d.$slots.header ? (s(), o("div", Ns, [
        fe(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (s(), o("div", Ds, [
        fe(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Ps, [
        fe(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (s(), o("div", Us, [
        fe(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), K = (t, d) => {
  const n = t.__vccOpts || t;
  for (const [r, p] of d)
    n[r] = p;
  return n;
}, Pe = /* @__PURE__ */ K(Os, [["__scopeId", "data-v-21565df9"]]), Bs = {
  key: 0,
  class: "panel-title-prefix"
}, As = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Fs = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, n) => (s(), E(Ht(`h${t.level}`), {
      class: te(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", Bs, a(t.prefix), 1)) : (s(), o("span", As)),
        fe(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vs = /* @__PURE__ */ K(Fs, [["__scopeId", "data-v-c3875efc"]]), Ws = ["title"], Gs = ["width", "height"], js = /* @__PURE__ */ q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (d, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => d.$emit("click"))
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
      ])], 8, Gs))
    ], 8, Ws));
  }
}), is = /* @__PURE__ */ K(js, [["__scopeId", "data-v-6fc7f16d"]]), Hs = { class: "header-left" }, qs = {
  key: 0,
  class: "header-actions"
}, Ks = /* @__PURE__ */ q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (d, n) => (s(), o("div", {
      class: te(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Hs, [
        h(Vs, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(is, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (s(), o("div", qs, [
        fe(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ K(Ks, [["__scopeId", "data-v-55a62cd6"]]), Ys = {
  key: 0,
  class: "section-title-count"
}, Js = {
  key: 1,
  class: "section-title-icon"
}, Qs = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, n) => (s(), E(Ht(`h${t.level}`), {
      class: te(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && d.$emit("click"))
    }, {
      default: i(() => [
        fe(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ys, "(" + a(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", Js, a(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Fe = /* @__PURE__ */ K(Qs, [["__scopeId", "data-v-559361eb"]]), Xs = { class: "status-grid" }, Zs = { class: "status-grid__columns" }, eo = { class: "status-grid__column" }, to = { class: "status-grid__title" }, so = { class: "status-grid__column status-grid__column--right" }, oo = { class: "status-grid__title" }, no = {
  key: 0,
  class: "status-grid__footer"
}, ao = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, n) => (s(), o("div", Xs, [
      e("div", Zs, [
        e("div", eo, [
          e("h4", to, a(t.leftTitle), 1),
          fe(d.$slots, "left", {}, void 0, !0)
        ]),
        e("div", so, [
          e("h4", oo, a(t.rightTitle), 1),
          fe(d.$slots, "right", {}, void 0, !0)
        ])
      ]),
      d.$slots.footer ? (s(), o("div", no, [
        fe(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), lo = /* @__PURE__ */ K(ao, [["__scopeId", "data-v-73b7ba3f"]]), io = {
  key: 0,
  class: "status-item__icon"
}, ro = {
  key: 1,
  class: "status-item__count"
}, co = { class: "status-item__label" }, uo = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, n = P(() => `status-item--${d.variant}`);
    return (r, p) => (s(), o("div", {
      class: te(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", io, a(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", ro, a(t.count), 1)) : c("", !0),
      e("span", co, a(t.label), 1)
    ], 2));
  }
}), Qe = /* @__PURE__ */ K(uo, [["__scopeId", "data-v-6f929183"]]), mo = { class: "issue-card__header" }, vo = { class: "issue-card__icon" }, fo = { class: "issue-card__title" }, go = {
  key: 0,
  class: "issue-card__content"
}, po = {
  key: 0,
  class: "issue-card__description"
}, ho = {
  key: 1,
  class: "issue-card__items"
}, yo = {
  key: 2,
  class: "issue-card__actions"
}, wo = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, n = P(() => `issue-card--${d.severity}`);
    return (r, p) => (s(), o("div", {
      class: te(["issue-card", n.value])
    }, [
      e("div", mo, [
        e("span", vo, a(t.icon), 1),
        e("h4", fo, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (s(), o("div", go, [
        t.description ? (s(), o("p", po, a(t.description), 1)) : c("", !0),
        fe(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", ho, [
        (s(!0), o(A, null, X(t.items, (g, v) => (s(), o("div", {
          key: v,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (s(), o("div", yo, [
        fe(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ K(wo, [["__scopeId", "data-v-df6aa348"]]), ko = ["type", "disabled"], bo = {
  key: 0,
  class: "spinner"
}, _o = /* @__PURE__ */ q({
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
    return (d, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: te(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (s(), o("span", bo)) : c("", !0),
      t.loading ? c("", !0) : fe(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, ko));
  }
}), Y = /* @__PURE__ */ K(_o, [["__scopeId", "data-v-772abe47"]]), $o = { class: "empty-state" }, Co = {
  key: 0,
  class: "empty-icon"
}, xo = { class: "empty-message" }, So = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, n) => (s(), o("div", $o, [
      t.icon ? (s(), o("div", Co, a(t.icon), 1)) : c("", !0),
      e("p", xo, a(t.message), 1),
      t.actionLabel ? (s(), E(Y, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => d.$emit("action"))
      }, {
        default: i(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ K(So, [["__scopeId", "data-v-4466284f"]]), Io = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, n) => (s(), o("span", {
      class: te(["detail-label"]),
      style: et({ minWidth: t.minWidth })
    }, [
      fe(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ K(Io, [["__scopeId", "data-v-75e9eeb8"]]), Eo = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, n) => (s(), o("span", {
      class: te(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      fe(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ K(Eo, [["__scopeId", "data-v-2f186e4c"]]), Mo = { class: "detail-row" }, Ro = /* @__PURE__ */ q({
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
    return (d, n) => (s(), o("div", Mo, [
      h(Gt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(jt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : fe(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), be = /* @__PURE__ */ K(Ro, [["__scopeId", "data-v-ef15664a"]]), To = { class: "modal-header" }, zo = { class: "modal-body" }, Lo = { class: "status-section" }, No = {
  key: 0,
  class: "status-section"
}, Do = { class: "section-header-row" }, Po = {
  key: 0,
  class: "workflow-group"
}, Uo = { class: "workflow-group-header" }, Oo = { class: "workflow-group-title" }, Bo = { class: "workflow-list" }, Ao = { class: "workflow-name" }, Fo = { class: "workflow-issue" }, Vo = {
  key: 1,
  class: "workflow-group"
}, Wo = { class: "workflow-group-header" }, Go = { class: "workflow-group-title" }, jo = { class: "workflow-list" }, Ho = { class: "workflow-name" }, qo = { class: "workflow-issue" }, Ko = {
  key: 2,
  class: "workflow-group"
}, Yo = { class: "workflow-group-header" }, Jo = { class: "workflow-group-title" }, Qo = { class: "workflow-list" }, Xo = { class: "workflow-name" }, Zo = {
  key: 3,
  class: "workflow-group"
}, en = { class: "workflow-group-header" }, tn = { class: "workflow-group-title" }, sn = { class: "workflow-list" }, on = { class: "workflow-name" }, nn = {
  key: 4,
  class: "workflow-group"
}, an = { class: "workflow-group-header" }, ln = { class: "workflow-group-title" }, rn = { class: "workflow-list" }, dn = { class: "workflow-name" }, cn = {
  key: 5,
  class: "workflow-group"
}, un = { class: "workflow-group-title" }, mn = { class: "expand-icon" }, vn = {
  key: 0,
  class: "workflow-list"
}, fn = { class: "workflow-name" }, gn = {
  key: 1,
  class: "status-section"
}, pn = {
  key: 0,
  class: "change-group"
}, hn = { class: "change-group-header" }, yn = { class: "change-group-title" }, wn = { class: "change-list" }, kn = { class: "node-name" }, bn = {
  key: 0,
  class: "dev-badge"
}, _n = {
  key: 1,
  class: "change-group"
}, $n = { class: "change-group-header" }, Cn = { class: "change-group-title" }, xn = { class: "change-list" }, Sn = { class: "node-name" }, In = {
  key: 0,
  class: "dev-badge"
}, En = {
  key: 2,
  class: "change-group"
}, Mn = { class: "change-list" }, Rn = { class: "change-item" }, Tn = { class: "node-name" }, zn = {
  key: 3,
  class: "change-group"
}, Ln = {
  key: 2,
  class: "status-section"
}, Nn = { class: "section-header-row" }, Dn = {
  key: 0,
  class: "drift-item"
}, Pn = { class: "drift-list" }, Un = {
  key: 0,
  class: "drift-list-more"
}, On = {
  key: 1,
  class: "drift-item"
}, Bn = { class: "drift-list" }, An = {
  key: 0,
  class: "drift-list-more"
}, Fn = {
  key: 2,
  class: "drift-item"
}, Vn = {
  key: 3,
  class: "drift-item"
}, Wn = {
  key: 3,
  class: "status-section"
}, Gn = { class: "info-box" }, jn = { class: "drift-list" }, Hn = {
  key: 0,
  class: "drift-list-more"
}, qn = {
  key: 4,
  class: "status-section"
}, Kn = { class: "warning-box" }, Yn = {
  key: 5,
  class: "empty-state-inline"
}, Jn = { class: "modal-actions" }, Qn = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const d = t, n = x(!1);
    Ie(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), wt(() => d.show, (L, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", L);
    }, { immediate: !0 });
    const r = P(() => {
      var L, $, N;
      return ((N = ($ = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : N.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), p = P(() => {
      var L, $, N;
      return ((N = ($ = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : N.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), g = P(() => {
      var L, $, N;
      return ((N = ($ = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : $.synced) == null ? void 0 : N.filter((b) => {
        var C, V, M;
        const k = (M = (V = (C = d.status) == null ? void 0 : C.workflows) == null ? void 0 : V.analyzed) == null ? void 0 : M.find((T) => T.name === b);
        return !k || k.status !== "broken";
      })) || [];
    }), v = P(() => {
      var L, $, N, b, k;
      return (L = d.status) != null && L.workflows ? ((($ = d.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((N = d.status.workflows.modified) == null ? void 0 : N.length) ?? 0) > 0 || (((b = d.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), f = P(() => {
      var $, N, b;
      const L = ($ = d.status) == null ? void 0 : $.git_changes;
      return L ? (((N = L.nodes_added) == null ? void 0 : N.length) ?? 0) > 0 || (((b = L.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || L.workflow_changes || L.has_other_changes : !1;
    }), l = P(() => {
      var L, $, N, b, k, C;
      return !v.value && !f.value && (($ = (L = d.status) == null ? void 0 : L.comparison) == null ? void 0 : $.is_synced) && (((N = d.status) == null ? void 0 : N.missing_models_count) ?? 0) === 0 && (((C = (k = (b = d.status) == null ? void 0 : b.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), u = P(() => {
      var $, N;
      const L = (N = ($ = d.status) == null ? void 0 : $.git_changes) == null ? void 0 : N.workflow_changes;
      return L ? typeof L == "number" ? L : Object.keys(L).length : 0;
    });
    function w(L) {
      return typeof L == "string" ? L : L.name;
    }
    function m(L) {
      return typeof L == "object" && L.is_development === !0;
    }
    return (L, $) => {
      var N, b, k, C, V, M, T, H, G, J, F, D, R, O, B, ae, ie, Q, Z, U, _, se;
      return s(), E(Ee, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (ee) => L.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = _e(() => {
            }, ["stop"]))
          }, [
            e("div", To, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (ee) => L.$emit("close"))
              }, "✕")
            ]),
            e("div", zo, [
              e("div", Lo, [
                h(Fe, { level: "4" }, {
                  default: i(() => [...$[8] || ($[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                h(be, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (s(), o("div", No, [
                e("div", Do, [
                  h(Fe, { level: "4" }, {
                    default: i(() => [...$[9] || ($[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (ee) => L.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (s(), o("div", Po, [
                  e("div", Uo, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Oo, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", Bo, [
                    (s(!0), o(A, null, X(r.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ao, a(ee.name), 1),
                      e("span", Fo, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (s(), o("div", Vo, [
                  e("div", Wo, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Go, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", jo, [
                    (s(!0), o(A, null, X(p.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ho, a(ee.name), 1),
                      e("span", qo, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (b = (N = t.status.workflows) == null ? void 0 : N.new) != null && b.length ? (s(), o("div", Ko, [
                  e("div", Yo, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Jo, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Qo, [
                    (s(!0), o(A, null, X(t.status.workflows.new, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Xo, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (k = t.status.workflows) == null ? void 0 : k.modified) != null && C.length ? (s(), o("div", Zo, [
                  e("div", en, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", tn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", sn, [
                    (s(!0), o(A, null, X(t.status.workflows.modified, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", on, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (M = (V = t.status.workflows) == null ? void 0 : V.deleted) != null && M.length ? (s(), o("div", nn, [
                  e("div", an, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ln, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", rn, [
                    (s(!0), o(A, null, X(t.status.workflows.deleted, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", dn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (s(), o("div", cn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (ee) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", un, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", mn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", vn, [
                    (s(!0), o(A, null, X(g.value, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", fn, a(ee), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              f.value ? (s(), o("div", gn, [
                h(Fe, { level: "4" }, {
                  default: i(() => [...$[16] || ($[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (T = t.status.git_changes) == null ? void 0 : T.nodes_added) != null && H.length ? (s(), o("div", pn, [
                  e("div", hn, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", yn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", wn, [
                    (s(!0), o(A, null, X(t.status.git_changes.nodes_added, (ee) => (s(), o("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", kn, a(w(ee)), 1),
                      m(ee) ? (s(), o("span", bn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (J = (G = t.status.git_changes) == null ? void 0 : G.nodes_removed) != null && J.length ? (s(), o("div", _n, [
                  e("div", $n, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Cn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", xn, [
                    (s(!0), o(A, null, X(t.status.git_changes.nodes_removed, (ee) => (s(), o("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", Sn, a(w(ee)), 1),
                      m(ee) ? (s(), o("span", In, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (F = t.status.git_changes) != null && F.workflow_changes ? (s(), o("div", En, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Mn, [
                    e("div", Rn, [
                      e("span", Tn, a(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (s(), o("div", zn, [...$[20] || ($[20] = [
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
              (R = t.status.comparison) != null && R.is_synced ? c("", !0) : (s(), o("div", Ln, [
                e("div", Nn, [
                  h(Fe, { level: "4" }, {
                    default: i(() => [...$[21] || ($[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (ee) => L.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (B = (O = t.status.comparison) == null ? void 0 : O.missing_nodes) != null && B.length ? (s(), o("div", Dn, [
                  h(be, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Pn, [
                    (s(!0), o(A, null, X(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Un, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ie = (ae = t.status.comparison) == null ? void 0 : ae.extra_nodes) != null && ie.length ? (s(), o("div", On, [
                  h(be, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Bn, [
                    (s(!0), o(A, null, X(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", An, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Z = (Q = t.status.comparison) == null ? void 0 : Q.version_mismatches) != null && Z.length ? (s(), o("div", Fn, [
                  h(be, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (U = t.status.comparison) != null && U.packages_in_sync ? c("", !0) : (s(), o("div", Vn, [
                  h(be, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (se = (_ = t.status.comparison) == null ? void 0 : _.disabled_nodes) != null && se.length ? (s(), o("div", Wn, [
                h(Fe, { level: "4" }, {
                  default: i(() => [...$[23] || ($[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Gn, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", jn, [
                  (s(!0), o(A, null, X(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (s(), o("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Hn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", qn, [
                h(Fe, { level: "4" }, {
                  default: i(() => [...$[25] || ($[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Kn, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", Yn, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Jn, [
              h(Y, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (ee) => L.$emit("close"))
              }, {
                default: i(() => [...$[29] || ($[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Xn = /* @__PURE__ */ K(Qn, [["__scopeId", "data-v-c67eed17"]]), Zn = { class: "health-section-header" }, ea = { class: "suggestions-content" }, ta = { class: "suggestions-text" }, sa = { style: { "margin-top": "var(--cg-space-3)" } }, oa = {
  key: 1,
  class: "no-issues-text"
}, na = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models"],
  setup(t, { expose: d, emit: n }) {
    const r = t, p = x(!1), g = x(!1);
    function v() {
      p.value = !0;
    }
    function f() {
      p.value = !1, u("view-workflows");
    }
    function l() {
      p.value = !1, u("view-nodes");
    }
    const u = n, w = x(!1), m = P(() => {
      const O = r.status.workflows.analyzed || [], B = O.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return B.length === 0 && r.status.missing_models_count > 0 ? O.filter((ae) => ae.sync_state === "synced") : B;
    });
    function L() {
      const O = m.value;
      O.length !== 0 && (w.value = !0, u("repair-missing-models", O.map((B) => B.name)));
    }
    function $() {
      w.value = !1;
    }
    d({ resetRepairingState: $ });
    const N = P(() => r.status.workflows.new.length > 0 || r.status.workflows.modified.length > 0 || r.status.workflows.deleted.length > 0), b = P(() => r.status.has_changes), k = P(() => {
      const O = r.status.git_changes;
      return O.nodes_added.length > 0 || O.nodes_removed.length > 0 || O.workflow_changes;
    }), C = P(() => r.status.has_changes || N.value), V = P(() => Object.keys(r.status.git_changes.workflow_changes_detail).length), M = P(() => r.status.git_changes.has_other_changes), T = P(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter((B) => B.status === "broken")) || [];
    }), H = P(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter(
        (B) => B.has_path_sync_issues && !B.has_issues
      )) || [];
    }), G = P(() => T.value.length > 0), J = P(() => G.value || H.value.length > 0 || r.status.missing_models_count > 0 || !r.status.comparison.is_synced), F = P(() => {
      const O = [];
      return r.status.workflows.new.length > 0 && O.push(`${r.status.workflows.new.length} new`), r.status.workflows.modified.length > 0 && O.push(`${r.status.workflows.modified.length} modified`), r.status.workflows.deleted.length > 0 && O.push(`${r.status.workflows.deleted.length} deleted`), O.length > 0 ? `${O.join(", ")} workflow${O.length === 1 && !O[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), D = P(() => {
      var ae, ie;
      const O = [], B = r.status.comparison;
      return (ae = B.missing_nodes) != null && ae.length && O.push(`${B.missing_nodes.length} missing node${B.missing_nodes.length === 1 ? "" : "s"}`), (ie = B.extra_nodes) != null && ie.length && O.push(`${B.extra_nodes.length} untracked node${B.extra_nodes.length === 1 ? "" : "s"}`), O.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${O.join(" and ")}.`;
    }), R = P(() => {
      var ae, ie;
      const O = [], B = r.status.comparison;
      return (ae = B.extra_nodes) != null && ae.length && (B.extra_nodes.slice(0, 3).forEach((Q) => {
        O.push(`Untracked: ${Q}`);
      }), B.extra_nodes.length > 3 && O.push(`...and ${B.extra_nodes.length - 3} more untracked`)), (ie = B.missing_nodes) != null && ie.length && (B.missing_nodes.slice(0, 3).forEach((Q) => {
        O.push(`Missing: ${Q}`);
      }), B.missing_nodes.length > 3 && O.push(`...and ${B.missing_nodes.length - 3} more missing`)), O;
    });
    return (O, B) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: B[1] || (B[1] = (ae) => g.value = !0),
            onMouseleave: B[2] || (B[2] = (ae) => g.value = !1)
          }, [
            e("div", Zn, [
              h(Fe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...B[9] || (B[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              h(Es, { name: "fade" }, {
                default: i(() => [
                  g.value ? (s(), E(Y, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...B[10] || (B[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            h(lo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Rt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), E(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), E(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), E(Qe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                h(Qe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(Qe, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                M.value ? (s(), E(Qe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !k.value && !M.value ? (s(), E(Qe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (s(), E(Qe, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              C.value ? {
                name: "footer",
                fn: i(() => [
                  B[12] || (B[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ea, [
                    e("span", ta, a(F.value), 1),
                    h(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: B[0] || (B[0] = (ae) => O.$emit("commit-changes"))
                    }, {
                      default: i(() => [...B[11] || (B[11] = [
                        y(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), E(gt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              h(Y, {
                variant: "primary",
                size: "sm",
                onClick: B[3] || (B[3] = (ae) => O.$emit("create-branch"))
              }, {
                default: i(() => [...B[13] || (B[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", sa, [
            h(Fe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...B[14] || (B[14] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            J.value ? (s(), o(A, { key: 0 }, [
              T.value.length > 0 ? (s(), E(gt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((ae) => `${ae.name} — ${ae.issue_summary}`)
              }, {
                actions: i(() => [
                  h(Y, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[4] || (B[4] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...B[15] || (B[15] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              H.value.length > 0 ? (s(), E(gt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${H.value.length} workflow${H.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: H.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  h(Y, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[5] || (B[5] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...B[16] || (B[16] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              t.status.missing_models_count > 0 && !G.value ? (s(), E(gt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  h(Y, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: L
                  }, {
                    default: i(() => [
                      y(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  h(Y, {
                    variant: "secondary",
                    size: "sm",
                    onClick: B[6] || (B[6] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...B[17] || (B[17] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : c("", !0),
              t.status.comparison.is_synced ? c("", !0) : (s(), E(gt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: D.value,
                items: R.value
              }, {
                actions: i(() => [
                  h(Y, {
                    variant: "secondary",
                    size: "sm",
                    onClick: v
                  }, {
                    default: i(() => [...B[18] || (B[18] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  h(Y, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[7] || (B[7] = (ae) => O.$emit("view-nodes"))
                  }, {
                    default: i(() => [...B[19] || (B[19] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : C.value ? (s(), o("span", oa, "No issues")) : (s(), E(Ye, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      h(Xn, {
        show: p.value,
        status: t.status,
        onClose: B[8] || (B[8] = (ae) => p.value = !1),
        onNavigateWorkflows: f,
        onNavigateNodes: l
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), aa = /* @__PURE__ */ K(na, [["__scopeId", "data-v-5f863725"]]), la = ["type", "value", "placeholder", "disabled"], ia = /* @__PURE__ */ q({
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
  setup(t, { expose: d, emit: n }) {
    const r = t, p = n, g = x(null);
    function v(f) {
      const l = f.target.value;
      p("update:modelValue", l);
    }
    return Ie(() => {
      r.autoFocus && g.value && g.value.focus();
    }), d({
      focus: () => {
        var f;
        return (f = g.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = g.value) == null ? void 0 : f.blur();
      }
    }), (f, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: te(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        l[0] || (l[0] = rt((u) => f.$emit("enter"), ["enter"])),
        l[1] || (l[1] = rt((u) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (u) => f.$emit("focus")),
      onBlur: l[3] || (l[3] = (u) => f.$emit("blur"))
    }, null, 42, la));
  }
}), Pt = /* @__PURE__ */ K(ia, [["__scopeId", "data-v-0380d08f"]]), ra = { class: "branch-create-form" }, da = { class: "form-actions" }, ca = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const n = d, r = x(""), p = P(() => {
      const f = r.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function g() {
      p.value && (n("create", r.value.trim()), r.value = "");
    }
    function v() {
      r.value = "", n("cancel");
    }
    return (f, l) => (s(), o("div", ra, [
      h(Pt, {
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => r.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", da, [
        h(Y, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: g
        }, {
          default: i(() => [...l[1] || (l[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        h(Y, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: i(() => [...l[2] || (l[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ua = /* @__PURE__ */ K(ca, [["__scopeId", "data-v-7c500394"]]), ma = { class: "branch-list-item__indicator" }, va = { class: "branch-list-item__name" }, fa = {
  key: 0,
  class: "branch-list-item__actions"
}, ga = {
  key: 0,
  class: "branch-list-item__current-label"
}, pa = /* @__PURE__ */ q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (d, n) => (s(), o("div", {
      class: te(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && d.$emit("click"))
    }, [
      e("span", ma, a(t.isCurrent ? "●" : "○"), 1),
      e("span", va, a(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (s(), o("div", fa, [
        fe(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", ga, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ha = /* @__PURE__ */ K(pa, [["__scopeId", "data-v-c6581a24"]]), ya = {
  key: 2,
  class: "branch-list"
}, wa = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: d }) {
    const n = d, r = x(!1);
    function p(v) {
      n("create", v), g();
    }
    function g() {
      r.value = !1;
    }
    return (v, f) => (s(), E(Pe, null, {
      header: i(() => [
        h(Ue, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? c("", !0) : (s(), E(Y, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: f[0] || (f[0] = (l) => r.value = !0)
            }, {
              default: i(() => [...f[1] || (f[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (s(), E(ua, {
          key: 0,
          onCreate: p,
          onCancel: g
        })) : c("", !0),
        t.branches.length === 0 ? (s(), E(Ye, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", ya, [
          (s(!0), o(A, null, X(t.branches, (l) => (s(), E(ha, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), E(Y, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => v.$emit("delete", l.name)
              }, {
                default: i(() => [...f[2] || (f[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), E(Y, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => v.$emit("switch", l.name)
              }, {
                default: i(() => [...f[3] || (f[3] = [
                  y(" Switch ", -1)
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
}), ka = /* @__PURE__ */ K(wa, [["__scopeId", "data-v-86784ddd"]]), ba = { class: "commit-list" }, _a = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (d, n) => (s(), o("div", ba, [
      fe(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), $a = /* @__PURE__ */ K(_a, [["__scopeId", "data-v-8c5ee761"]]), Ca = { class: "commit-hash" }, xa = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, n = P(() => d.hash.slice(0, d.length));
    return (r, p) => (s(), o("span", Ca, a(n.value), 1));
  }
}), rs = /* @__PURE__ */ K(xa, [["__scopeId", "data-v-7c333cc6"]]), Sa = { class: "commit-message" }, Ia = { class: "commit-date" }, Ea = /* @__PURE__ */ q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const n = t, r = d;
    function p() {
      n.clickable && r("click");
    }
    return (g, v) => (s(), o("div", {
      class: te(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      h(rs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Sa, a(t.message), 1),
      e("span", Ia, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = _e(() => {
        }, ["stop"]))
      }, [
        fe(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ K(Ea, [["__scopeId", "data-v-dd7c621b"]]), Ra = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, n) => (s(), E(Pe, null, {
      header: i(() => [
        h(Ue, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), E(Ye, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E($a, { key: 1 }, {
          default: i(() => [
            (s(!0), o(A, null, X(t.commits, (r) => (s(), E(Ma, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (p) => d.$emit("select", r)
            }, {
              actions: i(() => [
                h(Y, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => d.$emit("checkout", r),
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
}), Ta = /* @__PURE__ */ K(Ra, [["__scopeId", "data-v-981c3c64"]]), V0 = [
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
  ...Array(12).fill(null).map((t, d) => ({
    name: `synced-workflow-${d + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + d,
    model_count: 1 + d % 3,
    sync_state: "synced"
  }))
], W0 = {
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
}, za = [
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
], G0 = [
  ...za,
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
function _t() {
  return !1;
}
function Te() {
  const t = x(!1), d = x(null);
  async function n(S, I) {
    var de;
    if (!((de = window.app) != null && de.api))
      throw new Error("ComfyUI API not available");
    const W = await window.app.api.fetchApi(S, I);
    if (!W.ok) {
      const Ce = await W.json().catch(() => ({}));
      throw new Error(Ce.error || Ce.message || `Request failed: ${W.status}`);
    }
    return W.json();
  }
  async function r(S = !1) {
    return n(S ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(S, I = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: S, allow_issues: I })
    });
  }
  async function g(S = 10, I = 0) {
    return n(`/v2/comfygit/log?limit=${S}&offset=${I}`);
  }
  async function v(S) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: S })
    });
  }
  async function f() {
    return n("/v2/comfygit/branches");
  }
  async function l(S) {
    return n(`/v2/comfygit/commit/${S}`);
  }
  async function u(S, I = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: S, force: I })
    });
  }
  async function w(S, I = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: S, start_point: I })
    });
  }
  async function m(S, I = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: S, force: I })
    });
  }
  async function L(S, I = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(S)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: I })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const S = await r();
        return [{
          name: S.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + S.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: S.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: S.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function N(S) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: S })
    });
  }
  async function b() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function k(S) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(S)
    });
  }
  async function C() {
    return n("/v2/workspace/environments/create_status");
  }
  async function V(S = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${S}`);
  }
  async function M(S) {
    return n(`/v2/workspace/environments/${S}`, {
      method: "DELETE"
    });
  }
  async function T(S = !1) {
    try {
      return n(S ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const I = await r(S), W = [];
      return I.workflows.new.forEach((de) => {
        W.push({ name: de, status: "new", missing_nodes: 0, missing_models: 0, path: de });
      }), I.workflows.modified.forEach((de) => {
        W.push({ name: de, status: "modified", missing_nodes: 0, missing_models: 0, path: de });
      }), I.workflows.synced.forEach((de) => {
        W.push({ name: de, status: "synced", missing_nodes: 0, missing_models: 0, path: de });
      }), W;
    }
  }
  async function H(S) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(S)}/details`);
  }
  async function G(S) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(S)}/resolve`, {
      method: "POST"
    });
  }
  async function J(S, I, W) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(S)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: I, install_models: W })
    });
  }
  async function F(S, I, W) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(S)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: I, importance: W })
    });
  }
  async function D() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function R() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function O(S) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(S)}`);
  }
  async function B(S) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: S })
    });
  }
  async function ae(S, I) {
    return n(`/v2/workspace/models/${S}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: I })
    });
  }
  async function ie(S, I) {
    return n(`/v2/workspace/models/${S}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: I })
    });
  }
  async function Q(S) {
    return n(`/v2/workspace/models/${S}`, {
      method: "DELETE"
    });
  }
  async function Z(S) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(S)
    });
  }
  async function U() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function _() {
    return n("/v2/workspace/models/directory");
  }
  async function se(S) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: S })
    });
  }
  async function ee() {
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
  async function $e(S) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(S)
    });
  }
  async function we(S, I) {
    try {
      const W = new URLSearchParams();
      return S && W.append("level", S), I && W.append("lines", I.toString()), n(`/v2/comfygit/debug/logs?${W}`);
    } catch {
      return [];
    }
  }
  async function Me(S, I) {
    try {
      const W = new URLSearchParams();
      return S && W.append("level", S), I && W.append("lines", I.toString()), n(`/v2/workspace/debug/logs?${W}`);
    } catch {
      return [];
    }
  }
  async function Oe() {
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
  async function ce(S) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(S)}/track-dev`, {
      method: "POST"
    });
  }
  async function Be(S) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(S)}/install`, {
      method: "POST"
    });
  }
  async function he(S) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(S)}/update`, {
      method: "POST"
    });
  }
  async function Re(S) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(S)}`, {
      method: "DELETE"
    });
  }
  async function Ve() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Je(S, I) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: S, url: I })
    });
  }
  async function ve(S) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}`, {
      method: "DELETE"
    });
  }
  async function We(S, I, W) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: I, push_url: W })
    });
  }
  async function Ge(S) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/fetch`, {
      method: "POST"
    });
  }
  async function je(S) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/status`);
    } catch {
      return null;
    }
  }
  async function dt(S = "skip", I = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: S,
        remove_extra_nodes: I
      })
    });
  }
  async function me(S, I) {
    const W = I ? `/v2/comfygit/remotes/${encodeURIComponent(S)}/pull-preview?branch=${encodeURIComponent(I)}` : `/v2/comfygit/remotes/${encodeURIComponent(S)}/pull-preview`;
    return n(W);
  }
  async function Le(S, I = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: I.modelStrategy || "skip",
        force: I.force || !1,
        resolutions: I.resolutions
      })
    });
  }
  async function ct(S, I) {
    const W = I ? `/v2/comfygit/remotes/${encodeURIComponent(S)}/push-preview?branch=${encodeURIComponent(I)}` : `/v2/comfygit/remotes/${encodeURIComponent(S)}/push-preview`;
    return n(W);
  }
  async function st(S, I = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: I.force || !1 })
    });
  }
  async function Se(S, I) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: I })
    });
  }
  async function ut(S) {
    const I = {
      success: 0,
      failed: []
    };
    for (const W of S)
      try {
        await G(W), I.success++;
      } catch (de) {
        I.failed.push({
          name: W,
          error: de instanceof Error ? de.message : "Unknown error"
        });
      }
    return I;
  }
  return {
    isLoading: t,
    error: d,
    getStatus: r,
    commit: p,
    getHistory: g,
    exportEnv: v,
    // Git Operations
    getBranches: f,
    getCommitDetail: l,
    checkout: u,
    createBranch: w,
    switchBranch: m,
    deleteBranch: L,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: N,
    getSwitchProgress: b,
    createEnvironment: k,
    getCreateProgress: C,
    getComfyUIReleases: V,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: T,
    getWorkflowDetails: H,
    resolveWorkflow: G,
    installWorkflowDeps: J,
    setModelImportance: F,
    // Model Management
    getEnvironmentModels: D,
    getWorkspaceModels: R,
    getModelDetails: O,
    openFileLocation: B,
    addModelSource: ae,
    removeModelSource: ie,
    deleteModel: Q,
    downloadModel: Z,
    scanWorkspaceModels: U,
    getModelsDirectory: _,
    setModelsDirectory: se,
    // Settings
    getConfig: ee,
    updateConfig: $e,
    // Debug/Logs
    getEnvironmentLogs: we,
    getWorkspaceLogs: Me,
    // Node Management
    getNodes: Oe,
    trackNodeAsDev: ce,
    installNode: Be,
    updateNode: he,
    uninstallNode: Re,
    // Git Remotes
    getRemotes: Ve,
    addRemote: Je,
    removeRemote: ve,
    updateRemoteUrl: We,
    fetchRemote: Ge,
    getRemoteSyncStatus: je,
    // Push/Pull
    getPullPreview: me,
    pullFromRemote: Le,
    getPushPreview: ct,
    pushToRemote: st,
    validateMerge: Se,
    // Environment Sync
    syncEnvironmentManually: dt,
    // Workflow Repair
    repairWorkflowModels: ut
  };
}
async function $t(t, d = {}, n = 5e3) {
  const r = new AbortController(), p = setTimeout(() => r.abort(), n);
  try {
    const g = await fetch(t, {
      ...d,
      signal: r.signal
    });
    return clearTimeout(p), g;
  } catch (g) {
    throw clearTimeout(p), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function ds() {
  const t = x(null);
  async function d() {
    try {
      const v = await $t(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (v.ok)
        return (await v.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const v = await $t(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Health check failed");
      return await v.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const v = await $t(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Failed to get status");
      return await v.json();
    } catch {
      return null;
    }
  }
  async function p() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await $t(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await $t(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: d,
    checkHealth: n,
    getStatus: r,
    restart: p,
    kill: g
  };
}
const La = { class: "base-modal-header" }, Na = {
  key: 0,
  class: "base-modal-title"
}, Da = { class: "base-modal-body" }, Pa = {
  key: 0,
  class: "base-modal-loading"
}, Ua = {
  key: 1,
  class: "base-modal-error"
}, Oa = {
  key: 0,
  class: "base-modal-footer"
}, Ba = /* @__PURE__ */ q({
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
  setup(t, { emit: d }) {
    const n = t, r = d;
    function p() {
      n.closeOnOverlayClick && r("close");
    }
    function g(v) {
      v.key === "Escape" && r("close");
    }
    return Ie(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Ms(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (v, f) => (s(), E(Ee, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: te(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: f[1] || (f[1] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", La, [
            fe(v.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Na, a(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (l) => v.$emit("close"))
            }, [...f[2] || (f[2] = [
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
          e("div", Da, [
            t.loading ? (s(), o("div", Pa, "Loading...")) : t.error ? (s(), o("div", Ua, a(t.error), 1)) : fe(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (s(), o("div", Oa, [
            fe(v.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ K(Ba, [["__scopeId", "data-v-2125a0e6"]]), Aa = ["type", "disabled"], Fa = {
  key: 0,
  class: "spinner"
}, Va = /* @__PURE__ */ q({
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
    return (d, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: te(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (s(), o("span", Fa)) : c("", !0),
      fe(d.$slots, "default", {}, void 0, !0)
    ], 10, Aa));
  }
}), re = /* @__PURE__ */ K(Va, [["__scopeId", "data-v-f3452606"]]), Wa = {
  key: 0,
  class: "base-title-count"
}, Ga = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, n) => (s(), E(Ht(`h${t.level}`), {
      class: te(["base-title", t.variant])
    }, {
      default: i(() => [
        fe(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Wa, "(" + a(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), It = /* @__PURE__ */ K(Ga, [["__scopeId", "data-v-5a01561d"]]), ja = ["value", "disabled"], Ha = {
  key: 0,
  value: "",
  disabled: ""
}, qa = ["value"], Ka = {
  key: 0,
  class: "base-select-error"
}, Ya = /* @__PURE__ */ q({
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
    function d(r) {
      return typeof r == "string" ? r : r.value;
    }
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, p) => (s(), o("div", {
      class: te(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: te(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (g) => r.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Ha, a(t.placeholder), 1)) : c("", !0),
        (s(!0), o(A, null, X(t.options, (g) => (s(), o("option", {
          key: d(g),
          value: d(g)
        }, a(n(g)), 9, qa))), 128))
      ], 42, ja),
      t.error ? (s(), o("span", Ka, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ja = /* @__PURE__ */ K(Ya, [["__scopeId", "data-v-7436d745"]]), Qa = { class: "popover-header" }, Xa = { class: "popover-title" }, Za = { class: "popover-content" }, el = {
  key: 0,
  class: "popover-actions"
}, tl = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, n) => (s(), E(Ee, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: et({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", Qa, [
            e("h4", Xa, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Za, [
            fe(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (s(), o("div", el, [
            fe(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), at = /* @__PURE__ */ K(tl, [["__scopeId", "data-v-42815ace"]]), sl = { class: "detail-section" }, ol = {
  key: 0,
  class: "empty-message"
}, nl = { class: "model-header" }, al = { class: "model-name" }, ll = { class: "model-details" }, il = { class: "model-row" }, rl = { class: "model-row" }, dl = { class: "label" }, cl = {
  key: 0,
  class: "model-row model-row-nodes"
}, ul = { class: "node-list" }, ml = ["onClick"], vl = {
  key: 1,
  class: "model-row"
}, fl = { class: "value" }, gl = {
  key: 0,
  class: "model-actions"
}, pl = { class: "detail-section" }, hl = {
  key: 0,
  class: "empty-message"
}, yl = { class: "node-name" }, wl = {
  key: 0,
  class: "node-version"
}, kl = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const n = t, r = d, { getWorkflowDetails: p, setModelImportance: g, installWorkflowDeps: v } = Te(), f = x(null), l = x(!1), u = x(null), w = x(!1), m = x({}), L = x({}), $ = x(!1), N = x(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(D) {
      switch (D) {
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
    function C(D) {
      switch (D) {
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
    function V(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const R = D.hash || D.filename;
      return N.value.has(R) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function M(D) {
      return N.value.has(D);
    }
    function T(D) {
      N.value.has(D) ? N.value.delete(D) : N.value.add(D), N.value = new Set(N.value);
    }
    async function H() {
      l.value = !0, u.value = null;
      try {
        f.value = await p(n.workflowName);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function G(D, R) {
      m.value[D] = R, w.value = !0;
    }
    async function J() {
      if (!w.value) {
        r("close");
        return;
      }
      l.value = !0, u.value = null;
      try {
        for (const [D, R] of Object.entries(m.value))
          await g(n.workflowName, D, R);
        r("refresh"), r("close");
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function F(D) {
      L.value[D] = !0, u.value = null;
      try {
        await v(n.workflowName, !0, !1), await H();
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to install node";
      } finally {
        L.value[D] = !1;
      }
    }
    return Ie(H), (D, R) => (s(), o(A, null, [
      h(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: u.value || void 0,
        onClose: R[5] || (R[5] = (O) => r("close"))
      }, {
        body: i(() => [
          f.value ? (s(), o(A, { key: 0 }, [
            e("section", sl, [
              h(It, { variant: "section" }, {
                default: i(() => [
                  y("MODELS USED (" + a(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (s(), o("div", ol, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(A, null, X(f.value.models, (O) => (s(), o("div", {
                key: O.hash || O.filename,
                class: "model-card"
              }, [
                e("div", nl, [
                  R[7] || (R[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", al, a(O.filename), 1)
                ]),
                e("div", ll, [
                  e("div", il, [
                    R[8] || (R[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: te(["value", k(O.status)])
                    }, a(C(O.status)), 3)
                  ]),
                  e("div", rl, [
                    e("span", dl, [
                      R[9] || (R[9] = y(" Importance: ", -1)),
                      h(is, {
                        size: 14,
                        title: "About importance levels",
                        onClick: R[0] || (R[0] = (B) => $.value = !0)
                      })
                    ]),
                    h(Ja, {
                      "model-value": m.value[O.filename] || O.importance,
                      options: b,
                      "onUpdate:modelValue": (B) => G(O.filename, B)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  O.loaded_by && O.loaded_by.length > 0 ? (s(), o("div", cl, [
                    R[10] || (R[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ul, [
                      (s(!0), o(A, null, X(V(O), (B, ae) => (s(), o("div", {
                        key: `${B.node_id}-${ae}`,
                        class: "node-reference"
                      }, a(B.node_type) + " (Node #" + a(B.node_id) + ") ", 1))), 128)),
                      O.loaded_by.length > 3 ? (s(), o("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (B) => T(O.hash || O.filename)
                      }, a(M(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, ml)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  O.size_mb ? (s(), o("div", vl, [
                    R[11] || (R[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", fl, a(O.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                O.status !== "available" ? (s(), o("div", gl, [
                  O.status === "downloadable" ? (s(), E(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: R[1] || (R[1] = (B) => r("resolve"))
                  }, {
                    default: i(() => [...R[12] || (R[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : O.status === "path_mismatch" ? (s(), E(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: R[2] || (R[2] = (B) => r("resolve"))
                  }, {
                    default: i(() => [...R[13] || (R[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (s(), E(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: R[3] || (R[3] = (B) => r("resolve"))
                  }, {
                    default: i(() => [...R[14] || (R[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", pl, [
              h(It, { variant: "section" }, {
                default: i(() => [
                  y("NODES USED (" + a(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (s(), o("div", hl, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(A, null, X(f.value.nodes, (O) => (s(), o("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: te(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", yl, a(O.name), 1),
                O.version ? (s(), o("span", wl, "v" + a(O.version), 1)) : c("", !0),
                O.status === "missing" ? (s(), E(re, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: L.value[O.name],
                  onClick: (B) => F(O.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...R[15] || (R[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          h(re, {
            variant: "secondary",
            onClick: R[4] || (R[4] = (O) => r("close"))
          }, {
            default: i(() => [...R[16] || (R[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (s(), E(re, {
            key: 0,
            variant: "primary",
            onClick: J
          }, {
            default: i(() => [...R[17] || (R[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      h(at, {
        show: $.value,
        title: "Model Importance Levels",
        onClose: R[6] || (R[6] = (O) => $.value = !1)
      }, {
        content: i(() => [...R[18] || (R[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              y(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              y(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              y(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bl = /* @__PURE__ */ K(kl, [["__scopeId", "data-v-0b14d32e"]]), pe = ns({
  items: [],
  status: "idle"
});
let Xe = null;
function cs() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ft(t) {
  return pe.items.find((d) => d.id === t);
}
async function pt() {
  if (pe.status === "downloading") return;
  const t = pe.items.find((d) => d.status === "queued");
  if (!t) {
    pe.status = "idle";
    return;
  }
  pe.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await _l(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    pe.status = "idle", pt();
  }
}
async function _l(t) {
  return new Promise((d, n) => {
    Xe && (Xe.close(), Xe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Xe = p;
    let g = Date.now(), v = 0, f = !1;
    p.onmessage = (l) => {
      try {
        const u = JSON.parse(l.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const w = Date.now(), m = (w - g) / 1e3;
            if (m > 0.5) {
              const L = t.downloaded - v;
              if (t.speed = L / m, g = w, v = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            f = !0, p.close(), Xe = null, d();
            break;
          case "error":
            f = !0, p.close(), Xe = null, n(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), Xe = null, f || n(new Error("Connection lost"));
    };
  });
}
async function $l() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const n of d.pending_downloads) {
      if (pe.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const r = {
        id: cs(),
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
      pe.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Tt() {
  function t(k) {
    for (const C of k) {
      if (pe.items.some(
        (T) => T.url === C.url && T.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(T.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const M = {
        id: cs(),
        workflow: C.workflow,
        filename: C.filename,
        url: C.url,
        targetPath: C.targetPath,
        size: C.size || 0,
        type: C.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      pe.items.push(M);
    }
    pe.status === "idle" && pt();
  }
  async function d(k) {
    const C = Ft(k);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Xe && (Xe.close(), Xe = null), C.status = "failed", C.error = "Cancelled by user", pe.status = "idle", pt();
      } else if (C.status === "queued") {
        const V = pe.items.findIndex((M) => M.id === k);
        V >= 0 && pe.items.splice(V, 1);
      }
    }
  }
  function n(k) {
    const C = Ft(k);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, pe.status === "idle" && pt());
  }
  function r(k) {
    const C = Ft(k);
    !C || C.status !== "paused" || (C.status = "queued", pe.status === "idle" && pt());
  }
  function p() {
    const k = pe.items.filter((C) => C.status === "paused");
    for (const C of k)
      C.status = "queued";
    pe.status === "idle" && pt();
  }
  function g(k) {
    const C = pe.items.findIndex((V) => V.id === k);
    C >= 0 && ["completed", "failed", "paused"].includes(pe.items[C].status) && pe.items.splice(C, 1);
  }
  function v() {
    pe.items = pe.items.filter((k) => k.status !== "completed");
  }
  function f() {
    pe.items = pe.items.filter((k) => k.status !== "failed");
  }
  const l = P(
    () => pe.items.find((k) => k.status === "downloading")
  ), u = P(
    () => pe.items.filter((k) => k.status === "queued")
  ), w = P(
    () => pe.items.filter((k) => k.status === "completed")
  ), m = P(
    () => pe.items.filter((k) => k.status === "failed")
  ), L = P(
    () => pe.items.filter((k) => k.status === "paused")
  ), $ = P(() => pe.items.length > 0), N = P(
    () => pe.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), b = P(
    () => pe.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Rs(pe),
    // Computed
    currentDownload: l,
    queuedItems: u,
    completedItems: w,
    failedItems: m,
    pausedItems: L,
    hasItems: $,
    activeCount: N,
    hasPaused: b,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: p,
    removeItem: g,
    clearCompleted: v,
    clearFailed: f,
    loadPendingDownloads: $l
  };
}
function Cl() {
  const t = x(null), d = x(null), n = x([]), r = x([]), p = x(!1), g = x(null);
  async function v(V, M) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi(V, M);
    if (!T.ok) {
      const G = await T.json().catch(() => ({})), J = G.error || G.message || `Request failed: ${T.status}`;
      throw new Error(J);
    }
    return T.json();
  }
  async function f(V) {
    p.value = !0, g.value = null;
    try {
      let M;
      return _t() || (M = await v(
        `/v2/comfygit/workflow/${V}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = M, M;
    } catch (M) {
      const T = M instanceof Error ? M.message : "Unknown error occurred";
      throw g.value = T, M;
    } finally {
      p.value = !1;
    }
  }
  async function l(V, M, T, H) {
    p.value = !0, g.value = null;
    try {
      let G;
      if (!_t()) {
        const J = Object.fromEntries(M), F = Object.fromEntries(T), D = H ? Array.from(H) : [];
        G = await v(
          `/v2/comfygit/workflow/${V}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: J,
              model_choices: F,
              skipped_packages: D
            })
          }
        );
      }
      return d.value = G, G;
    } catch (G) {
      const J = G instanceof Error ? G.message : "Unknown error occurred";
      throw g.value = J, G;
    } finally {
      p.value = !1;
    }
  }
  async function u(V, M = 10) {
    p.value = !0, g.value = null;
    try {
      let T;
      return _t() || (T = await v(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: M })
        }
      )), n.value = T.results, T.results;
    } catch (T) {
      const H = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = H, T;
    } finally {
      p.value = !1;
    }
  }
  async function w(V, M = 10) {
    p.value = !0, g.value = null;
    try {
      let T;
      return _t() || (T = await v(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: M })
        }
      )), r.value = T.results, T.results;
    } catch (T) {
      const H = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = H, T;
    } finally {
      p.value = !1;
    }
  }
  const m = ns({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function L() {
    m.phase = "idle", m.currentFile = void 0, m.currentFileIndex = void 0, m.totalFiles = void 0, m.bytesDownloaded = void 0, m.bytesTotal = void 0, m.completedFiles = [], m.nodesToInstall = [], m.nodesInstalled = [], m.installError = void 0, m.needsRestart = void 0, m.error = void 0, m.nodeInstallProgress = void 0;
  }
  async function $(V) {
    m.phase = "installing", m.nodesInstalled = [], m.installError = void 0, m.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return _t(), await N(V);
    } catch (M) {
      const T = M instanceof Error ? M.message : "Failed to install nodes";
      throw m.installError = T, M;
    }
  }
  async function N(V) {
    var T;
    const M = await v(
      `/v2/comfygit/workflow/${V}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: m.nodesToInstall
        })
      }
    );
    if (m.nodeInstallProgress) {
      m.nodeInstallProgress.totalNodes = m.nodesToInstall.length;
      const H = new Map(((T = M.failed) == null ? void 0 : T.map((G) => [G.node_id, G.error])) || []);
      for (let G = 0; G < m.nodesToInstall.length; G++) {
        const J = m.nodesToInstall[G], F = H.get(J);
        m.nodeInstallProgress.completedNodes.push({
          node_id: J,
          success: !F,
          error: F
        });
      }
    }
    return m.nodesInstalled = M.nodes_installed, m.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (m.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function b(V, M, T) {
    L(), m.phase = "resolving", g.value = null;
    const H = Object.fromEntries(M), G = Object.fromEntries(T);
    try {
      const J = await fetch(`/v2/comfygit/workflow/${V}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: G
        })
      });
      if (!J.ok)
        throw new Error(`Request failed: ${J.status}`);
      if (!J.body)
        throw new Error("No response body");
      const F = J.body.getReader(), D = new TextDecoder();
      let R = "";
      for (; ; ) {
        const { done: O, value: B } = await F.read();
        if (O) break;
        R += D.decode(B, { stream: !0 });
        const ae = R.split(`

`);
        R = ae.pop() || "";
        for (const ie of ae) {
          if (!ie.trim()) continue;
          const Q = ie.split(`
`);
          let Z = "", U = "";
          for (const _ of Q)
            _.startsWith("event: ") ? Z = _.slice(7) : _.startsWith("data: ") && (U = _.slice(6));
          if (U)
            try {
              const _ = JSON.parse(U);
              k(Z, _);
            } catch (_) {
              console.warn("Failed to parse SSE event:", _);
            }
        }
      }
    } catch (J) {
      const F = J instanceof Error ? J.message : "Unknown error occurred";
      throw g.value = F, m.error = F, m.phase = "error", J;
    }
  }
  function k(V, M) {
    switch (V) {
      case "batch_start":
        m.phase = "downloading", m.totalFiles = M.total;
        break;
      case "file_start":
        m.currentFile = M.filename, m.currentFileIndex = M.index, m.bytesDownloaded = 0, m.bytesTotal = void 0;
        break;
      case "file_progress":
        m.bytesDownloaded = M.downloaded, m.bytesTotal = M.total;
        break;
      case "file_complete":
        m.completedFiles.push({
          filename: M.filename,
          success: M.success,
          error: M.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        m.nodesToInstall = M.nodes_to_install || [], M.download_results && (m.completedFiles = M.download_results), m.phase = "complete";
        break;
      case "error":
        m.error = M.message, m.phase = "error", g.value = M.message;
        break;
    }
  }
  function C(V, M) {
    const { addToQueue: T } = Tt(), H = M.filter((G) => G.url && G.target_path).map((G) => ({
      workflow: V,
      filename: G.filename,
      url: G.url,
      targetPath: G.target_path,
      size: G.size || 0,
      type: "model"
    }));
    return H.length > 0 && T(H), H.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: n,
    modelSearchResults: r,
    isLoading: p,
    error: g,
    progress: m,
    // Methods
    analyzeWorkflow: f,
    applyResolution: l,
    applyResolutionWithProgress: b,
    installNodes: $,
    searchNodes: u,
    searchModels: w,
    resetProgress: L,
    queueModelDownloads: C
  };
}
const xl = { class: "resolution-stepper" }, Sl = { class: "stepper-header" }, Il = ["onClick"], El = {
  key: 0,
  class: "step-icon"
}, Ml = {
  key: 1,
  class: "step-number"
}, Rl = { class: "step-label" }, Tl = {
  key: 0,
  class: "step-connector"
}, zl = { class: "stepper-content" }, Ll = /* @__PURE__ */ q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: d }) {
    const n = t, r = d;
    function p(u) {
      var w;
      if ((w = n.stepStats) != null && w[u]) {
        const m = n.stepStats[u];
        return m.total > 0 && m.resolved === m.total;
      }
      return n.completedSteps.includes(u);
    }
    function g(u) {
      var w;
      if ((w = n.stepStats) != null && w[u]) {
        const m = n.stepStats[u];
        return m.resolved > 0 && m.resolved < m.total;
      }
      return !1;
    }
    function v(u) {
      return p(u) ? "state-complete" : g(u) ? "state-partial" : "state-pending";
    }
    function f(u) {
      return !1;
    }
    function l(u) {
      r("step-change", u);
    }
    return (u, w) => (s(), o("div", xl, [
      e("div", Sl, [
        (s(!0), o(A, null, X(t.steps, (m, L) => (s(), o("div", {
          key: m.id,
          class: te(["step", {
            active: t.currentStep === m.id,
            completed: p(m.id),
            "in-progress": g(m.id),
            disabled: f(m.id)
          }]),
          onClick: ($) => l(m.id)
        }, [
          e("div", {
            class: te(["step-indicator", v(m.id)])
          }, [
            p(m.id) ? (s(), o("span", El, "✓")) : (s(), o("span", Ml, a(L + 1), 1))
          ], 2),
          e("div", Rl, a(m.label), 1),
          L < t.steps.length - 1 ? (s(), o("div", Tl)) : c("", !0)
        ], 10, Il))), 128))
      ]),
      e("div", zl, [
        fe(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Nl = /* @__PURE__ */ K(Ll, [["__scopeId", "data-v-2a7b3af8"]]), Dl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, n = P(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), r = P(() => `confidence-${n.value}`), p = P(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, v) => (s(), o("span", {
      class: te(["confidence-badge", r.value, t.size])
    }, a(p.value), 3));
  }
}), Yt = /* @__PURE__ */ K(Dl, [["__scopeId", "data-v-17ec4b80"]]), Pl = { class: "node-info" }, Ul = { class: "node-info-text" }, Ol = { class: "item-body" }, Bl = {
  key: 0,
  class: "resolved-state"
}, Al = {
  key: 1,
  class: "multiple-options"
}, Fl = { class: "options-list" }, Vl = ["onClick"], Wl = ["name", "value", "checked", "onChange"], Gl = { class: "option-content" }, jl = { class: "option-header" }, Hl = { class: "option-package-id" }, ql = {
  key: 0,
  class: "option-title"
}, Kl = { class: "option-meta" }, Yl = {
  key: 0,
  class: "installed-badge"
}, Jl = { class: "action-buttons" }, Ql = {
  key: 2,
  class: "unresolved"
}, Xl = { class: "action-buttons" }, Zl = /* @__PURE__ */ q({
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
  setup(t, { emit: d }) {
    const n = t, r = d, p = P(() => !!n.choice);
    P(() => {
      var f;
      return (f = n.choice) == null ? void 0 : f.action;
    }), P(() => {
      var f;
      return (f = n.choice) == null ? void 0 : f.package_id;
    });
    const g = P(() => {
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
    function v(f) {
      r("option-selected", f);
    }
    return (f, l) => (s(), o("div", {
      class: te(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", Pl, [
        e("span", Ul, [
          l[7] || (l[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: te(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Ol, [
        p.value ? (s(), o("div", Bl, [
          h(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (u) => r("clear-choice"))
          }, {
            default: i(() => [...l[8] || (l[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Al, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Fl, [
            (s(!0), o(A, null, X(t.options, (u, w) => (s(), o("label", {
              key: u.package_id,
              class: te(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (m) => v(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (m) => v(w)
              }, null, 40, Wl),
              e("div", Gl, [
                e("div", jl, [
                  e("span", Hl, a(u.package_id), 1),
                  h(Yt, {
                    confidence: u.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                u.title && u.title !== u.package_id ? (s(), o("div", ql, a(u.title), 1)) : c("", !0),
                e("div", Kl, [
                  u.is_installed ? (s(), o("span", Yl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Vl))), 128))
          ]),
          e("div", Jl, [
            h(re, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (u) => r("search"))
            }, {
              default: i(() => [...l[9] || (l[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (u) => r("manual-entry"))
            }, {
              default: i(() => [...l[10] || (l[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (u) => r("mark-optional"))
            }, {
              default: i(() => [...l[11] || (l[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Ql, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Xl, [
            h(re, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (u) => r("search"))
            }, {
              default: i(() => [...l[13] || (l[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (u) => r("manual-entry"))
            }, {
              default: i(() => [...l[14] || (l[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (u) => r("mark-optional"))
            }, {
              default: i(() => [...l[15] || (l[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ei = /* @__PURE__ */ K(Zl, [["__scopeId", "data-v-e02629e7"]]), ti = { class: "item-navigator" }, si = { class: "nav-item-info" }, oi = ["title"], ni = { class: "nav-controls" }, ai = { class: "nav-arrows" }, li = ["disabled"], ii = ["disabled"], ri = { class: "nav-position" }, di = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const n = d;
    return (r, p) => (s(), o("div", ti, [
      e("div", si, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, oi)
      ]),
      e("div", ni, [
        e("div", ai, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, li),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, ii)
        ]),
        e("span", ri, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), us = /* @__PURE__ */ K(di, [["__scopeId", "data-v-74af7920"]]), ci = ["type", "value", "placeholder", "disabled"], ui = {
  key: 0,
  class: "base-input-error"
}, mi = /* @__PURE__ */ q({
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
    return (d, n) => (s(), o("div", {
      class: te(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: te(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = rt((r) => d.$emit("enter"), ["enter"])),
          n[2] || (n[2] = rt((r) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ci),
      t.error ? (s(), o("span", ui, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ K(mi, [["__scopeId", "data-v-9ba02cdc"]]), vi = { class: "node-resolution-step" }, fi = {
  key: 0,
  class: "auto-resolved-section"
}, gi = { class: "section-header" }, pi = { class: "stat-badge" }, hi = { class: "resolved-packages-list" }, yi = { class: "package-info" }, wi = { class: "package-id" }, ki = { class: "node-count" }, bi = { class: "package-actions" }, _i = {
  key: 0,
  class: "status-badge install"
}, $i = {
  key: 1,
  class: "status-badge skip"
}, Ci = ["onClick"], xi = {
  key: 1,
  class: "section-divider"
}, Si = { class: "step-header" }, Ii = { class: "stat-badge" }, Ei = {
  key: 1,
  class: "step-body"
}, Mi = {
  key: 3,
  class: "empty-state"
}, Ri = { class: "node-search-modal" }, Ti = { class: "node-modal-body" }, zi = {
  key: 0,
  class: "node-search-results"
}, Li = ["onClick"], Ni = { class: "node-result-header" }, Di = { class: "node-result-package-id" }, Pi = {
  key: 0,
  class: "node-result-description"
}, Ui = {
  key: 1,
  class: "node-no-results"
}, Oi = {
  key: 2,
  class: "node-searching"
}, Bi = { class: "node-manual-entry-modal" }, Ai = { class: "node-modal-body" }, Fi = { class: "node-modal-actions" }, Vi = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: d }) {
    const n = t, r = d, p = x(0), g = x(!1), v = x(!1), f = x(""), l = x(""), u = x([]), w = x(!1), m = P(() => n.nodes[p.value]), L = P(() => n.nodes.filter((ie) => n.nodeChoices.has(ie.node_type)).length), $ = P(() => n.autoResolvedPackages.filter((ie) => !n.skippedPackages.has(ie.package_id)).length);
    function N(ie) {
      return n.skippedPackages.has(ie);
    }
    function b(ie) {
      r("package-skip", ie);
    }
    const k = P(() => {
      var Q;
      if (!m.value) return "not-found";
      const ie = n.nodeChoices.get(m.value.node_type);
      if (ie)
        switch (ie.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Q = m.value.options) != null && Q.length ? "ambiguous" : "not-found";
    }), C = P(() => {
      var Q;
      if (!m.value) return;
      const ie = n.nodeChoices.get(m.value.node_type);
      if (ie)
        switch (ie.action) {
          case "install":
            return ie.package_id ? `→ ${ie.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Q = m.value.options) != null && Q.length ? `${m.value.options.length} matches` : "Not Found";
    });
    function V(ie) {
      ie >= 0 && ie < n.nodes.length && (p.value = ie);
    }
    function M() {
      m.value && r("mark-optional", m.value.node_type);
    }
    function T() {
      m.value && r("skip", m.value.node_type);
    }
    function H(ie) {
      m.value && r("option-selected", m.value.node_type, ie);
    }
    function G() {
      m.value && r("clear-choice", m.value.node_type);
    }
    function J() {
      m.value && (f.value = m.value.node_type, g.value = !0);
    }
    function F() {
      l.value = "", v.value = !0;
    }
    function D() {
      g.value = !1, f.value = "", u.value = [];
    }
    function R() {
      v.value = !1, l.value = "";
    }
    function O() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function B(ie) {
      m.value && (r("manual-entry", m.value.node_type, ie.package_id), D());
    }
    function ae() {
      !m.value || !l.value.trim() || (r("manual-entry", m.value.node_type, l.value.trim()), R());
    }
    return (ie, Q) => {
      var Z, U;
      return s(), o("div", vi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", fi, [
          e("div", gi, [
            Q[4] || (Q[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", pi, a($.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", hi, [
            (s(!0), o(A, null, X(t.autoResolvedPackages, (_) => (s(), o("div", {
              key: _.package_id,
              class: "resolved-package-item"
            }, [
              e("div", yi, [
                e("code", wi, a(_.package_id), 1),
                e("span", ki, a(_.node_types_count) + " node type" + a(_.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", bi, [
                N(_.package_id) ? (s(), o("span", $i, " SKIPPED ")) : (s(), o("span", _i, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (se) => b(_.package_id)
                }, a(N(_.package_id) ? "Include" : "Skip"), 9, Ci)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", xi)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(A, { key: 2 }, [
          e("div", Si, [
            Q[5] || (Q[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ii, a(L.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          m.value ? (s(), E(us, {
            key: 0,
            "item-name": m.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: Q[0] || (Q[0] = (_) => V(p.value - 1)),
            onNext: Q[1] || (Q[1] = (_) => V(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          m.value ? (s(), o("div", Ei, [
            h(ei, {
              "node-type": m.value.node_type,
              "has-multiple-options": !!((Z = m.value.options) != null && Z.length),
              options: m.value.options,
              choice: (U = t.nodeChoices) == null ? void 0 : U.get(m.value.node_type),
              status: k.value,
              "status-label": C.value,
              onMarkOptional: M,
              onSkip: T,
              onManualEntry: F,
              onSearch: J,
              onOptionSelected: H,
              onClearChoice: G
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Mi, [...Q[6] || (Q[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), E(Ee, { to: "body" }, [
          g.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: _e(D, ["self"])
          }, [
            e("div", Ri, [
              e("div", { class: "node-modal-header" }, [
                Q[7] || (Q[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              e("div", Ti, [
                h(Ke, {
                  modelValue: f.value,
                  "onUpdate:modelValue": Q[2] || (Q[2] = (_) => f.value = _),
                  placeholder: "Search by node type, package name...",
                  onInput: O
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (s(), o("div", zi, [
                  (s(!0), o(A, null, X(u.value, (_) => (s(), o("div", {
                    key: _.package_id,
                    class: "node-search-result-item",
                    onClick: (se) => B(_)
                  }, [
                    e("div", Ni, [
                      e("code", Di, a(_.package_id), 1),
                      _.match_confidence ? (s(), E(Yt, {
                        key: 0,
                        confidence: _.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    _.description ? (s(), o("div", Pi, a(_.description), 1)) : c("", !0)
                  ], 8, Li))), 128))
                ])) : f.value && !w.value ? (s(), o("div", Ui, ' No packages found matching "' + a(f.value) + '" ', 1)) : c("", !0),
                w.value ? (s(), o("div", Oi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), E(Ee, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: _e(R, ["self"])
          }, [
            e("div", Bi, [
              e("div", { class: "node-modal-header" }, [
                Q[8] || (Q[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", Ai, [
                h(Ke, {
                  modelValue: l.value,
                  "onUpdate:modelValue": Q[3] || (Q[3] = (_) => l.value = _),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Fi, [
                  h(re, {
                    variant: "secondary",
                    onClick: R
                  }, {
                    default: i(() => [...Q[9] || (Q[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  h(re, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: ae
                  }, {
                    default: i(() => [...Q[10] || (Q[10] = [
                      y(" Add Package ", -1)
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
}), Wi = /* @__PURE__ */ K(Vi, [["__scopeId", "data-v-6474069a"]]), Gi = { class: "node-info" }, ji = { class: "node-info-text" }, Hi = { class: "item-body" }, qi = {
  key: 0,
  class: "resolved-state"
}, Ki = {
  key: 1,
  class: "multiple-options"
}, Yi = { class: "options-list" }, Ji = ["onClick"], Qi = ["name", "value", "checked", "onChange"], Xi = { class: "option-content" }, Zi = { class: "option-header" }, er = { class: "option-filename" }, tr = { class: "option-meta" }, sr = { class: "option-size" }, or = { class: "option-category" }, nr = { class: "option-path" }, ar = { class: "action-buttons" }, lr = {
  key: 2,
  class: "unresolved"
}, ir = { class: "action-buttons" }, rr = /* @__PURE__ */ q({
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
  setup(t, { emit: d }) {
    const n = t, r = d, p = P(() => !!n.choice);
    P(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), P(() => {
      var l, u;
      return ((u = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const g = P(() => {
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
    function v(l) {
      r("option-selected", l);
    }
    function f(l) {
      if (!l) return "Unknown";
      const u = l / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, u) => (s(), o("div", {
      class: te(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Gi, [
        e("span", ji, [
          u[7] || (u[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: te(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Hi, [
        p.value ? (s(), o("div", qi, [
          h(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (w) => r("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ki, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Yi, [
            (s(!0), o(A, null, X(t.options, (w, m) => (s(), o("label", {
              key: w.model.hash,
              class: te(["option-card", { selected: t.selectedOptionIndex === m }]),
              onClick: (L) => v(m)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: m,
                checked: t.selectedOptionIndex === m,
                onChange: (L) => v(m)
              }, null, 40, Qi),
              e("div", Xi, [
                e("div", Zi, [
                  e("span", er, a(w.model.filename), 1),
                  h(Yt, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", tr, [
                  e("span", sr, a(f(w.model.size)), 1),
                  e("span", or, a(w.model.category), 1)
                ]),
                e("div", nr, a(w.model.relative_path), 1)
              ])
            ], 10, Ji))), 128))
          ]),
          e("div", ar, [
            h(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (w) => r("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (w) => r("download-url"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (w) => r("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", lr, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ir, [
            h(re, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (w) => r("search"))
            }, {
              default: i(() => [...u[13] || (u[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (w) => r("download-url"))
            }, {
              default: i(() => [...u[14] || (u[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (w) => r("mark-optional"))
            }, {
              default: i(() => [...u[15] || (u[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), dr = /* @__PURE__ */ K(rr, [["__scopeId", "data-v-8a82fefa"]]), cr = { class: "model-resolution-step" }, ur = { class: "step-header" }, mr = { class: "step-info" }, vr = { class: "step-title" }, fr = { class: "step-description" }, gr = { class: "stat-badge" }, pr = {
  key: 1,
  class: "step-body"
}, hr = {
  key: 2,
  class: "empty-state"
}, yr = { class: "model-search-modal" }, wr = { class: "model-modal-body" }, kr = {
  key: 0,
  class: "model-search-results"
}, br = ["onClick"], _r = { class: "model-result-header" }, $r = { class: "model-result-filename" }, Cr = { class: "model-result-meta" }, xr = { class: "model-result-category" }, Sr = { class: "model-result-size" }, Ir = {
  key: 0,
  class: "model-result-path"
}, Er = {
  key: 1,
  class: "model-no-results"
}, Mr = {
  key: 2,
  class: "model-searching"
}, Rr = { class: "model-download-url-modal" }, Tr = { class: "model-modal-body" }, zr = { class: "model-input-group" }, Lr = { class: "model-input-group" }, Nr = { class: "model-modal-actions" }, Dr = /* @__PURE__ */ q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: d }) {
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
    function r(U) {
      var _;
      return U && ((_ = n[U]) == null ? void 0 : _[0]) || null;
    }
    const p = t, g = d, v = x(0), f = x(!1), l = x(!1), u = x(""), w = x(""), m = x(""), L = x([]), $ = x(!1), N = P(() => p.models[v.value]), b = P(() => p.models.some((U) => U.is_download_intent)), k = P(() => p.models.filter(
      (U) => p.modelChoices.has(U.filename) || U.is_download_intent
    ).length), C = P(() => {
      var _;
      if (!N.value) return "";
      const U = r((_ = N.value.reference) == null ? void 0 : _.node_type);
      return U ? `${U}/${N.value.filename}` : "";
    }), V = P(() => {
      var _;
      if (!N.value) return "not-found";
      const U = p.modelChoices.get(N.value.filename);
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
      return N.value.is_download_intent ? "download" : (_ = N.value.options) != null && _.length ? "ambiguous" : "not-found";
    }), M = P(() => {
      var _, se;
      if (!N.value) return;
      const U = p.modelChoices.get(N.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (_ = U.selected_model) != null && _.filename ? `→ ${U.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return N.value.is_download_intent ? "Pending Download" : (se = N.value.options) != null && se.length ? `${N.value.options.length} matches` : "Not Found";
    });
    function T(U) {
      U >= 0 && U < p.models.length && (v.value = U);
    }
    function H() {
      N.value && g("mark-optional", N.value.filename);
    }
    function G() {
      N.value && g("skip", N.value.filename);
    }
    function J(U) {
      N.value && g("option-selected", N.value.filename, U);
    }
    function F() {
      N.value && g("clear-choice", N.value.filename);
    }
    function D() {
      N.value && (u.value = N.value.filename, f.value = !0);
    }
    function R() {
      N.value && (w.value = N.value.download_source || "", m.value = N.value.target_path || C.value, l.value = !0);
    }
    function O() {
      f.value = !1, u.value = "", L.value = [];
    }
    function B() {
      l.value = !1, w.value = "", m.value = "";
    }
    function ae() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function ie(U) {
      N.value && O();
    }
    function Q() {
      !N.value || !w.value.trim() || (g("download-url", N.value.filename, w.value.trim(), m.value.trim() || void 0), B());
    }
    function Z(U) {
      if (!U) return "Unknown";
      const _ = U / (1024 * 1024 * 1024);
      return _ >= 1 ? `${_.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, _) => {
      var se, ee, $e;
      return s(), o("div", cr, [
        e("div", ur, [
          e("div", mr, [
            e("h3", vr, a(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", fr, a(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", gr, a(k.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        N.value ? (s(), E(us, {
          key: 0,
          "item-name": N.value.filename,
          "current-index": v.value,
          "total-items": t.models.length,
          onPrev: _[0] || (_[0] = (we) => T(v.value - 1)),
          onNext: _[1] || (_[1] = (we) => T(v.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        N.value ? (s(), o("div", pr, [
          h(dr, {
            filename: N.value.filename,
            "node-type": ((se = N.value.reference) == null ? void 0 : se.node_type) || "Unknown",
            "has-multiple-options": !!((ee = N.value.options) != null && ee.length),
            options: N.value.options,
            choice: ($e = t.modelChoices) == null ? void 0 : $e.get(N.value.filename),
            status: V.value,
            "status-label": M.value,
            onMarkOptional: H,
            onSkip: G,
            onDownloadUrl: R,
            onSearch: D,
            onOptionSelected: J,
            onClearChoice: F
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", hr, [..._[5] || (_[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Ee, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: _e(O, ["self"])
          }, [
            e("div", yr, [
              e("div", { class: "model-modal-header" }, [
                _[6] || (_[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", wr, [
                h(Ke, {
                  modelValue: u.value,
                  "onUpdate:modelValue": _[2] || (_[2] = (we) => u.value = we),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                L.value.length > 0 ? (s(), o("div", kr, [
                  (s(!0), o(A, null, X(L.value, (we) => (s(), o("div", {
                    key: we.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => ie()
                  }, [
                    e("div", _r, [
                      e("code", $r, a(we.filename), 1)
                    ]),
                    e("div", Cr, [
                      e("span", xr, a(we.category), 1),
                      e("span", Sr, a(Z(we.size)), 1)
                    ]),
                    we.relative_path ? (s(), o("div", Ir, a(we.relative_path), 1)) : c("", !0)
                  ], 8, br))), 128))
                ])) : u.value && !$.value ? (s(), o("div", Er, ' No models found matching "' + a(u.value) + '" ', 1)) : c("", !0),
                $.value ? (s(), o("div", Mr, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), E(Ee, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: _e(B, ["self"])
          }, [
            e("div", Rr, [
              e("div", { class: "model-modal-header" }, [
                _[7] || (_[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", Tr, [
                e("div", zr, [
                  _[8] || (_[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  h(Ke, {
                    modelValue: w.value,
                    "onUpdate:modelValue": _[3] || (_[3] = (we) => w.value = we),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Lr, [
                  _[9] || (_[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  h(Ke, {
                    modelValue: m.value,
                    "onUpdate:modelValue": _[4] || (_[4] = (we) => m.value = we),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Nr, [
                  h(re, {
                    variant: "secondary",
                    onClick: B
                  }, {
                    default: i(() => [..._[10] || (_[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  h(re, {
                    variant: "primary",
                    disabled: !w.value.trim() || !m.value.trim(),
                    onClick: Q
                  }, {
                    default: i(() => [..._[11] || (_[11] = [
                      y(" Queue Download ", -1)
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
}), Pr = /* @__PURE__ */ K(Dr, [["__scopeId", "data-v-c6acbada"]]), Ur = { class: "applying-step" }, Or = {
  key: 0,
  class: "phase-content"
}, Br = {
  key: 1,
  class: "phase-content"
}, Ar = { class: "phase-description" }, Fr = { class: "overall-progress" }, Vr = { class: "progress-bar" }, Wr = { class: "progress-label" }, Gr = { class: "install-list" }, jr = { class: "install-icon" }, Hr = { key: 0 }, qr = {
  key: 1,
  class: "spinner"
}, Kr = { key: 2 }, Yr = { key: 3 }, Jr = {
  key: 0,
  class: "install-error"
}, Qr = {
  key: 2,
  class: "phase-content"
}, Xr = { class: "phase-header" }, Zr = { class: "phase-title" }, ed = { class: "completion-summary" }, td = {
  key: 0,
  class: "summary-item success"
}, sd = { class: "summary-text" }, od = {
  key: 1,
  class: "summary-item error"
}, nd = { class: "summary-text" }, ad = {
  key: 2,
  class: "failed-list"
}, ld = { class: "failed-node-id" }, id = { class: "failed-error" }, rd = {
  key: 4,
  class: "summary-item success"
}, dd = {
  key: 5,
  class: "restart-prompt"
}, cd = {
  key: 3,
  class: "phase-content error"
}, ud = { class: "error-message" }, md = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const d = t, n = P(() => {
      var u, w;
      const f = ((u = d.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || d.progress.nodesToInstall.length;
      if (!f) return 0;
      const l = ((w = d.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(l / f * 100);
    }), r = P(() => {
      var f;
      return ((f = d.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.filter((l) => !l.success)) || [];
    }), p = P(() => r.value.length > 0);
    function g(f, l) {
      var w, m;
      const u = (w = d.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((L) => L.node_id === f);
      return u ? u.success ? "complete" : "failed" : ((m = d.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) === l ? "installing" : "pending";
    }
    function v(f) {
      var l, u;
      return (u = (l = d.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((w) => w.node_id === f)) == null ? void 0 : u.error;
    }
    return (f, l) => {
      var u, w, m, L;
      return s(), o("div", Ur, [
        t.progress.phase === "resolving" ? (s(), o("div", Or, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Br, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Ar, " Installing " + a((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Fr, [
            e("div", Vr, [
              e("div", {
                class: "progress-fill",
                style: et({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Wr, a(((m = t.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.length) ?? 0) + " / " + a(((L = t.progress.nodeInstallProgress) == null ? void 0 : L.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Gr, [
            (s(!0), o(A, null, X(t.progress.nodesToInstall, ($, N) => (s(), o("div", {
              key: $,
              class: te(["install-item", g($, N)])
            }, [
              e("span", jr, [
                g($, N) === "pending" ? (s(), o("span", Hr, "○")) : g($, N) === "installing" ? (s(), o("span", qr, "◌")) : g($, N) === "complete" ? (s(), o("span", Kr, "✓")) : g($, N) === "failed" ? (s(), o("span", Yr, "✗")) : c("", !0)
              ]),
              e("code", null, a($), 1),
              v($) ? (s(), o("span", Jr, a(v($)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Qr, [
          e("div", Xr, [
            e("span", {
              class: te(["phase-icon", p.value ? "warning" : "success"])
            }, a(p.value ? "⚠" : "✓"), 3),
            e("h3", Zr, a(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", ed, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", td, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", sd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (s(), o("div", od, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", nd, a(r.value.length) + " package" + a(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (s(), o("div", ad, [
              (s(!0), o(A, null, X(r.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", ld, a($.node_id), 1),
                e("span", id, a($.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = ($) => f.$emit("retry-failed"))
            }, " Retry Failed (" + a(r.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (s(), o("div", rd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", dd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = ($) => f.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", cd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", ud, a(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), vd = /* @__PURE__ */ K(md, [["__scopeId", "data-v-5efaae58"]]), fd = {
  key: 0,
  class: "loading-state"
}, gd = {
  key: 1,
  class: "wizard-content"
}, pd = {
  key: 0,
  class: "step-content"
}, hd = { class: "analysis-summary" }, yd = { class: "analysis-header" }, wd = { class: "summary-description" }, kd = { class: "stats-grid" }, bd = { class: "stat-card" }, _d = { class: "stat-items" }, $d = {
  key: 0,
  class: "stat-item success"
}, Cd = { class: "stat-count" }, xd = {
  key: 1,
  class: "stat-item info"
}, Sd = { class: "stat-count" }, Id = {
  key: 2,
  class: "stat-item warning"
}, Ed = { class: "stat-count" }, Md = {
  key: 3,
  class: "stat-item error"
}, Rd = { class: "stat-count" }, Td = { class: "stat-card" }, zd = { class: "stat-items" }, Ld = { class: "stat-item success" }, Nd = { class: "stat-count" }, Dd = {
  key: 0,
  class: "stat-item info"
}, Pd = { class: "stat-count" }, Ud = {
  key: 1,
  class: "stat-item warning"
}, Od = { class: "stat-count" }, Bd = {
  key: 2,
  class: "stat-item error"
}, Ad = { class: "stat-count" }, Fd = {
  key: 0,
  class: "status-message warning"
}, Vd = { class: "status-text" }, Wd = {
  key: 1,
  class: "status-message info"
}, Gd = { class: "status-text" }, jd = {
  key: 2,
  class: "status-message info"
}, Hd = { class: "status-text" }, qd = {
  key: 3,
  class: "status-message success"
}, Kd = {
  key: 3,
  class: "step-content"
}, Yd = { class: "review-summary" }, Jd = { class: "review-stats" }, Qd = { class: "review-stat" }, Xd = { class: "stat-value" }, Zd = { class: "review-stat" }, ec = { class: "stat-value" }, tc = { class: "review-stat" }, sc = { class: "stat-value" }, oc = { class: "review-stat" }, nc = { class: "stat-value" }, ac = {
  key: 0,
  class: "review-section"
}, lc = { class: "section-title" }, ic = { class: "review-items" }, rc = { class: "item-name" }, dc = { class: "item-choice" }, cc = {
  key: 0,
  class: "choice-badge install"
}, uc = {
  key: 1,
  class: "choice-badge skip"
}, mc = {
  key: 1,
  class: "review-section"
}, vc = { class: "section-title" }, fc = { class: "review-items" }, gc = { class: "item-name" }, pc = { class: "item-choice" }, hc = {
  key: 0,
  class: "choice-badge install"
}, yc = {
  key: 1,
  class: "choice-badge optional"
}, wc = {
  key: 2,
  class: "choice-badge skip"
}, kc = {
  key: 1,
  class: "choice-badge pending"
}, bc = {
  key: 2,
  class: "review-section"
}, _c = { class: "section-title" }, $c = { class: "review-items" }, Cc = { class: "item-name" }, xc = { class: "item-choice" }, Sc = {
  key: 0,
  class: "choice-badge install"
}, Ic = {
  key: 1,
  class: "choice-badge download"
}, Ec = {
  key: 2,
  class: "choice-badge optional"
}, Mc = {
  key: 3,
  class: "choice-badge skip"
}, Rc = {
  key: 4,
  class: "choice-badge skip"
}, Tc = {
  key: 1,
  class: "choice-badge download"
}, zc = {
  key: 2,
  class: "choice-badge pending"
}, Lc = {
  key: 3,
  class: "no-choices"
}, Nc = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: d }) {
    const n = t, r = d, { analyzeWorkflow: p, applyResolution: g, installNodes: v, queueModelDownloads: f, progress: l, resetProgress: u } = Cl(), { loadPendingDownloads: w } = Tt(), m = x(null), L = x(!1), $ = x(!1), N = x(null), b = x("analysis"), k = x([]), C = x(/* @__PURE__ */ new Map()), V = x(/* @__PURE__ */ new Map()), M = x(/* @__PURE__ */ new Set()), T = P(() => {
      const S = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || D.value) && S.push({ id: "nodes", label: "Nodes" }), (J.value || F.value) && S.push({ id: "models", label: "Models" }), S.push({ id: "review", label: "Review" }), b.value === "applying" && S.push({ id: "applying", label: "Applying" }), S;
    }), H = P(() => m.value ? m.value.stats.needs_user_input : !1), G = P(() => m.value ? m.value.nodes.unresolved.length > 0 || m.value.nodes.ambiguous.length > 0 : !1), J = P(() => m.value ? m.value.models.unresolved.length > 0 || m.value.models.ambiguous.length > 0 : !1), F = P(() => m.value ? m.value.stats.download_intents > 0 : !1), D = P(() => m.value ? m.value.stats.nodes_needing_installation > 0 : !1), R = P(() => m.value ? m.value.nodes.resolved.length : 0), O = P(() => {
      if (!m.value) return [];
      const S = m.value.nodes.resolved.filter((W) => !W.is_installed), I = /* @__PURE__ */ new Set();
      return S.filter((W) => I.has(W.package.package_id) ? !1 : (I.add(W.package.package_id), !0));
    }), B = P(() => {
      if (!m.value) return [];
      const S = m.value.nodes.resolved.filter((W) => !W.is_installed), I = /* @__PURE__ */ new Map();
      for (const W of S) {
        const de = I.get(W.package.package_id);
        de ? de.node_types_count++ : I.set(W.package.package_id, {
          package_id: W.package.package_id,
          title: W.package.title,
          node_types_count: 1
        });
      }
      return Array.from(I.values());
    }), ae = P(() => O.value.filter((S) => !M.value.has(S.package.package_id))), ie = P(() => m.value ? m.value.models.resolved.filter((S) => S.match_type === "download_intent").map((S) => ({
      filename: S.reference.widget_value,
      reference: S.reference,
      is_download_intent: !0,
      resolved_model: S.model,
      download_source: S.download_source,
      target_path: S.target_path
    })) : []), Q = P(() => {
      if (!m.value) return [];
      const S = m.value.nodes.unresolved.map((W) => ({
        node_type: W.reference.node_type,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), I = m.value.nodes.ambiguous.map((W) => ({
        node_type: W.reference.node_type,
        has_multiple_options: !0,
        options: W.options.map((de) => ({
          package_id: de.package.package_id,
          title: de.package.title,
          match_confidence: de.match_confidence,
          match_type: de.match_type,
          is_installed: de.is_installed
        }))
      }));
      return [...S, ...I];
    }), Z = P(() => {
      if (!m.value) return [];
      const S = m.value.models.unresolved.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), I = m.value.models.ambiguous.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        has_multiple_options: !0,
        options: W.options.map((de) => ({
          model: de.model,
          match_confidence: de.match_confidence,
          match_type: de.match_type,
          has_download_source: de.has_download_source
        }))
      }));
      return [...S, ...I];
    }), U = P(() => {
      const S = Z.value, I = ie.value.map((W) => ({
        filename: W.filename,
        reference: W.reference,
        is_download_intent: !0,
        resolved_model: W.resolved_model,
        download_source: W.download_source,
        target_path: W.target_path,
        options: void 0
      }));
      return [...S, ...I];
    }), _ = P(() => {
      let S = ae.value.length;
      for (const I of C.value.values())
        I.action === "install" && S++;
      for (const I of V.value.values())
        I.action === "select" && S++;
      return S;
    }), se = P(() => {
      let S = 0;
      for (const I of V.value.values())
        I.action === "download" && S++;
      return S;
    }), ee = P(() => {
      let S = 0;
      for (const I of C.value.values())
        I.action === "optional" && S++;
      for (const I of V.value.values())
        I.action === "optional" && S++;
      return S;
    }), $e = P(() => {
      let S = M.value.size;
      for (const I of C.value.values())
        I.action === "skip" && S++;
      for (const I of V.value.values())
        I.action === "skip" && S++;
      for (const I of Q.value)
        C.value.has(I.node_type) || S++;
      for (const I of Z.value)
        V.value.has(I.filename) || S++;
      return S;
    }), we = P(() => {
      const S = {};
      if (S.analysis = { resolved: 1, total: 1 }, G.value) {
        const I = Q.value.length, W = Q.value.filter(
          (de) => C.value.has(de.node_type)
        ).length;
        S.nodes = { resolved: W, total: I };
      }
      if (J.value || F.value) {
        const I = U.value.length, W = U.value.filter(
          (de) => V.value.has(de.filename) || de.is_download_intent
        ).length;
        S.models = { resolved: W, total: I };
      }
      if (S.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const I = l.totalFiles || 1, W = l.completedFiles.length;
        S.applying = { resolved: W, total: I };
      }
      return S;
    });
    function Me(S) {
      b.value = S;
    }
    function Oe() {
      const S = T.value.findIndex((I) => I.id === b.value);
      S > 0 && (b.value = T.value[S - 1].id);
    }
    function ce() {
      const S = T.value.findIndex((I) => I.id === b.value);
      S < T.value.length - 1 && (b.value = T.value[S + 1].id);
    }
    async function Be() {
      L.value = !0, N.value = null;
      try {
        m.value = await p(n.workflowName);
      } catch (S) {
        N.value = S instanceof Error ? S.message : "Failed to analyze workflow";
      } finally {
        L.value = !1;
      }
    }
    function he() {
      k.value.includes("analysis") || k.value.push("analysis"), G.value || D.value ? b.value = "nodes" : J.value || F.value ? b.value = "models" : b.value = "review";
    }
    function Re(S) {
      C.value.set(S, { action: "optional" });
    }
    function Ve(S) {
      C.value.set(S, { action: "skip" });
    }
    function Je(S, I) {
      var de;
      const W = Q.value.find((Ce) => Ce.node_type === S);
      (de = W == null ? void 0 : W.options) != null && de[I] && C.value.set(S, {
        action: "install",
        package_id: W.options[I].package_id
      });
    }
    function ve(S, I) {
      C.value.set(S, {
        action: "install",
        package_id: I
      });
    }
    function We(S) {
      C.value.delete(S);
    }
    function Ge(S) {
      M.value.has(S) ? M.value.delete(S) : M.value.add(S);
    }
    function je(S) {
      V.value.set(S, { action: "optional" });
    }
    function dt(S) {
      V.value.set(S, { action: "skip" });
    }
    function me(S, I) {
      var de;
      const W = Z.value.find((Ce) => Ce.filename === S);
      (de = W == null ? void 0 : W.options) != null && de[I] && V.value.set(S, {
        action: "select",
        selected_model: W.options[I].model
      });
    }
    function Le(S, I, W) {
      V.value.set(S, {
        action: "download",
        url: I,
        target_path: W
      });
    }
    function ct(S) {
      V.value.delete(S);
    }
    async function st() {
      var S;
      $.value = !0, N.value = null, u(), l.phase = "resolving", b.value = "applying";
      try {
        const I = await g(n.workflowName, C.value, V.value, M.value);
        I.models_to_download && I.models_to_download.length > 0 && f(n.workflowName, I.models_to_download);
        const W = [
          ...I.nodes_to_install || [],
          ...ae.value.map((Ce) => Ce.package.package_id)
        ];
        l.nodesToInstall = [...new Set(W)], l.nodesToInstall.length > 0 && await v(n.workflowName), l.phase = "complete", await w();
        const de = l.installError || ((S = l.nodeInstallProgress) == null ? void 0 : S.completedNodes.some((Ce) => !Ce.success));
        !l.needsRestart && !de && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (I) {
        N.value = I instanceof Error ? I.message : "Failed to apply resolution", l.error = N.value, l.phase = "error";
      } finally {
        $.value = !1;
      }
    }
    function Se() {
      r("refresh"), r("restart"), r("close");
    }
    async function ut() {
      var I;
      const S = ((I = l.nodeInstallProgress) == null ? void 0 : I.completedNodes.filter((W) => !W.success).map((W) => W.node_id)) || [];
      if (S.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: S.length
        }, l.nodesToInstall = S, l.nodesInstalled = [], l.installError = void 0;
        try {
          await v(n.workflowName), l.phase = "complete";
        } catch (W) {
          l.error = W instanceof Error ? W.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ie(Be), (S, I) => (s(), E(tt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: L.value,
      error: N.value || void 0,
      "fixed-height": !0,
      onClose: I[1] || (I[1] = (W) => r("close"))
    }, {
      body: i(() => [
        L.value && !m.value ? (s(), o("div", fd, [...I[2] || (I[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : m.value ? (s(), o("div", gd, [
          h(Nl, {
            steps: T.value,
            "current-step": b.value,
            "completed-steps": k.value,
            "step-stats": we.value,
            onStepChange: Me
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (s(), o("div", pd, [
            e("div", hd, [
              e("div", yd, [
                I[3] || (I[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", wd, " Found " + a(m.value.stats.total_nodes) + " nodes and " + a(m.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", kd, [
                e("div", bd, [
                  I[12] || (I[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", _d, [
                    R.value > 0 ? (s(), o("div", $d, [
                      I[4] || (I[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Cd, a(R.value), 1),
                      I[5] || (I[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    m.value.stats.packages_needing_installation > 0 ? (s(), o("div", xd, [
                      I[6] || (I[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Sd, a(m.value.stats.packages_needing_installation), 1),
                      I[7] || (I[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    m.value.nodes.ambiguous.length > 0 ? (s(), o("div", Id, [
                      I[8] || (I[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ed, a(m.value.nodes.ambiguous.length), 1),
                      I[9] || (I[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    m.value.nodes.unresolved.length > 0 ? (s(), o("div", Md, [
                      I[10] || (I[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Rd, a(m.value.nodes.unresolved.length), 1),
                      I[11] || (I[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Td, [
                  I[21] || (I[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", zd, [
                    e("div", Ld, [
                      I[13] || (I[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Nd, a(m.value.models.resolved.length - m.value.stats.download_intents), 1),
                      I[14] || (I[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    m.value.stats.download_intents > 0 ? (s(), o("div", Dd, [
                      I[15] || (I[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pd, a(m.value.stats.download_intents), 1),
                      I[16] || (I[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    m.value.models.ambiguous.length > 0 ? (s(), o("div", Ud, [
                      I[17] || (I[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Od, a(m.value.models.ambiguous.length), 1),
                      I[18] || (I[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    m.value.models.unresolved.length > 0 ? (s(), o("div", Bd, [
                      I[19] || (I[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ad, a(m.value.models.unresolved.length), 1),
                      I[20] || (I[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              H.value ? (s(), o("div", Fd, [
                I[22] || (I[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vd, a(Q.value.length + Z.value.length) + " items need your input", 1)
              ])) : D.value ? (s(), o("div", Wd, [
                I[23] || (I[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gd, a(m.value.stats.packages_needing_installation) + " package" + a(m.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(m.value.stats.nodes_needing_installation) + " node type" + a(m.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(F.value ? `, ${m.value.stats.download_intents} model${m.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : F.value ? (s(), o("div", jd, [
                I[24] || (I[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hd, a(m.value.stats.download_intents) + " model" + a(m.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (s(), o("div", qd, [...I[25] || (I[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          b.value === "nodes" ? (s(), E(Wi, {
            key: 1,
            nodes: Q.value,
            "node-choices": C.value,
            "auto-resolved-packages": B.value,
            "skipped-packages": M.value,
            onMarkOptional: Re,
            onSkip: Ve,
            onOptionSelected: Je,
            onManualEntry: ve,
            onClearChoice: We,
            onPackageSkip: Ge
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          b.value === "models" ? (s(), E(Pr, {
            key: 2,
            models: U.value,
            "model-choices": V.value,
            onMarkOptional: je,
            onSkip: dt,
            onOptionSelected: me,
            onDownloadUrl: Le,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          b.value === "review" ? (s(), o("div", Kd, [
            e("div", Yd, [
              I[30] || (I[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Jd, [
                e("div", Qd, [
                  e("span", Xd, a(_.value), 1),
                  I[26] || (I[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Zd, [
                  e("span", ec, a(se.value), 1),
                  I[27] || (I[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", tc, [
                  e("span", sc, a(ee.value), 1),
                  I[28] || (I[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", oc, [
                  e("span", nc, a($e.value), 1),
                  I[29] || (I[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              B.value.length > 0 ? (s(), o("div", ac, [
                e("h4", lc, "Node Packages (" + a(B.value.length) + ")", 1),
                e("div", ic, [
                  (s(!0), o(A, null, X(B.value, (W) => (s(), o("div", {
                    key: W.package_id,
                    class: "review-item"
                  }, [
                    e("code", rc, a(W.package_id), 1),
                    e("div", dc, [
                      M.value.has(W.package_id) ? (s(), o("span", uc, "Skipped")) : (s(), o("span", cc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              Q.value.length > 0 ? (s(), o("div", mc, [
                e("h4", vc, "Node Choices (" + a(Q.value.length) + ")", 1),
                e("div", fc, [
                  (s(!0), o(A, null, X(Q.value, (W) => {
                    var de, Ce, He, ne;
                    return s(), o("div", {
                      key: W.node_type,
                      class: "review-item"
                    }, [
                      e("code", gc, a(W.node_type), 1),
                      e("div", pc, [
                        C.value.has(W.node_type) ? (s(), o(A, { key: 0 }, [
                          ((de = C.value.get(W.node_type)) == null ? void 0 : de.action) === "install" ? (s(), o("span", hc, a((Ce = C.value.get(W.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((He = C.value.get(W.node_type)) == null ? void 0 : He.action) === "optional" ? (s(), o("span", yc, " Optional ")) : ((ne = C.value.get(W.node_type)) == null ? void 0 : ne.action) === "skip" ? (s(), o("span", wc, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", kc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              U.value.length > 0 ? (s(), o("div", bc, [
                e("h4", _c, "Models (" + a(U.value.length) + ")", 1),
                e("div", $c, [
                  (s(!0), o(A, null, X(U.value, (W) => {
                    var de, Ce, He, ne, oe, ye, zt;
                    return s(), o("div", {
                      key: W.filename,
                      class: "review-item"
                    }, [
                      e("code", Cc, a(W.filename), 1),
                      e("div", xc, [
                        V.value.has(W.filename) ? (s(), o(A, { key: 0 }, [
                          ((de = V.value.get(W.filename)) == null ? void 0 : de.action) === "select" ? (s(), o("span", Sc, a((He = (Ce = V.value.get(W.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : He.filename), 1)) : ((ne = V.value.get(W.filename)) == null ? void 0 : ne.action) === "download" ? (s(), o("span", Ic, " Download ")) : ((oe = V.value.get(W.filename)) == null ? void 0 : oe.action) === "optional" ? (s(), o("span", Ec, " Optional ")) : ((ye = V.value.get(W.filename)) == null ? void 0 : ye.action) === "skip" ? (s(), o("span", Mc, " Skip ")) : ((zt = V.value.get(W.filename)) == null ? void 0 : zt.action) === "cancel_download" ? (s(), o("span", Rc, " Cancel Download ")) : c("", !0)
                        ], 64)) : W.is_download_intent ? (s(), o("span", Tc, " Pending Download ")) : (s(), o("span", zc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              O.value.length === 0 && Q.value.length === 0 && U.value.length === 0 ? (s(), o("div", Lc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          b.value === "applying" ? (s(), E(vd, {
            key: 4,
            progress: ge(l),
            onRestart: Se,
            onRetryFailed: ut
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        b.value !== "analysis" && b.value !== "applying" ? (s(), E(re, {
          key: 0,
          variant: "secondary",
          disabled: $.value,
          onClick: Oe
        }, {
          default: i(() => [...I[31] || (I[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        I[35] || (I[35] = e("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || ge(l).phase === "complete" || ge(l).phase === "error" ? (s(), E(re, {
          key: 1,
          variant: "secondary",
          onClick: I[0] || (I[0] = (W) => r("close"))
        }, {
          default: i(() => [
            y(a(ge(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        b.value === "analysis" ? (s(), E(re, {
          key: 2,
          variant: "primary",
          disabled: L.value,
          onClick: he
        }, {
          default: i(() => [...I[32] || (I[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        b.value === "nodes" ? (s(), E(re, {
          key: 3,
          variant: "primary",
          onClick: ce
        }, {
          default: i(() => [
            y(a(J.value || F.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        b.value === "models" ? (s(), E(re, {
          key: 4,
          variant: "primary",
          onClick: ce
        }, {
          default: i(() => [...I[33] || (I[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        b.value === "review" ? (s(), E(re, {
          key: 5,
          variant: "primary",
          disabled: $.value,
          loading: $.value,
          onClick: st
        }, {
          default: i(() => [...I[34] || (I[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Dc = /* @__PURE__ */ K(Nc, [["__scopeId", "data-v-0d3f93e6"]]), Pc = { class: "search-input-wrapper" }, Uc = ["value", "placeholder"], Oc = /* @__PURE__ */ q({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: d }) {
    const n = t, r = d, p = x(null);
    let g;
    function v(l) {
      const u = l.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        r("update:modelValue", u);
      }, n.debounce)) : r("update:modelValue", u);
    }
    function f() {
      var l;
      r("update:modelValue", ""), r("clear"), (l = p.value) == null || l.focus();
    }
    return Ie(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (l, u) => (s(), o("div", Pc, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: rt(f, ["escape"])
      }, null, 40, Uc),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Bc = /* @__PURE__ */ K(Oc, [["__scopeId", "data-v-266f857a"]]), Ac = { class: "search-bar" }, Fc = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, n) => (s(), o("div", Ac, [
      h(Bc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => d.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), kt = /* @__PURE__ */ K(Fc, [["__scopeId", "data-v-3d51bbfd"]]), Vc = { class: "section-group" }, Wc = {
  key: 0,
  class: "section-content"
}, Gc = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const n = t, r = d, p = x(n.initiallyExpanded);
    function g() {
      n.collapsible && (p.value = !p.value, r("toggle", p.value));
    }
    return (v, f) => (s(), o("section", Vc, [
      h(Fe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: g
      }, {
        default: i(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", Wc, [
        fe(v.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), xe = /* @__PURE__ */ K(Gc, [["__scopeId", "data-v-c48e33ed"]]), jc = { class: "item-header" }, Hc = {
  key: 0,
  class: "item-icon"
}, qc = { class: "item-info" }, Kc = {
  key: 0,
  class: "item-title"
}, Yc = {
  key: 1,
  class: "item-subtitle"
}, Jc = {
  key: 0,
  class: "item-details"
}, Qc = {
  key: 1,
  class: "item-actions"
}, Xc = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const n = t, r = P(() => n.status ? `status-${n.status}` : "");
    return (p, g) => (s(), o("div", {
      class: te(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: g[0] || (g[0] = (v) => t.clickable && p.$emit("click"))
    }, [
      e("div", jc, [
        p.$slots.icon ? (s(), o("span", Hc, [
          fe(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", qc, [
          p.$slots.title ? (s(), o("div", Kc, [
            fe(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (s(), o("div", Yc, [
            fe(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", Jc, [
        fe(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (s(), o("div", Qc, [
        fe(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ze = /* @__PURE__ */ K(Xc, [["__scopeId", "data-v-cc435e0e"]]), Zc = { class: "loading-state" }, eu = { class: "loading-message" }, tu = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, n) => (s(), o("div", Zc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", eu, a(t.message), 1)
    ]));
  }
}), lt = /* @__PURE__ */ K(tu, [["__scopeId", "data-v-ad8436c9"]]), su = { class: "error-state" }, ou = { class: "error-message" }, nu = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, n) => (s(), o("div", su, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", ou, a(t.message), 1),
      t.retry ? (s(), E(Y, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => d.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), it = /* @__PURE__ */ K(nu, [["__scopeId", "data-v-5397be48"]]), au = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: n }) {
    const r = n, { getWorkflows: p } = Te();
    ds();
    const g = x([]), v = x(!1), f = x(null), l = x(""), u = x(!0), w = x(!1), m = x(!1), L = x(!1), $ = x(null), N = P(
      () => g.value.filter((Z) => Z.status === "broken")
    ), b = P(
      () => g.value.filter((Z) => Z.status === "new")
    ), k = P(
      () => g.value.filter((Z) => Z.status === "modified")
    ), C = P(
      () => g.value.filter((Z) => Z.status === "synced")
    ), V = P(() => {
      if (!l.value.trim()) return g.value;
      const Z = l.value.toLowerCase();
      return g.value.filter((U) => U.name.toLowerCase().includes(Z));
    }), M = P(
      () => N.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), T = P(
      () => b.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), H = P(
      () => k.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), G = P(
      () => C.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), J = P(
      () => w.value ? G.value : G.value.slice(0, 5)
    );
    async function F(Z = !1) {
      v.value = !0, f.value = null;
      try {
        g.value = await p(Z);
      } catch (U) {
        f.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        v.value = !1;
      }
    }
    d({ loadWorkflows: F });
    function D(Z) {
      $.value = Z, m.value = !0;
    }
    function R(Z) {
      $.value = Z, L.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function B() {
      r("refresh");
    }
    async function ae() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ie(Z) {
      const U = [];
      return Z.missing_nodes > 0 && U.push(`${Z.missing_nodes} missing node${Z.missing_nodes > 1 ? "s" : ""}`), Z.missing_models > 0 && U.push(`${Z.missing_models} missing model${Z.missing_models > 1 ? "s" : ""}`), Z.pending_downloads && Z.pending_downloads > 0 && U.push(`${Z.pending_downloads} pending download${Z.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function Q(Z) {
      const U = Z.sync_state === "new" ? "New" : Z.sync_state === "modified" ? "Modified" : Z.sync_state === "synced" ? "Synced" : Z.sync_state;
      return Z.has_path_sync_issues && Z.models_needing_path_sync && Z.models_needing_path_sync > 0 ? `${Z.models_needing_path_sync} model path${Z.models_needing_path_sync > 1 ? "s" : ""} need${Z.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return Ie(F), (Z, U) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, { title: "WORKFLOWS" }, {
            actions: i(() => [
              N.value.length > 0 ? (s(), E(Y, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...U[8] || (U[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          h(kt, {
            modelValue: l.value,
            "onUpdate:modelValue": U[0] || (U[0] = (_) => l.value = _),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value ? (s(), E(lt, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (s(), E(it, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            M.value.length ? (s(), E(xe, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(M.value, (_) => (s(), E(ze, {
                  key: _.name,
                  status: "broken"
                }, {
                  icon: i(() => [...U[9] || (U[9] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(_.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(ie(_)), 1)
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => R(_.name)
                    }, {
                      default: i(() => [...U[10] || (U[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => D(_.name)
                    }, {
                      default: i(() => [...U[11] || (U[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            T.value.length ? (s(), E(xe, {
              key: 1,
              title: "NEW",
              count: T.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(T.value, (_) => (s(), E(ze, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    y(a(_.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    y(a(_.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(_)), 1)
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => D(_.name)
                    }, {
                      default: i(() => [...U[12] || (U[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            H.value.length ? (s(), E(xe, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(H.value, (_) => (s(), E(ze, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...U[13] || (U[13] = [
                    y("⚡", -1)
                  ])]),
                  title: i(() => [
                    y(a(_.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(_)), 1)
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => D(_.name)
                    }, {
                      default: i(() => [...U[14] || (U[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            G.value.length ? (s(), E(xe, {
              key: 3,
              title: "SYNCED",
              count: G.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: U[2] || (U[2] = (_) => u.value = _)
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(J.value, (_) => (s(), E(ze, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    y(a(_.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    y(a(_.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(_)), 1)
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => D(_.name)
                    }, {
                      default: i(() => [...U[15] || (U[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && G.value.length > 5 ? (s(), E(Y, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (_) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    y(" View all " + a(G.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            V.value.length ? c("", !0) : (s(), E(Ye, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      m.value && $.value ? (s(), E(bl, {
        key: 0,
        "workflow-name": $.value,
        onClose: U[3] || (U[3] = (_) => m.value = !1),
        onResolve: U[4] || (U[4] = (_) => R($.value)),
        onRefresh: U[5] || (U[5] = (_) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      L.value && $.value ? (s(), E(Dc, {
        key: 1,
        "workflow-name": $.value,
        onClose: U[6] || (U[6] = (_) => L.value = !1),
        onInstall: B,
        onRefresh: U[7] || (U[7] = (_) => r("refresh")),
        onRestart: ae
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), lu = /* @__PURE__ */ K(au, [["__scopeId", "data-v-b7939cb4"]]), iu = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, n) => (s(), o("div", {
      class: te(["summary-bar", t.variant])
    }, [
      fe(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ K(iu, [["__scopeId", "data-v-ccb7816e"]]), ru = {
  key: 0,
  class: "model-details"
}, du = { class: "detail-section" }, cu = { class: "detail-row" }, uu = { class: "detail-value mono" }, mu = { class: "detail-row" }, vu = { class: "detail-value mono" }, fu = { class: "detail-row" }, gu = { class: "detail-value mono" }, pu = { class: "detail-row" }, hu = { class: "detail-value" }, yu = { class: "detail-row" }, wu = { class: "detail-value" }, ku = { class: "detail-row" }, bu = { class: "detail-value" }, _u = { class: "detail-section" }, $u = { class: "section-header" }, Cu = {
  key: 0,
  class: "locations-list"
}, xu = { class: "location-path mono" }, Su = {
  key: 0,
  class: "location-modified"
}, Iu = ["onClick"], Eu = {
  key: 1,
  class: "empty-state"
}, Mu = { class: "detail-section" }, Ru = { class: "section-header" }, Tu = {
  key: 0,
  class: "sources-list"
}, zu = { class: "source-type" }, Lu = ["href"], Nu = ["disabled", "onClick"], Du = {
  key: 1,
  class: "empty-state"
}, Pu = { class: "add-source-form" }, Uu = ["disabled"], Ou = {
  key: 2,
  class: "source-error"
}, Bu = {
  key: 3,
  class: "source-success"
}, Au = /* @__PURE__ */ q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const n = t, { getModelDetails: r, addModelSource: p, removeModelSource: g, openFileLocation: v } = Te(), f = x(null), l = x(!0), u = x(null), w = x(""), m = x(!1), L = x(null), $ = x(null), N = x(null), b = x(null);
    let k = null;
    function C(F, D = "success", R = 2e3) {
      k && clearTimeout(k), b.value = { message: F, type: D }, k = setTimeout(() => {
        b.value = null;
      }, R);
    }
    function V(F) {
      if (!F) return "Unknown";
      const D = 1024 * 1024 * 1024, R = 1024 * 1024;
      return F >= D ? `${(F / D).toFixed(1)} GB` : F >= R ? `${(F / R).toFixed(0)} MB` : `${(F / 1024).toFixed(0)} KB`;
    }
    function M(F) {
      navigator.clipboard.writeText(F), C("Copied to clipboard!");
    }
    async function T(F) {
      try {
        await v(F), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!w.value.trim() || !f.value)) {
        m.value = !0, $.value = null, N.value = null;
        try {
          await p(f.value.hash, w.value.trim()), N.value = "Source added successfully!", w.value = "", await J();
        } catch (F) {
          $.value = F instanceof Error ? F.message : "Failed to add source";
        } finally {
          m.value = !1;
        }
      }
    }
    async function G(F) {
      if (f.value) {
        L.value = F, $.value = null, N.value = null;
        try {
          await g(f.value.hash, F), C("Source removed"), await J();
        } catch (D) {
          $.value = D instanceof Error ? D.message : "Failed to remove source";
        } finally {
          L.value = null;
        }
      }
    }
    async function J() {
      l.value = !0, u.value = null;
      try {
        f.value = await r(n.identifier);
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ie(J), (F, D) => {
      var R;
      return s(), o(A, null, [
        h(tt, {
          title: `Model Details: ${((R = f.value) == null ? void 0 : R.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: u.value,
          onClose: D[5] || (D[5] = (O) => F.$emit("close"))
        }, {
          body: i(() => {
            var O, B, ae, ie;
            return [
              f.value ? (s(), o("div", ru, [
                e("section", du, [
                  e("div", cu, [
                    D[6] || (D[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", uu, a(f.value.hash || "Not computed"), 1),
                    f.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[0] || (D[0] = (Q) => M(f.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", mu, [
                    D[7] || (D[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", vu, a(f.value.blake3 || "Not computed"), 1),
                    f.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[1] || (D[1] = (Q) => M(f.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", fu, [
                    D[8] || (D[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", gu, a(f.value.sha256 || "Not computed"), 1),
                    f.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[2] || (D[2] = (Q) => M(f.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", pu, [
                    D[9] || (D[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", hu, a(V(f.value.size)), 1)
                  ]),
                  e("div", yu, [
                    D[10] || (D[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", wu, a(f.value.category), 1)
                  ]),
                  e("div", ku, [
                    D[11] || (D[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", bu, a(f.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", _u, [
                  e("h4", $u, "Locations (" + a(((O = f.value.locations) == null ? void 0 : O.length) || 0) + ")", 1),
                  (B = f.value.locations) != null && B.length ? (s(), o("div", Cu, [
                    (s(!0), o(A, null, X(f.value.locations, (Q, Z) => (s(), o("div", {
                      key: Z,
                      class: "location-item"
                    }, [
                      e("span", xu, a(Q.path), 1),
                      Q.modified ? (s(), o("span", Su, "Modified: " + a(Q.modified), 1)) : c("", !0),
                      Q.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => T(Q.path)
                      }, " Open File Location ", 8, Iu)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Eu, "No locations found"))
                ]),
                e("section", Mu, [
                  e("h4", Ru, "Download Sources (" + a(((ae = f.value.sources) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (ie = f.value.sources) != null && ie.length ? (s(), o("div", Tu, [
                    (s(!0), o(A, null, X(f.value.sources, (Q, Z) => (s(), o("div", {
                      key: Z,
                      class: "source-item"
                    }, [
                      e("span", zu, a(Q.type) + ":", 1),
                      e("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Q.url), 9, Lu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: L.value === Q.url,
                        onClick: (U) => G(Q.url)
                      }, a(L.value === Q.url ? "..." : "×"), 9, Nu)
                    ]))), 128))
                  ])) : (s(), o("div", Du, " No download sources configured ")),
                  e("div", Pu, [
                    Ze(e("input", {
                      "onUpdate:modelValue": D[3] || (D[3] = (Q) => w.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [as, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || m.value,
                      onClick: H
                    }, a(m.value ? "Adding..." : "Add Source"), 9, Uu)
                  ]),
                  $.value ? (s(), o("p", Ou, a($.value), 1)) : c("", !0),
                  N.value ? (s(), o("p", Bu, a(N.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: D[4] || (D[4] = (O) => F.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Ee, { to: "body" }, [
          b.value ? (s(), o("div", {
            key: 0,
            class: te(["toast", b.value.type])
          }, a(b.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), ms = /* @__PURE__ */ K(Au, [["__scopeId", "data-v-f15cbb56"]]), Fu = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const n = d, { getEnvironmentModels: r, getStatus: p } = Te(), g = x([]), v = x([]), f = x("production"), l = x(!1), u = x(null), w = x(""), m = x(!1), L = x(null);
    function $() {
      m.value = !1, n("navigate", "model-index");
    }
    const N = P(
      () => g.value.reduce((J, F) => J + (F.size || 0), 0)
    ), b = P(() => {
      if (!w.value.trim()) return g.value;
      const J = w.value.toLowerCase();
      return g.value.filter((F) => F.filename.toLowerCase().includes(J));
    }), k = P(() => {
      if (!w.value.trim()) return v.value;
      const J = w.value.toLowerCase();
      return v.value.filter((F) => F.filename.toLowerCase().includes(J));
    }), C = P(() => {
      const J = {};
      for (const D of b.value) {
        const R = D.type || "other";
        J[R] || (J[R] = []), J[R].push(D);
      }
      const F = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(J).sort(([D], [R]) => {
        const O = F.indexOf(D), B = F.indexOf(R);
        return O >= 0 && B >= 0 ? O - B : O >= 0 ? -1 : B >= 0 ? 1 : D.localeCompare(R);
      }).map(([D, R]) => ({ type: D, models: R }));
    });
    function V(J) {
      if (!J) return "Unknown";
      const F = J / (1024 * 1024);
      return F >= 1024 ? `${(F / 1024).toFixed(1)} GB` : `${F.toFixed(0)} MB`;
    }
    function M(J) {
      L.value = J.hash || J.filename;
    }
    function T(J) {
      n("navigate", "model-index");
    }
    function H(J) {
      alert(`Download functionality not yet implemented for ${J}`);
    }
    async function G() {
      l.value = !0, u.value = null;
      try {
        const J = await r();
        g.value = J, v.value = [];
        const F = await p();
        f.value = F.environment || "production";
      } catch (J) {
        u.value = J instanceof Error ? J.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ie(G), (J, F) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: F[0] || (F[0] = (D) => m.value = !0)
          })
        ]),
        search: i(() => [
          h(kt, {
            modelValue: w.value,
            "onUpdate:modelValue": F[1] || (F[1] = (D) => w.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), E(lt, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), E(it, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(V(N.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(A, null, X(C.value, (D) => (s(), E(xe, {
              key: D.type,
              title: D.type.toUpperCase(),
              count: D.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(D.models, (R) => (s(), E(ze, {
                  key: R.hash || R.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...F[4] || (F[4] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(R.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(V(R.size)), 1)
                  ]),
                  details: i(() => [
                    h(be, {
                      label: "Used by:",
                      value: (R.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    h(be, {
                      label: "Path:",
                      value: R.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => M(R)
                    }, {
                      default: i(() => [...F[5] || (F[5] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            k.value.length ? (s(), E(xe, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(k.value, (D) => (s(), E(ze, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...F[6] || (F[6] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(D.filename), 1)
                  ]),
                  subtitle: i(() => [...F[7] || (F[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var R;
                    return [
                      h(be, {
                        label: "Required by:",
                        value: ((R = D.workflow_names) == null ? void 0 : R.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    h(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => H(D.filename)
                    }, {
                      default: i(() => [...F[8] || (F[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => T(D.filename)
                    }, {
                      default: i(() => [...F[9] || (F[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !b.value.length && !k.value.length ? (s(), E(Ye, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      h(at, {
        show: m.value,
        title: "About Environment Models",
        onClose: F[2] || (F[2] = (D) => m.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            F[10] || (F[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(f.value) + '"', 1),
            F[11] || (F[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          h(Y, {
            variant: "primary",
            onClick: $
          }, {
            default: i(() => [...F[12] || (F[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      L.value ? (s(), E(ms, {
        key: 0,
        identifier: L.value,
        onClose: F[3] || (F[3] = (D) => L.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Vu = /* @__PURE__ */ K(Fu, [["__scopeId", "data-v-cb4f12b3"]]), Wu = {
  key: 0,
  class: "indexing-progress"
}, Gu = { class: "progress-info" }, ju = { class: "progress-label" }, Hu = { class: "progress-count" }, qu = { class: "progress-bar" }, Ku = { class: "modal-content" }, Yu = { class: "modal-header" }, Ju = { class: "modal-body" }, Qu = { class: "input-group" }, Xu = { class: "current-path" }, Zu = { class: "input-group" }, em = { class: "modal-footer" }, tm = { class: "modal-content" }, sm = { class: "modal-header" }, om = { class: "modal-body" }, nm = { class: "input-group" }, am = { class: "input-group" }, lm = { class: "modal-footer" }, im = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: d }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: p,
      setModelsDirectory: g
    } = Te(), { addToQueue: v } = Tt(), f = d, l = x([]), u = x(!1), w = x(!1), m = x(null), L = x(""), $ = x(!1), N = x(null), b = x(!1), k = x(null), C = x(""), V = x(!1), M = x(!1), T = x(""), H = x(""), G = x(null), J = P(
      () => l.value.reduce((U, _) => U + (_.size || 0), 0)
    ), F = P(() => {
      if (!L.value.trim()) return l.value;
      const U = L.value.toLowerCase();
      return l.value.filter((_) => {
        const se = _, ee = _.sha256 || se.sha256_hash || "";
        return _.filename.toLowerCase().includes(U) || ee.toLowerCase().includes(U);
      });
    }), D = P(() => {
      const U = {};
      for (const se of F.value) {
        const ee = se.type || "other";
        U[ee] || (U[ee] = []), U[ee].push(se);
      }
      const _ = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([se], [ee]) => {
        const $e = _.indexOf(se), we = _.indexOf(ee);
        return $e >= 0 && we >= 0 ? $e - we : $e >= 0 ? -1 : we >= 0 ? 1 : se.localeCompare(ee);
      }).map(([se, ee]) => ({ type: se, models: ee }));
    });
    function R(U) {
      if (!U) return "Unknown";
      const _ = 1024 * 1024 * 1024, se = 1024 * 1024;
      return U >= _ ? `${(U / _).toFixed(1)} GB` : U >= se ? `${(U / se).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function O(U) {
      N.value = U.hash || U.filename;
    }
    async function B() {
      w.value = !0, m.value = null;
      try {
        const U = await r();
        await Q(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function ae() {
      if (C.value.trim()) {
        V.value = !0, m.value = null;
        try {
          const U = await g(C.value.trim());
          k.value = U.path, b.value = !1, C.value = "", await Q(), console.log(`Directory changed: ${U.models_indexed} models indexed`), f("refresh");
        } catch (U) {
          m.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          V.value = !1;
        }
      }
    }
    function ie() {
      if (!T.value.trim() || !H.value.trim()) return;
      const U = H.value.split("/").pop() || "model.safetensors";
      v([{
        workflow: "__manual__",
        filename: U,
        url: T.value.trim(),
        targetPath: H.value.trim()
      }]), T.value = "", H.value = "", M.value = !1;
    }
    async function Q() {
      u.value = !0, m.value = null;
      try {
        l.value = await n();
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function Z() {
      try {
        const U = await p();
        k.value = U.path;
      } catch {
      }
    }
    return Ie(() => {
      Q(), Z();
    }), (U, _) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: _[2] || (_[2] = (se) => $.value = !0)
          }, {
            actions: i(() => [
              h(Y, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: B
              }, {
                default: i(() => [
                  y(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              h(Y, {
                variant: "primary",
                size: "sm",
                onClick: _[0] || (_[0] = (se) => b.value = !0)
              }, {
                default: i(() => [..._[15] || (_[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              h(Y, {
                variant: "primary",
                size: "sm",
                onClick: _[1] || (_[1] = (se) => M.value = !0)
              }, {
                default: i(() => [..._[16] || (_[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  y(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          G.value ? (s(), o("div", Wu, [
            e("div", Gu, [
              e("span", ju, a(G.value.message), 1),
              e("span", Hu, a(G.value.current) + "/" + a(G.value.total), 1)
            ]),
            e("div", qu, [
              e("div", {
                class: "progress-fill",
                style: et({ width: `${G.value.current / G.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          h(kt, {
            modelValue: L.value,
            "onUpdate:modelValue": _[3] || (_[3] = (se) => L.value = se),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value || G.value ? (s(), E(lt, {
            key: 0,
            message: G.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : m.value ? (s(), E(it, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            l.value.length ? (s(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(l.value.length) + " models • " + a(R(J.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(A, null, X(D.value, (se) => (s(), E(xe, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(se.models, (ee) => (s(), E(ze, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: i(() => [..._[17] || (_[17] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(ee.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(R(ee.size)), 1)
                  ]),
                  details: i(() => [
                    h(be, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => O(ee)
                    }, {
                      default: i(() => [..._[18] || (_[18] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            F.value.length ? c("", !0) : (s(), E(Ye, {
              key: 1,
              icon: "📭",
              message: L.value ? `No models match '${L.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h(at, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: _[4] || (_[4] = (se) => $.value = !1)
      }, {
        content: i(() => [..._[19] || (_[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      N.value ? (s(), E(ms, {
        key: 0,
        identifier: N.value,
        onClose: _[5] || (_[5] = (se) => N.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), E(Ee, { to: "body" }, [
        b.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[9] || (_[9] = _e((se) => b.value = !1, ["self"]))
        }, [
          e("div", Ku, [
            e("div", Yu, [
              _[20] || (_[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[6] || (_[6] = (se) => b.value = !1)
              }, "✕")
            ]),
            e("div", Ju, [
              e("div", Qu, [
                _[21] || (_[21] = e("label", null, "Current Directory", -1)),
                e("code", Xu, a(k.value || "Not set"), 1)
              ]),
              e("div", Zu, [
                _[22] || (_[22] = e("label", null, "New Directory Path", -1)),
                h(Ke, {
                  modelValue: C.value,
                  "onUpdate:modelValue": _[7] || (_[7] = (se) => C.value = se),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              _[23] || (_[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", em, [
              h(re, {
                variant: "secondary",
                onClick: _[8] || (_[8] = (se) => b.value = !1)
              }, {
                default: i(() => [..._[24] || (_[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              h(re, {
                variant: "primary",
                disabled: !C.value.trim() || V.value,
                loading: V.value,
                onClick: ae
              }, {
                default: i(() => [
                  y(a(V.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), E(Ee, { to: "body" }, [
        M.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[14] || (_[14] = _e((se) => M.value = !1, ["self"]))
        }, [
          e("div", tm, [
            e("div", sm, [
              _[25] || (_[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[10] || (_[10] = (se) => M.value = !1)
              }, "✕")
            ]),
            e("div", om, [
              e("div", nm, [
                _[26] || (_[26] = e("label", null, "Download URL", -1)),
                h(Ke, {
                  modelValue: T.value,
                  "onUpdate:modelValue": _[11] || (_[11] = (se) => T.value = se),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", am, [
                _[27] || (_[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                h(Ke, {
                  modelValue: H.value,
                  "onUpdate:modelValue": _[12] || (_[12] = (se) => H.value = se),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              _[28] || (_[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", lm, [
              h(re, {
                variant: "secondary",
                onClick: _[13] || (_[13] = (se) => M.value = !1)
              }, {
                default: i(() => [..._[29] || (_[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              h(re, {
                variant: "primary",
                disabled: !T.value.trim() || !H.value.trim(),
                onClick: ie
              }, {
                default: i(() => [..._[30] || (_[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), rm = /* @__PURE__ */ K(im, [["__scopeId", "data-v-73b78d84"]]), dm = { class: "node-details" }, cm = { class: "status-row" }, um = {
  key: 0,
  class: "detail-row"
}, mm = { class: "value" }, vm = { class: "detail-row" }, fm = { class: "value" }, gm = {
  key: 1,
  class: "detail-row"
}, pm = { class: "value mono" }, hm = {
  key: 2,
  class: "detail-row"
}, ym = ["href"], wm = {
  key: 3,
  class: "detail-row"
}, km = { class: "value mono small" }, bm = { class: "detail-row" }, _m = {
  key: 0,
  class: "value"
}, $m = {
  key: 1,
  class: "workflow-list"
}, Cm = /* @__PURE__ */ q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const n = t, r = d, p = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), v = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (f, l) => (s(), E(tt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (u) => r("close"))
    }, {
      body: i(() => [
        e("div", dm, [
          e("div", cm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", p.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", um, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", mm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : c("", !0),
          e("div", vm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", fm, a(v.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", gm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", pm, a(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", hm, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              y(a(t.node.repository) + " ", 1),
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
            ], 8, ym)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", wm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", km, a(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", bm, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", _m, " Not used in any workflows ")) : (s(), o("div", $m, [
              (s(!0), o(A, null, X(t.node.used_in_workflows, (u) => (s(), o("span", {
                key: u,
                class: "workflow-tag"
              }, a(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        h(re, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (u) => r("close"))
        }, {
          default: i(() => [...l[11] || (l[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), xm = /* @__PURE__ */ K(Cm, [["__scopeId", "data-v-b342f626"]]), Sm = { key: 0 }, Im = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Em = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Mm = /* @__PURE__ */ q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: d }) {
    const n = d, { getNodes: r, trackNodeAsDev: p, installNode: g, uninstallNode: v } = Te(), f = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = x(!1), u = x(null), w = x(""), m = x(!1), L = x(null), $ = P(() => {
      if (!w.value.trim()) return f.value.nodes;
      const D = w.value.toLowerCase();
      return f.value.nodes.filter(
        (R) => {
          var O, B;
          return R.name.toLowerCase().includes(D) || ((O = R.description) == null ? void 0 : O.toLowerCase().includes(D)) || ((B = R.repository) == null ? void 0 : B.toLowerCase().includes(D));
        }
      );
    }), N = P(
      () => $.value.filter((D) => D.installed && D.tracked)
    ), b = P(
      () => $.value.filter((D) => !D.installed && D.tracked)
    ), k = P(
      () => $.value.filter((D) => D.installed && !D.tracked)
    );
    function C(D) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[D] || D;
    }
    function V(D) {
      return !D.used_in_workflows || D.used_in_workflows.length === 0 ? "Not used in any workflows" : D.used_in_workflows.length === 1 ? D.used_in_workflows[0] : `${D.used_in_workflows.length} workflows`;
    }
    function M(D) {
      L.value = D;
    }
    function T() {
      n("open-node-manager");
    }
    async function H(D) {
      if (confirm(`Track "${D}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const R = await p(D);
          R.status === "success" ? (alert(`Node "${D}" is now tracked as development!`), await F()) : alert(`Failed to track node: ${R.message || "Unknown error"}`);
        } catch (R) {
          alert(`Error tracking node: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function G(D) {
      if (confirm(`Remove untracked node "${D}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const R = await v(D);
          R.status === "success" ? (alert(`Node "${D}" removed!`), await F()) : alert(`Failed to remove node: ${R.message || "Unknown error"}`);
        } catch (R) {
          alert(`Error removing node: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function J(D) {
      if (confirm(`Install node "${D}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const R = await g(D);
          R.status === "success" ? (alert(`Node "${D}" installed successfully!`), await F()) : alert(`Failed to install node: ${R.message || "Unknown error"}`);
        } catch (R) {
          alert(`Error installing node: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function F() {
      l.value = !0, u.value = null;
      try {
        f.value = await r();
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ie(F), (D, R) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (O) => m.value = !0)
          }, {
            actions: i(() => [
              h(Y, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: i(() => [...R[5] || (R[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          h(kt, {
            modelValue: w.value,
            "onUpdate:modelValue": R[1] || (R[1] = (O) => w.value = O),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), E(lt, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (s(), E(it, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            f.value.total_count ? (s(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(a(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (s(), o(A, { key: 0 }, [
                  y(" • " + a(f.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                f.value.untracked_count ? (s(), o(A, { key: 1 }, [
                  y(" • " + a(f.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (s(), E(xe, {
              key: 1,
              title: "UNTRACKED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(k.value, (O) => (s(), E(ze, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: i(() => [...R[6] || (R[6] = [
                    y("?", -1)
                  ])]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [...R[7] || (R[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    h(be, {
                      label: "Used by:",
                      value: V(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => M(O)
                    }, {
                      default: i(() => [...R[8] || (R[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => H(O.name)
                    }, {
                      default: i(() => [...R[9] || (R[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Y, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (B) => G(O.name)
                    }, {
                      default: i(() => [...R[10] || (R[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            N.value.length ? (s(), E(xe, {
              key: 2,
              title: "INSTALLED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(N.value, (O) => (s(), E(ze, {
                  key: O.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    y(a(O.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [
                    O.version ? (s(), o("span", Sm, a(O.source === "development" ? "" : "v") + a(O.version), 1)) : (s(), o("span", Im, "version unknown")),
                    e("span", Em, " • " + a(C(O.source)), 1)
                  ]),
                  details: i(() => [
                    h(be, {
                      label: "Used by:",
                      value: V(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => M(O)
                    }, {
                      default: i(() => [...R[11] || (R[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: T
                    }, {
                      default: i(() => [...R[12] || (R[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            b.value.length ? (s(), E(xe, {
              key: 3,
              title: "MISSING",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(b.value, (O) => (s(), E(ze, {
                  key: O.name,
                  status: "missing"
                }, {
                  icon: i(() => [...R[13] || (R[13] = [
                    y("!", -1)
                  ])]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [...R[14] || (R[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    h(be, {
                      label: "Required by:",
                      value: V(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => M(O)
                    }, {
                      default: i(() => [...R[15] || (R[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => J(O.name)
                    }, {
                      default: i(() => [...R[16] || (R[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !N.value.length && !b.value.length && !k.value.length ? (s(), E(Ye, {
              key: 4,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      h(at, {
        show: m.value,
        title: "About Custom Nodes",
        onClose: R[3] || (R[3] = (O) => m.value = !1)
      }, {
        content: i(() => [...R[17] || (R[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            y(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            y(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            y(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          h(Y, {
            variant: "primary",
            onClick: R[2] || (R[2] = (O) => m.value = !1)
          }, {
            default: i(() => [...R[18] || (R[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      L.value ? (s(), E(xm, {
        key: 0,
        node: L.value,
        onClose: R[4] || (R[4] = (O) => L.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), Rm = /* @__PURE__ */ K(Mm, [["__scopeId", "data-v-4ac1465a"]]);
function vs(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Tm = { class: "remote-url-display" }, zm = ["title"], Lm = ["title"], Nm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Dm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Pm = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, n = x(!1), r = P(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const g = d.url.slice(0, Math.floor(d.maxLength * 0.6)), v = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${g}...${v}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(d.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, v) => (s(), o("div", Tm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, zm),
      e("button", {
        class: te(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Dm, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Nm, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Lm)
    ]));
  }
}), Um = /* @__PURE__ */ K(Pm, [["__scopeId", "data-v-7768a58d"]]), Om = { class: "remote-title" }, Bm = {
  key: 0,
  class: "default-badge"
}, Am = {
  key: 1,
  class: "sync-badge"
}, Fm = {
  key: 0,
  class: "ahead"
}, Vm = {
  key: 1,
  class: "behind"
}, Wm = {
  key: 1,
  class: "synced"
}, Gm = ["href"], jm = {
  key: 1,
  class: "remote-url-text"
}, Hm = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const d = t, n = P(() => d.fetchingRemote === d.remote.name), r = P(() => d.remote.is_default), p = P(() => d.syncStatus && d.syncStatus.behind > 0), g = P(() => d.syncStatus && d.syncStatus.ahead > 0), v = P(() => d.remote.push_url !== d.remote.fetch_url), f = P(() => {
      const u = d.remote.fetch_url, w = u.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return w ? `https://${w[1]}/${w[2]}` : u.startsWith("https://") || u.startsWith("http://") ? u.replace(/\.git$/, "") : null;
    }), l = P(() => d.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (u, w) => (s(), E(ze, {
      status: r.value ? "synced" : void 0
    }, Rt({
      icon: i(() => [
        y(a(r.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Om, [
          e("span", null, a(t.remote.name), 1),
          r.value ? (s(), o("span", Bm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", Am, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(A, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Fm, "↑" + a(t.syncStatus.ahead), 1)) : c("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Vm, "↓" + a(t.syncStatus.behind), 1)) : c("", !0)
            ], 64)) : (s(), o("span", Wm, "✓ synced"))
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        f.value ? (s(), o("a", {
          key: 0,
          href: f.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: w[0] || (w[0] = _e(() => {
          }, ["stop"]))
        }, a(l.value), 9, Gm)) : (s(), o("span", jm, a(l.value), 1))
      ]),
      actions: i(() => [
        h(Y, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: w[1] || (w[1] = (m) => u.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...w[6] || (w[6] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        h(Y, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[2] || (w[2] = (m) => u.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        h(Y, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[3] || (w[3] = (m) => u.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        h(Y, {
          variant: "secondary",
          size: "xs",
          onClick: w[4] || (w[4] = (m) => u.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...w[7] || (w[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        r.value ? c("", !0) : (s(), E(Y, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: w[5] || (w[5] = (m) => u.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...w[8] || (w[8] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      v.value ? {
        name: "details",
        fn: i(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(be, {
            key: 0,
            label: "Push URL:"
          }, {
            default: i(() => [
              h(Um, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), qm = /* @__PURE__ */ K(Hm, [["__scopeId", "data-v-8310f3a8"]]), Km = ["for"], Ym = {
  key: 0,
  class: "base-form-field-required"
}, Jm = { class: "base-form-field-input" }, Qm = {
  key: 1,
  class: "base-form-field-error"
}, Xm = {
  key: 2,
  class: "base-form-field-hint"
}, Zm = /* @__PURE__ */ q({
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
    const d = t, n = P(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, p) => (s(), o("div", {
      class: te(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Ym, "*")) : c("", !0)
      ], 8, Km)) : c("", !0),
      e("div", Jm, [
        fe(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Qm, a(t.error), 1)) : t.hint ? (s(), o("span", Xm, a(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ K(Zm, [["__scopeId", "data-v-9a1cf296"]]), ev = { class: "remote-form" }, tv = { class: "form-header" }, sv = { class: "form-body" }, ov = {
  key: 0,
  class: "form-error"
}, nv = { class: "form-actions" }, av = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const n = t, r = d, p = x({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = x(!1), v = x(null);
    wt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const f = P(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!f.value || g.value)) {
        v.value = null, g.value = !0;
        try {
          r("submit", p.value);
        } catch (u) {
          v.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (u, w) => (s(), o("div", ev, [
      e("div", tv, [
        h(Fe, null, {
          default: i(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", sv, [
        h(Vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            h(Ke, {
              modelValue: p.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (m) => p.value.name = m),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        h(Vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            h(Ke, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (m) => p.value.fetchUrl = m),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h(Vt, { label: "Push URL (optional)" }, {
          default: i(() => [
            h(Ke, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (m) => p.value.pushUrl = m),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (s(), o("div", ov, a(v.value), 1)) : c("", !0)
      ]),
      e("div", nv, [
        h(Y, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: g.value,
          onClick: l
        }, {
          default: i(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        h(Y, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (m) => u.$emit("cancel"))
        }, {
          default: i(() => [...w[4] || (w[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), lv = /* @__PURE__ */ K(av, [["__scopeId", "data-v-56021b18"]]), iv = { class: "conflict-summary-box" }, rv = { class: "summary-header" }, dv = { class: "summary-text" }, cv = { key: 0 }, uv = {
  key: 1,
  class: "all-resolved"
}, mv = { class: "summary-progress" }, vv = { class: "progress-bar" }, fv = { class: "progress-text" }, gv = /* @__PURE__ */ q({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const d = t, n = P(
      () => d.conflictCount > 0 ? d.resolvedCount / d.conflictCount * 100 : 0
    );
    return (r, p) => (s(), o("div", iv, [
      e("div", rv, [
        p[0] || (p[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", dv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", cv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", uv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", mv, [
        e("div", vv, [
          e("div", {
            class: "progress-fill",
            style: et({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", fv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), pv = /* @__PURE__ */ K(gv, [["__scopeId", "data-v-4e9e6cc9"]]), hv = { class: "modal-header" }, yv = { class: "modal-title" }, wv = { class: "modal-body" }, kv = {
  key: 0,
  class: "error-box"
}, bv = {
  key: 0,
  class: "error-hint"
}, _v = {
  key: 1,
  class: "loading-state"
}, $v = { class: "commit-summary" }, Cv = {
  key: 0,
  class: "changes-section"
}, xv = {
  key: 0,
  class: "change-group",
  open: ""
}, Sv = { class: "change-count" }, Iv = { class: "change-list" }, Ev = {
  key: 0,
  class: "conflict-badge"
}, Mv = {
  key: 1,
  class: "change-group"
}, Rv = { class: "change-count" }, Tv = { class: "change-list" }, zv = {
  key: 2,
  class: "change-group"
}, Lv = { class: "change-count" }, Nv = { class: "change-list" }, Dv = {
  key: 2,
  class: "strategy-section"
}, Pv = { class: "radio-group" }, Uv = { class: "radio-option" }, Ov = { class: "radio-option" }, Bv = { class: "radio-option" }, Av = {
  key: 3,
  class: "up-to-date"
}, Fv = { class: "modal-actions" }, es = "comfygit.pullModelStrategy", Vv = /* @__PURE__ */ q({
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
  setup(t, { emit: d }) {
    const n = t, r = d, p = x(localStorage.getItem(es) || "skip");
    wt(p, (k) => {
      localStorage.setItem(es, k);
    });
    const g = P(() => {
      var k;
      return ((k = n.error) == null ? void 0 : k.toLowerCase().includes("unrelated histories")) ?? !1;
    }), v = P(() => {
      if (!n.preview) return 0;
      const k = n.preview.changes.workflows;
      return k.added.length + k.modified.length + k.deleted.length;
    }), f = P(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = P(() => {
      var k;
      return v.value > 0 || f.value > 0 || (((k = n.preview) == null ? void 0 : k.changes.models.count) || 0) > 0;
    }), u = P(() => n.preview && vs(n.preview) ? n.preview : null), w = P(() => {
      var k;
      return ((k = u.value) == null ? void 0 : k.workflow_conflicts.length) ?? 0;
    }), m = P(() => {
      var k;
      return ((k = n.conflictResolutions) == null ? void 0 : k.size) ?? 0;
    }), L = P(
      () => w.value > 0 && m.value === w.value
    ), $ = P(() => !(!n.preview || n.preview.has_uncommitted_changes || u.value && !L.value));
    function N(k) {
      if (!u.value) return !1;
      const C = k.replace(/\.json$/, "");
      return u.value.workflow_conflicts.some((V) => V.name === C);
    }
    function b(k) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      r("pull", { modelStrategy: p.value, force: k, resolutions: C });
    }
    return (k, C) => {
      var V, M;
      return s(), E(Ee, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (T) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = _e(() => {
            }, ["stop"]))
          }, [
            e("div", hv, [
              e("h3", yv, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (T) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", wv, [
              t.error ? (s(), o("div", kv, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", bv, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : c("", !0)
                ])
              ])) : t.loading ? (s(), o("div", _v, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (V = t.preview) != null && V.has_uncommitted_changes ? (s(), o(A, { key: 2 }, [
                C[15] || (C[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                C[16] || (C[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", $v, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (s(), o("div", Cv, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  v.value > 0 ? (s(), o("details", xv, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Sv, a(v.value) + " changes", 1)
                    ]),
                    e("div", Iv, [
                      (s(!0), o(A, null, X(t.preview.changes.workflows.added, (T) => (s(), o("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + a(T), 1))), 128)),
                      (s(!0), o(A, null, X(t.preview.changes.workflows.modified, (T) => (s(), o("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(T) + " ", 1),
                        N(T) ? (s(), o("span", Ev, "CONFLICT")) : c("", !0)
                      ]))), 128)),
                      (s(!0), o(A, null, X(t.preview.changes.workflows.deleted, (T) => (s(), o("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + a(T), 1))), 128))
                    ])
                  ])) : c("", !0),
                  f.value > 0 ? (s(), o("details", Mv, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Rv, a(f.value) + " to install", 1)
                    ]),
                    e("div", Tv, [
                      (s(!0), o(A, null, X(t.preview.changes.nodes.to_install, (T) => (s(), o("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + a(T), 1))), 128))
                    ])
                  ])) : c("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", zv, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Lv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Nv, [
                      (s(!0), o(A, null, X(t.preview.changes.models.referenced, (T) => (s(), o("div", {
                        key: T,
                        class: "change-item"
                      }, a(T), 1))), 128))
                    ])
                  ])) : c("", !0)
                ])) : c("", !0),
                u.value ? (s(), E(pv, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": m.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : c("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Dv, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Pv, [
                    e("label", Uv, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (T) => p.value = T),
                        value: "all"
                      }, null, 512), [
                        [Bt, p.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Ov, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (T) => p.value = T),
                        value: "required"
                      }, null, 512), [
                        [Bt, p.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Bv, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (T) => p.value = T),
                        value: "skip"
                      }, null, 512), [
                        [Bt, p.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : c("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Av, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : c("", !0)
              ], 64)) : c("", !0)
            ]),
            e("div", Fv, [
              h(Y, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (T) => k.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(A, { key: 0 }, [
                h(Y, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (T) => b(!1))
                }, {
                  default: i(() => [...C[30] || (C[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                h(Y, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (T) => b(!0))
                }, {
                  default: i(() => [...C[31] || (C[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = t.preview) != null && M.has_uncommitted_changes ? (s(), E(Y, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (T) => b(!0))
              }, {
                default: i(() => [...C[32] || (C[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(A, { key: 2 }, [
                u.value && !L.value ? (s(), E(Y, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (T) => r("openConflictResolution"))
                }, {
                  default: i(() => [
                    y(" Resolve Conflicts (" + a(m.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(Y, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !$.value,
                  onClick: C[9] || (C[9] = (T) => b(!1))
                }, {
                  default: i(() => [...C[33] || (C[33] = [
                    y(" Pull Changes ", -1)
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
}), Wv = /* @__PURE__ */ K(Vv, [["__scopeId", "data-v-300c7b2f"]]), Gv = { class: "modal-header" }, jv = { class: "modal-title" }, Hv = { class: "modal-body" }, qv = {
  key: 0,
  class: "loading-state"
}, Kv = {
  key: 1,
  class: "warning-box"
}, Yv = {
  key: 0,
  class: "commits-section"
}, Jv = { class: "commit-list" }, Qv = { class: "commit-hash" }, Xv = { class: "commit-message" }, Zv = { class: "commit-date" }, ef = { class: "force-option" }, tf = { class: "checkbox-option" }, sf = { class: "commit-summary" }, of = {
  key: 0,
  class: "commits-section"
}, nf = { class: "commit-list" }, af = { class: "commit-hash" }, lf = { class: "commit-message" }, rf = { class: "commit-date" }, df = {
  key: 1,
  class: "up-to-date"
}, cf = { class: "modal-actions" }, uf = /* @__PURE__ */ q({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: d }) {
    const n = d, r = x(!1);
    function p(g) {
      n("push", { force: g });
    }
    return (g, v) => {
      var f, l, u;
      return s(), E(Ee, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: v[7] || (v[7] = (w) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: v[6] || (v[6] = _e(() => {
            }, ["stop"]))
          }, [
            e("div", Gv, [
              e("h3", jv, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: v[0] || (v[0] = (w) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Hv, [
              t.loading ? (s(), o("div", qv, [...v[8] || (v[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (f = t.preview) != null && f.has_uncommitted_changes ? (s(), o("div", Kv, [...v[9] || (v[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (s(), o(A, { key: 2 }, [
                v[13] || (v[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Yv, [
                  v[10] || (v[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Jv, [
                    (s(!0), o(A, null, X(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Qv, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Xv, a(w.message), 1),
                      e("span", Zv, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                e("div", ef, [
                  e("label", tf, [
                    Ze(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": v[1] || (v[1] = (w) => r.value = w)
                    }, null, 512), [
                      [ls, r.value]
                    ]),
                    v[11] || (v[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  v[12] || (v[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", sf, [
                  v[14] || (v[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", of, [
                  v[15] || (v[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", nf, [
                    (s(!0), o(A, null, X(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", af, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", lf, a(w.message), 1),
                      e("span", rf, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", df, [
                  v[16] || (v[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : c("", !0)
            ]),
            e("div", cf, [
              h(Y, {
                variant: "secondary",
                onClick: v[2] || (v[2] = (w) => g.$emit("close"))
              }, {
                default: i(() => [...v[17] || (v[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (u = t.preview) != null && u.remote_has_new_commits ? (s(), o(A, { key: 0 }, [
                h(Y, {
                  variant: "secondary",
                  onClick: v[3] || (v[3] = (w) => g.$emit("pull-first"))
                }, {
                  default: i(() => [...v[18] || (v[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                h(Y, {
                  variant: "destructive",
                  disabled: !r.value,
                  loading: t.pushing,
                  onClick: v[4] || (v[4] = (w) => p(!0))
                }, {
                  default: i(() => [...v[19] || (v[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(Y, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: v[5] || (v[5] = (w) => p(!1))
              }, {
                default: i(() => [...v[20] || (v[20] = [
                  y(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), mf = /* @__PURE__ */ K(uf, [["__scopeId", "data-v-bc6ded53"]]), vf = { class: "resolution-choice-group" }, ff = ["disabled"], gf = ["disabled"], pf = /* @__PURE__ */ q({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, n) => (s(), o("div", vf, [
      e("button", {
        class: te(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (r) => d.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, ff),
      e("button", {
        class: te(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (r) => d.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, gf)
    ]));
  }
}), hf = /* @__PURE__ */ K(pf, [["__scopeId", "data-v-985715ed"]]), yf = { class: "conflict-header" }, wf = { class: "conflict-info" }, kf = { class: "workflow-name" }, bf = { class: "conflict-description" }, _f = {
  key: 0,
  class: "resolved-badge"
}, $f = { class: "resolved-text" }, Cf = { class: "conflict-hashes" }, xf = { class: "hash-item" }, Sf = { class: "hash-item" }, If = { class: "conflict-actions" }, Ef = /* @__PURE__ */ q({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: d }) {
    const n = t, r = d, p = x(n.resolution);
    wt(() => n.resolution, (l) => {
      p.value = l;
    }), wt(p, (l) => {
      l && r("resolve", l);
    });
    const g = P(() => p.value !== null), v = P(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), f = P(() => {
      switch (p.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (l, u) => {
      var w, m;
      return s(), o("div", {
        class: te(["conflict-item", { resolved: g.value }])
      }, [
        e("div", yf, [
          u[2] || (u[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", wf, [
            e("code", kf, a(t.conflict.name) + ".json", 1),
            e("div", bf, a(v.value), 1)
          ]),
          g.value ? (s(), o("div", _f, [
            u[1] || (u[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", $f, a(f.value), 1)
          ])) : c("", !0)
        ]),
        e("div", Cf, [
          e("span", xf, [
            u[3] || (u[3] = y("Your: ", -1)),
            e("code", null, a(((w = t.conflict.base_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Sf, [
            u[4] || (u[4] = y("Theirs: ", -1)),
            e("code", null, a(((m = t.conflict.target_hash) == null ? void 0 : m.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", If, [
          h(hf, {
            modelValue: p.value,
            "onUpdate:modelValue": u[0] || (u[0] = (L) => p.value = L),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Mf = /* @__PURE__ */ K(Ef, [["__scopeId", "data-v-506d3bbf"]]), Rf = { class: "resolution-content" }, Tf = {
  key: 0,
  class: "error-box"
}, zf = { class: "resolution-header" }, Lf = { class: "header-stats" }, Nf = { class: "stat" }, Df = { class: "stat-value" }, Pf = { class: "stat resolved" }, Uf = { class: "stat-value" }, Of = {
  key: 0,
  class: "stat pending"
}, Bf = { class: "stat-value" }, Af = { class: "conflicts-list" }, Ff = {
  key: 1,
  class: "all-resolved-message"
}, Vf = /* @__PURE__ */ q({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: d }) {
    const n = t, r = d, p = P(() => n.resolutions.size), g = P(() => n.workflowConflicts.length - p.value), v = P(() => p.value === n.workflowConflicts.length), f = P(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function l(L) {
      const $ = n.resolutions.get(L);
      return ($ == null ? void 0 : $.resolution) ?? null;
    }
    function u(L, $) {
      r("resolve", L, $);
    }
    function w() {
      r("close");
    }
    function m() {
      r("apply");
    }
    return (L, $) => (s(), E(tt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: i(() => [
        e("div", Rf, [
          t.error ? (s(), o("div", Tf, [
            $[1] || ($[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              $[0] || ($[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : c("", !0),
          e("div", zf, [
            e("div", Lf, [
              e("div", Nf, [
                e("span", Df, a(t.workflowConflicts.length), 1),
                $[2] || ($[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Pf, [
                e("span", Uf, a(p.value), 1),
                $[3] || ($[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Of, [
                e("span", Bf, a(g.value), 1),
                $[4] || ($[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : c("", !0)
            ]),
            $[5] || ($[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Af, [
            (s(!0), o(A, null, X(t.workflowConflicts, (N) => (s(), E(Mf, {
              key: N.name,
              conflict: N,
              resolution: l(N.name),
              onResolve: (b) => u(N.name, b)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          v.value ? (s(), o("div", Ff, [
            $[6] || ($[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(f.value) + '" to continue.', 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        h(re, {
          variant: "secondary",
          onClick: w
        }, {
          default: i(() => [...$[7] || ($[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $[8] || ($[8] = e("div", { class: "footer-spacer" }, null, -1)),
        h(re, {
          variant: "primary",
          disabled: !v.value || t.validating,
          loading: t.validating,
          onClick: m
        }, {
          default: i(() => [
            y(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Wf = /* @__PURE__ */ K(Vf, [["__scopeId", "data-v-c58d150d"]]), Gf = { class: "node-conflict-item" }, jf = { class: "node-header" }, Hf = { class: "node-name" }, qf = { class: "node-id" }, Kf = { class: "version-comparison" }, Yf = { class: "version yours" }, Jf = { class: "version theirs" }, Qf = { class: "chosen-version" }, Xf = { class: "chosen" }, Zf = { class: "chosen-reason" }, eg = { class: "affected-workflows" }, tg = { class: "wf-source" }, sg = { class: "wf-version" }, og = /* @__PURE__ */ q({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (d, n) => (s(), o("div", Gf, [
      e("div", jf, [
        e("code", Hf, a(t.conflict.node_name), 1),
        e("span", qf, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Kf, [
        e("div", Yf, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Jf, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Qf, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Xf, a(t.conflict.chosen_version), 1),
        e("span", Zf, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", eg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(A, null, X(t.conflict.affected_workflows, (r) => (s(), o("li", {
            key: r.name
          }, [
            e("code", null, a(r.name), 1),
            e("span", tg, "(" + a(r.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", sg, "needs v" + a(r.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), ng = /* @__PURE__ */ K(og, [["__scopeId", "data-v-8b626725"]]), ag = { class: "validation-content" }, lg = {
  key: 0,
  class: "compatible-message"
}, ig = { class: "conflicts-list" }, rg = {
  key: 2,
  class: "warnings-section"
}, dg = /* @__PURE__ */ q({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: d }) {
    const n = t, r = d, p = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, v) => (s(), E(tt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: v[3] || (v[3] = (f) => r("cancel"))
    }, {
      body: i(() => [
        e("div", ag, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", lg, [
            v[5] || (v[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              v[4] || (v[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(A, { key: 1 }, [
            v[6] || (v[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", ig, [
              (s(!0), o(A, null, X(t.validation.node_conflicts, (f) => (s(), E(ng, {
                key: f.node_id,
                conflict: f
              }, null, 8, ["conflict"]))), 128))
            ]),
            v[7] || (v[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : c("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", rg, [
            v[8] || (v[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(A, null, X(t.validation.warnings, (f, l) => (s(), o("li", { key: l }, a(f), 1))), 128))
            ])
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        h(re, {
          variant: "secondary",
          onClick: v[0] || (v[0] = (f) => r("cancel"))
        }, {
          default: i(() => [...v[9] || (v[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v[11] || (v[11] = e("div", { class: "footer-spacer" }, null, -1)),
        h(re, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (f) => r("goBack"))
        }, {
          default: i(() => [...v[10] || (v[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        h(re, {
          variant: "primary",
          loading: t.executing,
          onClick: v[2] || (v[2] = (f) => r("proceed"))
        }, {
          default: i(() => [
            y(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), cg = /* @__PURE__ */ K(dg, [["__scopeId", "data-v-fefd26ed"]]), ug = { key: 0 }, mg = /* @__PURE__ */ q({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: d }) {
    const n = d, {
      getRemotes: r,
      addRemote: p,
      removeRemote: g,
      updateRemoteUrl: v,
      fetchRemote: f,
      getRemoteSyncStatus: l,
      getPullPreview: u,
      pullFromRemote: w,
      getPushPreview: m,
      pushToRemote: L,
      validateMerge: $
    } = Te(), N = x([]), b = x(null), k = x({}), C = x(!1), V = x(null), M = x(""), T = x(!1), H = x(null), G = x(!1), J = x("add"), F = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = P(() => {
      if (!M.value.trim()) return N.value;
      const ne = M.value.toLowerCase();
      return N.value.filter(
        (oe) => oe.name.toLowerCase().includes(ne) || oe.fetch_url.toLowerCase().includes(ne) || oe.push_url.toLowerCase().includes(ne)
      );
    });
    async function R() {
      C.value = !0, V.value = null;
      try {
        const ne = await r();
        N.value = ne.remotes, b.value = ne.current_branch_tracking || null, await Promise.all(
          ne.remotes.map(async (oe) => {
            const ye = await l(oe.name);
            ye && (k.value[oe.name] = ye);
          })
        );
      } catch (ne) {
        V.value = ne instanceof Error ? ne.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function O() {
      J.value = "add", F.value = { name: "", fetchUrl: "", pushUrl: "" }, G.value = !0;
    }
    function B(ne) {
      const oe = N.value.find((ye) => ye.name === ne);
      oe && (J.value = "edit", F.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, G.value = !0);
    }
    async function ae(ne) {
      try {
        J.value === "add" ? await p(ne.name, ne.fetchUrl) : await v(ne.name, ne.fetchUrl, ne.pushUrl || void 0), G.value = !1, await R();
      } catch (oe) {
        V.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function ie() {
      G.value = !1, F.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(ne) {
      H.value = ne;
      try {
        await f(ne);
        const oe = await l(ne);
        oe && (k.value[ne] = oe), n("toast", `✓ Fetched from ${ne}`, "success");
      } catch (oe) {
        n("toast", oe instanceof Error ? oe.message : "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function Z(ne) {
      if (confirm(`Remove remote "${ne}"?`))
        try {
          await g(ne), await R();
        } catch (oe) {
          V.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const _ = x("idle"), se = P(() => _.value === "pull_preview"), ee = P(
      () => _.value === "resolving" || _.value === "validating"
    ), $e = P(
      () => _.value === "validation_review" || _.value === "executing"
    ), we = x(!1), Me = x(null), Oe = x(!1), ce = x(null), Be = x(!1), he = x(null), Re = x(null), Ve = x(/* @__PURE__ */ new Map()), Je = x(null), ve = x(null), We = P(() => he.value && vs(he.value) ? he.value : null);
    async function Ge(ne) {
      ce.value = ne, _.value = "pull_preview", Be.value = !0, he.value = null, Re.value = null;
      try {
        he.value = await u(ne);
      } catch (oe) {
        Re.value = oe instanceof Error ? oe.message : "Failed to load pull preview";
      } finally {
        Be.value = !1;
      }
    }
    function je() {
      _.value = "idle", he.value = null, Re.value = null, ce.value = null;
    }
    async function dt(ne) {
      if (!ce.value) return;
      _.value = "executing", Re.value = null;
      const oe = ce.value;
      try {
        const ye = await w(oe, ne);
        if (ye.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${ye.error || "Unknown error"}`, _.value = "pull_preview";
          return;
        }
        I(), _.value = "idle", n("toast", `✓ Pulled from ${oe}`, "success"), await R();
      } catch (ye) {
        Re.value = ye instanceof Error ? ye.message : "Pull failed", _.value = "pull_preview";
      }
    }
    function me() {
      We.value && (_.value = "resolving", ve.value = null);
    }
    function Le(ne, oe) {
      Ve.value.set(ne, { name: ne, resolution: oe });
    }
    function ct() {
      _.value = "pull_preview";
    }
    async function st() {
      _.value = "validating", ve.value = null;
      try {
        const ne = Array.from(Ve.value.values());
        Je.value = await $(ce.value, ne), _.value = "validation_review";
      } catch (ne) {
        ve.value = ne instanceof Error ? ne.message : "Validation failed", _.value = "resolving";
      }
    }
    async function Se() {
      _.value = "executing";
      const ne = ce.value;
      try {
        const oe = Array.from(Ve.value.values()), ye = await w(ne, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: oe
        });
        if (ye.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${ye.error || "Unknown error"}`, _.value = "pull_preview";
          return;
        }
        I(), _.value = "idle", n("toast", `✓ Pulled from ${ne}`, "success"), await R();
      } catch (oe) {
        Re.value = oe instanceof Error ? oe.message : "Pull failed", _.value = "validation_review";
      }
    }
    function ut() {
      _.value = "resolving";
    }
    function S() {
      I(), _.value = "idle";
    }
    function I() {
      Ve.value.clear(), Je.value = null, ve.value = null, Re.value = null, he.value = null, ce.value = null;
    }
    async function W(ne) {
      ce.value = ne, we.value = !0, Be.value = !0, Me.value = null;
      try {
        Me.value = await m(ne);
      } catch (oe) {
        V.value = oe instanceof Error ? oe.message : "Failed to load push preview";
      } finally {
        Be.value = !1;
      }
    }
    function de() {
      we.value = !1, Me.value = null, ce.value = null;
    }
    async function Ce(ne) {
      if (!ce.value) return;
      Oe.value = !0;
      const oe = ce.value;
      try {
        await L(oe, ne), de(), n("toast", `✓ Pushed to ${oe}`, "success"), await R();
      } catch (ye) {
        n("toast", ye instanceof Error ? ye.message : "Push failed", "error");
      } finally {
        Oe.value = !1;
      }
    }
    function He() {
      const ne = ce.value;
      de(), ne && Ge(ne);
    }
    return Ie(R), (ne, oe) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (ye) => T.value = !0)
          }, {
            actions: i(() => [
              G.value ? c("", !0) : (s(), E(Y, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...oe[3] || (oe[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          G.value ? c("", !0) : (s(), E(kt, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (ye) => M.value = ye),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          C.value ? (s(), E(lt, {
            key: 0,
            message: "Loading remotes..."
          })) : V.value ? (s(), E(it, {
            key: 1,
            message: V.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            G.value ? (s(), E(lv, {
              key: 0,
              mode: J.value,
              "remote-name": F.value.name,
              "fetch-url": F.value.fetchUrl,
              "push-url": F.value.pushUrl,
              onSubmit: ae,
              onCancel: ie
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            N.value.length && !G.value ? (s(), E(bt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(N.value.length) + " remote" + a(N.value.length !== 1 ? "s" : "") + " ", 1),
                b.value ? (s(), o("span", ug, " • Tracking: " + a(b.value.remote) + "/" + a(b.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            D.value.length && !G.value ? (s(), E(xe, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, X(D.value, (ye) => (s(), E(qm, {
                  key: ye.name,
                  remote: ye,
                  "sync-status": k.value[ye.name],
                  "fetching-remote": H.value,
                  onFetch: Q,
                  onEdit: B,
                  onRemove: Z,
                  onPull: Ge,
                  onPush: W
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !D.value.length && !G.value ? (s(), E(Ye, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                h(Y, {
                  variant: "primary",
                  onClick: O
                }, {
                  default: i(() => [...oe[4] || (oe[4] = [
                    y(" Add Your First Remote ", -1)
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
      h(at, {
        show: T.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (ye) => T.value = !1)
      }, {
        content: i(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          h(Y, {
            variant: "link",
            onClick: U
          }, {
            default: i(() => [...oe[6] || (oe[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h(Wv, {
        show: se.value,
        "remote-name": ce.value || "",
        preview: he.value,
        loading: Be.value,
        pulling: _.value === "executing",
        error: Re.value,
        "conflict-resolutions": Ve.value,
        onClose: je,
        onPull: dt,
        onOpenConflictResolution: me
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      h(mf, {
        show: we.value,
        "remote-name": ce.value || "",
        preview: Me.value,
        loading: Be.value,
        pushing: Oe.value,
        onClose: de,
        onPush: Ce,
        onPullFirst: He
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ee.value && We.value ? (s(), E(Wf, {
        key: 0,
        "workflow-conflicts": We.value.workflow_conflicts,
        resolutions: Ve.value,
        "operation-type": "pull",
        validating: _.value === "validating",
        error: ve.value,
        onClose: ct,
        onResolve: Le,
        onApply: st
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : c("", !0),
      $e.value && Je.value ? (s(), E(cg, {
        key: 1,
        validation: Je.value,
        "operation-type": "pull",
        executing: _.value === "executing",
        onProceed: Se,
        onGoBack: ut,
        onCancel: S
      }, null, 8, ["validation", "executing"])) : c("", !0)
    ], 64));
  }
}), vg = /* @__PURE__ */ K(mg, [["__scopeId", "data-v-9ae3b76d"]]), fg = { class: "setting-info" }, gg = { class: "setting-label" }, pg = {
  key: 0,
  class: "required-marker"
}, hg = {
  key: 0,
  class: "setting-description"
}, yg = { class: "setting-control" }, wg = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, n) => (s(), o("div", {
      class: te(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", fg, [
        e("div", gg, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", pg, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", hg, a(t.description), 1)) : c("", !0)
      ]),
      e("div", yg, [
        fe(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), nt = /* @__PURE__ */ K(wg, [["__scopeId", "data-v-cb5d236c"]]), kg = { class: "toggle" }, bg = ["checked", "disabled"], _g = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, n) => (s(), o("label", kg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, bg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ft = /* @__PURE__ */ K(_g, [["__scopeId", "data-v-71c0f550"]]), $g = { class: "settings-section" }, Cg = { class: "path-setting" }, xg = { class: "path-value" }, Sg = { class: "path-setting" }, Ig = { class: "path-value" }, Eg = { class: "settings-section" }, Mg = { class: "settings-section" }, Rg = { class: "settings-section" }, Tg = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: n } = Te(), r = x(!1), p = x(null), g = x(null), v = x(null), f = x(null), l = x(""), u = x(""), w = x(!0), m = x(!0), L = x(!1), $ = P(() => f.value ? l.value !== (f.value.civitai_api_key || "") : !1);
    async function N() {
      r.value = !0, p.value = null;
      try {
        v.value = await d(), f.value = { ...v.value }, l.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", w.value = v.value.auto_sync_models, m.value = v.value.confirm_destructive;
        const V = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        L.value = V === "true";
      } catch (V) {
        p.value = V instanceof Error ? V.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function b() {
      var V;
      g.value = null;
      try {
        const M = {};
        l.value !== (((V = f.value) == null ? void 0 : V.civitai_api_key) || "") && (M.civitai_api_key = l.value || null), await n(M), await N(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (M) {
        g.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to save settings"
        };
      }
    }
    function k() {
      f.value && (l.value = f.value.civitai_api_key || "", u.value = f.value.huggingface_token || "", w.value = f.value.auto_sync_models, m.value = f.value.confirm_destructive, g.value = null);
    }
    function C(V) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(V)), console.log("[ComfyGit] Auto-refresh setting saved:", V);
    }
    return Ie(N), (V, M) => (s(), E(Pe, null, {
      header: i(() => [
        h(Ue, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            h(Y, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: b
            }, {
              default: i(() => [...M[5] || (M[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), E(Y, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: i(() => [...M[6] || (M[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (s(), E(lt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (s(), E(it, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: N
        }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
          h(xe, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var T, H;
              return [
                e("div", $g, [
                  e("div", Cg, [
                    M[7] || (M[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    M[8] || (M[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", xg, a(((T = v.value) == null ? void 0 : T.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Sg, [
                    M[9] || (M[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    M[10] || (M[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Ig, a(((H = v.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          h(xe, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", Eg, [
                h(nt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    h(Pt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": M[0] || (M[0] = (T) => l.value = T),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                h(nt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    h(Pt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": M[1] || (M[1] = (T) => u.value = T),
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
          h(xe, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Mg, [
                h(nt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    h(ft, {
                      modelValue: L.value,
                      "onUpdate:modelValue": [
                        M[2] || (M[2] = (T) => L.value = T),
                        C
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          h(xe, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", Rg, [
                h(nt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    h(ft, {
                      modelValue: w.value,
                      "onUpdate:modelValue": M[3] || (M[3] = (T) => w.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                h(nt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    h(ft, {
                      modelValue: m.value,
                      "onUpdate:modelValue": M[4] || (M[4] = (T) => m.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), E(bt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: et({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), zg = /* @__PURE__ */ K(Tg, [["__scopeId", "data-v-7861bd35"]]), Lg = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = Te(), n = x([]), r = x(!1), p = x(null), g = x(!1), v = x(null), f = P(() => n.value.length === 0 ? [] : n.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function l() {
      r.value = !0, p.value = null;
      try {
        n.value = await d(void 0, 500);
      } catch (u) {
        p.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var u;
          (u = v.value) != null && u.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(l), (u, w) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (m) => g.value = !0)
          }, {
            actions: i(() => [
              h(Y, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: r.value
              }, {
                default: i(() => [
                  y(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (s(), E(lt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (s(), E(it, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            n.value.length === 0 ? (s(), E(Ye, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (s(!0), o(A, null, X(f.value, (m, L) => (s(), o("div", {
                key: L,
                class: te(`log-line log-level-${m.level.toLowerCase()}`)
              }, a(m.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      h(at, {
        show: g.value,
        title: "About Workspace Logs",
        onClose: w[2] || (w[2] = (m) => g.value = !1)
      }, {
        content: i(() => [...w[3] || (w[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            y(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            y(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            y(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            y(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: i(() => [
          h(Y, {
            variant: "primary",
            onClick: w[1] || (w[1] = (m) => g.value = !1)
          }, {
            default: i(() => [...w[4] || (w[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ng = /* @__PURE__ */ K(Lg, [["__scopeId", "data-v-39f6a756"]]), Dg = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: n } = Te(), r = x([]), p = x(!1), g = x(null), v = x(!1), f = x("production"), l = x(null), u = P(() => r.value.length === 0 ? [] : r.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function w() {
      p.value = !0, g.value = null;
      try {
        r.value = await d(void 0, 500);
        try {
          const m = await n();
          f.value = m.environment || "production";
        } catch {
        }
      } catch (m) {
        g.value = m instanceof Error ? m.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var m;
          (m = l.value) != null && m.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(w), (m, L) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = ($) => v.value = !0)
          }, {
            actions: i(() => [
              h(Y, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: p.value
              }, {
                default: i(() => [
                  y(a(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          p.value ? (s(), E(lt, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (s(), E(it, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            r.value.length === 0 ? (s(), E(Ye, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(A, null, X(u.value, ($, N) => (s(), o("div", {
                key: N,
                class: te(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      h(at, {
        show: v.value,
        title: "About Environment Logs",
        onClose: L[2] || (L[2] = ($) => v.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            L[3] || (L[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(f.value), 1),
            L[4] || (L[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          L[5] || (L[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            y(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            y(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            y(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            y(" Detailed debugging information ")
          ], -1)),
          L[6] || (L[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          h(Y, {
            variant: "primary",
            onClick: L[1] || (L[1] = ($) => v.value = !1)
          }, {
            default: i(() => [...L[7] || (L[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pg = /* @__PURE__ */ K(Dg, [["__scopeId", "data-v-4f1e6f72"]]), Ug = { class: "env-title" }, Og = {
  key: 0,
  class: "current-badge"
}, Bg = {
  key: 0,
  class: "branch-info"
}, Ag = /* @__PURE__ */ q({
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
    return (d, n) => (s(), E(ze, {
      status: t.isCurrent ? "synced" : void 0
    }, Rt({
      icon: i(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Ug, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Og, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", Bg, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        fe(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          h(be, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          h(be, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          h(be, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(be, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Fg = /* @__PURE__ */ K(Ag, [["__scopeId", "data-v-9231917a"]]), Vg = { class: "env-details" }, Wg = { class: "status-row" }, Gg = {
  key: 0,
  class: "detail-row"
}, jg = { class: "value mono" }, Hg = {
  key: 1,
  class: "detail-row"
}, qg = { class: "value mono small" }, Kg = { class: "detail-row" }, Yg = { class: "value" }, Jg = { class: "detail-row" }, Qg = { class: "value" }, Xg = { class: "detail-row" }, Zg = { class: "value" }, ep = {
  key: 2,
  class: "section-divider"
}, tp = {
  key: 3,
  class: "detail-row"
}, sp = { class: "value" }, op = {
  key: 4,
  class: "detail-row"
}, np = { class: "value" }, ap = { class: "footer-actions" }, lp = /* @__PURE__ */ q({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: d }) {
    const n = d;
    function r(p) {
      if (!p) return "Unknown";
      try {
        const g = new Date(p), f = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), l = Math.floor(f / 6e4), u = Math.floor(f / 36e5), w = Math.floor(f / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, g) => (s(), E(tt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (v) => n("close"))
    }, {
      body: i(() => [
        e("div", Vg, [
          e("div", Wg, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Gg, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", jg, a(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", Hg, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", qg, a(t.environment.path), 1)
          ])) : c("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Kg, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Yg, a(t.environment.workflow_count), 1)
          ]),
          e("div", Jg, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Qg, a(t.environment.node_count), 1)
          ]),
          e("div", Xg, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Zg, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", ep)) : c("", !0),
          t.environment.created_at ? (s(), o("div", tp, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", sp, a(r(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", op, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", np, a(r(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", ap, [
          t.canDelete ? (s(), E(re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (v) => n("delete", t.environment.name))
          }, {
            default: i(() => [...g[12] || (g[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          h(re, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (v) => n("close"))
          }, {
            default: i(() => [...g[13] || (g[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ip = /* @__PURE__ */ K(lp, [["__scopeId", "data-v-59855453"]]), rp = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], dp = "3.12", cp = [
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
], up = "auto", mp = { class: "create-env-form" }, vp = { class: "form-field" }, fp = { class: "form-field" }, gp = ["value"], pp = { class: "form-field" }, hp = ["disabled"], yp = ["value"], wp = { class: "form-field" }, kp = ["value"], bp = { class: "form-field form-field--checkbox" }, _p = { class: "form-checkbox" }, $p = /* @__PURE__ */ q({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: d }) {
    const n = d, { getComfyUIReleases: r } = Te(), p = x(""), g = x(dp), v = x("latest"), f = x(up), l = x(!1), u = x([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = x(!1), m = x(null);
    function L() {
      const N = p.value.trim();
      if (!N) return;
      const b = {
        name: N,
        python_version: g.value,
        comfyui_version: v.value,
        torch_backend: f.value,
        switch_after: l.value
      };
      n("create", b);
    }
    async function $() {
      w.value = !0;
      try {
        u.value = await r();
      } catch (N) {
        console.error("Failed to load ComfyUI releases:", N);
      } finally {
        w.value = !1;
      }
    }
    return Ie(async () => {
      var N;
      await Ts(), (N = m.value) == null || N.focus(), $();
    }), (N, b) => (s(), E(tt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: b[6] || (b[6] = (k) => n("close"))
    }, {
      body: i(() => [
        e("div", mp, [
          e("div", vp, [
            b[7] || (b[7] = e("label", { class: "form-label" }, "Name", -1)),
            Ze(e("input", {
              ref_key: "nameInput",
              ref: m,
              "onUpdate:modelValue": b[0] || (b[0] = (k) => p.value = k),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: rt(L, ["enter"])
            }, null, 544), [
              [as, p.value]
            ])
          ]),
          e("div", fp, [
            b[8] || (b[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": b[1] || (b[1] = (k) => g.value = k),
              class: "form-select"
            }, [
              (s(!0), o(A, null, X(ge(rp), (k) => (s(), o("option", {
                key: k,
                value: k
              }, a(k), 9, gp))), 128))
            ], 512), [
              [At, g.value]
            ])
          ]),
          e("div", pp, [
            b[9] || (b[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (k) => v.value = k),
              class: "form-select",
              disabled: w.value
            }, [
              (s(!0), o(A, null, X(u.value, (k) => (s(), o("option", {
                key: k.tag_name,
                value: k.tag_name
              }, a(k.name), 9, yp))), 128))
            ], 8, hp), [
              [At, v.value]
            ])
          ]),
          e("div", wp, [
            b[10] || (b[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": b[3] || (b[3] = (k) => f.value = k),
              class: "form-select"
            }, [
              (s(!0), o(A, null, X(ge(cp), (k) => (s(), o("option", {
                key: k,
                value: k
              }, a(k) + a(k === "auto" ? " (detect GPU)" : ""), 9, kp))), 128))
            ], 512), [
              [At, f.value]
            ])
          ]),
          e("div", bp, [
            e("label", _p, [
              Ze(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": b[4] || (b[4] = (k) => l.value = k)
              }, null, 512), [
                [ls, l.value]
              ]),
              b[11] || (b[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        h(re, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: L
        }, {
          default: i(() => [...b[12] || (b[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        h(re, {
          variant: "secondary",
          onClick: b[5] || (b[5] = (k) => n("close"))
        }, {
          default: i(() => [...b[13] || (b[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Cp = /* @__PURE__ */ K($p, [["__scopeId", "data-v-a2f13447"]]), xp = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: d, emit: n }) {
    const r = n, { getEnvironments: p } = Te(), g = x([]), v = x(!1), f = x(null), l = x(""), u = x(!1), w = x(!1), m = x(null), L = P(
      () => g.value.find((M) => M.is_current)
    ), $ = P(() => {
      if (!l.value.trim()) return g.value;
      const M = l.value.toLowerCase();
      return g.value.filter(
        (T) => {
          var H;
          return T.name.toLowerCase().includes(M) || ((H = T.current_branch) == null ? void 0 : H.toLowerCase().includes(M));
        }
      );
    });
    function N(M) {
      r("create", M), w.value = !1;
    }
    function b() {
      w.value = !0;
    }
    function k(M) {
      m.value = M;
    }
    function C(M) {
      m.value = null, r("delete", M);
    }
    async function V() {
      v.value = !0, f.value = null;
      try {
        g.value = await p();
      } catch (M) {
        f.value = M instanceof Error ? M.message : "Failed to load environments";
      } finally {
        v.value = !1;
      }
    }
    return Ie(V), d({
      loadEnvironments: V
    }), (M, T) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (H) => u.value = !0)
          }, {
            actions: i(() => [
              h(Y, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: i(() => [...T[6] || (T[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              h(Y, {
                variant: "secondary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...T[7] || (T[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          h(kt, {
            modelValue: l.value,
            "onUpdate:modelValue": T[1] || (T[1] = (H) => l.value = H),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value ? (s(), E(lt, {
            key: 0,
            message: "Loading environments..."
          })) : f.value ? (s(), E(it, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                L.value ? (s(), o(A, { key: 0 }, [
                  T[8] || (T[8] = y(" • Current: ", -1)),
                  e("strong", null, a(L.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            $.value.length ? (s(), E(xe, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, X($.value, (H) => (s(), E(Fg, {
                  key: H.name,
                  "environment-name": H.name,
                  "is-current": H.is_current,
                  "current-branch": H.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    H.is_current ? c("", !0) : (s(), E(Y, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => M.$emit("switch", H.name)
                    }, {
                      default: i(() => [...T[9] || (T[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    h(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => k(H)
                    }, {
                      default: i(() => [...T[10] || (T[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? c("", !0) : (s(), E(Ye, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Rt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  h(Y, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: i(() => [...T[11] || (T[11] = [
                      y(" Create Environment ", -1)
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
      h(at, {
        show: u.value,
        title: "About Environments",
        onClose: T[3] || (T[3] = (H) => u.value = !1)
      }, {
        content: i(() => [...T[12] || (T[12] = [
          e("p", null, [
            e("strong", null, "Environments"),
            y(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          h(Y, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (H) => u.value = !1)
          }, {
            default: i(() => [...T[13] || (T[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      m.value ? (s(), E(ip, {
        key: 0,
        environment: m.value,
        "can-delete": g.value.length > 1,
        onClose: T[4] || (T[4] = (H) => m.value = null),
        onDelete: C
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      w.value ? (s(), E(Cp, {
        key: 1,
        onClose: T[5] || (T[5] = (H) => w.value = !1),
        onCreate: N
      })) : c("", !0)
    ], 64));
  }
}), Sp = /* @__PURE__ */ K(xp, [["__scopeId", "data-v-307d9926"]]), Ip = { class: "file-path" }, Ep = { class: "file-path-text" }, Mp = ["title"], Rp = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, n = x(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(d.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, g) => (s(), o("div", Ip, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Ep, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Mp)) : c("", !0)
    ]));
  }
}), Tp = /* @__PURE__ */ K(Rp, [["__scopeId", "data-v-f0982173"]]), zp = { class: "output-path-input" }, Lp = { class: "export-actions" }, Np = {
  key: 1,
  class: "export-warning"
}, Dp = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = Te(), n = x(""), r = x(!1), p = x(null), g = x(!1);
    async function v() {
      r.value = !0, p.value = null;
      try {
        const l = await d(n.value || void 0);
        p.value = l;
      } catch (l) {
        p.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function f() {
      var l;
      if ((l = p.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (l, u) => (s(), o(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              h(Y, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (w) => g.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...u[5] || (u[5] = [
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
          h(xe, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              h(ze, { status: "synced" }, {
                icon: i(() => [...u[6] || (u[6] = [
                  y("📦", -1)
                ])]),
                title: i(() => [...u[7] || (u[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...u[8] || (u[8] = [
                  y(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  h(be, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  h(be, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  h(be, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  h(be, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          h(xe, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              h(ze, { status: "synced" }, {
                icon: i(() => [...u[9] || (u[9] = [
                  y("📁", -1)
                ])]),
                title: i(() => [...u[10] || (u[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: i(() => [...u[11] || (u[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", zp, [
                    h(Pt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (w) => n.value = w),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          h(xe, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Lp, [
                h(Y, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: v
                }, {
                  default: i(() => [
                    u[12] || (u[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    y(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (s(), E(Y, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: u[2] || (u[2] = (w) => n.value = "")
                }, {
                  default: i(() => [...u[13] || (u[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          p.value ? (s(), E(xe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              h(ze, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Rt({
                icon: i(() => [
                  y(a(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  y(a(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  y(a(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    h(be, { label: "Saved to:" }, {
                      default: i(() => [
                        h(Tp, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (s(), E(be, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (s(), o("div", Np, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    h(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: f
                    }, {
                      default: i(() => [...u[15] || (u[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    h(Y, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (w) => p.value = null)
                    }, {
                      default: i(() => [...u[16] || (u[16] = [
                        y(" Dismiss ", -1)
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
      h(at, {
        show: g.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (w) => g.value = !1)
      }, {
        content: i(() => [...u[17] || (u[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            y(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pp = /* @__PURE__ */ K(Dp, [["__scopeId", "data-v-1777a9d5"]]), Up = { class: "file-input-wrapper" }, Op = ["accept", "multiple", "disabled"], Bp = /* @__PURE__ */ q({
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
  setup(t, { expose: d, emit: n }) {
    const r = n, p = x(null);
    function g() {
      var f;
      (f = p.value) == null || f.click();
    }
    function v(f) {
      const l = f.target;
      l.files && l.files.length > 0 && (r("change", l.files), l.value = "");
    }
    return d({
      triggerInput: g
    }), (f, l) => (s(), o("div", Up, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, Op),
      h(Y, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: i(() => [
          fe(f.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            y(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Ap = /* @__PURE__ */ K(Bp, [["__scopeId", "data-v-cd192091"]]), Fp = {
  key: 0,
  class: "drop-zone-empty"
}, Vp = { class: "drop-zone-text" }, Wp = { class: "drop-zone-primary" }, Gp = { class: "drop-zone-secondary" }, jp = { class: "drop-zone-actions" }, Hp = {
  key: 1,
  class: "drop-zone-file"
}, qp = { class: "file-info" }, Kp = { class: "file-details" }, Yp = { class: "file-name" }, Jp = { class: "file-size" }, Qp = /* @__PURE__ */ q({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: d }) {
    const n = d, r = x(!1), p = x(null), g = x(0), v = P(() => p.value !== null), f = P(() => {
      var k;
      return ((k = p.value) == null ? void 0 : k.name) || "";
    }), l = P(() => {
      if (!p.value) return "";
      const k = p.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var C;
      g.value++, (C = k.dataTransfer) != null && C.types.includes("Files") && (r.value = !0);
    }
    function w(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function m() {
      g.value--, g.value === 0 && (r.value = !1);
    }
    function L(k) {
      var V;
      g.value = 0, r.value = !1;
      const C = (V = k.dataTransfer) == null ? void 0 : V.files;
      C && C.length > 0 && N(C[0]);
    }
    function $(k) {
      k.length > 0 && N(k[0]);
    }
    function N(k) {
      p.value = k, n("fileSelected", k);
    }
    function b() {
      p.value = null, n("clear");
    }
    return (k, C) => (s(), o("div", {
      class: te(["file-drop-zone", { "drop-active": r.value, "has-file": v.value }]),
      onDragenter: _e(u, ["prevent"]),
      onDragover: _e(w, ["prevent"]),
      onDragleave: _e(m, ["prevent"]),
      onDrop: _e(L, ["prevent"])
    }, [
      v.value ? (s(), o("div", Hp, [
        e("div", qp, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Kp, [
            e("div", Yp, a(f.value), 1),
            e("div", Jp, a(l.value), 1)
          ])
        ]),
        h(Y, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: i(() => [...C[2] || (C[2] = [
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
      ])) : (s(), o("div", Fp, [
        C[0] || (C[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Vp, [
          e("p", Wp, a(t.primaryText), 1),
          e("p", Gp, a(t.secondaryText), 1)
        ]),
        e("div", jp, [
          h(Ap, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
          }, {
            default: i(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Xp = /* @__PURE__ */ K(Qp, [["__scopeId", "data-v-e00abbca"]]), Zp = { class: "import-preview" }, eh = { class: "preview-header" }, th = {
  key: 0,
  class: "source-env"
}, sh = { class: "preview-content" }, oh = { class: "preview-section" }, nh = { class: "section-header" }, ah = { class: "section-info" }, lh = { class: "section-count" }, ih = {
  key: 0,
  class: "item-list"
}, rh = { class: "item-name" }, dh = {
  key: 0,
  class: "item-more"
}, ch = { class: "preview-section" }, uh = { class: "section-header" }, mh = { class: "section-info" }, vh = { class: "section-count" }, fh = {
  key: 0,
  class: "item-list"
}, gh = { class: "item-details" }, ph = { class: "item-name" }, hh = { class: "item-meta" }, yh = {
  key: 0,
  class: "item-more"
}, wh = { class: "preview-section" }, kh = { class: "section-header" }, bh = { class: "section-info" }, _h = { class: "section-count" }, $h = {
  key: 0,
  class: "item-list"
}, Ch = { class: "item-name" }, xh = {
  key: 0,
  class: "item-more"
}, Sh = {
  key: 0,
  class: "preview-section"
}, Ih = { class: "git-info" }, Eh = /* @__PURE__ */ q({
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
    const d = t, n = P(() => d.workflows.length), r = P(() => d.models.length), p = P(() => d.nodes.length);
    function g(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, f) => (s(), o("div", Zp, [
      e("div", eh, [
        h(Fe, null, {
          default: i(() => [...f[0] || (f[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", th, [
          f[1] || (f[1] = y(" From: ", -1)),
          h(jt, null, {
            default: i(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", sh, [
        e("div", oh, [
          e("div", nh, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", ah, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", lh, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", ih, [
            (s(!0), o(A, null, X(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", rh, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", dh, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", ch, [
          e("div", uh, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", mh, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", vh, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", fh, [
            (s(!0), o(A, null, X(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", gh, [
                e("span", ph, a(l.filename), 1),
                e("span", hh, a(g(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", yh, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", wh, [
          e("div", kh, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", bh, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", _h, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", $h, [
            (s(!0), o(A, null, X(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ch, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", xh, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Sh, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Ih, [
            t.gitBranch ? (s(), E(be, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                h(jt, null, {
                  default: i(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), E(be, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                h(rs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Mh = /* @__PURE__ */ K(Eh, [["__scopeId", "data-v-182fe113"]]), Rh = { class: "import-options" }, Th = { class: "options-container" }, zh = { class: "option-section" }, Lh = { class: "conflict-options" }, Nh = ["value", "checked", "onChange"], Dh = { class: "conflict-content" }, Ph = { class: "conflict-label" }, Uh = { class: "conflict-description" }, Oh = { class: "option-section" }, Bh = { class: "component-toggles" }, Ah = /* @__PURE__ */ q({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: d }) {
    const n = d, r = [
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
    return (p, g) => (s(), o("div", Rh, [
      h(Fe, null, {
        default: i(() => [...g[4] || (g[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Th, [
        e("div", zh, [
          h(Gt, null, {
            default: i(() => [...g[5] || (g[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Lh, [
            (s(), o(A, null, X(r, (v) => e("label", {
              key: v.value,
              class: te(["conflict-option", { active: t.conflictMode === v.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: t.conflictMode === v.value,
                onChange: (f) => n("update:conflictMode", v.value)
              }, null, 40, Nh),
              e("div", Dh, [
                e("span", Ph, a(v.label), 1),
                e("span", Uh, a(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Oh, [
          h(Gt, null, {
            default: i(() => [...g[6] || (g[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Bh, [
            h(nt, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                h(ft, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": g[0] || (g[0] = (v) => n("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            h(nt, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                h(ft, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": g[1] || (g[1] = (v) => n("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            h(nt, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                h(ft, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": g[2] || (g[2] = (v) => n("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            h(nt, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                h(ft, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": g[3] || (g[3] = (v) => n("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Fh = /* @__PURE__ */ K(Ah, [["__scopeId", "data-v-0ec212b0"]]), Vh = {
  key: 0,
  class: "import-empty"
}, Wh = { class: "import-help" }, Gh = {
  key: 1,
  class: "import-configure"
}, jh = { class: "selected-file-bar" }, Hh = { class: "file-bar-content" }, qh = { class: "file-bar-info" }, Kh = { class: "file-bar-name" }, Yh = { class: "file-bar-size" }, Jh = { class: "import-actions" }, Qh = {
  key: 2,
  class: "import-progress"
}, Xh = { class: "progress-content" }, Zh = { class: "progress-info" }, e1 = { class: "progress-title" }, t1 = { class: "progress-detail" }, s1 = { class: "progress-bar" }, o1 = { class: "progress-status" }, n1 = {
  key: 3,
  class: "import-complete"
}, a1 = { class: "complete-message" }, l1 = { class: "complete-title" }, i1 = { class: "complete-details" }, r1 = { class: "complete-actions" }, d1 = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const d = x(null), n = x(!1), r = x(!1), p = x(!1), g = x(""), v = x({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), f = x({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = x({
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
    }), u = P(() => v.value.includeWorkflows || v.value.includeModels || v.value.includeNodes || v.value.includeGitHistory);
    function w(b) {
      d.value = b;
    }
    function m() {
      d.value = null, r.value = !1, p.value = !1, g.value = "";
    }
    function L() {
      m(), n.value = !1, f.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (d.value) {
        n.value = !0, r.value = !1;
        try {
          const b = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of b)
            f.value = k, await new Promise((C) => setTimeout(C, 800));
          f.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), p.value = !0, g.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (b) {
          p.value = !1, g.value = b instanceof Error ? b.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function N(b) {
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (b, k) => (s(), E(Pe, null, {
      header: i(() => [
        h(Ue, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !d.value && !n.value ? (s(), o("div", Vh, [
          h(Xp, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: w
          }),
          e("div", Wh, [
            h(Fe, null, {
              default: i(() => [...k[5] || (k[5] = [
                y("How to Import", -1)
              ])]),
              _: 1
            }),
            k[6] || (k[6] = e("div", { class: "help-content" }, [
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
        ])) : d.value && !n.value && !r.value ? (s(), o("div", Gh, [
          e("div", jh, [
            e("div", Hh, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", qh, [
                e("div", Kh, a(d.value.name), 1),
                e("div", Yh, a(N(d.value.size)), 1)
              ])
            ]),
            h(Y, {
              variant: "ghost",
              size: "sm",
              onClick: m
            }, {
              default: i(() => [...k[8] || (k[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          h(Mh, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          h(Fh, {
            "conflict-mode": v.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (C) => v.value.conflictMode = C),
            "include-workflows": v.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (C) => v.value.includeWorkflows = C),
            "include-models": v.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (C) => v.value.includeModels = C),
            "include-nodes": v.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (C) => v.value.includeNodes = C),
            "include-git-history": v.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (C) => v.value.includeGitHistory = C)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !v.value.includeModels && l.value.models.length > 0 ? (s(), E(gt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Jh, [
            h(Y, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: $
            }, {
              default: i(() => [...k[9] || (k[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                y(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            h(Y, {
              variant: "secondary",
              size: "md",
              onClick: m
            }, {
              default: i(() => [...k[10] || (k[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (s(), o("div", Qh, [
          e("div", Xh, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Zh, [
              e("div", e1, a(f.value.message), 1),
              e("div", t1, a(f.value.detail), 1)
            ])
          ]),
          e("div", s1, [
            e("div", {
              class: "progress-bar-fill",
              style: et({ width: `${f.value.percent}%` })
            }, null, 4)
          ]),
          e("div", o1, a(f.value.percent) + "% complete ", 1)
        ])) : r.value ? (s(), o("div", n1, [
          e("div", {
            class: te(["complete-icon", p.value ? "success" : "error"])
          }, a(p.value ? "✓" : "✕"), 3),
          e("div", a1, [
            e("div", l1, a(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", i1, a(g.value), 1)
          ]),
          e("div", r1, [
            h(Y, {
              variant: "primary",
              size: "md",
              onClick: L
            }, {
              default: i(() => [...k[12] || (k[12] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), c1 = /* @__PURE__ */ K(d1, [["__scopeId", "data-v-18e18eb5"]]), u1 = { class: "header-info" }, m1 = { class: "commit-hash" }, v1 = {
  key: 0,
  class: "commit-refs"
}, f1 = { class: "commit-message" }, g1 = { class: "commit-date" }, p1 = {
  key: 0,
  class: "loading"
}, h1 = {
  key: 1,
  class: "changes-section"
}, y1 = { class: "stats-row" }, w1 = { class: "stat" }, k1 = { class: "stat insertions" }, b1 = { class: "stat deletions" }, _1 = {
  key: 0,
  class: "change-group"
}, $1 = {
  key: 1,
  class: "change-group"
}, C1 = {
  key: 0,
  class: "version"
}, x1 = {
  key: 2,
  class: "change-group"
}, S1 = { class: "change-item" }, I1 = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: n } = Te(), r = x(null), p = x(!0), g = P(() => {
      if (!r.value) return !1;
      const f = r.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), v = P(() => {
      if (!r.value) return !1;
      const f = r.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return Ie(async () => {
      try {
        r.value = await n(d.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (f, l) => (s(), E(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (u) => f.$emit("close"))
    }, {
      header: i(() => {
        var u, w, m, L;
        return [
          e("div", u1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", m1, a(((u = r.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (L = (m = r.value) == null ? void 0 : m.refs) != null && L.length ? (s(), o("span", v1, [
              (s(!0), o(A, null, X(r.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : c("", !0)
          ]),
          h(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = ($) => f.$emit("close"))
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
        var u, w;
        return [
          e("div", f1, a(((u = r.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", g1, a(((w = r.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", p1, "Loading details...")) : r.value ? (s(), o("div", h1, [
            e("div", y1, [
              e("span", w1, a(r.value.stats.files_changed) + " files", 1),
              e("span", k1, "+" + a(r.value.stats.insertions), 1),
              e("span", b1, "-" + a(r.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", _1, [
              h(It, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, X(r.value.changes.workflows.added, (m) => (s(), o("div", {
                key: "add-" + m,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(m), 1)
              ]))), 128)),
              (s(!0), o(A, null, X(r.value.changes.workflows.modified, (m) => (s(), o("div", {
                key: "mod-" + m,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(m), 1)
              ]))), 128)),
              (s(!0), o(A, null, X(r.value.changes.workflows.deleted, (m) => (s(), o("div", {
                key: "del-" + m,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(m), 1)
              ]))), 128))
            ])) : c("", !0),
            v.value ? (s(), o("div", $1, [
              h(It, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, X(r.value.changes.nodes.added, (m) => (s(), o("div", {
                key: "add-" + m.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(m.name), 1),
                m.version ? (s(), o("span", C1, "(" + a(m.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(A, null, X(r.value.changes.nodes.removed, (m) => (s(), o("div", {
                key: "rem-" + m.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(m.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (s(), o("div", x1, [
              h(It, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", S1, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        h(re, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (u) => f.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        h(re, {
          variant: "primary",
          onClick: l[2] || (l[2] = (u) => f.$emit("checkout", t.commit))
        }, {
          default: i(() => [...l[16] || (l[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), E1 = /* @__PURE__ */ K(I1, [["__scopeId", "data-v-d256ff6d"]]), M1 = { class: "dialog-message" }, R1 = {
  key: 0,
  class: "dialog-details"
}, T1 = {
  key: 1,
  class: "dialog-warning"
}, z1 = /* @__PURE__ */ q({
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
    return (d, n) => (s(), E(tt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => d.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", M1, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", R1, [
          (s(!0), o(A, null, X(t.details, (r, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", T1, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        h(re, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => d.$emit("cancel"))
        }, {
          default: i(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(re, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => d.$emit("secondary"))
        }, {
          default: i(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        h(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
        }, {
          default: i(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), L1 = /* @__PURE__ */ K(z1, [["__scopeId", "data-v-3670b9f5"]]), N1 = { class: "base-textarea-wrapper" }, D1 = ["value", "rows", "placeholder", "disabled", "maxlength"], P1 = {
  key: 0,
  class: "base-textarea-count"
}, U1 = /* @__PURE__ */ q({
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
    return (d, n) => (s(), o("div", N1, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = rt(_e((r) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = rt(_e((r) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, D1),
      t.showCharCount && t.maxLength ? (s(), o("div", P1, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ K(U1, [["__scopeId", "data-v-5516e6fc"]]), O1 = ["checked", "disabled"], B1 = { class: "base-checkbox-box" }, A1 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, F1 = {
  key: 0,
  class: "base-checkbox-label"
}, V1 = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, n) => (s(), o("label", {
      class: te(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.checked))
      }, null, 40, O1),
      e("span", B1, [
        t.modelValue ? (s(), o("svg", A1, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (s(), o("span", F1, [
        fe(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ss = /* @__PURE__ */ K(V1, [["__scopeId", "data-v-bf17c831"]]), W1 = { class: "popover-header" }, G1 = { class: "popover-body" }, j1 = {
  key: 0,
  class: "changes-summary"
}, H1 = {
  key: 0,
  class: "change-item"
}, q1 = {
  key: 1,
  class: "change-item"
}, K1 = {
  key: 2,
  class: "change-item"
}, Y1 = {
  key: 3,
  class: "change-item"
}, J1 = {
  key: 4,
  class: "change-item"
}, Q1 = {
  key: 1,
  class: "no-changes"
}, X1 = {
  key: 2,
  class: "loading"
}, Z1 = {
  key: 3,
  class: "issues-error"
}, ey = { class: "error-header" }, ty = { class: "error-title" }, sy = { class: "issues-list" }, oy = { class: "message-section" }, ny = { class: "popover-footer" }, ay = {
  key: 1,
  class: "commit-popover"
}, ly = { class: "popover-header" }, iy = { class: "popover-body" }, ry = {
  key: 0,
  class: "changes-summary"
}, dy = {
  key: 0,
  class: "change-item"
}, cy = {
  key: 1,
  class: "change-item"
}, uy = {
  key: 2,
  class: "change-item"
}, my = {
  key: 3,
  class: "change-item"
}, vy = {
  key: 4,
  class: "change-item"
}, fy = {
  key: 1,
  class: "no-changes"
}, gy = {
  key: 2,
  class: "loading"
}, py = {
  key: 3,
  class: "issues-error"
}, hy = { class: "error-header" }, yy = { class: "error-title" }, wy = { class: "issues-list" }, ky = { class: "message-section" }, by = { class: "popover-footer" }, _y = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const n = t, r = d, { commit: p } = Te(), g = x(""), v = x(!1), f = x(!1), l = x(null), u = P(() => {
      if (!n.status) return !1;
      const N = n.status.workflows;
      return N.new.length > 0 || N.modified.length > 0 || N.deleted.length > 0 || n.status.has_changes;
    }), w = P(() => {
      var N;
      return (N = n.status) != null && N.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), m = P(() => w.value.length > 0), L = P(() => m.value && !f.value);
    async function $() {
      var N, b, k;
      if (!(m.value && !f.value) && !(!u.value || !g.value.trim() || v.value)) {
        v.value = !0, l.value = null;
        try {
          const C = await p(g.value.trim(), f.value);
          C.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((N = C.summary) == null ? void 0 : N.new) || 0} new, ${((b = C.summary) == null ? void 0 : b.modified) || 0} modified, ${((k = C.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, g.value = "", f.value = !1, setTimeout(() => r("committed"), 1e3)) : C.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : C.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: C.message || "Commit failed" };
        } catch (C) {
          l.value = { type: "error", message: C instanceof Error ? C.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (N, b) => t.asModal ? (s(), E(Ee, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (k) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", W1, [
            b[11] || (b[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (k) => r("close"))
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
          e("div", G1, [
            t.status && u.value ? (s(), o("div", j1, [
              t.status.workflows.new.length ? (s(), o("div", H1, [
                b[12] || (b[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", q1, [
                b[13] || (b[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", K1, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Y1, [
                b[15] || (b[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", J1, [
                b[16] || (b[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", Q1, " No changes to commit ")) : (s(), o("div", X1, " Loading... ")),
            m.value ? (s(), o("div", Z1, [
              e("div", ey, [
                b[17] || (b[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", ty, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", sy, [
                (s(!0), o(A, null, X(w.value, (k) => (s(), o("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(k.name), 1),
                  y(": " + a(k.issue_summary), 1)
                ]))), 128))
              ]),
              h(ss, {
                modelValue: f.value,
                "onUpdate:modelValue": b[1] || (b[1] = (k) => f.value = k),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...b[18] || (b[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", oy, [
              h(ts, {
                modelValue: g.value,
                "onUpdate:modelValue": b[2] || (b[2] = (k) => g.value = k),
                placeholder: L.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || v.value || L.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: te(["result", l.value.type])
            }, a(l.value.message), 3)) : c("", !0)
          ]),
          e("div", ny, [
            h(re, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (k) => r("close"))
            }, {
              default: i(() => [...b[19] || (b[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            h(re, {
              variant: f.value ? "danger" : "primary",
              disabled: !u.value || !g.value.trim() || v.value || L.value,
              loading: v.value,
              onClick: $
            }, {
              default: i(() => [
                y(a(v.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", ay, [
      e("div", ly, [
        b[21] || (b[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (k) => r("close"))
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
      e("div", iy, [
        t.status && u.value ? (s(), o("div", ry, [
          t.status.workflows.new.length ? (s(), o("div", dy, [
            b[22] || (b[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", cy, [
            b[23] || (b[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", uy, [
            b[24] || (b[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", my, [
            b[25] || (b[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", vy, [
            b[26] || (b[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", fy, " No changes to commit ")) : (s(), o("div", gy, " Loading... ")),
        m.value ? (s(), o("div", py, [
          e("div", hy, [
            b[27] || (b[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", yy, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", wy, [
            (s(!0), o(A, null, X(w.value, (k) => (s(), o("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, a(k.name), 1),
              y(": " + a(k.issue_summary), 1)
            ]))), 128))
          ]),
          h(ss, {
            modelValue: f.value,
            "onUpdate:modelValue": b[7] || (b[7] = (k) => f.value = k),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...b[28] || (b[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", ky, [
          h(ts, {
            modelValue: g.value,
            "onUpdate:modelValue": b[8] || (b[8] = (k) => g.value = k),
            placeholder: L.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || v.value || L.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: te(["result", l.value.type])
        }, a(l.value.message), 3)) : c("", !0)
      ]),
      e("div", by, [
        h(re, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (k) => r("close"))
        }, {
          default: i(() => [...b[29] || (b[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h(re, {
          variant: f.value ? "danger" : "primary",
          disabled: !u.value || !g.value.trim() || v.value || L.value,
          loading: v.value,
          onClick: $
        }, {
          default: i(() => [
            y(a(v.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), fs = /* @__PURE__ */ K(_y, [["__scopeId", "data-v-d92153de"]]), $y = { class: "modal-header" }, Cy = { class: "modal-body" }, xy = { class: "switch-message" }, Sy = { class: "switch-details" }, Iy = { class: "modal-actions" }, Ey = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, n) => (s(), E(Ee, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", $y, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Cy, [
            e("p", xy, [
              n[6] || (n[6] = y(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = y(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = y("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Sy, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Iy, [
            h(Y, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => d.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            h(Y, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), My = /* @__PURE__ */ K(Ey, [["__scopeId", "data-v-e9c5253e"]]), Ry = { class: "progress-bar" }, Ty = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, n = P(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (r, p) => (s(), o("div", Ry, [
      e("div", {
        class: te(["progress-fill", t.variant]),
        style: et({ width: n.value })
      }, null, 6)
    ]));
  }
}), zy = /* @__PURE__ */ K(Ty, [["__scopeId", "data-v-1beb0512"]]), Ly = {
  key: 0,
  class: "modal-overlay"
}, Ny = { class: "modal-content" }, Dy = { class: "modal-body" }, Py = { class: "progress-info" }, Uy = { class: "progress-percentage" }, Oy = { class: "progress-state" }, By = { class: "switch-steps" }, Ay = { class: "step-icon" }, Fy = { class: "step-label" }, Vy = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, n = P(() => {
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
      return d.message || g[d.state] || d.state;
    }), r = P(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), p = P(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = g.findIndex((f) => f.state === d.state);
      return g.map((f, l) => {
        let u = "pending", w = "○";
        return l < v ? (u = "completed", w = "✓") : l === v && (u = "active", w = "⟳"), {
          ...f,
          status: u,
          icon: w
        };
      });
    });
    return (g, v) => (s(), E(Ee, { to: "body" }, [
      t.show ? (s(), o("div", Ly, [
        e("div", Ny, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Dy, [
            h(zy, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Py, [
              e("div", Uy, a(t.progress) + "%", 1),
              e("div", Oy, a(n.value), 1)
            ]),
            e("div", By, [
              (s(!0), o(A, null, X(p.value, (f) => (s(), o("div", {
                key: f.state,
                class: te(["switch-step", f.status])
              }, [
                e("span", Ay, a(f.icon), 1),
                e("span", Fy, a(f.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Wy = /* @__PURE__ */ K(Vy, [["__scopeId", "data-v-768a5078"]]), Gy = { class: "modal-header" }, jy = { class: "modal-body" }, Hy = {
  key: 0,
  class: "node-section"
}, qy = { class: "node-list" }, Ky = {
  key: 1,
  class: "node-section"
}, Yy = { class: "node-list" }, Jy = { class: "modal-actions" }, Qy = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, n) => (s(), E(Ee, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", Gy, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", jy, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", Hy, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", qy, [
                (s(!0), o(A, null, X(t.mismatchDetails.missing_nodes, (r) => (s(), o("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", Ky, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Yy, [
                (s(!0), o(A, null, X(t.mismatchDetails.extra_nodes, (r) => (s(), o("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + a(r), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Jy, [
            h(Y, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => d.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            h(Y, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Xy = /* @__PURE__ */ K(Qy, [["__scopeId", "data-v-7cad7518"]]), Zy = { class: "comfygit-panel" }, ew = { class: "panel-header" }, tw = { class: "header-left" }, sw = {
  key: 0,
  class: "header-info"
}, ow = { class: "header-actions" }, nw = { class: "env-switcher" }, aw = {
  key: 0,
  class: "header-info"
}, lw = { class: "branch-name" }, iw = { class: "panel-main" }, rw = { class: "sidebar" }, dw = { class: "sidebar-section" }, cw = { class: "sidebar-section" }, uw = { class: "sidebar-section" }, mw = { class: "content-area" }, vw = {
  key: 0,
  class: "error-message"
}, fw = {
  key: 1,
  class: "loading"
}, gw = {
  key: 4,
  class: "dialog-overlay"
}, pw = { class: "dialog-content create-progress-dialog" }, hw = { class: "dialog-body create-progress-body" }, yw = { class: "create-progress-message" }, ww = { class: "dialog-content env-selector-dialog" }, kw = { class: "dialog-header" }, bw = { class: "dialog-body" }, _w = { class: "env-list" }, $w = { class: "env-info" }, Cw = { class: "env-name-row" }, xw = { class: "env-indicator" }, Sw = { class: "env-name" }, Iw = {
  key: 0,
  class: "env-branch"
}, Ew = {
  key: 1,
  class: "current-label"
}, Mw = { class: "env-stats" }, Rw = ["onClick"], Tw = { class: "toast-container" }, zw = { class: "toast-message" }, Lw = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const n = d, {
      getStatus: r,
      getHistory: p,
      getBranches: g,
      checkout: v,
      createBranch: f,
      switchBranch: l,
      deleteBranch: u,
      getEnvironments: w,
      switchEnvironment: m,
      getSwitchProgress: L,
      createEnvironment: $,
      getCreateProgress: N,
      deleteEnvironment: b,
      syncEnvironmentManually: k,
      repairWorkflowModels: C
    } = Te(), V = ds(), M = x(null), T = x([]), H = x([]), G = x([]), J = P(() => G.value.find((j) => j.is_current)), F = x(!1), D = x(null), R = x(null), O = x(!1), B = x(null), ae = x(null), ie = x(null), Q = x(!1), Z = x(!1), U = x(""), _ = x({ state: "idle", progress: 0, message: "" });
    let se = null, ee = null;
    const $e = x(!1), we = x({ state: "idle", message: "" }), Me = x(null);
    let Oe = null;
    const ce = x("status"), Be = x("this-env");
    function he(j, z) {
      ce.value = j, Be.value = z;
    }
    function Re(j) {
      const le = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      le && he(le.view, le.section);
    }
    function Ve() {
      he("branches", "this-env");
    }
    function Je() {
      n("close"), setTimeout(() => {
        var z;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const le of j)
          if (((z = le.textContent) == null ? void 0 : z.trim()) === "Manager") {
            le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ve = x(null), We = x(!1), Ge = x(!1), je = x([]);
    let dt = 0;
    function me(j, z = "info", le = 3e3) {
      const ke = ++dt;
      return je.value.push({ id: ke, message: j, type: z }), le > 0 && setTimeout(() => {
        je.value = je.value.filter((Ne) => Ne.id !== ke);
      }, le), ke;
    }
    function Le(j) {
      je.value = je.value.filter((z) => z.id !== j);
    }
    function ct(j, z) {
      me(j, z);
    }
    const st = P(() => {
      if (!M.value) return "neutral";
      const j = M.value.workflows, z = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || M.value.has_changes;
      return M.value.comparison.is_synced ? z ? "warning" : "success" : "error";
    });
    P(() => M.value ? st.value === "success" ? "All synced" : st.value === "warning" ? "Uncommitted changes" : st.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      F.value = !0, D.value = null;
      try {
        const [j, z, le, ke] = await Promise.all([
          r(!0),
          p(),
          g(),
          w()
        ]);
        M.value = j, T.value = z.commits, H.value = le.branches, G.value = ke, n("statusUpdate", j), B.value && await B.value.loadWorkflows(!0);
      } catch (j) {
        D.value = j instanceof Error ? j.message : "Failed to load status", M.value = null, T.value = [], H.value = [];
      } finally {
        F.value = !1;
      }
    }
    function ut(j) {
      R.value = j;
    }
    async function S(j) {
      var le;
      R.value = null;
      const z = M.value && (M.value.workflows.new.length > 0 || M.value.workflows.modified.length > 0 || M.value.workflows.deleted.length > 0 || M.value.has_changes);
      ve.value = {
        title: z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: z ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((le = j.hash) == null ? void 0 : le.slice(0, 7))}?`,
        details: z ? Zt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: z,
        onConfirm: async () => {
          var De;
          ve.value = null, He();
          const ke = me(`Checking out ${j.short_hash || ((De = j.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Ne = await v(j.hash, z);
          Le(ke), Ne.status === "success" ? me("Restarting ComfyUI...", "success") : me(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function I(j) {
      const z = M.value && (M.value.workflows.new.length > 0 || M.value.workflows.modified.length > 0 || M.value.workflows.deleted.length > 0 || M.value.has_changes);
      ve.value = {
        title: z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: z ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: z ? Zt() : void 0,
        warning: z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ve.value = null, He();
          const le = me(`Switching to ${j}...`, "info", 0), ke = await l(j, z);
          Le(le), ke.status === "success" ? me("Restarting ComfyUI...", "success") : me(ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function W(j) {
      const z = me(`Creating branch ${j}...`, "info", 0), le = await f(j);
      Le(z), le.status === "success" ? (me(`Branch "${j}" created`, "success"), await Se()) : me(le.message || "Failed to create branch", "error");
    }
    async function de(j, z = !1) {
      const le = async (ke) => {
        var De;
        const Ne = me(`Deleting branch ${j}...`, "info", 0);
        try {
          const ue = await u(j, ke);
          Le(Ne), ue.status === "success" ? (me(`Branch "${j}" deleted`, "success"), await Se()) : (De = ue.message) != null && De.includes("not fully merged") ? ve.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ve.value = null, await le(!0);
            }
          } : me(ue.message || "Failed to delete branch", "error");
        } catch (ue) {
          Le(Ne);
          const Ot = ue instanceof Error ? ue.message : "Failed to delete branch";
          Ot.includes("not fully merged") ? ve.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ve.value = null, await le(!0);
            }
          } : me(Ot, "error");
        }
      };
      ve.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ve.value = null, await le(z);
        }
      };
    }
    async function Ce(j) {
      R.value = null;
      const z = prompt("Enter branch name:");
      if (z) {
        const le = me(`Creating branch ${z}...`, "info", 0), ke = await f(z, j.hash);
        Le(le), ke.status === "success" ? (me(`Branch "${z}" created from ${j.short_hash}`, "success"), await Se()) : me(ke.message || "Failed to create branch", "error");
      }
    }
    function He() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ne() {
      ve.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          ve.value = null, He(), me("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function oe() {
      ve.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          ve.value = null, me("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ye(j) {
      O.value = !1, U.value = j, Q.value = !0;
    }
    async function zt() {
      Q.value = !1, Z.value = !0, He(), _.value = {
        progress: 10,
        state: Lt(10),
        message: Nt(10)
      };
      try {
        await m(U.value), ws(), ks();
      } catch (j) {
        mt(), Z.value = !1, me(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), _.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Lt(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function Nt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Lt(j)] || "";
    }
    function ws() {
      if (ee) return;
      let j = 10;
      const z = 60, le = 5e3, ke = 100, Ne = (z - j) / (le / ke);
      ee = window.setInterval(() => {
        if (j += Ne, j >= z && (j = z, mt()), _.value.progress < z) {
          const De = Math.floor(j);
          _.value = {
            progress: De,
            state: Lt(De),
            message: Nt(De)
          };
        }
      }, ke);
    }
    function mt() {
      ee && (clearInterval(ee), ee = null);
    }
    function ks() {
      se || (se = window.setInterval(async () => {
        try {
          let j = await V.getStatus();
          if ((!j || j.state === "idle") && (j = await L()), !j)
            return;
          const z = j.progress || 0;
          z >= 60 && mt();
          const le = Math.max(z, _.value.progress), ke = j.state && j.state !== "idle" && j.state !== "unknown", Ne = ke ? j.state : Lt(le), De = ke && j.message || Nt(le);
          _.value = {
            state: Ne,
            progress: le,
            message: De
          }, j.state === "complete" ? (mt(), Ut(), Z.value = !1, me(`✓ Switched to ${U.value}`, "success"), await Se(), U.value = "") : j.state === "rolled_back" ? (mt(), Ut(), Z.value = !1, me("Switch failed, restored previous environment", "warning"), U.value = "") : j.state === "critical_failure" && (mt(), Ut(), Z.value = !1, me(`Critical error during switch: ${j.message}`, "error"), U.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Ut() {
      mt(), se && (clearInterval(se), se = null);
    }
    function bs() {
      Q.value = !1, U.value = "";
    }
    async function _s() {
      We.value = !1, await Se(), me("✓ Changes committed", "success");
    }
    async function $s() {
      Ge.value = !1;
      const j = me("Syncing environment...", "info", 0);
      try {
        const z = await k("skip", !0);
        if (Le(j), z.status === "success") {
          const le = [];
          z.nodes_installed.length && le.push(`${z.nodes_installed.length} installed`), z.nodes_removed.length && le.push(`${z.nodes_removed.length} removed`);
          const ke = le.length ? `: ${le.join(", ")}` : "";
          me(`✓ Environment synced${ke}`, "success"), await Se();
        } else {
          const le = z.errors.length ? z.errors.join("; ") : z.message;
          me(`Sync failed: ${le}`, "error");
        }
      } catch (z) {
        Le(j), me(`Sync error: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
      }
    }
    async function Cs(j) {
      var z;
      try {
        const le = await C(j);
        le.failed.length === 0 ? me(`✓ Repaired ${le.success} workflow${le.success === 1 ? "" : "s"}`, "success") : me(`Repaired ${le.success}, failed: ${le.failed.length}`, "warning"), await Se();
      } catch (le) {
        me(`Repair failed: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
      } finally {
        (z = ie.value) == null || z.resetRepairingState();
      }
    }
    async function xs(j) {
      Me.value = j, $e.value = !0, we.value = { state: "creating", message: `Creating environment '${j.name}'...` };
      try {
        const z = await $(j);
        z.status === "started" ? Ss() : z.status === "error" && ($e.value = !1, me(`Failed to create environment: ${z.message}. Check debug logs for details.`, "error"), Me.value = null);
      } catch (z) {
        $e.value = !1, me(`Error creating environment: ${z instanceof Error ? z.message : "Unknown error"}. Check debug logs.`, "error"), Me.value = null;
      }
    }
    function Ss() {
      Oe || (Oe = window.setInterval(async () => {
        var j;
        try {
          const z = await N();
          we.value = { state: z.state, message: z.message }, z.state === "complete" ? (Xt(), $e.value = !1, me(`✓ Environment '${z.environment_name}' created`, "success"), await Se(), ae.value && await ae.value.loadEnvironments(), (j = Me.value) != null && j.switch_after && z.environment_name && await ye(z.environment_name), Me.value = null) : z.state === "error" && (Xt(), $e.value = !1, me(`Failed to create environment: ${z.error || z.message}. Check debug logs.`, "error"), Me.value = null);
        } catch (z) {
          console.error("Failed to poll create progress:", z);
        }
      }, 2e3));
    }
    function Xt() {
      Oe && (clearInterval(Oe), Oe = null);
    }
    async function Is(j) {
      var z;
      if (((z = J.value) == null ? void 0 : z.name) === j) {
        me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ve.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ve.value = null;
          try {
            const le = await b(j);
            le.status === "success" ? (me(`Environment "${j}" deleted`, "success"), await Se(), ae.value && await ae.value.loadEnvironments()) : me(le.message || "Failed to delete environment", "error");
          } catch (le) {
            me(`Error deleting environment: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Zt() {
      if (!M.value) return [];
      const j = [], z = M.value.workflows;
      return z.new.length && j.push(`${z.new.length} new workflow(s)`), z.modified.length && j.push(`${z.modified.length} modified workflow(s)`), z.deleted.length && j.push(`${z.deleted.length} deleted workflow(s)`), j;
    }
    return Ie(Se), (j, z) => {
      var le, ke, Ne, De;
      return s(), o("div", Zy, [
        e("div", ew, [
          e("div", tw, [
            z[27] || (z[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            M.value ? (s(), o("div", sw)) : c("", !0)
          ]),
          e("div", ow, [
            e("button", {
              class: te(["icon-btn", { spinning: F.value }]),
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
        e("div", nw, [
          e("div", { class: "env-switcher-header" }, [
            z[30] || (z[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ne
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: oe
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: z[1] || (z[1] = (ue) => he("environments", "all-envs"))
          }, [
            M.value ? (s(), o("div", aw, [
              e("span", null, a(((le = J.value) == null ? void 0 : le.name) || ((ke = M.value) == null ? void 0 : ke.environment) || "Loading..."), 1),
              e("span", lw, "(" + a(M.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            z[31] || (z[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", iw, [
          e("div", rw, [
            e("div", dw, [
              z[32] || (z[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "status" && Be.value === "this-env" }]),
                onClick: z[2] || (z[2] = (ue) => he("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "workflows" }]),
                onClick: z[3] || (z[3] = (ue) => he("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "models-env" }]),
                onClick: z[4] || (z[4] = (ue) => he("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "branches" }]),
                onClick: z[5] || (z[5] = (ue) => he("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "history" }]),
                onClick: z[6] || (z[6] = (ue) => he("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "nodes" }]),
                onClick: z[7] || (z[7] = (ue) => he("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "debug-env" }]),
                onClick: z[8] || (z[8] = (ue) => he("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            z[35] || (z[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", cw, [
              z[33] || (z[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "environments" }]),
                onClick: z[9] || (z[9] = (ue) => he("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "model-index" }]),
                onClick: z[10] || (z[10] = (ue) => he("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "settings" }]),
                onClick: z[11] || (z[11] = (ue) => he("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "debug-workspace" }]),
                onClick: z[12] || (z[12] = (ue) => he("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            z[36] || (z[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", uw, [
              z[34] || (z[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "export" }]),
                onClick: z[13] || (z[13] = (ue) => he("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "import" }]),
                onClick: z[14] || (z[14] = (ue) => he("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "remotes" }]),
                onClick: z[15] || (z[15] = (ue) => he("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", mw, [
            D.value ? (s(), o("div", vw, a(D.value), 1)) : !M.value && ce.value === "status" ? (s(), o("div", fw, " Loading status... ")) : (s(), o(A, { key: 2 }, [
              ce.value === "status" ? (s(), E(aa, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ie,
                status: M.value,
                onSwitchBranch: Ve,
                onCommitChanges: z[16] || (z[16] = (ue) => We.value = !0),
                onSyncEnvironment: z[17] || (z[17] = (ue) => Ge.value = !0),
                onViewWorkflows: z[18] || (z[18] = (ue) => he("workflows", "this-env")),
                onViewHistory: z[19] || (z[19] = (ue) => he("history", "this-env")),
                onViewDebug: z[20] || (z[20] = (ue) => he("debug-env", "this-env")),
                onRepairMissingModels: Cs
              }, null, 8, ["status"])) : ce.value === "workflows" ? (s(), E(lu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: B,
                onRefresh: Se
              }, null, 512)) : ce.value === "models-env" ? (s(), E(Vu, {
                key: 2,
                onNavigate: Re
              })) : ce.value === "branches" ? (s(), E(ka, {
                key: 3,
                branches: H.value,
                current: ((Ne = M.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: I,
                onCreate: W,
                onDelete: de
              }, null, 8, ["branches", "current"])) : ce.value === "history" ? (s(), E(Ta, {
                key: 4,
                commits: T.value,
                onSelect: ut,
                onCheckout: S
              }, null, 8, ["commits"])) : ce.value === "nodes" ? (s(), E(Rm, {
                key: 5,
                onOpenNodeManager: Je
              })) : ce.value === "debug-env" ? (s(), E(Pg, { key: 6 })) : ce.value === "environments" ? (s(), E(Sp, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ae,
                onSwitch: ye,
                onCreate: xs,
                onDelete: Is
              }, null, 512)) : ce.value === "model-index" ? (s(), E(rm, {
                key: 8,
                onRefresh: Se
              })) : ce.value === "settings" ? (s(), E(zg, { key: 9 })) : ce.value === "debug-workspace" ? (s(), E(Ng, { key: 10 })) : ce.value === "export" ? (s(), E(Pp, { key: 11 })) : ce.value === "import" ? (s(), E(c1, { key: 12 })) : ce.value === "remotes" ? (s(), E(vg, {
                key: 13,
                onToast: ct
              })) : c("", !0)
            ], 64))
          ])
        ]),
        R.value ? (s(), E(E1, {
          key: 0,
          commit: R.value,
          onClose: z[21] || (z[21] = (ue) => R.value = null),
          onCheckout: S,
          onCreateBranch: Ce
        }, null, 8, ["commit"])) : c("", !0),
        ve.value ? (s(), E(L1, {
          key: 1,
          title: ve.value.title,
          message: ve.value.message,
          details: ve.value.details,
          warning: ve.value.warning,
          confirmLabel: ve.value.confirmLabel,
          cancelLabel: ve.value.cancelLabel,
          secondaryLabel: ve.value.secondaryLabel,
          secondaryAction: ve.value.secondaryAction,
          destructive: ve.value.destructive,
          onConfirm: ve.value.onConfirm,
          onCancel: z[22] || (z[22] = (ue) => ve.value = null),
          onSecondary: ve.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        h(My, {
          show: Q.value,
          "from-environment": ((De = J.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": U.value,
          onConfirm: zt,
          onClose: bs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        We.value && M.value ? (s(), E(fs, {
          key: 2,
          status: M.value,
          "as-modal": !0,
          onClose: z[23] || (z[23] = (ue) => We.value = !1),
          onCommitted: _s
        }, null, 8, ["status"])) : c("", !0),
        Ge.value && M.value ? (s(), E(Xy, {
          key: 3,
          show: Ge.value,
          "mismatch-details": {
            missing_nodes: M.value.comparison.missing_nodes,
            extra_nodes: M.value.comparison.extra_nodes
          },
          onConfirm: $s,
          onClose: z[24] || (z[24] = (ue) => Ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        h(Wy, {
          show: Z.value,
          state: _.value.state,
          progress: _.value.progress,
          message: _.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        $e.value ? (s(), o("div", gw, [
          e("div", pw, [
            z[39] || (z[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", hw, [
              z[37] || (z[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", yw, a(we.value.message), 1),
              z[38] || (z[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        O.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: z[26] || (z[26] = _e((ue) => O.value = !1, ["self"]))
        }, [
          e("div", ww, [
            e("div", kw, [
              z[41] || (z[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: z[25] || (z[25] = (ue) => O.value = !1)
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
            e("div", bw, [
              z[42] || (z[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", _w, [
                (s(!0), o(A, null, X(G.value, (ue) => (s(), o("div", {
                  key: ue.name,
                  class: te(["env-item", { current: ue.is_current }])
                }, [
                  e("div", $w, [
                    e("div", Cw, [
                      e("span", xw, a(ue.is_current ? "●" : "○"), 1),
                      e("span", Sw, a(ue.name), 1),
                      ue.current_branch ? (s(), o("span", Iw, "(" + a(ue.current_branch) + ")", 1)) : c("", !0),
                      ue.is_current ? (s(), o("span", Ew, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Mw, a(ue.workflow_count) + " workflows • " + a(ue.node_count) + " nodes ", 1)
                  ]),
                  ue.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ot) => ye(ue.name)
                  }, " SWITCH ", 8, Rw))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", Tw, [
          h(zs, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(A, null, X(je.value, (ue) => (s(), o("div", {
                key: ue.id,
                class: te(["toast", ue.type])
              }, [
                e("span", zw, a(ue.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Nw = /* @__PURE__ */ K(Lw, [["__scopeId", "data-v-44184278"]]), Dw = { class: "item-header" }, Pw = { class: "item-info" }, Uw = { class: "filename" }, Ow = { class: "metadata" }, Bw = { class: "size" }, Aw = {
  key: 0,
  class: "type"
}, Fw = { class: "item-actions" }, Vw = {
  key: 0,
  class: "progress-section"
}, Ww = { class: "progress-bar" }, Gw = { class: "progress-stats" }, jw = { class: "downloaded" }, Hw = { class: "speed" }, qw = {
  key: 0,
  class: "eta"
}, Kw = {
  key: 1,
  class: "status-msg paused"
}, Yw = {
  key: 2,
  class: "status-msg queued"
}, Jw = {
  key: 3,
  class: "status-msg completed"
}, Qw = {
  key: 4,
  class: "status-msg failed"
}, Xw = {
  key: 0,
  class: "retries"
}, Zw = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const n = d;
    function r(v) {
      if (v === 0) return "?";
      const f = v / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(v / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(v) {
      return v === 0 ? "-" : `${(v / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(v) {
      if (v < 60) return `${Math.round(v)}s`;
      const f = Math.floor(v / 60);
      return f < 60 ? `${f}m` : `${Math.floor(f / 60)}h ${f % 60}m`;
    }
    return (v, f) => (s(), o("div", {
      class: te(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Dw, [
        e("div", Pw, [
          e("div", Uw, a(t.item.filename), 1),
          e("div", Ow, [
            e("span", Bw, a(r(t.item.size)), 1),
            t.item.type ? (s(), o("span", Aw, a(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Fw, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: f[0] || (f[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: f[1] || (f[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: f[2] || (f[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: f[3] || (f[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Vw, [
        e("div", Ww, [
          e("div", {
            class: "progress-fill",
            style: et({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Gw, [
          e("span", jw, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", Hw, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", qw, a(g(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Kw, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Yw, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Jw, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Qw, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Xw, "(" + a(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ K(Zw, [["__scopeId", "data-v-2110df65"]]), e0 = { class: "queue-title" }, t0 = { class: "count" }, s0 = { class: "queue-actions" }, o0 = { class: "action-label" }, n0 = {
  key: 0,
  class: "overall-progress"
}, a0 = { class: "progress-bar" }, l0 = {
  key: 0,
  class: "current-mini"
}, i0 = { class: "filename" }, r0 = { class: "speed" }, d0 = {
  key: 1,
  class: "queue-content"
}, c0 = {
  key: 0,
  class: "section"
}, u0 = {
  key: 1,
  class: "section"
}, m0 = { class: "section-header" }, v0 = { class: "section-label paused" }, f0 = { class: "items-list" }, g0 = {
  key: 2,
  class: "section"
}, p0 = { class: "section-header" }, h0 = { class: "section-label" }, y0 = { class: "items-list" }, w0 = {
  key: 3,
  class: "section"
}, k0 = { class: "section-header" }, b0 = { class: "section-label" }, _0 = { class: "items-list" }, $0 = {
  key: 4,
  class: "section"
}, C0 = { class: "section-header" }, x0 = { class: "section-label failed" }, S0 = { class: "items-list" }, I0 = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: n,
      queuedItems: r,
      completedItems: p,
      failedItems: g,
      pausedItems: v,
      hasItems: f,
      activeCount: l,
      cancelDownload: u,
      retryDownload: w,
      resumeDownload: m,
      resumeAllPaused: L,
      removeItem: $,
      clearCompleted: N
    } = Tt(), b = x(!1);
    let k = null;
    wt(
      () => ({
        active: l.value,
        failed: g.value.length,
        paused: v.value.length,
        completed: p.value.length
      }),
      (T, H) => {
        k && (clearTimeout(k), k = null);
        const G = T.active === 0 && T.failed === 0 && T.paused === 0 && T.completed > 0, J = H && (H.active > 0 || H.paused > 0);
        G && J && (k = setTimeout(() => {
          N(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = P(() => {
      var G;
      if (d.items.length === 0) return 0;
      const T = p.value.length, H = ((G = n.value) == null ? void 0 : G.progress) || 0;
      return Math.round((T + H / 100) / d.items.length * 100);
    });
    function V(T) {
      u(T);
    }
    function M(T) {
      return T === 0 ? "" : `${(T / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (T, H) => (s(), E(Ee, { to: "body" }, [
      ge(f) ? (s(), o("div", {
        key: 0,
        class: te(["model-download-queue", { minimized: !b.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (G) => b.value = !b.value)
        }, [
          e("div", e0, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", t0, "(" + a(ge(l)) + "/" + a(ge(d).items.length) + ")", 1)
          ]),
          e("div", s0, [
            e("span", o0, a(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (s(), o("div", d0, [
          ge(n) ? (s(), o("div", c0, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            h(Ct, {
              item: ge(n),
              onCancel: H[1] || (H[1] = (G) => V(ge(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ge(v).length > 0 ? (s(), o("div", u0, [
            e("div", m0, [
              e("span", v0, "Paused (" + a(ge(v).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...G) => ge(L) && ge(L)(...G))
              }, "Resume All")
            ]),
            e("div", f0, [
              (s(!0), o(A, null, X(ge(v), (G) => (s(), E(Ct, {
                key: G.id,
                item: G,
                onResume: (J) => ge(m)(G.id),
                onRemove: (J) => ge($)(G.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ge(r).length > 0 ? (s(), o("div", g0, [
            e("div", p0, [
              e("span", h0, "Queued (" + a(ge(r).length) + ")", 1)
            ]),
            e("div", y0, [
              (s(!0), o(A, null, X(ge(r), (G) => (s(), E(Ct, {
                key: G.id,
                item: G,
                onCancel: (J) => V(G.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ge(p).length > 0 ? (s(), o("div", w0, [
            e("div", k0, [
              e("span", b0, "Completed (" + a(ge(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...G) => ge(N) && ge(N)(...G))
              }, "Clear")
            ]),
            e("div", _0, [
              (s(!0), o(A, null, X(ge(p).slice(0, 3), (G) => (s(), E(Ct, {
                key: G.id,
                item: G,
                onRemove: (J) => ge($)(G.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ge(g).length > 0 ? (s(), o("div", $0, [
            e("div", C0, [
              e("span", x0, "Failed (" + a(ge(g).length) + ")", 1)
            ]),
            e("div", S0, [
              (s(!0), o(A, null, X(ge(g), (G) => (s(), E(Ct, {
                key: G.id,
                item: G,
                onRetry: (J) => ge(w)(G.id),
                onRemove: (J) => ge($)(G.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", n0, [
          e("div", a0, [
            e("div", {
              class: "progress-fill",
              style: et({ width: `${C.value}%` })
            }, null, 4)
          ]),
          ge(n) ? (s(), o("div", l0, [
            e("span", i0, a(ge(n).filename), 1),
            e("span", r0, a(M(ge(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), E0 = /* @__PURE__ */ K(I0, [["__scopeId", "data-v-60751cfa"]]), M0 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', R0 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', T0 = {
  comfy: M0,
  phosphor: R0
}, Jt = "comfy", gs = "comfygit-theme";
let vt = null, ps = Jt;
function z0() {
  try {
    const t = localStorage.getItem(gs);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Jt;
}
function hs(t = Jt) {
  vt && vt.remove(), vt = document.createElement("style"), vt.id = "comfygit-theme-styles", vt.setAttribute("data-theme", t), vt.textContent = T0[t], document.head.appendChild(vt), document.body.setAttribute("data-comfygit-theme", t), ps = t;
  try {
    localStorage.setItem(gs, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function L0() {
  return ps;
}
function N0(t) {
  hs(t);
}
const Qt = document.createElement("link");
Qt.rel = "stylesheet";
Qt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Qt);
const D0 = z0();
hs(D0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), N0(t);
  },
  getTheme: () => {
    const t = L0();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let qe = null, Ae = null, Et = null, xt = null, os = null;
const yt = x(null);
async function Dt() {
  var t;
  if (!((t = ht) != null && t.api)) return null;
  try {
    const d = await ht.api.fetchApi("/v2/comfygit/status");
    d.ok && (yt.value = await d.json());
  } catch {
  }
}
function P0() {
  if (!yt.value) return !1;
  const t = yt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || yt.value.has_changes;
}
function U0() {
  qe && qe.remove(), qe = document.createElement("div"), qe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", qe.appendChild(t), qe.addEventListener("click", (r) => {
    r.target === qe && Wt();
  });
  const d = (r) => {
    r.key === "Escape" && (Wt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), qt({
    render: () => Kt(Nw, {
      onClose: Wt,
      onStatusUpdate: (r) => {
        yt.value = r, Mt();
      }
    })
  }).mount(t), document.body.appendChild(qe);
}
function Wt() {
  qe && (qe.remove(), qe = null);
}
function O0(t) {
  St(), Ae = document.createElement("div"), Ae.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ae.style.position = "fixed", Ae.style.top = `${d.bottom + 8}px`, Ae.style.right = `${window.innerWidth - d.right}px`, Ae.style.zIndex = "10001";
  const n = (p) => {
    Ae && !Ae.contains(p.target) && p.target !== t && (St(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (p) => {
    p.key === "Escape" && (St(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Et = qt({
    render: () => Kt(fs, {
      status: yt.value,
      onClose: St,
      onCommitted: () => {
        St(), Dt().then(Mt);
      }
    })
  }), Et.mount(Ae), document.body.appendChild(Ae);
}
function St() {
  Et && (Et.unmount(), Et = null), Ae && (Ae.remove(), Ae = null);
}
function B0() {
  xt || (xt = document.createElement("div"), xt.className = "comfygit-download-queue-root", os = qt({
    render: () => Kt(E0)
  }), os.mount(xt), document.body.appendChild(xt), console.log("[ComfyGit] Model download queue mounted"));
}
let ot = null;
function Mt() {
  if (!ot) return;
  const t = ot.querySelector(".commit-indicator");
  t && (t.style.display = P0() ? "block" : "none");
}
const ys = document.createElement("style");
ys.textContent = `
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
document.head.appendChild(ys);
ht.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = U0, ot = document.createElement("button"), ot.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ot.innerHTML = 'Commit <span class="commit-indicator"></span>', ot.title = "Quick Commit", ot.onclick = () => O0(ot), t.appendChild(d), t.appendChild(ot), (g = (p = ht.menu) == null ? void 0 : p.settingsGroup) != null && g.element && (ht.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), B0();
    const { loadPendingDownloads: n } = Tt();
    n(), await Dt(), Mt(), setInterval(async () => {
      await Dt(), Mt();
    }, 3e4);
    const r = ht.api;
    if (r) {
      let v = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, f = function() {
        const u = document.createElement("div");
        u.style.cssText = `
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
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", u.appendChild(w);
        const m = document.createElement("button");
        m.textContent = "Refresh", m.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, m.onmouseover = () => m.style.background = "var(--comfy-input-bg)", m.onmouseout = () => m.style.background = "var(--comfy-menu-bg)", m.onclick = () => v(), u.appendChild(m);
        const L = document.createElement("button");
        L.textContent = "×", L.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, L.onmouseover = () => L.style.opacity = "1", L.onmouseout = () => L.style.opacity = "0.6", L.onclick = () => u.remove(), u.appendChild(L), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: w, workflow_name: m } = u.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${m}`), await Dt(), Mt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      r.addEventListener("status", async (u) => {
        const w = u.detail != null;
        w && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), v()) : f()), l = w;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
