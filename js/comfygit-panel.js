import { app as lt } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as s, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as ue, createBlock as S, resolveDynamicComponent as Ut, normalizeClass as ne, withCtx as l, toDisplayString as a, createVNode as f, createTextVNode as p, computed as B, Fragment as q, renderList as se, normalizeStyle as Qe, ref as b, onMounted as _e, watch as Ot, Teleport as xe, withModifiers as ke, Transition as wo, createSlots as Bt, withKeys as Je, onUnmounted as ko, reactive as Xt, readonly as bo, unref as me, withDirectives as kt, vModelText as _o, vModelSelect as zt, vModelCheckbox as $o, TransitionGroup as Co, createApp as Pt, h as Vt } from "vue";
const xo = { class: "panel-layout" }, So = {
  key: 0,
  class: "panel-layout-header"
}, Io = {
  key: 1,
  class: "panel-layout-search"
}, Eo = { class: "panel-layout-content" }, Mo = {
  key: 2,
  class: "panel-layout-footer"
}, zo = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (o(), s("div", xo, [
      c.$slots.header ? (o(), s("div", So, [
        ue(c.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      c.$slots.search ? (o(), s("div", Io, [
        ue(c.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", Eo, [
        ue(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), s("div", Mo, [
        ue(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), X = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [r, g] of c)
    n[r] = g;
  return n;
}, Ie = /* @__PURE__ */ X(zo, [["__scopeId", "data-v-21565df9"]]), Lo = {
  key: 0,
  class: "panel-title-prefix"
}, To = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ro = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (o(), S(Ut(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (o(), s("span", Lo, a(t.prefix), 1)) : (o(), s("span", To)),
        ue(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Do = /* @__PURE__ */ X(Ro, [["__scopeId", "data-v-c3875efc"]]), No = ["title"], Uo = ["width", "height"], Oo = /* @__PURE__ */ Y({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => c.$emit("click"))
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
      ])], 8, Uo))
    ], 8, No));
  }
}), Zt = /* @__PURE__ */ X(Oo, [["__scopeId", "data-v-6fc7f16d"]]), Bo = { class: "header-left" }, Po = {
  key: 0,
  class: "header-actions"
}, Vo = /* @__PURE__ */ Y({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Bo, [
        f(Do, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            p(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), S(Zt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : u("", !0)
      ]),
      c.$slots.actions ? (o(), s("div", Po, [
        ue(c.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ X(Vo, [["__scopeId", "data-v-55a62cd6"]]), Fo = {
  key: 0,
  class: "section-title-count"
}, Ao = {
  key: 1,
  class: "section-title-icon"
}, Wo = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), S(Ut(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        ue(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Fo, "(" + a(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), s("span", Ao, a(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ze = /* @__PURE__ */ X(Wo, [["__scopeId", "data-v-559361eb"]]), Go = { class: "status-grid" }, jo = { class: "status-grid__columns" }, Ho = { class: "status-grid__column" }, qo = { class: "status-grid__title" }, Ko = { class: "status-grid__column status-grid__column--right" }, Jo = { class: "status-grid__title" }, Qo = {
  key: 0,
  class: "status-grid__footer"
}, Yo = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Go, [
      e("div", jo, [
        e("div", Ho, [
          e("h4", qo, a(t.leftTitle), 1),
          ue(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Ko, [
          e("h4", Jo, a(t.rightTitle), 1),
          ue(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (o(), s("div", Qo, [
        ue(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Xo = /* @__PURE__ */ X(Yo, [["__scopeId", "data-v-73b7ba3f"]]), Zo = {
  key: 0,
  class: "status-item__icon"
}, es = {
  key: 1,
  class: "status-item__count"
}, ts = { class: "status-item__label" }, os = /* @__PURE__ */ Y({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = B(() => `status-item--${c.variant}`);
    return (r, g) => (o(), s("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Zo, a(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), s("span", es, a(t.count), 1)) : u("", !0),
      e("span", ts, a(t.label), 1)
    ], 2));
  }
}), Pe = /* @__PURE__ */ X(os, [["__scopeId", "data-v-6f929183"]]), ss = { class: "issue-card__header" }, ns = { class: "issue-card__icon" }, as = { class: "issue-card__title" }, ls = {
  key: 0,
  class: "issue-card__content"
}, is = {
  key: 0,
  class: "issue-card__description"
}, rs = {
  key: 1,
  class: "issue-card__items"
}, ds = {
  key: 2,
  class: "issue-card__actions"
}, cs = /* @__PURE__ */ Y({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = B(() => `issue-card--${c.severity}`);
    return (r, g) => (o(), s("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", ss, [
        e("span", ns, a(t.icon), 1),
        e("h4", as, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", ls, [
        t.description ? (o(), s("p", is, a(t.description), 1)) : u("", !0),
        ue(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), s("div", rs, [
        (o(!0), s(q, null, se(t.items, (y, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(y), 1)
        ]))), 128))
      ])) : u("", !0),
      r.$slots.actions ? (o(), s("div", ds, [
        ue(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ X(cs, [["__scopeId", "data-v-df6aa348"]]), us = ["type", "disabled"], ms = {
  key: 0,
  class: "spinner"
}, vs = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", ms)) : u("", !0),
      t.loading ? u("", !0) : ue(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, us));
  }
}), Z = /* @__PURE__ */ X(vs, [["__scopeId", "data-v-772abe47"]]), fs = { class: "empty-state" }, gs = {
  key: 0,
  class: "empty-icon"
}, hs = { class: "empty-message" }, ps = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (o(), s("div", fs, [
      t.icon ? (o(), s("div", gs, a(t.icon), 1)) : u("", !0),
      e("p", hs, a(t.message), 1),
      t.actionLabel ? (o(), S(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: l(() => [
          p(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Ue = /* @__PURE__ */ X(ps, [["__scopeId", "data-v-4466284f"]]), ys = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: ne(["detail-label"]),
      style: Qe({ minWidth: t.minWidth })
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Dt = /* @__PURE__ */ X(ys, [["__scopeId", "data-v-75e9eeb8"]]), ws = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ X(ws, [["__scopeId", "data-v-2f186e4c"]]), ks = { class: "detail-row" }, bs = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("div", ks, [
      f(Dt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          p(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), S(Nt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          p(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ue(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), he = /* @__PURE__ */ X(bs, [["__scopeId", "data-v-ef15664a"]]), _s = { class: "modal-header" }, $s = { class: "modal-body" }, Cs = { class: "status-section" }, xs = {
  key: 0,
  class: "status-section"
}, Ss = { class: "section-header-row" }, Is = {
  key: 0,
  class: "workflow-group"
}, Es = { class: "workflow-group-header" }, Ms = { class: "workflow-group-title" }, zs = { class: "workflow-list" }, Ls = { class: "workflow-name" }, Ts = { class: "workflow-issue" }, Rs = {
  key: 1,
  class: "workflow-group"
}, Ds = { class: "workflow-group-header" }, Ns = { class: "workflow-group-title" }, Us = { class: "workflow-list" }, Os = { class: "workflow-name" }, Bs = { class: "workflow-issue" }, Ps = {
  key: 2,
  class: "workflow-group"
}, Vs = { class: "workflow-group-header" }, Fs = { class: "workflow-group-title" }, As = { class: "workflow-list" }, Ws = { class: "workflow-name" }, Gs = {
  key: 3,
  class: "workflow-group"
}, js = { class: "workflow-group-header" }, Hs = { class: "workflow-group-title" }, qs = { class: "workflow-list" }, Ks = { class: "workflow-name" }, Js = {
  key: 4,
  class: "workflow-group"
}, Qs = { class: "workflow-group-header" }, Ys = { class: "workflow-group-title" }, Xs = { class: "workflow-list" }, Zs = { class: "workflow-name" }, en = {
  key: 5,
  class: "workflow-group"
}, tn = { class: "workflow-group-title" }, on = { class: "expand-icon" }, sn = {
  key: 0,
  class: "workflow-list"
}, nn = { class: "workflow-name" }, an = {
  key: 1,
  class: "status-section"
}, ln = {
  key: 0,
  class: "change-group"
}, rn = { class: "change-group-header" }, dn = { class: "change-group-title" }, cn = { class: "change-list" }, un = { class: "node-name" }, mn = {
  key: 0,
  class: "dev-badge"
}, vn = {
  key: 1,
  class: "change-group"
}, fn = { class: "change-group-header" }, gn = { class: "change-group-title" }, hn = { class: "change-list" }, pn = { class: "node-name" }, yn = {
  key: 0,
  class: "dev-badge"
}, wn = {
  key: 2,
  class: "change-group"
}, kn = { class: "change-list" }, bn = { class: "change-item" }, _n = { class: "node-name" }, $n = {
  key: 3,
  class: "change-group"
}, Cn = {
  key: 2,
  class: "status-section"
}, xn = { class: "section-header-row" }, Sn = {
  key: 0,
  class: "drift-item"
}, In = { class: "drift-list" }, En = {
  key: 0,
  class: "drift-list-more"
}, Mn = {
  key: 1,
  class: "drift-item"
}, zn = { class: "drift-list" }, Ln = {
  key: 0,
  class: "drift-list-more"
}, Tn = {
  key: 2,
  class: "drift-item"
}, Rn = {
  key: 3,
  class: "drift-item"
}, Dn = {
  key: 3,
  class: "status-section"
}, Nn = { class: "info-box" }, Un = { class: "drift-list" }, On = {
  key: 0,
  class: "drift-list-more"
}, Bn = {
  key: 4,
  class: "status-section"
}, Pn = { class: "warning-box" }, Vn = {
  key: 5,
  class: "empty-state-inline"
}, Fn = { class: "modal-actions" }, An = /* @__PURE__ */ Y({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = b(!1);
    _e(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), Ot(() => c.show, (E, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", E);
    }, { immediate: !0 });
    const r = B(() => {
      var E, $, L;
      return ((L = ($ = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : L.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), g = B(() => {
      var E, $, L;
      return ((L = ($ = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : L.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), y = B(() => {
      var E, $, L;
      return ((L = ($ = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : $.synced) == null ? void 0 : L.filter((w) => {
        var k, U, W;
        const _ = (W = (U = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : W.find((j) => j.name === w);
        return !_ || _.status !== "broken";
      })) || [];
    }), h = B(() => {
      var E, $, L, w, _;
      return (E = c.status) != null && E.workflows ? ((($ = c.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((L = c.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || (((w = c.status.workflows.deleted) == null ? void 0 : w.length) ?? 0) > 0 || (((_ = c.status.workflows.synced) == null ? void 0 : _.length) ?? 0) > 0 : !1;
    }), v = B(() => {
      var $, L, w;
      const E = ($ = c.status) == null ? void 0 : $.git_changes;
      return E ? (((L = E.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || (((w = E.nodes_removed) == null ? void 0 : w.length) ?? 0) > 0 || E.workflow_changes || E.has_other_changes : !1;
    }), i = B(() => {
      var E, $, L, w, _, k;
      return !h.value && !v.value && (($ = (E = c.status) == null ? void 0 : E.comparison) == null ? void 0 : $.is_synced) && (((L = c.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && (((k = (_ = (w = c.status) == null ? void 0 : w.comparison) == null ? void 0 : _.disabled_nodes) == null ? void 0 : k.length) ?? 0) === 0;
    }), m = B(() => {
      var $, L;
      const E = (L = ($ = c.status) == null ? void 0 : $.git_changes) == null ? void 0 : L.workflow_changes;
      return E ? typeof E == "number" ? E : Object.keys(E).length : 0;
    });
    function C(E) {
      return typeof E == "string" ? E : E.name;
    }
    function d(E) {
      return typeof E == "object" && E.is_development === !0;
    }
    return (E, $) => {
      var L, w, _, k, U, W, j, Q, P, T, O, M, x, V, A, K, G, z, ee, D, R, ae;
      return o(), S(xe, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (te) => E.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = ke(() => {
            }, ["stop"]))
          }, [
            e("div", _s, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (te) => E.$emit("close"))
              }, "✕")
            ]),
            e("div", $s, [
              e("div", Cs, [
                f(ze, { level: "4" }, {
                  default: l(() => [...$[8] || ($[8] = [
                    p("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(he, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", xs, [
                e("div", Ss, [
                  f(ze, { level: "4" }, {
                    default: l(() => [...$[9] || ($[9] = [
                      p("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (te) => E.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Is, [
                  e("div", Es, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ms, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", zs, [
                    (o(!0), s(q, null, se(r.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ls, a(te.name), 1),
                      e("span", Ts, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                g.value.length ? (o(), s("div", Rs, [
                  e("div", Ds, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ns, "BROKEN (UNCOMMITTED) (" + a(g.value.length) + ")", 1)
                  ]),
                  e("div", Us, [
                    (o(!0), s(q, null, se(g.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Os, a(te.name), 1),
                      e("span", Bs, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (w = (L = t.status.workflows) == null ? void 0 : L.new) != null && w.length ? (o(), s("div", Ps, [
                  e("div", Vs, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Fs, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", As, [
                    (o(!0), s(q, null, se(t.status.workflows.new, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Ws, a(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (k = (_ = t.status.workflows) == null ? void 0 : _.modified) != null && k.length ? (o(), s("div", Gs, [
                  e("div", js, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Hs, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", qs, [
                    (o(!0), s(q, null, se(t.status.workflows.modified, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Ks, a(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (W = (U = t.status.workflows) == null ? void 0 : U.deleted) != null && W.length ? (o(), s("div", Js, [
                  e("div", Qs, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ys, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Xs, [
                    (o(!0), s(q, null, se(t.status.workflows.deleted, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Zs, a(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                y.value.length ? (o(), s("div", en, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (te) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", tn, "SYNCED (" + a(y.value.length) + ")", 1),
                    e("span", on, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", sn, [
                    (o(!0), s(q, null, se(y.value, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", nn, a(te), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              v.value ? (o(), s("div", an, [
                f(ze, { level: "4" }, {
                  default: l(() => [...$[16] || ($[16] = [
                    p("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Q = (j = t.status.git_changes) == null ? void 0 : j.nodes_added) != null && Q.length ? (o(), s("div", ln, [
                  e("div", rn, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", dn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", cn, [
                    (o(!0), s(q, null, se(t.status.git_changes.nodes_added, (te) => (o(), s("div", {
                      key: C(te),
                      class: "change-item"
                    }, [
                      e("span", un, a(C(te)), 1),
                      d(te) ? (o(), s("span", mn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (T = (P = t.status.git_changes) == null ? void 0 : P.nodes_removed) != null && T.length ? (o(), s("div", vn, [
                  e("div", fn, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", gn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", hn, [
                    (o(!0), s(q, null, se(t.status.git_changes.nodes_removed, (te) => (o(), s("div", {
                      key: C(te),
                      class: "change-item"
                    }, [
                      e("span", pn, a(C(te)), 1),
                      d(te) ? (o(), s("span", yn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (O = t.status.git_changes) != null && O.workflow_changes ? (o(), s("div", wn, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", kn, [
                    e("div", bn, [
                      e("span", _n, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (o(), s("div", $n, [...$[20] || ($[20] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : u("", !0)
              ])) : u("", !0),
              (x = t.status.comparison) != null && x.is_synced ? u("", !0) : (o(), s("div", Cn, [
                e("div", xn, [
                  f(ze, { level: "4" }, {
                    default: l(() => [...$[21] || ($[21] = [
                      p("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (te) => E.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (A = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && A.length ? (o(), s("div", Sn, [
                  f(he, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", In, [
                    (o(!0), s(q, null, se(t.status.comparison.missing_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", En, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (G = (K = t.status.comparison) == null ? void 0 : K.extra_nodes) != null && G.length ? (o(), s("div", Mn, [
                  f(he, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", zn, [
                    (o(!0), s(q, null, se(t.status.comparison.extra_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Ln, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (ee = (z = t.status.comparison) == null ? void 0 : z.version_mismatches) != null && ee.length ? (o(), s("div", Tn, [
                  f(he, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (D = t.status.comparison) != null && D.packages_in_sync ? u("", !0) : (o(), s("div", Rn, [
                  f(he, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (R = t.status.comparison) == null ? void 0 : R.disabled_nodes) != null && ae.length ? (o(), s("div", Dn, [
                f(ze, { level: "4" }, {
                  default: l(() => [...$[23] || ($[23] = [
                    p("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Nn, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Un, [
                  (o(!0), s(q, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (o(), s("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + a(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", On, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Bn, [
                f(ze, { level: "4" }, {
                  default: l(() => [...$[25] || ($[25] = [
                    p("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Pn, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              i.value ? (o(), s("div", Vn, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", Fn, [
              f(Z, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (te) => E.$emit("close"))
              }, {
                default: l(() => [...$[29] || ($[29] = [
                  p(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), Wn = /* @__PURE__ */ X(An, [["__scopeId", "data-v-c67eed17"]]), Gn = { class: "health-section-header" }, jn = { class: "suggestions-content" }, Hn = { class: "suggestions-text" }, qn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Kn = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: c }) {
    const n = t, r = b(!1), g = b(!1);
    function y() {
      r.value = !0;
    }
    function h() {
      r.value = !1, i("view-workflows");
    }
    function v() {
      r.value = !1, i("view-nodes");
    }
    const i = c, m = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), C = B(() => n.status.has_changes), d = B(() => {
      const P = n.status.git_changes;
      return P.nodes_added.length > 0 || P.nodes_removed.length > 0 || P.workflow_changes;
    }), E = B(() => n.status.has_changes || m.value), $ = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), L = B(() => n.status.git_changes.has_other_changes), w = B(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter((T) => T.status === "broken")) || [];
    }), _ = B(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter(
        (T) => T.has_path_sync_issues && !T.has_issues
      )) || [];
    }), k = B(() => w.value.length > 0), U = B(() => k.value || _.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), W = B(() => {
      const P = [];
      return n.status.workflows.new.length > 0 && P.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && P.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && P.push(`${n.status.workflows.deleted.length} deleted`), P.length > 0 ? `${P.join(", ")} workflow${P.length === 1 && !P[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), j = B(() => {
      var O, M;
      const P = [], T = n.status.comparison;
      return (O = T.missing_nodes) != null && O.length && P.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (M = T.extra_nodes) != null && M.length && P.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), P.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${P.join(" and ")}.`;
    }), Q = B(() => {
      var O, M;
      const P = [], T = n.status.comparison;
      return (O = T.extra_nodes) != null && O.length && (T.extra_nodes.slice(0, 3).forEach((x) => {
        P.push(`Untracked: ${x}`);
      }), T.extra_nodes.length > 3 && P.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (M = T.missing_nodes) != null && M.length && (T.missing_nodes.slice(0, 3).forEach((x) => {
        P.push(`Missing: ${x}`);
      }), T.missing_nodes.length > 3 && P.push(`...and ${T.missing_nodes.length - 3} more missing`)), P;
    });
    return (P, T) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "STATUS" })
        ]),
        content: l(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[1] || (T[1] = (O) => g.value = !0),
            onMouseleave: T[2] || (T[2] = (O) => g.value = !1)
          }, [
            e("div", Gn, [
              f(ze, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...T[9] || (T[9] = [
                  p(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(wo, { name: "fade" }, {
                default: l(() => [
                  g.value ? (o(), S(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: l(() => [...T[10] || (T[10] = [
                      p(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            f(Xo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Bt({
              left: l(() => [
                t.status.workflows.new.length ? (o(), S(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), S(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), S(Pe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                f(Pe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (o(), S(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), S(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), S(Pe, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                L.value ? (o(), S(Pe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                C.value && !d.value && !L.value ? (o(), S(Pe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : u("", !0),
                C.value ? u("", !0) : (o(), S(Pe, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              E.value ? {
                name: "footer",
                fn: l(() => [
                  T[12] || (T[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", jn, [
                    e("span", Hn, a(W.value), 1),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[0] || (T[0] = (O) => P.$emit("commit-changes"))
                    }, {
                      default: l(() => [...T[11] || (T[11] = [
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
          t.status.is_detached_head ? (o(), S(nt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (O) => P.$emit("create-branch"))
              }, {
                default: l(() => [...T[13] || (T[13] = [
                  p(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          U.value ? (o(), s("div", qn, [
            f(ze, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...T[14] || (T[14] = [
                p(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            w.value.length > 0 ? (o(), S(nt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: w.value.map((O) => `${O.name} — ${O.issue_summary}`)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (O) => P.$emit("view-workflows"))
                }, {
                  default: l(() => [...T[15] || (T[15] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            _.value.length > 0 ? (o(), S(nt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${_.value.length} workflow${_.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: _.value.map((O) => `${O.name} — ${O.models_needing_path_sync_count} model path${O.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (O) => P.$emit("view-workflows"))
                }, {
                  default: l(() => [...T[16] || (T[16] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), S(nt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (O) => P.$emit("view-workflows"))
                }, {
                  default: l(() => [...T[17] || (T[17] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), S(nt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: j.value,
              items: Q.value
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: l(() => [...T[18] || (T[18] = [
                    p(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (O) => P.$emit("view-nodes"))
                }, {
                  default: l(() => [...T[19] || (T[19] = [
                    p(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : u("", !0),
          !U.value && !E.value ? (o(), S(Ue, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      f(Wn, {
        show: r.value,
        status: t.status,
        onClose: T[8] || (T[8] = (O) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: v
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Jn = /* @__PURE__ */ X(Kn, [["__scopeId", "data-v-698b3f43"]]), Qn = ["type", "value", "placeholder", "disabled"], Yn = /* @__PURE__ */ Y({
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
    const r = t, g = n, y = b(null);
    function h(v) {
      const i = v.target.value;
      g("update:modelValue", i);
    }
    return _e(() => {
      r.autoFocus && y.value && y.value.focus();
    }), c({
      focus: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.blur();
      }
    }), (v, i) => (o(), s("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        i[0] || (i[0] = Je((m) => v.$emit("enter"), ["enter"])),
        i[1] || (i[1] = Je((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (m) => v.$emit("focus")),
      onBlur: i[3] || (i[3] = (m) => v.$emit("blur"))
    }, null, 42, Qn));
  }
}), Ct = /* @__PURE__ */ X(Yn, [["__scopeId", "data-v-0380d08f"]]), Xn = { class: "branch-create-form" }, Zn = { class: "form-actions" }, ea = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, r = b(""), g = B(() => {
      const v = r.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function y() {
      g.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (v, i) => (o(), s("div", Xn, [
      f(Ct, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (m) => r.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Zn, [
        f(Z, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: l(() => [...i[1] || (i[1] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(Z, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: l(() => [...i[2] || (i[2] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ta = /* @__PURE__ */ X(ea, [["__scopeId", "data-v-7c500394"]]), oa = { class: "branch-list-item__indicator" }, sa = { class: "branch-list-item__name" }, na = {
  key: 0,
  class: "branch-list-item__actions"
}, aa = {
  key: 0,
  class: "branch-list-item__current-label"
}, la = /* @__PURE__ */ Y({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", oa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", sa, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), s("div", na, [
        ue(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", aa, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), ia = /* @__PURE__ */ X(la, [["__scopeId", "data-v-c6581a24"]]), ra = {
  key: 2,
  class: "branch-list"
}, da = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const n = c, r = b(!1);
    function g(h) {
      n("create", h), y();
    }
    function y() {
      r.value = !1;
    }
    return (h, v) => (o(), S(Ie, null, {
      header: l(() => [
        f(Ee, { title: "BRANCHES" }, {
          actions: l(() => [
            f(Z, {
              variant: "ghost",
              size: "sm",
              onClick: v[0] || (v[0] = (i) => r.value = !0),
              title: "Create new branch"
            }, {
              default: l(() => [...v[1] || (v[1] = [
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
      content: l(() => [
        r.value ? (o(), S(ta, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : u("", !0),
        t.branches.length === 0 ? (o(), S(Ue, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ra, [
          (o(!0), s(q, null, se(t.branches, (i) => (o(), S(ia, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: l(() => [
              i.is_current ? u("", !0) : (o(), S(Z, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (m) => h.$emit("switch", i.name)
              }, {
                default: l(() => [...v[2] || (v[2] = [
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
}), ca = /* @__PURE__ */ X(da, [["__scopeId", "data-v-763d6ec4"]]), ua = { class: "commit-list" }, ma = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (o(), s("div", ua, [
      ue(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), va = /* @__PURE__ */ X(ma, [["__scopeId", "data-v-8c5ee761"]]), fa = { class: "commit-hash" }, ga = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = B(() => c.hash.slice(0, c.length));
    return (r, g) => (o(), s("span", fa, a(n.value), 1));
  }
}), eo = /* @__PURE__ */ X(ga, [["__scopeId", "data-v-7c333cc6"]]), ha = { class: "commit-message" }, pa = { class: "commit-date" }, ya = /* @__PURE__ */ Y({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = c;
    function g() {
      n.clickable && r("click");
    }
    return (y, h) => (o(), s("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(eo, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ha, a(t.message), 1),
      e("span", pa, a(t.relativeDate), 1),
      y.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = ke(() => {
        }, ["stop"]))
      }, [
        ue(y.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), wa = /* @__PURE__ */ X(ya, [["__scopeId", "data-v-dd7c621b"]]), ka = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (o(), S(Ie, null, {
      header: l(() => [
        f(Ee, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (o(), S(Ue, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), S(va, { key: 1 }, {
          default: l(() => [
            (o(!0), s(q, null, se(t.commits, (r) => (o(), S(wa, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => c.$emit("select", r)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => c.$emit("checkout", r),
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
}), ba = /* @__PURE__ */ X(ka, [["__scopeId", "data-v-981c3c64"]]), R1 = [
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
  ...Array(12).fill(null).map((t, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
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
}, _a = [
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
], N1 = [
  ..._a,
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
function gt() {
  return !1;
}
function Se() {
  const t = b(!1), c = b(null);
  async function n(J, de) {
    var N;
    if (!((N = window.app) != null && N.api))
      throw new Error("ComfyUI API not available");
    const F = await window.app.api.fetchApi(J, de);
    if (!F.ok) {
      const oe = await F.json().catch(() => ({}));
      throw new Error(oe.error || oe.message || `Request failed: ${F.status}`);
    }
    return F.json();
  }
  async function r(J = !1) {
    return n(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(J, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: de })
    });
  }
  async function y(J = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${J}&offset=${de}`);
  }
  async function h(J) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function i(J) {
    return n(`/v2/comfygit/commit/${J}`);
  }
  async function m(J, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: de })
    });
  }
  async function C(J, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: de })
    });
  }
  async function d(J, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: de })
    });
  }
  async function E() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const J = await r();
        return [{
          name: J.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + J.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: J.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: J.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function $(J) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: J })
    });
  }
  async function L() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function w(J) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function _() {
    return n("/v2/workspace/environments/create_status");
  }
  async function k(J = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${J}`);
  }
  async function U(J) {
    return n(`/v2/workspace/environments/${J}`, {
      method: "DELETE"
    });
  }
  async function W(J = !1) {
    try {
      return n(J ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await r(J), F = [];
      return de.workflows.new.forEach((N) => {
        F.push({ name: N, status: "new", missing_nodes: 0, missing_models: 0, path: N });
      }), de.workflows.modified.forEach((N) => {
        F.push({ name: N, status: "modified", missing_nodes: 0, missing_models: 0, path: N });
      }), de.workflows.synced.forEach((N) => {
        F.push({ name: N, status: "synced", missing_nodes: 0, missing_models: 0, path: N });
      }), F;
    }
  }
  async function j(J) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/details`);
  }
  async function Q(J) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/resolve`, {
      method: "POST"
    });
  }
  async function P(J, de, F) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: F })
    });
  }
  async function T(J, de, F) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: F })
    });
  }
  async function O() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function M() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function x(J) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function V(J) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function A(J, de) {
    return n(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function K(J, de) {
    return n(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function G(J) {
    return n(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function z(J) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ee() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function D() {
    return n("/v2/workspace/models/directory");
  }
  async function R(J) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function ae() {
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
  async function te(J) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function $e(J, de) {
    try {
      const F = new URLSearchParams();
      return J && F.append("level", J), de && F.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${F}`);
    } catch {
      return [];
    }
  }
  async function le(J, de) {
    try {
      const F = new URLSearchParams();
      return J && F.append("level", J), de && F.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${F}`);
    } catch {
      return [];
    }
  }
  async function Ye() {
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
  async function pe(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/track-dev`, {
      method: "POST"
    });
  }
  async function ut(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function mt(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function vt(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function we() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ke(J, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: de })
    });
  }
  async function Fe(J) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function Oe(J, de, F) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: F })
    });
  }
  async function ft(J) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST"
    });
  }
  async function ve(J) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function Be(J = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: de
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: r,
    commit: g,
    getHistory: y,
    exportEnv: h,
    // Git Operations
    getBranches: v,
    getCommitDetail: i,
    checkout: m,
    createBranch: C,
    switchBranch: d,
    // Environment Management
    getEnvironments: E,
    switchEnvironment: $,
    getSwitchProgress: L,
    createEnvironment: w,
    getCreateProgress: _,
    getComfyUIReleases: k,
    deleteEnvironment: U,
    // Workflow Management
    getWorkflows: W,
    getWorkflowDetails: j,
    resolveWorkflow: Q,
    installWorkflowDeps: P,
    setModelImportance: T,
    // Model Management
    getEnvironmentModels: O,
    getWorkspaceModels: M,
    getModelDetails: x,
    openFileLocation: V,
    addModelSource: A,
    removeModelSource: K,
    deleteModel: G,
    downloadModel: z,
    scanWorkspaceModels: ee,
    getModelsDirectory: D,
    setModelsDirectory: R,
    // Settings
    getConfig: ae,
    updateConfig: te,
    // Debug/Logs
    getEnvironmentLogs: $e,
    getWorkspaceLogs: le,
    // Node Management
    getNodes: Ye,
    trackNodeAsDev: pe,
    installNode: ut,
    updateNode: mt,
    uninstallNode: vt,
    // Git Remotes
    getRemotes: we,
    addRemote: Ke,
    removeRemote: Fe,
    updateRemoteUrl: Oe,
    fetchRemote: ft,
    getRemoteSyncStatus: ve,
    // Environment Sync
    syncEnvironmentManually: Be
  };
}
const $a = { class: "base-modal-header" }, Ca = {
  key: 0,
  class: "base-modal-title"
}, xa = { class: "base-modal-body" }, Sa = {
  key: 0,
  class: "base-modal-loading"
}, Ia = {
  key: 1,
  class: "base-modal-error"
}, Ea = {
  key: 0,
  class: "base-modal-footer"
}, Ma = /* @__PURE__ */ Y({
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
    const n = t, r = c;
    function g() {
      n.closeOnOverlayClick && r("close");
    }
    function y(h) {
      h.key === "Escape" && r("close");
    }
    return _e(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), ko(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (h, v) => (o(), S(xe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", $a, [
            ue(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Ca, a(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (i) => h.$emit("close"))
            }, [...v[2] || (v[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : u("", !0)
          ]),
          e("div", xa, [
            t.loading ? (o(), s("div", Sa, "Loading...")) : t.error ? (o(), s("div", Ia, a(t.error), 1)) : ue(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", Ea, [
            ue(h.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), rt = /* @__PURE__ */ X(Ma, [["__scopeId", "data-v-2125a0e6"]]), za = ["type", "disabled"], La = {
  key: 0,
  class: "spinner"
}, Ta = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", La)) : u("", !0),
      ue(c.$slots, "default", {}, void 0, !0)
    ], 10, za));
  }
}), ie = /* @__PURE__ */ X(Ta, [["__scopeId", "data-v-f3452606"]]), Ra = {
  key: 0,
  class: "base-title-count"
}, Da = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (o(), S(Ut(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: l(() => [
        ue(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Ra, "(" + a(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bt = /* @__PURE__ */ X(Da, [["__scopeId", "data-v-5a01561d"]]), Na = ["value", "disabled"], Ua = {
  key: 0,
  value: "",
  disabled: ""
}, Oa = ["value"], Ba = {
  key: 0,
  class: "base-select-error"
}, Pa = /* @__PURE__ */ Y({
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
    function c(r) {
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
        t.placeholder ? (o(), s("option", Ua, a(t.placeholder), 1)) : u("", !0),
        (o(!0), s(q, null, se(t.options, (y) => (o(), s("option", {
          key: c(y),
          value: c(y)
        }, a(n(y)), 9, Oa))), 128))
      ], 42, Na),
      t.error ? (o(), s("span", Ba, a(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Va = /* @__PURE__ */ X(Pa, [["__scopeId", "data-v-7436d745"]]), Fa = { class: "popover-header" }, Aa = { class: "popover-title" }, Wa = { class: "popover-content" }, Ga = {
  key: 0,
  class: "popover-actions"
}, ja = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (o(), S(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Qe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Fa, [
            e("h4", Aa, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Wa, [
            ue(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), s("div", Ga, [
            ue(c.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), je = /* @__PURE__ */ X(ja, [["__scopeId", "data-v-42815ace"]]), Ha = { class: "detail-section" }, qa = {
  key: 0,
  class: "empty-message"
}, Ka = { class: "model-header" }, Ja = { class: "model-name" }, Qa = { class: "model-details" }, Ya = { class: "model-row" }, Xa = { class: "model-row" }, Za = { class: "label" }, el = {
  key: 0,
  class: "model-row model-row-nodes"
}, tl = { class: "node-list" }, ol = ["onClick"], sl = {
  key: 1,
  class: "model-row"
}, nl = { class: "value" }, al = {
  key: 0,
  class: "model-actions"
}, ll = { class: "detail-section" }, il = {
  key: 0,
  class: "empty-message"
}, rl = { class: "node-name" }, dl = {
  key: 0,
  class: "node-version"
}, cl = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, r = c, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: h } = Se(), v = b(null), i = b(!1), m = b(null), C = b(!1), d = b({}), E = b({}), $ = b(!1), L = b(/* @__PURE__ */ new Set()), w = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function _(M) {
      switch (M) {
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
    function k(M) {
      switch (M) {
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
    function U(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const x = M.hash || M.filename;
      return L.value.has(x) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function W(M) {
      return L.value.has(M);
    }
    function j(M) {
      L.value.has(M) ? L.value.delete(M) : L.value.add(M), L.value = new Set(L.value);
    }
    async function Q() {
      i.value = !0, m.value = null;
      try {
        v.value = await g(n.workflowName);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function P(M, x) {
      d.value[M] = x, C.value = !0;
    }
    async function T() {
      if (!C.value) {
        r("close");
        return;
      }
      i.value = !0, m.value = null;
      try {
        for (const [M, x] of Object.entries(d.value))
          await y(n.workflowName, M, x);
        r("refresh"), r("close");
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function O(M) {
      E.value[M] = !0, m.value = null;
      try {
        await h(n.workflowName, !0, !1), await Q();
      } catch (x) {
        m.value = x instanceof Error ? x.message : "Failed to install node";
      } finally {
        E.value[M] = !1;
      }
    }
    return _e(Q), (M, x) => (o(), s(q, null, [
      f(rt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: m.value || void 0,
        onClose: x[5] || (x[5] = (V) => r("close"))
      }, {
        body: l(() => [
          v.value ? (o(), s(q, { key: 0 }, [
            e("section", Ha, [
              f(bt, { variant: "section" }, {
                default: l(() => [
                  p("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (o(), s("div", qa, " No models used in this workflow ")) : u("", !0),
              (o(!0), s(q, null, se(v.value.models, (V) => (o(), s("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", Ka, [
                  x[7] || (x[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ja, a(V.filename), 1)
                ]),
                e("div", Qa, [
                  e("div", Ya, [
                    x[8] || (x[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", _(V.status)])
                    }, a(k(V.status)), 3)
                  ]),
                  e("div", Xa, [
                    e("span", Za, [
                      x[9] || (x[9] = p(" Importance: ", -1)),
                      f(Zt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: x[0] || (x[0] = (A) => $.value = !0)
                      })
                    ]),
                    f(Va, {
                      "model-value": d.value[V.filename] || V.importance,
                      options: w,
                      "onUpdate:modelValue": (A) => P(V.filename, A)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), s("div", el, [
                    x[10] || (x[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", tl, [
                      (o(!0), s(q, null, se(U(V), (A, K) => (o(), s("div", {
                        key: `${A.node_id}-${K}`,
                        class: "node-reference"
                      }, a(A.node_type) + " (Node #" + a(A.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (A) => j(V.hash || V.filename)
                      }, a(W(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, ol)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  V.size_mb ? (o(), s("div", sl, [
                    x[11] || (x[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", nl, a(V.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                V.status !== "available" ? (o(), s("div", al, [
                  V.status === "downloadable" ? (o(), S(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: x[1] || (x[1] = (A) => r("resolve"))
                  }, {
                    default: l(() => [...x[12] || (x[12] = [
                      p(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), S(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[2] || (x[2] = (A) => r("resolve"))
                  }, {
                    default: l(() => [...x[13] || (x[13] = [
                      p(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), S(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[3] || (x[3] = (A) => r("resolve"))
                  }, {
                    default: l(() => [...x[14] || (x[14] = [
                      p(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", ll, [
              f(bt, { variant: "section" }, {
                default: l(() => [
                  p("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (o(), s("div", il, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), s(q, null, se(v.value.nodes, (V) => (o(), s("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, a(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", rl, a(V.name), 1),
                V.version ? (o(), s("span", dl, "v" + a(V.version), 1)) : u("", !0),
                V.status === "missing" ? (o(), S(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: E.value[V.name],
                  onClick: (A) => O(V.name),
                  class: "node-install-btn"
                }, {
                  default: l(() => [...x[15] || (x[15] = [
                    p(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: l(() => [
          f(ie, {
            variant: "secondary",
            onClick: x[4] || (x[4] = (V) => r("close"))
          }, {
            default: l(() => [...x[16] || (x[16] = [
              p(" Close ", -1)
            ])]),
            _: 1
          }),
          C.value ? (o(), S(ie, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: l(() => [...x[17] || (x[17] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(je, {
        show: $.value,
        title: "Model Importance Levels",
        onClose: x[6] || (x[6] = (V) => $.value = !1)
      }, {
        content: l(() => [...x[18] || (x[18] = [
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
}), ul = /* @__PURE__ */ X(cl, [["__scopeId", "data-v-0b14d32e"]]), fe = Xt({
  items: [],
  status: "idle"
});
let Ve = null;
function to() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Lt(t) {
  return fe.items.find((c) => c.id === t);
}
async function at() {
  if (fe.status === "downloading") return;
  const t = fe.items.find((c) => c.status === "queued");
  if (!t) {
    fe.status = "idle";
    return;
  }
  fe.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ml(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    fe.status = "idle", at();
  }
}
async function ml(t) {
  return new Promise((c, n) => {
    Ve && (Ve.close(), Ve = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ve = g;
    let y = Date.now(), h = 0, v = !1;
    g.onmessage = (i) => {
      try {
        const m = JSON.parse(i.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const C = Date.now(), d = (C - y) / 1e3;
            if (d > 0.5) {
              const E = t.downloaded - h;
              if (t.speed = E / d, y = C, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, g.close(), Ve = null, c();
            break;
          case "error":
            v = !0, g.close(), Ve = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Ve = null, v || n(new Error("Connection lost"));
    };
  });
}
async function vl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (fe.items.some((g) => g.url === n.url && g.filename === n.filename))
        continue;
      const r = {
        id: to(),
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
      fe.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function xt() {
  function t(_) {
    for (const k of _) {
      if (fe.items.some(
        (j) => j.url === k.url && j.targetPath === k.targetPath && ["queued", "downloading", "paused", "completed"].includes(j.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${k.filename}`);
        continue;
      }
      const W = {
        id: to(),
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
      fe.items.push(W);
    }
    fe.status === "idle" && at();
  }
  async function c(_) {
    const k = Lt(_);
    if (k) {
      if (k.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(k.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), k.status = "failed", k.error = "Cancelled by user", fe.status = "idle", at();
      } else if (k.status === "queued") {
        const U = fe.items.findIndex((W) => W.id === _);
        U >= 0 && fe.items.splice(U, 1);
      }
    }
  }
  function n(_) {
    const k = Lt(_);
    !k || k.status !== "failed" || (k.status = "queued", k.error = void 0, k.progress = 0, k.downloaded = 0, fe.status === "idle" && at());
  }
  function r(_) {
    const k = Lt(_);
    !k || k.status !== "paused" || (k.status = "queued", fe.status === "idle" && at());
  }
  function g() {
    const _ = fe.items.filter((k) => k.status === "paused");
    for (const k of _)
      k.status = "queued";
    fe.status === "idle" && at();
  }
  function y(_) {
    const k = fe.items.findIndex((U) => U.id === _);
    k >= 0 && ["completed", "failed", "paused"].includes(fe.items[k].status) && fe.items.splice(k, 1);
  }
  function h() {
    fe.items = fe.items.filter((_) => _.status !== "completed");
  }
  function v() {
    fe.items = fe.items.filter((_) => _.status !== "failed");
  }
  const i = B(
    () => fe.items.find((_) => _.status === "downloading")
  ), m = B(
    () => fe.items.filter((_) => _.status === "queued")
  ), C = B(
    () => fe.items.filter((_) => _.status === "completed")
  ), d = B(
    () => fe.items.filter((_) => _.status === "failed")
  ), E = B(
    () => fe.items.filter((_) => _.status === "paused")
  ), $ = B(() => fe.items.length > 0), L = B(
    () => fe.items.filter((_) => _.status === "queued" || _.status === "downloading").length
  ), w = B(
    () => fe.items.some((_) => _.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: bo(fe),
    // Computed
    currentDownload: i,
    queuedItems: m,
    completedItems: C,
    failedItems: d,
    pausedItems: E,
    hasItems: $,
    activeCount: L,
    hasPaused: w,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: h,
    clearFailed: v,
    loadPendingDownloads: vl
  };
}
function fl() {
  const t = b(null), c = b(null), n = b([]), r = b([]), g = b(!1), y = b(null);
  async function h(k, U) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const W = await window.app.api.fetchApi(k, U);
    if (!W.ok) {
      const Q = await W.json().catch(() => ({})), P = Q.error || Q.message || `Request failed: ${W.status}`;
      throw new Error(P);
    }
    return W.json();
  }
  async function v(k) {
    g.value = !0, y.value = null;
    try {
      let U;
      return gt() || (U = await h(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = U, U;
    } catch (U) {
      const W = U instanceof Error ? U.message : "Unknown error occurred";
      throw y.value = W, U;
    } finally {
      g.value = !1;
    }
  }
  async function i(k, U, W) {
    g.value = !0, y.value = null;
    try {
      let j;
      if (!gt()) {
        const Q = Object.fromEntries(U), P = Object.fromEntries(W);
        j = await h(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: Q,
              model_choices: P
            })
          }
        );
      }
      return c.value = j, j;
    } catch (j) {
      const Q = j instanceof Error ? j.message : "Unknown error occurred";
      throw y.value = Q, j;
    } finally {
      g.value = !1;
    }
  }
  async function m(k, U = 10) {
    g.value = !0, y.value = null;
    try {
      let W;
      return gt() || (W = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: U })
        }
      )), n.value = W.results, W.results;
    } catch (W) {
      const j = W instanceof Error ? W.message : "Unknown error occurred";
      throw y.value = j, W;
    } finally {
      g.value = !1;
    }
  }
  async function C(k, U = 10) {
    g.value = !0, y.value = null;
    try {
      let W;
      return gt() || (W = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: U })
        }
      )), r.value = W.results, W.results;
    } catch (W) {
      const j = W instanceof Error ? W.message : "Unknown error occurred";
      throw y.value = j, W;
    } finally {
      g.value = !1;
    }
  }
  const d = Xt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function E() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0;
  }
  async function $(k) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0;
    try {
      let U;
      return gt() || (U = await h(
        `/v2/comfygit/workflow/${k}/install`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), d.nodesInstalled = U.nodes_installed, d.needsRestart = U.nodes_installed.length > 0, U;
    } catch (U) {
      const W = U instanceof Error ? U.message : "Failed to install nodes";
      throw d.installError = W, U;
    }
  }
  async function L(k, U, W) {
    E(), d.phase = "resolving", y.value = null;
    const j = Object.fromEntries(U), Q = Object.fromEntries(W);
    try {
      const P = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: j,
          model_choices: Q
        })
      });
      if (!P.ok)
        throw new Error(`Request failed: ${P.status}`);
      if (!P.body)
        throw new Error("No response body");
      const T = P.body.getReader(), O = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: x, value: V } = await T.read();
        if (x) break;
        M += O.decode(V, { stream: !0 });
        const A = M.split(`

`);
        M = A.pop() || "";
        for (const K of A) {
          if (!K.trim()) continue;
          const G = K.split(`
`);
          let z = "", ee = "";
          for (const D of G)
            D.startsWith("event: ") ? z = D.slice(7) : D.startsWith("data: ") && (ee = D.slice(6));
          if (ee)
            try {
              const D = JSON.parse(ee);
              w(z, D);
            } catch (D) {
              console.warn("Failed to parse SSE event:", D);
            }
        }
      }
    } catch (P) {
      const T = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = T, d.error = T, d.phase = "error", P;
    }
  }
  function w(k, U) {
    switch (k) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = U.total;
        break;
      case "file_start":
        d.currentFile = U.filename, d.currentFileIndex = U.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = U.downloaded, d.bytesTotal = U.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: U.filename,
          success: U.success,
          error: U.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = U.nodes_to_install || [], U.download_results && (d.completedFiles = U.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = U.message, d.phase = "error", y.value = U.message;
        break;
    }
  }
  function _(k, U) {
    const { addToQueue: W } = xt(), j = U.filter((Q) => Q.url && Q.target_path).map((Q) => ({
      workflow: k,
      filename: Q.filename,
      url: Q.url,
      targetPath: Q.target_path,
      size: Q.size || 0,
      type: "model"
    }));
    return j.length > 0 && W(j), j.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: r,
    isLoading: g,
    error: y,
    progress: d,
    // Methods
    analyzeWorkflow: v,
    applyResolution: i,
    applyResolutionWithProgress: L,
    installNodes: $,
    searchNodes: m,
    searchModels: C,
    resetProgress: E,
    queueModelDownloads: _
  };
}
const gl = { class: "resolution-stepper" }, hl = { class: "stepper-header" }, pl = ["onClick"], yl = {
  key: 0,
  class: "step-icon"
}, wl = {
  key: 1,
  class: "step-number"
}, kl = { class: "step-label" }, bl = {
  key: 0,
  class: "step-connector"
}, _l = { class: "stepper-content" }, $l = /* @__PURE__ */ Y({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: c }) {
    const n = t, r = c;
    function g(m) {
      var C;
      if ((C = n.stepStats) != null && C[m]) {
        const d = n.stepStats[m];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(m);
    }
    function y(m) {
      var C;
      if ((C = n.stepStats) != null && C[m]) {
        const d = n.stepStats[m];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function h(m) {
      return g(m) ? "state-complete" : y(m) ? "state-partial" : "state-pending";
    }
    function v(m) {
      return !1;
    }
    function i(m) {
      r("step-change", m);
    }
    return (m, C) => (o(), s("div", gl, [
      e("div", hl, [
        (o(!0), s(q, null, se(t.steps, (d, E) => (o(), s("div", {
          key: d.id,
          class: ne(["step", {
            active: t.currentStep === d.id,
            completed: g(d.id),
            "in-progress": y(d.id),
            disabled: v(d.id)
          }]),
          onClick: ($) => i(d.id)
        }, [
          e("div", {
            class: ne(["step-indicator", h(d.id)])
          }, [
            g(d.id) ? (o(), s("span", yl, "✓")) : (o(), s("span", wl, a(E + 1), 1))
          ], 2),
          e("div", kl, a(d.label), 1),
          E < t.steps.length - 1 ? (o(), s("div", bl)) : u("", !0)
        ], 10, pl))), 128))
      ]),
      e("div", _l, [
        ue(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Cl = /* @__PURE__ */ X($l, [["__scopeId", "data-v-2a7b3af8"]]), xl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = B(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), g = B(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (y, h) => (o(), s("span", {
      class: ne(["confidence-badge", r.value, t.size])
    }, a(g.value), 3));
  }
}), Ft = /* @__PURE__ */ X(xl, [["__scopeId", "data-v-17ec4b80"]]), Sl = { class: "node-info" }, Il = { class: "node-info-text" }, El = { class: "item-body" }, Ml = {
  key: 0,
  class: "resolved-state"
}, zl = {
  key: 1,
  class: "multiple-options"
}, Ll = { class: "options-list" }, Tl = ["onClick"], Rl = ["name", "value", "checked", "onChange"], Dl = { class: "option-content" }, Nl = { class: "option-header" }, Ul = { class: "option-package-id" }, Ol = {
  key: 0,
  class: "option-title"
}, Bl = { class: "option-meta" }, Pl = {
  key: 0,
  class: "installed-badge"
}, Vl = { class: "action-buttons" }, Fl = {
  key: 2,
  class: "unresolved"
}, Al = { class: "action-buttons" }, Wl = /* @__PURE__ */ Y({
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
  setup(t, { emit: c }) {
    const n = t, r = c, g = B(() => !!n.choice);
    B(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), B(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    });
    const y = B(() => {
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
    function h(v) {
      r("option-selected", v);
    }
    return (v, i) => (o(), s("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", Sl, [
        e("span", Il, [
          i[7] || (i[7] = p("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, a(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", El, [
        g.value ? (o(), s("div", Ml, [
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (m) => r("clear-choice"))
          }, {
            default: l(() => [...i[8] || (i[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", zl, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ll, [
            (o(!0), s(q, null, se(t.options, (m, C) => (o(), s("label", {
              key: m.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === C }]),
              onClick: (d) => h(C)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: C,
                checked: t.selectedOptionIndex === C,
                onChange: (d) => h(C)
              }, null, 40, Rl),
              e("div", Dl, [
                e("div", Nl, [
                  e("span", Ul, a(m.package_id), 1),
                  f(Ft, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (o(), s("div", Ol, a(m.title), 1)) : u("", !0),
                e("div", Bl, [
                  m.is_installed ? (o(), s("span", Pl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, Tl))), 128))
          ]),
          e("div", Vl, [
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (m) => r("search"))
            }, {
              default: l(() => [...i[9] || (i[9] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (m) => r("manual-entry"))
            }, {
              default: l(() => [...i[10] || (i[10] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (m) => r("mark-optional"))
            }, {
              default: l(() => [...i[11] || (i[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Fl, [
          i[16] || (i[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Al, [
            f(ie, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (m) => r("search"))
            }, {
              default: l(() => [...i[13] || (i[13] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (m) => r("manual-entry"))
            }, {
              default: l(() => [...i[14] || (i[14] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (m) => r("mark-optional"))
            }, {
              default: l(() => [...i[15] || (i[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Gl = /* @__PURE__ */ X(Wl, [["__scopeId", "data-v-e02629e7"]]), jl = { class: "item-navigator" }, Hl = { class: "nav-item-info" }, ql = ["title"], Kl = { class: "nav-controls" }, Jl = { class: "nav-arrows" }, Ql = ["disabled"], Yl = ["disabled"], Xl = { class: "nav-position" }, Zl = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (r, g) => (o(), s("div", jl, [
      e("div", Hl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, ql)
      ]),
      e("div", Kl, [
        e("div", Jl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (y) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Ql),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (y) => n("next")),
            title: "Next item"
          }, " → ", 8, Yl)
        ]),
        e("span", Xl, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), oo = /* @__PURE__ */ X(Zl, [["__scopeId", "data-v-74af7920"]]), ei = ["type", "value", "placeholder", "disabled"], ti = {
  key: 0,
  class: "base-input-error"
}, oi = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("div", {
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = Je((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Je((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ei),
      t.error ? (o(), s("span", ti, a(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ X(oi, [["__scopeId", "data-v-9ba02cdc"]]), si = { class: "node-resolution-step" }, ni = { class: "step-header" }, ai = { class: "stat-badge" }, li = {
  key: 1,
  class: "step-body"
}, ii = {
  key: 2,
  class: "empty-state"
}, ri = { class: "node-search-modal" }, di = { class: "node-modal-body" }, ci = {
  key: 0,
  class: "node-search-results"
}, ui = ["onClick"], mi = { class: "node-result-header" }, vi = { class: "node-result-package-id" }, fi = {
  key: 0,
  class: "node-result-description"
}, gi = {
  key: 1,
  class: "node-no-results"
}, hi = {
  key: 2,
  class: "node-searching"
}, pi = { class: "node-manual-entry-modal" }, yi = { class: "node-modal-body" }, wi = { class: "node-modal-actions" }, ki = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b(0), y = b(!1), h = b(!1), v = b(""), i = b(""), m = b([]), C = b(!1), d = B(() => n.nodes[g.value]), E = B(() => n.nodes.filter((V) => n.nodeChoices.has(V.node_type)).length), $ = B(() => {
      var A;
      if (!d.value) return "not-found";
      const V = n.nodeChoices.get(d.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (A = d.value.options) != null && A.length ? "ambiguous" : "not-found";
    }), L = B(() => {
      var A;
      if (!d.value) return;
      const V = n.nodeChoices.get(d.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return V.package_id ? `→ ${V.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (A = d.value.options) != null && A.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function w(V) {
      V >= 0 && V < n.nodes.length && (g.value = V);
    }
    function _() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function k() {
      d.value && r("skip", d.value.node_type);
    }
    function U(V) {
      d.value && r("option-selected", d.value.node_type, V);
    }
    function W() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function j() {
      d.value && (v.value = d.value.node_type, y.value = !0);
    }
    function Q() {
      i.value = "", h.value = !0;
    }
    function P() {
      y.value = !1, v.value = "", m.value = [];
    }
    function T() {
      h.value = !1, i.value = "";
    }
    function O() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function M(V) {
      d.value && (r("manual-entry", d.value.node_type, V.package_id), P());
    }
    function x() {
      !d.value || !i.value.trim() || (r("manual-entry", d.value.node_type, i.value.trim()), T());
    }
    return (V, A) => {
      var K, G;
      return o(), s("div", si, [
        e("div", ni, [
          A[4] || (A[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", ai, a(E.value) + "/" + a(t.nodes.length) + " resolved", 1)
        ]),
        d.value ? (o(), S(oo, {
          key: 0,
          "item-name": d.value.node_type,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: A[0] || (A[0] = (z) => w(g.value - 1)),
          onNext: A[1] || (A[1] = (z) => w(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        d.value ? (o(), s("div", li, [
          f(Gl, {
            "node-type": d.value.node_type,
            "has-multiple-options": !!((K = d.value.options) != null && K.length),
            options: d.value.options,
            choice: (G = t.nodeChoices) == null ? void 0 : G.get(d.value.node_type),
            status: $.value,
            "status-label": L.value,
            onMarkOptional: _,
            onSkip: k,
            onManualEntry: Q,
            onSearch: j,
            onOptionSelected: U,
            onClearChoice: W
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", ii, [...A[5] || (A[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), S(xe, { to: "body" }, [
          y.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(P, ["self"])
          }, [
            e("div", ri, [
              e("div", { class: "node-modal-header" }, [
                A[6] || (A[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", di, [
                f(Ne, {
                  modelValue: v.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (z) => v.value = z),
                  placeholder: "Search by node type, package name...",
                  onInput: O
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), s("div", ci, [
                  (o(!0), s(q, null, se(m.value, (z) => (o(), s("div", {
                    key: z.package_id,
                    class: "node-search-result-item",
                    onClick: (ee) => M(z)
                  }, [
                    e("div", mi, [
                      e("code", vi, a(z.package_id), 1),
                      z.match_confidence ? (o(), S(Ft, {
                        key: 0,
                        confidence: z.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    z.description ? (o(), s("div", fi, a(z.description), 1)) : u("", !0)
                  ], 8, ui))), 128))
                ])) : v.value && !C.value ? (o(), s("div", gi, ' No packages found matching "' + a(v.value) + '" ', 1)) : u("", !0),
                C.value ? (o(), s("div", hi, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), S(xe, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(T, ["self"])
          }, [
            e("div", pi, [
              e("div", { class: "node-modal-header" }, [
                A[7] || (A[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", yi, [
                f(Ne, {
                  modelValue: i.value,
                  "onUpdate:modelValue": A[3] || (A[3] = (z) => i.value = z),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", wi, [
                  f(ie, {
                    variant: "secondary",
                    onClick: T
                  }, {
                    default: l(() => [...A[8] || (A[8] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(ie, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: x
                  }, {
                    default: l(() => [...A[9] || (A[9] = [
                      p(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : u("", !0)
        ]))
      ]);
    };
  }
}), bi = /* @__PURE__ */ X(ki, [["__scopeId", "data-v-4fb196b1"]]), _i = { class: "node-info" }, $i = { class: "node-info-text" }, Ci = { class: "item-body" }, xi = {
  key: 0,
  class: "resolved-state"
}, Si = {
  key: 1,
  class: "multiple-options"
}, Ii = { class: "options-list" }, Ei = ["onClick"], Mi = ["name", "value", "checked", "onChange"], zi = { class: "option-content" }, Li = { class: "option-header" }, Ti = { class: "option-filename" }, Ri = { class: "option-meta" }, Di = { class: "option-size" }, Ni = { class: "option-category" }, Ui = { class: "option-path" }, Oi = { class: "action-buttons" }, Bi = {
  key: 2,
  class: "unresolved"
}, Pi = { class: "action-buttons" }, Vi = /* @__PURE__ */ Y({
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
    const n = t, r = c, g = B(() => !!n.choice);
    B(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.action;
    }), B(() => {
      var i, m;
      return ((m = (i = n.choice) == null ? void 0 : i.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const y = B(() => {
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
    function h(i) {
      r("option-selected", i);
    }
    function v(i) {
      if (!i) return "Unknown";
      const m = i / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, m) => (o(), s("div", {
      class: ne(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", _i, [
        e("span", $i, [
          m[7] || (m[7] = p("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, a(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", Ci, [
        g.value ? (o(), s("div", xi, [
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (C) => r("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Si, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Ii, [
            (o(!0), s(q, null, se(t.options, (C, d) => (o(), s("label", {
              key: C.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (E) => h(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (E) => h(d)
              }, null, 40, Mi),
              e("div", zi, [
                e("div", Li, [
                  e("span", Ti, a(C.model.filename), 1),
                  f(Ft, {
                    confidence: C.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ri, [
                  e("span", Di, a(v(C.model.size)), 1),
                  e("span", Ni, a(C.model.category), 1)
                ]),
                e("div", Ui, a(C.model.relative_path), 1)
              ])
            ], 10, Ei))), 128))
          ]),
          e("div", Oi, [
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (C) => r("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (C) => r("download-url"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (C) => r("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Bi, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Pi, [
            f(ie, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (C) => r("search"))
            }, {
              default: l(() => [...m[13] || (m[13] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (C) => r("download-url"))
            }, {
              default: l(() => [...m[14] || (m[14] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (C) => r("mark-optional"))
            }, {
              default: l(() => [...m[15] || (m[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Fi = /* @__PURE__ */ X(Vi, [["__scopeId", "data-v-8a82fefa"]]), Ai = { class: "model-resolution-step" }, Wi = { class: "step-header" }, Gi = { class: "step-info" }, ji = { class: "step-title" }, Hi = { class: "step-description" }, qi = { class: "stat-badge" }, Ki = {
  key: 1,
  class: "step-body"
}, Ji = {
  key: 2,
  class: "empty-state"
}, Qi = { class: "model-search-modal" }, Yi = { class: "model-modal-body" }, Xi = {
  key: 0,
  class: "model-search-results"
}, Zi = ["onClick"], er = { class: "model-result-header" }, tr = { class: "model-result-filename" }, or = { class: "model-result-meta" }, sr = { class: "model-result-category" }, nr = { class: "model-result-size" }, ar = {
  key: 0,
  class: "model-result-path"
}, lr = {
  key: 1,
  class: "model-no-results"
}, ir = {
  key: 2,
  class: "model-searching"
}, rr = { class: "model-download-url-modal" }, dr = { class: "model-modal-body" }, cr = { class: "model-input-group" }, ur = { class: "model-input-group" }, mr = { class: "model-modal-actions" }, vr = /* @__PURE__ */ Y({
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
    function r(D) {
      var R;
      return D && ((R = n[D]) == null ? void 0 : R[0]) || null;
    }
    const g = t, y = c, h = b(0), v = b(!1), i = b(!1), m = b(""), C = b(""), d = b(""), E = b([]), $ = b(!1), L = B(() => g.models[h.value]), w = B(() => g.models.some((D) => D.is_download_intent)), _ = B(() => g.models.filter(
      (D) => g.modelChoices.has(D.filename) || D.is_download_intent
    ).length), k = B(() => {
      var R;
      if (!L.value) return "";
      const D = r((R = L.value.reference) == null ? void 0 : R.node_type);
      return D ? `${D}/${L.value.filename}` : "";
    }), U = B(() => {
      var R;
      if (!L.value) return "not-found";
      const D = g.modelChoices.get(L.value.filename);
      if (D)
        switch (D.action) {
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
      return L.value.is_download_intent ? "download" : (R = L.value.options) != null && R.length ? "ambiguous" : "not-found";
    }), W = B(() => {
      var R, ae;
      if (!L.value) return;
      const D = g.modelChoices.get(L.value.filename);
      if (D)
        switch (D.action) {
          case "select":
            return (R = D.selected_model) != null && R.filename ? `→ ${D.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (ae = L.value.options) != null && ae.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function j(D) {
      D >= 0 && D < g.models.length && (h.value = D);
    }
    function Q() {
      L.value && y("mark-optional", L.value.filename);
    }
    function P() {
      L.value && y("skip", L.value.filename);
    }
    function T(D) {
      L.value && y("option-selected", L.value.filename, D);
    }
    function O() {
      L.value && y("clear-choice", L.value.filename);
    }
    function M() {
      L.value && (m.value = L.value.filename, v.value = !0);
    }
    function x() {
      L.value && (C.value = L.value.download_source || "", d.value = L.value.target_path || k.value, i.value = !0);
    }
    function V() {
      v.value = !1, m.value = "", E.value = [];
    }
    function A() {
      i.value = !1, C.value = "", d.value = "";
    }
    function K() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function G(D) {
      L.value && V();
    }
    function z() {
      !L.value || !C.value.trim() || (y("download-url", L.value.filename, C.value.trim(), d.value.trim() || void 0), A());
    }
    function ee(D) {
      if (!D) return "Unknown";
      const R = D / (1024 * 1024 * 1024);
      return R >= 1 ? `${R.toFixed(2)} GB` : `${(D / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (D, R) => {
      var ae, te, $e;
      return o(), s("div", Ai, [
        e("div", Wi, [
          e("div", Gi, [
            e("h3", ji, a(w.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Hi, a(w.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", qi, a(_.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        L.value ? (o(), S(oo, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: R[0] || (R[0] = (le) => j(h.value - 1)),
          onNext: R[1] || (R[1] = (le) => j(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        L.value ? (o(), s("div", Ki, [
          f(Fi, {
            filename: L.value.filename,
            "node-type": ((ae = L.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((te = L.value.options) != null && te.length),
            options: L.value.options,
            choice: ($e = t.modelChoices) == null ? void 0 : $e.get(L.value.filename),
            status: U.value,
            "status-label": W.value,
            onMarkOptional: Q,
            onSkip: P,
            onDownloadUrl: x,
            onSearch: M,
            onOptionSelected: T,
            onClearChoice: O
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Ji, [...R[5] || (R[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), S(xe, { to: "body" }, [
          v.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(V, ["self"])
          }, [
            e("div", Qi, [
              e("div", { class: "model-modal-header" }, [
                R[6] || (R[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Yi, [
                f(Ne, {
                  modelValue: m.value,
                  "onUpdate:modelValue": R[2] || (R[2] = (le) => m.value = le),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                E.value.length > 0 ? (o(), s("div", Xi, [
                  (o(!0), s(q, null, se(E.value, (le) => (o(), s("div", {
                    key: le.hash,
                    class: "model-search-result-item",
                    onClick: (Ye) => G()
                  }, [
                    e("div", er, [
                      e("code", tr, a(le.filename), 1)
                    ]),
                    e("div", or, [
                      e("span", sr, a(le.category), 1),
                      e("span", nr, a(ee(le.size)), 1)
                    ]),
                    le.relative_path ? (o(), s("div", ar, a(le.relative_path), 1)) : u("", !0)
                  ], 8, Zi))), 128))
                ])) : m.value && !$.value ? (o(), s("div", lr, ' No models found matching "' + a(m.value) + '" ', 1)) : u("", !0),
                $.value ? (o(), s("div", ir, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), S(xe, { to: "body" }, [
          i.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(A, ["self"])
          }, [
            e("div", rr, [
              e("div", { class: "model-modal-header" }, [
                R[7] || (R[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", dr, [
                e("div", cr, [
                  R[8] || (R[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Ne, {
                    modelValue: C.value,
                    "onUpdate:modelValue": R[3] || (R[3] = (le) => C.value = le),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", ur, [
                  R[9] || (R[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Ne, {
                    modelValue: d.value,
                    "onUpdate:modelValue": R[4] || (R[4] = (le) => d.value = le),
                    placeholder: k.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", mr, [
                  f(ie, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: l(() => [...R[10] || (R[10] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(ie, {
                    variant: "primary",
                    disabled: !C.value.trim() || !d.value.trim(),
                    onClick: z
                  }, {
                    default: l(() => [...R[11] || (R[11] = [
                      p(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : u("", !0)
        ]))
      ]);
    };
  }
}), fr = /* @__PURE__ */ X(vr, [["__scopeId", "data-v-c6acbada"]]), gr = { class: "applying-step" }, hr = {
  key: 0,
  class: "phase-content"
}, pr = {
  key: 1,
  class: "phase-content"
}, yr = { class: "phase-description" }, wr = { class: "install-list" }, kr = {
  key: 2,
  class: "phase-content"
}, br = { class: "completion-summary" }, _r = {
  key: 0,
  class: "summary-item success"
}, $r = { class: "summary-text" }, Cr = {
  key: 1,
  class: "summary-item error"
}, xr = { class: "summary-text" }, Sr = {
  key: 2,
  class: "restart-prompt"
}, Ir = {
  key: 3,
  class: "phase-content error"
}, Er = { class: "error-message" }, Mr = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart"],
  setup(t) {
    return (c, n) => (o(), s("div", gr, [
      t.progress.phase === "resolving" ? (o(), s("div", hr, [...n[1] || (n[1] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "installing" ? (o(), s("div", pr, [
        n[3] || (n[3] = e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Installing Node Packages")
        ], -1)),
        e("p", yr, "Installing " + a(t.progress.nodesToInstall.length) + " package" + a(t.progress.nodesToInstall.length > 1 ? "s" : "") + "...", 1),
        e("div", wr, [
          (o(!0), s(q, null, se(t.progress.nodesToInstall, (r) => (o(), s("div", {
            key: r,
            class: "install-item"
          }, [
            n[2] || (n[2] = e("span", { class: "install-icon" }, "⬇", -1)),
            e("code", null, a(r), 1)
          ]))), 128))
        ])
      ])) : t.progress.phase === "complete" ? (o(), s("div", kr, [
        n[9] || (n[9] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", br, [
          t.progress.nodesInstalled.length > 0 ? (o(), s("div", _r, [
            n[4] || (n[4] = e("span", { class: "summary-icon" }, "✓", -1)),
            e("span", $r, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
          ])) : u("", !0),
          t.progress.installError ? (o(), s("div", Cr, [
            n[5] || (n[5] = e("span", { class: "summary-icon" }, "✗", -1)),
            e("span", xr, "Installation error: " + a(t.progress.installError), 1)
          ])) : u("", !0),
          n[7] || (n[7] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          n[8] || (n[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
          t.progress.needsRestart ? (o(), s("div", Sr, [
            n[6] || (n[6] = e("div", { class: "restart-warning" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("div", { class: "warning-content" }, [
                e("strong", null, "Restart Required"),
                e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
              ])
            ], -1)),
            e("button", {
              class: "restart-button",
              onClick: n[0] || (n[0] = (r) => c.$emit("restart"))
            }, " Restart ComfyUI ")
          ])) : u("", !0)
        ])
      ])) : t.progress.phase === "error" ? (o(), s("div", Ir, [
        n[10] || (n[10] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", Er, a(t.progress.error), 1)
      ])) : u("", !0)
    ]));
  }
}), zr = /* @__PURE__ */ X(Mr, [["__scopeId", "data-v-eb46c564"]]), Lr = {
  key: 0,
  class: "loading-state"
}, Tr = {
  key: 1,
  class: "wizard-content"
}, Rr = {
  key: 0,
  class: "step-content"
}, Dr = { class: "analysis-summary" }, Nr = { class: "analysis-header" }, Ur = { class: "summary-description" }, Or = { class: "stats-grid" }, Br = { class: "stat-card" }, Pr = { class: "stat-items" }, Vr = {
  key: 0,
  class: "stat-item success"
}, Fr = { class: "stat-count" }, Ar = {
  key: 1,
  class: "stat-item info"
}, Wr = { class: "stat-count" }, Gr = {
  key: 2,
  class: "stat-item warning"
}, jr = { class: "stat-count" }, Hr = {
  key: 3,
  class: "stat-item error"
}, qr = { class: "stat-count" }, Kr = { class: "stat-card" }, Jr = { class: "stat-items" }, Qr = { class: "stat-item success" }, Yr = { class: "stat-count" }, Xr = {
  key: 0,
  class: "stat-item info"
}, Zr = { class: "stat-count" }, ed = {
  key: 1,
  class: "stat-item warning"
}, td = { class: "stat-count" }, od = {
  key: 2,
  class: "stat-item error"
}, sd = { class: "stat-count" }, nd = {
  key: 0,
  class: "status-message warning"
}, ad = { class: "status-text" }, ld = {
  key: 1,
  class: "status-message info"
}, id = { class: "status-text" }, rd = {
  key: 2,
  class: "status-message info"
}, dd = { class: "status-text" }, cd = {
  key: 3,
  class: "status-message success"
}, ud = {
  key: 3,
  class: "step-content"
}, md = { class: "review-summary" }, vd = { class: "review-stats" }, fd = { class: "review-stat" }, gd = { class: "stat-value" }, hd = { class: "review-stat" }, pd = { class: "stat-value" }, yd = { class: "review-stat" }, wd = { class: "stat-value" }, kd = { class: "review-stat" }, bd = { class: "stat-value" }, _d = {
  key: 0,
  class: "review-section"
}, $d = { class: "section-title" }, Cd = { class: "review-items" }, xd = { class: "item-name" }, Sd = {
  key: 1,
  class: "review-section"
}, Id = { class: "section-title" }, Ed = { class: "review-items" }, Md = { class: "item-name" }, zd = { class: "item-choice" }, Ld = {
  key: 0,
  class: "choice-badge install"
}, Td = {
  key: 1,
  class: "choice-badge optional"
}, Rd = {
  key: 2,
  class: "choice-badge skip"
}, Dd = {
  key: 1,
  class: "choice-badge pending"
}, Nd = {
  key: 2,
  class: "review-section"
}, Ud = { class: "section-title" }, Od = { class: "review-items" }, Bd = { class: "item-name" }, Pd = { class: "item-choice" }, Vd = {
  key: 0,
  class: "choice-badge install"
}, Fd = {
  key: 1,
  class: "choice-badge download"
}, Ad = {
  key: 2,
  class: "choice-badge optional"
}, Wd = {
  key: 3,
  class: "choice-badge skip"
}, Gd = {
  key: 4,
  class: "choice-badge skip"
}, jd = {
  key: 1,
  class: "choice-badge download"
}, Hd = {
  key: 2,
  class: "choice-badge pending"
}, qd = {
  key: 3,
  class: "no-choices"
}, Kd = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, r = c, { analyzeWorkflow: g, applyResolution: y, installNodes: h, queueModelDownloads: v, progress: i, resetProgress: m } = fl(), { loadPendingDownloads: C } = xt(), d = b(null), E = b(!1), $ = b(!1), L = b(null), w = b("analysis"), _ = b([]), k = b(/* @__PURE__ */ new Map()), U = b(/* @__PURE__ */ new Map()), W = B(() => {
      const F = [
        { id: "analysis", label: "Analysis" }
      ];
      return Q.value && F.push({ id: "nodes", label: "Nodes" }), (P.value || T.value) && F.push({ id: "models", label: "Models" }), F.push({ id: "review", label: "Review" }), w.value === "applying" && F.push({ id: "applying", label: "Applying" }), F;
    }), j = B(() => d.value ? d.value.stats.needs_user_input : !1), Q = B(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), P = B(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), T = B(() => d.value ? d.value.stats.download_intents > 0 : !1), O = B(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), M = B(() => d.value ? d.value.nodes.resolved.length - d.value.stats.nodes_needing_installation : 0), x = B(() => {
      if (!d.value) return [];
      const F = d.value.nodes.resolved.filter((oe) => !oe.is_installed), N = /* @__PURE__ */ new Set();
      return F.filter((oe) => N.has(oe.package.package_id) ? !1 : (N.add(oe.package.package_id), !0));
    }), V = B(() => d.value ? d.value.models.resolved.filter((F) => F.match_type === "download_intent").map((F) => ({
      filename: F.reference.widget_value,
      reference: F.reference,
      is_download_intent: !0,
      resolved_model: F.model,
      download_source: F.download_source,
      target_path: F.target_path
    })) : []), A = B(() => {
      if (!d.value) return [];
      const F = d.value.nodes.unresolved.map((oe) => ({
        node_type: oe.reference.node_type,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), N = d.value.nodes.ambiguous.map((oe) => ({
        node_type: oe.reference.node_type,
        has_multiple_options: !0,
        options: oe.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...F, ...N];
    }), K = B(() => {
      if (!d.value) return [];
      const F = d.value.models.unresolved.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), N = d.value.models.ambiguous.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        has_multiple_options: !0,
        options: oe.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...F, ...N];
    }), G = B(() => {
      const F = K.value, N = V.value.map((oe) => ({
        filename: oe.filename,
        reference: oe.reference,
        is_download_intent: !0,
        resolved_model: oe.resolved_model,
        download_source: oe.download_source,
        target_path: oe.target_path,
        options: void 0
      }));
      return [...F, ...N];
    }), z = B(() => {
      let F = x.value.length;
      for (const N of k.value.values())
        N.action === "install" && F++;
      for (const N of U.value.values())
        N.action === "select" && F++;
      return F;
    }), ee = B(() => {
      let F = 0;
      for (const N of U.value.values())
        N.action === "download" && F++;
      return F;
    }), D = B(() => {
      let F = 0;
      for (const N of k.value.values())
        N.action === "optional" && F++;
      for (const N of U.value.values())
        N.action === "optional" && F++;
      return F;
    }), R = B(() => {
      let F = 0;
      for (const N of k.value.values())
        N.action === "skip" && F++;
      for (const N of U.value.values())
        N.action === "skip" && F++;
      for (const N of A.value)
        k.value.has(N.node_type) || F++;
      for (const N of K.value)
        U.value.has(N.filename) || F++;
      return F;
    }), ae = B(() => {
      const F = {};
      if (F.analysis = { resolved: 1, total: 1 }, Q.value) {
        const N = A.value.length, oe = A.value.filter(
          (ge) => k.value.has(ge.node_type)
        ).length;
        F.nodes = { resolved: oe, total: N };
      }
      if (P.value || T.value) {
        const N = G.value.length, oe = G.value.filter(
          (ge) => U.value.has(ge.filename) || ge.is_download_intent
        ).length;
        F.models = { resolved: oe, total: N };
      }
      if (F.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const N = i.totalFiles || 1, oe = i.completedFiles.length;
        F.applying = { resolved: oe, total: N };
      }
      return F;
    });
    function te(F) {
      w.value = F;
    }
    function $e() {
      const F = W.value.findIndex((N) => N.id === w.value);
      F > 0 && (w.value = W.value[F - 1].id);
    }
    function le() {
      const F = W.value.findIndex((N) => N.id === w.value);
      F < W.value.length - 1 && (w.value = W.value[F + 1].id);
    }
    async function Ye() {
      E.value = !0, L.value = null;
      try {
        d.value = await g(n.workflowName);
      } catch (F) {
        L.value = F instanceof Error ? F.message : "Failed to analyze workflow";
      } finally {
        E.value = !1;
      }
    }
    function pe() {
      _.value.includes("analysis") || _.value.push("analysis"), Q.value ? w.value = "nodes" : P.value || T.value ? w.value = "models" : w.value = "review";
    }
    function ut(F) {
      k.value.set(F, { action: "optional" });
    }
    function mt(F) {
      k.value.set(F, { action: "skip" });
    }
    function vt(F, N) {
      var ge;
      const oe = A.value.find((Le) => Le.node_type === F);
      (ge = oe == null ? void 0 : oe.options) != null && ge[N] && k.value.set(F, {
        action: "install",
        package_id: oe.options[N].package_id
      });
    }
    function we(F, N) {
      k.value.set(F, {
        action: "install",
        package_id: N
      });
    }
    function Ke(F) {
      k.value.delete(F);
    }
    function Fe(F) {
      U.value.set(F, { action: "optional" });
    }
    function Oe(F) {
      U.value.set(F, { action: "skip" });
    }
    function ft(F, N) {
      var ge;
      const oe = K.value.find((Le) => Le.filename === F);
      (ge = oe == null ? void 0 : oe.options) != null && ge[N] && U.value.set(F, {
        action: "select",
        selected_model: oe.options[N].model
      });
    }
    function ve(F, N, oe) {
      U.value.set(F, {
        action: "download",
        url: N,
        target_path: oe
      });
    }
    function Be(F) {
      U.value.delete(F);
    }
    async function J() {
      $.value = !0, L.value = null, m(), i.phase = "resolving", w.value = "applying";
      try {
        const F = await y(n.workflowName, k.value, U.value);
        F.models_to_download && F.models_to_download.length > 0 && v(n.workflowName, F.models_to_download);
        const N = [
          ...F.nodes_to_install || [],
          ...x.value.map((oe) => oe.package.package_id)
        ];
        i.nodesToInstall = [...new Set(N)], i.nodesToInstall.length > 0 && await h(n.workflowName), i.phase = "complete", await C(), i.needsRestart || setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (F) {
        L.value = F instanceof Error ? F.message : "Failed to apply resolution", i.error = L.value, i.phase = "error";
      } finally {
        $.value = !1;
      }
    }
    function de() {
      r("refresh"), r("restart"), r("close");
    }
    return _e(Ye), (F, N) => (o(), S(rt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: E.value,
      error: L.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (oe) => r("close"))
    }, {
      body: l(() => [
        E.value && !d.value ? (o(), s("div", Lr, [...N[2] || (N[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", Tr, [
          f(Cl, {
            steps: W.value,
            "current-step": w.value,
            "completed-steps": _.value,
            "step-stats": ae.value,
            onStepChange: te
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", Rr, [
            e("div", Dr, [
              e("div", Nr, [
                N[3] || (N[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Ur, " Found " + a(d.value.stats.total_nodes) + " nodes and " + a(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Or, [
                e("div", Br, [
                  N[12] || (N[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Pr, [
                    M.value > 0 ? (o(), s("div", Vr, [
                      N[4] || (N[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Fr, a(M.value), 1),
                      N[5] || (N[5] = e("span", { class: "stat-label" }, "installed", -1))
                    ])) : u("", !0),
                    d.value.stats.nodes_needing_installation > 0 ? (o(), s("div", Ar, [
                      N[6] || (N[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Wr, a(d.value.stats.nodes_needing_installation), 1),
                      N[7] || (N[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : u("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", Gr, [
                      N[8] || (N[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", jr, a(d.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", Hr, [
                      N[10] || (N[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", qr, a(d.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", Kr, [
                  N[21] || (N[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Jr, [
                    e("div", Qr, [
                      N[13] || (N[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Yr, a(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      N[14] || (N[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", Xr, [
                      N[15] || (N[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Zr, a(d.value.stats.download_intents), 1),
                      N[16] || (N[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : u("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", ed, [
                      N[17] || (N[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", td, a(d.value.models.ambiguous.length), 1),
                      N[18] || (N[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", od, [
                      N[19] || (N[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", sd, a(d.value.models.unresolved.length), 1),
                      N[20] || (N[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              j.value ? (o(), s("div", nd, [
                N[22] || (N[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", ad, a(A.value.length + K.value.length) + " items need your input", 1)
              ])) : O.value ? (o(), s("div", ld, [
                N[23] || (N[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", id, a(d.value.stats.packages_needing_installation) + " package" + a(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(d.value.stats.nodes_needing_installation) + " node type" + a(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(T.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (o(), s("div", rd, [
                N[24] || (N[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", dd, a(d.value.stats.download_intents) + " model" + a(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", cd, [...N[25] || (N[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          w.value === "nodes" ? (o(), S(bi, {
            key: 1,
            nodes: A.value,
            "node-choices": k.value,
            onMarkOptional: ut,
            onSkip: mt,
            onOptionSelected: vt,
            onManualEntry: we,
            onClearChoice: Ke
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          w.value === "models" ? (o(), S(fr, {
            key: 2,
            models: G.value,
            "model-choices": U.value,
            onMarkOptional: Fe,
            onSkip: Oe,
            onOptionSelected: ft,
            onDownloadUrl: ve,
            onClearChoice: Be
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          w.value === "review" ? (o(), s("div", ud, [
            e("div", md, [
              N[31] || (N[31] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", vd, [
                e("div", fd, [
                  e("span", gd, a(z.value), 1),
                  N[26] || (N[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", hd, [
                  e("span", pd, a(ee.value), 1),
                  N[27] || (N[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", yd, [
                  e("span", wd, a(D.value), 1),
                  N[28] || (N[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", kd, [
                  e("span", bd, a(R.value), 1),
                  N[29] || (N[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              x.value.length > 0 ? (o(), s("div", _d, [
                e("h4", $d, "Node Packages to Install (" + a(x.value.length) + ")", 1),
                e("div", Cd, [
                  (o(!0), s(q, null, se(x.value, (oe) => (o(), s("div", {
                    key: oe.package.package_id,
                    class: "review-item"
                  }, [
                    e("code", xd, a(oe.package.package_id), 1),
                    N[30] || (N[30] = e("div", { class: "item-choice" }, [
                      e("span", { class: "choice-badge install" }, "Will Install")
                    ], -1))
                  ]))), 128))
                ])
              ])) : u("", !0),
              A.value.length > 0 ? (o(), s("div", Sd, [
                e("h4", Id, "Node Choices (" + a(A.value.length) + ")", 1),
                e("div", Ed, [
                  (o(!0), s(q, null, se(A.value, (oe) => {
                    var ge, Le, Xe, Ae;
                    return o(), s("div", {
                      key: oe.node_type,
                      class: "review-item"
                    }, [
                      e("code", Md, a(oe.node_type), 1),
                      e("div", zd, [
                        k.value.has(oe.node_type) ? (o(), s(q, { key: 0 }, [
                          ((ge = k.value.get(oe.node_type)) == null ? void 0 : ge.action) === "install" ? (o(), s("span", Ld, a((Le = k.value.get(oe.node_type)) == null ? void 0 : Le.package_id), 1)) : ((Xe = k.value.get(oe.node_type)) == null ? void 0 : Xe.action) === "optional" ? (o(), s("span", Td, " Optional ")) : ((Ae = k.value.get(oe.node_type)) == null ? void 0 : Ae.action) === "skip" ? (o(), s("span", Rd, " Skip ")) : u("", !0)
                        ], 64)) : (o(), s("span", Dd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              G.value.length > 0 ? (o(), s("div", Nd, [
                e("h4", Ud, "Models (" + a(G.value.length) + ")", 1),
                e("div", Od, [
                  (o(!0), s(q, null, se(G.value, (oe) => {
                    var ge, Le, Xe, Ae, st, St, Ze;
                    return o(), s("div", {
                      key: oe.filename,
                      class: "review-item"
                    }, [
                      e("code", Bd, a(oe.filename), 1),
                      e("div", Pd, [
                        U.value.has(oe.filename) ? (o(), s(q, { key: 0 }, [
                          ((ge = U.value.get(oe.filename)) == null ? void 0 : ge.action) === "select" ? (o(), s("span", Vd, a((Xe = (Le = U.value.get(oe.filename)) == null ? void 0 : Le.selected_model) == null ? void 0 : Xe.filename), 1)) : ((Ae = U.value.get(oe.filename)) == null ? void 0 : Ae.action) === "download" ? (o(), s("span", Fd, " Download ")) : ((st = U.value.get(oe.filename)) == null ? void 0 : st.action) === "optional" ? (o(), s("span", Ad, " Optional ")) : ((St = U.value.get(oe.filename)) == null ? void 0 : St.action) === "skip" ? (o(), s("span", Wd, " Skip ")) : ((Ze = U.value.get(oe.filename)) == null ? void 0 : Ze.action) === "cancel_download" ? (o(), s("span", Gd, " Cancel Download ")) : u("", !0)
                        ], 64)) : oe.is_download_intent ? (o(), s("span", jd, " Pending Download ")) : (o(), s("span", Hd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              x.value.length === 0 && A.value.length === 0 && G.value.length === 0 ? (o(), s("div", qd, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0),
          w.value === "applying" ? (o(), S(zr, {
            key: 4,
            progress: me(i),
            onRestart: de
          }, null, 8, ["progress"])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: l(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), S(ie, {
          key: 0,
          variant: "secondary",
          disabled: $.value,
          onClick: $e
        }, {
          default: l(() => [...N[32] || (N[32] = [
            p(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        N[35] || (N[35] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || me(i).phase === "complete" || me(i).phase === "error" ? (o(), S(ie, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (oe) => r("close"))
        }, {
          default: l(() => [
            p(a(me(i).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : u("", !0),
        w.value === "analysis" ? (o(), S(ie, {
          key: 2,
          variant: "primary",
          disabled: E.value,
          onClick: pe
        }, {
          default: l(() => [
            p(a(j.value || T.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        w.value === "nodes" ? (o(), S(ie, {
          key: 3,
          variant: "primary",
          onClick: le
        }, {
          default: l(() => [
            p(a(P.value || T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        w.value === "models" ? (o(), S(ie, {
          key: 4,
          variant: "primary",
          onClick: le
        }, {
          default: l(() => [...N[33] || (N[33] = [
            p(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        w.value === "review" ? (o(), S(ie, {
          key: 5,
          variant: "primary",
          disabled: $.value,
          loading: $.value,
          onClick: J
        }, {
          default: l(() => [...N[34] || (N[34] = [
            p(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Jd = /* @__PURE__ */ X(Kd, [["__scopeId", "data-v-85146f4c"]]), Qd = { class: "search-input-wrapper" }, Yd = ["value", "placeholder"], Xd = /* @__PURE__ */ Y({
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
    const n = t, r = c, g = b(null);
    let y;
    function h(i) {
      const m = i.target.value;
      n.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", m);
      }, n.debounce)) : r("update:modelValue", m);
    }
    function v() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = g.value) == null || i.focus();
    }
    return _e(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (i, m) => (o(), s("div", Qd, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Je(v, ["escape"])
      }, null, 40, Yd),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Zd = /* @__PURE__ */ X(Xd, [["__scopeId", "data-v-266f857a"]]), ec = { class: "search-bar" }, tc = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (o(), s("div", ec, [
      f(Zd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), dt = /* @__PURE__ */ X(tc, [["__scopeId", "data-v-3d51bbfd"]]), oc = { class: "section-group" }, sc = {
  key: 0,
  class: "section-content"
}, nc = /* @__PURE__ */ Y({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b(n.initiallyExpanded);
    function y() {
      n.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (h, v) => (o(), s("section", oc, [
      f(ze, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: l(() => [
          p(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), s("div", sc, [
        ue(h.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), be = /* @__PURE__ */ X(nc, [["__scopeId", "data-v-c48e33ed"]]), ac = { class: "item-header" }, lc = {
  key: 0,
  class: "item-icon"
}, ic = { class: "item-info" }, rc = {
  key: 0,
  class: "item-title"
}, dc = {
  key: 1,
  class: "item-subtitle"
}, cc = {
  key: 0,
  class: "item-details"
}, uc = {
  key: 1,
  class: "item-actions"
}, mc = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = B(() => n.status ? `status-${n.status}` : "");
    return (g, y) => (o(), s("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (h) => t.clickable && g.$emit("click"))
    }, [
      e("div", ac, [
        g.$slots.icon ? (o(), s("span", lc, [
          ue(g.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", ic, [
          g.$slots.title ? (o(), s("div", rc, [
            ue(g.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          g.$slots.subtitle ? (o(), s("div", dc, [
            ue(g.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      g.$slots.details ? (o(), s("div", cc, [
        ue(g.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      g.$slots.actions ? (o(), s("div", uc, [
        ue(g.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ X(mc, [["__scopeId", "data-v-cc435e0e"]]), vc = { class: "loading-state" }, fc = { class: "loading-message" }, gc = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (o(), s("div", vc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", fc, a(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ X(gc, [["__scopeId", "data-v-ad8436c9"]]), hc = { class: "error-state" }, pc = { class: "error-message" }, yc = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (o(), s("div", hc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", pc, a(t.message), 1),
      t.retry ? (o(), S(Z, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          p(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ X(yc, [["__scopeId", "data-v-5397be48"]]), wc = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getWorkflows: g } = Se(), y = b([]), h = b(!1), v = b(null), i = b(""), m = b(!0), C = b(!1), d = b(!1), E = b(!1), $ = b(null), L = B(
      () => y.value.filter((z) => z.status === "broken")
    ), w = B(
      () => y.value.filter((z) => z.status === "new")
    ), _ = B(
      () => y.value.filter((z) => z.status === "modified")
    ), k = B(
      () => y.value.filter((z) => z.status === "synced")
    ), U = B(() => {
      if (!i.value.trim()) return y.value;
      const z = i.value.toLowerCase();
      return y.value.filter((ee) => ee.name.toLowerCase().includes(z));
    }), W = B(
      () => L.value.filter(
        (z) => !i.value.trim() || z.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), j = B(
      () => w.value.filter(
        (z) => !i.value.trim() || z.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), Q = B(
      () => _.value.filter(
        (z) => !i.value.trim() || z.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), P = B(
      () => k.value.filter(
        (z) => !i.value.trim() || z.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), T = B(
      () => C.value ? P.value : P.value.slice(0, 5)
    );
    async function O(z = !1) {
      h.value = !0, v.value = null;
      try {
        y.value = await g(z);
      } catch (ee) {
        v.value = ee instanceof Error ? ee.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    c({ loadWorkflows: O });
    function M(z) {
      $.value = z, d.value = !0;
    }
    function x(z) {
      $.value = z, E.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function A() {
      r("refresh");
    }
    function K(z) {
      const ee = [];
      return z.missing_nodes > 0 && ee.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && ee.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.pending_downloads && z.pending_downloads > 0 && ee.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), ee.length > 0 ? ee.join(", ") : "Has issues";
    }
    function G(z) {
      const ee = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state;
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync` : ee || "Unknown";
    }
    return _e(O), (z, ee) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "WORKFLOWS" }, {
            actions: l(() => [
              L.value.length > 0 ? (o(), S(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: l(() => [...ee[8] || (ee[8] = [
                  p(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          f(dt, {
            modelValue: i.value,
            "onUpdate:modelValue": ee[0] || (ee[0] = (D) => i.value = D),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          h.value ? (o(), S(He, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), S(qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            W.value.length ? (o(), S(be, {
              key: 0,
              title: "BROKEN",
              count: W.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(W.value, (D) => (o(), S(Ce, {
                  key: D.name,
                  status: "broken"
                }, {
                  icon: l(() => [...ee[9] || (ee[9] = [
                    p("⚠", -1)
                  ])]),
                  title: l(() => [
                    p(a(D.name), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(K(D)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => x(D.name)
                    }, {
                      default: l(() => [...ee[10] || (ee[10] = [
                        p(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => M(D.name)
                    }, {
                      default: l(() => [...ee[11] || (ee[11] = [
                        p(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            j.value.length ? (o(), S(be, {
              key: 1,
              title: "NEW",
              count: j.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(j.value, (D) => (o(), S(Ce, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    p(a(D.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    p(a(D.name), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(G(D)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => M(D.name)
                    }, {
                      default: l(() => [...ee[12] || (ee[12] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            Q.value.length ? (o(), S(be, {
              key: 2,
              title: "MODIFIED",
              count: Q.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(Q.value, (D) => (o(), S(Ce, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...ee[13] || (ee[13] = [
                    p("⚡", -1)
                  ])]),
                  title: l(() => [
                    p(a(D.name), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(G(D)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => M(D.name)
                    }, {
                      default: l(() => [...ee[14] || (ee[14] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            P.value.length ? (o(), S(be, {
              key: 3,
              title: "SYNCED",
              count: P.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ee[2] || (ee[2] = (D) => m.value = D)
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(T.value, (D) => (o(), S(Ce, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    p(a(D.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    p(a(D.name), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(G(D)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => M(D.name)
                    }, {
                      default: l(() => [...ee[15] || (ee[15] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !C.value && P.value.length > 5 ? (o(), S(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ee[1] || (ee[1] = (D) => C.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    p(" View all " + a(P.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            U.value.length ? u("", !0) : (o(), S(Ue, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && $.value ? (o(), S(ul, {
        key: 0,
        "workflow-name": $.value,
        onClose: ee[3] || (ee[3] = (D) => d.value = !1),
        onResolve: ee[4] || (ee[4] = (D) => x($.value)),
        onRefresh: ee[5] || (ee[5] = (D) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0),
      E.value && $.value ? (o(), S(Jd, {
        key: 1,
        "workflow-name": $.value,
        onClose: ee[6] || (ee[6] = (D) => E.value = !1),
        onInstall: A,
        onRefresh: ee[7] || (ee[7] = (D) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), kc = /* @__PURE__ */ X(wc, [["__scopeId", "data-v-080576c0"]]), bc = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ X(bc, [["__scopeId", "data-v-ccb7816e"]]), _c = {
  key: 0,
  class: "model-details"
}, $c = { class: "detail-section" }, Cc = { class: "detail-row" }, xc = { class: "detail-value mono" }, Sc = { class: "detail-row" }, Ic = { class: "detail-value mono" }, Ec = { class: "detail-row" }, Mc = { class: "detail-value mono" }, zc = { class: "detail-row" }, Lc = { class: "detail-value" }, Tc = { class: "detail-row" }, Rc = { class: "detail-value" }, Dc = { class: "detail-row" }, Nc = { class: "detail-value" }, Uc = { class: "detail-section" }, Oc = { class: "section-header" }, Bc = {
  key: 0,
  class: "locations-list"
}, Pc = { class: "location-path mono" }, Vc = {
  key: 0,
  class: "location-modified"
}, Fc = ["onClick"], Ac = {
  key: 1,
  class: "empty-state"
}, Wc = { class: "detail-section" }, Gc = { class: "section-header" }, jc = {
  key: 0,
  class: "sources-list"
}, Hc = { class: "source-type" }, qc = ["href"], Kc = ["disabled", "onClick"], Jc = {
  key: 1,
  class: "empty-state"
}, Qc = { class: "add-source-form" }, Yc = ["disabled"], Xc = {
  key: 2,
  class: "source-error"
}, Zc = {
  key: 3,
  class: "source-success"
}, eu = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: r, addModelSource: g, removeModelSource: y, openFileLocation: h } = Se(), v = b(null), i = b(!0), m = b(null), C = b(""), d = b(!1), E = b(null), $ = b(null), L = b(null), w = b(null);
    let _ = null;
    function k(O, M = "success", x = 2e3) {
      _ && clearTimeout(_), w.value = { message: O, type: M }, _ = setTimeout(() => {
        w.value = null;
      }, x);
    }
    function U(O) {
      if (!O) return "Unknown";
      const M = 1024 * 1024 * 1024, x = 1024 * 1024;
      return O >= M ? `${(O / M).toFixed(1)} GB` : O >= x ? `${(O / x).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function W(O) {
      navigator.clipboard.writeText(O), k("Copied to clipboard!");
    }
    async function j(O) {
      try {
        await h(O), k("Opening file location...");
      } catch {
        k("Failed to open location", "error");
      }
    }
    async function Q() {
      if (!(!C.value.trim() || !v.value)) {
        d.value = !0, $.value = null, L.value = null;
        try {
          await g(v.value.hash, C.value.trim()), L.value = "Source added successfully!", C.value = "", await T();
        } catch (O) {
          $.value = O instanceof Error ? O.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function P(O) {
      if (v.value) {
        E.value = O, $.value = null, L.value = null;
        try {
          await y(v.value.hash, O), k("Source removed"), await T();
        } catch (M) {
          $.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          E.value = null;
        }
      }
    }
    async function T() {
      i.value = !0, m.value = null;
      try {
        v.value = await r(n.identifier);
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to load model details";
      } finally {
        i.value = !1;
      }
    }
    return _e(T), (O, M) => {
      var x;
      return o(), s(q, null, [
        f(rt, {
          title: `Model Details: ${((x = v.value) == null ? void 0 : x.filename) || "Loading..."}`,
          size: "lg",
          loading: i.value,
          error: m.value,
          onClose: M[5] || (M[5] = (V) => O.$emit("close"))
        }, {
          body: l(() => {
            var V, A, K, G;
            return [
              v.value ? (o(), s("div", _c, [
                e("section", $c, [
                  e("div", Cc, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", xc, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (z) => W(v.value.hash))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", Sc, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Ic, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (z) => W(v.value.blake3))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", Ec, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Mc, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (z) => W(v.value.sha256))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", zc, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Lc, a(U(v.value.size)), 1)
                  ]),
                  e("div", Tc, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Rc, a(v.value.category), 1)
                  ]),
                  e("div", Dc, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Nc, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Uc, [
                  e("h4", Oc, "Locations (" + a(((V = v.value.locations) == null ? void 0 : V.length) || 0) + ")", 1),
                  (A = v.value.locations) != null && A.length ? (o(), s("div", Bc, [
                    (o(!0), s(q, null, se(v.value.locations, (z, ee) => (o(), s("div", {
                      key: ee,
                      class: "location-item"
                    }, [
                      e("span", Pc, a(z.path), 1),
                      z.modified ? (o(), s("span", Vc, "Modified: " + a(z.modified), 1)) : u("", !0),
                      z.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (D) => j(z.path)
                      }, " Open File Location ", 8, Fc)) : u("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Ac, "No locations found"))
                ]),
                e("section", Wc, [
                  e("h4", Gc, "Download Sources (" + a(((K = v.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                  (G = v.value.sources) != null && G.length ? (o(), s("div", jc, [
                    (o(!0), s(q, null, se(v.value.sources, (z, ee) => (o(), s("div", {
                      key: ee,
                      class: "source-item"
                    }, [
                      e("span", Hc, a(z.type) + ":", 1),
                      e("a", {
                        href: z.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(z.url), 9, qc),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: E.value === z.url,
                        onClick: (D) => P(z.url)
                      }, a(E.value === z.url ? "..." : "×"), 9, Kc)
                    ]))), 128))
                  ])) : (o(), s("div", Jc, " No download sources configured ")),
                  e("div", Qc, [
                    kt(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (z) => C.value = z),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [_o, C.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !C.value.trim() || d.value,
                      onClick: Q
                    }, a(d.value ? "Adding..." : "Add Source"), 9, Yc)
                  ]),
                  $.value ? (o(), s("p", Xc, a($.value), 1)) : u("", !0),
                  L.value ? (o(), s("p", Zc, a(L.value), 1)) : u("", !0)
                ])
              ])) : u("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (V) => O.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), S(xe, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: ne(["toast", w.value.type])
          }, a(w.value.message), 3)) : u("", !0)
        ]))
      ], 64);
    };
  }
}), so = /* @__PURE__ */ X(eu, [["__scopeId", "data-v-f15cbb56"]]), tu = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: g } = Se(), y = b([]), h = b([]), v = b("production"), i = b(!1), m = b(null), C = b(""), d = b(!1), E = b(null);
    function $() {
      d.value = !1, n("navigate", "model-index");
    }
    const L = B(
      () => y.value.reduce((T, O) => T + (O.size || 0), 0)
    ), w = B(() => {
      if (!C.value.trim()) return y.value;
      const T = C.value.toLowerCase();
      return y.value.filter((O) => O.filename.toLowerCase().includes(T));
    }), _ = B(() => {
      if (!C.value.trim()) return h.value;
      const T = C.value.toLowerCase();
      return h.value.filter((O) => O.filename.toLowerCase().includes(T));
    }), k = B(() => {
      const T = {};
      for (const M of w.value) {
        const x = M.type || "other";
        T[x] || (T[x] = []), T[x].push(M);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([M], [x]) => {
        const V = O.indexOf(M), A = O.indexOf(x);
        return V >= 0 && A >= 0 ? V - A : V >= 0 ? -1 : A >= 0 ? 1 : M.localeCompare(x);
      }).map(([M, x]) => ({ type: M, models: x }));
    });
    function U(T) {
      if (!T) return "Unknown";
      const O = T / (1024 * 1024);
      return O >= 1024 ? `${(O / 1024).toFixed(1)} GB` : `${O.toFixed(0)} MB`;
    }
    function W(T) {
      E.value = T.hash || T.filename;
    }
    function j(T) {
      n("navigate", "model-index");
    }
    function Q(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function P() {
      i.value = !0, m.value = null;
      try {
        const T = await r();
        y.value = T, h.value = [];
        const O = await g();
        v.value = O.environment || "production";
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return _e(P), (T, O) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (M) => d.value = !0)
          })
        ]),
        search: l(() => [
          f(dt, {
            modelValue: C.value,
            "onUpdate:modelValue": O[1] || (O[1] = (M) => C.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          i.value ? (o(), S(He, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (o(), S(qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            y.value.length ? (o(), S(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                p(" Total: " + a(y.value.length) + " models • " + a(U(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(q, null, se(k.value, (M) => (o(), S(be, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(M.models, (x) => (o(), S(Ce, {
                  key: x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...O[4] || (O[4] = [
                    p("📦", -1)
                  ])]),
                  title: l(() => [
                    p(a(x.filename), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(U(x.size)), 1)
                  ]),
                  details: l(() => [
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
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => W(x)
                    }, {
                      default: l(() => [...O[5] || (O[5] = [
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
            _.value.length ? (o(), S(be, {
              key: 1,
              title: "MISSING",
              count: _.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(_.value, (M) => (o(), S(Ce, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...O[6] || (O[6] = [
                    p("⚠", -1)
                  ])]),
                  title: l(() => [
                    p(a(M.filename), 1)
                  ]),
                  subtitle: l(() => [...O[7] || (O[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var x;
                    return [
                      f(he, {
                        label: "Required by:",
                        value: ((x = M.workflow_names) == null ? void 0 : x.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (x) => Q(M.filename)
                    }, {
                      default: l(() => [...O[8] || (O[8] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (x) => j(M.filename)
                    }, {
                      default: l(() => [...O[9] || (O[9] = [
                        p(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !w.value.length && !_.value.length ? (o(), S(Ue, {
              key: 2,
              icon: "📭",
              message: C.value ? `No models match '${C.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: d.value,
        title: "About Environment Models",
        onClose: O[2] || (O[2] = (M) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            O[10] || (O[10] = p(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            O[11] || (O[11] = p(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: $
          }, {
            default: l(() => [...O[12] || (O[12] = [
              p(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (o(), S(so, {
        key: 0,
        identifier: E.value,
        onClose: O[3] || (O[3] = (M) => E.value = null)
      }, null, 8, ["identifier"])) : u("", !0)
    ], 64));
  }
}), ou = /* @__PURE__ */ X(tu, [["__scopeId", "data-v-cb4f12b3"]]), su = {
  key: 0,
  class: "indexing-progress"
}, nu = { class: "progress-info" }, au = { class: "progress-label" }, lu = { class: "progress-count" }, iu = { class: "progress-bar" }, ru = { class: "modal-content" }, du = { class: "modal-header" }, cu = { class: "modal-body" }, uu = { class: "input-group" }, mu = { class: "current-path" }, vu = { class: "input-group" }, fu = { class: "modal-footer" }, gu = { class: "modal-content" }, hu = { class: "modal-header" }, pu = { class: "modal-body" }, yu = { class: "input-group" }, wu = { class: "input-group" }, ku = { class: "modal-footer" }, bu = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: g,
      setModelsDirectory: y
    } = Se(), { addToQueue: h } = xt(), v = c, i = b([]), m = b(!1), C = b(!1), d = b(null), E = b(""), $ = b(!1), L = b(null), w = b(!1), _ = b(null), k = b(""), U = b(!1), W = b(!1), j = b(""), Q = b(""), P = b(null), T = B(
      () => i.value.reduce((D, R) => D + (R.size || 0), 0)
    ), O = B(() => {
      if (!E.value.trim()) return i.value;
      const D = E.value.toLowerCase();
      return i.value.filter((R) => {
        const ae = R, te = R.sha256 || ae.sha256_hash || "";
        return R.filename.toLowerCase().includes(D) || te.toLowerCase().includes(D);
      });
    }), M = B(() => {
      const D = {};
      for (const ae of O.value) {
        const te = ae.type || "other";
        D[te] || (D[te] = []), D[te].push(ae);
      }
      const R = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([ae], [te]) => {
        const $e = R.indexOf(ae), le = R.indexOf(te);
        return $e >= 0 && le >= 0 ? $e - le : $e >= 0 ? -1 : le >= 0 ? 1 : ae.localeCompare(te);
      }).map(([ae, te]) => ({ type: ae, models: te }));
    });
    function x(D) {
      if (!D) return "Unknown";
      const R = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return D >= R ? `${(D / R).toFixed(1)} GB` : D >= ae ? `${(D / ae).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function V(D) {
      L.value = D.hash || D.filename;
    }
    async function A() {
      C.value = !0, d.value = null;
      try {
        const D = await r();
        await z(), D.changes > 0 && console.log(`Scan complete: ${D.changes} changes detected`);
      } catch (D) {
        d.value = D instanceof Error ? D.message : "Failed to scan models";
      } finally {
        C.value = !1;
      }
    }
    async function K() {
      if (k.value.trim()) {
        U.value = !0, d.value = null;
        try {
          const D = await y(k.value.trim());
          _.value = D.path, w.value = !1, k.value = "", await z(), console.log(`Directory changed: ${D.models_indexed} models indexed`), v("refresh");
        } catch (D) {
          d.value = D instanceof Error ? D.message : "Failed to change directory";
        } finally {
          U.value = !1;
        }
      }
    }
    function G() {
      if (!j.value.trim() || !Q.value.trim()) return;
      const D = Q.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: D,
        url: j.value.trim(),
        targetPath: Q.value.trim()
      }]), j.value = "", Q.value = "", W.value = !1;
    }
    async function z() {
      m.value = !0, d.value = null;
      try {
        i.value = await n();
      } catch (D) {
        d.value = D instanceof Error ? D.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function ee() {
      try {
        const D = await g();
        _.value = D.path;
      } catch {
      }
    }
    return _e(() => {
      z(), ee();
    }), (D, R) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: R[2] || (R[2] = (ae) => $.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                disabled: C.value,
                onClick: A
              }, {
                default: l(() => [
                  p(a(C.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: R[0] || (R[0] = (ae) => w.value = !0)
              }, {
                default: l(() => [...R[15] || (R[15] = [
                  p(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: R[1] || (R[1] = (ae) => W.value = !0)
              }, {
                default: l(() => [...R[16] || (R[16] = [
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
        search: l(() => [
          P.value ? (o(), s("div", su, [
            e("div", nu, [
              e("span", au, a(P.value.message), 1),
              e("span", lu, a(P.value.current) + "/" + a(P.value.total), 1)
            ]),
            e("div", iu, [
              e("div", {
                class: "progress-fill",
                style: Qe({ width: `${P.value.current / P.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : u("", !0),
          f(dt, {
            modelValue: E.value,
            "onUpdate:modelValue": R[3] || (R[3] = (ae) => E.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value || P.value ? (o(), S(He, {
            key: 0,
            message: P.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), S(qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            i.value.length ? (o(), S(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                p(" Total: " + a(i.value.length) + " models • " + a(x(T.value)), 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(q, null, se(M.value, (ae) => (o(), S(be, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(ae.models, (te) => (o(), S(Ce, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...R[17] || (R[17] = [
                    p("📦", -1)
                  ])]),
                  title: l(() => [
                    p(a(te.filename), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(x(te.size)), 1)
                  ]),
                  details: l(() => [
                    f(he, {
                      label: "Hash:",
                      value: te.hash ? te.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => V(te)
                    }, {
                      default: l(() => [...R[18] || (R[18] = [
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
            O.value.length ? u("", !0) : (o(), S(Ue, {
              key: 1,
              icon: "📭",
              message: E.value ? `No models match '${E.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: R[4] || (R[4] = (ae) => $.value = !1)
      }, {
        content: l(() => [...R[19] || (R[19] = [
          e("p", null, [
            p(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            p(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (o(), S(so, {
        key: 0,
        identifier: L.value,
        onClose: R[5] || (R[5] = (ae) => L.value = null)
      }, null, 8, ["identifier"])) : u("", !0),
      (o(), S(xe, { to: "body" }, [
        w.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[9] || (R[9] = ke((ae) => w.value = !1, ["self"]))
        }, [
          e("div", ru, [
            e("div", du, [
              R[20] || (R[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: R[6] || (R[6] = (ae) => w.value = !1)
              }, "✕")
            ]),
            e("div", cu, [
              e("div", uu, [
                R[21] || (R[21] = e("label", null, "Current Directory", -1)),
                e("code", mu, a(_.value || "Not set"), 1)
              ]),
              e("div", vu, [
                R[22] || (R[22] = e("label", null, "New Directory Path", -1)),
                f(Ne, {
                  modelValue: k.value,
                  "onUpdate:modelValue": R[7] || (R[7] = (ae) => k.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              R[23] || (R[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", fu, [
              f(ie, {
                variant: "secondary",
                onClick: R[8] || (R[8] = (ae) => w.value = !1)
              }, {
                default: l(() => [...R[24] || (R[24] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(ie, {
                variant: "primary",
                disabled: !k.value.trim() || U.value,
                loading: U.value,
                onClick: K
              }, {
                default: l(() => [
                  p(a(U.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : u("", !0)
      ])),
      (o(), S(xe, { to: "body" }, [
        W.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[14] || (R[14] = ke((ae) => W.value = !1, ["self"]))
        }, [
          e("div", gu, [
            e("div", hu, [
              R[25] || (R[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: R[10] || (R[10] = (ae) => W.value = !1)
              }, "✕")
            ]),
            e("div", pu, [
              e("div", yu, [
                R[26] || (R[26] = e("label", null, "Download URL", -1)),
                f(Ne, {
                  modelValue: j.value,
                  "onUpdate:modelValue": R[11] || (R[11] = (ae) => j.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", wu, [
                R[27] || (R[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Ne, {
                  modelValue: Q.value,
                  "onUpdate:modelValue": R[12] || (R[12] = (ae) => Q.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              R[28] || (R[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", ku, [
              f(ie, {
                variant: "secondary",
                onClick: R[13] || (R[13] = (ae) => W.value = !1)
              }, {
                default: l(() => [...R[29] || (R[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(ie, {
                variant: "primary",
                disabled: !j.value.trim() || !Q.value.trim(),
                onClick: G
              }, {
                default: l(() => [...R[30] || (R[30] = [
                  p(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : u("", !0)
      ]))
    ], 64));
  }
}), _u = /* @__PURE__ */ X(bu, [["__scopeId", "data-v-73b78d84"]]), $u = { class: "node-details" }, Cu = { class: "status-row" }, xu = {
  key: 0,
  class: "detail-row"
}, Su = { class: "value" }, Iu = { class: "detail-row" }, Eu = { class: "value" }, Mu = {
  key: 1,
  class: "detail-row"
}, zu = { class: "value mono" }, Lu = {
  key: 2,
  class: "detail-row"
}, Tu = ["href"], Ru = {
  key: 3,
  class: "detail-row"
}, Du = { class: "value mono small" }, Nu = { class: "detail-row" }, Uu = {
  key: 0,
  class: "value"
}, Ou = {
  key: 1,
  class: "workflow-list"
}, Bu = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), y = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, i) => (o(), S(rt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: i[1] || (i[1] = (m) => r("close"))
    }, {
      body: l(() => [
        e("div", $u, [
          e("div", Cu, [
            i[2] || (i[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", g.value])
            }, a(y.value), 3)
          ]),
          t.node.version ? (o(), s("div", xu, [
            i[3] || (i[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Su, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : u("", !0),
          e("div", Iu, [
            i[4] || (i[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Eu, a(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", Mu, [
            i[5] || (i[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", zu, a(t.node.registry_id), 1)
          ])) : u("", !0),
          t.node.repository ? (o(), s("div", Lu, [
            i[7] || (i[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              p(a(t.node.repository) + " ", 1),
              i[6] || (i[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Tu)
          ])) : u("", !0),
          t.node.download_url ? (o(), s("div", Ru, [
            i[8] || (i[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Du, a(t.node.download_url), 1)
          ])) : u("", !0),
          i[10] || (i[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Nu, [
            i[9] || (i[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", Uu, " Not used in any workflows ")) : (o(), s("div", Ou, [
              (o(!0), s(q, null, se(t.node.used_in_workflows, (m) => (o(), s("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: i[0] || (i[0] = (m) => r("close"))
        }, {
          default: l(() => [...i[11] || (i[11] = [
            p(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Pu = /* @__PURE__ */ X(Bu, [["__scopeId", "data-v-b342f626"]]), Vu = { key: 0 }, Fu = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Au = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Wu = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: r, trackNodeAsDev: g, installNode: y, uninstallNode: h } = Se(), v = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), i = b(!1), m = b(null), C = b(""), d = b(!1), E = b(null), $ = B(() => {
      if (!C.value.trim()) return v.value.nodes;
      const M = C.value.toLowerCase();
      return v.value.nodes.filter(
        (x) => {
          var V, A;
          return x.name.toLowerCase().includes(M) || ((V = x.description) == null ? void 0 : V.toLowerCase().includes(M)) || ((A = x.repository) == null ? void 0 : A.toLowerCase().includes(M));
        }
      );
    }), L = B(
      () => $.value.filter((M) => M.installed && M.tracked)
    ), w = B(
      () => $.value.filter((M) => !M.installed && M.tracked)
    ), _ = B(
      () => $.value.filter((M) => M.installed && !M.tracked)
    );
    function k(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[M] || M;
    }
    function U(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function W(M) {
      E.value = M;
    }
    function j() {
      n("open-node-manager");
    }
    async function Q(M) {
      if (confirm(`Track "${M}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          i.value = !0;
          const x = await g(M);
          x.status === "success" ? (alert(`Node "${M}" is now tracked as development!`), await O()) : alert(`Failed to track node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error tracking node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function P(M) {
      if (confirm(`Remove untracked node "${M}"?

This will delete the node directory from custom_nodes/.`))
        try {
          i.value = !0;
          const x = await h(M);
          x.status === "success" ? (alert(`Node "${M}" removed!`), await O()) : alert(`Failed to remove node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error removing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function T(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node.`))
        try {
          i.value = !0;
          const x = await y(M);
          x.status === "success" ? (alert(`Node "${M}" installed successfully!`), await O()) : alert(`Failed to install node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error installing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function O() {
      i.value = !0, m.value = null;
      try {
        v.value = await r();
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        i.value = !1;
      }
    }
    return _e(O), (M, x) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (V) => d.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: l(() => [...x[5] || (x[5] = [
                  p(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          f(dt, {
            modelValue: C.value,
            "onUpdate:modelValue": x[1] || (x[1] = (V) => C.value = V),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          i.value ? (o(), S(He, {
            key: 0,
            message: "Loading nodes..."
          })) : m.value ? (o(), S(qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            v.value.total_count ? (o(), S(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                p(a(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (o(), s(q, { key: 0 }, [
                  p(" • " + a(v.value.missing_count) + " missing", 1)
                ], 64)) : u("", !0),
                v.value.untracked_count ? (o(), s(q, { key: 1 }, [
                  p(" • " + a(v.value.untracked_count) + " untracked", 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            _.value.length ? (o(), S(be, {
              key: 1,
              title: "UNTRACKED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(_.value, (V) => (o(), S(Ce, {
                  key: V.name,
                  status: "warning"
                }, {
                  icon: l(() => [...x[6] || (x[6] = [
                    p("?", -1)
                  ])]),
                  title: l(() => [
                    p(a(V.name), 1)
                  ]),
                  subtitle: l(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    f(he, {
                      label: "Used by:",
                      value: U(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => W(V)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Q(V.name)
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
                        p(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => P(V.name)
                    }, {
                      default: l(() => [...x[10] || (x[10] = [
                        p(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            L.value.length ? (o(), S(be, {
              key: 2,
              title: "INSTALLED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(L.value, (V) => (o(), S(Ce, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    p(a(V.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    p(a(V.name), 1)
                  ]),
                  subtitle: l(() => [
                    V.version ? (o(), s("span", Vu, a(V.source === "development" ? "" : "v") + a(V.version), 1)) : (o(), s("span", Fu, "version unknown")),
                    e("span", Au, " • " + a(k(V.source)), 1)
                  ]),
                  details: l(() => [
                    f(he, {
                      label: "Used by:",
                      value: U(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => W(V)
                    }, {
                      default: l(() => [...x[11] || (x[11] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: j
                    }, {
                      default: l(() => [...x[12] || (x[12] = [
                        p(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            w.value.length ? (o(), S(be, {
              key: 3,
              title: "MISSING",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(w.value, (V) => (o(), S(Ce, {
                  key: V.name,
                  status: "missing"
                }, {
                  icon: l(() => [...x[13] || (x[13] = [
                    p("!", -1)
                  ])]),
                  title: l(() => [
                    p(a(V.name), 1)
                  ]),
                  subtitle: l(() => [...x[14] || (x[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    f(he, {
                      label: "Required by:",
                      value: U(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => W(V)
                    }, {
                      default: l(() => [...x[15] || (x[15] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => T(V.name)
                    }, {
                      default: l(() => [...x[16] || (x[16] = [
                        p(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !L.value.length && !w.value.length && !_.value.length ? (o(), S(Ue, {
              key: 4,
              icon: "📭",
              message: C.value ? `No nodes match '${C.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: x[3] || (x[3] = (V) => d.value = !1)
      }, {
        content: l(() => [...x[17] || (x[17] = [
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
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: x[2] || (x[2] = (V) => d.value = !1)
          }, {
            default: l(() => [...x[18] || (x[18] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (o(), S(Pu, {
        key: 0,
        node: E.value,
        onClose: x[4] || (x[4] = (V) => E.value = null)
      }, null, 8, ["node"])) : u("", !0)
    ], 64));
  }
}), Gu = /* @__PURE__ */ X(Wu, [["__scopeId", "data-v-4ac1465a"]]), ju = { class: "remote-url-display" }, Hu = ["title"], qu = ["title"], Ku = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ju = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Qu = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = b(!1), r = B(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const y = c.url.slice(0, Math.floor(c.maxLength * 0.6)), h = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${y}...${h}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, h) => (o(), s("div", ju, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, Hu),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Ju, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Ku, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, qu)
    ]));
  }
}), Ht = /* @__PURE__ */ X(Qu, [["__scopeId", "data-v-7768a58d"]]), Yu = { class: "remote-title" }, Xu = {
  key: 0,
  class: "default-badge"
}, Zu = {
  key: 1,
  class: "sync-badge"
}, em = {
  key: 0,
  class: "ahead"
}, tm = {
  key: 1,
  class: "behind"
}, om = {
  key: 0,
  class: "tracking-info"
}, sm = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const n = t, r = B(() => n.fetchingRemote === n.remote.name), g = B(() => n.remote.is_default), y = B(() => !!n.trackingBranch);
    function h(v) {
      const i = new Date(v), C = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), d = Math.floor(C / 6e4);
      if (d < 1) return "Just now";
      if (d < 60) return `${d}m ago`;
      const E = Math.floor(d / 60);
      if (E < 24) return `${E}h ago`;
      const $ = Math.floor(E / 24);
      return $ < 7 ? `${$}d ago` : i.toLocaleDateString();
    }
    return (v, i) => (o(), S(Ce, {
      status: g.value ? "synced" : void 0
    }, {
      icon: l(() => [
        p(a(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Yu, [
          e("span", null, a(t.remote.name), 1),
          g.value ? (o(), s("span", Xu, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), s("span", Zu, [
            t.syncStatus.ahead > 0 ? (o(), s("span", em, "↑" + a(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", tm, "↓" + a(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: l(() => [
        y.value ? (o(), s("span", om, " Tracking: " + a(t.trackingBranch), 1)) : u("", !0)
      ]),
      details: l(() => {
        var m;
        return [
          f(he, { label: "Fetch:" }, {
            default: l(() => [
              f(Ht, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), S(he, {
            key: 0,
            label: "Push:"
          }, {
            default: l(() => [
              f(Ht, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0),
          (m = t.syncStatus) != null && m.last_fetch ? (o(), S(he, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: l(() => [
              e("span", null, a(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : u("", !0)
        ];
      }),
      actions: l(() => [
        f(Z, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: i[0] || (i[0] = (m) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...i[3] || (i[3] = [
            p(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(Z, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (m) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...i[4] || (i[4] = [
            p(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? u("", !0) : (o(), S(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: i[2] || (i[2] = (m) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...i[5] || (i[5] = [
            p(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), nm = /* @__PURE__ */ X(sm, [["__scopeId", "data-v-17362e45"]]), am = ["for"], lm = {
  key: 0,
  class: "base-form-field-required"
}, im = { class: "base-form-field-input" }, rm = {
  key: 1,
  class: "base-form-field-error"
}, dm = {
  key: 2,
  class: "base-form-field-hint"
}, cm = /* @__PURE__ */ Y({
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
    const c = t, n = B(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, g) => (o(), s("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        p(a(t.label) + " ", 1),
        t.required ? (o(), s("span", lm, "*")) : u("", !0)
      ], 8, am)) : u("", !0),
      e("div", im, [
        ue(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", rm, a(t.error), 1)) : t.hint ? (o(), s("span", dm, a(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ X(cm, [["__scopeId", "data-v-9a1cf296"]]), um = { class: "remote-form" }, mm = { class: "form-header" }, vm = { class: "form-body" }, fm = {
  key: 0,
  class: "form-error"
}, gm = { class: "form-actions" }, hm = /* @__PURE__ */ Y({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), y = b(!1), h = b(null);
    Ot(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = B(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!v.value || y.value)) {
        h.value = null, y.value = !0;
        try {
          r("submit", g.value);
        } catch (m) {
          h.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (m, C) => (o(), s("div", um, [
      e("div", mm, [
        f(ze, null, {
          default: l(() => [
            p(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", vm, [
        f(Tt, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            f(Ne, {
              modelValue: g.value.name,
              "onUpdate:modelValue": C[0] || (C[0] = (d) => g.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f(Tt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            f(Ne, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": C[1] || (C[1] = (d) => g.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(Tt, { label: "Push URL (optional)" }, {
          default: l(() => [
            f(Ne, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": C[2] || (C[2] = (d) => g.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", fm, a(h.value), 1)) : u("", !0)
      ]),
      e("div", gm, [
        f(Z, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: y.value,
          onClick: i
        }, {
          default: l(() => [
            p(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(Z, {
          variant: "ghost",
          size: "md",
          onClick: C[3] || (C[3] = (d) => m.$emit("cancel"))
        }, {
          default: l(() => [...C[4] || (C[4] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pm = /* @__PURE__ */ X(hm, [["__scopeId", "data-v-56021b18"]]), ym = { key: 0 }, wm = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: h
    } = Se(), v = b([]), i = b(null), m = b({}), C = b(!1), d = b(null), E = b(""), $ = b(!1), L = b(null), w = b(!1), _ = b("add"), k = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = B(() => {
      if (!E.value.trim()) return v.value;
      const A = E.value.toLowerCase();
      return v.value.filter(
        (K) => K.name.toLowerCase().includes(A) || K.fetch_url.toLowerCase().includes(A) || K.push_url.toLowerCase().includes(A)
      );
    });
    function W(A) {
      var K;
      return ((K = i.value) == null ? void 0 : K.remote) === A;
    }
    async function j() {
      C.value = !0, d.value = null;
      try {
        const A = await c();
        v.value = A.remotes, i.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (K) => {
            const G = await h(K.name);
            G && (m.value[K.name] = G);
          })
        );
      } catch (A) {
        d.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function Q() {
      _.value = "add", k.value = { name: "", fetchUrl: "", pushUrl: "" }, w.value = !0;
    }
    function P(A) {
      const K = v.value.find((G) => G.name === A);
      K && (_.value = "edit", k.value = {
        name: K.name,
        fetchUrl: K.fetch_url,
        pushUrl: K.push_url
      }, w.value = !0);
    }
    async function T(A) {
      try {
        _.value === "add" ? await n(A.name, A.fetchUrl) : await g(A.name, A.fetchUrl, A.pushUrl || void 0), w.value = !1, await j();
      } catch (K) {
        d.value = K instanceof Error ? K.message : "Operation failed";
      }
    }
    function O() {
      w.value = !1, k.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function M(A) {
      L.value = A;
      try {
        await y(A);
        const K = await h(A);
        K && (m.value[A] = K);
      } catch (K) {
        d.value = K instanceof Error ? K.message : "Fetch failed";
      } finally {
        L.value = null;
      }
    }
    async function x(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await r(A), await j();
        } catch (K) {
          d.value = K instanceof Error ? K.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return _e(j), (A, K) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (G) => $.value = !0)
          }, {
            actions: l(() => [
              w.value ? u("", !0) : (o(), S(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: Q
              }, {
                default: l(() => [...K[3] || (K[3] = [
                  p(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          w.value ? u("", !0) : (o(), S(dt, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": K[1] || (K[1] = (G) => E.value = G),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (o(), S(He, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), S(qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            w.value ? (o(), S(pm, {
              key: 0,
              mode: _.value,
              "remote-name": k.value.name,
              "fetch-url": k.value.fetchUrl,
              "push-url": k.value.pushUrl,
              onSubmit: T,
              onCancel: O
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            v.value.length && !w.value ? (o(), S(ct, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                p(" Total: " + a(v.value.length) + " remote" + a(v.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), s("span", ym, " • Tracking: " + a(i.value.remote) + "/" + a(i.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            U.value.length && !w.value ? (o(), S(be, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(U.value, (G) => {
                  var z;
                  return o(), S(nm, {
                    key: G.name,
                    remote: G,
                    "sync-status": m.value[G.name],
                    "tracking-branch": W(G.name) ? (z = i.value) == null ? void 0 : z.branch : void 0,
                    "fetching-remote": L.value,
                    onFetch: M,
                    onEdit: P,
                    onRemove: x
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !U.value.length && !w.value ? (o(), S(Ue, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  onClick: Q
                }, {
                  default: l(() => [...K[4] || (K[4] = [
                    p(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: $.value,
        title: "About Git Remotes",
        onClose: K[2] || (K[2] = (G) => $.value = !1)
      }, {
        content: l(() => [...K[5] || (K[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            p(" The "),
            e("strong", null, '"origin"'),
            p(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          f(Z, {
            variant: "link",
            onClick: V
          }, {
            default: l(() => [...K[6] || (K[6] = [
              p(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), km = /* @__PURE__ */ X(wm, [["__scopeId", "data-v-a75719bb"]]), bm = { class: "setting-info" }, _m = { class: "setting-label" }, $m = {
  key: 0,
  class: "required-marker"
}, Cm = {
  key: 0,
  class: "setting-description"
}, xm = { class: "setting-control" }, Sm = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", bm, [
        e("div", _m, [
          p(a(t.label) + " ", 1),
          t.required ? (o(), s("span", $m, "*")) : u("", !0)
        ]),
        t.description ? (o(), s("div", Cm, a(t.description), 1)) : u("", !0)
      ]),
      e("div", xm, [
        ue(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ X(Sm, [["__scopeId", "data-v-cb5d236c"]]), Im = { class: "toggle" }, Em = ["checked", "disabled"], Mm = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", Im, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Em),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ot = /* @__PURE__ */ X(Mm, [["__scopeId", "data-v-71c0f550"]]), zm = { class: "settings-section" }, Lm = { class: "path-setting" }, Tm = { class: "path-value" }, Rm = { class: "path-setting" }, Dm = { class: "path-value" }, Nm = { class: "settings-section" }, Um = { class: "settings-section" }, Om = { class: "settings-section" }, Bm = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Se(), r = b(!1), g = b(null), y = b(null), h = b(null), v = b(null), i = b(""), m = b(""), C = b(!0), d = b(!0), E = b(!1), $ = B(() => v.value ? i.value !== (v.value.civitai_api_key || "") : !1);
    async function L() {
      r.value = !0, g.value = null;
      try {
        h.value = await c(), v.value = { ...h.value }, i.value = h.value.civitai_api_key || "", m.value = h.value.huggingface_token || "", C.value = h.value.auto_sync_models, d.value = h.value.confirm_destructive;
        const U = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        E.value = U === "true";
      } catch (U) {
        g.value = U instanceof Error ? U.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function w() {
      var U;
      y.value = null;
      try {
        const W = {};
        i.value !== (((U = v.value) == null ? void 0 : U.civitai_api_key) || "") && (W.civitai_api_key = i.value || null), await n(W), await L(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (W) {
        y.value = {
          type: "error",
          message: W instanceof Error ? W.message : "Failed to save settings"
        };
      }
    }
    function _() {
      v.value && (i.value = v.value.civitai_api_key || "", m.value = v.value.huggingface_token || "", C.value = v.value.auto_sync_models, d.value = v.value.confirm_destructive, y.value = null);
    }
    function k(U) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(U)), console.log("[ComfyGit] Auto-refresh setting saved:", U);
    }
    return _e(L), (U, W) => (o(), S(Ie, null, {
      header: l(() => [
        f(Ee, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            f(Z, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: w
            }, {
              default: l(() => [...W[5] || (W[5] = [
                p(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (o(), S(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: _
            }, {
              default: l(() => [...W[6] || (W[6] = [
                p(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        r.value ? (o(), S(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), S(qe, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
          f(be, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var j, Q;
              return [
                e("div", zm, [
                  e("div", Lm, [
                    W[7] || (W[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    W[8] || (W[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Tm, a(((j = h.value) == null ? void 0 : j.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Rm, [
                    W[9] || (W[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    W[10] || (W[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Dm, a(((Q = h.value) == null ? void 0 : Q.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(be, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", Nm, [
                f(Ge, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    f(Ct, {
                      modelValue: i.value,
                      "onUpdate:modelValue": W[0] || (W[0] = (j) => i.value = j),
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
                  default: l(() => [
                    f(Ct, {
                      modelValue: m.value,
                      "onUpdate:modelValue": W[1] || (W[1] = (j) => m.value = j),
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
            default: l(() => [
              e("div", Um, [
                f(Ge, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    f(ot, {
                      modelValue: E.value,
                      "onUpdate:modelValue": [
                        W[2] || (W[2] = (j) => E.value = j),
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
          f(be, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: l(() => [
              e("div", Om, [
                f(Ge, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    f(ot, {
                      modelValue: C.value,
                      "onUpdate:modelValue": W[3] || (W[3] = (j) => C.value = j),
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
                  default: l(() => [
                    f(ot, {
                      modelValue: d.value,
                      "onUpdate:modelValue": W[4] || (W[4] = (j) => d.value = j),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), S(ct, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: Qe({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Pm = /* @__PURE__ */ X(Bm, [["__scopeId", "data-v-7861bd35"]]), Vm = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = Se(), n = b([]), r = b(!1), g = b(null), y = b(!1), h = b(null), v = B(() => n.value.length === 0 ? [] : n.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      r.value = !0, g.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (m) {
        g.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var m;
          (m = h.value) != null && m.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(i), (m, C) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (d) => y.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                disabled: r.value
              }, {
                default: l(() => [
                  p(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          r.value ? (o(), S(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), S(qe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            n.value.length === 0 ? (o(), S(Ue, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(q, null, se(v.value, (d, E) => (o(), s("div", {
                key: E,
                class: ne(`log-line log-level-${d.level.toLowerCase()}`)
              }, a(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: C[2] || (C[2] = (d) => y.value = !1)
      }, {
        content: l(() => [...C[3] || (C[3] = [
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
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: C[1] || (C[1] = (d) => y.value = !1)
          }, {
            default: l(() => [...C[4] || (C[4] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Fm = /* @__PURE__ */ X(Vm, [["__scopeId", "data-v-39f6a756"]]), Am = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n } = Se(), r = b([]), g = b(!1), y = b(null), h = b(!1), v = b("production"), i = b(null), m = B(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function C() {
      g.value = !0, y.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const d = await n();
          v.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        y.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var d;
          (d = i.value) != null && d.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(C), (d, E) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = ($) => h.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: C,
                disabled: g.value
              }, {
                default: l(() => [
                  p(a(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          g.value ? (o(), S(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), S(qe, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            r.value.length === 0 ? (o(), S(Ue, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), s(q, null, se(m.value, ($, L) => (o(), s("div", {
                key: L,
                class: ne(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: h.value,
        title: "About Environment Logs",
        onClose: E[2] || (E[2] = ($) => h.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            E[3] || (E[3] = p(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
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
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: E[1] || (E[1] = ($) => h.value = !1)
          }, {
            default: l(() => [...E[7] || (E[7] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Wm = /* @__PURE__ */ X(Am, [["__scopeId", "data-v-4f1e6f72"]]), Gm = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], qt = "3.12", jm = [
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
], Kt = "auto", Hm = { class: "env-title" }, qm = {
  key: 0,
  class: "current-badge"
}, Km = {
  key: 0,
  class: "branch-info"
}, Jm = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), S(Ce, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: l(() => [
        p(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Hm, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", qm, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (o(), s("span", Km, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          p(" " + a(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      details: l(() => [
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
        }, null, 8, ["value"])) : u("", !0)
      ]),
      actions: l(() => [
        ue(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Qm = /* @__PURE__ */ X(Jm, [["__scopeId", "data-v-5238e57c"]]), Ym = {
  key: 0,
  class: "create-form"
}, Xm = { class: "create-form__header" }, Zm = { class: "create-form__body" }, ev = { class: "form-field" }, tv = { class: "form-field" }, ov = ["value"], sv = { class: "form-field" }, nv = ["disabled"], av = ["value"], lv = { class: "form-field" }, iv = ["value"], rv = { class: "form-field form-field--checkbox" }, dv = { class: "form-checkbox" }, cv = { class: "create-form__actions" }, uv = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, mv = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getEnvironments: g, getComfyUIReleases: y } = Se(), h = b([]), v = b(!1), i = b(null), m = b(""), C = b(!1), d = b(!1), E = b(""), $ = b(qt), L = b("latest"), w = b(Kt), _ = b(!1), k = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), U = b(!1), W = B(
      () => h.value.find((K) => K.is_current)
    ), j = B(() => {
      if (!m.value.trim()) return h.value;
      const K = m.value.toLowerCase();
      return h.value.filter(
        (G) => {
          var z;
          return G.name.toLowerCase().includes(K) || ((z = G.current_branch) == null ? void 0 : z.toLowerCase().includes(K));
        }
      );
    });
    function Q(K) {
      if (!K) return "";
      try {
        const G = new Date(K), ee = (/* @__PURE__ */ new Date()).getTime() - G.getTime(), D = Math.floor(ee / 6e4), R = Math.floor(ee / 36e5), ae = Math.floor(ee / 864e5);
        return D < 1 ? "just now" : D < 60 ? `${D} ${D === 1 ? "minute" : "minutes"} ago` : R < 24 ? `${R} ${R === 1 ? "hour" : "hours"} ago` : ae < 30 ? `${ae} ${ae === 1 ? "day" : "days"} ago` : G.toLocaleDateString();
      } catch {
        return K;
      }
    }
    function P() {
      const K = E.value.trim();
      if (!K) return;
      const G = {
        name: K,
        python_version: $.value,
        comfyui_version: L.value,
        torch_backend: w.value,
        switch_after: _.value
      };
      r("create", G), O();
    }
    function T() {
      O();
    }
    function O() {
      E.value = "", $.value = qt, L.value = "latest", w.value = Kt, _.value = !1, d.value = !1;
    }
    async function M() {
      if (d.value = !0, k.value.length <= 1) {
        U.value = !0;
        try {
          k.value = await y();
        } catch (K) {
          console.error("Failed to load ComfyUI releases:", K);
        } finally {
          U.value = !1;
        }
      }
    }
    function x(K) {
      r("viewDetails", K);
    }
    function V(K) {
      r("delete", K);
    }
    async function A() {
      v.value = !0, i.value = null;
      try {
        h.value = await g();
      } catch (K) {
        i.value = K instanceof Error ? K.message : "Failed to load environments";
      } finally {
        v.value = !1;
      }
    }
    return _e(A), c({
      loadEnvironments: A
    }), (K, G) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (z) => C.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "ghost",
                size: "sm",
                onClick: M,
                title: "Create new environment"
              }, {
                default: l(() => [...G[9] || (G[9] = [
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
              f(Z, {
                variant: "ghost",
                size: "sm",
                onClick: A,
                title: "Refresh environments"
              }, {
                default: l(() => [...G[10] || (G[10] = [
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
        search: l(() => [
          f(dt, {
            modelValue: m.value,
            "onUpdate:modelValue": G[1] || (G[1] = (z) => m.value = z),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (o(), S(He, {
            key: 0,
            message: "Loading environments..."
          })) : i.value ? (o(), S(qe, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            d.value ? (o(), s("div", Ym, [
              e("div", Xm, [
                G[12] || (G[12] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                f(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: T
                }, {
                  default: l(() => [...G[11] || (G[11] = [
                    p(" ✕ ", -1)
                  ])]),
                  _: 1
                })
              ]),
              e("div", Zm, [
                e("div", ev, [
                  G[13] || (G[13] = e("label", { class: "form-label" }, "Name", -1)),
                  f(Ct, {
                    modelValue: E.value,
                    "onUpdate:modelValue": G[2] || (G[2] = (z) => E.value = z),
                    placeholder: "my-environment",
                    onKeyup: Je(T, ["esc"])
                  }, null, 8, ["modelValue"])
                ]),
                e("div", tv, [
                  G[14] || (G[14] = e("label", { class: "form-label" }, "Python Version", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": G[3] || (G[3] = (z) => $.value = z),
                    class: "form-select"
                  }, [
                    (o(!0), s(q, null, se(me(Gm), (z) => (o(), s("option", {
                      key: z,
                      value: z
                    }, a(z), 9, ov))), 128))
                  ], 512), [
                    [zt, $.value]
                  ])
                ]),
                e("div", sv, [
                  G[15] || (G[15] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": G[4] || (G[4] = (z) => L.value = z),
                    class: "form-select",
                    disabled: U.value
                  }, [
                    (o(!0), s(q, null, se(k.value, (z) => (o(), s("option", {
                      key: z.tag_name,
                      value: z.tag_name
                    }, a(z.name), 9, av))), 128))
                  ], 8, nv), [
                    [zt, L.value]
                  ])
                ]),
                e("div", lv, [
                  G[16] || (G[16] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": G[5] || (G[5] = (z) => w.value = z),
                    class: "form-select"
                  }, [
                    (o(!0), s(q, null, se(me(jm), (z) => (o(), s("option", {
                      key: z,
                      value: z
                    }, a(z) + a(z === "auto" ? " (detect GPU)" : ""), 9, iv))), 128))
                  ], 512), [
                    [zt, w.value]
                  ])
                ]),
                e("div", rv, [
                  e("label", dv, [
                    kt(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": G[6] || (G[6] = (z) => _.value = z)
                    }, null, 512), [
                      [$o, _.value]
                    ]),
                    G[17] || (G[17] = e("span", null, "Switch to this environment after creation", -1))
                  ])
                ]),
                e("div", cv, [
                  f(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: P,
                    disabled: !E.value.trim()
                  }, {
                    default: l(() => [...G[18] || (G[18] = [
                      p(" Create ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"]),
                  f(Z, {
                    variant: "secondary",
                    size: "sm",
                    onClick: T
                  }, {
                    default: l(() => [...G[19] || (G[19] = [
                      p(" Cancel ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ])) : u("", !0),
            h.value.length ? (o(), S(ct, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                p(" Total: " + a(h.value.length) + " " + a(h.value.length === 1 ? "environment" : "environments") + " ", 1),
                W.value ? (o(), s(q, { key: 0 }, [
                  G[20] || (G[20] = p(" • Current: ", -1)),
                  e("strong", null, a(W.value.name), 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            j.value.length ? (o(), S(be, {
              key: 2,
              title: "ENVIRONMENTS",
              count: j.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(j.value, (z) => (o(), S(Qm, {
                  key: z.name,
                  "environment-name": z.name,
                  "is-current": z.is_current,
                  "current-branch": z.current_branch,
                  "workflow-count": z.workflow_count,
                  "node-count": z.node_count,
                  "model-count": z.model_count,
                  "last-used": Q(z.last_used),
                  "show-last-used": !!z.last_used
                }, {
                  actions: l(() => [
                    z.is_current ? u("", !0) : (o(), S(Z, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => K.$emit("switch", z.name)
                    }, {
                      default: l(() => [...G[21] || (G[21] = [
                        p(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    f(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: (ee) => x(z.name),
                      title: "View environment details"
                    }, {
                      default: l(() => [...G[22] || (G[22] = [
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
                    !z.is_current && h.value.length > 1 ? (o(), S(Z, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: (ee) => V(z.name),
                      title: "Delete environment"
                    }, {
                      default: l(() => [
                        (o(), s("svg", uv, [...G[23] || (G[23] = [
                          e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                        ])]))
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0)
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            j.value.length ? u("", !0) : (o(), S(Ue, {
              key: 3,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, Bt({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  f(Z, {
                    variant: "primary",
                    onClick: M
                  }, {
                    default: l(() => [...G[24] || (G[24] = [
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
      f(je, {
        show: C.value,
        title: "About Environments",
        onClose: G[8] || (G[8] = (z) => C.value = !1)
      }, {
        content: l(() => [...G[25] || (G[25] = [
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
        actions: l(() => [
          f(Z, {
            variant: "secondary",
            onClick: G[7] || (G[7] = (z) => C.value = !1)
          }, {
            default: l(() => [...G[26] || (G[26] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), vv = /* @__PURE__ */ X(mv, [["__scopeId", "data-v-edea169f"]]), fv = { class: "file-path" }, gv = { class: "file-path-text" }, hv = ["title"], pv = /* @__PURE__ */ Y({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = b(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), s("div", fv, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", gv, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, hv)) : u("", !0)
    ]));
  }
}), yv = /* @__PURE__ */ X(pv, [["__scopeId", "data-v-f0982173"]]), wv = { class: "output-path-input" }, kv = { class: "export-actions" }, bv = {
  key: 1,
  class: "export-warning"
}, _v = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = Se(), n = b(""), r = b(!1), g = b(null), y = b(!1);
    async function h() {
      r.value = !0, g.value = null;
      try {
        const i = await c(n.value || void 0);
        g.value = i;
      } catch (i) {
        g.value = {
          status: "error",
          message: i instanceof Error ? i.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function v() {
      var i;
      if ((i = g.value) != null && i.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (i, m) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "EXPORT ENVIRONMENT" }, {
            actions: l(() => [
              f(Z, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = (C) => y.value = !0),
                title: "About exporting"
              }, {
                default: l(() => [...m[5] || (m[5] = [
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
        content: l(() => [
          f(be, { title: "WHAT WILL BE EXPORTED" }, {
            default: l(() => [
              f(Ce, { status: "synced" }, {
                icon: l(() => [...m[6] || (m[6] = [
                  p("📦", -1)
                ])]),
                title: l(() => [...m[7] || (m[7] = [
                  p("Environment Snapshot", -1)
                ])]),
                subtitle: l(() => [...m[8] || (m[8] = [
                  p(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: l(() => [
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
          f(be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              f(Ce, { status: "synced" }, {
                icon: l(() => [...m[9] || (m[9] = [
                  p("📁", -1)
                ])]),
                title: l(() => [...m[10] || (m[10] = [
                  p("Output Destination", -1)
                ])]),
                subtitle: l(() => [...m[11] || (m[11] = [
                  p(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: l(() => [
                  e("div", wv, [
                    f(Ct, {
                      modelValue: n.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (C) => n.value = C),
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
            default: l(() => [
              e("div", kv, [
                f(Z, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: l(() => [
                    m[12] || (m[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    p(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), S(Z, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: m[2] || (m[2] = (C) => n.value = "")
                }, {
                  default: l(() => [...m[13] || (m[13] = [
                    p(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : u("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), S(be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              f(Ce, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Bt({
                icon: l(() => [
                  p(a(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  p(a(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  p(a(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    f(he, { label: "Saved to:" }, {
                      default: l(() => [
                        f(yv, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), S(he, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), s("div", bv, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: v
                    }, {
                      default: l(() => [...m[15] || (m[15] = [
                        p(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = (C) => g.value = null)
                    }, {
                      default: l(() => [...m[16] || (m[16] = [
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
          })) : u("", !0)
        ]),
        _: 1
      }),
      f(je, {
        show: y.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = (C) => y.value = !1)
      }, {
        content: l(() => [...m[17] || (m[17] = [
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
}), $v = /* @__PURE__ */ X(_v, [["__scopeId", "data-v-1777a9d5"]]), Cv = { class: "file-input-wrapper" }, xv = ["accept", "multiple", "disabled"], Sv = /* @__PURE__ */ Y({
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
    const r = n, g = b(null);
    function y() {
      var v;
      (v = g.value) == null || v.click();
    }
    function h(v) {
      const i = v.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return c({
      triggerInput: y
    }), (v, i) => (o(), s("div", Cv, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, xv),
      f(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: l(() => [
          ue(v.$slots, "default", {}, () => [
            i[0] || (i[0] = e("svg", {
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
}), Iv = /* @__PURE__ */ X(Sv, [["__scopeId", "data-v-cd192091"]]), Ev = {
  key: 0,
  class: "drop-zone-empty"
}, Mv = { class: "drop-zone-text" }, zv = { class: "drop-zone-primary" }, Lv = { class: "drop-zone-secondary" }, Tv = { class: "drop-zone-actions" }, Rv = {
  key: 1,
  class: "drop-zone-file"
}, Dv = { class: "file-info" }, Nv = { class: "file-details" }, Uv = { class: "file-name" }, Ov = { class: "file-size" }, Bv = /* @__PURE__ */ Y({
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
    const n = c, r = b(!1), g = b(null), y = b(0), h = B(() => g.value !== null), v = B(() => {
      var _;
      return ((_ = g.value) == null ? void 0 : _.name) || "";
    }), i = B(() => {
      if (!g.value) return "";
      const _ = g.value.size;
      return _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : _ < 1024 * 1024 * 1024 ? `${(_ / (1024 * 1024)).toFixed(1)} MB` : `${(_ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(_) {
      var k;
      y.value++, (k = _.dataTransfer) != null && k.types.includes("Files") && (r.value = !0);
    }
    function C(_) {
      _.dataTransfer && (_.dataTransfer.dropEffect = "copy");
    }
    function d() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function E(_) {
      var U;
      y.value = 0, r.value = !1;
      const k = (U = _.dataTransfer) == null ? void 0 : U.files;
      k && k.length > 0 && L(k[0]);
    }
    function $(_) {
      _.length > 0 && L(_[0]);
    }
    function L(_) {
      g.value = _, n("fileSelected", _);
    }
    function w() {
      g.value = null, n("clear");
    }
    return (_, k) => (o(), s("div", {
      class: ne(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: ke(m, ["prevent"]),
      onDragover: ke(C, ["prevent"]),
      onDragleave: ke(d, ["prevent"]),
      onDrop: ke(E, ["prevent"])
    }, [
      h.value ? (o(), s("div", Rv, [
        e("div", Dv, [
          k[1] || (k[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Nv, [
            e("div", Uv, a(v.value), 1),
            e("div", Ov, a(i.value), 1)
          ])
        ]),
        f(Z, {
          variant: "ghost",
          size: "xs",
          onClick: w,
          title: "Remove file"
        }, {
          default: l(() => [...k[2] || (k[2] = [
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
      ])) : (o(), s("div", Ev, [
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
        e("div", Mv, [
          e("p", zv, a(t.primaryText), 1),
          e("p", Lv, a(t.secondaryText), 1)
        ]),
        e("div", Tv, [
          f(Iv, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
          }, {
            default: l(() => [
              p(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Pv = /* @__PURE__ */ X(Bv, [["__scopeId", "data-v-e00abbca"]]), Vv = { class: "import-preview" }, Fv = { class: "preview-header" }, Av = {
  key: 0,
  class: "source-env"
}, Wv = { class: "preview-content" }, Gv = { class: "preview-section" }, jv = { class: "section-header" }, Hv = { class: "section-info" }, qv = { class: "section-count" }, Kv = {
  key: 0,
  class: "item-list"
}, Jv = { class: "item-name" }, Qv = {
  key: 0,
  class: "item-more"
}, Yv = { class: "preview-section" }, Xv = { class: "section-header" }, Zv = { class: "section-info" }, ef = { class: "section-count" }, tf = {
  key: 0,
  class: "item-list"
}, of = { class: "item-details" }, sf = { class: "item-name" }, nf = { class: "item-meta" }, af = {
  key: 0,
  class: "item-more"
}, lf = { class: "preview-section" }, rf = { class: "section-header" }, df = { class: "section-info" }, cf = { class: "section-count" }, uf = {
  key: 0,
  class: "item-list"
}, mf = { class: "item-name" }, vf = {
  key: 0,
  class: "item-more"
}, ff = {
  key: 0,
  class: "preview-section"
}, gf = { class: "git-info" }, hf = /* @__PURE__ */ Y({
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
    const c = t, n = B(() => c.workflows.length), r = B(() => c.models.length), g = B(() => c.nodes.length);
    function y(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, v) => (o(), s("div", Vv, [
      e("div", Fv, [
        f(ze, null, {
          default: l(() => [...v[0] || (v[0] = [
            p("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Av, [
          v[1] || (v[1] = p(" From: ", -1)),
          f(Nt, null, {
            default: l(() => [
              p(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", Wv, [
        e("div", Gv, [
          e("div", jv, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Hv, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", qv, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", Kv, [
            (o(!0), s(q, null, se(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Jv, a(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", Qv, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Yv, [
          e("div", Xv, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Zv, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", ef, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", tf, [
            (o(!0), s(q, null, se(t.models.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", of, [
                e("span", sf, a(i.filename), 1),
                e("span", nf, a(y(i.size)) + " • " + a(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", af, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", lf, [
          e("div", rf, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", df, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", cf, a(g.value) + " node" + a(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", uf, [
            (o(!0), s(q, null, se(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", mf, a(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", vf, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", ff, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", gf, [
            t.gitBranch ? (o(), S(he, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                f(Nt, null, {
                  default: l(() => [
                    p(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : u("", !0),
            t.gitCommit ? (o(), S(he, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                f(eo, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), pf = /* @__PURE__ */ X(hf, [["__scopeId", "data-v-182fe113"]]), yf = { class: "import-options" }, wf = { class: "options-container" }, kf = { class: "option-section" }, bf = { class: "conflict-options" }, _f = ["value", "checked", "onChange"], $f = { class: "conflict-content" }, Cf = { class: "conflict-label" }, xf = { class: "conflict-description" }, Sf = { class: "option-section" }, If = { class: "component-toggles" }, Ef = /* @__PURE__ */ Y({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: c }) {
    const n = c, r = [
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
    return (g, y) => (o(), s("div", yf, [
      f(ze, null, {
        default: l(() => [...y[4] || (y[4] = [
          p("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", wf, [
        e("div", kf, [
          f(Dt, null, {
            default: l(() => [...y[5] || (y[5] = [
              p("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", bf, [
            (o(), s(q, null, se(r, (h) => e("label", {
              key: h.value,
              class: ne(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (v) => n("update:conflictMode", h.value)
              }, null, 40, _f),
              e("div", $f, [
                e("span", Cf, a(h.label), 1),
                e("span", xf, a(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Sf, [
          f(Dt, null, {
            default: l(() => [...y[6] || (y[6] = [
              p("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", If, [
            f(Ge, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (h) => n("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Mf = /* @__PURE__ */ X(Ef, [["__scopeId", "data-v-0ec212b0"]]), zf = {
  key: 0,
  class: "import-empty"
}, Lf = { class: "import-help" }, Tf = {
  key: 1,
  class: "import-configure"
}, Rf = { class: "selected-file-bar" }, Df = { class: "file-bar-content" }, Nf = { class: "file-bar-info" }, Uf = { class: "file-bar-name" }, Of = { class: "file-bar-size" }, Bf = { class: "import-actions" }, Pf = {
  key: 2,
  class: "import-progress"
}, Vf = { class: "progress-content" }, Ff = { class: "progress-info" }, Af = { class: "progress-title" }, Wf = { class: "progress-detail" }, Gf = { class: "progress-bar" }, jf = { class: "progress-status" }, Hf = {
  key: 3,
  class: "import-complete"
}, qf = { class: "complete-message" }, Kf = { class: "complete-title" }, Jf = { class: "complete-details" }, Qf = { class: "complete-actions" }, Yf = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const c = b(null), n = b(!1), r = b(!1), g = b(!1), y = b(""), h = b({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), v = b({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), i = b({
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
    }), m = B(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function C(w) {
      c.value = w;
    }
    function d() {
      c.value = null, r.value = !1, g.value = !1, y.value = "";
    }
    function E() {
      d(), n.value = !1, v.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (c.value) {
        n.value = !0, r.value = !1;
        try {
          const w = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${i.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${i.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${i.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const _ of w)
            v.value = _, await new Promise((k) => setTimeout(k, 800));
          v.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((_) => setTimeout(_, 500)), g.value = !0, y.value = `Successfully imported ${i.value.workflows.length} workflows, ${i.value.models.length} models, and ${i.value.nodes.length} custom nodes.`;
        } catch (w) {
          g.value = !1, y.value = w instanceof Error ? w.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function L(w) {
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (w, _) => (o(), S(Ie, null, {
      header: l(() => [
        f(Ee, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: l(() => [
        !c.value && !n.value ? (o(), s("div", zf, [
          f(Pv, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: C
          }),
          e("div", Lf, [
            f(ze, null, {
              default: l(() => [..._[5] || (_[5] = [
                p("How to Import", -1)
              ])]),
              _: 1
            }),
            _[6] || (_[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !n.value && !r.value ? (o(), s("div", Tf, [
          e("div", Rf, [
            e("div", Df, [
              _[7] || (_[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Nf, [
                e("div", Uf, a(c.value.name), 1),
                e("div", Of, a(L(c.value.size)), 1)
              ])
            ]),
            f(Z, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: l(() => [..._[8] || (_[8] = [
                p(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(pf, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Mf, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": _[0] || (_[0] = (k) => h.value.conflictMode = k),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": _[1] || (_[1] = (k) => h.value.includeWorkflows = k),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": _[2] || (_[2] = (k) => h.value.includeModels = k),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": _[3] || (_[3] = (k) => h.value.includeNodes = k),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": _[4] || (_[4] = (k) => h.value.includeGitHistory = k)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && i.value.models.length > 0 ? (o(), S(nt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", Bf, [
            f(Z, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
              onClick: $
            }, {
              default: l(() => [..._[9] || (_[9] = [
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
            f(Z, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: l(() => [..._[10] || (_[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Pf, [
          e("div", Vf, [
            _[11] || (_[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Ff, [
              e("div", Af, a(v.value.message), 1),
              e("div", Wf, a(v.value.detail), 1)
            ])
          ]),
          e("div", Gf, [
            e("div", {
              class: "progress-bar-fill",
              style: Qe({ width: `${v.value.percent}%` })
            }, null, 4)
          ]),
          e("div", jf, a(v.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", Hf, [
          e("div", {
            class: ne(["complete-icon", g.value ? "success" : "error"])
          }, a(g.value ? "✓" : "✕"), 3),
          e("div", qf, [
            e("div", Kf, a(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Jf, a(y.value), 1)
          ]),
          e("div", Qf, [
            f(Z, {
              variant: "primary",
              size: "md",
              onClick: E
            }, {
              default: l(() => [..._[12] || (_[12] = [
                p(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : u("", !0)
      ]),
      _: 1
    }));
  }
}), Xf = /* @__PURE__ */ X(Yf, [["__scopeId", "data-v-18e18eb5"]]), Zf = { class: "header-info" }, eg = { class: "commit-hash" }, tg = {
  key: 0,
  class: "commit-refs"
}, og = { class: "commit-message" }, sg = { class: "commit-date" }, ng = {
  key: 0,
  class: "loading"
}, ag = {
  key: 1,
  class: "changes-section"
}, lg = { class: "stats-row" }, ig = { class: "stat" }, rg = { class: "stat insertions" }, dg = { class: "stat deletions" }, cg = {
  key: 0,
  class: "change-group"
}, ug = {
  key: 1,
  class: "change-group"
}, mg = {
  key: 0,
  class: "version"
}, vg = {
  key: 2,
  class: "change-group"
}, fg = { class: "change-item" }, gg = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Se(), r = b(null), g = b(!0), y = B(() => {
      if (!r.value) return !1;
      const v = r.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), h = B(() => {
      if (!r.value) return !1;
      const v = r.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return _e(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (v, i) => (o(), S(rt, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (m) => v.$emit("close"))
    }, {
      header: l(() => {
        var m, C, d, E;
        return [
          e("div", Zf, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", eg, a(((m = r.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((C = t.commit.hash) == null ? void 0 : C.slice(0, 7))), 1),
            (E = (d = r.value) == null ? void 0 : d.refs) != null && E.length ? (o(), s("span", tg, [
              (o(!0), s(q, null, se(r.value.refs, ($) => (o(), s("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : u("", !0)
          ]),
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = ($) => v.$emit("close"))
          }, {
            default: l(() => [...i[5] || (i[5] = [
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
        var m, C;
        return [
          e("div", og, a(((m = r.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", sg, a(((C = r.value) == null ? void 0 : C.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), s("div", ng, "Loading details...")) : r.value ? (o(), s("div", ag, [
            e("div", lg, [
              e("span", ig, a(r.value.stats.files_changed) + " files", 1),
              e("span", rg, "+" + a(r.value.stats.insertions), 1),
              e("span", dg, "-" + a(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), s("div", cg, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[6] || (i[6] = [
                  p("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(q, null, se(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(q, null, se(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(q, null, se(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d), 1)
              ]))), 128))
            ])) : u("", !0),
            h.value ? (o(), s("div", ug, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[10] || (i[10] = [
                  p("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(q, null, se(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d.name), 1),
                d.version ? (o(), s("span", mg, "(" + a(d.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), s(q, null, se(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d.name), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", vg, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[13] || (i[13] = [
                  p("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", fg, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...i[15] || (i[15] = [
            p(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(ie, {
          variant: "primary",
          onClick: i[2] || (i[2] = (m) => v.$emit("checkout", t.commit))
        }, {
          default: l(() => [...i[16] || (i[16] = [
            p(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), hg = /* @__PURE__ */ X(gg, [["__scopeId", "data-v-d256ff6d"]]), pg = { class: "dialog-message" }, yg = {
  key: 0,
  class: "dialog-details"
}, wg = {
  key: 1,
  class: "dialog-warning"
}, kg = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), S(rt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", pg, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", yg, [
          (o(!0), s(q, null, se(t.details, (r, g) => (o(), s("div", {
            key: g,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), s("p", wg, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          p(" " + a(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: l(() => [
            p(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), S(ie, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: l(() => [
            p(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        f(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
        }, {
          default: l(() => [
            p(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), bg = /* @__PURE__ */ X(kg, [["__scopeId", "data-v-3670b9f5"]]), _g = { class: "base-textarea-wrapper" }, $g = ["value", "rows", "placeholder", "disabled", "maxlength"], Cg = {
  key: 0,
  class: "base-textarea-count"
}, xg = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("div", _g, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = Je(ke((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = Je(ke((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, $g),
      t.showCharCount && t.maxLength ? (o(), s("div", Cg, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), Jt = /* @__PURE__ */ X(xg, [["__scopeId", "data-v-5516e6fc"]]), Sg = ["checked", "disabled"], Ig = { class: "base-checkbox-box" }, Eg = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Mg = {
  key: 0,
  class: "base-checkbox-label"
}, zg = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, Sg),
      e("span", Ig, [
        t.modelValue ? (o(), s("svg", Eg, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      c.$slots.default ? (o(), s("span", Mg, [
        ue(c.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ X(zg, [["__scopeId", "data-v-bf17c831"]]), Lg = { class: "popover-header" }, Tg = { class: "popover-body" }, Rg = {
  key: 0,
  class: "changes-summary"
}, Dg = {
  key: 0,
  class: "change-item"
}, Ng = {
  key: 1,
  class: "change-item"
}, Ug = {
  key: 2,
  class: "change-item"
}, Og = {
  key: 3,
  class: "change-item"
}, Bg = {
  key: 4,
  class: "change-item"
}, Pg = {
  key: 1,
  class: "no-changes"
}, Vg = {
  key: 2,
  class: "loading"
}, Fg = {
  key: 3,
  class: "issues-error"
}, Ag = { class: "error-header" }, Wg = { class: "error-title" }, Gg = { class: "issues-list" }, jg = { class: "message-section" }, Hg = { class: "popover-footer" }, qg = {
  key: 1,
  class: "commit-popover"
}, Kg = { class: "popover-header" }, Jg = { class: "popover-body" }, Qg = {
  key: 0,
  class: "changes-summary"
}, Yg = {
  key: 0,
  class: "change-item"
}, Xg = {
  key: 1,
  class: "change-item"
}, Zg = {
  key: 2,
  class: "change-item"
}, eh = {
  key: 3,
  class: "change-item"
}, th = {
  key: 4,
  class: "change-item"
}, oh = {
  key: 1,
  class: "no-changes"
}, sh = {
  key: 2,
  class: "loading"
}, nh = {
  key: 3,
  class: "issues-error"
}, ah = { class: "error-header" }, lh = { class: "error-title" }, ih = { class: "issues-list" }, rh = { class: "message-section" }, dh = { class: "popover-footer" }, ch = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, r = c, { commit: g } = Se(), y = b(""), h = b(!1), v = b(!1), i = b(null), m = B(() => {
      if (!n.status) return !1;
      const L = n.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || n.status.has_changes;
    }), C = B(() => {
      var L;
      return (L = n.status) != null && L.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (w) => w.has_issues && (w.sync_state === "new" || w.sync_state === "modified")
      ) : [];
    }), d = B(() => C.value.length > 0), E = B(() => d.value && !v.value);
    async function $() {
      var L, w, _;
      if (!(d.value && !v.value) && !(!m.value || !y.value.trim() || h.value)) {
        h.value = !0, i.value = null;
        try {
          const k = await g(y.value.trim(), v.value);
          k.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((L = k.summary) == null ? void 0 : L.new) || 0} new, ${((w = k.summary) == null ? void 0 : w.modified) || 0} modified, ${((_ = k.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, y.value = "", v.value = !1, setTimeout(() => r("committed"), 1e3)) : k.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : k.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: k.message || "Commit failed" };
        } catch (k) {
          i.value = { type: "error", message: k instanceof Error ? k.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (L, w) => t.asModal ? (o(), S(xe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: w[5] || (w[5] = (_) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: w[4] || (w[4] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Lg, [
            w[11] || (w[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: w[0] || (w[0] = (_) => r("close"))
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
          e("div", Tg, [
            t.status && m.value ? (o(), s("div", Rg, [
              t.status.workflows.new.length ? (o(), s("div", Dg, [
                w[12] || (w[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Ng, [
                w[13] || (w[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Ug, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Og, [
                w[15] || (w[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Bg, [
                w[16] || (w[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), s("div", Pg, " No changes to commit ")) : (o(), s("div", Vg, " Loading... ")),
            d.value ? (o(), s("div", Fg, [
              e("div", Ag, [
                w[17] || (w[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Wg, a(C.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Gg, [
                (o(!0), s(q, null, se(C.value, (_) => (o(), s("div", {
                  key: _.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(_.name), 1),
                  p(": " + a(_.issue_summary), 1)
                ]))), 128))
              ]),
              f(Qt, {
                modelValue: v.value,
                "onUpdate:modelValue": w[1] || (w[1] = (_) => v.value = _),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...w[18] || (w[18] = [
                  p(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", jg, [
              f(Jt, {
                modelValue: y.value,
                "onUpdate:modelValue": w[2] || (w[2] = (_) => y.value = _),
                placeholder: E.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || h.value || E.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), s("div", {
              key: 4,
              class: ne(["result", i.value.type])
            }, a(i.value.message), 3)) : u("", !0)
          ]),
          e("div", Hg, [
            f(ie, {
              variant: "secondary",
              onClick: w[3] || (w[3] = (_) => r("close"))
            }, {
              default: l(() => [...w[19] || (w[19] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !y.value.trim() || h.value || E.value,
              loading: h.value,
              onClick: $
            }, {
              default: l(() => [
                p(a(h.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", qg, [
      e("div", Kg, [
        w[21] || (w[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: w[6] || (w[6] = (_) => r("close"))
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
      e("div", Jg, [
        t.status && m.value ? (o(), s("div", Qg, [
          t.status.workflows.new.length ? (o(), s("div", Yg, [
            w[22] || (w[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), s("div", Xg, [
            w[23] || (w[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", Zg, [
            w[24] || (w[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", eh, [
            w[25] || (w[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", th, [
            w[26] || (w[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), s("div", oh, " No changes to commit ")) : (o(), s("div", sh, " Loading... ")),
        d.value ? (o(), s("div", nh, [
          e("div", ah, [
            w[27] || (w[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", lh, a(C.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", ih, [
            (o(!0), s(q, null, se(C.value, (_) => (o(), s("div", {
              key: _.name,
              class: "issue-item"
            }, [
              e("strong", null, a(_.name), 1),
              p(": " + a(_.issue_summary), 1)
            ]))), 128))
          ]),
          f(Qt, {
            modelValue: v.value,
            "onUpdate:modelValue": w[7] || (w[7] = (_) => v.value = _),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...w[28] || (w[28] = [
              p(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", rh, [
          f(Jt, {
            modelValue: y.value,
            "onUpdate:modelValue": w[8] || (w[8] = (_) => y.value = _),
            placeholder: E.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value || E.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), s("div", {
          key: 4,
          class: ne(["result", i.value.type])
        }, a(i.value.message), 3)) : u("", !0)
      ]),
      e("div", dh, [
        f(ie, {
          variant: "secondary",
          onClick: w[9] || (w[9] = (_) => r("close"))
        }, {
          default: l(() => [...w[29] || (w[29] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(ie, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !y.value.trim() || h.value || E.value,
          loading: h.value,
          onClick: $
        }, {
          default: l(() => [
            p(a(h.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), no = /* @__PURE__ */ X(ch, [["__scopeId", "data-v-d92153de"]]), uh = { class: "modal-header" }, mh = { class: "modal-body" }, vh = { class: "switch-message" }, fh = { class: "switch-details" }, gh = { class: "modal-actions" }, hh = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), S(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", uh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", mh, [
            e("p", vh, [
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
            e("p", fh, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", gh, [
            f(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                p(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), ph = /* @__PURE__ */ X(hh, [["__scopeId", "data-v-e9c5253e"]]), yh = { class: "progress-bar" }, wh = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = B(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, g) => (o(), s("div", yh, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: Qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), kh = /* @__PURE__ */ X(wh, [["__scopeId", "data-v-1beb0512"]]), bh = {
  key: 0,
  class: "modal-overlay"
}, _h = { class: "modal-content" }, $h = { class: "modal-body" }, Ch = { class: "progress-info" }, xh = { class: "progress-percentage" }, Sh = { class: "progress-state" }, Ih = { class: "switch-steps" }, Eh = { class: "step-icon" }, Mh = { class: "step-label" }, zh = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = B(() => {
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
      return c.message || y[c.state] || c.state;
    }), r = B(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), g = B(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = y.findIndex((v) => v.state === c.state);
      return y.map((v, i) => {
        let m = "pending", C = "○";
        return i < h ? (m = "completed", C = "✓") : i === h && (m = "active", C = "⟳"), {
          ...v,
          status: m,
          icon: C
        };
      });
    });
    return (y, h) => (o(), S(xe, { to: "body" }, [
      t.show ? (o(), s("div", bh, [
        e("div", _h, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", $h, [
            f(kh, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ch, [
              e("div", xh, a(t.progress) + "%", 1),
              e("div", Sh, a(n.value), 1)
            ]),
            e("div", Ih, [
              (o(!0), s(q, null, se(g.value, (v) => (o(), s("div", {
                key: v.state,
                class: ne(["switch-step", v.status])
              }, [
                e("span", Eh, a(v.icon), 1),
                e("span", Mh, a(v.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Lh = /* @__PURE__ */ X(zh, [["__scopeId", "data-v-768a5078"]]), Th = { class: "modal-header" }, Rh = { class: "modal-body" }, Dh = {
  key: 0,
  class: "node-section"
}, Nh = { class: "node-list" }, Uh = {
  key: 1,
  class: "node-section"
}, Oh = { class: "node-list" }, Bh = { class: "modal-actions" }, Ph = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), S(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Th, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Rh, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Dh, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Nh, [
                (o(!0), s(q, null, se(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Uh, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Oh, [
                (o(!0), s(q, null, se(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + a(r), 1))), 128))
              ])
            ])) : u("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Bh, [
            f(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                p(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Vh = /* @__PURE__ */ X(Ph, [["__scopeId", "data-v-7cad7518"]]);
async function ht(t, c = {}, n = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), n);
  try {
    const y = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : y;
  }
}
function Fh() {
  const t = b(null);
  async function c() {
    try {
      const h = await ht(
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
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const h = await ht(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const h = await ht(
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
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ht(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ht(
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
    getStatus: r,
    restart: g,
    kill: y
  };
}
const Ah = { class: "comfygit-panel" }, Wh = { class: "panel-header" }, Gh = { class: "header-left" }, jh = {
  key: 0,
  class: "header-info"
}, Hh = { class: "header-actions" }, qh = { class: "env-switcher" }, Kh = {
  key: 0,
  class: "header-info"
}, Jh = { class: "branch-name" }, Qh = { class: "panel-main" }, Yh = { class: "sidebar" }, Xh = { class: "sidebar-section" }, Zh = { class: "sidebar-section" }, ep = { class: "sidebar-section" }, tp = { class: "content-area" }, op = {
  key: 0,
  class: "error-message"
}, sp = {
  key: 1,
  class: "loading"
}, np = {
  key: 4,
  class: "dialog-overlay"
}, ap = { class: "dialog-content create-progress-dialog" }, lp = { class: "dialog-body create-progress-body" }, ip = { class: "create-progress-message" }, rp = { class: "dialog-content env-selector-dialog" }, dp = { class: "dialog-header" }, cp = { class: "dialog-body" }, up = { class: "env-list" }, mp = { class: "env-info" }, vp = { class: "env-name-row" }, fp = { class: "env-indicator" }, gp = { class: "env-name" }, hp = {
  key: 0,
  class: "env-branch"
}, pp = {
  key: 1,
  class: "current-label"
}, yp = { class: "env-stats" }, wp = ["onClick"], kp = { class: "toast-container" }, bp = { class: "toast-icon" }, _p = { class: "toast-message" }, $p = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: g,
      getBranches: y,
      checkout: h,
      createBranch: v,
      switchBranch: i,
      getEnvironments: m,
      switchEnvironment: C,
      getSwitchProgress: d,
      createEnvironment: E,
      getCreateProgress: $,
      deleteEnvironment: L,
      syncEnvironmentManually: w
    } = Se(), _ = Fh(), k = b(null), U = b([]), W = b([]), j = b([]), Q = B(() => j.value.find((H) => H.is_current)), P = b(!1), T = b(null), O = b(null), M = b(!1), x = b(null), V = b(null), A = b(!1), K = b(!1), G = b(""), z = b({ state: "idle", progress: 0, message: "" });
    let ee = null, D = null;
    const R = b(!1), ae = b({ state: "idle", message: "" }), te = b(null);
    let $e = null;
    const le = b("status"), Ye = b("this-env");
    function pe(H, I) {
      le.value = H, Ye.value = I;
    }
    function ut(H) {
      const re = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[H];
      re && pe(re.view, re.section);
    }
    function mt() {
      pe("branches", "this-env");
    }
    function vt() {
      n("close"), setTimeout(() => {
        var I;
        const H = document.querySelectorAll("button.comfyui-button");
        for (const re of H)
          if (((I = re.textContent) == null ? void 0 : I.trim()) === "Manager") {
            re.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const we = b(null), Ke = b(!1), Fe = b(!1), Oe = b([]);
    let ft = 0;
    function ve(H, I = "info", re = 3e3) {
      const ye = ++ft;
      return Oe.value.push({ id: ye, message: H, type: I }), re > 0 && setTimeout(() => {
        Oe.value = Oe.value.filter((Te) => Te.id !== ye);
      }, re), ye;
    }
    function Be(H) {
      Oe.value = Oe.value.filter((I) => I.id !== H);
    }
    function J(H) {
      switch (H) {
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
    const de = B(() => {
      if (!k.value) return "neutral";
      const H = k.value.workflows, I = H.new.length > 0 || H.modified.length > 0 || H.deleted.length > 0 || k.value.has_changes;
      return k.value.comparison.is_synced ? I ? "warning" : "success" : "error";
    });
    B(() => k.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function F() {
      P.value = !0, T.value = null;
      try {
        const [H, I, re, ye] = await Promise.all([
          r(!0),
          g(),
          y(),
          m()
        ]);
        k.value = H, U.value = I.commits, W.value = re.branches, j.value = ye, n("statusUpdate", H), x.value && await x.value.loadWorkflows(!0);
      } catch (H) {
        T.value = H instanceof Error ? H.message : "Failed to load status", k.value = null, U.value = [], W.value = [];
      } finally {
        P.value = !1;
      }
    }
    function N(H) {
      O.value = H;
    }
    async function oe(H) {
      var re;
      O.value = null;
      const I = k.value && (k.value.workflows.new.length > 0 || k.value.workflows.modified.length > 0 || k.value.workflows.deleted.length > 0 || k.value.has_changes);
      we.value = {
        title: I ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: I ? "You have uncommitted changes that will be lost." : `Checkout commit ${H.short_hash || ((re = H.hash) == null ? void 0 : re.slice(0, 7))}?`,
        details: I ? jt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: I,
        onConfirm: async () => {
          var Re;
          we.value = null, Ae();
          const ye = ve(`Checking out ${H.short_hash || ((Re = H.hash) == null ? void 0 : Re.slice(0, 7))}...`, "info", 0), Te = await h(H.hash, I);
          Be(ye), Te.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(Te.message || "Checkout failed", "error");
        }
      };
    }
    async function ge(H) {
      const I = k.value && (k.value.workflows.new.length > 0 || k.value.workflows.modified.length > 0 || k.value.workflows.deleted.length > 0 || k.value.has_changes);
      we.value = {
        title: I ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: I ? "You have uncommitted changes." : `Switch to branch "${H}"?`,
        details: I ? jt() : void 0,
        warning: I ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          we.value = null, Ae();
          const re = ve(`Switching to ${H}...`, "info", 0), ye = await i(H, I);
          Be(re), ye.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function Le(H) {
      const I = ve(`Creating branch ${H}...`, "info", 0), re = await v(H);
      Be(I), re.status === "success" ? (ve(`Branch "${H}" created`, "success"), await F()) : ve(re.message || "Failed to create branch", "error");
    }
    async function Xe(H) {
      O.value = null;
      const I = prompt("Enter branch name:");
      if (I) {
        const re = ve(`Creating branch ${I}...`, "info", 0), ye = await v(I, H.hash);
        Be(re), ye.status === "success" ? (ve(`Branch "${I}" created from ${H.short_hash}`, "success"), await F()) : ve(ye.message || "Failed to create branch", "error");
      }
    }
    function Ae() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function st(H) {
      M.value = !1, G.value = H, A.value = !0;
    }
    async function St() {
      A.value = !1, K.value = !0, Ae(), z.value = {
        progress: 10,
        state: Ze(10),
        message: It(10)
      };
      try {
        await C(G.value), co(), uo();
      } catch (H) {
        et(), K.value = !1, ve(`Failed to initiate switch: ${H instanceof Error ? H.message : "Unknown error"}`, "error"), z.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ze(H) {
      return H >= 100 ? "complete" : H >= 80 ? "validating" : H >= 60 ? "starting" : H >= 30 ? "syncing" : "preparing";
    }
    function It(H) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ze(H)] || "";
    }
    function co() {
      if (D) return;
      let H = 10;
      const I = 60, re = 5e3, ye = 100, Te = (I - H) / (re / ye);
      D = window.setInterval(() => {
        if (H += Te, H >= I && (H = I, et()), z.value.progress < I) {
          const Re = Math.floor(H);
          z.value = {
            progress: Re,
            state: Ze(Re),
            message: It(Re)
          };
        }
      }, ye);
    }
    function et() {
      D && (clearInterval(D), D = null);
    }
    function uo() {
      ee || (ee = window.setInterval(async () => {
        try {
          let H = await _.getStatus();
          if ((!H || H.state === "idle") && (H = await d()), !H)
            return;
          const I = H.progress || 0;
          I >= 60 && et();
          const re = Math.max(I, z.value.progress), ye = H.state && H.state !== "idle" && H.state !== "unknown", Te = ye ? H.state : Ze(re), Re = ye && H.message || It(re);
          z.value = {
            state: Te,
            progress: re,
            message: Re
          }, H.state === "complete" ? (et(), Mt(), K.value = !1, ve(`✓ Switched to ${G.value}`, "success"), await F(), G.value = "") : H.state === "rolled_back" ? (et(), Mt(), K.value = !1, ve("Switch failed, restored previous environment", "warning"), G.value = "") : H.state === "critical_failure" && (et(), Mt(), K.value = !1, ve(`Critical error during switch: ${H.message}`, "error"), G.value = "");
        } catch (H) {
          console.error("Failed to poll switch progress:", H);
        }
      }, 1e3));
    }
    function Mt() {
      et(), ee && (clearInterval(ee), ee = null);
    }
    function mo() {
      A.value = !1, G.value = "";
    }
    async function vo() {
      Ke.value = !1, await F(), ve("✓ Changes committed", "success");
    }
    async function fo() {
      Fe.value = !1;
      const H = ve("Syncing environment...", "info", 0);
      try {
        const I = await w("skip", !0);
        if (Be(H), I.status === "success") {
          const re = [];
          I.nodes_installed.length && re.push(`${I.nodes_installed.length} installed`), I.nodes_removed.length && re.push(`${I.nodes_removed.length} removed`);
          const ye = re.length ? `: ${re.join(", ")}` : "";
          ve(`✓ Environment synced${ye}`, "success"), await F();
        } else {
          const re = I.errors.length ? I.errors.join("; ") : I.message;
          ve(`Sync failed: ${re}`, "error");
        }
      } catch (I) {
        Be(H), ve(`Sync error: ${I instanceof Error ? I.message : "Unknown error"}`, "error");
      }
    }
    async function go(H) {
      te.value = H, R.value = !0, ae.value = { state: "creating", message: `Creating environment '${H.name}'...` };
      try {
        const I = await E(H);
        I.status === "started" ? ho() : I.status === "error" && (R.value = !1, ve(`Failed to create environment: ${I.message}. Check debug logs for details.`, "error"), te.value = null);
      } catch (I) {
        R.value = !1, ve(`Error creating environment: ${I instanceof Error ? I.message : "Unknown error"}. Check debug logs.`, "error"), te.value = null;
      }
    }
    function ho() {
      $e || ($e = window.setInterval(async () => {
        var H;
        try {
          const I = await $();
          ae.value = { state: I.state, message: I.message }, I.state === "complete" ? (Gt(), R.value = !1, ve(`✓ Environment '${I.environment_name}' created`, "success"), await F(), V.value && await V.value.loadEnvironments(), (H = te.value) != null && H.switch_after && I.environment_name && await st(I.environment_name), te.value = null) : I.state === "error" && (Gt(), R.value = !1, ve(`Failed to create environment: ${I.error || I.message}. Check debug logs.`, "error"), te.value = null);
        } catch (I) {
          console.error("Failed to poll create progress:", I);
        }
      }, 2e3));
    }
    function Gt() {
      $e && (clearInterval($e), $e = null);
    }
    async function po(H) {
      var I;
      if (((I = Q.value) == null ? void 0 : I.name) === H) {
        ve("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      we.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${H}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          we.value = null;
          try {
            const re = await L(H);
            re.status === "success" ? (ve(`Environment "${H}" deleted`, "success"), await F(), V.value && await V.value.loadEnvironments()) : ve(re.message || "Failed to delete environment", "error");
          } catch (re) {
            ve(`Error deleting environment: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function yo(H) {
      ve(`Viewing details for "${H}"`, "info"), pe("models-env", "this-env");
    }
    function jt() {
      if (!k.value) return [];
      const H = [], I = k.value.workflows;
      return I.new.length && H.push(`${I.new.length} new workflow(s)`), I.modified.length && H.push(`${I.modified.length} modified workflow(s)`), I.deleted.length && H.push(`${I.deleted.length} deleted workflow(s)`), H;
    }
    return _e(F), (H, I) => {
      var re, ye, Te, Re;
      return o(), s("div", Ah, [
        e("div", Wh, [
          e("div", Gh, [
            I[27] || (I[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            k.value ? (o(), s("div", jh)) : u("", !0)
          ]),
          e("div", Hh, [
            e("button", {
              class: ne(["icon-btn", { spinning: P.value }]),
              onClick: F,
              title: "Refresh"
            }, [...I[28] || (I[28] = [
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
              onClick: I[0] || (I[0] = (ce) => n("close")),
              title: "Close"
            }, [...I[29] || (I[29] = [
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
        e("div", qh, [
          I[31] || (I[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: I[1] || (I[1] = (ce) => pe("environments", "all-envs"))
          }, [
            k.value ? (o(), s("div", Kh, [
              e("span", null, a(((re = Q.value) == null ? void 0 : re.name) || ((ye = k.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", Jh, "(" + a(k.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            I[30] || (I[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Qh, [
          e("div", Yh, [
            e("div", Xh, [
              I[32] || (I[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "status" && Ye.value === "this-env" }]),
                onClick: I[2] || (I[2] = (ce) => pe("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "workflows" }]),
                onClick: I[3] || (I[3] = (ce) => pe("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "models-env" }]),
                onClick: I[4] || (I[4] = (ce) => pe("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "branches" }]),
                onClick: I[5] || (I[5] = (ce) => pe("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "history" }]),
                onClick: I[6] || (I[6] = (ce) => pe("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "nodes" }]),
                onClick: I[7] || (I[7] = (ce) => pe("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "debug-env" }]),
                onClick: I[8] || (I[8] = (ce) => pe("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            I[35] || (I[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Zh, [
              I[33] || (I[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "environments" }]),
                onClick: I[9] || (I[9] = (ce) => pe("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "model-index" }]),
                onClick: I[10] || (I[10] = (ce) => pe("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "settings" }]),
                onClick: I[11] || (I[11] = (ce) => pe("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "debug-workspace" }]),
                onClick: I[12] || (I[12] = (ce) => pe("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            I[36] || (I[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ep, [
              I[34] || (I[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "export" }]),
                onClick: I[13] || (I[13] = (ce) => pe("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "import" }]),
                onClick: I[14] || (I[14] = (ce) => pe("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "remotes" }]),
                onClick: I[15] || (I[15] = (ce) => pe("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", tp, [
            T.value ? (o(), s("div", op, a(T.value), 1)) : !k.value && le.value === "status" ? (o(), s("div", sp, " Loading status... ")) : (o(), s(q, { key: 2 }, [
              le.value === "status" ? (o(), S(Jn, {
                key: 0,
                status: k.value,
                onSwitchBranch: mt,
                onCommitChanges: I[16] || (I[16] = (ce) => Ke.value = !0),
                onSyncEnvironment: I[17] || (I[17] = (ce) => Fe.value = !0),
                onViewWorkflows: I[18] || (I[18] = (ce) => pe("workflows", "this-env")),
                onViewHistory: I[19] || (I[19] = (ce) => pe("history", "this-env")),
                onViewDebug: I[20] || (I[20] = (ce) => pe("debug-env", "this-env"))
              }, null, 8, ["status"])) : le.value === "workflows" ? (o(), S(kc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: x,
                onRefresh: F
              }, null, 512)) : le.value === "models-env" ? (o(), S(ou, {
                key: 2,
                onNavigate: ut
              })) : le.value === "branches" ? (o(), S(ca, {
                key: 3,
                branches: W.value,
                current: ((Te = k.value) == null ? void 0 : Te.branch) || null,
                onSwitch: ge,
                onCreate: Le
              }, null, 8, ["branches", "current"])) : le.value === "history" ? (o(), S(ba, {
                key: 4,
                commits: U.value,
                onSelect: N,
                onCheckout: oe
              }, null, 8, ["commits"])) : le.value === "nodes" ? (o(), S(Gu, {
                key: 5,
                onOpenNodeManager: vt
              })) : le.value === "debug-env" ? (o(), S(Wm, { key: 6 })) : le.value === "environments" ? (o(), S(vv, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: V,
                onSwitch: st,
                onCreate: go,
                onDelete: po,
                onViewDetails: yo
              }, null, 512)) : le.value === "model-index" ? (o(), S(_u, {
                key: 8,
                onRefresh: F
              })) : le.value === "settings" ? (o(), S(Pm, { key: 9 })) : le.value === "debug-workspace" ? (o(), S(Fm, { key: 10 })) : le.value === "export" ? (o(), S($v, { key: 11 })) : le.value === "import" ? (o(), S(Xf, { key: 12 })) : le.value === "remotes" ? (o(), S(km, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        O.value ? (o(), S(hg, {
          key: 0,
          commit: O.value,
          onClose: I[21] || (I[21] = (ce) => O.value = null),
          onCheckout: oe,
          onCreateBranch: Xe
        }, null, 8, ["commit"])) : u("", !0),
        we.value ? (o(), S(bg, {
          key: 1,
          title: we.value.title,
          message: we.value.message,
          details: we.value.details,
          warning: we.value.warning,
          confirmLabel: we.value.confirmLabel,
          cancelLabel: we.value.cancelLabel,
          secondaryLabel: we.value.secondaryLabel,
          secondaryAction: we.value.secondaryAction,
          destructive: we.value.destructive,
          onConfirm: we.value.onConfirm,
          onCancel: I[22] || (I[22] = (ce) => we.value = null),
          onSecondary: we.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        f(ph, {
          show: A.value,
          "from-environment": ((Re = Q.value) == null ? void 0 : Re.name) || "unknown",
          "to-environment": G.value,
          onConfirm: St,
          onClose: mo
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ke.value && k.value ? (o(), S(no, {
          key: 2,
          status: k.value,
          "as-modal": !0,
          onClose: I[23] || (I[23] = (ce) => Ke.value = !1),
          onCommitted: vo
        }, null, 8, ["status"])) : u("", !0),
        Fe.value && k.value ? (o(), S(Vh, {
          key: 3,
          show: Fe.value,
          "mismatch-details": {
            missing_nodes: k.value.comparison.missing_nodes,
            extra_nodes: k.value.comparison.extra_nodes
          },
          onConfirm: fo,
          onClose: I[24] || (I[24] = (ce) => Fe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        f(Lh, {
          show: K.value,
          state: z.value.state,
          progress: z.value.progress,
          message: z.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        R.value ? (o(), s("div", np, [
          e("div", ap, [
            I[39] || (I[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", lp, [
              I[37] || (I[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", ip, a(ae.value.message), 1),
              I[38] || (I[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : u("", !0),
        M.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: I[26] || (I[26] = ke((ce) => M.value = !1, ["self"]))
        }, [
          e("div", rp, [
            e("div", dp, [
              I[41] || (I[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: I[25] || (I[25] = (ce) => M.value = !1)
              }, [...I[40] || (I[40] = [
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
            e("div", cp, [
              I[42] || (I[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", up, [
                (o(!0), s(q, null, se(j.value, (ce) => (o(), s("div", {
                  key: ce.name,
                  class: ne(["env-item", { current: ce.is_current }])
                }, [
                  e("div", mp, [
                    e("div", vp, [
                      e("span", fp, a(ce.is_current ? "●" : "○"), 1),
                      e("span", gp, a(ce.name), 1),
                      ce.current_branch ? (o(), s("span", hp, "(" + a(ce.current_branch) + ")", 1)) : u("", !0),
                      ce.is_current ? (o(), s("span", pp, "CURRENT")) : u("", !0)
                    ]),
                    e("div", yp, a(ce.workflow_count) + " workflows • " + a(ce.node_count) + " nodes ", 1)
                  ]),
                  ce.is_current ? u("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (z1) => st(ce.name)
                  }, " SWITCH ", 8, wp))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", kp, [
          f(Co, { name: "toast" }, {
            default: l(() => [
              (o(!0), s(q, null, se(Oe.value, (ce) => (o(), s("div", {
                key: ce.id,
                class: ne(["toast", ce.type])
              }, [
                e("span", bp, a(J(ce.type)), 1),
                e("span", _p, a(ce.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Cp = /* @__PURE__ */ X($p, [["__scopeId", "data-v-fca424af"]]), xp = { class: "item-header" }, Sp = { class: "item-info" }, Ip = { class: "filename" }, Ep = { class: "metadata" }, Mp = { class: "size" }, zp = {
  key: 0,
  class: "type"
}, Lp = { class: "item-actions" }, Tp = {
  key: 0,
  class: "progress-section"
}, Rp = { class: "progress-bar" }, Dp = { class: "progress-stats" }, Np = { class: "downloaded" }, Up = { class: "speed" }, Op = {
  key: 0,
  class: "eta"
}, Bp = {
  key: 1,
  class: "status-msg paused"
}, Pp = {
  key: 2,
  class: "status-msg queued"
}, Vp = {
  key: 3,
  class: "status-msg completed"
}, Fp = {
  key: 4,
  class: "status-msg failed"
}, Ap = {
  key: 0,
  class: "retries"
}, Wp = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function r(h) {
      if (h === 0) return "?";
      const v = h / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const v = Math.floor(h / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (h, v) => (o(), s("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", xp, [
        e("div", Sp, [
          e("div", Ip, a(t.item.filename), 1),
          e("div", Ep, [
            e("span", Mp, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", zp, a(t.item.type), 1)) : u("", !0)
          ])
        ]),
        e("div", Lp, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (i) => n("cancel")),
            title: "Cancel"
          }, " × ")) : u("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (i) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : u("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (i) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : u("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (i) => n("remove")),
            title: "Remove"
          }, " × ")) : u("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Tp, [
        e("div", Rp, [
          e("div", {
            class: "progress-fill",
            style: Qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Dp, [
          e("span", Np, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", Up, a(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Op, a(y(t.item.eta)), 1)) : u("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Bp, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Pp, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Vp, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Fp, [
        p(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Ap, "(" + a(t.item.retries) + " retries)", 1)) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ X(Wp, [["__scopeId", "data-v-2110df65"]]), Gp = { class: "queue-title" }, jp = { class: "count" }, Hp = { class: "queue-actions" }, qp = { class: "action-label" }, Kp = {
  key: 0,
  class: "overall-progress"
}, Jp = { class: "progress-bar" }, Qp = {
  key: 0,
  class: "current-mini"
}, Yp = { class: "filename" }, Xp = { class: "speed" }, Zp = {
  key: 1,
  class: "queue-content"
}, e1 = {
  key: 0,
  class: "section"
}, t1 = {
  key: 1,
  class: "section"
}, o1 = { class: "section-header" }, s1 = { class: "section-label paused" }, n1 = { class: "items-list" }, a1 = {
  key: 2,
  class: "section"
}, l1 = { class: "section-header" }, i1 = { class: "section-label" }, r1 = { class: "items-list" }, d1 = {
  key: 3,
  class: "section"
}, c1 = { class: "section-header" }, u1 = { class: "section-label" }, m1 = { class: "items-list" }, v1 = {
  key: 4,
  class: "section"
}, f1 = { class: "section-header" }, g1 = { class: "section-label failed" }, h1 = { class: "items-list" }, p1 = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: r,
      completedItems: g,
      failedItems: y,
      pausedItems: h,
      hasItems: v,
      activeCount: i,
      cancelDownload: m,
      retryDownload: C,
      resumeDownload: d,
      resumeAllPaused: E,
      removeItem: $,
      clearCompleted: L
    } = xt(), w = b(!1);
    let _ = null;
    Ot(
      () => ({
        active: i.value,
        failed: y.value.length,
        paused: h.value.length,
        completed: g.value.length
      }),
      (j, Q) => {
        _ && (clearTimeout(_), _ = null);
        const P = j.active === 0 && j.failed === 0 && j.paused === 0 && j.completed > 0, T = Q && (Q.active > 0 || Q.paused > 0);
        P && T && (_ = setTimeout(() => {
          L(), _ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const k = B(() => {
      var P;
      if (c.items.length === 0) return 0;
      const j = g.value.length, Q = ((P = n.value) == null ? void 0 : P.progress) || 0;
      return Math.round((j + Q / 100) / c.items.length * 100);
    });
    function U(j) {
      m(j);
    }
    function W(j) {
      return j === 0 ? "" : `${(j / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (j, Q) => (o(), S(xe, { to: "body" }, [
      me(v) ? (o(), s("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !w.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Q[0] || (Q[0] = (P) => w.value = !w.value)
        }, [
          e("div", Gp, [
            Q[4] || (Q[4] = e("span", { class: "icon" }, "↓", -1)),
            Q[5] || (Q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", jp, "(" + a(me(i)) + "/" + a(me(c).items.length) + ")", 1)
          ]),
          e("div", Hp, [
            e("span", qp, a(w.value ? "minimize" : "expand"), 1)
          ])
        ]),
        w.value ? (o(), s("div", Zp, [
          me(n) ? (o(), s("div", e1, [
            Q[6] || (Q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(pt, {
              item: me(n),
              onCancel: Q[1] || (Q[1] = (P) => U(me(n).id))
            }, null, 8, ["item"])
          ])) : u("", !0),
          me(h).length > 0 ? (o(), s("div", t1, [
            e("div", o1, [
              e("span", s1, "Paused (" + a(me(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Q[2] || (Q[2] = //@ts-ignore
                (...P) => me(E) && me(E)(...P))
              }, "Resume All")
            ]),
            e("div", n1, [
              (o(!0), s(q, null, se(me(h), (P) => (o(), S(pt, {
                key: P.id,
                item: P,
                onResume: (T) => me(d)(P.id),
                onRemove: (T) => me($)(P.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          me(r).length > 0 ? (o(), s("div", a1, [
            e("div", l1, [
              e("span", i1, "Queued (" + a(me(r).length) + ")", 1)
            ]),
            e("div", r1, [
              (o(!0), s(q, null, se(me(r), (P) => (o(), S(pt, {
                key: P.id,
                item: P,
                onCancel: (T) => U(P.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : u("", !0),
          me(g).length > 0 ? (o(), s("div", d1, [
            e("div", c1, [
              e("span", u1, "Completed (" + a(me(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Q[3] || (Q[3] = //@ts-ignore
                (...P) => me(L) && me(L)(...P))
              }, "Clear")
            ]),
            e("div", m1, [
              (o(!0), s(q, null, se(me(g).slice(0, 3), (P) => (o(), S(pt, {
                key: P.id,
                item: P,
                onRemove: (T) => me($)(P.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          me(y).length > 0 ? (o(), s("div", v1, [
            e("div", f1, [
              e("span", g1, "Failed (" + a(me(y).length) + ")", 1)
            ]),
            e("div", h1, [
              (o(!0), s(q, null, se(me(y), (P) => (o(), S(pt, {
                key: P.id,
                item: P,
                onRetry: (T) => me(C)(P.id),
                onRemove: (T) => me($)(P.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : u("", !0)
        ])) : (o(), s("div", Kp, [
          e("div", Jp, [
            e("div", {
              class: "progress-fill",
              style: Qe({ width: `${k.value}%` })
            }, null, 4)
          ]),
          me(n) ? (o(), s("div", Qp, [
            e("span", Yp, a(me(n).filename), 1),
            e("span", Xp, a(W(me(n).speed)), 1)
          ])) : u("", !0)
        ]))
      ], 2)) : u("", !0)
    ]));
  }
}), y1 = /* @__PURE__ */ X(p1, [["__scopeId", "data-v-60751cfa"]]), w1 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', k1 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', b1 = {
  comfy: w1,
  phosphor: k1
}, At = "comfy", ao = "comfygit-theme";
let tt = null, lo = At;
function _1() {
  try {
    const t = localStorage.getItem(ao);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return At;
}
function io(t = At) {
  tt && tt.remove(), tt = document.createElement("style"), tt.id = "comfygit-theme-styles", tt.setAttribute("data-theme", t), tt.textContent = b1[t], document.head.appendChild(tt), document.body.setAttribute("data-comfygit-theme", t), lo = t;
  try {
    localStorage.setItem(ao, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function $1() {
  return lo;
}
function C1(t) {
  io(t);
}
const Wt = document.createElement("link");
Wt.rel = "stylesheet";
Wt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Wt);
const x1 = _1();
io(x1);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), C1(t);
  },
  getTheme: () => {
    const t = $1();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let De = null, Me = null, _t = null, yt = null, Yt = null;
const it = b(null);
async function Et() {
  var t;
  if (!((t = lt) != null && t.api)) return null;
  try {
    const c = await lt.api.fetchApi("/v2/comfygit/status");
    c.ok && (it.value = await c.json());
  } catch {
  }
}
function S1() {
  if (!it.value) return !1;
  const t = it.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || it.value.has_changes;
}
function I1() {
  De && De.remove(), De = document.createElement("div"), De.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", De.appendChild(t), De.addEventListener("click", (r) => {
    r.target === De && Rt();
  });
  const c = (r) => {
    r.key === "Escape" && (Rt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), Pt({
    render: () => Vt(Cp, {
      onClose: Rt,
      onStatusUpdate: (r) => {
        it.value = r, $t();
      }
    })
  }).mount(t), document.body.appendChild(De);
}
function Rt() {
  De && (De.remove(), De = null);
}
function E1(t) {
  wt(), Me = document.createElement("div"), Me.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Me.style.position = "fixed", Me.style.top = `${c.bottom + 8}px`, Me.style.right = `${window.innerWidth - c.right}px`, Me.style.zIndex = "10001";
  const n = (g) => {
    Me && !Me.contains(g.target) && g.target !== t && (wt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (g) => {
    g.key === "Escape" && (wt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), _t = Pt({
    render: () => Vt(no, {
      status: it.value,
      onClose: wt,
      onCommitted: () => {
        wt(), Et().then($t);
      }
    })
  }), _t.mount(Me), document.body.appendChild(Me);
}
function wt() {
  _t && (_t.unmount(), _t = null), Me && (Me.remove(), Me = null);
}
function M1() {
  yt || (yt = document.createElement("div"), yt.className = "comfygit-download-queue-root", Yt = Pt({
    render: () => Vt(y1)
  }), Yt.mount(yt), document.body.appendChild(yt), console.log("[ComfyGit] Model download queue mounted"));
}
let We = null;
function $t() {
  if (!We) return;
  const t = We.querySelector(".commit-indicator");
  t && (t.style.display = S1() ? "block" : "none");
}
const ro = document.createElement("style");
ro.textContent = `
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
document.head.appendChild(ro);
lt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = I1, We = document.createElement("button"), We.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", We.innerHTML = 'Commit <span class="commit-indicator"></span>', We.title = "Quick Commit", We.onclick = () => E1(We), t.appendChild(c), t.appendChild(We), (y = (g = lt.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (lt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), M1();
    const { loadPendingDownloads: n } = xt();
    n(), await Et(), $t(), setInterval(async () => {
      await Et(), $t();
    }, 3e4);
    const r = lt.api;
    if (r) {
      let h = function() {
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
        const C = document.createElement("span");
        C.textContent = "Workflows updated - refresh required", m.appendChild(C);
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
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => h(), m.appendChild(d);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => m.remove(), m.appendChild(E), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: C, workflow_name: d } = m.detail;
        console.log(`[ComfyGit] Workflow ${C}: ${d}`), await Et(), $t();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (m) => {
        const C = m.detail != null;
        C && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : v()), i = C;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
