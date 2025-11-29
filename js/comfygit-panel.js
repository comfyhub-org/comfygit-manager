import { app as wt } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as pe, createBlock as I, resolveDynamicComponent as ls, normalizeClass as oe, withCtx as i, toDisplayString as n, createVNode as g, createTextVNode as w, computed as U, Fragment as G, renderList as ee, normalizeStyle as nt, ref as _, onMounted as Le, watch as qt, Teleport as Be, withModifiers as ze, Transition as Gs, createSlots as Yt, withKeys as ct, onUnmounted as hs, reactive as ys, readonly as js, unref as he, withDirectives as Ae, vModelText as Rt, nextTick as Hs, vModelSelect as kt, vModelCheckbox as es, TransitionGroup as Ks, createApp as is, h as rs } from "vue";
const qs = { class: "panel-layout" }, Ys = {
  key: 0,
  class: "panel-layout-header"
}, Xs = {
  key: 1,
  class: "panel-layout-search"
}, Qs = { class: "panel-layout-content" }, Zs = {
  key: 2,
  class: "panel-layout-footer"
}, Js = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (r, a) => (s(), o("div", qs, [
      r.$slots.header ? (s(), o("div", Ys, [
        pe(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (s(), o("div", Xs, [
        pe(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Qs, [
        pe(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", Zs, [
        pe(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Q = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [d, f] of r)
    a[d] = f;
  return a;
}, We = /* @__PURE__ */ Q(Js, [["__scopeId", "data-v-21565df9"]]), eo = {
  key: 0,
  class: "panel-title-prefix"
}, to = {
  key: 1,
  class: "panel-title-prefix-theme"
}, so = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, a) => (s(), I(ls(`h${t.level}`), {
      class: oe(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", eo, n(t.prefix), 1)) : (s(), o("span", to)),
        pe(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), oo = /* @__PURE__ */ Q(so, [["__scopeId", "data-v-c3875efc"]]), ao = ["title"], no = ["width", "height"], lo = /* @__PURE__ */ X({
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
      ])], 8, no))
    ], 8, ao));
  }
}), ws = /* @__PURE__ */ Q(lo, [["__scopeId", "data-v-6fc7f16d"]]), io = { class: "header-left" }, ro = {
  key: 0,
  class: "header-actions"
}, co = /* @__PURE__ */ X({
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
      class: oe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", io, [
        g(oo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(n(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), I(ws, {
          key: 0,
          onClick: a[0] || (a[0] = (d) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (s(), o("div", ro, [
        pe(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ Q(co, [["__scopeId", "data-v-55a62cd6"]]), uo = {
  key: 0,
  class: "section-title-count"
}, mo = {
  key: 1,
  class: "section-title-icon"
}, vo = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), I(ls(`h${t.level}`), {
      class: oe(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, {
      default: i(() => [
        pe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", uo, "(" + n(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", mo, n(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), He = /* @__PURE__ */ Q(vo, [["__scopeId", "data-v-559361eb"]]), fo = { class: "status-grid" }, go = { class: "status-grid__columns" }, po = { class: "status-grid__column" }, ho = { class: "status-grid__title" }, yo = { class: "status-grid__column status-grid__column--right" }, wo = { class: "status-grid__title" }, ko = {
  key: 0,
  class: "status-grid__footer"
}, bo = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, a) => (s(), o("div", fo, [
      e("div", go, [
        e("div", po, [
          e("h4", ho, n(t.leftTitle), 1),
          pe(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", yo, [
          e("h4", wo, n(t.rightTitle), 1),
          pe(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", ko, [
        pe(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), _o = /* @__PURE__ */ Q(bo, [["__scopeId", "data-v-73b7ba3f"]]), $o = {
  key: 0,
  class: "status-item__icon"
}, Co = {
  key: 1,
  class: "status-item__count"
}, xo = { class: "status-item__label" }, So = /* @__PURE__ */ X({
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
    return (d, f) => (s(), o("div", {
      class: oe(["status-item", a.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", $o, n(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", Co, n(t.count), 1)) : c("", !0),
      e("span", xo, n(t.label), 1)
    ], 2));
  }
}), Ze = /* @__PURE__ */ Q(So, [["__scopeId", "data-v-6f929183"]]), Io = { class: "issue-card__header" }, Eo = { class: "issue-card__icon" }, Mo = { class: "issue-card__title" }, zo = {
  key: 0,
  class: "issue-card__content"
}, To = {
  key: 0,
  class: "issue-card__description"
}, Lo = {
  key: 1,
  class: "issue-card__items"
}, Do = {
  key: 2,
  class: "issue-card__actions"
}, Ro = /* @__PURE__ */ X({
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
    return (d, f) => (s(), o("div", {
      class: oe(["issue-card", a.value])
    }, [
      e("div", Io, [
        e("span", Eo, n(t.icon), 1),
        e("h4", Mo, n(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", zo, [
        t.description ? (s(), o("p", To, n(t.description), 1)) : c("", !0),
        pe(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", Lo, [
        (s(!0), o(G, null, ee(t.items, (v, p) => (s(), o("div", {
          key: p,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, n(v), 1)
        ]))), 128))
      ])) : c("", !0),
      d.$slots.actions ? (s(), o("div", Do, [
        pe(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ Q(Ro, [["__scopeId", "data-v-df6aa348"]]), No = ["type", "disabled"], Po = {
  key: 0,
  class: "spinner"
}, Uo = /* @__PURE__ */ X({
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
      class: oe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", Po)) : c("", !0),
      t.loading ? c("", !0) : pe(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, No));
  }
}), te = /* @__PURE__ */ Q(Uo, [["__scopeId", "data-v-772abe47"]]), Bo = { class: "empty-state" }, Oo = {
  key: 0,
  class: "empty-icon"
}, Fo = { class: "empty-message" }, Vo = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, a) => (s(), o("div", Bo, [
      t.icon ? (s(), o("div", Oo, n(t.icon), 1)) : c("", !0),
      e("p", Fo, n(t.message), 1),
      t.actionLabel ? (s(), I(te, {
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
}), Qe = /* @__PURE__ */ Q(Vo, [["__scopeId", "data-v-4466284f"]]), Ao = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: oe(["detail-label"]),
      style: nt({ minWidth: t.minWidth })
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ts = /* @__PURE__ */ Q(Ao, [["__scopeId", "data-v-75e9eeb8"]]), Wo = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: oe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ss = /* @__PURE__ */ Q(Wo, [["__scopeId", "data-v-2f186e4c"]]), Go = { class: "detail-row" }, jo = /* @__PURE__ */ X({
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
    return (r, a) => (s(), o("div", Go, [
      g(ts, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(n(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), I(ss, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(n(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : pe(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ie = /* @__PURE__ */ Q(jo, [["__scopeId", "data-v-ef15664a"]]), Ho = { class: "modal-header" }, Ko = { class: "modal-body" }, qo = { class: "status-section" }, Yo = {
  key: 0,
  class: "status-section"
}, Xo = { class: "section-header-row" }, Qo = {
  key: 0,
  class: "workflow-group"
}, Zo = { class: "workflow-group-header" }, Jo = { class: "workflow-group-title" }, ea = { class: "workflow-list" }, ta = { class: "workflow-name" }, sa = { class: "workflow-issue" }, oa = {
  key: 1,
  class: "workflow-group"
}, aa = { class: "workflow-group-header" }, na = { class: "workflow-group-title" }, la = { class: "workflow-list" }, ia = { class: "workflow-name" }, ra = { class: "workflow-issue" }, da = {
  key: 2,
  class: "workflow-group"
}, ca = { class: "workflow-group-header" }, ua = { class: "workflow-group-title" }, ma = { class: "workflow-list" }, va = { class: "workflow-name" }, fa = {
  key: 3,
  class: "workflow-group"
}, ga = { class: "workflow-group-header" }, pa = { class: "workflow-group-title" }, ha = { class: "workflow-list" }, ya = { class: "workflow-name" }, wa = {
  key: 4,
  class: "workflow-group"
}, ka = { class: "workflow-group-header" }, ba = { class: "workflow-group-title" }, _a = { class: "workflow-list" }, $a = { class: "workflow-name" }, Ca = {
  key: 5,
  class: "workflow-group"
}, xa = { class: "workflow-group-title" }, Sa = { class: "expand-icon" }, Ia = {
  key: 0,
  class: "workflow-list"
}, Ea = { class: "workflow-name" }, Ma = {
  key: 1,
  class: "status-section"
}, za = {
  key: 0,
  class: "change-group"
}, Ta = { class: "change-group-header" }, La = { class: "change-group-title" }, Da = { class: "change-list" }, Ra = { class: "node-name" }, Na = {
  key: 0,
  class: "dev-badge"
}, Pa = {
  key: 1,
  class: "change-group"
}, Ua = { class: "change-group-header" }, Ba = { class: "change-group-title" }, Oa = { class: "change-list" }, Fa = { class: "node-name" }, Va = {
  key: 0,
  class: "dev-badge"
}, Aa = {
  key: 2,
  class: "change-group"
}, Wa = { class: "change-list" }, Ga = { class: "change-item" }, ja = { class: "node-name" }, Ha = {
  key: 3,
  class: "change-group"
}, Ka = {
  key: 2,
  class: "status-section"
}, qa = { class: "section-header-row" }, Ya = {
  key: 0,
  class: "drift-item"
}, Xa = { class: "drift-list" }, Qa = {
  key: 0,
  class: "drift-list-more"
}, Za = {
  key: 1,
  class: "drift-item"
}, Ja = { class: "drift-list" }, en = {
  key: 0,
  class: "drift-list-more"
}, tn = {
  key: 2,
  class: "drift-item"
}, sn = {
  key: 3,
  class: "drift-item"
}, on = {
  key: 3,
  class: "status-section"
}, an = { class: "info-box" }, nn = { class: "drift-list" }, ln = {
  key: 0,
  class: "drift-list-more"
}, rn = {
  key: 4,
  class: "status-section"
}, dn = { class: "warning-box" }, cn = {
  key: 5,
  class: "empty-state-inline"
}, un = { class: "modal-actions" }, mn = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const r = t, a = _(!1);
    Le(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), qt(() => r.show, (k, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", k);
    }, { immediate: !0 });
    const d = U(() => {
      var k, $, z;
      return ((z = ($ = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : z.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), f = U(() => {
      var k, $, z;
      return ((z = ($ = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : z.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), v = U(() => {
      var k, $, z;
      return ((z = ($ = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : $.synced) == null ? void 0 : z.filter((S) => {
        var E, O, L;
        const y = (L = (O = (E = r.status) == null ? void 0 : E.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : L.find((B) => B.name === S);
        return !y || y.status !== "broken";
      })) || [];
    }), p = U(() => {
      var k, $, z, S, y;
      return (k = r.status) != null && k.workflows ? ((($ = r.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((z = r.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((S = r.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || (((y = r.status.workflows.synced) == null ? void 0 : y.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var $, z, S;
      const k = ($ = r.status) == null ? void 0 : $.git_changes;
      return k ? (((z = k.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((S = k.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), l = U(() => {
      var k, $, z, S, y, E;
      return !p.value && !m.value && (($ = (k = r.status) == null ? void 0 : k.comparison) == null ? void 0 : $.is_synced) && (((z = r.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((E = (y = (S = r.status) == null ? void 0 : S.comparison) == null ? void 0 : y.disabled_nodes) == null ? void 0 : E.length) ?? 0) === 0;
    }), u = U(() => {
      var $, z;
      const k = (z = ($ = r.status) == null ? void 0 : $.git_changes) == null ? void 0 : z.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function b(k) {
      return typeof k == "string" ? k : k.name;
    }
    function h(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, $) => {
      var z, S, y, E, O, L, B, V, F, D, T, x, C, W, Y, se, fe, re, J, P, M, ae;
      return s(), I(Be, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (Z) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", Ho, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (Z) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Ko, [
              e("div", qo, [
                g(He, { level: "4" }, {
                  default: i(() => [...$[8] || ($[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(Ie, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              p.value ? (s(), o("div", Yo, [
                e("div", Xo, [
                  g(He, { level: "4" }, {
                    default: i(() => [...$[9] || ($[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (Z) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                d.value.length ? (s(), o("div", Qo, [
                  e("div", Zo, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Jo, "BROKEN (COMMITTED) (" + n(d.value.length) + ")", 1)
                  ]),
                  e("div", ea, [
                    (s(!0), o(G, null, ee(d.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", ta, n(Z.name), 1),
                      e("span", sa, n(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (s(), o("div", oa, [
                  e("div", aa, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", na, "BROKEN (UNCOMMITTED) (" + n(f.value.length) + ")", 1)
                  ]),
                  e("div", la, [
                    (s(!0), o(G, null, ee(f.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", ia, n(Z.name), 1),
                      e("span", ra, n(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (S = (z = t.status.workflows) == null ? void 0 : z.new) != null && S.length ? (s(), o("div", da, [
                  e("div", ca, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", ua, "NEW (" + n(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", ma, [
                    (s(!0), o(G, null, ee(t.status.workflows.new, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", va, n(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (E = (y = t.status.workflows) == null ? void 0 : y.modified) != null && E.length ? (s(), o("div", fa, [
                  e("div", ga, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", pa, "MODIFIED (" + n(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", ha, [
                    (s(!0), o(G, null, ee(t.status.workflows.modified, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", ya, n(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (L = (O = t.status.workflows) == null ? void 0 : O.deleted) != null && L.length ? (s(), o("div", wa, [
                  e("div", ka, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ba, "DELETED (" + n(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", _a, [
                    (s(!0), o(G, null, ee(t.status.workflows.deleted, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", $a, n(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (s(), o("div", Ca, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (Z) => a.value = !a.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", xa, "SYNCED (" + n(v.value.length) + ")", 1),
                    e("span", Sa, n(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (s(), o("div", Ia, [
                    (s(!0), o(G, null, ee(v.value, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Ea, n(Z), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (s(), o("div", Ma, [
                g(He, { level: "4" }, {
                  default: i(() => [...$[16] || ($[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (V = (B = t.status.git_changes) == null ? void 0 : B.nodes_added) != null && V.length ? (s(), o("div", za, [
                  e("div", Ta, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", La, "NODES ADDED (" + n(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Da, [
                    (s(!0), o(G, null, ee(t.status.git_changes.nodes_added, (Z) => (s(), o("div", {
                      key: b(Z),
                      class: "change-item"
                    }, [
                      e("span", Ra, n(b(Z)), 1),
                      h(Z) ? (s(), o("span", Na, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && D.length ? (s(), o("div", Pa, [
                  e("div", Ua, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ba, "NODES REMOVED (" + n(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Oa, [
                    (s(!0), o(G, null, ee(t.status.git_changes.nodes_removed, (Z) => (s(), o("div", {
                      key: b(Z),
                      class: "change-item"
                    }, [
                      e("span", Fa, n(b(Z)), 1),
                      h(Z) ? (s(), o("span", Va, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = t.status.git_changes) != null && T.workflow_changes ? (s(), o("div", Aa, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Wa, [
                    e("div", Ga, [
                      e("span", ja, n(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (x = t.status.git_changes) != null && x.has_other_changes ? (s(), o("div", Ha, [...$[20] || ($[20] = [
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
              (C = t.status.comparison) != null && C.is_synced ? c("", !0) : (s(), o("div", Ka, [
                e("div", qa, [
                  g(He, { level: "4" }, {
                    default: i(() => [...$[21] || ($[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (Z) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (Y = (W = t.status.comparison) == null ? void 0 : W.missing_nodes) != null && Y.length ? (s(), o("div", Ya, [
                  g(Ie, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Xa, [
                    (s(!0), o(G, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + n(Z), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Qa, " ... and " + n(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (fe = (se = t.status.comparison) == null ? void 0 : se.extra_nodes) != null && fe.length ? (s(), o("div", Za, [
                  g(Ie, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Ja, [
                    (s(!0), o(G, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + n(Z), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", en, " ... and " + n(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (J = (re = t.status.comparison) == null ? void 0 : re.version_mismatches) != null && J.length ? (s(), o("div", tn, [
                  g(Ie, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (P = t.status.comparison) != null && P.packages_in_sync ? c("", !0) : (s(), o("div", sn, [
                  g(Ie, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (M = t.status.comparison) == null ? void 0 : M.disabled_nodes) != null && ae.length ? (s(), o("div", on, [
                g(He, { level: "4" }, {
                  default: i(() => [...$[23] || ($[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", an, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, n(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", nn, [
                  (s(!0), o(G, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (Z) => (s(), o("div", {
                    key: Z,
                    class: "drift-list-item"
                  }, " • " + n(Z), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", ln, " ... and " + n(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", rn, [
                g(He, { level: "4" }, {
                  default: i(() => [...$[25] || ($[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", dn, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, n(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", cn, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", un, [
              g(te, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (Z) => k.$emit("close"))
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
}), vn = /* @__PURE__ */ Q(mn, [["__scopeId", "data-v-c67eed17"]]), fn = { class: "health-section-header" }, gn = { class: "suggestions-content" }, pn = { class: "suggestions-text" }, hn = {
  key: 4,
  style: { "margin-top": "var(--cg-space-3)" }
}, yn = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "start-setup", "view-environments", "create-environment"],
  setup(t, { emit: r }) {
    const a = t, d = _(!1), f = _(!1);
    function v() {
      d.value = !0;
    }
    function p() {
      d.value = !1, l("view-workflows");
    }
    function m() {
      d.value = !1, l("view-nodes");
    }
    const l = r, u = U(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), b = U(() => a.status.has_changes), h = U(() => {
      const F = a.status.git_changes;
      return F.nodes_added.length > 0 || F.nodes_removed.length > 0 || F.workflow_changes;
    }), k = U(() => a.status.has_changes || u.value), $ = U(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), z = U(() => a.status.git_changes.has_other_changes), S = U(() => {
      var F;
      return ((F = a.status.workflows.analyzed) == null ? void 0 : F.filter((D) => D.status === "broken")) || [];
    }), y = U(() => {
      var F;
      return ((F = a.status.workflows.analyzed) == null ? void 0 : F.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), E = U(() => S.value.length > 0), O = U(() => E.value || y.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced), L = U(() => {
      const F = [];
      return a.status.workflows.new.length > 0 && F.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && F.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && F.push(`${a.status.workflows.deleted.length} deleted`), F.length > 0 ? `${F.join(", ")} workflow${F.length === 1 && !F[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), B = U(() => {
      var T, x;
      const F = [], D = a.status.comparison;
      return (T = D.missing_nodes) != null && T.length && F.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (x = D.extra_nodes) != null && x.length && F.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), F.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${F.join(" and ")}.`;
    }), V = U(() => {
      var T, x;
      const F = [], D = a.status.comparison;
      return (T = D.extra_nodes) != null && T.length && (D.extra_nodes.slice(0, 3).forEach((C) => {
        F.push(`Untracked: ${C}`);
      }), D.extra_nodes.length > 3 && F.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (x = D.missing_nodes) != null && x.length && (D.missing_nodes.slice(0, 3).forEach((C) => {
        F.push(`Missing: ${C}`);
      }), D.missing_nodes.length > 3 && F.push(`...and ${D.missing_nodes.length - 3} more missing`)), F;
    });
    return (F, D) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, { title: "STATUS" })
        ]),
        content: i(() => [
          a.setupState === "no_workspace" ? (s(), I(ot, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (T) => F.$emit("start-setup"))
              }, {
                default: i(() => [...D[12] || (D[12] = [
                  w(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (s(), I(ot, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (T) => F.$emit("view-environments"))
              }, {
                default: i(() => [...D[13] || (D[13] = [
                  w(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (s(), I(ot, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: D[2] || (D[2] = (T) => F.$emit("create-environment"))
              }, {
                default: i(() => [...D[14] || (D[14] = [
                  w(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: D[4] || (D[4] = (T) => f.value = !0),
            onMouseleave: D[5] || (D[5] = (T) => f.value = !1)
          }, [
            e("div", fn, [
              g(He, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...D[15] || (D[15] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(Gs, { name: "fade" }, {
                default: i(() => [
                  f.value ? (s(), I(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...D[16] || (D[16] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(_o, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), I(Ze, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), I(Ze, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), I(Ze, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(Ze, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), I(Ze, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), I(Ze, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), I(Ze, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                z.value ? (s(), I(Ze, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !h.value && !z.value ? (s(), I(Ze, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (s(), I(Ze, {
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
                  D[18] || (D[18] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", gn, [
                    e("span", pn, n(L.value), 1),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[3] || (D[3] = (T) => F.$emit("commit-changes"))
                    }, {
                      default: i(() => [...D[17] || (D[17] = [
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
          t.status.is_detached_head ? (s(), I(ot, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: D[6] || (D[6] = (T) => F.$emit("create-branch"))
              }, {
                default: i(() => [...D[19] || (D[19] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          O.value ? (s(), o("div", hn, [
            g(He, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...D[20] || (D[20] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            S.value.length > 0 ? (s(), I(ot, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: S.value.map((T) => `${T.name} — ${T.issue_summary}`)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: D[7] || (D[7] = (T) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...D[21] || (D[21] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            y.value.length > 0 ? (s(), I(ot, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${y.value.length} workflow${y.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: y.value.map((T) => `${T.name} — ${T.models_needing_path_sync_count} model path${T.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: D[8] || (D[8] = (T) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...D[22] || (D[22] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !E.value ? (s(), I(ot, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: D[9] || (D[9] = (T) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...D[23] || (D[23] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (s(), I(ot, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: B.value,
              items: V.value
            }, {
              actions: i(() => [
                g(te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...D[24] || (D[24] = [
                    w(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: D[10] || (D[10] = (T) => F.$emit("view-nodes"))
                }, {
                  default: i(() => [...D[25] || (D[25] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !O.value && !k.value ? (s(), I(Qe, {
            key: 5,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(vn, {
        show: d.value,
        status: t.status,
        onClose: D[11] || (D[11] = (T) => d.value = !1),
        onNavigateWorkflows: p,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), wn = /* @__PURE__ */ Q(yn, [["__scopeId", "data-v-e63d612b"]]), kn = ["type", "value", "placeholder", "disabled"], bn = /* @__PURE__ */ X({
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
    const d = t, f = a, v = _(null);
    function p(m) {
      const l = m.target.value;
      f("update:modelValue", l);
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
      class: oe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: p,
      onKeyup: [
        l[0] || (l[0] = ct((u) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = ct((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (u) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (u) => m.$emit("blur"))
    }, null, 42, kn));
  }
}), Ht = /* @__PURE__ */ Q(bn, [["__scopeId", "data-v-0380d08f"]]), _n = { class: "branch-create-form" }, $n = { class: "form-actions" }, Cn = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const a = r, d = _(""), f = U(() => {
      const m = d.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      f.value && (a("create", d.value.trim()), d.value = "");
    }
    function p() {
      d.value = "", a("cancel");
    }
    return (m, l) => (s(), o("div", _n, [
      g(Ht, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: p
      }, null, 8, ["modelValue"]),
      e("div", $n, [
        g(te, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: v
        }, {
          default: i(() => [...l[1] || (l[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(te, {
          variant: "secondary",
          size: "sm",
          onClick: p
        }, {
          default: i(() => [...l[2] || (l[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), xn = /* @__PURE__ */ Q(Cn, [["__scopeId", "data-v-7c500394"]]), Sn = { class: "branch-list-item__indicator" }, In = { class: "branch-list-item__name" }, En = {
  key: 0,
  class: "branch-list-item__actions"
}, Mn = {
  key: 0,
  class: "branch-list-item__current-label"
}, zn = /* @__PURE__ */ X({
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
      class: oe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, [
      e("span", Sn, n(t.isCurrent ? "●" : "○"), 1),
      e("span", In, n(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", En, [
        pe(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Mn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Tn = /* @__PURE__ */ Q(zn, [["__scopeId", "data-v-c6581a24"]]), Ln = {
  key: 2,
  class: "branch-list"
}, Dn = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: r }) {
    const a = r, d = _(!1);
    function f(p) {
      a("create", p), v();
    }
    function v() {
      d.value = !1;
    }
    return (p, m) => (s(), I(We, null, {
      header: i(() => [
        g(Ge, { title: "BRANCHES" }, {
          actions: i(() => [
            d.value ? c("", !0) : (s(), I(te, {
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
        d.value ? (s(), I(xn, {
          key: 0,
          onCreate: f,
          onCancel: v
        })) : c("", !0),
        t.branches.length === 0 ? (s(), I(Qe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Ln, [
          (s(!0), o(G, null, ee(t.branches, (l) => (s(), I(Tn, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), I(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => p.$emit("delete", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), I(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => p.$emit("switch", l.name)
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
}), Rn = /* @__PURE__ */ Q(Dn, [["__scopeId", "data-v-86784ddd"]]), Nn = { class: "commit-list" }, Pn = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (r, a) => (s(), o("div", Nn, [
      pe(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Un = /* @__PURE__ */ Q(Pn, [["__scopeId", "data-v-8c5ee761"]]), Bn = { class: "commit-hash" }, On = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, a = U(() => r.hash.slice(0, r.length));
    return (d, f) => (s(), o("span", Bn, n(a.value), 1));
  }
}), ks = /* @__PURE__ */ Q(On, [["__scopeId", "data-v-7c333cc6"]]), Fn = { class: "commit-message" }, Vn = { class: "commit-date" }, An = /* @__PURE__ */ X({
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
    function f() {
      a.clickable && d("click");
    }
    return (v, p) => (s(), o("div", {
      class: oe(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      g(ks, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Fn, n(t.message), 1),
      e("span", Vn, n(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = ze(() => {
        }, ["stop"]))
      }, [
        pe(v.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Wn = /* @__PURE__ */ Q(An, [["__scopeId", "data-v-dd7c621b"]]), Gn = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, a) => (s(), I(We, null, {
      header: i(() => [
        g(Ge, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), I(Qe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), I(Un, { key: 1 }, {
          default: i(() => [
            (s(!0), o(G, null, ee(t.commits, (d) => (s(), I(Wn, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (f) => r.$emit("select", d)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => r.$emit("checkout", d),
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
}), jn = /* @__PURE__ */ Q(Gn, [["__scopeId", "data-v-981c3c64"]]), ms = [
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
], Hn = {
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
}, bs = [
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
], Kn = [
  ...bs,
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
], Vt = [
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
], qn = [
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
], At = [
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
], we = {
  // Environment Management
  getEnvironments: async () => (await ye(300), [
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
    await ye(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, a) => {
    await ye(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (t) => {
    await ye(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ye(400), ms),
  getWorkflowDetails: async (t) => (await ye(300), Hn[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ye(800), {
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
    await ye(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${a}`);
  },
  setModelImportance: async (t, r, a) => {
    await ye(200), console.log(`[MOCK] Setting ${r} importance to ${a} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ye(350), bs),
  getWorkspaceModels: async () => (await ye(400), Kn),
  getModelDetails: async (t) => (await ye(200), {
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
    await ye(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await ye(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ye(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ye(350);
    const t = Vt.filter((a) => a.installed), r = Vt.filter((a) => !a.installed);
    return {
      nodes: Vt,
      total_count: Vt.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await ye(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ye(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ye(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ye(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await ye(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await ye(250), (t ? At.filter((d) => d.level === t) : At).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await ye(300);
    const a = [...At, ...At.map((f) => ({
      ...f,
      name: "comfygit.workspace"
    }))];
    return (t ? a.filter((f) => f.level === t) : a).slice(0, r || 100);
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
  getStatus: async () => (await ye(400), {
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
      synced: ms.filter((t) => t.status === "synced").map((t) => t.name),
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
  getCommitHistory: async (t = 10) => (await ye(300), qn.slice(0, t)),
  getBranches: async () => (await ye(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await ye(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await ye(300), {
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
    await ye(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await ye(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, a) => {
    await ye(400), console.log(`[MOCK] Updating remote ${t}: ${r}${a ? ` (push: ${a})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ye(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ye(300), {
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
  analyzeWorkflow: async (t) => (await ye(600), {
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
    await ye(800);
    const d = [], f = [];
    return r.forEach((v, p) => {
      v.action === "install" && v.package_id && d.push(v.package_id);
    }), a.forEach((v, p) => {
      v.action === "download" && v.url ? f.push({
        filename: p,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${p}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: d,
      models_to_download: f,
      estimated_time_seconds: d.length * 30 + f.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await ye(400);
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
    await ye(400);
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
function ye(t) {
  return new Promise((r) => setTimeout(r, t));
}
function Mt() {
  return !0;
}
const Ce = {
  initState: "idle",
  initProgress: 0,
  initMessage: "No initialization in progress",
  initStartTime: null,
  modelsFound: 0
}, Se = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, Wt = [
  { id: "init_structure", endTime: 300, progress: 5, message: "Creating environment structure..." },
  { id: "resolve_version", endTime: 800, progress: 10, message: "Resolving ComfyUI version..." },
  { id: "clone_comfyui", endTime: 2800, progress: 25, message: "Cloning ComfyUI..." },
  { id: "configure_environment", endTime: 3300, progress: 30, message: "Configuring environment..." },
  { id: "create_venv", endTime: 4300, progress: 35, message: "Creating virtual environment..." },
  { id: "install_pytorch", endTime: 8300, progress: 70, message: "Installing PyTorch..." },
  { id: "configure_pytorch", endTime: 8800, progress: 75, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 11300, progress: 95, message: "Installing ComfyUI dependencies..." },
  { id: "finalize", endTime: 11800, progress: 100, message: "Finalizing environment..." }
];
function Yn() {
  if (Ce.initState === "idle" || Ce.initState === "complete" || Ce.initState === "error" || !Ce.initStartTime) return;
  const t = Date.now() - Ce.initStartTime;
  if (t < 2e3)
    Ce.initState = "creating_workspace", Ce.initProgress = Math.min(20, Math.floor(t / 100)), Ce.initMessage = "Creating workspace structure...";
  else if (t < 4e3)
    Ce.initState = "setting_models_dir", Ce.initProgress = 20 + Math.floor((t - 2e3) / 200), Ce.initMessage = "Configuring models directory...";
  else if (t < 8e3) {
    Ce.initState = "scanning_models";
    const r = Math.floor((t - 4e3) / 50);
    Ce.initProgress = 30 + Math.min(65, r);
    const a = Math.floor((t - 4e3) / 100);
    Ce.initMessage = `Scanning models (${a}/42)...`;
  } else
    Ce.initState = "complete", Ce.initProgress = 100, Ce.initMessage = "Complete! 42 models indexed", Ce.modelsFound = 42, Ce.initStartTime = null;
}
function Xn() {
  if (Se.state === "idle" || Se.state === "complete" || Se.state === "error" || !Se.startTime) return;
  const t = Date.now() - Se.startTime;
  let r = !1;
  for (const a of Wt)
    if (t < a.endTime) {
      Se.phase = a.id, Se.message = a.message;
      const d = Wt.indexOf(a) - 1, f = d >= 0 ? Wt[d].endTime : 0, v = d >= 0 ? Wt[d].progress : 0, p = a.endTime - f, l = (t - f) / p;
      Se.progress = Math.floor(v + (a.progress - v) * l), r = !0;
      break;
    }
  r || (Se.state = "complete", Se.phase = "complete", Se.progress = 100, Se.message = `Environment '${Se.envName}' created successfully`, Se.startTime = null);
}
function Ne() {
  const t = _(!1), r = _(null);
  async function a(q, be) {
    var tt;
    if (!((tt = window.app) != null && tt.api))
      throw new Error("ComfyUI API not available");
    const De = await window.app.api.fetchApi(q, be);
    if (!De.ok) {
      const pt = await De.json().catch(() => ({}));
      throw new Error(pt.error || pt.message || `Request failed: ${De.status}`);
    }
    return De.json();
  }
  async function d(q = !1) {
    return we.getStatus();
  }
  async function f(q, be = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: be })
    });
  }
  async function v(q = 10, be = 0) {
    {
      const De = await we.getCommitHistory(q);
      return {
        commits: De,
        total: De.length,
        offset: be
      };
    }
  }
  async function p(q) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function m() {
    return we.getBranches();
  }
  async function l(q) {
    return a(`/v2/comfygit/commit/${q}`);
  }
  async function u(q, be = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: be })
    });
  }
  async function b(q, be = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: be })
    });
  }
  async function h(q, be = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: be })
    });
  }
  async function k(q, be = !1) {
    return await we.deleteBranch(q), { status: "success" };
  }
  async function $() {
    return we.getEnvironments();
  }
  async function z(q) {
    return we.switchEnvironment(q);
  }
  async function S() {
    return null;
  }
  async function y(q) {
    return Se.state = "creating", Se.phase = "init_structure", Se.progress = 0, Se.message = "Creating environment structure...", Se.startTime = Date.now(), Se.envName = q.name, console.log("[MOCK] Starting environment creation:", q), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function E() {
    return Xn(), {
      state: Se.state,
      phase: Se.phase ?? void 0,
      progress: Se.progress,
      message: Se.message,
      environment_name: Se.state === "complete" && Se.envName || void 0,
      error: Se.state === "error" ? "Mock error occurred" : void 0
    };
  }
  async function O(q = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function L(q) {
    return await we.deleteEnvironment(q), { status: "success" };
  }
  async function B(q = !1) {
    return we.getWorkflows();
  }
  async function V(q) {
    return we.getWorkflowDetails(q);
  }
  async function F(q) {
    return we.resolveWorkflow(q);
  }
  async function D(q, be, De) {
    return await we.installWorkflowDeps(q, be, De), { status: "success" };
  }
  async function T(q, be, De) {
    return we.setModelImportance(q, be, De);
  }
  async function x() {
    return we.getEnvironmentModels();
  }
  async function C() {
    return we.getWorkspaceModels();
  }
  async function W(q) {
    return we.getModelDetails(q);
  }
  async function Y(q) {
    return console.log(`[MOCK] Opening file location: ${q}`), { status: "success" };
  }
  async function se(q, be) {
    return await we.updateModelSource(q, be), { status: "success", source_type: "custom" };
  }
  async function fe(q, be) {
    return { status: "success" };
  }
  async function re(q) {
    return we.deleteModel(q);
  }
  async function J(q) {
    return await we.downloadModel(q), { status: "success" };
  }
  async function P() {
    return { status: "success", changes: 0 };
  }
  async function M() {
    return { path: "~/comfygit/models" };
  }
  async function ae(q) {
    return { status: "success", path: q, models_indexed: 10 };
  }
  async function Z() {
    return we.getConfig();
  }
  async function ue(q) {
    return we.updateConfig(q);
  }
  async function xe(q, be) {
    return we.getEnvironmentLogs(q, be);
  }
  async function $e(q, be) {
    return we.getWorkspaceLogs(q, be);
  }
  async function et() {
    return we.getNodes();
  }
  async function ce(q) {
    return { status: "success", message: `Node '${q}' tracked as development` };
  }
  async function ne(q) {
    return await we.installNode(q), { status: "success" };
  }
  async function j(q) {
    return await we.updateNode(q), { status: "success" };
  }
  async function le(q) {
    return await we.uninstallNode(q), { status: "success" };
  }
  async function ie() {
    return we.getRemotes();
  }
  async function Me(q, be) {
    return await we.addRemote(q, be), { status: "success", remote_name: q };
  }
  async function Ct(q) {
    return await we.removeRemote(q), { status: "success", remote_name: q };
  }
  async function ke(q, be, De) {
    return await we.updateRemoteUrl(q, be, De), { status: "success", remote_name: q };
  }
  async function Ke(q) {
    return await we.fetchRemote(q), { status: "success", remote_name: q };
  }
  async function xt(q) {
    return we.getRemoteSyncStatus(q);
  }
  async function ut(q = "skip", be = !0) {
    return await new Promise((De) => setTimeout(De, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function Pe() {
    return Ce.initState === "complete" ? {
      state: "empty_workspace",
      workspace_path: "~/comfygit",
      default_path: "~/comfygit",
      environments: [],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models"
    } : {
      state: "no_workspace",
      workspace_path: null,
      default_path: "~/comfygit",
      environments: [],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models"
    };
  }
  async function St(q) {
    return Ce.initState = "creating_workspace", Ce.initProgress = 0, Ce.initMessage = "Starting workspace creation...", Ce.initStartTime = Date.now(), Ce.modelsFound = 0, console.log("[MOCK] Starting workspace initialization:", q), { status: "started", task_id: "mock-task-id" };
  }
  async function gt() {
    return Yn(), {
      state: Ce.initState,
      progress: Ce.initProgress,
      message: Ce.initMessage,
      models_found: Ce.initState === "complete" ? Ce.modelsFound : void 0,
      error: Ce.initState === "error" ? "Mock error occurred" : void 0
    };
  }
  async function It(q) {
    return await new Promise((be) => setTimeout(be, 200)), q.type === "workspace" ? !q.path || q.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : q.path.includes("existing") ? { valid: !1, error: "Workspace already exists at this location" } : { valid: !0 } : q.type === "models" ? !q.path || q.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : q.path.endsWith("ComfyUI") || q.path.endsWith("comfyui") ? {
      valid: !1,
      error: "This appears to be a ComfyUI installation, not a models directory",
      suggestion: q.path + "/models"
    } : { valid: !0, model_count: 42 } : { valid: !0 };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: d,
    commit: f,
    getHistory: v,
    exportEnv: p,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: u,
    createBranch: b,
    switchBranch: h,
    deleteBranch: k,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: z,
    getSwitchProgress: S,
    createEnvironment: y,
    getCreateProgress: E,
    getComfyUIReleases: O,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: V,
    resolveWorkflow: F,
    installWorkflowDeps: D,
    setModelImportance: T,
    // Model Management
    getEnvironmentModels: x,
    getWorkspaceModels: C,
    getModelDetails: W,
    openFileLocation: Y,
    addModelSource: se,
    removeModelSource: fe,
    deleteModel: re,
    downloadModel: J,
    scanWorkspaceModels: P,
    getModelsDirectory: M,
    setModelsDirectory: ae,
    // Settings
    getConfig: Z,
    updateConfig: ue,
    // Debug/Logs
    getEnvironmentLogs: xe,
    getWorkspaceLogs: $e,
    // Node Management
    getNodes: et,
    trackNodeAsDev: ce,
    installNode: ne,
    updateNode: j,
    uninstallNode: le,
    // Git Remotes
    getRemotes: ie,
    addRemote: Me,
    removeRemote: Ct,
    updateRemoteUrl: ke,
    fetchRemote: Ke,
    getRemoteSyncStatus: xt,
    // Environment Sync
    syncEnvironmentManually: ut,
    // First-Time Setup
    getSetupStatus: Pe,
    initializeWorkspace: St,
    getInitializeProgress: gt,
    validatePath: It
  };
}
async function zt(t, r = {}, a = 5e3) {
  const d = new AbortController(), f = setTimeout(() => d.abort(), a);
  try {
    const v = await fetch(t, {
      ...r,
      signal: d.signal
    });
    return clearTimeout(f), v;
  } catch (v) {
    throw clearTimeout(f), v.name === "AbortError" ? new Error(`Request timeout after ${a}ms`) : v;
  }
}
function _s() {
  const t = _(null);
  async function r() {
    try {
      const p = await zt(
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
  async function a() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const p = await zt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Health check failed");
      return await p.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function d() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const p = await zt(
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
  async function f() {
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
    restart: f,
    kill: v
  };
}
const Qn = { class: "base-modal-header" }, Zn = {
  key: 0,
  class: "base-modal-title"
}, Jn = { class: "base-modal-body" }, el = {
  key: 0,
  class: "base-modal-loading"
}, tl = {
  key: 1,
  class: "base-modal-error"
}, sl = {
  key: 0,
  class: "base-modal-footer"
}, ol = /* @__PURE__ */ X({
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
    function f() {
      a.closeOnOverlayClick && d("close");
    }
    function v(p) {
      p.key === "Escape" && a.showCloseButton && d("close");
    }
    return Le(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), hs(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (p, m) => (s(), I(Be, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: oe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Qn, [
            pe(p.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Zn, n(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => p.$emit("close"))
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
          e("div", Jn, [
            t.loading ? (s(), o("div", el, "Loading...")) : t.error ? (s(), o("div", tl, n(t.error), 1)) : pe(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (s(), o("div", sl, [
            pe(p.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), lt = /* @__PURE__ */ Q(ol, [["__scopeId", "data-v-8dab1081"]]), al = ["type", "disabled"], nl = {
  key: 0,
  class: "spinner"
}, ll = /* @__PURE__ */ X({
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
      class: oe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", nl)) : c("", !0),
      pe(r.$slots, "default", {}, void 0, !0)
    ], 10, al));
  }
}), de = /* @__PURE__ */ Q(ll, [["__scopeId", "data-v-f3452606"]]), il = {
  key: 0,
  class: "base-title-count"
}, rl = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, a) => (s(), I(ls(`h${t.level}`), {
      class: oe(["base-title", t.variant])
    }, {
      default: i(() => [
        pe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", il, "(" + n(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nt = /* @__PURE__ */ Q(rl, [["__scopeId", "data-v-5a01561d"]]), dl = ["value", "disabled"], cl = {
  key: 0,
  value: "",
  disabled: ""
}, ul = ["value"], ml = {
  key: 0,
  class: "base-select-error"
}, vl = /* @__PURE__ */ X({
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
    return (d, f) => (s(), o("div", {
      class: oe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: oe(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (v) => d.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", cl, n(t.placeholder), 1)) : c("", !0),
        (s(!0), o(G, null, ee(t.options, (v) => (s(), o("option", {
          key: r(v),
          value: r(v)
        }, n(a(v)), 9, ul))), 128))
      ], 42, dl),
      t.error ? (s(), o("span", ml, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), fl = /* @__PURE__ */ Q(vl, [["__scopeId", "data-v-7436d745"]]), gl = { class: "popover-header" }, pl = { class: "popover-title" }, hl = { class: "popover-content" }, yl = {
  key: 0,
  class: "popover-actions"
}, wl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, a) => (s(), I(Be, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: nt({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", gl, [
            e("h4", pl, n(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", hl, [
            pe(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", yl, [
            pe(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), it = /* @__PURE__ */ Q(wl, [["__scopeId", "data-v-42815ace"]]), kl = { class: "detail-section" }, bl = {
  key: 0,
  class: "empty-message"
}, _l = { class: "model-header" }, $l = { class: "model-name" }, Cl = { class: "model-details" }, xl = { class: "model-row" }, Sl = { class: "model-row" }, Il = { class: "label" }, El = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ml = { class: "node-list" }, zl = ["onClick"], Tl = {
  key: 1,
  class: "model-row"
}, Ll = { class: "value" }, Dl = {
  key: 2,
  class: "model-row"
}, Rl = { class: "value error" }, Nl = {
  key: 0,
  class: "model-actions"
}, Pl = { class: "detail-section" }, Ul = {
  key: 0,
  class: "empty-message"
}, Bl = { class: "node-name" }, Ol = {
  key: 0,
  class: "node-version"
}, Fl = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: r }) {
    const a = t, d = r, { getWorkflowDetails: f, setModelImportance: v, openFileLocation: p } = Ne(), m = _(null), l = _(!1), u = _(null), b = _(!1), h = _({}), k = _(!1), $ = _(/* @__PURE__ */ new Set()), z = [
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
        case "category_mismatch":
          return "error";
        case "missing":
        default:
          return "error";
      }
    }
    function y(T) {
      switch (T) {
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
    function E(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const x = T.hash || T.filename;
      return $.value.has(x) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function O(T) {
      return $.value.has(T);
    }
    function L(T) {
      $.value.has(T) ? $.value.delete(T) : $.value.add(T), $.value = new Set($.value);
    }
    async function B() {
      l.value = !0, u.value = null;
      try {
        m.value = await f(a.workflowName);
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function V(T, x) {
      h.value[T] = x, b.value = !0;
    }
    async function F(T) {
      try {
        await p(T);
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to open file location";
      }
    }
    async function D() {
      if (!b.value) {
        d("close");
        return;
      }
      l.value = !0, u.value = null;
      try {
        for (const [T, x] of Object.entries(h.value))
          await v(a.workflowName, T, x);
        d("refresh"), d("close");
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    return Le(B), (T, x) => (s(), o(G, null, [
      g(lt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: u.value || void 0,
        onClose: x[4] || (x[4] = (C) => d("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(G, { key: 0 }, [
            e("section", kl, [
              g(Nt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + n(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", bl, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(G, null, ee(m.value.models, (C) => {
                var W;
                return s(), o("div", {
                  key: C.hash || C.filename,
                  class: "model-card"
                }, [
                  e("div", _l, [
                    x[6] || (x[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", $l, n(C.filename), 1)
                  ]),
                  e("div", Cl, [
                    e("div", xl, [
                      x[7] || (x[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: oe(["value", S(C.status)])
                      }, n(y(C.status)), 3)
                    ]),
                    e("div", Sl, [
                      e("span", Il, [
                        x[8] || (x[8] = w(" Importance: ", -1)),
                        g(ws, {
                          size: 14,
                          title: "About importance levels",
                          onClick: x[0] || (x[0] = (Y) => k.value = !0)
                        })
                      ]),
                      g(fl, {
                        "model-value": h.value[C.filename] || C.importance,
                        options: z,
                        "onUpdate:modelValue": (Y) => V(C.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    C.loaded_by && C.loaded_by.length > 0 ? (s(), o("div", El, [
                      x[9] || (x[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Ml, [
                        (s(!0), o(G, null, ee(E(C), (Y, se) => (s(), o("div", {
                          key: `${Y.node_id}-${se}`,
                          class: "node-reference"
                        }, n(Y.node_type) + " (Node #" + n(Y.node_id) + ") ", 1))), 128)),
                        C.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => L(C.hash || C.filename)
                        }, n(O(C.hash || C.filename) ? "▼ Show less" : `▶ View all (${C.loaded_by.length})`), 9, zl)) : c("", !0)
                      ])
                    ])) : c("", !0),
                    C.size_mb ? (s(), o("div", Tl, [
                      x[10] || (x[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Ll, n(C.size_mb) + " MB", 1)
                    ])) : c("", !0),
                    C.has_category_mismatch ? (s(), o("div", Dl, [
                      x[13] || (x[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Rl, [
                        x[11] || (x[11] = w(" In ", -1)),
                        e("code", null, n(C.actual_category) + "/", 1),
                        x[12] || (x[12] = w(" but loader needs ", -1)),
                        e("code", null, n((W = C.expected_categories) == null ? void 0 : W[0]) + "/", 1)
                      ])
                    ])) : c("", !0)
                  ]),
                  C.status !== "available" ? (s(), o("div", Nl, [
                    C.status === "downloadable" ? (s(), I(de, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: x[1] || (x[1] = (Y) => d("resolve"))
                    }, {
                      default: i(() => [...x[14] || (x[14] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    })) : C.status === "category_mismatch" && C.file_path ? (s(), I(de, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => F(C.file_path)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        w(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : C.status !== "path_mismatch" ? (s(), I(de, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: x[2] || (x[2] = (Y) => d("resolve"))
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
            e("section", Pl, [
              g(Nt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + n(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Ul, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(G, null, ee(m.value.nodes, (C) => (s(), o("div", {
                key: C.name,
                class: "node-item"
              }, [
                e("span", {
                  class: oe(["node-status", C.status === "installed" ? "installed" : "missing"])
                }, n(C.status === "installed" ? "✓" : "✕"), 3),
                e("span", Bl, n(C.name), 1),
                C.version ? (s(), o("span", Ol, "v" + n(C.version), 1)) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          g(de, {
            variant: "secondary",
            onClick: x[3] || (x[3] = (C) => d("close"))
          }, {
            default: i(() => [...x[17] || (x[17] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (s(), I(de, {
            key: 0,
            variant: "primary",
            onClick: D
          }, {
            default: i(() => [...x[18] || (x[18] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(it, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[5] || (x[5] = (C) => k.value = !1)
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
}), Vl = /* @__PURE__ */ Q(Fl, [["__scopeId", "data-v-668728e6"]]), _e = ys({
  items: [],
  status: "idle"
});
let Je = null;
function $s() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Qt(t) {
  return _e.items.find((r) => r.id === t);
}
async function yt() {
  if (_e.status === "downloading") return;
  const t = _e.items.find((r) => r.status === "queued");
  if (!t) {
    _e.status = "idle";
    return;
  }
  _e.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Al(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    _e.status = "idle", yt();
  }
}
async function Al(t) {
  return new Promise((r, a) => {
    Je && (Je.close(), Je = null);
    const d = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${d}`);
    Je = f;
    let v = Date.now(), p = 0, m = !1;
    f.onmessage = (l) => {
      try {
        const u = JSON.parse(l.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), h = (b - v) / 1e3;
            if (h > 0.5) {
              const k = t.downloaded - p;
              if (t.speed = k / h, v = b, p = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), Je = null, r();
            break;
          case "error":
            m = !0, f.close(), Je = null, a(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Je = null, m || a(new Error("Connection lost"));
    };
  });
}
async function Wl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const r = await t.json();
    if (!r.pending_downloads || r.pending_downloads.length === 0) return;
    for (const a of r.pending_downloads) {
      if (_e.items.some((f) => f.url === a.url && f.filename === a.filename))
        continue;
      const d = {
        id: $s(),
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
      _e.items.push(d);
    }
    console.log(`[ComfyGit] Loaded ${r.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Bt() {
  function t(y) {
    for (const E of y) {
      if (_e.items.some(
        (B) => B.url === E.url && B.targetPath === E.targetPath && ["queued", "downloading", "paused", "completed"].includes(B.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${E.filename}`);
        continue;
      }
      const L = {
        id: $s(),
        workflow: E.workflow,
        filename: E.filename,
        url: E.url,
        targetPath: E.targetPath,
        size: E.size || 0,
        type: E.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      _e.items.push(L);
    }
    _e.status === "idle" && yt();
  }
  async function r(y) {
    const E = Qt(y);
    if (E) {
      if (E.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(E.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Je && (Je.close(), Je = null), E.status = "failed", E.error = "Cancelled by user", _e.status = "idle", yt();
      } else if (E.status === "queued") {
        const O = _e.items.findIndex((L) => L.id === y);
        O >= 0 && _e.items.splice(O, 1);
      }
    }
  }
  function a(y) {
    const E = Qt(y);
    !E || E.status !== "failed" || (E.status = "queued", E.error = void 0, E.progress = 0, E.downloaded = 0, _e.status === "idle" && yt());
  }
  function d(y) {
    const E = Qt(y);
    !E || E.status !== "paused" || (E.status = "queued", _e.status === "idle" && yt());
  }
  function f() {
    const y = _e.items.filter((E) => E.status === "paused");
    for (const E of y)
      E.status = "queued";
    _e.status === "idle" && yt();
  }
  function v(y) {
    const E = _e.items.findIndex((O) => O.id === y);
    E >= 0 && ["completed", "failed", "paused"].includes(_e.items[E].status) && _e.items.splice(E, 1);
  }
  function p() {
    _e.items = _e.items.filter((y) => y.status !== "completed");
  }
  function m() {
    _e.items = _e.items.filter((y) => y.status !== "failed");
  }
  const l = U(
    () => _e.items.find((y) => y.status === "downloading")
  ), u = U(
    () => _e.items.filter((y) => y.status === "queued")
  ), b = U(
    () => _e.items.filter((y) => y.status === "completed")
  ), h = U(
    () => _e.items.filter((y) => y.status === "failed")
  ), k = U(
    () => _e.items.filter((y) => y.status === "paused")
  ), $ = U(() => _e.items.length > 0), z = U(
    () => _e.items.filter((y) => y.status === "queued" || y.status === "downloading").length
  ), S = U(
    () => _e.items.some((y) => y.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: js(_e),
    // Computed
    currentDownload: l,
    queuedItems: u,
    completedItems: b,
    failedItems: h,
    pausedItems: k,
    hasItems: $,
    activeCount: z,
    hasPaused: S,
    // Actions
    addToQueue: t,
    cancelDownload: r,
    retryDownload: a,
    resumeDownload: d,
    resumeAllPaused: f,
    removeItem: v,
    clearCompleted: p,
    clearFailed: m,
    loadPendingDownloads: Wl
  };
}
function Cs() {
  const t = _(null), r = _(null), a = _([]), d = _([]), f = _(!1), v = _(null);
  async function p(E, O) {
    var B;
    if (!((B = window.app) != null && B.api))
      throw new Error("ComfyUI API not available");
    const L = await window.app.api.fetchApi(E, O);
    if (!L.ok) {
      const V = await L.json().catch(() => ({})), F = V.error || V.message || `Request failed: ${L.status}`;
      throw new Error(F);
    }
    return L.json();
  }
  async function m(E) {
    f.value = !0, v.value = null;
    try {
      let O;
      return Mt() && (O = await we.analyzeWorkflow(E)), t.value = O, O;
    } catch (O) {
      const L = O instanceof Error ? O.message : "Unknown error occurred";
      throw v.value = L, O;
    } finally {
      f.value = !1;
    }
  }
  async function l(E, O, L, B) {
    f.value = !0, v.value = null;
    try {
      let V;
      return Mt() && (V = await we.applyResolution(E, O, L)), r.value = V, V;
    } catch (V) {
      const F = V instanceof Error ? V.message : "Unknown error occurred";
      throw v.value = F, V;
    } finally {
      f.value = !1;
    }
  }
  async function u(E, O = 10) {
    f.value = !0, v.value = null;
    try {
      let L;
      return Mt() && (L = await we.searchNodes(E, O)), a.value = L.results, L.results;
    } catch (L) {
      const B = L instanceof Error ? L.message : "Unknown error occurred";
      throw v.value = B, L;
    } finally {
      f.value = !1;
    }
  }
  async function b(E, O = 10) {
    f.value = !0, v.value = null;
    try {
      let L;
      return Mt() && (L = await we.searchModels(E, O)), d.value = L.results, L.results;
    } catch (L) {
      const B = L instanceof Error ? L.message : "Unknown error occurred";
      throw v.value = B, L;
    } finally {
      f.value = !1;
    }
  }
  const h = ys({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function $(E) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Mt()) {
        h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
        for (let O = 0; O < h.nodesToInstall.length; O++)
          h.nodeInstallProgress.currentNode = h.nodesToInstall[O], h.nodeInstallProgress.currentIndex = O, await new Promise((L) => setTimeout(L, 500)), h.nodeInstallProgress.completedNodes.push({
            node_id: h.nodesToInstall[O],
            success: !0
          });
        return h.nodesInstalled = h.nodesToInstall, h.needsRestart = h.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: h.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await z(E);
    } catch (O) {
      const L = O instanceof Error ? O.message : "Failed to install nodes";
      throw h.installError = L, O;
    }
  }
  async function z(E) {
    var L;
    const O = await p(
      `/v2/comfygit/workflow/${E}/install`,
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
      const B = new Map(((L = O.failed) == null ? void 0 : L.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < h.nodesToInstall.length; V++) {
        const F = h.nodesToInstall[V], D = B.get(F);
        h.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !D,
          error: D
        });
      }
    }
    return h.nodesInstalled = O.nodes_installed, h.needsRestart = O.nodes_installed.length > 0, O.failed && O.failed.length > 0 && (h.installError = `${O.failed.length} package(s) failed to install`), O;
  }
  async function S(E, O, L) {
    k(), h.phase = "resolving", v.value = null;
    {
      const B = await we.applyResolution(E, O, L);
      r.value = B, h.nodesToInstall = B.nodes_to_install, h.phase = "complete";
      return;
    }
  }
  function y(E, O) {
    const { addToQueue: L } = Bt(), B = O.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: E,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return B.length > 0 && L(B), B.length;
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: a,
    modelSearchResults: d,
    isLoading: f,
    error: v,
    progress: h,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: S,
    installNodes: $,
    searchNodes: u,
    searchModels: b,
    resetProgress: k,
    queueModelDownloads: y
  };
}
const Gl = { class: "resolution-stepper" }, jl = { class: "stepper-header" }, Hl = ["onClick"], Kl = {
  key: 0,
  class: "step-icon"
}, ql = {
  key: 1,
  class: "step-number"
}, Yl = { class: "step-label" }, Xl = {
  key: 0,
  class: "step-connector"
}, Ql = { class: "stepper-content" }, Zl = /* @__PURE__ */ X({
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
    function f(u) {
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
    function p(u) {
      return f(u) ? "state-complete" : v(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function l(u) {
      d("step-change", u);
    }
    return (u, b) => (s(), o("div", Gl, [
      e("div", jl, [
        (s(!0), o(G, null, ee(t.steps, (h, k) => (s(), o("div", {
          key: h.id,
          class: oe(["step", {
            active: t.currentStep === h.id,
            completed: f(h.id),
            "in-progress": v(h.id),
            disabled: m(h.id)
          }]),
          onClick: ($) => l(h.id)
        }, [
          e("div", {
            class: oe(["step-indicator", p(h.id)])
          }, [
            f(h.id) ? (s(), o("span", Kl, "✓")) : (s(), o("span", ql, n(k + 1), 1))
          ], 2),
          e("div", Yl, n(h.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", Xl)) : c("", !0)
        ], 10, Hl))), 128))
      ]),
      e("div", Ql, [
        pe(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Jl = /* @__PURE__ */ Q(Zl, [["__scopeId", "data-v-2a7b3af8"]]), ei = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = U(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), d = U(() => `confidence-${a.value}`), f = U(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : a.value.charAt(0).toUpperCase() + a.value.slice(1));
    return (v, p) => (s(), o("span", {
      class: oe(["confidence-badge", d.value, t.size])
    }, n(f.value), 3));
  }
}), Kt = /* @__PURE__ */ Q(ei, [["__scopeId", "data-v-17ec4b80"]]), ti = { class: "node-info" }, si = { class: "node-info-text" }, oi = { class: "item-body" }, ai = {
  key: 0,
  class: "resolved-state"
}, ni = {
  key: 1,
  class: "multiple-options"
}, li = { class: "options-list" }, ii = ["onClick"], ri = ["name", "value", "checked", "onChange"], di = { class: "option-content" }, ci = { class: "option-header" }, ui = { class: "option-package-id" }, mi = {
  key: 0,
  class: "option-title"
}, vi = { class: "option-meta" }, fi = {
  key: 0,
  class: "installed-badge"
}, gi = { class: "action-buttons" }, pi = {
  key: 2,
  class: "unresolved"
}, hi = {
  key: 0,
  class: "searching-state"
}, yi = { class: "options-list" }, wi = ["onClick"], ki = ["name", "value"], bi = { class: "option-content" }, _i = { class: "option-header" }, $i = { class: "option-package-id" }, Ci = {
  key: 0,
  class: "option-description"
}, xi = { class: "option-meta" }, Si = {
  key: 0,
  class: "installed-badge"
}, Ii = {
  key: 2,
  class: "unresolved-message"
}, Ei = { class: "action-buttons" }, Mi = /* @__PURE__ */ X({
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
    function f(l, u = 80) {
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
    const p = U(() => {
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
      class: oe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", ti, [
        e("span", si, [
          u[7] || (u[7] = w("Node type: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: oe(["status-badge", p.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", oi, [
        v.value ? (s(), o("div", ai, [
          g(de, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ni, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", li, [
            (s(!0), o(G, null, ee(t.options, (b, h) => (s(), o("label", {
              key: b.package_id,
              class: oe(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (k) => m(h)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (k) => m(h)
              }, null, 40, ri),
              e("div", di, [
                e("div", ci, [
                  e("span", ui, n(b.package_id), 1),
                  g(Kt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                b.title && b.title !== b.package_id ? (s(), o("div", mi, n(b.title), 1)) : c("", !0),
                e("div", vi, [
                  b.is_installed ? (s(), o("span", fi, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, ii))), 128))
          ]),
          e("div", gi, [
            g(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(de, {
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
        ])) : (s(), o("div", pi, [
          t.isSearching ? (s(), o("div", hi, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(G, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", yi, [
              (s(!0), o(G, null, ee(t.searchResults.slice(0, 5), (b, h) => (s(), o("label", {
                key: b.package_id,
                class: "option-card",
                onClick: (k) => d("search-result-selected", b)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: h
                }, null, 8, ki),
                e("div", bi, [
                  e("div", _i, [
                    e("span", $i, n(b.package_id), 1),
                    g(Kt, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.description ? (s(), o("div", Ci, n(f(b.description)), 1)) : c("", !0),
                  e("div", xi, [
                    b.is_installed ? (s(), o("span", Si, "Already Installed")) : c("", !0)
                  ])
                ])
              ], 8, wi))), 128))
            ])
          ], 64)) : (s(), o("div", Ii, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ei, [
            g(de, {
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
            g(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...u[16] || (u[16] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(de, {
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
}), zi = /* @__PURE__ */ Q(Mi, [["__scopeId", "data-v-c2997d1d"]]), Ti = { class: "item-navigator" }, Li = { class: "nav-item-info" }, Di = ["title"], Ri = { class: "nav-controls" }, Ni = { class: "nav-arrows" }, Pi = ["disabled"], Ui = ["disabled"], Bi = { class: "nav-position" }, Oi = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const a = r;
    return (d, f) => (s(), o("div", Ti, [
      e("div", Li, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, n(t.itemName), 9, Di)
      ]),
      e("div", Ri, [
        e("div", Ni, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (v) => a("prev")),
            title: "Previous item"
          }, " ← ", 8, Pi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (v) => a("next")),
            title: "Next item"
          }, " → ", 8, Ui)
        ]),
        e("span", Bi, n(t.currentIndex + 1) + "/" + n(t.totalItems), 1)
      ])
    ]));
  }
}), xs = /* @__PURE__ */ Q(Oi, [["__scopeId", "data-v-74af7920"]]), Fi = ["type", "value", "placeholder", "disabled"], Vi = {
  key: 0,
  class: "base-input-error"
}, Ai = /* @__PURE__ */ X({
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
      class: oe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: oe(["base-input", { error: !!t.error }]),
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeyup: [
          a[1] || (a[1] = ct((d) => r.$emit("enter"), ["enter"])),
          a[2] || (a[2] = ct((d) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Fi),
      t.error ? (s(), o("span", Vi, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ Q(Ai, [["__scopeId", "data-v-9ba02cdc"]]), Wi = { class: "node-resolution-step" }, Gi = {
  key: 0,
  class: "auto-resolved-section"
}, ji = { class: "section-header" }, Hi = { class: "stat-badge" }, Ki = { class: "resolved-packages-list" }, qi = { class: "package-info" }, Yi = { class: "package-id" }, Xi = { class: "node-count" }, Qi = { class: "package-actions" }, Zi = {
  key: 0,
  class: "status-badge install"
}, Ji = {
  key: 1,
  class: "status-badge skip"
}, er = ["onClick"], tr = {
  key: 1,
  class: "section-divider"
}, sr = { class: "step-header" }, or = { class: "stat-badge" }, ar = {
  key: 1,
  class: "step-body"
}, nr = {
  key: 3,
  class: "empty-state"
}, lr = { class: "node-modal-body" }, ir = { class: "node-search-results-container" }, rr = {
  key: 0,
  class: "node-search-results"
}, dr = ["onClick"], cr = { class: "node-result-header" }, ur = { class: "node-result-package-id" }, mr = {
  key: 0,
  class: "node-result-description"
}, vr = {
  key: 1,
  class: "node-empty-state"
}, fr = {
  key: 2,
  class: "node-empty-state"
}, gr = {
  key: 3,
  class: "node-empty-state"
}, pr = { class: "node-manual-entry-modal" }, hr = { class: "node-modal-body" }, yr = { class: "node-modal-actions" }, wr = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: r }) {
    const a = t, d = r, { searchNodes: f } = Cs(), v = _(0), p = _(!1), m = _(!1), l = _(""), u = _(""), b = _([]), h = _(!1), k = _(/* @__PURE__ */ new Map()), $ = _(/* @__PURE__ */ new Set()), z = _(!1);
    function S() {
      z.value && P(), z.value = !1;
    }
    const y = U(() => a.nodes[v.value]), E = U(() => a.nodes.filter((ce) => a.nodeChoices.has(ce.node_type)).length), O = U(() => y.value ? k.value.get(y.value.node_type) || [] : []), L = U(() => y.value ? $.value.has(y.value.node_type) : !1);
    qt(y, async (ce) => {
      var ne;
      ce && ((ne = ce.options) != null && ne.length || k.value.has(ce.node_type) || $.value.has(ce.node_type) || a.nodeChoices.has(ce.node_type) || await B(ce.node_type));
    }, { immediate: !0 });
    async function B(ce) {
      $.value.add(ce);
      try {
        const ne = await f(ce, 5);
        k.value.set(ce, ne);
      } catch {
        k.value.set(ce, []);
      } finally {
        $.value.delete(ce);
      }
    }
    const V = U(() => a.autoResolvedPackages.filter((ce) => !a.skippedPackages.has(ce.package_id)).length);
    function F(ce) {
      return a.skippedPackages.has(ce);
    }
    function D(ce) {
      d("package-skip", ce);
    }
    const T = U(() => {
      var ne;
      if (!y.value) return "not-found";
      const ce = a.nodeChoices.get(y.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ne = y.value.options) != null && ne.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var ne;
      if (!y.value) return;
      const ce = a.nodeChoices.get(y.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return ce.package_id ? `→ ${ce.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ne = y.value.options) != null && ne.length ? `${y.value.options.length} matches` : "Not Found";
    });
    function C(ce) {
      ce >= 0 && ce < a.nodes.length && (v.value = ce);
    }
    function W() {
      y.value && d("mark-optional", y.value.node_type);
    }
    function Y() {
      y.value && d("skip", y.value.node_type);
    }
    function se(ce) {
      y.value && d("option-selected", y.value.node_type, ce);
    }
    function fe() {
      y.value && d("clear-choice", y.value.node_type);
    }
    function re() {
      y.value && (l.value = y.value.node_type, b.value = O.value, p.value = !0, ue(l.value));
    }
    function J() {
      u.value = "", m.value = !0;
    }
    function P() {
      p.value = !1, l.value = "", b.value = [];
    }
    function M() {
      m.value = !1, u.value = "";
    }
    let ae = null;
    function Z() {
      ae && clearTimeout(ae), ae = setTimeout(() => {
        ue(l.value);
      }, 300);
    }
    async function ue(ce) {
      if (!ce.trim()) {
        b.value = [];
        return;
      }
      h.value = !0;
      try {
        b.value = await f(ce, 10);
      } catch {
        b.value = [];
      } finally {
        h.value = !1;
      }
    }
    function xe(ce) {
      y.value && (d("manual-entry", y.value.node_type, ce.package_id), P());
    }
    function $e(ce) {
      y.value && d("manual-entry", y.value.node_type, ce.package_id);
    }
    function et() {
      !y.value || !u.value.trim() || (d("manual-entry", y.value.node_type, u.value.trim()), M());
    }
    return (ce, ne) => {
      var j, le;
      return s(), o("div", Wi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Gi, [
          e("div", ji, [
            ne[6] || (ne[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Hi, n(V.value) + "/" + n(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Ki, [
            (s(!0), o(G, null, ee(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", qi, [
                e("code", Yi, n(ie.package_id), 1),
                e("span", Xi, n(ie.node_types_count) + " node type" + n(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Qi, [
                F(ie.package_id) ? (s(), o("span", Ji, " SKIPPED ")) : (s(), o("span", Zi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (Me) => D(ie.package_id)
                }, n(F(ie.package_id) ? "Include" : "Skip"), 9, er)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", tr)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(G, { key: 2 }, [
          e("div", sr, [
            ne[7] || (ne[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", or, n(E.value) + "/" + n(t.nodes.length) + " resolved", 1)
          ]),
          y.value ? (s(), I(xs, {
            key: 0,
            "item-name": y.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ne[0] || (ne[0] = (ie) => C(v.value - 1)),
            onNext: ne[1] || (ne[1] = (ie) => C(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          y.value ? (s(), o("div", ar, [
            g(zi, {
              "node-type": y.value.node_type,
              "has-multiple-options": !!((j = y.value.options) != null && j.length),
              options: y.value.options,
              choice: (le = t.nodeChoices) == null ? void 0 : le.get(y.value.node_type),
              status: T.value,
              "status-label": x.value,
              "search-results": O.value,
              "is-searching": L.value,
              onMarkOptional: W,
              onSkip: Y,
              onManualEntry: J,
              onSearch: re,
              onOptionSelected: se,
              onClearChoice: fe,
              onSearchResultSelected: $e
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", nr, [...ne[8] || (ne[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), I(Be, { to: "body" }, [
          p.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ne[4] || (ne[4] = ze((ie) => z.value = !0, ["self"])),
            onMouseup: ze(S, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ne[3] || (ne[3] = (ie) => z.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ne[9] || (ne[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", lr, [
                g(Xe, {
                  modelValue: l.value,
                  "onUpdate:modelValue": ne[2] || (ne[2] = (ie) => l.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                e("div", ir, [
                  b.value.length > 0 ? (s(), o("div", rr, [
                    (s(!0), o(G, null, ee(b.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (Me) => xe(ie)
                    }, [
                      e("div", cr, [
                        e("code", ur, n(ie.package_id), 1),
                        ie.match_confidence ? (s(), I(Kt, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : c("", !0)
                      ]),
                      ie.description ? (s(), o("div", mr, n(ie.description), 1)) : c("", !0)
                    ], 8, dr))), 128))
                  ])) : h.value ? (s(), o("div", vr, "Searching...")) : l.value ? (s(), o("div", fr, 'No packages found matching "' + n(l.value) + '"', 1)) : (s(), o("div", gr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : c("", !0)
        ])),
        (s(), I(Be, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ze(M, ["self"])
          }, [
            e("div", pr, [
              e("div", { class: "node-modal-header" }, [
                ne[10] || (ne[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", hr, [
                g(Xe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": ne[5] || (ne[5] = (ie) => u.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", yr, [
                  g(de, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: i(() => [...ne[11] || (ne[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(de, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: et
                  }, {
                    default: i(() => [...ne[12] || (ne[12] = [
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
}), kr = /* @__PURE__ */ Q(wr, [["__scopeId", "data-v-281581bc"]]), br = { class: "node-info" }, _r = { class: "node-info-text" }, $r = { class: "item-body" }, Cr = {
  key: 0,
  class: "resolved-state"
}, xr = {
  key: 1,
  class: "multiple-options"
}, Sr = { class: "options-list" }, Ir = ["onClick"], Er = ["name", "value", "checked", "onChange"], Mr = { class: "option-content" }, zr = { class: "option-header" }, Tr = { class: "option-filename" }, Lr = { class: "option-meta" }, Dr = { class: "option-size" }, Rr = { class: "option-category" }, Nr = { class: "option-path" }, Pr = { class: "action-buttons" }, Ur = {
  key: 2,
  class: "unresolved"
}, Br = { class: "action-buttons" }, Or = /* @__PURE__ */ X({
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
    const a = t, d = r, f = U(() => !!a.choice);
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
    function p(l) {
      d("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const u = l / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, u) => (s(), o("div", {
      class: oe(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", br, [
        e("span", _r, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: oe(["status-badge", v.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", $r, [
        f.value ? (s(), o("div", Cr, [
          g(de, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", xr, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Sr, [
            (s(!0), o(G, null, ee(t.options, (b, h) => (s(), o("label", {
              key: b.model.hash,
              class: oe(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (k) => p(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (k) => p(h)
              }, null, 40, Er),
              e("div", Mr, [
                e("div", zr, [
                  e("span", Tr, n(b.model.filename), 1),
                  g(Kt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Lr, [
                  e("span", Dr, n(m(b.model.size)), 1),
                  e("span", Rr, n(b.model.category), 1)
                ]),
                e("div", Nr, n(b.model.relative_path), 1)
              ])
            ], 10, Ir))), 128))
          ]),
          e("div", Pr, [
            g(de, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(de, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => d("download-url"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(de, {
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
        ])) : (s(), o("div", Ur, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Br, [
            g(de, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => d("search"))
            }, {
              default: i(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => d("download-url"))
            }, {
              default: i(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(de, {
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
}), Fr = /* @__PURE__ */ Q(Or, [["__scopeId", "data-v-8a82fefa"]]), Vr = { class: "model-resolution-step" }, Ar = { class: "step-header" }, Wr = { class: "step-info" }, Gr = { class: "step-title" }, jr = { class: "step-description" }, Hr = { class: "stat-badge" }, Kr = {
  key: 1,
  class: "step-body"
}, qr = {
  key: 2,
  class: "empty-state"
}, Yr = { class: "model-search-modal" }, Xr = { class: "model-modal-body" }, Qr = {
  key: 0,
  class: "model-search-results"
}, Zr = ["onClick"], Jr = { class: "model-result-header" }, ed = { class: "model-result-filename" }, td = { class: "model-result-meta" }, sd = { class: "model-result-category" }, od = { class: "model-result-size" }, ad = {
  key: 0,
  class: "model-result-path"
}, nd = {
  key: 1,
  class: "model-no-results"
}, ld = {
  key: 2,
  class: "model-searching"
}, id = { class: "model-download-url-modal" }, rd = { class: "model-modal-body" }, dd = { class: "model-input-group" }, cd = { class: "model-input-group" }, ud = { class: "model-modal-actions" }, md = /* @__PURE__ */ X({
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
      var M;
      return P && ((M = a[P]) == null ? void 0 : M[0]) || null;
    }
    const f = t, v = r, p = _(0), m = _(!1), l = _(!1), u = _(""), b = _(""), h = _(""), k = _([]), $ = _(!1), z = U(() => f.models[p.value]), S = U(() => f.models.some((P) => P.is_download_intent)), y = U(() => f.models.filter(
      (P) => f.modelChoices.has(P.filename) || P.is_download_intent
    ).length), E = U(() => {
      var M;
      if (!z.value) return "";
      const P = d((M = z.value.reference) == null ? void 0 : M.node_type);
      return P ? `${P}/${z.value.filename}` : "";
    }), O = U(() => {
      var M;
      if (!z.value) return "not-found";
      const P = f.modelChoices.get(z.value.filename);
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
      return z.value.is_download_intent ? "download" : (M = z.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), L = U(() => {
      var M, ae;
      if (!z.value) return;
      const P = f.modelChoices.get(z.value.filename);
      if (P)
        switch (P.action) {
          case "select":
            return (M = P.selected_model) != null && M.filename ? `→ ${P.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (ae = z.value.options) != null && ae.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function B(P) {
      P >= 0 && P < f.models.length && (p.value = P);
    }
    function V() {
      z.value && v("mark-optional", z.value.filename);
    }
    function F() {
      z.value && v("skip", z.value.filename);
    }
    function D(P) {
      z.value && v("option-selected", z.value.filename, P);
    }
    function T() {
      z.value && v("clear-choice", z.value.filename);
    }
    function x() {
      z.value && (u.value = z.value.filename, m.value = !0);
    }
    function C() {
      z.value && (b.value = z.value.download_source || "", h.value = z.value.target_path || E.value, l.value = !0);
    }
    function W() {
      m.value = !1, u.value = "", k.value = [];
    }
    function Y() {
      l.value = !1, b.value = "", h.value = "";
    }
    function se() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function fe(P) {
      z.value && W();
    }
    function re() {
      !z.value || !b.value.trim() || (v("download-url", z.value.filename, b.value.trim(), h.value.trim() || void 0), Y());
    }
    function J(P) {
      if (!P) return "Unknown";
      const M = P / (1024 * 1024 * 1024);
      return M >= 1 ? `${M.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, M) => {
      var ae, Z, ue;
      return s(), o("div", Vr, [
        e("div", Ar, [
          e("div", Wr, [
            e("h3", Gr, n(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", jr, n(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Hr, n(y.value) + "/" + n(t.models.length) + " resolved", 1)
        ]),
        z.value ? (s(), I(xs, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": p.value,
          "total-items": t.models.length,
          onPrev: M[0] || (M[0] = (xe) => B(p.value - 1)),
          onNext: M[1] || (M[1] = (xe) => B(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        z.value ? (s(), o("div", Kr, [
          g(Fr, {
            filename: z.value.filename,
            "node-type": ((ae = z.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((Z = z.value.options) != null && Z.length),
            options: z.value.options,
            choice: (ue = t.modelChoices) == null ? void 0 : ue.get(z.value.filename),
            status: O.value,
            "status-label": L.value,
            onMarkOptional: V,
            onSkip: F,
            onDownloadUrl: C,
            onSearch: x,
            onOptionSelected: D,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", qr, [...M[5] || (M[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), I(Be, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(W, ["self"])
          }, [
            e("div", Yr, [
              e("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: W
                }, "✕")
              ]),
              e("div", Xr, [
                g(Xe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (xe) => u.value = xe),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", Qr, [
                  (s(!0), o(G, null, ee(k.value, (xe) => (s(), o("div", {
                    key: xe.hash,
                    class: "model-search-result-item",
                    onClick: ($e) => fe()
                  }, [
                    e("div", Jr, [
                      e("code", ed, n(xe.filename), 1)
                    ]),
                    e("div", td, [
                      e("span", sd, n(xe.category), 1),
                      e("span", od, n(J(xe.size)), 1)
                    ]),
                    xe.relative_path ? (s(), o("div", ad, n(xe.relative_path), 1)) : c("", !0)
                  ], 8, Zr))), 128))
                ])) : u.value && !$.value ? (s(), o("div", nd, ' No models found matching "' + n(u.value) + '" ', 1)) : c("", !0),
                $.value ? (s(), o("div", ld, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), I(Be, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(Y, ["self"])
          }, [
            e("div", id, [
              e("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              e("div", rd, [
                e("div", dd, [
                  M[8] || (M[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(Xe, {
                    modelValue: b.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (xe) => b.value = xe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", cd, [
                  M[9] || (M[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(Xe, {
                    modelValue: h.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (xe) => h.value = xe),
                    placeholder: E.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ud, [
                  g(de, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: i(() => [...M[10] || (M[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(de, {
                    variant: "primary",
                    disabled: !b.value.trim() || !h.value.trim(),
                    onClick: re
                  }, {
                    default: i(() => [...M[11] || (M[11] = [
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
}), vd = /* @__PURE__ */ Q(md, [["__scopeId", "data-v-c6acbada"]]), fd = { class: "applying-step" }, gd = {
  key: 0,
  class: "phase-content"
}, pd = {
  key: 1,
  class: "phase-content"
}, hd = { class: "phase-description" }, yd = { class: "overall-progress" }, wd = { class: "progress-bar" }, kd = { class: "progress-label" }, bd = { class: "install-list" }, _d = { class: "install-icon" }, $d = { key: 0 }, Cd = {
  key: 1,
  class: "spinner"
}, xd = { key: 2 }, Sd = { key: 3 }, Id = {
  key: 0,
  class: "install-error"
}, Ed = {
  key: 2,
  class: "phase-content"
}, Md = { class: "phase-header" }, zd = { class: "phase-title" }, Td = { class: "completion-summary" }, Ld = {
  key: 0,
  class: "summary-item success"
}, Dd = { class: "summary-text" }, Rd = {
  key: 1,
  class: "summary-item error"
}, Nd = { class: "summary-text" }, Pd = {
  key: 2,
  class: "failed-list"
}, Ud = { class: "failed-node-id" }, Bd = { class: "failed-error" }, Od = {
  key: 4,
  class: "summary-item success"
}, Fd = {
  key: 5,
  class: "restart-prompt"
}, Vd = {
  key: 3,
  class: "phase-content error"
}, Ad = { class: "error-message" }, Wd = /* @__PURE__ */ X({
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
    }), f = U(() => d.value.length > 0);
    function v(m, l) {
      var b, h;
      const u = (b = r.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.find((k) => k.node_id === m);
      return u ? u.success ? "complete" : "failed" : ((h = r.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === l ? "installing" : "pending";
    }
    function p(m) {
      var l, u;
      return (u = (l = r.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((b) => b.node_id === m)) == null ? void 0 : u.error;
    }
    return (m, l) => {
      var u, b, h, k;
      return s(), o("div", fd, [
        t.progress.phase === "resolving" ? (s(), o("div", gd, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", pd, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", hd, " Installing " + n((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + n(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", yd, [
            e("div", wd, [
              e("div", {
                class: "progress-fill",
                style: nt({ width: `${a.value}%` })
              }, null, 4)
            ]),
            e("span", kd, n(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + n(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", bd, [
            (s(!0), o(G, null, ee(t.progress.nodesToInstall, ($, z) => (s(), o("div", {
              key: $,
              class: oe(["install-item", v($, z)])
            }, [
              e("span", _d, [
                v($, z) === "pending" ? (s(), o("span", $d, "○")) : v($, z) === "installing" ? (s(), o("span", Cd, "◌")) : v($, z) === "complete" ? (s(), o("span", xd, "✓")) : v($, z) === "failed" ? (s(), o("span", Sd, "✗")) : c("", !0)
              ]),
              e("code", null, n($), 1),
              p($) ? (s(), o("span", Id, n(p($)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Ed, [
          e("div", Md, [
            e("span", {
              class: oe(["phase-icon", f.value ? "warning" : "success"])
            }, n(f.value ? "⚠" : "✓"), 3),
            e("h3", zd, n(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Td, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Ld, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Dd, n(t.progress.nodesInstalled.length) + " node package" + n(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Rd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Nd, n(d.value.length) + " package" + n(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Pd, [
              (s(!0), o(G, null, ee(d.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", Ud, n($.node_id), 1),
                e("span", Bd, n($.error), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = ($) => m.$emit("retry-failed"))
            }, " Retry Failed (" + n(d.value.length) + ") ", 1)) : c("", !0),
            f.value ? c("", !0) : (s(), o("div", Od, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Fd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = ($) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Vd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Ad, n(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Gd = /* @__PURE__ */ Q(Wd, [["__scopeId", "data-v-5efaae58"]]), jd = {
  key: 0,
  class: "loading-state"
}, Hd = {
  key: 1,
  class: "wizard-content"
}, Kd = {
  key: 0,
  class: "step-content"
}, qd = { class: "analysis-summary" }, Yd = { class: "analysis-header" }, Xd = { class: "summary-description" }, Qd = { class: "stats-grid" }, Zd = { class: "stat-card" }, Jd = { class: "stat-items" }, ec = {
  key: 0,
  class: "stat-item success"
}, tc = { class: "stat-count" }, sc = {
  key: 1,
  class: "stat-item info"
}, oc = { class: "stat-count" }, ac = {
  key: 2,
  class: "stat-item warning"
}, nc = { class: "stat-count" }, lc = {
  key: 3,
  class: "stat-item error"
}, ic = { class: "stat-count" }, rc = { class: "stat-card" }, dc = { class: "stat-items" }, cc = { class: "stat-item success" }, uc = { class: "stat-count" }, mc = {
  key: 0,
  class: "stat-item info"
}, vc = { class: "stat-count" }, fc = {
  key: 1,
  class: "stat-item warning"
}, gc = { class: "stat-count" }, pc = {
  key: 2,
  class: "stat-item warning"
}, hc = { class: "stat-count" }, yc = {
  key: 3,
  class: "stat-item error"
}, wc = { class: "stat-count" }, kc = {
  key: 0,
  class: "status-message warning"
}, bc = { class: "status-text" }, _c = {
  key: 1,
  class: "status-message info"
}, $c = { class: "status-text" }, Cc = {
  key: 2,
  class: "status-message info"
}, xc = { class: "status-text" }, Sc = {
  key: 3,
  class: "status-message warning"
}, Ic = { class: "status-text" }, Ec = {
  key: 4,
  class: "status-message success"
}, Mc = {
  key: 5,
  class: "category-mismatch-section"
}, zc = { class: "mismatch-list" }, Tc = { class: "mismatch-path" }, Lc = { class: "mismatch-target" }, Dc = {
  key: 3,
  class: "step-content"
}, Rc = { class: "review-summary" }, Nc = { class: "review-stats" }, Pc = { class: "review-stat" }, Uc = { class: "stat-value" }, Bc = { class: "review-stat" }, Oc = { class: "stat-value" }, Fc = { class: "review-stat" }, Vc = { class: "stat-value" }, Ac = { class: "review-stat" }, Wc = { class: "stat-value" }, Gc = {
  key: 0,
  class: "review-section"
}, jc = { class: "section-title" }, Hc = { class: "review-items" }, Kc = { class: "item-name" }, qc = { class: "item-choice" }, Yc = {
  key: 0,
  class: "choice-badge install"
}, Xc = {
  key: 1,
  class: "choice-badge skip"
}, Qc = {
  key: 1,
  class: "review-section"
}, Zc = { class: "section-title" }, Jc = { class: "review-items" }, eu = { class: "item-name" }, tu = { class: "item-choice" }, su = {
  key: 0,
  class: "choice-badge install"
}, ou = {
  key: 1,
  class: "choice-badge optional"
}, au = {
  key: 2,
  class: "choice-badge skip"
}, nu = {
  key: 1,
  class: "choice-badge pending"
}, lu = {
  key: 2,
  class: "review-section"
}, iu = { class: "section-title" }, ru = { class: "review-items" }, du = { class: "item-name" }, cu = { class: "item-choice" }, uu = {
  key: 0,
  class: "choice-badge install"
}, mu = {
  key: 1,
  class: "choice-badge download"
}, vu = {
  key: 2,
  class: "choice-badge optional"
}, fu = {
  key: 3,
  class: "choice-badge skip"
}, gu = {
  key: 4,
  class: "choice-badge skip"
}, pu = {
  key: 1,
  class: "choice-badge download"
}, hu = {
  key: 2,
  class: "choice-badge pending"
}, yu = {
  key: 3,
  class: "no-choices"
}, wu = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: r }) {
    const a = t, d = r, { analyzeWorkflow: f, applyResolution: v, installNodes: p, queueModelDownloads: m, progress: l, resetProgress: u } = Cs(), { loadPendingDownloads: b } = Bt(), { openFileLocation: h } = Ne(), k = _(null), $ = _(!1), z = _(!1), S = _(null), y = _("analysis"), E = _([]), O = _(/* @__PURE__ */ new Map()), L = _(/* @__PURE__ */ new Map()), B = _(/* @__PURE__ */ new Set()), V = U(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return (D.value || C.value) && H.push({ id: "nodes", label: "Nodes" }), (T.value || x.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), y.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), F = U(() => k.value ? k.value.stats.needs_user_input : !1), D = U(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), T = U(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), x = U(() => k.value ? k.value.stats.download_intents > 0 : !1), C = U(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), W = U(() => k.value ? k.value.nodes.resolved.length : 0), Y = U(() => k.value ? k.value.models.resolved.filter((H) => H.has_category_mismatch) : []), se = U(() => Y.value.length > 0), fe = U(() => {
      if (!k.value) return [];
      const H = k.value.nodes.resolved.filter((K) => !K.is_installed), N = /* @__PURE__ */ new Set();
      return H.filter((K) => N.has(K.package.package_id) ? !1 : (N.add(K.package.package_id), !0));
    }), re = U(() => {
      if (!k.value) return [];
      const H = k.value.nodes.resolved.filter((K) => !K.is_installed), N = /* @__PURE__ */ new Map();
      for (const K of H) {
        const ge = N.get(K.package.package_id);
        ge ? ge.node_types_count++ : N.set(K.package.package_id, {
          package_id: K.package.package_id,
          title: K.package.title,
          node_types_count: 1
        });
      }
      return Array.from(N.values());
    }), J = U(() => fe.value.filter((H) => !B.value.has(H.package.package_id))), P = U(() => k.value ? k.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), M = U(() => {
      if (!k.value) return [];
      const H = k.value.nodes.unresolved.map((K) => ({
        node_type: K.reference.node_type,
        reason: K.reason,
        is_unresolved: !0,
        options: void 0
      })), N = k.value.nodes.ambiguous.map((K) => ({
        node_type: K.reference.node_type,
        has_multiple_options: !0,
        options: K.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...H, ...N];
    }), ae = U(() => {
      if (!k.value) return [];
      const H = k.value.models.unresolved.map((K) => ({
        filename: K.reference.widget_value,
        reference: K.reference,
        reason: K.reason,
        is_unresolved: !0,
        options: void 0
      })), N = k.value.models.ambiguous.map((K) => ({
        filename: K.reference.widget_value,
        reference: K.reference,
        has_multiple_options: !0,
        options: K.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...H, ...N];
    }), Z = U(() => {
      const H = ae.value, N = P.value.map((K) => ({
        filename: K.filename,
        reference: K.reference,
        is_download_intent: !0,
        resolved_model: K.resolved_model,
        download_source: K.download_source,
        target_path: K.target_path,
        options: void 0
      }));
      return [...H, ...N];
    }), ue = U(() => {
      let H = J.value.length;
      for (const N of O.value.values())
        N.action === "install" && H++;
      for (const N of L.value.values())
        N.action === "select" && H++;
      return H;
    }), xe = U(() => {
      let H = 0;
      for (const N of L.value.values())
        N.action === "download" && H++;
      return H;
    }), $e = U(() => {
      let H = 0;
      for (const N of O.value.values())
        N.action === "optional" && H++;
      for (const N of L.value.values())
        N.action === "optional" && H++;
      return H;
    }), et = U(() => {
      let H = B.value.size;
      for (const N of O.value.values())
        N.action === "skip" && H++;
      for (const N of L.value.values())
        N.action === "skip" && H++;
      for (const N of M.value)
        O.value.has(N.node_type) || H++;
      for (const N of ae.value)
        L.value.has(N.filename) || H++;
      return H;
    }), ce = U(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, D.value) {
        const N = M.value.length, K = M.value.filter(
          (ge) => O.value.has(ge.node_type)
        ).length;
        H.nodes = { resolved: K, total: N };
      }
      if (T.value || x.value) {
        const N = Z.value.length, K = Z.value.filter(
          (ge) => L.value.has(ge.filename) || ge.is_download_intent
        ).length;
        H.models = { resolved: K, total: N };
      }
      if (H.review = { resolved: 1, total: 1 }, y.value === "applying") {
        const N = l.totalFiles || 1, K = l.completedFiles.length;
        H.applying = { resolved: K, total: N };
      }
      return H;
    });
    function ne(H) {
      y.value = H;
    }
    function j() {
      const H = V.value.findIndex((N) => N.id === y.value);
      H > 0 && (y.value = V.value[H - 1].id);
    }
    function le() {
      const H = V.value.findIndex((N) => N.id === y.value);
      H < V.value.length - 1 && (y.value = V.value[H + 1].id);
    }
    async function ie() {
      $.value = !0, S.value = null;
      try {
        k.value = await f(a.workflowName);
      } catch (H) {
        S.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function Me() {
      E.value.includes("analysis") || E.value.push("analysis"), D.value || C.value ? y.value = "nodes" : T.value || x.value ? y.value = "models" : y.value = "review";
    }
    function Ct(H) {
      O.value.set(H, { action: "optional" });
    }
    function ke(H) {
      O.value.set(H, { action: "skip" });
    }
    function Ke(H, N) {
      var ge;
      const K = M.value.find((Re) => Re.node_type === H);
      (ge = K == null ? void 0 : K.options) != null && ge[N] && O.value.set(H, {
        action: "install",
        package_id: K.options[N].package_id
      });
    }
    function xt(H, N) {
      O.value.set(H, {
        action: "install",
        package_id: N
      });
    }
    function ut(H) {
      O.value.delete(H);
    }
    function Pe(H) {
      B.value.has(H) ? B.value.delete(H) : B.value.add(H);
    }
    function St(H) {
      L.value.set(H, { action: "optional" });
    }
    function gt(H) {
      L.value.set(H, { action: "skip" });
    }
    function It(H, N) {
      var ge;
      const K = ae.value.find((Re) => Re.filename === H);
      (ge = K == null ? void 0 : K.options) != null && ge[N] && L.value.set(H, {
        action: "select",
        selected_model: K.options[N].model
      });
    }
    function q(H, N, K) {
      L.value.set(H, {
        action: "download",
        url: N,
        target_path: K
      });
    }
    function be(H) {
      L.value.delete(H);
    }
    async function De(H) {
      try {
        await h(H);
      } catch (N) {
        S.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function tt() {
      var H;
      z.value = !0, S.value = null, u(), l.phase = "resolving", y.value = "applying";
      try {
        const N = await v(a.workflowName, O.value, L.value, B.value);
        N.models_to_download && N.models_to_download.length > 0 && m(a.workflowName, N.models_to_download);
        const K = [
          ...N.nodes_to_install || [],
          ...J.value.map((Re) => Re.package.package_id)
        ];
        l.nodesToInstall = [...new Set(K)], l.nodesToInstall.length > 0 && await p(a.workflowName), l.phase = "complete", await b();
        const ge = l.installError || ((H = l.nodeInstallProgress) == null ? void 0 : H.completedNodes.some((Re) => !Re.success));
        !l.needsRestart && !ge && setTimeout(() => {
          d("refresh"), d("install"), d("close");
        }, 1500);
      } catch (N) {
        S.value = N instanceof Error ? N.message : "Failed to apply resolution", l.error = S.value, l.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    function pt() {
      d("refresh"), d("restart"), d("close");
    }
    async function Xt() {
      var N;
      const H = ((N = l.nodeInstallProgress) == null ? void 0 : N.completedNodes.filter((K) => !K.success).map((K) => K.node_id)) || [];
      if (H.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: H.length
        }, l.nodesToInstall = H, l.nodesInstalled = [], l.installError = void 0;
        try {
          await p(a.workflowName), l.phase = "complete";
        } catch (K) {
          l.error = K instanceof Error ? K.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Le(ie), (H, N) => (s(), I(lt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (K) => d("close"))
    }, {
      body: i(() => [
        $.value && !k.value ? (s(), o("div", jd, [...N[2] || (N[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Hd, [
          g(Jl, {
            steps: V.value,
            "current-step": y.value,
            "completed-steps": E.value,
            "step-stats": ce.value,
            onStepChange: ne
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          y.value === "analysis" ? (s(), o("div", Kd, [
            e("div", qd, [
              e("div", Yd, [
                N[3] || (N[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Xd, " Found " + n(k.value.stats.total_nodes) + " nodes and " + n(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Qd, [
                e("div", Zd, [
                  N[12] || (N[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Jd, [
                    W.value > 0 ? (s(), o("div", ec, [
                      N[4] || (N[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", tc, n(W.value), 1),
                      N[5] || (N[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", sc, [
                      N[6] || (N[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", oc, n(k.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", ac, [
                      N[8] || (N[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", nc, n(k.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", lc, [
                      N[10] || (N[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", ic, n(k.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", rc, [
                  N[23] || (N[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", dc, [
                    e("div", cc, [
                      N[13] || (N[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", uc, n(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      N[14] || (N[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", mc, [
                      N[15] || (N[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", vc, n(k.value.stats.download_intents), 1),
                      N[16] || (N[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    se.value ? (s(), o("div", fc, [
                      N[17] || (N[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", gc, n(Y.value.length), 1),
                      N[18] || (N[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : c("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", pc, [
                      N[19] || (N[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", hc, n(k.value.models.ambiguous.length), 1),
                      N[20] || (N[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", yc, [
                      N[21] || (N[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", wc, n(k.value.models.unresolved.length), 1),
                      N[22] || (N[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", kc, [
                N[24] || (N[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", bc, n(M.value.length + ae.value.length) + " items need your input", 1)
              ])) : C.value ? (s(), o("div", _c, [
                N[25] || (N[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", $c, n(k.value.stats.packages_needing_installation) + " package" + n(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + n(k.value.stats.nodes_needing_installation) + " node type" + n(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + n(x.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : x.value ? (s(), o("div", Cc, [
                N[26] || (N[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", xc, n(k.value.stats.download_intents) + " model" + n(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : se.value ? (s(), o("div", Sc, [
                N[27] || (N[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Ic, n(Y.value.length) + " model" + n(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Ec, [...N[28] || (N[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              se.value ? (s(), o("div", Mc, [
                N[31] || (N[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", zc, [
                  (s(!0), o(G, null, ee(Y.value, (K) => {
                    var ge, Re;
                    return s(), o("div", {
                      key: K.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Tc, n(K.actual_category) + "/" + n((ge = K.model) == null ? void 0 : ge.filename), 1),
                      N[30] || (N[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Lc, n((Re = K.expected_categories) == null ? void 0 : Re[0]) + "/", 1),
                      K.file_path ? (s(), I(de, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Oe) => De(K.file_path)
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
          y.value === "nodes" ? (s(), I(kr, {
            key: 1,
            nodes: M.value,
            "node-choices": O.value,
            "auto-resolved-packages": re.value,
            "skipped-packages": B.value,
            onMarkOptional: Ct,
            onSkip: ke,
            onOptionSelected: Ke,
            onManualEntry: xt,
            onClearChoice: ut,
            onPackageSkip: Pe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          y.value === "models" ? (s(), I(vd, {
            key: 2,
            models: Z.value,
            "model-choices": L.value,
            onMarkOptional: St,
            onSkip: gt,
            onOptionSelected: It,
            onDownloadUrl: q,
            onClearChoice: be
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          y.value === "review" ? (s(), o("div", Dc, [
            e("div", Rc, [
              N[36] || (N[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Nc, [
                e("div", Pc, [
                  e("span", Uc, n(ue.value), 1),
                  N[32] || (N[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Bc, [
                  e("span", Oc, n(xe.value), 1),
                  N[33] || (N[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Fc, [
                  e("span", Vc, n($e.value), 1),
                  N[34] || (N[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Ac, [
                  e("span", Wc, n(et.value), 1),
                  N[35] || (N[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              re.value.length > 0 ? (s(), o("div", Gc, [
                e("h4", jc, "Node Packages (" + n(re.value.length) + ")", 1),
                e("div", Hc, [
                  (s(!0), o(G, null, ee(re.value, (K) => (s(), o("div", {
                    key: K.package_id,
                    class: "review-item"
                  }, [
                    e("code", Kc, n(K.package_id), 1),
                    e("div", qc, [
                      B.value.has(K.package_id) ? (s(), o("span", Xc, "Skipped")) : (s(), o("span", Yc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              M.value.length > 0 ? (s(), o("div", Qc, [
                e("h4", Zc, "Node Choices (" + n(M.value.length) + ")", 1),
                e("div", Jc, [
                  (s(!0), o(G, null, ee(M.value, (K) => {
                    var ge, Re, Oe, mt;
                    return s(), o("div", {
                      key: K.node_type,
                      class: "review-item"
                    }, [
                      e("code", eu, n(K.node_type), 1),
                      e("div", tu, [
                        O.value.has(K.node_type) ? (s(), o(G, { key: 0 }, [
                          ((ge = O.value.get(K.node_type)) == null ? void 0 : ge.action) === "install" ? (s(), o("span", su, n((Re = O.value.get(K.node_type)) == null ? void 0 : Re.package_id), 1)) : ((Oe = O.value.get(K.node_type)) == null ? void 0 : Oe.action) === "optional" ? (s(), o("span", ou, " Optional ")) : ((mt = O.value.get(K.node_type)) == null ? void 0 : mt.action) === "skip" ? (s(), o("span", au, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", nu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              Z.value.length > 0 ? (s(), o("div", lu, [
                e("h4", iu, "Models (" + n(Z.value.length) + ")", 1),
                e("div", ru, [
                  (s(!0), o(G, null, ee(Z.value, (K) => {
                    var ge, Re, Oe, mt, ht, Ot, Ft;
                    return s(), o("div", {
                      key: K.filename,
                      class: "review-item"
                    }, [
                      e("code", du, n(K.filename), 1),
                      e("div", cu, [
                        L.value.has(K.filename) ? (s(), o(G, { key: 0 }, [
                          ((ge = L.value.get(K.filename)) == null ? void 0 : ge.action) === "select" ? (s(), o("span", uu, n((Oe = (Re = L.value.get(K.filename)) == null ? void 0 : Re.selected_model) == null ? void 0 : Oe.filename), 1)) : ((mt = L.value.get(K.filename)) == null ? void 0 : mt.action) === "download" ? (s(), o("span", mu, " Download ")) : ((ht = L.value.get(K.filename)) == null ? void 0 : ht.action) === "optional" ? (s(), o("span", vu, " Optional ")) : ((Ot = L.value.get(K.filename)) == null ? void 0 : Ot.action) === "skip" ? (s(), o("span", fu, " Skip ")) : ((Ft = L.value.get(K.filename)) == null ? void 0 : Ft.action) === "cancel_download" ? (s(), o("span", gu, " Cancel Download ")) : c("", !0)
                        ], 64)) : K.is_download_intent ? (s(), o("span", pu, " Pending Download ")) : (s(), o("span", hu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              fe.value.length === 0 && M.value.length === 0 && Z.value.length === 0 ? (s(), o("div", yu, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          y.value === "applying" ? (s(), I(Gd, {
            key: 4,
            progress: he(l),
            onRestart: pt,
            onRetryFailed: Xt
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        y.value !== "analysis" && y.value !== "applying" ? (s(), I(de, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: j
        }, {
          default: i(() => [...N[37] || (N[37] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        N[41] || (N[41] = e("div", { class: "footer-spacer" }, null, -1)),
        y.value !== "applying" || he(l).phase === "complete" || he(l).phase === "error" ? (s(), I(de, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (K) => d("close"))
        }, {
          default: i(() => [
            w(n(he(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        y.value === "analysis" ? (s(), I(de, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: Me
        }, {
          default: i(() => [...N[38] || (N[38] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        y.value === "nodes" ? (s(), I(de, {
          key: 3,
          variant: "primary",
          onClick: le
        }, {
          default: i(() => [
            w(n(T.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        y.value === "models" ? (s(), I(de, {
          key: 4,
          variant: "primary",
          onClick: le
        }, {
          default: i(() => [...N[39] || (N[39] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        y.value === "review" ? (s(), I(de, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: tt
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
}), ku = /* @__PURE__ */ Q(wu, [["__scopeId", "data-v-6276cf1d"]]), bu = { class: "search-input-wrapper" }, _u = ["value", "placeholder"], $u = /* @__PURE__ */ X({
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
    const a = t, d = r, f = _(null);
    let v;
    function p(l) {
      const u = l.target.value;
      a.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        d("update:modelValue", u);
      }, a.debounce)) : d("update:modelValue", u);
    }
    function m() {
      var l;
      d("update:modelValue", ""), d("clear"), (l = f.value) == null || l.focus();
    }
    return Le(() => {
      a.autoFocus && f.value && f.value.focus();
    }), (l, u) => (s(), o("div", bu, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: ct(m, ["escape"])
      }, null, 40, _u),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Cu = /* @__PURE__ */ Q($u, [["__scopeId", "data-v-266f857a"]]), xu = { class: "search-bar" }, Su = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, a) => (s(), o("div", xu, [
      g(Cu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => r.$emit("update:modelValue", d)),
        onClear: a[1] || (a[1] = (d) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), _t = /* @__PURE__ */ Q(Su, [["__scopeId", "data-v-3d51bbfd"]]), Iu = { class: "section-group" }, Eu = {
  key: 0,
  class: "section-content"
}, Mu = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const a = t, d = r, f = _(a.initiallyExpanded);
    function v() {
      a.collapsible && (f.value = !f.value, d("toggle", f.value));
    }
    return (p, m) => (s(), o("section", Iu, [
      g(He, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: v
      }, {
        default: i(() => [
          w(n(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (s(), o("div", Eu, [
        pe(p.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Te = /* @__PURE__ */ Q(Mu, [["__scopeId", "data-v-c48e33ed"]]), zu = { class: "item-header" }, Tu = {
  key: 0,
  class: "item-icon"
}, Lu = { class: "item-info" }, Du = {
  key: 0,
  class: "item-title"
}, Ru = {
  key: 1,
  class: "item-subtitle"
}, Nu = {
  key: 0,
  class: "item-details"
}, Pu = {
  key: 1,
  class: "item-actions"
}, Uu = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, d = U(() => a.status ? `status-${a.status}` : "");
    return (f, v) => (s(), o("div", {
      class: oe(["item-card", { clickable: t.clickable, compact: t.compact }, d.value]),
      onClick: v[0] || (v[0] = (p) => t.clickable && f.$emit("click"))
    }, [
      e("div", zu, [
        f.$slots.icon ? (s(), o("span", Tu, [
          pe(f.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Lu, [
          f.$slots.title ? (s(), o("div", Du, [
            pe(f.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          f.$slots.subtitle ? (s(), o("div", Ru, [
            pe(f.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", Nu, [
        pe(f.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      f.$slots.actions ? (s(), o("div", Pu, [
        pe(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ Q(Uu, [["__scopeId", "data-v-cc435e0e"]]), Bu = { class: "loading-state" }, Ou = { class: "loading-message" }, Fu = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, a) => (s(), o("div", Bu, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Ou, n(t.message), 1)
    ]));
  }
}), rt = /* @__PURE__ */ Q(Fu, [["__scopeId", "data-v-ad8436c9"]]), Vu = { class: "error-state" }, Au = { class: "error-message" }, Wu = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, a) => (s(), o("div", Vu, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Au, n(t.message), 1),
      t.retry ? (s(), I(te, {
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
}), dt = /* @__PURE__ */ Q(Wu, [["__scopeId", "data-v-5397be48"]]), Gu = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getWorkflows: f } = Ne();
    _s();
    const v = _([]), p = _(!1), m = _(null), l = _(""), u = _(!0), b = _(!1), h = _(!1), k = _(!1), $ = _(null), z = U(
      () => v.value.filter((J) => J.status === "broken")
    ), S = U(
      () => v.value.filter((J) => J.status === "new")
    ), y = U(
      () => v.value.filter((J) => J.status === "modified")
    ), E = U(
      () => v.value.filter((J) => J.status === "synced")
    ), O = U(() => {
      if (!l.value.trim()) return v.value;
      const J = l.value.toLowerCase();
      return v.value.filter((P) => P.name.toLowerCase().includes(J));
    }), L = U(
      () => z.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), B = U(
      () => S.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), V = U(
      () => y.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), F = U(
      () => E.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), D = U(
      () => b.value ? F.value : F.value.slice(0, 5)
    );
    async function T(J = !1) {
      p.value = !0, m.value = null;
      try {
        v.value = await f(J);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    r({ loadWorkflows: T });
    function x(J) {
      $.value = J, h.value = !0;
    }
    function C(J) {
      $.value = J, k.value = !0;
    }
    function W() {
      alert("Bulk resolution not yet implemented");
    }
    function Y() {
      d("refresh");
    }
    async function se() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function fe(J) {
      const P = [];
      return J.missing_nodes > 0 && P.push(`${J.missing_nodes} missing node${J.missing_nodes > 1 ? "s" : ""}`), J.missing_models > 0 && P.push(`${J.missing_models} missing model${J.missing_models > 1 ? "s" : ""}`), J.models_with_category_mismatch && J.models_with_category_mismatch > 0 && P.push(`${J.models_with_category_mismatch} model${J.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), J.pending_downloads && J.pending_downloads > 0 && P.push(`${J.pending_downloads} pending download${J.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function re(J) {
      const P = J.sync_state === "new" ? "New" : J.sync_state === "modified" ? "Modified" : J.sync_state === "synced" ? "Synced" : J.sync_state;
      return J.has_path_sync_issues && J.models_needing_path_sync && J.models_needing_path_sync > 0 ? `${J.models_needing_path_sync} model path${J.models_needing_path_sync > 1 ? "s" : ""} need${J.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return Le(T), (J, P) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, { title: "WORKFLOWS" }, {
            actions: i(() => [
              z.value.length > 0 ? (s(), I(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: W
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
          g(_t, {
            modelValue: l.value,
            "onUpdate:modelValue": P[0] || (P[0] = (M) => l.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          p.value ? (s(), I(rt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), I(dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            L.value.length ? (s(), I(Te, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(L.value, (M) => (s(), I(Ue, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: i(() => [...P[9] || (P[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(fe(M)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => C(M.name)
                    }, {
                      default: i(() => [...P[10] || (P[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => x(M.name)
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
            B.value.length ? (s(), I(Te, {
              key: 1,
              title: "NEW",
              count: B.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(B.value, (M) => (s(), I(Ue, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(n(M.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(n(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(re(M)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => x(M.name)
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
            V.value.length ? (s(), I(Te, {
              key: 2,
              title: "MODIFIED",
              count: V.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(V.value, (M) => (s(), I(Ue, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...P[13] || (P[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(n(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(re(M)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => x(M.name)
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
            F.value.length ? (s(), I(Te, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: P[2] || (P[2] = (M) => u.value = M)
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(D.value, (M) => (s(), I(Ue, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(n(M.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(n(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(re(M)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => x(M.name)
                    }, {
                      default: i(() => [...P[15] || (P[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && F.value.length > 5 ? (s(), I(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (M) => b.value = !0),
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
            O.value.length ? c("", !0) : (s(), I(Qe, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && $.value ? (s(), I(Vl, {
        key: 0,
        "workflow-name": $.value,
        onClose: P[3] || (P[3] = (M) => h.value = !1),
        onResolve: P[4] || (P[4] = (M) => C($.value)),
        onRefresh: P[5] || (P[5] = (M) => d("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      k.value && $.value ? (s(), I(ku, {
        key: 1,
        "workflow-name": $.value,
        onClose: P[6] || (P[6] = (M) => k.value = !1),
        onInstall: Y,
        onRefresh: P[7] || (P[7] = (M) => d("refresh")),
        onRestart: se
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), ju = /* @__PURE__ */ Q(Gu, [["__scopeId", "data-v-591d06d5"]]), Hu = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: oe(["summary-bar", t.variant])
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ Q(Hu, [["__scopeId", "data-v-ccb7816e"]]), Ku = {
  key: 0,
  class: "model-details"
}, qu = { class: "detail-section" }, Yu = { class: "detail-row" }, Xu = { class: "detail-value mono" }, Qu = { class: "detail-row" }, Zu = { class: "detail-value mono" }, Ju = { class: "detail-row" }, em = { class: "detail-value mono" }, tm = { class: "detail-row" }, sm = { class: "detail-value" }, om = { class: "detail-row" }, am = { class: "detail-value" }, nm = { class: "detail-row" }, lm = { class: "detail-value" }, im = { class: "detail-section" }, rm = { class: "section-header" }, dm = {
  key: 0,
  class: "locations-list"
}, cm = { class: "location-path mono" }, um = {
  key: 0,
  class: "location-modified"
}, mm = ["onClick"], vm = {
  key: 1,
  class: "empty-state"
}, fm = { class: "detail-section" }, gm = { class: "section-header" }, pm = {
  key: 0,
  class: "sources-list"
}, hm = { class: "source-type" }, ym = ["href"], wm = ["disabled", "onClick"], km = {
  key: 1,
  class: "empty-state"
}, bm = { class: "add-source-form" }, _m = ["disabled"], $m = {
  key: 2,
  class: "source-error"
}, Cm = {
  key: 3,
  class: "source-success"
}, xm = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, { getModelDetails: d, addModelSource: f, removeModelSource: v, openFileLocation: p } = Ne(), m = _(null), l = _(!0), u = _(null), b = _(""), h = _(!1), k = _(null), $ = _(null), z = _(null), S = _(null);
    let y = null;
    function E(T, x = "success", C = 2e3) {
      y && clearTimeout(y), S.value = { message: T, type: x }, y = setTimeout(() => {
        S.value = null;
      }, C);
    }
    function O(T) {
      if (!T) return "Unknown";
      const x = 1024 * 1024 * 1024, C = 1024 * 1024;
      return T >= x ? `${(T / x).toFixed(1)} GB` : T >= C ? `${(T / C).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function L(T) {
      navigator.clipboard.writeText(T), E("Copied to clipboard!");
    }
    async function B(T) {
      try {
        await p(T), E("Opening file location...");
      } catch {
        E("Failed to open location", "error");
      }
    }
    async function V() {
      if (!(!b.value.trim() || !m.value)) {
        h.value = !0, $.value = null, z.value = null;
        try {
          await f(m.value.hash, b.value.trim()), z.value = "Source added successfully!", b.value = "", await D();
        } catch (T) {
          $.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function F(T) {
      if (m.value) {
        k.value = T, $.value = null, z.value = null;
        try {
          await v(m.value.hash, T), E("Source removed"), await D();
        } catch (x) {
          $.value = x instanceof Error ? x.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function D() {
      l.value = !0, u.value = null;
      try {
        m.value = await d(a.identifier);
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Le(D), (T, x) => {
      var C;
      return s(), o(G, null, [
        g(lt, {
          title: `Model Details: ${((C = m.value) == null ? void 0 : C.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: u.value,
          onClose: x[5] || (x[5] = (W) => T.$emit("close"))
        }, {
          body: i(() => {
            var W, Y, se, fe;
            return [
              m.value ? (s(), o("div", Ku, [
                e("section", qu, [
                  e("div", Yu, [
                    x[6] || (x[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Xu, n(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[0] || (x[0] = (re) => L(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Qu, [
                    x[7] || (x[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Zu, n(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[1] || (x[1] = (re) => L(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Ju, [
                    x[8] || (x[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", em, n(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[2] || (x[2] = (re) => L(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", tm, [
                    x[9] || (x[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", sm, n(O(m.value.size)), 1)
                  ]),
                  e("div", om, [
                    x[10] || (x[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", am, n(m.value.category), 1)
                  ]),
                  e("div", nm, [
                    x[11] || (x[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", lm, n(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", im, [
                  e("h4", rm, "Locations (" + n(((W = m.value.locations) == null ? void 0 : W.length) || 0) + ")", 1),
                  (Y = m.value.locations) != null && Y.length ? (s(), o("div", dm, [
                    (s(!0), o(G, null, ee(m.value.locations, (re, J) => (s(), o("div", {
                      key: J,
                      class: "location-item"
                    }, [
                      e("span", cm, n(re.path), 1),
                      re.modified ? (s(), o("span", um, "Modified: " + n(re.modified), 1)) : c("", !0),
                      re.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => B(re.path)
                      }, " Open File Location ", 8, mm)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", vm, "No locations found"))
                ]),
                e("section", fm, [
                  e("h4", gm, "Download Sources (" + n(((se = m.value.sources) == null ? void 0 : se.length) || 0) + ")", 1),
                  (fe = m.value.sources) != null && fe.length ? (s(), o("div", pm, [
                    (s(!0), o(G, null, ee(m.value.sources, (re, J) => (s(), o("div", {
                      key: J,
                      class: "source-item"
                    }, [
                      e("span", hm, n(re.type) + ":", 1),
                      e("a", {
                        href: re.url,
                        target: "_blank",
                        class: "source-url"
                      }, n(re.url), 9, ym),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === re.url,
                        onClick: (P) => F(re.url)
                      }, n(k.value === re.url ? "..." : "×"), 9, wm)
                    ]))), 128))
                  ])) : (s(), o("div", km, " No download sources configured ")),
                  e("div", bm, [
                    Ae(e("input", {
                      "onUpdate:modelValue": x[3] || (x[3] = (re) => b.value = re),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Rt, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || h.value,
                      onClick: V
                    }, n(h.value ? "Adding..." : "Add Source"), 9, _m)
                  ]),
                  $.value ? (s(), o("p", $m, n($.value), 1)) : c("", !0),
                  z.value ? (s(), o("p", Cm, n(z.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: x[4] || (x[4] = (W) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), I(Be, { to: "body" }, [
          S.value ? (s(), o("div", {
            key: 0,
            class: oe(["toast", S.value.type])
          }, n(S.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Ss = /* @__PURE__ */ Q(xm, [["__scopeId", "data-v-f15cbb56"]]), Sm = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironmentModels: d, getStatus: f } = Ne(), v = _([]), p = _([]), m = _("production"), l = _(!1), u = _(null), b = _(""), h = _(!1), k = _(null);
    function $() {
      h.value = !1, a("navigate", "model-index");
    }
    const z = U(
      () => v.value.reduce((D, T) => D + (T.size || 0), 0)
    ), S = U(() => {
      if (!b.value.trim()) return v.value;
      const D = b.value.toLowerCase();
      return v.value.filter((T) => T.filename.toLowerCase().includes(D));
    }), y = U(() => {
      if (!b.value.trim()) return p.value;
      const D = b.value.toLowerCase();
      return p.value.filter((T) => T.filename.toLowerCase().includes(D));
    }), E = U(() => {
      const D = {};
      for (const x of S.value) {
        const C = x.type || "other";
        D[C] || (D[C] = []), D[C].push(x);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([x], [C]) => {
        const W = T.indexOf(x), Y = T.indexOf(C);
        return W >= 0 && Y >= 0 ? W - Y : W >= 0 ? -1 : Y >= 0 ? 1 : x.localeCompare(C);
      }).map(([x, C]) => ({ type: x, models: C }));
    });
    function O(D) {
      if (!D) return "Unknown";
      const T = D / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function L(D) {
      k.value = D.hash || D.filename;
    }
    function B(D) {
      a("navigate", "model-index");
    }
    function V(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function F() {
      l.value = !0, u.value = null;
      try {
        const D = await d();
        v.value = D, p.value = [];
        const T = await f();
        m.value = T.environment || "production";
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Le(F), (D, T) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (x) => h.value = !0)
          })
        ]),
        search: i(() => [
          g(_t, {
            modelValue: b.value,
            "onUpdate:modelValue": T[1] || (T[1] = (x) => b.value = x),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), I(rt, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), I(dt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            v.value.length ? (s(), I($t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " models • " + n(O(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(G, null, ee(E.value, (x) => (s(), I(Te, {
              key: x.type,
              title: x.type.toUpperCase(),
              count: x.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(x.models, (C) => (s(), I(Ue, {
                  key: C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...T[4] || (T[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(C.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(O(C.size)), 1)
                  ]),
                  details: i(() => [
                    g(Ie, {
                      label: "Used by:",
                      value: (C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(Ie, {
                      label: "Path:",
                      value: C.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => L(C)
                    }, {
                      default: i(() => [...T[5] || (T[5] = [
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
            y.value.length ? (s(), I(Te, {
              key: 1,
              title: "MISSING",
              count: y.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(y.value, (x) => (s(), I(Ue, {
                  key: x.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...T[6] || (T[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(x.filename), 1)
                  ]),
                  subtitle: i(() => [...T[7] || (T[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var C;
                    return [
                      g(Ie, {
                        label: "Required by:",
                        value: ((C = x.workflow_names) == null ? void 0 : C.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (C) => V(x.filename)
                    }, {
                      default: i(() => [...T[8] || (T[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (C) => B(x.filename)
                    }, {
                      default: i(() => [...T[9] || (T[9] = [
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
            !S.value.length && !y.value.length ? (s(), I(Qe, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: h.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (x) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            T[10] || (T[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + n(m.value) + '"', 1),
            T[11] || (T[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: $
          }, {
            default: i(() => [...T[12] || (T[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(Ss, {
        key: 0,
        identifier: k.value,
        onClose: T[3] || (T[3] = (x) => k.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Im = /* @__PURE__ */ Q(Sm, [["__scopeId", "data-v-cb4f12b3"]]), Em = {
  key: 0,
  class: "indexing-progress"
}, Mm = { class: "progress-info" }, zm = { class: "progress-label" }, Tm = { class: "progress-count" }, Lm = { class: "progress-bar" }, Dm = { class: "modal-content" }, Rm = { class: "modal-header" }, Nm = { class: "modal-body" }, Pm = { class: "input-group" }, Um = { class: "current-path" }, Bm = { class: "input-group" }, Om = { class: "modal-footer" }, Fm = { class: "modal-content" }, Vm = { class: "modal-header" }, Am = { class: "modal-body" }, Wm = { class: "input-group" }, Gm = { class: "input-group" }, jm = { class: "modal-footer" }, Hm = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const {
      getWorkspaceModels: a,
      scanWorkspaceModels: d,
      getModelsDirectory: f,
      setModelsDirectory: v
    } = Ne(), { addToQueue: p } = Bt(), m = r, l = _([]), u = _(!1), b = _(!1), h = _(null), k = _(""), $ = _(!1), z = _(null), S = _(!1), y = _(null), E = _(""), O = _(!1), L = _(!1), B = _(""), V = _(""), F = _(null), D = U(
      () => l.value.reduce((P, M) => P + (M.size || 0), 0)
    ), T = U(() => {
      if (!k.value.trim()) return l.value;
      const P = k.value.toLowerCase();
      return l.value.filter((M) => {
        const ae = M, Z = M.sha256 || ae.sha256_hash || "";
        return M.filename.toLowerCase().includes(P) || Z.toLowerCase().includes(P);
      });
    }), x = U(() => {
      const P = {};
      for (const ae of T.value) {
        const Z = ae.type || "other";
        P[Z] || (P[Z] = []), P[Z].push(ae);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([ae], [Z]) => {
        const ue = M.indexOf(ae), xe = M.indexOf(Z);
        return ue >= 0 && xe >= 0 ? ue - xe : ue >= 0 ? -1 : xe >= 0 ? 1 : ae.localeCompare(Z);
      }).map(([ae, Z]) => ({ type: ae, models: Z }));
    });
    function C(P) {
      if (!P) return "Unknown";
      const M = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return P >= M ? `${(P / M).toFixed(1)} GB` : P >= ae ? `${(P / ae).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function W(P) {
      z.value = P.hash || P.filename;
    }
    async function Y() {
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
      if (E.value.trim()) {
        O.value = !0, h.value = null;
        try {
          const P = await v(E.value.trim());
          y.value = P.path, S.value = !1, E.value = "", await re(), console.log(`Directory changed: ${P.models_indexed} models indexed`), m("refresh");
        } catch (P) {
          h.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          O.value = !1;
        }
      }
    }
    function fe() {
      if (!B.value.trim() || !V.value.trim()) return;
      const P = V.value.split("/").pop() || "model.safetensors";
      p([{
        workflow: "__manual__",
        filename: P,
        url: B.value.trim(),
        targetPath: V.value.trim()
      }]), B.value = "", V.value = "", L.value = !1;
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
    async function J() {
      try {
        const P = await f();
        y.value = P.path;
      } catch {
      }
    }
    return Le(() => {
      re(), J();
    }), (P, M) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (ae) => $.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: Y
              }, {
                default: i(() => [
                  w(n(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (ae) => S.value = !0)
              }, {
                default: i(() => [...M[15] || (M[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (ae) => L.value = !0)
              }, {
                default: i(() => [...M[16] || (M[16] = [
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
          F.value ? (s(), o("div", Em, [
            e("div", Mm, [
              e("span", zm, n(F.value.message), 1),
              e("span", Tm, n(F.value.current) + "/" + n(F.value.total), 1)
            ]),
            e("div", Lm, [
              e("div", {
                class: "progress-fill",
                style: nt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          g(_t, {
            modelValue: k.value,
            "onUpdate:modelValue": M[3] || (M[3] = (ae) => k.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value || F.value ? (s(), I(rt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (s(), I(dt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            l.value.length ? (s(), I($t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(l.value.length) + " models • " + n(C(D.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(G, null, ee(x.value, (ae) => (s(), I(Te, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(ae.models, (Z) => (s(), I(Ue, {
                  key: Z.sha256 || Z.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...M[17] || (M[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(Z.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(C(Z.size)), 1)
                  ]),
                  details: i(() => [
                    g(Ie, {
                      label: "Hash:",
                      value: Z.hash ? Z.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ue) => W(Z)
                    }, {
                      default: i(() => [...M[18] || (M[18] = [
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
            T.value.length ? c("", !0) : (s(), I(Qe, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: M[4] || (M[4] = (ae) => $.value = !1)
      }, {
        content: i(() => [...M[19] || (M[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (s(), I(Ss, {
        key: 0,
        identifier: z.value,
        onClose: M[5] || (M[5] = (ae) => z.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), I(Be, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = ze((ae) => S.value = !1, ["self"]))
        }, [
          e("div", Dm, [
            e("div", Rm, [
              M[20] || (M[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (ae) => S.value = !1)
              }, "✕")
            ]),
            e("div", Nm, [
              e("div", Pm, [
                M[21] || (M[21] = e("label", null, "Current Directory", -1)),
                e("code", Um, n(y.value || "Not set"), 1)
              ]),
              e("div", Bm, [
                M[22] || (M[22] = e("label", null, "New Directory Path", -1)),
                g(Xe, {
                  modelValue: E.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (ae) => E.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Om, [
              g(de, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (ae) => S.value = !1)
              }, {
                default: i(() => [...M[24] || (M[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(de, {
                variant: "primary",
                disabled: !E.value.trim() || O.value,
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
      (s(), I(Be, { to: "body" }, [
        L.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = ze((ae) => L.value = !1, ["self"]))
        }, [
          e("div", Fm, [
            e("div", Vm, [
              M[25] || (M[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (ae) => L.value = !1)
              }, "✕")
            ]),
            e("div", Am, [
              e("div", Wm, [
                M[26] || (M[26] = e("label", null, "Download URL", -1)),
                g(Xe, {
                  modelValue: B.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (ae) => B.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Gm, [
                M[27] || (M[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(Xe, {
                  modelValue: V.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (ae) => V.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", jm, [
              g(de, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (ae) => L.value = !1)
              }, {
                default: i(() => [...M[29] || (M[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(de, {
                variant: "primary",
                disabled: !B.value.trim() || !V.value.trim(),
                onClick: fe
              }, {
                default: i(() => [...M[30] || (M[30] = [
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
}), Km = /* @__PURE__ */ Q(Hm, [["__scopeId", "data-v-73b78d84"]]), qm = { class: "node-details" }, Ym = { class: "status-row" }, Xm = {
  key: 0,
  class: "detail-row"
}, Qm = { class: "value" }, Zm = { class: "detail-row" }, Jm = { class: "value" }, ev = {
  key: 1,
  class: "detail-row"
}, tv = { class: "value mono" }, sv = {
  key: 2,
  class: "detail-row"
}, ov = ["href"], av = {
  key: 3,
  class: "detail-row"
}, nv = { class: "value mono small" }, lv = { class: "detail-row" }, iv = {
  key: 0,
  class: "value"
}, rv = {
  key: 1,
  class: "workflow-list"
}, dv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, d = r, f = U(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = U(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), p = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[a.node.source] || a.node.source);
    return (m, l) => (s(), I(lt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (u) => d("close"))
    }, {
      body: i(() => [
        e("div", qm, [
          e("div", Ym, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", f.value])
            }, n(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Xm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Qm, n(t.node.source === "development" ? "" : "v") + n(t.node.version), 1)
          ])) : c("", !0),
          e("div", Zm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Jm, n(p.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", ev, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", tv, n(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", sv, [
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
            ], 8, ov)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", av, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", nv, n(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", lv, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", iv, " Not used in any workflows ")) : (s(), o("div", rv, [
              (s(!0), o(G, null, ee(t.node.used_in_workflows, (u) => (s(), o("span", {
                key: u,
                class: "workflow-tag"
              }, n(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(de, {
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
}), cv = /* @__PURE__ */ Q(dv, [["__scopeId", "data-v-b342f626"]]), uv = { key: 0 }, mv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, vv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, fv = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: r }) {
    const a = r, { getNodes: d, trackNodeAsDev: f, installNode: v, uninstallNode: p } = Ne(), m = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = _(!1), u = _(null), b = _(""), h = _(!1), k = _(null), $ = U(() => {
      if (!b.value.trim()) return m.value.nodes;
      const x = b.value.toLowerCase();
      return m.value.nodes.filter(
        (C) => {
          var W, Y;
          return C.name.toLowerCase().includes(x) || ((W = C.description) == null ? void 0 : W.toLowerCase().includes(x)) || ((Y = C.repository) == null ? void 0 : Y.toLowerCase().includes(x));
        }
      );
    }), z = U(
      () => $.value.filter((x) => x.installed && x.tracked)
    ), S = U(
      () => $.value.filter((x) => !x.installed && x.tracked)
    ), y = U(
      () => $.value.filter((x) => x.installed && !x.tracked)
    );
    function E(x) {
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
    function L(x) {
      k.value = x;
    }
    function B() {
      a("open-node-manager");
    }
    async function V(x) {
      if (confirm(`Track "${x}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const C = await f(x);
          C.status === "success" ? (alert(`Node "${x}" is now tracked as development!`), await T()) : alert(`Failed to track node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error tracking node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function F(x) {
      if (confirm(`Remove untracked node "${x}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const C = await p(x);
          C.status === "success" ? (alert(`Node "${x}" removed!`), await T()) : alert(`Failed to remove node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error removing node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function D(x) {
      if (confirm(`Install node "${x}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const C = await v(x);
          C.status === "success" ? (alert(`Node "${x}" installed successfully!`), await T()) : alert(`Failed to install node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error installing node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function T() {
      l.value = !0, u.value = null;
      try {
        m.value = await d();
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Le(T), (x, C) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (W) => h.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: i(() => [...C[5] || (C[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(_t, {
            modelValue: b.value,
            "onUpdate:modelValue": C[1] || (C[1] = (W) => b.value = W),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), I(rt, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (s(), I(dt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            m.value.total_count ? (s(), I($t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(n(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(G, { key: 0 }, [
                  w(" • " + n(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (s(), o(G, { key: 1 }, [
                  w(" • " + n(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            y.value.length ? (s(), I(Te, {
              key: 1,
              title: "UNTRACKED",
              count: y.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(y.value, (W) => (s(), I(Ue, {
                  key: W.name,
                  status: "warning"
                }, {
                  icon: i(() => [...C[6] || (C[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(n(W.name), 1)
                  ]),
                  subtitle: i(() => [...C[7] || (C[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(Ie, {
                      label: "Used by:",
                      value: O(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => L(W)
                    }, {
                      default: i(() => [...C[8] || (C[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => V(W.name)
                    }, {
                      default: i(() => [...C[9] || (C[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Y) => F(W.name)
                    }, {
                      default: i(() => [...C[10] || (C[10] = [
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
            z.value.length ? (s(), I(Te, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(z.value, (W) => (s(), I(Ue, {
                  key: W.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(n(W.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(n(W.name), 1)
                  ]),
                  subtitle: i(() => [
                    W.version ? (s(), o("span", uv, n(W.source === "development" ? "" : "v") + n(W.version), 1)) : (s(), o("span", mv, "version unknown")),
                    e("span", vv, " • " + n(E(W.source)), 1)
                  ]),
                  details: i(() => [
                    g(Ie, {
                      label: "Used by:",
                      value: O(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => L(W)
                    }, {
                      default: i(() => [...C[11] || (C[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: B
                    }, {
                      default: i(() => [...C[12] || (C[12] = [
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
            S.value.length ? (s(), I(Te, {
              key: 3,
              title: "MISSING",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(S.value, (W) => (s(), I(Ue, {
                  key: W.name,
                  status: "missing"
                }, {
                  icon: i(() => [...C[13] || (C[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(n(W.name), 1)
                  ]),
                  subtitle: i(() => [...C[14] || (C[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(Ie, {
                      label: "Required by:",
                      value: O(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => L(W)
                    }, {
                      default: i(() => [...C[15] || (C[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => D(W.name)
                    }, {
                      default: i(() => [...C[16] || (C[16] = [
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
            !z.value.length && !S.value.length && !y.value.length ? (s(), I(Qe, {
              key: 4,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: C[3] || (C[3] = (W) => h.value = !1)
      }, {
        content: i(() => [...C[17] || (C[17] = [
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
          g(te, {
            variant: "primary",
            onClick: C[2] || (C[2] = (W) => h.value = !1)
          }, {
            default: i(() => [...C[18] || (C[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(cv, {
        key: 0,
        node: k.value,
        onClose: C[4] || (C[4] = (W) => k.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), gv = /* @__PURE__ */ Q(fv, [["__scopeId", "data-v-4ac1465a"]]), pv = { class: "remote-url-display" }, hv = ["title"], yv = ["title"], wv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, kv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, bv = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, a = _(!1), d = U(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const v = r.url.slice(0, Math.floor(r.maxLength * 0.6)), p = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${v}...${p}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(r.url), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, p) => (s(), o("div", pv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, n(d.value), 9, hv),
      e("button", {
        class: oe(["copy-btn", { copied: a.value }]),
        onClick: f,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (s(), o("svg", kv, [...p[1] || (p[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", wv, [...p[0] || (p[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, yv)
    ]));
  }
}), vs = /* @__PURE__ */ Q(bv, [["__scopeId", "data-v-7768a58d"]]), _v = { class: "remote-title" }, $v = {
  key: 0,
  class: "default-badge"
}, Cv = {
  key: 1,
  class: "sync-badge"
}, xv = {
  key: 0,
  class: "ahead"
}, Sv = {
  key: 1,
  class: "behind"
}, Iv = {
  key: 0,
  class: "tracking-info"
}, Ev = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const a = t, d = U(() => a.fetchingRemote === a.remote.name), f = U(() => a.remote.is_default), v = U(() => !!a.trackingBranch);
    function p(m) {
      const l = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), h = Math.floor(b / 6e4);
      if (h < 1) return "Just now";
      if (h < 60) return `${h}m ago`;
      const k = Math.floor(h / 60);
      if (k < 24) return `${k}h ago`;
      const $ = Math.floor(k / 24);
      return $ < 7 ? `${$}d ago` : l.toLocaleDateString();
    }
    return (m, l) => (s(), I(Ue, {
      status: f.value ? "synced" : void 0
    }, {
      icon: i(() => [
        w(n(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", _v, [
          e("span", null, n(t.remote.name), 1),
          f.value ? (s(), o("span", $v, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", Cv, [
            t.syncStatus.ahead > 0 ? (s(), o("span", xv, "↑" + n(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", Sv, "↓" + n(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (s(), o("span", Iv, " Tracking: " + n(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var u;
        return [
          g(Ie, { label: "Fetch:" }, {
            default: i(() => [
              g(vs, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), I(Ie, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(vs, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (s(), I(Ie, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, n(p(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        g(te, {
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
        g(te, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...l[4] || (l[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? c("", !0) : (s(), I(te, {
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
}), Mv = /* @__PURE__ */ Q(Ev, [["__scopeId", "data-v-17362e45"]]), zv = ["for"], Tv = {
  key: 0,
  class: "base-form-field-required"
}, Lv = { class: "base-form-field-input" }, Dv = {
  key: 1,
  class: "base-form-field-error"
}, Rv = {
  key: 2,
  class: "base-form-field-hint"
}, Nv = /* @__PURE__ */ X({
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
    return (d, f) => (s(), o("div", {
      class: oe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: a.value,
        class: "base-form-field-label"
      }, [
        w(n(t.label) + " ", 1),
        t.required ? (s(), o("span", Tv, "*")) : c("", !0)
      ], 8, zv)) : c("", !0),
      e("div", Lv, [
        pe(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Dv, n(t.error), 1)) : t.hint ? (s(), o("span", Rv, n(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Zt = /* @__PURE__ */ Q(Nv, [["__scopeId", "data-v-9a1cf296"]]), Pv = { class: "remote-form" }, Uv = { class: "form-header" }, Bv = { class: "form-body" }, Ov = {
  key: 0,
  class: "form-error"
}, Fv = { class: "form-actions" }, Vv = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const a = t, d = r, f = _({
      name: a.remoteName,
      fetchUrl: a.fetchUrl,
      pushUrl: a.pushUrl
    }), v = _(!1), p = _(null);
    qt(() => [a.remoteName, a.fetchUrl, a.pushUrl], () => {
      f.value = {
        name: a.remoteName,
        fetchUrl: a.fetchUrl,
        pushUrl: a.pushUrl
      };
    });
    const m = U(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || v.value)) {
        p.value = null, v.value = !0;
        try {
          d("submit", f.value);
        } catch (u) {
          p.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (u, b) => (s(), o("div", Pv, [
      e("div", Uv, [
        g(He, null, {
          default: i(() => [
            w(n(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Bv, [
        g(Zt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(Xe, {
              modelValue: f.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (h) => f.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Zt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(Xe, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (h) => f.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Zt, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(Xe, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (h) => f.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p.value ? (s(), o("div", Ov, n(p.value), 1)) : c("", !0)
      ]),
      e("div", Fv, [
        g(te, {
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
        g(te, {
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
}), Av = /* @__PURE__ */ Q(Vv, [["__scopeId", "data-v-56021b18"]]), Wv = { key: 0 }, Gv = /* @__PURE__ */ X({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: a,
      removeRemote: d,
      updateRemoteUrl: f,
      fetchRemote: v,
      getRemoteSyncStatus: p
    } = Ne(), m = _([]), l = _(null), u = _({}), b = _(!1), h = _(null), k = _(""), $ = _(!1), z = _(null), S = _(!1), y = _("add"), E = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), O = U(() => {
      if (!k.value.trim()) return m.value;
      const Y = k.value.toLowerCase();
      return m.value.filter(
        (se) => se.name.toLowerCase().includes(Y) || se.fetch_url.toLowerCase().includes(Y) || se.push_url.toLowerCase().includes(Y)
      );
    });
    function L(Y) {
      var se;
      return ((se = l.value) == null ? void 0 : se.remote) === Y;
    }
    async function B() {
      b.value = !0, h.value = null;
      try {
        const Y = await r();
        m.value = Y.remotes, l.value = Y.current_branch_tracking || null, await Promise.all(
          Y.remotes.map(async (se) => {
            const fe = await p(se.name);
            fe && (u.value[se.name] = fe);
          })
        );
      } catch (Y) {
        h.value = Y instanceof Error ? Y.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function V() {
      y.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, S.value = !0;
    }
    function F(Y) {
      const se = m.value.find((fe) => fe.name === Y);
      se && (y.value = "edit", E.value = {
        name: se.name,
        fetchUrl: se.fetch_url,
        pushUrl: se.push_url
      }, S.value = !0);
    }
    async function D(Y) {
      try {
        y.value === "add" ? await a(Y.name, Y.fetchUrl) : await f(Y.name, Y.fetchUrl, Y.pushUrl || void 0), S.value = !1, await B();
      } catch (se) {
        h.value = se instanceof Error ? se.message : "Operation failed";
      }
    }
    function T() {
      S.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function x(Y) {
      z.value = Y;
      try {
        await v(Y);
        const se = await p(Y);
        se && (u.value[Y] = se);
      } catch (se) {
        h.value = se instanceof Error ? se.message : "Fetch failed";
      } finally {
        z.value = null;
      }
    }
    async function C(Y) {
      if (confirm(`Remove remote "${Y}"?`))
        try {
          await d(Y), await B();
        } catch (se) {
          h.value = se instanceof Error ? se.message : "Failed to remove remote";
        }
    }
    function W() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return Le(B), (Y, se) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: se[0] || (se[0] = (fe) => $.value = !0)
          }, {
            actions: i(() => [
              S.value ? c("", !0) : (s(), I(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
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
          S.value ? c("", !0) : (s(), I(_t, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": se[1] || (se[1] = (fe) => k.value = fe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (s(), I(rt, {
            key: 0,
            message: "Loading remotes..."
          })) : h.value ? (s(), I(dt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            S.value ? (s(), I(Av, {
              key: 0,
              mode: y.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: D,
              onCancel: T
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !S.value ? (s(), I($t, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(m.value.length) + " remote" + n(m.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (s(), o("span", Wv, " • Tracking: " + n(l.value.remote) + "/" + n(l.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            O.value.length && !S.value ? (s(), I(Te, {
              key: 2,
              title: "REMOTES",
              count: O.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee(O.value, (fe) => {
                  var re;
                  return s(), I(Mv, {
                    key: fe.name,
                    remote: fe,
                    "sync-status": u.value[fe.name],
                    "tracking-branch": L(fe.name) ? (re = l.value) == null ? void 0 : re.branch : void 0,
                    "fetching-remote": z.value,
                    onFetch: x,
                    onEdit: F,
                    onRemove: C
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !O.value.length && !S.value ? (s(), I(Qe, {
              key: 3,
              icon: "🌐",
              message: k.value ? `No remotes match '${k.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  onClick: V
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
      g(it, {
        show: $.value,
        title: "About Git Remotes",
        onClose: se[2] || (se[2] = (fe) => $.value = !1)
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
          g(te, {
            variant: "link",
            onClick: W
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
}), jv = /* @__PURE__ */ Q(Gv, [["__scopeId", "data-v-a75719bb"]]), Hv = { class: "setting-info" }, Kv = { class: "setting-label" }, qv = {
  key: 0,
  class: "required-marker"
}, Yv = {
  key: 0,
  class: "setting-description"
}, Xv = { class: "setting-control" }, Qv = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: oe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Hv, [
        e("div", Kv, [
          w(n(t.label) + " ", 1),
          t.required ? (s(), o("span", qv, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", Yv, n(t.description), 1)) : c("", !0)
      ]),
      e("div", Xv, [
        pe(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), at = /* @__PURE__ */ Q(Qv, [["__scopeId", "data-v-cb5d236c"]]), Zv = { class: "toggle" }, Jv = ["checked", "disabled"], ef = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", Zv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, Jv),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ft = /* @__PURE__ */ Q(ef, [["__scopeId", "data-v-71c0f550"]]), tf = { class: "settings-section" }, sf = { class: "path-setting" }, of = { class: "path-value" }, af = { class: "path-setting" }, nf = { class: "path-value" }, lf = { class: "settings-section" }, rf = { class: "settings-section" }, df = { class: "settings-section" }, cf = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: a } = Ne(), d = _(!1), f = _(null), v = _(null), p = _(null), m = _(null), l = _(""), u = _(""), b = _(!0), h = _(!0), k = _(!1), $ = U(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function z() {
      d.value = !0, f.value = null;
      try {
        p.value = await r(), m.value = { ...p.value }, l.value = p.value.civitai_api_key || "", u.value = p.value.huggingface_token || "", b.value = p.value.auto_sync_models, h.value = p.value.confirm_destructive;
        const O = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = O === "true";
      } catch (O) {
        f.value = O instanceof Error ? O.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function S() {
      var O;
      v.value = null;
      try {
        const L = {};
        l.value !== (((O = m.value) == null ? void 0 : O.civitai_api_key) || "") && (L.civitai_api_key = l.value || null), await a(L), await z(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (L) {
        v.value = {
          type: "error",
          message: L instanceof Error ? L.message : "Failed to save settings"
        };
      }
    }
    function y() {
      m.value && (l.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, h.value = m.value.confirm_destructive, v.value = null);
    }
    function E(O) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(O)), console.log("[ComfyGit] Auto-refresh setting saved:", O);
    }
    return Le(z), (O, L) => (s(), I(We, null, {
      header: i(() => [
        g(Ge, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(te, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: S
            }, {
              default: i(() => [...L[5] || (L[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), I(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: y
            }, {
              default: i(() => [...L[6] || (L[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), I(rt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (s(), I(dt, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
          g(Te, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var B, V;
              return [
                e("div", tf, [
                  e("div", sf, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", of, n(((B = p.value) == null ? void 0 : B.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", af, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", nf, n(((V = p.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(Te, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", lf, [
                g(at, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Ht, {
                      modelValue: l.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (B) => l.value = B),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(at, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(Ht, {
                      modelValue: u.value,
                      "onUpdate:modelValue": L[1] || (L[1] = (B) => u.value = B),
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
          g(Te, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", rf, [
                g(at, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(ft, {
                      modelValue: k.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (B) => k.value = B),
                        E
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(Te, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", df, [
                g(at, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(ft, {
                      modelValue: b.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (B) => b.value = B),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(at, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(ft, {
                      modelValue: h.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (B) => h.value = B),
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
            default: i(() => [
              e("span", {
                style: nt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, n(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), uf = /* @__PURE__ */ Q(cf, [["__scopeId", "data-v-7861bd35"]]), mf = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = Ne(), a = _([]), d = _(!1), f = _(null), v = _(!1), p = _(null), m = U(() => a.value.length === 0 ? [] : a.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function l() {
      d.value = !0, f.value = null;
      try {
        a.value = await r(void 0, 500);
      } catch (u) {
        f.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        d.value = !1, setTimeout(() => {
          var u;
          (u = p.value) != null && u.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Le(l), (u, b) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (h) => v.value = !0)
          }, {
            actions: i(() => [
              g(te, {
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
          d.value ? (s(), I(rt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (s(), I(dt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            a.value.length === 0 ? (s(), I(Qe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(G, null, ee(m.value, (h, k) => (s(), o("div", {
                key: k,
                class: oe(`log-line log-level-${h.level.toLowerCase()}`)
              }, n(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
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
          g(te, {
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
}), vf = /* @__PURE__ */ Q(mf, [["__scopeId", "data-v-39f6a756"]]), ff = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: a } = Ne(), d = _([]), f = _(!1), v = _(null), p = _(!1), m = _("production"), l = _(null), u = U(() => d.value.length === 0 ? [] : d.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function b() {
      f.value = !0, v.value = null;
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
        f.value = !1, setTimeout(() => {
          var h;
          (h = l.value) != null && h.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Le(b), (h, k) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = ($) => p.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: f.value
              }, {
                default: i(() => [
                  w(n(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          f.value ? (s(), I(rt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), I(dt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            d.value.length === 0 ? (s(), I(Qe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(G, null, ee(u.value, ($, z) => (s(), o("div", {
                key: z,
                class: oe(`log-line log-level-${$.level.toLowerCase()}`)
              }, n($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: p.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = ($) => p.value = !1)
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
          g(te, {
            variant: "primary",
            onClick: k[1] || (k[1] = ($) => p.value = !1)
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
}), gf = /* @__PURE__ */ Q(ff, [["__scopeId", "data-v-4f1e6f72"]]), pf = { class: "env-title" }, hf = {
  key: 0,
  class: "current-badge"
}, yf = {
  key: 0,
  class: "branch-info"
}, wf = /* @__PURE__ */ X({
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
    return (r, a) => (s(), I(Ue, {
      status: t.isCurrent ? "synced" : void 0
    }, Yt({
      icon: i(() => [
        w(n(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", pf, [
          e("span", null, n(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", hf, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", yf, [
          a[0] || (a[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + n(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        pe(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          g(Ie, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          g(Ie, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          g(Ie, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), I(Ie, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), kf = /* @__PURE__ */ Q(wf, [["__scopeId", "data-v-9231917a"]]), bf = { class: "env-details" }, _f = { class: "status-row" }, $f = {
  key: 0,
  class: "detail-row"
}, Cf = { class: "value mono" }, xf = {
  key: 1,
  class: "detail-row"
}, Sf = { class: "value mono small" }, If = { class: "detail-row" }, Ef = { class: "value" }, Mf = { class: "detail-row" }, zf = { class: "value" }, Tf = { class: "detail-row" }, Lf = { class: "value" }, Df = {
  key: 2,
  class: "section-divider"
}, Rf = {
  key: 3,
  class: "detail-row"
}, Nf = { class: "value" }, Pf = {
  key: 4,
  class: "detail-row"
}, Uf = { class: "value" }, Bf = { class: "footer-actions" }, Of = /* @__PURE__ */ X({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: r }) {
    const a = r;
    function d(f) {
      if (!f) return "Unknown";
      try {
        const v = new Date(f), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(m / 6e4), u = Math.floor(m / 36e5), b = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : b < 30 ? `${b} ${b === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, v) => (s(), I(lt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (p) => a("close"))
    }, {
      body: i(() => [
        e("div", bf, [
          e("div", _f, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, n(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", $f, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Cf, n(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", xf, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Sf, n(t.environment.path), 1)
          ])) : c("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", If, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Ef, n(t.environment.workflow_count), 1)
          ]),
          e("div", Mf, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", zf, n(t.environment.node_count), 1)
          ]),
          e("div", Tf, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Lf, n(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Df)) : c("", !0),
          t.environment.created_at ? (s(), o("div", Rf, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Nf, n(d(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", Pf, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Uf, n(d(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Bf, [
          t.canDelete ? (s(), I(de, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (p) => a("delete", t.environment.name))
          }, {
            default: i(() => [...v[12] || (v[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          g(de, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (p) => a("close"))
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
}), Ff = /* @__PURE__ */ Q(Of, [["__scopeId", "data-v-59855453"]]), Is = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Es = "3.12", Ms = [
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
], zs = "auto", Vf = { class: "progress-bar" }, Af = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, a = U(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (d, f) => (s(), o("div", Vf, [
      e("div", {
        class: oe(["progress-fill", t.variant]),
        style: nt({ width: a.value })
      }, null, 6)
    ]));
  }
}), Ts = /* @__PURE__ */ Q(Af, [["__scopeId", "data-v-1beb0512"]]), Wf = { class: "task-progress" }, Gf = { class: "progress-info" }, jf = { class: "progress-percentage" }, Hf = { class: "progress-message" }, Kf = {
  key: 0,
  class: "progress-steps"
}, qf = { class: "step-icon" }, Yf = { class: "step-label" }, Xf = /* @__PURE__ */ X({
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
    const r = t;
    function a(f) {
      const v = r.steps.find((p) => p.id === f);
      return v ? r.progress >= v.progressThreshold ? "completed" : r.currentPhase === f ? "active" : "pending" : "pending";
    }
    function d(f) {
      const v = a(f);
      return v === "completed" ? "✓" : v === "active" ? "⟳" : "○";
    }
    return (f, v) => (s(), o("div", Wf, [
      g(Ts, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Gf, [
        e("span", jf, n(t.progress) + "%", 1),
        e("span", Hf, n(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Kf, [
        (s(!0), o(G, null, ee(t.steps, (p) => (s(), o("div", {
          key: p.id,
          class: oe(["step", a(p.id)])
        }, [
          e("span", qf, n(d(p.id)), 1),
          e("span", Yf, n(p.label), 1)
        ], 2))), 128))
      ])) : c("", !0)
    ]));
  }
}), os = /* @__PURE__ */ Q(Xf, [["__scopeId", "data-v-9d1de66c"]]), Qf = {
  key: 0,
  class: "create-env-form"
}, Zf = { class: "form-field" }, Jf = { class: "form-field" }, eg = ["value"], tg = { class: "form-field" }, sg = ["disabled"], og = ["value"], ag = { class: "form-field" }, ng = ["value"], lg = { class: "form-field form-field--checkbox" }, ig = { class: "form-checkbox" }, rg = {
  key: 1,
  class: "create-env-progress"
}, dg = { class: "creating-intro" }, cg = {
  key: 0,
  class: "progress-warning"
}, ug = {
  key: 1,
  class: "create-error"
}, mg = { class: "error-message" }, vg = {
  key: 1,
  class: "footer-status"
}, fg = 10, gg = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: r }) {
    const a = r, { getComfyUIReleases: d, createEnvironment: f, getCreateProgress: v } = Ne(), p = _(""), m = _(Es), l = _("latest"), u = _(zs), b = _(!1), h = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), k = _(!1), $ = _(!1), z = _({
      progress: 0,
      message: ""
    });
    let S = null, y = 0;
    const E = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], O = _(null);
    function L() {
      $.value || a("close");
    }
    async function B() {
      const x = p.value.trim();
      if (x) {
        $.value = !0, z.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const C = {
            name: x,
            python_version: m.value,
            comfyui_version: l.value,
            torch_backend: u.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, W = await f(C);
          W.status === "started" ? V() : W.status === "error" && (z.value = {
            progress: 0,
            message: W.message || "Failed to start creation",
            error: W.message
          });
        } catch (C) {
          z.value = {
            progress: 0,
            message: C instanceof Error ? C.message : "Unknown error",
            error: C instanceof Error ? C.message : "Unknown error"
          };
        }
      }
    }
    function V() {
      S || (y = 0, S = window.setInterval(async () => {
        try {
          const x = await v();
          y = 0, z.value = {
            progress: x.progress ?? 0,
            message: x.message,
            phase: x.phase,
            error: x.error
          }, x.state === "complete" ? (F(), a("created", x.environment_name || p.value.trim(), b.value)) : x.state === "error" ? (F(), z.value.error = x.error || x.message) : x.state === "idle" && $.value && (F(), z.value.error = "Creation was interrupted. Please try again.");
        } catch {
          y++, y >= fg && (F(), z.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      S && (clearInterval(S), S = null);
    }
    function D() {
      $.value = !1, z.value = { progress: 0, message: "" }, a("close");
    }
    async function T() {
      k.value = !0;
      try {
        h.value = await d();
      } catch (x) {
        console.error("Failed to load ComfyUI releases:", x);
      } finally {
        k.value = !1;
      }
    }
    return Le(async () => {
      var x;
      await Hs(), (x = O.value) == null || x.focus(), T();
    }), hs(() => {
      F();
    }), (x, C) => (s(), I(lt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !$.value,
      onClose: L
    }, {
      body: i(() => [
        $.value ? (s(), o("div", rg, [
          e("p", dg, [
            C[11] || (C[11] = w(" Creating environment ", -1)),
            e("strong", null, n(p.value), 1),
            C[12] || (C[12] = w("... ", -1))
          ]),
          g(os, {
            progress: z.value.progress,
            message: z.value.message,
            "current-phase": z.value.phase,
            variant: z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          z.value.error ? c("", !0) : (s(), o("p", cg, " This may take several minutes. Please wait... ")),
          z.value.error ? (s(), o("div", ug, [
            e("p", mg, n(z.value.error), 1)
          ])) : c("", !0)
        ])) : (s(), o("div", Qf, [
          e("div", Zf, [
            C[6] || (C[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ae(e("input", {
              ref_key: "nameInput",
              ref: O,
              "onUpdate:modelValue": C[0] || (C[0] = (W) => p.value = W),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ct(B, ["enter"])
            }, null, 544), [
              [Rt, p.value]
            ])
          ]),
          e("div", Jf, [
            C[7] || (C[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ae(e("select", {
              "onUpdate:modelValue": C[1] || (C[1] = (W) => m.value = W),
              class: "form-select"
            }, [
              (s(!0), o(G, null, ee(he(Is), (W) => (s(), o("option", {
                key: W,
                value: W
              }, n(W), 9, eg))), 128))
            ], 512), [
              [kt, m.value]
            ])
          ]),
          e("div", tg, [
            C[8] || (C[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ae(e("select", {
              "onUpdate:modelValue": C[2] || (C[2] = (W) => l.value = W),
              class: "form-select",
              disabled: k.value
            }, [
              (s(!0), o(G, null, ee(h.value, (W) => (s(), o("option", {
                key: W.tag_name,
                value: W.tag_name
              }, n(W.name), 9, og))), 128))
            ], 8, sg), [
              [kt, l.value]
            ])
          ]),
          e("div", ag, [
            C[9] || (C[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ae(e("select", {
              "onUpdate:modelValue": C[3] || (C[3] = (W) => u.value = W),
              class: "form-select"
            }, [
              (s(!0), o(G, null, ee(he(Ms), (W) => (s(), o("option", {
                key: W,
                value: W
              }, n(W) + n(W === "auto" ? " (detect GPU)" : ""), 9, ng))), 128))
            ], 512), [
              [kt, u.value]
            ])
          ]),
          e("div", lg, [
            e("label", ig, [
              Ae(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": C[4] || (C[4] = (W) => b.value = W)
              }, null, 512), [
                [es, b.value]
              ]),
              C[10] || (C[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        $.value ? (s(), o(G, { key: 1 }, [
          z.value.error ? (s(), I(de, {
            key: 0,
            variant: "secondary",
            onClick: D
          }, {
            default: i(() => [...C[15] || (C[15] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", vg, " Creating environment... "))
        ], 64)) : (s(), o(G, { key: 0 }, [
          g(de, {
            variant: "primary",
            disabled: !p.value.trim(),
            onClick: B
          }, {
            default: i(() => [...C[13] || (C[13] = [
              w(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          g(de, {
            variant: "secondary",
            onClick: C[5] || (C[5] = (W) => a("close"))
          }, {
            default: i(() => [...C[14] || (C[14] = [
              w(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), pg = /* @__PURE__ */ Q(gg, [["__scopeId", "data-v-f37eaa42"]]), hg = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getEnvironments: f } = Ne(), v = _([]), p = _(!1), m = _(null), l = _(""), u = _(!1), b = _(!1), h = _(null), k = U(
      () => v.value.find((L) => L.is_current)
    ), $ = U(() => {
      if (!l.value.trim()) return v.value;
      const L = l.value.toLowerCase();
      return v.value.filter(
        (B) => {
          var V;
          return B.name.toLowerCase().includes(L) || ((V = B.current_branch) == null ? void 0 : V.toLowerCase().includes(L));
        }
      );
    });
    function z(L, B) {
      b.value = !1, d("created", L, B);
    }
    function S() {
      b.value = !0;
    }
    function y(L) {
      h.value = L;
    }
    function E(L) {
      h.value = null, d("delete", L);
    }
    async function O() {
      p.value = !0, m.value = null;
      try {
        v.value = await f();
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        p.value = !1;
      }
    }
    return Le(O), r({
      loadEnvironments: O,
      openCreateModal: S
    }), (L, B) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (V) => u.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: i(() => [...B[6] || (B[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              g(te, {
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
          g(_t, {
            modelValue: l.value,
            "onUpdate:modelValue": B[1] || (B[1] = (V) => l.value = V),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          p.value ? (s(), I(rt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), I(dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            v.value.length ? (s(), I($t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " " + n(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                k.value ? (s(), o(G, { key: 0 }, [
                  B[8] || (B[8] = w(" • Current: ", -1)),
                  e("strong", null, n(k.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            $.value.length ? (s(), I(Te, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, ee($.value, (V) => (s(), I(kf, {
                  key: V.name,
                  "environment-name": V.name,
                  "is-current": V.is_current,
                  "current-branch": V.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    V.is_current ? c("", !0) : (s(), I(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => L.$emit("switch", V.name)
                    }, {
                      default: i(() => [...B[9] || (B[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => y(V)
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
            $.value.length ? c("", !0) : (s(), I(Qe, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(te, {
                    variant: "primary",
                    onClick: S
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
      g(it, {
        show: u.value,
        title: "About Environments",
        onClose: B[3] || (B[3] = (V) => u.value = !1)
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
          g(te, {
            variant: "secondary",
            onClick: B[2] || (B[2] = (V) => u.value = !1)
          }, {
            default: i(() => [...B[13] || (B[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (s(), I(Ff, {
        key: 0,
        environment: h.value,
        "can-delete": v.value.length > 1,
        onClose: B[4] || (B[4] = (V) => h.value = null),
        onDelete: E
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      b.value ? (s(), I(pg, {
        key: 1,
        onClose: B[5] || (B[5] = (V) => b.value = !1),
        onCreated: z
      })) : c("", !0)
    ], 64));
  }
}), yg = /* @__PURE__ */ Q(hg, [["__scopeId", "data-v-d6dc0255"]]), wg = { class: "file-path" }, kg = { class: "file-path-text" }, bg = ["title"], _g = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = _(!1);
    async function d() {
      try {
        await navigator.clipboard.writeText(r.path), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, v) => (s(), o("div", wg, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", kg, n(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: d
      }, n(a.value ? "✓" : "📋"), 9, bg)) : c("", !0)
    ]));
  }
}), $g = /* @__PURE__ */ Q(_g, [["__scopeId", "data-v-f0982173"]]), Cg = { class: "output-path-input" }, xg = { class: "export-actions" }, Sg = {
  key: 1,
  class: "export-warning"
}, Ig = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = Ne(), a = _(""), d = _(!1), f = _(null), v = _(!1);
    async function p() {
      d.value = !0, f.value = null;
      try {
        const l = await r(a.value || void 0);
        f.value = l;
      } catch (l) {
        f.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        d.value = !1;
      }
    }
    async function m() {
      var l;
      if ((l = f.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (l, u) => (s(), o(G, null, [
      g(We, null, {
        header: i(() => [
          g(Ge, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(te, {
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
          g(Te, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(Ue, { status: "synced" }, {
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
                  g(Ie, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(Ie, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(Ie, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(Ie, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Te, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(Ue, { status: "synced" }, {
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
                  e("div", Cg, [
                    g(Ht, {
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
          g(Te, { title: "EXPORT" }, {
            default: i(() => [
              e("div", xg, [
                g(te, {
                  variant: "primary",
                  size: "md",
                  loading: d.value,
                  disabled: d.value,
                  onClick: p
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
                a.value ? (s(), I(te, {
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
          f.value ? (s(), I(Te, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              g(Ue, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: i(() => [
                  w(n(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(n(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(n(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    g(Ie, { label: "Saved to:" }, {
                      default: i(() => [
                        g($g, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (s(), I(Ie, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (s(), o("div", Sg, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...u[15] || (u[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => f.value = null)
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
      g(it, {
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
}), Eg = /* @__PURE__ */ Q(Ig, [["__scopeId", "data-v-1777a9d5"]]), Mg = { class: "file-input-wrapper" }, zg = ["accept", "multiple", "disabled"], Tg = /* @__PURE__ */ X({
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
    const d = a, f = _(null);
    function v() {
      var m;
      (m = f.value) == null || m.click();
    }
    function p(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (d("change", l.files), l.value = "");
    }
    return r({
      triggerInput: v
    }), (m, l) => (s(), o("div", Mg, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: p
      }, null, 40, zg),
      g(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          pe(m.$slots, "default", {}, () => [
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
}), Lg = /* @__PURE__ */ Q(Tg, [["__scopeId", "data-v-cd192091"]]), Dg = {
  key: 0,
  class: "drop-zone-empty"
}, Rg = { class: "drop-zone-text" }, Ng = { class: "drop-zone-primary" }, Pg = { class: "drop-zone-secondary" }, Ug = { class: "drop-zone-actions" }, Bg = {
  key: 1,
  class: "drop-zone-file"
}, Og = { class: "file-info" }, Fg = { class: "file-details" }, Vg = { class: "file-name" }, Ag = { class: "file-size" }, Wg = /* @__PURE__ */ X({
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
    const a = r, d = _(!1), f = _(null), v = _(0), p = U(() => f.value !== null), m = U(() => {
      var y;
      return ((y = f.value) == null ? void 0 : y.name) || "";
    }), l = U(() => {
      if (!f.value) return "";
      const y = f.value.size;
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(y) {
      var E;
      v.value++, (E = y.dataTransfer) != null && E.types.includes("Files") && (d.value = !0);
    }
    function b(y) {
      y.dataTransfer && (y.dataTransfer.dropEffect = "copy");
    }
    function h() {
      v.value--, v.value === 0 && (d.value = !1);
    }
    function k(y) {
      var O;
      v.value = 0, d.value = !1;
      const E = (O = y.dataTransfer) == null ? void 0 : O.files;
      E && E.length > 0 && z(E[0]);
    }
    function $(y) {
      y.length > 0 && z(y[0]);
    }
    function z(y) {
      f.value = y, a("fileSelected", y);
    }
    function S() {
      f.value = null, a("clear");
    }
    return (y, E) => (s(), o("div", {
      class: oe(["file-drop-zone", { "drop-active": d.value, "has-file": p.value }]),
      onDragenter: ze(u, ["prevent"]),
      onDragover: ze(b, ["prevent"]),
      onDragleave: ze(h, ["prevent"]),
      onDrop: ze(k, ["prevent"])
    }, [
      p.value ? (s(), o("div", Bg, [
        e("div", Og, [
          E[1] || (E[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Fg, [
            e("div", Vg, n(m.value), 1),
            e("div", Ag, n(l.value), 1)
          ])
        ]),
        g(te, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: i(() => [...E[2] || (E[2] = [
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
      ])) : (s(), o("div", Dg, [
        E[0] || (E[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Rg, [
          e("p", Ng, n(t.primaryText), 1),
          e("p", Pg, n(t.secondaryText), 1)
        ]),
        e("div", Ug, [
          g(Lg, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
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
}), Gg = /* @__PURE__ */ Q(Wg, [["__scopeId", "data-v-e00abbca"]]), jg = { class: "import-preview" }, Hg = { class: "preview-header" }, Kg = {
  key: 0,
  class: "source-env"
}, qg = { class: "preview-content" }, Yg = { class: "preview-section" }, Xg = { class: "section-header" }, Qg = { class: "section-info" }, Zg = { class: "section-count" }, Jg = {
  key: 0,
  class: "item-list"
}, ep = { class: "item-name" }, tp = {
  key: 0,
  class: "item-more"
}, sp = { class: "preview-section" }, op = { class: "section-header" }, ap = { class: "section-info" }, np = { class: "section-count" }, lp = {
  key: 0,
  class: "item-list"
}, ip = { class: "item-details" }, rp = { class: "item-name" }, dp = { class: "item-meta" }, cp = {
  key: 0,
  class: "item-more"
}, up = { class: "preview-section" }, mp = { class: "section-header" }, vp = { class: "section-info" }, fp = { class: "section-count" }, gp = {
  key: 0,
  class: "item-list"
}, pp = { class: "item-name" }, hp = {
  key: 0,
  class: "item-more"
}, yp = {
  key: 0,
  class: "preview-section"
}, wp = { class: "git-info" }, kp = /* @__PURE__ */ X({
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
    const r = t, a = U(() => r.workflows.length), d = U(() => r.models.length), f = U(() => r.nodes.length);
    function v(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, m) => (s(), o("div", jg, [
      e("div", Hg, [
        g(He, null, {
          default: i(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Kg, [
          m[1] || (m[1] = w(" From: ", -1)),
          g(ss, null, {
            default: i(() => [
              w(n(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", qg, [
        e("div", Yg, [
          e("div", Xg, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Qg, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Zg, n(a.value) + " file" + n(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Jg, [
            (s(!0), o(G, null, ee(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ep, n(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", tp, " +" + n(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", sp, [
          e("div", op, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", ap, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", np, n(d.value) + " file" + n(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", lp, [
            (s(!0), o(G, null, ee(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ip, [
                e("span", rp, n(l.filename), 1),
                e("span", dp, n(v(l.size)) + " • " + n(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", cp, " +" + n(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", up, [
          e("div", mp, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", vp, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", fp, n(f.value) + " node" + n(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", gp, [
            (s(!0), o(G, null, ee(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", pp, n(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", hp, " +" + n(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", yp, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", wp, [
            t.gitBranch ? (s(), I(Ie, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(ss, null, {
                  default: i(() => [
                    w(n(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), I(Ie, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g(ks, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), bp = /* @__PURE__ */ Q(kp, [["__scopeId", "data-v-182fe113"]]), _p = { class: "import-options" }, $p = { class: "options-container" }, Cp = { class: "option-section" }, xp = { class: "conflict-options" }, Sp = ["value", "checked", "onChange"], Ip = { class: "conflict-content" }, Ep = { class: "conflict-label" }, Mp = { class: "conflict-description" }, zp = { class: "option-section" }, Tp = { class: "component-toggles" }, Lp = /* @__PURE__ */ X({
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
    return (f, v) => (s(), o("div", _p, [
      g(He, null, {
        default: i(() => [...v[4] || (v[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", $p, [
        e("div", Cp, [
          g(ts, null, {
            default: i(() => [...v[5] || (v[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", xp, [
            (s(), o(G, null, ee(d, (p) => e("label", {
              key: p.value,
              class: oe(["conflict-option", { active: t.conflictMode === p.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: p.value,
                checked: t.conflictMode === p.value,
                onChange: (m) => a("update:conflictMode", p.value)
              }, null, 40, Sp),
              e("div", Ip, [
                e("span", Ep, n(p.label), 1),
                e("span", Mp, n(p.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", zp, [
          g(ts, null, {
            default: i(() => [...v[6] || (v[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Tp, [
            g(at, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(ft, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (p) => a("update:includeWorkflows", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(at, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(ft, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (p) => a("update:includeModels", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(at, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(ft, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (p) => a("update:includeNodes", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(at, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(ft, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (p) => a("update:includeGitHistory", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Dp = /* @__PURE__ */ Q(Lp, [["__scopeId", "data-v-0ec212b0"]]), Rp = {
  key: 0,
  class: "import-empty"
}, Np = { class: "import-help" }, Pp = {
  key: 1,
  class: "import-configure"
}, Up = { class: "selected-file-bar" }, Bp = { class: "file-bar-content" }, Op = { class: "file-bar-info" }, Fp = { class: "file-bar-name" }, Vp = { class: "file-bar-size" }, Ap = { class: "import-actions" }, Wp = {
  key: 2,
  class: "import-progress"
}, Gp = { class: "progress-content" }, jp = { class: "progress-info" }, Hp = { class: "progress-title" }, Kp = { class: "progress-detail" }, qp = { class: "progress-bar" }, Yp = { class: "progress-status" }, Xp = {
  key: 3,
  class: "import-complete"
}, Qp = { class: "complete-message" }, Zp = { class: "complete-title" }, Jp = { class: "complete-details" }, eh = { class: "complete-actions" }, th = /* @__PURE__ */ X({
  __name: "ImportSection",
  setup(t) {
    const r = _(null), a = _(!1), d = _(!1), f = _(!1), v = _(""), p = _({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = _({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = _({
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
    }), u = U(() => p.value.includeWorkflows || p.value.includeModels || p.value.includeNodes || p.value.includeGitHistory);
    function b(S) {
      r.value = S;
    }
    function h() {
      r.value = null, d.value = !1, f.value = !1, v.value = "";
    }
    function k() {
      h(), a.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (r.value) {
        a.value = !0, d.value = !1;
        try {
          const S = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const y of S)
            m.value = y, await new Promise((E) => setTimeout(E, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((y) => setTimeout(y, 500)), f.value = !0, v.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (S) {
          f.value = !1, v.value = S instanceof Error ? S.message : "Unknown error occurred during import";
        } finally {
          a.value = !1, d.value = !0;
        }
      }
    }
    function z(S) {
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (S, y) => (s(), I(We, null, {
      header: i(() => [
        g(Ge, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !r.value && !a.value ? (s(), o("div", Rp, [
          g(Gg, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Np, [
            g(He, null, {
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
        ])) : r.value && !a.value && !d.value ? (s(), o("div", Pp, [
          e("div", Up, [
            e("div", Bp, [
              y[7] || (y[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Op, [
                e("div", Fp, n(r.value.name), 1),
                e("div", Vp, n(z(r.value.size)), 1)
              ])
            ]),
            g(te, {
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: i(() => [...y[8] || (y[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(bp, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(Dp, {
            "conflict-mode": p.value.conflictMode,
            "onUpdate:conflictMode": y[0] || (y[0] = (E) => p.value.conflictMode = E),
            "include-workflows": p.value.includeWorkflows,
            "onUpdate:includeWorkflows": y[1] || (y[1] = (E) => p.value.includeWorkflows = E),
            "include-models": p.value.includeModels,
            "onUpdate:includeModels": y[2] || (y[2] = (E) => p.value.includeModels = E),
            "include-nodes": p.value.includeNodes,
            "onUpdate:includeNodes": y[3] || (y[3] = (E) => p.value.includeNodes = E),
            "include-git-history": p.value.includeGitHistory,
            "onUpdate:includeGitHistory": y[4] || (y[4] = (E) => p.value.includeGitHistory = E)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !p.value.includeModels && l.value.models.length > 0 ? (s(), I(ot, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Ap, [
            g(te, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
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
            g(te, {
              variant: "secondary",
              size: "md",
              onClick: h
            }, {
              default: i(() => [...y[10] || (y[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : a.value ? (s(), o("div", Wp, [
          e("div", Gp, [
            y[11] || (y[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", jp, [
              e("div", Hp, n(m.value.message), 1),
              e("div", Kp, n(m.value.detail), 1)
            ])
          ]),
          e("div", qp, [
            e("div", {
              class: "progress-bar-fill",
              style: nt({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Yp, n(m.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", Xp, [
          e("div", {
            class: oe(["complete-icon", f.value ? "success" : "error"])
          }, n(f.value ? "✓" : "✕"), 3),
          e("div", Qp, [
            e("div", Zp, n(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Jp, n(v.value), 1)
          ]),
          e("div", eh, [
            g(te, {
              variant: "primary",
              size: "md",
              onClick: k
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
}), sh = /* @__PURE__ */ Q(th, [["__scopeId", "data-v-18e18eb5"]]), oh = { class: "header-info" }, ah = { class: "commit-hash" }, nh = {
  key: 0,
  class: "commit-refs"
}, lh = { class: "commit-message" }, ih = { class: "commit-date" }, rh = {
  key: 0,
  class: "loading"
}, dh = {
  key: 1,
  class: "changes-section"
}, ch = { class: "stats-row" }, uh = { class: "stat" }, mh = { class: "stat insertions" }, vh = { class: "stat deletions" }, fh = {
  key: 0,
  class: "change-group"
}, gh = {
  key: 1,
  class: "change-group"
}, ph = {
  key: 0,
  class: "version"
}, hh = {
  key: 2,
  class: "change-group"
}, yh = { class: "change-item" }, wh = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: a } = Ne(), d = _(null), f = _(!0), v = U(() => {
      if (!d.value) return !1;
      const m = d.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), p = U(() => {
      if (!d.value) return !1;
      const m = d.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Le(async () => {
      try {
        d.value = await a(r.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, l) => (s(), I(lt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (u) => m.$emit("close"))
    }, {
      header: i(() => {
        var u, b, h, k;
        return [
          e("div", oh, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", ah, n(((u = d.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (k = (h = d.value) == null ? void 0 : h.refs) != null && k.length ? (s(), o("span", nh, [
              (s(!0), o(G, null, ee(d.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, n($), 1))), 128))
            ])) : c("", !0)
          ]),
          g(de, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = ($) => m.$emit("close"))
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
          e("div", lh, n(((u = d.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", ih, n(((b = d.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", rh, "Loading details...")) : d.value ? (s(), o("div", dh, [
            e("div", ch, [
              e("span", uh, n(d.value.stats.files_changed) + " files", 1),
              e("span", mh, "+" + n(d.value.stats.insertions), 1),
              e("span", vh, "-" + n(d.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", fh, [
              g(Nt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, ee(d.value.changes.workflows.added, (h) => (s(), o("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(G, null, ee(d.value.changes.workflows.modified, (h) => (s(), o("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(G, null, ee(d.value.changes.workflows.deleted, (h) => (s(), o("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h), 1)
              ]))), 128))
            ])) : c("", !0),
            p.value ? (s(), o("div", gh, [
              g(Nt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, ee(d.value.changes.nodes.added, (h) => (s(), o("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h.name), 1),
                h.version ? (s(), o("span", ph, "(" + n(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(G, null, ee(d.value.changes.nodes.removed, (h) => (s(), o("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", hh, [
              g(Nt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", yh, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, n(d.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        g(de, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(de, {
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
}), kh = /* @__PURE__ */ Q(wh, [["__scopeId", "data-v-d256ff6d"]]), bh = { class: "dialog-message" }, _h = {
  key: 0,
  class: "dialog-details"
}, $h = {
  key: 1,
  class: "dialog-warning"
}, Ch = /* @__PURE__ */ X({
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
    return (r, a) => (s(), I(lt, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (d) => r.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", bh, n(t.message), 1),
        t.details && t.details.length ? (s(), o("div", _h, [
          (s(!0), o(G, null, ee(t.details, (d, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + n(d), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", $h, [
          a[4] || (a[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + n(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        g(de, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (d) => r.$emit("cancel"))
        }, {
          default: i(() => [
            w(n(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), I(de, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (d) => r.$emit("secondary"))
        }, {
          default: i(() => [
            w(n(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(de, {
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
}), xh = /* @__PURE__ */ Q(Ch, [["__scopeId", "data-v-3670b9f5"]]), Sh = { class: "base-textarea-wrapper" }, Ih = ["value", "rows", "placeholder", "disabled", "maxlength"], Eh = {
  key: 0,
  class: "base-textarea-count"
}, Mh = /* @__PURE__ */ X({
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
    return (r, a) => (s(), o("div", Sh, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          a[1] || (a[1] = ct(ze((d) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = ct(ze((d) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Ih),
      t.showCharCount && t.maxLength ? (s(), o("div", Eh, n(t.modelValue.length) + " / " + n(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ Q(Mh, [["__scopeId", "data-v-5516e6fc"]]), zh = ["checked", "disabled"], Th = { class: "base-checkbox-box" }, Lh = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Dh = {
  key: 0,
  class: "base-checkbox-label"
}, Rh = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", {
      class: oe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked))
      }, null, 40, zh),
      e("span", Th, [
        t.modelValue ? (s(), o("svg", Lh, [...a[1] || (a[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (s(), o("span", Dh, [
        pe(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), gs = /* @__PURE__ */ Q(Rh, [["__scopeId", "data-v-bf17c831"]]), Nh = { class: "popover-header" }, Ph = { class: "popover-body" }, Uh = {
  key: 0,
  class: "changes-summary"
}, Bh = {
  key: 0,
  class: "change-item"
}, Oh = {
  key: 1,
  class: "change-item"
}, Fh = {
  key: 2,
  class: "change-item"
}, Vh = {
  key: 3,
  class: "change-item"
}, Ah = {
  key: 4,
  class: "change-item"
}, Wh = {
  key: 1,
  class: "no-changes"
}, Gh = {
  key: 2,
  class: "loading"
}, jh = {
  key: 3,
  class: "issues-error"
}, Hh = { class: "error-header" }, Kh = { class: "error-title" }, qh = { class: "issues-list" }, Yh = { class: "message-section" }, Xh = { class: "popover-footer" }, Qh = {
  key: 1,
  class: "commit-popover"
}, Zh = { class: "popover-header" }, Jh = { class: "popover-body" }, e1 = {
  key: 0,
  class: "changes-summary"
}, t1 = {
  key: 0,
  class: "change-item"
}, s1 = {
  key: 1,
  class: "change-item"
}, o1 = {
  key: 2,
  class: "change-item"
}, a1 = {
  key: 3,
  class: "change-item"
}, n1 = {
  key: 4,
  class: "change-item"
}, l1 = {
  key: 1,
  class: "no-changes"
}, i1 = {
  key: 2,
  class: "loading"
}, r1 = {
  key: 3,
  class: "issues-error"
}, d1 = { class: "error-header" }, c1 = { class: "error-title" }, u1 = { class: "issues-list" }, m1 = { class: "message-section" }, v1 = { class: "popover-footer" }, f1 = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const a = t, d = r, { commit: f } = Ne(), v = _(""), p = _(!1), m = _(!1), l = _(null), u = U(() => {
      if (!a.status) return !1;
      const z = a.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || a.status.has_changes;
    }), b = U(() => {
      var z;
      return (z = a.status) != null && z.workflows.analyzed ? a.status.workflows.analyzed.filter(
        (S) => S.has_issues && (S.sync_state === "new" || S.sync_state === "modified")
      ) : [];
    }), h = U(() => b.value.length > 0), k = U(() => h.value && !m.value);
    async function $() {
      var z, S, y;
      if (!(h.value && !m.value) && !(!u.value || !v.value.trim() || p.value)) {
        p.value = !0, l.value = null;
        try {
          const E = await f(v.value.trim(), m.value);
          E.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((z = E.summary) == null ? void 0 : z.new) || 0} new, ${((S = E.summary) == null ? void 0 : S.modified) || 0} modified, ${((y = E.summary) == null ? void 0 : y.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => d("committed"), 1e3)) : E.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : E.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: E.message || "Commit failed" };
        } catch (E) {
          l.value = { type: "error", message: E instanceof Error ? E.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (z, S) => t.asModal ? (s(), I(Be, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = (y) => d("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Nh, [
            S[11] || (S[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = (y) => d("close"))
            }, [...S[10] || (S[10] = [
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
          e("div", Ph, [
            t.status && u.value ? (s(), o("div", Uh, [
              t.status.workflows.new.length ? (s(), o("div", Bh, [
                S[12] || (S[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Oh, [
                S[13] || (S[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Fh, [
                S[14] || (S[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Vh, [
                S[15] || (S[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Ah, [
                S[16] || (S[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", Wh, " No changes to commit ")) : (s(), o("div", Gh, " Loading... ")),
            h.value ? (s(), o("div", jh, [
              e("div", Hh, [
                S[17] || (S[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Kh, n(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", qh, [
                (s(!0), o(G, null, ee(b.value, (y) => (s(), o("div", {
                  key: y.name,
                  class: "issue-item"
                }, [
                  e("strong", null, n(y.name), 1),
                  w(": " + n(y.issue_summary), 1)
                ]))), 128))
              ]),
              g(gs, {
                modelValue: m.value,
                "onUpdate:modelValue": S[1] || (S[1] = (y) => m.value = y),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...S[18] || (S[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Yh, [
              g(fs, {
                modelValue: v.value,
                "onUpdate:modelValue": S[2] || (S[2] = (y) => v.value = y),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || p.value || k.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: oe(["result", l.value.type])
            }, n(l.value.message), 3)) : c("", !0)
          ]),
          e("div", Xh, [
            g(de, {
              variant: "secondary",
              onClick: S[3] || (S[3] = (y) => d("close"))
            }, {
              default: i(() => [...S[19] || (S[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(de, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !v.value.trim() || p.value || k.value,
              loading: p.value,
              onClick: $
            }, {
              default: i(() => [
                w(n(p.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Qh, [
      e("div", Zh, [
        S[21] || (S[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = (y) => d("close"))
        }, [...S[20] || (S[20] = [
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
      e("div", Jh, [
        t.status && u.value ? (s(), o("div", e1, [
          t.status.workflows.new.length ? (s(), o("div", t1, [
            S[22] || (S[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", s1, [
            S[23] || (S[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", o1, [
            S[24] || (S[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", a1, [
            S[25] || (S[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", n1, [
            S[26] || (S[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", l1, " No changes to commit ")) : (s(), o("div", i1, " Loading... ")),
        h.value ? (s(), o("div", r1, [
          e("div", d1, [
            S[27] || (S[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", c1, n(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", u1, [
            (s(!0), o(G, null, ee(b.value, (y) => (s(), o("div", {
              key: y.name,
              class: "issue-item"
            }, [
              e("strong", null, n(y.name), 1),
              w(": " + n(y.issue_summary), 1)
            ]))), 128))
          ]),
          g(gs, {
            modelValue: m.value,
            "onUpdate:modelValue": S[7] || (S[7] = (y) => m.value = y),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...S[28] || (S[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", m1, [
          g(fs, {
            modelValue: v.value,
            "onUpdate:modelValue": S[8] || (S[8] = (y) => v.value = y),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || p.value || k.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: oe(["result", l.value.type])
        }, n(l.value.message), 3)) : c("", !0)
      ]),
      e("div", v1, [
        g(de, {
          variant: "secondary",
          onClick: S[9] || (S[9] = (y) => d("close"))
        }, {
          default: i(() => [...S[29] || (S[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(de, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !v.value.trim() || p.value || k.value,
          loading: p.value,
          onClick: $
        }, {
          default: i(() => [
            w(n(p.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ls = /* @__PURE__ */ Q(f1, [["__scopeId", "data-v-d92153de"]]), g1 = { class: "modal-header" }, p1 = { class: "modal-body" }, h1 = { class: "switch-message" }, y1 = { class: "switch-details" }, w1 = { class: "modal-actions" }, k1 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), I(Be, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", g1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", p1, [
            e("p", h1, [
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
            e("p", y1, ' Your current work will be preserved. You can switch back to "' + n(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", w1, [
            g(te, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(te, {
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
}), b1 = /* @__PURE__ */ Q(k1, [["__scopeId", "data-v-e9c5253e"]]), _1 = {
  key: 0,
  class: "modal-overlay"
}, $1 = { class: "modal-content" }, C1 = { class: "modal-body" }, x1 = { class: "progress-info" }, S1 = { class: "progress-percentage" }, I1 = { class: "progress-state" }, E1 = { class: "switch-steps" }, M1 = { class: "step-icon" }, z1 = { class: "step-label" }, T1 = /* @__PURE__ */ X({
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
    }), d = U(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), f = U(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], p = v.findIndex((m) => m.state === r.state);
      return v.map((m, l) => {
        let u = "pending", b = "○";
        return l < p ? (u = "completed", b = "✓") : l === p && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (v, p) => (s(), I(Be, { to: "body" }, [
      t.show ? (s(), o("div", _1, [
        e("div", $1, [
          p[1] || (p[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", C1, [
            g(Ts, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", x1, [
              e("div", S1, n(t.progress) + "%", 1),
              e("div", I1, n(a.value), 1)
            ]),
            e("div", E1, [
              (s(!0), o(G, null, ee(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: oe(["switch-step", m.status])
              }, [
                e("span", M1, n(m.icon), 1),
                e("span", z1, n(m.label), 1)
              ], 2))), 128))
            ]),
            p[0] || (p[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), L1 = /* @__PURE__ */ Q(T1, [["__scopeId", "data-v-768a5078"]]), D1 = { class: "modal-header" }, R1 = { class: "modal-body" }, N1 = {
  key: 0,
  class: "node-section"
}, P1 = { class: "node-list" }, U1 = {
  key: 1,
  class: "node-section"
}, B1 = { class: "node-list" }, O1 = { class: "modal-actions" }, F1 = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), I(Be, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", D1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", R1, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", N1, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", P1, [
                (s(!0), o(G, null, ee(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", U1, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", B1, [
                (s(!0), o(G, null, ee(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
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
          e("div", O1, [
            g(te, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(te, {
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
}), V1 = /* @__PURE__ */ Q(F1, [["__scopeId", "data-v-7cad7518"]]), A1 = { class: "wizard-steps" }, W1 = { class: "step-number" }, G1 = {
  key: 0,
  class: "wizard-step"
}, j1 = { class: "form-field" }, H1 = ["placeholder"], K1 = {
  key: 0,
  class: "form-error"
}, q1 = { class: "form-field form-field--checkbox" }, Y1 = { class: "form-checkbox" }, X1 = {
  key: 0,
  class: "form-field"
}, Q1 = ["placeholder"], Z1 = {
  key: 0,
  class: "form-info"
}, J1 = {
  key: 1,
  class: "form-suggestion"
}, ey = {
  key: 2,
  class: "form-error"
}, ty = {
  key: 3,
  class: "form-info"
}, sy = {
  key: 1,
  class: "wizard-step"
}, oy = { class: "form-field" }, ay = { class: "form-field" }, ny = ["value"], ly = { class: "form-field" }, iy = ["disabled"], ry = ["value"], dy = { class: "form-field" }, cy = ["value"], uy = { class: "form-field form-field--checkbox" }, my = { class: "form-checkbox" }, vy = {
  key: 1,
  class: "form-error"
}, Gt = 10, fy = 600 * 1e3, gy = 1800 * 1e3, py = /* @__PURE__ */ X({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {}
  },
  emits: ["complete", "close"],
  setup(t, { emit: r }) {
    const a = t, d = r, {
      initializeWorkspace: f,
      getInitializeProgress: v,
      validatePath: p,
      createEnvironment: m,
      getCreateProgress: l,
      getComfyUIReleases: u
    } = Ne(), b = _(1), h = _(a.defaultPath), k = _(!!a.detectedModelsDir), $ = _(a.detectedModelsDir || ""), z = _(null), S = _(null), y = _(null), E = _(null), O = _("my-new-env"), L = _(Es), B = _("latest"), V = _(zs), F = _(!0), D = _(null), T = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), x = _(!1), C = _(!1), W = _(!1), Y = _({ progress: 0, message: "" }), se = _({ progress: 0, message: "" }), fe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], re = _(0), J = _(null), P = _(0), M = _(null), ae = U(() => {
      var ie, Me;
      const ne = (ie = h.value) == null ? void 0 : ie.trim(), j = !z.value, le = !k.value || !S.value && ((Me = $.value) == null ? void 0 : Me.trim());
      return ne && j && le;
    }), Z = U(() => {
      var ne;
      return (ne = O.value) == null ? void 0 : ne.trim();
    });
    async function ue() {
      var ne;
      if (z.value = null, !!((ne = h.value) != null && ne.trim()))
        try {
          const j = await p({ path: h.value, type: "workspace" });
          j.valid || (z.value = j.error || "Invalid path");
        } catch (j) {
          z.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function xe() {
      var ne;
      if (S.value = null, y.value = null, E.value = null, !!((ne = $.value) != null && ne.trim()))
        try {
          const j = await p({ path: $.value, type: "models" });
          if (j.valid)
            E.value = j.model_count ?? null;
          else if (S.value = j.error || "Invalid path", j.suggestion) {
            y.value = j.suggestion, $.value = j.suggestion, S.value = null;
            const le = await p({ path: j.suggestion, type: "models" });
            le.valid && (E.value = le.model_count ?? null);
          }
        } catch (j) {
          S.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function $e() {
      var ne, j, le;
      if (z.value = null, S.value = null, await ue(), !z.value && !(k.value && ((ne = $.value) != null && ne.trim()) && (await xe(), S.value))) {
        C.value = !0;
        try {
          await f({
            workspace_path: ((j = h.value) == null ? void 0 : j.trim()) || a.defaultPath,
            models_directory: k.value && ((le = $.value) == null ? void 0 : le.trim()) || null
          }), re.value = 0, J.value = Date.now();
          const ie = setInterval(async () => {
            if (J.value && Date.now() - J.value > fy) {
              clearInterval(ie), C.value = !1, z.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Me = await v();
              if (re.value = 0, Me.state === "idle" && C.value) {
                clearInterval(ie), C.value = !1, z.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Y.value = { progress: Me.progress, message: Me.message }, Me.state === "complete" ? (clearInterval(ie), C.value = !1, b.value = 2, ce()) : Me.state === "error" && (clearInterval(ie), C.value = !1, z.value = Me.error || "Workspace creation failed");
            } catch (Me) {
              re.value++, console.warn(`Polling failure ${re.value}/${Gt}:`, Me), re.value >= Gt && (clearInterval(ie), C.value = !1, z.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ie) {
          C.value = !1, z.value = ie instanceof Error ? ie.message : "Failed to create workspace";
        }
      }
    }
    async function et() {
      W.value = !0, D.value = null;
      try {
        const ne = {
          name: O.value.trim() || "my-new-env",
          python_version: L.value,
          comfyui_version: B.value,
          torch_backend: V.value,
          switch_after: F.value
        };
        if ((await m(ne)).status === "started") {
          P.value = 0, M.value = Date.now();
          const le = setInterval(async () => {
            if (M.value && Date.now() - M.value > gy) {
              clearInterval(le), W.value = !1, D.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ie = await l();
              if (P.value = 0, ie.state === "idle" && W.value) {
                clearInterval(le), W.value = !1, D.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              se.value = {
                progress: ie.progress ?? 0,
                message: ie.message,
                phase: ie.phase
              }, ie.state === "complete" ? (clearInterval(le), d("complete", ie.environment_name || ne.name)) : ie.state === "error" && (clearInterval(le), W.value = !1, D.value = ie.error || "Environment creation failed");
            } catch (ie) {
              P.value++, console.warn(`Polling failure ${P.value}/${Gt}:`, ie), P.value >= Gt && (clearInterval(le), W.value = !1, D.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ne) {
        W.value = !1, D.value = ne instanceof Error ? ne.message : "Unknown error";
      }
    }
    async function ce() {
      x.value = !0;
      try {
        T.value = await u();
      } catch (ne) {
        console.error("Failed to load ComfyUI releases:", ne);
      } finally {
        x.value = !1;
      }
    }
    return Le(() => {
      a.detectedModelsDir && ($.value = a.detectedModelsDir);
    }), (ne, j) => (s(), I(lt, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: j[9] || (j[9] = (le) => ne.$emit("close"))
    }, {
      body: i(() => [
        e("div", A1, [
          e("div", {
            class: oe(["step", { active: b.value === 1, complete: b.value > 1 }])
          }, [
            e("span", W1, n(b.value > 1 ? "✓" : "1"), 1),
            j[10] || (j[10] = e("span", { class: "step-label" }, "Workspace", -1))
          ], 2),
          j[12] || (j[12] = e("div", { class: "step-connector" }, null, -1)),
          e("div", {
            class: oe(["step", { active: b.value === 2 }])
          }, [...j[11] || (j[11] = [
            e("span", { class: "step-number" }, "2", -1),
            e("span", { class: "step-label" }, "Environment", -1)
          ])], 2)
        ]),
        b.value === 1 ? (s(), o("div", G1, [
          j[16] || (j[16] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
          e("div", j1, [
            j[13] || (j[13] = e("label", { class: "form-label" }, "Workspace Path", -1)),
            Ae(e("input", {
              "onUpdate:modelValue": j[0] || (j[0] = (le) => h.value = le),
              type: "text",
              class: "form-input",
              placeholder: t.defaultPath,
              onBlur: ue
            }, null, 40, H1), [
              [Rt, h.value]
            ]),
            z.value ? (s(), o("p", K1, n(z.value), 1)) : c("", !0)
          ]),
          e("div", q1, [
            e("label", Y1, [
              Ae(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": j[1] || (j[1] = (le) => k.value = le)
              }, null, 512), [
                [es, k.value]
              ]),
              j[14] || (j[14] = e("span", null, "I have existing ComfyUI models", -1))
            ])
          ]),
          k.value ? (s(), o("div", X1, [
            j[15] || (j[15] = e("label", { class: "form-label" }, "Models Directory", -1)),
            Ae(e("input", {
              "onUpdate:modelValue": j[2] || (j[2] = (le) => $.value = le),
              type: "text",
              class: "form-input",
              placeholder: t.detectedModelsDir || "/path/to/models",
              onBlur: xe
            }, null, 40, Q1), [
              [Rt, $.value]
            ]),
            t.detectedModelsDir && !$.value ? (s(), o("p", Z1, " Detected: " + n(t.detectedModelsDir), 1)) : c("", !0),
            y.value ? (s(), o("p", J1, " Did you mean: " + n(y.value), 1)) : c("", !0),
            S.value ? (s(), o("p", ey, n(S.value), 1)) : c("", !0),
            E.value !== null && !S.value ? (s(), o("p", ty, " Found " + n(E.value) + " model files ", 1)) : c("", !0)
          ])) : c("", !0),
          C.value ? (s(), I(os, {
            key: 1,
            progress: Y.value.progress,
            message: Y.value.message
          }, null, 8, ["progress", "message"])) : c("", !0)
        ])) : c("", !0),
        b.value === 2 ? (s(), o("div", sy, [
          j[22] || (j[22] = e("p", { class: "wizard-intro" }, " Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows. ", -1)),
          e("div", oy, [
            j[17] || (j[17] = e("label", { class: "form-label" }, "Environment Name", -1)),
            Ae(e("input", {
              "onUpdate:modelValue": j[3] || (j[3] = (le) => O.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-new-env"
            }, null, 512), [
              [Rt, O.value]
            ])
          ]),
          e("div", ay, [
            j[18] || (j[18] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ae(e("select", {
              "onUpdate:modelValue": j[4] || (j[4] = (le) => L.value = le),
              class: "form-select"
            }, [
              (s(!0), o(G, null, ee(he(Is), (le) => (s(), o("option", {
                key: le,
                value: le
              }, n(le), 9, ny))), 128))
            ], 512), [
              [kt, L.value]
            ])
          ]),
          e("div", ly, [
            j[19] || (j[19] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ae(e("select", {
              "onUpdate:modelValue": j[5] || (j[5] = (le) => B.value = le),
              class: "form-select",
              disabled: x.value
            }, [
              (s(!0), o(G, null, ee(T.value, (le) => (s(), o("option", {
                key: le.tag_name,
                value: le.tag_name
              }, n(le.name), 9, ry))), 128))
            ], 8, iy), [
              [kt, B.value]
            ])
          ]),
          e("div", dy, [
            j[20] || (j[20] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ae(e("select", {
              "onUpdate:modelValue": j[6] || (j[6] = (le) => V.value = le),
              class: "form-select"
            }, [
              (s(!0), o(G, null, ee(he(Ms), (le) => (s(), o("option", {
                key: le,
                value: le
              }, n(le) + n(le === "auto" ? " (detect GPU)" : ""), 9, cy))), 128))
            ], 512), [
              [kt, V.value]
            ])
          ]),
          e("div", uy, [
            e("label", my, [
              Ae(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": j[7] || (j[7] = (le) => F.value = le),
                checked: ""
              }, null, 512), [
                [es, F.value]
              ]),
              j[21] || (j[21] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ]),
          W.value ? (s(), I(os, {
            key: 0,
            progress: se.value.progress,
            message: se.value.message,
            "current-phase": se.value.phase,
            "show-steps": !0,
            steps: fe
          }, null, 8, ["progress", "message", "current-phase"])) : c("", !0),
          D.value ? (s(), o("div", vy, n(D.value), 1)) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        b.value === 1 ? (s(), I(de, {
          key: 0,
          variant: "primary",
          disabled: !ae.value || C.value,
          onClick: $e
        }, {
          default: i(() => [
            w(n(C.value ? "Creating..." : "Next"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : b.value === 2 ? (s(), o(G, { key: 1 }, [
          g(de, {
            variant: "secondary",
            disabled: W.value,
            onClick: j[8] || (j[8] = (le) => b.value = 1)
          }, {
            default: i(() => [...j[23] || (j[23] = [
              w(" Back ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          g(de, {
            variant: "primary",
            disabled: !Z.value || W.value,
            onClick: et
          }, {
            default: i(() => [
              w(n(W.value ? "Creating..." : "Create & Switch"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 64)) : c("", !0)
      ]),
      _: 1
    }));
  }
}), hy = /* @__PURE__ */ Q(py, [["__scopeId", "data-v-b12a8e4d"]]), yy = { class: "comfygit-panel" }, wy = { class: "panel-header" }, ky = { class: "header-left" }, by = {
  key: 0,
  class: "header-info"
}, _y = { class: "header-actions" }, $y = { class: "env-switcher" }, Cy = {
  key: 0,
  class: "header-info"
}, xy = { class: "branch-name" }, Sy = { class: "panel-main" }, Iy = { class: "sidebar" }, Ey = { class: "sidebar-section" }, My = { class: "sidebar-section" }, zy = { class: "sidebar-section" }, Ty = { class: "content-area" }, Ly = {
  key: 0,
  class: "error-message"
}, Dy = {
  key: 1,
  class: "loading"
}, Ry = { class: "dialog-content env-selector-dialog" }, Ny = { class: "dialog-header" }, Py = { class: "dialog-body" }, Uy = { class: "env-list" }, By = { class: "env-info" }, Oy = { class: "env-name-row" }, Fy = { class: "env-indicator" }, Vy = { class: "env-name" }, Ay = {
  key: 0,
  class: "env-branch"
}, Wy = {
  key: 1,
  class: "current-label"
}, Gy = { class: "env-stats" }, jy = ["onClick"], Hy = { class: "toast-container" }, Ky = { class: "toast-icon" }, qy = { class: "toast-message" }, Yy = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const a = r, {
      getStatus: d,
      getHistory: f,
      getBranches: v,
      checkout: p,
      createBranch: m,
      switchBranch: l,
      deleteBranch: u,
      getEnvironments: b,
      switchEnvironment: h,
      getSwitchProgress: k,
      deleteEnvironment: $,
      syncEnvironmentManually: z,
      getSetupStatus: S
    } = Ne(), y = _s(), E = _(null), O = _([]), L = _([]), B = _([]), V = U(() => B.value.find((A) => A.is_current)), F = _(null), D = _(!1), T = U(() => {
      var A;
      return ((A = F.value) == null ? void 0 : A.state) || "managed";
    }), x = _(!1), C = _(null), W = _(null), Y = _(!1), se = _(null), fe = _(null), re = _(!1), J = _(!1), P = _(""), M = _({ state: "idle", progress: 0, message: "" });
    let ae = null, Z = null;
    const ue = _("status"), xe = _("this-env");
    function $e(A, R) {
      ue.value = A, xe.value = R;
    }
    function et(A) {
      const me = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      me && $e(me.view, me.section);
    }
    function ce() {
      $e("branches", "this-env");
    }
    function ne() {
      a("close"), setTimeout(() => {
        var R;
        const A = document.querySelectorAll("button.comfyui-button");
        for (const me of A)
          if (((R = me.textContent) == null ? void 0 : R.trim()) === "Manager") {
            me.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const j = _(null), le = _(!1), ie = _(!1), Me = _([]);
    let Ct = 0;
    function ke(A, R = "info", me = 3e3) {
      const Ee = ++Ct;
      return Me.value.push({ id: Ee, message: A, type: R }), me > 0 && setTimeout(() => {
        Me.value = Me.value.filter((Fe) => Fe.id !== Ee);
      }, me), Ee;
    }
    function Ke(A) {
      Me.value = Me.value.filter((R) => R.id !== A);
    }
    function xt(A) {
      switch (A) {
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
    const ut = U(() => {
      if (!E.value) return "neutral";
      const A = E.value.workflows, R = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    U(() => E.value ? ut.value === "success" ? "All synced" : ut.value === "warning" ? "Uncommitted changes" : ut.value === "error" ? "Not synced" : "" : "");
    async function Pe() {
      x.value = !0, C.value = null;
      try {
        const [A, R, me, Ee] = await Promise.all([
          d(!0),
          f(),
          v(),
          b()
        ]);
        E.value = A, O.value = R.commits, L.value = me.branches, B.value = Ee, a("statusUpdate", A), se.value && await se.value.loadWorkflows(!0);
      } catch (A) {
        C.value = A instanceof Error ? A.message : "Failed to load status", E.value = null, O.value = [], L.value = [];
      } finally {
        x.value = !1;
      }
    }
    function St(A) {
      W.value = A;
    }
    async function gt(A) {
      var me;
      W.value = null;
      const R = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      j.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((me = A.hash) == null ? void 0 : me.slice(0, 7))}?`,
        details: R ? us() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var Ve;
          j.value = null, tt();
          const Ee = ke(`Checking out ${A.short_hash || ((Ve = A.hash) == null ? void 0 : Ve.slice(0, 7))}...`, "info", 0), Fe = await p(A.hash, R);
          Ke(Ee), Fe.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Fe.message || "Checkout failed", "error");
        }
      };
    }
    async function It(A) {
      const R = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      j.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${A}"?`,
        details: R ? us() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          j.value = null, tt();
          const me = ke(`Switching to ${A}...`, "info", 0), Ee = await l(A, R);
          Ke(me), Ee.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Ee.message || "Branch switch failed", "error");
        }
      };
    }
    async function q(A) {
      const R = ke(`Creating branch ${A}...`, "info", 0), me = await m(A);
      Ke(R), me.status === "success" ? (ke(`Branch "${A}" created`, "success"), await Pe()) : ke(me.message || "Failed to create branch", "error");
    }
    async function be(A, R = !1) {
      const me = async (Ee) => {
        var Ve;
        const Fe = ke(`Deleting branch ${A}...`, "info", 0);
        try {
          const st = await u(A, Ee);
          Ke(Fe), st.status === "success" ? (ke(`Branch "${A}" deleted`, "success"), await Pe()) : (Ve = st.message) != null && Ve.includes("not fully merged") ? j.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${A}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              j.value = null, await me(!0);
            }
          } : ke(st.message || "Failed to delete branch", "error");
        } catch (st) {
          Ke(Fe);
          const Et = st instanceof Error ? st.message : "Failed to delete branch";
          Et.includes("not fully merged") ? j.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${A}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              j.value = null, await me(!0);
            }
          } : ke(Et, "error");
        }
      };
      j.value = {
        title: "Delete Branch",
        message: `Delete branch "${A}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          j.value = null, await me(R);
        }
      };
    }
    async function De(A) {
      W.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const me = ke(`Creating branch ${R}...`, "info", 0), Ee = await m(R, A.hash);
        Ke(me), Ee.status === "success" ? (ke(`Branch "${R}" created from ${A.short_hash}`, "success"), await Pe()) : ke(Ee.message || "Failed to create branch", "error");
      }
    }
    function tt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function pt() {
      j.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var A;
          j.value = null, tt(), ke("Restarting environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Xt() {
      j.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var A;
          j.value = null, ke("Stopping environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function H(A) {
      Y.value = !1, P.value = A, re.value = !0;
    }
    async function N() {
      re.value = !1, J.value = !0, tt(), M.value = {
        progress: 10,
        state: K(10),
        message: ge(10)
      };
      try {
        await h(P.value), Re(), mt();
      } catch (A) {
        Oe(), J.value = !1, ke(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), M.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function K(A) {
      return A >= 100 ? "complete" : A >= 80 ? "validating" : A >= 60 ? "starting" : A >= 30 ? "syncing" : "preparing";
    }
    function ge(A) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[K(A)] || "";
    }
    function Re() {
      if (Z) return;
      let A = 10;
      const R = 60, me = 5e3, Ee = 100, Fe = (R - A) / (me / Ee);
      Z = window.setInterval(() => {
        if (A += Fe, A >= R && (A = R, Oe()), M.value.progress < R) {
          const Ve = Math.floor(A);
          M.value = {
            progress: Ve,
            state: K(Ve),
            message: ge(Ve)
          };
        }
      }, Ee);
    }
    function Oe() {
      Z && (clearInterval(Z), Z = null);
    }
    function mt() {
      ae || (ae = window.setInterval(async () => {
        try {
          let A = await y.getStatus();
          if ((!A || A.state === "idle") && (A = await k()), !A)
            return;
          const R = A.progress || 0;
          R >= 60 && Oe();
          const me = Math.max(R, M.value.progress), Ee = A.state && A.state !== "idle" && A.state !== "unknown", Fe = Ee ? A.state : K(me), Ve = Ee && A.message || ge(me);
          M.value = {
            state: Fe,
            progress: me,
            message: Ve
          }, A.state === "complete" ? (Oe(), ht(), J.value = !1, ke(`✓ Switched to ${P.value}`, "success"), await Pe(), P.value = "") : A.state === "rolled_back" ? (Oe(), ht(), J.value = !1, ke("Switch failed, restored previous environment", "warning"), P.value = "") : A.state === "critical_failure" && (Oe(), ht(), J.value = !1, ke(`Critical error during switch: ${A.message}`, "error"), P.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
        }
      }, 1e3));
    }
    function ht() {
      Oe(), ae && (clearInterval(ae), ae = null);
    }
    function Ot() {
      re.value = !1, P.value = "";
    }
    async function Ft() {
      le.value = !1, await Pe(), ke("✓ Changes committed", "success");
    }
    async function Bs() {
      ie.value = !1;
      const A = ke("Syncing environment...", "info", 0);
      try {
        const R = await z("skip", !0);
        if (Ke(A), R.status === "success") {
          const me = [];
          R.nodes_installed.length && me.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && me.push(`${R.nodes_removed.length} removed`);
          const Ee = me.length ? `: ${me.join(", ")}` : "";
          ke(`✓ Environment synced${Ee}`, "success"), await Pe();
        } else {
          const me = R.errors.length ? R.errors.join("; ") : R.message;
          ke(`Sync failed: ${me}`, "error");
        }
      } catch (R) {
        Ke(A), ke(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function Os(A, R) {
      ke(`Environment '${A}' created`, "success"), await Pe(), fe.value && await fe.value.loadEnvironments(), R && await H(A);
    }
    async function Fs(A) {
      var R;
      if (((R = V.value) == null ? void 0 : R.name) === A) {
        ke("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      j.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${A}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          j.value = null;
          try {
            const me = await $(A);
            me.status === "success" ? (ke(`Environment "${A}" deleted`, "success"), await Pe(), fe.value && await fe.value.loadEnvironments()) : ke(me.message || "Failed to delete environment", "error");
          } catch (me) {
            ke(`Error deleting environment: ${me instanceof Error ? me.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Vs(A) {
      D.value = !1;
      try {
        F.value = await S();
      } catch {
      }
      await H(A);
    }
    function As() {
      D.value = !1, a("close");
    }
    function Ws() {
      $e("environments", "all-envs"), setTimeout(() => {
        var A;
        (A = fe.value) == null || A.openCreateModal();
      }, 100);
    }
    function us() {
      if (!E.value) return [];
      const A = [], R = E.value.workflows;
      return R.new.length && A.push(`${R.new.length} new workflow(s)`), R.modified.length && A.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && A.push(`${R.deleted.length} deleted workflow(s)`), A;
    }
    return Le(async () => {
      try {
        if (F.value = await S(), F.value.state === "no_workspace") {
          D.value = !0;
          return;
        }
      } catch (A) {
        console.warn("Setup status check failed, proceeding normally:", A);
      }
      await Pe();
    }), (A, R) => {
      var me, Ee, Fe, Ve, st, Et;
      return s(), o("div", yy, [
        e("div", wy, [
          e("div", ky, [
            R[29] || (R[29] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (s(), o("div", by)) : c("", !0)
          ]),
          e("div", _y, [
            e("button", {
              class: oe(["icon-btn", { spinning: x.value }]),
              onClick: Pe,
              title: "Refresh"
            }, [...R[30] || (R[30] = [
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
              onClick: R[0] || (R[0] = (ve) => a("close")),
              title: "Close"
            }, [...R[31] || (R[31] = [
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
        e("div", $y, [
          e("div", { class: "env-switcher-header" }, [
            R[32] || (R[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: pt
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Xt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[1] || (R[1] = (ve) => $e("environments", "all-envs"))
          }, [
            E.value ? (s(), o("div", Cy, [
              e("span", null, n(((me = V.value) == null ? void 0 : me.name) || ((Ee = E.value) == null ? void 0 : Ee.environment) || "Loading..."), 1),
              e("span", xy, "(" + n(E.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            R[33] || (R[33] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Sy, [
          e("div", Iy, [
            e("div", Ey, [
              R[34] || (R[34] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "status" && xe.value === "this-env" }]),
                onClick: R[2] || (R[2] = (ve) => $e("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "workflows" }]),
                onClick: R[3] || (R[3] = (ve) => $e("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "models-env" }]),
                onClick: R[4] || (R[4] = (ve) => $e("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "branches" }]),
                onClick: R[5] || (R[5] = (ve) => $e("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "history" }]),
                onClick: R[6] || (R[6] = (ve) => $e("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "nodes" }]),
                onClick: R[7] || (R[7] = (ve) => $e("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "debug-env" }]),
                onClick: R[8] || (R[8] = (ve) => $e("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            R[37] || (R[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", My, [
              R[35] || (R[35] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "environments" }]),
                onClick: R[9] || (R[9] = (ve) => $e("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "model-index" }]),
                onClick: R[10] || (R[10] = (ve) => $e("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "settings" }]),
                onClick: R[11] || (R[11] = (ve) => $e("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "debug-workspace" }]),
                onClick: R[12] || (R[12] = (ve) => $e("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            R[38] || (R[38] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", zy, [
              R[36] || (R[36] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "export" }]),
                onClick: R[13] || (R[13] = (ve) => $e("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "import" }]),
                onClick: R[14] || (R[14] = (ve) => $e("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "remotes" }]),
                onClick: R[15] || (R[15] = (ve) => $e("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Ty, [
            C.value ? (s(), o("div", Ly, n(C.value), 1)) : !E.value && ue.value === "status" ? (s(), o("div", Dy, " Loading status... ")) : (s(), o(G, { key: 2 }, [
              ue.value === "status" ? (s(), I(wn, {
                key: 0,
                status: E.value,
                "setup-state": T.value,
                onSwitchBranch: ce,
                onCommitChanges: R[16] || (R[16] = (ve) => le.value = !0),
                onSyncEnvironment: R[17] || (R[17] = (ve) => ie.value = !0),
                onViewWorkflows: R[18] || (R[18] = (ve) => $e("workflows", "this-env")),
                onViewHistory: R[19] || (R[19] = (ve) => $e("history", "this-env")),
                onViewDebug: R[20] || (R[20] = (ve) => $e("debug-env", "this-env")),
                onStartSetup: R[21] || (R[21] = (ve) => D.value = !0),
                onViewEnvironments: R[22] || (R[22] = (ve) => $e("environments", "all-envs")),
                onCreateEnvironment: Ws
              }, null, 8, ["status", "setup-state"])) : ue.value === "workflows" ? (s(), I(ju, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: se,
                onRefresh: Pe
              }, null, 512)) : ue.value === "models-env" ? (s(), I(Im, {
                key: 2,
                onNavigate: et
              })) : ue.value === "branches" ? (s(), I(Rn, {
                key: 3,
                branches: L.value,
                current: ((Fe = E.value) == null ? void 0 : Fe.branch) || null,
                onSwitch: It,
                onCreate: q,
                onDelete: be
              }, null, 8, ["branches", "current"])) : ue.value === "history" ? (s(), I(jn, {
                key: 4,
                commits: O.value,
                onSelect: St,
                onCheckout: gt
              }, null, 8, ["commits"])) : ue.value === "nodes" ? (s(), I(gv, {
                key: 5,
                onOpenNodeManager: ne
              })) : ue.value === "debug-env" ? (s(), I(gf, { key: 6 })) : ue.value === "environments" ? (s(), I(yg, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: fe,
                onSwitch: H,
                onCreated: Os,
                onDelete: Fs
              }, null, 512)) : ue.value === "model-index" ? (s(), I(Km, {
                key: 8,
                onRefresh: Pe
              })) : ue.value === "settings" ? (s(), I(uf, { key: 9 })) : ue.value === "debug-workspace" ? (s(), I(vf, { key: 10 })) : ue.value === "export" ? (s(), I(Eg, { key: 11 })) : ue.value === "import" ? (s(), I(sh, { key: 12 })) : ue.value === "remotes" ? (s(), I(jv, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        W.value ? (s(), I(kh, {
          key: 0,
          commit: W.value,
          onClose: R[23] || (R[23] = (ve) => W.value = null),
          onCheckout: gt,
          onCreateBranch: De
        }, null, 8, ["commit"])) : c("", !0),
        j.value ? (s(), I(xh, {
          key: 1,
          title: j.value.title,
          message: j.value.message,
          details: j.value.details,
          warning: j.value.warning,
          confirmLabel: j.value.confirmLabel,
          cancelLabel: j.value.cancelLabel,
          secondaryLabel: j.value.secondaryLabel,
          secondaryAction: j.value.secondaryAction,
          destructive: j.value.destructive,
          onConfirm: j.value.onConfirm,
          onCancel: R[24] || (R[24] = (ve) => j.value = null),
          onSecondary: j.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(b1, {
          show: re.value,
          "from-environment": ((Ve = V.value) == null ? void 0 : Ve.name) || "unknown",
          "to-environment": P.value,
          onConfirm: N,
          onClose: Ot
        }, null, 8, ["show", "from-environment", "to-environment"]),
        le.value && E.value ? (s(), I(Ls, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: R[25] || (R[25] = (ve) => le.value = !1),
          onCommitted: Ft
        }, null, 8, ["status"])) : c("", !0),
        ie.value && E.value ? (s(), I(V1, {
          key: 3,
          show: ie.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: Bs,
          onClose: R[26] || (R[26] = (ve) => ie.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(L1, {
          show: J.value,
          state: M.value.state,
          progress: M.value.progress,
          message: M.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Y.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[28] || (R[28] = ze((ve) => Y.value = !1, ["self"]))
        }, [
          e("div", Ry, [
            e("div", Ny, [
              R[40] || (R[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[27] || (R[27] = (ve) => Y.value = !1)
              }, [...R[39] || (R[39] = [
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
            e("div", Py, [
              R[41] || (R[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Uy, [
                (s(!0), o(G, null, ee(B.value, (ve) => (s(), o("div", {
                  key: ve.name,
                  class: oe(["env-item", { current: ve.is_current }])
                }, [
                  e("div", By, [
                    e("div", Oy, [
                      e("span", Fy, n(ve.is_current ? "●" : "○"), 1),
                      e("span", Vy, n(ve.name), 1),
                      ve.current_branch ? (s(), o("span", Ay, "(" + n(ve.current_branch) + ")", 1)) : c("", !0),
                      ve.is_current ? (s(), o("span", Wy, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Gy, n(ve.workflow_count) + " workflows • " + n(ve.node_count) + " nodes ", 1)
                  ]),
                  ve.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (sw) => H(ve.name)
                  }, " SWITCH ", 8, jy))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        D.value ? (s(), I(hy, {
          key: 5,
          "default-path": ((st = F.value) == null ? void 0 : st.default_path) || "~/comfygit",
          "detected-models-dir": ((Et = F.value) == null ? void 0 : Et.detected_models_dir) || null,
          onComplete: Vs,
          onClose: As
        }, null, 8, ["default-path", "detected-models-dir"])) : c("", !0),
        e("div", Hy, [
          g(Ks, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(G, null, ee(Me.value, (ve) => (s(), o("div", {
                key: ve.id,
                class: oe(["toast", ve.type])
              }, [
                e("span", Ky, n(xt(ve.type)), 1),
                e("span", qy, n(ve.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Xy = /* @__PURE__ */ Q(Yy, [["__scopeId", "data-v-c43f2cd8"]]), Qy = { class: "item-header" }, Zy = { class: "item-info" }, Jy = { class: "filename" }, e0 = { class: "metadata" }, t0 = { class: "size" }, s0 = {
  key: 0,
  class: "type"
}, o0 = { class: "item-actions" }, a0 = {
  key: 0,
  class: "progress-section"
}, n0 = { class: "progress-bar" }, l0 = { class: "progress-stats" }, i0 = { class: "downloaded" }, r0 = { class: "speed" }, d0 = {
  key: 0,
  class: "eta"
}, c0 = {
  key: 1,
  class: "status-msg paused"
}, u0 = {
  key: 2,
  class: "status-msg queued"
}, m0 = {
  key: 3,
  class: "status-msg completed"
}, v0 = {
  key: 4,
  class: "status-msg failed"
}, f0 = {
  key: 0,
  class: "retries"
}, g0 = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: r }) {
    const a = r;
    function d(p) {
      if (p === 0) return "?";
      const m = p / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(p / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(p) {
      return p === 0 ? "-" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(p) {
      if (p < 60) return `${Math.round(p)}s`;
      const m = Math.floor(p / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (p, m) => (s(), o("div", {
      class: oe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Qy, [
        e("div", Zy, [
          e("div", Jy, n(t.item.filename), 1),
          e("div", e0, [
            e("span", t0, n(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", s0, n(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", o0, [
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
      t.item.status === "downloading" ? (s(), o("div", a0, [
        e("div", n0, [
          e("div", {
            class: "progress-fill",
            style: nt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", l0, [
          e("span", i0, n(d(t.item.downloaded)) + " / " + n(d(t.item.size)), 1),
          e("span", r0, n(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", d0, n(v(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", c0, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", u0, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", m0, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", v0, [
        w(" ✗ " + n(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", f0, "(" + n(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ Q(g0, [["__scopeId", "data-v-2110df65"]]), p0 = { class: "queue-title" }, h0 = { class: "count" }, y0 = { class: "queue-actions" }, w0 = { class: "action-label" }, k0 = {
  key: 0,
  class: "overall-progress"
}, b0 = { class: "progress-bar" }, _0 = {
  key: 0,
  class: "current-mini"
}, $0 = { class: "filename" }, C0 = { class: "speed" }, x0 = {
  key: 1,
  class: "queue-content"
}, S0 = {
  key: 0,
  class: "section"
}, I0 = {
  key: 1,
  class: "section"
}, E0 = { class: "section-header" }, M0 = { class: "section-label paused" }, z0 = { class: "items-list" }, T0 = {
  key: 2,
  class: "section"
}, L0 = { class: "section-header" }, D0 = { class: "section-label" }, R0 = { class: "items-list" }, N0 = {
  key: 3,
  class: "section"
}, P0 = { class: "section-header" }, U0 = { class: "section-label" }, B0 = { class: "items-list" }, O0 = {
  key: 4,
  class: "section"
}, F0 = { class: "section-header" }, V0 = { class: "section-label failed" }, A0 = { class: "items-list" }, W0 = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: r,
      currentDownload: a,
      queuedItems: d,
      completedItems: f,
      failedItems: v,
      pausedItems: p,
      hasItems: m,
      activeCount: l,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: h,
      resumeAllPaused: k,
      removeItem: $,
      clearCompleted: z
    } = Bt(), S = _(!1);
    let y = null;
    qt(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: p.value.length,
        completed: f.value.length
      }),
      (B, V) => {
        y && (clearTimeout(y), y = null);
        const F = B.active === 0 && B.failed === 0 && B.paused === 0 && B.completed > 0, D = V && (V.active > 0 || V.paused > 0);
        F && D && (y = setTimeout(() => {
          z(), y = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const E = U(() => {
      var F;
      if (r.items.length === 0) return 0;
      const B = f.value.length, V = ((F = a.value) == null ? void 0 : F.progress) || 0;
      return Math.round((B + V / 100) / r.items.length * 100);
    });
    function O(B) {
      u(B);
    }
    function L(B) {
      return B === 0 ? "" : `${(B / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (B, V) => (s(), I(Be, { to: "body" }, [
      he(m) ? (s(), o("div", {
        key: 0,
        class: oe(["model-download-queue", { minimized: !S.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: V[0] || (V[0] = (F) => S.value = !S.value)
        }, [
          e("div", p0, [
            V[4] || (V[4] = e("span", { class: "icon" }, "↓", -1)),
            V[5] || (V[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", h0, "(" + n(he(l)) + "/" + n(he(r).items.length) + ")", 1)
          ]),
          e("div", y0, [
            e("span", w0, n(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (s(), o("div", x0, [
          he(a) ? (s(), o("div", S0, [
            V[6] || (V[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(Tt, {
              item: he(a),
              onCancel: V[1] || (V[1] = (F) => O(he(a).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          he(p).length > 0 ? (s(), o("div", I0, [
            e("div", E0, [
              e("span", M0, "Paused (" + n(he(p).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: V[2] || (V[2] = //@ts-ignore
                (...F) => he(k) && he(k)(...F))
              }, "Resume All")
            ]),
            e("div", z0, [
              (s(!0), o(G, null, ee(he(p), (F) => (s(), I(Tt, {
                key: F.id,
                item: F,
                onResume: (D) => he(h)(F.id),
                onRemove: (D) => he($)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          he(d).length > 0 ? (s(), o("div", T0, [
            e("div", L0, [
              e("span", D0, "Queued (" + n(he(d).length) + ")", 1)
            ]),
            e("div", R0, [
              (s(!0), o(G, null, ee(he(d), (F) => (s(), I(Tt, {
                key: F.id,
                item: F,
                onCancel: (D) => O(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          he(f).length > 0 ? (s(), o("div", N0, [
            e("div", P0, [
              e("span", U0, "Completed (" + n(he(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: V[3] || (V[3] = //@ts-ignore
                (...F) => he(z) && he(z)(...F))
              }, "Clear")
            ]),
            e("div", B0, [
              (s(!0), o(G, null, ee(he(f).slice(0, 3), (F) => (s(), I(Tt, {
                key: F.id,
                item: F,
                onRemove: (D) => he($)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          he(v).length > 0 ? (s(), o("div", O0, [
            e("div", F0, [
              e("span", V0, "Failed (" + n(he(v).length) + ")", 1)
            ]),
            e("div", A0, [
              (s(!0), o(G, null, ee(he(v), (F) => (s(), I(Tt, {
                key: F.id,
                item: F,
                onRetry: (D) => he(b)(F.id),
                onRemove: (D) => he($)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", k0, [
          e("div", b0, [
            e("div", {
              class: "progress-fill",
              style: nt({ width: `${E.value}%` })
            }, null, 4)
          ]),
          he(a) ? (s(), o("div", _0, [
            e("span", $0, n(he(a).filename), 1),
            e("span", C0, n(L(he(a).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), G0 = /* @__PURE__ */ Q(W0, [["__scopeId", "data-v-60751cfa"]]), j0 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', H0 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', K0 = {
  comfy: j0,
  phosphor: H0
}, ds = "comfy", Ds = "comfygit-theme";
let vt = null, Rs = ds;
function q0() {
  try {
    const t = localStorage.getItem(Ds);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ds;
}
function Ns(t = ds) {
  vt && vt.remove(), vt = document.createElement("style"), vt.id = "comfygit-theme-styles", vt.setAttribute("data-theme", t), vt.textContent = K0[t], document.head.appendChild(vt), document.body.setAttribute("data-comfygit-theme", t), Rs = t;
  try {
    localStorage.setItem(Ds, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Y0() {
  return Rs;
}
function X0(t) {
  Ns(t);
}
const cs = document.createElement("link");
cs.rel = "stylesheet";
cs.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(cs);
const Q0 = q0();
Ns(Q0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), X0(t);
  },
  getTheme: () => {
    const t = Y0();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ye = null, je = null, Pt = null, Lt = null, ps = null;
const bt = _(null);
let Ps = "managed";
async function jt() {
  var t;
  if (!((t = wt) != null && t.api)) return null;
  try {
    const r = await wt.api.fetchApi("/v2/comfygit/status");
    r.ok && (bt.value = await r.json());
  } catch {
  }
}
async function as() {
  {
    Ps = "no_workspace";
    return;
  }
}
function Z0() {
  if (!bt.value) return !1;
  const t = bt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || bt.value.has_changes;
}
function J0() {
  Ye && Ye.remove(), Ye = document.createElement("div"), Ye.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ye.appendChild(t), Ye.addEventListener("click", (d) => {
    d.target === Ye && Jt();
  });
  const r = (d) => {
    d.key === "Escape" && (Jt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), is({
    render: () => rs(Xy, {
      onClose: Jt,
      onStatusUpdate: async (d) => {
        bt.value = d, Ut(), await as(), ns();
      }
    })
  }).mount(t), document.body.appendChild(Ye);
}
function Jt() {
  Ye && (Ye.remove(), Ye = null);
}
function ew(t) {
  Dt(), je = document.createElement("div"), je.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  je.style.position = "fixed", je.style.top = `${r.bottom + 8}px`, je.style.right = `${window.innerWidth - r.right}px`, je.style.zIndex = "10001";
  const a = (f) => {
    je && !je.contains(f.target) && f.target !== t && (Dt(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const d = (f) => {
    f.key === "Escape" && (Dt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Pt = is({
    render: () => rs(Ls, {
      status: bt.value,
      onClose: Dt,
      onCommitted: () => {
        Dt(), jt().then(Ut);
      }
    })
  }), Pt.mount(je), document.body.appendChild(je);
}
function Dt() {
  Pt && (Pt.unmount(), Pt = null), je && (je.remove(), je = null);
}
function tw() {
  Lt || (Lt = document.createElement("div"), Lt.className = "comfygit-download-queue-root", ps = is({
    render: () => rs(G0)
  }), ps.mount(Lt), document.body.appendChild(Lt), console.log("[ComfyGit] Model download queue mounted"));
}
let qe = null;
function Ut() {
  if (!qe) return;
  const t = qe.querySelector(".commit-indicator");
  t && (t.style.display = Z0() ? "block" : "none");
}
function ns() {
  if (!qe) return;
  const t = Ps !== "managed";
  qe.disabled = t, qe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Us = document.createElement("style");
Us.textContent = `
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
document.head.appendChild(Us);
wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = J0, qe = document.createElement("button"), qe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", qe.innerHTML = 'Commit <span class="commit-indicator"></span>', qe.title = "Quick Commit", qe.onclick = () => ew(qe), t.appendChild(r), t.appendChild(qe), (v = (f = wt.menu) == null ? void 0 : f.settingsGroup) != null && v.element && (wt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), tw();
    const { loadPendingDownloads: a } = Bt();
    a(), await Promise.all([jt(), as()]), Ut(), ns(), setInterval(async () => {
      await Promise.all([jt(), as()]), Ut(), ns();
    }, 3e4);
    const d = wt.api;
    if (d) {
      let p = function() {
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
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => p(), u.appendChild(h);
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
        console.log(`[ComfyGit] Workflow ${b}: ${h}`), await jt(), Ut();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      d.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), p()) : m()), l = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
