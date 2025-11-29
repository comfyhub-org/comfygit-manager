import { app as kt } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as he, createBlock as S, resolveDynamicComponent as ts, normalizeClass as ae, withCtx as i, toDisplayString as n, createVNode as g, createTextVNode as w, computed as U, Fragment as W, renderList as Z, normalizeStyle as He, ref as $, onMounted as Le, watch as jt, Teleport as Te, withModifiers as Me, Transition as Fs, createSlots as Ht, withKeys as ct, onUnmounted as Vs, reactive as vs, readonly as As, unref as we, withDirectives as Be, vModelText as Nt, nextTick as Ws, vModelSelect as bt, vModelCheckbox as Zt, TransitionGroup as Gs, createApp as ss, h as os } from "vue";
const js = { class: "panel-layout" }, Hs = {
  key: 0,
  class: "panel-layout-header"
}, qs = {
  key: 1,
  class: "panel-layout-search"
}, Ks = { class: "panel-layout-content" }, Ys = {
  key: 2,
  class: "panel-layout-footer"
}, Xs = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (r, a) => (s(), o("div", js, [
      r.$slots.header ? (s(), o("div", Hs, [
        he(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (s(), o("div", qs, [
        he(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Ks, [
        he(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", Ys, [
        he(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), X = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [d, p] of r)
    a[d] = p;
  return a;
}, Oe = /* @__PURE__ */ X(Xs, [["__scopeId", "data-v-21565df9"]]), Qs = {
  key: 0,
  class: "panel-title-prefix"
}, Zs = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Js = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, a) => (s(), S(ts(`h${t.level}`), {
      class: ae(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", Qs, n(t.prefix), 1)) : (s(), o("span", Zs)),
        he(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), eo = /* @__PURE__ */ X(Js, [["__scopeId", "data-v-c3875efc"]]), to = ["title"], so = ["width", "height"], oo = /* @__PURE__ */ Y({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: a[0] || (a[0] = (d) => r.$emit("click"))
    }, [
      (s(), o("svg", {
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
      ])], 8, so))
    ], 8, to));
  }
}), fs = /* @__PURE__ */ X(oo, [["__scopeId", "data-v-6fc7f16d"]]), ao = { class: "header-left" }, no = {
  key: 0,
  class: "header-actions"
}, lo = /* @__PURE__ */ Y({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: ae(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", ao, [
        g(eo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(n(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), S(fs, {
          key: 0,
          onClick: a[0] || (a[0] = (d) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (s(), o("div", no, [
        he(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ X(lo, [["__scopeId", "data-v-55a62cd6"]]), io = {
  key: 0,
  class: "section-title-count"
}, ro = {
  key: 1,
  class: "section-title-icon"
}, co = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), S(ts(`h${t.level}`), {
      class: ae(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, {
      default: i(() => [
        he(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", io, "(" + n(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", ro, n(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ae = /* @__PURE__ */ X(co, [["__scopeId", "data-v-559361eb"]]), uo = { class: "status-grid" }, mo = { class: "status-grid__columns" }, vo = { class: "status-grid__column" }, fo = { class: "status-grid__title" }, go = { class: "status-grid__column status-grid__column--right" }, po = { class: "status-grid__title" }, ho = {
  key: 0,
  class: "status-grid__footer"
}, yo = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, a) => (s(), o("div", uo, [
      e("div", mo, [
        e("div", vo, [
          e("h4", fo, n(t.leftTitle), 1),
          he(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", go, [
          e("h4", po, n(t.rightTitle), 1),
          he(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", ho, [
        he(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), wo = /* @__PURE__ */ X(yo, [["__scopeId", "data-v-73b7ba3f"]]), ko = {
  key: 0,
  class: "status-item__icon"
}, bo = {
  key: 1,
  class: "status-item__count"
}, _o = { class: "status-item__label" }, $o = /* @__PURE__ */ Y({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, a = U(() => `status-item--${r.variant}`);
    return (d, p) => (s(), o("div", {
      class: ae(["status-item", a.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", ko, n(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", bo, n(t.count), 1)) : c("", !0),
      e("span", _o, n(t.label), 1)
    ], 2));
  }
}), Qe = /* @__PURE__ */ X($o, [["__scopeId", "data-v-6f929183"]]), Co = { class: "issue-card__header" }, xo = { class: "issue-card__icon" }, So = { class: "issue-card__title" }, Io = {
  key: 0,
  class: "issue-card__content"
}, Eo = {
  key: 0,
  class: "issue-card__description"
}, Mo = {
  key: 1,
  class: "issue-card__items"
}, zo = {
  key: 2,
  class: "issue-card__actions"
}, Lo = /* @__PURE__ */ Y({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, a = U(() => `issue-card--${r.severity}`);
    return (d, p) => (s(), o("div", {
      class: ae(["issue-card", a.value])
    }, [
      e("div", Co, [
        e("span", xo, n(t.icon), 1),
        e("h4", So, n(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", Io, [
        t.description ? (s(), o("p", Eo, n(t.description), 1)) : c("", !0),
        he(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", Mo, [
        (s(!0), o(W, null, Z(t.items, (v, y) => (s(), o("div", {
          key: y,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, n(v), 1)
        ]))), 128))
      ])) : c("", !0),
      d.$slots.actions ? (s(), o("div", zo, [
        he(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), dt = /* @__PURE__ */ X(Lo, [["__scopeId", "data-v-df6aa348"]]), Ro = ["type", "disabled"], Do = {
  key: 0,
  class: "spinner"
}, No = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ae(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", Do)) : c("", !0),
      t.loading ? c("", !0) : he(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ro));
  }
}), J = /* @__PURE__ */ X(No, [["__scopeId", "data-v-772abe47"]]), To = { class: "empty-state" }, Uo = {
  key: 0,
  class: "empty-icon"
}, Po = { class: "empty-message" }, Bo = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, a) => (s(), o("div", To, [
      t.icon ? (s(), o("div", Uo, n(t.icon), 1)) : c("", !0),
      e("p", Po, n(t.message), 1),
      t.actionLabel ? (s(), S(J, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (d) => r.$emit("action"))
      }, {
        default: i(() => [
          w(n(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ X(Bo, [["__scopeId", "data-v-4466284f"]]), Oo = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: ae(["detail-label"]),
      style: He({ minWidth: t.minWidth })
    }, [
      he(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Jt = /* @__PURE__ */ X(Oo, [["__scopeId", "data-v-75e9eeb8"]]), Fo = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: ae(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      he(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), es = /* @__PURE__ */ X(Fo, [["__scopeId", "data-v-2f186e4c"]]), Vo = { class: "detail-row" }, Ao = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("div", Vo, [
      g(Jt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(n(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), S(es, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(n(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : he(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Se = /* @__PURE__ */ X(Ao, [["__scopeId", "data-v-ef15664a"]]), Wo = { class: "modal-header" }, Go = { class: "modal-body" }, jo = { class: "status-section" }, Ho = {
  key: 0,
  class: "status-section"
}, qo = { class: "section-header-row" }, Ko = {
  key: 0,
  class: "workflow-group"
}, Yo = { class: "workflow-group-header" }, Xo = { class: "workflow-group-title" }, Qo = { class: "workflow-list" }, Zo = { class: "workflow-name" }, Jo = { class: "workflow-issue" }, ea = {
  key: 1,
  class: "workflow-group"
}, ta = { class: "workflow-group-header" }, sa = { class: "workflow-group-title" }, oa = { class: "workflow-list" }, aa = { class: "workflow-name" }, na = { class: "workflow-issue" }, la = {
  key: 2,
  class: "workflow-group"
}, ia = { class: "workflow-group-header" }, ra = { class: "workflow-group-title" }, da = { class: "workflow-list" }, ca = { class: "workflow-name" }, ua = {
  key: 3,
  class: "workflow-group"
}, ma = { class: "workflow-group-header" }, va = { class: "workflow-group-title" }, fa = { class: "workflow-list" }, ga = { class: "workflow-name" }, pa = {
  key: 4,
  class: "workflow-group"
}, ha = { class: "workflow-group-header" }, ya = { class: "workflow-group-title" }, wa = { class: "workflow-list" }, ka = { class: "workflow-name" }, ba = {
  key: 5,
  class: "workflow-group"
}, _a = { class: "workflow-group-title" }, $a = { class: "expand-icon" }, Ca = {
  key: 0,
  class: "workflow-list"
}, xa = { class: "workflow-name" }, Sa = {
  key: 1,
  class: "status-section"
}, Ia = {
  key: 0,
  class: "change-group"
}, Ea = { class: "change-group-header" }, Ma = { class: "change-group-title" }, za = { class: "change-list" }, La = { class: "node-name" }, Ra = {
  key: 0,
  class: "dev-badge"
}, Da = {
  key: 1,
  class: "change-group"
}, Na = { class: "change-group-header" }, Ta = { class: "change-group-title" }, Ua = { class: "change-list" }, Pa = { class: "node-name" }, Ba = {
  key: 0,
  class: "dev-badge"
}, Oa = {
  key: 2,
  class: "change-group"
}, Fa = { class: "change-list" }, Va = { class: "change-item" }, Aa = { class: "node-name" }, Wa = {
  key: 3,
  class: "change-group"
}, Ga = {
  key: 2,
  class: "status-section"
}, ja = { class: "section-header-row" }, Ha = {
  key: 0,
  class: "drift-item"
}, qa = { class: "drift-list" }, Ka = {
  key: 0,
  class: "drift-list-more"
}, Ya = {
  key: 1,
  class: "drift-item"
}, Xa = { class: "drift-list" }, Qa = {
  key: 0,
  class: "drift-list-more"
}, Za = {
  key: 2,
  class: "drift-item"
}, Ja = {
  key: 3,
  class: "drift-item"
}, en = {
  key: 3,
  class: "status-section"
}, tn = { class: "info-box" }, sn = { class: "drift-list" }, on = {
  key: 0,
  class: "drift-list-more"
}, an = {
  key: 4,
  class: "status-section"
}, nn = { class: "warning-box" }, ln = {
  key: 5,
  class: "empty-state-inline"
}, rn = { class: "modal-actions" }, dn = /* @__PURE__ */ Y({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const r = t, a = $(!1);
    Le(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), jt(() => r.show, (k, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", k);
    }, { immediate: !0 });
    const d = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        (_) => _.status === "broken" && _.sync_state === "synced"
      )) || [];
    }), p = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        (_) => _.status === "broken" && _.sync_state !== "synced"
      )) || [];
    }), v = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.synced) == null ? void 0 : L.filter((_) => {
        var D, O, I;
        const f = (I = (O = (D = r.status) == null ? void 0 : D.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : I.find((B) => B.name === _);
        return !f || f.status !== "broken";
      })) || [];
    }), y = U(() => {
      var k, C, L, _, f;
      return (k = r.status) != null && k.workflows ? (((C = r.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((L = r.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || (((_ = r.status.workflows.deleted) == null ? void 0 : _.length) ?? 0) > 0 || (((f = r.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var C, L, _;
      const k = (C = r.status) == null ? void 0 : C.git_changes;
      return k ? (((L = k.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || (((_ = k.nodes_removed) == null ? void 0 : _.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), l = U(() => {
      var k, C, L, _, f, D;
      return !y.value && !m.value && ((C = (k = r.status) == null ? void 0 : k.comparison) == null ? void 0 : C.is_synced) && (((L = r.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && (((D = (f = (_ = r.status) == null ? void 0 : _.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : D.length) ?? 0) === 0;
    }), u = U(() => {
      var C, L;
      const k = (L = (C = r.status) == null ? void 0 : C.git_changes) == null ? void 0 : L.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function b(k) {
      return typeof k == "string" ? k : k.name;
    }
    function h(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, C) => {
      var L, _, f, D, O, I, B, A, F, T, R, x, z, ee, K, se, ge, re, te, P, E, oe;
      return s(), S(Te, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (q) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = Me(() => {
            }, ["stop"]))
          }, [
            e("div", Wo, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (q) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Go, [
              e("div", jo, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[8] || (C[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(Se, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              y.value ? (s(), o("div", Ho, [
                e("div", qo, [
                  g(Ae, { level: "4" }, {
                    default: i(() => [...C[9] || (C[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (q) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                d.value.length ? (s(), o("div", Ko, [
                  e("div", Yo, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Xo, "BROKEN (COMMITTED) (" + n(d.value.length) + ")", 1)
                  ]),
                  e("div", Qo, [
                    (s(!0), o(W, null, Z(d.value, (q) => (s(), o("div", {
                      key: q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Zo, n(q.name), 1),
                      e("span", Jo, n(q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (s(), o("div", ea, [
                  e("div", ta, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", sa, "BROKEN (UNCOMMITTED) (" + n(p.value.length) + ")", 1)
                  ]),
                  e("div", oa, [
                    (s(!0), o(W, null, Z(p.value, (q) => (s(), o("div", {
                      key: q.name,
                      class: "workflow-item"
                    }, [
                      e("span", aa, n(q.name), 1),
                      e("span", na, n(q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (_ = (L = t.status.workflows) == null ? void 0 : L.new) != null && _.length ? (s(), o("div", la, [
                  e("div", ia, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", ra, "NEW (" + n(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", da, [
                    (s(!0), o(W, null, Z(t.status.workflows.new, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", ca, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = (f = t.status.workflows) == null ? void 0 : f.modified) != null && D.length ? (s(), o("div", ua, [
                  e("div", ma, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", va, "MODIFIED (" + n(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", fa, [
                    (s(!0), o(W, null, Z(t.status.workflows.modified, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", ga, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (I = (O = t.status.workflows) == null ? void 0 : O.deleted) != null && I.length ? (s(), o("div", pa, [
                  e("div", ha, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ya, "DELETED (" + n(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", wa, [
                    (s(!0), o(W, null, Z(t.status.workflows.deleted, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", ka, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (s(), o("div", ba, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (q) => a.value = !a.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", _a, "SYNCED (" + n(v.value.length) + ")", 1),
                    e("span", $a, n(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (s(), o("div", Ca, [
                    (s(!0), o(W, null, Z(v.value, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", xa, n(q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (s(), o("div", Sa, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[16] || (C[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (A = (B = t.status.git_changes) == null ? void 0 : B.nodes_added) != null && A.length ? (s(), o("div", Ia, [
                  e("div", Ea, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Ma, "NODES ADDED (" + n(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", za, [
                    (s(!0), o(W, null, Z(t.status.git_changes.nodes_added, (q) => (s(), o("div", {
                      key: b(q),
                      class: "change-item"
                    }, [
                      e("span", La, n(b(q)), 1),
                      h(q) ? (s(), o("span", Ra, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && T.length ? (s(), o("div", Da, [
                  e("div", Na, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ta, "NODES REMOVED (" + n(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ua, [
                    (s(!0), o(W, null, Z(t.status.git_changes.nodes_removed, (q) => (s(), o("div", {
                      key: b(q),
                      class: "change-item"
                    }, [
                      e("span", Pa, n(b(q)), 1),
                      h(q) ? (s(), o("span", Ba, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = t.status.git_changes) != null && R.workflow_changes ? (s(), o("div", Oa, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Fa, [
                    e("div", Va, [
                      e("span", Aa, n(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (x = t.status.git_changes) != null && x.has_other_changes ? (s(), o("div", Wa, [...C[20] || (C[20] = [
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
              (z = t.status.comparison) != null && z.is_synced ? c("", !0) : (s(), o("div", Ga, [
                e("div", ja, [
                  g(Ae, { level: "4" }, {
                    default: i(() => [...C[21] || (C[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (q) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (K = (ee = t.status.comparison) == null ? void 0 : ee.missing_nodes) != null && K.length ? (s(), o("div", Ha, [
                  g(Se, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", qa, [
                    (s(!0), o(W, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (q) => (s(), o("div", {
                      key: q,
                      class: "drift-list-item"
                    }, " - " + n(q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Ka, " ... and " + n(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ge = (se = t.status.comparison) == null ? void 0 : se.extra_nodes) != null && ge.length ? (s(), o("div", Ya, [
                  g(Se, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Xa, [
                    (s(!0), o(W, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (q) => (s(), o("div", {
                      key: q,
                      class: "drift-list-item"
                    }, " - " + n(q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Qa, " ... and " + n(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (te = (re = t.status.comparison) == null ? void 0 : re.version_mismatches) != null && te.length ? (s(), o("div", Za, [
                  g(Se, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (P = t.status.comparison) != null && P.packages_in_sync ? c("", !0) : (s(), o("div", Ja, [
                  g(Se, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (oe = (E = t.status.comparison) == null ? void 0 : E.disabled_nodes) != null && oe.length ? (s(), o("div", en, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[23] || (C[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", tn, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, n(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", sn, [
                  (s(!0), o(W, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (q) => (s(), o("div", {
                    key: q,
                    class: "drift-list-item"
                  }, " • " + n(q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", on, " ... and " + n(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", an, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[25] || (C[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", nn, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, n(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", ln, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", rn, [
              g(J, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (q) => k.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
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
}), cn = /* @__PURE__ */ X(dn, [["__scopeId", "data-v-c67eed17"]]), un = { class: "health-section-header" }, mn = { class: "suggestions-content" }, vn = { class: "suggestions-text" }, fn = {
  key: 3,
  style: { "margin-top": "var(--cg-space-3)" }
}, gn = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "start-setup", "view-environments"],
  setup(t, { emit: r }) {
    const a = t, d = $(!1), p = $(!1);
    function v() {
      d.value = !0;
    }
    function y() {
      d.value = !1, l("view-workflows");
    }
    function m() {
      d.value = !1, l("view-nodes");
    }
    const l = r, u = U(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), b = U(() => a.status.has_changes), h = U(() => {
      const F = a.status.git_changes;
      return F.nodes_added.length > 0 || F.nodes_removed.length > 0 || F.workflow_changes;
    }), k = U(() => a.status.has_changes || u.value), C = U(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), L = U(() => a.status.git_changes.has_other_changes), _ = U(() => {
      var F;
      return ((F = a.status.workflows.analyzed) == null ? void 0 : F.filter((T) => T.status === "broken")) || [];
    }), f = U(() => {
      var F;
      return ((F = a.status.workflows.analyzed) == null ? void 0 : F.filter(
        (T) => T.has_path_sync_issues && !T.has_issues
      )) || [];
    }), D = U(() => _.value.length > 0), O = U(() => D.value || f.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced), I = U(() => {
      const F = [];
      return a.status.workflows.new.length > 0 && F.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && F.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && F.push(`${a.status.workflows.deleted.length} deleted`), F.length > 0 ? `${F.join(", ")} workflow${F.length === 1 && !F[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), B = U(() => {
      var R, x;
      const F = [], T = a.status.comparison;
      return (R = T.missing_nodes) != null && R.length && F.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (x = T.extra_nodes) != null && x.length && F.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), F.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${F.join(" and ")}.`;
    }), A = U(() => {
      var R, x;
      const F = [], T = a.status.comparison;
      return (R = T.extra_nodes) != null && R.length && (T.extra_nodes.slice(0, 3).forEach((z) => {
        F.push(`Untracked: ${z}`);
      }), T.extra_nodes.length > 3 && F.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (x = T.missing_nodes) != null && x.length && (T.missing_nodes.slice(0, 3).forEach((z) => {
        F.push(`Missing: ${z}`);
      }), T.missing_nodes.length > 3 && F.push(`...and ${T.missing_nodes.length - 3} more missing`)), F;
    });
    return (F, T) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, { title: "STATUS" })
        ]),
        content: i(() => [
          a.setupState === "no_workspace" ? (s(), S(dt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              g(J, {
                variant: "primary",
                size: "sm",
                onClick: T[0] || (T[0] = (R) => F.$emit("start-setup"))
              }, {
                default: i(() => [...T[11] || (T[11] = [
                  w(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (s(), S(dt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              g(J, {
                variant: "primary",
                size: "sm",
                onClick: T[1] || (T[1] = (R) => F.$emit("view-environments"))
              }, {
                default: i(() => [...T[12] || (T[12] = [
                  w(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[3] || (T[3] = (R) => p.value = !0),
            onMouseleave: T[4] || (T[4] = (R) => p.value = !1)
          }, [
            e("div", un, [
              g(Ae, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...T[13] || (T[13] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(Fs, { name: "fade" }, {
                default: i(() => [
                  p.value ? (s(), S(J, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...T[14] || (T[14] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(wo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Ht({
              left: i(() => [
                t.status.workflows.new.length ? (s(), S(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), S(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), S(Qe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(Qe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), S(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), S(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), S(Qe, {
                  key: 2,
                  icon: "●",
                  count: C.value,
                  label: C.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                L.value ? (s(), S(Qe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !h.value && !L.value ? (s(), S(Qe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (s(), S(Qe, {
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
                fn: i(() => [
                  T[16] || (T[16] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", mn, [
                    e("span", vn, n(I.value), 1),
                    g(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (R) => F.$emit("commit-changes"))
                    }, {
                      default: i(() => [...T[15] || (T[15] = [
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
          t.status.is_detached_head ? (s(), S(dt, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(J, {
                variant: "primary",
                size: "sm",
                onClick: T[5] || (T[5] = (R) => F.$emit("create-branch"))
              }, {
                default: i(() => [...T[17] || (T[17] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          O.value ? (s(), o("div", fn, [
            g(Ae, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...T[18] || (T[18] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            _.value.length > 0 ? (s(), S(dt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: _.value.map((R) => `${R.name} — ${R.issue_summary}`)
            }, {
              actions: i(() => [
                g(J, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (R) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[19] || (T[19] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            f.value.length > 0 ? (s(), S(dt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${f.value.length} workflow${f.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: f.value.map((R) => `${R.name} — ${R.models_needing_path_sync_count} model path${R.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(J, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (R) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[20] || (T[20] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !D.value ? (s(), S(dt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                g(J, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (R) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[21] || (T[21] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (s(), S(dt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: B.value,
              items: A.value
            }, {
              actions: i(() => [
                g(J, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...T[22] || (T[22] = [
                    w(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(J, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[9] || (T[9] = (R) => F.$emit("view-nodes"))
                }, {
                  default: i(() => [...T[23] || (T[23] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !O.value && !k.value ? (s(), S(qe, {
            key: 4,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(cn, {
        show: d.value,
        status: t.status,
        onClose: T[10] || (T[10] = (R) => d.value = !1),
        onNavigateWorkflows: y,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), pn = /* @__PURE__ */ X(gn, [["__scopeId", "data-v-3bff2b2f"]]), hn = ["type", "value", "placeholder", "disabled"], yn = /* @__PURE__ */ Y({
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
    const d = t, p = a, v = $(null);
    function y(m) {
      const l = m.target.value;
      p("update:modelValue", l);
    }
    return Le(() => {
      d.autoFocus && v.value && v.value.focus();
    }), r({
      focus: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.blur();
      }
    }), (m, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ae(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: y,
      onKeyup: [
        l[0] || (l[0] = ct((u) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = ct((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (u) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (u) => m.$emit("blur"))
    }, null, 42, hn));
  }
}), Wt = /* @__PURE__ */ X(yn, [["__scopeId", "data-v-0380d08f"]]), wn = { class: "branch-create-form" }, kn = { class: "form-actions" }, bn = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const a = r, d = $(""), p = U(() => {
      const m = d.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      p.value && (a("create", d.value.trim()), d.value = "");
    }
    function y() {
      d.value = "", a("cancel");
    }
    return (m, l) => (s(), o("div", wn, [
      g(Wt, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: y
      }, null, 8, ["modelValue"]),
      e("div", kn, [
        g(J, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: v
        }, {
          default: i(() => [...l[1] || (l[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(J, {
          variant: "secondary",
          size: "sm",
          onClick: y
        }, {
          default: i(() => [...l[2] || (l[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _n = /* @__PURE__ */ X(bn, [["__scopeId", "data-v-7c500394"]]), $n = { class: "branch-list-item__indicator" }, Cn = { class: "branch-list-item__name" }, xn = {
  key: 0,
  class: "branch-list-item__actions"
}, Sn = {
  key: 0,
  class: "branch-list-item__current-label"
}, In = /* @__PURE__ */ Y({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: ae(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, [
      e("span", $n, n(t.isCurrent ? "●" : "○"), 1),
      e("span", Cn, n(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", xn, [
        he(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Sn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), En = /* @__PURE__ */ X(In, [["__scopeId", "data-v-c6581a24"]]), Mn = {
  key: 2,
  class: "branch-list"
}, zn = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: r }) {
    const a = r, d = $(!1);
    function p(y) {
      a("create", y), v();
    }
    function v() {
      d.value = !1;
    }
    return (y, m) => (s(), S(Oe, null, {
      header: i(() => [
        g(Fe, { title: "BRANCHES" }, {
          actions: i(() => [
            d.value ? c("", !0) : (s(), S(J, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (l) => d.value = !0)
            }, {
              default: i(() => [...m[1] || (m[1] = [
                w(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), S(_n, {
          key: 0,
          onCreate: p,
          onCancel: v
        })) : c("", !0),
        t.branches.length === 0 ? (s(), S(qe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Mn, [
          (s(!0), o(W, null, Z(t.branches, (l) => (s(), S(En, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), S(J, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => y.$emit("delete", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), S(J, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => y.$emit("switch", l.name)
              }, {
                default: i(() => [...m[3] || (m[3] = [
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
}), Ln = /* @__PURE__ */ X(zn, [["__scopeId", "data-v-86784ddd"]]), Rn = { class: "commit-list" }, Dn = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (r, a) => (s(), o("div", Rn, [
      he(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Nn = /* @__PURE__ */ X(Dn, [["__scopeId", "data-v-8c5ee761"]]), Tn = { class: "commit-hash" }, Un = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, a = U(() => r.hash.slice(0, r.length));
    return (d, p) => (s(), o("span", Tn, n(a.value), 1));
  }
}), gs = /* @__PURE__ */ X(Un, [["__scopeId", "data-v-7c333cc6"]]), Pn = { class: "commit-message" }, Bn = { class: "commit-date" }, On = /* @__PURE__ */ Y({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p() {
      a.clickable && d("click");
    }
    return (v, y) => (s(), o("div", {
      class: ae(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      g(gs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Pn, n(t.message), 1),
      e("span", Bn, n(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: y[0] || (y[0] = Me(() => {
        }, ["stop"]))
      }, [
        he(v.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Fn = /* @__PURE__ */ X(On, [["__scopeId", "data-v-dd7c621b"]]), Vn = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, a) => (s(), S(Oe, null, {
      header: i(() => [
        g(Fe, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), S(qe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), S(Nn, { key: 1 }, {
          default: i(() => [
            (s(!0), o(W, null, Z(t.commits, (d) => (s(), S(Fn, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (p) => r.$emit("select", d)
            }, {
              actions: i(() => [
                g(J, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => r.$emit("checkout", d),
                  title: "Checkout this commit"
                }, {
                  default: i(() => [...a[0] || (a[0] = [
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
}), An = /* @__PURE__ */ X(Vn, [["__scopeId", "data-v-981c3c64"]]), rs = [
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
  ...Array(12).fill(null).map((t, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], Wn = {
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
}, ps = [
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
], Gn = [
  ...ps,
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
], Ft = [
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
], jn = [
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
], Vt = [
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
], ye = {
  // Environment Management
  getEnvironments: async () => (await be(300), [
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
    await be(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, a) => {
    await be(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (t) => {
    await be(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await be(400), rs),
  getWorkflowDetails: async (t) => (await be(300), Wn[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await be(800), {
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
    await be(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${a}`);
  },
  setModelImportance: async (t, r, a) => {
    await be(200), console.log(`[MOCK] Setting ${r} importance to ${a} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await be(350), ps),
  getWorkspaceModels: async () => (await be(400), Gn),
  getModelDetails: async (t) => (await be(200), {
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
    await be(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await be(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await be(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await be(350);
    const t = Ft.filter((a) => a.installed), r = Ft.filter((a) => !a.installed);
    return {
      nodes: Ft,
      total_count: Ft.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await be(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await be(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await be(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await be(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await be(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await be(250), (t ? Vt.filter((d) => d.level === t) : Vt).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await be(300);
    const a = [...Vt, ...Vt.map((p) => ({
      ...p,
      name: "comfygit.workspace"
    }))];
    return (t ? a.filter((p) => p.level === t) : a).slice(0, r || 100);
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
  getStatus: async () => (await be(400), {
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
      synced: rs.filter((t) => t.status === "synced").map((t) => t.name),
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
          model_count: 5,
          has_category_mismatch_issues: !1,
          models_with_category_mismatch_count: 0
        },
        // Category mismatch example - LoRA in wrong directory
        {
          name: "lora-wrong-dir.json",
          sync_state: "synced",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "1 model in wrong directory",
          node_count: 8,
          model_count: 2,
          has_category_mismatch_issues: !0,
          models_with_category_mismatch_count: 1
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
  getCommitHistory: async (t = 10) => (await be(300), jn.slice(0, t)),
  getBranches: async () => (await be(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await be(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await be(300), {
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
    await be(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await be(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, a) => {
    await be(400), console.log(`[MOCK] Updating remote ${t}: ${r}${a ? ` (push: ${a})` : ""}`);
  },
  fetchRemote: async (t) => {
    await be(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await be(300), {
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
  analyzeWorkflow: async (t) => (await be(600), {
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
    await be(800);
    const d = [], p = [];
    return r.forEach((v, y) => {
      v.action === "install" && v.package_id && d.push(v.package_id);
    }), a.forEach((v, y) => {
      v.action === "download" && v.url ? p.push({
        filename: y,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${y}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: d,
      models_to_download: p,
      estimated_time_seconds: d.length * 30 + p.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await be(400);
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
    await be(400);
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
function be(t) {
  return new Promise((r) => setTimeout(r, t));
}
function Mt() {
  return !0;
}
function De() {
  const t = $(!1), r = $(null);
  async function a(Q, _e) {
    var yt;
    if (!((yt = window.app) != null && yt.api))
      throw new Error("ComfyUI API not available");
    const xe = await window.app.api.fetchApi(Q, _e);
    if (!xe.ok) {
      const mt = await xe.json().catch(() => ({}));
      throw new Error(mt.error || mt.message || `Request failed: ${xe.status}`);
    }
    return xe.json();
  }
  async function d(Q = !1) {
    return ye.getStatus();
  }
  async function p(Q, _e = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Q, allow_issues: _e })
    });
  }
  async function v(Q = 10, _e = 0) {
    {
      const xe = await ye.getCommitHistory(Q);
      return {
        commits: xe,
        total: xe.length,
        offset: _e
      };
    }
  }
  async function y(Q) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
    });
  }
  async function m() {
    return ye.getBranches();
  }
  async function l(Q) {
    return a(`/v2/comfygit/commit/${Q}`);
  }
  async function u(Q, _e = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Q, force: _e })
    });
  }
  async function b(Q, _e = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, start_point: _e })
    });
  }
  async function h(Q, _e = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Q, force: _e })
    });
  }
  async function k(Q, _e = !1) {
    return await ye.deleteBranch(Q), { status: "success" };
  }
  async function C() {
    return ye.getEnvironments();
  }
  async function L(Q) {
    return ye.switchEnvironment(Q);
  }
  async function _() {
    return null;
  }
  async function f(Q) {
    return await ye.createEnvironment(Q.name, Q.torch_backend || "auto"), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function D() {
    return { state: "idle", message: "No creation in progress" };
  }
  async function O(Q = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function I(Q) {
    return await ye.deleteEnvironment(Q), { status: "success" };
  }
  async function B(Q = !1) {
    return ye.getWorkflows();
  }
  async function A(Q) {
    return ye.getWorkflowDetails(Q);
  }
  async function F(Q) {
    return ye.resolveWorkflow(Q);
  }
  async function T(Q, _e, xe) {
    return await ye.installWorkflowDeps(Q, _e, xe), { status: "success" };
  }
  async function R(Q, _e, xe) {
    return ye.setModelImportance(Q, _e, xe);
  }
  async function x() {
    return ye.getEnvironmentModels();
  }
  async function z() {
    return ye.getWorkspaceModels();
  }
  async function ee(Q) {
    return ye.getModelDetails(Q);
  }
  async function K(Q) {
    return console.log(`[MOCK] Opening file location: ${Q}`), { status: "success" };
  }
  async function se(Q, _e) {
    return await ye.updateModelSource(Q, _e), { status: "success", source_type: "custom" };
  }
  async function ge(Q, _e) {
    return { status: "success" };
  }
  async function re(Q) {
    return ye.deleteModel(Q);
  }
  async function te(Q) {
    return await ye.downloadModel(Q), { status: "success" };
  }
  async function P() {
    return { status: "success", changes: 0 };
  }
  async function E() {
    return { path: "~/comfygit/models" };
  }
  async function oe(Q) {
    return { status: "success", path: Q, models_indexed: 10 };
  }
  async function q() {
    return ye.getConfig();
  }
  async function ve(Q) {
    return ye.updateConfig(Q);
  }
  async function G(Q, _e) {
    return ye.getEnvironmentLogs(Q, _e);
  }
  async function ne(Q, _e) {
    return ye.getWorkspaceLogs(Q, _e);
  }
  async function Ie() {
    return ye.getNodes();
  }
  async function le(Q) {
    return { status: "success", message: `Node '${Q}' tracked as development` };
  }
  async function ue(Q) {
    return await ye.installNode(Q), { status: "success" };
  }
  async function ke(Q) {
    return await ye.updateNode(Q), { status: "success" };
  }
  async function Ke(Q) {
    return await ye.uninstallNode(Q), { status: "success" };
  }
  async function de() {
    return ye.getRemotes();
  }
  async function ut(Q, _e) {
    return await ye.addRemote(Q, _e), { status: "success", remote_name: Q };
  }
  async function xt(Q) {
    return await ye.removeRemote(Q), { status: "success", remote_name: Q };
  }
  async function St(Q, _e, xe) {
    return await ye.updateRemoteUrl(Q, _e, xe), { status: "success", remote_name: Q };
  }
  async function Ce(Q) {
    return await ye.fetchRemote(Q), { status: "success", remote_name: Q };
  }
  async function it(Q) {
    return ye.getRemoteSyncStatus(Q);
  }
  async function Je(Q = "skip", _e = !0) {
    return await new Promise((xe) => setTimeout(xe, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function Ye() {
    return {
      state: "no_workspace",
      workspace_path: null,
      default_path: "~/comfygit",
      environments: [],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models"
    };
  }
  async function It(Q) {
    return { status: "started", task_id: "mock-task-id" };
  }
  async function pe() {
    return { state: "idle", progress: 0, message: "No initialization in progress" };
  }
  async function We(Q) {
    return { valid: !0, model_count: 42 };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: d,
    commit: p,
    getHistory: v,
    exportEnv: y,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: u,
    createBranch: b,
    switchBranch: h,
    deleteBranch: k,
    // Environment Management
    getEnvironments: C,
    switchEnvironment: L,
    getSwitchProgress: _,
    createEnvironment: f,
    getCreateProgress: D,
    getComfyUIReleases: O,
    deleteEnvironment: I,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: A,
    resolveWorkflow: F,
    installWorkflowDeps: T,
    setModelImportance: R,
    // Model Management
    getEnvironmentModels: x,
    getWorkspaceModels: z,
    getModelDetails: ee,
    openFileLocation: K,
    addModelSource: se,
    removeModelSource: ge,
    deleteModel: re,
    downloadModel: te,
    scanWorkspaceModels: P,
    getModelsDirectory: E,
    setModelsDirectory: oe,
    // Settings
    getConfig: q,
    updateConfig: ve,
    // Debug/Logs
    getEnvironmentLogs: G,
    getWorkspaceLogs: ne,
    // Node Management
    getNodes: Ie,
    trackNodeAsDev: le,
    installNode: ue,
    updateNode: ke,
    uninstallNode: Ke,
    // Git Remotes
    getRemotes: de,
    addRemote: ut,
    removeRemote: xt,
    updateRemoteUrl: St,
    fetchRemote: Ce,
    getRemoteSyncStatus: it,
    // Environment Sync
    syncEnvironmentManually: Je,
    // First-Time Setup
    getSetupStatus: Ye,
    initializeWorkspace: It,
    getInitializeProgress: pe,
    validatePath: We
  };
}
async function zt(t, r = {}, a = 5e3) {
  const d = new AbortController(), p = setTimeout(() => d.abort(), a);
  try {
    const v = await fetch(t, {
      ...r,
      signal: d.signal
    });
    return clearTimeout(p), v;
  } catch (v) {
    throw clearTimeout(p), v.name === "AbortError" ? new Error(`Request timeout after ${a}ms`) : v;
  }
}
function hs() {
  const t = $(null);
  async function r() {
    try {
      const y = await zt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (y.ok)
        return (await y.json()).port;
    } catch {
    }
    return 8189;
  }
  async function a() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const y = await zt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!y.ok) throw new Error("Health check failed");
      return await y.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function d() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const y = await zt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!y.ok) throw new Error("Failed to get status");
      return await y.json();
    } catch {
      return null;
    }
  }
  async function p() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await zt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await zt(
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
    getStatus: d,
    restart: p,
    kill: v
  };
}
const Hn = { class: "base-modal-header" }, qn = {
  key: 0,
  class: "base-modal-title"
}, Kn = { class: "base-modal-body" }, Yn = {
  key: 0,
  class: "base-modal-loading"
}, Xn = {
  key: 1,
  class: "base-modal-error"
}, Qn = {
  key: 0,
  class: "base-modal-footer"
}, Zn = /* @__PURE__ */ Y({
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
    const a = t, d = r;
    function p() {
      a.closeOnOverlayClick && d("close");
    }
    function v(y) {
      y.key === "Escape" && d("close");
    }
    return Le(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Vs(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (y, m) => (s(), S(Te, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: ae(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Me(() => {
          }, ["stop"]))
        }, [
          e("div", Hn, [
            he(y.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", qn, n(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => y.$emit("close"))
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
          e("div", Kn, [
            t.loading ? (s(), o("div", Yn, "Loading...")) : t.error ? (s(), o("div", Xn, n(t.error), 1)) : he(y.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          y.$slots.footer ? (s(), o("div", Qn, [
            he(y.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), ot = /* @__PURE__ */ X(Zn, [["__scopeId", "data-v-2125a0e6"]]), Jn = ["type", "disabled"], el = {
  key: 0,
  class: "spinner"
}, tl = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ae(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", el)) : c("", !0),
      he(r.$slots, "default", {}, void 0, !0)
    ], 10, Jn));
  }
}), ie = /* @__PURE__ */ X(tl, [["__scopeId", "data-v-f3452606"]]), sl = {
  key: 0,
  class: "base-title-count"
}, ol = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, a) => (s(), S(ts(`h${t.level}`), {
      class: ae(["base-title", t.variant])
    }, {
      default: i(() => [
        he(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", sl, "(" + n(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Tt = /* @__PURE__ */ X(ol, [["__scopeId", "data-v-5a01561d"]]), al = ["value", "disabled"], nl = {
  key: 0,
  value: "",
  disabled: ""
}, ll = ["value"], il = {
  key: 0,
  class: "base-select-error"
}, rl = /* @__PURE__ */ Y({
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
    function a(d) {
      return typeof d == "string" ? d : d.label;
    }
    return (d, p) => (s(), o("div", {
      class: ae(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ae(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (v) => d.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", nl, n(t.placeholder), 1)) : c("", !0),
        (s(!0), o(W, null, Z(t.options, (v) => (s(), o("option", {
          key: r(v),
          value: r(v)
        }, n(a(v)), 9, ll))), 128))
      ], 42, al),
      t.error ? (s(), o("span", il, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), dl = /* @__PURE__ */ X(rl, [["__scopeId", "data-v-7436d745"]]), cl = { class: "popover-header" }, ul = { class: "popover-title" }, ml = { class: "popover-content" }, vl = {
  key: 0,
  class: "popover-actions"
}, fl = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, a) => (s(), S(Te, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: He({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = Me(() => {
          }, ["stop"]))
        }, [
          e("div", cl, [
            e("h4", ul, n(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", ml, [
            he(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", vl, [
            he(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), at = /* @__PURE__ */ X(fl, [["__scopeId", "data-v-42815ace"]]), gl = { class: "detail-section" }, pl = {
  key: 0,
  class: "empty-message"
}, hl = { class: "model-header" }, yl = { class: "model-name" }, wl = { class: "model-details" }, kl = { class: "model-row" }, bl = { class: "model-row" }, _l = { class: "label" }, $l = {
  key: 0,
  class: "model-row model-row-nodes"
}, Cl = { class: "node-list" }, xl = ["onClick"], Sl = {
  key: 1,
  class: "model-row"
}, Il = { class: "value" }, El = {
  key: 2,
  class: "model-row"
}, Ml = { class: "value error" }, zl = {
  key: 0,
  class: "model-actions"
}, Ll = { class: "detail-section" }, Rl = {
  key: 0,
  class: "empty-message"
}, Dl = { class: "node-name" }, Nl = {
  key: 0,
  class: "node-version"
}, Tl = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: r }) {
    const a = t, d = r, { getWorkflowDetails: p, setModelImportance: v, openFileLocation: y } = De(), m = $(null), l = $(!1), u = $(null), b = $(!1), h = $({}), k = $(!1), C = $(/* @__PURE__ */ new Set()), L = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function _(R) {
      switch (R) {
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
    function f(R) {
      switch (R) {
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
    function D(R) {
      if (!R.loaded_by || R.loaded_by.length === 0) return [];
      const x = R.hash || R.filename;
      return C.value.has(x) ? R.loaded_by : R.loaded_by.slice(0, 3);
    }
    function O(R) {
      return C.value.has(R);
    }
    function I(R) {
      C.value.has(R) ? C.value.delete(R) : C.value.add(R), C.value = new Set(C.value);
    }
    async function B() {
      l.value = !0, u.value = null;
      try {
        m.value = await p(a.workflowName);
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function A(R, x) {
      h.value[R] = x, b.value = !0;
    }
    async function F(R) {
      try {
        await y(R);
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to open file location";
      }
    }
    async function T() {
      if (!b.value) {
        d("close");
        return;
      }
      l.value = !0, u.value = null;
      try {
        for (const [R, x] of Object.entries(h.value))
          await v(a.workflowName, R, x);
        d("refresh"), d("close");
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    return Le(B), (R, x) => (s(), o(W, null, [
      g(ot, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: u.value || void 0,
        onClose: x[4] || (x[4] = (z) => d("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(W, { key: 0 }, [
            e("section", gl, [
              g(Tt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + n(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", pl, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(W, null, Z(m.value.models, (z) => {
                var ee;
                return s(), o("div", {
                  key: z.hash || z.filename,
                  class: "model-card"
                }, [
                  e("div", hl, [
                    x[6] || (x[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", yl, n(z.filename), 1)
                  ]),
                  e("div", wl, [
                    e("div", kl, [
                      x[7] || (x[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: ae(["value", _(z.status)])
                      }, n(f(z.status)), 3)
                    ]),
                    e("div", bl, [
                      e("span", _l, [
                        x[8] || (x[8] = w(" Importance: ", -1)),
                        g(fs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: x[0] || (x[0] = (K) => k.value = !0)
                        })
                      ]),
                      g(dl, {
                        "model-value": h.value[z.filename] || z.importance,
                        options: L,
                        "onUpdate:modelValue": (K) => A(z.filename, K)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    z.loaded_by && z.loaded_by.length > 0 ? (s(), o("div", $l, [
                      x[9] || (x[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Cl, [
                        (s(!0), o(W, null, Z(D(z), (K, se) => (s(), o("div", {
                          key: `${K.node_id}-${se}`,
                          class: "node-reference"
                        }, n(K.node_type) + " (Node #" + n(K.node_id) + ") ", 1))), 128)),
                        z.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (K) => I(z.hash || z.filename)
                        }, n(O(z.hash || z.filename) ? "▼ Show less" : `▶ View all (${z.loaded_by.length})`), 9, xl)) : c("", !0)
                      ])
                    ])) : c("", !0),
                    z.size_mb ? (s(), o("div", Sl, [
                      x[10] || (x[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Il, n(z.size_mb) + " MB", 1)
                    ])) : c("", !0),
                    z.has_category_mismatch ? (s(), o("div", El, [
                      x[13] || (x[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Ml, [
                        x[11] || (x[11] = w(" In ", -1)),
                        e("code", null, n(z.actual_category) + "/", 1),
                        x[12] || (x[12] = w(" but loader needs ", -1)),
                        e("code", null, n((ee = z.expected_categories) == null ? void 0 : ee[0]) + "/", 1)
                      ])
                    ])) : c("", !0)
                  ]),
                  z.status !== "available" ? (s(), o("div", zl, [
                    z.status === "downloadable" ? (s(), S(ie, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: x[1] || (x[1] = (K) => d("resolve"))
                    }, {
                      default: i(() => [...x[14] || (x[14] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    })) : z.status === "category_mismatch" && z.file_path ? (s(), S(ie, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => F(z.file_path)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        w(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : z.status !== "path_mismatch" ? (s(), S(ie, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: x[2] || (x[2] = (K) => d("resolve"))
                    }, {
                      default: i(() => [...x[16] || (x[16] = [
                        w(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : c("", !0)
                  ])) : c("", !0)
                ]);
              }), 128))
            ]),
            e("section", Ll, [
              g(Tt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + n(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Rl, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(W, null, Z(m.value.nodes, (z) => (s(), o("div", {
                key: z.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ae(["node-status", z.status === "installed" ? "installed" : "missing"])
                }, n(z.status === "installed" ? "✓" : "✕"), 3),
                e("span", Dl, n(z.name), 1),
                z.version ? (s(), o("span", Nl, "v" + n(z.version), 1)) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          g(ie, {
            variant: "secondary",
            onClick: x[3] || (x[3] = (z) => d("close"))
          }, {
            default: i(() => [...x[17] || (x[17] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (s(), S(ie, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: i(() => [...x[18] || (x[18] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(at, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[5] || (x[5] = (z) => k.value = !1)
      }, {
        content: i(() => [...x[19] || (x[19] = [
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
}), Ul = /* @__PURE__ */ X(Tl, [["__scopeId", "data-v-668728e6"]]), $e = vs({
  items: [],
  status: "idle"
});
let Ze = null;
function ys() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Yt(t) {
  return $e.items.find((r) => r.id === t);
}
async function wt() {
  if ($e.status === "downloading") return;
  const t = $e.items.find((r) => r.status === "queued");
  if (!t) {
    $e.status = "idle";
    return;
  }
  $e.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Pl(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    $e.status = "idle", wt();
  }
}
async function Pl(t) {
  return new Promise((r, a) => {
    Ze && (Ze.close(), Ze = null);
    const d = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${d}`);
    Ze = p;
    let v = Date.now(), y = 0, m = !1;
    p.onmessage = (l) => {
      try {
        const u = JSON.parse(l.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), h = (b - v) / 1e3;
            if (h > 0.5) {
              const k = t.downloaded - y;
              if (t.speed = k / h, v = b, y = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, p.close(), Ze = null, r();
            break;
          case "error":
            m = !0, p.close(), Ze = null, a(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), Ze = null, m || a(new Error("Connection lost"));
    };
  });
}
async function Bl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const r = await t.json();
    if (!r.pending_downloads || r.pending_downloads.length === 0) return;
    for (const a of r.pending_downloads) {
      if ($e.items.some((p) => p.url === a.url && p.filename === a.filename))
        continue;
      const d = {
        id: ys(),
        workflow: a.workflow,
        filename: a.filename,
        url: a.url,
        targetPath: a.target_path,
        size: a.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      $e.items.push(d);
    }
    console.log(`[ComfyGit] Loaded ${r.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Bt() {
  function t(f) {
    for (const D of f) {
      if ($e.items.some(
        (B) => B.url === D.url && B.targetPath === D.targetPath && ["queued", "downloading", "paused", "completed"].includes(B.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${D.filename}`);
        continue;
      }
      const I = {
        id: ys(),
        workflow: D.workflow,
        filename: D.filename,
        url: D.url,
        targetPath: D.targetPath,
        size: D.size || 0,
        type: D.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      $e.items.push(I);
    }
    $e.status === "idle" && wt();
  }
  async function r(f) {
    const D = Yt(f);
    if (D) {
      if (D.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(D.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ze && (Ze.close(), Ze = null), D.status = "failed", D.error = "Cancelled by user", $e.status = "idle", wt();
      } else if (D.status === "queued") {
        const O = $e.items.findIndex((I) => I.id === f);
        O >= 0 && $e.items.splice(O, 1);
      }
    }
  }
  function a(f) {
    const D = Yt(f);
    !D || D.status !== "failed" || (D.status = "queued", D.error = void 0, D.progress = 0, D.downloaded = 0, $e.status === "idle" && wt());
  }
  function d(f) {
    const D = Yt(f);
    !D || D.status !== "paused" || (D.status = "queued", $e.status === "idle" && wt());
  }
  function p() {
    const f = $e.items.filter((D) => D.status === "paused");
    for (const D of f)
      D.status = "queued";
    $e.status === "idle" && wt();
  }
  function v(f) {
    const D = $e.items.findIndex((O) => O.id === f);
    D >= 0 && ["completed", "failed", "paused"].includes($e.items[D].status) && $e.items.splice(D, 1);
  }
  function y() {
    $e.items = $e.items.filter((f) => f.status !== "completed");
  }
  function m() {
    $e.items = $e.items.filter((f) => f.status !== "failed");
  }
  const l = U(
    () => $e.items.find((f) => f.status === "downloading")
  ), u = U(
    () => $e.items.filter((f) => f.status === "queued")
  ), b = U(
    () => $e.items.filter((f) => f.status === "completed")
  ), h = U(
    () => $e.items.filter((f) => f.status === "failed")
  ), k = U(
    () => $e.items.filter((f) => f.status === "paused")
  ), C = U(() => $e.items.length > 0), L = U(
    () => $e.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), _ = U(
    () => $e.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: As($e),
    // Computed
    currentDownload: l,
    queuedItems: u,
    completedItems: b,
    failedItems: h,
    pausedItems: k,
    hasItems: C,
    activeCount: L,
    hasPaused: _,
    // Actions
    addToQueue: t,
    cancelDownload: r,
    retryDownload: a,
    resumeDownload: d,
    resumeAllPaused: p,
    removeItem: v,
    clearCompleted: y,
    clearFailed: m,
    loadPendingDownloads: Bl
  };
}
function ws() {
  const t = $(null), r = $(null), a = $([]), d = $([]), p = $(!1), v = $(null);
  async function y(D, O) {
    var B;
    if (!((B = window.app) != null && B.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(D, O);
    if (!I.ok) {
      const A = await I.json().catch(() => ({})), F = A.error || A.message || `Request failed: ${I.status}`;
      throw new Error(F);
    }
    return I.json();
  }
  async function m(D) {
    p.value = !0, v.value = null;
    try {
      let O;
      return Mt() && (O = await ye.analyzeWorkflow(D)), t.value = O, O;
    } catch (O) {
      const I = O instanceof Error ? O.message : "Unknown error occurred";
      throw v.value = I, O;
    } finally {
      p.value = !1;
    }
  }
  async function l(D, O, I, B) {
    p.value = !0, v.value = null;
    try {
      let A;
      return Mt() && (A = await ye.applyResolution(D, O, I)), r.value = A, A;
    } catch (A) {
      const F = A instanceof Error ? A.message : "Unknown error occurred";
      throw v.value = F, A;
    } finally {
      p.value = !1;
    }
  }
  async function u(D, O = 10) {
    p.value = !0, v.value = null;
    try {
      let I;
      return Mt() && (I = await ye.searchNodes(D, O)), a.value = I.results, I.results;
    } catch (I) {
      const B = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = B, I;
    } finally {
      p.value = !1;
    }
  }
  async function b(D, O = 10) {
    p.value = !0, v.value = null;
    try {
      let I;
      return Mt() && (I = await ye.searchModels(D, O)), d.value = I.results, I.results;
    } catch (I) {
      const B = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = B, I;
    } finally {
      p.value = !1;
    }
  }
  const h = vs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function C(D) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Mt()) {
        h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
        for (let O = 0; O < h.nodesToInstall.length; O++)
          h.nodeInstallProgress.currentNode = h.nodesToInstall[O], h.nodeInstallProgress.currentIndex = O, await new Promise((I) => setTimeout(I, 500)), h.nodeInstallProgress.completedNodes.push({
            node_id: h.nodesToInstall[O],
            success: !0
          });
        return h.nodesInstalled = h.nodesToInstall, h.needsRestart = h.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: h.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await L(D);
    } catch (O) {
      const I = O instanceof Error ? O.message : "Failed to install nodes";
      throw h.installError = I, O;
    }
  }
  async function L(D) {
    var I;
    const O = await y(
      `/v2/comfygit/workflow/${D}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: h.nodesToInstall
        })
      }
    );
    if (h.nodeInstallProgress) {
      h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
      const B = new Map(((I = O.failed) == null ? void 0 : I.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < h.nodesToInstall.length; A++) {
        const F = h.nodesToInstall[A], T = B.get(F);
        h.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !T,
          error: T
        });
      }
    }
    return h.nodesInstalled = O.nodes_installed, h.needsRestart = O.nodes_installed.length > 0, O.failed && O.failed.length > 0 && (h.installError = `${O.failed.length} package(s) failed to install`), O;
  }
  async function _(D, O, I) {
    k(), h.phase = "resolving", v.value = null;
    {
      const B = await ye.applyResolution(D, O, I);
      r.value = B, h.nodesToInstall = B.nodes_to_install, h.phase = "complete";
      return;
    }
  }
  function f(D, O) {
    const { addToQueue: I } = Bt(), B = O.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: D,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return B.length > 0 && I(B), B.length;
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: a,
    modelSearchResults: d,
    isLoading: p,
    error: v,
    progress: h,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: _,
    installNodes: C,
    searchNodes: u,
    searchModels: b,
    resetProgress: k,
    queueModelDownloads: f
  };
}
const Ol = { class: "resolution-stepper" }, Fl = { class: "stepper-header" }, Vl = ["onClick"], Al = {
  key: 0,
  class: "step-icon"
}, Wl = {
  key: 1,
  class: "step-number"
}, Gl = { class: "step-label" }, jl = {
  key: 0,
  class: "step-connector"
}, Hl = { class: "stepper-content" }, ql = /* @__PURE__ */ Y({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p(u) {
      var b;
      if ((b = a.stepStats) != null && b[u]) {
        const h = a.stepStats[u];
        return h.total > 0 && h.resolved === h.total;
      }
      return a.completedSteps.includes(u);
    }
    function v(u) {
      var b;
      if ((b = a.stepStats) != null && b[u]) {
        const h = a.stepStats[u];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function y(u) {
      return p(u) ? "state-complete" : v(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function l(u) {
      d("step-change", u);
    }
    return (u, b) => (s(), o("div", Ol, [
      e("div", Fl, [
        (s(!0), o(W, null, Z(t.steps, (h, k) => (s(), o("div", {
          key: h.id,
          class: ae(["step", {
            active: t.currentStep === h.id,
            completed: p(h.id),
            "in-progress": v(h.id),
            disabled: m(h.id)
          }]),
          onClick: (C) => l(h.id)
        }, [
          e("div", {
            class: ae(["step-indicator", y(h.id)])
          }, [
            p(h.id) ? (s(), o("span", Al, "✓")) : (s(), o("span", Wl, n(k + 1), 1))
          ], 2),
          e("div", Gl, n(h.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", jl)) : c("", !0)
        ], 10, Vl))), 128))
      ]),
      e("div", Hl, [
        he(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Kl = /* @__PURE__ */ X(ql, [["__scopeId", "data-v-2a7b3af8"]]), Yl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = U(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), d = U(() => `confidence-${a.value}`), p = U(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : a.value.charAt(0).toUpperCase() + a.value.slice(1));
    return (v, y) => (s(), o("span", {
      class: ae(["confidence-badge", d.value, t.size])
    }, n(p.value), 3));
  }
}), Gt = /* @__PURE__ */ X(Yl, [["__scopeId", "data-v-17ec4b80"]]), Xl = { class: "node-info" }, Ql = { class: "node-info-text" }, Zl = { class: "item-body" }, Jl = {
  key: 0,
  class: "resolved-state"
}, ei = {
  key: 1,
  class: "multiple-options"
}, ti = { class: "options-list" }, si = ["onClick"], oi = ["name", "value", "checked", "onChange"], ai = { class: "option-content" }, ni = { class: "option-header" }, li = { class: "option-package-id" }, ii = {
  key: 0,
  class: "option-title"
}, ri = { class: "option-meta" }, di = {
  key: 0,
  class: "installed-badge"
}, ci = { class: "action-buttons" }, ui = {
  key: 2,
  class: "unresolved"
}, mi = {
  key: 0,
  class: "searching-state"
}, vi = { class: "options-list" }, fi = ["onClick"], gi = ["name", "value"], pi = { class: "option-content" }, hi = { class: "option-header" }, yi = { class: "option-package-id" }, wi = {
  key: 0,
  class: "option-description"
}, ki = { class: "option-meta" }, bi = {
  key: 0,
  class: "installed-badge"
}, _i = {
  key: 2,
  class: "unresolved-message"
}, $i = { class: "action-buttons" }, Ci = /* @__PURE__ */ Y({
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
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p(l, u = 80) {
      return l.length <= u ? l : l.slice(0, u - 3) + "...";
    }
    const v = U(() => !!a.choice);
    U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.action;
    }), U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.package_id;
    });
    const y = U(() => {
      switch (a.status) {
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
    function m(l) {
      d("option-selected", l);
    }
    return (l, u) => (s(), o("div", {
      class: ae(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Xl, [
        e("span", Ql, [
          u[7] || (u[7] = w("Node type: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ae(["status-badge", y.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Zl, [
        v.value ? (s(), o("div", Jl, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ei, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ti, [
            (s(!0), o(W, null, Z(t.options, (b, h) => (s(), o("label", {
              key: b.package_id,
              class: ae(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (k) => m(h)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (k) => m(h)
              }, null, 40, oi),
              e("div", ai, [
                e("div", ni, [
                  e("span", li, n(b.package_id), 1),
                  g(Gt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                b.title && b.title !== b.package_id ? (s(), o("div", ii, n(b.title), 1)) : c("", !0),
                e("div", ri, [
                  b.is_installed ? (s(), o("span", di, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, si))), 128))
          ]),
          e("div", ci, [
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ui, [
          t.isSearching ? (s(), o("div", mi, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", vi, [
              (s(!0), o(W, null, Z(t.searchResults.slice(0, 5), (b, h) => (s(), o("label", {
                key: b.package_id,
                class: "option-card",
                onClick: (k) => d("search-result-selected", b)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: h
                }, null, 8, gi),
                e("div", pi, [
                  e("div", hi, [
                    e("span", yi, n(b.package_id), 1),
                    g(Gt, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.description ? (s(), o("div", wi, n(p(b.description)), 1)) : c("", !0),
                  e("div", ki, [
                    b.is_installed ? (s(), o("span", bi, "Already Installed")) : c("", !0)
                  ])
                ])
              ], 8, fi))), 128))
            ])
          ], 64)) : (s(), o("div", _i, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", $i, [
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => d("search"))
            }, {
              default: i(() => {
                var b;
                return [
                  w(n((b = t.searchResults) != null && b.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...u[16] || (u[16] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[17] || (u[17] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), xi = /* @__PURE__ */ X(Ci, [["__scopeId", "data-v-c2997d1d"]]), Si = { class: "item-navigator" }, Ii = { class: "nav-item-info" }, Ei = ["title"], Mi = { class: "nav-controls" }, zi = { class: "nav-arrows" }, Li = ["disabled"], Ri = ["disabled"], Di = { class: "nav-position" }, Ni = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const a = r;
    return (d, p) => (s(), o("div", Si, [
      e("div", Ii, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, n(t.itemName), 9, Ei)
      ]),
      e("div", Mi, [
        e("div", zi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (v) => a("prev")),
            title: "Previous item"
          }, " ← ", 8, Li),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (v) => a("next")),
            title: "Next item"
          }, " → ", 8, Ri)
        ]),
        e("span", Di, n(t.currentIndex + 1) + "/" + n(t.totalItems), 1)
      ])
    ]));
  }
}), ks = /* @__PURE__ */ X(Ni, [["__scopeId", "data-v-74af7920"]]), Ti = ["type", "value", "placeholder", "disabled"], Ui = {
  key: 0,
  class: "base-input-error"
}, Pi = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("div", {
      class: ae(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ae(["base-input", { error: !!t.error }]),
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeyup: [
          a[1] || (a[1] = ct((d) => r.$emit("enter"), ["enter"])),
          a[2] || (a[2] = ct((d) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ti),
      t.error ? (s(), o("span", Ui, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), je = /* @__PURE__ */ X(Pi, [["__scopeId", "data-v-9ba02cdc"]]), Bi = { class: "node-resolution-step" }, Oi = {
  key: 0,
  class: "auto-resolved-section"
}, Fi = { class: "section-header" }, Vi = { class: "stat-badge" }, Ai = { class: "resolved-packages-list" }, Wi = { class: "package-info" }, Gi = { class: "package-id" }, ji = { class: "node-count" }, Hi = { class: "package-actions" }, qi = {
  key: 0,
  class: "status-badge install"
}, Ki = {
  key: 1,
  class: "status-badge skip"
}, Yi = ["onClick"], Xi = {
  key: 1,
  class: "section-divider"
}, Qi = { class: "step-header" }, Zi = { class: "stat-badge" }, Ji = {
  key: 1,
  class: "step-body"
}, er = {
  key: 3,
  class: "empty-state"
}, tr = { class: "node-modal-body" }, sr = { class: "node-search-results-container" }, or = {
  key: 0,
  class: "node-search-results"
}, ar = ["onClick"], nr = { class: "node-result-header" }, lr = { class: "node-result-package-id" }, ir = {
  key: 0,
  class: "node-result-description"
}, rr = {
  key: 1,
  class: "node-empty-state"
}, dr = {
  key: 2,
  class: "node-empty-state"
}, cr = {
  key: 3,
  class: "node-empty-state"
}, ur = { class: "node-manual-entry-modal" }, mr = { class: "node-modal-body" }, vr = { class: "node-modal-actions" }, fr = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: r }) {
    const a = t, d = r, { searchNodes: p } = ws(), v = $(0), y = $(!1), m = $(!1), l = $(""), u = $(""), b = $([]), h = $(!1), k = $(/* @__PURE__ */ new Map()), C = $(/* @__PURE__ */ new Set()), L = $(!1);
    function _() {
      L.value && P(), L.value = !1;
    }
    const f = U(() => a.nodes[v.value]), D = U(() => a.nodes.filter((le) => a.nodeChoices.has(le.node_type)).length), O = U(() => f.value ? k.value.get(f.value.node_type) || [] : []), I = U(() => f.value ? C.value.has(f.value.node_type) : !1);
    jt(f, async (le) => {
      var ue;
      le && ((ue = le.options) != null && ue.length || k.value.has(le.node_type) || C.value.has(le.node_type) || a.nodeChoices.has(le.node_type) || await B(le.node_type));
    }, { immediate: !0 });
    async function B(le) {
      C.value.add(le);
      try {
        const ue = await p(le, 5);
        k.value.set(le, ue);
      } catch {
        k.value.set(le, []);
      } finally {
        C.value.delete(le);
      }
    }
    const A = U(() => a.autoResolvedPackages.filter((le) => !a.skippedPackages.has(le.package_id)).length);
    function F(le) {
      return a.skippedPackages.has(le);
    }
    function T(le) {
      d("package-skip", le);
    }
    const R = U(() => {
      var ue;
      if (!f.value) return "not-found";
      const le = a.nodeChoices.get(f.value.node_type);
      if (le)
        switch (le.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ue = f.value.options) != null && ue.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var ue;
      if (!f.value) return;
      const le = a.nodeChoices.get(f.value.node_type);
      if (le)
        switch (le.action) {
          case "install":
            return le.package_id ? `→ ${le.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ue = f.value.options) != null && ue.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function z(le) {
      le >= 0 && le < a.nodes.length && (v.value = le);
    }
    function ee() {
      f.value && d("mark-optional", f.value.node_type);
    }
    function K() {
      f.value && d("skip", f.value.node_type);
    }
    function se(le) {
      f.value && d("option-selected", f.value.node_type, le);
    }
    function ge() {
      f.value && d("clear-choice", f.value.node_type);
    }
    function re() {
      f.value && (l.value = f.value.node_type, b.value = O.value, y.value = !0, ve(l.value));
    }
    function te() {
      u.value = "", m.value = !0;
    }
    function P() {
      y.value = !1, l.value = "", b.value = [];
    }
    function E() {
      m.value = !1, u.value = "";
    }
    let oe = null;
    function q() {
      oe && clearTimeout(oe), oe = setTimeout(() => {
        ve(l.value);
      }, 300);
    }
    async function ve(le) {
      if (!le.trim()) {
        b.value = [];
        return;
      }
      h.value = !0;
      try {
        b.value = await p(le, 10);
      } catch {
        b.value = [];
      } finally {
        h.value = !1;
      }
    }
    function G(le) {
      f.value && (d("manual-entry", f.value.node_type, le.package_id), P());
    }
    function ne(le) {
      f.value && d("manual-entry", f.value.node_type, le.package_id);
    }
    function Ie() {
      !f.value || !u.value.trim() || (d("manual-entry", f.value.node_type, u.value.trim()), E());
    }
    return (le, ue) => {
      var ke, Ke;
      return s(), o("div", Bi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Oi, [
          e("div", Fi, [
            ue[6] || (ue[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Vi, n(A.value) + "/" + n(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Ai, [
            (s(!0), o(W, null, Z(t.autoResolvedPackages, (de) => (s(), o("div", {
              key: de.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Wi, [
                e("code", Gi, n(de.package_id), 1),
                e("span", ji, n(de.node_types_count) + " node type" + n(de.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Hi, [
                F(de.package_id) ? (s(), o("span", Ki, " SKIPPED ")) : (s(), o("span", qi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ut) => T(de.package_id)
                }, n(F(de.package_id) ? "Include" : "Skip"), 9, Yi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Xi)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Qi, [
            ue[7] || (ue[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Zi, n(D.value) + "/" + n(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), S(ks, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ue[0] || (ue[0] = (de) => z(v.value - 1)),
            onNext: ue[1] || (ue[1] = (de) => z(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          f.value ? (s(), o("div", Ji, [
            g(xi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((ke = f.value.options) != null && ke.length),
              options: f.value.options,
              choice: (Ke = t.nodeChoices) == null ? void 0 : Ke.get(f.value.node_type),
              status: R.value,
              "status-label": x.value,
              "search-results": O.value,
              "is-searching": I.value,
              onMarkOptional: ee,
              onSkip: K,
              onManualEntry: te,
              onSearch: re,
              onOptionSelected: se,
              onClearChoice: ge,
              onSearchResultSelected: ne
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", er, [...ue[8] || (ue[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), S(Te, { to: "body" }, [
          y.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ue[4] || (ue[4] = Me((de) => L.value = !0, ["self"])),
            onMouseup: Me(_, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ue[3] || (ue[3] = (de) => L.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ue[9] || (ue[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", tr, [
                g(je, {
                  modelValue: l.value,
                  "onUpdate:modelValue": ue[2] || (ue[2] = (de) => l.value = de),
                  placeholder: "Search by node type, package name...",
                  onInput: q
                }, null, 8, ["modelValue"]),
                e("div", sr, [
                  b.value.length > 0 ? (s(), o("div", or, [
                    (s(!0), o(W, null, Z(b.value, (de) => (s(), o("div", {
                      key: de.package_id,
                      class: "node-search-result-item",
                      onClick: (ut) => G(de)
                    }, [
                      e("div", nr, [
                        e("code", lr, n(de.package_id), 1),
                        de.match_confidence ? (s(), S(Gt, {
                          key: 0,
                          confidence: de.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : c("", !0)
                      ]),
                      de.description ? (s(), o("div", ir, n(de.description), 1)) : c("", !0)
                    ], 8, ar))), 128))
                  ])) : h.value ? (s(), o("div", rr, "Searching...")) : l.value ? (s(), o("div", dr, 'No packages found matching "' + n(l.value) + '"', 1)) : (s(), o("div", cr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : c("", !0)
        ])),
        (s(), S(Te, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Me(E, ["self"])
          }, [
            e("div", ur, [
              e("div", { class: "node-modal-header" }, [
                ue[10] || (ue[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", mr, [
                g(je, {
                  modelValue: u.value,
                  "onUpdate:modelValue": ue[5] || (ue[5] = (de) => u.value = de),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", vr, [
                  g(ie, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: i(() => [...ue[11] || (ue[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: Ie
                  }, {
                    default: i(() => [...ue[12] || (ue[12] = [
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
}), gr = /* @__PURE__ */ X(fr, [["__scopeId", "data-v-281581bc"]]), pr = { class: "node-info" }, hr = { class: "node-info-text" }, yr = { class: "item-body" }, wr = {
  key: 0,
  class: "resolved-state"
}, kr = {
  key: 1,
  class: "multiple-options"
}, br = { class: "options-list" }, _r = ["onClick"], $r = ["name", "value", "checked", "onChange"], Cr = { class: "option-content" }, xr = { class: "option-header" }, Sr = { class: "option-filename" }, Ir = { class: "option-meta" }, Er = { class: "option-size" }, Mr = { class: "option-category" }, zr = { class: "option-path" }, Lr = { class: "action-buttons" }, Rr = {
  key: 2,
  class: "unresolved"
}, Dr = { class: "action-buttons" }, Nr = /* @__PURE__ */ Y({
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
    const a = t, d = r, p = U(() => !!a.choice);
    U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.action;
    }), U(() => {
      var l, u;
      return ((u = (l = a.choice) == null ? void 0 : l.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const v = U(() => {
      switch (a.status) {
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
    function y(l) {
      d("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const u = l / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, u) => (s(), o("div", {
      class: ae(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", pr, [
        e("span", hr, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ae(["status-badge", v.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", yr, [
        p.value ? (s(), o("div", wr, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", kr, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", br, [
            (s(!0), o(W, null, Z(t.options, (b, h) => (s(), o("label", {
              key: b.model.hash,
              class: ae(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (k) => y(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (k) => y(h)
              }, null, 40, $r),
              e("div", Cr, [
                e("div", xr, [
                  e("span", Sr, n(b.model.filename), 1),
                  g(Gt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ir, [
                  e("span", Er, n(m(b.model.size)), 1),
                  e("span", Mr, n(b.model.category), 1)
                ]),
                e("div", zr, n(b.model.relative_path), 1)
              ])
            ], 10, _r))), 128))
          ]),
          e("div", Lr, [
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => d("download-url"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Rr, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Dr, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => d("search"))
            }, {
              default: i(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => d("download-url"))
            }, {
              default: i(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[15] || (u[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Tr = /* @__PURE__ */ X(Nr, [["__scopeId", "data-v-8a82fefa"]]), Ur = { class: "model-resolution-step" }, Pr = { class: "step-header" }, Br = { class: "step-info" }, Or = { class: "step-title" }, Fr = { class: "step-description" }, Vr = { class: "stat-badge" }, Ar = {
  key: 1,
  class: "step-body"
}, Wr = {
  key: 2,
  class: "empty-state"
}, Gr = { class: "model-search-modal" }, jr = { class: "model-modal-body" }, Hr = {
  key: 0,
  class: "model-search-results"
}, qr = ["onClick"], Kr = { class: "model-result-header" }, Yr = { class: "model-result-filename" }, Xr = { class: "model-result-meta" }, Qr = { class: "model-result-category" }, Zr = { class: "model-result-size" }, Jr = {
  key: 0,
  class: "model-result-path"
}, ed = {
  key: 1,
  class: "model-no-results"
}, td = {
  key: 2,
  class: "model-searching"
}, sd = { class: "model-download-url-modal" }, od = { class: "model-modal-body" }, ad = { class: "model-input-group" }, nd = { class: "model-input-group" }, ld = { class: "model-modal-actions" }, id = /* @__PURE__ */ Y({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: r }) {
    const a = {
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
    function d(P) {
      var E;
      return P && ((E = a[P]) == null ? void 0 : E[0]) || null;
    }
    const p = t, v = r, y = $(0), m = $(!1), l = $(!1), u = $(""), b = $(""), h = $(""), k = $([]), C = $(!1), L = U(() => p.models[y.value]), _ = U(() => p.models.some((P) => P.is_download_intent)), f = U(() => p.models.filter(
      (P) => p.modelChoices.has(P.filename) || P.is_download_intent
    ).length), D = U(() => {
      var E;
      if (!L.value) return "";
      const P = d((E = L.value.reference) == null ? void 0 : E.node_type);
      return P ? `${P}/${L.value.filename}` : "";
    }), O = U(() => {
      var E;
      if (!L.value) return "not-found";
      const P = p.modelChoices.get(L.value.filename);
      if (P)
        switch (P.action) {
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
      return L.value.is_download_intent ? "download" : (E = L.value.options) != null && E.length ? "ambiguous" : "not-found";
    }), I = U(() => {
      var E, oe;
      if (!L.value) return;
      const P = p.modelChoices.get(L.value.filename);
      if (P)
        switch (P.action) {
          case "select":
            return (E = P.selected_model) != null && E.filename ? `→ ${P.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (oe = L.value.options) != null && oe.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function B(P) {
      P >= 0 && P < p.models.length && (y.value = P);
    }
    function A() {
      L.value && v("mark-optional", L.value.filename);
    }
    function F() {
      L.value && v("skip", L.value.filename);
    }
    function T(P) {
      L.value && v("option-selected", L.value.filename, P);
    }
    function R() {
      L.value && v("clear-choice", L.value.filename);
    }
    function x() {
      L.value && (u.value = L.value.filename, m.value = !0);
    }
    function z() {
      L.value && (b.value = L.value.download_source || "", h.value = L.value.target_path || D.value, l.value = !0);
    }
    function ee() {
      m.value = !1, u.value = "", k.value = [];
    }
    function K() {
      l.value = !1, b.value = "", h.value = "";
    }
    function se() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function ge(P) {
      L.value && ee();
    }
    function re() {
      !L.value || !b.value.trim() || (v("download-url", L.value.filename, b.value.trim(), h.value.trim() || void 0), K());
    }
    function te(P) {
      if (!P) return "Unknown";
      const E = P / (1024 * 1024 * 1024);
      return E >= 1 ? `${E.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, E) => {
      var oe, q, ve;
      return s(), o("div", Ur, [
        e("div", Pr, [
          e("div", Br, [
            e("h3", Or, n(_.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Fr, n(_.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Vr, n(f.value) + "/" + n(t.models.length) + " resolved", 1)
        ]),
        L.value ? (s(), S(ks, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": y.value,
          "total-items": t.models.length,
          onPrev: E[0] || (E[0] = (G) => B(y.value - 1)),
          onNext: E[1] || (E[1] = (G) => B(y.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        L.value ? (s(), o("div", Ar, [
          g(Tr, {
            filename: L.value.filename,
            "node-type": ((oe = L.value.reference) == null ? void 0 : oe.node_type) || "Unknown",
            "has-multiple-options": !!((q = L.value.options) != null && q.length),
            options: L.value.options,
            choice: (ve = t.modelChoices) == null ? void 0 : ve.get(L.value.filename),
            status: O.value,
            "status-label": I.value,
            onMarkOptional: A,
            onSkip: F,
            onDownloadUrl: z,
            onSearch: x,
            onOptionSelected: T,
            onClearChoice: R
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Wr, [...E[5] || (E[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), S(Te, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Me(ee, ["self"])
          }, [
            e("div", Gr, [
              e("div", { class: "model-modal-header" }, [
                E[6] || (E[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              e("div", jr, [
                g(je, {
                  modelValue: u.value,
                  "onUpdate:modelValue": E[2] || (E[2] = (G) => u.value = G),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", Hr, [
                  (s(!0), o(W, null, Z(k.value, (G) => (s(), o("div", {
                    key: G.hash,
                    class: "model-search-result-item",
                    onClick: (ne) => ge()
                  }, [
                    e("div", Kr, [
                      e("code", Yr, n(G.filename), 1)
                    ]),
                    e("div", Xr, [
                      e("span", Qr, n(G.category), 1),
                      e("span", Zr, n(te(G.size)), 1)
                    ]),
                    G.relative_path ? (s(), o("div", Jr, n(G.relative_path), 1)) : c("", !0)
                  ], 8, qr))), 128))
                ])) : u.value && !C.value ? (s(), o("div", ed, ' No models found matching "' + n(u.value) + '" ', 1)) : c("", !0),
                C.value ? (s(), o("div", td, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), S(Te, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Me(K, ["self"])
          }, [
            e("div", sd, [
              e("div", { class: "model-modal-header" }, [
                E[7] || (E[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: K
                }, "✕")
              ]),
              e("div", od, [
                e("div", ad, [
                  E[8] || (E[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(je, {
                    modelValue: b.value,
                    "onUpdate:modelValue": E[3] || (E[3] = (G) => b.value = G),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", nd, [
                  E[9] || (E[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(je, {
                    modelValue: h.value,
                    "onUpdate:modelValue": E[4] || (E[4] = (G) => h.value = G),
                    placeholder: D.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ld, [
                  g(ie, {
                    variant: "secondary",
                    onClick: K
                  }, {
                    default: i(() => [...E[10] || (E[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !b.value.trim() || !h.value.trim(),
                    onClick: re
                  }, {
                    default: i(() => [...E[11] || (E[11] = [
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
}), rd = /* @__PURE__ */ X(id, [["__scopeId", "data-v-c6acbada"]]), dd = { class: "applying-step" }, cd = {
  key: 0,
  class: "phase-content"
}, ud = {
  key: 1,
  class: "phase-content"
}, md = { class: "phase-description" }, vd = { class: "overall-progress" }, fd = { class: "progress-bar" }, gd = { class: "progress-label" }, pd = { class: "install-list" }, hd = { class: "install-icon" }, yd = { key: 0 }, wd = {
  key: 1,
  class: "spinner"
}, kd = { key: 2 }, bd = { key: 3 }, _d = {
  key: 0,
  class: "install-error"
}, $d = {
  key: 2,
  class: "phase-content"
}, Cd = { class: "phase-header" }, xd = { class: "phase-title" }, Sd = { class: "completion-summary" }, Id = {
  key: 0,
  class: "summary-item success"
}, Ed = { class: "summary-text" }, Md = {
  key: 1,
  class: "summary-item error"
}, zd = { class: "summary-text" }, Ld = {
  key: 2,
  class: "failed-list"
}, Rd = { class: "failed-node-id" }, Dd = { class: "failed-error" }, Nd = {
  key: 4,
  class: "summary-item success"
}, Td = {
  key: 5,
  class: "restart-prompt"
}, Ud = {
  key: 3,
  class: "phase-content error"
}, Pd = { class: "error-message" }, Bd = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const r = t, a = U(() => {
      var u, b;
      const m = ((u = r.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || r.progress.nodesToInstall.length;
      if (!m) return 0;
      const l = ((b = r.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0;
      return Math.round(l / m * 100);
    }), d = U(() => {
      var m;
      return ((m = r.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((l) => !l.success)) || [];
    }), p = U(() => d.value.length > 0);
    function v(m, l) {
      var b, h;
      const u = (b = r.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.find((k) => k.node_id === m);
      return u ? u.success ? "complete" : "failed" : ((h = r.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === l ? "installing" : "pending";
    }
    function y(m) {
      var l, u;
      return (u = (l = r.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((b) => b.node_id === m)) == null ? void 0 : u.error;
    }
    return (m, l) => {
      var u, b, h, k;
      return s(), o("div", dd, [
        t.progress.phase === "resolving" ? (s(), o("div", cd, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", ud, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", md, " Installing " + n((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + n(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", vd, [
            e("div", fd, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${a.value}%` })
              }, null, 4)
            ]),
            e("span", gd, n(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + n(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", pd, [
            (s(!0), o(W, null, Z(t.progress.nodesToInstall, (C, L) => (s(), o("div", {
              key: C,
              class: ae(["install-item", v(C, L)])
            }, [
              e("span", hd, [
                v(C, L) === "pending" ? (s(), o("span", yd, "○")) : v(C, L) === "installing" ? (s(), o("span", wd, "◌")) : v(C, L) === "complete" ? (s(), o("span", kd, "✓")) : v(C, L) === "failed" ? (s(), o("span", bd, "✗")) : c("", !0)
              ]),
              e("code", null, n(C), 1),
              y(C) ? (s(), o("span", _d, n(y(C)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", $d, [
          e("div", Cd, [
            e("span", {
              class: ae(["phase-icon", p.value ? "warning" : "success"])
            }, n(p.value ? "⚠" : "✓"), 3),
            e("h3", xd, n(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Sd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Id, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Ed, n(t.progress.nodesInstalled.length) + " node package" + n(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Md, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", zd, n(d.value.length) + " package" + n(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Ld, [
              (s(!0), o(W, null, Z(d.value, (C) => (s(), o("div", {
                key: C.node_id,
                class: "failed-item"
              }, [
                e("code", Rd, n(C.node_id), 1),
                e("span", Dd, n(C.error), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (C) => m.$emit("retry-failed"))
            }, " Retry Failed (" + n(d.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (s(), o("div", Nd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Td, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (C) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Ud, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Pd, n(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Od = /* @__PURE__ */ X(Bd, [["__scopeId", "data-v-5efaae58"]]), Fd = {
  key: 0,
  class: "loading-state"
}, Vd = {
  key: 1,
  class: "wizard-content"
}, Ad = {
  key: 0,
  class: "step-content"
}, Wd = { class: "analysis-summary" }, Gd = { class: "analysis-header" }, jd = { class: "summary-description" }, Hd = { class: "stats-grid" }, qd = { class: "stat-card" }, Kd = { class: "stat-items" }, Yd = {
  key: 0,
  class: "stat-item success"
}, Xd = { class: "stat-count" }, Qd = {
  key: 1,
  class: "stat-item info"
}, Zd = { class: "stat-count" }, Jd = {
  key: 2,
  class: "stat-item warning"
}, ec = { class: "stat-count" }, tc = {
  key: 3,
  class: "stat-item error"
}, sc = { class: "stat-count" }, oc = { class: "stat-card" }, ac = { class: "stat-items" }, nc = { class: "stat-item success" }, lc = { class: "stat-count" }, ic = {
  key: 0,
  class: "stat-item info"
}, rc = { class: "stat-count" }, dc = {
  key: 1,
  class: "stat-item warning"
}, cc = { class: "stat-count" }, uc = {
  key: 2,
  class: "stat-item warning"
}, mc = { class: "stat-count" }, vc = {
  key: 3,
  class: "stat-item error"
}, fc = { class: "stat-count" }, gc = {
  key: 0,
  class: "status-message warning"
}, pc = { class: "status-text" }, hc = {
  key: 1,
  class: "status-message info"
}, yc = { class: "status-text" }, wc = {
  key: 2,
  class: "status-message info"
}, kc = { class: "status-text" }, bc = {
  key: 3,
  class: "status-message warning"
}, _c = { class: "status-text" }, $c = {
  key: 4,
  class: "status-message success"
}, Cc = {
  key: 5,
  class: "category-mismatch-section"
}, xc = { class: "mismatch-list" }, Sc = { class: "mismatch-path" }, Ic = { class: "mismatch-target" }, Ec = {
  key: 3,
  class: "step-content"
}, Mc = { class: "review-summary" }, zc = { class: "review-stats" }, Lc = { class: "review-stat" }, Rc = { class: "stat-value" }, Dc = { class: "review-stat" }, Nc = { class: "stat-value" }, Tc = { class: "review-stat" }, Uc = { class: "stat-value" }, Pc = { class: "review-stat" }, Bc = { class: "stat-value" }, Oc = {
  key: 0,
  class: "review-section"
}, Fc = { class: "section-title" }, Vc = { class: "review-items" }, Ac = { class: "item-name" }, Wc = { class: "item-choice" }, Gc = {
  key: 0,
  class: "choice-badge install"
}, jc = {
  key: 1,
  class: "choice-badge skip"
}, Hc = {
  key: 1,
  class: "review-section"
}, qc = { class: "section-title" }, Kc = { class: "review-items" }, Yc = { class: "item-name" }, Xc = { class: "item-choice" }, Qc = {
  key: 0,
  class: "choice-badge install"
}, Zc = {
  key: 1,
  class: "choice-badge optional"
}, Jc = {
  key: 2,
  class: "choice-badge skip"
}, eu = {
  key: 1,
  class: "choice-badge pending"
}, tu = {
  key: 2,
  class: "review-section"
}, su = { class: "section-title" }, ou = { class: "review-items" }, au = { class: "item-name" }, nu = { class: "item-choice" }, lu = {
  key: 0,
  class: "choice-badge install"
}, iu = {
  key: 1,
  class: "choice-badge download"
}, ru = {
  key: 2,
  class: "choice-badge optional"
}, du = {
  key: 3,
  class: "choice-badge skip"
}, cu = {
  key: 4,
  class: "choice-badge skip"
}, uu = {
  key: 1,
  class: "choice-badge download"
}, mu = {
  key: 2,
  class: "choice-badge pending"
}, vu = {
  key: 3,
  class: "no-choices"
}, fu = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: r }) {
    const a = t, d = r, { analyzeWorkflow: p, applyResolution: v, installNodes: y, queueModelDownloads: m, progress: l, resetProgress: u } = ws(), { loadPendingDownloads: b } = Bt(), { openFileLocation: h } = De(), k = $(null), C = $(!1), L = $(!1), _ = $(null), f = $("analysis"), D = $([]), O = $(/* @__PURE__ */ new Map()), I = $(/* @__PURE__ */ new Map()), B = $(/* @__PURE__ */ new Set()), A = U(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (T.value || z.value) && j.push({ id: "nodes", label: "Nodes" }), (R.value || x.value) && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), f.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), F = U(() => k.value ? k.value.stats.needs_user_input : !1), T = U(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), R = U(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), x = U(() => k.value ? k.value.stats.download_intents > 0 : !1), z = U(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), ee = U(() => k.value ? k.value.nodes.resolved.length : 0), K = U(() => k.value ? k.value.models.resolved.filter((j) => j.has_category_mismatch) : []), se = U(() => K.value.length > 0), ge = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((H) => !H.is_installed), N = /* @__PURE__ */ new Set();
      return j.filter((H) => N.has(H.package.package_id) ? !1 : (N.add(H.package.package_id), !0));
    }), re = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((H) => !H.is_installed), N = /* @__PURE__ */ new Map();
      for (const H of j) {
        const fe = N.get(H.package.package_id);
        fe ? fe.node_types_count++ : N.set(H.package.package_id, {
          package_id: H.package.package_id,
          title: H.package.title,
          node_types_count: 1
        });
      }
      return Array.from(N.values());
    }), te = U(() => ge.value.filter((j) => !B.value.has(j.package.package_id))), P = U(() => k.value ? k.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), E = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.unresolved.map((H) => ({
        node_type: H.reference.node_type,
        reason: H.reason,
        is_unresolved: !0,
        options: void 0
      })), N = k.value.nodes.ambiguous.map((H) => ({
        node_type: H.reference.node_type,
        has_multiple_options: !0,
        options: H.options.map((fe) => ({
          package_id: fe.package.package_id,
          title: fe.package.title,
          match_confidence: fe.match_confidence,
          match_type: fe.match_type,
          is_installed: fe.is_installed
        }))
      }));
      return [...j, ...N];
    }), oe = U(() => {
      if (!k.value) return [];
      const j = k.value.models.unresolved.map((H) => ({
        filename: H.reference.widget_value,
        reference: H.reference,
        reason: H.reason,
        is_unresolved: !0,
        options: void 0
      })), N = k.value.models.ambiguous.map((H) => ({
        filename: H.reference.widget_value,
        reference: H.reference,
        has_multiple_options: !0,
        options: H.options.map((fe) => ({
          model: fe.model,
          match_confidence: fe.match_confidence,
          match_type: fe.match_type,
          has_download_source: fe.has_download_source
        }))
      }));
      return [...j, ...N];
    }), q = U(() => {
      const j = oe.value, N = P.value.map((H) => ({
        filename: H.filename,
        reference: H.reference,
        is_download_intent: !0,
        resolved_model: H.resolved_model,
        download_source: H.download_source,
        target_path: H.target_path,
        options: void 0
      }));
      return [...j, ...N];
    }), ve = U(() => {
      let j = te.value.length;
      for (const N of O.value.values())
        N.action === "install" && j++;
      for (const N of I.value.values())
        N.action === "select" && j++;
      return j;
    }), G = U(() => {
      let j = 0;
      for (const N of I.value.values())
        N.action === "download" && j++;
      return j;
    }), ne = U(() => {
      let j = 0;
      for (const N of O.value.values())
        N.action === "optional" && j++;
      for (const N of I.value.values())
        N.action === "optional" && j++;
      return j;
    }), Ie = U(() => {
      let j = B.value.size;
      for (const N of O.value.values())
        N.action === "skip" && j++;
      for (const N of I.value.values())
        N.action === "skip" && j++;
      for (const N of E.value)
        O.value.has(N.node_type) || j++;
      for (const N of oe.value)
        I.value.has(N.filename) || j++;
      return j;
    }), le = U(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, T.value) {
        const N = E.value.length, H = E.value.filter(
          (fe) => O.value.has(fe.node_type)
        ).length;
        j.nodes = { resolved: H, total: N };
      }
      if (R.value || x.value) {
        const N = q.value.length, H = q.value.filter(
          (fe) => I.value.has(fe.filename) || fe.is_download_intent
        ).length;
        j.models = { resolved: H, total: N };
      }
      if (j.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const N = l.totalFiles || 1, H = l.completedFiles.length;
        j.applying = { resolved: H, total: N };
      }
      return j;
    });
    function ue(j) {
      f.value = j;
    }
    function ke() {
      const j = A.value.findIndex((N) => N.id === f.value);
      j > 0 && (f.value = A.value[j - 1].id);
    }
    function Ke() {
      const j = A.value.findIndex((N) => N.id === f.value);
      j < A.value.length - 1 && (f.value = A.value[j + 1].id);
    }
    async function de() {
      C.value = !0, _.value = null;
      try {
        k.value = await p(a.workflowName);
      } catch (j) {
        _.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ut() {
      D.value.includes("analysis") || D.value.push("analysis"), T.value || z.value ? f.value = "nodes" : R.value || x.value ? f.value = "models" : f.value = "review";
    }
    function xt(j) {
      O.value.set(j, { action: "optional" });
    }
    function St(j) {
      O.value.set(j, { action: "skip" });
    }
    function Ce(j, N) {
      var fe;
      const H = E.value.find((Re) => Re.node_type === j);
      (fe = H == null ? void 0 : H.options) != null && fe[N] && O.value.set(j, {
        action: "install",
        package_id: H.options[N].package_id
      });
    }
    function it(j, N) {
      O.value.set(j, {
        action: "install",
        package_id: N
      });
    }
    function Je(j) {
      O.value.delete(j);
    }
    function Ye(j) {
      B.value.has(j) ? B.value.delete(j) : B.value.add(j);
    }
    function It(j) {
      I.value.set(j, { action: "optional" });
    }
    function pe(j) {
      I.value.set(j, { action: "skip" });
    }
    function We(j, N) {
      var fe;
      const H = oe.value.find((Re) => Re.filename === j);
      (fe = H == null ? void 0 : H.options) != null && fe[N] && I.value.set(j, {
        action: "select",
        selected_model: H.options[N].model
      });
    }
    function Q(j, N, H) {
      I.value.set(j, {
        action: "download",
        url: N,
        target_path: H
      });
    }
    function _e(j) {
      I.value.delete(j);
    }
    async function xe(j) {
      try {
        await h(j);
      } catch (N) {
        _.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function yt() {
      var j;
      L.value = !0, _.value = null, u(), l.phase = "resolving", f.value = "applying";
      try {
        const N = await v(a.workflowName, O.value, I.value, B.value);
        N.models_to_download && N.models_to_download.length > 0 && m(a.workflowName, N.models_to_download);
        const H = [
          ...N.nodes_to_install || [],
          ...te.value.map((Re) => Re.package.package_id)
        ];
        l.nodesToInstall = [...new Set(H)], l.nodesToInstall.length > 0 && await y(a.workflowName), l.phase = "complete", await b();
        const fe = l.installError || ((j = l.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Re) => !Re.success));
        !l.needsRestart && !fe && setTimeout(() => {
          d("refresh"), d("install"), d("close");
        }, 1500);
      } catch (N) {
        _.value = N instanceof Error ? N.message : "Failed to apply resolution", l.error = _.value, l.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    function mt() {
      d("refresh"), d("restart"), d("close");
    }
    async function qt() {
      var N;
      const j = ((N = l.nodeInstallProgress) == null ? void 0 : N.completedNodes.filter((H) => !H.success).map((H) => H.node_id)) || [];
      if (j.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, l.nodesToInstall = j, l.nodesInstalled = [], l.installError = void 0;
        try {
          await y(a.workflowName), l.phase = "complete";
        } catch (H) {
          l.error = H instanceof Error ? H.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Le(de), (j, N) => (s(), S(ot, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: C.value,
      error: _.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (H) => d("close"))
    }, {
      body: i(() => [
        C.value && !k.value ? (s(), o("div", Fd, [...N[2] || (N[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Vd, [
          g(Kl, {
            steps: A.value,
            "current-step": f.value,
            "completed-steps": D.value,
            "step-stats": le.value,
            onStepChange: ue
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", Ad, [
            e("div", Wd, [
              e("div", Gd, [
                N[3] || (N[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", jd, " Found " + n(k.value.stats.total_nodes) + " nodes and " + n(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Hd, [
                e("div", qd, [
                  N[12] || (N[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Kd, [
                    ee.value > 0 ? (s(), o("div", Yd, [
                      N[4] || (N[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Xd, n(ee.value), 1),
                      N[5] || (N[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", Qd, [
                      N[6] || (N[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Zd, n(k.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", Jd, [
                      N[8] || (N[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ec, n(k.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", tc, [
                      N[10] || (N[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", sc, n(k.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", oc, [
                  N[23] || (N[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", ac, [
                    e("div", nc, [
                      N[13] || (N[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", lc, n(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      N[14] || (N[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", ic, [
                      N[15] || (N[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", rc, n(k.value.stats.download_intents), 1),
                      N[16] || (N[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    se.value ? (s(), o("div", dc, [
                      N[17] || (N[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", cc, n(K.value.length), 1),
                      N[18] || (N[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : c("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", uc, [
                      N[19] || (N[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", mc, n(k.value.models.ambiguous.length), 1),
                      N[20] || (N[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", vc, [
                      N[21] || (N[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", fc, n(k.value.models.unresolved.length), 1),
                      N[22] || (N[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", gc, [
                N[24] || (N[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", pc, n(E.value.length + oe.value.length) + " items need your input", 1)
              ])) : z.value ? (s(), o("div", hc, [
                N[25] || (N[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", yc, n(k.value.stats.packages_needing_installation) + " package" + n(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + n(k.value.stats.nodes_needing_installation) + " node type" + n(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + n(x.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : x.value ? (s(), o("div", wc, [
                N[26] || (N[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", kc, n(k.value.stats.download_intents) + " model" + n(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : se.value ? (s(), o("div", bc, [
                N[27] || (N[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", _c, n(K.value.length) + " model" + n(K.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", $c, [...N[28] || (N[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              se.value ? (s(), o("div", Cc, [
                N[31] || (N[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", xc, [
                  (s(!0), o(W, null, Z(K.value, (H) => {
                    var fe, Re;
                    return s(), o("div", {
                      key: H.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Sc, n(H.actual_category) + "/" + n((fe = H.model) == null ? void 0 : fe.filename), 1),
                      N[30] || (N[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Ic, n((Re = H.expected_categories) == null ? void 0 : Re[0]) + "/", 1),
                      H.file_path ? (s(), S(ie, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (rt) => xe(H.file_path)
                      }, {
                        default: i(() => [...N[29] || (N[29] = [
                          w(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]);
                  }), 128))
                ])
              ])) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "nodes" ? (s(), S(gr, {
            key: 1,
            nodes: E.value,
            "node-choices": O.value,
            "auto-resolved-packages": re.value,
            "skipped-packages": B.value,
            onMarkOptional: xt,
            onSkip: St,
            onOptionSelected: Ce,
            onManualEntry: it,
            onClearChoice: Je,
            onPackageSkip: Ye
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          f.value === "models" ? (s(), S(rd, {
            key: 2,
            models: q.value,
            "model-choices": I.value,
            onMarkOptional: It,
            onSkip: pe,
            onOptionSelected: We,
            onDownloadUrl: Q,
            onClearChoice: _e
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          f.value === "review" ? (s(), o("div", Ec, [
            e("div", Mc, [
              N[36] || (N[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", zc, [
                e("div", Lc, [
                  e("span", Rc, n(ve.value), 1),
                  N[32] || (N[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Dc, [
                  e("span", Nc, n(G.value), 1),
                  N[33] || (N[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Tc, [
                  e("span", Uc, n(ne.value), 1),
                  N[34] || (N[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Pc, [
                  e("span", Bc, n(Ie.value), 1),
                  N[35] || (N[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              re.value.length > 0 ? (s(), o("div", Oc, [
                e("h4", Fc, "Node Packages (" + n(re.value.length) + ")", 1),
                e("div", Vc, [
                  (s(!0), o(W, null, Z(re.value, (H) => (s(), o("div", {
                    key: H.package_id,
                    class: "review-item"
                  }, [
                    e("code", Ac, n(H.package_id), 1),
                    e("div", Wc, [
                      B.value.has(H.package_id) ? (s(), o("span", jc, "Skipped")) : (s(), o("span", Gc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              E.value.length > 0 ? (s(), o("div", Hc, [
                e("h4", qc, "Node Choices (" + n(E.value.length) + ")", 1),
                e("div", Kc, [
                  (s(!0), o(W, null, Z(E.value, (H) => {
                    var fe, Re, rt, Xe;
                    return s(), o("div", {
                      key: H.node_type,
                      class: "review-item"
                    }, [
                      e("code", Yc, n(H.node_type), 1),
                      e("div", Xc, [
                        O.value.has(H.node_type) ? (s(), o(W, { key: 0 }, [
                          ((fe = O.value.get(H.node_type)) == null ? void 0 : fe.action) === "install" ? (s(), o("span", Qc, n((Re = O.value.get(H.node_type)) == null ? void 0 : Re.package_id), 1)) : ((rt = O.value.get(H.node_type)) == null ? void 0 : rt.action) === "optional" ? (s(), o("span", Zc, " Optional ")) : ((Xe = O.value.get(H.node_type)) == null ? void 0 : Xe.action) === "skip" ? (s(), o("span", Jc, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", eu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              q.value.length > 0 ? (s(), o("div", tu, [
                e("h4", su, "Models (" + n(q.value.length) + ")", 1),
                e("div", ou, [
                  (s(!0), o(W, null, Z(q.value, (H) => {
                    var fe, Re, rt, Xe, Ot, vt, ft;
                    return s(), o("div", {
                      key: H.filename,
                      class: "review-item"
                    }, [
                      e("code", au, n(H.filename), 1),
                      e("div", nu, [
                        I.value.has(H.filename) ? (s(), o(W, { key: 0 }, [
                          ((fe = I.value.get(H.filename)) == null ? void 0 : fe.action) === "select" ? (s(), o("span", lu, n((rt = (Re = I.value.get(H.filename)) == null ? void 0 : Re.selected_model) == null ? void 0 : rt.filename), 1)) : ((Xe = I.value.get(H.filename)) == null ? void 0 : Xe.action) === "download" ? (s(), o("span", iu, " Download ")) : ((Ot = I.value.get(H.filename)) == null ? void 0 : Ot.action) === "optional" ? (s(), o("span", ru, " Optional ")) : ((vt = I.value.get(H.filename)) == null ? void 0 : vt.action) === "skip" ? (s(), o("span", du, " Skip ")) : ((ft = I.value.get(H.filename)) == null ? void 0 : ft.action) === "cancel_download" ? (s(), o("span", cu, " Cancel Download ")) : c("", !0)
                        ], 64)) : H.is_download_intent ? (s(), o("span", uu, " Pending Download ")) : (s(), o("span", mu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              ge.value.length === 0 && E.value.length === 0 && q.value.length === 0 ? (s(), o("div", vu, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "applying" ? (s(), S(Od, {
            key: 4,
            progress: we(l),
            onRestart: mt,
            onRetryFailed: qt
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), S(ie, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: ke
        }, {
          default: i(() => [...N[37] || (N[37] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        N[41] || (N[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || we(l).phase === "complete" || we(l).phase === "error" ? (s(), S(ie, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (H) => d("close"))
        }, {
          default: i(() => [
            w(n(we(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        f.value === "analysis" ? (s(), S(ie, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ut
        }, {
          default: i(() => [...N[38] || (N[38] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        f.value === "nodes" ? (s(), S(ie, {
          key: 3,
          variant: "primary",
          onClick: Ke
        }, {
          default: i(() => [
            w(n(R.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        f.value === "models" ? (s(), S(ie, {
          key: 4,
          variant: "primary",
          onClick: Ke
        }, {
          default: i(() => [...N[39] || (N[39] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        f.value === "review" ? (s(), S(ie, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: yt
        }, {
          default: i(() => [...N[40] || (N[40] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), gu = /* @__PURE__ */ X(fu, [["__scopeId", "data-v-6276cf1d"]]), pu = { class: "search-input-wrapper" }, hu = ["value", "placeholder"], yu = /* @__PURE__ */ Y({
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
    const a = t, d = r, p = $(null);
    let v;
    function y(l) {
      const u = l.target.value;
      a.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        d("update:modelValue", u);
      }, a.debounce)) : d("update:modelValue", u);
    }
    function m() {
      var l;
      d("update:modelValue", ""), d("clear"), (l = p.value) == null || l.focus();
    }
    return Le(() => {
      a.autoFocus && p.value && p.value.focus();
    }), (l, u) => (s(), o("div", pu, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: y,
        onKeyup: ct(m, ["escape"])
      }, null, 40, hu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), wu = /* @__PURE__ */ X(yu, [["__scopeId", "data-v-266f857a"]]), ku = { class: "search-bar" }, bu = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, a) => (s(), o("div", ku, [
      g(wu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => r.$emit("update:modelValue", d)),
        onClear: a[1] || (a[1] = (d) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $t = /* @__PURE__ */ X(bu, [["__scopeId", "data-v-3d51bbfd"]]), _u = { class: "section-group" }, $u = {
  key: 0,
  class: "section-content"
}, Cu = /* @__PURE__ */ Y({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = $(a.initiallyExpanded);
    function v() {
      a.collapsible && (p.value = !p.value, d("toggle", p.value));
    }
    return (y, m) => (s(), o("section", _u, [
      g(Ae, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: v
      }, {
        default: i(() => [
          w(n(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", $u, [
        he(y.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ze = /* @__PURE__ */ X(Cu, [["__scopeId", "data-v-c48e33ed"]]), xu = { class: "item-header" }, Su = {
  key: 0,
  class: "item-icon"
}, Iu = { class: "item-info" }, Eu = {
  key: 0,
  class: "item-title"
}, Mu = {
  key: 1,
  class: "item-subtitle"
}, zu = {
  key: 0,
  class: "item-details"
}, Lu = {
  key: 1,
  class: "item-actions"
}, Ru = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, d = U(() => a.status ? `status-${a.status}` : "");
    return (p, v) => (s(), o("div", {
      class: ae(["item-card", { clickable: t.clickable, compact: t.compact }, d.value]),
      onClick: v[0] || (v[0] = (y) => t.clickable && p.$emit("click"))
    }, [
      e("div", xu, [
        p.$slots.icon ? (s(), o("span", Su, [
          he(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Iu, [
          p.$slots.title ? (s(), o("div", Eu, [
            he(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (s(), o("div", Mu, [
            he(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", zu, [
        he(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (s(), o("div", Lu, [
        he(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ X(Ru, [["__scopeId", "data-v-cc435e0e"]]), Du = { class: "loading-state" }, Nu = { class: "loading-message" }, Tu = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, a) => (s(), o("div", Du, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Nu, n(t.message), 1)
    ]));
  }
}), nt = /* @__PURE__ */ X(Tu, [["__scopeId", "data-v-ad8436c9"]]), Uu = { class: "error-state" }, Pu = { class: "error-message" }, Bu = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, a) => (s(), o("div", Uu, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Pu, n(t.message), 1),
      t.retry ? (s(), S(J, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (d) => r.$emit("retry"))
      }, {
        default: i(() => [...a[1] || (a[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ X(Bu, [["__scopeId", "data-v-5397be48"]]), Ou = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getWorkflows: p } = De();
    hs();
    const v = $([]), y = $(!1), m = $(null), l = $(""), u = $(!0), b = $(!1), h = $(!1), k = $(!1), C = $(null), L = U(
      () => v.value.filter((te) => te.status === "broken")
    ), _ = U(
      () => v.value.filter((te) => te.status === "new")
    ), f = U(
      () => v.value.filter((te) => te.status === "modified")
    ), D = U(
      () => v.value.filter((te) => te.status === "synced")
    ), O = U(() => {
      if (!l.value.trim()) return v.value;
      const te = l.value.toLowerCase();
      return v.value.filter((P) => P.name.toLowerCase().includes(te));
    }), I = U(
      () => L.value.filter(
        (te) => !l.value.trim() || te.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), B = U(
      () => _.value.filter(
        (te) => !l.value.trim() || te.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), A = U(
      () => f.value.filter(
        (te) => !l.value.trim() || te.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), F = U(
      () => D.value.filter(
        (te) => !l.value.trim() || te.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), T = U(
      () => b.value ? F.value : F.value.slice(0, 5)
    );
    async function R(te = !1) {
      y.value = !0, m.value = null;
      try {
        v.value = await p(te);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        y.value = !1;
      }
    }
    r({ loadWorkflows: R });
    function x(te) {
      C.value = te, h.value = !0;
    }
    function z(te) {
      C.value = te, k.value = !0;
    }
    function ee() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      d("refresh");
    }
    async function se() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ge(te) {
      const P = [];
      return te.missing_nodes > 0 && P.push(`${te.missing_nodes} missing node${te.missing_nodes > 1 ? "s" : ""}`), te.missing_models > 0 && P.push(`${te.missing_models} missing model${te.missing_models > 1 ? "s" : ""}`), te.models_with_category_mismatch && te.models_with_category_mismatch > 0 && P.push(`${te.models_with_category_mismatch} model${te.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), te.pending_downloads && te.pending_downloads > 0 && P.push(`${te.pending_downloads} pending download${te.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function re(te) {
      const P = te.sync_state === "new" ? "New" : te.sync_state === "modified" ? "Modified" : te.sync_state === "synced" ? "Synced" : te.sync_state;
      return te.has_path_sync_issues && te.models_needing_path_sync && te.models_needing_path_sync > 0 ? `${te.models_needing_path_sync} model path${te.models_needing_path_sync > 1 ? "s" : ""} need${te.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return Le(R), (te, P) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, { title: "WORKFLOWS" }, {
            actions: i(() => [
              L.value.length > 0 ? (s(), S(J, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: i(() => [...P[8] || (P[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g($t, {
            modelValue: l.value,
            "onUpdate:modelValue": P[0] || (P[0] = (E) => l.value = E),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          y.value ? (s(), S(nt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), S(lt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            I.value.length ? (s(), S(ze, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(I.value, (E) => (s(), S(Ne, {
                  key: E.name,
                  status: "broken"
                }, {
                  icon: i(() => [...P[9] || (P[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(ge(E)), 1)
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => z(E.name)
                    }, {
                      default: i(() => [...P[10] || (P[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => x(E.name)
                    }, {
                      default: i(() => [...P[11] || (P[11] = [
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
            B.value.length ? (s(), S(ze, {
              key: 1,
              title: "NEW",
              count: B.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(B.value, (E) => (s(), S(Ne, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(n(E.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(re(E)), 1)
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => x(E.name)
                    }, {
                      default: i(() => [...P[12] || (P[12] = [
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
            A.value.length ? (s(), S(ze, {
              key: 2,
              title: "MODIFIED",
              count: A.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(A.value, (E) => (s(), S(Ne, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...P[13] || (P[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(re(E)), 1)
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => x(E.name)
                    }, {
                      default: i(() => [...P[14] || (P[14] = [
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
            F.value.length ? (s(), S(ze, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: P[2] || (P[2] = (E) => u.value = E)
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(T.value, (E) => (s(), S(Ne, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(n(E.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(re(E)), 1)
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => x(E.name)
                    }, {
                      default: i(() => [...P[15] || (P[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && F.value.length > 5 ? (s(), S(J, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (E) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    w(" View all " + n(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            O.value.length ? c("", !0) : (s(), S(qe, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && C.value ? (s(), S(Ul, {
        key: 0,
        "workflow-name": C.value,
        onClose: P[3] || (P[3] = (E) => h.value = !1),
        onResolve: P[4] || (P[4] = (E) => z(C.value)),
        onRefresh: P[5] || (P[5] = (E) => d("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      k.value && C.value ? (s(), S(gu, {
        key: 1,
        "workflow-name": C.value,
        onClose: P[6] || (P[6] = (E) => k.value = !1),
        onInstall: K,
        onRefresh: P[7] || (P[7] = (E) => d("refresh")),
        onRestart: se
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Fu = /* @__PURE__ */ X(Ou, [["__scopeId", "data-v-591d06d5"]]), Vu = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: ae(["summary-bar", t.variant])
    }, [
      he(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ X(Vu, [["__scopeId", "data-v-ccb7816e"]]), Au = {
  key: 0,
  class: "model-details"
}, Wu = { class: "detail-section" }, Gu = { class: "detail-row" }, ju = { class: "detail-value mono" }, Hu = { class: "detail-row" }, qu = { class: "detail-value mono" }, Ku = { class: "detail-row" }, Yu = { class: "detail-value mono" }, Xu = { class: "detail-row" }, Qu = { class: "detail-value" }, Zu = { class: "detail-row" }, Ju = { class: "detail-value" }, em = { class: "detail-row" }, tm = { class: "detail-value" }, sm = { class: "detail-section" }, om = { class: "section-header" }, am = {
  key: 0,
  class: "locations-list"
}, nm = { class: "location-path mono" }, lm = {
  key: 0,
  class: "location-modified"
}, im = ["onClick"], rm = {
  key: 1,
  class: "empty-state"
}, dm = { class: "detail-section" }, cm = { class: "section-header" }, um = {
  key: 0,
  class: "sources-list"
}, mm = { class: "source-type" }, vm = ["href"], fm = ["disabled", "onClick"], gm = {
  key: 1,
  class: "empty-state"
}, pm = { class: "add-source-form" }, hm = ["disabled"], ym = {
  key: 2,
  class: "source-error"
}, wm = {
  key: 3,
  class: "source-success"
}, km = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, { getModelDetails: d, addModelSource: p, removeModelSource: v, openFileLocation: y } = De(), m = $(null), l = $(!0), u = $(null), b = $(""), h = $(!1), k = $(null), C = $(null), L = $(null), _ = $(null);
    let f = null;
    function D(R, x = "success", z = 2e3) {
      f && clearTimeout(f), _.value = { message: R, type: x }, f = setTimeout(() => {
        _.value = null;
      }, z);
    }
    function O(R) {
      if (!R) return "Unknown";
      const x = 1024 * 1024 * 1024, z = 1024 * 1024;
      return R >= x ? `${(R / x).toFixed(1)} GB` : R >= z ? `${(R / z).toFixed(0)} MB` : `${(R / 1024).toFixed(0)} KB`;
    }
    function I(R) {
      navigator.clipboard.writeText(R), D("Copied to clipboard!");
    }
    async function B(R) {
      try {
        await y(R), D("Opening file location...");
      } catch {
        D("Failed to open location", "error");
      }
    }
    async function A() {
      if (!(!b.value.trim() || !m.value)) {
        h.value = !0, C.value = null, L.value = null;
        try {
          await p(m.value.hash, b.value.trim()), L.value = "Source added successfully!", b.value = "", await T();
        } catch (R) {
          C.value = R instanceof Error ? R.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function F(R) {
      if (m.value) {
        k.value = R, C.value = null, L.value = null;
        try {
          await v(m.value.hash, R), D("Source removed"), await T();
        } catch (x) {
          C.value = x instanceof Error ? x.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function T() {
      l.value = !0, u.value = null;
      try {
        m.value = await d(a.identifier);
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Le(T), (R, x) => {
      var z;
      return s(), o(W, null, [
        g(ot, {
          title: `Model Details: ${((z = m.value) == null ? void 0 : z.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: u.value,
          onClose: x[5] || (x[5] = (ee) => R.$emit("close"))
        }, {
          body: i(() => {
            var ee, K, se, ge;
            return [
              m.value ? (s(), o("div", Au, [
                e("section", Wu, [
                  e("div", Gu, [
                    x[6] || (x[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ju, n(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[0] || (x[0] = (re) => I(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Hu, [
                    x[7] || (x[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", qu, n(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[1] || (x[1] = (re) => I(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Ku, [
                    x[8] || (x[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Yu, n(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[2] || (x[2] = (re) => I(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Xu, [
                    x[9] || (x[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Qu, n(O(m.value.size)), 1)
                  ]),
                  e("div", Zu, [
                    x[10] || (x[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Ju, n(m.value.category), 1)
                  ]),
                  e("div", em, [
                    x[11] || (x[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", tm, n(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", sm, [
                  e("h4", om, "Locations (" + n(((ee = m.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (K = m.value.locations) != null && K.length ? (s(), o("div", am, [
                    (s(!0), o(W, null, Z(m.value.locations, (re, te) => (s(), o("div", {
                      key: te,
                      class: "location-item"
                    }, [
                      e("span", nm, n(re.path), 1),
                      re.modified ? (s(), o("span", lm, "Modified: " + n(re.modified), 1)) : c("", !0),
                      re.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => B(re.path)
                      }, " Open File Location ", 8, im)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", rm, "No locations found"))
                ]),
                e("section", dm, [
                  e("h4", cm, "Download Sources (" + n(((se = m.value.sources) == null ? void 0 : se.length) || 0) + ")", 1),
                  (ge = m.value.sources) != null && ge.length ? (s(), o("div", um, [
                    (s(!0), o(W, null, Z(m.value.sources, (re, te) => (s(), o("div", {
                      key: te,
                      class: "source-item"
                    }, [
                      e("span", mm, n(re.type) + ":", 1),
                      e("a", {
                        href: re.url,
                        target: "_blank",
                        class: "source-url"
                      }, n(re.url), 9, vm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === re.url,
                        onClick: (P) => F(re.url)
                      }, n(k.value === re.url ? "..." : "×"), 9, fm)
                    ]))), 128))
                  ])) : (s(), o("div", gm, " No download sources configured ")),
                  e("div", pm, [
                    Be(e("input", {
                      "onUpdate:modelValue": x[3] || (x[3] = (re) => b.value = re),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Nt, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || h.value,
                      onClick: A
                    }, n(h.value ? "Adding..." : "Add Source"), 9, hm)
                  ]),
                  C.value ? (s(), o("p", ym, n(C.value), 1)) : c("", !0),
                  L.value ? (s(), o("p", wm, n(L.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: x[4] || (x[4] = (ee) => R.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), S(Te, { to: "body" }, [
          _.value ? (s(), o("div", {
            key: 0,
            class: ae(["toast", _.value.type])
          }, n(_.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), bs = /* @__PURE__ */ X(km, [["__scopeId", "data-v-f15cbb56"]]), bm = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironmentModels: d, getStatus: p } = De(), v = $([]), y = $([]), m = $("production"), l = $(!1), u = $(null), b = $(""), h = $(!1), k = $(null);
    function C() {
      h.value = !1, a("navigate", "model-index");
    }
    const L = U(
      () => v.value.reduce((T, R) => T + (R.size || 0), 0)
    ), _ = U(() => {
      if (!b.value.trim()) return v.value;
      const T = b.value.toLowerCase();
      return v.value.filter((R) => R.filename.toLowerCase().includes(T));
    }), f = U(() => {
      if (!b.value.trim()) return y.value;
      const T = b.value.toLowerCase();
      return y.value.filter((R) => R.filename.toLowerCase().includes(T));
    }), D = U(() => {
      const T = {};
      for (const x of _.value) {
        const z = x.type || "other";
        T[z] || (T[z] = []), T[z].push(x);
      }
      const R = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([x], [z]) => {
        const ee = R.indexOf(x), K = R.indexOf(z);
        return ee >= 0 && K >= 0 ? ee - K : ee >= 0 ? -1 : K >= 0 ? 1 : x.localeCompare(z);
      }).map(([x, z]) => ({ type: x, models: z }));
    });
    function O(T) {
      if (!T) return "Unknown";
      const R = T / (1024 * 1024);
      return R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB`;
    }
    function I(T) {
      k.value = T.hash || T.filename;
    }
    function B(T) {
      a("navigate", "model-index");
    }
    function A(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function F() {
      l.value = !0, u.value = null;
      try {
        const T = await d();
        v.value = T, y.value = [];
        const R = await p();
        m.value = R.environment || "production";
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Le(F), (T, R) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (x) => h.value = !0)
          })
        ]),
        search: i(() => [
          g($t, {
            modelValue: b.value,
            "onUpdate:modelValue": R[1] || (R[1] = (x) => b.value = x),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(nt, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), S(lt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), S(Ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " models • " + n(O(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(W, null, Z(D.value, (x) => (s(), S(ze, {
              key: x.type,
              title: x.type.toUpperCase(),
              count: x.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(x.models, (z) => (s(), S(Ne, {
                  key: z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...R[4] || (R[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(z.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(O(z.size)), 1)
                  ]),
                  details: i(() => [
                    g(Se, {
                      label: "Used by:",
                      value: (z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(Se, {
                      label: "Path:",
                      value: z.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => I(z)
                    }, {
                      default: i(() => [...R[5] || (R[5] = [
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
            f.value.length ? (s(), S(ze, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(f.value, (x) => (s(), S(Ne, {
                  key: x.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...R[6] || (R[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(x.filename), 1)
                  ]),
                  subtitle: i(() => [...R[7] || (R[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var z;
                    return [
                      g(Se, {
                        label: "Required by:",
                        value: ((z = x.workflow_names) == null ? void 0 : z.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => A(x.filename)
                    }, {
                      default: i(() => [...R[8] || (R[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => B(x.filename)
                    }, {
                      default: i(() => [...R[9] || (R[9] = [
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
            !_.value.length && !f.value.length ? (s(), S(qe, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(at, {
        show: h.value,
        title: "About Environment Models",
        onClose: R[2] || (R[2] = (x) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            R[10] || (R[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + n(m.value) + '"', 1),
            R[11] || (R[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(J, {
            variant: "primary",
            onClick: C
          }, {
            default: i(() => [...R[12] || (R[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(bs, {
        key: 0,
        identifier: k.value,
        onClose: R[3] || (R[3] = (x) => k.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), _m = /* @__PURE__ */ X(bm, [["__scopeId", "data-v-cb4f12b3"]]), $m = {
  key: 0,
  class: "indexing-progress"
}, Cm = { class: "progress-info" }, xm = { class: "progress-label" }, Sm = { class: "progress-count" }, Im = { class: "progress-bar" }, Em = { class: "modal-content" }, Mm = { class: "modal-header" }, zm = { class: "modal-body" }, Lm = { class: "input-group" }, Rm = { class: "current-path" }, Dm = { class: "input-group" }, Nm = { class: "modal-footer" }, Tm = { class: "modal-content" }, Um = { class: "modal-header" }, Pm = { class: "modal-body" }, Bm = { class: "input-group" }, Om = { class: "input-group" }, Fm = { class: "modal-footer" }, Vm = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const {
      getWorkspaceModels: a,
      scanWorkspaceModels: d,
      getModelsDirectory: p,
      setModelsDirectory: v
    } = De(), { addToQueue: y } = Bt(), m = r, l = $([]), u = $(!1), b = $(!1), h = $(null), k = $(""), C = $(!1), L = $(null), _ = $(!1), f = $(null), D = $(""), O = $(!1), I = $(!1), B = $(""), A = $(""), F = $(null), T = U(
      () => l.value.reduce((P, E) => P + (E.size || 0), 0)
    ), R = U(() => {
      if (!k.value.trim()) return l.value;
      const P = k.value.toLowerCase();
      return l.value.filter((E) => {
        const oe = E, q = E.sha256 || oe.sha256_hash || "";
        return E.filename.toLowerCase().includes(P) || q.toLowerCase().includes(P);
      });
    }), x = U(() => {
      const P = {};
      for (const oe of R.value) {
        const q = oe.type || "other";
        P[q] || (P[q] = []), P[q].push(oe);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([oe], [q]) => {
        const ve = E.indexOf(oe), G = E.indexOf(q);
        return ve >= 0 && G >= 0 ? ve - G : ve >= 0 ? -1 : G >= 0 ? 1 : oe.localeCompare(q);
      }).map(([oe, q]) => ({ type: oe, models: q }));
    });
    function z(P) {
      if (!P) return "Unknown";
      const E = 1024 * 1024 * 1024, oe = 1024 * 1024;
      return P >= E ? `${(P / E).toFixed(1)} GB` : P >= oe ? `${(P / oe).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function ee(P) {
      L.value = P.hash || P.filename;
    }
    async function K() {
      b.value = !0, h.value = null;
      try {
        const P = await d();
        await re(), P.changes > 0 && console.log(`Scan complete: ${P.changes} changes detected`);
      } catch (P) {
        h.value = P instanceof Error ? P.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function se() {
      if (D.value.trim()) {
        O.value = !0, h.value = null;
        try {
          const P = await v(D.value.trim());
          f.value = P.path, _.value = !1, D.value = "", await re(), console.log(`Directory changed: ${P.models_indexed} models indexed`), m("refresh");
        } catch (P) {
          h.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          O.value = !1;
        }
      }
    }
    function ge() {
      if (!B.value.trim() || !A.value.trim()) return;
      const P = A.value.split("/").pop() || "model.safetensors";
      y([{
        workflow: "__manual__",
        filename: P,
        url: B.value.trim(),
        targetPath: A.value.trim()
      }]), B.value = "", A.value = "", I.value = !1;
    }
    async function re() {
      u.value = !0, h.value = null;
      try {
        l.value = await a();
      } catch (P) {
        h.value = P instanceof Error ? P.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function te() {
      try {
        const P = await p();
        f.value = P.path;
      } catch {
      }
    }
    return Le(() => {
      re(), te();
    }), (P, E) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: E[2] || (E[2] = (oe) => C.value = !0)
          }, {
            actions: i(() => [
              g(J, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: K
              }, {
                default: i(() => [
                  w(n(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(J, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (oe) => _.value = !0)
              }, {
                default: i(() => [...E[15] || (E[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(J, {
                variant: "primary",
                size: "sm",
                onClick: E[1] || (E[1] = (oe) => I.value = !0)
              }, {
                default: i(() => [...E[16] || (E[16] = [
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
          F.value ? (s(), o("div", $m, [
            e("div", Cm, [
              e("span", xm, n(F.value.message), 1),
              e("span", Sm, n(F.value.current) + "/" + n(F.value.total), 1)
            ]),
            e("div", Im, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          g($t, {
            modelValue: k.value,
            "onUpdate:modelValue": E[3] || (E[3] = (oe) => k.value = oe),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value || F.value ? (s(), S(nt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (s(), S(lt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            l.value.length ? (s(), S(Ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(l.value.length) + " models • " + n(z(T.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(W, null, Z(x.value, (oe) => (s(), S(ze, {
              key: oe.type,
              title: oe.type.toUpperCase(),
              count: oe.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(oe.models, (q) => (s(), S(Ne, {
                  key: q.sha256 || q.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...E[17] || (E[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(q.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(z(q.size)), 1)
                  ]),
                  details: i(() => [
                    g(Se, {
                      label: "Hash:",
                      value: q.hash ? q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ve) => ee(q)
                    }, {
                      default: i(() => [...E[18] || (E[18] = [
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
            R.value.length ? c("", !0) : (s(), S(qe, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(at, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: E[4] || (E[4] = (oe) => C.value = !1)
      }, {
        content: i(() => [...E[19] || (E[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (s(), S(bs, {
        key: 0,
        identifier: L.value,
        onClose: E[5] || (E[5] = (oe) => L.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), S(Te, { to: "body" }, [
        _.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[9] || (E[9] = Me((oe) => _.value = !1, ["self"]))
        }, [
          e("div", Em, [
            e("div", Mm, [
              E[20] || (E[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[6] || (E[6] = (oe) => _.value = !1)
              }, "✕")
            ]),
            e("div", zm, [
              e("div", Lm, [
                E[21] || (E[21] = e("label", null, "Current Directory", -1)),
                e("code", Rm, n(f.value || "Not set"), 1)
              ]),
              e("div", Dm, [
                E[22] || (E[22] = e("label", null, "New Directory Path", -1)),
                g(je, {
                  modelValue: D.value,
                  "onUpdate:modelValue": E[7] || (E[7] = (oe) => D.value = oe),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              E[23] || (E[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Nm, [
              g(ie, {
                variant: "secondary",
                onClick: E[8] || (E[8] = (oe) => _.value = !1)
              }, {
                default: i(() => [...E[24] || (E[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(ie, {
                variant: "primary",
                disabled: !D.value.trim() || O.value,
                loading: O.value,
                onClick: se
              }, {
                default: i(() => [
                  w(n(O.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), S(Te, { to: "body" }, [
        I.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[14] || (E[14] = Me((oe) => I.value = !1, ["self"]))
        }, [
          e("div", Tm, [
            e("div", Um, [
              E[25] || (E[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[10] || (E[10] = (oe) => I.value = !1)
              }, "✕")
            ]),
            e("div", Pm, [
              e("div", Bm, [
                E[26] || (E[26] = e("label", null, "Download URL", -1)),
                g(je, {
                  modelValue: B.value,
                  "onUpdate:modelValue": E[11] || (E[11] = (oe) => B.value = oe),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Om, [
                E[27] || (E[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(je, {
                  modelValue: A.value,
                  "onUpdate:modelValue": E[12] || (E[12] = (oe) => A.value = oe),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              E[28] || (E[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Fm, [
              g(ie, {
                variant: "secondary",
                onClick: E[13] || (E[13] = (oe) => I.value = !1)
              }, {
                default: i(() => [...E[29] || (E[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(ie, {
                variant: "primary",
                disabled: !B.value.trim() || !A.value.trim(),
                onClick: ge
              }, {
                default: i(() => [...E[30] || (E[30] = [
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
}), Am = /* @__PURE__ */ X(Vm, [["__scopeId", "data-v-73b78d84"]]), Wm = { class: "node-details" }, Gm = { class: "status-row" }, jm = {
  key: 0,
  class: "detail-row"
}, Hm = { class: "value" }, qm = { class: "detail-row" }, Km = { class: "value" }, Ym = {
  key: 1,
  class: "detail-row"
}, Xm = { class: "value mono" }, Qm = {
  key: 2,
  class: "detail-row"
}, Zm = ["href"], Jm = {
  key: 3,
  class: "detail-row"
}, ev = { class: "value mono small" }, tv = { class: "detail-row" }, sv = {
  key: 0,
  class: "value"
}, ov = {
  key: 1,
  class: "workflow-list"
}, av = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = U(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = U(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), y = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[a.node.source] || a.node.source);
    return (m, l) => (s(), S(ot, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (u) => d("close"))
    }, {
      body: i(() => [
        e("div", Wm, [
          e("div", Gm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ae(["status-badge", p.value])
            }, n(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", jm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Hm, n(t.node.source === "development" ? "" : "v") + n(t.node.version), 1)
          ])) : c("", !0),
          e("div", qm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Km, n(y.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Ym, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Xm, n(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", Qm, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              w(n(t.node.repository) + " ", 1),
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
            ], 8, Zm)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", Jm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", ev, n(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", tv, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", sv, " Not used in any workflows ")) : (s(), o("div", ov, [
              (s(!0), o(W, null, Z(t.node.used_in_workflows, (u) => (s(), o("span", {
                key: u,
                class: "workflow-tag"
              }, n(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (u) => d("close"))
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
}), nv = /* @__PURE__ */ X(av, [["__scopeId", "data-v-b342f626"]]), lv = { key: 0 }, iv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, rv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, dv = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: r }) {
    const a = r, { getNodes: d, trackNodeAsDev: p, installNode: v, uninstallNode: y } = De(), m = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = $(!1), u = $(null), b = $(""), h = $(!1), k = $(null), C = U(() => {
      if (!b.value.trim()) return m.value.nodes;
      const x = b.value.toLowerCase();
      return m.value.nodes.filter(
        (z) => {
          var ee, K;
          return z.name.toLowerCase().includes(x) || ((ee = z.description) == null ? void 0 : ee.toLowerCase().includes(x)) || ((K = z.repository) == null ? void 0 : K.toLowerCase().includes(x));
        }
      );
    }), L = U(
      () => C.value.filter((x) => x.installed && x.tracked)
    ), _ = U(
      () => C.value.filter((x) => !x.installed && x.tracked)
    ), f = U(
      () => C.value.filter((x) => x.installed && !x.tracked)
    );
    function D(x) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[x] || x;
    }
    function O(x) {
      return !x.used_in_workflows || x.used_in_workflows.length === 0 ? "Not used in any workflows" : x.used_in_workflows.length === 1 ? x.used_in_workflows[0] : `${x.used_in_workflows.length} workflows`;
    }
    function I(x) {
      k.value = x;
    }
    function B() {
      a("open-node-manager");
    }
    async function A(x) {
      if (confirm(`Track "${x}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const z = await p(x);
          z.status === "success" ? (alert(`Node "${x}" is now tracked as development!`), await R()) : alert(`Failed to track node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error tracking node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function F(x) {
      if (confirm(`Remove untracked node "${x}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const z = await y(x);
          z.status === "success" ? (alert(`Node "${x}" removed!`), await R()) : alert(`Failed to remove node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error removing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function T(x) {
      if (confirm(`Install node "${x}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const z = await v(x);
          z.status === "success" ? (alert(`Node "${x}" installed successfully!`), await R()) : alert(`Failed to install node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error installing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function R() {
      l.value = !0, u.value = null;
      try {
        m.value = await d();
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Le(R), (x, z) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (ee) => h.value = !0)
          }, {
            actions: i(() => [
              g(J, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: i(() => [...z[5] || (z[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g($t, {
            modelValue: b.value,
            "onUpdate:modelValue": z[1] || (z[1] = (ee) => b.value = ee),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(nt, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (s(), S(lt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            m.value.total_count ? (s(), S(Ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(n(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(W, { key: 0 }, [
                  w(" • " + n(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (s(), o(W, { key: 1 }, [
                  w(" • " + n(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            f.value.length ? (s(), S(ze, {
              key: 1,
              title: "UNTRACKED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(f.value, (ee) => (s(), S(Ne, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: i(() => [...z[6] || (z[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(Se, {
                      label: "Used by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(ee)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => A(ee.name)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(J, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (K) => F(ee.name)
                    }, {
                      default: i(() => [...z[10] || (z[10] = [
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
            L.value.length ? (s(), S(ze, {
              key: 2,
              title: "INSTALLED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(L.value, (ee) => (s(), S(Ne, {
                  key: ee.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(n(ee.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [
                    ee.version ? (s(), o("span", lv, n(ee.source === "development" ? "" : "v") + n(ee.version), 1)) : (s(), o("span", iv, "version unknown")),
                    e("span", rv, " • " + n(D(ee.source)), 1)
                  ]),
                  details: i(() => [
                    g(Se, {
                      label: "Used by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(ee)
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: B
                    }, {
                      default: i(() => [...z[12] || (z[12] = [
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
            _.value.length ? (s(), S(ze, {
              key: 3,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(_.value, (ee) => (s(), S(Ne, {
                  key: ee.name,
                  status: "missing"
                }, {
                  icon: i(() => [...z[13] || (z[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [...z[14] || (z[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(Se, {
                      label: "Required by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(ee)
                    }, {
                      default: i(() => [...z[15] || (z[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => T(ee.name)
                    }, {
                      default: i(() => [...z[16] || (z[16] = [
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
            !L.value.length && !_.value.length && !f.value.length ? (s(), S(qe, {
              key: 4,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(at, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: z[3] || (z[3] = (ee) => h.value = !1)
      }, {
        content: i(() => [...z[17] || (z[17] = [
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
          g(J, {
            variant: "primary",
            onClick: z[2] || (z[2] = (ee) => h.value = !1)
          }, {
            default: i(() => [...z[18] || (z[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(nv, {
        key: 0,
        node: k.value,
        onClose: z[4] || (z[4] = (ee) => k.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), cv = /* @__PURE__ */ X(dv, [["__scopeId", "data-v-4ac1465a"]]), uv = { class: "remote-url-display" }, mv = ["title"], vv = ["title"], fv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, pv = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, a = $(!1), d = U(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const v = r.url.slice(0, Math.floor(r.maxLength * 0.6)), y = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${v}...${y}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(r.url), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, y) => (s(), o("div", uv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, n(d.value), 9, mv),
      e("button", {
        class: ae(["copy-btn", { copied: a.value }]),
        onClick: p,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (s(), o("svg", gv, [...y[1] || (y[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", fv, [...y[0] || (y[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, vv)
    ]));
  }
}), ds = /* @__PURE__ */ X(pv, [["__scopeId", "data-v-7768a58d"]]), hv = { class: "remote-title" }, yv = {
  key: 0,
  class: "default-badge"
}, wv = {
  key: 1,
  class: "sync-badge"
}, kv = {
  key: 0,
  class: "ahead"
}, bv = {
  key: 1,
  class: "behind"
}, _v = {
  key: 0,
  class: "tracking-info"
}, $v = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const a = t, d = U(() => a.fetchingRemote === a.remote.name), p = U(() => a.remote.is_default), v = U(() => !!a.trackingBranch);
    function y(m) {
      const l = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), h = Math.floor(b / 6e4);
      if (h < 1) return "Just now";
      if (h < 60) return `${h}m ago`;
      const k = Math.floor(h / 60);
      if (k < 24) return `${k}h ago`;
      const C = Math.floor(k / 24);
      return C < 7 ? `${C}d ago` : l.toLocaleDateString();
    }
    return (m, l) => (s(), S(Ne, {
      status: p.value ? "synced" : void 0
    }, {
      icon: i(() => [
        w(n(p.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", hv, [
          e("span", null, n(t.remote.name), 1),
          p.value ? (s(), o("span", yv, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", wv, [
            t.syncStatus.ahead > 0 ? (s(), o("span", kv, "↑" + n(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", bv, "↓" + n(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (s(), o("span", _v, " Tracking: " + n(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var u;
        return [
          g(Se, { label: "Fetch:" }, {
            default: i(() => [
              g(ds, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), S(Se, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(ds, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (s(), S(Se, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, n(y(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        g(J, {
          variant: "primary",
          size: "xs",
          loading: d.value,
          onClick: l[0] || (l[0] = (u) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...l[3] || (l[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(J, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...l[4] || (l[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? c("", !0) : (s(), S(J, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: l[2] || (l[2] = (u) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...l[5] || (l[5] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Cv = /* @__PURE__ */ X($v, [["__scopeId", "data-v-17362e45"]]), xv = ["for"], Sv = {
  key: 0,
  class: "base-form-field-required"
}, Iv = { class: "base-form-field-input" }, Ev = {
  key: 1,
  class: "base-form-field-error"
}, Mv = {
  key: 2,
  class: "base-form-field-hint"
}, zv = /* @__PURE__ */ Y({
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
    const r = t, a = U(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (d, p) => (s(), o("div", {
      class: ae(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: a.value,
        class: "base-form-field-label"
      }, [
        w(n(t.label) + " ", 1),
        t.required ? (s(), o("span", Sv, "*")) : c("", !0)
      ], 8, xv)) : c("", !0),
      e("div", Iv, [
        he(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Ev, n(t.error), 1)) : t.hint ? (s(), o("span", Mv, n(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ X(zv, [["__scopeId", "data-v-9a1cf296"]]), Lv = { class: "remote-form" }, Rv = { class: "form-header" }, Dv = { class: "form-body" }, Nv = {
  key: 0,
  class: "form-error"
}, Tv = { class: "form-actions" }, Uv = /* @__PURE__ */ Y({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = $({
      name: a.remoteName,
      fetchUrl: a.fetchUrl,
      pushUrl: a.pushUrl
    }), v = $(!1), y = $(null);
    jt(() => [a.remoteName, a.fetchUrl, a.pushUrl], () => {
      p.value = {
        name: a.remoteName,
        fetchUrl: a.fetchUrl,
        pushUrl: a.pushUrl
      };
    });
    const m = U(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || v.value)) {
        y.value = null, v.value = !0;
        try {
          d("submit", p.value);
        } catch (u) {
          y.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (u, b) => (s(), o("div", Lv, [
      e("div", Rv, [
        g(Ae, null, {
          default: i(() => [
            w(n(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Dv, [
        g(Xt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(je, {
              modelValue: p.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (h) => p.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Xt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(je, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (h) => p.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Xt, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(je, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (h) => p.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        y.value ? (s(), o("div", Nv, n(y.value), 1)) : c("", !0)
      ]),
      e("div", Tv, [
        g(J, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: l
        }, {
          default: i(() => [
            w(n(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        g(J, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (h) => u.$emit("cancel"))
        }, {
          default: i(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Pv = /* @__PURE__ */ X(Uv, [["__scopeId", "data-v-56021b18"]]), Bv = { key: 0 }, Ov = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: a,
      removeRemote: d,
      updateRemoteUrl: p,
      fetchRemote: v,
      getRemoteSyncStatus: y
    } = De(), m = $([]), l = $(null), u = $({}), b = $(!1), h = $(null), k = $(""), C = $(!1), L = $(null), _ = $(!1), f = $("add"), D = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), O = U(() => {
      if (!k.value.trim()) return m.value;
      const K = k.value.toLowerCase();
      return m.value.filter(
        (se) => se.name.toLowerCase().includes(K) || se.fetch_url.toLowerCase().includes(K) || se.push_url.toLowerCase().includes(K)
      );
    });
    function I(K) {
      var se;
      return ((se = l.value) == null ? void 0 : se.remote) === K;
    }
    async function B() {
      b.value = !0, h.value = null;
      try {
        const K = await r();
        m.value = K.remotes, l.value = K.current_branch_tracking || null, await Promise.all(
          K.remotes.map(async (se) => {
            const ge = await y(se.name);
            ge && (u.value[se.name] = ge);
          })
        );
      } catch (K) {
        h.value = K instanceof Error ? K.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function A() {
      f.value = "add", D.value = { name: "", fetchUrl: "", pushUrl: "" }, _.value = !0;
    }
    function F(K) {
      const se = m.value.find((ge) => ge.name === K);
      se && (f.value = "edit", D.value = {
        name: se.name,
        fetchUrl: se.fetch_url,
        pushUrl: se.push_url
      }, _.value = !0);
    }
    async function T(K) {
      try {
        f.value === "add" ? await a(K.name, K.fetchUrl) : await p(K.name, K.fetchUrl, K.pushUrl || void 0), _.value = !1, await B();
      } catch (se) {
        h.value = se instanceof Error ? se.message : "Operation failed";
      }
    }
    function R() {
      _.value = !1, D.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function x(K) {
      L.value = K;
      try {
        await v(K);
        const se = await y(K);
        se && (u.value[K] = se);
      } catch (se) {
        h.value = se instanceof Error ? se.message : "Fetch failed";
      } finally {
        L.value = null;
      }
    }
    async function z(K) {
      if (confirm(`Remove remote "${K}"?`))
        try {
          await d(K), await B();
        } catch (se) {
          h.value = se instanceof Error ? se.message : "Failed to remove remote";
        }
    }
    function ee() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return Le(B), (K, se) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: se[0] || (se[0] = (ge) => C.value = !0)
          }, {
            actions: i(() => [
              _.value ? c("", !0) : (s(), S(J, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: i(() => [...se[3] || (se[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          _.value ? c("", !0) : (s(), S($t, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": se[1] || (se[1] = (ge) => k.value = ge),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (s(), S(nt, {
            key: 0,
            message: "Loading remotes..."
          })) : h.value ? (s(), S(lt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value ? (s(), S(Pv, {
              key: 0,
              mode: f.value,
              "remote-name": D.value.name,
              "fetch-url": D.value.fetchUrl,
              "push-url": D.value.pushUrl,
              onSubmit: T,
              onCancel: R
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !_.value ? (s(), S(Ct, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(m.value.length) + " remote" + n(m.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (s(), o("span", Bv, " • Tracking: " + n(l.value.remote) + "/" + n(l.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            O.value.length && !_.value ? (s(), S(ze, {
              key: 2,
              title: "REMOTES",
              count: O.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(O.value, (ge) => {
                  var re;
                  return s(), S(Cv, {
                    key: ge.name,
                    remote: ge,
                    "sync-status": u.value[ge.name],
                    "tracking-branch": I(ge.name) ? (re = l.value) == null ? void 0 : re.branch : void 0,
                    "fetching-remote": L.value,
                    onFetch: x,
                    onEdit: F,
                    onRemove: z
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !O.value.length && !_.value ? (s(), S(qe, {
              key: 3,
              icon: "🌐",
              message: k.value ? `No remotes match '${k.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(J, {
                  variant: "primary",
                  onClick: A
                }, {
                  default: i(() => [...se[4] || (se[4] = [
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
      g(at, {
        show: C.value,
        title: "About Git Remotes",
        onClose: se[2] || (se[2] = (ge) => C.value = !1)
      }, {
        content: i(() => [...se[5] || (se[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          g(J, {
            variant: "link",
            onClick: ee
          }, {
            default: i(() => [...se[6] || (se[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Fv = /* @__PURE__ */ X(Ov, [["__scopeId", "data-v-a75719bb"]]), Vv = { class: "setting-info" }, Av = { class: "setting-label" }, Wv = {
  key: 0,
  class: "required-marker"
}, Gv = {
  key: 0,
  class: "setting-description"
}, jv = { class: "setting-control" }, Hv = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: ae(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Vv, [
        e("div", Av, [
          w(n(t.label) + " ", 1),
          t.required ? (s(), o("span", Wv, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", Gv, n(t.description), 1)) : c("", !0)
      ]),
      e("div", jv, [
        he(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), st = /* @__PURE__ */ X(Hv, [["__scopeId", "data-v-cb5d236c"]]), qv = { class: "toggle" }, Kv = ["checked", "disabled"], Yv = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", qv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, Kv),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ht = /* @__PURE__ */ X(Yv, [["__scopeId", "data-v-71c0f550"]]), Xv = { class: "settings-section" }, Qv = { class: "path-setting" }, Zv = { class: "path-value" }, Jv = { class: "path-setting" }, ef = { class: "path-value" }, tf = { class: "settings-section" }, sf = { class: "settings-section" }, of = { class: "settings-section" }, af = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: a } = De(), d = $(!1), p = $(null), v = $(null), y = $(null), m = $(null), l = $(""), u = $(""), b = $(!0), h = $(!0), k = $(!1), C = U(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function L() {
      d.value = !0, p.value = null;
      try {
        y.value = await r(), m.value = { ...y.value }, l.value = y.value.civitai_api_key || "", u.value = y.value.huggingface_token || "", b.value = y.value.auto_sync_models, h.value = y.value.confirm_destructive;
        const O = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = O === "true";
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function _() {
      var O;
      v.value = null;
      try {
        const I = {};
        l.value !== (((O = m.value) == null ? void 0 : O.civitai_api_key) || "") && (I.civitai_api_key = l.value || null), await a(I), await L(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (I) {
        v.value = {
          type: "error",
          message: I instanceof Error ? I.message : "Failed to save settings"
        };
      }
    }
    function f() {
      m.value && (l.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, h.value = m.value.confirm_destructive, v.value = null);
    }
    function D(O) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(O)), console.log("[ComfyGit] Auto-refresh setting saved:", O);
    }
    return Le(L), (O, I) => (s(), S(Oe, null, {
      header: i(() => [
        g(Fe, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(J, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: _
            }, {
              default: i(() => [...I[5] || (I[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (s(), S(J, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: f
            }, {
              default: i(() => [...I[6] || (I[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), S(nt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (s(), S(lt, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
          g(ze, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var B, A;
              return [
                e("div", Xv, [
                  e("div", Qv, [
                    I[7] || (I[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    I[8] || (I[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Zv, n(((B = y.value) == null ? void 0 : B.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Jv, [
                    I[9] || (I[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    I[10] || (I[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", ef, n(((A = y.value) == null ? void 0 : A.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(ze, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", tf, [
                g(st, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Wt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": I[0] || (I[0] = (B) => l.value = B),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(st, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(Wt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": I[1] || (I[1] = (B) => u.value = B),
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
          g(ze, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", sf, [
                g(st, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: k.value,
                      "onUpdate:modelValue": [
                        I[2] || (I[2] = (B) => k.value = B),
                        D
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(ze, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", of, [
                g(st, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: b.value,
                      "onUpdate:modelValue": I[3] || (I[3] = (B) => b.value = B),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(st, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: h.value,
                      "onUpdate:modelValue": I[4] || (I[4] = (B) => h.value = B),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), S(Ct, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: He({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, n(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), nf = /* @__PURE__ */ X(af, [["__scopeId", "data-v-7861bd35"]]), lf = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = De(), a = $([]), d = $(!1), p = $(null), v = $(!1), y = $(null), m = U(() => a.value.length === 0 ? [] : a.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function l() {
      d.value = !0, p.value = null;
      try {
        a.value = await r(void 0, 500);
      } catch (u) {
        p.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        d.value = !1, setTimeout(() => {
          var u;
          (u = y.value) != null && u.parentElement && (y.value.parentElement.scrollTop = y.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Le(l), (u, b) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (h) => v.value = !0)
          }, {
            actions: i(() => [
              g(J, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: d.value
              }, {
                default: i(() => [
                  w(n(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          d.value ? (s(), S(nt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (s(), S(lt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            a.value.length === 0 ? (s(), S(qe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(W, null, Z(m.value, (h, k) => (s(), o("div", {
                key: k,
                class: ae(`log-line log-level-${h.level.toLowerCase()}`)
              }, n(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(at, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (h) => v.value = !1)
      }, {
        content: i(() => [...b[3] || (b[3] = [
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
          g(J, {
            variant: "primary",
            onClick: b[1] || (b[1] = (h) => v.value = !1)
          }, {
            default: i(() => [...b[4] || (b[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), rf = /* @__PURE__ */ X(lf, [["__scopeId", "data-v-39f6a756"]]), df = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: a } = De(), d = $([]), p = $(!1), v = $(null), y = $(!1), m = $("production"), l = $(null), u = U(() => d.value.length === 0 ? [] : d.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function b() {
      p.value = !0, v.value = null;
      try {
        d.value = await r(void 0, 500);
        try {
          const h = await a();
          m.value = h.environment || "production";
        } catch {
        }
      } catch (h) {
        v.value = h instanceof Error ? h.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var h;
          (h = l.value) != null && h.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Le(b), (h, k) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (C) => y.value = !0)
          }, {
            actions: i(() => [
              g(J, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: p.value
              }, {
                default: i(() => [
                  w(n(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          p.value ? (s(), S(nt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), S(lt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length === 0 ? (s(), S(qe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(W, null, Z(u.value, (C, L) => (s(), o("div", {
                key: L,
                class: ae(`log-line log-level-${C.level.toLowerCase()}`)
              }, n(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(at, {
        show: y.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = (C) => y.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            k[3] || (k[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, n(m.value), 1),
            k[4] || (k[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          k[5] || (k[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          k[6] || (k[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          g(J, {
            variant: "primary",
            onClick: k[1] || (k[1] = (C) => y.value = !1)
          }, {
            default: i(() => [...k[7] || (k[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), cf = /* @__PURE__ */ X(df, [["__scopeId", "data-v-4f1e6f72"]]), uf = { class: "env-title" }, mf = {
  key: 0,
  class: "current-badge"
}, vf = {
  key: 0,
  class: "branch-info"
}, ff = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), S(Ne, {
      status: t.isCurrent ? "synced" : void 0
    }, Ht({
      icon: i(() => [
        w(n(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", uf, [
          e("span", null, n(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", mf, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", vf, [
          a[0] || (a[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + n(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        he(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          g(Se, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          g(Se, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          g(Se, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), S(Se, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), gf = /* @__PURE__ */ X(ff, [["__scopeId", "data-v-9231917a"]]), pf = { class: "env-details" }, hf = { class: "status-row" }, yf = {
  key: 0,
  class: "detail-row"
}, wf = { class: "value mono" }, kf = {
  key: 1,
  class: "detail-row"
}, bf = { class: "value mono small" }, _f = { class: "detail-row" }, $f = { class: "value" }, Cf = { class: "detail-row" }, xf = { class: "value" }, Sf = { class: "detail-row" }, If = { class: "value" }, Ef = {
  key: 2,
  class: "section-divider"
}, Mf = {
  key: 3,
  class: "detail-row"
}, zf = { class: "value" }, Lf = {
  key: 4,
  class: "detail-row"
}, Rf = { class: "value" }, Df = { class: "footer-actions" }, Nf = /* @__PURE__ */ Y({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: r }) {
    const a = r;
    function d(p) {
      if (!p) return "Unknown";
      try {
        const v = new Date(p), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(m / 6e4), u = Math.floor(m / 36e5), b = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : b < 30 ? `${b} ${b === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, v) => (s(), S(ot, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (y) => a("close"))
    }, {
      body: i(() => [
        e("div", pf, [
          e("div", hf, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ae(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, n(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", yf, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", wf, n(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", kf, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", bf, n(t.environment.path), 1)
          ])) : c("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", _f, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", $f, n(t.environment.workflow_count), 1)
          ]),
          e("div", Cf, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", xf, n(t.environment.node_count), 1)
          ]),
          e("div", Sf, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", If, n(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Ef)) : c("", !0),
          t.environment.created_at ? (s(), o("div", Mf, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", zf, n(d(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", Lf, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Rf, n(d(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Df, [
          t.canDelete ? (s(), S(ie, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => a("delete", t.environment.name))
          }, {
            default: i(() => [...v[12] || (v[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          g(ie, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (y) => a("close"))
          }, {
            default: i(() => [...v[13] || (v[13] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tf = /* @__PURE__ */ X(Nf, [["__scopeId", "data-v-59855453"]]), _s = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], $s = "3.12", Cs = [
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
], xs = "auto", Uf = { class: "create-env-form" }, Pf = { class: "form-field" }, Bf = { class: "form-field" }, Of = ["value"], Ff = { class: "form-field" }, Vf = ["disabled"], Af = ["value"], Wf = { class: "form-field" }, Gf = ["value"], jf = { class: "form-field form-field--checkbox" }, Hf = { class: "form-checkbox" }, qf = /* @__PURE__ */ Y({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: r }) {
    const a = r, { getComfyUIReleases: d } = De(), p = $(""), v = $($s), y = $("latest"), m = $(xs), l = $(!1), u = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = $(!1), h = $(null);
    function k() {
      const L = p.value.trim();
      if (!L) return;
      const _ = {
        name: L,
        python_version: v.value,
        comfyui_version: y.value,
        torch_backend: m.value,
        switch_after: l.value
      };
      a("create", _);
    }
    async function C() {
      b.value = !0;
      try {
        u.value = await d();
      } catch (L) {
        console.error("Failed to load ComfyUI releases:", L);
      } finally {
        b.value = !1;
      }
    }
    return Le(async () => {
      var L;
      await Ws(), (L = h.value) == null || L.focus(), C();
    }), (L, _) => (s(), S(ot, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: _[6] || (_[6] = (f) => a("close"))
    }, {
      body: i(() => [
        e("div", Uf, [
          e("div", Pf, [
            _[7] || (_[7] = e("label", { class: "form-label" }, "Name", -1)),
            Be(e("input", {
              ref_key: "nameInput",
              ref: h,
              "onUpdate:modelValue": _[0] || (_[0] = (f) => p.value = f),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ct(k, ["enter"])
            }, null, 544), [
              [Nt, p.value]
            ])
          ]),
          e("div", Bf, [
            _[8] || (_[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": _[1] || (_[1] = (f) => v.value = f),
              class: "form-select"
            }, [
              (s(!0), o(W, null, Z(we(_s), (f) => (s(), o("option", {
                key: f,
                value: f
              }, n(f), 9, Of))), 128))
            ], 512), [
              [bt, v.value]
            ])
          ]),
          e("div", Ff, [
            _[9] || (_[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": _[2] || (_[2] = (f) => y.value = f),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(W, null, Z(u.value, (f) => (s(), o("option", {
                key: f.tag_name,
                value: f.tag_name
              }, n(f.name), 9, Af))), 128))
            ], 8, Vf), [
              [bt, y.value]
            ])
          ]),
          e("div", Wf, [
            _[10] || (_[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Be(e("select", {
              "onUpdate:modelValue": _[3] || (_[3] = (f) => m.value = f),
              class: "form-select"
            }, [
              (s(!0), o(W, null, Z(we(Cs), (f) => (s(), o("option", {
                key: f,
                value: f
              }, n(f) + n(f === "auto" ? " (detect GPU)" : ""), 9, Gf))), 128))
            ], 512), [
              [bt, m.value]
            ])
          ]),
          e("div", jf, [
            e("label", Hf, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": _[4] || (_[4] = (f) => l.value = f)
              }, null, 512), [
                [Zt, l.value]
              ]),
              _[11] || (_[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        g(ie, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: k
        }, {
          default: i(() => [..._[12] || (_[12] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(ie, {
          variant: "secondary",
          onClick: _[5] || (_[5] = (f) => a("close"))
        }, {
          default: i(() => [..._[13] || (_[13] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Kf = /* @__PURE__ */ X(qf, [["__scopeId", "data-v-a2f13447"]]), Yf = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getEnvironments: p } = De(), v = $([]), y = $(!1), m = $(null), l = $(""), u = $(!1), b = $(!1), h = $(null), k = U(
      () => v.value.find((I) => I.is_current)
    ), C = U(() => {
      if (!l.value.trim()) return v.value;
      const I = l.value.toLowerCase();
      return v.value.filter(
        (B) => {
          var A;
          return B.name.toLowerCase().includes(I) || ((A = B.current_branch) == null ? void 0 : A.toLowerCase().includes(I));
        }
      );
    });
    function L(I) {
      d("create", I), b.value = !1;
    }
    function _() {
      b.value = !0;
    }
    function f(I) {
      h.value = I;
    }
    function D(I) {
      h.value = null, d("delete", I);
    }
    async function O() {
      y.value = !0, m.value = null;
      try {
        v.value = await p();
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return Le(O), r({
      loadEnvironments: O
    }), (I, B) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (A) => u.value = !0)
          }, {
            actions: i(() => [
              g(J, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: i(() => [...B[6] || (B[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              g(J, {
                variant: "secondary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...B[7] || (B[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g($t, {
            modelValue: l.value,
            "onUpdate:modelValue": B[1] || (B[1] = (A) => l.value = A),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          y.value ? (s(), S(nt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), S(lt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), S(Ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " " + n(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                k.value ? (s(), o(W, { key: 0 }, [
                  B[8] || (B[8] = w(" • Current: ", -1)),
                  e("strong", null, n(k.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            C.value.length ? (s(), S(ze, {
              key: 1,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(C.value, (A) => (s(), S(gf, {
                  key: A.name,
                  "environment-name": A.name,
                  "is-current": A.is_current,
                  "current-branch": A.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    A.is_current ? c("", !0) : (s(), S(J, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => I.$emit("switch", A.name)
                    }, {
                      default: i(() => [...B[9] || (B[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => f(A)
                    }, {
                      default: i(() => [...B[10] || (B[10] = [
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
            C.value.length ? c("", !0) : (s(), S(qe, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Ht({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(J, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: i(() => [...B[11] || (B[11] = [
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
      g(at, {
        show: u.value,
        title: "About Environments",
        onClose: B[3] || (B[3] = (A) => u.value = !1)
      }, {
        content: i(() => [...B[12] || (B[12] = [
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
          g(J, {
            variant: "secondary",
            onClick: B[2] || (B[2] = (A) => u.value = !1)
          }, {
            default: i(() => [...B[13] || (B[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (s(), S(Tf, {
        key: 0,
        environment: h.value,
        "can-delete": v.value.length > 1,
        onClose: B[4] || (B[4] = (A) => h.value = null),
        onDelete: D
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      b.value ? (s(), S(Kf, {
        key: 1,
        onClose: B[5] || (B[5] = (A) => b.value = !1),
        onCreate: L
      })) : c("", !0)
    ], 64));
  }
}), Xf = /* @__PURE__ */ X(Yf, [["__scopeId", "data-v-307d9926"]]), Qf = { class: "file-path" }, Zf = { class: "file-path-text" }, Jf = ["title"], eg = /* @__PURE__ */ Y({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = $(!1);
    async function d() {
      try {
        await navigator.clipboard.writeText(r.path), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, v) => (s(), o("div", Qf, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Zf, n(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: d
      }, n(a.value ? "✓" : "📋"), 9, Jf)) : c("", !0)
    ]));
  }
}), tg = /* @__PURE__ */ X(eg, [["__scopeId", "data-v-f0982173"]]), sg = { class: "output-path-input" }, og = { class: "export-actions" }, ag = {
  key: 1,
  class: "export-warning"
}, ng = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = De(), a = $(""), d = $(!1), p = $(null), v = $(!1);
    async function y() {
      d.value = !0, p.value = null;
      try {
        const l = await r(a.value || void 0);
        p.value = l;
      } catch (l) {
        p.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        d.value = !1;
      }
    }
    async function m() {
      var l;
      if ((l = p.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (l, u) => (s(), o(W, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(J, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (b) => v.value = !0),
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
          g(ze, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(Ne, { status: "synced" }, {
                icon: i(() => [...u[6] || (u[6] = [
                  w("📦", -1)
                ])]),
                title: i(() => [...u[7] || (u[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...u[8] || (u[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  g(Se, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(Se, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(Se, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(Se, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(ze, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(Ne, { status: "synced" }, {
                icon: i(() => [...u[9] || (u[9] = [
                  w("📁", -1)
                ])]),
                title: i(() => [...u[10] || (u[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: i(() => [...u[11] || (u[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", sg, [
                    g(Wt, {
                      modelValue: a.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (b) => a.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(ze, { title: "EXPORT" }, {
            default: i(() => [
              e("div", og, [
                g(J, {
                  variant: "primary",
                  size: "md",
                  loading: d.value,
                  disabled: d.value,
                  onClick: y
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
                    w(" " + n(d.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                a.value ? (s(), S(J, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: d.value,
                  onClick: u[2] || (u[2] = (b) => a.value = "")
                }, {
                  default: i(() => [...u[13] || (u[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          p.value ? (s(), S(ze, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              g(Ne, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Ht({
                icon: i(() => [
                  w(n(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(n(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(n(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    g(Se, { label: "Saved to:" }, {
                      default: i(() => [
                        g(tg, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (s(), S(Se, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (s(), o("div", ag, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...u[15] || (u[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(J, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => p.value = null)
                    }, {
                      default: i(() => [...u[16] || (u[16] = [
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
      g(at, {
        show: v.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (b) => v.value = !1)
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
            w(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), lg = /* @__PURE__ */ X(ng, [["__scopeId", "data-v-1777a9d5"]]), ig = { class: "file-input-wrapper" }, rg = ["accept", "multiple", "disabled"], dg = /* @__PURE__ */ Y({
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
    const d = a, p = $(null);
    function v() {
      var m;
      (m = p.value) == null || m.click();
    }
    function y(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (d("change", l.files), l.value = "");
    }
    return r({
      triggerInput: v
    }), (m, l) => (s(), o("div", ig, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: y
      }, null, 40, rg),
      g(J, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          he(m.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + n(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), cg = /* @__PURE__ */ X(dg, [["__scopeId", "data-v-cd192091"]]), ug = {
  key: 0,
  class: "drop-zone-empty"
}, mg = { class: "drop-zone-text" }, vg = { class: "drop-zone-primary" }, fg = { class: "drop-zone-secondary" }, gg = { class: "drop-zone-actions" }, pg = {
  key: 1,
  class: "drop-zone-file"
}, hg = { class: "file-info" }, yg = { class: "file-details" }, wg = { class: "file-name" }, kg = { class: "file-size" }, bg = /* @__PURE__ */ Y({
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
    const a = r, d = $(!1), p = $(null), v = $(0), y = U(() => p.value !== null), m = U(() => {
      var f;
      return ((f = p.value) == null ? void 0 : f.name) || "";
    }), l = U(() => {
      if (!p.value) return "";
      const f = p.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(f) {
      var D;
      v.value++, (D = f.dataTransfer) != null && D.types.includes("Files") && (d.value = !0);
    }
    function b(f) {
      f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function h() {
      v.value--, v.value === 0 && (d.value = !1);
    }
    function k(f) {
      var O;
      v.value = 0, d.value = !1;
      const D = (O = f.dataTransfer) == null ? void 0 : O.files;
      D && D.length > 0 && L(D[0]);
    }
    function C(f) {
      f.length > 0 && L(f[0]);
    }
    function L(f) {
      p.value = f, a("fileSelected", f);
    }
    function _() {
      p.value = null, a("clear");
    }
    return (f, D) => (s(), o("div", {
      class: ae(["file-drop-zone", { "drop-active": d.value, "has-file": y.value }]),
      onDragenter: Me(u, ["prevent"]),
      onDragover: Me(b, ["prevent"]),
      onDragleave: Me(h, ["prevent"]),
      onDrop: Me(k, ["prevent"])
    }, [
      y.value ? (s(), o("div", pg, [
        e("div", hg, [
          D[1] || (D[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", yg, [
            e("div", wg, n(m.value), 1),
            e("div", kg, n(l.value), 1)
          ])
        ]),
        g(J, {
          variant: "ghost",
          size: "xs",
          onClick: _,
          title: "Remove file"
        }, {
          default: i(() => [...D[2] || (D[2] = [
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
      ])) : (s(), o("div", ug, [
        D[0] || (D[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", mg, [
          e("p", vg, n(t.primaryText), 1),
          e("p", fg, n(t.secondaryText), 1)
        ]),
        e("div", gg, [
          g(cg, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
          }, {
            default: i(() => [
              w(n(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), _g = /* @__PURE__ */ X(bg, [["__scopeId", "data-v-e00abbca"]]), $g = { class: "import-preview" }, Cg = { class: "preview-header" }, xg = {
  key: 0,
  class: "source-env"
}, Sg = { class: "preview-content" }, Ig = { class: "preview-section" }, Eg = { class: "section-header" }, Mg = { class: "section-info" }, zg = { class: "section-count" }, Lg = {
  key: 0,
  class: "item-list"
}, Rg = { class: "item-name" }, Dg = {
  key: 0,
  class: "item-more"
}, Ng = { class: "preview-section" }, Tg = { class: "section-header" }, Ug = { class: "section-info" }, Pg = { class: "section-count" }, Bg = {
  key: 0,
  class: "item-list"
}, Og = { class: "item-details" }, Fg = { class: "item-name" }, Vg = { class: "item-meta" }, Ag = {
  key: 0,
  class: "item-more"
}, Wg = { class: "preview-section" }, Gg = { class: "section-header" }, jg = { class: "section-info" }, Hg = { class: "section-count" }, qg = {
  key: 0,
  class: "item-list"
}, Kg = { class: "item-name" }, Yg = {
  key: 0,
  class: "item-more"
}, Xg = {
  key: 0,
  class: "preview-section"
}, Qg = { class: "git-info" }, Zg = /* @__PURE__ */ Y({
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
    const r = t, a = U(() => r.workflows.length), d = U(() => r.models.length), p = U(() => r.nodes.length);
    function v(y) {
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (y, m) => (s(), o("div", $g, [
      e("div", Cg, [
        g(Ae, null, {
          default: i(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", xg, [
          m[1] || (m[1] = w(" From: ", -1)),
          g(es, null, {
            default: i(() => [
              w(n(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Sg, [
        e("div", Ig, [
          e("div", Eg, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Mg, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", zg, n(a.value) + " file" + n(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Lg, [
            (s(!0), o(W, null, Z(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Rg, n(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Dg, " +" + n(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Ng, [
          e("div", Tg, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Ug, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Pg, n(d.value) + " file" + n(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Bg, [
            (s(!0), o(W, null, Z(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Og, [
                e("span", Fg, n(l.filename), 1),
                e("span", Vg, n(v(l.size)) + " • " + n(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Ag, " +" + n(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Wg, [
          e("div", Gg, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", jg, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Hg, n(p.value) + " node" + n(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", qg, [
            (s(!0), o(W, null, Z(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Kg, n(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Yg, " +" + n(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Xg, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Qg, [
            t.gitBranch ? (s(), S(Se, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(es, null, {
                  default: i(() => [
                    w(n(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), S(Se, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g(gs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Jg = /* @__PURE__ */ X(Zg, [["__scopeId", "data-v-182fe113"]]), ep = { class: "import-options" }, tp = { class: "options-container" }, sp = { class: "option-section" }, op = { class: "conflict-options" }, ap = ["value", "checked", "onChange"], np = { class: "conflict-content" }, lp = { class: "conflict-label" }, ip = { class: "conflict-description" }, rp = { class: "option-section" }, dp = { class: "component-toggles" }, cp = /* @__PURE__ */ Y({
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
    const a = r, d = [
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
    return (p, v) => (s(), o("div", ep, [
      g(Ae, null, {
        default: i(() => [...v[4] || (v[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", tp, [
        e("div", sp, [
          g(Jt, null, {
            default: i(() => [...v[5] || (v[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", op, [
            (s(), o(W, null, Z(d, (y) => e("label", {
              key: y.value,
              class: ae(["conflict-option", { active: t.conflictMode === y.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: y.value,
                checked: t.conflictMode === y.value,
                onChange: (m) => a("update:conflictMode", y.value)
              }, null, 40, ap),
              e("div", np, [
                e("span", lp, n(y.label), 1),
                e("span", ip, n(y.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", rp, [
          g(Jt, null, {
            default: i(() => [...v[6] || (v[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", dp, [
            g(st, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (y) => a("update:includeWorkflows", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(st, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (y) => a("update:includeModels", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(st, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (y) => a("update:includeNodes", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(st, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (y) => a("update:includeGitHistory", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), up = /* @__PURE__ */ X(cp, [["__scopeId", "data-v-0ec212b0"]]), mp = {
  key: 0,
  class: "import-empty"
}, vp = { class: "import-help" }, fp = {
  key: 1,
  class: "import-configure"
}, gp = { class: "selected-file-bar" }, pp = { class: "file-bar-content" }, hp = { class: "file-bar-info" }, yp = { class: "file-bar-name" }, wp = { class: "file-bar-size" }, kp = { class: "import-actions" }, bp = {
  key: 2,
  class: "import-progress"
}, _p = { class: "progress-content" }, $p = { class: "progress-info" }, Cp = { class: "progress-title" }, xp = { class: "progress-detail" }, Sp = { class: "progress-bar" }, Ip = { class: "progress-status" }, Ep = {
  key: 3,
  class: "import-complete"
}, Mp = { class: "complete-message" }, zp = { class: "complete-title" }, Lp = { class: "complete-details" }, Rp = { class: "complete-actions" }, Dp = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const r = $(null), a = $(!1), d = $(!1), p = $(!1), v = $(""), y = $({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = $({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = $({
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
    }), u = U(() => y.value.includeWorkflows || y.value.includeModels || y.value.includeNodes || y.value.includeGitHistory);
    function b(_) {
      r.value = _;
    }
    function h() {
      r.value = null, d.value = !1, p.value = !1, v.value = "";
    }
    function k() {
      h(), a.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function C() {
      if (r.value) {
        a.value = !0, d.value = !1;
        try {
          const _ = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const f of _)
            m.value = f, await new Promise((D) => setTimeout(D, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((f) => setTimeout(f, 500)), p.value = !0, v.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (_) {
          p.value = !1, v.value = _ instanceof Error ? _.message : "Unknown error occurred during import";
        } finally {
          a.value = !1, d.value = !0;
        }
      }
    }
    function L(_) {
      return _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : _ < 1024 * 1024 * 1024 ? `${(_ / (1024 * 1024)).toFixed(1)} MB` : `${(_ / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (_, f) => (s(), S(Oe, null, {
      header: i(() => [
        g(Fe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !r.value && !a.value ? (s(), o("div", mp, [
          g(_g, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", vp, [
            g(Ae, null, {
              default: i(() => [...f[5] || (f[5] = [
                w("How to Import", -1)
              ])]),
              _: 1
            }),
            f[6] || (f[6] = e("div", { class: "help-content" }, [
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
        ])) : r.value && !a.value && !d.value ? (s(), o("div", fp, [
          e("div", gp, [
            e("div", pp, [
              f[7] || (f[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", hp, [
                e("div", yp, n(r.value.name), 1),
                e("div", wp, n(L(r.value.size)), 1)
              ])
            ]),
            g(J, {
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: i(() => [...f[8] || (f[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(Jg, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(up, {
            "conflict-mode": y.value.conflictMode,
            "onUpdate:conflictMode": f[0] || (f[0] = (D) => y.value.conflictMode = D),
            "include-workflows": y.value.includeWorkflows,
            "onUpdate:includeWorkflows": f[1] || (f[1] = (D) => y.value.includeWorkflows = D),
            "include-models": y.value.includeModels,
            "onUpdate:includeModels": f[2] || (f[2] = (D) => y.value.includeModels = D),
            "include-nodes": y.value.includeNodes,
            "onUpdate:includeNodes": f[3] || (f[3] = (D) => y.value.includeNodes = D),
            "include-git-history": y.value.includeGitHistory,
            "onUpdate:includeGitHistory": f[4] || (f[4] = (D) => y.value.includeGitHistory = D)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !y.value.includeModels && l.value.models.length > 0 ? (s(), S(dt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", kp, [
            g(J, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: C
            }, {
              default: i(() => [...f[9] || (f[9] = [
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
            g(J, {
              variant: "secondary",
              size: "md",
              onClick: h
            }, {
              default: i(() => [...f[10] || (f[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : a.value ? (s(), o("div", bp, [
          e("div", _p, [
            f[11] || (f[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", $p, [
              e("div", Cp, n(m.value.message), 1),
              e("div", xp, n(m.value.detail), 1)
            ])
          ]),
          e("div", Sp, [
            e("div", {
              class: "progress-bar-fill",
              style: He({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Ip, n(m.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", Ep, [
          e("div", {
            class: ae(["complete-icon", p.value ? "success" : "error"])
          }, n(p.value ? "✓" : "✕"), 3),
          e("div", Mp, [
            e("div", zp, n(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Lp, n(v.value), 1)
          ]),
          e("div", Rp, [
            g(J, {
              variant: "primary",
              size: "md",
              onClick: k
            }, {
              default: i(() => [...f[12] || (f[12] = [
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
}), Np = /* @__PURE__ */ X(Dp, [["__scopeId", "data-v-18e18eb5"]]), Tp = { class: "header-info" }, Up = { class: "commit-hash" }, Pp = {
  key: 0,
  class: "commit-refs"
}, Bp = { class: "commit-message" }, Op = { class: "commit-date" }, Fp = {
  key: 0,
  class: "loading"
}, Vp = {
  key: 1,
  class: "changes-section"
}, Ap = { class: "stats-row" }, Wp = { class: "stat" }, Gp = { class: "stat insertions" }, jp = { class: "stat deletions" }, Hp = {
  key: 0,
  class: "change-group"
}, qp = {
  key: 1,
  class: "change-group"
}, Kp = {
  key: 0,
  class: "version"
}, Yp = {
  key: 2,
  class: "change-group"
}, Xp = { class: "change-item" }, Qp = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: a } = De(), d = $(null), p = $(!0), v = U(() => {
      if (!d.value) return !1;
      const m = d.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), y = U(() => {
      if (!d.value) return !1;
      const m = d.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Le(async () => {
      try {
        d.value = await a(r.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (m, l) => (s(), S(ot, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (u) => m.$emit("close"))
    }, {
      header: i(() => {
        var u, b, h, k;
        return [
          e("div", Tp, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Up, n(((u = d.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (k = (h = d.value) == null ? void 0 : h.refs) != null && k.length ? (s(), o("span", Pp, [
              (s(!0), o(W, null, Z(d.value.refs, (C) => (s(), o("span", {
                key: C,
                class: "ref-badge"
              }, n(C), 1))), 128))
            ])) : c("", !0)
          ]),
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (C) => m.$emit("close"))
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
        var u, b;
        return [
          e("div", Bp, n(((u = d.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", Op, n(((b = d.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", Fp, "Loading details...")) : d.value ? (s(), o("div", Vp, [
            e("div", Ap, [
              e("span", Wp, n(d.value.stats.files_changed) + " files", 1),
              e("span", Gp, "+" + n(d.value.stats.insertions), 1),
              e("span", jp, "-" + n(d.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", Hp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, Z(d.value.changes.workflows.added, (h) => (s(), o("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(W, null, Z(d.value.changes.workflows.modified, (h) => (s(), o("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(W, null, Z(d.value.changes.workflows.deleted, (h) => (s(), o("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h), 1)
              ]))), 128))
            ])) : c("", !0),
            y.value ? (s(), o("div", qp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, Z(d.value.changes.nodes.added, (h) => (s(), o("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h.name), 1),
                h.version ? (s(), o("span", Kp, "(" + n(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(W, null, Z(d.value.changes.nodes.removed, (h) => (s(), o("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", Yp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Xp, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, n(d.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: "primary",
          onClick: l[2] || (l[2] = (u) => m.$emit("checkout", t.commit))
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
}), Zp = /* @__PURE__ */ X(Qp, [["__scopeId", "data-v-d256ff6d"]]), Jp = { class: "dialog-message" }, eh = {
  key: 0,
  class: "dialog-details"
}, th = {
  key: 1,
  class: "dialog-warning"
}, sh = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), S(ot, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (d) => r.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Jp, n(t.message), 1),
        t.details && t.details.length ? (s(), o("div", eh, [
          (s(!0), o(W, null, Z(t.details, (d, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + n(d), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", th, [
          a[4] || (a[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + n(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (d) => r.$emit("cancel"))
        }, {
          default: i(() => [
            w(n(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), S(ie, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (d) => r.$emit("secondary"))
        }, {
          default: i(() => [
            w(n(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
        }, {
          default: i(() => [
            w(n(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), oh = /* @__PURE__ */ X(sh, [["__scopeId", "data-v-3670b9f5"]]), ah = { class: "base-textarea-wrapper" }, nh = ["value", "rows", "placeholder", "disabled", "maxlength"], lh = {
  key: 0,
  class: "base-textarea-count"
}, ih = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("div", ah, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          a[1] || (a[1] = ct(Me((d) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = ct(Me((d) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, nh),
      t.showCharCount && t.maxLength ? (s(), o("div", lh, n(t.modelValue.length) + " / " + n(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ X(ih, [["__scopeId", "data-v-5516e6fc"]]), rh = ["checked", "disabled"], dh = { class: "base-checkbox-box" }, ch = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, uh = {
  key: 0,
  class: "base-checkbox-label"
}, mh = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", {
      class: ae(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked))
      }, null, 40, rh),
      e("span", dh, [
        t.modelValue ? (s(), o("svg", ch, [...a[1] || (a[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (s(), o("span", uh, [
        he(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ X(mh, [["__scopeId", "data-v-bf17c831"]]), vh = { class: "popover-header" }, fh = { class: "popover-body" }, gh = {
  key: 0,
  class: "changes-summary"
}, ph = {
  key: 0,
  class: "change-item"
}, hh = {
  key: 1,
  class: "change-item"
}, yh = {
  key: 2,
  class: "change-item"
}, wh = {
  key: 3,
  class: "change-item"
}, kh = {
  key: 4,
  class: "change-item"
}, bh = {
  key: 1,
  class: "no-changes"
}, _h = {
  key: 2,
  class: "loading"
}, $h = {
  key: 3,
  class: "issues-error"
}, Ch = { class: "error-header" }, xh = { class: "error-title" }, Sh = { class: "issues-list" }, Ih = { class: "message-section" }, Eh = { class: "popover-footer" }, Mh = {
  key: 1,
  class: "commit-popover"
}, zh = { class: "popover-header" }, Lh = { class: "popover-body" }, Rh = {
  key: 0,
  class: "changes-summary"
}, Dh = {
  key: 0,
  class: "change-item"
}, Nh = {
  key: 1,
  class: "change-item"
}, Th = {
  key: 2,
  class: "change-item"
}, Uh = {
  key: 3,
  class: "change-item"
}, Ph = {
  key: 4,
  class: "change-item"
}, Bh = {
  key: 1,
  class: "no-changes"
}, Oh = {
  key: 2,
  class: "loading"
}, Fh = {
  key: 3,
  class: "issues-error"
}, Vh = { class: "error-header" }, Ah = { class: "error-title" }, Wh = { class: "issues-list" }, Gh = { class: "message-section" }, jh = { class: "popover-footer" }, Hh = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const a = t, d = r, { commit: p } = De(), v = $(""), y = $(!1), m = $(!1), l = $(null), u = U(() => {
      if (!a.status) return !1;
      const L = a.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || a.status.has_changes;
    }), b = U(() => {
      var L;
      return (L = a.status) != null && L.workflows.analyzed ? a.status.workflows.analyzed.filter(
        (_) => _.has_issues && (_.sync_state === "new" || _.sync_state === "modified")
      ) : [];
    }), h = U(() => b.value.length > 0), k = U(() => h.value && !m.value);
    async function C() {
      var L, _, f;
      if (!(h.value && !m.value) && !(!u.value || !v.value.trim() || y.value)) {
        y.value = !0, l.value = null;
        try {
          const D = await p(v.value.trim(), m.value);
          D.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((L = D.summary) == null ? void 0 : L.new) || 0} new, ${((_ = D.summary) == null ? void 0 : _.modified) || 0} modified, ${((f = D.summary) == null ? void 0 : f.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => d("committed"), 1e3)) : D.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : D.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: D.message || "Commit failed" };
        } catch (D) {
          l.value = { type: "error", message: D instanceof Error ? D.message : "Commit failed" };
        } finally {
          y.value = !1;
        }
      }
    }
    return (L, _) => t.asModal ? (s(), S(Te, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: _[5] || (_[5] = (f) => d("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: _[4] || (_[4] = Me(() => {
          }, ["stop"]))
        }, [
          e("div", vh, [
            _[11] || (_[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: _[0] || (_[0] = (f) => d("close"))
            }, [..._[10] || (_[10] = [
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
          e("div", fh, [
            t.status && u.value ? (s(), o("div", gh, [
              t.status.workflows.new.length ? (s(), o("div", ph, [
                _[12] || (_[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", hh, [
                _[13] || (_[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", yh, [
                _[14] || (_[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", wh, [
                _[15] || (_[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", kh, [
                _[16] || (_[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", bh, " No changes to commit ")) : (s(), o("div", _h, " Loading... ")),
            h.value ? (s(), o("div", $h, [
              e("div", Ch, [
                _[17] || (_[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", xh, n(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Sh, [
                (s(!0), o(W, null, Z(b.value, (f) => (s(), o("div", {
                  key: f.name,
                  class: "issue-item"
                }, [
                  e("strong", null, n(f.name), 1),
                  w(": " + n(f.issue_summary), 1)
                ]))), 128))
              ]),
              g(us, {
                modelValue: m.value,
                "onUpdate:modelValue": _[1] || (_[1] = (f) => m.value = f),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [..._[18] || (_[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Ih, [
              g(cs, {
                modelValue: v.value,
                "onUpdate:modelValue": _[2] || (_[2] = (f) => v.value = f),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || y.value || k.value,
                rows: 3,
                onCtrlEnter: C
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: ae(["result", l.value.type])
            }, n(l.value.message), 3)) : c("", !0)
          ]),
          e("div", Eh, [
            g(ie, {
              variant: "secondary",
              onClick: _[3] || (_[3] = (f) => d("close"))
            }, {
              default: i(() => [..._[19] || (_[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !v.value.trim() || y.value || k.value,
              loading: y.value,
              onClick: C
            }, {
              default: i(() => [
                w(n(y.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Mh, [
      e("div", zh, [
        _[21] || (_[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: _[6] || (_[6] = (f) => d("close"))
        }, [..._[20] || (_[20] = [
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
      e("div", Lh, [
        t.status && u.value ? (s(), o("div", Rh, [
          t.status.workflows.new.length ? (s(), o("div", Dh, [
            _[22] || (_[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Nh, [
            _[23] || (_[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Th, [
            _[24] || (_[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Uh, [
            _[25] || (_[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Ph, [
            _[26] || (_[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", Bh, " No changes to commit ")) : (s(), o("div", Oh, " Loading... ")),
        h.value ? (s(), o("div", Fh, [
          e("div", Vh, [
            _[27] || (_[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Ah, n(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Wh, [
            (s(!0), o(W, null, Z(b.value, (f) => (s(), o("div", {
              key: f.name,
              class: "issue-item"
            }, [
              e("strong", null, n(f.name), 1),
              w(": " + n(f.issue_summary), 1)
            ]))), 128))
          ]),
          g(us, {
            modelValue: m.value,
            "onUpdate:modelValue": _[7] || (_[7] = (f) => m.value = f),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [..._[28] || (_[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", Gh, [
          g(cs, {
            modelValue: v.value,
            "onUpdate:modelValue": _[8] || (_[8] = (f) => v.value = f),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || y.value || k.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: ae(["result", l.value.type])
        }, n(l.value.message), 3)) : c("", !0)
      ]),
      e("div", jh, [
        g(ie, {
          variant: "secondary",
          onClick: _[9] || (_[9] = (f) => d("close"))
        }, {
          default: i(() => [..._[29] || (_[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !v.value.trim() || y.value || k.value,
          loading: y.value,
          onClick: C
        }, {
          default: i(() => [
            w(n(y.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ss = /* @__PURE__ */ X(Hh, [["__scopeId", "data-v-d92153de"]]), qh = { class: "modal-header" }, Kh = { class: "modal-body" }, Yh = { class: "switch-message" }, Xh = { class: "switch-details" }, Qh = { class: "modal-actions" }, Zh = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), S(Te, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = Me(() => {
          }, ["stop"]))
        }, [
          e("div", qh, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Kh, [
            e("p", Yh, [
              a[6] || (a[6] = w(" Switch from ", -1)),
              e("strong", null, n(t.fromEnvironment), 1),
              a[7] || (a[7] = w(" to ", -1)),
              e("strong", null, n(t.toEnvironment), 1),
              a[8] || (a[8] = w("? ", -1))
            ]),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Xh, ' Your current work will be preserved. You can switch back to "' + n(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Qh, [
            g(J, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(J, {
              variant: "primary",
              onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
            }, {
              default: i(() => [...a[12] || (a[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Jh = /* @__PURE__ */ X(Zh, [["__scopeId", "data-v-e9c5253e"]]), e1 = { class: "progress-bar" }, t1 = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, a = U(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (d, p) => (s(), o("div", e1, [
      e("div", {
        class: ae(["progress-fill", t.variant]),
        style: He({ width: a.value })
      }, null, 6)
    ]));
  }
}), s1 = /* @__PURE__ */ X(t1, [["__scopeId", "data-v-1beb0512"]]), o1 = {
  key: 0,
  class: "modal-overlay"
}, a1 = { class: "modal-content" }, n1 = { class: "modal-body" }, l1 = { class: "progress-info" }, i1 = { class: "progress-percentage" }, r1 = { class: "progress-state" }, d1 = { class: "switch-steps" }, c1 = { class: "step-icon" }, u1 = { class: "step-label" }, m1 = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, a = U(() => {
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
    }), d = U(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), p = U(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], y = v.findIndex((m) => m.state === r.state);
      return v.map((m, l) => {
        let u = "pending", b = "○";
        return l < y ? (u = "completed", b = "✓") : l === y && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (v, y) => (s(), S(Te, { to: "body" }, [
      t.show ? (s(), o("div", o1, [
        e("div", a1, [
          y[1] || (y[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", n1, [
            g(s1, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", l1, [
              e("div", i1, n(t.progress) + "%", 1),
              e("div", r1, n(a.value), 1)
            ]),
            e("div", d1, [
              (s(!0), o(W, null, Z(p.value, (m) => (s(), o("div", {
                key: m.state,
                class: ae(["switch-step", m.status])
              }, [
                e("span", c1, n(m.icon), 1),
                e("span", u1, n(m.label), 1)
              ], 2))), 128))
            ]),
            y[0] || (y[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), v1 = /* @__PURE__ */ X(m1, [["__scopeId", "data-v-768a5078"]]), f1 = { class: "modal-header" }, g1 = { class: "modal-body" }, p1 = {
  key: 0,
  class: "node-section"
}, h1 = { class: "node-list" }, y1 = {
  key: 1,
  class: "node-section"
}, w1 = { class: "node-list" }, k1 = { class: "modal-actions" }, b1 = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), S(Te, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = Me(() => {
          }, ["stop"]))
        }, [
          e("div", f1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", g1, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", p1, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", h1, [
                (s(!0), o(W, null, Z(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", y1, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", w1, [
                (s(!0), o(W, null, Z(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item remove"
                }, " - " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", k1, [
            g(J, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(J, {
              variant: "primary",
              onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), _1 = /* @__PURE__ */ X(b1, [["__scopeId", "data-v-7cad7518"]]), $1 = { class: "wizard-steps" }, C1 = { class: "step-number" }, x1 = {
  key: 0,
  class: "wizard-step"
}, S1 = { class: "form-field" }, I1 = ["placeholder"], E1 = {
  key: 0,
  class: "form-error"
}, M1 = { class: "form-field form-field--checkbox" }, z1 = { class: "form-checkbox" }, L1 = {
  key: 0,
  class: "form-field"
}, R1 = ["placeholder"], D1 = {
  key: 0,
  class: "form-info"
}, N1 = {
  key: 1,
  class: "form-suggestion"
}, T1 = {
  key: 2,
  class: "form-error"
}, U1 = {
  key: 3,
  class: "form-info"
}, P1 = {
  key: 1,
  class: "wizard-progress"
}, B1 = { class: "progress-bar" }, O1 = { class: "progress-message" }, F1 = {
  key: 1,
  class: "wizard-step"
}, V1 = { class: "form-field" }, A1 = { class: "form-field" }, W1 = ["value"], G1 = { class: "form-field" }, j1 = ["disabled"], H1 = ["value"], q1 = { class: "form-field" }, K1 = ["value"], Y1 = { class: "form-field form-field--checkbox" }, X1 = { class: "form-checkbox" }, Q1 = {
  key: 0,
  class: "wizard-progress"
}, Z1 = { class: "progress-bar" }, J1 = { class: "progress-message" }, ey = {
  key: 1,
  class: "form-error"
}, ty = /* @__PURE__ */ Y({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {}
  },
  emits: ["complete", "close"],
  setup(t, { emit: r }) {
    const a = t, d = r, {
      initializeWorkspace: p,
      getInitializeProgress: v,
      validatePath: y,
      createEnvironment: m,
      getCreateProgress: l,
      getComfyUIReleases: u
    } = De(), b = $(1), h = $(a.defaultPath), k = $(!!a.detectedModelsDir), C = $(a.detectedModelsDir || ""), L = $(null), _ = $(null), f = $(null), D = $(null), O = $("my-new-env"), I = $($s), B = $("latest"), A = $(xs), F = $(!0), T = $(null), R = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), x = $(!1), z = $(!1), ee = $(!1), K = $({ progress: 0, message: "" }), se = $({ progress: 0, message: "" }), ge = U(() => {
      var Ie, le;
      const ve = (Ie = h.value) == null ? void 0 : Ie.trim(), G = !L.value, ne = !k.value || !_.value && ((le = C.value) == null ? void 0 : le.trim());
      return ve && G && ne;
    }), re = U(() => {
      var ve;
      return (ve = O.value) == null ? void 0 : ve.trim();
    });
    async function te() {
      var ve;
      if (L.value = null, !!((ve = h.value) != null && ve.trim()))
        try {
          const G = await y({ path: h.value, type: "workspace" });
          G.valid || (L.value = G.error || "Invalid path");
        } catch (G) {
          L.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function P() {
      var ve;
      if (_.value = null, f.value = null, D.value = null, !!((ve = C.value) != null && ve.trim()))
        try {
          const G = await y({ path: C.value, type: "models" });
          if (G.valid)
            D.value = G.model_count ?? null;
          else if (_.value = G.error || "Invalid path", G.suggestion) {
            f.value = G.suggestion, C.value = G.suggestion, _.value = null;
            const ne = await y({ path: G.suggestion, type: "models" });
            ne.valid && (D.value = ne.model_count ?? null);
          }
        } catch (G) {
          _.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function E() {
      var ve, G;
      z.value = !0, L.value = null;
      try {
        await p({
          workspace_path: ((ve = h.value) == null ? void 0 : ve.trim()) || a.defaultPath,
          models_directory: k.value && ((G = C.value) == null ? void 0 : G.trim()) || null
        });
        const ne = setInterval(async () => {
          try {
            const Ie = await v();
            K.value = { progress: Ie.progress, message: Ie.message }, Ie.state === "complete" ? (clearInterval(ne), z.value = !1, b.value = 2, q()) : Ie.state === "error" && (clearInterval(ne), z.value = !1, L.value = Ie.error || "Workspace creation failed");
          } catch {
          }
        }, 500);
      } catch (ne) {
        z.value = !1, L.value = ne instanceof Error ? ne.message : "Failed to create workspace";
      }
    }
    async function oe() {
      ee.value = !0, T.value = null;
      try {
        const ve = {
          name: O.value.trim() || "my-new-env",
          python_version: I.value,
          comfyui_version: B.value,
          torch_backend: A.value,
          switch_after: F.value
        };
        if ((await m(ve)).status === "started") {
          const ne = setInterval(async () => {
            try {
              const Ie = await l();
              se.value = {
                progress: Ie.state === "creating" ? 50 : Ie.state === "complete" ? 100 : 0,
                message: Ie.message
              }, Ie.state === "complete" ? (clearInterval(ne), d("complete", Ie.environment_name || ve.name)) : Ie.state === "error" && (clearInterval(ne), ee.value = !1, T.value = Ie.error || "Environment creation failed");
            } catch {
            }
          }, 2e3);
        }
      } catch (ve) {
        ee.value = !1, T.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function q() {
      x.value = !0;
      try {
        R.value = await u();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        x.value = !1;
      }
    }
    return Le(() => {
      a.detectedModelsDir && (C.value = a.detectedModelsDir);
    }), (ve, G) => (s(), S(ot, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": b.value > 1,
      "close-on-overlay-click": !1,
      onClose: G[9] || (G[9] = (ne) => ve.$emit("close"))
    }, {
      body: i(() => [
        e("div", $1, [
          e("div", {
            class: ae(["step", { active: b.value === 1, complete: b.value > 1 }])
          }, [
            e("span", C1, n(b.value > 1 ? "✓" : "1"), 1),
            G[10] || (G[10] = e("span", { class: "step-label" }, "Workspace", -1))
          ], 2),
          G[12] || (G[12] = e("div", { class: "step-connector" }, null, -1)),
          e("div", {
            class: ae(["step", { active: b.value === 2 }])
          }, [...G[11] || (G[11] = [
            e("span", { class: "step-number" }, "2", -1),
            e("span", { class: "step-label" }, "Environment", -1)
          ])], 2)
        ]),
        b.value === 1 ? (s(), o("div", x1, [
          G[16] || (G[16] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
          e("div", S1, [
            G[13] || (G[13] = e("label", { class: "form-label" }, "Workspace Path", -1)),
            Be(e("input", {
              "onUpdate:modelValue": G[0] || (G[0] = (ne) => h.value = ne),
              type: "text",
              class: "form-input",
              placeholder: t.defaultPath,
              onBlur: te
            }, null, 40, I1), [
              [Nt, h.value]
            ]),
            L.value ? (s(), o("p", E1, n(L.value), 1)) : c("", !0)
          ]),
          e("div", M1, [
            e("label", z1, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": G[1] || (G[1] = (ne) => k.value = ne)
              }, null, 512), [
                [Zt, k.value]
              ]),
              G[14] || (G[14] = e("span", null, "I have existing ComfyUI models", -1))
            ])
          ]),
          k.value ? (s(), o("div", L1, [
            G[15] || (G[15] = e("label", { class: "form-label" }, "Models Directory", -1)),
            Be(e("input", {
              "onUpdate:modelValue": G[2] || (G[2] = (ne) => C.value = ne),
              type: "text",
              class: "form-input",
              placeholder: t.detectedModelsDir || "/path/to/models",
              onBlur: P
            }, null, 40, R1), [
              [Nt, C.value]
            ]),
            t.detectedModelsDir && !C.value ? (s(), o("p", D1, " Detected: " + n(t.detectedModelsDir), 1)) : c("", !0),
            f.value ? (s(), o("p", N1, " Did you mean: " + n(f.value), 1)) : c("", !0),
            _.value ? (s(), o("p", T1, n(_.value), 1)) : c("", !0),
            D.value !== null && !_.value ? (s(), o("p", U1, " Found " + n(D.value) + " model files ", 1)) : c("", !0)
          ])) : c("", !0),
          z.value ? (s(), o("div", P1, [
            e("div", B1, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${K.value.progress}%` })
              }, null, 4)
            ]),
            e("p", O1, n(K.value.message), 1)
          ])) : c("", !0)
        ])) : c("", !0),
        b.value === 2 ? (s(), o("div", F1, [
          G[22] || (G[22] = e("p", { class: "wizard-intro" }, " Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows. ", -1)),
          e("div", V1, [
            G[17] || (G[17] = e("label", { class: "form-label" }, "Environment Name", -1)),
            Be(e("input", {
              "onUpdate:modelValue": G[3] || (G[3] = (ne) => O.value = ne),
              type: "text",
              class: "form-input",
              placeholder: "my-new-env"
            }, null, 512), [
              [Nt, O.value]
            ])
          ]),
          e("div", A1, [
            G[18] || (G[18] = e("label", { class: "form-label" }, "Python Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": G[4] || (G[4] = (ne) => I.value = ne),
              class: "form-select"
            }, [
              (s(!0), o(W, null, Z(we(_s), (ne) => (s(), o("option", {
                key: ne,
                value: ne
              }, n(ne), 9, W1))), 128))
            ], 512), [
              [bt, I.value]
            ])
          ]),
          e("div", G1, [
            G[19] || (G[19] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": G[5] || (G[5] = (ne) => B.value = ne),
              class: "form-select",
              disabled: x.value
            }, [
              (s(!0), o(W, null, Z(R.value, (ne) => (s(), o("option", {
                key: ne.tag_name,
                value: ne.tag_name
              }, n(ne.name), 9, H1))), 128))
            ], 8, j1), [
              [bt, B.value]
            ])
          ]),
          e("div", q1, [
            G[20] || (G[20] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Be(e("select", {
              "onUpdate:modelValue": G[6] || (G[6] = (ne) => A.value = ne),
              class: "form-select"
            }, [
              (s(!0), o(W, null, Z(we(Cs), (ne) => (s(), o("option", {
                key: ne,
                value: ne
              }, n(ne) + n(ne === "auto" ? " (detect GPU)" : ""), 9, K1))), 128))
            ], 512), [
              [bt, A.value]
            ])
          ]),
          e("div", Y1, [
            e("label", X1, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": G[7] || (G[7] = (ne) => F.value = ne),
                checked: ""
              }, null, 512), [
                [Zt, F.value]
              ]),
              G[21] || (G[21] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ]),
          ee.value ? (s(), o("div", Q1, [
            e("div", Z1, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${se.value.progress}%` })
              }, null, 4)
            ]),
            e("p", J1, n(se.value.message), 1)
          ])) : c("", !0),
          T.value ? (s(), o("div", ey, n(T.value), 1)) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        b.value === 1 ? (s(), S(ie, {
          key: 0,
          variant: "primary",
          disabled: !ge.value || z.value,
          onClick: E
        }, {
          default: i(() => [
            w(n(z.value ? "Creating..." : "Next"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : b.value === 2 ? (s(), o(W, { key: 1 }, [
          g(ie, {
            variant: "secondary",
            disabled: ee.value,
            onClick: G[8] || (G[8] = (ne) => b.value = 1)
          }, {
            default: i(() => [...G[23] || (G[23] = [
              w(" Back ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          g(ie, {
            variant: "primary",
            disabled: !re.value || ee.value,
            onClick: oe
          }, {
            default: i(() => [
              w(n(ee.value ? "Creating..." : "Create & Switch"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 64)) : c("", !0)
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), sy = /* @__PURE__ */ X(ty, [["__scopeId", "data-v-24124bcc"]]), oy = { class: "comfygit-panel" }, ay = { class: "panel-header" }, ny = { class: "header-left" }, ly = {
  key: 0,
  class: "header-info"
}, iy = { class: "header-actions" }, ry = { class: "env-switcher" }, dy = {
  key: 0,
  class: "header-info"
}, cy = { class: "branch-name" }, uy = { class: "panel-main" }, my = { class: "sidebar" }, vy = { class: "sidebar-section" }, fy = { class: "sidebar-section" }, gy = { class: "sidebar-section" }, py = { class: "content-area" }, hy = {
  key: 0,
  class: "error-message"
}, yy = {
  key: 1,
  class: "loading"
}, wy = {
  key: 4,
  class: "dialog-overlay"
}, ky = { class: "dialog-content create-progress-dialog" }, by = { class: "dialog-body create-progress-body" }, _y = { class: "create-progress-message" }, $y = { class: "dialog-content env-selector-dialog" }, Cy = { class: "dialog-header" }, xy = { class: "dialog-body" }, Sy = { class: "env-list" }, Iy = { class: "env-info" }, Ey = { class: "env-name-row" }, My = { class: "env-indicator" }, zy = { class: "env-name" }, Ly = {
  key: 0,
  class: "env-branch"
}, Ry = {
  key: 1,
  class: "current-label"
}, Dy = { class: "env-stats" }, Ny = ["onClick"], Ty = { class: "toast-container" }, Uy = { class: "toast-icon" }, Py = { class: "toast-message" }, By = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const a = r, {
      getStatus: d,
      getHistory: p,
      getBranches: v,
      checkout: y,
      createBranch: m,
      switchBranch: l,
      deleteBranch: u,
      getEnvironments: b,
      switchEnvironment: h,
      getSwitchProgress: k,
      createEnvironment: C,
      getCreateProgress: L,
      deleteEnvironment: _,
      syncEnvironmentManually: f,
      getSetupStatus: D
    } = De(), O = hs(), I = $(null), B = $([]), A = $([]), F = $([]), T = U(() => F.value.find((V) => V.is_current)), R = $(null), x = $(!1), z = U(() => {
      var V;
      return ((V = R.value) == null ? void 0 : V.state) || "managed";
    }), ee = $(!1), K = $(null), se = $(null), ge = $(!1), re = $(null), te = $(null), P = $(!1), E = $(!1), oe = $(""), q = $({ state: "idle", progress: 0, message: "" });
    let ve = null, G = null;
    const ne = $(!1), Ie = $({ state: "idle", message: "" }), le = $(null);
    let ue = null;
    const ke = $("status"), Ke = $("this-env");
    function de(V, M) {
      ke.value = V, Ke.value = M;
    }
    function ut(V) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[V];
      ce && de(ce.view, ce.section);
    }
    function xt() {
      de("branches", "this-env");
    }
    function St() {
      a("close"), setTimeout(() => {
        var M;
        const V = document.querySelectorAll("button.comfyui-button");
        for (const ce of V)
          if (((M = ce.textContent) == null ? void 0 : M.trim()) === "Manager") {
            ce.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Ce = $(null), it = $(!1), Je = $(!1), Ye = $([]);
    let It = 0;
    function pe(V, M = "info", ce = 3e3) {
      const Ee = ++It;
      return Ye.value.push({ id: Ee, message: V, type: M }), ce > 0 && setTimeout(() => {
        Ye.value = Ye.value.filter((Ue) => Ue.id !== Ee);
      }, ce), Ee;
    }
    function We(V) {
      Ye.value = Ye.value.filter((M) => M.id !== V);
    }
    function Q(V) {
      switch (V) {
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
    const _e = U(() => {
      if (!I.value) return "neutral";
      const V = I.value.workflows, M = V.new.length > 0 || V.modified.length > 0 || V.deleted.length > 0 || I.value.has_changes;
      return I.value.comparison.is_synced ? M ? "warning" : "success" : "error";
    });
    U(() => I.value ? _e.value === "success" ? "All synced" : _e.value === "warning" ? "Uncommitted changes" : _e.value === "error" ? "Not synced" : "" : "");
    async function xe() {
      ee.value = !0, K.value = null;
      try {
        const [V, M, ce, Ee] = await Promise.all([
          d(!0),
          p(),
          v(),
          b()
        ]);
        I.value = V, B.value = M.commits, A.value = ce.branches, F.value = Ee, a("statusUpdate", V), re.value && await re.value.loadWorkflows(!0);
      } catch (V) {
        K.value = V instanceof Error ? V.message : "Failed to load status", I.value = null, B.value = [], A.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function yt(V) {
      se.value = V;
    }
    async function mt(V) {
      var ce;
      se.value = null;
      const M = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      Ce.value = {
        title: M ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: M ? "You have uncommitted changes that will be lost." : `Checkout commit ${V.short_hash || ((ce = V.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: M ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: M,
        onConfirm: async () => {
          var Pe;
          Ce.value = null, fe();
          const Ee = pe(`Checking out ${V.short_hash || ((Pe = V.hash) == null ? void 0 : Pe.slice(0, 7))}...`, "info", 0), Ue = await y(V.hash, M);
          We(Ee), Ue.status === "success" ? pe("Restarting ComfyUI...", "success") : pe(Ue.message || "Checkout failed", "error");
        }
      };
    }
    async function qt(V) {
      const M = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      Ce.value = {
        title: M ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: M ? "You have uncommitted changes." : `Switch to branch "${V}"?`,
        details: M ? is() : void 0,
        warning: M ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ce.value = null, fe();
          const ce = pe(`Switching to ${V}...`, "info", 0), Ee = await l(V, M);
          We(ce), Ee.status === "success" ? pe("Restarting ComfyUI...", "success") : pe(Ee.message || "Branch switch failed", "error");
        }
      };
    }
    async function j(V) {
      const M = pe(`Creating branch ${V}...`, "info", 0), ce = await m(V);
      We(M), ce.status === "success" ? (pe(`Branch "${V}" created`, "success"), await xe()) : pe(ce.message || "Failed to create branch", "error");
    }
    async function N(V, M = !1) {
      const ce = async (Ee) => {
        var Pe;
        const Ue = pe(`Deleting branch ${V}...`, "info", 0);
        try {
          const et = await u(V, Ee);
          We(Ue), et.status === "success" ? (pe(`Branch "${V}" deleted`, "success"), await xe()) : (Pe = et.message) != null && Pe.includes("not fully merged") ? Ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${V}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ce.value = null, await ce(!0);
            }
          } : pe(et.message || "Failed to delete branch", "error");
        } catch (et) {
          We(Ue);
          const Et = et instanceof Error ? et.message : "Failed to delete branch";
          Et.includes("not fully merged") ? Ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${V}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ce.value = null, await ce(!0);
            }
          } : pe(Et, "error");
        }
      };
      Ce.value = {
        title: "Delete Branch",
        message: `Delete branch "${V}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ce.value = null, await ce(M);
        }
      };
    }
    async function H(V) {
      se.value = null;
      const M = prompt("Enter branch name:");
      if (M) {
        const ce = pe(`Creating branch ${M}...`, "info", 0), Ee = await m(M, V.hash);
        We(ce), Ee.status === "success" ? (pe(`Branch "${M}" created from ${V.short_hash}`, "success"), await xe()) : pe(Ee.message || "Failed to create branch", "error");
      }
    }
    function fe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Re() {
      Ce.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var V;
          Ce.value = null, fe(), pe("Restarting environment...", "info");
          try {
            (V = window.app) != null && V.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function rt() {
      Ce.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var V;
          Ce.value = null, pe("Stopping environment...", "info");
          try {
            (V = window.app) != null && V.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Xe(V) {
      ge.value = !1, oe.value = V, P.value = !0;
    }
    async function Ot() {
      P.value = !1, E.value = !0, fe(), q.value = {
        progress: 10,
        state: vt(10),
        message: ft(10)
      };
      try {
        await h(oe.value), Ls(), Rs();
      } catch (V) {
        gt(), E.value = !1, pe(`Failed to initiate switch: ${V instanceof Error ? V.message : "Unknown error"}`, "error"), q.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function vt(V) {
      return V >= 100 ? "complete" : V >= 80 ? "validating" : V >= 60 ? "starting" : V >= 30 ? "syncing" : "preparing";
    }
    function ft(V) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[vt(V)] || "";
    }
    function Ls() {
      if (G) return;
      let V = 10;
      const M = 60, ce = 5e3, Ee = 100, Ue = (M - V) / (ce / Ee);
      G = window.setInterval(() => {
        if (V += Ue, V >= M && (V = M, gt()), q.value.progress < M) {
          const Pe = Math.floor(V);
          q.value = {
            progress: Pe,
            state: vt(Pe),
            message: ft(Pe)
          };
        }
      }, Ee);
    }
    function gt() {
      G && (clearInterval(G), G = null);
    }
    function Rs() {
      ve || (ve = window.setInterval(async () => {
        try {
          let V = await O.getStatus();
          if ((!V || V.state === "idle") && (V = await k()), !V)
            return;
          const M = V.progress || 0;
          M >= 60 && gt();
          const ce = Math.max(M, q.value.progress), Ee = V.state && V.state !== "idle" && V.state !== "unknown", Ue = Ee ? V.state : vt(ce), Pe = Ee && V.message || ft(ce);
          q.value = {
            state: Ue,
            progress: ce,
            message: Pe
          }, V.state === "complete" ? (gt(), Kt(), E.value = !1, pe(`✓ Switched to ${oe.value}`, "success"), await xe(), oe.value = "") : V.state === "rolled_back" ? (gt(), Kt(), E.value = !1, pe("Switch failed, restored previous environment", "warning"), oe.value = "") : V.state === "critical_failure" && (gt(), Kt(), E.value = !1, pe(`Critical error during switch: ${V.message}`, "error"), oe.value = "");
        } catch (V) {
          console.error("Failed to poll switch progress:", V);
        }
      }, 1e3));
    }
    function Kt() {
      gt(), ve && (clearInterval(ve), ve = null);
    }
    function Ds() {
      P.value = !1, oe.value = "";
    }
    async function Ns() {
      it.value = !1, await xe(), pe("✓ Changes committed", "success");
    }
    async function Ts() {
      Je.value = !1;
      const V = pe("Syncing environment...", "info", 0);
      try {
        const M = await f("skip", !0);
        if (We(V), M.status === "success") {
          const ce = [];
          M.nodes_installed.length && ce.push(`${M.nodes_installed.length} installed`), M.nodes_removed.length && ce.push(`${M.nodes_removed.length} removed`);
          const Ee = ce.length ? `: ${ce.join(", ")}` : "";
          pe(`✓ Environment synced${Ee}`, "success"), await xe();
        } else {
          const ce = M.errors.length ? M.errors.join("; ") : M.message;
          pe(`Sync failed: ${ce}`, "error");
        }
      } catch (M) {
        We(V), pe(`Sync error: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
      }
    }
    async function Us(V) {
      le.value = V, ne.value = !0, Ie.value = { state: "creating", message: `Creating environment '${V.name}'...` };
      try {
        const M = await C(V);
        M.status === "started" ? Ps() : M.status === "error" && (ne.value = !1, pe(`Failed to create environment: ${M.message}. Check debug logs for details.`, "error"), le.value = null);
      } catch (M) {
        ne.value = !1, pe(`Error creating environment: ${M instanceof Error ? M.message : "Unknown error"}. Check debug logs.`, "error"), le.value = null;
      }
    }
    function Ps() {
      ue || (ue = window.setInterval(async () => {
        var V;
        try {
          const M = await L();
          Ie.value = { state: M.state, message: M.message }, M.state === "complete" ? (ls(), ne.value = !1, pe(`✓ Environment '${M.environment_name}' created`, "success"), await xe(), te.value && await te.value.loadEnvironments(), (V = le.value) != null && V.switch_after && M.environment_name && await Xe(M.environment_name), le.value = null) : M.state === "error" && (ls(), ne.value = !1, pe(`Failed to create environment: ${M.error || M.message}. Check debug logs.`, "error"), le.value = null);
        } catch (M) {
          console.error("Failed to poll create progress:", M);
        }
      }, 2e3));
    }
    function ls() {
      ue && (clearInterval(ue), ue = null);
    }
    async function Bs(V) {
      var M;
      if (((M = T.value) == null ? void 0 : M.name) === V) {
        pe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Ce.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${V}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Ce.value = null;
          try {
            const ce = await _(V);
            ce.status === "success" ? (pe(`Environment "${V}" deleted`, "success"), await xe(), te.value && await te.value.loadEnvironments()) : pe(ce.message || "Failed to delete environment", "error");
          } catch (ce) {
            pe(`Error deleting environment: ${ce instanceof Error ? ce.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Os(V) {
      x.value = !1;
      try {
        R.value = await D();
      } catch {
      }
      await Xe(V);
    }
    function is() {
      if (!I.value) return [];
      const V = [], M = I.value.workflows;
      return M.new.length && V.push(`${M.new.length} new workflow(s)`), M.modified.length && V.push(`${M.modified.length} modified workflow(s)`), M.deleted.length && V.push(`${M.deleted.length} deleted workflow(s)`), V;
    }
    return Le(async () => {
      try {
        if (R.value = await D(), R.value.state === "no_workspace") {
          x.value = !0;
          return;
        }
      } catch (V) {
        console.warn("Setup status check failed, proceeding normally:", V);
      }
      await xe();
    }), (V, M) => {
      var ce, Ee, Ue, Pe, et, Et;
      return s(), o("div", oy, [
        e("div", ay, [
          e("div", ny, [
            M[30] || (M[30] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            I.value ? (s(), o("div", ly)) : c("", !0)
          ]),
          e("div", iy, [
            e("button", {
              class: ae(["icon-btn", { spinning: ee.value }]),
              onClick: xe,
              title: "Refresh"
            }, [...M[31] || (M[31] = [
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
              onClick: M[0] || (M[0] = (me) => a("close")),
              title: "Close"
            }, [...M[32] || (M[32] = [
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
        e("div", ry, [
          e("div", { class: "env-switcher-header" }, [
            M[33] || (M[33] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Re
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: rt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: M[1] || (M[1] = (me) => de("environments", "all-envs"))
          }, [
            I.value ? (s(), o("div", dy, [
              e("span", null, n(((ce = T.value) == null ? void 0 : ce.name) || ((Ee = I.value) == null ? void 0 : Ee.environment) || "Loading..."), 1),
              e("span", cy, "(" + n(I.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            M[34] || (M[34] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", uy, [
          e("div", my, [
            e("div", vy, [
              M[35] || (M[35] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "status" && Ke.value === "this-env" }]),
                onClick: M[2] || (M[2] = (me) => de("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "workflows" }]),
                onClick: M[3] || (M[3] = (me) => de("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "models-env" }]),
                onClick: M[4] || (M[4] = (me) => de("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "branches" }]),
                onClick: M[5] || (M[5] = (me) => de("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "history" }]),
                onClick: M[6] || (M[6] = (me) => de("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "nodes" }]),
                onClick: M[7] || (M[7] = (me) => de("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "debug-env" }]),
                onClick: M[8] || (M[8] = (me) => de("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            M[38] || (M[38] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", fy, [
              M[36] || (M[36] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "environments" }]),
                onClick: M[9] || (M[9] = (me) => de("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "model-index" }]),
                onClick: M[10] || (M[10] = (me) => de("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "settings" }]),
                onClick: M[11] || (M[11] = (me) => de("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "debug-workspace" }]),
                onClick: M[12] || (M[12] = (me) => de("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            M[39] || (M[39] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", gy, [
              M[37] || (M[37] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "export" }]),
                onClick: M[13] || (M[13] = (me) => de("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "import" }]),
                onClick: M[14] || (M[14] = (me) => de("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ke.value === "remotes" }]),
                onClick: M[15] || (M[15] = (me) => de("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", py, [
            K.value ? (s(), o("div", hy, n(K.value), 1)) : !I.value && ke.value === "status" ? (s(), o("div", yy, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              ke.value === "status" ? (s(), S(pn, {
                key: 0,
                status: I.value,
                "setup-state": z.value,
                onSwitchBranch: xt,
                onCommitChanges: M[16] || (M[16] = (me) => it.value = !0),
                onSyncEnvironment: M[17] || (M[17] = (me) => Je.value = !0),
                onViewWorkflows: M[18] || (M[18] = (me) => de("workflows", "this-env")),
                onViewHistory: M[19] || (M[19] = (me) => de("history", "this-env")),
                onViewDebug: M[20] || (M[20] = (me) => de("debug-env", "this-env")),
                onStartSetup: M[21] || (M[21] = (me) => x.value = !0),
                onViewEnvironments: M[22] || (M[22] = (me) => de("environments", "all-envs"))
              }, null, 8, ["status", "setup-state"])) : ke.value === "workflows" ? (s(), S(Fu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: re,
                onRefresh: xe
              }, null, 512)) : ke.value === "models-env" ? (s(), S(_m, {
                key: 2,
                onNavigate: ut
              })) : ke.value === "branches" ? (s(), S(Ln, {
                key: 3,
                branches: A.value,
                current: ((Ue = I.value) == null ? void 0 : Ue.branch) || null,
                onSwitch: qt,
                onCreate: j,
                onDelete: N
              }, null, 8, ["branches", "current"])) : ke.value === "history" ? (s(), S(An, {
                key: 4,
                commits: B.value,
                onSelect: yt,
                onCheckout: mt
              }, null, 8, ["commits"])) : ke.value === "nodes" ? (s(), S(cv, {
                key: 5,
                onOpenNodeManager: St
              })) : ke.value === "debug-env" ? (s(), S(cf, { key: 6 })) : ke.value === "environments" ? (s(), S(Xf, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: te,
                onSwitch: Xe,
                onCreate: Us,
                onDelete: Bs
              }, null, 512)) : ke.value === "model-index" ? (s(), S(Am, {
                key: 8,
                onRefresh: xe
              })) : ke.value === "settings" ? (s(), S(nf, { key: 9 })) : ke.value === "debug-workspace" ? (s(), S(rf, { key: 10 })) : ke.value === "export" ? (s(), S(lg, { key: 11 })) : ke.value === "import" ? (s(), S(Np, { key: 12 })) : ke.value === "remotes" ? (s(), S(Fv, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        se.value ? (s(), S(Zp, {
          key: 0,
          commit: se.value,
          onClose: M[23] || (M[23] = (me) => se.value = null),
          onCheckout: mt,
          onCreateBranch: H
        }, null, 8, ["commit"])) : c("", !0),
        Ce.value ? (s(), S(oh, {
          key: 1,
          title: Ce.value.title,
          message: Ce.value.message,
          details: Ce.value.details,
          warning: Ce.value.warning,
          confirmLabel: Ce.value.confirmLabel,
          cancelLabel: Ce.value.cancelLabel,
          secondaryLabel: Ce.value.secondaryLabel,
          secondaryAction: Ce.value.secondaryAction,
          destructive: Ce.value.destructive,
          onConfirm: Ce.value.onConfirm,
          onCancel: M[24] || (M[24] = (me) => Ce.value = null),
          onSecondary: Ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(Jh, {
          show: P.value,
          "from-environment": ((Pe = T.value) == null ? void 0 : Pe.name) || "unknown",
          "to-environment": oe.value,
          onConfirm: Ot,
          onClose: Ds
        }, null, 8, ["show", "from-environment", "to-environment"]),
        it.value && I.value ? (s(), S(Ss, {
          key: 2,
          status: I.value,
          "as-modal": !0,
          onClose: M[25] || (M[25] = (me) => it.value = !1),
          onCommitted: Ns
        }, null, 8, ["status"])) : c("", !0),
        Je.value && I.value ? (s(), S(_1, {
          key: 3,
          show: Je.value,
          "mismatch-details": {
            missing_nodes: I.value.comparison.missing_nodes,
            extra_nodes: I.value.comparison.extra_nodes
          },
          onConfirm: Ts,
          onClose: M[26] || (M[26] = (me) => Je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(v1, {
          show: E.value,
          state: q.value.state,
          progress: q.value.progress,
          message: q.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ne.value ? (s(), o("div", wy, [
          e("div", ky, [
            M[42] || (M[42] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", by, [
              M[40] || (M[40] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", _y, n(Ie.value.message), 1),
              M[41] || (M[41] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        ge.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: M[28] || (M[28] = Me((me) => ge.value = !1, ["self"]))
        }, [
          e("div", $y, [
            e("div", Cy, [
              M[44] || (M[44] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: M[27] || (M[27] = (me) => ge.value = !1)
              }, [...M[43] || (M[43] = [
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
            e("div", xy, [
              M[45] || (M[45] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Sy, [
                (s(!0), o(W, null, Z(F.value, (me) => (s(), o("div", {
                  key: me.name,
                  class: ae(["env-item", { current: me.is_current }])
                }, [
                  e("div", Iy, [
                    e("div", Ey, [
                      e("span", My, n(me.is_current ? "●" : "○"), 1),
                      e("span", zy, n(me.name), 1),
                      me.current_branch ? (s(), o("span", Ly, "(" + n(me.current_branch) + ")", 1)) : c("", !0),
                      me.is_current ? (s(), o("span", Ry, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Dy, n(me.workflow_count) + " workflows • " + n(me.node_count) + " nodes ", 1)
                  ]),
                  me.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (jw) => Xe(me.name)
                  }, " SWITCH ", 8, Ny))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        x.value ? (s(), S(sy, {
          key: 6,
          "default-path": ((et = R.value) == null ? void 0 : et.default_path) || "~/comfygit",
          "detected-models-dir": ((Et = R.value) == null ? void 0 : Et.detected_models_dir) || null,
          onComplete: Os,
          onClose: M[29] || (M[29] = (me) => x.value = !1)
        }, null, 8, ["default-path", "detected-models-dir"])) : c("", !0),
        e("div", Ty, [
          g(Gs, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(W, null, Z(Ye.value, (me) => (s(), o("div", {
                key: me.id,
                class: ae(["toast", me.type])
              }, [
                e("span", Uy, n(Q(me.type)), 1),
                e("span", Py, n(me.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Oy = /* @__PURE__ */ X(By, [["__scopeId", "data-v-bf8bb29c"]]), Fy = { class: "item-header" }, Vy = { class: "item-info" }, Ay = { class: "filename" }, Wy = { class: "metadata" }, Gy = { class: "size" }, jy = {
  key: 0,
  class: "type"
}, Hy = { class: "item-actions" }, qy = {
  key: 0,
  class: "progress-section"
}, Ky = { class: "progress-bar" }, Yy = { class: "progress-stats" }, Xy = { class: "downloaded" }, Qy = { class: "speed" }, Zy = {
  key: 0,
  class: "eta"
}, Jy = {
  key: 1,
  class: "status-msg paused"
}, ew = {
  key: 2,
  class: "status-msg queued"
}, tw = {
  key: 3,
  class: "status-msg completed"
}, sw = {
  key: 4,
  class: "status-msg failed"
}, ow = {
  key: 0,
  class: "retries"
}, aw = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: r }) {
    const a = r;
    function d(y) {
      if (y === 0) return "?";
      const m = y / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(y / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(y) {
      return y === 0 ? "-" : `${(y / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(y) {
      if (y < 60) return `${Math.round(y)}s`;
      const m = Math.floor(y / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (y, m) => (s(), o("div", {
      class: ae(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Fy, [
        e("div", Vy, [
          e("div", Ay, n(t.item.filename), 1),
          e("div", Wy, [
            e("span", Gy, n(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", jy, n(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Hy, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (l) => a("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (l) => a("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (l) => a("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (l) => a("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", qy, [
        e("div", Ky, [
          e("div", {
            class: "progress-fill",
            style: He({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Yy, [
          e("span", Xy, n(d(t.item.downloaded)) + " / " + n(d(t.item.size)), 1),
          e("span", Qy, n(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Zy, n(v(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Jy, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", ew, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", tw, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", sw, [
        w(" ✗ " + n(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", ow, "(" + n(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ X(aw, [["__scopeId", "data-v-2110df65"]]), nw = { class: "queue-title" }, lw = { class: "count" }, iw = { class: "queue-actions" }, rw = { class: "action-label" }, dw = {
  key: 0,
  class: "overall-progress"
}, cw = { class: "progress-bar" }, uw = {
  key: 0,
  class: "current-mini"
}, mw = { class: "filename" }, vw = { class: "speed" }, fw = {
  key: 1,
  class: "queue-content"
}, gw = {
  key: 0,
  class: "section"
}, pw = {
  key: 1,
  class: "section"
}, hw = { class: "section-header" }, yw = { class: "section-label paused" }, ww = { class: "items-list" }, kw = {
  key: 2,
  class: "section"
}, bw = { class: "section-header" }, _w = { class: "section-label" }, $w = { class: "items-list" }, Cw = {
  key: 3,
  class: "section"
}, xw = { class: "section-header" }, Sw = { class: "section-label" }, Iw = { class: "items-list" }, Ew = {
  key: 4,
  class: "section"
}, Mw = { class: "section-header" }, zw = { class: "section-label failed" }, Lw = { class: "items-list" }, Rw = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: r,
      currentDownload: a,
      queuedItems: d,
      completedItems: p,
      failedItems: v,
      pausedItems: y,
      hasItems: m,
      activeCount: l,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: h,
      resumeAllPaused: k,
      removeItem: C,
      clearCompleted: L
    } = Bt(), _ = $(!1);
    let f = null;
    jt(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: y.value.length,
        completed: p.value.length
      }),
      (B, A) => {
        f && (clearTimeout(f), f = null);
        const F = B.active === 0 && B.failed === 0 && B.paused === 0 && B.completed > 0, T = A && (A.active > 0 || A.paused > 0);
        F && T && (f = setTimeout(() => {
          L(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const D = U(() => {
      var F;
      if (r.items.length === 0) return 0;
      const B = p.value.length, A = ((F = a.value) == null ? void 0 : F.progress) || 0;
      return Math.round((B + A / 100) / r.items.length * 100);
    });
    function O(B) {
      u(B);
    }
    function I(B) {
      return B === 0 ? "" : `${(B / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (B, A) => (s(), S(Te, { to: "body" }, [
      we(m) ? (s(), o("div", {
        key: 0,
        class: ae(["model-download-queue", { minimized: !_.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: A[0] || (A[0] = (F) => _.value = !_.value)
        }, [
          e("div", nw, [
            A[4] || (A[4] = e("span", { class: "icon" }, "↓", -1)),
            A[5] || (A[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", lw, "(" + n(we(l)) + "/" + n(we(r).items.length) + ")", 1)
          ]),
          e("div", iw, [
            e("span", rw, n(_.value ? "minimize" : "expand"), 1)
          ])
        ]),
        _.value ? (s(), o("div", fw, [
          we(a) ? (s(), o("div", gw, [
            A[6] || (A[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(Lt, {
              item: we(a),
              onCancel: A[1] || (A[1] = (F) => O(we(a).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          we(y).length > 0 ? (s(), o("div", pw, [
            e("div", hw, [
              e("span", yw, "Paused (" + n(we(y).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: A[2] || (A[2] = //@ts-ignore
                (...F) => we(k) && we(k)(...F))
              }, "Resume All")
            ]),
            e("div", ww, [
              (s(!0), o(W, null, Z(we(y), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onResume: (T) => we(h)(F.id),
                onRemove: (T) => we(C)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          we(d).length > 0 ? (s(), o("div", kw, [
            e("div", bw, [
              e("span", _w, "Queued (" + n(we(d).length) + ")", 1)
            ]),
            e("div", $w, [
              (s(!0), o(W, null, Z(we(d), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onCancel: (T) => O(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          we(p).length > 0 ? (s(), o("div", Cw, [
            e("div", xw, [
              e("span", Sw, "Completed (" + n(we(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: A[3] || (A[3] = //@ts-ignore
                (...F) => we(L) && we(L)(...F))
              }, "Clear")
            ]),
            e("div", Iw, [
              (s(!0), o(W, null, Z(we(p).slice(0, 3), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onRemove: (T) => we(C)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          we(v).length > 0 ? (s(), o("div", Ew, [
            e("div", Mw, [
              e("span", zw, "Failed (" + n(we(v).length) + ")", 1)
            ]),
            e("div", Lw, [
              (s(!0), o(W, null, Z(we(v), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onRetry: (T) => we(b)(F.id),
                onRemove: (T) => we(C)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", dw, [
          e("div", cw, [
            e("div", {
              class: "progress-fill",
              style: He({ width: `${D.value}%` })
            }, null, 4)
          ]),
          we(a) ? (s(), o("div", uw, [
            e("span", mw, n(we(a).filename), 1),
            e("span", vw, n(I(we(a).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), Dw = /* @__PURE__ */ X(Rw, [["__scopeId", "data-v-60751cfa"]]), Nw = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Tw = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Uw = {
  comfy: Nw,
  phosphor: Tw
}, as = "comfy", Is = "comfygit-theme";
let pt = null, Es = as;
function Pw() {
  try {
    const t = localStorage.getItem(Is);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return as;
}
function Ms(t = as) {
  pt && pt.remove(), pt = document.createElement("style"), pt.id = "comfygit-theme-styles", pt.setAttribute("data-theme", t), pt.textContent = Uw[t], document.head.appendChild(pt), document.body.setAttribute("data-comfygit-theme", t), Es = t;
  try {
    localStorage.setItem(Is, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Bw() {
  return Es;
}
function Ow(t) {
  Ms(t);
}
const ns = document.createElement("link");
ns.rel = "stylesheet";
ns.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ns);
const Fw = Pw();
Ms(Fw);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Ow(t);
  },
  getTheme: () => {
    const t = Bw();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ge = null, Ve = null, Ut = null, Rt = null, ms = null;
const _t = $(null);
async function At() {
  var t;
  if (!((t = kt) != null && t.api)) return null;
  try {
    const r = await kt.api.fetchApi("/v2/comfygit/status");
    r.ok && (_t.value = await r.json());
  } catch {
  }
}
function Vw() {
  if (!_t.value) return !1;
  const t = _t.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || _t.value.has_changes;
}
function Aw() {
  Ge && Ge.remove(), Ge = document.createElement("div"), Ge.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ge.appendChild(t), Ge.addEventListener("click", (d) => {
    d.target === Ge && Qt();
  });
  const r = (d) => {
    d.key === "Escape" && (Qt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), ss({
    render: () => os(Oy, {
      onClose: Qt,
      onStatusUpdate: (d) => {
        _t.value = d, Pt();
      }
    })
  }).mount(t), document.body.appendChild(Ge);
}
function Qt() {
  Ge && (Ge.remove(), Ge = null);
}
function Ww(t) {
  Dt(), Ve = document.createElement("div"), Ve.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  Ve.style.position = "fixed", Ve.style.top = `${r.bottom + 8}px`, Ve.style.right = `${window.innerWidth - r.right}px`, Ve.style.zIndex = "10001";
  const a = (p) => {
    Ve && !Ve.contains(p.target) && p.target !== t && (Dt(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const d = (p) => {
    p.key === "Escape" && (Dt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Ut = ss({
    render: () => os(Ss, {
      status: _t.value,
      onClose: Dt,
      onCommitted: () => {
        Dt(), At().then(Pt);
      }
    })
  }), Ut.mount(Ve), document.body.appendChild(Ve);
}
function Dt() {
  Ut && (Ut.unmount(), Ut = null), Ve && (Ve.remove(), Ve = null);
}
function Gw() {
  Rt || (Rt = document.createElement("div"), Rt.className = "comfygit-download-queue-root", ms = ss({
    render: () => os(Dw)
  }), ms.mount(Rt), document.body.appendChild(Rt), console.log("[ComfyGit] Model download queue mounted"));
}
let tt = null;
function Pt() {
  if (!tt) return;
  const t = tt.querySelector(".commit-indicator");
  t && (t.style.display = Vw() ? "block" : "none");
}
const zs = document.createElement("style");
zs.textContent = `
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
document.head.appendChild(zs);
kt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = Aw, tt = document.createElement("button"), tt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", tt.innerHTML = 'Commit <span class="commit-indicator"></span>', tt.title = "Quick Commit", tt.onclick = () => Ww(tt), t.appendChild(r), t.appendChild(tt), (v = (p = kt.menu) == null ? void 0 : p.settingsGroup) != null && v.element && (kt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Gw();
    const { loadPendingDownloads: a } = Bt();
    a(), await At(), Pt(), setInterval(async () => {
      await At(), Pt();
    }, 3e4);
    const d = kt.api;
    if (d) {
      let y = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, m = function() {
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
        const b = document.createElement("span");
        b.textContent = "Workflows updated - refresh required", u.appendChild(b);
        const h = document.createElement("button");
        h.textContent = "Refresh", h.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => y(), u.appendChild(h);
        const k = document.createElement("button");
        k.textContent = "×", k.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => u.remove(), u.appendChild(k), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      d.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: b, workflow_name: h } = u.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${h}`), await At(), Pt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      d.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), y()) : m()), l = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
